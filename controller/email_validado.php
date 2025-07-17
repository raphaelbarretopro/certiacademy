<?php

session_start();

use PhpOffice\PhpSpreadsheet\IOFactory;

// Verifique se o usuário é administrador
if (!isset($_SESSION['perfil']) || $_SESSION['perfil'] !== 'admin') {
    die("Acesso restrito. Apenas administradores podem acessar esta página.");
}

$mensagem = "";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mysqli = new mysqli("localhost", "root", "", "u984109456_certiacademy");
        if ($mysqli->connect_errno) {
            $mensagem = "Erro na conexão com o banco de dados.";
        } else {
            $stmt = $mysqli->prepare("INSERT INTO emails_validados (email) VALUES (?)");
            $stmt->bind_param("s", $email);
            if ($stmt->execute()) {
                $mensagem = "<span style='color: #16a34a;'>E-mail adicionado com sucesso!</span>";
            } else {
                $mensagem = "<span style='color: #e11d48;'>Erro ao adicionar e-mail ou e-mail já existe.</span>";
            }
            $stmt->close();
            $mysqli->close();
        }
    } else {
        $mensagem = "<span style='color: #e11d48;'>E-mail inválido.</span>";
    }
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Adicionar E-mail Validado</title>
    <style>
        body { background: #f4f6fb; font-family: Arial, sans-serif; }
        .form-box {
            max-width: 400px;
            margin: 120px auto;
            padding: 32px 24px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 16px #0002;
            text-align: center;
        }
        input[type="email"] {
            width: 90%;
            padding: 8px;
            margin: 10px 0 20px 0;
            border: 1px solid #bfc9d9;
            border-radius: 4px;
            font-size: 1rem;
        }
        button {
            background: #2563eb;
            color: #fff;
            border: none;
            padding: 10px 24px;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
        }
        button:hover {
            background: #1d4ed8;
        }
        .msg { margin-bottom: 16px; display: block; }
    </style>
</head>
<body>
    <div class="form-box">
        <h2>Adicionar E-mail Validado</h2>
        <?php if ($mensagem) echo "<div class='msg'>$mensagem</div>"; ?>
        <form method="POST">
            <input type="email" name="email" placeholder="Digite o e-mail" required>
            <br>
            <button type="submit">Adicionar</button>
        </form>
        <br>
        <a href="/certiacademy/admin/admin_dashboard.php">Voltar ao painel</a>
        <hr style="margin:24px 0;">
        <h3>E-mails Validados Cadastrados</h3>
        <div style="max-height:200px; overflow:auto; margin-bottom:16px;">
        <?php
        $mysqli = new mysqli("localhost", "root", "", "u984109456_certiacademy");
        if ($mysqli->connect_errno) {
            echo "<span style='color:#e11d48;'>Erro ao conectar para listar e-mails.</span>";
        } else {
            $result = $mysqli->query("SELECT email FROM emails_validados ORDER BY email ASC");
            if ($result && $result->num_rows > 0) {
                echo "<ul style='list-style:none; padding:0;'>";
                while ($row = $result->fetch_assoc()) {
                    echo "<li style='padding:2px 0;'>" . htmlspecialchars($row['email']) . "</li>";
                }
                echo "</ul>";
            } else {
                echo "<span style='color:#888;'>Nenhum e-mail cadastrado.</span>";
            }
            $mysqli->close();
        }
        ?>
        </div>
        <hr style="margin:24px 0;">
        <h3>Importar E-mails em Massa (Excel)</h3>
        <form method="POST" enctype="multipart/form-data">
            <input type="file" name="arquivo_excel" accept=".xls,.xlsx" required>
            <button type="submit" name="importar_excel">Importar</button>
        </form>
        <?php
        // Importação em massa de e-mails via Excel
        if (isset($_POST['importar_excel']) && isset($_FILES['arquivo_excel'])) {
            require 'vendor/autoload.php'; // Necessário PHPSpreadsheet
            $arquivoTmp = $_FILES['arquivo_excel']['tmp_name'];
            $ext = strtolower(pathinfo($_FILES['arquivo_excel']['name'], PATHINFO_EXTENSION));
            if (in_array($ext, ['xls', 'xlsx'])) {
                try {
                    $spreadsheet = IOFactory::load($arquivoTmp);
                    $sheet = $spreadsheet->getActiveSheet();
                    $emailsImportados = 0;
                    $mysqli = new mysqli("localhost", "u984109456_certiacademy", "Barreto@2024**", "u984109456_certiacademy");
                    foreach ($sheet->getRowIterator() as $row) {
                        $cell = $sheet->getCell('A' . $row->getRowIndex())->getValue();
                        $email = trim($cell);
                        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                            $stmt = $mysqli->prepare("INSERT IGNORE INTO emails_validados (email) VALUES (?)");
                            $stmt->bind_param("s", $email);
                            $stmt->execute();
                            $stmt->close();
                            $emailsImportados++;
                        }
                    }
                    $mysqli->close();
                    echo "<div class='msg' style='color:#16a34a;'>Importação concluída: $emailsImportados e-mails adicionados!</div>";
                } catch (Exception $e) {
                    echo "<div class='msg' style='color:#e11d48;'>Erro ao processar o arquivo Excel.</div>";
                }
            } else {
                echo "<div class='msg' style='color:#e11d48;'>Formato de arquivo não suportado. Use .xls ou .xlsx.</div>";
            }
        }
        ?>
    </div>
</body>
</html>