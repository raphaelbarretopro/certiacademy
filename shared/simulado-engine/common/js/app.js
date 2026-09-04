const pageUrl = new URL(window.location.href);
const currentPagePath = pageUrl.pathname.replace(/\\/g, '/');
const renderModulePath = currentPagePath.includes('/AB-900/01-SIMULADO/')
  ? '../../variants/ab-900-01/js/render.js'
  : './render.js';
const questoesModulePath = new URL('./js/questoes.js', pageUrl);

const [renderModule, timerModule, questoesModule] = await Promise.all([
  import(renderModulePath),
  import('./timer.js'),
  import(questoesModulePath)
]);

const { questoes } = questoesModule;

if (!Array.isArray(questoes) || questoes.length === 0) {
  throw new Error('Banco de questoes indisponivel para este simulado.');
}

window.CertiAcademyQuestoes = questoes;

const quizModule = await import('./quiz.js');

const { inicializarModalProblema } = renderModule;
const { iniciarCronometro } = timerModule;
const {
  finalizarPorTempoEsgotado,
  obterTempoInicialPersistido,
  persistirTempoRestante,
  restaurarEstadoVisual,
  simuladoFinalizado
} = quizModule;

function iniciarSimulado() {
  inicializarModalProblema();

  if (!simuladoFinalizado) {
    iniciarCronometro(
      obterTempoInicialPersistido(),
      persistirTempoRestante,
      finalizarPorTempoEsgotado
    );
  }

  restaurarEstadoVisual();
}

iniciarSimulado();