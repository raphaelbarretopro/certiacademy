// ==========================================
// Arquivo: header-sessao.js
// Descrição: Bloco de usuário no cabeçalho das páginas claras (home, páginas de
//            curso, dashboard) — avatar, saudação e botão de sair.
//
//            Diferente do session-ui.js, que desenha o badge branco sobre a
//            barra preta dos simulados, este monta a versão para fundo claro e
//            NÃO exige sessão: estas páginas são públicas, então quem não está
//            logado vê um botão de entrar no lugar.
//
//            Uso:
//              <div id="sessaoHeader"></div>
//              <script type="module">
//                import { montarHeaderSessao } from '<caminho>/header-sessao.js';
//                montarHeaderSessao(document.getElementById('sessaoHeader'));
//              </script>
// ==========================================

import { aguardarSessao, perfilDe, sair, urlDoSite } from './auth.js';
import { firebaseConfigurado, LOGIN_PATH } from './firebase-config.js';

// ==========================================
// Função: montarBotaoEntrar(alvo)
// ==========================================
function montarBotaoEntrar(alvo) {
  const entrar = document.createElement('a');
  entrar.href = urlDoSite(LOGIN_PATH);
  entrar.textContent = 'Entrar';
  entrar.className = 'bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-700';

  alvo.appendChild(entrar);
}

// ==========================================
// Função: montarBlocoUsuario(alvo, perfil)
// ==========================================
function montarBlocoUsuario(alvo, perfil) {
  const bloco = document.createElement('div');
  bloco.className = 'flex items-center gap-3';

  if (perfil.fotoUrl) {
    const foto = document.createElement('img');
    foto.src = perfil.fotoUrl;
    foto.alt = '';
    foto.referrerPolicy = 'no-referrer';
    foto.className = 'h-8 w-8 rounded-full flex-none';
    foto.onerror = () => foto.remove();
    bloco.appendChild(foto);
  }

  const saudacao = document.createElement('span');
  // A classe cabecalho-saudacao deixa o CSS esconder so o nome nas telas
  // mais estreitas, mantendo a foto como identidade.
  saudacao.className = 'cabecalho-saudacao font-semibold whitespace-nowrap';
  saudacao.textContent = `Olá, ${perfil.primeiroNome}`;
  saudacao.title = perfil.email;
  bloco.appendChild(saudacao);

  const sairBtn = document.createElement('button');
  sairBtn.type = 'button';
  sairBtn.textContent = 'Sair';
  sairBtn.className = 'border border-gray-300 rounded-lg px-3 py-2 hover:bg-gray-100 whitespace-nowrap';
  sairBtn.style.margin = '0';
  sairBtn.addEventListener('click', async () => {
    sairBtn.disabled = true;
    sairBtn.textContent = 'Saindo...';

    try {
      await sair();
    } catch (erro) {
      console.error('Falha ao encerrar a sessao:', erro);
    }

    window.location.reload();
  });
  bloco.appendChild(sairBtn);

  alvo.appendChild(bloco);
}

// ==========================================
// Função: montarHeaderSessao(alvo)
// Descrição: Preenche o container assim que a sessão resolve. Enquanto isso o
//            espaço fica vazio, para nao piscar "Entrar" na cara de quem ja
//            esta logado.
// ==========================================
export async function montarHeaderSessao(alvo) {
  if (!alvo) return;

  if (!firebaseConfigurado()) return;

  try {
    const user = await aguardarSessao();
    alvo.textContent = '';

    if (user) {
      montarBlocoUsuario(alvo, perfilDe(user));
    } else {
      montarBotaoEntrar(alvo);
    }
  } catch (erro) {
    console.error('Nao foi possivel verificar a sessao:', erro);
  }
}
