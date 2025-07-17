<?php
header('Content-Type: application/json');
$mysqli = new mysqli('localhost', 'root', '', 'certiacademy');
if ($mysqli->connect_error) { http_response_code(500); exit; }

$result = $mysqli->query("SELECT DISTINCT simulated FROM questions WHERE simulated LIKE 'DP%' ORDER BY simulated");
$simulados = [];
while ($row = $result->fetch_assoc()) {
    $simulados[] = $row['simulated'];
}
echo json_encode($simulados, JSON_UNESCAPED_UNICODE);
?>

