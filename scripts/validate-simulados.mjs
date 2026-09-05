import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import vm from 'node:vm';

const rootDir = process.cwd();

const requiredFiles = [
  'index.html',
  path.join('js', 'questoes.js')
];

// Arquivos que nao devem mais existir dentro dos simulados. O envio do
// "Reportar Problema" deixou de depender de PHP para funcionar em hospedagem
// estatica; a implementacao vive em shared/simulado-engine/common/js/report.js.
const forbiddenFiles = [
  'enviar_problema.php'
];

const supportedQuestionTypes = new Set(['unica', 'multipla', 'simnao', 'dragdrop', 'combobox', 'comboboxs']);

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function walk(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const directories = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    if (entry.name === '.git' || entry.name === '.github' || entry.name === 'node_modules') {
      continue;
    }

    const fullPath = path.join(dirPath, entry.name);
    directories.push(fullPath);
    directories.push(...await walk(fullPath));
  }

  return directories;
}

async function listSimuladoDirs() {
  const allDirs = await walk(rootDir);
  const simulados = [];

  for (const dirPath of allDirs) {
    const hasIndex = await pathExists(path.join(dirPath, 'index.html'));
    const hasJsDir = await pathExists(path.join(dirPath, 'js'));

    if (!hasIndex || !hasJsDir) {
      continue;
    }

    simulados.push(dirPath);
  }

  return simulados.sort();
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isInteger(value) {
  return Number.isInteger(value);
}

function validateOptionList(question, relativeDir, index, errors, options = {}) {
  const { allowEmptyFirstOption = false } = options;

  if (!Array.isArray(question.opcoes) || question.opcoes.length === 0) {
    errors.push(`${relativeDir}: questao ${index + 1} (${question.tipo}) deve conter 'opcoes' como array nao vazio`);
    return false;
  }

  const invalidOption = question.opcoes.findIndex((option, optionIndex) => {
    if (allowEmptyFirstOption && optionIndex === 0 && typeof option === 'string') {
      return false;
    }

    return !isNonEmptyString(option);
  });

  if (invalidOption >= 0) {
    errors.push(`${relativeDir}: questao ${index + 1} (${question.tipo}) possui opcao invalida na posicao ${invalidOption}`);
    return false;
  }

  return true;
}

function validateQuestionBase(question, relativeDir, index, errors) {
  if (typeof question !== 'object' || question === null || Array.isArray(question)) {
    errors.push(`${relativeDir}: questao ${index + 1} deve ser um objeto`);
    return false;
  }

  if (!supportedQuestionTypes.has(question.tipo)) {
    errors.push(`${relativeDir}: questao ${index + 1} possui tipo nao suportado: ${String(question.tipo)}`);
  }

  for (const field of ['tipo', 'texto', 'explicacao', 'link', 'dominio', 'simulado']) {
    if (!isNonEmptyString(question[field])) {
      errors.push(`${relativeDir}: questao ${index + 1} deve conter '${field}' como texto nao vazio`);
    }
  }

  if ('imagemUrl' in question && !isNonEmptyString(question.imagemUrl)) {
    errors.push(`${relativeDir}: questao ${index + 1} possui 'imagemUrl' invalido`);
  }

  if (isNonEmptyString(question.link) && !/^https?:\/\//i.test(question.link)) {
    errors.push(`${relativeDir}: questao ${index + 1} possui link invalido: ${question.link}`);
  }

  return true;
}

function validateSingleChoice(question, relativeDir, index, errors) {
  const hasValidOptions = validateOptionList(question, relativeDir, index, errors, {
    allowEmptyFirstOption: question.tipo === 'combobox'
  });
  if (!isInteger(question.resposta)) {
    errors.push(`${relativeDir}: questao ${index + 1} (${question.tipo}) deve conter 'resposta' inteira`);
    return;
  }

  if (hasValidOptions && (question.resposta < 0 || question.resposta >= question.opcoes.length)) {
    errors.push(`${relativeDir}: questao ${index + 1} (${question.tipo}) possui 'resposta' fora do intervalo de opcoes`);
  }
}

function validateMultipleChoice(question, relativeDir, index, errors) {
  const hasValidOptions = validateOptionList(question, relativeDir, index, errors);

  if (!Array.isArray(question.respostas) || question.respostas.length === 0) {
    errors.push(`${relativeDir}: questao ${index + 1} (multipla) deve conter 'respostas' como array nao vazio`);
    return;
  }

  const uniqueAnswers = new Set(question.respostas);
  if (uniqueAnswers.size !== question.respostas.length) {
    errors.push(`${relativeDir}: questao ${index + 1} (multipla) possui respostas duplicadas`);
  }

  for (const answer of question.respostas) {
    if (!isInteger(answer)) {
      errors.push(`${relativeDir}: questao ${index + 1} (multipla) possui resposta nao inteira`);
      continue;
    }

    if (hasValidOptions && (answer < 0 || answer >= question.opcoes.length)) {
      errors.push(`${relativeDir}: questao ${index + 1} (multipla) possui resposta fora do intervalo de opcoes`);
    }
  }
}

function validateYesNo(question, relativeDir, index, errors) {
  if (!Array.isArray(question.afirmacoes) || question.afirmacoes.length === 0) {
    errors.push(`${relativeDir}: questao ${index + 1} (simnao) deve conter 'afirmacoes' como array nao vazio`);
  } else if (question.afirmacoes.some((item) => !isNonEmptyString(item))) {
    errors.push(`${relativeDir}: questao ${index + 1} (simnao) possui afirmacao invalida`);
  }

  if (!Array.isArray(question.respostas) || question.respostas.length === 0) {
    errors.push(`${relativeDir}: questao ${index + 1} (simnao) deve conter 'respostas' como array nao vazio`);
    return;
  }

  if (question.respostas.some((answer) => typeof answer !== 'boolean')) {
    errors.push(`${relativeDir}: questao ${index + 1} (simnao) possui resposta nao booleana`);
  }

  if (Array.isArray(question.afirmacoes) && question.afirmacoes.length !== question.respostas.length) {
    errors.push(`${relativeDir}: questao ${index + 1} (simnao) deve ter o mesmo numero de afirmacoes e respostas`);
  }
}

function validateDragDrop(question, relativeDir, index, errors) {
  if (!Array.isArray(question.itens) || question.itens.length === 0) {
    errors.push(`${relativeDir}: questao ${index + 1} (dragdrop) deve conter 'itens' como array nao vazio`);
  }

  const labels = [];
  if (Array.isArray(question.itens)) {
    for (const [itemIndex, item] of question.itens.entries()) {
      if (typeof item !== 'object' || item === null || !isNonEmptyString(item.label)) {
        errors.push(`${relativeDir}: questao ${index + 1} (dragdrop) possui item invalido na posicao ${itemIndex}`);
        continue;
      }

      labels.push(item.label);
    }
  }

  if (!Array.isArray(question.grupos) || question.grupos.length === 0) {
    errors.push(`${relativeDir}: questao ${index + 1} (dragdrop) deve conter 'grupos' como array nao vazio`);
  } else if (question.grupos.some((group) => typeof group !== 'string')) {
    errors.push(`${relativeDir}: questao ${index + 1} (dragdrop) possui grupo invalido`);
  }

  if (typeof question.respostas !== 'object' || question.respostas === null || Array.isArray(question.respostas)) {
    errors.push(`${relativeDir}: questao ${index + 1} (dragdrop) deve conter 'respostas' como objeto`);
    return;
  }

  if (!Array.isArray(question.grupos)) {
    return;
  }

  for (const group of question.grupos) {
    if (!(group in question.respostas)) {
      errors.push(`${relativeDir}: questao ${index + 1} (dragdrop) nao possui resposta para o grupo '${group}'`);
      continue;
    }

    const mappedLabels = question.respostas[group];
    if (!Array.isArray(mappedLabels) || mappedLabels.length === 0) {
      errors.push(`${relativeDir}: questao ${index + 1} (dragdrop) deve mapear o grupo '${group}' para um array nao vazio`);
      continue;
    }

    for (const mappedLabel of mappedLabels) {
      if (!labels.includes(mappedLabel)) {
        errors.push(`${relativeDir}: questao ${index + 1} (dragdrop) referencia item inexistente '${mappedLabel}'`);
      }
    }
  }

  for (const group of Object.keys(question.respostas)) {
    if (!question.grupos.includes(group)) {
      errors.push(`${relativeDir}: questao ${index + 1} (dragdrop) possui grupo extra em respostas: '${group}'`);
    }
  }
}

function validateMultiCombobox(question, relativeDir, index, errors) {
  if (!Array.isArray(question.pares) || question.pares.length === 0) {
    errors.push(`${relativeDir}: questao ${index + 1} (comboboxs) deve conter 'pares' como array nao vazio`);
    return;
  }

  for (const [pairIndex, pair] of question.pares.entries()) {
    if (typeof pair !== 'object' || pair === null) {
      errors.push(`${relativeDir}: questao ${index + 1} (comboboxs) possui par invalido na posicao ${pairIndex}`);
      continue;
    }

    if (!isNonEmptyString(pair.requisito)) {
      errors.push(`${relativeDir}: questao ${index + 1} (comboboxs) possui requisito invalido na posicao ${pairIndex}`);
    }

    if (!Array.isArray(pair.opcoes) || pair.opcoes.length === 0) {
      errors.push(`${relativeDir}: questao ${index + 1} (comboboxs) possui opcoes invalidas na posicao ${pairIndex}`);
      continue;
    }

    if (pair.opcoes.some((option) => !isNonEmptyString(option))) {
      errors.push(`${relativeDir}: questao ${index + 1} (comboboxs) possui opcao invalida no par ${pairIndex}`);
    }

    if (!isInteger(pair.resposta)) {
      errors.push(`${relativeDir}: questao ${index + 1} (comboboxs) possui resposta invalida no par ${pairIndex}`);
      continue;
    }

    if (pair.resposta < 0 || pair.resposta >= pair.opcoes.length) {
      errors.push(`${relativeDir}: questao ${index + 1} (comboboxs) possui resposta fora do intervalo no par ${pairIndex}`);
    }
  }
}

function validateQuestionByType(question, relativeDir, index, errors) {
  switch (question.tipo) {
    case 'unica':
    case 'combobox':
      validateSingleChoice(question, relativeDir, index, errors);
      return;
    case 'multipla':
      validateMultipleChoice(question, relativeDir, index, errors);
      return;
    case 'simnao':
      validateYesNo(question, relativeDir, index, errors);
      return;
    case 'dragdrop':
      validateDragDrop(question, relativeDir, index, errors);
      return;
    case 'comboboxs':
      validateMultiCombobox(question, relativeDir, index, errors);
      return;
    default:
      return;
  }
}

async function validateQuestionBank(questoesPath, relativeDir) {
  const errors = [];

  let questoesContent;
  try {
    questoesContent = await fs.readFile(questoesPath, 'utf8');
  } catch (error) {
    errors.push(`${relativeDir}: js/questoes.js nao pode ser lido: ${error.message}`);
    return errors;
  }

  const exportMarker = 'export const questoes =';
  const markerIndex = questoesContent.indexOf(exportMarker);

  if (markerIndex < 0) {
    errors.push(`${relativeDir}: js/questoes.js deve exportar 'questoes'`);
    return errors;
  }

  const expression = questoesContent.slice(markerIndex + exportMarker.length).trim().replace(/;\s*$/, '');

  let questionBank;
  try {
    questionBank = vm.runInNewContext(`(${expression})`, {}, { timeout: 1000 });
  } catch (error) {
    errors.push(`${relativeDir}: js/questoes.js possui erro de sintaxe/schema: ${error.message}`);
    return errors;
  }

  if (!Array.isArray(questionBank)) {
    errors.push(`${relativeDir}: js/questoes.js deve exportar 'questoes' como array`);
    return errors;
  }

  if (questionBank.length === 0) {
    errors.push(`${relativeDir}: js/questoes.js nao pode exportar um array vazio`);
    return errors;
  }

  for (const [index, question] of questionBank.entries()) {
    const isValidBase = validateQuestionBase(question, relativeDir, index, errors);
    if (!isValidBase) {
      continue;
    }

    validateQuestionByType(question, relativeDir, index, errors);
  }

  return errors;
}

async function validateSimulado(dirPath) {
  const errors = [];
  const relativeDir = path.relative(rootDir, dirPath).replaceAll('\\', '/');

  for (const requiredFile of requiredFiles) {
    const targetPath = path.join(dirPath, requiredFile);
    if (!await pathExists(targetPath)) {
      errors.push(`${relativeDir}: arquivo obrigatorio ausente: ${requiredFile.replaceAll('\\', '/')}`);
    }
  }

  for (const forbiddenFile of forbiddenFiles) {
    const targetPath = path.join(dirPath, forbiddenFile);
    if (await pathExists(targetPath)) {
      errors.push(`${relativeDir}: arquivo legado deve ser removido: ${forbiddenFile.replaceAll('\\', '/')}`);
    }
  }

  const indexPath = path.join(dirPath, 'index.html');
  const questoesPath = path.join(dirPath, 'js', 'questoes.js');
  const jsDirPath = path.join(dirPath, 'js');

  if (await pathExists(indexPath)) {
    const indexContent = await fs.readFile(indexPath, 'utf8');
    const mainScriptMatches = Array.from(indexContent.matchAll(/<script\s+type="module"\s+src="([^"]+)"><\/script>/g));
    const stylesheetMatch = indexContent.match(/<link\s+rel="stylesheet"\s+href="([^"]+)"\s*\/?>/i);

    if (mainScriptMatches.length !== 1) {
      errors.push(`${relativeDir}: index.html deve conter exatamente uma inclusao de script type=module; encontrado: ${mainScriptMatches.length}`);
    } else {
      const mainScriptPath = path.resolve(dirPath, mainScriptMatches[0][1]);
      if (!await pathExists(mainScriptPath)) {
        errors.push(`${relativeDir}: script module referenciado nao existe: ${mainScriptMatches[0][1]}`);
      }
    }

    if (!stylesheetMatch) {
      errors.push(`${relativeDir}: index.html deve conter uma referencia de stylesheet`);
    } else {
      const stylesheetPath = path.resolve(dirPath, stylesheetMatch[1]);
      if (!await pathExists(stylesheetPath)) {
        errors.push(`${relativeDir}: stylesheet referenciado nao existe: ${stylesheetMatch[1]}`);
      }
    }

    // O portao de sessao e obrigatorio: sem o atributo, quem nao esta logado ve
    // a estrutura da prova aparecer antes do redirecionamento para o login.
    if (!/<body[^>]*\sdata-requer-sessao/.test(indexContent)) {
      errors.push(`${relativeDir}: index.html deve declarar 'data-requer-sessao' no body`);
    }

    // Toda dependencia de CDN sem versao fixa entra em producao sozinha na
    // proxima versao maior e pode quebrar a pagina sem aviso.
    const cdnSemVersao = indexContent.match(/src="(https:\/\/cdn\.jsdelivr\.net\/npm\/[^"@]+)"/);
    if (cdnSemVersao) {
      errors.push(`${relativeDir}: index.html carrega dependencia de CDN sem versao fixa: ${cdnSemVersao[1]}`);
    }
  }

  if (await pathExists(questoesPath)) {
    const questoesContent = await fs.readFile(questoesPath, 'utf8');
    if (!questoesContent.includes('export const questoes')) {
      errors.push(`${relativeDir}: js/questoes.js deve exportar 'questoes'`);
    } else {
      const contentErrors = await validateQuestionBank(questoesPath, relativeDir);
      errors.push(...contentErrors);
    }
  }

  if (await pathExists(jsDirPath)) {
    const jsEntries = await fs.readdir(jsDirPath);
    for (const entry of jsEntries) {
      if (/bk\.js$/i.test(entry)) {
        errors.push(`${relativeDir}: arquivo legado nao deve permanecer em js/: ${entry}`);
      }

      if (entry === 'simulado.js') {
        errors.push(`${relativeDir}: script utilitario legado nao deve permanecer em js/: ${entry}`);
      }

      if (entry === 'dominio.js' || entry === 'aspas.js') {
        errors.push(`${relativeDir}: script utilitario legado nao deve permanecer em js/: ${entry}`);
      }

      if (entry === 'corrigir-dominios.js' || entry === 'servidor.js') {
        errors.push(`${relativeDir}: script utilitario legado nao deve permanecer em js/: ${entry}`);
      }

      if (entry === 'render.js') {
        errors.push(`${relativeDir}: render compartilhado nao deve permanecer como copia local em js/: ${entry}`);
      }

      if (entry === 'quiz.js') {
        errors.push(`${relativeDir}: quiz compartilhado nao deve permanecer como copia local em js/: ${entry}`);
      }

      if (entry === 'package.json' || entry === 'package-lock.json' || entry === 'index.html' || entry === 'questoes.json') {
        errors.push(`${relativeDir}: arquivo auxiliar nao deve permanecer em js/: ${entry}`);
      }

      if (entry === 'node_modules') {
        errors.push(`${relativeDir}: dependencia local nao deve permanecer em js/: ${entry}/`);
      }
    }
  }

  return errors;
}

