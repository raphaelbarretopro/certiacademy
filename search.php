<?php
$title = "Resultados da Pesquisa | CertiAcademy";
include __DIR__ . '/includes/header.php';

// Lógica da busca
$query = isset($_GET['q']) ? trim($_GET['q']) : '';
$results = [];

if ($query !== '') {
  $dir = __DIR__;
  $rii = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir));
  $extensoes = ['php', 'html', 'htm'];

  foreach ($rii as $file) {
    if ($file->isDir()) continue;
    $ext = strtolower(pathinfo($file->getFilename(), PATHINFO_EXTENSION));
    if (!in_array($ext, $extensoes)) continue;
    if ($file->getFilename() === 'enviar_problema.php') continue;

    $conteudo = @file_get_contents($file->getPathname());
    // Remove CSS e JS embutidos
    $conteudo = preg_replace('/<style\b[^>]*>(.*?)<\/style>/is', '', $conteudo);
    $conteudo = preg_replace('/<script\b[^>]*>(.*?)<\/script>/is', '', $conteudo);
    // Remove HTML
    $conteudo = strip_tags($conteudo);

    if ($conteudo) {
      $padrao = '/\b' . preg_quote($query, '/') . '\b/i';
      if (preg_match($padrao, $conteudo)) {
        // Captura um trecho do texto ao redor do termo pesquisado
        $pos = stripos($conteudo, $query);
        $snippet = '';
        if ($pos !== false) {
          $start = max(0, $pos - 60);
          $length = strlen($query) + 120;
          $snippet = substr($conteudo, $start, $length);
          // Destaca o termo pesquisado
          $snippet = preg_replace('/(' . preg_quote($query, '/') . ')/i', '<mark class="bg-yellow-200">$1</mark>', $snippet);
          // Adiciona reticências se não for início/fim do texto
          if ($start > 0) $snippet = '...' . $snippet;
          if ($start + $length < strlen($conteudo)) $snippet .= '...';
        }
        $results[] = [
          'file' => $file->getPathname(),
          'snippet' => $snippet
        ];
      }
    }
  }
}
?>

<div class="container mx-auto px-4 py-10 flex justify-center">
  <div class="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
    <h1 class="text-2xl font-bold mb-6">
      Resultados para: <span class="text-blue-700"><?= htmlspecialchars($query) ?></span>
    </h1>
    <?php if ($query === ''): ?>
      <p class="text-gray-500">Digite um termo para pesquisar.</p>
    <?php elseif (empty($results)): ?>
      <p class="text-gray-500">Nenhum resultado encontrado.</p>
    <?php else: ?>
      <ul class="divide-y divide-gray-200 rounded-lg overflow-hidden">
        <?php foreach ($results as $i => $result): ?>
          <li class="<?= $i % 2 === 0 ? 'bg-gray-50' : 'bg-white' ?>">
            <a href="<?= htmlspecialchars(str_replace(__DIR__ . DIRECTORY_SEPARATOR, '', $result['file'])) ?>"
              class="block px-6 pt-4 text-blue-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium truncate"
              target="_blank"
              title="<?= htmlspecialchars(str_replace(__DIR__ . DIRECTORY_SEPARATOR, '', $result['file'])) ?>">
              <?= htmlspecialchars(str_replace(__DIR__ . DIRECTORY_SEPARATOR, '', $result['file'])) ?>
            </a>
            <?php if ($result['snippet']): ?>
              <div class="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                <?= $result['snippet'] ?>
              </div>
            <?php endif; ?>
          </li>
        <?php endforeach; ?>
      </ul>
    <?php endif; ?>
    <a href="index.php" class="inline-block mt-8 text-blue-600 hover:underline font-semibold">← Voltar</a>
  </div>
</div>

<?php include __DIR__ . '/includes/footer.php'; ?>