// ==========================================
// Função: formatarRespostaUsuario(type, selecionadas, questoes, index)
// Descrição: Formata a resposta do usuário para exibição
// ==========================================
export function formatarRespostaUsuario(type, selecionadas, questoes, index) {
  const q = questoes[index];
  if (type === "unique") {
    return q.options[selecionadas[0]];
  } else if (type === "choice") {
    return selecionadas.map(i => q.options[i]).join("<p></p> ");
  } else if (type === "boolean") {
    return selecionadas.map((s, i) => `${q.options[i]}: ${s ? '<strong>Sim.</strong><p></p>' : '<strong>Não.</strong><p></p>'}`).join("<br>");
  } else if (type === "dragdrop") {
    let respostaFormatada = "";
    for (const grupo in selecionadas) {
      respostaFormatada += `${grupo}: <strong>${selecionadas[grupo].join(", ")}</strong><p></p>`;
    }
    return respostaFormatada;
  } else if (type === "combobox") {
    return q.options[selecionadas[0]];
  } else if (type === "comboboxs") {
    return selecionadas.map((valor, i) => {
      const texto = q.pairs[i].options?.[valor] ?? "";
      return `• ${q.pairs[i].requirement}: <strong>${texto}</strong>`;
    }).join('<p></p>');
  }
  return selecionadas;
}

// ==========================================
// Função: formatarRespostaCorreta(questao)
// Descrição: Formata a resposta correta para exibição
// ==========================================
export function formatarRespostaCorreta(questao) {
  if (questao.type === "unique") {
    return questao.options[questao.answers];
  } else if (questao.type === "choice") {
    return questao.options.filter((_, i) => questao.answers.includes(i)).join("<p></p> ");
  } else if (questao.type === "boolean") {
    return questao.answers.map((r, i) => `${questao.options[i]}: ${r ? '<strong>Sim.</strong><p></p>' : '<strong>Não.</strong><p></p>'}`).join("<br>");
  } else if (questao.type === "dragdrop") {
    let respostaFormatada = "";
    for (const grupo in questao.answers) {
      respostaFormatada += `${grupo}: <strong>${questao.answers[grupo].join(", ")}</strong><p></p>`;
    }
    return respostaFormatada;
  } else if (questao.type === "combobox") {
    return questao.options[questao.answers];
  } else if (questao.type === "comboboxs") {
    return questao.pairs.map(par => {
      const texto = par.options?.[par.answers] ?? "";
      return `• ${par.requirement}: <strong>${texto}</strong>`;
    }).join('<p></p>');
  }
  return questao.answers;
}

// ==========================================
// Função: verificarRespostas(q)
// Descrição: Verifica se todas as respostas foram selecionadas
// ==========================================
export function verificarRespostas(q) {
  let respostasNaoSelecionadas = false;

  if (q.type === "boolean") {
    q.options.forEach((_, i) => {
      const selected = document.querySelector(`input[name='afirmacao_${i}']:checked`);
      if (!selected) respostasNaoSelecionadas = true;
    });
  } else if (q.type === "choice") {
    const checkboxes = document.querySelectorAll("input[name='answers']:checked");
    if (checkboxes.length === 0) respostasNaoSelecionadas = true;
  } else if (q.type === "unique") {
    const selected = document.querySelector("input[name='answers']:checked");
    if (!selected) respostasNaoSelecionadas = true;
  } else if (q.type === "combobox") {
    const select = document.querySelector("select[name='answers']");
    if (!select || select.selectedIndex === 0) {
      respostasNaoSelecionadas = true;
    }
  } else if (q.type === "dragdrop") {
    const zonas = document.querySelectorAll(".dropzone");
    const todasPreenchidas = Array.from(zonas).every(zona => zona.querySelector(".draggable"));
    if (!todasPreenchidas) respostasNaoSelecionadas = true;
  } else if (q.type === "comboboxs") {
    const selects = document.querySelectorAll("select[id^='combo-']");
    const todosPreenchidos = Array.from(selects).every(select => select.selectedIndex > 0);
    if (!todosPreenchidos) respostasNaoSelecionadas = true;
  }

  if (respostasNaoSelecionadas) {
    alert("⚠️ Você esqueceu de responder uma ou mais questões! Por favor, preencha todas as respostas antes de confirmar.");
    return false;
  }
  return true;
}

// ==========================================
// Função auxiliar para comboboxs
// ==========================================
export function verificarComboboxs(questao, respostasUsuario) {
  const corretas = questao.pairs.map(par => par.answers);
  return JSON.stringify(respostasUsuario) === JSON.stringify(corretas);
}