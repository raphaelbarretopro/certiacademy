// ==========================================
// Arquivo: firebase-config.js
// Descrição: Configuração do projeto Firebase usada pelo login e, mais adiante,
//            pelo histórico de resultados.
//
//            Estes valores NÃO são segredos. A configuração do cliente Firebase
//            é pública por natureza: ela identifica o projeto, não autoriza
//            nada. Quem protege os dados são as Security Rules do Firestore.
//
// COMO PREENCHER
//   1. console.firebase.google.com  ->  criar (ou abrir) o projeto
//   2. Criar um app Web ( </> ) e copiar o objeto firebaseConfig
//   3. Colar os valores abaixo
//   4. Authentication -> Sign-in method -> habilitar o provedor Google
//   5. Authentication -> Settings -> Authorized domains -> adicionar o domínio
//      do GitHub Pages (ex.: raphaelbarretopro.github.io) e localhost
// ==========================================

export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
};

// Versão do SDK carregada do CDN do Google. Mantenha os três módulos na mesma
// versão: o firebase-auth.js importa o firebase-app.js por URL absoluta.
export const FIREBASE_SDK_VERSION = '12.18.0';

// Caminho da tela de login, relativo à raiz do site.
export const LOGIN_PATH = 'login.html';

// ==========================================
// Função: firebaseConfigurado()
// Descrição: Permite ao restante do código dar uma mensagem útil enquanto a
//            configuração ainda não foi preenchida, em vez de falhar com um
//            erro interno do SDK
// ==========================================
export function firebaseConfigurado() {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId);
}
