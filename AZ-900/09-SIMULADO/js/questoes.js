// ==========================================
// Arquivo: questoes_bloco09.js
// Descrição: Simulado AZ-900 (fonte: CertyIQ, versão 2026) — tradução PT-BR
// BLOCO 9 de 10 — Descrever recursos e ferramentas para gerenciar e implantar
// recursos do Azure (portal do Azure; Azure Cloud Shell, CLI e PowerShell;
// Azure Arc; Infraestrutura como Código (IaC); Azure Resource Manager e
// modelos ARM)
// 47 questões — distribuição balanceada conforme guia oficial de estudos AZ-900
//
// CORRESPONDÊNCIA COM O BANCO ORIGINAL (numeração do PDF em inglês, em ordem):
// 16, 17, 18, 24, 28, 70, 161, 164, 165, 167, 172, 173, 176, 181, 184, 185, 186, 187,
// 191, 194, 195, 196, 201, 204, 205, 206, 207, 208, 211, 215, 219, 315, 317, 343, 369,
// 375, 398, 404, 415, 420, 425, 430, 435, 436, 442, 443, 459
//
// ATENÇÃO — CONTRADIÇÃO INTERNA NO BANCO ORIGINAL:
// A Q52 (Q167 original) afirma que um computador macOS com PowerShell Core 6.0
// instalado NÃO é suficiente para rodar um script PowerShell que cria recursos do
// Azure (faltaria o módulo Azure PowerShell). Já a Q46 (Q443 original), no mesmo
// banco, lista "um computador macOS com PowerShell Core 6.0 instalado" como uma das
// respostas CORRETAS para a mesma pergunta. Mantive cada questão fiel à sua fonte,
// mas sinalizo a inconsistência para revisão em aula.
// ==========================================

