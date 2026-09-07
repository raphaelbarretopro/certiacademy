// ==========================================
// Arquivo: menu-curso.js
// Descrição: Barra inferior e menu lateral das páginas de curso no celular.
//
//            Mesmo desenho da home — a barra e a busca vêm de menu-publico.js
//            e a gaveta de menu-lateral.js —, mudando o que se lista e o que a
//            lupa filtra: aqui são os simulados deste curso.
// ==========================================

import { urlDoSite } from './auth.js';
import { LOGIN_PATH } from './firebase-config.js';
import { ehAdmin } from './acesso.js';
import { ICONES, criarItem, montarMenuLateral } from './menu-lateral.js';
import {
  botaoSairDoCabecalho,
  lerCartoes,
  montarBarraInferior,
  montarBusca,
  resolverPerfil
} from './menu-publico.js';

// Todo cartão de simulado aponta para o index.html da pasta dele, e a seção
// não tem outro tipo de link. Casar pelo destino evita depender dos nomes das
// pastas, que variam por curso (01-SIMULADO no AZ-900, 03-Power-BI no PL-900).
const CARTOES = '#simulados a[href$="/index.html"]';

// ==========================================
// Função: montarMenuCurso()
// ==========================================
export async function montarMenuCurso() {
  if (document.getElementById('barraInferior')) return;

  const simulados = lerCartoes(CARTOES);
  const barra = montarBarraInferior();

  montarBusca(barra, {
    secao: '#simulados',
    cartoes: simulados,
    rotulo: 'Buscar simulado',
    vazio: 'Nenhum simulado encontrado.'
  });

  const perfil = await resolverPerfil();
  const sairOriginal = botaoSairDoCabecalho();

  // Uma leitura recusada nao pode derrubar o menu inteiro por causa de um item
  // que so o administrador ve.
  let admin = false;
  if (perfil) {
    try {
      admin = await ehAdmin(perfil.uid);
    } catch (erro) {
      console.error('Nao foi possivel verificar o papel:', erro);
    }
  }

  montarMenuLateral({
    barra,
    perfil,
    id: 'menuCurso',
    idBotao: 'menuCursoBtn',
    rotulo: 'Menu do curso',
    logoUrl: urlDoSite('imagens/certiacademy_logo.svg'),
    entrarUrl: urlDoSite(LOGIN_PATH),

    itens({ fechar }) {
      const lista = [
        criarItem('Home', ICONES.home, { href: urlDoSite('index.html') }),
        criarItem('Meu desempenho', ICONES.desempenho, { href: urlDoSite('dashboard.html') })
      ];

      // Um item por simulado do curso, na ordem em que os cartões aparecem —
      // que é a ordem do manifesto. Um simulado novo entra sozinho.
      for (const simulado of simulados) {
        lista.push(criarItem(simulado.titulo.trim(), ICONES.curso, {
          href: simulado.href
        }));
      }

      if (admin) {
        lista.push(criarItem('Administração', ICONES.desempenho, {
          href: urlDoSite('admin.html')
        }));
      }

      lista.push(criarItem('Privacidade', ICONES.privacidade, {
        href: urlDoSite('privacidade.html')
      }));

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
