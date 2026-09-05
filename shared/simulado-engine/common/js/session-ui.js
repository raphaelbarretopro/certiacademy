// ==========================================
// Arquivo: session-ui.js
// Descrição: Saudação com o primeiro nome do aluno, avatar e botão de sair.
//
//            A barra é injetada por JavaScript, do mesmo jeito que o
//            cronômetro já faz, para que os HTML dos simulados não precisem
//            declarar nada. Quando o cronômetro existe, o badge entra na barra
//            dele; quando não existe (simulado já finalizado, ou outra página),
//            a barra é criada aqui.
// ==========================================

import { sair, urlDoSite } from './auth.js';
import { LOGIN_PATH } from './firebase-config.js';

const BADGE_ID = 'sessaoUsuario';

// ==========================================
// Função: obterBarraSuperior()
// Descrição: Reaproveita a barra do cronômetro ou cria uma equivalente
// ==========================================
function obterBarraSuperior() {
  const doCronometro = document.getElementById('cronometroContainer');
  if (doCronometro) return doCronometro;

  const existente = document.getElementById('sessaoContainer');
  if (existente) return existente;

  const barra = document.createElement('div');
  barra.id = 'sessaoContainer';
  barra.style.position = 'fixed';
  barra.style.top = '0';
  barra.style.left = '0';
  barra.style.width = '100%';
  barra.style.backgroundColor = '#000';
  barra.style.color = '#fff';
  barra.style.padding = '10px';
  barra.style.minHeight = '44px';
  barra.style.zIndex = '9999';
  document.body.prepend(barra);

  return barra;
}

// ==========================================
// Função: montarBadgeSessao(perfil)
// Descrição: Desenha "Olá, <primeiro nome>" com avatar e botão de sair
// ==========================================
export function montarBadgeSessao(perfil) {
  if (!perfil) return;

  const anterior = document.getElementById(BADGE_ID);
  if (anterior) anterior.remove();

  const barra = obterBarraSuperior();
  barra.style.position = 'fixed';

  const badge = document.createElement('div');
  badge.id = BADGE_ID;
  badge.style.position = 'absolute';
  badge.style.right = '14px';
  badge.style.top = '50%';
  badge.style.transform = 'translateY(-50%)';
  badge.style.display = 'flex';
  badge.style.alignItems = 'center';
  badge.style.gap = '10px';
  badge.style.fontSize = '15px';
  badge.style.lineHeight = '1';

  if (perfil.fotoUrl) {
    const foto = document.createElement('img');
    foto.src = perfil.fotoUrl;
    foto.alt = '';
    foto.referrerPolicy = 'no-referrer';
    foto.style.width = '28px';
    foto.style.height = '28px';
    foto.style.borderRadius = '50%';
    foto.style.flex = 'none';
    foto.onerror = () => foto.remove();
    badge.appendChild(foto);
  }

  const saudacao = document.createElement('span');
  saudacao.textContent = `Olá, ${perfil.primeiroNome}`;
  saudacao.title = perfil.email;
  badge.appendChild(saudacao);

  const historico = document.createElement('a');
  historico.href = urlDoSite('dashboard.html');
  historico.textContent = 'Meu desempenho';
  historico.style.color = '#fff';
  historico.style.fontSize = '13px';
  historico.style.textDecoration = 'underline';
  historico.style.textUnderlineOffset = '3px';
  badge.appendChild(historico);

  const sairBtn = document.createElement('button');
  sairBtn.type = 'button';
  sairBtn.id = 'sairBtn';
  sairBtn.textContent = 'Sair';
  sairBtn.style.background = 'transparent';
  sairBtn.style.color = '#fff';
  sairBtn.style.border = '1px solid rgba(255,255,255,.55)';
  sairBtn.style.borderRadius = '4px';
  sairBtn.style.padding = '4px 10px';
  sairBtn.style.fontSize = '13px';
  sairBtn.style.cursor = 'pointer';
  sairBtn.addEventListener('click', encerrarSessao);
  badge.appendChild(sairBtn);

  barra.appendChild(badge);
}

// ==========================================
// Função: encerrarSessao()
// ==========================================
async function encerrarSessao() {
  const sairBtn = document.getElementById('sairBtn');
  if (sairBtn) {
    sairBtn.disabled = true;
    sairBtn.textContent = 'Saindo...';
  }

  try {
    await sair();
  } catch (erro) {
    console.error('Falha ao encerrar a sessao:', erro);
  }

  window.location.replace(urlDoSite(LOGIN_PATH));
}

// ==========================================
// Função: revelarPagina()
// Descrição: Libera o conteúdo que o CSS mantém oculto até o portão resolver.
//            Sem isso o visitante deslogado veria a estrutura da prova piscar
//            antes de ser redirecionado.
// ==========================================
export function revelarPagina() {
  document.body.dataset.sessao = 'ok';
}

// ==========================================
// Função: mostrarFalhaDeSessao(mensagem)
// Descrição: A página começa oculta; se a autenticação falhar, ela precisa
//            voltar a aparecer com uma explicação, nunca ficar em branco.
// ==========================================
export function mostrarFalhaDeSessao(mensagem) {
  revelarPagina();

  const aviso = document.createElement('div');
  aviso.setAttribute('role', 'alert');
  aviso.style.position = 'fixed';
  aviso.style.inset = '0';
  aviso.style.display = 'flex';
  aviso.style.alignItems = 'center';
  aviso.style.justifyContent = 'center';
  aviso.style.padding = '24px';
  aviso.style.background = '#fff';
  aviso.style.zIndex = '10001';

  const caixa = document.createElement('div');
  caixa.style.maxWidth = '460px';
  caixa.style.textAlign = 'center';
  caixa.style.font = '16px/1.6 "Segoe UI", Tahoma, sans-serif';
  caixa.style.color = '#1b1b1b';

  const titulo = document.createElement('h2');
  titulo.textContent = 'Não foi possível verificar seu acesso';
  titulo.style.marginBottom = '10px';

  const texto = document.createElement('p');
  texto.textContent = mensagem;
  texto.style.marginBottom = '18px';

  const recarregar = document.createElement('button');
  recarregar.type = 'button';
  recarregar.textContent = 'Tentar novamente';
  recarregar.style.background = '#0078D4';
  recarregar.style.color = '#fff';
  recarregar.style.border = 'none';
  recarregar.style.borderRadius = '6px';
  recarregar.style.padding = '10px 22px';
  recarregar.style.fontSize = '15px';
  recarregar.style.cursor = 'pointer';
  recarregar.addEventListener('click', () => window.location.reload());

  caixa.append(titulo, texto, recarregar);
  aviso.appendChild(caixa);
  document.body.appendChild(aviso);
}
