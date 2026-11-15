import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const misterFantastic: HeroGuide = {
  id: 'mister-fantastic',
  name: 'Mister Fantastic',
  aliases: ['Reed Richards', 'Homem-Fantástico', 'FF', 'Stretcho', 'Big Brain'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/mister-fantastic.png'),
  bannerUrl: publicAsset('heroes/banners/mister-fantastic.png'),
  selectionPortraitUrl: publicAsset('heroes/select/mister-fantastic.png'),
  selectionHoverUrl: publicAsset('heroes/select/mister-fantastic_champion.gif'),
  selectionHoverFit: { scale: 1.25, x: 0, y: -7.5 },
  theme: {
    primary: '#2f6bff',
    primaryRgb: '47, 107, 255',
    secondary: '#ff7a2f',
    secondaryRgb: '255, 122, 47',
    surface: '#080d1c',
    surfaceRgb: '8, 13, 28',
  },
  roles: ['duelist'],
  lastVerified: '2026-11-15',
  confidenceSummary:
    'Os dois textos de Team-Up, o nome oficial e as teclas vieram do bundle oficial teamup_a35bb0a0.js, não da ficha do herói no site, que ainda descreve o Wedded Harmony antigo da Invisible Woman. A vida de 375 veio da wiki.gg e do infobox do Fandom, que concordam entre si, reforçada pelo patchdelta, que registra a subida de 350 para 375 em 11/04/2025 sem redução posterior; os guias IGN, Liquipedia, Mobalytics e Dexerto ainda imprimem 350 porque a ficha do IGN foi atualizada pela última vez em fevereiro de 2025 [verificar na wiki]. Os números de habilidade vêm da IGN e da Mobalytics, com a wiki.gg e a Liquipedia para a mecânica: o Stretch Punch é 70 desde o balance de 15/05/2026, que tirou 5 pontos do valor antigo de 65, e o Flexible Elongation tem 6s de recarga por carga desde o mesmo patch, não 8s. Três divergências ficaram registradas em vez de escondidas. A cadência do Stretch Punch aparece como 1,1s por golpe na IGN e na Mobalytics e como 1 golpe por segundo na wiki.gg; mantido 1,1s. A vida extra da Brainiac Bounce aparece como 400 na wiki.gg, mas o texto oficial diz que ela é igual à do estado inflado, que hoje vale 350; mantido 350. O dano do estado inflado aparece como 80 na wiki.gg e na Liquipedia e como 75 na IGN, no Dexerto e no Marvel Church; mantido 80. A vida extra do estado inflado virou 350 de vida máxima mais uma cura única de 350 em 14/11/2025, o que explica os 400 e 450 que os guias antigos ainda imprimem. O Clobberin’ Research Dept. passou a ser habilidade de liga e desliga no patch de 23/09/2026, e o dano do golpe sem carga subiu de 55 para 65 nesse mesmo patch, com a carga cheia encurtando de 1s para 0,75s. Nenhum número de win rate de dupla foi usado: a página de sinergia do Batru para este herói respondeu 403 nesta sessão, então a recomendação entre os dois Team-Ups se apoia em mecânica e não em estatística medida.',
  coreRead: [
    'Reed não é um Duelist de tiro: é um frontliner que estica o braço. O valor dele é sobreviver à frente e cobrar o preço em área.',
    'A elasticidade é a economia do herói: só enche quando você acerta, e só é gasta quando você ataca de novo.',
    'No estado inflado você perde habilidades e alcance. Os 6s ali não são de dano, são de intimidação.',
    'O Clobberin’ Research Dept. reescreve o seu botão primário inteiro: é a maior mudança de dano do kit.',
  ],
  teamUps: {
    summary:
      'Fantastic Amplifier (com Rocket Raccoon) é a escolha padrão por resultado medido: a dupla vence 61,06% das partidas contra 54,53% de Clobberin’ Research Dept. com The Thing (Batru, Season 10.5), e o efeito base já remove o teto de elasticidade e devolve o controle manual do estado inflado. Clobberin’ Research Dept. (com The Thing) continua sendo a escolha de briga pura: troca o ataque primário inteiro por uma arma carregada que devolve vida extra proporcional ao dano, e é o que sustenta o Reed em composição de corpo a corpo sem Rocket.',
    recommended: 'Fantastic Amplifier',
    recommendedReason:
      'O Fantastic Amplifier é a recomendação por medição: a dupla com Rocket Raccoon fecha em 61,06% de win rate em 624 partidas, contra 54,53% em 541 partidas do Clobberin’ Research Dept. com The Thing (Batru, Season 10.5; são duplas completas, então parte do número é a força do parceiro, não só do Team-Up). O ganho mecânico acompanha o número: o Amplifier tira o teto de elasticidade, permite inflar ativamente a cada 8 s com 200 de elasticidade máxima e 12,5 de decaimento por segundo, e o aprimoramento transforma cada quique da Brainiac Bounce em arremesso. O Clobberin’ Research Dept. é o Team-Up que reescreve o seu ataque primário. Na postura de brigão o Stretch Punch deixa de ser um soco de 70 e vira um Brawling Punch carregado de 65 (100 na carga cheia, 0,75 s para carregar), em que acertar devolve vida extra de 75% do dano até o teto de 75. Isso casa com o que o Reed já faz: ele não mata rápido, ele fica na briga. Com The Thing, o Distended Grip também vira carregado e desce como um Distended Hammer, o que transforma o controle de arraste em uma segunda fonte de vida extra dentro da mesma janela. A ressalva é que desde o patch de 23/09/2026 a postura virou liga e desliga: alternar entre brigão e Duelist normal no meio do combate virou decisão tática, não acidente. E o patch 20261113 fechou o bug que permitia soltar o Distended Hammer e o Stretch Punch simultaneamente na postura de brigão: agora o ciclo é escolher um dos dois por janela, o que reduz o teto do Clobberin’ sem mudar o piso. O custo do Amplifier é a janela: 10 s de efeito base e 25 s de recarga, e o aprimoramento só arremessa se você acertar os quiques com um inimigo dentro do raio de 10 m. Ainda assim é a opção de maior retorno medido, e o Clobberin’ fica como troca quando o time precisa de sustain de briga e não tem Rocket.',
    options: [
      {
        name: 'Clobberin’ Research Dept.',
        partner: 'The Thing',
        partnerRole: 'Vanguard',
        input: 'C',
        baseEffect:
          'Na postura de brigão, o Stretch Punch vira habilidade carregada e dispara um Brawling Punch para frente: 65 de dano, 100 na carga cheia, 0,75 s para carregar e o mesmo tempo de retenção máxima. Acertar um inimigo concede Vida Extra de 75% do dano até o teto de 75, e a carga cheia arremessa os inimigos.',
        enhancedEffect:
          'Com The Thing no time, na postura de brigão o Distended Grip também vira habilidade carregada e desce como um Distended Hammer: 70 de dano, 100 na carga cheia, 1 s de carga e 3 s de recarga. Acertar inimigos concede Vida Extra de 75% do dano até o teto de 75 e, na carga cheia, arremessa.',
        bestFor:
          'Briga de corpo em ponto apertado, contra linha de frente e contra qualquer composição que dependa de te matar por dano bruto. A vida extra escala com o dano, então vale mais quando você está acertando de verdade do que quando está só empurrando gente. Funciona sozinho, sem The Thing no time: o efeito base do soco carregado já sustenta a escolha.',
        easySetup:
          'Qualquer Vanguard no time já serve para o efeito base. Com The Thing, o Distended Grip carregado entra como um segundo botão de vida extra na mesma janela.',
        iconUrl: publicAsset('teamups/mister-fantastic-clobberin-research-dept-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/mister-fantastic-clobberin-research-dept-partner.png'),
      },
      {
        name: 'Fantastic Amplifier',
        partner: 'Rocket Raccoon',
        partnerRole: 'Strategist',
        input: 'F',
        baseEffect:
          'Equipa o Fantastic Amplifier por 10 s, com 25 s de recarga: a elasticidade máxima sobe para 200 (com decaimento de 12,5 por segundo no estado inflado) e ele pode entrar ativamente no Estado Inflado a cada 8 s, sem esperar a barra encher.',
        enhancedEffect:
          'Com Rocket Raccoon no time, o Brainiac Bounce arremessa os inimigos.',
        bestFor:
          'Combate contra grupo fechado em espaço aberto, quando o objetivo é maximizar a Brainiac Bounce. Sem o limite de elasticidade você escolhe quando infla, e o estado inflado passa a poder ser usado em cima do inimigo em vez de esperar encher sozinho. Com Rocket, cada quique que acerta vira arremesso, o que transforma a ultimate em ferramenta de posicionamento de aliado.',
        easySetup:
          'Rocket Raccoon no time. Sem ele o efeito base continua existindo, mas você perde os arremessos da ultimate, que é metade do motivo para escolher esta opção.',
        iconUrl: publicAsset('teamups/mister-fantastic-fantastic-amplifier-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/mister-fantastic-fantastic-amplifier-partner.png'),
      },
    ],
    sourceIds: ['teamup-bundle', 'balance-s10-mf'],
  },
  systems: [
    {
      name: 'Elastic Strength',
      input: 'Passiva',
      heading: 'A elasticidade é uma bateria que só carrega quando você acerta',
      facts: [
        'Elastic Strength enche uma barra de 0 a 100 só com acerto: 8 por golpe do Stretch Punch, 20 no Flexible Elongation e 30 no Distended Grip. Errar o arraste, que tem área, é o jeito mais rápido de perder o estado inflado.',
        'Em 100 você entra no Estado Inflado por 6 segundos: 350 de vida máxima e uma cura única de 350, mais 20% de velocidade e o soco passando de 70 para 80 de dano.',
        'O preço do estado inflado é alcance, não recarga: o soco cai de 15m para 8m e você perde Flexible Elongation, Distended Grip e o próprio Reflexive Rubber. Sobram o ataque e a ultimate.',
        'A barra decai com o tempo sem acerto, por isso segurar a forma é esperar o fim dela. O jogo certo é inflar, usar os 6s para abrir espaço e deixar o estado morrer naturalmente.',
        'Cancelar o estado mais cedo recupera as habilidades, e é o que salva a rotação quando o flanker chega e você precisa do Flexible Elongation para sair.',
      ],
      meter: [
        { label: 'Stretch Punch', value: '8 de elasticidade por acerto' },
        { label: 'Flexible Elongation', value: '20 de elasticidade' },
        { label: 'Distended Grip', value: '30 de elasticidade' },
        { label: 'Estado Inflado', value: '6s, +350 de vida máxima' },
      ],
    },
    {
      name: 'Reflexive Rubber',
      input: 'Shift',
      heading: 'A única janela de invulnerabilidade real do kit',
      facts: [
        'Reflexive Rubber absorve até 300 de dano e devolve um projétil com 60% de tudo que absorveu. O valor real não é o dano guardado, é atravessar o burst sem tomar nada.',
        'Dura no máximo 3s e recarrega em 12s. O cancelamento antecipado existe, e é a diferença entre absorver uma ultimate e absorver a metralhadora inteira.',
        'Esticado, você não ataca nem usa habilidade nenhuma. São 3s de exposição passiva: entre na forma com o flanker já comprometido, não no meio do fogo cruzado.',
        'Você fica imune a todo controle de clima durante a forma. Contra Webs, contra seize e contra o ult do Loki, é o momento de andar para dentro em vez de recuar.',
        'A queda de 35% de velocidade é o custo oculto: o projétil sai rápido, mas você não escolhe para onde vai enquanto está esticado.',
      ],
      meter: [
        { label: 'Dano absorvido', value: 'até 300' },
        { label: 'Conversão em projétil', value: '60% do absorvido' },
        { label: 'Duração máxima', value: '3s' },
        { label: 'Recarga', value: '12s' },
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelist',
      nickname: 'O frontliner que estica o braço',
      health: '375',
      difficulty:
        'A maior vida de todo o Duelist compensa um kit sem mobilidade real e com recarga alta. A curva não está em acertar, está em saber quando gastar os 6s do estado inflado.',
      job: 'Segurar a linha da frente com sustain próprio, tirar o flanker da Strategist e converter cada acerto em elasticidade para o estado inflado.',
      verdict:
        'O Reed é o Duelist que mais se parece com um Vanguard sem a rede de proteção de um Vanguard: 375 de vida, 350 de vida máxima a mais quando infla e 400 na ultimate. O Batru mede 50,53% de win rate em 41.673 partidas na Temporada 10, tier B entre os Duelists com 7,57% de taxa de escolha, leitura de niche forte e não de herói de parede. Quem escolhe ele aceita dano baixo e aceita que a vitória vem por sustain e controle, não por eliminação.',
      playstyle: [
        'Jogue ao lado do seu Vanguard, não na frente dele. O Stretch Punch tem 15m e área, o que permite limpar o flanker antes que ele chegue na sua Strategist.',
        'Gaste elasticidade em acerto, nunca em tentativa. Os 30 do Distended Grip são quase metade do estado inflado: errar o arraste joga fora a barra mais cara do kit.',
        'Guarde o Reflexive Rubber para o burst, não para o dano contínuo. Três segundos de invulnerabilidade contra uma ultimate valem mais do que 180 de dano devolvido.',
        'No estado inflado você é um tanque lento de 8m com 80 de dano por golpe. Use os 6s para atravessar a linha, não para tentar matar: sair da briga por 6s é o principal valor.',
        'O Flexible Elongation em aliado é sustain de time, e o mesmo botão em inimigo é anti-dive. Escolha pelo que está morrendo, não pela sua vida.',
      ],
      priorityKicker: 'Ordem de upgrade',
      priorityTitle: 'Distended Grip antes de Stretch Punch',
      priorityDescription:
        'O arraste é a única habilidade do kit que pega um alvo, prende por 1 segundo e devolve elasticidade mesmo sem acertar o dano. É onde o Reed deixa de depender de mira contínua.',
      abilityLoop: [
        { ability: 'Stretch Punch', input: 'LMB' },
        { ability: 'Distended Grip', input: 'RMB' },
        { ability: 'Flexible Elongation', input: 'E' },
        { ability: 'Reflexive Rubber', input: 'Shift' },
        { ability: 'Brainiac Bounce', input: 'Q' },
      ],
      upgradePlan: [
        {
          rank: 1,
          spellNumber: 2,
          input: 'RMB',
          ability: 'Distended Grip',
          label: 'O botão que cria sustain sem depender de tiro',
          baseEffect:
            'Estica a mão e prende um inimigo: 20 de dano no agarrão, 50 na tração de um alvo a até 10m e 30 quando dois inimigos se batem. São 6s de recarga, 30 de elasticidade e 1 segundo de imobilização no alvo depois da tração bem-sucedida.',
          upgradeEffect:
            'Com o aprimorado, a imobilização de 1 segundo é o que sustenta a rotação: o alvo fica parado tempo suficiente para o time inteiro fechar o resto do dano.',
          fightNote:
            'Ataque o alvo imobilizado em vez de perseguir a fuga dele. Um segundo é curto demais para castar uma ultimate em cima, mas longo o bastante para o Stretch Punch conectar duas vezes.',
          why:
            'É a única habilidade que prende um alvo e ainda paga 30 de elasticidade, quase metade do estado inflado, mesmo quando a tração erra. Todo Duelist precisa de uma ferramenta de recuperação; esta é a sua.',
          swapWhen:
            'Troque para o Flexible Elongation quando não há ninguém para agarrar à sua frente e o aliado precisa dos 75 de vida extra.',
          sourceIds: ['wiki-mf', 'liquipedia-mf', 'balance-s8-mf'],
        },
        {
          rank: 2,
          spellNumber: 3,
          input: 'E',
          ability: 'Flexible Elongation',
          label: 'A única mobilidade do kit, e ela também cura',
          baseEffect:
            'Seleciona um aliado ou inimigo e puxa você até ele: 30 de dano, 35% de lentidão por 1,5s e 75 de vida extra para você. Em aliado, o alvo ganha os mesmos 75. São 2 cargas com 6s de recarga por carga desde o balance de 15/05/2026, e a redução de velocidade no uso foi removida no mesmo patch.',
          upgradeEffect:
            'Com o aprimorado, o ganho é chegar no aliado já com 75 de vida extra antes do primeiro dano tocar, e não perder velocidade na aproximação.',
          fightNote:
            'Guarde a carga para o flanker, não para o tanque. Puxar-se para o aliado no meio da briga consome as duas e deixa você sem saída quando o dive de verdade chegar.',
          why:
            'Dois botões em um: entrada, saída e 75 de vida extra por carga. É o que permite ao Reed funcionar sem Reflexive Rubber na rotação de emergência.',
          swapWhen:
            'Troque para o Distended Grip sempre que houver inimigo agrupado ao alcance de 10m, porque o arraste prende mais de um alvo por vez.',
          sourceIds: ['wiki-mf', 'mobalytics-mf', 'balance-s8-mf'],
        },
        {
          rank: 3,
          spellNumber: 1,
          input: 'LMB',
          ability: 'Stretch Punch',
          label: 'Dano baixo que compensa em área e em elasticidade',
          baseEffect:
            'Soco de longa distância com 70 de dano, sem acerto crítico e munição infinita, a 1,1s por golpe e 15m de alcance. A área do soco persiste depois da animação, o que permite varrer o golpe em volta e ainda acertar quem se moveu devagar. Cada acerto gera 8 de elasticidade; no estado inflado o golpe vira 80 de dano com 8m de alcance.',
          upgradeEffect:
            'Com o aprimorado, o estado inflado passa a 80 de dano por golpe em 0,92s, a única janela em que o Reed compete de dano com um Duelist de tiro.',
          fightNote:
            'Varra a mira, não mire na cabeça. O mesmo inimigo não pode ser atingido duas vezes pelo mesmo golpe, então o valor está em cobrir o grupo, não em refinar no alvo único.',
          why:
            'Setenta de dano parece pouco até você lembrar que ele acerta em área, dá 8 de elasticidade de graça e não tem recarga. É o que paga a passiva inteira.',
          swapWhen:
            'Troque para o Clobberin’ Research Dept. com The Thing no time: em postura de brigão este botão deixa de ser o soco e vira o Brawling Punch carregado.',
          sourceIds: ['balance-s8-mf', 'ign-mf', 'mobalytics-mf', 'teamup-bundle'],
        },
      ],
      adaptations: [
        'Contra dive (Spider-Man, Black Panther, Angela): o Flexible Elongation com 75 de vida extra por carga é a resposta. Puxe-se para o flanker, não para o tanque, e use a imobilização de 1 segundo do Distended Grip na troca.',
        'Contra composição de barreira (Doctor Strange, Magneto): o Stretch Punch é corpo a corpo e não atravessa barreira. Troque o soco pela Brainiac Bounce, que também é corpo a corpo mas tem raio de 10m e acumula 10% de lentidão por quique.',
        'Quando o time perde o frontline: 350 de vida máxima e uma cura única de 350 no estado inflado, mais 400 na ultimate, deixam o Reed atravessar a janela sem ultimate desde que a rotação de elasticidade esteja funcionando.',
        'Em sala de teto baixo: a Brainiac Bounce quica mais rápido quando o teto é baixo. Levar o grupo para dentro do ambiente fechado antes de usar a ultimate é a forma mais barata de transformar 3 quiques em 6.',
      ],
      ultimates: [
        {
          stance: 'Quebra de agrupamento',
          name: 'Brainiac Bounce',
          bestUse:
            'O ponto de captura aberto com três ou mais inimigos dentro do raio de 10m. Cada quique que acerta libera mais um, de 70 de dano inicial até 140 no sexto, e acumula 10% de lentidão por quique, até 60%.',
          execution:
            'Ative no meio do grupo, não na borda. Os 400 de vida extra entram na hora e servem para absorver a resposta, enquanto a lentidão acumulada tira a velocidade de saída do inimigo.',
          upgradeValue:
            'O upgrade devolve 300 de custo de energia ao ultimate, e o que compra na prática é um quique a mais no ciclo, porque cada pulo extra só acontece quando o anterior acerta.',
        },
        {
          stance: 'Reposicionamento agressivo',
          name: 'Brainiac Bounce',
          bestUse:
            'Quando o time precisa tirar alguém de posição: o quique ergue o Reed acima do campo de visão e o devolve em outro lugar, com o inimigo lentado e você intacto.',
          execution:
            'Use curto, com o grupo ainda longe. Reposicionar não precisa de seis quiques: bastam três para atravessar a linha e cair do outro lado com os 400 de vida extra já contabilizados.',
          upgradeValue:
            'O mesmo ganho de energia permite repetir o ultimate dentro da janela de controle do inimigo, o que transforma a segunda passada em interrupção em vez de fuga.',
        },
      ],
      dashGuide: {
        ability: 'Flexible Elongation',
        shortRule:
          'Não é dash, é reposicionamento sob comando: 2 cargas, 15m de seleção e nenhuma perda de velocidade no uso desde o patch de 15/05/2026.',
        mechanics: [
          'A mesma tecla serve para aliado e inimigo: em aliado dá 75 de vida extra para os dois, em inimigo dá 30 de dano e 35% de lentidão por 1,5s.',
          'A redução de velocidade de movimento foi removida no balance de 15/05/2026. Antes disso a aproximação era visivelmente mais lenta; agora o custo é só a recarga de 6s por carga.',
          'Como não existe dash verdadeiro no kit, o Flexible Elongation é a única forma de atravessar espaço rápido. Guardar as duas cargas para isso vale mais do que gastar na entrada.',
          'A habilidade concede 20 de elasticidade mesmo quando usada em aliado, o que significa que o botão de sustentação também paga a passiva.',
        ],
        drills: [
          'Antes de abrir o ponto, dispare as duas cargas em aliados cheios e conte com a elasticidade que isso rendeu: são 40 pontos, quase metade do estado inflado, sem gastar o Distended Grip.',
          'Quando o dive chegar, use uma carga em aliado para atravessar a briga e guarde a outra para o retorno. Acertar o flanker com o Flexible Elongation custa lentidão nele, mas você também perde a carga.',
        ],
      },
      patterns: [
        {
          title: 'Inflar, atravessar, voltar ao normal',
          steps: [
            'Construa a barra com arraste e soco na linha da frente até os 100; o Distended Grip sozinho entrega 30 por acerto.',
            'Em 100, escolha o alvo e atravesse a linha com o estado inflado: 8m de alcance, 80 de dano e 350 de vida máxima a mais.',
            'Deixe o estado morrer naturalmente em vez de sair correndo, porque sair cedo só faz sentido quando o flanker já está em cima de você.',
          ],
        },
        {
          title: 'Postura de brigão com The Thing',
          steps: [
            'Ligue a postura de brigão com [key:C] antes do combate e não no meio dele: ela desliga o Flexible Elongation e o Distended Grip normal.',
            'Carregue o Brawling Punch até a carga cheia em ponto fechado, onde o arremesso tem contra quem bater.',
            'Com The Thing no time, carregue também o Distended Hammer no [key:RMB] e alterne os dois na mesma janela, um depois do outro: cada acerto devolve vida extra de 75% do dano. O cast simultâneo dos dois era bug e foi corrigido no patch 20261113.',
            'Desligue a postura quando precisar das habilidades de volta, principalmente antes de usar o Reflexive Rubber ou de sair da briga.',
          ],
        },
        {
          title: 'Ultimate como travessia',
          steps: [
            'Leve o grupo para uma sala de teto baixo antes de usar a Brainiac Bounce, porque os quiques se encadeiam mais rápido ali.',
            'Ative no centro do grupo e deixe os 3 quiques mínimos caírem antes de tentar esticar para 6: cada quique extra exige acertar o anterior.',
            'Saia do campo com o Flexible Elongation carregado, aproveitando que os inimigos ficaram com 60% de lentidão acumulado.',
          ],
        },
      ],
      mistakes: [
        'Segurar o estado inflado para dentro do fim. Você não tem acesso a Flexible Elongation, Distended Grip nem Reflexive Rubber nesses 6s, e é exatamente quando o flanker chega.',
        'Gastar elasticidade em tentativa. Errar o Distended Grip joga fora 30 pontos e é o caminho mais curto para nunca encher a barra de novo.',
        'Entrar no estado inflado e tentar matar com o soco de 8m. O dano de 80 importa menos do que a intimidação e a travessia; o Reed não é um Duelist de dano.',
        'Usar o Reflexive Rubber como botão de escape. São 3s sem ataque e sem habilidade, com 35% a menos de velocidade. Use contra burst, nunca contra dano contínuo.',
        'Meter o Flexible Elongation no tanque em vez do flanker. Em aliado o valor é o sustain; é contra o dive que os 75 de vida extra mudam o resultado.',
        'Contar com o Distended Hammer e o Stretch Punch ao mesmo tempo na postura de brigão: o patch 20261113 corrigiu o bug que permitia o cast simultâneo, então a janela agora é um golpe carregado por vez.',
      ],
      evidence: [
        'Vida de 375, alcance, dano e recarga por habilidade: wiki.gg (mecânica) cruzada com IGN e Mobalytics (valores) e Liquipedia (números atuais).',
        'Stretch Punch de 65 para 70 e Flexible Elongation de 8s para 6s sem redução de velocidade: balance post oficial da Temporada 8, de 15/05/2026.',
        'Clobberin’ Research Dept. como habilidade de liga e desliga, golpe sem carga de 55 para 65 e carga cheia de 1s para 0,75s: balance post oficial de 23/09/2026, resumido no Rivals Dex.',
        'Números atuais das duas opções de Team-Up (Brawling Punch 65/100 com 0,75 s, Distended Hammer 70/100 com 1 s e 3 s de recarga, conversão de 75% até 75 de Vida Extra, Amplifier com 200 de elasticidade e 8 s de inflação ativa): página oficial de heróis da temporada, relida em 15/11/2026.',
        'Fim do cast simultâneo de Distended Hammer e Stretch Punch na postura de brigão ("Double Trouble"): patch notes oficiais 20261113, seção Heroes.',
        'Win rate de dupla na Season 10.5: Fantastic Amplifier com Rocket Raccoon 61,06% em 624 partidas e Clobberin’ Research Dept. com The Thing 54,53% em 541 (Batru).',
        'Histórico do estado inflado, com 350 de vida máxima e cura única de 350 desde 14/11/2025, e da Brainiac Bounce com vida extra igual à do estado inflado: patchdelta.gg.',
        'Mecânica de área persistente do Stretch Punch, imobilização de 1s no Distended Grip e imobilidade a controle de clima no Reflexive Rubber: Fandom e wiki.gg.',
        'Win rate de 50,53% em 41.673 partidas com 7,57% de taxa de escolha, tier B entre Duelists na Temporada 10: Batru.',
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
        'Mister Fantastic aparece no bundle com duas opções na ordem: pos0 FANTASTIC AMPLIFIER e pos1 CLOBBERIN RESEARCH DEPT.',
        'Fantastic Amplifier: "Equips the Fantastic Amplifier. For the duration, Mister Fantastic\'s maximum Elasticity is increased, and he can actively enter Inflation State." Aprimorado: "When teaming up with Rocket Raccoon, Brainiac Bounce Launches hit enemies." Key_en: "F".',
        'Clobberin’ Research Dept.: "In brawler stance, Stretch Punch becomes a charged ability, firing a forward Brawling Punch. Hitting an enemy grants Bonus Health scaling with damage, and a full charge Launches hit enemies." Aprimorado: "When teaming up with The Thing, while in the brawling stance, Distended Grip also becomes a charged ability, slamming down a Distended Hammer. Hitting enemies grants Bonus Health based on damage, and Launches enemies at full charge." Key_en: "C".',
        'As duas teclas são preenchimento de slot de Team-Up, não troca de ataque: F para o Amplifier e C para o Research Dept.',
        'Divergência com a ficha do herói no site: a ficha e a wiki.gg ainda descrevem Wedded Harmony com a Invisible Woman, que o próprio texto da wiki marca como indisponível na temporada atual.',
      ],
    },
    {
      id: 'official-mf-s11',
      kind: 'official',
      title: 'Mister Fantastic — página oficial de heróis (Season 11)',
      url: 'https://www.marvelrivals.com/heroes/109bxrqivqg25/index.html',
      author: 'NetEase Games',
      published: '2026-11-13',
      confidence: 'alta',
      takeaways: [
        'Vida 375 e velocidade 6 m/s confirmadas; Stretch Punch com 70 de dano, 15 m, 1,1 s por golpe e 8 de elasticidade por acerto.',
        'Fantastic Amplifier (tecla F): 25 s de recarga e 10 s de duração, com 200 de elasticidade máxima, 8 s de recarga para inflar ativamente e 12,5 de decaimento por segundo no estado inflado; aprimorado com Rocket Raccoon, a Brainiac Bounce arremessa.',
        'Clobberin’ Research Dept. (tecla C): Brawling Punch com 65 de dano (100 na carga cheia), 0,75 s de carga e de retenção máxima, conversão de Vida Extra de 75% do dano com teto de 75; aprimorado com The Thing, Distended Hammer com 70 (100 na carga cheia), 1 s de carga e 3 s de recarga.',
        'A página marca a habilidade antiga Fantastic Amplifier na tecla C como fora de uso, o que confirma que a tecla vigente do Team-Up é F.',
      ],
    },
    {
      id: 'gameupdate-20261113',
      kind: 'official',
      title: 'Marvel Rivals Version 20261113 Patch Notes — Season 11',
      url: 'https://www.marvelrivals.com/gameupdate/20261111/41548_1319332.html',
      author: 'NetEase Games',
      published: '2026-11-11',
      confidence: 'alta',
      takeaways: [
        'Heroes, "Mister Fantastic\'s Double Trouble": corrigido o bug em que, com o Clobberin’ Research Dept. aprimorado, o Reed conseguia lançar Distended Hammer e Stretch Punch simultaneamente na postura de brigão, causando dano fora do previsto.',
        'O patch não altera números do kit do Reed fora desse conserto, o que mantém vida 375, dano 70 e as recargas já registradas.',
      ],
    },
    {
      id: 'balance-s8-mf',
      kind: 'official',
      title: 'Marvel Rivals Version 20260515 Balance Post (Temporada 8)',
      url: 'https://www.marvelrivals.com/balancepost/20260512/41667_1299947.html',
      published: '2026-05-12',
      confidence: 'alta',
      takeaways: [
        'Mister Fantastic aparece em DUELIST com a justificativa de que o controle de grupo dele estava opressivo: o patch troca lentidão por dano direto e utilidade.',
        'Increase Stretch Punch damage from 65 to 70: é a razão de o número atual ser 70 e não os 65 da wiki.gg.',
        'Remove Flexible Elongation\'s Movement Speed reduction effect. However, the charge time for each use has been reduced from 8s to 6s: o mesmo patch deu mais mobility e tirou a recarga.',
        'O texto do patch não mexe em vida, escudo nem no estado inflado nessa janela, o que sustenta os 375 como número estável.',
      ],
    },
    {
      id: 'balance-s10-mf',
      kind: 'official',
      title: 'Balance Patch 10 (23/09/2026) — resumo por herói no Rivals Dex',
      url: 'https://rivalsdex.com/patch-notes',
      published: '2026-09-23',
      confidence: 'alta',
      takeaways: [
        'Mister Fantastic aparece como "Adjusted" com uma única linha: ao selecionar o Team-Up com The Thing, o Clobberin’ Research Dept. passa a ser habilidade de liga e desliga, permitindo ligar e desligar livremente.',
        'O contexto da temporada é o que muda a leitura do herói: 38 heróis mexidos, 21 buffados, 12 nerfeados e 5 ajustados.',
        'A consequência de jogo é grande e nem aparece no texto do bundle: com a postura alternável, recuperar as habilidades normais deixou de custar a janela inteira de 6s.',
      ],
    },
    {
      id: 'wiki-mf',
      kind: 'database',
      title: 'Mister Fantastic — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Mister_Fantastic',
      published: '2026-02-25',
      confidence: 'em disputa',
      takeaways: [
        'Vida 375 e elasticidade máxima de 100 são os números que a página afirma.',
        'Elastic Strength: 6s de duração inflada, 350 de vida máxima concedida, 20% de velocidade, 8m de alcance e dano de 65 normal contra 80 inflado.',
        'Stretch Punch: 15m de alcance, 8m inflado, 8 de elasticidade por acerto e a observação de que o alcance cai no estado inflado.',
        'Flexible Elongation: 30 de dano, 75 de vida extra gerada, 8s de recarga e 2 cargas; a recarga de 8s foi superada pelo balance de 15/05/2026.',
        'Distended Grip: 20 de dano no agarrão, 50 na tração, 30 na colisão entre dois inimigos, 6s de recarga e 30 de elasticidade.',
        'Reflexive Rubber: 3s de duração, 12s de recarga, 300 de dano absorvido e conversão de 60% em projétil; cancelável com a mesma tecla.',
        'Brainiac Bounce: 70 de dano no acerto direto, 14 a mais por quique, 400 de vida extra na ativação e 3 quiques garantidos, até 6 acertando.',
        'Divergências declaradas: a cadência do Stretch Punch aparece como 1 golpe por segundo aqui e 1,1s na IGN e na Mobalytics; os 400 de vida extra da ultimate não batem com a regra oficial de igualar a vida do estado inflado, hoje 350.',
        'A página lista Wedded Harmony como indisponível na temporada atual, confirmando que o bundle é a referência para os dois Team-Ups de hoje.',
      ],
    },
    {
      id: 'fandom-mf',
      kind: 'database',
      title: 'Mister Fantastic — Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Mister_Fantastic',
      confidence: 'media',
      takeaways: [
        'Infobox com vida 375, role Duelist e dificuldade 3, id interno 1040.',
        'Confirma os dois Team-Ups atuais por nome e parceiro: Fantastic Amplifier com Rocket Raccoon e Clobberin’ Research Dept. com The Thing, mais First Family como melhoria da Invisible Woman.',
        'A área do Stretch Punch persiste por um tempo significativo depois da animação, o que permite varrer o golpe em área grande e ainda acertar alvos lentos.',
        'Ataques corpo a corpo não atravessam as barreiras de Doctor Strange e de Magneto.',
        'Reflexive Rubber dá imunidade total a dano e a controle de clima durante a forma, a 35% a menos de velocidade.',
        'Brainiac Bounce dá imobilidade a controle de clima durante a ultimate inteira, e o custo de energia já aparece como 3100 nesta versão.',
        'Estratégia: o jogo descrito é ficar perto do frontline ou como guarda-costas da retaguarda, usando as lentidões e os seizes para afastar quem tenta mergulhar.',
      ],
    },
    {
      id: 'ign-mf',
      kind: 'guide',
      title: 'Mister Fantastic Character Guide — IGN',
      url: 'https://www.ign.com/wikis/marvel-rivals/Mister_Fantastic',
      published: '2025-02-26',
      confidence: 'em disputa',
      takeaways: [
        'Vida base 350 e velocidade de 6 m/s, com a ficha atualizada pela última vez em 26/02/2025, o que a torna a fonte mais stale do conjunto.',
        'Elastic Strength: elasticidade máxima 100, dano de 75 no estado inflado, 450 de vida extra, 20% de movimento, 6s, 8m e 0,92s por golpe.',
        'Stretch Punch: dano 60, sem acerto crítico, 15m e 1,1s por golpe, com munição infinita.',
        'Reflexive Rubber: 300 de valor de escudo, 12s de recarga, 3s de duração máxima, 60% de conversão e 35% de auto-lentidão.',
        'Flexible Elongation: 30 de dano, 75 de vida extra para si e para o aliado, 2 cargas, 8s de recarga, 30 de elasticidade e 15m de seleção.',
        'Brainiac Bounce: 70 inicial, 14 por quique adicional, 140 no máximo, lentidão de 10% por quique até 60%, 3 quiques mínimos e 6 máximos.',
        'Teclas: Stretch Punch em LMB, Brainiac Bounce em Q, Reflexive Rubber em Shift, Flexible Elongation em E e Distended Grip em RMB.',
        'Por ser de fevereiro de 2025, os números de vida, dano base, vida extra e recargas estão todos pré-patch e foram substituídos pelo balance de 15/05/2026.',
      ],
    },
    {
      id: 'mobalytics-mf',
      kind: 'guide',
      title: 'Mister Fantastic Guide — Mobalytics',
      url: 'https://mobalytics.gg/marvel-rivals/mister-fantastic-guide',
      confidence: 'alta',
      takeaways: [
        'Valores atuais: Stretch Punch com 70 de dano, 15m e 1,1s por golpe; Flexible Elongation com recarga de 6s, 20 de elasticidade, 35% de lentidão e 2 cargas.',
        'Elastic Strength: 80 de dano no estado inflado e 350 de vida máxima com uma cura única de 350, removida ao sair do estado.',
        'Brainiac Bounce com 70 inicial, 14 por quique e máximo de 140, mais 400 de vida extra na ativação.',
        'Leitura de decisão: sem Flexible Elongation não existe outra mobilidade, e ela exige alvo já em posição, o que torna o herói ruim para contestar inimigos de longo alcance ou muito móveis.',
        'Leitura de decisão: com 350 de base e várias fontes de vida extra, o Reed chega a um teto de quase 780 de vida efetiva, o mais alto entre os Duelists.',
        'O texto trata o herói como alguém que gera mais de 600 de vida somando elasticidade, Flexible Elongation e Brainiac Bounce.',
      ],
    },
    {
      id: 'liquipedia-mf',
      kind: 'database',
      title: 'Mister Fantastic — Liquipedia Marvel Rivals Wiki',
      url: 'https://liquipedia.net/marvelrivals/Mister_Fantastic',
      confidence: 'alta',
      takeaways: [
        'Vida 350, velocidade 6 m/s, dificuldade 3 e game ID 1040.',
        'Elastic Strength: 100 de elasticidade máxima, 6s inflado, 80 de dano, 8m e 0,92s por golpe, com 350 de vida máxima e cura única de 350 removida ao sair do estado.',
        'Reflexive Rubber: 300 de valor de escudo, 3s de duração máxima, 12s de recarga, 35% de auto-lentidão e 60% de conversão em projétil a 80 m/s.',
        'Flexible Elongation: 15m de seleção, 75 de vida extra para si e para o aliado, 30 de dano, 35% de lentidão por 1,5s, 20 de elasticidade, 2 cargas e 8s de recarga.',
        'Brainiac Bounce: raio esférico de 10m, 70 inicial com 14 por quique e máximo de 140, queda de dano começando a 3m e chegando a 71,4% de redução aos 10m, lentidão de 10% por quique até 60%, custo de energia 3100.',
        'Regra oficial da ultimate: ao ativar, ganha imediatamente vida extra igual à do estado inflado, o que hoje vale 350 e não os 400 que a wiki.gg ainda imprime.',
        'Distended Grip: projétil a 60 m/s com 20m de alcance, 25m no segundo disparo, 20 de dano em cada projétil, 50 na tração de alvo único a 10m, 30 na colisão de dois alvos, 30 de elasticidade e 1 segundo de imobilização depois da tração bem-sucedida.',
      ],
    },
    {
      id: 'patchdelta-mf',
      kind: 'database',
      title: 'Mister Fantastic Patch History — MR Patch Delta',
      url: 'https://patchdelta.gg/marvelrivals/mister-fantastic',
      published: '2026-09-11',
      confidence: 'alta',
      takeaways: [
        '21 mudanças líquida em 7 patches, o que faz desta a melhor trilha histórica do herói.',
        '11/04/2025: base health de 350 para 375, e nenhum patch posterior reduz o valor, o que sustenta 375 como número atual.',
        '11/04/2025: a vida extra ao entrar no estado inflado cai de 450 para 400, e a Brainiac Bounce passa a conceder vida extra igual à do estado inflado.',
        '14/11/2025: os 350 de vida extra do estado inflado viram 350 de vida máxima mais uma cura única de 350, removida ao sair do estado.',
        '15/05/2026: Flexible Elongation perde a redução de velocidade e a recarga por uso cai de 8s para 6s; custo de energia da Brainiac Bounce cai de 3400 para 3100.',
        '11/09/2026: dano do golpe sem carga sobe de 55 para 65, o Launch do golpe totalmente carregado é removido, e a carga cheia cai de 1s para 0,75s.',
        'Elastic Strength: a passiva gera 8 de elasticidade no Stretch Punch; a wiki.gg ainda imprime 30 para o Flexible Elongation, contra os 20 do balance atual.',
      ],
    },
    {
      id: 'batru-mf',
      kind: 'database',
      title: 'Mister Fantastic — Marvel Rivals Season 10 Hero Tier List (Batru)',
      url: 'https://batru.gg/marvel-rivals/meta/heroes',
      published: '2026-11-15',
      confidence: 'alta',
      takeaways: [
        'Win rate de 50,53% com 7,57% de taxa de escolha em 41.673 partidas, tier B entre os Duelists na Temporada 10.',
        'A base de cálculo do tier list é de 539.198 partidas ranqueadas recentes.',
        'O encadeamento de tiers da Temporada 10 mostra Peni Parker em S, Rocket Raccoon em A e o próprio Reed logo abaixo, o que sugere que a curva de escolha dele depende muito de quem está no time.',
        'Página de sinergia relida em 15/11/2026: Fantastic Amplifier com Rocket Raccoon 61,06% em 624 partidas e Clobberin’ Research Dept. com The Thing 54,53% em 541 partidas; Reed em 53,98% geral em 4.881 partidas na janela de 30 dias da Season 10.5, com 11,14% de escolha. A janela é menor que a do retrato de temporada usado antes (41.673 partidas), então os dois números não são comparáveis entre si.',
      ],
    },
    {
      id: 'rivalsteamups-mf',
      kind: 'forum',
      title: 'Team-Up de Mister Fantastic — leitura de snippet de comunidade',
      url: 'https://rivalsteamups.com/heroes/mister-fantastic',
      confidence: 'pendente',
      takeaways: [
        'Leitura de snippet apenas: a página não foi aberta nesta sessão, e o Reddit bloqueia leitura integral, então nada aqui foi usado como número.',
        'O que fica registrado como pendência declarada: não há estatística de preferência entre Fantastic Amplifier e Clobberin’ Research Dept. que tenha sido confirmada na leitura.',
        'A recomendação deste guia foi feita por mecânica, e não por métrica de comunidade.',
      ],
    },
    {
      id: 'metabot-mf',
      kind: 'database',
      title: 'Mister Fantastic — Marvel Rivals Tier List e Kill Stats (MetaBot.GG)',
      url: 'https://metabot.gg/en/marvelrivals/heroes/tier-list',
      published: '2026-09-09',
      confidence: 'media',
      takeaways: [
        'Win rate de 53,8% com 0,5% de taxa de escolha, tier C em setembro de 2026, em uma base bem menor que a do Batru.',
        'Nos dados de abates da Temporada 9.5, o Reed fica em 21º com 19,8 abates por partida, 13.678 de dano e 14.752 de dano tomado.',
        'A leitura que importa aqui é a relação: 19,8 abates com apenas 6,4 mortes, o KDA mais estável entre os Duelists de primeira linha da lista.',
        'Divergência com o Batru registrada: 53,8% aqui contra 50,53% no Batru, com taxas de escolha muito diferentes (0,5% contra 7,57%), o que indica bases e filtros de habilidade distintos.',
      ],
    },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 5, status: 'página oficial de heróis da temporada, bundle de Team-Up, patch notes 20261113 e os dois balance posts do ano (maio e setembro de 2026)' },
    { kind: 'database', label: 'Wiki e base de dados', count: 5, status: 'wiki.gg e Fandom para mecânica, Liquipedia e patchdelta para histórico, Batru (incluindo a página de sinergia, agora lida) e MetaBot para meta' },
    { kind: 'guide', label: 'Guias escritos', count: 2, status: 'IGN e Mobalytics; a IGN está defasada desde fevereiro de 2025 e foi rebaixada para em disputa' },
    { kind: 'forum', label: 'Fórum e comunidade', count: 1, status: 'rivalsteamups lido só por snippet e registrado como pendente; Reddit bloqueia leitura integral' },
    { kind: 'video-transcript', label: 'Vídeo e transcrição', count: 0, status: 'pendente: nenhum vídeo com transcrição auditável localizado nesta sessão' },
  ],
}