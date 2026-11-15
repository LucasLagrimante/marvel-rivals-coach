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
  lastVerified: '2026-11-15',
  confidenceSummary:
    'Os números vêm da página oficial de heróis da temporada, relida em 15/11/2026, que tem precedência sobre wiki: vida 275, tridente 80 a 150 m/s, Monstro com 125 de vida e 18 de dano a 2 tiros por segundo, Wrath com 40 no projétil e 60 no campo, Monstro Gama com 150 de vida e 25 s de recarga, Blessing of the Deep com 20 s. A wiki.gg ficou defasada nesses pontos (250 de vida, 100 de vida do Monstro, 17 de dano, 15 s de recarga) e foi substituída pelos valores oficiais. Os dois Team-Ups vêm do bundle oficial de Team-Up e a página oficial da temporada confirma a mesma lista; os dois textos foram lidos no original em inglês e traduzidos aqui. Isso importa porque a própria wiki.gg marca o Gamma Monstro como indisponível na temporada atual e descreve a ativação com o nome antigo, Gamma Charge, que não bate com o nome do bundle. A divergência ficou registrada em vez de escondida. Três pontos merecem aviso. Primeiro, a Chilling Charisma aparece na wiki.gg como Frozen Spawn, com um Monstro gelado mais resistente, enquanto o bundle atual descreve uma habilidade nova, a Frost Tide, que avança, empurra e reduz a velocidade: não é a mesma mecânica, e o guia segue o bundle. Segundo, a página oficial marca Tidal Dirge (Hela) como habilidade fora de uso na temporada, então ela não entrou no guia. Terceiro, a passiva Tide Fall é quantitativamente opaca: a wiki.gg diz apenas que o Namor cai lentamente no ar thanks às penas dos pés, sem número de velocidade, teto ou duração, e nenhuma outra fonte foi localizada, então a passiva é descrita por efeito e não por número. A comparação entre os dois Team-Ups agora usa a win rate de dupla medida pela Batru na Season 10.5: 54,16% com Hulk contra 44,76% com Luna Snow, leitura descritiva e não causal.',
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
      'O Gamma Monstro é o único dos dois que melhora a fonte principal de dano do Namor. Os Monstros normais atiram em hitscan a 2 tiros por segundo, ficam 8 segundos e morrem com 125 de vida; o Monstro Gama extra atira a cada 0,1 s com 5,5 por acerto (cerca de 55 por segundo, com 10% de crescimento por segundo), tem 150 de vida e 25 s de recarga. Você continua fazendo a mesma coisa, só que com um Monstro que não cessa. E o aprimoramento com Hulk é o que fecha o circuito: a Blessing of The Deep deixa de ser só uma esfera de proteção e vira uma barreira de água com energia gama dentro da qual o Gamma Monstro recarrega mais rápido e ganha aumento de dano. Na prática isso é uma peça de artilharia de dano posicionada, e ela se liga ao seu Wrath of The Seven Seas, porque acertar um inimigo com ele faz o Gamma Monstro disparar um feixe poderoso naquele alvo. Chilling Charisma é melhor na frente, não no flanco: a Frost Tide empurra e reduz a velocidade, o que resolve o problema oposto, o de alguém te alcançando. A Batru mede as duas duplas na Season 10.5: Gamma Monstro com Hulk em 54,16% (1.106 partidas) contra 44,76% de Chilling Charisma com Luna Snow (1.441 partidas). São números descritivos da dupla inteira, não prova causal do Team-Up. Se o seu time já tem controle suficiente para segurar o dive, o dano contínuo do Gamma Monstro vale mais do que mais uma onda.',
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
          'Briga de zona em espaço fechado, onde os Monstros podem cobrir o teto e a parede atrás do seu Vanguard e continuar atirando enquanto você troca de alvo. É a escolha para quando o seu problema não é sobreviver ao dive, e sim convertir o tempo de ponta em dano contínuo. Funciona sozinho: o Monstro Gama extra já sustenta a escolha mesmo sem Hulk no time.',
        easySetup:
          'Qualquer Vanguard serve para o efeito base. Com Hulk, a barreira gama transforma a Blessing of The Deep de 3 segundos de invulnerabilidade absoluta em 3 segundos que também recuperam a recarga do Monstro Gama em 200% e dão 25% de aumento de dano a ele.',
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
    sourceIds: ['teamup-bundle', 'official-namor-s11', 'batru-namor', 'wiki-namor'],
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
        'Você invoca até 2 Monstros ao mesmo tempo, e a habilidade guarda 2 cargas que se recuperam a 0,1 de carga por segundo. Cada Monstro tem 125 de vida, dura 8 segundos, atira 18 de dano por projétil a 2 tiros por segundo em hitscan, alcança 40 m e perde dano a partir de 20 m, chegando a 50% aos 40 m.',
        'Os Monstros agarram parede e teto. Isso muda a leitura de todo o kit: a cobertura que o inimigo usa contra você não fecha a cobertura contra eles, e o teto de uma sala é uma superfície de tiro.',
        'Cada acerto do tridente soma 0,13 de carga ao Aquatic Dominion. É a única forma de acelerar a habilidade além da recuperação natural, e ela depende de você estar acertando de verdade.',
        'Acerto na cabeça com o tridente enfurece os Monstros, e o estado de fúria leva a cadência de 2 para 5 tiros por segundo por 2 segundos. É a maior janela de dano de todo o kit e ela dura 2 segundos.',
        'Os Monstros atiram em hitscan, o que significa que eles não falham por projétil perdido: eles procuram o alvo sozinhos. O limite deles é a vida de 125 e os 8 segundos, não a mira.',
        'O Wrath of The Seven Seas entra no mesmo circuito: ao acertar, cada Monstro dispara um projétil reforçado único de 60 de dano a 120 m/s no alvo atingido, e todos ficam enfurecidos de novo.',
      ],
      meter: [
        { label: 'Monstros simultâneos', value: 'até 2' },
        { label: 'Cargas', value: '2, recuperando 0,1 por segundo' },
        { label: 'Vida do Monstro', value: '125' },
        { label: 'Duração do Monstro', value: '8s' },
        { label: 'Dano por tiro', value: '18 em hitscan, 40 m de alcance' },
        { label: 'Cadência', value: '2 por segundo, 5 por segundo enfurecido' },
        { label: 'Carga por acerto de tridente', value: '0,13' },
      ],
    },
    {
      name: 'Wrath of The Seven Seas',
      input: 'RMB',
      heading: 'O botão que acende os Monstros',
      facts: [
        'É um arremesso de tridente com 40 de dano no projétil e 60 no campo de impacto de 3 m, que cai para 50% na borda do campo.',
        'Ao acertar o arremesso faz todos os Monstros dispararem um único projétil reforçado de 60 de dano no inimigo atingido, e todos entram em estado de fúria.',
        'Com 2 Monstros enfurecidos a 5 tiros por segundo, os 60 do projétil reforçado viram dano de fundo enquanto você continua arremessando. O botão vale mais como multiplicador dos Monstros do que como golpe.',
        'A recarga é de 6 segundos, a mais curta do kit depois do ataque primário, e é a única habilidade que não depende de carga armazenada.',
        'O arremesso é um arco, então a linha reta é a exceção. Errar a altura custa a fúria, e a fúria é a janela de 2 segundos que sustenta o dano do time.',
      ],
      meter: [
        { label: 'Dano do arremesso', value: '40 no projétil, 60 no campo de 3 m' },
        { label: 'Projétil dos Monstros', value: '60 por Monstro, no alvo atingido' },
        { label: 'Recarga', value: '6s' },
        { label: 'Efeito colateral', value: 'Monstros entram em fúria' },
      ],
    },
    {
      name: 'Blessing of The Deep',
      input: 'Shift',
      heading: 'Indestrutível não é o mesmo que imóvel',
      facts: [
        'Você se encerra numa esfera de água indestrutível por 3 segundos, com 20 segundos de recarga e 7 m de subida.',
        'Dentro da esfera você tem voo livre, mas não ataca e não usa habilidade nenhuma. São 3 segundos em que você escolhe a direção e não pode corrigir nada.',
        'A esfera é indestrutível, e isso inclui controle: enquanto está ativa, nada te quebra, te prende ou te derruba. Contra seize, contra Psionic Seal e contra o ult do Loki, é a janela para atravessar e não recuar.',
        'A mesma tecla cancela a forma antes dos 3 segundos, e é a diferença entre absorver a metralhadora inteira e absorver uma ultimate só.',
        'Com o Team-Up Gamma Monstro e Hulk no time, a esfera vira barreira de água com energia gama: ficar dentro acelera a recarga do Monstro Gama e dá aumento de dano a ele. A habilidade deixa de ser só defesa e vira posição de tiro.',
      ],
      meter: [
        { label: 'Duração', value: '3s, cancelável antes' },
        { label: 'Recarga', value: '20s' },
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
      health: '275',
      difficulty:
        'Com 275 de vida o Namor não é o Duelist mais frágil do rol, mas continua sem mobilidade: ele não sobrevive errando, ele sobrevive porque o dano não depende de ele estar na linha de tiro. A curva está em acerto de cabeça para acender a fúria.',
      job: 'Instalar Monstros em parede, teto e ângulos, manter a fúria acesa com o tridente e usar a esfera como travessia imune a controle em vez de como escudo de dano.',
      verdict:
        'O Namor é o Duelist de maior teto de dano por segundo que precisa do pior posicionamento do rol. Com 275 de vida, ele ainda não ganha troca direta contra flanker, e o valor dele aparece só depois que a briga começou: dois Monstros a 2 tiros por segundo, 5 quando enfurecidos, mais os 60 do projétil reforçado do Wrath of The Seven Seas, tudo em hitscan e sem depender de a mira dele estar limpa. O counter que mais pesa é a Blessing of The Deep: 3s em que nenhum controle te alcança, o que é raro num Duelist e resolve exatamente o problema da vida baixa. A métrica de dupla vem da Batru na Season 10.5: Gamma Monstro com Hulk em 54,16% (1.106 partidas) e Chilling Charisma com Luna Snow em 44,76% (1.441 partidas), leitura descritiva de dupla. Quem escolhe ele aceita depender dos outros para sobreviver e aceita que a troca de dano é assimétrica.',
      playstyle: [
        'Coloque os Monstros em teto e parede antes de entrar na briga. Eles pegam ângulos que você não consegue e não morrem com o seu corpo ali no meio.',
        'Mire na cabeça do tridente. Acerto na cabeça é o que transforma a cadência de 2 para 5 tiros por segundo, e a fúria dura 2 segundos: o ritmo certo é um acerto de cabeça e doisargos normais.',
        'Use o Wrath of The Seven Seas para multiplicar os Monstros, não para matar. Os 60 do campo são secundários perto dos 60 por Monstro mais a fúria que ele acende.',
        'A esfera é a ferramenta de atravessia, não de tanque. 3 segundos voando sem controle nenhum, entrando no momento em que o flanker já está comprometido.',
        'Ataque para reduzir a recarga do Aquatic Dominion. Cada acerto do tridente soma 0,13 de carga, e é a diferença entre ter um segundo Monstro pronto ou não ter.',
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
            'Arremesso de tridente com 40 de dano no projétil e 60 no campo de impacto de 3 m, que cai para 50% na borda. Ao acertar, cada Monstro ativo dispara um projétil reforçado de 60 de dano a 120 m/s no alvo atingido, e todos entram em fúria. Recarga de 6 segundos.',
          upgradeEffect:
            'Com o aprimoramento, o ganho não está no dano do arremesso e sim no que ele faz com os Monstros: 60 de dano hitscan por Monstro no mesmo alvo do arremesso, mais a fúria que sobe a cadência de 2 para 5 tiros por segundo. Com 2 Monstros, é mais 120 de dano hitscan e 6 tiros extras na mesma janela.',
          fightNote:
            'Arremesse no inimigo que está do lado dos seus Monstros, não no mais frágil. O valor do botão é a soma do projétil reforçado com o que os Monstros já estavam acertando ali.',
          why:
            'É a única habilidade do kit que dá 60 de dano por Monstro além do disparo normal. Um acerto certo transforma a fúria e o projétil reforçado na mesma janela, e nada mais no kit faz isso.',
          swapWhen:
            'Troque para o Aquatic Dominion quando os dois Monstros já estão vivos e em posição. Não existe troca de dano por dano aqui: o arremesso é multiplicador, não substituto.',
          sourceIds: ['official-namor-s11', 'teamup-bundle'],
        },
        {
          rank: 2,
          spellNumber: 3,
          input: 'E',
          ability: 'Aquatic Dominion',
          label: 'A verdadeira fonte de dano, e ela gruda em teto',
          baseEffect:
            'Invoca até 2 Monstros que procuram inimigos sozinhos e atiram 18 de dano por projétil em hitscan, a 2 tiros por segundo, com 125 de vida, 8 segundos de duração e 40 m de alcance (queda para 50% aos 40 m). Os Monstros grudam em parede e teto. São 2 cargas com recuperação de 0,1 por segundo, e cada acerto do tridente soma 0,13 de carga.',
          upgradeEffect:
            'Com o Team-Up Gamma Monstro ativo, existe um Monstro Gama extra que atira a cada 0,1 s com 5,5 de dano por acerto (cerca de 55 por segundo, subindo 10% por segundo), tem 150 de vida e 25 s de recarga, e ganha velocidade de ataque em acertos críticos. Com Hulk, a barreira da Blessing of the Deep dá 200% de recuperação de recarga e 25% de dano a ele.',
          fightNote:
            'Posicione os Monstros antes do flanco e não junto com ele. Hitscan não erra por projétil perdido, então a distância deles até o alvo é irrelevante; o que importa é a cobertura que o inimigo está usando contra você.',
          why:
            'Todo o dano do Namor passa por aqui. Com dois Monstros enfurecidos a 5 tiros por segundo, o teto de 18 de dano por projétil supera qualquer trocador do rol no curto prazo, e a recuperação de 10 s por carga é uma das mais caras do kit.',
          swapWhen:
            'Troque para o tridente normal sempre que precisar encurtar a recarga. Com 2 cargas e 0,13 de carga por acerto, três acertos somam quase 40% de uma carga.',
          sourceIds: ['official-namor-s11', 'teamup-bundle'],
        },
        {
          rank: 3,
          spellNumber: 1,
          input: 'LMB',
          ability: 'Trident of Neptune',
          label: 'Dano modesto com duas funções escondidas',
          baseEffect:
            'Lança o tridente para a frente como projétil rápido em arco, com 80 de dano e crítico na cabeça, a 1,09 arremesso por segundo. Cada acerto soma 0,13 de carga ao Aquatic Dominion, e acerto na cabeça enfurece os Monstros por 2 segundos, levando a cadência de 2 para 5 tiros por segundo.',
          upgradeEffect:
            'Com o aprimoramento, o que muda é a economia do kit: os 140 de cabeça não são o objetivo, o sono os 2 segundos de fúria que abrem a janela de maior dano. Acertar cabeça e arremessar o especial na sequência é a rotação de maior teto do Namor.',
          fightNote:
            'Arremesso em arco, não em linha reta. A curva do projétil é o que faz o teto e o que faz o erro, então corrija a mira pela borda do teto do inimigo, não pelo corpo dele.',
          why:
            'Oitenta de corpo parece pouco e o crítico na cabeça parece muito, mas o que paga o herói são os dois efeitos colaterais: 0,13 de carga por acerto e a fúria de 2 segundos. É a habilidade que opera o resto do kit.',
          swapWhen:
            'Troque para o Gamma Monstro com Hulk no time quando quiser transformar a Blessing of The Deep em posição de tiro em vez de passagem.',
          sourceIds: ['official-namor-s11', 'teamup-bundle'],
        },
      ],
      adaptations: [
        'Contra dive (Spider-Man, Black Panther, Angela): 275 de vida não perdoam erro. A resposta é a Blessing of The Deep: 3s voando com imunidade total a controle, atravessando a briga em vez de tentar sustentar ela. Guarde a esfera para o momento em que o flanker já está comprometido.',
        'Contra composição de barreira (Doctor Strange, Magneto): o tridente e o arremesso não atravessam barreira. Os Monstros também não são o seu contra essa combinação, porque são invocados e não disparados de fora. Forçar a barreira é a decisão errada aqui: recue, use a queda lenta e negate a passe pelo tempo.',
        'Quando o time perde o frontline: a Horn of Proteus tira 500 no círculo interno de 3,5 m e 180 no externo de 9 m, com 1,5 s de imobilização. É a forma de recuperar um ponto sem precisar entrar no melee.',
        'Em sala com teto baixo: os Monstros grudam em teto e parede, então teto baixo é mais superfície de tiro, não menos. Levar o grupo para dentro do ambiente fechado é a forma mais barata de transformar 2 Monstros em cobertura total.',
        'Contra Hela e efeitos que reduzem dano com o tempo: a janela de fúria de 2 segundos é curta demais para ser contestada por redução progressiva. Entre e saia dela com o arremesso especial, e não com o tridente normal.',
      ],
      ultimates: [
        {
          stance: 'Quebra de agrupamento com imobilidade',
          name: 'Horn of Proteus',
          bestUse:
            'O ponto de captura aberto com três ou mais inimigos dentro da área de impacto. A baleia causa 500 no círculo interno e 180 no externo, com 1,5 s de imobilização, e aplica o debuff Earthbound em todo mundo dentro da área de pouso antes de bater, o que desabilita todas as habilidades de mobilidade.',
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
            'Acerte a cabeça com o tridente para entrar em fúria: 2 segundos a 5 tiros por segundo, com 18 de dano por projétil em hitscan.',
            'Lance o Wrath of The Seven Seas no mesmo alvo: os 60 do projétil reforçado por Monstro entram na mesma janela da fúria.',
            'Use a Horn of Proteus no grupo enquanto os Monstros ainda estão vivos, e deixe o Earthbound negar a mobilidade antes do impacto.',
          ],
        },
        {
          title: 'Blitz de dano no teto com Gamma Monstro',
          steps: [
            'Ligue o Team-Up Gamma Monstro com Hulk antes do combate: o Monstro Gama extra atira a cada 0,1 s com 5,5 de dano, crescendo 10% por segundo, com 150 de vida e 25 s de recarga.',
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
        'Usar o Wrath of The Seven Seas como golpe de matar. Os 60 do campo são secundários perto dos 60 por Monstro e da fúria que ele acende.',
        'Gastar a Blessing of The Deep contra dano contínuo. São 3 segundos sem ataque e sem habilidade, e o valor dela é a imunidade a controle, não o escudo de dano.',
        'Deixar a carga do Aquatic Dominion correr sem atirar. Cada acerto do tridente soma 0,13 de carga, e ignorar isso joga fora a maior fonte de dano do herói.',
      ],
      evidence: [
        'Vida 275, tridente 80 a 150 m/s, Monstro com 125 de vida e 18 de dano, Wrath com 40 no projétil e 60 no campo, Monstro Gama com 150 de vida e 25 s de recarga, Blessing of the Deep com 20 s: página oficial de heróis da temporada (heroes/14srzf1eun6qj), relida em 15/11/2026.',
        'Os dois textos de Team-Up no original em inglês (GAMMA MONSTRO com Hulk e CHILLING CHARISMA com Luna Snow, ambos na tecla C): bundle oficial de Team-Up do site da NetEase.',
        'Win rate de dupla na Season 10.5: Gamma Monstro com Hulk 54,16% em 1.106 partidas e Chilling Charisma com Luna Snow 44,76% em 1.441 partidas (Batru). Números descritivos da dupla inteira, não causais.',
        'Divergência declarada: a página oficial marca Tidal Dirge (Hela) como habilidade fora de uso na temporada e lista apenas Gamma Monstro e Chilling Charisma entre os Team-Ups do Namor; o guia segue página oficial e bundle.',
        'Divergência declarada: a wiki.gg está defasada nos números centrais (vida 250, Monstro com 100 de vida, tridente 70, 15 s de recarga) e foi substituída pelos valores oficiais.',
        'A passiva Tide Fall é publicada só como efeito, sem velocidade, teto ou duração. Nenhum valor foi atribuído a ela.',
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
        'O bundle descreve o efeito sem números; os valores atuais do Monstro Gama (5,5 de dano a cada 0,1 s, 150 de vida, 25 s de recarga, 200% de recuperação e 25% de dano com Hulk) vêm da página oficial de heróis da temporada.',
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
      id: 'official-namor-s11',
      kind: 'official',
      title: 'Namor — página oficial de heróis (Season 11)',
      url: 'https://www.marvelrivals.com/heroes/14srzf1eun6qj/index.html',
      author: 'NetEase Games',
      published: '2026-11-13',
      confidence: 'alta',
      takeaways: [
        'Vida 275 e velocidade 6 m/s: corrige os 250 que a wiki.gg ainda imprime.',
        'Trident of Neptune: 80 de dano, 150 m/s, 1,09 arremesso por segundo, munição infinita, crítico na cabeça, 0,13 de carga do Aquatic Dominion por acerto.',
        'Aquatic Dominion: Monstro com 125 de vida, 18 de dano a 2 tiros por segundo, 40 m de alcance, queda para 50% aos 40 m, 8 s de duração, máximo de 2 e 2 cargas com recuperação de 0,1 por segundo; enfurecido, 12 de dano a 5 tiros por segundo por 2 s.',
        'Wrath of the Seven Seas: 40 no projétil e 60 no campo esférico de 3 m (queda de 50% na borda), projétil reforçado dos Monstros a 60 de dano e 120 m/s, 6 s de recarga.',
        'Blessing of the Deep: 3 s de duração, 7 m de subida, 20 s de recarga. Horn of Proteus: 30 m de alcance, 500 no círculo interno de 3,5 m e 180 no externo de 9 m, 1,5 s de imobilização, 3100 de energia.',
        'Gamma Monstro: 25 s de recarga, ataque a cada 0,1 s com 5,5 de dano, crescimento de 10% por segundo, 150 de vida; aprimorado com Hulk, 200% de recuperação de recarga e 25% de aumento de dano.',
        'Chilling Charisma: Frost Tide com 75 de dano, 25% de lentidão por 2 s, 15 s de recarga, 17,5 m/s e 1 s de viagem; aprimorada com Luna Snow ganha 1 carga e causa 50 de dano com 40% de lentidão no ponto final. O efeito especial troca o Monstro por Frozen Spawn, que aplica 15% de lentidão por 1 s.',
        'A página lista Tidal Dirge (Hela) como habilidade fora de uso na temporada, o que confirma que os dois Team-Ups atuais do Namor são Gamma Monstro e Chilling Charisma.',
      ],
    },
    {
      id: 'batru-namor',
      kind: 'database',
      title: 'Namor — Team-Ups e melhores duplas (Batru, Season 10.5)',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/namor',
      published: '2026-11-15',
      confidence: 'alta',
      takeaways: [
        'Win rate de dupla medido: Gamma Monstro com Hulk 54,16% em 1.106 partidas e Chilling Charisma com Luna Snow 44,76% em 1.441 partidas.',
        'Melhores parceiros: Peni Parker 58,67% (+12,8 pp, 467 partidas), Mantis 56,50% (+10,6 pp, 515) e Rogue 54,61% (+8,7 pp, 1.062).',
        'Base declarada como agregação dos últimos 30 dias de partidas ranqueadas na Season 10.5; é leitura descritiva de dupla e não isola o efeito do Team-Up.',
      ],
    },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 2, status: 'página oficial de heróis da temporada, que agora sustenta todos os números do guia, mais o bundle de Team-Up com os dois textos no original' },
    { kind: 'database', label: 'Wiki e base de dados', count: 3, status: 'Batru para win rate de dupla na Season 10.5; wiki.gg mantida só como contraponto defasado e Fandom para nomes de asset' },
    { kind: 'guide', label: 'Guias escritos', count: 0, status: 'nenhum guia escrito foi usado: os números saem da página oficial e a comparação de Team-Up sai da Batru' },
    { kind: 'forum', label: 'Fórum e comunidade', count: 0, status: 'não consultado nesta sessão; a recomendação entre os dois Team-Ups é por mecânica, não por métrica de comunidade' },
    { kind: 'video-transcript', label: 'Vídeo e transcrição', count: 0, status: 'pendente: nenhum vídeo com transcrição auditável localizado nesta sessão' },
  ],
}
