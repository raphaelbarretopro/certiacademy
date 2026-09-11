# CertiAcademy

> Plataforma de simulados para as certificações fundamentais da Microsoft, em
> **raphaelbarreto.com.br**. Site estático no GitHub Pages, com login, histórico
> de desempenho e controle de acesso em Firebase — sem servidor próprio.

## O que é

Simulados que reproduzem o formato real do exame: resposta única, múltipla
escolha, Sim/Não, arrastar e soltar, lista suspensa e múltiplas listas. Mesma
escala de 1000 pontos e mesma nota de corte de 700 das provas oficiais. Ao
terminar, o aluno vê em quais assuntos precisa voltar.

| | |
|---|---|
| Certificações | 6 |
| Simulados | 46 |
| Questões | 1.835 |

| Curso | Exame |
|---|---|
| AZ-900 | Microsoft Azure Fundamentals |
| SC-900 | Microsoft Security, Compliance and Identity Fundamentals |
| PL-900 | Microsoft Power Platform Fundamentals |
| DP-900 | Microsoft Azure Data Fundamentals |
| AI-901 | Microsoft Azure AI Fundamentals |
| AB-900 | Microsoft 365 Copilot and Agent Administration |

> O AI-900 foi substituído pelo AI-901 e o MS-900 foi desativado em 31/03/2026.
> Os dois saíram do repositório.

## Como funciona

O site é **estático**. Não há backend: o navegador fala direto com o Firebase, e
a configuração do cliente é pública por natureza.

```
navegador ──> Firebase Authentication   (quem é você)
         └──> Cloud Firestore           (o que você pode ver e escrever)
```

Isso tem uma consequência que atravessa o projeto inteiro:

> **As regras do Firestore são a única proteção real dos dados.** Esconder uma
> página não protege nada — qualquer pessoa digita o endereço. O que impede um
> aluno de ler os dados de outro, ou de se promover a administrador, é
> exclusivamente o que está escrito em [`firestore.rules`](firestore.rules).

### Duas armadilhas registradas no arquivo de regras

- **As permissões se somam (OR).** Um `match /{documento=**}` dentro de
  `users/{uid}` anularia qualquer restrição interna, inclusive o bloqueio de
  alteração dos resultados. Por isso cada coleção é declarada explicitamente.
- **Ninguém edita o próprio papel**, administrador incluído. Sem
  `request.auth.uid != uid`, uma conta de administrador comprometida seria
  irreversível de dentro do sistema.

## Acesso

Entrar não basta: o acesso precisa ser **liberado**. O portão confere as duas
coisas e manda quem não passou para `liberar.html`.

```
entrar (Google) ──> portão ──┬── liberado ──> simulados e painel
                             ├── administrador ──> passa sempre
                             └── sem acesso ──> liberar.html
                                                ├── resgatar voucher
                                                └── pedir acesso
```

| Coleção | Guarda | Quem escreve |
|---|---|---|
| `papeis/{uid}` | `admin` ou `aluno` | só administradores, nunca o próprio |
| `acessos/{uid}` | origem, data e validade da liberação | administrador ou resgate de voucher |
| `vouchers/{codigo}` | código de uso único | administrador cria, aluno marca como usado |
| `solicitacoes/{uid}` | pedido de acesso | o próprio aluno, enquanto não aceito |
| `users/{uid}` | perfil e histórico | o próprio aluno |

**O código do voucher é o identificador do documento.** É o que permite resgatar
sem expor a lista: o aluno não consegue listar a coleção, mas alcança um
documento cujo id já conhece. O segredo é o próprio código — por isso ele vem de
`crypto.getRandomValues`, com 12 caracteres de um alfabeto de 32 sem `I`, `O`,
`0` e `1`, que se confundem ao digitar.

O administrador passa sempre pelo portão, de propósito: sem isso ficaria
trancado do lado de fora do painel que libera os outros.

### Primeiro administrador

Não pode ser criado pelo sistema — não existe administrador para criá-lo. Ele
nasce à mão no Console do Firebase:

1. **Authentication → Users**: copie o UID da conta
2. **Firestore Database → Iniciar coleção** na raiz
3. Coleção `papeis`, documento com o UID, campo `papel` (string) = `admin`

### Painel do administrador

`admin.html` reúne a fila de solicitações, a lista de cadastrados e os vouchers.
Clicar no nome de um aluno abre `dashboard.html?aluno=<uid>` — é o mesmo painel
de sempre, só muda a origem do uid, com uma faixa âmbar avisando de quem são os
dados na tela.

Cada seção carrega por conta própria: uma quebrada não derruba as outras.

## Modos de simulado

Antes de começar, o aluno escolhe. A escolha vale para a tentativa e fica no
estado persistido — recarregar não pergunta de novo.

| | Praticar | Simular a certificação |
|---|---|---|
| Tempo | sem limite, conta quanto levou | 45 minutos corridos |
| Cronômetro | sobe | desce |
| Fechar a aba | pausa | **não pausa** |
| Ao esgotar | não acontece | entrega a prova como está |

