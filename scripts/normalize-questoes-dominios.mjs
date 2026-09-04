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
  console.log('Uso: node scripts/normalize-questoes-dominios.mjs --file <caminho/questoes.js> --domains "dominio 1|dominio 2|dominio 3"');
}

const fileArg = getArgValue('--file');
const domainsArg = getArgValue('--domains');

if (!fileArg || !domainsArg) {
  printUsage();
  process.exit(1);
}

const questoesPath = path.resolve(rootDir, fileArg);
const officialDomains = domainsArg.split('|').map((domain) => domain.trim()).filter(Boolean);

if (officialDomains.length === 0) {
  console.error('A lista de dominios nao pode ser vazia.');
  process.exit(1);
}

function findClosestDomain(domain) {
  const cleanDomain = domain.replace(/\s*\([^)]*\)/g, '').toLowerCase().trim();
  let max = 0;
  let bestMatch = officialDomains[0];

  for (const official of officialDomains) {
    let points = 0;
    const words = cleanDomain.split(/\W+/);

    for (const word of words) {
      if (word.length > 2 && official.toLowerCase().includes(word)) {
        points++;
      }
    }

    if (points > max) {
      max = points;
      bestMatch = official;
    }
  }

  return bestMatch;
}

let content;
try {
  content = await fs.readFile(questoesPath, 'utf8');
} catch (error) {
  console.error(`Nao foi possivel ler o arquivo: ${questoesPath}`);
  console.error(error.message);
  process.exit(1);
}

const updatedContent = content.replace(/("dominio"\s*:\s*")([^"]+)(")/g, (match, start, currentDomain, end) => {
  const domainWithoutPercent = currentDomain.replace(/\s*\([^)]*\)/g, '').trim();
  const correctedDomain = findClosestDomain(domainWithoutPercent);
  return `${start}${correctedDomain}${end}`;
});

await fs.writeFile(questoesPath, updatedContent, 'utf8');
console.log(`Dominios normalizados em ${path.relative(rootDir, questoesPath).replaceAll('\\', '/')}.`);