// ==========================================
// Funcao: validateManifestoEHome()
// Descricao: cursos.json e a fonte unica de cursos e simulados. Esta checagem
//            garante que ele aponta para caminhos reais e que os cards da home
//            correspondem exatamente aos cursos visiveis do manifesto - foi a
//            ausencia disso que deixou cards apontando para pastas inexistentes.
// ==========================================
async function validateManifestoEHome() {
  const errors = [];
  const manifestoPath = path.join(rootDir, 'cursos.json');

  if (!await pathExists(manifestoPath)) {
    errors.push('cursos.json ausente na raiz do repositorio');
    return errors;
  }

  let manifesto;
  try {
    manifesto = JSON.parse(await fs.readFile(manifestoPath, 'utf8'));
  } catch (error) {
    errors.push(`cursos.json nao e um JSON valido: ${error.message}`);
    return errors;
  }

  const cursos = Array.isArray(manifesto.cursos) ? manifesto.cursos : [];

  if (cursos.length === 0) {
    errors.push('cursos.json nao lista nenhum curso');
    return errors;
  }

  for (const curso of cursos) {
    const rotulo = curso.codigo ?? '(curso sem codigo)';

    for (const campo of ['codigo', 'pasta', 'titulo', 'chamada', 'curso']) {
      if (!isNonEmptyString(curso[campo])) {
        errors.push(`cursos.json: ${rotulo} deve conter '${campo}' como texto nao vazio`);
      }
    }

    if (isNonEmptyString(curso.curso) && !await pathExists(path.join(rootDir, curso.curso))) {
      errors.push(`cursos.json: ${rotulo} aponta para pagina inexistente: ${curso.curso}`);
    }

    for (const simulado of curso.simulados ?? []) {
      if (!isNonEmptyString(simulado.caminho)) {
        errors.push(`cursos.json: ${rotulo} possui simulado sem 'caminho'`);
        continue;
      }

      if (!await pathExists(path.join(rootDir, simulado.caminho, 'index.html'))) {
        errors.push(`cursos.json: ${rotulo} aponta para simulado inexistente: ${simulado.caminho}`);
      }
    }
  }

  const homePath = path.join(rootDir, 'index.html');

  if (!await pathExists(homePath)) {
    errors.push('index.html ausente na raiz do repositorio');
    return errors;
  }

  const homeContent = await fs.readFile(homePath, 'utf8');
  const linksNaHome = Array.from(homeContent.matchAll(/href="\.\/([^"]+\/curso\.html)"/g)).map(match => match[1]);

  for (const link of linksNaHome) {
    if (!await pathExists(path.join(rootDir, link))) {
      errors.push(`index.html: card aponta para pagina inexistente: ./${link}`);
    }
  }

  const visiveis = cursos.filter(curso => curso.visivelNaHome !== false);

  for (const curso of visiveis) {
    if (isNonEmptyString(curso.curso) && !linksNaHome.includes(curso.curso)) {
      errors.push(`index.html: falta card para o curso ${curso.codigo} (marcado como visivel em cursos.json)`);
    }
  }

  const caminhosConhecidos = new Set(cursos.map(curso => curso.curso));

  for (const link of linksNaHome) {
    if (!caminhosConhecidos.has(link)) {
      errors.push(`index.html: card de ./${link} nao corresponde a nenhum curso de cursos.json`);
    }
  }

  return errors;
}

async function main() {
  const simuladoDirs = await listSimuladoDirs();

  if (simuladoDirs.length === 0) {
    console.error('Nenhum simulado foi encontrado para validacao.');
    process.exit(1);
  }

  const allErrors = [];

  for (const dirPath of simuladoDirs) {
    const errors = await validateSimulado(dirPath);
    allErrors.push(...errors);
  }

  allErrors.push(...await validateManifestoEHome());

  if (allErrors.length > 0) {
    console.error('Validacao falhou. Problemas encontrados:');
    for (const error of allErrors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log(`Validacao concluida com sucesso: ${simuladoDirs.length} simulados verificados, cursos.json e index.html consistentes.`);
}

await main();