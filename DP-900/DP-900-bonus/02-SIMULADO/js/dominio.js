const fs = require('fs');
const path = require('path');

const arquivoQuestoes = path.join(__dirname, 'questoes.js');

// Domínios oficiais
const dominiosOficiais = [
  "Descrever os principais conceitos de dados",
  "Identificar considerações sobre dados relacionais no Azure",
  "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
  "Descrever uma carga de trabalho de análise no Azure"
];

// Função para encontrar o domínio oficial mais parecido
function encontrarDominioOficial(dominio) {
  // Remove qualquer texto entre parênteses antes de comparar
  const dominioLimpo = dominio.replace(/\s*\([^)]*\)/g, '').toLowerCase().trim();
  let max = 0;
  let melhor = dominiosOficiais[0];
  for (const oficial of dominiosOficiais) {
    let pontos = 0;
    const palavras = dominioLimpo.split(/\W+/);
    for (const palavra of palavras) {
      if (palavra.length > 2 && oficial.toLowerCase().includes(palavra)) pontos++;
    }
    if (pontos > max) {
      max = pontos;
      melhor = oficial;
    }
  }
  return melhor;
}

// Lê o arquivo de questões
let conteudo = fs.readFileSync(arquivoQuestoes, 'utf8');

// Regex mais robusto para pegar o campo "dominio" mesmo com espaços e aspas
conteudo = conteudo.replace(/("dominio"\s*:\s*")([^"]+)(")/g, (match, inicio, dominioAtual, fim) => {
  // Remove o percentual entre parênteses ANTES de comparar
  const dominioSemPercentual = dominioAtual.replace(/\s*\([^)]*\)/g, '').trim();
  const dominioCorrigido = encontrarDominioOficial(dominioSemPercentual);
  if (dominioAtual !== dominioCorrigido) {
    console.log(`Corrigindo domínio: "${dominioAtual}" => "${dominioCorrigido}"`);
  }
  return `${inicio}${dominioCorrigido}${fim}`;
});

// Salva o arquivo corrigido
fs.writeFileSync(arquivoQuestoes, conteudo, 'utf8');
console.log('Domínios corrigidos com sucesso!');