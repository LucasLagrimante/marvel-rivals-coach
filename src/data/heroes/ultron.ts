import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const ultron: HeroGuide = {
  id: 'ultron',
  name: 'Ultron',
  aliases: ['Ultrôn', 'AI Suprema'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/ultron.png'),
  bannerUrl: publicAsset('heroes/banners/ultron.png'),
  selectionPortraitUrl: publicAsset('heroes/select/ultron.png'),
  selectionHoverUrl: publicAsset('heroes/select/ultron_champion.gif'),
  selectionHoverFit: { scale: 1.35, x: 0, y: 2 },
  theme: {
    primary: '#1a1a2e',
    primaryRgb: '26, 26, 46',
    secondary: '#e94560',
    secondaryRgb: '233, 69, 96',
    surface: '#0f0f1a',
    surfaceRgb: '15, 15, 26',
  },
  roles: ['strategist'],
  lastVerified: '2026-11-14',
  confidenceSummary:
    'Todos os números deste guia foram lidos na ficha oficial de habilidades do Ultron (bundle 20261012) e conferidos contra o balance post Version 20261113, que é a fonte de número da Season 11: 250 de vida, 6 m/s, Encephalo-Ray com 6 munições, 6 tiros de 12 em 0,5s e segundo disparo de 75 em campo cilíndrico, queda começando em 20m e chegando a 75% aos 30m, Imperative: Patch com 25m de alcance, 40/s no alvo marcado, 35/s nos demais, raio de 8m, 2 drones e 5s de tolerância fora de visão, Imperative: Firewall com 12s de recarga, 40 de vida bônus no Ultron e 25 nos aliados, bônus decaindo a 40/s depois de 3s, +10% de velocidade e +10% de dano no aliado marcado, Dynamic Flight com 12m de dash, 6s de estado Accelerated, +40% de velocidade e +50 de vida bônus própria em 8s de recarga, e Rage of Ultron com 4300 de energia, 9s, feixes de 18 (Ultron) e 12 (drones), cura de 40 por feixe, 50/s de auto-cura, Unstoppable e 125% de dano contra vida bônus. O patch 20261113 cortou a vida bônus do Firewall nos aliados de 40 para 25 e a velocidade de 20% para 10%, mantendo o bônus de dano. Divergências registradas em vez de escondidas: (1) os guias escritos e a wiki ainda publicam Patch em 45/s e 30/s, Firewall em 40/40 e alcance de fixação de 30m ou 35m — são valores de Season 10 e anteriores, mantidos aqui apenas como histórico rotulado; (2) o bloco de Team-Up do bundle e a ficha de habilidades discordam na Nano-Ray: o bloco de dupla informa 70/s de cura, 20s de recarga e 8s de duração, a ficha informa 85/s de cura, 30s de recarga e 8s de duração, e este guia usa a ficha como referência marcando a diferença; (3) no SP//DR Sync a cura nos aliados não marcados aparece como 15/s no bloco de dupla contra 35/s do Patch normal, o que é coerente com a versão de área da habilidade, mas não é confirmado em texto oficial. Segue pendente qualquer medição de win rate pós-20261113: as estatísticas de Batru, Counterwatch e Rivals Meta citadas em conversas sobre o herói são snapshots de Season 10 e não foram atualizadas.',
  coreRead: [
    'O Firewall deixou de ser escudo de pré-fight: a vida bônus nos aliados caiu para 25 e decai a 40/s depois de 3s.',
    'Imperative: Patch é a cura estável: 40/s no alvo marcado e 35/s nos demais, em 2 drones de 8m por 25m de alcance.',
    'Firewall vale pelo buff: o aliado marcado ganha +10% de velocidade e +10% de dano, então solte quando ele entra no engage.',
    'Rage of Ultron faz 125% de dano contra vida bônus e é Unstoppable: é quebra de escudo, não só ultimate de cura.',
    'Encephalo-Ray tem 6 munições de 1,58s: primeiro disparo são 6 tiros de 12 em 0,5s, o segundo é 75 em campo cilíndrico.',
  ],
  teamUps: {
    summary:
      'Stark Protocol troca a Encephalo-Ray pela Nano-Ray, um canal de 2,5m de raio e comprimento infinito que faz 70/s de dano e 85/s de cura (ficha oficial) durante 8s, e com o Homem de Ferro transforma o Imperative: Firewall em 4 mísseis teleguiados de 10 de dano em raio de 1,5m, com 12s de recarga. SP//DR Sync aplica o Imperative: Patch a todos os aliados por 3s com 20s de recarga, e com a Peni Parker replica o Firewall em todos os drones. Depois do patch 20261113 o Stark Protocol ganhou peso relativo: como a vida bônus do Firewall nos aliados caiu para 25, a versão de dano e cura contínua rende mais que a versão de escudo.',
    recommended: 'Stark Protocol',
    recommendedReason:
      'O patch 20261113 cortou a vida bônus que o Firewall dá aos aliados de 40 para 25 e a velocidade de 20% para 10%, o que enfraquece justamente o eixo defensivo do SP//DR Sync: espalhar Patch e replicar Firewall rende cada vez menos vida por conjuração. O Stark Protocol não foi tocado e entrega uma segunda arma de 70/s de dano e 85/s de cura em canal, além dos 4 mísseis de 10 no Firewall com o Homem de Ferro. A ressalva é honesta: a Nano-Ray exige linha reta e canal, então contra dive ela é pior que a cura em área do Patch comum. Nenhuma taxa de vitória por dupla foi medida depois deste patch.',
    options: [
      {
        name: 'Stark Protocol',
        partner: 'Iron Man',
        partnerRole: 'Duelista',
        input: 'C',
        baseEffect:
          'Aprimora a Encephalo-Ray para Nano-Ray: canal de 2,5m de raio e comprimento infinito, 70/s de dano e 85/s de cura, queda de 20m a 75% aos 30m, 8s de duração e 30s de recarga na ficha oficial de habilidades.',
        enhancedEffect:
          'Com o Homem de Ferro no time, o Imperative: Firewall passa a disparar 4 mísseis teleguiados contra inimigos no alcance, com 10 de dano cada em explosão de 1,5m de raio e 12s de recarga.',
        bestFor:
          'Times que já têm cura em área suficiente e precisam de dano constante em corredor: a Nano-Ray atravessa o time inteiro, então em mapa com choke point ela cura e fere na mesma linha reta. Também é a opção que mais aproveita o Firewall pós-patch, porque os mísseis não dependem da vida bônus que foi cortada.',
        easySetup:
          'O efeito base (Nano-Ray) já funciona sem o Homem de Ferro e é ativado por C. Com ele no time, o Firewall vira mísseis automaticamente, sem tecla extra.',
        iconUrl: publicAsset('teamups/ultron-stark-protocol-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/ultron-stark-protocol-partner.png'),
      },
      {
        name: 'SP//DR Sync',
        partner: 'Peni Parker',
        partnerRole: 'Vanguarda',
        input: 'C',
        baseEffect:
          'Aplica o Imperative: Patch a todos os aliados: 3s de duração, 20s de recarga, 40/s no alvo marcado e 15/s nos demais aliados no raio do drone.',
        enhancedEffect:
          'Com a Peni Parker no time, o Imperative: Firewall passa a valer para todos os drones, permitindo acionar o efeito da habilidade várias vezes ao mesmo tempo.',
        bestFor:
          'Composições que seguram ponto com o time agrupado e precisam de cura distribuída instantânea em vez de buff de dano. É resposta a ultimate de área e a push de payload, não a dive.',
        easySetup:
          'O Patch em todos os aliados funciona sozinho, sem a Peni Parker. A parceira só amplia, replicando o Firewall nos drones.',
        iconUrl: publicAsset('teamups/ultron-spdr-sync-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/ultron-spdr-sync-partner.png'),
      },
    ],
    sourceIds: ['official-teamups', 'official-abilities', 'wiki-gg-ultron', 'balance-20261113'],
  },
  systems: [
    {
      name: 'Encephalo-Ray',
      input: 'LMB',
      heading: 'Seis munições, dois castings: o segundo é o que machuca',
      facts: [
        '6 munições, 1,58s por rodada. O primeiro casting despeja 6 tiros em 0,5s a 12 de dano por acerto: 72 se todos entrarem.',
        'O segundo casting é um disparo único em campo cilíndrico, 75 por acerto — é o golpe que justifica segurar a arma carregada.',
        'Queda de dano começa em 20m e chega a 75% aos 30m, então o Ultron perde 25% do dano no limite do alcance confortável.',
        'A Nano-Ray do Stark Protocol substitui a arma: 2,5m de raio, comprimento infinito, 70/s de dano e 85/s de cura em canal de 8s.',
        'É arma de linha reta e sem recuo: em posição elevada ela acerta tanque e curandeiro na mesma reta, o que compensa o dano baixo por tiro.',
      ],
    },
    {
      name: 'Imperative: Patch + Firewall',
      input: 'E / RMB',
      heading: 'Patch cura sempre; Firewall é buff pontual de engage',
      facts: [
        'Patch (E): até 2 drones gigantes seguem 2 aliados marcados a até 25m, curando 40/s no alvo e 35/s nos demais em raio de 8m.',
        'O drone mantém o alvo por 5s fora de visão e tem 30m de visão máxima: dá para seguir um flanqueador que virou a esquina sem perder a cura na hora.',
        'Firewall (RMB): 12s de recarga, campo esférico de 8m, 40 de vida bônus no Ultron e 25 nos aliados desde o patch 20261113 (era 40).',
        'A vida bônus do Firewall começa a decair 3s depois de concedida, a 40 por segundo: escudo guardado antes da briga evapora antes do primeiro tiro.',
        'O aliado marcado recebe +10% de velocidade e +10% de dano enquanto o Firewall está nele; o patch cortou a velocidade de 20% para 10% e manteve o dano.',
        'Conjurar o Firewall cura o próprio Ultron em 20/s por 3s, o que faz dele um botão defensivo decente sob foco — não um botão de pré-fight.',
      ],
    },
  ],
  roleGuides: {
    strategist: {
      key: 'strategist',
      label: 'Estrategista',
      nickname: 'AI Suprema',
      health: '250 HP',
      difficulty: 'Média (3/5): execução simples, mas a escolha de alvo do Patch e o timing do Firewall decidem a cura',
      job: 'Mantenha dois drones de Patch em quem está trocando tiro, solte o Firewall no instante do engage para buffar o DPS marcado, cause dano de linha reta com a Encephalo-Ray e reserve a Rage of Ultron para quebrar vida bônus e segurar objetivo.',
      verdict:
        'Escolha Ultron quando o time precisa de cura em área contínua em duas frentes ao mesmo tempo e o seu posicionamento aéreo consegue manter linha reta sobre a briga. Ele é o curandeiro que menos depende de mira precisa e o que mais depende de leitura de alvo: 2 drones de 8m cobrem tanque e DPS simultaneamente, mas o kit não tem cura instantânea de emergência. Evite contra dive duplo que ignora a cura e vai direto no corpo: 250 de vida e um dash de 12m não sustentam dois agressores coordenados. Também evite quando o time inimigo joga em linha de escudo fechada e o seu time não consegue abrir ângulo para a Rage.',
      playstyle: [
        'A ordem de prioridade mudou com o patch 20261113 e isso inverte o hábito da Season 10: o Patch é a cura estável e o Firewall é o buff pontual. Quem aprendeu a abrir a briga com Firewall para empilhar vida bônus está gastando 12s de recarga em 25 de vida que decai a 40 por segundo depois de 3s.',
        'O valor real do Firewall hoje é o aliado marcado: +10% de dano e +10% de velocidade. Isso se solta no instante em que o DPS entra, não antes — o buff dura enquanto o escudo está nele, então antecipar é jogar o bônus fora no deslocamento.',
        'Dois drones de Patch não são dois curandeiros: são dois pontos de cura de 8m de raio. Colocar um no tanque que segura a linha e outro no DPS que flanqueia cobre a briga inteira, e é a razão pela qual o Ultron sobrevive a composições de dano em área que os curandeiros de alvo único não aguentam.',
        'A tolerância de 5s fora de visão é a ferramenta mais subestimada do kit: marque o flanqueador antes de ele virar a esquina e o drone continua curando durante todo o flanco. Marcar depois que ele já saiu de vista é perder a marcação.',
        'Encephalo-Ray é arma de dois castings, e o segundo é o que importa: 75 em campo cilíndrico contra 6 tiros de 12. O erro clássico é esvaziar a arma em alvo distante, onde a queda de 20m já cortou 25% do dano, em vez de guardar o segundo disparo para o corpo a corpo na linha.',
        'Rage of Ultron não é ultimate de cura, é abertura de escudo: 125% de dano contra vida bônus e Unstoppable por 9s. Contra Doctor Strange, Peni Parker e Magneto, o uso certo é entrar para derreter a vida bônus que eles empilham, e a cura própria de 50/s junto com a cura de 40 por feixe é o que permite ficar de pé fazendo isso.',
        'O voo do Ultron é constante e sem cooldown, mas o Dynamic Flight não é voo: é dash de 12m com 8s de recarga e 6s de estado Accelerated com +40% de velocidade e +50 de vida bônus própria. Trate o dash como reposicionamento com escudo embutido, não como fuga de emergência.',
      ],
      priorityKicker: 'Ordem de decisão do Ultron',
      priorityTitle: 'Cura estável antes de escudo',
      priorityDescription:
        'A primeira decisão de cada briga é quais dois aliados recebem os drones do Patch. A segunda é o instante do Firewall, que agora existe para buffar quem entra, não para encher a barra de vida antes do contato.',
      upgradePlan: [
        {
          rank: 1,
          input: 'E',
          ability: 'Imperative: Patch',
          label: 'Os dois drones que nunca podem ficar parados',
          baseEffect:
            'Marque até 2 aliados a até 25m; cada um recebe um drone que cura 40/s no alvo marcado e 35/s nos demais aliados em raio de 8m, com 30m de visão máxima e 5s de tolerância fora de visão.',
          upgradeEffect:
            'Com o SP//DR Sync (Peni Parker) o Patch vai para todos os aliados por 3s com 20s de recarga, e a cura nos aliados não marcados cai para 15/s segundo o bloco de dupla.',
          fightNote:
            'Um drone no tanque que aguenta a linha e outro no DPS que entra: essa é a leitura padrão, e é o que diferencia o Ultron de um curandeiro de alvo único.',
          why:
            'Com 40/s e 35/s em dois drones simultâneos, o Patch entrega a maior parte da cura do kit sem custo de recarga e sem exigir mira. Depois do patch 20261113, que enfraqueceu o escudo do Firewall, ele virou a espinha dorsal do herói: cada segundo com um drone solto é cura jogada fora, e é o erro mais comum de quem joga o Ultron como personagem de dano.',
          swapWhen:
            'Troque o alvo do drone antes de trocar de habilidade. A ficha não lista duração para a marcação: ela cai por distância (25m) e por visão (5s fora do alcance de 30m), então remaneje antes que o aliado recuado apague o drone.',
          sourceIds: ['official-abilities', 'balance-20261113', 'official-teamups'],
        },
        {
          rank: 2,
          input: 'RMB',
          ability: 'Imperative: Firewall',
          label: 'O buff que se solta no engage, não antes',
          baseEffect:
            'Concede 40 de vida bônus no Ultron e 25 nos aliados no campo esférico de 8m, com 12s de recarga; a vida bônus começa a decair depois de 3s a 40 por segundo e o Ultron recebe 20/s de auto-cura por 3s.',
          upgradeEffect:
            'O aliado marcado pelo Patch ganha +10% de velocidade e +10% de dano enquanto o Firewall está nele. Com o Stark Protocol, o Firewall dispara 4 mísseis de 10 de dano em raio de 1,5m.',
          fightNote:
            'O buff é do aliado marcado, não do time: soltar sem Patch ativo é gastar a recarga por 25 de vida que decai em 3s.',
          why:
            'O patch 20261113 tirou 15 de vida bônus dos aliados e metade da velocidade, o que transformou a habilidade: com 25 de vida que decai a 40 por segundo, ela já não segura burst nenhum. O que sobrou — e é o que dá valor — são os +10% de dano e velocidade no aliado que está engajando, mais a auto-cura de 20/s por 3s no próprio Ultron. Usar antes da briga para empilhar vida é o desperdício mais caro do kit.',
          swapWhen:
            'Se ninguém está prestes a entrar, não solte: guarde a recarga de 12s. Se o time está apanhando de dano em área e não há engage à vista, o Firewall é pior que um segundo Patch.',
          sourceIds: ['official-abilities', 'balance-20261113', 'wiki-gg-ultron'],
        },
        {
          rank: 3,
          input: 'Shift',
          ability: 'Dynamic Flight',
          label: 'Dash com escudo embutido',
          baseEffect:
            'Dash único de 12m na direção da mira combinada com a tecla de movimento, seguido de estado Accelerated por 6s com +40% de velocidade e +50 de vida bônus própria, em 8s de recarga.',
          upgradeEffect:
            'O estado Accelerated é contínuo enquanto dura, não é um segundo dash: a distância percorrida em 6s com +40% é maior que os 12m do impulso inicial.',
          fightNote:
            'Os 50 de vida bônus são do Ultron, não dos aliados: não confunda com o Firewall, que dá 40 nele e 25 no time.',
          why:
            'Com 250 de vida e um único botão de mobilidade de 8s, o Dynamic Flight é o que permite ao Ultron jogar em altura sem virar alvo parado. O +50 de vida bônus própria e o +40% de velocidade por 6s fazem dele também o botão de sobrevivência mais confiável do kit, e é o motivo pelo qual o herói aguenta um dive curto — mas não dois.',
          swapWhen:
            'Guarde o dash para sair do ângulo depois de tomar foco, não para entrar. Entrar com o dash é ficar 8s sem saída em 250 de vida.',
          sourceIds: ['official-abilities', 'wiki-gg-ultron'],
        },
        {
          rank: 4,
          input: 'LMB',
          ability: 'Encephalo-Ray',
          label: 'O segundo disparo é o dano',
          baseEffect:
            'Arma de 6 munições, 1,58s por rodada. Primeiro casting: 6 tiros em 0,5s a 12 de dano cada. Segundo casting: disparo único em campo cilíndrico a 75 por acerto. Queda de 20m a 75% aos 30m.',
          upgradeEffect:
            'Com o Stark Protocol a arma vira Nano-Ray: canal de 2,5m de raio e comprimento infinito, 70/s de dano e 85/s de cura por 8s, com 30s de recarga na ficha de habilidades.',
          fightNote:
            'A perda de 25% do dano a partir de 20m é o motivo para o Ultron jogar alto e perto, não alto e longe.',
          why:
            'O dano do Ultron não é para matar: é pressão de linha reta que obriga o inimigo a se mover e financia a energia da Rage de 4300. Guardar o segundo casting para o alvo que está na sua reta, em vez de esvaziar a arma em alvo distante, dobra o rendimento de cada rodada de 1,58s.',
          swapWhen:
            'Se a munição zerou, use a janela de 1,58s para remanejar os drones de Patch e reposicionar: recarregar é a única ação que a arma oferece nesse intervalo.',
          sourceIds: ['official-abilities', 'marvelrivalshub-ultron'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Rage of Ultron',
          label: 'Quebra de vida bônus, não ultimate de cura',
          baseEffect:
            'Projétil de 120 m/s que gera campo de 3m no impacto. 5 rodadas de 5 feixes, 0,2s entre feixes e 0,5s entre rodadas, dano de 18 no Ultron e 12 nos drones, cura de 40 por feixe, 9s de duração e 4300 de energia.',
          upgradeEffect:
            'Durante os 9s o Ultron fica Unstoppable e causa 125% de dano contra vida bônus; a auto-cura é de 50/s e a queda de dano dos feixes começa em 1,5m e chega a 50% aos 3m.',
          fightNote:
            'A queda de 50% aos 3m é forte: atirar de longe rende pouco, então a Rage exige aproximação, não posicionamento de sniper.',
          why:
            'O Unstoppable tira o Ultron do controle de multidão e o 125% contra vida bônus faz dele a resposta direta a composições de escudo — no mesmo patch 20261113 o Shield of the Seraphim do Doctor Strange caiu de 850 para 800, e Peni Parker e Magneto continuam populares. Usar a ultimate só para curar 40 por feixe é subutilizar 4300 de energia quando ela serve para derreter a linha que o time não consegue furar.',
          swapWhen:
            'Se o time inimigo não empilha vida bônus e a briga é de flanco, guarde a Rage: 9s de Unstoppable em campo aberto sem alvo agrupado vira 4300 de energia sem troca.',
          sourceIds: ['official-abilities', 'balance-20261113', 'balance-20260612'],
        },
      ],
      adaptations: [
        'Contra composições de escudo (Doctor Strange, Magneto, Peni Parker): a Rage of Ultron é a abertura, não a salvação. Com 125% de dano contra vida bônus e Unstoppable, ela derrete o escudo que o time não consegue quebrar por dano normal — e o corte de 850 para 800 no Shield of the Seraphim neste mesmo patch deixa a conta ainda melhor.',
        'Contra dive duplo (Wolverine, Black Panther, Blade): não conte com o dash de 12m, ele não resolve dois agressores. Posicione-se sobre o tanque do seu time, mantenha o Patch no aliado que está sendo focado e use o Firewall pelo buff de dano no seu DPS, aceitando que a vida bônus de 25 é pequena.',
        'Contra dano em área (Iron Man, Storm, Human Torch): o Ultron é um dos poucos curandeiros que cura em raio sem exigir agrupamento do time, porque os drones ficam nos aliados. Espalhe os dois drones em alvos diferentes em vez de dobrar no tanque.',
        'Contra flanqueador único (Spider-Man, Psylocke): marque o aliado de retaguarda antes de ele mergulhar — a tolerância de 5s fora de visão mantém a cura ativa durante o flanco. É a jogada que o kit entrega de graça e quase ninguém usa.',
        'Com Iron Man no time (Stark Protocol): a Nano-Ray atravessa o time inteiro, então posicione-se alinhado ao corredor de cura e dano, não de lado. Os 4 mísseis do Firewall dão pressão extra que não depende da vida bônus cortada.',
        'Com Peni Parker no time (SP//DR Sync): o Patch em todos os aliados serve como cura de emergência em ultimate de área, com 3s de duração. Use no momento do impacto, não como cura contínua — a recarga é de 20s.',
        'Contra sniper de linha reta (Hawkeye, Black Widow): o Ultron em altura é alvo previsível. Alterne altitude com o estado Accelerated e evite pairar parado no topo de uma reta longa.',
      ],
      ultimates: [
        {
          stance: 'Quebrar escudo',
          name: 'Rage of Ultron contra composição de vida bônus',
          bestUse:
            'Quando o time inimigo sustenta a linha com escudo e vida bônus (Doctor Strange, Magneto, Peni Parker) e o seu dano normal não passa. É o uso de maior teto: 125% de dano contra vida bônus por 9s.',
          execution:
            'Ative [key:Q] já posicionado sobre o escudo, porque a queda de dano dos feixes começa em 1,5m e chega a 50% aos 3m — a ultimate recompensa distância curta. Confirme que o Patch está nos dois aliados antes de entrar: os 9s de Unstoppable não impedem que o time morra enquanto você está ocupado.',
          upgradeValue:
            'O Unstoppable é o que garante a execução: sem ele, qualquer controle de área cancelaria a aproximação e os 4300 de energia virariam nada. A cura de 40 por feixe somada à auto-cura de 50/s é o que permite ficar nos 3m.',
        },
        {
          stance: 'Contestar objetivo',
          name: 'Rage of Ultron em ponto ou payload',
          bestUse:
            'Em overtime ou com o time em desvantagem numérica no ponto, quando ficar vivo vale mais que causar dano. Aqui a ultimate é sobrevivência: Unstoppable e 50/s de auto-cura dentro do campo.',
          execution:
            'Entre no ponto com a ultimate já ativa, não ative dentro dele: o projétil de 120 m/s gera o campo no impacto e a janela de 9s começa a contar no disparo. Solte o Firewall logo no primeiro segundo para somar a auto-cura de 20/s por 3s.',
          upgradeValue:
            'O uso defensivo não desperdiça a ultimate, mas é o pior retorno por energia: 4300 de custo para 9s de presença. Use quando o objetivo vale a briga, não como rotina de sobrevivência.',
        },
        {
          stance: 'Cura de área',
          name: 'Rage of Ultron como recurso de emergência',
          bestUse:
            'Quando dois ou três aliados estão abaixo da metade e o Patch não dá conta, e não há composição de escudo para justificar o uso ofensivo. A cura é de 40 por feixe, em 5 rodadas de 5 feixes.',
          execution:
            'Posicione o campo entre os aliados e os inimigos: os feixes curam aliados e ferem inimigos na mesma área de 3m. Não é cura de alvo único, então alinhar o time no campo é o requisito.',
          upgradeValue:
            'É o uso mais fraco dos três e ainda assim válido: 40 por feixe em área durante 9s concentra muita cura, e a auto-cura de 50/s é o que mantém você dentro do campo. Só não gaste a Rage nisso se houver engage de escudo previsto nos próximos 60s.',
        },
      ],
      dashGuide: {
        ability: 'Dynamic Flight',
        shortRule:
          'O Ultron voa o tempo todo, mas só tem um dash de 12m a cada 8s: ele é a saída do ângulo, não a entrada na briga.',
        mechanics: [
          'O dash de 12m segue a direção da mira combinada com a tecla de movimento, e o estado Accelerated dura 6s com +40% de velocidade: em 6s a distância percorrida supera de longe os 12m do impulso.',
          'Os +50 de vida bônus são concedidos ao ativar e são do Ultron, não dos aliados: não confunda com o Firewall, que dá 40 no Ultron e 25 nos aliados.',
          'A recarga é de 8s, então o ciclo de posicionamento é curto: dá para subir, reposicionar e voltar em uma única briga, mas não duas vezes na mesma janela de foco.',
        ],
        drills: [
          'Treine o ciclo de altura: suba com o voo passivo, ative Dynamic Flight para cruzar 12m na diagonal e confirme o estado Accelerated de 6s. Repita até o movimento virar automático, porque 8s de recarga punem hesitação.',
          'Treine marcar um alvo com Patch, deixá-lo sair de visão por 4s e confirmar que a cura continua. Esse é o teste real da tolerância de 5s e o que permite acompanhar flanco.',
          'Treine soltar o Firewall no instante em que o DPS entra, com o Patch nele, e confirme o bônus de dano e velocidade. O mesmo teste feito 4s antes mostra a vida bônus já decaindo — é a diferença que o patch 20261113 criou.',
          'Treine a Rage de perto: aproxime até 3m de um alvo com vida bônus e compare o dano com o mesmo disparo a 8m. A queda de 50% aos 3m é o que define se a ultimate quebra a linha ou só arranha.',
        ],
      },
      patterns: [
        {
          title: 'Cura em duas frentes',
          steps: [
            'Antes do contato, marque com Imperative: Patch ([key:E]) o tanque que segura a linha e o DPS que vai entrar — dois drones, dois pontos de cura de 8m.',
            'Mantenha altitude média com o voo passivo, alinhado ao corredor onde o time troca tiro, para a Encephalo-Ray ([key:LMB]) acertar em linha reta.',
            'No instante em que o DPS marcado entra, solte o Imperative: Firewall ([key:RMB]) nele: é o buff de +10% de dano e velocidade que a habilidade entrega, não a vida bônus de 25.',
            'Guarde o segundo casting da Encephalo-Ray para o alvo que está na sua reta, não para o mais distante.',
            'Se um aliado recuar para fora do raio, remaneje o drone antes de qualquer outra ação: Patch parado em alvo recuado é cura perdida.',
          ],
        },
        {
          title: 'Abertura contra linha de escudo',
          steps: [
            'Confirme que os dois drones estão nos aliados que vão entrar, nunca em quem já está cheio.',
            'Ganhe altura e aproxime antes de ativar: a Rage of Ultron ([key:Q]) perde 50% do dano aos 3m.',
            'Ative a ultimate sobre o escudo inimigo e use os 9s de Unstoppable para ficar dentro do raio de 3m, não para recuar.',
            'Solte o Firewall no primeiro segundo para somar a auto-cura de 20/s por 3s e o bônus de dano no DPS marcado.',
            'Saia com Dynamic Flight ([key:Shift]) quando o Unstoppable terminar, com o estado Accelerated cobrindo a retirada.',
          ],
        },
        {
          title: 'Resposta a dive',
          steps: [
            'Ao ver o dive se formando, remaneje um drone de Patch ([key:E]) para o aliado de retaguarda que vai ser focado.',
            'Use Dynamic Flight ([key:Shift]) para trocar de altura, não para fugir na horizontal: o dive precisa recalcular o ângulo.',
            'Solte o Firewall ([key:RMB]) em si mesmo se estiver sob foco: são 40 de vida bônus no Ultron e 20/s de auto-cura por 3s.',
            'Mantenha a Encephalo-Ray no agressor enquanto recua — o Ultron acerta em linha reta sem depender de projétil.',
            'Guardar a Rage of Ultron é correto aqui: 4300 de energia em uma briga de flanco raramente se paga, e o Unstoppable não impede dois agressores de somar dano.',
          ],
        },
        {
          title: 'Flanco acompanhado pelo drone',
          steps: [
            'Marque o flanqueador com Patch antes de ele sair de visão: a marcação sobrevive 5s fora de vista e tem 30m de visão máxima.',
            'Mantenha distância de até 25m do aliado marcado, que é o alcance de fixação do Patch.',
            'Enquanto ele flanqueia, cure o resto do time com a Encephalo-Ray do Stark Protocol ou com a pressão de linha reta.',
            'Quando ele engajar, solte o Firewall nele à distância: o bônus de dano entra mesmo sem você estar perto.',
            'Se ele morrer, remaneje o drone imediatamente — o segundo drone é a sua margem de erro.',
          ],
        },
      ],
      mistakes: [
        'Abrir a briga com Firewall para empilhar vida: com 25 de vida bônus nos aliados decaindo a 40/s depois de 3s, o escudo evapora antes do contato. Solte no engage, com Patch no alvo.',
        'Tratar o Firewall como escudo de time: o valor atual está no aliado marcado (+10% de dano e velocidade), e soltar sem Patch ativo é gastar 12s de recarga por quase nada.',
        'Deixar um drone de Patch parado em aliado que recuou: 40/s de cura jogados fora enquanto o time luta sem cobertura.',
        'Esvaziar a Encephalo-Ray em alvo a mais de 20m: a queda de dano já cortou 25% e o segundo casting de 75 foi desperdiçado longe.',
        'Usar a Rage of Ultron como cura: 4300 de energia por 40 por feixe é o uso de menor retorno, quando 125% contra vida bônus e Unstoppable quebram escudo.',
        'Ativar a Rage a distância: a queda de 50% aos 3m faz da ultimate um botão de curto alcance, não de sniper.',
        'Entrar com Dynamic Flight: 8s de recarga e 250 de vida significam ficar sem saída no meio do time inimigo.',
      ],
      evidence: [
        'official-abilities',
        'balance-20261113',
        'official-teamups',
        'wiki-gg-ultron',
        'rivalsmeta-ultron',
        'marvelrivalshub-ultron',
      ],
      abilityLoop: [
        { ability: 'Encephalo-Ray', input: 'LMB' },
        { ability: 'Imperative: Patch', input: 'E' },
        { ability: 'Imperative: Firewall', input: 'RMB' },
        { ability: 'Dynamic Flight', input: 'Shift' },
        { ability: 'Rage of Ultron', input: 'Q' },
      ],
    },
  },
  sources: [
    {
      id: 'official-abilities',
      kind: 'official',
      title: 'Marvel Rivals — Ficha oficial de habilidades do Ultron',
      url: 'https://www.marvelrivals.com/heroes/3967ycx3ftnjf/index.html',
      published: '2026-10-12',
      confidence: 'alta',
      takeaways: [
        'Vida 250 e movimento 6 m/s.',
        'Encephalo-Ray: 6 munições, 1,58s por rodada, 6 tiros de 12 em 0,5s no primeiro casting, 75 em campo cilíndrico no segundo, queda de 20m a 75% aos 30m.',
        'Imperative: Patch: 25m de alcance, 40/s no alvo marcado, 35/s nos demais, raio de 8m, 2 drones, 30m de visão máxima e 5s de tolerância fora de visão.',
        'Imperative: Firewall: 12s, 40 de vida bônus no Ultron e 25 nos aliados, queda a 40/s depois de 3s, +10% de velocidade e +10% de dano no aliado marcado, auto-cura de 20/s por 3s.',
        'Dynamic Flight: 12m de dash, 6s de Accelerated com +40% de velocidade e +50 de vida bônus própria, 8s de recarga.',
        'Rage of Ultron: 4300 de energia, 9s, 5 rodadas de 5 feixes com 0,2s entre feixes, 18 de dano no Ultron e 12 nos drones, cura de 40 por feixe, queda a 50% aos 3m, 50/s de auto-cura, Unstoppable e 125% contra vida bônus.',
        'Nano-Ray (Stark Protocol): canal de 2,5m de raio e comprimento infinito, 70/s de dano e 85/s de cura, 8s de duração e 30s de recarga — divergente do bloco de Team-Up, que informa 70/s de cura e 20s.',
      ],
    },
    {
      id: 'balance-20261113',
      kind: 'official',
      title: 'Marvel Rivals Version 20261113 Balance Post — Season 11',
      url: 'https://www.marvelrivals.com/balancepost/20261110/41667_1319209.html',
      published: '2026-11-10',
      confidence: 'alta',
      takeaways: [
        'Texto verbatim: Reduce the Bonus Health granted to allies by Imperative: Firewall from 40 to 25 — a vida bônus do Firewall nos aliados caiu de 40 para 25.',
        'Texto verbatim: Reduce the Movement Speed boost granted to selected allies by Imperative: Firewall from 20% to 10% — a velocidade no aliado marcado caiu de 20% para 10%, e o bônus de dano de 10% continua.',
        'Consequência para o herói: o Firewall deixa de ser escudo de pré-fight e passa a ser buff de engage, e o Patch se consolida como a cura estável do kit.',
        'No mesmo patch o Shield of the Seraphim do Doctor Strange caiu de 850 para 800, o que aumenta o valor do 125% de dano contra vida bônus da Rage of Ultron.',
      ],
    },
    {
      id: 'official-teamups',
      kind: 'official',
      title: 'Marvel Rivals — Página Oficial de Team-Up',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      published: '2026-10',
      confidence: 'alta',
      takeaways: [
        'Fonte canônica dos dois Team-Ups: STARK PROTOCOL (tecla C, Iron Man) e SP//DR SYNC (tecla C, Peni Parker).',
        'Stark Protocol: Nano-Ray com 70/s de dano, 70/s de cura no bloco de dupla, 8s e 20s de recarga; com o Homem de Ferro, 4 mísseis de 10 de dano em raio de 1,5m e 12s de recarga.',
        'SP//DR Sync: aplica Patch a todos os aliados por 3s com 20s de recarga, 40/s no alvo marcado e 15/s nos demais; com a Peni Parker, o Firewall passa a valer para todos os drones.',
      ],
    },
    {
      id: 'wiki-gg-ultron',
      kind: 'database',
      title: 'Ultron — Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Ultron',
      published: '2025-11',
      confidence: 'media',
      takeaways: [
        'Snapshot pré-20261113, mantido como histórico: Patch com 45/s no alvo e 30/s nos demais, alcance de fixação de 30m, Firewall com 40 de vida bônus no Ultron e 40 nos aliados.',
        'Confirma vida 250, movimento 6 m/s, herói voador com voo passivo e os dois Team-Ups da temporada.',
        'Divergência de fonte: não reflete o corte de 40 para 25 na vida bônus dos aliados nem a mudança de 20% para 10% na velocidade do Firewall.',
      ],
    },
    {
      id: 'official-heroes',
      kind: 'official',
      title: 'Marvel Rivals — Página Oficial de Heróis',
      url: 'https://www.marvelrivals.com/heroes',
      published: '2026-10',
      confidence: 'alta',
      takeaways: [
        'Health 250 confirmado na ficha oficial.',
        'Kit completo com descrições oficiais das habilidades.',
      ],
    },
    {
      id: 'balance-20260710',
      kind: 'official',
      title: 'Marvel Rivals Version 20260710 Balance Post',
      url: 'https://www.marvelrivals.com/balancepost/20260706/41667_1306647.html',
      published: '2026-07-06',
      confidence: 'alta',
      takeaways: [
        'Contexto histórico: a cura em área dos drones do Firewall passou de 30/s para 35/s; esse número hoje aparece na cura do Imperative: Patch (35/s nos aliados no raio), e o Firewall passou a conceder 20/s de auto-cura por 3s.',
        'Confirma valores pós-balance de 2026 e a série de ajustes do herói ao longo da temporada.',
      ],
    },
    {
      id: 'balance-20260612',
      kind: 'official',
      title: 'Marvel Rivals Version 20260612 Balance Post',
      url: 'https://www.marvelrivals.com/20260610/41525_1303507.html',
      published: '2026-06-10',
      confidence: 'alta',
      takeaways: [
        'Imperative: Patch alcance máximo de fixação: 35m para 30m.',
        'Imperative: Firewall cooldown: 10s para 12s.',
        'Rage of Ultron custo de energia: 4000 para 4300.',
      ],
    },
    {
      id: 'season10-balance',
      kind: 'guide',
      title: 'Marvel Rivals Season 10 Patch Notes — Insider Gaming',
      url: 'https://insider-gaming.com/marvel-rivals-season-10-patch-notes-buffs-nerfs',
      published: '2026-09-11',
      confidence: 'media',
      takeaways: [
        'Snapshot histórico da Season 10: vida bônus no Ultron de 65 para 40, nos aliados de 50 para 40 — números superados pelo patch 20261113, que fixou 40 no Ultron e 25 nos aliados.',
        'Registra o novo efeito de auto-cura de 20/s por 3s ao conjurar o Firewall.',
      ],
    },
    {
      id: 'marvelrivalshub-ultron',
      kind: 'guide',
      title: 'Ultron Guide — MarvelRivalsHub',
      url: 'https://marvelrivalshub.com/heroes/ultron',
      published: '2026',
      confidence: 'media',
      takeaways: [
        'Encephalo-Ray: primeiro casting com 6 projéteis em 0,5s a 12 por acerto; segundo casting em campo cilíndrico a 75 por acerto — confirma a leitura de dois estágios.',
        'Dicas de posicionamento em altura e de uso do Patch em dois alvos.',
        'Guia escrito anterior ao patch 20261113: não cobre o corte da vida bônus dos aliados para 25.',
      ],
    },
    {
      id: 'rivalsmeta-ultron',
      kind: 'database',
      title: 'Ultron — RivalsMeta',
      url: 'https://rivalsmeta.com/characters/ultron',
      published: '2026',
      confidence: 'alta',
      takeaways: [
        'Valores de referência das habilidades, coerentes com a ficha oficial.',
        'Estatísticas do herói são snapshot de Season 10; nenhuma medição de win rate pós-20261113 foi publicada até esta verificação.',
      ],
    },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 6, status: 'Completo' },
    { kind: 'database', label: 'Database', count: 2, status: 'Completo' },
    { kind: 'guide', label: 'Guia escrito', count: 2, status: 'Completo' },
    { kind: 'forum', label: 'Fórum', count: 0, status: 'Pendente' },
    { kind: 'video-transcript', label: 'Vídeo', count: 0, status: 'Pendente' },
  ],
}
