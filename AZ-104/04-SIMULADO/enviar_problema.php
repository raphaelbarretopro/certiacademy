<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $questao = isset($_POST['questao']) ? trim((string) $_POST['questao']) : '';
    $mensagem = isset($_POST['mensagem']) ? trim((string) $_POST['mensagem']) : '';

    if ($questao === '' || $mensagem === '') {
        echo "erro";
        exit;
    }

    $curso = basename(dirname(__DIR__));
    $simulado = basename(__DIR__);

    $para = "contato@webdesignux.pro";
    $assunto = "Reporte de Problema - $curso/$simulado (Questão $questao)";
    $corpo = "Curso: $curso\nSimulado: $simulado\nQuestão reportada: $questao\n\nMensagem do usuário:\n$mensagem";

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