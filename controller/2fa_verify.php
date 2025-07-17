<?php
session_start();
if (empty($_SESSION['user_id']) || empty($_SESSION['email'])) {
    header("Location: login.php");
    exit;
}
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

if (empty($totp_secret)) {
    // Se não tem 2FA, redireciona para ativação
    header("Location: 2fa.php");
    exit;
}

$totp = TOTP::create($totp_secret);
$totp->setLabel($_SESSION['email']);
$totp->setIssuer('CertiAcademy');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $codigo = $_POST['codigo'] ?? '';
    if ($totp->verify($codigo)) {
        // Libera acesso ao sistema (exemplo: dashboard)
        $_SESSION['autenticado_2fa'] = true;
        $_SESSION['precisa_2fa'] = false;

        switch ($_SESSION['perfil']) {
            case 'admin':
                header("Location: /certiacademy/user/admin/admin_dashboard.php");
                break;
            case 'colaborador':
                header("Location: /certiacademy/user/collaborator/colllaborator_dashboard.php");
                break;
            case 'usuario':
            default:
                header("Location: /certiacademy/user/customer/customer_dashboard.php");
                break;
        }
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
    <title>Verificação 2FA</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/styles.css">

</head>

<body>


    <div class="flex justify-center items-center min-h-[70vh]">
        <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-10 mt-10 mb-10">
            <div class="flex justify-center mb-8 mt-8">
                <img src="../assets/imagens/certiacademy_logo.svg" alt="CertiAcademy Logo"
                    class="h-16 w-auto max-w-xs">
            </div>
            <h1 class="text-2xl font-bold mb-6 text-center text-blue-700">Verificação em Duas Etapas</h1>
            <form action="2fa_verify.php" method="post" class="space-y-6">
                <div>
                    <label for="codigo" class="block text-base font-medium text-gray-700 mb-2">Código de Verificação</label>
                    <input type="text" id="codigo" name="codigo" required
                        class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-lg transition"
                        autocomplete="one-time-code">
                </div>
                <button type="submit"
                    class="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition text-lg shadow">
                    Verificar
                </button>
            </form>
            <div class="mt-6 text-center">
                <a href="/certiacademy/user/login.html" class="text-blue-600 hover:underline text-base">Voltar ao login</a>
            </div>
        </div>
    </div>

   
</body>

</html>