A diferença está em **como o tempo é contado**. Na prática, o cronômetro acumula
o tempo com a página aberta — é treino, e pausar faz parte. No exame o tempo é de
relógio: guardamos o instante de início e calculamos o que sobrou a partir de
agora. Sem isso, fechar a aba pausaria o cronômetro e "não dá para pausar" seria
só uma frase na tela.

O tempo padrão é 45 minutos. Um banco pode declarar o seu:

```js
export const tempoMinutos = 60;
```

## Histórico e desempenho

Ao finalizar, o resultado vai para o Firestore e alimenta `dashboard.html`.

```
users/{uid}/resultados/{id}      uma prova concluída — não pode ser alterada
users/{uid}/resumo/agregado      médias já calculadas, lidas pelo painel
```

O documento de resumo existe para o painel custar **uma leitura** em vez de uma
por prova. O custo migra da leitura, que acontece toda vez que o painel abre,
para a escrita, que acontece uma vez por prova.

O `quiz.js` não fala com o Firestore: dispara o evento
`certiacademy:resultado-final` com os números que já calculou para a tela de
resultado, e quem grava é o `app.js`. Isso evita carregar o SDK do banco em quem
só abriu a prova, e mantém o motor funcionando sem histórico configurado.

A gravação é idempotente: o estado salvo marca `resultadoGravado`, então
recarregar a tela de resultado não duplica a prova. Se falhar, a marca **não** é
feita e a tentativa se repete na próxima carga — o aluno continua vendo a própria
nota de qualquer forma.

### O que as regras não garantem

A nota é calculada no navegador. Validar isso exigiria Cloud Functions, que
**saíram do plano gratuito em 3 de fevereiro de 2026**. Enquanto o histórico era
pessoal, forjar um resultado só distorcia o próprio painel. Com administrador
acompanhando alunos, isso deixou de ser inofensivo — está na lista de
endurecimento abaixo.

## Interface

Todas as telas seguem a mesma paleta, tipografia e componentes do painel.

### No celular

A barra do simulado fica **no rodapé**, ao alcance do polegar: hambúrguer, a
ampulheta, "Tempo restante" e o cronômetro. Tudo o mais — identidade, Home,
curso, abortar, reportar problema, privacidade e sair — vive no menu lateral que
o hambúrguer abre.

A home e as páginas de curso seguem o mesmo desenho: hambúrguer à esquerda, a
marca ao centro, e uma lupa que filtra os cartões enquanto se digita, ignorando
acentos.

Na coluna única, a ordem é progresso, pergunta, grade de números e por fim os
outros simulados do curso: o que decide a prova fica no alto, o que serve para
navegar vem depois.

Os ícones são SVG, nunca caractere de símbolo — as fontes do iOS não cobrem boa
parte das faixas Unicode de setas, e o Safari cai no glifo substituto.

## Estrutura

```
index.html                  home (gerada)
login.html                  entrada com Google
liberar.html                voucher e pedido de acesso
dashboard.html              desempenho do aluno, e de outro aluno para o admin
admin.html                  painel do administrador
privacidade.html            política e exclusão de conta
cursos.json                 fonte única de cursos e simulados
firestore.rules             as regras — publique no Console

CURSO/
  curso.html                gerada a partir do manifesto
  NN-SIMULADO/
    index.html              gerada a partir do manifesto
    js/questoes.js          o único conteúdo próprio de cada simulado
    img/

shared/simulado-engine/common/
  css/styles.css            o simulado inteiro
  css/menu-lateral.css      barra inferior e gaveta (simulado, home e cursos)
  js/                       ver tabela abaixo

scripts/                    geração, sincronização e validação
```

### Módulos compartilhados

| Arquivo | Papel |
|---|---|
| `app.js` | único ponto de entrada dos 46 simulados; portão, motor e gravação |
| `auth.js` | login, logout, exclusão de conta, `exigirSessao()` |
| `acesso.js` | papéis, liberação, vouchers, solicitações, `exigirAcesso()` |
| `store.js` | leitura e escrita do histórico no Firestore |
| `quiz.js` | motor da prova, pontuação e tela de resultado |
| `render.js` | desenho das questões por tipo |
| `timer.js` | cronômetro, nos dois sentidos |
| `escolha-modo.js` | a pergunta que abre o simulado |
| `report.js` | envio do "Reportar Problema", sem PHP |
| `session-ui.js` | bloco do aluno na barra do simulado |
| `header-sessao.js` | bloco do aluno nas páginas públicas |
| `menu-lateral.js` | motor da gaveta do celular |
| `menu-publico.js` | barra inferior e busca da home e dos cursos |
| `menu-mobile.js` · `menu-home.js` · `menu-curso.js` | as listas de cada página |

O portão vive no `app.js`, que já era o único ponto de entrada JavaScript dos
simulados — por isso login e liberação valem para todos eles sem que os 46 HTML
precisem declarar nada além de `data-requer-sessao` no `body`.

## Manutenção

