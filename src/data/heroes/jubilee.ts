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
  lastVerified: '2026-11-01',
  confidenceSummary:
    'Revisão em 01/11/2026: o patch confirma Sparking Sprint 25/s, Dazzling Detonation Blind 0,8s, Vampiric Kin base 15/s por 6s e Firework Finale 180/s. A página oficial lista 25/s de cura contínua adicional com Blade: 40/s combinados pela redação dos efeitos, sem medição independente in-game. Blind não é evidência de interrupção de canalização. Batru é snapshot pré-patch e não decide o melhor Team-Up; 4300 de energia para a ultimate é o valor da página oficial, ainda sem confirmação independente nesta revisão.',
  coreRead: [
    'Sparkle Mark libera [key:LMB] sem custo por 6s. Marque com [key:E] e entre no alcance antes de gastar energia.',
    'O recall de Blooming Ball devolve a carga só se a orbe ainda tiver mais de 6s — guarde [key:F] para o momento em que o time vai dispersar.',
    'Sparking Sprint agora sustenta você em 25/s: use o voo curto para escapar do dive e continuar curando o time, sem tratar a autocura como licença para perseguir fundo.',
    'Energy Plasmoids cai para 70% do dano a partir de 30m: o deadzone real fica entre 10 e 25m, não em 40m como parece.',
  ],
  teamUps: {
    summary:
      'Hellfire Sparks (com The Hood) é o pick de pressão: sob velocidade de ataque, transforma Energy Plasmoids em hitscan com crítico e autocura, útil contra alvos aéreos. Vampiric Kin serve ao push agrupado: o patch adiciona 15/s base por 6s; com Blade, a página oficial lista 25/s de cura contínua adicional, ou 40/s combinados pela redação oficial. Não há medição independente in-game.',
    recommended: 'Hellfire Sparks',
    recommendedReason:
      'A escolha depende do objetivo: Hellfire Sparks para dano hitscan na janela de velocidade; Vampiric Kin para push agrupado, com 15/s base por 6s e 25/s adicionais no aprimoramento com Blade (40/s combinados, segundo os textos oficiais). Não há comparação pós-patch verificada para declarar vencedor estatístico.',
    options: [
      {
        name: 'Hellfire Sparks',
        partner: 'The Hood',
        partnerRole: 'Duelista',
        input: 'Passiva',
        baseEffect:
          'Quando a velocidade de ataque é aprimorada, os Energy Plasmoids se transformam em um ataque hitscan que concede autocura ao acertar e é capaz de causar acertos críticos.',
        enhancedEffect:
          'Ao formar dupla com The Hood, a Void Magic Mark nunca é removida, permitindo sustentar indefinidamente a forma de ataque hitscan.',
        bestFor:
          'Dano e precisão a distância, especialmente contra alvos aéreos e escudos. Só importa quando existe uma janela de velocidade de ataque: fora dela, o efeito base não engatilha.',
        easySetup:
          'The Hood no time. Sem The Hood, o efeito hitscan base só se ativa durante o aumento de Attack Speed; o aprimoramento impede que a Void Magic Mark seja removida.',
        iconUrl: publicAsset('teamups/jubilee-hellfire-sparks-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/jubilee-hellfire-sparks-partner.png'),
      },
      {
        name: 'Vampiric Kin',
        partner: 'Blade',
        partnerRole: 'Duelista',
        input: 'C',
        baseEffect:
          'Implante um Vampiric Field. Aliados dentro do campo ganham Life Steal ao atacar inimigos.',
        enhancedEffect:
          'Ao formar dupla com Blade, os aliados dentro do campo recebem um efeito adicional de Cura Contínua.',
        bestFor:
          'Briga de objetivo com linha de frente estável. O efeito base combina Life Steal em campo de 12m por 6s e cura contínua de 15/s; com Blade, a página oficial lista mais 25/s no efeito adicional (40/s combinados pela descrição oficial). Recarga de 15s: abra quando o time entrar no objetivo.',
        easySetup:
          'Sem Blade, o campo base continua ativo com Life Steal e 15/s de cura contínua. Com Blade, o aprimoramento acrescenta 25/s, chegando a 40/s combinados conforme os efeitos oficiais descritos.',
        iconUrl: publicAsset('teamups/jubilee-vampiric-kin-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/jubilee-vampiric-kin-partner.png'),
      },
    ],
    sourceIds: ['official-jubilee', 'official-teamups', 'balance-20261009-jubilee', 'batru-jubilee', 'marvelrivalsgg-jubilee'],
  },
  systems: [
    {
      name: 'Sparkle Mark',
      input: 'Passiva',
      heading: 'A passiva é o gerador de dano grátis',
      facts: [
        'Dazzling Detonation e Firework Finale aplicam Sparkle Mark nos inimigos atingidos. Energy Plasmoids detonam essas marcas.',
        'Cada detonação dá 50 de vida bônus e 20% de aumento de cura por 3s aos aliados, além de 25 de dano único no inimigo marcado.',
        'A detonação da Sparkle Mark concede 6s de aumento de velocidade de ataque: durante essa janela o [key:LMB] não consome energia e passa de 8 para 32 disparos por segundo.',
        'Dano e cura sob o bônus passam de 11/15 para 5/6,5 por acerto — é mais taxa de disparo, não mais efeito por tiro. A janela dura 6s; o total efetivo depende dos acertos, então não trate a cadência teórica como dano garantido.',
        'A janela é por marca e por alvo: cada inimigo marcado tem o próprio relógio. Marcar dois alvos vale mais do que reexplodir o mesmo.',
      ],
      meter: [
        { label: 'Sem marca', value: '8 tiros/s, 11 de dano, 15 de cura' },
        { label: 'Marca detonada', value: '32 tiros/s, sem custo de energia' },
        { label: 'Bônus no aliado', value: '+50 de vida bônus e +20% de cura por 3s' },
      ],
    },
    {
      name: 'Blooming Ball e gestão de energia',
      input: 'RMB / Shift',
      heading: 'Orbe e Sprint dividem cura e recurso',
      facts: [
        'Blooming Ball tem 2 cargas, cada uma recarregando em 12s. A orbe persegue o aliado selecionado e permanece até 6s; ao atingir a carga máxima pela primeira vez, ganha mais 6s.',
        'Cada 250 de dano ou cura investido dentro da orbe aumenta linearmente o raio (4m a 8m) e a cura por segundo (35/s a 50/s). O dano é fixo em 10/s.',
        'O recall é [key:F]. Ele não devolve energia por padrão: devolve 1 carga inteira apenas quando a orbe ainda tem mais de 6s de duração restante.',
        'Energy Plasmoids custa 48 por disparo: 8 por segundo consomem 384 de energia por segundo. Evite manter fogo sem alvo durante a janela normal.',
        'Sparking Sprint permite disparar sem custo: usa uma reserva máxima de 12, consome 4/s e recupera 1/s fora da habilidade, dando até 3s de janela gratuita. Ao terminar, cria um campo de 5m com 45 de dano, 30 de cura e repulsão.',
        'Use o Sprint quando precisar escapar ou criar uma janela de disparo sem custo; deixe a orbe sobre um aliado que já esteja trocando dano para aumentar a cura efetiva.',
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
        'O ciclo real não é atirar e recuar, é marcar. Dazzling Detonation ([key:E]) aplica marca e cega por 0,8s; nos 6s seguintes o [key:LMB] vira tiro grátis a 32 por segundo com 5 de dano e 6,5 de cura por acerto. Cada alvo marcado vale uma janela inteira de dano sem gastar energia.',
        'Dazzling Detonation em aliado ainda é cura concentrada: 65 na hora, mais 25/s por 3s e 40% de velocidade. Use quando o Vanguard tomar a primeira troca, não quando já estiver na rotação.',
        'Sparking Sprint ([key:Shift]) é reposicionamento e sustain: além de 40% de velocidade e tiro grátis, cura Jubilee a 25/s enquanto está ativa. Como a cegueira caiu para 0,8s, use Sprint para sair do dive; não dependa do blind para permanecer exposta. Ao terminar, gera campo de 5m com 45 de dano e 30 de cura.',
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
          why: '50 de dano, 0,8s de cegueira e 10% de vulnerabilidade por 3s. Nos inimigos, é o único jeito de aplicar Sparkle Mark e abrir a janela de tiro grátis de 6s. Nos aliados, 65 de cura na hora, 25/s por 3s e 40% de velocidade: o burst mais alto do kit.',
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
          label: 'Dano e cura constantes — e disparo grátis sob marca',
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
          why: 'Anel de clusters que atingem para fora, empurram os inimigos e depois orbitam você por 10s: 180/s de cura e 20/s de dano no campo, círculo interno de 6m e externo de 10m, com cada cluster causando 25 de dano e 40 de cura por acerto.',
          swapWhen:
            'A expansão do raio pode lançar os inimigos atingidos para cima; não há garantia de interromper uma ultimate canalizada. Não abra durante uma perseguição ou contra alvo aéreo em fuga, porque os 180/s de cura não alcançam ninguém.',
          sourceIds: ['official-jubilee', 'marvelrivalsgg-jubilee'],
        },
      ],
      adaptations: [
        'Contra alvos aéreos (Iron Man, Storm, Ultron): eles fecham a distância onde você tem o pior posicionamento. Use Dazzling Detonation no ar para cegar por 0,8s e criar a janela de 6s, sem presumir interrupção de canalização; ative Sparking Sprint ([key:Shift]) para escapar: o Sprint não é transferido a aliados; reserve o campo final para repelir quem já entrou no seu espaço.',
        'Contra blindados (Magneto, Bucky, Wolverine com escudo): as placas anulam seus Energy Plasmoids, então o dano vem de outra fonte. Concentre Blooming Ball no aliado que está combatendo o escudo e economize [key:Q] para depois que a barreira cair.',
        'Contra composição de negação de cura: cada fonte dela aqui é condicional (marca detonada, orbe carregada, [key:Q] aberto). Saia do alcance antes de gastar [key:E] e [key:Q] na mesma briga.',
        'Com Vampiric Kin ativo ([key:C]): abra o campo sob a linha de frente no início do push. Desde 20261009, aliados próximos recebem 15/s por 6s mesmo sem Blade; com Blade, entra mais 25/s de cura contínua. Não desperdice a janela se o time ainda está longe do objetivo.',
        'A cegueira de 0,8s do Dazzling Detonation é breve. Use para atrapalhar a mira durante uma entrada, sem presumir que interrompe habilidades canalizadas.',
      ],
      ultimates: [
        {
          stance: 'Ultimate única',
          name: 'Firework Finale',
          bestUse:
            'Briga de objetivo perdida, para reverter o controle do ponto, e como resposta a um ult de área inimigo: os 10s de campo de 180/s de cura sustentam a troca enquanto o cluster sobe em órbita.',
          execution:
            'Ataque com [key:Q] mirando no chão entre os dois times, não no inimigo mais frágil. Os clusters saem voando para fora, knocking back e lançando para cima quem está na trajetória, depois estabilizam em órbita criando o campo de 6m interno e 10m externo. Ao longo dos 10s, caminhar com o time dentro do círculo externo mantém a cura máxima.',
          upgradeValue:
            'A página oficial publica custo de 4300 de energia; os guias consultados citam 5500. A divergência não foi resolvida por fonte independente atual, então trate 4300 como valor publicado, não como confirmação cruzada. Como os clusters são individuais e o campo é centrado em você, o ultimate não segue aliados: parar de andar abandona a área.',
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
            'A 15m do alvo, aplique Dazzling Detonation ([key:E]): 50 de dano, 0,8s de cegueira, 10% de vulnerabilidade por 3s e a Sparkle Mark.',
            'Durante os 6s seguintes, segure [key:LMB] em cadência máxima (32 por segundo, 5 de dano e 6,5 de cura por acerto) sem gastar energia. A cegueira de 0,8s atrapalha a mira; não há confirmação de que interrompa canalizações nem planeje ficar exposta esperando uma janela longa.',
            'Se um aliado estiver com menos de metade da vida, aplique [key:E] nele: 65 na hora, 25/s por 3s e 40% de velocidade. Use a janela de velocidade dele para reposicionar para fora do seu alcance de tiro.',
            'Termine com recall da orbe ([key:F]) se a briga acabou e ainda restarem mais de 6s de duração — a carga volta inteira.',
          ],
        },
        {
          title: 'Recuperação de ponto com Firework Finale',
          steps: [
            'Quando o time está sendo expulso do ponto, ative [key:Q] mirando entre os dois times, não no inimigo mais frágil.',
            'Os clusters empurram inimigos próximos e, ao ampliar o raio, lançam para cima os alvos atingidos. Não há evidência de cancelamento garantido de ultimate canalizada.',
            'Nos 10s seguintes, caminhe em direção ao centro da briga mantendo o time dentro do círculo externo de 10m: 180/s de cura e 20/s de dano.',
            'Expanda o raio dos clusters quando o inimigo se amontoar na borda: o acerto lança para cima e quebra a formação antes do fim da duração.',
          ],
        },
        {
          title: 'Sustentação de frente contra dive',
          steps: [
            'Coloque Blooming Ball ([key:RMB]) sobre o Vanguard que está segurando a entrada e fique dentro do raio de investimento — a cura escala com o dano que passa por ela.',
            'Quando o Duelista passar por ela, use [key:F] para trazer a orbe de volta e imediatamente aplique Dazzling Detonation ([key:E]) no ponto onde ele vai sair: a cegueira de 0,8s é a janela para você reposicionar.',
            'Ative Sparking Sprint ([key:Shift]) para o recuo com tiro grátis e deixe a explosão final (45 de dano + repulsão) cair em cima da rota de entrada dele.',
            'Com Vampiric Kin ([key:C]) na sala, abra o campo embaixo do Vanguard antes do dive chegar, não durante.',
          ],
        },
      ],
      mistakes: [
        'Atirar fora da janela de velocidade de ataque e zerar a energia: 48 por disparo a 8 por segundo é quase 400 de energia por segundo. O dano não é o problema; o teto é.',
        'Trazer a Blooming Ball de volta com menos de 6s restantes: você perde a carga inteira e não recebe nada de volta. A devolução de uma carga inteira só existe acima desse patamar.',
        'Usar Dazzling Detonation em aliado sem dano real: 65 de cura e 25/s por 3s são um burst alto, mas 12s de recarga. Guardar para o momento certo vale mais que spamar na rotação.',
        'Abrir Firework Finale durante uma perseguição ou contra alvo aéreo em fuga: o campo é centrado em você, não no inimigo. Os 180/s de cura não alcançam quem está fora do raio de 10m.',
        'Ficar abaixo de 10m achando que ganha dano: o dano está no pico, mas você fica sem recuo nenhum. Jubilee tem 275 HP e nenhum dash fora de Sparking Sprint.',
      ],
      evidence: [
        'official-jubilee',
        'official-teamups',
        'balance-20261009-jubilee',
        'marvelrivalsgg-jubilee',
      ],
    },
  },
  sources: [
    {
      id: 'official-jubilee',
      kind: 'official',
      title: 'Jubilee — página oficial de habilidades (Jubilation Lee)',
      url: 'https://www.marvelrivals.com/20260707/41360_1306826.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-07-07',
      confidence: 'alta',
      takeaways: [
        'Perfil oficial: Strategist, 275 de vida e 600 de velocidade de movimento.',
        'Energy Plasmoids ([key:LMB]): 8 disparos por segundo, projétil a 200 m/s, 11 de dano e 15 de cura por acerto, custo de 48 de energia; a queda de dano começa em 10m e chega a 70% em 30m.',
        'Sob Sparkle Mark: 32 disparos por segundo, 5 de dano e 6,5 de cura por acerto, com 6s de duração por marca detonada.',
        'Blooming Ball ([key:RMB]): 2 cargas com 12s de recarga cada; duração máxima de 6s (+6s na primeira carga máxima); cada 250 de dano ou cura investido aumenta raio (4m a 8m) e cura (35/s a 50/s) linearmente; dano fixo de 10/s; recall com [key:F] devolve 1 carga apenas quando restam mais de 6s de duração.',
        'Sparking Sprint ([key:Shift]): 40% de velocidade, autocura de 25/s, energia máxima de 12, custo de 4/s e recuperação de 1/s, recarga de 4s; ao terminar gera campo de 5m com 45 de dano e 30 de cura.',
        'Hellfire Sparks: sob Attack Speed aprimorado, o hitscan causa 5 de dano por uso e concede 6,5 de cura por uso; com The Hood, a Void Magic Mark nunca é removida. Vampiric Kin: recarga de 15s, campo esférico de 12m e duração de 6s. O efeito base tem 15/s; com Blade, a página oficial lista mais 25/s de cura contínua.',
        'Dazzling Detonation ([key:E]): recarga de 12s, 50 de dano, cegueira de 0,8s, 10% de vulnerabilidade por 3s; em aliado gera 65 de cura na hora, 25/s por 3s e 40% de velocidade por 3s, com intervalo de geração do campo de 0,2s.',
        'Sparkle Mark (passiva): 50 de vida bônus, 20% de aumento de cura por 3s e 25 de dano único quando a marca é detonada.',
        'Firework Finale ([key:Q]): duração de 10s, campo com círculo interno de 6m e externo de 10m, 20/s de dano e 180/s de cura; 5 clusters a 20 m/s com raio de 2m, 25 de dano e 40 de cura por acerto. Custo de energia publicado como 4300.',
      ],
    },
    {
      id: 'official-teamups',
      kind: 'official',
      title: 'Team-Up — página oficial de Marvel Rivals (bundle atual)',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-10',
      confidence: 'alta',
      takeaways: [
        'Bundle oficial confirma os dois Team-Ups da Jubilee na Temporada 10, na ordem do bundle: Hellfire Sparks (pos0, parceiro The Hood, tecla PASSIVE) e Vampiric Kin (pos1, parceiro Blade, tecla C).',
        'Hellfire Sparks: quando Attack Speed é aprimorado, Energy Plasmoids viram hitscan com autocura ao acertar e possibilidade de crítico; com The Hood, a Void Magic Mark nunca é removida.',
        'Bundle literal: Base Effect: Deploy a Vampiric Field. Allies standing within the field gain Life Steal when attacking enemies. Enhanced Effect: When teaming up with Blade, allies inside the field receive an additional Continuous Healing effect. O patch adiciona 15/s ao efeito-base por 6s; a página oficial lista outros 25/s na seção aprimorada. A leitura conjunta dos efeitos é 40/s durante a dupla com Blade.',
        'Regra oficial: o efeito base funciona sem o parceiro e o aprimorado acende quando o parceiro entra no time.',
      ],
    },
    {
      id: 'balance-20261009-jubilee',
      kind: 'official',
      title: 'Marvel Rivals Version 20261009 Balance Post',
      url: 'https://www.marvelrivals.com/balancepost/20261006/41667_1315864.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-10-06',
      confidence: 'alta',
      takeaways: [
        'Sparking Sprint cura Jubilee a 25/s durante a habilidade — novo efeito do patch 20261009.',
        'Dazzling Detonation: o perfil oficial lista cegueira de 1,5s, reduzida para 0,8s pelo balance post; nenhum deles afirma que o efeito interrompe canalizações.',
        'Vampiric Kin: o post adiciona 15/s de cura base por 6s; a página oficial lista 25/s de cura contínua adicional no aprimoramento com Blade.',
        'Firework Finale: cura do campo aumentada de 150/s para 180/s.',
      ],
    },
    {
      id: 'batru-jubilee',
      kind: 'database',
      title: 'Jubilee Team-Ups — Batru (Temporada 10)',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/jubilee',
      published: '2026-08-25',
      confidence: 'media',
      takeaways: [
        'Win rate geral da Jubilee: snapshot publicado em 2026-08-25, antes do patch atual; estes números não medem o efeito dos buffs 20261009.',
        'O Batru apresenta pares medidos; os valores antigos não permitem comparar causalmente os dois Team-Ups e antecedem o patch 20261009.',
        'A vantagem observada com The Hood é associativa e pode refletir força do parceiro/meta; use a seleção pelo caso tático — hitscan e pressão contra sustentação em área —, não como prova de superioridade do Team-Up.',
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
      id: 'gamesgg-jubilee',
      kind: 'guide',
      title: 'Marvel Rivals Jubilee Guide: Abilities, Tips & Best Team Comps — Games.GG',
      url: 'https://games.gg/marvel-rivals/guides/marvel-rivals-jubilee-guide/',
      author: 'Larc',
      published: '2026-07-13',
      confidence: 'media',
      takeaways: [
        'Tática escrita: contra dive, permaneça perto do Vanguard e segure Sparking Sprint até o mergulhador se comprometer; use o knockback final para punir a entrada.',
        'A marca deve ser detonada com Energy Plasmoids para obter a janela de tiro grátis; o artigo incorretamente atribui recarga de munição ao Sprint, então essa alegação foi descartada.',
        'O guia recomenda ativar o ultimate com controle ativo do raio dos clusters e continuar usando o kit durante a duração. Seus números de dano/cura são snapshot pré-patch e não substituem fonte oficial.',
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
        'O artigo afirma que Firework Finale cancela a ultimate e lança inimigos para cima quando o raio dos clusters se expande. A página oficial confirma o lançamento, mas não garante interrupção de canalizações; a alegação de cancelamento não orienta as recomendações do guia.',
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
      count: 3,
      status:
        'Página oficial de habilidades, bundle de Team-Up e balance post 20261009. O bundle descreve a cura adicional com Blade sem número; a página oficial lista 25/s no aprimoramento e o post define 15/s no efeito-base. Valores do patch prevalecem sobre números estáticos legados.',
    },
    {
      kind: 'database',
      label: 'Wiki/Database',
      count: 2,
      status:
        'Snapshot Batru anterior a 20261009; serve para contextualizar sinergias, não para afirmar impacto pós-patch. Counterwatch fornece contexto de counters. Wiki.gg não foi validada nesta revisão.',
    },
    {
      kind: 'guide',
      label: 'Guias',
      count: 3,
      status:
        'marvelrivals.gg (2026-07-12), Games.GG (2026-07-13) e ComicBook.com. Servem para decisões e macetes; números conflitantes foram descartados.',
    },
    {
      kind: 'forum',
      label: 'Fórum/Comunidade',
      count: 1,
      status:
        'Reddit lido apenas por snippets (a thread bloqueia leitura integral neste acesso). Registrado como leitura de snippet, sem tratá-lo como fonte de dado numérico.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos',
      count: 0,
      status: 'Pendente: nenhum guia em vídeo com transcrição validada e timestamps foi processado nesta sessão.',
    },
  ],
}