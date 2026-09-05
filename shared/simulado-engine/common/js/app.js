// ==========================================
// Arquivo: app.js
// Descrição: Bootstrap único dos simulados. Resolve a sessão do aluno antes de
//            montar a prova e só então carrega o motor e o banco de questões.
//
//            Como este é o único ponto de entrada JavaScript de todos os
//            simulados, o portão de login vale para todos eles sem que os HTML
//            precisem mudar - exceto pelo atributo data-requer-sessao no body,
//            que evita o conteúdo piscar antes do redirecionamento.
// ==========================================

import { exigirSessao } from './auth.js';
import { montarBadgeSessao, revelarPagina, mostrarFalhaDeSessao } from './session-ui.js';

const pageUrl = new URL(window.location.href);
const currentPagePath = pageUrl.pathname.replace(/\\/g, '/');
const renderModulePath = currentPagePath.includes('/AB-900/01-SIMULADO/')
  ? '../../variants/ab-900-01/js/render.js'
  : './render.js';
const questoesModulePath = new URL('./js/questoes.js', pageUrl);

// ==========================================
// Portão de sessão
// ==========================================
let perfil;

try {
  perfil = await exigirSessao();
} catch (erro) {
  console.error('Falha ao verificar a sessao:', erro);
  mostrarFalhaDeSessao(
    'Não conseguimos confirmar seu login agora. Verifique sua conexão e tente novamente.'
  );
  throw erro;
}

window.CertiAcademyPerfil = perfil;
revelarPagina();

// Registra o acesso sem bloquear a montagem da prova.
import('./store.js')
  .then(({ registrarAcesso }) => registrarAcesso(perfil))
  .catch(erro => console.error('Nao foi possivel registrar o acesso:', erro));

// ==========================================
// Carga do motor e do banco de questões
// ==========================================
// O banco de questões é carregado antes do timer porque pode declarar o tempo
// desta prova, que o timer lê ao ser importado.
const questoesModule = await import(questoesModulePath);

const { questoes, tempoMinutos } = questoesModule;

if (!Array.isArray(questoes) || questoes.length === 0) {
  throw new Error('Banco de questoes indisponivel para este simulado.');
}

window.CertiAcademyQuestoes = questoes;
window.CertiAcademyTempoMinutos = tempoMinutos;

const [renderModule, timerModule] = await Promise.all([
  import(renderModulePath),
  import('./timer.js')
]);

const quizModule = await import('./quiz.js');

const { inicializarModalProblema } = renderModule;
const { iniciarCronometro } = timerModule;
const {
  finalizarPorTempoEsgotado,
  marcarResultadoGravado,
  obterTempoInicialPersistido,
  persistirTempoRestante,
  restaurarEstadoVisual,
  simuladoFinalizado
} = quizModule;

// ==========================================
// Histórico: grava a prova concluída
// Descrição: O quiz.js apenas anuncia que terminou; a conversa com o Firestore
//            fica aqui. Uma falha de gravação não pode derrubar a tela de
//            resultado — o aluno continua vendo a própria nota, e a tentativa
//            se repete na próxima vez que a página abrir, porque só marcamos
//            como gravado depois da confirmação.
// ==========================================
document.addEventListener('certiacademy:resultado-final', async evento => {
  try {
    const { salvarResultado } = await import('./store.js');
    await salvarResultado(perfil, evento.detail);
    marcarResultadoGravado();
  } catch (erro) {
    console.error('Nao foi possivel gravar o resultado no historico:', erro);
  }
});

function iniciarSimulado() {
  inicializarModalProblema();

  if (!simuladoFinalizado) {
    iniciarCronometro(
      obterTempoInicialPersistido(),
      persistirTempoRestante,
      finalizarPorTempoEsgotado
    );
  }

  // Depois do cronômetro, para que o badge entre na barra que ele cria.
  montarBadgeSessao(perfil);

  restaurarEstadoVisual();
}

iniciarSimulado();
