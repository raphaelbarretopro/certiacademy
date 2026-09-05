import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const workspaceRoot = process.cwd();
const shouldWrite = process.argv.includes('--write');

function getPositionalArgs() {
  return process.argv.slice(2).filter((arg) => !arg.startsWith('--'));
}

function getArgValue(flag) {
  const index = process.argv.indexOf(flag);
  if (index < 0 || index === process.argv.length - 1) {
    return null;
  }

  return process.argv[index + 1];
}

function getNumberArg(flag, fallback) {
  const value = getArgValue(flag);
  if (value == null) {
    return fallback;
  }

  const parsed = Number.parseInt(value, 10);
  if (!Number.isInteger(parsed) || parsed < 0) {
    throw new Error(`O valor de ${flag} deve ser um inteiro maior ou igual a zero.`);
  }

  return parsed;
}

function printUsage() {
  console.log(`Uso:
  node scripts/scaffold-certiacademy.mjs course --course AZ-104 --title "Microsoft Azure Administrator" --simulados 3 [--write]
  node scripts/scaffold-certiacademy.mjs simulado --course AZ-104 [--name 04-SIMULADO] [--title "Simulado 04"] [--write]

Opcoes:
  --course       Caminho relativo da pasta do curso.
  --title        Titulo do curso ou do simulado.
  --description  Descricao curta para a hero do curso.
  --headline     Titulo em destaque para a hero do curso.
  --simulados    Quantidade de simulados iniciais no modo course. Padrao: 1.
  --name         Nome da pasta do simulado no modo simulado. Padrao: proximo NN-SIMULADO.
  --write        Aplica a criacao. Sem isso, o script roda em modo de previa.
`);
}

