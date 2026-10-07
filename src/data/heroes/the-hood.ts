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
  lastVerified: '2026-10-07',
  confidenceSummary:
    'Habilidades e valores verificados no MetaBot.gg (outubro/2026) e marvelrivals.gg (agosto/2026). A wiki.gg está vazia para The Hood. Stats de win rate do MetaBot.gg (54,9%, 0,2% pick rate). Team-Ups confirmados pelo bundle oficial e traduzidos fielmente. Nota: o context do subagente declarou "Duelista" mas todas as fontes confirmam Vanguard — corrigido para Vanguard.',
  coreRead: [
    'Demonic Energy é o recurso central: cada acerto de Accursed Pistols gera +2 de energia, e ao atingir 100 de energia você entra automaticamente no Half-Demon State com rifles de munição infinita e lifesteal. Nunca entre no combate com energia zerada.',
    'Mantle of Oblivion ([key:RMB]) é a sobrevivência: barreira esférica que bloqueia todo dano e crowd-control por 1s. Com energia acima de 50%, o raio expande de 2m para 3m. Guarde para burst inimigo ou para negar ultimates.',
    'Demon of the End ([key:Q]) é o transformador: 6 tiros perfurantes que ignoram barreiras, concedem HP bônus a aliados próximos e restauram toda a sua vida ao terminar. Não pode se mover durante o uso — posicione-se antes de ativar.',
  ],
  teamUps: {
    summary:
      'Chaos Collision é o padrão (zona de dano + teleporte); New Moon\'s Shadow entra quando há Moon Knight no time ou quando você precisa de uma barreira mais forte. Ambos os team-ups são válidos — a escolha depende da composição do time.',
    recommended: 'Chaos Collision',
    recommendedReason:
      'Chaos Collision oferece zona de dano contínuo com redução de dano e cura inimiga, mais teleporte para reposicionamento. É o team-up mais versátil e funciona bem em qualquer composição. New Moon\'s Shadow é mais defensivo e brilha com Moon Knight aliado, mas o base do Chaos Collision já é forte sozinho.',
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
        name: 'New Moon\'s Shadow',
        partner: 'Moon Knight',
        partnerRole: 'Duelista',
        input: 'E',
        baseEffect:
          'Aprimora Abyssal Veil em uma Lunar Barrier que bloqueia projéteis. Ao quebrar, detona, causando dano aos inimigos e aplicando redução de dano e cura. Inimigos que atravessam tomam dano e ficam brevemente cegos.',
        enhancedEffect:
          'Ao fazer dupla com Moon Knight, a Lunar Barrier tem maior valor de escudo, e os ataques de The Hood que atravessam a barreira ganham efeito de ricochete.',
        bestFor:
          'Defesa de chokepoints, proteção contra composições de projétil e sinergia com Moon Knight. A barreira de 300 de vida bloqueia dano significativo.',
        easySetup:
          'Moon Knight aliado. Sem ele a barreira ainda bloqueia projéteis e detona — o ricochete é o diferencial.',
        iconUrl: publicAsset('teamups/the-hood-no-moons-shadow-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/the-hood-no-moons-shadow-partner.png'),
      },
    ],
    sourceIds: ['official-teamups', 'metabot-the-hood', 'marvelrivalsgg-the-hood'],
  },
  systems: [
    {
      name: 'Demonic Energy',
      input: 'Passiva',
      facts: [
        'Recurso central do kit: 0 a 100 de energia. Ao atingir 100, The Hood entra automaticamente no Half-Demon State.',
        'Ganho de energia: +2 por acerto de Accursed Pistols, +2.75 por acerto através do Abyssal Veil, +20 ao ativar Void Walk, 3,75% do dano absorvido por Mantle of Oblivion.',
        'Com 50%+ de energia: Accursed Pistols ganham attack speed aumentado (intervalo 0.2s → 0.15s) e Mantle of Oblivion expande de 2m para 3m de raio.',
        'No Half-Demon State: armas se transformam em rifles demoníacos com munição infinita, 4 de dano por projétil, intervalo 0.05s, 10% de lifesteal e +100 de HP bônus.',
      ],
    },
    {
      name: 'Abyssal Veil',
      input: 'E',
      facts: [
        'Esfera de magia negra que gera um Veil de 8m × 3.5m ao pousar. Duração de 6s, CD de 10s.',
        'Inimigos que atravessam o Veil tomam 60 de dano e ficam cegos por 1s.',
        'Projéteis inimigos que atravessam perdem 35% de dano e 20% de cura.',
        'Accursed Pistols que atravessam o Veil ganham +2.75 de energia por acerto (vs +2 normal). Leaded Transformation ganha 20% de lifesteal adicional.',
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
          sourceIds: ['metabot-the-hood', 'marvelrivalsgg-the-hood'],
        },
        {
          rank: 2,
          input: 'Shift',
          ability: 'Void Walk',
          label: 'Mobilidade + entrada no combate + energia',
          why: 'CD de 15s. Voo livre por 1.2s com boost de movimento de 40% decaindo. Ao reaparecer, causa 40 de dano em área de 4.5m e concede +20 de Demonic Energy instantaneamente. Use para entrar no combate ou escapar de situações difíceis.',
          swapWhen: 'Se Void Walk está em CD e você precisa entrar no combate, use Abyssal Veil para cegar o caminho e avance com Accursed Pistols.',
          sourceIds: ['metabot-the-hood', 'marvelrivalsgg-the-hood'],
        },
        {
          rank: 3,
          input: 'RMB',
          ability: 'Mantle of Oblivion',
          label: 'Barreira de sobrevivência + conversão de dano em energia',
          why: 'CD de 10s. Barreira esférica que bloqueia todo dano e crowd-control por 1s. Com energia acima de 50%, o raio expande de 2m para 3m. Cada ponto de dano absorvido converte 3,75% em Demonic Energy. Guarde para burst inimigo ou para negar ultimates.',
          swapWhen: 'Se Mantle está em CD e você precisa de sobrevivência, use Void Walk para escapar ou posicione-se atrás de Abyssal Veil para reduzir dano inimigo.',
          sourceIds: ['metabot-the-hood', 'marvelrivalsgg-the-hood'],
        },
        {
          rank: 4,
          input: 'LMB',
          ability: 'Accursed Pistols / Leaded Transformation',
          label: 'Dano principal + acúmulo de energia',
          why: 'Accursed Pistols: 26 de dano por projétil, hitscan, 40 munição, crítico sim, falloff 8m→55% em 20m. Com 50%+ de energia: 21 de dano, intervalo 0.15s. Leaded Transformation (Half-Demon State): 4 de dano por projétil, munição infinita, intervalo 0.05s, 10% lifesteal, +100 HP bônus.',
          swapWhen: 'No Half-Demon State, recarregue Accursed Pistols quando a munição acabar. Fora do Half-Demon State, foque em acertar tiros para acumular energia.',
          sourceIds: ['metabot-the-hood', 'marvelrivalsgg-the-hood'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Demon of the End',
          label: 'Ultimate transformador — 6 tiros perfurantes',
          why: 'Custo de 3400 de energia. 6 tiros de alto poder que perfuram inimigos e barreiras, concedem HP bônus a aliados próximos e restauram toda a sua vida ao terminar. Não pode se mover durante o uso. 1º-5º tiros: 90 + 10% HP máx; 6º tiro: 140 + 15% HP máx. HP máximo no Full Demon State: 1000.',
          swapWhen: 'Ative quando estiver em posição segura (não pode se mover) e quando houver múltiplos inimigos agrupados. Combine com crowd-control de aliados para maximizar o dano.',
          sourceIds: ['metabot-the-hood', 'marvelrivalsgg-the-hood'],
        },
      ],
      adaptations: [
        'Contra alvos aéreos (Iron Man, Storm, Ultron): Accursed Pistols são hitscan — The Hood os acerta com facilidade enquanto duelistas de projétil erram. Priorize manter energia alta e usar Void Walk para subir em plataformas.',
        'Contra dive de melee agressivo (Wolverine, Blade, Black Panther): posicione Abyssal Veil na rota de entrada deles antes de avançar. A cegueira de 1s abre a janela para burst. Se eles entrarem mesmo assim, use Mantle de Oblivion para bloquear o dano inicial e Void Walk para escapar.',
        'Contra composições de projétil (Hawkeye, Iron Man, Storm): Abyssal Veil reduz 35% do dano de projéteis inimigos que atravessam. Posicione o Veil entre você e o time inimigo para criar uma zona de segurança.',
        'Com Scarlet Witch aliada: ative Chaos Collision para criar zona de dano contínuo com redução de cura. O teleporte permite reposicionamento rápido em fights de ponto.',
        'Com Moon Knight aliado: ative New Moon\'s Shadow para criar Lunar Barrier de 300 de vida que bloqueia projéteis. A barreira detona ao quebrar, causando dano em área.',
      ],
      ultimates: [
        {
          stance: 'Ultimate única',
          name: 'Demon of the End',
          bestUse: 'Contra 3+ inimigos agrupados em objetivo (ponto ou payload), ou para finalizar briga em desadvantagem numérica. Os 6 tiros perfurantes ignoram barreiras e concedem HP bônus a aliados próximos.',
          execution: 'Ative com [key:Q] e dispare os 6 tiros nos inimigos. 1º-5º tiros: 90 + 10% HP máx; 6º tiro: 140 + 15% HP máx. Não pode se mover durante o uso — posicione-se antes de ativar. Ao terminar, toda a vida é restaurada. Se cair a 0 HP durante o Full Demon State, você morre.',
          upgradeValue: 'O Full Demon State concede 1000 de HP máximo e +50 de HP bônus por tiro acertado. Aliados próximos (8m) também recebem HP bônus. O custo de 3400 de energia é alto — ative apenas quando estiver em posição segura e com múltiplos alvos.',
        },
      ],
      dashGuide: {
        ability: 'Void Walk → Half-Demon State → Accursed Pistols → Mantle de Oblivion',
        shortRule: 'Void Walk concede +20 de energia instantaneamente — use para entrar no combate e acelerar o acúmulo de Demonic Energy.',
        mechanics: [
          'Void Walk ([key:Shift]) tem CD de 15s e duração de 1.2s. Boost de movimento de 40% decaindo ao longo de 2s após o reaparecimento. Explosão ao reaparecer: 4.5m de raio, 40 de dano.',
          'Ao atingir 100 de Demonic Energy, The Hood entra automaticamente no Half-Demon State. As armas se transformam em rifles demoníacos com munição infinita, 4 de dano por projétil, intervalo 0.05s, 10% de lifesteal e +100 de HP bônus.',
          'Accursed Pistols têm 40 de munição e falloff de 8m→55% em 20m. Com 50%+ de energia, o intervalo diminui de 0.2s para 0.15s. O spread atinge 0.5m após 10 tiros consecutivos (a 10m).',
          'Mantle de Oblivion ([key:RMB]) tem CD de 10s e duração de 1s. Com energia acima de 50%, o raio expande de 2m para 3m. Cada ponto de dano absorvido converte 3,75% em Demonic Energy.',
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
            'Quando inimigos avançarem, dispare Accursed Pistols através do Veil para ganhar +2.75 de energia por acerto e causar dano com redução de 35% no dano de projéteis inimigos que atravessam.',
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
        'Usar Mantle de Oblivion cedo demais: a barreira dura apenas 1s e tem CD de 10s. Guarde para burst inimigo ou para negar ultimates — usar em dano comum desperdiça a janela de bloqueio.',
        'Ativar Demon of the End em posição ruim: durante o Full Demon State, The Hood não pode se mover. Ativar sem cobertura ou cercado por inimigos resulta em morte rápida. Sempre posicione-se antes de ativar.',
        'Ignorar Abyssal Veil: o Veil é a principal fonte de acúmulo de energia (+2.75 por acerto) e controle (cegueira de 1s). Não usar o Veil significa acúmulo de energia mais lento e menos controle de área.',
      ],
      evidence: ['metabot-the-hood', 'marvelrivalsgg-the-hood', 'official-teamups'],
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
      published: '2026-10',
      confidence: 'alta',
      takeaways: [
        'Valores completos das habilidades: Accursed Pistols (26 de dano, 40 munição, falloff 8m→55% em 20m), Abyssal Veil (CD 10s, 8m×3.5m, 60 de dano, cegueira 1s), Mantle of Oblivion (CD 10s, 1s duração, raio 2m/3m), Void Walk (CD 15s, 1.2s, +20 energia), Demon of the End (3400 energia, 6 tiros, 1000 HP máx).',
        'Stats: 54,9% win rate, 0,2% pick rate, 4,27 KDA, #2 entre Vanguards.',
        'Team-Ups: Chaos Collision (Scarlet Witch, [key:C]) e New Moon\'s Shadow (Moon Knight, [key,E]).',
        'Demonic Energy: 0-100, ganho por acerto de Accursed Pistols (+2), Abyssal Veil (+2.75), Void Walk (+20), Mantle de Oblivion (3,75% do dano absorvido).',
      ],
    },
    {
      id: 'marvelrivalsgg-the-hood',
      kind: 'guide',
      title: 'Marvel Rivals The Hood Guide — MarvelRivals.gg',
      url: 'https://marvelrivals.gg/the-hood',
      published: '2026-08',
      confidence: 'alta',
      takeaways: [
        'The Hood é um Vanguard introduzido na Temporada 9.5 (7 de agosto de 2026).',
        'HP: 550. Role: Vanguard.',
        'Guia recomenda: acumular Demonic Energy, usar Abyssal Veil para boost, entrar no Half-Demon State com rifles de munição infinita.',
        'Mantle of Oblivion: barreira esférica que bloqueia dano e crowd-control. Guardar para burst inimigo ou negar ultimates.',
        'Void Walk: mobilidade + escape. Ativar concede +20 de Demonic Energy instantaneamente.',
        'Demon of the End: ultimate transformador, 6 tiros perfurantes que ignoram barreiras, concedem HP bônus a aliados e restauram vida ao terminar.',
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
        'Chaos Collision (Scarlet Witch, [key:C]): zona arcana com dano contínuo e redução de dano/cura. Reative para teleportar ao centro.',
        'New Moon\'s Shadow (Moon Knight, [key:E]): aprimora Abyssal Veil em Lunar Barrier que bloqueia projéteis. Ao quebrar, detona.',
        'Textos base e aprimorado traduzidos fielmente do bundle oficial.',
      ],
    },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 1, status: 'Completo' },
    { kind: 'database', label: 'Database', count: 1, status: 'Completo' },
    { kind: 'guide', label: 'Guia escrito', count: 1, status: 'Completo' },
    { kind: 'forum', label: 'Fórum', count: 0, status: 'Pendente' },
    { kind: 'video-transcript', label: 'Vídeo', count: 0, status: 'Pendente' },
  ],
}
