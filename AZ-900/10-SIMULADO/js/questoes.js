// ==========================================
// Arquivo: questoes_bloco10.js
// Descrição: Simulado AZ-900 (fonte: CertyIQ, versão 2026) — tradução PT-BR
// BLOCO 10 de 10 (ÚLTIMO BLOCO) — Descrever as ferramentas de monitoramento no Azure
// (Azure Monitor, Log Analytics, Application Insights; Azure Service Health;
//  Azure Advisor; Microsoft Sentinel/Defender for Cloud como ferramentas de
//  monitoramento de segurança)
// 47 questões — distribuição balanceada conforme guia oficial de estudos AZ-900
//
// CORRESPONDÊNCIA COM O BANCO ORIGINAL (numeração do PDF em inglês, em ordem):
// 14, 15, 106, 117, 123, 126, 158, 166, 168, 169, 171, 177, 178, 179, 180, 183, 190,
// 198, 213, 216, 223, 230, 233, 247, 248, 265, 266, 275, 290, 332, 339, 342, 362, 363,
// 364, 370, 374, 402, 405, 423, 429, 438, 441, 458, 464, 466, 474
//
// NOTA DE TERMINOLOGIA: "Azure Security Center" foi atualizado para "Microsoft Defender
// for Cloud" e "Azure Sentinel" para "Microsoft Sentinel" em todo este bloco, conforme
// confirmado nas próprias explicações do banco de questões original.
// ==========================================

