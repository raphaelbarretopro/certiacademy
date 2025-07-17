<?php
?>
<style>
  .zoom-img {
    transition: box-shadow 0.2s;
    cursor: zoom-in;
    z-index: 1;
    position: relative;
  }

  .zoom-modal-bg {
    display: none;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    align-items: center;
    justify-content: center;
  }

  .zoom-modal-bg.active {
    display: flex;
  }

  .zoom-modal-img {
    max-width: 90vw;
    max-height: 90vh;
    border-radius: 12px;
    box-shadow: 0 8px 32px #000a;
    background: #fff;
    padding: 12px;
  }
</style>
<section class="bg-blue-600 text-white py-20">
  <div class="container mx-auto px-6 text-center">
    <h1 class="text-4xl font-bold mb-4">Simulados Profissionais para Certificações Microsoft</h1>
    <p class="text-lg mb-6">
      Nossos simulados são os únicos que realmente simulam a plataforma oficial dos exames Microsoft, incluindo todos os tipos de questões: múltipla escolha, resposta única, arrasta e solta, combobox, múltiplos comboboxes e perguntas de sim/não. Ao final, você recebe uma análise detalhada com pontuação igual à da Microsoft (total de 1000 pontos), percentual de acertos e revisão completa do simulado.
    </p>
    <div class="flex flex-wrap justify-center gap-6 mb-8">
      <div class="bg-white rounded-xl shadow p-4 flex flex-col items-center w-48">
        <img src="/certiacademy/assets/img/tipo-multipla.png" alt="Múltipla Escolha" class="h-20 mb-2 zoom-img">
        <span class="text-blue-600 font-semibold">Múltipla Escolha</span>
      </div>
      <div class="bg-white rounded-xl shadow p-4 flex flex-col items-center w-48">
        <img src="/certiacademy/assets/img/tipo-unica.png" alt="Resposta Única" class="h-20 mb-2 zoom-img">
        <span class="text-blue-600 font-semibold">Resposta Única</span>
      </div>
      <div class="bg-white rounded-xl shadow p-4 flex flex-col items-center w-48">
        <img src="/certiacademy/assets/img/tipo-arrasta-solta.png" alt="Arrasta e Solta" class="h-20 mb-2 zoom-img">
        <span class="text-blue-600 font-semibold">Arrasta e Solta</span>
      </div>
      <div class="bg-white rounded-xl shadow p-4 flex flex-col items-center w-48">
        <img src="/certiacademy/assets/img/tipo-combobox.png" alt="Combobox" class="h-20 mb-2 zoom-img">
        <span class="text-blue-600 font-semibold">Combobox</span>
      </div>
      <div class="bg-white rounded-xl shadow p-4 flex flex-col items-center w-48">
        <img src="/certiacademy/assets/img/tipo-multiplos-combobox.png" alt="Múltiplos Comboboxes" class="h-20 mb-2 zoom-img">
        <span class="text-blue-600 font-semibold">Múltiplos Comboboxes</span>
      </div>
      <div class="bg-white rounded-xl shadow p-4 flex flex-col items-center w-48">
        <img src="/certiacademy/assets/img/tipo-sim-nao.png" alt="Sim e Não" class="h-20 mb-2 zoom-img">
        <span class="text-blue-600 font-semibold">Sim e Não</span>
      </div>
    </div>
    <div class="bg-white rounded-2xl shadow-lg p-6 mx-auto max-w-2xl text-blue-700 mb-8">
      <h2 class="text-2xl font-bold mb-2">Análise Final no Estilo Microsoft</h2>
      <ul class="text-base text-blue-800 mb-2 text-left list-disc pl-6">
        <li>Pontuação total igual à plataforma oficial (1000 pontos)</li>
        <li>Exibe sua pontuação e percentual de acertos</li>
        <li>Revisão completa de todas as questões, com explicação e referência</li>
      </ul>
      <img src="/certiacademy/assets/img/analise-final-exemplo.png" alt="Exemplo de análise final" class="rounded shadow mt-2 mx-auto zoom-img">
      <br>
      <ul class="text-base text-blue-800 mb-2 text-left list-disc pl-6">
        <li>Veja aqui nosso modelo de Revisão completa de cada Simulado!</li>
      </ul>
    </div>
    <a href="#certificacoes" class="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100">Comece Agora</a>
  </div>
</section>

<!-- Modal de Zoom -->
<div id="zoomModal" class="zoom-modal-bg" tabindex="-1">
  <img id="zoomModalImg" class="zoom-modal-img" src="" alt="Zoom">
</div>
<script>
  document.querySelectorAll('.zoom-img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
      const modal = document.getElementById('zoomModal');
      const modalImg = document.getElementById('zoomModalImg');
      modalImg.src = this.src;
      modal.classList.add('active');
      modal.focus();
    });
  });
  document.getElementById('zoomModal').addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('active');
  });
  document.getElementById('zoomModal').addEventListener('keydown', function(e) {
    if (e.key === 'Escape') this.classList.remove('active');
  });
</script>

<section id="certificacoes" class="container mx-auto px-6 py-16">
  <h2 class="text-3xl font-bold text-center mb-10">Pronto para conquistar sua certificação Microsoft?</h2>
  <h3 class="text-3xl font-bold text-center mb-10">Acesse os Simulados abaixo:</h3>
  <div class="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
    <!-- Cards dos cursos -->
    <div class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
      <h3 class="text-xl font-semibold mb-2">AZ-900</h3>
      <p class="text-gray-600 text-sm mb-4">Fundamentos do Azure</p>
      <a href="./course/AZ-900/index.php" class="text-blue-600 font-medium">Simulado completo com questões atualizadas →</a>
    </div>
    <div class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
      <h3 class="text-xl font-semibold mb-2">SC-900</h3>
      <p class="text-gray-600 text-sm mb-4">Fundamentos de Segurança, Conformidade e Identidade</p>
      <a href="./course/SC-900/index.php" class="text-blue-600 font-medium">Questões no padrão oficial Microsoft →</a>
    </div>
    <div class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
      <h3 class="text-xl font-semibold mb-2">MS-900</h3>
      <p class="text-gray-600 text-sm mb-4">Fundamentos Microsoft 365</p>
      <a href="./course/MS-900/index.php" class="text-blue-600 font-medium">Prepare-se com perguntas reais de prova →</a>
    </div>
    <div class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
      <h3 class="text-xl font-semibold mb-2">PL-900</h3>
      <p class="text-gray-600 text-sm mb-4">Fundamentos Power Platform</p>
      <a href="./course/PL-900/index.php" class="text-blue-600 font-medium">Teste seus conhecimentos com questões práticas →</a>
    </div>
    <div class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
      <h3 class="text-xl font-semibold mb-2">DP-900</h3>
      <p class="text-gray-600 text-sm mb-4">Fundamentos de Banco de Dados Azure</p>
      <a href="./course/DP-900/index.php" class="text-blue-600 font-medium">Avalie seu preparo com perguntas focadas no exame →</a>
    </div>
    <div class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
      <h3 class="text-xl font-semibold mb-2">AI-900</h3>
      <p class="text-gray-600 text-sm mb-4">Fundamentos AI no Azure</p>
      <a href="./course/AI-900/index.php" class="text-blue-600 font-medium">Desafie-se com questões no estilo da certificação →</a>
    </div>
  </div>
</section>