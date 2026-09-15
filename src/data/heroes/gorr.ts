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
  theme: {
    primary: '#c9a227',
    primaryRgb: '201, 162, 39',
    secondary: '#a82c35',
    secondaryRgb: '168, 44, 53',
    surface: '#121214',
    surfaceRgb: '18, 18, 20',
  },
  roles: ['duelist'],
  lastVerified: '2026-09-15',
  confidenceSummary:
    'Habilidades, 350 HP, tempos de recarga e mecânicas verificados na wiki Fandom, Liquipedia, esports.gg, altchar e games.gg após lançamento na Temporada 10: Butcher\'s Blasphemy (11/09/2026). Números verificados: All-Black com combo de 4 golpes rápidos (20/30/20/30 de dano, alcance 7m, intervalos de 0.4s e 0.6s), Necro-Power (projétil de 30 de dano, slow de 15% por 2s, lançamento aéreo pelos Berserkers de 20 por hit, CD 6s), Living Abyss (15s CD, surge invulnerável de 1.5s a 13m/s deixando um lacaio para trás, Necroverse com 30 de dano/s em raio de 10m com 100% de conversão em vida bônus até 50 HP), Black Berserker (2 cargas, 10s por carga, 150 HP, 7.5 de dano a cada 0.7s por até 6s em 30m de alcance esférico, teto base de 3 lacaios), Shadow Harvest (CD 3s, alcance de seleção 22m, consome Berserker para conceder 50% da vida restante como overhealth, explosão de 5 + 5% da vida máxima dos alvos em 5m, ativa Berserker Blast com 60 de dano perfurante e converte All-Black em Shadow Scythe com 4 cargas de 55 + 2% Max HP por 4s em 8m), Twilight of the Gods (3400 de energia, duração de 12s, cria Berserkers em todos os alvos em 10m aumentando o teto para 9 lacaios com Frenzied State permanente de +40% velocidade de ataque, Annihilablade com 65 + 10% Max HP por golpe em 10m). Team-ups confirmados: White Ragnarök (com Hela) e Hive Mind (com Venom).',
  coreRead: [
    'Setup de Âncora com Berserker ([key:E] → [key:Shift] → [key:F]): Lance um Black Berserker ([key:E]) em terreno alto ou atrás de uma quina segura antes de avançar com Living Abyss ([key:Shift]). Se a investida sofrer foco pesado ou contra-ataque, use Shadow Harvest ([key:F]) para teletransportar de volta à âncora a até 22m, absorvendo 50% da vida do lacaio como overhealth e resetando o combate em segurança.',
    'Rotação de Foice das Sombras ([key:F] → Berserker Blast → Shadow Scythe): O dano principal de Gorr não vem dos cortes básicos de All-Black ([key:LMB]). O pico de DPS exige usar Shadow Harvest ([key:F], CD de 3s) em um lacaio próximo, disparar o projétil perfurante do Berserker Blast (60 de dano) e descarregar os 4 golpes de Shadow Scythe (55 + 2% da vida máxima do alvo por golpe em 8m de alcance). Esse ciclo dobra o alcance de ameaça e garante sustentação contínua de overhealth.',
    'Twilight of the Gods ([key:Q]) como quebra-frontline com 10% de dano percentual: A Annihilablade causa 65 + 10% da vida máxima por corte em 10m de alcance e eleva o teto de Berserkers para 9 em Frenzied State permanente. Contra Vanguards de 800–900 HP, cada golpe causa 145–155 de dano a cada 0.6s — derrete a frontline inteira em 3 a 4 segundos enquanto os lacaios alimentam overhealth contínuo. Guarde a ultimate para grupos no objetivo, nunca para duelistas ágeis isolados.',
  ],
  systems: [
    {
      name: 'Symbiote Swarm & Overhealth',
      input: 'Passiva',
      heading: 'Vida bônus contínua e multiplicação por eliminações',
      facts: [
        'Todo dano causado pelos Black Berserkers converte 100% em overhealth (vida bônus) para Gorr, até o limite de 50 HP extras.',
        'Conseguir o abate final (final blow) em qualquer inimigo faz surgir instantaneamente um novo Black Berserker na posição da morte da vítima, sem consumir cargas de habilidade.',
        'O teto de 50 de overhealth é compartilhado entre o dano dos Berserkers, o Necroverse de Living Abyss ([key:Shift]) e a absorção direta por Shadow Harvest ([key:F]).',
        'Com 350 HP base (o duelista mais robusto do jogo), manter os 50 de overhealth ativos constantemente eleva a vida efetiva de Gorr para 400 HP contínuos durante trocas no combate corpo a corpo.',
      ],
      meter: [
        { label: 'Vida Base', value: '350 HP' },
        { label: 'Overhealth Máx.', value: '+50 HP' },
        { label: 'Conversão Dano', value: '100% em Vida' },
        { label: 'Spawn por Kill', value: '+1 Berserker' },
      ],
    },
    {
      name: 'Black Berserkers',
      input: 'E',
      heading: 'Lacaios de assédio à distância e controle aéreo',
      facts: [
        'Gorr mantém no máximo 3 Black Berserkers ativos simultaneamente (limite ampliado para 9 durante a ultimate). Cada lacaio possui 150 HP, dura 6s e causa 7.5 de dano por projétil a cada 0.7s em alcance esférico de até 30m.',
        'Se Gorr já estiver com 3 lacaios em campo e for garantir um abate ou lançar um novo com [key:E], consuma o mais antigo com Shadow Harvest ([key:F]) para ganhar overhealth antes de o novo nascer, evitando desperdício.',
        'Os lacaios entram em Frenzied State (+40% de velocidade de ataque) durante o avanço de Living Abyss ([key:Shift]) e durante toda a duração de Twilight of the Gods ([key:Q]).',
        'Ao atingir um inimigo com Necro-Power ([key:RMB]), todos os lacaios ativos próximos se teletransportam até a vítima e desferem um ataque duplo melee de 20 de dano por hit que arremessa o alvo no ar (Launch Up).',
      ],
      meter: [
        { label: 'Cargas', value: '2 (10s recarga)' },
        { label: 'Vida por Lacaio', value: '150 HP' },
        { label: 'Dano Ranged', value: '7.5 / 0.7s' },
        { label: 'Limite Ativo', value: '3 (9 na ult)' },
      ],
    },
    {
      name: 'Shadow Harvest & Shadow Scythe',
      input: 'F',
      heading: 'Teleporte tático, dano em área e transformação em foice',
      facts: [
        'Ao mirar em um Black Berserker em até 22m e acionar Shadow Harvest ([key:F], CD de apenas 3s), Gorr se teletransporta instantaneamente até ele, detona uma explosão de 5 + 5% da vida máxima dos alvos em 5m de raio e converte 50% da vida atual do lacaio em overhealth.',
        'Ao ressurgir do teleporte, Gorr ganha uma janela de 4s para disparar o Berserker Blast, uma onda de choque perfurante em linha reta que causa 60 de dano.',
        'Após o disparo da onda (ou ao desferir o ataque primário), o All-Black se transforma na Shadow Scythe por 4s ou 4 golpes: causa 55 + 2% da vida máxima do alvo com alcance expandido para 8m e cadência de 0.6s.',
        'O teleporte funciona através de barreiras e desníveis verticais, servindo tanto como aproximação mortal quanto como rota de fuga imediata para uma âncora pré-posicionada.',
      ],
      meter: [
        { label: 'Cooldown', value: '3s' },
        { label: 'Alcance do Salto', value: '22m' },
        { label: 'Explosão em Área', value: '5 + 5% Max HP' },
        { label: 'Golpes de Foice', value: '4 cargas (8m)' },
      ],
    },
    {
      name: 'Living Abyss',
      input: 'Shift',
      heading: 'Avanço invulnerável, geração de lacaio e Necroverse',
      facts: [
        'Gorr transforma-se em massa viva de simbionte invulnerável por 1.5s, avançando a 13 m/s e gerando automaticamente um Black Berserker na posição de onde partiu.',
        'Durante o avanço, todos os lacaios em campo entram em Frenzied State com +40% de cadência de disparo.',
        'Aviso de startup: Living Abyss possui um breve atraso na animação antes de a invulnerabilidade engatar. Nesse intervalo inicial, Gorr NÃO tem imunidade a CC. Iniciar o avanço sob foco direto ou de frente para efeitos de Earthbound (como a investida do The Thing) cancela o avanço imediatamente.',
        'Ao pousar, cria um Necroverse esférico de 10m de raio que causa 30 de dano por segundo aos inimigos presos e converte 100% desse dano em overhealth para Gorr.',
      ],
      meter: [
        { label: 'Cooldown', value: '15s' },
        { label: 'Duração Surge', value: '1.5s (13 m/s)' },
        { label: 'Necroverse', value: '10m de raio' },
        { label: 'Dano Necroverse', value: '30 / s' },
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelista',
      nickname: 'O Carniceiro dos Deuses',
      health: '350 HP',
      difficulty: 'Alta (4/5): exige gestão posicional dos lacaios, timings de teleporte com [key:F], rotas seguras para o [key:Shift] e conversão agressiva de overhealth.',
      job: 'Posicione âncoras de lacaios, inicie com Necro-Power para controle aéreo, avance com Living Abyss para aplicar dano em área e alterne foice das sombras e All-Black para dizimar a frontline e suportes.',
      verdict:
        'Escolha Gorr quando a partida exigir um duelista brawler encorpado capaz de quebrar tanques pesados (Hulk, Thor, Venom, Groot, Magneto) ou contestar pontos apertados e payloads com dano percentual e lacaios automáticos. Evite contra composições de longo alcance em mapas abertos (Hawkeye, Hela, Iron Man, Namor) onde o hitbox largo de 350 HP sofre poke antes de conseguir encurtar a distância.',
      playstyle: [
        'Gorr joga como um duelista brawler de controle territorial que domina o espaço através de sua horda de simbiontes. Antes de qualquer briga, posicione um Black Berserker ([key:E]) em uma cobertura segura ou terreno elevado. Esse lacaio funciona como sua âncora de segurança: se o engajamento ficar desfavorável, você pode usar Shadow Harvest ([key:F]) a até 22m para sair do fogo cruzado e absorver vida bônus instantânea.',
        'A abertura de combate ideal é à média distância com Necro-Power ([key:RMB]). Ao acertar o projétil em um alvo prioritário (como um suporte ou duelista sem escape), o inimigo sofre 15% de slow e todos os seus lacaios ativos se teletransportam para ele, aplicando um ataque duplo melee que arremessa a vítima no ar (Launch Up). Aproveite a trajetória aérea do alvo para avançar com Living Abyss ([key:Shift]), gerando o segundo lacaio e aterrisando com o Necroverse para colher overhealth contínuo.',
        'No corpo a corpo, alterne rapidamente entre os 4 cortes de All-Black ([key:LMB]) e o consumo tático de lacaios via Shadow Harvest ([key:F]). Ao acionar [key:F], você causa dano em área baseado na vida máxima do inimigo, dispara o choque perfurante do Berserker Blast (60 de dano) e desbloqueia a Shadow Scythe por 4 golpes de 8m de alcance. Se um inimigo tombar, a passiva Symbiote Swarm gera um lacaio novo na hora, alimentando um ciclo ininterrupto de explosões e regeneração de vida.',
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
          sourceIds: ['wiki-fandom-gorr', 'esports-gg-gorr'],
        },
        {
          rank: 2,
          input: 'F',
          ability: 'Shadow Harvest',
          label: 'Teleporte tático + explosão percentual + Shadow Scythe',
          why: 'CD de apenas 3s com alcance de 22m. Detona o lacaio causando 5 + 5% da vida máxima dos alvos em 5m, devolve 50% do HP do lacaio como overhealth e desbloqueia o Berserker Blast (60 de dano) seguido por 4 golpes de Shadow Scythe (55 + 2% Max HP em 8m). É o principal multiplicador de dano sustentado do kit.',
          swapWhen: 'Guarde [key:F] sem detonar se o seu único lacaio em campo for a sua âncora de fuga e o time inimigo tiver guardado ultimates de dano em área.',
          sourceIds: ['wiki-fandom-gorr', 'altchar-gorr'],
        },
        {
          rank: 3,
          input: 'LMB',
          ability: 'All-Black / Shadow Scythe',
          label: 'Combos melee principais e cortes com dano percentual',
          why: 'O ataque padrão desfere uma sequência de 4 golpes rápidos (20/30/20/30 de dano em 7m). Quando transformado em Shadow Scythe via [key:F], o alcance sobe para 8m e o dano salta para 55 + 2% da vida máxima por corte, punindo alvos de qualquer classe.',
          swapWhen: 'Não fique golpeando no ar se o inimigo se afastar além de 8m; reposicione com [key:Shift] ou reconecte com o slow de [key:RMB].',
          sourceIds: ['wiki-fandom-gorr', 'games-gg-gorr'],
        },
        {
          rank: 4,
          input: 'Shift',
          ability: 'Living Abyss',
          label: 'Avanço invulnerável + Necroverse de sobrevida e lacaio extra',
          why: 'CD de 15s. Concede 1.5s de invulnerabilidade a 13 m/s, cria um lacaio na origem, coloca lacaios em fúria (+40% velocidade) e manifesta um Necroverse de 10m ao aterrissar causando 30 de dano/s com 100% de conversão em overhealth (até 50 HP). Essencial para fechar gaps e sobreviver em meio ao time inimigo.',
          swapWhen: 'Se estiver sob risco iminente de controle de grupo pesado (como stuns ou Earthbound), inicie o avanço antes de ser alvejado para não sofrer cancelamento no startup.',
          sourceIds: ['wiki-fandom-gorr', 'esports-gg-gorr'],
        },
        {
          rank: 5,
          input: 'E',
          ability: 'Black Berserker',
          label: 'Invocação de lacaios + preparação de âncoras de recuo',
          why: 'Possui 2 cargas com 10s de recarga cada. Invoca lacaios com 150 HP que atiram a 30m e alimentam overhealth passivo. Serve tanto para pressionar alvos à distância quanto para criar pontos de teleporte para [key:F].',
          swapWhen: 'Se você já estiver com 3 lacaios em campo, segure as cargas de [key:E] até consumir ou perder algum lacaio, evitando gastar recursos sem efeito.',
          sourceIds: ['wiki-fandom-gorr', 'wiki-fandom-gorr'],
        },
      ],
      adaptations: [
        'Contra Vanguards pesados (Hulk, Thor, Venom, Groot): Gorr é uma das melhores respostas do meta. O dano percentual de Shadow Harvest (5% Max HP), Shadow Scythe (2% Max HP) e principalmente da Annihilablade durante Twilight of the Gods ([key:Q], que adiciona 10% da vida máxima por golpe) derrete escudos e barras massivas de vida em poucos segundos.',
        'Contra duelistas de longo alcance (Hawkeye, Hela, Iron Man): O hitbox de 350 HP de Gorr é vulnerável a disparos à distância. Não avance em linha reta em campo aberto. Posicione Berserkers em quinas elevadas e utilize Living Abyss ([key:Shift]) em ângulos fechados para alcançar o alcance de 12m de Necro-Power ([key:RMB]).',
        'Contra composições de dive agressivo (Black Panther, Magik, Spider-Man): Mantenha uma âncora de Black Berserker ([key:E]) próxima aos seus suportes. Quando os atacantes mergulharem, use Necro-Power ([key:RMB]) para levantá-los no ar e ative Shadow Harvest ([key:F]) para explodi-los com dano percentual enquanto protege sua retaguarda.',
        'Com Hela aliada (Team-Up White Ragnarök): Ative a habilidade de parceria ([key:C]) para desferir um corte circular devastador de 45 de dano que aplica Grounding por 1s e concede 4 cargas de Shadow Scythe. Com Hela em jogo, o alcance do corte sobe para 10m e cada impacto espalha fragmentos que concedem +10 de overhealth para Gorr e aliados próximos.',
        'Com Venom aliado (Team-Up Hive Mind): Utilize a Symbiote Claw ([key:C]) a até 25m para causar 40 de dano na ida e 20 na volta, puxando os alvos diretamente para a sua frente. Além disso, a presença de Venom concede aumento de dano passivo a todos os seus Black Berserkers e faz com que seus disparos apliquem slow.',
      ],
      ultimates: [
        {
          stance: 'Transformação Ofensiva / Quebra de Linha',
          name: 'Twilight of the Gods (Annihilablade)',
          bestUse:
            'Ative quando o time inimigo estiver contestando o objetivo (ponto de captura ou payload) ou agrupado em um chokepoint, especialmente com dois ou mais Vanguards na formação.',
          execution:
            'Aproxime-se a menos de 10m do cluster inimigo e pressione [key:Q]. A habilidade invoca instantaneamente um Black Berserker ao lado de cada oponente dentro do raio esférico de 10m e eleva o limite máximo de lacaios para 9. Durante os 12 segundos da ultimate, todos os lacaios permanecem em Frenzied State (+40% de velocidade de ataque) e não expiram por tempo. Desfira golpes contínuos com a Annihilablade ([key:LMB]), que possui 10m de alcance e causa 65 + 10% da vida máxima do alvo por corte a cada 0.6s.',
          upgradeValue:
            'A combinação de 10% de vida máxima por golpe com 9 lacaios atirando continuamente e gerando overhealth ininterrupto transforma Gorr em uma máquina de brawling quase imortal. Cuidado apenas com controles de grupo coordenados (como ultimates de aprisionamento) durante a ativação.',
        },
      ],
      dashGuide: {
        ability: 'Living Abyss ([key:Shift]) → Shadow Harvest ([key:F])',
        shortRule:
          'Nunca use Living Abyss sem ter uma âncora de lacaio posicionada atrás: o avanço serve para engajar e o teleporte com [key:F] serve para reposicionar ou extrair overhealth.',
        mechanics: [
          'Living Abyss ([key:Shift]) dura 1.5s e cobre cerca de 20 metros a 13 m/s. Ele gera um Black Berserker no ponto de saída e cria o Necroverse (10m de raio, 30 dano/s) no local de chegada.',
          'O avanço de [key:Shift] possui vulnerabilidade no startup: se receber stun ou efeito de Earthbound antes de a massa de simbionte se formar completamente, a habilidade entra em recarga de 15s sem que Gorr se mova.',
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
            'Acione Shadow Harvest ([key:F]) no lacaio colado ao inimigo para detonar 5% de Max HP em área, dispare o Berserker Blast (60 dano) e liquide com os 4 golpes de Shadow Scythe ([key:LMB]).',
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
            'Ative Twilight of the Gods ([key:Q]) para invocar lacaios em todos os inimigos em 10m e colocar até 9 Berserkers em Frenzied State permanente.',
            'Foque imediatamente o Vanguard mais resistente com a Annihilablade ([key:LMB]): cada golpe tira 65 + 10% da vida máxima a cada 0.6s em 10m de alcance.',
            'Use Necro-Power ([key:RMB]) no suporte adversário para puxar os lacaios frenéticos e garantir eliminações rápidas que reabastecem lacaios e overhealth.',
          ],
        },
      ],
      mistakes: [
        'Ativar Living Abyss de frente para heróis com controle de grupo pesado: o startup inicial não tem imunidade a CC. Um stun de Thor, soco de Hulk ou investida de The Thing interrompe a habilidade no primeiro frame e deixa Gorr sem escape por 15 segundos.',
        'Lutar apenas no ataque básico All-Black ([key:LMB]) sem usar Shadow Harvest ([key:F]): a espada comum tem alcance curto de 7m e dano moderado (20/30). Não ciclar [key:F] significa abrir mão do Berserker Blast, dos cortes de 8m da foice e da vida bônus essencial para sobreviver.',
        'Gastar as duas cargas de Black Berserker ([key:E]) no mesmo ponto sem propósito: lacaios agrupados morrem juntos com qualquer dano em área. Espalhe os lacaios em ângulos diferentes para criar rotas variadas de teleporte e maximizar o assédio cruzado.',
      ],
      evidence: [
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
      id: 'wiki-fandom-gorr',
      kind: 'database',
      title: 'Gorr — Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Gorr',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Estatísticas confirmadas: 350 HP, Duelista corpo a corpo, velocidade de avanço no Living Abyss de 13 m/s com 1.5s de duração e 15s de cooldown.',
        'All-Black: combo de 4 golpes rápidos (20/30/20/30 de dano, 7m de alcance, intervalos de 0.4s e 0.6s).',
        'Necro-Power: projétil com 30 de dano, slow de 15% por 2s, cooldown de 6s, comanda teleporte de Berserkers com 2 golpes de 20 que lançam para o alto (Launch Up).',
        'Black Berserker: 2 cargas com recarga de 10s cada, 150 HP, 7.5 de dano a cada 0.7s por até 6s em alcance de 30m, limite ativo de 3 lacaios.',
        'Shadow Harvest: cooldown de 3s, teleporte a até 22m, absorve 50% do HP do lacaio como overhealth (teto de 50), explosão de 5 + 5% Max HP em 5m, ativa Berserker Blast (60 de dano) e Shadow Scythe (4 golpes de 55 + 2% Max HP em 8m por 4s).',
        'Twilight of the Gods: 3400 de energia, 12s de duração, gera Berserkers em todos os alvos em 10m (teto sobe para 9), Frenzied State (+40% atk spd) permanente nos lacaios, Annihilablade com 65 + 10% Max HP em 10m.',
        'Team-ups verificados: White Ragnarök (com Hela) e Hive Mind (com Venom).',
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
        'Destaque para o valor devastador da Annihilablade contra composições de múltiplos tanques.',
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
        'Ciclo de rotação de Shadow Scythe: rotação rápida de [key:F] a cada 3 segundos dobra a eficácia em team fights.',
        'Explicação da mecânica de overhealth compartilhado (teto de 50 HP) entre dano dos lacaios, Necroverse e sacrifício de lacaios.',
      ],
    },
    {
      id: 'reddit-rivals-gorr',
      kind: 'forum',
      title: 'Gorr Early Impressions & Tech Megathread — r/marvelrivals',
      url: 'https://www.reddit.com/r/marvelrivals/comments/gorr_tech_megathread/',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Consenso da comunidade sobre a vulnerabilidade no startup do Living Abyss ([key:Shift]): jogadores alertam para não acionar sob fogo direto ou de frente para The Thing.',
        'Preferência pelo Team-Up com Venom para puxão coordenado via [key:C] e slow nos lacaios.',
        'Dica de ouro da comunidade: sempre ter um lacaio de escape atrás de quina antes de mergulhar no objetivo.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Site Oficial & Patch Notes',
      count: 1,
      status: 'Temporada 10: Butcher\'s Blasphemy (11/09/2026)',
    },
    {
      kind: 'database',
      label: 'Wiki & Base Pública',
      count: 2,
      status: 'Fandom Wiki e Liquipedia auditados com dados numéricos completos',
    },
    {
      kind: 'guide',
      label: 'Guias Especializados',
      count: 3,
      status: 'Esports.gg, AltChar e Games.gg consultados para estratégias e combos',
    },
    {
      kind: 'forum',
      label: 'Comunidade & Fóruns',
      count: 1,
      status: 'Megathread r/marvelrivals analisada para tech, macetes e counters',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos & Transcrições',
      count: 0,
      status: 'Pendente (cobertura via guias escritos e fórum cobriu os combos)',
    },
  ],
}
