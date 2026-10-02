import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const jubilee: HeroGuide = {
  id: 'jubilee',
  name: 'Jubilee',
  aliases: ['Jubilation Lee', 'X-Man', 'Mutante pirotécnica', 'Festa de Fogos'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/jubilee.png'),
  bannerUrl: publicAsset('heroes/banners/jubilee.png'),
  selectionPortraitUrl: publicAsset('heroes/select/jubilee.png'),
  selectionHoverUrl: publicAsset('heroes/select/jubilee_champion.gif'),
  selectionHoverFit: { scale: 1.2, x: 0, y: -8 },
  theme: {
    primary: '#e0246b',
    primaryRgb: '224, 36, 107',
    secondary: '#ffc94a',
    secondaryRgb: '255, 201, 74',
    surface: '#1a0714',
    surfaceRgb: '26, 7, 20',
  },
  roles: ['strategist'],
  lastVerified: '2026-10-02',
  confidenceSummary:
    'Valores de habilidade, cura, dano, alcance e recarga vêm da página oficial de habilidades da Jubilee (2026-07-07), a fonte mais atual do kit. Stats de dupla e win rate vêm do Batru na Temporada 10. Duas divergências registradas: o custo de energia do Firework Finale aparece como 4300 na página oficial e 5500 em guias de terceiros (mantido o oficial, [verificar na wiki]); e o wiki.gg ainda não tem página Jubilee preenchida, então não há valor de cooldown vindo de database para esta sessão. Curvas de Blooming Ball (cura 35/s a 50/s e raio 4m a 8m) são lineares por energia investida, conforme a página oficial.',
  coreRead: [
    'Marcas viram munição: cada Sparkle Mark transforma [key:LMB] em tiro grátis por 6s. Marque com [key:E] e metam-se dentro do alcance antes de gastar energia.',
    'O recall de Blooming Ball devolve a carga só se a orbe ainda tiver mais de 6s — guarde [key:F] para o momento em que o time vai dispersar.',
    'Dazzling Detonation em aliado é o burst de cura mais alto do kit: 65 na hora, mais 25/s por 3s, com 40% de velocidade. Use no Vanguard que acabou de tomar o primeiro dano.',
    'Energy Plasmoids cai para 70% do dano a partir de 30m: o deadzone real fica entre 10 e 25m, não em 40m como parece.',
  ],
  teamUps: {
    summary:
      'Hellfire Sparks (com The Hood) é o pick no geral: vira o [key:LMB] em hitscan com crítico e autocura, e a partida medida da Temporada 10 mostra 55,84% de win rate da dupla contra 51,09% da dupla com Blade. Vampiric Kin (com Blade) continua sendo a melhor escolha contra linha de frente que toma dano pesado em briga de objetivo.',
    recommended: 'Hellfire Sparks',
    recommendedReason:
      'O guia do marvelrivals.gg trata Hellfire Sparks como a forma mais forte da Jubilee (hitscan com autocura e crítico, útil contra alvos aéreos). A medição do Batru na Temporada 10 concorda: 55,84% de win rate em 90.445 partidas com The Hood, contra 51,09% em 22.090 partidas com Blade. A ressalva é que a dupla medida mistura a força individual do The Hood no meta, que aparece como o oitavo melhor parceiro dela (+5,0 pp). A divergência real existe com os wikis de fã, que recomendam Vampiric Kin em times de briga; nesse caso específico, o campo vampirico continua sendo a melhor leitura.',
    options: [
      {
        name: 'Hellfire Sparks',
        partner: 'The Hood',
        partnerRole: 'Duelista',
        input: 'Passiva',
        baseEffect:
          'Quando a velocidade de ataque é aprimorada, os Energy Plasmoids se transformam em um ataque hitscan que concede autocura ao acertar e é capaz de causar acertos críticos.',
        enhancedEffect:
          'Ao formar dupla com The Hood, a Void Magic Mark nunca é limpa, permitindo que ela mantenha indefinidamente a forma de ataque hitscan.',
        bestFor:
          'Dano e precisão a distância, especialmente contra alvos aéreos e escudos. Só importa quando existe uma janela de velocidade de ataque: fora dela, o efeito base não engatilha.',
        easySetup:
          'The Hood no time. Sem ele, a forma hitscan ainda dura apenas os 6s de cada Sparkle Mark detonado.',
        iconUrl: publicAsset('teamups/jubilee-hellfire-sparks-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/jubilee-hellfire-sparks-partner.png'),
      },
      {
        name: 'Vampiric Kin',
        partner: 'Blade',
        partnerRole: 'Duelista',
        input: 'C',
        baseEffect:
          'Implante um Campo Vampirico. Aliados em pé dentro do campo ganham Roubo de Vida ao atacar inimigos.',
        enhancedEffect:
          'Ao formar dupla com Blade, os aliados dentro do campo recebem um efeito adicional de Cura Contínua.',
        bestFor:
          'Briga de objetivo com linha de frente estável. O base dá 25% de roubo de vida em um campo esférico de 12m por 6s; com Blade, vira 25/s de cura contínua dentro dele. Recarga de 15s: use no início do push, não no meio.',
        easySetup:
          'Blade na dupla. Sem ele, o campo ainda entrega roubo de vida para quem está dentro.',
        iconUrl: publicAsset('teamups/jubilee-vampiric-kin-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/jubilee-vampiric-kin-partner.png'),
      },
    ],
    sourceIds: ['official-jubilee', 'official-teamups', 'batru-jubilee', 'marvelrivalsgg-jubilee'],
  },
  systems: [
    {
      name: 'Sparkle Mark',
      input: 'Passiva',
      heading: 'A passiva é o gerador de dano grátis',
      facts: [
        'Dazzling Detonation e Firework Finale aplicam Sparkle Mark nos inimigos atingidos. Energy Plasmoids detonam essas marcas.',
        'Cada detonação dá 50 de vida bônus e 20% de aumento de cura por 3s aos aliados, além de 25 de dano único no inimigo marcado.',
        'A detonação também concede 6s de aumento de velocidade de ataque: durante essa janela o [key:LMB] não consome energia e passa de 8 para 32 disparos por segundo.',
        'Dano e cura sob o bônus passam de 11/15 para 5/6,5 por acerto — é mais taxa de disparo, não mais dano por tiro. Contra um alvo de 275 HP, são cerca de 280 de dano bruto em 6s de janela.',
        'A janela é por marca e por alvo: cada inimigo marcado tem o próprio relógio. Marcar dois alvos vale mais do que reexplodir o mesmo.',
      ],
      meter: [
        { label: 'Sem marca', value: '8 tiros/s, 11 de dano, 15 de cura' },
        { label: 'Marca detonada', value: '32 tiros/s, sem custo de energia' },
        { label: 'Bônus no aliado', value: '+50 de vida bônus e +20% de cura por 3s' },
      ],
    },
    {
      name: 'Blooming Ball',
      input: 'RMB',
      heading: 'A orbe é uma barra de sustain controlável',
      facts: [
        '2 cargas, cada uma recarregando em 12s. A orbe persegue o aliado selecionado e permanece até 6s; ao atingir a carga máxima pela primeira vez, ganha mais 6s.',
        'Cada 250 de dano ou cura investido dentro da orbe aumenta o raio (4m a 8m) e a cura por segundo (35/s a 50/s) de forma linear. O dano é fixo em 10/s.',
        'O recall é [key:F]. Ele não devolve energia por padrão: devolve 1 carga inteira apenas quando a orbe ainda tem mais de 6s de duração restante.',
        'Como a escala depende de investimento, a orbe rende mais contra um time que já está trocando dano do que contra alguém parado atrás de um escudo.',
      ],
    },
    {
      name: 'Energia e investimento',
      input: 'Recurso',
      facts: [
        'Energy Plasmoids custa 48 por disparo: 8 por segundo são 384 de energia por segundo, quase o teto inteiro. É por isso que a janela de velocidade de ataque vale tanto.',
        'Sparking Sprint é o único jeito de disparar sem custo: 12 de energia máxima consumindo 4/s e recuperando 1/s quando fora dela. A janela inteira dá cerca de 3s de tiro grátis.',
        'Ao terminar, Sparking Sprint explode um campo de 5m com 45 de dano, 30 de cura e repulsão — serve tanto para recuar de um Duelista quanto para fechar uma troca.',
        'Planeje a ordem pelo custo: Sparking Sprint antes da orbe ([key:RMB]), nunca depois.',
      ],
    },
  ],
  roleGuides: {
    strategist: {
      key: 'strategist',
      label: 'Estrategista',
      nickname: 'Festa de Fogos',
      health: '275 HP',
      difficulty:
        'Média (3/5): exige mira em projétil com queda de dano curta, disciplina de recall da orbe e leitura de quando gastar [key:Q] em campo aberto',
      job: 'Use Energy Plasmoids de fora do alcance crítico, converta Dazzling Detonation em marca e em cura de aliado, mantenha Blooming Ball sobre quem está lutando e guarde Firework Finale para recuperar posição em briga de objetivo.',
      verdict:
        'Escolha Jubilee quando o time inimigo tem duelistas de projétil e backlines agrupadas, e quando o seu time tem Vanguard com HP alto para receber o empurrão de Dazzling Detonation. Evite contra linhas com negação de cura e dive que chega antes da sua orbe: ela é 275 HP e sem dash de escape.',
      playstyle: [
        'A postura padrão é 10 a 25m do alvo. Abaixo de 10m o dano está no pico, mas você não tem como recuar; acima de 30m o dano cai para 70%. Essa faixa curta é o que define o posicionamento dela contra atiradores de projétil, que precisam errar a sua distância.',
        'O ciclo real não é atirar e recuar, é marcar. Dazzling Detonation ([key:E]) aplica marca e cega por 1,5s; nos 6s seguintes o [key:LMB] vira tiro grátis a 32 por segundo com 5 de dano e 6,5 de cura por acerto. Cada alvo marcado vale uma janela inteira de dano sem gastar energia.',
        'Dazzling Detonation em aliado ([key:E] sobre um companheiro) entrega 65 de cura na hora, mais 25/s por 3s, mais 40% de velocidade. É o botão de emergência do frontline: use quando o Vanguard que você apoia levar a primeira troca, não quando ele já estiver na rotação.',
        'Sparking Sprint ([key:Shift]) é o reposicionamento e o investimento ao mesmo tempo: 40% de velocidade com tiro grátis durante a janela, e um campo de 45 de dano e 30 de cura ao terminar. A reserva de 12 de energia significa que ele não é um dash infinito — cada uso precisa valer a entrada.',
      ],
      priorityKicker: 'Sequência',
      priorityTitle: 'Prioridade de habilidades',
      priorityDescription:
        'Jubilee não tem upgrades numerados. A prioridade aqui é a ordem dentro do engajamento: gastar energia só fora da janela grátis e manter a orbe sobre quem já está tomando dano.',
      upgradePlan: [
        {
          rank: 1,
          input: 'E',
          ability: 'Dazzling Detonation',
          label: 'Marca + cegueira + burst de cura no aliado',
          why: '50 de dano, 1,5s de cegueira e 10% de vulnerabilidade por 3s. Nos inimigos, é o único jeito de aplicar Sparkle Mark e abrir a janela de tiro grátis de 6s. Nos aliados, 65 de cura na hora, 25/s por 3s e 40% de velocidade: o burst mais alto do kit.',
          swapWhen: 'Se um aliado já está com Sparkle Mark detonado, a cura em área dele vale mais que a marca em um alvo já marcado. Não repita marca em quem já está marcado.',
          sourceIds: ['official-jubilee', 'marvelrivalsgg-jubilee'],
        },
        {
          rank: 2,
          input: 'RMB',
          ability: 'Blooming Ball',
          label: 'Sustain escalável sobre a linha de frente',
          why: 'Cura 35/s a 50/s num raio de 4m a 8m, conforme a energia investida dentro dela. Cada 250 de dano ou cura acumula. É a única fonte de cura que não depende de mira em você.',
          swapWhen:
            'Recall com [key:F] só devolve 1 carga se a orbe ainda tiver mais de 6s de duração. Se a briga está acabando e você precisa da carga para a próxima, devolva cedo.',
          sourceIds: ['official-jubilee', 'marvelrivalsgg-jubilee'],
        },
        {
          rank: 3,
          input: 'LMB',
          ability: 'Energy Plasmoids',
          label: 'Dano e cura constants — e munição grátis sob marca',
          why: '8 disparos por segundo, 11 de dano e 15 de cura por acerto, a 200 m/s. Com o custo de 48 por disparo, a restrição real não é DPS e sim o teto de energia: fora da janela de velocidade de ataque, atirar sem parar zera a barra.',
          swapWhen:
            'A queda de dano começa em 10m e chega a 70% em 30m. Abaixo de 10m você está no pico sem recuo; acima de 30m, cada tiro rende 7,7 de dano. Ajuste a distância em vez de continuar atirando.',
          sourceIds: ['official-jubilee', 'marvelrivalsgg-jubilee'],
        },
        {
          rank: 4,
          input: 'Shift',
          ability: 'Sparking Sprint',
          label: 'Reposicionamento com tiro grátis e explosão de saída',
          why: '40% de velocidade, pulo e velocidade de ataque maiores, com Energy Blasts sem custo enquanto dura. Ao encerrar, gera um campo de 5m com 45 de dano, 30 de cura e repulsão. Recarga de 4s, 12 de energia máxima a 4/s consumindo e 1/s recuperando.',
          swapWhen:
            'Guarde para a rotação de cura, não para o ataque: a explosão final (45 de dano + repulsão) é a melhor defesa contra um Duelista que já chegou. Se a energia está abaixo de 6, o tiro grátis não cobre a janela toda.',
          sourceIds: ['official-jubilee', 'marvelrivalsgg-jubilee'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Firework Finale',
          label: 'Recuperação de posição em briga de objetivo',
          why: 'Anel de clusters que atingem para fora, empurram os inimigos e depois orbitam você por 10s: 150/s de cura e 20/s de dano no campo, círculo interno de 6m e externo de 10m, com cada cluster causando 25 de dano e 40 de cura por acerto.',
          swapWhen:
            'Expandir o raio dos clusters lança os inimigos atingidos para cima — é o cancelamento de canal do inimigo. Não abra em chased ou em alvo aéreo em fuga, porque os 150/s de cura não alcançam ninguém.',
          sourceIds: ['official-jubilee', 'marvelrivalsgg-jubilee'],
        },
      ],
      adaptations: [
        'Contra alvos aéreos (Iron Man, Storm, Ultron): eles fecham a distância onde você tem o pior posicionamento. Use Dazzling Detonation no ar para cegar por 1,5s e criar a janela de 6s, e entregue Sparking Sprint ([key:Shift]) a um aliado dentro do raio da orbe para quebrar o perseguidor com a explosão de saída.',
        'Contra blindados (Magneto, Bucky, Wolverine com escudo): as placas anulam seus Energy Plasmoids, então o dano vem de outra fonte. Concentre Blooming Ball no aliado que está combatendo o escudo e economize [key:Q] para depois que a barreira cair.',
        'Contra composição de negação de cura: cada fonte dela aqui é condicional (marca detonada, orbe carregada, [key:Q] aberto). Saia do alcance antes de gastar [key:E] e [key:Q] na mesma briga.',
        'Com Vampiric Kin ativo ([key:C]): abra o campo vampirico embaixo do seu Vanguard logo no início do push. Com Blade na dupla, os 25/s de cura contínua dentro do campo tornam a briga de objetivo um trade ganho — o recall antecipado da orbe nesse cenário significa perder sustentação dupla ao mesmo tempo.',
        'Em mapas de corredor e sala de controle: a cegueira de 1,5s do Dazzling Detonation vale mais que o dano de 50. Aplique no Vanguard inimigo que entra pela porta, antes que ele avance para fora da sua linha de tiro.',
      ],
      ultimates: [
        {
          stance: 'Ultimate única',
          name: 'Firework Finale',
          bestUse:
            'Briga de objetivo perdida, para reverter o controle do ponto, e como resposta a um ult de área inimigo: os 10s de campo de 150/s de cura sustentam a troca enquanto o cluster sobe em órbita.',
          execution:
            'Ataque com [key:Q] mirando no chão entre os dois times, não no inimigo mais frágil. Os clusters saem voando para fora, knocking back e lançando para cima quem está na trajetória, depois estabilizam em órbita criando o campo de 6m interno e 10m externo. Ao longo dos 10s, caminhar com o time dentro do círculo externo mantém a cura máxima.',
          upgradeValue:
            'O custo publicado na página oficial é de 4300 de energia. Guias de terceiros citam 5500 — a diferença é grande e muda quantas vezes você abre por partida; confirme na wiki antes de considerar 4300 como valor fechado. Como os clusters são individuais e o campo é centrado em você, o ultimate não segue aliados: parar de andar abandona a área.',
        },
      ],
      dashGuide: {
        ability: 'Sparking Sprint ([key:Shift]) → Energy Plasmoids ([key:LMB]) → Dazzling Detonation ([key:E]) → recall de Blooming Ball ([key:F])',
        shortRule:
          'Ative [key:Shift] antes de gastar energia: durante a janela o [key:LMB] é grátis, e a explosão final abre espaço para Dazzling Detonation.',
        mechanics: [
          'Sparking Sprint dá 40% de velocidade, aumenta o pulo e a velocidade de ataque, e zera o custo do Energy Plasmoids enquanto ativa. A energia é o limite real: 12 de teto a 4/s consumindo dão cerca de 3s de tiro grátis antes de acabar.',
          'A sequência de energia que decide a briga é: marca em um alvo ([key:E] inimigo), tiro grátis por 6s ([key:LMB]), cura em aliados só se alguém estiver ferido, e o recall da orbe quando o time começa a se mover. Nunca queime a carga da orbe em um push que não vai se converter.',
          'Dazzling Detonation tem alcance igual ao da orbe selecionada. Lançar a orbe antes aumenta o alcance da detonação — é a forma de cegar e marcar alguém a distância sem se expor.',
          'O recall manual ([key:F]) não devolve energia por padrão. Devolve uma carga inteira apenas quando a orbe ainda tem mais de 6s restantes; abaixo disso você está jogando uma carga fora.',
        ],
        drills: [
          'Treino 1: no modo prática, marque um alvo com [key:E] e conte as janelas de 6s. O alvo tem cronômetro próprio — dois alvos marcados valem duas janelas, reexplodir o mesmo não rende nada.',
          'Treino 2: lance Blooming Ball em um dummy aliado, cause dano perto dela e observe o raio e a cura subirem linearmente. Aprenda a ler a barra de carga da orbe pelo tamanho da cúpula, não pelo número.',
          'Treino 3: repita o push com [key:C] de Vampiric Kin ativo e aprenda a abrir o campo abaixo do Vanguard, não em cima dele — o efeito é de área, não de alvo.',
          'Treino 4: com Sparking Sprint ativo, pratique terminar o tiro grátis exatamente no fim da energia para que a explosão de 45 de dano caia sobre o Duelista que está te pressionando.',
        ],
      },
      patterns: [
        {
          title: 'Marca → tiro grátis → cura de aliado',
          steps: [
            'A 15m do alvo, aplique Dazzling Detonation ([key:E]): 50 de dano, 1,5s de cegueira, 10% de vulnerabilidade por 3s e a Sparkle Mark.',
            'Durante os 6s seguintes, segure [key:LMB] em Cadência máxima (32 por segundo, 5 de dano e 6,5 de cura por acerto) sem gastar energia. Aproveite a cegueira para acertar o torso, não a cabeça.',
            'Se um aliado estiver com menos de metade da vida, aplique [key:E] nele: 65 na hora, 25/s por 3s e 40% de velocidade. Use a janela de velocidade dele para reposicionar para fora do seu alcance de tiro.',
            'Termine com recall da orbe ([key:F]) se a briga acabou e ainda restarem mais de 6s de duração — a carga volta inteira.',
          ],
        },
        {
          title: 'Recuperação de ponto com Firework Finale',
          steps: [
            'Quando o time está sendo expulso do ponto, ative [key:Q] mirando entre os dois times, não no inimigo mais frágil.',
            'O anel de clusters knocks back e lança para cima quem entra na trajetória — é aqui que se cancela um ult inimigo em canalização.',
            'Nos 10s seguintes, caminhe em direção ao centro da briga mantendo o time dentro do círculo externo de 10m: 150/s de cura e 20/s de dano.',
            'Expanda o raio dos clusters quando o inimigo se amontoar na borda: o acerto lança para cima e quebra a formação antes do fim da duração.',
          ],
        },
        {
          title: 'Sustentação de frente contra dive',
          steps: [
            'Coloque Blooming Ball ([key:RMB]) sobre o Vanguard que está segurando a entrada e fique dentro do raio de investimento — a cura escala com o dano que passa por ela.',
            'Quando o Duelista passar por ela, use [key:F] para trazer a orbe de volta e imediatamente aplique Dazzling Detonation ([key:E]) no ponto onde ele vai sair: a cegueira de 1,5s é a janela para você reposicionar.',
            'Ative Sparking Sprint ([key:Shift]) para o recuo com tiro grátis e deixe a explosão final (45 de dano + repulsão) cair em cima da rota de entrada dele.',
            'Com Vampiric Kin ([key:C]) na sala, abra o campo embaixo do Vanguard antes do dive chegar, não durante.',
          ],
        },
      ],
      mistakes: [
        'Atirar fora da janela de velocidade de ataque e zerar a energia: 48 por disparo a 8 por segundo é quase 400 de energia por segundo. O dano não é o problema; o teto é.',
        'Trazer a Blooming Ball de volta com menos de 6s restantes: você perde a carga inteira e não recebe nada de volta. A devolução de uma carga inteira só existe acima desse patamar.',
        'Usar Dazzling Detonation em aliado sem dano real: 65 de cura e 25/s por 3s são um burst alto, mas 12s de recarga. Guardar para o momento certo vale mais que spamar na rotação.',
        'Abrir Firework Finale em chased ou contra alvo aéreo em fuga: o campo é centrado em você, não no inimigo. Os 150/s de cura não alcançam quem está fora do raio de 10m.',
        'Ficar abaixo de 10m achando que ganha dano: o dano está no pico, mas você fica sem recuo nenhum. Jubilee tem 275 HP e nenhum dash fora de Sparking Sprint.',
      ],
      evidence: [
        'official-jubilee',
        'marvelrivalsgg-jubilee',
        'batru-jubilee',
        'counterwatch-jubilee',
        'reddit-jubilee-kit',
      ],
    },
  },
  sources: [
    {
      id: 'official-jubilee',
      kind: 'official',
      title: 'Jubilee — página oficial de habilidades (Jubilation Lee)',
      url: 'https://www.marvelrivals.com/heroes/index.html?id=jubilee',
      author: 'Marvel Rivals / NetEase',
      published: '2026-07-07',
      confidence: 'alta',
      takeaways: [
        'Perfil oficial: Strategist, 275 de vida e 600 de velocidade de movimento.',
        'Energy Plasmoids ([key:LMB]): 8 disparos por segundo, projétil a 200 m/s, 11 de dano e 15 de cura por acerto, custo de 48 de energia; a queda de dano começa em 10m e chega a 70% em 30m.',
        'Sob Sparkle Mark: 32 disparos por segundo, 5 de dano e 6,5 de cura por acerto, com 6s de duração por marca detonada.',
        'Blooming Ball ([key:RMB]): 2 cargas com 12s de recarga cada; duração máxima de 6s (+6s na primeira carga máxima); cada 250 de dano ou cura investido aumenta raio (4m a 8m) e cura (35/s a 50/s) linearmente; dano fixo de 10/s; recall com [key:F] devolve 1 carga apenas quando restam mais de 6s de duração.',
        'Sparking Sprint ([key:Shift]): 40% de velocidade, energia máxima de 12, custo de 4/s e recuperação de 1/s, recarga de 4s; ao terminar gera campo de 5m com 45 de dano e 30 de cura.',
        'Dazzling Detonation ([key:E]): recarga de 12s, 50 de dano, cegueira de 1,5s, 10% de vulnerabilidade por 3s; em aliado gera 65 de cura na hora, 25/s por 3s e 40% de velocidade por 3s, com intervalo de geração do campo de 0,2s.',
        'Sparkle Mark (passiva): 50 de vida bônus, 20% de aumento de cura por 3s e 25 de dano único quando a marca é detonada.',
        'Firework Finale ([key:Q]): duração de 10s, campo com círculo interno de 6m e externo de 10m, 20/s de dano e 150/s de cura; 5 clusters a 20 m/s com raio de 2m, 25 de dano e 40 de cura por acerto. Custo de energia publicado como 4300.',
      ],
    },
    {
      id: 'official-teamups',
      kind: 'official',
      title: 'Team-Up — página oficial de Marvel Rivals (bundle teamup da temporada)',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Bundle oficial confirma os dois Team-Ups da Jubilee na Temporada 10, na ordem do bundle: Hellfire Sparks (pos0, parceiro The Hood, tecla PASSIVE) e Vampiric Kin (pos1, parceiro Blade, tecla C).',
        'Hellfire Sparks: o ataque hitscan causa 5 de dano por uso, 6,5 de cura por uso e 2 de cura por disparo, com a mesma queda de dano do ataque base (10m até 70% em 30m). O efeito especial do The Hood é a Void Magic Mark nunca ser limpa.',
        'Vampiric Kin: recarga de 15s, campo esférico de 12m, duração de 6s e 30% de taxa de roubo de vida; com Blade, os aliados dentro do campo ganham 25/s de cura contínua.',
        'Regra oficial: o efeito base funciona sem o parceiro e o aprimorado acende quando o parceiro entra no time.',
      ],
    },
    {
      id: 'batru-jubilee',
      kind: 'database',
      title: 'Jubilee Team-Ups — Batru (Temporada 10)',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/jubilee',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Win rate geral da Jubilee na Temporada 10: 50,81% em 372.736 partidas (agregado dos últimos 30 dias, recalculado diariamente).',
        'Duplas medidas: Hellfire Sparks com The Hood em 55,84% de win rate com 90.445 partidas; Vampiric Kin com Blade em 51,09% com 22.090 partidas.',
        'The Hood aparece como oitavo melhor parceiro da Jubilee (+5,0 pp), o que em parte explica a vantagem da dupla medida; Blade aparece com +0,3 pp, praticamente neutro.',
        'Melhores parceiros por win rate: Peni Parker (60,52%), Devil Dinosaur (58,56%), Storm (57,90%), Ultron (57,68%), Scarlet Witch (57,44%).',
        'Pares mais fracos: Doctor Strange (40,24%), Squirrel Girl (41,58%), Phoenix (42,70%), The Punisher (44,28%), Cyclops (45,11%).',
      ],
    },
    {
      id: 'counterwatch-jubilee',
      kind: 'database',
      title: 'Jubilee Counters & Win Rate — Counterwatch',
      url: 'https://www.counterwatch.gg/stats/marvel-rivals/heroes/jubilee',
      published: '2026-09',
      confidence: 'media',
      takeaways: [
        'Tier B de Strategista, win rate de 50,7% em 250.974 partidas rastreadas pela comunidade; 16,5 abates, 19,5 assistências e 4.164 de cura por 10 minutos.',
        'Matchups mais difíceis contra Jubilee: Black Panther (+10,5), Spider-Man (+8,4), Cloak & Dagger (+8,3), Magik (+7,2) e Moon Knight (+7,0) — dive e negação direta do valor dela.',
        'Matchups mais favoráveis a ela: Peni Parker, Devil Dinosaur, Star-Lord e Phoenix, com mais de 10 pontos de vantagem no score de counter.',
        'Duplas mais fortes em win rate combinada: Magik (57,2%), Mantis (57,2%), Storm (56,7%), Peni Parker (56,1%) e Ultron (55,2%).',
      ],
    },
    {
      id: 'marvelrivalsgg-jubilee',
      kind: 'guide',
      title: 'Marvel Rivals Jubilee Guide: Abilities, How to Play & Best Team Compositions — marvelrivals.gg',
      url: 'https://marvelrivals.gg/jubilee/',
      author: 'Madian Madian',
      published: '2026-07-12',
      confidence: 'media',
      takeaways: [
        'Confirma o kit e a role: 275 de vida, Strategist, introduzida na Temporada 9.',
        'Blooming Ball: a orbe segue o aliado selecionado e gera uma cúpula de cura que alarga conforme ela cura aliados ou causa dano dentro dela — deploy dentro de briga com vários alvos afetados.',
        'Pressionar [key:E] com a orbe ativa a detona, cega os inimigos e dá cura e velocidade aos aliados dentro da cúpula — o uso é sob pressão, e o custo é a recarga de 12s.',
        'Hellfire Sparks é tratada como a forma mais forte da Jubilee ([key:LMB] hitscan com autocura e crítico no aumento de velocidade de ataque); Vampiric Kin é tratada como a opção de sustentação em área.',
        'Alvos aéreos e escudos são o caso de uso citado para o hitscan, porque projétil erra contra eles.',
      ],
    },
    {
      id: 'comicbook-jubilee',
      kind: 'guide',
      title: 'Marvel Rivals Season 9 Trailer Reveals First Official Looks At 2 New Characters — ComicBook.com',
      url: 'https://comicbook.com/gaming/news/marvel-rivals-season-9-trailer-reveals-first-official-looks-at-2-new-characters',
      published: '2026-07',
      confidence: 'media',
      takeaways: [
        'Confirma os dois Team-Ups da Temporada 9/10 em que só se pode equipar um por partida: Hellfire Sparks e Vampiric Kin.',
        'Descreve o encerramento do Sparking Sprint: ao terminar, gera um campo de fogos de artifício com dano e repulsão de inimigos, curando aliados.',
        'Descreve a transferência do Dazzling Detonation para o aliado, concedendo cura e aumento de velocidade, e o cancelamento do Firework Finale que lança para cima os inimigos quando o raio dos clusters se expande.',
      ],
    },
    {
      id: 'reddit-jubilee-kit',
      kind: 'forum',
      title: 'Full look at Jubilee\'s kit — r/marvelrivals',
      url: 'https://www.reddit.com/r/marvelrivals/comments/1uq6vi7/full_look_at_jubilees_kit',
      published: '2026-07',
      confidence: 'media',
      takeaways: [
        'Leitura de snippets do Reddit, não de thread completa (Reddit bloqueia leitura integral neste acesso): a comunidade descreve o ciclo como marcar com Dazzling Detonation (cegueira e vulnerabilidade) e detonar a marca com o ataque primário.',
        'Consenso snippets de que Blooming Ball é a sucessora da cúpula do Cloak & Dagger, e Sparking Sprint cumpre função de mobilidade similar.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Oficial',
      count: 2,
      status:
        'Página oficial de habilidades (2026-07-07) com todos os números do kit e bundle oficial de Team-Up da temporada. Único ponto em disputa é o custo de energia do Firework Finale (4300 oficial x 5500 em guias).',
    },
    {
      kind: 'database',
      label: 'Wiki/Database',
      count: 2,
      status:
        'Batru (Temporada 10) com win rate de dupla e de parceiro; Counterwatch com score de counter e sinergia. A wiki.gg não tem página Jubilee preenchida nesta sessão — [verificar na wiki] antes de fixar cooldown fora do que a página oficial publica.',
    },
    {
      kind: 'guide',
      label: 'Guias',
      count: 2,
      status:
        'marvelrivals.gg (atualizado em 2026-07-12) e ComicBook.com. Servem para decisão e macete, nunca para número — divergência de custo de ultimate veio daqui.',
    },
    {
      kind: 'forum',
      label: 'Fórum/Comunidade',
      count: 1,
      status:
        'Reddit lido apenas por snippets (a thread bloqueia leitura integral neste acesso). Registrado como leitura de snippet, semotanhar como fonte de dado numérico.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos',
      count: 0,
      status: 'Pendente: nenhum guia em vídeo com transcrição validada e timestamps foi processado nesta sessão.',
    },
  ],
}