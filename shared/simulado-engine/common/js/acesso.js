// ==========================================
// Arquivo: acesso.js
// Descrição: Papéis, liberação de acesso, vouchers e turmas.
//
//            Separado do store.js de propósito: aquele cuida do histórico de
//            provas, este cuida de quem pode entrar e com que perfil. São
//            assuntos com regras de segurança diferentes, e misturá-los faria
//            uma mudança em um arriscar o outro.
//
//            Nada aqui decide segurança. Tudo o que este módulo faz é
//            perguntar ao Firestore, e o Firestore responde conforme as regras
//            de firestore.rules. Se alguém contornar este arquivo — e num site
//            estático é trivial contornar —, as regras continuam valendo.
// ==========================================

import { exigirSessao, urlDoSite } from './auth.js';
import { obterDb } from './store.js';

export const LIBERACAO_PATH = 'liberar.html';

// Papel e acesso não mudam no meio da sessão, e o portão os consulta em toda
// página. Guardar por sessão evita uma leitura por navegação.
const cache = new Map();

// ==========================================
// Função: papelDe(uid)
// Descrição: 'admin', 'aluno' ou null quando não há documento. A ausência é
//            tratada como aluno pela interface; o que vale de verdade é a
//            regra, que exige o documento para reconhecer administrador.
// ==========================================
export async function papelDe(uid) {
  if (!uid) return null;

  const chave = `papel:${uid}`;
  if (cache.has(chave)) return cache.get(chave);

  const { db, fs } = await obterDb();
  const snap = await fs.getDoc(fs.doc(db, 'papeis', uid));
  const papel = snap.exists() ? (snap.data().papel || null) : null;

  cache.set(chave, papel);
  return papel;
}

export async function ehAdmin(uid) {
  return (await papelDe(uid)) === 'admin';
}

// ==========================================
// Função: acessoVigente(acesso)
// Descrição: Um documento de liberação só vale se não foi revogado e não
//            venceu. É o critério único: o portão e o painel do administrador
//            usam esta mesma função, para nunca discordarem sobre quem está
//            liberado.
//
//            'revogadoEm' é o modo revogado de quem pertence a uma turma: o
//            documento continua existindo (é ele que guarda a turma), mas o
//            acesso não vale. Para um aluno avulso, revogar apaga o documento.
// ==========================================
export function acessoVigente(acesso) {
  if (!acesso) return false;
  if (acesso.revogadoEm) return false;
  if (acesso.expiraEm && acesso.expiraEm.toMillis() < Date.now()) return false;

  return true;
}

// ==========================================
// Função: acessoDe(uid)
// Descrição: O documento de liberação, ou null. Um acesso vencido ou revogado
//            conta como ausente — a validade é conferida aqui e também precisa
//            ser conferida por quem consome, nunca só na interface.
// ==========================================
export async function acessoDe(uid) {
  if (!uid) return null;

  const chave = `acesso:${uid}`;
  if (cache.has(chave)) return cache.get(chave);

  const { db, fs } = await obterDb();
  const snap = await fs.getDoc(fs.doc(db, 'acessos', uid));

  const documento = snap.exists() ? { id: snap.id, ...snap.data() } : null;
  const acesso = acessoVigente(documento) ? documento : null;

  cache.set(chave, acesso);
  return acesso;
}

// ==========================================
// Função: estaLiberado(uid)
// Descrição: Administrador entra sempre — ele precisa alcançar o painel para
//            liberar os outros, e ficaria trancado do lado de fora se
//            dependesse de voucher.
// ==========================================
export async function estaLiberado(uid) {
  if (await ehAdmin(uid)) return true;
  return Boolean(await acessoDe(uid));
}

