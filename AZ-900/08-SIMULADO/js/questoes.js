// ==========================================
// Arquivo: questoes_bloco08.js
// Descrição: Simulado AZ-900 (fonte: CertyIQ, versão 2026) — tradução PT-BR
// BLOCO 8 de 10 — Descrever o gerenciamento de custos no Azure / Descrever os
// recursos e as ferramentas de governança e conformidade no Azure
// (fatores de custo; calculadora de preços; Cost Management; marcas (tags);
//  Microsoft Purview; Azure Policy; bloqueios de recursos)
// 48 questões — distribuição balanceada conforme guia oficial de estudos AZ-900
//
// CORRESPONDÊNCIA COM O BANCO ORIGINAL (numeração do PDF em inglês, em ordem):
// 1, 3, 138, 188, 189, 197, 209, 236, 272, 277, 280, 284, 285, 291, 292, 293, 294, 296,
// 298, 302, 303, 304, 311, 312, 313, 314, 316, 318, 319, 321, 324, 327, 329, 346, 347,
// 355, 357, 358, 359, 367, 368, 371, 373, 407, 412, 421, 460, 468
//
// ATENÇÃO — CONTRADIÇÃO INTERNA NO BANCO ORIGINAL:
// A Q1 (drag-drop) exclui o plano Premier como opção que permite abrir novos chamados
// de suporte, mas a Q34 (Q368 original), no mesmo banco, afirma explicitamente que TODOS
// os 5 planos (Basic, Developer, Standard, Professional Direct e Premier) permitem abrir
// chamados de suporte. Mantive cada questão fiel à sua própria fonte, mas sinalizo a
// inconsistência para revisão.
// ==========================================

