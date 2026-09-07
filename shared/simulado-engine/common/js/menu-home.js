// ==========================================
// Arquivo: menu-home.js
// Descrição: Barra inferior e menu lateral da página inicial no celular.
//
//            A barra e a busca vêm de menu-publico.js e a gaveta de
//            menu-lateral.js; aqui ficam só a lista de cursos e o que a lupa
//            filtra.
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

const CARTOES = '#certificacoes a[href*="curso.html"]';

// ==========================================
// Função: montarMenuHome()
// ==========================================
export async function montarMenuHome() {
  if (document.getElementById('barraInferior')) return;

  const cursos = lerCartoes(CARTOES);
  const barra = montarBarraInferior();

  // A lupa entra antes da gaveta porque o hambúrguer é inserido no início da
  // barra; assim a ordem final fica hambúrguer, marca, lupa.
  montarBusca(barra, {
    secao: '#certificacoes',
    cartoes: cursos,
    rotulo: 'Buscar certificação',
    vazio: 'Nenhuma certificação encontrada.'
  });

  const perfil = await resolverPerfil();
  const sairOriginal = botaoSairDoCabecalho();
  const admin = perfil ? await ehAdmin(perfil.uid) : false;

  montarMenuLateral({
    barra,
    perfil,
    id: 'menuHome',
    idBotao: 'menuHomeBtn',
    rotulo: 'Menu do site',
    logoUrl: urlDoSite('imagens/certiacademy_logo.svg'),
    entrarUrl: urlDoSite(LOGIN_PATH),

    itens({ fechar }) {
      const lista = cursos.map(curso => criarItem(
        curso.codigo ? `Curso ${curso.codigo.trim()}` : curso.titulo.trim(),
        ICONES.curso,
        { href: curso.href }
      ));

      // O painel so entra no menu de quem e administrador.
      if (admin) {
        lista.push(criarItem('Painel do administrador', ICONES.desempenho, {
          href: urlDoSite('admin.html')
        }));
      }

      lista.push(criarItem('Privacidade', ICONES.privacidade, {
        href: urlDoSite('privacidade.html')
      }));

      // Só faz sentido oferecer a saída para quem entrou.
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
