<?php
session_start();
if (empty($_SESSION['user_id']) || empty($_SESSION['email'])) {
    header("Location: login.php");
    exit;
}

// Verifica se o usuário já passou pelo 2FA
if (isset($_SESSION['precisa_2fa']) && $_SESSION['precisa_2fa'] === true) {
    header("Location: 2fa_verify.php");
    exit;
}

$mysqli = new mysqli("localhost", "root", "", "u984109456_certiacademy");
if ($mysqli->connect_errno) {
    die("Falha na conexão: " . $mysqli->connect_error);
}

// Consulta para gráfico de rosca
$dados = ['FIRJAN' => 0, 'UDEMY' => 0, 'Outros' => 0];
$res = $mysqli->query("SELECT origem, COUNT(*) as total FROM usuarios GROUP BY origem");
while ($row = $res->fetch_assoc()) {
    if (isset($dados[$row['origem']])) {
        $dados[$row['origem']] = $row['total'];
    } else {
        $dados['Outros'] += $row['total'];
    }
}
$res->close();
$mysqli->close();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Painel Administrativo</title>
    <style>
    body.admin-dashboard { background: #f4f6fb; font-family: Arial, sans-serif; }
    .admin-container {
        max-width: 900px;
        margin: 40px auto;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 16px #0002;
        padding: 32px 24px;
    }
    .admin-links {
        margin-bottom: 32px;
    }
    .admin-links a {
        display: inline-block;
        margin-right: 18px;
        background: #2563eb;
        color: #fff;
        padding: 10px 18px;
        border-radius: 5px;
        text-decoration: none;
    }
    .admin-links a:hover {
        background: #1d4ed8;
    }
    .admin-section {
        margin-top: 32px;
    }
    #admin-graficoRosca {
        max-width: 320px;
        max-height: 320px;
        margin: 0 auto;
        display: block;
    }
    .admin-painel {
        background: #fff;
        border-radius: 10px;
        padding: 24px;
    }
    .admin-titulo {
        font-size: 2rem;
        color: #2563eb;
    }
    #admin-botoes {
        display: flex;
        gap: 18px;
        margin-bottom: 32px;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    #admin-botoes a {
        background: #2563eb;
        color: #fff;
        padding: 10px 16px;
        border-radius: 6px;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        transition: background 0.2s;
        display: inline-block;
        margin: 0;
        white-space: nowrap;
        min-width: 170px;
        text-align: center;
    }
    #admin-botoes a:hover {
        background: #1d4ed8;
    }
    </style>
</head>
<?php
include __DIR__ . '/../includes/header.php';
?>
<body class="admin-dashboard">
    <div class="admin-container">
        <div class="admin-painel">
            <h1 class="admin-titulo">Painel de Administração</h1>
            <div id="admin-botoes">
                <div class="admin-links">
                    <a href="/certiacademy/usuarios/perfil_usuario.php">Gerenciar Perfis</a>
                    <a href="/certiacademy/usuarios/email_validado.php">Gerenciar E-mails</a>
                    <a href="/certiacademy/index.php">Voltar ao Início</a>            
                    <a href="/certiacademy/usuarios/logout.php">Sair</a>
                </div>
            </div>
        </div>
        <div class="admin-section">
            <h3>Distribuição de Usuários por Origem</h3>
            <canvas id="admin-graficoRosca" width="320" height="320"></canvas>
        </div>
        <div class="admin-section">
            <h3>Outras sugestões para o painel:</h3>
            <ul>
                <li>Buscar e filtrar usuários por nome, e-mail ou origem</li>
                <li>Aprovar ou negar cadastros pendentes</li>
                <li>Exportar lista de usuários para Excel/CSV</li>
                <li>Visualizar logs de acesso e ações administrativas</li>
                <li>Gerenciar colaboradores e permissões</li>
                <li>Resetar senha de usuários</li>
                <li>Enviar comunicados para todos os usuários</li>
                <li>Visualizar estatísticas de cadastros por período</li>
                <li>Ver usuários ativos/inativos</li>
            </ul>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        const ctx = document.getElementById('admin-graficoRosca').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['FIRJAN', 'UDEMY', 'Outros'],
                datasets: [{
                    data: [<?= $dados['FIRJAN'] ?>, <?= $dados['UDEMY'] ?>, <?= $dados['Outros'] ?>],
                    backgroundColor: ['#2563eb', '#16a34a', '#eab308'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    </script>
</body>
</html>