<?php
// filepath: negar.php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$mysqli = new mysqli("localhost", "u984109456_certiacademy", "Barreto@2024**", "u984109456_certiacademy");
if ($mysqli->connect_errno) {
    die("<div style='
        max-width:400px;
        margin:100px auto;
        padding:30px;
        background:#fff;
        border-radius:8px;
        box-shadow:0 2px 8px #0001;
        font-family:sans-serif;
        text-align:center;
        color:#e11d48;
    '>Falha na conexão: " . $mysqli->connect_error . "</div>");
}
$token = $_GET['token'] ?? '';
if (!$token) die("<div style='
        max-width:400px;
        margin:100px auto;
        padding:30px;
        background:#fff;
        border-radius:8px;
        box-shadow:0 2px 8px #0001;
        font-family:sans-serif;
        text-align:center;
        color:#e11d48;
    '>Token inválido.</div>");

$stmt = $mysqli->prepare("DELETE FROM usuarios WHERE token_ativacao = ?");
$stmt->bind_param("s", $token);
$stmt->execute();

echo "<!DOCTYPE html>
<html lang='pt-BR'>
<head>
    <meta charset='UTF-8'>
    <title>Cadastro Negado</title>
    <style>
        body { background: #f4f6fb; font-family: Arial, sans-serif; }
        .resp-box {
            max-width: 400px;
            margin: 120px auto;
            padding: 32px 24px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 16px #0002;
            text-align: center;
        }
        .resp-box.sucesso { color: #e11d48; }
        .resp-box.erro { color: #e11d48; }
    </style>
</head>
<body>";

if ($stmt->affected_rows > 0) {
    echo "<div class='resp-box sucesso'>Cadastro negado e removido.</div>";
} else {
    echo "<div class='resp-box erro'>Token inválido ou usuário já removido.</div>";
}
echo "</body></html>";

$stmt->close();
$mysqli->close();
?>