export const questoes = [

  // Questao 01 (banco original Q14) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Nota: esta questão do banco original (Q14) já foi traduzida integralmente no primeiro lote enviado (referente ao Azure Monitor e coleta centralizada de eventos). Consulte o arquivo do lote 1 para o enunciado completo e a explicação detalhada.",
    "opcoes": ["Azure Event Hubs", "Azure Analysis Services", "Azure Monitor", "Azure Stream Analytics"],
    "resposta": 0,
    "explicacao": "O Azure Event Hubs é uma plataforma de streaming de big data e serviço de ingestão de eventos — a palavra-chave é 'evento', não apenas qualquer dado de telemetria.",
    "link": "https://learn.microsoft.com/pt-br/azure/event-hubs/event-hubs-about",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 02 (banco original Q15) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Nota: esta questão do banco original (Q15) já foi traduzida integralmente no primeiro lote enviado (referente a ferramentas de monitoramento e ao Azure Service Health). Consulte o arquivo do lote 1 para o enunciado completo e a explicação detalhada.",
    "opcoes": ["Azure Monitor", "Azure Service Health", "Azure Advisor", "Microsoft Trust Center"],
    "resposta": 1,
    "explicacao": "O Azure Service Health fornece uma visão personalizada da integridade dos serviços e regiões do Azure que você está usando — sendo o melhor lugar para buscar comunicações sobre interrupções, atividades de manutenção planejada e outros avisos de integridade, já que a experiência autenticada do Service Health sabe quais serviços e recursos você usa atualmente.",
    "link": "https://learn.microsoft.com/pt-br/azure/service-health/overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 03 (banco original Q106)
  {
    "tipo": "unica",
    "texto": "Você tenta criar várias instâncias gerenciadas do Microsoft SQL Server em um ambiente do Azure e recebe uma mensagem informando que você deve aumentar os limites da sua assinatura do Azure.\nO que você deve fazer para aumentar os limites?",
    "opcoes": [
      "Criar um alerta de integridade do serviço (service health)",
      "Fazer upgrade do seu plano de suporte",
      "Modificar uma política do Azure",
      "Criar uma nova solicitação de suporte"
    ],
    "resposta": 3,
    "explicacao": "Muitos recursos do Azure têm limites de cota. O propósito dos limites de cota é ajudar a controlar seus custos no Azure. No entanto, é comum precisar de um aumento na cota padrão. Você pode solicitar um aumento no limite de cota abrindo uma solicitação de suporte. Na solicitação de suporte, selecione 'Limites de serviço e assinatura (cotas)' como o tipo de problema, selecione sua assinatura e o serviço para o qual deseja aumentar a cota. Para esta questão, você selecionaria 'Instância Gerenciada de Banco de Dados SQL' como o tipo de cota.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/managed-instance/resource-limits",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 04 (banco original Q117)
  {
    "tipo": "unica",
    "texto": "Qual serviço do Azure você deve usar para coletar eventos de múltiplos recursos em um repositório centralizado?",
    "opcoes": ["Azure Event Hubs", "Azure Analysis Services", "Azure Monitor", "Azure Stream Analytics"],
    "resposta": 0,
    "explicacao": "A palavra-chave é 'evento', não apenas qualquer dado de telemetria. O Azure Event Hubs é uma plataforma de streaming de big data e serviço de ingestão de eventos.",
    "link": "https://learn.microsoft.com/pt-br/azure/event-hubs/event-hubs-about",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 05 (banco original Q123)
  {
    "tipo": "unica",
    "texto": "Você precisa ser notificado quando a Microsoft planeja realizar manutenção que pode afetar os recursos implantados em uma assinatura do Azure.\nO que você deve usar?",
    "opcoes": ["Azure Monitor", "Azure Service Health", "Azure Advisor", "Microsoft Trust Center"],
    "resposta": 1,
    "explicacao": "O Azure Service Health fornece uma visão personalizada da integridade dos serviços e regiões do Azure que você está usando. Este é o melhor lugar para buscar comunicações que afetam o serviço sobre interrupções, atividades de manutenção planejada e outros avisos de integridade, porque a experiência autenticada do Service Health sabe quais serviços e recursos você usa atualmente.",
    "link": "https://learn.microsoft.com/pt-br/azure/service-health/overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 06 (banco original Q126)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> pode calcular a economia de custos devido à redução do consumo de eletricidade, como resultado da migração de servidores Microsoft SQL locais para o Azure.",
    "opcoes": [
      "Escolha uma opção",
      "A ferramenta Azure Migrate: Avaliação de Servidor",
      "A calculadora de Custo Total de Propriedade (TCO) do Azure",
      "O Database Migration Assistant",
      "A calculadora de preços do Azure"
    ],
    "resposta": 1,
    "explicacao": "A calculadora de Custo Total de Propriedade (TCO) é usada para estimar a economia de custos que você pode alcançar ao migrar suas cargas de trabalho de aplicativos para o Azure.",
    "link": "https://blog.abouttmc.com/azure-cloud-total-cost-of-ownership",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 07 (banco original Q158)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: O Application Insights é um recurso do(a) <combobox>.",
    "opcoes": ["Escolha uma opção", "Azure Advisor", "Azure Application Gateway", "Azure Arc", "Azure Monitor"],
    "resposta": 3,
    "explicacao": "O Application Insights é um recurso do Azure Monitor que fornece gerenciamento extensível de desempenho de aplicativos (APM) e monitoramento para aplicativos Web em execução.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-monitor/app/app-insights-overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 08 (banco original Q166)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A partir do Azure Service Health, um administrador pode visualizar a integridade de todos os serviços em um ambiente do Azure.",
      "A partir do Azure Service Health, um administrador pode criar uma regra para ser alertado caso um serviço do Azure falhe.",
      "A partir do Azure Service Health, um administrador pode evitar uma falha de serviço."
    ],
    "respostas": [true, true, false],
    "explicacao": "O Azure Service Health é composto por três componentes: Status do Azure, Integridade do Serviço do Azure e Integridade de Recursos do Azure. O Azure Service Health fornece uma visão personalizada da integridade dos serviços e regiões do Azure que você está usando. Para visualizar a integridade de todos os outros serviços disponíveis no Azure, você usaria o componente Status do Azure, que informa sobre interrupções de serviço na página de Status do Azure — uma visão global da integridade de todos os serviços do Azure em todas as regiões do Azure. A melhor forma de usar o Service Health é configurar alertas de Integridade do Serviço para serem notificado pelos seus canais de comunicação preferidos quando problemas de serviço, manutenção planejada ou outras alterações puderem afetar os serviços e regiões do Azure que você usa. Você pode usar a Integridade de Recursos para visualizar a integridade de uma máquina virtual. No entanto, você não pode usar a Integridade de Recursos para evitar uma falha de serviço que afete a máquina virtual — a Integridade de Recursos do Azure fornece informações sobre a integridade de seus recursos de nuvem individuais, como a instância específica de uma máquina virtual.",
    "link": "https://learn.microsoft.com/pt-br/azure/service-health/overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 09 (banco original Q168)
  {
    "tipo": "unica",
    "texto": "Você precisa visualizar uma lista de eventos de manutenção planejada que podem afetar a disponibilidade de uma assinatura do Azure.\nQual painel (blade) você deve usar no portal do Azure? Para responder, selecione o painel apropriado na área de resposta.",
    "opcoes": [
      "Novo (New)",
      "Todos os serviços (All services)",
      "Painel (Dashboard)",
      "Todos os recursos (All resources)",
      "Grupos de recursos (Resource groups)",
      "Ajuda + Suporte → Integridade do Serviço (Help + Support → Service Health)"
    ],
    "resposta": 5,
    "explicacao": "No painel Ajuda e Suporte, há uma opção Integridade do Serviço (Service Health). Ao clicar em Integridade do Serviço, um novo painel é aberto. O painel Integridade do Serviço contém o link Manutenção Planejada, que abre um painel onde você pode visualizar uma lista de eventos de manutenção planejada que podem afetar a disponibilidade de uma assinatura do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/service-health/service-health-overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 10 (banco original Q169)
  {
    "tipo": "dragdrop",
    "texto": "Associe o serviço do Azure à definição correta. Instruções: Para responder, arraste o serviço apropriado do Azure da coluna à esquerda para sua descrição à direita. Cada serviço pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Azure Advisor" },
      { "label": "Azure Cognitive Services" },
      { "label": "Azure Application Insights" },
      { "label": "Azure DevOps" }
    ],
    "grupos": [
      "Uma solução integrada para a implantação de código",
      "Uma ferramenta que fornece orientação e recomendações para melhorar um ambiente do Azure",
      "Uma ferramenta simplificada para criar aplicativos de Inteligência Artificial (IA)",
      "Monitora aplicativos Web"
    ],
    "respostas": {
      "Uma solução integrada para a implantação de código": ["Azure DevOps"],
      "Uma ferramenta que fornece orientação e recomendações para melhorar um ambiente do Azure": ["Azure Advisor"],
      "Uma ferramenta simplificada para criar aplicativos de Inteligência Artificial (IA)": ["Azure Cognitive Services"],
      "Monitora aplicativos Web": ["Azure Application Insights"]
    },
    "explicacao": "O Azure DevOps é a principal plataforma de desenvolvimento e implantação de software da Microsoft, influenciando o ciclo de vida do aplicativo em todas as suas fases de planejamento, desenvolvimento, entrega e operação. O Azure Advisor é um consultor de nuvem personalizado que ajuda você a seguir as melhores práticas para otimizar suas implantações do Azure — ele analisa a configuração de seus recursos e a telemetria de uso, e recomenda soluções que podem ajudar a melhorar a relação custo-benefício, o desempenho, a alta disponibilidade e a segurança de seus recursos do Azure. Os Serviços Cognitivos do Azure são APIs, SDKs e serviços disponíveis para ajudar desenvolvedores a construir aplicativos inteligentes sem ter conhecimento direto de IA ou ciência de dados. O Azure Application Insights detecta e diagnostica anomalias em aplicativos Web.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-monitor/app/app-insights-overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 11 (banco original Q171)
  {
    "tipo": "comboboxs",
    "texto": "Você precisa identificar quais painéis (blades) no portal do Azure devem ser usados para realizar as seguintes tarefas:\n• Monitorar a integridade dos serviços do Azure.\n• Navegar pelas imagens de máquinas virtuais disponíveis.\n• Visualizar recomendações de segurança.\nQual painel você deve identificar para cada tarefa? Para responder, selecione as opções apropriadas na área de resposta.",
    "pares": [
      {
        "requisito": "Monitorar a integridade dos serviços do Azure:",
        "opcoes": ["Monitor", "Assinaturas (Subscriptions)", "Marketplace", "Advisor"],
        "resposta": 0
      },
      {
        "requisito": "Navegar pelas imagens de máquinas virtuais disponíveis:",
        "opcoes": ["Monitor", "Assinaturas (Subscriptions)", "Marketplace", "Advisor"],
        "resposta": 2
      },
      {
        "requisito": "Visualizar recomendações de segurança:",
        "opcoes": ["Monitor", "Assinaturas (Subscriptions)", "Marketplace", "Advisor"],
        "resposta": 3
      }
    ],
    "explicacao": "O Azure Monitor é usado para monitorar a integridade dos serviços do Azure — ele maximiza a disponibilidade e o desempenho de seus aplicativos e serviços, entregando uma solução abrangente para coletar, analisar e agir sobre a telemetria de seus ambientes de nuvem e locais. Você pode navegar pelas imagens de máquinas virtuais disponíveis no Azure Marketplace — o Marketplace fornece acesso e informações sobre soluções e serviços disponíveis da Microsoft e de seus parceiros, com um catálogo de mais de 8.000 listagens, incluindo blocos de construção do Azure como Máquinas Virtuais (VMs). O Azure Advisor exibe recomendações de segurança — o Advisor fornece uma visão consistente e consolidada de recomendações para todos os seus recursos do Azure, integrando-se com o Microsoft Defender for Cloud para trazer recomendações de segurança.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/advisor-overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 12 (banco original Q177)
  {
    "tipo": "unica",
    "texto": "Sua empresa planeja implantar uma solução de Inteligência Artificial (IA) no Azure.\nO que a empresa deve usar para construir, testar e implantar soluções de análise preditiva?",
    "opcoes": ["Azure Logic Apps", "Azure Machine Learning Designer", "Azure Batch", "Azure Cosmos DB"],
    "resposta": 1,
    "explicacao": "O Azure Machine Learning Designer permite conectar visualmente conjuntos de dados e módulos em uma tela interativa para criar modelos de machine learning.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-designer",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 13 (banco original Q178)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Azure Advisor pode gerar uma lista de máquinas virtuais do Azure que são protegidas pelo Azure Backup.",
      "Se você implementar as recomendações de segurança fornecidas pelo Azure Advisor, a pontuação de segurança (secure score) da sua empresa diminuirá.",
      "Para manter o suporte da Microsoft, você deve implementar as recomendações de segurança fornecidas pelo Azure Advisor dentro de um período de 30 dias."
    ],
    "respostas": [false, false, false],
    "explicacao": "O Azure Advisor não gera uma lista de máquinas virtuais que ESTÃO protegidas pelo Azure Backup. O Azure Advisor, na verdade, gera uma lista de máquinas virtuais que NÃO estão protegidas pelo Azure Backup. Você pode visualizar uma lista de máquinas virtuais protegidas visualizando os Itens Protegidos no Cofre de Serviços de Recuperação do Azure. Se você implementar as recomendações de segurança, a pontuação de segurança da sua empresa aumentará, não diminuirá. Não há exigência de implementar as recomendações de segurança fornecidas pelo Azure Advisor. As recomendações são apenas isso, 'recomendações'. Elas não são 'exigências'.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/advisor-overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 14 (banco original Q179)
  {
    "tipo": "unica",
    "texto": "O que você pode usar para enviar automaticamente um alerta caso um administrador pare uma máquina virtual do Azure?",
    "opcoes": ["Azure Advisor", "Azure Service Health", "Azure Monitor", "Azure Network Watcher"],
    "resposta": 2,
    "explicacao": "O Azure Monitor é a resposta correta. O Azure Service Health fornece a integridade/status do serviço do Azure. O Azure Monitor fornece a integridade/status do seu aplicativo usando insights e logs.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-monitor/vm/vminsights-alerts",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 15 (banco original Q180)
  {
    "tipo": "dragdrop",
    "texto": "Associe os serviços do Azure às descrições corretas. Instruções: Para responder, arraste o serviço apropriado do Azure da coluna à esquerda para sua descrição à direita. Cada serviço pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Azure Machine Learning" },
      { "label": "Azure Synapse Analytics" },
      { "label": "Azure IoT Hub" },
      { "label": "Azure Functions" }
    ],
    "grupos": [
      "Fornece um Data Warehouse Corporativo (EDW) baseado em nuvem.",
      "Usa treinamentos anteriores para fornecer previsões com alta probabilidade.",
      "Fornece funcionalidades de computação sem servidor (serverless).",
      "Processa dados de milhões de sensores."
    ],
    "respostas": {
      "Fornece um Data Warehouse Corporativo (EDW) baseado em nuvem.": ["Azure Synapse Analytics"],
      "Usa treinamentos anteriores para fornecer previsões com alta probabilidade.": ["Azure Machine Learning"],
      "Fornece funcionalidades de computação sem servidor (serverless).": ["Azure Functions"],
      "Processa dados de milhões de sensores.": ["Azure IoT Hub"]
    },
    "explicacao": "O Azure Synapse Analytics (antigo Data Warehouse) é uma oferta baseada em nuvem de Plataforma como Serviço (PaaS) da Microsoft. É uma tecnologia de banco de dados relacional distribuída e em larga escala, com processamento massivamente paralelo (MPP), na mesma classe de concorrentes como Amazon Redshift ou Snowflake. O Azure Machine Learning usa treinamentos anteriores para fornecer previsões com alta probabilidade — machine learning é uma técnica de ciência de dados que permite aos computadores usar dados existentes para prever comportamentos, resultados e tendências futuros. O Azure Functions fornece funcionalidades de computação sem servidor — é um serviço de computação sem servidor que permite executar código acionado por eventos sem precisar provisionar ou gerenciar infraestrutura explicitamente. O IoT Hub (Hub da Internet das Coisas) é um serviço gerenciado, hospedado na nuvem, que atua como um hub central de mensagens para comunicação bidirecional entre seu aplicativo IoT e os dispositivos que ele gerencia, processando dados de milhões de sensores.",
    "link": "https://learn.microsoft.com/pt-br/azure/iot-hub/about-iot-hub",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 16 (banco original Q183)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Azure Advisor fornece recomendações sobre como melhorar a segurança de um ambiente do Microsoft Entra ID.",
      "O Azure Advisor fornece recomendações sobre como reduzir o custo de execução de máquinas virtuais do Azure.",
      "O Azure Advisor fornece recomendações sobre como configurar as definições de rede em máquinas virtuais do Azure."
    ],
    "respostas": [false, true, false],
    "explicacao": "O Azure Advisor fornece uma visão consistente e consolidada de recomendações para todos os seus recursos do Azure. Ele se integra ao Microsoft Defender for Cloud para trazer recomendações de segurança. Você pode obter recomendações de segurança na aba Segurança (Security) do painel do Advisor — exemplos de recomendações incluem restringir o acesso a máquinas virtuais configurando Grupos de Segurança de Rede, habilitar criptografia de armazenamento, instalar soluções de avaliação de vulnerabilidades. No entanto, o Azure Advisor não fornece recomendações sobre como melhorar a segurança de um ambiente do Microsoft Entra ID. O Advisor ajuda a otimizar e reduzir seus gastos gerais no Azure, identificando recursos ociosos e subutilizados — você pode obter recomendações de custo na aba Custo (Cost) do painel do Advisor. O Azure Advisor não fornece recomendações sobre como configurar as definições de rede em máquinas virtuais do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/advisor-security-recommendations",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 17 (banco original Q190)
  {
    "tipo": "dragdrop",
    "texto": "Associe o serviço do Azure à descrição correta. Instruções: Para responder, arraste o serviço apropriado do Azure da coluna à esquerda para sua descrição à direita. Cada serviço pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Azure Machine Learning" },
      { "label": "Azure IoT Hub" },
      { "label": "Azure Bot Services" },
      { "label": "Azure Functions" }
    ],
    "grupos": [
      "Fornece um assistente digital online que oferece suporte a voz",
      "Usa treinamentos anteriores para fornecer previsões com alta probabilidade",
      "Fornece funcionalidades de computação sem servidor (serverless)",
      "Processa dados de milhões de sensores"
    ],
    "respostas": {
      "Fornece um assistente digital online que oferece suporte a voz": ["Azure Bot Services"],
      "Usa treinamentos anteriores para fornecer previsões com alta probabilidade": ["Azure Machine Learning"],
      "Fornece funcionalidades de computação sem servidor (serverless)": ["Azure Functions"],
      "Processa dados de milhões de sensores": ["Azure IoT Hub"]
    },
    "explicacao": "O Azure Bot Services fornece um assistente digital online que oferece suporte por voz — bots proporcionam uma experiência menos parecida com o uso de um computador e mais parecida com lidar com uma pessoa, ou pelo menos com um robô inteligente, e podem ser usados para transferir tarefas simples e repetitivas para sistemas automatizados que não exigem mais intervenção humana direta. Os usuários conversam com um bot usando texto, cartões interativos e voz. O Azure Machine Learning usa treinamentos anteriores para fornecer previsões com alta probabilidade. O Azure Functions fornece funcionalidades de computação sem servidor — permite executar código acionado por eventos sem precisar provisionar ou gerenciar infraestrutura explicitamente. O IoT Hub é um serviço gerenciado, hospedado na nuvem, que atua como um hub central de mensagens para comunicação bidirecional entre seu aplicativo IoT e os dispositivos que ele gerencia, processando dados de milhões de sensores.",
    "link": "https://learn.microsoft.com/pt-br/azure/bot-service/bot-service-overview-introduction",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 18 (banco original Q198)
  {
    "tipo": "unica",
    "texto": "O que você pode usar para identificar máquinas virtuais do Azure subutilizadas ou não utilizadas?",
    "opcoes": ["Azure Advisor", "Azure Cost Management + Billing", "reservas do Azure", "Azure Policy"],
    "resposta": 0,
    "explicacao": "O Azure Advisor ajuda a otimizar e reduzir seus gastos gerais no Azure, identificando recursos ociosos e subutilizados. Você pode obter recomendações de custo na aba Custo do painel do Advisor.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/advisor-overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 19 (banco original Q213)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Azure Monitor pode monitorar o desempenho de computadores locais.",
      "O Azure Monitor pode enviar alertas para grupos de segurança do Microsoft Entra ID.",
      "O Azure Monitor pode acionar alertas com base em dados de um workspace do Azure Log Analytics."
    ],
    "respostas": [true, true, true],
    "explicacao": "O Azure Monitor maximiza a disponibilidade e o desempenho de seus aplicativos e serviços, entregando uma solução abrangente para coletar, analisar e agir sobre a telemetria de seus ambientes de nuvem e locais. Alertas no Azure Monitor notificam proativamente sobre condições críticas e potencialmente tentam tomar ações corretivas — incluindo o envio de notificações para grupos de segurança. O Azure Monitor usa o Recurso de Destino (Target Resource), que é o escopo e os sinais disponíveis para alertas. Um destino pode ser qualquer recurso do Azure — exemplos de destinos incluem: uma máquina virtual, uma conta de armazenamento, um conjunto de dimensionamento de máquinas virtuais, um workspace do Log Analytics ou um recurso do Application Insights.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-monitor/overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 20 (banco original Q216)
  {
    "tipo": "unica",
    "texto": "Você tem uma máquina virtual chamada VM1 que executa o Windows Server 2016. A VM1 está na região Leste dos EUA do Azure.\nQual serviço do Azure você deve usar no portal do Azure para visualizar notificações de falha de serviço que podem afetar a disponibilidade da VM1?",
    "opcoes": ["Azure Service Fabric", "Azure Monitor", "Máquinas virtuais do Azure", "Azure Advisor"],
    "resposta": 1,
    "explicacao": "O Azure Monitor maximiza a disponibilidade e o desempenho de seus aplicativos, entregando uma solução abrangente para coletar, analisar e agir sobre a telemetria de seus ambientes de nuvem e locais. Ele ajuda a entender como seus aplicativos estão performando e identifica proativamente problemas que os afetam e os recursos dos quais dependem. Notificações de integridade do serviço são publicadas pela infraestrutura do Azure no log de atividades do Azure. As notificações contêm informações sobre os recursos sob sua assinatura. Para visualizar suas notificações de integridade do serviço no portal do Azure, selecione Monitor. O Azure Monitor reúne todas as suas configurações e dados de monitoramento em uma visão consolidada, abrindo inicialmente na seção do Log de Atividades. Selecione Alertas, depois +Adicionar alerta de log de atividade, e configure um alerta para garantir que você seja notificado sobre futuras notificações de serviço.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-monitor/overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 21 (banco original Q223)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Sentinel armazena eventos coletados em uma conta de Armazenamento do Azure.",
      "O Microsoft Sentinel pode corrigir incidentes automaticamente.",
      "O Microsoft Sentinel pode coletar logs do Firewall do Windows Defender em máquinas virtuais do Azure."
    ],
    "respostas": [false, true, true],
    "explicacao": "O Microsoft Sentinel armazena eventos coletados em workspaces do Azure Log Analytics, não em uma conta de Armazenamento do Azure. O Microsoft Sentinel pode corrigir incidentes automaticamente usando Playbooks, que são coleções de procedimentos que podem ser executados a partir do Microsoft Sentinel. O Microsoft Sentinel pode, sim, coletar logs do Firewall do Windows Defender a partir de VMs do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/sentinel/overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 22 (banco original Q230)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: O Microsoft Sentinel usa playbooks para <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "responder automaticamente a ameaças.",
      "coletar dados de serviços do Azure.",
      "especificar por quanto tempo os dados são retidos.",
      "armazenar senhas e certificados."
    ],
    "resposta": 1,
    "explicacao": "Playbooks são coleções de procedimentos que podem ser executados a partir do Microsoft Sentinel em resposta a um alerta ou incidente. Um playbook pode ajudar a automatizar e orquestrar sua resposta, e pode ser configurado para ser executado automaticamente quando alertas ou incidentes específicos são gerados, sendo anexado a uma regra de análise ou a uma regra de automação, respectivamente. Também pode ser executado manualmente, sob demanda.",
    "link": "https://learn.microsoft.com/pt-br/azure/sentinel/tutorial-respond-threats-playbook",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 23 (banco original Q233)
  {
    "tipo": "unica",
    "texto": "Você tem um workspace do Microsoft Sentinel.\nVocê precisa automatizar respostas a ameaças detectadas pelo Microsoft Sentinel.\nO que você deve usar?",
    "opcoes": [
      "endurecimento de rede adaptável (adaptive network hardening) no Microsoft Defender for Cloud",
      "Azure Service Health",
      "workbooks do Azure Monitor",
      "controles de aplicativo adaptáveis (adaptive application controls) no Microsoft Defender for Cloud"
    ],
    "resposta": 2,
    "explicacao": "Depois de conectar suas fontes de dados ao Microsoft Sentinel, você pode visualizar e monitorar os dados usando a adoção do Microsoft Sentinel dos Workbooks do Azure Monitor, que oferece versatilidade na criação de painéis personalizados. Embora os Workbooks sejam exibidos de forma diferente no Microsoft Sentinel, pode ser útil ver como criar relatórios interativos com os Workbooks do Azure Monitor. O Microsoft Sentinel permite criar workbooks personalizados em seus dados, e também vem com modelos de workbook integrados para permitir que você obtenha insights rapidamente sobre seus dados assim que conecta uma fonte de dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/sentinel/monitor-your-data",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 24 (banco original Q247)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: A proteção contra negação de serviço distribuída (DDoS) do Azure é um exemplo de proteção implementada na <combobox>.",
    "opcoes": ["Escolha uma opção", "camada de aplicativo", "camada de computação", "camada de rede", "camada de perímetro"],
    "resposta": 3,
    "explicacao": "A camada de perímetro usa a proteção contra negação de serviço distribuída (DDoS) para filtrar ataques em larga escala antes que possam causar uma negação de serviço para os usuários.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/secure-network-connectivity-azure/2-what-is-defense-in-depth",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 25 (banco original Q248)
  {
    "tipo": "unica",
    "texto": "Você precisa configurar uma solução do Azure que atenda aos seguintes requisitos:\n• Protege sites contra ataques\n• Gera relatórios que contêm detalhes de tentativas de ataque\nO que você deve incluir na solução?",
    "opcoes": ["Firewall do Azure", "um grupo de segurança de rede (NSG)", "Azure Information Protection", "proteção DDoS"],
    "resposta": 3,
    "explicacao": "'Ataque' é a palavra-chave para DDoS. 'Regras' é a palavra-chave para Firewall. 'Permitir/Negar' é a palavra-chave para NSG. DDoS é um tipo de ataque que tenta esgotar os recursos de um aplicativo. O objetivo é afetar a disponibilidade do aplicativo e sua capacidade de lidar com solicitações legítimas. Ataques DDoS podem ser direcionados a qualquer endpoint publicamente acessível pela internet. O Azure tem duas ofertas de serviço DDoS que fornecem proteção contra ataques de rede: Proteção DDoS Básica e Proteção DDoS Padrão. A proteção DDoS Básica é integrada à plataforma Azure por padrão e sem custo adicional. Você tem a opção de pagar pelo DDoS Padrão, que tem várias vantagens sobre o serviço básico, incluindo registro, alertas e telemetria — o DDoS Padrão pode gerar relatórios contendo detalhes de tentativas de ataque, conforme exigido nesta questão.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/ddos-best-practices",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 26 (banco original Q265)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você pode visualizar o relatório de conformidade regulatória da sua empresa a partir do(a) <combobox>.",
    "opcoes": ["Escolha uma opção", "Azure Advisor", "Azure Analysis Services", "Azure Monitor", "Microsoft Defender for Cloud"],
    "resposta": 3,
    "explicacao": "Os recursos avançados de monitoramento no Microsoft Defender for Cloud permitem rastrear e gerenciar a conformidade e a governança ao longo do tempo. A conformidade geral fornece uma medida de o quanto suas assinaturas estão em conformidade com as políticas associadas à sua carga de trabalho.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/regulatory-compliance-dashboard",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 27 (banco original Q266)
  {
    "tipo": "unica",
    "texto": "O que você deve usar para avaliar se o ambiente do Azure da sua empresa atende aos requisitos regulatórios?",
    "opcoes": ["Azure Service Health", "Azure Knowledge Center", "Microsoft Defender for Cloud", "Azure Advisor"],
    "resposta": 2,
    "explicacao": "Os recursos avançados de monitoramento no Microsoft Defender for Cloud permitem rastrear e gerenciar a conformidade e a governança ao longo do tempo. A conformidade geral fornece uma medida de o quanto suas assinaturas estão em conformidade com as políticas associadas à sua carga de trabalho.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/defender-for-cloud-introduction",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 28 (banco original Q275)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode configurar os logs de atividade do Microsoft Entra ID para aparecerem no Azure Monitor.",
      "A partir do Azure Monitor, você pode monitorar recursos em várias assinaturas do Azure.",
      "A partir do Azure Monitor, você pode criar alertas."
    ],
    "respostas": [true, true, true],
    "explicacao": "Você pode enviar logs de atividade do Microsoft Entra ID para logs do Azure Monitor, possibilitando visualizações, monitoramento e alertas avançados sobre os dados conectados. Todos os dados coletados pelo Azure Monitor se enquadram em um de dois tipos fundamentais: métricas e logs (incluindo os logs de atividade do Microsoft Entra ID). Os logs de atividade registram quando os recursos são criados ou modificados. As métricas informam como o recurso está performando e quais recursos ele está consumindo. O Azure Monitor pode consolidar entradas de log de vários recursos, assinaturas e locatários em um único local para análise conjunta. Você pode, sim, criar alertas no Azure Monitor — os alertas notificam proativamente sobre condições críticas e potencialmente tentam tomar ações corretivas. Regras de alerta baseadas em métricas fornecem alertas quase em tempo real com base em valores numéricos, enquanto regras baseadas em logs permitem lógica complexa entre dados de múltiplas fontes.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/reports-monitoring/concept-activity-logs-azure-monitor",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 29 (banco original Q290)
  {
    "tipo": "unica",
    "texto": "O que você deve usar para avaliar se o ambiente do Azure da sua empresa atende aos requisitos regulatórios?",
    "opcoes": ["Azure Service Health", "Azure Knowledge Center", "Microsoft Defender for Cloud", "Azure Advisor"],
    "resposta": 2,
    "explicacao": "O Microsoft Defender for Cloud ajuda a simplificar o processo de atendimento aos requisitos de conformidade regulatória, usando o painel de conformidade regulatória.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/regulatory-compliance-dashboard",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 30 (banco original Q332)
  {
    "tipo": "unica",
    "texto": "Sua empresa tem uma assinatura do Azure que contém os seguintes recursos não utilizados:\n• 20 contas de usuário no Microsoft Entra ID\n• Cinco grupos no Microsoft Entra ID\n• 10 endereços IP públicos\n• 10 interfaces de rede\nVocê precisa reduzir os custos do Azure para a empresa.\nQuais recursos não utilizados você deve remover?",
    "opcoes": ["as interfaces de rede", "os endereços IP públicos", "os grupos", "as contas de usuário"],
    "resposta": 1,
    "explicacao": "Você é cobrado por endereços IP públicos. Portanto, excluir endereços IP públicos não utilizados reduzirá os custos do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/advisor-cost-recommendations#reduce-costs-by-deleting-or-reconfiguring-idle-virtual-network-gateways",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 31 (banco original Q339)
  {
    "tipo": "unica",
    "texto": "Qual tarefa você pode realizar usando o Azure Advisor?",
    "opcoes": [
      "Integrar o Active Directory local ao Microsoft Entra ID.",
      "Estimar os custos de uma solução do Azure.",
      "Confirmar que a segurança de uma assinatura do Azure segue as melhores práticas.",
      "Avaliar quais recursos locais podem ser migrados para o Azure."
    ],
    "resposta": 2,
    "explicacao": "A estimativa de preço é fornecida pela calculadora de preços. O Advisor fornece melhores práticas relevantes para ajudá-lo a melhorar a confiabilidade, a segurança e o desempenho, alcançar a excelência operacional e reduzir custos. Configure o Advisor para direcionar assinaturas e grupos de recursos específicos, para focar em otimizações críticas. Acesse o Advisor pelo portal do Azure, pela Interface de Linha de Comando do Azure (CLI), ou pela API do Advisor. Ou configure alertas para ser notificado automaticamente sobre novas recomendações.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/advisor-overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 32 (banco original Q342)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> fornecem acesso à capacidade de computação não utilizada do Azure, com descontos profundos.",
    "opcoes": [
      "Escolha uma opção",
      "Instâncias de Contêiner do Azure",
      "Instâncias de Máquina Virtual (VM) Reservadas do Azure",
      "Instâncias de máquina virtual Spot do Azure",
      "Conjuntos de dimensionamento de máquinas virtuais do Azure"
    ],
    "resposta": 2,
    "explicacao": "Usar Máquinas Virtuais Spot do Azure permite aproveitar nossa capacidade não utilizada com economia significativa de custos. A qualquer momento, quando o Azure precisar da capacidade de volta, a infraestrutura do Azure despejará (evict) as Máquinas Virtuais Spot do Azure. Portanto, as Máquinas Virtuais Spot do Azure são ótimas para cargas de trabalho que podem lidar com interrupções, como jobs de processamento em lote, ambientes de desenvolvimento/teste, grandes cargas de trabalho de computação, entre outros.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/spot-vms",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 33 (banco original Q362)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nSua empresa tem uma assinatura do Azure que contém os seguintes recursos não utilizados:\n• 20 contas de usuário no Microsoft Entra ID\n• Cinco grupos no Microsoft Entra ID\n• 10 endereços IP públicos\n• 10 interfaces de rede\nVocê precisa reduzir os custos do Azure para a empresa.\nSolução: Você remove as interfaces de rede não utilizadas.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Você não é cobrado por interfaces de rede não utilizadas. Portanto, excluir interfaces de rede não utilizadas não reduzirá os custos do Azure para a empresa.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/advisor-cost-recommendations#reduce-costs-by-deleting-or-reconfiguring-idle-virtual-network-gateways",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 34 (banco original Q363)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nSua empresa tem uma assinatura do Azure que contém os seguintes recursos não utilizados:\n• 20 contas de usuário no Microsoft Entra ID\n• Cinco grupos no Microsoft Entra ID\n• 10 endereços IP públicos\n• 10 interfaces de rede\nVocê precisa reduzir os custos do Azure para a empresa.\nSolução: Você remove os endereços IP públicos não utilizados.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "Você é cobrado por endereços IP públicos. Portanto, excluir endereços IP públicos não utilizados reduzirá os custos do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/advisor-cost-recommendations#reduce-costs-by-deleting-or-reconfiguring-idle-virtual-network-gateways",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 35 (banco original Q364)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nSua empresa tem uma assinatura do Azure que contém os seguintes recursos não utilizados:\n• 20 contas de usuário no Microsoft Entra ID\n• Cinco grupos no Microsoft Entra ID\n• 10 endereços IP públicos\n• 10 interfaces de rede\nVocê precisa reduzir os custos do Azure para a empresa.\nSolução: Você remove as contas de usuário não utilizadas.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Você não é cobrado por contas de usuário. Portanto, excluir contas de usuário não utilizadas não reduzirá os custos do Azure para a empresa.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/advisor-cost-recommendations#reduce-costs-by-deleting-or-reconfiguring-idle-virtual-network-gateways",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 36 (banco original Q370)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nSua empresa tem uma assinatura do Azure que contém os seguintes recursos não utilizados:\n• 20 contas de usuário no Microsoft Entra ID\n• Cinco grupos no Microsoft Entra ID\n• 10 endereços IP públicos\n• 10 interfaces de rede\nVocê precisa reduzir os custos do Azure para a empresa.\nSolução: Você remove os grupos não utilizados.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Você não é cobrado por Grupos do Microsoft Entra ID. Portanto, excluir grupos não utilizados não reduzirá seus custos do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/advisor-cost-recommendations#reduce-costs-by-deleting-or-reconfiguring-idle-virtual-network-gateways",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 37 (banco original Q374)
  {
    "tipo": "unica",
    "texto": "Você precisa comparar o uso de nuvem de uma empresa com as melhores práticas do setor.\nO que você deve usar?",
    "opcoes": ["Azure Monitor", "Azure Service Health", "Application Insights no Azure Monitor", "Azure Advisor"],
    "resposta": 3,
    "explicacao": "Como seu consultor de nuvem personalizado, o Azure Advisor avalia continuamente a telemetria de uso e a configuração de recursos para verificar as melhores práticas do setor.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/azure-advisor-score",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 38 (banco original Q402)
  {
    "tipo": "unica",
    "texto": "Qual serviço pode substituir automaticamente um bloqueio de recurso caso o bloqueio seja removido?",
    "opcoes": ["Azure Information Protection (AIP)", "Azure Blueprints", "Azure Backup", "Azure Advisor"],
    "resposta": 1,
    "explicacao": "É tipicamente possível que alguém com controle de acesso baseado em função (RBAC) apropriado na assinatura, como a função de 'Proprietário' (Owner), tenha permissão para alterar ou excluir qualquer recurso. Esse acesso não é o caso quando o Azure Blueprints aplica bloqueio como parte de uma atribuição implantada. Se a atribuição foi definida com a opção Somente Leitura ou Não Excluir, nem mesmo o proprietário da assinatura pode realizar a ação bloqueada no recurso protegido. Essa medida de segurança protege a consistência do blueprint definido e do ambiente que ele foi projetado para criar, contra exclusão ou alteração acidental ou programática.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/blueprints/concepts/resource-locking#overriding-locking-states",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 39 (banco original Q405)
  {
    "tipo": "multipla",
    "texto": "Você planeja coletar e analisar detalhes de eventos para cinco máquinas virtuais do Azure.\nVocê precisa executar consultas para comparar os detalhes de eventos coletados de todas as máquinas virtuais.\nQuais duas ferramentas você deve usar? Cada resposta correta apresenta parte da solução.\nNOTA: Cada seleção correta vale um ponto.",
    "opcoes": ["Azure Service Health", "Azure Service Bus", "Azure Monitor", "Azure Advisor", "Log Analytics"],
    "respostas": [2, 4],
    "explicacao": "O Log Analytics: use esta ferramenta primária no portal do Azure para editar consultas de log e analisar seus resultados de forma interativa. Mesmo que você pretenda usar uma consulta de log em outro lugar no Azure Monitor, normalmente você a escreverá e testará no Log Analytics antes de copiá-la para seu local final.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-monitor/logs/log-query-overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 40 (banco original Q423)
  {
    "tipo": "unica",
    "texto": "Você tem um aplicativo Web em execução no Azure.\nVocê precisa identificar o tempo que leva para as páginas Web carregarem no navegador de um usuário.\nO que você deve usar?",
    "opcoes": ["alertas do Azure Monitor", "Application Insights no Azure Monitor", "Log Analytics", "Azure Network Watcher"],
    "resposta": 1,
    "explicacao": "O Azure Application Insights é um recurso do Azure Monitor que permite monitorar aplicativos em execução, detectar automaticamente anomalias de desempenho e usar ferramentas de análise integradas para ver o que os usuários fazem em um aplicativo.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-monitor/app/app-insights-overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 41 (banco original Q429)
  {
    "tipo": "multipla",
    "texto": "Quais dois recursos ou serviços podem ser integrados ao Azure Monitor? Cada resposta correta apresenta parte da solução.\nNOTA: Cada resposta correta vale um ponto.",
    "opcoes": ["Status do Azure (Azure status)", "Application Insights", "Azure Advisor", "Log Analytics", "Azure Service Health"],
    "respostas": [1, 3],
    "explicacao": "O Application Insights é uma extensão do Azure Monitor que fornece Gerenciamento de Desempenho de Aplicativos (APM) aprofundado. Ele permite monitorar aplicativos Web ativos, detectando automaticamente anomalias de desempenho, registrando exceções e rastreando a telemetria de comportamento do usuário nativamente dentro do Azure Monitor. O Log Analytics é a ferramenta e repositório principal dentro do Azure Monitor usado para editar, executar e analisar consultas de log contra dados coletados de vários recursos de nuvem. Todos os dados de log ingeridos no Azure Monitor são armazenados e consultados em um workspace do Log Analytics.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-monitor/app/app-insights-overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 42 (banco original Q438)
  {
    "tipo": "unica",
    "texto": "Onde o Azure Monitor armazena dados de eventos?",
    "opcoes": [
      "uma conta de Armazenamento de Blobs do Azure",
      "Fila de Armazenamento do Azure",
      "Banco de Dados SQL do Azure",
      "um workspace do Log Analytics"
    ],
    "resposta": 3,
    "explicacao": "O Azure Monitor armazena dados de eventos em um workspace do Log Analytics. Este é um ambiente único para dados de log do Azure Monitor, onde você pode usar o Log Analytics para analisar dados coletados entre múltiplas fontes. Cada workspace tem seu próprio repositório de dados e configuração, e fontes de dados e soluções são configuradas para armazenar seus dados em um workspace.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-monitor/logs/log-analytics-workspace-overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 43 (banco original Q441)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Se um grupo de recursos chamado RG1 tiver um bloqueio de exclusão, <combobox> excluir RG1.",
    "opcoes": [
      "Escolha uma opção",
      "somente um membro do grupo de administradores globais poderá",
      "o bloqueio de exclusão deverá ser removido antes que um administrador possa",
      "uma política do Azure deverá ser modificada antes que um administrador possa",
      "uma marca do Azure deverá ser adicionada antes que um administrador possa"
    ],
    "resposta": 1,
    "explicacao": "O bloqueio de exclusão deve ser removido antes que um administrador possa excluir o grupo de recursos.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/lock-resources",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 44 (banco original Q458)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Azure Advisor oferece suporte a alertas.",
      "As recomendações do Azure Advisor podem ser filtradas por Unidade Administrativa (Administrative unit).",
      "O Azure Advisor fornece recomendações sobre como melhorar o desempenho de recursos."
    ],
    "respostas": [true, false, true],
    "explicacao": "O Azure Advisor se integra nativamente com os Alertas do Azure Monitor — isso permite configurar limites de notificação automatizados, de modo que, no momento em que uma nova recomendação crítica é gerada (como uma vulnerabilidade de segurança crítica ou uma oportunidade urgente de economia de custos), um alerta é disparado para notificar as equipes de engenharia via e-mail, SMS, notificações push ou webhooks. Unidades Administrativas (UAs) são um recurso de contêiner lógico específico do Microsoft Entra ID, usado estritamente para delegar controle administrativo sobre contas de usuário, grupos e objetos de dispositivo. O Azure Advisor, por outro lado, opera dentro do escopo hierárquico do Azure Resource Manager (ARM). Consequentemente, as recomendações do Advisor podem ser filtradas por assinaturas, grupos de recursos, marcas de carga de trabalho, ou status da recomendação — não por limites de diretório de identidade como Unidades Administrativas. O desempenho é um dos cinco pilares centrais do Microsoft Well-Architected Framework que o Azure Advisor avalia continuamente. Ele monitora métricas de ativos (como CPU, gargalos de rede, desempenho de disco ou configurações de banco de dados desatualizadas) e apresenta recomendações práticas de otimização para melhorar a responsividade, aumentar a taxa de transferência ou resolver restrições críticas de recursos.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/advisor-overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 45 (banco original Q464)
  {
    "tipo": "comboboxs",
    "texto": "Você precisa identificar quais painéis (blades) no portal do Azure devem ser usados para realizar as seguintes tarefas:\n• Visualizar recomendações de segurança.\n• Monitorar a integridade dos serviços do Azure.\nQual painel você deve identificar para cada tarefa? Para responder, selecione as opções apropriadas na área de resposta.",
    "pares": [
      {
        "requisito": "Monitorar a integridade dos serviços do Azure:",
        "opcoes": ["Monitor", "Assinaturas (Subscriptions)", "Marketplace", "Advisor"],
        "resposta": 0
      },
      {
        "requisito": "Visualizar recomendações de segurança:",
        "opcoes": ["Monitor", "Assinaturas (Subscriptions)", "Marketplace", "Advisor"],
        "resposta": 3
      }
    ],
    "explicacao": "Painel 1 — Monitorar a integridade dos serviços do Azure → Monitor. O Azure Monitor é o hub de gerenciamento centralizado para coletar, analisar e agir sobre a telemetria de seus ambientes de nuvem e locais — dentro do ecossistema do Azure Monitor, você pode rastrear o desempenho da infraestrutura, a integridade dos serviços e alertas em um único local. Painel 2 — Visualizar recomendações de segurança → Advisor. O Azure Advisor fornece uma visão consistente e consolidada de recomendações para todos os seus recursos do Azure, integrando-se ao Microsoft Defender for Cloud para trazer recomendações de segurança na aba Segurança do painel do Advisor.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/advisor-overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 46 (banco original Q466)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você pode usar <combobox> para fazer recomendações sobre economia de custos.",
    "opcoes": ["Escolha uma opção", "Application Insights", "Azure Advisor", "marcas de recursos do Azure (Azure resource tags)", "Azure Service Health"],
    "resposta": 1,
    "explicacao": "O Azure Advisor é um consultor de nuvem personalizado, fornecido pela Microsoft Azure, que oferece recomendações de melhores práticas para otimizar suas implantações do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/advisor-overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  },
  // Questao 47 (banco original Q474) — ÚLTIMA QUESTÃO DO BANCO COMPLETO
  {
    "tipo": "unica",
    "texto": "O que você pode usar para fazer recomendações que reduzirão os custos do Azure?",
    "opcoes": ["Azure Advisor", "Log Analytics", "Azure Service Health", "a calculadora de preços do Azure"],
    "resposta": 0,
    "explicacao": "O Azure Advisor é um consultor de nuvem personalizado que ajuda você a seguir as melhores práticas para otimizar suas implantações do Azure. Ele fornece recomendações para reduzir custos, melhorar o desempenho, aprimorar a segurança e garantir alta disponibilidade. Especificamente para redução de custos, o Azure Advisor analisa as configurações de seus recursos e padrões de uso, e então identifica oportunidades para reduzir seus gastos gerais. Isso pode incluir recomendações como redimensionar ou desligar recursos subutilizados, adotar instâncias reservadas, e mais.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/advisor-overview",
    "dominio": "Descrever as ferramentas de monitoramento no Azure",
    "simulado": "az-2026-bloco10"
  }

];