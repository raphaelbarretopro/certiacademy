const express = require('express');
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');
const app = express();
const rateLimit = require('express-rate-limit'); // Import rate-limiting middleware
const PORT = 3000;

const arquivoQuestoes = path.join(__dirname, 'questoes.js');
const arquivoCorrigir = path.join(__dirname, 'corrigir-dominios.js');

app.use(express.static(__dirname)); // para servir o index.html

app.get('/questoes', (req, res) => {
  fs.readFile(arquivoQuestoes, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Erro ao ler questoes.js');
    res.send(data);
  });
});

// Create a rate limiter: max 10 requests per minute
const corrigirLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10, // Limit each IP to 10 requests per `windowMs`
  message: 'Too many requests, please try again later.', // Custom error message
});

// Apply rate limiter to the `/corrigir` route
app.post('/corrigir', corrigirLimiter, (req, res) => {
  exec(`node "${arquivoCorrigir}"`, (error, stdout, stderr) => {
    if (error) return res.status(500).send(stderr);
    res.send(stdout);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});