import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const adamWarlock: HeroGuide = {
  id: 'adam-warlock',
  name: 'Adam Warlock',
  aliases: ['Adam', 'Warlock', 'Ele', 'Him', 'Avatar da Vida', 'Magus'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/adam_warlock.png'),
  bannerUrl: publicAsset('heroes/banners/adam_warlock.png'),
  selectionPortraitUrl: publicAsset('heroes/select/adam_warlock.png'),
  selectionHoverUrl: publicAsset('heroes/select/adam_warlock_champion.gif'),
  selectionHoverFit: { scale: 1.5, x: 0, y: -19 },
  theme: {
    primary: '#e6c15c',
    primaryRgb: '230, 193, 92',
    secondary: '#6fb7ff',
    secondaryRgb: '111, 183, 255',
    surface: '#0d1017',
    surfaceRgb: '13, 16, 23',
  },
  roles: ['strategist'],
  lastVerified: '2026-09-20',
  confidenceSummary:
    'Números e mecânicas conferidos na página oficial do herói (marvelrivals.com/heroes), na página oficial de Team-Up e nos balance posts da NetEase. A base de vida atual é 275, e não 250: o balance post de 10/07/2026 subiu de 250 para 275, reduziu o dano do Cosmic Cluster de 38 para 35 e, com Ultron como parceiro de Team-Up, subiu a munição da Quantum Magic de 15 para 25. O balance post da Temporada 10 (11/09/2026) não mexeu no kit do Adam diretamente — só reduziu a conversão de cura em energia de todos os Estrategistas (70% → 65%), o que atrasa a Karmic Revival, e buffou a Vitality Pact da Mantis, Team-Up em que o Adam é parceiro. A wiki Fandom mantém os valores corretos na ficha, mas o texto de análise dela ainda cita os 30s antigos do Soul Bond (são 40s desde 11/04/2025); a Liquipedia ficou atrás do patch (ainda exibe 38 de Cosmic Cluster e 5000 de ultimate).',
  coreRead: [
    'Cluster recarrega o próprio heal: cada acerto do Cosmic Cluster ([key:RMB]) devolve 0,6s da recarga da Avatar Life Stream ([key:E]). Cinco projéteis da rajada carregada valem cerca de 3s de cura — jogue o cluster em tanque, escudo ou corpo agrupado enquanto recua e o [key:E] volta a ficar pronto no meio da luta, em vez de sumir justamente no foco. Cada crítico da Quantum Magic ([key:LMB]) ainda corta 1s extra da mesma recarga.',
    'Soul Bond ([key:Shift]) é seguro de 1 HP, não cura de área: com o vínculo ativo, dano letal corta o link e deixa você com 1 de vida. Ative ANTES do dive/ultimate chegar — durante os 6s você também paira no ar e atira, então dá para descolar do chão e quebrar a linha de mira do Spider-Man, do Black Panther e da Magik.',
    'Voar é a resposta para dive: Soaring Surge ([key:F]) entrou no kit em fevereiro de 2026 e quase ninguém usa. Você tem 120 de energia, gasta 30/s e recupera 8/s, ganhando 4 m/s extras — suba para um telhado, corte a perseguição e continue curando de cima. É a única saída de mobilidade do Adam e ela não está na lista mental da maioria dos jogadores.',
    'Karmic Revival ([key:Q]) é rede de segurança, não funeral: o raio de 35m segue a SUA posição, não a âncora largada no chão — você pode soltar a ultimate longe dos mortos e caminhar até eles. Ela funciona até enquanto você está em forma de alma (Regenerative Cocoon), então morrer primeiro não cancela a ressurreição do time. Aliados voltam com 30% da vida + vida bônus de 70% da vida máxima por 5s (decai a zero em 2s): solte atrás de cobertura, no começo da luta, não depois do time todo cair.',
    'Passiva cobrada duas vezes é passiva perdida: o Regenerative Cocoon ([key:Passiva]) tem 105s de recarga e a alma voa a 12 m/s. Se a luta já está perdida, cancele a ressurreição e volte pelo respawn normal — a passiva não é consumida e você chega na próxima luta com o segundo fôlego intacto.',
  ],
  teamUps: {
    summary:
      'Flawless Design (Ultron) é o padrão: transforma o Cosmic Cluster em fonte de cura e enche a munição. Cosmic Cyclone (Storm) é o pick de mobilidade coletiva e anti-dive. A troca é grátis na sala de spawn.',
    recommended: 'Flawless Design',
    recommendedReason:
      'O efeito base já resolve a maior fraqueza do Adam: Cosmic Cluster passa a curar 16 por rodada em quem for atingido e a Quantum Magic ganha +10 de munição (15 → 25), o que vira cura sustentada de verdade em vez de cura só em burst. Com Ultron no time o cluster ainda explode no impacto (campo de 3m, 5 de dano e 5 de cura por disparo), elevando o teto. A medição da Temporada 10 aponta na mesma direção: 65,63% de vitória na dupla com Ultron em 2.220 partidas, contra 63,28% com a Storm em 433 partidas (Batru), e 88% de 100 votos da comunidade preferem Flawless Design — 86% ou mais em todos os ranks a partir do Gold. A ressalva honesta: Ultron é um herói forte no meta por conta própria (a melhor dupla medida da temporada é Ultron + Peni Parker), então parte desse número é a força individual dele; e a amostra do Cosmic Cyclone é pequena.',
    options: [
      {
        name: 'Cosmic Cyclone',
        partner: 'Storm',
        partnerRole: 'Duelista',
        input: 'Shift',
        baseEffect:
          'Os aliados ligados pelo Soul Bond recebem Speed Boost: +20% de velocidade de movimento para todos os vinculados e +5m de alcance no próprio vínculo (15m → 20m).',
        enhancedEffect:
          'Com a Storm no time, os vinculados ganham também Damage Boost de 12% e o bônus de movimento sobe para 30%. O par ainda acende a Heavenly Harmony: o Soaring Surge ([key:F]) fica mais rápido e o Adam deixa uma trilha de 4m de largura, por 5s, que cura 35/s e acelera em 25% os aliados que passarem por ela.',
        bestFor:
          'Quando o time precisa atravessar espaço aberto sob fogo, fugir de dive ou girar o objetivo — a trilha do voo cura e acelera todo mundo, e o Soul Bond de 20m cobre o time mais espalhado.',
        easySetup:
          'Storm como Duelista. Sem ela ainda vale: +20% de movimento e 20m de vínculo já mudam a disengage do time inteiro.',
        iconUrl: publicAsset('teamups/adam-warlock-cosmic-cyclone-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/adam-warlock-cosmic-cyclone-partner.png'),
      },
      {
        name: 'Flawless Design',
        partner: 'Ultron',
        partnerRole: 'Estrategista',
        input: 'RMB',
        baseEffect:
          'O Cosmic Cluster passa a curar os aliados atingidos (16 por rodada) e a capacidade de munição da Quantum Magic aumenta em 10 (de 15 para 25).',
        enhancedEffect:
          'Com o Ultron no time, o Cosmic Cluster cria uma explosão no impacto: campo esférico de 3m de raio que aplica 5 de dano e 5 de cura por disparo — numa rajada cheia de 5 projéteis isso é 25 de dano e 25 de cura em área.',
        bestFor:
          'Padrão no geral: virar o Adam em curador sustentado de verdade, curar mais de um aliado agrupado por disparo e manter o time de pé entre os cooldowns do [key:E].',
        easySetup:
          'Ultron como Estrategista. O efeito base já funciona sem ele e é o que resolve a falta de cura contínua do kit.',
        iconUrl: publicAsset('teamups/adam-warlock-flawless-design-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/adam-warlock-flawless-design-partner.png'),
      },
    ],
    sourceIds: ['official-teamups', 'official-heroes', 'batru-adam-warlock', 'rivalsteamups-adam'],
  },
  systems: [
    {
      name: 'Soul Bond',
      input: 'Shift',
      heading: 'O vínculo é o escudo do time inteiro',
      facts: [
        'Ativa em 15m de raio por 6s: todo aliado vinculado recebe 15/s de cura contínua e todo o dano recebido é dividido entre os vinculados — o dano por pessoa cai na proporção de quantos estão ligados, então um golpe de 1000 de dano em 6 vinculados chega como pouco mais de 160 para cada um.',
        'Seguro de 1 HP: se o dano compartilhado for letal para o Adam, o vínculo quebra no mesmo instante e ele fica com 1 de vida. É uma segunda vida de 40s de recarga que não aparece na barra de vida e não é anunciada para o inimigo.',
        'Durante os 6s o Adam paira no ar e continua atacando. Subir do chão durante o vínculo quebra a linha de mira de perseguidores corpo a corpo e mantém o heal rodando em quem está embaixo.',
        'Cada alvo vinculado suporta no máximo 250 de dano compartilhado, e o link também cai se o Adam ou o aliado saírem dos 15m (20m com Cosmic Cyclone). Com a recarga de 40s, gastar o vínculo fora de um pico de dano é entregar o melhor botão do herói de graça.',
      ],
      meter: [
        { label: 'Recarga', value: '40s' },
        { label: 'Duração', value: '6s' },
        { label: 'Cura Contínua', value: '15/s' },
        { label: 'Limite por Alvo', value: '250 de dano' },
      ],
    },
    {
      name: 'Cosmic Cluster & Avatar Life Stream',
      input: 'RMB/E',
      heading: 'O ciclo que transforma dano em cura',
      facts: [
        'Cosmic Cluster ([key:RMB]) dispara até 5 projéteis de 35 de dano, sem queda de dano por distância, a 100 m/s. Se a carga começar com menos de 5 tiros na munição, a rajada ainda sai completa com 5 projéteis: esvazie a Quantum Magic ([key:LMB]) primeiro e a rajada carregada custa o resto do pente sem perder projétil.',
        'Cada acerto do [key:RMB] reduz 0,6s da recarga da Avatar Life Stream ([key:E]) — uma rajada de 5 projéteis devolve cerca de 3s das duas cargas de 6s. Cada crítico do [key:LMB] reduz 1s. Dano no tanque não é dano perdido: é carga de cura.',
        'A Avatar Life Stream ([key:E]) cura 95 no alvo, salta para mais 2 aliados dentro de 20m e cura 35 no Adam quando escolhe um aliado. Se você NÃO mira em aliado nenhum, a habilidade se autocura: nesse caso o Adam recebe o efeito cheio, e é assim que se sobrevive a um dive sem ter ninguém para curar.',
        'A munição é compartilhada entre [key:LMB] e [key:RMB] e o pente é de 15 (25 com Flawless Design). Duas cargas de [key:E] de 6s cada, com o ciclo de cluster alimentando a recarga, é o que separa um Adam que cura de um Adam que assiste o time morrer parado.',
      ],
      meter: [
        { label: 'Dano do Cluster', value: '35 / projétil' },
        { label: 'Projéteis', value: 'até 5' },
        { label: 'Recarga Devolvida', value: '0,6s por acerto' },
        { label: 'Cargas de Heal', value: '2 (6s cada)' },
      ],
    },
  ],
  roleGuides: {
    strategist: {
      key: 'strategist',
      label: 'Estrategista',
      nickname: 'O Pilar Cósmico',
      health: '275 HP',
      difficulty:
        'Média-alta (4/5): cura em burst com apenas duas cargas, cooldowns longos e zero mobilidade básica — erra o timing do Soul Bond ou o posicionamento e a luta acaba antes de o time perceber.',
      job: 'Ancorar o time à média distância: farmar as cargas de [key:E] com Cosmic Cluster, gastar dano e heal na mesma mira, segurar picos com Soul Bond, voar para fora do dive e resolver a luta com uma Karmic Revival que devolve o time à vida.',
      verdict:
        'Escolha o Adam quando o time já tem (ou aceita ter) um segundo Estrategista de cura contínua e a composição joga agrupada e à distância. Ele é o suporte mais ofensivo do jogo: 60 de dano por tiro, headshot, e um botão que divide o dano do time. Evite quando o time vai jogar espalhado em flank puro, ou contra dive duplo coordenado (Black Panther + Spider-Man + Magik): sem posicionamento prévio e sem o [key:F] pronto, ele é o Estrategista mais frágil da partida.',
      playstyle: [
        'O Adam joga à média distância, em ângulo levemente fora da linha do time, com a cabeça em duas coisas ao mesmo tempo: quem está com vida baixa e quem vai aparecer na sua mira. A regra prática é curar apenas quando o aliado cai para perto da metade da vida, não para completar a barra — as duas cargas de Avatar Life Stream ([key:E]) são o seu estoque e gastá-las em dano leve é o erro que faz o time morrer no próximo pico.',
        'Enquanto o [key:E] recarrega, o seu trabalho não é esperar: é atirar. Cosmic Cluster ([key:RMB]) em tanque, escudo, Groot ou no corpo agrupado do inimigo devolve recarga em segundos e mantém o dano alto. Quantum Magic ([key:LMB]) é hitscan com 60 de dano e crítico — quem entra na sua frente com vida baixa morre para dois tiros na cabeça, e isso inclui divers descuidados.',
        'O Soul Bond ([key:Shift]) deve ser ativado ANTES do pico de dano: quando o time empurra o choke, quando um Hulk/Thor avança ou quando um ultimate de área inimigo fica evidente. Durante os 6s, o Adam paira e continua atirando e curando — e se o dano compartilhado for letal, ele sobrevive com 1 de vida. Gastar o vínculo depois de metade do time já morto é pagar 40s de recarga por um heal pequeno.',
        'A Karmic Revival ([key:Q]) se solta atrás de cobertura, no começo da luta, para o time já empurrar com a rede armada. Como o raio de 35m segue a sua posição, você pode largar a âncora em cobertura e andar até o aliado morto para trazê-lo para dentro. Aliados voltam com 30% da vida e ganham vida bônus igual a 70% da vida máxima por 5s — o suficiente para não serem desfeitos na hora, e o seu [key:E] completa o resto.',
      ],
      priorityKicker: 'Ordem de decisão',
      priorityTitle: 'O que usar primeiro em cada fight',
      priorityDescription:
        'O Adam não tem árvore de upgrades: ele tem uma fila de prioridades. Estas são as cinco decisões, na ordem em que aparecem numa luta real — e o que faz trocar a ordem.',
      upgradePlan: [
        {
          rank: 1,
          input: 'Shift',
          ability: 'Soul Bond',
          label: 'O botão anti-burst: divida o dano e ganhe um seguro de 1 HP',
          baseEffect:
            'Vincula todos os aliados em 15m por 6s: 15/s de cura contínua, dano dividido entre os vinculados e limite de 250 de dano compartilhado por alvo. Recarga de 40s.',
          fightNote:
            'Se o dano compartilhado for letal para o Adam, o link quebra e ele fica com 1 de vida. Durante o vínculo ele paira no ar e continua atacando.',
          why: 'É o único botão do jogo que transforma um pico de dano do inimigo em dano picado entre o time. Ativado no instante certo, anula pushes inteiros e ainda funciona como segunda vida. Ativado tarde, é só um heal pequeno com 40s de recarga. Com Cosmic Cyclone o raio do vínculo vai para 20m e todos ganham velocidade.',
          swapWhen:
            'Não gaste se o time está desengajando e espalhado fora dos 15m — o vínculo cai por distância e você fica 40s sem ele. Se a ameaça é dive em VOCÊ, guarde para o momento em que o perseguidor entrar, porque o seguro de 1 HP não vale se o link já estiver gasto.',
          sourceIds: ['official-heroes', 'wiki-fandom-adam-warlock', 'reddit-adam-warlock-tips'],
        },
        {
          rank: 2,
          input: 'E',
          ability: 'Avatar Life Stream',
          label: 'A cura que salta e também cura você — use com mira vazia no dive',
          baseEffect:
            'Cura 95 no aliado mirado, salta para mais 2 aliados dentro de 20m e cura 35 no Adam. Se nenhum aliado for mirado, ele recebe o efeito cheio em si mesmo. 2 cargas de 6s cada.',
          upgradeEffect:
            'Cada crítico da Quantum Magic reduz 1s da recarga; cada acerto do Cosmic Cluster reduz 0,6s.',
          why: 'Cura instantânea grande em até 3 pessoas ao custo de uma carga. A jogada não óbvia é a mirada vazia: quando o dive chega e não há aliado para curar, curar a si mesmo sem alvo rende o efeito cheio, e não os 35 parciais — e é isso que compra os segundos para o time reagir.',
          swapWhen:
            'Não use as duas cargas no mesmo pico: com 6s de recarga cada, gastar tudo cedo deixa o time sem cura exatamente quando o segundo wave de dano chega. Cure quem está abaixo da metade; quem está com 80% espera o heal do Soul Bond.',
          sourceIds: ['official-heroes', 'marvelchurch-adam-warlock', 'guide-marvelrivals-gg-adam'],
        },
        {
          rank: 3,
          input: 'RMB',
          ability: 'Cosmic Cluster',
          label: 'O motor do kit: dano à distância que recarrega a cura',
          baseEffect:
            'Rajada carregada de até 5 projéteis de 35 de dano, sem queda por distância, a 100 m/s. Intervalo de 0,3s na carga única e 0,07s entre múltiplos. Compartilha munição com a Quantum Magic.',
          fightNote:
            'Se a rajada for carregada com menos de 5 tiros na munição, ela ainda dispara os 5 projéteis. Cada acerto reduz 0,6s da recarga do Avatar Life Stream.',
          why: 'É onde o dano e a cura do Adam se encontram: 5 acertos devolvem cerca de 3s de uma das duas cargas de [key:E]. Carregue atrás de cobertura, saia para soltar e volte — o cluster não tem queda de dano por distância, então é o melhor disparo de poke do kit. Esvaziar a Quantum Magic antes garante a rajada de 5 projéteis com o resto do pente.',
          swapWhen:
            'Contra alvo colado no corpo a corpo, o atraso da rajada custa mais do que rende: use [key:LMB] e o crítico, que também reduz a recarga. Com Flawless Design, o cluster vira cura pura em aliado agrupado e a prioridade de alvo muda.',
          sourceIds: ['official-heroes', 'wiki-fandom-adam-warlock', 'reddit-adam-warlock-tips'],
        },
        {
          rank: 4,
          input: 'F',
          ability: 'Soaring Surge',
          label: 'Voo curto: a única saída do Adam contra dive',
          baseEffect:
            'Entra em estado de voo com 4 m/s extras de movimento. Energia máxima de 120, consumo de 30/s e recuperação de 8/s.',
          fightNote:
            'Com o Team-Up Cosmic Cyclone (Storm) ativo, o voo deixa uma trilha de 4m de largura por 5s que cura 35/s e acelera em 25% os aliados que passam por ela.',
          why: 'É a resposta mecânica para a fraqueza mais citada do herói. Subir durante o Soul Bond (que já permite pairar) tira o Adam da linha de golpe de Black Panther, Spider-Man, Magik e Iron Fist enquanto ele continua curando e atirando de cima. Recuperar 120 de energia leva 15s parado — use em janelas curtas e não fique voando sem motivo.',
          swapWhen:
            'Guarde a energia quando o inimigo tem stun à distância fácil de acertar em alvo no ar: cair com o voo cancelado e sem Soul Bond deixa o Adam no chão, sem mobilidade e com 275 de vida.',
          sourceIds: ['official-heroes', 'rivalsunion-adam-warlock', 'wiki-fandom-adam-warlock'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Karmic Revival',
          label: 'Rede de segurança do time — solte ANTES da luta virar, não depois',
          baseEffect:
            'Cria uma zona de 35m de raio por 10s centrada no Adam. Aliados caídos dentro do raio ressuscitam no local de conjuração com 30% da vida + vida bônus de 70% da vida máxima por 5s (decai a zero em 2s). Cada personagem só pode ser revivido uma vez por conjuração.',
          fightNote:
            'O raio segue a posição do Adam, não a âncora no chão — ele pode andar até um aliado morto e trazê-lo para dentro. A zona continua funcionando enquanto ele está em forma de alma pela passiva, mas o próprio Adam não pode ser revivido por ela.',
          why: '4500 de energia para devolver 1 a 3 lutadores com escudo temporário no meio da fight. Soltar cedo, atrás de cobertura, cria a rede antes do estrago; segurar até o time inteiro morrer costuma terminar com um Adam morto na animação de conjuração e nenhuma ressurreição. Um tanque ou um suporte ressuscitado já justifica a ultimate.',
          swapWhen:
            'Se a luta terminou em wipe e não há aliado caído com valor tático em 35m, não gaste: com a conversão de cura em energia reduzida para 65% na Temporada 10, a próxima Karmic Revival demora mais para carregar do que a anterior.',
          sourceIds: ['official-heroes', 'wiki-fandom-adam-warlock', 'reddit-adam-warlock-ult'],
        },
      ],
      adaptations: [
        'Contra dive (Black Panther, Spider-Man, Magik, Iron Fist, Blade): segure o Soul Bond até o perseguidor entrar, use a mirada vazia do [key:E] para o autoheal cheio, suba com Soaring Surge ([key:F]) e siga atirando de cima com [key:LMB]. Olhar para o dive e errar tiro é o que deixa o Adam parecer frágil — 60 de dano com crítico em alguém de 250 a 275 de vida decide o duelo. Se o time puder, uma Ultron na composição soma a cura do cluster por cima disso.',
        'Contra poke de longo alcance (Hawkeye, Hela, Iron Man, Namor): jogue atrás de cobertura e troque de ângulo a cada conjuração. Cosmic Cluster ([key:RMB]) não sofre queda de dano por distância — 100 m/s e alcance longo punem quem fica parado na linha de visão, enquanto a Quantum Magic cai para 60% do dano a partir de 40m.',
        'Contra área/ultimate de dano em massa (Iron Man, Scarlet Witch, Storm, Human Torch): o Soul Bond ([key:Shift]) é o contra-jogo direto. Com o time agrupado dentro do vínculo, o dano é dividido por quantos estão ligados e o pico vira dano administrável — e cada vinculado suporta 250 antes de o link cair.',
        'Com Ultron no time (Flawless Design): o kit vira curador sustentado. Cluster em aliado agrupado cura 16 por rodada (25 por rajada cheia de 5) e ainda explode em campo de 3m com 5 de cura e 5 de dano por disparo; a munição sobe para 25, o que permite manter o ciclo dano → cura por muito mais tempo antes de recarregar.',
        'Com Storm no time (Cosmic Cyclone): o vínculo passa a 20m com +30% de movimento e +12% de dano para os vinculados, e o [key:F] deixa uma trilha que cura 35/s e acelera 25% os aliados. Use a trilha como tapete de empurrão no choke ou como corredor de fuga quando o objetivo for perdido.',
      ],
      ultimates: [
        {
          stance: 'Rede de segurança / Reset de luta',
          name: 'Karmic Revival ([key:Q])',
          bestUse:
            'Logo atrás de cobertura, nos primeiros segundos da luta — antes de o inimigo comprometer as ultimates de dano, para o time empurrar sabendo que existe um segundo time embaixo.',
          execution:
            'Posicione-se atrás de um obstáculo, preferencialmente com o time entre você e o objetivo, e solte [key:Q]. O campo dura 10s e cobre 35m ao seu redor; como o raio segue a sua posição, você pode largar a âncora em segurança e caminhar na direção dos aliados caídos para trazê-los para dentro. Se você morrer no meio da janela, a passiva em forma de alma não cancela a zona — a ultimate continua valendo.',
          upgradeValue:
            'Aliados voltam com 30% da vida + vida bônus igual a 70% da vida máxima por 5s, e é justamente o seu Avatar Life Stream ([key:E]) que completa a barra depois. Guarde uma carga de [key:E] para o instante seguinte à ressurreição: quem volta com 30% e leva o heal em cima reintegra a luta; quem volta e leva só o escudo temporário morre de novo em dois segundos.',
        },
      ],
      dashGuide: {
        ability: 'Soaring Surge ([key:F]) → Soul Bond ([key:Shift])',
        shortRule:
          'Suba primeiro com [key:F], depois mantenha o vínculo: a passiva do Adam não tem dash, então a sobrevivência dele é altura e dano dividido — nunca fuga em linha reta.',
        mechanics: [
          'Soaring Surge ([key:F]) é um estado de voo com 4 m/s extras: 120 de energia, 30/s de consumo e 8/s de recuperação. A recarga total leva cerca de 15s parado, então o voo é uma janela curta, não um modo de jogo.',
          'Soul Bond ([key:Shift]) permite pairar e atacar durante os 6s de duração. Combinar os dois (voo + vínculo) mantém o Adam no ar, curando o time por 15/s e dividindo dano, enquanto os perseguidores corpo a corpo batem no vazio.',
          'O vínculo quebra por três motivos: fim dos 6s, excesso de 250 de dano compartilhado em um mesmo alvo, ou saída de alguém do raio — 15m no padrão e 20m com Cosmic Cyclone. Se a mira do time vai abrir muito, o vínculo se desfaz sozinho.',
          'Regenerative Cocoon ([key:Passiva]) é o terceiro recurso de reposicionamento: 105s de recarga, alma livre a 12 m/s e escolha do ponto de renascimento. Cancelar a passiva devolve o respawn normal sem consumir os 105s — o certo a fazer quando a luta já está perdida.',
        ],
        drills: [
          'Treino de mirada vazia: no campo de prática, deixe o boneco vivo forçando dano em você e cure-se SEM mirar aliado nenhum — confirme que o autoheal vem cheio, não os 35 parciais de quando há alvo selecionado. Repita até virar reflexo.',
          'Treino do ciclo cluster → heal: atire a munição da Quantum Magic até restar 1 tiro, carregue Cosmic Cluster e confirme a rajada completa de 5 projéteis; depois observe o salto na recarga da Avatar Life Stream e cronometre em quantos segundos as duas cargas voltam.',
          'Treino de vínculo no ar: ative [key:Shift], suba com [key:F] e continue atirando e curando de cima. O objetivo é manter o time dentro do raio enquanto você está suspenso — mova no ar para ficar sobre quem precisa de cura.',
          'Treino de ressurreição com âncora: solte [key:Q] atrás de uma parede e depois caminhe na direção de um boneco "morto" fora do raio inicial, para ver o ressuscitado aparecer no ponto onde você conjurou — não onde ele caiu.',
        ],
      },
      patterns: [
        {
          title: 'Segurar o choke: dano enquanto a cura recarrega',
          steps: [
            'Posicione-se em ângulo elevado, com cobertura a um passo e com pelo menos dois aliados dentro de 20m — a cura saltando depende da posição deles, não só da sua mira.',
            'Troque [key:LMB] em quem se expõe (60 de dano, crítico liberado) e carregue Cosmic Cluster ([key:RMB]) atrás da cobertura para soltar a rajada quando o tanque inimigo entrar.',
            'Cada acerto do cluster corta 0,6s da recarga do [key:E]; mantenha esse ciclo rodando até alguém do time cair para a metade da vida, e só então gaste uma carga de heal.',
            'Se o pico vier, ative Soul Bond ([key:Shift]) antes de o dano chegar — o time divide o estrago e você ainda pode pairar e continuar curando por cima.',
          ],
        },
        {
          title: 'Empurrar o objetivo com a rede armada',
          steps: [
            'Antes de virar a esquina do choke, pare atrás de cobertura e solte Karmic Revival ([key:Q]): a zona fica armada pelos 10s seguintes, com 35m de raio em volta de você.',
            'Ative Soul Bond ([key:Shift]) no instante em que o time atravessa — todo o dano do primeiro confronto é dividido e cada vinculado aguenta até 250 antes de o link cair.',
            'Com Cosmic Cyclone equipado, deixe a trilha do voo ([key:F]) desenhada na entrada: quem passa por ela ganha 35/s de cura e 25% de velocidade por 5s.',
            'Assim que o primeiro aliado morrer, ande para cima dele — o raio da ultimate segue você e o time volta a lutar com 70% de vida máxima em escudo temporário.',
          ],
        },
        {
          title: 'Sobreviver ao dive sem largar o heal',
          steps: [
            'Guarde o Soul Bond para o segundo em que o perseguidor entrar: o vínculo divide o dano entre você e os aliados próximos e ainda garante o 1 de vida se o golpe for letal.',
            'Cure-se com mira vazia ([key:E] sem alvo selecionado) para receber o efeito cheio em vez dos 35 parciais de quando você escolhe um aliado.',
            'Suba com Soaring Surge ([key:F]) e continue atirando de cima: 60 por tiro com crítico em um divers de 250 a 275 de vida vira abate em dois acertos — e cada crítico ainda adianta a próxima carga de cura.',
            'Se o time perdeu o espaço e a morte é inevitável, cancele a passiva em vez de renascer no meio do inimigo: os 105s ficam guardados para a próxima luta.',
          ],
        },
      ],
      mistakes: [
        'Usar a Avatar Life Stream ([key:E]) para completar barra de vida de aliado saudável: com só duas cargas de 6s, o heal gasto em dano leve é exatamente o que falta quando o ultimate inimigo chega. Cure abaixo da metade, exceto quando o cooldown do próximo [key:E] já está garantido pelo ciclo de cluster.',
        'Ativar Soul Bond ([key:Shift]) depois de o pico de dano já ter passado: o vínculo é anti-burst, não recuperação. Gastar 40s de recarga para curar 15/s de um time já fora de perigo deixa o Adam sem o botão mais forte da luta seguinte.',
        'Esquecer o voo. Soaring Surge ([key:F]) tem energia, cooldown indireto e quase ninguém aciona — e é a única mobilidade do herói. Adam sem altura e sem vínculo é o suporte mais fácil de matar do jogo contra dive coordenado.',
      ],
      evidence: [
        'official-heroes',
        'official-balance-20260710',
        'official-balance-s10',
        'wiki-fandom-adam-warlock',
        'rivalsunion-adam-warlock',
        'reddit-adam-warlock-tips',
      ],
      abilityLoop: [
        'Soul Bond',
        'Cosmic Cluster',
        'Avatar Life Stream',
        'Soaring Surge',
        'Karmic Revival',
      ],
    },
  },
  sources: [
    {
      id: 'official-heroes',
      kind: 'official',
      title: 'Adam Warlock — página oficial de herói (Marvel Rivals)',
      url: 'https://www.marvelrivals.com/heroes',
      author: 'Marvel Rivals / NetEase',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Ficha oficial atual: 275 de vida, 6 m/s, Estrategista. Quantum Magic com 60 de dano por tiro, queda a partir de 20m (60% a 40m), cadência de 2 tiros/s, munição de 15 e crítico habilitado.',
        'Cosmic Cluster: 35 de dano por projétil, até 5 projéteis, intervalo de 0,3s na carga única e 0,07s entre múltiplos, velocidade de 100 m/s, sem queda de dano por distância, compartilhando munição com a Quantum Magic; cada acerto reduz 0,6s da recarga da Avatar Life Stream.',
        'Avatar Life Stream: 95 de cura no alvo, 35 em si mesmo quando há alvo selecionado, 2 saltos, raio de 20m, 2 cargas de 6s cada; críticos da Quantum Magic reduzem 1s da recarga.',
        'Soul Bond: 15/s de cura, 15m de raio, 6s, limite de 250 de dano compartilhado por alvo e 40s de recarga; permite pairar e atacar; dano letal via link deixa o Adam com 1 de vida e quebra o vínculo.',
        'Karmic Revival: 4500 de energia, raio esférico de 35m, 10s, aliados voltam com 30% da vida máxima mais vida bônus de 70% da vida máxima por 5s (decai a zero em 2s).',
        'Regenerative Cocoon: passiva com 105s de recarga. Soaring Surge aparece na página oficial rotulado por engano como "Karmic Revival" (o próprio site mantém dois itens com o mesmo nome); é a habilidade de voo com tecla própria.',
        'Team-Ups oficiais do herói: Cosmic Cyclone (com Storm, tecla Shift) e Flawless Design (com Ultron, botão direito).',
      ],
    },
    {
      id: 'official-teamups',
      kind: 'official',
      title: 'Team-Up — página oficial de Marvel Rivals',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Confirma os dois Team-Ups do Adam Warlock na Temporada 10: Cosmic Cyclone (parceira Storm, tecla Shift) e Flawless Design (parceiro Ultron, botão direito).',
        'Cosmic Cyclone — base: aliados ligados pelo Soul Bond recebem Speed Boost (+20% de movimento e +5m de alcance no vínculo); aprimorado com Storm: os vinculados ganham Damage Boost de 12% e o movimento sobe para 30%. O par acende a Heavenly Harmony: o voo fica mais rápido e deixa uma trilha de 4m de largura por 5s que cura 35/s e acelera aliados em 25%.',
        'Flawless Design — base: Cosmic Cluster passa a curar 16 por rodada nos aliados atingidos e a munição da Quantum Magic ganha +10; aprimorado com Ultron: o cluster explode no impacto em campo esférico de 3m, com 5 de dano e 5 de cura por disparo.',
        'Regra oficial do sistema: o efeito base funciona sozinho; o aprimorado acende automaticamente quando o parceiro nomeado entra no time. Só um Team-Up fica equipado por partida, e a troca é livre na sala de spawn.',
      ],
    },
    {
      id: 'official-balance-20260710',
      kind: 'official',
      title: 'Marvel Rivals Version 20260710 Balance Post',
      url: 'https://www.marvelrivals.com/20260706/41525_1306647.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-07-10',
      confidence: 'alta',
      takeaways: [
        'Mudanças diretas do Adam Warlock: vida base de 250 para 275; dano por projétil do Cosmic Cluster de 38 para 35; com Ultron selecionado como parceiro de Team-Up, munição da Quantum Magic de 15 para 25.',
        'É o patch mais recente que alterou o kit do herói — nenhuma mudança direta no Adam foi publicada depois dele, o que torna esses os valores válidos para o guia.',
      ],
    },
    {
      id: 'official-balance-s10',
      kind: 'official',
      title: 'Marvel Rivals Version 20260911 Balance Post (Temporada 10)',
      url: 'https://www.marvelrivals.com/balancepost/20260908/41667_1313334.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-09-08',
      confidence: 'alta',
      takeaways: [
        'Mudança global para Estrategistas: conversão de cura em energia cai de 70% para 65% e de dano em energia de 55% para 50% — a Karmic Revival do Adam, de 4500 de energia, passa a carregar mais devagar.',
        'O Adam Warlock não recebeu ajuste direto de kit nesta temporada; ele aparece no post como parceiro de Team-Up da Mantis (Vitality Pact), que foi buffada: Healing Flower de 10 + 2,5% para 12 + 3% da vida máxima por segundo.',
      ],
    },
    {
      id: 'wiki-fandom-adam-warlock',
      kind: 'database',
      title: 'Adam Warlock — Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Adam_Warlock',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Ficha confirma 275 de vida, Estrategista, e os dois Team-Ups ativos: Cosmic Cyclone (Storm) e Flawless Design (Ultron); o Adam também aprimora Team-Ups de terceiros (Vitality Pact da Mantis, Duality Dance da Luna Snow, Star-Soul do Star-Lord).',
        'Macete de economia de munição: a rajada carregada do Cosmic Cluster sempre dispara os 5 projéteis, mesmo que restem menos de 5 tiros no pente.',
        'Macete de DPS: o atraso final da rajada do Cosmic Cluster pode ser cancelado com a Quantum Magic — alternar rajada não carregada com o ataque primário aumenta o dano por segundo ao custo de mais munição.',
        'A passiva pode ser cancelada para ir direto ao respawn normal, preservando os 105s de recarga para a próxima luta; a forma de alma anda a 12 m/s e o Adam fica brevemente invulnerável ao sair do casulo.',
        'O raio da Karmic Revival segue a posição atual do Adam (não a âncora) e continua valendo enquanto ele está no casulo; cada personagem pode ser revivido uma única vez por conjuração.',
        'Atenção: o texto de análise da página cita 30s de recarga no Soul Bond — valor antigo. A ficha e as fontes oficiais confirmam 40s desde o patch de 11/04/2025.',
      ],
    },
    {
      id: 'wiki-fandom-adam-balance',
      kind: 'database',
      title: 'Adam Warlock/Balance Changes — Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Adam_Warlock/Balance_Changes',
      published: '2026-07',
      confidence: 'alta',
      takeaways: [
        'Histórico do Soul Bond: a recarga subiu de 30s para 40s no patch de 11/04/2025 — daí a confusão dos guias antigos que ainda falam em 30s.',
        'Karmic Revival: custo de energia caiu de 5000 para 4700 (08/08/2025) e de 4700 para 4500 (14/11/2025); o raio de detecção de ressurreição subiu de 30m para 35m; aliados revividos passaram a receber vida bônus igual a 70% da vida máxima.',
        'Quantum Magic: desde 30/04/2025 o crítico reduz 1s da recarga da Avatar Life Stream; o dano por tiro é 60 desde 10/01/2025. A passiva ganhou velocidade de alma de 6 m/s para 12 m/s em 14/11/2025.',
        'Guardian Revival (o Team-Up antigo com Mantis e Star-Lord) foi removido na Temporada 3.5; hoje a Vitality Pact da Mantis é que tem o Adam como parceiro.',
      ],
    },
    {
      id: 'liquipedia-adam-warlock',
      kind: 'database',
      title: 'Adam Warlock — Liquipedia Marvel Rivals Wiki',
      url: 'https://liquipedia.net/marvelrivals/Adam_Warlock',
      published: '2026',
      confidence: 'media',
      takeaways: [
        'Estrutura de habilidades e controles padrão conferem com a página oficial (Quantum Magic no clique esquerdo, Soul Bond no Shift, Avatar Life Stream no E, Cosmic Cluster no clique direito, passiva Regenerative Cocoon).',
        'Números desatualizados na página no momento da consulta: Cosmic Cluster ainda aparece com 38 de dano, a ultimate com 5000 de energia e 30m de raio — três valores corrigidos pelos balance posts. Usada apenas como confirmação estrutural, nunca como fonte de número.',
      ],
    },
    {
      id: 'batru-adam-warlock',
      kind: 'database',
      title: 'Adam Warlock Team-Ups — Batru (win rates medidos da dupla)',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/adam-warlock',
      published: '2026-09-20',
      confidence: 'alta',
      takeaways: [
        'Win rate geral do Adam nas partidas ranqueadas medidas: 49,80%, com 7,46% de pick rate sobre 17.177 partidas.',
        'Flawless Design com Ultron: 65,63% de vitória em 2.220 partidas — a maior amostra entre os dois Team-Ups do herói.',
        'Cosmic Cyclone com Storm: 63,28% de vitória em 433 partidas — amostra bem menor, então a diferença para o Flawless Design é menos confiável do que o número absoluto sugere.',
        'Ressalva metodológica do próprio site: a dupla medida mistura a força individual dos heróis no meta — o Ultron é um dos heróis mais fortes da temporada, o que infla o número do Flawless Design.',
      ],
    },
    {
      id: 'rivalstracker-s10-teamups',
      kind: 'database',
      title: 'Team-Up Stats da Temporada 10 — Rivals Tracker',
      url: 'https://rivalstracker.com/heroes/team-ups',
      published: '2026-09',
      confidence: 'media',
      takeaways: [
        'Recorte só da Temporada 10: Flawless Design (Adam + Ultron) com 77,78% de vitória em 18 partidas registradas.',
        'Cosmic Cyclone (Adam + Storm) aparece com 100% em 1 partida — amostra inútil para decisão, registrada apenas para mostrar que a temporada ainda não tem volume suficiente para comparar os dois Team-Ups.',
      ],
    },
    {
      id: 'guide-marvelrivals-gg-adam',
      kind: 'guide',
      title: 'Adam Warlock Guide: How to Play, Combos & Counters — MarvelRivals.gg',
      url: 'https://marvelrivals.gg/adam-warlock-guide',
      published: '2026 (atualizado em 22/05/2026)',
      confidence: 'media',
      takeaways: [
        'Define o Adam como off-healer: ele não é o curador principal, e sim o segundo Estrategista que troca cura contínua por dano alto e cura em burst.',
        'Combos de execução rápida: crítico da Quantum Magic → Cosmic Cluster imediato → segundo tiro primário para eliminar alvos de vida média; a versão poke é carregar o cluster atrás de cobertura, sair e soltar.',
        'Contra-ultimate: ativar Soul Bond nos aliados ANTES do ultimate inimigo chegar e usar a Avatar Life Stream nos alvos que perderem vida com ele.',
        'Posicionamento recomendado: ângulo levemente fora do time, com altura e cobertura — o Adam morre por erro de posição, porque não tem escape básico.',
      ],
    },
    {
      id: 'rivalsunion-adam-warlock',
      kind: 'guide',
      title: 'Adam Warlock Marvel Rivals Guide — How to Play — Rivals Union',
      url: 'https://rivalsunion.com/heroes/adam-warlock',
      published: '2026-08-28',
      confidence: 'alta',
      takeaways: [
        'Confirma a existência da habilidade de voo com tecla própria e registra que a página oficial rotula essa habilidade com o mesmo nome da ultimate (Karmic Revival), o que confunde quem lê a ficha — são botões separados.',
        'Plano de jogo em quatro passos: ficar em ângulo coberto com múltiplos aliados à vista, usar o Soul Bond quando o time inteiro se beneficia do dano dividido, preparar Cosmic Cluster para o próximo peek sem perder a prioridade de cura e checar o local da ressurreição antes de soltar a ultimate.',
        'Erro comum destacado: avançar sozinho só porque a ressurreição está pronta, sem área segura de retorno ou follow-up do time — o aliado volta e morre de novo.',
      ],
    },
    {
      id: 'marvelchurch-adam-warlock',
      kind: 'guide',
      title: 'Adam Warlock — Marvel Rivals — Marvel Church',
      url: 'https://www.marvel.church/marvel-rivals-adam-warlock',
      published: '2026',
      confidence: 'media',
      takeaways: [
        'Macete de autosobrevivência: mirar a Avatar Life Stream no chão/em nenhum aliado rende mais cura no próprio Adam do que usá-la escolhendo um alvo.',
        'Recomendação contra dive: ativar o Soul Bond no momento em que o perseguidor entra, para dividir o dano com o time, e treinar a mira em flick por causa do padrão do disparo.',
        'Fraqueza central do herói: sem mobilidade própria o Adam depende da posição e do time para sobreviver, sendo o Estrategista mais punido por dive descoordenado.',
      ],
    },
    {
      id: 'turbosmurfs-teamups-all',
      kind: 'guide',
      title: 'All 106 Marvel Rivals Team-Ups, and the 19 Removed — Turbosmurfs',
      url: 'https://turbosmurfs.gg/article/all-marvel-rivals-team-ups',
      published: '2026-08-17',
      confidence: 'alta',
      takeaways: [
        'Tabela completa do sistema de Team-Ups pós-reformulação: 106 habilidades em 53 heróis, duas para cada, confirmando Adam Warlock com Cosmic Cyclone (Storm) e Flawless Design (Ultron).',
        'Contexto histórico: a reformulação de 10/07/2026 apagou todos os Team-Ups antigos e criou o sistema atual — o que explica por que Guardian Revival, Duality Dance e Vitality Pact (versões antigas) aparecem em guias desatualizados.',
      ],
    },
    {
      id: 'reddit-adam-warlock-tips',
      kind: 'forum',
      title: 'Tips for Adam Warlock / Soul Bond / 100+ horas de Adam — r/marvelrivals',
      url: 'https://www.reddit.com/r/marvelrivals/comments/1j28ksa/tips_for_adam_warlock',
      published: '2026',
      confidence: 'media',
      takeaways: [
        'Consenso sobre o dano: uma rajada cheia de Cosmic Cluster somada a um tiro primário já resolve alvos de vida baixa — e contra tanques o cluster é desperdício de munição, porque o valor está na amplitude, não no alvo único.',
        'Leitura de papel mais repetida nos tópicos de mains: "ele é basicamente um DPS de backline com cura" — quem não acerta tiro não tira proveito do herói, e o gerenciamento de cooldown vale mais que qualquer combo.',
        'Sobre o Soul Bond, o argumento que aparece em vários tópicos é que o vínculo anula pushes inteiros do time inimigo durante a duração, desde que seja ativado na hora e na posição certas.',
      ],
    },
    {
      id: 'reddit-adam-warlock-ult',
      kind: 'forum',
      title: 'Adam warlock res tips / Quando usar a ultimate — r/marvelrivals',
      url: 'https://www.reddit.com/r/marvelrivals/comments/1iowvvw/adam_warlock_res_tips',
      published: '2026',
      confidence: 'media',
      takeaways: [
        'Consenso sobre a Karmic Revival: vale trazer de volta um único tanque, suporte ou DPS de valor tático, e o ideal é casar a ressurreição com o momento em que o time vai usar ultimates.',
        'Relato recorrente de jogadores que seguram a ultimate esperando o "wipe perfeito" e acabam vendo o time inteiro morrer duas vezes — a orientação da comunidade é soltar antes da fight crítica, e não depois dela.',
      ],
    },
    {
      id: 'rivalsteamups-adam',
      kind: 'forum',
      title: 'Best Adam Warlock Team-Ups — votação da comunidade (Season 10) — RivalsTeamUps',
      url: 'https://rivalsteamups.com/heroes/adam-warlock',
      published: '2026-09',
      confidence: 'media',
      takeaways: [
        'Placar da comunidade para os dois Team-Ups do Adam: Flawless Design (Ultron) com 88% de 100 votos contra 12% do Cosmic Cyclone (Storm).',
        'A preferência pelo Flawless Design se mantém em todos os ranks a partir do Gold — no Diamond fica em 89% e no Grandmaster em 86%, o que indica que não é só inexperiência votando no efeito de cura.',
        'A leitura da comunidade sobre o Cosmic Cyclone é a de que ele empurra o kit para uma rota tática específica (mobilidade, reposicionamento e disengage), enquanto o Flawless Design resolve a fraqueza estrutural de cura contínua do herói.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Site Oficial & Patch Notes',
      count: 4,
      status:
        'Página oficial do herói, página oficial de Team-Up e dois balance posts (20260710 e Temporada 10 20260911) auditados com números completos.',
    },
    {
      kind: 'database',
      label: 'Wiki & Base Pública',
      count: 5,
      status:
        'Fandom (ficha + histórico de balance), Liquipedia (confirmação estrutural, números desatualizados), Batru e Rivals Tracker com win rates medidos de dupla.',
    },
    {
      kind: 'guide',
      label: 'Guias Especializados',
      count: 4,
      status:
        'MarvelRivals.gg, Rivals Union, Marvel Church e Turbosmurfs consultados para combos, posicionamento e escolha de Team-Up.',
    },
    {
      kind: 'forum',
      label: 'Comunidade & Fóruns',
      count: 2,
      status:
        'Tópicos de r/marvelrivals sobre dano, Soul Bond e uso da ultimate, mais a votação da comunidade do RivalsTeamUps sobre os dois Team-Ups.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos & Transcrições',
      count: 0,
      status:
        'Pendente (nenhum vídeo com transcrição auditável foi processado nesta sessão; a cobertura ficou com wiki, guias escritos e fórum).',
    },
  ],
}
