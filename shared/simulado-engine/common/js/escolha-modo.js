// ==========================================
// Arquivo: escolha-modo.js
// Descrição: A pergunta que abre o simulado — praticar ou simular a prova.
//
//            Aparece uma vez por tentativa. Depois de escolhido, o modo fica no
//            estado persistido do quiz, então recarregar a página não pergunta
//            de novo e não zera o cronômetro. Refazer o simulado limpa o estado
//            e a pergunta volta, porque aí é uma tentativa nova.
//
//            A tela é montada por JavaScript, e não escrita nos 46 HTML: o
//            motor é compartilhado, e uma marcação repetida em 46 arquivos
//            envelhece sozinha a cada mudança.
// ==========================================

import { MODO_EXAME, MODO_PRATICA } from './quiz.js';

const ID = 'escolhaModo';

// ==========================================
// Função: icone(caminhos)
// Descrição: SVG herdando a cor do texto, como no resto do motor. Caractere de
//            símbolo não serve: as fontes do iOS não cobrem boa parte deles.
// ==========================================
function icone(...caminhos) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '26');
  svg.setAttribute('height', '26');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.7');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.classList.add('modo-icone');

  for (const d of caminhos) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    svg.appendChild(path);
  }

  return svg;
}

// Livro aberto: treino.
const ICONE_PRATICA = () => icone(
  'M12 6.5C10.5 5 8 4.5 4 5v13c4-.5 6.5 0 8 1.5 1.5-1.5 4-2 8-1.5V5c-4-.5-6.5 0-8 1.5Z',
  'M12 6.5v13'
);

// Cronômetro: a prova valendo.
const ICONE_EXAME = () => icone(
  'M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z',
  'M12 10v4l2.5 2',
  'M9 2h6'
);

// ==========================================
// Função: montarCartao(opcoes)
// ==========================================
function montarCartao({ criarIcone, titulo, resumo, marcadores, rotuloBotao, destaque, aoEscolher }) {
  const cartao = document.createElement('div');
  cartao.className = 'modo-cartao' + (destaque ? ' modo-cartao-destaque' : '');

  const topo = document.createElement('div');
  topo.className = 'modo-cartao-topo';
  topo.appendChild(criarIcone());

  const nome = document.createElement('h3');
  nome.className = 'modo-cartao-titulo';
  nome.textContent = titulo;
  topo.appendChild(nome);
  cartao.appendChild(topo);

  const texto = document.createElement('p');
  texto.className = 'modo-cartao-resumo';
  texto.textContent = resumo;
  cartao.appendChild(texto);

  const lista = document.createElement('ul');
  lista.className = 'modo-cartao-lista';
  for (const marcador of marcadores) {
    const item = document.createElement('li');
    item.textContent = marcador;
    lista.appendChild(item);
  }
  cartao.appendChild(lista);

  const botao = document.createElement('button');
  botao.type = 'button';
  botao.className = 'modo-cartao-botao' + (destaque ? ' modo-cartao-botao-destaque' : '');
  botao.textContent = rotuloBotao;
  botao.addEventListener('click', aoEscolher);
  cartao.appendChild(botao);

  return cartao;
}

// ==========================================
// Função: perguntarModo(minutos)
// Descrição: Resolve com o modo escolhido. Não há como fechar sem escolher —
//            começar a prova sem saber se o relógio conta seria pior do que
//            insistir na pergunta.
// ==========================================
export function perguntarModo(minutos) {
  return new Promise(resolve => {
    const tela = document.createElement('div');
    tela.id = ID;
    tela.className = 'modo-tela';
    tela.setAttribute('role', 'dialog');
    tela.setAttribute('aria-modal', 'true');
    tela.setAttribute('aria-labelledby', 'modoTitulo');

    const painel = document.createElement('div');
    painel.className = 'modo-painel';

    const titulo = document.createElement('h2');
    titulo.id = 'modoTitulo';
    titulo.className = 'modo-titulo';
    titulo.textContent = 'Como você quer fazer este simulado?';
    painel.appendChild(titulo);

    const subtitulo = document.createElement('p');
    subtitulo.className = 'modo-subtitulo';
    subtitulo.textContent = 'A escolha vale para esta tentativa e não pode ser trocada no meio.';
    painel.appendChild(subtitulo);

    const cartoes = document.createElement('div');
    cartoes.className = 'modo-cartoes';

    function escolher(modo) {
      tela.remove();
      document.body.classList.remove('modo-escolhendo');
      resolve(modo);
    }

    cartoes.appendChild(montarCartao({
      criarIcone: ICONE_PRATICA,
      titulo: 'Praticar',
      resumo: 'Para estudar sem a pressão do relógio.',
      marcadores: [
        'Sem limite de tempo — o cronômetro conta quanto você levou',
        'Você finaliza quando quiser',
        'Pode fechar a página e voltar depois'
      ],
      rotuloBotao: 'Praticar',
      aoEscolher: () => escolher(MODO_PRATICA)
    }));

    cartoes.appendChild(montarCartao({
      criarIcone: ICONE_EXAME,
      titulo: 'Simular a certificação',
      resumo: 'Do jeito que o exame acontece de verdade.',
      marcadores: [
        `${minutos} minutos corridos, sem pausa`,
        'O tempo continua correndo se você fechar a página',
        'Acabou o tempo, a prova é entregue como está'
      ],
      rotuloBotao: 'Simular a certificação',
      destaque: true,
      aoEscolher: () => escolher(MODO_EXAME)
    }));

    painel.appendChild(cartoes);
    tela.appendChild(painel);

    // O corpo trava a rolagem enquanto a pergunta está na tela, senão dá para
    // ler as questões por trás dela antes de decidir se o relógio conta.
    document.body.classList.add('modo-escolhendo');
    document.body.appendChild(tela);

    painel.querySelector('.modo-cartao-botao').focus();
  });
}
