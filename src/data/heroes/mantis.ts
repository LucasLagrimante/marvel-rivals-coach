import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const mantis: HeroGuide = {
  id: 'mantis',
  name: 'Mantis',
  aliases: ['Mantis', 'A Kandissian', 'Mantis dos Guardiães'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/mantis.png'),
  bannerUrl: publicAsset('heroes/banners/mantis.png'),
  selectionPortraitUrl: publicAsset('heroes/select/mantis.png'),
  selectionHoverUrl: publicAsset('heroes/select/mantis_champion.gif'),
  selectionHoverFit: { scale: 1.6, x: 0, y: 16 },
  theme: {
    primary: '#4fd08a',
    primaryRgb: '79, 208, 138',
    secondary: '#a8e6c9',
    secondaryRgb: '168, 230, 201',
    surface: '#0a1a14',
    surfaceRgb: '10, 26, 20',
  },
  roles: ['strategist'],
  lastVerified: '2026-10-03',
  confidenceSummary:
    'Vida base de 275 e teclas vieram da IGN e da página oficial do herói; os dois textos de Team-Up saíram do bundle oficial teamup_a35bb0a0.js da Temporada 10, não da ficha do site, que ainda descreve o Nature’s Soul antigo. Os números de vida curta foram corrigidos pelos balance posts oficiais do ano: em 11/07/2026 a cura do Healing Flower caiu de 15 + 3% para 12 + 3% da vida máxima por segundo, e em 08/09/2026 a cura do Time-Up com Star-Lord caiu outra vez, de 12 + 3% para 10 + 3%, com a forma aprimorada em 10 + 3,5%. O SAME balance ainda deu buff no Time-Up com Adam Warlock, que subiu de 10 + 2,5% para 12 + 3%, e na área em forma de alma, que foi de 5/s para 30/s com raio de 5m para 8m. O bônus de dano do Allied Inspiration caiu de 12% para 8% em 15/05/2026 e foi trocado por +100 de velocidade de movimento — o número 12% que ainda aparece em sites de terceiros é anterior ao patch. Divergência registrada: o tempo de carga de um Life Orb aparece como 3s na IGN e no marvel-rivals.net, mas o balance de 11/09/2026 subiu para 4s, e foi o valor do balance que ficou [verificar na wiki]. Sem leitura integral de forum nesta sessão — Reddit bloqueia —, a decisão de Team-Up foi cruzada com o balance oficial e com o guia da marvelrivalsarena, sem número de win rate de dupla medido.',
  coreRead: [
    'Life Orb é a moeda real: cada um rende 4 segundos de recarga e paga exatamente uma habilidade.',
    'Spore Slumber tem 0,5 segundo em que o inimigo não acorda com dano — é uma janela de dano grátis.',
    'Allied Inspiration virou velocidade, não dano: use para reposicionar o time, não para fechar a troca de tiro.',
    'Soul Resurgence converte cura excedente em vida bônus — ative antes de encher a barra, não depois.',
  ],
  teamUps: {
    summary:
      'Vitality Pact (com Adam Warlock) é a escolha no geral. O próprio balance da Temporada 10 buffou a dupla: a cura do Healing Flower subiu para 12 + 3% da vida máxima por segundo e a forma de alma passou a curar 30 por segundo num raio de 8m. Star Blossom (com Star-Lord) continua sendo a opção de volume, mas ela foi nerfada duas vezes no ano e o efeito aprimorado agora entrega a mesma cura do base.',
    recommended: 'Vitality Pact',
    recommendedReason:
      'O balance oficial de 11/09/2026 é o argumento: enquanto a dupla com Star-Lord era nerfada (12 + 3% para 10 + 3%, e a aprimorada de 15 + 3,5% para 10 + 3,5%, ou seja, o aprimorado deixou de render mais que o base), a dupla com Adam Warlock recebia buff na mesma linha (10 + 2,5% para 12 + 3%) e a cura de alma saltava de 5/s para 30/s com raio de 8m. Isso inverteu a economia da rota Adam Warlock: o efeito base é a opção que saiu renforcée, então ela funciona mesmo sem o parceiro. Star Blossom ainda tem o argumento de render mais cura em área quando o time precisa que o efeito se espalhe entre vários aliados, mas o número medido pela própria Netease mostra que o teto dela caiu. Ressalva: sem leitura de win rate de dupla nesta sessão, a recomendação se apoia no balance e no encaixe tático, não em medição de partida.',
    options: [
      {
        name: 'Star Blossom',
        partner: 'Star-Lord',
        partnerRole: 'Duelist',
        input: 'RMB',
        baseEffect:
          'Recastar Healing Flower em um aliado que já tenha o efeito amplia e espalha a aura de cura.',
        enhancedEffect:
          'Com Star-Lord no time, usar Healing Flower em qualquer aliado dispara instantaneamente o Spell Field aprimorado e o efeito de cura.',
        bestFor:
          'Times de cinco pessoas em briga aberta, onde espalhar a cura entre vários aliados vale mais do que curar um tanque só. Cuidado com a gestão: a aura depende de recast, e cada recast custa um Life Orb.',
        easySetup:
          'Com Star-Lord no time o disparo é instantâneo em qualquer aliado, o que resolve a briga sem mira. Sem ele, vale a pena apenas se o time já estiver agrupado.',
        iconUrl: publicAsset('teamups/mantis-star-blossom-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/mantis-star-blossom-partner.png'),
      },
      {
        name: 'Vitality Pact',
        partner: 'Adam Warlock',
        partnerRole: 'Strategist',
        input: 'LMB',
        baseEffect:
          'Ao ser derrotada, a Mantis pode se mover livremente como alma, curando aliados próximos, e refazer o corpo no ponto escolhido. Depois de usar Natural Anger, o efeito de Nature’s Favor é reforçado, aumentando a cura concedida.',
        enhancedEffect:
          'Com Adam Warlock no time, o estado de alma dela forja Soul Bond com aliados próximos, concedendo cura ao longo do tempo e distribuindo o dano sofrido entre os elos.',
        bestFor:
          'Quando o time perde alguém durante a troca. O efeito base é uma segunda vida de cura pura e o aprimorado adiciona o Soul Bond, que distribui o dano sofrido entre os aliados ligados — é a resposta direta a times com burst.',
        easySetup:
          'Adam Warlock no time. Sem ele, a forma de alma continua funcionando: o efeito base já foi o que recebeu o buff mais forte da Temporada 10, com 30 por segundo num raio de 8m. Observação de bundle: o Time-Up traz Key_en vazio, ou seja, a habilidade substitui um ataque — por isso a tecla registrada aqui é a do ataque substituído, [key:LMB], e não um input livre.',
        iconUrl: publicAsset('teamups/mantis-vitality-pact-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/mantis-vitality-pact-partner.png'),
      },
    ],
    sourceIds: ['teamup-bundle', 'balance-t10', 'ign-mantis'],
  },
  systems: [
    {
      name: 'Life Orb',
      input: 'Recurso',
      heading: 'Você não tem recarga, tem orçamento',
      facts: [
        'A Mantis carrega até 4 Life Orb. Cada um consome exatamente uma habilidade — Allied Inspiration, Natural Anger ou Healing Flower — e volta sozinho depois de 4 segundos, conforme o balance de 11/09/2026 (era 3s).',
        'Não existe botão de recarga: a pergunta nunca é se dá para usar, e sim se dá para usar AGORA. Um Life Orb guardado na mão é um Life Orb que vai expirar em 4 segundos.',
        'Cada Healing Flower ([key:RMB]) consome um orbe, então segurar cura para o momento certo custa menos vida do que perder o time cedo. A regra prática: se o time ainda está inteiro, não gaste orbe de cura.',
        'A passiva Nature’s Favor transforma cada orbe consumido em cura própria de 12,5 por segundo durante 8 segundos. Ou seja: gastar orbe para curar aliado também cura a Mantis. O recurso é fonte de sustain, não só de utilidade.',
        'Fora de combate, depois de 3 segundos sem levar dano, a velocidade sobe para 7,5m/s. É a rota para reposicionar e recarregar os orbes longe do tiro inimigo.',
      ],
      meter: [
        { label: 'Orbe usado em cura', value: '+12,5/s por 8s na Mantis' },
        { label: 'Orbe usado em buff', value: 'mesma cura passiva' },
        { label: 'Orbe em espera', value: 'volta em 4s' },
        { label: '3s sem dano', value: '7,5m/s fora de combate' },
      ],
    },
    {
      name: 'Nature’s Favor',
      input: 'Passiva',
      heading: 'A passiva é o que faz a ultimate valer',
      facts: [
        'Nature’s Favor tem duas metades e a segunda é a que importa: consumir Life Orb cura a Mantis por 12,5 por segundo durante 8 segundos.',
        'Como a cura por orbe dura 8 segundos e não acumula, o certo é encadear dois usos de habilidade com 8 segundos de intervalo. É assim que a Mantis entra na própria ultimate com vida cheia em vez de chegar correndo.',
        'A outra metade é a velocidade: 7,5m/s fora de combate depois de 3 segundos sem levar dano. Use esse tempo para recarregar os orbes e reposicionar — nunca para segurar linha.',
        'O bônus de dano do Allied Inspiration foi removido em 15/05/2026 (12% para 8%, depois trocado por +100 de velocidade). Se você viu 12% de dano em tutorial antigo, está obsoleto.',
      ],
      meter: [
        { label: 'Orbe consumido', value: '12,5/s por 8s' },
        { label: 'Duração máxima encadeada', value: '16s sem repetir a cura' },
        { label: '3s sem dano', value: '7,5m/s' },
      ],
    },
  ],
  roleGuides: {
    strategist: {
      key: 'strategist',
      label: 'Strategist',
      nickname: 'A curadora que se cura de graça',
      health: '275',
      difficulty: 'Gestão de recurso: o kit inteiro depende de 4 Life Orb, e errar o momento de um orbe custa mais sustain do que uma ultimate.',
      job: 'Sustentar a linha de frente com cura contínua e dar ao time a velocidade que o buff de dano não dá mais.',
      verdict:
        'A Mantis voltou a ser o curador mais forte em team fight e ao mesmo tempo o mais frágil em solo: 275 de vida, sem escudo nativo, e um kit que depende de estar com gente. Quem escolhe ela aceita curar de longe e usar o Spore Slumber como arma principal, porque o disparo dela não derruba ninguém sozinho.',
      playstyle: [
        'Fique na média distância, nunca colada no tanque. Com 275 de vida, a Mantis não sobrevive a um flanker que chega em você sem ter Spore Slumber carregado.',
        'Não gaste orbe de cura enquanto o time estiver inteiro. Guarde os 4 orbes e entregue a cura concentrada na janela em que alguém realmente vai cair.',
        'Encadeie o uso de habilidade a cada 8 segundos: cada orbe consumido ativa a cura da passiva, e o encadeamento é o que sustenta você entre as ultimate.',
        'Use Spore Slumber para apagar o carries inimigo, não para dano. Os 0,5 segundos iniciais ignoram dano: esse é o tempo do time todo atacar junto.',
      ],
      priorityKicker: 'Ordem de upgrade',
      priorityTitle: 'Spore Slumber antes de qualquer orbe',
      priorityDescription:
        'Nenhum upgrade de cura muda o fato de que você morre sozinha. O controle é o que cria a janela em que os outros quatro orbes viram dano.',
      abilityLoop: [
        { ability: 'Allied Inspiration', input: 'E' },
        { ability: 'Natural Anger', input: 'F' },
        { ability: 'Healing Flower', input: 'RMB' },
        { ability: 'Spore Slumber', input: 'Shift' },
      ],
      upgradePlan: [
        {
          rank: 1,
          spellNumber: 1,
          input: 'Shift',
          ability: 'Spore Slumber',
          label: 'Controle é a sua vida',
          baseEffect:
            'Dispara um esporo que causa dano em área e adormece um único inimigo por 3,5 segundos, deixando uma ilusão atrás dele que pode ser disparada para acordá-lo.',
          upgradeEffect:
            'Com o aprimorado, a duração do sono e a área de dano sobem, o que dá mais tempo para o time inteiro entrar no alvo.',
          fightNote:
            'Nos primeiros 0,5 segundos o inimigo não acorda com dano nenhum. É a janela para o time todo disparar junto e fechar o alvo em um golpe só.',
          why: 'Você tem 275 de vida e nenhuma outra fonte de tempo. O sono é o que transforma uma troca de tiro em uma troca de tiro ganha, e o upgrade aumenta exatamente essa janela.',
          swapWhen:
            'Troque para a carga curta quando o alvo estiver no meio do time e você quiser acordar rapidinho para recarregar, ou para dano de área contra dois inimigos agrupados.',
          sourceIds: ['wiki-mantis', 'ign-mantis'],
        },
        {
          rank: 2,
          spellNumber: 2,
          input: 'RMB',
          ability: 'Healing Flower',
          label: 'Cura concentrada, não pulverizada',
          baseEffect:
            'Consome 1 Life Orb e dá a um aliado cura única de 55 mais cura ao longo do tempo de 12 + 3% da vida máxima dele por segundo, durante 8 segundos. Recastar apenas renova a duração, não acumula.',
          upgradeEffect:
            'Com o aprimorado, a cura ao longo do tempo sobe para 15 + 3,5% da vida máxima do alvo por segundo, conforme o balance de 11/07/2026 e o ajuste de 11/09/2026.',
          fightNote:
            'Como não acumula, jogar a cura em duas pessoas em sequência dilui o efeito. Escolha uma pessoa e mantenha o recast.',
          why: 'A cura por orbe é o que transforma Healing Flower em sustain real em vez de curativo. O upgrade aumenta o valor por orbe, e orbe é o recurso escasso.',
          swapWhen:
            'Troque para Allied Inspiration quando o time não está perdendo vida e o que está perdendo é posicionamento — o buff virou velocidade.',
          sourceIds: ['wiki-mantis', 'ign-mantis', 'balance-t10'],
        },
        {
          rank: 3,
          spellNumber: 3,
          input: 'E',
          ability: 'Allied Inspiration',
          label: 'Velocidade, não dano',
          baseEffect:
            'Consome 1 Life Orb e dá ao aliado escolhido 100 de velocidade de movimento durante 8 segundos (o bônus de dano de 12% foi removido em 15/05/2026).',
          upgradeEffect:
            'Com o aprimorado, a duração do buff sobe, permitindo que o aliado conclua um reposicionamento longo sem perder o efeito.',
          fightNote:
            'Use no aliado que está preso numa posição ruim, não no duelist para dar dano. O valor está em quem chega primeiro ao ponto, não em quem bate mais forte.',
          why: 'Com 4 orbes e duas outras habilidades consumindo o mesmo recurso, o upgrade precisa tratar a habilidade que você vai usar mais. Quem tem mobility errada é quem morre primeiro.',
          swapWhen:
            'Troque para Natural Anger quando a briga já é sua e ninguém está se reposicionando — o bônus de dano de 12% para si mesma ainda existe.',
          sourceIds: ['wiki-mantis', 'balance-20260515'],
        },
      ],
      adaptations: [
        'Contra composição de negação de cura (Blade, Ultron, The Hood): saia da rota de cura. Spore Slumber e Natural Anger resolvem briga sem depender de sustain alheio.',
        'Contra dive (Spider-Man, Black Panther): o Nature’s Favor de velocidade fora de combate é a defesa real. Saia de combate por 3 segundos e você recupera a rotação de orbe inteira.',
        'Quando o time perde a frontline: o Vitality Pact com Adam Warlock vira a jogada. Em forma de alma, a Mantis cura 30 por segundo num raio de 8m, conforme o balance da Temporada 10.',
        'Em mapa com vertical (Yggdrasill path, Midtown): o Spore Slumber tem alcance médio e a ilusão fica atrás do alvo. Use o esporo no flanker que está na rampa, não no tanque no chão.',
      ],
      ultimates: [
        {
          stance: 'Sustain em área',
          name: 'Soul Resurgence',
          bestUse:
            'A briga já começou e o time está espalhado em volta do ponto, com flanker vivo. A cura inicial de 200 e o campo de 15m por 8s são o que segura o objetivo na troca de posto.',
          execution:
            'Ative no meio do grupo, não atrás. Entre no campo antes de usar a cura inicial: quem está dentro do campo quando a ultimate abre é quem recebe o bônus de movimento.',
          upgradeValue:
            'Com o aprimorado, a conversão de cura excedente em vida bônus é mais eficiente, o que significa ativar cedo em ponto de captura — o acúmulo é o que importa, não o pico.',
        },
        {
          stance: 'Conversão em vida bônus',
          name: 'Soul Resurgence',
          bestUse:
            'Contest de ponto com aliado já quase cheio de vida. Cada cura que passa do máximo vira vida bônus de verdade, então o ganho real é maior do que o número de cura sugere.',
          execution:
            'Espere o time estar vivo antes de ativar. A conversão de 70% do excedente, com teto de 100 de vida extra, só existe se alguém estiver acima da vida máxima.',
          upgradeValue:
            'O upgrade é o que transforma a ultimate de cura em investimento: a vida bônus gerada aqui é o que segura o time nos 30 segundos seguintes.',
        },
      ],
      dashGuide: {
        ability: 'Nature’s Favor',
        shortRule:
          'Três segundos sem levar dano sobem sua velocidade para 7,5m/s. É o dash da Mantis: não existe habilidade de deslocamento no kit.',
        mechanics: [
          'O ganho de velocidade é condicional a estar fora de combate. Levar dano cancela na hora — não existe um momento da partida em que a Mantis corra para dentro do tiro.',
          'Fora de combate é também o momento em que os Life Orb recarregam mais rápido de forma prática: fora da briga, os 4 segundos de recarga passam antes do próximo conflito.',
          'A passiva também cura 12,5 por segundo por 8 segundos cada vez que você consome um orbe, então cada reposicionamento pode ser feito logo após uma habilidade.',
        ],
        drills: [
          'Saia da briga, espere 3 segundos e só então reapareça: o custo é zero e o ganho é a rotação inteira de orbe.',
          'Use o buff em você mesma via Natural Anger e depois reposicione com a velocidade da passiva para sustentar um alvo em movimento.',
        ],
      },
      patterns: [
        {
          title: 'Dormir o flanker e girar a cura',
          steps: [
            'Leia quem está chegando primeiro: o Spore Slumber é para o flanker, nunca para o tanque de frente.',
            'Nos 0,5 segundos em que o dano não acorda o alvo, avise o time para disparar junto — esse é o abate inteiro.',
            'Com o flanker fora, distribua os 4 orbes de cura em quem realmente vai cair, um de cada vez.',
          ],
        },
        {
          title: 'Recurso para a ultimate',
          steps: [
            'Comece a rotação de orbe cedo, ainda no setup, usando Allied Inspiration para o tanque ganhar velocidade antes do primeiro tiro.',
            'Cada orbe consumido te cura por 8 segundos: entre usos, mantenha o encadeamento vivo para entrar na ultimate com vida cheia.',
            'Gaste o último orbe em Healing Flower logo antes de ativar, para a cura da passiva estar ainda correndo durante os 8s do campo.',
          ],
        },
        {
          title: 'Contra Composition de negação de cura',
          steps: [
            'Não confie em sustain longo: com Blade ou The Hood no time, a cura da Mantis vira curativo.',
            'Troque o roteiro: Spore Slumber, Natural Anger e posicionamento. A briga se resolve com dano e controle, não com cura.',
            'Use a passiva para sobreviver, porque ela te cura independentemente do que o inimigo faz com a sua.',
          ],
        },
      ],
      mistakes: [
        'Pulverizar Healing Flower em vários aliados. A cura não acumula, só renova: espalhar o orbe entre três pessoas é a mesma cura dividida.',
        'Gastar orbe de cura com o time inteiro. Cada orbe que vira cura preventiva é um orbe que não está disponível para a janela em que alguém cai.',
        'Entrar em combate para depois rezar pelo Nature’s Favor. A velocidade só liga fora de combate, e forçar a rotação dentro da briga é morte certa com 275 de vida.',
        'Esperar que Allied Inspiration dê dano. O bônus de dano foi removido em 15/05/2026: hoje ele dá velocidade.',
      ],
      evidence: [
        'Vida base de 275, velocidade de movimento de 6 por segundo, teclas e números-base das habilidades: IGN, página do Mantis.',
        'Cura de 12,5 por segundo da passiva Nature’s Favor, 55 de cura única, 8s de duração e 15m de raio da ultimate: IGN e marvel-rivals.net.',
        'Cura do Healing Flower reduzida de 15 + 3% para 12 + 3%, e nerf do Time-Up com Star-Lord: balance oficial de 11/07/2026 e 11/09/2026.',
        'Bônus de dano do Allied Inspiration reduzido de 12% para 8% e convertido em +100 de velocidade: balance oficial de 15/05/2026.',
        'Forma de alma curada de 5/s para 30/s com raio de 8m: balance oficial de 11/09/2026.',
        'Mecânica da ilusão do Spore Slumber e janela de 0,5s sem acordar por dano: wiki.gg e guia da marvelrivalsarena (leitura de snippet).',
      ],
    },
  },
  sources: [
    {
      id: 'teamup-bundle',
      kind: 'official',
      title: 'Página oficial de Team-Up (bundle teamup_a35bb0a0.js)',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      author: 'NetEase Games',
      published: '2026-10-03',
      confidence: 'alta',
      takeaways: [
        'A Mantis aparece no bundle com duas opções: pos0 STAR BLOSSOM (parceiro Star-Lord) e pos1 VITALITY PACT (parceiro Adam Warlock).',
        'Star Blossom, Key_en "Right Click" (token canônico RMB): "Recasting Healing Flower on a teammate with the effect enhances and spreads the healing aura." Aprimorado: "When teaming up with Star-Lord, using Healing Flower on any teammate instantly triggers the enhanced Spell Field and healing effect."',
        'Vitality Pact, Key_en VAZIO no bundle: "Upon defeat, Mantis can freely move as a soul, healing nearby allies, and reforge her body at a chosen spot. After using Natural Anger, the effect of Nature’s Favor is enhanced, increasing the amount of healing provided." Aprimorado: "When teaming up with Adam Warlock, her soul state can forge Soul Bond with nearby teammates, granting Healing Over Time and distributing damage taken across the bond."',
        'Key_en vazio indica que a habilidade substitui um ataque, não um input livre: por isso a tecla registrada para o Vitality Pact é a do ataque substituído, LMB, e não foi inventada tecla nova.',
        'Divergência com a ficha do herói no site: a ficha ainda descreve o Nature’s Soul antigo, que não é mais uma das duas opções da temporada.',
      ],
    },
    {
      id: 'balance-t10',
      kind: 'official',
      title: 'Marvel Rivals Version 20260911 Balance Post',
      url: 'https://www.marvelrivals.com/20260908/41525_1313334.html',
      author: 'NetEase Games',
      published: '2026-09-08',
      confidence: 'alta',
      takeaways: [
        'Mantis: tempo de carga de um Life Orb subiu de 3s para 4s.',
        'Com Star-Lord, a cura do Healing Flower caiu de 12 + 3% para 10 + 3% da vida máxima por segundo; a cura aprimorada caiu de 15 + 3,5% para 10 + 3,5%, ou seja, o aprimorado deixou de render acima do base.',
        'Com Adam Warlock, a cura do Healing Flower subiu de 10 + 2,5% para 12 + 3% da vida máxima por segundo.',
        'Na forma de alma, a cura de área subiu de 5/s para 30/s e o raio do campo de cura subiu de 5m para 8m.',
        'Mudança global de Strategist: conversão de cura em energia caiu de 70% para 65%, e de dano em energia de 55% para 50% — a Mantis gera ultimate mais devagar que no começo da temporada.',
      ],
    },
    {
      id: 'balance-20260515',
      kind: 'official',
      title: 'Marvel Rivals Version 20260515 Balance Post',
      url: 'https://www.marvelrivals.com/balancepost/20260512/41667_1299947.html',
      author: 'NetEase Games',
      published: '2026-05-12',
      confidence: 'alta',
      takeaways: [
        'Mantis: o Allied Inspiration deixou de dar bônus de dano de 12% e passou a dar 100 de velocidade de movimento aos aliados.',
        'Nota do estúdio: com o Ultron ganhando buff de dano convencional, a Mantis precisou de uma função única, e a velocidade foi escolhida para ajudar posicionamento e kite.',
        'Consequência de leitura: qualquer guia que ainda cite 12% de dano do Allied Inspiration está antes deste patch.',
      ],
    },
    {
      id: 'balance-20260711',
      kind: 'official',
      title: 'Marvel Rivals Version 20260711 Balance Post',
      url: 'https://www.marvelrivals.com/balancepost/20260711/41667_1307328.html',
      author: 'NetEase Games',
      published: '2026-07-11',
      confidence: 'alta',
      takeaways: [
        'Mantis: a cura do Healing Flower foi reduzida de 15 + 3% para 12 + 3% da vida máxima por segundo.',
        'Com Star-Lord, a cura aprimorada caiu de 17,5 + 3,5% para 15 + 3,5% da vida máxima por segundo.',
        'Contexto de meta: este foi o hotfix que elevou a conversão de cura em energia das Strategist de 50% para 65%, em um momento de pressão alta na linha de frente.',
      ],
    },
    {
      id: 'ign-mantis',
      kind: 'guide',
      title: 'Mantis — Marvel Rivals Guide, IGN',
      url: 'https://www.ign.com/wikis/marvel-rivals/Mantis',
      confidence: 'alta',
      takeaways: [
        'Vida base de 275 e velocidade de movimento de 6m/s.',
        'Life Energy Blast: recupera 1 Life Orb com acerto crítico.',
        'Soul Resurgence: campo persistente de 15m de raio por 8s, cura de 150 por segundo, cura única de 200 na lan-sa e na aliada, 3m/s de bônus de movimento, 70% da cura excedente convertida em vida bônus com teto de 100, custo de energia 3700 e recarga de 15s.',
        'Natural Anger: consumo de 1 Life Orb, bônus de dano de 12% por 8s, sem acúmulo.',
        'Healing Flower: alvo selecionado, cura única de 55, cura ao longo do tempo de 20/s na ficha, consumo de 1 Life Orb, duração de 8s sem acúmulo.',
        'Nature’s Favor: velocidade fora de combate de 7,5m/s após 3s sem levar dano, e cura de 12,5 por segundo por 8s ao consumir Life Orb.',
        'Confirma os atalhos: Spore Slumber em Shift, Allied Inspiration em E, Natural Anger em F, Healing Flower em RMB, Soul Resurgence em Q.',
        'Nota de decisão: a IGN classifica a Mantis como uma das Strategist mais ofensivas do jogo, e não como curadora pura.',
      ],
    },
    {
      id: 'wiki-mantis',
      kind: 'database',
      title: 'Mantis — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Mantis',
      confidence: 'media',
      takeaways: [
        'Vida base de 275, com 4 Life Orb como recurso máximo.',
        'Spore Slumber: dorme um único inimigo por 3,5s e cria uma ilusão que pode ser atingida para acordá-lo.',
        'Regra da mecânica: nos primeiros 0,5 segundos do sono, dano não acorda o alvo — é a janela em que o time todo pode atacar junto.',
        'Healing Flower: 55 de cura única e cura ao longo do tempo baseada na vida máxima do alvo, com 8s de duração que não acumula.',
        'Nature’s Favor: cura de 12,5 por segundo e velocidade fora de combate após 3s sem dano.',
        'Divergência registrada: o tempo de carga do Life Orb aparece como 3s aqui, contra 4s no balance oficial de 11/09/2026 — o balance é mais recente e foi seguido.',
      ],
    },
    {
      id: 'marvelrivalsnet-mantis',
      kind: 'database',
      title: 'MANTIS — Marvel Rivals Characters Ultimate Guide',
      url: 'https://marvel-rivals.net/character/mantis',
      confidence: 'media',
      takeaways: [
        'Confirma a carga de 3s por Life Orb (superada pelo balance de 11/09/2026) e a escala percentual da cura do Healing Flower: 12 + 3% da vida máxima do alvo por segundo.',
        'Confirma Allied Inspiration com duração de 8s e máximo de 16s quando encadeado com Natural Anger.',
        'Lista fraquezas declaradas: ausência de cura em rajada e dependência de recarga do Life Orb para qualquer uso de habilidade.',
        'Indica o Time-Up VIBRANT VITALITY como a dupla historicamente usada com Groot e Loki — informação de temporada anterior, superada pelas duas opções atuais do bundle.',
      ],
    },
    {
      id: 'marvelrivalsarena-mantis',
      kind: 'guide',
      title: 'Marvel Rivals Mantis Guide: Tips, Abilities & Strategy',
      url: 'https://www.marvelrivalsarena.com/articles/marvel-rivals-mantis-the-ultimate-support-hero-guide.html',
      confidence: 'media',
      takeaways: [
        'Leitura de snippet: o ciclo da Mantis é buffar todo o time no início do round e depois curar, revampando os buffs a cada queda.',
        'Dica de topo de jogador citada: esperar o time e causar dano simultaneamente no alvo adormecido, porque o dano de uma pessoa só não derruba o alvo.',
        'Confirma a leitura de Soul Resurgence como a segunda maior cura do jogo, atrás da Luna Snow, capaz de virar uma briga perdida em disputa de objetivo.',
        'A mesma página descreve um bônus de velocidade de 40% fora de combate, que conflita com os 7,5m/s da IGN — a unidade está convertida de forma diferente, e o valor da IGN foi seguido.',
        'A menção a Groot e Loki como sinergias de Team-Up é anterior à reformulação da Temporada 9 e não foi usada nas opções atuais.',
      ],
    },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 4, status: 'bundle de Team-Up da Temporada 10 e três balance posts oficiais do ano (15/05, 11/07 e 11/09)' },
    { kind: 'database', label: 'Wiki e base de dados', count: 2, status: 'wiki.gg para mecânica do Spore Slumber e recurso; marvel-rivals.net para a escala percentual da cura' },
    { kind: 'guide', label: 'Guias escritos', count: 2, status: 'IGN para os números-base; marvelrivalsarena para macete de sono e ciclo de recurso' },
    { kind: 'forum', label: 'Fórum e comunidade', count: 0, status: 'pendente: Reddit bloqueia leitura integral nesta sessão e nenhum vídeo com transcrição auditável foi localizado' },
    { kind: 'video-transcript', label: 'Vídeo e transcrição', count: 0, status: 'pendente: nenhum vídeo com transcrição auditável localizado nesta sessão' },
  ],
}