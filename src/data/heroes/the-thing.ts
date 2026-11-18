import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const theThing: HeroGuide = {
  id: 'the-thing',
  name: 'The Thing',
  aliases: ['Ben Grimm', 'Coisa', 'Quarteto Fantástico'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/the-thing.png'),
  bannerUrl: publicAsset('heroes/banners/the-thing.png'),
  selectionPortraitUrl: publicAsset('heroes/select/the-thing.png'),
  selectionHoverUrl: publicAsset('heroes/select/the-thing_champion.gif'),
  selectionHoverFit: { scale: 1.65, x: 0, y: 0 },
  theme: {
    primary: '#c47a2b',
    primaryRgb: '196, 122, 43',
    secondary: '#8b5a1e',
    secondaryRgb: '139, 90, 30',
    surface: '#1a1208',
    surfaceRgb: '26, 18, 8',
  },
  roles: ['vanguard'],
  lastVerified: '2026-11-18',
  confidenceSummary:
    'Números e teclas reconferidos em 18/11/2026 na ficha oficial do herói: 725 HP, 6 m/s; Rocky Jab em sequência dupla de 40 por golpe (0,33s entre golpes, 1s entre séries); Stone Haymaker 55 + 8% da vida máxima, 8m de alcance e Vida Bônus até 150; Yancy Street Charge com 12s de recarga, 5s de duração e 200 de Vida Bônus; Clobberin\' Time com 2800 de energia, 100 de dano, 2,5s de stun e alcance de até 18m. O guia tratava Embattled Leap e Battle Blitz como uma única habilidade na tecla E: são duas, com Embattled Leap no E (20% de redução de dano para si e para aliados a 5m do pouso por 3s) e Battle Blitz no F (20% de Vulnerabilidade por 3s), ambas com 20m de alcance, 3s de recarga base e duas cargas de 10s. A redução de 25% publicada antes era da wiki e não bate com a ficha. Team-Ups conferidos no bundle oficial vivo: Two in One (Human Torch, C) e Unbreakable Forces (Invisible Woman, C).',
  coreRead: [
    'Unyielding Will (Passiva) é o diferencial: imune a knockback, launch-up e displacement — mas NÃO a freeze. Luna Snow ainda o congela. Use a imunidade para manter posição em fights de ponto.',
    'Stone Haymaker ([key:RMB]) é o transformador: 55 + 8% HP máx do alvo, avança 3m ao atacar, ganha até 150 de HP bônus. Acertar inimigo voador o faz cair ao chão — abra para burst.',
    'Yancy Street Charge ([key:Shift]) dura 5s, cria a zona que impede mobilidade inimiga, recarrega em 12s e dá 200 de Vida Bônus durante a carga. Ótimo para chokepoints e payload.',
    'Clobberin\' Time ([key:Q]) é o ultimate de teamfight: fissura que avança até 18m pelo chão, 100 de dano, stun de 2,5s e 2800 de energia. Ative quando 3+ inimigos estiverem agrupados.',
  ],
  teamUps: {
    summary:
      'Two in One é o padrão (estado flamejante transforma Rocky Jab em splash e Stone Haymaker em explosão). Unbreakable Forces entra quando há Invisible Woman no time ou quando você precisa de sustain; no patch 10.5, seu CD caiu para 15s e a cura aprimorada dispara a cada 125 de dano recebido. Ambos os team-ups são válidos — a escolha depende da composição do time.',
    recommended: 'Two in One',
    recommendedReason:
      'Two in One transforma o kit: Rocky Jab causa splash damage e Stone Haymaker cria explosão em cone frontal. O aprimorado com Human Torch permite que ele levante The Thing e o arremesse, causando dano e stun, entrando automaticamente no estado flamejante ao pousar. Unbreakable Forces é mais defensivo e brilha com Invisible Woman aliada, mas o base do Two in One já é forte sozinho.',
    options: [
      {
        name: 'Two in One',
        partner: 'Human Torch',
        partnerRole: 'Duelista',
        input: 'C',
        baseEffect:
          'Entre em um estado aprimorado ao ativar. Durante a duração, os punhos de The Thing são violentamente envoltos em chamas. Cada Rocky Jab causa dano em área, e cada Stone Haymaker cria uma explosão, causando dano em um cone frontal.',
        enhancedEffect:
          'Ao fazer dupla com Human Torch, Human Torch pode levantar The Thing no ar e arremessá-lo no chão, causando dano e Stun aos inimigos. The Thing entra automaticamente em seu estado aprimorado flamejante ao pousar.',
        bestFor:
          'Dano em área, pressão em objetivos e teamfights. O estado flamejante transforma Rocky Jab em splash e Stone Haymaker em explosão — ideal para composições agressivas.',
        easySetup:
          'Human Torch aliado. Sem ele o estado flamejante ainda transforma os ataques — o arremesso é o diferencial.',
        iconUrl: publicAsset('teamups/the-thing-two-in-one-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/the-thing-two-in-one-partner.png'),
      },
      {
        name: 'Unbreakable Forces',
        partner: 'Invisible Woman',
        partnerRole: 'Estrategista',
        input: 'C',
        baseEffect:
          'Gere uma camada de Psionic Armor ao ativar, concedendo Bonus Health que escala com o Health atualmente perdido.',
        enhancedEffect:
          'Ao fazer dupla com Invisible Woman, a Psionic Armor é fortificada. Enquanto ativa, cada vez que The Thing toma uma quantidade definida de dano, a armadura pulsa uma onda de cura em área para aliados. Além disso, a taxa de conversão de Health perdido em Bonus Health é aumentada.',
        bestFor:
          'Sustain, proteção de aliados e composições defensivas. O Bonus Health escala com HP perdido — mais forte quando low HP. A pulsação de cura em área beneficia todo o time; no patch 10.5, o limiar caiu de 150 para 125 de dano, tornando mais frequentes as janelas de cura durante a armadura. O CD também caiu de 20s para 15s: use-a com mais frequência para estabilizar a linha, sem desperdiçar o bônus de vida ao ativar com vida cheia.',
        easySetup:
          'Invisible Woman aliada. Sem ela a armadura ainda concede Bonus Health — a fortificação e a pulsação de cura são o diferencial.',
        iconUrl: publicAsset('teamups/the-thing-unbreakable-forces-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/the-thing-unbreakable-forces-partner.png'),
      },
    ],
    sourceIds: ['official-teamups', 'wiki-the-thing', 'balance-20260911', 'balance-20261009'],
  },
  systems: [
    {
      name: 'Unyielding Will',
      input: 'Passiva',
      facts: [
        'Imune a knockback, launch-up e displacement — mantém posição em fights de ponto.',
        'NÃO imune a freeze: Luna Snow ainda o congela. Cuidado com composições de controle.',
        'Imunidade permite avançar sem recuar — use para pressionar chokepoints e payload.',
      ],
    },
    {
      name: 'Stone Haymaker',
      input: 'RMB',
      facts: [
        '55 + 8% HP máx do alvo (balance post 20260911: reduzido de 10% para 8%).',
        'Avança 3m ao atacar e converte o dano causado em Vida Bônus, até 150.',
        'Acertar inimigo voador o faz cair ao chão — abra para burst com Rocky Jab.',
      ],
    },
  ],
  roleGuides: {
    vanguard: {
      key: 'vanguard',
      label: 'Vanguarda',
      nickname: 'A Coisa',
      health: '725 HP',
      difficulty: 'Fácil (1/5): kit direto, mas exige gestão de cargas e timing de Stone Haymaker',
      job: 'Avance para o combate, use Yancy Street Charge para criar zona Earthbound, mantenha pressão com Rocky Jab e Stone Haymaker, e ative Clobberin\' Time em teamfights para stun múltiplos inimigos.',
      verdict:
        'Escolha The Thing quando o time precisa de um Vanguard disruptor com controle de área e sustain. Funciona bem em mapas com chokepoints e composições com Human Torch ou Invisible Woman. Evite contra kiting de longo alcance (Punisher, Iron Man) sem suporte para fechar distância.',
      playstyle: [
        'The Thing opera como um brawler de linha de frente: avance, crie espaço com Yancy Street Charge, e sustente dano com Rocky Jab e Stone Haymaker. Use Embattled Leap para proteger aliados e Battle Blitz para iniciar engajamentos.',
        'Yancy Street Charge é o controle de área: dura 5s e a zona impede mobilidade inimiga. Use em chokepoints, payload e para punir inimigos que tentam escapar.',
        'Stone Haymaker é o transformador: 55 + 8% HP máx do alvo, avança 3m, ganha até 150 de HP bônus. Acertar inimigo voador o faz cair — abra para burst.',
        'Clobberin\' Time é o ultimate de teamfight: fissura que avança até 18m, 100 de dano, stun de 2,5s e 2800 de energia. Ative quando 3+ inimigos estiverem agrupados.',
      ],
      priorityKicker: 'Sequência',
      priorityTitle: 'Prioridade de habilidades',
      priorityDescription:
        'The Thing não tem upgrades numerados — a prioridade aqui é a ordem de uso de cada habilidade dentro de um engajamento para maximizar o controle de área e o burst.',
      upgradePlan: [
        {
          rank: 1,
          input: 'Shift',
          ability: 'Yancy Street Charge',
          label: 'Controle de área + entrada no combate',
          why: '12s de recarga e 5s de duração. Carga para frente que lança inimigos para cima e cria a zona que impede mobilidade enquanto está ativa. Ganha 200 de Vida Bônus durante a carga. Use para iniciar engajamentos ou punir chokepoints.',
          swapWhen: 'Se Yancy Street Charge está em CD, use Embattled Leap para entrar no combate ou posicione-se atrás de aliados para esperar o CD.',
          sourceIds: ['wiki-the-thing', 'balance-20260911'],
        },
        {
          rank: 2,
          input: 'RMB',
          ability: 'Stone Haymaker',
          label: 'Burst + HP bônus + anti-aéreo',
          why: '55 + 8% HP máx do alvo, avança 3m, ganha até 150 de HP bônus. Acertar inimigo voador o faz cair ao chão. Use para finalizar alvos ou punir inimigos aéreos.',
          swapWhen: 'Se Stone Haymaker está em CD, use Rocky Jab para dano contínuo ou espere o CD para o próximo engajamento.',
          sourceIds: ['wiki-the-thing', 'balance-20260911'],
        },
        {
          rank: 3,
          input: 'E / F',
          ability: 'Embattled Leap (E) / Battle Blitz (F)',
          label: 'Mobilidade + proteção / vulnerabilidade',
          why: 'Embattled Leap (E): pula até um aliado a 20m e dá 20% de redução de dano para si e para os aliados a 5m do pouso por 3s. Battle Blitz (F): pula até um inimigo a 20m e aplica 20% de Vulnerabilidade a quem estiver a 5m do pouso por 3s. As duas dividem duas cargas de 10s, com 3s de recarga base entre usos. Use Embattled Leap para proteger aliados e Battle Blitz para abrir engajamento.',
          swapWhen: 'Se as cargas estão em CD, use Yancy Street Charge para mobilidade ou posicione-se para esperar as cargas recarregarem.',
          sourceIds: ['official-thing-sheet'],
        },
        {
          rank: 4,
          input: 'LMB',
          ability: 'Rocky Jab',
          label: 'Dano principal',
          why: '40 de dano por golpe em sequência dupla (0,33s entre os dois golpes, 1s entre séries) a 4m de alcance: é o melhor TTK do kit. Use para dano contínuo e acúmulo de ultimate.',
          swapWhen: 'Se Rocky Jab não está alcançando o alvo, use Stone Haymaker para burst ou Yancy Street Charge para fechar distância.',
          sourceIds: ['wiki-the-thing'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Clobberin\' Time',
          label: 'Ultimate de teamfight — stun em área',
          why: '100 de dano, alcance de até 18m, stun de 2,5s e 2800 de energia. Fissura que avança pelo chão. Ative quando 3+ inimigos estiverem agrupados em objetivo ou teamfight.',
          swapWhen: 'Se Clobberin\' Time está em CD, use Yancy Street Charge + Stone Haymaker para controle de área e burst.',
          sourceIds: ['wiki-the-thing'],
        },
      ],
      adaptations: [
        'Contra alvos aéreos (Iron Man, Storm, Ultron): Stone Haymaker faz o inimigo cair ao chão. Use para punir inimigos voadores e abrir para burst com Rocky Jab.',
        'Contra dive de melee agressivo (Wolverine, Blade, Black Panther): use Yancy Street Charge para criar zona Earthbound e impedir a fuga. Se eles entrarem mesmo assim, use Embattled Leap para proteger aliados e escapar.',
        'Contra composições de projétil (Punisher, Iron Man, Hawkeye): posicione-se atrás de cobertura e use Yancy Street Charge para fechar distância rapidamente. A imunidade a knockback permite avançar sem recuar.',
        'Com Human Torch aliado: ative Two in One para entrar no estado flamejante. O arremesso de Human Torch causa dano e stun, e The Thing entra automaticamente no estado flamejante ao pousar.',
        'Com Invisible Woman aliada: escolha Unbreakable Forces para sustain. Patch 10.5 reduziu o CD de 20s para 15s e o limiar da cura aprimorada de 150 para 125; use a armadura em janelas de pressão para curar aliados mais frequentemente, lembrando que o bônus de vida escala com HP perdido.',
      ],
      ultimates: [
        {
          stance: 'Ultimate única',
          name: 'Clobberin\' Time',
          bestUse: 'Contra 3+ inimigos agrupados em objetivo (ponto ou payload), ou para finalizar briga em desvantagem numérica. A fissura que avança até 18m pelo chão causa 100 de dano e stun de 2,5s.',
          execution: 'Ative com [key:Q] e mire a fissura na direção dos inimigos. A fissura avança 2m a cada 0.1s até 18m. 100 de dano, stun 2.5s. Combine com Yancy Street Charge para maximizar o controle de área.',
          upgradeValue: 'O stun de 2.5s é um dos mais longos do jogo. Use para interromper ultimates inimigos ou criar espaço para o time avançar.',
        },
      ],
      dashGuide: {
        ability: 'Yancy Street Charge → Stone Haymaker → Rocky Jab → Clobberin\' Time',
        shortRule: 'Yancy Street Charge cria zona Earthbound que impede mobilidade inimiga — use para iniciar engajamentos e punir chokepoints.',
        mechanics: [
          'Yancy Street Charge ([key:Shift]) tem 12s de recarga e 5s de duração. Lança inimigos para cima e cria a zona que impede mobilidade enquanto está ativa. Ganha 200 de Vida Bônus durante a carga.',
          'Stone Haymaker ([key:RMB]) tem 55 + 8% HP máx do alvo, avança 3m, ganha até 150 de HP bônus. Acertar inimigo voador o faz cair ao chão.',
          'Rocky Jab ([key:LMB]) tem 40 de dano por golpe em sequência dupla (0,33s entre golpes, 1s entre séries), com 4m de alcance.',
          'Clobberin\' Time ([key:Q]) tem 100 de dano, alcance de até 18m, stun de 2,5s e custa 2800 de energia.',
        ],
        drills: [
          'Treino 1: no modo prática, use Yancy Street Charge em um dummy e confirme que a zona impede o uso de habilidades de mobilidade. Meça a duração da carga (5s).',
          'Treino 2: use Stone Haymaker em um dummy e confirme o dano (55 + 8% HP máx). Avanque 3m ao atacar e ganhe Vida Bônus até 150. Tente atingir um inimigo voador e confirme que ele cai ao chão.',
          'Treino 3: use Embattled Leap ([key:E]) em um aliado e confirme a redução de dano de 20% por 3s. Depois use Battle Blitz ([key:F]) em um inimigo e confirme a Vulnerabilidade de 20% em quem estiver perto do pouso.',
          'Treino 4: ative Clobberin\' Time com 3+ dummies agrupados e confirme o stun de 2,5s. Meça a distância máxima da fissura (18m).',
        ],
      },
      patterns: [
        {
          title: 'Ciclo de controle de área',
          steps: [
            'Use Yancy Street Charge ([key:Shift]) para entrar no combate e criar a zona. Ela impede mobilidade inimiga enquanto estiver ativa.',
            'Enquanto a zona está ativa, use Stone Haymaker ([key:RMB]) para burst e ganhar HP bônus. Acertar inimigos voadores os faz cair ao chão.',
            'Use Rocky Jab ([key:LMB]) para dano contínuo à queima-roupa. Acumule ultimate enquanto mantém pressão.',
            'Quando 3+ inimigos estiverem agrupados, ative Clobberin\' Time ([key:Q]) para stun e criar espaço para o time.',
          ],
        },
        {
          title: 'Defesa de objetivo com Earthbound',
          steps: [
            'Antes da briga no objetivo, posicione Yancy Street Charge ([key:Shift]) no centro do ponto ou na saída do chokepoint.',
            'Quando inimigos avançarem, a zona Earthbound impede que eles usem habilidades de mobilidade — puna com Stone Haymaker e Rocky Jab.',
            'Se inimigos tentarem escapar, a zona os impede. Use Embattled Leap ([key:E]) para proteger aliados ou Battle Blitz ([key:F]) para aplicar Vulnerabilidade.',
            'Se a zona expirar e os inimigos ainda estiverem no objetivo, use Clobberin\' Time para stun e criar espaço.',
          ],
        },
        {
          title: 'Resposta a dive de melee',
          steps: [
            'Ao detectar dive se aproximando (Wolverine, Black Panther, Blade), use Yancy Street Charge ([key:Shift]) perpendicular ao avanço para sair da linha de ataque e criar zona Earthbound.',
            'Se o inimigo entrou na zona, ele fica sem mobilidade — use Stone Haymaker para burst e ganhar Vida Bônus.',
            'Se o inimigo continuou avançando após a zona, use Embattled Leap para proteger aliados e escapar.',
            'Se você está low HP, use Unbreakable Forces (se com Invisible Woman) para gerar Psionic Armor com Bonus Health; no patch 10.5, o CD é 15s e a cura aprimorada dispara a cada 125 de dano recebido.',
          ],
        },
      ],
      mistakes: [
        'Usar Yancy Street Charge sem verificar a posição dos aliados: a carga pode lançar inimigos para cima, mas também pode separar você do time. Use com consciência da posição dos aliados.',
        'Ativar Clobberin\' Time sem inimigos agrupados: o ultimate tem 100 de dano e stun 2.5s, mas só vale a pena com 3+ inimigos. Guarde para teamfights.',
        'Ignorar Stone Haymaker: o avanço de 3m e o HP bônus de até 150 são essenciais para sobrevivência. Não usar significa menos sustain e menos burst.',
        'Esquecer que Unyielding Will não protege contra freeze: Luna Snow ainda o congela. Cuidado com composições de controle.',
      ],
      evidence: [
        'official-thing-sheet',
        'wiki-the-thing',
        'balance-20260911',
        'balance-20261009',
        'official-teamups',
        'official-patch-20261022',
      ],
      abilityLoop: [
        { ability: 'Yancy Street Charge', input: 'Shift' },
        { ability: 'Stone Haymaker', input: 'RMB' },
        { ability: 'Rocky Jab', input: 'LMB' },
        { ability: 'Embattled Leap', input: 'E' },
        { ability: 'Battle Blitz', input: 'F' },
        { ability: 'Clobberin\' Time', input: 'Q' },
      ],
    },
  },
  sources: [
    {
      id: 'official-thing-sheet',
      kind: 'official',
      title: 'The Thing — ficha oficial de herói (Marvel Rivals)',
      url: 'https://www.marvelrivals.com/heroes/3g61jk7soo18x/',
      author: 'Marvel Rivals / NetEase',
      published: 'consulta em 2026-11-18',
      confidence: 'alta',
      takeaways: [
        'Ficha oficial consultada em 18/11/2026: 725 HP, 6 m/s. Rocky Jab com 40 por golpe em dupla sequência (0,33s entre golpes, 1s entre séries, 4m); Stone Haymaker 55 + 8% da vida máxima, 8m, Vida Bônus até 150 e queda de alvos voadores.',
        'Yancy Street Charge: 12s de recarga, 5s de duração, 200 de Vida Bônus, 100% de bônus de movimento. Clobberin\' Time: 2800 de energia, 100 de dano, 2,5s de stun, fissura de até 18m.',
        'Embattled Leap (E) e Battle Blitz (F) são habilidades distintas: 20m de alcance, 3s de recarga base e duas cargas de 10s cada; 20% de redução de dano (E) e 20% de Vulnerabilidade (F), ambos por 3s num raio de 5m do pouso.',
        'A ficha mostra 5s de duração no Yancy Street Charge, enquanto o balance 20260911 registrou a redução de 5s para 4s e a wiki ainda publica 4s: prevalece a ficha atual, e a divergência fica registrada.',
      ],
    },
    {
      id: 'wiki-the-thing',
      kind: 'database',
      title: 'The Thing — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/The_Thing',
      published: '2026-10',
      confidence: 'alta',
      takeaways: [
        'Habilidades segundo a wiki: Rocky Jab (40 dano, 2 golpes/1,5s), Stone Haymaker (55 + 8% HP máx, avança 3m, 150 HP bônus), Yancy Street Charge (12s, zona 4s), Embattled Leap e Battle Blitz (2 cargas, 25% de redução de dano). A ficha oficial atual corrige três pontos: Yancy dura 5s, Embattled Leap dá 20% e Battle Blitz é a tecla F (não E), e Clobberin\' Time alcança 18m.',
        'Unyielding Will: imune a knockback, launch-up e displacement.',
        'Stone Haymaker: acertar inimigo voador o faz cair ao chão.',
        'Yancy Street Charge: zona Earthbound impede mobilidade inimiga.',
        'Embattled Leap e Battle Blitz compartilham 2 cargas e CD de 12s.',
      ],
    },
    {
      id: 'balance-20260911',
      kind: 'official',
      title: 'Marvel Rivals Version 20260911 Balance Post',
      url: 'https://www.marvelrivals.com/20260908/41525_1313334.html',
      published: '2026-09-08',
      confidence: 'alta',
      takeaways: [
        'HP base: 750 → 725.',
        'Stone Haymaker: 55 + 10% HP máx → 55 + 8% HP máx.',
        'Yancy Street Charge: CD 10s → 12s, duração 5s → 4s.',
        'Two-in-One (Team-Up com Human Torch): CD 15s → 18s, duração 10s → 8s.',
      ],
    },
    {
      id: 'balance-20261009',
      kind: 'official',
      title: 'Marvel Rivals Version 20261009 Balance Post — The Thing',
      url: 'https://www.marvelrivals.com/balancepost/20261006/41667_1315864.html',
      published: '2026-10-06',
      confidence: 'alta',
      takeaways: [
        'Patch 10.5: ao selecionar o Team-Up com Invisible Woman, cooldown de Unbreakable Forces reduzido de 20s para 15s.',
        'Efeito aprimorado: limiar de dano recebido para ativar cura reduzido de 150 para 125.',
        'O ajuste favorece ativações mais frequentes e pulsos de cura mais frequentes; mantenha o Team-Up escolhido quando a composição precisar de sustain.',
      ],
    },
    {
      id: 'official-teamups',
      kind: 'official',
      title: 'Marvel Rivals — Team-Up Oficial',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      published: '2026-10',
      confidence: 'alta',
      takeaways: [
        'Two in One (Human Torch, [key:C]): estado flamejante, Rocky Jab causa splash, Stone Haymaker cria explosão. Aprimorado: Human Torch arremessa The Thing, causando dano e stun.',
        'Unbreakable Forces (Invisible Woman, [key:C]): Psionic Armor com Bonus Health escalando com HP perdido. No patch 10.5, CD 20s → 15s; aprimorado: limiar de dano para cura 150 → 125, com pulsos mais frequentes.',
        'Textos base e aprimorado traduzidos fielmente do bundle oficial; o bundle não expõe os valores numéricos do patch, que vêm do balance post oficial.',
      ],
    },
    {
      id: 'marvelrivalsgg-the-thing',
      kind: 'guide',
      title: 'The Thing Guide — MarvelRivals.gg',
      url: 'https://marvelrivals.gg/the-thing-guide',
      published: '2026-08',
      confidence: 'media',
      takeaways: [
        'The Thing é um Vanguard com kit simples mas eficaz.',
        'Posicionamento: não é um tank de escudo, é um brawler disruptor.',
        'Combos: Yancy Street Charge + Stone Haymaker para burst, Clobberin\' Time para teamfights.',
        'Counters: Punisher, Peni Parker, Squirrel Girl, Iron Man, Phoenix.',
        'Sinergias: Invisible Woman (team-up), Human Torch (team-up), Captain America, Wolverine.',
      ],
    },
    {
      id: 'reddit-the-thing',
      kind: 'forum',
      title: 'Reddit r/marvelrivals — The Thing Tips',
      url: 'https://www.reddit.com/r/marvelrivals/comments/1iv7uz4/heres_the_thing_tips',
      published: '2025-12',
      confidence: 'media',
      takeaways: [
        'Rocky Jab tem cleave e o melhor TTK do kit — apenas socar é a melhor forma de dano.',
        'Yancy Street Charge lança inimigos para cima e cria zona anti-mobilidade.',
        'Invisible Woman é o melhor suporte para The Thing (team-up + cura).',
        'The Thing não tem mitigação de dano tradicional — confie em HP bônus e redução de dano com CD.',
      ],
    },
    {
      id: 'official-patch-20261022',
      kind: 'official',
      title: 'Marvel Rivals Version 20261022 Patch Notes',
      url: 'https://www.marvelrivals.com/gameupdate/20261021/41548_1317253.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-10-21',
      confidence: 'alta',
      takeaways: [
        'Patch Version 20261022: novo modo Avengers: Endgame e correções de outros heróis; nenhuma alteração de habilidade ou Team-Up de The Thing.',
      ],
    },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 5, status: 'Completo (ficha oficial do herói em 18/11/2026, bundle de Team-Up, balance posts e patch notes Version 20261022)' },
    { kind: 'database', label: 'Database', count: 1, status: 'Completo' },
    { kind: 'guide', label: 'Guia escrito', count: 1, status: 'Completo' },
    { kind: 'forum', label: 'Fórum', count: 1, status: 'Completo' },
    { kind: 'video-transcript', label: 'Vídeo', count: 0, status: 'Pendente' },
  ],
}
