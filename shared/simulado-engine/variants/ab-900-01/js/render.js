function getQuizApi() {
  const quizApi = window.CertiAcademyQuiz;

  if (!quizApi) {
    throw new Error('Motor do simulado nao carregado.');
  }

  return quizApi;
}


// ==========================================
// Função: renderizarLista(questoes)
// Descrição: Renderiza a lista lateral de questões
// ==========================================
export function renderizarLista(questoes) {
  const quiz = getQuizApi();
  const listaQuestoes = document.getElementById("listaQuestoes");
  listaQuestoes.innerHTML = "";

  questoes.forEach((_, i) => {
    const li = document.createElement("li");

    // Quadradinho verde se respondida
    if (quiz.respostasUsuario.some(r => r.index === i)) {
      const quadrado = document.createElement("span");
      quadrado.className = "quadrado-verde";
      li.appendChild(quadrado);
    }

    // Texto da questão
    const texto = document.createElement("span");
    texto.textContent = ` Questão ${i + 1}`;
    li.appendChild(texto);

    // Navegação direta
    li.onclick = () => quiz.irParaQuestao(i);

    if (i === quiz.questaoAtual) {
      li.classList.add('active');
    }

    listaQuestoes.appendChild(li);
  });
}

// ==========================================
// Função: renderizarQuestao(questoes)
// Descrição: Renderiza a questão atual na área principal
// ==========================================
export function renderizarQuestao(questoes) {
  const quizState = getQuizApi();
  const { feedback, simuladoFinalizado, confirmarBtn, finalizarBtn, proximaBtn, voltarBtn } = quizState;
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

  const q = questoes[quizState.questaoAtual];
  const quiz = document.getElementById("quiz");

  const resultadoFinalExistente = document.querySelector(".resultado-final");
  if (resultadoFinalExistente) resultadoFinalExistente.remove();

  quiz.innerHTML = ""; // Limpa tudo

  const questionHeader = document.createElement("div");
  questionHeader.className = "question-header";
  quiz.appendChild(questionHeader);

  const questionText = document.createElement("div");
  questionText.className = "question-text";
  const imagemDepoisDasRespostas = q.tipo === "combobox" || q.tipo === "comboboxs";
  const imagemQuestao = q.imagemUrl ? criarImagemQuestao(q.imagemUrl) : null;

  if (q.texto) {
    if (q.tipo === "combobox") {
      const partesTexto = q.texto.split("<combobox>");

      if (partesTexto.length === 2) {
        const paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(partesTexto[0].trim()));

        const textoFinal = partesTexto[1].trim();
        if (textoFinal) {
          const precisaEspaco = partesTexto[0].trim() && !/^[.,;:!?]/.test(textoFinal);
          paragrafo.appendChild(document.createTextNode((precisaEspaco ? " " : "") + textoFinal));
        }

        questionText.appendChild(paragrafo);
      } else {
        questionText.textContent = q.texto;
      }
    } else {
      const textoFormatado = q.texto
        .replace("Caso contrário, selecione Não.", "###EXCECAO1###")
        .replace("NOTA: Cada seleção correta vale ponto.", "###EXCECAO2###")
        .replace(/:\s*(?=-)/g, ':<p>')
        .split(/(?<=[\.\:;])\s+(?=[A-ZÀ-Ú\-])/g)
        .map(frase => `<p>${frase.trim()}</p>`)
        .join('')
        .replace("###EXCECAO1###", "Caso contrário, selecione Não.")
        .replace("###EXCECAO2###", "NOTA: Cada seleção correta vale ponto.");

      questionText.innerHTML = textoFormatado;
    }

    quiz.appendChild(questionText);
  }
  if (imagemQuestao && !imagemDepoisDasRespostas) {
    quiz.appendChild(imagemQuestao);
  }

  const answersContainer = document.createElement("div");
  answersContainer.className = "answers";
  quiz.appendChild(answersContainer);

  const respostaExistente = quizState.respostasUsuario.find(resp => resp.index === quizState.questaoAtual);
  const respostaPreenchida = quizState.obterRespostaPreenchida(quizState.questaoAtual);

  switch (q.tipo) {
    case "simnao":
      renderizarSimNao(q, answersContainer, respostaPreenchida);
      break;
    case "unica":
      renderizarUnica(q, answersContainer, Array.isArray(respostaPreenchida) ? respostaPreenchida[0] : null);
      break;
    case "multipla":
      renderizarMultipla(q, answersContainer, respostaPreenchida);
      break;
    case "dragdrop":
      renderizarDragDrop(q, answersContainer, respostaPreenchida);
      break;
    case "combobox":
      renderizarCombobox(q, answersContainer, Array.isArray(respostaPreenchida) ? respostaPreenchida[0] : null);
      break;
    case "comboboxs":
      renderizarComboboxs(q, respostaPreenchida);
      break;
    default:
      answersContainer.innerHTML += "<p>Tipo de questão não suportado.</p>";
  }

  if (imagemQuestao && imagemDepoisDasRespostas) {
    quiz.appendChild(imagemQuestao);
  }

  const listItemAtivo = document.querySelector(`.sidebar li:nth-child(${quizState.questaoAtual + 1})`);
  if (listItemAtivo) listItemAtivo.classList.add('active');

  const botaoReportar = document.getElementById('botaoReportar');
  if (botaoReportar) {
    botaoReportar.classList.remove('hidden');
    botaoReportar.onclick = () => abrirModalReportar(quizState.questaoAtual);
  }

  if (resultadoFinalExistente && document.body.contains(resultadoFinalExistente)) {
    quiz.appendChild(resultadoFinalExistente);
  }
}

