// ==========================================
// Arquivo: menu-lateral.js
// Descrição: Motor do menu lateral do celular — a gaveta que abre pelo
//            hambúrguer da barra inferior.
//
//            O simulado e a home usam a mesma gaveta com listas diferentes,
//            então o que é comum mora aqui: os ícones, a montagem do painel, a
//            animação, o fechamento por Esc, pelo X ou tocando fora, e o
//            bloqueio da rolagem enquanto ela está aberta. Quem chama informa
//            só a barra onde o hambúrguer entra, o perfil do aluno e os itens.
// ==========================================

// ==========================================
// Função: icone(caminhos)
// Descrição: SVG de 24x24 herdando a cor do texto. Caractere de símbolo não
//            serve aqui: as setas do menu antigo caíam no glifo substituto do
//            iOS, que desenhava outra coisa.
// ==========================================
export function icone(...caminhos) {
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

export const ICONES = {
  // Telhado e porta: a página inicial.
  home: () => icone('M3 10.5 12 3l9 7.5', 'M5 9.5V21h14V9.5', 'M10 21v-6h4v6'),
  // Livro aberto: a página do curso.
  curso: () => icone('M12 6.5C10.5 5 8 4.5 4 5v13c4-.5 6.5 0 8 1.5 1.5-1.5 4-2 8-1.5V5c-4-.5-6.5 0-8 1.5Z', 'M12 6.5v13'),
  // Colunas de um gráfico: desempenho.
  desempenho: () => icone('M4 20V10', 'M10 20V4', 'M16 20v-6', 'M22 20H2'),
  // Círculo cortado: interromper.
  abortar: () => icone('M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z', 'M6 6l12 12'),
  // Triângulo de atenção: reportar.
  reportar: () => icone('M12 4 2.5 20h19L12 4Z', 'M12 10v4', 'M12 17.5v.5'),
  // Escudo: privacidade.
  privacidade: () => icone('M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z'),
  // Porta com seta saindo: encerrar a sessão.
  sair: () => icone('M15 4h4v16h-4', 'M10 8l-4 4 4 4', 'M6 12h9'),
  // Hambúrguer.
  hamburguer: () => icone('M3 6h18', 'M3 12h18', 'M3 18h18'),
  // X de fechar.
  fechar: () => icone('M6 6l12 12', 'M18 6L6 18'),
  // Lupa.
  lupa: () => icone('M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z', 'M16.5 16.5 21 21')
};

// ==========================================
// Função: criarItem(rotulo, criarIcone, opcoes)
// Descrição: Uma linha do menu. Vira <a> quando recebe destino e <button>
//            quando aciona algo na própria página.
// ==========================================
export function criarItem(rotulo, criarIcone, { href, aoClicar, classe } = {}) {
  const item = document.createElement(href ? 'a' : 'button');
  item.className = 'menu-item';
  if (classe) item.classList.add(classe);

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
// Função: montarMenuLateral(opcoes)
// Descrição: Monta o hambúrguer e a gaveta. Devolve o que quem chamou precisa
//            para continuar mandando nela: os elementos e as duas funções.
//
//            `itens` é uma função que recebe { fechar } e devolve os elementos
//            da lista — assim um item pode fechar a gaveta antes de agir sem
//            que este módulo precise conhecer o que ele faz.
// ==========================================
export function montarMenuLateral({
  barra,
  perfil,
  itens,
  id = 'menuLateral',
  idBotao = 'menuLateralBtn',
  rotulo = 'Menu',
  logoUrl,
  entrarUrl,
  aoAbrir
}) {
  if (!barra || document.getElementById(id)) return null;

  const botao = document.createElement('button');
  botao.id = idBotao;
  botao.type = 'button';
  botao.className = 'barra-menu';
  botao.setAttribute('aria-label', `Abrir o ${rotulo.toLowerCase()}`);
  botao.setAttribute('aria-expanded', 'false');
  botao.setAttribute('aria-controls', id);
  botao.appendChild(ICONES.hamburguer());
  barra.prepend(botao);

  const menu = document.createElement('div');
  menu.id = id;
  menu.className = 'menu-lateral';
  menu.hidden = true;

  const fundo = document.createElement('div');
  fundo.className = 'menu-fundo';
  menu.appendChild(fundo);

  const painel = document.createElement('nav');
  painel.className = 'menu-painel';
  painel.setAttribute('aria-label', rotulo);
  menu.appendChild(painel);

  const fechar = document.createElement('button');
  fechar.type = 'button';
  fechar.className = 'menu-fechar';
  fechar.setAttribute('aria-label', 'Fechar o menu');
  fechar.appendChild(ICONES.fechar());
  painel.appendChild(fechar);

  // 1º item: quem está usando. Sem sessão não há quem saudar — um "Olá!" sem
  // nome não diz nada —, então o lugar recebe o convite para entrar.
  if (perfil) {
    const identidade = document.createElement('div');
    identidade.className = 'menu-aluno';

    if (perfil.fotoUrl) {
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
    nome.textContent = `Olá, ${perfil.primeiroNome}!`;
    identidade.appendChild(nome);
    painel.appendChild(identidade);
  } else if (entrarUrl) {
    const entrar = document.createElement('a');
    entrar.className = 'menu-entrar';
    entrar.href = entrarUrl;
    entrar.textContent = 'Entrar';
    painel.appendChild(entrar);
  }

  const lista = document.createElement('div');
  lista.className = 'menu-lista';
  painel.appendChild(lista);

  // Último item: a marca fecha a lista.
  if (logoUrl) {
    const logo = document.createElement('img');
    logo.className = 'menu-logo';
    logo.src = logoUrl;
    logo.alt = 'CertiAcademy';
    painel.appendChild(logo);
  }

  document.body.appendChild(menu);

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

  for (const item of itens({ fechar: fecharMenu })) {
    lista.appendChild(item);
  }

  function abrirMenu() {
    if (aoAbrir) aoAbrir();
    menu.hidden = false;
    // Um quadro depois, para a transição partir do estado fechado.
    requestAnimationFrame(() => menu.classList.add('aberto'));
    botao.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-aberto');
    fechar.focus();
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

  return { botao, menu, painel, lista, abrir: abrirMenu, fechar: fecharMenu };
}
