
# CertiAcademy

> Plataforma de simulados e materiais de estudo para certificações Microsoft da linha 900 (AZ-900, AI-900, DP-900, PL-900, MS-900, SC-900).

## Descrição

O CertiAcademy é um projeto educacional que oferece simulados interativos, cursos e materiais de apoio para quem deseja se preparar para as certificações Microsoft 900. Cada módulo contém simulados com questões no padrão das provas oficiais, explicações detalhadas e recursos para acelerar a preparação.

## Funcionalidades
- Simulados interativos para cada certificação
- Correção automática e explicações das respostas
- Materiais de apoio em PDF e outros formatos
- Interface responsiva e moderna
- Suporte a múltiplos exames: AZ-900, AI-900, DP-900, PL-900, MS-900, SC-900

## Estrutura do Projeto

```
├── index.html                # Página inicial
├── css/                      # Estilos globais
├── imagens/                  # Logos e imagens gerais
├── AI-900/                   # Simulados e materiais AI-900
│   ├── curso.html
│   ├── 01-SIMULADO/ ...
│   └── arquivos/             # PDFs e resumos
├── AZ-900/                   # Simulados e materiais AZ-900
│   ├── curso.html
│   ├── 01-SIMULADO/ ...
│   └── arquivos/
├── DP-900/                   # Simulados e materiais DP-900
│   ├── curso.html
│   ├── 01-SIMULADO/ ...
│   └── arquivos/
├── PL-900/                   # Simulados e materiais PL-900
│   ├── curso.html
│   ├── 01-Power-Plataform-I/ ...
│   └── arquivos/
├── MS-900/                   # Simulados e materiais MS-900
│   ├── curso.html
│   ├── 01-SIMULADO/ ...
│   └── arquivos/
├── SC-900/                   # Simulados e materiais SC-900
│   ├── curso.html
│   ├── 01-SIMULADO/ ...
│   └── arquivos/
└── ...
```

## Tecnologias Utilizadas
- HTML5, CSS3 (TailwindCSS e customizado)
- JavaScript (ES6+)
- Estrutura modular de JS para simulados
- PDFs e materiais complementares

## Como Usar
1. Clone o repositório:
   ```
   git clone https://github.com/raphaelbarretopro/certiacademy.git
   ```
2. Abra o arquivo `index.html` no navegador para acessar a plataforma localmente.
3. Navegue pelos módulos de cada certificação para acessar simulados e materiais.

## Validação Local

Antes de publicar alterações, execute a validação estrutural do repositório:

```
node scripts/validate-simulados.mjs
```

Essa checagem valida automaticamente:
- presença dos arquivos obrigatórios de cada simulado
- inclusão única de `js/main.js` em cada `index.html`
- estrutura esperada de `enviar_problema.php`
- exportação de `questoes` nos arquivos de conteúdo
- schema das questões por tipo (`unica`, `multipla`, `simnao`, `dragdrop`, `combobox`, `comboboxs`)
- índices de resposta, metadados obrigatórios e links inválidos nos bancos de questões

O workflow de GitHub Pages também executa essa validação antes do deploy.

## Sincronização do Motor dos Simulados

Os simulados compartilham o mesmo motor base em arquivos como `quiz.js`, `render.js`, `timer.js`, `main.js` e `enviar_problema.php`, todos concentrados em `shared`, enquanto cada simulado mantém apenas o banco `questoes.js`.

Para checar se há divergências entre as cópias locais e a base canônica:

```
node scripts/sync-simulado-engine.mjs
```

Para aplicar a sincronização nas cópias compatíveis:

```
node scripts/sync-simulado-engine.mjs --write
```

Referências canônicas atuais:
- base comum: `shared/simulado-engine/common`
- variante específica de renderização: `shared/simulado-engine/variants/ab-900-01`

Fluxo recomendado de manutenção:
- altere primeiro a base compartilhada
- execute `node scripts/sync-simulado-engine.mjs --write`
- execute `node scripts/validate-simulados.mjs`

## Runtime Compartilhado Parcial

