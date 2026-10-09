import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const whiteFox: HeroGuide = {
  id: 'white-fox',
  name: 'White Fox',
  aliases: ['Ami Han', 'Kumiho', 'Raposa Branca'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/white_fox.png'),
  bannerUrl: publicAsset('heroes/banners/white_fox.png'),
  selectionPortraitUrl: publicAsset('heroes/select/white_fox.png'),
  selectionHoverUrl: publicAsset('heroes/select/white_fox_champion.gif'),
  selectionHoverFit: { scale: 1.2, x: 0, y: 10 },
  theme: {
    primary: '#f0e6d3',
    primaryRgb: '240, 230, 211',
    secondary: '#c9a96e',
    secondaryRgb: '201, 169, 110',
    surface: '#0f0e0c',
    surfaceRgb: '15, 14, 12',
  },
  roles: ['strategist'],
  lastVerified: '2026-10-09',
  confidenceSummary:
    'White Fox é um Strategist de 275 de vida, o mais baixo da categoria, e o kit inteiro gira em torno de um único recurso: Spirit Tail. Os números de dano, cura, cooldown e alcance vêm da página oficial de habilidades e dos dois balance posts que tocaram o herói em 2026. A divergência mais importante registrada é a cooldown do Spirit Sanctuary: a wiki.gg traz 10 segundos, enquanto o balance post de 10 de julho de 2026 subiu de 12 para 15 segundos, e o guia segue o número do patch. A segunda divergência é a vida total da Kumiho Unleashed: a ficha oficial ainda mostra 900, mas o balance post de 10 de julho de 2026 aumentou para 1200, e o guia usa 1200. O raio do Spectral Surge também mudou: era 0,8 metros e o balance post de 12 de junho de 2026 reduziu para 0,6. Nenhuma taxa de vitória nem taxa de escolha foi registrada porque nenhuma fonte primária da temporada foi lida nesta sessão.',
  coreRead: [
    'Spirit Tail é o recurso que alimenta todo o kit: o LMB gera, o Spectral Surge gasta 1 carga por uso e a Fox Form Awakening drena continuamente. Ficar sem Spirit Tail é ficar sem kit.',
    'Spectral Surge não é só cura: a raposa espectral concede INVULNERABILIDADE de 0,4 segundos aos aliados que atravessa — use para salvar um aliado de ultimate inimiga.',
    'O Charm do Spectral Surge FORÇA o inimigo a andar na direção da White Fox. Contra um dive, isso puxa o inimigo para dentro do seu time, não para longe.',
    'Na Kumiho Form você NÃO recebe cura de ninguém. Ative a ultimate com cobertura do time, não como fuga.',
    'Spirit Sanctuary teleporta para um aliado e o escudo ainda cura 20 por segundo enquanto ativo — é mobilidade e sustento na mesma tecla.',
  ],
  teamUps: {
    summary:
      'Lucky Loan entrega à White Fox um Orbe da Vida da Gata Negra que vira a Nine-Tailed Aura (cura e Velocidade aos aliados, dano e Lentidão aos inimigos) e, com a Gata Negra, libera o Spirit Tail por um período. Psionic Fox remove o custo de Spirit Tail do Fox Form Awakening e garante a duração máxima, e com a Psylocke reduz drasticamente o cooldown. Lucky Loan é a opção de suporte em área; Psionic Fox é a de uptime do próprio recurso.',
    recommended: 'Psionic Fox',
    recommendedReason:
      'O gargalo da White Fox é o Spirit Tail, não a cura bruta: o Spectral Surge e o Fox Form Awakening dependem dele. Psionic Fox ataca exatamente esse gargalo — o Fox Form Awakening deixa de consumir Spirit Tail e já entra com a duração máxima, e com a Psylocke o cooldown despenca. Lucky Loan amplia o suporte em área, mas não resolve a limitação de recurso. Nenhuma taxa de vitória por dupla foi medida nesta sessão.',
    options: [
      {
        name: 'Lucky Loan',
        partner: 'Black Cat',
        partnerRole: 'Duelista',
        input: 'C',
        baseEffect:
          'A White Fox recebe um Orbe da Vida da Gata Negra. Ao usar, converte energia vital em Nine-Tailed Aura, que dispara em todas as direções, perseguindo automaticamente aliados e inimigos próximos: concede Velocidade e Cura aos aliados e fere e deixa lentos os inimigos.',
        enhancedEffect:
          'Ao fazer dupla com a Gata Negra, usar o Orbe ativa um estado em que a energia Spirit Tail deixa de ser consumida por um período, permitindo o uso livre do Spectral Surge e do Fox Form Awakening.',
        bestFor:
          'Suporte em área e pressão simultânea: a Nine-Tailed Aura cura e acelera o time enquanto atrasa os inimigos. O estado sem custo de Spirit Tail é o que a torna sustentável em fight longa.',
        easySetup:
          'O efeito base (o Orbe e a Nine-Tailed Aura) já funciona sozinho. Com a Gata Negra no time, o Orbe também libera o Spirit Tail por um período.',
        iconUrl: publicAsset('teamups/white-fox-lucky-loan-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/white-fox-lucky-loan-partner.png'),
      },
      {
        name: 'Psionic Fox',
        partner: 'Psylocke',
        partnerRole: 'Duelista',
        input: 'E',
        baseEffect:
          'Ativar o Fox Form Awakening deixa de consumir energia Spirit Tail e concede a duração máxima possível imediatamente ao usar.',
        enhancedEffect:
          'Ao fazer dupla com a Psylocke, o cooldown do Fox Form Awakening é drasticamente reduzido.',
        bestFor:
          'Maximizar o uptime da forma Awakened sem queimar o Spirit Tail: você entra na forma com duração cheia e sem custo, sobrando recurso para o Spectral Surge.',
        easySetup:
          'O efeito base já vale sem a Psylocke (duração máxima, sem custo de Spirit Tail). Com ela no time, o cooldown do Fox Form Awakening cai muito.',
        iconUrl: publicAsset('teamups/white-fox-psionic-fox-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/white-fox-psionic-fox-partner.png'),
      },
    ],
    sourceIds: ['official-teamups', 'official-abilities', 'balance-20260710'],
  },
  systems: [
    {
      name: 'Yeowoo Guseul + Spirit Tail',
      input: 'LMB',
      heading: 'O projétil que alimenta o kit inteiro',
      facts: [
        'Yeowoo Guseul lança uma Fox Marble que quica no terreno ou em heróis e depois persegue o herói mais próximo. Fere inimigos, cura aliados e restaura Spirit Tail. Velocidade do projétil 60 m/s, raio de dano e cura 3 metros, dano 65, cura 65, cooldown 6 segundos, distância máxima 35 metros, auto-cura 50.',
        'O balance da Season 10 aumentou a cura no acerto direto de 50 para 55 e no quique de 35 para 40. É o único patch recente que tocou o dano ou a cura do LMB, e a direção foi de buff.',
        'Spirit Tail é o recurso central: gerado pelo LMB, consumido pelo Spectral Surge (1 carga por 120 de uso) e drenado continuamente pela Fox Form Awakening. Ficar sem Spirit Tail é ficar sem metade do kit.',
      ],
      meter: [
        { label: 'Dano', value: '65' },
        { label: 'Cura', value: '65' },
        { label: 'Cooldown', value: '6s' },
        { label: 'Alcance', value: '35m' },
      ],
    },
    {
      name: 'Spectral Surge + Fox Form Awakening',
      input: 'RMB / E',
      heading: 'Invulnerabilidade, Charm e a forma que drena recurso',
      facts: [
        'Spectral Surge consome 1 Spirit Tail e envia uma raposa espectral adiante. Cura e concede INVULNERABILIDADE de 0,4 segundos aos aliados que atravessa. Fere e aplica Charm de 0,4 segundos em inimigos, forçando-os a andar na direção da White Fox. Raio de Charm e invulnerabilidade 0,6 metros (era 0,8, balance 12 de junho de 2026).',
        'Fox Form Awakening entra no estado Awakened, transforma as Spirit Tails em caudas físicas, drena Spirit Tail e cura aliados próximos. Cooldown 15 segundos. Cura no golpe 40 por acerto; campo ao redor 25 por segundo (S10: campo 35 para 40). Duração por caudas: 3 caudas 9 segundos, 2 caudas 8 segundos, 1 cauda 7 segundos.',
        'Tail Sweep no estado Awakened varre as caudas para frente e lança inimigos para cima. Cooldown 3 segundos, alcance 5 metros, 50 de dano. É a única ferramenta de CC do estado Awakened.',
      ],
      meter: [
        { label: 'Invulnerabilidade', value: '0,4s' },
        { label: 'Charm', value: '0,4s' },
        { label: 'Cura no golpe', value: '40' },
        { label: 'Campo', value: '40/s' },
      ],
    },
  ],
  roleGuides: {
    strategist: {
      key: 'strategist',
      label: 'Strategist',
      nickname: 'a Curandeira de Dive',
      health: '275',
      difficulty: 'Média',
      job: 'Curandeira de dive próximo que mistura invulnerabilidade, Charm e mobilidade por teleporte, com o recurso Spirit Tail governando tudo.',
      verdict:
        'White Fox é o Strategist de 275 de vida, o mais baixo da categoria, e o kit inteiro depende de Spirit Tail. Ela não fica atrás da linha: o Spectral Surge e o Spirit Sanctuary empurram ela para dentro do time, e a Fox Form Awakening transforma as caudas em arma de CC e cura. A curva de aprendizado é média: o kit é simples de entender, mas o recurso Spirit Tail exige disciplina — gastar sem recarregar é a forma mais rápida de perder o jogo.',
      playstyle: [
        'Recarregue Spirit Tail com o LMB antes de gastar. O Yeowoo Guseul tem cooldown de 6 segundos e gera recurso a cada acerto, então cycles de LMB seguidos de Spectral Surge são o ritmo natural do herói.',
        'Use Spectral Surge para salvar aliados de ultimate, não para curar dano contínuo. A invulnerabilidade de 0,4 segundos é o efeito mais valioso da habilidade.',
        'Ative Fox Form Awakening quando o time estiver junto e com cobertura. A forma drena Spirit Tail e sem aliados para curar você fica sem recurso e sem propósito.',
        'Na Kumiho Form, você não recebe cura de ninguém. Use o Ninefold Slam para curar atacando, e não espere o time te curar.',
      ],
      priorityKicker: 'Onde o time trava',
      priorityTitle: 'Spirit Tail é o recurso, não o dano',
      priorityDescription:
        'O ciclo de Spirit Tail é a decisão mais importante da partida. O LMB gera, o Spectral Surge gasta 1 carga por 120 de uso, e a Fox Form Awakening drena continuamente. Se você gasta sem recarregar, fica sem invulnerabilidade, sem Charm e sem forma Awakenen. Se você recarrega sem gasta, fica sem impacto. O equilíbrio é o jogo.',
      upgradePlan: [
        {
          rank: 3,
          ability: 'Yeowoo Guseul',
          label: 'Recarga do LMB',
          baseEffect: 'Cooldown de 6 segundos por projétil.',
          upgradeEffect: 'Reduz o cooldown do Yeowoo Guseul.',
          why: 'É a habilidade que gera Spirit Tail, então reduzir o cooldown é aumentar a frequência de recarga do recurso.',
          swapWhen: 'Troque quando o time precisar de mais cura contínua e menos burst de invulnerabilidade.',
          sourceIds: ['official-abilities', 'balance-20260710'],
        },
        {
          rank: 3,
          spellNumber: 2,
          ability: 'Spectral Surge',
          label: 'Invulnerabilidade e Charm',
          baseEffect: 'Invulnerabilidade de 0,4 segundos e Charm de 0,4 segundos por aliado atravessado.',
          upgradeEffect: 'Aumenta a duração da invulnerabilidade ou do Charm.',
          why: 'É a única habilidade que concede invulnerabilidade no kit, e o Charm é a única ferramenta de controle de multidão.',
          swapWhen: 'Troque quando o time já tem CC suficiente e o gargalo for dano.',
          sourceIds: ['official-abilities', 'balance-20260612'],
        },
        {
          rank: 3,
          spellNumber: 2,
          ability: 'Spirit Sanctuary',
          label: 'Cura contínua do escudo',
          baseEffect: 'Escudo com 200 de vida que cura 50 instantaneamente e 20 por segundo enquanto ativo.',
          upgradeEffect: 'Aumenta a cura instantânea ou a cura contínua.',
          why: 'O escudo é a única fonte de cura contínua que não gasta Spirit Tail, então melhorar a cura aumenta o sustain sem tocar no recurso.',
          swapWhen: 'Troque quando o time precisar de mobilidade e não de sustain.',
          sourceIds: ['official-abilities', 'balance-20260710'],
        },
        {
          rank: 3,
          spellNumber: 2,
          ability: 'Kumiho Unleashed',
          label: 'Vida total da ultimate',
          baseEffect: '1200 de vida ao ativar.',
          upgradeEffect: 'Aumenta a vida total da Kumiho Form.',
          why: 'A ultimate é a única forma de cura contínua em área que não depende de Spirit Tail, mas a White Fox não recebe cura de ninguém nessa forma.',
          swapWhen: 'Troque quando o time precisar de dano e não de cura em área.',
          sourceIds: ['official-abilities', 'balance-20260710'],
        },
      ],
      adaptations: [
        'Se o time tem dois Strategists, a White Fox perde valor porque o Spirit Sanctuary e a Fox Form Awakening competem pelas mesmas curas. Nesse caso, priorize o Spectral Surge e o Lucky Loan para pressão.',
        'Se o inimigo tem muito burst, a invulnerabilidade do Spectral Surge ganha valor porque a White Fox morre em dois tiros. Guarde a habilidade para o foco, não para dano contínuo.',
        'Se o mapa é aberto e sem cobertura, o Spirit Sanctuary perde valor porque não há aliado para teleporte. Fique perto do Vanguard e use o LMB para curar à distância.',
        'Se você está contra uma ult que mata em área, a Kumiho Unleashed é arriscada porque você não recebe cura. Ative com Blessed by the Nine em um aliado para garantir Unstoppable.',
      ],
      ultimates: [
        {
          stance: 'Kumiho Unleashed',
          name: 'Kumiho Unleashed',
          bestUse:
            'Quando o time está junto e com cobertura, não quando você está fugindo. Na Kumiho Form você não recebe cura de ninguém, então ativar sozinho é uma sentença de morte.',
          execution:
            'Ative quando o time estiver agrupado e o inimigo estiver avançando. Use o Ninefold Slam para curar atacando — o golpe no chão fere inimigos e cura a você e a aliados próximos. Escolha um aliado com Blessed by the Nine para conceder cura contínua, Unstoppable e Lifesteal por 2 segundos de cooldown durante a ult.',
          upgradeValue:
            'A melhoria de vida total de 900 para 1200 é o que torna a ultimate viável: sem isso, a White Fox morre antes de curar o time. A cura contínua em área é a única fonte de sustain que não depende de Spirit Tail.',
        },
      ],
      dashGuide: {
        ability: 'Spirit Sanctuary',
        shortRule: 'Teleporta para um aliado a até 30 metros, cura 50 instantaneamente e gera um escudo que cura 20 por segundo.',
        mechanics: [
          'O teleporte é instantâneo e escolhe o aliado mais próximo do crosshair. A distância máxima é 30 metros.',
          'O escudo tem 200 de vida e dura no máximo 5 segundos. Enquanto ativo, cura 20 por segundo a aliados no raio de 5 metros, incluindo a White Fox.',
          'O cooldown é de 15 segundos (era 12, balance 10 de julho de 2026). A cura instantânea é 50 (era 70).',
        ],
        drills: [
          'Pratique teleportar para o aliado mais ferido, não o mais próximo. O crosshair no aliado certo decide quem vive.',
          'Use o Spirit Sanctuary para fugir de um dive, não para iniciar. O escudo cura 20 por segundo, então o tempo sob escudo é cura gratuita.',
        ],
      },
      patterns: [
        {
          title: 'Ciclo de Spirit Tail',
          steps: [
            'Comece o LMB para gerar Spirit Tail antes de qualquer outra ação.',
            'Use Spectral Surge para invulnerabilidade ou Charm, não para cura.',
            'Recarregue com o LMB enquanto o Spectral Surge está em cooldown.',
            'Ative Fox Form Awakening quando o time estiver junto e com cobertura.',
          ],
        },
        {
          title: 'Salvamento com Spectral Surge',
          steps: [
            'Identifique a ultimate inimiga que vai matar um aliado.',
            'Ative Spectral Surge antes do impacto, atravessando o aliado.',
            'A invulnerabilidade de 0,4 segundos anula a ultimate inimiga.',
            'Recarregue com o LMB para o próximo salvamento.',
          ],
        },
        {
          title: 'Kumiho Form com cobertura',
          steps: [
            'Ative Kumiho Unleashed quando o time estiver agrupado.',
            'Use Blessed by the Nine em um aliado para Unstoppable e Lifesteal.',
            'Use Ninefold Slam para curar atacando, não espere cura externa.',
            'Saia da forma quando o Spirit Tail acabar ou o time se dispersar.',
          ],
        },
      ],
      mistakes: [
        'Gastar Spectral Surge para cura quando a invulnerabilidade é o valor real. A cura do Yeowoo Guseul é mais eficiente para dano contínuo.',
        'Ativar Fox Form Awakening sozinho no meio do mapa. A forma drena Spirit Tail e sem aliados para cura você fica sem recurso e sem propósito.',
        'Ativar Kumiho Unleashed fugindo. Na forma você não recebe cura de ninguém, então ativar sem cobertura é morrer.',
        'Esperar cura externa na Kumiho Form. O Ninefold Slam cura atacando, então na ult você cura causando dano.',
        'Ignorar o recurso Spirit Tail e gastar tudo no início da fight. O LMB tem cooldown de 6 segundos, então o ciclo de recarga é mais importante que o burst inicial.',
      ],
      evidence: [
        'Página oficial de habilidades (20 de março de 2026): Yeowoo Guseul com 65 de dano, 65 de cura, cooldown de 6 segundos, alcance de 35 metros. Spectral Surge com raio de 0,6 metros, Charm de 0,4 segundos, invulnerabilidade de 0,4 segundos. Fox Form Awakening com cooldown de 15 segundos, duração de 9, 8 ou 7 segundos por número de caudas. Spirit Sanctuary com cooldown de 15 segundos, cura instantânea de 50, escudo de 200 de vida, cura contínua de 20 por segundo. Kumiho Unleashed com 1200 de vida.',
        'Balance post de 10 de julho de 2026: Spirit Sanctuary cooldown subiu de 12 para 15 segundos, cura instantânea caiu de 70 para 50, vida total da Kumiho Unleashed subiu de 900 para 1200.',
        'Balance post de 12 de junho de 2026: raio do Spectral Surge reduzido de 0,8 para 0,6 metros.',
        'Balance da Season 10: cura do Yeowoo Guseul no acerto direto subiu de 50 para 55, no quique de 35 para 40. Campo da Fox Form Awakening ao redor subiu de 35 para 40 por segundo.',
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
        'Fonte canônica dos dois Team-Ups da temporada e dos textos de efeito base e aprimorado.',
        'Os textos do painel de Team-Up são tradução fiel deste bundle.',
      ],
    },
    {
      id: 'official-abilities',
      kind: 'official',
      title: 'Marvel Rivals — White Fox Habilidades Oficiais',
      url: 'https://www.marvelrivals.com/20260320/41360_1292187.html',
      published: '2026-03-20',
      confidence: 'alta',
      takeaways: [
        'Yeowoo Guseul: 65 de dano, 65 de cura, cooldown 6s, alcance 35m, velocidade 60 m/s, raio 3m, auto-cura 50.',
        'Spectral Surge: consome 1 Spirit Tail, raio 0,6m (era 0,8), Charm 0,4s, invulnerabilidade 0,4s.',
        'Fox Form Awakening: cooldown 15s, cura no golpe 40, campo 25/s (S10: 40/s), duração 9s/8s/7s por caudas.',
        'Spirit Sanctuary: cooldown 15s (era 12), cura instantânea 50 (era 70), escudo 200 vida, cura contínua 20/s, alcance 30m, raio 5m.',
        'Kumiho Unleashed: 1200 vida (era 900), cura contínua em área, não recebe cura externa.',
        'Blessed by the Nine: cura contínua, Unstoppable, Lifesteal, cooldown 2s durante a ult.',
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
        'Spirit Sanctuary: cooldown subiu de 12 para 15 segundos.',
        'Spirit Sanctuary: cura instantânea caiu de 70 para 50.',
        'Kumiho Unleashed: vida total subiu de 900 para 1200.',
        'Novo efeito no Spirit Sanctuary: escudo ativo dá 20/s de cura contínua a aliados no raio.',
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
        'Spectral Surge: raio de Charm e invulnerabilidade reduzido de 0,8 para 0,6 metros.',
      ],
    },
    {
      id: 's10-patch-notes',
      kind: 'guide',
      title: 'Marvel Rivals Season 10 Patch Notes — Insider Gaming',
      url: 'https://insider-gaming.com/marvel-rivals-season-10-patch-notes-buffs-nerfs',
      published: '2026-09-11',
      confidence: 'media',
      takeaways: [
        'Yeowoo Guseul: cura no acerto direto subiu de 50 para 55, no quique de 35 para 40.',
        'Fox Form Awakening: campo ao redor subiu de 35 para 40 por segundo.',
      ],
    },
    {
      id: 'marvelrivals-gg',
      kind: 'guide',
      title: 'White Fox Guide — marvelrivals.gg',
      url: 'https://marvelrivals.gg/white-fox',
      published: '2026-08-15',
      confidence: 'media',
      takeaways: [
        'Guia tático que confirma o ciclo de Spirit Tail como o núcleo do kit.',
        'Recomenda Spectral Surge para invulnerabilidade contra ultimate inimiga.',
        'Confirma que Charm puxa o inimigo para o time, não para longe.',
      ],
    },
    {
      id: 'boosting-ground',
      kind: 'guide',
      title: 'White Fox Abilities & Team Comps — Boosting Ground',
      url: 'https://boosting-ground.com/marvel-rivals/guides/hero-guides/white-fox-abilities-team-comps',
      published: '2026-07-20',
      confidence: 'media',
      takeaways: [
        'Guia de composições que recomenda Psionic Fox para sustentabilidade.',
        'Confirma que Kumiho Form sem cobertura é arriscada porque não recebe cura externa.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Oficiais (habilidades, balance posts e Team-Up)',
      count: 4,
      status: 'Página oficial de habilidades e os dois balance posts que tocaram a White Fox em 2026, lidos na íntegra.',
    },
    {
      kind: 'database',
      label: 'Bases de dados',
      count: 0,
      status: 'Nenhuma base de dados primária lida nesta sessão.',
    },
    {
      kind: 'guide',
      label: 'Guias escritos',
      count: 3,
      status: 'marvelrivals.gg e Boosting Ground para tática e composições, e Insider Gaming para o balance da Season 10. Nenhum número vem de guia escrito.',
    },
    {
      kind: 'forum',
      label: 'Fórum e comunidade',
      count: 0,
      status: 'Nenhum fórum lido nesta sessão.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeo',
      count: 0,
      status: 'Nenhum vídeo usado nesta sessão.',
    },
  ],
}