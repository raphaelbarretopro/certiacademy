<?php
session_start();
$mysqli = new mysqli("localhost", "root", "", "u984109456_certiacademy");
// Mensagem de feedback
$mensagem = "";

// Atualiza perfil e status juntos
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['user_id'], $_POST['novo_perfil'], $_POST['novo_status'])) {
    $id = intval($_POST['user_id']);
    $novoPerfil = $_POST['novo_perfil'];
    $novoStatus = ($_POST['novo_status'] == 1) ? 1 : 0;
    $stmt = $mysqli->prepare("UPDATE usuarios SET perfil = ?, ativo = ? WHERE id = ?");
    $stmt->bind_param("sii", $novoPerfil, $novoStatus, $id);
    $stmt->execute();
    $stmt->close();
    $mensagem = "Perfil e status atualizados com sucesso!";
}

// Busca usuários
$result = $mysqli->query("SELECT id, nome, origem, outro_local, email, celular, perfil, ativo FROM usuarios ORDER BY nome ASC");
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Alterar Perfil de Usuário</title>
    <style>
        body { background: #f4f6fb; font-family: Arial, sans-serif; }
        .container {
            max-width: auto;
            margin: 40px auto;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 16px #0002;
            padding: 32px 24px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 24px;
        }
        th, td {
            padding: 8px 10px;
            border: 1px solid #d1d5db;
            text-align: left;
        }
        th {
            background: #f1f5f9;
        }
        .msg {
            margin-bottom: 16px;
            color: #fff;
            background: #16a34a;
            padding: 12px 0;
            border-radius: 6px;
            font-weight: bold;
            text-align: center;
            box-shadow: 0 2px 8px #0001;
        }
        button {
            background: #2563eb;
            color: #fff;
            border: none;
            padding: 6px 16px;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background: #1d4ed8;
        }
        a {
            color: #2563eb;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        select {
            padding: 4px 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Alterar Perfil de Usuário</h2>
        <?php if ($mensagem): ?>
            <div class='msg' id="msg-confirm"><?= $mensagem ?></div>
            <script>
                setTimeout(function() {
                    var msg = document.getElementById('msg-confirm');
                    if(msg) msg.style.display = 'none';
                }, 5000);
            </script>
        <?php endif; ?>
        <table>
            <tr>
                <th>Nome</th>
                <th>Origem</th>
                <th>Outro Local</th>
                <th>Email</th>
                <th>Celular</th>
                <th>Perfil Atual</th>
                <th>Alterar Perfil</th>
                <th>Status</th>
                <th>Ação</th>
            </tr>
            <?php while ($row = $result->fetch_assoc()): ?>
            <tr>
                <form method="post" style="margin:0;">
                    <td><?= htmlspecialchars($row['nome']) ?></td>
                    <td><?= htmlspecialchars($row['origem']) ?></td>
                    <td><?= htmlspecialchars($row['outro_local']) ?></td>
                    <td><?= htmlspecialchars($row['email']) ?></td>
                    <td><?= htmlspecialchars($row['celular']) ?></td>
                    <td><?= htmlspecialchars($row['perfil']) ?></td>
                    <td>
                        <select name="novo_perfil">
                            <option value="admin" <?= $row['perfil'] == 'admin' ? 'selected' : '' ?>>Administrador</option>
                            <option value="usuario" <?= $row['perfil'] == 'usuario' ? 'selected' : '' ?>>Usuário</option>
                        </select>
                    </td>
                    <td>
                        <select name="novo_status">
                            <option value="1" <?= $row['ativo'] ? 'selected' : '' ?>>Ativo</option>
                            <option value="0" <?= !$row['ativo'] ? 'selected' : '' ?>>Inativo</option>
                        </select>
                    </td>
                    <td>
                        <input type="hidden" name="user_id" value="<?= $row['id'] ?>">
                        <button type="submit">Salvar</button>
                    </td>
                </form>
            </tr>
            <?php endwhile; ?>
        </table>
        <a href="/certiacademy/admin/admin_dashboard.php">Voltar ao painel</a>
    </div>
</body>
</html>
<?php $mysqli->close(); ?>