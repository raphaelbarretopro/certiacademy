// Testa a colecao feedbacks de firestore.rules no emulador.
// Rodar: npm install && npm test (nesta pasta). Exige Java e firebase-tools.

import { readFileSync } from 'node:fs';
import { initializeTestEnvironment, assertFails, assertSucceeds } from '@firebase/rules-unit-testing';
import { doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, collection, query, where, serverTimestamp } from 'firebase/firestore';

const env = await initializeTestEnvironment({
  projectId: 'demo-certiacademy',
  firestore: { rules: readFileSync(new URL('../../firestore.rules', import.meta.url), 'utf8') }
});

let falhas = 0;
async function caso(nome, fn) {
  try {
    await fn();
    console.log(`  ok   ${nome}`);
  } catch (erro) {
    falhas++;
    console.log(`  FAIL ${nome}\n       ${String(erro.message).split('\n')[0]}`);
  }
}

// Cenario: ana (liberada, com simulado), bia (sem acesso), caio (liberado, sem
// simulado), dora (acesso revogado), adm (administrador), anonimo.
await env.withSecurityRulesDisabled(async contexto => {
  const db = contexto.firestore();
  await setDoc(doc(db, 'papeis', 'adm'), { papel: 'admin' });
  for (const uid of ['ana', 'caio']) await setDoc(doc(db, 'acessos', uid), { origem: 'admin' });
  await setDoc(doc(db, 'acessos', 'dora'), { origem: 'admin', revogadoEm: new Date() });
  for (const uid of ['ana', 'bia', 'dora']) await setDoc(doc(db, 'users', uid, 'resumo', 'agregado'), { total: 1 });
});

const ana = env.authenticatedContext('ana').firestore();
const bia = env.authenticatedContext('bia').firestore();
const caio = env.authenticatedContext('caio').firestore();
const dora = env.authenticatedContext('dora').firestore();
const adm = env.authenticatedContext('adm').firestore();
const anonimo = env.unauthenticatedContext().firestore();

const valido = (extra = {}) => ({
  uid: 'ana', escopo: 'AZ-900', estrelas: 5,
  texto: 'A plataforma me ajudou muito a passar.', nomePublico: 'Ana S.',
  consentimento: true, situacao: 'pendente', destaque: false,
  criadoEm: serverTimestamp(), ...extra
});
const ref = (db, id) => doc(db, 'feedbacks', id);

console.log('Criar');
await caso('aluno liberado com simulado cria avaliacao pendente', () =>
  assertSucceeds(setDoc(ref(ana, 'ana_AZ-900'), valido())));
await caso('aceita escopo geral', () =>
  assertSucceeds(setDoc(ref(ana, 'ana_geral'), valido({ escopo: 'geral' }))));
await caso('controle: o mesmo documento, sem alteracao, e aceito', async () => {
  await assertSucceeds(setDoc(ref(ana, 'ana_SC-900'), valido({ escopo: 'SC-900' })));
  await assertSucceeds(deleteDoc(ref(ana, 'ana_SC-900')));
});
await caso('barra aluno sem acesso liberado', () =>
  assertFails(setDoc(ref(bia, 'bia_AZ-900'), valido({ uid: 'bia' }))));
await caso('barra aluno sem simulado concluido', () =>
  assertFails(setDoc(ref(caio, 'caio_AZ-900'), valido({ uid: 'caio' }))));
await caso('barra acesso revogado', () =>
  assertFails(setDoc(ref(dora, 'dora_AZ-900'), valido({ uid: 'dora' }))));
await caso('barra anonimo', () =>
  assertFails(setDoc(ref(anonimo, 'ana_SC-900'), valido({ escopo: 'SC-900' }))));
await caso('barra gravar em nome de outro aluno', () =>
  assertFails(setDoc(ref(bia, 'ana_SC-900'), valido({ escopo: 'SC-900' }))));
await caso('barra auto-aprovacao', () =>
  assertFails(setDoc(ref(ana, 'ana_SC-900'), valido({ escopo: 'SC-900', situacao: 'aprovado' }))));
await caso('barra auto-destaque', () =>
  assertFails(setDoc(ref(ana, 'ana_SC-900'), valido({ escopo: 'SC-900', destaque: true }))));
await caso('barra id que nao e <uid>_<escopo>', () =>
  assertFails(setDoc(ref(ana, 'qualquer'), valido({ escopo: 'SC-900' }))));
await caso('barra escopo invalido', () =>
  assertFails(setDoc(ref(ana, 'ana_xyz'), valido({ escopo: 'xyz' }))));
await caso('barra 0 e 6 estrelas', async () => {
  await assertFails(setDoc(ref(ana, 'ana_SC-900'), valido({ escopo: 'SC-900', estrelas: 0 })));
  await assertFails(setDoc(ref(ana, 'ana_SC-900'), valido({ escopo: 'SC-900', estrelas: 6 })));
});
await caso('barra estrelas fracionadas', () =>
  assertFails(setDoc(ref(ana, 'ana_SC-900'), valido({ escopo: 'SC-900', estrelas: 4.5 }))));
await caso('barra texto curto e texto longo', async () => {
  await assertFails(setDoc(ref(ana, 'ana_SC-900'), valido({ escopo: 'SC-900', texto: 'curto' })));
  await assertFails(setDoc(ref(ana, 'ana_SC-900'), valido({ escopo: 'SC-900', texto: 'x'.repeat(601) })));
});
await caso('barra sem consentimento', () =>
  assertFails(setDoc(ref(ana, 'ana_SC-900'), valido({ escopo: 'SC-900', consentimento: false }))));
