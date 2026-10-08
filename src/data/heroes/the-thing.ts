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
  lastVerified: '2026-10-08',
  confidenceSummary:
    'Habilidades e valores verificados na wiki.gg e balance post oficial Version 20260911 (08/09/2026). HP base 725 (reduzido de 750). Stone Haymaker 55 + 8% HP máx (reduzido de 10%). Yancy Street Charge CD 12s (aumentado de 10s), duração 4s (reduzido de 5s). Two-in-One CD 18s (aumentado de 15s), duração 8s (reduzido de 10s). Team-Ups confirmados pelo bundle oficial e traduzidos fielmente. Guia escrito marvelrivals.gg usado para combos e posicionamento.',
  coreRead: [
    'Unyielding Will (Passiva) é o diferencial: imune a knockback, launch-up e displacement — mas NÃO a freeze. Luna Snow ainda o congela. Use a imunidade para manter posição em fights de ponto.',
    'Stone Haymaker ([key:RMB]) é o transformador: 55 + 8% HP máx do alvo, avança 3m ao atacar, ganha até 150 de HP bônus. Acertar inimigo voador o faz cair ao chão — abra para burst.',
    'Yancy Street Charge ([key:Shift]) cria zona Earthbound que impede mobilidade inimiga por 4s. CD 12s. Ótimo para chokepoints e payload. Ganha 200 de HP bônus durante a carga.',
    'Clobberin\' Time ([key:Q]) é o ultimate de teamfight: fissura que avança 15m pelo chão, 100 de dano, stun 2.5s. Ative quando 3+ inimigos estiverem agrupados.',
  ],
  teamUps: {
    summary:
      'Two in One é o padrão (estado flamejante transforma Rocky Jab em splash e Stone Haymaker em explosão). Unbreakable Forces entra quando há Invisible Woman no time ou quando você precisa de sustain. Ambos os team-ups são válidos — a escolha depende da composição do time.',
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
          'Sustain, proteção de aliados e composições defensivas. O Bonus Health escala com HP perdido — mais forte quando low HP. A pulsação de cura em área beneficia todo o time.',
        easySetup:
          'Invisible Woman aliada. Sem ela a armadura ainda concede Bonus Health — a fortificação e a pulsação de cura são o diferencial.',
        iconUrl: publicAsset('teamups/the-thing-unbreakable-forces-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/the-thing-unbreakable-forces-partner.png'),
      },
    ],
    sourceIds: ['official-teamups', 'wiki-the-thing', 'balance-20260911'],
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
        'Avança 3m ao atacar, ganha 50 de HP bônus durante ativação, máximo 150 de HP bônus.',
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
        'Yancy Street Charge é o controle de área: a zona Earthbound impede mobilidade inimiga por 4s. Use em chokepoints, payload e para punir inimigos que tentam escapar.',
        'Stone Haymaker é o transformador: 55 + 8% HP máx do alvo, avança 3m, ganha até 150 de HP bônus. Acertar inimigo voador o faz cair — abra para burst.',
        'Clobberin\' Time é o ultimate de teamfight: fissura que avança 15m, 100 de dano, stun 2.5s. Ative quando 3+ inimigos estiverem agrupados.',
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
          why: 'CD 12s. Carga para frente que lança inimigos para cima e cria zona Earthbound (dano contínuo + impede mobilidade) por 4s. Ganha 200 de HP bônus durante a carga. Use para iniciar engajamentos ou punir chokepoints.',
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
          input: 'E',
          ability: 'Embattled Leap / Battle Blitz',
          label: 'Mobilidade + proteção / vulnerabilidade',
          why: 'Embattled Leap: pula até aliado, 25% de redução de dano para ambos por 3s. Battle Blitz: pula até inimigo, aplica vulnerabilidade em inimigos próximos por 3s. Compartilham 2 cargas e CD de 12s. Use Embattled Leap para proteger aliados e Battle Blitz para iniciar engajamentos.',
          swapWhen: 'Se as cargas estão em CD, use Yancy Street Charge para mobilidade ou posicione-se para esperar as cargas recarregarem.',
          sourceIds: ['wiki-the-thing'],
        },
        {
          rank: 4,
          input: 'LMB',
          ability: 'Rocky Jab',
          label: 'Dano principal + cleave',
          why: '40 de dano por soco, 2 punches a cada ~1.5s. Tem cleave (acerta múltiplos inimigos) e o melhor TTK do kit. Use para dano contínuo e acúmulo de ultimate.',
          swapWhen: 'Se Rocky Jab não está alcançando o alvo, use Stone Haymaker para burst ou Yancy Street Charge para fechar distância.',
          sourceIds: ['wiki-the-thing'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Clobberin\' Time',
          label: 'Ultimate de teamfight — stun em área',
          why: '100 de dano, alcance 15m, stun 2.5s. Fissura que avança pelo chão. Ative quando 3+ inimigos estiverem agrupados em objetivo ou teamfight.',
          swapWhen: 'Se Clobberin\' Time está em CD, use Yancy Street Charge + Stone Haymaker para controle de área e burst.',
          sourceIds: ['wiki-the-thing'],
        },
      ],
      adaptations: [
        'Contra alvos aéreos (Iron Man, Storm, Ultron): Stone Haymaker faz o inimigo cair ao chão. Use para punir inimigos voadores e abrir para burst com Rocky Jab.',
        'Contra dive de melee agressivo (Wolverine, Blade, Black Panther): use Yancy Street Charge para criar zona Earthbound e impedir a fuga. Se eles entrarem mesmo assim, use Embattled Leap para proteger aliados e escapar.',
        'Contra composições de projétil (Punisher, Iron Man, Hawkeye): posicione-se atrás de cobertura e use Yancy Street Charge para fechar distância rapidamente. A imunidade a knockback permite avançar sem recuar.',
        'Com Human Torch aliado: ative Two in One para entrar no estado flamejante. O arremesso de Human Torch causa dano e stun, e The Thing entra automaticamente no estado flamejante ao pousar.',
        'Com Invisible Woman aliada: ative Unbreakable Forces para gerar Psionic Armor com Bonus Health que escala com HP perdido. A pulsação de cura em área beneficia todo o time.',
      ],
      ultimates: [
        {
          stance: 'Ultimate única',
          name: 'Clobberin\' Time',
          bestUse: 'Contra 3+ inimigos agrupados em objetivo (ponto ou payload), ou para finalizar briga em desadvantagem numérica. A fissura que avança 15m pelo chão causa 100 de dano e stun de 2.5s.',
          execution: 'Ative com [key:Q] e mire a fissura na direção dos inimigos. A fissura avança 2m a cada 0.1s até 18m. 100 de dano, stun 2.5s. Combine com Yancy Street Charge para maximizar o controle de área.',
          upgradeValue: 'O stun de 2.5s é um dos mais longos do jogo. Use para interromper ultimates inimigos ou criar espaço para o time avançar.',
        },
      ],
      dashGuide: {
        ability: 'Yancy Street Charge → Stone Haymaker → Rocky Jab → Clobberin\' Time',
        shortRule: 'Yancy Street Charge cria zona Earthbound que impede mobilidade inimiga — use para iniciar engajamentos e punir chokepoints.',
        mechanics: [
          'Yancy Street Charge ([key:Shift]) tem CD de 12s e duração de 4s. Lança inimigos para cima e cria zona Earthbound (dano contínuo + impede mobilidade) por 4s. Ganha 200 de HP bônus durante a carga.',
          'Stone Haymaker ([key:RMB]) tem 55 + 8% HP máx do alvo, avança 3m, ganha até 150 de HP bônus. Acertar inimigo voador o faz cair ao chão.',
          'Rocky Jab ([key:LMB]) tem 40 de dano por soco, 2 punches a cada ~1.5s, e tem cleave (acerta múltiplos inimigos).',
          'Clobberin\' Time ([key:Q]) tem 100 de dano, alcance 15m, stun 2.5s. Fissura que avança pelo chão.',
        ],
        drills: [
          'Treino 1: no modo prática, use Yancy Street Charge em um dummy e confirme que a zona Earthbound impede o uso de habilidades de mobilidade. Meça a duração da zona (4s).',
          'Treino 2: use Stone Haymaker em um dummy e confirme o dano (55 + 8% HP máx). Avanque 3m ao atacar e ganhe 50 de HP bônus. Tente atingir um inimigo voador e confirme que ele cai ao chão.',
          'Treino 3: use Embattled Leap em um aliado e confirme a redução de dano de 25% por 3s. Depois use Battle Blitz em um inimigo e confirme a vulnerabilidade em inimigos próximos.',
          'Treino 4: ative Clobberin\' Time com 3+ dummies agrupados e confirme o stun de 2.5s. Meça a distância máxima da fissura (15m).',
        ],
      },
      patterns: [
        {
          title: 'Ciclo de controle de área',
          steps: [
            'Use Yancy Street Charge ([key:Shift]) para entrar no combate e criar zona Earthbound. A zona impede mobilidade inimiga por 4s.',
            'Enquanto a zona está ativa, use Stone Haymaker ([key:RMB]) para burst e ganhar HP bônus. Acertar inimigos voadores os faz cair ao chão.',
            'Use Rocky Jab ([key:LMB]) para dano contínuo e cleave. Acumule ultimate enquanto mantém pressão.',
            'Quando 3+ inimigos estiverem agrupados, ative Clobberin\' Time ([key:Q]) para stun e criar espaço para o time.',
          ],
        },
        {
          title: 'Defesa de objetivo com Earthbound',
          steps: [
            'Antes da briga no objetivo, posicione Yancy Street Charge ([key:Shift]) no centro do ponto ou na saída do chokepoint.',
            'Quando inimigos avançarem, a zona Earthbound impede que eles usem habilidades de mobilidade — puna com Stone Haymaker e Rocky Jab.',
            'Se inimigos tentarem escapar, a zona Earthbound os impede. Use Embattled Leap para proteger aliados ou Battle Blitz para aplicar vulnerabilidade.',
            'Se a zona expirar e os inimigos ainda estiverem no objetivo, use Clobberin\' Time para stun e criar espaço.',
          ],
        },
        {
          title: 'Resposta a dive de melee',
          steps: [
            'Ao detectar dive se aproximando (Wolverine, Black Panther, Blade), use Yancy Street Charge ([key:Shift]) perpendicular ao avanço para sair da linha de ataque e criar zona Earthbound.',
            'Se o inimigo entrou na zona, ele está preso por 4s — use Stone Haymaker para burst e ganhar HP bônus.',
            'Se o inimigo continuou avançando após a zona, use Embattled Leap para proteger aliados e escapar.',
            'Se você está low HP, use Unbreakable Forces (se com Invisible Woman) para gerar Psionic Armor com Bonus Health.',
          ],
        },
      ],
      mistakes: [
        'Usar Yancy Street Charge sem verificar a posição dos aliados: a carga pode lançar inimigos para cima, mas também pode separar você do time. Use com consciência da posição dos aliados.',
        'Ativar Clobberin\' Time sem inimigos agrupados: o ultimate tem 100 de dano e stun 2.5s, mas só vale a pena com 3+ inimigos. Guarde para teamfights.',
        'Ignorar Stone Haymaker: o avanço de 3m e o HP bônus de até 150 são essenciais para sobrevivência. Não usar significa menos sustain e menos burst.',
        'Esquecer que Unyielding Will não protege contra freeze: Luna Snow ainda o congela. Cuidado com composições de controle.',
      ],
      evidence: ['wiki-the-thing', 'balance-20260911', 'official-teamups'],
      abilityLoop: [
        { ability: 'Yancy Street Charge', input: 'Shift' },
        { ability: 'Stone Haymaker', input: 'RMB' },
        { ability: 'Rocky Jab', input: 'LMB' },
        { ability: 'Embattled Leap / Battle Blitz', input: 'E' },
        { ability: 'Clobberin\' Time', input: 'Q' },
      ],
    },
  },
  sources: [
    {
      id: 'wiki-the-thing',
      kind: 'database',
      title: 'The Thing — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/The_Thing',
      published: '2026-10',
      confidence: 'alta',
      takeaways: [
        'Habilidades: Unyielding Will (Passiva), Rocky Jab (40 dano, 2 punches/1.5s), Stone Haymaker (55 + 8% HP máx, avança 3m, ganha 150 HP bônus), Yancy Street Charge (CD 12s, zona Earthbound 4s), Embattled Leap (CD 12s, 2 cargas, 25% redução de dano), Battle Blitz (CD 12s, 2 cargas, vulnerabilidade), Clobberin\' Time (100 dano, 15m, stun 2.5s).',
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
      id: 'official-teamups',
      kind: 'official',
      title: 'Marvel Rivals — Team-Up Oficial',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      published: '2026-10',
      confidence: 'alta',
      takeaways: [
        'Two in One (Human Torch, [key:C]): estado flamejante, Rocky Jab causa splash, Stone Haymaker cria explosão. Aprimorado: Human Torch arremessa The Thing, causando dano e stun.',
        'Unbreakable Forces (Invisible Woman, [key:C]): Psionic Armor com Bonus Health escalando com HP perdido. Aprimorado: armadura fortificada, pulsação de cura em área.',
        'Textos base e aprimorado traduzidos fielmente do bundle oficial.',
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
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 2, status: 'Completo' },
    { kind: 'database', label: 'Database', count: 1, status: 'Completo' },
    { kind: 'guide', label: 'Guia escrito', count: 1, status: 'Completo' },
    { kind: 'forum', label: 'Fórum', count: 1, status: 'Completo' },
    { kind: 'video-transcript', label: 'Vídeo', count: 0, status: 'Pendente' },
  ],
}
