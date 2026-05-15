import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const magneto: HeroGuide = {
  id: 'magneto',
  name: 'Magneto',
  aliases: ['Max Eisenhardt', 'Erik Lehnsherr', 'Mestre do Magnetismo', 'Mag'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/magneto.png'),
  bannerUrl: publicAsset('heroes/banners/magneto.png'),
  selectionPortraitUrl: publicAsset('heroes/select/magneto.png'),
  selectionHoverUrl: publicAsset('heroes/select/magneto_champion.gif'),
  theme: {
    primary: '#d82f45',
    primaryRgb: '216, 47, 69',
    secondary: '#b9c7d3',
    secondaryRgb: '185, 199, 211',
    surface: '#141822',
    surfaceRgb: '20, 24, 34',
  },
  roles: ['vanguard'],
  lastVerified: '2026-05-15',
  confidenceSummary:
    'Habilidades, HP, cooldowns, valores de dano e Team-Up atual conferidos na página oficial, wiki.gg e balance posts de 2025-11-14/2026-03-20. Guias e Reddit sustentam macetes de bolha, animação cancelada, mira por distância e uso defensivo da ultimate; fontes antigas com Emma/Scarlet Witch foram tratadas como obsoletas.',
  coreRead: [
    'Magneto fica bom quando você para de usar bolha como pânico e começa a usá-la como economia: cada 100 de dano absorvido por Metal Bulwark ou Iron Bulwark vira Iron Ring. Bolhar um dive aliado no começo do burst geralmente entrega 2 anéis instantâneos e libera Mag-Cannon cheio na mesma troca.',
    'Iron Volley parece fraco quando você mira só no corpo. O macete é jogar no fim dos 25m: a área cresce de 1m para 3m, pega canto de cover e ainda entra no cancel Iron Volley → melee → Mag-Cannon cheio → Iron Volley para eliminar 275 HP quando todos os impactos conectam.',
    'Metallic Curtain não tem HP; drena energia a 65/s e regenera a 11/s após 1s de delay. Em vez de segurar [key:Shift], use flashes curtos para cruzar ângulo ou negar projétil específico, mantendo energia para uma segunda janela no mesmo fight.',
    'Meteor M não é “segure até ficar gigante”. Ele absorve projéteis em 15m, escala até 300 de dano e quebra se você for ganancioso demais. Contra fogo rápido, solte antes da barra encher; contra ultimate de projétil, posicione entre a fonte e seu time.',
  ],
  systems: [
    {
      name: 'Iron Ring',
      input: 'Recurso',
      heading: 'Bolha vira pressão',
      facts: [
        'Magneto ganha uma carga de Iron Ring para cada 100 de dano absorvido por Metal Bulwark ou Iron Bulwark. Uma única bolha de 200 de escudo completamente absorvida entrega 2 anéis instantaneamente.',
        'Mag-Cannon consome os anéis: 40 de dano com 1 carga, 65 com 2 e 90 com 3; em carga cheia também causa knockback de 6m — suficiente para kills em beira de mapa como Tokyo 2099.',
        'Loop ofensivo: Mag-Cannon com 3 anéis → imediatamente ativar Iron Bulwark → o dano absorvido recarrega anéis para um segundo Mag-Cannon sem esperar o timer passivo de 3s por carga.',
        'Cancel de animação: Mag-Cannon cancela a recovery animation do Iron Volley. Encadear Iron Volley → Mag-Cannon → Iron Volley acelera o burst e é a base do combo de eliminação de 275 HP.',
      ],
      meter: [
        { label: '1 anel', value: '40 de dano' },
        { label: '2 anéis', value: '65 de dano' },
        { label: '3 anéis', value: '90 + knockback' },
      ],
    },
    {
      name: 'Bulwarks separados',
      input: 'E / F',
      facts: [
        'Desde o balance post de 2025-11-14, Metal Bulwark e Iron Bulwark não compartilham cooldown.',
        'Valores atuais oficiais: Metal Bulwark protege aliado por 200 de escudo, 2.5s, 20m de alcance e 15s de cooldown. Iron Bulwark protege o próprio Magneto por 200 de escudo, 2.5s e 10s de cooldown.',
        'Técnica de stagger: use primeiro a bolha que resolve a ameaça atual e segure a outra para a próxima entrada. Como os cooldowns agora são separados, você pode bolhar um Duelist agressivo e ainda ter Iron Bulwark disponível para o melee que vier punir você.',
        'Ajuste a Targeting Sensitivity do Metal Bulwark no treino até conseguir bolhar o aliado sob foco sem puxar o alvo errado; Allied Health Bars ligado é obrigatório para decidir antes do dano entrar.',
      ],
    },
    {
      name: 'Meteor M',
      input: 'Q',
      facts: [
        'Absorve projéteis inimigos em raio de 15m; a sobrecarga ocorre por contagem de projéteis individuais (limite ~100), não por dano total. Punisher com shotgun chega ao limite em 2-3s — solte cedo contra ele.',
        'Escala de dano: 100 base até 300 a carga máxima (800 de dano absorvido). Raio de explosão: 5m base, até 8m com carga máxima. A versão atual arremessa a 45m/s, buff do balance post de 2026-03-20.',
        'Ordem de prioridade como counter-ult: 1º Iron Man (Invincible Pulse), 2º Hela (barrage), 3º Punisher (fogo sustentado), 4º Star-Lord (Galactic Barrage). Solte em ~70-80% de absorção para garantir o arremesso sem risco de overload.',
        'Depois de ultar, use Magnetic Descent imediatamente para slow-fall a 3.5m/s e reposicionar em cobertura. Cair no aberto sem cooldowns disponíveis é eliminação certa.',
      ],
    },
    {
      name: 'Royal Blade',
      input: 'C - Team-Up',
      facts: [
        'Com Gambit como âncora, Magneto recebe Royal Blade pelo Team-Up Explosive Entanglement.',
        'Royal Blade troca Iron Volley por Ace Greatsword por 10s, com explosão e dano secundário após curto atraso.',
        'Use como janela de pressão quando seu time precisa atravessar choke, não como substituto da economia de Iron Ring.',
      ],
    },
  ],
  roleGuides: {
    vanguard: {
      key: 'vanguard',
      label: 'Vanguard',
      nickname: 'Rei da bolha econômica',
      health: '650 HP',
      difficulty: 'Média: fácil sobreviver, difícil gastar cooldown no alvo certo',
      job: 'Controlar o midrange, converter foco inimigo em Iron Ring e negar ultimates de projétil.',
      verdict:
        'Escolha Magneto quando seu time precisa de front estável, proteção para dive/Strategist e resposta direta a ultimates de projétil. Evite quando o lobby inimigo é puro melee rápido e seu time não quer jogar perto de cobertura.',
      playstyle: [
        'Abra a luta no midrange, não colado. Iron Volley tem explosão maior no fim do alcance, então atire em chão, parede e canto de cover para forçar movimento sem se expor.',
        'Metal Bulwark é melhor no aliado que está prestes a receber dano, não no aliado que já saiu vivo. Bolhar Magik, Wolverine, Venom ou um Strategist sendo diveado transforma foco inimigo em Mag-Cannon para você.',
        'Use Iron Bulwark quando o melee entrou em você ou quando precisa completar o terceiro anel. Se gastar [key:F] cedo só por medo, você perde o botão que impede Wolverine/Thor/Iron Fist de te atravessar.',
      ],
      priorityKicker: 'Economia',
      priorityTitle: 'Ordem de decisão',
      priorityDescription:
        'Magneto não tem árvore de upgrade: a prioridade é decidir qual cooldown vira espaço, qual bolha vira anel e quando [key:Q] fica guardado.',
      upgradePlan: [
        {
          rank: 1,
          input: 'E',
          ability: 'Metal Bulwark',
          label: 'bolha no alvo focado',
          why:
            'É o botão que ganha a próxima troca: salva o aliado que está criando espaço e converte o dano que ele tomaria em Iron Rings para seu Mag-Cannon.',
          swapWhen:
            'Se o dive inimigo entrou primeiro na sua cara, use Iron Bulwark antes e guarde [key:E] para o Strategist que será o próximo alvo.',
          sourceIds: ['official-magneto', 'official-magneto-s5', 'gamesgg-magneto', 'mobalytics-magneto'],
        },
        {
          rank: 2,
          input: 'RMB',
          ability: 'Mag-Cannon',
          label: 'gasto dos anéis',
          why:
            'Com 3 anéis, o knockback interrompe avanço, empurra melee para fora e cria tiro grátis de Iron Volley. O dano não tem cooldown; o limite é sua economia.',
          swapWhen:
            'Com 1 anel, segure se nenhum alvo está finalizável. Com 3 anéis, gaste rápido antes de desperdiçar nova absorção.',
          sourceIds: ['official-magneto', 'gamesgg-magneto', 'reddit-magneto-guide'],
        },
        {
          rank: 3,
          input: 'Shift',
          ability: 'Metallic Curtain',
          label: 'avanço e negação de projétil',
          why:
            'A cortina deixa você atravessar dano de projétil por tempo curto e sem vida de escudo para quebrar. Use para cruzar ângulo e negar burst visível, não para ficar parado fingindo ser parede.',
          swapWhen:
            'Contra melee ou beam, a cortina perde valor. Troque para jogo de cover, Iron Bulwark e Mag-Cannon de afastamento.',
          sourceIds: ['official-magneto', 'mobalytics-magneto', 'reddit-magneto-guide'],
        },
        {
          rank: 4,
          input: 'LMB',
          ability: 'Iron Volley',
          label: 'controle de espaço',
          why:
            'O tiro lento parece fraco quando você mira só no corpo. Ele vira ferramenta de lane quando explode perto de cover e obriga suporte/DPS a sair do canto.',
          swapWhen:
            'Contra alvo voador ou pequeno, mire onde ele vai estar no fim dos 25m, não onde ele está agora.',
          sourceIds: ['official-magneto', 'gamesgg-magneto', 'dexerto-magneto'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Meteor M',
          label: 'counter-ult',
          why:
            'Negar Iron Man, Hela, Punisher ou Star-Lord costuma ganhar mais luta do que abrir com [key:Q] no começo. A ultimate pune o inimigo por continuar atirando.',
          swapWhen:
            'Se nenhuma ultimate de projétil está disponível, use como engage acima do objetivo e solte antes de sobrecarregar.',
          sourceIds: ['official-magneto', 'official-magneto-s7', 'gamesgg-magneto', 'reddit-magneto-guide'],
        },
        {
          rank: 6,
          input: 'C',
          ability: 'Royal Blade',
          label: 'Team-Up com Gambit',
          why:
            'Quando disponível, adiciona pressão de espada explosiva por 10s. É excelente para choke e burst em alvo preso por knockback, mas não substitui bolha bem colocada.',
          swapWhen:
            'Se não há Gambit no time, ignore esse plano e jogue pelo loop base de bolha, anel e cannon.',
          sourceIds: ['official-magneto', 'official-magneto-s5'],
        },
      ],
      adaptations: [
        'Contra Wolverine, Thor e Iron Fist: não confie na Metallic Curtain. Guarde Iron Bulwark para o contato e use Mag-Cannon cheio para quebrar o avanço.',
        'Contra Iron Man, Hela, Punisher e Star-Lord: segure Meteor M até a ultimate deles aparecer; soltar [key:Q] primeiro remove sua resposta mais valiosa.',
        'Com dive aliado: Metal Bulwark no aliado que entrou fundo antes do burst inimigo, depois Mag-Cannon no alvo que ele está tentando finalizar.',
        'Contra poke longo: jogue em cover e use Iron Volley no chão/canto; Magneto perde valor quando tenta duelo de mira longa no aberto.',
      ],
      ultimates: [
        {
          stance: 'Counter-ult',
          name: 'Meteor M',
          bestUse:
            'Responder ultimates de projétil ou fogo sustentado. Iron Man, Hela, Punisher e Star-Lord alimentam o meteoro se você posiciona o raio de absorção na frente da ameaça.',
          execution:
            'Ative entre a fonte de projéteis e seu time, observe a carga e solte antes de sobrecarregar. Depois use Magnetic Descent para cair em cobertura, não no centro do objetivo.',
          upgradeValue:
            'O patch de 2026-03-20 aumentou a velocidade do projétil para 45m/s, então o arremesso pune melhor quem demora a sair da área.',
        },
        {
          stance: 'Engage situacional',
          name: 'Meteor M',
          bestUse:
            'Iniciar quando o inimigo precisa escolher entre parar de atirar e deixar seu time andar, ou atirar e carregar seu dano.',
          execution:
            'Suba sobre o objetivo com seu time pronto para avançar. Solte com carga segura em vez de tentar o máximo e perder tudo por overload.',
          upgradeValue:
            'Vale menos que o counter-ult se o inimigo ainda tem ultimates de projétil disponíveis.',
        },
      ],
      dashGuide: {
        ability: 'Bolha -> anel -> Mag-Cannon',
        shortRule:
          'A coisa que Magneto precisa dominar é prever quem vai tomar dano nos próximos 2 segundos.',
        mechanics: [
          'Metal Bulwark protege aliado a 20m por 2.5s; Iron Bulwark protege você por 2.5s.',
          'Cada 100 de dano absorvido vira um Iron Ring. Tente terminar a troca com 2 ou 3 anéis, não com bolha gasta e cannon vazio.',
          'Mag-Cannon cheio empurra 6m. Use o empurrão para cancelar pressão melee, jogar alvo para fora de cura ou garantir Iron Volley logo depois.',
        ],
        drills: [
          'Antes de cada fight, rastreie mentalmente: “quem tem ultimate de projétil e quando foi a última vez que usaram?”. Iron Man/Hela recarregam em ~2min. Esse dado decide se [key:Q] fica guardado ou pode ser usado como engage.',
          'Treine o toggle do Metallic Curtain: press → release imediato. Cronometre 1.5s de bloqueio máximo vs segurar sem parar. O objetivo é dois usos por fight, não um uso longo.',
          'Pratique o combo Iron Volley → [key:Melee] → Mag-Cannon (3 anéis) → Iron Volley no treino livre. Esse é o único combo que elimina 275 HP sem depender de aliados.',
          'Contra melee: espere o leap/entrada conectar, [key:F] em você, passo para trás, Mag-Cannon para quebrar distância. Depois ative [key:F] imediatamente se o melee insistir — o Mag-Cannon gera anéis rápido via Iron Bulwark.',
          'Nas configurações, ajuste Targeting Sensitivity do Metal Bulwark até conseguir selecionar o alvo sob foco e ative Allied Health Bars. Essas duas configurações eliminam erros de bolhar o alvo errado em fights caóticos.',
        ],
      },
      patterns: [
        {
          title: 'Entrada de midrange',
          steps: [
            'Iron Volley no chão perto do cover inimigo (explosão maior a 20-25m).',
            'Metallic Curtain em toggle rápido para cruzar o ângulo — não segure, ative e desative para economizar energia.',
            'Metal Bulwark no aliado que avançou com você antes do burst inimigo, não depois.',
            'Mag-Cannon com 3 anéis no alvo que gastou mobilidade. Se mapa tem borda (Tokyo 2099), posicione o knockback de 6m para jogar fora da plataforma.',
          ],
        },
        {
          title: 'Combo de eliminação (275 HP)',
          steps: [
            'Iron Volley direto no alvo.',
            '[key:Melee] imediato — a maioria dos jogadores ignora esse dano extra.',
            'Mag-Cannon com 3 anéis (cancela a recovery do Iron Volley).',
            'Iron Volley final para concluir. Total: suficiente para heróis de 275 HP.',
          ],
        },
        {
          title: 'Peel de backline',
          steps: [
            'Deixe o diver gastar entrada no seu Strategist.',
            'Metal Bulwark no Strategist, não em você — o dano absorvido gera anéis.',
            'Iron Volley no chão para forçar desvio do diver.',
            'Mag-Cannon cheio para empurrar o diver para fora da execução. Se chegou ao Mag-Cannon → Iron Bulwark em você, você gera segundo Mag-Cannon rápido se ele insistir.',
          ],
        },
        {
          title: 'Counter-ult limpo',
          steps: [
            'Guarde Meteor M quando o inimigo tem ultimate de projétil. Rastrear cooldowns (~2min de recarga para Iron Man/Hela).',
            'Ative posicionado entre a fonte de projéteis e seu time, não atrás dos aliados.',
            'Contra Punisher, solte em 2-3s. Contra Iron Man ou Hela, pode esperar 70-80% de carga.',
            'Use Magnetic Descent imediatamente após o arremesso para slow-fall em cobertura.',
          ],
        },
      ],
      abilityLoop: ['Metal Bulwark', 'Iron Bulwark', 'Mag-Cannon', 'Metallic Curtain', 'Meteor M', 'Royal Blade'],
      mistakes: [
        'Usar Metal Bulwark tarde, quando o aliado já saiu do foco e ninguém vai carregar seus anéis.',
        'Gastar Mag-Cannon com 1 anel em tanque cheio enquanto um Duelist está prestes a entrar na sua backline.',
        'Segurar Metallic Curtain pressionada — ela drena 65 energy/s independente de quantos projéteis entram. Aprender o modo toggle rápido dobra o número de usos no mesmo fight.',
        'Abrir Meteor M sem rastrear se Iron Man, Hela, Punisher ou Star-Lord ainda guardam ultimate. A janela de recharge é ~2min; em plat+ vale comunicar via ping quando [key:Q] inimigo sumiu.',
        'Cair depois do [key:Q] no aberto. Usar Magnetic Descent para slow-fall em 3.5m/s é obrigatório. Cair sem cooldowns no meio do time inimigo é eliminação automática.',
        'Não usar melee entre Iron Volleys. O dano de melee ignorado por maioria dos jogadores é diferença entre 275 HP e 250 HP em duelos apertados.',
        'Bolhar aliado de HP cheio em posição segura "por precaução". Cada bolha desperdiçada é 12-15s de cooldown sem possibilidade de reação no próximo engage real.',
      ],
      evidence: [
        'official-magneto',
        'official-magneto-s5',
        'official-magneto-s7',
        'gamesgg-magneto',
        'mobalytics-magneto',
        'reddit-magneto-guide',
      ],
    },
  },
  sources: [
    {
      id: 'official-magneto',
      kind: 'official',
      title: 'MAGNETO - Marvel Rivals Hero Page',
      url: 'https://www.marvelrivals.com/20241123/41360_1195655.html',
      author: 'Marvel Rivals / NetEase',
      published: '2024-11-23',
      confidence: 'alta',
      takeaways: [
        'Fonte principal para role, vida, velocidade, Iron Volley, Meteor M, Metallic Curtain, Bulwarks, Mag-Cannon, Magnetic Descent e Royal Blade.',
        'Confirma Iron Ring: bolhas concedem 1 carga para cada 100 de dano absorvido.',
        'Valores atuais exibidos: 650 HP, Metal Bulwark 200 de escudo/15s, Iron Bulwark 200 de escudo/10s e Meteor M a 45m/s.',
      ],
    },
    {
      id: 'official-magneto-s5',
      kind: 'official',
      title: 'Marvel Rivals Version 20251114 Balance Post',
      url: 'https://www.marvelrivals.com/balancepost/20251112/41667_1270634.html',
      author: 'Marvel Rivals / NetEase',
      published: '2025-11-12',
      confidence: 'alta',
      takeaways: [
        'Separou os cooldowns de Metal Bulwark e Iron Bulwark, mudando o ritmo defensivo do Magneto.',
        'Reduziu o valor das duas bolhas para 200, tornando timing mais importante que spam.',
        'Adicionou Explosive Entanglement: Gambit concede Royal Blade ao Magneto.',
      ],
    },
    {
      id: 'official-magneto-s7',
      kind: 'official',
      title: 'Marvel Rivals Version 20260320 Balance Post',
      url: 'https://www.marvelrivals.com/balancepost/20260316/41667_1291227.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-03-17',
      confidence: 'alta',
      takeaways: [
        'Ajustou cooldowns atuais: Metal Bulwark 15s e Iron Bulwark 10s.',
        'Aumentou a velocidade do projétil de Meteor M de 30m/s para 45m/s.',
        'Contextualiza Magneto como personagem de lane pressure e ultimate mais letal.',
      ],
    },
    {
      id: 'wiki-magneto',
      kind: 'database',
      title: 'Magneto - The Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Magneto',
      published: '2026-05',
      confidence: 'media',
      takeaways: [
        'Confirma Magneto como Vanguard de 650 HP e lista Iron Volley, Mag-Cannon, Metallic Curtain, Metal Bulwark, Iron Bulwark, Meteor M, Magnetic Descent e Royal Blade.',
        'Registra Team-Ups antigos como indisponíveis na temporada atual e mantém Royal Blade via Explosive Entanglement com Gambit como Team-Up ativo.',
        'A página ainda exibe alguns valores históricos de cooldown em texto corrido; a página oficial e balance posts foram priorizados para números atuais.',
      ],
    },
    {
      id: 'gamesgg-magneto',
      kind: 'guide',
      title: 'Magneto Marvel Rivals Guide: Master the Master of Magnetism',
      url: 'https://games.gg/marvel-rivals/guides/magneto-marvel-rivals-guide/',
      author: 'Mostafa Salem',
      published: '2026-03-25',
      confidence: 'media',
      takeaways: [
        'Define o personagem por bubble economy, counter-ult timing e controle de midrange.',
        'Recomenda tratar Meteor M como counter-ult primeiro, engage segundo.',
        'Destaca Wolverine como matchup ruim e orienta usar bolha própria, knockback e kite para o time.',
      ],
    },
    {
      id: 'mobalytics-magneto',
      kind: 'guide',
      title: 'Marvel Rivals Magneto Character Guide',
      url: 'https://mobalytics.gg/marvel-rivals/magneto-guide',
      published: '2026-05',
      confidence: 'media',
      takeaways: [
        'Enfatiza rotação por cover e midrange como distância ideal do Magneto.',
        'Recomenda combinar [key:Shift], [key:E], [key:F] e cover para frontlinar, com decisões seletivas por causa dos gaps entre escudos.',
        'Observa que bolhar divers/flankers pode habilitar jogadas de alto valor.',
        'Documenta cancel de animação do Iron Volley com melee, Team-Up sword e Mag-Cannon, além do combo Iron Volley → melee → Mag-Cannon cheio → Iron Volley para eliminar 275 HP.',
        'Contém seção de Team-Up antiga com Emma Frost/Magnetic Resonance; essa parte foi descartada porque o balance post oficial de 2025-11-14 removeu esse Team-Up.',
      ],
    },
    {
      id: 'dexerto-magneto',
      kind: 'guide',
      title: 'Marvel Rivals Magneto guide: Abilities, ultimate, tips, more',
      url: 'https://www.dexerto.com/gaming/marvel-rivals-magneto-guide-2837818/',
      author: 'Jeremy Gan',
      published: '2025-02-21',
      confidence: 'em disputa',
      takeaways: [
        'Ajuda a explicar Magneto como Vanguard que define tempo e controla espaço.',
        'Reforça uso de Mag-Cannon cheio para knockback e burst.',
        'Números, cooldowns e Team-Up de Scarlet Witch estão defasados por patches posteriores; fonte usada apenas para macro, não para valores atuais.',
      ],
    },
    {
      id: 'reddit-magneto-guide',
      kind: 'forum',
      title: 'The Idiots Guide to Magneto',
      url: 'https://www.reddit.com/r/marvelrivals/comments/1itf760/the_idiots_guide_to_magneto/',
      author: 'Noninstagramnormie',
      published: '2025-02',
      confidence: 'em disputa',
      takeaways: [
        'Relato de jogador detalha Mag-Cannon como ferramenta ofensiva e defensiva contra melee, além do combo com Iron Volley.',
        'Reforça Meteor M como resposta a ultimates de projétil e alerta para overcharge contra fogo rápido.',
        'Alguns valores e team-ups estão antigos; usei apenas padrões mecânicos que seguem válidos.',
      ],
    },
    {
      id: 'boosting-ground-magneto',
      kind: 'guide',
      title: 'Marvel Rivals: Magneto Guide - Master of Metal',
      url: 'https://boosting-ground.com/marvel-rivals/guides/hero-guides/magneto-guide',
      author: 'Joy',
      published: '2025-06-05',
      confidence: 'em disputa',
      takeaways: [
        'Confirma Metallic Curtain como energia (65/s de dreno, 11/s de regeneração após 1s delay), não HP.',
        'Reforça o uso de Metallic Curtain em toggle/flash curto, Magnetic Descent após Meteor M e mira de Iron Volley no sweet spot de 20-25m.',
        'Alguns trechos estão defasados: ainda citam cooldown compartilhado de 12s e Team-Up com Emma Frost. Esses dados foram ignorados em favor das fontes oficiais atuais.',
        'Confirma que Meteor M escala de 100 base a 300 de dano máximo (800 dano absorvido), raio 5m-8m.',
      ],
    },
    {
      id: 'video-magneto-pending',
      kind: 'video-transcript',
      title: 'Transcrições de guias em vídeo do Magneto',
      url: 'https://www.youtube.com/results?search_query=Marvel+Rivals+Magneto+guide',
      confidence: 'pendente',
      takeaways: [
        'Slot reservado para vídeos de mains, VOD review e coach review com timestamps.',
        'Nenhuma transcrição auditável foi processada nesta carga.',
        'Próximo enriquecimento deve validar exemplos de counter-ult e bolha em dive coordenado.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Oficial',
      count: 3,
      status: 'Página oficial e balance posts recentes usados para valores atuais.',
    },
    {
      kind: 'database',
      label: 'Wiki/Database',
      count: 1,
      status: 'wiki.gg verificado para roster, lista de habilidades e Team-Ups ativos/inativos; valores atuais priorizados pela página oficial.',
    },
    {
      kind: 'guide',
      label: 'Guias',
      count: 4,
      status: 'Games.gg, Mobalytics, Dexerto e Boosting Ground usados para macetes, combos, counters e leitura de midrange; trechos defasados foram descartados.',
    },
    {
      kind: 'forum',
      label: 'Fórum',
      count: 1,
      status: 'Usado com cautela para padrões práticos, não para números defasados.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos',
      count: 0,
      status: 'Pendente: falta transcrição validada com timestamps.',
    },
  ],
}