`cursos.json` é a fonte única. A home, as páginas de curso e os 46 `index.html`
de simulado são **gerados** — não edite à mão.

```bash
node scripts/gerar-manifesto.mjs --write        # manifesto <- disco
node scripts/gerar-paginas-curso.mjs --write    # páginas <- manifesto
node scripts/sync-simulado-engine.mjs --write   # cópias <- motor compartilhado
node scripts/migrate-shared-runtime-assets.mjs --write
node scripts/validate-simulados.mjs
```

Sem `--write` cada script apenas compara e falha se algo estiver fora de
sincronia. É assim que o workflow do GitHub Pages garante que ninguém edite um
arquivo gerado à mão — e foi essa checagem que pegou uma edição direta na home
que já tinha derrubado um deploy.

A validação confere arquivos obrigatórios, schema das questões por tipo, índices
de resposta, ausência de caminhos absolutos que quebram em Project Pages, e a
consistência entre manifesto, disco e home.

### Novos cursos e simulados

```bash
node scripts/scaffold-certiacademy.mjs course --course XX-000 --title "Nome" --simulados 3 --write
node scripts/scaffold-certiacademy.mjs simulado --course XX-000 --name 04-SIMULADO --write
node scripts/scaffold-ui-server.mjs              # a mesma coisa, com botões, em :4173
```

Sem `--write` o comando só mostra a prévia. Cada simulado novo nasce apenas com
`js/questoes.js` como conteúdo próprio.

### Utilitários de banco de questões

```bash
node scripts/set-questoes-simulado.mjs --file CURSO/NN-SIMULADO/js/questoes.js --value tag
node scripts/normalize-questoes-dominios.mjs --file ... --domains "A|B|C"
node scripts/quote-questoes-keys.mjs --file ...
```

## Configuração do Firebase

Uma vez por ambiente:

1. Projeto em [console.firebase.google.com](https://console.firebase.google.com)
2. App **Web** (`</>`) → copie o `firebaseConfig` para
   `shared/simulado-engine/common/js/firebase-config.js`
3. **Authentication → Sign-in method**: habilite **Google**
4. **Authentication → Settings → Authorized domains**: adicione o domínio de
   produção, `localhost` e `127.0.0.1`
5. **Firestore Database → Criar banco** em `southamerica-east1` — **não dá para
   mudar depois**
6. **Firestore → Regras**: cole [`firestore.rules`](firestore.rules) e publique

> Os valores de `firebaseConfig` **não são segredos**: identificam o projeto, não
> autorizam nada.

**As regras vivem no Console, não no repositório.** Toda vez que uma coleção nova
aparece no código, é preciso republicar o arquivo à mão — esquecer isso já
produziu duas telas de erro em produção, e é por isso que as páginas hoje dizem
exatamente essa causa quando o Firestore recusa uma leitura.

### Domínio próprio

O DNS aponta para os IPs do GitHub Pages e o domínio está na configuração do
Pages. Como o deploy é por GitHub Actions, **não existe arquivo `CNAME` no
repositório** — e não deve existir, para não haver duas fontes da mesma
informação.

## Reportar Problema

O botão dependia de `enviar_problema.php` e da função `mail()`, o que nunca
funcionou no GitHub Pages — a publicação é estática e não executa PHP. O envio
agora sai do navegador para o [FormSubmit](https://formsubmit.co), sem backend e
sem chave secreta no código. Com sessão garantida, o reporte leva nome e e-mail
do aluno e define `_replyto`.

O destino fica em uma constante em `report.js`. Depois de ativado, o FormSubmit
oferece um alias com hash que evita expor o e-mail no código publicado.

## Privacidade

`privacidade.html` apaga a subárvore `users/{uid}` **antes** de remover a conta
do Authentication: na ordem inversa, o aluno perderia a permissão de apagar os
próprios documentos e eles ficariam órfãos.

A administração tem acesso de **leitura** ao histórico de estudos dos alunos, e a
política diz isso — não consegue alterar nem apagar resultado de ninguém.

## O que ainda não está feito

- **App Check** não configurado. As credenciais do cliente são públicas por
  design, então hoje um script fora do site pode conversar com o Firestore. As
  regras continuam valendo, mas isso permite força bruta em voucher e consumo de
  cota. É gratuito.
- **Nota calculada no navegador** — ver acima.
- **Cobrança por PIX**. Confirmação automática exige receber um webhook, e um
  site estático não tem onde. Enquanto isso, a liberação manual pelo painel
  cobre o caso.
- `imagens/ampulheta.gif` tem 640×640 e 753 KB para ser desenhado em 24 px.
- A pasta `css/` da raiz não é referenciada por nenhuma página.

## Licença

MIT. Veja [LICENSE](LICENSE).

## Créditos

Desenvolvido por Raphael Barreto —
[LinkedIn](https://www.linkedin.com/in/raphaelbarretopro/).

---

*Este projeto não é afiliado à Microsoft. As marcas e nomes de exames são
propriedade de seus respectivos detentores.*
