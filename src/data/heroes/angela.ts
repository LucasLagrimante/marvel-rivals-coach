import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const angela: HeroGuide = {
  id: 'angela',
  name: 'Angela',
  aliases: ['Angela', 'Aldrif Odinsdottir', 'Assassina de Heven', 'Mão de Heven', 'Irmã de Thor'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/angela.png'),
  bannerUrl: publicAsset('heroes/banners/angela.png'),
  selectionPortraitUrl: publicAsset('heroes/select/angela.png'),
  selectionHoverUrl: publicAsset('heroes/select/angela_champion.gif'),
  selectionHoverFit: { scale: 1.5, x: 0, y: -18 },
  theme: {
    primary: '#e9c76b',
    primaryRgb: '233, 199, 107',
    secondary: '#e48fb6',
    secondaryRgb: '228, 143, 182',
    surface: '#141017',
    surfaceRgb: '20, 16, 23',
  },
  roles: ['vanguard'],
  lastVerified: '2026-09-21',
  confidenceSummary:
    'Números e mecânicas conferidos na página oficial do herói, na página oficial de Team-Up e no balance post da Temporada 10 (11/09/2026). A vida atual é 350 base + 200 de escudo regenerativo (550 no total) desde o patch de 10/07/2026, quando a NetEase baixou a vida base de 450 para 350, adicionou os 200 de escudo regenerativo e removeu o bônus de 100 de vida que a Angela dava como âncora de Team-Up. O patch de 12/06/2026 já havia melhorado a sobrevivência dela: Assassin\'s Charge de 6s para 4s de recarga, escudo de 300 para 350, recuperação de 50/s para 60/s e intervalo entre usos de 1,5s para 1s. Na Temporada 10 o único ajuste do herói foi um nerf no Team-Up com o Loki (dano máximo que a ilusão absorve caiu de 250 para 150). A wiki.gg sustenta os valores detalhados de carga e de duração (armadilha de 9s, durabilidade da lança de 800), enquanto a Fandom e o guia do Boosting Ground ainda carregam números antigos (escudo de 300, recuperação de 50/s, 600 de vida, conversão de 25%): usados só para contexto, nunca como fonte de número.',
  coreRead: [
    'Carga não se perde no whiff: a Attack Charge só entra em conta quando o golpe ACERTA, então arremessar lança sem alvo na frente não custa nada. E o escudo ([key:RMB]) converte 35% do dano absorvido em carga — os 350 de escudo valem até ~120 de carga, então segurar [key:RMB] no fogo inimigo é a forma mais rápida de ficar com a lança carregada sem sair da luta.',
    'Carregar inimigo é recarga: durante o Assassin\'s Charge ([key:Shift]) a carga sobe 25/s e mais 50/s por inimigo perfurado — com dois alvos presos na lança são 100/s, a barra inteira em cerca de 1s. O combo é lança carregada (launch-up) → dash no alvo no ar → soltar já com a carga refeita → segunda lança carregada. E o dash é imune a knockback e launch-up: é o único botão do kit que ignora esse tipo de controle.',
    'O cooldown do slam não corre no chão: os 12s do Divine Judgement ([key:E]) só começam quando você reequipa a lança no Wingblade Ascent ([key:E]). Ficar em machado não queima o cooldown e a zona continua rendendo vida bônus — subir por reflexo é o que encurta a próxima zona.',
    'A zona é buff de time, não só dano: cada acerto de machado dentro dela dá +50 de vida bônus para a Angela e +25 para os aliados encostados (teto de 200). Um combo cheio de machados na zona é vida bônus para você e para o time, e com 6s de zona contra 12s de recarga dá para passar metade da luta buffando o grupo.',
    'Ultimate em dois tempos: plante a lança (prende quem já está no impacto, com 80% de slow e mobilidade desabilitada por 9s), desça com [key:E] para os machados e só então reative [key:Q] para saltar em cima — o salto dá 100 de dano e cria uma zona de Divine Judgement sem gastar a recarga do [key:E]. A lança tem vida própria (650 a 800) e pode ser destruída para cancelar a armadilha: plante encostada em parede ou telhado, nunca no meio aberto.',
  ],
  teamUps: {
    summary:
      'Odin\'s Unacknowledged (Loki) é a escolha medida: 52,47% de vitória na dupla na Temporada 10 contra 47,64% do Asgardians of the Galaxy (Star-Lord), e 66% dos votos da comunidade contra 34%. Asgardians é o pick de reconhecimento e anti-mobilidade (Reveal de 50m + Grounded de 2s). Os dois ficam na tecla [key:C] e a troca é livre na sala de spawn.',
    recommended: 'Odin\'s Unacknowledged',
    recommendedReason:
      'Os dois são botões de [key:C], mas entregam coisas diferentes: Odin\'s Unacknowledged projeta uma ilusão que usa o Assassin\'s Charge e arrasta quem for acertado de frente — é uma segunda entrada de dive e um segundo deslocamento, exatamente o que o kit da Angela faz de melhor, e com Loki no time a habilidade ainda ganha 2 cargas de 20s. A medição aponta para o mesmo lado: 52,47% de vitória na dupla com Loki em 2.125 partidas contra 47,64% com o Star-Lord em 1.104 (Batru, Temporada 10, atualizado em 21/09/2026), com a votação da comunidade em 66% contra 34% (199 votos). A ressalva honesta: a Temporada 10 nerfou justamente essa ilusão (dano máximo absorvido de 250 para 150), então ela morre mais rápido e não serve mais como escudo; e o recorte do Rivals Tracker na Season 9.5 trazia os dois praticamente empatados no Diamond+ (56,42% com Star-Lord contra 56,09% com Loki), o que mostra que a distância atual não é estrutural — é recorte de temporada. Quando o time precisa de visão antes do dive e de segurar o chão, o Asgardians of the Galaxy continua sendo o pick certo.',
    options: [
      {
        name: 'Odin\'s Unacknowledged',
        partner: 'Loki',
        partnerRole: 'Estrategista',
        input: 'C',
        baseEffect:
          'Projeta uma ilusão para frente; a ilusão usa o Assassin\'s Charge para investir nos inimigos, e quem for acertado de frente é carregado pelo ar por um instante. Recarga de 20s e a ilusão absorve até 150 de dano (era 250 antes do nerf da Temporada 10).',
        enhancedEffect:
          'Com Loki no time, a habilidade ganha 2 cargas (recarga de 20s cada), então o botão volta a ficar disponível praticamente em toda luta.',
        bestFor:
          'Quando você quer um segundo dive e um segundo deslocamento: a ilusão entra primeiro, arrasta um alvo e força o time inimigo a gastar CC ou cura — sem colocar a Angela em risco. Com as 2 cargas vira uma entrada de pressão quase contínua.',
        easySetup:
          'Loki como Estrategista, para as 2 cargas. Sem ele ainda vale: a ilusão sozinha já é uma entrada grátis que arrasta quem for pego de frente.',
        iconUrl: publicAsset('teamups/angela-odins-unacknowledged-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/angela-odins-unacknowledged-partner.png'),
      },
      {
        name: 'Asgardians of the Galaxy',
        partner: 'Star-Lord',
        partnerRole: 'Duelista',
        input: 'C',
        baseEffect:
          'A ativação concede Reveal numa área-alvo (campo esférico de 50m). Reativar a habilidade executa um slam: 65 de dano em campo esférico de 10m e os inimigos atingidos ficam Grounded por 2s. Recarga de 25s.',
        enhancedEffect:
          'Com Star-Lord no time, a Angela ganha vida bônus escalando com o número de inimigos atingidos pelo slam: 75 por alvo, até 200.',
        bestFor:
          'Quando o time precisa entrar com informação e travar o chão: os 50m de Reveal acham flanco e suporte escondido antes do dive, e o Grounded corta a mobilidade de quem tentar escapar — ouro contra Spider-Man, Black Panther, Magik, Iron Fist e Star-Lord.',
        easySetup:
          'Star-Lord como Duelista. O efeito base já resolve sozinho: Reveal, slam e Grounded valem como ferramenta de entrada e de anti-fuga mesmo sem o parceiro.',
        iconUrl: publicAsset('teamups/angela-asgardians-of-the-galaxy-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/angela-asgardians-of-the-galaxy-partner.png'),
      },
    ],
    sourceIds: ['official-teamups', 'official-balance-s10', 'batru-angela', 'rivalstracker-teamups', 'rivalsteamups-angela'],
  },
  systems: [
    {
      name: 'Attack Charge',
      input: 'Recurso',
      heading: 'A carga é o pente da lança',
      facts: [
        'A carga sobe 22,2/s voando em linha reta: o planeio só engata depois de 1s mantendo velocidade para frente acima de 5m/s, e aí a Angela voa a 10 m/s. Voar contra parede ou obstáculo carrega na mesma taxa — é a forma segura de encher a barra sem ficar exposta.',
        'A carga SÓ é consumida quando o golpe acerta. Errar a lança não custa nada, então poke de 45 de dano a esmo é grátis; a lança gasta a barra inteira em um único golpe, e o machado consome metade da barra em cada um dos dois primeiros golpes quando a barra está cheia.',
        'No máximo de carga a lança ganha +20 de dano e launch-up, que interrompe canalizações e ultimates. A wiki.gg registra a amplitude de 45 a 110 por golpe conforme a carga, e o ataque tem 7m de alcance e cerca de 0,96s entre golpes — melee apesar da aparência.',
        'O escudo ([key:RMB]) é a segunda fonte de carga: cada 100 de dano absorvido vira 35 de carga (35% de conversão). Com 350 de escudo, segurar o botão no fogo inimigo rende até ~120 de carga — mais rápido do que voar em linha reta por 5s, e sem sair do ponto de contato.',
      ],
      meter: [
        { label: 'Voo reto', value: '+22,2/s' },
        { label: 'Escudo', value: '35% do dano' },
        { label: '1 alvo preso', value: '+50/s' },
        { label: '2 alvos presos', value: '+100/s' },
        { label: 'Carga cheia', value: '+20 e launch-up' },
      ],
    },
    {
      name: 'Divine Judgement Zone',
      input: 'E',
      heading: 'A zona que devolve vida bônus em dobro',
      facts: [
        'O slam ([key:E] no ar) mergulha, troca para os machados e cria uma zona cilíndrica de 8m de raio e 2m de altura: 30 de dano no impacto e 12,5/s de dano contínuo por 6s, com +35% de velocidade de movimento só para a Angela.',
        'Cada acerto de machado dentro da zona gera 50 de vida bônus para a Angela e 25 para os aliados dentro da área, com teto de 200. O combo de 4 golpes encostado num inimigo já entrega o teto inteiro para ela e 100 para quem estiver do lado.',
        'Os 12s de recarga só começam quando ela reequipa a lança no Wingblade Ascent ([key:E] no chão). Ou seja: permanecer em machado não consome o cooldown, e a subida é que liga os 12s — usar o Wingblade por reflexo, no meio da luta, é o que atrasa a próxima zona.',
        'O Wingblade Ascent sobe 8m em 0,35s, em ângulo de 60°, e devolve a lança na mão. É a saída de emergência do kit: com o dash ([key:Shift]) de 4s de recarga e o voo livre, a Angela praticamente nunca precisa recuar pelo chão.',
      ],
      meter: [
        { label: 'Zona', value: '6s' },
        { label: 'Recarga', value: '12s (inicia ao reequipar a lança)' },
        { label: 'Vida bônus própria', value: '+50 por acerto' },
        { label: 'Aliados na zona', value: '+25 por acerto' },
        { label: 'Teto de vida bônus', value: '200' },
      ],
    },
  ],
  roleGuides: {
    vanguard: {
      key: 'vanguard',
      label: 'Vanguarda',
      nickname: 'A Assassina de Heven',
      health: '550 HP (350 base + 200 de escudo regenerativo)',
      difficulty:
        'Alta (4/5): o kit tem duas posturas e uma barra de recurso — atacar com carga baixa, subir por reflexo ou gastar o dash no momento errado apaga o impacto da personagem, que tem vida baixa para uma Vanguarda e depende de mobilidade para não morrer.',
      job: 'Deslocar em vez de segurar: manter a carga alta girando fora do centro da luta, entrar por cima do suporte e do atirador, arrastar um ou dois alvos para o seu time com [key:Shift], plantar a zona do [key:E] no ponto de contato para dar vida bônus ao grupo e sair antes de virar o foco da partida.',
      verdict:
        'Pegue a Angela quando o mapa tem altura, telhado e beirada (beirada = kill garantida com o carry) e o time inimigo tem backline parado de suporte ou atirador. Ela não segura choke como Magneto, Hulk ou Groot: 350 de vida base mais 200 de escudo e nenhuma barreira significativa colocam o lugar dela na altura e nos flancos, criando oportunidade em vez de trocar dano de frente. Evite contra composição Hitscan que enxerga o céu o tempo todo (The Punisher, Hawkeye, Hela, Black Widow) e contra CC de stun (Luna Snow, The Thing, Peni Parker, Wolverine): você é imune só a knockback e launch-up durante o dash, e o barulho do voo avisa o time inimigo que você vem.',
      playstyle: [
        'A Angela não é uma Vanguarda de linha de frente: ela é uma caçadora que circula. A regra prática é girar o combate por fora, em arco, de preferência por cima de telhados e rotas altas, enquanto a barra de carga enche (22,2/s em voo reto). Só corte o centro da luta quando a carga estiver cheia — o golpe com a barra completa é 20 de dano mais forte e ainda launch-up, que interrompe canalizações e ultimates inimigas.',
        'Em luta, o alvo não é quem tem mais vida: é quem está mais longe do time. O combo de entrada é lança carregada → [key:Shift] para prender o alvo no ar → arrastar para dentro do seu time. Enquanto o alvo está preso na lança a sua carga se refaz a 50/s por inimigo perfurado (100/s com dois), então você solta o alvo já com a barra cheia para um segundo golpe carregado. O deslocamento vale mais que o dano: um suporte arrastado para dentro do seu time morre, e a fight já começa 5v4.',
        'No chão, o [key:E] é o seu pico: o slam troca para os machados, cria a zona e transforma cada acerto em +50 de vida bônus para você e +25 para os aliados encostados. Use quando o seu time estiver realmente contestando o objetivo — zona colocada no vazio dá dano em ninguém e não buffa ninguém. E não suba imediatamente: o cooldown só começa quando você reequipa a lança, então permanecer em machado durante a troca de dano é tempo livre de buff.',
        'A ultimate é o seu melhor abridor, não o seu finalizador. Plante a lança no backline (suporte parado é o alvo ideal), os presos ficam com 80% de slow e sem mobilidade por 9s, e o seu time entra por cima do alvo imóvel. Guarde a reativação para depois do slam: [key:Q] de novo salta até a lança, dá 100 de dano e cria uma zona de Divine Judgement sem consumir a recarga do [key:E]. Plante encostada em superfície e fora da linha de tiro — a lança tem vida e pode ser destruída para cancelar tudo.',
      ],
      priorityKicker: 'Ordem de decisão',
      priorityTitle: 'O que apertar primeiro em cada fight',
      priorityDescription:
        'A Angela não tem árvore de upgrades: tem uma fila de prioridades. Estas são as seis decisões na ordem em que aparecem numa luta real — e o que faz trocar a ordem.',
      upgradePlan: [
        {
          rank: 1,
          input: 'Recurso',
          ability: 'Attack Charge',
          label: 'A carga é o dano: não entre desarmada',
          baseEffect:
            'Voo reto carrega 22,2/s (glide entra depois de 1s acima de 5 m/s de velocidade para frente); escudo converte 35% do dano absorvido em carga; carregar inimigo preso rende +50/s por alvo. No máximo, a lança ganha +20 de dano e launch-up.',
          fightNote:
            'A carga só é consumida quando o golpe acerta: lança errada não gasta a barra, e a lança gasta a barra inteira em um golpe. O machado, com barra cheia, consome metade em cada um dos dois primeiros golpes.',
          why: 'Golpe sem carga é 45 de dano e nada mais; golpe com carga cheia é 20 de dano a mais com launch-up — que corta canalização e ultimate. Quem ataca com a barra pela metade está jogando metade da personagem. Com o escudo no [key:RMB] é possível carregar sem sair da luta: absorver 350 de dano devolve até ~120 de carga.',
          swapWhen:
            'Se o time inimigo está todo agrupado no choke e o seu time já ocupa a linha, a carga sobe mais rápido girando no ar em rota alta do que esperando tomar dano com o escudo. Contra hitscan que já te viu, pare de voar na linha de tiro e obrigue a troca de posição antes de carregar.',
          sourceIds: ['official-heroes', 'wiki-gg-angela', 'guide-boosting-ground-angela'],
        },
        {
          rank: 2,
          input: 'Shift',
          ability: 'Assassin\'s Charge',
          label: 'O que ganha a luta: pegar e levar o alvo',
          baseEffect:
            'Dash a 18 m/s que perfura e carrega até 2 inimigos, com 30 de dano na perfuração, 4s de recarga e barra de energia própria (100 máx, 12,5/s de recuperação, 25/s de custo em voo livre e 75/s ao carregar um inimigo). Durante o dash, Angela fica imune a knockback e launch-up.',
          fightNote:
            'Cada inimigo perfurado dá +50/s de recuperação de energia, e o dash também gera 25/s de carga. Com 2 alvos presos, energia e carga sobem rápido: feche o dash com a lança carregada na mão.',
          why: 'É o único botão do kit que tira o inimigo da posição em vez de empurrá-lo: um suporte arrastado para dentro do seu time morre, e um Vanguarda separado do grupo abre o inimigo inteiro. Também é a saída de emergência — se o foco virar em você, o carry leva você para longe.',
          swapWhen:
            'Contra CC de stun (Luna Snow, The Thing, Peni Parker) o dash não protege: entrar com a barra cheia e o alvo na mira é melhor do que entrar de dash e ser travado no meio do caminho. Na beirada, inverta a ordem: pegue o alvo primeiro e ataque depois.',
          sourceIds: ['official-heroes', 'wiki-gg-angela', 'guide-boosting-ground-angela'],
        },
        {
          rank: 3,
          input: 'E',
          ability: 'Divine Judgement',
          label: 'O slam que buffa o time',
          baseEffect:
            'Mergulha, troca para os machados e cria zona de 8m de raio por 6s: 30 de dano no impacto, 12,5/s de dano contínuo e +35% de velocidade para a Angela. Cada acerto de machado dá +50 de vida bônus para ela e +25 para os aliados na área (teto de 200). Recarga de 12s.',
          fightNote:
            'A recarga só começa quando ela reequipa a lança pelo Wingblade Ascent — ficar em machado não consome o cooldown. Machados: 30, 30, 30 e 50 de dano, com o quarto golpe projetando a Angela para frente.',
          why: 'É o botão que transforma o seu dive em vantagem de time: vida bônus para quem está encostado, velocidade para você e dano contínuo no ponto do objetivo. O machado ainda bate mais rápido e mais forte que a lança em alvo colado, e o quarto golpe avança — perfeito para perseguir quem tenta fugir.',
          swapWhen:
            'Não aplique o slam para fugir: a subida do Wingblade já resolve a saída e é ela que liga os 12s. E não force a zona no vazio — se o time não está contestando o ponto, o slam é só mobilidade cara.',
          sourceIds: ['official-heroes', 'wiki-gg-angela', 'guide-beebom-angela'],
        },
        {
          rank: 4,
          input: 'E',
          ability: 'Wingblade Ascent',
          label: 'A subida que liga o cooldown — não gaste por reflexo',
          baseEffect:
            'Sobe 8m em 0,35s (ângulo de 60°), devolve a lança para a mão e não tem recarga própria. Só pode ser usada enquanto os machados estão equipados.',
          fightNote:
            'É a subida que dispara o cooldown de 12s do Divine Judgement: subir cedo demais adia a próxima zona.',
          why: 'Com o dash de 4s e o voo livre, essa é a saída padrão da Angela — e ao mesmo tempo a decisão de tempo mais importante do kit. Enquanto ela está no chão com os machados, a zona segue rendendo vida bônus e o cooldown segue zerado; a subida deve acontecer quando a luta no chão termina, não no primeiro susto.',
          swapWhen:
            'Suba na hora quando o time perdeu a fight e você precisa da mobilidade para sair; contra dive duplo, o ar é mais seguro que o chão.',
          sourceIds: ['official-heroes', 'wiki-gg-angela'],
        },
        {
          rank: 5,
          input: 'RMB',
          ability: 'Shielded Stance',
          label: 'O escudo que vira carga',
          baseEffect:
            'Escudo de até 350 que bloqueia dano à frente e converte 35% do dano absorvido em carga. Recarga de 1s entre usos, 4s se o escudo for destruído, atraso de 2s para começar a recuperar e 60/s de recuperação.',
          fightNote:
            'Pode ser mantido erguido sem limite de tempo enquanto tiver durabilidade. O escudo é a fonte de carga mais rápida quando o inimigo já está atirando em você.',
          why: 'Absorver 350 de dano devolve até ~120 de carga — a barra fica praticamente cheia sem você precisar recuar para voar. É também o que permite atravessar o fogo de hitscan voando para cima de um Iron Man, Human Torch ou Ultron e chegar vivo ao corpo a corpo.',
          swapWhen:
            'O escudo não salva de stun nem de CC que ignora bloqueio; contra Luna Snow, The Thing ou Wolverine, guarde o escudo para o dano e resolva o CC com posicionamento. Não segure o escudo com a durabilidade perto de zero: destruído, a recarga sobe de 1s para 4s.',
          sourceIds: ['official-heroes', 'wiki-gg-angela', 'guide-gamespot-angela'],
        },
        {
          rank: 6,
          input: 'Q',
          ability: 'Heven\'s Retribution',
          label: 'A armadilha de dois tempos',
          baseEffect:
            'Arremessa a lança (60 m/s) que se planta no terreno em contato: raio esférico de 8m, 40 de dano no campo, 100 de dano no impacto em solo e 80% de slow. Quem está no impacto inicial fica preso por 9s e perde as habilidades de mobilidade. Custo de 3100 de energia.',
          fightNote:
            'Reativar [key:Q] salta até a lança, dá 100 de dano em área e cria uma zona de Divine Judgement, sem gastar a recarga do [key:E]. Só quem está dentro do impacto inicial fica preso — quem entrar no raio depois não é afetado.',
          why: 'É o melhor abridor de luta da personagem: um suporte preso, com 80% de slow e sem mobilidade por 9s, é kill garantida por qualquer time coordenado. Em dois tempos (plantar → slam → reativar) ela empilha o impacto do slam com o dano do salto e entra na luta já com os machados.',
          swapWhen:
            'Não use contra alvo em aberto no ar: a lança precisa tocar superfície, e sem parede, telhado ou chão atrás ela atravessa e some. Também não use em campo aberto contra time com foco alto — a lança tem vida própria (650 a 800) e é destruível, o que cancela a armadilha inteira.',
          sourceIds: ['official-heroes', 'wiki-gg-angela', 'guide-beebom-angela'],
        },
      ],
      adaptations: [
        'Contra dive em você (Spider-Man, Black Panther, Magik, Iron Fist): você é Vanguarda com 350 de vida base — trocar dano no chão é perder. Use o [key:RMB] para bloquear o burst e carregar, depois o dash ([key:Shift]) te leva para fora com o perseguidor no ar, e o Wingblade Ascent ([key:E]) troca de andar. Se o dive continuar, transforme em armadilha: fique sobre a sua zona e deixe o time fazer o resto.',
        'Contra Hitscan de longa distância (The Punisher, Hawkeye, Hela, Black Widow): o voo é barulhento e você é um alvo grande no céu. Não gire na linha de tiro deles: use telhado e cobertura até estar a menos de 7m do alvo, chegue pelo escudo absorvendo os projéteis e troque para o melee no corpo a corpo — o combo de machados mata mais rápido que a lança em alvo colado.',
        'Contra CC de stun (Luna Snow, The Thing, Peni Parker, Wolverine): o dash só dá imunidade a knockback e launch-up, então congele/tranque a sua entrada e o carry acaba no meio do caminho. Espere o CC inimigo ser gasto antes de entrar; contra Luna Snow, priorize entrar por cima enquanto ela olha para outro lado.',
        'Contra barreira e cerco de choke (Groot, Magneto, Doctor Strange): o dano da Angela é melee e a parede anula o slam e o dive. Contra esses times, use o Reveal do Asgardians of the Galaxy para achar o alvo fora da barreira, jogue pela altura e cobre o suporte que ficar atrás do muro — não tente furar o choke de frente.',
        'Contra composição aérea (Iron Man, Human Torch, Storm, Ultron): você é a resposta pronta do time. Voe atrás com o escudo comendo os projéteis, chegue no corpo a corpo e troque para os machados: alvo aéreo parado no ar não tem como sair de um melee de 30 por golpe com dash de 4s atrás.',
        'Contra cura sustentada alta (Luna Snow, Cloak & Dagger, Mantis, White Fox): a Angela sozinha não passa por cima de duas barras de cura. Aqui o kit muda de função: em vez de tentar matar, use a ultimate e o carry para ISOLAR um suporte e trazer o alvo para o seu time — o dano que resolve a luta tem que vir dos Duelistas em cima do alvo deslocado.',
      ],
      ultimates: [
        {
          stance: 'Abertura ofensiva',
          name: 'Heven\'s Retribution',
          bestUse:
            'Backline de suporte ou atirador parado: a armadilha fixa o alvo sem mobilidade por 9s e o seu time inteiro pode entrar por cima. É também a melhor forma de abrir um dive coordenado — a lança planta primeiro, o time entra depois.',
          execution:
            'Mire em superfície (parede, telhado, pilar ou chão) com o alvo dentro dos 8m: a lança precisa tocar terreno para se prender. Plante fora da linha de tiro para não ser destruída. Em seguida use [key:E] para o slam com machados e só então reative [key:Q] — o salto dá 100 de dano e cria uma zona extra sem gastar a recarga do [key:E].',
          upgradeValue:
            'Custo de 3100 de energia. Vale manter a barra para o início das fights de objetivo, não para finalizar uma kill isolada: presa em área, ela vale uma luta inteira; presa em um alvo só, vale uma morte.',
        },
        {
          stance: 'Defensiva / negação de choke',
          name: 'Heven\'s Retribution',
          bestUse:
            'Quando o time inimigo empurra por um corredor, escada ou portal: plantar a lança no gargalo prende quem já está dentro, com 80% de slow e sem mobilidade, e o dano contínuo mais a zona do slam seguram o avanço até o seu time voltar.',
          execution:
            'Recue, plante a lança no ponto exato por onde o time vai passar e deixe os primeiros entrarem no raio antes de o impacto prender — quem chega depois não é afetado. Use o salto ([key:Q]) para se reposicionar por cima, e o [key:E] imediato para transformar o gargalo em zona de vida bônus para o seu time.',
          upgradeValue:
            'Nesse uso o valor não é o dano, é o tempo: 9s de armadilha num corredor é praticamente uma fight de objetivo resolvida. Se a lança for destruída, o efeito acaba na hora — o posicionamento é o que protege a ultimate.',
        },
      ],
      dashGuide: {
        ability: 'Assassin\'s Charge',
        shortRule:
          'É a entrada, o deslocamento e a recarga ao mesmo tempo: 18 m/s de dash que perfura até 2 inimigos, com 30 de dano, imune a knockback e launch-up. Cada alvo preso na lança rende +50/s de energia e +50/s de carga — arrastar dois inimigos refaz a barra inteira em cerca de 1s.',
        mechanics: [
          'Energia própria de 100, recuperando 12,5/s no chão e 25/s durante o próprio dash. Custa 25/s em voo livre e 75/s carregando um inimigo: com um alvo preso, a duração cai de 4s para cerca de 1,3s. Precisa de 30 de energia para ativar (o custo de ativação é 20).',
          'São 4s de recarga, mas a energia é o limitador real. Cada inimigo perfurado dá +50/s de recuperação passiva: perfurar dois alvos no meio de um time agrupado é a forma mais rápida de devolver energia ao botão.',
          'Durante o dash a Angela é imune a knockback e launch-up, o que a torna a melhor resposta do jogo contra efeitos de empurrão — mas não contra stun, e o CC cancela o carry na hora.',
          'O dash só funciona com a lança equipada; com os machados na mão, use o Wingblade Ascent ([key:E]) primeiro. O alvo fica indefeso enquanto está preso, então a ordem certa é prender primeiro e atacar depois quando a kill depende do posicionamento.',
        ],
        drills: [
          'Rotina de carga para energy: voe em linha reta por 4s até a barra cheia, entre com a lança carregada, use o dash imediatamente depois do golpe e conte mentalmente quantos alvos foram perfurados — dois alvos significa que a próxima lança sai carregada de novo.',
          'Treino de beirada: no mapa com abismo (Krakoa, Times Square nas rotas abertas, Hydra Charteris), entre pela altura sem atacar, prenda o alvo e só solte em cima do vazio. Solte antes do fim da energia, senão o dash termina e o alvo volta com você.',
          'Treino de saída: simule o foco em você no modo treino — [key:RMB] para bloquear o burst, [key:Shift] para sair carregando um inimigo que estava no caminho, [key:E] para subir quando a energia acabar. O objetivo é nunca sair de uma luta andando de ré pelo chão.',
          'Treino de curva: o dash tem raio de giro largo. Pratique entrar pela diagonal, não de frente para o alvo, para não superestimar a curva e acabar passando longe do alvo que deveria pegar.',
        ],
      },
      patterns: [
        {
          title: 'Giro e corte (o padrão principal)',
          steps: [
            'Fique de fora da luta e circule em arco fechado, de preferência por cima de telhado e rota alta, até a barra de carga encher (22,2/s em voo reto).',
            'Corte o centro da luta na diagonal — nunca de frente — e escolha alvo afastado do grupo: suporte, atirador isolado ou Vanguarda que avançou demais.',
            'Descarregue a lança carregada para o launch-up e use o dash ([key:Shift]) em seguida para prender o alvo no ar.',
            'Arraste o alvo 1 a 2s em direção ao seu time. Nesse tempo a carga se refaz (50/s por alvo preso) e você solta pronto para o segundo golpe carregado.',
            'Saia pelo outro lado da luta com o dash ou o Wingblade ([key:E]) e recomece o giro por outro ângulo — nunca pela mesma rota.',
          ],
        },
        {
          title: 'Slam no push do time',
          steps: [
            'Antecipe o momento do contato: comece a carga antes de o seu time cruzar o choke, para chegar com a barra cheia.',
            'Entre por cima e aplique o Divine Judgement ([key:E]) no meio da área que o seu time vai contestar — a zona precisa pegar inimigo e aliado ao mesmo tempo.',
            'Troque para o combo de machados (30, 30, 30 e 50) em cima de quem estiver na zona: cada acerto dá +50 de vida bônus para você e +25 para os aliados encostados.',
            'Quando a poça de vida bônus estiver no teto (200) ou o inimigo recuar, suba com [key:E] e deixe o cooldown começar a correr — agora, não antes.',
            'Reengaje pelo alto: a zona fica no chão buffando o time e você volta na altura pronta para o próximo carry.',
          ],
        },
        {
          title: 'Pegar e levar para o seu time',
          steps: [
            'Aproxime-se pela altura, sem atacar, mantendo a carga cheia e o alvo (suporte ou atirador) entre você e o seu time.',
            'Prenda o alvo com o dash ([key:Shift]) e gire o voo em direção ao seu time, não para longe dele.',
            'Solte o alvo no meio do seu grupo e use o momentum para a lança carregada — a barra se refez durante o carry.',
            'Aplique o [key:E] para a zona de vida bônus e ataque com os machados enquanto o seu time confirma a kill.',
            'Tenha a rota de saída pronta antes de entrar: dash de volta ou Wingblade para o ar. Se o carry terminou sem kill, você gastou a entrada sem converter nada.',
          ],
        },
        {
          title: 'Armadilha de gargalo',
          steps: [
            'Identifique o corredor por onde o time inimigo tem que passar para contestar o objetivo.',
            'Plante a ultimate ([key:Q]) no choke, encostada em superfície e fora da linha de tiro direta, esperando os primeiros pisarem no raio.',
            'Deixe o impacto prender os primeiros (quem entra depois não é afetado) e chame o time para cima dos alvos parados, que perderam mobilidade por 9s.',
            'Desça com [key:E] nos machados e use a zona de vida bônus para segurar o corredor.',
            'Reative [key:Q] para o salto se precisar reposicionar por cima — o salto também cria zona, sem gastar a recarga do [key:E].',
          ],
        },
      ],
      mistakes: [
        'Entrar com a carga baixa: sem a barra cheia a lança é só 45 de dano, sem launch-up e sem impacto. Se não houver tempo de carregar, use o escudo ([key:RMB]) absorvendo o fogo do inimigo no caminho — 350 absorvidos valem ~120 de carga.',
        'Gastar o dash com a barra cheia quando a kill era simples: o dash é para prender e reposicionar, não para chegar mais rápido. O correto é bater com a lança carregada primeiro e usar o dash depois, para levar o alvo.',
        'Subir com o Wingblade ([key:E]) por reflexo no meio da luta: cada subida liga os 12s do Divine Judgement. Permaneça em machado enquanto a zona estiver rendendo vida bônus ao time — subir é barato, perder a próxima zona não.',
        'Voar no céu aberto como se fosse um Duelista aéreo: o voo é barulhento e a Angela é um alvo grande. Gire por fora e por cima, cortando o centro apenas no ataque; ficar pairando na linha de tiro é a forma mais rápida de morrer com 350 de vida base.',
        'Aplicar a zona no vazio: o slam sem aliado perto desperdiça a vida bônus, que é metade do valor da habilidade. Zona boa é zona com o time dentro, no ponto que está sendo contestado.',
        'Ultimate em campo aberto ou no ar sem superfície: a lança precisa tocar terreno para prender, tem vida (650 a 800) e pode ser destruída para cancelar o efeito. Plante atrás de cobertura e no gargalo, com o alvo já dentro do raio de 8m.',
        'Duelar na altura do chão contra CC: durante o dash você é imune a knockback, não a stun. Contra Luna Snow, The Thing, Peni Parker e Wolverine, espere o CC inimigo ser usado antes de entrar, ou entre por cima deles.',
      ],
      evidence: [
        'Página oficial do herói (marvelrivals.com): vida 350 + 200 de escudo regenerativo, os números de cada habilidade (lança 45 com 35% de conversão, machados 30/30/30/50 com 45%, escudo 350 com 35% de conversão, zona com 50 de vida bônus própria e 25 para aliados, ultimate com 3100 de energia, slow de 80% e 150 de absorção da ilusão já com o nerf aplicado) e os textos oficiais dos dois Team-Ups.',
        'Página oficial de Team-Up: nomes canônicos Asgardians of the Galaxy (Star-Lord) e Odin\'s Unacknowledged (Loki), ambos na tecla C, com os textos de efeito base e aprimorado traduzidos literalmente para o guia.',
        'Balance post oficial da Temporada 10 (2026/09/08): o único ajuste do herói na temporada é o nerf do Team-Up com Loki, com o dano máximo absorvido pela ilusão caindo de 250 para 150.',
        'Balance posts anteriores (10/07/2026 e 12/06/2026): vida base de 450 para 350 com 200 de escudo regenerativo e remoção do bônus de 100 de vida de âncora; Assassin\'s Charge de 6s para 4s, escudo de 300 para 350, recuperação de 50/s para 60/s e intervalo entre usos de 1,5s para 1s — os números que os guias antigos ainda erram.',
        'Wiki.gg: mecânica completa do Attack Charge (carga só é consumida ao acertar, planeio depois de 1s acima de 5 m/s, 22,2/s em voo, machado consumindo metade da barra por golpe nos dois primeiros ataques), durabilidade da lança da ultimate (800) e duração da armadilha (9s).',
        'Batru (Temporada 10, atualizado em 21/09/2026) e Rivals Tracker (Season 9.5): win rate da Angela em 46,69% com 22.928 partidas, e as duplas medidas — 52,47% com Loki contra 47,64% com Star-Lord na temporada atual, contra 56,09% e 56,42% (empate) no recorte anterior.',
        'Guias e comunidade: Beebom (cancelamento do melee com o ataque primário e ordem correta do dois-tempos da ultimate), GameSpot (combo de entrada com o carry), marvelrivals.gg (priorizar suportes na ultimate), RivalsTeamUps (66% x 34% em 199 votos) e a discussão da comunidade sobre como a Angela é punida por stun e por hitscan, e o que os jogadores fazem para counterar o carry.',
      ],
      abilityLoop: [
        { ability: 'Attack Charge', input: 'Recurso' },
        { ability: 'Spear of Ichors', input: 'LMB' },
        { ability: 'Assassin\'s Charge', input: 'Shift' },
        { ability: 'Divine Judgement', input: 'E' },
        { ability: 'Shielded Stance', input: 'RMB' },
        { ability: 'Heven\'s Retribution', input: 'Q' },
      ],
    },
  },
  sources: [
    {
      id: 'official-heroes',
      kind: 'official',
      title: 'ANGELA — página oficial do herói',
      url: 'https://www.marvelrivals.com/20250911/41360_1258873.html',
      author: 'Marvel Rivals / NetEase',
      published: '2025-09-11 (ficha atualizada no site)',
      confidence: 'alta',
      takeaways: [
        'Vanguarda (Aldrif Odinsdottir), vida de 350 + 200 de escudo regenerativo e velocidade de movimento de 6 m/s — os 450 de vida citados em guias antigos e no GameSpot estão defasados.',
        'Números auditados: Spear of Ichors 45 de dano com 35% de conversão de carga e 7m de alcance; Axes of Ichors 30/30/30/50 com 45% de conversão e dash no quarto golpe; Shielded Stance com 350 de escudo, 1s de recarga, 60/s de recuperação e 35% de conversão de dano absorvido em carga.',
        'Divine Judgement: 30 de dano no impacto e 12,5/s de dano contínuo, zona de 8m de raio por 6s, 12s de recarga, +35% de movimento, +50 de vida bônus própria e +25 para aliados por acerto de machado, teto de 200.',
        'Seraphic Soar: planeio engatado com 1s acima de 5 m/s de velocidade para frente, 10 m/s de voo e 22,2/s de carga. Assassin\'s Charge: 18 m/s, 4s de recarga, 100 de energia, 30 de dano ao perfurar, até 2 inimigos carregados e +50/s de recuperação por inimigo perfurado.',
        'Heven\'s Retribution: 3100 de energia, projétil a 60 m/s, 100 de dano no impacto em solo, raio de 8m, slow de 80%, mobilidade dos presos desabilitada e 650 de vida da invocação (a wiki registra 800).',
        'Os dois Team-Ups aparecem com os textos completos de efeito base e aprimorado, ambos na tecla C: Asgardians of the Galaxy (Star-Lord) e Odin\'s Unacknowledged (Loki).',
      ],
    },
    {
      id: 'official-teamups',
      kind: 'official',
      title: 'TEAM-UP — página oficial do sistema de Team-Ups',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-09',
      confidence: 'alta',
      takeaways: [
        'Fonte canônica dos nomes e parceiros: a Angela tem exatamente duas opções na temporada, ambas na tecla C — Asgardians of the Galaxy com Star-Lord e Odin\'s Unacknowledged com Loki (o Celestial Command/Divine Armory com o Thor, citado por IGN e Beebom, é o Team-Up antigo da Season 4 e não existe mais).',
        'Asgardians of the Galaxy (base): ativação concede Reveal numa área-alvo; reativar executa um slam que deixa os inimigos Grounded. Com Star-Lord, ganha vida bônus escalando com o número de inimigos atingidos pelo slam (75 por alvo, até 200).',
        'Odin\'s Unacknowledged (base): projeta uma ilusão que usa o Assassin\'s Charge e arrasta quem for acertado de frente; recarga de 20s e 150 de dano máximo absorvido pela ilusão. Com Loki, a habilidade ganha 2 cargas.',
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
        'Único ajuste direto da Angela na Temporada 10: "Asgard\'s assassin is dialing down the durability of her trickster team-up" — com o Loki selecionado como parceiro de Team-Up, o dano máximo que as ilusões podem absorver cai de 250 para 150.',
        'Mudança global de Estrategistas (cura em energia de 70% para 65% e dano em energia de 55% para 50%), que atrasa as ultimates de suporte do time inimigo — contexto relevante porque a Angela depende de abrir com a ultimate antes do time contrário cicatrizar.',
      ],
    },
    {
      id: 'official-patch-s10',
      kind: 'official',
      title: 'Marvel Rivals Version 20260911 Patch Notes — Season 10 Arrives',
      url: 'https://www.marvelrivals.com/20260909/41525_1313441.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-09-09',
      confidence: 'alta',
      takeaways: [
        'Confirma a Temporada 10 (11/09/2026) como a temporada de referência do guia e a janela de validade dos números usados aqui.',
        'Nenhuma mudança de kit da Angela no patch da temporada além do ajuste de Team-Up: os valores de habilidade permanecem os do balance de 10/07/2026 e do hotfix de 12/06/2026.',
      ],
    },
    {
      id: 'official-balance-older',
      kind: 'official',
      title: 'Marvel Rivals Balance Posts 20260710 e 20260612',
      url: 'https://www.marvelrivals.com/balancepost/20260706/41667_1306647.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-07-06 e 2026-06-09',
      confidence: 'alta',
      takeaways: [
        '10/07/2026: vida base de 450 para 350 com adição de 200 de escudo regenerativo e remoção do bônus de 100 de vida de âncora de Team-Up — é aqui que nasce o total de 550 que a wiki.gg exibe.',
        '12/06/2026: Assassin\'s Charge de 6s para 4s de recarga; escudo de 300 para 350; recuperação do escudo de 50/s para 60/s; intervalo entre usos do escudo de 1,5s para 1s.',
        'Esses dois posts explicam por que guias escritos entre a Season 4 e o meio de 2026 (GameSpot, Beebom, Boosting Ground) ainda trazem 600 de vida, escudo de 300 e conversão de 25% — números que não valem mais.',
      ],
    },
    {
      id: 'wiki-gg-angela',
      kind: 'database',
      title: 'Angela — The Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Angela',
      published: '2026 (página editada em 14/11/2025, dados conferidos em 21/09/2026)',
      confidence: 'alta',
      takeaways: [
        'Detalhes que a ficha oficial não abre: o machado consome metade da carga por golpe nos dois primeiros ataques (barra cheia cobre 2 golpes), o combo completo de machados leva cerca de 2,5s, e o dano da lança varia de 45 a 110 conforme a carga.',
        'A carga só é consumida quando o golpe ACERTA — golpe de lança que erra não gasta nada da barra, o que permite poker de graça enquanto o alvo não entra nos 7m de alcance.',
        'Melee alternativo: com a lança equipada a Angela ataca com espada curta (30 de dano, 1,5 ataques/s); com os machados equipados, o melee e o ataque primário são o mesmo botão.',
        'Ultimate: armadilha de 9s, zona de 7s, 45 de dano no impacto direto, 100 no impacto do salto, durabilidade da lança em 800 e só quem está no impacto inicial fica preso — quem entra depois não é afetado.',
        'Saídas de voz registradas: "Heven falls!" (inimigo) e "Submit, weaklings!" (aliado) — úteis como aviso de ultimate no áudio.',
      ],
    },
    {
      id: 'wiki-fandom-angela',
      kind: 'database',
      title: 'Angela — Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Angela',
      published: '2026',
      confidence: 'media',
      takeaways: [
        'Confirma o papel de Vanguarda e o Team-Up antigo com o Thor (Celestial Command / Divine Armory) que ainda é citado por guias — o sistema atual da Temporada 10 tem outras duas opções para o herói.',
        'Registra que o dash deixa a Angela imune a knockback e launch-up e que ela pode carregar até 2 inimigos, o que sustenta a leitura defensiva do botão.',
        'Atenção: a ficha ainda exibe valores antigos do escudo (300 no blog e 1,5s de intervalo entre usos, 25% de conversão) e a página do Team-Up mostra a ilusão absorvendo 250 — todos corrigidos pelos balance posts posteriores. Usada só para confirmação estrutural e mecânica, nunca como fonte de número.',
      ],
    },
    {
      id: 'liquipedia-patch-20260710',
      kind: 'database',
      title: 'Patch — July 10 2026 — Liquipedia Marvel Rivals Wiki',
      url: 'https://liquipedia.net/marvelrivals/Patch/2026-07-10',
      published: '2026-07-10',
      confidence: 'media',
      takeaways: [
        'Registro de patch consolidado que confirma a reestruturação de vida: "Reduce base Health from 450 to 350. Add 200 Regenerative Shield. Remove the Team-Up Anchor 100 Bonus Health."',
        'A leitura foi feita por snippet de busca: a Liquipedia bloqueou o acesso direto com verificação de humanidade na sessão, então a página foi usada apenas como confirmação do balance post oficial.',
      ],
    },
    {
      id: 'batru-angela',
      kind: 'database',
      title: 'Angela Team-Ups — Batru (win rates medidos da dupla, Temporada 10)',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/angela',
      published: '2026-09-21',
      confidence: 'alta',
      takeaways: [
        'Win rate geral da Angela nas partidas ranqueadas medidas: 46,69% com 8,64% de pick rate sobre 22.928 partidas — ela está abaixo de 50%, o que reforça que o herói depende de execução.',
        'Odin\'s Unacknowledged com Loki: 52,47% de vitória em 2.125 partidas, contra 47,64% do Asgardians of the Galaxy com Star-Lord em 1.104 partidas — a maior amostra e a melhor medição estão do lado do Loki.',
        'Ressalva metodológica do próprio site: a dupla medida mistura a força individual dos dois heróis no meta, então parte da diferença pode vir do Loki e do Star-Lord, não só do Team-Up.',
        'Dado extra de contexto: as melhores duplas medidas da Angela na temporada são com Devil Dinosaur (58,18%), Peni Parker (56,52%) e Ultron (56,18%), e as piores com Doctor Strange (32,47%), Venom (33,42%) e Captain America (35,67%).',
      ],
    },
    {
      id: 'rivalstracker-teamups',
      kind: 'database',
      title: 'Marvel Rivals Team-Up Tier List (Season 9.5, Diamond+) — Rivals Tracker',
      url: 'https://rivalstracker.com/tier-list/team-ups',
      published: '2026-09 (dados da Season 9.5)',
      confidence: 'media',
      takeaways: [
        'No recorte anterior, os dois Team-Ups da Angela estavam praticamente empatados no Diamond+: Asgardians of the Galaxy (Angela + Star-Lord) com 56,42% de vitória e 0,31% de pick, contra 56,09% e 0,33% do Odin\'s Unacknowledged.',
        'A inversão de faixa na Temporada 10 (Loki 52,47% x Star-Lord 47,64% no Batru) mostra que a distância entre as duas opções não é estrutural: é sensível à temporada e ao patch, por isso o guia apresenta para que caso cada opção serve.',
      ],
    },
    {
      id: 'rankedmeta-teamup-tier',
      kind: 'database',
      title: 'Marvel Rivals Team-Up Tier List (Season 9.5) — RankedMeta (votação da comunidade)',
      url: 'https://rankedmeta.com/marvel-rivals/team-up-tier-list',
      published: '2026-09-03',
      confidence: 'media',
      takeaways: [
        'Na tier list votada pela comunidade, Odin\'s Unacknowledged (Angela + Loki) aparece no tier A e Asgardians of the Galaxy (Angela + Star-Lord) no tier B.',
        'É leitura por snippet (lista agregada, sem números de amostra), usada apenas como terceira medição independente da preferência entre as duas opções.',
      ],
    },
    {
      id: 'guide-beebom-angela',
      kind: 'guide',
      title: 'How to Play Angela in Marvel Rivals: Abilities, Counters, and More — Beebom',
      url: 'https://beebom.com/marvel-rivals-angela-guide/',
      published: '2025-09-16 (Season 4)',
      confidence: 'media',
      takeaways: [
        'Macete de duelo: com a lança equipada, o ataque de espada curta tem a animação cancelável pelo ataque primário, o que aumenta o dano por segundo em alvos colados — a mesma lógica se aplica para chegar rápido no alvo aéreo.',
        'Macete de ultimate: NÃO usar o salto imediatamente. A ordem recomendada é plantar a lança, descer com o Divine Judgement e só então reativar a ultimate para o salto — isso empilha o dano da ultimate com o do slam.',
        'Recomendação de uso do dash: como deslocamento e para arrastar Vanguardas inimigas fora de posição, em vez de tentar kill em alvo que ainda tem escape — puxar o tanque abre a formação inimiga inteira.',
        'Contadores apontados: The Punisher e Hawkeye por serem hitscan contra alvo aéreo, Groot por negar o dive com paredes e Luna Snow por congelar uma personagem que é imune apenas a knockback.',
      ],
    },
    {
      id: 'guide-gamespot-angela',
      kind: 'guide',
      title: 'Marvel Rivals Angela Hero Tips — GameSpot',
      url: 'https://www.gamespot.com/gallery/marvel-rivals-angela-hero-tips/2900-7041/',
      published: '2025-09 (Season 4)',
      confidence: 'media',
      takeaways: [
        'Combo de entrada descrito em quatro tempos: dash para prender um suporte ou Duelista, arrastar para longe do time inimigo e em direção ao seu, descer com o Divine Judgement e fechar com os machados antes de voltar para o ar.',
        'Ponto de atenção: sem ajuda do time a Angela raramente mata sozinha, então o carry só vale quando o seu grupo está na posição de confirmar a kill — alvo arrastado sem follow-up volta para a luta.',
        'A passiva é o motor da personagem: quanto mais tempo no ar, mais carga. A recomendação de posicionamento é usar as rotas de flanco de cada mapa para chegar por trás.',
        'Números desatualizados na página (450 de vida, dano de machado por golpe duplo) foram ignorados; a fonte foi usada para padrão de jogo e posicionamento.',
      ],
    },
    {
      id: 'guide-marvelrivals-gg-angela',
      kind: 'guide',
      title: 'Angela Guide: Abilities, How to Play & Best Team Composition — MarvelRivals.gg',
      url: 'https://marvelrivals.gg/angela',
      published: '2026-01-18',
      confidence: 'media',
      takeaways: [
        'Prioridade de alvo na ultimate: mirar suportes, porque a lança prende e impede a fuga — eliminar pelo menos um curador já desorganiza o push inimigo.',
        'Regra para a ultimate como ferramenta de combate: usá-la também como abertura de combo, com o time pronto para entrar nos alvos presos.',
        'Resumo de postura: duas formas de combate (ar com lança, chão com machados) e o escudo disponível nas duas; o ápice é quando o time joga em cima da zona de Divine Judgement.',
      ],
    },
    {
      id: 'guide-boosting-ground-angela',
      kind: 'guide',
      title: 'Angela Guide: Abilities, Team Comps & Pro Tips — Boosting Ground',
      url: 'https://boosting-ground.com/marvel-rivals/guides/hero-guides/angela-guide-marvel-rivals-abilities-team-comps-pro-tips',
      published: '2025 (Season 4, números defasados)',
      confidence: 'media',
      takeaways: [
        'Leitura de papel que sustenta o guia: a Angela cria oportunidade em vez de segurar espaço — o trabalho dela é tirar gente de posição, não trocar dano de frente.',
        'Estrutura de combo bem documentada: entrada com a carga cheia, dash imediatamente depois do golpe, carry de até 1,3s, e a barra refeita durante o arrasto para um segundo golpe carregado.',
        'Padrão de posicionamento "costura": circular por fora, cortar o centro uma vez para o ataque e sair pelo lado oposto, voltando por ângulo diferente.',
        'Erros comuns listados pela própria fonte: usar o dash com a carga cheia, pairar dentro da luta principal e tentar matar sozinho sem follow-up do time.',
        'Atenção: os números da página são de antes do meio de 2026 (600 de vida, escudo 50/s de recuperação, 25% de conversão de carga, 16 m/s de dash) e não foram usados no guia — só os conceitos de combo e posicionamento.',
      ],
    },
    {
      id: 'rivalsteamups-angela',
      kind: 'forum',
      title: 'Best Angela Team-Ups — votação da comunidade — RivalsTeamUps',
      url: 'https://rivalsteamups.com/heroes/angela',
      published: '2026-09',
      confidence: 'media',
      takeaways: [
        'Placar da comunidade para os dois Team-Ups da Angela: Odin\'s Unacknowledged (Loki) com 66% de 199 votos contra 34% do Asgardians of the Galaxy (Star-Lord).',
        'A leitura da comunidade sobre o Odin\'s Unacknowledged é que ele entrega uma rota tática de entrada e deslocamento (a ilusão que aplica o Assassin\'s Charge), enquanto o Asgardians of the Galaxy entrega pressão de área e visão, útil especialmente em objetivos, portas e times agrupados.',
        'A própria ferramenta registra que a votação reflete a preferência dos jogadores e não é medição de desempenho — por isso o guia confronta o número votado com o win rate medido.',
      ],
    },
    {
      id: 'steam-discussion-angela-counter',
      kind: 'forum',
      title: 'How are yall countering Angela? — Marvel Rivals Steam Discussions',
      url: 'https://steamcommunity.com/app/2767030/discussions/0/601917139265497052',
      published: '2025-10-03',
      confidence: 'media',
      takeaways: [
        'Consenso dos suportes: a Angela é "squishy" para uma Vanguarda — quem a enfrenta deve atirar nela sempre que ela aparece, porque o dano direto e constante a obriga a gastar escudo e a sair.',
        'Lista de CC que efetivamente a trava: freeze da Luna Snow, snare da Peni Parker, slam do The Thing, bubble do Thor; qualquer interrupção cancela o carry, já que o dash só protege de knockback e launch-up.',
        'Contra-jogada de duelo muito boa registrada na thread: quando a Angela chega no terceiro golpe de machado (o que projeta ela para frente), correr EM DIREÇÃO a ela — o avanço passa e o alvo acaba atrás da Angela, ganhando tempo para fugir ou pedir ajuda.',
        'A Loki é apontada como o suporte que mais sofre contra ela, o que explica por que o Team-Up com Loki é usado como entrada de dive.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Site Oficial & Patch Notes',
      count: 5,
      status:
        'Página oficial do herói, página oficial de Team-Up, patch notes da Temporada 10 e dois posts de balance (20260710 e 20260612) auditados com números completos, além do balance post da Temporada 10 que traz o nerf do Team-Up com Loki.',
    },
    {
      kind: 'database',
      label: 'Wiki & Base Pública',
      count: 5,
      status:
        'wiki.gg (mecânica completa de carga, armadilha e lança), Fandom (estrutura e mecânica, com aviso de números defasados), Liquipedia (confirmação da reestruturação de vida, via snippet) e Batru + Rivals Tracker + RankedMeta com win rates medidos e tier lists dos dois Team-Ups.',
    },
    {
      kind: 'guide',
      label: 'Guias Especializados',
      count: 4,
      status:
        'Beebom, GameSpot, MarvelRivals.gg e Boosting Ground consultados para combo, posicionamento, prioridade de alvo, ordem correta da ultimate e escolha de Team-Up.',
    },
    {
      kind: 'forum',
      label: 'Comunidade & Fóruns',
      count: 2,
      status:
        'Votação da comunidade do RivalsTeamUps entre os dois Team-Ups e a discussão da comunidade sobre como travar a Angela (CC, hitscan e contra-jogada no terceiro golpe de machado).',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos & Transcrições',
      count: 0,
      status:
        'Pendente (nenhum vídeo com transcrição auditável foi processado nesta sessão; a cobertura ficou com as páginas oficiais, wiki, guias escritos e fórum).',
    },
  ],
}
