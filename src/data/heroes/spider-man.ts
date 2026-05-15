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
  theme: {
    primary: '#e5313e',
    primaryRgb: '229, 49, 62',
    secondary: '#5ec7ff',
    secondaryRgb: '94, 199, 255',
    surface: '#11151f',
    surfaceRgb: '17, 21, 31',
  },
  roles: ['duelist'],
  lastVerified: '2026-05-15',
  confidenceSummary:
    'Valores base conferidos na página oficial e ajustados com balance posts até o patch 2026-05-15. Guias, wikis e Reddit foram usados para execução, counters, cancelamentos de animação e decisão de combo. Pesquisa ativa realizada em múltiplas fontes (gamer.org, mobalytics, keengamer, boosting-ground, FextraLife wiki, dexerto) para confirmar mecânicas avançadas como animation cancel, bunny hop, wall bounce e gestão de cargas.',
  coreRead: [
    'Antes de gastar qualquer mobilidade, decida o alvo: aplique Web-Cluster, entre com Get Over Here no alvo marcado (você voa até ele, não ele até você), consuma o tracer com Amazing Combo ou Spider-Power e saia com pelo menos uma carga de Web-Swing. Sequência de quatro passos que o jogo não ensina.',
    'Todas as habilidades cancelam a animação do ataque primário — você pode intercalar golpes básicos e abilities mais rápido do que a animação completa sugere. O overhead slam pós-double-jump também pode ser cancelado com uppercut para encadear dano aéreo. Esses cancels são o que separa o burst de treinamento do burst de partida real.',
    'Web-Swing tem 3 cargas com 6s de recarga cada. Gastar as três para chegar é suicídio garantido: a regra prática é nunca iniciar um dive com menos de duas cargas, mantendo a terceira para saída. Wall Crawl e Thwip and Flip existem para você se reposicionar e alcançar ângulos sem tocar nesse contador.',
  ],
  systems: [
    {
      name: 'Spider-Tracer',
      input: 'RMB',
      facts: [
        'Web-Cluster tem 5 cargas, recarrega uma carga a cada 2s, causa 30 de dano e aplica Spider-Tracer por 3s.',
        'Spider-Tracer adiciona 45 de dano quando consumido por Spider-Power ou Amazing Combo — mas Get Over Here NÃO consome o tracer, permitindo usar o chute de entrada e ainda ter o bônus intacto para Amazing Combo logo em seguida.',
        'Get Over Here muda completamente quando o alvo está marcado: em vez de puxar o inimigo (25 de dano), o Homem-Aranha se puxa até ele com chute voador de 50 de dano. Você pode remapear a tecla para escolher entre as duas funções mesmo com o alvo marcado — útil quando quer puxar o inimigo para sua equipe em vez de voar para dentro do time deles.',
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
        'Ultimate em esfera de 8m por 2.4s, com 250 de vida bônus e slow acumulativo até stun.',
        'O balance post de 2026-05-12 anunciou aumento de 13.6 para 15 de dano por hit, total de 408 para 450 no patch 2026-05-15.',
        'Mesmo buffada, ela é melhor em alvo fraco/backline ja danificada do que em Vanguard cheio ou time com defensive ult pronta.',
      ],
    },
    {
      name: 'Parker Power-Up',
      input: 'C - Team-Up',
      facts: [
        'Desde a Season 6, Peni Parker libera Sticky Spider-Bomb para o Homem-Aranha.',
        'A bomba tem 3s de contagem, 10 de dano no contato, 30 no campo de explosão, aplica Spider-Tracer e tem 20s de cooldown.',
        'Se explodir na mão do Homem-Aranha, concede 50 de vida bônus e recarrega um Web-Cluster; use como recurso extra, não como motivo para entrar sem saída.',
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelist',
      nickname: 'Dive de tracer',
      health: '250 HP',
      difficulty: 'Muito alta: mecânica, alvo e cooldown precisam alinhar',
      job: 'Punir alvo isolado, forçar peel da backline e sair antes que controle ou cura desfaçam o combo.',
      verdict:
        'Escolha Homem-Aranha quando o inimigo deixa suportes/Duelists jogarem separados ou quando seu time já pressiona vida para você finalizar. Evite insistir contra triplo suporte, muito stun ou backline agrupada em torno de Namor/Mantis/Invisible Woman.',
      playstyle: [
        'Antes de entrar, pergunte qual cooldown inimigo ainda te mata. Se Mantis tem sleep, Invisible Woman tem push ou Luna tem freeze, sua primeira entrada deve baitar esse botão, não morrer tentando clipar combo de treino.',
        'A entrada limpa costuma ser Swing por cima ou lateral, Web-Cluster para marcar, Get Over Here no alvo marcado e Amazing Combo no primeiro frame possível. O follow-up muda conforme distância, vida e cura recebida pelo alvo.',
        'Se o alvo sobreviveu e saiu do alcance, não force melee no chão. Reaplique Web-Cluster, use Swing/zip para pé, ou suma e reinicie com cooldowns em vez de virar 250 HP parado na backline inimiga.',
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
            'Se o alvo já está muito baixo e fora de posição, use Web-Cluster como finalizador seguro antes de se comprometer com E/F.',
          sourceIds: ['official-spider-man', 'wiki-spider-man', 'mobalytics-spider-man'],
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
            'Se o inimigo está esperando o E em linha reta, entre pelos pés com Swing/zip e use F para cruzar o alvo antes de consumir a segunda marca.',
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
            'Em mapa vertical, use Wall Crawl para staging e guarde Swing para reposicionar durante a briga.',
          sourceIds: ['official-spider-man', 'mobalytics-spider-man', 'gamesgg-spider-man'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Spectacular Spin',
          label: 'confirmação, não coin flip',
          why:
            'Com 250 de vida bônus, slow e stun acumulativo, a ultimate converte caos em kill quando você já entrou na backline. O buff anunciado para 2026-05-15 aumenta o dano total, mas não muda a regra: use depois de dano inicial ou defensive ult inimiga.',
          swapWhen:
            'Segure se Luna/Mantis/Invisible Woman ainda tem controle pronto ou se o alvo principal é Vanguard cheio.',
          sourceIds: ['official-spider-man', 'official-spider-man-s8', 'mobalytics-spider-man'],
        },
        {
          rank: 6,
          input: 'C',
          ability: 'Sticky Spider-Bomb',
          label: 'team-up com Peni',
          why:
            'Quando Peni está no time, a bomba vira marca extra e pequeno buffer defensivo. Ela ajuda a iniciar ou reiniciar tracer sem gastar uma carga normal no timing errado.',
          swapWhen:
            'Se não há Peni Parker no time, ignore esse plano e jogue pelo ciclo base de Web-Cluster, E/F e Swing.',
          sourceIds: ['official-spider-man', 'official-spider-man-s6', 'wiki-spider-man'],
        },
      ],
      adaptations: [
        'Contra Mantis, Invisible Woman, Luna Snow e Adam Warlock: primeira entrada serve para forçar controle/peel; mate na segunda, quando o cooldown já saiu.',
        'Contra Namor ou setups com torreta/zona: não entre reto. Quebre recurso, jogue por flanco alto e aceite trocar de alvo se a área está armada.',
        'Contra triplo suporte ou backline grudada: vire finalizador de alvo já baixo, não assassino solo. Seu time precisa criar dano antes do seu dive.',
        'Com Peni Parker: Sticky Spider-Bomb dá uma marca extra; use para abrir alvo que vai receber Get Over Here ou para sair com vida bônus se a janela fechou.',
      ],
      ultimates: [
        {
          stance: 'Confirmação de backline',
          name: 'Spectacular Spin',
          bestUse:
            'Depois que um suporte ou Duelist já perdeu vida, mobilidade ou peel. Entre pelo alto/lateral, aplique dano inicial e use Q para prender a resposta.',
          execution:
            'Swing para ângulo, Web-Cluster, Get Over Here no alvo marcado, Amazing Combo e Q quando você está dentro de 8m de dois ou mais alvos frágeis. Se usar Q para abrir, o inimigo inteiro ainda tem botão para negar.',
          upgradeValue:
            'Patch 2026-05-15 anunciado: dano por hit sobe de 13.6 para 15, total de 408 para 450 em 2.4s. O buff aumenta kill pressure, mas não salva ultimate jogada em tanque cheio.',
        },
      ],
      dashGuide: {
        ability: 'Web-Cluster -> Get Over Here -> Amazing Combo',
        shortRule:
          'O combo bom não é o mais longo do treino: e o que mata ou sai antes do inimigo virar a câmera.',
        mechanics: [
          'Web-Cluster marca por 3s; Get Over Here em alvo marcado puxa você até ele com chute de 50 de dano sem consumir o tracer; Amazing Combo usa o tracer para +45 de dano e lança o alvo para cima.',
          'Todas as habilidades cancelam a animação do ataque primário — intercale golpes básicos com abilities para mais dano por segundo do que a animação completa permite. Após o uppercut, o overhead slam pós-double-jump pode ser cancelado com um segundo Amazing Combo para dano aéreo adicional.',
          'Get Over Here viaja em linha reta a 80 m/s. Se o inimigo tem stun/push guardado, ele sabe exatamente quando te acertar. Use o tracer para fechar distância de ângulo inesperado em vez de frontal.',
          'Depois do uppercut, decida por vida e distância: Web-Cluster finaliza, melee/overhead aéreo continua, Swing sai. Não transforme follow-up ruim em morte certa.',
        ],
        drills: [
          'Treine a decisão curta: tag + [key:E] + [key:F], olhar HP, escolher Web-Cluster finalizador ou Swing de saída em menos de meio segundo. A janela de 3s do tracer expira rápido.',
          'Treine entrada por parede: Wall Crawl até ângulo alto (sem gastar Shift), Web-Cluster, [key:E]/[key:F], sair com Shift sem tocar o chão no meio da backline. Mida quantas cargas sobraram.',
          'Treine animation cancel: ataque básico → [key:F] antes da animação completar → ataque básico → [key:E]. Veja o dano por burst comparado com o combo sem cancel.',
          'Contra bots com controle, pratique bait: Swing perto, cancelar rota, esperar cooldown inimigo aparecer, só depois entrar com tracer pelo ângulo lateral.',
        ],
      },
      patterns: [
        {
          title: 'Pick rápido em suporte isolado',
          steps: [
            'Staging por Wall Crawl ou high ground sem gastar cargas de Swing — guarde pelo menos duas.',
            'Web-Cluster no suporte que está separado do tanque para aplicar tracer.',
            'Get Over Here no alvo marcado (você voa até ele, chute de 50 de dano, tracer permanece) e Amazing Combo imediatamente para consumir tracer e fazer knockup.',
            'No ar, intercale overhead slam e ataque básico canceling a animação com [key:F] se tiver segunda carga disponível.',
            'Finaliza com Web-Cluster/melee se a vida permite; se entrou cura ou peel, Swing para fora.',
          ],
        },
        {
          title: 'Bait contra backline preparada',
          steps: [
            'Apareça no ângulo para forçar sleep, push, freeze ou torreta — não use [key:E]/[key:F] nessa primeira aproximação.',
            'Saia com Wall Crawl ou Thwip and Flip (sem gastar Swing) quando o cooldown defensivo aparecer.',
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
          title: 'Ultimate sem desperdicio',
          steps: [
            'Espere defensive ult ou hard CC principal sair.',
            'Entre com dano inicial de tracer e uppercut; o knockup garante que o inimigo esteja dentro de 8m.',
            'Ative Spectacular Spin dentro da backline, não em Vanguard cheio.',
            'Use vida bônus de 250 para completar a kill e Swing para sair antes do focus voltar.',
          ],
        },
      ],
      mistakes: [
        'Gastar todas as 3 cargas de Web-Swing para chegar e descobrir que não sobrou fuga — regra prática: nunca dive com menos de 2 cargas.',
        'Deixar "Automatic Swing" ativado nas configurações, o que impede zipar para o chão e remove controle de alinhamento preciso.',
        'Apertar Get Over Here sem saber se o alvo está marcado: sem tracer puxa o inimigo até você; com tracer você voa até ele. Confundir os dois modos é entrar no meio do time quando a intenção era isolar.',
        'Insistir no combo completo de treino enquanto o alvo recebeu cura, knockback ou já saiu do alcance — na dúvida, saia e reinicie.',
        'Ignorar os animation cancels: atacar primário sem cancelar com abilities é deixar dano na mesa em cada rotação.',
        'Ultar em Vanguard cheio ou antes das defensive ults inimigas, transformando Q em dano bonito sem pick.',
        'Jogar como poke de Web-Cluster no midrange em vez de usar as cargas para construir tracer e entrar; o dano real vem de tracer consumido em burst curto.',
        'Usar Get Over Here com tracer para voar em direção a um alvo que está rodeado pelo time inteiro — prefira usar sem tracer para puxar o alvo isolado até você, longe da cura.',
      ],
      evidence: [
        'official-spider-man',
        'official-spider-man-s8',
        'official-spider-man-s6',
        'wiki-spider-man',
        'mobalytics-spider-man',
        'marvelrivalsgg-spider-man',
        'gamesgg-spider-man',
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
        'Confirma Web-Swing com 3 cargas e 6s de recarga, Get Over Here com 8s, Amazing Combo com 2 cargas e Spectacular Spin com 8m/2.4s/250 vida bônus.',
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
        'Dano por hit da ultimate sobe de 13.6 para 15.',
        'Dano total da duração de 2.4s sobe de 408 para 450.',
      ],
    },
    {
      id: 'official-spider-man-s6',
      kind: 'official',
      title: 'Marvel Rivals Version 20260116 Balance Post',
      url: 'https://www.marvelrivals.com/20260115/41525_1281488.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-01-13',
      confidence: 'alta',
      takeaways: [
        'Removeu Ever-Burning Bond com Human Torch, evitando guias antigos que ainda recomendam Inferno Blast.',
        'Introduziu Parker Power-Up: Peni Parker libera Sticky Spider-Bomb para Spider-Man.',
        'Confirma Peni como âncora do team-up e bônus de vida para Peni. Valores da bomba foram cruzados com página oficial/wiki. ',
      ],
    },
    {
      id: 'wiki-spider-man',
      kind: 'database',
      title: 'Spider-Man - The Marvel Rivals Wiki',
      url: 'https://marvelrivals.wiki.gg/wiki/Spider-Man',
      confidence: 'media',
      takeaways: [
        'Complementa a página oficial com resumo público de Spider-Tracer, Web-Swing, Amazing Combo, Spectacular Spin e Sticky Spider-Bomb.',
        'Marca Suit Expulsion/antigo team-up como indisponível na temporada atual, alinhado ao balance post oficial de 2026-01-16.',
        'Usado como conferência secundária para valores e nome dos sistemas, não como fonte final quando havia número oficial mais recente.',
      ],
    },
    {
      id: 'mobalytics-spider-man',
      kind: 'guide',
      title: 'Marvel Rivals Spider-Man Character Guide',
      url: 'https://mobalytics.gg/marvel-rivals/spider-man-guide',
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
        'Lista combos centrais como Web-Cluster, Get Over Here, Amazing Combo, ataques basicos e ultimate setup por high ground.',
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
      confidence: 'em disputa',
      takeaways: [
        'Discussão de combo reforça que combos de treino nem sempre entram em partida real.',
        'A recomendação mais útil é decidir depois do tracer/E/F se vale continuar com webs, zip aos pés ou sair.',
        'Foi usada para transformar o guia em decisão curta de fight, não em lista de combos irreais.',
      ],
    },
    {
      id: 'video-spider-man-pending',
      kind: 'video-transcript',
      title: 'Transcrições de guias em vídeo do Homem-Aranha',
      url: 'https://www.youtube.com/results?search_query=Marvel+Rivals+Spider-Man+guide+Necros+combo',
      confidence: 'pendente',
      takeaways: [
        'Slot reservado para VODs, guias de mains e coach reviews com timestamps.',
        'Nenhuma transcrição auditável foi processada nesta carga; o app não inventa dado de vídeo sem texto verificável.',
        'Próximo enriquecimento deve separar rotas de combo por PC/controle e exemplos de partidas recentes pós-buff da ultimate.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Oficial',
      count: 3,
      status: 'Página oficial e balance posts usados para valores atuais e team-up vigente.',
    },
    {
      kind: 'database',
      label: 'Database',
      count: 1,
      status: 'Wiki pública usada como conferência secundária de kit e team-up.',
    },
    {
      kind: 'guide',
      label: 'Guias',
      count: 3,
      status: 'Usados para macro, combos práticos, cooldown discipline e counters.',
    },
    {
      kind: 'forum',
      label: 'Forum',
      count: 2,
      status: 'Usado com cautela para experiencia de mains e counterplay real.',
    },
    {
      kind: 'video-transcript',
      label: 'Videos',
      count: 0,
      status: 'Pendente: falta transcrição validada com timestamps.',
    },
  ],
}
