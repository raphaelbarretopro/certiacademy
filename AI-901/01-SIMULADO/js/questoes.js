// ==========================================
// Arquivo: questoes_bloco01.js
// Descrição: Simulado AI-901 — Domínios Oficiais Atualizados
// BLOCO 01 de 04
// ==========================================

export const questoes = [
  // Questão Original: 1
  {
    "tipo": "unica",
    "texto": "Você está usando o SDK de Fala do Azure (Azure Speech SDK) para desenvolver um aplicativo em Python que suporta conversas faladas em tempo real. Qual classe do serviço de Fala você deve usar para configurar a conexão com o serviço?",
    "opcoes": ["AudioOutputConfig", "SpeechSynthesizer", "AudioConfig", "SpeechConfig"],
    "resposta": 3,
    "explicacao": "A classe SpeechConfig é a responsável por configurar a assinatura, a região ou o token de autorização, estabelecendo a conexão inicial e os parâmetros base com o serviço de Fala do Azure antes de qualquer operação.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/speech-sdk",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 2
  {
    "tipo": "combobox",
    "texto": "Ao usar a API de Respostas do OpenAI e um modelo habilitado para visão, você pode incluir uma imagem em uma solicitação (request) fornecendo-a como <combobox>.",
    "opcoes": ["Selecione uma opção", "dados de imagem codificados em base64", "um anexo de arquivo CSV", "um fluxo de vídeo MP4", "um token de assinatura de acesso compartilhado (SAS)"],
    "resposta": 1,
    "explicacao": "Modelos de visão nas APIs do OpenAI aceitam imagens diretamente no payload se elas forem enviadas no formato de string codificada em base64 (Data URL) ou através de uma URL pública acessível via HTTP.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/gpt-with-vision",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  }
  
];