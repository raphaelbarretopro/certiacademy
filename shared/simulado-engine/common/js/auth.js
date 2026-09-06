// ==========================================
// Arquivo: auth.js
// Descrição: Sessão do aluno via conta Google (Firebase Authentication).
//            Concentra inicialização do SDK, login, logout e o portão que os
//            simulados e o dashboard usam para exigir sessão.
//
//            O login usa signInWithPopup, e não signInWithRedirect: o fluxo de
//            redirecionamento depende de um iframe entre domínios e não
//            funciona em navegadores que bloqueiam armazenamento de terceiros
//            quando o site não está no domínio do Firebase Hosting - que é
//            exatamente o caso do GitHub Pages.
// ==========================================

import { firebaseConfig, firebaseConfigurado, FIREBASE_SDK_VERSION, LOGIN_PATH } from './firebase-config.js';

const SDK_BASE = `https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}`;

let sdkPromise = null;
let authPromise = null;

// ==========================================
// Função: carregarSdk()
// Descrição: Importa os módulos do Firebase sob demanda, uma única vez
// ==========================================
function carregarSdk() {
  if (!sdkPromise) {
    sdkPromise = Promise.all([
      import(`${SDK_BASE}/firebase-app.js`),
      import(`${SDK_BASE}/firebase-auth.js`)
    ]).then(([appModule, authModule]) => ({ appModule, authModule }));
  }

  return sdkPromise;
}

// ==========================================
// Função: obterAuth()
// Descrição: Devolve a instância de Authentication, inicializando o app na
//            primeira chamada
// ==========================================
export function obterAuth() {
  if (!firebaseConfigurado()) {
    return Promise.reject(new Error('Firebase nao configurado. Preencha shared/simulado-engine/common/js/firebase-config.js.'));
  }

  if (!authPromise) {
    authPromise = carregarSdk().then(({ appModule, authModule }) => {
      const app = appModule.getApps().length > 0
        ? appModule.getApp()
        : appModule.initializeApp(firebaseConfig);

      const auth = authModule.getAuth(app);
      auth.useDeviceLanguage();

      return { auth, authModule };
    });
  }

  return authPromise;
}

// ==========================================
// Função: aguardarSessao()
// Descrição: Resolve com o usuário logado ou com null.
//            Espera o PRIMEIRO disparo de onAuthStateChanged em vez de ler
//            currentUser direto: o SDK leva alguns milissegundos para restaurar
//            a sessão salva, e decidir antes disso manda para a tela de login
//            justamente quem já estava logado.
// ==========================================
export async function aguardarSessao() {
  const { auth, authModule } = await obterAuth();

  return new Promise((resolve, reject) => {
    const cancelar = authModule.onAuthStateChanged(
      auth,
      user => {
        cancelar();
        resolve(user);
      },
      erro => {
        cancelar();
        reject(erro);
      }
    );
  });
}

// ==========================================
// Função: entrarComGoogle()
// Descrição: Abre o popup do Google e resolve com o usuário autenticado
// ==========================================
export async function entrarComGoogle() {
  const { auth, authModule } = await obterAuth();

  const provider = new authModule.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  const credencial = await authModule.signInWithPopup(auth, provider);
  return credencial.user;
}

// ==========================================
// Função: sair()
// ==========================================
export async function sair() {
  const { auth, authModule } = await obterAuth();
  await authModule.signOut(auth);
}

// ==========================================
// Função: excluirConta()
// Descrição: Apaga a conta do aluno. O Firebase exige login recente para
//            operações sensíveis, então a reautenticação é feita aqui mesmo
//            quando o SDK pede.
//
//            A partir da fase 3, esta função também precisará apagar a
//            subárvore users/{uid} no Firestore antes de remover a conta.
// ==========================================
export async function excluirConta() {
  const { auth, authModule } = await obterAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error('Nenhuma sessao ativa para excluir.');
  }

  try {
    await authModule.deleteUser(user);
  } catch (erro) {
    if (erro && erro.code === 'auth/requires-recent-login') {
      const provider = new authModule.GoogleAuthProvider();
      await authModule.reauthenticateWithPopup(user, provider);
      await authModule.deleteUser(auth.currentUser);
      return;
    }

    throw erro;
  }
}

// ==========================================
// Função: primeiroNomeDe(user)
// Descrição: O Google devolve displayName e email. O primeiro nome sai do
//            displayName, com alternativa para as contas em que ele vem vazio.
// ==========================================
export function primeiroNomeDe(user) {
  if (!user) return '';

  const base = (user.displayName || '').trim() || (user.email || '').split('@')[0] || '';
  const primeiro = base.split(/\s+/)[0] || '';

  return primeiro.charAt(0).toUpperCase() + primeiro.slice(1);
}

// ==========================================
// Função: perfilDe(user)
// Descrição: Recorte do usuário que o restante da aplicação consome
// ==========================================
export function perfilDe(user) {
  if (!user) return null;

  return {
    uid: user.uid,
    primeiroNome: primeiroNomeDe(user),
    nomeCompleto: (user.displayName || '').trim(),
    email: user.email || '',
    fotoUrl: user.photoURL || ''
  };
}

// ==========================================
// Raiz do site
// Descrição: Este módulo mora em <raiz>/shared/simulado-engine/common/js/, o
//            que torna a raiz do site calculável com exatidão a partir da
//            própria URL do módulo. É mais confiável que deduzir profundidade
//            pelo caminho da página, que erra em Project Pages do GitHub, onde
//            o primeiro segmento é o nome do repositório e não pertence ao
//            site.
// ==========================================
export const SITE_ROOT = new URL('../../../../', import.meta.url);

// ==========================================
// Função: urlDoSite(caminhoRelativo)
// Descrição: Resolve um caminho relativo à raiz do site
// ==========================================
export function urlDoSite(caminhoRelativo) {
  return new URL(caminhoRelativo, SITE_ROOT).toString();
}

// ==========================================
// Função: destinoSeguro(bruto)
// Descrição: Valida o parâmetro 'next' usado após o login. Só aceita caminhos
//            do próprio site: sem essa checagem o parâmetro viraria um
//            redirecionamento aberto, capaz de levar o aluno a um domínio
//            externo logo depois de autenticar.
// ==========================================
export function destinoSeguro(bruto) {
  if (!bruto) return null;

  let caminho;
  try {
    caminho = decodeURIComponent(bruto);
  } catch {
    return null;
  }

  if (!caminho.startsWith('/')) return null;        // precisa ser caminho absoluto do site
  if (caminho.startsWith('//')) return null;        // "//host" sai do dominio
  if (caminho.startsWith('/\\')) return null;       // variacao com barra invertida
  if (/[\u0000-\u001f\u007f]/.test(caminho)) return null; // caracteres de controle

  return caminho;
}

// ==========================================
// Função: irParaLogin()
// Descrição: Redireciona guardando o destino pretendido, para que quem abriu o
//            link direto de um simulado volte para ele depois de entrar
// ==========================================
export function irParaLogin() {
  const destino = window.location.pathname + window.location.search + window.location.hash;
  const url = `${urlDoSite(LOGIN_PATH)}?next=${encodeURIComponent(destino)}`;

  window.location.replace(url);
}

// ==========================================
// Função: exigirSessao()
// Descrição: Portão das páginas fechadas. Resolve com o perfil do aluno ou
//            redireciona para o login e nunca resolve.
// ==========================================
export async function exigirSessao() {
  const user = await aguardarSessao();

  if (!user) {
    irParaLogin();
    return new Promise(() => {});
  }

  return perfilDe(user);
}
