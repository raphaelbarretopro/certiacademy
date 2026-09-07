// ==========================================
// Arquivo: acesso.js
// Descrição: Papéis, liberação de acesso e vouchers.
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
// Função: acessoDe(uid)
// Descrição: O documento de liberação, ou null. Um acesso com expiraEm no
//            passado conta como ausente — a validade é conferida aqui e também
//            precisa ser conferida por quem consome, nunca só na interface.
// ==========================================
export async function acessoDe(uid) {
  if (!uid) return null;

  const chave = `acesso:${uid}`;
  if (cache.has(chave)) return cache.get(chave);

  const { db, fs } = await obterDb();
  const snap = await fs.getDoc(fs.doc(db, 'acessos', uid));

  let acesso = snap.exists() ? { id: snap.id, ...snap.data() } : null;

  if (acesso && acesso.expiraEm && acesso.expiraEm.toMillis() < Date.now()) {
    acesso = null;
  }

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
// Função: lerVoucher(codigo)
// Descrição: Antes de tentar o resgate, dizer o que há de errado com o código.
//            Isto é conveniência de interface: a decisão real está na regra.
// ==========================================
export async function lerVoucher(codigo) {
  const { db, fs } = await obterDb();
  const snap = await fs.getDoc(fs.doc(db, 'vouchers', normalizarCodigo(codigo)));

  if (!snap.exists()) return { situacao: 'inexistente' };

  const dados = snap.data();

  if (dados.usado) return { situacao: 'usado', dados };
  if (dados.expiraEm && dados.expiraEm.toMillis() < Date.now()) {
    return { situacao: 'expirado', dados };
  }

  return { situacao: 'valido', dados };
}

// ==========================================
// Função: resgatarVoucher(uid, codigo)
// Descrição: Duas escritas encadeadas, ambas validadas por regra.
//
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
// ==========================================
export async function resgatarVoucher(uid, codigo) {
  const limpo = normalizarCodigo(codigo);
  const { db, fs } = await obterDb();

  await fs.updateDoc(fs.doc(db, 'vouchers', limpo), {
    usado: true,
    usadoPor: uid,
    usadoEm: fs.serverTimestamp()
  });

  const voucher = await fs.getDoc(fs.doc(db, 'vouchers', limpo));

  await fs.setDoc(fs.doc(db, 'acessos', uid), {
    origem: 'voucher',
    voucher: limpo,
    expiraEm: voucher.data().acessoExpiraEm ?? null,
    liberadoEm: fs.serverTimestamp()
  });

  esquecerCache(uid);
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
// ==========================================
export async function listarAlunos({ limite = 25, cursor = null } = {}) {
  const { db, fs } = await obterDb();

  const restricoes = [fs.orderBy('ultimoAcessoEm', 'desc'), fs.limit(limite)];
  if (cursor) restricoes.push(fs.startAfter(cursor));

  const paginas = await fs.getDocs(fs.query(fs.collection(db, 'users'), ...restricoes));

  return {
    itens: paginas.docs.map(d => ({ uid: d.id, ...d.data() })),
    proximoCursor: paginas.docs.length === limite ? paginas.docs[paginas.docs.length - 1] : null
  };
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
// ==========================================
export async function concederAcesso(uid, adminUid, { origem = 'admin', expiraEm = null } = {}) {
  const { db, fs } = await obterDb();

  await fs.setDoc(fs.doc(db, 'acessos', uid), {
    origem,
    expiraEm,
    concedidoPor: adminUid,
    liberadoEm: fs.serverTimestamp()
  });

  esquecerCache(uid);
}

export async function revogarAcesso(uid) {
  const { db, fs } = await obterDb();
  await fs.deleteDoc(fs.doc(db, 'acessos', uid));
  esquecerCache(uid);
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
