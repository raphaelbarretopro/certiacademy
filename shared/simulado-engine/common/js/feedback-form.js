// ==========================================
// Arquivo: feedback-form.js
// Descrição: Formulário em que o aluno avalia a plataforma ou um curso que
//            treinou (1 a 5 estrelas + comentário).
//
//            Tudo é montado com createElement e textContent: o conteúdo do
//            banco e do aluno nunca passa por innerHTML. As regras do
//            Firestore são quem decide se o envio vale (acesso vigente,
//            simulado concluído, texto e nota válidos); aqui só se evita
//            mandar o que a regra recusaria.
// ==========================================

import {
  ESCOPO_GERAL,
  TEXTO_MAX,
  TEXTO_MIN,
  apagarMeuFeedback,
  enviarFeedback,
  lerMeuFeedback,
  nomePublicoSugerido
} from './feedback.js';

const ESCOPO_VALIDO = /^[A-Z]{2,3}-[0-9]{3}[A-Z]?$/;

const SITUACOES = {
  pendente: { texto: 'Em análise. Ela aparece no site depois da aprovação.', classe: 'bg-amber-50 text-amber-800 border-amber-200' },
  aprovado: { texto: 'Publicada no site. Obrigado pela avaliação!', classe: 'bg-green-50 text-green-800 border-green-200' },
  rejeitado: { texto: 'Esta avaliação não foi publicada. Você pode reescrevê-la e enviar de novo.', classe: 'bg-gray-50 text-gray-700 border-gray-200' }
};

// Pastas de bônus (DP-900-bonus) contam para o curso principal.
export function escoposDoAluno(porCurso) {
  const cursos = new Set();

  for (const chave of Object.keys(porCurso || {})) {
    const codigo = chave.replace(/-bonus$/i, '');
    if (ESCOPO_VALIDO.test(codigo)) cursos.add(codigo);
  }

  return [ESCOPO_GERAL, ...[...cursos].sort()];
}

