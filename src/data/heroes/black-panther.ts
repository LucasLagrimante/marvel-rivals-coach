import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const blackPanther: HeroGuide = {
  id: 'black-panther',
  name: 'Pantera Negra',
  aliases: ['Pantera Negra', 'Black Panther', "T'Challa", 'Rei de Wakanda', 'Pantera de Bast'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/black_panther.png'),
  bannerUrl: publicAsset('heroes/banners/black_panther.png'),
  selectionPortraitUrl: publicAsset('heroes/select/black_panther.png'),
  selectionHoverUrl: publicAsset('heroes/select/black_panther_champion.gif'),
  selectionHoverFit: { scale: 1.15, x: 0, y: -6 },
  theme: {
    primary: '#8b5cf6',
    primaryRgb: '139, 92, 246',
    secondary: '#e0c14a',
    secondaryRgb: '224, 193, 74',
    surface: '#0e0b16',
    surfaceRgb: '14, 11, 22',
  },
  roles: ['duelist'],
  lastVerified: '2026-09-22',
  confidenceSummary:
    'Números e mecânicas conferidos na ficha oficial do herói, na página oficial de Team-Up e nos balance posts oficiais de 20/03/2026 (Season 7), 10/07/2026 (Season 9, reestruturação de vida) e 11/07/2026 (hotfix), mais o balance post de 07/08/2026 (Season 9.5) e o da Temporada 10 (patch 20260911). A barra hoje é 150 de vida base + 125 de escudo regenerativo (275 no total) desde 10/07/2026, quando a NetEase trocou os 275 de vida crua por 150 + 125; o patch de 20/03/2026 deixou o Spinning Kick omnidirecional (75 de dano, antes 70 e preso a um plano horizontal), baixou a recuperação por carga da Spear Toss de 6s para 5s e removeu a recarga do segundo salto do Subtle Step; o de 16/01/2026 subiu a Spear Toss de 45 para 50 e deu 50% de redução de dano à Bast\'s Descent na conjuração. Divergência registrada: a ficha oficial ainda imprime 6s de recarga por carga da lança e a wiki.gg ainda lista 3s de recarga no double jump — os dois valores foram derrubados pelos balance posts de 20/03/2026 e o guia usa os valores pós-patch. Os guias escritos consultados (Marvel Church, GameSpot) são da Season 4 e carregam números velhos (300 de vida, dash de 8s, 40 de vida bônus por marca): usados só para combo e posicionamento, nunca como número.',
  coreRead: [
    'A marca é munição, não dano. Cada marca apagada por um dash devolve o dash na hora: acertar um inimigo marcado com o Spirit Rend limpa a marca, zera o cooldown de 10s e ainda dá +25 de vida bônus (teto de 75 acumulados). O combo perfeito não é acertar a lança uma vez — é marcar o máximo de gente para ter mais dashes do que o cooldown permite.',
    'A lança marca em área e não precisa acertar ninguém: o arco de 60 m/s cria um campo esférico de 5m no ponto de impacto, então mirar no chão entre o suporte e o atirador marca os dois de uma vez. E a marca fica visível por 7s, inclusive através da parede — é um rastreador de 7s, não só o gatilho do dash.',
    'Vida baixa é o pico de dano. Abaixo de 100 de vida a Panther\'s Cunning soma 20% e tudo sobe junto: garras de 35 para 42, dash de 80 para 96, ultimate de 150 para 180. Como a barra é 150 de vida + 125 de escudo regenerativo, entrar nessa faixa não significa estar a três golpes de morrer: o escudo come o dano primeiro. O hotfix de 11/07/2026 corrigiu justamente o bug em que esse bônus acumulava enquanto o escudo regenerava.',
    'A ultimate é o botão de reset. Os 150 de dano em cubo de 22m x 20m x 7m vêm com 50% de redução de dano durante a conjuração, marcam todo mundo atingido e refrescam o Spirit Rend na hora — o mesmo efeito de uma marca. Usada com o dash no cooldown, ela transforma uma saída de emergência em segundo assalto.',
    'Parede é a sua resposta contra alvo aéreo. O Subtle Step sobe a 10 m/s e, desde 20/03/2026, o segundo salto não tem recarga: dá para escalar, planar na vertical e cair em cima. Contra flyers o caminho é a ultimate (7m de altura de acerto) marcando o alvo no ar e o dash, que funciona em qualquer direção, fechando a distância.',
  ],
  teamUps: {
    summary:
      'Damisa-Yao (Storm) é a escolha medida: 59,95% de vitória na dupla na Temporada 10 contra 47,85% do Dimensional Shortcut (Magik), e 96% dos votos da comunidade. A diferença é grande justamente porque o base do Damisa-Yao entrega o que o kit mais precisa — uma marca em ÁREA de 8m que alimenta a corrente de dashes. A ressalva honesta: a opção com Storm também foi a que levou o nerf de 07/08/2026 (dano de área de 40 para 30 e recarga de 12s para 15s), e a amostra dela é menor. Os dois ficam na tecla [key:C] e a troca é livre na sala de spawn.',
    recommended: 'Damisa-Yao',
    recommendedReason:
      'As duas opções resolvem problemas diferentes: o Damisa-Yao marca todos os inimigos num raio de 8m e aplica slow, o que multiplica a corrente (mais gente marcada = mais dashes de graça) e transforma um time agrupado em combo infinito; o Dimensional Shortcut dá a única saída de emergência real do kit — um disco que devolve o Pantera para onde ele estava segundos antes, com 50 de vida bônus, e explode marcando quem estiver perto. A medição da Temporada 10 aponta para o lado do Storm: 59,95% de vitória em 407 partidas contra 47,85% em 1.093 do Magik (Batru), com 96% de 71 votos da comunidade. O recorte anterior, no Diamond+, dava a mesma direção (64,04% x 56,92% no Rivals Tracker), então não é ruído de uma temporada só. O que o número não conta: parte da vantagem pode vir do Storm estar em tier A no meta, a amostra com Storm é a menor das duas, e o único nerf direto que o herói levou em 2026 foi exatamente nessa habilidade (07/08/2026: dano de área de 40 para 30 e recarga de 12s para 15s). Se o seu time não tem Storm e o problema é você morrer depois de entrar, o Dimensional Shortcut continua sendo o pick honesto — e com a Magik no time ele ganha o cancelamento do teleporte no meio do trajeto, o que permite usar a volta como finta.',
    options: [
      {
        name: 'Damisa-Yao',
        partner: 'Storm',
        partnerRole: 'Duelista',
        input: 'C',
        baseEffect:
          'Aciona o poder elemental da armadura: 30 de dano em raio esférico de 8m, slow de 35% por 2s e uma Vibranium Mark aplicada em todos os inimigos dentro do raio. Recarga de 15s. O nerf de 07/08/2026 baixou o dano de 40 para 30 e subiu a recarga de 12s para 15s.',
        enhancedEffect:
          'Com a Storm no time, os inimigos dentro do raio são puxados na direção do Pantera e o slow sobe para 45% por 2s.',
        bestFor:
          'Times agrupados e briga de objetivo: uma marca em área de 8m alimenta a corrente inteira de dashes sem gastar lança, e o puxão do efeito aprimorado arrasta os alvos para dentro do seu alcance de melee (3m) e do seu time.',
        easySetup:
          'Storm como Duelista. Sem ela o base ainda vale: 30 de dano, slow e a marca em área continuam funcionando — é o botão mais valioso do kit quando o inimigo joga colado.',
        iconUrl: publicAsset('teamups/black-panther-damisa-yao-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/black-panther-damisa-yao-partner.png'),
      },
      {
        name: 'Dimensional Shortcut',
        partner: 'Magik',
        partnerRole: 'Duelista',
        input: 'C',
        baseEffect:
          'Ativa um disco de Limbo que devolve o Pantera para a posição em que ele estava alguns segundos antes, ganhando 50 de vida bônus. Quando o teleporte termina, o disco colapsa numa explosão de 8m de raio com 40 de dano que aplica Vibranium Marks nos inimigos próximos. Recarga de 35s.',
        enhancedEffect:
          'Com a Magik no time, a sequência do teleporte pode ser cancelada manualmente no meio do trajeto.',
        bestFor:
          'Quando o seu problema é sair vivo: é a única segunda vida do kit — entra, mata, volta para onde estava, e a explosão do disco ainda deixa marcas no caminho que podem virar mais um dash.',
        easySetup:
          'Magik como Duelista. O base já resolve sozinho como disengage; o efeito aprimorado serve para fintar o foco inimigo parando o teleporte no meio do caminho.',
        iconUrl: publicAsset('teamups/black-panther-dimensional-shortcut-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/black-panther-dimensional-shortcut-partner.png'),
      },
    ],
    sourceIds: [
      'official-teamups',
      'official-balance-20260807',
      'official-balance-s10',
      'batru-black-panther',
      'rivalstracker-teamups',
      'rivalsteamups-black-panther',
    ],
  },
  systems: [
    {
      name: 'Vibranium Mark',
      input: 'Recurso',
      heading: 'A marca é a munição do dash',
      facts: [
        'Spear Toss e Spinning Kick aplicam a Vibranium Mark, e o Damisa-Yao aplica em área. A marca dura 7s, deixa o alvo visível através das paredes e é o que transforma o Spirit Rend de um botão de 10s de recarga numa corrente quase infinita.',
        'Acertar um inimigo marcado com o dash limpa a marca daquele alvo, refresca o cooldown na hora e dá +25 de vida bônus, com teto de 75 acumulados — ou seja, três refreshes enchem o teto e os próximos só valem pela recarga. O valor da marca é o dash, não a vida.',
        'Como cada dash limpa a marca de quem ele atravessou, marcar VÁRIOS inimigos vale muito mais que marcar um: num time agrupado marcado em área é possível encadear 4, 5 dashes seguidos sem esperar cooldown. É por isso que a lança se mira no chão entre dois alvos, e não na testa de um só.',
      ],
      meter: [
        { label: 'Duração da marca', value: '7s (e visão através da parede)' },
        { label: 'Refresh do dash', value: '1 por marca apagada' },
        { label: 'Vida bônus por refresh', value: '+25 (teto 75)' },
        { label: 'Spear Toss', value: '2 cargas (5s cada)' },
        { label: 'Marca em área', value: '5m de raio no impacto' },
      ],
    },
    {
      name: "Panther's Cunning",
      input: 'Passiva',
      heading: 'Vida baixa é o pico de dano',
      facts: [
        'Abaixo de 100 de vida o dano sobe 20%: garras de 35 para 42, dash de 80 para 96 e Bast\'s Descent de 150 para 180. O gatilho é a VIDA, não o escudo — quem tem 125 de escudo e 150 de vida ainda precisa perder o escudo inteiro e 51 de vida para acender o bônus.',
        'A barra é 150 de vida + 125 de escudo regenerativo desde 10/07/2026: o escudo absorve primeiro e regenera sozinho, então viver na faixa de bônus é muito menos arriscado do que a aparência de "vida baixa" sugere — é o escudo que está no vermelho, não você.',
        'O hotfix oficial de 11/07/2026 corrigiu o bug em que o Pantera acumulava bônus de dano indevidamente enquanto o escudo regenerativo se recuperava. Hoje o +20% vale só com a vida abaixo de 100: não conte com bônus "escondido" durante a regeneração.',
      ],
      meter: [
        { label: 'Gatilho', value: 'vida < 100' },
        { label: 'Bônus de dano', value: '+20%' },
        { label: 'Garras no bônus', value: '42 por golpe' },
        { label: 'Dash no bônus', value: '96 por alvo' },
        { label: 'Ultimate no bônus', value: '180' },
        { label: 'Escudo', value: '125 regenerativo' },
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelista',
      nickname: 'O Caçador de Wakanda',
      health: '275 HP (150 base + 125 de escudo regenerativo)',
      difficulty:
        'Alta (4/5): o kit é uma corrente em que cada elo depende do anterior — sem marca não há dash, e o dash é dano, vida bônus e saída ao mesmo tempo. Errar a lança de entrada deixa o personagem sem mobilidade dentro do time inimigo, com 150 de vida base e sem defesa ativa além do escudo que regenera sozinho.',
      job: 'Entrar por fora e marcar: chegar pela parede e por rota alta, abrir com a lança marcando o suporte e o atirador (ou o grupo inteiro, no chão entre eles), atravessar com o dash para apagar a marca e refrescar, repetir enquanto existir marca e sair com a última carga antes de o time virar o foco. O dano sai da repetição de dashes, não de troca de tiro.',
      verdict:
        'Pegue o Pantera quando o inimigo tem backline parado (suporte, atirador, Jeff the Land Shark, Rocket Raccoon) e o mapa tem parede para escalar. O combo padrão — lança, dash, lança, dash, Spinning Kick, dash — soma 415 de dano e mata qualquer alvo com 300 de vida ou menos, e o escudo regenerativo permite entrar nessa faixa de vida baixa sem morrer. Não pegue contra anti-dive de controle forte: Peni Parker, The Thing, Angela, Mister Fantastic e Thor são os piores confrontos medidos (Counterwatch e Rivals Tracker), porque travam a entrada e cancelam a corrente. A medição da Temporada 10 é clara e honesta: 47,20% a 47,28% de vitória, abaixo de 50% — o herói depende de execução e de um time que entre atrás do dive.',
      playstyle: [
        'A regra do Pantera é: nunca entre sem uma marca disponível e nunca fique sem uma saída. Você tem duas lanças com 5s de recuperação cada, um kick de 8s e um dash de 10s que zera sozinho toda vez que apaga uma marca. O padrão é entrar por fora — parede, telhado, rota de flanco — com a lança na mão, marcar e só então gastar o dash. O primeiro dash é a entrada; o segundo, o terceiro e o quarto são consequência das marcas que você plantou.',
        'O alvo é sempre a mesma peça: suporte ou atirador isolado. Garras dão 35 por golpe a 0,44s de intervalo (cerca de 2,27 golpes por segundo, somando ~80 de DPS, e ~95 com o bônus de vida baixa), então matar 275 de vida sem as habilidades é lento demais. A cadeia resolve: 50 da lança + 80 do dash + mais uma lança + outro dash + 75 do kick + mais um dash passa de 400 de dano no mesmo alvo em poucos segundos.',
        'Depois de entrar, a decisão que separa o bom do ruim é quando parar. A corrente só continua enquanto existir marca; quando os dois dashes, as duas lanças e o kick acabaram — e a ultimate já foi usada — você é um personagem de 150 de vida parado no meio do inimigo. Guarde o último dash ou a última lança como saída, não como dano: o dash sai em qualquer direção e a parede sempre tem um caminho de volta para cima.',
        'A vida baixa é um recurso, não um aviso. Com o escudo de 125 absorvendo primeiro e a Panther\'s Cunning somando 20% abaixo de 100 de vida, o momento mais forte do herói é justamente quando a barra parece crítica: garras a 42, dash a 96 e ultimate a 180. Nesse estado, a prioridade muda — você quer trocar dano, não fugir, porque qualquer kill refaz a marca e devolve o dash.',
        'Contra alvo aéreo, o plano é outro. As garras têm 3m de alcance e não sobem; o Subtle Step escala parede a 10 m/s e o segundo salto não tem recarga desde 20/03/2026. O combo contra flyer é escalar, marcar com a Bast\'s Descent (o cubo de acerto tem 7m de altura e 20m de largura), e usar o dash — que funciona em qualquer direção — para chegar até o alvo que agora está marcado e visível no ar.',
      ],
      priorityKicker: 'Ordem de decisão',
      priorityTitle: 'O que apertar primeiro em cada fight',
      priorityDescription:
        'O Pantera Negra não tem árvore de upgrades: tem uma fila de prioridades em que cada botão existe para alimentar o próximo. Estas são as seis decisões na ordem em que aparecem numa luta real — e o que faz trocar a ordem.',
      upgradePlan: [
        {
          rank: 1,
          input: 'RMB',
          ability: 'Spear Toss',
          label: 'A lança é a porta: mira no chão, não no alvo',
          baseEffect:
            'Arremessa uma lança de vibranium em arco a 60 m/s que cria um campo esférico de 5m no impacto: 50 de dano, marca de 7s em todos os inimigos dentro do raio. Duas cargas, 5s de recuperação por carga (a ficha oficial ainda imprime 6s; o balance de 20/03/2026 baixou para 5s).',
          fightNote:
            'A marca é aplicada pelo campo, então a lança não precisa acertar ninguém: jogada no chão ou na parede perto de dois alvos, marca os dois. É também rastreador — a marca é visível através de paredes por 7s.',
          why: 'Sem marca o herói não existe: o dash de 10s fica preso e você entra no time inimigo sem dano, sem vida bônus e sem saída. Como a lança marca em área e tem duas cargas, ela é ao mesmo tempo a abertura do combo e o "wallhack" que diz para onde ir depois.',
          swapWhen:
            'Se o inimigo está agrupado e o Damisa-Yao está equipado, inverta: abra com [key:C] (marca em 8m de raio, de graça) e guarde as duas lanças para a segunda e a terceira volta da corrente. Contra alvo aéreo, guarde a lança para depois de subir na parede.',
          sourceIds: ['official-heroes', 'official-balance-20260320', 'wiki-gg-black-panther'],
        },
        {
          rank: 2,
          input: 'Shift',
          ability: 'Spirit Rend',
          label: 'O dash que não acaba quando acha marca',
          baseEffect:
            'Avança em qualquer direção a 50 m/s por até 15m, causando 80 de dano em quem atravessar. Acertar um inimigo marcado limpa a marca, refresca o cooldown na hora e dá +25 de vida bônus. Sem marca, recarga de 10s.',
          fightNote:
            'A vida bônus acumula até 75, ou seja, três refreshes enchem o teto. O que importa é a recarga: cada marca apagada é um dash novo, e a marca é limpa por alvo — atravessar dois marcados conta como dois refreshes.',
          why: 'É o dano, a vida e a saída no mesmo botão: 80 de dano por passada (96 com o bônus de vida baixa) e a única forma de você sair da luta depois de entrar. A diferença entre um Pantera que parece fraco e um que domina o backline é só o número de marcas plantadas antes.',
          swapWhen:
            'Com o dash em cooldown, a ultimate é o substituto: a Bast\'s Descent refresca o Spirit Rend ao acertar. Contra um time que se espalha e nega a marca em área, use o kick para marcar um alvo colado e volte a corrente por ele.',
          sourceIds: ['official-heroes', 'wiki-gg-black-panther', 'guide-marvelrivals-gg-black-panther'],
        },
        {
          rank: 3,
          input: 'Q',
          ability: "Bast's Descent",
          label: 'A ultimate que devolve o dash',
          baseEffect:
            'Invoca a pantera espectral e avança: 150 de dano num cubo de 22m de comprimento, 20m de largura e 7m de altura, com ângulo de 150°, marcando todos os atingidos e refrescando o Spirit Rend. Custa 3300 de energia e dá 50% de redução de dano durante a animação de conjuração.',
          fightNote:
            'O refresh do dash acontece independente da distância do alvo final — mesmo que ninguém seja atingido, se você tiver acertado alguém com a habilidade a marca entra. A redução de 50% vale só no startup: use durante o foco, não depois dele.',
          why: 'É o único reset do kit fora da marca. Com a ultimate você corrige a entrada errada: acerta o grupo, sai marcado por inteiro, o dash volta na hora e a corrente recomeça — tudo isso enquanto 50% do dano é ignorado. Sem ela, um alvo que escapou da lança significa 10s parado sem mobilidade.',
          swapWhen:
            'Em luta de objetivo com o time inimigo empilhado, use a ultimate como abertura (o cubo pega 20m de largura e marca todo mundo) em vez de guardar como saída. Contra dois suportes com cura alta, guarde para o fim do combo, quando o dano de 150 (ou 180 na faixa de vida baixa) fecha a kill que o dash não fechou.',
          sourceIds: ['official-heroes', 'guide-marvel-church-black-panther'],
        },
        {
          rank: 4,
          input: 'E',
          ability: 'Spinning Kick',
          label: 'A segunda marca — e o plano B de fuga',
          baseEffect:
            'Gira e avança até 16m a 15 m/s, causando 75 de dano e aplicando Vibranium Mark nos inimigos atingidos. Recarga de 8s. Desde 20/03/2026 o movimento é omnidirecional (antes era preso a um plano horizontal) e o dano subiu de 70 para 75.',
          fightNote:
            'Tem conjuração longa e alcance curto de giro: é uma marca a mais no meio do combo, não um abridor. Como também é deslocamento, costuma ser o botão vendido como escape.',
          why: 'Com 8s de recarga e sem depender de mira, é a marca mais barata do kit quando as duas lanças já foram gastas — mantém a corrente viva por mais uma volta. E como passou a ser omnidirecional, virou uma saída real: dá para girar para cima, em direção a uma parede ou por cima de um obstáculo baixo.',
          swapWhen:
            'Não use como abertura se o time inimigo tem controle à distância: a conjuração longa transforma o kick numa entrada previsível e você chega marcado. Prefira kick como terceira volta da corrente ou como fuga.',
          sourceIds: ['official-heroes', 'official-balance-20260320', 'guide-marvel-church-black-panther'],
        },
        {
          rank: 5,
          input: 'LMB',
          ability: 'Vibranium Claws',
          label: 'O dano de sustentação entre os dashes',
          baseEffect:
            'Golpes de garra de 35 de dano a 0,44s de intervalo (cerca de 2,27 golpes por segundo, ~80 de DPS), com 3m de alcance. Existe também um melee alternativo em arco por cima, também de 35. Abaixo de 100 de vida os golpes vão a 42.',
          fightNote:
            'O alcance de 3m é o dado mais importante: você precisa estar colado. Use as garras nos intervalos em que o alvo está marcado e o dash ainda está em recarga — e não entre em troca de tiro no corpo a corpo com Vanguarda.',
          why: 'É o que fecha a kill quando a corrente acaba e as marcas estão apagadas: ~42 por golpe na faixa de vida baixa derruba os últimos 100 de vida enquanto o dash volta. Também é o dano que você aplica por trás de um alvo distraído antes de abrir o combo, o que reduz o número de dashes necessários.',
          swapWhen:
            'Se você está sem marca válida e sem dash, não fique nas garras: 3m de alcance dentro do time inimigo é morte. Recue pela parede e espere a próxima lança.',
          sourceIds: ['official-heroes', 'wiki-gg-black-panther'],
        },
        {
          rank: 6,
          input: 'Passiva',
          ability: "Panther's Cunning",
          label: 'A barra que não é o que parece',
          baseEffect:
            'Abaixo de 100 de vida o herói ganha 20% de bônus de dano: garras 35→42, dash 80→96, ultimate 150→180. A vida bônus ganha com o refresh do dash conta como vida extra acima da barra.',
          fightNote:
            'A vida bônus do dash pode empurrar você de volta para fora da faixa de bônus e desligar o +20%. O hotfix de 11/07/2026 acabou com o acúmulo indevido do bônus enquanto o escudo regenerava.',
          why: 'Entender a diferença entre vida e escudo é o que permite jogar no fio: com 125 de escudo na frente, o estado de "vida baixa" (que é o seu pico de dano) chega tarde, e permanecer nele durante a luta não é temeridade — é o plano.',
          swapWhen:
            'Se o time inimigo tem burst alto de uma vez (Hela, Black Widow, The Punisher), não planeje ficar na faixa de vida baixa: mire, entre e saia com o dash. O bônus de 20% não compensa morrer antes do segundo dash.',
          sourceIds: ['official-heroes', 'official-balance-20260710', 'official-balance-20260711'],
        },
      ],
      adaptations: [
        'Contra anti-dive de controle (Peni Parker, The Thing, Angela, Mister Fantastic, Thor): são os piores confrontos medidos do herói — a Peni fecha o site o campo com a armadilha de teia (64,3% de vitória contra ele no recorte da Temporada 10 do Rivals Tracker) e o The Thing tem o pior índice de counter no Counterwatch. Aqui o dive direto no suporte não existe: entre depois que o controle for gasto, use a marca de área para manter a corrente sem se aproximar, e prefira o alvo que está fora da área protegida — ou troque de herói se o mapa não oferecer rota alta.',
        'Contra cura concentrada (Mantis, Luna Snow, Cloak & Dagger, White Fox): o Pantera não tem burst suficiente para passar de dois suportes coordenados. A função muda: em vez de tentar matar, marque o suporte, force a cura para cima dele, e use a marca (visível por 7s) para dizer ao time quem está curado e onde. A kill vem de marcar o alvo do time, não de vencer a barra de cura.',
        'Contra composição aérea (Iron Man, Storm, Human Torch, Ultron): é o confronto em que mais se erra. As garras têm 3m e não sobem; o caminho é escalar a parede pelo Subtle Step (10 m/s, double jump sem recarga desde 20/03/2026), marcar o flyer com a Bast\'s Descent (cubo com 7m de altura) e só então usar o dash em qualquer direção para fechar a distância e cair em cima do alvo marcado.',
        'Contra barreira e cerco de choke (Groot, Doctor Strange, Magneto): parede no meio do caminho cancela a lança e reduz a área do dash a um corredor. Contra esses times, não entre pelo choke: circule, use a marca na parede para rastrear quem passa e ataque a rota de flanco do suporte, ou force a luta em campo aberto no objetivo.',
        'Contra hitscan de longa distância (Hela, Black Widow, The Punisher, Hawkeye): você tem 150 de vida base e a entrada pelo ar é previsível. Nunca cruze a linha de tiro de frente: use parede e cobertura até os 3m das garras, entre por trás e saia com o dash antes de aparecer na segunda vez — eles ganham o duelo perdido no tempo entre o seu primeiro e o segundo dash.',
        'Contra time agrupado no objetivo: é o cenário em que você é melhor. Com o Damisa-Yao equipado, [key:C] marca todo mundo num raio de 8m e aplica slow (45% se a Storm estiver no time, com puxão na direção do Pantera): uma marca de área em seis inimigos significa seis refreshes de dash disponíveis. A ordem é [key:C] → dash → dash → dash, sem gastar lança nenhuma.',
      ],
      ultimates: [
        {
          stance: 'Abertura de dive',
          name: "Bast's Descent",
          bestUse:
            'Backline agrupado: o cubo de 22m de comprimento e 20m de largura pega suporte e atirador de uma vez, marca todos e devolve o dash antes de você entrar. É a abertura que transforma o dive em combo: você entra já com marca plantada em todo mundo.',
          execution:
            'Posicione-se por fora e mire a direção — a habilidade avança um curto espaço depois da conjuração, e a direção é escolhida durante o startup (que é quando você tem 50% de redução de dano). Depois do impacto, use [key:Shift] em um alvo marcado: o dash refresca na hora e a corrente continua pelo grupo.',
          upgradeValue:
            '3300 de energia. Vale guardar para o início das fights de objetivo, quando o time inimigo está empilhado: uma ultimate em seis pessoas marcadas vale 150 de dano, 50% de dano ignorado na entrada e um dash infinito por alguns segundos.',
        },
        {
          stance: 'Reset defensivo e saída',
          name: "Bast's Descent",
          bestUse:
            'Quando a entrada deu errado: dash no cooldown, marca apagada e você sendo focado com 150 de vida base. A ultimate é o único botão que refresca o dash sem depender de marca — e os 50% de redução na conjuração cobrem exatamente o segundo mais perigoso do seu kit.',
          execution:
            'Conjure na direção que quer atravessar (para o time inimigo ou para longe dele), deixe o startup absorver o burst com 50% de redução, e saia com o dash recém-refrescado. No caminho, quem for atingido fica marcado: se a fuga virar contra-ataque, a marca ainda existe.',
          upgradeValue:
            'Usada como reset ela não precisa acertar ninguém para valer — o refresh do dash já é o pagamento. É a diferença entre uma entrada frustrada e uma morte: sem ela, um erro de lança custa 10s de cooldown dentro do time adversário.',
        },
      ],
      dashGuide: {
        ability: 'Spirit Rend',
        shortRule:
          'Dash de 80 de dano em qualquer direção, a 50 m/s, até 15m, com 10s de recarga — que zera na hora quando você atravessa um inimigo marcado, devolvendo também +25 de vida bônus. Regra prática: nunca gaste o dash sem saber de onde vem a próxima marca.',
        mechanics: [
          'A marca é apagada do alvo que você atravessou: encadear no MESMO alvo exige uma marca nova a cada dash (lança, kick ou Damisa-Yao); encadear em alvos DIFERENTES só exige que os dois estejam marcados — daí a lança no chão entre dois inimigos valer mais que a lança na testa de um.',
          'A vida bônus acumula até 75 (três refreshes). Depois disso o refresh continua valendo só pela recarga do dash — o teto é baixo de propósito, e é por isso que a leitura correta é usar o dash como mobilidade e dano, não como cura.',
          'O dash é omnidirecional: sobe, desce e funciona no ar, o que é o que permite alcançar alvo aéreo depois de marcar com a ultimate e sair pelo teto depois de um dive no subsolo. Também é o botão que atravessa a linha do time inimigo sem parar para andar.',
          'Os 10s de recarga são o verdadeiro limitador do herói: sem marca, cada erro custa dez segundos de imobilidade funcional. Antes de entrar, confira sempre a situação das duas lanças (5s de recuperação por carga) e do Spinning Kick (8s) — se as três fontes de marca estão em cooldown, a corrente não existe.',
          'A parede fecha o kit: o Subtle Step sobe a 10 m/s e o segundo salto não tem recarga desde 20/03/2026, então a saída vertical é sempre gratuita e não gasta nada do combo. Depois de um dive no backline, sair por cima é mais barato que gastar o último dash para trás.',
        ],
        drills: [
          'Treino de corrente em dois alvos: no campo de treino, marque dois alvos próximos com uma única lança jogada no chão entre eles, atravesse os dois com o mesmo dash e conte quantos refreshes apareceram — o objetivo é sentir que uma lança pode valer dois dashes.',
          'Treino de sequência longa: execute lança → dash → virar a câmera → lança → dash → kick → dash sem errar a marca. São 415 de dano no mesmo alvo: se em algum ponto o dash não voltar, a falha está na marca, não no dash.',
          'Treino de reset com a ultimate ([key:Q]) no meio da corrente: entre, gaste os dois dashes, use a ultimate para refrescar e continue. Quem treina só a abertura descobre na partida que não sabe sair quando o dash falha.',
          'Treino de verticalidade: suba a parede, dê o segundo salto, e use o dash para baixo, para cima e para o lado no meio do ar. Contra alvo aéreo e contra fuga por altura, esse é o movimento que decide a kill.',
        ],
      },
      patterns: [
        {
          title: 'Corrente no backline (padrão principal)',
          steps: [
            'Chegue por fora: parede, telhado ou rota de flanco, sem aparecer no ângulo do suporte — o Pantera não ganha luta de aproximação no aberto.',
            'Abra com a lança ([key:RMB]) jogada no CHÃO entre o suporte e o atirador: o campo de 5m marca os dois e o dano de 50 já entra.',
            'Atravesse com o dash ([key:Shift]) os dois alvos marcados: cada um apaga a marca dele e devolve um dash — o refresh é o que permite continuar.',
            'Vire a câmera e repita: segunda lança ou o Spinning Kick ([key:E]) para marcar de novo, e um dash por marca. As garras entram nos intervalos de recarga.',
            'Saia com o último dash ou pela parede antes de o time virar o foco, e volte pela rota oposta — o mesmo ângulo duas vezes não funciona.',
          ],
        },
        {
          title: 'Ultimate como reset para não morrer',
          steps: [
            'Perceba o erro a tempo: dash no cooldown, marca apagada, dois ou três inimigos olhando para você.',
            'Conjure a Bast\'s Descent ([key:Q]) na direção de saída — o startup absorve 50% do dano que está vindo.',
            'Use o dash recém-refrescado para atravessar a parede da luta, para cima (parede) ou por cima do time inimigo.',
            'Se alguém foi atingido pela ultimate, ele ficou marcado: olhe a marca através da parede e decida se vale voltar — a corrente já está rearmada.',
            'Reagrupe e volte a lutar pelo flanco, não pelo meio: a ultimate já foi, o seu poder agora é a marca que sobrou no inimigo.',
          ],
        },
        {
          title: 'Marca em área com o Damisa-Yao',
          steps: [
            'Confirme o Team-Up equipado na sala de spawn ([key:C] com o Storm escolhido como parceiro).',
            'Espere o time inimigo se agrupar no objetivo — dois ou mais alvos dentro de 8m já valem a habilidade.',
            'Use [key:C] para marcar todos no raio com slow de 35% (45% e puxão na direção do Pantera se a Storm estiver no time).',
            'Encadeie dashes pelas marcas sem gastar lança: cada alvo marcado atravessado devolve o dash e soma +25 de vida bônus.',
            'Guarde as duas lanças para a segunda volta, quando as marcas da área já tiverem sido consumidas — assim a corrente dura a fight inteira.',
          ],
        },
        {
          title: 'Caçar alvo aéreo',
          steps: [
            'Não tente pular até o flyer: garras e kick não chegam, e o alvo vê você subindo de longe.',
            'Suba a parede pelo Subtle Step mantendo o alvo fora do campo de visão dele e planeje onde quer cair.',
            'Marque com a Bast\'s Descent ([key:Q]) — o cubo tem 7m de altura e 20m de largura e marca o alvo no ar.',
            'Use o dash em qualquer direção para fechar os 15m até o alvo marcado e caia nas garras (35, ou 42 na faixa de vida baixa).',
            'Saia pelo outro lado, de preferência com o segundo dash da marca ou por outra parede: pairar no céu é a morte do Pantera.',
          ],
        },
      ],
      mistakes: [
        'Entrar sem marca. A lança de abertura que erra o alvo e o terreno deixa você com um dash de 10s de recarga e nada mais — dentro do time inimigo, com 3m de alcance de garra e 150 de vida base. Mire no chão entre os alvos, não na silhueta deles: o campo de 5m perdoa o erro de mira e ainda marca em área.',
        'Gastar os dois dashes no mesmo alvo. O primeiro dash apaga a marca dele; sem uma segunda marca (a segunda lança, o kick ou a área), o segundo dash é só 80 de dano e 10s de espera. Um dash sem marca é um dash desperdiçado.',
        'Usar a ultimate apenas como dano. Ela é o único reset do kit fora da marca e dá 50% de redução de dano na conjuração: usada como reset, salva a entrada; usada só no fim da luta, vale 150 de dano e nada mais.',
        'Achar que a faixa de vida baixa é invencibilidade. O +20% é dano, não sobrevivência, e a barra de 150 de vida + 125 de escudo já foi desenhada para essa troca — mas o burst de Hela, Black Widow ou The Punisher atravessa o escudo e mata antes do segundo dash. Contra esse tipo de time, o bônus é o que existe, não o plano.',
        'Ficar na luta depois que a corrente acabou. Sem dashes, sem lança e sem kick você é um Duelista de 3m de alcance com 150 de vida: a kill perdida é a sua morte, e a saída é vertical e gratuita pela parede.',
        'Tentar duelar Vanguarda de frente. O Pantera perde qualquer troca de dano contra The Thing, Thor, Magneto ou Emma Frost: o alvo é sempre o suporte e o atirador atrás deles. Vanguarda só vale como alvo quando já está marcada como caminho do dash.',
        'Ignorar que a marca dura 7s. Marca é rastreador e é o que mantém a corrente viva — deixar uma marca expirar sem usar é jogar fora um dash de graça, e a informação de onde o suporte está é metade do valor do herói.',
      ],
      evidence: [
        'Ficha oficial do herói (marvelrivals.com): 150 de vida + 125 de escudo regenerativo (275), movimento de 7 m/s, garras de 35 a 0,44s por golpe com 3m de alcance, Spinning Kick de 75 a 16m com 8s, Spear Toss de 50 com 60 m/s, duas cargas e campo de 5m, Spirit Rend de 80 a 15m com 10s e +25 de vida bônus (teto 75), Bast\'s Descent com 150 de dano, cubo de 22x20x7m, 3300 de energia, 50% de redução de dano na conjuração e refresh do dash, além da passiva Panther\'s Cunning (+20% abaixo de 100 de vida).',
        'Página oficial de Team-Up: as duas opções canônicas da temporada, ambas na tecla [key:C] — Damisa-Yao (Storm) com 30 de dano, slow de 35%/45%, raio de 8m, 15s de recarga e puxão no aprimorado; e Dimensional Shortcut (Magik) com 35s de recarga, 50 de vida bônus, explosão de 8m e 40 de dano, e cancelamento do teleporte no aprimorado. O bloco legado Gamma Vibranium Armor (Hulk/Namor) que ainda aparece na ficha é de uma temporada anterior e não é uma das duas opções atuais.',
        'Balance posts oficiais de 2026: 16/01 (Spear Toss de 45 para 50; Bast\'s Descent ganha 50% de redução de dano na conjuração), 20/03 (Spinning Kick omnidirecional e de 70 para 75; recuperação por carga da Spear Toss de 6s para 5s; recarga do segundo salto do Subtle Step removida), 10/07 (vida base de 275 para 150 e adição de 125 de escudo regenerativo), 11/07 (hotfix do bônus de dano acumulando durante a regeneração do escudo) e 07/08 (nerf do Damisa-Yao: dano de área de 40 para 30 e recarga de 12s para 15s).',
        'Balance post da Temporada 10 (patch 20260911): o herói não tem nenhuma linha própria — as duas menções ao Pantera na temporada estão nos Team-Ups de outros heróis (Peni Parker com o Vibranium Mech, recarga de 20s para 15s, e Black Cat com o Feline Alliance ganhando 50 de Fortune por acerto). É por isso que os números deste guia são os do patch de 07/08/2026.',
        'Wiki.gg: é a fonte das mecânicas finas descritas no guia — a limpeza da marca pelo dash com refresh imediato e vida bônus, a duração de 7s da marca, o melee alternativo de 35 e a escala de parede a 10 m/s. Atenção: a página ainda lista 3s de recarga no double jump e o Spinning Kick como horizontal, ambos derrubados pelo patch de 20/03/2026.',
        'Fandom (página do herói e histórico de balance) e Patch Delta: usados para reconstruir a cronologia das mudanças de 2025 e 2026 (vida de 300 para 275 em 12/09/2025; vida bônus do Spirit Rend de 30 para 25 e teto de 120 para 75; cooldown do dash de 8s para 10s em 08/08/2025; dano do kick e recarga da lança em 20/03/2026) e para confirmar que a última mudança direta do herói é de 07/08/2026.',
        'Batru (Temporada 10, atualizado em 22/09/2026) e Rivals Tracker: win rate medido do herói em 47,20% (20.822 partidas, 6,97% de pick) e 47,28% (88.749 partidas, ban de 12,77%), com as duplas dos Team-Ups — Damisa-Yao 59,95% em 407 partidas contra Dimensional Shortcut 47,85% em 1.093. As melhores duplas medidas são Peni Parker (63,96%), Storm (59,95%) e Devil Dinosaur (59,76%), e as piores Squirrel Girl (30,52%), Hawkeye (33,42%) e Black Widow (33,92%).',
        'Confrontos medidos (Counterwatch e Rivals Tracker): piores enfrentamentos contra Peni Parker (64,3% de vitória contra o Pantera), Mantis (60,2%), Magik (57,4%), Gorr (57,2%) e The Thing; e o herói domina Jeff the Land Shark, Rocket Raccoon, Squirrel Girl, Invisible Woman e Mantis quando está do outro lado.',
        'Guias e comunidade: marvelrivals.gg (a visão da corrente de marcas e o combo de quatro tempos para matar alvos de até 300 de vida), Marvel Church (uso do kick como escape pela conjuração longa e leitura de que o herói é punido por controle), GameSpot (a avaliação de que o combo específico torna o herói dependente de execução), RivalsTeamUps (96% de 71 votos para o Damisa-Yao) e a discussão no Reddit sobre subir parede para marcar alvo aéreo antes de dash. Marvel Church e GameSpot são da Season 4 e trazem 300 de vida, dash de 8s e 40 de vida bônus por marca — serviram apenas para combo e posicionamento, nunca como número.',
      ],
      abilityLoop: [
        { ability: 'Spear Toss', input: 'RMB' },
        { ability: 'Spirit Rend', input: 'Shift' },
        { ability: 'Spinning Kick', input: 'E' },
        { ability: "Bast's Descent", input: 'Q' },
        { ability: 'Vibranium Claws', input: 'LMB' },
      ],
    },
  },
  sources: [
    {
      id: 'official-heroes',
      kind: 'official',
      title: 'BLACK PANTHER — página oficial do herói',
      url: 'https://www.marvelrivals.com/20241123/41360_1195677.html',
      author: 'Marvel Rivals / NetEase',
      published: 'ficha de 2024-11-23; valores conferidos em 2026-09-22',
      confidence: 'alta',
      takeaways: [
        'Duelista (T\'Challa), vida de 150 + 125 de escudo regenerativo (275 no total) e movimento de 7 m/s — os 300 de vida ainda citados pela IGN e por guias da Season 4 estão defasados.',
        'Números auditados: Vibranium Claws 35 com 3m e 0,44s por golpe; Spinning Kick 75, 16m, 8s; Spear Toss 50, 60 m/s, campo de 5m, 2 cargas; Spirit Rend 80, 15m, 10s, +25 de vida bônus com teto de 75; Bast\'s Descent 150, cubo 22x20x7m, 3300 de energia e 50% de redução de dano na conjuração.',
        'Panther\'s Cunning: gatilho em vida abaixo de 100 e +20% de dano. Subtle Step: escala de parede a 10 m/s.',
        'Os dois Team-Ups da temporada aparecem com os textos de efeito base e aprimorado, ambos na tecla [key:C]: Damisa-Yao (Storm) e Dimensional Shortcut (Magik).',
        'Atenção: a ficha ainda imprime 6s de recuperação por carga da Spear Toss, valor derrubado para 5s pelo balance de 20/03/2026 — e ainda carrega o bloco legado Gamma Vibranium Armor (Hulk/Namor), que não é uma das duas opções atuais.',
      ],
    },
    {
      id: 'official-teamups',
      kind: 'official',
      title: 'TEAM-UP — página oficial do sistema de Team-Ups',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Fonte canônica dos nomes e parceiros: o Pantera Negra tem exatamente duas opções na temporada, ambas na tecla [key:C] — Damisa-Yao com a Storm e Dimensional Shortcut com a Magik.',
        'Damisa-Yao (base): 30 de dano em raio esférico de 8m, slow de 35% por 2s e aplicação de Vibranium Mark em todos os inimigos do raio, com 15s de recarga. Aprimorado com a Storm: puxão dos inimigos na direção do Pantera e slow de 45%.',
        'Dimensional Shortcut (base): disco de Limbo que devolve o herói à posição de alguns segundos antes com 50 de vida bônus; ao terminar, o disco explode num campo de 8m com 40 de dano aplicando marcas. Recarga de 35s. Aprimorado com a Magik: cancelamento manual do teleporte no meio do trajeto.',
        'O script local de assets validou os nomes oficiais das duas habilidades ao baixar os ícones — nenhum aviso de divergência de nome nesta sessão.',
      ],
    },
    {
      id: 'official-balance-s10',
      kind: 'official',
      title: 'Marvel Rivals Version 20260911 Balance Post (Temporada 10)',
      url: 'https://www.marvelrivals.com/20260908/41525_1313334.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-09-08',
      confidence: 'alta',
      takeaways: [
        'O Pantera Negra NÃO tem linha própria no balance da Temporada 10 — as duas menções ao herói são em Team-Ups de outros: Peni Parker (Vibranium Mech, recarga de 20s para 15s) e Black Cat (Feline Alliance, ganha 50 de Fortune por acerto, teto de 100).',
        'Mudança global de Estrategistas na temporada: conversão de cura em energia de 70% para 65% e de dano em energia de 55% para 50%, o que atrasa as ultimates de suporte — contexto que ajuda o dive, já que o Pantera depende de matar antes de a cura inimiga fechar a barra.',
      ],
    },
    {
      id: 'official-balance-20260807',
      kind: 'official',
      title: 'Marvel Rivals Version 20260807 Balance Post (Season 9.5)',
      url: 'https://www.marvelrivals.com/balancepost/20260804/41667_1309952.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-08-04',
      confidence: 'alta',
      takeaways: [
        'Única mudança direta no herói em 2026 depois de março, e ela é no Team-Up com a Storm: "When selecting the Team-Up with Storm, reduce the area damage to enemies from 40 to 30, and increase the cooldown from 12s to 15s".',
        'É essa linha que explica por que a ficha oficial hoje mostra 30 de dano e 15s de recarga no Damisa-Yao — e por que a opção com Storm, mesmo sendo a recomendada, perdeu parte do dano de área que fazia dela uma escolha quase gratuita.',
      ],
    },
    {
      id: 'official-balance-20260710',
      kind: 'official',
      title: 'Marvel Rivals Version 20260710 Balance Post (Season 9)',
      url: 'https://www.marvelrivals.com/balancepost/20260706/41667_1306647.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-07-06',
      confidence: 'alta',
      takeaways: [
        'Reestruturação de vida do herói, com nota de design: "The King of Wakanda swaps raw vitality for Vibranium-grade Regenerative Shields perfect for pouncing from the flanks" — Reduce base Health from 275 to 150; Add 125 Regenerative Shield.',
        'É a origem do total de 275 que a ficha oficial exibe hoje, e o motivo pelo qual a faixa de vida baixa (gatilho da Panther\'s Cunning, abaixo de 100) exige perder o escudo inteiro antes de acender.',
        'No mesmo patch, a retirada dos bônus de âncora de Team-Up acontece em vários heróis — contexto do sistema de Team-Up da temporada.',
      ],
    },
    {
      id: 'official-balance-20260711',
      kind: 'official',
      title: 'Marvel Rivals Version 20260711 Balance Post (hotfix)',
      url: 'https://www.marvelrivals.com/balancepost/20260711/41667_1307328.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-07-11',
      confidence: 'alta',
      takeaways: [
        'Hotfix de emergência: "Fixed an issue where Black Panther would incorrectly accumulate a damage boost when his recoverable shield was restoring, causing abnormal damage".',
        'Consequência prática para o guia: o +20% da Panther\'s Cunning vale hoje só com a vida abaixo de 100 — não existe mais acúmulo de bônus enquanto o escudo regenerativo se recupera, o que muda a leitura da barra em luta.',
      ],
    },
    {
      id: 'official-balance-20260320',
      kind: 'official',
      title: 'Marvel Rivals Balance Posts 20260320 (Season 7)',
      url: 'https://www.marvelrivals.com/balancepost/20260319/41667_1292065.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-03-16 e 2026-03-19',
      confidence: 'alta',
      takeaways: [
        'Dois posts na mesma data com ajustes do herói: "Spinning Kick New Effect: The dash movement is now omnidirectional. T\'Challa is no longer bound to a flat plane!" e aumento de 70 para 75 no dano do kick; "Reduce Spear Toss recovery time per charge from 6s to 5s".',
        'O segundo post remove a recarga do segundo salto do Subtle Step ("no cooldown for jumping after detaching from a wall") — é o que hoje faz da saída vertical a rota gratuita do kit.',
        'São essas três linhas que tornam defasadas as páginas de wiki que ainda descrevem o kick como movimento horizontal e o double jump com 3s de recarga.',
      ],
    },
    {
      id: 'wiki-gg-black-panther',
      kind: 'database',
      title: 'Black Panther — The Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Black_Panther',
      published: '2025-10-16 (editado); conferido em 2026-09-22',
      confidence: 'alta',
      takeaways: [
        'É a fonte das mecânicas finas: acertar um inimigo marcado com o Spirit Rend limpa a marca, refresca o cooldown instantaneamente e concede vida bônus; a marca dura 7s e é visível através das paredes.',
        'Detalhes de recurso que a ficha oficial não abre: melee alternativo de 35 em arco por cima, 2 golpes por segundo nas garras, wall-crawl de 10 m/s e o dash executável em qualquer direção.',
        'Divergências registradas: a página lista 3s de cooldown no segundo salto do Subtle Step e descreve o Spinning Kick como horizontal apenas — os balance posts de 20/03/2026 removeram a recarga do salto e tornaram o kick omnidirecional, então o guia usa os valores pós-patch.',
        'Também mantém o Team-Up antigo Wakandan Master (Magik/Psylocke) marcado como indisponível — histórico, não é uma das duas opções atuais.',
      ],
    },
    {
      id: 'fandom-black-panther',
      kind: 'database',
      title: 'Black Panther — Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Black_Panther',
      published: '2026',
      confidence: 'media',
      takeaways: [
        'Confirma o papel de Duelista e as duas opções de Team-Up da temporada (Damisa-Yao com Storm e Dimensional Shortcut com Magik), com a nota de que Team-Ups de mesmo nome não são idênticos aos da era pré-Season 9.',
        'Registra o histórico de nerfs estruturais do herói: vida de 300 para 275 (12/09/2025), vida bônus do Spirit Rend de 30 para 25 e teto de 120 para 75, e cooldown do dash de 8s para 10s (08/08/2025).',
        'Atenção: a página carrega 300 de vida e o dash de 8s em trechos antigos, valores derrubados pelos patches listados acima e pela reestruturação de 10/07/2026 — usada como estrutura e histórico, nunca como número atual.',
      ],
    },
    {
      id: 'fandom-balance-black-panther',
      kind: 'database',
      title: 'Black Panther/Balance Changes — Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Black_Panther/Balance_Changes',
      published: '2026',
      confidence: 'media',
      takeaways: [
        'Cronologia consolidada das mudanças: Season 6 (16/01/2026) com Spear Toss de 45 para 50 e a Bast\'s Descent ganhando 50% de redução de dano na conjuração; Season 4 (12/09/2025) com vida de 300 para 275 e vida bônus do dash de 30 para 25; Season 3.5 (08/08/2025) com o cooldown do Spirit Rend de 8s para 10s.',
        'Serve como registro de patch para as mudanças de janeiro de 2026, cujos valores o guia confirma na ficha oficial (Spear Toss 50 e os 50% de redução de dano da ultimate).',
      ],
    },
    {
      id: 'patchdelta-black-panther',
      kind: 'database',
      title: 'Black Panther Patch History — MR Patch Delta',
      url: 'https://patchdelta.gg/marvelrivals/black-panther',
      published: '2026-08-27',
      confidence: 'alta',
      takeaways: [
        'Rastreador independente com o delta acumulado: "14 net stat changes across 8 patches — 3 buffs, 7 nerfs, 4 neutral" e a confirmação de que a última mudança do herói é a de 07/08/2026 (o herói não foi mexido nos patches de 27/08/2026 nem da Temporada 10).',
        'Confirma em um só lugar as mudanças de 2026: Spinning Kick omnidirecional + 70 para 75 e Spear Toss com recuperação por carga de 6s para 5s e recarga do segundo salto removida (20/03); vida base de 275 para 150 + 125 de escudo regenerativo (10/07); hotfix do bônus de dano durante a regeneração do escudo (11/07).',
      ],
    },
    {
      id: 'batru-black-panther',
      kind: 'database',
      title: 'Black Panther Team-Ups — Batru (win rates medidos da dupla, Temporada 10)',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/black-panther',
      published: '2026-09-22',
      confidence: 'alta',
      takeaways: [
        'Win rate geral do herói nas partidas ranqueadas medidas: 47,20% com 6,97% de pick sobre 20.822 partidas — abaixo de 50%, o que sustenta a leitura de herói de execução.',
        'As duas opções medidas na temporada: Damisa-Yao com a Storm em 59,95% (407 partidas) contra Dimensional Shortcut com a Magik em 47,85% (1.093 partidas).',
        'Melhores duplas medidas na temporada: Peni Parker (63,96%, +16,8 pp), Storm (59,95%, +12,8 pp) e Devil Dinosaur (59,76%); piores: Squirrel Girl (30,52%), Hawkeye (33,42%) e Black Widow (33,92%).',
        'Ressalva metodológica do próprio site, registrada no guia: a dupla medida mistura a força individual dos dois heróis no meta — a vantagem do Storm também é vantagem do Storm, não só do Team-Up.',
      ],
    },
    {
      id: 'rivalstracker-black-panther',
      kind: 'database',
      title: 'Black Panther Stats, Win Rate & Leaderboard (Season 10) — Rivals Tracker',
      url: 'https://rivalstracker.com/heroes/black-panther',
      published: '2026-09 (dados da Season 10)',
      confidence: 'alta',
      takeaways: [
        'Temporada 10, todos os ranks: 47,28% de vitória, tier C, 37º de 56 heróis, 4,52% de pick e 12,77% de ban acima do Gold, sobre 88.749 partidas ranqueadas.',
        'Melhores picks contra o herói: Peni Parker (64,3% de vitória contra ele), Mantis (60,2%), Magik (57,4%), Gorr (57,2%), Hela (56,5%) e Storm (56,4%) — a base das adaptações de confronto do guia.',
      ],
    },
    {
      id: 'rivalstracker-teamups',
      kind: 'database',
      title: 'Marvel Rivals Team-Up Tier List (Season 9.5, Diamond+) — Rivals Tracker',
      url: 'https://rivalstracker.com/tier-list/team-ups',
      published: '2026-09 (dados da Season 9.5)',
      confidence: 'media',
      takeaways: [
        'No recorte anterior, Damisa-Yao (Pantera Negra + Storm) aparecia com 64,04% de vitória e 0,15% de pick, contra 56,92% e 0,43% do Dimensional Shortcut (Pantera Negra + Magik) — a mesma direção da medição atual do Batru.',
        'O recorte mostra também que a amostra da opção com Storm é estruturalmente pequena (pick de 0,15%): a escolha é boa, mas raramente aparece em partida ranqueada por depender de um parceiro específico.',
      ],
    },
    {
      id: 'counterwatch-black-panther',
      kind: 'database',
      title: 'Black Panther Counters & Win Rate · Marvel Rivals — Counterwatch',
      url: 'https://www.counterwatch.gg/stats/marvel-rivals/heroes/black-panther',
      published: '2026-09',
      confidence: 'media',
      takeaways: [
        'Win rate de 52,0% em 47.064 partidas comunitárias e a leitura de arquétipo "leans DIVE" — número mais alto que o Batru e o Rivals Tracker, o que o guia registra como divergência de recorte (a página mistura modos e ranks).',
        'Confrontos mais duros: The Thing (+17,6), Peni Parker (+16,2), Angela (+15,1), Mister Fantastic (+13,3) e Thor (+12,4), medidos por duelo e resultado de teamfight, não por win rate de partida.',
        'Presas mais fáceis: Jeff the Land Shark, Rocket Raccoon, Squirrel Girl, Invisible Woman e Mantis — a lista de alvos que justifica escolher o herói no draft.',
      ],
    },
    {
      id: 'rivalsteamups-black-panther',
      kind: 'forum',
      title: 'Best Black Panther Team-Ups — votação da comunidade — RivalsTeamUps',
      url: 'https://rivalsteamups.com/heroes/black-panther',
      published: '2026-09',
      confidence: 'media',
      takeaways: [
        'Veredito da ferramenta para os dois Team-Ups do herói: Damisa-Yao à frente com 96% de 71 votos contra o Dimensional Shortcut.',
        'A leitura registrada pela própria página é que o Damisa-Yao é a rota tática mais específica (marcar e desacelerar em área, com puxão no aprimorado), enquanto o Dimensional Shortcut troca isso por uma janela de reposicionamento — e a ferramenta avisa que a votação é preferência, não medição de desempenho.',
      ],
    },
    {
      id: 'guide-marvelrivals-gg-black-panther',
      kind: 'guide',
      title: 'Black Panther Guide — MarvelRivals.gg',
      url: 'https://marvelrivals.gg/black-panther-guide',
      published: '2026',
      confidence: 'media',
      takeaways: [
        'Explica a lógica da corrente: a marca aplicada pela lança ou pelo kick é o que faz o dash se recarregar instantaneamente, e o combo é "marca, dash, vira, marca, dash" — ideia central que o guia confirma com os números oficiais.',
        'Combo de quatro tempos recomendado: lança → dash → vira a câmera → lança → dash → kick → dash, que segundo a fonte mata qualquer pessoa com 300 de vida ou menos, sobrando um dash como escape.',
        'Macetes de entrada: golpear de garras uma ou duas vezes nas costas de um alvo distraído antes de abrir o combo para reduzir o número de habilidades necessárias, e usar a ultimate em qualquer ponto da corrente porque o tempo da conjuração ajuda a recarregar uma terceira lança.',
      ],
    },
    {
      id: 'guide-marvel-church-black-panther',
      kind: 'guide',
      title: 'Black Panther Guide — Marvel Church',
      url: 'https://www.marvel.church/marvel-rivals-black-panther',
      published: 'Season 4 (números defasados)',
      confidence: 'media',
      takeaways: [
        'Leitura de uso do kick: por ter conjuração longa, o Spinning Kick vale mais como escape do que como ataque — só use ofensivamente quando tiver certeza de que fecha a kill. O guia registra isso como decisão de risco, junto com a nota de que o kick permite escolher a direção durante a conjuração.',
        'Recomendação de abertura com a lança: sempre que possível marcar o alvo com a Spear Toss antes do dash, porque ela tem alcance grande e conjuração curta, o que acelera o combo.',
        'Ponto fraco estrutural apontado: a Magik (parceira do Team-Up) também não lida bem com alvos aéreos, então o par fica vulnerável a Iron Man, Storm e afins — o guia trata esse cenário na adaptação contra composição aérea.',
        'Atenção: os números da página são da Season 4 (300 de vida, dash de 8s, 40 de vida bônus por marca e teto de 120) e não foram usados — só a leitura de uso das habilidades.',
      ],
    },
    {
      id: 'guide-gamespot-black-panther',
      kind: 'guide',
      title: 'Marvel Rivals Duelist Tier List — GameSpot',
      url: 'https://www.gamespot.com/gallery/marvel-rivals-best-duelist-dps-heroes/2900-6105',
      published: 'Season 4 (números defasados)',
      confidence: 'media',
      takeaways: [
        'Diagnóstico que sustenta a dificuldade 4/5 do guia: o Pantera depende de um combo específico e tem pouca margem — errar qualquer peça da sequência deixa o dano curto, e os próprios deslocamentos rápidos dificultam a mira do jogador.',
        'Registra a função da ultimate dentro do combo: 150 de dano com marca, servindo para fechar alvo já baixo ou compensar uma habilidade perdida.',
        'Atenção: a página é da Season 4 e traz números antigos; usada apenas para o diagnóstico de execução e uso da ultimate.',
      ],
    },
    {
      id: 'reddit-black-panther-tips',
      kind: 'forum',
      title: 'Tips for playing Black Panther? — r/marvelrivals',
      url: 'https://www.reddit.com/r/marvelrivals/comments/1i92thz/tips_for_playing_black_panther',
      published: '2025-01',
      confidence: 'media',
      takeaways: [
        'Consenso de abertura contra alvo aéreo: subir por uma parede alta perto de onde o alvo está, marcar com a lança, dash para entrar e dash de novo para sair — exatamente o padrão de caça aérea descrito no guia.',
        'Leitura feita por snippet de busca: o Reddit bloqueia a leitura integral da thread (403 mesmo com user-agent de navegador), então o registro é a recomendação do trecho retornado na busca, não a thread completa.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Site Oficial & Patch Notes',
      count: 7,
      status:
        'Ficha oficial do herói, página oficial de Team-Up e cinco posts oficiais de balance auditados (16/01/2026, 20/03/2026, 10/07/2026, 11/07/2026 e 07/08/2026), além do balance post da Temporada 10 confirmando que o herói não teve linha própria na temporada.',
    },
    {
      kind: 'database',
      label: 'Wiki & Base Pública',
      count: 5,
      status:
        'wiki.gg (mecânica da marca, do refresh e da escala de parede), Fandom (herói e histórico de balance), Patch Delta (delta acumulado por patch) e Batru + Rivals Tracker + Counterwatch com win rates do herói, das duas duplas e dos confrontos — todos com as divergências de recorte registradas no confidenceSummary.',
    },
    {
      kind: 'guide',
      label: 'Guias Especializados',
      count: 3,
      status:
        'MarvelRivals.gg (lógica da corrente e combo de quatro tempos), Marvel Church (uso do kick e ponto fraco contra alvo aéreo) e GameSpot (diagnóstico de execução). Os dois últimos são da Season 4 e foram usados só para leitura de jogo, com números marcados como defasados.',
    },
    {
      kind: 'forum',
      label: 'Comunidade & Fóruns',
      count: 2,
      status:
        'Votação da comunidade do RivalsTeamUps entre as duas opções de Team-Up (96% para o Damisa-Yao) e a thread do r/marvelrivals sobre entrar por parede para marcar alvo aéreo, lida por snippet porque o Reddit bloqueia acesso direto.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos & Transcrições',
      count: 0,
      status:
        'Pendente (nenhum vídeo com transcrição auditável foi processado nesta sessão; a cobertura ficou com ficha oficial, patch notes, wiki, bases de win rate, guias escritos e fórum).',
    },
  ],
}
