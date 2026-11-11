import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const lunaSnow: HeroGuide = {
  id: 'luna-snow',
  name: 'Luna Snow',
  aliases: ['Seol Hee', 'Lua da Neve', 'Idol de gelo', 'Luna'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/luna_snow.png'),
  bannerUrl: publicAsset('heroes/banners/luna_snow.png'),
  selectionPortraitUrl: publicAsset('heroes/select/luna_snow.png'),
  selectionHoverUrl: publicAsset('heroes/select/luna_snow_champion.gif'),
  selectionHoverFit: { scale: 1.8, x: 0, y: 6.7 },
  theme: {
    primary: '#7f5cff',
    primaryRgb: '127, 92, 255',
    secondary: '#5ce1e6',
    secondaryRgb: '92, 225, 230',
    surface: '#0c0a1f',
    surfaceRgb: '12, 10, 31',
  },
  roles: ['strategist'],
  lastVerified: '2026-11-11',
  confidenceSummary:
    'Nomes de habilidade, teclas e os dois textos de Team-Up vieram do bundle oficial teamup_a35bb0a0.js (Temporada 10), não da ficha do herói no site, que ainda descreve o Winter’s Chill antigo. Valores de dano, cura, recarga e alcance vêm da IGN e do OP.GG, que concordam entre si; a wiki.gg foi usada só para a mecânica de Smooth Skate e para o comportamento de cancelar o congelamento. Duas divergências registradas: a duração de Fate of Both Worlds aparece como 10s na wiki.gg e 12s na IGN e no OP.GG, com o balance post de 12/09/2025 mentioning nerf de duração — mantido 12s [verificar na wiki]; e a cura de Share The Stage aparece como 35% na IGN e na wiki.gg, mas como 20%/40% no marvel-rivals.net, mantido 35%. O Cryo Heart foi corrigido para 35/s pelo balance da Temporada 10 (era 30/s na wiki.gg). Win rate de dupla veio do Batru na Temporada 10 e a preferência de comunidade do rivalsteamups.com.',
  coreRead: [
    'Congele cedo e segure o meio: Absolute Zero agora congela por 1,5s, então a janela é para sair do alcance — não para punir.',
    'O congelamento é cancelável — e é isso que o torna defesa, não controle.',
    'Idol Aura multiplica a cura alheia: com [key:E] no tanque certo, cada tiro seu vira sustain de dois.',
    'Ice Arts não acerta headshot: use como substituto de [key:LMB] no meio, nunca para caçar dano crítico.',
  ],
  teamUps: {
    summary:
      'Atlas Bond (com White Fox) segue o pick no geral: a limpeza instantânea de efeitos negativos foi mantida e a raposa cura 80 e causa 45, sem o Charm removido na Season 11. O Duality Dance (com Adam Warlock) vira a escolha contra dive com mais folga, porque agora converte 35% da cura em vida própria. A medida da Temporada 10 (50,71% contra 45,79%) fica como snapshot antes do patch.',
    recommended: 'Atlas Bond',
    recommendedReason:
      'A medida da Temporada 10 tomava o Atlas Bond como verdade: 88% de preferência da comunidade, Batru com 50,71% em 36.505 partidas contra 45,79% do Duality Dance em 6.148, e a limpeza instantânea valendo sozinha contra anti-cura. O balance da Season 11 (10/11/2026) estreita a margem dos dois lados: o Spirit Fox perde o Charm e sobe de 70 para 80 de cura e de 35 para 45 de dano, o Absolute Zero cai de 2,7s para 1,5s de freeze, e o Duality Dance sobe de 25% para 35% de cura convertida em vida própria. A recomendação se mantém por enquanto, porque a limpeza continua sendo o efeito mais raro do kit, mas o Duality Dance vira a resposta mais clara contra dive. A ressalva antiga continua: medida de dupla mistura a força individual da parceira no meta, então trate os 4,9 pontos como snapshot da Temporada 10, não como mérito exclusivo da raposa.',
    options: [
      {
        name: 'Atlas Bond',
        partner: 'White Fox',
        partnerRole: 'Strategist',
        input: 'C',
        baseEffect:
          'Libera uma raposa espiritual à frente que causa dano aos inimigos no caminho e cura os aliados que ela atravessa. Ativar a habilidade limpa instantaneamente todos os efeitos negativos da Luna Snow.',
        enhancedEffect:
          'Ao formar dupla com a White Fox, a raposa espiritual volta sozinha depois de alcançar a distância máxima, e a limpeza automática é mantida.',
        bestFor:
          'Combate em objetivo e times que levam cleanse: a limpeza na ativação é o que permite manter a Luna viva contra Mantis, Adam Warlock e qualquer composição de negação de cura. Com a White Fox, a raposa cura 80 nos aliados e causa 45 nos inimigos por passagem, sem o Charm removido na Season 11. Vale sozinho, sem a White Fox no time.',
        easySetup:
          'Qualquer frontliner que tenha cleanse no time já funciona com o efeito base. Com a White Fox, a segunda ativação não é perdida.',
        iconUrl: publicAsset('teamups/luna-snow-atlas-bond-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/luna-snow-atlas-bond-partner.png'),
      },
      {
        name: 'Duality Dance',
        partner: 'Adam Warlock',
        partnerRole: 'Strategist',
        input: 'C',
        baseEffect:
          'Libera Soul Bond para acorrentar todos os personagens no alcance. Atacar inimigos acorrentados ou curar aliados acorrentados restaura sua própria vida.',
        enhancedEffect:
          'Ao formar dupla com Adam Warlock, acertar acertos críticos com Light & Dark Ice reduz as recargas de Absolute Zero e Ice Arts.',
        bestFor:
          'Dive é o caso de erro: quando alguém chega em você, acorrentar os inimigos no alcance transforma cada tiro em cura própria, agora convertendo 35% da cura em vida sua. Com o aprimorado, o crítico do [key:LMB] recarrega [key:RMB] e [key:Shift], mantendo o ciclo de controle girando.',
        easySetup:
          'Adam Warlock no time. Sem ele, a tethering continua funcionando, mas o recoil de recarga do crítico fica indisponível.',
        iconUrl: publicAsset('teamups/luna-snow-duality-dance-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/luna-snow-duality-dance-partner.png'),
      },
    ],
    sourceIds: ['teamup-bundle', 'batru-synergy-luna', 'rivalsteamups-luna', 'balance-t10', 'balance-20261113'],
  },
  systems: [
    {
      name: 'Cryo Heart',
      input: 'Passiva',
      heading: 'Toda habilidade de controle paga a própria sustentação dela',
      facts: [
        'Cryo Heart liga sozinha quando você usa Ice Arts, Absolute Zero ou o Team-Up, e entrega 35 por segundo de cura por 3 segundos. É autocura de graça: o custo real da habilidade é só a recarga.',
        'A cura do Cryo Heart não é auto-alvo. Ela só começa a contar se você não morrer nos 3 segundos seguintes, então o timing importa mais que a recarga.',
        'Ordem que maximiza a janela: Absolute Zero primeiro (o inimigo congela, você sai do alcance dele), depois Ice Arts para emendar a cura enquanto a área está limpa de pressão.',
        'Se for usar apenas uma, Absolute Zero ganha: dá 50 de dano, 50 de vida extra por inimigo atingido e te afasta do perigo no mesmo gesto.',
      ],
      meter: [
        { label: 'Nenhuma habilidade', value: 'sem cura passiva' },
        { label: 'Absolute Zero', value: '35/s por 3s' },
        { label: 'Ice Arts', value: '35/s por 3s' },
        { label: 'Team-Up [key:C]', value: '35/s por 3s' },
      ],
    },
    {
      name: 'Idol Aura',
      input: 'E',
      heading: 'A cura que você dá para os outros também cura o seu público',
      facts: [
        'Share The Stage dá Idol Aura por tempo ilimitado: o aliado marcado recebe 35% de tudo que você curar em outros. Não é buff de dano, é amplificador de sustain.',
        'A marca não tem custo de recarga — use no tanque que vai abrir o ponto, não no duelista que você quer proteger por 2 segundos.',
        'Se a Luna receber a marca em si mesma, ela ganha o bônus de dano além do efeito regular de Idol Aura. Marcar a si mesma no início de um ponto é o giro de maior teto do kit.',
        'Curar o aliado marcado diretamente aumenta a cura em 35%. Então o bônus do bônus existe: a maré sobe quando você mira direto nele em vez de atirar através dele.',
      ],
      meter: [
        { label: 'Sem marca', value: '0% extra' },
        { label: 'Aliado marcado', value: '+35% da sua cura' },
        { label: 'Cura direta no marcado', value: '+35% sobre o bônus' },
        { label: 'Luna marcada', value: 'bônus de dano' },
      ],
    },
  ],
  roleGuides: {
    strategist: {
      key: 'strategist',
      label: 'Strategist',
      nickname: 'A curadora que também causa dano',
      health: '275',
      difficulty: 'Cura e dano: sustentar duas funções com 275 de vida exige positioning constante e leitura de quando parar de atirar.',
      job: 'Manter a linha de frente viva com o mesmo disparo que fere o flanker, e controlar o meio com congelamento.',
      verdict:
        'Luna continua sendo a Strategist mais completa do jogo, mas o dado de contexto importa: 47,8% de win rate na Temporada 10 é tier D entre as Estrategistas. Ela não perde porque o kit é fraco, perde porque exige mira e posicionamento constantes. Quem escolhe ela sabe que está trocando estabilidade por teto de dano e controle.',
      playstyle: [
        'Fique a meia distância, nunca na retaguarda. O dano cai a partir de 20m e chega a 60% em 40m, então atirar de muito longe vira curativo sem dano.',
        'Congele antes de curar. Absolute Zero cria 1,5s em que ninguém te alcança e o time inteiro recupera o espaço que perdeu (era 2,7s antes da Season 11).',
        'Use Ice Arts quando o problema é sustainably dano, e Absolute Zero quando o problema é uma pessoa. Ice Arts não dá headshot, então nunca é a escolha de dano crítico.',
        'Smooth Skate liga após meio segundo de movimento contínuo e leva a 9,6 por segundo — o pulo mais alto do kit. Use para reposicionar, não para Ladrilhar fuga: não há dash, e o flanker te alcança se vir a direção.',
      ],
      priorityKicker: 'Ordem de upgrade',
      priorityTitle: 'Absolute Zero antes de Ice Arts',
      priorityDescription:
        'O congelamento é o que a Luna não tem substituto. Se o time tem um flanker de alto impacto, o primeiro investimento vai para segurar o meio.',
      abilityLoop: [
        { ability: 'Share The Stage', input: 'E' },
        { ability: 'Absolute Zero', input: 'RMB' },
        { ability: 'Ice Arts', input: 'Shift' },
        { ability: 'Light & Dark Ice', input: 'LMB' },
      ],
      upgradePlan: [
        {
          rank: 1,
          spellNumber: 1,
          input: 'E',
          ability: 'Share The Stage',
          label: 'Multiplicar a cura alheia',
          baseEffect:
            'Anexa Idol Aura a um aliado escolhido: ele passa a receber 35% de tudo que a Luna curar em outros aliados. Se a Luna se marcar, ganha também bônus de dano.',
          upgradeEffect:
            'Com o aprimorado, a cura direta no aliado marcado sobe mais 35% sobre o bônus de Idol Aura.',
          fightNote:
            'Marque o Vanguard que vai abrir o ponto. Ele puxa o foco e a sua cura indireta vira sustain de time inteiro.',
          why: 'É a única habilidade do kit que multiplica o seu dano de negação de cura sem multiplicador nenhum. Todo tiro que erra vira cura e todo tiro que acerta cura duas pessoas.',
          swapWhen:
            'Troque para o duelist que está levando dano sozinho, ou para si mesma no momento em que for abrir o ponto com a ultimate.',
          sourceIds: ['wiki-luna', 'ign-luna'],
        },
        {
          rank: 2,
          spellNumber: 2,
          input: 'RMB',
          ability: 'Absolute Zero',
          label: 'Congelar é negar a aproximação',
          baseEffect:
            'Arremessa uma bola de neve que causa 50 de dano, dá 50 de vida extra por inimigo atingido e congela um único alvo por 1,5s desde a Season 11 (era 2,7s).',
          upgradeEffect:
            'Com o aprimorado, a duração do congelamento aumenta e a chance de sobreviver ao contato dano extra de área.',
          fightNote:
            'Ataque no congelado nos últimos 2,2 segundos dele quebra o efeito. Contra alvo que dá o primeiro dano, segura o tiro — deixar o congelamento expire é mais forte.',
          why: 'Compra três segundos de espaço para o time inteiro e ainda paga 50 de dano e 50 de vida. Nenhuma outra Strategic tem essa combinação de controle e dano.',
          swapWhen:
            'Troque pelo Ice Arts quando o inimigo não está vindo para você e você precisa de dano sustentado por seis segundos.',
          sourceIds: ['wiki-luna', 'opgg-luna'],
        },
        {
          rank: 3,
          spellNumber: 3,
          input: 'Shift',
          ability: 'Ice Arts',
          label: 'Feixe que atravessa a linha',
          baseEffect:
            'Troca o disparo triplo por um único feixe perfurante com hitbox maior, durante 6 segundos. Causa 50 de dano e cura 75 por acerto, mas não acerta headshot e tem cadência menor.',
          upgradeEffect:
            'Com o aprimorado, a duração do feixe se estende e a janela para manter o time junto na área aumenta.',
          fightNote:
            'Use em corredor e em ponto de captura, não contra o duelist isolado. O feixe só vale quando atravessa mais de um inimigo ou cura mais de um aliado.',
          why: 'Cura 75 por acerto contra 20 do disparo triplo — é o triplo do sustain por janela, desde que a mira atravesse a briga.',
          swapWhen:
            'Troque para Absolute Zero quando houver um alvo único que está prestes a te alcançar, ou quando o recuo de dano estiver caro demais.',
          sourceIds: ['wiki-luna', 'ign-luna'],
        },
      ],
      adaptations: [
        'Contra Composition com anti-cura (Mantis, Adam Warlock, The Hood): o efeito base do Atlas Bond limpa os efeitos negativos na hora da ativação. Use antes da briga começar, não no meio dela.',
        'Quando o time perde: o balance da Temporada 10 colocou a cura passiva de Cryo Heart em 35 por segundo. Confie nela para atravessar a janela sem ultimate, não como substituto de ultimate.',
        'Contra dive (Spider-Man, Black Panther): congele o flanker no corredor, não o tanque na frente. Se você congelar o Vanguard de frente, o flanker passa por você sem Finder resistência.',
        'Em mapa com centro vertical (Yggdrasill path, Midtown): o Ice Arts tem cilindro de 1m de raio e 40m de altura. Ele corta a fight inteira se você ficar na rampa e rodar o feixe para cima.',
      ],
      ultimates: [
        {
          stance: 'Cura em área',
          name: 'Fate of Both Worlds',
          bestUse:
            'O ponto de captura inteiro aberto, com o time espalhado em volta do objetivo e sem flanker vivo. É a leitura de 250 por segundo com 250 de vida extra para sobreviver.',
          execution:
            'Entre no centro do grupo, segure o campo e deixe em modo cura. Só troque para dano quando o inimigo passar a entrar em vez de sair.',
          upgradeValue:
            'O upgrade deixa a alternância entre cura e bônus de 40% mais barata, o que permite mantener os dois modos sem perder a rotação de cura.',
        },
        {
          stance: 'Bônus de dano',
          name: 'Fate of Both Worlds',
          bestUse:
            'A troca de posto: quando o time precisa arrancar um ponto de alguém e o dano vem antes da cura. O bônus de 40% é o que fecha a troca de tiro.',
          execution:
            'Ative a ultimate longe do inimigo, entre no ponto e só então alterne para o modo dano. Quem está dentro do campo recebe o bônus automaticamente.',
          upgradeValue:
            'Manter o modo dano durante mais tempo antes de ter de voltar para cura é o ganho prático do upgrade nesta posture.',
        },
      ],
      dashGuide: {
        ability: 'Smooth Skate',
        shortRule:
          'Meio segundo de movimento contínuo liga o skate e leva a 9,6 por segundo com pulo mais alto. É reposicionamento, não fuga.',
        mechanics: [
          'O skate é conquistado por movimento contínuo, não por pulo: parar um instante e o bônus zera.',
          'O pulo do skate é o ponto principal. Pasar por cima de uma linha de visão dá a mesma proteção que um dash, sem o consumo de habilidade.',
          'A passiva não tem recarga e não pode ser desligada, o que significa que nunca há motivo para desligá-la de propósito.',
        ],
        drills: [
          'Circule no objective antes de começar a briga: o skate já está ligado quando o primeiro tiro vai.',
          'Use o pulo do skate para sair da linha de tiro do duelist que pulou em você, não para correr em linha reta.',
        ],
      },
      patterns: [
        {
          title: 'Congelar e curar no corredor',
          steps: [
            'Leia o flanker antes de ele aparecer: Absolute Zero no corredor de entrada, não no tanque de frente.',
            'Logo depois do congelamento, abra Ice Arts e atravesse a briga com o feixe — os 6s de duração cobrem a cura inteira.',
            'Se alguém romper a linha, marque o aliado com [key:E] e continue; a cura indireta segura o resto.',
          ],
        },
        {
          title: 'Ultimate como troca de posto',
          steps: [
            'Ative a ultimate fora de vista para o bônus de dano, e só entre no ponto depois de confirmar o campo.',
            'Mantenha o modo dano até o inimigo começar a curá-lo de verdade.',
            'Alterne para cura no instante em que o primeiro aliado do time cair abaixo de metade da vida.',
          ],
        },
        {
          title: 'Abrindo o ponto contra Composition de cleanse',
          steps: [
            'Ative o Team-Up antes de assemblear: a limpeza do Atlas Bond acontece na ativação.',
            'Depois do efeito, marque quem está na frente e segure o ritmo de [key:LMB] — é a janela mais limpa do kit.',
          ],
        },
      ],
      mistakes: [
        'Segurar o congelamento para atacar dentro dele. Atacar o congelado nos últimos 2,2 segundos quebra o controle e ainda entrega sua posição para o flanker.',
        'Usar Ice Arts contra alvo único. Sem headshot e com cadência menor, o feixe desperdiça a janela contra um inimigo só.',
        'Colocar Idol Aura no duelist quando o time ainda não tem tanque. Sem alguém recebendo dano constante, o bônus não tem em que aparecer.',
        'Ficar na retaguarda. O dano cai a partir de 20m e chega a 60% em 40m: de longe a Luna vira curativo puro e perde a metade do valor do kit.',
      ],
      evidence: [
        'Dano, alcance e recarga de Light & Dark Ice, Ice Arts, Absolute Zero, Share The Stage e Fate of Both Worlds: IGN e OP.GG (páginas de habilidade do herói).',
        'Mecânica de cancelar o congelamento e comportamento do skate: wiki.gg (Marvel Rivals Wiki).',
        'Cura passiva de Cryo Heart elevada de 30 para 35 por segundo: balance da Temporada 10 (Rivals Dex, resumo do post oficial).',
        'Win rate individual de 47,8% e win rate das duas duplas: Batru e Counterwatch, Temporada 10.',
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
      published: '2026-10-03',
      confidence: 'alta',
      takeaways: [
        'A Luna Snow aparece no bundle com enName "LUNA SNOW" e duas opções na ordem: pos0 ATLAS BOND e pos1 DUALITY DANCE.',
        'Atlas Bond: "Unleash a spirit fox forward that Charms enemies while healing any allies in its path. Activating the ability instantly cleanses all negative status effects on Luna Snow." Aprimorado: "When teaming up with White Fox, the spirit fox automatically returns after reaching its maximum distance, and the self-cleanse is retained." Key_en: "C".',
        'Duality Dance: "Cast Soul Bond to tether all characters within range. Attacking tethered enemies or healing linked allies restores your Health." Aprimorado: "When teaming up with Adam Warlock, scoring critical hits with Light & Dark Ice reduces the cooldowns of Absolute Zero and Ice Arts." Key_en: "C".',
        'As duas teclas são Key_en "C" — preenchimento de slot de Team-Up, não troca de ataque.',
        'Divergência com a ficha do herói no site: a ficha descreve Winter’s Chill (Iron Fist e Emma Frost), que não é mais uma das duas opções da temporada.',
      ],
    },
    {
      id: 'wiki-luna',
      kind: 'database',
      title: 'Luna Snow — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Luna_Snow',
      published: '2025-12-12',
      confidence: 'em disputa',
      takeaways: [
        'Smooth Skate liga após 1 segundo de movimento e aumenta a velocidade e o salto; valores detalhados de 9,6 por segundo e 0,5 segundo vieram do OP.GG.',
        'Cryo Heart: cura por 3 segundos após Ice Arts, Absolute Zero ou Team-Up, com 30 por segundo na wiki — valor superado pelo balance da Temporada 10, que levou para 35.',
        'Atacar o inimigo congelado o liberta antes da hora: é a mecânica que transforma o congelamento em defesa, não em controle de multidão.',
        'A página lista Icy Disco, Frozen Chi, Winter’s Chill e Light & Shadow Karma; o próprio texto marca os dois primeiros como indisponíveis na temporada atual.',
        'Duração de Fate of Both Worlds aparece como 10s aqui, contra 12s na IGN e no OP.GG — divergência registrada no confidenceSummary.',
      ],
    },
    {
      id: 'ign-luna',
      kind: 'guide',
      title: 'Luna Snow Character Guide — IGN',
      url: 'https://www.ign.com/wikis/marvel-rivals/Luna_Snow',
      confidence: 'alta',
      takeaways: [
        'Vida base de 275 e velocidade de movimento de 6 por segundo.',
        'Light & Dark Ice: três disparos instantâneos, 20 de dano por rodada (60 no total), queda de dano começando em 20m até 60% em 40m, cura de 20 por rodada, munição de 30, acerto crítico disponível.',
        'Ice Arts: 50 de dano e 75 de cura por rodada, cilindro de 1m de raio e 40m de altura, 6s de duração, 15s de recarga, 1,43 tiros por segundo.',
        'Absolute Zero: 50 de dano, recarga de 12s.',
        'Share The Stage: alvo selecionado, bônus de cura de 35%.',
        'Fate of Both Worlds: campo persistente ao redor da Luna, 250 por segundo de cura, bônus de dano de 40%, cura única de 200 ao aliado, 250 de escudo, 12s de duração.',
        'Nota de decisão: a IGN descreve a Luna como a Strategic mais completa do jogo, com dano e cura fora de escala e uma ultimate que quase torna o time inquebrável.',
      ],
    },
    {
      id: 'opgg-luna',
      kind: 'database',
      title: 'Luna Snow — Build e Stats no OP.GG',
      url: 'https://op.gg/marvel-rivals/heroes/1031',
      confidence: 'alta',
      takeaways: [
        'Smooth Skate: velocidade de skate de 9,6 por segundo, ligado após 0,5 segundo de movimento.',
        'Absolute Zero: projétil de 60 por segundo, 50 de dano, congela por 1,5s desde a Season 11 (era 2,7s) e o efeito é cancelado se o alvo for atacado nos últimos 2,2 segundos; dá 50 de vida bônus por inimigo atingido.',
        'Fate of Both Worlds: 5000 de custo de energia contra 4500 na IGN — divergência menor registrada, sem efeito sobre a decisão de jogo.',
        'Confirma o cilindro de Ice Arts (raio 1m, altura 40m) e a cura de 75 por rodada.',
      ],
    },
    {
      id: 'balance-20261113',
      kind: 'official',
      title: 'Marvel Rivals Version 20261113 Balance Post (oficial)',
      url: 'https://www.marvelrivals.com/balancepost/20261110/41667_1319209.html',
      published: '2026-11-10',
      confidence: 'alta',
      takeaways: [
'Luna Snow: Absolute Zero congela por 1,5s (era 2,7s).',
        'Atlas Bond com a White Fox: Spirit Fox não aplica mais Charm; cura em aliada sobe de 70 para 80, dano em inimiga de 35 para 45.',
        'Duality Dance com o Adam Warlock: a proporção de cura convertida em vida própria sobe de 25% para 35%.',
      ],
    },
    {
      id: 'balance-t10',
      kind: 'official',
      title: 'Balance da Temporada 10 — resumo das mudanças por herói (Rivals Dex)',
      url: 'https://rivalsdex.com/patch-notes',
      published: '2026-09-11',
      confidence: 'alta',
      takeaways: [
        'Luna Snow aparece como "Adjusted": a autocura de Cryo Heart subiu de 30 por segundo para 35 por segundo.',
        'Nenhum dos dois Team-Ups da Luna foi tocado na Temporada 10 — os dois mexidos foram Frozen Haven (Cloak & Dagger, duração do escudo de gelo de 2,5s para 2s) e Frozen Spawn (Elsa Bloodstone, 15% de slow por 1s no lugar do Monstro Spawn), ambos com a Luna como âncora.',
        'Contexto de meta: a Temporada 10 é a que_neighbors a Luna aparece em tier D de Strategist com 47,8% de win rate.',
      ],
    },
    {
      id: 'batru-synergy-luna',
      kind: 'database',
      title: 'Luna Snow — Synergy (Season 10) no Batru',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/luna-snow',
      published: '2026-10-03',
      confidence: 'alta',
      takeaways: [
        'Win rate individual de 47,96% com 36,74% de taxa de escolha em 221.451 partidas.',
        'Atlas Bond com White Fox: 50,71% de win rate da dupla em 36.505 partidas.',
        'Duality Dance com Adam Warlock: 45,79% de win rate da dupla em 6.148 partidas.',
        'Adam Warlock aparece entre os piores parceiros da Luna (45,79%, −2,2 pp), o que reforça que a medição da dupla carrega a força individual do parceiro.',
        'Melhores parceiros: Peni Parker (58,87%), Devil Dinosaur (57,42%) e Storm (55,52%) — todos frontliners que criam a janela para a Luna.',
      ],
    },
    {
      id: 'rivalsteamups-luna',
      kind: 'forum',
      title: 'Best Luna Snow Team-Ups — rivalsteamups.com (leitura de snippet)',
      url: 'https://rivalsteamups.com/heroes/luna-snow',
      confidence: 'media',
      takeaways: [
        'Comunidade com 109 votos dá 88% de preferência para Atlas Bond, com 83 votos de vantagemm sobre Duality Dance.',
        'O texto descreve Atlas Bond como a rota que combina utilidade de time e sobrevivência, e Duality Dance como a opção de teto com recoil de recarga no crítico.',
        'Leitura de snippet de busca — a página tem versão S9.5 e S10 com números diferentes; o número de votos é da versão indexada.',
        'O mesmo site mostra, para a Luna como âncora, Frozen Haven em 47% de preferência e Chilling Charisma em 8%, o que indica que as opções dela própria e as de parceira são Stark Dawn medidas separadamente.',
      ],
    },
    {
      id: 'marvelrivalsgg-duality',
      kind: 'guide',
      title: 'Duality Dance — marvelrivals.gg (leitura de snippet)',
      url: 'https://marvelrivals.gg/duality-dance',
      author: 'Madian Madian',
      published: '2026-03-18',
      confidence: 'media',
      takeaways: [
        'O guia posiciona o Duality Dance como anti-dive: o momento ideal de ativação é quando a Luna está sendo abordada por flanker como Black Panther ou Spider-Man.',
        'O mesmo argumento é que a habilidade exige que a Luna ataque, o que conflita com o papel de cura em team fight — por isso não é a escolha padrão.',
        'Contramedida citada: Blade reduz a cura da Luna o bastante para quebrar a leitura, e Emma Frost pode fazer o agarrão com a habilidade ativa.',
        'A página afirma que o Team-Up foi removido na Season 7, enquanto o bundle oficial da Temporada 10 o mantém como opção da Luna — a versão do bundle é a que vale.',
      ],
    },
    {
      id: 'counterwatch-luna',
      kind: 'database',
      title: 'Strategist Tier List Season 10 — Counterwatch',
      url: 'https://www.counterwatch.gg/stats/marvel-rivals/tier-list/strategist',
      published: '2026-09-21',
      confidence: 'alta',
      takeaways: [
        'Luna Snow em tier D entre as Strategist, com 47,8% de win rate e 21% de taxa de escolha.',
        'Mantis 56,2%, Ultron 54,4% e Rocket Raccoon 52,8% lideram — as três combinam negação de cura ou dano alto com mais estabilidade que a Luna.',
        'A leitura da base é que a ordem muda dentro da temporada por causa do balance quinzenal do estúdio.',
      ],
    },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 3, status: 'bundle de Team-Up da Temporada 10 e balances da Temporada 10 e Season 11' },
    { kind: 'database', label: 'Wiki e base de dados', count: 4, status: 'wiki.gg (mecânica), IGN e OP.GG (valores), Batru e Counterwatch (meta)' },
    { kind: 'guide', label: 'Guias escritos', count: 2, status: 'IGN e marvelrivals.gg; números vieram das páginas de habilidade' },
    { kind: 'forum', label: 'Fórum e comunidade', count: 1, status: 'rivalsteamups.com lido por snippet; Reddit bloqueia leitura integral' },
    { kind: 'video-transcript', label: 'Vídeo e transcrição', count: 0, status: 'pendente: nenhum vídeo com transcrição auditável localizado nesta sessão' },
  ],
}