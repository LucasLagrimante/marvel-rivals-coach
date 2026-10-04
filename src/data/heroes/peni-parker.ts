import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const peniParker: HeroGuide = {
  id: 'peni-parker',
  name: 'Peni Parker',
  aliases: ['SP//dr', 'Peni', 'Web Warriors', 'SP//DR', 'Garota Aranha do Futuro'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/peni_parker.png'),
  bannerUrl: publicAsset('heroes/banners/peni_parker.png'),
  selectionPortraitUrl: publicAsset('heroes/select/peni_parker.png'),
  selectionHoverUrl: publicAsset('heroes/select/peni_parker_champion.gif'),
  selectionHoverFit: { scale: 1, x: 0, y: 0 },
  theme: {
    primary: '#a463ff',
    primaryRgb: '164, 99, 255',
    secondary: '#ff5c9d',
    secondaryRgb: '255, 92, 157',
    surface: '#0d0a1c',
    surfaceRgb: '13, 10, 28',
  },
  roles: ['vanguard'],
  lastVerified: '2026-10-04',
  confidenceSummary:
    'A vida de 650 e a role de Vanguard vieram da wiki.gg, da Liquipedia e da base marvelrivals.gg, que concordam entre si, e o patchdelta explica a origem do número: 650 para 750 em 11/04/2025, de volta a 700 em 12/12/2025 e 650 em 17/04/2026, sem alteração posterior. Os números de habilidade vieram da base marvelrivals.gg, que já reflects o balance de 11/09/2026, e foram cruzados com a página de balance changes do Fandom e com o patchdelta: o Cyber-Web Cluster está com 4 disparos por segundo e 150 m/s porque o intervalo caiu de 0,3s para 0,25s e a velocidade do projétil subiu de 120 para 150 m/s no mesmo patch; a wiki.gg ainda imprime os 3,33 por segundo e os 120 m/s pré-patch. Três divergências ficaram registradas em vez de escondidas. O Cyber-Web Snare aparece como imobilização direta de 0,7s na wiki.gg e na Liquipedia, mas desde 07/08/2026 ele virou habilidade de 2 cargas que aplica Web-Tracer de 5s com lentidão de 30% por 1s, e a imobilização de 0,7s só acontece quando o inimigo já marcado é atingido de novo; mantido o valor pós-patch. O teto de vida extra da Cyber-Web aparece como 200 em parte da documentação e como 150 em outra, porque subiu de 150 para 200 em 17/04/2026 e voltou para 150 em 07/08/2026; mantido 150. A lista de Team-Up da wiki.gg e da Liquipedia ainda traz o Armor Explosion com o Venom, que é da temporada anterior e não existe no bundle atual. A leitura de número de meta vem do Counterwatch e da base marvelrivals.gg, e elas discordam entre si na janela: o Counterwatch marca 57,2% de win rate em 49.313 partidas e a página de herói do mesmo site marca 55,6% em 62.988 partidas com dados de 02/09/2026; os dois números foram declarados e nenhum foi tratado como fonte primária. O Counterwatch é o único lugar que traz taxa de escolha e tier, e ele a coloca como Vanguard tier S, o que é o dado usado no texto.',
  coreRead: [
    'Peni não é tanque que absorve dano: ela empilha vida extra em cima da própria base enquanto pisa na Cyber-Web.',
    'A Cyber-Web não é área de controle, é fábrica de vida. Quem fica dentro dela não precisa de curandeiro.',
    'O Bionic Spider-Nest pode ser destruído por você mesmo: apertar de novo derruba o ninho e devolve a recarga quase na hora.',
    'A Arachno-Mine sobre uma Cyber-Web fica indestrutível. Aí ela vira armadilha que ninguém do outro time pode remover.',
  ],
  teamUps: {
    summary:
      'Rocket Network (com Rocket Raccoon) é a escolha no geral porque dobra a mesma economia que já faz a Peni funcionar: o Armored Spider-Nest passa a soltar Armor Packs que dão vida extra, dentro de uma área onde ela já converte cura em vida extra. Vibranium Mech (com Black Panther) é a escolha de agressão, porque transforma o ataque primário em metralhadora com escudo frontal, mas só paga se você conseguir chegar no inimigo em corpo a corpo.',
    recommended: 'Rocket Network',
    recommendedReason:
      'A Rocket Network é a que conversa com o que a Peni já faz de melhor. O Armored Spider-Nest gera Armor Packs que dão vida extra dentro do raio do ninho, e esse raio é justamente onde o ninho também cria Cyber-Webs, onde a cura da Peni vira vida extra de teto 150. Com o Rocket no time o ninho ainda se regenera sozinho, o que resolve o problema prático do herói: ninho aceso em choke é alvo prioritário e a Peni não tem como defendê-lo. O B.R.B. do Rocket passa a gerar Cyber-Webs e soltar Arachno-Mines, o que transforma a ultimate dele em fábrica de armadilha para o seu lado do mapa. A medição de dupla do Counterwatch põe o Rocket Raccoon como o parceiro mais forte da Peni, com 61,6% de desempenho conjunto, o que é medida e não previsão. A Vibranium Mech perde aqui porque o efeito base dela é um aumento curto de velocidade de ataque e dano no Cyber-Web Cluster: é dano bruto em um herói cujo dano bruto é o mais fraco do roster de Vanguard, e ela só compensa quando existe alguém para você se proteger na frente. O lado bom dela é o escudo frontal e a redução do custo de Vibranium Energy do Cluster, que é o que permite disparar o ataque primário sem parar dentro do seu controle de ponto, e a recarga caiu de 20s para 15s em 11/09/2026.',
    options: [
      {
        name: 'Rocket Network',
        partner: 'Rocket Raccoon',
        partnerRole: 'Strategist',
        input: 'C',
        baseEffect:
          'Coloca um Armored Spider-Nest que solta periodicamente Spider-Drones e Armor Packs que dão vida extra.',
        enhancedEffect:
          'Com Rocket Raccoon no time, o Armored Spider-Nest regenera a própria vida passivamente. Além disso, o B.R.B. do Rocket passa a gerar Cyber-Webs e a criar tanto Spider-Drones quanto Arachno-Mines.',
        bestFor:
          'Defender ponto com ninho em choke e querer manter a Peni no teto de vida extra enquanto a briga acontece em volta dela. Funciona sozinho, sem o Rocket: o Armored Spider-Nest já coloca Armor Packs dando vida extra dentro do próprio raio, que é onde a Peni cura. Vale muito aqui porque ninho exposto é ninho destruído, e a regeneração passiva com o Rocket transforma um ativo descartável em algo que segura o choke por mais tempo.',
        easySetup:
          'Qualquer formação com Rocket Raccoon. Sem ele o efeito base já sustenta a escolha; com ele, o ninho deixa de ser o primeiro alvo a caer.',
        iconUrl: publicAsset('teamups/peni-parker-rocket-network-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/peni-parker-rocket-network-partner.png'),
      },
      {
        name: 'Vibranium Mech',
        partner: 'Black Panther',
        partnerRole: 'Duelist',
        input: 'C',
        baseEffect:
          'Na ativação, concede por um instante ao Cyber-Web Cluster um aumento de velocidade de ataque e de dano.',
        enhancedEffect:
          'Com Black Panther no time, ativar a habilidade posiciona um Vibranium Shield frontal e reduz o custo de Vibranium Energy do Cyber-Web Cluster.',
        bestFor:
          'Rota ofensiva curta, quando existe um ponto para tomar e o inimigo não está a 40m atirando. O escudo frontal absorve a resposta inicial e a redução de custo é o que transforma o Cluster em disparo contínuo. A ressalva dura: os 15 de dano por projétil são os mais baixos do kit de um Vanguard, e sem o Black Panther para dar cobertura o efeito base dura pouco.',
        easySetup:
          'Black Panther no time. Sem ele o efeito base continua valendo como rajada curta de dano, mas o escudo frontal e a economia de energia do Cluster, que são os dois motivos reais de escolher esta opção, só acendem com o parceiro.',
        iconUrl: publicAsset('teamups/peni-parker-vibranium-mech-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/peni-parker-vibranium-mech-partner.png'),
      },
    ],
    sourceIds: ['teamup-bundle', 'balance-20260911-pp', 'counterwatch-pp'],
  },
  systems: [
    {
      name: 'Cyber-Web',
      input: 'Passiva',
      heading: 'A Cyber-Web é fábrica de vida, não área de controle',
      facts: [
        'Dentro da Cyber-Web a Peni cura 25 por segundo e ganha 25% de velocidade de movimento. A cura que sobra vira vida extra, com teto de 150 acima da vida base.',
        'O teto de 150 é o número que decide a luta: são 800 de vida efetiva, e o inimigo precisa de duas vezes esse dano bruto para te derrubar. Perdeu 50 pontos de teto em 07/08/2026, então 200 que aparece em parte da documentação é número pré-nerf.',
        'Aliados na sua Cyber-Web também recebem 25% de velocidade e 15 de cura por segundo, com 25 de vida extra convertida. Não é o seu teto, mas é a razão de a Peni ser excelente como sola de rota.',
        'O máximo é de 4 Cyber-Webs ativas ao mesmo tempo no campo, desde 17/04/2026. Quatro é o número que importa: dá para manter um web nos seus pés, um na saída do choke e um par em cima do flanker.',
        'Sair da Cyber-Web não apaga a vida extra na hora, mas a geração para: o que já foi convertido continua e decai com o tempo, o que transforma cada segundo dentro do web em um investimento.',
        'A armadura gerada não é escudo contra dano: é vida máxima. Ela não absorve, então ela não protege de burst, ela faz você demorar mais para morrer.',
      ],
      meter: [
        { label: 'Cura dentro da web', value: '25 por segundo' },
        { label: 'Vida extra máxima', value: '150 acima da base' },
        { label: 'Cura de aliado', value: '15 por segundo' },
        { label: 'Webs simultâneas', value: '4 no campo' },
        { label: 'Vida efetiva no teto', value: '800' },
      ],
    },
    {
      name: 'Cyber-Bond',
      input: 'F',
      heading: 'O dash que não conta como estar dentro da teia',
      facts: [
        'O Cyber-Bond lança um fio a 100 m/s que puxa você até o alvo, com distância máxima de 19m e alcance maior do que isso se você estiver descendo.',
        'O alcance real do dash é de 10m no mínimo e 30m no máximo, com 3s de recarga. Esticar demais dispara o pullback de 10m, que é o que puxa você de volta quando o fio passa do limite.',
        'O detalhe que quase todo mundo erra: estar preso pelo fio não é estar dentro da Cyber-Web. Você não cura e não gera vida extra pendurado no ar, só pisando na teia.',
        'A recarga só começa a contar quando você desconecta. Cancelar o vínculo antes de chegar troca o dash por alguns segundos sem a habilidade.',
        'Um vínculo ativo também prende você: você não escolhe para onde vai até soltar. É por isso que este botão não deve ser usado para entrar, e sim para sair e para atravessar o mapa antes do primeiro round.',
        'O Cyber-Bond também é o jeito mais rápido de deixar uma Cyber-Web longe do inimigo e ainda alcançar o choke com a vida extra já construída.',
      ],
      meter: [
        { label: 'Recarga', value: '3s após soltar' },
        { label: 'Alcance do fio', value: '19m, mais descendo' },
        { label: 'Dash', value: '10m a 30m' },
        { label: 'Pullback', value: '10m' },
        { label: 'Velocidade do projétil', value: '100 m/s' },
      ],
    },
  ],
  roleGuides: {
    vanguard: {
      key: 'vanguard',
      label: 'Vanguard',
      nickname: 'A guarda que se cura de pé',
      health: '650',
      difficulty:
        'Vanguard de peculiaridade média: a dificuldade não está em aim, está em manter os pés dentro da teia enquanto o time de dentro do ponto leva dano.',
      job: 'Fechar rota e ponto com armadilha e negação de espaço, permanecendo vivo sem depender de curandeiro enquanto o time inteiro joga dentro da Cyber-Web.',
      verdict:
        'A Peni é o Vanguard que não fica na frente para absorver: ela ocupa o ponto, transforma área em vida e deixa o inimigo escolher entre dar de cara com uma Arachno-Mine indestrutível ou ficar parado. Com 650 de vida base e teto de 150 de vida extra, o teto efetivo dela é 800, e é esse número que decide o matchpoint. O Counterwatch a coloca como Vanguard tier S na Temporada 10, com 57,2% de win rate em 49.313 partidas e 7,7% de taxa de escolha, e a base marvelrivals.gg confirma o topo com relatório de 10 a 17/09/2026. Escolher ela significa aceitar dano baixo e aceitar que a vitória vem por negação de rota, não por eliminação.',
      playstyle: [
        'Jogue com um pé dentro da teia e a arma apontada para fora dela. Os 15 de dano por projétil são irrisórios, mas o 25 por segundo de cura dentro da teia é o que segura a posição.',
        'Construa a vida extra antes do combate, não durante. Cada segundo parado sobre a teia no início do round é 25 de vida extra que você leva para a briga inteira.',
        'Coloque o Bionic Spider-Nest atrás de quina, não no meio da sala. Ele tem 350 de vida, é destruível e solta 2 Spider-Drones a cada 3s cobrindo 12m de raio.',
        'Ataque o choke com Arachno-Mine, não a pessoa. Uma mina de 100 de dano em cima da teia é indestrutível e vira problema de tempo, não de dano.',
        'Use o Cyber-Bond para chegar antes e para sair depois. Entrar com ele prende você sem curar e ainda consome a recarga.',
        'Quando o time precisa avançar, use a Arachno-Mine na retaguarda inimiga. Duas minas bem jogadas na linha de visão da Strategist adversária valem mais que qualquer Cyber-Web defensivo.',
      ],
      priorityKicker: 'Ordem de upgrade',
      priorityTitle: 'Bionic Spider-Nest antes de Arachno-Mine',
      priorityDescription:
        'O ninho é a única habilidade do kit que cria área sem você, continua existindo quando você sai do ponto e é a origem de quase toda a Cyber-Web que sustenta a sua vida.',
      abilityLoop: [
        { ability: 'Cyber-Web Cluster', input: 'LMB' },
        { ability: 'Cyber-Web Snare', input: 'RMB' },
        { ability: 'Bionic Spider-Nest', input: 'Shift' },
        { ability: 'Arachno-Mine', input: 'E' },
        { ability: 'Cyber-Bond', input: 'F' },
        { ability: 'Spider-Sweeper', input: 'Q' },
      ],
      upgradePlan: [
        {
          rank: 1,
          spellNumber: 3,
          input: 'Shift',
          ability: 'Bionic Spider-Nest',
          label: 'A única habilidade que segura um ponto sem você',
          baseEffect:
            'Coloca um ninho a até 10m, com 350 de vida e 15s de recarga. Ele solta 2 Spider-Drones a cada 3s, cada um com 40 de dano, cobrindo 12m de raio e criando Cyber-Webs ao redor. Os drones aplicam lentidão de 8% por 2s, que acumula até 40%.',
          upgradeEffect:
            'Com o aprimorado, o ninho deixa de ser um ponto de dano e vira a sua fábrica de Cyber-Web: cada teia que ele cria é 25 de cura por segundo e 150 de vida extra para você e para quem estiver junto.',
          fightNote:
            'Aperte [key:Shift] de novo para derrubar o ninho você mesmo: isso dá recarga quase imediata, e derrubar com um inimigo atacando o ninho encurta o tempo de recarga ainda mais. É a rotação de defesa do choke.',
          why:
            'Todo o resto do kit depende de você estar presente. O ninho é o único elemento que continua produzindo teia, dano e negação de rota depois que você foi deslocado, e a recarga de 15s é barata para o que entrega.',
          swapWhen:
            'Troque a prioridade para a Arachno-Mine quando o time já domina o ponto e o problema passou a ser a retaguarda inimiga, porque o ninho não alcança a linha de visão adversária.',
          sourceIds: ['wiki-pp', 'mrgg-pp', 'balance-20260807-pp'],
        },
        {
          rank: 2,
          spellNumber: 4,
          input: 'E',
          ability: 'Arachno-Mine',
          label: 'O dano que não dá para remover',
          baseEffect:
            'Arremessa uma mina de 100 de dano em campo de 3m de raio, com 4 cargas e 4s de recarga por carga. A mina pode ficar escondida dentro da Cyber-Web e dura 60s, com limite de 15 minas ativas.',
          upgradeEffect:
            'Com o aprimorado, a parte que importa é a combinação: mina em cima da teia fica indestrutível, o que transforma um dispositivo que o inimigo pode simplesmente destruir em um problema que ele precisa desviar.',
          fightNote:
            'A mina que cai sobre teia não explode por dano de área. Ela obrigaao inimigo a pisar em um ponto específico, e é esse o motivo de ela ser plantada no choke e não no meio da briga.',
          why:
            'Cem de dano por carga, quatro cargas e nenhuma recarga de 4s é o dano mais estável do kit. O resto do dano da Peni depende de tiro acerto, e esse não.',
          swapWhen:
            'Troque para o Cyber-Web Snare quando a briga é contra flanker em vez de contra escudo: a lentidão de 30% e a imobilização de 0,7s no segundo acerto pesam mais que 100 de dano estático.',
          sourceIds: ['mrgg-pp', 'dotgg-pp', 'wiki-pp'],
        },
        {
          rank: 3,
          spellNumber: 2,
          input: 'RMB',
          ability: 'Cyber-Web Snare',
          label: 'A única forma de negar área, e a segunda forma de curar',
          baseEffect:
            'Projétil de 5 de dano a 60 m/s, com 2 cargas e 3s de recarga por carga. No acerto aplica Web-Tracer de 5s com lentidão de 30% por 1s; se acertar de novo um inimigo já marcado, imobiliza por 0,7s. No chão, cria uma Cyber-Web.',
          upgradeEffect:
            'Com o aprimorado, o valor real é o marcador: 2 cargas significam dois acertos em 3s, e o segundo acerto no mesmo alvo é o que transforma lentidão em imobilização.',
          fightNote:
            'Segure a segunda carga para quem já foi marcado. Disparo duplo em alvo novo dá lentidão e nada além; disparo duplo em alvo marcado dá 0,7s parado na frente do seu time.',
          why:
            'A habilidade serve duas funções que nenhuma outra cumpre: nega passagem e cria teia. Esse é o único botão do kit que você pode usar para comprar tempo e para se curar no mesmo gesto.',
          swapWhen:
            'Troque para o Cyber-Web Cluster quando a teia já está no chão e o inimigo está longe: o Snare tem 3m de raio e alcance curto para combate aberto.',
          sourceIds: ['mrgg-pp', 'balance-20260807-pp', 'wiki-pp'],
        },
      ],
      adaptations: [
        'Contra flanker (Spider-Man, Black Panther, Angela): o Cyber-Web Snare carregado. Duas cargas em 3s cobrem o dive inteiro, e o segundo acerto no alvo marcado imobiliza por 0,7s, que é tempo de foco concentrado do seu time. Fique dentro da sua própria teia enquanto isso, porque 650 de vida base sem cura nenhuma não sobrevive a um dive sozinho.',
        'Contra composição com cura (Luna Snow, Adam Warlock): você não pode competir em cura infinita, então jogue para negação de área. Encha o choke de Arachno-Mine sobre teia e mantenha 4 Cyber-Webs simultâneas, porque o limite de 4 foi justamente o que o patch de 17/04/2026 deu para impedir setups de campo largo.',
        'Contra Jean Grey: a Cyber-Web é cura sobre tempo e a ultimate dela é burst imediato. Você não ganha essa troca. O plano é não estar dentro da área dela quando a ultimate fecha e usar o Spider-Sweeper para reposicionar com 450 de vida extra antes de o segundo impacto.',
        'Em sala com dois Duelist de dano (Iron Man, Human Torch): o Bionic Spider-Nest atrás de quina com Arachno-Mine em cima é a resposta. Eles ignoram teia, mas não ignoram 100 de dano em um campo de 3m, e o Cyber-Bond permite reposicionar entre tiro sem sair da teia.',
        'Quando precisa forçar o ponto: a Peni é a pior Vanguard para isso e a melhor para depois. Use o Cyber-Bond para chegar antes do time, plantar 4 minas na Cyber-Web do choke e deixar o resto da briga acontecer em volta delas.',
      ],
      ultimates: [
        {
          stance: 'Avanço',
          name: 'Spider-Sweeper',
          bestUse:
            'Fechar um contra-ataque ou pegar a retaguarda inimiga atrás da linha. São 450 de vida extra, 70% de velocidade e 12s de duração, com varrida de 60 de dano a cada 1s em 5m de alcance. A ultimate ainda solta Arachno-Mine de 0,7s em 0,7s até 7 minas e gera Spider-Drone a cada 0,5s.',
          execution:
            'Não use no meio da briga para pegar dano. Use em linha reta na direção da Strategist adversária, porque o objetivo não é o dano: é transformar a área em que os curandeiros inimigos precisam ficar em um piso de minas. O 450 de vida extra existe justamente para você atravessar essa passagem.',
          upgradeValue:
            'A conversão de dano em carga de ultimate caiu de 70% para 55% em 07/10/2026, e o ancor de 50 de vida extra do Team-Up foi removido no mesmo patch. Na prática isso significa que a ultimate chega mais devagar e que o teto dela não vem mais com folga embutida.',
        },
        {
          stance: 'Reposicionamento e negação',
          name: 'Spider-Sweeper',
          bestUse:
            'Sair de uma posição perdida com o campo inteiro coberto de minas e teia atrás. A duração de 12s com 70% de velocidade é o que torna a Peni a Vanguard que melhor atravessa um mapa em perseguição.',
          execution:
            'Rode em direção à sua própria Cyber-Web e não para fora dela: a cada 0,5s um Spider-Drone é criado, e cada drone acertado renova a lentidão. O caminho de volta é o que transforma a ultimate em ferramenta de rotação e não em desperdício de dano perdido.',
          upgradeValue:
            'Como a carga enche mais devagar agora, o valor do upgrade está em segurar a janela inteira: o intervalo de 0,5s de drone é o que faz o campo inteiro ficar crawling de lentidão durante os 12s.',
        },
      ],
      dashGuide: {
        ability: 'Cyber-Bond',
        shortRule:
          'Dash de 10m a 30m com 3s de recarga que só começa a contar quando você solta o fio. Puxado demais e o pullback de 10m é o que traz você de volta.',
        mechanics: [
          'Distância máxima do fio de 19m, com possibilidade de superar isso se você estiver descendo: é o truque para alcançar um andar abaixo sem perder o vínculo.',
          'Estar preso pelo fio não é estar dentro da teia. Você não cura e não converte cura em vida extra pendurado no meio do dash, só pisando no chão de teia.',
          'O tether prende a direção. Você não escolhe para onde vai até soltar, e é por isso que entrar com ele é erro.',
          'A recarga só conta depois de desconectar, então cancelar cedo custa alguns segundos sem a habilidade — mas evita ficar preso no meio do fogo cruzado.',
        ],
        drills: [
          'Antes do round, conecte numa Cyber-Web no alto e atravesse o mapa por ela. É o jeito mais rápido de chegar no ponto e ainda chegar com vida extra.',
          'Depois do round, use o fio para voltar do ponto para a sua retaguarda em vez de correr pelo chão: você atravessa o choke inteiro em menos de 2s e chega dentro da teia.',
        ],
      },
      patterns: [
        {
          title: 'Setup de choke antes do round começar',
          steps: [
            'Chegue com o Cyber-Bond a 10s do time e plante o Bionic Spider-Nest atrás de quina, com o raio de 12m cobrindo a entrada e não a sala inteira.',
            'Jogue uma Cyber-Web Snare no chão da outra entrada e sobre ela plante as 4 cargas de Arachno-Mine: elas ficam indestrutíveis e o inimigo tem que pisar em um ponto para passar.',
            'Fique em cima da sua própria teia o resto da preparação. Cada segundo parado aqui é 25 de cura e mais vida extra convertida.',
          ],
        },
        {
          title: 'Rotação de choke com ninho derrubado',
          steps: [
            'Quando o ninho cair sob fogo, aperte [key:Shift] de novo: você destrói o próprio ninho e recupera a recarga quase na hora.',
            'Derrubar o ninho enquanto um inimigo está acertando ele encurta ainda mais a recarga, então a rotação de defesa é derrubar e replantar, não tentar segurar.',
            'Replante na Cyber-Web já existente em vez de criar uma nova: as 4 web simultâneas são o teto do campo e web nova em cima de web velha é web desperdiçada.',
          ],
        },
        {
          title: 'Ataque com Arachno-Mine na retaguarda',
          steps: [
            'Use o Cyber-Bond para atravessar o choke sem disparar, chegando pela lateral do ponto em vez da frente dele.',
            'Lance as 4 cargas de Arachno-Mine na linha de visão da Strategist adversária e saia do alcance antes do segundo disparo.',
            'Volte para a sua teia pelo fio e atire de lá: a mina faz a negação de rota, você faz a pressão, e ninguém dos dois precisa estar em posição frágil.',
          ],
        },
        {
          title: 'Spider-Sweeper como troca de ponto',
          steps: [
            'A ultimate só compensa se o time já tem o objetivo. Não abra com ela em ponto neutro.',
            'Rode em linha reta por cima do choke, no sentido do spawn inimigo, deixando o rastro de minas e teia como o que fica depois de você passar.',
            'Termine o ult dentro de uma Cyber-Web sua: a vida extra de 450 é o que permite atravessar a passagem de volta sem precisar de curandeiro.',
          ],
        },
      ],
      mistakes: [
        'Usar o Cyber-Bond para entrar. Preso pelo fio você não cura, não gera vida extra e ainda fica sem escolher a direção. É botão de saída e de rotação, nunca de entrada em combate.',
        'Ficar fora da teia atirando. Os 15 de dano por projétil não sustentam troca contra nenhuma composição, e a vida extra de 150 só existe dentro da Cyber-Web.',
        'Plantar Arachno-Mine no meio da sala em vez de em cima da teia. Fora da teia a inimigo pode destruir a mina em dois tiros e o setup não existiu.',
        'Deixar o Bionic Spider-Nest no centro da sala. Com 350 de vida e sendo o primeiro alvo, um ninho visível é um ninho destruído e 15s de recarga perdidos.',
        'Confundir a Web-Tracer com imobilização direta. Desde 07/08/2026 o primeiro acerto só marca e deixa lento; a imobilização de 0,7s vem do segundo acerto no mesmo alvo.',
        'Usar o Spider-Sweeper para pegar dano. A ultimate é 12s de 70% de velocidade e é nesse intervalo que o time inteiro muda de posição, não no impacto de 60.',
      ],
      evidence: [
        'Vida 650, movimento 6 m/s, dificuldade 3 e a lista de habilidades: wiki.gg, Liquipedia e base marvelrivals.gg concordando entre si.',
        'Vida de 750 para 700 em 12/12/2025 e de 700 para 650 em 17/04/2026, sem alteração posterior: patchdelta.gg.',
        'Teto de vida extra da Cyber-Web em 150, com 200 entre 17/04/2026 e 07/08/2026: patchdelta.gg e página de balance changes do Fandom.',
        'Web máximo de 4 simultâneas e Cyber-Web Snare como habilidade de 2 cargas com Web-Tracer de 5s, lentidão de 30% por 1s e imobilização de 0,7s no segundo acerto: balance de 07/08/2026, Fandom e base marvelrivals.gg.',
        'Intervalo de tiro do Cyber-Web Cluster de 0,3s para 0,25s, remoção do auto-lentidão e velocidade do projétil de 120 para 150 m/s: balance de 11/09/2026, patchdelta.gg.',
        'Conversão de dano em carga de ultimate de 70% para 55% e remoção dos 50 de vida extra do ancor de Team-Up em 07/10/2026: página de balance changes do Fandom.',
        'Recarga do Vibranium Mech com Black Panther de 20s para 15s em 11/09/2026: patchdelta.gg.',
        'Arachno-Mine de 100 de dano com 4 cargas e 4s por carga, duração de 60s, limite de 15 minas e comportamento indestrutível sobre teia: base marvelrivals.gg e guia escrito da DotGG.',
        'Vitória de 57,2% em 49.313 partidas com 7,7% de taxa de escolha, tier S de Vanguard, e duplas com Rocket Raccoon em 61,6%, Spider-Man em 61,5% e Magik em 61,5%: Counterwatch, com a página de herói do mesmo site marcando 55,6% em 62.988 partidas com dados de 02/09/2026.',
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
      published: '2026-10-04',
      confidence: 'alta',
      takeaways: [
        'Peni Parker aparece no bundle com enName "PENI PARKER" e duas opções na ordem: pos0 VIBRANIUM MECH e pos1 ROCKET NETWORK. As duas com Key_en "C".',
        'Vibranium Mech, base: "Upon activation, briefly grants Cyber-Web Clusteran Attack Speedand DamageBoost." O bundle vem sem espaço em Clusteran, Speedand e DamageBoost, o que é erro de espaçamento do site oficial; lido como Cyber-Web Cluster recebendo aumento de velocidade de ataque e de dano. Aprimorado: "When teaming up with Black Panther, activating the ability deploys a frontal Vibranium Shield, while reducing the Vibranium Energy cost of Cyber-Web Cluster."',
        'Rocket Network, base: "Deploy an Armored Spider-Nestthat periodically drops Spider-Dronesand Armor Packsthat grant Bonus Health." Mesma falha de espaçamento do site. Aprimorado: "When teaming up with Rocket Raccoon, the Armored Spider-Nestpassively regenerates its own Health. Furthermore, Rocket\'s B.R.B.will generate Cyber-Webs, and spawn both Spider-Dronesand Arachno-Mines."',
        'Os ícones e retratos resolvem para img/c26-1_ac2bb878.png, img/h26-1_a5f87c0d.png, img/c26-2_497b0fb9.png e img/h26-2_97122a0a.png na base de assets do próprio bundle, e os quatro PNGs baixados começam com os magic bytes de PNG.',
        'Divergência com as wikis: a wiki.gg e a Liquipedia ainda listam o Armor Explosion com o Venom, que é da temporada anterior e não aparece no bundle atual.',
      ],
    },
    {
      id: 'wiki-pp',
      kind: 'database',
      title: 'Peni Parker — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Peni_Parker',
      published: '2025-10-16',
      confidence: 'em disputa',
      takeaways: [
        'Role Vanguard e vida 650, que é o número confirmado pelo histórico de balance.',
        'Cyber-Web Cluster: 15 de dano por projétil, 15 de dano em raio no impacto e 3,33 disparos por segundo, o que é anterior ao balance de 11/09/2026.',
        'Bionic Spider-Nest: Spider-Drones com 40 de dano, Arachno-Mine com 100 e Spider-Sweeper com 60 de dano por acerto e 450 de vida extra.',
        'Cyber-Web Snare descrito com imobilização direta de 0,7s, 25 de cura por segundo, 25% de velocidade e 5 de dano, o que é anterior à conversão em Web-Tracer de 07/08/2026.',
        'Cyber-Bond descrito como fio que liga a uma área ou Cyber-Web e dispara um pullback se for esticado longe demais.',
        'A página lista Armor Explosion como Team-Up vigente, o que não bate com o bundle da temporada atual.',
        'Divergência declarada: os 3,33 disparos por segundo e a imobilização direta do Snare estão superados pelos balances de 11/09/2026 e 07/08/2026.',
      ],
    },
    {
      id: 'mrgg-pp',
      kind: 'database',
      title: 'Peni Parker — base de valores e leitura de meta (marvelrivals.gg)',
      url: 'https://marvelrivals.gg/heroes/peni-parker',
      published: '2026-09-17',
      confidence: 'alta',
      takeaways: [
        'Valores pós-balance de 11/09/2026: Cyber-Web Cluster com 4 disparos por segundo, 150 m/s de projétil, 15 de dano no projétil e 15 no campo de efeito, 1,5m de raio, acerto crítico possível e sem penalidade de movimento.',
        'Cyber-Web Snare: 2 cargas com 3s cada, 5 de dano, 60 m/s, raio de 3m, Web-Tracer de 5s, lentidão de 30% por 1s e imobilização de 0,7s ao acertar um alvo já marcado.',
        'Aliados na Cyber-Web da Peni recebem 25% de velocidade e 15 de cura por segundo, com 25 de vida extra convertida; a Peni recebe 25 de cura e teto de 150.',
        'Bionic Spider-Nest: 15s de recarga, 350 de vida, 10m de distância máxima, 12m de raio, 2 Spider-Drones a cada 3s com 40 de dano e lentidão de 8% por 2s acumulando até 40%.',
        'Arachno-Mine: 100 de dano, 3m de raio, 4 cargas com 4s de recarga por carga.',
        'Cyber-Bond: 3s de recarga, 100 m/s, distância máxima de 19m, dash de 10m a 30m e pullback de 10m.',
        'Spider-Sweeper: 12s, custo de energia 3400, 60 de dano por varrida, 450 de vida extra e 70% de velocidade, 7 minas no máximo, intervalo de mina 0,7s e de drone 0,5s.',
        'Wall Crawl a 7,2 m/s segurando o pulo.',
        'Relatório de meta de 10 a 17/09/2026: rank 1, 61,29% de win rate, 4,00% de taxa de escolha e 6,91% de banimento, o que confirma o topo de Vanguard por uma janela diferente da do Counterwatch.',
      ],
    },
    {
      id: 'balance-20260911-pp',
      kind: 'official',
      title: 'Patchdelta — Peni Parker Patch History (mudanças até 11/09/2026)',
      url: 'https://patchdelta.gg/marvelrivals/peni-parker',
      published: '2026-09-11',
      confidence: 'alta',
      takeaways: [
        '14 mudanças líquidas em 8 patches, 6 buffs contra 1 nerf, que torna esta a melhor trilha histórica do herói.',
        '11/09/2026: intervalo de tiro do Cyber-Web Cluster cai de 0,3s para 0,25s e a auto-lentidão de tiro é removida por completo.',
        '11/09/2026: com o Team-Up do Black Panther selecionado, a recarga do Vibranium Mech cai de 20s para 15s.',
        '17/04/2026: vida de 700 para 650, teto de vida extra da Cyber-Web de 150 para 200, Cyber-Webs simultâneas de 3 para 4 e velocidade do projétil de 120 para 150 m/s.',
        '07/08/2026: teto de vida extra volta de 200 para 150 e o Cyber-Web Snare passa a ser habilidade de 2 cargas, aplicando Web-Tracer e lentidão em vez de imobilização direta.',
        '12/12/2025: vida de 750 para 700. 11/04/2025: vida de 650 para 750, acerto crítico possível no Cluster e penalidade de movimento ao atirar cai de 40% para 20%.',
        '11/09/2025: Spider-Drones aplicam lentidão de 8% por 2s acumulando até 40%, e o intervalo de solta de drones na ultimate cai de 0,7s para 0,5s.',
        'A Peni Parker não foi mexida no patch de 01/10/2026, o que torna 11/09/2026 o estado vigente dos números.',
      ],
    },
    {
      id: 'balance-20260807-pp',
      kind: 'database',
      title: 'Peni Parker/Balance Changes — Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Peni_Parker/Balance_Changes',
      published: '2026-07-10',
      confidence: 'alta',
      takeaways: [
        'Temporada 9, 07/10/2026: conversão de dano em carga de ultimate cai de 70% para 55% e o ancor de vida máxima de 50 do Team-Up é removido.',
        'Temporada 7.5, 17/04/2026: vida máxima cai de 700 para 650, Cyber-Webs ativos sobem de 3 para 4 e o teto de vida extra da Cyber-Web sobe de 150 para 200.',
        'Temporada 5, 11/11/2025: as Cyber-Webs passam a dar também aumento de velocidade e cura sobre tempo para aliados, com 15 de cura e até 25 de vida extra.',
        'A Season 4 descreve o Rocket Network como o Rocket Raccoon concedendo à Peni a habilidade de colocar um ninho adicional que gera pacotes de armadura, o que confirma que a natureza do Team-Up é vida extra em área.',
        'A Season 1.5 descreve o Armor Expulsion com o Venom como Team-Up da temporada, o que marca a Armor Expulsion como opção antiga e fora da temporada atual.',
      ],
    },
    {
      id: 'counterwatch-pp',
      kind: 'database',
      title: 'Peni Parker — Counters and Stats (Counterwatch)',
      url: 'https://www.counterwatch.gg/stats/marvel-rivals/heroes/peni-parker',
      published: '2026-09-02',
      confidence: 'em disputa',
      takeaways: [
        'Vanguard tier S com 55,6% de win rate em 62.988 partidas comunitárias, com dados atualizados em 02/09/2026.',
        'Divergência registrada: a lista de tier da mesma fonte, atualizada em 04/10/2026, traz 57,2% de win rate em 49.313 partidas e 7,7% de taxa de escolha, o que indica janelas e filtros de habilidade diferentes entre as duas leituras.',
        'Duplas mais fortes: Rocket Raccoon com 61,6%, Spider-Man com 61,5%, Magik com 61,5%, Ultron com 61,3% e The Hood com 60,7%.',
        'Ela é contrapickada com mais frequência por Jubilee, Rocket Raccoon e The Punisher, e contrapica Black Panther, Daredevil e Magik.',
        'Estatísticas por 10 minutos contra a média de Vanguard: 15,5 abates contra 16,3, 6,4 mortes contra 6,8, 15,4 assists contra 4,8 e 3.391 de dano contra 3.104.',
        'A leitura da própria fonte é que ela joga no perfil poke e pode entrar em composições de rush quando o formato do time pede.',
        'Nenhum número de dupla foi usado como verdade de mecânica: o Rocket Raccoon aparece como o parceiro mais forte medido, e a recomendação entre as duas opções foi feita por mecânica.',
      ],
    },
    {
      id: 'dotgg-pp',
      kind: 'guide',
      title: 'Peni Parker Guide: How to Play, Tips and Tricks and Matchups (marvelrivals.gg)',
      url: 'https://marvelrivals.gg/peni-parker-guide/',
      published: '2025-04-27',
      confidence: 'media',
      takeaways: [
        'Leitura tática, não numérica: a description define a Peni como Vanguard que protege o objetivo por armadilha e negação em vez de atrito puro.',
        'O ataque primário tem munição infinita, sem recarga, mas com queda de dano forte, o que restringe o uso a curto e médio alcance.',
        'As Arachno-Mine começam com 4 cargas, duram 60s e o limite é de 15 minas ativas; o ninho continua plantando minas até ser destruído ou chegar a 10 minas ativas.',
        'A Cyber-Web na base dá cerca de 40 de cura por segundo e o teto é 150 de vida extra acima da base; web sobreposto não cura mais rápido, mas gera armadura mais rápido.',
        'O tether do Cyber-Bond segura a Peni a cerca de 10m antes de começar o pullback, e o tether não conta como estar dentro da teia, então não gera vida.',
        'A recarga do Cyber-Bond só começa a contar quando o vínculo é desfeito, o que é o mesmo comportamento observado nos valores atuais.',
        'Derrubar o próprio ninho com a mesma habilidade dá recarga quase imediata e encurta mais ainda se um inimigo estiver acertando o ninho no momento.',
        'Dica de posicionamento: colocar o ninho em uma borda elevada faz ele soltar minas abaixo, cobrindo halls e portas sem expor o ninho.',
        'Pontos fracos declarados: movimento lento, hitbox grande, alvos fáceis de acertar na cabeça e dano primário baixo.',
        'Por ser de abril de 2025, os números de cura por segundo e recarga estão pré-patch e foram substituídos pela base marvelrivals.gg; o que ficou foi a leitura de jogabilidade.',
      ],
    },
    {
      id: 'liquipedia-pp',
      kind: 'database',
      title: 'Peni Parker — Liquipedia Marvel Rivals Wiki',
      url: 'https://liquipedia.net/marvelrivals/Peni_Parker',
      published: '2025-07-26',
      confidence: 'em disputa',
      takeaways: [
        'Vida 650, velocidade 6 m/s, dificuldade 3 e game ID 1042, o que confirma o número de vida fora do patchdelta.',
        'Cyber-Web Cluster com 120 m/s, 3,33 disparos por segundo e 20% de lentidão na release, todos pré-patch de 11/09/2026.',
        'Spider-Sweeper com 3400 de custo de energia, 12s, 60 de dano por varrida, 450 de vida extra e 70% de velocidade.',
        'Wall Crawl a 7,2 m/s e Cyber-Bond com distância máxima de 19m, 100 m/s e dash de 10m a 30m.',
        'A página lista Armored Spider-Nest com Rocket Raccoo como Team-Up e diz que a Peni pode usar os dois ninhos ao mesmo tempo, o que descreve o Rocket Network de forma coerente com o bundle.',
        'Divergência declarada: tudo que a página traz de Projectile Speed e firing rate do Cluster e de imobilização direta do Snare está pré-patch.',
      ],
    },
    {
      id: 'fandom-pp',
      kind: 'database',
      title: 'Peni Parker — Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Peni_Parker',
      confidence: 'media',
      takeaways: [
        'Infobox com vida 650, role Vanguard e dificuldade 3.',
        'Confirma que o Fandom serve Champion Icon Peni Parker Animated.gif, arquivo de 5 MB que foi baixado como WebP animado com extensão .gif, e que Peni Parker DEFAULT Table Icon.png existe em 220x220.',
        'Hero Card Peni Parker.png não existe na wiki: a arte de banner veio do fallback Peni Parker Hero Portrait.png, em 1368x1368.',
        'Estratégia descrita: ficar perto da linha da frente ou como guarda-costas da retaguarda, usando lentidão e imobilização para afastar quem tenta mergulhar.',
        'Ataques corpo a corpo não atravessam as barreiras de Doctor Strange e de Magneto, o que importa para o Spider-Sweeper.',
      ],
    },
    {
      id: 'reddit-pp',
      kind: 'forum',
      title: 'Consenso de comunidade sobre a Peni Parker — leitura de snippet',
      url: 'https://www.reddit.com/r/marvelrivals/',
      confidence: 'pendente',
      takeaways: [
        'Leitura de snippet apenas: o Reddit bloqueia .json e old.reddit.com com 403 mesmo com UA de browser, então nenhuma thread foi lida integralmente nesta sessão.',
        'O que fica registrado como pendência declarada: não há estatística de preferência entre as duas opções de Team-Up confirmada por leitura de fórum.',
        'A recomendação deste guia foi feita por mecânica e pelo número de dupla do Counterwatch, e não por métrica de comunidade.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Oficial',
      count: 3,
      status: 'bundle de Team-Up da Temporada 10 e dois rastros de balance (07/08/2026 e 11/09/2026) via patchdelta e página de balance changes',
    },
    {
      kind: 'database',
      label: 'Wiki e base de dados',
      count: 5,
      status: 'base marvelrivals.gg para valores atuais, wiki.gg e Liquipedia para mecânica, Fandom para histórico, Counterwatch para meta',
    },
    {
      kind: 'guide',
      label: 'Guias escritos',
      count: 1,
      status: 'guia de jogabilidade da DotGG, de abril de 2025: útil para tática, com todos os números pré-patch e substituídos pela base atual',
    },
    {
      kind: 'forum',
      label: 'Fórum e comunidade',
      count: 1,
      status: 'registrado como pendente: Reddit bloqueia leitura integral e nenhuma thread foi aberta nesta sessão',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeo e transcrição',
      count: 0,
      status: 'pendente: nenhum vídeo com transcrição auditável localizado nesta sessão',
    },
  ],
}
