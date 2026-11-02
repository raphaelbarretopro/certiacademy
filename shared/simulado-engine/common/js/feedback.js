// ==========================================
// Arquivo: feedback.js
// Descrição: Avaliações dos alunos (1 a 5 estrelas + texto), da plataforma
//            ('geral') ou de um curso ('AZ-900').
//
//            Nada aqui decide segurança: quem barra envio sem acesso, auto
//            aprovação e destaque indevido é firestore.rules. O id do
//            documento é <uid>_<escopo>, então cada aluno tem no máximo uma
//            avaliação por escopo e reenviar edita em vez de duplicar.
//
//            Toda consulta pública filtra por situacao == 'aprovado': é o que
//            a regra exige para liberar a listagem. A ordenação é feita aqui,
//            em memória, para não depender de índice composto.
// ==========================================

import { obterDb } from './store.js';

export const ESCOPO_GERAL = 'geral';
export const TEXTO_MIN = 20;
export const TEXTO_MAX = 600;

export function idDoFeedback(uid, escopo) {
  return `${uid}_${escopo}`;
}

// "Maria da Silva Souza" -> "Maria S."
export function nomePublicoSugerido(nomeCompleto) {
  const partes = String(nomeCompleto || '').trim().split(/\s+/).filter(Boolean);
  if (partes.length === 0) return '';
  if (partes.length === 1) return partes[0].slice(0, 58);

  const inicial = partes[partes.length - 1].charAt(0).toLocaleUpperCase('pt-BR');
  return `${partes[0].slice(0, 56)} ${inicial}.`;
}

function validar({ estrelas, texto, nomePublico, consentimento }) {
  if (!Number.isInteger(estrelas) || estrelas < 1 || estrelas > 5) {
    throw new Error('Escolha de 1 a 5 estrelas.');
  }
  if (texto.length < TEXTO_MIN || texto.length > TEXTO_MAX) {
    throw new Error(`O comentário precisa ter entre ${TEXTO_MIN} e ${TEXTO_MAX} caracteres.`);
  }
  if (nomePublico.length < 2 || nomePublico.length > 60) {
    throw new Error('Informe o nome que aparecerá junto da avaliação.');
  }
  if (consentimento !== true) {
    throw new Error('Autorize a exibição do seu nome para publicar a avaliação.');
  }
}

function comoLista(paginas) {
  return paginas.docs.map(d => ({ id: d.id, ...d.data() }));
}

function maisRecentePrimeiro(a, b) {
  const ta = a.criadoEm ? a.criadoEm.toMillis() : 0;
  const tb = b.criadoEm ? b.criadoEm.toMillis() : 0;
  return tb - ta;
}

// ==========================================
// Função: lerMeuFeedback(uid, escopo)
// Descrição: A avaliação do próprio aluno em qualquer situação, ou null.
// ==========================================
export async function lerMeuFeedback(uid, escopo) {
  const { db, fs } = await obterDb();
  const snap = await fs.getDoc(fs.doc(db, 'feedbacks', idDoFeedback(uid, escopo)));

  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

// ==========================================
// Função: enviarFeedback(uid, escopo, dados)
// Descrição: Cria a avaliação ou, se já existir, a reescreve. Nos dois casos
//            ela volta para a fila do administrador e perde o destaque.
// ==========================================
export async function enviarFeedback(uid, escopo, { estrelas, texto, nomePublico, consentimento }) {
  const limpo = {
    estrelas: Number(estrelas),
    texto: String(texto || '').trim(),
    nomePublico: String(nomePublico || '').trim().slice(0, 60),
    consentimento: consentimento === true
  };

  validar(limpo);

  const { db, fs } = await obterDb();
  const ref = fs.doc(db, 'feedbacks', idDoFeedback(uid, escopo));
  const existente = await fs.getDoc(ref);

  if (existente.exists()) {
    await fs.updateDoc(ref, {
      ...limpo,
      situacao: 'pendente',
      destaque: false,
      atualizadoEm: fs.serverTimestamp()
    });
    return;
  }

  await fs.setDoc(ref, {
    uid,
    escopo,
    ...limpo,
    situacao: 'pendente',
    destaque: false,
    criadoEm: fs.serverTimestamp()
  });
}

// ==========================================
// Função: apagarMeuFeedback(uid, escopo)
// ==========================================
export async function apagarMeuFeedback(uid, escopo) {
  const { db, fs } = await obterDb();
  await fs.deleteDoc(fs.doc(db, 'feedbacks', idDoFeedback(uid, escopo)));
}

// ==========================================
// Função: listarAprovados({ escopo, apenasDestaques, limite })
// Descrição: O que o público vê. Sem `escopo`, devolve todos. Destaques vêm
//            primeiro e, dentro de cada grupo, os mais recentes.
// ==========================================
export async function listarAprovados({ escopo = null, apenasDestaques = false, limite = 50 } = {}) {
  const { db, fs } = await obterDb();

  const restricoes = [fs.where('situacao', '==', 'aprovado')];
  if (escopo) restricoes.push(fs.where('escopo', '==', escopo));
  if (apenasDestaques) restricoes.push(fs.where('destaque', '==', true));

  const paginas = await fs.getDocs(fs.query(fs.collection(db, 'feedbacks'), ...restricoes));

  return comoLista(paginas)
    .sort((a, b) => Number(b.destaque === true) - Number(a.destaque === true) || maisRecentePrimeiro(a, b))
    .slice(0, limite);
}

// ==========================================
// Função: resumirAvaliacoes(feedbacks)
// Descrição: Média e quantidade, calculadas sobre o que foi listado. Como a
//            listagem é limitada, a média é do conjunto carregado.
// ==========================================
export function resumirAvaliacoes(feedbacks) {
  const total = feedbacks.length;
  if (total === 0) return { total: 0, media: 0 };

  const soma = feedbacks.reduce((acc, f) => acc + f.estrelas, 0);
  return { total, media: Math.round((soma / total) * 10) / 10 };
}

// ==========================================
// Operações do administrador
// Descrição: Dependem de papeis/{uid} dizer 'admin'; quem confere é a regra.
// ==========================================
export async function listarPendentes() {
  const { db, fs } = await obterDb();
  const paginas = await fs.getDocs(fs.query(
    fs.collection(db, 'feedbacks'),
    fs.where('situacao', '==', 'pendente')
  ));

  return comoLista(paginas).sort((a, b) => -maisRecentePrimeiro(a, b));
}

export async function decidirFeedback(id, aprovar, adminUid, { destaque = false } = {}) {
  const { db, fs } = await obterDb();

  await fs.updateDoc(fs.doc(db, 'feedbacks', id), {
    situacao: aprovar ? 'aprovado' : 'rejeitado',
    destaque: aprovar && destaque === true,
    decididoPor: adminUid,
    decididoEm: fs.serverTimestamp()
  });
}

export async function alternarDestaque(id, destaque, adminUid) {
  const { db, fs } = await obterDb();

  await fs.updateDoc(fs.doc(db, 'feedbacks', id), {
    situacao: 'aprovado',
    destaque: destaque === true,
    decididoPor: adminUid,
    decididoEm: fs.serverTimestamp()
  });
}

export async function removerFeedback(id) {
  const { db, fs } = await obterDb();
  await fs.deleteDoc(fs.doc(db, 'feedbacks', id));
}
