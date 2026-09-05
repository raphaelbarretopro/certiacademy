// ==========================================
// Arquivo: report.js
// Descrição: Envio do formulário "Reportar Problema"
//            Substitui o antigo enviar_problema.php, que dependia da função
//            mail() do PHP e por isso nunca funcionou em hospedagem estática
//            como o GitHub Pages. O envio agora sai direto do navegador para o
//            FormSubmit, que entrega a mensagem por e-mail sem backend próprio.
// ==========================================

// ==========================================
// Configuração do destino
// ==========================================
// O FormSubmit exige uma confirmação única: no primeiro envio real ele manda um
// e-mail de ativação para o endereço abaixo, e só passa a encaminhar as
// mensagens depois que o link desse e-mail for aberto. Após a ativação o serviço
// também gera um alias (https://formsubmit.co/ajax/<hash>) que pode substituir o
// endereço aqui, para que ele não fique exposto no código publicado.
export const REPORT_ENDPOINT = 'https://formsubmit.co/ajax/raphael.boliveira@gmail.com';

// Tempo máximo de espera pela resposta do serviço, em milissegundos.
const REPORT_TIMEOUT_MS = 15000;

// ==========================================
// Função: identificarOrigem()
// Descrição: Deriva curso e simulado a partir da URL da página, reproduzindo o
//            que o PHP fazia com basename(dirname(__DIR__)) e basename(__DIR__)
// ==========================================
function identificarOrigem() {
  const segmentos = window.location.pathname.split('/').filter(Boolean);

  // Descarta o nome do arquivo quando a URL aponta diretamente para ele
  if (segmentos.length > 0 && segmentos[segmentos.length - 1].includes('.')) {
    segmentos.pop();
  }

  const simulado = segmentos[segmentos.length - 1] || 'desconhecido';
  const curso = segmentos[segmentos.length - 2] || 'desconhecido';

  return {
    curso: decodeURIComponent(curso),
    simulado: decodeURIComponent(simulado)
  };
}

// ==========================================
// Função: montarCorpo(indexQuestao, texto)
// Descrição: Monta os campos enviados ao serviço de formulário
// ==========================================
function montarCorpo(indexQuestao, texto) {
  const { curso, simulado } = identificarOrigem();
  const questao = indexQuestao + 1;

  const corpo = {
    _subject: `Reporte de Problema - ${curso}/${simulado} (Questão ${questao})`,
    _template: 'table',
    _captcha: 'false',
    Curso: curso,
    Simulado: simulado,
    Questao: String(questao),
    Mensagem: texto,
    Pagina: window.location.href
  };

  // Com o login obrigatorio o reporte deixa de ser anonimo: da para responder
  // ao aluno sem depender de ele se identificar no texto.
  const perfil = window.CertiAcademyPerfil;

  if (perfil && perfil.email) {
    corpo.Aluno = perfil.nomeCompleto || perfil.primeiroNome || '';
    corpo.Email = perfil.email;
    corpo._replyto = perfil.email;
  }

  return corpo;
}

// ==========================================
// Função: respostaAceita(resultado)
// Descrição: O FormSubmit responde com success ora booleano, ora string
// ==========================================
function respostaAceita(resultado) {
  if (!resultado || typeof resultado !== 'object') return false;

  return resultado.success === true || String(resultado.success).toLowerCase() === 'true';
}

// ==========================================
// Funções de retorno visual
// Descrição: Reaproveitam o mesmo container e o mesmo markup já usados antes
// ==========================================
function exibirSucesso() {
  const modalContent = document.querySelector('.modal-content');
  if (!modalContent) return;

  modalContent.innerHTML = `
        <h2>Problema enviado com sucesso ✅</h2>
        <p>Obrigado por nos ajudar a melhorar!</p>
      `;

  setTimeout(() => {
    const modal = document.getElementById('modalProblema');
    if (modal) modal.classList.add('hidden');
  }, 2000);
}

function exibirFalha(titulo, mensagem) {
  const modalContent = document.querySelector('.modal-content');
  if (!modalContent) return;

  modalContent.innerHTML = `
        <h2>${titulo}</h2>
        <p>${mensagem}</p>
        <button onclick="window.location.reload()">Recarregar Página</button>
      `;
}

// ==========================================
// Função: enviarProblema(indexQuestao)
// Descrição: Valida o texto, envia o reporte e atualiza o modal
// ==========================================
export async function enviarProblema(indexQuestao) {
  const campoTexto = document.getElementById('textoProblema');
  const texto = campoTexto ? campoTexto.value.trim() : '';

  if (!texto) {
    alert('⚠️ Por favor, descreva o problema antes de enviar.');
    return;
  }

  const enviarBtn = document.getElementById('enviarProblemaBtn');
  if (enviarBtn) enviarBtn.disabled = true;

  const controlador = new AbortController();
  const tempoLimite = setTimeout(() => controlador.abort(), REPORT_TIMEOUT_MS);

  try {
    const resposta = await fetch(REPORT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(montarCorpo(indexQuestao, texto)),
      signal: controlador.signal
    });

    const resultado = await resposta.json().catch(() => null);

    if (resposta.ok && respostaAceita(resultado)) {
      exibirSucesso();
      return;
    }

    console.error('Reporte recusado pelo serviço de envio:', resposta.status, resultado);
    exibirFalha('Erro ao enviar ❌', 'Tente novamente mais tarde.');
  } catch (error) {
    console.error('Erro:', error);
    exibirFalha('Erro de comunicação ❌', 'Servidor indisponível. Tente novamente mais tarde.');
  } finally {
    clearTimeout(tempoLimite);
    if (enviarBtn) enviarBtn.disabled = false;
  }
}
