// ==========================================
// Arquivo: quiz.js
// Descrição: Controle principal do Simulado SC-900
// ==========================================

export let questoes = [];

export async function carregarQuestoes() {
  const simulado = localStorage.getItem('simuladoSelecionado') || '';
  const resp = await fetch(`/certiacademy/course/MS-900/api/questions.php?simulado=${encodeURIComponent(simulado)}`);
  questoes = await resp.json();
}

import { renderizarLista, renderizarQuestao } from './render.js';
import { iniciarCronometro, pararCronometro } from './timer.js';
import { formatarRespostaUsuario, formatarRespostaCorreta, verificarRespostas } from './utils.js';

// ==========================================
// Variáveis globais
// ==========================================

export let questaoAtual = 0;
export let respostasUsuario = [];
export const marcadas = new Set();
export let simuladoFinalizado = false;

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
const resultadoFinal = document.getElementById("resultadoFinal");
export let resultadoFinalExibido = false;

// ==========================================
// Novo cálculo automático do VALOR_ACERTO
// ==========================================

let VALOR_ACERTO = 0;

function calcularValorAcerto() {
  let totalAcertosPossiveis = 0;
  questoes.forEach(q => {
    if (q.type === "unique" || q.type === "combobox" || q.type === "comboboxs") {        
        totalAcertosPossiveis += 1;
    } else if (q.type === "choice") {
        totalAcertosPossiveis += q.answers.length;
    } else if (q.type === "boolean") {
        totalAcertosPossiveis += q.answers.length;
    } else if (q.type === "dragdrop") {
        totalAcertosPossiveis += Object.keys(q.answers).length;
    }
  });
  VALOR_ACERTO = 1000 / totalAcertosPossiveis;
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
}

// ==========================================
// Função: confirmarQuestao()
// Descrição: Confirma a resposta da questão atual
// ==========================================

function confirmarQuestao() {
    const q = questoes[questaoAtual];
    if (!verificarRespostas(q)) return;

    if (q.type === "choice") {
        const selecionadas = capturarResposta(q);
        if (selecionadas.length !== q.answers.length) {
            alert(`⚠️ Você deve selecionar exatamente ${q.answers.length} alternativas para confirmar essa questão.`);
            return;
        }
    }

    const answers = capturarResposta(q);
    salvarResposta(q, answers);
    mostrarFeedback(q, answers);

    confirmarBtn.classList.add("hidden");

    if (questaoAtual < questoes.length - 1) {
        proximaBtn.classList.remove("hidden");
        finalizarBtn.classList.add("hidden");
    } else {
        proximaBtn.classList.add("hidden");
        finalizarBtn.classList.remove("hidden");
    }

    voltarBtn.classList.toggle("hidden", questaoAtual === 0);
}

// ==========================================
// Função: proximaQuestao()
// Descrição: Avança para a próxima questão
// ==========================================

