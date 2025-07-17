<?php
$mysqli = new mysqli('localhost', 'root', '', 'certiacademy');
if ($mysqli->connect_error) { die('Erro: ' . $mysqli->connect_error); }

$questoes = json_decode(file_get_contents('questoes.json'), true);

foreach ($questoes as $q) {
    $stmt = $mysqli->prepare(
        "INSERT INTO questions
        (type, question, options, answers, explanation, link, domain, simulated, imageurl, items, `group`, pairs)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    );
    $type = $q['type'] ?? null;
    $question = $q['question'] ?? null;
    $options = isset($q['options']) ? json_encode($q['options'], JSON_UNESCAPED_UNICODE) : null;
    $answers = isset($q['answers']) ? json_encode($q['answers'], JSON_UNESCAPED_UNICODE) : null;
    $explanation = $q['explanation'] ?? null;
    $link = $q['link'] ?? null;
    $domain = $q['domain'] ?? null;
    $simulated = $q['simulated'] ?? null;
    $imageurl = $q['imageurl'] ?? null;
    $items = isset($q['items']) ? json_encode($q['items'], JSON_UNESCAPED_UNICODE) : null;
    $group = isset($q['group']) ? json_encode($q['group'], JSON_UNESCAPED_UNICODE) : null;
    $pairs = isset($q['pairs']) ? json_encode($q['pairs'], JSON_UNESCAPED_UNICODE) : null;

    $stmt->bind_param(
        'ssssssssssss',
        $type, $question, $options, $answers, $explanation, $link, $domain, $simulated, $imageurl, $items, $group, $pairs
    );
    $stmt->execute();
}
echo "Importação concluída!";
?>