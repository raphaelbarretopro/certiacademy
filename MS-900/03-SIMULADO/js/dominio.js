const fs = require('fs');
const path = require('path');

const arquivoQuestoes = path.join(__dirname, 'questoes.js');

// Domínios oficiais
const dominiosOficiais = [
  "Descrever os conceitos da nuvem",
  "Descrever aplicativos e serviços do Microsoft 365",
  "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
  "Descrever os preços, o licenciamento e o suporte do Microsoft 365"
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