await caso('barra campo extra', () =>
  assertFails(setDoc(ref(ana, 'ana_SC-900'), valido({ escopo: 'SC-900', admin: true }))));
await caso('barra criadoEm forjado', () =>
  assertFails(setDoc(ref(ana, 'ana_SC-900'), valido({ escopo: 'SC-900', criadoEm: new Date('2020-01-01') }))));

console.log('Leitura');
await caso('anonimo nao le avaliacao pendente', () => assertFails(getDoc(ref(anonimo, 'ana_AZ-900'))));
await caso('dono le a propria pendente', () => assertSucceeds(getDoc(ref(ana, 'ana_AZ-900'))));
await caso('outro aluno nao le pendente alheia', () => assertFails(getDoc(ref(bia, 'ana_AZ-900'))));
await caso('anonimo nao lista pendentes', () =>
  assertFails(getDocs(query(collection(anonimo, 'feedbacks'), where('situacao', '==', 'pendente')))));
await caso('anonimo nao lista sem filtro', () => assertFails(getDocs(collection(anonimo, 'feedbacks'))));

console.log('Moderacao');
await caso('aluno nao aprova a propria', () =>
  assertFails(updateDoc(ref(ana, 'ana_AZ-900'), { situacao: 'aprovado', decididoPor: 'ana', decididoEm: serverTimestamp() })));
await caso('aluno nao destaca a propria', () =>
  assertFails(updateDoc(ref(ana, 'ana_AZ-900'), { destaque: true })));
await caso('admin nao destaca avaliacao rejeitada', () =>
  assertFails(updateDoc(ref(adm, 'ana_AZ-900'), { situacao: 'rejeitado', destaque: true, decididoPor: 'adm', decididoEm: serverTimestamp() })));
await caso('admin nao altera o texto do aluno', () =>
  assertFails(updateDoc(ref(adm, 'ana_AZ-900'), { texto: 'editado pelo admin, texto novo', situacao: 'aprovado', decididoPor: 'adm', decididoEm: serverTimestamp() })));
await caso('admin sem registrar autor e hora e barrado', () =>
  assertFails(updateDoc(ref(adm, 'ana_AZ-900'), { situacao: 'aprovado' })));
await caso('admin aprova e destaca', () =>
  assertSucceeds(updateDoc(ref(adm, 'ana_AZ-900'), { situacao: 'aprovado', destaque: true, decididoPor: 'adm', decididoEm: serverTimestamp() })));
await caso('admin lista pendentes', () =>
  assertSucceeds(getDocs(query(collection(adm, 'feedbacks'), where('situacao', '==', 'pendente')))));

console.log('Publico');
await caso('anonimo le avaliacao aprovada', () => assertSucceeds(getDoc(ref(anonimo, 'ana_AZ-900'))));
await caso('anonimo lista aprovadas por escopo', () =>
  assertSucceeds(getDocs(query(collection(anonimo, 'feedbacks'), where('situacao', '==', 'aprovado'), where('escopo', '==', 'AZ-900')))));
await caso('anonimo lista aprovadas em destaque', () =>
  assertSucceeds(getDocs(query(collection(anonimo, 'feedbacks'), where('situacao', '==', 'aprovado'), where('destaque', '==', true)))));
await caso('anonimo nao escreve', () => assertFails(updateDoc(ref(anonimo, 'ana_AZ-900'), { estrelas: 1 })));

console.log('Edicao pelo aluno');
await caso('editar uma aprovada devolve para a fila e tira o destaque', () =>
  assertSucceeds(updateDoc(ref(ana, 'ana_AZ-900'), {
    estrelas: 4, texto: 'Texto revisado com mais detalhes.', situacao: 'pendente',
    destaque: false, atualizadoEm: serverTimestamp()
  })));
await caso('editar mantendo aprovado e barrado', () =>
  assertFails(updateDoc(ref(ana, 'ana_AZ-900'), {
    estrelas: 5, texto: 'Texto revisado com mais detalhes.', situacao: 'aprovado',
    destaque: false, atualizadoEm: serverTimestamp()
  })));
await caso('aluno nao altera o escopo', () =>
  assertFails(updateDoc(ref(ana, 'ana_AZ-900'), {
    escopo: 'SC-900', situacao: 'pendente', destaque: false, atualizadoEm: serverTimestamp()
  })));
await caso('outro aluno nao edita a avaliacao alheia', () =>
  assertFails(updateDoc(ref(bia, 'ana_AZ-900'), {
    texto: 'Texto de outra pessoa aqui.', situacao: 'pendente', destaque: false, atualizadoEm: serverTimestamp()
  })));

console.log('Exclusao');
await caso('outro aluno nao apaga', () => assertFails(deleteDoc(ref(bia, 'ana_AZ-900'))));
await caso('dono apaga a propria', () => assertSucceeds(deleteDoc(ref(ana, 'ana_AZ-900'))));
await caso('admin apaga qualquer uma', () => assertSucceeds(deleteDoc(ref(adm, 'ana_geral'))));

await env.cleanup();
console.log(falhas ? `\n${falhas} falha(s)` : '\nTodos os testes passaram');
process.exit(falhas ? 1 : 0);
