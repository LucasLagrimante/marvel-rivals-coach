import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const gorr: HeroGuide = {
  id: 'gorr',
  name: 'Gorr',
  aliases: ['Gorr', 'O Carniceiro dos Deuses', 'The God Butcher', 'King in Black'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/gorr.png'),
  bannerUrl: publicAsset('heroes/banners/gorr.png'),
  selectionPortraitUrl: publicAsset('heroes/select/gorr.png'),
  selectionHoverUrl: publicAsset('heroes/select/gorr_lord.png'),
  selectionHoverFit: { scale: 1.2, x: 0, y: 2 },
  theme: {
    primary: '#c9a227',
    primaryRgb: '201, 162, 39',
    secondary: '#a82c35',
    secondaryRgb: '168, 44, 53',
    surface: '#121214',
    surfaceRgb: '18, 18, 20',
  },
  roles: ['duelist'],
  lastVerified: '2026-11-01',
  confidenceSummary:
    'Revisão em 01/11/2026: a página oficial confirma 175 Health + 175 Regenerative Shield e All-Black 40/60/40/60. O balance post prevalece sobre a ficha, que ainda mostra Living Abyss em 13s: o valor atual é 12s, com movimento a 10m/s. O bundle vivo define Ragnarök (Hela, C) e Hive Mind (Venom, E); a página do herói mostra C para Hive Mind, divergência resolvida em favor de Key_en do bundle. A Annihilablade sofre falloff de 8m a 10m. Sem estatística atual comparável de win rate para declarar um Team-Up universalmente melhor.',
  coreRead: [
    'Lance um Black Berserker com [key:E]; avance com [key:Shift] e retorne a ele com [key:F]. Se sofrer foco, use Shadow Harvest ([key:F]) para voltar à âncora a até 22m, convertendo 50% da vida restante do lacaio em overhealth. A Version 20261029 corrigiu a saída dos limites do mapa ao usar [key:F] imediatamente após gerar um Berserker; não alterou o balance.',
    'Rotação de Foice das Sombras ([key:F] → Berserker Blast → Shadow Scythe): O dano principal de Gorr não vem dos cortes básicos de All-Black ([key:LMB]). O pico de DPS exige usar Shadow Harvest ([key:F], CD de 3s) em um lacaio próximo, disparar o projétil perfurante do Berserker Blast (55 de dano) e descarregar os 4 golpes de Shadow Scythe (50 + 2% da vida máxima do alvo por golpe em 8m de alcance). Esse ciclo estende a ameaça e sustenta o overhealth; Shadow Harvest volta após 3s, mas depende de outro Berserker disponível.',
    'Twilight of the Gods ([key:Q]) como quebra-frontline: A Annihilablade causa 65 + 10% da vida máxima por corte, com dano cheio até 8m e falloff até 80% a 10m. A ultimate eleva o teto de Berserkers para 9 e mantém Frenzied State (+40% de velocidade de ataque) por até 10s. Pressione grupos no objetivo e priorize a faixa curta; não assuma o dano máximo no limite de alcance.',
  ],
  teamUps: {
    summary:
      'Ragnarök é o padrão quando se quer uma foice independente dos lacaios; Hive Mind serve para puxar um alvo para o alcance dos Berserkers e do time. A troca é grátis na sala de spawn.',
    recommended: 'Ragnarök',
    recommendedReason:
      'Ragnarök oferece uma foice por ativação sem consumir um Black Berserker; o perfil oficial lista 45 de dano e Grounding por 1s em 5m. Com Hela, o alcance aumenta 2m e cada uso concede 10 de Bonus Health. Hive Mind é a alternativa de puxão/controle; os números oficiais são detalhados na fonte do herói. Timesaver.gg recomenda Ragnarök em solo queue, mas não há dados comparáveis atuais de win rate para declarar uma vencedora universal.',
    options: [
      {
        name: 'Ragnarök',
        partner: 'Hela',
        partnerRole: 'Duelista',
        input: 'C',
        baseEffect:
          'Ganha uma habilidade que transforma a All-Black em foice e executa um golpe amplo, causando dano e aplicando Grounding nos inimigos próximos; a arma permanece em forma de foice por um curto período.',
        enhancedEffect:
          'Com Hela no time, o alcance de ataque da Shadow Scythe é ampliado; cada acerto espalha fragmentos simbiontes que concedem vida bônus a Gorr e aos aliados próximos. O bundle não publica valores numéricos para esse bônus.',
        bestFor:
          'Útil para pressionar e aplicar Grounding sem consumir Black Berserkers: o perfil oficial lista golpe de 45 em raio de 5m, Grounding por 1s e recarga de 20s. Com Hela, o alcance da Shadow Scythe sobe 2m e cada uso concede 10 de Bonus Health; não é prova de vantagem universal de win rate.',
        easySetup:
          'Pressione [key:C] para usar o golpe base, mesmo sem Hela; o aprimoramento acrescenta 2m de alcance e 10 de Bonus Health por uso.',
        iconUrl: publicAsset('teamups/gorr-ragnarok-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/gorr-ragnarok-partner.png'),
      },
      {
        name: 'Hive Mind',
        partner: 'Venom',
        partnerRole: 'Vanguarda',
        input: 'E',
        baseEffect:
          'Ganha uma habilidade que dispara uma Symbiote Claw perfurante à frente, causando dano aos inimigos no trajeto; ao atingir a distância máxima, ela retrai e lança os inimigos capturados na direção de Gorr.',
        enhancedEffect:
          'Com Venom no time, os Black Berserkers ganham um leve Damage Boost e aplicam Slow nos inimigos que atingem.',
        bestFor:
          'Dive coordenado: a garra alcança até 25m, causa 40 ao disparar e 20 ao retrair; com Venom, os Berserkers ganham 33% de dano e aplicam 30% de slow por 1s. O perfil da página lista C, mas o bundle vivo lista Key_en E; use E.',
        easySetup:
          'Venom na vanguarda de dive. O efeito-base de puxão funciona sem o parceiro; use [key:E], conforme Key_en no bundle atual, apesar da tecla C ainda exibida pela página do herói.',
        iconUrl: publicAsset('teamups/gorr-hive-mind-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/gorr-hive-mind-partner.png'),
      },
    ],
    sourceIds: ['official-teamups', 'official-gorr-hero', 'timesaver-gorr-teamups'],
  },
  systems: [
    {
      name: 'Symbiote Swarm & Overhealth',
      input: 'Passiva',
      heading: 'Vida bônus contínua e multiplicação por eliminações',
      facts: [
        'Todo dano causado pelos Black Berserkers converte 100% em vida bônus para Gorr, até o limite compartilhado de 50 HP extras.',
        'Conseguir o abate final em qualquer inimigo faz surgir instantaneamente um Black Berserker na posição da morte, sem consumir cargas.',
        'O limite de 50 HP é compartilhado pelo dano dos Berserkers, pelo Necroverse de Living Abyss ([key:Shift]) e pela absorção direta de Shadow Harvest ([key:F]).',
        'Gorr tem 350 de durabilidade total (175 Health + 175 Regenerative Shield); com 50 de vida bônus, chega momentaneamente a 400.',
      ],
      meter: [
        { label: 'Durabilidade', value: '175 Health + 175 Shield' },
        { label: 'Vida bônus máx.', value: '+50 HP' },
        { label: 'Conversão', value: '100% do dano dos lacaios' },
        { label: 'Abate final', value: '+1 Berserker' },
      ],
    },
    {
      name: 'Ciclo dos Berserkers',
      input: 'E / F / Shift',
      heading: 'Lacaios são âncoras de entrada e saída',
      facts: [
        'Gorr mantém até 3 Black Berserkers ativos (9 durante a ultimate); cada um tem 150 HP, dura 6s e causa 7,5 de dano a cada 0,7s em até 30m. A habilidade [key:E] tem 2 cargas, com recarga de 10s cada.',
        'Necro-Power ([key:RMB]) marca o alvo, aplica 15% de slow por 2s e comanda os Berserkers próximos a teleportar até ele, acertar duas vezes e lançá-lo para cima.',
        'Shadow Harvest ([key:F]) teleporta Gorr até um Berserker selecionado a até 22m, explode em 5m causando 5 + 5% da vida máxima e converte 50% da vida restante do lacaio em vida bônus. Recarga: 3s.',
        'Após a colheita, Berserker Blast fica disponível por 4s: a onda perfurante causa 55 de dano. O disparo ou um ataque primário transforma All-Black em Shadow Scythe por 4 golpes ou 4s: 50 + 2% da vida máxima em até 8m, a cada 0,6s.',
        'Living Abyss ([key:Shift]) avança por 1,5s a 10m/s e gera um Berserker na origem. Depois do breve startup, Gorr fica invulnerável; os lacaios ganham +40% de cadência e o pouso cria um Necroverse de 10m que causa 30 de dano/s, convertendo 100% em vida bônus.',
        'O startup de Living Abyss ainda é vulnerável a controle de grupo: um stun ou Earthbound antes da transformação cancela o avanço e consome a recarga de 12s. Ative atrás de cobertura, não já sob foco.',
        'Shadow Harvest pode atravessar barreiras e desníveis para alcançar uma âncora: distribua Berserkers em posições seguras para ter uma rota de entrada e outra de retirada.',
      ],
      meter: [
        { label: 'Berserkers', value: '3 (9 na ultimate) · 150 HP' },
        { label: 'Shadow Harvest', value: '3s · alcance de 22m' },
        { label: 'Shadow Scythe', value: '4 golpes · 8m' },
        { label: 'Living Abyss', value: '12s · 1,5s · 10m/s' },
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelista',
      nickname: 'Berserkers e âncora',
      health: '350 HP',
      difficulty: 'Alta (4/5): exige gestão posicional dos lacaios, timings de teleporte com [key:F], rotas seguras para o [key:Shift] e conversão agressiva de overhealth.',
      job: 'Posicione âncoras de lacaios, inicie com Necro-Power para controle aéreo, avance com Living Abyss para aplicar dano em área e alterne foice das sombras e All-Black para dizimar a frontline e suportes.',
      verdict:
        'Escolha Gorr quando a partida exigir um duelista brawler encorpado capaz de quebrar tanques pesados (Hulk, Thor, Venom, Groot, Magneto) ou contestar pontos apertados e payloads com dano percentual e lacaios automáticos. Evite contra composições de longo alcance em mapas abertos (Hawkeye, Hela, Iron Man, Namor) onde o hitbox largo de 350 HP sofre poke antes de conseguir encurtar a distância.',
      playstyle: [
        'Gorr joga como um duelista brawler de controle territorial que domina o espaço através de sua horda de simbiontes. Antes de qualquer briga, posicione um Black Berserker ([key:E]) em uma cobertura segura ou terreno elevado. Esse lacaio funciona como sua âncora de segurança: se o engajamento ficar desfavorável, você pode usar Shadow Harvest ([key:F]) a até 22m para sair do fogo cruzado e absorver vida bônus instantânea.',
        'A abertura de combate ideal é à média distância com Necro-Power ([key:RMB]). Ao acertar o projétil em um alvo prioritário (como um suporte ou duelista sem escape), o inimigo sofre 15% de slow e todos os seus lacaios ativos se teletransportam para ele, aplicando um ataque duplo melee que arremessa a vítima no ar (Launch Up). Aproveite a trajetória aérea do alvo para avançar com Living Abyss ([key:Shift]), gerando o segundo lacaio e aterrisando com o Necroverse para colher overhealth contínuo.',
        'No corpo a corpo, alterne rapidamente entre os 4 cortes de All-Black ([key:LMB]) e o consumo tático de lacaios via Shadow Harvest ([key:F]). Ao acionar [key:F], você causa dano em área baseado na vida máxima do inimigo, dispara o choque perfurante do Berserker Blast (55 de dano) e desbloqueia a Shadow Scythe por 4 golpes de 8m de alcance. Se um inimigo tombar, a passiva Symbiote Swarm gera um lacaio novo na hora, alimentando um ciclo ininterrupto de explosões e regeneração de vida.',
      ],
      priorityKicker: 'Sequência de Luta',
      priorityTitle: 'Prioridade de habilidades e ciclo de rotação',
      priorityDescription:
        'Gorr não utiliza upgrades de compra numérica: a lista abaixo define a hierarquia de execução tática em cada engajamento para extrair o máximo de controle aéreo, dano percentual e renovação contínua de overhealth.',
      upgradePlan: [
        {
          rank: 1,
          input: 'RMB',
          ability: 'Necro-Power',
          label: 'Iniciador com slow + puxão e lançamento aéreo de Berserkers',
          why: 'CD curto de 6s. Causa 30 de dano, aplica slow de 15% por 2s e comanda todos os Black Berserkers a se teletransportarem até a vítima, desferindo golpes que a arremessam no ar (Launch Up). É a ferramenta que garante acerto para o combo completo de Gorr.',
          swapWhen: 'Se os inimigos estiverem colados em combate direto corpo a corpo, use All-Black ([key:LMB]) ou Shadow Harvest ([key:F]) imediatamente e guarde [key:RMB] para interromper tentativas de fuga.',
          sourceIds: ['wiki-fandom-gorr', 'esports-gg-gorr', 'balance-20261006-gorr'],
        },
        {
          rank: 2,
          input: 'F',
          ability: 'Shadow Harvest',
          label: 'Teleporte tático + explosão percentual + Shadow Scythe',
          why: 'CD de apenas 3s com alcance de 22m. Detona o lacaio causando 5 + 5% da vida máxima dos alvos em 5m, devolve 50% do HP do lacaio como overhealth e desbloqueia o Berserker Blast (55 de dano) seguido por 4 golpes de Shadow Scythe (50 + 2% Max HP em 8m). É o principal multiplicador de dano sustentado do kit.',
          swapWhen: 'Guarde [key:F] sem detonar se o seu único lacaio em campo for a sua âncora de fuga e o time inimigo tiver guardado ultimates de dano em área.',
          sourceIds: ['wiki-fandom-gorr', 'altchar-gorr', 'balance-20261006-gorr'],
        },
        {
          rank: 3,
          input: 'LMB',
          ability: 'All-Black / Shadow Scythe',
          label: 'Combos melee principais e cortes com dano percentual',
          why: 'O ataque padrão desfere uma sequência de 4 golpes rápidos (40/60/40/60 de dano em 7m). Quando transformado em Shadow Scythe via [key:F], o alcance sobe para 8m e o dano salta para 50 + 2% da vida máxima por corte, punindo alvos de qualquer classe.',
          swapWhen: 'Não fique golpeando no ar se o inimigo se afastar além de 8m; reposicione com [key:Shift] ou reconecte com o slow de [key:RMB].',
          sourceIds: ['wiki-fandom-gorr', 'games-gg-gorr', 'balance-20261006-gorr'],
        },
        {
          rank: 4,
          input: 'Shift',
          ability: 'Living Abyss',
          label: 'Avanço invulnerável + Necroverse de sobrevida e lacaio extra',
          why: 'CD de 12s. Concede 1.5s de invulnerabilidade a 10 m/s, cria um lacaio na origem, coloca lacaios em fúria (+40% velocidade) e manifesta um Necroverse de 10m ao aterrissar causando 30 de dano/s com 100% de conversão em overhealth (até 50 HP). Essencial para fechar gaps e sobreviver em meio ao time inimigo.',
          swapWhen: 'Se estiver sob risco iminente de controle de grupo pesado (como stuns ou Earthbound), inicie o avanço antes de ser alvejado para não sofrer cancelamento no startup.',
          sourceIds: ['wiki-fandom-gorr', 'esports-gg-gorr', 'balance-20261006-gorr'],
        },
        {
          rank: 5,
          input: 'E',
          ability: 'Black Berserker',
          label: 'Invocação de lacaios + preparação de âncoras de recuo',
          why: 'Possui 2 cargas com 10s de recarga cada. Invoca lacaios com 150 HP que atiram a 30m e alimentam overhealth passivo. Serve tanto para pressionar alvos à distância quanto para criar pontos de teleporte para [key:F].',
          swapWhen: 'Se você já estiver com 3 lacaios em campo, segure as cargas de [key:E] até consumir ou perder algum lacaio, evitando gastar recursos sem efeito.',
          sourceIds: ['wiki-fandom-gorr'],
        },
      ],
      adaptations: [
        'Contra Vanguards agrupados: use a Annihilablade para pressionar o grupo, mas trate a janela como 10s; a Shadow Scythe agora causa 50 + 2% da vida máxima, então acerte a sequência em vez de trocar golpes isolados.',
        'Contra atiradores e alvos aéreos: evite cruzar linhas de visão abertas; posicione Berserkers em ângulos distintos e avance por cobertura. Living Abyss agora se move a 10 m/s: reserve-o para trechos protegidos, entradas curtas ou saída, não para atravessar uma avenida sob fogo.',
        'Contra composições de dive agressivo (Black Panther, Magik, Spider-Man): Mantenha uma âncora de Black Berserker ([key:E]) próxima aos seus suportes. Quando os atacantes mergulharem, use Necro-Power ([key:RMB]) para levantá-los no ar e ative Shadow Harvest ([key:F]) para explodi-los com dano percentual enquanto protege sua retaguarda.',
        'Com Hela (Ragnarök): use [key:C] para iniciar a forma de foice sem consumir Berserker; com o aprimoramento, o alcance de ataque aumenta e cada acerto concede vida bônus ao grupo, sem quantidade publicada no bundle. É valiosa quando precisa preservar sua âncora de fuga.',
        'Com Venom (Hive Mind): [key:E] dispara a Symbiote Claw perfurante e puxa os alvos atingidos na retração; com Venom, Berserkers recebem aumento de dano e aplicam slow. Escolha-a quando o time puder acompanhar o puxão; sem Venom, o efeito base continua disponível.',
      ],
      ultimates: [
        {
          stance: 'Transformação Ofensiva / Quebra de Linha',
          name: 'Twilight of the Gods (Annihilablade)',
          bestUse:
            'Ative quando o time inimigo estiver contestando o objetivo (ponto de captura ou payload) ou agrupado em um chokepoint, especialmente com dois ou mais Vanguards na formação.',
          execution:
            'Aproxime-se do cluster e pressione [key:Q]. A habilidade invoca instantaneamente um Black Berserker ao lado de cada oponente dentro do raio de 10m e eleva o limite para 9. Durante até 10s, os lacaios ficam em Frenzied State (+40% de velocidade de ataque) e não expiram. A Annihilablade causa 65 + 10% da vida máxima por corte, com dano cheio até 8m e falloff até 80% em 10m; a duração foi reduzida de 12s no balance 20261009.',
          upgradeValue:
            'A combinação de 10% de vida máxima por golpe com 9 lacaios atirando continuamente e gerando overhealth ininterrupto transforma Gorr em uma máquina de brawling quase imortal. Cuidado apenas com controles de grupo coordenados (como ultimates de aprisionamento) durante a ativação.',
        },
      ],
      dashGuide: {
        ability: 'Living Abyss ([key:Shift]) → Shadow Harvest ([key:F])',
        shortRule:
          'Nunca use Living Abyss sem ter uma âncora de lacaio posicionada atrás: o avanço serve para engajar e o teleporte com [key:F] serve para reposicionar ou extrair overhealth.',
        mechanics: [
          'Living Abyss ([key:Shift]) dura 1.5s e cobre cerca de 20 metros a 10 m/s. Ele gera um Black Berserker no ponto de saída e cria o Necroverse (10m de raio, 30 dano/s) no local de chegada.',
          'O avanço de [key:Shift] possui vulnerabilidade no startup: se receber stun ou efeito de Earthbound antes de a massa de simbionte se formar completamente, a habilidade entra em recarga de 12s sem que Gorr se mova.',
          'Shadow Harvest ([key:F]) tem alcance generoso de 22m e recarga mínima de 3s. Mirar no lacaio através de paredes transparentes ou por cima de obstáculos permite atravessar geometrias inteiras de mapa.',
          'Consumir o lacaio com [key:F] concede vida bônus igual a 50% da vida atual dele. Consumir um lacaio com vida cheia (150 HP) gera imediatamente o teto de 50 de overhealth para Gorr.',
        ],
        drills: [
          'Treino de Âncora e Recall: No campo de prática, lance um lacaio com [key:E] no alto de uma plataforma, avance 15m para a frente com [key:Shift], golpeie o boneco de teste e aperte [key:F] mirando na plataforma para escapar instantaneamente.',
          'Treino de Juggler Aéreo: Dispare Necro-Power ([key:RMB]) no boneco de teste a 10m de distância, observe o lacaio arremessar o alvo para cima, dê dois cortes de [key:LMB] e finalize com [key:F] para detonar o lacaio e ativar a Shadow Scythe.',
          'Treino de Curva de Living Abyss: Pratique contornar quinas de corredores durante o avanço de 1.5s do [key:Shift], ajustando a mira com o mouse para aterrissar exatamente sobre múltiplos dummies e acionar o Necroverse coletivo.',
          'Treino de Cadência da Foice: Após usar [key:F], dispare o projétil Berserker Blast em linha reta e em seguida descarregue os 4 cortes de [key:LMB] da Shadow Scythe no ritmo de 0.6s, mantendo o espaçamento de 8 metros.',
        ],
      },
      patterns: [
        {
          title: 'Combo Juggler de Entrada Rápida',
          steps: [
            'Posicione um Black Berserker ([key:E]) em cobertura para estabelecer presença de campo.',
            'Acerte o alvo prioritário com Necro-Power ([key:RMB]) a até 12m, aplicando 15% de slow e acionando o teleporte do lacaio com ataque que lança o inimigo para o alto (Launch Up).',
            'Avance na direção do alvo com Living Abyss ([key:Shift]), gerando um segundo lacaio e aterrissando com o Necroverse para colher overhealth contínuo.',
            'Acione Shadow Harvest ([key:F]) no lacaio colado ao inimigo para detonar 5% de Max HP em área, dispare o Berserker Blast (55 de dano) e liquide com os 4 golpes de Shadow Scythe ([key:LMB]).',
          ],
        },
        {
          title: 'Emboscada com Âncora de Segurança',
          steps: [
            'Antes da luta no objetivo, jogue um Black Berserker ([key:E]) em terreno alto ou atrás de uma parede a até 20m.',
            'Avance com o time a pé ou com [key:Shift] para focar a frontline inimiga com All-Black ([key:LMB]) e Necro-Power ([key:RMB]).',
            'Se a luta desandar ou o time adversário focar você, mire na direção da âncora e aperte Shadow Harvest ([key:F]) para teletransportar de volta imediatamente.',
            'Ao chegar em segurança, você ganha 50 de overhealth e mantém a Shadow Scythe ativa por 4s para punir quem tentar persegui-lo.',
          ],
        },
        {
          title: 'Quebra de Vanguard e Limpeza de Objetivo com Ultimate',
          steps: [
            'Espere os tanques e suportes inimigos se agruparem na área de captura ou ao redor do payload.',
            'Ative Twilight of the Gods ([key:Q]) para invocar lacaios em todos os inimigos em 10m e colocar até 9 Berserkers em Frenzied State durante a ultimate.',
            'Foque imediatamente o Vanguard mais resistente com a Annihilablade ([key:LMB]): cada golpe causa 65 + 10% da vida máxima até 8m; o falloff chega a 80% em 10m. A janela é de 10s, não 12s.',
            'Use Necro-Power ([key:RMB]) no suporte adversário para puxar os lacaios frenéticos e garantir eliminações rápidas que reabastecem lacaios e overhealth.',
          ],
        },
      ],
      mistakes: [
        'Ativar Living Abyss de frente para heróis com controle de grupo pesado: o startup inicial não tem imunidade a CC. Um stun de Thor, soco de Hulk ou investida de The Thing interrompe a habilidade no primeiro frame e deixa Gorr sem escape por 12 segundos.',
        'Subestimar o ataque básico All-Black ([key:LMB]): o combo atual causa 40/60/40/60 em até 7m, não 20/30. Ainda assim, alternar com Shadow Harvest ([key:F]) habilita Berserker Blast e quatro cortes de 8m da Shadow Scythe.',
        'Gastar as duas cargas de Black Berserker ([key:E]) no mesmo ponto sem propósito: lacaios agrupados morrem juntos com qualquer dano em área. Espalhe os lacaios em ângulos diferentes para criar rotas variadas de teleporte e maximizar o assédio cruzado.',
      ],
      evidence: [
        'balance-20261006-gorr',
        'official-gorr-hero',
        'wiki-fandom-gorr',
        'esports-gg-gorr',
        'altchar-gorr',
        'games-gg-gorr',
        'reddit-rivals-gorr',
      ],
      abilityLoop: [
        'Necro-Power',
        'Living Abyss',
        'All-Black',
        'Shadow Harvest',
        'Twilight of the Gods',
      ],
    },
  },
  sources: [
    {
      id: 'official-s10-5-gorr',
      kind: 'official',
      title: 'Marvel Rivals Version 20261009 Patch Notes — Season 10.5',
      url: 'https://www.marvelrivals.com/gameupdate/20261006/41548_1315865.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-10-06',
      confidence: 'alta',
      takeaways: [
        'Patch notes Version 20261009: ajuste de sensibilidade customizada para Shadow Harvest; não é a fonte dos deltas de balance do herói.',
        'Os deltas de balance de Gorr estão no post oficial separado Version 20261009.'
      ],
    },
    {
      id: 'balance-20261006-gorr',
      kind: 'official',
      title: 'Marvel Rivals Version 20261009 Balance Post',
      url: 'https://www.marvelrivals.com/balancepost/20261006/41667_1315864.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-10-06',
      confidence: 'alta',
      takeaways: [
        'Fonte oficial primária: Version 20261009 reduz Shadow Scythe de 55 + 2% para 50 + 2% da vida máxima, Shockwave (Berserker Blast) de 60 para 55, Twilight of the Gods de 12s para 10s e cooldown/velocidade de Living Abyss de 15s/13m/s para 12s/10m/s.',
        'Living Abyss teve recarga reduzida de 15s para 12s e velocidade reduzida de 13 m/s para 10 m/s.',
        'O post não lista mudanças nos Team-Ups do Gorr.'
      ],
    },
    {
      id: 'official-v20261029-gorr-fix',
      kind: 'official',
      title: 'Marvel Rivals Version 20261029 Patch Notes',
      url: 'https://www.marvelrivals.com/gameupdate/20261028/41548_1317925.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-10-28',
      confidence: 'alta',
      takeaways: [
        'Corrige o bug de Gorr que podia fazê-lo sair completamente dos limites do mapa ao usar Shadow Harvest imediatamente após gerar um Black Berserker. É correção de comportamento, sem alteração de balance de Gorr; não muda dano, cooldown, duração, alcance ou teclas.',
      ],
    },
    {
      id: 'official-gorr-hero',
      kind: 'official',
      title: 'Gorr — página oficial de Marvel Rivals',
      url: 'https://www.marvelrivals.com/20260911/41360_1313617.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-09-11',
      confidence: 'alta',
      takeaways: [
        'Confirma 175 Health + 175 Regenerative Shield; All-Black 40/60/40/60 em 7m; Shadow Scythe 50 + 2% Max Health e Berserker Blast 55.',
        'Living Abyss mostra 13s na ficha, valor stale superado pelo balance post posterior, que fixa 12s.',
        'O perfil lista para Ragnarök: recarga 20s, golpe de 45 em raio de 5m e Grounding de 1s; com Hela, +2m de alcance e 10 Bonus Health por uso.',
        'O perfil lista para Hive Mind: 25m, 40 de dano ao disparar e 20 ao retrair; aprimoramento com Venom de +33% de dano dos Berserkers e 30% de slow por 1s. A ficha exibe C, mas o bundle vivo traz Key_en E.',
      ],
    },
    {
      id: 'wiki-fandom-gorr',
      kind: 'database',
      title: 'Gorr — Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Gorr',
      published: '2026-09',
      confidence: 'em disputa',
      takeaways: [
        'A página lista 350 de durabilidade total; a ficha oficial atual explicita 175 Health + 175 Regenerative Shield. Cooldown/velocidade de Living Abyss do snapshot foram superados pelo balance post.',
        'All-Black 40/60/40/60, 7m; Shadow Scythe 50 + 2% Max Health; Berserker Blast 55 — valores corroborados pela página oficial atual.',
        'Necro-Power: projétil de 30, slow de 15% por 2s e dois golpes de Berserkers de 20 que lançam para cima.',
        'Black Berserker: duas cargas, recarga de 10s, 150 de vida, 7.5 de dano a cada 0.7s, alcance de 30m e limite-base de três lacaios.',
        'Shadow Harvest: recarga de 3s, seleção a até 22m, 50% da vida restante do lacaio como Bonus Health, explosão 5 + 5% Max Health em 5m e Shadow Scythe por quatro golpes/4s.',
        'Twilight of the Gods: custo 3400, duração máxima de 10s, invoca Berserkers em 10m e permite até nove; Annihilablade causa 65 + 10% Max Health, com falloff de 8m a 10m.',
        'Snapshot consultado em setembro/outubro de 2026; para números atuais e Team-Up, usar as fontes oficiais separadas, não atribuir essa confirmação ao Fandom.',
      ],
    },
    {
      id: 'esports-gg-gorr',
      kind: 'guide',
      title: 'Marvel Rivals Gorr Guide: Abilities, Combos, and Strategies — Esports.gg',
      url: 'https://esports.gg/news/marvel-rivals/marvel-rivals-gorr-guide/',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Análise de brawler: Gorr opera melhor na frontline ao lado de tanques do que como flanker puro devido ao seu hitbox largo.',
        'Recomendação enfática de pré-posicionar Berserkers em terreno alto como âncora de segurança antes de avançar.',
        'Recomendação de usar a Annihilablade contra composições com múltiplos tanques.',
      ],
    },
    {
      id: 'altchar-gorr',
      kind: 'guide',
      title: 'Marvel Rivals Season 10 Hero Overview: Gorr the God Butcher — AltChar',
      url: 'https://www.altchar.com/game-news/marvel-rivals-season-10-gorr-hero-overview/',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Detalhamento do combo Juggler: Necro-Power para Launch Up seguido de avanço de Living Abyss e finalização com Shadow Harvest.',
        'Nota sobre a mecânica de Frenzied State nos lacaios (+40% de ataque).',
      ],
    },
    {
      id: 'games-gg-gorr',
      kind: 'guide',
      title: 'Gorr Build and Strategy Guide — Games.gg',
      url: 'https://games.gg/marvel-rivals/gorr-guide/',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Recomendação do guia sobre usar Shadow Harvest com frequência pelo cooldown de 3s, condicionado a haver Berserker selecionável.',
        'Explicação da mecânica de overhealth compartilhado (teto de 50 HP) entre dano dos lacaios, Necroverse e sacrifício de lacaios.',
      ],
    },
    {
      id: 'reddit-rivals-gorr',
      kind: 'forum',
      title: 'Complete Guide to Gorr the Godbutcher — r/RivalsCollege',
      url: 'https://www.reddit.com/r/RivalsCollege/comments/1wdgdwn/complete_guide_to_gorr_the_godbutcher_in_marvel',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'O guia comunitário, acessado via snippet de busca, destaca o uso de Berserkers para habilitar combos e pressão concentrada.',
        'Consulta limitada aos trechos indexados; não atribui consenso geral nem afirma leitura integral do tópico.',
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
        'Confirma os dois Team-Ups ativos do Gorr na Temporada 10: Ragnarök (parceira Hela, tecla C) e Hive Mind (parceiro Venom, tecla E).',
        'Regra oficial: o efeito base funciona sem o parceiro; o aprimorado acende quando o parceiro entra. Key_en do bundle marca Ragnarök C e Hive Mind E; a página do herói exibe C para Hive Mind, divergência resolvida em favor do bundle.',
      ],
    },
    {
      id: 'timesaver-gorr-teamups',
      kind: 'guide',
      title: 'Marvel Rivals Gorr Guide: Abilities, Best Team-Ups & How to Climb in Season 10 — Timesaver.gg',
      url: 'https://timesaver.gg/blog/marvel-rivals-gorr-god-butcher-guide-season-10',
      published: '2026-09',
      confidence: 'media',
      takeaways: [
        'Aponta Ragnarök (Hela) como a melhor escolha para solo queue: preserva a economia de Berserkers e adiciona dano de foice com alcance.',
        'Recomenda Hive Mind (Venom) em dive coordenado, porque o slow e o dano extra nos lacaios transformam o enxame em lockdown.',
      ],
    },
    {
      id: 'turbosmurfs-gorr',
      kind: 'guide',
      title: 'How to Play Gorr in Marvel Rivals — Turbosmurfs',
      url: 'https://turbosmurfs.gg/article/how-to-play-gorr-in-marvel-rivals',
      published: '2026-09-16',
      confidence: 'media',
      takeaways: [
        'Estima cerca de 2m de alcance extra na foice e na Shadow Harvest com Ragnarök; estimativa não confirmada pelo bundle oficial, que não publica essa medida.',
        'Argumenta que o alcance decide se um Berserker vira âncora utilizável ou fica fora de alcance por pouco.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Fontes oficiais / patch notes',
      count: 5,
      status: 'Página oficial do herói, dois patch notes, balance post e bundle de Team-Up; o balance posterior prevalece sobre a ficha stale.',
    },
    {
      kind: 'database',
      label: 'Wiki & Base Pública',
      count: 1,
      status: 'Snapshot Fandom comparado com a página oficial atual e o balance post; divergências de cooldown estão rotuladas.'
    },
    {
      kind: 'guide',
      label: 'Guias Especializados',
      count: 5,
      status: 'Cinco guias especializados consultados para estratégias, combos e escolha de Team-Up; recomendação de Team-Up x win rate por opção ainda pendente.',
    },
    {
      kind: 'forum',
      label: 'Comunidade & Fóruns',
      count: 1,
      status: 'Trechos indexados de guia comunitário no Reddit; leitura integral não confirmada.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos & Transcrições',
      count: 0,
      status: 'Pendente (cobertura via guias escritos e fórum cobriu os combos)',
    },
  ],
}
