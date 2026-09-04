import { createServer } from 'node:http';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { spawn } from 'node:child_process';

const workspaceRoot = process.cwd();
const htmlPath = path.join(workspaceRoot, 'tools', 'scaffold-ui', 'index.html');

function getArgValue(flag) {
  const index = process.argv.indexOf(flag);
  if (index < 0 || index === process.argv.length - 1) {
    return null;
  }

  return process.argv[index + 1];
}

function getPort() {
  const value = getArgValue('--port');
  if (!value) {
    return 4173;
  }

  const parsed = Number.parseInt(value, 10);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error('A porta informada em --port deve ser um inteiro positivo.');
  }

  return parsed;
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(payload));
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    request.on('data', (chunk) => {
      chunks.push(chunk);
    });

    request.on('end', () => {
      resolve(Buffer.concat(chunks).toString('utf8'));
    });

    request.on('error', reject);
  });
}

function normalizeText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function runNodeScript(scriptRelativePath, args) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [scriptRelativePath, ...args], {
      cwd: workspaceRoot,
      windowsHide: true
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString('utf8');
    });

    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString('utf8');
    });

    child.on('close', (code) => {
      resolve({ code: code ?? 1, stdout, stderr });
    });
  });
}

function buildScaffoldArgs(payload) {
  const mode = payload.mode === 'simulado' ? 'simulado' : 'course';
  const course = normalizeText(payload.course);

  if (!course) {
    throw new Error('Informe o caminho do curso, por exemplo AZ-104.');
  }

  const args = [mode, '--course', course];

  if (mode === 'course') {
    const title = normalizeText(payload.title) || `Curso Preparatorio ${path.basename(course)}`;
    args.push('--title', title);

    const headline = normalizeText(payload.headline);
    const description = normalizeText(payload.description);
    const simulados = Number.parseInt(String(payload.simulados ?? '1'), 10);

    if (!Number.isInteger(simulados) || simulados <= 0) {
      throw new Error('A quantidade de simulados deve ser um inteiro maior que zero.');
    }

    args.push('--simulados', String(simulados));

    if (headline) {
      args.push('--headline', headline);
    }

    if (description) {
      args.push('--description', description);
    }
  } else {
    const name = normalizeText(payload.name);
    const title = normalizeText(payload.title);

    if (name) {
      args.push('--name', name);
    }

    if (title) {
      args.push('--title', title);
    }
  }

  if (payload.write === true) {
    args.push('--write');
  }

  return args;
}

async function handleApiScaffold(request, response) {
  let payload;

  try {
    const rawBody = await readRequestBody(request);
    payload = JSON.parse(rawBody || '{}');
  } catch {
    sendJson(response, 400, { ok: false, error: 'Corpo JSON invalido.' });
    return;
  }

  let args;
  try {
    args = buildScaffoldArgs(payload);
  } catch (error) {
    sendJson(response, 400, { ok: false, error: error.message });
    return;
  }

  const scaffoldResult = await runNodeScript(path.join('scripts', 'scaffold-certiacademy.mjs'), args);
  let validationResult = null;

  if (scaffoldResult.code === 0 && payload.write === true) {
    validationResult = await runNodeScript(path.join('scripts', 'validate-simulados.mjs'), []);
  }

  sendJson(response, scaffoldResult.code === 0 ? 200 : 500, {
    ok: scaffoldResult.code === 0 && (!validationResult || validationResult.code === 0),
    scaffold: scaffoldResult,
    validation: validationResult,
    command: `${process.execPath} scripts/scaffold-certiacademy.mjs ${args.map((value) => value.includes(' ') ? `"${value}"` : value).join(' ')}`
  });
}

async function handleRequest(request, response) {
  const requestUrl = new URL(request.url, 'http://localhost');

  if (request.method === 'GET' && requestUrl.pathname === '/') {
    try {
      const html = await fs.readFile(htmlPath, 'utf8');
      response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end(html);
    } catch (error) {
      sendJson(response, 500, { ok: false, error: `Nao foi possivel carregar a interface: ${error.message}` });
    }
    return;
  }

  if (request.method === 'POST' && requestUrl.pathname === '/api/scaffold') {
    await handleApiScaffold(request, response);
    return;
  }

  if (request.method === 'GET' && requestUrl.pathname === '/api/health') {
    sendJson(response, 200, { ok: true });
    return;
  }

  sendJson(response, 404, { ok: false, error: 'Rota nao encontrada.' });
}

async function main() {
  const port = getPort();

  const server = createServer((request, response) => {
    handleRequest(request, response).catch((error) => {
      sendJson(response, 500, { ok: false, error: error.message });
    });
  });

  server.listen(port, () => {
    console.log(`Scaffold UI disponivel em http://localhost:${port}`);
    console.log('Use Ctrl+C para encerrar.');
  });
}

try {
  await main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}