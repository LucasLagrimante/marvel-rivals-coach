import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const squirrelGirl: HeroGuide = {
  id: 'squirrel-girl',
  name: 'Squirrel Girl',
    aliases: ['Doreen Green'],
    game: 'Marvel Rivals',
    theme: {
      primary: '#8B4513',
      primaryRgb: '139, 69, 19',
      secondary: '#D2691E',
      secondaryRgb: '210, 105, 30',
      surface: '#1a0f0a',
      surfaceRgb: '26, 15, 10',
    },
  roles: ['duelist'],
  portraitUrl: publicAsset('heroes/banners/squirrel_girl.png'),
  bannerUrl: publicAsset('heroes/banners/squirrel_girl.png'),
  selectionPortraitUrl: publicAsset('heroes/select/squirrel_girl.png'),
  selectionHoverUrl: publicAsset('heroes/select/squirrel_girl_champion.gif'),
  selectionHoverFit: { scale: 1, x: 0, y: 0 },

  coreRead: [
    'Controle de área: seus Burst Acorns ricocheteiam em paredes e explodem no impacto — use isso para atingir inimigos atrás de cobertura.',
    'Squirrel Blockade é seu principal CC: prenda um alvo e finalize com 2-3 acorns. O dano fixo ignora escudos.',
    'Mammal Bond recarrega sua munição e dá uma habilidade grátis — use para double jump ou double blockade.',
    'Unbeatable Squirrel Tsunami é melhor em espaços fechados onde os esquilos ricocheteiam várias vezes.',
  ],

  systems: [
    {
      name: 'Burst Acorn',
      input: 'LMB',
      heading: 'Ricochete é seu amigo',
      facts: [
        'Burst Acorn ricocheteia em superfícies e explode no contato com inimigo ou ao perder momentum.',
        'Dano de 110 no impacto direto, com falloff de 70% a 3m.',
        'Velocidade de tiro de 1.49 acorns/s, 12 de munição.',
        'Não tem crítico — o dano é fixo e ignora escudos.',
      ],
    },
    {
      name: 'Squirrel Blockade',
      input: 'RMB',
      heading: 'Prenda e finalize',
      facts: [
        'Lança um acorn grande que prende o primeiro inimigo atingido por 2 segundos.',
        'Pode ser carregado (segurar RMB) para aumentar velocidade e alcance.',
        'Dano de 50, cooldown de 8 segundos.',
        'O alvo preso ainda pode atacar — use para isolar um alvo prioritário.',
      ],
    },
  ],

  teamUps: {
    summary: 'Squirrel Missile (Iron Man) tem win rate maior que ESU Alumnus (Spider-Man) — escolha Iron Man para mais dano, Spider-Man para mais utilidade.',
    recommended: 'Squirrel Missile',
    recommendedReason: 'Batru mede 48.30% de win rate com Iron Man vs 38.79% com Spider-Man. O míssil teleguiado é mais fácil de usar e mais consistente.',
    options: [
      {
        name: 'Squirrel Missile',
        partner: 'Iron Man',
        partnerRole: 'duelist',
        input: 'C',
        baseEffect: 'Squirrel Girl ganha a habilidade Squirrel Missile. Ela direciona um esquilo para voar na luva de nanotech do Iron Man como um míssil teleguiado. Ao atingir, o esquilo foge logo antes de uma explosão flamejante.',
        enhancedEffect: 'Ao jogar com Iron Man, usar Squirrel Blockade dispara simultaneamente um Squirrel Missile.',
        bestFor: 'Quando você precisa de dano extra consistente e o time tem Iron Man.',
        easySetup: 'Basta ter Iron Man no time — o míssil é automático e não precisa de mira.',
        iconUrl: publicAsset('teamups/squirrel-girl-squirrel-missile-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/squirrel-girl-squirrel-missile-partner.png'),
      },
      {
        name: 'ESU Alumnus',
        partner: 'Spider-Man',
        partnerRole: 'duelist',
        input: 'C',
        baseEffect: 'Spider-Man dá a Squirrel Girl uma bomba de teia. Ela pode lançá-la para causar uma explosão ao tocar o ambiente ou um inimigo, diminuindo a velocidade e causando dano aos inimigos na área.',
        enhancedEffect: 'Ao jogar com Spider-Man, Squirrel Girl recebe mais Fluido de Teia. Após lançar Webbed Acorn, fluido viscoso cobre o chão junto com a explosão, deixando uma Área de Teia pegajosa. Inimigos nela sofrem Slow contínuo que escala para Stun se permanecerem.',
        bestFor: 'Quando o time precisa de controle de área e utilidade, não só dano.',
        easySetup: 'Basta ter Spider-Man no time — a bomba de teia é fácil de usar.',
        iconUrl: publicAsset('teamups/squirrel-girl-esu-alumnus-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/squirrel-girl-esu-alumnus-partner.png'),
      },
    ],
    sourceIds: ['teamup-bundle', 'batru-synergy'],
  },

  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelista',
      nickname: 'A Garota Esquilo',
      health: '275 HP',
      difficulty: 'Fácil: projéteis ricocheteiam e o kit é simples, mas o dano cai rápido em distância',
      job: 'Controle de área, dano em choke points e eliminação de alvos prioritários',
      verdict:
        'Squirrel Girl é uma Duelista de mid-to-long range que se destaca em controlar choke points e ricochetear acorns em inimigos atrás de cobertura. Seu kit é simples mas eficaz quando bem posicionada.',
      playstyle: [
        'Use o ricochete dos Burst Acorns para atingir inimigos atrás de cobertura.',
        'Squirrel Blockade é seu CC principal — prenda alvos prioritários para o time focar.',
        'Mammal Bond recarrega munição e dá habilidade grátis — use para double jump ou double blockade.',
        'Tail Bounce dá mobilidade vertical — alcance high ground ou escape de dive.',
      ],
      upgradePlan: [
        {
          rank: 1,
          input: 'LMB',
          ability: 'Burst Acorn',
          label: 'Dano principal',
          baseEffect: '110 de dano no impacto direto, ricocheteia em superfícies.',
          upgradeEffect: 'Falloff de 70% a 3m — o pior do jogo para alcance.',
          why: 'Seu dano principal — domine o ricochete para atingir alvos atrás de cobertura.',
          swapWhen: 'Não trocar — é a fonte principal de dano.',
          sourceIds: ['wiki-gg'],
        },
        {
          rank: 2,
          input: 'RMB',
          ability: 'Squirrel Blockade',
          label: 'CC principal',
          baseEffect: '50 de dano, prende o primeiro inimigo atingido por 2 segundos.',
          upgradeEffect: 'Pode ser carregado para mais velocidade e alcance.',
          why: 'CC principal — prenda alvos prioritários para o time focar.',
          swapWhen: 'Use em alvos de 250-300 HP, não em tanques.',
          sourceIds: ['wiki-gg'],
        },
        {
          rank: 3,
          input: 'E',
          ability: 'Mammal Bond',
          label: 'Recarga e habilidade grátis',
          baseEffect: 'Recarrega munição e dá uma habilidade grátis por 5s.',
          upgradeEffect: '15s de cooldown.',
          why: 'Recarrega munição e dá habilidade grátis — use para double jump ou double blockade.',
          swapWhen: 'Use antes de iniciar fights para ter munição cheia.',
          sourceIds: ['wiki-gg'],
        },
        {
          rank: 4,
          input: 'Shift',
          ability: 'Tail Bounce',
          label: 'Mobilidade vertical',
          baseEffect: '9m de altura, 8s de cooldown.',
          upgradeEffect: 'Permite alcançar high ground ou escapar de dive.',
          why: 'Mobilidade vertical — alcance high ground ou escape de dive.',
          swapWhen: 'Use para escapar, não para dive.',
          sourceIds: ['wiki-gg'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Unbeatable Squirrel Tsunami',
          label: 'Ultimate de área',
          baseEffect: '150 de dano por hit, 10s de duração, esquilos com 300 HP.',
          upgradeEffect: 'Melhor em espaços fechados para máximo ricochete.',
          why: 'Ultimate de área — melhor em espaços fechados.',
          swapWhen: 'Use em espaços fechados para máximo ricochete.',
          sourceIds: ['wiki-gg'],
        },
      ],
      adaptations: [
        'Contra times com muito dive (Venom, Wolverine), guarde Tail Bounce para escape.',
        'Contra snipers (Hawkeye, Punisher), use o ricochete dos acorns para atingir atrás de cobertura.',
        'Contra times com muito escudo (Doctor Strange, Magneto), foque em prender alvos com Squirrel Blockade e ignorar escudos.',
      ],
      ultimates: [
        {
          stance: 'Área',
          name: 'Unbeatable Squirrel Tsunami',
          bestUse: 'Use em espaços fechados para máximo ricochete.',
          execution:
            'Os esquilos têm 300 de HP e podem ser destruídos — use para bloquear dano ou forçar inimigos a recuar.',
          upgradeValue: '150 de dano por hit e dura 10 segundos.',
        },
      ],
      dashGuide: {
        ability: 'Tail Bounce',
        shortRule: '9m de altura com 8s de cooldown — use para alcançar high ground ou escapar.',
        mechanics: [
          'Alcança 9m de altura.',
          '8s de cooldown.',
          'Permite escapar de situações perigosas.',
        ],
        drills: [
          'Use Tail Bounce para alcançar high ground e atacar de cima.',
          'Use Tail Bounce para escapar de dive inimigo.',
        ],
      },
      patterns: [
        {
          title: 'Combo básico',
          steps: [
            'Squirrel Blockade (prender)',
            '2-3 Burst Acorns (finalizar)',
          ],
        },
        {
          title: 'Combo de mobilidade',
          steps: [
            'Tail Bounce (high ground)',
            'Burst Acorns (dano de cima)',
          ],
        },
        {
          title: 'Combo de CC duplo',
          steps: [
            'Mammal Bond',
            'Squirrel Blockade',
            'Squirrel Blockade novamente (sem cooldown)',
          ],
        },
      ],
      mistakes: [
        'Usar Squirrel Blockade em alvos com muito HP — prefira alvos de 250-300 HP.',
        'Ficar parado no open — Squirrel Girl é frágil e precisa de cobertura.',
        'Usar Tail Bounce para dive — é melhor para escape e repositionamento.',
      ],
      evidence: [
        'wiki.gg: valores de dano, cooldown e mecânica de ricochete.',
        'marvelrivals.gg: guia de posicionamento e prioridade de alvos.',
        'blitz.gg: dicas de uso em mid-to-long range.',
      ],
      abilityLoop: [
        { ability: 'Burst Acorn', input: 'LMB' },
        { ability: 'Squirrel Blockade', input: 'RMB' },
        { ability: 'Mammal Bond', input: 'E' },
        { ability: 'Tail Bounce', input: 'Shift' },
        { ability: 'Unbeatable Squirrel Tsunami', input: 'Q' },
      ],
    },
  },

  sources: [
    {
      id: 'wiki-gg',
      kind: 'database',
      title: 'Squirrel Girl - Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Squirrel_Girl',
      confidence: 'alta',
          published: '2025-11-14',
      takeaways: [
        'Burst Acorn: 110 dano, 1.5/s, 12 munição, ricocheteia em superfícies.',
        'Tail Bounce: 8s CD, 9m de altura.',
        'Squirrel Blockade: 50 dano, 8s CD, 2s stun, pode ser carregado.',
        'Mammal Bond: 15s CD, 5s duração, recarrega munição e dá habilidade grátis.',
        'Unbeatable Squirrel Tsunami: 150 dano, 10s duração, 300 HP.',
      ],
    },
    {
      id: 'official-site',
      kind: 'official',
      title: 'Squirrel Girl - Site Oficial Marvel Rivals',
      url: 'https://www.marvelrivals.com/heroes/index.html?id=4ed51741-f094-46ef-b5ca-bb2025b15c50',
      confidence: 'alta',
          published: '2026-02-09',
      takeaways: [
        '275 HP, 6 m/s movement speed, Duelista.',
        'Team-Up: Squirrel Missile (Iron Man) e ESU Alumnus (Spider-Man).',
      ],
    },
    {
      id: 'marvelrivals-gg',
      kind: 'guide',
      title: 'Marvel Rivals Squirrel Girl Guide - marvelrivals.gg',
      url: 'https://marvelrivals.gg/squirrel-girl-guide',
      confidence: 'media',
      published: '2025-04-26',
      takeaways: [
        'Squirrel Girl funciona melhor em mid-to-long range, controlando choke points.',
        'Combo básico: Squirrel Blockade → 2-3 Burst Acorns.',
        'Prioridade de alvos: snipers > healers > duelistas > tanks.',
        'Contra Venom, ela tem dificuldade — ele pode dive e grudar nela.',
      ],
    },
    {
      id: 'blitz-gg',
      kind: 'guide',
      title: 'Marvel Rivals Squirrel Girl Guide - Blitz.gg',
      url: 'https://blitz.gg/marvel-rivals/articles/4iRT9agTdeOCSjImGq61Ax',
      confidence: 'media',
      published: '2025-02-07',
      takeaways: [
        'Burst Acorn tem falloff de 70% a 3m — o pior do jogo para alcance.',
        'Squirrel Blockade pode ser carregado para mais velocidade e alcance.',
        'Unbeatable Squirrel Tsunami é melhor em espaços fechados.',
      ],
    },
    {
      id: 'teamup-bundle',
      kind: 'official',
      title: 'Marvel Rivals Team-Up Bundle',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      confidence: 'alta',
          published: '2026-09-10',
      takeaways: [
        'Squirrel Missile (Iron Man): míssil teleguiado, Key C.',
        'ESU Alumnus (Spider-Man): bomba de teia com slow e stun, Key C.',
      ],
    },
    {
      id: 'batru-synergy',
      kind: 'database',
      title: 'Squirrel Girl Team-Ups - Batru',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/squirrel-girl',
      confidence: 'alta',
          published: '2026-09-30',
      takeaways: [
        'Squirrel Missile com Iron Man: 48.30% win rate (4,596 partidas).',
        'ESU Alumnus com Spider-Man: 38.79% win rate (4,491 partidas).',
        'Melhores parceiros: Peni Parker (51.94%), Ultron (50.90%).',
        'Piores parceiros: Black Widow (29.20%), Phoenix (29.50%), Hawkeye (31.94%).',
      ],
    },
  ],

  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 2, status: 'Completo' },
    { kind: 'database', label: 'Database', count: 2, status: 'Completo' },
    { kind: 'guide', label: 'Guia', count: 2, status: 'Completo' },
    { kind: 'forum', label: 'Fórum', count: 0, status: 'Pendente' },
    { kind: 'video-transcript', label: 'Vídeo/Transcrição', count: 0, status: 'Pendente' },
  ],

  confidenceSummary: 'Números de habilidade da wiki.gg (2025-11-14) podem estar stale — o balance post de 2026 pode ter alterado valores. Team-ups confirmados pelo bundle oficial (2026-09-10). Win rates da Batru (2026-09-30).',
  lastVerified: '2026-10-06',
}
