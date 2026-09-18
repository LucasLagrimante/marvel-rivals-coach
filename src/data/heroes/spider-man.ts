import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const spiderMan: HeroGuide = {
  id: 'spider-man',
  name: 'Homem-Aranha',
  aliases: ['Spider-Man', 'Spiderman', 'Peter Parker', 'Spidey', 'Aranha', 'Webhead', 'Amigão da Vizinhança'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/spider_man.png'),
  bannerUrl: publicAsset('heroes/banners/spider_man.png'),
  selectionPortraitUrl: publicAsset('heroes/select/spider_man.png'),
  selectionHoverUrl: publicAsset('heroes/select/spider_man_champion.gif'),
  selectionHoverFit: { scale: 1.3, x: 12.1, y: -19.6 },
  theme: {
    primary: '#e5313e',
    primaryRgb: '229, 49, 62',
    secondary: '#5ec7ff',
    secondaryRgb: '94, 199, 255',
    surface: '#11151f',
    surfaceRgb: '17, 21, 31',
  },
  roles: ['duelist'],
  lastVerified: '2026-09-17',
  confidenceSummary:
    'Valores atuais conferidos na página oficial do herói, no balance post de 2026-05-15 e no balance post da Temporada 10 (11/09/2026). Fandom foi usado como database secundário porque a página wiki.gg direta não ficou acessível via navegação nesta sessão. Guias e Reddit foram usados apenas para execução, disciplina de cooldown, configurações e counterplay. Desde a reformulação de Team-Ups da Temporada 9, os dois loadouts do Aranha são Symbiote Bond (Venom) e Parker Power-Up (Peni Parker); a menção antiga a Inferno Blast foi descartada.',
  coreRead: [
    'O tracer muda a física do seu [key:E]: sem Spider-Tracer, Get Over Here puxa o alvo; com Spider-Tracer, você se puxa até ele com chute de 55. Use isso como escolha tática, não como automático: alvo isolado sem tracer pode ser puxado para sua equipe; suporte marcado vira entrada de pick.',
    'O dano real vem de gastar o tracer na coisa certa. Web-Cluster aplica 30 + marca de 3s; Spider-Power ou Amazing Combo consomem a marca para +45. Get Over Here marcado NÃO consome o tracer, então a janela forte é [key:RMB] → [key:E] → [key:F] antes de a marca expirar.',
    'Entre com duas cargas de Web-Swing ou não entre. As 3 cargas recarregam em 6s cada; gastar todas para chegar transforma 250 HP em morte certa. Use Wall Crawl, Thwip and Flip e ângulo alto para chegar sem gastar a carga de saída.',
    'Nenhum dos dois Team-Ups deve justificar dive sem fuga. Com Venom, Symbiote Bond vira spikes explosivos com knockback e tendrils Touch of Klyntar que prendem e drenam; com Peni Parker, Parker Power-Up devolve todas as cargas de Web-Cluster quando a bomba estoura em você e, aprimorado, converte a detonação dos tracers em vida bônus. São recursos de reinício: entram quando a primeira janela falha.',
  ],
  teamUps: {
    summary:
      'Parker Power-Up é o padrão solo (vida bônus e recarga de teias); Symbiote Bond só compensa quando há Venom no time para os tendrils contínuos. A troca é livre na sala de spawn.',
    recommended: 'Parker Power-Up',
    recommendedReason:
      'O Aranha vive de entrar e sair, e Parker Power-Up ataca exatamente isso: a detonação dos tracers aprimorados gera vida bônus, e a bomba recarrega todas as cargas de Web-Cluster quando estoura em você, devolvendo a janela de fuga. A Temporada 10 cortou o cooldown de 15s para 10s e as partidas medidas colocam a dupla com Peni bem à frente. O guia Gamelevate recomenda Symbiote Bond — a divergência se resolve pelo parceiro: sem Venom, Parker Power-Up entrega mais valor garantido.',
    options: [
      {
        name: 'Symbiote Bond',
        partner: 'Venom',
        partnerRole: 'Vanguarda',
        input: 'C',
        baseEffect:
          'Venom compartilha parte do simbionte: o Aranha converte a massa em spikes explosivos que causam dano e empurram (knockback) os inimigos próximos.',
        enhancedEffect:
          'Com Venom no time, surgem tendrils Touch of Klyntar adicionais que prendem e causam dano contínuo nos inimigos, além do efeito base.',
        bestFor:
          'Dive coordenado com Venom ou quando o time precisa de CC e knockback em área para quebrar formação. Perde muito valor sem o parceiro.',
        easySetup:
          'Venom como Vanguarda de dive. Sem ele o base ainda dá burst e empurra, mas o efeito fica raso para ocupar uma tecla.',
        iconUrl: publicAsset('teamups/spider-man-symbiote-bond-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/spider-man-symbiote-bond-partner.png'),
      },
      {
        name: 'Parker Power-Up',
        partner: 'Peni Parker',
        partnerRole: 'Vanguarda',
        input: 'C',
        baseEffect:
          'Peni manda uma Sticky Spider-Bomb: arme e arremesse antes do timer para explodir, causar dano e aplicar Spider-Tracer nos atingidos. Se não arremessar a tempo, ela explode no próprio Aranha e recarrega todas as cargas de Web-Cluster.',
        enhancedEffect:
          'Com Peni Parker no time, os Spider-Tracers aplicados por Web-Cluster ficam aprimorados: detoná-los gera vida bônus para o Aranha.',
        bestFor:
          'Padrão solo no geral: sustentação no dive, mais vida efetiva e recarga de teias para manter o ciclo de combo mesmo quando a entrada falha.',
        easySetup:
          'Peni Parker na vanguarda — e mesmo sem ela o item já aplica marca extra e devolve Web-Cluster.',
        iconUrl: publicAsset('teamups/spider-man-parker-power-up-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/spider-man-parker-power-up-partner.png'),
      },
    ],
    sourceIds: ['official-teamups', 'gamelevate-teamups', 'batru-spider-man', 'patch-s10-spider-man'],
  },
  systems: [
    {
      name: 'Spider-Tracer',
      input: 'RMB',
      heading: 'A tag decide se você entra ou puxa',
      facts: [
        'Web-Cluster tem 5 cargas, recarrega uma carga a cada 2s, causa 30 de dano e aplica Spider-Tracer por 3s.',
        'Spider-Tracer adiciona 45 de dano quando consumido por Spider-Power ou Amazing Combo — mas Get Over Here NÃO consome o tracer, permitindo usar o chute de entrada e ainda ter o bônus intacto para Amazing Combo logo em seguida.',
        'Get Over Here muda completamente quando o alvo está marcado: em vez de puxar o inimigo por 20m e 25 de dano, o Homem-Aranha se puxa até ele por até 24m com chute voador de 55 de dano. Remapear a ação de puxar ajuda a escolher entre se comprometer no alvo marcado ou puxar alguém para sua equipe.',
      ],
      meter: [
        { label: 'Sem tracer', value: 'puxe o alvo para fora' },
        { label: 'Com tracer', value: 'você voa até ele' },
        { label: 'Após o hit', value: 'saia ou reinicie' },
      ],
    },
    {
      name: 'Web-Swing',
      input: 'Shift',
      facts: [
        'Web-Swing tem 3 cargas, 30m de comprimento máximo e 6s de recarga por carga. Nunca inicie um dive com menos de 2 cargas disponíveis.',
        'A primeira carga cria ângulo ou staging, a segunda fecha ou corrige a rota durante a briga, e a terceira fica reservada para saída — gastar as três para chegar é a causa número 1 de morte evitável no Homem-Aranha.',
        'Desative "Automatic Swing" e ative "Hold to Swing" nas configurações — o swing automático impede zipar para o chão e tira o controle preciso de alinhamento. "Hold to Wall Crawl" evita grudar acidentalmente em paredes durante combate.',
      ],
    },
    {
      name: 'Spectacular Spin',
      input: 'Q',
      facts: [
        'Ultimate em esfera de 8m por 2,4s, com 250 de vida bônus, slow de 3% por hit, stun de 1,5s após 20 hits e custo de 2.800 de energia.',
        'O balance post de 2026-05-12 aumentou o dano de 13,6 para 15 por hit, total de 408 para 450 no patch 2026-05-15.',
        'Mesmo buffada, ela é melhor em alvo frágil/backline já danificada do que em Vanguard cheio ou time com ultimate defensiva pronta.',
      ],
    },
    {
      name: 'Team-ups ativos',
      input: 'C - Team-Up',
      facts: [
        'Os dois Team-Ups do Aranha na Temporada 10 dividem o [key:C]: Symbiote Bond (parceiro Venom) e Parker Power-Up (parceira Peni Parker). Só um fica equipado por partida, e a troca é livre na sala de spawn.',
        'Symbiote Bond: o Aranha converte o simbionte compartilhado em spikes explosivos que causam dano e knockback em área; com Venom no time, tendrils Touch of Klyntar prendem e causam dano contínuo nos inimigos atingidos.',
        'Parker Power-Up: a Sticky Spider-Bomb da Peni tem timer curto — arremessada a tempo, aplica Spider-Tracer. Se estourar no próprio Aranha, recarrega TODAS as cargas de Web-Cluster; com Peni no time, detonar tracers de Web-Cluster gera vida bônus. Cooldown de 10s desde a Temporada 10.',
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelista',
      nickname: 'Dive de tracer',
      health: '250 HP',
      difficulty: 'Muito alta: mecânica, alvo e cooldown precisam alinhar',
      job: 'Punir alvo isolado, forçar peel da backline e sair antes que controle ou cura desfaçam o combo.',
      verdict:
        'Escolha Homem-Aranha quando o inimigo deixa suportes/Duelists jogarem separados ou quando seu time já pressiona vida para você finalizar. Evite insistir contra triplo suporte, muito stun ou backline agrupada em torno de Namor/Mantis/Invisible Woman.',
      playstyle: [
        'Antes de entrar, pergunte qual cooldown inimigo ainda te mata. Se Mantis tem sleep, Invisible Woman tem push ou Luna tem freeze, sua primeira entrada deve baitar esse botão, não morrer tentando clipar combo de treino.',
        'A entrada limpa costuma ser Web-Swing por cima ou lateral, Web-Cluster para marcar, Get Over Here no alvo marcado e Amazing Combo no primeiro frame possível. O follow-up muda conforme distância, vida e cura recebida pelo alvo.',
        'Se o alvo sobreviveu e saiu do alcance, não force melee no chão. Reaplique Web-Cluster, use Web-Swing/zip para o pé do alvo, ou suma e reinicie com cooldowns em vez de virar 250 HP parado na backline inimiga.',
      ],
      priorityKicker: 'Execução',
      priorityTitle: 'Ordem da jogada',
      priorityDescription:
        'O Homem-Aranha não tem árvore de upgrade: a prioridade é construir uma janela curta de burst, ler se ela virou kill e manter uma saída real.',
      upgradePlan: [
        {
          rank: 1,
          input: 'RMB',
          ability: 'Web-Cluster',
          label: 'marca antes de tudo',
          why:
            'É o botão que liga o personagem. A marca adiciona 45 de dano quando consumida e transforma Get Over Here em entrada dirigida; sem ela, você gasta mobilidade sem burst suficiente.',
          swapWhen:
            'Se o alvo já está muito baixo e fora de posição, use Web-Cluster como finalizador seguro antes de se comprometer com [key:E]/[key:F].',
          sourceIds: ['official-spider-man', 'fandom-spider-man', 'mobalytics-spider-man'],
        },
        {
          rank: 2,
          input: 'E',
          ability: 'Get Over Here!',
          label: 'puxar ou se puxar',
          why:
            'Com tracer, vira chute de entrada de 55 de dano e te coloca no alvo. Sem tracer, puxa alguém para você e pode isolar alvo de canto ou ponte; confundir esses dois modos é o erro que entrega a luta.',
          swapWhen:
            'Contra backline agrupada, use sem tracer para puxar alguém para fora em vez de voar para dentro do time inteiro.',
          sourceIds: ['official-spider-man', 'reddit-spider-counter', 'mobalytics-spider-man'],
        },
        {
          rank: 3,
          input: 'F',
          ability: 'Amazing Combo',
          label: 'uppercut que consome a marca',
          why:
            'É o burst mais importante depois da entrada. Com duas cargas e 6s de recarga por carga, ele permite matar ou levantar alvo para follow-up; usado sem tracer ou sem plano de saída, só te deixa no ar sem kill.',
          swapWhen:
            'Se o inimigo está esperando o [key:E] em linha reta, entre pelos pés com Web-Swing/zip e use [key:F] para cruzar o alvo antes de consumir a segunda marca.',
          sourceIds: ['official-spider-man', 'mobalytics-spider-man', 'reddit-spider-combo'],
        },
        {
          rank: 4,
          input: 'Shift',
          ability: 'Web-Swing',
          label: 'ângulo e saída',
          why:
            'A mobilidade é sua defesa real. Gastar as três cargas para chegar transforma o melhor movimento do jogo em uma morte garantida quando a cura, stun ou knockback inimigo entra.',
          swapWhen:
            'Em mapa vertical, use Wall Crawl para staging e guarde Web-Swing para reposicionar durante a briga.',
          sourceIds: ['official-spider-man', 'mobalytics-spider-man', 'gamesgg-spider-man'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Spectacular Spin',
          label: 'confirmação, não coin flip',
          why:
            'Com 250 de vida bônus, slow e stun acumulativo, a ultimate converte caos em kill quando você já entrou na backline. O buff anunciado para 2026-05-15 aumenta o dano total, mas não muda a regra: use depois de dano inicial ou ultimate defensiva inimiga.',
          swapWhen:
            'Segure se Luna/Mantis/Invisible Woman ainda tem controle pronto ou se o alvo principal é Vanguard cheio.',
          sourceIds: ['official-spider-man', 'official-spider-man-s8', 'mobalytics-spider-man'],
        },
        {
          rank: 6,
          input: 'C',
          ability: 'Symbiote Bond',
          label: 'team-up com Venom',
          why:
            'Spikes explosivos causam dano e knockback em área; com Venom no time, tendrils Touch of Klyntar prendem e drenam os inimigos atingidos. É o Team-Up de quebra de formação: empurra a backline, gera peel e mantém pressão sem gastar Web-Swing.',
          swapWhen:
            'Sem Venom o efeito base ainda dá burst e empurra, mas fica raso — considere Parker Power-Up se você precisa de sustain para repetir entradas.',
          sourceIds: ['official-teamups', 'gamelevate-teamups'],
        },
        {
          rank: 7,
          input: 'C',
          ability: 'Parker Power-Up',
          label: 'team-up com Peni',
          why:
            'A bomba da Peni aplica Spider-Tracer extra e, se estourar em você, recarrega TODAS as cargas de Web-Cluster — o botão de reinício quando a entrada falha. Com Peni no time, detonar tracers de Web-Cluster gera vida bônus e sustenta o dive. O cooldown caiu de 15s para 10s na Temporada 10.',
          swapWhen:
            'Sem Peni a bomba ainda marca e devolve Web-Cluster; se o time precisa de CC e knockback em área, troque para Symbiote Bond.',
          sourceIds: ['official-teamups', 'patch-s10-spider-man', 'batru-spider-man'],
        },
      ],
      adaptations: [
        'Contra Mantis, Invisible Woman, Luna Snow e Adam Warlock: primeira entrada serve para forçar controle/peel; mate na segunda, quando o cooldown já saiu.',
        'Contra Namor ou setups com torreta/zona: não entre reto. Quebre recurso, jogue por flanco alto e aceite trocar de alvo se a área está armada.',
        'Contra triplo suporte ou backline grudada: vire finalizador de alvo já baixo, não assassino solo. Seu time precisa criar dano antes do seu dive.',
        'Com Venom: ative Symbiote Bond depois da primeira resposta inimiga; os spikes empurram a backline e os tendrils mantêm o dano contínuo sem gastar Web-Swing.',
        'Com Peni Parker: use Parker Power-Up para marcar alvo extra; se a janela fechar, deixe a bomba estourar em você de propósito para recarregar todas as cargas de Web-Cluster.',
      ],
      ultimates: [
        {
          stance: 'Confirmação de backline',
          name: 'Spectacular Spin',
          bestUse:
            'Depois que um suporte ou Duelist já perdeu vida, mobilidade ou peel. Entre pelo alto/lateral, aplique dano inicial e use [key:Q] para prender a resposta.',
          execution:
            'Web-Swing para ângulo, Web-Cluster, Get Over Here no alvo marcado, Amazing Combo e [key:Q] quando você está dentro de 8m de dois ou mais alvos frágeis. Se usar [key:Q] para abrir, o inimigo inteiro ainda tem botão para negar.',
          upgradeValue:
            'Patch 2026-05-15: dano por hit subiu de 13,6 para 15, total de 408 para 450 em 2,4s. O buff aumenta kill pressure, mas não salva ultimate jogada em tanque cheio.',
        },
      ],
      dashGuide: {
        ability: 'Web-Cluster -> Get Over Here -> Amazing Combo',
        shortRule:
          'O combo bom não é o mais longo do treino: é o que mata ou sai antes do inimigo virar a câmera.',
        mechanics: [
          'Web-Cluster marca por 3s; Get Over Here em alvo marcado puxa você até ele com chute de 55 de dano sem consumir o tracer; Amazing Combo usa o tracer para +45 de dano e lança o alvo para cima.',
          'Todas as habilidades cancelam a animação do ataque primário — intercale golpes básicos com abilities para mais dano por segundo do que a animação completa permite. Após o uppercut, o overhead slam pós-double-jump pode ser cancelado com um segundo Amazing Combo para dano aéreo adicional.',
          'Get Over Here viaja em linha reta a 80 m/s. Se o inimigo tem stun/push guardado, ele sabe exatamente quando te acertar. Use o tracer para fechar distância de ângulo inesperado em vez de frontal.',
          'Depois do uppercut, decida por vida e distância: Web-Cluster finaliza, melee/overhead aéreo continua, Web-Swing sai. Não transforme follow-up ruim em morte certa.',
        ],
        drills: [
          'Treine a decisão curta: tag + [key:E] + [key:F], olhar HP, escolher Web-Cluster finalizador ou Web-Swing de saída em menos de meio segundo. A janela de 3s do tracer expira rápido.',
          'Treine entrada por parede: Wall Crawl até ângulo alto sem gastar [key:Shift], Web-Cluster, [key:E]/[key:F], sair com [key:Shift] sem tocar o chão no meio da backline. Meça quantas cargas sobraram.',
          'Treine animation cancel: ataque básico → [key:F] antes da animação completar → ataque básico → [key:E]. Veja o dano por burst comparado com o combo sem cancel.',
          'Contra bots com controle, pratique bait: Web-Swing perto, cancelar rota, esperar cooldown inimigo aparecer, só depois entrar com tracer pelo ângulo lateral.',
        ],
      },
      patterns: [
        {
          title: 'Pick rápido em suporte isolado',
          steps: [
            'Staging por Wall Crawl ou high ground sem gastar cargas de Web-Swing — guarde pelo menos duas.',
            'Web-Cluster no suporte que está separado do tanque para aplicar tracer.',
            'Get Over Here no alvo marcado (você voa até ele, chute de 55 de dano, tracer permanece) e Amazing Combo imediatamente para consumir tracer e fazer knockup.',
            'No ar, intercale overhead slam e ataque básico cancelando a animação com [key:F] se tiver segunda carga disponível.',
            'Finalize com Web-Cluster/melee se a vida permite; se entrou cura ou peel, Web-Swing para fora.',
          ],
        },
        {
          title: 'Bait contra backline preparada',
          steps: [
            'Apareça no ângulo para forçar sleep, push, freeze ou torreta — não use [key:E]/[key:F] nessa primeira aproximação.',
            'Saia com Wall Crawl ou Thwip and Flip sem gastar Web-Swing quando o cooldown defensivo aparecer.',
            'Volte com tracer na janela em que o suporte está sem resposta: dois segundos são suficientes para tag + entrada + burst.',
            'Se a kill não veio em dois segundos, reinicie em vez de trocar dano no chão. Usar Get Over Here sem tracer aqui para puxar o alvo isolado para longe da cura é alternativa viável.',
          ],
        },
        {
          title: 'Entrada por "bunny hop" em área plana',
          steps: [
            'Inicie Web-Swing e, antes de perder momentum, dispare Web-Cluster para cancelar a animação do swing.',
            'Pule imediatamente — encadeie Web-Cluster → pulo para manter alta velocidade em mapas sem estrutura vertical.',
            'Aproveite o ângulo inesperado da trajetória para entrar pela lateral, não em linha reta.',
            'Confirme o tracer e complete o combo normalmente; a velocidade dificulta que o inimigo alinhe CC preventivo.',
          ],
        },
        {
          title: 'Ultimate sem desperdício',
          steps: [
            'Espere ultimate defensiva ou hard CC principal sair.',
            'Entre com dano inicial de tracer e uppercut; o knockup garante que o inimigo esteja dentro de 8m.',
            'Ative Spectacular Spin dentro da backline, não em Vanguard cheio.',
            'Use vida bônus de 250 para completar a kill e Web-Swing para sair antes do focus voltar.',
          ],
        },
      ],
      abilityLoop: ['Web-Cluster', 'Get Over Here!', 'Amazing Combo', 'Web-Swing', 'Parker Power-Up', 'Symbiote Bond'],
      mistakes: [
        'Gastar todas as 3 cargas de Web-Swing para chegar e descobrir que não sobrou fuga — regra prática: nunca dive com menos de 2 cargas.',
        'Deixar "Automatic Swing" ativado nas configurações, o que impede zipar para o chão e remove controle de alinhamento preciso.',
        'Apertar Get Over Here sem saber se o alvo está marcado: sem tracer puxa o inimigo até você; com tracer você voa até ele. Confundir os dois modos é entrar no meio do time quando a intenção era isolar.',
        'Insistir no combo completo de treino enquanto o alvo recebeu cura, knockback ou já saiu do alcance — na dúvida, saia e reinicie.',
        'Ignorar os animation cancels: atacar primário sem cancelar com abilities é deixar dano na mesa em cada rotação.',
        'Ultar em Vanguard cheio ou antes das ultimates defensivas inimigas, transformando [key:Q] em dano bonito sem pick.',
        'Jogar como poke de Web-Cluster no midrange em vez de usar as cargas para construir tracer e entrar; o dano real vem de tracer consumido em burst curto.',
        'Usar Get Over Here com tracer para voar em direção a um alvo que está rodeado pelo time inteiro — prefira usar sem tracer para puxar o alvo isolado até você, longe da cura.',
      ],
      evidence: [
        'official-spider-man',
        'official-spider-man-s8',
        'official-spider-man-s6',
        'fandom-spider-man',
        'mobalytics-spider-man',
        'marvelrivalsgg-spider-man',
        'gamesgg-spider-man',
        'techradar-spider-man-s3',
        'reddit-spider-counter',
        'reddit-spider-combo',
      ],
    },
  },
  sources: [
    {
      id: 'official-spider-man',
      kind: 'official',
      title: 'SPIDER-MAN - Marvel Rivals Hero Page',
      url: 'https://www.marvelrivals.com/m/20241123/41360_1195680.html',
      author: 'Marvel Rivals / NetEase',
      published: '2024-11-23',
      confidence: 'alta',
      takeaways: [
        'Fonte principal para role, vida, velocidade, Web-Cluster, Spider-Tracer, Web-Swing, Get Over Here, Amazing Combo, Spectacular Spin e Sticky Spider-Bomb.',
        'Confirma 250 HP, Web-Cluster com 5 cargas/2s de recarga, tracer de 3s e bônus de 45 de dano.',
        'Confirma Web-Swing com 3 cargas e 6s de recarga, Get Over Here com 8s, Amazing Combo com 2 cargas e Spectacular Spin com 8m/2,4s/250 vida bônus.',
        'A página oficial atual também lista Inferno Blast com Human Torch: 30 de dano, 8m, Burn-Tracer por 3s, DoT 15/s por 4s, backflip de 7m e cooldown de 12s.',
      ],
    },
    {
      id: 'official-spider-man-s8',
      kind: 'official',
      title: 'Marvel Rivals Version 20260515 Balance Post',
      url: 'https://www.marvelrivals.com/balancepost/20260512/41667_1299947.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-05-12',
      confidence: 'alta',
      takeaways: [
        'Anuncia buff de Spectacular Spin para a versão 2026-05-15.',
        'Dano por hit da ultimate sobe de 13,6 para 15.',
        'Dano total da duração de 2,4s sobe de 408 para 450.',
      ],
    },
    {
      id: 'official-spider-man-s6',
      kind: 'official',
      title: 'Marvel Rivals Version 20260116 Balance Post',
      url: 'https://www.marvelrivals.com/20260115/41525_1281488.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-01-15',
      confidence: 'alta',
      takeaways: [
        'Registrou a remoção histórica de Ever-Burning Bond com Human Torch em 2026-01-16; mantido como alerta porque a página oficial atual voltou a listar Inferno Blast.',
        'Introduziu Parker Power-Up: Peni Parker libera Sticky Spider-Bomb para Spider-Man.',
        'Confirma Peni como âncora do team-up e bônus de vida para Peni. Valores da bomba foram cruzados com página oficial/database.',
      ],
    },
    {
      id: 'fandom-spider-man',
      kind: 'database',
      title: 'Spider-Man — Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Spider-Man',
      published: 'atualizado continuamente',
      confidence: 'media',
      takeaways: [
        'Database secundário usado porque a navegação direta para wiki.gg não retornou a página do Spider-Man nesta sessão.',
        'Confirma Spider-Power como combo de dois socos de 25 e chute de 40; overhead slam aéreo causa 55.',
        'Confirma Web-Cluster com 30 de dano, 5 cargas, 2s por recarga, sem crítico, velocidade de 120 m/s e bônus de 45 ao consumir Spider-Tracer.',
        'Confirma Get Over Here com 25 de dano no pull, 55 no Web Strike, 8s de cooldown e mudança de comportamento quando o alvo tem Spider-Tracer.',
        'Confirma Sticky Spider-Bomb com 3s de contagem, 10 de dano direto, 30 de dano em campo, 5m de raio, 50 de vida bônus e 20s de cooldown.',
      ],
    },
    {
      id: 'mobalytics-spider-man',
      kind: 'guide',
      title: 'Marvel Rivals Spider-Man Character Guide',
      url: 'https://mobalytics.gg/marvel-rivals/spider-man-guide',
      published: 'sem data visível',
      confidence: 'media',
      takeaways: [
        'Define Spider-Man como glass cannon de mobilidade, burst e 1v1, com muito downtime quando cooldowns estão fora.',
        'Recomenda procurar alvos isolados, engajar/desengajar constantemente e não usar todas as cargas de Web-Swing para entrar.',
        'Parte dos valores numéricos está defasada por patches posteriores, então a fonte foi usada para fundamentos e não para números atuais.',
      ],
    },
    {
      id: 'marvelrivalsgg-spider-man',
      kind: 'guide',
      title: 'Spider-Man Guide: How to Play, Combos, & Counters',
      url: 'https://marvelrivals.gg/spider-man-guide/',
      author: 'Theo',
      published: '2025-03-09',
      confidence: 'media',
      takeaways: [
        'Resume Spider-Man como Duelist melee de mobilidade extrema que cria ângulos inesperados e joga por Spider-Tracer.',
        'Lista combos centrais como Web-Cluster, Get Over Here, Amazing Combo, ataques básicos e ultimate setup por high ground.',
        'Usado para macro de posicionamento, alvo e counters; team-ups antigos foram desconsiderados quando conflitam com balance oficial recente.',
      ],
    },
    {
      id: 'gamesgg-spider-man',
      kind: 'guide',
      title: 'Spider-Man Marvel Rivals Guide: Master the Web-Slinger',
      url: 'https://games.gg/marvel-rivals/guides/spider-man-marvel-rivals-guide/',
      author: 'Mostafa Salem',
      published: '2026-03-25',
      confidence: 'media',
      takeaways: [
        'Enfatiza que o gap entre entrar e morrer em dois segundos versus desmontar backline vem de movimento, alvo e execução.',
        'Recomenda entrada por ângulo, leitura de alvo isolado, checagem de cooldown antes do dive e ajustes de controle para console.',
        'Algumas referências comunitárias são amplas, então usei apenas princípios mecânicos consistentes com fontes oficiais e outros guias.',
      ],
    },
    {
      id: 'techradar-spider-man-s3',
      kind: 'guide',
      title: 'Marvel Rivals Season 3 preview — TechRadar',
      url: 'https://www.techradar.com/gaming/marvel-rivals-season-3-preview',
      author: 'Jake Green',
      published: '2025-07-09',
      confidence: 'media',
      takeaways: [
        'Relato de acesso antecipado descreveu a volta/entrada do team-up com Human Torch, com uma teia flamejante que aplica tracer e backflip para criar distância.',
        'A descrição prática bate com a página oficial atual de Inferno Blast, mas foi tratada como fonte de contexto, não como fonte numérica principal.',
        'Reforça que o valor do team-up está em facilitar um combo completo e dar saída após a entrada.',
      ],
    },
    {
      id: 'reddit-spider-counter',
      kind: 'forum',
      title: 'How to counter a spider-man',
      url: 'https://www.reddit.com/r/marvelrivals/comments/1jyci5r/how_to_counter_a_spiderman/',
      author: 'nicolay719',
      published: '2025-03',
      confidence: 'em disputa',
      takeaways: [
        'Relato de main destaca que ver o ícone de Spider-Tracer significa preparar resposta ao Get Over Here em linha reta e uppercut.',
        'Cita Mantis, Invisible Woman, Adam Warlock e Luna Snow como respostas práticas por sleep, push, burst ou freeze.',
        'Usei como leitura de counterplay e adaptação, não como prova de balance absoluto.',
      ],
    },
    {
      id: 'reddit-spider-combo',
      kind: 'forum',
      title: 'Help w/ spider man combo',
      url: 'https://www.reddit.com/r/marvelrivals/comments/1i6drt5/help_w_spider_man_combo/',
      published: '2025-01',
      confidence: 'em disputa',
      takeaways: [
        'Discussão de combo reforça que combos de treino nem sempre entram em partida real.',
        'A recomendação mais útil é decidir depois do tracer/[key:E]/[key:F] se vale continuar com webs, zip aos pés ou sair.',
        'Foi usada para transformar o guia em decisão curta de fight, não em lista de combos irreais.',
      ],
    },
    {
      id: 'video-spider-man-pending',
      kind: 'video-transcript',
      title: 'Transcrições de guias em vídeo do Homem-Aranha',
      url: 'https://www.youtube.com/results?search_query=Marvel+Rivals+Spider-Man+guide+Necros+combo',
      published: 'pendente',
      confidence: 'pendente',
      takeaways: [
        'Slot reservado para VODs, guias de mains e coach reviews com timestamps.',
        'Nenhuma transcrição auditável foi processada nesta carga; o app não inventa dado de vídeo sem texto verificável.',
        'Próximo enriquecimento deve separar rotas de combo por PC/controle e exemplos de partidas recentes pós-buff da ultimate.',
      ],
    },
    {
      id: 'official-teamups',
      kind: 'official',
      title: 'Team-Up — Página oficial de Marvel Rivals',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Confirma os dois Team-Ups ativos do Homem-Aranha na Temporada 10: Symbiote Bond (parceiro Venom) e Parker Power-Up (parceira Peni Parker).',
        'Regra oficial: o efeito base funciona sem o parceiro; o aprimorado acende automaticamente quando o parceiro entra no time.',
      ],
    },
    {
      id: 'gamelevate-teamups',
      kind: 'guide',
      title: 'Best Team-Ups for Every Hero in Marvel Rivals — Gamelevate',
      url: 'https://gamelevate.com/best-team-ups-for-every-hero-in-marvel-rivals/',
      author: 'Pasha Besharaty',
      published: '2026-08-11',
      confidence: 'media',
      takeaways: [
        'Recomenda Symbiote Bond (com Venom) como o Team-Up mais forte do Homem-Aranha.',
        'Descreve os tendrils Touch of Klyntar como dano contínuo que prende inimigos.',
      ],
    },
    {
      id: 'batru-spider-man',
      kind: 'database',
      title: 'Spider-Man Team-Up Synergy — Batru (Temporada 10)',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/spider-man',
      published: '2026-09',
      confidence: 'media',
      takeaways: [
        'Medição da Temporada 10: Parker Power-Up + Peni Parker com 66.87% de win rate, contra 45.56% de Symbiote Bond + Venom.',
        'A dupla medida mistura a força individual dos heróis no meta (Peni estava forte na temporada); use como sinal de prioridade, não como regra fixa.',
      ],
    },
    {
      id: 'patch-s10-spider-man',
      kind: 'official',
      title: 'Marvel Rivals Version 20260911 — Balance Post da Temporada 10',
      url: 'https://www.marvelrivals.com/20260908/41525_1313334.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-09-11',
      confidence: 'alta',
      takeaways: [
        'Parker Power-Up (com Peni Parker) teve o cooldown reduzido de 15s para 10s.',
        'Amazing Combo também foi ajustado: cooldown de 2s para 1s.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Oficial',
      count: 5,
      status: 'Página oficial, balance posts do herói e balance post da Temporada 10 usados; página de Team-Up confirma Symbiote Bond e Parker Power-Up como os dois loadouts atuais.',
    },
    {
      kind: 'database',
      label: 'Database',
      count: 2,
      status: 'Fandom usado como conferência secundária; win rates de dupla do Batru (Temporada 10) usados para comparar as duas opções.',
    },
    {
      kind: 'guide',
      label: 'Guias',
      count: 5,
      status: 'Usados para macro, combos práticos, disciplina de cooldown, counters e escolha de Team-Up.',
    },
    {
      kind: 'forum',
      label: 'Fórum',
      count: 2,
      status: 'Usado com cautela para experiência de mains e counterplay real.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos',
      count: 0,
      status: 'Pendente: falta transcrição validada com timestamps.',
    },
  ],
}
