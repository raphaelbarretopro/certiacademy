// Script para adicionar aspas duplas às chaves dos objetos em questoes.js e sobrescrever o arquivo original

const fs = require('fs');

const file = 'questoes.js';

fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;

  // Regex para adicionar aspas duplas às chaves não citadas
  const fixed = data.replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');

  fs.writeFile(file, fixed, 'utf8', (err) => {
    if (err) throw err;
    console.log('Arquivo corrigido e salvo:', file);
  });
});