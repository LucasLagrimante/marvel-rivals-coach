import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const magik: HeroGuide = {
  id: 'magik',
  name: 'Magia',
  aliases: ['Magik', 'Illyana Rasputin', 'Darkchild', 'Darkchylde', 'Rainha do Limbo', 'Soul Sorceress'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/magik.png'),
  bannerUrl: publicAsset('heroes/banners/magik.png'),
  selectionPortraitUrl: publicAsset('heroes/select/magik.png'),
  selectionHoverUrl: publicAsset('heroes/select/magik_champion.gif'),
  theme: {
    primary: '#9b3bc4',
    primaryRgb: '155, 59, 196',
    secondary: '#f5c518',
    secondaryRgb: '245, 197, 24',
    surface: '#140b24',
    surfaceRgb: '20, 11, 36',
  },
  roles: ['duelist'],
  lastVerified: '2026-05-15',
  confidenceSummary:
    'Kit auditado em 15/05/2026 com página oficial da NetEase, busca por wiki.gg, MRivals.GG, Mobalytics, MarvelRivals.gg, Blitz e Reddit. A wiki.gg não retornou página textual utilizável nesta sessão; por isso os valores numéricos foram priorizados da página oficial atual e cruzados com bases/guias secundários. Controles corrigidos: Stepping Discs é [key:Shift] e Umbral Incursion é [key:E]. Dano normal do Magik Slash corrigido para 45-81 porque fontes secundárias ainda listam 45-90.',
  coreRead: [
    'O macete central da Magia é economizar o portal: Stepping Discs ([key:Shift]) tem 2 cargas e invulnerabilidade durante o deslocamento, então a primeira carga pode criar o ângulo e a segunda precisa ficar reservada para apagar o burst inimigo ou sair depois da kill.',
    'Magik Slash ([key:RMB]) não é só poke: desde a versão atual ele perfura inimigos e reduz o cooldown de Stepping Discs em 1s por inimigo atravessado. Em corredor, carregue o corte antes da entrada para recuperar portal enquanto já inicia o combo.',
    'Depois do portal, o follow-up correto muda a luta: Eldritch Whirl ([key:LMB]) é o botão de explosão em área e combina com dash imediato; Demon\'s Rage ([key:RMB]) é melhor quando você quer dano estacionário, pressionar escudo/deployable ou bater em Vanguard sem se expor no centro.',
    'Darkchild não dá vida extra. O valor real é gastar cooldowns antes de transformar, receber tudo de volta e lutar com Stepping Discs de 3s, Magik Slash de 90-180 e hitboxes maiores. Transformar no aberto, com cooldowns prontos, desperdiça o ultimate.',
  ],
  systems: [
    {
      name: 'Stepping Discs',
      input: 'Shift',
      heading: 'Portal é imunidade, não só entrada',
      facts: [
        'Oficialmente: 2 cargas, 6s de cooldown por carga, 10m de distância, 12m/s de velocidade média, 3s de janela para follow-up e invulnerabilidade enquanto a Magia se move pelo portal.',
        'O portal abre duas escolhas: [key:LMB] vira Eldritch Whirl e [key:RMB] vira Demon\'s Rage. Não trate os dois como dano automático; escolha antes de entrar, porque a janela de 3s passa rápido.',
        'Macete de dive: [key:Shift] para cruzar o ângulo, [key:LMB] para Whirl e [key:E] imediatamente depois. A interação carrega o giro para frente e ainda termina com o launch do Umbral Incursion.',
        'Macete defensivo: segure uma carga para negar ultimate, stun ou burst previsível. Mains reforçam que queimar portal e dash no mesmo engajamento é o erro que transforma a Magia em alvo de 250 HP sem saída.',
      ],
      meter: [
        { label: 'Carga 1', value: 'entrada ou reposicionamento' },
        { label: 'Carga 2', value: 'fuga ou imunidade' },
        { label: 'Janela pós-portal', value: '3s para Whirl ou Demon' },
      ],
    },
    {
      name: 'Limbo\'s Might',
      input: 'Passiva',
      heading: 'Todo hit compra sobrevivência',
      facts: [
        'Converte 30% do dano causado em HP bônus, com limite de +150. O valor vem de acertar constantemente: Soulsword, Magik Slash, Eldritch Whirl e Demon\'s Rage alimentam o escudo.',
        'O HP bônus não compensa whiff. Se o primeiro golpe erra, a Magia entra com corpo de Duelista leve e sem buffer. Por isso o combo deve começar de ângulo ou com alvo já sem escape.',
        'Demon\'s Rage é o uso não óbvio da passiva: quando o demônio fica batendo, ele continua gerando HP bônus enquanto você reposiciona ou pressiona outro lado da hurtbox.',
      ],
      meter: [
        { label: 'Conversão', value: '30% do dano' },
        { label: 'Teto', value: '+150 HP bônus' },
        { label: 'Risco', value: 'errar = sem sustain' },
      ],
    },
    {
      name: 'Darkchild',
      input: 'Q',
      heading: 'Transforme depois de gastar tudo',
      facts: [
        'A página oficial lista 12s de duração e 3400 de custo de energia. A transformação fortalece todas as habilidades e, segundo guias de execução, recarrega os cooldowns ao entrar na forma.',
        'Durante Darkchild, Stepping Discs cai para 3s, Magik Slash passa a 90-180 de dano e Demon\'s Rage sobe para 200 de vida. Soulsword acerta 3 hits de 35, com alcance maior e falloff diferente.',
        'Regra prática: use [key:RMB], [key:E] e uma carga de [key:Shift] antes de [key:Q]. Se você aperta ultimate com tudo disponível, perde o principal macete da personagem: dois ciclos de cooldown na mesma fight.',
        'A reversão de Darkchild tem punição: guias de mains avisam que a Magia não ataca durante a volta, mas ainda pode morrer. Termine perto de cobertura, portal ou suporte aliado.',
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelista',
      nickname: 'Flanker de Limbo',
      health: '250 HP',
      difficulty: 'Alta: exige ângulo de entrada, cancelamentos, economia de portal e leitura de cooldown defensivo',
      job: 'Quebrar a backline por janela curta: entrar fora do ângulo principal, converter burst em HP bônus e sair antes que o time inimigo vire a câmera.',
      verdict:
        'Escolha Magia quando há suportes isolados, rotas laterais fortes e front line aliado capaz de puxar atenção. Evite entrar cedo contra Peni Parker, Namor, The Thing, Bucky ou composições agrupadas com muito controle: elas punem exatamente o intervalo entre fim do portal e início da saída.',
      playstyle: [
        'A Magia tem fase de preparação maior que outros melee. Ande por rotas laterais, espere o suporte gastar escape e carregue [key:RMB] atrás de cobertura. Entrar pela frente só entrega seu corpo de 250 HP para controle em cadeia.',
        'O combo de abertura deve resolver uma pergunta: "esse alvo morre antes do peel chegar?". Se sim, [key:RMB] carregado → [key:E] → [key:LMB] → [key:Melee] finaliza a maioria dos alvos frágeis. Se não, use [key:Shift] para provocar cooldown e sair, não para insistir no chão.',
        'Quando o portal abre follow-up, não aperte Whirl por reflexo. Reddit e Mobalytics convergem no mesmo ponto: Demon\'s Rage costuma ser melhor no neutro porque continua batendo e gerando HP bônus, enquanto Whirl é para burst imediato ou múltiplos alvos.',
      ],
      priorityKicker: 'Execução',
      priorityTitle: 'Sequência de entrada',
      priorityDescription:
        'A Magia não tem árvore de upgrade: a prioridade é a ordem de botões dentro da janela de dive. O objetivo é entrar com dano já carregado, confirmar a kill e manter recurso de saída.',
      upgradePlan: [
        {
          rank: 1,
          input: 'RMB',
          ability: 'Magik Slash',
          label: 'corte carregado + recarga de portal',
          why:
            'A versão oficial atual causa 45-81 de dano, carrega até 2s, atinge dano máximo após 1,2s e reduz Stepping Discs em 1s por inimigo perfurado. Carregar atrás de cobertura antes do dive coloca dano na luta sem expor a Magia.',
          swapWhen:
            'Se o alvo já está colado ou sem vida, use Soulsword cancel em vez de segurar charge; se há corredor com dois ou mais inimigos, priorize o corte para acelerar o próximo portal.',
          sourceIds: ['official-magik', 'mrivals-magik', 'mobalytics-magik'],
        },
        {
          rank: 2,
          input: 'E',
          ability: 'Umbral Incursion',
          label: 'dash de dano e launch',
          why:
            'A página oficial atual lista 16m, 46m/s, 85 de dano e 8s de cooldown no estado normal. Use como confirmação após o corte carregado: ele encurta distância, lança o alvo e deixa o Soulsword conectar antes do suporte reagir.',
          swapWhen:
            'Contra alvo com stun disponível, não gaste [key:E] primeiro. Faça portal defensivo, espere o controle sair e só então use o dash como confirmação.',
          sourceIds: ['official-magik', 'mobalytics-magik', 'marvelrivalsgg-magik'],
        },
        {
          rank: 3,
          input: 'LMB',
          ability: 'Soulsword',
          label: 'dano principal com cancelamento',
          why:
            'Soulsword causa 75 de dano, tem 6,5m de alcance e falloff a partir de 4,5m. O truque é cancelar depois que o hit conecta: [key:LMB] → [key:Melee] → [key:LMB] acelera o dano e gera mais HP bônus pela passiva.',
          swapWhen:
            'Se o alvo está fora de 4,5m, não confie no dano cheio do swing; use [key:RMB] ou reposicione antes de bater.',
          sourceIds: ['official-magik', 'mobalytics-magik', 'blitz-magik'],
        },
        {
          rank: 4,
          input: 'Shift',
          ability: 'Stepping Discs',
          label: 'imunidade + follow-up',
          why:
            'É a habilidade que decide se a Magia vive. Cada carga tem 6s de cooldown e invulnerabilidade durante o movimento. Use uma para criar ângulo ou negar dano; manter a segunda é o seguro contra peel.',
          swapWhen:
            'Se Darkchild está ativo, o cooldown cai para 3s: aí o portal vira também ferramenta ofensiva de rotação, mas ainda precisa ser usado para esquivar foco.',
          sourceIds: ['official-magik', 'mobalytics-magik', 'reddit-magik-learning'],
        },
        {
          rank: 5,
          input: 'LMB',
          ability: 'Eldritch Whirl',
          label: 'follow-up de área pós-portal',
          why:
            'Após Stepping Discs, [key:LMB] vira um giro 360°. O macete avançado é usar [key:E] logo depois para carregar o Whirl para frente e ainda aplicar o launch.',
          swapWhen:
            'No neutro contra alvo único ou Vanguard, prefira Demon\'s Rage se você precisa de dano persistente e HP bônus sem ficar parado no meio do time inimigo.',
          sourceIds: ['official-magik', 'mobalytics-magik', 'reddit-magik-learning'],
        },
        {
          rank: 6,
          input: 'RMB',
          ability: 'Demon\'s Rage',
          label: 'demônio estacionário que compra HP bônus',
          why:
            'Depois do portal, [key:RMB] invoca um demônio que bate por até 4s. No estado normal ele tem 100 de vida; no Darkchild, 200. Colocado atrás ou ao lado do alvo, força dano em dois ângulos e continua alimentando Limbo\'s Might.',
          swapWhen:
            'Durante Darkchild, Mobalytics recomenda priorizar Whirl para dano em área; use Demon\'s Rage quando você precisa zonear porta, escudo, deployable ou alvo sem mobilidade.',
          sourceIds: ['official-magik', 'mobalytics-magik', 'reddit-magik-learning'],
        },
        {
          rank: 7,
          input: 'Q',
          ability: 'Darkchild',
          label: 'dois ciclos de cooldown',
          why:
            'Com 12s de duração, habilidades ampliadas e cooldowns restaurados na transformação, o ultimate vale por sequência dupla: gaste os botões, transforme e repita com portais mais rápidos.',
          swapWhen:
            'Segure se Luna Snow, Mantis ou outro suporte defensivo ainda tem ultimate pronto. Use Darkchild para forçar esses recursos ou espere seu time forçá-los antes.',
          sourceIds: ['official-magik', 'mobalytics-magik'],
        },
        {
          rank: 8,
          input: 'C',
          ability: 'Chain of Cyttorak',
          label: 'team-up Arcane Order',
          why:
            'Com Doctor Strange na composição, Magia recebe Chain of Cyttorak: projétil de 120m/s, 45 de dano inicial, 30 no alvo secundário, elo de até 4s, slow que cresce até 40% a 5m e 20s de cooldown.',
          swapWhen:
            'Use quando dois inimigos saem juntos da backline. O elo pune separação, então é melhor antes do dive do que depois que o alvo já escapou.',
          sourceIds: ['official-magik'],
        },
      ],
      adaptations: [
        'Contra Peni Parker e Namor: não seja a primeira a entrar. Minas, turrets e summons punem o local onde a Magia reaparece; deixe seu time limpar utilidade ou escolha um ângulo sem deployable.',
        'Contra The Thing, Bucky e outros controles curtos: provoque cooldown com [key:Shift] e saia. Se [key:E] for usado antes do controle inimigo, você perde o dano e a saída.',
        'Contra suportes com ultimate defensivo: entre para forçar o recurso, recue com a segunda carga de portal e reentre quando o efeito acabar. Darkchild em cura massiva vira teatro, não kill.',
        'Com Doctor Strange: Chain of Cyttorak é a marca de entrada. Acertou dois alvos ligados? Avance no suporte que tenta se separar, porque o slow cresce com a distância entre eles.',
      ],
      ultimates: [
        {
          stance: 'Fight de objetivo',
          name: 'Darkchild',
          bestUse:
            'Quando 2+ inimigos estão comprometidos no ponto ou payload e os suportes defensivos já gastaram cooldown grande. Ativar só para perseguir um alvo isolado raramente paga 3400 de energia.',
          execution:
            'Prepare [key:RMB] carregado → use [key:E] ou [key:Shift] para forçar resposta → gaste o follow-up pós-portal → ative [key:Q] atrás de cobertura → entre com [key:Shift] de 3s, Whirl ampliado, [key:E] mais forte e Magik Slash de 90-180.',
          upgradeValue:
            'O ganho não é vida extra; é reset e aceleração. Se a transformação começa com cooldowns disponíveis, você perde metade do teto de dano e ainda anuncia para o time inimigo focar você.',
        },
      ],
      dashGuide: {
        ability: 'Stepping Discs + Whirl dash',
        shortRule:
          'Depois de [key:Shift], [key:LMB] → [key:E] faz o Whirl avançar e terminar com launch. Use isso para transformar o portal em burst, não só deslocamento.',
        mechanics: [
          'Stepping Discs dá invulnerabilidade durante o movimento. A janela fraca é a saída: o inimigo bom espera você reaparecer, então já saia com follow-up decidido.',
          'O combo Whirl + dash depende de timing: use [key:LMB] depois do portal e [key:E] imediatamente. Se atrasar, o giro fica parado e o alvo sai do alcance.',
          'Soulsword tem falloff, algo incomum para melee. Dentro de 4,5m o dano é cheio; perto de 6,5m ele cai para metade. A Magia precisa colar de verdade antes de cancelar.',
        ],
        drills: [
          'No treino, repita: [key:Shift] → [key:LMB] → [key:E]. O objetivo é o giro viajar junto com o dash e o alvo subir no fim.',
          'Treine a entrada sem portal: [key:RMB] carregado atrás de cobertura → soltar → [key:E] → [key:LMB] → [key:Melee]. Use para aprender o dano que mata 250/275/300 HP.',
          'Treine decisão pós-portal: em três repetições use Whirl; em três, use Demon\'s Rage. O objetivo é parar de apertar [key:LMB] por reflexo.',
        ],
      },
      patterns: [
        {
          title: 'Pick em suporte de 250-300 HP',
          steps: [
            'Entre pela lateral e carregue Magik Slash ([key:RMB]) fora da visão principal.',
            'Solte o corte no suporte e use Umbral Incursion ([key:E]) mirando levemente à direita do corpo, como recomendado por guias de mains para compensar a câmera em terceira pessoa.',
            'Conecte Soulsword ([key:LMB]) e cancele com [key:Melee] depois do hit. Se o alvo sobreviveu, não caminhe no aberto: use [key:Shift] para sair ou reposicionar.',
          ],
        },
        {
          title: 'Portal que nega burst',
          steps: [
            'Segure uma carga de Stepping Discs ([key:Shift]) quando o inimigo tem stun, ultimate ou burst previsível.',
            'Entre no portal no momento em que o dano seria aplicado; a invulnerabilidade cobre o deslocamento.',
            'Na saída, escolha Demon\'s Rage ([key:RMB]) se você precisa gerar HP bônus sem ficar parado, ou Eldritch Whirl ([key:LMB]) se há alvo frágil dentro do alcance.',
          ],
        },
        {
          title: 'Darkchild de cooldown duplo',
          steps: [
            'Antes do ultimate, gaste Magik Slash ([key:RMB]), Umbral Incursion ([key:E]) e uma carga de Stepping Discs ([key:Shift]) com follow-up.',
            'Ative Darkchild ([key:Q]) atrás de cobertura para receber os cooldowns de volta e evitar foco imediato.',
            'Reentre com Stepping Discs de 3s, Magik Slash de 90-180 e Whirl ampliado. Se o time inimigo ativa cura defensiva, use os portais para esperar o efeito acabar em vez de morrer no meio.',
          ],
        },
      ],
      abilityLoop: ['Magik Slash', 'Umbral Incursion', 'Soulsword', 'Stepping Discs', 'Eldritch Whirl', 'Demon\'s Rage', 'Darkchild', 'Chain of Cyttorak'],
      mistakes: [
        'Usar as duas cargas de Stepping Discs para entrar. Sem uma carga guardada, qualquer stun ou peel transforma a Magia em uma Duelista de 250 HP presa no melee.',
        'Apertar Eldritch Whirl sempre que sai do portal. Contra alvo único, Demon\'s Rage frequentemente gera mais valor por dano persistente, pressão lateral e HP bônus.',
        'Transformar em Darkchild com habilidades prontas. O reset de cooldowns é o macete principal; começar com tudo disponível joga fora metade do ultimate.',
        'Bater de longe com Soulsword. O ataque tem falloff a partir de 4,5m e cai para 50% em 6,5m; se você não colou, o combo não mata.',
        'Entrar em backline agrupada sem cooldown inimigo gasto. Magia ganha 1v1, mas perde quando três câmeras viram ao mesmo tempo.',
      ],
      evidence: [
        'official-magik',
        'mrivals-magik',
        'mobalytics-magik',
        'marvelrivalsgg-magik',
        'blitz-magik',
        'reddit-magik-learning',
      ],
    },
  },
  sources: [
    {
      id: 'official-magik',
      kind: 'official',
      title: 'MAGIK — Marvel Rivals Hero Page',
      url: 'https://www.marvelrivals.com/20241123/41360_1195682.html',
      author: 'Marvel Rivals / NetEase',
      published: '2024-11-23',
      confidence: 'alta',
      takeaways: [
        'Confirma Magik como Duelist, 250 HP e 6m/s de velocidade.',
        'Confirma controles atuais: Soulsword [key:LMB], Magik Slash [key:RMB], Stepping Discs [key:Shift], Umbral Incursion [key:E], Darkchild [key:Q] e Chain of Cyttorak [key:C].',
        'Confirma Soulsword com 75 de dano, 6,5m de alcance, falloff a partir de 4,5m e intervalo de 0,83s por hit.',
        'Confirma Limbo\'s Might com 30% de conversão em HP bônus e teto de +150.',
        'Confirma Magik Slash normal com 45-81 de dano, carga máxima de 2s, dano máximo após 1,2s, projétil perfurante e redução de 1s do cooldown de Stepping Discs por inimigo atravessado.',
        'Confirma Umbral Incursion normal com 16m, 46m/s, 85 de dano e 8s de cooldown.',
        'Confirma Darkchild com 12s de duração, 3400 de energia, Stepping Discs de 3s, Magik Slash de 90-180, Demon\'s Rage com 200 de vida e Chain of Cyttorak com 20s de cooldown.',
      ],
    },
    {
      id: 'wiki-gg-magik-pending',
      kind: 'database',
      title: 'Magik — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Magik',
      published: '2026-05',
      confidence: 'pendente',
      takeaways: [
        'Busca obrigatória executada por "Magik Marvel Rivals wiki.gg"; o índice da wiki apareceu, mas a página textual do herói não ficou acessível para extração confiável nesta sessão.',
        'Por segurança, nenhum valor numérico foi importado apenas dessa fonte pendente.',
        'Próxima auditoria deve reabrir a página wiki.gg e comparar danos/cooldowns se o conteúdo ficar disponível.',
      ],
    },
    {
      id: 'mrivals-magik',
      kind: 'database',
      title: 'Magik — MRivals.GG Hero Database',
      url: 'https://mrivals.gg/heroes/magik',
      published: '2026-01',
      confidence: 'media',
      takeaways: [
        'Confirma a mecânica do Magik Slash como projétil perfurante com 6s de cooldown e redução de 1s no cooldown de Stepping Discs por inimigo atravessado; diverge do site oficial ao listar 45-90 em vez de 45-81.',
        'Confirma Stepping Discs com 2 cargas, 6s de cooldown, 10m de distância e janela de 3s para Eldritch Whirl ou Demon\'s Rage.',
        'Confirma Limbo\'s Might com 30% de conversão e teto de +150 HP bônus.',
      ],
    },
    {
      id: 'mobalytics-magik',
      kind: 'guide',
      title: 'Marvel Rivals Magik Character Guide — Mobalytics',
      url: 'https://mobalytics.gg/marvel-rivals/magik-guide',
      published: '2026-05',
      confidence: 'alta',
      takeaways: [
        'Recomenda flancos e surpresa: a Magia precisa entrar, explodir alvo e escapar antes de morrer.',
        'Destaca que Stepping Discs deve ser usado para evadir habilidades, não apenas para dano pós-portal.',
        'Confirma animation cancel de Soulsword com melee e outras habilidades, desde que o hit conecte antes do cancelamento.',
        'Explica o macete Whirl + Umbral Incursion: após portal, usar Whirl e dash imediatamente faz o giro avançar e terminar com launch.',
        'Reforça Darkchild atrás de cobertura e com cooldowns gastos, porque a transformação não concede HP extra e recarrega habilidades.',
      ],
    },
    {
      id: 'marvelrivalsgg-magik',
      kind: 'guide',
      title: 'Magik Guide: How to Play, Combos & Counters — MarvelRivals.gg',
      url: 'https://marvelrivals.gg/magik-guide/',
      author: 'Theo',
      published: '2025-04-23',
      confidence: 'media',
      takeaways: [
        'Recomenda manter pelo menos uma carga de Stepping Discs para escape.',
        'Lista combos úteis como Magik Slash carregado → Umbral Incursion → Soulsword e Stepping Discs → Eldritch Whirl → Umbral Incursion → Soulsword → Magik Slash → Stepping Discs.',
        'Prioriza Strategists e Duelists frágeis como alvos; Vanguards só quando já estão enfraquecidos.',
        'Lista counters e respostas: controle, grupo unido, Luna Snow, Winter Soldier, Venom e Groot punem entradas previsíveis.',
      ],
    },
    {
      id: 'blitz-magik',
      kind: 'guide',
      title: 'Magik — Marvel Rivals Hero Guide — Blitz',
      url: 'https://blitz.gg/marvel-rivals/article/7rQ0lFUy5eFMWb3amwyDBH',
      author: 'Kubi K',
      published: '2025-02-07',
      confidence: 'media',
      takeaways: [
        'Confirma Soulsword como golpe em arco amplo com alcance de 6,5m e possibilidade de animation cancel.',
        'Lista Magik Slash como projétil de 45-90, cooldown de 6s e velocidade de 80m/s em dados pré-ajuste; mantido apenas como evidência histórica/secundária porque o oficial atual mostra 45-81.',
        'Reforça que Magia depende de agressividade constante para sustentar Limbo\'s Might e sofre se for pega sem Stepping Discs.',
      ],
    },
    {
      id: 'reddit-magik-learning',
      kind: 'forum',
      title: 'Trying to learn Magik — r/RivalsMagikMains',
      url: 'https://www.reddit.com/r/RivalsMagikMains/comments/1s37ncs/trying_to_learn_magik/',
      published: '2026-03',
      confidence: 'media',
      takeaways: [
        'Consenso de mains: treinar variações de combo no practice range e aceitar limit test para aprender alcance real da personagem.',
        'Dica recorrente: usar quick melee depois do primário quando estiver perto, mas evitar se o alvo estiver longe porque o cancel pode whiffar.',
        'Dica recorrente: guardar dash e portal para escape; não gastar todos os cooldowns em um único engage.',
        'Dica específica: não usar Whirl toda vez depois do portal no estado normal; mirar e posicionar Demon\'s Rage costuma gerar mais valor.',
      ],
    },
    {
      id: 'video-magik-pending',
      kind: 'video-transcript',
      title: 'Guias em vídeo da Magia — transcrição pendente',
      url: 'https://www.youtube.com/results?search_query=Marvel+Rivals+Magik+guide+advanced+2026',
      published: '2026-05',
      confidence: 'pendente',
      takeaways: [
        'Busca por vídeo foi identificada como próxima etapa, mas nenhuma transcrição auditável com timestamps foi processada nesta sessão.',
        'Nenhum dado de vídeo foi usado para dano, cooldown ou combo frame-by-frame.',
        'Próximo enriquecimento deve validar timing exato de Whirl + dash e exemplos de Darkchild em VOD com timestamp.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Oficial',
      count: 1,
      status: 'Página oficial da NetEase usada para role, HP, controles, danos, cooldowns, duração, energia e team-up atual.',
    },
    {
      kind: 'database',
      label: 'Wiki/Database',
      count: 2,
      status: 'Busca em wiki.gg executada, mas sem extração textual confiável; MRivals.GG usado como base secundária para validar detalhes de kit.',
    },
    {
      kind: 'guide',
      label: 'Guias',
      count: 3,
      status: 'Mobalytics, MarvelRivals.gg e Blitz usados para combos, cancelamentos, counters e plano de decisão.',
    },
    {
      kind: 'forum',
      label: 'Fórum/Comunidade',
      count: 1,
      status: 'Reddit de mains usado para erros comuns, economia de cooldown e preferência situacional por Demon\'s Rage.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos',
      count: 0,
      status: 'Pendente: nenhuma transcrição com timestamps foi processada; nenhum dado de vídeo foi inventado.',
    },
  ],
}
