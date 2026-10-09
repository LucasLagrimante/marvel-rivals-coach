import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const venom: HeroGuide = {
  id: 'venom',
  name: 'Venom',
  aliases: ['Eddie Brock', 'Simbionte'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/venom.png'),
  bannerUrl: publicAsset('heroes/banners/venom.png'),
  selectionPortraitUrl: publicAsset('heroes/select/venom.png'),
  selectionHoverUrl: publicAsset('heroes/select/venom_champion.gif'),
  selectionHoverFit: { scale: 1.3, x: 0, y: -10 },
  theme: {
    primary: '#1a1a2e',
    primaryRgb: '26, 26, 46',
    secondary: '#16213e',
    secondaryRgb: '22, 33, 62',
    surface: '#0f0f1a',
    surfaceRgb: '15, 15, 26',
  },
  roles: ['vanguard'],
  lastVerified: '2026-10-09',
  confidenceSummary:
    'Habilidades e valores verificados na wiki.gg e página oficial do herói. Health 650 confirmado pela ficha oficial. Venom Swing CD 8s (wiki.gg) vs 10s (marvelrivals.net) — divergência registrada. Symbiotic Resilience concede 100 + 120% da vida perdida como vida bônus (100–879 total). Feast of the Abyss causa dano igual a 50% da vida ATUAL do alvo + 50. Team-Ups confirmados pelo bundle oficial e traduzidos fielmente.',
  coreRead: [
    'Symbiotic Resilience ([key:E]) é o diferencial: vida bônus que escala INVERSAMENTE com a vida atual — quanto MENOS vida, MAIS escudo. Concede 100 + 120% da vida perdida (100–879 total). Segure para o meio da fight, não use cheio.',
    'Feast of the Abyss ([key:Q]) é o ultimate de execução: dano igual a 50% da vida ATUAL do alvo + 50, e gera vida bônus igual ao dano causado. Melhor contra tanques cheios — o dano escala com a vida atual, não a máxima.',
    'Frenzied Arrival ([key:F]) é o engajamento: mergulho em pleno ar que fere inimigos próximos e os PUXA para o ponto de pouso. 65 de dano com falloff, raio 6m. Use para agrupar inimigos para o time.',
    'Alien Biology (Passiva) permite escalar paredes e teto: 3 m/s andando, 9 m/s correndo. Use para ângulos que ninguém cobre e flanquear por cima.',
  ],
  teamUps: {
    summary:
      'Blood Leech acopla ao Cellular Corrosion um dreno de vida contínuo em cada alvo preso, e com o Blade o Venom recebe cura instantânea extra ao usar certas habilidades. Abyssal Flames incendeia o simbionte com as Chamas da Fênix, trocando o Dark Predation por um golpe frontal e, com a Fênix, empilhando Sparks até a detonação. Blood Leech é a opção de sustain no engajamento; Abyssal Flames é a de dano e burst.',
    recommended: 'Blood Leech',
    recommendedReason:
      'Blood Leech reforça o que o Venom já faz de melhor: prender o inimigo com o Cellular Corrosion e transformar esse lock em cura. O dreno contínuo sustenta o dive sem depender de cooldown, e o Blade acrescenta cura instantânea nas habilidades. Abyssal Flames troca o ataque primário por um golpe frontal e só rende o burst completo com a Fênix no time — é mais dependente da composição. Nenhuma taxa de vitória por dupla foi medida nesta sessão.',
    options: [
      {
        name: 'Blood Leech',
        partner: 'Blade',
        partnerRole: 'Duelista',
        input: 'RMB',
        baseEffect:
          'Novo efeito do Cellular Corrosion: enquanto estiver preso a inimigos, drena vida continuamente de cada alvo conectado, restaurando a vida do Venom.',
        enhancedEffect:
          'Ao fazer dupla com o Blade, o Venom ganha uma carga única de cura ao usar certas habilidades específicas.',
        bestFor:
          'Sustain durante o engajamento: prender vários inimigos com o Cellular Corrosion vira cura simultânea por alvo. Ideal para dive agressivo e fights prolongadas.',
        easySetup:
          'O dreno do Cellular Corrosion já funciona sem o Blade. Com ele no time, você ganha cura instantânea adicional ao usar as habilidades.',
        iconUrl: publicAsset('teamups/venom-blood-leech-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/venom-blood-leech-partner.png'),
      },
      {
        name: 'Abyssal Flames',
        partner: 'Phoenix',
        partnerRole: 'Duelista',
        input: 'C',
        baseEffect:
          'Incendeia o simbionte com as Chamas da Fênix por um período, substituindo o Dark Predation por um golpe frontal amplo de Phoenix Touch.',
        enhancedEffect:
          'Ao fazer dupla com a Fênix, a Força Fênix do Venom é aprimorada: cada Phoenix Touch aplica Sparks e, ao acumular três cargas, os Sparks detonam.',
        bestFor:
          'Times com a Fênix, onde o burst do Sparks detonado compensa a troca do ataque primário. Boa para pressão em objetivo e para punir alvos agrupados.',
        easySetup:
          'Sem a Fênix o Phoenix Touch ainda substitui o Dark Predation, mas só aplica um golpe por vez. Com ela, os Sparks empilham e detonam.',
        iconUrl: publicAsset('teamups/venom-abyssal-flames-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/venom-abyssal-flames-partner.png'),
      },
    ],
    sourceIds: ['official-teamups', 'wiki-venom', 'balance-s10'],
  },
  systems: [
    {
      name: 'Alien Biology',
      input: 'Passiva',
      facts: [
        'Escala e anda em qualquer superfície vertical ou teto.',
        'Velocidade na parede: 3 m/s andando, 9 m/s correndo.',
        'Permite ângulos que ninguém cobre — use para flanquear por cima.',
      ],
    },
    {
      name: 'Symbiotic Resilience',
      input: 'E',
      facts: [
        'Vida bônus que escala INVERSAMENTE com a vida atual: quanto MENOS vida, MAIS escudo.',
        'Concede 100 de vida bônus + converte 120% da vida perdida em vida bônus (100–879 total).',
        'Cooldown 15s. Segure para o meio da fight, não use cheio.',
      ],
    },
  ],
  roleGuides: {
    vanguard: {
      key: 'vanguard',
      label: 'Vanguarda',
      nickname: 'O Simbionte',
      health: '650 HP',
      difficulty: 'Média (3/5): kit de dive exige gestão de cooldowns e posicionamento',
      job: 'Dive no time inimigo, use Frenzied Arrival para agrupar inimigos, mantenha pressão com Dark Predation e Cellular Corrosion, e ative Feast of the Abyss para executar alvos com vida alta.',
      verdict:
        'Escolha Venom quando o time precisa de um Vanguard de dive/disrupção com sustain e controle de área. Funciona bem em mapas com paredes para Alien Biology e composições com Blade ou Phoenix. Evite contra kiting de longo alcance (Punisher, Iron Man) sem suporte para fechar distância.',
      playstyle: [
        'Venom opera como um brawler de dive: entre com Frenzied Arrival, agrupe inimigos, e sustente dano com Dark Predation e Cellular Corrosion. Use Alien Biology para flanquear por cima e ângulos inesperados.',
        'Symbiotic Resilience é o sustain: vida bônus que escala com vida perdida. Use no meio da fight, não com vida cheia — o escudo é maior quando você está low.',
        'Feast of the Abyss é a execução: dano igual a 50% da vida ATUAL do alvo + 50. Melhor contra tanques cheios — o dano escala com a vida atual, não a máxima.',
        'Cellular Corrosion é o controle: prende inimigos próximos com tentáculos, aplicando slow. O dano grande (80) só vem se o inimigo NÃO escapar — use para punir quem fica no lugar.',
      ],
      priorityKicker: 'Sequência',
      priorityTitle: 'Prioridade de habilidades',
      priorityDescription:
        'Venom não tem upgrades numerados — a prioridade aqui é a ordem de uso de cada habilidade dentro de um engajamento para maximizar o dive e o burst.',
      upgradePlan: [
        {
          rank: 1,
          input: 'F',
          ability: 'Frenzied Arrival',
          label: 'Engajamento + agrupamento',
          why: 'Mergulho em pleno ar que fere inimigos próximos (65 de dano com falloff) e os PUXA para o ponto de pouso. Raio 6m, CD 8s. Use para iniciar engajamentos e agrupar inimigos para o time.',
          swapWhen: 'Se Frenzied Arrival está em CD, use Venom Swing para reposicionar ou Dark Predation para dano à distância.',
          sourceIds: ['wiki-venom', 'official-venom'],
        },
        {
          rank: 2,
          input: 'E',
          ability: 'Symbiotic Resilience',
          label: 'Sustain + escudo escalando',
          why: 'Concede 100 de vida bônus + converte 120% da vida perdida em vida bônus (100–879 total). CD 15s. Use no meio da fight, quando a vida está baixa — o escudo é maior.',
          swapWhen: 'Se Symbiotic Resilience está em CD, use Cellular Corrosion para controle ou Dark Predation para dano contínuo.',
          sourceIds: ['wiki-venom', 'official-venom'],
        },
        {
          rank: 3,
          input: 'RMB',
          ability: 'Cellular Corrosion',
          label: 'Controle + dano condicional',
          why: 'Prende inimigos próximos com tentáculos, aplicando slow 25%. Raio 8m, duração 3s, CD 8s. 5 de dano no toque + 80 se o inimigo NÃO escapar. Use para punir quem fica no lugar.',
          swapWhen: 'Se Cellular Corrosion está em CD, use Dark Predation para dano contínuo ou Frenzied Arrival para engajar.',
          sourceIds: ['wiki-venom'],
        },
        {
          rank: 4,
          input: 'LMB',
          ability: 'Dark Predation',
          label: 'Dano principal + alcance',
          why: '4 tentáculos pontiagudos, 20 de dano no corpo e 40 na cabeça. Ritmo 0.9s com 0.1s entre cada tentáculo, alcance 15m. Use para dano contínuo e acúmulo de ultimate.',
          swapWhen: 'Se Dark Predation não está alcançando o alvo, use Frenzied Arrival para fechar distância ou Venom Swing para reposicionar.',
          sourceIds: ['wiki-venom'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Feast of the Abyss',
          label: 'Ultimate de execução',
          why: 'Dano igual a 50% da vida ATUAL do alvo + 50, e gera vida bônus igual ao dano causado. Raio 7m, custo 2500 de energia, boost de movimento 80%, duração máx 4s. Use para executar alvos com vida alta.',
          swapWhen: 'Se Feast of the Abyss está em CD, use Frenzied Arrival + Cellular Corrosion para engajamento e controle.',
          sourceIds: ['wiki-venom', 'official-venom'],
        },
      ],
      adaptations: [
        'Contra alvos aéreos (Iron Man, Storm, Ultron): use Alien Biology para escalar e flanquear por cima. Frenzied Arrival pode puxar inimigos voadores para o chão.',
        'Contra dive de melee agressivo (Wolverine, Blade, Black Panther): use Cellular Corrosion para prender e slow. Se eles escaparem, use Symbiotic Resilience para sustain.',
        'Contra composições de projétil (Punisher, Iron Man, Hawkeye): posicione-se atrás de cobertura e use Alien Biology para ângulos inesperados. Frenzied Arrival para fechar distância rapidamente.',
        'Com Blade aliado: ative Blood Leech para dreno de vida amplificado. O dreno complementa o kit de dive e sustain.',
        'Com Phoenix aliada: ative Abyssal Flames para dano em área amplificado. As chamas abissais transformam o Venom em uma ameaça contínua.',
      ],
      ultimates: [
        {
          stance: 'Ultimate única',
          name: 'Feast of the Abyss',
          bestUse: 'Contra alvos com vida alta (tanques) ou para finalizar briga em desvantagem numérica. O dano escala com a vida ATUAL do alvo — melhor contra tanques cheios.',
          execution: 'Ative com [key:Q] e mire no alvo. Venom vira massa negra, cava e emerge como uma bocarra gigante. Dano igual a 50% da vida ATUAL do alvo + 50, e gera vida bônus igual ao dano causado. Raio 7m, boost de movimento 80%, duração máx 4s.',
          upgradeValue: 'O dano proporcional à vida atual torna Feast of the Abyss um dos ultimates de execução mais fortes do jogo. Use para eliminar tanques e virar teamfights.',
        },
      ],
      dashGuide: {
        ability: 'Frenzied Arrival → Cellular Corrosion → Dark Predation → Feast of the Abyss',
        shortRule: 'Frenzied Arrival PUXA inimigos para o pouso — use para agrupar o time inimigo e abrir para burst.',
        mechanics: [
          'Frenzied Arrival ([key:F]) tem CD 8s, raio 6m, 65 de dano com falloff a partir de 2m até 40% em 6m. PUXA inimigos para o ponto de pouso.',
          'Cellular Corrosion ([key:RMB]) tem CD 8s, raio 8m, duração 3s. Prende inimigos com slow 25%. 5 de dano no toque + 80 se não escapar.',
          'Dark Predation ([key:LMB]) tem alcance 15m, 20 de dano no corpo e 40 na cabeça. Ritmo 0.9s com 0.1s entre cada tentáculo.',
          'Feast of the Abyss ([key:Q]) tem raio 7m, custo 2500 de energia, boost de movimento 80%, duração máx 4s. Dano = 50% vida ATUAL + 50.',
        ],
        drills: [
          'Treino 1: no modo prática, use Frenzied Arrival em um dummy e confirme que ele é puxado para o ponto de pouso. Meça o raio de atração (6m).',
          'Treino 2: use Cellular Corrosion em um dummy e confirme o slow de 25% e a duração de 3s. Tente escapar e confirme a distância de escape (11m).',
          'Treino 3: use Dark Predation em um dummy e confirme o dano (20 corpo, 40 cabeça). Meça o alcance (15m) e o ritmo (0.9s).',
          'Treino 4: ative Feast of the Abyss em um dummy com vida cheia e confirme o dano (50% vida ATUAL + 50). Depois ative com vida baixa e confirme a diferença.',
        ],
      },
      patterns: [
        {
          title: 'Ciclo de dive',
          steps: [
            'Use Frenzied Arrival ([key:F]) para mergulhar no time inimigo e agrupar inimigos no ponto de pouso.',
            'Enquanto os inimigos estão agrupados, use Cellular Corrosion ([key:RMB]) para prender e slow.',
            'Use Dark Predation ([key:LMB]) para dano contínuo e acúmulo de ultimate.',
            'Se a vida estiver baixa, use Symbiotic Resilience ([key:E]) para sustain — o escudo é maior quando low.',
            'Quando o alvo estiver com vida alta, ative Feast of the Abyss ([key:Q]) para executar.',
          ],
        },
        {
          title: 'Flanqueio com Alien Biology',
          steps: [
            'Use Alien Biology (Passiva) para escalar paredes e teto, flanqueando por cima.',
            'Posicione-se em ângulos que ninguém cobre — use para surpreender o time inimigo.',
            'Quando estiver em posição, use Frenzied Arrival ([key:F]) para mergulhar de cima.',
            'Use Cellular Corrosion ([key:RMB]) para prender inimigos que tentarem escapar.',
            'Use Dark Predation ([key:LMB]) para dano contínuo enquanto mantém pressão.',
          ],
        },
        {
          title: 'Resposta a dive inimigo',
          steps: [
            'Ao detectar dive se aproximando (Wolverine, Black Panther, Blade), use Cellular Corrosion ([key:RMB]) para prender e slow.',
            'Se o inimigo escapar, use Symbiotic Resilience ([key:E]) para sustain — o escudo é maior quando low.',
            'Use Frenzied Arrival ([key:F]) para reposicionar ou agrupar inimigos para o time.',
            'Se a vida estiver muito baixa, use Venom Swing ([key:Shift]) para escapar e esperar Symbiotic Resilience recarregar.',
          ],
        },
      ],
      mistakes: [
        'Usar Symbiotic Resilience com vida cheia: o escudo é maior quando a vida está baixa. Segure para o meio da fight.',
        'Ativar Feast of the Abyss em alvos com vida baixa: o dano escala com a vida ATUAL — melhor contra tanques cheios.',
        'Ignorar Alien Biology: escalar paredes e teto permite ângulos que ninguém cobre. Não usar significa perder flanqueios.',
        'Usar Cellular Corrosion em inimigos que escapam rápido: o dano grande (80) só vem se o inimigo NÃO escapar. Use para punir quem fica no lugar.',
      ],
      evidence: ['wiki-venom', 'official-venom', 'balance-s10', 'official-teamups'],
      abilityLoop: [
        { ability: 'Frenzied Arrival', input: 'F' },
        { ability: 'Cellular Corrosion', input: 'RMB' },
        { ability: 'Dark Predation', input: 'LMB' },
        { ability: 'Symbiotic Resilience', input: 'E' },
        { ability: 'Feast of the Abyss', input: 'Q' },
      ],
    },
  },
  sources: [
    {
      id: 'wiki-venom',
      kind: 'database',
      title: 'Venom — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Venom',
      published: '2026-10',
      confidence: 'alta',
      takeaways: [
        'Habilidades: Alien Biology (Passiva, escala paredes/teto), Dark Predation (LMB, 4 tentáculos, 20 corpo/40 cabeça, alcance 15m), Melee (3 golpes, 30 dano), Cellular Corrosion (prende inimigos, slow 25%, raio 8m, CD 8s, 5+80 dano), Venom Swing (SHIFT, CD 8s), Symbiotic Resilience (E, 100 + 120% vida perdida, CD 15s), Frenzied Arrival (F, 65 dano, raio 6m, CD 8s), Feast of the Abyss (Q, 50% vida ATUAL + 50, raio 7m, custo 2500).',
        'Alien Biology: 3 m/s andando, 9 m/s correndo na parede.',
        'Symbiotic Resilience: vida bônus escala inversamente com vida atual (100–879 total).',
        'Feast of the Abyss: dano proporcional à vida ATUAL do alvo.',
      ],
    },
    {
      id: 'official-venom',
      kind: 'official',
      title: 'Venom — Página Oficial do Herói',
      url: 'https://www.marvelrivals.com/heroes?id=fa12017d-641d-4734-b459-187c2a6cdeb1',
      published: '2026-10',
      confidence: 'alta',
      takeaways: [
        'Health 650 confirmado pela ficha oficial.',
        'Kit completo com valores de dano, cooldown e alcance.',
        'Team-Ups: Blood Leech (Blade) e Abyssal Flames (Phoenix).',
      ],
    },
    {
      id: 'marvelrivalsnet-venom',
      kind: 'database',
      title: 'Venom — MarvelRivals.net',
      url: 'https://marvel-rivals.net/character/venom',
      published: '2026-10',
      confidence: 'media',
      takeaways: [
        'Venom Swing CD 10s (divergência com wiki.gg que diz 8s).',
        'Stats e habilidades confirmados.',
      ],
    },
    {
      id: 'balance-s10',
      kind: 'guide',
      title: 'Marvel Rivals Season 10 Patch Notes — Insider Gaming',
      url: 'https://insider-gaming.com/marvel-rivals-season-10-patch-notes-buffs-nerfs',
      published: '2026-10',
      confidence: 'media',
      takeaways: [
        'Balance S10: ajustes de balanceamento da temporada.',
        'Venom não recebeu mudanças significativas no S10.',
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
        'Blood Leech (Blade, RMB): dreno de vida com Venom.',
        'Abyssal Flames (Phoenix, C): chamas abissais com Venom.',
        'Textos base e aprimorado traduzidos fielmente do bundle oficial.',
      ],
    },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 2, status: 'Completo' },
    { kind: 'database', label: 'Database', count: 2, status: 'Completo' },
    { kind: 'guide', label: 'Guia escrito', count: 1, status: 'Completo' },
    { kind: 'forum', label: 'Fórum', count: 0, status: 'Pendente' },
    { kind: 'video-transcript', label: 'Vídeo', count: 0, status: 'Pendente' },
  ],
}
