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
  lastVerified: '2026-10-05',
  confidenceSummary:
    'Vida (275) e estrutura de habilidade vieram da wiki.gg e da página oficial de habilidades; os números de dano, queda de dano, raio de explosão e recarga vieram da tabela oficial reproduzida na wiki do Fandom em 05/10/2026, que é a fonte mais atual entre as três. Duas divergências reais ficaram registradas: a wiki.gg lista 50 de dano por tiro, 12 de dano de área na explosão e 10 de vida por segundo na cura, contra 60, 15 e 5 por segundo na tabela oficial — a da Fandom foi mantida por ser a mais recente e por trazer a queda de dano (início em 10m, 65% em 30m) que as outras duas omitem; a wiki.gg também descreve a Psionic Detonation como 3 explosões de 20, enquanto a tabela oficial detalha o primeiro cilindro com raio de 2m e 4m de altura e os seguintes com 3m e 6m. Os textos dos dois Team-Ups, as teclas e os números de Circle of Life e Telekinetic Beatdown vieram do bundle oficial teamup_a35bb0a0.js, não da ficha do herói, que ainda lista a Primal Flame com Wolverine e Black Widow. Win rate individual e das duas duplas vieram do Batru na Temporada 10, com dados atualizados em 05/10/2026. Não foi localizado balance post da temporada que tocasse a Phoenix, então nenhum número foi atribuído a um patch específico: as fontes que discordam entre si estão em em disputa acima. A página de habilidades do site oficial não foi lida nesta sessão, e isso está declarado como pendência no sourceCoverage.',
  coreRead: [
    'A Phoenix não é uma atiradora de DPS: ela é uma carimbadora de pilha. Quem monta 3 Sparks Explode e cura; quem espalha tiro perde o herói inteiro.',
    'Headshot vale 2 Sparks. Com 1 Spark por acerto, o acerto na cabeça dobra a pilha e a explosão chega na metade do tempo.',
    'A cura das explosões não acumula, só o tempo: cada explosão estica a duração em vez de somar vida. Ela nunca substitui cleanse.',
    'Endsong Inferno não causa dano, ela remove tudo que segura o inimigo vivo: barreiras, escudos, invocações e toda a vida bônus. Use para matar o tank, não para tirar vida.',
    'Dark Ascent é a recarga real do kit: o voo é reposicionamento puro e exige 50% de energia no mínimo para ser ligado.',
  ],
  teamUps: {
    summary:
      'Telekinetic Beatdown (com Rogue) é o pick no geral: 49,43% de win rate da dupla contra 47,06% do Circle of Life na medição da Temporada 10 do Batru, e o efeito base já é uma entrada com cura — 55 de dano, até 3 alvos encadeados e 50 de vida restaurada por golpe, o que dá sustain de verdade numa duelista de 275 de vida. Circle of Life (com Hela) é a opção de controle e anti-sustain: a Psionic Detonation vira Phoenix Netherfire, que troca as duas lentidases por redução de cura de 40% por 3s — a resposta direta para a Capitão América, o Venom e o Adam Warlock. Escolha pelo problema que o time tem, não pelo número: se o inimigo está se curando, é Circle of Life; se o time está sem sustain, é Beatdown.',
    recommended: 'Telekinetic Beatdown',
    recommendedReason:
      'Duas medições apontam na mesma direção. O Batru dá 49,43% de win rate da dupla em 5.345 partidas do Telekinetic Beatdown contra 47,06% em 6.775 do Circle of Life, e a diferença faz sentido mecanicamente: o Beatdown é a única das duas opções que devolve vida para a Phoenix (50 por golpe no efeito base, 65 no aprimorado com a Rogue), enquanto o Circle of Life não cura ninguém — ele corta a cura do outro. A Rogue é a parceira com melhor desempenho medido contra a Phoenix entre as duas opções (49,43%, +7,3 pp na tabela geral de parceiros), então o aprimorado está ao alcance com frequência: onda mais larga, mais alcance de detecção, 4 golpes em vez de 3 e 65 de cura por golpe. A ressalva de sempre vale: parte desses 2,4 pontos é força individual da Rogue, e a dupla carrega a win rate dela. Divergência real: contra composição com sustain pesado (Adam Warlock, Mantis, Venom, Capitão América com a bandeira) o Circle of Life é a escolha melhor, porque 40% de redução de cura vale mais que qualquer quantidade de auto-cura.',
    options: [
      {
        name: 'Telekinetic Beatdown',
        partner: 'Rogue',
        partnerRole: 'Duelist',
        input: 'C',
        baseEffect:
          'Dispara uma onda de choque telecinética para frente. Se acertar, a Fênix avança no inimigo e aplica um soco forte. Se houver outros alvos por perto, a Fênix pisca entre eles para acertar também, aplicando Sparks em cada vítima e curando a Phoenix.',
        enhancedEffect:
          'Ao formar dupla com Rogue, a largura da onda de choque telecinética aumenta e o alcance de detecção de alvos da Fênix é ampliado.',
        bestFor:
          'Duelar flanker em 1x1 e entrar para matar. Com detecção de 8m, o acerto inicial não precisa acertar: basta acertar o primeiro alvo e a corrente pega quem estiver ao lado, curando 50 por golpe (até 3 golpes). No aprimorado vira onda mais larga, 4 alvos e 65 de cura por golpe. É a rota de entrada e de sustain do kit, e vale mesmo sem a Rogue — mas com a Rogue ele entrega o número completo.',
        easySetup:
          'Rogue no time, e vale montar com quem tem sustain próprio (Adam Warlock, Luna Snow) porque a Phoenix passa a ser quem dá sustain em grupo. Sem a dupla, o soco único, os 3 alvos e a cura de 50 continuam funcionando.',
        iconUrl: publicAsset('teamups/phoenix-telekinetic-beatdown-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/phoenix-telekinetic-beatdown-partner.png'),
      },
      {
        name: 'Circle of Life',
        partner: 'Hela',
        partnerRole: 'Duelist',
        input: 'RMB',
        baseEffect:
          'A Psionic Detonation é substituída pela Phoenix Netherfire, que aplica uma Telekinetic Mark no local mirado. Ao acertar, dispara uma explosão pequena que atordoa brevemente, seguida de duas explosões maiores que aplicam redução de cura. Cada explosão aplica Sparks nos inimigos.',
        enhancedEffect:
          'Ao formar dupla com Hela, cada explosão da sequência aplica múltiplas pilhas de Sparks nos inimigos atingidos.',
        bestFor:
          'Neutralizar sustain: 40% de redução de cura por 3s é a resposta para Capitão América, Venom, Adam Warlock, Mantis e qualquer aliado de linha de trás com cura alta. A tecla é [key:RMB] porque a habilidade substitui a Psionic Detonation. Com a Hela, cada uma das 3 explosões aplica 2 Sparks em vez de 1 — a janela para detonar explode com a Telekinetic Beatdown. Contra time sem cura nenhuma, essa redução é desperdício: escolha o Beatdown.',
        easySetup:
          'Hela no time. Sem a dupla, as 3 explosões (15 na primeira, 20 nas seguintes), o atordoamento de 0,3s e a redução de cura de 40% por 3s continuam valendo, cada uma com 1 Spark.',
        iconUrl: publicAsset('teamups/phoenix-circle-of-life-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/phoenix-circle-of-life-partner.png'),
      },
    ],
    sourceIds: ['teamup-bundle', 'fandom-phoenix', 'batru-synergy-phx'],
  },
  systems: [
    {
      name: 'Sparks',
      input: 'LMB',
      heading: 'A pilha de 3 que governa o herói inteiro',
      facts: [
        'Cosmic Flames é hitscan: 60 de dano por tiro, intervalo de 0,435s, e queda de dano começando em 10m até 65% em 30m. Passar de 20m de distância não é só perder dano: é perder tempo até a explosão sair.',
        'Cada acerto no corpo aplica 1 Spark e cada crítico aplica 2. Com 3 Sparks a explosão é acionada: 40 de dano no alvo, 15 de área em 4m de raio, 5 de vida por segundo de cura por 4s para a Phoenix, e mais 1 Spark nos inimigos pegados no raio.',
        'Headshot não é estilo, é economia: 2 Sparks por crítico encurta o ciclo de explosão pela metade. Contra alvo de 275 de vida, dois críticos e um tiro no corpo já matam — é a rota mais barata de eliminação da Phoenix.',
        'A cura das explosões NÃO acumula em vida: cada explosão renova apenas a duração do efeito. Você nunca passa de 5 por segundo por explosão, e por isso a Phoenix não dispensa um sustain externo.',
        'Os Sparks da explosão não empilham entre si por um curto período. É por isso que atirar em grupo não gera explosão em cascata: o valor real dela é a área, não a reação em cadeia entre inimigos.',
        'A Spark dura 5s. Inimigo que sai do seu campo de visão ou entra atrás de um muro perde a pilha inteira — a Phoenix precisa de linha de tiro contínua, e por isso é forte em choke point e fraca em aberto.',
        'O ponto fraco declarado: sem Psionic Detonation pronta, a Phoenix é 275 de vida com um tiro de 60. A recarga de 10s da Psionic Detonation é o relógio do herói tanto quanto a pilha de 3 Sparks.',
      ],
      meter: [
        { label: 'Tiro no corpo', value: '60 + 1 Spark' },
        { label: 'Crítico', value: '100 + 2 Sparks' },
        { label: 'Explosão (alvo / área)', value: '40 / 15 em 4m' },
        { label: 'Cura por explosão', value: '5/s por 4s' },
        { label: 'Queda de dano', value: '10m a 65% em 30m' },
      ],
    },
    {
      name: 'Controle e deslocamento',
      input: 'RMB',
      heading: 'Psionic Detonation, Telepathic Illusion e Dark Ascent',
      facts: [
        'Psionic Detonation ([key:RMB]) marca uma área à distância dentro da sua linha de visão e dispara 3 explosões de 20: a primeira atordoa por 0,3s num cilindro de 2m de raio e 4m de altura, as duas seguintes aplicam 30% de lentidão por 2s num cilindro de 3m e 6m. Recarga de 10s. Só a primeira explode: atordoa.',
        'As explosões da Psionic Detonation não sofrem queda de dano e não atravessam parede — a área é marcada antes do volume aparecer, então uma parede entre você e o ponto cancela as explosões restantes. Marcar o canto errado custa a recarga inteira.',
        'Cada explosão da Psionic Detonation aplica 1 Spark. Como a explosão do [key:LMB] aplica 1 Spark num raio de 4m, marcar o inimigo com [key:RMB] e atirar no corpo completa 3 Sparks quase sem esforço: esse é o combo de burst mais estável do kit.',
        'Telepathic Illusion ([key:Shift]) deixa uma ilusão que detona com 50 de dano em 3m, aplica 1 Spark e teleporta a Phoenix 8m na direção do movimento com invulnerabilidade durante o trajeto — a mesma janela do Stellar Shift do Star-Lord. Recarga de 12s.',
        'A ilusão explode no ponto de origem, não no de destino. Usar a ilusão para fugir e atirar é o roteiro correto; usar para perseguir inverte a ordem e você explode longe de onde está o inimigo.',
        'Dark Ascent ([key:E]) é voo livre com 50% de aumento de movimento, e custa 400 de energia por segundo de um pool de 1200 que regenera 120/s começando logo depois de desligar. Exige ao menos 50% de energia para ligar. Isso dá 3s de voo por carga cheia.',
        'Dark Ascent devolvia munição automaticamente antes de um ajuste do time; hoje o voo é reposicionamento puro. Se você precisa de dano, o voo é desperdício — se você precisa sair de um choke, é a melhor habilidade do kit.',
      ],
      meter: [
        { label: 'Psionic Detonation', value: '3x20, 10s' },
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
      label: 'Duelist',
      nickname: 'A duelista que transforma pilha em área',
      health: '275',
      difficulty:
        'Mira e gestiono de pilha: Cosmic Flames cai para 65% do dano a partir de 30m, a Spark dura só 5s e a Psionic Detonation é cancelada por parede. Errou o alvo três vezes seguidas e a Phoenix fica sem explosão, sem cura e com 275 de vida.',
      job: 'Transformar alvo isolado em explosão em área, tirar de cena barreira, escudo, invocação e vida bônus, e dar sustain de grupo sem depender de nenhum curandeiro.',
      verdict:
        'Phoenix é um Duelist de win rate baixo e teto alto: 42,13% de win rate com 8,81% de taxa de escolha em 64.048 partidas na Temporada 10 do Batru. Ela não ganha jogo sozinha, ganha quando o inimigo agrupa: a explosão de 4m com 1 Spark extra é o único dano em área do kit, e ele depende de o inimigo estar perto de outro inimigo. Em campo aberto e em 1x1 ela é uma duelista de 275 de vida disparando tiro de 60 — e só isso. O valor dela aparece no momento em que alguém protege o companheiro de equipe, e nesse momento ela é a melhor eliminação em área da partida.',
      playstyle: [
        'Antes de atirar, decida o alvo. Você não está tentando matar ninguém com Cosmic Flames: está tentando fechar 3 Sparks em alguém que tem companhia ao lado.',
        'Priorize crítico até o terceiro Spark e solte. Dois críticos e um tiro no corpo matam um herói de 275 de vida e curam você por 4s no meio da troca.',
        'Nunca atire de 30m para a explosão cair. Da linha de 10m você explode antes de ele reposicionar; da linha de 30m ele sai do 4m antes da explosão.',
        '[key:RMB] no grupo antes de atirar: as 3 explosões aplicam 1 Spark cada e a primeira atordoa. O atordoamento de 0,3s é o que transforma um tiro solto em eliminação.',
        'Use [key:Shift] para sair de troca ruim, nunca para entrar. A invulnerabilidade do teleporte é curta e a ilusão explode onde você saiu, não onde você está.',
      ],
      priorityKicker: 'Ordem de upgrade',
      priorityTitle: 'Psionic Detonation antes de Cosmic Flames',
      priorityDescription:
        'A Psionic Detonation é a habilidade que converte tiro em controle: 3 explosões de 20, 1 Spark cada, 0,3s de atordoamento na primeira e 30% de lentidão nas outras duas. É ela que fecha 3 Sparks sem depender de acerto e é a base de todo o plano de upgrade.',
      abilityLoop: [
        { ability: 'Cosmic Flames', input: 'LMB' },
        { ability: 'Psionic Detonation', input: 'RMB' },
        { ability: 'Telepathic Illusion', input: 'Shift' },
        { ability: 'Dark Ascent', input: 'E' },
        { ability: 'Endsong Inferno', input: 'Q' },
      ],
      upgradePlan: [
        {
          rank: 1,
          spellNumber: 1,
          input: 'RMB',
          ability: 'Psionic Detonation',
          label: 'A habilidade que fecha 3 Sparks sem depender da sua mira',
          baseEffect:
            'Marca uma área dentro da linha de visão e detona 3 explosões de 20 de dano cada. A primeira atordoa por 0,3s num cilindro de 2m de raio e 4m de altura; as duas seguintes aplicam 30% de lentidão por 2s num cilindro de 3m de raio e 6m de altura. Cada explosão aplica 1 Spark. Recarga de 10s.',
          upgradeEffect:
            'Com o aprimorado, o raio, a duração do controle e a janela de detonação crescem, o que faz o volume alcançar mais de um inimigo ao mesmo tempo — é a diferença entre atordoar um e segurar dois.',
          fightNote:
            'Marque no chão, não no inimigo. A área aparece antes do volume: marcar em frente de um tanque que dá um passo para o lado faz as 3 explosões errarem e a recarga de 10s vai embora sem nada.',
          why: 'São 3 Sparks garantidos em quem está dentro do volume, mais 0,3s de atordoamento, e nenhum outro item do kit entrega controle. É o que permite trocar tiro por eliminação.',
          swapWhen:
            'Pule a Psionic Detonation quando o alvo já está com 2 Sparks seus: aí o [key:LMB] sozinho fecha a explosão em menos de um segundo, e os 10s da recarga ficam para o próximo.',
          sourceIds: ['fandom-phoenix', 'wiki-phx', 'mobalytics-phx'],
        },
        {
          rank: 2,
          spellNumber: 2,
          input: 'LMB',
          ability: 'Cosmic Flames',
          label: 'O headshot que encurta a pilha pela metade',
          baseEffect:
            'Dispara projétil de fogo hitscan a frente: 60 de dano por tiro, 1 Spark no corpo e 2 em crítico, intervalo de 0,435s, queda de dano começando em 10m até 65% em 30m. Com 3 Sparks a explosão causa 40 no alvo, 15 de área em 4m, aplica 1 Spark nos inimigos ao redor e cura 5 de vida por segundo por 4s.',
          upgradeEffect:
            'Com o aprimorado, o dano do tiro e a força da explosão sobem, o que encurta o número de acertos necessários para fechar 3 Sparks no mesmo alvo.',
          fightNote:
            'Segure o crítico até o terceiro Spark. Bater 2 Sparks com dois críticos e fechar com um tiro no corpo leva metade do tempo — e explode no meio do grupo, onde a área de 4m faz serviço.',
          why: 'É de onde vem todo o dano e toda a cura do kit, e o crítico de 2 Sparks é o único jeito de acelerar o relógio sem gastar a Psionic Detonation.',
          swapWhen: 'Troque a mira pelo [key:RMB] quando o alvo estiver a menos de 10m: a 60 de dano por tiro e 65% de queda, o volume controlado entrega mais dano por recurso.',
          sourceIds: ['fandom-phoenix', 'wiki-phx', 'mobalytics-phx'],
        },
        {
          rank: 3,
          spellNumber: 3,
          input: 'Q',
          ability: 'Endsong Inferno',
          label: 'A ultimate que apaga o tank em vez de tirar vida',
          baseEffect:
            'Sobe aos céus e mergulha na área escolhida: 150 de dano no impacto central num raio de 10m e 50 na onda de choque. A onda destrói invocações, barreiras e escudos inimigos e remove toda a vida bônus. Impacto e onda aplicam 1 Spark. Custo de 3100 de energia, voo de até 20s.',
          upgradeEffect:
            'Com o aprimorado, o raio e o dano da queda sobem, o que faz a área alcançar o tank fora do centro do grupo em vez de exigir que ele esteja em cima.',
          fightNote:
            'A Phoenix é invulnerável enquanto escolhe a zona e vulnerável durante a própria descida. Aqueça os tiros no caminho e nunca escolha a área colada em você: o que mata é o tempo de voo, não o impacto.',
          why: 'É a única forma do kit de remover 500 de vida de invocação, escudo de barreira e vida bônus de uma vez. Contra Venom, Adam Warlock, Capitão América e Rocket ela converte um inimigo de 500+ de vida efetiva em um inimigo de 275.',
          swapWhen: 'Gaste a ultimate com o time agrupado em choke point e não em campo aberto: o raio de 10m da queda e a onda de 50 só compensam quando há mais de um inimigo dentro.',
          sourceIds: ['fandom-phoenix', 'mobalytics-phx', 'marvelrivalsgg-phx'],
        },
      ],
      adaptations: [
        'Inimigos com vida bônus e escudo (Venom, Adam Warlock, Capitão América, a ult da Storm, Doctor Strange com o escudo de barreira): Endsong Inferno não é ultimate de dano aqui, é remoção de defesa. Use antes que o inimigo entre em sustain.',
        'Composição com cura pesada (Adam Warlock, Luna Snow, Mantis, Capitão América com a flag): a Phoenix sem anti-sustain perde a troca. Com Hela, o Circle of Life troca a lentidão por 40% de redução de cura por 3s e é a resposta direta.',
        'Voadores e alvo muito móvel (Human Torch, Iron Man, Storm, Aero, Spider-Man): a Spark dura 5s e o alvo voador não acumula pilha parado. Use a Psionic Detonation com 0,3s de atordoamento para travar o voo antes de atirar.',
        'Alvo escondido atrás de tanque (Doutor Estranho com escudo, Invisible Woman, Groot com parede): Cosmic Flames é hitscan e atravessa, mas a explosão de 4m não atravessa o muro do Groot. Um muro entre você e o alvo custa a explosão inteira.',
        'Mapa aberto e centro de ponto largo: a Phoenix perde o teto sem agrupamento. Nesses mapas ela vira poking de 60 por tiro com queda a partir de 10m, e vale trocar por um Duelist de alcance que não dependa de pilha.',
      ],
      ultimates: [
        {
          stance: 'Ultimate como remoção de defesa',
          name: 'Endsong Inferno',
          bestUse:
            'Contra herói que só morre com a vida bônus intacta: 150 no impacto central em 10m, 50 na onda, e a onda derruba invocação, barreira e escudo e zera toda a vida bônus do inimigo pego.',
          execution:
            'Espere o inimigo entrar no centro de um choke com o time dele junto. Escolha a área longe de você, voe e atire nos adversários durante o voo para já fechar 1 Spark no impacto. A queda começa devagar e acelera: quem está no centro do raio leva os 140 de queda antes de sair.',
          upgradeValue:
            'Com o aprimorado, o raio da queda cresce, e é isso que importa: sem o upgrade, o tank precisa estar exatamente dentro dos 10m, e o centro do grupo costuma estar a 15m.',
        },
        {
          stance: 'Ultimate como finalização de grupo',
          name: 'Endsong Inferno',
          bestUse:
            'Quando 3 ou mais inimigos estão no mesmo raio de 10m e já estão com Spark seu: o impacto e a onda aplicam 1 Spark cada, e com 2 Sparks no alvo a explosão do Cosmic Flames fecha 3 Sparks dentro do próprio chão da ultimate.',
          execution:
            'Segure a Phoenix em 1 Spark e dispare a ultimate em cima do grupo. A queda de 150 mais a onda de 50 já matam o alvo frágil, e a explosão resultante cura 5 por segundo por 4s cobrindo a sua exposição.',
          upgradeValue:
            'O aprimorado amplia o raio, o que transforma a ultimate de "finalizo um" em "finalizo o grupo" — que é a condição em que a Phoenix realmente ganha jogo.',
        },
      ],
      dashGuide: {
        ability: 'Dark Ascent',
        shortRule:
          'Voo livre de 8 segundos de recurso com 50% de aumento de movimento. Reposicionamento vertical e fuga de choke, nunca entrada agressiva.',
        mechanics: [
          'O voo custa 400 de energia por segundo de um pool de 1200 que regenera 120/s logo após desligar: são cerca de 3s de voo limpo por carga cheia, e ele exige ao menos 50% de energia para ligar.',
          'Dark Ascent não repõe mais munição desde o ajuste do time. O voo atual é posição pura: é a ferramenta de recuperação de briga perdida, não uma forma de manter o DPS.',
          'Telepathic Illusion é o teleporte curto: 8m, 12s de recarga, 50 de dano e 1 Spark da ilusão que fica no ponto de origem. A invulnerabilidade do trajeto é a mesma janela do Stellar Shift do Star-Lord, e por isso ela é a resposta real para um ultimate de área.',
          'Voo + ilusão na mesma sequência é o combo de reposicionamento mais longo do kit: sai da linha de tiro, atravessa 8m instantâneos e recupera 3s de voo para voltar. É assim que se sai vivo de um choke com 275 de vida.',
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
            '[key:RMB] no pé do alvo → as 3 explosões aplicam 3 Sparks → o alvo explode com 40 de dano e 15 de área → [key:LMB] com crítico (2 Sparks) completa a pilha em quem está do lado.',
            'Em 1x1 puro, sem ninguém ao lado, são 2 críticos + 1 tiro no corpo: 3 Sparks, explosão, e o alvo de 275 de vida morre dentro do ciclo.',
            'Nada disso funciona a 30m: o dano cai para 65% e a explosão de 4m pega o ar. Atire a menos de 10m.',
          ],
        },
        {
          title: 'Explosão em cascata controlada em grupo',
          steps: [
            'Segure Cosmic Flames de longe até o inimigo ter 1 Spark (nunca 2, senão você explode sozinho sem dano em área útil).',
            'No momento em que o segundo inimigo entra no raio de 4m, dispare o segundo tiro no primeiro alvo.',
            'A explosão causa 15 de área, aplica 1 Spark nos vizinhos e cura 5 por segundo por 4s. É a razão de esperar o agrupamento em vez de atirar no primeiro que aparece.',
          ],
        },
        {
          title: 'Ultimate contra tank com vida bônus',
          steps: [
            'Espere o tanque ganhar vida bônus e entrar no centro do grupo; o impacto central tem 10m de raio.',
            'Escolha a área longe de você e dispare [key:Q]; a Phoenix fica invulnerável enquanto escolhe a zona.',
            'Atingido: 150 no centro, 50 na onda, toda a vida bônus removida, invocação destruída. O que antes era um alvo de 500+ vira 275 em uma passagem.',
          ],
        },
      ],
      mistakes: [
        'Espalhar tiro em vários inimigos. A explosão só vale 15 de área; o valor dela vem de escolher quem recebe o terceiro Spark.',
        'Atirar de longe e esperar a explosão sozinha. A Spark dura 5s e o dano cai a 65% em 30m: a pilha se perde antes de fechar.',
        'Marcar a Psionic Detonation em frente ao inimigo. A área aparece antes do volume e a parede cancela as explosões restantes.',
        'Usar a Telepathic Illusion para entrar. A ilusão explode no ponto de origem: você deixa a explosão para trás e chega no inimigo sem nada.',
        'Gastar a ultimate só pelo dano. Com 150 e 50 ela não mata tank; ela existe para apagar escudo, invocação e vida bônus.',
        'Subir no Dark Ascent sem plano de pouso. A Phoenix é 275 de vida e voar é só reposicionamento: cada segundo pendurado é tempo dado ao Black Panther.',
      ],
      evidence: [
        'Vida 275, role Duelist, mecânica de Spark (1 por acerto, 2 por crítico, 3 para explodir, 5s de duração) e 35 de dano no ataque melee: Marvel Rivals Wiki (wiki.gg), página da Phoenix.',
        'Dano de 60 por tiro, queda começando em 10m até 65% em 30m, intervalo de 0,435s, explosão de 40 no alvo e 15 de área em 4m, cura de 5 por segundo por 4s, Psionic Detonation com 3 explosões de 20, atordoamento de 0,3s e 30% de lentidão por 2s, Telepathic Illusion com 8m e 50 de dano, Dark Ascent com pool de 1200 a 400/s e 50% de aumento, e Endsong Inferno com 150 de impacto em 10m, 50 de onda e custo de 3100: tabela oficial de habilidades reproduzida na wiki do Fandom, lida em 05/10/2026.',
        'Circle of Life (Hela, [key:RMB], 3 explosões de 15 e 20, 0,3s de atordoamento, 40% de redução de cura por 3s) e Telekinetic Beatdown (Rogue, [key:C], 55 de dano, 3 golpes, 8m de detecção, 50 de cura por golpe, 4 golpes e 65 de cura no aprimorado): bundle oficial teamup_a35bb0a0.js.',
        'Perda de 50 de dano por tiro, 12 de área e 10 de vida por segundo na cura: wiki.gg, divergência registrada em relação à tabela oficial.',
        'Win rate individual de 42,13% com 8,81% de taxa de escolha em 64.048 partidas; Circle of Life com Hela a 47,06% em 6.775; Telekinetic Beatdown com Rogue a 49,43% em 5.345; melhores parceiros Peni Parker (53,47%), Ultron (51,70%) e Devil Dinosaur (50,64%); piores Squirrel Girl (30,48%), Hawkeye (32,00%) e Doctor Strange (32,15%): Batru, Temporada 10, dados de 05/10/2026.',
        'Controle de tela contra roubo de vida bônus, escudo e invocação com a Endsong Inferno, e bloqueio por parede da Psionic Detonation: Mobalytics e MarvelRivals.gg (guias escritos, usados como fonte de decisão e não de número).',
      ],
    },
  },
  sources: [
    {
      id: 'fandom-phoenix',
      kind: 'official',
      title: 'Phoenix — tabela oficial de habilidades (Fandom, renderizada a partir dos dados do jogo)',
      url: 'https://marvelrivals.fandom.com/wiki/Phoenix',
      author: 'NetEase Games (dados do jogo) / wiki Fandom',
      published: '2026-10-05',
      confidence: 'alta',
      takeaways: [
        'Cosmic Flames ([key:LMB]): hitscan, 60 de dano por rodada, queda começando em 10m até 65% em 30m, intervalo de 0,435s, 1 Spark por acerto e 2 em crítico.',
        'Explosão de 3 Sparks: 40 de dano no alvo, 15 de área, raio de 4m, cura de 5 por segundo por 4s, 1 Spark nos inimigos do raio; Sparks de explosão não empilham entre si por um curto período.',
        'Endsong Inferno ([key:Q]): 150 de dano no impacto central num raio de 10m, 50 na onda de choque, invocação com 500 de vida, voo de até 20s, custo de 3100 de energia, 1 Spark no atingido, remoção de invocações, barreiras, escudos e toda a vida bônus, e cura completa ao voltar.',
        'Psionic Detonation ([key:RMB]): 3 explosões de 20, primeira num cilindro de 2m de raio e 4m de altura com 0,3s de atordoamento, seguintes em 3m e 6m com 30% de lentidão por 2s, recarga de 10s, 1 Spark por explosão.',
        'Telepathic Illusion ([key:Shift]): teleporte de 8m com explosão de 50 em 3m de raio, 1 Spark, recarga de 12s e invulnerabilidade durante o teleporte.',
        'Dark Ascent ([key:E]): voo livre com 50% de aumento de movimento, recurso máximo de 1200, consumo de 400/s, recuperação de 120/s começando logo após o fim, recarga de 1s.',
        'Circle of Life (Hela): substitui a Psionic Detonation, 3 explosões de 15 e 20, 0,3s de atordoamento, 40% de redução de cura por 3s, 1 Spark por explosão; no aprimorado com a Hela, 2 Sparks por explosão.',
        'Telekinetic Beatdown (Rogue): 55 de dano, detecção em 8m, até 3 golpes encadeados curando 50 por golpe e 1 Spark; no aprimorado com a Rogue, 4 golpes, 65 de cura e 2 Sparks.',
        'A ficha ainda lista Primal Flame (Wolverine e Black Widow) como Team-Up do herói — é conteúdo de temporada anterior, não as duas opções atuais do bundle.',
      ],
    },
    {
      id: 'teamup-bundle',
      kind: 'official',
      title: 'Página oficial de Team-Up (bundle teamup_a35bb0a0.js)',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      author: 'NetEase Games',
      published: '2026-10-05',
      confidence: 'alta',
      takeaways: [
        'A Phoenix aparece no bundle com enName "PHOENIX" e duas opções: pos0 CIRCLE OF LIFE e pos1 TELEKINETIC BEATDOWN.',
        'Circle of Life: Key_en "Right Click" — é a tecla da Psionic Detonation que a habilidade substitui, não um preenchimento de slot.',
        'Telekinetic Beatdown: Key_en "C" — preenchimento de slot de Team-Up.',
        'Texto-base do Circle of Life: "Psionic Detonation is replaced by Phoenix Netherfire, applying a Telekinetic Mark to the targeted location. Upon hitting, it triggers an initial small explosion that briefly Stuns enemies, followed by two larger explosions that apply a Healing Reduction effect. Every single blast inflicts Sparks onto the enemies."',
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
        'Role Duelist e vida 275 — confirmado pela tabela oficial do Fandom.',
        'Mecânica de Spark: 1 no corpo, 2 no crítico, explosão ao chegar a 3, 1 Spark extra nos inimigos próximos, cura ao explodir e Spark com 5s de duração.',
        'Divergência: 50 de dano no tiro (contra 60 da tabela oficial), 12 de dano de área na explosão (contra 15) e 10 de vida por segundo na cura (contra 5).',
        'Divergência: Psionic Detonation com 20 de dano por explosão e recarga de 10s — bate com a oficial, mas a wiki não traz os cilindros de 2m/4m e 3m/6m nem o atordoamento de 0,3s.',
        'Divergência: Endsong Inferno com 140 de impacto e 50 de onda (contra 150 e 50) e janela de escolha de 6s antes do voo de 20s.',
        'A página lista Mind\'s Grace (Wolverine e Black Widow) como Team-Up e está defasada desde novembro de 2025.',
        'Histórico relevante: o ataque melee aplicava 1 Spark e o Dark Ascent repunha munição; o time removeu os dois para acabar com o combo tiro-melee-voo de burst altíssimo.',
      ],
    },
    {
      id: 'batru-synergy-phx',
      kind: 'database',
      title: 'Phoenix — Synergy (Season 10) no Batru',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/phoenix',
      published: '2026-10-05',
      confidence: 'alta',
      takeaways: [
        'Win rate individual de 42,13% com 8,81% de taxa de escolha em 64.048 partidas.',
        'Circle of Life com Hela: 47,06% de win rate da dupla em 6.775 partidas (+4,9 pp sobre o individual).',
        'Telekinetic Beatdown com Rogue: 49,43% de win rate da dupla em 5.345 partidas (+7,3 pp).',
        'Melhores parceiros: Peni Parker (53,47%), Ultron (51,70%) e Devil Dinosaur (50,64%) — três frontliners que criam a janela de agrupamento.',
        'Piores parceiros: Squirrel Girl (30,48%), Hawkeye (32,00%) e Doctor Strange (32,15%, em 20.002 partidas) — o pior grande volume é justamente o herói que cria o muro que cancela a Psionic Detonation.',
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
        'Prioriza acerto de crítico para aplicar 2 Sparks e acelerar a explosão — a mesma leitura de pilha da tabela oficial.',
        'As explosões da Psionic Detonation não atravessam parede: a habilidade termina ao colidir com o terreno e as explosões restantes não disparam. É a armadilha de posicionamento mais cara do kit.',
        'A Phoenix pode marcar a área em qualquer ponto dentro da linha de visão e as explosações não sofrem queda de dano, o que a torna boa de poke a longa distância.',
        'A Endsong Inferno destrói barreiras, muros do Groot, torretas e todas as invocações do inimigo, e o dano é calculado depois da remoção da vida bônus.',
        'Aguenta um disparo de Luna em modo ultimate por causa da remoção de vida bônus, o que confirma a leitura de que a ultimate serve para remover defesa, não para tirar dano.',
        'Números da página (60 de dano com queda em 16m, explosão de 35) divergem da tabela oficial; usados só como fonte de decisão.',
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
        'Confirma as teclas: Cosmic Flames (LMB), Endsong Inferno (Q), Telepathic Illusion (Shift), Dark Ascent (E), Psionic Detonation (RMB), Team-Up (C).',
        'Descreve a diferença da Phoenix: a explosão é dano em área de verdade só contra inimigo agrupado, ao contrário do Moon Knight, que propaga disparo.',
        'Explica a interação da ultimate com a Fênix em voo por 20s a alta velocidade e que quanto mais inimigos e utilidade na área, mais devastadora ela fica.',
        'A página ainda descreve o Team-Up Primal Flame com o Wolverine (10% de aumento de dano e Feral Leap com queimadura) — temporada anterior, divergência registrada.',
      ],
    },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 2, status: 'tabela oficial de habilidades via Fandom e bundle de Team-Up; página de habilidades do site oficial não lida nesta sessão' },
    { kind: 'database', label: 'Wiki e base de dados', count: 2, status: 'wiki.gg (mecânica, defasada em quatro números) e Batru (meta e win rate das duas duplas)' },
    { kind: 'guide', label: 'Guias escritos', count: 2, status: 'Mobalytics (armadilhas de parede e de remoção de vida bônus) e MarvelRivals.gg (teclas e leitura de role)' },
    { kind: 'forum', label: 'Fórum e comunidade', count: 0, status: 'pendente: Reddit bloqueia .json e old.reddit.com, e nenhum tread com transcrição auditável foi usado para número nesta sessão' },
    { kind: 'video-transcript', label: 'Vídeo e transcrição', count: 0, status: 'pendente: nenhum vídeo com transcrição auditável localizado nesta sessão' },
  ],
}