function criarImagemQuestao(imagemUrl) {
  const imagemWrapper = document.createElement("div");
  imagemWrapper.className = "questao-imagem-wrapper";

  const imagem = document.createElement("img");
  imagem.src = imagemUrl;
  imagem.alt = "Imagem da Pergunta";
  imagem.className = "questao-imagem";

  imagem.addEventListener("load", () => {
    const proporcao = imagem.naturalWidth / imagem.naturalHeight;

    if (proporcao < 0.85) {
      imagemWrapper.classList.add("questao-imagem-portrait");
    } else if (proporcao > 1.15) {
      imagemWrapper.classList.add("questao-imagem-landscape");
    } else {
      imagemWrapper.classList.add("questao-imagem-balanced");
    }
  });

  imagemWrapper.appendChild(imagem);
  return imagemWrapper;
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
  const quiz = getQuizApi();
  const enviarBtn = document.getElementById('enviarProblemaBtn');
  const cancelarBtn = document.getElementById('cancelarProblemaBtn');

  if (enviarBtn) {
    enviarBtn.onclick = () => enviarProblema(quiz.questaoAtual);
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
  const quiz = getQuizApi();
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

  questao.afirmacoes.forEach((afirmacao, index) => {
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

  container.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', () => {
      const selecionadas = questao.afirmacoes.map((_, i) => {
        const selecionado = container.querySelector(`input[name='afirmacao_${i}']:checked`);
        return selecionado ? selecionado.value === 'true' : null;
      });

      quiz.salvarRascunhoResposta(quiz.questaoAtual, selecionadas);
    });
  });
}

