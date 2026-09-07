// ==========================================
// Arquivo: menu-home.js
// Descrição: Barra inferior e menu lateral da página inicial no celular.
//
//            A barra leva o hambúrguer à esquerda, a marca ao centro e a lupa
//            à direita. O hambúrguer abre a mesma gaveta do simulado (o motor
//            está em menu-lateral.js) com a lista de cursos; a lupa abre um
//            campo que filtra os cartões de certificação enquanto se digita.
//
//            A lista de cursos e a busca leem os próprios cartões da página.
//            Eles já saem de cursos.json pelo gerador, então um curso novo
//            aparece no menu e na busca sem que nada aqui mude.
// ==========================================

import { aguardarSessao, perfilDe, urlDoSite } from './auth.js';
import { firebaseConfigurado } from './firebase-config.js';
import { ICONES, criarItem, montarMenuLateral } from './menu-lateral.js';

const SELETOR_CARTOES = '#certificacoes a[href*="curso.html"]';

// ==========================================
// Função: lerCursos()
// Descrição: Extrai código, nome e destino de cada cartão de certificação.
// ==========================================
function lerCursos() {
  return [...document.querySelectorAll(SELETOR_CARTOES)].map(cartao => {
    const codigo = cartao.querySelector('span');
    const nome = cartao.querySelector('h3');

    return {
      cartao,
      href: cartao.getAttribute('href'),
      codigo: codigo ? codigo.textContent.trim() : '',
      nome: nome ? nome.textContent.trim() : '',
      // O texto inteiro cobre também o resumo e a contagem de questões, que é
      // por onde alguém pode procurar sem lembrar o código do exame.
      busca: cartao.textContent.toLowerCase()
    };
  });
}

// ==========================================
// Função: montarBusca(barra, cursos)
// Descrição: A lupa e o campo que filtra os cartões.
// ==========================================
function montarBusca(barra, cursos) {
  const secao = document.getElementById('certificacoes');

  const lupa = document.createElement('button');
  lupa.type = 'button';
  lupa.id = 'buscaBtn';
  lupa.className = 'barra-menu';
  lupa.setAttribute('aria-label', 'Buscar certificação');
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
  campo.placeholder = 'Buscar certificação';
  campo.setAttribute('aria-label', 'Buscar certificação');
  caixa.appendChild(campo);

  const fechar = document.createElement('button');
  fechar.type = 'button';
  fechar.className = 'barra-menu';
  fechar.setAttribute('aria-label', 'Fechar a busca');
  fechar.appendChild(ICONES.fechar());
  caixa.appendChild(fechar);

  document.body.appendChild(caixa);

  // Aviso para quando o filtro não sobra nada, senão a seção fica em branco
  // sem explicação.
  const vazio = document.createElement('p');
  vazio.className = 'busca-vazia';
  vazio.hidden = true;
  vazio.textContent = 'Nenhuma certificação encontrada.';
  if (secao) secao.appendChild(vazio);

  function filtrar(termo) {
    const alvo = termo.trim().toLowerCase();
    let visiveis = 0;

    for (const curso of cursos) {
      const combina = !alvo || curso.busca.includes(alvo);
      curso.cartao.hidden = !combina;
      if (combina) visiveis++;
    }

    vazio.hidden = visiveis > 0;
  }

  function abrir() {
    caixa.hidden = false;
    lupa.setAttribute('aria-expanded', 'true');
    campo.focus();
    // Sem isto o aluno digita e não vê o efeito: os cartões ficam fora da tela.
    if (secao) secao.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
// Função: montarMenuHome()
// ==========================================
export async function montarMenuHome() {
  if (document.getElementById('barraInferior')) return;

  const cursos = lerCursos();

  const barra = document.createElement('div');
  barra.id = 'barraInferior';
  barra.className = 'barra-inferior';

  const logo = document.createElement('img');
  logo.className = 'barra-inferior-logo';
  logo.src = urlDoSite('imagens/certiacademy_logo.svg');
  logo.alt = 'CertiAcademy';
  barra.appendChild(logo);

  document.body.appendChild(barra);

  // A lupa entra antes da gaveta porque o hambúrguer é inserido no início da
  // barra; assim a ordem final fica hambúrguer, marca, lupa.
  montarBusca(barra, cursos);

  // A sessão é opcional aqui: a home é pública. Sem login o menu ainda serve
  // para navegar entre os cursos, só não tem nome nem botão de sair.
  let perfil = null;

  if (firebaseConfigurado()) {
    try {
      const user = await aguardarSessao();
      if (user) perfil = perfilDe(user);
    } catch (erro) {
      console.error('Nao foi possivel verificar a sessao:', erro);
    }
  }

  const sairOriginal = document.querySelector('#sessaoHeader button');

  montarMenuLateral({
    barra,
    perfil,
    id: 'menuHome',
    idBotao: 'menuHomeBtn',
    rotulo: 'Menu do site',
    logoUrl: urlDoSite('imagens/certiacademy_logo.svg'),

    itens({ fechar }) {
      const lista = cursos.map(curso => criarItem(
        curso.codigo ? `Curso ${curso.codigo}` : curso.nome,
        ICONES.curso,
        { href: curso.href }
      ));

      lista.push(criarItem('Privacidade', ICONES.privacidade, {
        href: urlDoSite('privacidade.html')
      }));

      // Só faz sentido oferecer a saída para quem entrou. O botão do cabeçalho
      // já sabe encerrar a sessão; o menu clica nele em vez de repetir a
      // lógica, como no menu do simulado.
      if (perfil && sairOriginal) {
        lista.push(criarItem('Sair', ICONES.sair, {
          classe: 'menu-item-sair',
          aoClicar: () => {
            fechar();
            sairOriginal.click();
          }
        }));
      }

      return lista;
    }
  });
}
