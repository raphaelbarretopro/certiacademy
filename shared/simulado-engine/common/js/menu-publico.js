// ==========================================
// Arquivo: menu-publico.js
// Descrição: Barra inferior das páginas públicas no celular — a home e as
//            páginas de curso.
//
//            As duas mostram a mesma barra (hambúrguer à esquerda, marca ao
//            centro, lupa à direita) e a mesma busca; o que muda é o que a
//            lupa filtra e o que a gaveta lista. O comum mora aqui, a gaveta
//            em menu-lateral.js, e cada página traz só a sua lista.
//
//            A busca lê os próprios cartões da página. Eles saem de
//            cursos.json pelo gerador, então um curso ou um simulado novo
//            entra na busca e no menu sem que nada aqui mude.
// ==========================================

import { aguardarSessao, perfilDe, urlDoSite } from './auth.js';
import { firebaseConfigurado } from './firebase-config.js';
import { ICONES } from './menu-lateral.js';

// ==========================================
// Função: semAcento(texto)
// Descrição: Quem digita no teclado do celular escreve "bonus", nao "Bônus".
//            Comparar sem acento faz os dois se encontrarem.
// ==========================================
function semAcento(texto) {
  return texto.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
}

// ==========================================
// Função: lerCartoes(seletor)
// Descrição: Cada cartão vira um alvo de busca. O texto inteiro entra no
//            índice, e não só o título: quem procura pode lembrar do resumo
//            ou do número de questões, e não do código do exame.
// ==========================================
export function lerCartoes(seletor) {
  return [...document.querySelectorAll(seletor)].map(cartao => ({
    cartao,
    href: cartao.getAttribute('href'),
    titulo: (cartao.querySelector('h3, .font-semibold') || {}).textContent || '',
    codigo: (cartao.querySelector('span') || {}).textContent || '',
    busca: semAcento(cartao.textContent)
  }));
}

// ==========================================
// Função: montarBarraInferior()
// ==========================================
export function montarBarraInferior() {
  const barra = document.createElement('div');
  barra.id = 'barraInferior';
  barra.className = 'barra-inferior';

  const logo = document.createElement('img');
  logo.className = 'barra-inferior-logo';
  logo.src = urlDoSite('imagens/certiacademy_logo.svg');
  logo.alt = 'CertiAcademy';
  barra.appendChild(logo);

  document.body.appendChild(barra);

  return barra;
}

// ==========================================
// Função: montarBusca(barra, opcoes)
// Descrição: A lupa e o campo que filtra os cartões enquanto se digita.
// ==========================================
export function montarBusca(barra, { secao, cartoes, rotulo, vazio }) {
  const alvoSecao = document.querySelector(secao);

  const lupa = document.createElement('button');
  lupa.type = 'button';
  lupa.id = 'buscaBtn';
  lupa.className = 'barra-menu';
  lupa.setAttribute('aria-label', rotulo);
  lupa.setAttribute('aria-expanded', 'false');
  lupa.setAttribute('aria-controls', 'barraBusca');
  lupa.appendChild(ICONES.lupa());
  barra.appendChild(lupa);

  const caixa = document.createElement('div');
  caixa.id = 'barraBusca';
  caixa.className = 'barra-busca';
  caixa.hidden = true;

  const campo = document.createElement('input');
  campo.type = 'search';
  campo.placeholder = rotulo;
  campo.setAttribute('aria-label', rotulo);
  caixa.appendChild(campo);

  const fechar = document.createElement('button');
  fechar.type = 'button';
  fechar.className = 'barra-menu';
  fechar.setAttribute('aria-label', 'Fechar a busca');
  fechar.appendChild(ICONES.fechar());
  caixa.appendChild(fechar);

  document.body.appendChild(caixa);

  // Aviso para quando o filtro não deixa nada, senão a seção fica em branco
  // sem explicação.
  const semResultado = document.createElement('p');
  semResultado.className = 'busca-vazia';
  semResultado.hidden = true;
  semResultado.textContent = vazio;
  if (alvoSecao) alvoSecao.appendChild(semResultado);

  function filtrar(termo) {
    const alvo = semAcento(termo.trim());
    let visiveis = 0;

    for (const item of cartoes) {
      const combina = !alvo || item.busca.includes(alvo);
      item.cartao.classList.toggle('busca-oculto', !combina);
      if (combina) visiveis++;
    }

    semResultado.hidden = visiveis > 0;
  }

  function abrir() {
    caixa.hidden = false;
    lupa.setAttribute('aria-expanded', 'true');
    campo.focus();
    // Sem isto o visitante digita e não vê o efeito: os cartões ficam fora da
    // tela.
    if (alvoSecao) alvoSecao.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function fecharBusca() {
    caixa.hidden = true;
    lupa.setAttribute('aria-expanded', 'false');
    campo.value = '';
    filtrar('');
    lupa.focus();
  }

  lupa.addEventListener('click', () => {
    if (caixa.hidden) abrir();
    else fecharBusca();
  });

  fechar.addEventListener('click', fecharBusca);
  campo.addEventListener('input', () => filtrar(campo.value));
  campo.addEventListener('keydown', evento => {
    if (evento.key === 'Escape') fecharBusca();
  });
}

// ==========================================
// Função: resolverPerfil()
// Descrição: A sessão é opcional nestas páginas: elas são públicas. Sem login
//            o menu ainda serve para navegar, só troca a saudação pelo convite
//            para entrar.
// ==========================================
export async function resolverPerfil() {
  if (!firebaseConfigurado()) return null;

  try {
    const user = await aguardarSessao();
    return user ? perfilDe(user) : null;
  } catch (erro) {
    console.error('Nao foi possivel verificar a sessao:', erro);
    return null;
  }
}

// ==========================================
// Função: botaoSairDoCabecalho()
// Descrição: O cabeçalho de cima fica escondido no celular, mas continua no
//            DOM. O menu clica no botão que header-sessao.js escreveu ali em
//            vez de repetir a lógica de encerrar a sessão.
// ==========================================
export function botaoSairDoCabecalho() {
  return document.querySelector('#sessaoHeader button');
}
