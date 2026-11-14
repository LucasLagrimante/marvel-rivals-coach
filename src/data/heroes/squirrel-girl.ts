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
    'Burst Acorn dá 95 de dano e cai para 57 no fim do falloff: jogue em choke curto e perto de cobertura, não como sniper.',
    'Squirrel Blockade virou negação de área: 25 de impacto mais Acorn Rain (30/s por 2s e slow de 20%) fecham o canto, mas o Imprison de 0,8s não segura alvo para você matar sozinha.',
    'Mammal Bond é janela de burst, não só recarga: 100% de velocidade de ataque por 5s, acorn a 150 m/s sem gravidade e 65% do dano, cerca de 30% mais DPS.',
    'Unbeatable Squirrel Tsunami agora persegue o inimigo mais próximo depois de ricochetear, então corredor aberto deixou de ser problema.',
  ],

  systems: [
    {
      name: 'Burst Acorn',
      input: 'LMB',
      heading: 'Dano alto de perto, medíocre de longe',
      facts: [
        '95 de dano no centro do spell field esférico de 3m; no falloff máximo o dano cai para 60%, ou seja 57.',
        'Projétil em arco a 80 m/s, 1,49 acorn por segundo, 12 de munição e sem crítico.',
        'Com 1,49 tiro por segundo e 95 de dano, o DPS sustentado fica perto de 141 no ponto zero: alvo de 275 HP morre em 3 acorns colados e em 5 no falloff máximo.',
        'O arco e o ricochete alcançam quem está atrás de cobertura, mas o dano vem do spell field: mire o chão ao lado do alvo, não o alvo distante.',
      ],
    },
    {
      name: 'Squirrel Blockade',
      input: 'RMB',
      heading: 'Negação de área e setup, não execução',
      facts: [
        'Cobrança de até 1,5s; o projétil sai entre 60 e 90 m/s e atinge a velocidade máxima após 0,7s de carga.',
        '25 de dano no impacto e Imprison de 0,8s, tempo curto demais para você fechar a morte sozinha.',
        'Ao acertar, gera Acorn Rain de 5m de raio centrada na posição do alvo: 30 de dano por segundo durante 2s e slow de 20%.',
        'Quem fica na chuva soma cerca de 85 de dano (25 de impacto mais 60 de área), mas o valor real é atrasar rotação e quebrar combo de dive.',
        'Cooldown de 8s: é a ferramenta mais barata do kit para negar canto, empurrar objetivo e marcar o alvo que entrou no seu time.',
      ],
    },
  ],

  teamUps: {
    summary:
      'Squirrel Missile (Iron Man) segue mais consistente que ESU Alumnus (Spider-Man), mas os números do míssil divergem entre a ficha do bundle (70 de dano e 15s) e a página de habilidades (75 e 20s); os win rates da Batru são snapshot pré-patch 20261113.',
    recommended: 'Squirrel Missile',
    recommendedReason:
      'O míssil é teleguiado, persegue alvo em 60 graus horizontais e verticais a até 60m e ainda dispara junto com Squirrel Blockade quando Iron Man está no time. A vantagem de win rate medida pela Batru é pré-patch e não deve ser lida como meta atual.',
    options: [
      {
        name: 'Squirrel Missile',
        partner: 'Iron Man',
        partnerRole: 'duelist',
        input: 'C',
        baseEffect:
          'Squirrel Girl ganha a habilidade Squirrel Missile: um esquilo monta na luva de nanotech do Iron Man como míssil teleguiado e foge logo antes da explosão. A ficha do bundle registra 70 de dano, 40 m/s de voo, explosão de 8m e 15s de cooldown; a página de habilidades lista 75 de dano e 20s — a divergência fica registrada.',
        enhancedEffect:
          'Ao jogar com Iron Man, usar Squirrel Blockade dispara simultaneamente um Squirrel Missile, o que transforma cada negação de área em dano garantido no alvo preso.',
        bestFor: 'Quando o time tem Iron Man e você precisa de dano extra consistente sem gastar mira.',
        easySetup: 'Basta ter Iron Man no time: o míssil busca alvo sozinho dentro de 60m e não exige mira.',
        iconUrl: publicAsset('teamups/squirrel-girl-squirrel-missile-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/squirrel-girl-squirrel-missile-partner.png'),
      },
      {
        name: 'ESU Alumnus',
        partner: 'Spider-Man',
        partnerRole: 'duelist',
        input: 'C',
        baseEffect:
          'Spider-Man dá a Squirrel Girl uma bomba de teia: explosão ao tocar ambiente ou inimigo, 65 de dano em área esférica de 4m, slow de 35% por 3s e 20s de cooldown.',
        enhancedEffect:
          'Ao jogar com Spider-Man, ela recebe mais fluido de teia. Após lançar Webbed Acorn, o fluido cobre o chão junto com a explosão e deixa uma área pegajosa: o slow contínuo escala para atordoamento em quem permanece nela.',
        bestFor: 'Quando o time precisa de controle de área e utilidade além do seu dano de acorn.',
        easySetup: 'Basta ter Spider-Man no time; a bomba de teia é simples de arremessar e cobre o canto que você já estaria negando.',
        iconUrl: publicAsset('teamups/squirrel-girl-esu-alumnus-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/squirrel-girl-esu-alumnus-partner.png'),
      },
    ],
    sourceIds: ['teamup-bundle', 'official-abilities', 'batru-synergy'],
  },

  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelista',
      nickname: 'A Garota Esquilo',
      health: '275 HP',
      difficulty:
        'Média: o dano por acorn premia distância curta e ângulo, e o CC de 0,8s exige que o time converta a janela',
      job: 'Negar área com Squirrel Blockade e Acorn Rain, punir dive e converter a janela de Mammal Bond em burst',
      verdict:
        'Squirrel Girl deixou de ser a Duelista que prende e mata sozinha. O patch 20261113 cortou o Imprison para 0,8s e o dano do Blockade para 25, mas deu a ela Acorn Rain, 100% de velocidade de ataque no Mammal Bond e esquilos que perseguem alvo na ultimate. Hoje ela nega espaço, atrasa rotação com slow e converte cinco segundos de burst. O acorn de 95 só rende quando você aceita ângulo curto e joga colada em cobertura.',
      playstyle: [
        'Jogue no alcance do spell field de 3m: acerte o chão ao lado do alvo, não o alvo distante, porque no falloff máximo o acorn cai para 57.',
        'Use Squirrel Blockade para negar canto e objetivo, não como abertura de combo — o Imprison de 0,8s é setup para o time, não para sua execução.',
        'Abra Mammal Bond antes de entrar no ângulo: 5s de 2,98 acorns por segundo a 150 m/s sem gravidade valem mais no começo do engage do que como recarga no fim.',
        'Ative Tail Bounce para entrar com 25 de vida bônus, não apenas para fugir; o bônus entra na ativação e some ao fim da janela.',
        'Solte a ultimate em corredor ou sala, mas sabendo que os esquilos passam a buscar o inimigo mais próximo após ricochetear.',
      ],
      upgradePlan: [
        {
          rank: 1,
          input: 'LMB',
          ability: 'Burst Acorn',
          label: 'Dano principal',
          baseEffect:
            '95 de dano no centro do spell field de 3m, projétil em arco a 80 m/s e ricochete em superfícies.',
          upgradeEffect:
            'Falloff até 60% a 3m (57 de dano no limite), 1,49 acorn por segundo, 12 de munição e sem crítico.',
          why: 'É a fonte de todo o seu dano: 3 acorns colados matam um alvo de 275 HP, e o ricochete é o que alcança quem se esconde atrás de cobertura.',
          swapWhen: 'Nunca trocar. Só ajuste a distância: se o alvo está longe, o acorn vira 57 de dano e cinco tiros.',
          sourceIds: ['official-abilities', 'balance-20261113'],
        },
        {
          rank: 2,
          input: 'E',
          ability: 'Mammal Bond',
          label: 'Janela de burst',
          baseEffect:
            'Recarrega os Burst Acorns, permite usar uma habilidade sem cooldown e concede 100% de velocidade de ataque por 5s, com 12s de recarga.',
          upgradeEffect:
            'Durante os 5s o acorn voa a 150 m/s sem gravidade e dá 65% do dano (61,75): 2,98 tiros por segundo, cerca de 184 de DPS, aproximadamente 30% acima do normal. O bônus continua mesmo depois de gastar a habilidade recarregada.',
          why: 'É o único jeito de o acorn virar tiro reto e rápido o bastante para punir high ground e alvo em movimento a distância média.',
          swapWhen: 'Use quando o alvo já está sob slow ou preso, ou para punir quem se expôs em altura aberta. Guardar só para recarregar desperdiça a janela.',
          sourceIds: ['balance-20261113', 'official-abilities'],
        },
        {
          rank: 3,
          input: 'RMB',
          ability: 'Squirrel Blockade',
          label: 'Negação de área',
          baseEffect:
            '25 de dano e Imprison de 0,8s no primeiro inimigo atingido; cobrança de até 1,5s e projétil de 60 a 90 m/s.',
          upgradeEffect:
            'Ao acertar, gera Acorn Rain de 5m de raio por 2s: 30 de dano por segundo e slow de 20%, algo perto de 85 de dano em quem permanece na área.',
          why: 'O valor não é matar: é negar o canto, atrasar a rotação inimiga com slow e marcar o alvo de dive para o time converter.',
          swapWhen: 'Evite gastar em tanque com cura atrás. Prefira chão por onde o time inimigo precisa passar ou o ponto onde o dive pousa.',
          sourceIds: ['official-abilities', 'balance-20261113'],
        },
        {
          rank: 4,
          input: 'Shift',
          ability: 'Tail Bounce',
          label: 'Mobilidade com vida bônus',
          baseEffect: '9m de altura, 8s de cooldown e 25 de vida bônus ao ativar.',
          upgradeEffect:
            'O bônus entra no início da ativação, então dá para absorver o primeiro burst do engage em vez de só usar o salto como fuga.',
          why: 'É a única mobilidade vertical do kit e a única fonte de vida extra: usada antes do trade, muda a matemática do duelo.',
          swapWhen: 'Guarde para reposicionar quando o dive já comprometeu. O bônus de 25 não substitui cobertura nem cura.',
          sourceIds: ['official-abilities', 'balance-20261113'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Unbeatable Squirrel Tsunami',
          label: 'Pressão de área',
          baseEffect:
            '150 de dano por hit, 10s de duração, horda com 300 de HP a 9 m/s e 2800 de energia.',
          upgradeEffect:
            'Após ricochetear, os esquilos correm para o inimigo mais próximo em vez de ricochetear aleatoriamente: a sala fechada deixou de ser requisito.',
          why: 'Serve para forçar recuo, limpar corredor e empurrar objetivo, não para matar sozinha — a horda pode ser destruída.',
          swapWhen: 'Use com o time colado para converter o recuo. Sem pressão junto, o inimigo só anda para o lado.',
          sourceIds: ['official-abilities', 'balance-20261113'],
        },
      ],
      adaptations: [
        'Contra dive (Venom, Wolverine, Spider-Man), guarde Tail Bounce e jogue perto de parede: o acorn em arco perde para alvo que sobe e desce rápido.',
        'Contra sniper (Hawkeye, Black Widow), não dispute a linha longa. Use ricochete e Acorn Rain no canto para onde ele precisa se reposicionar.',
        'Contra escudo empilhado (Doctor Strange, Magneto), ignore a promessa antiga de que o dano atravessa escudo: não há base oficial para isso. Negue a área atrás do escudo com Blockade e obrigue o time a sair.',
        'Contra alvo aéreo ou em high ground, Mammal Bond a 150 m/s sem gravidade é a sua melhor resposta de dano, porque o tiro deixa de cair.',
      ],
      ultimates: [
        {
          stance: 'Pressão de área',
          name: 'Unbeatable Squirrel Tsunami',
          bestUse:
            'Corredor, objetivo ou canto com o time pronto para converter. A perseguição após ricochete dispensa a sala fechada que o guia antigo exigia.',
          execution:
            'Solte quando o time estiver colado e o inimigo já estiver sob o slow do Blockade. A horda tem 300 de HP, 9 m/s e dura 10s, então ela avança sozinha, mas pode ser destruída — use-a como pressão, não como execução.',
          upgradeValue:
            '150 de dano por hit, 10s de duração, 2800 de energia e esquilos que buscam o inimigo mais próximo depois de ricochetear.',
        },
      ],
      dashGuide: {
        ability: 'Tail Bounce',
        shortRule:
          '9m de altura e 8s de cooldown, com 25 de vida bônus na ativação: entre no ângulo com o bônus, não só saia dele.',
        mechanics: [
          'Alcança 9m de altura.',
          '8s de cooldown.',
          'Concede 25 de vida bônus no momento da ativação.',
          'O bônus dura uma janela curta e não é cura permanente: ativar cedo demais desperdiça a vida extra.',
        ],
        drills: [
          'Ative antes de cruzar um corredor aberto para chegar ao ângulo com 25 de vida a mais.',
          'Troque de high ground usando o salto como entrada e guarde o retorno para quando o dive aparecer.',
        ],
      },
      patterns: [
        {
          title: 'Negação de área',
          steps: [
            'Squirrel Blockade no chão por onde o time inimigo precisa passar',
            'Acorn Rain cobre 5m por 2s com 30 de dano por segundo e slow de 20%',
            'Burst Acorns em quem ficou na chuva, porque o slow segura o alvo no spell field',
          ],
        },
        {
          title: 'Janela de burst',
          steps: [
            'Mammal Bond (100% de velocidade de ataque, 150 m/s sem gravidade)',
            'Burst Acorns retos a 2,98 por segundo',
            'Gaste a habilidade recarregada antes dos 5s acabarem: segundo Blockade ou Tail Bounce para sair',
          ],
        },
        {
          title: 'Defesa de dive',
          steps: [
            'Tail Bounce para ganhar altura e 25 de vida',
            'Squirrel Blockade no perseguidor: 25 de dano, Imprison de 0,8s e slow de 20%',
            'Dois Burst Acorns enquanto ele está preso e dentro da chuva',
          ],
        },
      ],
      mistakes: [
        'Tratar o Blockade como combo de morte: com 0,8s de Imprison e 25 de dano, você não mata sozinha nem alvo de 275 HP.',
        'Ficar na distância máxima: a 57 de dano por acorn, um alvo de 275 HP leva 5 tiros e a cura chega antes.',
        'Guardar Mammal Bond só para recarregar: os 5s a 150 m/s sem gravidade são a melhor janela de dano do kit.',
        'Esperar sala fechada para a ultimate: os esquilos perseguem o inimigo mais próximo após ricochetear.',
        'Gastar Tail Bounce apenas como fuga: os 25 de vida bônus valem entrada de ângulo e trade.',
      ],
      evidence: ['balance-20261113', 'official-abilities', 'wiki-gg', 'marvelrivals-gg'],
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
      id: 'balance-20261113',
      kind: 'official',
      title: 'Marvel Rivals Version 20261113 Balance Post — Season 11',
      url: 'https://www.marvelrivals.com/balancepost/20261110/41667_1319209.html',
      confidence: 'alta',
      published: '2026-11-10',
      takeaways: [
        'Burst Acorn caiu de 110 para 95 de dano e o falloff máximo a 3m passou de 70% para 60%.',
        'Squirrel Blockade subiu de 20-60 m/s para 60-90 m/s; o Imprison caiu de 1,3s para 0,8s e o dano de 50 para 25.',
        'Nova mecânica do Blockade: ao acertar, gera Acorn Rain de 5m de raio na posição do alvo, com 30 de dano por segundo por 2s e slow de 20%.',
        'Nova mecânica do Mammal Bond: 100% de velocidade de ataque por 5s, projétil de 80 para 150 m/s, 65% do dano por acorn e sem gravidade, mantido mesmo após usar a habilidade recarregada.',
        'Tail Bounce concede 25 de vida bônus ao ser ativado.',
      ],
    },
    {
      id: 'official-abilities',
      kind: 'official',
      title: 'Squirrel Girl — Habilidades (site oficial Marvel Rivals)',
      url: 'https://www.marvelrivals.com/heroes/2oorwtc594su0/index.html',
      confidence: 'alta',
      published: '2026-10-12',
      takeaways: [
        '275 de vida e 6 m/s de velocidade; função de Duelista.',
        'Burst Acorn: 95 de dano, falloff até 60% a 3m, 80 m/s, 1,49 por segundo, 12 de munição, sem crítico.',
        'Squirrel Blockade: cobrança de 1,5s, 60-90 m/s, 25 de dano, Imprison de 0,8s e 8s de cooldown.',
        'Mammal Bond: 5s de duração e 12s de cooldown, com 100% de velocidade de ataque e 150 m/s sem gravidade.',
        'Tail Bounce: 9m de altura, 8s de cooldown e 25 de vida bônus.',
        'Unbeatable Squirrel Tsunami: 150 de dano, 10s, horda de 300 de HP a 9 m/s, 2800 de energia, esquilos que buscam o inimigo mais próximo após ricochetear.',
        'Squirrel Missile pela página de habilidades: 75 de dano e 20s de cooldown, contra 70 de dano e 15s na ficha do bundle.',
      ],
    },
    {
      id: 'teamup-bundle',
      kind: 'official',
      title: 'Marvel Rivals Team-Up Bundle',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      confidence: 'alta',
      published: '2026-10-12',
      takeaways: [
        'Squirrel Missile (Iron Man, tecla C): míssil teleguiado, 70 de dano, 40 m/s, explosão de 8m e 15s de cooldown na ficha.',
        'Squirrel Missile, efeito aprimorado: usar Squirrel Blockade dispara o míssil simultaneamente.',
        'ESU Alumnus (Spider-Man, tecla C): bomba de teia com 65 de dano, área de 4m, slow de 35% por 3s e 20s de cooldown.',
        'ESU Alumnus, efeito aprimorado: o fluido de teia deixa área pegajosa cujo slow escala para atordoamento.',
      ],
    },
    {
      id: 'wiki-gg',
      kind: 'database',
      title: 'Squirrel Girl — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Squirrel_Girl',
      confidence: 'media',
      published: '2025-11-14',
      takeaways: [
        'Snapshot pré-patch 20261113: registra 110 de dano no Burst Acorn, valor que hoje é 95.',
        'Snapshot pré-patch: registra 50 de dano e 2s de stun no Squirrel Blockade; hoje são 25 de dano e Imprison de 0,8s.',
        'Snapshot pré-patch: registra 15s de cooldown no Mammal Bond; hoje são 12s.',
        'Ainda útil para a mecânica de ricochete em superfícies e para a horda da ultimate com 300 de HP.',
      ],
    },
    {
      id: 'batru-synergy',
      kind: 'database',
      title: 'Squirrel Girl Team-Ups — Batru',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/squirrel-girl',
      confidence: 'alta',
      published: '2026-09-30',
      takeaways: [
        'Snapshot pré-patch 20261113: Squirrel Missile com Iron Man em 48,30% de win rate (4.596 partidas).',
        'Snapshot pré-patch 20261113: ESU Alumnus com Spider-Man em 38,79% de win rate (4.491 partidas).',
        'Snapshot pré-patch: melhores parceiros Peni Parker (51,94%) e Ultron (50,90%).',
        'Snapshot pré-patch: piores parceiros Black Widow (29,20%), Phoenix (29,50%) e Hawkeye (31,94%).',
        'Nenhum desses win rates foi remedido depois do patch, então servem como histórico, não como meta atual.',
      ],
    },
    {
      id: 'marvelrivals-gg',
      kind: 'guide',
      title: 'Marvel Rivals Squirrel Girl Guide — marvelrivals.gg',
      url: 'https://marvelrivals.gg/squirrel-girl-guide',
      confidence: 'media',
      published: '2025-04-26',
      takeaways: [
        'Guia anterior ao patch 20261113: a tese de controle de choke point e de acertar o chão ao lado do alvo continua válida.',
        'Guia anterior ao patch: o combo Blockade mais 2-3 acorns não fecha mais abate sozinho por causa do Imprison de 0,8s.',
        'Guia anterior ao patch: prioridade de alvo sniper, healer, duelista e tanque segue como referência de foco, não como regra fixa.',
        'Registra a dificuldade dela contra Venom, que ainda vale: dive com mobilidade vertical incomoda o acorn em arco.',
      ],
    },
    {
      id: 'blitz-gg',
      kind: 'guide',
      title: 'Marvel Rivals Squirrel Girl Guide — Blitz.gg',
      url: 'https://blitz.gg/marvel-rivals/articles/4iRT9agTdeOCSjImGq61Ax',
      confidence: 'media',
      published: '2025-02-07',
      takeaways: [
        'Registra falloff de 70% a 3m como o pior do jogo: valor pré-patch, hoje o limite é 60%.',
        'Registra que o Squirrel Blockade pode ser carregado por mais velocidade e alcance, o que segue verdadeiro com 60-90 m/s.',
        'Defendia a ultimate apenas em espaço fechado: a mecânica nova de perseguir o inimigo mais próximo após o ricochete tornou essa regra obsoleta.',
      ],
    },
  ],

  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 3, status: 'Completo' },
    { kind: 'database', label: 'Database', count: 2, status: 'Completo' },
    { kind: 'guide', label: 'Guia', count: 2, status: 'Completo' },
    { kind: 'forum', label: 'Fórum', count: 0, status: 'Pendente' },
    { kind: 'video-transcript', label: 'Vídeo/Transcrição', count: 0, status: 'Pendente' },
  ],

  confidenceSummary:
    'Os números vêm da ficha oficial do herói e do balance post Version 20261113 (Season 11), ambos de 2026: Burst Acorn 95 de dano com falloff a 60%, Blockade de 25 de dano com Imprison de 0,8s mais Acorn Rain, Mammal Bond com 12s, Tail Bounce com 25 de vida bônus. Divergências reais registradas: a wiki.gg e o Blitz.gg ainda ensinam 110 de dano, 50 de dano e 2s de stun e 15s de cooldown, todos pré-patch; o Squirrel Missile aparece como 70 de dano e 15s na ficha do bundle e como 75 e 20s na página de habilidades. Os win rates da Batru são snapshot de 2026-09-30, anterior ao patch. Pendente: nenhuma fonte de fórum ou de transcrição de vídeo sobre o kit pós-patch, e nenhuma medição de win rate posterior a 20261113.',
  lastVerified: '2026-11-14',
}
