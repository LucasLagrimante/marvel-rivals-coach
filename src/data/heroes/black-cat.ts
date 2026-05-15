import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const blackCat: HeroGuide = {
  id: 'black-cat',
  name: 'Gata Negra',
  aliases: ['Black Cat', 'Felicia Hardy', 'Felicia Sara Hardy', 'The Master Thief', 'Gata', 'Ladra Mestra'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/black_cat.png'),
  bannerUrl: publicAsset('heroes/banners/black_cat.png'),
  selectionPortraitUrl: publicAsset('heroes/select/black_cat.png'),
  selectionHoverUrl: publicAsset('heroes/select/black_cat_champion.gif'),
  theme: {
    primary: '#d8d1c3',
    primaryRgb: '216, 209, 195',
    secondary: '#c99a44',
    secondaryRgb: '201, 154, 68',
    surface: '#11131a',
    surfaceRgb: '17, 19, 26',
  },
  roles: ['duelist'],
  lastVerified: '2026-05-15',
  confidenceSummary:
    'Heroína confirmada oficialmente na Season 7.5. Valores de kit cruzados com wiki pública, guias públicados e pesquisa ativa pós-lançamento (abril-maio 2026). Mecânicas de inalvejabilidade do Phantom Pursuit, reembolso do Claw Whip e reset de kills da Calling Card confirmadas por múltiplas fontes independentes.',
  coreRead: [
    'Phantom Pursuit é completamente inalvejável — não reduz dano, você literalmente sai do jogo durante o avanço. Isso muda o uso: não é só finalizador, é botão de escapar de ultimates inimigas no meio da luta.',
    'Claw Whip acerta dois ou mais inimigos e custa só 50 de Fortuna no total (cobra 150, devolve 100). Isso transforma ele de "gasto" em "fonte de HP bônus gratuita" em lutas agrupadas — use antes de entrar, não só para fechar.',
    'A Calling Card reseta com qualquer kill em 10 segundos, não só no alvo marcado, e tem 60m de alcance. O alvo ideal não é o mais perto: é o mais fácil de matar para garantir o reset que abre a cadeia seguinte.',
  ],
  systems: [
    {
      name: 'Fortune',
      input: 'Recurso',
      facts: [
        'A Gata Negra acumula até 1000 de Fortuna. Geração por fonte: melee +50, Cat\'s Cradle +150 por acerto, Turn of Fortune +250-300, Phantom Pursuit retorna Fortuna ao acertar.',
        'Claw Whip custa 150 mas reembolsa 100 ao acertar 2 ou mais inimigos — custo efetivo de 50 Fortuna em luta agrupada. Use esse comportamento ativamente para gerar HP bônus sem gastar economia.',
        'Morrer custa parte da Fortuna acumulada. Entrar sem plano de saída não perde só vida, perde o recurso que pagaria a próxima relíquia ou o Phantom Pursuit.',
      ],
    },
    {
      name: 'Gilded Deal',
      input: 'F',
      facts: [
        'Seis relíquias disponíveis — Tablet of Destinies (100), Faltine Flame Orb (100), Helm of Hades (200), Chernobog\'s Crystal (200), Ring of Zona (200), Mento-Fish (200). Tablet é gamble puro: pode dar de 0 a 1000.',
        'Chernobog\'s Crystal deve ser comprado ANTES do CC esperado, não depois — a relíquia limpa efeitos ao reativar, mas não funciona se você já estiver preso sem conseguir apertar.',
        'Faltine Flame Orb marca inimigos através de obstáculos e é a preparação correta para Calling Card: use ela de trás da parede para revelar antes de ativar a ultimate. Mento-Fish grunda voadores e desativa habilidades de movimento — compre contra Namor, Storm, Human Torch.',
      ],
    },
    {
      name: 'Calling Card',
      input: 'Q',
      facts: [
        'Marca todos os inimigos visíveis em até 60m. A ultimate dura 10 segundos e reseta em QUALQUER kill durante a janela — não precisa ser o alvo marcado. Kills também resetam Pounce e Claw Strike individualmente.',
        'Claw Strike causa dano percentual do HP máximo do alvo: Vanguards como Groot recebem mais dano absoluto que qualquer Duelist ou Strategist. A ultimate é mais letal contra tanques cheios de vida, não contra o alvo mais fácil de alcançar.',
        'Cada strike durante a Calling Card gera grande quantidade de Fortuna. Usar a ultimate com 200-300 de Fortuna e sair com 800+ é normal — planeje comprar relíquia imediatamente após a sequência.',
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelist',
      nickname: 'Ladra de Fortuna',
      health: '275 HP',
      difficulty: 'Alta: dive de economia, item e alvo certo',
      job: 'Roubar Fortuna, preparar relíquia e executar backline sem ficar presa no meio do time inimigo.',
      verdict:
        'Escolha Gata Negra quando você quer flanquear com autonomia e punir alvos isolados. Ela é forte demais com recurso, mas vira presa fácil se entra sem Fortuna ou sem saída.',
      playstyle: [
        'Comece a luta roubando Fortuna de fora com Turn of Fortune. Esse gancho é o “sinal verde”: se errou, você espera; se acertou, compra item ou prepara Fortune’s Favor.',
        'Não gaste Cat’s Cradle só para chegar. Ela tem duas cargas, mas recarrega devagar; uma carga deve virar saída, reposicionamento ou dodge de controle.',
        'Fortune’s Favor é sua conversão: Claw Whip para dano em cone e vida bônus quando há vários alvos; Phantom Pursuit para finalizar alvo móvel enquanto você fica inalvejável e volta ao ponto inicial.',
      ],
      priorityKicker: 'Prioridade',
      priorityTitle: 'Ordem de Domínio',
      priorityDescription:
        'O que aprender e priorizar na partida: gerar Fortuna, comprar a relíquia certa, executar e sair.',
      upgradePlan: [
        {
          rank: 1,
          input: 'E',
          ability: 'Turn of Fortune',
          label: 'gancho de economia',
          why:
            'Gera +250-300 de Fortuna e ~75 de HP bônus em um clique. É o botão que decide se você tem condição de entrar: sem ele, você só tem melee de 50 HP.',
          swapWhen:
            'Use no cooldown sempre que possível — 5s de cooldown significa que você pode abrir toda luta com ele. Em alvos difíceis, ganche o tanque para economizar; não arrisque errar em alvo pequeno e perder a janela de entrada.',
          sourceIds: ['wiki-black-cat', 'beebom-black-cat', 'roonby-black-cat'],
        },
        {
          rank: 2,
          input: 'F',
          ability: 'Gilded Deal',
          label: 'loja de relíquias',
          why:
            'A relíquia certa transforma um dive suicida em pick limpo. Compre Chernobog\'s Crystal ANTES de entrar contra Mantis/Doctor Strange, não depois de ser dormida. Compre Faltine Flame Orb antes de ativar Calling Card para revelar inimigos sem line-of-sight.',
          swapWhen:
            'Contra time com muito peel e stuns: Chernobog\'s Crystal. Para flanqueio furtivo: Helm of Hades. Para travar mobilidade de heróis que escapam: Mento-Fish. Tablet of Destinies só vale quando você está em 100 de Fortuna e não consegue gerar mais rapidamente.',
          sourceIds: ['wiki-black-cat', 'mobalytics-black-cat', 'dotesports-black-cat', 'boosting-ground-black-cat'],
        },
        {
          rank: 3,
          input: 'RMB',
          ability: 'Claw Whip',
          label: 'cone de dano e vida bônus',
          why:
            'Acertar dois ou mais inimigos reduz o custo efetivo para 50 de Fortuna e gera 25 HP bônus por acerto (até 50). Use antes de entrar em luta agrupada — você sai com mais vida, não menos.',
          swapWhen:
            'Se há dois alvos ou mais na frente, sempre Claw Whip primeiro. Se o alvo está sozinho e fugindo, pule para Phantom Pursuit.',
          sourceIds: ['wiki-black-cat', 'marvelrivalsgg-black-cat', 'mobalytics-black-cat'],
        },
        {
          rank: 4,
          input: 'RMB/E',
          ability: 'Phantom Pursuit',
          label: 'execução completamente inalvejável',
          why:
            'Durante toda a ação você sai do estado alvo — não reduz dano, você fica completamente fora de combate. Isso tem dois usos: (1) finalizar alvo que vai escapar, (2) escapar de ultimates inimigas no momento que elas ativam. Retorna ao ponto inicial, então o risco de overextension é zero.',
          swapWhen:
            'Guarde para o momento em que a ultimate inimiga ativa ou para o finalizador quando o alvo está com menos de 30% de vida. Custo de 300 não vale em poke — vale em escapar ou em garantir o kill.',
          sourceIds: ['wiki-black-cat', 'marvelrivalsgg-black-cat', 'beebom-black-cat', 'boosting-ground-black-cat'],
        },
        {
          rank: 5,
          input: 'Shift',
          ability: 'Cat\'s Cradle',
          label: 'dash de entrada e saída',
          why:
            'Duas cargas de 15m com cooldown de 8s por carga. Cada acerto gera +150 de Fortuna, então um dive duplo com as duas cargas já gera 300. O erro clássico é gastar as duas cargas para entrar e descobrir que não tem saída.',
          swapWhen:
            'Regra: uma carga de entrada, uma carga reservada. A segunda carga só vai para ofensiva quando Phantom Pursuit já está no cooldown de retorno ou quando Calling Card garante o reset.',
          sourceIds: ['wiki-black-cat', 'mobalytics-black-cat', 'roonby-black-cat'],
        },
        {
          rank: 6,
          input: 'Q',
          ability: 'Calling Card',
          label: 'ultimate de caça com reset em qualquer kill',
          why:
            'Alcance de 60m, 10 segundos de janela, reseta em qualquer kill. Claw Strike causa dano percentual do HP — Vanguards como Groot recebem mais dano absoluto que Strategists. Use Faltine Flame Orb antes para revelar inimigos sem visão direta e ative de ponto alto.',
          swapWhen:
            'Não ative quando nenhum alvo frágil está finalizável. O combo certo: Faltine Flame Orb para revelar → Calling Card de terreno alto → comece no alvo mais fácil de matar para garantir reset → só então persiga Vanguard com vida baixa.',
          sourceIds: ['wiki-black-cat', 'marvelrivalsgg-black-cat', 'beebom-black-cat', 'boosting-ground-black-cat'],
        },
        {
          rank: 7,
          input: 'Melee',
          ability: 'Feline Fury',
          label: 'farm e pressão curta',
          why:
            'Cada acerto gera +50 de Fortuna. É a fonte de renda entre cooldowns. A passive Malkin Misfortune aplica Jinx nos alvos acertados, reduzindo o dano crítico que eles causam contra você — especialmente útil contra Punisher e Hawkeye.',
          sourceIds: ['wiki-black-cat', 'mobalytics-black-cat', 'roonby-black-cat'],
        },
      ],
      adaptations: [
        'Contra muito CC: jogue por Turn of Fortune + Chernobog’s Crystal, e só depois entre com Cat’s Cradle.',
        'Contra backline escorregadia: economize para Phantom Pursuit e não gaste Fortuna em Claw Whip antes da vida do alvo cair.',
        'Contra time agrupado: use Claw Whip e Mento-Fish para criar caos, mas evite ultar se nenhum alvo frágil estiver realmente finalizável.',
      ],
      ultimates: [
        {
          stance: 'Ultimate única',
          name: 'Calling Card',
          bestUse:
            'Caçar alvo frágil já marcado e com rota de reset. O melhor primeiro alvo é um Strategist ou Duelist sem escape, não o tanque mais perto.',
          execution:
            'Ative de terreno alto ou ângulo lateral, escolha alvo em linha de visão, Pounce, Claw Strike e só encadeie se o próximo alvo está baixo ou isolado. Se não matou, saia com dash/relíquia em vez de insistir.',
          upgradeValue:
            'O recurso real é entrar com Fortuna suficiente para seguir com Phantom Pursuit ou Claw Whip depois do primeiro slash.',
        },
      ],
      dashGuide: {
        ability: 'Cat\'s Cradle + Phantom Pursuit',
        shortRule:
          'A Gata Negra boa nunca usa todos os movimentos para entrar. Uma parte do kit sempre fica reservada para sumir.',
        mechanics: [
          'Cat\'s Cradle avança 15m, gera +150 de Fortuna por acerto e tem duas cargas com recarga de 8s cada; trate a segunda carga como seguro de vida, não como segundo ataque.',
          'Phantom Pursuit é completamente inalvejável (untargetable) durante toda a ação — você sai do estado de alvo, não apenas recebe menos dano. Retorna ao ponto inicial, tornando overextension impossível se usado corretamente.',
          'Wall climb e double jump permitem staging de ângulo alto ou lateral. A rota "parede → climb → double jump por cima" é a saída padrão quando as duas cargas de Cat\'s Cradle já foram usadas.',
        ],
        drills: [
          'Exercício de geração: abra toda luta com [key:E] no tanque inimigo (alvo fácil de acertar, 300 de Fortuna garantidos), wall climb para ângulo lateral, [key:RMB] no suporte exposto. Meta: entrar sempre com 400+ de Fortuna.',
          'Exercício de escape com Phantom Pursuit: no treino personalizado, use [key:Shift] para aproximar, melee, [key:RMB] para segurar Fortune\'s Favor até o alvo estar baixo, depois Phantom Pursuit. Observe que você retorna ao ponto de entrada — treine identificar esse ponto de retorno antes de ativar.',
          'Exercício de pré-compra: antes de cada luta importante, identifique a ameaça de CC do time inimigo. Se Mantis ou Doctor Strange estão presentes, compre Chernobog\'s Crystal enquanto ainda está fora de perigo. Medir quando comprar fora de combate versus dentro é o diferencial do nível alto.',
          'Exercício de Calling Card: ative somente quando consegue identificar pelo menos um alvo que pode morrer com Pounce + Claw Strike. Pratique ativar de ponto alto com Faltine Flame Orb já ativa para revelar posição sem line-of-sight.',
        ],
      },
      patterns: [
        {
          title: 'Roubo antes do dive',
          steps: [
            'Comece fora do cone principal da luta.',
            'Acerte Turn of Fortune em alvo fácil.',
            'Compre relíquia ou prepare Fortune’s Favor.',
            'Entre só quando o alvo frágil gastar mobilidade.',
          ],
        },
        {
          title: 'Execução limpa',
          steps: [
            'Staging por parede ou double jump.',
            'Cat’s Cradle para aproximar sem gastar tudo.',
            'Claw Whip se houver dois alvos ou Phantom Pursuit se o alvo está baixo.',
            'Saída imediata com carga restante, invisibilidade ou retorno do Phantom Pursuit.',
          ],
        },
      ],
      mistakes: [
        'Abrir fight com Cat’s Cradle duplo e descobrir que não sobrou saída.',
        'Comprar relíquia sem olhar a composição inimiga.',
        'Usar Calling Card no alvo mais perto em vez do alvo que pode morrer e resetar a ultimate.',
        'Entrar sem Fortuna e tentar vencer só no melee de 275 HP.',
      ],
      evidence: [
        'official-black-cat-season',
        'wiki-black-cat',
        'marvelrivalsgg-black-cat',
        'mobalytics-black-cat',
        'beebom-black-cat',
      ],
    },
  },
  sources: [
    {
      id: 'official-black-cat-season',
      kind: 'official',
      title: 'Marvel Rivals Version 20260417 Patch Notes - Season 7.5 Arrives',
      url: 'https://www.marvelrivals.com/gameupdate/20260415/41548_1296163.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-04-15',
      confidence: 'alta',
      takeaways: [
        'Confirma oficialmente Black Cat como nova heroína da Season 7.5, com chegada em 17 de abril de 2026.',
        'Contextualiza Felicia, Gilded Saint, loja e itens de temporada.',
        'Não detalha todos os valores de habilidade; por isso a parte numérica vem de wiki pública.',
      ],
    },
    {
      id: 'wiki-black-cat',
      kind: 'database',
      title: 'Black Cat - Marvel Rivals Wiki/Fandom',
      url: 'https://marvelrivals.fandom.com/wiki/Black_Cat',
      confidence: 'media',
      takeaways: [
        'Base principal para role, vida, dificuldade, Fortune, valores de habilidade, Gilded Deal e Calling Card.',
        'Lista Fortune, Cat’s Cradle, Turn of Fortune, Phantom Pursuit, passivas e team-up com Captain America e White Fox.',
        'A página ainda marca estratégia como stub, então usei valores dela, não recomendações estratégicas prontas.',
      ],
    },
    {
      id: 'marvelrivalsgg-black-cat',
      kind: 'guide',
      title: 'Marvel Rivals Black Cat Guide',
      url: 'https://marvelrivals.gg/black-cat/',
      author: 'Shodi Madian',
      published: '2026-04',
      confidence: 'media',
      takeaways: [
        'Enfatiza Fortune como sistema central e Phantom Pursuit como ferramenta de finalização.',
        'Recomenda usar a ultimate de ângulo alto, com prioridade em Strategists e Duelists antes de Vanguards.',
        'Destaca sinergia com Captain America, White Fox, Mantis, Luna Snow e Magneto.',
      ],
    },
    {
      id: 'mobalytics-black-cat',
      kind: 'guide',
      title: 'Marvel Rivals Black Cat Character Guide',
      url: 'https://mobalytics.gg/marvel-rivals/black-cat-guide',
      confidence: 'media',
      takeaways: [
        'Define Gata Negra como dive Duelist de alta mobilidade, economia e teto mecânico alto.',
        'Resume o loop como farmar Fortune, comprar Gilded Deal, mergulhar na backline e sair com mobilidade.',
        'Chama atenção para dificuldade contra lutas muito agrupadas.',
      ],
    },
    {
      id: 'beebom-black-cat',
      kind: 'guide',
      title: 'Marvel Rivals Black Cat Guide: How to Play, Best Tips, Tricks and Counters',
      url: 'https://beebom.com/marvel-rivals-black-cat-guide/',
      published: '2026-04',
      confidence: 'media',
      takeaways: [
        'Reforça que ela precisa acumular Fortune antes de executar combos caros.',
        'Diferencia Claw Whip e Phantom Pursuit por situação: dano consistente versus chase/finalização.',
        'Lista counters práticos como Winter Soldier, Hela, Hawkeye e The Punisher.',
      ],
    },
    {
      id: 'dotesports-black-cat',
      kind: 'guide',
      title: 'Marvel Rivals reveals Black Cat’s abilities and first skin for Season 7',
      url: 'https://dotesports.com/marvel/news/marvel-rivals-black-cat-abilities-duelist-skins',
      author: 'Alexandra W',
      published: '2026-04-14',
      confidence: 'media',
      takeaways: [
        'Registra a revelação de NetEase: Duelist ágil com wall climb, double jump, gancho e roubo de Fortune.',
        'Explica a fantasia da personagem como ladra móvel que troca Fortune por relíquias.',
        'Confirma o team-up Lucky Loan com Captain America e White Fox.',
      ],
    },
    {
      id: 'roonby-black-cat',
      kind: 'guide',
      title: 'Black Cat Marvel Rivals Skill Explanation, Guide & How to Play Her',
      url: 'https://roonby.com/2026/04/17/black-cat-marvel-rivals-skill-explanation-guide-how-to-play-her/',
      author: 'Roonby',
      published: '2026-04-17',
      confidence: 'media',
      takeaways: [
        'Confirma o loop de geração de Fortune antes do all-in e reforça Gilded Deal como decisão de item, não botão genérico.',
        'Ajuda a separar Turn of Fortune como abertura segura e Cat’s Cradle como entrada/saída.',
        'Usado apenas como fonte secundária de leitura de habilidade; valores continuam apoiados na base pública.',
      ],
    },
    {
      id: 'boosting-ground-black-cat',
      kind: 'guide',
      title: 'Black Cat Marvel Rivals Guide: Abilities, Combos, Counters',
      url: 'https://boosting-ground.com/marvel-rivals/guides/hero-guides/black-cat-abilities-combos-counters',
      author: 'Boosting Ground',
      published: '2026-04',
      confidence: 'media',
      takeaways: [
        'Lista relíquias de Gilded Deal e destaca Ring of Zona como portal de travessia instantânea.',
        'Reforça o uso de Fortune como economia que precisa existir antes do mergulho na backline.',
        'Usado para sustentar decisões de relíquia e leitura de counters, não para substituir fonte oficial.',
      ],
    },
    {
      id: 'reddit-black-cat-pending',
      kind: 'forum',
      title: 'Discussões de mains da Gata Negra',
      url: 'https://www.reddit.com/r/RivalsCollege/search/?q=Black%20Cat%20guide&restrict_sr=1',
      confidence: 'pendente',
      takeaways: [
        'Slot reservado para consolidar relatos de mains depois de mais tempo de meta.',
        'A primeira versão usa fórum apenas como pendência, para não transformar hype de lançamento em regra fixa.',
        'Próximo enriquecimento deve separar conselhos por rank, mapa e counters.',
      ],
    },
    {
      id: 'video-black-cat-pending',
      kind: 'video-transcript',
      title: 'Transcrições de guias em vídeo da Gata Negra',
      url: 'https://www.youtube.com/results?search_query=Marvel+Rivals+Black+Cat+guide',
      confidence: 'pendente',
      takeaways: [
        'Slot reservado para guias em vídeo com timestamps e transcrição auditável.',
        'Não há transcrição validada nesta carga inicial.',
        'Prioridade futura: capturar rota de combo, ordem de relíquias e uso real de Calling Card em ranked.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Oficial',
      count: 1,
      status: 'Release e entrada no roster confirmados por patch notes.',
    },
    {
      kind: 'guide',
      label: 'Guias/Wiki',
      count: 6,
      status: 'Usados para combos, counters, relíquias e leitura de jogo.',
    },
    {
      kind: 'database',
      label: 'Database',
      count: 1,
      status: 'Base pública usada para valores, nomes de habilidades, Fortune e team-up.',
    },
    {
      kind: 'forum',
      label: 'Fórum',
      count: 0,
      status: 'Pendente: ainda não consolidado em evidência confiável.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos',
      count: 0,
      status: 'Modelo pronto; falta transcrição validada.',
    },
  ],
}
