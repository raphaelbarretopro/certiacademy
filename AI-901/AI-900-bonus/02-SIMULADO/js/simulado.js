const fs = require('fs');
const path = require('path');

const arquivoQuestoes = path.join(__dirname, 'questoes.js');
let conteudo = fs.readFileSync(arquivoQuestoes, 'utf8');

// Remove qualquer linha "simulado"
conteudo = conteudo.replace(/,\s*"simulado":\s*".*?"/g, '');

// Insere "simulado": "az-1" após "dominio"
conteudo = conteudo.replace(
  /("dominio"\s*:\s*".+?")(\s*[,\n]+)/g,
  '$1,$2    "simulado": "ai-b2"$2'
);

// Remove vírgulas duplicadas (caso raro)
conteudo = conteudo.replace(/,+/g, ',');

// Remove vírgula antes de fechar objeto
conteudo = conteudo.replace(/,(\s*[}\]])/g, '$1');

fs.writeFileSync(arquivoQuestoes, conteudo, 'utf8');
console.log('Campo "simulado": "az-1" inserido corretamente após "dominio"!');