O repositório agora começou a eliminar duplicação física de runtime:
- `styles.css` passou a ser referenciado diretamente de `shared/simulado-engine/common/css/styles.css`
- a variante visual de `AB-900/01-SIMULADO` usa `shared/simulado-engine/variants/ab-900-01/css/styles.css`
- `js/main.js` deixou de existir nos simulados e foi substituído pelo bootstrap compartilhado `shared/simulado-engine/common/js/app.js`
- `js/render.js` deixou de existir nos simulados e passou a ser resolvido pelo bootstrap compartilhado, com exceção visual controlada para `AB-900/01-SIMULADO`
- `js/quiz.js` deixou de existir nos simulados e passou a ser consumido diretamente de `shared/simulado-engine/common/js/quiz.js`
- `js/timer.js` e `js/utils.js` deixaram de existir nos simulados e passaram a ser consumidos diretamente do shared

Para reaplicar essa migração caso novos simulados sejam adicionados:

```
node scripts/migrate-shared-runtime-assets.mjs --write
```

## Utilitários de Conteúdo

## Scaffold de Novos Cursos e Simulados

### Interface gráfica local

Se preferir usar uma interface com botões em vez de digitar comandos, inicie o servidor local da UI:

```
node scripts/scaffold-ui-server.mjs
```

Depois abra no navegador:

```
http://localhost:4173
```

Essa interface gráfica:
- chama internamente o `scripts/scaffold-certiacademy.mjs`
- permite pré-visualizar ou criar um curso novo
- permite pré-visualizar ou criar um novo simulado em curso existente
- executa a validação do repositório automaticamente após a criação real

Se quiser usar outra porta:

```
node scripts/scaffold-ui-server.mjs --port 4180
```

Para criar um novo curso completo no padrão atual do repositório:

```
node scripts/scaffold-certiacademy.mjs course --course AZ-104 --title "Microsoft Azure Administrator" --simulados 3
```

O comando acima roda em modo de prévia. Para aplicar a criação:

```
node scripts/scaffold-certiacademy.mjs course --course AZ-104 --title "Microsoft Azure Administrator" --simulados 3 --write
```

Isso cria:
- `curso.html`
- `arquivos/.gitkeep`
- um conjunto inicial de pastas `NN-SIMULADO`
- `index.html`, `enviar_problema.php`, `js/questoes.js` e `img/.gitkeep` em cada simulado
- atualização automática do card do novo curso em `index.html`

Para criar apenas um novo simulado dentro de um curso existente:

```
node scripts/scaffold-certiacademy.mjs simulado --course AZ-104 --name 04-SIMULADO
```

Para aplicar a criação do novo simulado:

```
node scripts/scaffold-certiacademy.mjs simulado --course AZ-104 --name 04-SIMULADO --write
```

Observações do scaffold:
- o runtime continua compartilhado via `shared/simulado-engine/common`
- cada novo simulado nasce apenas com `js/questoes.js` como conteúdo próprio
- o `questoes.js` inicial já é válido para passar na validação estrutural, mas deve ser substituído pelo banco real antes de publicar
- no modo `simulado`, a navegação lateral (`sidebarDireita`) dos simulados existentes do mesmo curso é atualizada automaticamente para incluir o novo item
- o simulado atual já é gerado com destaque visual automático na `sidebarDireita`

Scripts utilitários de manutenção de banco de questões não devem mais ficar dentro de `js/` dos simulados.

Para atualizar o campo `simulado` em um banco de questões:

```
node scripts/set-questoes-simulado.mjs --file AI-900/01-SIMULADO/js/questoes.js --value ai-1
```

Para normalizar domínios de um banco de questões:

```
node scripts/normalize-questoes-dominios.mjs --file AZ-900/01-SIMULADO/js/questoes.js --domains "Descrever os conceitos da nuvem|Descrever a arquitetura e os serviços do Azure|Descrever o gerenciamento e a governança do Azure"
```

Para adicionar aspas nas chaves de objetos em um banco de questões:

```
node scripts/quote-questoes-keys.mjs --file PL-900/01-Power-Plataform-I/js/questoes.js
```

Os scripts utilitários editoriais antigos não devem permanecer dentro das pastas `js/` dos simulados. Isso inclui arquivos como `simulado.js`, `dominio.js`, `aspas.js`, `corrigir-dominios.js`, `servidor.js`, `package.json`, `index.html` auxiliar e `node_modules` locais.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Créditos e Contato

Desenvolvido por Raphael Barreto.

Para dúvidas, sugestões ou colaborações, entre em contato pelo [LinkedIn](https://www.linkedin.com/in/raphaelbarretopro/) ou abra uma issue.

---
*Este projeto não é afiliado à Microsoft. As marcas e nomes de exames são propriedade de seus respectivos detentores.*
