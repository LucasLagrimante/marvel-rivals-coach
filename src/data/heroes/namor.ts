import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const namor: HeroGuide = {
  id: 'namor',
  name: 'Namor',
  aliases: ['Rei dos Mares', 'Namor o Submarino', 'King of the Seas', 'Rei de Atlântida'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/namor.png'),
  bannerUrl: publicAsset('heroes/banners/namor.png'),
  selectionPortraitUrl: publicAsset('heroes/select/namor.png'),
  selectionHoverUrl: publicAsset('heroes/select/namor_champion.gif'),
  selectionHoverFit: { scale: 1.15, x: 0, y: 3 },
  theme: {
    primary: '#1fb6c9',
    primaryRgb: '31, 182, 201',
    secondary: '#f5c451',
    secondaryRgb: '245, 196, 81',
    surface: '#04141c',
    surfaceRgb: '4, 20, 28',
  },
  roles: ['duelist'],
  lastVerified: '2026-10-04',
  confidenceSummary:
    'O papel Duelist, a vida de 250 e os números de dano, cadência, duração e recarga vêm da wiki.gg, que é a única página do herói lida nesta sessão com a infobox e a tabela de habilidades preenchidas. Os dois Team-Ups não vêm da ficha do herói: vêm do bundle oficial de Team-Up, e os dois textos foram lidos no texto original em inglês e traduzidos aqui. Isso importa porque a própria wiki.gg marca o Gamma Monstro como indisponível na temporada atual e descreve a ativação com o nome antigo, Gamma Charge, que não bate com o nome do bundle. A divergência ficou registrada em vez de escondida. Três pontos merecem aviso. Primeiro, a Chilling Charisma aparece na wiki.gg como Frozen Spawn, com um Monstro gelado mais resistente, enquanto o bundle atual descreve uma habilidade nova, a Frost Tide, que avança, empurra e reduz a velocidade: não é a mesma mecânica, e o guia segue o bundle. Segundo, a wiki.gg cita um terceiro Team-Up, Tidal Dirge com Hela, que o bundle atual não lista entre as opções do Namor, então ele não entrou no guia. Terceiro, a passiva Tide Fall é quantitativamente opaca: a wiki.gg diz apenas que o Namor cai lentamente no ar thanks às penas dos pés, sem número de velocidade, teto ou duração, e nenhuma outra fonte foi localizada, então a passiva é descrita por efeito e não por número. Nenhuma win rate ou taxa de escolha entrou no texto: não há base meta do Namor lida nesta sessão, e a recomendação entre os dois Team-Ups foi tomada por mecânica, não por métrica.',
  coreRead: [
    'O Namor não é um Duelist que atira: é um Duelist que instala. O dano dele mora nos Monstros, e o tridente existe para ligar os Monstros no inimigo certo.',
    'A passiva é o kit inteiro de posicionamento: a queda lenta é o que permite atravessar o campo de visão de uma Strategist sem dar o flanco de graça.',
    'Os Monstros grudam em parede e teto. A linha de visão que o inimigo espera não é a linha que os Monstros usam.',
    'A Blessing of The Deep parece defesa e é mobilidade: 3s sem atacar em que você não pode ser derrubado nem impedido de sair.',
  ],
  teamUps: {
    summary:
      'Gamma Monstro (com Hulk) é a escolha no geral, porque não troca o que você faz: adiciona um quarto Monstro que não cessa o fogo, com o Wrath of The Seven Seas virando um disparo de feixe sob comando. Chilling Charisma (com Luna Snow) é a escolha de controle, porque entrega uma habilidade nova de área com empurrão e lentidão, mas ela ocupa um slot de tecla e depende de você ter a ultimate dela carregada.',
    recommended: 'Gamma Monstro',
    recommendedReason:
      'O Gamma Monstro é o único dos dois que melhora a fonte principal de dano do Namor. Os Monstros normais atiram em hitscan a 2 tiros por segundo, ficam 8 segundos e morrem com 100 de vida; o Gamma Monstro faz 60 de dano por segundo de forma contínua, aguenta 200 de vida e dura 10 segundos, com 15 segundos de recarga. Você continua fazendo a mesma coisa, só que com um Monstro que não cessa. E o aprimoramento com Hulk é o que fecha o circuito: a Blessing of The Deep deixa de ser só uma esfera de proteção e vira uma barreira de água com energia gama dentro da qual o Gamma Monstro recarrega mais rápido e ganha aumento de dano. Na prática isso é uma peça de artilharia de dano posicionada, e ela se liga ao seu Wrath of The Seven Seas, porque acertar um inimigo com ele faz o Gamma Monstro disparar um feixe poderoso naquele alvo. Chilling Charisma é melhor na frente, não no flanco: a Frost Tide empurra e reduz a velocidade, o que resolve o problema oposto, o de alguém te alcançando. Se o seu time já tem controle suficiente para segurar o dive, o dano contínuo do Gamma Monstro vale mais do que mais uma onda.',
    options: [
      {
        name: 'Gamma Monstro',
        partner: 'Hulk',
        partnerRole: 'Vanguard',
        input: 'C',
        baseEffect:
          'Invoca um Monstro Gama extra que causa dano contínuo no inimigo mais próximo. Ao acertar acertos críticos, o Monstro Gama ganha aumento de velocidade de ataque. Acertar um inimigo com o Wrath of The Seven Seas faz o Monstro Gama disparar um feixe poderoso.',
        enhancedEffect:
          'Com Hulk no time, usar a Blessing of The Deep cria uma barreira de água com energia gama. Ficar dentro dela acelera a recarga do Monstro Gama e concede aumento de dano a ele.',
        bestFor:
          'Briga de zona em espaço fechado, onde os Monstros podem cobrir o teto e a parede atrás do seu Vanguard e continuar atirando por 10 segundos. É a escolha para quando o seu problema não é sobreviver ao dive, e sim convertir o tempo de ponta em dano contínuo. Funciona sozinho: o Monstro Gama extra já sustenta a escolha mesmo sem Hulk no time.',
        easySetup:
          'Qualquer Vanguard serve para o efeito base. Com Hulk, a barreira gama transforma a Blessing of The Deep de 3 segundos de invulnerabilidade absoluta em 3 segundos que também recarregam e amplificam o Monstro Gama.',
        iconUrl: publicAsset('teamups/namor-gamma-monstro-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/namor-gamma-monstro-partner.png'),
      },
      {
        name: 'Chilling Charisma',
        partner: 'Luna Snow',
        partnerRole: 'Strategist',
        input: 'C',
        baseEffect:
          'Concede uma nova habilidade que invoca uma Maré de Gelo para a frente. A onda causa dano, empurra para longe e inflige lentidão em todos os inimigos atingidos.',
        enhancedEffect:
          'Com Luna Snow no time, a Maré de Gelo ganha 1 carga e desaba ao alcançar o alcance máximo, causando dano em área e reduzindo a velocidade dos inimigos Nears do ponto final.',
        bestFor:
          'Defesa de ponto e dispersão de grupo, quando o inimigo entra em bloco e o seu time precisa de um empurrão confiável. O valor real da Frost Tide não é o dano, é o empurrão: ela cria distância sem gastar a sua recarga de mobilidade. Com Luna, a onda ganha carga extra e ainda desaba no ponto final, o que transforma o uso em duas ondas em vez de uma.',
        easySetup:
          'Luna Snow no time. Sem ela a Maré de Gelo funciona, mas você perde a carga adicional e o desabamento no ponto final, que é a parte que fecha espaço de verdade.',
        iconUrl: publicAsset('teamups/namor-chilling-charisma-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/namor-chilling-charisma-partner.png'),
      },
    ],
    sourceIds: ['teamup-bundle', 'wiki-namor'],
  },
  systems: [
    {
      name: 'Tide Fall',
      input: 'Passiva',
      heading: 'A queda lenta é como o Namor resolve mobility sem dash',
      facts: [
        'O Namor cai lentamente no ar por causa do par de penas nos pés. É a única mobilidade do kit: não existe dash, e a queda é o que substitui o avanço rápido.',
        'A passiva é o que permite atravessar o campo de visão de uma adversária de longe sem expor o flanco: você desce na diagonal em vez de cair na vertical do tiro dela.',
        'O que a wiki.gg não quantifica é o ponto que importa na prática: não há número de velocidade de queda, teto de queda nem duração publicados, então a leitura é por efeito e não por valor.',
        'A passiva funciona nos dois sentidos: subir em plataforma e cair de altura têm o mesmo tratamento, o que torna a rotação vertical de mapas com muitos desníveis mais barata para o Namor do que para um Duelist sem passiva parecida.',
        'O truque de leitura é combiná-la com a Blessing of The Deep: a esfera permite voo livre, e a queda é o que controla a razão de descida quando você já está no ar sem nada para se agarrar.',
      ],
      meter: [
        { label: 'Tipo', value: 'queda lenta pelo ar, sem número publicado' },
        { label: 'Origem', value: 'par de penas nos pés, passiva' },
        { label: 'Duração', value: 'não publicada pela fonte' },
        { label: 'Substitui', value: 'a ausência total de dash no kit' },
      ],
    },
    {
      name: 'Aquatic Dominion',
      input: 'E',
      heading: 'Os Monstros são o dano, e eles não dependem da sua linha de tiro',
      facts: [
        'Você invoca até 2 Monstros ao mesmo tempo, e a habilidade guarda 2 cargas com 15 segundos de recarga. Cada Monstro tem 100 de vida, dura 8 segundos e atira 17 de dano por projétil a 2 tiros por segundo, em hitscan.',
        'Os Monstros agarram parede e teto. Isso muda a leitura de todo o kit: a cobertura que o inimigo usa contra você não fecha a cobertura contra eles, e o teto de uma sala é uma superfície de tiro.',
        'Acertar um inimigo com o tridente reduz 1 segundo da recarga do Aquatic Dominion. É a única forma de acelerar a habilidade além das duas cargas, e ela depende de você estar acertando de verdade.',
        'Acerto na cabeça com o tridente enfurece os Monstros, e o estado de fúria leva a cadência de 2 para 5 tiros por segundo por 2 segundos. É a maior janela de dano de todo o kit e ela dura 2 segundos.',
        'Os Monstros atiram em hitscan, o que significa que eles não falham por projétil perdido: eles procuram o alvo sozinhos. O limite deles é a vida de 100 e os 8 segundos, não a mira.',
        'O Wrath of The Seven Seas entra no mesmo circuito: ao acertar, cada Monstro dispara um projétil reforçado único no alvo atingido de 40 de dano e todos ficam enfurecidos de novo.',
      ],
      meter: [
        { label: 'Monstros simultâneos', value: 'até 2' },
        { label: 'Cargas', value: '2, com 15s de recarga' },
        { label: 'Vida do Monstro', value: '100' },
        { label: 'Duração do Monstro', value: '8s' },
        { label: 'Dano por tiro', value: '17 em hitscan' },
        { label: 'Cadência', value: '2 por segundo, 5 por segundo enfurecido' },
        { label: 'Recarga reduzida por acerto', value: '1s por acerto de tridente' },
      ],
    },
    {
      name: 'Wrath of The Seven Seas',
      input: 'RMB',
      heading: 'O botão que acende os Monstros',
      facts: [
        'É um arremesso de tridente especial com dano de 60 no acerto direto, e o dano da respinga diminui conforme o inimigo fica mais longe do ponto de impacto.',
        'Ao acertar o arremesso faz todos os Monstros dispararem um único projétil reforçado de 40 de dano no inimigo atingido, e todos entram em estado de fúria.',
        'Com 2 Monstros enfurecidos a 5 tiros por segundo, os 40 do projétil reforçado viram dano de fundo enquanto você continua arremessando. O botão vale mais como multiplicador dos Monstros do que como golpe.',
        'A recarga é de 6 segundos, a mais curta do kit depois do ataque primário, e é a única habilidade que não depende de carga armazenada.',
        'O arremesso é um arco, então a linha reta é a exceção. Errar a altura custa a fúria, e a fúria é a janela de 2 segundos que sustenta o dano do time.',
      ],
      meter: [
        { label: 'Dano do arremesso', value: '60 no acerto direto, menos na respinga' },
        { label: 'Projétil dos Monstros', value: '40 por Monstro, no alvo atingido' },
        { label: 'Recarga', value: '6s' },
        { label: 'Efeito colateral', value: 'Monstros entram em fúria' },
      ],
    },
    {
      name: 'Blessing of The Deep',
      input: 'Shift',
      heading: 'Indestrutível não é o mesmo que imóvel',
      facts: [
        'Você se encerra numa esfera de água indestrutível por 3 segundos, com 15 segundos de recarga.',
        'Dentro da esfera você tem voo livre, mas não ataca e não usa habilidade nenhuma. São 3 segundos em que você escolhe a direção e não pode corrigir nada.',
        'A esfera é indestrutível, e isso inclui controle: enquanto está ativa, nada te quebra, te prende ou te derruba. Contra seize, contra Psionic Seal e contra o ult do Loki, é a janela para atravessar e não recuar.',
        'A mesma tecla cancela a forma antes dos 3 segundos, e é a diferença entre absorver a metralhadora inteira e absorver uma ultimate só.',
        'Com o Team-Up Gamma Monstro e Hulk no time, a esfera vira barreira de água com energia gama: ficar dentro acelera a recarga do Monstro Gama e dá aumento de dano a ele. A habilidade deixa de ser só defesa e vira posição de tiro.',
      ],
      meter: [
        { label: 'Duração', value: '3s, cancelável antes' },
        { label: 'Recarga', value: '15s' },
        { label: 'Dentro da esfera', value: 'voo livre, sem ataque e sem habilidade' },
        { label: 'Com Gamma Monstro + Hulk', value: 'acelera a recarga do Monstro Gama e dá aumento de dano' },
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelist',
      nickname: 'O Duelist que instala e deixa os Monstros trabalharem',
      health: '250',
      difficulty:
        'A menor vida do Duelist, com 250, é o que torna o kit frágil: o Namor não sobrevive errando, ele sobrevive porque o dano não depende de ele estar na linha de tiro. A curva está em acerto de cabeça para acender a fúria.',
      job: 'Instalar Monstros em parede, teto e ângulos, manter a fúria acesa com o tridente e usar a esfera como travessia imune a controle em vez de como escudo de dano.',
      verdict:
        'O Namor é o Duelist de maior teto de dano por segundo que precisa do pior posicionamento do rol. Com 250 de vida, ele não ganha nenhuma troca direta contra flanker, e o valor dele aparece só depois que a briga começou: dois Monstros a 2 tiros por segundo, 5 quando enfurecidos, mais os 40 do projétil reforçado do Wrath of The Seven Seas, tudo em hitscan e sem depender de a mira dele estar limpa. O counter que mais pesa é a Blessing of The Deep: 3s em que nenhum controle te alcança, o que é raro num Duelist e resolve exatamente o problema da vida baixa. Nenhum número de win rate entrou neste guia, porque nenhuma base meta do Namor foi lida nesta sessão. Quem escolhe ele aceita depender dos outros para sobreviver e aceita que a troca de dano é assimétrica.',
      playstyle: [
        'Coloque os Monstros em teto e parede antes de entrar na briga. Eles pegam ângulos que você não consegue e não morrem com o seu corpo ali no meio.',
        'Mire na cabeça do tridente. Acerto na cabeça é o que transforma a cadência de 2 para 5 tiros por segundo, e a fúria dura 2 segundos: o ritmo certo é um acerto de cabeça e doisargos normais.',
        'Use o Wrath of The Seven Seas para multiplicar os Monstros, não para matar. Os 60 do arremesso são secundários perto dos 40 por Monstro mais a fúria que ele acende.',
        'A esfera é a ferramenta de atravessia, não de tanque. 3 segundos voando sem controle nenhum, entrando no momento em que o flanker já está comprometido.',
        'Ataque para reduzir a recarga do Aquatic Dominion. Cada acerto do tridente tira 1 segundo dos 15, e é a diferença entre ter um segundo Monstro pronto ou não ter.',
      ],
      priorityKicker: 'Ordem de upgrade',
      priorityTitle: 'Wrath of The Seven Seas antes do próprio tridente',
      priorityDescription:
        'O arremesso especial é o único botão que converte acerto em mais dano nos Monstros, e é ele que transforma a passiva inteira de tiro em dano em área. Sem ele, os Monstros continuam sendo dois hitscan lentos de 8 segundos.',
      abilityLoop: [
        { ability: 'Trident of Neptune', input: 'LMB' },
        { ability: 'Wrath of The Seven Seas', input: 'RMB' },
        { ability: 'Aquatic Dominion', input: 'E' },
        { ability: 'Blessing of The Deep', input: 'Shift' },
        { ability: 'Horn of Proteus', input: 'Q' },
      ],
      upgradePlan: [
        {
          rank: 1,
          spellNumber: 2,
          input: 'RMB',
          ability: 'Wrath of The Seven Seas',
          label: 'O botão que acende os Monstros e multiplica o dano do time',
          baseEffect:
            'Arremesso de tridente especial com 60 de dano no acerto direto, e o dano da respinga diminui com a distância do ponto de impacto. Ao acertar, cada Monstro ativa dispara um projétil reforçado de 40 de dano no alvo atingido e todos os Monstros entram em fúria. Recarga de 6 segundos.',
          upgradeEffect:
            'Com o aprimoramento, o ganho não está no dano do arremesso e sim no que ele faz com os Monstros: 40 de dano hitscan por Monstro no mesmo alvo do arremesso, mais a fúria que sobe a cadência de 2 para 5 tiros por segundo. Com 2 Monstros, é mais 80 de dano hitscan e 6 tiros extras na mesma janela.',
          fightNote:
            'Arremesse no inimigo que está do lado dos seus Monstros, não no mais frágil. O valor do botão é a soma do projétil reforçado com o que os Monstros já estavam acertando ali.',
          why:
            'É a única habilidade do kit que dá 40 de dano por Monstro além do disparo normal. Um acerto certo transforma a fúria e o projétil reforçado na mesma janela, e nada mais no kit faz isso.',
          swapWhen:
            'Troque para o Aquatic Dominion quando os dois Monstros já estão vivos e em posição. Não existe troca de dano por dano aqui: o arremesso é multiplicador, não substituto.',
          sourceIds: ['wiki-namor', 'teamup-bundle'],
        },
        {
          rank: 2,
          spellNumber: 3,
          input: 'E',
          ability: 'Aquatic Dominion',
          label: 'A verdadeira fonte de dano, e ela gruda em teto',
          baseEffect:
            'Invoca até 2 Monstros que procuram inimigos sozinhos e atiram 17 de dano por projétil em hitscan, a 2 tiros por segundo, com 100 de vida e 8 segundos de duração. Os Monstros grudam em parede e teto. São 2 cargas com 15 segundos de recarga, e cada acerto do tridente reduz 1 segundo dessa recarga.',
          upgradeEffect:
            'Com o Team-Up Gamma Monstro ativo, existe um Monstro Gama extra ao lado deles, com 60 de dano por segundo contínuo, 200 de vida, 10 segundos de duração e 15 segundos de recarga, que ainda ganha aumento de velocidade de ataque em acertos críticos.',
          fightNote:
            'Posicione os Monstros antes do flanco e não junto com ele. Hitscan não erra por projétil perdido, então a distância deles até o alvo é irrelevante; o que importa é a cobertura que o inimigo está usando contra você.',
          why:
            'Todo o dano do Namor passa por aqui. Com dois Monstros enfurecidos a 5 tiros por segundo, o teto de 17 de dano por projétil supera qualquer trocador do rol no curto prazo, e a recarga de 15 segundos é a mais cara do kit.',
          swapWhen:
            'Troque para o tridente normal sempre que precisar encurtar a recarga dos 15 segundos. Com 2 cargas e 1 segundo por acerto, três acertos bem distribuídos quase pagam a habilidade inteira.',
          sourceIds: ['wiki-namor', 'teamup-bundle'],
        },
        {
          rank: 3,
          spellNumber: 1,
          input: 'LMB',
          ability: 'Trident of Neptune',
          label: 'Dano modesto com duas funções escondidas',
          baseEffect:
            'Lança o tridente para a frente como projétil rápido em arco, com 70 de dano no corpo e 140 na cabeça, a 1 arremesso por segundo. Cada acerto reduz 1 segundo da recarga do Aquatic Dominion, e acerto na cabeça enfurece os Monstros por 2 segundos, levando a cadência de 2 para 5 tiros por segundo.',
          upgradeEffect:
            'Com o aprimoramento, o que muda é a economia do kit: os 140 de cabeça não são o objetivo, o sono os 2 segundos de fúria que abrem a janela de maior dano. Acertar cabeça e arremessar o especial na sequência é a rotação de maior teto do Namor.',
          fightNote:
            'Arremesso em arco, não em linha reta. A curva do projétil é o que faz o teto e o que faz o erro, então corrija a mira pela borda do teto do inimigo, não pelo corpo dele.',
          why:
            'Setenta de corpo parece pouco e 140 de cabeça parece muito, mas o que paga o herói são os dois efeitos colaterais: 1 segundo de recarga por acerto e a fúria de 2 segundos. É a habilidade que opera o resto do kit.',
          swapWhen:
            'Troque para o Gamma Monstro com Hulk no time quando quiser transformar a Blessing of The Deep em posição de tiro em vez de passagem.',
          sourceIds: ['wiki-namor', 'teamup-bundle'],
        },
      ],
      adaptations: [
        'Contra dive (Spider-Man, Black Panther, Angela): 250 de vida não perdoa erro. A resposta é a Blessing of The Deep: 3s voando com imunidade total a controle, atravessando a briga em vez de tentar sustentar ela. Guarde a esfera para o momento em que o flanker já está comprometido.',
        'Contra composição de barreira (Doctor Strange, Magneto): o tridente e o arremesso não atravessam barreira. Os Monstros também não são o seu contra essa combinação, porque são invocados e não disparados de fora. Forçar a barreira é a decisão errada aqui: recue, use a queda lenta e negate a passe pelo tempo.',
        'Quando o time perde o frontline: a Horn of Proteus tira 500 de dano no acerto direto e 200 na respinga, com 1,5 segundo de atordoamento. É a forma de recuperar um ponto sem precisar entrar no melee.',
        'Em sala com teto baixo: os Monstros grudam em teto e parede, então teto baixo é mais superfície de tiro, não menos. Levar o grupo para dentro do ambiente fechado é a forma mais barata de transformar 2 Monstros em cobertura total.',
        'Contra Hela e efeitos que reduzem dano com o tempo: a janela de fúria de 2 segundos é curta demais para ser contestada por redução progressiva. Entre e saia dela com o arremesso especial, e não com o tridente normal.',
      ],
      ultimates: [
        {
          stance: 'Quebra de agrupamento com imobilidade',
          name: 'Horn of Proteus',
          bestUse:
            'O ponto de captura aberto com três ou mais inimigos dentro da área de impacto. A baleia causa 500 de dano no acerto direto e 200 na respinga, com 1,5 segundo de atordoamento, e aplica o debuff Earthbound em todo mundo dentro da área de pouso antes de bater, o que desabilita todas as habilidades de mobilidade.',
          execution:
            'Ative no centro do grupo, não na borda. O Earthbound é o que importa: ele tira o escape antes do impacto, então o 200 da respinga vira dano garantido em vez de dano de perseguição.',
          upgradeValue:
            'O upgrade devolve energia ao ultimate, e o que compra na prática é repetir o Earthbound na segunda janela antes que o inimigo tenha recuperação de mobilidade.',
        },
        {
          stance: 'Zoneamento e negação de espaço',
          name: 'Horn of Proteus',
          bestUse:
            'Quando o time precisa arrancar um ponto de um inimigo posicionado, e não matá-lo. O Earthbound desabilita todo tipo de mobilidade dentro da área de pouso, e isso vale mais do que os 500 quando o inimigo já estava contando com a própria mobilidade para segurar.',
          execution:
            'Use curto, com o time ainda na janela de dano dos Monstros. A baleia leva um atraso curto antes de cair, e é esse atraso que dá aos Monstros a chance de continuarem atirando durante a preparação.',
          upgradeValue:
            'Com a energia devolvida, a segunda passagem do Horn of Proteus cabe dentro do mesmo empurrão dos Monstros enfurecidos, o que transforma a ultimate em troca de posição em vez de evento isolado.',
        },
      ],
      dashGuide: {
        ability: 'Tide Fall',
        shortRule:
          'Não é dash, é queda controlada: a passiva deixa o Namor descer pelo ar sem o tempo de queda de um Duelist comum, e é a única forma de atravessar espaço no kit fora da esfera.',
        mechanics: [
          'A passiva vem do par de penas nos pés e funciona em qualquer queda pelo ar, inclusive descendo de plataformas e alturas de mapa.',
          'A wiki.gg publica o efeito e não publica número: não há velocidade de queda, teto nem duração registrados, então qualquer valor fixo aqui seria inventado.',
          'A Blessing of The Deep é a outra metade da mobilidade: a esfera dá voo livre por 3 segundos, e a passiva é o que controla a razão de descida quando o voo acaba.',
          'A combinação é a única forma do Namor sair de uma briga sem gastar tridente nem Monstros, e por isso vale guardar a esfera para a saída, não para a entrada.',
        ],
        drills: [
          'Pratique a descida diagonal: atravessar o campo em diagonal com a queda lenta é o que evita o flanco da rifle e mantém você dentro do alcance dos seus próprios Monstros.',
          'Antes de abrir o ponto, coloque os Monstros no teto do alvo e só depois use a queda para descer ao lado deles. Você chega junto da sua própria cobertura de tiro.',
          'Quando o dive chegar, use a esfera e atravesse em diagonal em vez de reta: o voo livre de 3s combinado com a queda é o único movimento do kit que sai de dentro da briga sem gastar tridente.',
        ],
      },
      patterns: [
        {
          title: 'Instalar, acender, cobrar',
          steps: [
            'Antes do combate, coloque os 2 Monstros no teto e na parede atrás da linha inimiga, não do lado do seu Vanguard.',
            'Acerte a cabeça com o tridente para entrar em fúria: 2 segundos a 5 tiros por segundo, com 17 de dano por projétil em hitscan.',
            'Lance o Wrath of The Seven Seas no mesmo alvo: os 40 do projétil reforçado por Monstro entram na mesma janela da fúria.',
            'Use a Horn of Proteus no grupo enquanto os Monstros ainda estão vivos, e deixe o Earthbound negar a mobilidade antes do impacto.',
          ],
        },
        {
          title: 'Blitz de dano no teto com Gamma Monstro',
          steps: [
            'Ligue o Team-Up Gamma Monstro com Hulk antes do combate: o Monstro Gama extra faz 60 de dano por segundo contínuo por 10 segundos.',
            'Use a Blessing of The Deep dentro do alcance do Monstro Gama: ali dentro, a barra recarrega mais rápido e ele ganha aumento de dano.',
            'Acerto na cabeça com o tridente dá velocidade de ataque ao Monstro Gama, e o arremesso especial faz ele disparar um feixe poderoso no alvo.',
            'Saia da barreira antes dos 3 segundos terminarem, ou você perde a janela inteira de recarregamento e dano amplificado.',
          ],
        },
        {
          title: 'Onda de gelo para abrir o ponto',
          steps: [
            'Com o Team-Up Chilling Charisma ativo, a Frost Tide avança para a frente causando dano, empurrando e reduzindo a velocidade de tudo que é atingida.',
            'Com Luna Snow no time, a onda tem 1 carga extra e desaba ao chegar no alcance máximo, o que gera dano em área no ponto final.',
            'Use a onda de frente, contra quem está em bloco, e depois entre com os Monstros já instalados: o inimigo foi empurrado para fora do seu ângulo de teto.',
          ],
        },
      ],
      mistakes: [
        'Colocar os Monstros no chão ao lado de você. Eles funcionam porque grudam em parede e teto; no chão, são dois hitscan lentos que morrem no primeiro foco.',
        'Mirar no corpo com o tridente quando a cabeça está livre. O acerto na cabeça é o que dá fúria de 2 segundos a 5 tiros por segundo, e é a maior janela de dano do kit inteiro.',
        'Usar o Wrath of The Seven Seas como golpe de matar. Os 60 do arremesso são secundários perto dos 40 por Monstro e da fúria que ele acende.',
        'Gastar a Blessing of The Deep contra dano contínuo. São 3 segundos sem ataque e sem habilidade, e o valor dela é a imunidade a controle, não o escudo de dano.',
        'Deixar os 15 segundos do Aquatic Dominion correrem. Cada acerto do tridente tira 1 segundo dessa recarga, e ignorar isso joga fora a maior fonte de dano do herói.',
      ],
      evidence: [
        'Vida 250, papel Duelist e a tabela completa de habilidades: Namor na wiki.gg (marvelrivals.wiki.gg), lida e baixada nesta sessão.',
        'Os dois textos de Team-Up no texto original em inglês (GAMMA MONSTRO pos0 e CHILLING CHARISMA pos1, ambos tecla C, parceiros Hulk e Luna Snow): bundle oficial de Team-Up do site da NetEase, registrado em teamup_oficial_20261004.md.',
        'Divergência declarada: a wiki.gg descreve Frozen Spawn com Jeff e nomeia a ativação como Gamma Charge, e o Gamma Monstro aparece marcado como indisponível na temporada atual. O guia segue o bundle.',
        'Divergência declarada: a wiki.gg lista Tidal Dirge com Hela como terceiro Team-Up, que o bundle atual não traz entre as opções do Namor, então ficou fora do guia.',
        'A passiva Tide Fall é publicada só como efeito, sem velocidade, teto ou duração. Nenhum valor foi atribuído a ela.',
        'Nenhum número de win rate, taxa de escolha ou kill foi usado: nenhuma base meta do Namor foi lida nesta sessão.',
      ],
    },
  },
  sources: [
    {
      id: 'wiki-namor',
      kind: 'database',
      title: 'Namor — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Namor',
      published: '2025-10-16',
      confidence: 'media',
      takeaways: [
        'Papel Duelist e vida 250 na infobox; é o menor valor de vida entre os Duelists conhecidos e é o que define o estilo de jogo.',
        'Tide Fall (passiva): o Namor pode cair lentamente no ar graças ao par de penas nos pés. Nenhum número de velocidade, teto ou duração é publicado.',
        'Trident of Neptune: 70 de dano no corpo e 140 na cabeça, 1 arremesso por segundo, projétil rápido em arco. Acerto reduz 1 segundo da recarga do Aquatic Dominion, e acerto na cabeça enfurece os Monstros por 2 segundos.',
        'Melee: combo de 3 golpes com o tridente, 30 de dano e cerca de 1 ataque por segundo, sem propriedade única além da animação.',
        'Blessing of The Deep: esfera de água indestrutível por 3 segundos com voo livre e sem ataque nem habilidade, 15 segundos de recarga.',
        'Aquatic Dominion: até 2 Monstros, 17 de dano por tiro em hitscan, 2 tiros por segundo e 5 enfurecidos, 100 de vida, 8 segundos, 2 cargas com 15 segundos de recarga. Os Monstros grudam em parede e teto.',
        'Wrath of The Seven Seas: 60 de dano no acerto direto com respinga que diminui por distância, 40 de dano no projétil reforçado dos Monstros, 6 segundos de recarga, e Monstros enfurecidos ao acertar.',
        'Horn of Proteus: 500 de dano no acerto direto e 200 na respinga, 1,5 segundo de atordoamento, e o debuff Earthbound antes do impacto desabilitando todas as habilidades de mobilidade.',
        'A página marca Frozen Spawn (Luna Snow) e Gamma Monstro (Hulk) como indisponíveis na temporada atual, e lista ainda Tidal Dirge com Hela, que o bundle atual não traz.',
      ],
    },
    {
      id: 'teamup-bundle',
      kind: 'official',
      title: 'Página oficial de Team-Up (bundle teamup_a35bb0a0.js)',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      author: 'NetEase Games',
      published: '2026-10-04',
      confidence: 'alta',
      takeaways: [
        'Namor aparece no bundle com duas opções, ambas na tecla C: pos0 GAMMA MONSTRO com parceiro Hulk e pos1 CHILLING CHARISMA com parceira Luna Snow.',
        'GAMMA MONSTRO baseEffect: "Summon an extra Gamma Monstro that continuously damages the nearest enemy. Upon landing critical hits, the Gamma Monstro gains increased Attack Speed. Hitting an enemy with Wrath of the Seven Seas prompts it to fire a powerful beam."',
        'GAMMA MONSTRO enhancedEffect: "When teaming up with Hulk, casting Blessing of the Deep creates a water barrier infused with Gamma energy. Standing inside accelerates the Gamma Monstro cooldown and grants it a Damage Boost."',
        'CHILLING CHARISMA baseEffect: "Gain a new ability to summon a Frost Tide forward. The wave damages, Pushes Back, and inflicts a Slow on all enemies hit."',
        'CHILLING CHARISMA enhancedEffect: "When teaming up with Luna Snow, the Frost Tide gains 1 charge and crashes down upon reaching its maximum range, dealing area damage and Slowing enemies caught near the endpoint."',
        'Os arquivos de imagem mapeados no bundle: Gamma Monstro iconImg a(5845) e headerImg a(2386); Chilling Charisma iconImg a(4046) e headerImg a(569).',
        'Os números do Monstro Gama (60 por segundo, 200 de vida, 10s, 15s de recarga) vêm da wiki.gg, não do bundle, que descreve o efeito sem números.',
      ],
    },
    {
      id: 'fandom-namor',
      kind: 'database',
      title: 'Namor — Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Namor',
      confidence: 'media',
      takeaways: [
        'Página usada como origem da lista de nomes de arquivo de asset do Fandom (Hero Card Namor.png, Namor Hero Portrait.png e Champion Icon Namor Animated.gif) e como confirmação de que a arte do herói está no servidor de static do Wikia.',
        'A ficha do Fandom é a que mais desatualiza: ela ainda descreve os Team-Ups da temporada anterior, o que reforça o bundle como referência única para as duas opções atuais.',
      ],
    },
    {
      id: 'herofacts-namor',
      kind: 'guide',
      title: 'Namor — Marvel Rivals Hero Page (marvelrivals.com)',
      url: 'https://www.marvelrivals.com/heroes/namor/',
      confidence: 'pendente',
      takeaways: [
        'A página oficial de habilidades do Namor é apontada como a fonte mais atual de números, porque a wiki.gg e a ficha do herói ficam defasadas.',
        'Leitura pendente declarada: esta sessão não completou a leitura integral dessa página, então os números de habilidade do guia vêm da wiki.gg e podem estar um patch atrás.',
        'A pendência não afeta estruturalmente o guia: nenhum número foi inventado para preenchê-la, e o que não está publicado está marcado como não publicado.',
      ],
    },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 1, status: 'bundle de Team-Up da Temporada 10, com os dois textos no texto original em inglês e os dois parceiros confirmados' },
    { kind: 'database', label: 'Wiki e base de dados', count: 2, status: 'wiki.gg para papel, vida e toda a tabela de habilidades; Fandom para os nomes de arquivo de asset' },
    { kind: 'guide', label: 'Guias escritos', count: 1, status: 'a página oficial de habilidades do herói é a fonte ideal de números, mas ficou como leitura pendente nesta sessão' },
    { kind: 'forum', label: 'Fórum e comunidade', count: 0, status: 'não consultado nesta sessão; a recomendação entre os dois Team-Ups é por mecânica, não por métrica de comunidade' },
    { kind: 'video-transcript', label: 'Vídeo e transcrição', count: 0, status: 'pendente: nenhum vídeo com transcrição auditável localizado nesta sessão' },
  ],
}
