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
    'Heroína confirmada oficialmente na Season 7.5. A busca direta em wiki.gg não retornou página específica acessível nesta sessão; os valores de kit foram cruzados com a base pública do Fandom, site oficial, MarvelRivals.gg, Mobalytics, Beebom e discussões recentes do Reddit. Pontos corrigidos em 15/05/2026: Cat\'s Cradle recarrega em 10s por carga, Tablet of Destinies gera 0/50/200/500 de Fortune, Turn of Fortune gera 300 de Fortune e Phantom Pursuit devolve 150 ao acertar.',
  coreRead: [
    'Phantom Pursuit é completamente inalvejável — não reduz dano, você literalmente sai do jogo durante o avanço. Isso muda o uso: não é só finalizador, é botão de escapar de ultimates inimigas no meio da luta.',
    'Claw Whip acerta dois ou mais inimigos e custa só 50 de Fortune no total (cobra 150, devolve até 100). Isso transforma ele de "gasto" em "fonte de HP bônus barata" em lutas agrupadas — use antes de entrar, não só para fechar.',
    'A Calling Card reseta com qualquer kill em 10 segundos, não só no alvo marcado, e tem 60m de alcance. O alvo ideal não é o mais perto: é o mais fácil de matar para garantir o reset que abre a cadeia seguinte.',
    'Gilded Deal não é menu decorativo: Chernobog\'s Crystal precisa ser comprado antes do controle, Helm of Hades antes do flanco e Ring of Zona antes da parede. Se você espera a ameaça aparecer para abrir loja, já está atrasado.',
  ],
  systems: [
    {
      name: 'Fortune',
      input: 'Recurso',
      heading: 'Economia antes do dive',
      facts: [
        'A Gata Negra acumula até 1000 de Fortune. Sticky Paws gera +50 por acerto comum, Turn of Fortune gera +300 ao acertar, Phantom Pursuit gera +150 ao acertar e Claw Strike gera +300 durante Calling Card.',
        'Claw Whip custa 150, mas devolve +50 por alvo até +100. Em dois alvos, o custo efetivo cai para 50 Fortune e ainda concede até 50 de HP bônus — use esse comportamento para entrar mais saudável em luta agrupada.',
        'Phantom Pursuit custa 300 e devolve 150 se acertar. O erro é tratá-lo como botão gratuito: ele é barato quando garante kill ou esquiva ultimate, caro quando vira poke sem eliminação.',
        'Morrer remove 50% da Fortune, com dedução mínima de 200. Entrar sem plano de saída não perde só vida, perde a economia que pagaria a próxima relíquia ou o próximo Phantom Pursuit.',
      ],
      meter: [
        { label: 'Feline Fury', value: '+50 por acerto' },
        { label: 'Turn of Fortune', value: '+300 e +50 HP' },
        { label: 'Claw Whip', value: '150 custo / até +100 volta' },
        { label: 'Phantom Pursuit', value: '300 custo / +150 volta' },
      ],
    },
    {
      name: 'Gilded Deal',
      input: 'F',
      facts: [
        'Seis relíquias disponíveis — Tablet of Destinies (100), Faltine Flame Orb (100), Helm of Hades (200), Chernobog\'s Crystal (200), Ring of Zona (200), Mento-Fish (200). Tablet é gamble puro: 0, 50, 200 ou 500 de Fortune.',
        'Chernobog\'s Crystal deve ser comprado ANTES do controle esperado, não depois — a relíquia remove efeitos negativos ao usar, mas não salva uma entrada feita sem preparação.',
        'Faltine Flame Orb revela inimigos próximos se não for destruída. A preparação correta para Calling Card é revelar primeiro, ultar depois; isso evita gastar [key:Q] em alvo fora de ângulo.',
        'Helm of Hades dá invisibilidade e 60% de velocidade por 2s: compre para cruzar visão, não para lutar. Ring of Zona cria portal atravessando parede para o time; em mapas com escada/rampa, a comunidade já trata isso como tech de ângulo, não só fuga.',
        'Mento-Fish cria campo de hipnose que aplica slow, grounded e desativa habilidades de movimento. Compre contra alvos que só sobrevivem por escape vertical ou dash, não contra brawl parado.',
      ],
    },
    {
      name: 'Calling Card',
      input: 'Q',
      facts: [
        'Marca inimigos em linha de visão, dura 10s e permite Pounce em até 60m. Durante o avanço há 50% de redução de dano; não confunda com a inalvejabilidade do Phantom Pursuit.',
        'Claw Strike tem dois cortes: 30 de dano no primeiro e 30 + 20% da vida máxima do alvo no segundo. Isso escala forte contra Vanguard, mas o primeiro alvo ainda deve ser quem morre para abrir reset.',
        'Qualquer eliminação enquanto Calling Card está ativa reseta a duração e os cooldowns de Pounce e Claw Strike. O macete é começar no alvo vermelho/finalizável, não no alvo com maior HP.',
        'Cada Claw Strike gera +300 de Fortune. Uma ultimate bem encadeada deve terminar com economia para comprar relíquia imediatamente ou pagar Phantom Pursuit na saída.',
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
      job: 'Roubar Fortune, preparar relíquia e executar backline sem ficar presa no meio do time inimigo.',
      verdict:
        'Escolha Gata Negra quando você quer flanquear com autonomia e punir alvos isolados. Ela é forte demais com recurso, mas vira presa fácil se entra sem Fortune ou sem saída.',
      playstyle: [
        'Comece a luta roubando Fortune de fora com Turn of Fortune. Esse gancho é o sinal verde: se errou, você espera; se acertou, compra item ou prepara Fortune’s Favor.',
        'Não gaste Cat’s Cradle só para chegar. Ela tem duas cargas, mas cada uma leva 10s para voltar; uma carga deve virar saída, reposicionamento ou dodge de controle.',
        'Fortune’s Favor é sua conversão: Claw Whip para dano em cone e vida bônus quando há vários alvos; Phantom Pursuit para finalizar alvo móvel enquanto você fica inalvejável e volta ao ponto inicial.',
        'No console, a maior dificuldade relatada é abrir loja e escolher relíquia no ritmo da luta. Reduza a decisão antes do engage: entre já sabendo se a próxima compra é Helm, Chernobog, Ring ou Mento-Fish.',
      ],
      priorityKicker: 'Prioridade',
      priorityTitle: 'Ordem de Domínio',
      priorityDescription:
        'O que aprender e priorizar na partida: gerar Fortune, comprar a relíquia certa, executar e sair.',
      upgradePlan: [
        {
          rank: 1,
          input: 'E',
          ability: 'Turn of Fortune',
          label: 'gancho de economia',
          why:
            'Gera +300 de Fortune e +50 de HP bônus em um clique. É o botão que decide se você tem condição de entrar: sem ele, você depende de acertos comuns de +50 para pagar a primeira relíquia.',
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
            'A relíquia certa transforma um dive suicida em pick limpo. Compre Chernobog\'s Crystal ANTES de entrar contra controle, não depois de ficar travada. Compre Faltine Flame Orb antes de ativar Calling Card para revelar rota e alvo.',
          swapWhen:
            'Contra time com muito peel e stuns: Chernobog\'s Crystal. Para flanqueio furtivo: Helm of Hades. Para atravessar parede com o time: Ring of Zona. Para travar mobilidade de heróis que escapam: Mento-Fish. Tablet of Destinies só vale quando você está em 100 de Fortune e aceita o risco de receber 0.',
          sourceIds: [
            'wiki-black-cat',
            'mobalytics-black-cat',
            'dotesports-black-cat',
            'boosting-ground-black-cat',
            'reddit-black-cat-first-impressions',
          ],
        },
        {
          rank: 3,
          input: 'RMB',
          ability: 'Claw Whip',
          label: 'cone de dano e vida bônus',
          why:
            'Acertar dois ou mais inimigos reduz o custo efetivo para 50 de Fortune e gera 25 HP bônus por acerto (até 50). Use antes de entrar em luta agrupada — você sai com mais vida e quase não queima economia.',
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
            'Durante toda a ação você sai do estado alvo — não reduz dano, você fica completamente fora de combate. Custa 300 e devolve 150 ao acertar, então o uso correto é finalizar alvo que vai escapar ou sumir de dano inevitável. Retorna ao ponto inicial, então o risco de overextension cai muito.',
          swapWhen:
            'Guarde para o momento em que a ultimate inimiga ativa ou para o finalizador quando o alvo está com menos de 30% de vida. Custo efetivo de 150 não vale em poke — vale em escapar ou em garantir kill.',
          sourceIds: ['wiki-black-cat', 'marvelrivalsgg-black-cat', 'beebom-black-cat', 'boosting-ground-black-cat'],
        },
        {
          rank: 5,
          input: 'Shift',
          ability: 'Cat\'s Cradle',
          label: 'dash de entrada e saída',
          why:
            'Duas cargas de 15m com recarga de 10s por carga e 50 de dano no caminho. O erro clássico é gastar as duas cargas para entrar e descobrir que a próxima só volta depois que a luta já acabou.',
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
            'Alcance de 60m, 10 segundos de janela, reseta em qualquer kill. Claw Strike soma 30 + 30 + 20% da vida máxima no alvo, então Vanguards recebem mais dano absoluto, mas o primeiro alvo deve ser quem garante o reset. Use Faltine Flame Orb antes para revelar e ative de ponto alto.',
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
            'Cada acerto gera +50 de Fortune. É a fonte de renda entre cooldowns. A passiva Malkin Misfortune aplica Jinx nos alvos acertados, dando chance de anular o bônus de dano crítico quando eles acertam crítico em você — especialmente útil contra hitscan de burst.',
          sourceIds: ['wiki-black-cat', 'mobalytics-black-cat', 'roonby-black-cat'],
        },
      ],
      adaptations: [
        'Contra muito CC: jogue por Turn of Fortune + Chernobog’s Crystal, e só depois entre com Cat’s Cradle.',
        'Contra backline escorregadia: economize para Phantom Pursuit e não gaste Fortune em Claw Whip antes da vida do alvo cair.',
        'Contra time agrupado: use Claw Whip e Mento-Fish para criar caos, mas evite ultar se nenhum alvo frágil estiver realmente finalizável.',
        'Contra mapa com paredes finas ou escadas: planeje Ring of Zona antes do engage. A comunidade já aponta tech de portal em rampa/escada; trate como atalho preparado, não improviso no pânico.',
        'Se estiver no controle, pré-decida a relíquia antes de entrar. O consenso inicial do Reddit é que a loja é clunky em luta rápida; não tente resolver seis opções no meio do burst inimigo.',
      ],
      ultimates: [
        {
          stance: 'Ultimate única',
          name: 'Calling Card',
          bestUse:
            'Caçar alvo frágil já marcado e com rota de reset. O melhor primeiro alvo é um Strategist ou Duelist sem escape, não o tanque mais perto.',
          execution:
            'Ative de terreno alto ou ângulo lateral, escolha alvo em linha de visão, Pounce, Claw Strike e só encadeie se o próximo alvo está baixo ou isolado. Use a cor da marca como leitura: alvo vermelho é candidato a eliminação; alvo branco ainda pede dano prévio.',
          upgradeValue:
            'O recurso real é entrar com Fortune suficiente para seguir com Phantom Pursuit ou Claw Whip depois do primeiro slash, e sair da ultimate com economia para relíquia.',
        },
      ],
      dashGuide: {
        ability: 'Cat\'s Cradle + Phantom Pursuit',
        shortRule:
          'A Gata Negra boa nunca usa todos os movimentos para entrar. Uma parte do kit sempre fica reservada para sumir.',
        mechanics: [
          'Cat\'s Cradle avança 15m, causa 50 de dano no caminho e tem duas cargas com recarga de 10s cada; trate a segunda carga como seguro de vida, não como segundo ataque.',
          'Phantom Pursuit é completamente inalvejável (untargetable) durante toda a ação — você sai do estado de alvo, não apenas recebe menos dano. Retorna ao ponto inicial, tornando overextension muito menos punível se usado corretamente.',
          'Wall climb e double jump permitem staging de ângulo alto ou lateral. A rota "parede → climb → double jump por cima" é a saída padrão quando as duas cargas de Cat\'s Cradle já foram usadas.',
          'Calling Card não é invulnerável no Pounce: o avanço tem 50% de redução de dano. O truque defensivo real é reservar Phantom Pursuit para o dano inevitável e usar Calling Card quando já há alvo finalizável.',
        ],
        drills: [
          'Exercício de geração: abra toda luta com [key:E] no tanque inimigo (alvo fácil de acertar, 300 de Fortune garantidos), wall climb para ângulo lateral, [key:RMB] no suporte exposto. Meta: entrar sempre com 400+ de Fortune.',
          'Exercício de escape com Phantom Pursuit: no treino personalizado, use [key:Shift] para aproximar, melee, [key:RMB] para segurar Fortune\'s Favor até o alvo estar baixo, depois Phantom Pursuit. Observe que você retorna ao ponto de entrada — treine identificar esse ponto de retorno antes de ativar.',
          'Exercício de pré-compra: antes de cada luta importante, identifique a ameaça de CC do time inimigo. Se Mantis ou Doctor Strange estão presentes, compre Chernobog\'s Crystal enquanto ainda está fora de perigo. Medir quando comprar fora de combate versus dentro é o diferencial do nível alto.',
          'Exercício de Calling Card: ative somente quando consegue identificar pelo menos um alvo que pode morrer com Pounce + Claw Strike. Pratique ativar de ponto alto com Faltine Flame Orb já ativa para revelar posição sem line-of-sight.',
          'Exercício de relíquia no controle: no modo treino, escolha uma relíquia antes de cada entrada e execute sem trocar a decisão no meio da luta. A meta é reduzir o tempo de loja a memória muscular, não improvisar no menu.',
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
      abilityLoop: ['Turn of Fortune', 'Gilded Deal', "Cat's Cradle", 'Claw Whip', 'Phantom Pursuit', 'Calling Card'],
      mistakes: [
        "Abrir fight com Cat’s Cradle duplo e descobrir que não sobrou saída.",
        'Comprar relíquia sem olhar a composição inimiga.',
        'Usar Calling Card no alvo mais perto em vez do alvo que pode morrer e resetar a ultimate.',
        'Entrar sem Fortune e tentar vencer só no melee de 275 HP.',
      ],
      evidence: [
        'official-black-cat-season',
        'wiki-black-cat',
        'marvelrivalsgg-black-cat',
        'mobalytics-black-cat',
        'beebom-black-cat',
        'reddit-black-cat-first-impressions',
        'reddit-black-cat-controller',
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
      title: 'Black Cat - Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Black_Cat',
      published: 'acessado em 2026-05-15',
      confidence: 'media',
      takeaways: [
        'Base principal para role Duelist, 275 HP, dificuldade 4 estrelas, Fortune, valores de habilidade, Gilded Deal e Calling Card.',
        'Confirma Fortune máxima 1000, perda de 50% ao morrer com dedução mínima de 200, Turn of Fortune +300, Phantom Pursuit +150, Claw Strike +300 e Tablet of Destinies em 0/50/200/500.',
        'Corrige Cat’s Cradle para 15m, 50 de dano e duas cargas com 10s de recarga por carga.',
        'Confirma team-up Lucky Loan / Gift of Gold com Captain America e White Fox.',
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
        'Registra a leitura visual da marca da ultimate: vermelho indica alvo finalizável; branco indica que ainda falta dano prévio.',
        'Destaca sinergia com Captain America, White Fox, Mantis, Luna Snow e Magneto.',
      ],
    },
    {
      id: 'mobalytics-black-cat',
      kind: 'guide',
      title: 'Marvel Rivals Black Cat Character Guide',
      url: 'https://mobalytics.gg/marvel-rivals/black-cat-guide',
      published: 'acessado em 2026-05-15',
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
        'Lista as relíquias de Gilded Deal e confirma custos: Tablet/Faltine 100; Helm/Chernobog/Ring/Mento-Fish 200.',
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
      id: 'reddit-black-cat-first-impressions',
      kind: 'forum',
      title: 'Black Cat is LIVE: Share Your First Impressions',
      url: 'https://www.reddit.com/r/marvelrivals/comments/1so02tj/black_cat_is_live_share_your_first_impressions/',
      published: '2026-04-17',
      confidence: 'media',
      takeaways: [
        'Comunidade inicial aponta que a personagem exige decisão rápida de relíquia e que a loja aumenta muito a carga mental.',
        'Um relato útil cita uso frequente de Tablet of Destinies e Helm of Hades, combo prático com melee, dash, Turn of Fortune e Claw Whip, além de tech de Ring of Zona em escadas/rampas.',
        'Relatos também destacam que Mento-Fish e Chernobog’s Crystal são difíceis de escolher reativamente; por isso o guia recomenda pré-decidir a relíquia antes do dive.',
      ],
    },
    {
      id: 'reddit-black-cat-controller',
      kind: 'forum',
      title: 'Black Cat is atrocious',
      url: 'https://www.reddit.com/r/MarvelRivalsRants/comments/1sothvg/black_cat_is_atrocious/',
      published: '2026-04-18',
      confidence: 'media',
      takeaways: [
        'Fonte de comunidade usada apenas para ergonomia: jogadores de controle reclamam que loja + recurso + múltiplas habilidades ficam clunky em luta rápida.',
        'Sustenta a recomendação de reduzir decisão durante o combate: escolher a relíquia antes de entrar e não abrir Gilded Deal no pânico.',
        'Não foi usada para valores numéricos nem para promover bug/exploit de cancelamento de animação.',
      ],
    },
    {
      id: 'video-black-cat-pending',
      kind: 'video-transcript',
      title: 'Transcrições de guias em vídeo da Gata Negra',
      url: 'https://www.youtube.com/results?search_query=Marvel+Rivals+Black+Cat+guide',
      published: 'pendente',
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
      status: 'Patch notes oficiais confirmam entrada no roster em 17/04/2026. Página /heroes/ foi acessada, mas o HTML estático não expôs dados numéricos do herói.',
    },
    {
      kind: 'guide',
      label: 'Guias',
      count: 6,
      status: 'Usados para combos, counters, relíquias e leitura de jogo.',
    },
    {
      kind: 'database',
      label: 'Database',
      count: 1,
      status: 'Busca direta por wiki.gg não retornou página específica acessível; Fandom público usado para valores, nomes de habilidades, Fortune e team-up.',
    },
    {
      kind: 'forum',
      label: 'Fórum',
      count: 2,
      status: 'Reddit revisado para consenso inicial: kit sobrecarregado, loja difícil no controle, necessidade de pré-decidir relíquia e tech situacional de Ring of Zona.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos',
      count: 0,
      status: 'Modelo pronto; falta transcrição validada.',
    },
  ],
}