// ==========================================
// Função: mensagemDeFalha(erro)
// Descrição: Traduz a falha de leitura para algo acionável.
//
//            'permission-denied' aqui quase sempre significa uma coisa só: as
//            regras novas ainda não foram publicadas no Console, e o Firestore
//            está recusando papeis/ e acessos/, que as regras antigas nem
//            conheciam. Dizer isso poupa uma caçada.
// ==========================================
export function mensagemDeFalha(erro) {
  const codigo = erro && erro.code;

  if (codigo === 'permission-denied') {
    return 'O banco recusou a leitura do seu perfil de acesso. Se as regras novas do Firestore ainda não foram publicadas no Console, é isso: publique firestore.rules e recarregue.';
  }

  if (codigo === 'unavailable' || codigo === 'auth/network-request-failed') {
    return 'Não conseguimos falar com o servidor. Verifique sua conexão e tente novamente.';
  }

  return 'Não foi possível confirmar seu acesso agora. Tente novamente em instantes.';
}

// ==========================================
// Função: exigirAcesso()
// Descrição: O portão completo: sessão E liberação. Substitui exigirSessao()
//            nas páginas que exigem as duas coisas.
//
//            A página de liberação NÃO pode usar esta função — ela precisa de
//            sessão sem liberação, senão o redirecionamento vira um laço.
//
//            Como sempre, isto é conveniência: quem contornar o redirecionamento
//            chega a uma prova que o Firestore se recusa a gravar.
// ==========================================
export async function exigirAcesso() {
  const perfil = await exigirSessao();

  if (await estaLiberado(perfil.uid)) return perfil;

  window.location.replace(urlDoSite(LIBERACAO_PATH));
  return new Promise(() => {});
}

// ==========================================
// Função: esquecerCache(uid)
// Descrição: Depois de resgatar um voucher a resposta guardada está velha.
// ==========================================
export function esquecerCache(uid) {
  cache.delete(`papel:${uid}`);
  cache.delete(`acesso:${uid}`);
}

// ==========================================
// Alfabeto dos vouchers
// Descrição: Sem I, O, 0 e 1, que se confundem quando alguém digita o código
//            de um papel ou de uma mensagem.
// ==========================================
const ALFABETO = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const TAMANHO = 12;

// ==========================================
// Função: gerarCodigo()
// Descrição: crypto.getRandomValues, nunca Math.random(): o código é o único
//            segredo que protege o voucher, e Math.random() é previsível.
//            32^12 é da ordem de 10^18 combinações.
// ==========================================
export function gerarCodigo() {
  const bytes = new Uint8Array(TAMANHO);
  crypto.getRandomValues(bytes);

  let codigo = '';
  for (const b of bytes) codigo += ALFABETO[b % ALFABETO.length];

  return codigo;
}

