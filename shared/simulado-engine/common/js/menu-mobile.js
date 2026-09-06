// ==========================================
// Arquivo: menu-mobile.js
// Descrição: Menu lateral do simulado no celular, aberto pelo hambúrguer da
//            barra inferior.
//
//            No celular a barra do simulado fica embaixo, ao alcance do polegar,
//            e só cabem três coisas nela: o hambúrguer, o tempo e o botão de
//            sair. Tudo o mais que antes ficava espalhado pela tela — o nome do
//            aluno, "Meu desempenho", abortar, voltar ao curso, reportar
//            problema — se junta aqui dentro.
//
//            Os itens que já existem como botão na página não são
//            reimplementados: o menu clica no botão original, que segue
//            escondido pelo CSS. Assim a regra de negócio (confirmar antes de
//            abortar, abrir o modal na questão certa) continua num lugar só, e
//            o menu não envelhece quando ela mudar.
// ==========================================

import { urlDoSite } from './auth.js';

const ID_BOTAO = 'menuSimuladoBtn';
const ID_MENU = 'menuSimulado';

// ==========================================
// Função: icone(caminhos)
// Descrição: SVG de 24x24 herdando a cor do texto. Caracteres de símbolo não
//            servem aqui: as setas do menu antigo caíam no glifo substituto do
//            iOS, que desenhava outra coisa.
// ==========================================
function icone(...caminhos) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '20');
  svg.setAttribute('height', '20');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.8');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.classList.add('menu-icone');

  for (const d of caminhos) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    svg.appendChild(path);
  }

  return svg;
}

const ICONES = {
  // Colunas de um gráfico: desempenho.
  desempenho: () => icone('M4 20V10', 'M10 20V4', 'M16 20v-6', 'M22 20H2'),
  // Círculo cortado: interromper.
  abortar: () => icone('M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z', 'M6 6l12 12'),
  // Seta voltando para a esquerda.
  voltar: () => icone('M19 12H5', 'M11 18l-6-6 6-6'),
  // Triângulo de atenção: reportar.
  reportar: () => icone('M12 4 2.5 20h19L12 4Z', 'M12 10v4', 'M12 17.5v.5'),
  // Escudo: privacidade.
  privacidade: () => icone('M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z'),
  // Hambúrguer.
  hamburguer: () => icone('M3 6h18', 'M3 12h18', 'M3 18h18'),
  // X de fechar.
  fechar: () => icone('M6 6l12 12', 'M18 6L6 18')
};

// ==========================================
// Função: criarItem(rotulo, criarIcone)
// Descrição: Uma linha do menu. Vira <a> quando recebe destino e <button>
//            quando aciona algo na própria página.
// ==========================================
function criarItem(rotulo, criarIcone, { href, aoClicar } = {}) {
  const item = document.createElement(href ? 'a' : 'button');
  item.className = 'menu-item';

  if (href) {
    item.href = href;
  } else {
    item.type = 'button';
    item.addEventListener('click', aoClicar);
  }

  item.appendChild(criarIcone());

  const texto = document.createElement('span');
  texto.textContent = rotulo;
  item.appendChild(texto);

  return item;
}

