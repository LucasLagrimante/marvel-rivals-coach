import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const moonKnight: HeroGuide = {
  id: 'moon-knight',
  name: 'Moon Knight',
  aliases: ['Marc Spector', 'Lua da Lua', 'Avatar de Khonshu', 'Moon Knight', 'MK'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/moon-knight.png'),
  bannerUrl: publicAsset('heroes/banners/moon-knight.png'),
  selectionPortraitUrl: publicAsset('heroes/select/moon-knight.png'),
  selectionHoverUrl: publicAsset('heroes/select/moon-knight_champion.gif'),
  selectionHoverFit: { scale: 1.28, x: 0, y: -9.5 },
  theme: {
    primary: '#e8dcc0',
    primaryRgb: '232, 220, 192',
    secondary: '#d4b483',
    secondaryRgb: '212, 180, 131',
    surface: '#0d0b12',
    surfaceRgb: '13, 11, 18',
  },
  roles: ['duelist'],
  lastVerified: '2026-10-04',
  confidenceSummary:
    'Vida (275), dano, recarga, alcance e todos os números de habilidade vieram da página oficial de habilidades renderizada no navegador em 04/10/2026, que é a fonte mais atual do projeto. Três números têm divergência registrada: o Moon Blade aparece com 70 de dano na página oficial contra 80 na wiki.gg e na IGN, e a wiki.gg ainda traz -30% de perda por ricochete onde o balance de 07/08/2026 levou para -20% — o valor do oficial foi mantido; o Moonlight Hook tem 12s de recarga no oficial contra 15s na wiki.gg, e a wiki.gg ficou com o valor antigo; a Hand of Khonshu tem 18 garras em 4,5s no oficial contra 100 de dano por garra e 5 garras por segundo na wiki.gg, também defasada. Os textos dos dois Team-Ups e as teclas vieram do bundle oficial teamup_a35bb0a0.js, não da ficha do herói, que ainda descreve o Full Moon antigo com Cloak & Dagger. Win rate individual e de dupla vieram do Batru na Temporada 10; o ranking interno (48,0% e tier D) diverge do Batru (45,62%) porque são fontes e janelas diferentes. A mecânica fina de Ankh (posicionamento, ricochete entre Âncoras, cancelamento do ataque primário pelo Moon Blade) veio do Rivalstips.',
  coreRead: [
    'Derrube um Ankh fora da linha de visão do inimigo e atire nele: é isso que transforma a mira do Moon Knight em quase automática.',
    'Moon Blade cancela a animação do [key:LMB]. Use sempre [key:LMB] e depois [key:RMB], nessa ordem, ou você perde DPS.',
    'Ankh na recarga é o ponto fraco real dele: sem Âncora, o [key:RMB] vira um tiro lento sem ricochete garantido.',
    'Lance um Ankh no centro antes da Hand of Khonshu: a Ultimate sozinha não mata, a Ultimate com Ankh no centro mata.',
  ],
  teamUps: {
    summary:
    'Luminous Moon (com Cloak & Dagger) é o pick no geral: a partida medida da Temporada 10 dá 45,26% de win rate da dupla contra 42,86% do Blood Moon, e o efeito base — dash com Phased state e uma onda de cura de 55 que alcança 5m — já resolve o problema crônico do Moon Knight, que é a entrada sem proteção. Blood Moon (com Elsa Bloodstone) é a opção de agressão pura, com uma armadilha de Ankh que lança Talons de Khonshu e, no aprimorado, vários Talons de uma vez. É a melhor escolha quando você quer fabricar a eliminação em vez de sobreviver.',
    recommended: 'Luminous Moon',
    recommendedReason:
    'Duas medições apontam para o Luminous Moon. O Batru mede 45,26% de win rate da dupla em 38.224 partidas contra 42,86% em 3.875 partidas do Blood Moon, e a diferença faz sentido mecanicamente: o efeito base já dá o dash com Phased state e uma cura de 55 para você e para quem está perto, num herói de 275 de vida que morre no primeiro flanco. O próprio balance de 07/08/2026 desceu a recarga do Luminous Moon de 15s para 12s e estendeu o dash, o que reforça que a rota de mobilidade é onde o time deve apostar. A ressalva é a mesma de sempre: a dupla medida carrega a força individual da Cloak & Dagger no meta, por isso os 2,4 pontos não são mérito exclusivo do Moon Knight. Divergência real: para quem só quer matar e tem a Elsa Bloodstone pronta, o Blood Moon cria a eliminação mais rápida — é caso para caso, não erro.',
    options: [
      {
        name: 'Luminous Moon',
        partner: 'Cloak & Dagger',
        partnerRole: 'Strategist',
        input: 'C',
        baseEffect:
          'Entra no estado Phased e avança em dash. Ao terminar, emite uma Onda de Cura de Energia Luminosa que cura o Moon Knight e os aliados por perto.',
        enhancedEffect:
          'Ao formar dupla com Cloak & Dagger, a duração do estado Phased é estendida, a distância do dash aumenta e a Onda de Cura de Energia Luminosa passa a ter raio maior e cura mais forte.',
        bestFor:
          'Duelar contra flanker e entrar em ponto fechado. A cura de 55 no fim do dash é o que permite usar [key:F] ou o dash para fechar distância e sair vivo, e no aprimorado vira 65 de cura mais 3 segundos de 20 de vida por segundo depois de sair do Phased. Vale sozinho, sem a Cloak & Dagger no time.',
        easySetup:
          'Qualquer formação com Cloak & Dagger já fica com o efeito base inteiro. Sem a dupla, o dash e a cura continuam funcionando.',
        iconUrl: publicAsset('teamups/moon-knight-luminous-moon-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/moon-knight-luminous-moon-partner.png'),
      },
      {
        name: 'Blood Moon',
        partner: 'Elsa Bloodstone',
        partnerRole: 'Duelist',
        input: 'C',
        baseEffect:
          'Posiciona uma Armadilha de Ankh. Ao ser acionada, um Ankh se materializa no local e um único Talon de Khonshu é invocado para lançar inimigos em direção ao centro da armadilha.',
        enhancedEffect:
          'Ao formar dupla com Elsa Bloodstone, acionar a armadilha invoca múltiplos Talons de Khonshu para bombardear a área.',
        bestFor:
          'Caçar eliminação em alvo isolado, principalmente inimigo de 250 de vida ou menos. A armadilha é um mini-controle que não depende de mira: ela cria o alvo e o Talon faz o lançamento. Contra grupo, o Talon único do efeito base erra o propósito e o Blood Moon perde para o Luminous Moon.',
        easySetup:
          'Elsa Bloodstone no time, e vale montar com alguém que gosta de pegar o ponto primeiro. Sem a dupla, a armadilha continua colocando o Ankh e o Talon único, mas o dano é de um lançamento só.',
        iconUrl: publicAsset('teamups/moon-knight-blood-moon-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/moon-knight-blood-moon-partner.png'),
      },
    ],
    sourceIds: ['teamup-bundle', 'batru-synergy-mk', 'balance-20260807'],
  },
  systems: [
    {
      name: 'Ancient Ankh',
      input: 'E',
      heading: 'A Âncora é a mira automática do kit',
      facts: [
        'Ancient Ankh gruda em qualquer superfície — chão, parede, teto, para-brisa de porta — e dura 12s de recarga com 2 Âncoras vivas ao mesmo tempo. É o único ponto de ricochete do jogo que você escolhe onde fica.',
        'O Ankh tem alcance de ricochete de 7m e o dano de puxar é 20 num raio de 5m. O valor dele não é o dano: é que qualquer [key:LMB] que passa por ele ganha 3 ricochetes extras dentro do grupo.',
        'Posicione fora da linha de visão do inimigo — atrás deles, acima deles ou abaixo deles. O dano vem de ricochete, e ricochete em inimigo que não vê a origem da ameaça também é dano que o inimigo não desvia.',
        'O ricochete persegue o alvo por mais rápido que ele se mova, inclusive voadores, mas não atravessa portal: um inimigo que entra no portal escapa do disparo que estava perseguindo.',
        'Ricochete não atravessa para alvo com escudo ativo (Doutor Estranho, Invisible Woman) nem para alvo invisível, e não gera headshot: o dano crítico só existe no primeiro tiro direto.',
        'Duas Âncoras se ricocheteiam entre si. Isso quase nunca é o plano, mas é como se acerta alvo fora da sua linha de visão ao atirar em uma Âncora que você não vê mas que vê a outra.',
        'Dica de mapa: dá para fixar Ankh no payload, e ele se move junto. Nos mapas onde o ponto é aberto, essa é a forma de manter o dano sem exposição.',
      ],
      meter: [
        { label: 'Sem Ankh', value: 'só acerto direto' },
        { label: '1 Ankh no grupo', value: '3 ricochetes' },
        { label: '2 Âncoras', value: '6 ricochetes' },
        { label: 'Ankh no payload', value: 'segue o ponto' },
      ],
    },
    {
      name: 'Moon Blade',
      input: 'RMB',
      heading: 'Duas cargas que cobrem metade da recarga do Ankh',
      facts: [
        'O Moon Blade causa 70 de dano (140 no headshot), acumula 25 de vida extra por inimigo atingido — inclusive nos ricochetes — e tem 2 cargas com 6s de recarga por carga.',
        'A recarga por carga é metade da do Ankh. Se você lança o Ankh e usa o Moon Blade na sequência, a segunda carga volta antes de o Ankh recarregar: o ritmo se mantém sem gastar ultimate.',
        'O Moon Blade cancela a animação do [key:LMB]. Sempre que estiver disponível, dispare [key:LMB] e em seguida [key:RMB] — nessa ordem — para não perder DPS no cancelamento.',
        'A vida extra tem cooldown próprio: usando no cooldown, o Moon Knight se sustenta em vida bônus praticamente constante. Mas cada alvo dá 25, então atire com cuidado em vez de disparar sem mira.',
        'A perda por ricochete é de 20% por salto, e não os 30% de antes: o balance de 07/08/2026 reduziu o decaimento de Crescent Dart e Moon Blade de 30% para 20% em cada salto. Com 3 saltos, o quarto impacto ainda entrega cerca de 36 dos 70 do primeiro tiro.',
      ],
      meter: [
        { label: 'Direto no corpo', value: '70 de dano' },
        { label: 'Headshot direto', value: '140 de dano' },
        { label: 'Vida bônus por alvo', value: '25 (teto 76)' },
        { label: 'Perda por ricochete', value: '-20% por salto' },
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelist',
      nickname: 'O atirador de ricochete que depende do posicionamento',
      health: '275',
      difficulty:
        'Mira e posicionamento: os dardos NÃO são hitscan e ricocheteiam só no que está a 7m, então errar a Âncora significa errar o dano inteiro.',
      job: 'Transformar um ponto de ricochete bem colocado em dano de área e eliminar alvos isolados que ninguém mais consegue pegar.',
      verdict:
        'Moon Knight é um Duelist de teto alto e de leitura difícil: 45,62% de win rate e 15,50% de taxa de escolha no Batru da Temporada 10, e tier D no ranking interno (48,0% em 65.516 partidas). Os dois números são de janelas diferentes, mas contam a mesma história: ele não é forte, ele é preciso. A win rate sobe quando o inimigo entra no seu Ankh e despenca quando ele quebra as Âncoras. Quem escolhe ele está trocando estabilidade por uma das jogadas de burst mais altas do jogo — e precisa saber que 275 de vida não dão margem para erro de mira.',
      playstyle: [
        'Antes de atirar, decida onde a Âncora vai ficar. Uma Âncora atrás do inimigo vale mais que cinco tiros diretos, porque cada ricochete é quase dano grátis.',
        'Mire no Ankh, não no inimigo — exceto quando estiver em 300 de vida e valendo um headshot. Ricochete nunca acerta cabeça, então o dano crítico só sai no tiro direto.',
        'Fique fora do alcance do inimigo. Você tem 275 de vida e nenhum dash de combate: cada passo além do alcance da Âncora é um passo para dentro do golpe do Black Panther ou da Capitão América.',
        'Use [key:F] para alcançar ponto alto e matar alvo escondido atrás de geometria vertical: o hook sob você mesmo te levanta, e um Ankh no teto resolve.',
      ],
      priorityKicker: 'Ordem de upgrade',
      priorityTitle: 'Ankh antes de qualquer coisa',
      priorityDescription:
        'A recarga de 12s do Ancient Ankh é o relógio que governa o herói inteiro. Sem Âncora viva, o Moon Knight perde os ricochetes, perde a entrada e perde a leitura de ultimate.',
      abilityLoop: [
        { ability: 'Ancient Ankh', input: 'E' },
        { ability: 'Crescent Dart', input: 'LMB' },
        { ability: 'Moon Blade', input: 'RMB' },
        { ability: 'Moonlight Hook', input: 'F' },
      ],
      upgradePlan: [
        {
          rank: 1,
          spellNumber: 1,
          input: 'E',
          ability: 'Ancient Ankh',
          label: 'A peça que faz a mira parar de importar',
          baseEffect:
            'Lança uma Âncora em linha reta a 60 por segundo. Ao atingir a superfície, ela se fixa, causa 20 de dano num raio de 5m e lança os inimigos para o centro. Dura 12s de recarga, com 2 Âncoras vivas e 75 de durabilidade.',
          upgradeEffect:
            'Com o aprimorado, a janela de ricochete do Ankh e a tolerância da fixação na superfície aumentam, o que torna mais seguro plantar a Âncora em parede exposta.',
          fightNote:
            'Plante atrás do inimigo, não na frente. Na frente ele sai do raio de 5m antes de ser lançado; atrás, o ricochete continua Vivo e o dano se acumula.',
          why: 'Toda a dano do kit passa por ricochete, e o ricochete passa pela Âncora. É a única habilidade que cria a condição para as outras três funcionarem, por isso o upgrade vai aqui mesmo quando o dano bruto do Ankh é pequeno.',
          swapWhen:
            'Troque a ordem quando o inimigo já está dentro do seu Ankh: aí o ganho está em [key:LMB] e [key:RMB] seguidos no mesmo alvo, não em plantar outra Âncora.',
          sourceIds: ['oficial-mk-habilidades', 'rivalstips-mk', 'wiki-mk'],
        },
        {
          rank: 2,
          spellNumber: 2,
          input: 'RMB',
          ability: 'Moon Blade',
          label: 'O cancelamento que multiplica o DPS',
          baseEffect:
            'Arremessa uma lâmina em linha reta a 120 por segundo: 70 de dano no corpo, headshot disponível, 25 de vida bônus por inimigo atingido (teto de 76), 3 ricochetes dentro de 7m com -20% por salto, 2 cargas e 6s de recarga por carga.',
          upgradeEffect:
            'Com o aprimorado, o dano e a vida bônus da lâmina sobem, o que torna cada ricochete uma parcela de dano mais cara de desperdiçar.',
          fightNote:
            'Sempre [key:LMB] e depois [key:RMB]. O Moon Blade cancela a animação do ataque primário; na ordem invertida você joga fora metade da cadência.',
          why: 'São 70 de dano e 25 de vida extra por acerto, com recarga por carga de 6s — metade dos 12s do Ankh. Disparado logo depois de plantar o Ankh, a lâmina volta antes de a Âncora recarregar e o ciclo não para.',
          swapWhen: 'Pule a lâmina quando a mira não tem contrapeso. Vida bônus por alvo não é ganho se cada tiro falhar, e errar lâmina é caro porque a recarga é de 6s por carga.',
          sourceIds: ['oficial-mk-habilidades', 'rivalstips-mk', 'balance-20260807'],
        },
        {
          rank: 3,
          spellNumber: 3,
          input: 'F',
          ability: 'Moonlight Hook',
          label: 'O gancho que vira teto',
          baseEffect:
            'Arremessa um gancho frontal a 120 por segundo com 25m de comprimento, que puxa o Moon Knight na direção da superfície atingida. Recarga de 12s.',
          upgradeEffect:
            'Com o aprimorado, a tração e a recuperação do gancho sobem, o que encurta o tempo fora da linha de tiro depois de um dive.',
          fightNote:
            'Enganchar em uma parede acima de você levanta o Moon Knight. Com a altura, plante o Ankh e dispare em quem está escondido atrás do tanque.',
      why: 'São 25m de reposicionamento sem consumir recurso, e o alvo de um herói de 275 de vida não é causar dano: é fazer o inimigo errar a mira duas vezes antes de ele te alcançar.',
      swapWhen: 'Troque o gancho pelo Rising Leap quando a saída for para cima e curta: o pulo duplo tem só 6s de recarga e não gasta a ferramenta de reposicionamento longa.',
          sourceIds: ['oficial-mk-habilidades', 'rivalstips-mk', 'wiki-mk'],
        },
      ],
      adaptations: [
        'Inimigos que quebram seu Ankh (Captain America jogando escudo, Groot com parede no meio, Loki com ilusão na linha): plante o Ankh em parede que o inimigo não controla. Contra Groot, o Ankh pode ser fixado na parede — e some junto com ela, o que às vezes vira a jogada contra o próprio Groot.',
        'Voadores (Human Torch, Iron Man, Storm, Aero): o ricochete persegue o alvo por mais rápido que ele voe, mas voadores altos são melhores tratados com Ankh em parede próxima. Storm voa baixo, então Ankh no chão funciona.',
        'Alvo com escudo ou barreira (Doutor Estranho, Invisible Woman, Psylocke em asa): o ricochete não entra. Nesses casos aponte direto no corpo e aceite que o headshot é a única forma de dano crítico.',
        'Inimigo que foge por portal (Doutor Estranho, Black Cat, mapa com portal): o disparo em ricochete não atravessa portal. Feche a saída do portal antes de commitar o Ankh, ou use a rota de hook.',
        'Composição com sustain pesado (Mantis, Adam Warlock): o Moon Knight não tem cura própria além da vida extra do Moon Blade e do Luminous Moon. Se o time não tem cleanse nem anti-sustain, o tier dele piora visivelmente.',
      ],
      ultimates: [
        {
          stance: 'Ultimate com Ankh no centro',
          name: 'Hand of Khonshu',
          bestUse:
            'O campo inteiro de 8m com 18 garras de 150 de dano em 4,5s. Sozinha ela não mata ninguém com vida cheia; com um Ankh no centro do campo, a armadilha puxa os inimigos para dentro da área de dano máximo.',
          execution:
            'Escolha o ponto no chão visualmente primeiro e depois lance — o Moon Knight segura o Ankh acima da cabeça e fica visível de longe durante a animação, então cada segundo de demora é um segundo que o inimigo usa para se reposicionar. Logo depois de acionar, plante o Ankh no centro e dispare dentro dele durante os 4,5s inteiros.',
          upgradeValue:
            'O upgrade de aprimoramento aumenta o dano base das garras, o que encurta o número de acertos necessários dentro do mesmo campo e transforma a ultimate em finalização em vez de dano parcial.',
        },
        {
          stance: 'Ultimate como isca',
          name: 'Hand of Khonshu',
          bestUse:
            'Quando o inimigo está espalhado e você não tem Ankh pronto: o custo é alto e o retorno é baixo. É a ultimate para gastar quando o time precisa de espaço, não de eliminação.',
          execution:
            'Use longe do grupo e aceite o dano parcial. Com 275 de vida, entrar no próprio campo para terminar o alvo é o tipo de troca que o herói não sobrevive.',
          upgradeValue:
            'O aprimoramento continua valendo aqui, mas o que decide é a.recarga: voltar a ter Ankh pronto depois da ultimate é o que permite repetir o ciclo do item 1.',
        },
      ],
      dashGuide: {
        ability: 'Moonlight Hook',
        shortRule:
          'Arremessa um gancho de 25m e se puxa até a superfície. Reposicionamento vertical e para fora de linha de tiro, nunca entrada agressiva.',
        mechanics: [
          'O gancho tem 12s de recarga, então é o recurso mais escasso do kit depois do Ankh. Gastar para atravessar um corredor aberto é desperdício.',
          'Enganchar em uma parede acima de você é a jogada de teto: o Moon Knight sobe e consegue atirar em alvo que estava escondido atrás de geometria vertical ou de escudo de tanque.',
          'O Rising Leap tem 6s de recarga e a recarga começa a contar quando você aterrissa ou usa o Night Glider. Pulo duplo primeiro, planador depois: ao aterrissar a recarga do pulo já está quase cheia.',
          'O Night Glider reduz a descida para 1,5 por segundo e move a 8,7 por segundo na horizontal. Contra projétil com área, é o bloqueio mais confiável que o kit tem.',
        ],
        drills: [
          'Antes de cada briga, mire três paredes diferentes para o gancho. No momento em que você precisar, a opção já existe.',
          'Treine o hook em teto: gancho acima, Ankh no chão, tiro no Ankh. É a combinação que resolve alvo escondido atrás de tanque.',
          'Treine a ordem do ar: pulo duplo, Night Glider no alto, e só então o gancho se for preciso. Inverter a ordem queima a recarga do pulo.',
        ],
      },
      patterns: [
        {
          title: 'Combos de eliminação em alvo isolado',
          steps: [
            'Ancient Ankh → [key:LMB] → [key:RMB] → [key:LMB] mata herói de 300 de vida ou menos.',
            'Ancient Ankh → [key:LMB] → [key:RMB] → [key:LMB] → [key:RMB] mata o Mister Fantastic (375 de vida). Comece com as 2 cargas de [key:RMB] prontas.',
            'Nada disso funciona se o Ankh for plantado na frente do alvo: ele sai do raio de 5m antes do lançamento.',
          ],
        },
        {
          title: 'Ultimate com Ankh no centro',
          steps: [
            'Escolha o ponto no chão e acione sem demora — a animação é visível de longe.',
            'Imediatamente depois, plante [key:E] no centro do campo e dispare dentro do Ankh durante os 4,5s.',
            'Se o inimigo usar dash para sair (Rocket, Spider-Man), deixe a ultimate terminar e não gaste o gancho: o campo já cumpriu o papel de empurrar todo mundo para o mesmo lugar.',
          ],
        },
        {
          title: 'Contra alvo escondido atrás de tanque',
          steps: [
            'Ganche em uma parede acima de você com [key:F] para ganhar altura sem entrar na linha de tiro.',
            'No alto, plante [key:E] na superfície acima do alvo e dispare no Ankh.',
            'O Alvo sob um Ankh no teto leva 20 de dano de puxar e fica exposto ao time inteiro. Essa é a rota para o Doutor Estranho, que segura a linha de frente sozinho.',
          ],
        },
      ],
      mistakes: [
        'Plantar o Ankh na frente do inimigo. Ele sai do raio de 5m antes do lançamento e você perde os dois golpes: o dano e o controle.',
        'Mirar no Ankh quando o alvo está perto e vale um headshot. Ricochete nunca acerta cabeça, e headshot direto mata antes.',
        'Disparar [key:RMB] antes de [key:LMB]. Na ordem invertida você não aproveita o cancelamento da animação e perde metade da cadência.',
        'Usar Hand of Khonshu sem Ankh no centro. Sozinha a ultimate é 18 garras espalhadas; com o Ankh no centro ela vira finalização.',
        'Brigar no ar sem plano de descida. O Moon Knight não tem dash de combate e 275 de vida: cada segundo pendurado é tempo dado ao Black Panther e à Capitão América.',
        'Deixar o inimigo quebrar seus Âncoras e continuar atindo no ponto vazio. Com 15,5% de taxa de escolha ele é o Duelist mais frequente em campo, e é justamente por isso que o ponto de ricochete costuma vir marcado: quando a Âncora cai, o dano cai junto.',
      ],
      evidence: [
        'Vida de 275, velocidade de 6 por segundo, dano, recarga, alcance, ricochete e todos os campos de habilidade: página oficial de habilidades do Moon Knight renderizada no navegador em 04/10/2026.',
        'Crescent Dart de 23 para 25 de dano por acerto e perda por ricochete de 30% para 20%, recarga do Luminous Moon de 15s para 12s: balance oficial de 10/07/2026 e de 07/08/2026.',
        'Mecânica de posicionamento do Ankh, cancelamento do ataque primário pelo Moon Blade, ricochete entre Âncoras, fixação no payload e combos de eliminação: Rivalstips.',
        'Win rate individual de 45,62% e win rate das duas duplas (45,26% e 42,86%): Batru, Temporada 10.',
        'Tier D com 48,0% de win rate em 65.516 partidas: ranking interno do app (fonte distinta da do Batru, registrada em divergência).',
      ],
    },
  },
  sources: [
    {
      id: 'oficial-mk-habilidades',
      kind: 'official',
      title: 'Moon Knight — página oficial de habilidades (renderizada no navegador)',
      url: 'https://www.marvelrivals.com/heroes/index.html?id=7dc8b934-fe12-49ae-ac3b-7d7c3a688443',
      author: 'NetEase Games',
      published: '2026-10-04',
      confidence: 'alta',
      takeaways: [
        'Role Duelist, vida 275 e velocidade de movimento de 6 por segundo.',
        'Crescent Dart ([key:LMB]): triple disparo a 150 por segundo, 25 de dano por rodada, queda começando em 30m até 50% em 50m, 3 ricochetes em 7m, -20% por ricochete, munição de 30, acerto crítico disponível.',
        'Ancient Ankh ([key:E]): projétil em linha reta a 60 por segundo, 20 de dano de puxar em raio de 5m, alcance de ricochete de 7m, 12s de recarga.',
        'Moonlight Hook ([key:F]): gancho a 120 por segundo com 25m de comprimento e distância máxima de 21,5 por segundo, 12s de recarga.',
        'Rising Leap (Espaço): pulo duplo com 6s de recarga.',
        'Moon Blade ([key:RMB]): 70 de dano, 25 de vida extra por inimigo com teto de 76, 3 ricochetes, -30% por ricochete exibido na página, 6s de recarga, 2 cargas.',
        'Hand of Khonshu ([key:Q]): campo de 8m, 150 de dano por garra, 4 garras por segundo, 18 garras, 4,5s de duração.',
        'Luminous Moon ([key:C]): recarga de 12s, dash de 0,35s a 50 por segundo, Phased de 0,25s, cura de 55 em raio de 5m; no aprimorado, Phased de 0,35s, cura de 65 em 8m mais 3s de 20 de vida por segundo.',
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
        'O Moon Knight aparece no bundle com enName "MOON KNIGHT" e duas opções na ordem: pos0 LUMINOUS MOON e pos1 BLOOD MOON.',
        'Luminous Moon: "Enter Phased state and dash forward. Upon concluding, emit a Light Energy Healing Wave that heals Moon Knight and nearby allies." Aprimorado: "When teaming up with Cloak & Dagger, the Phased state duration is extended, the dash distance increases, and the Light Energy Healing Wave boasts a larger radius and stronger healing output." Key_en: "C".',
        'Blood Moon: "Deploy an Ankh Trap. Upon triggering, an Ankh materializes at the location, while summoning a single Talon of Khonshu to Launch enemies toward the trap’s center." Aprimorado: "When teaming up with Elsa Bloodstone, triggering the trap summons multiple Talons of Khonshu to bombard the area." Key_en: "C".',
        'As duas teclas são Key_en "C" — preenchimento de slot de Team-Up, não troca de ataque.',
        'Divergência com a ficha do herói: a ficha descreve Full Moon (Cloak & Dagger, com regeneration de 25 por segundo em esfera escura) e Moon God’s Chosen (Blade), que não são as duas opções da temporada atual.',
      ],
    },
    {
      id: 'balance-20260807',
      kind: 'official',
      title: 'Marvel Rivals Version 20260807 Balance Post',
      url: 'https://www.marvelrivals.com/20260804/41525_1309952.html',
      author: 'NetEase Games',
      published: '2026-08-04',
      confidence: 'alta',
      takeaways: [
        'Moon Knight: "Adjust Crescent Dart and Moon Blade bounce damage decay from 30% to 20% per bounce."',
        'Com Cloak & Dagger, o Luminous Moon caiu de 15s para 12s de recarga; o efeito base ganhou dash de 0,3s para 0,35s e distância de 12m para 15m; o aprimorado passou a dar 3s de cura de 20 de vida por segundo depois de sair do Phased.',
        'Contexto: o mesmo post ajustou Peni Parker (remoção do Imobilize direto do Cyber-Web Snare) e Rogue, o que muda o valor de composições que o Moon Knight enfrenta.',
      ],
    },
    {
      id: 'balance-20260710',
      kind: 'official',
      title: 'Marvel Rivals Version 20260710 Balance Post',
      url: 'https://www.marvelrivals.com/20260706/41525_1306647.html',
      author: 'NetEase Games',
      published: '2026-07-06',
      confidence: 'alta',
      takeaways: [
        'Moon Knight: "Increase Crescent Dart damage per hit from 23 to 25" — o valor 25 é o atual e bate com a página oficial.',
        'O mesmo post introduziu os Regenerative Shields e mudou a conversão de dano em energia (Duelist e Vanguard de 70% para 55%), o que reduz a energia que o Moon Knight gera por dano em todo o kit.',
      ],
    },
    {
      id: 'wiki-mk',
      kind: 'database',
      title: 'Moon Knight — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Moon_Knight',
      published: '2025-11-14',
      confidence: 'em disputa',
      takeaways: [
        'Role Duelist e vida 275 — confirma a página oficial.',
        'Ancient Ankh: 2 Âncoras que grudam em qualquer superfície, 20 de dano, 75 de durabilidade, 12s de recarga.',
        'Moon Blade: 80 de dano no corpo e 160 no headshot, 25 de vida extra por inimigo, recarga de 6s e 2 cargas — o dano de 80 está defasado em relação aos 70 da página oficial.',
        'Hand of Khonshu: 100 de dano por garra a 5 garras por segundo durante 4,5s — a página oficial atual mostra 150 por garra, 4 por segundo e 18 garras.',
        'A página lista Full Moon e Moon God’s Chosen como Team-Ups e marca o primeiro como indisponível na temporada atual — não são as duas opções do bundle atual.',
      ],
    },
    {
      id: 'rivalstips-mk',
      kind: 'guide',
      title: 'Moon Knight — guia de mecânica no Rivalstips',
      url: 'https://rivalstips.com/heroes/moon-knight',
      published: '2026-08-28',
      confidence: 'alta',
      takeaways: [
        'Moon Blade cancela a animação do ataque primário: a ordem correta é [key:LMB] e depois [key:RMB] para não perder DPS.',
        'A recarga por carga do Moon Blade é metade da do Ankh, então lançar o Ankh e usar a lâmina faz a carga voltar antes do Ankh recarregar.',
        'O Ankh deve ficar fora da linha de visão do inimigo — atrás, acima ou abaixo deles — e, antes de plantar, vale puxar a habilidade de escape do alvo para fora do raio.',
        'Ricochetes seguem o alvo por mais rápido que ele se mova (inclusive voadores), mas não atravessam portal; não entram em alvo com escudo/barreira nem em alvo invisível; não geram headshot.',
        'Ricochete funciona em unidades "vivas" como as lulas do Namor, os clones do Loki e o demônio da Magik, mas não em muros do Groot nem ninhos da Peni.',
        'O Ankh pode ser fixado no payload e se move com ele; em mapas de centro aberto, essa é a forma de manter o dano sem exposição.',
        'Combos de eliminação: Ancient Ankh → [key:LMB] → [key:RMB] → [key:LMB] mata alvo de 300 de vida ou menos; com mais uma lâmina, mata o Mister Fantastic (375).',
        'A recarga do Rising Leap começa ao aterrissar ou ao usar o Night Glider: pulo duplo primeiro, planador depois, e o pulo recarrega quase ao tocar o chão.',
        'Ultimate: um Ankh lançado no centro logo após a ativação aumenta a chance de abates, porque os inimigos são puxados para o centro do campo; o Moon Knight também fica visível de longe durante a animação, então a ativação deve ser rápida.',
        'Contra 1x1: difícil contra Black Panther, Capitão América de perto, Doutor Estranho (explosão de 120 de dano mesmo vinda de cima) e Groot (muro atrás do inimigo aumenta o dano dele). Forte contra Doutor Estranho com Ankh acima ou atrás dele e contra Loki, cujos clones funcionam como Âncoras paradas.',
        'No mapa, o centro do Stellar Spaceport é cercado de paredes e é o único ponto com vantagem real de posicionamento para o Moon Knight.',
      ],
    },
    {
      id: 'batru-synergy-mk',
      kind: 'database',
      title: 'Moon Knight — Synergy (Season 10) no Batru',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/moon-knight',
      published: '2026-10-04',
      confidence: 'alta',
      takeaways: [
        'Win rate individual de 45,62% com 15,50% de taxa de escolha em 109.101 partidas.',
        'Luminous Moon com Cloak & Dagger: 45,26% de win rate da dupla em 38.224 partidas.',
        'Blood Moon com Elsa Bloodstone: 42,86% de win rate da dupla em 3.875 partidas.',
        'Elsa Bloodstone aparece entre os piores parceiros da dupla (42,86%, -2,8 pp), o que reforça que a medição da dupla carrega a força individual do parceiro.',
        'Melhores parceiros: Peni Parker (57,76%, +12,1 pp), Ultron (54,25%) e Devil Dinosaur (53,78%) — frontliners que criam a janela para o Ankh.',
        'Piores parceiros: Squirrel Girl (33,58%, -12,0 pp), Phoenix (34,32%) e Black Widow (36,53%).',
      ],
    },
    {
      id: 'ign-mk',
      kind: 'guide',
      title: 'Moon Knight Character Guide — IGN',
      url: 'https://www.ign.com/wikis/marvel-rivals/Moon_Knight',
      confidence: 'media',
      takeaways: [
        'Vida base de 250 e velocidade de 6 por segundo — a vida está defasada em relação aos 275 da página oficial e da wiki.gg, mantidos 275.',
        'Confirma as teclas: Crescent Dart (Clique Esq.), Hand of Khonshu (Q), Night Glider (Shift), Ancient Ankh (E), Moonlight Hook (F), Rising Leap (Espaço), Moon Blade (Clique Dir.), Triple Eclipse (V), Team-Up (C).',
        'Descreve o Moon Knight como Duelist bem redondo, com dano de médio a longo alcance que se alimenta de composições joguem agrupadas e de quem ignora os Âncoras.',
        'A IGN traz 80 de dano no Moon Blade e 150 por garra na ultimate com 14 acertos em 3s — divergências registradas em relação ao oficial.',
      ],
    },
    {
      id: 'ranking-interno-mk',
      kind: 'database',
      title: 'Ranking interno do app — Moon Knight, Duelist',
      url: 'src/data/rankings.ts',
      published: '2026-10-04',
      confidence: 'em disputa',
      takeaways: [
        'Moon Knight aparece como tier D entre os Duelist, com 48,0% de win rate, 9,1% de taxa de escolha e 65.516 partidas.',
        'O 48,0% diverge dos 45,62% do Batru: fontes e janelas de medição diferentes. A leitura qualitativa (tier baixo entre os Duelist) é a mesma nas duas.',
      ],
    },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 4, status: 'página de habilidades renderizada, bundle de Team-Up e dois balance posts do ano' },
    { kind: 'database', label: 'Wiki e base de dados', count: 3, status: 'wiki.gg (mecânica, defasada em três números), Batru (meta e duplas) e ranking interno' },
    { kind: 'guide', label: 'Guias escritos', count: 2, status: 'Rivalstips (mecânica e combos) e IGN (teclas e leitura de role, números defasados)' },
    { kind: 'forum', label: 'Fórum e comunidade', count: 0, status: 'pendente: Reddit bloqueia leitura integral e nenhum tread com transcrição auditável foi usado para número' },
    { kind: 'video-transcript', label: 'Vídeo e transcrição', count: 0, status: 'pendente: nenhum vídeo com transcrição auditável localizado nesta sessão' },
  ],
}