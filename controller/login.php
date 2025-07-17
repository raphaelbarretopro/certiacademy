<?php
session_start();

// Limite de tentativas de login
if (!isset($_SESSION['tentativas_login'])) {
    $_SESSION['tentativas_login'] = 0;
    $_SESSION['ultimo_login_erro'] = time();
}
if ($_SESSION['tentativas_login'] >= 5 && (time() - $_SESSION['ultimo_login_erro']) < 300) {
    die("Muitas tentativas falhas. Tente novamente em 5 minutos.");
}

// Conexão com o banco de dados
$mysqli = new mysqli("localhost", "root", "", "u984109456_certiacademy");
if ($mysqli->connect_errno) {
    die("Falha na conexão: " . $mysqli->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $senha = $_POST['senha'] ?? '';

    if (empty($email) || empty($senha)) {
        echo "Preencha todos os campos.";
        exit;
    }

    $stmt = $mysqli->prepare("SELECT id, senha_hash, perfil FROM usuarios WHERE email = ? AND ativo = 1");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 1) {
        $stmt->bind_result($id, $senha_hash, $perfil);
        $stmt->fetch();
        if (password_verify($senha, $senha_hash)) {
            // Login bem-sucedido
            $_SESSION['user_id'] = $id;
            $_SESSION['email'] = $email;
            $_SESSION['perfil'] = $perfil; // $perfil deve vir do banco de dados

            // Verifica se o usuário já ativou o 2FA
            $stmt2fa = $mysqli->prepare("SELECT totp_secret FROM usuarios WHERE id = ?");
            $stmt2fa->bind_param("i", $id);
            $stmt2fa->execute();
            $stmt2fa->bind_result($totp_secret);
            $stmt2fa->fetch();
            $stmt2fa->close();

            if (empty($totp_secret)) {
                // Redireciona para ativação do 2FA (QR Code)
                header("Location: 2fa.php");
                exit;
            } else {
                // Marca que precisa passar pelo 2FA
                $_SESSION['precisa_2fa'] = true;
                header("Location: 2fa_verify.php");
                exit;
            }

            // Redireciona conforme o perfil
            switch ($perfil) {
                case 'admin':
                    header("Location: admin_dashboard.php");
                    break;
                case 'colaborador':
                    header("Location: colaborador_dashboard.php");
                    break;
                case 'usuario':
                default:
                    header("Location: usuario_dashboard.php");
                    break;
            }
            exit;
        } else {
            $_SESSION['tentativas_login']++;
            $_SESSION['ultimo_login_erro'] = time();
            echo "Senha incorreta.";
        }
    } else {
        $_SESSION['tentativas_login']++;
        $_SESSION['ultimo_login_erro'] = time();
        echo "Usuário não encontrado ou não está ativo.";
    }
    $stmt->close();
}
$mysqli->close();
?>
<!-- Seu HTML do formulário de login aqui -->
<?php
var_dump($_SESSION['perfil']);
?>