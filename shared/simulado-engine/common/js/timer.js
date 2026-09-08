// ==========================================
// Arquivo: timer.js
// Descrição: Gerencia o cronômetro do simulado
// ==========================================

// Tempo padrao, usado por todo simulado que nao declarar o seu.
export const TEMPO_PADRAO_MINUTOS = 45;

// ==========================================
// Tempo desta prova
// Descricao: Os simulados variam de pouco mais de dez a quase cinquenta
//            questoes, entao um limite unico para todos distorce o tempo por
//            questao - e o tempo passou a ser um indicador do historico. Cada
//            banco pode declarar o seu com:
//
//              export const tempoMinutos = 60;
//
//            em js/questoes.js. Sem isso, vale o padrao de 45 minutos e nada
//            muda em relacao ao comportamento anterior.
// ==========================================
function resolverTempoTotalSegundos() {
  const declarado = window.CertiAcademyTempoMinutos;

  return Number.isFinite(declarado) && declarado > 0
    ? Math.floor(declarado * 60)
    : TEMPO_PADRAO_MINUTOS * 60;
}

export const TEMPO_TOTAL_SEGUNDOS = resolverTempoTotalSegundos();

// A ampulheta e um GIF na raiz do repositorio. O caminho sai de import.meta.url
// porque os simulados vivem em profundidades diferentes (CURSO/NN-SIMULADO e
// CURSO/CURSO-bonus/NN-SIMULADO), e um caminho fixo quebraria em uma delas.
const AMPULHETA = new URL('../../../../imagens/ampulheta.gif', import.meta.url).toString();

let tempoRestante = TEMPO_TOTAL_SEGUNDOS;
let intervaloCronometro;
let alerta15MinutosExibido = false;
let contandoParaCima = false;

function atualizarCronometroElemento() {
  const cronometroElemento = document.getElementById("cronometro");

  if (!cronometroElemento) return;

  const minutos = Math.floor(tempoRestante / 60);
  const segundos = tempoRestante % 60;
  cronometroElemento.textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

// ==========================================
// Função: iniciarCronometro()
// Descrição: Inicia o cronômetro e atualiza a cada segundo
// ==========================================
export function iniciarCronometro(tempoInicial = TEMPO_TOTAL_SEGUNDOS, onTick = () => {}, onTimeout = () => {}, { pratica = false } = {}) {
  pararCronometro();

  // Na pratica o mesmo mostrador conta para cima: nao ha limite a esgotar, e o
  // que interessa ao aluno e quanto tempo ja levou.
  contandoParaCima = pratica;

  tempoRestante = Number.isFinite(tempoInicial) && tempoInicial >= 0
    ? Math.floor(tempoInicial)
    : TEMPO_TOTAL_SEGUNDOS;
  alerta15MinutosExibido = tempoRestante <= 900;

  let cronometroDiv = document.getElementById("cronometroContainer");

  if (!cronometroDiv) {
    cronometroDiv = document.createElement("div");
    cronometroDiv.id = "cronometroContainer";
    // Posicao, cor, altura e tipografia ficam no CSS compartilhado. Em estilo
    // inline elas venciam as media queries, e no celular a barra precisa
    // trocar de lugar: la ela fica no rodape, ao alcance do polegar.
    cronometroDiv.innerHTML =
      "<span class='barra-tempo'>" +
      "<img class='barra-tempo-icone' src='" + AMPULHETA + "' alt='' aria-hidden='true'>" +
      "<span class='barra-tempo-rotulo'>" + (pratica ? 'Tempo decorrido:' : 'Tempo restante:') + "</span>" +
      "<span id='cronometro'></span>" +
      "</span>";
    document.body.prepend(cronometroDiv);
  }

  atualizarCronometroElemento();
  onTick(tempoRestante);

  intervaloCronometro = setInterval(() => {
    if (!contandoParaCima && tempoRestante === 900 && !alerta15MinutosExibido) {
      alerta15MinutosExibido = true;
      exibirAlerta("⏰ Atenção: faltam apenas 15 minutos para o término!");
    }

    // Na pratica nao ha o que esgotar: o cronometro sobe e quem encerra e o
    // aluno, pelo botao de finalizar.
    if (!contandoParaCima && tempoRestante <= 0) {
      pararCronometro();
      exibirAlerta("⛔ Tempo esgotado! Simulado encerrado.");
      onTimeout();
      return;
    }

    tempoRestante += contandoParaCima ? 1 : -1;
    atualizarCronometroElemento();
    onTick(tempoRestante);
  }, 1000);
}

// ==========================================
// Função: pararCronometro()
// Descrição: Para o cronômetro manualmente
// ==========================================
export function pararCronometro() {
  clearInterval(intervaloCronometro);
  intervaloCronometro = undefined;
}

export function obterTempoRestante() {
  return tempoRestante;
}

// ==========================================
// Função: exibirAlerta(mensagem)
// Descrição: Exibe um alerta personalizado no centro da tela
// ==========================================
function exibirAlerta(mensagem) {
  const alerta = document.createElement("div");
  alerta.style.position = "fixed";
  alerta.style.top = "50%";
  alerta.style.left = "50%";
  alerta.style.transform = "translate(-50%, -50%)";
  alerta.style.backgroundColor = "#fff";
  alerta.style.padding = "20px";
  alerta.style.border = "2px solid #000";
  alerta.style.zIndex = "10000";
  alerta.innerHTML = `<p>${mensagem}</p><button id='fecharAlerta'>Continuar</button>`;
  document.body.appendChild(alerta);

  const fecharBtn = document.getElementById('fecharAlerta');
  if (fecharBtn) fecharBtn.onclick = () => alerta.remove();
}

// ==========================================
// Função: desativarInputs()
// Descrição: Desativa todos os inputs e botões ao final do tempo
// ==========================================
function desativarInputs() {
  document.querySelectorAll("input, button").forEach(el => {
    if (el.id !== "reiniciarBtn") {
      el.disabled = false;
    }
  });
}