function proximaQuestao() {
    if (questaoAtual < questoes.length - 1) {
        questaoAtual++;
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

  textoProgresso.textContent = `${atual}/${total}`;
  barra.style.width = `${percentual}%`;
}

// ==========================================
// Função: navegarQuestao()
// Descrição: Atualiza a tela ao navegar entre questões
// ==========================================

function navegarQuestao() {
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

// ==========================================
// Função: capturarResposta(q)
// Descrição: Captura a resposta do usuário
// ==========================================

function capturarResposta(q) {
    if (q.type === "unique") {
        const input = document.querySelector("input[name='answers']:checked");
        return input ? [parseInt(input.value)] : [];
    }
    if (q.type === "choice") {
        return Array.from(document.querySelectorAll("input[name='answers']:checked")).map(e => parseInt(e.value));
    }
    if (q.type === "boolean") {
        return q.options.map((_, i) => {
            const input = document.querySelector(`input[name='afirmacao_${i}']:checked`);
            return input ? input.value === "true" : null;
        });
    }
    if (q.type === "combobox") {
        const select = document.querySelector("select[name='answers']");
        return select ? [parseInt(select.value)] : [];
    }
    if (q.type === "dragdrop") {
        const zonas = document.querySelectorAll(".dropzone");
        const respostaDragDrop = {};
        zonas.forEach(zona => {
            const grupo = zona.dataset.grupo;
            const itens = Array.from(zona.querySelectorAll(".draggable")).map(e => e.dataset.value);
            respostaDragDrop[grupo] = itens;
        });
        return respostaDragDrop;
    }
    if (q.type === "comboboxs") {
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

    if (q.type === "unique" || q.type === "combobox") {
        if (selecionadas[0] === q.answers) {
            pontosQuestao = VALOR_ACERTO;
        }
    } else if (q.type === "choice") {
        selecionadas.forEach(i => {
            if (q.answers.includes(i)) {
                pontosQuestao += VALOR_ACERTO;
            }
        });
    } else if (q.type === "boolean") {
        selecionadas.forEach((resp, i) => {
            if (resp === q.answers[i]) {
                pontosQuestao += VALOR_ACERTO;
            }
        });
    } else if (q.type === "dragdrop") {
        for (const grupo in q.answers) {
            const respostaCorreta = q.answers[grupo];
            const respostaUsuarioGrupo = selecionadas[grupo] || [];
            if (JSON.stringify(respostaCorreta.sort()) === JSON.stringify(respostaUsuarioGrupo.sort())) {
                pontosQuestao += VALOR_ACERTO;
            }
        }
    } else if (q.type === "comboboxs") {
        const corretas = q.pairs.map(p => p.answers);
        const corretasRespondidas = selecionadas.filter((answers, i) => answers === corretas[i]);
        pontosQuestao = VALOR_ACERTO * (corretasRespondidas.length / corretas.length);
    }

    const index = respostasUsuario.findIndex(resp => resp.index === questaoAtual);
    if (index > -1) {
        respostasUsuario[index] = { index: questaoAtual, selecionadas, pontos: pontosQuestao }; // sem Math.round
    } else {
        respostasUsuario.push({ index: questaoAtual, selecionadas, pontos: pontosQuestao }); // sem Math.round
    }
}

// ==========================================
// Função: mostrarFeedback(q, respostaUsuario)
// Descrição: Exibe o feedback da questão
// ==========================================

export function mostrarFeedback(q, respostaUsuario) {
  const respostaCorretaFormatada = formatarRespostaCorreta(q);
  const respostaUsuarioFormatada = formatarRespostaUsuario(q.type, respostaUsuario, questoes, questaoAtual);

  let feedbackClass = "incorrect";

  if (q.type === "unique" || q.type === "combobox") {
      feedbackClass = respostaUsuario[0] === q.answers ? "correct" : "incorrect";
  } else if (q.type === "choice") {
      const corretas = q.answers;
      const acertadas = respostaUsuario.filter(r => corretas.includes(r));
      if (acertadas.length === corretas.length && respostaUsuario.length === corretas.length) {
          feedbackClass = "correct";
      } else if (acertadas.length > 0) {
          feedbackClass = "partial";
      }
  } else if (q.type === "boolean") {
      let totalRespondidas = 0;
      let corretas = 0;
      respostaUsuario.forEach((r, i) => {
          if (r !== null) {
              totalRespondidas++;
              if (r === q.answers[i]) corretas++;
          }
      });
      if (corretas === q.answers.length && totalRespondidas === q.answers.length) {
          feedbackClass = "correct";
      } else if (corretas > 0) {
          feedbackClass = "partial";
      }
  } else if (q.type === "dragdrop") {
      let corretas = 0;
      for (const grupo in q.answers) {
          const respostaCorreta = q.answers[grupo];
          const respostaUsuarioGrupo = respostaUsuario[grupo] || [];
          if (JSON.stringify(respostaCorreta.sort()) === JSON.stringify(respostaUsuarioGrupo.sort())) {
              corretas++;
          }
      }
      if (corretas === Object.keys(q.answers).length) {
          feedbackClass = "correct";
      } else if (corretas > 0) {
          feedbackClass = "partial";
      }
  } else if (q.type === "comboboxs") {
      const corretas = q.pairs.map(p => p.answers);
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

  const respostaUsuarioFormatadaComMoldura = String(respostaUsuarioFormatada)
  .split(/(?<=[])\s+(?=[✔️❌•➡️A-ZÀ-Ú])/)
  .map(frase => `<div class="feedback-borda"><p>${frase.trim().replace(/[.?!]$/, '')}.</p></div>`)
  .filter(linha => linha.trim() !== '')
  .join('');

  const respostaCorretaFormatadaComMoldura = String(respostaCorretaFormatada)
  .split(/(?<=[])\s+(?=[✔️❌•➡️A-ZÀ-Ú])/)
  .map(frase => `<div class="feedback-borda"><p>${frase.trim().replace(/[.?!]$/, '')}.</p></div>`)
  .filter(linha => linha.trim() !== '')
  .join('');

  const explicacaoTexto = (q.explanation ?? "").toString().replace(/\n+/g, ' ').trim();

  const explicacaoFormatadaComMoldura = explicacaoTexto
      .split(/(?<=[.?!])\s+(?=[✔️❌•➡️A-ZÀ-Ú])/)
      .map(frase => `<p>${frase.trim().replace(/[.?!]$/, '')}.</p>`)
      .filter(linha => linha.trim() !== '')
      .join('');

  feedback.innerHTML = `
      <div><strong>Você respondeu:</strong><div>${respostaUsuarioFormatadaComMoldura}</div></div><br>
      <div><strong>Resposta correta:</strong><div>${respostaCorretaFormatadaComMoldura}</div></div><br>
      <div><strong>Explicação:</strong><div>${explicacaoFormatadaComMoldura}</div></div>
      <p><strong>Referência:</strong> <a href="${q.link}" target="_blank">Microsoft Learning</a></p>
      <p><strong>Domínio:</strong> ${q.domain}</p>
  `;

  feedback.className = `feedback ${feedbackClass}`;
  feedback.classList.remove("hidden");
}

// ==========================================
// Função: mostrarResultadoFinal()
// Descrição: Exibe o resultado final
// ==========================================

function mostrarResultadoFinal() {
  if (resultadoFinalExibido) return;

  pararCronometro();
  simuladoFinalizado = true;
  resultadoFinalExibido = true;

  feedback.classList.add("hidden");
  confirmarBtn.disabled = true;
  confirmarBtn.classList.add("hidden");
  finalizarBtn.classList.add("hidden");
  proximaBtn.classList.add("hidden");
  voltarBtn.classList.add("hidden");

  const sidebar = document.querySelector(".sidebar");
  if (sidebar) sidebar.style.display = "none";
  // Oculta a sidebar direita
  const sidebarDireita = document.querySelector(".sidebarDireita");
  if (sidebarDireita) sidebarDireita.style.display = "none";
  const container = document.querySelector(".container");
  if (container) container.style.justifyContent = "center";

  const quiz = document.getElementById("quiz");
  quiz.innerHTML = ""; // Limpa o quiz para mostrar só o resultado

  // Adiciona a imagem no topo
  quiz.innerHTML += `
    <div style="text-align:center; margin-top:30px;">
      <img src="/certiacademy/img/certiacademy_logo.svg" alt="CertiAcademy" style="max-width:250px;">
    </div>
  `;

  const resultado = document.createElement('div');
  resultado.className = "resultado-final";

  const tempoDecorrido = calcularTempoDecorrido();
  const pontuacaoTotal = calcularPontuacao();

  const percentual = Math.round((pontuacaoTotal / 1000) * 100);

  resultado.innerHTML = `
    <center><h1>Resultado Final</h1>
    <h2>${percentual}% de acertos</h2>
    <p><strong>Pontuação:</strong> ${pontuacaoTotal} de 1000 pontos</p>
    <p><strong>Tempo decorrido:</strong> ${tempoDecorrido} minutos</p>
    <canvas id="graficoResultado" style="margin-top:20px;"></canvas>
    <h1>Desempenho por domínio do simulado</h1>
    <canvas id="graficoDominio" style="margin-top:40px;"></canvas>
    <div style="margin-top: 30px;">
      <button id="refazerBtn" class="btn-reiniciar">Refazer Simulado</button>
      <button id="revisarBtn" class="btn-revisar">Revisar Questões</button>
    </div></center>
  `;

  quiz.appendChild(resultado);

  resultadoFinalHTML = quiz.innerHTML; // 📝 Salva o Resultado Final gerado (com gráficos)

  setTimeout(() => {
    desenharGraficos();
  }, 100);

  document.getElementById('refazerBtn').onclick = refazerSimulado;
  document.getElementById('revisarBtn').onclick = revisarQuestoes;

  const toggleSidebarBtn = document.getElementById('toggleSidebar');
  if (toggleSidebarBtn) toggleSidebarBtn.style.display = 'none';

  const progressoContainer = document.getElementById('progressoContainer');
  if (progressoContainer) progressoContainer.style.display = 'none';
}

// ==========================================
// Função: desenharGraficos()
// Descrição: Gera os gráficos de resultado final
// ==========================================
function desenharGraficos() {
  // Gráfico de pizza (pontuação geral)
  const ctxResultado = document.getElementById('graficoResultado').getContext('2d');
  const pontosObtidos = calcularPontuacao();
  const pontosRestantes = 1000 - pontosObtidos;

  new Chart(ctxResultado, {
    type: 'doughnut',
    data: {
      labels: ['Percentual de acerto', 'Percentual de erros'],
      datasets: [{
        data: [pontosObtidos, pontosRestantes],
        backgroundColor: ['#28a745', '#dc3545']
      }]
    },
    options: {
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });

  // Gráfico de barras (pontuação por domínio)
  const ctxDominio = document.getElementById('graficoDominio').getContext('2d');

  const dominios = {}; // Inicializa contador de pontos por domínio

  respostasUsuario.forEach(r => {
    const q = questoes[r.index];
    if (!dominios[q.domain]) {
      dominios[q.domain] = 0;
    }
    dominios[q.domain] += r.pontos || 0;
  });

  const labels = Object.keys(dominios);
  const dados = Object.values(dominios);

  new Chart(ctxDominio, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Pontuação por Domínio',
        data: dados,
        backgroundColor: '#007bff'
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          max: 1000
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// ==========================================
// Função: refazerSimulado()
// Descrição: Reseta o simulado completamente
// ==========================================
function refazerSimulado() {
  const progressoContainer = document.getElementById('progressoContainer');
  if (progressoContainer) progressoContainer.style.display = '';
  location.reload();
}

// ==========================================
// Função: revisarQuestoes()
// Descrição: Permite revisar todas as questões com feedback colorido
// ==========================================
function revisarQuestoes() {
  const quiz = document.getElementById("quiz");
  quiz.className = "revisao-questoes";
  quiz.innerHTML = `
    <div style="text-align:center; margin-top:30px;">
      <img src="/certiacademy/img/certiacademy_logo.svg" alt="CertiAcademy" style="max-width:250px;">
    </div>
    <h2>Revisão de Questões</h2>
  `;

  questoes.forEach((q, index) => {
    const respostaSalva = respostasUsuario.find(r => r.index === index);
  
    if (!respostaSalva) return;
  
    // Cria novo feedback igual ao confirmar
    const respostaCorretaFormatada = formatarRespostaCorreta(q);
    const respostaUsuarioFormatada = formatarRespostaUsuario(q.type, respostaSalva.selecionadas, questoes, index);
  
    let feedbackClass = "incorrect";
  
    if (q.type === "unique" || q.type === "combobox") {
      feedbackClass = respostaSalva.selecionadas[0] === q.answers ? "correct" : "incorrect";
    } else if (q.type === "choice") {
      const corretas = q.answers;
      const acertadas = respostaSalva.selecionadas.filter(r => corretas.includes(r));
      if (acertadas.length === corretas.length && respostaSalva.selecionadas.length === corretas.length) {
        feedbackClass = "correct";
      } else if (acertadas.length > 0) {
        feedbackClass = "partial";
      }
    } else if (q.type === "boolean") {
      let corretas = 0;
      respostaSalva.selecionadas.forEach((r, i) => {
        if (r === q.answers[i]) corretas++;
      });
      if (corretas === q.answers.length) {
        feedbackClass = "correct";
      } else if (corretas > 0) {
        feedbackClass = "partial";
      }
    } else if (q.type === "dragdrop") {
      let corretas = 0;
      for (const grupo in q.answers) {
        const respostaCorreta = q.answers[grupo];
        const respostaUsuarioGrupo = respostaSalva.selecionadas[grupo] || [];
        if (JSON.stringify(respostaCorreta.sort()) === JSON.stringify(respostaUsuarioGrupo.sort())) {
          corretas++;
        }
      }
      if (corretas === Object.keys(q.answers).length) {
        feedbackClass = "correct";
      } else if (corretas > 0) {
        feedbackClass = "partial";
      }
    } else if (q.type === "comboboxs") {
      const corretas = q.pairs.map(p => p.answers);
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
  
    const respostaUsuarioFormatadaComMoldura = String(respostaUsuarioFormatada)
      .split('<br>')
      .filter(linha => linha.trim() !== '')
      .map(item => `<div class="feedback-borda"><span>${item.trim()}</span></div>`)
      .join('');
  
    const respostaCorretaFormatadaComMoldura = String(respostaCorretaFormatada)
      .split('<br>')
      .filter(linha => linha.trim() !== '')
      .map(item => `<div class="feedback-borda"><span>${item.trim()}</span></div>`)
      .join('');
  
    const feedback = document.createElement("div");
    feedback.className = `feedback ${feedbackClass}`;

    const explicacaoTexto = (q.explanation ?? "").toString().replace(/\n+/g, ' ').trim();

    const explicacaoFormatadaComMoldura = explicacaoTexto
      .split(/(?<=[.?!])\s+(?=[✔️❌•➡️A-ZÀ-Ú])/)
      .map(frase => `<p>${frase.trim().replace(/[.?!]$/, '')}.</p>`)
      .filter(linha => linha.trim() !== '')
      .join('');
  
    feedback.innerHTML = `
      <div><p><h3>Questão ${index + 1}</h3></p></div>
      <div><p>Pergunta: ${q.question}</p></div>
      <div><strong>Você respondeu:</strong><div>${respostaUsuarioFormatadaComMoldura}</div></div><br>
      <div><strong>Resposta correta:</strong><div>${respostaCorretaFormatadaComMoldura}</div></div><br>
      <div><strong>Explicação:</strong><p>${explicacaoFormatadaComMoldura}</p></div>
      <p><strong>Referência:</strong> <a href="${q.link}" target="_blank">Microsoft Learning</a></p>
      <p><strong>Domínio:</strong> ${q.domain}</p>
    `;  
    quiz.appendChild(feedback);
  });  

  const botoesContainer = document.createElement('div');
  botoesContainer.className = 'botoes-revisao';

  botoesContainer.innerHTML = `
    <button id="refazerBtn" class="btn-reiniciar">Refazer Simulado</button>
    <button id="voltarResultadoBtn" class="btn-revisar">Voltar Resultado Final</button>
  `;

  // Criação do botão "Imprimir em PDF"
  const imprimirBtn = document.createElement('button');
  imprimirBtn.textContent = 'Imprimir em PDF';
  imprimirBtn.id = 'btnImprimirPDF';
  imprimirBtn.className = 'btn-reiniciar';
  imprimirBtn.style.background = '#e53935';
  imprimirBtn.style.color = '#fff';
  imprimirBtn.onclick = () => window.print();

  botoesContainer.appendChild(imprimirBtn);
  quiz.appendChild(botoesContainer);

  document.getElementById('refazerBtn').onclick = refazerSimulado;
  document.getElementById('voltarResultadoBtn').onclick = voltarResultadoFinal;
}

function voltarResultadoFinal() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = resultadoFinalHTML; // 🛠️ Restaura o Resultado Final salvo

  document.getElementById('refazerBtn').onclick = refazerSimulado;
  document.getElementById('revisarBtn').onclick = revisarQuestoes;

  setTimeout(() => {
    desenharGraficos();
  }, 50);

  const refazerBtn = document.getElementById('refazerBtn');
  const revisarBtn = document.getElementById('revisarBtn');

  const botoesContainer = document.createElement('div');
  botoesContainer.className = 'botoes-resultado-final';

  botoesContainer.appendChild(refazerBtn);
  botoesContainer.appendChild(revisarBtn);

  const botaoContainerAntigo = document.querySelector('center > div');
  if (botaoContainerAntigo) botaoContainerAntigo.remove();

  const resultadoFinalDiv = document.querySelector('.resultado-final center');
  resultadoFinalDiv.appendChild(botoesContainer);
}

// Permite navegação direta ao clicar na lista lateral
export function irParaQuestao(index) {
  questaoAtual = index;
  navegarQuestao();
}

// ==========================================
// Função: calcularTempoDecorrido()
// Descrição: Calcula o tempo de duração
// ==========================================

function calcularTempoDecorrido() {
    const fim = new Date();
    return Math.floor((fim - inicioSimulado) / 60000);
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

const stylePrintNoCut = document.createElement('style');
stylePrintNoCut.innerHTML = `
@media print {
  .feedback,
  .feedback-borda,
  .resultado-final,
  .revisao-questoes > div,
  .botoes-revisao,
  .botoes-resultado-final {
    break-inside: avoid !important;
    page-break-inside: avoid !important;
  }
  .feedback {
    page-break-after: auto;
    page-break-before: auto;
  }
}
`;
document.head.appendChild(stylePrintNoCut);

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

// Carregar questões ao iniciar
(async () => {
  await carregarQuestoes();
  calcularValorAcerto();
  renderizarLista(questoes);
  renderizarQuestao(questoes);
  atualizarBarraProgresso();
})();