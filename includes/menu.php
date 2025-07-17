<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>
<header class="bg-white shadow-md">
    <nav class="container mx-auto px-6 py-4 flex items-center gap-4 relative">
        <a href="/certiacademy/index.php" class="flex items-center gap-3">
            <img src="/certiacademy/assets/imagens/certiacademy_logo.svg" alt="CertiAcademy" class="h-12">
        </a>
        <!-- Menu Explorar -->
        <div class="relative">
            <button
                type="button"
                id="explorarBtn"
                class="px-4 py-2 text-gray-800 font-medium rounded hover:bg-gray-100 flex items-center gap-1 focus:outline-none"
                aria-haspopup="true"
                aria-expanded="false">
                Explorar
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <ul
                id="explorarMenu"
                class="absolute left-0 mt-2 min-w-[320px] bg-white border border-gray-200 rounded shadow-lg z-20 hidden">
                <li><a href="/certiacademy/course/AZ-900/index.php" class="block px-6 py-3 hover:bg-gray-100 whitespace-nowrap">AZ-900 - Fundamentos do Azure</a></li>
                <li><a href="/certiacademy/course/SC-900/index.php" class="block px-6 py-3 hover:bg-gray-100 whitespace-nowrap">SC-900 - Segurança e Identidade</a></li>
                <li><a href="/certiacademy/course/MS-900/index.php" class="block px-6 py-3 hover:bg-gray-100 whitespace-nowrap">MS-900 - Microsoft 365</a></li>
                <li><a href="/certiacademy/course/PL-900/index.php" class="block px-6 py-3 hover:bg-gray-100 whitespace-nowrap">PL-900 - Power Platform</a></li>
                <li><a href="/certiacademy/course/DP-900/index.php" class="block px-6 py-3 hover:bg-gray-100 whitespace-nowrap">DP-900 - Banco de Dados Azure</a></li>
                <li><a href="/certiacademy/course/AI-900/index.php" class="block px-6 py-3 hover:bg-gray-100 whitespace-nowrap">AI-900 - Inteligência Artificial</a></li>
            </ul>
        </div>
        
        <!-- Barra de pesquisa -->
        <form action="/certiacademy/search.php" method="get" class="flex-1 mx-6 hidden md:flex">
            <input type="text" name="q" placeholder="Pesquisar por qualquer coisa"
                class="w-full px-5 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 bg-gray-50" />
        </form>
        <!-- Carrinho -->
        <button class="text-2xl text-gray-700 hover:text-purple-700 mx-2" title="Carrinho">
            🛒
        </button>
        <!-- Botões -->
        <?php if (isset($_SESSION['user_id'])): ?>
            <a href="/certiacademy/controller/logout.php" class="bg-red-600 text-white px-5 py-2 rounded font-medium ml-2 hover:bg-red-700 transition">Fazer logoff</a>
        <?php else: ?>
            <a href="/certiacademy/controller/login.html" class="bg-blue-600 text-white px-5 py-2 rounded font-medium border border-blue-600 hover:bg-blue-700 transition">Fazer login</a>
            <a href="/certiacademy/controller/register.html" class="bg-blue-600 text-white px-5 py-2 rounded font-medium ml-2 hover:bg-blue-700 transition">Cadastre-se</a>
        <?php endif; ?>
        <!-- Ícones das redes sociais -->
        <div class="flex items-center gap-3 ml-6">
            <a href="https://www.instagram.com/certi.academy/" target="_blank" title="Instagram">
                <img src="/certiacademy/assets/imagens/instagram.svg" alt="Instagram" class="h-6 w-6">
            </a>
            <a href="https://www.facebook.com/certi.academy" target="_blank" title="Facebook">
                <img src="/certiacademy/assets/imagens/facebook.svg" alt="Facebook" class="h-6 w-6">
            </a>
            <a href="https://www.tiktok.com/@certi.academy" target="_blank" title="TikTok">
                <img src="/certiacademy/assets/imagens/tiktok.svg" alt="TikTok" class="h-6 w-6">
            </a>
            <a href="https://www.youtube.com/@certi.academy" target="_blank" title="YouTube">
                <img src="/certiacademy/assets/imagens/youtube.svg" alt="YouTube" class="h-6 w-6">
            </a>
        </div>
        <!-- Mobile search -->
        <form class="flex-1 mt-3 md:hidden">
            <input type="text" placeholder="Pesquisar por qualquer coisa"
                class="w-full px-5 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-700 bg-gray-50" />
        </form>
    </nav>
</header>
<script>
document.addEventListener('click', function(event) {
    const btn = document.getElementById('explorarBtn');
    const menu = document.getElementById('explorarMenu');
    if (!btn || !menu) return;

    // Se o menu estiver aberto e o clique não for no botão nem dentro do menu, fecha
    if (!menu.classList.contains('hidden') &&
        !btn.contains(event.target) &&
        !menu.contains(event.target)) {
        menu.classList.add('hidden');
    }
});

// Impede que o clique no botão pare de abrir/fechar o menu normalmente
document.getElementById('explorarBtn').addEventListener('click', function(e) {
    e.stopPropagation();
    document.getElementById('explorarMenu').classList.toggle('hidden');
});
</script>