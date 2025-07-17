import { respostasUsuario, questaoAtual, listaQuestoes, marcarQuestao, setQuestaoAtual, simuladoFinalizado, irParaQuestao } from './quiz.js';
import { proximaBtn, finalizarBtn, confirmarBtn, voltarBtn, feedback } from './quiz.js'; // Importa as referências dos botões

// ==========================================
// Função: renderizarLista(questoes)
// Descrição: Renderiza a lista lateral de questões com SVGs de status
// ==========================================
export function renderizarLista(questoes) {
  const listaQuestoes = document.getElementById("listaQuestoes");
  if (!listaQuestoes) return; // Evita erro se o elemento não existir
  listaQuestoes.innerHTML = "";

  // SVGs para os status
  const svgVerde = `
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" style="vertical-align:middle;">
      <rect width="32" height="32" rx="6" fill="#4ED07D"/>
      <path d="M10 17L15 22L22 13" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  const svgAmarelo = `
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" style="vertical-align:middle;">
      <polygon points="16,5 29,27 3,27" fill="#FFD166" stroke="#FFD166" stroke-width="2"/>
      <rect x="15" y="13" width="2" height="7" rx="1" fill="#fff"/>
      <rect x="15" y="22" width="2" height="2" rx="1" fill="#fff"/>
    </svg>
  `;
  const svgVermelho = `
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" style="vertical-align:middle;">
      <circle cx="16" cy="16" r="16" fill="#fff"/>
      <path d="M10 10L22 22" stroke="#FF4B6E" stroke-width="3" stroke-linecap="round"/>
      <path d="M22 10L10 22" stroke="#FF4B6E" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `;

  questoes.forEach((q, i) => {
    const li = document.createElement("li");

    // Texto da questão
    const texto = document.createElement("span");
    texto.textContent = ` Questão ${i + 1}`;
    li.appendChild(texto);

    // Verifica se a questão foi respondida
    const resposta = respostasUsuario.find(r => r.index === i);
    let classeCor = "";
    let svgStatus = "";

    if (resposta) {
      if (q.type === "unique" || q.type === "combobox") {
        classeCor = (resposta.selecionadas[0] === q.answers) ? "quadrado-verde" : "quadrado-vermelho";
      } else if (q.type === "choice") {
        const corretas = q.answers;
        const acertadas = resposta.selecionadas.filter(r => corretas.includes(r));
        if (acertadas.length === corretas.length && resposta.selecionadas.length === corretas.length) {
          classeCor = "quadrado-verde";
        } else if (acertadas.length > 0) {
          classeCor = "quadrado-amarelo";
        } else {
          classeCor = "quadrado-vermelho";
        }
      } else if (q.type === "boolean") {
        let corretas = 0;
        resposta.selecionadas.forEach((r, idx) => {
          if (r === q.answers[idx]) corretas++;
        });
        if (corretas === q.answers.length) {
          classeCor = "quadrado-verde";
        } else if (corretas > 0) {
          classeCor = "quadrado-amarelo";
        } else {
          classeCor = "quadrado-vermelho";
        }
      } else if (q.type === "dragdrop") {
        let corretas = 0;
        for (const grupo in q.answers) {
          const respostaCorreta = q.answers[grupo];
          const respostaUsuarioGrupo = resposta.selecionadas[grupo] || [];
          if (JSON.stringify(respostaCorreta.sort()) === JSON.stringify(respostaUsuarioGrupo.sort())) {
            corretas++;
          }
        }
        if (corretas === Object.keys(q.answers).length) {
          classeCor = "quadrado-verde";
        } else if (corretas > 0) {
          classeCor = "quadrado-amarelo";
        } else {
          classeCor = "quadrado-vermelho";
        }
      } else if (q.type === "comboboxs") {
        const corretas = q.pairs.map(p => p.answers);
        let corretasRespondidas = 0;
        resposta.selecionadas.forEach((resp, idx) => {
          if (resp === corretas[idx]) corretasRespondidas++;
        });
        if (corretasRespondidas === corretas.length) {
          classeCor = "quadrado-verde";
        } else if (corretasRespondidas > 0) {
          classeCor = "quadrado-amarelo";
        } else {
          classeCor = "quadrado-vermelho";
        }
      }

      // Escolhe o SVG conforme a cor
      if (classeCor === "quadrado-verde") svgStatus = svgVerde;
      else if (classeCor === "quadrado-amarelo") svgStatus = svgAmarelo;
      else svgStatus = svgVermelho;

      // Adiciona o SVG ao final do li (direita)
      const statusSpan = document.createElement("span");
      statusSpan.innerHTML = svgStatus;
      statusSpan.style.marginLeft = "8px"; // Espaço entre texto e ícone
      li.appendChild(statusSpan);
    }

    li.onclick = () => irParaQuestao(i);

    if (i === questaoAtual) {
      li.classList.add('active');
    }

    listaQuestoes.appendChild(li);
  });

  // Após adicionar todos os <li> na listaQuestoes
  const ativo = listaQuestoes.querySelector('li.active');
  if (ativo) {
    ativo.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
}

// ==========================================
// Função: renderizarQuestao(questoes)
// Descrição: Renderiza a questão atual na área principal
// ==========================================
export function renderizarQuestao(questoes) {
  document.querySelectorAll('.sidebar li').forEach(item => {
    item.classList.remove('active');
  });

  feedback.classList.add("hidden");

  if (simuladoFinalizado) {
    confirmarBtn.disabled = true;
    confirmarBtn.classList.add("hidden");
    finalizarBtn.classList.add("hidden");
    proximaBtn.classList.remove("hidden");
    voltarBtn.classList.remove("hidden");
  } else {
    confirmarBtn.disabled = false;
    confirmarBtn.classList.remove("hidden");
    proximaBtn.classList.add("hidden");
    finalizarBtn.classList.add("hidden");
  }

  const q = questoes[questaoAtual];
  const quiz = document.getElementById("quiz");

  const resultadoFinalExistente = document.querySelector(".resultado-final");
  if (resultadoFinalExistente) resultadoFinalExistente.remove();

  quiz.innerHTML = ""; // Limpa tudo

  // Adiciona SVG + número da pergunta acima do enunciado
  const perguntaHeader = document.createElement("div");
  perguntaHeader.className = "pergunta-header";
  perguntaHeader.innerHTML = `
  <svg aria-hidden="true" focusable="false" class="ud-icon ud-icon-small ud-icon-color-subdued-inverted" width="20" height="20">
    <use xlink:href="#icon-bookmark-outline"></use>
  </svg>
  <span class="pergunta-numero">Pergunta ${questaoAtual + 1}:</span>
`;
  quiz.appendChild(perguntaHeader);

  // Só adiciona questionHeader se NÃO for combobox
  if (q.type !== "combobox") {
    const questionHeader = document.createElement("div");
    questionHeader.className = "question-header";
    quiz.appendChild(questionHeader);
  }

  // Só exibe o texto da pergunta se NÃO for combobox
  if (q.question && q.type !== "combobox") {
    const questionText = document.createElement("div");
    questionText.className = "question-text";
    questionText.innerHTML = `<p>${q.question}</p>`;
    quiz.appendChild(questionText);
  }

  // Renderiza imagem para todos os tipos (sempre após o texto, antes da resposta)
  if (q.imageurl) {
    const imagem = document.createElement("img");
    imagem.src = q.imageurl;
    imagem.alt = "Imagem da Pergunta";
    imagem.className = "questao-imagem";
    quiz.appendChild(imagem);
  }

  const answersContainer = document.createElement("div");
  answersContainer.className = "answers";
  quiz.appendChild(answersContainer);

  const respostaExistente = respostasUsuario.find(resp => resp.index === questaoAtual);

  switch (q.type) {
    case "boolean":
      renderizarSimNao(q, answersContainer, respostaExistente ? respostaExistente.selecionadas : null);
      break;
    case "unique":
      renderizarUnica(q, answersContainer, respostaExistente ? respostaExistente.selecionadas[0] : null);
      break;
    case "choice":
      renderizarMultipla(q, answersContainer, respostaExistente ? respostaExistente.selecionadas : null);
      break;
    case "dragdrop":
      renderizarDragDrop(q, answersContainer, respostaExistente ? respostaExistente.selecionadas : null);
      break;
    case "combobox":
      renderizarCombobox(q, answersContainer, respostaExistente ? respostaExistente.selecionadas[0] : null);
      break;
    case "comboboxs":
      renderizarComboboxs(q);
      break;
    default:
      answersContainer.innerHTML += "<p>Tipo de questão não suportado.</p>";
  }

  const listItemAtivo = document.querySelector(`.sidebar li:nth-child(${questaoAtual + 1})`);
  if (listItemAtivo) listItemAtivo.classList.add('active');

  const botaoReportar = document.getElementById('botaoReportar');
  if (botaoReportar) {
    botaoReportar.classList.remove('hidden');
    botaoReportar.onclick = () => abrirModalReportar(questaoAtual);
  }

  if (resultadoFinalExistente && document.body.contains(resultadoFinalExistente)) {
    quiz.appendChild(resultadoFinalExistente);
  }
}

// ==========================================
// Função: Criar as funções JavaScript de abrir/fechar modal
// ==========================================
export function abrirModalReportar(indexQuestao) {
  const modal = document.getElementById("modalProblema");
  const modalContent = modal.querySelector('.modal-content');
  modalContent.innerHTML = `
    <h2>Reportar Problema</h2>
    <textarea id="textoProblema" rows="5" style="width: 100%; margin-bottom: 10px;"></textarea>
    <br>
    <button id="enviarProblemaBtn" style="background:green;color:#fff;padding:10px 30px;border:none;border-radius:5px;margin:10px;">Enviar</button>
    <button id="cancelarProblemaBtn" style="background:red;color:#fff;padding:10px 30px;border:none;border-radius:5px;margin:10px;">Cancelar</button>
  `;
  // Reassocia os eventos dos botões
  document.getElementById('enviarProblemaBtn').onclick = () => enviarProblema(indexQuestao);
  document.getElementById('cancelarProblemaBtn').onclick = fecharModalReportar;
  modal.classList.remove("hidden");
}

export function fecharModalReportar() {
  const modal = document.getElementById("modalProblema");
  modal.classList.add("hidden");
}

// Função: associar eventos do Modal
export function inicializarModalProblema() {
  const enviarBtn = document.getElementById('enviarProblemaBtn');
  const cancelarBtn = document.getElementById('cancelarProblemaBtn');

  if (enviarBtn) {
    enviarBtn.onclick = () => enviarProblema(questaoAtual);
  }

  if (cancelarBtn) {
    cancelarBtn.onclick = fecharModalReportar;
  }
}

// ==========================================
// Função: Criar a função de envio
// ==========================================
export function enviarProblema(indexQuestao) {
  const texto = document.getElementById("textoProblema").value.trim();
  if (!texto) {
    alert("⚠️ Por favor, descreva o problema antes de enviar.");
    return;
  }

  fetch('enviar_problema.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `questao=${indexQuestao + 1}&mensagem=${encodeURIComponent(texto)}`
  })
    .then(response => response.text())
    .then(data => {
      const modalContent = document.querySelector('.modal-content');
      if (data.trim() === "ok") {
        modalContent.innerHTML = `
        <h2>Problema enviado com sucesso ✅</h2>
        <p>Obrigado por nos ajudar a melhorar!</p>
      `;
        setTimeout(() => fecharModalReportar(), 2000);
      } else {
        modalContent.innerHTML = `
        <h2>Erro ao enviar ❌</h2>
        <p>Tente novamente mais tarde.</p>
        <button onclick="window.location.reload()">Recarregar Página</button>
      `;
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      const modalContent = document.querySelector('.modal-content');
      modalContent.innerHTML = `
      <h2>Erro de comunicação ❌</h2>
      <p>Servidor indisponível. Tente novamente mais tarde.</p>
      <button onclick="window.location.reload()">Recarregar Página</button>
    `;
    });
}

// ==========================================
// Função: renderizarSimNao
// ==========================================
function renderizarSimNao(questao, container, respostasSalvas) {
  const tabela = document.createElement("table");
  tabela.className = "tabela-simnao";

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>Afirmações</th>
      <th style="text-align:center;">Sim</th>
      <th style="text-align:center;">Não</th>
    </tr>
  `;
  tabela.appendChild(thead);

  const tbody = document.createElement("tbody");

  questao.options.forEach((afirmacao, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="question-text" style="padding: 12px 16px;">${afirmacao}</td>
      <td style="text-align:center;">
        <input type="radio" name="afirmacao_${index}" value="true" ${respostasSalvas && respostasSalvas[index] === true ? 'checked' : ''}>
      </td>
      <td style="text-align:center;">
        <input type="radio" name="afirmacao_${index}" value="false" ${respostasSalvas && respostasSalvas[index] === false ? 'checked' : ''}>
      </td>
    `;
    tbody.appendChild(tr);
  });

  tabela.appendChild(tbody);
  container.appendChild(tabela);
}

// ==========================================
// Função: renderizarUnica
// ==========================================
function renderizarUnica(questao, container, respostaSalva) {
  questao.options.forEach((opcao, index) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerHTML = `
      <label>
        <input type="radio" name="answers" value="${index}" ${respostaSalva === index ? 'checked' : ''}>
        ${opcao}
      </label>
    `;
    container.appendChild(div);
  });
}

// ==========================================
// Função: renderizarMultipla
// ==========================================
function renderizarMultipla(questao, container, respostasSalvas) {
  questao.options.forEach((opcao, index) => {
    const div = document.createElement("div");
    div.className = "option";
    const isSelecionada = respostasSalvas && respostasSalvas.includes(index);
    div.innerHTML = `
      <label>
        <input type="checkbox" name="answers" value="${index}" ${isSelecionada ? 'checked' : ''}>
        ${opcao}
      </label>
    `;
    container.appendChild(div);
  });

  const limite = questao.answers.length;
  const checkboxes = container.querySelectorAll('input[type="checkbox"][name="answers"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selecionados = Array.from(checkboxes).filter(c => c.checked);
      if (selecionados.length > limite) {
        checkbox.checked = false;
        alert(`⚠️ Você só pode selecionar ${limite} resposta(s) nesta questão.`);
      }
    });
  });
}

// ==========================================
// Função: renderizarDragDrop
// ==========================================
function renderizarDragDrop(questao, container, respostasSalvas) {
  const dragItemsContainer = document.createElement("div");
  dragItemsContainer.className = "drag-items-container";

  questao.items.forEach(item => {
    const div = document.createElement("div");
    div.className = "draggable";
    div.innerHTML = `
  <svg class="drag-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="8" height="1.5" rx="0.75" fill="#9194ac"/>
    <rect x="3" y="8.25" width="8" height="1.5" rx="0.75" fill="#9194ac"/>
    <rect x="3" y="11.5" width="8" height="1.5" rx="0.75" fill="#9194ac"/>
  </svg>
 
  <span>${item.label}</span>
`;
    div.setAttribute("draggable", true);
    div.dataset.value = item.label;
    dragItemsContainer.appendChild(div);
  });
  container.appendChild(dragItemsContainer);

  const table = document.createElement("table");
  table.className = "drag-drop-table";

  const thead = document.createElement("thead");
  thead.innerHTML = "<tr><th>Arrasta aqui</th><th>Descrição</th></tr>";
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  questao.group.forEach(grupo => {
    const tr = document.createElement("tr");
    const servicoCell = document.createElement("td");
    servicoCell.className = "dropzone";
    servicoCell.dataset.grupo = grupo;

    if (respostasSalvas && respostasSalvas[grupo]) {
      respostasSalvas[grupo].forEach(valor => {
        const div = document.createElement("div");
        div.className = "draggable dropped";
        div.innerHTML = `
  <svg class="drag-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="8" height="2.5" rx="0.75" fill="#9194ac"/>
    <rect x="3" y="8.25" width="8" height="2.5" rx="0.75" fill="#9194ac"/>
    <rect x="3" y="11.5" width="8" height="2.5" rx="0.75" fill="#9194ac"/>
  </svg>
 
  
  <span>${valor}</span>
`;
        div.dataset.value = valor;
        servicoCell.appendChild(div);
      });
    }

    const descricaoCell = document.createElement("td");
    descricaoCell.innerHTML = `<div class="question-text">${grupo}</div>`;
    tr.appendChild(servicoCell);
    tr.appendChild(descricaoCell);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  container.appendChild(table);

  adicionarEventosDragAndDrop();

  if (respostasSalvas) {
    const valoresAlocados = Object.values(respostasSalvas).flat();
    valoresAlocados.forEach(valor => {
      const item = dragItemsContainer.querySelector(`.draggable[data-value="${valor}"]`);
      if (item) item.remove();
    });
  }

  document.querySelectorAll(".dropzone").forEach(dropzone => {
    if (!dropzone.querySelector(".draggable")) {
      const placeholder = document.createElement("span");
      placeholder.textContent = "Arraste aqui";
      placeholder.style.color = "#ccc";
      placeholder.style.fontStyle = "italic";
      placeholder.style.pointerEvents = "none";
      dropzone.appendChild(placeholder);
    }
  });
}

// ==========================================
// Função: renderizarCombobox
// ==========================================
function renderizarCombobox(questao, container, respostaSalva) {
  container.innerHTML = "";

  const paragrafo = document.createElement("p");
  const questionText = document.createElement("div");
  questionText.className = "question-text";

  const partesTexto = questao.question.split("<combobox>");
  if (partesTexto.length !== 2) {
    console.warn("O texto da questão precisa conter exatamente um marcador <combobox>. Texto recebido:", questao.question);
    paragrafo.textContent = questao.question;
    container.appendChild(paragrafo);
    return;
  }

  paragrafo.appendChild(document.createTextNode(partesTexto[0]));

  const select = document.createElement("select");
  select.name = "answers";
  select.classList.add("combobox-select");

  // Adiciona a opção padrão (placeholder)
  const padrao = document.createElement("option");
  padrao.disabled = true;
  padrao.selected = true;
  padrao.textContent = "Selecione uma resposta";
  select.appendChild(padrao);

  questao.options.forEach((opcao, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = opcao;
    // Se já houver resposta salva, marca como selecionada
    if (respostaSalva === index) {
      option.selected = true;
      padrao.selected = false; // Remove o selected do placeholder
    }
    select.appendChild(option);
  });

  const selectContainer = document.createElement("span");
  selectContainer.appendChild(select);

  // Combobox
  paragrafo.appendChild(selectContainer);

  // Parte depois do combobox
  paragrafo.appendChild(document.createTextNode(partesTexto[1]));

  // Aplica estilo idêntico ao texto de outras questões
  questionText.appendChild(paragrafo);
  container.appendChild(questionText);
}


// ==========================================
// Função: adicionarEventosDragAndDrop
// ==========================================
function adicionarEventosDragAndDrop() {
  document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', item.dataset.value);
      item.classList.add('dragging');
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
    });
  });

  document.querySelectorAll('.dropzone').forEach(zone => {
    zone.addEventListener('dragover', e => e.preventDefault());
    zone.addEventListener('drop', e => {
      e.preventDefault();
      const value = e.dataTransfer.getData('text/plain');
      const dragged = document.querySelector(`.draggable[data-value='${value}']:not(.dropped)`);
      if (dragged) {
        zone.innerHTML = "";
        const clone = dragged.cloneNode(true);
        clone.classList.add('dropped');
        zone.appendChild(clone);
      }
    });
  });
}

// Após o DOM estar carregado
document.addEventListener('DOMContentLoaded', () => {
  const enviarProblemaBtn = document.getElementById('enviarProblemaBtn');
  const cancelarProblemaBtn = document.getElementById('cancelarProblemaBtn');

  if (enviarProblemaBtn) {
    enviarProblemaBtn.onclick = () => enviarProblema(questaoAtual);
  }

  if (cancelarProblemaBtn) {
    cancelarProblemaBtn.onclick = () => fecharModalReportar();
  }
});

// ==========================================
// Função: renderizarComboboxs(questao)
// Descrição: Renderiza questões com múltiplos combobox (tipo: "comboboxs")
// ==========================================
export function renderizarComboboxs(questao) {
  const container = document.querySelector(".answers");
  container.innerHTML = "";

  const wrapper = document.createElement("div");

  questao.pairs.forEach((par, index) => {
    const partes = par.requirement.split("<comboboxs>");
    const item = document.createElement("div");
    item.className = "comboboxs-item select-container";

    // Cria o select
    const select = document.createElement("select");
    select.id = "combo-" + index;
    select.dataset.index = index;

    const padrao = document.createElement("option");
    padrao.disabled = true;
    padrao.selected = true;
    padrao.textContent = "Selecione uma resposta";
    select.appendChild(padrao);

    par.options
      .filter(opcao => opcao && opcao.trim() !== "")
      .forEach((opcao, i) => {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = opcao;
        select.appendChild(opt);
      });

    // Monta o texto com o select no meio
    // Exemplo: "Renda Doméstica: <comboboxs>"
    const paragrafo = document.createElement("p");
    if (partes[0]) paragrafo.appendChild(document.createTextNode(partes[0]));
    paragrafo.appendChild(select);
    if (partes[1]) paragrafo.appendChild(document.createTextNode(partes[1]));

    item.appendChild(paragrafo);
    wrapper.appendChild(item);
  });

  container.appendChild(wrapper);
}