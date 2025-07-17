// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AI-900
// ==========================================

export const questoes = [
  //FABRICIO
  {
    "tipo": "combobox",
    "texto": "O Azure Machine Learning designer permite que você crie modelos de machine learning <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "adicionando e conectando módulos em um canvas visual.",
      "executando automaticamente tarefas comuns de preparação de dados.",
      "selecionando automaticamente um algoritmo para construir o modelo mais preciso.",
      "usando uma experiência baseada em notebooks com foco em código."
    ],
    "resposta": 1,
    "explicacao": "O Azure Machine Learning designer é uma interface gráfica baseada em arrastar e soltar, que permite aos usuários criar pipelines de aprendizado de máquina conectando módulos visuais. Essa abordagem facilita a criação de modelos sem exigir codificação, ideal para cenários de baixo código.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-designer",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre aprendizado de máquina automatizado (AutoML) no Azure.",
    "afirmacoes": [
      "O aprendizado de máquina automatizado permite incluir scripts Python personalizados em um pipeline de treinamento.",
      "O aprendizado de máquina automatizado implementa soluções de machine learning sem exigir experiência em programação.",
      "O aprendizado de máquina automatizado permite conectar visualmente conjuntos de dados e módulos em um canvas interativo."
    ],
    "respostas": [
      false,
      true,
      false
    ],
    "explicacao": "A primeira afirmação é falsa, pois o AutoML não permite a inclusão direta de scripts Python personalizados em seu pipeline padrão — isso é possível com o Azure ML SDK e Designer. A segunda afirmação é verdadeira, pois o AutoML foi projetado para facilitar o uso sem a necessidade de escrever código. A terceira afirmação é falsa, pois a funcionalidade de conectar visualmente datasets e módulos está disponível no Azure Machine Learning Designer, e não no AutoML.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "unica",
    "texto": "Um projeto de pesquisa médica utiliza um grande conjunto de dados anonimizados de imagens de escaneamento cerebral que são categorizadas em tipos predefinidos de hemorragia cerebral. É necessário usar aprendizado de máquina para apoiar a detecção precoce dos diferentes tipos de hemorragia cerebral nas imagens antes que elas sejam analisadas por uma pessoa. Este é um exemplo de qual tipo de aprendizado de máquina?",
    "opcoes": [
      "Clustering",
      "Regressão",
      "Classificação"
    ],
    "resposta": 2,
    "explicacao": "Como os tipos de hemorragia cerebral já estão previamente definidos, trata-se de um problema de classificação supervisionada. O modelo de aprendizado de máquina será treinado com dados rotulados para identificar corretamente a qual categoria cada nova imagem pertence.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamentals-machine-learning/3-types-of-machine-learning",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "unica",
    "texto": "Ao treinar um modelo, por que você deve dividir aleatoriamente as linhas em subconjuntos separados?",
    "opcoes": [
      "Treinar o modelo duas vezes para obter melhor precisão",
      "Treinar múltiplos modelos simultaneamente para obter melhor desempenho",
      "Testar o modelo usando dados que não foram utilizados no treinamento"
    ],
    "resposta": 2,
    "explicacao": "A divisão aleatória dos dados em subconjuntos permite criar conjuntos de treinamento e teste. Isso é essencial para avaliar a capacidade de generalização do modelo, testando-o com dados que ele nunca viu antes.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/introduction-to-machine-learning/",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "multipla",
    "texto": "Você está avaliando se deve usar um workspace básico ou empresarial no Azure Machine Learning. Quais são duas tarefas que exigem um workspace empresarial?",
    "opcoes": [
      "Usar uma interface gráfica do usuário (GUI) para executar experimentos de aprendizado de máquina automatizado.",
      "Criar uma instância de computação para usar como estação de trabalho.",
      "Usar uma interface gráfica do usuário (GUI) para definir e executar experimentos de aprendizado de máquina com o Azure Machine Learning designer.",
      "Criar um conjunto de dados a partir de um arquivo CSV (valores separados por vírgula)."
    ],
    "respostas": [
      0,
      1
    ],
    "explicacao": "O uso do aprendizado de máquina automatizado com interface gráfica e a criação de instâncias de computação são funcionalidades que exigem o uso de um workspace empresarial no Azure Machine Learning. As demais opções estão disponíveis em workspaces básicos.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-workspace?view=azureml-api-2",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "multipla",
    "texto": "Você precisa prever a faixa de renda de um cliente com base no seguinte conjunto de dados. Quais dois campos você deve usar como variáveis preditoras (features)?",
    "imagemUrl": "img/imgq47.png",
    "opcoes": [
      "Nível educacional",
      "Sobrenome",
      "Idade",
      "Faixa de renda",
      "Nome"
    ],
    "respostas": [
      0,
      2
    ],
    "explicacao": "Para prever a faixa de renda (variável de saída), é necessário selecionar variáveis preditoras (features) relevantes. Idade e nível educacional são características do cliente que influenciam sua renda. Nome e sobrenome não são preditores úteis e a faixa de renda é a variável alvo, portanto, não deve ser usada como feature.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/introduction-to-machine-learning/",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo uma ferramenta que processará imagens de lojas de varejo e identificará os produtos de concorrentes. A solução usará um modelo personalizado. Qual serviço do Azure Cognitive Services você deve usar?",
    "opcoes": [

      "Visão Personalizada",
      "Reconhecedor de Formulários",
      "Face",
      "Visão Computacional"

    ],
    "resposta": 0,
    "explicacao": "O serviço Visão Personalizada permite treinar um modelo personalizado de classificação ou detecção de objetos com base em imagens fornecidas pelo usuário, sendo ideal para cenários como identificação de produtos de concorrentes em ambientes de varejo.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/custom-vision-service/home",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre exemplos de clustering em aprendizado de máquina.",
    "afirmacoes": [
      "Organizar documentos em grupos com base em semelhanças do texto contido nos documentos é um exemplo de clustering.",
      "Agrupar pacientes semelhantes com base em sintomas e resultados de testes diagnósticos é um exemplo de clustering.",
      "Prever se uma pessoa desenvolverá sintomas de alergia leves, moderados ou graves com base na contagem de pólen é um exemplo de clustering."
    ],
    "respostas": [
      true,
      true,
      false
    ],
    "explicacao": "As duas primeiras afirmações descrevem corretamente o uso de clustering, pois envolvem agrupamento sem rótulos pré-definidos. A terceira afirmação descreve uma tarefa de classificação, pois busca prever um rótulo específico (leve, moderado, grave).",
    "link": "https://learn.microsoft.com/pt-br/training/modules/introduction-to-machine-learning/",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o uso de conjuntos de validação em aprendizado de máquina.",
    "afirmacoes": [
      "Um conjunto de validação inclui o conjunto de exemplos de entrada que será usado para treinar um modelo.",
      "Um conjunto de validação pode ser usado para determinar quão bem um modelo prevê rótulos.",
      "Um conjunto de validação pode ser usado para verificar se todos os dados de treinamento foram usados para treinar o modelo."
    ],
    "respostas": [
      false,
      true,
      false
    ],
    "explicacao": "O conjunto de validação não é utilizado para treinar o modelo, mas sim para avaliar o desempenho dele em dados que não foram usados no treinamento. A segunda afirmação está correta, pois o conjunto de validação mede a capacidade preditiva. A terceira afirmação está incorreta, pois esse não é o propósito do conjunto de validação.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são duas métricas que você pode usar para avaliar um modelo de regressão? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Coeficiente de determinação (R²)",
      "Pontuação F1",
      "Erro quadrático médio (RMSE)",
      "Área sob a curva (AUC)",
      "Acurácia balanceada"
    ],
    "respostas": [
      0,
      2
    ],
    "explicacao": "O coeficiente de determinação (R²) mede a proporção da variância nos dados que é explicada pelo modelo de regressão. Já o erro quadrático médio (RMSE) quantifica a diferença entre os valores previstos e os valores reais. Ambas são métricas apropriadas para avaliar modelos de regressão. As demais são utilizadas para modelos de classificação.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml#regression",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "combobox",
    "texto": "Prever quantos veículos atravessarão uma ponte em um determinado dia é um exemplo de <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "classificação",
      "agrupamento (clustering)",
      "regressão"
    ],
    "resposta": 3,
    "explicacao": "Prever uma quantidade numérica contínua, como o número de veículos que cruzam uma ponte, é uma tarefa de regressão, que é usada para prever valores numéricos com base em variáveis independentes.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml#regression",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você precisa usar o Azure Machine Learning Designer para construir um modelo que prevê preços de automóveis. Quais módulos devem ser usados para completar o modelo? Arraste os módulos apropriados para os locais corretos.",
    "imagemUrl": "img/imgq53.png",
    "itens": [
      {
        "label": "Select Columns in Dataset"
      },
      {
        "label": "Split Data"
      },
      {
        "label": "Linear Regression"
      }
    ],
    "grupos": [
      "Grupo 1",
      "Grupo 2",
      "Grupo 3"
    ],
    "respostas": {
      "Grupo 1": [
        "Select Columns in Dataset"
      ],
      "Grupo 2": [
        "Split Data"
      ],
      "Grupo 3": [
        "Linear Regression"
      ]
    },
    "explicacao": "O módulo 'Select Columns in Dataset' é usado para escolher as colunas relevantes. Em seguida, o módulo 'Split Data' divide os dados em conjuntos de treinamento e teste. Finalmente, como o objetivo é prever valores contínuos (preço), utiliza-se o módulo 'Linear Regression'.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/algorithm-module-reference/linear-regression",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "unica",
    "texto": "Qual tipo de aprendizado de máquina você deve usar para identificar grupos de pessoas com hábitos de compra semelhantes?",
    "opcoes": [
      "Classificação",
      "Regressão",
      "Agrupamento (Clustering)"
    ],
    "resposta": 2,
    "explicacao": "O agrupamento (clustering) é uma técnica de aprendizado não supervisionado usada para identificar grupos de dados com características semelhantes. No caso de hábitos de compra, essa abordagem permite segmentar pessoas em grupos com base em comportamentos semelhantes, mesmo sem rótulos prévios.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamentals-machine-learning/3-types-of-machine-learning",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> modelos podem ser usados para prever o preço de venda de itens leiloados.",
    "opcoes": [
      "Selecione uma resposta",
      "Classificação",
      "Agrupamento (Clustering)",
      "Regressão"
    ],
    "resposta": 3,
    "explicacao": "A regressão é usada quando a saída esperada é um valor numérico contínuo, como o preço de um item. Esse tipo de modelo aprende a partir de dados históricos para prever valores futuros com base em variáveis de entrada.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamentals-machine-learning/3-types-of-machine-learning",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "unica",
    "texto": "Qual métrica você pode usar para avaliar um modelo de classificação?",
    "opcoes": [
      "Taxa de verdadeiros positivos (True Positive Rate)",
      "Erro absoluto médio (MAE)",
      "Coeficiente de determinação (R²)",
      "Raiz do erro quadrático médio (RMSE)"
    ],
    "resposta": 0,
    "explicacao": "A taxa de verdadeiros positivos (True Positive Rate) é uma métrica comumente usada para avaliar modelos de classificação, especialmente em cenários de classificação binária. Ela mede a proporção de positivos reais que foram corretamente identificados pelo modelo.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/component-reference/evaluate-model?view=azureml-api-2",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "multipla",
    "texto": "Quais dois componentes você pode arrastar para o canvas no Azure Machine Learning Designer? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Conjunto de dados (dataset)",
      "Computação (compute)",
      "Pipeline",
      "Módulo (module)"
    ],
    "respostas": [
      0,
      3
    ],
    "explicacao": "No Azure Machine Learning Designer, os usuários podem arrastar conjuntos de dados e módulos para o canvas visual. Esses elementos são essenciais para criar, treinar e avaliar modelos de machine learning. Os recursos de computação são configurados separadamente e os pipelines são o resultado final da composição dos elementos no canvas.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-designer",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa criar um conjunto de dados de treinamento e um conjunto de dados de validação a partir de um conjunto de dados existente. Qual módulo no Azure Machine Learning Designer você deve usar?",
    "opcoes": [
      "Selecionar colunas no conjunto de dados (Select Columns in Dataset)",
      "Adicionar linhas (Add Rows)",
      "Dividir dados (Split Data)",
      "Unir dados (Join Data)"
    ],
    "resposta": 2,
    "explicacao": "O módulo 'Split Data' no Azure Machine Learning Designer permite dividir um conjunto de dados em subconjuntos, como conjuntos de treinamento e validação, o que é uma prática comum para avaliação de modelos de machine learning.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/component-reference/split-data",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os tipos de aprendizado de máquina aos cenários apropriados.",
    "itens": [
      {
        "label": "Prever quantos minutos de atraso um voo terá com base na quantidade de neve em um aeroporto."
      },
      {
        "label": "Segmentar clientes em diferentes grupos para apoiar o departamento de marketing."
      },
      {
        "label": "Prever se um aluno concluirá um curso universitário."
      }
    ],
    "grupos": [
      "Classificação",
      "Agrupamento (Clustering)",
      "Regressão"
    ],
    "respostas": {
      "Regressão": [
        "Prever quantos minutos de atraso um voo terá com base na quantidade de neve em um aeroporto."
      ],
      "Agrupamento (Clustering)": [
        "Segmentar clientes em diferentes grupos para apoiar o departamento de marketing."
      ],
      "Classificação": [
        "Prever se um aluno concluirá um curso universitário."
      ]
    },
    "explicacao": "Regressão é usada para prever valores numéricos contínuos. Clustering agrupa dados semelhantes sem rótulos definidos. Classificação prevê categorias baseadas em entradas, como prever se um aluno concluirá ou não um curso.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamentals-machine-learning/",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> é a probabilidade calculada de uma classificação correta de imagem.",
    "opcoes": [
      "Selecione uma resposta",
      "Acurácia",
      "Confiança",
      "Erro quadrático médio (RMSE)",
      "Sentimento"
    ],
    "resposta": 2,
    "explicacao": "Confiança representa a probabilidade calculada de que a previsão feita por um modelo de classificação de imagem está correta. Por exemplo, ao classificar uma imagem como 'gato', o modelo pode retornar 95% de confiança nessa previsão.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/custom-vision-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "combobox",
    "texto": "Garantir que um sistema de IA não forneça uma previsão quando campos importantes contêm valores incomuns ou ausentes está relacionado ao princípio de <combobox> da IA responsável.",
    "opcoes": [
      "Selecione uma resposta",
      "Inclusão",
      "Privacidade e segurança",
      "Confiabilidade e segurança",
      "Transparência"
    ],
    "resposta": 3,
    "explicacao": "Confiabilidade e segurança são princípios da IA responsável que garantem que os sistemas de IA sejam robustos e seguros, mesmo quando há entrada de dados inesperada ou valores ausentes. Esse princípio busca prevenir decisões incorretas ou perigosas causadas por falhas nos dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/well-architected/ai/responsible-ai",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-2"
  },
  {
    "tipo": "combobox",
    "texto": "Garantir que as variáveis numéricas nos dados de treinamento estejam em uma escala semelhante é um exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "Ingestão de dados",
      "Engenharia de atributos",
      "Seleção de atributos",
      "Treinamento de modelo"
    ],
    "resposta": 2,
    "explicacao": "A engenharia de atributos (feature engineering) inclui atividades como normalização e padronização dos dados, o que garante que variáveis numéricas estejam na mesma escala. Isso é essencial para melhorar o desempenho de muitos algoritmos de aprendizado de máquina.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/how-to-configure-auto-features?view=azureml-api-1",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "combobox",
    "texto": "Atribuir classes às imagens antes de treinar um modelo de classificação é um exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "Avaliação",
      "Engenharia de atributos",
      "Ajuste de hiperparâmetros",
      "Rotulagem"
    ],
    "resposta": 4,
    "explicacao": "Rotulagem é o processo de atribuir categorias ou valores aos dados, como marcar imagens com rótulos de classes. Esse passo é essencial antes de treinar modelos supervisionados de classificação.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml#etapa-1-preparar-dados",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "simnao",
    "texto": "Você tem um modelo do Azure Machine Learning que prevê a qualidade do produto. O modelo tem um conjunto de dados de treinamento que contém 50.000 registros. Uma amostra dos dados é mostrada na tabela a seguir.",
    "imagemUrl": "img/imgq64.png",
    "afirmacoes": [
      "Massa (kg) é uma característica.",
      "Teste de Qualidade é um rótulo.",
      "Temperatura (C) é um rótulo."
    ],
    "respostas": [
      true,
      true,
      false
    ],
    "explicacao": "Em aprendizado supervisionado, as características (features) são os dados de entrada usados para prever o rótulo (label). Neste caso, 'Massa (kg)' e 'Temperatura (C)' são características que ajudam a prever o 'Teste de Qualidade', que é o rótulo de saída.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml#etapa-2-selecionar-variável-de-previsão-e-rotular-dados",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre tipos de aprendizado de máquina.",
    "afirmacoes": [
      "Você treina um modelo de regressão usando dados não rotulados.",
      "A técnica de classificação é usada para prever dados numéricos sequenciais ao longo do tempo.",
      "Agrupar itens por suas características em comum é um exemplo de clusterização."
    ],
    "respostas": [
      false,
      false,
      true
    ],
    "explicacao": "A primeira afirmação está incorreta, pois modelos de regressão requerem dados rotulados com valores contínuos. A segunda também está incorreta, já que classificação é usada para prever categorias, não séries temporais — nesse caso seria mais apropriado usar modelos como RNNs. A terceira afirmação está correta, pois a clusterização agrupa elementos com base em similaridade, sem necessidade de rótulos.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamentals-machine-learning/3-types-of-machine-learning",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "multipla",
    "texto": "Quais duas ações são realizadas durante as etapas de ingestão e preparação de dados em um processo de Machine Learning do Azure? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "Calcular a precisão do modelo.",
      "Pontuar dados de teste usando o modelo.",
      "Combinar múltiplos conjuntos de dados.",
      "Usar o modelo para previsões em tempo real.",
      "Remover registros que contêm valores ausentes."
    ],
    "respostas": [
      2,
      4
    ],
    "explicacao": "Durante a etapa de ingestão e preparação de dados no processo de machine learning, é comum combinar diversos conjuntos de dados para formar uma base unificada de análise. Além disso, registros com valores ausentes são tratados ou removidos para garantir a qualidade e a consistência dos dados antes do treinamento do modelo. As demais ações são realizadas em etapas posteriores do ciclo de machine learning.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-ml-pipelines?view=azureml-api-2",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa prever a população animal de uma determinada área. Qual tipo de Machine Learning do Azure você deve usar?",
    "opcoes": [
      "Regressão",
      "Agrupamento (clustering)",
      "Classificação"
    ],
    "resposta": 0,
    "explicacao": "A tarefa de prever a população animal envolve estimar um valor numérico contínuo com base em variáveis de entrada. Esse tipo de problema é típico da técnica de regressão, que é usada em machine learning para prever números contínuos, como preços, temperaturas ou contagens.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/algorithm-cheat-sheet?view=azureml-api-1#kinds-of-machine-learning",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o uso de rótulos (labels) em modelos de machine learning.",
    "afirmacoes": [
      "Para um modelo de regressão, os rótulos devem ser numéricos.",
      "Para um modelo de agrupamento (clustering), os rótulos devem ser usados.",
      "Para um modelo de classificação, os rótulos devem ser numéricos."
    ],
    "respostas": [
      true,
      false,
      false
    ],
    "explicacao": "Em modelos de regressão, os rótulos (valores a serem previstos) devem ser numéricos, pois o objetivo é prever valores contínuos. Em modelos de clustering, não se utilizam rótulos, pois são métodos não supervisionados que agrupam dados com base em similaridades. Já os modelos de classificação utilizam rótulos categóricos, e não necessariamente numéricos, pois classificam dados em categorias distintas.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/algorithm-cheat-sheet",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa deseja construir uma máquina de reciclagem para garrafas. A máquina deve identificar automaticamente garrafas com o formato correto e rejeitar todos os outros itens. Qual tipo de carga de trabalho de IA a empresa deve utilizar?",
    "opcoes": [
      "Detecção de anomalias",
      "IA conversacional",
      "Visão computacional",
      "Processamento de linguagem natural"
    ],
    "resposta": 2,
    "explicacao": "A visão computacional permite que sistemas interpretem e compreendam informações visuais a partir de imagens ou vídeos. Nesse caso, a máquina de reciclagem utiliza a visão computacional para identificar visualmente garrafas com o formato correto e filtrar objetos indesejados.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/ai-services#categories-of-azure-ai-services",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre a criação de modelos de detecção de objetos no serviço Custom Vision.",
    "afirmacoes": [
      "Ao criar um modelo de detecção de objetos no serviço Custom Vision, é necessário escolher um tipo de classificação entre Multirrótulo (Multilabel) ou Multiclasse (Multiclass).",
      "É possível criar um modelo de detecção de objetos no serviço Custom Vision para localizar o conteúdo dentro de uma imagem.",
      "Ao criar um modelo de detecção de objetos no serviço Custom Vision, é possível selecionar entre um conjunto de domínios predefinidos."
    ],
    "respostas": [
      false,
      true,
      true
    ],
    "explicacao": "No serviço Custom Vision, é necessário selecionar o tipo de classificação (Multirrótulo ou Multiclasse) ao configurar o projeto. Esse serviço também permite treinar modelos de detecção de objetos, capazes de identificar e localizar conteúdos em imagens. Além disso, oferece domínios predefinidos otimizados para diferentes cenários, como alimentos, produtos e ambientes.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/custom-vision-service/get-started-build-detector",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "combobox",
    "texto": "Contar o número de animais em uma área com base em uma transmissão de vídeo é um exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "Previsão (forecasting)",
      "Visão computacional (computer vision)",
      "IA conversacional (conversational AI)",
      "Detecção de anomalias (anomaly detection)"
    ],
    "resposta": 2,
    "explicacao": "A tarefa de contar animais com base em um vídeo exige a análise de conteúdo visual, que é realizada por meio da visão computacional. Essa carga de trabalho permite identificar e rastrear objetos em imagens ou vídeos, sendo ideal para aplicações como vigilância, controle de espécies e monitoramento ambiental.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/ai-services#categories-of-azure-ai-services",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o uso do serviço Face do Azure para reconhecimento facial de funcionários.",
    "afirmacoes": [
      "O serviço Face pode ser usado para realizar reconhecimento facial de funcionários.",
      "O serviço Face será mais preciso se você fornecer mais fotos de amostra de cada funcionário em diferentes ângulos.",
      "Se um funcionário estiver usando óculos escuros, o serviço Face sempre falhará ao reconhecê-lo."
    ],
    "respostas": [
      true,
      true,
      false
    ],
    "explicacao": "O serviço Face do Azure é projetado para identificar e verificar rostos humanos em imagens, podendo ser usado para reconhecimento facial de funcionários. A precisão melhora com múltiplas amostras de ângulos variados. Embora acessórios como óculos escuros possam afetar a precisão, o serviço não falha automaticamente em todos os casos, pois depende do treinamento e qualidade das imagens.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/face/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa desenvolver um aplicativo móvel para que os funcionários escaneiem e armazenem suas despesas durante viagens. Qual tipo de visão computacional você deve utilizar?",
    "opcoes": [
      "Segmentação semântica",
      "Classificação de imagem",
      "Detecção de objetos",
      "Reconhecimento óptico de caracteres (OCR)"
    ],
    "resposta": 3,
    "explicacao": "O Reconhecimento Óptico de Caracteres (OCR) é usado para extrair texto impresso ou manuscrito de imagens, como recibos e faturas. Para digitalizar e armazenar despesas de viagem, a aplicação precisa extrair os dados textuais dos documentos escaneados, o que é exatamente a função do OCR.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview-ocr",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o serviço Custom Vision do Azure.",
    "afirmacoes": [
      "O serviço Custom Vision pode ser usado para detectar objetos em uma imagem.",
      "O serviço Custom Vision exige que você forneça seus próprios dados para treinar o modelo.",
      "O serviço Custom Vision pode ser usado para analisar arquivos de vídeo."
    ],
    "respostas": [
      true,
      true,
      false
    ],
    "explicacao": "O Custom Vision permite criar modelos personalizados de detecção de objetos em imagens, e requer que os usuários forneçam seus próprios conjuntos de dados rotulados para treinamento. No entanto, ele não é projetado para análise direta de vídeos; para isso, o serviço adequado é o Video Indexer.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/custom-vision-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "unica",
    "texto": "Você está processando fotos de corredores em uma corrida. É necessário ler os números nas camisetas dos corredores para identificá-los nas fotos. Qual tipo de visão computacional você deve utilizar?",
    "opcoes": [
      "Reconhecimento facial",
      "Reconhecimento óptico de caracteres (OCR)",
      "Classificação de imagem",
      "Detecção de objetos"
    ],
    "resposta": 1,
    "explicacao": "O reconhecimento óptico de caracteres (OCR) é a técnica apropriada para extrair texto de imagens, como os números nas camisetas dos corredores. Isso permite identificar os indivíduos por meio dos caracteres visuais registrados nas fotos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview-ocr",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os tipos de aprendizado de máquina aos cenários apropriados. Arraste o tipo de aprendizado de máquina da coluna da esquerda para o cenário correspondente à direita.",
    "itens": [
      {
        "label": "Classificação de imagem"
      },
      {
        "label": "Detecção de objetos"
      },
      {
        "label": "Segmentação semântica"
      }
    ],
    "grupos": [
      "Separar imagens de ursos polares e ursos marrons.",
      "Determinar a localização de um urso em uma foto.",
      "Determinar quais pixels em uma imagem fazem parte de um urso."
    ],
    "respostas": {
      "Separar imagens de ursos polares e ursos marrons.": [
        "Classificação de imagem"
      ],
      "Determinar a localização de um urso em uma foto.": [
        "Detecção de objetos"
      ],
      "Determinar quais pixels em uma imagem fazem parte de um urso.": [
        "Segmentação semântica"
      ]
    },
    "explicacao": "A classificação de imagem é usada para categorizar imagens inteiras em classes, como diferentes tipos de animais. A detecção de objetos identifica a posição de um objeto dentro de uma imagem. Já a segmentação semântica classifica cada pixel da imagem para indicar quais pertencem ao objeto de interesse.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/ai-services#categories-of-azure-ai-services",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "unica",
    "texto": "Você utiliza drones para identificar onde crescem ervas daninhas entre fileiras de plantações e enviar uma instrução para sua remoção. Isso é um exemplo de qual tipo de visão computacional?",
    "opcoes": [
      "Detecção de objetos (object detection)",
      "Reconhecimento óptico de caracteres (OCR)",
      "Segmentação de cena (scene segmentation)"
    ],
    "resposta": 0,
    "explicacao": "A detecção de objetos é usada para localizar e identificar objetos específicos em uma imagem ou vídeo. No cenário descrito, a tecnologia é aplicada para detectar a presença de ervas daninhas entre as plantações, permitindo que ações automatizadas sejam tomadas com base nessa localização.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/ai-services/image-video-processing",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe as tarefas de reconhecimento facial às perguntas apropriadas. Arraste a tarefa correta da coluna da esquerda para a pergunta correspondente na coluna da direita.",
    "itens": [
      {
        "label": "verificação"
      },
      {
        "label": "semelhança"
      },
      {
        "label": "agrupamento"
      },
      {
        "label": "identificação"
      }
    ],
    "grupos": [
      "As duas imagens de um rosto pertencem à mesma pessoa?",
      "Essa pessoa se parece com outras pessoas?",
      "Todos os rostos pertencem ao mesmo grupo?",
      "Quem é essa pessoa neste grupo de pessoas?"
    ],
    "respostas": {
      "As duas imagens de um rosto pertencem à mesma pessoa?": [
        "verificação"
      ],
      "Essa pessoa se parece com outras pessoas?": [
        "semelhança"
      ],
      "Todos os rostos pertencem ao mesmo grupo?": [
        "agrupamento"
      ],
      "Quem é essa pessoa neste grupo de pessoas?": [
        "identificação"
      ]
    },
    "explicacao": "A verificação compara dois rostos para confirmar se pertencem à mesma pessoa. A similaridade mede o quão semelhantes são dois rostos. O agrupamento organiza rostos semelhantes em grupos. A identificação busca determinar quem é a pessoa com base em um conjunto de rostos conhecidos.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/face/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os tipos de cargas de trabalho de visão computacional aos cenários apropriados. Arraste o tipo da coluna da esquerda para o cenário correspondente à direita.",
    "itens": [
      {
        "label": "Reconhecimento facial"
      },
      {
        "label": "Reconhecimento óptico de caracteres (OCR)"
      },
      {
        "label": "Detecção de objetos"
      }
    ],
    "grupos": [
      "Identificar celebridades em imagens.",
      "Extrair nomes de filmes de pôsteres de filmes.",
      "Localizar veículos em imagens."
    ],
    "respostas": {
      "Identificar celebridades em imagens.": [
        "Reconhecimento facial"
      ],
      "Extrair nomes de filmes de pôsteres de filmes.": [
        "Reconhecimento óptico de caracteres (OCR)"
      ],
      "Localizar veículos em imagens.": [
        "Detecção de objetos"
      ]
    },
    "explicacao": "O reconhecimento facial é utilizado para identificar pessoas em imagens, como celebridades. O OCR é utilizado para extrair texto de imagens, como nomes de filmes em pôsteres. A detecção de objetos é usada para localizar e identificar a presença de itens específicos, como veículos, em imagens.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/ai-services/image-video-processing",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa determinar a localização de carros em uma imagem para que possa estimar a distância entre eles. Qual tipo de visão computacional você deve usar?",
    "opcoes": [
      "Reconhecimento óptico de caracteres (OCR)",
      "Detecção de objetos (object detection)",
      "Classificação de imagem (image classification)",
      "Detecção facial (face detection)"
    ],
    "resposta": 1,
    "explicacao": "A detecção de objetos é usada para localizar e identificar instâncias específicas de objetos, como carros, dentro de uma imagem. Isso permite calcular a posição dos objetos e, com base nisso, estimar a distância entre eles.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/ai-services/image-video-processing",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-2"
  },
  {
    "tipo": "multipla",
    "texto": "Em quais dois cenários você pode usar o serviço Form Recognizer? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Extrair o número da fatura a partir de uma nota fiscal.",
      "Traduzir um formulário do francês para o inglês.",
      "Localizar a imagem de um produto em um catálogo.",
      "Identificar o nome do varejista a partir de um recibo."
    ],
    "respostas": [
      0,
      3
    ],
    "explicacao": "O Form Recognizer é um serviço de IA que permite extrair informações estruturadas de documentos como notas fiscais e recibos. Ele pode identificar campos como número da fatura e nome do comerciante. No entanto, tradução de idiomas é uma função do Translator e identificação de imagens pertence à visão computacional.",
    "link": "https://learn.microsoft.com/pt-br/azure/applied-ai-services/form-recognizer/overview",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-2"
  }




];
