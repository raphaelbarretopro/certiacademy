import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

// ==========================================
// Arquivo: gerar-manifesto.mjs
// Descricao: Deriva cursos.json da estrutura real do repositorio.
//            A estrutura (cursos e simulados) vem do disco; os textos
//            editoriais (titulo, chamada, visivelNaHome) sao preservados do
//            manifesto existente, para nao serem sobrescritos a cada execucao.
//
//            Sem --write o script apenas compara e falha se houver divergencia,
//            que e o modo usado pelo CI.
// ==========================================

const rootDir = process.cwd();
const shouldWrite = process.argv.includes('--write');
const manifestPath = path.join(rootDir, 'cursos.json');

const ignoredDirs = new Set(['.git', '.github', 'node_modules', 'shared', 'scripts', 'tools', 'css', 'imagens', 'wiki']);

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

function toPosix(relativePath) {
  return relativePath.replaceAll('\\', '/');
}

// Um simulado e um diretorio com index.html e js/questoes.js.
async function listSimuladoDirs(baseDir) {
  const encontrados = [];

  async function walk(dirPath) {
    for (const entry of await fs.readdir(dirPath, { withFileTypes: true })) {
      if (!entry.isDirectory() || ignoredDirs.has(entry.name)) continue;

      const full = path.join(dirPath, entry.name);

      const ehSimulado = await pathExists(path.join(full, 'index.html'))
        && await pathExists(path.join(full, 'js', 'questoes.js'));

      if (ehSimulado) {
        encontrados.push(full);
        continue;
      }

      await walk(full);
    }
  }

  await walk(baseDir);
  return encontrados.sort();
}

// Um curso e um diretorio de primeiro nivel com curso.html.
async function listCourseDirs() {
  const cursos = [];

  for (const entry of await fs.readdir(rootDir, { withFileTypes: true })) {
    if (!entry.isDirectory() || ignoredDirs.has(entry.name)) continue;

    const full = path.join(rootDir, entry.name);
    if (await pathExists(path.join(full, 'curso.html'))) {
      cursos.push(entry.name);
    }
  }

  return cursos.sort();
}

async function readExistingManifest() {
  if (!await pathExists(manifestPath)) {
    return { cursos: [] };
  }

  try {
    return JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  } catch (error) {
    throw new Error(`cursos.json existe mas nao e um JSON valido: ${error.message}`);
  }
}

async function build() {
  const existente = await readExistingManifest();
  const porCodigo = new Map((existente.cursos ?? []).map(curso => [curso.codigo, curso]));

  const cursos = [];

  for (const pasta of await listCourseDirs()) {
    const anterior = porCodigo.get(pasta) ?? {};
    const simuladoDirs = await listSimuladoDirs(path.join(rootDir, pasta));

    cursos.push({
      codigo: pasta,
      pasta,
      titulo: anterior.titulo ?? '',
      chamada: anterior.chamada ?? '',
      visivelNaHome: anterior.visivelNaHome ?? true,
      curso: toPosix(path.join(pasta, 'curso.html')),
      simulados: simuladoDirs.map(dir => {
        const relativo = toPosix(path.relative(rootDir, dir));
        return {
          nome: toPosix(path.relative(path.join(rootDir, pasta), dir)),
          caminho: relativo
        };
      })
    });
  }

  // Preserva a ordem editorial ja definida; cursos novos entram no fim.
  const ordemAnterior = (existente.cursos ?? []).map(curso => curso.codigo);
  cursos.sort((a, b) => {
    const ia = ordemAnterior.indexOf(a.codigo);
    const ib = ordemAnterior.indexOf(b.codigo);
    if (ia === -1 && ib === -1) return a.codigo.localeCompare(b.codigo);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });

  return { cursos };
}

function normalizarQuebras(texto) {
  return texto.replaceAll('\r\n', '\n');
}

async function main() {
  const manifesto = await build();
  const conteudo = `${JSON.stringify(manifesto, null, 2)}\n`;

  const atual = await pathExists(manifestPath)
    ? await fs.readFile(manifestPath, 'utf8')
    : null;

  // O repositorio usa text=auto, entao o arquivo em disco vem com CRLF no
  // Windows e LF no Linux. A comparacao ignora essa diferenca, e a escrita
  // preserva o estilo que o arquivo ja tinha.
  if (atual !== null && normalizarQuebras(atual) === conteudo) {
    console.log('Manifesto ja esta sincronizado com a estrutura do repositorio.');
    return;
  }

  if (!shouldWrite) {
    console.log('cursos.json esta desatualizado em relacao a estrutura do repositorio.');
    console.log('Execute: node scripts/gerar-manifesto.mjs --write');
    process.exit(1);
  }

  const usaCrlf = atual !== null && atual.includes('\r\n');
  await fs.writeFile(manifestPath, usaCrlf ? conteudo.replaceAll('\n', '\r\n') : conteudo, 'utf8');

  const totalSimulados = manifesto.cursos.reduce((soma, curso) => soma + curso.simulados.length, 0);
  console.log(`cursos.json atualizado: ${manifesto.cursos.length} cursos, ${totalSimulados} simulados.`);

  const semTexto = manifesto.cursos.filter(curso => !curso.titulo || !curso.chamada);
  if (semTexto.length > 0) {
    console.log(`Preencha titulo e chamada de: ${semTexto.map(curso => curso.codigo).join(', ')}`);
  }
}

await main();