function ensureRelativePath(value, flagName) {
  if (!value) {
    throw new Error(`A opcao ${flagName} e obrigatoria.`);
  }

  const normalized = value.replaceAll('\\', '/').replace(/^\.\//, '').replace(/\/$/, '');
  if (!normalized || path.isAbsolute(normalized) || normalized.startsWith('..')) {
    throw new Error(`A opcao ${flagName} deve ser um caminho relativo dentro do repositorio.`);
  }

  return normalized;
}

function ensureNonEmpty(value, fallback) {
  if (typeof value === 'string' && value.trim()) {
    return value.trim();
  }

  return fallback;
}

function toAbsolute(relativePath) {
  return path.join(workspaceRoot, relativePath);
}

function toPosix(relativePath) {
  return relativePath.replaceAll('\\', '/');
}

function slugify(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function padSimuladoNumber(value) {
  return String(value).padStart(2, '0');
}

function isStandardSimuladoDir(name) {
  return /^\d{2}-SIMULADO$/i.test(name);
}

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function listStandardSimuladoDirs(courseDir) {
  if (!await pathExists(courseDir)) {
    return [];
  }

  const entries = await fs.readdir(courseDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory() && isStandardSimuladoDir(entry.name))
    .map((entry) => entry.name)
    .sort();
}

function buildSimuladoDirName(number) {
  return `${padSimuladoNumber(number)}-SIMULADO`;
}

function getNextSimuladoDirName(existingDirs) {
  const usedNumbers = existingDirs
    .map((dirName) => Number.parseInt(dirName.slice(0, 2), 10))
    .filter(Number.isInteger);

  const nextNumber = usedNumbers.length === 0 ? 1 : Math.max(...usedNumbers) + 1;
  return buildSimuladoDirName(nextNumber);
}

function buildSimuladoSlug(courseName, simuladoDirName) {
  return slugify(`${courseName}-${simuladoDirName}`);
}

function buildCourseDescription(courseCode) {
  return `Seja bem-vindo ao curso preparatorio ${courseCode}. Atualize os modulos, os links oficiais e os recursos de apoio desta pagina antes de publicar.`;
}

function buildCourseHeadline(courseCode, title) {
  return ensureNonEmpty(title, `Curso Preparatorio ${courseCode}`);
}

function buildHomeCardSnippet(coursePath, courseCode, courseSummary) {
  return [
    '<div class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">',
    `  <h3 class="text-xl font-semibold mb-2">${courseCode}</h3>`,
    `  <p class="text-gray-600 text-sm mb-4">${courseSummary}</p>`,
    `  <a href="./${toPosix(coursePath)}/curso.html" class="text-blue-600 font-medium">Atualize este texto de chamada antes de publicar →</a>`,
    '</div>'
  ].join('\n');
}

function buildSidebarHtml({ courseCode, courseDir, simuladoDirName, simuladoDirs }) {
  const simuladoDir = path.join(courseDir, simuladoDirName);
  const sidebarLinks = simuladoDirs.map((dirName) => {
    const target = toPosix(path.relative(simuladoDir, path.join(courseDir, dirName, 'index.html')));
    const label = dirName.slice(0, 2);
    const currentClass = dirName === simuladoDirName ? ' aria-current="page"' : '';
    const itemClass = dirName === simuladoDirName ? 'listaSimulados active' : 'listaSimulados';
    return `      <ul class="${itemClass}"><a href="${target}"${currentClass}>${label}. SIMULADO</a></ul>`;
  }).join('\n');

  return `    <div class="sidebarDireita">
      <center>
        <ul id="listaSimulados">${courseCode}</ul>
      </center>
${sidebarLinks}
    </div>`;
}

function updateHomeIndexContent(indexContent, courseArg, courseCode, courseTitle) {
  const cardHref = `./${toPosix(courseArg)}/curso.html`;
  if (indexContent.includes(cardHref)) {
    return indexContent;
  }

  const cardSnippet = buildHomeCardSnippet(courseArg, courseCode, courseTitle);
  const existingCardPattern = new RegExp(
    `<div class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">[\\s\\S]*?<h3 class="text-xl font-semibold mb-2">${courseCode.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}<\\/h3>[\\s\\S]*?<\\/div>`
  );

  if (existingCardPattern.test(indexContent)) {
    return indexContent.replace(existingCardPattern, cardSnippet);
  }

  const gridMarker = '<div class="grid md:grid-cols-3 lg:grid-cols-6 gap-8">';
  const gridStart = indexContent.indexOf(gridMarker);

  if (gridStart < 0) {
    throw new Error('Nao foi possivel localizar a grade de certificacoes em index.html para inserir o novo card.');
  }

  const sectionEnd = indexContent.indexOf('</section>', gridStart);

  if (sectionEnd < 0) {
    throw new Error('Nao foi possivel localizar o fim da secao de certificacoes em index.html para inserir o novo card.');
  }

  const gridEnd = indexContent.lastIndexOf('</div>', sectionEnd);

  if (gridEnd < 0 || gridEnd < gridStart) {
    throw new Error('Nao foi possivel localizar o fechamento da grade de certificacoes em index.html para inserir o novo card.');
  }

  const indentedCardSnippet = `\n      ${cardSnippet.replace(/\n/g, '\n      ')}`;
  return `${indexContent.slice(0, gridEnd)}${indentedCardSnippet}${indexContent.slice(gridEnd)}`;
}

function updateSidebarContent(indexContent, sidebarHtml) {
  const sidebarPattern = /\s*<div class="sidebarDireita">[\s\S]*?<\/div>\s*<\/div>/;

  if (!sidebarPattern.test(indexContent)) {
    throw new Error('Nao foi possivel localizar a sidebarDireita do simulado para atualizar a navegacao.');
  }

  return indexContent.replace(sidebarPattern, `\n${sidebarHtml}\n  </div>`);
}

function buildCourseHtml({ courseCode, courseTitle, headline, description, simuladoDirs }) {
  const simuladoLinks = simuladoDirs.map((dirName) => {
    return `          <li><a href="./${dirName}/index.html" target="_blank">${dirName.replace('-', ' ')}</a></li>`;
  }).join('\n');

  const destaqueLinks = simuladoDirs.map((dirName) => {
    return `        <a href="./${dirName}/index.html" target="_blank" class="hover:underline">${dirName.replace('-', ' ')}</a>`;
  }).join('\n');

  const firstSimulado = simuladoDirs[0] ?? null;
  const firstSimuladoCta = firstSimulado
    ? `      <a href="./${firstSimulado}/index.html" target="_blank" class="link-simulado">\n        <span>Realizacao de simulados</span>\n      </a>`
    : '      <span class="link-simulado" style="opacity: 0.6; cursor: default;">Adicione ao menos um simulado</span>';

  return `<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Curso Preparatorio ${courseCode} | CertiAcademy</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    header {
      border-bottom: 4px solid #0078D4;
    }

    .text-blue-600 {
      color: #0078D4;
    }

    .bg-blue-600 {
      background-color: #0078D4;
    }

    .hover\\:text-blue-500:hover {
      color: #005a9e;
    }

    a {
      transition: color 0.3s ease;
    }

    footer {
      background-color: #1b1b1b;
    }

    .link-simulado {
      display: inline-block;
      font-size: 1.25em;
      font-weight: bold;
      color: #fff;
      background: #22c55e;
      padding: 12px 28px;
      border-radius: 6px;
      text-decoration: none;
      transition: background 0.2s;
      box-shadow: 0 2px 6px rgba(34, 197, 94, 0.15);
    }

    .link-simulado:hover {
      background: #16a34a;
      color: #fff;
    }
  </style>
  <meta name="robots" content="noindex, nofollow">
</head>

<body class="bg-gray-50 text-gray-800">
  <header class="bg-white shadow">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="flex items-center gap-4">
        <a href="../"><img src="../imagens/certiacademy_logo.svg" alt="CertiAcademy" class="h-16"></a>
      </div>
    </div>
  </header>

  <section class="bg-blue-600 text-white py-16 text-center">
    <h2 class="text-4xl font-bold mb-4">${headline}</h2>
    <p class="text-lg max-w-2xl mx-auto">${description}</p>
  </section>

  <main class="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
    <div class="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <section id="modulos">
        <h3 class="text-2xl font-semibold mb-6 text-blue-600">Modulos do Curso</h3>
        <h4 class="text-lg font-medium mb-4 gray-600">Atualize esta secao com os dominios e percentuais oficiais do exame.</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Defina aqui o dominio 1</li>
          <li>Defina aqui o dominio 2</li>
          <li>Defina aqui o dominio 3</li>
        </ul>
      </section>

      <section id="exercicios" class="mt-12">
        <h3 class="text-2xl font-semibold mb-6 text-blue-600">Exercicios Praticos</h3>
        <h4 class="text-lg font-medium mb-4 gray-600">Adicione labs, sandbox e exercicios oficiais.</h4>
        <ul class="list-disc pl-6 space-y-2 text-blue-600">
          <li><a href="https://learn.microsoft.com/" target="_blank">Atualize com o primeiro exercicio oficial</a></li>
          <li><a href="https://learn.microsoft.com/" target="_blank">Atualize com o segundo exercicio oficial</a></li>
        </ul>
      </section>
    </div>

    <div class="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <section id="referencias">
        <h3 class="text-2xl font-semibold mb-6 text-blue-600">Referencias Oficiais</h3>
        <h4 class="text-lg font-medium mb-4 gray-600">Substitua pelos links oficiais do exame e do Learn.</h4>
        <ul class="list-disc pl-6 space-y-2 text-blue-600">
          <li><a href="https://learn.microsoft.com/" target="_blank">Guia de estudo oficial</a></li>
          <li><a href="https://learn.microsoft.com/" target="_blank">Trilha oficial do Microsoft Learn</a></li>
        </ul>
      </section>

      <section id="simulados" class="mt-12">
        <h3 class="text-2xl font-semibold mb-6 text-blue-600">Simulados Disponiveis</h3>
        <h4 class="text-lg font-medium mb-4 gray-600">Links gerados automaticamente para os simulados iniciais.</h4>
        <ul class="list-disc pl-6 space-y-2 text-blue-600">
${simuladoLinks}
        </ul>
      </section>
    </div>
  </main>

  <section class="bg-gray-200 text-gray-800 py-16 text-center">
    <h2 class="text-4xl font-bold mb-4">Voce esta pronto para testar seus conhecimentos?</h2>
    <p class="text-lg max-w-2xl mx-auto">Use esta pagina como ponto de entrada do novo curso.</p>
    <br>
    <p>
${firstSimuladoCta}
    </p>
  </section>

  <section class="bg-blue-600 text-white py-10">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-center text-2xl font-bold">
${destaqueLinks || '        <span>Adicione simulados para exibir links aqui</span>'}
    </div>
  </section>

  <footer class="text-gray-200 py-6 text-center">
    <p>© 2026 CertiAcademy. Todos os direitos reservados.</p>
  </footer>
</body>

</html>
`;
}

function buildSimuladoIndexHtml({ courseCode, courseDir, simuladoDirName, simuladoDirs, simuladoTitle }) {
  const simuladoDir = path.join(courseDir, simuladoDirName);
  const sharedCssHref = toPosix(path.relative(simuladoDir, path.join(workspaceRoot, 'shared', 'simulado-engine', 'common', 'css', 'styles.css')));
  const sharedAppSrc = toPosix(path.relative(simuladoDir, path.join(workspaceRoot, 'shared', 'simulado-engine', 'common', 'js', 'app.js')));
  const courseLink = toPosix(path.relative(simuladoDir, path.join(courseDir, 'curso.html')));
  const sidebarHtml = buildSidebarHtml({ courseCode, courseDir, simuladoDirName, simuladoDirs });

  return `<!-- ==========================================
Arquivo: index.html
Descricao: Pagina principal do simulado ${courseCode}
========================================== -->
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${simuladoTitle}</title>
  <link rel="stylesheet" href="${sharedCssHref}" />
  <meta name="robots" content="noindex, nofollow">
</head>

<body data-requer-sessao>
  <div class="container">
    <div class="sidebar">
      <ul id="listaQuestoes"></ul>
    </div>

    <div class="content">
      <button id="toggleSidebar" class="toggle-sidebar">
        <p id="arrow" class="arrow">⮜</p>
      </button>
      <div id="progressoContainer">
        <span id="textoProgresso"></span>
        <div class="barra-externa">
          <div class="barra-interna" id="barraProgresso"></div>
        </div>
      </div>
      <div id="quiz">
        <div id="questaoContainer"></div>
      </div>

      <div id="feedback" class="feedback hidden"></div>

      <button id="voltarBtn" class="btn-voltar hidden">Voltar questao</button>
      <button id="confirmarBtn" class="btn-confirmar">Confirmar</button>
      <button id="proximaBtn" class="btn-proxima hidden">Proxima questao</button>
      <button id="finalizarBtn" class="btn-finalizar hidden">Finalizar</button>

      <div id="resultadoFinal" class="results hidden">
        <p id="pontuacao"></p>
        <canvas id="graficoResultado"></canvas>
        <canvas id="graficoDominio"></canvas>
        <p id="tempoTotal"></p>
        <div class="summary" id="resumoQuestoes"></div>
      </div>
    </div>

${sidebarHtml}
  </div>

  <footer class="text-gray-200 py-6 text-center">
    <center><a href="${courseLink}">Voltar ao curso</a></center>
  </footer>

  <script>
    document.querySelectorAll('.sidebarDireita ul.listaSimulados a').forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();

        const urlDestino = this.href;
        const confirma = confirm('Voce perdera a sessao atual do simulado e ingressara em um novo simulado. Deseja continuar?');

        if (confirma) {
          window.location.href = urlDestino;
        }
      });
    });
  </script>

  <script type="module" src="${sharedAppSrc}"></script>

  <button id="botaoReportar" class="btn-reportar-flutuante hidden">Reportar Problema</button>
  <div id="modalProblema" class="modal hidden">
    <div class="modal-content">
      <h2>Reportar Problema</h2>
      <textarea id="textoProblema" placeholder="Descreva o problema encontrado..." rows="6"></textarea>
      <div class="botoes-modal">
        <button id="enviarProblemaBtn">Enviar</button>
        <button id="cancelarProblemaBtn">Cancelar</button>
      </div>
    </div>
  </div>

  <script>
    const toggleBtn = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const arrow = toggleBtn.querySelector('.arrow');

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
      content.classList.toggle('expandido');

      if (sidebar.classList.contains('hidden')) {
        arrow.classList.remove('arrow-close');
        arrow.classList.add('arrow-open');
      } else {
        arrow.classList.remove('arrow-open');
        arrow.classList.add('arrow-close');
      }
    });
  </script>
  <script>
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('selectstart', event => event.preventDefault());
    document.addEventListener('keydown', function (e) {
      if (e.ctrlKey && ['u', 's', 'c', 'x', 'a'].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['i', 'j'].includes(e.key.toLowerCase()))) {
        e.preventDefault();
      }
    });
  </script>
</body>

</html>
`;
}

function buildQuestoesTemplate({ courseCode, simuladoDirName }) {
  const simuladoSlug = buildSimuladoSlug(courseCode, simuladoDirName);

  return `// ==========================================
// Arquivo: questoes.js
// Descricao: Banco inicial do simulado ${courseCode}
// Atualize este arquivo com as questoes reais antes de publicar.
// ==========================================

export const questoes = [
  {
    "tipo": "unica",
    "texto": "Questao placeholder do ${courseCode}: substitua este conteudo pelo banco real do simulado.",
    "opcoes": [
      "Opcao A",
      "Opcao B",
      "Opcao C",
      "Opcao D"
    ],
    "resposta": 0,
    "explicacao": "Substitua esta questao inicial pelas questoes oficiais traduzidas e validadas.",
    "link": "https://learn.microsoft.com/",
    "dominio": "Definir dominios oficiais do exame",
    "simulado": "${simuladoSlug}"
  }
];
`;
}

async function ensureCanCreate(targetPath, collisions) {
  if (await pathExists(targetPath)) {
    collisions.push(toPosix(path.relative(workspaceRoot, targetPath)));
  }
}

async function writeFileSafe(targetPath, content) {
  await fs.mkdir(path.dirname(targetPath), { recursive: true });
  await fs.writeFile(targetPath, content, 'utf8');
}

async function writeEmptyFile(targetPath) {
  await fs.mkdir(path.dirname(targetPath), { recursive: true });
  await fs.writeFile(targetPath, '', 'utf8');
}

async function updateHomeIndex(courseArg, courseCode, courseTitle) {
  const indexPath = path.join(workspaceRoot, 'index.html');
  const indexContent = await fs.readFile(indexPath, 'utf8');
  const nextContent = updateHomeIndexContent(indexContent, courseArg, courseCode, courseTitle);

  if (nextContent === indexContent) {
    console.log(`- home ja contem card para ${courseCode}`);
    return;
  }

  if (!shouldWrite) {
    console.log(`- atualizar index.html com card de ${courseCode}`);
    return;
  }

  await fs.writeFile(indexPath, nextContent, 'utf8');
  console.log(`- index.html atualizado com card de ${courseCode}`);
}

async function updateExistingSimuladoSidebars(courseArg, courseDir, courseCode, simuladoDirs) {
  for (const simuladoDirName of simuladoDirs) {
    const indexPath = path.join(courseDir, simuladoDirName, 'index.html');

    if (!await pathExists(indexPath)) {
      continue;
    }

    const indexContent = await fs.readFile(indexPath, 'utf8');
    const sidebarHtml = buildSidebarHtml({ courseCode, courseDir, simuladoDirName, simuladoDirs });
    const nextContent = updateSidebarContent(indexContent, sidebarHtml);
    const relativeIndexPath = toPosix(path.relative(workspaceRoot, indexPath));

    if (nextContent === indexContent) {
      console.log(`- navegacao ja atualizada em ${relativeIndexPath}`);
      continue;
    }

    if (!shouldWrite) {
      console.log(`- atualizar navegacao em ${relativeIndexPath}`);
      continue;
    }

    await fs.writeFile(indexPath, nextContent, 'utf8');
    console.log(`- navegacao atualizada em ${relativeIndexPath}`);
  }
}

async function scaffoldCourse() {
  const courseArg = ensureRelativePath(getArgValue('--course'), '--course');
  const courseCode = path.basename(courseArg);
  const courseDir = toAbsolute(courseArg);
  const simuladoCount = getNumberArg('--simulados', 1);

  if (simuladoCount === 0) {
    throw new Error('No modo course, use ao menos um simulado inicial com --simulados 1 ou maior.');
  }

  const courseTitle = ensureNonEmpty(getArgValue('--title'), `Curso Preparatorio ${courseCode}`);
  const headline = ensureNonEmpty(getArgValue('--headline'), buildCourseHeadline(courseCode, courseTitle));
  const description = ensureNonEmpty(getArgValue('--description'), buildCourseDescription(courseCode));

  const collisions = [];
  await ensureCanCreate(courseDir, collisions);

  const simuladoDirs = Array.from({ length: simuladoCount }, (_, index) => buildSimuladoDirName(index + 1));
  const filesToCreate = [];

  filesToCreate.push({
    path: path.join(courseDir, 'curso.html'),
    content: buildCourseHtml({ courseCode, courseTitle, headline, description, simuladoDirs })
  });
  filesToCreate.push({ path: path.join(courseDir, 'arquivos', '.gitkeep'), content: '' });

  for (const simuladoDirName of simuladoDirs) {
    filesToCreate.push({
      path: path.join(courseDir, simuladoDirName, 'index.html'),
      content: buildSimuladoIndexHtml({
        courseCode,
        courseDir,
        simuladoDirName,
        simuladoDirs,
        simuladoTitle: `${courseCode} - ${simuladoDirName}`
      })
    });
    filesToCreate.push({ path: path.join(courseDir, simuladoDirName, 'js', 'questoes.js'), content: buildQuestoesTemplate({ courseCode, simuladoDirName }) });
    filesToCreate.push({ path: path.join(courseDir, simuladoDirName, 'img', '.gitkeep'), content: '' });
  }

  if (collisions.length > 0) {
    throw new Error(`Os caminhos abaixo ja existem e impedem o scaffold:\n- ${collisions.join('\n- ')}`);
  }

  console.log('Previa do scaffold do curso:');
  for (const file of filesToCreate) {
    console.log(`- criar ${toPosix(path.relative(workspaceRoot, file.path))}`);
  }
  await updateHomeIndex(courseArg, courseCode, courseTitle);

  if (!shouldWrite) {
    console.log('Execute novamente com --write para aplicar a criacao.');
    return;
  }

  for (const file of filesToCreate) {
    if (file.content === '') {
      await writeEmptyFile(file.path);
    } else {
      await writeFileSafe(file.path, file.content);
    }
  }

  await updateHomeIndex(courseArg, courseCode, courseTitle);

  console.log(`Scaffold concluido: curso ${courseArg} criado com ${simuladoDirs.length} simulado(s).`);
}

async function scaffoldSimulado() {
  const courseArg = ensureRelativePath(getArgValue('--course'), '--course');
  const courseCode = path.basename(courseArg);
  const courseDir = toAbsolute(courseArg);

  if (!await pathExists(courseDir)) {
    throw new Error(`O curso informado nao existe: ${courseArg}`);
  }

  const existingSimulados = await listStandardSimuladoDirs(courseDir);
  const simuladoDirName = ensureNonEmpty(getArgValue('--name'), getNextSimuladoDirName(existingSimulados));

  if (!isStandardSimuladoDir(simuladoDirName)) {
    throw new Error('O nome do simulado deve seguir o padrao NN-SIMULADO, por exemplo 04-SIMULADO.');
  }

  const simuladoDir = path.join(courseDir, simuladoDirName);
  if (await pathExists(simuladoDir)) {
    throw new Error(`A pasta do simulado ja existe: ${toPosix(path.relative(workspaceRoot, simuladoDir))}`);
  }

  const simuladoTitle = ensureNonEmpty(getArgValue('--title'), `${courseCode} - ${simuladoDirName}`);
  const simuladoDirs = [...existingSimulados, simuladoDirName].sort();
  const filesToCreate = [
    {
      path: path.join(simuladoDir, 'index.html'),
      content: buildSimuladoIndexHtml({ courseCode, courseDir, simuladoDirName, simuladoDirs, simuladoTitle })
    },
    { path: path.join(simuladoDir, 'js', 'questoes.js'), content: buildQuestoesTemplate({ courseCode, simuladoDirName }) },
    { path: path.join(simuladoDir, 'img', '.gitkeep'), content: '' }
  ];

  console.log('Previa do scaffold do simulado:');
  for (const file of filesToCreate) {
    console.log(`- criar ${toPosix(path.relative(workspaceRoot, file.path))}`);
  }
  await updateExistingSimuladoSidebars(courseArg, courseDir, courseCode, simuladoDirs);

  if (!shouldWrite) {
    console.log('Execute novamente com --write para aplicar a criacao.');
    return;
  }

  for (const file of filesToCreate) {
    if (file.content === '') {
      await writeEmptyFile(file.path);
    } else {
      await writeFileSafe(file.path, file.content);
    }
  }

  await updateExistingSimuladoSidebars(courseArg, courseDir, courseCode, simuladoDirs);

  console.log(`Scaffold concluido: ${courseArg}/${simuladoDirName} criado.`);
}

async function main() {
  const [command] = getPositionalArgs();

  if (!command || command === 'help') {
    printUsage();
    process.exit(command ? 0 : 1);
  }

  if (command === 'course') {
    await scaffoldCourse();
    return;
  }

  if (command === 'simulado') {
    await scaffoldSimulado();
    return;
  }

  throw new Error(`Comando nao suportado: ${command}`);
}

try {
  await main();
} catch (error) {
  console.error(error.message);
  printUsage();
  process.exit(1);
}