// ==========================================
// Função: montarMenuMobile(perfil)
// ==========================================
export function montarMenuMobile(perfil) {
  if (document.getElementById(ID_MENU)) return;

  const barra = document.getElementById('cronometroContainer')
    || document.getElementById('sessaoContainer');

  if (!barra) return;

  // ----------------------------------------
  // Hambúrguer, na ponta esquerda da barra
  // ----------------------------------------
  const botao = document.createElement('button');
  botao.id = ID_BOTAO;
  botao.type = 'button';
  botao.className = 'barra-menu';
  botao.setAttribute('aria-label', 'Abrir o menu do simulado');
  botao.setAttribute('aria-expanded', 'false');
  botao.setAttribute('aria-controls', ID_MENU);
  botao.appendChild(ICONES.hamburguer());
  barra.prepend(botao);

  // ----------------------------------------
  // Painel
  // ----------------------------------------
  const menu = document.createElement('div');
  menu.id = ID_MENU;
  menu.className = 'menu-lateral';
  menu.hidden = true;

  const fundo = document.createElement('div');
  fundo.className = 'menu-fundo';
  menu.appendChild(fundo);

  const painel = document.createElement('nav');
  painel.className = 'menu-painel';
  painel.setAttribute('aria-label', 'Menu do simulado');
  menu.appendChild(painel);

  const fechar = document.createElement('button');
  fechar.type = 'button';
  fechar.className = 'menu-fechar';
  fechar.setAttribute('aria-label', 'Fechar o menu');
  fechar.appendChild(ICONES.fechar());
  painel.appendChild(fechar);

  // 1. Logo
  const logo = document.createElement('img');
  logo.className = 'menu-logo';
  logo.src = urlDoSite('imagens/certiacademy_logo.svg');
  logo.alt = 'CertiAcademy';
  painel.appendChild(logo);

  // 2. Saudação
  const identidade = document.createElement('div');
  identidade.className = 'menu-aluno';

  if (perfil && perfil.fotoUrl) {
    const foto = document.createElement('img');
    foto.className = 'menu-aluno-foto';
    foto.src = perfil.fotoUrl;
    foto.alt = '';
    foto.referrerPolicy = 'no-referrer';
    foto.onerror = () => foto.remove();
    identidade.appendChild(foto);
  }

  const nome = document.createElement('span');
  nome.className = 'menu-aluno-nome';
  nome.textContent = perfil ? `Olá, ${perfil.primeiroNome}!` : 'Olá!';
  identidade.appendChild(nome);
  painel.appendChild(identidade);

  // 3 a 7. Itens
  const lista = document.createElement('div');
  lista.className = 'menu-lista';

  lista.appendChild(criarItem('Meu desempenho', ICONES.desempenho, {
    href: urlDoSite('dashboard.html')
  }));

  // Os três seguintes acionam controles que já existem na página. Guardamos a
  // referência ao item para poder espelhar o estado do original ao abrir.
  const original = {
    abortar: document.getElementById('abortarBtn'),
    reportar: document.getElementById('botaoReportar')
  };

  const itemAbortar = criarItem('Abortar', ICONES.abortar, {
    aoClicar: () => {
      fecharMenu();
      if (original.abortar) original.abortar.click();
    }
  });
  itemAbortar.classList.add('menu-item-abortar');
  lista.appendChild(itemAbortar);

  const linkDoCurso = document.querySelector('.rodape-simulado a');
  if (linkDoCurso) {
    lista.appendChild(criarItem('Voltar ao curso', ICONES.voltar, {
      href: linkDoCurso.getAttribute('href')
    }));
  }

  const itemReportar = criarItem('Reportar problema', ICONES.reportar, {
    aoClicar: () => {
      fecharMenu();
      if (original.reportar) original.reportar.click();
    }
  });
  lista.appendChild(itemReportar);

  lista.appendChild(criarItem('Privacidade', ICONES.privacidade, {
    href: urlDoSite('privacidade.html')
  }));

  painel.appendChild(lista);
  document.body.appendChild(menu);

  // ----------------------------------------
  // Abrir e fechar
  // ----------------------------------------
  function espelharDisponibilidade() {
    // O quiz esconde "Abortar" ao finalizar e ao revisar, e o "Reportar" só
    // aparece depois que a primeira questão é desenhada. O menu segue o
    // original em vez de manter uma segunda regra sobre quando cada um vale.
    const disponivel = elemento => Boolean(elemento) && !elemento.classList.contains('hidden');

    itemAbortar.hidden = !disponivel(original.abortar);
    itemReportar.hidden = !disponivel(original.reportar);
  }

  function abrirMenu() {
    espelharDisponibilidade();
    menu.hidden = false;
    // Um quadro depois, para a transicao partir do estado fechado.
    requestAnimationFrame(() => menu.classList.add('aberto'));
    botao.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-aberto');
    fechar.focus();
  }

  function fecharMenu({ devolverFoco = false } = {}) {
    menu.classList.remove('aberto');
    botao.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-aberto');

    // Só some do fluxo depois da transição, senão ela não chega a aparecer.
    const esconder = () => { menu.hidden = true; };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      esconder();
    } else {
      setTimeout(esconder, 200);
    }

    if (devolverFoco) botao.focus();
  }

  botao.addEventListener('click', () => {
    if (menu.hidden) abrirMenu();
    else fecharMenu({ devolverFoco: true });
  });

  fechar.addEventListener('click', () => fecharMenu({ devolverFoco: true }));
  fundo.addEventListener('click', () => fecharMenu({ devolverFoco: true }));

  document.addEventListener('keydown', evento => {
    if (evento.key === 'Escape' && !menu.hidden) fecharMenu({ devolverFoco: true });
  });
}
