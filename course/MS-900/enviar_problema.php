<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recebe e sanitiza os dados do formulário
    $questao = isset($_POST['questao']) ? trim($_POST['questao']) : '';
    $mensagem = isset($_POST['mensagem']) ? trim($_POST['mensagem']) : '';

    // Validação simples para garantir que os campos não estão vazios
    if (empty($questao) || empty($mensagem)) {
        echo "Por favor, preencha todos os campos.";
        exit;
    }

    // Sanitiza para saída HTML (se necessário)
    $questao = htmlspecialchars($questao, ENT_QUOTES, 'UTF-8');
    $mensagem = htmlspecialchars($mensagem, ENT_QUOTES, 'UTF-8');

    $para = "contato@webdesignux.pro";
    $assunto = "Reporte de Problema - SIMULADO-01 SC-900 (Questão $questao)";
    $corpo = "Questão reportada: $questao\n\nMensagem do usuário:\n$mensagem";

    $cabecalhos = "MIME-Version: 1.0" . "\r\n";
    $cabecalhos .= "Content-type:text/plain; charset=UTF-8" . "\r\n";
    $cabecalhos .= "From: noreply@webdesignux.pro\r\n";
    $cabecalhos .= "Reply-To: noreply@webdesignux.pro\r\n";
    $cabecalhos .= "X-Mailer: PHP/" . phpversion();

    if (mail($para, $assunto, $corpo, $cabecalhos)) {
        echo "ok";
    } else {
        echo "erro";
    }
    exit;
}
?>

<script>
function fecharModalReportar() {
  const modal = document.getElementById("modalProblema");
  modal.classList.add("hidden");
}
</script>

