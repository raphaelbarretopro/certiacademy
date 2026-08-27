// ==========================================
// Arquivo: questoes_bloco01.js
// Descrição: Simulado AZ-900 (fonte: CertyIQ, versão 2026) — tradução PT-BR
// BLOCO 1 de 10 — Descrever a computação em nuvem
// (definição, responsabilidade compartilhada, modelos público/privado/híbrido,
//  modelo de consumo, modelos de preço, computação sem servidor)
// 47 questões — distribuição balanceada conforme guia oficial de estudos AZ-900
// Terminologia atualizada onde aplicável (Azure AD -> Microsoft Entra ID)
// ==========================================

export const questoes = [

  // Questao 01 (banco original Q10)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nSua empresa planeja migrar todas as suas máquinas virtuais para uma assinatura do Azure com pagamento conforme o uso (pay-as-you-go). As máquinas virtuais estão atualmente hospedadas em hosts Hyper-V em um datacenter.\nVocê precisa garantir que a solução do Azure pretendida utilize o modelo de despesa correto.\nSolução: Você deve recomendar o uso do modelo de despesa elástico.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Elasticidade não é um modelo de despesa, e sim uma das características da computação em nuvem. A vantagem básica da nuvem é migrar de um modelo de Despesa de Capital (CapEx) elevado para um modelo de pagamento conforme o uso, que é uma Despesa Operacional (OpEx).",
    "link": "https://azure.microsoft.com/pt-br/pricing/purchase-options/pay-as-you-go/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 02 (banco original Q11)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nSua empresa planeja migrar todas as suas máquinas virtuais para uma assinatura do Azure com pagamento conforme o uso (pay-as-you-go). As máquinas virtuais estão atualmente hospedadas em hosts Hyper-V em um datacenter.\nVocê precisa garantir que a solução do Azure pretendida utilize o modelo de despesa correto.\nSolução: Você deve recomendar o uso do modelo de despesa escalável.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Existem apenas dois modelos de despesa reconhecidos: CapEx (Despesa de Capital) e OpEx (Despesa Operacional). \"Despesa escalável\" não é um modelo válido.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/strategy/business-outcomes/fiscal-outcomes",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 03 (banco original Q12)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nSua empresa planeja migrar todas as suas máquinas virtuais para uma assinatura do Azure com pagamento conforme o uso (pay-as-you-go). As máquinas virtuais estão atualmente hospedadas em hosts Hyper-V em um datacenter.\nVocê precisa garantir que a solução do Azure pretendida utilize o modelo de despesa correto.\nSolução: Você deve recomendar o uso do modelo de despesa operacional.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "Despesas operacionais são custos contínuos do negócio. Consumir serviços de nuvem em um modelo de pagamento conforme o uso se enquadra como despesa operacional (OpEx).",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/strategy/business-outcomes/fiscal-outcomes",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 04 (banco original Q22)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nOs desenvolvedores da sua empresa pretendem implantar um grande número de máquinas virtuais personalizadas semanalmente, removendo-as na mesma semana. Sessenta por cento têm Windows Server 2016 e os outros quarenta por cento têm Ubuntu Linux.\nVocê precisa reduzir o esforço administrativo necessário para esse processo, empregando um serviço adequado do Azure.\nSolução: Você recomenda o uso do Microsoft Managed Desktop.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "O Microsoft Managed Desktop combina o Microsoft 365 Enterprise, gerenciamento de dispositivos e monitoramento de segurança — não serve para provisionar e remover VMs de teste rapidamente. A ferramenta correta é o Azure DevTest Labs.",
    "link": "https://learn.microsoft.com/pt-br/azure/devtest-labs/devtest-lab-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 05 (banco original Q23)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nOs desenvolvedores da sua empresa pretendem implantar um grande número de máquinas virtuais personalizadas semanalmente, removendo-as na mesma semana. Sessenta por cento têm Windows Server 2016 e os outros quarenta por cento têm Ubuntu Linux.\nVocê precisa reduzir o esforço administrativo necessário para esse processo, empregando um serviço adequado do Azure.\nSolução: Você recomenda o uso de Instâncias de Máquinas Virtuais Reservadas do Azure.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Instâncias Reservadas não são uma ferramenta de provisionamento — é apenas um modelo de precificação com desconto. O Azure DevTest Labs é a ferramenta adequada, permitindo criar rapidamente ambientes reutilizáveis, com cotas/políticas e desligamento automático para reduzir custos.",
    "link": "https://learn.microsoft.com/pt-br/azure/devtest-labs/devtest-lab-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 06 (banco original Q31)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nVocê está planejando uma estratégia para implantar diversos servidores Web e de banco de dados no Azure. Essa estratégia deve permitir controlar os tipos de conexão entre eles.\nSolução: Você inclui grupos de segurança de rede (NSGs) na estratégia.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "Um grupo de segurança de rede pode filtrar o tráfego de e para recursos do Azure em uma rede virtual, contendo regras que permitem ou negam tráfego de entrada e saída, com origem, destino, porta e protocolo específicos.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/network-security-groups-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 07 (banco original Q32)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nVocê está planejando uma estratégia para implantar diversos servidores Web e de banco de dados no Azure. Essa estratégia deve permitir controlar os tipos de conexão entre eles.\nSolução: Você inclui um gateway de rede local na estratégia.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "O gateway de rede local conecta uma rede local a uma rede virtual do Azure via VPN — não controla conexões entre servidores dentro do próprio Azure. Um NSG é a solução correta.",
    "link": "https://learn.microsoft.com/pt-br/azure/vpn-gateway/vpn-gateway-about-vpn-gateway-settings",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 08 (banco original Q35)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O modelo de consumo permite que organizações migrem despesas de TI de CapEx para OpEx.",
      "Duas máquinas virtuais do mesmo tamanho sempre têm o mesmo custo mensal.",
      "Você continua pagando pelos custos de armazenamento de uma VM mesmo quando ela está parada (stopped)."
    ],
    "respostas": [true, false, true],
    "explicacao": "Tradicionalmente, despesas de TI eram consideradas Despesa de Capital (CapEx). Com a migração para a nuvem e o modelo de pagamento conforme o uso, as organizações têm flexibilidade para tratar esses custos como Despesa Operacional (OpEx). Duas VMs de mesmo tamanho podem ter configurações de disco diferentes, portanto podem ter custos mensais diferentes. Quando uma VM do Azure é parada, você não paga pela VM em si, mas continua pagando pelos custos de armazenamento associados (discos do SO, discos de dados, dados de diagnóstico e backups).",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/states-billing",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 09 (banco original Q38, idêntica à Q391)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Uma organização que hospeda sua própria infraestrutura <combobox> não precisa mais de um datacenter.",
    "opcoes": [
      "Escolha uma opção",
      "em uma nuvem privada",
      "em uma nuvem híbrida",
      "na nuvem pública",
      "em um host Hyper-V"
    ],
    "resposta": 3,
    "explicacao": "Uma nuvem privada é hospedada no próprio datacenter da organização — portanto, não é possível fechar o datacenter usando uma nuvem privada. Já uma organização que hospeda sua infraestrutura na nuvem pública (por exemplo, no Microsoft Azure) não tem hardware local para gerenciar, já que tudo roda na infraestrutura do provedor de nuvem — por isso pode fechar seu datacenter.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/principles-cloud-computing/4-cloud-deployment-models",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 10 (banco original Q39)
  {
    "tipo": "multipla",
    "texto": "Quais são duas características da nuvem pública? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "hardware dedicado",
      "conexões não seguras",
      "armazenamento limitado",
      "precificação medida (metered pricing)",
      "gerenciamento self-service"
    ],
    "respostas": [3, 4],
    "explicacao": "Na nuvem pública, você paga conforme o uso (pay-as-you-go) — ou seja, precificação medida, sem custos de CapEx. Você também tem gerenciamento self-service, sendo responsável pela implantação e configuração de recursos de nuvem, como VMs ou sites, enquanto o hardware subjacente é gerenciado pelo provedor. Não há hardware dedicado (a infraestrutura é compartilhada entre clientes), as conexões são seguras, e o armazenamento não é limitado.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/principles-cloud-computing/4-cloud-deployment-models",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 11 (banco original Q40, idêntica à Q409 e Q440)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Ao planejar migrar um site público para o Azure, você deve planejar <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "implantar uma VPN",
      "pagar custos de uso mensais",
      "pagar para transferir todos os dados do site para o Azure",
      "reduzir o número de conexões ao site"
    ],
    "resposta": 2,
    "explicacao": "O Azure é um serviço de pagamento conforme o uso (pay-as-you-go), o que significa que você será cobrado com base no seu consumo. Você deve planejar pagar custos de uso mensais pelos serviços e recursos do Azure usados para hospedar seu site.",
    "link": "https://azure.microsoft.com/pt-br/pricing/purchase-options/pay-as-you-go/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 12 (banco original Q47)
  {
    "tipo": "unica",
    "texto": "Você tem uma rede local que contém 100 servidores.\nVocê precisa recomendar uma solução que forneça recursos adicionais para seus usuários. A solução deve minimizar os custos de despesa de capital e operacional.\nO que você deve incluir na recomendação?",
    "opcoes": [
      "uma migração completa para a nuvem pública",
      "um datacenter adicional",
      "uma nuvem privada",
      "uma nuvem híbrida"
    ],
    "resposta": 3,
    "explicacao": "Uma nuvem híbrida combina uma nuvem privada com uma nuvem pública. Com ela, você continua usando os servidores locais existentes enquanto adiciona novos servidores na nuvem pública (por exemplo, no Azure) apenas quando necessário — minimizando a despesa de capital, já que você não paga por novos servidores como pagaria em uma implantação totalmente local. Uma migração completa envolveria alta despesa operacional (custo da migração); um datacenter adicional ou uma nuvem privada envolveriam alta despesa de capital (custo da nova infraestrutura).",
    "link": "https://learn.microsoft.com/pt-br/training/modules/principles-cloud-computing/4-cloud-deployment-models",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 13 (banco original Q49)
  {
    "tipo": "unica",
    "texto": "Você planeja migrar vários servidores de uma rede local para o Azure.\nQual é uma vantagem de usar um serviço de nuvem pública para os servidores em vez de uma rede local?",
    "opcoes": [
      "A nuvem pública é de propriedade do público em geral, e não de uma corporação privada",
      "A nuvem pública é uma solução de crowdsourcing que permite às corporações aprimorar a nuvem",
      "Todos os recursos da nuvem pública podem ser acessados livremente por qualquer membro do público",
      "A nuvem pública é uma entidade compartilhada, na qual várias corporações usam, cada uma, uma parte dos recursos da nuvem"
    ],
    "resposta": 3,
    "explicacao": "A nuvem pública é uma entidade compartilhada em que várias corporações utilizam, cada uma, uma parte dos recursos. Os recursos de hardware (servidores, infraestrutura etc.) são gerenciados pelo provedor de nuvem, e múltiplas empresas criam recursos como VMs e redes virtuais sobre essa infraestrutura compartilhada. A nuvem pública não é de propriedade do público — no caso do Azure, é de propriedade da Microsoft — nem é uma solução de crowdsourcing, e seus recursos não podem ser acessados livremente por qualquer pessoa (é necessária uma assinatura e contas de usuário com as permissões adequadas).",
    "link": "https://learn.microsoft.com/pt-br/training/modules/principles-cloud-computing/4-cloud-deployment-models",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 14 (banco original Q51)
  {
    "tipo": "unica",
    "texto": "Em qual tipo de modelo de nuvem todos os recursos de hardware são de propriedade de terceiros e compartilhados entre vários locatários?",
    "opcoes": ["privado", "híbrido", "público"],
    "resposta": 2,
    "explicacao": "Nuvem privada: gerenciada pela própria organização. Nuvem pública: totalmente gerenciada por terceiros, como Azure, AWS ou GCP. Nuvem híbrida: combinação de local (privado) e público (terceiros).",
    "link": "https://learn.microsoft.com/pt-br/training/modules/principles-cloud-computing/4-cloud-deployment-models",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 15 (banco original Q52, idêntica à Q85)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Um aplicativo Web do Azure que consulta um servidor Microsoft SQL local é um exemplo de nuvem <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "híbrida",
      "de múltiplos fornecedores",
      "privada",
      "pública"
    ],
    "resposta": 1,
    "explicacao": "Uma nuvem híbrida (às vezes chamada de \"cloud hybrid\") é um ambiente de computação que combina um datacenter local (também chamado de nuvem privada) com uma nuvem pública, permitindo que dados e aplicativos sejam compartilhados entre eles.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-hybrid-cloud-computing/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 16 (banco original Q53, idêntica à Q348)
  {
    "tipo": "unica",
    "texto": "Você tem 1.000 máquinas virtuais hospedadas em hosts Hyper-V em um datacenter.\nVocê planeja migrar todas as máquinas virtuais para uma assinatura do Azure com pagamento conforme o uso.\nVocê precisa identificar qual modelo de despesa usar para a solução do Azure planejada.\nQual modelo de despesa você deve identificar?",
    "opcoes": ["operacional", "elástico", "capital", "escalável"],
    "resposta": 0,
    "explicacao": "Uma das principais mudanças ao migrar de um ambiente local para a nuvem pública é a troca de despesa de capital (comprar hardware) por despesa operacional (pagar pelo serviço conforme o uso). Os modelos de despesa reconhecidos são apenas CapEx (Capital) ou OpEx (Operacional) — \"elástico\" e \"escalável\" não são modelos de despesa válidos.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/strategy/business-outcomes/fiscal-outcomes",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 17 (banco original Q58)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O modelo de pagamento conforme o uso (pay-as-you-go) é um exemplo de CapEx.",
      "Pagar pela energia elétrica do seu próprio datacenter é um exemplo de OpEx.",
      "Implantar seu próprio datacenter é um exemplo de CapEx."
    ],
    "respostas": [false, true, true],
    "explicacao": "No modelo pay-as-you-go, você paga pelos serviços conforme os utiliza — isso é OpEx (Despesa Operacional), não CapEx. CapEx é o pagamento antecipado, como a compra de um servidor físico. Pagar pela energia de um datacenter próprio é um custo operacional contínuo (OpEx). Implantar seu próprio datacenter é CapEx, pois exige investimento inicial em toda a infraestrutura antes de poder utilizá-la.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/strategy/business-outcomes/fiscal-outcomes",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 18 (banco original Q60)
  {
    "tipo": "unica",
    "texto": "Em quais modelos de nuvem você pode implantar servidores físicos?",
    "opcoes": [
      "nuvem privada e nuvem híbrida apenas",
      "nuvem privada apenas",
      "nuvem privada, nuvem híbrida e nuvem pública",
      "nuvem híbrida apenas"
    ],
    "resposta": 0,
    "explicacao": "A nuvem privada é local (on-premises), portanto você pode implantar servidores físicos. A nuvem híbrida é uma combinação de recursos locais e de nuvem pública — você pode implantar servidores físicos na parte local dela. Na nuvem pública, você não pode implantar servidores físicos, apenas provisionar recursos virtuais.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-hybrid-cloud-computing/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 19 (banco original Q61)
  {
    "tipo": "dragdrop",
    "texto": "Associe o modelo de nuvem à vantagem correta. Cada modelo de nuvem pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Nuvem Híbrida" },
      { "label": "Nuvem Privada" },
      { "label": "Nuvem Pública" }
    ],
    "grupos": [
      "Não requer despesa de capital.",
      "Fornece controle total sobre a segurança.",
      "Fornece a opção de usar recursos locais ou baseados em nuvem."
    ],
    "respostas": {
      "Não requer despesa de capital.": ["Nuvem Pública"],
      "Fornece controle total sobre a segurança.": ["Nuvem Privada"],
      "Fornece a opção de usar recursos locais ou baseados em nuvem.": ["Nuvem Híbrida"]
    },
    "explicacao": "Na nuvem pública, não há despesa de capital com hardware de servidor — você paga apenas pelos recursos de nuvem que usa conforme o uso. Uma nuvem privada existe localmente, portanto você tem controle total sobre a segurança. Uma nuvem híbrida é uma mistura de recursos de nuvem pública e recursos locais, portanto você tem a opção de usar qualquer um dos dois.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-hybrid-cloud-computing/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 20 (banco original Q62)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Uma empresa pode estender uma nuvem privada adicionando seus próprios servidores físicos à nuvem pública.",
      "Para construir uma nuvem híbrida, você deve implantar recursos na nuvem pública.",
      "Uma nuvem privada deve estar desconectada da internet."
    ],
    "respostas": [false, false, false],
    "explicacao": "Não é possível adicionar servidores físicos à nuvem pública — só é possível implantar servidores virtuais nela; isso criaria uma nuvem híbrida. A construção de uma nuvem híbrida não obrigatoriamente exige implantar recursos na nuvem pública desta forma específica (a afirmação, como colocada, não é considerada correta no gabarito original). Uma nuvem privada não precisa estar desconectada da internet — pelo contrário, na maioria dos casos está conectada.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-are-private-public-hybrid-clouds/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 21 (banco original Q63)
  {
    "tipo": "unica",
    "texto": "Você tem 50 máquinas virtuais hospedadas localmente e 50 máquinas virtuais hospedadas no Azure. As máquinas virtuais locais e as do Azure se conectam entre si.\nQual tipo de modelo de nuvem é este?",
    "opcoes": ["híbrido", "privado", "público"],
    "resposta": 0,
    "explicacao": "Um modelo de nuvem híbrida combina a infraestrutura interna de uma organização (nuvem privada ou datacenter local) com a infraestrutura de um provedor de nuvem pública (como Azure, AWS ou Google Cloud), permitindo que dados e aplicativos sejam compartilhados e se comuniquem entre eles.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-hybrid-cloud-computing/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 22 (banco original Q67)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Construir a infraestrutura de um datacenter é um exemplo de custos de despesa operacional (OpEx).",
      "Salários mensais de pessoal técnico são um exemplo de custos de despesa operacional (OpEx).",
      "Alugar (leasing) software é um exemplo de custos de despesa operacional (OpEx)."
    ],
    "respostas": [false, true, true],
    "explicacao": "Construir a infraestrutura de um datacenter é despesa de capital (CapEx), não operacional. Salários mensais são custos operacionais contínuos (OpEx). Alugar software também é um custo contínuo, portanto é OpEx — diferente de comprar o software em uma única aquisição, que seria CapEx.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/strategy/business-outcomes/fiscal-outcomes",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 23 (banco original Q76)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A computação em nuvem fornece escalabilidade elástica.",
      "Os clientes podem minimizar a despesa de capital (CapEx) usando uma nuvem pública.",
      "A computação em nuvem utiliza virtualização para fornecer serviços a vários clientes simultaneamente."
    ],
    "respostas": [true, true, true],
    "explicacao": "\"Elasticidade\" significa que o sistema pode adicionar ou remover recursos (como poder de processamento ou armazenamento) automaticamente e instantaneamente conforme a necessidade atual. Em vez de comprar hardware caro antecipadamente (CapEx), você paga pelo que usa como uma despesa operacional contínua (OpEx). A virtualização permite que um único servidor físico seja dividido em vários ambientes \"virtuais\", permitindo que os provedores atendam a muitos clientes simultaneamente usando o mesmo hardware.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-cloud-computing/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 24 (banco original Q77)
  {
    "tipo": "unica",
    "texto": "Qual é o primeiro estágio no Cloud Adoption Framework da Microsoft para o Azure?",
    "opcoes": [
      "Adotar a nuvem.",
      "Fazer um plano.",
      "Preparar sua organização.",
      "Definir sua estratégia."
    ],
    "resposta": 3,
    "explicacao": "O Cloud Adoption Framework da Microsoft para o Azure começa pela definição da estratégia, seguida pelo planejamento, preparação da organização e, então, adoção da nuvem.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 25 (banco original Q78)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Uma empresa pode estender uma rede interna adicionando seus próprios servidores físicos à nuvem pública.",
      "Uma nuvem privada deve estar desconectada da internet.",
      "Parte de uma nuvem híbrida é a nuvem pública."
    ],
    "respostas": [false, false, true],
    "explicacao": "Não é possível adicionar servidores físicos à nuvem pública — apenas servidores virtuais. Isso criaria uma nuvem híbrida, não uma extensão da rede interna com hardware próprio. Uma nuvem privada não precisa estar desconectada da internet. A nuvem híbrida, por definição, inclui uma parte de nuvem pública combinada com recursos locais/privados.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-are-private-public-hybrid-clouds/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 26 (banco original Q79)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você deve ter servidores físicos para usar a computação em nuvem.",
      "Você deve ter conectividade com a internet para usar a computação em nuvem.",
      "Os custos para aumentar a capacidade de computação em nuvem são menores que os custos para aumentar a capacidade de computação de um datacenter local."
    ],
    "respostas": [false, true, true],
    "explicacao": "A computação em nuvem funciona por meio de máquinas virtuais, não exigindo que o cliente possua servidores físicos. É necessária conexão com a internet para acessar os serviços de nuvem. Em resumo, a computação em nuvem é a entrega de serviços de computação — incluindo servidores, armazenamento, bancos de dados, rede, software, análise e inteligência — pela internet, para oferecer inovação mais rápida, recursos flexíveis e economia de escala, geralmente com custo de expansão menor que o de um datacenter local.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-cloud-computing/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 27 (banco original Q85, idêntica à Q52)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Um aplicativo Web do Azure que consulta um servidor Microsoft SQL local é um exemplo de nuvem <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "híbrida",
      "de múltiplos fornecedores",
      "privada",
      "pública"
    ],
    "resposta": 1,
    "explicacao": "Uma nuvem híbrida é um ambiente de computação que combina um datacenter local (nuvem privada) com uma nuvem pública, permitindo que dados e aplicativos sejam compartilhados entre eles.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-hybrid-cloud-computing/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 28 (banco original Q87)
  {
    "tipo": "unica",
    "texto": "Qual modelo de computação em nuvem inclui recursos locais e recursos baseados em nuvem?",
    "opcoes": ["híbrido", "público", "privado"],
    "resposta": 0,
    "explicacao": "Uma nuvem híbrida — às vezes chamada de \"cloud hybrid\" — é um ambiente de computação que combina um datacenter local (também chamado de nuvem privada) com uma nuvem pública, permitindo que dados e aplicativos sejam compartilhados entre eles.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-hybrid-cloud-computing/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 29 (banco original Q91)
  {
    "tipo": "multipla",
    "texto": "Quais são dois benefícios da computação em nuvem? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "permite o provisionamento rápido de recursos",
      "aumenta a complexidade administrativa",
      "tem as mesmas opções de configuração que o ambiente local",
      "migra despesas de capital (CAPEX) para despesas operacionais (OPEX)"
    ],
    "respostas": [0, 3],
    "explicacao": "O Azure permite construir, implantar e gerenciar aplicativos com mais rapidez e facilidade, sem precisar comprar ou manter a infraestrutura subjacente — um exemplo de provisionamento rápido de recursos. Além disso, o Azure oferece flexibilidade entre CapEx e OpEx: consumir serviços de nuvem em um modelo de pagamento conforme o uso se qualifica como despesa operacional, em vez do investimento antecipado típico de CapEx.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/principles-cloud-computing/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 30 (banco original Q125)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um host de sessão da Área de Trabalho Virtual do Azure pode executar apenas o Windows 10.",
      "Um pool de hosts da Área de Trabalho Virtual do Azure que inclui 20 hosts de sessão suporta um máximo de 20 conexões simultâneas de usuário.",
      "A Área de Trabalho Virtual do Azure suporta virtualização de área de trabalho e de aplicativo."
    ],
    "respostas": [false, false, true],
    "explicacao": "Os sistemas operacionais suportados vão além do Windows 10: incluem Windows 10 Enterprise multissessão, Windows 10 Enterprise, Windows 7 Enterprise e Windows Server 2012 R2, 2016 e 2019. O limite máximo de sessões é um valor configurável por host de sessão (não é fixo em 1 usuário por host) — ao configurar o pool, você define quantos usuários serão balanceados por host de sessão. A Área de Trabalho Virtual do Azure oferece suporte tanto à virtualização de área de trabalho completa quanto à de aplicativos individuais (via RemoteApps).",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-desktop/overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 31 (banco original Q137)
  {
    "tipo": "dragdrop",
    "texto": "Associe a solução sem servidor (serverless) à característica correta. Cada solução pode ser usada uma vez, mais de uma vez ou não ser usada.",
    "itens": [
      { "label": "Azure Functions" },
      { "label": "Azure Logic Apps" }
    ],
    "grupos": [
      "Executa código:",
      "É sempre stateful (com estado):",
      "Executa somente na nuvem:"
    ],
    "respostas": {
      "Executa código:": ["Azure Functions"],
      "É sempre stateful (com estado):": ["Azure Logic Apps"],
      "Executa somente na nuvem:": ["Azure Logic Apps"]
    },
    "explicacao": "O Azure Functions permite implementar a lógica do sistema em blocos de código prontamente disponíveis chamados \"funções\", que podem ser executadas sempre que necessário para responder a eventos críticos. Já o Azure Logic Apps é uma plataforma baseada em nuvem para criar e executar fluxos de trabalho automatizados que integram aplicativos, dados, serviços e sistemas — sendo sempre stateful e executando apenas na nuvem.",
    "link": "https://learn.microsoft.com/pt-br/azure/logic-apps/logic-apps-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 32 (banco original Q193)
  {
    "tipo": "unica",
    "texto": "Qual serviço fornece computação sem servidor (serverless) no Azure?",
    "opcoes": [
      "Máquinas Virtuais do Azure",
      "Azure Functions",
      "Conta de Armazenamento do Azure",
      "Hosts dedicados do Azure"
    ],
    "resposta": 1,
    "explicacao": "O Azure Functions fornece uma plataforma para código sem servidor. É um serviço de computação sem servidor que permite executar código acionado por eventos sem precisar provisionar ou gerenciar explicitamente a infraestrutura.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-functions/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 33 (banco original Q231)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> no Firewall do Azure permitem que usuários na internet acessem um servidor em uma rede virtual.",
    "opcoes": [
      "Escolha uma opção",
      "Regras de aplicativo",
      "Regras de NAT (Conversão de Endereços de Rede)",
      "Regras de rede",
      "Marcas de serviço"
    ],
    "resposta": 2,
    "explicacao": "As regras de NAT (Network Address Translation) no Firewall do Azure permitem que o tráfego proveniente da internet seja traduzido e encaminhado para um servidor dentro de uma rede virtual. Ao processar as regras, o Firewall do Azure aplica primeiro as regras de NAT, depois as regras de rede e, por último, as regras de aplicativo.",
    "link": "https://learn.microsoft.com/pt-br/azure/firewall/rule-processing",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 34 (banco original Q232)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: A proteção contra negação de serviço distribuída (DDoS) do Azure é um exemplo de proteção implementada na <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "camada de aplicativo",
      "camada de computação",
      "camada de rede",
      "camada de perímetro"
    ],
    "resposta": 4,
    "explicacao": "A camada de perímetro utiliza proteção contra negação de serviço distribuída (DDoS) para filtrar ataques em larga escala antes que possam causar uma negação de serviço para os usuários — esse é um dos princípios do modelo de defesa em profundidade.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/secure-network-connectivity-azure/2-what-is-defense-in-depth",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 35 (banco original Q323)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Com um plano baseado em consumo, você paga uma taxa fixa por todos os dados enviados de ou para máquinas virtuais hospedadas na nuvem.",
      "Com um plano baseado em consumo, você reduz os custos gerais pagando apenas pela capacidade extra quando ela é necessária.",
      "A computação sem servidor (serverless) é um exemplo de plano baseado em consumo."
    ],
    "respostas": [false, true, true],
    "explicacao": "No plano baseado em consumo, não há taxa fixa — você paga apenas pela capacidade extra quando necessária, sem taxa fixa. A computação sem servidor é um exemplo desse modelo, pois você paga apenas pelo uso real de recursos.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-functions/functions-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 36 (banco original Q345)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Se uma máquina virtual do Azure tiver o status Parada (desalocada), você continuará pagando por <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "capacidade de computação",
      "operações de E/S",
      "rede",
      "armazenamento"
    ],
    "resposta": 4,
    "explicacao": "O Azure não cobra pelas horas de núcleo da VM enquanto ela está Parada (Desalocada). No entanto, você continua acumulando cobranças pelo armazenamento do Azure necessário para o disco do SO da VM e quaisquer discos de dados anexados.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/states-billing",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 37 (banco original Q350)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Uma empresa tem controle total sobre os recursos e a segurança de sua nuvem privada.",
      "Uma solução de nuvem híbrida permite que uma empresa controle se seus aplicativos rodam localmente ou na nuvem.",
      "As empresas são responsáveis pela despesa de capital ao escalar verticalmente uma máquina virtual hospedada em uma nuvem pública."
    ],
    "respostas": [true, true, false],
    "explicacao": "Em uma nuvem privada, a empresa mantém controle total sobre os recursos e a segurança. A computação em nuvem híbrida permite que uma empresa implante suas cargas de trabalho mais sensíveis em uma nuvem local e hospede recursos menos críticos em um provedor de nuvem pública de terceiros, obtendo o melhor dos dois modelos. Na nuvem pública, você tem precificação pay-as-you-go — paga apenas pelo que usa, sem custos de CapEx, mesmo ao escalar verticalmente uma VM.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-hybrid-cloud-computing/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 38 (banco original Q354)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O modelo Pay as You Go é cobrado por segundo, e você pode iniciar ou interromper o serviço a qualquer momento, pagando apenas pelo que usa.",
      "O modelo Pay as You Go é um exemplo de despesa de capital (CapEx).",
      "Despesas operacionais (OpEx) são os custos contínuos relacionados às operações do dia a dia, incluindo a taxa de assinatura de serviços de nuvem."
    ],
    "respostas": [true, false, true],
    "explicacao": "O modelo Pay as You Go é cobrado por segundo, permitindo iniciar ou interromper o serviço quando quiser, pagando apenas pelo uso. Ele é um exemplo de OpEx (Despesa Operacional), não de CapEx — o retorno sobre o investimento é obtido quase imediatamente, pois a infraestrutura é gerenciada pelo provedor de nuvem. Já em CapEx, o retorno costuma demorar mais, pois é preciso montar a infraestrutura antecipadamente. A taxa de assinatura de serviços de nuvem é considerada OpEx, já que o provedor faz o investimento inicial em infraestrutura e você paga apenas pelos recursos conforme necessário.",
    "link": "https://azure.microsoft.com/pt-br/pricing/purchase-options/pay-as-you-go/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 39 (banco original Q380)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Os custos de despesa de capital (CapEx) são menores na computação em nuvem do que em implantações locais.",
      "A computação em nuvem, de forma geral, fornece as mesmas opções de configuração que implantações locais.",
      "A computação em nuvem permite aumentar ou diminuir os recursos de TI conforme necessário para atender a mudanças na demanda."
    ],
    "respostas": [true, true, true],
    "explicacao": "Despesas de capital (CapEx) são fundos usados para adquirir, atualizar e manter ativos físicos, como propriedades, prédios, tecnologia ou equipamentos — esses custos são menores na nuvem do que em implantações locais. A computação em nuvem, de forma geral, oferece as mesmas opções de configuração que implantações locais (embora possa variar ao comparar produtos específicos). A escalabilidade é uma das marcas registradas da nuvem, permitindo aumentar ou diminuir recursos de TI conforme a demanda muda.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/principles-cloud-computing/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 40 (banco original Q382)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Azure Functions é um componente essencial da computação sem servidor (serverless) no Azure.",
      "O Azure Functions permite focar no valor do código em vez de gerenciar a infraestrutura subjacente.",
      "O Azure Functions é um exemplo de implementação de PaaS (Plataforma como Serviço) sem servidor."
    ],
    "respostas": [true, true, true],
    "explicacao": "O Azure Functions é um componente-chave da computação sem servidor no Azure, necessário para obter os benefícios de uma implementação de PaaS sem servidor. Ele desloca o foco para o valor do código, afastando-se do gerenciamento de infraestrutura.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-functions/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 41 (banco original Q390)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você planeja implantar 20 máquinas virtuais em um ambiente do Azure. Para garantir que uma máquina virtual chamada VM1 não possa se conectar às outras máquinas virtuais, VM1 deve <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "ser implantada em uma rede virtual separada.",
      "executar um sistema operacional diferente das outras máquinas virtuais.",
      "ser implantada em um grupo de recursos separado.",
      "ter duas interfaces de rede."
    ],
    "resposta": 1,
    "explicacao": "Para garantir o isolamento de comunicação de uma VM no Azure, ela deve ser implantada em uma rede virtual separada.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/virtual-networks-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 42 (banco original Q391, idêntica à Q38)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Uma organização que hospeda sua própria infraestrutura <combobox> não precisa mais de um datacenter.",
    "opcoes": [
      "Escolha uma opção",
      "em uma nuvem privada",
      "em uma nuvem híbrida",
      "na nuvem pública",
      "em um host Hyper-V"
    ],
    "resposta": 3,
    "explicacao": "Uma organização que hospeda sua infraestrutura na nuvem pública não precisa mais manter um datacenter próprio, pois toda a infraestrutura é fornecida pelo provedor de nuvem.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/principles-cloud-computing/4-cloud-deployment-models",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 43 (banco original Q393)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> executa código de aplicativo no Azure sem exigir um servidor.",
    "opcoes": [
      "Escolha uma opção",
      "Um pipeline do Azure DevOps",
      "Um modelo do Azure Resource Manager",
      "O Azure Application Gateway",
      "O Azure Functions"
    ],
    "resposta": 4,
    "explicacao": "O Azure Functions é uma solução sem servidor (serverless) que permite escrever menos código, manter menos infraestrutura e economizar em custos.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-functions/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 44 (banco original Q409, idêntica à Q40 e Q440)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Ao planejar migrar um site público para o Azure, você deve planejar <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "implantar uma VPN",
      "pagar custos de uso mensais",
      "pagar para transferir todos os dados do site para o Azure",
      "reduzir o número de conexões ao site"
    ],
    "resposta": 2,
    "explicacao": "O Azure é um serviço de pagamento conforme o uso: você será cobrado com base no seu consumo, portanto deve planejar pagar custos de uso mensais pelos serviços e recursos usados para hospedar seu site.",
    "link": "https://azure.microsoft.com/pt-br/pricing/purchase-options/pay-as-you-go/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 45 (banco original Q440, idêntica à Q40 e Q409)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Ao planejar migrar um site público para o Azure, você deve planejar <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "implantar uma VPN",
      "pagar custos de uso mensais",
      "pagar para transferir todos os dados do site para o Azure",
      "reduzir o número de conexões ao site"
    ],
    "resposta": 2,
    "explicacao": "As plataformas de nuvem pública, como o Azure, funcionam inteiramente em um esquema de utilidade baseado em consumo. Em vez de pagar custos antecipados enormes por hardware físico, racks de infraestrutura e componentes de servidor, você paga apenas pelos recursos que consome ativamente — agregados e cobrados como custos de uso mensais.",
    "link": "https://azure.microsoft.com/pt-br/pricing/purchase-options/pay-as-you-go/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  },
  // Questao 46 (banco original Q448)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Para o serviço de nuvem PaaS (plataforma como serviço), atualizar o sistema operacional é responsabilidade do cliente.",
      "Para o serviço de nuvem IaaS (infraestrutura como serviço), o controle de rede é responsabilidade da Microsoft.",
      "Para o serviço de nuvem SaaS (software como serviço), o gerenciamento de identidade é uma responsabilidade compartilhada entre o cliente e a Microsoft."
    ],
    "respostas": [false, false, true],
    "explicacao": "No modelo PaaS, a atualização do sistema operacional é responsabilidade da Microsoft, não do cliente. No modelo IaaS, o controle de rede é responsabilidade do cliente (ou compartilhada), não exclusivamente da Microsoft. No modelo SaaS, o gerenciamento de identidade é, de fato, uma responsabilidade compartilhada entre cliente e Microsoft.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/shared-responsibility",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco01"
  }

];