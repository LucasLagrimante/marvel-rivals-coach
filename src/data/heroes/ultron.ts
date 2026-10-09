import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const ultron: HeroGuide = {
  id: 'ultron',
  name: 'Ultron',
  aliases: ['Ultrôn', 'AI Suprema'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/ultron.png'),
  bannerUrl: publicAsset('heroes/banners/ultron.png'),
  selectionPortraitUrl: publicAsset('heroes/select/ultron.png'),
  selectionHoverUrl: publicAsset('heroes/select/ultron_champion.gif'),
  selectionHoverFit: { scale: 1.35, x: 0, y: 2 },
  theme: {
    primary: '#1a1a2e',
    primaryRgb: '26, 26, 46',
    secondary: '#e94560',
    secondaryRgb: '233, 69, 96',
    surface: '#0f0f1a',
    surfaceRgb: '15, 15, 26',
  },
  roles: ['strategist'],
  lastVerified: '2026-10-09',
  confidenceSummary:
    'Habilidades e valores verificados na wiki.gg, marvelrivalshub e rivalsmeta. Balance posts de 20260710 e 20260612 confirmam os valores atuais. Divergências entre fontes: Encephalo-Ray dano (150 total vs 6×12+75), Firewall cooldown (10s vs 12s), Firewall vida bônus (75/55 vs 40/40). Valores pós-balance priorizados. Team-Ups confirmados pelo bundle oficial (stark-protocol e spdr-sync).',
  coreRead: [
    'Encephalo-Ray tem dois estágios: soltar o LMB antes de aquecer perde o golpe forte. Mantenha o feixe ativo por 1s completo para maximizar o dano.',
    'Imperative: Patch cura melhor o alvo marcado (45/s vs 30/s nos próximos). Marque o DPS que vai entrar na fight, não o tanque.',
    'Dynamic Flight dá +50 de vida bônus ao ativar — use para pré-carregar escudo antes da fight, não como escape reativo.',
    'Rage of Ultron aplica Unstoppable e regenera 50/s. Use para contestar objetivo em vez de fugir.',
    'Nano Ray (Stark Protocol) atravessa aliados e inimigos — posicione-se na linha do time para curar todos e ferir todos.',
  ],
  teamUps: {
    summary:
      'Stark Protocol troca a Encephalo-Ray pela Nano-Ray (rajada de nano-projéteis) e, com o Homem de Ferro, transforma o Imperative: Firewall em mísseis teleguiados. SP//DR Sync aplica o Imperative: Patch a todos os aliados e, com a Peni Parker, replica o Firewall em todos os Drones. Stark Protocol é a opção de pressão e dano; SP//DR Sync é a opção de cobertura total do time.',
    recommended: 'Stark Protocol',
    recommendedReason:
      'Stark Protocol dá ao Ultron uma segunda arma (Nano-Ray) e converte o Firewall em mísseis teleguiados com o Homem de Ferro — dois ganhos ofensivos que o Ultron não tem de base. SP//DR Sync é mais situacional: o Patch em todos os aliados e o Firewall nos Drones brilham em composições que seguram objetivo, mas não mudam o teto de dano do herói. Nenhuma taxa de vitória por dupla foi medida nesta sessão.',
    options: [
      {
        name: 'Stark Protocol',
        partner: 'Iron Man',
        partnerRole: 'Duelista',
        input: 'C',
        baseEffect:
          'Aprimora a Encephalo-Ray para Nano-Ray, disparando vários nano-projéteis de dano para a frente.',
        enhancedEffect:
          'Ao fazer dupla com o Homem de Ferro, o Imperative: Firewall dispara mísseis teleguiados poderosos contra inimigos no alcance, causando dano em área.',
        bestFor:
          'Quando o time precisa de mais dano à distância e de punir agrupamentos. A Nano-Ray dá ao Ultron uma ferramenta ofensiva extra e os mísseis do Firewall convertem o escudo de área em pressão.',
        easySetup:
          'O efeito base (Nano-Ray) já vale sem o Homem de Ferro. Com ele no time, o Firewall vira mísseis teleguiados automaticamente.',
        iconUrl: publicAsset('teamups/ultron-stark-protocol-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/ultron-stark-protocol-partner.png'),
      },
      {
        name: 'SP//DR Sync',
        partner: 'Peni Parker',
        partnerRole: 'Vanguarda',
        input: 'C',
        baseEffect:
          'Aplica o Imperative: Patch a todos os aliados.',
        enhancedEffect:
          'Ao fazer dupla com a Peni Parker, o Imperative: Firewall passa a valer para todos os Drones, permitindo que os efeitos da habilidade sejam acionados várias vezes ao mesmo tempo.',
        bestFor:
          'Composições que seguram ponto e se beneficiam de cura distribuída: o Patch em todos os aliados aumenta a cobertura de sustain sem custo extra de Spirit/gestão.',
        easySetup:
          'O Patch em todos os aliados funciona sozinho. A Peni Parker só amplia, replicando o Firewall nos Drones.',
        iconUrl: publicAsset('teamups/ultron-spdr-sync-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/ultron-spdr-sync-partner.png'),
      },
    ],
    sourceIds: ['official-teamups', 'wiki-gg-ultron', 'balance-20260710'],
  },
  systems: [
    {
      name: 'Encephalo-Ray',
      input: 'LMB',
      heading: 'Dois estágios: feixe contínuo + golpe forte',
      facts: [
        'Feixe contínuo por 1s; ao aquecer totalmente entrega um golpe único mais forte. Total ~150 de dano.',
        'Ritmo: ~1 disparo a cada 2s. 6 munições.',
        'Primeiro feixe: 6 projéteis em 0,5s a 12 por acerto. Segundo: campo cilíndrico de disparo único a 75 por acerto.',
        'Soltar o LMB antes de aquecer perde o golpe forte — mantenha o feixe ativo por 1s completo.',
        'Dano aprimorado contra Bonus Health.',
      ],
    },
    {
      name: 'Imperative: Patch + Firewall',
      input: 'E / RMB',
      heading: 'Cura em área + escudo preventivo',
      facts: [
        'Patch (E): comanda até 2 drones gigantes para seguir 2 aliados, curando aliados no raio. Cura 45/s no alvo marcado, 30/s nos próximos.',
        'Alcance máximo de fixação: 35m → 30m (balance 20260612). Cooldown 0 (reativo).',
        'Firewall (RMB): implanta micro-drones e concede vida bônus a todos os aliados próximos. Cooldown 12s (era 10s, balance 20260612).',
        'Vida bônus (S10): 40 no Ultron, 40 nos aliados. Auto-cura de 20/s por 3s ao conjurar.',
        'Cura em área dos drones do Firewall: 30/s → 35/s (balance 20260710).',
        'Se o Patch estiver ativo, o Firewall também concede vida bônus aos aliados no raio dele.',
      ],
    },
  ],
  roleGuides: {
    strategist: {
      key: 'strategist',
      label: 'Estrategista',
      nickname: 'AI Suprema',
      health: '250 HP',
      difficulty: 'Baixa (2/5): kit intuitivo, voo constante, cura em área e escudo preventivo',
      job: 'Cause dano contínuo com Encephalo-Ray, mantenha Patch nos aliados que estão entrando em fight, use Firewall para escudo preventivo antes de engajar, e ative Rage of Ultron para contestar objetivo.',
      verdict:
        'Escolha Ultron quando o time precisa de um Estrategista com mobilidade aérea constante, cura em área e escudo preventivo. Funciona bem em composições com Iron Man (Stark Protocol) ou Peni Parker (SP//DR Sync). Evite contra dive agressivo que foca você — o voo constante ajuda, mas 250 de vida é frágil.',
      playstyle: [
        'Ultron é um Estrategista voador: o voo é constante e não tem cooldown. Use isso para manter ângulos elevados e evitar dive de melee.',
        'Encephalo-Ray tem dois estágios: o feixe contínuo aquece e depois entrega um golpe forte. Soltar o LMB antes de aquecer perde o golpe forte — mantenha o feixe ativo por 1s completo.',
        'Imperative: Patch cura melhor o alvo marcado (45/s vs 30/s). Marque o DPS que vai entrar na fight, não o tanque que já está cheio.',
        'Imperative: Firewall dá escudo ANTES da fight, não reativo. Use para pré-carregar vida bônus antes de engajar, não quando já está tomando dano.',
        'Dynamic Flight dá +50 de vida bônus ao ativar — use para pré-carregar escudo antes da fight, não como escape reativo.',
        'Rage of Ultron aplica Unstoppable e regenera 50/s. Use para contestar objetivo em vez de fugir — você fica invulnerável a CC e regenera vida.',
        'Nano Ray (Stark Protocol) atravessa aliados e inimigos — posicione-se na linha do time para curar todos e ferir todos.',
      ],
      priorityKicker: 'Sequência',
      priorityTitle: 'Prioridade de habilidades',
      priorityDescription:
        'Ultron não tem upgrades numerados — a prioridade aqui é a ordem de uso de cada habilidade dentro de um engajamento para maximizar cura, escudo e dano.',
      upgradePlan: [
        {
          rank: 1,
          input: 'E',
          ability: 'Imperative: Patch',
          label: 'Cura em área + marcação de alvo',
          why: 'Cura 45/s no alvo marcado, 30/s nos próximos. Cooldown 0 (reativo). Alcance máximo de fixação 30m. Marque o DPS que vai entrar na fight.',
          swapWhen: 'Se o Patch estiver em CD (após uso), use Firewall para escudo preventivo ou Dynamic Flight para reposicionar.',
          sourceIds: ['wiki-gg-ultron', 'balance-20260612'],
        },
        {
          rank: 2,
          input: 'RMB',
          ability: 'Imperative: Firewall',
          label: 'Escudo preventivo + cura em área',
          why: 'Cooldown 12s. Concede 40 de vida bônus no Ultron e 40 nos aliados. Auto-cura de 20/s por 3s. Cura em área dos drones: 35/s.',
          swapWhen: 'Se o Firewall estiver em CD, use Patch para cura reativa ou Dynamic Flight para pré-carregar escudo.',
          sourceIds: ['wiki-gg-ultron', 'balance-20260710', 'balance-20260612'],
        },
        {
          rank: 3,
          input: 'Shift',
          ability: 'Dynamic Flight',
          label: 'Dash + velocidade + vida bônus',
          why: 'Dash rápido na direção do movimento + estado Accelerated. Distância ~10-12m, bônus de velocidade +40% por 8s, +50 de vida bônus ao ativar. Cooldown 8s.',
          swapWhen: 'Se o Dynamic Flight estiver em CD, use Encephalo-Ray para dano ou posicione-se atrás de cobertura.',
          sourceIds: ['wiki-gg-ultron'],
        },
        {
          rank: 4,
          input: 'LMB',
          ability: 'Encephalo-Ray',
          label: 'Dano principal + golpe forte',
          why: 'Feixe contínuo por 1s; ao aquecer totalmente entrega um golpe único mais forte. Total ~150 de dano. Ritmo ~1 disparo a cada 2s. 6 munições.',
          swapWhen: 'Se a munição estiver vazia, use Melee (35 de dano, 2 golpes/s) ou reposicione-se com Dynamic Flight.',
          sourceIds: ['wiki-gg-ultron', 'marvelrivalshub-ultron'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Rage of Ultron',
          label: 'Ultimate — esquadrão + Unstoppable + regeneração',
          why: 'Custo de 4300 de energia. ~9s de duração. Ultron e os bots disparam projéteis explosivos que ferem inimigos e curam aliados. Regenera ~50/s. Unstoppable.',
          swapWhen: 'Ative quando estiver em posição segura e com múltiplos alvos. O Unstoppable impede interrupções, mas você ainda pode morrer se focado.',
          sourceIds: ['wiki-gg-ultron', 'balance-20260612'],
        },
      ],
      adaptations: [
        'Contra alvos aéreos (Iron Man, Storm): Encephalo-Ray é hitscan — Ultron os acerta com facilidade enquanto duelistas de projétil erram. Priorize manter a munição cheia.',
        'Contra dive de melee agressivo (Wolverine, Blade, Black Panther): use Dynamic Flight para criar distância e Firewall para escudo preventivo. O voo constante ajuda a evitar dive.',
        'Contra composições de projétil (Hawkeye, Iron Man, Storm): Firewall concede escudo preventivo. Posicione-se atrás de cobertura e use Patch para cura reativa.',
        'Com Iron Man aliado: ative Stark Protocol para Nano Ray — laser contínuo de 10s que atravessa o time inteiro, curando aliados (85/s) e ferindo inimigos (50/s).',
        'Com Peni Parker aliado: ative SP//DR Sync para Firewall com vida bônus e auto-cura. O efeito é menor que Stark Protocol, mas mais defensivo.',
      ],
      ultimates: [
        {
          stance: 'Ultimate única',
          name: 'Rage of Ultron',
          bestUse: 'Contra 3+ inimigos agrupados em objetivo (ponto ou payload), ou para contestar em desvantagem numérica. O Unstoppable impede interrupções e a regeneração de 50/s mantém você vivo.',
          execution: 'Ative com [key:Q] e dispare nos inimigos. Custo de 4300 de energia. ~9s de duração. Ultron e os bots disparam projéteis explosivos que ferem inimigos e curam aliados. Regenera ~50/s. Unstoppable. Dano do feixe 8; velocidade do projétil 120 m/s.',
          upgradeValue: 'O custo de 4300 de energia é alto — ative apenas quando estiver em posição segura e com múltiplos alvos. O Unstoppable impede interrupções, mas você ainda pode morrer se focado.',
        },
      ],
      dashGuide: {
        ability: 'Encephalo-Ray → Patch → Firewall → Dynamic Flight → Rage of Ultron',
        shortRule: 'Mantenha Patch nos aliados que estão entrando em fight, use Firewall para escudo preventivo antes de engajar, e ative Rage of Ultron para contestar objetivo.',
        mechanics: [
          'Encephalo-Ray ([key:LMB]): feixe contínuo por 1s, golpe forte ao aquecer. Total ~150 de dano. 6 munições. Ritmo ~1 disparo a cada 2s.',
          'Imperative: Patch ([key:E]): cura 45/s no alvo marcado, 30/s nos próximos. Cooldown 0. Alcance 30m.',
          'Imperative: Firewall ([key:RMB]): 40 de vida bônus no Ultron e 40 nos aliados. Auto-cura 20/s por 3s. Cura em área 35/s. Cooldown 12s.',
          'Dynamic Flight ([key:Shift]): dash ~10-12m, +40% velocidade por 8s, +50 vida bônus. Cooldown 8s.',
          'Rage of Ultron ([key:Q]): custo 4300, ~9s, Unstoppable, regenera 50/s. Dano do feixe 8, velocidade do projétil 120 m/s.',
        ],
        drills: [
          'Treino 1: no modo prática, dispare Encephalo-Ray e mantenha o feixe ativo por 1s completo. Confirme que o golpe forte é entregue. Meça o tempo para aquecer completamente.',
          'Treino 2: posicione Patch em um aliado e confirme que a cura é maior no alvo marcado (45/s) do que nos próximos (30/s). Marque o DPS que vai entrar na fight.',
          'Treino 3: ative Firewall antes de engajar e confirme que a vida bônus é concedida antes do dano. Meça o tempo para o escudo expirar.',
          'Treino 4: ative Rage of Ultron com [key:Q] e dispare nos inimigos. Confirme o Unstoppable e a regeneração de 50/s. Meça o tempo para esvaziar a energia.',
        ],
      },
      patterns: [
        {
          title: 'Ciclo de cura e escudo',
          steps: [
            'Antes da briga, ative Imperative: Patch ([key:E]) no DPS que vai entrar na fight.',
            'Ative Imperative: Firewall ([key:RMB]) para escudo preventivo — a vida bônus é concedida antes do dano.',
            'Mantenha Encephalo-Ray ([key:LMB]) ativo por 1s completo para maximizar o dano.',
            'Se o Firewall expirar, reative. Se o Patch expirar, reative.',
            'Use Dynamic Flight ([key:Shift]) para reposicionar ou pré-carregar +50 de vida bônus.',
          ],
        },
        {
          title: 'Contestação de objetivo',
          steps: [
            'Ao detectar luta no objetivo, ative Rage of Ultron ([key:Q]) se estiver disponível.',
            'Posicione-se na linha do time para que os projéteis explosivos ferem inimigos e curam aliados.',
            'Mantenha Encephalo-Ray ativo para dano contínuo.',
            'Use Patch para cura reativa nos aliados que estão tomando dano.',
            'Se o Unstoppable expirar, use Dynamic Flight para criar distância.',
          ],
        },
        {
          title: 'Resposta a dive',
          steps: [
            'Ao detectar dive se aproximando (Wolverine, Black Panther, Blade), use Dynamic Flight ([key:Shift]) para criar distância.',
            'Ative Firewall ([key:RMB]) para escudo preventivo.',
            'Mantenha Patch ([key:E]) no aliado que está sendo focado.',
            'Se o inimigo continuar avançando, ative Rage of Ultron ([key:Q]) se estiver disponível — o Unstoppable impede interrupções.',
            'Use Encephalo-Ray para dano contínuo enquanto mantém distância.',
          ],
        },
      ],
      mistakes: [
        'Soltar o LMB antes de aquecer: o golpe forte é perdido. Mantenha o feixe ativo por 1s completo.',
        'Marcar o tanque com Patch: a cura é maior no alvo marcado (45/s). Marque o DPS que vai entrar na fight.',
        'Usar Firewall reativamente: o escudo é preventivo. Use antes de engajar, não quando já está tomando dano.',
        'Não usar Dynamic Flight para pré-carregar: o +50 de vida bônus é concedido ao ativar. Use antes da fight.',
        'Ativar Rage of Ultron para fugir: o Unstoppable e a regeneração de 50/s são para contestar, não para escapar.',
      ],
      evidence: ['wiki-gg-ultron', 'marvelrivalshub-ultron', 'rivalsmeta-ultron', 'official-teamups'],
      abilityLoop: [
        { ability: 'Encephalo-Ray', input: 'LMB' },
        { ability: 'Imperative: Patch', input: 'E' },
        { ability: 'Imperative: Firewall', input: 'RMB' },
        { ability: 'Dynamic Flight', input: 'Shift' },
        { ability: 'Rage of Ultron', input: 'Q' },
      ],
    },
  },
  sources: [
    {
      id: 'official-teamups',
      kind: 'official',
      title: 'Marvel Rivals — Página Oficial de Team-Up',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Fonte canônica dos dois Team-Ups da temporada: STARK PROTOCOL (tecla C, Iron Man) e SP//DR SYNC (tecla C, Peni Parker).',
        'Textos oficiais de efeito base e aprimorado, traduzidos fielmente no painel de Team-Up.',
      ],
    },
    {
      id: 'wiki-gg-ultron',
      kind: 'database',
      title: 'Ultron — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Ultron',
      published: '2025-11',
      confidence: 'alta',
      takeaways: [
        'Valores das habilidades: Encephalo-Ray (150 dano total, 6 munição), Melee (35 dano, 2 golpes/s), Dynamic Flight (10-12m, +40% velocidade, +50 vida bônus, CD 8s), Imperative: Patch (45/s alvo, 30/s próximos, alcance 30m), Imperative: Firewall (CD 12s, 40 vida bônus), Rage of Ultron (4300 custo, 9s, Unstoppable, 50/s regeneração).',
        'Health 250, movimento 6 m/s, herói voador (Flight passivo).',
        'Team-Ups: Stark Protocol (Iron Man), SP//DR Sync (Peni Parker).',
      ],
    },
    {
      id: 'official-heroes',
      kind: 'official',
      title: 'Marvel Rivals — Página Oficial de Heróis',
      url: 'https://www.marvelrivals.com/heroes',
      published: '2026-10',
      confidence: 'alta',
      takeaways: [
        'Health 250 confirmado na ficha oficial.',
        'Kit completo com descrições oficiais das habilidades.',
      ],
    },
    {
      id: 'balance-20260710',
      kind: 'official',
      title: 'Marvel Rivals Version 20260710 Balance Post',
      url: 'https://www.marvelrivals.com/balancepost/20260706/41667_1306647.html',
      published: '2026-07-06',
      confidence: 'alta',
      takeaways: [
        'Cura em área dos drones do Firewall: 30/s → 35/s.',
        'Confirma valores pós-balance de 2026.',
      ],
    },
    {
      id: 'balance-20260612',
      kind: 'official',
      title: 'Marvel Rivals Version 20260612 Balance Post',
      url: 'https://www.marvelrivals.com/20260610/41525_1303507.html',
      published: '2026-06-10',
      confidence: 'alta',
      takeaways: [
        'Imperative: Patch alcance máximo de fixação: 35m → 30m.',
        'Imperative: Firewall cooldown: 10s → 12s.',
        'Rage of Ultron custo de energia: 4000 → 4300.',
      ],
    },
    {
      id: 'season10-balance',
      kind: 'guide',
      title: 'Marvel Rivals Season 10 Patch Notes — Insider Gaming',
      url: 'https://insider-gaming.com/marvel-rivals-season-10-patch-notes-buffs-nerfs',
      published: '2026-09-11',
      confidence: 'media',
      takeaways: [
        'Balance S10 (20260911): vida bônus no Ultron 65 → 40, nos aliados 50 → 40.',
        'Novo efeito: ao conjurar Firewall, 20/s de auto-cura por 3s.',
      ],
    },
    {
      id: 'marvelrivalshub-ultron',
      kind: 'guide',
      title: 'Ultron Guide — MarvelRivalsHub',
      url: 'https://marvelrivalshub.com/heroes/ultron',
      published: '2026',
      confidence: 'media',
      takeaways: [
        'Encephalo-Ray: primeiro feixe 6 projéteis em 0,5s a 12 por acerto; depois campo cilíndrico de disparo único a 75 por acerto.',
        'Dicas de posicionamento e uso de habilidades.',
      ],
    },
    {
      id: 'rivalsmeta-ultron',
      kind: 'database',
      title: 'Ultron — RivalsMeta',
      url: 'https://rivalsmeta.com/characters/ultron',
      published: '2026',
      confidence: 'alta',
      takeaways: [
        'Valores das habilidades e estatísticas.',
        'Win rate e pick rate atualizados.',
      ],
    },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 4, status: 'Completo' },
    { kind: 'database', label: 'Database', count: 2, status: 'Completo' },
    { kind: 'guide', label: 'Guia escrito', count: 2, status: 'Completo' },
    { kind: 'forum', label: 'Fórum', count: 0, status: 'Pendente' },
    { kind: 'video-transcript', label: 'Vídeo', count: 0, status: 'Pendente' },
  ],
}
