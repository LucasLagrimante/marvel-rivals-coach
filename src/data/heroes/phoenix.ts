import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const phoenix: HeroGuide = {
  id: 'phoenix',
  name: 'Phoenix',
  aliases: ['Jean Grey', 'Jean', 'Fênix', 'Força Fênix', 'Dark Phoenix', 'PX'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/phoenix.png'),
  bannerUrl: publicAsset('heroes/banners/phoenix.png'),
  selectionPortraitUrl: publicAsset('heroes/select/phoenix.png'),
  selectionHoverUrl: publicAsset('heroes/select/phoenix_champion.gif'),
  selectionHoverFit: { scale: 1.45, x: 0, y: 22 },
  theme: {
    primary: '#f0b24a',
    primaryRgb: '240, 178, 74',
    secondary: '#c8452f',
    secondaryRgb: '200, 69, 47',
    surface: '#140a08',
    surfaceRgb: '20, 10, 8',
  },
  roles: ['duelist'],
  lastVerified: '2026-11-01',
  confidenceSummary:
    'Revisão em 01/11/2026: a página oficial confirma os valores atuais de habilidades e Team-Ups; o bundle confirma opções e textos. O nome RMB atual é Telekinesis Burst, mas o texto do Circle of Life ainda chama a habilidade de Psionic Detonation. Telepathic Illusion não tem invulnerabilidade indicada na página. Dados Fandom/Batru de 05/10 são snapshots pré-10.5; a recomendação de Team-Up é tática e não uma conclusão estatística.',
  coreRead: [
    'Acumule Sparks no alvo prioritário; detone quando inimigos se aproximarem.',
    'Headshot vale 2 Sparks. Com 1 Spark por acerto, o acerto na cabeça dobra a pilha e a explosão chega na metade do tempo.',
    'Cada detonação concede 5 de vida bônus por segundo durante 4s, acumulando até 25; não é mais autocura. Use esse amortecedor para manter pressão sem contar com recuperação de vida.',
    'Endsong Inferno combina dano com remoção de defesa: além do impacto, campo e onda aplicam Sparks e a onda remove barreiras, escudos, invocações e vida bônus. Use quando esse corte abrir a luta; não prometa abate de tank.',
    'Dark Ascent é a recarga real do kit: o voo é reposicionamento puro e exige 50% de energia no mínimo para ser ligado.',
  ],
  teamUps: {
    summary:
      'Telekinetic Beatdown oferece entrada e autocura: a tabela oficial lista 55 de dano direto e por ricochete, 50 de cura e até três ricochetes; Rogue amplia para quatro, com 65 de cura e 2 Sparks por acerto. Circle of Life é a opção de controle contra cura alta: 15 no primeiro golpe, 20 nos dois seguintes e Healing Reduction de 40% por 3s; Hela acrescenta 2 Sparks por acerto. Batru é snapshot pré-10.5, não medida de força atual.',
    recommended: 'Telekinetic Beatdown',
    recommendedReason:
      'Telekinetic Beatdown fica como padrão provisório: 55 de dano direto e por ricochete, cura 50 e até três ricochetes; Rogue aprimora para quatro ricochetes, cura 65 e 2 Sparks por acerto. Circle of Life troca Telekinesis Burst por três explosões, com stun de 0,3s e Healing Reduction de 40% por 3s; Hela adiciona 2 Sparks por acerto, e a recarga é 10s. Não há comparação pós-10.5 verificada para afirmar superioridade competitiva.',
    options: [
      {
        name: 'Telekinetic Beatdown',
        partner: 'Rogue',
        partnerRole: 'Duelista',
        input: 'C',
        baseEffect:
          'Dispara uma onda de choque telecinética para frente. Se acertar, a Fênix avança no inimigo e aplica um soco forte. Se houver outros alvos por perto, a Fênix pisca entre eles para acertar também, aplicando Sparks em cada vítima e curando a Phoenix.',
        enhancedEffect:
          'Ao formar dupla com Rogue, a largura da onda de choque telecinética aumenta e o alcance de detecção de alvos da Fênix é ampliado.',
        bestFor:
          'A tabela oficial lista 55 de dano no impacto e em cada ricochete, detecção em raio de 8m, cura de 50, 1 Spark por acerto e até três ricochetes. Com Rogue, o aprimoramento lista 2 Sparks por acerto, até quatro ricochetes e cura de 65; use a onda quando conseguir conectar alvos próximos.',
        easySetup:
          'O efeito base funciona sem Rogue: onda, golpe, ricochetes, Sparks e autocura. A tabela oficial detalha até três ricochetes e cura 50; com Rogue, quatro ricochetes, 2 Sparks por acerto e cura 65.',
        iconUrl: publicAsset('teamups/phoenix-telekinetic-beatdown-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/phoenix-telekinetic-beatdown-partner.png'),
      },
      {
        name: 'Circle of Life',
        partner: 'Hela',
        partnerRole: 'Duelista',
        input: 'RMB',
        baseEffect:
          'O texto do bundle usa o nome legado "Psionic Detonation"; a página oficial atual chama a habilidade de Telekinesis Burst. Circle of Life substitui esse slot por Phoenix Netherfire, que aplica uma Telekinetic Mark no local mirado. Ao acertar, dispara uma explosão pequena que atordoa, seguida de duas maiores que aplicam Healing Reduction; cada explosão aplica Sparks.',
        enhancedEffect:
          'Ao formar dupla com Hela, cada explosão da sequência aplica múltiplas pilhas de Sparks nos inimigos atingidos.',
        bestFor:
          'Escolha contra cura alta: o perfil oficial lista 15 de dano no primeiro golpe, 20 nos dois seguintes, stun de 0,3s e Healing Reduction de 40% por 3s; a recarga é 10s. Com Hela, a página lista 2 Sparks por acerto. Prefira Beatdown se entrada e autocura forem mais valiosas.',
        easySetup:
          'O efeito base de três explosões, stun e Healing Reduction funciona sem Hela. Com Hela, a página oficial detalha 2 Sparks por acerto; o bundle descreve isso como múltiplas pilhas.',
        iconUrl: publicAsset('teamups/phoenix-circle-of-life-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/phoenix-circle-of-life-partner.png'),
      },
    ],
    sourceIds: ['teamup-bundle', 'balance-20261009', 'official-phoenix-page', 'batru-synergy-phx'],
  },
  systems: [
    {
      name: 'Sparks',
      input: 'LMB',
      heading: 'A pilha de 3 que governa o herói inteiro',
      facts: [
        'Cosmic Flames é hitscan: 65 de dano por tiro, intervalo de 0,435s, e queda de dano começando em 10m até 65% em 30m. Passar de 20m de distância não é só perder dano: é perder tempo até a explosão sair.',
        'Cada acerto no corpo aplica 1 Spark e cada crítico aplica 2. Com 3 Sparks a explosão é acionada: 45 de dano no alvo, 20 de área em 4m de raio, 5 de vida bônus por segundo durante 4s, até 25, e mais 1 Spark nos inimigos pegados no raio.',
        'Headshot não é estilo, é economia: 2 Sparks por crítico encurtam o ciclo de detonação. Não trate o número de acertos como garantia de eliminação: a vida efetiva do alvo e o dano recebido variam.',
        'A autocura foi removida: cada detonação concede 5 de vida bônus por segundo durante 4s, acumulando até o limite de 25. Não trate isso como recuperação de vida nem como substituto de suporte.',
        'Os Sparks da explosão não empilham entre si por um curto período. É por isso que atirar em grupo não gera explosão em cascata: o valor real dela é a área, não a reação em cadeia entre inimigos.',
        'A duração das Sparks e a perda de pilha ao perder linha de visão não foram confirmadas pelas fontes oficiais desta revisão.',
        'O ponto fraco declarado: sem Telekinesis Burst pronta, a Phoenix tem 250 de vida e Cosmic Flames causa 65 por tiro. A recarga de 10s da Telekinesis Burst é o relógio do herói tanto quanto a pilha de 3 Sparks.',
      ],
      meter: [
        { label: 'Tiro no corpo', value: '65 + 1 Spark' },
        { label: 'Crítico', value: '2 Sparks (dano não publicado)' },
        { label: 'Explosão (alvo / área)', value: '45 / 20 em 4m' },
        { label: 'Vida bônus por detonação', value: '+5/s por 4s (máx. 25)' },
        { label: 'Queda de dano', value: '10m a 65% em 30m' },
      ],
    },
    {
      name: 'Controle e deslocamento',
      input: 'RMB',
      heading: 'Telekinesis Burst, Telepathic Illusion e Dark Ascent',
      facts: [
        'Telekinesis Burst ([key:RMB]) marca uma área à distância dentro da sua linha de visão e dispara 3 explosões de 20: a primeira atordoa por 0,3s num cilindro de 2m de raio e 4m de altura, as duas seguintes aplicam 30% de lentidão por 2s num cilindro de 3m e 6m. Recarga de 10s. A primeira explosão atordoa; as duas seguintes aplicam lentidão.',
        'As explosões da Telekinesis Burst não sofrem queda de dano e não atravessam parede — a área é marcada antes do volume aparecer, então uma parede entre você e o ponto cancela as explosões restantes. Marcar o canto errado custa a recarga inteira.',
        'Cada explosão da Telekinesis Burst aplica 1 Spark. Como a explosão do [key:LMB] aplica 1 Spark num raio de 4m, marcar o inimigo com [key:RMB] e atirar no corpo completa 3 Sparks quase sem esforço: esse é o combo de burst mais estável do kit.',
        'Telepathic Illusion ([key:Shift]) deixa uma ilusão que detona com 50 de dano em raio de 3m, aplica 1 Spark e teleporta a Phoenix 8m na direção do movimento. A fonte oficial consultada não indica invulnerabilidade. Recarga de 12s.',
        'A ilusão explode no ponto de origem, não no de destino. Usar a ilusão para fugir e atirar é o roteiro correto; usar para perseguir inverte a ordem e você explode longe de onde está o inimigo.',
        'Dark Ascent ([key:E]) é voo livre com 50% de aumento de movimento, e custa 400 de energia por segundo de um pool de 1200 que regenera 120/s começando logo depois de desligar. Exige ao menos 50% de energia para ligar. Isso dá 3s de voo por carga cheia.',
        'Dark Ascent devolvia munição automaticamente antes de um ajuste do time; hoje o voo é reposicionamento puro. Se você precisa de dano, o voo é desperdício — se você precisa sair de um choke, é a melhor habilidade do kit.',
      ],
      meter: [
        { label: 'Telekinesis Burst', value: '3x20, 10s' },
        { label: 'Controle', value: '0,3s stun + 30% slow' },
        { label: 'Telepathic Illusion', value: '8m, 50 de dano, 12s' },
        { label: 'Dark Ascent', value: '400/s, pool 1200' },
        { label: 'Voo limpo', value: '~3s por carga cheia' },
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelista',
      nickname: 'Sparks em área',
      health: '250',
      difficulty:
        'Mira e gestão de Sparks: Cosmic Flames cai para 65% do dano a partir de 30m. A duração da Spark não foi confirmada nesta revisão; posicione Telekinesis Burst sem obstruções.',
      job: 'Transformar alvo isolado em explosão em área e remover barreiras, escudos, invocações e vida bônus com a ultimate; Phoenix não é fonte de cura de grupo.',
      verdict:
        'Snapshot pré-10.5 do Batru (05/10): 42,13% de win rate e 8,81% de taxa de escolha em 64.048 partidas — não é uma métrica atual. Taticamente, Phoenix depende de agrupar alvos para aproveitar as explosões em área e tem pouca margem para errar com 250 de vida; use a função de controle e as Sparks para abrir uma janela de equipe, sem tratar a taxa antiga como prova de força presente.',
      playstyle: [
        'Antes de atirar, decida o alvo. Você não está tentando matar ninguém com Cosmic Flames: está tentando fechar 3 Sparks em alguém que tem companhia ao lado.',
        'Procure críticos para acelerar Sparks; a soma não garante abate automático. Use a detonação para pressionar alvos próximos.',
        'Nunca atire de 30m para a explosão cair. Da linha de 10m você explode antes de ele reposicionar; da linha de 30m ele sai do 4m antes da explosão.',
        '[key:RMB] no grupo antes de atirar: as três explosões aplicam Sparks, e a primeira atordoa; com Hela, cada uma aplica 2 Sparks. O stun de 0,3s abre uma janela curta para follow-up, mas não garante eliminação.',
        'Use [key:Shift] para sair de troca ruim, nunca para entrar. A ficha oficial descreve teleporte e detonação da ilusão, mas não confirma invulnerabilidade no trajeto.',
      ],
      priorityKicker: 'Prioridade',
      priorityTitle: 'Telekinesis Burst antes de Cosmic Flames',
      priorityDescription:
        'A Telekinesis Burst converte espaço em controle: 3 explosões de 20 e 1 Spark por acerto; a primeira atordoa por 0,3s e as duas seguintes aplicam 30% de lentidão por 2s. O acerto depende de posicionar a área; use a curta janela de controle para abrir um follow-up.',
      abilityLoop: [
        { ability: 'Cosmic Flames', input: 'LMB' },
        { ability: 'Telekinesis Burst', input: 'RMB' },
        { ability: 'Telepathic Illusion', input: 'Shift' },
        { ability: 'Dark Ascent', input: 'E' },
        { ability: 'Endsong Inferno', input: 'Q' },
      ],
      upgradePlan: [
        {
          rank: 1,
          input: 'RMB',
          ability: 'Telekinesis Burst',
          label: 'Controle de área que aplica 3 Sparks se conectar',
          baseEffect:
            'Marca uma área dentro da linha de visão e detona 3 explosões de 20 de dano cada. A primeira atordoa por 0,3s num cilindro de 2m de raio e 4m de altura; as duas seguintes aplicam 30% de lentidão por 2s num cilindro de 3m de raio e 6m de altura. Cada explosão aplica 1 Spark. Recarga de 10s.',
          fightNote:
            'Marque no chão, não no inimigo. A área aparece antes do volume: marcar em frente de um tanque que dá um passo para o lado faz as 3 explosões errarem e a recarga de 10s vai embora sem nada.',
          why: 'Se as três explosões acertam, aplicam 3 Sparks; o stun de 0,3s abre uma janela curta de follow-up, mas não garante eliminação.',
          swapWhen:
            'Pule a Telekinesis Burst quando o alvo já está com 2 Sparks seus: aí o [key:LMB] sozinho fecha a explosão em menos de um segundo, e os 10s da recarga ficam para o próximo.',
          sourceIds: ['official-phoenix-page', 'fandom-phoenix', 'wiki-phx', 'mobalytics-phx'],
        },
        {
          rank: 2,
          input: 'LMB',
          ability: 'Cosmic Flames',
          label: 'O headshot que encurta a pilha pela metade',
          baseEffect:
            'Dispara projétil de fogo hitscan à frente: 65 de dano por tiro, 1 Spark no corpo e 2 em crítico, intervalo de 0,435s, queda de dano começando em 10m até 65% em 30m. Com 3 Sparks a explosão causa 45 no alvo, 20 de área em 4m, aplica 1 Spark nos inimigos ao redor e concede 5 de vida bônus por segundo durante 4s, até 25.',
          fightNote:
            'Segure o crítico até o terceiro Spark. Bater 2 Sparks com dois críticos e fechar com um tiro no corpo leva metade do tempo — e explode no meio do grupo, onde a área de 4m faz serviço.',
          why: 'É a principal fonte de dano e de Sparks; o crítico aplica 2 Sparks e acelera a detonação sem gastar a Telekinesis Burst.',
          swapWhen: 'Troque a mira pelo [key:RMB] quando o alvo estiver a menos de 10m: a 65 de dano por tiro e 65% de queda, o volume controlado entrega mais dano por recurso.',
          sourceIds: ['official-phoenix-page', 'fandom-phoenix', 'wiki-phx', 'mobalytics-phx'],
        },
        {
          rank: 3,
          input: 'Q',
          ability: 'Endsong Inferno',
          label: 'Ultimate de dano e remoção de defesas',
          baseEffect:
            'Sobe aos céus e mergulha na área escolhida: 150 de dano no impacto central num raio de 10m e 50 na onda de choque. A onda destrói invocações, barreiras e escudos inimigos e remove toda a vida bônus. Quando campo e onda acertam o mesmo inimigo, aplicam 2 Sparks no total (ajuste 10.5). Custo de 3100 de energia; voo de até 20s no snapshot pré-patch.',
          fightNote:
            'Durante a seleção da zona, a invulnerabilidade não foi confirmada nesta revisão. Aqueça os tiros no caminho e nunca escolha a área colada em você: o que mata é o tempo de voo, não o impacto.',
          why: 'Use contra alvos cuja vida bônus, escudos ou invocações sustentam a defesa. A remoção reduz essas camadas, mas não transforma necessariamente um alvo com vida base alta em um alvo de 250.',
          swapWhen: 'Gaste a ultimate com o time agrupado em choke point e não em campo aberto: o raio de 10m da queda e a onda de 50 só compensam quando há mais de um inimigo dentro.',
          sourceIds: ['official-phoenix-page', 'fandom-phoenix', 'mobalytics-phx', 'marvelrivalsgg-phx'],
        },
      ],
      adaptations: [
        'Inimigos com vida bônus e escudo (Venom, Adam Warlock, Capitão América, a ult da Storm, Doctor Strange com o escudo de barreira): Endsong Inferno não é ultimate de dano aqui, é remoção de defesa. Use antes que o inimigo entre em sustain.',
        'Composição com cura pesada (Adam Warlock, Luna Snow, Mantis, Capitão América com a flag): Circle of Life troca Telekinesis Burst por Healing Reduction de 40% por 3s; com Hela, cada acerto da sequência aplica 2 Sparks.',
        'Voadores e alvos muito móveis: a duração da Spark não foi confirmada nesta revisão. O primeiro golpe da Telekinesis Burst atordoa por 0,3s, criando uma janela para atirar.',
        'Alvo escondido atrás de tanque (Doutor Estranho com escudo, Invisible Woman, Groot com parede): Cosmic Flames é hitscan e atravessa, mas a explosão de 4m não atravessa o muro do Groot. Um muro entre você e o alvo custa a explosão inteira.',
        'Mapa aberto e centro de ponto largo: a Phoenix perde o teto sem agrupamento. Nesses mapas ela vira poking de 65 por tiro com queda a partir de 10m, e vale trocar por um Duelist de alcance que não dependa de pilha.',
      ],
      ultimates: [
        {
          stance: 'Ultimate como remoção de defesa',
          name: 'Endsong Inferno',
          bestUse:
            'Contra herói que só morre com a vida bônus intacta: 150 no impacto central em 10m, 50 na onda, e a onda derruba invocação, barreira e escudo e zera toda a vida bônus do inimigo pego.',
          execution:
            'Espere o inimigo entrar no centro de um choke com o time dele junto. Escolha a área longe de você, voe e atire nos adversários durante o voo para já fechar 1 Spark no impacto. O perfil oficial lista 150 de dano de impacto; a página não detalha falloff.',
          upgradeValue:
            'Não há aprimoramento de Endsong Inferno descrito nas fontes desta revisão; priorize alinhar impacto e onda com os alvos relevantes.',
        },
        {
          stance: 'Ultimate como finalização de grupo',
          name: 'Endsong Inferno',
          bestUse:
            'Quando 3 ou mais inimigos estão no mesmo raio de 10m e já têm Sparks: acertar o mesmo inimigo com o campo e a onda aplica 2 Sparks no total; alinhe Cosmic Flames para detonar a pilha durante a luta.',
          execution:
            'Segure a Phoenix em 1 Spark e dispare a ultimate em cima do grupo. O impacto causa 150 e a onda 50; a página lista 250 de autocura da ultimate, mas não especifica aqui a janela do efeito. A detonação de Cosmic Flames concede 5 de vida bônus por segundo durante 4s, até 25.',
          upgradeValue:
            'Não há aprimoramento de Endsong Inferno descrito nas fontes desta revisão; priorize alinhar impacto e onda com os alvos relevantes.',
        },
      ],
      dashGuide: {
        ability: 'Dark Ascent',
        shortRule:
          'Dark Ascent consome 400/s de um pool de 1200: até 3s de voo por carga cheia, com 50% de aumento de movimento. Reposicionamento vertical e fuga de choke, nunca entrada agressiva.',
        mechanics: [
          'O voo custa 400 de energia por segundo de um pool de 1200 que regenera 120/s logo após desligar: são cerca de 3s de voo limpo por carga cheia, e ele exige ao menos 50% de energia para ligar.',
          'Dark Ascent não repõe mais munição desde o ajuste do time. O voo atual é posição pura: é a ferramenta de recuperação de briga perdida, não uma forma de manter o DPS.',
          'Telepathic Illusion é o teleporte curto: 8m, 12s de recarga, 50 de dano e 1 Spark da ilusão que fica no ponto de origem. A ficha oficial não confirma invulnerabilidade durante o trajeto; não conte com isso como resposta garantida a ultimate de área.',
          'Voo + ilusão na mesma sequência é o combo de reposicionamento mais longo do kit: sai da linha de tiro, atravessa 8m instantâneos e recupera 3s de voo para voltar. É assim que se sai vivo de um choke com 250 de vida.',
        ],
        drills: [
          'Antes de cada briga, mire três paredes diferentes para a ilusão e três trajetórias de voo. No momento em que você precisar, a opção já existe.',
          'Treine a ordem de saída: [key:Shift] primeiro para o teleporte curto, [key:E] em seguida para o voo. Invertido, você gasta 400 de energia por segundo antes de sair do alcance.',
          'Treine pousar o voo em ponto alto antes de atirar: a queda de dano começa em 10m e a explosão de 4m não pega o inimigo se você estiver mais longe que isso.',
        ],
      },
      patterns: [
        {
          title: 'Eliminação em alvo isolado',
          steps: [
            '[key:RMB] no pé do alvo → as 3 explosões aplicam 3 Sparks → o alvo explode com 45 de dano e 20 de área → [key:LMB] com crítico (2 Sparks) completa a pilha em quem está do lado.',
            'Em 1x1 puro, sem ninguém ao lado, são 2 críticos + 1 tiro no corpo: 3 Sparks, explosão, e o dano total não garante abate em um alvo saudável.',
            'Nada disso funciona a 30m: o dano cai para 65% e a explosão de 4m pega o ar. Atire a menos de 10m.',
          ],
        },
        {
          title: 'Detonação sincronizada com agrupamento',
          steps: [
            'Segure Cosmic Flames de longe até o inimigo ter 1 Spark (nunca 2, senão você explode sozinho sem dano em área útil).',
            'No momento em que o segundo inimigo entra no raio de 4m, dispare o segundo tiro no primeiro alvo.',
            'A explosão causa 20 de área, aplica 1 Spark nos vizinhos e concede 5 de vida bônus por segundo durante 4s, até 25. É a razão de esperar o agrupamento em vez de atirar no primeiro que aparece.',
          ],
        },
        {
          title: 'Ultimate contra tank com vida bônus',
          steps: [
            'Espere o tanque ganhar vida bônus e entrar no centro do grupo; o impacto central tem 10m de raio.',
            'Escolha a área longe de você e dispare [key:Q]; a invulnerabilidade durante a seleção da zona não foi confirmada nesta revisão.',
            'Atingido: 150 no centro, 50 na onda, toda a vida bônus removida, invocação destruída. Isso abre a defesa do alvo, sem garantir que sua vida restante seja 250.',
          ],
        },
      ],
      mistakes: [
        'Espalhar tiro em vários inimigos. Não disperse tiros sem um alvo prioritário: a detonação causa 20 de dano em área, então procure sincronizá-la com inimigos próximos.',
        'Atirar de longe sem confirmar a queda de dano: a redução chega a 65% em 30m, conforme a página oficial.',
        'Marcar a Telekinesis Burst em frente ao inimigo. A área aparece antes do volume e a parede cancela as explosões restantes.',
        'Usar a Telepathic Illusion para entrar. A ilusão explode no ponto de origem: você deixa a explosão para trás e chega no inimigo sem nada.',
        'Gastar a ultimate só pelo dano. Com 150 e 50 ela não mata tank; ela existe para apagar escudo, invocação e vida bônus.',
        'Subir no Dark Ascent sem plano de pouso. A Phoenix é 250 de vida e voar é só reposicionamento: cada segundo pendurado é tempo dado ao Black Panther.',
      ],
      evidence: [
        'balance-20261009',
        'official-phoenix-page',
        'teamup-bundle',
        'fandom-phoenix',
        'wiki-phx',
        'batru-synergy-phx',
        'mobalytics-phx',
        'marvelrivalsgg-phx',
      ],
    },
  },
  sources: [
    {
      id: 'balance-20261009',
      kind: 'official',
      title: 'Version 20261009 Balance Post — Phoenix',
      url: 'https://www.marvelrivals.com/balancepost/20261006/41667_1315864.html',
      author: 'NetEase Games',
      published: '2026-10-06',
      confidence: 'alta',
      takeaways: [
        'Cosmic Flames: dano por tiro de 60 para 65; detonação: dano direto de 40 para 45 e dano de explosão de 15 para 20.',
        'A detonação remove a autocura e passa a conceder 5 de vida bônus por 4s, até 25.',
        'Quando Endsong Inferno acerta com o campo e a onda, Sparks aplicadas aumentam de 1 para 2.',
        'Circle of Life com Hela reduz a recarga da habilidade de 12s para 10s.',
      ],
    },
    {
      id: 'official-phoenix-page',
      kind: 'official',
      title: 'Phoenix — página oficial de habilidades',
      url: 'https://www.marvelrivals.com/20250710/41360_1246363.html',
      author: 'NetEase Games',
      published: '2025-07-10 (página; valores conferidos na revisão de 2026-10-31)',
      confidence: 'alta',
      takeaways: [
        'Phoenix: 250 de vida; Cosmic Flames causa 65, com falloff de 10m a 30m até 65%, intervalo de 0,435s; 1 Spark por acerto e 2 por crítico; detonação 45 + 20 em raio de 4m; concede 5 de vida bônus por segundo por 4s, até 25.',
        'A habilidade RMB base atual é Telekinesis Burst: três golpes de 20; o primeiro atordoa por 0,3s e os outros aplicam 30% de lentidão por 2s; volumes cilíndricos de 2m×4m e 3m×6m; recarga de 10s.',
        'Telepathic Illusion: alcance de 8m, 50 de dano em raio de 3m, 1 Spark, recarga de 12s. A página não indica invulnerabilidade.',
        'Dark Ascent: recarga de 1s, aumento de movimento de 50%, reserva de 1200, consumo de 400/s e regeneração de 120/s.',
        'Endsong Inferno: custo de 3100, impacto de 150 e onda de 50; quando campo e onda acertam o mesmo inimigo, aplicam 2 Sparks no total. Remove invocações, escudos e vida bônus; autocura listada de 250, sem janela especificada.',
        'Circle of Life: recarga 10s, dano de 15 no primeiro golpe e 20 nos dois seguintes, stun de 0,3s e Healing Reduction de 40% por 3s; com Hela, 2 Sparks por acerto.',
        'Telekinetic Beatdown: recarga 10s, 55 de dano direto e por ricochete, detecção em 8m, cura 50 e até 3 ricochetes; com Rogue, 2 Sparks por acerto, até 4 ricochetes e cura 65.',
      ],
    },
    {
      id: 'reddit-phoenix-snippet',
      kind: 'forum',
      title: 'Discussão Reddit: New to Phoenix. Looking for tips (snippet)',
      url: 'https://www.reddit.com/r/marvelrivals/comments/1qi1awx/new_to_phoenix_looking_for_tips',
      author: 'Usuários de r/marvelrivals (snippet de busca)',
      published: 'data não exibida no snippet',
      confidence: 'media',
      takeaways: [
        'Somente snippet de busca consultado, não leitura integral da discussão: recomenda Phoenix em poke-brawl de curta a média distância, lutando à frente com o time e aplicando Sparks rapidamente.',
      ],
    },
    {
      id: 'fandom-phoenix',
      kind: 'database',
      title: 'Phoenix — snapshot pré-10.5 da tabela de habilidades (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Phoenix',
      author: 'NetEase Games (dados do jogo) / wiki Fandom',
      published: '2026-10-05 (snapshot pré-10.5)',
      confidence: 'em disputa',
      takeaways: [
        'Snapshot Fandom de 05/10, anterior ao patch: Cosmic Flames ainda tinha 60 de dano por tiro; o patch elevou para 65. O perfil oficial atual mantém 1 Spark por acerto e 2 por crítico.',
        'O patch mudou a detonação de 40/15 para 45/20 e substituiu a autocura por Bonus Health; a página oficial atual especifica 5/s por 4s, até 25. Não use a mecânica do snapshot como atual.',
        'Endsong Inferno: antes do patch, quando campo e onda acertavam, aplicava 1 Spark; o patch elevou o total para 2. A página atual confirma 150 de impacto, 50 de onda, custo 3100 e remoção de invocações, escudos e vida bônus.',
        'Telekinesis Burst ([key:RMB]): 3 golpes de 20, primeira num cilindro de 2m de raio e 4m de altura com 0,3s de atordoamento, seguintes em 3m e 6m com 30% de lentidão por 2s, recarga de 10s, 1 Spark por explosão.',
        'Telepathic Illusion ([key:Shift]): teleporte de 8m com explosão de 50 em 3m de raio, 1 Spark e recarga de 12s. O snapshot Fandom atribuía invulnerabilidade, mas a página oficial atual não a lista; não trate isso como ativo confirmado.',
        'Dark Ascent ([key:E]): voo livre com 50% de aumento de movimento, recurso máximo de 1200, consumo de 400/s, recuperação de 120/s começando logo após o fim, recarga de 1s.',
        'O snapshot antigo associa à RMB os valores 15/20, stun de 0,3s e Healing Reduction de 40% por 3s; esses dados pertencem ao Circle of Life, não à habilidade base. A página oficial atual separa Telekinesis Burst de Circle of Life.',
        'Telekinetic Beatdown (Rogue): 55 de dano, detecção em 8m, até 3 golpes encadeados curando valor por golpe (snapshot pré-10.5) e 1 Spark; no aprimorado com a Rogue, 4 golpes, 65 de cura e 2 Sparks.',
        'A ficha ainda lista Primal Flame (Wolverine e Black Widow) como Team-Up do herói — é conteúdo de temporada anterior, não as duas opções atuais do bundle.',
      ],
    },
    {
      id: 'teamup-bundle',
      kind: 'official',
      title: 'Página oficial de Team-Up (bundle)',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      author: 'NetEase Games',
      published: '2026-10-09',
      confidence: 'alta',
      takeaways: [
        'A Phoenix aparece no bundle com enName "PHOENIX" e duas opções: pos0 CIRCLE OF LIFE e pos1 TELEKINETIC BEATDOWN.',
        'Circle of Life: Key_en "Right Click" — é a tecla RMB da Telekinesis Burst, habilidade que o Team-Up substitui, não um preenchimento de slot.',
        'Telekinetic Beatdown: Key_en "C" — preenchimento de slot de Team-Up.',
        'O bundle oficial conserva o nome legado no texto literal, embora a habilidade base atual se chame Telekinesis Burst. Texto-base do Circle of Life: "Psionic Detonation is replaced by Phoenix Netherfire, applying a Telekinetic Mark to the targeted location. Upon hitting, it triggers an initial small explosion that briefly Stuns enemies, followed by two larger explosions that apply a Healing Reduction effect. Every single blast inflicts Sparks onto the enemies."',
        'Aprimoramento do Circle of Life: "When teaming up with Hela, every blast in the sequence applies multiple stacks of Sparks to enemies caught within."',
        'Texto-base do Telekinetic Beatdown: "Fire a telekinetic shockwave forward. If it lands, the Phoenix Force rushes the enemy and delivers a powerful punch. If there are other targets nearby, the Phoenix Force rapidly blinks between them to strike them as well, inflicting Sparks on each victim while healing Phoenix."',
        'Aprimoramento do Telekinetic Beatdown: "When teaming up with Rogue, the width of the telekinetic shockwave expands, and the Phoenix Force\'s target detection range is increased."',
        'Os 4 PNGs dos dois Team-Ups já estavam no disco com magic bytes válidos; nenhuma reordenação entre as duas opções foi necessária.',
      ],
    },
    {
      id: 'wiki-phx',
      kind: 'database',
      title: 'Phoenix — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Phoenix',
      published: '2025-11-14',
      confidence: 'em disputa',
      takeaways: [
        'Snapshot da wiki.gg de 2025 lista role Duelist e vida 250; a página oficial atual também confirma 250.',
        'Snapshot wiki.gg de 2025 registra 1 Spark no corpo, 2 no crítico e 5s de duração; a página oficial atual não confirma duração e descreve Bonus Health, não autocura.',
        'Divergência histórica: a wiki lista 50 de dano no tiro e 12 de área; a página oficial atual lista 65 e 20. A antiga autocura não é o Bonus Health de 5/s vigente.',
        'Divergência: habilidade RMB com 20 de dano por explosão e recarga de 10s — bate com a oficial, mas a wiki não traz os cilindros de 2m/4m e 3m/6m nem o atordoamento de 0,3s.',
        'Snapshot antigo: Endsong Inferno aparece com 140 de impacto; a página oficial atual lista 150 e 50 de onda. Não usar o valor antigo como vigente.',
        'A página lista Mind\'s Grace (Wolverine e Black Widow) como Team-Up e está defasada desde novembro de 2025.',
        'Histórico relevante: o ataque melee aplicava 1 Spark e o Dark Ascent repunha munição; o time removeu os dois para acabar com o combo tiro-melee-voo de burst altíssimo.',
      ],
    },
    {
      id: 'batru-synergy-phx',
      kind: 'database',
      title: 'Phoenix — Synergy (Season 10) no Batru',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/phoenix',
      published: '2026-10-09',
      confidence: 'alta',
      takeaways: [
        'Snapshot histórico pré-10.5: win rate individual de 42,13% com 8,81% de taxa de escolha em 64.048 partidas.',
        'Circle of Life com Hela: 47,06% de win rate da dupla em 6.775 partidas (+4,9 pp sobre o individual).',
        'Telekinetic Beatdown com Rogue: 49,43% de win rate da dupla em 5.345 partidas (+7,3 pp).',
        'Melhores parceiros: Peni Parker (53,47%), Ultron (51,70%) e Devil Dinosaur (50,64%) — três frontliners que criam a janela de agrupamento.',
        'Piores parceiros: Squirrel Girl (30,48%), Hawkeye (32,00%) e Doctor Strange (32,15%, em 20.002 partidas) — snapshot pré-patch do Batru, não uma previsão atual.',
        'A página afirma explicitamente que o efeito base funciona sozinho e o aprimorado só liga com o parceiro presente.',
      ],
    },
    {
      id: 'mobalytics-phx',
      kind: 'guide',
      title: 'Marvel Rivals Phoenix Guide — Mobalytics',
      url: 'https://mobalytics.gg/marvel-rivals/phoenix-guide',
      published: '2026-09-14',
      confidence: 'media',
      takeaways: [
        'Snapshot pré-10.5: prioriza acerto de crítico para aplicar 2 Sparks e acelerar a explosão — a mesma leitura de pilha da tabela oficial.',
        'Snapshot pré-10.5 do guia: relata que as explosões não atravessam parede. Esse detalhe tático não foi confirmado pela página oficial atual.',
        'A Phoenix pode marcar a área em qualquer ponto dentro da linha de visão e as explosões não sofrem queda de dano, o que a torna boa de poke a longa distância.',
        'A Endsong Inferno destrói barreiras, muros do Groot, torretas e todas as invocações do inimigo, e o dano é calculado depois da remoção da vida bônus.',
        'Aguenta um disparo de Luna em modo ultimate por causa da remoção de vida bônus, o que confirma a leitura de que a ultimate serve para remover defesa, não para tirar dano.',
        'Números de dano e distância do guia divergem da página oficial; não são usados como valores atuais.',
      ],
    },
    {
      id: 'marvelrivalsgg-phx',
      kind: 'guide',
      title: 'Phoenix (Jean Grey) Guide — Marvel Rivals GG',
      url: 'https://marvelrivals.gg/phoenix-guide/',
      published: '2026-09-02',
      confidence: 'media',
      takeaways: [
        'Confirma as teclas: Cosmic Flames (LMB), Endsong Inferno (Q), Telepathic Illusion (Shift), Dark Ascent (E), Telekinesis Burst (RMB), Team-Up (C).',
        'Descreve a diferença da Phoenix: a explosão é dano em área de verdade só contra inimigo agrupado, ao contrário do Moon Knight, que propaga disparo.',
        'Explica a interação da ultimate com a Fênix em voo por 20s a alta velocidade e que quanto mais inimigos e utilidade na área, mais devastadora ela fica.',
        'A página ainda descreve o Team-Up Primal Flame com o Wolverine (10% de aumento de dano e Feral Leap com queimadura) — temporada anterior, divergência registrada.',
      ],
    },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 3, status: 'Página atual de habilidades e Team-Ups, balance post e bundle vivo; a página fornece números que o texto do bundle não detalha' },
    { kind: 'database', label: 'Wiki e base de dados', count: 3, status: 'Fandom e wiki.gg são snapshots de habilidades pré-10.5; Batru traz métricas históricas pré-patch, não recomendação atual' },
    { kind: 'guide', label: 'Guias escritos', count: 2, status: 'Guias pré-patch: táticas conservadas apenas quando não dependem de número; coaching atualizado pós-10.5 pendente' },
    { kind: 'forum', label: 'Fórum e comunidade', count: 1, status: 'um snippet de busca, sem leitura integral e sem data exibida' },
    { kind: 'video-transcript', label: 'Vídeo e transcrição', count: 0, status: 'pendente: nenhum vídeo com transcrição auditável localizado nesta sessão' },
  ],
}
