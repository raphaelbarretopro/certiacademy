// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AZ-900
// ==========================================

export const questoes = [

  
 // Questao 02
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Purview fornece backup de dados.",
      "O Microsoft Purview fornece descoberta de dados.",
      "O Microsoft Purview fornece classificação de dados."
    ],
    "respostas": [false, true, true],
    "explicacao": "O Microsoft Purview não é uma ferramenta de backup de dados, mas oferece funcionalidades de governança de dados, como descoberta, classificação, mapeamento e catalogação de dados em toda a organização.",
    "link": "https://learn.microsoft.com/pt-br/azure/purview/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 03
  {
    "tipo": "unica",
    "texto": "Você tem uma conta de armazenamento que tem um bloqueio somente leitura. O que o proprietário da conta pode fazer na conta de armazenamento?",
    "opcoes": [
      "Modificar as permissões da conta de armazenamento.",
      "Definir Tipo de bloqueio como Excluir.",
      "Remover o bloqueio.",
      "Renomear o bloqueio."
    ],
    "resposta": 2,
    "explicacao": "No Azure, um bloqueio de somente leitura (Read-only lock) impede que recursos sejam modificados ou excluídos. No entanto, o proprietário da conta (ou qualquer usuário com permissões apropriadas, como Owner ou User Access Administrator) pode remover o bloqueio, pois ele tem controle total sobre os recursos.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/lock-resources",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
   // Questao 05
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Se um grupo de recursos chamado RG1 tiver um bloqueio de exclusão, <combobox> excluir RG1.",
    "opcoes": [
      "Selecione uma resposta",
      "somente um membro do grupo de administradores globais poderá",
      "o bloqueio de exclusão deverá ser removido antes que um administrador possa",
      "uma Azure Policy deverá ser modificada antes que um administrador possa",
      "uma marca do Azure deverá ser adicionada antes que um administrador possa"
    ],
    "resposta": 2,
    "explicacao": "Os bloqueios de exclusão no Azure impedem que recursos protegidos sejam excluídos. Para permitir a exclusão, o bloqueio deve ser removido manualmente por alguém com permissões adequadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/lock-resources",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 06
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> oferece uma visão geral da integridade dos serviços e regiões do Azure.",
    "opcoes": [
      "Selecione uma resposta",
      "Azure Monitor",
      "Azure Resource Health",
      "Integridade do Serviço do Azure",
      "Status do Azure"
    ],
    "resposta": 4,
    "explicacao": "O site Status do Azure fornece uma visão geral pública da integridade dos serviços do Azure em todas as regiões. Ele mostra interrupções e degradações conhecidas em tempo quase real.",
    "link": "https://learn.microsoft.com/pt-br/azure/service-health/azure-status-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 08
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
    "grupos": ["Área de Resposta"],
    "respostas": {
      "Área de Resposta": ["Bloqueios"]
    },
    "explicacao": "A opção 'Bloqueios' permite proteger os recursos de exclusões acidentais, aplicando bloqueios de exclusão ou somente leitura no grupo de recursos ou recursos específicos.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/lock-resources",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 09
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A calculadora de TCO (custo total de propriedade) exibe o custo da execução de cargas de trabalho em um datacenter.",
      "A calculadora de TCO (custo total de propriedade) exibe o custo da execução de cargas de trabalho no Azure.",
      "A calculadora de TCO (custo total de propriedade) gera relatórios gráficos."
    ],
    "respostas": [true, false, true],
    "explicacao": "A calculadora de TCO permite estimar os custos atuais de infraestrutura local (como em datacenters) para compará-los com os custos no Azure, mas não exibe os custos de execução diretamente no Azure. Além disso, ela fornece relatórios gráficos que ajudam na visualização dos dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/migrate/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 10
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode configurar os logs de atividade do Microsoft Entra para aparecerem no Azure Monitor.",
      "No Azure Monitor, você pode criar alertas.",
      "No Azure Monitor, você pode monitorar recursos em várias assinaturas do Azure."
    ],
    "respostas": [true, true, true],
    "explicacao": "O Azure Monitor permite a centralização de dados de telemetria, incluindo logs de atividade do Microsoft Entra. Ele também oferece suporte à criação de alertas com base em métricas e logs, além de permitir a visualização e análise de dados em várias assinaturas do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-monitor/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 11
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Adicionar grupos de recursos em uma assinatura do Azure gera custos adicionais.",
      "Copiar 10 GB de dados no Azure de uma rede local por uma VPN gera custos adicionais de transferência de dados do Azure.",
      "Copiar 10 GB de dados do Azure para uma rede local por uma VPN gera custos adicionais de transferência de dados do Azure."
    ],
    "respostas": [false, false, true],
    "explicacao": "A criação de grupos de recursos não gera custos adicionais. A transferência de dados de entrada para o Azure (de fora para dentro) é gratuita. No entanto, a transferência de dados de saída (do Azure para fora, como uma rede local via VPN) pode gerar custos adicionais conforme a política de preços de banda.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/azure-subscription-service-limits",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
   // Questao 12
  {
    "tipo": "unica",
    "texto": "Você precisa ser notificado de quando a Microsoft pretende realizar a manutenção que pode afetar os recursos em uma assinatura do Azure. O que você deve usar?",
    "opcoes": [
      "Azure Monitor",
      "Integridade do Serviço do Azure",
      "Assistente do Azure",
      "Central de Confiabilidade da Microsoft"
    ],
    "resposta": 1,
    "explicacao": "A 'Integridade do Serviço do Azure' fornece notificações personalizadas sobre eventos de manutenção planejada e problemas que afetam os serviços em suas assinaturas. É a ferramenta recomendada para acompanhar o impacto direto sobre seus recursos.",
    "link": "https://learn.microsoft.com/pt-br/azure/service-health/service-health-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 13 - img/azb1q13.png
  {
    "tipo": "unica",
    "texto": "Você precisa gerenciar o Azure usando o Azure Cloud Shell. Qual ícone do portal do Azure você deve selecionar? Para responder, selecione o ícone apropriado na área de resposta.",
    "imagemUrl": "img/azb1q13.png",
    "opcoes": [
      "Ícone 1",
      "Ícone 2",
      "Ícone 3",
      "Ícone 4",
      "Ícone 5",
      "Ícone 6",
      "Ícone 7"
    ],
    "resposta": 2,
    "explicacao": "O Azure Cloud Shell pode ser acessado diretamente pelo ícone em forma de prompt (>) no canto superior direito do portal do Azure. Ele permite executar scripts e comandos em Bash ou PowerShell diretamente no navegador.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-shell/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
   // Questao 15
  {
    "tipo": "unica",
    "texto": "Sua empresa tem uma assinatura do Azure que contém recursos em várias regiões. Você precisa garantir que os administradores possam criar recursos apenas nessas regiões. O que você deve usar?",
    "opcoes": [
      "um grupo de gerenciamento",
      "uma política do Azure",
      "um bloqueio somente leitura",
      "uma reserva"
    ],
    "resposta": 1,
    "explicacao": "As políticas do Azure permitem restringir ações e impor regras de conformidade, como limitar a criação de recursos a regiões específicas. Isso ajuda a garantir que os recursos estejam alinhados com as diretrizes da organização.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 17
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Uma assinatura do Azure pode ser associada a vários locatários do Microsoft Entra.",
      "Você pode alterar o locatário do Microsoft Entra ao qual uma assinatura do Azure está associada.",
      "Quando uma assinatura do Azure expira, o locatário do Microsoft Entra associado é excluído automaticamente."
    ],
    "respostas": [false, true, false],
    "explicacao": "Uma assinatura do Azure só pode estar associada a um único locatário do Microsoft Entra por vez. No entanto, é possível transferir uma assinatura para outro locatário. A expiração de uma assinatura não exclui automaticamente o locatário do Microsoft Entra.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/fundamentals/active-directory-how-subscriptions-associated-directory",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 18
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Uma única conta da Microsoft pode ser usada para gerenciar várias assinaturas do Azure.",
      "Duas assinaturas do Azure podem ser mescladas em uma única assinatura.",
      "Uma empresa pode usar recursos de várias assinaturas do Azure."
    ],
    "respostas": [true, false, true],
    "explicacao": "Uma única conta da Microsoft pode ter acesso a várias assinaturas do Azure. No entanto, assinaturas do Azure não podem ser mescladas. É possível que uma organização utilize múltiplas assinaturas para segmentar cargas de trabalho ou departamentos e ainda assim compartilhar recursos entre elas usando, por exemplo, grupos de gerenciamento e redes conectadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/manage/manage-billing-access",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
   // Questao 20
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Entra pode ser usado para gerenciar o acesso aos aplicativos locais.",
      "O Microsoft Entra fornece SSO (logon único).",
      "Os dispositivos iOS podem ser registrados em um locatário do Microsoft Entra."
    ],
    "respostas": [true, true, true],
    "explicacao": "O Microsoft Entra (anteriormente Azure AD) permite o gerenciamento de acesso a aplicativos locais por meio de integração com serviços como o Azure AD Application Proxy. Ele também oferece suporte a logon único (SSO) e permite o registro de dispositivos, inclusive iOS, para controle de acesso baseado em identidade.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/whatis",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 21
  {
    "tipo": "unica",
    "texto": "Sua empresa pretende começar a usar o Azure e migrará todos os recursos de rede para o Azure. Você precisa iniciar o processo de planejamento explorando o Azure. O que você deve criar primeiro?",
    "opcoes": [
      "um grupo de gerenciamento",
      "um grupo de recursos",
      "uma assinatura",
      "uma rede virtual"
    ],
    "resposta": 2,
    "explicacao": "A assinatura é a unidade básica para uso do Azure, pois é através dela que os serviços são ativados, monitorados e cobrados. Sem uma assinatura, não é possível provisionar ou gerenciar recursos no portal.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/manage/create-subscription",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },

];
