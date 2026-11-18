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
  lastVerified: '2026-11-18',
  confidenceSummary:
    'Números e teclas reconferidos em 18/11/2026 na ficha oficial do herói (HTML da página de heróis): Wind Blade 60 por rodada com queda de 15m a 30m (60%), Bolt Rush 80 com 8s, Weather Control no Shift (+16% de movimento para Storm e +8% para aliados no Tornado; +12% de dano para Storm e +8% para aliados no Thunder) e Goddess Boost no E. O guia publicava Weather Control no E, Goddess Boost no F, Thunder com +16,6% e Wind Blade de 50 sem queda — tudo defasado. Omega Hurricane custa 3400, dá 450 de Vida Bônus e 80 de dano por golpe em raio de 8m por 5s. Team-Ups conferidos no bundle oficial vivo: God of Thunder (Thor, LMB) e Jaws of Fate (Jeff the Land Shark, C). Batru de 31/10 segue como medição de dupla, não prova causal do Team-Up.',
  coreRead: [
    'Weather Control ([key:Shift]) é o coração do kit: Tornado dá +16% de velocidade para Storm e +8% para aliados; Thunder dá +12% de dano para Storm e +8% para aliados. Alterne conforme a situação e nunca entre no combate sem o buff ativo.',
    'Wind Blade ([key:LMB]) é o dano principal: 60 de dano por rodada, perfurante, com queda a partir de 15m (60% do dano em 30m). Use para pressionar à distância e finalizar alvos com HP baixo.',
    'Bolt Rush ([key:RMB]) é o burst: 80 de dano numa coluna de 1m de raio por 40m de altura, com 8s de recarga. Combine com Thunder para maximizar o dano em alvos prioritários.',
    'Omega Hurricane ([key:Q]) é o ultimate de team fight: 3400 de energia, 5s de ciclone, 80 de dano por golpe em raio de 8m e 450 de Vida Bônus para Storm. Use em objetivos ou para virar briga em desvantagem numérica.',
  ],
  teamUps: {
    summary:
      'God of Thunder é a escolha geral: no Batru atualizado em 31/10, a dupla com Thor ficou em 64,26% (3.100 partidas) e Jaws of Fate + Jeff em 58,28% (6.844). A RivalsMeta também coloca God of Thunder acima de Jaws of Fate, mas seus valores e amostras variam entre extração direta e snippets; não são usados aqui como prova numérica. As bases medem duplas, não causalidade do Team-Up. Jaws of Fate segue situacional para sustain e Jeff-nado.',
    recommended: 'God of Thunder',
    recommendedReason:
      'O efeito base de God of Thunder transforma Wind Blade em feixe hitscan que detona ao atingir; com Thor, Bolt Rush vira Chain Lightning e ricocheteia entre inimigos. Batru mede 64,26% para Thor (3.100 partidas) e 58,28% para Jeff (6.844). A RivalsMeta também favorece a opção com Thor, mas os valores/amostras não são estáveis entre extração e busca; use só como apoio direcional. São resultados das duplas, não estimativas causais do Team-Up; mantenha a escolha condicionada à composição.',
    options: [
      {
        name: 'God of Thunder',
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
    sourceIds: ['official-teamups', 'batru-storm', 'rivalsmeta-storm', 'rivalsmeta-teamups'],
  },
  systems: [
    {
      name: 'Weather Control',
      input: 'Shift',
      heading: 'Alterne o clima para empowerar o time',
      facts: [
        'Tornado: +16% de velocidade de movimento para Storm e +8% para aliados no raio de 15m; sob a aura, acertos de Wind Blade e Bolt Rush geram Vida Bônus (25% do dano, até 75). Use para engajar ou recuar rapidamente.',
        'Thunder: +12% de dano para Storm e +8% para aliados no raio de 15m; acertos de Wind Blade cortam 0,5s da recarga do Bolt Rush e ampliam o campo dele de 1m para 1,5m. Use para maximizar DPS em burst.',
        'A troca é instantânea e não tem cooldown — alterne conforme a situação da luta.',
        'Goddess Boost ([key:E]) dura 8s com 15s de recarga e amplifica o clima ativo: Tornado aprimorado (+40% de movimento para Storm, +20% para aliados e −15% de velocidade nos inimigos) e Thunder aprimorado (+25% de dano para Storm, +15% para aliados e 35 de dano a cada 2s).',
      ],
      meter: [
        { label: 'Tornado', value: '+16% (Storm) / +8% (aliados) de movimento' },
        { label: 'Thunder', value: '+12% (Storm) / +8% (aliados) de dano' },
      ],
    },
    {
      name: 'Wind Blade',
      input: 'LMB',
      facts: [
        '60 de dano por rodada, perfurante, com queda a partir de 15m: 60% do dano em 30m.',
        '12 munição, 2 rodadas por segundo, projétil a 150 m/s. Recarga automática.',
        'Não atravessa deployables (barreiras, escudos).',
        'Com God of Thunder, vira hitscan com detonação ao atingir.',
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
        'Na fase de burst, combine Thunder + Bolt Rush + Wind Blade no mesmo alvo. O Bolt Rush tem 8s de recarga — use-o quando o alvo estiver com HP baixo ou marcado por aliados.',
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
          input: 'Shift',
          ability: 'Weather Control',
          label: 'Buff de equipe — alterne conforme a situação',
          why: 'Concede movimento (Tornado: +16% para Storm, +8% para aliados) ou dano (Thunder: +12% para Storm, +8% para aliados) no raio de 15m. É o multiplicador silencioso do kit — sempre ativo.',
          swapWhen: 'Use Tornado para engajar/recuar, Thunder para maximizar Dano em burst.',
          sourceIds: ['wiki-storm', 'rivalsmeta-storm'],
        },
        {
          rank: 2,
          input: 'LMB',
          ability: 'Wind Blade',
          label: 'Dano principal — pressão à distância',
          why: '60 de dano por rodada, perfurante, com queda a partir de 15m (60% em 30m). É a fonte de dano primária — use para pressionar e finalizar.',
          swapWhen: 'Com God of Thunder, vira hitscan com detonação — ainda mais forte.',
          sourceIds: ['wiki-storm', 'rivalsmeta-storm'],
        },
        {
          rank: 3,
          input: 'RMB',
          ability: 'Bolt Rush',
          label: 'Burst — finalização de alvos',
          why: '80 de dano em coluna de 1m de raio por 40m de altura, 8s de recarga. Use em alvos com HP baixo ou marcados por aliados.',
          swapWhen: 'Com God of Thunder + Thor, vira Chain Lightning — salta entre inimigos.',
          sourceIds: ['wiki-storm', 'rivalsmeta-storm'],
        },
        {
          rank: 4,
          input: 'E',
          ability: 'Goddess Boost',
          label: 'Amplifica Weather Control',
          why: '15s de recarga, 8s de duração: o Tornado aprimorado sobe para +40%/+20% de movimento e aplica −15% nos inimigos; o Thunder aprimorado sobe para +25%/+15% de dano e passa a causar 35 a cada 2s. Use antes de engajar.',
          swapWhen: 'Ative antes de team fights para maximizar o buff de equipe.',
          sourceIds: ['wiki-storm'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Omega Hurricane',
          label: 'Ultimate de team fight',
          why: '3400 de energia: 5s de ciclone, 80 de dano por golpe em raio de 8m e 450 de Vida Bônus para Storm.',
          swapWhen: 'Use em objetivos ou para virar briga em desvantagem numérica.',
          sourceIds: ['wiki-storm', 'rivalsmeta-storm'],
        },
      ],
      adaptations: [
        'Contra heróis aéreos (Iron Man, Ultron): o Bolt Rush é instantâneo na coluna de 40m, mas o Wind Blade só vira hitscan com God of Thunder — sem o Team-Up, lidere o alvo em movimento. Mantenha distância e use o voo para reposicionar.',
        'Contra dive de melee (Wolverine, Blade, Black Panther): use o voo para manter distância. Weather Control (Tornado) ajuda a recuar rapidamente.',
        'Contra composições agrupadas em objetivos: Omega Hurricane é perfeito — puxa múltiplos inimigos e causa dano contínuo.',
        'Com Thor aliado: ative God of Thunder e use Chain Lightning (Bolt Rush aprimorado) em alvos agrupados.',
        'Com Jeff aliado: ative Jaws of Fate e use a chuva curativa para sustentar o time em fights prolongados.',
      ],
      ultimates: [
        {
          stance: 'Ultimate única',
          name: 'Omega Hurricane',
          bestUse:
            'Contra 3+ inimigos agrupados em objetivo (ponto ou payload), ou para virar briga em desvantagem numérica.',
          execution:
            'Ative com [key:Q] e mova-se em direção ao cluster inimigo. O ciclone puxa inimigos próximos e causa 80 de dano por golpe (2 golpes por segundo) em raio de 8m por 5s; Storm recebe 450 de Vida Bônus e o Weather Control fica desativado no período.',
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
        'Desperdiçar Bolt Rush: 80 de dano a cada 8s — use em alvos com HP baixo ou marcados por aliados.',
      ],
      evidence: ['official-storm-sheet', 'wiki-storm', 'rivalsmeta-storm', 'batru-storm', 'rivalsmeta-teamups', 'official-patch-20261029', 'beebom-storm'],
      abilityLoop: [
        { ability: 'Weather Control', input: 'Shift' },
        { ability: 'Wind Blade', input: 'LMB' },
        { ability: 'Bolt Rush', input: 'RMB' },
        { ability: 'Goddess Boost', input: 'E' },
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
        'Wind Blade segundo a wiki: 50 de dano, sem queda — valores defasados; a ficha oficial atual traz 60 por rodada com queda de 15m a 30m.',
        'Bolt Rush segundo a wiki: 70 de dano e 6s de recarga — defasado; a ficha oficial atual traz 80 e 8s.',
        'Weather Control segundo a wiki: 15m de raio, Tornado (Speed Boost) ou Thunder (+16,6% de dano) — o percentual atual da ficha é +12% para Storm e +8% para aliados.',
        'Goddess Boost: 15s de recarga, 8s de duração. Tornado: Speed Boost + Slow. Thunder: Damage Boost + dano a cada 2s.',
        'Omega Hurricane: dano por segundo, 350 de escudos temporários, desativa Weather Control.',
        'HP: 250. Role: Duelista.',
      ],
    },
    {
      id: 'official-storm-sheet',
      kind: 'official',
      title: 'Storm — ficha oficial de herói (Marvel Rivals)',
      url: 'https://www.marvelrivals.com/heroes/0szgnvcxspazm/',
      author: 'Marvel Rivals / NetEase',
      published: 'consulta em 2026-11-18',
      confidence: 'alta',
      takeaways: [
        'Ficha oficial consultada em 18/11/2026: 250 HP, 6 m/s; Wind Blade 60 por rodada, 150 m/s, queda a partir de 15m até 60% em 30m, 12 munição e 2 rodadas por segundo.',
        'Bolt Rush 80 de dano em campo cilíndrico de 1m de raio por 40m de altura, 8s de recarga. Weather Control no Shift (Tornado +16%/+8% de movimento; Thunder +12%/+8% de dano) e Goddess Boost no E (8s de duração, 15s de recarga; aprimorado +40%/+20% e +25%/+15%).',
        'Omega Hurricane: 3400 de energia, 5s de duração, 8m de raio, 80 de dano por golpe (2 golpes por segundo) e 450 de Vida Bônus. A ficha não publica cooldown para a troca de clima do Weather Control.',
        'Esta ficha contradiz os valores que o guia publicava (Wind Blade 50 sem queda, Bolt Rush 70/6s, Thunder +16,6%, Weather Control no E e Goddess Boost no F) e prevalece sobre eles.',
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
      title: 'Storm Team-Ups — Batru (consulta em 02/11/2026)',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/storm',
      published: 'consulta em 2026-11-02; dados atualizados em 2026-10-31',
      confidence: 'media',
      takeaways: [
        'A página ainda usa o rótulo legado Gods of Thunder: Thor 64,26% (3.100 partidas); Jaws of Fate + Jeff 58,28% (6.844 partidas).',
        'Os agregados móveis cobrem os últimos 30 dias e são recalculados diariamente; a taxa mede a dupla, não o efeito causal do Team-Up.',
        'Storm: 56,74% de win rate geral, 4,41% de pick e 27.593 partidas na consulta; esses dados também são snapshots, não previsão individual.',
      ],
    },
    {
      id: 'official-teamups',
      kind: 'official',
      title: 'Team-Up — Página oficial de Marvel Rivals',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      author: 'Marvel Rivals / NetEase',
      published: 'consulta em 2026-11-02',
      confidence: 'alta',
      takeaways: [
        'Bundle vivo consultado em 02/11/2026: nome atual GOD OF THUNDER (parceiro Thor) e JAWS OF FATE (parceiro Jeff the Land Shark); teclas e efeitos base/aprimorado conferidos.',
        'Batru e RivalsMeta ainda exibem Gods of Thunder, rótulo legado; para nome e efeitos atuais prevalece o bundle oficial.',
        'O efeito base funciona sem o parceiro; o aprimorado ativa quando o parceiro está no time.',
      ],
    },
    {
      id: 'rivalsmeta-teamups',
      kind: 'database',
      title: 'Marvel Rivals Team-Ups — RivalsMeta',
      url: 'https://rivalsmeta.com/team-ups',
      published: '2026-11-02',
      confidence: 'media',
      takeaways: [
        'A extração direta de 02/11 lista God of Thunder acima de Jaws of Fate (62,3%/3.794 contra 59,5%/8.008); snippets de busca retornam valores e amostras diferentes (61,3%/2.196 e 59,2%/4.855), sem filtro claramente verificável.',
        'Registro apenas a direção do sinal da RivalsMeta, não seus percentuais: o recorte não é consistente entre extração e busca e não estabelece causalidade do Team-Up. Batru é a comparação numérica mais clara nesta revisão.',
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
    {
      id: 'official-patch-20261029',
      kind: 'official',
      title: 'Marvel Rivals Version 20261029 Patch Notes',
      url: 'https://www.marvelrivals.com/gameupdate/20261028/41548_1317925.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-10-28 (patch efetivo em 2026-10-29)',
      confidence: 'alta',
      takeaways: [
        'Patch de conteúdo e correções, sem ajuste de balanceamento ou gameplay para Storm; inclui apenas conteúdo cosmético relacionado à personagem.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Oficial',
      count: 5,
      status: 'Ficha oficial do herói (18/11/2026) para números e teclas, página oficial de Team-Ups, 2 balance posts e patch Version 20261029 conferidos.' ,
    },
    {
      kind: 'database',
      label: 'Wiki/Database',
      count: 3,
      status: 'wiki.gg para habilidades; Batru (janela móvel de 30 dias) e RivalsMeta (valores inconsistentes entre extração e busca) como snapshots de duplas, sem inferência causal.',
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
