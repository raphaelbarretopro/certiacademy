import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const rootDir = process.cwd();
const shouldWrite = process.argv.includes('--write');

const specialCssTargets = new Set(['AB-900/01-SIMULADO']);

const sharedCommonCssPath = path.join(rootDir, 'shared', 'simulado-engine', 'common', 'css', 'styles.css');
const sharedSpecialCssPath = path.join(rootDir, 'shared', 'simulado-engine', 'variants', 'ab-900-01', 'css', 'styles.css');
const sharedAppPath = path.join(rootDir, 'shared', 'simulado-engine', 'common', 'js', 'app.js');
async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function walk(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const directories = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name === '.git' || entry.name === '.github' || entry.name === 'node_modules' || entry.name === 'shared') continue;

    const fullPath = path.join(dirPath, entry.name);
    directories.push(fullPath);
    directories.push(...await walk(fullPath));
  }

  return directories;
}

async function listSimuladoDirs() {
  const allDirs = await walk(rootDir);
  const simulados = [];

  for (const dirPath of allDirs) {
    if (!await pathExists(path.join(dirPath, 'index.html'))) continue;
    if (!await pathExists(path.join(dirPath, 'js'))) continue;
    simulados.push(dirPath);
  }

  return simulados.sort();
}

function toRelative(targetPath) {
  return path.relative(rootDir, targetPath).replaceAll('\\', '/');
}

function toPosixRelative(fromDir, targetPath) {
  return path.relative(fromDir, targetPath).replaceAll('\\', '/');
}

async function updateFile(targetPath, nextContent, changes) {
  const currentContent = await fs.readFile(targetPath, 'utf8');
  if (currentContent === nextContent) {
    return;
  }

  changes.push(toRelative(targetPath));

  if (shouldWrite) {
    await fs.writeFile(targetPath, nextContent, 'utf8');
  }
}

async function removeIfExists(targetPath, removals) {
  if (!await pathExists(targetPath)) {
    return;
  }

  removals.push(toRelative(targetPath));

  if (shouldWrite) {
    await fs.rm(targetPath, { force: true });
  }
}

async function removeDirectoryIfEmpty(targetPath, removals) {
  if (!await pathExists(targetPath)) {
    return;
  }

  const entries = await fs.readdir(targetPath);
  if (entries.length > 0) {
    return;
  }

  removals.push(`${toRelative(targetPath)}/`);

  if (shouldWrite) {
    await fs.rmdir(targetPath);
  }
}

async function main() {
  const simuladoDirs = await listSimuladoDirs();
  const changes = [];
  const removals = [];

  for (const simuladoDir of simuladoDirs) {
    const relativeDir = toRelative(simuladoDir);
    const jsDir = path.join(simuladoDir, 'js');
    const indexPath = path.join(simuladoDir, 'index.html');
    const mainPath = path.join(jsDir, 'main.js');
    const quizPath = path.join(jsDir, 'quiz.js');
    const timerPath = path.join(jsDir, 'timer.js');
    const utilsPath = path.join(jsDir, 'utils.js');
    const renderPath = path.join(jsDir, 'render.js');
    const localCssPath = path.join(simuladoDir, 'css', 'styles.css');
    const localCssDir = path.join(simuladoDir, 'css');

    const cssTargetPath = specialCssTargets.has(relativeDir) ? sharedSpecialCssPath : sharedCommonCssPath;
    const cssHref = toPosixRelative(simuladoDir, cssTargetPath);
    const appSrc = toPosixRelative(simuladoDir, sharedAppPath);

    const indexContent = await fs.readFile(indexPath, 'utf8');
    const nextIndexContent = indexContent
      .replace(/href="css\/styles\.css"/g, `href="${cssHref}"`)
      .replace(/src="js\/main\.js"/g, `src="${appSrc}"`);
    await updateFile(indexPath, nextIndexContent, changes);

    await removeIfExists(mainPath, removals);
    await removeIfExists(quizPath, removals);
    await removeIfExists(timerPath, removals);
    await removeIfExists(utilsPath, removals);
    await removeIfExists(renderPath, removals);
    await removeIfExists(localCssPath, removals);
    await removeDirectoryIfEmpty(localCssDir, removals);
  }

  if (changes.length === 0 && removals.length === 0) {
    console.log(shouldWrite
      ? 'Migracao concluida: nenhum arquivo precisava de alteracao.'
      : 'Checagem concluida: os simulados ja consomem os assets compartilhados previstos.');
    return;
  }

  if (!shouldWrite) {
    console.log('Mudancas planejadas para migracao de assets compartilhados:');
    for (const change of changes) {
      console.log(`- atualizar ${change}`);
    }
    for (const removal of removals) {
      console.log(`- remover ${removal}`);
    }
    console.log('Execute: node scripts/migrate-shared-runtime-assets.mjs --write');
    process.exit(1);
  }

  console.log(`Migracao concluida com sucesso: ${changes.length} arquivo(s) atualizados e ${removals.length} remocao(oes).`);
}

await main();