export const questoes = [

  // Questao 01 (banco original Q1)
  {
    "tipo": "dragdrop",
    "texto": "Sua empresa pretende assinar um plano de suporte do Azure. O plano de suporte deve permitir que novos chamados de suporte sejam abertos. Quais das opções a seguir são planos de suporte que permitem isso? Responda arrastando a opção correta da lista para a área de resposta.",
    "itens": [
      { "label": "Basic" },
      { "label": "Developer" },
      { "label": "Standard" },
      { "label": "Professional Direct" },
      { "label": "Premier" }
    ],
    "grupos": ["1", "2", "3", "4"],
    "respostas": {
      "1": ["Basic"],
      "2": ["Developer"],
      "3": ["Standard"],
      "4": ["Professional Direct"]
    },
    "explicacao": "Segundo a fonte original, os planos Basic, Developer, Standard e Professional Direct permitem abrir novos chamados de suporte. Nota: esta questão contradiz uma outra do mesmo banco (Q368 original, presente mais adiante neste bloco), que afirma que todos os 5 planos — incluindo o Premier — permitem abrir chamados de suporte. Recomenda-se verificar a documentação oficial atualizada da Microsoft antes de usar esta questão em avaliação.",
    "link": "https://azure.microsoft.com/pt-br/support/plans/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 02 (banco original Q3) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Sua empresa tem datacenters em Los Angeles e Nova York. A empresa tem uma assinatura do Microsoft Azure. Você está configurando os dois datacenters como sites geoclusterizados para resiliência do site.\nVocê precisa recomendar uma opção de redundância de armazenamento do Azure. Você tem os seguintes requisitos de armazenamento de dados:\n• Os dados devem ser armazenados em vários nós.\n• Os dados devem ser armazenados em nós localizados em regiões geográficas separadas.\n• Os dados NÃO podem ser lidos a partir do local secundário se o local primário estiver acessível.\nQual das seguintes opções de redundância de armazenamento do Azure você deve recomendar?",
    "opcoes": [
      "Armazenamento georredundante (GRS)",
      "Armazenamento georredundante com acesso de leitura (RA-GRS)",
      "Armazenamento com redundância de zona (ZRS)",
      "Armazenamento com redundância local (LRS)"
    ],
    "resposta": 0,
    "explicacao": "O Armazenamento Georredundante (GRS) replica seus dados de forma síncrona três vezes na região primária, e depois de forma assíncrona para a região secundária. Como o requisito é que os dados NÃO possam ser lidos do local secundário enquanto o local primário estiver acessível, o GRS padrão (sem acesso de leitura) é a opção correta — diferente do RA-GRS, que habilitaria justamente esse acesso de leitura ao local secundário.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/common/storage-redundancy",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 03 (banco original Q138)
  {
    "tipo": "dragdrop",
    "texto": "Associe o recurso de governança do Azure à descrição correta. Cada recurso pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Azure Blueprints" },
      { "label": "Azure Policy" },
      { "label": "Bloqueios de recursos do Azure" },
      { "label": "Marcas (tags) do Azure" }
    ],
    "grupos": [
      "Restringir quais tipos de máquina virtual podem ser criados em uma assinatura.",
      "Identificar recursos do Azure que estão associados a centros de custo específicos.",
      "Implantar um ambiente completo de aplicativo do Azure, incluindo configuração de recursos e atribuições de função."
    ],
    "respostas": {
      "Restringir quais tipos de máquina virtual podem ser criados em uma assinatura.": ["Azure Policy"],
      "Identificar recursos do Azure que estão associados a centros de custo específicos.": ["Marcas (tags) do Azure"],
      "Implantar um ambiente completo de aplicativo do Azure, incluindo configuração de recursos e atribuições de função.": ["Azure Blueprints"]
    },
    "explicacao": "O Azure Policy é uma ferramenta de governança usada para criar, atribuir e gerenciar políticas que impõem regras sobre seus recursos corporativos — um caso de uso clássico é atribuir uma política interna que restrinja ou bloqueie a implantação de determinados tipos/SKUs de VM caros, controlando rigorosamente os custos de linha de base. As marcas (tags) do Azure são elementos de metadados simples aplicados diretamente aos seus recursos de nuvem, consistindo em um par de chave/valor definido pelo usuário — elas permitem categorizar e organizar recursos logicamente fora da hierarquia estrutural rígida de assinatura/grupo de recursos, sendo essenciais para alocação de custos corporativos complexos e agregação de faturamento no Cost Management. O Azure Blueprints permite que arquitetos de nuvem definam um conjunto repetível e orquestrável de artefatos do Azure, em conformidade com os padrões, modelos e requisitos de uma organização — diferente de ferramentas de infraestrutura como código (como modelos ARM), que focam puramente em implantar recursos específicos, um blueprint empacota vários componentes fundamentais em um único pacote, podendo orquestrar simultaneamente atribuições de função (configurações RBAC para equipes), atribuições de política (restrições de governança), modelos ARM e grupos de recursos.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/blueprints/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 04 (banco original Q188)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você pode acessar o Compliance Manager a partir do(a) <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "centro de administração do Microsoft Entra ID",
      "portal do Azure",
      "centro de administração do Microsoft 365",
      "Microsoft Service Trust Portal"
    ],
    "resposta": 2,
    "explicacao": "O Compliance Manager foi movido do Service Trust Portal para seu novo local no centro de conformidade (compliance center) do Microsoft 365. Todos os dados do cliente foram transferidos para o novo local, então é possível continuar usando o Compliance Manager sem interrupções. Embora a versão clássica do Compliance Manager permaneça no Service Trust Portal, todos os usuários são incentivados a usar o Compliance Manager no centro de administração do Microsoft 365.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/get-started-with-service-trust-portal?view=o365-worldwide",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 05 (banco original Q189)
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
    "explicacao": "Modelos do Azure Resource Manager fornecem uma plataforma comum para implantar objetos em uma infraestrutura de nuvem e para implementar consistência em todo o ambiente do Azure. As políticas do Azure são usadas para definir regras sobre o que pode ser implantado e como deve ser implantado. Embora isso possa ajudar a garantir consistência, as políticas do Azure não fornecem, por si só, a plataforma comum para implantar objetos em uma infraestrutura de nuvem.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 06 (banco original Q197)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode usar o Gerenciamento de Custos do Azure para visualizar custos associados a grupos de gerenciamento.",
      "Você pode usar o Gerenciamento de Custos do Azure para visualizar custos associados a grupos de recursos.",
      "Você pode usar o Gerenciamento de Custos do Azure para visualizar o uso de máquinas virtuais durante os últimos três meses."
    ],
    "respostas": [true, true, true],
    "explicacao": "O Gerenciamento de Custos do Azure permite visualizar custos associados a grupos de gerenciamento. O Gerenciamento de Custos do Azure permite, sim, visualizar custos associados a grupos de recursos. O Gerenciamento de Custos do Azure permite visualizar o uso de VMs ao longo de um período especificado, incluindo os últimos três meses.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/costs/understand-cost-mgt-data",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 07 (banco original Q209)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> fornece informações detalhadas sobre segurança, privacidade, ofertas de conformidade e recursos em todos os produtos de nuvem da Microsoft.",
    "opcoes": [
      "Escolha uma opção",
      "o centro de administração de Conformidade do Microsoft 365",
      "o portal do Microsoft 365 Defender",
      "o Microsoft Defender for Cloud no portal do Azure",
      "o Microsoft Trust Center"
    ],
    "resposta": 3,
    "explicacao": "O recurso da Microsoft que fornece informações detalhadas sobre segurança, privacidade, ofertas de conformidade, políticas e recursos em todos os produtos de nuvem da Microsoft é chamado de Microsoft Trust Center. O Trust Center é um hub centralizado que oferece recursos e documentação abrangentes para ajudar os clientes a entender e avaliar as capacidades de segurança e conformidade dos serviços de Nuvem da Microsoft.",
    "link": "https://www.microsoft.com/pt-br/trust-center",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 08 (banco original Q236)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Uma definição de iniciativa do Azure Policy é uma <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "coleção de definições de política",
      "coleção de atribuições de definição de Azure Policy",
      "grupo de definições de Azure Blueprints",
      "grupo de atribuições de função de controle de acesso baseado em função (RBAC)"
    ],
    "resposta": 1,
    "explicacao": "Uma definição de iniciativa é uma coleção de definições de política que são adaptadas para atingir um único objetivo abrangente. Definições de iniciativa simplificam o gerenciamento e a atribuição de definições de política. Elas simplificam ao agrupar um conjunto de políticas como um único item. Por exemplo, você poderia criar uma iniciativa chamada 'Habilitar Monitoramento no Microsoft Defender for Cloud', com o objetivo de monitorar todas as recomendações de segurança disponíveis em sua instância do Microsoft Defender for Cloud.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview#initiative-definition",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 09 (banco original Q272)
  {
    "tipo": "dragdrop",
    "texto": "Associe o termo à definição correta. Cada termo pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Azure Governamental" },
      { "label": "GDPR (RGPD)" },
      { "label": "ISO" },
      { "label": "NIST" }
    ],
    "grupos": [
      "Uma organização que define padrões internacionais em todos os setores.",
      "Uma organização que define padrões usados pelo governo dos Estados Unidos.",
      "Uma política europeia que regula a privacidade e a proteção de dados.",
      "Uma nuvem dedicada para agências federais e estaduais nos Estados Unidos."
    ],
    "respostas": {
      "Uma organização que define padrões internacionais em todos os setores.": ["ISO"],
      "Uma organização que define padrões usados pelo governo dos Estados Unidos.": ["NIST"],
      "Uma política europeia que regula a privacidade e a proteção de dados.": ["GDPR (RGPD)"],
      "Uma nuvem dedicada para agências federais e estaduais nos Estados Unidos.": ["Azure Governamental"]
    },
    "explicacao": "A ISO (Organização Internacional de Normalização) define padrões internacionais em todos os setores — empresas podem obter certificações ISO, como ISO 9001 ou ISO 27001, comumente usadas por empresas de TI. O NIST (Instituto Nacional de Padrões e Tecnologia) é um laboratório de ciências físicas e uma agência não regulatória do Departamento de Comércio dos Estados Unidos, definindo padrões usados pelo governo americano. O GDPR (Regulamento Geral de Proteção de Dados) é um padrão adotado em toda a Europa que regula a proteção de dados e privacidade. O Azure Governamental é uma nuvem dedicada para agências federais e estaduais dos Estados Unidos e seus parceiros de solução.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-government/documentation-government-welcome",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 10 (banco original Q277)
  {
    "tipo": "unica",
    "texto": "Você tem um grupo de recursos chamado RG1.\nVocê precisa impedir a criação de máquinas virtuais em RG1. A solução deve garantir que outros objetos possam ser criados em RG1.\nO que você deve usar?",
    "opcoes": ["um bloqueio (lock)", "uma função do Azure", "uma marca (tag)", "uma política do Azure"],
    "resposta": 3,
    "explicacao": "Políticas do Azure podem ser usadas para definir requisitos para propriedades de recursos durante a implantação e para recursos já existentes. O Azure Policy controla propriedades como os tipos ou locais de recursos. Nesta questão, criaríamos uma política do Azure atribuída ao grupo de recursos que nega a criação de máquinas virtuais no grupo de recursos. Você poderia colocar um bloqueio somente leitura no grupo de recursos, mas isso impediria a criação de qualquer recurso no grupo de recursos, não apenas máquinas virtuais. Portanto, uma Política do Azure é a melhor solução.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 11 (banco original Q280)
  {
    "tipo": "unica",
    "texto": "O que você deve usar para avaliar se o ambiente do Azure da sua empresa atende aos requisitos regulatórios?",
    "opcoes": [
      "o site do Knowledge Center",
      "o painel Advisor no portal do Azure",
      "o Compliance Manager do Service Trust Portal",
      "o painel Soluções no portal do Azure"
    ],
    "resposta": 2,
    "explicacao": "O Compliance Manager no Service Trust Portal é uma ferramenta de avaliação de risco baseada em fluxo de trabalho que ajuda a rastrear, atribuir e verificar as atividades de conformidade regulatória da sua organização relacionadas aos serviços de Nuvem da Microsoft, como Microsoft 365, Dynamics 365 e Azure. O Compliance Manager foi movido do Service Trust Portal para seu novo local no centro de conformidade do Microsoft 365.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/get-started-with-service-trust-portal?view=o365-worldwide",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 12 (banco original Q284)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você tem uma rede virtual do Azure chamada VNET1 em um grupo de recursos chamado RG1. Você atribui a definição de Azure Policy \"Tipo de Recurso Não Permitido\" e especifica que redes virtuais não são um tipo de recurso permitido em RG1. VNET1 <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "é excluída automaticamente.",
      "é movida automaticamente para outro grupo de recursos.",
      "continua a funcionar normalmente.",
      "é agora um objeto somente leitura."
    ],
    "resposta": 2,
    "explicacao": "A VNET será marcada como 'Não conforme' quando a política for atribuída. No entanto, ela não será excluída e continuará a funcionar normalmente. O Azure Policy é um serviço no Azure usado para criar, atribuir e gerenciar políticas. Essas políticas impõem diferentes regras e efeitos sobre seus recursos, para que esses recursos permaneçam em conformidade com seus padrões corporativos e contratos de nível de serviço. Se houver recursos existentes que não estejam em conformidade com uma nova atribuição de política, eles aparecerão em Recursos não conformes.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 13 (banco original Q285)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Trust Center faz parte do Microsoft Defender for Cloud (anteriormente Azure Security Center).",
      "O Trust Center só pode ser acessado por usuários que têm uma assinatura do Azure.",
      "O Trust Center fornece informações sobre as ofertas de conformidade do Azure."
    ],
    "respostas": [false, false, true],
    "explicacao": "O Trust Center é um recurso público independente, não fazendo parte do Microsoft Defender for Cloud. Ele pode ser acessado por qualquer pessoa, mesmo sem uma assinatura do Azure. O Trust Center fornece, de fato, informações sobre as ofertas de conformidade do Azure.",
    "link": "https://www.microsoft.com/pt-br/trust-center",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 14 (banco original Q291)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você pode revisar relatórios de auditoria e informações relacionadas à conformidade para serviços do Azure a partir do(a) <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "Microsoft Defender for Cloud",
      "centro de administração do Microsoft Defender for Identity",
      "centro de Conformidade do Microsoft 365",
      "Microsoft Service Trust Portal"
    ],
    "resposta": 3,
    "explicacao": "O Microsoft Service Trust Portal fornece uma variedade de conteúdo, ferramentas e outros recursos sobre práticas de segurança, privacidade e conformidade da Microsoft, incluindo relatórios de auditoria e um vasto acervo de informações de implementação de segurança e design com o objetivo de facilitar o atendimento aos objetivos de conformidade regulatória.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/get-started-with-service-trust-portal?view=o365-worldwide",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 15 (banco original Q292)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Service Trust Portal pode ser acessado usando uma conta de serviços de nuvem da Microsoft.",
      "O Compliance Manager pode ser usado para rastrear as atividades de conformidade regulatória da sua empresa relacionadas a serviços de nuvem da Microsoft.",
      "O recurso Minha Biblioteca (My Library) pode ser usado para salvar documentos e recursos do Microsoft Service Trust Portal em um único local."
    ],
    "respostas": [true, true, true],
    "explicacao": "O Microsoft Purview Compliance Manager é um recurso do portal de conformidade do Microsoft Purview que ajuda você a gerenciar os requisitos de conformidade multinuvem da sua organização com mais facilidade e conveniência. O Compliance Manager pode ajudá-lo ao longo de sua jornada de conformidade, desde fazer o inventário dos riscos de proteção de dados até gerenciar as complexidades de implementação de controles, manter-se atualizado com regulamentações e certificações, e reportar aos auditores. A seção 'Todos os documentos' exibe todos os documentos disponíveis. Selecione os documentos para salvar na seção 'Minha Biblioteca'.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/compliance-manager",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 16 (banco original Q293)
  {
    "tipo": "unica",
    "texto": "Sua empresa tem uma assinatura do Azure que contém recursos em várias regiões.\nVocê precisa criar o recurso do Azure que deve ser usado para atender ao requisito de política.\nO que você deve criar?",
    "opcoes": ["um bloqueio somente leitura", "uma política do Azure", "um grupo de gerenciamento", "uma reserva"],
    "resposta": 1,
    "explicacao": "Políticas do Azure podem ser usadas para definir requisitos para propriedades de recursos durante a implantação e para recursos já existentes. O Azure Policy controla propriedades como os tipos ou locais de recursos. O Azure Policy atende a essa necessidade avaliando seus recursos quanto à não conformidade com políticas atribuídas. Todos os dados armazenados pelo Azure Policy são criptografados em repouso. O Azure Policy oferece diversas políticas internas disponíveis por padrão. Nesta questão, usaríamos a política 'Locais Permitidos' para definir os locais onde os recursos podem ser implantados.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 17 (banco original Q294)
  {
    "tipo": "unica",
    "texto": "Esta questão exige que você avalie o texto sublinhado para determinar se está correto.\nA partir do Azure Cloud Shell, você pode rastrear os padrões e regulamentações regulatórias da sua empresa, como a ISO 27001.\nInstruções: Revise o texto sublinhado. Se ele tornar a afirmação correta, selecione \"Nenhuma alteração é necessária\". Se a afirmação estiver incorreta, selecione a opção que a torna correta.",
    "opcoes": ["Nenhuma alteração é necessária", "o Microsoft Cloud Partner Portal", "o Compliance Manager", "o Trust Center"],
    "resposta": 2,
    "explicacao": "Antigamente era chamado de 'Trust Center', mas agora é chamado de Microsoft Purview Compliance Manager. O Microsoft Compliance Manager é uma ferramenta gratuita, baseada em fluxo de trabalho, de avaliação de risco que permite rastrear, atribuir e verificar atividades de conformidade regulatória relacionadas aos serviços de nuvem da Microsoft. O Azure Cloud Shell, por outro lado, é um shell interativo, autenticado e acessível pelo navegador, para gerenciar recursos do Azure — não sendo usado para rastrear padrões regulatórios.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/compliance-manager-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 18 (banco original Q296)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> explica quais dados a Microsoft processa, como a Microsoft processa esses dados, e a finalidade do processamento desses dados.",
    "opcoes": [
      "Escolha uma opção",
      "A Declaração de Privacidade dos Serviços Online da Microsoft",
      "Os Termos de Produto da Microsoft",
      "O Contrato de Nível de Serviço Online da Microsoft",
      "O Contrato de Assinatura Online para o Microsoft Azure"
    ],
    "resposta": 1,
    "explicacao": "A Declaração de Privacidade da Microsoft explica quais dados pessoais a Microsoft processa, como a Microsoft os processa, e a finalidade do processamento desses dados.",
    "link": "https://privacy.microsoft.com/pt-br/privacystatement",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 19 (banco original Q298)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Uma definição de iniciativa do Azure Policy é uma <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "coleção de definições de política",
      "coleção de atribuições de definição de Azure Policy",
      "grupo de definições de Azure Blueprints",
      "grupo de atribuições de função de controle de acesso baseado em função (RBAC)"
    ],
    "resposta": 1,
    "explicacao": "Uma definição de iniciativa é uma coleção de definições de política que são adaptadas para atingir um único objetivo abrangente. Definições de iniciativa simplificam o gerenciamento e a atribuição de definições de política, agrupando um conjunto de políticas como um único item.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview#initiative-definition",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 20 (banco original Q302)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Azure China é operado pela Microsoft.",
      "O Azure Governamental é operado pela Microsoft.",
      "O Azure Governamental está disponível somente para agências governamentais dos EUA e seus parceiros."
    ],
    "respostas": [false, true, true],
    "explicacao": "O Microsoft Azure operado pela 21Vianet (Azure China) é uma instância fisicamente separada de serviços de nuvem localizada na China. É operado e transacionado de forma independente pela Shanghai Blue Cloud Technology Co., Ltd. ('21Vianet'), uma subsidiária integral da Beijing 21Vianet Broadband Data Center Co., Ltd. — portanto, não é operado diretamente pela Microsoft. Agências governamentais dos EUA ou seus parceiros interessados em serviços de nuvem que atendam aos requisitos de segurança e conformidade governamentais podem confiar que o Microsoft Azure Governamental oferece segurança e conformidade de classe mundial. O Azure Governamental entrega uma nuvem dedicada, permitindo que agências governamentais e seus parceiros transformem cargas de trabalho de missão crítica para a nuvem. Os serviços do Azure Governamental podem acomodar dados sujeitos a várias regulamentações e requisitos do governo dos EUA — sendo, sim, exclusivos para agências governamentais dos EUA e seus parceiros.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-government/documentation-government-welcome",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 21 (banco original Q303)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um recurso do Azure pode ter vários bloqueios de exclusão (Delete locks).",
      "Um recurso do Azure herda bloqueios do seu grupo de recursos.",
      "Se um recurso do Azure tiver um bloqueio somente leitura (Read-only), você pode adicionar um bloqueio de exclusão ao recurso."
    ],
    "respostas": [true, true, true],
    "explicacao": "No Azure, você pode aplicar múltiplos bloqueios a um recurso. No entanto, apenas um bloqueio de cada tipo (ReadOnly, CanNotDelete) pode ser aplicado a um recurso. Portanto, embora você possa ter vários bloqueios, eles devem ser de tipos diferentes. Recursos do Azure herdam bloqueios de seus grupos de recursos pai. Se um grupo de recursos tiver um bloqueio, todos os recursos dentro desse grupo herdarão o mesmo bloqueio, a menos que seja explicitamente substituído. Você pode adicionar um bloqueio de exclusão (CanNotDelete) a um recurso que já tenha um bloqueio somente leitura. O bloqueio somente leitura impede modificações, enquanto o bloqueio de exclusão impede a exclusão — eles servem a propósitos diferentes e podem coexistir.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/lock-resources",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 22 (banco original Q304)
  {
    "tipo": "unica",
    "texto": "Sua empresa planeja migrar todos os dados locais para o Azure.\nVocê precisa identificar se o Azure está em conformidade com os requisitos regionais da empresa.\nO que você deve usar?",
    "opcoes": ["o Knowledge Center", "o Azure Marketplace", "o portal MyApps", "o Trust Center"],
    "resposta": 3,
    "explicacao": "O Azure possui mais de 90 certificações de conformidade, incluindo mais de 50 específicas para regiões e países globais, como Estados Unidos, União Europeia, Alemanha, Japão, Reino Unido, Índia e China. Você pode visualizar uma lista de certificações de conformidade no Trust Center para determinar se o Azure atende aos seus requisitos regionais.",
    "link": "https://azure.microsoft.com/pt-br/overview/trusted-cloud/compliance/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 23 (banco original Q311)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nSua empresa planeja adquirir uma assinatura do Azure.\nA política de suporte da empresa determina que o ambiente do Azure deve fornecer uma opção de acesso a engenheiros de suporte por telefone ou e-mail.\nVocê precisa recomendar qual plano de suporte atende ao requisito da política de suporte.\nSolução: Recomendar um plano de suporte Basic.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "O plano de suporte Basic normalmente oferece suporte limitado, como acesso a documentação, fóruns comunitários e recursos de autoatendimento. Ele não inclui suporte técnico para solução de problemas, suporte de consultoria ou suporte para contratos de nível de serviço (SLAs). O acesso a engenheiros de suporte por e-mail ou telefone está disponível nos seguintes planos: Premier, Professional Direct e Standard. Portanto, recomendar um plano Basic não atende ao objetivo.",
    "link": "https://azure.microsoft.com/pt-br/support/plans/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 24 (banco original Q312)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nSua empresa planeja adquirir uma assinatura do Azure.\nA política de suporte da empresa determina que o ambiente do Azure deve fornecer uma opção de acesso a engenheiros de suporte por telefone ou e-mail.\nVocê precisa recomendar qual plano de suporte atende ao requisito da política de suporte.\nSolução: Recomendar um plano de suporte Standard.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "Os planos de suporte Standard, Professional Direct e Premier têm suporte técnico de engenheiros por e-mail e telefone — portanto, recomendar um plano Standard atende ao objetivo.",
    "link": "https://azure.microsoft.com/pt-br/support/plans/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 25 (banco original Q313)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nSua empresa planeja adquirir uma assinatura do Azure.\nA política de suporte da empresa determina que o ambiente do Azure deve fornecer uma opção de acesso a engenheiros de suporte por telefone ou e-mail.\nVocê precisa recomendar qual plano de suporte atende ao requisito da política de suporte.\nSolução: Recomendar um plano de suporte Premier.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "Os planos de suporte Standard, Professional Direct e Premier têm suporte técnico de engenheiros por e-mail e telefone — portanto, recomendar um plano Premier atende ao objetivo. Nota: segundo a fonte original, esta questão está \"obsoleta\", já que o plano de suporte Premier foi descontinuado (aposentado) pela Microsoft.",
    "link": "https://azure.microsoft.com/pt-br/support/plans/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 26 (banco original Q314)
  {
    "tipo": "unica",
    "texto": "Sua empresa planeja solicitar à Microsoft uma revisão arquitetônica de um ambiente do Azure.\nA empresa atualmente tem um plano de suporte Basic.\nVocê precisa recomendar um novo plano de suporte para a empresa. A solução deve minimizar os custos.\nQual plano de suporte você deve recomendar?",
    "opcoes": ["Premier", "Developer", "Professional Direct", "Standard"],
    "resposta": 2,
    "explicacao": "O Professional Direct fornece orientação de um grupo de gerentes de entrega ProDirect. Já os planos Developer e Standard fornecem apenas orientação geral, sem esse tipo de revisão arquitetônica especializada.",
    "link": "https://azure.microsoft.com/pt-br/support/plans/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 27 (banco original Q316)
  {
    "tipo": "unica",
    "texto": "O que é necessário para usar o Gerenciamento de Custos do Azure (Azure Cost Management)?",
    "opcoes": [
      "uma assinatura Dev/Test",
      "Software Assurance",
      "um Contrato Enterprise (EA)",
      "uma assinatura de pagamento conforme o uso (pay-as-you-go)"
    ],
    "resposta": 3,
    "explicacao": "É necessária uma assinatura de pagamento conforme o uso para usar o Gerenciamento de Custos do Azure — mas ele também oferece suporte a contas de Contrato Enterprise (EA). A diferença está no tipo de dados gerenciados na ferramenta de Gerenciamento de Custos: o Cost Management inclui todo o uso e compras, incluindo reservas e ofertas de terceiros, para contas de Contrato Enterprise (EA). Contas do Contrato de Cliente Microsoft e assinaturas individuais com taxas de pagamento conforme o uso incluem apenas o uso de serviços do Azure e do Marketplace — suporte e outros custos não estão incluídos.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/costs/understand-cost-mgt-data",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 28 (banco original Q318)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nSua empresa planeja adquirir uma assinatura do Azure.\nA política de suporte da empresa determina que o ambiente do Azure deve fornecer uma opção de acesso a engenheiros de suporte por telefone ou e-mail.\nVocê precisa recomendar qual plano de suporte atende ao requisito da política de suporte.\nSolução: Recomendar um plano de suporte Professional Direct.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "O plano de suporte Basic não tem qualquer suporte técnico de engenheiros. O plano de suporte Developer tem suporte técnico de engenheiros apenas por e-mail. Os planos de suporte Standard, Professional Direct e Premier têm suporte técnico de engenheiros por e-mail e telefone — portanto, recomendar um plano Professional Direct atende ao objetivo.",
    "link": "https://azure.microsoft.com/pt-br/support/plans/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 29 (banco original Q319)
  {
    "tipo": "unica",
    "texto": "Sua empresa tem um contrato de Software Assurance que inclui licenças do Microsoft SQL Server.\nVocê planeja implantar o SQL Server em máquinas virtuais do Azure.\nO que você deve fazer para minimizar os custos de licenciamento da implantação?",
    "opcoes": [
      "Desalocar as máquinas virtuais fora do horário de expediente.",
      "Usar o Azure Hybrid Benefit.",
      "Configurar orçamentos no Gerenciamento de Custos do Azure.",
      "Usar reservas do Azure."
    ],
    "resposta": 1,
    "explicacao": "O Azure Hybrid Benefit é um benefício de licenciamento que ajuda a reduzir significativamente os custos de executar suas cargas de trabalho na nuvem. Ele funciona permitindo que você use suas licenças locais do Windows Server e SQL Server habilitadas para Software Assurance no Azure.",
    "link": "https://azure.microsoft.com/pt-br/pricing/hybrid-benefit/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 30 (banco original Q321)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Uma conta gratuita do Azure tem um limite de gastos.",
      "Uma conta gratuita do Azure tem um limite de 2 TB de dados que podem ser enviados ao Azure.",
      "Uma conta gratuita do Azure pode conter um número ilimitado de aplicativos Web."
    ],
    "respostas": [true, false, false],
    "explicacao": "Uma conta gratuita do Azure tem, sim, um limite de gastos. Atualmente, esse valor é de 200 USD ou 150 GBP. A conta gratuita do Azure tem um limite de armazenamento de blob de 5 GB e um limite de armazenamento de arquivos de 5 GB — não 2 TB. A conta gratuita do Azure tem um limite de 10 aplicativos Web, móveis ou de API — não um número ilimitado.",
    "link": "https://azure.microsoft.com/pt-br/free/free-account-faq/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 31 (banco original Q324)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O custo dos recursos do Azure pode variar entre regiões.",
      "Uma reserva do Azure é usada para reservar capacidade de servidor em um datacenter específico.",
      "Você pode parar uma instância de Banco de Dados SQL do Azure para reduzir custos."
    ],
    "respostas": [true, true, false],
    "explicacao": "O custo dos recursos do Azure pode, sim, variar entre regiões. Uma reserva do Azure é, sim, usada para reservar capacidade de servidor em um datacenter específico — se você adquiriu Instâncias de Máquina Virtual (VM) Reservadas do Azure, é possível alterar a configuração de otimização para a reserva; o desconto da reserva pode se aplicar a VMs da mesma série, ou você pode reservar capacidade de datacenter para um tamanho de VM específico. Você não pode parar uma instância de Banco de Dados SQL do Azure para reduzir custos — diferente de uma máquina virtual, um Banco de Dados SQL do Azure (como serviço PaaS totalmente gerenciado) não pode ser 'parado' ou 'desalocado' da mesma forma que uma VM.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/reservations/manage-reserved-vm-instance",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 32 (banco original Q327)
  {
    "tipo": "unica",
    "texto": "Qual afirmação descreve com precisão a Política de Ciclo de Vida Moderno (Modern Lifecycle Policy) para serviços do Azure?",
    "opcoes": [
      "A Microsoft fornece suporte mainstream para um serviço por cinco anos.",
      "A Microsoft fornece um mínimo de 12 meses de aviso antes de encerrar o suporte para um serviço.",
      "Depois que um serviço se torna geralmente disponível, a Microsoft fornece suporte para o serviço por no mínimo quatro anos.",
      "Quando um serviço é descontinuado, você pode comprar suporte estendido para o serviço por até cinco anos."
    ],
    "resposta": 1,
    "explicacao": "Para produtos regidos pela Política de Ciclo de Vida Moderno, a Microsoft fornecerá um aviso mínimo de 12 meses antes de encerrar o suporte, caso nenhum produto ou serviço sucessor seja oferecido — excluindo serviços gratuitos ou versões de pré-visualização.",
    "link": "https://support.microsoft.com/pt-br/help/30881/modern-lifecycle-policy",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 33 (banco original Q329)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você pode usar <combobox> no Azure para enviar alertas por e-mail quando o custo do período de faturamento atual de uma assinatura do Azure exceder um limite especificado.",
    "opcoes": [
      "Escolha uma opção",
      "recomendações do Advisor",
      "controle de acesso (IAM)",
      "alertas de orçamento (Budget alerts)",
      "conformidade (Compliance)"
    ],
    "resposta": 2,
    "explicacao": "Alertas de orçamento (Budget alerts) notificam você quando os gastos, com base no uso ou no custo, atingem ou excedem o valor definido na condição de alerta do orçamento. Orçamentos do Gerenciamento de Custos são criados usando o portal do Azure ou a API de Consumo do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 34 (banco original Q346)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> explica quais dados a Microsoft processa, como a Microsoft processa esses dados, e a finalidade do processamento desses dados.",
    "opcoes": [
      "Escolha uma opção",
      "A Declaração de Privacidade dos Serviços Online da Microsoft",
      "Os Termos de Produto da Microsoft",
      "O Contrato de Nível de Serviço Online da Microsoft",
      "O Contrato de Assinatura Online para o Microsoft Azure"
    ],
    "resposta": 1,
    "explicacao": "A Declaração de Privacidade da Microsoft: Sua privacidade é importante para nós. Esta declaração de privacidade explica os dados pessoais que a Microsoft processa, como a Microsoft os processa, e para quais finalidades.",
    "link": "https://privacy.microsoft.com/pt-br/privacystatement",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 35 (banco original Q347)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você pode acessar o Compliance Manager a partir do(a) <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "centro de administração do Microsoft Entra ID",
      "portal do Azure",
      "centro de administração do Microsoft 365",
      "Microsoft Service Trust Portal"
    ],
    "resposta": 2,
    "explicacao": "O Compliance Manager foi movido do Service Trust Portal para seu novo local no centro de conformidade do Microsoft 365. Todos os dados do cliente foram transferidos, então é possível continuar usando o Compliance Manager sem interrupções.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/get-started-with-service-trust-portal?view=o365-worldwide",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 36 (banco original Q355)
  {
    "tipo": "unica",
    "texto": "Qual é o prazo mais longo que você pode comprar para Instâncias de Máquina Virtual (VM) Reservadas do Azure?",
    "opcoes": ["um ano", "cinco anos", "quatro anos", "três anos"],
    "resposta": 3,
    "explicacao": "As Reservas do Azure ajudam você a economizar dinheiro ao se comprometer com planos de um ano ou três anos para múltiplos produtos. Comprometer-se permite obter um desconto nos recursos que você usa. As reservas podem reduzir significativamente os custos de seus recursos em até 72% em relação aos preços de pagamento conforme o uso.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/reservations/save-compute-costs-reservations",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 37 (banco original Q357)
  {
    "tipo": "unica",
    "texto": "Sua empresa tem 10 escritórios. Você planeja gerar vários relatórios de faturamento a partir do portal do Azure. Cada relatório conterá a utilização de recursos do Azure de cada escritório.\nQual recurso do Azure Resource Manager você deve usar antes de gerar os relatórios?",
    "opcoes": ["marcas (tags)", "modelos (templates)", "bloqueios (locks)", "políticas (policies)"],
    "resposta": 0,
    "explicacao": "Você pode usar marcas de recursos para 'rotular' recursos do Azure. Marcas são elementos de metadados anexados a recursos. Marcas consistem em pares de strings de chave/valor. Nesta questão, marcaríamos cada recurso com uma marca para identificar cada escritório. Por exemplo: Location = Office1. Quando todos os recursos do Azure estiverem marcados, você poderá gerar relatórios para listar todos os recursos com base no valor da marca. Por exemplo: Todos os recursos usados pelo Escritório1.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/decision-guides/resource-tagging/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 38 (banco original Q358)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um plano de suporte Standard está incluído em uma conta gratuita do Azure.",
      "Um plano de suporte Premier só pode ser adquirido por empresas que têm um Contrato Enterprise (EA).",
      "O suporte dos fóruns do MSDN é fornecido apenas a empresas que têm uma assinatura de pagamento conforme o uso (pay-as-you-go)."
    ],
    "respostas": [false, true, false],
    "explicacao": "Uma conta gratuita do Azure vem com um plano de suporte 'basic', não um plano de suporte 'standard'. Você pode adquirir os planos de suporte Professional Direct, Standard e Developer com o Contrato de Cliente Microsoft ou um Contrato Enterprise (EA) — já o plano Premier, segundo a fonte, exige um Contrato Enterprise. O suporte dos fóruns do MSDN não é restrito a empresas com assinatura de pagamento conforme o uso — está disponível de forma mais ampla.",
    "link": "https://azure.microsoft.com/pt-br/support/plans/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 39 (banco original Q359)
  {
    "tipo": "unica",
    "texto": "Esta questão exige que você avalie o texto sublinhado para determinar se está correto.\nSe a Microsoft planeja encerrar o suporte para um serviço do Azure que NÃO tem um serviço sucessor, a Microsoft fornecerá notificação com pelo menos 12 meses de antecedência.\nInstruções: Revise o texto sublinhado. Se ele tornar a afirmação correta, selecione \"Nenhuma alteração é necessária\". Se a afirmação estiver incorreta, selecione a opção que a torna correta.",
    "opcoes": ["Nenhuma alteração é necessária", "6 meses", "90 dias", "30 dias"],
    "resposta": 0,
    "explicacao": "A Política de Ciclo de Vida Moderno cobre produtos e serviços que são mantidos e suportados continuamente. Para produtos regidos pela Política de Ciclo de Vida Moderno, a Microsoft fornecerá um aviso mínimo de 12 meses antes de encerrar o suporte, caso nenhum produto ou serviço sucessor seja oferecido — excluindo serviços gratuitos ou versões de pré-visualização.",
    "link": "https://support.microsoft.com/pt-br/help/30881",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 40 (banco original Q367)
  {
    "tipo": "unica",
    "texto": "Esta questão exige que você avalie o texto sublinhado para determinar se está correto.\nUma solução de plano de suporte que oferece informações de melhores práticas, status de integridade e notificações, e acesso 24/7 a informações de faturamento pelo menor custo possível é um plano de suporte Standard.\nInstruções: Revise o texto sublinhado. Se ele tornar a afirmação correta, selecione \"Nenhuma alteração é necessária\". Se a afirmação estiver incorreta, selecione a opção que a torna correta.",
    "opcoes": ["Nenhuma alteração é necessária", "Developer", "Basic", "Premier"],
    "resposta": 2,
    "explicacao": "Um plano de suporte Basic fornece: acesso 24x7 a suporte de faturamento e assinatura, autoajuda online, documentação, whitepapers e fóruns de suporte; melhores práticas: acesso ao conjunto completo de recomendações do Azure Advisor; status de integridade e notificações: acesso ao Painel de Integridade de Serviço personalizado e à API de Integridade.",
    "link": "https://azure.microsoft.com/pt-br/support/plans/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 41 (banco original Q368)
  {
    "tipo": "unica",
    "texto": "Em quais planos de suporte do Azure você pode abrir um novo chamado de suporte?",
    "opcoes": [
      "Somente Premier e Professional Direct",
      "Somente Premier, Professional Direct e Standard",
      "Somente Premier, Professional Direct, Standard e Developer",
      "Premier, Professional Direct, Standard, Developer e Basic"
    ],
    "resposta": 3,
    "explicacao": "Você pode enviar chamados de suporte nos seguintes planos: Premier, Professional Direct, Standard, Developer e Basic. Nota: esta resposta contradiz a Q1 deste bloco, que exclui o Premier da lista de planos que permitem abrir novos chamados de suporte — recomenda-se verificar a documentação oficial atualizada da Microsoft antes de usar essas questões em avaliação.",
    "link": "https://azure.microsoft.com/pt-br/support/plans/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 42 (banco original Q371)
  {
    "tipo": "unica",
    "texto": "Esta questão exige que você avalie o texto sublinhado para determinar se está correto.\nO plano de suporte Standard do Azure é a opção de menor custo para receber acesso 24x7 a engenheiros de suporte por telefone.\nInstruções: Revise o texto sublinhado. Se ele tornar a afirmação correta, selecione \"Nenhuma alteração é necessária\". Se a afirmação estiver incorreta, selecione a opção que a torna correta.",
    "opcoes": ["Nenhuma alteração é necessária", "Developer", "Basic", "Professional Direct"],
    "resposta": 0,
    "explicacao": "O plano de suporte Basic é gratuito, sendo, portanto, o mais barato. O plano de suporte Developer é o plano pago mais barato. A ordem dos planos de suporte em termos de custo, do mais barato ao mais caro, é: Basic, Developer, Standard, Professional Direct, Premier. No entanto, o acesso 24/7 a suporte técnico por e-mail e telefone só está disponível nos planos Standard, Professional Direct e Premier — tornando o Standard a opção de menor custo com esse recurso específico.",
    "link": "https://azure.microsoft.com/pt-br/support/plans/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 43 (banco original Q373)
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
    "explicacao": "A calculadora de TCO é projetada para ajudar você a comparar os custos de executar uma infraestrutura local em comparação com uma infraestrutura na nuvem do Azure. Com a calculadora de TCO, você insere a configuração atual da sua infraestrutura, incluindo servidores, bancos de dados, armazenamento e tráfego de rede de saída. A calculadora de TCO então compara os custos previstos do seu ambiente atual com um ambiente do Azure que suporte os mesmos requisitos de infraestrutura — incluindo economias com a redução do consumo de eletricidade.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/plan-manage-azure-costs/2-compare-costs-tco-calculator",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 44 (banco original Q407)
  {
    "tipo": "unica",
    "texto": "O que você deve usar para rastrear os custos dos recursos do Azure?",
    "opcoes": ["modelos de Início Rápido do Azure", "marcas (tags)", "orçamentos (budgets)", "uso e cotas"],
    "resposta": 3,
    "explicacao": "Uso e cotas permitem monitorar e controlar o uso de recursos, e evitar cobranças inesperadas. Você pode definir cotas em recursos para limitar a quantidade de uso, e usar o Azure Monitor para rastrear métricas de uso e desempenho. Isso ajuda a identificar ineficiências e otimizar o uso de recursos para economizar custos. Marcas permitem categorizar recursos do Azure e adicionar metadados a eles, o que facilita rastrear e gerenciar custos. Você pode usar marcas para organizar recursos por departamento, projeto, ambiente ou qualquer outra categoria que faça sentido para sua organização. Orçamentos permitem definir limites de gastos e receber alertas quando você está se aproximando ou excedendo esses limites.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/costs/cost-mgt-best-practices",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 45 (banco original Q412)
  {
    "tipo": "unica",
    "texto": "Sua empresa tem uma assinatura do Azure que contém vários recursos.\nVocê precisa identificar qual departamento é responsável pelo custo de cada recurso.\nO que você deve usar?",
    "opcoes": ["orçamentos (budgets)", "alertas (alerts)", "marcas (tags)"],
    "resposta": 2,
    "explicacao": "Você pode usar marcas para agrupar seus dados de faturamento. Se você está executando várias VMs para organizações diferentes, por exemplo, use as marcas para agrupar o uso por centro de custo. Você também pode usar marcas para categorizar custos por ambiente de tempo de execução, como o uso de faturamento de VMs em execução no ambiente de produção.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/tag-resources?tabs=json#tags-and-billing",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 46 (banco original Q421)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você pode usar <combobox> no Azure para enviar alertas por e-mail quando o custo do período de faturamento atual de uma assinatura do Azure exceder um limite especificado.",
    "opcoes": [
      "Escolha uma opção",
      "recomendações do Advisor",
      "controle de acesso (IAM)",
      "alertas de orçamento (Budget alerts)",
      "conformidade (Compliance)"
    ],
    "resposta": 2,
    "explicacao": "Alertas de orçamento são um recurso nativo de governança dentro do conjunto Gerenciamento de Custos + Faturamento do Azure, projetado para prevenir excedentes inesperados e vazamento de gastos na nuvem.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 47 (banco original Q460)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A calculadora de Custo Total de Propriedade (TCO) exibe o custo de executar cargas de trabalho em um datacenter.",
      "A calculadora de Custo Total de Propriedade (TCO) exibe o custo de executar cargas de trabalho no Azure.",
      "A calculadora de Custo Total de Propriedade (TCO) gera relatórios gráficos."
    ],
    "respostas": [false, true, true],
    "explicacao": "O propósito da calculadora de TCO não é atuar como um estimador independente para operações de datacenter local. Em vez disso, é uma ferramenta de comparação de migração — embora você insira suas configurações atuais de infraestrutura do datacenter (como especificações de servidor, armazenamento, mão de obra e custos de eletricidade), ela usa esses dados como linha de base para demonstrar quanto dinheiro você economizaria ao migrar esses ativos para o Azure ao longo de um horizonte de tempo determinado — não para exibir isoladamente o custo de rodar no próprio datacenter. Para mostrar a diferenciação financeira, a calculadora de TCO mapeia suas entradas de infraestrutura local de linha de base diretamente para configurações de serviço equivalentes do Azure (como VMs do Azure, Armazenamento do Azure, etc.), exibindo, sim, o custo projetado de executar essas cargas de trabalho no Azure. Depois que todos os parâmetros de linha de base de infraestrutura e opções de nuvem são configurados, a calculadora de TCO compila os resultados em um relatório final abrangente, incluindo painéis gráficos detalhados, gráficos de comparação de custos e tabelas visuais mapeando economias entre categorias de custo específicas.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/plan-manage-azure-costs/2-compare-costs-tco-calculator",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  },
  // Questao 48 (banco original Q468)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um bloqueio somente leitura (Read-only) impede que usuários excluam um recurso do Azure.",
      "Usuários podem modificar um recurso do Azure que tem um bloqueio de exclusão (Delete lock) aplicado.",
      "Todos os recursos do Azure herdam os bloqueios atribuídos ao seu grupo de recursos pai."
    ],
    "respostas": [true, true, true],
    "explicacao": "No Azure Resource Manager (ARM), um bloqueio somente leitura (ReadOnly) é o tipo de bloqueio mais restritivo disponível. Ele atua como uma barreira absoluta que impede usuários autorizados de excluir e modificar o recurso alvo — porque impede totalmente ações destrutivas, ele inerentemente bloqueia a exclusão também. Um bloqueio de exclusão (CanNotDelete) restringe apenas a remoção/exclusão de um ativo de infraestrutura. Diferente de um bloqueio somente leitura, ele permite explicitamente modificações operacionais normais, ajustes de configuração e atualizações de propriedades. Por exemplo, se você colocar um bloqueio de exclusão em um banco de dados de produção ou máquina virtual, engenheiros ainda podem atualizar configurações de escala, aplicar patches de software ou ajustar configurações, mas qualquer tentativa acidental de encerrar o recurso será bloqueada. Os bloqueios do Azure Resource Manager impõem um modelo estrito de herança de cima para baixo — quando você atribui um bloqueio em um escopo organizacional mais alto (como um Grupo de Gerenciamento, uma Assinatura do Azure, ou um Grupo de Recursos pai), esse bloqueio se aplica automaticamente a todo recurso filho existente dentro desse limite, bem como a qualquer novo recurso implantado posteriormente.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/lock-resources",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco08"
  }

];