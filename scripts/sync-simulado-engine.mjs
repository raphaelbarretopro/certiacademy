import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const rootDir = process.cwd();
const shouldWrite = process.argv.includes('--write');

const commonSourceDir = path.join(rootDir, 'shared', 'simulado-engine', 'common');

const commonFiles = [
  'enviar_problema.php'
];

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
    if (entry.name === '.git' || entry.name === '.github' || entry.name === 'node_modules') continue;

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

async function fileContents(targetPath) {
  return fs.readFile(targetPath, 'utf8');
}

async function syncFile(sourcePath, destinationPath, changes) {
  const [sourceContent, destinationContent] = await Promise.all([
    fileContents(sourcePath),
    fileContents(destinationPath)
  ]);

  if (sourceContent === destinationContent) {
    return;
  }

  changes.push(`${toRelative(destinationPath)} <= ${toRelative(sourcePath)}`);

  if (shouldWrite) {
    await fs.writeFile(destinationPath, sourceContent, 'utf8');
  }
}

async function main() {
  const simuladoDirs = await listSimuladoDirs();
  const changes = [];

  for (const simuladoDir of simuladoDirs) {
    for (const file of commonFiles) {
      const sourcePath = path.join(commonSourceDir, file);
      const destinationPath = path.join(simuladoDir, file);
      await syncFile(sourcePath, destinationPath, changes);
    }

  }

  if (changes.length === 0) {
    console.log(shouldWrite
      ? 'Sincronizacao concluida: nenhum arquivo precisava de atualizacao.'
      : 'Checagem concluida: todos os arquivos compartilhados ja estao sincronizados.');
    return;
  }

  if (!shouldWrite) {
    console.log('Arquivos fora de sincronizacao encontrados:');
    for (const change of changes) {
      console.log(`- ${change}`);
    }
    console.log('Execute: node scripts/sync-simulado-engine.mjs --write');
    process.exit(1);
  }

  console.log(`Sincronizacao concluida com sucesso: ${changes.length} arquivo(s) atualizados.`);
}

await main();