export const questoes = [

  // Questao 01 (banco original Q16) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nA infraestrutura da sua empresa inclui diversas unidades de negócio que necessitam de uma grande quantidade de recursos variados do Azure para a operação diária.\nOs recursos exigidos por cada unidade de negócio são idênticos.\nVocê precisa aprovar uma estratégia para criar recursos do Azure automaticamente.\nSolução: Você recomenda incluir o serviço Azure API Management na estratégia.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "O Azure API Management (APIM) é uma forma de criar e gerenciar APIs voltadas ao cliente para serviços de back-end já existentes — não sendo uma ferramenta para criar recursos do Azure automaticamente (sob demanda). A ferramenta correta para automatizar a criação de recursos é o Azure Resource Manager (ARM), por meio de modelos ARM.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/templates/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 02 (banco original Q17) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nA infraestrutura da sua empresa inclui diversas unidades de negócio que necessitam de uma grande quantidade de recursos variados do Azure para a operação diária.\nOs recursos exigidos por cada unidade de negócio são idênticos.\nVocê precisa aprovar uma estratégia para criar recursos do Azure automaticamente.\nSolução: Você recomenda incluir grupos de gerenciamento na estratégia.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Grupos de gerenciamento organizam assinaturas e aplicam governança em escala — eles não automatizam a criação de recursos. A ferramenta correta é o modelo do Azure Resource Manager (ARM). Para enfrentar esses desafios, você pode automatizar implantações e usar a prática de infraestrutura como código: no código, você define a infraestrutura que precisa ser implantada, e esse código de infraestrutura passa a fazer parte do seu projeto, podendo ser armazenado e versionado em um repositório de código-fonte, permitindo que qualquer pessoa da equipe execute o código e implante ambientes semelhantes.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/templates/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 03 (banco original Q18) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nA infraestrutura da sua empresa inclui diversas unidades de negócio que necessitam de uma grande quantidade de recursos variados do Azure para a operação diária.\nOs recursos exigidos por cada unidade de negócio são idênticos.\nVocê precisa aprovar uma estratégia para criar recursos do Azure automaticamente.\nSolução: Você recomenda incluir modelos do Azure Resource Manager na estratégia.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "Para enfrentar esses desafios, você pode automatizar implantações e usar a prática de infraestrutura como código: no código, você define a infraestrutura que precisa ser implantada. Esse código de infraestrutura passa a fazer parte do seu projeto — assim como o código do aplicativo, você armazena o código de infraestrutura em um repositório de código-fonte e o versiona, permitindo que qualquer pessoa da equipe execute o código e implante ambientes semelhantes. Portanto, recomendar modelos do Azure Resource Manager atende ao objetivo.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/templates/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 04 (banco original Q24) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nOs desenvolvedores da sua empresa pretendem implantar um grande número de máquinas virtuais personalizadas semanalmente. Eles também removerão essas máquinas virtuais na mesma semana em que foram implantadas. Sessenta por cento das VMs têm o Windows Server 2016 instalado, enquanto os outros quarenta por cento têm o Ubuntu Linux instalado.\nVocê precisa garantir que o esforço administrativo necessário para esse processo seja reduzido, empregando um serviço adequado do Azure.\nSolução: Você recomenda o uso do Azure DevTest Labs.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "Use o DevTest Labs gratuitamente: provisione rapidamente ambientes de desenvolvimento e teste; minimize o desperdício com cotas e políticas; configure desligamentos automatizados para minimizar custos; construa ambientes Windows e Linux. O DevTest Labs atende diretamente ao objetivo de reduzir o esforço administrativo na implantação e remoção frequente de VMs de teste personalizadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/devtest-labs/devtest-lab-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 05 (banco original Q28)
  {
    "tipo": "dragdrop",
    "texto": "A empresa gostaria de desenvolver uma solução em nuvem utilizando o Azure Governamental. O Azure Governamental só pode ser usado por determinados tipos de clientes para desenvolver soluções em nuvem.\nQuais das opções a seguir são os tipos de clientes que podem usar o Azure Governamental nessa situação? Responda arrastando a opção correta da lista para a área de resposta.",
    "itens": [
      { "label": "Uma contratada governamental de qualquer país." },
      { "label": "Uma entidade governamental de qualquer país." },
      { "label": "Uma contratada do governo europeu." },
      { "label": "Uma entidade do governo europeu." },
      { "label": "Uma contratada do governo dos Estados Unidos." },
      { "label": "Uma entidade do governo dos Estados Unidos." }
    ],
    "grupos": ["1", "2"],
    "respostas": {
      "1": ["Uma contratada do governo dos Estados Unidos."],
      "2": ["Uma entidade do governo dos Estados Unidos."]
    },
    "explicacao": "O Azure Governamental é a nuvem de missão crítica, entregando inovação de ponta para clientes governamentais dos EUA e seus parceiros. Apenas governos federais, estaduais, locais e tribais dos Estados Unidos, e seus parceiros, têm acesso a essa instância dedicada.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/intro-to-azure-government/2-what-is-azure-government",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 06 (banco original Q70)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode criar um grupo de recursos dentro de outro grupo de recursos.",
      "Uma máquina virtual do Azure pode estar em vários grupos de recursos.",
      "Um grupo de recursos pode conter recursos de várias regiões do Azure."
    ],
    "respostas": [false, false, true],
    "explicacao": "Não é possível criar um grupo de recursos aninhado dentro de outro grupo de recursos no Azure — grupos de recursos não têm hierarquia entre si. Cada recurso pode existir em apenas um grupo de recursos por vez. Recursos de diferentes regiões podem, sim, ser colocados em um mesmo grupo de recursos — o grupo de recursos contém apenas metadados sobre os recursos que ele engloba.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/resource-group-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 07 (banco original Q161)
  {
    "tipo": "comboboxs",
    "texto": "Você tem um ambiente do Azure que contém 10 aplicativos Web. A qual URL você deve se conectar para gerenciar todos os recursos do Azure? Para responder, selecione as opções apropriadas na área de resposta. O formato da URL é: https://<combobox 1><combobox 2>com",
    "pares": [
      {
        "requisito": "Primeira parte da URL:",
        "opcoes": ["admin.", "portal.", "www."],
        "resposta": 1
      },
      {
        "requisito": "Segunda parte da URL:",
        "opcoes": ["azure.", "azurewebsites.", "microsoft."],
        "resposta": 0
      }
    ],
    "explicacao": "O portal do Azure é uma interface de gerenciamento baseada na Web, onde você pode visualizar e gerenciar todos os seus recursos do Azure em um único hub unificado, incluindo aplicativos Web, bancos de dados, máquinas virtuais, redes virtuais e armazenamento. O endereço correto é https://portal.azure.com.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-portal/azure-portal-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 08 (banco original Q164)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nUm administrador do Azure planeja executar um script do PowerShell que cria recursos do Azure.\nVocê precisa recomendar qual configuração de computador deve ser usada para executar o script.\nSolução: Execute o script a partir de um computador que executa o Linux e tem as ferramentas da Azure CLI instaladas.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Um script do PowerShell é um arquivo que contém cmdlets e código do PowerShell. Um script do PowerShell precisa ser executado no PowerShell. O PowerShell agora pode ser instalado no Linux. No entanto, a questão afirma que o computador tem as ferramentas do Azure CLI instaladas, não o PowerShell. Portanto, esta solução não atende ao objetivo.",
    "link": "https://learn.microsoft.com/pt-br/powershell/scripting/components/ise/how-to-write-and-run-scripts-in-the-windows-powershell-ise?view=powershell-6",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 09 (banco original Q165)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nUm administrador do Azure planeja executar um script do PowerShell que cria recursos do Azure.\nVocê precisa recomendar qual configuração de computador deve ser usada para executar o script.\nSolução: Execute o script a partir de um computador que executa o Chrome OS e usa o Azure Cloud Shell.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "Um script do PowerShell precisa ser executado no PowerShell. Com o Azure Cloud Shell, você pode executar cmdlets e scripts do PowerShell em um navegador Web. Você entra no portal do Azure e seleciona a opção Azure Cloud Shell. Isso abrirá uma sessão do PowerShell no navegador Web. O Azure Cloud Shell tem o módulo necessário do Azure PowerShell instalado. Nota: para executar um script do PowerShell no Azure Cloud Shell, você precisa mudar para o diretório onde o script do PowerShell está armazenado.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-shell/quickstart-powershell",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 10 (banco original Q167)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nUm administrador do Azure planeja executar um script do PowerShell que cria recursos do Azure.\nVocê precisa recomendar qual configuração de computador deve ser usada para executar o script.\nSolução: Execute o script a partir de um computador que executa o macOS e tem o PowerShell Core 6.0 instalado.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "O computador tem o PowerShell Core 6.0, mas não tem a Azure CLI instalada, e a questão não menciona isso. Você precisa do módulo Azure PowerShell além do PowerShell para executar comandos do Azure, como o New-AzVM. Portanto, a resposta é Não. O PowerShell Core 6.0 não traz o módulo Azure PowerShell por padrão — é necessário instalar o módulo Azure PowerShell separadamente após instalar o PowerShell Core 6.0 no Mac. Nota: esta questão aparenta contradizer outra do mesmo banco (Q443 original, presente mais adiante neste bloco), que lista \"macOS com PowerShell Core 6.0 instalado\" como uma resposta correta para a mesma pergunta, sem exigir explicitamente o módulo Azure PowerShell no enunciado da opção.",
    "link": "https://learn.microsoft.com/pt-br/powershell/azure/install-az-ps",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 11 (banco original Q172)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nVocê tem um ambiente do Azure. Você precisa criar uma nova máquina virtual do Azure em um tablet que executa o sistema operacional Android.\nSolução: Você usa o Bash no Azure Cloud Shell.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "Com o Azure Cloud Shell, você pode criar máquinas virtuais usando Bash ou PowerShell. O Azure Cloud Shell é um shell interativo, autenticado e acessível pelo navegador, para gerenciar recursos do Azure. Ele oferece a flexibilidade de escolher a experiência de shell que melhor se adapta à sua forma de trabalhar, seja Bash ou PowerShell.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-shell/quickstart",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 12 (banco original Q173)
  {
    "tipo": "unica",
    "texto": "Você tem um aplicativo local que envia notificações por e-mail automaticamente com base em uma regra.\nVocê planeja migrar o aplicativo para o Azure.\nVocê precisa recomendar uma solução de computação sem servidor (serverless) para o aplicativo.\nO que você deve incluir na recomendação?",
    "opcoes": ["um aplicativo Web", "uma imagem de servidor no Azure Marketplace", "um Logic App", "um aplicativo de API"],
    "resposta": 2,
    "explicacao": "O Azure Logic Apps é um serviço de nuvem que ajuda você a agendar, automatizar e orquestrar tarefas, processos de negócio e fluxos de trabalho quando você precisa integrar aplicativos, dados, sistemas e serviços entre empresas ou organizações. O Logic Apps simplifica a forma como você projeta e constrói soluções escaláveis para integração de aplicativos, integração de dados, integração de sistemas, integração de aplicativos empresariais (EAI) e comunicação business-to-business (B2B), seja na nuvem, localmente, ou ambos. Por exemplo, algumas cargas de trabalho que você pode automatizar com logic apps: processar e rotear pedidos entre sistemas locais e serviços em nuvem; enviar notificações por e-mail com o Office 365 quando eventos ocorrem em vários sistemas, aplicativos e serviços; mover arquivos enviados de um servidor SFTP ou FTP para o Armazenamento do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/logic-apps/logic-apps-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 13 (banco original Q176)
  {
    "tipo": "multipla",
    "texto": "Você tem um aplicativo Web do Azure.\nVocê precisa gerenciar as configurações do aplicativo Web a partir de um iPhone.\nQuais são duas ferramentas de gerenciamento do Azure que você pode usar? Cada resposta correta apresenta uma solução completa.\nNOTA: Cada seleção correta vale um ponto.",
    "opcoes": ["Azure CLI", "o portal do Azure", "Azure Cloud Shell", "Windows PowerShell", "Azure Storage Explorer"],
    "respostas": [1, 2],
    "explicacao": "O portal do Azure é o portal baseado na Web para gerenciar o Azure. Sendo baseado na Web, você pode usar o portal do Azure em um iPhone. O Azure Cloud Shell é uma linha de comando baseada na Web para gerenciar o Azure. Você acessa o Azure Cloud Shell a partir do portal do Azure. Sendo baseado na Web, você pode usar o Azure Cloud Shell em um iPhone. A Azure CLI pode ser instalada no macOS, mas não pode ser instalada em um iPhone. O Windows PowerShell pode ser instalado no macOS, mas não pode ser instalado em um iPhone. O Azure Storage Explorer não é usado para gerenciar aplicativos Web do Azure.",
    "link": "http://www.deployazure.com/management/managing-azure-from-ipad/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 14 (banco original Q181)
  {
    "tipo": "multipla",
    "texto": "Você tem um ambiente do Azure.\nVocê precisa criar uma nova máquina virtual do Azure em um tablet que executa o sistema operacional Android.\nQuais são três possíveis soluções? Cada resposta correta apresenta uma solução completa.\nNOTA: Cada seleção correta vale um ponto.",
    "opcoes": [
      "Usar o Bash no Azure Cloud Shell.",
      "Usar o PowerShell no Azure Cloud Shell.",
      "Usar o portal do PowerApps.",
      "Usar o centro de administração de Segurança e Conformidade.",
      "Usar o portal do Azure."
    ],
    "respostas": [0, 1, 4],
    "explicacao": "O dispositivo tablet Android terá um navegador Web (Chrome). Isso é suficiente para se conectar ao portal do Azure. O portal do Azure oferece três formas de criar uma VM: usando o portal gráfico; usando o Azure Cloud Shell com Bash; usando o Azure Cloud Shell com PowerShell.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/linux/quick-create-portal",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 15 (banco original Q184)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure chamada Subscription1. Você entra no portal do Azure e cria um grupo de recursos chamado RG1.\nDa documentação do Azure, você tem o seguinte comando que cria uma máquina virtual chamada VM1. az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys\nVocê precisa criar a VM1 na Subscription1 usando o comando.\nSolução: No portal do Azure, inicie o Azure Cloud Shell e selecione PowerShell. Execute o comando no Cloud Shell.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "O comando pode ser executado no Azure Cloud Shell. Embora esta questão diga que você seleciona PowerShell em vez de Bash, os comandos az funcionam também no PowerShell. O Azure Cloud Shell é um shell interativo gratuito. Ele tem ferramentas comuns do Azure pré-instaladas e configuradas para uso com sua conta.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/linux/quick-create-cli",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 16 (banco original Q185)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure chamada Subscription1. Você entra no portal do Azure e cria um grupo de recursos chamado RG1.\nDa documentação do Azure, você tem o seguinte comando que cria uma máquina virtual chamada VM1. az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys\nVocê precisa criar a VM1 na Subscription1 usando o comando.\nSolução: A partir de um computador que executa o Windows 10, instale a Azure CLI. No PowerShell, entre no Azure e execute o comando.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "O comando pode ser executado no PowerShell ou no prompt de comando, caso você tenha a Azure CLI instalada.",
    "link": "https://learn.microsoft.com/pt-br/cli/azure/install-azure-cli-windows",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 17 (banco original Q186)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure chamada Subscription1. Você entra no portal do Azure e cria um grupo de recursos chamado RG1.\nDa documentação do Azure, você tem o seguinte comando que cria uma máquina virtual chamada VM1. az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys\nVocê precisa criar a VM1 na Subscription1 usando o comando.\nSolução: A partir de um computador que executa o Windows 10, instale a Azure CLI. Em um prompt de comando, entre no Azure e execute o comando.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "O comando pode ser executado no PowerShell ou no prompt de comando, caso você tenha a Azure CLI instalada.",
    "link": "https://learn.microsoft.com/pt-br/cli/azure/install-azure-cli-windows",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 18 (banco original Q187)
  {
    "tipo": "comboboxs",
    "texto": "Vários engenheiros de suporte planejam gerenciar o Azure usando os computadores mostrados na tabela a seguir:\n• Computador1 — Windows 10\n• Computador2 — Ubuntu\n• Computador3 — MacOS Mojave\nVocê precisa identificar quais ferramentas de gerenciamento do Azure podem ser usadas a partir de cada computador. O que você deve identificar para cada computador? Para responder, selecione as opções apropriadas na área de resposta.",
    "pares": [
      {
        "requisito": "Computador1 (Windows 10):",
        "opcoes": [
          "A Azure CLI e o portal do Azure",
          "O portal do Azure e o Azure PowerShell",
          "A Azure CLI e o Azure PowerShell",
          "A Azure CLI, o portal do Azure e o Azure PowerShell"
        ],
        "resposta": 3
      },
      {
        "requisito": "Computador2 (Ubuntu):",
        "opcoes": [
          "A Azure CLI e o portal do Azure",
          "O portal do Azure e o Azure PowerShell",
          "A Azure CLI e o Azure PowerShell",
          "A Azure CLI, o portal do Azure e o Azure PowerShell"
        ],
        "resposta": 3
      },
      {
        "requisito": "Computador3 (MacOS Mojave):",
        "opcoes": [
          "A Azure CLI e o portal do Azure",
          "O portal do Azure e o Azure PowerShell",
          "A Azure CLI e o Azure PowerShell",
          "A Azure CLI, o portal do Azure e o Azure PowerShell"
        ],
        "resposta": 3
      }
    ],
    "explicacao": "Anteriormente, a Azure CLI (ou x-plat CLI) era a única opção para gerenciar assinaturas e recursos do Azure a partir da linha de comando no Linux e no macOS. Agora, com o lançamento de código aberto e multiplataforma do Azure PowerShell, e como o portal do Azure é acessível por qualquer navegador Web moderno em qualquer sistema operacional, todos os três computadores (Windows, Ubuntu e macOS) podem usar as três ferramentas de gerenciamento: Azure CLI, portal do Azure e Azure PowerShell.",
    "link": "https://learn.microsoft.com/pt-br/powershell/azure/what-is-azure-powershell",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 19 (banco original Q191)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nUm administrador do Azure planeja executar um script do PowerShell que cria recursos do Azure.\nVocê precisa recomendar qual configuração de computador deve ser usada para executar o script.\nSolução: Execute o script a partir de um computador que executa o Windows 10 e tem o módulo Azure PowerShell instalado.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "Um script do PowerShell precisa ser executado no PowerShell. Nesta questão, o computador tem o módulo Azure PowerShell instalado. Portanto, esta solução atende ao objetivo.",
    "link": "https://learn.microsoft.com/pt-br/powershell/scripting/components/ise/how-to-write-and-run-scripts-in-the-windows-powershell-ise?view=powershell-6",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 20 (banco original Q194)
  {
    "tipo": "multipla",
    "texto": "Um administrador do Azure planeja executar um script do PowerShell que cria recursos do Azure.\nVocê precisa recomendar qual configuração de computador deve ser usada para executar o script.\nQuais três computadores podem executar o script? Cada resposta correta apresenta uma solução completa.\nNOTA: Cada seleção correta vale um ponto.",
    "opcoes": [
      "um computador que executa o macOS e tem o PowerShell Core 6.0 instalado.",
      "um computador que executa o Windows 10 e tem o módulo Azure PowerShell instalado.",
      "um computador que executa o Linux e tem o módulo Azure PowerShell instalado.",
      "um computador que executa o Linux e tem as ferramentas da Azure CLI instaladas.",
      "um computador que executa o Chrome OS e usa o Azure Cloud Shell."
    ],
    "respostas": [1, 2, 4],
    "explicacao": "A) errado: é necessário o módulo Azure PowerShell — apenas o PowerShell não é suficiente. B) correto: você tem o PowerShell e o módulo para criar recursos do Azure. C) correto: você tem o PowerShell e o módulo para criar recursos do Azure. D) errado: com a Azure CLI, você não executa scripts do PowerShell. E) correto: de um navegador, você pode se conectar ao portal do Azure e executar cmdlets do Azure PowerShell.",
    "link": "https://learn.microsoft.com/pt-br/powershell/azure/what-is-azure-powershell",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 21 (banco original Q195)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nVocê tem uma assinatura do Azure chamada Subscription1. Você entra no portal do Azure e cria um grupo de recursos chamado RG1.\nDa documentação do Azure, você tem o seguinte comando que cria uma máquina virtual chamada VM1. az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys\nVocê precisa criar a VM1 na Subscription1 usando o comando.\nSolução: No portal do Azure, inicie o Azure Cloud Shell e selecione Bash. Execute o comando no Cloud Shell.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "O comando pode ser executado no Azure Cloud Shell. O Azure Cloud Shell é um shell interativo gratuito, com ferramentas comuns do Azure pré-instaladas e configuradas para uso com sua conta. Embora o comando de assinatura não seja mencionado, para criar uma máquina virtual, seja via PowerShell ou Bash, não há exigência de incluir detalhes de assinatura — o nome da VM e do grupo de recursos são suficientes para criar a VM.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/linux/quick-create-cli",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 22 (banco original Q196)
  {
    "tipo": "unica",
    "texto": "Sua empresa tem várias unidades de negócio.\nCada unidade de negócio requer 20 recursos diferentes do Azure para operação diária. Todas as unidades de negócio requerem o mesmo tipo de recursos do Azure.\nVocê precisa recomendar uma solução para automatizar a criação dos recursos do Azure.\nO que você deve incluir na recomendação?",
    "opcoes": ["Modelos do Azure Resource Manager", "conjuntos de dimensionamento de máquinas virtuais", "o serviço Azure API Management", "grupos de gerenciamento"],
    "resposta": 0,
    "explicacao": "Você pode usar modelos do Azure Resource Manager para automatizar a criação dos recursos do Azure. Implantar recursos por meio de modelos é conhecido como 'infraestrutura como código'. Para implementar infraestrutura como código para suas soluções do Azure, use modelos do Azure Resource Manager. O modelo é um arquivo JSON (JavaScript Object Notation) que define a infraestrutura e a configuração do seu projeto.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/templates/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 23 (banco original Q201)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você precisa ter conectividade com a internet para gerenciar serviços de nuvem.",
      "Você precisa instalar um aplicativo de gerenciamento para gerenciar serviços de nuvem.",
      "Você pode gerenciar serviços de nuvem a partir de qualquer navegador Web moderno."
    ],
    "respostas": [true, false, true],
    "explicacao": "É necessário ter conectividade com a internet para gerenciar serviços de nuvem — o portal do Azure e outras ferramentas de gerenciamento são baseados em nuvem e exigem acesso à internet. Não é necessário instalar um aplicativo de gerenciamento específico — o portal do Azure e o Azure Cloud Shell são acessíveis diretamente pelo navegador. Você pode, sim, gerenciar serviços de nuvem a partir de qualquer navegador Web moderno, já que o portal do Azure é baseado na Web.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-portal/azure-portal-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 24 (banco original Q204)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Módulos do Azure PowerShell podem ser instalados no macOS.",
      "O Azure Cloud Shell pode ser acessado a partir de um navegador Web em um computador Linux.",
      "O portal do Azure só pode ser acessado a partir de um dispositivo Windows."
    ],
    "respostas": [true, true, false],
    "explicacao": "Você pode instalar o módulo Az PowerShell localmente no Windows, macOS e Linux. Ele também pode ser usado a partir de um navegador via Azure Cloud Shell, ou dentro de um contêiner Docker. O portal do Azure, sendo baseado na Web, pode ser acessado a partir de qualquer dispositivo com um navegador moderno — não apenas dispositivos Windows.",
    "link": "https://learn.microsoft.com/pt-br/powershell/azure/what-is-azure-powershell",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 25 (banco original Q205)
  {
    "tipo": "multipla",
    "texto": "Um engenheiro de suporte planeja executar diversas tarefas de gerenciamento do Azure usando a Azure CLI.\nVocê instala a CLI em um computador.\nVocê precisa informar ao engenheiro de suporte quais ferramentas usar para executar a CLI.\nQuais duas ferramentas você deve instruir o engenheiro de suporte a usar? Cada resposta correta apresenta uma solução completa.\nNOTA: Cada seleção correta vale um ponto.",
    "opcoes": ["Prompt de Comando", "Azure Resource Explorer", "Windows PowerShell", "Firewall do Windows Defender", "Central de Rede e Compartilhamento"],
    "respostas": [0, 2],
    "explicacao": "No Windows, a Azure CLI é instalada por meio de um MSI, que fornece acesso à CLI tanto pelo Prompt de Comando do Windows (CMD) quanto pelo PowerShell.",
    "link": "https://learn.microsoft.com/pt-br/cli/azure/install-azure-cli-windows",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 26 (banco original Q206)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nVocê tem um ambiente do Azure. Você precisa criar uma nova máquina virtual do Azure em um tablet que executa o sistema operacional Android.\nSolução: Você usa o PowerShell no Azure Cloud Shell.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "O Azure Cloud Shell é uma experiência de shell baseada em navegador para gerenciar e desenvolver recursos do Azure. O Cloud Shell oferece uma experiência de shell pré-configurada e acessível pelo navegador, para gerenciar recursos do Azure sem a sobrecarga de instalar, versionar e manter uma máquina você mesmo. Sendo baseado em navegador, o Azure Cloud Shell pode ser executado em um navegador de um tablet que executa o sistema operacional Android.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-shell/features",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 27 (banco original Q207)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nVocê tem um ambiente do Azure. Você precisa criar uma nova máquina virtual do Azure em um tablet que executa o sistema operacional Android.\nSolução: Você usa o portal do PowerApps.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "O PowerApps permite construir rapidamente aplicativos de negócios com pouco ou nenhum código. Não é usado para criar máquinas virtuais do Azure. Portanto, esta solução não atende ao objetivo. Os Portais do PowerApps permitem que organizações criem sites que podem ser compartilhados com usuários externos à sua organização, seja anonimamente ou por meio do provedor de login de sua escolha, como LinkedIn, conta Microsoft, entre outros provedores de login comerciais.",
    "link": "https://powerapps.microsoft.com/pt-br/blog/introducing-powerapps-portals-powerful-low-code-websites-for-external-users/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 28 (banco original Q208)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nVocê tem um ambiente do Azure. Você precisa criar uma nova máquina virtual do Azure em um tablet que executa o sistema operacional Android.\nSolução: Você usa o portal do Azure.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "O portal do Azure é um console unificado baseado na Web, que oferece uma alternativa às ferramentas de linha de comando. Com o portal do Azure, você pode gerenciar sua assinatura do Azure usando uma interface gráfica. Sendo baseado na Web, o portal do Azure pode ser executado em um navegador de um tablet que executa o sistema operacional Android.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-portal/azure-portal-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 29 (banco original Q211)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você só pode gerenciar serviços de nuvem a partir de dispositivos Windows.",
      "Você pode gerenciar serviços de nuvem a partir da linha de comando.",
      "Você pode gerenciar serviços de nuvem usando um navegador Web."
    ],
    "respostas": [false, true, true],
    "explicacao": "Não é verdade que você só pode gerenciar serviços de nuvem a partir de dispositivos Windows — ferramentas como o portal do Azure, a Azure CLI e o Azure PowerShell funcionam em múltiplas plataformas (Windows, macOS, Linux). Serviços de nuvem do Azure podem, sim, ser gerenciados na Automação do Azure usando os cmdlets do PowerShell disponíveis nas ferramentas Azure PowerShell. Você pode, sim, gerenciar serviços de nuvem usando um navegador Web — o Microsoft Azure é um exemplo de nuvem pública, onde todo o hardware, software e demais infraestrutura de suporte são de propriedade e gerenciados pelo provedor de nuvem; você acessa esses serviços e gerencia sua conta usando um navegador Web.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-portal/azure-portal-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 30 (banco original Q215)
  {
    "tipo": "unica",
    "texto": "Você precisa gerenciar o Azure usando o Azure Cloud Shell.\nQual ícone do portal do Azure você deve selecionar? Para responder, selecione o ícone apropriado na área de resposta.",
    "opcoes": [
      "o ícone \">_\" (Cloud Shell) na barra superior do portal",
      "o ícone de sino (notificações)",
      "o ícone de engrenagem (configurações)",
      "o ícone de interrogação (ajuda)"
    ],
    "resposta": 0,
    "explicacao": "Você pode acessar o Azure Cloud Shell no portal do Azure clicando no ícone que se parece com o símbolo \">_\". O Azure Cloud Shell é um shell interativo, autenticado e acessível pelo navegador, para gerenciar recursos do Azure. Ele oferece a flexibilidade de escolher a experiência de shell que melhor se adapta à sua forma de trabalhar, seja Bash ou PowerShell.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-shell/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 31 (banco original Q219)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: A partir do(a) <combobox>, você pode visualizar qual usuário desligou uma máquina virtual específica nos últimos 14 dias.",
    "opcoes": [
      "Escolha uma opção",
      "Controle de Acesso do Azure (IAM)",
      "Azure Event Hubs",
      "Log de Atividades do Azure (Activity Log)",
      "Integridade do Serviço do Azure (Service Health)"
    ],
    "resposta": 3,
    "explicacao": "Você usaria o Log de Atividades do Azure, não o Controle de Acesso, para visualizar qual usuário desligou uma máquina virtual específica nos últimos 14 dias. Os logs de atividade são mantidos por 90 dias. Você pode consultar qualquer intervalo de datas, desde que a data inicial não seja anterior a 90 dias. Nesta questão, criaríamos um filtro para exibir as operações de desligamento na máquina virtual nos últimos 14 dias.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/resource-group-audit",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 32 (banco original Q315)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A maioria dos serviços do Azure é introduzida em pré-visualização privada antes de ser introduzida em pré-visualização pública, e depois em disponibilidade geral.",
      "Serviços do Azure em pré-visualização pública podem ser gerenciados apenas usando a Azure CLI.",
      "O custo de um serviço do Azure em pré-visualização privada diminui quando o serviço se torna geralmente disponível."
    ],
    "respostas": [true, false, false],
    "explicacao": "A maioria dos serviços passa por pré-visualização privada e depois pré-visualização pública antes de ser lançada em disponibilidade geral. A pré-visualização privada está disponível apenas para determinados clientes do Azure, para fins de avaliação. A pré-visualização pública está disponível a todos os clientes do Azure. Serviços do Azure em pré-visualização pública podem ser gerenciados usando as ferramentas de gerenciamento regulares: portal do Azure, Azure CLI e PowerShell — não apenas a Azure CLI. Serviços em pré-visualização privada ou pública são geralmente oferecidos a custos reduzidos. No entanto, os custos aumentam, e não diminuem, quando os serviços são lançados em disponibilidade geral.",
    "link": "https://azure.microsoft.com/pt-br/support/legal/preview-supplemental-terms/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 33 (banco original Q317)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Sua conta de avaliação gratuita do Azure expirou na semana passada. Agora você está impossibilitado de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "criar contas de usuário adicionais no Microsoft Entra ID",
      "iniciar uma máquina virtual existente do Azure",
      "acessar seus dados armazenados no Azure",
      "acessar o portal do Azure"
    ],
    "resposta": 1,
    "explicacao": "Uma VM parada (desalocada) fica offline e não é montada em um servidor host do Azure. Iniciar uma VM monta a VM em um servidor host antes que a VM seja iniciada. Assim que a VM é montada, ela se torna passível de cobrança. Por esse motivo, você não consegue iniciar uma VM depois que uma avaliação expirou. Você não é cobrado por contas de usuário do Microsoft Entra ID, então pode continuar criando contas. Você pode acessar dados que já estão armazenados no Azure. E você pode acessar o Portal do Azure — inclusive é possível reativar e fazer upgrade da assinatura expirada diretamente pelo portal.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/states-billing",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 34 (banco original Q343)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Para economizar nos custos de uma máquina virtual do Azure não utilizada, que executa o Windows 10, você deve <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "desconectar a máquina virtual durante uma sessão de Área de Trabalho Remota",
      "colocar a máquina virtual em modo de suspensão a partir de uma sessão de Área de Trabalho Remota",
      "selecionar Parar (Stop) para a máquina virtual a partir do portal do Azure",
      "desligar a máquina virtual a partir de uma sessão de Área de Trabalho Remota"
    ],
    "resposta": 2,
    "explicacao": "Selecione Parar (Stop) para a máquina virtual no portal do Azure. Apenas desligar a máquina a partir do sistema operacional não é suficiente — você continuaria pagando pelos recursos de computação da VM do Azure (a alocação de hardware).",
    "link": "https://www.parkmycloud.com/does-azure-charge-for-stopped-vm/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 35 (banco original Q369)
  {
    "tipo": "unica",
    "texto": "Esta questão exige que você avalie o texto sublinhado para determinar se está correto.\nVocê pode criar uma solicitação de suporte do Azure a partir de support.microsoft.com.\nInstruções: Revise o texto sublinhado. Se ele tornar a afirmação correta, selecione \"Nenhuma alteração é necessária\". Se a afirmação estiver incorreta, selecione a opção que a torna correta.",
    "opcoes": ["Nenhuma alteração é necessária", "o portal do Azure", "o Knowledge Center", "o centro de administração de Segurança e Conformidade"],
    "resposta": 1,
    "explicacao": "Você pode criar uma solicitação de suporte do Azure a partir do painel Ajuda e Suporte no portal do Azure, ou a partir do menu de contexto de um recurso do Azure, na seção Suporte + Solução de Problemas.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-portal/supportability/how-to-create-azure-support-request",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 36 (banco original Q375)
  {
    "tipo": "unica",
    "texto": "Você precisa iniciar o Azure Cloud Shell.\nO que você deve usar?",
    "opcoes": ["o portal do Azure", "a Interface de Linha de Comando do Azure (CLI)", "o Azure PowerShell", "um modelo do Azure Resource Manager (ARM)"],
    "resposta": 0,
    "explicacao": "O Azure Cloud Shell é um shell interativo, autenticado e acessível pelo navegador, para gerenciar recursos do Azure. Ele oferece a flexibilidade de escolher a experiência de shell que melhor se adapta à sua forma de trabalhar, seja Bash ou PowerShell. Você pode acessar o Cloud Shell de três formas: link direto (abrindo um navegador em https://shell.azure.com); portal do Azure (selecionando o ícone do Cloud Shell); ou amostras de código (na documentação técnica e recursos de treinamento da Microsoft, selecionando o botão Testar que aparece com trechos de código da Azure CLI e do Azure PowerShell).",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-shell/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 37 (banco original Q398)
  {
    "tipo": "multipla",
    "texto": "Você tem um aplicativo Web do Azure.\nVocê precisa gerenciar as configurações do aplicativo Web a partir de um iPhone.\nQuais são duas ferramentas de gerenciamento do Azure que você pode usar? Cada resposta correta apresenta uma solução completa.\nNOTA: Cada seleção correta vale um ponto.",
    "opcoes": ["Windows PowerShell", "Azure Cloud Shell", "o portal do Azure", "Azure Storage Explorer"],
    "respostas": [1, 2],
    "explicacao": "Tanto o Azure Cloud Shell quanto o portal do Azure são baseados na Web e podem ser acessados por um navegador em qualquer dispositivo, incluindo um iPhone. O Windows PowerShell e o Azure Storage Explorer não podem ser instalados diretamente em um iPhone.",
    "link": "https://azure.microsoft.com/pt-br/get-started/azure-portal/mobile-app",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 38 (banco original Q404)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Modelos do Azure Resource Manager (ARM) usam o formato <combobox>.",
    "opcoes": ["Escolha uma opção", "CSV", "HTML", "JSON", "XML"],
    "resposta": 3,
    "explicacao": "Para implementar infraestrutura como código para suas soluções do Azure, use modelos do Azure Resource Manager (modelos ARM). O modelo é um arquivo JSON (JavaScript Object Notation) que define a infraestrutura e a configuração do seu projeto. O modelo usa sintaxe declarativa, que permite declarar o que você pretende implantar sem precisar escrever a sequência de comandos de programação para criá-lo. No modelo, você especifica os recursos a serem implantados e as propriedades desses recursos.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/templates/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 39 (banco original Q415)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um host de sessão da Área de Trabalho Virtual do Azure só pode executar o Windows 10 ou o Windows 11.",
      "Um pool de hosts da Área de Trabalho Virtual do Azure que inclui 20 hosts de sessão suporta um máximo de 20 conexões de usuário simultâneas.",
      "A Área de Trabalho Virtual do Azure oferece suporte à virtualização de área de trabalho e de aplicativos."
    ],
    "respostas": [false, false, true],
    "explicacao": "Embora Windows 10 e Windows 11 (incluindo suas edições Multi-sessão especializadas) sejam escolhas de implantação extremamente populares, a Área de Trabalho Virtual do Azure oferece suporte nativo a sistemas operacionais baseados em servidor como hosts de sessão. As organizações costumam implantar hosts de sessão AVD executando Windows Server 2022, Windows Server 2019 ou Windows Server 2016 para executar softwares empresariais legados ou aplicativos especializados de linha de negócio. Esta afirmação descreve um modelo estrito de atribuição de desktop pessoal 1:1, mas o AVD é amplamente utilizado justamente para seus pools de hosts, executando Windows Client Multi-sessão ou Windows Server. Com configurações multi-sessão, um único host de sessão de máquina virtual pode suportar múltiplas sessões de usuário independentes simultaneamente — se você tiver 20 hosts de sessão executando configurações multi-sessão com um limite de capacidade definido para 10 usuários por host, esse mesmo pool de hosts poderia facilmente suportar até 200 conexões de usuário simultâneas. A Área de Trabalho Virtual do Azure permite que administradores provisionem dois tipos distintos de grupos de aplicativos para atender às necessidades dos usuários: virtualização de área de trabalho completa (Desktop Virtualization) e virtualização de aplicativos individuais (App Virtualization/RemoteApp).",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-desktop/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 40 (banco original Q420)
  {
    "tipo": "unica",
    "texto": "Você tem servidores locais que executam o Windows Server.\nO que você deve implementar para gerenciar os servidores usando o portal do Azure?",
    "opcoes": ["Serviço de Kubernetes do Azure (AKS)", "Azure Arc", "Docker", "controle de acesso baseado em função (RBAC)"],
    "resposta": 1,
    "explicacao": "O Azure Arc permite estender os recursos de gerenciamento e governança do Azure para seus ambientes locais e multinuvem. Ao implementar o Azure Arc, podemos conectar suas máquinas com Windows Server ao Azure e gerenciá-las centralmente por meio do portal do Azure, junto com seus outros recursos do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-arc/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 41 (banco original Q425)
  {
    "tipo": "unica",
    "texto": "O que um aplicativo de desktop deve usar para interagir com o Azure e gerenciar recursos?",
    "opcoes": ["APIs", "modelos do Azure Resource Manager (ARM)", "Interface de Linha de Comando do Azure (CLI)", "Azure Cloud Shell"],
    "resposta": 0,
    "explicacao": "'A. APIs' está correto. A chave é que aplicativos de desktop precisam interagir com recursos do Azure de forma programática, portanto, APIs.",
    "link": "https://learn.microsoft.com/pt-br/rest/api/azure/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 42 (banco original Q430)
  {
    "tipo": "unica",
    "texto": "O que fornece uma forma unificada de projetar e gerenciar recursos não pertencentes ao Azure dentro do Azure Resource Manager (ARM)?",
    "opcoes": ["Azure Migrate", "Microsoft Entra Connect", "Azure Arc", "Azure Front Door"],
    "resposta": 2,
    "explicacao": "O Azure Arc é explicitamente projetado para estender o gerenciamento, a governança e os serviços do Azure para infraestrutura fora do Azure. Ele funciona instalando um agente em recursos não pertencentes ao Azure (como servidores físicos locais, máquinas virtuais na AWS ou GCP, ou clusters Kubernetes externos). Depois que o agente é instalado, esses recursos externos são projetados como objetos de recurso nativos dentro do Azure Resource Manager (ARM). Isso permite que você os gerencie, aplique marcas e imponha Políticas do Azure, como se estivessem sendo executados nativamente no Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-arc/servers/manage-vm-extensions-template",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 43 (banco original Q435)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Azure Arc pode gerenciar servidores físicos que executam Linux.",
      "O Azure Arc pode gerenciar clusters do Serviço de Kubernetes do Azure (AKS) em escala.",
      "O Azure Arc pode gerenciar uma solução de banco de dados de terceiros hospedada fora do Azure."
    ],
    "respostas": [true, true, false],
    "explicacao": "Servidores habilitados pelo Azure Arc permitem que você conecte máquinas físicas ou virtuais hospedadas fora do Azure (como datacenters locais, AWS ou GCP) ao plano de controle do Azure. Ao instalar o agente da Máquina Conectada em um servidor físico executando Linux (ou Windows), essa máquina passa a ser representada como um recurso no Azure, permitindo governá-la e monitorá-la usando ferramentas do Azure. O Kubernetes habilitado pelo Azure Arc permite anexar e configurar clusters Kubernetes, tanto dentro quanto fora do Azure. Especificamente, ao lidar com pegadas híbridas ou implantações de borda (como AKS no Azure Stack HCI ou AKS Edge Essentials), o Azure Arc atua como o plano de gerenciamento centralizado para implantar configurações GitOps, impor Políticas do Azure e visualizar a integridade do cluster em escala em toda a sua organização. Os serviços de dados habilitados pelo Azure Arc são projetados explicitamente para trazer Instâncias Gerenciadas do SQL do Azure e o PostgreSQL habilitado pelo Azure Arc para ambientes locais, de borda e multinuvem via Kubernetes. Ele não gerencia soluções de banco de dados proprietárias ou arbitrárias de terceiros (como um banco de dados Oracle local ou uma instância nativa da AWS RDS) diretamente — apenas estende os próprios serviços de banco de dados gerenciados da Microsoft para infraestrutura não pertencente ao Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-arc/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 44 (banco original Q436)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> estende a conformidade e o monitoramento do Azure para configurações híbridas e multinuvem.",
    "opcoes": ["Escolha uma opção", "Microsoft Entra Connect", "Azure Arc", "Azure Front Door", "Azure Policy"],
    "resposta": 1,
    "explicacao": "O Azure Arc simplifica a governança e o gerenciamento, entregando uma plataforma consistente de gerenciamento multinuvem e local, permitindo estender a conformidade e o monitoramento do Azure para essas configurações híbridas.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-arc/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 45 (banco original Q442)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> fornecem uma plataforma comum para implantar objetos em uma infraestrutura de nuvem e para implementar consistência em todo o ambiente do Azure.",
    "opcoes": [
      "Escolha uma opção",
      "Políticas do Azure",
      "Grupos de recursos",
      "Modelos do Azure Resource Manager",
      "Grupos de gerenciamento"
    ],
    "resposta": 2,
    "explicacao": "Modelos do Azure Resource Manager fornecem uma plataforma comum para implantar objetos em uma infraestrutura de nuvem e para implementar consistência em todo o ambiente do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/templates/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 46 (banco original Q443)
  {
    "tipo": "multipla",
    "texto": "Um administrador do Azure planeja executar um script do PowerShell que cria recursos do Azure.\nVocê precisa recomendar qual configuração de computador deve ser usada para executar o script.\nQuais três computadores podem executar o script? Cada resposta correta apresenta uma solução completa.\nNOTA: Cada seleção correta vale um ponto.",
    "opcoes": [
      "um computador que executa o Windows 11 e tem as ferramentas da Azure CLI instaladas",
      "um computador que executa o Linux e tem as ferramentas da Azure CLI instaladas",
      "um computador que executa o macOS e tem o PowerShell Core 6.0 instalado",
      "um computador que executa o Chrome OS e usa o Azure Cloud Shell",
      "um computador que executa o Windows 10 e tem o módulo Azure PowerShell instalado"
    ],
    "respostas": [2, 3, 4],
    "explicacao": "C. Um computador que executa o macOS e tem o PowerShell Core 6.0 instalado. O PowerShell Core 6.0 é multiplataforma e pode ser executado no macOS. Se o módulo Azure PowerShell também estiver instalado, esse computador pode executar o script. D. Um computador que executa o Chrome OS e usa o Azure Cloud Shell. O Azure Cloud Shell oferece suporte tanto a Bash quanto a PowerShell — se o Cloud Shell estiver configurado para usar PowerShell, ele pode executar o script. E. Um computador que executa o Windows 10 e tem o módulo Azure PowerShell instalado. O Windows 10 oferece suporte ao PowerShell, e com o módulo Azure PowerShell instalado, ele pode executar o script para criar recursos do Azure.\n\nNota: a opção C, conforme redigida nesta questão da fonte original, condiciona-se a que o módulo Azure PowerShell também esteja instalado — mas isso não está explícito no texto da própria alternativa, o que contradiz outra questão deste bloco (Q10, banco original Q167), que trata exatamente do mesmo cenário (macOS + PowerShell Core 6.0, sem módulo Azure PowerShell mencionado) como resposta incorreta. Recomenda-se decidir com a turma qual interpretação usar como oficial.",
    "link": "https://learn.microsoft.com/pt-br/powershell/azure/what-is-azure-powershell",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  },
  // Questao 47 (banco original Q459)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você precisa instalar o Azure Cloud Shell no seu computador antes de poder usá-lo.",
      "A Interface de Linha de Comando do Azure (CLI) é instalada por padrão no Windows 11.",
      "O Azure PowerShell pode ser usado em computadores que executam Windows, Linux ou macOS."
    ],
    "respostas": [false, false, true],
    "explicacao": "O Azure Cloud Shell é um ambiente de terminal acessível pelo navegador, hospedado na nuvem e gerenciado inteiramente pela Microsoft. Ele não exige absolutamente nenhuma instalação local em sua estação de trabalho — basta iniciá-lo diretamente no portal do Azure, por meio de shell.azure.com, ou via aplicativos móveis, e ele cuida do provisionamento de um contêiner temporário pré-configurado com as ferramentas padrão de linha de comando. O Windows 11 traz ferramentas administrativas de linha de comando padrão, como o Prompt de Comando e o Windows PowerShell, mas não vem com a Azure CLI integrada — para executar comandos az localmente na sua máquina, é necessário baixar e executar explicitamente o instalador MSI, ou implantá-la via gerenciadores de pacotes como o Winget (winget install Microsoft.AzureCLI). O Azure PowerShell pode, sim, ser usado em computadores que executam Windows, Linux ou macOS.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-shell/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco09"
  }

];