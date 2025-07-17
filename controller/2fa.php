<?php
session_start();
require __DIR__ . '/../vendor/autoload.php';

use OTPHP\TOTP;

// Verifica se o usuário está logado
if (empty($_SESSION['user_id']) || empty($_SESSION['email'])) {
    header("Location: login.php");
    exit;
}

// Conexão com o banco
$mysqli = new mysqli("localhost", "root", "", "u984109456_certiacademy");
if ($mysqli->connect_errno) {
    die("Falha na conexão: " . $mysqli->connect_error);
}

// Busca o segredo do usuário
$stmt = $mysqli->prepare("SELECT totp_secret FROM usuarios WHERE id = ?");
$stmt->bind_param("i", $_SESSION['user_id']);
$stmt->execute();
$stmt->bind_result($totp_secret);
$stmt->fetch();
$stmt->close();

$erro = '';
$sucesso = '';

if ($totp_secret) {
    // Se já tem 2FA, redireciona para verificação
    header("Location: 2fa_verify.php");
    exit;
}

// Gera segredo temporário para ativação
if (!isset($_SESSION['temp_totp_secret'])) {
    $totp = TOTP::create();
    $_SESSION['temp_totp_secret'] = $totp->getSecret();
} else {
    $totp = TOTP::create($_SESSION['temp_totp_secret']);
}
$totp->setLabel($_SESSION['email']);
$totp->setIssuer('CertiAcademy');
$qrCodeUrl = $totp->getProvisioningUri();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $codigo = $_POST['codigo'] ?? '';
    if ($totp->verify($codigo)) {
        // Salva o segredo no banco
        $stmt = $mysqli->prepare("UPDATE usuarios SET totp_secret = ? WHERE id = ?");
        $stmt->bind_param("si", $_SESSION['temp_totp_secret'], $_SESSION['user_id']);
        $stmt->execute();
        $stmt->close();
        unset($_SESSION['temp_totp_secret']);
        $sucesso = "2FA ativado com sucesso! Faça login novamente.";
        // Opcional: deslogar usuário para forçar novo login com 2FA
        session_destroy();
        header("Refresh: 2; url=login.html");
        exit;
    } else {
        $erro = "Código inválido. Tente novamente.";
    }
}
$mysqli->close();
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Ativar Verificação em Duas Etapas</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/2fa.css">
    
</head>
<body>
    <!-- Exemplo de logo centralizada -->
    <div class="flex justify-center mb-8 mt-8">
        <img src="../assets/imagens/certiacademy_logo.svg" alt="CertiAcademy Logo" class="h-16 w-auto max-w-xs">
    </div>

    <div class="container">
        <h2 class="text-center text-2xl font-bold mb-4">Configuração de 2FA</h2>
        <?php if ($sucesso): ?>
            <p class="text-green-500 text-center"><?=htmlspecialchars($sucesso)?></p>
        <?php else: ?>
            <p class="text-center">Escaneie este QR Code no Google Authenticator ou Microsoft Authenticator:</p>
            <div class="flex justify-center mb-4">
                <img src="https://api.qrserver.com/v1/create-qr-code/?data=<?=urlencode($qrCodeUrl)?>&size=200x200" alt="QR Code">
            </div>
            <div class="secret-container text-center mb-4">
                <p>Ou digite este segredo manualmente no app:</p>
                <span class="secret"><?=htmlspecialchars($_SESSION['temp_totp_secret'])?></span>
            </div>
            <form method="post" class="flex flex-col items-center">
                <label for="codigo" class="mb-2">Digite o código do app:</label>
                <input type="text" name="codigo" id="codigo" required class="border p-2 mb-4 w-full max-w-xs">
                <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded">Ativar 2FA</button>
            </form>
            <?php if ($erro): ?>
                <p class="text-red-500 text-center"><?=htmlspecialchars($erro)?></p>
            <?php endif; ?>
        <?php endif; ?>
    </div>

    <!-- Rodapé -->
    <div class="mt-6 text-center">
        <a href="/usuarios/login.php" class="text-blue-600 hover:underline text-base">Voltar ao login</a>
    </div>

    <?php include __DIR__ . '/../includes/footer.php'; ?>
</body>
</html>