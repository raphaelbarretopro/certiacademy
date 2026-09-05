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

// ==========================================
// Carga do motor e do banco de questões
// ==========================================
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

  // Depois do cronômetro, para que o badge entre na barra que ele cria.
  montarBadgeSessao(perfil);

  restaurarEstadoVisual();
}

iniciarSimulado();
