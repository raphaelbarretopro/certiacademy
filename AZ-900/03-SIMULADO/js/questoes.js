// ==========================================
// Arquivo: questoes_bloco03.js
// Descrição: Simulado AZ-900 (fonte: CertyIQ, versão 2026) — tradução PT-BR
// BLOCO 3 de 10 — Descrever os tipos de serviço de nuvem
// (IaaS, PaaS, SaaS, casos de uso apropriados para cada tipo)
// 47 questões — distribuição balanceada conforme guia oficial de estudos AZ-900
//
// CORRESPONDÊNCIA COM O BANCO ORIGINAL (numeração do PDF em inglês, em ordem):
// 4, 5, 6, 36, 41, 42, 43, 45, 46, 56, 59, 65, 66, 69, 71, 72, 74, 75, 82, 83, 84, 86,
// 149, 150, 212, 240, 242, 267, 269, 283, 295, 300, 307, 330, 331, 340, 349, 378, 389,
// 411, 413, 445, 447, 453, 454, 462, 472
// ==========================================

export const questoes = [

  // Questao 01 (banco original Q4) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nVocê precisa implantar máquinas virtuais do Azure para sua empresa.\nVocê precisa utilizar a solução de implantação de nuvem apropriada.\nSolução: Você deve utilizar o SaaS (Software como Serviço).\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "A palavra-chave é \"máquina virtual\" — nesse caso, o modelo correto é o IaaS (Infraestrutura como Serviço), não o SaaS.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamental-azure-concepts/categories-of-cloud-services",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 02 (banco original Q5) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nVocê precisa implantar máquinas virtuais do Azure para sua empresa.\nVocê precisa utilizar a solução de implantação de nuvem apropriada.\nSolução: Você deve utilizar o PaaS (Plataforma como Serviço).\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "As VMs são implantadas no modelo IaaS, não no PaaS. As máquinas virtuais do Azure são dispositivos de computação virtual totalmente operacionais em execução nos datacenters da Microsoft — característica típica de IaaS.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamental-azure-concepts/categories-of-cloud-services",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 03 (banco original Q6) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nVocê precisa implantar máquinas virtuais do Azure para sua empresa.\nVocê precisa utilizar a solução de implantação de nuvem apropriada.\nSolução: Você deve utilizar o IaaS (Infraestrutura como Serviço).\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "Máquinas virtuais e contas de Armazenamento do Azure são exemplos de IaaS.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamental-azure-concepts/categories-of-cloud-services",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 04 (banco original Q36)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Azure oferece flexibilidade entre despesa de capital (CapEx) e despesa operacional (OpEx).",
      "Se você criar duas máquinas virtuais do Azure que usam o tamanho B2S, cada máquina virtual sempre gerará os mesmos custos mensais.",
      "Quando uma máquina virtual do Azure é parada, você continua pagando os custos de armazenamento associados a ela."
    ],
    "respostas": [true, false, true],
    "explicacao": "Tradicionalmente, despesas de TI eram consideradas CapEx. Com a nuvem e o modelo de pagamento conforme o uso, as organizações podem tratar esses custos como OpEx — essa flexibilidade é um benefício do Azure. Duas VMs do mesmo tamanho podem ter configurações de disco diferentes, portanto os custos mensais podem ser diferentes. Quando uma VM do Azure é parada, você não paga pela VM em si, mas continua pagando pelos custos de armazenamento associados a ela.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/states-billing",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 05 (banco original Q41)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nSua empresa planeja migrar todos os seus dados e recursos para o Azure.\nO plano de migração da empresa determina que apenas soluções de Plataforma como Serviço (PaaS) devem ser usadas no Azure.\nVocê precisa implantar um ambiente do Azure que atenda ao plano de migração da empresa.\nSolução: Você cria um Azure App Service e bancos de dados do Azure SQL.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "O Azure App Service e os bancos de dados do Azure SQL são exemplos de soluções PaaS do Azure. Portanto, esta solução atende ao objetivo.",
    "link": "https://learn.microsoft.com/pt-br/azure/app-service/overview",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 06 (banco original Q42)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nSua empresa planeja migrar todos os seus dados e recursos para o Azure.\nO plano de migração da empresa determina que apenas soluções de Plataforma como Serviço (PaaS) devem ser usadas no Azure.\nVocê precisa implantar um ambiente do Azure que atenda ao plano de migração da empresa.\nSolução: Você cria um Azure App Service e máquinas virtuais do Azure com o Microsoft SQL Server instalado.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Máquinas virtuais são exemplos de IaaS, não de PaaS. Instalar o SQL Server manualmente em uma VM caracteriza o uso como IaaS, mesmo que o App Service (que é PaaS) também esteja presente na solução — como o plano exige que APENAS soluções PaaS sejam usadas, a presença da VM com SQL Server instalado torna a solução incompatível com o objetivo.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/windows/sql/virtual-machines-windows-sql-server-iaas-overview",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 07 (banco original Q43)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nSua empresa planeja migrar todos os seus dados e recursos para o Azure.\nO plano de migração da empresa determina que apenas soluções de Plataforma como Serviço (PaaS) devem ser usadas no Azure.\nVocê precisa implantar um ambiente do Azure que atenda ao plano de migração da empresa.\nSolução: Você cria um Azure App Service e contas de Armazenamento do Azure.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Uma Conta de Armazenamento do Azure não é, em si, classificada como IaaS ou PaaS, pois não é um \"serviço\" isolado — é um contêiner para uma das soluções de armazenamento do Azure (Disco do Azure, que é IaaS; Blob do Azure, que é PaaS; ou Arquivos do Azure, que é SaaS). Como o tipo específico de armazenamento usado dentro da conta não está claramente definido como PaaS na solução proposta, ela não atende com certeza ao plano de migração 100% PaaS.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/common/storage-account-overview",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 08 (banco original Q45)
  {
    "tipo": "unica",
    "texto": "Você planeja migrar um aplicativo Web para o Azure. O aplicativo Web é acessado por usuários externos.\nVocê precisa recomendar uma solução de implantação de nuvem que minimize o esforço administrativo usado para gerenciar o aplicativo Web.\nO que você deve incluir na recomendação?",
    "opcoes": [
      "Software como Serviço (SaaS)",
      "Plataforma como Serviço (PaaS)",
      "Infraestrutura como Serviço (IaaS)",
      "Banco de Dados como Serviço (DaaS)"
    ],
    "resposta": 1,
    "explicacao": "As palavras-chave são \"migrar\" e \"administração\". O Azure App Service é uma oferta de plataforma como serviço (PaaS) que permite criar aplicativos Web e móveis para qualquer plataforma ou dispositivo e se conectar a dados em qualquer lugar, na nuvem ou localmente — minimizando o esforço administrativo, já que a Microsoft gerencia a infraestrutura subjacente.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/paas-applications-using-app-services",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 09 (banco original Q46)
  {
    "tipo": "comboboxs",
    "texto": "Qual solução de implantação de nuvem é usada para máquinas virtuais do Azure e bancos de dados SQL do Azure? Para responder, selecione as opções apropriadas na área de resposta.",
    "pares": [
      {
        "requisito": "Máquinas virtuais do Azure:",
        "opcoes": [
          "Infraestrutura como Serviço (IaaS)",
          "Plataforma como Serviço (PaaS)",
          "Software como Serviço (SaaS)"
        ],
        "resposta": 0
      },
      {
        "requisito": "Bancos de dados SQL do Azure:",
        "opcoes": [
          "Infraestrutura como Serviço (IaaS)",
          "Plataforma como Serviço (PaaS)",
          "Software como Serviço (SaaS)"
        ],
        "resposta": 1
      }
    ],
    "explicacao": "Máquinas virtuais do Azure são Infraestrutura como Serviço (IaaS) — a categoria mais flexível, que visa dar controle completo sobre o hardware que executa a aplicação (servidores de TI e VMs, armazenamento, etc.). Bancos de dados SQL do Azure são Plataforma como Serviço (PaaS), pois a plataforma cuida da infraestrutura, atualizações e backups.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/overview",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 10 (banco original Q56)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Uma solução de Plataforma como Serviço (PaaS) fornece controle total dos sistemas operacionais que hospedam os aplicativos.",
      "Uma solução de Plataforma como Serviço (PaaS) fornece memória adicional aos aplicativos ao mudar de camada de preço.",
      "Uma solução de Plataforma como Serviço (PaaS) pode escalar automaticamente o número de instâncias."
    ],
    "respostas": [false, true, true],
    "explicacao": "No modelo PaaS, o provedor de nuvem gerencia o sistema operacional subjacente — o cliente não tem controle total sobre ele. É possível fornecer memória adicional a aplicativos PaaS mudando para uma camada de preço superior (por exemplo, no Azure App Service). Soluções PaaS também podem escalar automaticamente o número de instâncias com base na demanda.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/principles-cloud-computing/5-types-of-cloud-services",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 11 (banco original Q59)
  {
    "tipo": "unica",
    "texto": "Você planeja provisionar recursos de Infraestrutura como Serviço (IaaS) no Azure.\nQual recurso é um exemplo de IaaS?",
    "opcoes": [
      "um aplicativo Web do Azure",
      "uma máquina virtual do Azure",
      "um aplicativo lógico do Azure",
      "um banco de dados SQL do Azure"
    ],
    "resposta": 1,
    "explicacao": "Uma máquina virtual do Azure é um exemplo de Infraestrutura como Serviço (IaaS). Aplicativo Web do Azure, Azure Logic App e Banco de Dados SQL do Azure são todos exemplos de Plataforma como Serviço (PaaS).",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-iaas/",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 12 (banco original Q65)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nSua empresa planeja migrar todos os seus dados e recursos para o Azure.\nO plano de migração da empresa determina que apenas soluções de Plataforma como Serviço (PaaS) devem ser usadas no Azure.\nVocê precisa implantar um ambiente do Azure que atenda ao plano de migração da empresa.\nSolução: Você cria máquinas virtuais do Azure, bancos de dados do Azure SQL e contas de Armazenamento do Azure.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Plataforma como serviço (PaaS) é um ambiente completo de desenvolvimento e implantação na nuvem. O PaaS inclui infraestrutura — servidores, armazenamento e rede — mas também middleware, ferramentas de desenvolvimento, serviços de inteligência de negócios (BI), sistemas de gerenciamento de banco de dados e muito mais. No entanto, máquinas virtuais são exemplos de Infraestrutura como Serviço (IaaS), não PaaS. Como a solução inclui VMs, ela não atende ao plano de migração exclusivamente PaaS.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-paas/",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 13 (banco original Q66)
  {
    "tipo": "unica",
    "texto": "Sua empresa planeja implantar vários aplicativos personalizados no Azure. Os aplicativos fornecerão serviços de faturamento aos clientes da empresa. Cada aplicativo terá vários aplicativos e serviços pré-requisito instalados.\nVocê precisa recomendar uma solução de implantação de nuvem para todos os aplicativos.\nO que você deve recomendar?",
    "opcoes": [
      "Software como Serviço (SaaS)",
      "Plataforma como Serviço (PaaS)",
      "Infraestrutura como Serviço (IaaS)"
    ],
    "resposta": 2,
    "explicacao": "Infraestrutura como serviço (IaaS) é uma infraestrutura de computação instantânea, provisionada e gerenciada pela internet. O provedor de serviço IaaS gerencia a infraestrutura, enquanto você compra, instala, configura e gerencia seu próprio software. Como a empresa precisa instalar vários aplicativos e serviços pré-requisito específicos, ela precisa de controle total sobre a infraestrutura — algo que o SaaS não oferece (destinado a apps já prontos) e que o PaaS não permite com a mesma flexibilidade de instalação de software arbitrário.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-iaas/",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 14 (banco original Q69)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Com o software como serviço (SaaS), você deve aplicar atualizações de software.",
      "Com a infraestrutura como serviço (IaaS), você deve instalar o software que deseja usar.",
      "O Azure Backup é um exemplo de plataforma como serviço (PaaS)."
    ],
    "respostas": [false, true, true],
    "explicacao": "No modelo SaaS (como Microsoft 365, Salesforce ou Gmail), o provedor de nuvem gerencia toda a pilha do aplicativo, incluindo hardware, virtualização, sistemas operacionais e o próprio software da aplicação — o fornecedor cuida automaticamente de todas as atualizações, sem esforço do usuário final. No modelo IaaS, o provedor gerencia apenas o hardware físico do datacenter e o hypervisor; você tem controle administrativo total sobre o sistema operacional, sendo responsável por instalar, configurar e manter qualquer software, runtime ou aplicativo que deseje executar. O Azure Backup fornece um ambiente gerenciado onde você implanta aplicações ou consome serviços sem gerenciar a infraestrutura subjacente — características de PaaS.",
    "link": "https://learn.microsoft.com/pt-br/azure/backup/backup-overview",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 15 (banco original Q71)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft SQL Server 2019 instalado em uma máquina virtual do Azure é um exemplo de plataforma como serviço (PaaS).",
      "O Banco de Dados SQL do Azure é um exemplo de plataforma como serviço (PaaS).",
      "O Azure Cosmos DB é um exemplo de software como serviço (SaaS)."
    ],
    "respostas": [false, true, false],
    "explicacao": "Ao implantar uma máquina virtual do Azure e instalar o SQL Server nela, você está utilizando Infraestrutura como Serviço (IaaS) — você é responsável por gerenciar o sistema operacional subjacente, configurar a instalação do SQL Server, gerenciar discos de armazenamento e aplicar atualizações do SO e do banco de dados. O Banco de Dados SQL do Azure é um mecanismo de banco de dados relacional totalmente gerenciado — a Azure cuida de todo o gerenciamento de infraestrutura, incluindo provisionamento de hardware, aplicação de patches do sistema operacional, atualizações de software do banco de dados, backups e configurações de alta disponibilidade, o que se enquadra na definição de PaaS. O Azure Cosmos DB é um serviço de banco de dados NoSQL e relacional totalmente gerenciado, projetado para o desenvolvimento de aplicativos modernos — o que o classifica como PaaS (um building block para desenvolvedores), e não como SaaS (que se refere a aplicativos de usuário final entregues pela web, como Microsoft 365 ou Dynamics 365, onde o usuário interage com uma interface de software completa em vez de um motor de banco de dados).",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 16 (banco original Q72)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Um banco de dados Microsoft SQL Server hospedado na nuvem e com atualizações de software gerenciadas pela Azure é um exemplo de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "recuperação de desastre como serviço (DRaaS)",
      "infraestrutura como serviço (IaaS)",
      "plataforma como serviço (PaaS)",
      "software como serviço (SaaS)"
    ],
    "resposta": 3,
    "explicacao": "A palavra-chave é \"gerenciadas pela Azure\" — quando as atualizações de software são gerenciadas pelo provedor de nuvem, isso é uma característica de PaaS (Plataforma como Serviço).",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 17 (banco original Q74)
  {
    "tipo": "unica",
    "texto": "O que um cliente fornece em um modelo de software como serviço (SaaS)?",
    "opcoes": [
      "dados do aplicativo",
      "armazenamento de dados",
      "recursos de computação",
      "software do aplicativo"
    ],
    "resposta": 0,
    "explicacao": "O SaaS fornece uma solução de software completa, que você compra em regime de pagamento conforme o uso de um provedor de serviços de nuvem. Você aluga o uso de um aplicativo para sua organização, e seus usuários se conectam a ele pela internet, geralmente com um navegador Web. Toda a infraestrutura subjacente, middleware, software do aplicativo e dados do aplicativo ficam no datacenter do provedor de serviço — exceto os próprios dados que o cliente insere e gera usando o aplicativo, que são fornecidos/gerados pelo cliente.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-saas/",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 18 (banco original Q75)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Arquivos do Azure é um exemplo de infraestrutura como serviço (IaaS).",
      "Um servidor DNS executado em uma máquina virtual do Azure é um exemplo de plataforma como serviço (PaaS).",
      "O Microsoft Intune é um exemplo de software como serviço (SaaS)."
    ],
    "respostas": [false, false, true],
    "explicacao": "O Arquivos do Azure é, na verdade, um serviço de armazenamento de arquivos gerenciado, considerado parte da Plataforma como Serviço (PaaS), não IaaS. Um servidor DNS executado em uma máquina virtual do Azure seria considerado Infraestrutura como Serviço (IaaS), pois envolve gerenciar a infraestrutura subjacente (a própria VM). O Microsoft Intune é, de fato, um exemplo de Software como Serviço (SaaS), pois fornece software pela internet sem exigir instalação local.",
    "link": "https://learn.microsoft.com/pt-br/mem/intune/fundamentals/what-is-intune",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 19 (banco original Q82)
  {
    "tipo": "comboboxs",
    "texto": "Você planeja usar o Azure para hospedar dois aplicativos chamados App1 e App2. Os aplicativos devem atender aos seguintes requisitos:\n• Você deve conseguir modificar o código do App1.\n• O esforço administrativo para gerenciar o sistema operacional do App1 deve ser minimizado.\n• O App2 deve ser executado de forma interativa com o sistema operacional do servidor.\nQual tipo de serviço de nuvem você deve usar para cada aplicativo? Para responder, selecione as opções apropriadas na área de resposta.",
    "pares": [
      {
        "requisito": "App1:",
        "opcoes": [
          "Infraestrutura como Serviço (IaaS)",
          "Plataforma como Serviço (PaaS)",
          "Software como Serviço (SaaS)"
        ],
        "resposta": 1
      },
      {
        "requisito": "App2:",
        "opcoes": [
          "Infraestrutura como Serviço (IaaS)",
          "Plataforma como Serviço (PaaS)",
          "Software como Serviço (SaaS)"
        ],
        "resposta": 2
      }
    ],
    "explicacao": "Para o App1, o PaaS (Plataforma como Serviço) é a escolha correta: as organizações costumam usar PaaS como um framework de desenvolvimento sobre o qual desenvolvedores podem criar ou personalizar aplicativos baseados em nuvem, com recursos de nuvem como escalabilidade, alta disponibilidade e capacidade multilocatário já incluídos, reduzindo a quantidade de código necessária e minimizando o gerenciamento do sistema operacional. Para o App2, o SaaS (Software como Serviço) permite que os usuários se conectem a aplicativos baseados em nuvem e os usem pela internet, executando de forma interativa com o sistema operacional do servidor sem que o cliente precise gerenciar a infraestrutura.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/principles-cloud-computing/5-types-of-cloud-services",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 20 (banco original Q83)
  {
    "tipo": "unica",
    "texto": "Você tem um aplicativo de contabilidade chamado App1 que usa um banco de dados legado.\nVocê planeja mover o App1 para a nuvem.\nQual modelo de serviço você deve usar?",
    "opcoes": [
      "plataforma como serviço (PaaS)",
      "infraestrutura como serviço (IaaS)",
      "software como serviço (SaaS)"
    ],
    "resposta": 1,
    "explicacao": "IaaS é a escolha correta, já que é necessário instalar o software legado. Esse tipo de relocação — mover aplicativos locais existentes para a plataforma IaaS, também chamada de \"lift and shift\" — mantém os programas quase idênticos ao que eram antes, mas agora rodando em VMs na nuvem.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/migrate/azure-best-practices/contoso-migration-rehost-vm",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 21 (banco original Q84)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Ao implementar uma solução de Software como Serviço (SaaS), você é responsável por <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "configurar a alta disponibilidade",
      "definir regras de escalabilidade",
      "instalar a solução SaaS",
      "configurar a solução SaaS"
    ],
    "resposta": 4,
    "explicacao": "Ao implementar uma solução SaaS, você é responsável por configurar a solução SaaS — tudo o mais é gerenciado pelo provedor de nuvem. O SaaS exige o menor volume de gerenciamento por parte do cliente: o provedor de nuvem é responsável por gerenciar praticamente tudo, e o usuário final apenas usa o software.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-saas/",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 22 (banco original Q86)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Um banco de dados Microsoft SQL Server hospedado na nuvem e com atualizações de software gerenciadas pela Azure é um exemplo de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "recuperação de desastre como serviço (DRaaS)",
      "infraestrutura como serviço (IaaS)",
      "plataforma como serviço (PaaS)",
      "software como serviço (SaaS)"
    ],
    "resposta": 3,
    "explicacao": "A plataforma como serviço (PaaS) é um ambiente completo de desenvolvimento e implantação na nuvem, com recursos que permitem entregar desde apps simples baseados em nuvem até aplicativos empresariais sofisticados. Você adquire os recursos de que precisa junto a um provedor de serviços de nuvem, em regime de pagamento conforme o uso, e os acessa por uma conexão segura com a internet. Assim como o IaaS, o PaaS inclui infraestrutura — servidores, armazenamento e rede — mas também middleware, ferramentas de desenvolvimento, serviços de BI, sistemas de gerenciamento de banco de dados e muito mais.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-paas/",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 23 (banco original Q149)
  {
    "tipo": "dragdrop",
    "texto": "Associe os modelos de serviço de nuvem às respectivas ofertas. Cada modelo pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Infraestrutura como Serviço (IaaS)" },
      { "label": "Plataforma como Serviço (PaaS)" },
      { "label": "Software como Serviço (SaaS)" }
    ],
    "grupos": [
      "Azure App Service",
      "Máquinas virtuais do Azure",
      "Microsoft Dynamics 365"
    ],
    "respostas": {
      "Azure App Service": ["Plataforma como Serviço (PaaS)"],
      "Máquinas virtuais do Azure": ["Infraestrutura como Serviço (IaaS)"],
      "Microsoft Dynamics 365": ["Software como Serviço (SaaS)"]
    },
    "explicacao": "O Azure App Service é uma plataforma totalmente gerenciada para construir aplicativos Web — um ambiente completo de desenvolvimento e implantação na nuvem, característico de PaaS. As Máquinas Virtuais do Azure são uma oferta de Infraestrutura como Serviço (IaaS). O Dynamics 365 é um conjunto de aplicativos e serviços modulares interconectados como Software como Serviço (SaaS), projetados para transformar e capacitar clientes, funcionários e atividades de negócio.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-paas/",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 24 (banco original Q150)
  {
    "tipo": "dragdrop",
    "texto": "Associe os modelos de serviço de nuvem às respectivas soluções. Cada modelo pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Infraestrutura como Serviço (IaaS)" },
      { "label": "Plataforma como Serviço (PaaS)" },
      { "label": "Software como Serviço (SaaS)" }
    ],
    "grupos": [
      "Um servidor de arquivos baseado em nuvem",
      "Um sistema de contabilidade baseado em nuvem",
      "Um serviço baseado em nuvem para aplicativos personalizados"
    ],
    "respostas": {
      "Um servidor de arquivos baseado em nuvem": ["Infraestrutura como Serviço (IaaS)"],
      "Um sistema de contabilidade baseado em nuvem": ["Software como Serviço (SaaS)"],
      "Um serviço baseado em nuvem para aplicativos personalizados": ["Plataforma como Serviço (PaaS)"]
    },
    "explicacao": "Um servidor de arquivos baseado em nuvem se enquadra como IaaS, um tipo de serviço de computação em nuvem que oferece recursos essenciais de computação, armazenamento e rede sob demanda, em regime de pagamento conforme o uso. Um sistema de contabilidade baseado em nuvem é um exemplo de SaaS — como o Dynamics 365, que oferece aplicativos e serviços modulares de SaaS interconectados, incluindo contabilidade financeira, faturamento eletrônico e pagamentos globais com configuração sem código. Um serviço baseado em nuvem para aplicativos personalizados se enquadra como PaaS — um ambiente completo de desenvolvimento e implantação na nuvem, com recursos que possibilitam entregar desde apps simples até aplicativos empresariais sofisticados.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-iaas",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 25 (banco original Q212)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> é um serviço de análise baseado em Apache Spark.",
    "opcoes": [
      "Escolha uma opção",
      "Azure Databricks",
      "Azure Data Factory",
      "Azure DevOps",
      "Azure Synapse Analytics"
    ],
    "resposta": 1,
    "explicacao": "O Azure Databricks é uma plataforma de análise baseada em Apache Spark. A plataforma é composta por vários componentes, incluindo o 'MLib' — uma biblioteca de machine learning com algoritmos e utilitários de aprendizado comuns, incluindo classificação, regressão, agrupamento (clustering) e filtragem colaborativa.",
    "link": "https://learn.microsoft.com/pt-br/azure/databricks/introduction/",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 26 (banco original Q240)
  {
    "tipo": "unica",
    "texto": "Você precisa coletar e analisar automaticamente eventos de segurança do Microsoft Entra ID.\nO que você deve usar?",
    "opcoes": [
      "Microsoft Sentinel",
      "Azure Synapse Analytics",
      "Microsoft Entra Connect",
      "Azure Key Vault"
    ],
    "resposta": 0,
    "explicacao": "O Microsoft Sentinel é uma solução escalável, nativa em nuvem, de gerenciamento de eventos e informações de segurança (SIEM) e de resposta automatizada e orquestrada de segurança (SOAR). Ele fornece análises de segurança inteligentes e inteligência contra ameaças em toda a empresa, oferecendo uma única solução para detecção de ataques, visibilidade de ameaças, busca proativa e resposta a ameaças.",
    "link": "https://learn.microsoft.com/pt-br/azure/sentinel/overview",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 27 (banco original Q242)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um grupo de segurança de rede (NSG) bloqueia todo o tráfego de rede por padrão.",
      "Grupos de segurança de aplicativo podem ser especificados como parte das regras de um grupo de segurança de rede (NSG).",
      "Grupos de segurança de rede (NSGs) sempre incluem regras de segurança de entrada e de saída."
    ],
    "respostas": [false, true, true],
    "explicacao": "O Azure cria as regras padrão em cada grupo de segurança de rede que você cria, e essas regras permitem determinado tráfego — portanto, um NSG não bloqueia tudo por padrão. Um grupo de segurança de rede contém zero ou quantas regras forem desejadas, e essas regras podem referenciar grupos de segurança de aplicativo. O Azure cria as regras padrão de entrada (Inbound) e saída (Outbound) em cada grupo de segurança de rede que você cria.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/network-security-groups-overview",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 28 (banco original Q267)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Sua empresa implementa <combobox> para adicionar automaticamente uma marca d'água a documentos do Microsoft Word que contenham informações de cartão de crédito.",
    "opcoes": [
      "Escolha uma opção",
      "políticas do Azure",
      "proteção contra DDoS",
      "Azure Information Protection",
      "Microsoft Entra ID Protection"
    ],
    "resposta": 3,
    "explicacao": "O Azure Information Protection é usado para adicionar automaticamente uma marca d'água a documentos do Microsoft Word que contenham informações de cartão de crédito. Você usa rótulos do Azure Information Protection para aplicar classificação a documentos e e-mails; a classificação permanece identificável independentemente de onde os dados estejam armazenados ou com quem sejam compartilhados. Os rótulos podem incluir marcações visuais, como cabeçalho, rodapé ou marca d'água, e podem ser aplicados automaticamente por administradores que definem regras e condições.",
    "link": "https://learn.microsoft.com/pt-br/azure/information-protection/what-is-information-protection",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 29 (banco original Q269)
  {
    "tipo": "multipla",
    "texto": "Quais são os dois tipos de clientes elegíveis para usar o Azure Governamental para desenvolver uma solução de nuvem? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "uma contratada do governo canadense",
      "uma contratada do governo europeu",
      "uma entidade do governo dos Estados Unidos",
      "uma contratada do governo dos Estados Unidos",
      "uma entidade do governo europeu"
    ],
    "respostas": [2, 3],
    "explicacao": "O Azure Governamental é um ambiente de nuvem construído especificamente para atender aos requisitos de conformidade e segurança do governo dos EUA. Essa nuvem de missão crítica entrega inovação de ponta para clientes do governo dos EUA e seus parceiros. O Azure Governamental se aplica a governos de qualquer nível — de governos estaduais e locais a agências federais, incluindo agências do Departamento de Defesa. A principal diferença entre o Microsoft Azure e o Microsoft Azure Governamental é que o Azure Governamental é uma nuvem soberana: uma instância fisicamente separada do Azure, dedicada exclusivamente a cargas de trabalho do governo dos EUA, construída exclusivamente para agências governamentais e seus provedores de soluções.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/intro-to-azure-government/2-what-is-azure-government",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 30 (banco original Q283)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Entra ID pode ser usado para gerenciar o acesso a aplicativos locais.",
      "O Microsoft Entra ID fornece logon único (SSO).",
      "Dispositivos iOS podem ser registrados no Microsoft Entra ID."
    ],
    "respostas": [true, true, true],
    "explicacao": "O Microsoft Entra ID pode ser usado para gerenciar o acesso a aplicativos locais. Ele também oferece logon único (SSO) para aplicativos empresariais. Dispositivos iOS podem, de fato, ser registrados no Microsoft Entra ID.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/whatis",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 31 (banco original Q295)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode criar Diretivas de Grupo (Group Policies) no Microsoft Entra ID.",
      "Você pode ingressar dispositivos com Windows 10 no Microsoft Entra ID.",
      "Você pode ingressar dispositivos Android no Microsoft Entra ID."
    ],
    "respostas": [true, true, false],
    "explicacao": "Segundo a fonte original, é possível criar Diretivas de Grupo no Microsoft Entra ID (embora, na prática, esse recurso esteja associado principalmente ao Microsoft Entra Domain Services, e não ao Entra ID em si — vale conferir esse ponto com atenção antes de usar em aula). O ingresso ao Microsoft Entra ID (Azure AD Join) se aplica apenas a dispositivos Windows 10 — dispositivos Android não podem ser ingressados dessa forma (o suporte a Android geralmente ocorre via registro para gerenciamento de dispositivos móveis, não via Entra Join).",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/devices/device-join-plan",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 32 (banco original Q300)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Regulamento Geral sobre a Proteção de Dados (RGPD/GDPR) define regras de proteção de dados e privacidade.",
      "O RGPD se aplica a empresas que oferecem produtos ou serviços a indivíduos na União Europeia.",
      "O Azure pode ser usado para construir uma infraestrutura em conformidade com o RGPD."
    ],
    "respostas": [true, true, true],
    "explicacao": "O RGPD (Regulamento Geral sobre a Proteção de Dados) de fato define regras de proteção de dados e privacidade, e se aplica a qualquer empresa que ofereça bens ou serviços a indivíduos na União Europeia, independentemente de onde a empresa esteja sediada. O Azure fornece recursos e ferramentas de conformidade que podem ser usados para construir uma infraestrutura compatível com o RGPD.",
    "link": "https://azure.microsoft.com/pt-br/resources/microsoft-general-data-protection-regulation-gdpr/",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 33 (banco original Q307)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> é o processo de estabelecer a identidade de um usuário ou serviço que deseja acessar um recurso.",
    "opcoes": [
      "Escolha uma opção",
      "Autenticação",
      "Autorização",
      "Acesso Condicional",
      "Sincronização"
    ],
    "resposta": 1,
    "explicacao": "Autenticação é o processo de estabelecer a identidade de um usuário ou serviço que deseja acessar um recurso. Já a Autorização é o processo de estabelecer qual nível de acesso um usuário ou serviço autenticado possui.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/authentication-vs-authorization",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 34 (banco original Q330)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "No portal do Azure, você pode distinguir entre serviços que estão geralmente disponíveis e serviços que estão em pré-visualização pública.",
      "Depois que um serviço do Azure se torna geralmente disponível, ele deixa de receber atualizações com novos recursos.",
      "Ao criar recursos do Azure para um serviço em pré-visualização pública, você precisa recriar os recursos assim que o serviço se tornar geralmente disponível."
    ],
    "respostas": [true, false, false],
    "explicacao": "No portal do Azure, é possível distinguir entre serviços gerais disponíveis e serviços em pré-visualização. Após um serviço se tornar geralmente disponível, ele continua recebendo atualizações e novos recursos normalmente. Não é necessário recriar recursos ao passar de pré-visualização pública para disponibilidade geral.",
    "link": "https://azure.microsoft.com/pt-br/support/legal/preview-supplemental-terms/",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 35 (banco original Q331)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Ao usar uma conexão do Azure ExpressRoute, o tráfego de dados de entrada de uma rede local para o Azure é sempre gratuito.",
      "O tráfego de dados de saída do Azure para uma rede local é sempre gratuito.",
      "O tráfego de dados entre serviços do Azure dentro da mesma região do Azure é sempre gratuito."
    ],
    "respostas": [true, false, true],
    "explicacao": "Com o Azure ExpressRoute, toda a transferência de dados de entrada é gratuita. Já o tráfego de dados de saída não é gratuito — apenas o de entrada. O tráfego de dados entre serviços do Azure dentro da mesma região é gratuito.",
    "link": "https://azure.microsoft.com/pt-br/pricing/details/expressroute/",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 36 (banco original Q340)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Se sua empresa usar uma conta gratuita do Azure, você só poderá usar um subconjunto dos serviços do Azure.",
      "Todas as contas gratuitas do Azure expiram após um período específico.",
      "Você pode criar até 10 contas gratuitas do Azure usando a mesma conta Microsoft."
    ],
    "respostas": [true, true, false],
    "explicacao": "Uma conta gratuita do Azure permite usar apenas um subconjunto dos serviços do Azure (os serviços \"sempre gratuitos\" e um crédito inicial por tempo limitado). Todas as contas gratuitas do Azure expiram após um período específico. Não é possível criar até 10 contas gratuitas usando a mesma conta Microsoft — cada conta Microsoft está associada a apenas uma conta gratuita do Azure.",
    "link": "https://azure.microsoft.com/pt-br/free/free-account-faq/",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 37 (banco original Q349)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> é um serviço de análise baseado em Apache Spark.",
    "opcoes": [
      "Escolha uma opção",
      "Azure Databricks",
      "Azure Data Factory",
      "Azure DevOps",
      "Azure Synapse Analytics"
    ],
    "resposta": 1,
    "explicacao": "O Azure Databricks é uma plataforma de análise baseada em Apache Spark, projetada para ciência de dados e engenharia de dados, com componentes como o MLib (biblioteca de machine learning).",
    "link": "https://learn.microsoft.com/pt-br/azure/databricks/introduction/",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 38 (banco original Q378)
  {
    "tipo": "unica",
    "texto": "O que é um exemplo de escala vertical em um ambiente de nuvem?",
    "opcoes": [
      "adicionar uma CPU adicional a uma máquina virtual do Azure existente",
      "adicionar uma máquina virtual adicional do Azure",
      "adicionar um host de sessão adicional na Área de Trabalho Virtual do Azure",
      "adicionar automaticamente uma instância adicional do Azure App Service"
    ],
    "resposta": 0,
    "explicacao": "Escala vertical, também conhecida como scale up, é o processo de aumentar a capacidade de um único recurso, como uma máquina virtual ou banco de dados, para atender às demandas de uma carga de trabalho. Isso pode ser feito adicionando mais recursos ao recurso existente, como CPUs, memória ou armazenamento adicionais — por exemplo, adicionar uma CPU adicional a uma VM existente do Azure. A escala vertical é tipicamente usada para lidar com aumentos de demanda de curto prazo ou temporários, e costuma ser uma forma mais rápida e simples de escalar um recurso do que a escala horizontal, que envolve adicionar instâncias adicionais.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/sizes",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 39 (banco original Q389)
  {
    "tipo": "unica",
    "texto": "Qual modelo de serviço de nuvem minimiza a responsabilidade de gerenciamento do cliente?",
    "opcoes": [
      "infraestrutura como serviço (IaaS)",
      "plataforma como serviço (PaaS)",
      "software como serviço (SaaS)"
    ],
    "resposta": 2,
    "explicacao": "O software como serviço (SaaS) é um modelo de serviço de nuvem que permite aos clientes acessar e usar aplicativos de software pela internet. No modelo SaaS, o provedor é responsável por gerenciar e manter a infraestrutura, o software e os dados associados ao aplicativo. O cliente paga uma taxa de assinatura para usar o software e não precisa se preocupar em instalar, configurar ou manter o software. O SaaS minimiza a responsabilidade de gerenciamento do cliente, já que o provedor lida com a maioria das tarefas de gerenciamento, como provisionamento, dimensionamento, aplicação de patches e atualização do software.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-saas/",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 40 (banco original Q411)
  {
    "tipo": "multipla",
    "texto": "Você planeja reduzir as despesas contínuas com o Azure.\nVocê precisa identificar quais fatores afetam os custos de um recurso.\nQuais três fatores você deve identificar? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "o volume de dados de saída",
      "o volume de dados de entrada",
      "a camada de serviço",
      "a região do Azure",
      "o tipo de dado processado"
    ],
    "respostas": [0, 2, 3],
    "explicacao": "O volume de dados de saída (dados transferidos para fora do Azure) pode afetar significativamente os custos de um recurso — por exemplo, um servidor Web que envia muito conteúdo para os usuários pode gerar custos mais altos. A camada de serviço escolhida para um recurso também afeta os custos — por exemplo, uma VM mais potente custa mais. A região do Azure em que um recurso é implantado também afeta os custos, já que os preços podem variar conforme a região. O volume de dados de entrada geralmente não é cobrado, e o tipo de dado processado não altera diretamente o custo.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/costs/cost-mgt-best-practices",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 41 (banco original Q413)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: O Azure Cosmos DB é um exemplo de oferta de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "plataforma como serviço (PaaS)",
      "infraestrutura como serviço (IaaS)",
      "conteúdo como serviço",
      "software como serviço (SaaS)"
    ],
    "resposta": 1,
    "explicacao": "O Azure Cosmos DB é um exemplo de oferta de plataforma como serviço (PaaS).",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/introduction",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 42 (banco original Q445)
  {
    "tipo": "multipla",
    "texto": "No modelo de serviço de nuvem de infraestrutura como serviço (IaaS), quais são os dois componentes que são responsabilidade do provedor de serviços de nuvem? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "a configuração e manutenção do armazenamento",
      "a instalação e configuração do sistema operacional",
      "a manutenção do hardware",
      "a configuração da rede",
      "a segurança física da infraestrutura do datacenter"
    ],
    "respostas": [2, 4],
    "explicacao": "A manutenção do hardware é responsabilidade do provedor: ele cuida da compra, instalação em racks, ciclos de energia e reparo dos servidores físicos, blades, módulos de memória e arranjos de armazenamento físico dentro de seus datacenters. A segurança física da infraestrutura do datacenter também é responsabilidade do provedor: ele é dono do perímetro de segurança física, incluindo controles biométricos de acesso, câmeras de segurança, cercamento perimetral, guardas no local e proteções ambientais (como supressão de incêndio e refrigeração), garantindo que pessoas não autorizadas não possam ter acesso físico aos hosts que executam seus dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/shared-responsibility",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 43 (banco original Q447)
  {
    "tipo": "dragdrop",
    "texto": "Você precisa identificar o nível de responsabilidade compartilhada de um cliente com base no modelo de serviço de nuvem. Em qual ordem os modelos devem ser listados, da maior responsabilidade (no alto) para a menor responsabilidade do cliente (embaixo)? Para responder, mova todos os modelos da lista para a área de resposta e organize-os na ordem correta.",
    "itens": [
      { "label": "Plataforma como Serviço (PaaS)" },
      { "label": "Software como Serviço (SaaS)" },
      { "label": "Infraestrutura como Serviço (IaaS)" }
    ],
    "grupos": ["1", "2", "3"],
    "respostas": {
      "1": ["Infraestrutura como Serviço (IaaS)"],
      "2": ["Plataforma como Serviço (PaaS)"],
      "3": ["Software como Serviço (SaaS)"]
    },
    "explicacao": "No modelo IaaS, o cliente gerencia mais componentes, como sistema operacional, middleware e tempo de execução, tendo mais responsabilidade. No PaaS, o provedor gerencia quase tudo, exceto os dados e aplicativos. No SaaS, o provedor gerencia todo o ambiente, restando mínima responsabilidade ao cliente.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/shared-responsibility",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 44 (banco original Q453)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Criar e configurar uma rede virtual faz parte do modelo de serviço de nuvem de plataforma como serviço (PaaS).",
      "No modelo de serviço de nuvem de plataforma como serviço (PaaS), atualizar o código de um aplicativo Web do Azure é responsabilidade do cliente.",
      "Configurar o acesso de usuário a um modelo de serviço de nuvem de plataforma como serviço (PaaS) é responsabilidade do cliente."
    ],
    "respostas": [false, true, true],
    "explicacao": "Criar e configurar uma rede virtual é uma tarefa de infraestrutura de nível mais baixo, gerenciada pelo provedor de nuvem no modelo PaaS, não sendo responsabilidade do cliente nesse modelo. No PaaS, atualizar o código do aplicativo (como um Aplicativo Web do Azure) é responsabilidade do cliente, já que a plataforma gerencia a infraestrutura, mas o código da aplicação é de responsabilidade de quem a desenvolve. Configurar o acesso de usuário (identidade e permissões) a um serviço PaaS também é responsabilidade do cliente.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/shared-responsibility",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 45 (banco original Q454)
  {
    "tipo": "unica",
    "texto": "Você precisa migrar um servidor local usando uma migração do tipo lift-and-shift.\nPara qual tipo de serviço de nuvem você deve migrar?",
    "opcoes": [
      "infraestrutura como serviço (IaaS)",
      "software como serviço (SaaS)",
      "plataforma como serviço (PaaS)"
    ],
    "resposta": 0,
    "explicacao": "Uma migração do tipo lift-and-shift move os aplicativos locais existentes para a plataforma de Infraestrutura como Serviço (IaaS), praticamente sem alterações — os programas continuam quase idênticos ao que eram antes, mas agora rodam em VMs na nuvem.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/migrate/azure-best-practices/contoso-migration-rehost-vm",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 46 (banco original Q462)
  {
    "tipo": "unica",
    "texto": "O Microsoft 365 é um exemplo de qual modelo de serviço de nuvem?",
    "opcoes": [
      "infraestrutura como serviço (IaaS)",
      "plataforma como serviço (PaaS)",
      "software como serviço (SaaS)"
    ],
    "resposta": 2,
    "explicacao": "O Microsoft 365 (antigo Office 365) fornece aplicativos de software baseados em nuvem, como Word, Excel, Outlook e Teams, pela internet. No modelo SaaS, a Microsoft gerencia toda a infraestrutura subjacente, middleware e software do aplicativo; os usuários simplesmente se conectam e usam os aplicativos, geralmente por um navegador Web ou software instalado localmente e gerenciado centralmente pela nuvem — eliminando a necessidade de os usuários ou organizações se preocuparem com instalação, manutenção ou gerenciamento do software ou da infraestrutura subjacente.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  },
  // Questao 47 (banco original Q472)
  {
    "tipo": "dragdrop",
    "texto": "Associe o serviço de nuvem à descrição correta. Cada serviço pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Infraestrutura como Serviço (IaaS)" },
      { "label": "Plataforma como Serviço (PaaS)" },
      { "label": "Software como Serviço (SaaS)" }
    ],
    "grupos": [
      "Fornece o maior controle sobre o ambiente de nuvem.",
      "Fornece o maior controle sobre o design de um banco de dados sem precisar manter o sistema operacional.",
      "Usado para hospedar máquinas virtuais do Azure."
    ],
    "respostas": {
      "Fornece o maior controle sobre o ambiente de nuvem.": ["Infraestrutura como Serviço (IaaS)"],
      "Fornece o maior controle sobre o design de um banco de dados sem precisar manter o sistema operacional.": ["Plataforma como Serviço (PaaS)"],
      "Usado para hospedar máquinas virtuais do Azure.": ["Infraestrutura como Serviço (IaaS)"]
    },
    "explicacao": "De todos os modelos de entrega de nuvem, o IaaS concede o maior grau de controle administrativo e arquitetônico: como o provedor de nuvem provisiona apenas o hardware físico e a camada de hypervisor de virtualização, você tem propriedade completa a partir do sistema operacional para cima. Já o PaaS é a definição mais clássica de um modelo PaaS orientado a banco de dados (como o Banco de Dados SQL do Azure): o provedor de nuvem abstrai, automatiza e mantém completamente as VMs subjacentes, patches do SO e alocação de armazenamento físico, liberando as equipes de engenharia da manutenção de infraestrutura para focar no design do banco de dados. Ao provisionar instâncias de computação na nuvem para hospedar VMs, você está utilizando diretamente o IaaS — você escolhe as especificações de computação (vCores, RAM) e a imagem do sistema operacional, e esse ambiente de VM pertence inteiramente a você para gerenciar durante seu ciclo de vida operacional.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-iaas/",
    "dominio": "Descrever os tipos de serviço de nuvem",
    "simulado": "az-2026-bloco03"
  }

];