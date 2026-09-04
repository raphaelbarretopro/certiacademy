// ==========================================
// Arquivo: main.js
// Descrição: Inicializa o simulado, cronômetro e renderiza a primeira questão
// ==========================================

// Importações dos módulos principais
import { inicializarModalProblema } from './render.js';
import { iniciarCronometro } from './timer.js';
import {
  finalizarPorTempoEsgotado,
  obterTempoInicialPersistido,
  persistirTempoRestante,
  restaurarEstadoVisual,
  simuladoFinalizado
} from './quiz.js';

// ==========================================
// Função: iniciarSimulado()
// Descrição: Função principal que inicia o simulado
// ==========================================
function iniciarSimulado() {
  inicializarModalProblema(); // 🛠 Inicializa botões do modal

  if (!simuladoFinalizado) {
    iniciarCronometro(
      obterTempoInicialPersistido(),
      persistirTempoRestante,
      finalizarPorTempoEsgotado
    );
  }

  restaurarEstadoVisual();
}

// Chamada imediata para iniciar o simulado ao carregar a página
iniciarSimulado();
