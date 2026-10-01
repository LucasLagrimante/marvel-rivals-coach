import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const ironFist: HeroGuide = {
  id: 'iron-fist',
  name: 'Iron Fist',
  aliases: ['Lin Lie', 'Punho de Ferro', 'O Imortal', 'Shou-Lao'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/iron_fist.png'),
  bannerUrl: publicAsset('heroes/banners/iron_fist.png'),
  selectionPortraitUrl: publicAsset('heroes/select/iron_fist.png'),
  selectionHoverUrl: publicAsset('heroes/select/iron_fist_champion.gif'),
  selectionHoverFit: { scale: 1.25, x: 0, y: -8 },
  theme: {
    primary: '#1f8a4c',
    primaryRgb: '31, 138, 76',
    secondary: '#e0b422',
    secondaryRgb: '224, 180, 34',
    surface: '#04140b',
    surfaceRgb: '4, 20, 11',
  },
  roles: ['duelist'],
  lastVerified: '2026-10-01',
  confidenceSummary:
    'Vida (300) e nomes de habilidade conferidos na página oficial de habilidades do herói e na wiki.gg; a wiki.gg está stale em várias mecânicas (Yat Jee Chung Kuen aparece com 10 + 2,1% e Jeet Kune Do com 30/50, valores pré-patch). Todos os números do kit vieram da página oficial /20241201/41360_1197227.html, já com o buff de 11/09/2026. Duas divergências permanecem registradas: (1) o texto oficial descreve Jeet Kune Do apenas como reductora de cooldown, enquanto bases de dados (rivalsmeta, rivalsheroes) acrescentam que o último golpe lança o inimigo para cima — o lançamento é coerente com o Team-Up Iron & Stone, mas não está no texto oficial; (2) fontes de terceiro e o Balance Post de 12/05/2026 divergem sobre a reduction de cooldown por acerto (1,2s oficial vs 1s em IGN/marvelrivals.net) — o oficial manda. Uma terceira fonte (rivalsheroes) ainda traz Living Chi com custo 3400; o valor pós-balance é 3100.',
  coreRead: [
    'Jeet Kune Do recarrega o Dragon\'s Defense: cada um dos 5 acertos tira 1,2s do cooldown de 15s. Encher a combo inteira zera quase metade da recarga — é assim que a defesa volta a estar disponível em segundos dentro da mesma briga.',
    'Yat Jee Chung Kuen escala com a vida máxima do alvo (8 + 3,1% por soco, 7 socos/s). Contra Vanguard de 750 de vida isso é ~31 por soco: o mesmo botão que é fraco contra um Strategist de 250 vira o maior dano do kit contra tanque.',
    'Living Chi ([key:Q]) não é um botão de burst, é uma ferramenta: +30% de dano, +20% de velocidade, +100% de alcance no Yat Jee Chung Kuen e −80% de cooldown do próprio soco. Ative antes do dive, nunca no meio da troca.',
  ],
  teamUps: {
    summary:
      'Iron & Stone é o padrão solo e o melhor em fila de dupla: uppercut de launch com 12s de cooldown e a sweeping leg sweep de follow-up, que hoje dispara mesmo sem o Thing no time. Kumiho Palm compensa a falta de Vanguard com cura em área no soco e lock-on esticado — vale quando o time não tem como te sustentar.',
    recommended: 'Iron & Stone',
    recommendedReason:
      'O base (uppercut que lança o inimigo) é o melhor controle de posicionamento do kit: cancela o voo de Iron Man, Storm e Namor e cria uma janela de Team-Up para o Yat Jee Chung Kuen. O balance de 11/09/2026 melhorou justamente esta opção — chain da sweeping leg sweep liberada mesmo sem o Thing presente, cooldown de 8s para 12s e dano do segundo golpe de 45 para 50. A comunidade mede Iron & Stone como a mais escolhida (57% dos 86 votos no rivalsteamups; Rivals Tracker marca 57,55% de win rate da dupla contra 54,62% da dupla da White Fox). A Batru mede o contrário (51,25% com o Thing x 55,21% com a White Fox): o número mistura a força individual de cada parceiro no meta, então a divergência fica exposta em vez de escondida. Em fila de duplo quick play com White Fox e Ultron/Loki no time, Kumiho Palm passa a ser a leitura melhor, porque o lock-on esticado é o que realmente conserta o problema de alcance do Yat Jee Chung Kuen.',
    options: [
      {
        name: 'Iron & Stone',
        partner: 'Thing',
        partnerRole: 'Vanguard',
        input: 'C',
        baseEffect:
          'Solta um uppercut poderoso que lança para cima os inimigos atingidos.',
        enhancedEffect:
          'Com o Thing no time, o uppercut pode ser encadeado diretamente em uma sweeping leg sweep de follow-up.',
        bestFor:
          'Controle aéreo e abertura de kill. Lança o alvo para cima, quebra a linha de visão e ainda vira burst quando o Thing entra no encadeamento. Também é a única das duas que funciona bem em solo.',
        easySetup:
          'Thing na vanguarda. Sem ele, o uppercut base já lança e, desde 11/09/2026, a sweeping leg sweep continua disponível depois do primeiro acerto.',
        iconUrl: publicAsset('teamups/iron-fist-iron-stone-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/iron-fist-iron-stone-partner.png'),
      },
      {
        name: 'Kumiho Palm',
        partner: 'White Fox',
        partnerRole: 'Duelista',
        input: 'LMB',
        baseEffect:
          'Acertar um inimigo com Yat Jee Chung Kuen gera uma rajada de cura para os aliados próximos.',
        enhancedEffect:
          'Com a White Fox no time, a distância de lock-on do Yat Jee Chung Kuen aumenta significativamente.',
        bestFor:
          'Equipes sem Vanguard de peel e com alvo aéreo: a cura no soco substitui parte do suporte e o lock-on esticado é a correção direta do defeito do kit (alcance de 3m do soco contra Iron Man e Storm).',
        easySetup:
          'White Fox como Duelista. Sem ela o base já cura os aliados a cada soco acertado; o slot da White Fox só se justifica pelo alcance do lock-on.',
        iconUrl: publicAsset('teamups/iron-fist-kumiho-palm-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/iron-fist-kumiho-palm-partner.png'),
      },
    ],
    sourceIds: ['official-teamups', 'batru-iron-fist', 'rivalsteamups-iron-fist', 'balance-20260917'],
  },
  systems: [
    {
      name: 'Dragon\'s Defense',
      input: 'RMB',
      heading: 'O parry que vira contador',
      facts: [
        'Postura defensiva de 1,2s com 30% de redução de dano. Todo dano absorvido converte em bônus de vida: 1,3 de bonus health por dano bloqueado e teto de 175 convertido da vida máxima.',
        'Cada parry bem-sucedido reseta a duração da postura — isso pode acontecer até 2 vezes por uso, ou seja, o nativesdate pode virar uma sequência de três janelas se você reagir no ritmo certo.',
        'Ao sair da postura, o ataque é temporariamente trocado por Yat Jee Chung Kuen por 5s. Essa troca é o que faz o parry valer: o dano vem depois, não durante.',
        'Jeet Kune Do recarrega 1,2s por acerto. Cinco acertos = 6s fora do cooldown de 15s — quase metade. Encher a combo dentro da briga é o macete que torna a defesa recorrente.',
        'O ultimate derruba o cooldown para 3s durante os 12s de Living Chi: com o ultimate ativo, o ciclo parry → Yat Jee Chung Kuen vira uma máquina de contra-ataque.',
      ],
      meter: [
        { label: 'Sem carga', value: '15s de cooldown' },
        { label: '1 ciclo completo', value: '−6s (1,2s por acerto)' },
        { label: 'Com Living Chi', value: '3s de cooldown' },
      ],
    },
    {
      name: 'Yat Jee Chung Kuen',
      input: 'LMB (condicional)',
      facts: [
        'Substitui o Jeet Kune Do por 5s depois do Dragon\'s Defense. 7 socos por segundo, alcance de 3m, pull-in máximo de 11m e dash de 12 m/s quando não há alvo travado.',
        'Dano por soco: 8 base + 3,1% da vida máxima do inimigo. É o único dano percentual do kit e o motivo de o soco precisar ficar colado no alvo.',
        'A rajada só continua enquanto a mira permanece sobre o alvo — soltar o crosshair encurta a sequência. A métrica real é quantos segundos de mira você segura.',
        'Com Living Chi ativo o alcance ganha +100% e o cooldown cai 80%, transformando o soco de arma de contato em arma de perseguição.',
      ],
      meter: [
        { label: 'vs 250 HP', value: '~15,8 por soco' },
        { label: 'vs 600 HP', value: '~26,6 por soco' },
        { label: 'vs 750 HP', value: '~31,3 por soco' },
      ],
    },
    {
      name: 'Chi Absorption + Harmony Recovery',
      input: 'Passiva',
      facts: [
        'Chi Absorption: 50 de bonus health por eliminação, tanto em abate quanto em finalização.',
        'Harmony Recovery ([key:E]) cura 100/s por 3s; o excedente converte em 100 de bonus health quando você está com vida cheia. Cooldown de 12s.',
        'Os dois juntos cobrem o problema estrutural do herói: 300 de vida base. A Medina só converte em bônus quando está cheio — usar com vida pela metade desperdiça metade do efeito.',
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelista',
      nickname: 'O Punho Imortal',
      health: '300 HP',
      difficulty: 'Alta (4/5): o kit premia quem controla o ciclo de parry e a mira contínua do soco; errar a janela do Dragon\'s Defense custa metade do sustain',
      job:
        'Chegue com Living Chi ligado, converta dano em recarga de Dragon\'s Defense com cada Jeet Kune Do, use o parry como motor de contra-ataque e transforme o bonus health acumulado em tempo de permanência no frontline.',
      verdict:
        'Escolha Iron Fist quando o time inimigo tem alvos aéreos ou Vanguard de vida alta (o soco escala com a vida máxima) e quando você tem um Thing ou White Fox para acender o Team-Up. Evite contra Peni Parker, Wolverine, Loki e Groot: minas, dano sustentado com autossustento, ilusões e a ultimate de controle fecham o espaço onde o dive dele acontece.',
      playstyle: [
        'Iron Fist tem duas fases e elas se alternam dentro do mesmo dive. Na fase passiva, o Jeet Kune Do não é dano — é recarga. Cada um dos 5 socos tira 1,2s do cooldown de 15s do Dragon\'s Defense. Atacar por 3s e esquivar é o que devolve a defesa antes do segundo dano. Na fase ativa, o Dragon\'s Defense abre o Yat Jee Chung Kuen por 5s e aí o soco percentual assume: 7 golpes por segundo, colados no alvo, com pull-in de até 11m.',
        'A rota de entrada padrão é Living Chi ([key:Q]) → K\'un-Lun Kick ([key:Shift]) → Jeet Kune Do até encher a recarga → Dragon\'s Defense ([key:RMB]) no impacto → Yat Jee Chung Kuen com a mira travada. O K\'un-Lun Kick é o abridor correto porque tem 12m de alcance e 40 m/s de velocidade: ele é a forma de chegar na lua alheia sem gastar Crane Leap. O primeiro chute faz 40 de dano e o segundo vai de 35 a 70 conforme a vida do alvo cai.',
        'O contra-ataque é a jogada de maior teto do herói. Dragon\'s Defense segura 1,2s com 30% de redução e converte o dano bloqueado em 1,3 de bonus health, com teto de 175; cada parry limpo reseta a janela, duas vezes. Saia da postura e o soco percentual já está pronto. Com Living Chi ativo o cooldown cai para 3s — durante os 12s do ultimate dá para repetir o parry-contrarize várias vezes na mesma briga.',
      ],
      priorityKicker: 'Sequência',
      priorityTitle: 'Prioridade de habilidades',
      priorityDescription:
        'Iron Fist não tem upgrade numerado. A prioridade real é a ordem dentro do dive: o que abre espaço, o que converte recarga e o que transforma a troca em burst.',
      upgradePlan: [
        {
          rank: 1,
          input: 'RMB',
          ability: 'Dragon\'s Defense',
          label: 'Parry que devolve o soco e gera bonus health',
          why: 'Janela de 1,2s com 30% de redução, até 3 parries por uso (a duração reseta), 1,3 de bonus health por dano bloqueado e teto de 175. Ao sair, troca o ataque por Yat Jee Chung Kuen por 5s. É simultaneamente defesa, sustain e o gatilho do dano percentual.',
          swapWhen: 'Guarde para o projétil previsível (Hawkeye, Adam Warlock, os orbes da Luna Snow) ou para o momento em que o Living Chi já está rodando e o cooldown cai para 3s. Não use como abertura de briga.',
          sourceIds: ['official-abilities-iron-fist', 'wiki-iron-fist', 'rivalsheroes-iron-fist'],
        },
        {
          rank: 2,
          input: 'LMB',
          ability: 'Yat Jee Chung Kuen',
          label: 'Dano percentual — 8 + 3,1% da vida máxima por soco',
          why: '7 socos por segundo durante 5s, com pull-in de 11m. Contra um Vanguard de 750 de vida são ~31 por soco; a rajada inteira passa de 200. É o maior dano do kit e o único que escala, então a mira precisa ficar travada no alvo o tempo todo.',
          swapWhen: 'Só existe depois do Dragon\'s Defense (ou dentro do Living Chi). Se a postura foi gasta sem parry, você ainda tem a troca de 5s — mas perdeu o bonus health, então o custo foi alto.',
          sourceIds: ['official-abilities-iron-fist', 'wiki-iron-fist'],
        },
        {
          rank: 3,
          input: 'Q',
          ability: 'Living Chi',
          label: 'Multiplicador de janela — +30% dano, +20% velocidade, −80% CD do soco',
          why: '12s de duração com custo reduzido para 3100 de energia. O que realmente importa não é o +30% de dano: é o +100% de alcance no Yat Jee Chung Kuen e no K\'un-Lun Kick e a redução de 80% no cooldown do soco. Ativado antes do dive, ele transforma um herói de contato em um caçador de alvo aéreo.',
          swapWhen: 'Guarde para o momento em que o time já criou a distração. Ativar no meio da troca só dá 12s de buff para um alvo que já está escapando — e o custo de 3100 de energia é caro demais para isso.',
          sourceIds: ['official-abilities-iron-fist', 'balance-20260917'],
        },
        {
          rank: 4,
          input: 'Shift',
          ability: 'K\'un-Lun Kick',
          label: 'Entrada de 12m a 40 m/s com dano crescente',
          why: '40 de dano no primeiro chute, de 35 a 70 no segundo (máximo com o alvo em 50% de vida), 12m de distância e 40 m/s. É a forma mais rápida de entrar sem gastar Crane Leap, e o dano do segundo chute escala na direção da finalização.',
          swapWhen: 'Use como entrada, não como escape, quando o ultimate está ativo: o alcance ganha +100% e o chute vira deslocamento de mundo. Fora do ultimate, guardar para reposicionar evita ficar sem entrada.',
          sourceIds: ['official-abilities-iron-fist', 'balance-20260515'],
        },
        {
          rank: 5,
          input: 'E',
          ability: 'Harmony Recovery',
          label: 'Cura de 300 no total, ou 100 de bonus health em 3s',
          why: '100/s por 3s, cooldown de 12s. Com vida cheia o excedente vira 100 de bonus health; com vida pela metade a metade da cura é jogada fora. É o botão de recuperação de erro, não o de preparação.',
          swapWhen: 'Só use no meio da briga quando a próxima entrada é o Dragon\'s Defense (que já dá o bônus) ou quando o time não tem como te curar antes do próximo push de objetivo. Fora de briga, a Chi Absorption por eliminação já faz o trabalho.',
          sourceIds: ['official-abilities-iron-fist', 'wiki-iron-fist'],
        },
      ],
      adaptations: [
        'Contra alvos aéreos (Iron Man, Storm, Ultron, Human Torch): o Yat Jee Chung Kuen com Living Chi é a resposta — o pull-in de 11m puxa o alvo aéreo para a sua altura, e o alcance de +100% cobre a distância que ele abre. O Uppercut do Iron & Stone é a resposta mais barata: lança e cancela o voo sem gastar ultimate.',
        'Contra Vanguard de sustain (Venom, Thing, Adam Warlock, Groot): não tente matar no tempo da regeneração. Use o Yat Jee Chung Kuen contra o Vanguard mesmo com a pressão no backline — 3,1% da vida máxima por soco é o que transforma 750 de vida em dano tratável, e o Dragon\'s Defense impede que o Vanguard te mate antes do burst.',
        'Contra Peni Parker: as minas e os drones criam zonas que anulam o dive inteiro. Trate a linha de frente como território perdido — passeie pela parede (Wall Runner a 9 m/s corre horizontalmente, sem subir) e entre pelo alto, pelo Crane Leap de 3 cargas, em vez de entrar pelo chão dela espera.',
        'Contra Wolverine, Blade e Groot: o dano sustentado com autossustento vence o Iron Fist em troca longa. O antídoto é não ficar na troca: o ciclo parry → soco → K\'un-Lun Kick de saída precisa estar decorado, e o K\'un-Lun Kick é o botão que transforma uma falha em recuo em vez de morte.',
        'Com Thing no time (Iron & Stone): use o uppercut como interrupt, não como dano. Lance o alvo aéreo ou o bruxo curandeiro, aproveite a janela de queda para o Yat Jee Chung Kuen e encadeie a sweeping leg sweep — desde 11/09/2026 ela responde mesmo sem o Thing presente, então o uppercut é o botão de controle mesmo em solo.',
        'Com White Fox no time (Kumiho Palm): cada acerto do soco cura os aliados próximos, o que autoriza a manter o dive dentro do time em vez de isolar. O lock-on esticado é a razão de verdade para pegar o slot dela contra composição com Iron Man.',
        'Em mapa com salão alto e paredes longas: use o Wall Runner para reposicionar sem gastar Crane Leap (3 cargas, recarga de 1s cada) e guarde os saltos para a entrada final. O Wall Runner é o único movimento que não tem cooldown — é o recurso renovável do kit.',
      ],
      ultimates: [
        {
          stance: 'Ultimate única',
          name: 'Living Chi',
          bestUse:
            'Para converter um alvo aéreo ou um Vanguard em um abate garantido dentro de 12s — o mais confiável é abrir com ela já ativa no flanco, com K\'un-Lun Kick +100% de alcance entrando pela retaguarda.',
          execution:
            'Ative com [key:Q] fora do alcance da visão inimiga (ou logo no início do push), jogue o K\'un-Lun Kick ([key:Shift]) com o alcance dobrado para entrar, e segure Jeet Kune Do até recarregar o Dragon\'s Defense. Com o cooldown em 3s, use o parry assim que o primeiro impacto chegar e segure a mira no Yat Jee Chung Kuen o tempo todo. O ganho de +30% de dano é secundário: o que mata é o soco de 3,1% da vida máxima rodando sem cooldown.',
          upgradeValue:
            'Custo de 3100 de energia (reduzido de 3400 no balance de 11/09/2026) por 12s. Não ative em troca inútil nem como isca de fuga: se o time não tem peel para os 12s seguintes, a energia é melhor guardada. O conserto do patch em 13/08/2026 removeu o deslocamento anormal do Yat Jee Chung Kuen durante o ultimate — antes havia glitch de posicionamento que interrompia a sequência.',
        },
      ],
      dashGuide: {
        ability: 'Living Chi → K\'un-Lun Kick → Jeet Kune Do → Dragon\'s Defense → Yat Jee Chung Kuen',
        shortRule:
          'Cada Jeet Kune Do recarrega o Dragon\'s Defense. A ordem certa é entrar, carregar a defesa com 5 socos, parry e converter — nunca entrar e ir direto pro soco.',
        mechanics: [
          'K\'un-Lun Kick: 12m a 40 m/s, 40 de dano no primeiro chute e de 35 a 70 no segundo conforme a vida do alvo. Cooldown de 10s.',
          'Crane Leap: 3 saltos consecutivos no ar, cada carga recarregando em 1s. É entrada vertical e escape — o Wall Runner (9 m/s horizontal) é o movimento sem cooldown.',
          'Living Chi dobra o alcance do K\'un-Lun Kick e do Yat Jee Chung Kuen (+100% cada) e corta o cooldown do soco em 80%. A rota aérea dentro do ultimate cobre mais de 60m, segundo o guia do marvelrivals.gg.',
          'Dragon\'s Defense reseta a própria duração a cada parry, até 2 vezes. Isso significa que os 1,2s de janela podem virar quase 3,6s se você reagir duas vezes dentro da mesma uso.',
        ],
        drills: [
          'Treino 1: no modo prática, spame Jeet Kune Do contra um dummy e cronometre quanto tempo até o Dragon\'s Defense ficar disponível. Você precisa ver o cooldown cair de 15s para menos de 9s com uma combo completa.',
          'Treino 2:treine o parry contra projétil, não contra melee. Coloque o practice mode com um alvo que atira e use o Dragon\'s Defense no momento do disparo; depois segure a mira por 5s no Yat Jee Chung Kuen e conte os socos.',
          'Treino 3: com Living Chi ativo, pratique a sequência inteira (Shift → LMB → RMB → LMB colado) e confirme que a troca de ataque acontece dentro dos 5s da janela.',
          'Treino 4: treine a rota de perseguição aérea: Crane Leap → soco → Crane Leap → soco → K\'un-Lun Kick. O objetivo é cobrir um alvo aéreo sem gastar ultimate.',
        ],
      },
      patterns: [
        {
          title: 'Dive com ultimate já ligado',
          steps: [
            'Ative Living Chi ([key:Q]) fora do ângulo de visão do time inimigo, ou imediatamente antes de um push de objetivo.',
            'Jogue o K\'un-Lun Kick ([key:Shift]) com o alcance dobrado — 12m viram o suficiente para chegar na retaguarda inimiga em um único dash.',
            'Solte o Jeet Kune Do ([key:LMB]) inteiro contra o alvo mais frágil: são 4 socos de 38 e um de 60, e cada acerto recarrega 1,2s do Dragon\'s Defense.',
            'Use o Dragon\'s Defense ([key:RMB]) no impacto da resposta e segure a mira no Yat Jee Chung Kuen por 5s — 7 socos/s com 3,1% da vida máxima cada.',
            'Feche com Chi Absorption: cada eliminação rende 50 de bonus health e reinicia o dive.',
          ],
        },
        {
          title: 'Parry como motor de contra-ataque',
          steps: [
            'Encha a recarga do Dragon\'s Defense com Jeet Kune Do antes de o combate — o alvo do acerto do cooldown não precisa ser o mesmo alvo do parry.',
            'Na primeira janela de 1,2s, segure a postura: cada parry limpo reseta a duração e pode acontecer duas vezes por uso.',
            'Cada dano bloqueado converte em 1,3 de bonus health, com teto de 175 vindo da vida máxima.',
            'Saia da postura e vire para o soco: o ataque trocado é Yat Jee Chung Kuen por 5s, com pull-in de 11m se o alvo tentar recuar.',
            'Repita. Com Living Chi ativo o cooldown cai para 3s e o ciclo inteiro cabe várias vezes dentro dos 12s de ultimate.',
          ],
        },
        {
          title: 'Perseguição de alvo aéreo',
          steps: [
            'Espere o alvo aéreo baixar a altitude — acima disso nem o pull-in de 11m chega.',
            'Suba com Crane Leap ([key:Space], 3 cargas) e mantenha o Jeet Kune Do ou o Yat Jee Chung Kuen com a mira no ar, sem tirar o crosshair.',
            'Se o alvo subir, use o K\'un-Lun Kick no ar ou o Wall Runner para reposicionar em 9 m/s horizontal.',
            'Com o Time-Up de Iron & Stone ativo, o uppercut ([key:C]) lança o alvo e cancela o voo — essa é a saída mais barata, sem gastar ultimate.',
          ],
        },
      ],
      mistakes: [
        'Entrar direto no Yat Jee Chung Kuen sem recarregar o Dragon\'s Defense: o soco entrega 7 socos/s e depois você fica com 3m de alcance, 300 de vida e nenhum botão de defesa por 15s. O Jeet Kune Do existe para isso.',
        'Usar o Dragon\'s Defense como abertura de briga em vez de resposta: a postura não causa dano, só converte o que você leva. Aberta, ela queima o cooldown de 15s e não devolve nada.',
        'Gastar o Harmony Recovery com vida pela metade: 300 de cura em 3s, mas sem vida cheia o excedente não converte e o bonus health de 100 é perdido. Ele é o botão de erro, não o de preparação.',
        'Ativar Living Chi no meio da troca em vez de antes: são 12s e 3100 de energia. Ativado tarde, o buff acaba antes de o soco decidir a luta; ativado cedo, ele dobra o alcance de todo o dive.',
        'Confundir alcance com midrange: o Yat Jee Chung Kuen tem 3m e dano percentual. Contra Hawkeye, Punisher ou Black Widow o dive é punido — a resposta é o Wall Runner para reposicionar e o Team-Up de uppercut, não insistir no soco.',
      ],
      evidence: [
        'official-abilities-iron-fist',
        'wiki-iron-fist',
        'balance-20260917',
        'balance-20260515',
        'official-teamups',
        'batru-iron-fist',
        'rivalsteamups-iron-fist',
        'marvelrivalsgg-iron-fist',
      ],
    },
  },
  sources: [
    {
      id: 'official-abilities-iron-fist',
      kind: 'official',
      title: 'Iron Fist — página oficial de habilidades (marvelrivals.com)',
      url: 'https://www.marvelrivals.com/20241201/41360_1197227.html',
      author: 'Marvel Rivals / NetEase',
      published: '2024-12-01',
      confidence: 'alta',
      takeaways: [
        'Base: 300 de vida, 6 m/s de velocidade, Duelist.',
        'Jeet Kune Do ([key:LMB]): 38 de dano nos 4 primeiros socos, 60 no quinto; intervalo de 0,45s entre os 4 primeiros e 0,67s do quarto ao quinto; distância máxima de 3m; pull-in máximo de 6m; 1,2s de redução de cooldown do Dragon\'s Defense por acerto.',
        'Yat Jee Chung Kuen ([key:LMB] após o Dragon\'s Defense): duração de 5s, 7 socos/s, 8 de dano base + 3,1% da vida máxima por soco, alcance de 3m, pull-in máximo de 11m, dash de 12 m/s a 3m sem alvo.',
        'Living Chi ([key:Q]): 12s, +30% de dano, +20% de movimento, +100% de alcance no Yat Jee Chung Kuen e no K\'un-Lun Kick, −80% de cooldown do Yat Jee Chung Kuen, custo de 3100 de energia.',
        'K\'un-Lun Kick ([key:Shift]): 40 m/s, 12m, primeiro chute 40 de dano, segundo de 35 a 70 (máximo com o alvo em 50% de vida), cooldown de 10s.',
        'Harmony Recovery ([key:E]): 3s, 100 de cura por segundo, conversão de 100 de excedente/vida máxima, cooldown de 12s.',
        'Crane Leap ([key:Space]): 3 cargas, cada uma com recarga de 1s.',
        'Dragon\'s Defense ([key:RMB]): tempo de bloqueio de 1,2s, 30% de redução de dano, conversão de 1,3 de bonus health por dano bloqueado, teto de 175 convertido da vida máxima, cooldown de 15s.',
        'Wall Runner (passiva): 9 m/s horizontal. Chi Absorption (passiva): 50 de bonus health por eliminação.',
      ],
    },
    {
      id: 'wiki-iron-fist',
      kind: 'database',
      title: 'Iron Fist — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Iron_Fist',
      published: '2025-11',
      confidence: 'media',
      takeaways: [
        'Confirma a lista completa de habilidades e as mecânicas que a página oficial resume: lock-on que puxa o Lin Lie na direção do alvo (inclusive alvos aéreos), Jeet Kune Do reduzindo o cooldown do Dragon\'s Defense, Crane Leap descrito como quadruple jump (a wiki.gg fala em 4 saltos, enquanto a página oficial e a IGN falam em 3 cargas — divergência registrada), Harmony Recovery meditando no ar e Chi Absorption com teto de 200 de bonus health.',
        'STALE em valores: a página está editada pela última vez em 14/11/2025 e traz Yat Jee Chung Kuen com 10 + 2,1% (atual é 8 + 3,1%), Jeet Kune Do com 30/50 (atual é 38/60), 1,5s de redução de cooldown (atual é 1,2s), Living Chi com 3s de cooldown do Dragon\'s Defense (a página oficial não lista esse número) e Chi Absorption com teto de 200.',
        'Marca explicitamente o Team-Up antigo (Atlas Bond / Dragon\'s Chill com a Luna Snow) como indisponível na temporada atual — a Season 10 usa Iron & Stone e Kumiho Palm.',
        'Vida confirmada em 300, igual à página oficial.',
      ],
    },
    {
      id: 'balance-20260917',
      kind: 'official',
      title: 'Marvel Rivals Version 20260916 Balance Post (início da Temporada 10)',
      url: 'https://rivalsdex.com/patch-notes-archive',
      author: 'Marvel Rivals / NetEase (transcrito por RivalsDex)',
      published: '2026-09-16',
      confidence: 'alta',
      takeaways: [
        'Iron Fist classificado como BUFF: dano dos 4 primeiros socos do Jeet Kune Do de 35 para 38 e o quinto de 55 para 60.',
        'Custo de energia do Living Chi reduzido de 3400 para 3100.',
        'Team-Up com o Thing: o encadeamento da sweeping leg sweep passou a responder após o primeiro acerto sem o Thing presente; cooldown do Team-Up subiu de 8s para 12s e o dano do segundo golpe aprimorado subiu de 45 para 50.',
        'É a razão de os números da página oficial (38/60 e 3100) serem os atuais e de a wiki.gg estar desatualizada.',
      ],
    },
{
      id: 'balance-20260515',
      kind: 'official',
      title: 'Marvel Rivals Version 20260515 Balance Post (Temporada 8)',
      url: 'https://www.marvelrivals.com/balancepost/20260512/41667_1299947.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-05-12',
      confidence: 'alta',
      takeaways: [
        'Jeet Kune Do passou a reduzir o cooldown do Dragon\'s Defense em 1,2s por acerto (antes 1s) — valor que a página oficial ainda publica e que a wiki.gg não registra.',
        'Primeiro chute do K\'un-Lun Kick subiu de 35 para 40 de dano.',
        'O mesmo post ajustou o Team-Up antigo Chilling Assault (Luna Snow com Iron Fist/Emma Frost), que não é mais uma das opções da Temporada 10.',
      ],
    },
    {
      id: 'official-teamups',
      kind: 'official',
      title: 'Team-Up — página oficial (bundle teamup_a35bb0a0.js)',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Confirma as duas opções ativas do Iron Fist na Temporada 10: IRON & STONE (parceiro The Thing, Key_en "C") e KUMIHO PALM (parceiro White Fox).',
        'IRON & STONE — baseEffect_en: "Unleash a powerful uppercut to Launch Up enemies." enhancedEffect_en: "When teaming up The Thing, unleashing the uppercut can be chained directly into a sweeping leg sweep for a follow-up attack."',
        'KUMIHO PALM — baseEffect_en: "Hitting an enemy with Yat Jee Chung Kuen provides a burst of healing to nearby allies." enhancedEffect_en: "When teaming up White Fox, the lock-on distance for Yat Jee Chung Kuen is significantly increased."',
        'Key_en do KUMIHO PALM vem como "Left Click" no bundle porque o efeito está amarrado ao soco Yat Jee Chung Kuen e não tem tecla própria — o campo input usa LMB, a tecla do ataque substituído.',
        'O bundle também lista COMPREHENSIVE DEFENSE (Daredevil) e CHILLING CHARISMA (Luna Snow) na aba global, mas o manifesto e as bases da Season 10 confirmam que as duas opções do Iron Fist são Iron & Stone e Kumiho Palm.',
      ],
    },
    {
      id: 'batru-iron-fist',
      kind: 'database',
      title: 'Iron Fist — Team-Up Synergy, Temporada 10 (Batru)',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/iron-fist',
      published: '2026-09',
      confidence: 'media',
      takeaways: [
        'Medição da Temporada 10: Iron & Stone com The Thing com 51,25% de win rate da dupla; Kumiho Palm com White Fox com 55,21%.',
        'A medição mistura a força individual dos parceiros no meta (White Fox estava mais forte na temporada), então é sinal de prioridade, não regra fixa.',
        'Melhores duelos do herói na temporada: Peni Parker (64,25%), Devil Dinosaur (60,49%) e Ultron (59,00%); piores: Squirrel Girl (37,50%), Phoenix (39,93%) e Doctor Strange (40,29%).',
      ],
    },
    {
      id: 'rivalsteamups-iron-fist',
      kind: 'guide',
      title: 'Best Iron Fist Team-Ups — Marvel Rivals Season 10 (RivalsTeamUps)',
      url: 'https://rivalsteamups.com/heroes/iron-fist',
      published: '2026-09',
      confidence: 'media',
      takeaways: [
        'Votação da comunidade: Iron & Stone com 57% de 86 votos, contra 43% de Kumiho Palm. Margem estreita — as duas seguem competitivas.',
        ' breakdown por rank: Iron & Stone lidera em Prata (100%), Platina (54%), Diamante (58%), Celestial (58%) e Eternity (100%); Kumiho Palm só assume no Grandmaster (53%).',
        'Leitura tática da página: Iron & Stone é a opção cujo plano de jogo converte com mais consistência; Kumiho Palm ganha teto com o lock-on esticado, mas obriga a composição a justificar o slot da White Fox.',
      ],
    },
    {
      id: 'marvelrivalsgg-iron-fist',
      kind: 'guide',
      title: 'Iron Fist: How to Play, Combos, & Counters — Marvel Rivals GG',
      url: 'https://marvelrivals.gg/iron-fist-guide/',
      author: 'Theo',
      published: '2025-03',
      confidence: 'media',
      takeaways: [
        'Combos publicados: Dragon\'s Defense → ataques aprimorados → K\'un-Lun Kick → ataques básicos; Basic Attacks → Dragon\'s Defense → ataques aprimorados → K\'un-Lun Kick → Wall Runner para terreno alto → Harmony Recovery → reengajar.',
        'Combo aéreo: pular → atacar → pular para acompanhar → atacar → pular → atacar → K\'un-Lun Kick, capaz de cobrir mais de 60m de distância no ar.',
        'Prioridade de alvo: alvos isolados, Strategists e heróis aéreos (o Lin Lie consegue perseguir Iron Man e Storm); evitar Vanguards com vida cheia.',
        'Contra-medidas citadas: Peni Parker (minas e drones criam áreas intransponíveis), Wolverine (dano sustentado com cura própria), Loki (ilusões), Luna Snow (freeze) e Groot (ultimate de controle).',
        'Dificuldade 4/5 e 300 de vida — confirma o enquadramento de risco do herói. Números do guide são antigos: o guide ainda descreve o Team-Up antigo com a Luna Snow.',
      ],
    },
    {
      id: 'rivalsheroes-iron-fist',
      kind: 'database',
      title: 'Iron Fist — Marvel Rivals Heroes (rivalsheroes.com)',
      url: 'https://rivalsheroes.com/heroes/iron-fist',
      published: '2026-08',
      confidence: 'media',
      takeaways: [
        'Confirma 300 de vida, 6 m/s e as teclas: Jeet Kune Do e Yat Jee Chung Kuen em LMB, Living Chi em Q, K\'un-Lun Kick em Shift, Harmony Recovery em E, Crane Leap em Space, Dragon\'s Defense em RMB.',
        'Única base que descreve o Jeet Kune Do com "the last strike will Launch Up enemies" — o lançamento no quinto golpe, coerente com a mecânica do Team-Up Iron & Stone, mas ausente do texto da página oficial. Registrado como divergência no confidenceSummary.',
        'Traz valores pré-buff (35/55 no Jeet Kune Do, 1s de redução de cooldown, Living Chi com 3400 de energia) e cita o Team-Up antigo, então serve para teclas e contexto — não para números.',
      ],
    },
    {
      id: 'metabot-iron-fist',
      kind: 'guide',
      title: 'Iron Fist Counters — MetaBot.gg (Temporada 9.5)',
      url: 'https://metabot.gg/en/marvelrivals/hero/iron-fist/counters',
      author: 'Dakota Chinnick',
      published: '2026-09',
      confidence: 'media',
      takeaways: [
        'Win rate de 53,7%, pick rate de 0,9% e KDA de 2,83 em 3.629 partidas da Temporada 9.5 — o menor pick rate entre os Duelists medidos, o que confirma que o herói é de execução alta.',
        'Matchups mais difíceis: Gambit (59,3% de win rate contra ele), Iron Man e Phoenix.',
        'Matchups mais favoráveis: Devil Dinosaur (64,0% de win rate do Iron Fist), Doctor Strange (53,3%) e Angela (79,3%).',
      ],
    },
    {
      id: 'counterwatch-white-fox',
      kind: 'database',
      title: 'Best duo for White Fox — Counterwatch (Temporada 9)',
      url: 'https://www.counterwatch.gg/stats/marvel-rivals/best-duos/white-fox',
      published: '2026-08-20',
      confidence: 'media',
      takeaways: [
        'Iron Fist é o Duelista com maior ganho de duo com a White Fox: +2,3% acima do esperado, classificado como "very high".',
        'Confirma que a dupla Kumiho Palm tem base estatística real, e não apenas preferência de comunidade — mesmo com a medição da Batru apontando para a White Fox como o parceiro mais forte da temporada.',
      ],
    },
    {
      id: 'gamefaqs-teamup-thread',
      kind: 'forum',
      title: 'What are your preferred team-ups for your mains? — GameFAQs Marvel Rivals',
      url: 'https://gamefaqs.gamespot.com/boards/457749-marvel-rivals/81168397',
      published: '2026-09',
      confidence: 'media',
      takeaways: [
        'Leitura de thread pública: o jogador "Merluvlee" declara escolher "Iron Fist (Thing)" e não ter testado a White Fox, elogiando o uppercut.',
        'Consenso da thread para heróis de dive em geral: preferir o parceiro que dá sustain (White Fox) sobre o parceiro que dá peel estático.',
        'Registro como leitura de snippet/fórum aberto — o Reddit bloqueia leitura direta e não foi usado como fonte numérica.',
      ],
    },
    {
      id: 'patch-20260813',
      kind: 'official',
      title: 'Marvel Rivals Version 20260813 Patch Notes',
      url: 'https://www.marvelrivals.com/20260812/41548_1310818.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-08-12',
      confidence: 'alta',
      takeaways: [
        'Correção "Iron Fist\'s Flying Flaw": o uso de Yat Jee Chung Kuen durante o Living Chi causava deslocamento anormal, quebrando a sequência deultimate.',
        'Correção visual: o VFX do ultimate Furious Flow era sobrescrito pelos efeitos do Team-Up da White Fox — corrigido, o que indica que as duas rotas são ativas em paralelo.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Oficial',
      count: 5,
      status:
        'Página de habilidades oficial lida integralmente (todos os números do kit vêm dela, já pós-balance de 11/09/2026), bundle de Team-Up atual lido campo a campo e três balance posts (20260515, 20260813 e o da Temporada 10 via transcrição). A ficha resumida do herói foi evitada como fonte de número.',
    },
    {
      kind: 'database',
      label: 'Wiki/Database',
      count: 5,
      status:
        'wiki.gg lida (stale em várias mecânicas), Batru para win rate de dupla da Temporada 10, Counterwatch para o ganho do duo com White Fox e duas bases de comunidade para teclas e contexto. Divergências registradas no confidenceSummary.',
    },
    {
      kind: 'guide',
      label: 'Guias',
      count: 3,
      status:
        'Marvel Rivals GG para combos e prioridade de alvo (publicado em 2025, útil para decisão e obsoleto em número), RivalsTeamUps para a recomendação de Team-Up por rank e MetaBot.gg para win rate, pick rate e matchups da Temporada 9.5.',
    },
    {
      kind: 'forum',
      label: 'Fórum/Comunidade',
      count: 1,
      status:
        'Thread pública do GameFAQs lida como snippet: preferência declarada por Iron & Stone (Thing) e consenso sobre preferir parceiro de sustain em composições de dive. Reddit bloqueia leitura direta (.json e old.reddit) e o r/marvelrivals não pôde ser lido — registrado como leitura de snippet, sem fingir leitura integral.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos',
      count: 0,
      status:
        'Pendente: não há transcrição validada com timestamps de guia em vídeo do Iron Fist nesta sessão. O Dev Vision Vol. 21 (09/09/2026) anuncia as mudanças da Temporada 10 mas não traz números de habilidade.',
    },
  ],
}