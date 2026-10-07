import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const storm: HeroGuide = {
  id: 'storm',
  name: 'Storm',
  aliases: ['Ororo Munroe', 'Deusa da Tempestade', 'Tempestade'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/storm.png'),
  bannerUrl: publicAsset('heroes/banners/storm.png'),
  selectionPortraitUrl: publicAsset('heroes/select/storm.png'),
  selectionHoverUrl: publicAsset('heroes/select/storm_champion.gif'),
  selectionHoverFit: { scale: 1.15, x: 0, y: 7 },
  theme: {
    primary: '#4a90d9',
    primaryRgb: '74, 144, 217',
    secondary: '#87ceeb',
    secondaryRgb: '135, 206, 235',
    surface: '#0a1628',
    surfaceRgb: '10, 22, 40',
  },
  roles: ['duelist'],
  lastVerified: '2026-10-07',
  confidenceSummary:
    'Habilidades e valores verificados na wiki.gg (fonte primária). Team-Ups confirmados no bundle oficial da Temporada 10. Win rates de dupla medidos pelo Batru (Temporada 10, 30/09/2026). Balance posts de 20260711 e 20260807 não alteraram Storm. Guias escritos (RivalsMeta, Beebom) servem para tática, não para números.',
  coreRead: [
    'Weather Control é o coração do kit: alterne entre Tornado (Speed Boost para o time) e Thunder (+16,6% de dano) conforme a situação. Nunca entre no combate sem o buff ativo.',
    'Wind Blade ([key:LMB]) é o dano principal: 50 de dano por projétil, perfurante, sem queda de distância. Use para pressionar à distância e finalizar alvos com HP baixo.',
    'Bolt Rush ([key:RMB]) é o burst: 70 de dano, perfurante, 40m de alcance, 6s de recarga. Combine com Thunder para maximizar o dano em alvos prioritários.',
    'Omega Hurricane ([key:Q]) é o ultimate de team fight: transforma Storm em um ciclone que puxa inimigos e causa dano contínuo. Use em objetivos ou para virar briga em desvantagem numérica.',
  ],
  teamUps: {
    summary:
      'Gods of Thunder é a escolha geral: win rate maior com Thor (64,97% vs 59,79%) e o efeito base (Wind Blade hitscan) é extremamente forte. Jaws of Fate é melhor em times com Jeff, oferecendo cura constante durante o ultimate.',
    recommended: 'Gods of Thunder',
    recommendedReason:
      'O efeito base de Gods of Thunder transforma o Wind Blade em um feixe hitscan que detona ao atingir — isso elimina o travel time do projétil e aumenta drasticamente o DPS efetivo. Com Thor no time, o Bolt Rush vira Chain Lightning, saltando entre inimigos. A win rate medida com Thor (64,97%) é significativamente maior que com Jeff (59,79%). O guia RivalsMeta recomenda esta dupla.',
    options: [
      {
        name: 'Gods of Thunder',
        partner: 'Thor',
        partnerRole: 'Vanguarda',
        input: 'LMB',
        baseEffect:
          'Aprimora o Wind Blade em um feixe hitscan que detona ao atingir um alvo.',
        enhancedEffect:
          'Ao fazer equipe com Thor, o Bolt Rush se torna Chain Lightning, permitindo que ele salte de inimigo a inimigo.',
        bestFor:
          'Padrão solo: o efeito base já é extremamente forte (hitscan + detonação). Com Thor, o Chain Lightning adiciona dano em área.',
        easySetup:
          'Basta ter Thor no time. O efeito base funciona sem o parceiro, mas o aprimorado exige a dupla.',
        iconUrl: publicAsset('teamups/storm-gods-of-thunder-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/storm-gods-of-thunder-partner.png'),
      },
      {
        name: 'Jaws of Fate',
        partner: 'Jeff the Land Shark',
        partnerRole: 'Estrategista',
        input: 'C',
        baseEffect:
          'Libera uma chuva torrencial que cura continuamente a própria Storm e seus aliados.',
        enhancedEffect:
          'Ao fazer equipe com Jeff the Land Shark, lançar Omega Hurricane permite que Jeff nade dentro do ciclone, gerando um Jeff-nado localizado.',
        bestFor:
          'Times com Jeff que precisam de sustain. A chuva cura continuamente, e o Jeff-nado adiciona controle de área.',
        easySetup:
          'Basta ter Jeff no time. O efeito base funciona sem o parceiro, mas o aprimorado exige a dupla.',
        iconUrl: publicAsset('teamups/storm-jaws-of-fate-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/storm-jaws-of-fate-partner.png'),
      },
    ],
    sourceIds: ['official-teamups', 'batru-storm', 'rivalsmeta-storm'],
  },
  systems: [
    {
      name: 'Weather Control',
      input: 'E',
      heading: 'Alterne o clima para empowerar o time',
      facts: [
        'Tornado: concede Speed Boost a aliados em 15m de raio. Use para engajar ou recuar rapidamente.',
        'Thunder: concede +16,6% de dano a aliados em 15m de raio. Use para maximizar DPS em burst.',
        'A troca é instantânea e não tem cooldown — alterne conforme a situação da luta.',
        'Goddess Boost ([key:F]) amplifica o efeito ativo: Tornado ganha Slow em inimigos, Thunder ganha dano contínuo.',
      ],
      meter: [
        { label: 'Tornado', value: 'Speed Boost + Slow' },
        { label: 'Thunder', value: '+16,6% dano + dano contínuo' },
      ],
    },
    {
      name: 'Wind Blade',
      input: 'LMB',
      facts: [
        '50 de dano por projétil, perfurante, sem queda de distância.',
        '12 munição, 1 por disparo. Recarga automática.',
        'Não atravessa deployables (barreiras, escudos).',
        'Com Gods of Thunder, vira hitscan com detonação ao atingir.',
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelista',
      nickname: 'A Deusa da Tempestade',
      health: '250 HP',
      difficulty: 'Média: exige gestão de posicionamento aéreo e timing de Weather Control',
      job:
        'Controle o céu, alterne Weather Control para empowerar o time, pressione à distância com Wind Blade e finalize com Bolt Rush. Use Omega Hurricane para virar team fights.',
      verdict:
        'Escolha Storm quando o time precisa de um Duelista aéreo com bom controle de área e buffs de equipe. Evite contra heróis com forte anti-aéreo (Peni Parker, Magik, Human Torch) sem Vanguard aliado para absorver a pressão.',
      playstyle: [
        'Storm opera em duas fases: pressão e burst. Na fase de pressão, mantenha distância de 20-30m e troque tiros com Wind Blade. Use Weather Control (Tornado) para reposicionar rapidamente ou (Thunder) para maximizar Dano.',
        'Na fase de burst, combine Thunder + Bolt Rush + Wind Blade no mesmo alvo. O Bolt Rush tem 6s de recarga — use-o quando o alvo estiver com HP baixo ou marcado por aliados.',
        'O voo é sua maior vantagem: mantenha-se aérea para evitar melee e ter ângulos de tiro superiores. Use o voo para flanquear e pressionar inimigos em posições elevadas.',
        'Omega Hurricane é o ultimate de team fight: ative quando 3+ inimigos estão juntos ou quando precisa virar uma briga em desvantagem. O ciclone puxa inimigos e causa dano contínuo.',
      ],
      priorityKicker: 'Sequência',
      priorityTitle: 'Prioridade de habilidades',
      priorityDescription:
        'Storm não tem upgrades numerados — a prioridade aqui é a ordem de uso de cada habilidade dentro de um engajamento para maximizar o dano e o controle de área.',
      upgradePlan: [
        {
          rank: 1,
          input: 'E',
          ability: 'Weather Control',
          label: 'Buff de equipe — alterne conforme a situação',
          why: 'Concede Speed Boost (Tornado) ou +16,6% de dano (Thunder) a aliados em 15m. É o multiplicador silencioso do kit — sempre ativo.',
          swapWhen: 'Use Tornado para engajar/recuar, Thunder para maximizar Dano em burst.',
          sourceIds: ['wiki-storm', 'rivalsmeta-storm'],
        },
        {
          rank: 2,
          input: 'LMB',
          ability: 'Wind Blade',
          label: 'Dano principal — pressão à distância',
          why: '50 de dano, perfurante, sem queda de distância. É a fonte de dano primária — use para pressionar e finalizar.',
          swapWhen: 'Com Gods of Thunder, vira hitscan com detonação — ainda mais forte.',
          sourceIds: ['wiki-storm', 'rivalsmeta-storm'],
        },
        {
          rank: 3,
          input: 'RMB',
          ability: 'Bolt Rush',
          label: 'Burst — finalização de alvos',
          why: '70 de dano, perfurante, 40m de alcance, 6s de recarga. Use em alvos com HP baixo ou marcados por aliados.',
          swapWhen: 'Com Gods of Thunder + Thor, vira Chain Lightning — salta entre inimigos.',
          sourceIds: ['wiki-storm', 'rivalsmeta-storm'],
        },
        {
          rank: 4,
          input: 'F',
          ability: 'Goddess Boost',
          label: 'Amplifica Weather Control',
          why: '15s de recarga, 8s de duração. Tornado ganha Slow, Thunder ganha dano contínuo. Use antes de engajar.',
          swapWhen: 'Ative antes de team fights para maximizar o buff de equipe.',
          sourceIds: ['wiki-storm'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Omega Hurricane',
          label: 'Ultimate de team fight',
          why: 'Transforma Storm em um ciclone que puxa inimigos e causa dano contínuo. 350 de escudos temporários.',
          swapWhen: 'Use em objetivos ou para virar briga em desvantagem numérica.',
          sourceIds: ['wiki-storm', 'rivalsmeta-storm'],
        },
      ],
      adaptations: [
        'Contra heróis aéreos (Iron Man, Ultron): Wind Blade e Bolt Rush são hitscan — você os acerta com facilidade. Mantenha distância e use o voo para reposicionar.',
        'Contra dive de melee (Wolverine, Blade, Black Panther): use o voo para manter distância. Weather Control (Tornado) ajuda a recuar rapidamente.',
        'Contra composições agrupadas em objetivos: Omega Hurricane é perfeito — puxa múltiplos inimigos e causa dano contínuo.',
        'Com Thor aliado: ative Gods of Thunder e use Chain Lightning (Bolt Rush aprimorado) em alvos agrupados.',
        'Com Jeff aliado: ative Jaws of Fate e use a chuva curativa para sustentar o time em fights prolongados.',
      ],
      ultimates: [
        {
          stance: 'Ultimate única',
          name: 'Omega Hurricane',
          bestUse:
            'Contra 3+ inimigos agrupados em objetivo (ponto ou payload), ou para virar briga em desvantagem numérica.',
          execution:
            'Ative com [key:Q] e mova-se em direção ao cluster inimigo. O ciclone puxa inimigos próximos e causa dano contínuo. Storm recebe 350 de escudos temporários durante o ultimate.',
          upgradeValue:
            'O ultimate desativa Weather Control durante seu uso — planeje o timing para não ficar sem buff de equipe.',
        },
      ],
      dashGuide: {
        ability: 'Voo (passivo) + Weather Control (reposicionamento)',
        shortRule:
          'Mantenha-se aérea para evitar melee e ter ângulos de tiro superiores. Use Weather Control para reposicionar rapidamente.',
        mechanics: [
          'O voo é livre: pressione para subir, pressione para baixo. Não tem cooldown.',
          'Weather Control (Tornado) concede Speed Boost — use para engajar ou recuar rapidamente.',
          'O voo permite acessar ângulos e sightlines que a maioria dos heróis não alcança.',
          'Mantenha distância de 20-30m para maximizar o dano de Wind Blade e Bolt Rush.',
        ],
        drills: [
          'Treino 1: no modo prática, mantenha-se aérea e atire em dummies a 20-30m de distância. Desenvolva a mira em movimento.',
          'Treino 2: alterne Weather Control entre Tornado e Thunder durante uma luta. Aprenda a trocar conforme a situação.',
          'Treino 3: use Omega Hurricane em 3+ dummies agrupados. Pratique o posicionamento para puxar o máximo de alvos.',
          'Treino 4: combine Thunder + Bolt Rush + Wind Blade no mesmo alvo. Aprenda a sequência de burst.',
        ],
      },
      patterns: [
        {
          title: 'Pressão à distância',
          steps: [
            'Mantenha distância de 20-30m e troque tiros com Wind Blade.',
            'Use Weather Control (Thunder) para maximizar o dano.',
            'Quando o alvo estiver com HP baixo, use Bolt Rush para finalizar.',
            'Repita o ciclo: pressão → burst → reposicionamento.',
          ],
        },
        {
          title: 'Team fight com Omega Hurricane',
          steps: [
            'Ative Weather Control (Thunder) antes da briga.',
            'Use Goddess Boost para amplificar o buff.',
            'Ative Omega Hurricane quando 3+ inimigos estiverem juntos.',
            'Mova-se em direção ao cluster para puxar o máximo de alvos.',
            'Após o ultimate, use Bolt Rush e Wind Blade nos inimigos enfraquecidos.',
          ],
        },
        {
          title: 'Resposta a dive',
          steps: [
            'Ao detectar dive se aproximando, use Weather Control (Tornado) para recuar.',
            'Mantenha-se aérea para evitar melee.',
            'Use Bolt Rush no inimigo que está mergulhando.',
            'Se necessário, use Omega Hurricane para criar espaço.',
          ],
        },
      ],
      mistakes: [
        'Entrar no combate sem Weather Control ativo: o buff de equipe é o multiplicador silencioso do kit — sempre ativo.',
        'Usar Omega Hurricane fora de team fights: o ultimate é poderoso, mas deve ser usado em objetivos ou brigas em desvantagem.',
        'Ficar no chão: o voo é a maior vantagem de Storm — mantenha-se aérea para evitar melee e ter ângulos superiores.',
        'Desperdiçar Bolt Rush: 70 de dano a cada 6s — use em alvos com HP baixo ou marcados por aliados.',
      ],
      evidence: ['wiki-storm', 'rivalsmeta-storm', 'batru-storm', 'beebom-storm'],
      abilityLoop: [
        { ability: 'Weather Control', input: 'E' },
        { ability: 'Wind Blade', input: 'LMB' },
        { ability: 'Bolt Rush', input: 'RMB' },
        { ability: 'Goddess Boost', input: 'F' },
        { ability: 'Omega Hurricane', input: 'Q' },
      ],
    },
  },
  sources: [
    {
      id: 'wiki-storm',
      kind: 'database',
      title: 'Storm — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Storm',
      published: '2026-02',
      confidence: 'alta',
      takeaways: [
        'Habilidades confirmadas: Flight (passiva), Wind Blade (Primary Fire), Bolt Rush (Secondary Fire), Weather Control (Ability 1), Goddess Boost (Ability 2), Omega Hurricane (Ultimate).',
        'Wind Blade: 50 de dano, perfurante, 12 munição, sem queda de distância.',
        'Bolt Rush: 70 de dano, perfurante, 40m de alcance, 6s de recarga.',
        'Weather Control: 15m de raio, Tornado (Speed Boost) ou Thunder (+16,6% de dano).',
        'Goddess Boost: 15s de recarga, 8s de duração. Tornado: Speed Boost + Slow. Thunder: Damage Boost + dano a cada 2s.',
        'Omega Hurricane: dano por segundo, 350 de escudos temporários, desativa Weather Control.',
        'HP: 250. Role: Duelista.',
      ],
    },
    {
      id: 'rivalsmeta-storm',
      kind: 'guide',
      title: 'Marvel Rivals Storm: Abilities, Ultimate, Passives and More — RivalsMeta',
      url: 'https://rivalsmeta.com/characters/storm',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Visão geral do kit: Wind Blade, Bolt Rush, Weather Control, Goddess Boost, Omega Hurricane.',
        'Weather Control: Tornado concede Movement Boost, Thunder concede Damage Boost.',
        'Goddess Boost: Tornado concede Movement Boost e Slow, Thunder concede Damage Boost e dano contínuo.',
        'Omega Hurricane: transforma em ciclone, puxa inimigos e causa dano.',
      ],
    },
    {
      id: 'batru-storm',
      kind: 'database',
      title: 'Storm Team-Ups — Batru (Temporada 10)',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/storm',
      published: '2026-09-30',
      confidence: 'media',
      takeaways: [
        'Gods of Thunder + Thor: 64,97% de win rate (2,355 matches).',
        'Jaws of Fate + Jeff: 59,79% de win rate (5,459 matches).',
        'Melhores teammates: Ultron (66,79%), Devil Dinosaur (66,57%), Peni Parker (65,45%).',
        'Piores teammates: Squirrel Girl (45,53%), Phoenix (45,54%), Doctor Strange (47,40%).',
      ],
    },
    {
      id: 'official-teamups',
      kind: 'official',
      title: 'Team-Up — Página oficial de Marvel Rivals',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Confirma os dois Team-Ups ativos de Storm na Temporada 10: Gods of Thunder (parceiro Thor) e Jaws of Fate (parceiro Jeff the Land Shark).',
        'Regra oficial: o efeito base funciona sem o parceiro; o aprimorado acende automaticamente quando o parceiro entra no time.',
      ],
    },
    {
      id: 'balance-20260711',
      kind: 'official',
      title: 'Marvel Rivals Version 20260711 Balance Post',
      url: 'https://www.marvelrivals.com/balancepost/20260711/41667_1307328.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-07-11',
      confidence: 'alta',
      takeaways: [
        'Nenhuma mudança para Storm neste balance post.',
      ],
    },
    {
      id: 'balance-20260807',
      kind: 'official',
      title: 'Marvel Rivals Version 20260807 Balance Post',
      url: 'https://www.marvelrivals.com/balancepost/20260804/41667_1309952.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-08-04',
      confidence: 'alta',
      takeaways: [
        'Nenhuma mudança para Storm neste balance post.',
      ],
    },
    {
      id: 'beebom-storm',
      kind: 'guide',
      title: 'All Marvel Rivals Characters: Full Roster and Roles (Season 10) — Beebom',
      url: 'https://beebom.com/marvel-rivals-characters-list',
      published: '2026-09-10',
      confidence: 'media',
      takeaways: [
        'Storm é um Duelista de dano puro que pode derreter inimigos com algumas habilidades.',
        'Tem boas habilidades de crowd-control que são úteis em team fights.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Oficial',
      count: 3,
      status: 'Página oficial de Team-Ups verificada + 2 balance posts (20260711, 20260807) sem mudanças para Storm.',
    },
    {
      kind: 'database',
      label: 'Wiki/Database',
      count: 2,
      status: 'wiki.gg verificado — valores completos de habilidades, cooldowns, danos e mecânicas; Batru usado para win rates de dupla da Temporada 10.',
    },
    {
      kind: 'guide',
      label: 'Guias',
      count: 2,
      status: 'RivalsMeta e Beebom revisados — visão geral do kit e recomendações táticas.',
    },
    {
      kind: 'forum',
      label: 'Fórum/Comunidade',
      count: 0,
      status: 'Busca direta no Reddit não retornou resultados indexados. Consenso da comunidade extraído indiretamente via guias de terceiros.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos',
      count: 0,
      status: 'Pendente: falta transcrição validada com timestamps de guias em vídeo.',
    },
  ],
}
