// ==========================================
// Arquivo: store.js
// Descrição: Histórico de resultados do aluno no Cloud Firestore.
//
//            Estrutura das coleções:
//              users/{uid}                      -> perfil
//              users/{uid}/resultados/{id}      -> uma prova concluída (imutável)
//              users/{uid}/resumo/agregado      -> médias já calculadas
//
//            O documento de resumo existe para o dashboard custar UMA leitura
//            em vez de uma por prova. O custo migra da leitura, que acontece
//            toda vez que o painel abre, para a escrita, que acontece uma vez
//            por prova concluída.
// ==========================================

import { firebaseConfig, FIREBASE_SDK_VERSION } from './firebase-config.js';
import { obterAuth } from './auth.js';

const SDK_BASE = `https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}`;

// Nota de corte oficial dos exames Microsoft, na escala de 1000 pontos.
export const NOTA_DE_CORTE = 700;

let dbPromise = null;

// ==========================================
// Função: obterDb()
// Descrição: Carrega o SDK do Firestore sob demanda e devolve a instância
// ==========================================
export function obterDb() {
  if (!dbPromise) {
    dbPromise = (async () => {
      const [appModule, firestoreModule] = await Promise.all([
        import(`${SDK_BASE}/firebase-app.js`),
        import(`${SDK_BASE}/firebase-firestore.js`)
      ]);

      // Reaproveita o app que o auth.js já inicializou, quando houver.
      const app = appModule.getApps().length > 0
        ? appModule.getApp()
        : appModule.initializeApp(firebaseConfig);

      return { db: firestoreModule.getFirestore(app), fs: firestoreModule };
    })();
  }

  return dbPromise;
}

// ==========================================
// Função: registrarAcesso(perfil)
// Descrição: Cria ou atualiza o documento do aluno. É uma escrita por sessão,
//            não por prova, então não pesa na cota.
// ==========================================
export async function registrarAcesso(perfil) {
  if (!perfil || !perfil.uid) return;

  const { db, fs } = await obterDb();
  const ref = fs.doc(db, 'users', perfil.uid);

  await fs.setDoc(ref, {
    primeiroNome: perfil.primeiroNome,
    nomeCompleto: perfil.nomeCompleto,
    email: perfil.email,
    fotoUrl: perfil.fotoUrl,
    ultimoAcessoEm: fs.serverTimestamp(),
    criadoEm: fs.serverTimestamp()
  }, { merge: true });
}

// ==========================================
// Função: salvarResultado(perfil, resultado)
// Descrição: Grava a prova concluída e atualiza o agregado, em duas escritas.
//            A gravação nunca deve derrubar a tela de resultado: se falhar, o
//            aluno continua vendo a própria nota e o erro é apenas registrado.
// ==========================================
export async function salvarResultado(perfil, resultado) {
  if (!perfil || !perfil.uid) {
    throw new Error('Sem sessao para gravar o resultado.');
  }

  const { db, fs } = await obterDb();

  const documento = {
    curso: resultado.curso,
    simulado: resultado.simulado,
    simuladoId: `${resultado.curso}/${resultado.simulado}`,
    pontuacao: resultado.pontuacao,
    percentual: resultado.percentual,
    aprovado: resultado.pontuacao >= NOTA_DE_CORTE,
    acertos: resultado.acertos,
    totalAcertosPossiveis: resultado.totalAcertosPossiveis,
    tempoSegundos: resultado.tempoSegundos,
    tempoLimiteSegundos: resultado.tempoLimiteSegundos,
    porDominio: resultado.porDominio,
    versaoBanco: resultado.versaoBanco,
    finalizadoEm: fs.serverTimestamp()
  };

  const colecao = fs.collection(db, 'users', perfil.uid, 'resultados');
  const referencia = await fs.addDoc(colecao, documento);

  await atualizarResumo(fs, db, perfil.uid, documento);

  return referencia.id;
}