function criar(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

function rotulo(escopo) {
  return escopo === ESCOPO_GERAL ? 'A plataforma CertiAcademy' : `Curso ${escopo}`;
}

export function montarFormulario(container, { perfil, escopos }) {
  let escopoAtual = escopos[0];
  let estrelas = 0;
  let existente = null;

  const grupo = criar('div', 'mb-4');
  const rotuloSelect = criar('label', 'block text-sm font-semibold mb-1', 'O que você quer avaliar?');
  rotuloSelect.htmlFor = 'fbEscopo';

  const select = criar('select', 'w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white');
  select.id = 'fbEscopo';
  for (const escopo of escopos) {
    const opcao = criar('option', '', rotulo(escopo));
    opcao.value = escopo;
    select.append(opcao);
  }
  grupo.append(rotuloSelect, select);

  const situacao = criar('div', 'text-sm border rounded-lg p-3 mb-4 oculto');
  situacao.setAttribute('role', 'status');

  const blocoEstrelas = criar('div', 'mb-4');
  blocoEstrelas.append(criar('div', 'block text-sm font-semibold mb-1', 'Sua nota'));

  const linhaEstrelas = criar('div', 'flex gap-1');
  linhaEstrelas.setAttribute('role', 'radiogroup');
  linhaEstrelas.setAttribute('aria-label', 'Nota de 1 a 5 estrelas');

  const botoesEstrela = [1, 2, 3, 4, 5].map(valor => {
    const b = criar('button', 'text-3xl leading-none text-gray-300 hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded', '★');
    b.type = 'button';
    b.setAttribute('role', 'radio');
    b.setAttribute('aria-label', `${valor} ${valor === 1 ? 'estrela' : 'estrelas'}`);
    b.addEventListener('click', () => definirEstrelas(valor));
    linhaEstrelas.append(b);
    return b;
  });
  blocoEstrelas.append(linhaEstrelas);

  function definirEstrelas(valor) {
    estrelas = valor;
    botoesEstrela.forEach((b, i) => {
      const acesa = i < valor;
      b.classList.toggle('text-amber-400', acesa);
      b.classList.toggle('text-gray-300', !acesa);
      b.setAttribute('aria-checked', String(i + 1 === valor));
    });
  }

  const blocoTexto = criar('div', 'mb-1');
  const rotuloTexto = criar('label', 'block text-sm font-semibold mb-1', 'Conte como a plataforma ajudou nos seus estudos');
  rotuloTexto.htmlFor = 'fbTexto';
  const texto = criar('textarea', 'w-full border border-gray-300 rounded-lg px-4 py-2.5');
  texto.id = 'fbTexto';
  texto.rows = 4;
  texto.maxLength = TEXTO_MAX;
  texto.placeholder = 'Fale da utilidade, da facilidade de uso e do visual.';
  blocoTexto.append(rotuloTexto, texto);

  const contador = criar('p', 'text-xs text-gray-500 mb-4', '');
  const atualizarContador = () => {
    contador.textContent = `${texto.value.length}/${TEXTO_MAX} (mínimo ${TEXTO_MIN})`;
  };
  texto.addEventListener('input', atualizarContador);

  const blocoNome = criar('div', 'mb-4');
  const rotuloNome = criar('label', 'block text-sm font-semibold mb-1', 'Nome que aparece junto da avaliação');
  rotuloNome.htmlFor = 'fbNome';
  const nome = criar('input', 'w-full border border-gray-300 rounded-lg px-4 py-2.5');
  nome.id = 'fbNome';
  nome.type = 'text';
  nome.maxLength = 60;
  nome.value = nomePublicoSugerido(perfil.nomeCompleto || perfil.primeiroNome);
  blocoNome.append(rotuloNome, nome);

  const blocoConsent = criar('label', 'flex items-start gap-2 text-sm text-gray-700 mb-4');
  const consent = criar('input', 'mt-1');
  consent.type = 'checkbox';
  blocoConsent.append(
    consent,
    criar('span', '', 'Autorizo exibir meu nome e minha avaliação publicamente no site. Posso apagá-la quando quiser.')
  );

  const aviso = criar('p', 'text-sm mb-4 oculto');
  aviso.setAttribute('role', 'alert');

  const acoes = criar('div', 'flex flex-wrap gap-3');
  const enviar = criar('button', 'bg-blue-600 text-white font-semibold rounded-lg px-6 py-3 hover:bg-blue-700 disabled:opacity-60', 'Enviar avaliação');
  enviar.type = 'button';
  const apagar = criar('button', 'border border-gray-300 rounded-lg px-6 py-3 hover:bg-gray-100 disabled:opacity-60 oculto', 'Apagar minha avaliação');
  apagar.type = 'button';
  acoes.append(enviar, apagar);

  function avisar(mensagem, ok = false) {
    aviso.textContent = mensagem;
    aviso.className = `text-sm mb-4 ${ok ? 'text-green-700' : 'text-red-700'}`;
  }

  function limparAviso() {
    aviso.textContent = '';
    aviso.className = 'text-sm mb-4 oculto';
  }

  function mostrarSituacao() {
    const info = existente && SITUACOES[existente.situacao];
    situacao.className = `text-sm border rounded-lg p-3 mb-4 ${info ? info.classe : 'oculto'}`;
    situacao.textContent = info ? info.texto : '';

    apagar.classList.toggle('oculto', !existente);
    enviar.textContent = existente ? 'Atualizar avaliação' : 'Enviar avaliação';
  }

  async function carregarEscopo() {
    limparAviso();
    enviar.disabled = true;

    try {
      existente = await lerMeuFeedback(perfil.uid, escopoAtual);
    } catch (erro) {
      console.error('Falha ao ler a avaliação:', erro);
      existente = null;
      avisar('Não foi possível carregar sua avaliação agora.');
    }

    definirEstrelas(existente ? existente.estrelas : 0);
    texto.value = existente ? existente.texto : '';
    if (existente) nome.value = existente.nomePublico;
    consent.checked = existente ? existente.consentimento === true : false;

    atualizarContador();
    mostrarSituacao();
    enviar.disabled = false;
  }

  select.addEventListener('change', () => {
    escopoAtual = select.value;
    carregarEscopo();
  });

  enviar.addEventListener('click', async () => {
    limparAviso();
    enviar.disabled = true;

    try {
      await enviarFeedback(perfil.uid, escopoAtual, {
        estrelas,
        texto: texto.value,
        nomePublico: nome.value,
        consentimento: consent.checked
      });

      existente = await lerMeuFeedback(perfil.uid, escopoAtual);
      mostrarSituacao();
      avisar('Avaliação enviada. Ela será analisada antes de aparecer no site.', true);
    } catch (erro) {
      console.error('Falha ao enviar a avaliação:', erro);

      if (erro && erro.code === 'permission-denied') {
        avisar('O envio foi recusado. É preciso ter acesso liberado e ter concluído ao menos um simulado.');
      } else if (erro && erro.code) {
        avisar('Não foi possível enviar agora. Tente novamente em instantes.');
      } else {
        avisar(erro.message);
      }
    }

    enviar.disabled = false;
  });

  apagar.addEventListener('click', async () => {
    if (!confirm('Apagar a sua avaliação? Se ela estiver publicada, sai do site.')) return;

    limparAviso();
    apagar.disabled = true;

    try {
      await apagarMeuFeedback(perfil.uid, escopoAtual);
      await carregarEscopo();
      avisar('Avaliação apagada.', true);
    } catch (erro) {
      console.error('Falha ao apagar a avaliação:', erro);
      avisar('Não foi possível apagar agora. Tente novamente em instantes.');
    }

    apagar.disabled = false;
  });

  container.replaceChildren(grupo, situacao, blocoEstrelas, blocoTexto, contador, blocoNome, blocoConsent, aviso, acoes);
  carregarEscopo();
}
