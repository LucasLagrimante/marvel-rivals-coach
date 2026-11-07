import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const hela: HeroGuide = {
  id: 'hela',
  name: 'Hela',
  aliases: ['Goddess of Death', 'Rainha de Hel', 'A Deusa da Morte', 'Hela, a Benevolente'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/hela.png'),
  bannerUrl: publicAsset('heroes/banners/hela.png'),
  selectionPortraitUrl: publicAsset('heroes/select/hela.png'),
  selectionHoverUrl: publicAsset('heroes/select/hela_champion.gif'),
  selectionHoverFit: { scale: 1, x: 0, y: 0 },
  theme: {
    primary: '#4ecdc4',
    primaryRgb: '78, 205, 196',
    secondary: '#a855f7',
    secondaryRgb: '168, 85, 247',
    surface: '#04100f',
    surfaceRgb: '4, 16, 15',
  },
  roles: ['duelist'],
  lastVerified: '2026-11-07',
  confidenceSummary:
    'Vida (250), teclas e todos os números do kit vieram da página oficial de habilidades (41360_1195676.html), já com o buff de 10/07/2026 (Nightsword Thorn de 70 para 80). A wiki.gg está stale de forma relevante: ainda traz Nightsword Thorn em 70, Piercing Night com 30 de dano por rodada (atual 35), Crowstorm sem o delay de 1,8s e marca Queen of Hel e Death Knell como Team-Ups da temporada, quando as duas opções atuais são Hel Tendrils e Deep Wrath. Três divergências ficam registradas em vez de escondidas: (1) o Fandom imprime 75 de dano no Nightsword Thorn e 80% de falloff a 30m, número que nenhum balance post produz — a página oficial e o patch de 10/07/2026 mandam (80, 75% a 35m); (2) o Undead Monstro aparece com 12 de dano no Fandom, 15 em bases de 9.5 e 10 na página oficial e no patch de 07/08/2026 — o valor 10 é o atual, confirmado pelo nerf; (3) o Astral Flock aparece com 25 de bonus health na página oficial, mas esse bônus só é concedido se a transformação for cancelada antes do fim, o que a própria ficha descreve em texto e nenhuma base destaca. A saúde da Hela é 250 desde 10/01/2025 e nunca foi mexida; ela nunca recebeu Regenerative Shield, ao contrário de Daredevil, Psylocke e Storm.',
  coreRead: [
    'A janela de tiro da Hela tem 18m limpos: o Nightsword Thorn perde 25% de dano a partir daí e chega a 75% do valor em 35m. Ficar a 22m não é quase-perto do alvo, é atirar no vazio.',
    'Astral Flock ([key:Shift]) é invencibilidade de 18m, não um botão de rotação: guarde-o para dive ou risco real; atravesse o inimigo só se terminar numa linha de tiro segura.',
    'A Goddess of Death ([key:Q]) dá 1000 de vida separada por 10s e enxerga através das paredes, mas só mira até a linha dos olhos: o alvo acima de você existe para ela, e quem não voa é o alvo dela.',
  ],
  teamUps: {
    summary:
      'Deep Wrath transforma cada abate seu em um Monstro invulnerável que atira sozinho por 3s — é a opção que ganha jogo de equipe sem depender de você acertar. Hel Tendrils troca o Soul Drainer por um campo de gravidade que puxa, agrupa e cura você 20 por rodada da salva de adagas com o Venom. A primeira dá presença, a segunda dá sobrevivência.',
    recommended: 'Deep Wrath',
    recommendedReason:
      'A enquete atual do RivalsTeamUps prefere Deep Wrath (71% de 132 votos). A Batru, nos últimos 30 dias da Season 10.5, mede Hel Tendrils/Venom em 52,10% (18.279 partidas) e Deep Wrath/Namor em 51,48% (21.445). A votação indica preferência; a Batru mede o resultado da dupla completa e não prova causalidade do Team-Up. Mantenha Deep Wrath como padrão quando sua equipe converte KOs e você quer que a ultimate gere Monstros; escolha Hel Tendrils quando precisa de controle do dive e sustain com Venom. Os efeitos base funcionam sem o parceiro, então a decisão deve seguir plano e formação, não a enquete isolada.',
    options: [
      {
        name: 'Deep Wrath',
        partner: 'Namor',
        partnerRole: 'Duelista',
        input: 'RMB',
        baseEffect:
          'Sempre que Hela participa de um KO, um Undead Monstro aparece na posição do inimigo caído. Enquanto houver um Undead Monstro em campo, usar Piercing Night manda o Monstro cuspir um Nightsword Thorn no inimigo mais próximo.',
        enhancedEffect:
          'Com o Namor no time, cada ataque durante a Goddess of Death gera um Undead Monstro no ponto de impacto.',
        bestFor:
          'Times que abatem em volume e composições com dois Duelistas agressivos. O Monstro é invulnerável, dura 3s e atira a cada 0,5s: ele é dano que continua acontecendo depois que você já saiu da briga, e com o Namor a ultimate vira uma fábrica de Monstros que atravessa o mapa com você.',
        easySetup:
          'Namor como segundo Duelista. Sem ele o base já spawna o Monstro a cada KO seu; o slot do Namor só se justifica pelo volume durante a Goddess of Death. Atenção ao nerf de 07/08/2026: o Monstro bate 10 por acerto, não 15.',
        iconUrl: publicAsset('teamups/hela-deep-wrath-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/hela-deep-wrath-partner.png'),
      },
      {
        name: 'Hel Tendrils',
        partner: 'Venom',
        partnerRole: 'Vanguard',
        input: 'E',
        baseEffect:
          'Substitui o Soul Drainer por Hel Tendrils. Ao acertar, os tentáculos puxam os inimigos próximos para o ponto de impacto e os ligam, aplicando lentidão nos inimigos que tentam escapar.',
        enhancedEffect:
          'Com o Venom no time, o Piercing Night dispara uma salva densa de Nightsword Thorns infundidos de simbiote. Cada acerto direto de Nightsword Thorn restaura uma parte da vida da Hela.',
        bestFor:
          'Acerto único contra alvo protegido e a única das duas que conserta o defeito estrutural do kit: a Hela não tem nenhuma habilidade de autossustento. Com o Venom, cada Thorn direto devolve 20 de vida por salva e o Piercing Night ganha 2 projéteis — dano que vira sustain em 250 de vida.',
        easySetup:
          'Venom na vanguarda, para a cura por acerto direto ter tempo de ser usada antes do próximo dano. Sem ele o base já puxa e agrupa, mas não cura e não aumenta a salva de adagas.',
        iconUrl: publicAsset('teamups/hela-hel-tendrils-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/hela-hel-tendrils-partner.png'),
      },
    ],
    sourceIds: ['official-teamups-hela', 'official-abilities-hela', 'batru-hela', 'rivalsteamups-hela', 'balance-20260807', 'rivalstracker-teamups'],
  },
  systems: [
    {
      name: 'Nightsword Thorn',
      input: 'LMB',
      heading: 'A janela limpa acaba em 18m',
      facts: [
        'Hitscan de 80 de dano, 2 por segundo, munição de 10 e acerto crítico confirmado. Por ser hitscan, você não precisa liderar o tiro — mas também não tem forgiveness de projétil que erre por 5m.',
        'A queda de dano começa em 18m e chega a 75% do valor em 35m. A 22m você ainda está no corte, a 30m já perdeu 15% do dano base. O número importa porque 80 vira 60 sem que nada na tela avise.',
        'Trate como arma semiautomática: 10 de munição a 2 por segundo são 5s de tiro contínuo, e cada tiro errado no intervalo longo é 40 de dano perdido contra um alvo de 250.',
        'O acerto crítico é o único momento em que mirar a cabeça compensa. O jogo não marca a cabeça de forma confiável a 20m em movimento, então a leitura honesta é mirar o centro do torso e aceitar o crítico como bônus, não como plano.',
      ],
      meter: [
        { label: 'Até 18m', value: '80 por thorn' },
        { label: '30m', value: '~65 por thorn' },
        { label: '35m ou mais', value: '60 por thorn (piso de 75%)' },
      ],
    },
    {
      name: 'Astral Flock',
      input: 'Shift',
      heading: 'Invencibilidade para atravessar, não para recuar',
      facts: [
        'Dash de 18m a 15 m/s com transformada em corvo e invencibilidade durante todo o trajeto. Desde 10/07/2026 a Hela voa livremente em qualquer direção, o que transformou o botão de escape em ferramenta de reposicionamento ofensivo.',
        'Pressionar de novo cancela a transformação e devolve 25 de bonus health enquanto estiver ativa. Cancelar cedo demais deixa os 25 na mesa; deixar rodar até o fim entrega o bônus e o timing. A ficha oficial descreve o bônus como parte do cancelamento e nenhuma outra base destaca isso.',
        'A Hela não pode ser curada por aliados durante o voo. O Astral Flock é o único momento do kit em que você está completamente só — o que é exatamente o motivo de ele custar 15s de recarga e não 12 como custava antes de 11/04/2025.',
        'Atravessar o inimigo em vez de recuar é a jogada de maior teto: a transformada cancela o vento, o drift e o projétil que já estavam converging, e devolve você do outro lado com munição e cooldown intactos.',
      ],
      meter: [
        { label: 'Sem cancelamento', value: '0 de bonus health' },
        { label: 'Cancelando cedo', value: '+25 de bonus health' },
        { label: 'Recarga', value: '15s (era 12s)' },
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelista',
      nickname: 'A Rainha de Hel',
      health: '250 HP',
      difficulty: 'Média (3/5): exige mira e posicionamento, mas o kit é simples de usar e o erro raro é de alcance, não de execução',
      job:
        'Segure a janela de 18m com Nightsword Thorn, use Piercing Night para forçar o inimigo a atravessar o campo de dano e preserve Astral Flock para um dive que comprometa sua segurança, não para rotação nem quando cura/cobertura bastam.',
      verdict:
        'Escolha Hela quando sua equipe consegue manter a linha de tiro na faixa de 18m e proteger sua rotação. A Counterwatch, com dados atualizados em 07/11/2026, lista Invisible Woman, Black Panther e Magneto entre os counters mais duros; esses rankings vêm de duelos e teamfights, não são diferenças de win rate. Contra barreiras, mude para um ângulo lateral e preserve Astral Flock para a pressão que compromete sua cobertura.',
      playstyle: [
        'A Hela é um Duelista de alcance com a estrutura invertida da maioria: ela não tem burst, tem densidade. 80 de dano por thorn a 2 por segundo é 160/s enquanto a munição dura, e a recarga só acontece fora de combate. O jogo dela é sustain de dano dentro de 18m, não eliminação rápida.',
        'A passiva que parece decoração é a espinha dorsal do herói: a cada eliminação um corvo de Nastrond explode no local da morte 1,8s depois, com 80 de dano em 5m de raio. Na prática isso é o vigia de tela do kit — você mira, o corvo da passiva aparece onde o alvo morreu e fecha a briga sozinho quando alguém corre para terminar. É a razão de matar cedo importar tanto: o abate não é o fim, é o produtor de mais dano.',
        'A Goddess of Death muda a leitura de posicionamento do herói inteiro. Os 10s de 1000 de vida e de visão através de parede transformam qualquer janela de 4 segundos numa briga ganha: você sobe, lê quem está escondido, deixa a passiva do corvo fazer o trabalho e desce. O erro clássico é ativá-la cedo demais, com a ultimate em carga parcial e o time inimigo ainda inteiro.',
        'Astral Flock é sua janela de invulnerabilidade e saída, não um dash para gastar em rotação. Use-o quando o dive comprometer sua vida ou quando não houver cura/cobertura suficiente; atravesse o atacante somente se isso abrir uma linha de tiro ou recuo segura. Se dá para sobreviver com cura, escudo ou cobertura, preserve os 15s de recarga.',
      ],
      priorityKicker: 'Sequência',
      priorityTitle: 'Prioridade de habilidades',
      priorityDescription:
        'A Hela não tem upgrade numerado. A prioridade real é a ordem dentro do push: o que abre a linha de tiro, o que obriga o inimigo a vir até você e o que transforma o movimento em dano.',
      upgradePlan: [
        {
          rank: 1,
          input: 'LMB',
          ability: 'Nightsword Thorn',
          label: '80 por acerto, mas só até 18m',
          why: 'Hitscan, 2 por segundo, 10 de munição, acerto crítico. É a única fonte de dano constante do kit e o número que decide a briga. A queda a partir de 18m é o detalhe que separa quem joga bem de quem atira no vazio achando que está perto.',
          swapWhen:
            'Troque para reposicionamento quando o alvo sair da janela ou quando um Vanguard entrar na sua frente. Não segure o botão: 5s de munição é a sua janela real de dano, e cada tiro no intervalo longo é 40 de dano jogado fora.',
          sourceIds: ['official-abilities-hela', 'balance-20260710', 'wiki-hela'],
        },
        {
          rank: 2,
          input: 'Shift',
          ability: 'Astral Flock',
          label: '18m a 15 m/s com invencibilidade — saída planejada',
          why: 'A invencibilidade permite escapar de foco ou cruzar uma linha de tiro; os 25 de bonus health só vêm ao cancelar Astral Flock antes do fim do voo. Não gaste na rotação nem force o cruzamento: escolha a saída que deixa cobertura ou aliados entre você e o próximo foco.',
          swapWhen:
            'Use quando a cobertura e a cura não bastarem para segurar o dive; se o inimigo já gastou a mobilidade e existe rota segura até seu suporte, atravesse para reposicionar. Não espere uma janela perfeita quando o foco já começou.',
          sourceIds: ['official-abilities-hela', 'balance-20260710', 'fandom-hela'],
        },
        {
          rank: 3,
          input: 'RMB',
          ability: 'Piercing Night',
          label: 'Salva de 4 adagas que gruda e explode em 3s',
          why: '4 projéteis a 80 m/s, 10 de dano no impacto e 35 por rodada no campo de 3m de raio, com cooldown de 8s. Eles grudam em inimigos e em superfícies, o que significa que a área explode mesmo sem acerto. É o botão que transforma um canto estreito e um choke em zona de dano.',
          swapWhen:
            'Jogue no chão quando o time inimigo estiver agrupado num deathball, não no alvo individual. Contra alvo isolado o 10 de dano no impacto é desperdício; contra três alvos juntos é a maior pedrada do kit.',
          sourceIds: ['official-abilities-hela', 'balance-20260411'],
        },
        {
          rank: 4,
          input: 'E',
          ability: 'Soul Drainer',
          label: 'Puxa, agrupa e atordoa por 0,3s',
          why: 'Orbe em arco a 40 m/s, 3m de raio, 40 de dano no campo e 0,3s de stun, com 10s de cooldown. Os 0,3s são o recurso inteiro: é a janela para o inimigo não escapar do Piercing Night e para você tirar o primeiro thorn depois do stun. Sem Hel Tendrils, é um botão de controle, não de dano.',
          swapWhen:
            'Use quando o alvo está a um thorn de sair da sua vida. O stun de 0,3s é o suficiente para inverter um contra-ataque, e não o suficiente para prometer um abate sozinho — com Hel Tendrils equipado ele vira outro botão, com gravidade e cura.',
          sourceIds: ['official-abilities-hela', 'balance-20260411', 'wiki-hela'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Goddess of Death',
          label: '10s com 1000 de vida separada e visão através da parede',
          why: '125 de dano por explosão em 6m, ~2 por segundo, com 1000 de vida separada e leitura da posição do backline inimigo. Custa 4000 de energia. A parte que decide a luta não é o dano: são os 10s de informação que transformam a rotação seguinte do time.',
          swapWhen:
            'Ative quando a briga já está vencida pelo time ou quando você precisa da informação para a próxima. Ativar em troca sem saída, com 4000 de energia queimados, é a forma mais rápida de perder a partida.',
          sourceIds: ['official-abilities-hela', 'wiki-hela', 'balance-20260710'],
        },
      ],
      adaptations: [
        'Counterwatch (07/11) lista Invisible Woman entre os counters mais duros. Não force tiros no mesmo ângulo contra barreira/invisibilidade: rode para o outro lado do choke e use Goddess of Death para ler posições através de paredes, sem presumir que isso anule a defesa dela.',
        'Counterwatch também lista Black Panther entre os counters mais duros. Não gaste Astral Flock por prevenção: guarde-o para a entrada ou use Soul Drainer ([key:E]) para interromper quando ele terminar a investida perto do seu grupo.',
        'Counterwatch também lista Magneto entre os counters mais duros; Mobalytics explica que composições de escudo reduzem o valor do poke. Procure um ângulo lateral em vez de despejar tiros no escudo e retome a pressão quando a barreira cair.',
        'Alvos aéreos (Iron Man, Storm, Human Torch, Ultron): a Piercing Night é a resposta, não o Astral Flock. As adagas grudam em superfícies e a explosão de 3m pega o alvo aéreo quando ele cruza a área. O Astral Flock serve para sair, não para pentear.',
        'Vanguard de sustain (Venom, Thing, Adam Warlock, Hulk, Groot): não tente matar no tempo da regeneração. O Nightsword Thorn mantém 80 constantes e a passiva do corvo de 80 explode depois de 1,8s do abate, o que significa que continuar atirando costuma ser o cálculo certo em vez de perseguir o abate. O Soul Drainer existe para você ter 0,3s de margem para se reposicionar.',
        'Com Namor no time (Deep Wrath): cada KO seu deixa um Monstro invulnerável atirando por 3s, e o Piercing Night passa a comandar o Monstro em vez de só explodir. O plano muda: mate primeiro e deixe o Monstro castigar, em vez de buscar o abate limpo com todo o dano investido.',
        'Com Venom no time (Hel Tendrils): cada acerto direto do Piercing Night devolve 20 de vida e a salva ganha 2 projéteis. É a formação que torna a Hela sustentável. O plano é jogar o Piercing Night deliberadamente contra superfície com inimigos grudados e deixar a cura repor o dano.',
        'Em mapa vertical (Yggsgard, Hel’s Heaven, São Francisco): a queda lenta de Hel’s Descent ([key:Space], 3,5 m/s) é a forma de ganhar a janela de 18m sem gastar Astral Flock. Descer de uma plataforma alta custa segundos e não custa cooldown; subir custa o botão inteiro.',
      ],
      ultimates: [
        {
          stance: 'Ultimate única',
          name: 'Goddess of Death',
          bestUse:
            'Para converter um backline escondido em alvo visível e prender a equipe inimiga em lugar enquanto a passiva do corvo faz o dano. O uso mais confiável é ativá-la em briga já ganha pelo time, olhando para cima, com 4000 de energia e sem dúvida sobre a duração.',
          execution:
            'Ative com [key:Q] fora do alcance da visão inimiga, suba antes com o Astral Flock se houver alvo acima da linha dos olhos, e então jogue a Goddess de Death em quem está escondido. Segure a transformada até a passiva do corvo terminar o trabalho: você não precisa ganhar a troca de dano, só permanecer no ar por 10s. A descida deve acontecer com a passiva ainda explodindo — o corvo de 80 é o golpe final, não os 125 da ultimate.',
          upgradeValue:
            'Custo de 4000 de energia por 10s, com 1000 de vida de corvo separada que absorve o dano de foco. A perda real é a energia, não a vida: ativar em troca sem saída custa a metade da barra de ultimate da partida seguinte. Deep Wrath muda o cálculo — com o Namor, cada ataque da ultimate gera um Monstro adicional, o que é a razão de o base pesado continuar valendo nessa opção.',
        },
      ],
      dashGuide: {
        ability: 'Piercing Night → Nightsword Thorn → Astral Flock (se o dive entrar) → Nightsword Thorn',
        shortRule:
          'A Hela ganha valor pela linha de tiro: crie zona com Piercing Night e preserve Astral Flock para sair do foco; use o cruzamento apenas se terminar em cobertura ou num ângulo melhor.',
        mechanics: [
          'Astral Flock: dash de 18m a 15 m/s com invencibilidade, cooldown de 15s, voo livre em qualquer direção desde 10/07/2026 e 25 de bonus health ao cancelar a transformação.',
          'Hel’s Descent: queda de 3,5 m/s a 6 m/s horizontal. É o movimento sem cooldown e a forma real de ganhar e perder altura na troca.',
          'Nightsword Thorn: hitscan, 80 de dano, 2/s, 10 de munição, janela limpa até 18m com queda para 75% em 35m. A recarga de munição é externa à briga, então 5s é o total de dano contínuo.',
          'Piercing Night: 4 projéteis a 80 m/s que grudam e explodem 3s depois, 35 por rodada em 3m de raio, cooldown de 8s. A área existe mesmo sem acerto — basta a superfície.',
        ],
        drills: [
          'Treino 1: no modo prática, coloque um alvo de teste a 15m, 22m e 30m e compare o número de dano que aparece. A diferença entre 15m e 30m é a lição que o jogo não mostra.',
          'Treino 2: treine o Piercing Night em superfície, sem alvo. O erro mais comum é jogar no inimigo; a jogada certa é jogar no chão ou na parede onde o inimigo vai passar.',
          'Treino 3: com um alvo que dive, pratique Astral Flock atravessando em vez de recuando. O objetivo é terminar do outro lado com a munição intacta, não voltar ao ponto de origem.',
          'Treino 4: na Goddess of Death, mire deliberadamente em alguém que você não consegue ver. O exercício é usar a visão através da parede para planejar a rotação seguinte do time, não para dano.',
        ],
      },
      patterns: [
        {
          title: 'Cobrança de janela limpa',
          steps: [
            'Posicione-se entre 15m e 18m do alvo — dentro da janela de dano total, longe o suficiente para que o primeiro contra-ataque não te alcance antes do segundo thorn.',
            'Ataque com Nightsword Thorn, sempre com a munição em mente: 5s de tiro contínuo, 2 por segundo.',
            'No segundo ou terceiro thorn, lance a Piercing Night no chão à frente do alvo. As adagas grudam onde ele vai estar em 3s, não onde ele está agora.',
            'Use o Soul Drainer quando o alvo estiver a um thorn da fuga — os 0,3s de stun são a janela para ele não sair do campo de explosão.',
            'A passiva do corvo explode 1,8s depois do abate, em 5m de raio. Conte esse tempo antes de recuar.',
          ],
        },
        {
          title: 'Astral Flock como contra-dive',
          steps: [
            'Antes de iniciar, confira se o suporte tem linha de cura e identifique uma cobertura para a saída.',
            'Quando o dive comprometer sua segurança, use Astral Flock para alcançar essa cobertura ou seu aliado; cruze o inimigo só se a trajetória terminar num ângulo seguro.',
            'Cancele Astral Flock antes do fim do voo para receber os 25 de bonus health; faça isso somente depois de garantir a saída.',
            'Depois da saída, retome Nightsword Thorn da cobertura e não volte ao mesmo ângulo enquanto o atacante ainda tiver mobilidade.',
          ],
        },
        {
          title: 'Ultimate de informação',
          steps: [
            'Ative a Goddess of Death ([key:Q]) fora do campo de visão inimiga, com 4000 de energia.',
            'Se houver alvo acima da linha dos olhos, suba antes com o Astral Flock — a ultimate não consegue mirar para cima.',
            'Use os 10s de visão através da parede para localizar o backline inimigo e rodar o Piercing Night em cima dele.',
            'Desça com Hel’s Descent ([key:Space], 3,5 m/s) ao final da duração, deixando a passiva do corvo resolver o último golpe.',
            'Com Deep Wrath, cada ataque da ultimate gera um Monstro no ponto de impacto: a briga agora ganha dano sem você.',
          ],
        },
      ],
      mistakes: [
        'Atirar de 25m ou mais achando que está perto: a queda de dano começa em 18m e o piso de 75% só é alcançado em 35m. 80 vira 60 sem aviso visual, e contra 250 de vida isso é um abate perdido.',
        'Cruzar o atacante sem plano de saída: Astral Flock é invulnerabilidade, não garantia de reposicionamento; confirme cobertura ou aliado antes do voo.',
        'Segurar o botão de tiro: 10 de munição a 2 por segundo são 5s. Cada tiro no intervalo longo é 40 de dano jogado fora, e no confronto contra um Vanguard de regeneração esses 40 são a diferença entre troca e fuga.',
        'Jogar o Piercing Night no alvo individual e não na superfície: as adagas explodem 3s depois e grudam em parede e chão. Contra um alvo isolado, o 10 de dano no impacto é desperdício de 8s de cooldown.',
        'Ativar a Goddess of Death cedo demais: 4000 de energia e 10s de duração. Ativada em troca perdida, ela queima metade da barra de ultimate da partida seguinte sem colocar ninguém no chão.',
        'Confundir a mira da ultimate com alcance livre: a Goddess of Death só mira até a linha dos olhos. Alvo aéreo acima do seu nível é literalmente inatingível pela ultimate — suba antes ou aceite que o ar alto está fora do seu plano.',
        'Gastar Astral Flock para rotação ou fuga preventiva quando cura e cobertura ainda bastam: o cooldown de 15s deixa Hela exposta. Reserve-o para dive ou risco real; reposicione para aliado/cobertura quando necessário.',
      ],
      evidence: [
        'mobalytics-hela',
        'official-abilities-hela',
        'official-teamups-hela',
        'wiki-hela',
        'balance-20260710',
        'balance-20260807',
        'balance-20260411',
        'patchdelta-hela',
        'batru-hela',
        'rivalsteamups-hela',
        'rivalstracker-teamups',
        'counterwatch-hela',
        'liquipedia-hela',
        'pocketrivals-hela',
        'frankgamer-hela',
        'fandom-hela',
      ],
    },
  },
  sources: [
    {
      id: 'official-abilities-hela',
      kind: 'official',
      title: 'Hela — página oficial de habilidades (marvelrivals.com)',
      url: 'https://www.marvelrivals.com/20241123/41360_1195676.html',
      author: 'Marvel Rivals / NetEase',
      published: '2024-11-23',
      confidence: 'alta',
      takeaways: [
        'Base: 250 de vida, 6 m/s, Duelista.',
        'Nightsword Thorn ([key:LMB]): 80 de dano, hitscan de tiro direto, queda de dano começando em 18m e chegando a 75% em 35m, 2 por segundo, 10 de munição, acerto crítico sim.',
        'Goddess of Death ([key:Q]): 10s, 1000 de vida de corvo, 1 por segundo, projétil a 80 m/s, 6m de raio de explosão, 125 de dano, queda de 32% a 4m, custo de 4000 de energia.',
        'Astral Flock ([key:Shift]): dash de 15 m/s, 18m de distância, cooldown de 15s, 25 de bonus health ao cancelar a transformação, invencibilidade durante o voo.',
        'Soul Drainer ([key:E]): projétil em arco a 40 m/s, 1 de dano, 3m de raio, 40 de dano no campo, 0,3s de stun, cooldown de 10s.',
        'Piercing Night ([key:RMB]): 4 projéteis a 80 m/s, 10 de dano por projétil, delay de explosão de 3s, 3m de raio, 35 de dano por rodada, cooldown de 8s, os projéteis grudam em inimigos.',
        'Nastrond Crowstorm (passiva): delay de 1,8s, 5m de raio, 80 de dano. Hel’s Descent ([key:Space]): queda a 3,5 m/s, movimento horizontal a 6 m/s.',
        'Bloco de Team-Up da ficha: Hel Tendrils com o Venom traz 2 Nightsword Thorn a mais e 20 de vida restaurada por rodada; o Deep Wrath traz Undead Monstro com 10 de dano, 3s de duração, tiro a cada 0,5s e queda de dano começando em 20m chegando a 50% em 40m. A ficha ainda exibe Queen of Hel e Death Knell, que são legacy de Season 1 — a lista canônica vem do bundle de team-up.',
      ],
    },
    {
      id: 'official-teamups-hela',
      kind: 'official',
      title: 'Team-Up — página oficial (bundle teamup_a35bb0a0.js)',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Confirma as duas opções ativas da Hela na Temporada 10: HEL TENDRILS (parceiro Venom, Key_en "E") e DEEP WRATH (parceiro Namor, Key_en vazio).',
        'HEL TENDRILS — baseEffect_en: "Replace <Orange>Soul Drainer</> with <Orange>Hel Tendrils</>. Upon hit, tendrils pull nearby enemies toward the impact point and links them, <Debuff>Slowing</>enemies that try to escape." enhancedEffect_en: "When teaming up with Venom, <Orange>Piercing Night</> fires a dense volley of symbiote-infused Nightsword Thorns. Each direct Nightsword Thorn hit restores a portion of Hela\'s Health."',
        'DEEP WRATH — baseEffect_en: "Whenever Hela participates in a KO, an <Orange>Undead Monstro</> spawns at the fallen enemy\'s position. While an <Orange>Undead Monstro</> is present, casting <Orange>Piercing Night</> will command the Monstro to spit a <Orange>Nightsword Thorn</> at the nearest enemy." enhancedEffect_en: "When teaming up with Namor, each attack during <Orange>Goddess of Death</> spawns an <Orange>Undead Monstro</> at the point of impact."',
        'Key_en do DEEP WRATH vem vazio no bundle porque o efeito está amarrado ao Piercing Night e ao KO, não a uma tecla própria — o campo input usa [key:RMB], a tecla do ataque ao qual o efeito se acopla, e não uma tecla inventada.',
        'O nome oficial no bundle é "Hel Tendrils" com capitalização mista (as demais opções do bundle são todas em caixa alta); a entrada do manifesto de assets precisa preservar esse nome para o script não acusar mudança.',
      ],
    },
    {
      id: 'wiki-hela',
      kind: 'database',
      title: 'Hela — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Hela',
      published: '2025-10-16',
      confidence: 'media',
      takeaways: [
        'Confirma 250 de vida, role Duelista e a lista de habilidades: Hel’s Descent, Nastrond Crowstorm, Nightsword Thorn, Melee, Piercing Night, Astral Flock, Soul Drainer e Goddess of Death.',
        'STALE em vários números: Nightsword Thorn em 70 (atual 80), Piercing Night com 30 na explosão (atual 35), Crowstorm com 80 de dano mas sem o delay de 1,8s, Astral Flock com 2s de duração implícita e Soul Drainer com 40 de dano sem o detail de spell field.',
        'Marca Queen of Hel (com o Thor) como indisponível na temporada atual e descreve Hel Tendrils e Death Knell com a mecânica antiga — a Season 10 usa Hel Tendrils e Deep Wrath.',
        'Confirma duas mecânicas que a página oficial só resume: o melee de ~35 de dano com a espada e a observação de que a Hela tem pouquíssimo controle do corvo durante o voo (isso mudou em 10/07/2026, quando o voo passou a ser livre em qualquer direção).',
      ],
    },
    {
      id: 'balance-20260710',
      kind: 'official',
      title: 'Marvel Rivals Version 20260710 Balance Post (início da Season 9)',
      url: 'https://www.marvelrivals.com/20260706/41525_1306647.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-07-06',
      confidence: 'alta',
      takeaways: [
        'Hela classificada como BUFF: Nightsword Thorn de 70 para 80 de dano base.',
        'Queda de dano do Nightsword Thorn ajustada de "começando em 18m e reduzindo para 70% em 30m" para "começando em 18m e reduzindo para 75% em 35m" — a janela útil ficou mais longa em distância.',
        'Astral Flock: a Hela agora voa livremente em qualquer direção na forma de corvo. Essa é a mudança que reclassifica o botão de escape como ferramenta de reposicionamento.',
        'Removido o bônus de 15% de dano do Team-Up Anchor — nenhum número de Team-Up da Hela deve incluir esse acréscimo.',
        'É a razão de a página oficial (80 de dano, 75% em 35m) ser a fonte atual e de wiki.gg, Fandom e Liquipedia estarem com 70/80% a 30m.',
      ],
    },
    {
      id: 'balance-20260807',
      kind: 'official',
      title: 'Marvel Rivals Season 9.5 Balance Patch Notes (20260807)',
      url: 'https://marvelrivals.gg/marvel-rivals-season-9-5-balance-patch-notes',
      author: 'Marvel Rivals / NetEase (transcrito por Marvel Rivals GG)',
      published: '2026-08-07',
      confidence: 'alta',
      takeaways: [
        'Hela classificada como NERF: com o Team-Up selecionado com o Namor, o dano por acerto do Undead Monstro caiu de 15 para 10.',
        'É o nerf que explica a divergência entre a recomendação de comunidade (73% para Deep Wrath) e as medições de win rate (Deep Wrath atrás de Hel Tendrils): a opção de maior preferência recebeu o único nerf que a Hela teve na Season 9.5.',
        'O mesmo patch ajustou o Venom Swing do Venom (cooldown de 8s para 10s) e o Cyber-Web Snare da Peni, o que muda o valor de mercado dos dois parceiros das opções de Team-Up da Hela.',
      ],
    },
    {
      id: 'balance-20260411',
      kind: 'official',
      title: 'Marvel Rivals Version 20260411 Balance Post',
      url: 'https://rivalsdex.com/patch-notes-archive',
      author: 'Marvel Rivals / NetEase (transcrito por RivalsDex)',
      published: '2025-04-11',
      confidence: 'alta',
      takeaways: [
        'Cooldown do Astral Flock subiu de 12s para 15s.',
        'Dano do campo de Piercing Night subiu de 30 para 35 por rodada.',
        'Cooldown do Soul Drainer caiu de 12s para 10s.',
        'São os números que explicam por que as bases de 2024 (Astral Flock com 12s e Piercing Night com 30) não podem ser usadas como fonte atual.',
      ],
    },
    {
      id: 'balance-20260219',
      kind: 'official',
      title: 'Marvel Rivals Balance Patch de 19/02/2026',
      url: 'https://www.marvel.church/marvel-rivals-patch-notes',
      author: 'Marvel Rivals / NetEase (transcrito por Marvel Church)',
      published: '2026-02-19',
      confidence: 'alta',
      takeaways: [
        'A queda de dano do Nightsword Thorn passou a ser mais agressiva: 70% do base a 30m, antes 80%.',
        'É a mudança intermediária que liga a wiki.gg (que ainda descreve 70/80%) ao estado atual (80/75% a 35m) — a página oficial e o patch de 10/07/2026 são os que mandam.',
      ],
    },
    {
      id: 'patchdelta-hela',
      kind: 'database',
      title: 'Hela — Balance History (MR Patch Delta)',
      url: 'https://patchdelta.gg/marvelrivals/vs/daredevil/hela',
      published: '2026-08',
      confidence: 'media',
      takeaways: [
        'Histórico consolidado de 12 mudanças de stat em 8 patches, com o saldo líquido da Hela em 5 buffs, 3 nerfs e 4 ajustes.',
        'Linha do tempo: vida base 275 para 250 em 10/01/2025; munição do Nightsword Thorn de 8 para 10 em 30/05/2025; queda de dano em 30m de 70% para 80% em 21/02/2025; cooldown do Astral Flock de 12s para 15s e Piercing Night de 30 para 35 em 11/04/2025; Soul Drainer de 12s para 10s no mesmo patch; queda de dano para 70% em 19/02/2026; dano base de 70 para 80, queda para 75% em 35m e voo livre no Astral Flock em 10/07/2026; Undead Monstro de 15 para 10 em 07/08/2026.',
        'Confirma que a Hela nunca recebeu Regenerative Shield ao longo de 2026, ao contrário de Daredevil, Psylocke e Storm — a vida permanece 250.',
        'Serve como índice de verificação cruzada dos quatro balance posts citados, não como fonte primária de número.',
      ],
    },
    {
      id: 'batru-hela',
      kind: 'database',
      title: 'Hela Team-Ups & Best Duos — Batru',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/hela',
      published: '2026-11-07',
      confidence: 'media',
      takeaways: [
        'Season 10.5; agregados ranked dos últimos 30 dias, atualizados diariamente. Hela: 52,26% em 187.797 partidas. Team-Ups medidos como dupla exata: Hel Tendrils/Venom 52,10% em 18.279 partidas; Deep Wrath/Namor 51,48% em 21.445. Os resultados refletem a dupla completa e não provam causalidade do efeito.',
      ],
    },
    {
      id: 'rivalsteamups-hela',
      kind: 'guide',
      title: 'Hela Team-Ups — Season 10.5 Watch & Vote (RivalsTeamUps)',
      url: 'https://rivalsteamups.com/heroes/hela',
      published: '2026-11-07',
      confidence: 'media',
      takeaways: [
        'Leitura em 07/11/2026: 132 votos; Deep Wrath lidera com 71%. É preferência declarada, não medição de win rate.',
        'A página reproduz os efeitos atuais de Hel Tendrils e Deep Wrath e oferece um vídeo comparativo, sem transcrição validada usada neste guia.',
        'A divisão por rank tem amostras pequenas em vários tiers; não foi usada para inferir superioridade causal.',
      ],
    },
    {
      id: 'mobalytics-hela',
      kind: 'guide',
      title: 'Marvel Rivals Hela Guide — Mobalytics',
      url: 'https://mobalytics.gg/marvel-rivals/hela-guide',
      published: 'sem data indicada',
      confidence: 'media',
      takeaways: [
        'Táticas consultadas: a página recomenda reservar Astral Flock para quando cura, escudo e cobertura não bastam, voar até aliado/terreno alto, usar Soul Drainer para autodefesa e buscar ângulos laterais contra escudos. O texto introdutório diz 12s, mas a tabela da habilidade e a página oficial dizem 15s; a contradição foi registrada e nenhum número dessa fonte foi usado.',
      ],
    },
    {
      id: 'rivalstracker-teamups',
      kind: 'database',
      title: 'Marvel Rivals Team-Up Tier List — Season 9.5 (Rivals Tracker, Diamond+)',
      url: 'https://rivalstracker.com/tier-list/team-ups',
      published: '2026-09',
      confidence: 'media',
      takeaways: [
        'Season 9.5, Diamond ou acima: Hel Tendrils (Hela com Venom) com 51,17% de win rate e 1,07% de pick rate; Deep Wrath (Hela com Namor) com 46,83% e 1,42% de pick rate.',
        'É a segunda medição independente que põe o Deep Wrath atrás do Hel Tendrils, em sentido contrário à votação de 73% da comunidade.',
        'A leitura conjunta com o patch de 07/08/2026 fecha a conta: o Monstro foi nerfado de 15 para 10 no mesmo período medido.',
        'Ressalva da própria base: no momento da leitura a página exibia aviso de manutenção dos dados ao vivo, então os números podem estar congelados.',
      ],
    },
    {
      id: 'counterwatch-hela',
      kind: 'database',
      title: 'Hela — stats, counters e sinergias — Counterwatch',
      url: 'https://www.counterwatch.gg/stats/marvel-rivals/heroes/hela',
      published: '2026-11-07',
      confidence: 'media',
      takeaways: [
        'Snapshot all-ranks atualizado em 07/11/2026: 51,6% de win rate em 68.584 partidas. Counters mais duros: Invisible Woman, Black Panther e Magneto; o ranking vem de duelos/teamfights, não de win rate.',
        'Parceiros gerais mais fortes: Ultron, Peni Parker e Gorr. A página não isola o resultado de cada Team-Up; esses dados não substituem a comparação de Batru para as duplas selecionadas.',
      ],
    },
    {
      id: 'liquipedia-hela',
      kind: 'database',
      title: 'Hela — Liquipedia Marvel Rivals Wiki',
      url: 'https://liquipedia.net/marvelrivals/Hela',
      published: '2026-08',
      confidence: 'media',
      takeaways: [
        'Confirma as teclas: Nightsword Thorn em Left Click, Goddess of Death em Q, Astral Flock em Shift, Soul Drainer em E e Piercing Night em Right Click, além de Hel’s Descent em Space.',
        'Tabela de balance da wiki traz 70 de dano no Nightsword Thorn e queda para 80% em 30m — pré-patch de 10/07/2026, portanto stale, mas útil como histórico.',
        'Detalha o que as bases de comunidade omitem: a Piercing Night tem efeito de slow de 20% no centro subindo para 40% a 2,5m do centro, e a Goddess of Death tem queda de explosão de 32% a 4m.',
        'Confirma o custo de 4000 de energia da ultimate e a distância de 18m / velocidade de 15 m/s do Astral Flock.',
      ],
    },
    {
      id: 'pocketrivals-hela',
      kind: 'database',
      title: 'Hela — Pocket Rivals',
      url: 'https://pocketrivals.gg/heroes/hela',
      published: '2026-08',
      confidence: 'media',
      takeaways: [
        'Reproduz a tabela pós-patch de 10/07/2026 completa: 80 de dano, queda para 75% em 35m, Crowstorm com delay de 1,8s e 5m de raio, 25 de bonus health no Astral Flock, 3,5 m/s de queda em Hel’s Descent.',
        'Detalha o Hel Tendrils como o guia de número: distância máxima de ligação de 5m, duração máxima de 2s, slow de 20% no centro subindo para 40% a 2,5m, cooldown de 10s e 0,3s de stun.',
        'Dica tática da página: jogar linhas de visão pacientes e forçar o inimigo a cruzar o seu dano antes de aceitar o duelo.',
      ],
    },
    {
      id: 'frankgamer-hela',
      kind: 'guide',
      title: 'Marvel Rivals Hela Guide — Queen of Duelists Tips & Tricks (The Frank Gamer)',
      url: 'https://frankgamer.com/2024/12/22/marvel-rivals-hela-guide-queen-of-duelists-tips-tricks/',
      author: 'The Frank Gamer',
      published: '2024-12-22',
      confidence: 'media',
      takeaways: [
        'Tratamento semiautomático do tiro: segurar o botão é erro, porque a munição é limitada — a orientação de tocar continua válida, com o valor atual de 10 de munição e 2 por segundo.',
        'Os projéteis do Piercing Night não fazem acerto crítico, então o alvo correto é o centro do torso e não a cabeça — distinção útil contra a recomendação de mirar headshot no guia de 2024.',
        'A adaga do Piercing Night pode ser lançada no chão de propósito quando o time inimigo está em deathball ou num chokepoint apertado.',
        'Meio segundo de delay antes da transformação do Astral Flock é descrito como animação travada capaz de matar quem já está tomando dano pesado — alerta de timing que continua valendo.',
        'Limite de mira da Goddess of Death: só é possível mirar até a linha dos olhos, e o guia sugere usar o Astral Flock para subir antes de ativar a ultimate.',
        'STALE em número: o guia cita 8 de munição e 70 de dano; serve para decisão e técnica, não para valores.',
      ],
    },
    {
      id: 'fandom-hela',
      kind: 'database',
      title: 'Hela — Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Hela',
      published: '2026-08',
      confidence: 'em disputa',
      takeaways: [
        'Fornece as fraquezas declaradas que nenhuma outra base organiza: a Hela tem meio ruim de lidar com quem a mergulha, principalmente com o Astral Flock em recarga, e não tem nenhuma habilidade de autossustento.',
        'Detalha o cancelamento antecipado do Astral Flock como forma de pegar alvos que tentam te mergulhar ou que atacam o suporte do time.',
        'Detalha que a Soul Drainer consegue interromper certas ultimates, o que dá ao botão de 0,3s de stun um uso defensivo além do ofensivo.',
        'STALE e divergente em número: imprime 75 de dano no Nightsword Thorn (contra 80 da página oficial e do patch) e queda para 80% em 30m, além de Undead Monstro com 12 de dano (atual 10). Registrado como divergência no confidenceSummary; a página é a fonte dos assets de arte do herói, não dos números.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Oficial',
      count: 6,
      status:
        'Página oficial de habilidades lida integralmente (é a fonte de todos os números do kit, já pós-buff de 10/07/2026), bundle de Team-Up atual lido campo a campo (nome, parceiro, tecla e os textos base/aprimorado) e quatro balance posts (19/02/2026, 11/04/2025, 07/08/2026 e 10/07/2026). A ficha resumida do herói foi evitada como fonte de número porque mantém Queen of Hel e Death Knell de Season 1.',
    },
    {
      kind: 'database',
      label: 'Wiki/Database',
      count: 8,
      status:
        'wiki.gg lida (stale em Nightsword Thorn, Piercing Night e na lista de Team-Up), Liquipedia e Pocket Rivals para chaves e números pós-patch, MR Patch Delta como índice verificado dos 8 patches que tocaram a Hela, Batru para duplas da Season 10.5 (janela móvel de 30 dias) e Rivals Tracker como snapshot histórico da Season 9.5, Counterwatch para os matchups e o Fandom como fonte de fraquezas declaradas e de arte. Três divergências registradas no confidenceSummary.',
    },
    {
      kind: 'guide',
      label: 'Guias',
      count: 3,
      status:
        'RivalsTeamUps atualizado em 07/11 (132 votos, 71% Deep Wrath), The Frank Gamer e Mobalytics consultados. Mobalytics sustenta o uso condicional de Astral Flock, cobertura e ângulos laterais; sua página contradiz internamente a recarga (12s no resumo, 15s na tabela) e nenhum número foi usado.',
    },
    {
      kind: 'forum',
      label: 'Fórum/Comunidade',
      count: 0,
      status:
        'Pendente: a busca no Reddit retornou apenas conteúdo de sites de guias agregadores, sem snippet utilizável de thread de mains da Hela. O Reddit bloqueia leitura direta (.json e old.reddit) e nenhuma thread foi lida nesta sessão — registrado como pendente em vez de Inventar consenso de comunidade. O voto de comunidade usado vem da página de votação do RivalsTeamUps, que é fonte de guide, não de fórum.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos',
      count: 0,
      status:
        'Pendente: existe um vídeo comparativo dos dois Team-Ups da Hela ("Tether Orb or Free Squids!? Hela\'s New Team-Ups", canal ZestyGuides) linkado na página do RivalsTeamUps, mas não há transcrição validada com timestamps nesta sessão. Nenhum número de vídeo foi usado.',
    },
  ],
}