// ==========================================
// Função: atualizarResumo()
// Descrição: Mantém o documento agregado que o dashboard lê. Usa transação
//            porque o novo total depende do total anterior, e duas provas
//            terminadas em abas diferentes se sobrescreveriam.
// ==========================================
async function atualizarResumo(fs, db, uid, documento) {
  const ref = fs.doc(db, 'users', uid, 'resumo', 'agregado');

  await fs.runTransaction(db, async transacao => {
    const atual = await transacao.get(ref);
    const base = atual.exists() ? atual.data() : {};

    const totalSimulados = (base.totalSimulados || 0) + 1;
    const somaPontuacao = (base.somaPontuacao || 0) + documento.pontuacao;
    const aprovados = (base.aprovados || 0) + (documento.aprovado ? 1 : 0);
    const somaTempo = (base.somaTempoSegundos || 0) + documento.tempoSegundos;

    // --- por curso ---
    const porCurso = { ...(base.porCurso || {}) };
    const cursoAtual = porCurso[documento.curso] || { n: 0, soma: 0, melhor: 0, aprovados: 0 };

    porCurso[documento.curso] = {
      n: cursoAtual.n + 1,
      soma: cursoAtual.soma + documento.pontuacao,
      melhor: Math.max(cursoAtual.melhor || 0, documento.pontuacao),
      aprovados: (cursoAtual.aprovados || 0) + (documento.aprovado ? 1 : 0),
      ultimaPontuacao: documento.pontuacao
    };

    // --- por dominio ---
    const porDominio = { ...(base.porDominio || {}) };

    for (const [dominio, valores] of Object.entries(documento.porDominio || {})) {
      const anterior = porDominio[dominio] || { pontos: 0, maximo: 0, tentativas: 0 };
      porDominio[dominio] = {
        pontos: anterior.pontos + (valores.pontos || 0),
        maximo: anterior.maximo + (valores.maximo || 0),
        tentativas: anterior.tentativas + 1
      };
    }

    transacao.set(ref, {
      totalSimulados,
      somaPontuacao,
      somaTempoSegundos: somaTempo,
      aprovados,
      mediaPontuacao: Math.round(somaPontuacao / totalSimulados),
      melhorPontuacao: Math.max(base.melhorPontuacao || 0, documento.pontuacao),
      taxaAprovacao: Math.round((aprovados / totalSimulados) * 100),
      tempoMedioSegundos: Math.round(somaTempo / totalSimulados),
      porCurso,
      porDominio,
      atualizadoEm: fs.serverTimestamp()
    });
  });
}

// ==========================================
// Função: lerResumo(uid)
// Descrição: Uma leitura, que alimenta todos os indicadores do dashboard
// ==========================================
export async function lerResumo(uid) {
  const { db, fs } = await obterDb();
  const documento = await fs.getDoc(fs.doc(db, 'users', uid, 'resumo', 'agregado'));

  return documento.exists() ? documento.data() : null;
}

// ==========================================
// Função: lerResultados(uid, opcoes)
// Descrição: Página do histórico, da prova mais recente para a mais antiga.
//            Recebe e devolve cursor para paginar sem reler o que já foi lido.
// ==========================================
export async function lerResultados(uid, { limite = 20, cursor = null } = {}) {
  const { db, fs } = await obterDb();

  const restricoes = [fs.orderBy('finalizadoEm', 'desc'), fs.limit(limite)];
  if (cursor) restricoes.push(fs.startAfter(cursor));

  const consulta = fs.query(fs.collection(db, 'users', uid, 'resultados'), ...restricoes);
  const paginas = await fs.getDocs(consulta);

  const itens = paginas.docs.map(documento => ({ id: documento.id, ...documento.data() }));

  return {
    itens,
    proximoCursor: paginas.docs.length === limite ? paginas.docs[paginas.docs.length - 1] : null
  };
}

// ==========================================
// Função: lerUltimasDoCurso(uid, curso, quantidade)
// Descrição: Base da "prontidão por certificação": a média das últimas
//            tentativas diz mais sobre o preparo atual que a média de tudo
// ==========================================
export async function lerUltimasDoCurso(uid, curso, quantidade = 3) {
  const { db, fs } = await obterDb();

  const consulta = fs.query(
    fs.collection(db, 'users', uid, 'resultados'),
    fs.where('curso', '==', curso),
    fs.orderBy('finalizadoEm', 'desc'),
    fs.limit(quantidade)
  );

  const paginas = await fs.getDocs(consulta);
  return paginas.docs.map(documento => documento.data());
}

// ==========================================
// Função: apagarDadosDoAluno(uid)
// Descrição: Remove a subárvore users/{uid} antes de a conta ser excluída.
//            Chamada pela página de privacidade; sem ela, apagar a conta no
//            Authentication deixaria o histórico órfão no banco.
// ==========================================
export async function apagarDadosDoAluno(uid) {
  const { db, fs } = await obterDb();

  // Os resultados são apagados em lotes, porque a cota de escrita é contada
  // por documento e uma conta antiga pode ter centenas deles.
  let restam = true;

  while (restam) {
    const consulta = fs.query(fs.collection(db, 'users', uid, 'resultados'), fs.limit(300));
    const paginas = await fs.getDocs(consulta);

    if (paginas.empty) {
      restam = false;
      break;
    }

    const lote = fs.writeBatch(db);
    paginas.docs.forEach(documento => lote.delete(documento.ref));
    await lote.commit();

    restam = paginas.docs.length === 300;
  }

  const lote = fs.writeBatch(db);
  lote.delete(fs.doc(db, 'users', uid, 'resumo', 'agregado'));
  lote.delete(fs.doc(db, 'users', uid));
  await lote.commit();
}

// ==========================================
// Função: garantirAuthPronto()
// Descrição: O Firestore recusa as escritas se o token de sessão ainda não
//            estiver disponível. Este atalho evita corrida na primeira carga.
// ==========================================
export async function garantirAuthPronto() {
  const { auth } = await obterAuth();
  return auth.currentUser;
}
