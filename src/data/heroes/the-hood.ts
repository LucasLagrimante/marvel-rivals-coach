import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const theHood: HeroGuide = {
  id: 'the-hood',
  name: 'The Hood',
  aliases: ['Parker Robbins', 'Capuz', 'Senhor do Crime', 'Half-Demon'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/the_hood.png'),
  bannerUrl: publicAsset('heroes/banners/the_hood.png'),
  selectionPortraitUrl: publicAsset('heroes/select/the_hood.png'),
  selectionHoverUrl: publicAsset('heroes/select/the_hood_champion.gif'),
  selectionHoverFit: { scale: 1.0, x: 0, y: 0 },
  theme: {
    primary: '#8b1a1a',
    primaryRgb: '139, 26, 26',
    secondary: '#c0392b',
    secondaryRgb: '192, 57, 43',
    surface: '#0d0505',
    surfaceRgb: '13, 5, 5',
  },
  roles: ['vanguard'],
  lastVerified: '2026-11-02',
  confidenceSummary:
    'Role, HP e habilidades conferidos na página oficial; o balance post de 11/09/2026 prevalece sobre dados pré-patch ainda exibidos por fontes secundárias. O patch oficial Version 20261029 (29/10) não trouxe mudança de gameplay para The Hood. Team-Ups e teclas conferidos no bundle oficial vivo em 02/11/2026; a ficha individual mantém o rótulo legado New Moon\'s Shadow. Batru (dados até 31/10) favorece Chaos Collision com Scarlet Witch, mas mede a dupla inteira, não causalidade do Team-Up. Mantle bloqueia ataques, sem imunidade completa a crowd-control.',
  coreRead: [
    'Demonic Energy é o recurso central: cada acerto de Accursed Pistols gera +2 de energia, e ao atingir 100 de energia você entra automaticamente no Half-Demon State com rifles de munição infinita e lifesteal. Nunca entre no combate com energia zerada.',
    'Mantle of Oblivion ([key:RMB]) é a sobrevivência: barreira esférica que bloqueia ataques por 1s, mas não concede imunidade completa a crowd-control. Com energia acima de 50%, o raio expande de 2m para 3m. Guarde para burst inimigo ou para negar ataques decisivos.',
    'Demon of the End ([key:Q]) é o transformador: 6 tiros perfurantes que ignoram barreiras; cada disparo concede até 50 de HP bônus, com conversão de dano de 50% e limite de 200. Você restaura toda a vida ao terminar, mas não pode se mover — posicione-se antes de ativar.',
  ],
  teamUps: {
    summary:
      'Chaos Collision é o padrão: no Batru consultado em 02/11, a dupla com Scarlet Witch marcou 55,16% em 36.479 partidas, contra 51,08% em 20.114 com Moon Knight. A métrica é da dupla, não prova causalidade do Team-Up. No Moon\'s Shadow segue situacional quando a barreira antiprojetil e o ricochete são prioridade.',
    recommended: 'Chaos Collision',
    recommendedReason:
      'Chaos Collision aplica reduções cumulativas de dano e cura aos inimigos e permite teleportar para o centro da zona; com Scarlet Witch, o aprimoramento acrescenta uma onda que lança inimigos na sua direção. Batru mede 55,16% para essa dupla contra 51,08% com Moon Knight, sem isolar o efeito do Team-Up. Por isso, fica como padrão, não como regra universal.',
    options: [
      {
        name: 'Chaos Collision',
        partner: 'Scarlet Witch',
        partnerRole: 'Duelista',
        input: 'C',
        baseEffect:
          'Ganhe uma nova habilidade. Crie uma zona arcana que causa dano contínuo aos inimigos e aplica redução de dano e cura acumulativa. Reative para teleportar ao centro da zona.',
        enhancedEffect:
          'Ao fazer dupla com Scarlet Witch, após o teleporte, libere uma onda de choque mágica, causando dano único aos inimigos próximos enquanto os lança em direção a The Hood.',
        bestFor:
          'Negação de área, pressão em objetivos e reposicionamento. A zona de dano contínuo com redução de cura é forte em fights de ponto.',
        easySetup:
          'Scarlet Witch aliada. Sem ela a zona ainda causa dano e aplica redução — o teleporte é o diferencial.',
        iconUrl: publicAsset('teamups/the-hood-chaos-collision-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/the-hood-chaos-collision-partner.png'),
      },
      {
        name: 'No Moon\'s Shadow',
        partner: 'Moon Knight',
        partnerRole: 'Duelista',
        input: 'E',
        baseEffect:
          'Aprimora Abyssal Veil em uma Lunar Barrier que bloqueia projéteis. Ao quebrar, detona, causando dano aos inimigos e aplicando redução de dano e cura. Inimigos que atravessam tomam dano e ficam brevemente cegos.',
        enhancedEffect:
          'Ao fazer dupla com Moon Knight, a Lunar Barrier passa de 200 para 300 HP; ataques de The Hood que a atravessam ricocheteiam, com alcance de detecção de 6m conforme o balance post de 11/09/2026.',
        bestFor:
          'Defesa de chokepoints e contra composições de projétil: a Lunar Barrier tem 200 HP base e 300 HP com Moon Knight; o aprimoramento também dá ricochete com detecção de 6m.',
        easySetup:
          'Moon Knight aliado. Sem ele a barreira ainda bloqueia projéteis e detona — o ricochete é o diferencial.',
        iconUrl: publicAsset('teamups/the-hood-no-moons-shadow-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/the-hood-no-moons-shadow-partner.png'),
      },
    ],
    sourceIds: ['official-teamups', 'batru-the-hood', 'marvelrivalsgg-the-hood'],
  },
  systems: [
    {
      name: 'Demonic Energy',
      input: 'Passiva',
      facts: [
        'Recurso central do kit: 0 a 100 de energia. Ao atingir 100, The Hood entra automaticamente no Half-Demon State.',
        'Ganho de energia: +2 por acerto de Accursed Pistols, +2.75 por acerto através do Abyssal Veil, +20 ao ativar Void Walk, 3,75% do dano absorvido por Mantle of Oblivion.',
        'Com 50%+ de energia: Accursed Pistols ganham attack speed aumentado (intervalo 0.2s → 0.15s) e Mantle of Oblivion expande de 2m para 3m de raio.',
        'No Half-Demon State: armas se transformam em rifles demoníacos com munição infinita, 3,5 de dano por projétil, intervalo 0.05s, 10% de lifesteal e até 100 de HP bônus.',
      ],
    },
    {
      name: 'Abyssal Veil',
      input: 'E',
      facts: [
        'Esfera de magia negra que gera um Veil de 8m × 3.5m ao pousar. Duração de 6s, CD de 10s.',
        'Inimigos que atravessam o Veil tomam 60 de dano e ficam cegos por 1s.',
        'Projéteis inimigos que atravessam o Veil têm dano e cura reduzidos em 20%.',
        'Accursed Pistols que atravessam o Veil ganham +2.75 de energia por acerto (vs +2 normal). As balas de Leaded Transformation que passam pelo Veil recebem lifesteal aumentado; a ficha oficial não esclarece se o valor é aditivo ao 10% listado para a habilidade.',
      ],
    },
  ],
  roleGuides: {
    vanguard: {
      key: 'vanguard',
      label: 'Vanguarda',
      nickname: 'Senhor do Crime',
      health: '550 HP',
      difficulty: 'Média (3/5): exige gestão de Demonic Energy, timing de Mantle de Oblivion e posicionamento de Abyssal Veil',
      job: 'Acumule Demonic Energy com segurança, entre no combate com Void Walk, converta energia em Half-Demon State e sustente a pressão com lifesteal e HP bônus — crie espaço para seus Duelistas eliminarem alvos.',
      verdict:
        'Escolha The Hood quando o time precisa de um Vanguard versátil com mobilidade, sustain e dano a média distância. Funciona bem em composições com Scarlet Witch ou Moon Knight para os team-ups. Evite contra dive agressivo de melee sem Mantle de Oblivion disponível.',
      playstyle: [
        'The Hood opera em duas fases: acúmulo e explosão. Na fase de acúmulo, mantenha distância de 10–15m e troque tiros com Accursed Pistols para encher a Demonic Energy. Use Abyssal Veil para acelerar o ganho de energia e cegar inimigos que avançam.',
        'Na fase de explosão, ative Void Walk para entrar no combate com +20 de energia e boost de movimento. Ao atingir 100 de energia, entre no Half-Demon State com rifles de munição infinita e lifesteal. Posicione-se para maximizar o lifesteal e o HP bônus.',
        'Mantle of Oblivion é a sobrevivência: guarde para burst inimigo ou para negar ultimates. Com energia acima de 50%, o raio expande de 2m para 3m — use para proteger aliados próximos também.',
        'Demon of the End é o transformador: 6 tiros perfurantes que ignoram barreiras, concedem HP bônus a aliados próximos e restauram toda a sua vida ao terminar. Não pode se mover durante o uso — posicione-se antes de ativar.',
      ],
      priorityKicker: 'Sequência',
      priorityTitle: 'Prioridade de habilidades',
      priorityDescription:
        'The Hood não tem upgrades numerados — a prioridade aqui é a ordem de uso de cada habilidade dentro de um engajamento para maximizar o ciclo de energia e o burst do Half-Demon State.',
      upgradePlan: [
        {
          rank: 1,
          input: 'E',
          ability: 'Abyssal Veil',
          label: 'Zona de dano + cegueira + boost de energia',
          why: 'CD de 10s. Cria um Veil de 8m × 3.5m por 6s que causa 60 de dano e cega por 1s inimigos que atravessam. Accursed Pistols que atravessam ganham +2.75 de energia por acerto (vs +2 normal) — acelera o acúmulo de Demonic Energy significativamente.',
          swapWhen: 'Se o Veil está em CD e você precisa de energia, use Void Walk (+20 de energia) ou Mantle de Oblivion (3,75% do dano absorvido vira energia).',
          sourceIds: ['official-the-hood', 'balance-20260911-the-hood', 'mobalytics-the-hood'],
        },
        {
          rank: 2,
          input: 'Shift',
          ability: 'Void Walk',
          label: 'Mobilidade + entrada no combate + energia',
          why: 'CD de 15s. Voo livre por 1.2s com boost de movimento de 40% decaindo. Ao reaparecer, causa 40 de dano em área de 4.5m e concede +20 de Demonic Energy instantaneamente. Use para entrar no combate ou escapar de situações difíceis.',
          swapWhen: 'Se Void Walk está em CD e você precisa entrar no combate, use Abyssal Veil para cegar o caminho e avance com Accursed Pistols.',
          sourceIds: ['official-the-hood', 'balance-20260911-the-hood', 'mobalytics-the-hood'],
        },
        {
          rank: 3,
          input: 'RMB',
          ability: 'Mantle of Oblivion',
          label: 'Barreira de sobrevivência + conversão de dano em energia',
          why: 'CD de 12s. Barreira esférica que bloqueia ataques por 1s, mas não concede imunidade completa a crowd-control. Com energia acima de 50%, o raio expande de 2m para 3m. Cada ponto de dano absorvido converte 3,75% em Demonic Energy. Guarde para burst inimigo ou para negar ataques decisivos.',
          swapWhen: 'Se Mantle está em CD e você precisa de sobrevivência, use Void Walk para escapar ou posicione-se atrás de Abyssal Veil para reduzir em 20% o dano dos projéteis que o atravessam.',
          sourceIds: ['official-the-hood', 'balance-20260911-the-hood', 'mobalytics-the-hood'],
        },
        {
          rank: 4,
          input: 'LMB',
          ability: 'Accursed Pistols / Leaded Transformation',
          label: 'Dano principal + acúmulo de energia',
          why: 'Accursed Pistols: 26 de dano por projétil, hitscan, 40 munições, crítico sim, falloff 8m→55% em 20m. Com 50%+ de energia: 21 de dano, intervalo 0.15s. Leaded Transformation (Half-Demon State): 3,5 de dano por projétil, munição infinita, intervalo 0.05s, 10% lifesteal e até 100 HP bônus.',
          swapWhen: 'No Half-Demon State, recarregue Accursed Pistols quando a munição acabar. Fora do Half-Demon State, foque em acertar tiros para acumular energia.',
          sourceIds: ['official-the-hood', 'balance-20260911-the-hood', 'mobalytics-the-hood'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Demon of the End',
          label: 'Ultimate transformador — 6 tiros perfurantes',
          why: 'Custo de 3400 de energia. 6 tiros que perfuram inimigos e barreiras; cada disparo concede até 50 HP bônus, com conversão de dano de 50% e limite de 200. Você restaura toda a vida ao terminar, mas não pode se mover. 1º–5º tiros: 90 + 10% HP máx.; 6º tiro: 140 + 15% HP máx. HP máximo no Full Demon State: 1000.',
          swapWhen: 'Ative quando estiver em posição segura (não pode se mover) e quando houver múltiplos inimigos agrupados. Combine com crowd-control de aliados para maximizar o dano.',
          sourceIds: ['official-the-hood', 'balance-20260911-the-hood', 'mobalytics-the-hood'],
        },
      ],
      adaptations: [
        'Contra alvos aéreos (Iron Man, Storm, Ultron): Accursed Pistols são hitscan — The Hood os acerta com facilidade enquanto duelistas de projétil erram. Priorize manter energia alta e usar Void Walk para subir em plataformas.',
        'Contra dive de melee agressivo (Wolverine, Blade, Black Panther): posicione Abyssal Veil na rota de entrada deles antes de avançar. A cegueira de 1s abre a janela para burst. Se eles entrarem mesmo assim, use Mantle de Oblivion para bloquear o dano inicial e Void Walk para escapar.',
        'Contra composições de projétil (Hawkeye, Iron Man, Storm): Abyssal Veil reduz em 20% o dano e a cura dos projéteis inimigos que o atravessam. Posicione o Veil entre você e o time inimigo para criar uma zona de segurança.',
        'Com Scarlet Witch aliada: ative Chaos Collision para criar zona de dano contínuo com redução de cura. O teleporte permite reposicionamento rápido em fights de ponto.',
        'Com Moon Knight aliado: ative No Moon\'s Shadow para criar Lunar Barrier de 300 de vida que bloqueia projéteis. A barreira detona ao quebrar, causando dano em área.',
      ],
      ultimates: [
        {
          stance: 'Ultimate única',
          name: 'Demon of the End',
          bestUse: 'Contra 3+ inimigos agrupados em objetivo (ponto ou payload), ou para finalizar briga em desadvantagem numérica. Os 6 tiros perfurantes ignoram barreiras e concedem HP bônus a aliados próximos.',
          execution: 'Ative com [key:Q] e dispare os 6 tiros nos inimigos. 1º-5º tiros: 90 + 10% HP máx; 6º tiro: 140 + 15% HP máx. Não pode se mover durante o uso — posicione-se antes de ativar. Ao terminar, toda a vida é restaurada. Se cair a 0 HP durante o Full Demon State, você morre.',
          upgradeValue: 'O Full Demon State concede 1000 de HP máximo. Cada disparo converte 50% do dano em Bonus Health (50 por disparo; máximo de 200), também concedido a aliados em 8m. O custo de 3400 de energia é alto — ative em posição segura e contra alvos agrupados.',
        },
      ],
      dashGuide: {
        ability: 'Void Walk → Half-Demon State → Accursed Pistols → Mantle de Oblivion',
        shortRule: 'Void Walk concede +20 de energia instantaneamente — use para entrar no combate e acelerar o acúmulo de Demonic Energy.',
        mechanics: [
          'Void Walk ([key:Shift]) tem CD de 15s e duração de 1.2s. Boost de movimento de 40% decaindo ao longo de 2s após o reaparecimento. Explosão ao reaparecer: 4.5m de raio, 40 de dano.',
          'Ao atingir 100 de Demonic Energy, The Hood entra automaticamente no Half-Demon State. As armas se transformam em rifles demoníacos com munição infinita, 3,5 de dano por projétil, intervalo 0.05s, 10% de lifesteal e até 100 de HP bônus.',
          'Accursed Pistols têm 40 de munição e falloff de 8m→55% em 20m. Com 50%+ de energia, o intervalo diminui de 0.2s para 0.15s. O spread atinge 0.5m após 10 tiros consecutivos (a 10m).',
          'Mantle de Oblivion ([key:RMB]) tem CD de 12s e duração de 1s. Com energia acima de 50%, o raio expande de 2m para 3m. Cada ponto de dano absorvido converte 3,75% em Demonic Energy.',
        ],
        drills: [
          'Treino 1: acumule 100 de Demonic Energy no modo prática (dispare no dummy com Accursed Pistols e use Abyssal Veil para acelerar). Meça o tempo para atingir 100 de energia. Ative Void Walk para ganhar +20 instantâneo.',
          'Treino 2: posicione Abyssal Veil a 10m de um dummy e dispare através dele. Confirme que o ganho de energia por acerto é +2.75 (vs +2 normal). Desenvolva o hábito de posicionar o Veil antes de engajar.',
          'Treino 3: no modo prática com um aliado, treine o timing de Mantle de Oblivion. Peça para o aliado disparar em você e ative a barreira no momento do impacto. Confirme que o dano é bloqueado e a energia é convertida.',
          'Treino 4: ative Void Walk, entre no Half-Demon State e dispare os rifles demoníacos no dummy. Confirme o lifesteal de 10% e o HP bônus de +100. Meça o tempo para esvaziar a energia e voltar ao estado normal.',
        ],
      },
      patterns: [
        {
          title: 'Ciclo de acúmulo e explosão',
          steps: [
            'Mantenha distância de 10–15m e troque tiros com Accursed Pistols para acumular Demonic Energy. Use Abyssal Veil para acelerar o ganho (+2.75 por acerto através do Veil).',
            'Ao atingir 50%+ de energia, o attack speed de Accursed Pistols aumenta (intervalo 0.2s → 0.15s) e Mantle de Oblivion expande (2m → 3m). Aproveite para pressionar mais agressivamente.',
            'Ao atingir 100 de energia, entre no Half-Demon State com rifles de munição infinita e lifesteal. Use Void Walk para entrar no combate com +20 de energia e boost de movimento.',
            'No Half-Demon State, posicione-se para maximizar o lifesteal e o HP bônus. Use Mantle de Oblivion para bloquear burst inimigo e converter dano em energia.',
          ],
        },
        {
          title: 'Defesa de objetivo com Abyssal Veil',
          steps: [
            'Antes da briga no objetivo, posicione Abyssal Veil ([key:E]) no centro do ponto ou na saída do chokepoint. Aguarde o Veil ficar ativo (6s de duração).',
            'Quando inimigos avançarem, dispare Accursed Pistols através do Veil para ganhar +2.75 de energia por acerto; projéteis inimigos que atravessam o campo têm dano e cura reduzidos em 20%.',
            'Se inimigos atravessarem o Veil, eles tomam 60 de dano e ficam cegos por 1s. Aproveite a janela para burst com Leaded Transformation (se no Half-Demon State) ou Accursed Pistols.',
            'Use Mantle de Oblivion ([key:RMB]) para bloquear burst inimigo ou negar ultimates. Com energia acima de 50%, o raio de 3m protege aliados próximos também.',
          ],
        },
        {
          title: 'Resposta a dive de melee',
          steps: [
            'Ao detectar dive se aproximando (Wolverine, Black Panther, Blade), posicione Abyssal Veil ([key:E]) imediatamente no caminho de entrada — não espere o contato.',
            'Ative Void Walk ([key:Shift]) perpendicular ao avanço do inimigo (dash lateral, não de recuo) para sair da linha de ataque e ganhar +20 de energia.',
            'Se o inimigo atravessou o Veil, ele está cego por 1s — aproveite para burst com Accursed Pistols ou Leaded Transformation.',
            'Se o inimigo continuou avançando após a cegueira, use Mantle de Oblivion ([key:RMB]) para bloquear o dano inicial e converter em energia. Depois use Void Walk para escapar se necessário.',
          ],
        },
      ],
      mistakes: [
        'Entrar no combate com Demonic Energy zerada: sem energia, Accursed Pistols têm attack speed reduzido e Mantle de Oblivion tem raio menor. Sempre acumule energia antes de engajar.',
        'Usar Mantle de Oblivion cedo demais: a barreira dura apenas 1s e tem CD de 12s. Guarde para burst inimigo ou para negar ataques decisivos — usar em dano comum desperdiça a janela de bloqueio.',
        'Ativar Demon of the End em posição ruim: durante o Full Demon State, The Hood não pode se mover. Ativar sem cobertura ou cercado por inimigos resulta em morte rápida. Sempre posicione-se antes de ativar.',
        'Ignorar Abyssal Veil: o Veil é a principal fonte de acúmulo de energia (+2.75 por acerto) e controle (cegueira de 1s). Não usar o Veil significa acúmulo de energia mais lento e menos controle de área.',
      ],
      evidence: ['official-the-hood', 'balance-20260911-the-hood', 'official-patch-20261029', 'mobalytics-the-hood', 'batru-the-hood', 'marvelrivalsgg-the-hood', 'official-teamups'],
      abilityLoop: [
        { ability: 'Abyssal Veil', input: 'E' },
        { ability: 'Void Walk', input: 'Shift' },
        { ability: 'Accursed Pistols', input: 'LMB' },
        { ability: 'Mantle of Oblivion', input: 'RMB' },
        { ability: 'Demon of the End', input: 'Q' },
      ],
    },
  },
  sources: [
    {
      id: 'metabot-the-hood',
      kind: 'database',
      title: 'The Hood — MetaBot.gg',
      url: 'https://metabot.gg/en/marvelrivals/hero/the-hood/overview',
      published: '2026-10 (snapshot consultado em 2026-11-02)',
      confidence: 'em disputa',
      takeaways: [
        'A tabela de habilidades ainda exibe valores anteriores ao balance oficial de 11/09/2026 para Mantle of Oblivion, Abyssal Veil, Demon of the End e Leaded Transformation; esses números não são usados como atuais.',
        'O snapshot estatístico de outubro (54,9% de win rate, 0,2% de pick, 4,27 KDA, #2 entre Vanguards) não informa janela nem amostra; mantido apenas como histórico, sem orientar a recomendação.',
        'A página mantém o nome legado New Moon\'s Shadow; a opção atual é No Moon\'s Shadow segundo o bundle oficial vivo.',
      ],
    },
    {
      id: 'marvelrivalsgg-the-hood',
      kind: 'guide',
      title: 'Marvel Rivals The Hood Guide — MarvelRivals.gg',
      url: 'https://marvelrivals.gg/the-hood',
      published: '2026-08',
      confidence: 'em disputa',
      takeaways: [
        'Guia de agosto/2026 destaca manter pressão em média distância, acumular Demonic Energy e usar Abyssal Veil para acelerar o recurso; esses princípios táticos foram preservados.',
        'Os valores numéricos e o nome legado New Moon\'s Shadow são anteriores ao balance de 11/09/2026 e não são usados como dados atuais.',
        'A afirmação de que Mantle of Oblivion bloqueia crowd-control foi corrigida: Mobalytics ressalta que a habilidade não concede imunidade completa a CC.',
      ],
    },
    {
      id: 'official-teamups',
      kind: 'official',
      title: 'Marvel Rivals — Team-Up Oficial',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      published: 'consulta em 2026-11-02',
      confidence: 'alta',
      takeaways: [
        'Bundle oficial vivo: CHAOS COLLISION (Scarlet Witch, [key:C]) e NO MOON\'S SHADOW (Moon Knight, [key:E]); nomes, teclas e efeitos base/aprimorado conferidos no bundle.',
        'A ficha individual oficial ainda exibe o rótulo legado New Moon\'s Shadow; o bundle atual é a fonte canônica para Team-Ups.',
      ],
    },
    {
      id: 'official-the-hood',
      kind: 'official',
      title: 'The Hood — Página oficial de habilidades',
      url: 'https://www.marvelrivals.com/20260807/41360_1310474.html',
      published: '2026-08-07',
      confidence: 'alta',
      takeaways: [
        'Role Vanguard e 550 HP; Leaded Transformation causa 3,5 por projétil, tem intervalo de 0,05s, 10% lifesteal e conversão para Bonus Health de 40% até 100. A ficha também lista 10% para o efeito de lifesteal das balas ao atravessar o Abyssal Veil, mas não explicita se os valores se somam.',
        'Abyssal Veil: 10s de cooldown, 6s de duração, 8m × 3,5m, 20% de redução de dano e cura, 60 de dano e cegueira de 1s.',
        'Mantle of Oblivion: 12s de cooldown, 1s, raio de 2m ou 3m acima de 50% de energia.',
        'Demon of the End: conversão de dano para Bonus Health de 50%, 50 por disparo, máximo 200 e raio de 8m.',
        'A ficha individual ainda mostra o nome legado New Moon\'s Shadow; nomes e efeitos atuais de Team-Up foram confirmados pelo bundle vivo.',
      ],
    },
    {
      id: 'balance-20260911-the-hood',
      kind: 'official',
      title: 'Marvel Rivals Version 20260911 Balance Post — The Hood',
      url: 'https://www.marvelrivals.com/balancepost/20260908/41667_1313334.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-09-08',
      confidence: 'alta',
      takeaways: [
        'Reduziu a vida base de 600 para 550, aumentou o cooldown de Mantle of Oblivion de 10s para 12s e reduziu de 35% para 20% a redução de dano contra projéteis inimigos no Abyssal Veil.',
        'Reduziu a conversão de dano em Bonus Health durante Demon of the End de 60% para 50% e o dano por acerto de Leaded Transformation de 4 para 3,5.',
        'Com Moon Knight, aumentou de 3m para 6m o alcance de detecção dos projéteis de The Hood que ricocheteiam após atravessar a Lunar Barrier.',
      ],
    },
    {
      id: 'batru-the-hood',
      kind: 'database',
      title: 'The Hood Team-Ups — Batru (Season 10.5)',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/the-hood',
      published: 'consulta em 2026-11-02; dados atualizados em 2026-10-31',
      confidence: 'media',
      takeaways: [
        'Chaos Collision + Scarlet Witch: 55,16% em 36.479 partidas; a página chama a outra dupla de New Moon\'s Shadow (nome legado), com Moon Knight: 51,08% em 20.114 partidas.',
        'Batru informa agregados móveis dos últimos 30 dias, recalculados diariamente; a win rate mede a dupla e não isola o efeito causal do Team-Up.',
      ],
    },
    {
      id: 'mobalytics-the-hood',
      kind: 'guide',
      title: 'The Hood Guide — Mobalytics',
      url: 'https://mobalytics.gg/marvel-rivals/the-hood-guide',
      published: 'consulta em 2026-11-02 (trechos indexados)',
      confidence: 'media',
      takeaways: [
        'A página confirma Mantle of Oblivion com 12s de cooldown e duração de 1s; alguns efeitos de crowd-control ainda podem afetar The Hood, portanto não é imunidade completa a CC.',
        'Dica tática: guardar Mantle para dano decisivo e lembrar que ele pode absorver dano sem limite durante a janela curta.',
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
        'Patch de conteúdo e correções; não lista mudança de balanceamento ou gameplay para The Hood. Revisado para confirmar que os valores do balance post de 11/09 seguem vigentes.',
      ],
    },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 4, status: 'Página de habilidades, bundle de Team-Ups, balance post de 11/09 e patch Version 20261029 sem mudança de gameplay para The Hood.' },
    { kind: 'database', label: 'Database', count: 2, status: 'MetaBot mantido apenas como snapshot em disputa; Batru traz dados atuais de duplas, sem inferir causalidade.' },
    { kind: 'guide', label: 'Guia escrito', count: 2, status: 'MarvelRivals.gg (agosto, pré-patch) e Mobalytics consultados; táticas separadas de valores atuais.' },
    { kind: 'forum', label: 'Fórum', count: 0, status: 'Pendente: os snippets encontrados não sustentam recomendação pós-patch com leitura integral.' },
    { kind: 'video-transcript', label: 'Vídeo', count: 0, status: 'Pendente' },
  ],
}
