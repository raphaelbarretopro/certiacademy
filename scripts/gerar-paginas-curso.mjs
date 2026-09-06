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
    const tipo = numerado[2].toUpperCase() === 'BONUS' ? 'Bônus' : 'Simulado';
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
  </style>
</head>

<body class="bg-gray-50 text-gray-800">

  <!-- Cabeçalho -->
  <header class="bg-white shadow">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center gap-4">
      <a href="../"><img src="../imagens/certiacademy_logo.svg" alt="CertiAcademy" class="h-12"></a>
      <nav class="flex items-center gap-3 text-sm">
        <a href="../dashboard.html" class="hover:text-blue-600">Meu desempenho</a>
        <a href="#simulados" class="bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-700">
          Ir para os simulados
        </a>
        <!-- Preenchido por header-sessao.js: avatar, saudação e sair, ou o
             botão de entrar para quem ainda não fez login. -->
        <div id="sessaoHeader" class="flex items-center gap-3 pl-3 ml-1 border-l border-gray-200"></div>
      </nav>
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
async function main() {
  const manifesto = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  const pendentes = [];
  const geradas = [];
  const semDados = [];

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

  if (semDados.length > 0) {
    console.log(`Cursos sem dados de exame em cursos.json, ignorados: ${semDados.join(', ')}`);
  }

  if (shouldWrite) {
    console.log(geradas.length === 0
      ? 'Nenhuma pagina precisava ser regerada.'
      : `Paginas geradas: ${geradas.join(', ')}`);
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
