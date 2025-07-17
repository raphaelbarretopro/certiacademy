// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AZ-900
// ==========================================

export const questoes = [

  // Questao 01
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Várias máquinas virtuais podem ser atribuídas a <combobox> para proteger contra interrupções em caso de falha de energia.",
    "opcoes": [
      "Selecione uma resposta",
      "um grupo de posicionamento por proximidade",
      "um grupo de recursos",
      "um conjunto de disponibilidade",
      "uma região do Azure"
    ],
    "resposta": 3,
    "explicacao": "Conjuntos de disponibilidade no Azure garantem que as máquinas virtuais estejam distribuídas por vários domínios de falha, oferecendo resiliência contra interrupções causadas por falhas de hardware ou quedas de energia em datacenters.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/availability-set-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2"
  },
  // Questao 02
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Um aplicativo Web do Azure que consulta um servidor Microsoft SQL local é um exemplo de nuvem <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "híbrida",
      "de vários fornecedores",
      "privada",
      "pública"
    ],
    "resposta": 1,
    "explicacao": "A nuvem híbrida permite que aplicações se comuniquem entre ambientes locais e a nuvem pública. No exemplo da questão, o aplicativo Web do Azure acessa um recurso local (SQL Server), caracterizando um cenário de nuvem híbrida.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/scenarios/hybrid/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2"
  },
  // Questao 03
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A sincronização do Microsoft Entra Connect é um serviço de nuvem do Azure.",
      "Você deve implantar um controlador de domínio para provisionar o Microsoft Entra Domain Services.",
      "O Microsoft Entra ID dá suporte ao SSO (logon único)."
    ],
    "respostas": [false, false, true],
    "explicacao": "O Microsoft Entra Connect é um componente local, não um serviço de nuvem. O Entra Domain Services provisiona automaticamente um domínio gerenciado, sem necessidade de um controlador de domínio. O Microsoft Entra ID oferece suporte a SSO, permitindo que os usuários acessem vários aplicativos com uma única autenticação.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/hybrid/connect/whatis-azure-ad-connect",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 04
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um modelo ARM (Azure Resource Manager) é um exemplo de infraestrutura como código (IaC).",
      "Um arquivo Bicep é um exemplo de infraestrutura como código (IaC).",
      "Um modelo do Microsoft Excel é um exemplo de infraestrutura como código (IaC)."
    ],
    "respostas": [true, true, false],
    "explicacao": "Modelos ARM e arquivos Bicep são exemplos de infraestrutura como código (IaC), pois permitem definir e provisionar recursos de forma automatizada no Azure. Já um modelo do Excel não é usado para esse fim, portanto não é considerado IaC.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/templates/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 05
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Com SaaS (software como serviço), você deve aplicar atualizações de software.",
      "Com IaaS (infraestrutura como serviço), você deve instalar o software que deseja usar.",
      "O Backup do Azure é um exemplo de PaaS (plataforma como serviço)."
    ],
    "respostas": [false, true, false],
    "explicacao": "No modelo SaaS, a responsabilidade por atualizações é do provedor, portanto o usuário não precisa aplicá-las. No IaaS, o usuário é responsável pela instalação e gerenciamento do software. O Azure Backup é um exemplo de serviço de gerenciamento de backup, mas não é classificado como PaaS.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/shared-responsibility",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2"
  },
  // Questao 06
  {
    "tipo": "unica",
    "texto": "No serviço de nuvem SaaS (software como serviço), qual responsabilidade é compartilhada entre a Microsoft e o cliente?",
    "opcoes": [
      "gerenciamento de informações e dados",
      "gerenciamento de infraestrutura de diretório e identidade",
      "gerenciamento de aplicativos",
      "atualizações do sistema operacional"
    ],
    "resposta": 0,
    "explicacao": "No modelo SaaS, a Microsoft é responsável pela infraestrutura, pelo sistema operacional e pelos aplicativos. O cliente é responsável pelo gerenciamento de dados e informações, o que configura essa como uma responsabilidade compartilhada.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/shared-responsibility",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2"
  },
  // Questao 07
  {
    "tipo": "unica",
    "texto": "Você tem 50 máquinas virtuais hospedadas no local e 50 máquinas virtuais hospedadas no Azure. As máquinas virtuais locais e as máquinas virtuais do Azure conectam-se entre si. Qual tipo de modelo de nuvem é este?",
    "opcoes": [
      "híbrida",
      "privada",
      "pública"
    ],
    "resposta": 0,
    "explicacao": "Quando há integração entre recursos locais (on-premises) e recursos em nuvem pública, como no Azure, o modelo é considerado uma nuvem híbrida. Essa abordagem combina benefícios dos dois ambientes e permite conectividade e interoperabilidade entre eles.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/shared-responsibility",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2"
  },
  // Questao 08
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você deve ter servidores físicos para usar a computação em nuvem.",
      "Você deve ter conexão com a Internet para usar a computação em nuvem.",
      "Os custos para aumentar a capacidade de computação em nuvem são menores que os custos para aumentar a capacidade de computação em nuvem de um data center na infraestrutura local."
    ],
    "respostas": [false, true, true],
    "explicacao": "A computação em nuvem elimina a necessidade de o cliente possuir servidores físicos. É necessário ter conexão com a internet para acessar os serviços de nuvem. Em geral, a escalabilidade da nuvem oferece melhor custo-benefício comparado à ampliação de data centers locais.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/shared-responsibility",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2"
  },
  // Questao 09
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você deve ter conectividade com a Internet para gerenciar serviços de nuvem.",
      "Você deve instalar um aplicativo de gerenciamento para gerenciar serviços de nuvem.",
      "Você pode gerenciar serviços de nuvem de qualquer navegador da Web moderno."
    ],
    "respostas": [true, false, true],
    "explicacao": "É necessário ter conexão com a internet para acessar serviços de nuvem. No entanto, não é obrigatório instalar aplicativos específicos para gerenciar esses serviços, pois eles podem ser administrados via portais baseados na web, como o portal do Azure acessado por navegadores modernos.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-portal/azure-portal-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2"
  },
  // Questao 10
  {
    "tipo": "unica",
    "texto": "Qual é o período de tempo mais longo em que é possível comprar Instâncias de VM Reservadas do Azure?",
    "opcoes": [
      "cinco anos",
      "três anos",
      "quatro anos",
      "um ano"
    ],
    "resposta": 1,
    "explicacao": "As Instâncias de Máquinas Virtuais Reservadas do Azure podem ser adquiridas por períodos de 1 ou 3 anos. A reserva por 3 anos oferece o maior desconto em comparação à cobrança sob demanda.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/manage/understand-vm-reservation-charges",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2"
  },
  // Questao 11
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Quando um aplicativo na nuvem pode alocar e liberar recursos, ele tem <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "elasticidade",
      "governança",
      "alta disponibilidade",
      "previsibilidade",
      "confiabilidade"
    ],
    "resposta": 1,
    "explicacao": "Elasticidade refere-se à capacidade da nuvem de aumentar ou reduzir dinamicamente os recursos com base na demanda do aplicativo, garantindo eficiência e escalabilidade automática.",
    "link": "https://learn.microsoft.com/pt-br/azure/well-architected/performance-efficiency/scale-partition",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2"
  },
  // Questao 12
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Dimensionamento automático é um exemplo de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "agilidade",
      "elasticidade",
      "distribuição geográfica",
      "previsibilidade"
    ],
    "resposta": 2,
    "explicacao": "O dimensionamento automático está diretamente relacionado à elasticidade, pois permite que os recursos sejam ajustados automaticamente conforme a demanda, aumentando ou diminuindo sem intervenção manual.",
    "link": "https://learn.microsoft.com/pt-br/azure/well-architected/performance-efficiency/scale-partition",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2"
  },
  // Questao 13
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: O Azure Cosmos DB é um exemplo de oferta de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "PaaS (plataforma como serviço)",
      "IaaS (infraestrutura como serviço)",
      "conteúdo como serviço",
      "SaaS (software como serviço)"
    ],
    "resposta": 1,
    "explicacao": "O Azure Cosmos DB é um serviço de banco de dados totalmente gerenciado, oferecido como PaaS (Plataforma como Serviço), permitindo que os desenvolvedores criem e escalem aplicações distribuídas globalmente sem se preocupar com a infraestrutura subjacente.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/introduction",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2"
  },
  // Questao 14
  {
    "tipo": "comboboxs",
    "texto": "Qual solução de implantação de nuvem é usada para máquinas virtuais do Azure e bancos de dados SQL do Azure? Para responder, selecione as opções adequadas na área de resposta.",
    "pares": [
      {
        "requisito": "Máquinas virtuais do Azure:",
        "opcoes": [
          "IaaS (Infraestrutura como Serviço)",
          "PaaS (Plataforma como Serviço)",
          "SaaS (Software como Serviço)"
        ],
        "resposta": 0
      },
      {
        "requisito": "Bancos de dados SQL do Azure:",
        "opcoes": [
          "IaaS (Infraestrutura como Serviço)",
          "PaaS (Plataforma como Serviço)",
          "SaaS (Software como Serviço)"
        ],
        "resposta": 1
      }
    ],
    "explicacao": "Máquinas virtuais no Azure são fornecidas como IaaS, pois exigem que o usuário gerencie o sistema operacional e o software. Já o Azure SQL Database é uma solução gerenciada que se enquadra como PaaS, onde a plataforma cuida da infraestrutura, atualizações e backups.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2"
  },
  // Questao 15
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Com um plano baseado em consumo, você paga uma taxa fixa por todos os dados enviados bidirecionalmente de máquinas virtuais hospedadas na nuvem.",
      "Com um plano baseado em consumo, você reduz os custos gerais pagando apenas pela capacidade extra quando ela é necessária.",
      "A computação sem servidor é um exemplo de plano baseado em consumo."
    ],
    "respostas": [false, true, true],
    "explicacao": "No modelo baseado em consumo, os recursos são cobrados conforme o uso real, sem taxas fixas para tráfego de dados. Esse modelo permite redução de custos pagando apenas pela capacidade utilizada, como ocorre na computação sem servidor (serverless).",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-functions/functions-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2"
  },
  // Questao 16
  {
    "tipo": "unica",
    "texto": "Sua empresa tem uma assinatura do Azure e três unidades de negócios. Você pretende implantar novos recursos em cada unidade de negócios. Você precisa garantir que os novos recursos sejam implantados usando um método confiável e repetível que aplique as mesmas configurações a cada recurso. O que você deve usar?",
    "opcoes": [
      "Azure Policy",
      "Azure Arc",
      "Modelos do ARM (Azure Resource Manager)",
      "Um grupo de recursos"
    ],
    "resposta": 2,
    "explicacao": "Modelos do ARM (Azure Resource Manager) permitem a implantação consistente e automatizada de recursos no Azure, aplicando a mesma configuração de forma repetível e confiável, o que é ideal para cenários com múltiplas unidades de negócios.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/templates/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 17
  {
    "tipo": "unica",
    "texto": "Sua empresa tem uma assinatura do Azure que contém vários recursos. Você precisa identificar qual departamento é responsável pelo custo de cada recurso. O que você deve usar?",
    "opcoes": [
      "orçamentos",
      "marcas",
      "alertas"
    ],
    "resposta": 1,
    "explicacao": "As marcas (tags) no Azure permitem atribuir metadados aos recursos, como o nome do departamento responsável. Isso facilita a análise de custos por setor, projeto ou outra categoria personalizada.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/costs/billing-tags",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 18
  {
    "tipo": "multipla",
    "texto": "Um administrador do Azure pretende executar um script do PowerShell que cria recursos do Azure. Você precisa recomendar a configuração de computador a ser usada para executar o script. Quais os três computadores que podem executar o script? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "um computador que executa o Linux e tem as ferramentas da CLI do Azure instaladas",
      "um computador que executa o macOS e tem o PowerShell instalado",
      "um computador que executa o Windows 11 e tem as ferramentas da CLI do Azure instaladas",
      "um computador que executa o Windows 10 e tem o módulo do Azure PowerShell instalado",
      "um computador que executa o Chrome OS e usa o Azure Cloud Shell"
    ],
    "respostas": [1, 3, 4],
    "explicacao": "Para executar scripts do PowerShell que interagem com o Azure, o computador precisa ter o PowerShell instalado com os módulos do Azure, ou usar o Azure Cloud Shell, que já vem com o ambiente configurado. O macOS com PowerShell, o Windows com módulo do Azure PowerShell e o Chrome OS com Azure Cloud Shell são soluções válidas.",
    "link": "https://learn.microsoft.com/pt-br/powershell/azure/new-azureps-module-az?view=azps-11.5.0",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 19
  {
    "tipo": "unica",
    "texto": "O que você pode usar para enviar automaticamente um alerta se um administrador parar uma máquina virtual do Azure?",
    "opcoes": [
      "Integridade do Serviço do Azure",
      "Observador de Rede do Azure",
      "Assistente do Azure",
      "Azure Monitor"
    ],
    "resposta": 3,
    "explicacao": "O Azure Monitor permite configurar alertas baseados em métricas, logs ou eventos de atividades. Quando uma máquina virtual é parada, um evento é gerado e o Azure Monitor pode ser configurado para disparar automaticamente um alerta.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-monitor/alerts/alerts-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 20
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você tem uma rede virtual do Azure chamada VNET1 em um grupo de recursos chamado RG1. Você atribui a definição Tipo de Recurso Não Permitido do Azure Policy e especifica que as redes virtuais não são um tipo de recurso permitido em RG1. VNET1 <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "é excluída automaticamente.",
      "é movida automaticamente para outro grupo de recursos.",
      "continua a funcionar normalmente.",
      "é agora um objeto somente leitura."
    ],
    "resposta": 3,
    "explicacao": "O Azure Policy impede a criação de novos recursos que não estejam em conformidade com a política definida, mas não afeta recursos existentes. Portanto, a VNET1 continua funcionando normalmente mesmo após a aplicação da política.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 21
  {
    "tipo": "dragdrop",
    "texto": "Você cria um grupo de recursos chamado RG1 no Azure Resource Manager. Você precisa impedir a exclusão acidental dos recursos em RG1. Qual configuração você deve usar? Para responder, selecione a configuração apropriada na área de resposta.",
    "itens": [
      { "label": "Início Rápido" },
      { "label": "Custos do recurso" },
      { "label": "Implantações" },
      { "label": "Políticas" },
      { "label": "Propriedades" },
      { "label": "Bloqueios" },
      { "label": "Exportar modelo" }
    ],
    "grupos": ["Configuração apropriada"],
    "respostas": {
      "Configuração apropriada": ["Bloqueios"]
    },
    "explicacao": "Para impedir a exclusão acidental de recursos em um grupo de recursos do Azure, é necessário aplicar um bloqueio com o nível 'Excluir'. Esse bloqueio impede que os recursos sejam removidos até que o bloqueio seja removido manualmente.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/lock-resources",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 22
  {
    "tipo": "multipla",
    "texto": "Você planeja reduzir despesas contínuas com o Azure. Você precisa identificar quais fatores afetam os custos de um recurso. Quais são os três fatores que você deve identificar? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "o volume de dados de entrada",
      "a camada de serviço",
      "a região do Azure",
      "o volume de dados de saída",
      "o tipo de dados processados"
    ],
    "respostas": [1, 2, 3],
    "explicacao": "Os principais fatores que impactam os custos no Azure incluem: a camada de serviço (como Standard ou Premium), a região do Azure onde os recursos são implantados (já que preços variam entre regiões) e o volume de dados de saída (largura de banda para fora do Azure é cobrada). Dados de entrada geralmente não são cobrados e o tipo de dado não altera diretamente o custo.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/manage/ea-pricing-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 23
  {
    "tipo": "unica",
    "texto": "Sua empresa tem uma assinatura do Azure que contém recursos em várias regiões. Você precisa garantir que os administradores possam criar recursos apenas nessas regiões. O que você deve usar?",
    "opcoes": [
      "uma política do Azure",
      "um bloqueio somente leitura",
      "um grupo de gerenciamento",
      "uma reserva"
    ],
    "resposta": 0,
    "explicacao": "As políticas do Azure (Azure Policy) permitem definir regras para controlar os tipos de recursos que podem ser implantados, incluindo restrições de região. Isso garante que os administradores só possam criar recursos nas regiões permitidas.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 24
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Na Integridade do Serviço do Azure, um administrador pode ver a integridade de todos os serviços em um ambiente do Azure.",
      "Na Integridade do Serviço do Azure, um administrador pode criar uma regra para ser alertado se um serviço do Azure falhar.",
      "Na Integridade do Serviço do Azure, um administrador pode prevenir uma falha de serviço."
    ],
    "respostas": [true, false, false],
    "explicacao": "A Integridade do Serviço do Azure permite visualizar o status dos serviços da Microsoft no ambiente do cliente, mas não permite criar regras de alerta (isso é feito no Azure Monitor) nem prevenir falhas, pois trata-se de um serviço de monitoramento e não de prevenção.",
    "link": "https://learn.microsoft.com/pt-br/azure/service-health/service-health-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 25
  {
    "tipo": "unica",
    "texto": "Sua empresa tem várias unidades de negócios. Cada unidade de negócios requer 20 recursos diferentes do Azure para operação diária. Todas as unidades de negócios exigem os mesmos tipos de recurso do Azure. Você precisa recomendar uma solução para automatizar a criação dos recursos do Azure. O que você deve incluir na recomendação?",
    "opcoes": [
      "o serviço de Gerenciamento de API do Azure",
      "conjuntos de dimensionamento de máquinas virtuais",
      "grupos de gerenciamento",
      "modelos do Azure Resource Manager"
    ],
    "resposta": 3,
    "explicacao": "Os modelos do Azure Resource Manager (ARM) permitem definir a infraestrutura como código. Eles são ideais para automatizar a criação de conjuntos de recursos consistentes, como os exigidos por diferentes unidades de negócios.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/templates/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 26
  {
    "tipo": "unica",
    "texto": "Você tem um aplicativo Web que é executado no Azure. Você precisa identificar quanto tempo se leva para que as páginas da Web carreguem no navegador de um usuário. O que você deve usar?",
    "opcoes": [
      "Alertas do Azure Monitor",
      "Log Analytics",
      "Observador de Rede do Azure",
      "Application Insights no Azure Monitor"
    ],
    "resposta": 3,
    "explicacao": "O Application Insights no Azure Monitor permite monitorar o desempenho e o tempo de resposta de aplicativos web, incluindo o tempo de carregamento das páginas no navegador do usuário. É a ferramenta ideal para esse tipo de análise.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-monitor/app/app-insights-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 27
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você pode usar <combobox> no Azure para enviar alertas por email quando o custo do período de cobrança atual por uma assinatura do Azure ultrapassar um limite especificado.",
    "opcoes": [
      "Escolha uma opção",
      "Recomendações do Assistente",
      "Controle de acesso (IAM)",
      "Alertas de orçamento",
      "Conformidade"
    ],
    "resposta": 3,
    "explicacao": "Os Alertas de orçamento permitem monitorar e controlar os custos no Azure. Com eles, é possível configurar limites e receber notificações por e-mail quando os custos excedem um valor pré-definido durante o ciclo de cobrança.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/cost-management-billing-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 28
  {
    "tipo": "unica",
    "texto": "Qual tarefa você pode executar usando o Assistente do Azure?",
    "opcoes": [
      "Integrar o Active Directory e um locatário do Microsoft Entra.",
      "Avaliar quais recursos locais podem ser migrados para o Azure.",
      "Confirmar se a segurança da assinatura do Azure segue as práticas recomendadas.",
      "Estimar os custos de uma solução Azure."
    ],
    "resposta": 2,
    "explicacao": "O Assistente do Azure (Azure Advisor) fornece recomendações personalizadas com base nas práticas recomendadas da Microsoft para otimizar segurança, desempenho, confiabilidade e custo da sua assinatura do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/advisor-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 29
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Uma instância de contêiner do Azure é um exemplo de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "serviço de computação",
      "serviço de identidade",
      "serviço de rede",
      "serviço de armazenamento"
    ],
    "resposta": 1,
    "explicacao": "A Instância de Contêiner do Azure (Azure Container Instance) permite executar contêineres na nuvem sem gerenciar máquinas virtuais. Ela se enquadra na categoria de serviços de computação do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/container-instances/container-instances-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2"
  },
  // Questao 30
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Os dados armazenados na Camada de acesso aos arquivos de uma conta do Armazenamento do Azure <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "podem ser acessados a qualquer momento usando-se azcopy.exe.",
      "só podem ser lidos usando-se o Backup do Azure.",
      "devem ser restaurados antes que os dados possam ser acessados.",
      "devem ser reidratados para que os dados possam ser acessados."
    ],
    "resposta": 4,
    "explicacao": "Na Camada de Arquivo do Azure Storage, quando os dados são armazenados na camada de acesso de arquivo com política de arquivamento, eles devem ser reidratados (movidos para a camada de acesso quente ou frio) antes que possam ser acessados.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/access-tiers-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2"
  },
  // Questao 31
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Quando precisar delegar permissões a diversas máquinas virtuais do Azure simultaneamente, você deverá implantá-las <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "na mesma região do Azure.",
      "usando o mesmo modelo do Azure Resource Manager.",
      "no mesmo grupo de recursos.",
      "na mesma zona de disponibilidade."
    ],
    "resposta": 3,
    "explicacao": "Delegar permissões em grupo no Azure é feito de forma mais eficiente quando os recursos estão no mesmo grupo de recursos. Isso facilita a aplicação de controles de acesso baseados em funções (RBAC) no escopo do grupo de recursos.",
    "link": "https://learn.microsoft.com/pt-br/azure/role-based-access-control/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 32
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> dá suporte à sincronização entre o armazenamento local e o Armazenamento do Azure.",
    "opcoes": [
      "Escolha uma opção",
      "Armazenamento de Blobs do Azure",
      "Arquivos do Azure",
      "Armazenamento de Filas do Azure",
      "Armazenamento de Tabelas do Azure"
    ],
    "resposta": 2,
    "explicacao": "O serviço de Arquivos do Azure (Azure Files) permite sincronizar arquivos entre o armazenamento local e a nuvem usando o Azure File Sync. É o único serviço de armazenamento do Azure que oferece essa funcionalidade integrada de sincronização com sistemas locais.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/files/storage-sync-files-planning",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2"
  },
  // Questao 33
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Azure China é operado pela Microsoft.",
      "O Azure Governamental é operado pela Microsoft.",
      "O Azure Governamental está disponível apenas para agências do governo dos EUA e seus parceiros."
    ],
    "respostas": [false, true, true],
    "explicacao": "O Azure China é operado pela 21Vianet, uma parceira local, não pela Microsoft diretamente. O Azure Governamental é operado pela Microsoft, mas separado da nuvem pública, oferecendo maior conformidade com regulamentações. Ele é destinado apenas a entidades do governo dos EUA e seus parceiros qualificados.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-government/documentation-government-welcome",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2"
  },
  // Questao 34
  {
    "tipo": "dragdrop",
    "texto": "Faça a correspondência dos serviços de armazenamento do Azure com as descrições apropriadas.",
    "itens": [
      { "label": "Armazenamento de Blobs do Azure" },
      { "label": "Armazenamento em Disco do Azure" },
      { "label": "Arquivos do Azure" },
      { "label": "Armazenamento de Filas do Azure" }
    ],
    "grupos": [
      "Usado para troca confiável de mensagens entre aplicativos",
      "Pode ser acessado como um compartilhamento de rede de um dispositivo Windows",
      "Pode ser configurado para usar a Camada de acesso aos arquivos"
    ],
    "respostas": {
      "Usado para troca confiável de mensagens entre aplicativos": ["Armazenamento de Filas do Azure"],
      "Pode ser acessado como um compartilhamento de rede de um dispositivo Windows": ["Arquivos do Azure"],
      "Pode ser configurado para usar a Camada de acesso aos arquivos": ["Armazenamento de Blobs do Azure"]
    },
    "explicacao": "O Armazenamento de Filas do Azure é usado para troca de mensagens entre componentes de aplicativos distribuídos. O serviço de Arquivos do Azure permite que arquivos sejam montados em máquinas locais como compartilhamentos SMB. O Armazenamento de Blobs suporta diferentes camadas de acesso, como quente, fria e de arquivamento.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/common/storage-introduction",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2"
  },
  // Questao 35 - IMAGEM img/azb2q35.png
  {
    "tipo": "dragdrop",
    "texto": "Você precisa concluir a estratégia de defesa em profundidade usada em um datacenter. O que você deve fazer? Para responder, arraste as camadas apropriadas até as posições corretas no modelo. Cada camada pode ser usada uma vez, mais de uma vez ou pode não ser usada.",
    "imagemUrl": "img/azb2q35.png",
    "itens": [
      { "label": "Perímetro" },
      { "label": "Aplicativo" },
      { "label": "Segurança física" }
    ],
    "grupos": [
      "Camada A",
      "Camada B",
      "Camada C"
    ],
    "respostas": {
      "Camada A": ["Segurança física"],
      "Camada B": ["Perímetro"],
      "Camada C": ["Aplicativo"]
    },
    "explicacao": "A estratégia de defesa em profundidade da Microsoft divide a proteção em camadas: Segurança física (para computação), Perímetro (para rede) e Aplicativo (para identidade e acesso). A camada de Dados já está representada, sem necessidade de uma nova associação.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 36
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Todos os recursos do Azure implantados em um grupo de recursos devem estar na mesma região do Azure.",
      "Se você atribuir uma marca a um grupo de recursos, todos os recursos do Azure nesse grupo serão atribuídos à mesma marca.",
      "Se você atribuir permissões para um usuário gerenciar um grupo de recursos, o usuário poderá gerenciar todos os recursos do Azure nesse grupo."
    ],
    "respostas": [false, true, true],
    "explicacao": "1. FALSA – Os recursos de um mesmo grupo de recursos podem estar em regiões diferentes.\n2. VERDADEIRA – Marcas aplicadas a um grupo de recursos se propagam para os recursos nele contidos.\n3. VERDADEIRA – As permissões atribuídas a um grupo de recursos se aplicam a todos os recursos dentro dele.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 37
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode aplicar uma política do Azure a uma assinatura inteira.",
      "Você pode usar o Azure Blueprints para implantar recursos do Azure e também atribuir permissões de acesso.",
      "Você pode aplicar um bloqueio somente leitura a um grupo de gerenciamento."
    ],
    "respostas": [true, true, false],
    "explicacao": "1. VERDADEIRA – Políticas do Azure podem ser aplicadas a escopos amplos, como assinaturas.\n2. VERDADEIRA – Azure Blueprints combina políticas, RBAC e recursos para implantação consistente.\n3. FALSA – Bloqueios (locks) podem ser aplicados a grupos de recursos e recursos, mas não a grupos de gerenciamento.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/blueprints/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2"
  },
  // Questao 38
  {
    "tipo": "multipla",
    "texto": "Você precisa gerenciar contêineres. Quais são os dois serviços que você pode usar?",
    "opcoes": [
      "Azure Functions",
      "Máquinas virtuais do Azure",
      "Área de Trabalho Virtual do Azure",
      "Instâncias de Contêiner do Azure",
      "Serviço do Kubernetes do Azure (AKS)"
    ],
    "respostas": [3, 4],
    "explicacao": "Tanto o Azure Container Instances (ACI) quanto o Azure Kubernetes Service (AKS) são serviços nativos do Azure projetados para execução e gerenciamento de contêineres. Azure Functions, Máquinas Virtuais e Área de Trabalho Virtual não são soluções recomendadas para esse tipo de gerenciamento.",
    "link": "https://learn.microsoft.com/pt-br/azure/container-instances/container-instances-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2"
  },
  // Questao 39
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> fornecem às organizações a capacidade de gerenciar a conformidade dos recursos do Azure em várias assinaturas.",
    "opcoes": [
      "Escolha uma opção",
      "Grupos de recursos",
      "Grupos de gerenciamento",
      "Políticas do Azure",
      "Planos do Serviço de Aplicativo do Azure"
    ],
    "resposta": 2,
    "explicacao": "Os Grupos de gerenciamento do Azure permitem que as organizações organizem assinaturas e apliquem políticas de governança e conformidade de forma centralizada. Eles atuam em um nível superior ao das assinaturas, possibilitando a aplicação consistente de regras de acesso, conformidade e segurança.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/management-groups/overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2"
  }


];
