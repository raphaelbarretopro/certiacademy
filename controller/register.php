<?php
// Conexão com o banco de dados
$mysqli = new mysqli("localhost", "root", "", "u984109456_certiacademy");
if ($mysqli->connect_errno) {
    exibirResposta("Falha na conexão: " . $mysqli->connect_error, false);
    exit;
}

// Recebe e valida os dados
$nome = trim($_POST['nome'] ?? '');
$origem = trim($_POST['origem'] ?? '');
$outro_local = trim($_POST['outro_local'] ?? '');
$email = trim($_POST['email'] ?? '');
$celular = trim($_POST['celular'] ?? '');
$senha = $_POST['senha'] ?? '';
$lgpd_consentimento = isset($_POST['lgpd']) ? 1 : 0;

// Função para exibir resposta estilizada
function exibirResposta($mensagem, $sucesso = true) {
    $cor = $sucesso ? "#16a34a" : "#e11d48";
    echo "<!DOCTYPE html>
    <html lang='pt-BR'>
    <head>
        <meta charset='UTF-8'>
        <title>Cadastro CertiAcademy</title>
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
                color: $cor;
                font-size: 1.1rem;
            }
            a { color: #2563eb; text-decoration: none; }
            a:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class='resp-box'>$mensagem<br><br><a href=\"login.html\">Fazer Login</a></div>
    </body>
    </html>";
}

// Validação de campos obrigatórios
if (
    !$nome ||
    !$origem ||
    !$email ||
    !$celular ||
    !$senha ||
    ($origem === 'Outros' && !$outro_local)
) {
    exibirResposta("Preencha todos os campos obrigatórios.", false);
    exit;
}

// Validação LGPD
if (!$lgpd_consentimento) {
    exibirResposta("Você deve concordar com o Termo de Uso e Política de Privacidade para se cadastrar.", false);
    exit;
}

// Validação de e-mail para FIRJAN
if ($origem === 'FIRJAN' && !preg_match('/@firjan\.com\.br$/i', $email)) {
    exibirResposta("Para FIRJAN, somente e-mails @firjan.com.br são permitidos.", false);
    exit;
}

// Validação de senha forte
$senhaForte = '/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};\':"\\\\|,.<>\/?]{8,}$/';
$sequencias = ['1234', 'abcd', 'senha', 'qwer', '4321', '1111', '0000'];
$senhaInvalida = false;
foreach ($sequencias as $seq) {
    if (stripos($senha, $seq) !== false) {
        $senhaInvalida = true;
        break;
    }
}
if (!preg_match($senhaForte, $senha) || $senhaInvalida) {
    exibirResposta('A senha deve ter pelo menos 8 caracteres, conter letras e números e não pode ser uma sequência simples como "1234", "abcd", "senha", etc.', false);
    exit;
}

// Verifica se o email já está cadastrado
$stmt = $mysqli->prepare("SELECT id FROM usuarios WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();
if ($stmt->num_rows > 0) {
    exibirResposta("Email já cadastrado.", false);
    exit;
}
$stmt->close();

// Verifica se o e-mail está na lista de e-mails validados
$stmt_validado = $mysqli->prepare("SELECT 1 FROM emails_validados WHERE email = ?");
$stmt_validado->bind_param("s", $email);
$stmt_validado->execute();
$stmt_validado->store_result();
$ativo = $stmt_validado->num_rows > 0 ? 1 : 0;
$token = $ativo ? null : bin2hex(random_bytes(32));
$stmt_validado->close();

// Hash da senha e token de ativação
$senha_hash = password_hash($senha, PASSWORD_DEFAULT);
$perfil = 'usuario'; // Sempre usuário no cadastro

// Insere o usuário como inativo e com token de ativação
$stmt = $mysqli->prepare("INSERT INTO usuarios (nome, origem, outro_local, email, celular, senha_hash, ativo, token_ativacao, perfil, lgpd_consentimento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssissi", $nome, $origem, $outro_local, $email, $celular, $senha_hash, $ativo, $token, $perfil, $lgpd_consentimento);
if ($stmt->execute()) {
    if ($ativo === 1) {
        exibirResposta("Cadastro realizado e ativado com sucesso!", true);
    } else {
        // Envia e-mail para o admin com links de ativação e negação
        $link_ativar = "https://certiacademy.com.br/ativar.php?token=$token";
        $link_negar = "https://certiacademy.com.br/negar.php?token=$token";
        $mensagem = "Novo cadastro solicitado:\n\nNome: $nome\nOrigem: $origem" . ($origem === 'Outros' ? " ($outro_local)" : "") . "\nEmail: $email\nCelular: $celular\n\nAtivar: $link_ativar\nNegar: $link_negar";
        mail("raphael.boliveira@gmail.com", "Novo cadastro aguardando aprovação", $mensagem);

        exibirResposta("Cadastro realizado! Aguarde a aprovação do administrador.", true);
    }
} else {
    exibirResposta("Erro ao cadastrar: " . $stmt->error, false);
}
$stmt->close();
$mysqli->close();
?>