import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const nightcrawler: HeroGuide = {
  id: 'nightcrawler',
  name: 'Nightcrawler',
  aliases: ['Kurt Wagner', 'Noturno', 'BAMF'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/nightcrawler.png'),
  bannerUrl: publicAsset('heroes/banners/nightcrawler.png'),
  selectionPortraitUrl: publicAsset('heroes/select/nightcrawler.png'),
  selectionHoverUrl: publicAsset('heroes/select/nightcrawler_champion.gif'),
  selectionHoverFit: { scale: 1.2, x: 0, y: 0 },
  theme: {
    primary: '#7c8fd6',
    primaryRgb: '124, 143, 214',
    secondary: '#c8a34a',
    secondaryRgb: '200, 163, 74',
    surface: '#0a0b12',
    surfaceRgb: '10, 11, 18',
  },
  roles: ['strategist'],
  lastVerified: '2026-11-13',
  confidenceSummary:
    'Nightcrawler estreou em 13/11/2026 como o Strategist da Temporada 11 (Version 20261113) e todos os números deste guia vêm da ficha oficial do herói no marvelrivals.com, lida no dia do lançamento: 275 de vida, LMB com 3 granadas, RMB com 60 de energia, três botões de teleporte e a ultimate que move o time inteiro. Não existe balance post específico do herói ainda, e a wiki.gg não tem página dele. Divergência registrada: a página de Team-Up e o manifesto de assets usam TIME CRYSTAL (Rogue) e DEMON MAGIC (Magik), enquanto a ficha do herói e o guia do marvelrivals.gg chamam os mesmos efeitos de PROTECTIVE SIBLINGS e DEMON DISCIPLE; o guia segue o nome do bundle oficial e registra o outro. Nenhuma taxa de vitória ou de escolha foi medida neste lançamento.',
  coreRead: [
    'Nightcrawler é um Strategist de 275 de vida cujos três teleportes produzem cura: o Shift, o E e o F não são só mobilidade, são o kit de suporte.',
    'O E (Smoke Shift) tem três estágios e o terceiro devolve você ao ponto marcado. Marcar atrás de cobertura transforma o botão em entrada e saída no mesmo comando.',
    'O F (Tandem Teleport) puxa o ALIADO para o seu ponto original: ele é ferramenta de resgate, não de engage. Quem inverte o sentido perde os dois personagens.',
    'O RMB (Three-Sword Style) gasta 20 de energia por segundo de um tanque de 60: são três segundos de pressão, com 150% de dano crítico e recuperação de 10 por segundo.',
    'A ultimate move o time inteiro e depois puxa e fere os inimigos no domínio; ela precisa de follow-up pronto, senão você só troca o time de lugar.',
  ],
  teamUps: {
    summary:
      'As duas opções giram em torno de teleporte. Time Crystal, com a Rogue, dá um botão extra (tecla C) que explode no ponto de partida, cura aliados e cai com três espadas causando dano e Lentidão; com a Rogue o efeito é recuperado na descida. Demon Magic, com a Magik, é passivo: cada salto espacial (os três estágios do E, os dois do F e o único do Shift) deixa um campo que fere inimigos e cura aliados, e com a Magik cada salto também gera 25 de vida bônus.',
    recommended: 'Demon Magic',
    recommendedReason:
      'Demon Magic não adiciona botão nem cooldown: ele transforma o que você já faz (teleportar) em cura e dano em área de 8 metros, e o Nightcrawler teleporta em toda fight. Com a Magik no time, cada salto ainda devolve 25 de vida bônus, que compensa os 275 de vida base. Time Crystal é mais dano e controle em um botão só, com 15 segundos de recarga, mas compete com os outros três teleportes pelo tempo de execução. Nenhuma taxa de vitória por dupla foi medida neste lançamento.',
    options: [
      {
        name: 'Time Crystal',
        partner: 'Rogue',
        partnerRole: 'Vanguarda',
        input: 'C',
        baseEffect:
          'A Rogue infunde o Chronovium Power no Nightcrawler. Ao ativar, ele desaparece por um instante e a energia irradia do ponto de partida, ferindo inimigos e curando aliados. Depois de um breve intervalo, reaparece acima do ponto original e cai com as três espadas, causando dano secundário e aplicando Lentidão nos inimigos no alcance.',
        enhancedEffect:
          'Com a Rogue no time, o Chronovium Power é recuperado depois da descida: a recuperação cura aliados, fere inimigos e lança os inimigos na direção do Nightcrawler.',
        bestFor:
          'Times que já têm cura contínua e precisam de um botão de dano em área com controle: a queda aplica Lentidão e, com a Rogue, ainda puxa os inimigos para cima de você.',
        easySetup:
          'O efeito base já funciona sem a Rogue. Com ela no time, a descida passa a recuperar a energia e a lançar os inimigos para o seu lado.',
        iconUrl: publicAsset('teamups/nightcrawler-time-crystal-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/nightcrawler-time-crystal-partner.png'),
      },
      {
        name: 'Demon Magic',
        partner: 'Magik',
        partnerRole: 'Duelista',
        input: 'Passivo',
        baseEffect:
          'A Magik empresta ao Nightcrawler a magia demoníaca do Limbo: cada salto espacial (os três estágios do Smoke Shift, os dois estágios do Tandem Teleport e o único do Swift Intervention) gera um campo que fere inimigos e cura aliados.',
        enhancedEffect:
          'Com a Magik no time, cada salto também condensa uma armadura demoníaca, que concede vida bônus ao Nightcrawler.',
        bestFor:
          'Times que jogam agrupados: o campo sai em toda rotação, então o teleporte de reposicionamento vira cura de área sem custo de botão extra.',
        easySetup:
          'O campo já sai em qualquer salto, com ou sem a Magik. Com ela no time, cada salto também concede 25 de vida bônus ao Nightcrawler.',
        iconUrl: publicAsset('teamups/nightcrawler-demon-magic-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/nightcrawler-demon-magic-partner.png'),
      },
    ],
    sourceIds: ['official-teamups', 'official-hero'],
  },
  systems: [
    {
      name: 'Forged Brimstone + Three-Sword Style',
      input: 'LMB / RMB',
      heading: 'Cura com granada e pressão com energia',
      facts: [
        'Forged Brimstone lança três granadas seguidas, uma a cada 0,9s o conjunto, que explodem no impacto: 10 de dano no impacto e 15 no campo, 10 de cura no impacto e 30 no campo. A cura boa é a de área, então o alvo é o chão perto do aliado, não o corpo dele.',
        'Three-Sword Style usa um tanque de 60 de energia, gasta 20 por segundo e recupera 10 por segundo: são três segundos de golpes contínuos, 11 de dano por golpe a 9 golpes por segundo, 150% em crítico e 7 metros de alcance. O dano é de duelo, não de frontline.',
        'Como a energia recupera a 10 por segundo, gastar o tanque inteiro deixa você sem a ferramenta de defesa por cerca de seis segundos. O RMB é o que sobra quando o inimigo entra no seu alcance, não o que você usa antes de teleportar.',
      ],
      meter: [
        { label: 'Dano (LMB)', value: '10 + 15' },
        { label: 'Cura (LMB)', value: '10 + 30' },
        { label: 'Energia', value: '60' },
        { label: 'Dano (RMB)', value: '11 x9/s' },
      ],
    },
    {
      name: 'Swift Intervention + Smoke Shift + Tandem Teleport',
      input: 'Shift / E / F',
      heading: 'Os três teleportes e o que cada um resolve',
      facts: [
        'Swift Intervention (Shift) tem 2 cargas de 12 segundos, 20 metros de alcance e 2 segundos entre usos: teleporta até um aliado, cura 50 na hora, dá 25 por segundo por 4 segundos para você e para ele, mais 20% de Healing Boost, com 0,5 segundo de invulnerabilidade. É o resgate rápido e a cura de emergência.',
        'Smoke Shift (E) marca o ponto de partida e avança 10 metros em um corte giratório, com 45 de dano no corte, 15 no avanço e uma explosão de fumaça com 15 de dano e 50 de cura. São três estágios dentro de uma janela de 4 segundos, e o terceiro devolve você ao ponto marcado: o primeiro uso tem de ser feito de um lugar seguro.',
        'Tandem Teleport (F) puxa um aliado de até 20 metros para o seu ponto original, com 50 de cura imediata, 25 por segundo por 4 segundos, 20% de velocidade e 1 segundo de invulnerabilidade para os dois. O deslocamento máximo é de 25 metros: é o único botão que remove um aliado do foco inimigo.',
        'Crawler Cling é passivo e deixa você escalar paredes com o botão de pulo. Serve para reposicionar sem gastar teleporte e para sair de ângulos onde o time inimigo não está olhando.',
      ],
      meter: [
        { label: 'Cargas (Shift)', value: '2 / 12s' },
        { label: 'Alcance (E)', value: '10m' },
        { label: 'Estágios (E)', value: '3' },
        { label: 'Resgate (F)', value: '25m' },
      ],
    },
  ],
  roleGuides: {
    strategist: {
      key: 'strategist',
      label: 'Strategist',
      nickname: 'o Curandeiro Teleportador',
      health: '275',
      difficulty: 'Alta',
      job: 'Curandeiro de mobilidade total: cura com granadas e usa três teleportes para resgatar aliados, reposicionar e converter cada salto em cura de área.',
      verdict:
        'Nightcrawler é o Strategist mais móvel do jogo e o que menos perdoa posicionamento ruim. Com 275 de vida, ele não sobrevive a um foco: o que o mantém vivo é o E marcar um ponto seguro e o F tirar um aliado do foco. A cura vem de granadas em área e, principalmente, dos campos deixados pelos teleportes. A curva é alta porque cada botão tem duas funções e a errada é a que mata.',
      playstyle: [
        'Marque o E atrás de cobertura ou em high ground antes de entrar. O terceiro estágio volta para esse ponto, e é ele que decide se você sai vivo do dive.',
        'Use o F no aliado que está apanhando, não no que está avançando: ele puxa o alvo para o SEU ponto original, então você precisa estar em lugar seguro para que o resgate funcione.',
        'Mantenha o Shift com uma carga em reserva. São duas cargas de 12 segundos, e a invulnerabilidade de 0,5 segundo é o que cancela o burst que mata em um golpe.',
        'Cure com o LMB mirando o chão ao lado do aliado: a cura de campo é 30 contra 10 do impacto direto, e explodem em área.',
        'Quando o RMB estiver cheio, use em quem entrar no seu alcance de 7 metros. Com 9 golpes por segundo e 150% em crítico, ele resolve duelos curtos, mas consome o tanque em três segundos.',
      ],
      priorityKicker: 'Onde o time trava',
      priorityTitle: 'O ponto de retorno é a decisão da partida',
      priorityDescription:
        'Todo o valor do Nightcrawler vem de escolher onde ficar parado antes de teleportar. O E volta para o ponto marcado, o F puxa o aliado para o seu ponto original e a ultimate leva o time para um ponto escolhido a 30 metros. Quem marca em lugar ruim entrega dois personagens ao inimigo; quem marca em cobertura transforma o dive em ida e volta.',
      upgradePlan: [
        {
          rank: 1,
          ability: 'Smoke Shift',
          input: 'E',
          label: 'Entrada e saída no mesmo botão',
          baseEffect:
            'Avança 10 metros com corte giratório de 45 de dano, explosão de fumaça de 15 de dano e 50 de cura, em três estágios dentro de 4 segundos; o terceiro estágio devolve ao ponto marcado.',
          why: 'É o botão que define o posicionamento: com 15 segundos de recarga, errar o ponto inicial custa a rotação inteira e, frequentemente, a vida.',
          swapWhen: 'Troque quando o mapa for aberto e o time precisar de cura em linha em vez de reposicionamento.',
          sourceIds: ['official-hero'],
        },
        {
          rank: 2,
          ability: 'Tandem Teleport',
          input: 'F',
          label: 'Resgate de aliado',
          baseEffect:
            'Puxa um aliado de até 20 metros para o seu ponto original, com 50 de cura imediata, 25 por segundo por 4 segundos, 20% de velocidade e 1 segundo de invulnerabilidade; deslocamento máximo de 25 metros.',
          why: 'É a única habilidade do kit que remove um aliado do foco inimigo. Um segundo de invulnerabilidade em dois personagens vale mais que qualquer cura.',
          swapWhen: 'Troque quando o time tiver mobilidade própria e não precisar ser resgatado.',
          sourceIds: ['official-hero'],
        },
        {
          rank: 3,
          ability: 'Phasing Finale',
          input: 'Q',
          label: 'Ultimate que reposiciona o time',
          baseEffect:
            'Seleciona um ponto a até 30 metros e teleporta os aliados próximos um a um, com 20% de Damage Boost por 10 segundos, 200 de vida bônus mais 200 ao pousar e 50 por segundo de cura por 10 segundos; o segundo uso puxa os inimigos em 15 metros e causa 60 de dano.',
          why: 'O valor está no reposicionamento e na vida bônus, não no dano: quem recebe 400 de vida bônus sobrevive à ultimate que ia matar. O segundo uso é o que segura o inimigo no lugar para o seu time acertar.',
          swapWhen: 'Troque quando o time já tiver engage próprio e precisar de cura contínua.',
          sourceIds: ['official-hero'],
        },
        {
          rank: 4,
          ability: 'Forged Brimstone',
          input: 'LMB',
          label: 'Cura de área',
          baseEffect: 'Três granadas por conjunto, 10 de cura no impacto e 30 no campo, com 10 de dano no impacto e 15 no campo.',
          why: 'É a cura que não depende de cooldown nem de teleporte: em fight longa é o que sustenta o time enquanto o E e o F recarregam.',
          swapWhen: 'Troque quando o time se espalhar e a cura de área perder valor.',
          sourceIds: ['official-hero'],
        },
      ],
      adaptations: [
        'Contra dive pesado, guarde o E como saída em vez de entrada: marque o ponto e só use o segundo estágio quando o agressor estiver comprometido.',
        'Com dois Strategists, o Nightcrawler vira o curandeiro de resgate: o F e o Shift cobrem o que o outro suporte não alcança, e o E deixa de ser usado como engage.',
        'Em mapa aberto e sem cobertura, o Smoke Shift perde valor porque não há ponto seguro para marcar. Nesse caso, fique perto do Vanguard e cure com o LMB de longe.',
        'Se o inimigo tiver CC de área, teleportar dentro dele é morte: espere o CC sair, porque a invulnerabilidade de 0,5 segundo do Shift não cobre uma ultimate.',
        'Com Demon Magic ativo, teleportar cura: entre no campo dos aliados com o Shift mesmo quando ninguém estiver ferido, para deixar o campo pronto para o burst seguinte.',
      ],
      ultimates: [
        {
          stance: 'Phasing Finale',
          name: 'Phasing Finale',
          bestUse:
            'Depois que um aliado já usou a ultimate dele, nunca como abertura. A ultimate junta o time em um ponto, dá 400 de vida bônus no total e 20% de dano por 10 segundos; o segundo uso puxa os inimigos para o seu lado e é aí que o combo fecha.',
          execution:
            'Selecione um ponto a até 30 metros, de preferência alto ou atrás do inimigo, e deixe os aliados irem um a um: Vanguards pousam espalhados em 4 metros, Duelistas em 2,5 e Strategists em 0,75, então os suportes caem praticamente no mesmo ponto. Depois do pouso, use o segundo uso para puxar os inimigos em 15 metros, causando 60 de dano e segurando todos no domínio.',
          upgradeValue:
            'A ultimate não cura por número alto, ela reposiciona e engorda o time: 200 de vida bônus na seleção, mais 200 ao pousar, mais 50 por segundo de cura por 10 segundos e 20% de dano. Usada sem follow-up, ela só entrega o time ao inimigo no lugar errado.',
        },
      ],
      dashGuide: {
        ability: 'Smoke Shift',
        shortRule: 'Marca o ponto de partida, avança 10 metros cortando e volta ao ponto marcado no terceiro estágio.',
        mechanics: [
          'São três estágios em uma janela de 4 segundos: corte de 45 de dano, explosão de fumaça de 15 de dano e 50 de cura por uso, e o terceiro devolve você ao ponto marcado.',
          'O avanço é de 10 metros com 15 de dano no trajeto, e a explosão de fumaça lança os inimigos para cima.',
          'A recarga é de 15 segundos e começa no primeiro uso, não no terceiro: usar os três estágios não aumenta o custo.',
        ],
        drills: [
          'Pratique marcar em cobertura e sair pelo terceiro estágio antes de tentar usar o E como engage: o retorno é o que separa um dive de uma entrega.',
          'Use o segundo estágio para atravessar o alvo, não para chegar nele: o corte de 45 e a fumaça de 50 de cura acertam quem está no caminho.',
        ],
      },
      patterns: [
        {
          title: 'Entrada com retorno marcado',
          steps: [
            'Marque o E atrás de cobertura ou em high ground.',
            'Use o Shift em um aliado que já entrou, deixando o campo de cura se formar.',
            'Avance com o E até o alvo, acertando o corte e a explosão de fumaça.',
            'Volte pelo terceiro estágio antes de a janela de 4 segundos fechar.',
          ],
        },
        {
          title: 'Resgate com Tandem Teleport',
          steps: [
            'Fique em posição segura: o aliado será puxado para o SEU ponto de origem.',
            'Selecione o aliado em perigo a até 20 metros e confirme.',
            'Aproveite o segundo de invulnerabilidade para curar com o LMB enquanto os dois estão imunes.',
                        'Deixe o campo de cura do Demon Magic (se ativo) cobrir a chegada.',
          ],
        },
        {
          title: 'Ultimate com follow-up',
          steps: [
            'Espere a ultimate de um aliado estar pronta: a sua é follow-up, não abertura.',
            'Selecione o ponto alto ou atrás do time inimigo a até 30 metros.',
            'Deixe o time pousar com 400 de vida bônus e 20% de dano.',
            'Use o segundo uso para puxar os inimigos em 15 metros e prender todos no domínio.',
          ],
        },
      ],
      mistakes: [
        'Usar o E como engage sem ponto de retorno seguro. O terceiro estágio é o que salva você, e marcar no meio da fight entrega a volta ao inimigo.',
        'Puxar o aliado com o F para o lado errado. O botão traz o aliado para o seu ponto original: se você estiver avançado, o resgate vira uma segunda morte.',
        'Gastar o tanque de energia do RMB antes de precisar sair. Com 10 de recuperação por segundo, o tanque cheio leva seis segundos para voltar.',
        'Usar a ultimate sem follow-up pronto. Mover o time inteiro para um ponto sem ultimate atrás só entrega o grupo ao inimigo.',
        'Ignorar o LMB em favor dos teleportes. A cura de campo de 30 é a única fonte de cura que não depende de cooldown.',
      ],
      evidence: [
        'Ficha oficial do herói no marvelrivals.com (lida em 13/11/2026, dia do lançamento): 275 de vida, 600 de velocidade, jobType Strategist; Forged Brimstone com 10 de dano no impacto e 15 no campo, 10 de cura no impacto e 30 no campo, 0,9s por conjunto de três granadas; Three-Sword Style com 60 de energia, 20/s de custo, 10/s de recuperação, 11 de dano por golpe, 9 golpes por segundo, 150% em crítico e 7 metros; Swift Intervention com 2 cargas de 12s, 2s entre usos, 20 metros, 50 de cura imediata, 25/s por 4s, 20% de Healing Boost e 0,5s de invulnerabilidade; Smoke Shift com 15s de recarga, 10 metros, 45 de dano no corte, 15 no avanço, 15 na explosão, 50 de cura, raio de 6 metros e janela de 4s; Tandem Teleport com 15s, 20 metros de seleção, 25 metros de deslocamento, 50 de cura, 25/s por 4s, 20% de velocidade e 1s de invulnerabilidade; Crawler Cling permite escalar paredes com o botão de pulo.',
        'Ficha oficial — Phasing Finale: 4500 de energia, seleção de 30 metros, raio de 20 metros, dispersão de pouso de 4 metros para Vanguards, 2,5 para Duelistas e 0,75 para Strategists, 20% de Damage Boost por 10s, 200 de vida bônus mais 200 ao pousar, 50/s de cura por 10s, raio de 15 metros para puxar inimigos e 60 de dano no segundo estágio.',
                'Página oficial de Team-Up (teamup.html, dados embutidos na página em 13/11/2026): TIME CRYSTAL para a dupla com a Rogue e DEMON MAGIC para a dupla com a Magik. A ficha do herói e o guia do marvelrivals.gg descrevem os mesmos efeitos como PROTECTIVE SIBLINGS e DEMON DISCIPLE. Os números de cada opção vêm da ficha: 15s de recarga, 15 de dano, 50 de cura e 5 metros de raio, mais 40 de dano no slam em 3 metros; aprimorado com a Rogue, 30 de dano e 30 de cura em 8 metros. Demon Magic: 10 de dano, 40 de cura e 8 metros de raio por salto, mais 25 de vida bônus por salto com a Magik.',
        'marvelrivals.gg (guia atualizado em 12/11/2026): o E deve ser marcado atrás de cobertura ou em high ground antes do dive; o F pode ser combinado com o E para levar um Duelista ou Vanguard de engage para dentro do time inimigo; a ultimate deve ser follow-up de outra ultimate, não abertura; Blade, Daredevil, Doutor Estranho e Groot são os iniciadores que combinam com o reposicionamento.',
      ],
    },
  },
  sources: [
    {
      id: 'official-hero',
      kind: 'official',
      title: 'Marvel Rivals — Nightcrawler (ficha oficial do herói)',
      url: 'https://www.marvelrivals.com/heroes/2mpwiwa9ct6hn/index.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-10-12',
      confidence: 'alta',
      takeaways: [
        'Fonte canônica de vida, teclas, habilidades, escalas e dos números das duas opções de Team-Up do herói.',
        'Vida 275 e velocidade 600; jobType Strategist, confirmado também em jobs: [strategist].',
        'As duas opções de Team-Up aparecem como PROTECTIVE SIBLINGS (Rogue, tecla C) e DEMON DISCIPLE (Magik, passivo).',
      ],
    },
    {
      id: 'official-teamups',
      kind: 'official',
      title: 'Marvel Rivals — Página Oficial de Team-Up',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      published: '2026-11-13',
      confidence: 'alta',
      takeaways: [
        'Dados vivos da página em 13/11/2026: as opções do Nightcrawler aparecem como TIME CRYSTAL (Rogue, tecla C) e DEMON MAGIC (Magik, passivo).',
        'Os efeitos são os mesmos da ficha do herói; a divergência é só de rótulo, registrada no confidenceSummary.',
                'A página descreve o E como três conjurações, o F como duas e o Shift como uma, que é a base do passivo Demon Magic.',
      ],
    },
    {
      id: 'marvelrivals-gg',
      kind: 'guide',
      title: 'Nightcrawler Guide — marvelrivals.gg',
      url: 'https://marvelrivals.gg/nightcrawler/',
      author: 'Madian',
      published: '2026-11-12',
      confidence: 'media',
      takeaways: [
        'Recomenda marcar o E atrás de cobertura ou em high ground antes do dive, para garantir o retorno.',
        'Descreve o combo E + F para levar um iniciador (Blade, Daredevil, Doutor Estranho, Groot) para o meio do time inimigo.',
        'A ultimate deve ser usada como follow-up de outra ultimate, porque o segundo uso prende os inimigos no lugar.',
        'Números do guia não foram usados: a ficha oficial é a fonte de todos os valores.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Oficiais (ficha do herói e página de Team-Up)',
      count: 2,
      status: 'Ficha oficial do herói e página de Team-Up lidas no dia do lançamento (13/11/2026); a ficha é a fonte de todos os números e a página confirma os efeitos e as teclas.',
    },
    {
      kind: 'database',
      label: 'Bases de dados',
      count: 0,
      status: 'A wiki.gg ainda não tem página do Nightcrawler (checada em 13/11/2026), então nenhuma base de dados foi usada.',
    },
    {
      kind: 'guide',
      label: 'Guias escritos',
      count: 1,
      status: 'marvelrivals.gg para tática de posicionamento e uso da ultimate; nenhum número vem de guia escrito.',
    },
    {
      kind: 'forum',
      label: 'Fórum e comunidade',
      count: 0,
      status: 'Nenhum fórum lido nesta sessão.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeo',
      count: 0,
      status: 'Nenhum vídeo usado nesta sessão.',
    },
  ],
}
