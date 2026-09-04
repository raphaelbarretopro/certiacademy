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

function printUsage() {
  console.log('Uso: node scripts/set-questoes-simulado.mjs --file <caminho/questoes.js> --value <slug>');
}

const fileArg = getArgValue('--file');
const valueArg = getArgValue('--value');

if (!fileArg || !valueArg) {
  printUsage();
  process.exit(1);
}

const questoesPath = path.resolve(rootDir, fileArg);
const simuladoValue = valueArg.trim();

if (!simuladoValue) {
  console.error('O valor de --value nao pode ser vazio.');
  process.exit(1);
}

let content;
try {
  content = await fs.readFile(questoesPath, 'utf8');
} catch (error) {
  console.error(`Nao foi possivel ler o arquivo: ${questoesPath}`);
  console.error(error.message);
  process.exit(1);
}

const withoutSimulado = content.replace(/,\s*"simulado"\s*:\s*".*?"/g, '');
const updatedContent = withoutSimulado
  .replace(
    /("dominio"\s*:\s*".+?")([\s,\n]+)/g,
    `$1,$2    "simulado": "${simuladoValue}"$2`
  )
  .replace(/,+/g, ',')
  .replace(/,(\s*[}\]])/g, '$1');

await fs.writeFile(questoesPath, updatedContent, 'utf8');
console.log(`Campo simulado atualizado em ${path.relative(rootDir, questoesPath).replaceAll('\\', '/')}: ${simuladoValue}`);