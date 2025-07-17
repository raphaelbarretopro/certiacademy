<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $questao = $_POST['questao'];
    $mensagem = $_POST['mensagem'];

    $para = "contato@webdesignux.pro"; // Seu e-mail de recebimento
    $assunto = "Reporte de Problema - Simulado SC-900 (Questão $questao)";

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
}
?>

