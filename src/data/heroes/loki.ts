import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const loki: HeroGuide = {
  id: 'loki',
  name: 'Loki',
  aliases: ['God of Mischief', 'Deus da Travessura', 'Loki Laufeyson', 'Rei de Yggsgard'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/loki.png'),
  bannerUrl: publicAsset('heroes/banners/loki.png'),
  selectionPortraitUrl: publicAsset('heroes/select/loki.png'),
  selectionHoverUrl: publicAsset('heroes/select/loki_champion.gif'),
  selectionHoverFit: { scale: 1.05, x: 0, y: 2 },
  theme: {
    primary: '#3ddc84',
    primaryRgb: '61, 220, 132',
    secondary: '#a855f7',
    secondaryRgb: '168, 85, 247',
    surface: '#04140d',
    surfaceRgb: '4, 20, 13',
  },
  roles: ['strategist'],
  lastVerified: '2026-10-02',
  confidenceSummary:
    'Todos os números do kit vieram da página oficial de habilidades do Loki (marvelrivals.com/20241123/41360_1195662.html), lida integralmente e já pós-balance da Season 10 de 11/09/2026: 275 de vida, 6 m/s, 250 de vida por ilusão, 60s de duração, 2 ilusões no máximo, 80% de dano e 100% de cura das cópias, Mystical Missile com campo de 25 de dano e 40 de cura, 15 de cura no acerto direto, queda começando em 0,5m até 80% a 2,5m, 120 m/s, 10 de munição e 1,75 por segundo, Regeneration Domain com raio de 5m, 5s, conversão de 30%, 100/s e Rune Stone de 100 de vida, God of Mischief com 12s e custo de 4500. A ficha resumida do herói foi evitada como fonte de número porque mantém o bloco antigo de Team-Up e o Laufeyson Reborn da Season 1. Três divergências ficam registradas em vez de escondidas: (1) a página oficial imprime a descrição base e a aprimorada do Villain’s Illusion repetidas dentro do bloco do Vibrant Vitality — é um defeito de renderização da própria página, e quem manda nos textos é o bundle oficial teamup_a35bb0a0.js, lido campo a campo; (2) a série de ajustes do Loki é real e datada, não impressão: o MR Patch Delta registra 15 mudanças em 11 patches desde 14/11/2025, com 7 buffs contra 7 nerfs, e o balance de 15/05/2026 cortou a ilusão de 100% para 80% de dano enquanto subiu a cura de 90% para 100%, então a cópia atual é cura melhor e dano pior que a original; (3) a percepção de que o Loki é o pior herói do jogo não se sustenta nas medições da Season 10: a Counterwatch o põe em C com 48,9% de win rate e 6% de pick rate, a Batru mede 51,57% em 80.575 partidas e a Rivals Meta o lista em A com 54,02% — o que ele tem de ruim é o pick rate baixo, não o pior índice do roster. Vale registrar o evento de 08/09/2026: o Loki foi desativado em Quick Play, Arcade, treino contra IA e 18 contra 18 no dia do anúncio da Season 10, permanecendo no competitivo e nos hubs sociais, e a leitura da comunidade foi a chegada do Gorr — a página do MarvelRivals.gg trata isso como campanha narrativa, e nenhuma fonte oficial confirmou o motivo.',
  coreRead: [
    'Ilusão não é truque de fuga: é um segundo curandeiro que atira, cura e abre o próprio Regeneration Domain onde você colocar.',
    'Duas ilusões de 60s e uma carga de [key:E] sempre recarregando: com a terceira ilusão no chão, a cura do time praticamente se triplica sem você gastar quase nada.',
    'Regeneration Domain converte 30% do dano do aliado em cura durante 5s: é a melhor defesa do jogo contra uma ultimate, e por isso o pior de gastar numa briga pequena.',
    'Devious Exchange ([key:F]) troca de lugar com uma ilusão a até 30m, mesmo fora da linha de visão: leaving uma ilusão para trás é guardar a saída de emergência.',
    'God of Mischief copia qualquer herói da partida por 12s com a ultimate dele já carregada, menos as habilidades de Team-Up: a leitura do momento decide se você copia a cura ou o dano.',
  ],
  teamUps: {
    summary:
      'Vibrant Vitality transforma o Regeneration Domain em uma zona de dano: 15% de boost para quem está dentro, raio de 6,5m e uma onda de choque de 45 que lança quem estiver em volta quando a Mantis está no time. Villain’s Illusion dá uma habilidade nova para copiar a forma de heróis caídos por 6s (8s com a Hela) e, com a parceira, faz o Loki voltar ao próprio corpo com 150 de vida em vez de tomar KO. A primeira ganha a briga; a segunda compra a briga.',
    recommended: 'Vibrant Vitality',
    recommendedReason:
      'As duas medições independentes concordam no nome, e a margem é grande. A Batru mede Vibrant Vitality com a Mantis em 62,19% de win rate de dupla contra 57,67% de Villain’s Illusion com a Hela, na Season 10 com dados de 30/09/2026. A votação do RivalsTeamUps vai no mesmo sentido com 81% de 98 votos, e o recorte por tier é o dado mais útil da página: Platina e Diamante votaram 100% no Vibrant Vitality, e Grandmaster e Celestial mantêm 81% e 73%. Ou seja, a decisão muda só para quem joga Bronze, Gold e Eternity. O argumento contra é real e está na própria página do MarvelRivals.gg: o boost do Vibrant Vitality só existe se a briga passar pelo campo, então contra composição que te obriga a curar de fora do domínio, ou quando a Hela está fixa no seu time, Villain’s Illusion é a melhor escolha. Escolha Vibrant Vitality quando o seu time quer ganhar a briga; escolha Villain’s Illusion quando você quer sobreviver a um pick e transformar um abate em 8s de poder emprestado.',
    options: [
      {
        name: 'Villain’s Illusion',
        partner: 'Hela',
        partnerRole: 'Duelista',
        input: 'C',
        baseEffect:
          'Concede uma nova habilidade para mirar heróis caídos (aliado ou inimigo), permitindo que o Loki assuma a forma deles por um tempo definido (não pode usar a ultimate deles).',
        enhancedEffect:
          'Com a Hela no time, a transformação do Loki dura um pouco mais. Além disso, sofrer dano letal enquanto transformado ou no estado da ultimate apenas faz o Loki voltar à forma dele com um fio de vida, impedindo o KO.',
        bestFor:
          'Times de 5v5 sem nenhuma ultimate pronta, contra drafts de Duelista em que a Hela já está causando dano. Os 150 de vida mantidos no estado transformado são a parte que importa: é a única forma de o Loki evitar um KO e continuar na briga dentro do próprio kit base, e a forma copiada (6s, 8s com a Hela) é o que dá acesso ao kit inteiro do inimigo sem gastar a ultimate.',
        easySetup:
          'Hela como Duelista de Sustento, para o ganho de tempo adicional já acender sozinho. Sem a parceira a habilidade base funciona igual — copiar herói caído não exige ninguém no time — então ela nunca é escolha inválida. Recarga de 30s.',
        iconUrl: publicAsset('teamups/loki-villains-illusion-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/loki-villains-illusion-partner.png'),
      },
      {
        name: 'Vibrant Vitality',
        partner: 'Mantis',
        partnerRole: 'Strategist',
        input: 'Shift',
        baseEffect:
          'O Regeneration Domain concede um efeito de Aumento de Dano para os aliados dentro do alcance; a Rune Stone dispara uma catálise psíquica que expande o raio do domínio.',
        enhancedEffect:
          'Com a Mantis no time, ao posicionar o Regeneration Domain o Loki emite uma onda de choque de energia psíquica que causa dano nos inimigos dentro do raio e os lança levemente para cima.',
        bestFor:
          'Qualquer momento em que o time vai avançar, e é a única das duas que dá dano ao Loki: 15% de boost num raio de 6,5m, mais 45 de dano em área com elevação de quem está em volta quando a Mantis está no time. É a resposta direta ao dive — o inimigo que entra no domínio dos 5m do Loki recebe dano elevado dentro do campo de negação. Contra Groot, Peni Parker e Doctor Strange, que a base lista como quem o Loki pune melhor, é a composição em que o boost rende mais.',
        easySetup:
          'Mantis como segundo Strategist. A parceira em si é forte de forma independente, então o slot nunca é perdido. O ponto do avanço é oboost condicional: o efeito só existe se a briga passar pelo domínio, então posicione o campo em um ponto de choke, e não atrás de você.',
        iconUrl: publicAsset('teamups/loki-vibrant-vitality-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/loki-vibrant-vitality-partner.png'),
      },
    ],
    sourceIds: ['official-teamups-loki', 'batru-loki', 'rivalsteamups-loki', 'official-abilities-loki', 'marvelrivalsgg-vibrant-vitality'],
  },
  systems: [
    {
      name: 'Doppelganger',
      input: 'E',
      heading: 'Cada ilusão é um terceiro do seu time',
      facts: [
        'Duas cargas, 12s para recuperar cada, até 2 ilusões vivas ao mesmo tempo e 60s de duração. Colocar a terceira destrói a mais antiga, então a ordem importa: a ilusão do meio da briga é a que você nunca quer ver morrer primeiro.',
        'A ilusão espelha o seu Mystical Missile no mesmo alvo e atira por conta própria, com 80% do seu dano e 100% da sua cura (valores do balance de 15/05/2026). Em 275 de vida, 250 de vida por ilusão é quase uma segunda vida sua em campo.',
        'O detalhe que quase nenhum guia destaca: cada ilusão também abre o próprio Regeneration Domain quando você usa [key:Shift]. Uma ilusão bem colocada dentro do ponto de disputa significa dois campos de 5m e conversão de 30% ao mesmo tempo, sem segunda recarga.',
        'A ilusão não sobrevive à sua morte — some com você. E ela é presente para o inimigo também: Capitão América, Elsa Bloodstone, Namor, Wolverine, Mister Fantastic, Psylocke, Phoenix e Squirrel Girl usam a sua ilusão para carregar a própria ultimate. Você não está colocando um curandeiro, está colocando isca em forma de curandeiro.',
        'A comunidade nos fóruns de Steam chega ao mesmo ponto por outro caminho: o que faz alguma coisa com o Loki são as cópias, e a orientação mais repetida é manter uma delas no meio do próprio time. O mesmo cuidado vale contra o Moon Knight, cuja Crescent Dart usa a ilusão como ricochete e transforma o ponto onde o time se agrupa numa armadilha.',
      ],
      meter: [
        { label: 'Sem ilusão', value: '1x cura e 1x dano' },
        { label: '1 ilusão no time', value: '2x cura, +80% de dano' },
        { label: '2 ilusões + [key:Shift]', value: '3x cura e 3 campos' },
      ],
    },
    {
      name: 'Regeneration Domain',
      input: 'Shift',
      heading: 'Salvar a ultimate, não o ally',
      facts: [
        'Raio de 5m, 2m de altura, 5s de duração, 30% de conversão do dano recebido em cura, 100/s de cura direta, Rune Stone com 100 de vida e 30s de recarga. É a única habilidade defensiva do kit e não tem anistia.',
        'A conversão é a mecânica que decide o uso: um aliado dentro do campo não perde nada, e você devolve 30% disso em vida. Contra uma ultimate de área, o campo transforma um KO garantido em alguém que sai andando com 30% do dano devolvido.',
        'A Rune Stone tem 100 de vida e é destruível. O que quebra a pedra também quebra o seu momento de negação: o ferro de área, o Winter Soldier e qualquer tiro focado caem nessa conta. Se o inimigo tem um anti-AoE no time, o campo não é de graça.',
        'Use a ilusão como âncora do campo, não a si mesmo. A Rune Stone nasce na posição do Loki e da ilusão, então um clone jogado no meio da briga cria o campo onde ele importa — inclusive quando você está a 20m, atrás da linha, que é onde o Loki deve estar vivo.',
        'O Reddit aponta o mesmo risco pelo outro lado: o Regeneration Domain é forte o bastante para limpar uma briga inteira, e os inimigos aprenderam a quebrar a pedra. A resposta certa não é guardar, é usar cedo e não duas vezes seguidas.',
      ],
      meter: [
        { label: 'Cura direta', value: '100/s em 5s' },
        { label: 'Conversão de dano', value: '30%' },
        { label: 'Vida da Rune Stone', value: '100' },
        { label: 'Recarga', value: '30s' },
      ],
    },
  ],
  roleGuides: {
    strategist: {
      key: 'strategist',
      label: 'Strategist',
      nickname: 'O Deus da Travessura',
      health: '275 HP',
      difficulty: 'Difícil (4/5): o kit é simples de apertar, mas a cura só existe se a ilusão estiver no lugar certo e a recarga de 30s do domínio não perdoa uso errado',
      job:
        'Multiplique a sua própria cura com o Doppelganger, use a ilusão para ancorar o Regeneration Domain dentro da briga e reserve a God of Mischief para o momento em que a leitura muda o resultado — uma ultimate inimiga carregando, um time sem cura, um companheiro prestes a cair.',
      verdict:
        'Escolha Loki quando o seu time tem um Vanguard que segura a linha e você quer preencher o espaço de um segundo curandeiro com dano. Evite contra três ou mais personagens de dano em área (a Rune Stone com 100 de vida não sobrevive a Ferro de Área) e evite sem cuidado contra drafts com Ferro de Área, Tempestade ou Human Torch:, Storm ou Human Torch: a comunidade e a wiki do Fandom convergem em que o projétil de 3m do Mystical Missile simplesmente não alcança quem voa, e nenhuma ilusão corrige isso.',
      playstyle: [
        'A primeira regra do Loki é quanta ilusão existe no momento da briga, não quanto dano você está causando. Duas cópias com 100% de cura e 80% de dano transformam o seuoutput em quase o triplo sem nenhum recurso gasto; o erro clássico é colocar as duas coladas em você, que é exatamente o ponto onde o inimigo vai procurar.',
        'O recurso de posicionamento é o que substitui a mira fina que os outros Strategists têm. O Loki não tem dash: a mobilidade dele é Devious Exchange, e ela só existe se houver uma ilusão plantada num ponto útil. Deixar um clone para trás não é desperdício, é seguro.',
        'Regeneration Domain não é botão de cura. É o único cancelamento de dano em área do jogo, com 30s de recarga: use contra a ultimate que você já viu virando, não para esticar um ally que se regenerate sozinho. Errar o timing aqui custa 30s de negação, que é uma briga inteira.',
        'A lama de dano vem de briga agrupada, não de alvo isolado. O projétil não causa dano nenhum sozinho, é o campo de 3m que faz 25 por disparo com queda a partir de 0,5m, então a leitura de mira é sobre posição do grupo, não sobre ponto na cabeça — e acerto crítico não existe nesse tiro.',
        'God of Mischief copia qualquer herói da partida, aliado ou inimigo, por 12s, com a ultimate deles já carregada. Copiar uma ultimate de dano (Adam Warlock, Storm, Doctor Strange) é quase sempre melhor que copiar um curandeiro, porque você vira 12s de dano que o inimigo não consegue prever.',
      ],
      priorityKicker: 'Ordem de decisão do Loki',
      priorityTitle: 'Ilusão antes de dano',
      priorityDescription:
        'A primeira decisão de cada briga é onde ficam as duas ilusões. A segunda é se o Regeneration Domain tem uma ultimate para negar. O resto é consequent.',
      upgradePlan: [
        {
          rank: 1,
          input: 'E',
          ability: 'Doppelganger',
          label: 'A carga que nunca fica ociosa',
          baseEffect:
            'Projete uma Ilusão num local mirado, a até 30m. 2 cargas, cada uma com 12s de recarga, até 2 ilusões em campo e 60s de duração.',
          upgradeEffect:
            'A Ilusão tem 250 de vida, espelha o seu Mystical Missile no mesmo alvo e, sozinha, 80% do dano e 100% da sua cura.',
          fightNote:
            'A Ilusão mais antiga é destruída quando você invoca a terceira. Defenda a que está no meio da briga.',
          why:
            'Enquanto a recarga do [key:E] estiver correndo, você está curando um time e não dois. A carga que fica na reserva é o que garante duas cópias em campo na próxima briga, e duas cópias é o ponto em que a saída de dano do Loki deixa de ser simbólica. Ela nunca é a primeira habilidade a apertar na pressão — é a primeira a apertar no tempo morto.',
          swapWhen:
            'Troque a ordem quando tiver regeneration: com a ultimate carregada, copie antes, porque cada segundo de God of Mischief é um segundo em que o time tem dois curandeiros.',
          sourceIds: ['official-abilities-loki', 'fandom-loki', 'steam-loki-healing'],
        },
        {
          rank: 2,
          input: 'Shift',
          ability: 'Regeneration Domain',
          label: 'Cancelar a ultimate, não curar o ally',
          baseEffect:
            'Solte um campo de magia na posição do Loki e da Ilusão. Cilindro de 5m de raio e 2m de altura, 5s, conversão de 30% do dano em cura, 100/s de cura, Rune Stone de 100 de vida, 30s de recarga.',
          upgradeEffect:
            'Com o Vibrant Vitality (Mantis), o raio sobe para 6,5m, os aliados dentro ganham 15% de aumento de dano e a Rune Stone emite uma onda de choque de 45 que lança os inimigos.',
          fightNote:
            'A pedra aparece no Loki e nas ilusões. Ilusão no meio da briga, campo no meio da briga.',
          why:
            'É a única forma de o kit inteiro do Loki discordar do resultado de uma briga: 30% de todo dano recebido dentro do campo volta como cura, e o aliado não toma nada. Contra uma ultimate de área, o campo troca um KO por um aliado vivo. Fora disso, é 30s de recarga jogados fora.',
          swapWhen:
            'Mantenha o domínio pronto e adiado se a briga é pequena e o time se regenera sozinho. Use cedo quando vir o Castor trocando de posição: a Rune Stone tem 100 de vida e é destruível.',
          sourceIds: ['official-abilities-loki', 'fandom-loki', 'reddit-loki-domain'],
        },
        {
          rank: 3,
          input: 'F',
          ability: 'Devious Exchange',
          label: 'A saída que você plantou antes',
          baseEffect:
            'Troque de posição com a Ilusão selecionada, a até 30m, mesmo que ela esteja fora da sua linha de visão. Recarga de 15s.',
          upgradeEffect:
            'A troca não cancela a Deception nem a regeneração enquanto invisível: recarregar, criar Doppelganger e trocar de lugar são as três ações que mantêm o Loki escondido.',
          fightNote:
            'Trocar para uma ilusão que está no meio do inimigo é agressão, não fuga.',
          why:
            'O Loki não tem dash. A única mobilidade real do kit é um botão de 15s que exige uma ilusão viva e bem plantada. Guardar um clone para trás é a forma mais barata de ter uma saída de emergência com cooldown incluso.',
          swapWhen:
            'Use logo depois da Deception, quando o inimigo ainda não recalculou para onde você foi, em vez de usar como reação depois de já estar tomando tiro.',
          sourceIds: ['official-abilities-loki', 'fandom-loki', 'cbr-loki'],
        },
        {
          rank: 4,
          input: 'RMB',
          ability: 'Deception',
          label: 'Fuga com 30/s, não com dano',
          baseEffect:
            'Fique invisível e conjure uma Ilusão no seu lugar. Cura contínua de 30 de vida por segundo enquanto invisível, recarga de 15s.',
          upgradeEffect:
            'A invisibilidade não tem limite de tempo, mas qualquer ação além de Devious Exchange, recarregar e Doppelganger deixa o Loki visível — inclusive levar dano.',
          fightNote:
            'Use antes de ser marcado, não depois de já estar visível no escopinho.',
          why:
            'O buff de 11/09/2026 levou a cura de 20/s para 30/s, o que torna a Deception sustain de verdade em 275 de vida, e não só um sumiço. Mas ela não serve como botão de escape sob pressão: leading dano desfaz a invisibilidade, então o uso certo é preventivo, logo depois de um Devious Exchange.',
          swapWhen:
            'Saia da invisibilidade na primeira janela segura. Dura quanto tempo quiser, custa caro: enquanto invisível você não cura o time e não causa dano.',
          sourceIds: ['official-abilities-loki', 'balance-20260911', 'patchdelta-loki'],
        },
        {
          rank: 5,
          input: 'LMB',
          ability: 'Mystical Missile',
          label: 'A mira é do grupo, não do alvo',
          baseEffect:
            'Projétil único com impacto atrasado que gera um campo de magia. O projétil não causa dano: o campo de 3m causa 25 por disparo, com queda começando em 0,5m e chegando a 80% a 2,5m. 1,75 por segundo, 10 de munição, sem acerto crítico.',
          upgradeEffect:
            'O campo cura 40 por disparo e o acerto direto em aliado cura 15 extras. Cada ilusão atira o mesmo projétil que você, com 80% de dano e 100% de cura.',
          fightNote:
            'A 120 m/s de projétil (buff de 07/08/2026), a distância para um alvo parado e a soma de quem está em volta.',
          why:
            'Como o projétil não causa dano nenhum, acertar direto ou quase errando a mesma coisa: o que importa é onde o campo de 3m cai. Isso transforma a mira numa leitura de posicionamento de grupo e tira o Loki da lista dos curandeiros que dependem de acerto preciso.',
          swapWhen:
            'Mire no chão ao lado do alvo para cobrir mais gente, e concentre o primeiro alvo em quem está protegido por escudo, porque o dano do campo é o que passa pela cancelação de escudo.',
          sourceIds: ['official-abilities-loki', 'fandom-loki', 'gamesgg-s95'],
        },
        {
          rank: 6,
          input: 'Q',
          ability: 'God of Mischief',
          label: 'Emprestar a ultimate, não o papel',
          baseEffect:
            'Mude de forma para um herói aliado ou inimigo mirado e use todas as habilidades dele, exceto as de Team-Up. 12s de duração, custo de 4500 de energia.',
          upgradeEffect:
            'Depois de transformar, a ultimate do Loki está totalmente carregada. Usar uma ultimate de transformação estende a duração do God of Mischief até a habilidade de transformação terminar.',
          fightNote: 'Nenhuma das habilidades de Team-Up do herói copiado está disponível.',
          why:
            'A God of Mischief de 12s é a decisão de maior teto do Loki: com a ultimate já carregada na forma, dá para transformar e usar a ultimate do outro duas vezes em sequência, se a primeira for de transformação. Copiar Duelista tira um curandeiro do seu time por 12s — é uma escolha real, não gratuita.',
          swapWhen:
            'Copie o que resolve a briga que está acontecendo: Adam Warlock, Storm ou Doctor Strange viram 12s de dano previsível; se o seu time está sangrando, copie Mantis ou Invisible Woman e aceite o buraco de 12s.',
          sourceIds: ['official-abilities-loki', 'fandom-loki', 'balance-20260515', 'counterwatch-loki', 'rivalsmeta-loki'],
        },
      ],
      adaptations: [
        'Contra Ferro de Área, Tempestade e Human Torch, considere trocar o herói: o projétil de 3m do Mystical Missile não alcança quem voa, e a ilusão continua não alcançando. Nenhuma tática de posicionamento corrige um projétil que não chega.',
        'Contra Moon Knight, mantenha as ilusões afastadas de onde o seu time se agrupa: a Crescent Dart dele faz ricochete na ilusão e o ponto de cura vira armadilha.',
        'Contra Winter Soldier, a contagem é contra você: cada ilusão destruída dá a ele outra janela de 7s para repetir a Kraken Impact, então não deixe duas cópias morrendo na mesma tela.',
        'Contra Rogue, evite deixar a ilusão sozinha num canto: a Skill Absorption funciona nela e a Rogue fica com o seu Regeneration Domain.',
        'Contra Mantis no time inimigo, lembre que a Vitality dela acende contra as suas próprias ilusões com acerto crítico — cada cópia é um Life Orb recarregado para ela.',
        'Com o Mantis no seu time (Vibrant Vitality), posicione o domínio em choke point e não atrás de você: o boost de 15% só existe na briga que passa pelo campo.',
        'Com a Hela no seu time (Villain’s Illusion), use a cópia de herói caído como confirmação de abate: cada inimigo que morre no seu turno vira 6s de poder emprestado, 8s com a parceira.',
      ],
      ultimates: [
        {
          stance: 'Copiar o dano',
          name: 'God of Mischief: forma de Duelista ou Vanguard',
          bestUse:
            'Quando o time inimigo tem uma ultimate cara carregada e o seu time não tem cura instantânea para o burst. Você vira o problema do outro time por 12s e a ultimate já vem carregada.',
          execution:
            'Espere a briga abrir com o time posicionado — a cópia só funciona em alvo mirado, então transformá-se no meio de um push sem linha de visão queima a ultimate. Entre no ângulo, confirme a forma e só então use a habilidade.',
          upgradeValue:
            'Se a forma copiada tiver ultimate de transformação, usá-la estende o God of Mischief até ela terminar. Essa é a forma de passar de 12s para muito mais em uma janela só.',
        },
        {
          stance: 'Copiar a cura',
          name: 'God of Mischief: forma de Strategist',
          bestUse:
            'Quando três do seu time estão abaixo de metade e o curandeiro do time já usou a ultimate. Doze segundos de Mantis ou Invisible Woman em um kit que não tem regeneração própria.',
          execution:
            'Copie Mantis para o bônus de dano que vem de cura, ou Invisible Woman para o escudo. Tenha claro o custo: 12s sem o curandeiro original do seu time, e a forma não dá acesso às habilidades de Team-Up.',
          upgradeValue:
            'A forma cura não rende em dano direto, mas é a conversão mais estável da ultimate: o time inteiro existe melhor nos 12s, o que vale mais que 12s de um Dano solto.',
        },
        {
          stance: 'Negar a ultimate',
          name: 'Regeneration Domain como resposta',
          bestUse:
            'Não é ultimate, mas é a jogada de maior impacto do Loki contra uma ultimate inimiga: 30% de conversão em 5s com 30s de recarga.',
          execution:
            'Saia da recarga de [key:Shift] antes da briga, não durante. A Rune Stone nasce onde está a ilusão, então a ilusão que você plantou no ponto de disputa é a que cria o campo.',
          upgradeValue:
            'Com o Vibrant Vitality o raio vai a 6,5m e a onda de choque de 45 lança quem entrar: a mesma janela que negava dano agora também pune.',
        },
      ],
      dashGuide: {
        ability: 'Devious Exchange',
        shortRule:
          'O Loki não tem dash. A mobilidade dele é uma troca de 15s que só funciona se existir uma ilusão viva num ponto que valha a pena.',
        mechanics: [
          'A troca alcança 30m e funciona com a ilusão fora da sua linha de visão: plantar um clone atrás de você é ter uma saída de emergência com cooldown incluso.',
          'Devious Exchange, recarregar e Doppelganger são as três ações que não quebram a invisibilidade da Deception. Qualquer outra, inclusive levar dano, desfaz o sumiço.',
          'A ilusão mais antiga morre quando você invoca a terceira. Você tem duas cargas e três invocações possíveis por janela de 60s, e cada uma custa 12s de recarga.',
        ],
        drills: [
          'Treine plantar a segunda ilusão a 20m, atrás da linha de visão do inimigo, e voltar com Devious Exchange no meio da briga: é o ciclo inteiro do Loki em 3 segundos.',
          'Treine usar Deception e Devious Exchange em sequência: o inimigo vê três Loki, dois deles alvo, e você sai com 30/s de cura rodando.',
          'Treine deixar uma ilusão no meio do time antes de produzir e voltar com Devious Exchange para a negação: o domínio e o cancelamento de dano dependem dessa planta.',
        ],
      },
      patterns: [
        {
          title: 'Ilusão no meio, uma no flanco',
          steps: [
            'Antes do primeiro tiro, plante a primeira ilusão no centro da linha de briga do seu time, não perto de você — é dela que sai o Regeneration Domain.',
            'Plante a segunda 8 a 10m atrás e de lado, apontada para a rotação de flanco: ela é a que faz a troca de Devious Exchange ter para onde ir.',
            'Mire o Mystical Missile no chão ao lado do grupo, nunca na cabeça: o projétil não causa dano, é o campo de 3m que faz 25 por disparo.',
            'Quando a ultimate inimiga entrar, use [key:Shift] sem a ilusão central presa, troque de lugar com a de trás e saia da linha de tiro.',
          ],
        },
        {
          title: 'Negar a ultimate e sair',
          steps: [
            'Espere a Rune Stone estar carregada e a ilusão central plantada antes do Castor trocar de posição.',
            'Use [key:Shift] sobre o aliado mais exposto: 30% do dano dele volta como cura e ele não toma nada nos 5s.',
            'Se a pedra for destruída, saia imediatamente — a negação acabou e a próxima janela é 30s.',
            'Troque de lugar com a ilusão do flanco e atire de novo do novo ângulo, agora com a ilusão do meio recuperando a saída de dano.',
          ],
        },
        {
          title: 'Caçar o herói caído',
          steps: [
            'Com o Villain’s Illusion equipado, cada KO na sua tela é uma habilidade de 6s (8s com a Hela) esperando na tecla [key:C].',
            'Mire a forma do inimigo caído, entre no ângulo e copie a vida dele enquanto ele tenta se reerguer.',
            'Use a forma copiada para dividir a atenção: o inimigo precisa escolher entre te matar e defender o time que já está sofrendo.',
            'Se levar dano letal na forma, a versão aprimorada devolve 150 de vida em vez do KO — esse é o único momento em que o Loki faz o próprio KO virar recurso.',
          ],
        },
        {
          title: 'Emprestar a ultimate certa',
          steps: [
            'Leia a briga em 5s: quem está sangrando, que ultimate inimiga está carregada e se o seu time tem cura instantânea.',
            'Copie Mantis ou Invisible Woman se o problema é o time, e Adam Warlock, Storm ou Doctor Strange se o problema é o dano que não vem.',
            'Gaste a ultimate copiada no momento de pico, não na abertura — 12s é curto e o buff de transformação é o que estende.',
            'Saia da forma antes de ser pego em grupo: a transformação não dá segunda chance de sobreviver, e o seu time fica sem curandeiro durante todo o processo.',
          ],
        },
      ],
      mistakes: [
        'Colocar as duas ilusões em cima de você. Elas não são escudo: são o alvo que o inimigo procura e o que dá reset de ultimate para o Winter Soldier.',
        'Usar Regeneration Domain em briga pequena. São 30s de recarga pelo equivalente a 500 de cura que a maior parte do time já ia regenerar.',
        'Confundir a Deception com botão de escape. Levar dano desfaz a invisibilidade, então usá-la depois de já estar marcado só dá 30/s e some.',
        'Mirar a cabeça no Mystical Missile. O projétil não causa dano nenhum, o campo de 3m causa 25, e o acerto crítico não existe nesse tiro.',
        'Transformar com a ultimate carregada sem linha de visão do alvo. A cópia é mirada: transformar no meio de um push às cegas queima 4500 de energia.',
        'Ficar invisível tempo demais achando que está-curando o time. Invisível é 30/s para você e zero para os outros.',
        'Copiar um Duelista sem saber que o seu time fica sem curandeiro durante os 12s da forma.',
      ],
      evidence: [
        'Página oficial de habilidades (11/09/2026, Season 10): 275 de vida, 6 m/s, 250 de vida por ilusão, 60s de duração, máximo de 2 ilusões, 80% de dano e 100% de cura das cópias.',
        'Balance de 15/05/2026: razão de cura da ilusão de 90% para 100% e razão de dano de 90% para 80%; custo da God of Mischief de 4300 para 4500.',
        'Balance de 07/08/2026: velocidade do projétil do Mystical Missile de 100 para 120 m/s.',
        'Balance de 11/09/2026: cura do Mystical Missile de 10 para 15 e cura da Deception na furtividade de 20/s para 30/s; conversão de cura dos Strategists de 70% para 65% e de dano de 55% para 50%.',
        'Fandom (14/11/2025): vida de 250 para 275, queda do dano a 3m de 50% para 80% e 10 de cura extra no acerto direto; God of Mischief de 15s para 12s em 12/09/2025; dano do projétil de 30 para 25 em 21/08/2025; munição de 12 para 10 em 13/02/2026.',
        'MR Patch Delta: 15 mudanças em 11 patches, 7 buffs contra 7 nerfs — o Loki não é um herói só nerfado, é um herói que foi ajustado em quase toda temporada.',
        'Counterwatch (21/09/2026, Season 10): Loki em C com 48,9% de win rate e 6% de pick rate; Batru (30/09/2026): 51,57% em 80.575 partidas; Rivals Meta: A com 54,02%.',
        'Counterwatch, contadores: Spider-Man +9,9, Black Panther +8,7 e Black Cat +8,0 são os que mais vencem o Loki; o Loki pune Winter Soldier, Namor e The Punisher.',
        'Fandom, fraquezas: inimigos aproveitam as ilusões (Capitão América, Elsa Bloodstone, Namor, Wolverine, Mister Fantastic, Psylocke, Phoenix, Rogue, Squirrel Girl, Winter Soldier, Mantis) e a God of Mischief não dá acesso a habilidades de Team-Up nem segunda chance em caso de KO.',
        'Balance da Season 10, no lado da Angela: ao selecionar o Team-Up com o Loki, a vida máxima das ilusões cai de 250 para 150 — a durability da ilusão é nerfada por conta do time dela, não do seu.',
        'Bundle oficial teamup_a35bb0a0.js: pos0 VILLAIN’S ILLUSION (Hela, Key C), pos1 VIBRANT VITALITY (Mantis, Key Shift).',
        'Evento de 08/09/2026: o Loki foi desativado em Quick Play, Arcade, treino contra IA e 18 contra 18, permanecendo no competitivo; a hipótese da comunidade é a chegada do Gorr na Season 10, sem confirmação oficial.',
      ],
      abilityLoop: [
        'Doppelganger',
        { ability: 'Mystical Missile', input: 'LMB' },
        { ability: 'Regeneration Domain', input: 'Shift' },
        { ability: 'Devious Exchange', input: 'F' },
        { ability: 'Deception', input: 'RMB' },
      ],
    },
  },
  sources: [
    {
      id: 'official-abilities-loki',
      kind: 'official',
      title: 'LOKI — página oficial de habilidades (marvelrivals.com)',
      url: 'https://www.marvelrivals.com/20241123/41360_1195662.html',
      published: '2026-10-02',
      confidence: 'alta',
      takeaways: [
        'Fonte de todos os números do kit, já pós-balance de 11/09/2026: 275 de vida, 6 m/s, 250 de vida por Ilusão, 60s de duração, máximo de 2 ilusões, 80% de dano e 100% de cura das cópias.',
        'Mystical Missile: o projétil não causa dano e o campo de 3m causa 25 por disparo; queda começando em 0,5m chegando a 80% a 2,5m; 120 m/s; 1,75 disparos por segundo; 10 de munição; sem acerto crítico; 40 de cura por acerto e 15 extras no acerto direto de aliado.',
        'Regeneration Domain: cilindro de 5m de raio e 2m de altura, 5s, conversão de 30%, 100/s de cura, Rune Stone com 100 de vida, 30s de recarga, e o campo nasce na posição do Loki e da Ilusão.',
        'God of Mischief: mirado, 12s, custo de 4500, ultimate totalmente carregada ao transformar e extensão da duração enquanto a habilidade de transformação estiver ativa; dá acesso a todas as habilidades do alvo exceto as de Team-Up.',
        'Deception: instantâneo, ilusão deixada para trás, invisibilidade sem limite de tempo que quebra em qualquer ação além de Devious Exchange, recarregar e Doppelganger, 30/s de cura enquanto invisível, 15s de recarga.',
        'Doppelganger: 2 cargas com 12s cada, 30m de distância máxima. Devious Exchange: 30m, 15s. Backstab: 30 de dano, +15 pelas costas (45 no total), 3m de alcance.',
        'Números de Team-Up impressos na ficha: Villain’s Illusion com tecla C, 30s de recarga, 6s de duração e 150 de vida retida na morte; Vibrant Vitality com tecla Shift, 30s, 5s, 6,5m de raio e 15% de aumento de dano, mais 45 de dano único na versão aprimorada.',
        'Defeito de renderização registrado: o bloco do Vibrant Vitality repete o texto base e o aprimorado do Villain’s Illusion, com um bloco de texto de preenchimento corrompido na página. Os textos canônicos vieram do bundle oficial, não desta página.',
        'A ficha também mantém o Laufeyson Reborn da Season 1, que não está em uso — por isso a página de habilidades entra como fonte de número e a ficha resumida fica fora.',
      ],
    },
    {
      id: 'official-teamups-loki',
      kind: 'official',
      title: 'Team-Up — Marvel Rivals (bundle oficial teamup_a35bb0a0.js)',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      published: '2026-10',
      confidence: 'alta',
      takeaways: [
        'Bundle lido campo a campo nesta sessão. Na ordem do bundle: pos0 VILLAIN’S ILLUSION, com a Hela, Key_en C; pos1 VIBRANT VITALITY, com a Mantis, Key_en Shift.',
        'Villain’s Illusion, texto base: "Gain a new ability to target fallen heroes (friend or foe), letting Loki assume their form for a set time (cannot cast their Ultimate Ability)." Aprimorado: "When teaming up with Hela, Loki\'s transformation lasts slightly longer. Furthermore, taking lethal damage while transformed or in his Ultimate Ability state will merely revert him back to Loki with a sliver of Health, preventing a KO."',
        'Vibrant Vitality, texto base: "Regeneration Domain provides a Damage Boost effect to allies within range; the Runestone triggers a psychic catalysis, expanding the domain\'s radius." Aprimorado: "When teaming up with Mantis, deploying Regeneration Domain emits a shockwave of psychic energy that damages enemies within the radius and slightly Launch them up."',
        'A ordem do bundle é a que define o par slug de arquivo/nome oficial no manifesto; a chave slug do Loki é villains-illusion e vibrant-vitality, sem aviso de nome desatualizado.',
      ],
    },
    {
      id: 'balance-20260911',
      kind: 'official',
      title: 'Marvel Rivals Season 10 — Balance Patch Notes (20260911)',
      url: 'https://marvelrivals.gg/season-10-balance-patch-notes',
      published: '2026-09-16',
      confidence: 'alta',
      takeaways: [
        'Loki: "Increase Mystical Missile healing amount from 10 to 15" e "After casting Deception, increase continuous self-healing during stealth from 20/s to 30/s." São os dois últimos ajustes do herói e explicam os 15 de cura no acerto direto e os 30/s de furtividade que a página oficial já imprime.',
        'Mudança global de Strategists na mesma season: conversão de cura para energia de 70% para 65% e de dano para energia de 55% para 50%. É o que faz a ultimate do Loki custar 4500 de energia na rotação atual.',
        'No lado do time, a Angela ganha um ajuste acoplado ao Loki: "When selecting the Team-Up with Loki, reduce the maximum damage the illusions can take from 250 to 150." A queda de 250 para 150 vale para a ilusão quando o par é Angela, não para as duas opções atuais do Loki.',
        'Mantis, na mesma season, teve o tempo de carga de cada Life Orb aumentado de 3s para 4s — o que reduz o ritmo com que ela recarrega a própria sustain e torna aDEPENDência do Vibrant Vitality dela mais deliberada.',
      ],
    },
    {
      id: 'balance-20260515',
      kind: 'official',
      title: 'Marvel Rivals Version 20260515 Balance Post (Season 8)',
      url: 'https://www.marvelrivals.com/balancepost/20260512/41667_1299947.html',
      published: '2026-05-12',
      confidence: 'alta',
      takeaways: [
        'Texto lido: "Increase illusion\'s Mystical Missile Healing ratio from 90% to 100%. Reduce illusion\'s Mystical Missile damage ratio from 90% to 80%. Increase the energy cost of God of Mischief from 4000 to 4300."',
        'É a origem dos 80% de dano e 100% de cura das cópias que a página oficial publica hoje: a ilusão atual cura mais e bate menos que o Loki real, o que muda a leitura de "ilusões são DPS" para "ilusões são sustain e isca".',
        'O custo de energia da ultimate subiu de 4000 para 4300 neste patch e para 4500 em outra onda posterior, o que explica por que a God of Mischief não é uma ultimate de ciclo curto.',
      ],
    },
    {
      id: 'patchdelta-loki',
      kind: 'database',
      title: 'Loki Patch History — MR Patch Delta',
      url: 'https://patchdelta.gg/marvelrivals/loki',
      published: '2026-08-07',
      confidence: 'alta',
      takeaways: [
        'Índice verificado de 15 mudanças em 11 patches: 7 buffs, 7 nerfs e 1 neutro, desde 14/11/2025 até 11/09/2026. A leitura correta é que o Loki é um herói permanentemente ajustado, não um herói só nerfado.',
        'Histórico confirmado: vida de 250 para 275 em 14/11/2025; queda de dano a 3m de 50% para 80% e 10 extras de cura no acerto direto em 14/11/2025; munição de 12 para 10 em 13/02/2026; velocidade do projétil de 100 para 120 m/s em 07/08/2026; cura do projétil de 10 para 15 em 11/09/2026.',
        'Período residual de habilidade ativa na transformação caiu de 5s para 3s em 12/09/2025, ou seja, o Loki agora perde a forma mais rápido depois que a habilidade copiada acaba.',
        'A base declara explicitamente que o Loki não foi mexido no patch de 17/09/2026 e que a última mudança é a de 11/09/2026 — o número desta guia é o estado final da Season 10.',
      ],
    },
    {
      id: 'fandom-loki',
      kind: 'database',
      title: 'Loki — Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Loki',
      published: '2026-10',
      confidence: 'media',
      takeaways: [
        'Melhor fonte para a lista de quem se aproveita das ilusões: Capitão América (Sentinel Strike), Elsa Bloodstone (Inherited Instinct), Mantis (crítico para Life Orb), Mister Fantastic (Elastic Strength), Moon Knight (ricochete), Namor (Monstro Spawn), Phoenix (Sparks), Rogue (Skill Absorption), Squirrel Girl (Burst Acorn), Winter Soldier (reset do Kraken Impact) e Wolverine (Berserker Rage).',
        'Documenta o pior matchup declarado: as ilusões não voam, então o Mystical Missile de 3m simplesmente não acerta Ferro de Área, Tempestade e Human Torch. É a limitação que nenhuma ilusão compensa.',
        'Explica a Deception por inteiro: a invisibilidade dura o tempo que você quiser, mas levar dano ou qualquer ação além de recarregar, Doppelganger e Devious Exchange desfaz, o que a torna ruim como escape sob pressão.',
        'Explica a God of Mischief: ao virar herói inimigo o nameplate e a cor do time mudam e voltam ao atacar; a ultimate copiada começa em 100%; o residual é de 3s; e não há segunda chance de sobreviver durante a transformação.',
        'Registra a lista de Team-Up atual (Vibrant Vitality com Mantis e Villain’s Illusion com Hela) e o Odin\'s Unacknowledged com Angela, que é o terceiro vínculo mencionado pela wiki e não é uma das duas opções selecionáveis.',
        'STALE em número: a página ainda traz a God of Mischief com 15s de duração, o que a página oficial e o patch de 12/09/2025 já reduziram para 12s. A tabela de habilidades da wiki é montada por JS e não foi usada como fonte de valor.',
      ],
    },
    {
      id: 'fandom-loki-balance',
      kind: 'database',
      title: 'Balance Changes — Loki — Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Loki/Balance_Changes',
      published: '2026-10',
      confidence: 'media',
      takeaways: [
        'Linha do tempo por temporada, útil para datar cada número: Season 1.5 (11/04/2025) recarga do Regeneration Domain de 25s para 30s; Season 2 (21/02/2025) munição de 10 para 12; Season 3 (11/07/2025) custo da ultimate de 3400 para 4000; Season 4 (12/09/2025) razão de dano e cura da ilusão reduzida de 100% para 80%, God of Mischief de 15s para 12s e residual de 5s para 3s; balance de 21/08/2025 dano do projétil de 30 para 25.',
        'Season 4.5 (14/11/2025): vida de 250 para 275, queda de dano a 3m de 50% para 80% e acerto direto curando 10 extras.',
        'Confirma que a Season 3.5 introduce o Vibrant Vitality como Team-Up do Loki com a Mantis, com raio aumentado e aumento de dano no Regeneration Domain, e que a Season 1 (Laufeyson Reborn) foi removida em 08/08/2025.',
      ],
    },
    {
      id: 'batru-loki',
      kind: 'database',
      title: 'Loki — Sinergia e Team-Ups (Batru, Marvel Rivals Season 10)',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/loki',
      published: '2026-09-30',
      confidence: 'media',
      takeaways: [
        'Win rate do Loki em 51,57% com 14,38% de pick rate e 80.575 partidas, agregado de 30 dias recalculado diariamente (dados de 30/09/2026).',
        'Team-Up medido: Vibrant Vitality com a Mantis em 62,19% de win rate de dupla, Villain’s Illusion com a Hela em 57,67%. É a base que fixou a recomendação do guia e a margem entre as duas opções.',
        'Melhores parceiros por win rate de dupla: Mantis 62,19%, Devil Dinosaur 61,83% e Peni Parker 61,34%. Piores: Doctor Strange 41,22%, Squirrel Girl 43,53% e Jeff The Land Shark 44,38%.',
        'Ressalva metodológica da própria base: o número de dupla mistura a força individual dos heróis no meta, então a diferença entre 62,19% e 57,67% mede a dupla, não só o efeito do Team-Up.',
      ],
    },
    {
      id: 'counterwatch-loki',
      kind: 'database',
      title: 'How to Counter Loki — Marvel Rivals (Counterwatch)',
      url: 'https://www.counterwatch.gg/stats/marvel-rivals/counters/loki',
      published: '2026-09-21',
      confidence: 'media',
      takeaways: [
        'Contadores mais fortes do Loki: Spider-Man +9,9 (pressão de time), Black Panther +8,7 (ganha o duelo) e Black Cat +8,0 (pressão de time), num índice em que 0 é neutro.',
        'Na direção oposta, o Loki pune Winter Soldier, Namor e The Punisher, e ainda aparece punindo Deadpool Duelista +3,8, Blade +3,7, Iron Man +3,4 e Human Torch +3,3.',
        'Metodologia declarada: os contadores vêm de resultados de duelo e de briga, com no mínimo 50 jogadores por matchup, e o win rate geral é excluído de propósito do índice.',
        'Mesma base, tier list de Strategist da Season 10 (atualizada em 21/09/2026): o Loki fica em C com 48,9% de win rate, 6% de pick rate, 12,0 abates por 10, 6,3 mortes por 10 e 17,8 assistências por 10, com confiança declarada "very high".',
      ],
    },
    {
      id: 'rivalsmeta-loki',
      kind: 'database',
      title: 'Marvel Rivals Tier List — Rivals Meta (Season 10)',
      url: 'https://rivalsmeta.com/tier-list',
      published: '2026-10',
      confidence: 'media',
      takeaways: [
        'Medição independente que discorda da Counterwatch: o Loki aparece em A com 54,02% de win rate na Season 10, atrás de Hulk (54,22%) e à frente de Daredevil (53,44%).',
        'A divergência entre 48,9% (Counterwatch) e 54,02% (Rivals Meta) é grande demais para ignorar e está registrada no confidenceSummary: as duas bases medem recortes e populations diferentes, e nenhuma das duas coloca o Loki como o pior herói do roster.',
        'A leitura útil para o jogador é o pick rate: 6% na Season 10 contra 34% da Jubilee e 21% da Luna Snow na mesma base. O Loki é pouco escolhido, não necessariamente o pior em número de vitória.',
      ],
    },
    {
      id: 'rivalsteamups-loki',
      kind: 'guide',
      title: 'Best Loki Team-Ups — Marvel Rivals Season 10 (Rivals Team-Ups)',
      url: 'https://rivalsteamups.com/heroes/loki',
      published: '2026-10',
      confidence: 'media',
      takeaways: [
        'Votação da comunidade com 98 votos: Vibrant Vitality com 81% e margem de 60 votos sobre o Villain’s Illusion.',
        'O recorte por tier é o dado que mais muda a decisão: Platina e Diamante votaram 100% no Vibrant Vitality, Grandmaster 81%, Celestial 73%, Gold 56% e Bronze 50%.',
        'A própria página deanchor avisa que o boost do Regeneration Domain só existe se a briga passar pelo campo, e que o valor da opção depende da composição e do mapa.',
        'A ressalva metodológica da página é explícita: os votos vêm de visitantes filtrados por plataforma e tier, amostras pequenas são sinal inicial e o resultado não é verdade absoluta.',
      ],
    },
    {
      id: 'marvelrivalsgg-vibrant-vitality',
      kind: 'guide',
      title: 'Vibrant Vitality — Team-Up (MarvelRivals.gg)',
      url: 'https://marvelrivals.gg/vibrant-vitality',
      published: '2025-11-17',
      confidence: 'media',
      takeaways: [
        'Leitura tática do efeito na Season 3.5: o Regeneration Domain deixa de ser pilar de cura passiva e vira ferramenta ofensiva, com o aumento de danocheck no aliado que entra no campo.',
        'Dois usos práticos que valem a leitura: punir o flanco quando o inimigo mergulha (o domínio não só protege o backline, aumenta a chance de punir o diver) e amplificar o time que está atacando.',
        'Melhor contra melee e médio alcance, e o contra declarado é o Wolverine, que arranca do campo o Groot, o Loki ou qualquer alvo com o buff.',
        'STALE em número: a página descreve a Season 3.5 e o time ancora Loki, Groot e Mantis; a Season 10 mantém apenas o Loki com a Mantis como segunda opção.',
      ],
    },
    {
      id: 'steam-loki-healing',
      kind: 'forum',
      title: 'Need tips for healing as Loki — Steam Community (Marvel Rivals)',
      url: 'https://steamcommunity.com/app/2767030/discussions/0/578250068925096946',
      published: '2025-01-18',
      confidence: 'media',
      takeaways: [
        'Leitura por snippet de thread, não leitura integral: um jogador de main do Loki resume a mecânica central como "the key to doing anything with Loki is clones" e explica que o tiro principal cura muito melhor quando as cópias atiram no mesmo alvo.',
        'O segundo ponto da thread é o que virou o eixo do guia: cada cópia também posiciona a própria Rune Stone, então ter uma cópia dentro do corpo principal do time é o que permite usar o Regeneration Domain para negar uma ultimate.',
        'Alerta tático explícito na thread: com Moon Knight no jogo, não coloque a cópia no meio do grupo, porque o ricochete da Crescent Dart transforma o ponto de cura em armadilha.',
        'Relata também o efeito colateral que explica a percepção de "o Loki não cura": a saída de cura por projétil é baixa se as cópias não estiverem apontando para o mesmo alvo, o que confunde a leitura de quem compara com a Luna e o Rocket.',
        'STALE em número: a thread é de janeiro de 2025, anterior a todos os patches de munição, dano do projétil e razão das cópias. Serve para decisão e técnica, nunca para valor.',
      ],
    },
    {
      id: 'reddit-loki-domain',
      kind: 'forum',
      title: 'Loki\'s Regeneration Domain — r/marvelrivals (leitura por snippet)',
      url: 'https://www.reddit.com/r/marvelrivals/comments/1mfkpbr/lokis_regeneration_domain',
      published: '2025-08-02',
      confidence: 'media',
      takeaways: [
        'Leitura por snippet, sem leitura integral da thread: o eixo do debate é que a Rune Stone tem 100 de vida e pode ser quebrada com facilidade por qualquer jogador dentro do campo, e que ultimates de área destroem o domínio junto com o time que estava dentro.',
        'O segundo eixo é o inverso e é o que interessa para o guia: vários posts descrevem o Regeneration Domain como absurdamente forte, capaz de defender o Loki e o time inteiro de um burst, e comparam o mesmo problema de "destruível" com a bolha do Magneto, o escudo do Magneto e a área do Doutor Estranho.',
        'Conclusão prática que o guia usa: a recusa em usar o domínio é erro (é o melhor cancelamento de dano do jogo) e o erro simétrico é usar cedo demais, porque a pedra quebrada significa 30s sem negação.',
        'Uma resposta da thread pede crédito de cura para o Regeneration Domain, o que indica divergência de contabilização entre bases de estatística e a percepção do jogador — registrada aqui como ruído de medição, não como número.',
      ],
    },
    {
      id: 'cbr-loki',
      kind: 'guide',
      title: 'Marvel Rivals: 10 Loki Tips To Make You a Game-Changing Strategist (CBR)',
      url: 'https://www.cbr.com/marvel-rivals-loki-best-strategist/',
      published: '2025-01-08',
      confidence: 'media',
      takeaways: [
        'Dica de ritmo que o guia adotou: mantenha uma carga do Doppelganger sempre ativa, porque colocar a terceira ilusão mata a mais antiga e isso transforma a recarga de 12s em uma decisão de tempo, não de botão.',
        'Dica de combos de campo: plantar a ilusão ao lado de um aliado que está sofrendo e acionar o Regeneration Domain imediatamente dá a ele uma área de cura de 5s onde ele não pode ser derrubado.',
        'Confirma o alcance de 30m do Doppelganger, o limite de duas ilusões simultâneas, os 60s de duração e a semiautomática do Devious Exchange em 15s.',
        'Explica o truque de identidade: quando o Loki real se passa pela cópia, o inimigo desperdiça munição no alvo errado — o que transforma a ilusão em ferramenta deengano, não só de saída.',
        'STALE em número: o guia ainda traz 30 de dano de explosão e 12 de munição. Serviu para decisão e técnica; nenhum valor desta fonte foi usado.',
      ],
    },
    {
      id: 'gamesgg-s95',
      kind: 'guide',
      title: 'Marvel Rivals Season 9.5 Buffs and Nerfs (Games.gg)',
      url: 'https://games.gg/marvel-rivals/guides/marvel-rivals-season-9-5-buffs-and-nerfs/',
      published: '2026-08-07',
      confidence: 'media',
      takeaways: [
        'Confirma o único ajuste do Loki na Season 9.5: a velocidade do projétil do Mystical Missile subiu de 100 m/s para 120 m/s, com a justificativa de que o projétil era fácil de desviar a longa distância.',
        'A mesma página lista a redução global de conversão de energia dos Strategists e o nerf de itens desupport, o que ajuda a situar o Loki no contexto da temporada em vez de ler o buff dele isolado.',
        'Serve como confirmação independente do MR Patch Delta para o número de velocidade do projétil; a página oficial de habilidades já publica os 120 m/s atuais.',
      ],
    },
    {
      id: 'marvelrivalsgg-loki-disabled',
      kind: 'guide',
      title: 'Marvel Rivals Loki Disabled: What Is Going On And Could Gorr Be Involved (MarvelRivals.gg)',
      url: 'https://marvelrivals.gg/marvel-rivals-loki-disabled',
      published: '2026-09-08',
      confidence: 'pendente',
      takeaways: [
        'Relata que em 08/09/2026 o Loki foi desativado em Quick Play, Arcade, treino contra IA e 18 contra 18, permanecendo disponível no competitivo e nos hubs sociais. A fonte original citada é um post de Miller Ross na rede X.',
        'A hipótese da página e da comunidade é a chegada do Gorr na Season 10, já que o vilão caça deuses na narrativa Marvel; a própria página classifica como movimento de marketing e afirma que o Loki não foi removido do jogo.',
        'Nenhuma fonte oficial (NetEase ou Marvel Rivals) explicou a decisão e não há nota de patch sobre o assunto. Por isso a fonte fica com confidence pendente e o guia não afirma nem que o Loki está desativado hoje nem que foi removido.',
        'O que dá para afirmar com segurança: o Loki recebeu balance no dia seguinte dessa data (11/09/2026, Season 10), o que confirma que ele estava ativo e em ajuste fino no competitivo.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Oficial',
      count: 4,
      status:
        'Página oficial de habilidades lida integralmente (é a fonte de todos os números do kit, já pós-balance de 11/09/2026), bundle oficial de Team-Up lido campo a campo (nome, parceiro, tecla e textos base/aprimorado na ordem do bundle) e dois balance posts com as linhas do Loki (15/05/2026 e 11/09/2026). A ficha resumida do herói foi descartada como fonte de número porque mantém o Laufeyson Reborn da Season 1. A página de habilidades tem um defeito de renderização no bloco do Vibrant Vitality (repete o texto do Villain’s Illusion e exibe um placeholder CJK), e a correção veio do bundle, não da página.',
    },
    {
      kind: 'database',
      label: 'Wiki/Database',
      count: 6,
      status:
        'Fandom lido (fontes de fraquezas, lista de quem explora as ilusões e matchup contra heróis voadores), página de Balance Changes do Fandom datando cada número, MR Patch Delta como índice verificado dos 11 patches que tocaram o Loki, Batru para win rate de dupla dos dois Team-Ups, Counterwatch para contadores e para o tier list de Strategist da Season 10, e Rivals Meta como segunda medição de win rate. A divergência entre 48,9% e 54,02% de win rate do Loki está registrada no confidenceSummary, sem escolha silenciosa.',
    },
    {
      kind: 'guide',
      label: 'Guias',
      count: 5,
      status:
        'Rivals Team-Ups para a recomendação de Team-Up por votação com recorte por tier (81% de 98 votos, 100% em Platina e Diamante), MarvelRivals.gg para a leitura tática do Vibrant Vitality, CBR para o ritmo de carga do Doppelganger e para o uso de campo do Regeneration Domain, Games.gg como confirmação independente do buff de velocidade de 07/08/2026, e MarvelRivals.gg para o evento de desativação de 08/09/2026 (fonte marcada como pendente por não haver confirmação oficial). As quatro primeiras estão desatualizadas em número e registradas assim.',
    },
    {
      kind: 'forum',
      label: 'Fórum/Comunidade',
      count: 2,
      status:
        'Duas leituras por snippet, registradas como tal e não como leitura integral: a thread do Steam sobre cura com o Loki (as ilusões como eixo do kit, Rune Stone por cópia, alerta sobre Moon Knight) e a discussão do Reddit sobre o Regeneration Domain (pedra de 100 de vida destruível, comparação com a bolha do Magneto e a percepção de que o poder é grande demais). Nenhum número de fórum foi usado no guia. A thread do Reddit sobre os nerfs do Loki ("Loki nerfs are terrible") apareceu na busca e é coerente com o histórico do MR Patch Delta, mas ficou fora do texto por não ter sido lida.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos',
      count: 0,
      status:
        'Pendente: a página do Rivals Team-Ups do Loki embute um vídeo comparando as duas opções do Team-Up, mas não há transcrição validada com timestamps nesta sessão. Nenhum número de vídeo foi usado no guia.',
    },
  ],
}
