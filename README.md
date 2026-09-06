
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
- inclusão única do script de módulo compartilhado em cada `index.html`
- ausência de arquivos legados dentro dos simulados (como `enviar_problema.php`)
- exportação de `questoes` nos arquivos de conteúdo
- schema das questões por tipo (`unica`, `multipla`, `simnao`, `dragdrop`, `combobox`, `comboboxs`)
- índices de resposta, metadados obrigatórios e links inválidos nos bancos de questões
- consistência entre `cursos.json`, os caminhos reais em disco e os cards de `index.html`

O workflow de GitHub Pages também executa essa validação antes do deploy.

## Login e Sessão do Aluno

O acesso aos simulados exige conta Google. A autenticação usa **Firebase Authentication** direto do navegador, sem backend próprio, e o site continua hospedado no GitHub Pages.

### Configuração (uma vez por ambiente)

1. Crie um projeto em [console.firebase.google.com](https://console.firebase.google.com)
2. Adicione um app **Web** (`</>`) e copie o objeto `firebaseConfig`
3. Cole os valores em `shared/simulado-engine/common/js/firebase-config.js`
4. Em **Authentication → Sign-in method**, habilite o provedor **Google**
5. Em **Authentication → Settings → Authorized domains**, adicione o domínio do GitHub Pages e `localhost`

Enquanto a configuração estiver vazia, `login.html` exibe um aviso em vez de falhar com erro interno do SDK.

> Os valores de `firebaseConfig` **não são segredos**. A configuração do cliente é pública por natureza: identifica o projeto, não autoriza nada. Quem protege os dados são as Security Rules — que entram na fase 3, junto com o histórico.

### Como funciona

| Arquivo | Papel |
|---|---|
| `shared/.../js/firebase-config.js` | configuração do projeto e versão do SDK |
| `shared/.../js/auth.js` | login, logout, exclusão de conta e o portão `exigirSessao()` |
| `shared/.../js/session-ui.js` | saudação com o primeiro nome, avatar e botão de sair |
| `login.html` | tela de entrada, com retorno ao destino pretendido |
| `privacidade.html` | política de privacidade e exclusão de conta |

O portão vive no `app.js`, que já era o único ponto de entrada JavaScript dos simulados — por isso o login vale para todos eles sem que os HTML precisem declarar nada além do atributo `data-requer-sessao` no `body`.

Três detalhes que o login obrigatório exige, e que estão implementados:

- **espera de sessão** — o portão aguarda o primeiro disparo de `onAuthStateChanged` em vez de ler `currentUser` na carga da página; ler direto manda para o login justamente quem já estava logado;
- **página oculta até o portão resolver** — o CSS compartilhado esconde `body[data-requer-sessao]` e o `app.js` libera com `data-sessao="ok"`, para que a estrutura da prova não pisque antes do redirecionamento. Se a autenticação falhar, a página reaparece com uma mensagem, nunca em branco;
- **destino preservado** — quem abre o link direto de um simulado volta para ele depois de entrar. O parâmetro `next` só aceita caminhos do próprio site, para não virar um redirecionamento aberto.

O login usa `signInWithPopup`, e não `signInWithRedirect`: o fluxo de redirecionamento depende de um iframe entre domínios e não funciona em navegadores que bloqueiam armazenamento de terceiros quando o site não está no domínio do Firebase Hosting.

### Efeito no "Reportar Problema"

Com sessão garantida, o reporte deixa de ser anônimo: `report.js` inclui nome e e-mail do aluno e define `_replyto`, permitindo responder direto a quem reportou.

## Histórico e Dashboard

Ao finalizar um simulado, o resultado é gravado no **Cloud Firestore** e passa a alimentar o painel em `dashboard.html`.

### Configuração (uma vez por ambiente)

1. No console do Firebase: **Criação → Firestore Database → Criar banco de dados**
2. Região: `southamerica-east1` (São Paulo) — **não dá para mudar depois**
3. Modo: **produção** (as regras vêm do arquivo abaixo)
4. Abra a aba **Regras**, cole o conteúdo de [`firestore.rules`](firestore.rules) e publique

> As regras são a **única proteção real** dos dados. O site é estático e a configuração do cliente é pública, então qualquer pessoa pode chamar o banco — o que impede o acesso indevido é o que está escrito nesse arquivo.

### Estrutura das coleções

```
users/{uid}                      perfil do aluno
users/{uid}/resultados/{id}      uma prova concluída (não pode ser alterada)
users/{uid}/resumo/agregado      médias já calculadas, lidas pelo dashboard
```

O documento de resumo existe para o dashboard custar **uma leitura** em vez de uma por prova. O custo migra da leitura, que acontece toda vez que o painel abre, para a escrita, que acontece uma vez por prova. São **duas escritas por simulado concluído** — dentro da cota gratuita, isso dá cerca de 10 mil provas por dia.

### Como a gravação acontece

O `quiz.js` não fala com o Firestore: ele apenas dispara o evento `certiacademy:resultado-final` com os números que já calculou para a tela de resultado. Quem escuta e grava é o `app.js`. Isso evita carregar o SDK do banco em quem só abriu a prova, e mantém o motor funcionando mesmo sem o histórico configurado.

A gravação é idempotente: o estado salvo marca `resultadoGravado`, então recarregar a tela de resultado não duplica a prova. Se a gravação falhar, a marca **não** é feita e a tentativa se repete na próxima carga — o aluno continua vendo a própria nota de qualquer forma.

### Tempo por simulado

O limite deixou de ser fixo em 45 minutos. Um banco de questões pode declarar o seu:

```js
export const tempoMinutos = 60;
```

Sem essa linha vale o padrão de 45, e nada muda em relação ao comportamento anterior. Como o tempo virou indicador do histórico, vale ajustar os simulados cujo tamanho destoa — eles variam de 11 a 49 questões.

### Exclusão de dados

`privacidade.html` apaga a subárvore `users/{uid}` **antes** de remover a conta do Authentication: na ordem inversa, o aluno perderia a permissão de apagar os próprios documentos e eles ficariam órfãos no banco.

## Manifesto de Cursos

O arquivo `cursos.json` na raiz é a fonte única de quais cursos e simulados existem. A estrutura é derivada do disco; os textos editoriais (`titulo`, `chamada`) e o campo `visivelNaHome` são escritos à mão e preservados entre execuções.

Para checar se o manifesto reflete a estrutura atual:

```
node scripts/gerar-manifesto.mjs
```

Para atualizá-lo depois de criar ou remover um curso ou simulado:

```
node scripts/gerar-manifesto.mjs --write
```

A validação do repositório recusa o build quando um card de `index.html` aponta para uma página inexistente, quando um curso marcado como visível não tem card, ou quando o manifesto referencia um simulado que não está em disco. Foi a ausência dessa checagem que permitiu que cards de cursos de teste ficassem publicados apontando para 404.

Para tirar um curso da home sem removê-lo do repositório, marque `"visivelNaHome": false` no manifesto e retire o card correspondente de `index.html`.

### Páginas de curso

As páginas `CURSO/curso.html` são **geradas** a partir do manifesto — não edite à mão:

```
node scripts/gerar-paginas-curso.mjs --write
```

Cada curso traz no manifesto um objeto `exame` com os dados do guia de estudo oficial: nome, resumo, data das habilidades, situação, áreas avaliadas com peso e tópicos, e a documentação recomendada. A estrutura de simulados e a contagem de questões vêm do disco, então nunca ficam desatualizadas.

O gerador reconhece duas situações:

- **simulado em preparação** — banco ainda com a questão de exemplo (`Conteúdo em atualização`). Fica fora da lista, e a página informa quantos estão a caminho;
- **exame desativado ou substituído** — a página abre com um aviso explicando a situação, como no MS-900 e no AI-900.

Sem `--write` o script apenas compara e falha se alguma página estiver fora de sincronia; é assim que o CI garante que ninguém edite o HTML gerado à mão.

## Sincronização do Motor dos Simulados

Os simulados compartilham o mesmo motor base em arquivos como `quiz.js`, `render.js`, `timer.js`, `report.js` e `main.js`, todos concentrados em `shared`, enquanto cada simulado mantém apenas o banco `questoes.js`.

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
- `enviar_problema.php` deixou de existir em todo o repositório: o envio do "Reportar Problema" passou a ser feito pelo módulo estático `shared/simulado-engine/common/js/report.js`

Para reaplicar essa migração caso novos simulados sejam adicionados:

```
node scripts/migrate-shared-runtime-assets.mjs --write
```

## Envio do "Reportar Problema"

O botão "Reportar Problema" dependia de `enviar_problema.php` e da função `mail()` do PHP, o que nunca funcionou no GitHub Pages — a publicação é 100% estática e não executa PHP. O envio agora sai direto do navegador para o [FormSubmit](https://formsubmit.co), que entrega a mensagem por e-mail sem backend próprio e sem chave secreta no código.

Toda a lógica está em `shared/simulado-engine/common/js/report.js`, consumida pelo motor comum e pela variante `ab-900-01`. O HTML do modal e o CSS dos simulados não mudaram.

O destino é definido em uma única constante:

```js
export const REPORT_ENDPOINT = 'https://formsubmit.co/ajax/raphael.boliveira@gmail.com';
```

### Ativação (uma única vez)

O FormSubmit só encaminha mensagens depois que o endereço é confirmado:

1. publique as alterações e abra qualquer simulado;
2. envie um reporte de teste pelo botão "Reportar Problema";
3. o FormSubmit enviará um e-mail de ativação para o endereço configurado — abra o link de confirmação.

A partir daí todos os reportes chegam normalmente. Enquanto o endereço não estiver confirmado, o modal exibe "Erro ao enviar".

### Ocultando o e-mail (opcional)

Após a ativação, o painel do FormSubmit disponibiliza um alias no formato `https://formsubmit.co/ajax/<hash>`. Substituir o endereço por esse alias em `REPORT_ENDPOINT` evita que o e-mail fique exposto no código publicado, sem nenhuma outra mudança.

### Dados enviados

Cada reporte leva curso, simulado, número da questão, texto do usuário e a URL da página. Curso e simulado são derivados do caminho da URL, reproduzindo o que o PHP fazia com `basename(dirname(__DIR__))` e `basename(__DIR__)`.

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
- `index.html`, `js/questoes.js` e `img/.gitkeep` em cada simulado
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
