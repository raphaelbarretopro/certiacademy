// ==========================================
// Arquivo: menu-mobile.js
// Descrição: Menu lateral do simulado, aberto pelo hambúrguer da barra
//            inferior. A gaveta em si vem de menu-lateral.js, que a home
//            também usa; aqui ficam só os itens da prova.
//
//            No celular a barra do simulado fica embaixo, ao alcance do
//            polegar, e leva só o hambúrguer e o tempo. Tudo o mais —
//            identidade, ir para a home ou para o curso, abortar, reportar
//            problema, privacidade e sair — se junta aqui dentro.
//
//            Os itens que já existem como botão na página não são
//            reimplementados: o menu clica no botão original, que segue
//            escondido pelo CSS. Assim a regra de negócio (confirmar antes de
//            abortar, abrir o modal na questão certa, encerrar a sessão)
//            continua num lugar só, e o menu não envelhece quando ela mudar.
// ==========================================

import { urlDoSite } from './auth.js';
import { ICONES, criarItem, montarMenuLateral } from './menu-lateral.js';

// ==========================================
// Função: montarMenuMobile(perfil)
// ==========================================
export function montarMenuMobile(perfil) {
  const barra = document.getElementById('cronometroContainer')
    || document.getElementById('sessaoContainer');

  if (!barra) return;

  // Os três controles que o menu aciona em vez de reimplementar.
  const original = {
    abortar: document.getElementById('abortarBtn'),
    reportar: document.getElementById('botaoReportar'),
    sair: document.getElementById('sairBtn')
  };

  let itemAbortar;
  let itemReportar;

  montarMenuLateral({
    barra,
    perfil,
    id: 'menuSimulado',
    idBotao: 'menuSimuladoBtn',
    rotulo: 'Menu do simulado',
    logoUrl: urlDoSite('imagens/certiacademy_logo.svg'),

    // O quiz esconde "Abortar" ao finalizar e ao revisar, e o "Reportar" só
    // aparece depois que a primeira questão é desenhada. O menu segue o
    // original em vez de manter uma segunda regra sobre quando cada um vale.
    aoAbrir() {
      const disponivel = elemento => Boolean(elemento) && !elemento.classList.contains('hidden');
      if (itemAbortar) itemAbortar.hidden = !disponivel(original.abortar);
      if (itemReportar) itemReportar.hidden = !disponivel(original.reportar);
    },

    itens({ fechar }) {
      const lista = [];

      lista.push(criarItem('Home', ICONES.home, {
        href: urlDoSite('index.html')
      }));

      // O rodapé da página aponta para o curso e o título da coluna direita
      // traz o código dele. Os dois já estão na página, então o menu não
      // precisa receber nada por parâmetro nem duplicar o caminho.
      const linkDoCurso = document.querySelector('.rodape-simulado a');
      const codigoDoCurso = (document.querySelector('.sidebarDireita-titulo') || {}).textContent;

      if (linkDoCurso) {
        lista.push(criarItem(
          codigoDoCurso ? `Curso ${codigoDoCurso.trim()}` : 'Voltar ao curso',
          ICONES.curso,
          { href: linkDoCurso.getAttribute('href') }
        ));
      }

      itemAbortar = criarItem('Abortar simulado', ICONES.abortar, {
        classe: 'menu-item-abortar',
        aoClicar: () => {
          fechar();
          if (original.abortar) original.abortar.click();
        }
      });
      lista.push(itemAbortar);

      itemReportar = criarItem('Reportar problema', ICONES.reportar, {
        aoClicar: () => {
          fechar();
          if (original.reportar) original.reportar.click();
        }
      });
      lista.push(itemReportar);

      lista.push(criarItem('Privacidade', ICONES.privacidade, {
        href: urlDoSite('privacidade.html')
      }));

      lista.push(criarItem('Sair', ICONES.sair, {
        classe: 'menu-item-sair',
        aoClicar: () => {
          fechar();
          if (original.sair) original.sair.click();
        }
      }));

      return lista;
    }
  });
}
