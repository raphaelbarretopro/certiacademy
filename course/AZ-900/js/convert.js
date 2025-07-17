import fs from 'fs';

// Mapeamento dos campos em português para inglês
const mapFields = {
  tipo: 'type',
  texto: 'question',
  opcoes: 'options',
  resposta: 'answers',
  respostas: 'answers',
  explicacao: 'explanation',
  link: 'link',
  dominio: 'domain',
  simulado: 'simulated',
  afirmacoes: 'options',
  itens: 'items',
  grupos: 'group',
  imagemUrl: 'imageurl',
  pares: 'pairs',
  requisito: 'requirement'
};

// Mapeamento dos tipos de questão (se necessário)
const mapTypes = {
  unica: 'unique',
  multipla: 'choice',
  simnao: 'boolean',
  combobox: 'combobox',
  comboboxs: 'comboboxs',
  dragdrop: 'dragdrop'
};

// Função recursiva para converter campos e tipos
function convertFields(obj) {
  if (Array.isArray(obj)) {
    return obj.map(convertFields);
  }
  if (obj && typeof obj === 'object') {
    const newObj = {};
    for (const key in obj) {
      let newKey = mapFields[key] || key;
      let value = obj[key];

      // Converter tipo de questão
      if (newKey === 'type' && typeof value === 'string') {
        value = mapTypes[value] || value;
      }

      // Converter campos aninhados
      if (Array.isArray(value) || (value && typeof value === 'object')) {
        value = convertFields(value);
      }

      newObj[newKey] = value;
    }
    return newObj;
  }
  return obj;
}

// Carrega o arquivo questoes.js (ajuste o caminho se necessário)
import { questoes } from '../js/questoes.js';

// Converte todas as questões
const questoesEn = convertFields(questoes);

// Salva em um novo arquivo JSON (apenas o array)
fs.writeFileSync(
  './questoes_en.json',
  JSON.stringify(questoesEn, null, 2),
  'utf8'
);

console.log('Conversão concluída! Arquivo salvo como questoes_en.json');