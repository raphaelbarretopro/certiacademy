// ==========================================
// Arquivo: quiz.js
// Descrição: Controle principal do Simulado SC-900
// ==========================================

import { obterTempoRestante, pararCronometro, TEMPO_TOTAL_SEGUNDOS } from './timer.js';
import { formatarRespostaUsuario, formatarRespostaCorreta, verificarRespostas } from './utils.js';

const questoes = window.CertiAcademyQuestoes;

if (!Array.isArray(questoes) || questoes.length === 0) {
  throw new Error('Banco de questoes nao carregado.');
}

function getRenderApi() {
  const renderApi = window.CertiAcademyRender;

  if (!renderApi) {
    throw new Error('Motor de renderizacao nao carregado.');
  }

  return renderApi;
}

// Este modulo mora em <raiz>/shared/simulado-engine/common/js/, entao a raiz do
// site sai da propria URL do modulo. Contar segmentos do caminho da pagina
// levava ate a raiz do dominio, o que quebra a imagem em Project Pages do
// GitHub, onde o site comeca dentro de /<repositorio>/.
const REPOSITORIO_ROOT = new URL('../../../../', import.meta.url);

function getRepositorioAssetUrl(relativeAssetPath) {
  return new URL(relativeAssetPath, REPOSITORIO_ROOT).toString();
}

// ==========================================
// Variáveis globais
// ==========================================

export let questaoAtual = 0;
export let respostasUsuario = [];
export const marcadas = new Set();
export let simuladoFinalizado = false;
const STORAGE_KEY = `certiacademy:quiz-state:${window.location.pathname}`;
let tempoRestantePersistido = TEMPO_TOTAL_SEGUNDOS;
let rascunhosRespostas = {};
// Guarda se esta tentativa ja foi enviada ao historico, para que recarregar a
// tela de resultado nao grave a mesma prova de novo.
let resultadoGravado = false;

const inicioSimulado = new Date();

let resultadoFinalHTML = ""; // 📝 Guarda o HTML do Resultado Final para restaurar depois

export const listaQuestoes = document.getElementById("listaQuestoes");
const questaoContainer = document.getElementById("questaoContainer");
questaoContainer.innerHTML = "";

export const feedback = document.getElementById("feedback");
export const confirmarBtn = document.getElementById("confirmarBtn");
export const proximaBtn = document.getElementById("proximaBtn");
export const finalizarBtn = document.getElementById("finalizarBtn");
export const voltarBtn = document.getElementById("voltarBtn");
const abortarBtn = criarBotaoAbortar();
const resultadoFinal = document.getElementById("resultadoFinal");
export let resultadoFinalExibido = false;

window.CertiAcademyQuiz = {
  get questaoAtual() {
    return questaoAtual;
  },
  get respostasUsuario() {
    return respostasUsuario;
  },
  get simuladoFinalizado() {
    return simuladoFinalizado;
  },
  get feedback() {
    return feedback;
  },
  get confirmarBtn() {
    return confirmarBtn;
  },
  get proximaBtn() {
    return proximaBtn;
  },
  get finalizarBtn() {
    return finalizarBtn;
  },
  get voltarBtn() {
    return voltarBtn;
  },
  get abortarBtn() {
    return abortarBtn;
  },
  obterRespostaPreenchida,
  salvarRascunhoResposta,
  irParaQuestao
};

restaurarEstadoPersistido();

function normalizarRespostaSalva(resposta) {
  if (!resposta || typeof resposta !== 'object') return null;
  if (!Number.isInteger(resposta.index)) return null;

  return {
    index: resposta.index,
    selecionadas: resposta.selecionadas,
    pontos: typeof resposta.pontos === 'number' ? resposta.pontos : 0
  };
}

function criarBotaoAbortar() {
  const sidebarDireita = document.querySelector('.sidebarDireita');

  if (!sidebarDireita && (!confirmarBtn || !confirmarBtn.parentElement)) {
    return null;
  }

  const existingButton = document.getElementById('abortarBtn');
  if (existingButton) {
    return existingButton;
  }

  const button = document.createElement('button');
  button.id = 'abortarBtn';
  button.className = 'btn-abortar';
  button.type = 'button';
  button.textContent = 'Abortar';

  const buttonWrapper = document.createElement('div');
  buttonWrapper.className = 'abortar-wrapper';
  buttonWrapper.appendChild(button);

  if (sidebarDireita) {
    const sidebarColumn = garantirColunaLateralDireita(sidebarDireita);
    sidebarColumn.appendChild(buttonWrapper);
  } else {
    confirmarBtn.insertAdjacentElement('afterend', buttonWrapper);
  }

  return button;
}

function garantirColunaLateralDireita(sidebarDireita) {
  const parent = sidebarDireita.parentElement;

  if (parent && parent.classList.contains('sidebarDireita-coluna')) {
    return parent;
  }

  const coluna = document.createElement('div');
  coluna.className = 'sidebarDireita-coluna';
  sidebarDireita.insertAdjacentElement('beforebegin', coluna);
  coluna.appendChild(sidebarDireita);

  return coluna;
}

function normalizarRascunhosSalvos(rascunhos) {
  if (!rascunhos || typeof rascunhos !== 'object') return {};

  return Object.entries(rascunhos).reduce((acc, [index, selecionadas]) => {
    const indice = Number.parseInt(index, 10);

    if (!Number.isInteger(indice)) return acc;

    acc[indice] = selecionadas;
    return acc;
  }, {});
}

