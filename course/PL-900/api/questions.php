<?php
header('Content-Type: application/json');
$mysqli = new mysqli('localhost', 'root', '', 'certiacademy');
if ($mysqli->connect_error) { http_response_code(500); exit; }

$simulado = isset($_GET['simulado']) ? $_GET['simulado'] : '';

function embaralharComIndice($array) {
    $result = [];
    foreach ($array as $i => $v) {
        $result[] = ['i' => $i, 'v' => $v];
    }
    shuffle($result);
    return $result;
}

if ($simulado) {
    $stmt = $mysqli->prepare("SELECT * FROM questions WHERE simulated LIKE 'PL%' AND simulated = ?");
    $stmt->bind_param("s", $simulado);
    $stmt->execute();
    $result = $stmt->get_result();
} else {
    $result = $mysqli->query("SELECT * FROM questions");
}

$questions = [];
while ($row = $result->fetch_assoc()) {
    // Decodifica os campos
    foreach (['options','answers','items','group','pairs'] as $campo) {
        if (isset($row[$campo]) && $row[$campo] !== null) {
            $row[$campo] = json_decode($row[$campo], true);
        }
    }

    // Embaralha apenas options e ajusta answers se necessário
    if (isset($row['options']) && is_array($row['options']) && count($row['options']) > 1) {
        $originalOptions = $row['options'];

        // Se answers for array de booleanos (questão booleana)
        if (isset($row['answers']) && is_array($row['answers']) && is_bool($row['answers'][0])) {
            // Embaralha options e answers juntos
            $zipped = [];
            foreach ($row['options'] as $i => $opt) {
                $zipped[] = ['option' => $opt, 'answer' => $row['answers'][$i]];
            }
            shuffle($zipped);
            $row['options'] = array_column($zipped, 'option');
            $row['answers'] = array_column($zipped, 'answer');
        } else {
            // Embaralha normalmente (para questões de índice)
            $embaralhado = embaralharComIndice($originalOptions);
            $novaOptions = [];
            $mapaIndices = [];
            foreach ($embaralhado as $novoIndice => $par) {
                $novaOptions[] = $par['v'];
                $mapaIndices[$par['i']] = $novoIndice;
            }
            $row['options'] = $novaOptions;

            // Ajusta answers (para single ou múltipla escolha)
            if (isset($row['answers'])) {
                if (is_array($row['answers'])) {
                    $novasAnswers = [];
                    foreach ($row['answers'] as $oldIndex) {
                        if (isset($mapaIndices[$oldIndex])) {
                            $novasAnswers[] = $mapaIndices[$oldIndex];
                        }
                    }
                    $row['answers'] = $novasAnswers;
                } else {
                    // Caso seja apenas um índice simples
                    $oldIndex = $row['answers'];
                    if (isset($mapaIndices[$oldIndex])) {
                        $row['answers'] = $mapaIndices[$oldIndex];
                    }
                }
            }
        }
    }

    // Embaralha items se necessário (dragdrop)
    if (isset($row['items']) && is_array($row['items']) && count($row['items']) > 1) {
        shuffle($row['items']);
    }

    // Embaralhamento para comboboxs
    if (isset($row['pairs']) && is_array($row['pairs'])) {
        foreach ($row['pairs'] as &$pair) {
            if (isset($pair['options']) && is_array($pair['options']) && isset($pair['answers'])) {
                $originalOptions = $pair['options'];
                $embaralhado = [];
                foreach ($originalOptions as $i => $opt) {
                    $embaralhado[] = ['i' => $i, 'v' => $opt];
                }
                shuffle($embaralhado);
                $novaOptions = [];
                $mapaIndices = [];
                foreach ($embaralhado as $novoIndice => $par) {
                    $novaOptions[] = $par['v'];
                    $mapaIndices[$par['i']] = $novoIndice;
                }
                $pair['options'] = $novaOptions;
                // Ajusta o índice da resposta correta
                if (isset($mapaIndices[$pair['answers']])) {
                    $pair['answers'] = $mapaIndices[$pair['answers']];
                }
            }
        }
        unset($pair);
    }

    $questions[] = $row;
}
echo json_encode($questions, JSON_UNESCAPED_UNICODE);
?>