// ==========================================
// Função: renderizarUnica
// ==========================================
function renderizarUnica(questao, container, respostaSalva) {
  const quiz = getQuizApi();
  const lista = document.createElement("ul");
  lista.className = "opcoes";

  questao.opcoes.forEach((opcao, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="radio" name="resposta" value="${index}" ${respostaSalva === index ? 'checked' : ''}>
        ${opcao}
      </label>
    `;
    lista.appendChild(li);
  });

  container.appendChild(lista);

  container.querySelectorAll('input[type="radio"][name="resposta"]').forEach(input => {
    input.addEventListener('change', () => {
      const selecionado = container.querySelector('input[type="radio"][name="resposta"]:checked');
      const selecionadas = selecionado ? [parseInt(selecionado.value, 10)] : [];
      quiz.salvarRascunhoResposta(quiz.questaoAtual, selecionadas);
    });
  });
}

// ==========================================
// Função: renderizarMultipla
// ==========================================
function renderizarMultipla(questao, container, respostasSalvas) {
  const quiz = getQuizApi();
  const lista = document.createElement("ul");
  lista.className = "opcoes";

  questao.opcoes.forEach((opcao, index) => {
    const li = document.createElement("li");
    const isSelecionada = respostasSalvas && respostasSalvas.includes(index);
    li.innerHTML = `
      <label>
        <input type="checkbox" name="resposta" value="${index}" ${isSelecionada ? 'checked' : ''}>
        ${opcao}
      </label>
    `;
    lista.appendChild(li);
  });

  container.appendChild(lista);

  const limite = questao.respostas.length;
  const checkboxes = container.querySelectorAll('input[type="checkbox"][name="resposta"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selecionados = Array.from(checkboxes).filter(c => c.checked);
      if (selecionados.length > limite) {
        checkbox.checked = false;
        alert(`⚠️ Você só pode selecionar ${limite} resposta(s) nesta questão.`);
      }

      const selecionadas = Array.from(checkboxes)
        .filter(c => c.checked)
        .map(c => parseInt(c.value, 10));
      quiz.salvarRascunhoResposta(quiz.questaoAtual, selecionadas);
    });
  });
}

// ==========================================
// Função: renderizarDragDrop
// ==========================================
function renderizarDragDrop(questao, container, respostasSalvas) {
  const dragItemsContainer = document.createElement("div");
  dragItemsContainer.className = "drag-items-container";

  questao.itens.forEach(item => {
    const div = document.createElement("div");
    div.className = "draggable";
    div.textContent = item.label;
    div.setAttribute("draggable", true);
    div.dataset.value = item.label;
    dragItemsContainer.appendChild(div);
  });
  container.appendChild(dragItemsContainer);

  const table = document.createElement("table");
  table.className = "drag-drop-table";

  const thead = document.createElement("thead");
  thead.innerHTML = "<tr><th>Serviço</th><th>Descrição</th></tr>";
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  questao.grupos.forEach(grupo => {
    const tr = document.createElement("tr");
    const servicoCell = document.createElement("td");
    servicoCell.className = "dropzone";
    servicoCell.dataset.grupo = grupo;

    if (respostasSalvas && respostasSalvas[grupo]) {
      respostasSalvas[grupo].forEach(valor => {
        const div = document.createElement("div");
        div.className = "draggable dropped";
        div.textContent = valor;
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
      placeholder.textContent = "Serviço";
      placeholder.style.color = "#ccc";
      placeholder.style.fontStyle = "italic";
      placeholder.style.pointerEvents = "none";
      dropzone.appendChild(placeholder);
    }
  });

  salvarRascunhoDragDrop();
}

// ==========================================
// Função: renderizarCombobox
// ==========================================
function renderizarCombobox(questao, container, respostaSalva) {
  const quiz = getQuizApi();
  container.innerHTML = "";
  const partesTexto = questao.texto.split("<combobox>");
  if (partesTexto.length !== 2) {
    console.warn("O texto da questão precisa conter exatamente um marcador <combobox>. Texto recebido:", questao.texto);
    return;
  }

  const select = document.createElement("select");
  select.name = "resposta";
  select.classList.add("combobox-select");

  questao.opcoes.forEach((opcao, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = opcao;
    if (respostaSalva === index) {
      option.selected = true;
    }
    select.appendChild(option);
  });

  const selectContainer = document.createElement("div");
  selectContainer.className = "combobox-answer";
  selectContainer.appendChild(criarControleComboboxResponsivo(select));

  container.appendChild(selectContainer);

  select.addEventListener('change', () => {
    quiz.salvarRascunhoResposta(quiz.questaoAtual, [parseInt(select.value, 10)]);
  });


function criarControleComboboxResponsivo(select) {
  if (!window.matchMedia('(max-width: 1024px)').matches) {
    return select;
  }

  select.classList.add('native-combobox-select');

  const wrapper = document.createElement('div');
  wrapper.className = 'custom-combobox';

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'custom-combobox-trigger';

  const menu = document.createElement('div');
  menu.className = 'custom-combobox-menu hidden';

  const atualizarEstado = () => {
    const selecionada = select.options[select.selectedIndex];
    trigger.textContent = selecionada ? selecionada.textContent : 'Selecione uma opção';
    trigger.classList.toggle('is-placeholder', !select.value);

    menu.querySelectorAll('.custom-combobox-option').forEach((botao) => {
      botao.classList.toggle('selected', botao.dataset.value === select.value);
    });
  };

  const fecharMenu = () => {
    menu.classList.add('hidden');
    trigger.setAttribute('aria-expanded', 'false');
  };

  const alternarMenu = () => {
    const aberto = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden', aberto);
    trigger.setAttribute('aria-expanded', aberto ? 'false' : 'true');
  };

  Array.from(select.options).forEach((option) => {
    if (option.disabled && option.value === '') {
      return;
    }

    const optionButton = document.createElement('button');
    optionButton.type = 'button';
    optionButton.className = 'custom-combobox-option';
    optionButton.dataset.value = option.value;
    optionButton.textContent = option.textContent;
    optionButton.addEventListener('click', () => {
      select.value = option.value;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      atualizarEstado();
      fecharMenu();
    });
    menu.appendChild(optionButton);
  });

  trigger.addEventListener('click', alternarMenu);
  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      fecharMenu();
      trigger.blur();
    }
  });

  wrapper.addEventListener('focusout', () => {
    requestAnimationFrame(() => {
      if (!wrapper.contains(document.activeElement)) {
        fecharMenu();
      }
    });
  });

  select.addEventListener('change', atualizarEstado);

  wrapper.appendChild(select);
  wrapper.appendChild(trigger);
  wrapper.appendChild(menu);
  atualizarEstado();

  return wrapper;
}
}

function salvarRascunhoDragDrop() {
  const quiz = getQuizApi();
  const respostaDragDrop = {};

  document.querySelectorAll('.dropzone').forEach(zona => {
    const grupo = zona.dataset.grupo;
    const itens = Array.from(zona.querySelectorAll('.draggable')).map(e => e.dataset.value);
    respostaDragDrop[grupo] = itens;
  });

  quiz.salvarRascunhoResposta(quiz.questaoAtual, respostaDragDrop);
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
        salvarRascunhoDragDrop();
      }
    });
  });
}

// Após o DOM estar carregado
document.addEventListener('DOMContentLoaded', () => {
  const enviarProblemaBtn = document.getElementById('enviarProblemaBtn');
  const cancelarProblemaBtn = document.getElementById('cancelarProblemaBtn');

  if (enviarProblemaBtn) {
    enviarProblemaBtn.onclick = () => enviarProblema(getQuizApi().questaoAtual);
  }

  if (cancelarProblemaBtn) {
    cancelarProblemaBtn.onclick = () => fecharModalReportar();
  }
});

// ==========================================
// Função: renderizarComboboxs(questao)
// Descrição: Renderiza questões com múltiplos combobox (tipo: "comboboxs")
// ==========================================

export function renderizarComboboxs(questao, respostasSalvas) {
  const quiz = getQuizApi();
  const container = document.querySelector(".answers");
  container.innerHTML = "";

  const wrapper = document.createElement("div");

 



  // 🔽 Comboboxs
  const lista = document.createElement("div");
  lista.className = "comboboxs-container";

  questao.pares.forEach((par, index) => {
    const item = document.createElement("div");
    item.className = "comboboxs-item select-container";

    const requisito = document.createElement("label");
    requisito.textContent = par.requisito;
    requisito.setAttribute("for", "combo-" + index);

    const select = document.createElement("select");
    select.id = "combo-" + index;
    select.dataset.index = index;

    const padrao = document.createElement("option");
    padrao.value = "";
    padrao.disabled = true;
    padrao.selected = !Array.isArray(respostasSalvas) || respostasSalvas[index] == null;
    padrao.textContent = "Selecione uma opção";
    select.appendChild(padrao);

    par.opcoes.forEach((opcao, i) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = opcao;
      if (Array.isArray(respostasSalvas) && respostasSalvas[index] === i) {
        opt.selected = true;
      }
      select.appendChild(opt);
    });

    select.addEventListener('change', () => {
      const selecionadas = Array.from(container.querySelectorAll("select[id^='combo-']")).map(combo => {
        return combo.value === '' ? null : parseInt(combo.value, 10);
      });

      quiz.salvarRascunhoResposta(quiz.questaoAtual, selecionadas);
    });

    item.appendChild(requisito);
    item.appendChild(criarControleComboboxResponsivo(select));
    lista.appendChild(item);
  });

  wrapper.appendChild(lista);
  container.appendChild(wrapper);
}

window.CertiAcademyRender = {
  renderizarLista,
  renderizarQuestao,
  abrirModalReportar,
  fecharModalReportar,
  inicializarModalProblema,
  enviarProblema,
  renderizarComboboxs
};
