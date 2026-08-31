const express = require('express');
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');
const app = express();
const PORT = 3000;

const arquivoQuestoes = path.join(__dirname, 'questoes.js');
const arquivoCorrigir = path.join(__dirname, 'corrigir-dominios.js');

app.use('/index.html', express.static(path.join(__dirname, 'index.html'))); // Serves index.html
app.use('/public', express.static(path.join(__dirname, 'public'))); // Serves public subdirectory

app.get('/questoes', (req, res) => {
  fs.readFile(arquivoQuestoes, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Erro ao ler questoes.js');
    res.send(data);
  });
});

app.post('/corrigir', (req, res) => {
  exec(`node "${arquivoCorrigir}"`, (error, stdout, stderr) => {
    if (error) return res.status(500).send(stderr);
    res.send(stdout);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});