export function normalizarCodigo(codigo) {
  return String(codigo || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
}

// ==========================================
// Função: lerVoucher(codigo, uid)
// Descrição: Antes de tentar o resgate, dizer o que há de errado com o código.
//            Isto é conveniência de interface: a decisão real está na regra.
//
//            Situações: 'inexistente', 'valido', 'usado' e 'expirado' (uso
//            único ou turma), mais 'jaUsou' e 'cheio', só de turma. 'jaUsou'
//            vem antes de 'cheio': quem já resgatou e foi revogado precisa
//            ouvir isso, não que a turma lotou.
// ==========================================
export async function lerVoucher(codigo, uid = null) {
  const { db, fs } = await obterDb();
  const snap = await fs.getDoc(fs.doc(db, 'vouchers', normalizarCodigo(codigo)));

  if (!snap.exists()) return { situacao: 'inexistente' };

  const dados = snap.data();
  const vencido = Boolean(dados.expiraEm && dados.expiraEm.toMillis() < Date.now());

  if (dados.tipo === 'turma') {
    const usados = dados.usados || {};

    if (uid && uid in usados) return { situacao: 'jaUsou', dados };
    if (vencido) return { situacao: 'expirado', dados };
    if (Object.keys(usados).length >= dados.vagas) return { situacao: 'cheio', dados };

    return { situacao: 'valido', dados };
  }

  if (dados.usado) return { situacao: 'usado', dados };
  if (vencido) return { situacao: 'expirado', dados };

  return { situacao: 'valido', dados };
}

// ==========================================
// Função: resgatarVoucher(uid, codigo)
// Descrição: Devolve { turmaId } — null quando o voucher é de uso único.
//
//            USO ÚNICO: duas escritas encadeadas, ambas validadas por regra.
//            Primeiro o voucher vai de não usado para usado por mim; só então
//            nasce a liberação apontando para ele. A ordem é deliberada: se a
//            segunda falhar, o voucher fica queimado sem liberar ninguém, o
//            que o administrador conserta. O inverso — liberar e não queimar —
//            deixaria o mesmo código valendo para sempre.
//
//            Não é transação porque as duas escritas moram em coleções
//            diferentes com regras que dependem do estado já gravado da outra:
//            a regra do acesso consulta o voucher, e dentro de uma transação
//            ele ainda não estaria marcado.
//
//            TURMA: um lote (writeBatch), tudo ou nada. Aqui a regra é o
//            contrário: cada escrita só passa se a outra estiver no mesmo lote
//            (getAfter/existsAfter). Assim uma falha no meio nunca queima uma
//            vaga sem liberar ninguém — e nunca há "reenviar" para consertar,
//            o que abriria um furo para quem foi revogado.
//
//            O turmaId e a validade do acesso saem do voucher lido agora, e a
//            regra confere os dois de novo contra o voucher no servidor.
// ==========================================
export async function resgatarVoucher(uid, codigo) {
  const limpo = normalizarCodigo(codigo);
  const { db, fs } = await obterDb();
  const refVoucher = fs.doc(db, 'vouchers', limpo);

  const lido = await fs.getDoc(refVoucher);

  if (lido.exists() && lido.data().tipo === 'turma') {
    const dados = lido.data();
    const lote = fs.writeBatch(db);

    // O uid vira CHAVE do mapa: o mesmo aluno não ocupa duas vagas, e a regra
    // só deixa entrar a chave de quem está pedindo. FieldPath em vez de
    // 'usados.<uid>': o caminho pontuado quebraria com um uid que tenha ponto.
    lote.update(refVoucher, new fs.FieldPath('usados', uid), fs.serverTimestamp());

    lote.set(fs.doc(db, 'acessos', uid), {
      origem: 'voucher',
      voucher: limpo,
      turmaId: dados.turmaId,
      expiraEm: dados.acessoExpiraEm ?? null,
      liberadoEm: fs.serverTimestamp()
    });

    await lote.commit();
    esquecerCache(uid);

    return { turmaId: dados.turmaId };
  }

  await fs.updateDoc(refVoucher, {
    usado: true,
    usadoPor: uid,
    usadoEm: fs.serverTimestamp()
  });

  const voucher = await fs.getDoc(refVoucher);

  await fs.setDoc(fs.doc(db, 'acessos', uid), {
    origem: 'voucher',
    voucher: limpo,
    expiraEm: voucher.data().acessoExpiraEm ?? null,
    liberadoEm: fs.serverTimestamp()
  });

  esquecerCache(uid);

  return { turmaId: null };
}

// ==========================================
// Função: lerTurma(turmaId)
// Descrição: O nome da turma, para a tela de boas-vindas. As regras deixam
//            qualquer aluno logado ler uma turma pelo id.
// ==========================================
export async function lerTurma(turmaId) {
  if (!turmaId) return null;

  const { db, fs } = await obterDb();
  const snap = await fs.getDoc(fs.doc(db, 'turmas', turmaId));

  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

// ==========================================
// Solicitações de acesso
// Descrição: o caminho de quem entrou e não recebeu voucher nenhum. O id do
//            documento é o uid de quem pede — cada pessoa tem no máximo uma
//            solicitação, e reenviar sobrescreve em vez de encher a fila do
//            administrador de cópias.
// ==========================================
export async function lerSolicitacao(uid) {
  const { db, fs } = await obterDb();
  const snap = await fs.getDoc(fs.doc(db, 'solicitacoes', uid));

  return snap.exists() ? { uid, ...snap.data() } : null;
}

export async function enviarSolicitacao(uid, { nome, email, mensagem }) {
  const { db, fs } = await obterDb();

  await fs.setDoc(fs.doc(db, 'solicitacoes', uid), {
    nome: String(nome || '').trim().slice(0, 120),
    email: String(email || '').trim().slice(0, 320),
    mensagem: String(mensagem || '').trim().slice(0, 500),
    situacao: 'pendente',
    criadaEm: fs.serverTimestamp()
  });
}

// ==========================================
// Operações do administrador
// Descrição: Daqui para baixo tudo depende de papeis/{uid} dizer 'admin'. As
//            funções não conferem isso: quem confere é a regra, e é ela que
//            vale. Chamar estas funções sem ser administrador falha no
//            Firestore, como deve.
// ==========================================

// ==========================================
// Função: listarAlunos(opcoes)
// Descrição: Página da lista de cadastrados, do acesso mais recente para o
//            mais antigo. Pagina por cursor para não puxar a base inteira.
//
//            Com `filtro` (uma função aluno => boolean), lê páginas maiores até
//            juntar `limite` alunos que passam. Sem isso, o filtro "Avulsos"
//            devolveria páginas quase vazias quando a maioria dos cadastrados
//            estivesse em turmas, e o botão "Carregar mais" viraria uma
//            gincana. `maxLidos` limita quantos documentos uma chamada pode
//            ler: o filtro é feito aqui no navegador, e uma base grande com
//            poucos avulsos leria tudo a cada clique.
// ==========================================
export async function listarAlunos({ limite = 25, cursor = null, filtro = null, maxLidos = 300 } = {}) {
  const { db, fs } = await obterDb();

  const tamanhoDaPagina = filtro ? 50 : limite;
  const itens = [];

  let apos = cursor;
  let ultimo = null;
  let esgotou = false;
  let lidos = 0;

  while (itens.length < limite) {
    const restricoes = [fs.orderBy('ultimoAcessoEm', 'desc'), fs.limit(tamanhoDaPagina)];
    if (apos) restricoes.push(fs.startAfter(apos));

    const pagina = await fs.getDocs(fs.query(fs.collection(db, 'users'), ...restricoes));

    for (const d of pagina.docs) {
      const aluno = { uid: d.id, ...d.data() };
      if (!filtro || filtro(aluno)) itens.push(aluno);
    }

    lidos += pagina.docs.length;
    if (pagina.docs.length) ultimo = pagina.docs[pagina.docs.length - 1];
    apos = ultimo;

    if (pagina.docs.length < tamanhoDaPagina) { esgotou = true; break; }

    // Sem filtro, uma página basta; com filtro, para no teto de leitura.
    if (!filtro || lidos >= maxLidos) break;
  }

  return { itens, proximoCursor: esgotou ? null : ultimo };
}

// ==========================================
// Função: alunosPorUid(uids)
// Descrição: Os cadastros de um grupo conhecido de alunos — os membros de uma
//            turma. Lê cada users/{uid} em paralelo: uma turma tem dezenas de
//            alunos, não milhares, e assim não depende de o aluno estar na
//            página que a lista geral já carregou.
//
//            Um uid sem cadastro (a conta foi apagada pelo próprio aluno, como
//            a LGPD garante) volta marcado como `removido`, para a interface
//            mostrar a linha em vez de fazê-la sumir da turma sem explicação.
// ==========================================
export async function alunosPorUid(uids) {
  const { db, fs } = await obterDb();

  const alunos = await Promise.all(uids.map(async uid => {
    const snap = await fs.getDoc(fs.doc(db, 'users', uid));
    return snap.exists() ? { uid, ...snap.data() } : { uid, removido: true };
  }));

  const nome = aluno => (aluno.nomeCompleto || aluno.primeiroNome || aluno.email || '').toLocaleLowerCase('pt-BR');
  return alunos.sort((a, b) => nome(a).localeCompare(nome(b), 'pt-BR'));
}

// ==========================================
// Função: mapaDe(colecao)
// Descrição: Papéis e acessos são poucos e cabem em memória. Lê-los de uma vez
//            evita uma consulta por linha da lista de alunos, que é o jeito
//            fácil de estourar a cota de leitura sem perceber.
// ==========================================
async function mapaDe(colecao) {
  const { db, fs } = await obterDb();
  const paginas = await fs.getDocs(fs.collection(db, colecao));

  const mapa = new Map();
  for (const documento of paginas.docs) mapa.set(documento.id, documento.data());

  return mapa;
}

export const mapaDePapeis = () => mapaDe('papeis');
export const mapaDeAcessos = () => mapaDe('acessos');

// ==========================================
// Função: definirPapel(uid, papel, adminUid)
// Descrição: A regra recusa quando uid é o próprio administrador — ninguém
//            edita o próprio papel. Sem isso, uma conta comprometida seria
//            irreversível de dentro do sistema.
// ==========================================
export async function definirPapel(uid, papel, adminUid) {
  const { db, fs } = await obterDb();

  await fs.setDoc(fs.doc(db, 'papeis', uid), {
    papel,
    definidoPor: adminUid,
    definidoEm: fs.serverTimestamp()
  });

  esquecerCache(uid);
}

// ==========================================
// Função: concederAcesso(uid, adminUid, opcoes)
// Descrição: Liberação pela mão do administrador, sem voucher. A origem
//            'migracao' marca quem já usava o site antes do bloqueio existir.
//
//            setDoc substitui o documento inteiro. Por isso a turma, quando o
//            aluno tem uma, precisa ser repassada: sem isso, liberar de novo um
//            acesso vencido tiraria o aluno da turma sem ninguém pedir.
// ==========================================
export async function concederAcesso(uid, adminUid, { origem = 'admin', expiraEm = null, turmaId = null } = {}) {
  const { db, fs } = await obterDb();

  await fs.setDoc(fs.doc(db, 'acessos', uid), {
    origem,
    expiraEm,
    concedidoPor: adminUid,
    liberadoEm: fs.serverTimestamp(),
    ...(turmaId ? { turmaId } : {})
  });

  esquecerCache(uid);
}

// ==========================================
// Função: revogarAcesso(uid, opcoes)
// Descrição: Quem é avulso perde o documento de liberação, como sempre foi.
//            Quem pertence a uma turma fica na turma, marcado como revogado:
//            apagar o documento levaria junto o vínculo, e a turma "perderia"
//            o aluno da lista. O documento que continua existindo também é o
//            que impede o aluno de voltar a entrar com o código da turma — a
//            regra do banco recusa criar um acesso que já existe.
//
//            `acesso` é o documento atual do aluno; sem ele não há como saber
//            se há turma, e a função apaga (o comportamento antigo).
// ==========================================
export async function revogarAcesso(uid, { adminUid = null, acesso = null } = {}) {
  const { db, fs } = await obterDb();
  const ref = fs.doc(db, 'acessos', uid);

  if (acesso && acesso.turmaId) {
    await fs.updateDoc(ref, {
      revogadoEm: fs.serverTimestamp(),
      revogadoPor: adminUid
    });
  } else {
    await fs.deleteDoc(ref);
  }

  esquecerCache(uid);
}

// ==========================================
// Função: reliberarAcesso(uid)
// Descrição: Desfaz o modo revogado de quem está numa turma.
// ==========================================
export async function reliberarAcesso(uid) {
  const { db, fs } = await obterDb();

  await fs.updateDoc(fs.doc(db, 'acessos', uid), {
    revogadoEm: fs.deleteField(),
    revogadoPor: fs.deleteField()
  });

  esquecerCache(uid);
}

// ==========================================
// Turmas
// Descrição: Um grupo de alunos com um código só, que vale para `vagas`
//            pessoas. A turma de um aluno é o campo acessos/{uid}.turmaId.
// ==========================================
export const LIMITE_VAGAS = 500;

// ==========================================
// Função: criarTurma(nome, vagas, adminUid)
// Descrição: A turma e o voucher dela nascem num lote: ou os dois existem, ou
//            nenhum. Sem isso, uma falha no meio deixaria um código apontando
//            para uma turma que não existe.
//
//            O código não vai para o documento da turma — ele é legível por
//            qualquer aluno logado. Mora só no voucher.
// ==========================================
export async function criarTurma(nome, vagas, adminUid) {
  const { db, fs } = await obterDb();

  const limpo = String(nome || '').trim().slice(0, 80);
  const quantidade = Math.trunc(Number(vagas));

  if (!limpo) throw new Error('Informe o nome da turma.');
  if (!(quantidade >= 1 && quantidade <= LIMITE_VAGAS)) {
    throw new Error(`A quantidade de alunos precisa estar entre 1 e ${LIMITE_VAGAS}.`);
  }

  // Mesma cautela de criarVouchers: sobrescrever um voucher válido seria
  // silencioso e caro de descobrir.
  let codigo;
  let refVoucher;
  do {
    codigo = gerarCodigo();
    refVoucher = fs.doc(db, 'vouchers', codigo);
  } while ((await fs.getDoc(refVoucher)).exists());

  const refTurma = fs.doc(fs.collection(db, 'turmas'));
  const lote = fs.writeBatch(db);

  lote.set(refTurma, {
    nome: limpo,
    criadoPor: adminUid,
    criadoEm: fs.serverTimestamp()
  });

  // Sem o campo `usado`, de propósito: com ele, o resgate de uso único
  // consumiria o código da turma inteiro de uma vez.
  lote.set(refVoucher, {
    tipo: 'turma',
    turmaId: refTurma.id,
    vagas: quantidade,
    usados: {},
    acessoExpiraEm: null,
    expiraEm: null,
    criadoPor: adminUid,
    criadoEm: fs.serverTimestamp()
  });

  await lote.commit();

  return { turmaId: refTurma.id, codigo };
}

// ==========================================
// Função: listarTurmas()
// Descrição: Poucas turmas, cabem em memória. A mais recente primeiro.
// ==========================================
export async function listarTurmas() {
  const { db, fs } = await obterDb();
  const paginas = await fs.getDocs(fs.collection(db, 'turmas'));

  const criadaEm = t => (t.criadoEm && t.criadoEm.toMillis ? t.criadoEm.toMillis() : 0);

  return paginas.docs
    .map(d => ({ id: d.id, ...d.data() }))
    .sort((a, b) => criadaEm(b) - criadaEm(a));
}

// ==========================================
// Função: listarVouchersDeTurma()
// Descrição: Os códigos das turmas, para o painel mostrar o de cada uma.
//            where de igualdade em um campo só: o índice é automático.
// ==========================================
export async function listarVouchersDeTurma() {
  const { db, fs } = await obterDb();

  const paginas = await fs.getDocs(
    fs.query(fs.collection(db, 'vouchers'), fs.where('tipo', '==', 'turma'))
  );

  return paginas.docs.map(d => ({ codigo: d.id, ...d.data() }));
}

// ==========================================
// Função: alterarVagas(codigo, vagas)
// Descrição: A regra recusa vagas abaixo de quem já resgatou. Para encerrar as
//            inscrições, basta igualar as vagas ao número de quem já entrou.
// ==========================================
export async function alterarVagas(codigo, vagas) {
  const { db, fs } = await obterDb();
  const quantidade = Math.trunc(Number(vagas));

  if (!(quantidade >= 1 && quantidade <= LIMITE_VAGAS)) {
    throw new Error(`A quantidade precisa estar entre 1 e ${LIMITE_VAGAS}.`);
  }

  await fs.updateDoc(fs.doc(db, 'vouchers', normalizarCodigo(codigo)), { vagas: quantidade });
}

// ==========================================
// Função: colocarEmTurma(uid, turmaId, adminUid, acesso)
// Descrição: Coloca à mão um aluno numa turma. Não consome vaga do código: as
//            vagas limitam só quem resgata o código.
//
//            Se o aluno já tem documento de liberação, só troca a turma —
//            inclusive de quem está revogado, que continua revogado. Se não
//            tem (ainda estava bloqueado), colocar na turma é liberar: nasce o
//            acesso com a turma já dentro.
// ==========================================
export async function colocarEmTurma(uid, turmaId, adminUid, acesso = null) {
  const { db, fs } = await obterDb();
  const ref = fs.doc(db, 'acessos', uid);

  if (acesso) {
    await fs.updateDoc(ref, { turmaId });
  } else {
    await fs.setDoc(ref, {
      origem: 'admin',
      turmaId,
      expiraEm: null,
      concedidoPor: adminUid,
      liberadoEm: fs.serverTimestamp()
    });
  }

  esquecerCache(uid);
}

// ==========================================
// Função: tirarDaTurma(uid)
// Descrição: O aluno volta a ser avulso e mantém o acesso que tinha.
// ==========================================
export async function tirarDaTurma(uid) {
  const { db, fs } = await obterDb();
  await fs.updateDoc(fs.doc(db, 'acessos', uid), { turmaId: null });
  esquecerCache(uid);
}

// ==========================================
// Função: listarSolicitacoes(situacao)
// Descrição: A fila do administrador. Sem índice composto: filtra por situação
//            em memória, porque a fila é curta e um índice a mais é uma peça a
//            mais para manter.
// ==========================================
export async function listarSolicitacoes(situacao = 'pendente') {
  const { db, fs } = await obterDb();
  const paginas = await fs.getDocs(fs.collection(db, 'solicitacoes'));

  return paginas.docs
    .map(d => ({ uid: d.id, ...d.data() }))
    .filter(s => !situacao || s.situacao === situacao);
}

// ==========================================
// Função: decidirSolicitacao(uid, aceita, adminUid)
// Descrição: Aceitar libera o acesso e marca a solicitação; recusar só marca.
//
//            A liberação vem PRIMEIRO. Se a segunda escrita falhar, o aluno
//            fica com acesso e a solicitação pendente na fila — o
//            administrador vê e resolve. Na ordem inversa a solicitação
//            sumiria da fila sem o aluno ter sido liberado, e ninguém ficaria
//            sabendo.
// ==========================================
export async function decidirSolicitacao(uid, aceita, adminUid) {
  if (aceita) {
    await concederAcesso(uid, adminUid, { origem: 'solicitacao' });
  }

  const { db, fs } = await obterDb();

  await fs.updateDoc(fs.doc(db, 'solicitacoes', uid), {
    situacao: aceita ? 'aceita' : 'recusada',
    decididaPor: adminUid,
    decididaEm: fs.serverTimestamp()
  });
}

// ==========================================
// Função: listarVouchers(limite)
// ==========================================
export async function listarVouchers(limite = 100) {
  const { db, fs } = await obterDb();

  const consulta = fs.query(
    fs.collection(db, 'vouchers'),
    fs.orderBy('criadoEm', 'desc'),
    fs.limit(limite)
  );

  const paginas = await fs.getDocs(consulta);
  return paginas.docs.map(d => ({ codigo: d.id, ...d.data() }));
}

// ==========================================
// Função: criarVouchers(quantidade, adminUid, opcoes)
// Descrição: Gera em lote. Cada código é um documento novo; uma colisão faria
//            setDoc sobrescrever um voucher existente, então a criação é
//            condicionada à ausência do documento pela regra e conferida aqui
//            antes de gravar.
// ==========================================
export async function criarVouchers(quantidade, adminUid, { acessoExpiraEm = null, expiraEm = null, nota = '' } = {}) {
  const { db, fs } = await obterDb();
  const criados = [];

  for (let i = 0; i < quantidade; i++) {
    const codigo = gerarCodigo();
    const ref = fs.doc(db, 'vouchers', codigo);

    // 32^12 torna a colisão improvável, mas sobrescrever um voucher válido
    // seria silencioso e caro de descobrir. A leitura extra é barata.
    if ((await fs.getDoc(ref)).exists()) {
      i--;
      continue;
    }

    await fs.setDoc(ref, {
      usado: false,
      usadoPor: null,
      acessoExpiraEm,
      expiraEm,
      nota,
      criadoPor: adminUid,
      criadoEm: fs.serverTimestamp()
    });

    criados.push(codigo);
  }

  return criados;
}

export async function revogarVoucher(codigo) {
  const { db, fs } = await obterDb();
  await fs.deleteDoc(fs.doc(db, 'vouchers', normalizarCodigo(codigo)));
}
