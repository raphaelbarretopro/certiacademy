import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

// ==========================================
// Arquivo: gerar-paginas-curso.mjs
// Descricao: Gera as paginas curso.html a partir de cursos.json.
//
//            As paginas eram mantidas a mao e foram divergindo: houve curso
//            com secao de planejamento de outro exame, links apontando para a
//            certificacao errada e contagens de questoes desatualizadas. Aqui
//            a estrutura vem do manifesto e do disco, entao nada disso
//            sobrevive a uma regeracao.
//
//            Sem --write o script apenas compara e falha se alguma pagina
//            estiver fora de sincronia, que e o modo usado pelo CI.
// ==========================================

const rootDir = process.cwd();
const shouldWrite = process.argv.includes('--write');
const manifestPath = path.join(rootDir, 'cursos.json');

const NOTA_DE_CORTE = 700;

// Escritas assim para o proprio gerador nao virar um campo minado de escapes.
const LF = String.fromCharCode(10);
const CRLF = String.fromCharCode(13, 10);

const ROTULO_SITUACAO = {
  desativado: { texto: 'Exame desativado', classe: 'bg-red-100 text-red-800' },
  substituido: { texto: 'Substituído por outro exame', classe: 'bg-yellow-100 text-yellow-800' }
};

function escapar(texto) {
  return String(texto)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

async function pathExists(alvo) {
  try {
    await fs.access(alvo);
    return true;
  } catch {
    return false;
  }
}

// Marcador que o banco de exemplo usa enquanto o conteudo real nao existe.
const MARCADOR_EM_PREPARACAO = 'Conteúdo em atualização';

// ==========================================
// Funcao: lerBanco(caminhoSimulado)
// Descricao: Devolve a contagem de questoes e se o banco ainda e o de exemplo.
//            Um simulado em preparacao nao pode ser oferecido ao aluno: ele
//            abriria uma prova de uma questao so, dizendo que esta em
//            atualizacao.
// ==========================================
async function lerBanco(caminhoSimulado) {
  const arquivo = path.join(rootDir, caminhoSimulado, 'js', 'questoes.js');
  const conteudo = await fs.readFile(arquivo, 'utf8');

  const questoes = (conteudo.match(/"tipo"\s*:/g) || conteudo.match(/\btipo\s*:/g) || []).length;
  const emPreparacao = conteudo.includes(MARCADOR_EM_PREPARACAO);

  return { questoes, emPreparacao };
}

// ==========================================
// Funcao: rotuloSimulado(nome)
// Descricao: "01-SIMULADO" vira "Simulado 01"; nomes tematicos, como os do
//            PL-900, sao apenas higienizados.
// ==========================================
function rotuloSimulado(nome) {
  const base = nome.split('/').pop();
  const numerado = base.match(/^(\d+)[-_](SIMULADO|BONUS)$/i);

  if (numerado) {
    // O tipo vem do caminho inteiro, e nao so da ultima pasta: os bonus vivem
    // em "CURSO-bonus/01-SIMULADO", que sozinho pareceria o simulado 01 e
    // apareceria duplicado na navegacao lateral.
    const tipo = ehBonus(nome) || numerado[2].toUpperCase() === 'BONUS' ? 'Bônus' : 'Simulado';
    return `${tipo} ${numerado[1]}`;
  }

  return base.replace(/^(\d+)[-_]/, '$1. ').replaceAll('-', ' ');
}

function ehBonus(nome) {
  return /bonus/i.test(nome);
}

// ==========================================
// Blocos da pagina
// ==========================================
function blocoCartoes(curso, exame, totalQuestoes, totalSimulados) {
  const atualizado = exame.atualizadoEm.replace(/^(\d+º?) de (\w{3})\w* de (\d{2})(\d{2})$/, '$2/$4');

  return `      <div class="bg-white rounded-xl shadow p-5">
        <div class="rotulo mb-1">Nota de corte</div>
        <div class="tile-valor num">${NOTA_DE_CORTE}</div>
        <div class="text-sm text-gray-500 mt-1">de 1000 pontos</div>
      </div>
      <div class="bg-white rounded-xl shadow p-5">
        <div class="rotulo mb-1">Áreas avaliadas</div>
        <div class="tile-valor num">${exame.dominios.length}</div>
        <div class="text-sm text-gray-500 mt-1">pesos oficiais</div>
      </div>
      <div class="bg-white rounded-xl shadow p-5">
        <div class="rotulo mb-1">Questões aqui</div>
        <div class="tile-valor num">${totalQuestoes}</div>
        <div class="text-sm text-gray-500 mt-1">em ${totalSimulados} ${totalSimulados === 1 ? 'simulado' : 'simulados'}</div>
      </div>
      <div class="bg-white rounded-xl shadow p-5">
        <div class="rotulo mb-1">Habilidades desde</div>
        <div class="tile-valor" style="font-size:1.35rem">${escapar(atualizado)}</div>
        <div class="text-sm text-gray-500 mt-1">guia oficial</div>
      </div>`;
}

function blocoDominios(exame) {
  return exame.dominios.map(dominio => `
      <div class="mb-7 last:mb-0">
        <div class="flex justify-between items-baseline gap-4 mb-1">
          <span class="font-medium">${escapar(dominio.nome)}</span>
          <span class="num font-semibold text-blue-600 flex-none">${escapar(dominio.peso.replace(' a ', '–'))}</span>
        </div>
        <div class="trilha mb-3"><span class="trilha-preenchida" style="width:${dominio.pesoMedio}%"></span></div>
        <details class="dominio">
          <summary>Ver os tópicos desta área</summary>
          <ul class="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
${dominio.topicos.map(t => `            <li>${escapar(t)}</li>`).join('\n')}
          </ul>
        </details>
      </div>`).join('\n');
}

function cartaoSimulado(simulado) {
  return `        <a href="./${escapar(simulado.nome)}/index.html"
          class="bg-white rounded-xl shadow p-5 hover:shadow-lg transition flex justify-between items-center gap-4">
          <div>
            <div class="font-semibold text-lg">${escapar(simulado.rotulo)}</div>
            <div class="text-sm text-gray-500 num">${simulado.questoes} questões</div>
          </div>
          <span class="text-blue-600 font-medium flex-none">Começar →</span>
        </a>`;
}

function blocoSimulados(principais, bonus) {
  let html = `      <div class="grid md:grid-cols-2 gap-4">
${principais.map(cartaoSimulado).join('\n')}
      </div>`;

  if (bonus.length > 0) {
    html += `

      <div class="bg-white rounded-xl shadow p-6 mt-6">
        <h3 class="text-lg font-semibold mb-1">Simulados bônus</h3>
        <p class="text-sm text-gray-600 mb-5">Rodadas extras de questões, no mesmo formato do exame.</p>
        <div class="grid md:grid-cols-2 gap-4">
${bonus.map(s => `          <a href="./${escapar(s.nome)}/index.html"
            class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition flex justify-between items-center gap-4">
            <div>
              <div class="font-semibold">${escapar(s.rotulo)}</div>
              <div class="text-sm text-gray-500 num">${s.questoes} questões</div>
            </div>
            <span class="text-blue-600 text-sm font-medium flex-none">Começar →</span>
          </a>`).join('\n')}
        </div>
      </div>`;
  }

  return html;
}

// ==========================================
// Funcao: blocoEmPreparacao(quantidade)
// Descricao: Simulados cujo banco ainda e o de exemplo ficam fora da lista,
//            mas o aluno merece saber que vem mais por ai.
// ==========================================
function blocoEmPreparacao(quantidade) {
  if (quantidade === 0) return '';

  const texto = quantidade === 1
    ? 'Mais um simulado está em preparação e aparecerá aqui'
    : `Mais ${quantidade} simulados estão em preparação e aparecerão aqui`;

  return `
      <p class="text-sm text-gray-500 mt-5">${texto} quando os bancos de questões estiverem prontos.</p>`;
}

function blocoRecursos(exame) {
  const oficiais = [
    { titulo: `Página do exame ${exame.codigo}`, url: `https://learn.microsoft.com/pt-br/credentials/certifications/exams/${exame.slug}/`,
      descricao: 'Inscrição, idiomas disponíveis e preço por região' },
    { titulo: 'Guia de estudo oficial', url: `https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/${exame.slug}`,
      descricao: 'Lista completa das habilidades avaliadas, com os pesos de cada área' },
    { titulo: 'Página da certificação', url: `https://learn.microsoft.com/pt-br/credentials/certifications/${exame.certificacao}/`,
      descricao: 'Visão geral da credencial — fundamentos não expiram nem exigem renovação' }
  ];

  if (exame.cursoOficial) {
    oficiais.push({ titulo: `Curso ${exame.cursoOficial.toUpperCase()}`, url: `https://learn.microsoft.com/pt-br/training/courses/${exame.cursoOficial}`,
      descricao: 'Treinamento oficial com instrutor' });
  }

  oficiais.push({ titulo: 'Área restrita do exame', url: 'https://aka.ms/examdemo',
    descricao: 'Conheça o ambiente e os formatos de questão antes do dia da prova' });

  const item = r => `          <li>
            <a href="${escapar(r.url)}" target="_blank" rel="noopener"
              class="text-blue-600 hover:underline font-medium">${escapar(r.titulo)}</a>
            <p class="text-gray-500">${escapar(r.descricao)}</p>
          </li>`;

  return `      <div class="bg-white rounded-xl shadow p-6">
        <h2 class="text-lg font-semibold mb-4">Recursos oficiais da Microsoft</h2>
        <ul class="space-y-3 text-sm">
${oficiais.map(item).join('\n')}
        </ul>
      </div>

      <div class="bg-white rounded-xl shadow p-6">
        <h2 class="text-lg font-semibold mb-4">Documentação para estudar</h2>
        <ul class="space-y-3 text-sm">
${exame.documentacao.map(item).join('\n')}
        </ul>
      </div>`;
}

async function blocoMateriais(curso) {
  const dir = path.join(rootDir, curso.pasta, 'arquivos');
  if (!await pathExists(dir)) return '';

  const arquivos = (await fs.readdir(dir)).filter(f => f !== '.gitkeep').sort();
  if (arquivos.length === 0) return '';

  const itens = arquivos.map(nome => `        <li>
          <a href="./arquivos/${escapar(encodeURIComponent(nome))}" target="_blank" rel="noopener"
            class="text-blue-600 hover:underline">${escapar(nome)}</a>
        </li>`).join('\n');

  return `
    <section class="bg-white rounded-xl shadow p-6 mb-8">
      <h2 class="text-lg font-semibold mb-1">Material de apoio</h2>
      <p class="text-sm text-gray-500 mb-5">Arquivos complementares deste curso.</p>
      <ul class="space-y-2 text-sm">
${itens}
      </ul>
    </section>
`;
}

function blocoPlano(exame, primeiroSimulado) {
  const etapas = exame.dominios.map((dominio, indice) => `        <li class="flex gap-4">
          <span
            class="flex-none w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">${indice + 1}</span>
          <div>
            <div class="font-semibold mb-1">${escapar(dominio.nome)}</div>
            <p class="text-sm text-gray-600">${escapar(dominio.topicos[0])}. Vale ${escapar(dominio.peso.replace(' a ', ' a '))} da prova.</p>
          </div>
        </li>`).join('\n');

  const fecho = primeiroSimulado
    ? `      <p class="text-sm text-gray-600 mt-6 pt-5 border-t">
        Depois de cada etapa, faça um simulado e confira o
        <a href="../dashboard.html" class="text-blue-600 hover:underline">seu desempenho</a>: os assuntos com menor
        aproveitamento aparecem primeiro, e são por onde vale recomeçar.
      </p>`
    : '';

  return `    <section class="bg-white rounded-xl shadow p-6">
      <h2 class="text-lg font-semibold mb-1">Sugestão de plano de estudo</h2>
      <p class="text-sm text-gray-500 mb-6">Uma etapa por área do exame, na ordem do guia oficial.</p>

      <ol class="space-y-5">
${etapas}
      </ol>
${fecho}
    </section>`;
}

function blocoAviso(exame) {
  if (!ROTULO_SITUACAO[exame.situacao]) return '';

  const rotulo = ROTULO_SITUACAO[exame.situacao];

  return `
    <section class="rounded-xl border-l-4 border-yellow-500 bg-yellow-50 p-5 mb-8" role="note">
      <div class="flex items-baseline gap-3 flex-wrap mb-2">
        <span class="text-xs font-semibold uppercase tracking-wide ${rotulo.classe} rounded-full px-3 py-1">${rotulo.texto}</span>
      </div>
      <p class="text-sm text-gray-800">${escapar(exame.avisoSituacao)}</p>
    </section>
`;
}

// ==========================================
// Funcao: montarPagina(curso, exame, simulados)
// ==========================================
async function montarPagina(curso, exame, simulados, emPreparacao = 0) {
  const principais = simulados.filter(s => !ehBonus(s.nome));
  const bonus = simulados.filter(s => ehBonus(s.nome));
  const totalQuestoes = simulados.reduce((soma, s) => soma + s.questoes, 0);

  return `<!-- ==========================================
Arquivo: curso.html
Descrição: Página do curso preparatório para o exame ${exame.codigo}.
           GERADO por scripts/gerar-paginas-curso.mjs a partir de cursos.json.
           Não edite à mão: altere o manifesto e rode o gerador.
========================================== -->
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Curso Preparatório ${escapar(exame.codigo)} | CertiAcademy</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <meta name="robots" content="noindex, nofollow">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .num {
      font-variant-numeric: tabular-nums;
    }

    .tile-valor {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -.02em;
    }

    .trilha {
      height: 10px;
      background: #e5e7eb;
      border-radius: 5px;
      overflow: hidden;
    }

    .trilha-preenchida {
      display: block;
      height: 100%;
      border-radius: 5px;
      background: #0078D4;
    }

    .rotulo {
      font-size: .68rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .08em;
      color: #6b7280;
    }

    details.dominio > summary {
      cursor: pointer;
      list-style: none;
      font-weight: 600;
      color: #0078D4;
      font-size: .88rem;
      padding: .35rem 0;
    }

    details.dominio > summary::-webkit-details-marker {
      display: none;
    }

    details.dominio > summary::before {
      content: "▸ ";
      display: inline-block;
    }

    details.dominio[open] > summary::before {
      content: "▾ ";
    }

    a:focus-visible,
    button:focus-visible,
    summary:focus-visible {
      outline: 3px solid #0078D4;
      outline-offset: 2px;
      border-radius: 4px;
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        transition: none !important;
      }
    }

    /* ==========================================
    Cabeçalho no celular
    Descrição: Em uma linha só, logo, navegação e bloco do aluno disputam a
               largura de 390px: o logo era espremido de 98px para 32px e os
               links quebravam no meio da palavra. Abaixo de 640px o logo e o
               aluno dividem a primeira faixa e a navegação desce para a
               segunda.
    ========================================== */
    .cabecalho-logo {
      /* Sem isto o flex espreme a imagem: ela tem altura fixa e largura
         flexível, então encolhia até o logo virar um risco. */
      flex-shrink: 0;
    }

    @media (max-width: 640px) {
      .cabecalho-faixa {
        flex-wrap: wrap;
        gap: 10px 12px;
      }

      .cabecalho-logo img {
        height: 36px;
      }

      /* Primeira faixa: logo à esquerda, aluno à direita. */
      #sessaoHeader {
        order: 1;
        margin-left: auto;
        padding-left: 0;
        /* A divisória separava o aluno de um vizinho que não está mais na
           mesma linha. */
        border-left: 0;
      }

      /* Segunda faixa, ocupando a largura toda. */
      .cabecalho-nav {
        order: 2;
        width: 100%;
        margin-left: 0;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 8px 16px;
      }

      /* Na home o cabeçalho é fixo no topo: uma segunda faixa comeria uma
         fatia da tela em todas as rolagens. Os links dela estão logo abaixo,
         nos botões do topo e no rodapé, então aqui eles saem. Nas páginas de
         curso o cabeçalho rola junto e a faixa não custa nada. */
      .cabecalho-nav-fixo {
        display: none;
      }
    }

    @media (max-width: 380px) {
      /* Nome grande mais o botão de sair não cabem ao lado do logo; a foto
         segura a identidade e o nome volta assim que houver largura. */
      #sessaoHeader .cabecalho-saudacao {
        display: none;
      }
    }
  </style>
</head>

<body class="bg-gray-50 text-gray-800">

  <!-- Cabeçalho -->
  <header class="bg-white shadow">
    <div class="cabecalho-faixa container mx-auto px-6 py-4 flex items-center gap-4">
      <a href="../" class="cabecalho-logo"><img src="../imagens/certiacademy_logo.svg" alt="CertiAcademy" class="h-12"></a>
      <nav class="cabecalho-nav flex items-center gap-3 text-sm ml-auto">
        <a href="../dashboard.html" class="hover:text-blue-600">Meu desempenho</a>
        <a href="#simulados" class="bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-700">
          <span class="hidden sm:inline">Ir para os simulados</span>
          <span class="sm:hidden">Simulados</span>
        </a>
      </nav>
      <!-- Preenchido por header-sessao.js: avatar, saudação e sair, ou o
           botão de entrar para quem ainda não fez login. -->
      <div id="sessaoHeader" class="flex items-center gap-3 pl-3 ml-1 border-l border-gray-200"></div>
    </div>
  </header>

  <!-- Hero -->
  <section class="bg-blue-600 text-white py-14">
    <div class="container mx-auto px-6 max-w-5xl">
      <p class="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">Exame ${escapar(exame.codigo)}</p>
      <h1 class="text-4xl font-bold mb-3">${escapar(exame.nome)}</h1>
      <p class="text-lg text-blue-50 max-w-3xl">${escapar(exame.resumo)}</p>
    </div>
  </section>

  <main class="container mx-auto px-6 py-12 max-w-5xl">
${blocoAviso(exame)}
    <!-- Fatos do exame -->
    <section class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
${blocoCartoes(curso, exame, totalQuestoes, simulados.length)}
    </section>

    <!-- Áreas avaliadas -->
    <section class="bg-white rounded-xl shadow p-6 mb-8">
      <h2 class="text-lg font-semibold mb-1">O que o exame cobra</h2>
      <p class="text-sm text-gray-500 mb-6">
        Pesos conforme o
        <a href="https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/${exame.slug}"
          target="_blank" rel="noopener" class="text-blue-600 hover:underline">guia de estudo oficial</a>,
        válido a partir de ${escapar(exame.atualizadoEm)}.
      </p>
${blocoDominios(exame)}
    </section>

    <!-- Simulados -->
    <section id="simulados" class="mb-8">
      <h2 class="text-2xl font-bold mb-1">Simulados</h2>
      <p class="text-gray-600 mb-6">
        Cada simulado usa os mesmos formatos de questão do exame oficial e a mesma escala de 1000 pontos, com a nota de
        corte em ${NOTA_DE_CORTE}. O resultado fica salvo no seu histórico.
      </p>

${blocoSimulados(principais, bonus)}${blocoEmPreparacao(emPreparacao)}
    </section>

    <!-- Recursos -->
    <section class="grid md:grid-cols-2 gap-6 mb-8">
${blocoRecursos(exame)}
    </section>
${await blocoMateriais(curso)}
${blocoPlano(exame, principais[0])}

  </main>

  <footer class="bg-gray-800 text-gray-300 py-8">
    <div class="container mx-auto px-6 text-center text-sm">
      <p class="mb-3">© 2026 CertiAcademy</p>
      <div class="flex justify-center gap-6">
        <a href="../" class="hover:text-white">Início</a>
        <a href="../dashboard.html" class="hover:text-white">Meu desempenho</a>
        <a href="../privacidade.html" class="hover:text-white">Privacidade</a>
      </div>
    </div>
  </footer>

  <script type="module">
    import { montarHeaderSessao } from '../shared/simulado-engine/common/js/header-sessao.js';

    montarHeaderSessao(document.getElementById('sessaoHeader'));
  </script>

</body>

</html>
`;
}

// ==========================================
// Home
// ==========================================
const SITUACAO_HOME = {
  desativado: { texto: 'Exame desativado', classe: 'bg-red-100 text-red-700' },
  substituido: { texto: 'Substituído', classe: 'bg-yellow-100 text-yellow-800' }
};

function cartaoCurso(curso, dados) {
  const situacao = SITUACAO_HOME[curso.exame.situacao];
  const selo = situacao
    ? `
          <span class="text-[10px] font-bold uppercase tracking-wide ${situacao.classe} rounded-full px-2 py-0.5 flex-none">${situacao.texto}</span>`
    : '';

  return `        <a href="./${escapar(curso.curso)}"
          class="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:border-blue-200 transition flex flex-col">
          <div class="flex items-start justify-between gap-2 mb-3">
            <span class="text-2xl font-bold text-blue-600">${escapar(curso.codigo)}</span>${selo}
          </div>
          <h3 class="font-semibold leading-snug mb-1">${escapar(curso.exame.nome)}</h3>
          <p class="text-sm text-gray-500 mb-5 flex-grow">${escapar(curso.titulo)}</p>
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray-500 num">${dados.questoes} questões · ${dados.simulados} simulados</span>
            <span class="text-blue-600 font-medium group-hover:translate-x-0.5 transition-transform">→</span>
          </div>
        </a>`;
}

async function montarHome(manifesto, resumoPorCurso) {
  const visiveis = manifesto.cursos.filter(c => c.visivelNaHome !== false && c.exame);

  // Exames correntes primeiro; os em transição vão para o fim da grade.
  const ordenados = [...visiveis].sort((a, b) => {
    const peso = c => (c.exame.situacao === 'ativo' ? 0 : 1);
    return peso(a) - peso(b);
  });

  const totalQuestoes = ordenados.reduce((s, c) => s + resumoPorCurso.get(c.codigo).questoes, 0);
  const totalSimulados = ordenados.reduce((s, c) => s + resumoPorCurso.get(c.codigo).simulados, 0);

  const cartoes = ordenados.map(c => cartaoCurso(c, resumoPorCurso.get(c.codigo))).join('\n');

  return `<!-- ==========================================
Arquivo: index.html
Descrição: Página inicial do CertiAcademy.
           GERADO por scripts/gerar-paginas-curso.mjs a partir de cursos.json.
           Não edite à mão: altere o manifesto e rode o gerador.
========================================== -->
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CertiAcademy | Simulados para certificações Microsoft</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <meta name="robots" content="noindex, nofollow">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .num {
      font-variant-numeric: tabular-nums;
    }

    .heroi {
      background: linear-gradient(135deg, #0B5FA5 0%, #0078D4 55%, #2b8fe0 100%);
    }

    .heroi-numero {
      font-size: 2.25rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -.02em;
    }

    /* Transparencias escritas a mao: a sintaxe de opacidade com barra, como
       border-white/40, so existe a partir do Tailwind 3, e o projeto usa o 2. */
    .btn-hero-secundario {
      border: 1px solid rgba(255, 255, 255, .45);
      transition: background-color .15s;
    }

    .btn-hero-secundario:hover {
      background: rgba(255, 255, 255, .12);
    }

    .heroi-divisoria {
      border-top: 1px solid rgba(255, 255, 255, .25);
    }

    details.faq {
      border-bottom: 1px solid #e5e7eb;
      padding: 1rem 0;
    }

    details.faq > summary {
      cursor: pointer;
      list-style: none;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: baseline;
    }

    details.faq > summary::-webkit-details-marker {
      display: none;
    }

    details.faq > summary::after {
      content: "+";
      color: #0078D4;
      font-weight: 700;
      flex: none;
    }

    details.faq[open] > summary::after {
      content: "−";
    }

    details.faq p {
      margin-top: .7rem;
      color: #4b5563;
      line-height: 1.65;
    }

    a:focus-visible,
    button:focus-visible,
    summary:focus-visible {
      outline: 3px solid #0078D4;
      outline-offset: 3px;
      border-radius: 4px;
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        transition: none !important;
      }
    }

    /* ==========================================
    Cabeçalho no celular
    Descrição: Em uma linha só, logo, navegação e bloco do aluno disputam a
               largura de 390px: o logo era espremido de 98px para 32px e os
               links quebravam no meio da palavra. Abaixo de 640px o logo e o
               aluno dividem a primeira faixa e a navegação desce para a
               segunda.
    ========================================== */
    .cabecalho-logo {
      /* Sem isto o flex espreme a imagem: ela tem altura fixa e largura
         flexível, então encolhia até o logo virar um risco. */
      flex-shrink: 0;
    }

    @media (max-width: 640px) {
      .cabecalho-faixa {
        flex-wrap: wrap;
        gap: 10px 12px;
      }

      .cabecalho-logo img {
        height: 36px;
      }

      /* Primeira faixa: logo à esquerda, aluno à direita. */
      #sessaoHeader {
        order: 1;
        margin-left: auto;
        padding-left: 0;
        /* A divisória separava o aluno de um vizinho que não está mais na
           mesma linha. */
        border-left: 0;
      }

      /* Segunda faixa, ocupando a largura toda. */
      .cabecalho-nav {
        order: 2;
        width: 100%;
        margin-left: 0;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 8px 16px;
      }

      /* Na home o cabeçalho é fixo no topo: uma segunda faixa comeria uma
         fatia da tela em todas as rolagens. Os links dela estão logo abaixo,
         nos botões do topo e no rodapé, então aqui eles saem. Nas páginas de
         curso o cabeçalho rola junto e a faixa não custa nada. */
      .cabecalho-nav-fixo {
        display: none;
      }
    }

    @media (max-width: 380px) {
      /* Nome grande mais o botão de sair não cabem ao lado do logo; a foto
         segura a identidade e o nome volta assim que houver largura. */
      #sessaoHeader .cabecalho-saudacao {
        display: none;
      }
    }
  </style>
</head>

<body class="bg-gray-50 text-gray-800">

  <!-- Cabeçalho -->
  <header class="bg-white shadow-sm sticky top-0 z-20">
    <div class="cabecalho-faixa container mx-auto px-6 py-3 flex items-center gap-4">
      <a href="./" class="cabecalho-logo"><img src="./imagens/certiacademy_logo.svg" alt="CertiAcademy" class="h-11"></a>
      <nav class="cabecalho-nav cabecalho-nav-fixo flex items-center gap-3 text-sm ml-auto">
        <a href="#certificacoes" class="hidden sm:inline hover:text-blue-600">Certificações</a>
        <a href="#como-funciona" class="hidden sm:inline hover:text-blue-600">Como funciona</a>
        <a href="./dashboard.html" class="hover:text-blue-600">Meu desempenho</a>
      </nav>
      <div id="sessaoHeader" class="flex items-center gap-3 pl-3 ml-1 border-l border-gray-200"></div>
    </div>
  </header>

  <!-- Hero -->
  <section class="heroi text-white">
    <div class="container mx-auto px-6 py-20 max-w-5xl">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-4xl">
        Simule o exame como ele realmente é: resposta única, múltipla escolha, Sim/Não, arrastar e soltar, lista
        suspensa e múltiplas listas
      </h1>
      <p class="text-lg text-blue-50 mb-9 max-w-2xl">
        Simulados no formato real das certificações Microsoft, com a mesma escala de 1000 pontos e a mesma nota de
        corte de 700. Ao terminar, você vê exatamente em quais assuntos precisa voltar.
      </p>

      <div class="flex flex-wrap gap-3 mb-14">
        <a href="#certificacoes"
          class="bg-white text-blue-700 font-semibold px-7 py-3 rounded-lg shadow hover:bg-blue-50">
          Escolher certificação
        </a>
        <a href="./dashboard.html"
          class="btn-hero-secundario text-white font-semibold px-7 py-3 rounded-lg">
          Ver meu desempenho
        </a>
      </div>

      <dl class="grid grid-cols-3 gap-6 max-w-2xl heroi-divisoria pt-8">
        <div>
          <dt class="text-blue-100 text-sm mb-1">Questões</dt>
          <dd class="heroi-numero num">${totalQuestoes.toLocaleString('pt-BR')}</dd>
        </div>
        <div>
          <dt class="text-blue-100 text-sm mb-1">Simulados</dt>
          <dd class="heroi-numero num">${totalSimulados}</dd>
        </div>
        <div>
          <dt class="text-blue-100 text-sm mb-1">Certificações</dt>
          <dd class="heroi-numero num">${ordenados.length}</dd>
        </div>
      </dl>
    </div>
  </section>

  <!-- Certificações -->
  <section id="certificacoes" class="container mx-auto px-6 py-16 max-w-6xl">
    <h2 class="text-3xl font-bold mb-2">Escolha sua certificação</h2>
    <p class="text-gray-600 mb-10 max-w-2xl">
      Cada curso traz as áreas oficiais do exame com seus pesos, os simulados disponíveis e o material de apoio.
    </p>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
${cartoes}
    </div>
  </section>

  <!-- Como funciona -->
  <section id="como-funciona" class="bg-white border-t border-b border-gray-100">
    <div class="container mx-auto px-6 py-16 max-w-6xl">
      <h2 class="text-3xl font-bold mb-2">Por que treinar aqui</h2>
      <p class="text-gray-600 mb-10 max-w-2xl">
        A ideia não é decorar respostas: é chegar na prova sabendo onde você está.
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <div class="text-blue-600 text-3xl mb-3">◧</div>
          <h3 class="font-semibold mb-2">Os seis formatos da prova</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Resposta única, múltipla escolha, Sim/Não, arrastar e soltar, lista suspensa e múltiplas listas &mdash; os
            mesmos tipos que aparecem no exame oficial.
          </p>
        </div>
        <div>
          <div class="text-blue-600 text-3xl mb-3">◑</div>
          <h3 class="font-semibold mb-2">A régua é a mesma</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Escala de 1000 pontos e nota de corte em 700, como na Microsoft. Sua pontuação aqui significa a mesma coisa
            que significaria lá.
          </p>
        </div>
        <div>
          <div class="text-blue-600 text-3xl mb-3">◔</div>
          <h3 class="font-semibold mb-2">Resposta comentada na hora</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Cada questão traz a explicação do porquê e um link para a documentação oficial em português. Errar vira
            estudo, não frustração.
          </p>
        </div>
        <div>
          <div class="text-blue-600 text-3xl mb-3">◕</div>
          <h3 class="font-semibold mb-2">Seu histórico não some</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Cada prova concluída entra no seu painel, com evolução no tempo e o aproveitamento por assunto. É ele que
            diz o que revisar.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Perguntas -->
  <section class="container mx-auto px-6 py-16 max-w-3xl">
    <h2 class="text-3xl font-bold mb-8">Perguntas frequentes</h2>

    <details class="faq">
      <summary>Preciso criar conta para fazer os simulados?</summary>
      <p>Sim. A conta é criada com seu login do Google, sem senha nova para lembrar, e existe para guardar o seu
        histórico: sem ela não haveria como mostrar sua evolução nem o seu aproveitamento por assunto.</p>
    </details>

    <details class="faq">
      <summary>As questões são iguais às da prova oficial?</summary>
      <p>Não, e nem poderiam ser: o conteúdo do exame é confidencial. As questões seguem os mesmos formatos, o mesmo
        nível e as mesmas áreas oficiais, com os pesos que a Microsoft publica no guia de estudo de cada exame.</p>
    </details>

    <details class="faq">
      <summary>O que significa a pontuação que eu recebo?</summary>
      <p>A mesma coisa que na prova real. Os 1000 pontos são distribuídos entre os acertos possíveis do simulado, e 700
        é a nota de corte oficial da Microsoft. Acima disso, você passaria.</p>
    </details>

    <details class="faq">
      <summary>Posso refazer um simulado?</summary>
      <p>Quantas vezes quiser. Cada tentativa entra no histórico, então dá para ver se você está realmente melhorando
        ou apenas repetindo as mesmas respostas.</p>
    </details>

    <details class="faq">
      <summary>Por que alguns exames aparecem como desativados?</summary>
      <p>Porque a Microsoft aposenta e substitui exames de tempos em tempos. Quando isso acontece, mantemos o curso no
        ar com um aviso na página, já que o conteúdo continua útil &mdash; mas você não conseguiria mais agendar
        aquela prova.</p>
    </details>

    <details class="faq">
      <summary>Como agendo o exame oficial?</summary>
      <p>Pela página do exame no Microsoft Learn, que fica linkada em cada curso aqui. O preço varia por país, e as
        certificações de nível fundamentals não expiram.</p>
    </details>
  </section>

  <!-- Chamada final -->
  <section class="bg-blue-600 text-white">
    <div class="container mx-auto px-6 py-16 max-w-3xl text-center">
      <h2 class="text-3xl font-bold mb-4">Comece pelo simulado, não pela apostila</h2>
      <p class="text-blue-50 mb-8">
        Um simulado inicial mostra em minutos onde está a sua lacuna. O estudo depois fica muito mais curto.
      </p>
      <a href="#certificacoes"
        class="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-50">
        Escolher certificação
      </a>
    </div>
  </section>

  <footer class="bg-gray-800 text-gray-300 py-10">
    <div class="container mx-auto px-6 text-center text-sm">
      <p class="mb-4">© 2026 CertiAcademy</p>
      <div class="flex justify-center gap-6">
        <a href="#certificacoes" class="hover:text-white">Certificações</a>
        <a href="./dashboard.html" class="hover:text-white">Meu desempenho</a>
        <a href="./privacidade.html" class="hover:text-white">Privacidade</a>
        <a href="mailto:raphael.boliveira@gmail.com" class="hover:text-white">Contato</a>
      </div>
    </div>
  </footer>

  <script type="module">
    import { montarHeaderSessao } from './shared/simulado-engine/common/js/header-sessao.js';

    montarHeaderSessao(document.getElementById('sessaoHeader'));
  </script>

</body>

</html>
`;
}

// ==========================================
// Pagina do simulado
// Descricao: Os 46 index.html eram praticamente iguais e mantidos a mao, o que
//            fazia a navegacao lateral envelhecer sozinha a cada simulado novo.
//            Aqui eles saem do manifesto.
//
//            Todo id e classe usado pelo motor e preservado: listaQuestoes,
//            questaoContainer, quiz, feedback, os quatro botoes de navegacao,
//            progressoContainer, sidebar, sidebarDireita, modalProblema e
//            botaoReportar. Mudar qualquer um deles quebra o quiz.js.
// ==========================================
function montarPaginaSimulado(curso, simulado, todosSimulados, tituloSimulado) {
  const profundidade = simulado.nome.split('/').length;
  const ateRaizCurso = '../'.repeat(profundidade);
  const ateRaizSite = '../'.repeat(profundidade + 1);

  const itens = todosSimulados.map(outro => {
    const atual = outro.nome === simulado.nome ? ' class="atual" aria-current="page"' : '';
    return '          <li><a href="' + ateRaizCurso + escapar(outro.nome) + '/index.html"' + atual + '>' +
      escapar(outro.rotulo) + '</a></li>';
  }).join('\n');

  return '<!-- ==========================================\n' +
'Arquivo: index.html\n' +
'Descrição: Simulado ' + escapar(simulado.rotulo) + ' do curso ' + escapar(curso.codigo) + '.\n' +
'           GERADO por scripts/gerar-paginas-curso.mjs a partir de cursos.json.\n' +
'           Não edite à mão: altere o manifesto e rode o gerador.\n' +
'========================================== -->\n' +
'<!DOCTYPE html>\n' +
'<html lang="pt-BR">\n' +
'\n' +
'<head>\n' +
'  <meta charset="UTF-8" />\n' +
'  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n' +
'  <title>' + escapar(tituloSimulado) + ' | ' + escapar(curso.codigo) + '</title>\n' +
'  <link rel="stylesheet" href="' + ateRaizSite + 'shared/simulado-engine/common/css/styles.css" />\n' +
'  <meta name="robots" content="noindex, nofollow">\n' +
'</head>\n' +
'\n' +
'<body data-requer-sessao>\n' +
'\n' +
'  <div class="container">\n' +
'\n' +
'    <!-- Navegação pelas questões -->\n' +
'    <aside class="sidebar">\n' +
'      <p class="sidebar-titulo">Questões</p>\n' +
'      <ul id="listaQuestoes"></ul>\n' +
'    </aside>\n' +
'\n' +
'    <!-- Área da prova -->\n' +
'    <main class="content">\n' +
'      <button id="toggleSidebar" class="toggle-sidebar" type="button" aria-controls="listaQuestoes" aria-label="Mostrar ou ocultar a lista de questões">\n' +
'        <span class="toggle-sidebar-texto">Questões</span>\n' +
'        <svg class="toggle-sidebar-seta" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">\n' +
'          <path d="M15 4 L7 12 L15 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />\n' +
'        </svg>\n' +
'      </button>\n' +
'\n' +
'      <div id="progressoContainer">\n' +
'        <span id="textoProgresso"></span>\n' +
'        <div class="barra-externa">\n' +
'          <div class="barra-interna" id="barraProgresso"></div>\n' +
'        </div>\n' +
'      </div>\n' +
'\n' +
'      <div id="quiz">\n' +
'        <div id="questaoContainer"></div>\n' +
'      </div>\n' +
'\n' +
'      <div id="feedback" class="feedback hidden"></div>\n' +
'\n' +
'      <div class="acoes-questao">\n' +
'        <button id="voltarBtn" class="btn-voltar hidden" type="button">Voltar questão</button>\n' +
'        <button id="confirmarBtn" class="btn-confirmar" type="button">Confirmar</button>\n' +
'        <button id="proximaBtn" class="btn-proxima hidden" type="button">Próxima questão</button>\n' +
'        <button id="finalizarBtn" class="btn-finalizar hidden" type="button">Finalizar</button>\n' +
'      </div>\n' +
'\n' +
'      <div id="resultadoFinal" class="results hidden"></div>\n' +
'    </main>\n' +
'\n' +
'    <!-- Outros simulados deste curso -->\n' +
'    <aside class="sidebarDireita">\n' +
'      <p class="sidebarDireita-titulo">' + escapar(curso.codigo) + '</p>\n' +
'      <ul class="lista-simulados">\n' +
itens + '\n' +
'      </ul>\n' +
'    </aside>\n' +
'\n' +
'  </div>\n' +
'\n' +
'  <footer class="rodape-simulado">\n' +
'    <a href="' + ateRaizCurso + 'curso.html" class="rf-btn rf-btn-secundario">Voltar ao curso</a>\n' +
'  </footer>\n' +
'\n' +
'  <button id="botaoReportar" class="btn-reportar-flutuante hidden" type="button">Reportar problema</button>\n' +
'\n' +
'  <div id="modalProblema" class="modal hidden">\n' +
'    <div class="modal-content">\n' +
'      <h2>Reportar problema</h2>\n' +
'      <textarea id="textoProblema" placeholder="Descreva o problema encontrado..." rows="6"></textarea>\n' +
'      <div class="botoes-modal">\n' +
'        <button id="enviarProblemaBtn" type="button">Enviar</button>\n' +
'        <button id="cancelarProblemaBtn" type="button">Cancelar</button>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'\n' +
'  <script type="module" src="' + ateRaizSite + 'shared/simulado-engine/common/js/app.js"></script>\n' +
'\n' +
'  <script>\n' +
'    // Trocar de simulado descarta a sessão atual, então vale confirmar.\n' +
'    document.querySelectorAll(".lista-simulados a:not(.atual)").forEach(link => {\n' +
'      link.addEventListener("click", evento => {\n' +
'        if (!confirm("Você perderá a sessão atual do simulado e ingressará em um novo simulado. Deseja continuar?")) {\n' +
'          evento.preventDefault();\n' +
'        }\n' +
'      });\n' +
'    });\n' +
'\n' +
'    // Recolher a lista de questões dá mais largura ao enunciado. No celular\n' +
'    // ela já começa recolhida: quem abre o simulado quer ler o enunciado, e\n' +
'    // não a grade de números. Quem manda no estado inicial é o CSS, então a\n' +
'    // lista não pisca aberta antes deste script rodar.\n' +
'    const alternarSidebar = document.getElementById("toggleSidebar");\n' +
'    const listaLateral = document.querySelector(".sidebar");\n' +
'    const areaConteudo = document.querySelector(".content");\n' +
'    const telaEstreita = window.matchMedia("(max-width: 940px)");\n' +
'\n' +
'    function colunaAberta() {\n' +
'      // Sem escolha do aluno, vale o padrão da largura atual.\n' +
'      if (!listaLateral.dataset.aberta) return !telaEstreita.matches;\n' +
'      return listaLateral.dataset.aberta === "sim";\n' +
'    }\n' +
'\n' +
'    function sincronizar() {\n' +
'      const aberta = colunaAberta();\n' +
'      alternarSidebar.setAttribute("aria-expanded", String(aberta));\n' +
'      // Alargar o enunciado só faz sentido no desktop, onde a coluna some\n' +
'      // do lado; no celular ela some de cima e a largura não muda.\n' +
'      areaConteudo.classList.toggle("expandido", !aberta && !telaEstreita.matches);\n' +
'    }\n' +
'\n' +
'    alternarSidebar.addEventListener("click", () => {\n' +
'      listaLateral.dataset.aberta = colunaAberta() ? "nao" : "sim";\n' +
'      sincronizar();\n' +
'    });\n' +
'\n' +
'    telaEstreita.addEventListener("change", sincronizar);\n' +
'    sincronizar();\n' +
'  </script>\n' +
'\n' +
'</body>\n' +
'\n' +
'</html>\n';
}

// ==========================================
async function main() {
  const manifesto = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  const pendentes = [];
  const geradas = [];
  const semDados = [];
  const resumoPorCurso = new Map();
  let simuladosGerados = 0;

  for (const curso of manifesto.cursos) {
    if (!curso.exame) {
      semDados.push(curso.codigo);
      continue;
    }

    const exame = { ...curso.exame, codigo: curso.codigo };

    const simulados = [];
    let emPreparacao = 0;

    for (const simulado of curso.simulados) {
      const banco = await lerBanco(simulado.caminho);

      if (banco.emPreparacao || banco.questoes === 0) {
        emPreparacao++;
        continue;
      }

      simulados.push({ nome: simulado.nome, rotulo: rotuloSimulado(simulado.nome), questoes: banco.questoes });
    }

    // paginas dos simulados
    for (const simulado of simulados) {
      const destinoSimulado = path.join(rootDir, curso.pasta, simulado.nome, 'index.html');
      const tituloSimulado = curso.codigo + ' - ' + simulado.rotulo;
      const htmlSimulado = montarPaginaSimulado(curso, simulado, simulados, tituloSimulado);

      const atualSimulado = await pathExists(destinoSimulado)
        ? await fs.readFile(destinoSimulado, 'utf8')
        : null;
      const crlfSimulado = atualSimulado !== null && atualSimulado.includes(CRLF);
      const conteudoSimulado = crlfSimulado ? htmlSimulado.replaceAll(LF, CRLF) : htmlSimulado;

      if (atualSimulado === conteudoSimulado) continue;

      if (shouldWrite) {
        await fs.writeFile(destinoSimulado, conteudoSimulado, 'utf8');
        simuladosGerados++;
      } else {
        pendentes.push(curso.pasta + '/' + simulado.nome);
      }
    }

    resumoPorCurso.set(curso.codigo, {
      questoes: simulados.reduce((soma, s) => soma + s.questoes, 0),
      simulados: simulados.length
    });

    const html = await montarPagina(curso, exame, simulados, emPreparacao);
    const destino = path.join(rootDir, curso.curso);

    const atual = await pathExists(destino) ? await fs.readFile(destino, 'utf8') : null;
    const usaCrlf = atual !== null && atual.includes('\r\n');
    const conteudo = usaCrlf ? html.replaceAll('\n', '\r\n') : html;

    if (atual === conteudo) continue;

    if (shouldWrite) {
      await fs.writeFile(destino, conteudo, 'utf8');
      geradas.push(`${curso.codigo} (${simulados.length} simulados)`);
    } else {
      pendentes.push(curso.codigo);
    }
  }

  // ---------- home ----------
  const htmlHome = await montarHome(manifesto, resumoPorCurso);
  const destinoHome = path.join(rootDir, 'index.html');
  const atualHome = await pathExists(destinoHome) ? await fs.readFile(destinoHome, 'utf8') : null;
  const usaCrlfHome = atualHome !== null && atualHome.includes('\r\n');
  const conteudoHome = usaCrlfHome ? htmlHome.replaceAll('\n', '\r\n') : htmlHome;

  if (atualHome !== conteudoHome) {
    if (shouldWrite) {
      await fs.writeFile(destinoHome, conteudoHome, 'utf8');
      geradas.push('index.html');
    } else {
      pendentes.push('index.html');
    }
  }

  if (semDados.length > 0) {
    console.log(`Cursos sem dados de exame em cursos.json, ignorados: ${semDados.join(', ')}`);
  }

  if (shouldWrite) {
    const partes = [];
    if (geradas.length > 0) partes.push(`paginas: ${geradas.join(', ')}`);
    if (simuladosGerados > 0) partes.push(`${simuladosGerados} index.html de simulado`);

    console.log(partes.length === 0
      ? 'Nenhuma pagina precisava ser regerada.'
      : `Gerado -> ${partes.join(' | ')}`);
    return;
  }

  if (pendentes.length > 0) {
    console.log(`Paginas de curso fora de sincronia com cursos.json: ${pendentes.join(', ')}`);
    console.log('Execute: node scripts/gerar-paginas-curso.mjs --write');
    process.exit(1);
  }

  console.log('Checagem concluida: todas as paginas de curso estao em sincronia com cursos.json.');
}

await main();
