import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const rootDir = process.cwd();

function getArgValue(flag) {
  const index = process.argv.indexOf(flag);
  if (index < 0 || index === process.argv.length - 1) {
    return null;
  }

  return process.argv[index + 1];
}

const fileArg = getArgValue('--file');

if (!fileArg) {
  console.log('Uso: node scripts/quote-questoes-keys.mjs --file <caminho/questoes.js>');
  process.exit(1);
}

const questoesPath = path.resolve(rootDir, fileArg);

let content;
try {
  content = await fs.readFile(questoesPath, 'utf8');
} catch (error) {
  console.error(`Nao foi possivel ler o arquivo: ${questoesPath}`);
  console.error(error.message);
  process.exit(1);
}

const updatedContent = content.replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');
await fs.writeFile(questoesPath, updatedContent, 'utf8');
console.log(`Chaves normalizadas em ${path.relative(rootDir, questoesPath).replaceAll('\\', '/')}.`);