function persistirEstado() {
  const estado = {
    questaoAtual,
    respostasUsuario,
    rascunhosRespostas,
    simuladoFinalizado,
    resultadoFinalExibido,
    resultadoGravado,
    tempoRestante: obterTempoRestante()
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

function restaurarEstadoPersistido() {
  const estadoPersistido = localStorage.getItem(STORAGE_KEY);

  if (!estadoPersistido) return;

  try {
    const estado = JSON.parse(estadoPersistido);
    const respostasRestauradas = Array.isArray(estado.respostasUsuario)
      ? estado.respostasUsuario.map(normalizarRespostaSalva).filter(Boolean)
      : [];

    respostasUsuario = respostasRestauradas;
    rascunhosRespostas = normalizarRascunhosSalvos(estado.rascunhosRespostas);
    questaoAtual = Number.isInteger(estado.questaoAtual)
      ? Math.min(Math.max(estado.questaoAtual, 0), Math.max(questoes.length - 1, 0))
      : 0;
    simuladoFinalizado = Boolean(estado.simuladoFinalizado);
    resultadoFinalExibido = Boolean(estado.resultadoFinalExibido || estado.simuladoFinalizado);
    resultadoGravado = Boolean(estado.resultadoGravado);
    tempoRestantePersistido = Number.isFinite(estado.tempoRestante) && estado.tempoRestante >= 0
      ? Math.floor(estado.tempoRestante)
      : TEMPO_TOTAL_SEGUNDOS;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function limparEstadoPersistido() {
  localStorage.removeItem(STORAGE_KEY);
}

export function obterTempoInicialPersistido() {
  return tempoRestantePersistido;
}

export function persistirTempoRestante(tempoRestante) {
  tempoRestantePersistido = tempoRestante;
  persistirEstado();
}

export function salvarRascunhoResposta(index, selecionadas) {
  rascunhosRespostas[index] = selecionadas;
  persistirEstado();
}

export function obterRespostaPreenchida(index) {
  const respostaConfirmada = respostasUsuario.find(resp => resp.index === index);

  if (respostaConfirmada) {
    return respostaConfirmada.selecionadas;
  }

  return rascunhosRespostas[index] ?? null;
}

export function restaurarEstadoVisual() {
  if (simuladoFinalizado || resultadoFinalExibido) {
    mostrarResultadoFinal(true);
    return;
  }

  navegarQuestao();
}

export function finalizarPorTempoEsgotado() {
  finalizarSimulado();
}


// ==========================================
// Novo cálculo automático do VALOR_ACERTO
// ==========================================

let totalAcertosPossiveis = 0;


  questoes.forEach(q => {
    if (q.tipo === "unica" || q.tipo === "combobox" || q.tipo === "comboboxs") {        
        totalAcertosPossiveis += 1;
    } else if (q.tipo === "multipla") {
        totalAcertosPossiveis += q.respostas.length;
    } else if (q.tipo === "simnao") {
        totalAcertosPossiveis += q.respostas.length;
    } else if (q.tipo === "dragdrop") {
        totalAcertosPossiveis += Object.keys(q.respostas).length;
    }
});

const VALOR_ACERTO = 1000 / totalAcertosPossiveis;

// Nota de corte oficial dos exames Microsoft, na escala de 1000 pontos.
const NOTA_DE_CORTE_PONTOS = 700;

// Paleta dos graficos, alinhada a do dashboard: verde quando o desempenho
// alcanca o corte, ambar quando fica abaixo, e um cinza neutro para o restante.
const COR_APROVADO = '#0E7A52';
const COR_ABAIXO = '#A96A00';
const COR_NEUTRA = '#E2E8F0';

// ==========================================
// Funcao: acertosPossiveisDe(q)
// Descricao: Quantos acertos a questao vale, pela mesma regra usada no total
// ==========================================
function acertosPossiveisDe(q) {
  if (q.tipo === 'multipla' || q.tipo === 'simnao') return q.respostas.length;
  if (q.tipo === 'dragdrop') return Object.keys(q.respostas).length;
  return 1;
}

// ==========================================
// Funcao: montarResultadoParaHistorico()
// Descricao: Reune o que o motor ja calcula ao final da prova no formato que o
//            historico grava. Nada aqui e recalculado de forma diferente da
//            tela de resultado: e a mesma pontuacao, o mesmo tempo e o mesmo
//            desempenho por dominio que alimenta o grafico de barras.
// ==========================================
export function montarResultadoParaHistorico() {
  const { curso, simulado } = identificarSimuladoAtual();
  const pontuacao = calcularPontuacao();

  const porDominio = {};

  // Maximo possivel de cada dominio, para o dashboard mostrar aproveitamento
  questoes.forEach(q => {
    if (!porDominio[q.dominio]) porDominio[q.dominio] = { pontos: 0, maximo: 0 };
    porDominio[q.dominio].maximo += acertosPossiveisDe(q) * VALOR_ACERTO;
  });

  respostasUsuario.forEach(r => {
    const q = questoes[r.index];
    if (!q || !porDominio[q.dominio]) return;
    porDominio[q.dominio].pontos += r.pontos || 0;
  });

  for (const chave of Object.keys(porDominio)) {
    porDominio[chave].pontos = Math.round(porDominio[chave].pontos);
    porDominio[chave].maximo = Math.round(porDominio[chave].maximo);
  }

  return {
    curso,
    simulado,
    pontuacao,
    percentual: Math.round((pontuacao / 1000) * 100),
    acertos: Math.round(pontuacao / VALOR_ACERTO),
    totalAcertosPossiveis,
    tempoSegundos: Math.max(TEMPO_TOTAL_SEGUNDOS - obterTempoRestante(), 0),
    tempoLimiteSegundos: TEMPO_TOTAL_SEGUNDOS,
    porDominio,
    versaoBanco: questoes.length
  };
}

// ==========================================
// Funcao: identificarSimuladoAtual()
// Descricao: Deriva curso e simulado do caminho da pagina, do mesmo modo que o
//            envio de reportes de problema
// ==========================================
function identificarSimuladoAtual() {
  const segmentos = window.location.pathname.split('/').filter(Boolean);

  if (segmentos.length > 0 && segmentos[segmentos.length - 1].includes('.')) {
    segmentos.pop();
  }

  return {
    curso: decodeURIComponent(segmentos[segmentos.length - 2] || 'desconhecido'),
    simulado: decodeURIComponent(segmentos[segmentos.length - 1] || 'desconhecido')
  };
}

// ==========================================
// Inicialização dos botões
// ==========================================

voltarBtn.classList.add("hidden");
proximaBtn.classList.add("hidden");
finalizarBtn.classList.add("hidden");

confirmarBtn.onclick = () => confirmarQuestao();
proximaBtn.onclick = () => proximaQuestao();
voltarBtn.onclick = () => voltarQuestao();
if (abortarBtn) {
  abortarBtn.onclick = () => abortarSimulado();
}
finalizarBtn.onclick = () => {
  if (!todasQuestoesRespondidas(questoes, respostasUsuario)) {
    mostrarConfirmacaoFinalizar();
  } else {
    finalizarSimulado();
  }
};

// ==========================================
// Função: marcarQuestao(index)
// Descrição: Marca ou desmarca uma questão na bandeira
// ==========================================

export function marcarQuestao(index) {
    if (marcadas.has(index)) {
        marcadas.delete(index);
    } else {
        marcadas.add(index);
    }
}

// ==========================================
// Função: setQuestaoAtual(index)
// Descrição: Atualiza o índice da questão atual
// ==========================================

export function setQuestaoAtual(index) {
    questaoAtual = index;
  persistirEstado();
}

// ==========================================
// Função: confirmarQuestao()
// Descrição: Confirma a resposta da questão atual
// ==========================================

function confirmarQuestao() {
    const q = questoes[questaoAtual];
    if (!verificarRespostas(q)) return;

    if (q.tipo === "multipla") {
        const selecionadas = capturarResposta(q);
        if (selecionadas.length !== q.respostas.length) {
            alert(`⚠️ Você deve selecionar exatamente ${q.respostas.length} alternativas para confirmar essa questão.`);
            return;
        }
    }

    const resposta = capturarResposta(q);
    salvarResposta(q, resposta);
    mostrarFeedback(q, resposta);

    confirmarBtn.classList.add("hidden");

    if (questaoAtual < questoes.length - 1) {
        proximaBtn.classList.remove("hidden");
        finalizarBtn.classList.add("hidden");
    } else {
        proximaBtn.classList.add("hidden");
        finalizarBtn.classList.remove("hidden");
    }

    voltarBtn.classList.toggle("hidden", questaoAtual === 0);
  persistirEstado();
}

// ==========================================
// Função: proximaQuestao()
// Descrição: Avança para a próxima questão
// ==========================================

function proximaQuestao() {
    if (questaoAtual < questoes.length - 1) {
        questaoAtual++;
    persistirEstado();
        navegarQuestao();
    }
}

// ==========================================
// Função: voltarQuestao()
// Descrição: Retorna para a questão anterior
// ==========================================

function voltarQuestao() {
    if (questaoAtual > 0) {
        questaoAtual--;
    persistirEstado();
        navegarQuestao();
    }
}

// ==========================================
// Função: atualizarBarraProgresso()
// Descrição: Atualiza o texto e largura da barra de progresso
// ==========================================
export function atualizarBarraProgresso() {
  const textoProgresso = document.getElementById('textoProgresso');
  const barra = document.getElementById('barraProgresso');

  if (!textoProgresso || !barra) return;

  const total = questoes.length;     // Total de questões
  const atual = questaoAtual + 1;     // Questão atual (começa do 0, por isso +1)
  const percentual = Math.round((atual / total) * 100);

  textoProgresso.textContent = `Pergunta ${atual} de ${total}`;
  barra.style.width = `${percentual}%`;
}



// ==========================================
// Função: navegarQuestao()
// Descrição: Atualiza a tela ao navegar entre questões
// ==========================================

function navegarQuestao() {
  const { renderizarLista, renderizarQuestao } = getRenderApi();
    renderizarLista(questoes);
    renderizarQuestao(questoes);
    atualizarBarraProgresso();

    const respostaSalva = respostasUsuario.find(r => r.index === questaoAtual);

    if (respostaSalva) {
        const q = questoes[questaoAtual];
        mostrarFeedback(q, respostaSalva.selecionadas);
        confirmarBtn.classList.add("hidden");

        if (questaoAtual < questoes.length - 1) {
            proximaBtn.classList.remove("hidden");
            finalizarBtn.classList.add("hidden");
        } else {
            proximaBtn.classList.add("hidden");
            finalizarBtn.classList.remove("hidden");
        }

    } else {
        feedback.classList.add("hidden");
        confirmarBtn.classList.remove("hidden");
        proximaBtn.classList.add("hidden");
        finalizarBtn.classList.add("hidden");
    }

    voltarBtn.classList.toggle("hidden", questaoAtual === 0);

    ajustarScrollMobileQuestao();

    
}

function ajustarScrollMobileQuestao() {
  if (!window.matchMedia('(max-width: 1024px)').matches) {
    return;
  }

  requestAnimationFrame(() => {
    const container = document.querySelector('.container');

    if (container) {
      container.scrollIntoView({ behavior: 'auto', block: 'start' });
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  });
}

// ==========================================
// Função: finalizarSimulado()
// Descrição: Finaliza o simulado e mostra o resultado
// ==========================================

function finalizarSimulado() {
    pararCronometro();
    simuladoFinalizado = true; // ⚡ Marca que finalizou
    mostrarResultadoFinal();
}

function abortarSimulado() {
  const confirmou = window.confirm('Deseja abortar e reiniciar este simulado? Todo o progresso salvo sera perdido.');

  if (!confirmou) {
    return;
  }

  refazerSimulado();
}

// ==========================================
// Função: capturarResposta(q)
// Descrição: Captura a resposta do usuário
// ==========================================

function capturarResposta(q) {
    if (q.tipo === "unica") {
        const input = document.querySelector("input[name='resposta']:checked");
        return input ? [parseInt(input.value)] : [];
    }
    if (q.tipo === "multipla") {
        return Array.from(document.querySelectorAll("input[name='resposta']:checked")).map(e => parseInt(e.value));
    }
    if (q.tipo === "simnao") {
        return q.afirmacoes.map((_, i) => {
            const input = document.querySelector(`input[name='afirmacao_${i}']:checked`);
            return input ? input.value === "true" : null;
        });
    }
    if (q.tipo === "combobox") {
        const select = document.querySelector("select[name='resposta']");
        return select ? [parseInt(select.value)] : [];
    }
    if (q.tipo === "dragdrop") {
        const zonas = document.querySelectorAll(".dropzone");
        const respostaDragDrop = {};
        zonas.forEach(zona => {
            const grupo = zona.dataset.grupo;
            const itens = Array.from(zona.querySelectorAll(".draggable")).map(e => e.dataset.value);
            respostaDragDrop[grupo] = itens;
        });
        return respostaDragDrop;
    }
    if (q.tipo === "comboboxs") {
      const selects = document.querySelectorAll("select[id^='combo-']");
      return Array.from(selects).map(s => parseInt(s.value));
  }
  
    return [];
}

// ==========================================
// Função: salvarResposta(q, selecionadas)
// Descrição: Salva a resposta do usuário
// ==========================================

function salvarResposta(q, selecionadas) {
    let pontosQuestao = 0;

    if (q.tipo === "unica" || q.tipo === "combobox") {
        if (selecionadas[0] === q.resposta) {
            pontosQuestao = VALOR_ACERTO;
        }
    } else if (q.tipo === "multipla") {
        selecionadas.forEach(i => {
            if (q.respostas.includes(i)) {
                pontosQuestao += VALOR_ACERTO;
            }
        });
    } else if (q.tipo === "simnao") {
        selecionadas.forEach((resp, i) => {
            if (resp === q.respostas[i]) {
                pontosQuestao += VALOR_ACERTO;
            }
        });
    } else if (q.tipo === "dragdrop") {
        for (const grupo in q.respostas) {
            const respostaCorreta = q.respostas[grupo];
            const respostaUsuarioGrupo = selecionadas[grupo] || [];
            if (JSON.stringify(respostaCorreta.sort()) === JSON.stringify(respostaUsuarioGrupo.sort())) {
                pontosQuestao += VALOR_ACERTO;
            }
        }
    } else if (q.tipo === "comboboxs") {
        const corretas = q.pares.map(p => p.resposta);
        const corretasRespondidas = selecionadas.filter((resposta, i) => resposta === corretas[i]);
        pontosQuestao = VALOR_ACERTO * (corretasRespondidas.length / corretas.length);
    }

    const index = respostasUsuario.findIndex(resp => resp.index === questaoAtual);
    if (index > -1) {
        respostasUsuario[index] = { index: questaoAtual, selecionadas, pontos: pontosQuestao }; // sem Math.round
    } else {
        respostasUsuario.push({ index: questaoAtual, selecionadas, pontos: pontosQuestao }); // sem Math.round
    }

    rascunhosRespostas[questaoAtual] = selecionadas;

    persistirEstado();
}

// ==========================================
// Função: mostrarFeedback(q, respostaUsuario)
// Descrição: Exibe o feedback da questão
// ==========================================

export function mostrarFeedback(q, respostaUsuario) {
  const respostaCorretaFormatada = formatarRespostaCorreta(q);
  const respostaUsuarioFormatada = formatarRespostaUsuario(q.tipo, respostaUsuario, questoes, questaoAtual);

  let feedbackClass = "incorrect";

  if (q.tipo === "unica" || q.tipo === "combobox") {
      feedbackClass = respostaUsuario[0] === q.resposta ? "correct" : "incorrect";
  } else if (q.tipo === "multipla") {
      const corretas = q.respostas;
      const acertadas = respostaUsuario.filter(r => corretas.includes(r));
      if (acertadas.length === corretas.length && respostaUsuario.length === corretas.length) {
          feedbackClass = "correct";
      } else if (acertadas.length > 0) {
          feedbackClass = "partial";
      }
  } else if (q.tipo === "simnao") {
      let corretas = 0;
      respostaUsuario.forEach((r, i) => {
          if (r === q.respostas[i]) corretas++;
      });
      if (corretas === q.respostas.length) {
          feedbackClass = "correct";
      } else if (corretas > 0) {
          feedbackClass = "partial";
      }
  } else if (q.tipo === "dragdrop") {
      let corretas = 0;
      for (const grupo in q.respostas) {
          const respostaCorreta = q.respostas[grupo];
          const respostaUsuarioGrupo = respostaUsuario[grupo] || [];
          if (JSON.stringify(respostaCorreta.sort()) === JSON.stringify(respostaUsuarioGrupo.sort())) {
              corretas++;
          }
      }
      if (corretas === Object.keys(q.respostas).length) {
          feedbackClass = "correct";
      } else if (corretas > 0) {
          feedbackClass = "partial";
      }
  } else if (q.tipo === "comboboxs") {
      const corretas = q.pares.map(p => p.resposta);
      let corretasRespondidas = 0;
      respostaUsuario.forEach((resp, i) => {
          if (resp === corretas[i]) corretasRespondidas++;
      });
      if (corretasRespondidas === corretas.length) {
          feedbackClass = "correct";
      } else if (corretasRespondidas > 0) {
          feedbackClass = "partial";
      }
  }

  const respostaUsuarioFormatadaComMoldura = respostaUsuarioFormatada
  .split(/(?<=[])\s+(?=[✔️❌•➡️A-ZÀ-Ú])/)
  .map(frase => `<div class="feedback-borda"><p>${frase.trim().replace(/[.?!]$/, '')}.</p></div>`)
  .filter(linha => linha.trim() !== '')
  .join('');

  const respostaCorretaFormatadaComMoldura = respostaCorretaFormatada
  .split(/(?<=[])\s+(?=[✔️❌•➡️A-ZÀ-Ú])/)
  .map(frase => `<div class="feedback-borda"><p>${frase.trim().replace(/[.?!]$/, '')}.</p></div>`)
  .filter(linha => linha.trim() !== '')
  .join('');

  
  const explicacaoTexto = (q.explicacao ?? "").toString().replace(/\n+/g, ' ').trim();

  const explicacaoFormatadaComMoldura = explicacaoTexto
      .split(/(?<=[.?!])\s+(?=[✔️❌•➡️A-ZÀ-Ú])/)
      .map(frase => `<p>${frase.trim().replace(/[.?!]$/, '')}.</p>`)
      .filter(linha => linha.trim() !== '')
      //.map(item => `<div class="feedback-borda"><span>${item.trim()}</span></div>`)
      .join('');
      
      

  feedback.innerHTML = `
      <div><strong>Você respondeu:</strong><div>${respostaUsuarioFormatadaComMoldura}</div></div><br>
      <div><strong>Resposta correta:</strong><div>${respostaCorretaFormatadaComMoldura}</div></div><br>
      <div><strong>Explicação:</strong><div>${explicacaoFormatadaComMoldura}</div></div>
      <p><strong>Referência:</strong> <a href="${q.link}" target="_blank">Microsoft Learning</a></p>
      <p><strong>Domínio:</strong> ${q.dominio}</p>
  `;

  feedback.className = `feedback ${feedbackClass}`;
  feedback.classList.remove("hidden");
}


// ==========================================
// Função: mostrarResultadoFinal()
// Descrição: Exibe o resultado final
// ==========================================

function mostrarResultadoFinal(forceRender = false) {
  if (resultadoFinalExibido && !forceRender) return;

  pararCronometro();
  simuladoFinalizado = true;
  resultadoFinalExibido = true;
  persistirEstado();

  feedback.classList.add("hidden");
  confirmarBtn.disabled = true;
  confirmarBtn.classList.add("hidden");
  if (abortarBtn) abortarBtn.classList.add('hidden');
  finalizarBtn.classList.add("hidden");
  proximaBtn.classList.add("hidden");
  voltarBtn.classList.add("hidden");

  const sidebar = document.querySelector(".sidebar");
  if (sidebar) sidebar.style.display = "none";
  // Oculta a sidebar direita e a coluna que a envolve. Esconder so a sidebar
  // deixava a coluna ocupando espaco no flex e empurrava o painel para a
  // esquerda, em vez de centraliza-lo.
  const sidebarDireita = document.querySelector(".sidebarDireita");
  if (sidebarDireita) sidebarDireita.style.display = "none";

  const colunaDireita = document.querySelector(".sidebarDireita-coluna");
  if (colunaDireita) colunaDireita.style.display = "none";
  const container = document.querySelector(".container");
  if (container) container.style.justifyContent = "center";

  // Sem as sidebars, a coluna de conteudo pode ocupar a largura toda e se
  // centralizar; o max-width de 750px serve a leitura das questoes, nao ao
  // painel de resultado.
  const content = document.querySelector(".content");
  if (content) content.classList.add("content-resultado");

  const quiz = document.getElementById("quiz");
  quiz.innerHTML = ""; // Limpa o quiz para mostrar só o resultado
  const logoUrl = getRepositorioAssetUrl('imagens/certiacademy_logo.svg');
  const dashboardUrl = getRepositorioAssetUrl('dashboard.html');

  const resultado = document.createElement('div');
  resultado.className = "resultado-final";

  const tempoDecorrido = calcularTempoDecorrido();
  const pontuacaoTotal = calcularPontuacao();
  const percentual = Math.round((pontuacaoTotal / 1000) * 100);

  const aprovado = pontuacaoTotal >= NOTA_DE_CORTE_PONTOS;
  const estado = aprovado ? 'aprovado' : 'abaixo';
  const rotuloEstado = aprovado ? 'Acima da nota de corte' : 'Abaixo da nota de corte';
  const acertos = Math.round(pontuacaoTotal / VALOR_ACERTO);
  const faltam = Math.max(NOTA_DE_CORTE_PONTOS - pontuacaoTotal, 0);

  const resumoCorte = aprovado
    ? `Você superou os ${NOTA_DE_CORTE_PONTOS} pontos exigidos no exame oficial.`
    : `Faltaram ${faltam} pontos para os ${NOTA_DE_CORTE_PONTOS} exigidos no exame oficial.`;

  resultado.innerHTML = `
    <div class="rf-cabecalho">
      <img class="rf-logo" src="${logoUrl}" alt="CertiAcademy">
      <h1 class="rf-titulo">Resultado final</h1>
    </div>

    <div class="rf-destaque">
      <div class="rf-medidor">${montarAnel(percentual, aprovado)}</div>

      <div class="rf-sintese">
        <span class="rf-selo rf-selo-${estado}">${rotuloEstado}</span>
        <p class="rf-corte-texto">${resumoCorte}</p>

        <div class="rf-indicadores">
          <div class="rf-indicador">
            <span class="rf-indicador-rotulo">Pontuação</span>
            <span class="rf-indicador-valor rf-${estado}">${pontuacaoTotal}</span>
            <span class="rf-indicador-sub">de 1000 pontos</span>
          </div>
          <div class="rf-indicador">
            <span class="rf-indicador-rotulo">Acertos</span>
            <span class="rf-indicador-valor">${acertos}</span>
            <span class="rf-indicador-sub">de ${totalAcertosPossiveis} possíveis</span>
          </div>
          <div class="rf-indicador">
            <span class="rf-indicador-rotulo">Tempo</span>
            <span class="rf-indicador-valor">${tempoDecorrido}<span class="rf-indicador-unidade">min</span></span>
            <span class="rf-indicador-sub">de ${Math.round(TEMPO_TOTAL_SEGUNDOS / 60)} disponíveis</span>
          </div>
        </div>
      </div>
    </div>

    <div class="rf-painel">
      <h2 class="rf-painel-titulo">Aproveitamento por assunto</h2>
      <p class="rf-painel-sub">Quanto você aproveitou dos pontos disponíveis em cada seção do exame.</p>
      <div id="listaDominios" class="rf-dominios"></div>
    </div>

    <div class="rf-acoes">
      <button id="revisarBtn" type="button" class="rf-btn rf-btn-primario">Revisar questões</button>
      <button id="refazerBtn" type="button" class="rf-btn rf-btn-secundario">Refazer simulado</button>
      <a href="${dashboardUrl}" class="rf-btn rf-btn-neutro">Ver meu histórico</a>
    </div>
  `;

  quiz.appendChild(resultado);

  resultadoFinalHTML = quiz.innerHTML; // 📝 Salva o Resultado Final gerado (com gráficos)


  // 🛠️ ⚡ IMPORTANTE: Esperar o navegador pintar o HTML
  setTimeout(() => {
    desenharGraficos();
  }, 100);

  // Botões
  document.getElementById('refazerBtn').onclick = refazerSimulado;
  document.getElementById('revisarBtn').onclick = revisarQuestoes;


  const toggleSidebarBtn = document.getElementById('toggleSidebar');
  if (toggleSidebarBtn) toggleSidebarBtn.style.display = 'none';

  const progressoContainer = document.getElementById('progressoContainer');
  if (progressoContainer) progressoContainer.style.display = 'none';

  notificarResultadoParaHistorico();
}

// ==========================================
// Funcao: notificarResultadoParaHistorico()
// Descricao: Avisa quem estiver ouvindo que a prova terminou. O quiz.js nao
//            fala com o Firestore diretamente: quem grava e o app.js, o que
//            evita carregar o SDK do banco em quem so abriu a prova e mantem o
//            motor funcionando mesmo sem historico configurado.
// ==========================================
function notificarResultadoParaHistorico() {
  if (resultadoGravado) return;

  document.dispatchEvent(new CustomEvent('certiacademy:resultado-final', {
    detail: montarResultadoParaHistorico()
  }));
}

// ==========================================
// Funcao: marcarResultadoGravado()
// Descricao: Chamada pelo app.js depois que a gravacao confirma. Enquanto nao
//            for chamada, uma nova carga da pagina tenta gravar de novo - o
//            que e o comportamento desejado quando a rede falha.
// ==========================================
export function marcarResultadoGravado() {
  resultadoGravado = true;
  persistirEstado();
}


// ==========================================
// Função: desenharGraficos()
// Descrição: Gera os gráficos de resultado final
//             - Gráfico de Pizza: Correto x Incorreto
//             - Gráfico de Barras: Pontuação por Domínio
//             - Utiliza Chart.js para renderizar os gráficos
// ==========================================
// ==========================================
// Funcao: montarAnel(percentual, aprovado)
// Descricao: Medidor de acerto em SVG. Antes era um doughnut do Chart.js com o
//            numero posicionado por CSS sobre o canvas, e os dois centros nao
//            coincidiam. Aqui o texto vive dentro do proprio SVG, ancorado no
//            centro do viewBox, entao o alinhamento e exato por construcao - e
//            o desenho nunca deforma, porque o viewBox e quadrado.
// ==========================================
function montarAnel(percentual, aprovado) {
  const raio = 86;
  const circunferencia = 2 * Math.PI * raio;
  const fracao = Math.min(Math.max(percentual, 0), 100) / 100;
  const preenchido = circunferencia * fracao;
  const cor = aprovado ? COR_APROVADO : COR_ABAIXO;

  return `
    <svg class="rf-anel" viewBox="0 0 200 200" role="img"
         aria-label="${percentual}% de acerto no simulado">
      <circle cx="100" cy="100" r="${raio}" fill="none"
              stroke="${COR_NEUTRA}" stroke-width="16"></circle>
      <circle cx="100" cy="100" r="${raio}" fill="none"
              stroke="${cor}" stroke-width="16" stroke-linecap="round"
              stroke-dasharray="${preenchido.toFixed(2)} ${(circunferencia - preenchido).toFixed(2)}"
              transform="rotate(-90 100 100)"></circle>
      <text class="rf-anel-valor" x="100" y="98" text-anchor="middle" fill="${cor}">${percentual}<tspan class="rf-anel-pct">%</tspan></text>
      <text class="rf-anel-rotulo" x="100" y="124" text-anchor="middle">DE ACERTO</text>
    </svg>`;
}

function desenharGraficos() {
  // ---------- aproveitamento por assunto ----------
  // Barras em HTML, e nao um grafico do Chart.js: os nomes de dominio da
  // Microsoft sao longos e, num eixo de grafico, ou sao truncados ou colidem
  // entre si. Em HTML o texto quebra naturalmente e a leitura fica igual a do
  // dashboard.
  const alvoDominios = document.getElementById('listaDominios');
  if (!alvoDominios) return;

  const porDominio = montarResultadoParaHistorico().porDominio;

  const entradas = Object.entries(porDominio)
    .filter(([, valores]) => valores.maximo > 0)
    .map(([dominio, valores]) => ({
      dominio,
      percentual: Math.round((valores.pontos / valores.maximo) * 100),
      pontos: valores.pontos,
      maximo: valores.maximo
    }))
    .sort((a, b) => a.percentual - b.percentual);

  alvoDominios.textContent = '';

  entradas.forEach(item => {
    const bom = item.percentual >= 70;

    const linha = document.createElement('div');
    linha.className = 'rf-dominio';

    const topo = document.createElement('div');
    topo.className = 'rf-dominio-topo';

    const nome = document.createElement('span');
    nome.className = 'rf-dominio-nome';
    nome.textContent = item.dominio;

    const valor = document.createElement('span');
    valor.className = `rf-dominio-valor ${bom ? 'rf-aprovado' : 'rf-abaixo'}`;
    valor.textContent = `${item.percentual}%`;

    topo.append(nome, valor);

    const trilha = document.createElement('div');
    trilha.className = 'rf-trilha';

    const preenchida = document.createElement('span');
    preenchida.className = `rf-trilha-preenchida ${bom ? 'rf-fundo-aprovado' : 'rf-fundo-abaixo'}`;
    preenchida.style.width = `${item.percentual}%`;
    trilha.appendChild(preenchida);

    const detalhe = document.createElement('span');
    detalhe.className = 'rf-dominio-detalhe';
    detalhe.textContent = `${item.pontos} de ${item.maximo} pontos`;

    linha.append(topo, trilha, detalhe);
    alvoDominios.appendChild(linha);
  });
}





// ==========================================
// Função: refazerSimulado()
// Descrição: Reseta o simulado completamente
// ==========================================
function refazerSimulado() {
  pararCronometro();

  questaoAtual = 0;
  respostasUsuario = [];
  rascunhosRespostas = {};
  simuladoFinalizado = false;
  resultadoFinalExibido = false;
  resultadoGravado = false;
  tempoRestantePersistido = TEMPO_TOTAL_SEGUNDOS;
  resultadoFinalHTML = "";
  marcadas.clear();

  const progressoContainer = document.getElementById('progressoContainer');
  if (progressoContainer) progressoContainer.style.display = '';

  const cronometroContainer = document.getElementById('cronometroContainer');
  if (cronometroContainer) cronometroContainer.remove();

  limparEstadoPersistido();
  location.reload();
}

// ==========================================
// Função: revisarQuestoes()
// Descrição: Permite revisar todas as questões com feedback colorido
// ==========================================
function revisarQuestoes() {
  const quiz = document.getElementById("quiz");
  quiz.className = "revisao-questoes";
  if (abortarBtn) abortarBtn.classList.add('hidden');
  const logoUrl = getRepositorioAssetUrl('imagens/certiacademy_logo.svg');
  quiz.innerHTML = `
    <div class="rf-cabecalho">
      <img class="rf-logo" src="${logoUrl}" alt="CertiAcademy">
      <h1 class="rf-titulo">Revisão de questões</h1>
    </div>
  `;

  questoes.forEach((q, index) => {
    const respostaSalva = respostasUsuario.find(r => r.index === index);
  
    if (!respostaSalva) return;
  
    // Cria novo feedback igual ao confirmar
    const respostaCorretaFormatada = formatarRespostaCorreta(q);
    const respostaUsuarioFormatada = formatarRespostaUsuario(q.tipo, respostaSalva.selecionadas, questoes, index);
  
    let feedbackClass = "incorrect";
  
    if (q.tipo === "unica" || q.tipo === "combobox") {
      feedbackClass = respostaSalva.selecionadas[0] === q.resposta ? "correct" : "incorrect";
    } else if (q.tipo === "multipla") {
      const corretas = q.respostas;
      const acertadas = respostaSalva.selecionadas.filter(r => corretas.includes(r));
      if (acertadas.length === corretas.length && respostaSalva.selecionadas.length === corretas.length) {
        feedbackClass = "correct";
      } else if (acertadas.length > 0) {
        feedbackClass = "partial";
      }
    } else if (q.tipo === "simnao") {
      let corretas = 0;
      respostaSalva.selecionadas.forEach((r, i) => {
        if (r === q.respostas[i]) corretas++;
      });
      if (corretas === q.respostas.length) {
        feedbackClass = "correct";
      } else if (corretas > 0) {
        feedbackClass = "partial";
      }
    } else if (q.tipo === "dragdrop") {
      let corretas = 0;
      for (const grupo in q.respostas) {
        const respostaCorreta = q.respostas[grupo];
        const respostaUsuarioGrupo = respostaSalva.selecionadas[grupo] || [];
        if (JSON.stringify(respostaCorreta.sort()) === JSON.stringify(respostaUsuarioGrupo.sort())) {
          corretas++;
        }
      }
      if (corretas === Object.keys(q.respostas).length) {
        feedbackClass = "correct";
      } else if (corretas > 0) {
        feedbackClass = "partial";
      }
    } else if (q.tipo === "comboboxs") {
      const corretas = q.pares.map(p => p.resposta);
      let corretasRespondidas = 0;
      respostaSalva.selecionadas.forEach((resp, i) => {
        if (resp === corretas[i]) corretasRespondidas++;
      });
      if (corretasRespondidas === corretas.length) {
        feedbackClass = "correct";
      } else if (corretasRespondidas > 0) {
        feedbackClass = "partial";
      }
    }
    
  
    const respostaUsuarioFormatadaComMoldura = respostaUsuarioFormatada
      .split('<br>')
      .filter(linha => linha.trim() !== '')
      .map(item => `<div class="feedback-borda"><span>${item.trim()}</span></div>`)
      .join('');
  
    const respostaCorretaFormatadaComMoldura = respostaCorretaFormatada
      .split('<br>')
      .filter(linha => linha.trim() !== '')
      .map(item => `<div class="feedback-borda"><span>${item.trim()}</span></div>`)
      .join('');
  
    const feedback = document.createElement("div");
    feedback.className = `feedback ${feedbackClass}`;

  const explicacaoTexto = (q.explicacao ?? "").toString().replace(/\n+/g, ' ').trim();

  const explicacaoFormatadaComMoldura = explicacaoTexto
      .split(/(?<=[.?!])\s+(?=[✔️❌•➡️A-ZÀ-Ú])/)
      .map(frase => `<p>${frase.trim().replace(/[.?!]$/, '')}.</p>`)
      .filter(linha => linha.trim() !== '')
      //.map(item => `<div class="feedback-borda"><span>${item.trim()}</span></div>`)
      .join('');
  
    feedback.innerHTML = `
  <div><p><h3>Questão ${index + 1}</h3></p></div>
  <div><p>Pergunta: ${q.texto}</p></div>
  <div><strong>Você respondeu:</strong><div>${respostaUsuarioFormatadaComMoldura}</div></div><br>
  <div><strong>Resposta correta:</strong><div>${respostaCorretaFormatadaComMoldura}</div></div><br>
  <div><strong>Explicação:</strong><p>${explicacaoFormatadaComMoldura}</p></div>
  <p><strong>Referência:</strong> <a href="${q.link}" target="_blank">Microsoft Learning</a></p>
  <p><strong>Domínio:</strong> ${q.dominio}</p>
`;  
    quiz.appendChild(feedback);
  });  

  const botoesContainer = document.createElement('div');
  botoesContainer.className = 'botoes-revisao';

  botoesContainer.innerHTML = `
    <button id="voltarResultadoBtn" type="button" class="rf-btn rf-btn-primario">Voltar ao resultado</button>
    <button id="refazerBtn" type="button" class="rf-btn rf-btn-secundario">Refazer simulado</button>
  `;

  // Criação do botão "Imprimir em PDF"
  const imprimirBtn = document.createElement('button');
  imprimirBtn.textContent = 'Imprimir em PDF';
  imprimirBtn.id = 'btnImprimirPDF';
  imprimirBtn.type = 'button';
  imprimirBtn.className = 'rf-btn rf-btn-neutro';
  imprimirBtn.onclick = () => window.print();

  // Adicione o botão ao container dos botões de ação da revisão
  botoesContainer.appendChild(imprimirBtn);

  // Adicione o container ao final do quiz
  quiz.appendChild(botoesContainer);

  // Eventos
  document.getElementById('refazerBtn').onclick = refazerSimulado;
  document.getElementById('voltarResultadoBtn').onclick = voltarResultadoFinal;
}

function voltarResultadoFinal() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = resultadoFinalHTML; // 🛠️ Restaura o Resultado Final salvo

  // Reatribui eventos: o innerHTML recria os elementos e descarta os handlers
  const refazerBtn = document.getElementById('refazerBtn');
  const revisarBtn = document.getElementById('revisarBtn');

  if (refazerBtn) refazerBtn.onclick = refazerSimulado;
  if (revisarBtn) revisarBtn.onclick = revisarQuestoes;

  // Os canvas restaurados vem vazios, entao os graficos sao redesenhados
  setTimeout(() => {
    desenharGraficos();
  }, 50);
}

// Permite navegação direta ao clicar na lista lateral
export function irParaQuestao(index) {
  questaoAtual = index;
  persistirEstado();
  navegarQuestao();
}

// ==========================================
// Função: calcularTempoDecorrido()
// Descrição: Calcula o tempo de duração
// ==========================================

function calcularTempoDecorrido() {
  const segundosDecorridos = TEMPO_TOTAL_SEGUNDOS - obterTempoRestante();
  return Math.floor(segundosDecorridos / 60);
}

// ==========================================
// Função: calcularPontuacao()
// Descrição: Soma a pontuação final
// ==========================================

function calcularPontuacao() {
    return Math.round(respostasUsuario.reduce((total, r) => total + (r.pontos || 0), 0));
}

// ==========================================
// Estilo para impressão
// ==========================================
const stylePrint = document.createElement('style');
stylePrint.innerHTML = `
@media print {
  .botoes-revisao,
  .botoes-resultado-final,
  .btn-imprimir,
  .btn-reiniciar,
  .btn-revisar,
  #refazerBtn,
  #voltarResultadoBtn,
  #btnImprimirPDF {
    display: none !important;
  }
}
`;
document.head.appendChild(stylePrint);

const stylePrintBtn = document.createElement('style');
stylePrintBtn.innerHTML = `
  #btnImprimirPDF, .btn-imprimir {
    background: #e53935 !important;
    color: #fff !important;
    border: none !important;
    transition: background 0.2s;
  }
  #btnImprimirPDF:hover, .btn-imprimir:hover {
    background: #b71c1c !important;
  }
`;
document.head.appendChild(stylePrintBtn);

// ==========================================
// Função: todasQuestoesRespondidas(questoes, respostasUsuario)
// Descrição: Verifica se todas as questões foram respondidas
// ==========================================
export function todasQuestoesRespondidas(questoes, respostasUsuario) {
  return questoes.length === respostasUsuario.length;
}

// ==========================================
// Função: mostrarConfirmacaoFinalizar()
// Descrição: Mostra uma confirmação antes de finalizar o simulado
// ==========================================
function mostrarConfirmacaoFinalizar() {
  // Crie o modal se não existir
  let modal = document.getElementById('modalFinalizar');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modalFinalizar';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.5)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.innerHTML = `
      <div style="background:#fff;padding:30px;border-radius:8px;max-width:350px;text-align:center;">
        <p>Você não respondeu todas as questões.<br>Deseja finalizar mesmo assim?</p>
        <button id="btnConfirmarFinalizar" style="margin:10px 20px 0 0;">Confirmar</button>
        <button id="btnCancelarFinalizar">Cancelar</button>
      </div>
    `;
    document.body.appendChild(modal);
  } else {
    modal.style.display = 'flex';
  }

  document.getElementById('btnConfirmarFinalizar').onclick = () => {
    modal.style.display = 'none';
    finalizarSimulado();
  };
  document.getElementById('btnCancelarFinalizar').onclick = () => {
    modal.style.display = 'none';
  };
}
