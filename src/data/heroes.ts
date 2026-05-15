import type { HeroGuide } from '../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const heroes: HeroGuide[] = [
  {
    id: 'deadpool',
    name: 'Deadpool',
    aliases: ['Wade Wilson', 'Tankpool', 'DPSpool', 'Healpool', 'Mercenário Tagarela'],
    game: 'Marvel Rivals',
    portraitUrl: publicAsset('heroes/banners/deadpool.png'),
    bannerUrl: publicAsset('heroes/banners/deadpool.png'),
    selectionPortraitUrl: publicAsset('heroes/select/deadpool.png'),
    selectionHoverUrl: publicAsset('heroes/select/deadpool_champion.gif'),
    theme: {
      primary: '#ff3854',
      primaryRgb: '255, 56, 84',
      secondary: '#2fd1ff',
      secondaryRgb: '47, 209, 255',
      surface: '#18161e',
      surfaceRgb: '24, 22, 30',
    },
    roles: ['vanguard', 'duelist', 'strategist'],
    lastVerified: '2026-05-12',
    confidenceSummary:
      'Valores de habilidades conferidos em fonte oficial. Prioridades de upgrade cruzam guias e discussão recente de mains, então algumas escolhas aparecem como meta situacional.',
    coreRead: [
      'Deadpool não é um personagem único com três etiquetas: cada role muda o motivo de você entrar na luta.',
      'O segredo dele é converter acerto em escala. Acertar habilidade enche estilo para ultimate e XP para o livrinho. Morrer reseta o estilo, então segurar ultimate demais costuma jogar valor fora.',
      'A pergunta correta antes de evoluir não é “qual habilidade é forte?”, e sim “qual botão eu vou apertar mais nos próximos 45 segundos?”.',
    ],
    systems: [
      {
        name: 'Maximum Flair',
        input: 'Passiva',
        facts: [
          'Acertos com habilidades aumentam a nota de estilo até S.',
          'A ultimate só pode ser usada quando a nota chega em S.',
          'A nota é perdida quando Deadpool morre, então use a ultimate antes de uma luta perdida virar morte grátis.',
        ],
      },
      {
        name: 'Upgrade!',
        input: 'F',
        facts: [
          'XP acumulado em combate enche o livrinho e permite evoluir uma habilidade.',
          'Finalizar inimigos e tirar selfie acelera XP; a animação também pode proteger Deadpool por um instante.',
          'O melhor Deadpool evolui o que resolve a próxima luta, não uma ordem fixa memorizada.',
        ],
      },
      {
        name: 'Healing Factor',
        input: 'Passiva',
        facts: [
          'Regenera fora de combate depois de alguns segundos.',
          'Ao receber muito dano em janela curta, ativa cura acelerada com cooldown próprio.',
          'Ela salva de burst, mas não autoriza ficar parado tomando foco de seis pessoas.',
        ],
      },
    ],
    roleGuides: {
      vanguard: {
        key: 'vanguard',
        label: 'Vanguard',
        nickname: 'Tankpool',
        health: '450 HP',
        difficulty: 'Alta: tanque de tempo, não de escudo permanente',
        job: 'Criar espaço com ameaça real, taunt em área e mitigação para o time.',
        verdict:
          'Use como Vanguard quando seu time precisa de um front que pressione suportes e quebre dive, não quando precisa de uma parede parada.',
        playstyle: [
          'Comece de pistolas para farmar XP/estilo sem gastar vida. Troque para katanas quando houver alvo isolado, dive entrando na sua backline ou corredor onde o dash acerta com consistência.',
          'Deadpool in Your Area é o botão de luta. Sem upgrade, compra tempo para você. Com upgrade, vira ferramenta de time: redução de dano e caos visual em área.',
          'O dash de katana não é só engage. No Vanguard, ele é peel: atravesse o diver, derrube a entrada dele e termine voltando para perto dos seus Strategists.',
        ],
        upgradePlan: [
          {
            rank: 1,
            spellNumber: 6,
            ability: 'The Ban Hammer',
            label: 'Primeira ultimate de pistola',
            baseEffect:
              'Q de pistolas: escolhe um alvo, aplica taunt por 8s, ganha 200 HP bônus e 50/s de cura; cada habilidade errada do alvo causa 35 de dano e dá 60 HP bônus.',
            upgradeEffect:
              'Mantém a execução, adiciona 25/s de dano contínuo e aumenta o HP bônus por erro para 70.',
            fightNote:
              'É pick/controle de alvo, não engage em área. Melhor em suporte ou Duelist que precisa usar cooldown sob pressão.',
            why:
              'Linha de mains recentes prioriza a primeira ultimate porque Deadpool chega em S muito cedo. Se você consegue mirar suporte/DPS e forçar erro, ela ganha a primeira luta e devolve XP.',
            swapWhen:
              'Se seu time derrete antes da primeira ultimate, evolua Deadpool in Your Area primeiro.',
            sourceIds: ['official-deadpool', 'reddit-upgrades', 'reddit-tankpool'],
          },
          {
            rank: 2,
            spellNumber: 5,
            ability: 'Deadpool in Your Area',
            label: 'Aura/taunt em área',
            baseEffect:
              'E: campo cilíndrico de 6m por 5s, taunt/visão ruim em inimigos, 10/s de dano, 20% de redução de dano para você e aceleração do ataque primário.',
            upgradeEffect:
              'Sobe a redução pessoal para 30% e dá 20% de redução de dano para aliados dentro da área.',
            fightNote:
              'Esse é o botão que transforma Tankpool em protetor de time: use quando o dive toca sua backline ou quando seu time vai cruzar choke.',
            why:
              'A evolução transforma o E em ferramenta de proteção coletiva: mais redução de dano para você e 20% para aliados dentro da área. É o upgrade que mais parece “tanque”.',
            swapWhen:
              'Contra poke sem dive, pode vir depois das pistolas para aumentar pressão neutra.',
            sourceIds: ['official-deadpool', 'destructoid-vanguard', 'reddit-upgrades'],
          },
          {
            rank: 3,
            spellNumber: 1,
            ability: 'Dual Desert Eagles',
            label: 'Pistolas',
            baseEffect:
              'Left click de pistolas: 36 por tiro, 30 balas, falloff a partir de 15m até 50% em 30m.',
            upgradeEffect:
              'Vai para 42 por tiro, 40 balas e, a cada 5 tiros, dispara projétil extra que explode em área de 3m causando 25.',
            fightNote:
              'Dá farm seguro de estilo/XP e pressiona tanque exposto sem gastar dash.',
            why:
              'É seu neutral mais seguro. O upgrade aumenta dano, ammo e adiciona explosão depois de sequência de tiros, ajudando a farmar estilo e punir tank exposto.',
            swapWhen:
              'Se o mapa está virando brawl curto, priorize Hazardous Hijinks antes.',
            sourceIds: ['official-deadpool', 'destructoid-vanguard', 'reddit-tankpool'],
          },
          {
            rank: 4,
            spellNumber: 4,
            ability: 'Hazardous Hijinks',
            label: 'Dash de espada',
            baseEffect:
              'RMB de katana: dash de 12m, 40 de dano, renova se acertar inimigo até 2 vezes.',
            upgradeEffect:
              'Ganha 2 cargas recarregando em 10s cada e bounce direcional ao acertar.',
            fightNote:
              'No Vanguard, use para peel e deslocamento: acertar e quicar para cobertura vale mais que ir fundo sozinho.',
            why:
              'Dá mobilidade real ao Tankpool: mais cargas, bounce no hit e melhor chance de completar desafio da ultimate de espada.',
            swapWhen:
              'Suba para primeiro upgrade em Domination, choke curto ou contra dive pesado.',
            sourceIds: ['official-deadpool', 'destructoid-vanguard', 'reddit-tankpool'],
          },
          {
            rank: 5,
            spellNumber: 3,
            ability: 'Magical Unicorn Shield',
            label: 'Bolha',
            baseEffect:
              'RMB de pistolas: arremessa o plushie e cria uma esfera protetora com 300 HP por até 4s.',
            upgradeEffect:
              'A bolha sobe para 400 HP mantendo 4s e 12s de cooldown.',
            fightNote:
              'Use para cortar linha de tiro, cobrir revive/cura ou atravessar burst frontal. Não substitui o E em briga longa.',
            why:
              'Ótima para cortar cura, proteger suporte e bloquear janela explosiva, mas exige arremesso bom. Forte, porém menos universal que aura, pistola e dash.',
            swapWhen:
              'Antecipe se o inimigo depende de burst frontal ou se seu suporte está sendo apagado.',
            sourceIds: ['official-deadpool', 'destructoid-vanguard', 'reddit-upgrades'],
          },
          {
            rank: 6,
            spellNumber: 2,
            ability: 'Kick@$$ Katana',
            label: 'Ataque primário de espada',
            baseEffect:
              'Left click de katana: combo corpo a corpo de 30 por hit em alcance de 4m.',
            upgradeEffect:
              'Sobe para 35 por hit, acelera o combo e permite stab crítico depois de acertar Bad Bunny/Bunny Bounce.',
            fightNote:
              'Só vale cedo se sua luta já está virando corpo a corpo; caso contrário, utilidade de time resolve mais.',
            why:
              'Melhora o corpo a corpo e habilita crit em stab, mas o Vanguard normalmente ganha mais luta evoluindo utilidade antes.',
            sourceIds: ['official-deadpool', 'destructoid-vanguard'],
          },
          {
            rank: 7,
            spellNumber: 7,
            ability: 'The Big Test',
            label: 'Ultimate de espada',
            baseEffect:
              'Q de katanas: desafio de 12s; ativa 50/s de cura, 15% de velocidade, 200 HP para você e 50 para aliados próximos; completar o desafio dá 100/s de cura, 30% de velocidade e reseta Healing Factor.',
            upgradeEffect:
              'Aumenta HP próprio para 300 e a janela do buff pós-desafio para 8s.',
            fightNote:
              'É ultimate de luta agrupada. Sem hits de dash/hop, vira só sustain médio e não justifica entrar longe do time.',
            why:
              'Fica poderosa quando você já tem dash/katana para completar o desafio. Antes disso, pode virar ult bonita sem impacto suficiente.',
            sourceIds: ['official-deadpool', 'destructoid-vanguard'],
          },
        ],
        adaptations: [
          'Se a primeira luta acabou rápido contra seu time: Deadpool in Your Area > pistolas > The Ban Hammer.',
          'Contra brawl/dive: Hazardous Hijinks > Deadpool in Your Area > Magical Unicorn Shield.',
          'Em ataque com espaço aberto: The Ban Hammer cedo pode pegar suporte antes das ultimates inimigas existirem.',
        ],
        ultimates: [
          {
            stance: 'Pistolas',
            name: 'The Ban Hammer',
            bestUse:
              'Pick isolado e controle de alvo hyperativo. Escolha suporte, Duelist sem escape ou quem acabou de gastar cooldown.',
            execution:
              'Ative de média distância: você ganha 200 HP bônus e 50/s de cura por 8s. O alvo tauntado é punido quando erra habilidade, então pressione sem entrar no meio de seis.',
            upgradeValue:
              'Evoluída, adiciona 25/s de dano contínuo e aumenta o HP por erro do alvo para 70. Boa cedo se você está chegando em S antes do lobby.',
          },
          {
            stance: 'Katanas',
            name: 'The Big Test',
            bestUse:
              'Teamfight agrupada, stall de objetivo e entrada quando seu time pode andar com você.',
            execution:
              'Ative perto do time: você ganha 200 HP, aliados próximos ganham 50 HP, e a área dá 50/s de cura + 15% de velocidade. Complete o desafio com dash/hop para dobrar cura/velocidade.',
            upgradeValue:
              'Evoluída, dá 300 HP para você e estende o buff pós-desafio para 8s. Evolua depois de dash/katana se a espada virou seu plano principal.',
          },
        ],
        dashGuide: {
          ability: 'Hazardous Hijinks - Vanguard',
          shortRule:
            'Dash bom atravessa o alvo e termina em lugar vivo. Dash ruim para no meio do time inimigo.',
          mechanics: [
            'Base: avança até 12m, causa 40 de dano e pode renovar o cooldown ao acertar, com limite.',
            'Upgraded: ganha 2 cargas, mantém refresh no acerto e adiciona bounce para reposicionar depois do contato.',
            'Use em diagonal na linha de frente. Acertar o canto do hitbox é melhor que entrar reto no centro do inimigo.',
          ],
          drills: [
            'Treine dash em formato de V: entra no alvo, quica para lateral, volta para aura.',
            'Contra dive, espere o inimigo gastar entrada. Dash nele depois, não antes.',
            'Com The Big Test ativo, priorize hits garantidos em alvos grandes para completar o desafio.',
          ],
        },
        patterns: [
          {
            title: 'Anti-dive de backline',
            steps: [
              'Fique um passo à frente dos seus Strategists.',
              'Quando o diver entra, ative Deadpool in Your Area.',
              'Dash atravessando o diver para cortar a rota dele.',
              'Pistolas enquanto ele tenta sair; shield se sua backline estiver sem cooldown.',
            ],
          },
          {
            title: 'Primeira luta agressiva',
            steps: [
              'Farm de pistola até S.',
              'Procure suporte sem mobilidade.',
              'Use The Ban Hammer cedo.',
              'Se gerar pick ou XP, evolua aura para segurar o contra-engage.',
            ],
          },
        ],
        mistakes: [
          'Abrir toda luta com dash sem rota de saída.',
          'Usar The Big Test longe do time e sem habilidades evoluídas para completar o desafio.',
          'Guardar ultimate com nota S enquanto a luta já está acabando.',
        ],
        evidence: ['official-deadpool', 'destructoid-vanguard', 'reddit-upgrades', 'reddit-tankpool'],
      },
      duelist: {
        key: 'duelist',
        label: 'Duelist',
        nickname: 'DPSpool',
        health: '275 HP',
        difficulty: 'Muito alta: dive mecânico e punição rápida',
        job: 'Matar backline por janelas curtas, não trocar poke infinito com Duelist tradicional.',
        verdict:
          'Duelist Deadpool só vale quando você aceita jogar de assassino com espada. Se for ficar só de pistola, Tankpool ou Healpool entregam mais utilidade.',
        playstyle: [
          'Use pistolas e Headshot para iniciar contagem de estilo, mas a kill vem do pacote dash + hop + stab.',
          'Entre depois que o alvo gastou mobilidade. Deadpool tem cura passiva, mas 275 HP não perdoa entrada cedo.',
          'O E aqui é egoísta: reduz dano recebido e bagunça visão. Use para sobreviver dentro da backline, não para “buffar time”.',
        ],
        upgradePlan: [
          {
            rank: 1,
            spellNumber: 4,
            ability: 'Hazardous Hijinks',
            label: 'Dash de espada',
            baseEffect:
              'RMB de katana: 2 cargas, 12m, 40 de dano, renova ao acertar inimigo até 2 vezes.',
            upgradeEffect:
              'Remove o limite prático da cadeia enquanto você continuar acertando e adiciona bounce no contato.',
            fightNote:
              'É o motor do DPSpool. Acertou, continua a perseguição; errou, você fica sem mobilidade no pior lugar.',
            why:
              'E a diferença entre dar um pulo bonito e ser uma ameaça real. Upgraded, o dash pode continuar resetando enquanto acerta inimigo, virando ferramenta de chase e fuga.',
            sourceIds: ['official-deadpool', 'fandomwire-upgrades', 'reddit-upgrades'],
          },
          {
            rank: 2,
            spellNumber: 2,
            ability: 'Kick@$$ Katana',
            label: 'Katana primário',
            baseEffect:
              'Left click de katana: 40 por hit em melee, alcance de 4m.',
            upgradeEffect:
              'Sobe para 45 por hit, acelera o combo e transforma Bunny Hop em preparação de stab crítico.',
            fightNote:
              'Depois do dash, é isso que fecha kill em alvo de 250-275 HP antes da cura inimiga estabilizar.',
            why:
              'A evolução deixa stabs critarem e transforma Bunny Hop em preparação de stab. Isso cria o dano que finaliza 250-275 HP.',
            swapWhen:
              'Se você está sendo impedido de entrar, pegue Headshot primeiro para farmar de longe.',
            sourceIds: ['official-deadpool', 'fandomwire-upgrades', 'reddit-upgrades'],
          },
          {
            rank: 3,
            spellNumber: 3,
            ability: 'Headshot!',
            label: 'Bobblehead ofensivo',
            baseEffect:
              'RMB de pistolas: projétil de ida e volta; 30 no arremesso, 25 no retorno, campo de 4m causando 15/s por 1s.',
            upgradeEffect:
              'Permite até 3 arremessos se você recapturar; o terceiro deixa campo de 2s e explode por 45.',
            fightNote:
              'Use para forçar movimentação antes do dive. Se o alvo gasta escape por causa do boneco, o dash fica livre.',
            why:
              'Com upgrade, vira ciclo de três arremessos e explosão final. Use antes de entrar para forçar movimento e criar acertos de estilo.',
            sourceIds: ['official-deadpool', 'marvelrivals-gg', 'reddit-guide-ish'],
          },
          {
            rank: 4,
            spellNumber: 7,
            ability: 'Pop Quiz!',
            label: 'Ultimate de espada',
            baseEffect:
              'Q de katana: desafio de 12s; dá 35/s de cura e 15% de velocidade, depois 70/s e 30% se completar.',
            upgradeEffect:
              'Passa a incluir 15% de dano ao ativar e 30% após completar, dura 8s no pós-desafio e reseta todos os cooldowns exceto Healing Factor.',
            fightNote:
              'É a ult que vira luta para o Duelist: entrar perto, bater o desafio e usar o reset para matar ou sair.',
            why:
              'Seu spike de teamfight. O upgrade adiciona pacote maior de velocidade, cura e dano, além de reset de cooldowns quando você completa o desafio.',
            swapWhen:
              'Atrase se o inimigo tem muito controle ou se você não está completando desafios com consistência.',
            sourceIds: ['official-deadpool', 'fandomwire-upgrades'],
          },
          {
            rank: 5,
            spellNumber: 5,
            ability: 'Deadpool in Your Area',
            label: 'E defensivo',
            baseEffect:
              'E: taunt/visão ruim em campo de 6m por 5s, 15/s de dano e 20% de redução de dano só para Deadpool.',
            upgradeEffect:
              'Sobe a redução pessoal para 35% e reforça o bloqueio visual de inimigos que permanecem no campo.',
            fightNote:
              'Aperte quando já entrou e o foco virou em você. Usar cedo demais avisa o alvo e não compra a saída.',
            why:
              'Aumenta sua redução de dano e pressiona visão em área. Bom depois que seu dano principal já está online.',
            sourceIds: ['official-deadpool', 'reddit-upgrades'],
          },
          {
            rank: 6,
            spellNumber: 1,
            ability: 'Dual Desert Eagles',
            label: 'Pistolas',
            baseEffect:
              'Left click de pistolas: 38 por hit, 30 balas, falloff mais leve que o Vanguard, começando em 18m.',
            upgradeEffect:
              'Sobe para 46 por tiro, 40 balas e projétil extra explosivo a cada 5 tiros.',
            fightNote:
              'Ajuda quando a entrada está proibida, mas não substitui o pacote dash/katana como condição de kill.',
            why:
              'Melhora poke e farm, mas não define a identidade do Duelist. Se esse vira seu primeiro upgrade todo jogo, talvez a role errada tenha sido escolhida.',
            sourceIds: ['official-deadpool', 'gamesgg-guide'],
          },
          {
            rank: 7,
            spellNumber: 6,
            ability: 'Skill Issue',
            label: 'Ultimate de pistola',
            baseEffect:
              'Q de pistolas: taunt em alvo único por 8s; cada habilidade que ele erra toma 60 de dano.',
            upgradeEffect:
              'Adiciona 25/s de dano contínuo e cada erro aplica 10% de vulnerabilidade, acumulando até 4 vezes.',
            fightNote:
              'Funciona melhor quando seu time pode focar o alvo marcado. Sozinha, depende demais do inimigo errar habilidade.',
            why:
              'Situacional para punir alvo que erra habilidade; menos consistente que Pop Quiz para abrir ou virar luta.',
            sourceIds: ['official-deadpool', 'gamesgg-guide'],
          },
        ],
        adaptations: [
          'Contra backline lenta: dash > katana > Pop Quiz.',
          'Contra muito controle ou hitscan olhando você: Headshot > dash > E, jogando mais por poke e cleanup.',
          'Se seu time não cria espaço, evite forçar Duelist Deadpool. Ele é ótimo entrando segundo, ruim entrando sozinho.',
        ],
        ultimates: [
          {
            stance: 'Pistolas',
            name: 'Skill Issue',
            bestUse:
              'Punir um alvo móvel depois que ele gastou escape ou quando você quer forçar cooldown defensivo sem entrar corpo a corpo.',
            execution:
              'Marque um alvo por 8s. Cada habilidade que ele erra toma 60 de dano; seu trabalho é apertar o espaço para ele errar ou segurar habilidade e perder pressão.',
            upgradeValue:
              'Evoluída, adiciona 25/s de dano contínuo e 10% de vulnerabilidade por erro, até 4 stacks. Sobe de valor com foco coordenado.',
          },
          {
            stance: 'Katanas',
            name: 'Pop Quiz!',
            bestUse:
              'Dive de decisão: entrar, completar desafio com dash/hop e sair com cooldowns resetados.',
            execution:
              'Ative já perto da luta: recebe 35/s de cura e 15% de velocidade, depois 70/s e 30% se completar o desafio em 12s. Longe da luta, você gasta a janela andando.',
            upgradeValue:
              'Evoluída, adiciona 15% de dano ao ativar, 30% após completar, dura 8s e reseta cooldowns exceto Healing Factor.',
          },
        ],
        dashGuide: {
          ability: 'Hazardous Hijinks - Duelist',
          shortRule:
            'O dash não é botão de aproximar. É botão de confirmar alvo depois que o caminho de saída existe.',
          mechanics: [
            'Base: 2 cargas, 40 de dano, até 12m e refresh limitado ao acertar.',
            'Upgraded: pode renovar enquanto continuar conectando em inimigos, permitindo chase em cadeia.',
            'Bunny Hop reseta ao tocar inimigo ou parede e prepara o próximo stab, então dash e hop devem ser pensados juntos.',
          ],
          drills: [
            'Headshot no grupo, swap para espada, dash no suporte mais exposto.',
            'Depois do hit, Bunny Hop na parede ou no alvo para preparar stab crítico.',
            'Guarde uma rota lateral. Se o segundo dash não tem alvo, ele deve ser saída.',
          ],
        },
        patterns: [
          {
            title: 'Backline nightmare',
            steps: [
              'Arremesse Headshot para ocupar tela e gerar acerto.',
              'Troque para katanas antes do contato.',
              'Dash no suporte, Bunny Hop, stab.',
              'Ative E se for focado e use o reset para sair ou finalizar.',
            ],
          },
          {
            title: 'Pop Quiz limpo',
            steps: [
              'Espere seu Vanguard iniciar.',
              'Ative Pop Quiz já em alcance de dash.',
              'Priorize hit garantido em alvo grande se o suporte escapou.',
              'Com cooldown resetado, escolha: confirmar kill ou recuar.',
            ],
          },
        ],
        mistakes: [
          'Jogar como Soldier de pistola e deixar a espada só para desespero.',
          'Usar Pop Quiz antes da entrada do time.',
          'Achar que Healing Factor compensa stun, slow e foco coordenado.',
        ],
        evidence: ['official-deadpool', 'fandomwire-upgrades', 'reddit-guide-ish', 'reddit-upgrades'],
      },
      strategist: {
        key: 'strategist',
        label: 'Strategist',
        nickname: 'Healpool',
        health: '250 HP',
        difficulty: 'Alta: suporte híbrido, não main healer puro',
        job: 'Sustentar com pistolas e zonas curtas enquanto pune dive e acelera lutas agrupadas.',
        verdict:
          'Strategist Deadpool é melhor como segundo suporte agressivo. Ele cura bastante quando acerta kits, mas não substitui sozinho um healer de volume constante.',
        playstyle: [
          'Fique na segunda linha. Pistolas curam no neutral; Bouncing Bobblehead e Deadpool in Your Area viram picos de cura quando a luta agrupa.',
          'Healing Hijinks e dash de peel. Você atravessa a briga para curar e interromper, não para virar Duelist no fundo inimigo.',
          'A melhor ultimate aqui é frequentemente Final Exam, porque o desafio é mais fácil de completar com Bobblehead e Healing Hijinks batendo em grupos.',
        ],
        upgradePlan: [
          {
            rank: 1,
            spellNumber: 3,
            ability: 'Bouncing Bobblehead',
            label: 'Bobblehead de cura/dano',
            baseEffect:
              'RMB de pistolas: projétil de ida e volta com 20/20 de dano, 40/40 de cura, campo de 4m com 10/s de dano e 40/s de cura por 1s.',
            upgradeEffect:
              'Aumenta cura/dano, permite terceiro arremesso com campo de 2s e explosão final de 20 de dano + 70 de cura.',
            fightNote:
              'É cura, poke, XP e estilo no mesmo botão. Jogue no maior grupo possível, não em alvo solo fora da briga.',
            why:
              'É o melhor primeiro upgrade porque multiplica acertos, cura, dano, XP e estilo. Também deixa Final Exam muito mais fácil de completar.',
            sourceIds: ['official-deadpool', 'dotesports-strategist', 'reddit-upgrades'],
          },
          {
            rank: 2,
            spellNumber: 1,
            ability: 'Dual Desert Eagles',
            label: 'Pistolas de cura',
            baseEffect:
              'Left click de pistolas: 25 de dano em inimigo ou 45 de cura por tiro em aliado, 30 balas.',
            upgradeEffect:
              'Sobe para 28 de dano, 50 de cura, 40 balas e projétil extra a cada 5 tiros com cura/dano em área.',
            fightNote:
              'É seu sustain de neutral. Mira ruim aqui faz o Healpool parecer fraco mesmo com bons cooldowns.',
            why:
              'Seu neutral depende delas. O upgrade aumenta cura por tiro, ammo e cria projéteis extras depois de sequência.',
            swapWhen:
              'Se a backline está sob dive constante, Healing Hijinks pode vir antes.',
            sourceIds: ['official-deadpool', 'dotesports-strategist', 'reddit-guide-ish'],
          },
          {
            rank: 3,
            spellNumber: 7,
            ability: 'Final Exam',
            label: 'Ultimate de espada',
            baseEffect:
              'Q de katana: cura aliados em 8m por 70/s; desafio de 12s, se completar sobe para 100/s por 6s.',
            upgradeEffect:
              'Cura inicial vai para 80/s, pós-desafio para 120/s, buff dura 8s e completar concede 300 HP bônus.',
            fightNote:
              'É a ultimate de segurar engage e objetivo. Ative perto do time e use Bobblehead/Healing Hijinks para completar rápido.',
            why:
              'É a resposta para ultimates de suporte inimigas: cura em área forte e, ao completar desafio, janela maior e bônus de sobrevivência.',
            swapWhen:
              'Se sua equipe joga muito espalhada, priorize Deadpool in Your Area antes.',
            sourceIds: ['official-deadpool', 'dotesports-strategist', 'reddit-upgrades'],
          },
          {
            rank: 4,
            spellNumber: 5,
            ability: 'Deadpool in Your Area',
            label: 'Zona de cura e dano',
            baseEffect:
              'E: campo de 6m por 5s; aplica taunt/visão ruim, 10/s de dano e 60/s de cura para aliados.',
            upgradeEffect:
              'Sobe a cura para 70/s e adiciona 20% de dano boost para aliados na zona.',
            fightNote:
              'Use quando a luta está agrupada. Em time espalhado, esse upgrade perde muito valor.',
            why:
              'Base já cura 60/s na área. Upgraded sobe a cura e adiciona 20% de dano boost, excelente para combo com Duelists.',
            sourceIds: ['official-deadpool', 'reddit-upgrades'],
          },
          {
            rank: 5,
            spellNumber: 4,
            ability: 'Healing Hijinks',
            label: 'Dash de cura',
            baseEffect:
              'RMB de katana: 2 cargas, dash de 12m, 30 de dano e 45 de cura em área de 5m.',
            upgradeEffect:
              'Sobe para 40 de dano, 55 de cura, raio de cura de 8m e bounce/refresh ao acertar inimigo.',
            fightNote:
              'É dash de peel. Cruze aliado ferido e inimigo junto; perseguir kill isolada deixa o time sem cura.',
            why:
              'Excelente contra dive e brawl. Com upgrade, aumenta raio de cura para 8m e melhora a cura por hit.',
            swapWhen:
              'Suba para primeiro ou segundo contra Spider-Man, Black Panther, Wolverine ou qualquer dive repetido.',
            sourceIds: ['official-deadpool', 'dotesports-strategist', 'reddit-upgrades'],
          },
          {
            rank: 6,
            spellNumber: 2,
            ability: 'Kick@$$ Katana',
            label: 'Katana de cura próxima',
            baseEffect:
              'Left click de katana: 30 por hit, e cada acerto cura aliados próximos em 5m por 32.',
            upgradeEffect:
              'Sobe para 35 por hit, cura 35, amplia cura para 8m e prepara stab crítico com Healing Hop.',
            fightNote:
              'Boa em brawl colado, ruim se seu time joga aberto. Não force melee só para justificar o upgrade.',
            why:
              'Aumenta cura/alcance em melee, mas você não quer depender de melee para manter time vivo.',
            sourceIds: ['official-deadpool'],
          },
          {
            rank: 7,
            spellNumber: 6,
            ability: 'Pwnage Pound',
            label: 'Ultimate de pistola',
            baseEffect:
              'Q de pistolas: taunt por 8s; aliados em 8m recebem 80/s de cura, e cada habilidade errada pelo alvo gera 60 de dano nele e 80 de cura extra.',
            upgradeEffect:
              'Sobe a cura contínua para 100/s e a cura por erro para 90.',
            fightNote:
              'É a ult segura de Healpool: use contra diver ou alvo que seu time já está olhando quando Final Exam seria suicídio.',
            why:
              'Segura e fácil de usar, mas menos decisiva que Final Exam em luta grande. Boa quando entrar de espada é suicídio.',
            sourceIds: ['official-deadpool', 'dotesports-strategist'],
          },
        ],
        adaptations: [
          'Se o inimigo dive sua backline: Bouncing Bobblehead > Healing Hijinks > pistolas.',
          'Se seu time agrupa em brawl: Bobblehead > Final Exam > Deadpool in Your Area.',
          'Se seus Duelists jogam espalhados, priorize pistolas e Pwnage Pound, porque a zona perde valor.',
        ],
        ultimates: [
          {
            stance: 'Pistolas',
            name: 'Pwnage Pound',
            bestUse:
              'Opção segura quando você não pode entrar de espada. Boa para manter cura sem se expor e punir alvo que insiste no dive.',
            execution:
              'Use no alvo pressionando seu time. Por 8s, aliados em 8m recebem 80/s de cura; se o alvo erra habilidade, ele toma 60 e seu time recebe cura extra.',
            upgradeValue:
              'Evoluída, sobe a cura contínua para 100/s e a cura por erro para 90. Evolua cedo só se Final Exam for morte certa.',
          },
          {
            stance: 'Katanas',
            name: 'Final Exam',
            bestUse:
              'Teamfight no objetivo, contra engage inimigo ou resposta a ultimates de dano em área.',
            execution:
              'Ative perto do time: cura aliados em 8m por 70/s. Complete o desafio com Bobblehead e Healing Hijinks para subir a cura para 100/s.',
            upgradeValue:
              'Evoluída, cura 80/s ao ativar, 120/s após o desafio, dura 8s e completar concede 300 HP bônus ao grupo.',
          },
        ],
        dashGuide: {
          ability: 'Healing Hijinks - Strategist',
          shortRule:
            'Dash de suporte bom atravessa uma linha de aliados. Se só você recebeu cura, foi dash egoísta.',
          mechanics: [
            'Base: 2 cargas, até 12m, 30 de dano e 45 de cura em área próxima.',
            'Upgraded: 40 de dano, 55 de cura e campo de cura de 8m ao acertar.',
            'Também ajuda a completar Final Exam, então guardar uma carga para a ultimate vale mais que poke aleatório.',
          ],
          drills: [
            'Use em diagonal passando por aliado ferido e inimigo ao mesmo tempo.',
            'Contra dive, dash depois que o diver entrou, para curar aliado e reposicionar você.',
            'Com Final Exam, combine Bobblehead + dash em grupo para completar o desafio rapidamente.',
          ],
        },
        patterns: [
          {
            title: 'Cura de briga agrupada',
            steps: [
              'Pistolas no aliado mais exposto.',
              'Bouncing Bobblehead no centro da luta.',
              'Deadpool in Your Area quando inimigos atravessam sua linha.',
              'Healing Hijinks para resetar posição e completar cura.',
            ],
          },
          {
            title: 'Final Exam consistente',
            steps: [
              'Espere dois ou mais aliados estarem na área.',
              'Ative Final Exam de katanas.',
              'Troque para pistolas se precisar mirar Bobblehead melhor.',
              'Arremesse Bobblehead no maior grupo e dash através da luta.',
            ],
          },
        ],
        mistakes: [
          'Escolher Healpool como único suporte de sustain e jogar espalhado.',
          'Gastar Healing Hijinks para perseguir kill enquanto seu Duelist está morrendo atrás.',
          'Usar Final Exam longe dos aliados ou sem Bobblehead disponível.',
        ],
        evidence: ['official-deadpool', 'dotesports-strategist', 'reddit-upgrades', 'reddit-guide-ish'],
      },
    },
    sources: [
      {
        id: 'official-deadpool',
        kind: 'official',
        title: 'Deadpool - página oficial de habilidades',
        url: 'https://www.marvelrivals.com/20260115/41360_1281973.html',
        author: 'Marvel Rivals / NetEase',
        published: '2026-01-15',
        confidence: 'alta',
        takeaways: [
          'Confirma Deadpool em Vanguard, Duelist e Strategist, com kits e upgrades separados.',
          'Mostra Maximum Flair, Upgrade!, Healing Factor, Deadpool in Your Area e os valores de dash/zonas/ultimates.',
          'Base oficial para cooldowns, danos, cura, alcance e nomes de habilidades.',
        ],
      },
      {
        id: 'rivalsmeta-deadpool',
        kind: 'database',
        title: 'Deadpool role pages - Rivals Meta database',
        url: 'https://rivalsmeta.com/characters/deadpool-vanguard',
        confidence: 'media',
        takeaways: [
          'Confere a separação pública de Deadpool por role e lista habilidades por stance/ultimate.',
          'Útil como database secundária para navegação e nomes, mas a página mistura algumas labels; valores finais continuam vindo da fonte oficial.',
          'Mantida como referência pública complementar, não como fonte primária de números.',
        ],
      },
      {
        id: 'destructoid-vanguard',
        kind: 'guide',
        title: 'Best upgrade order for Vanguard Deadpool',
        url: 'https://www.destructoid.com/best-upgrade-order-for-vanguard-deadpool-in-marvel-rivals/',
        author: 'Kacee Fay',
        published: '2026-01-21',
        confidence: 'media',
        takeaways: [
          'Prioriza Hazardous Hijinks, Deadpool in Your Area e pistolas para Tankpool.',
          'Valoriza The Big Test acima de The Ban Hammer em leitura mais orientada a proteção de time.',
          'Útil como contraponto a discussões recentes que preferem gun ultimate cedo.',
        ],
      },
      {
        id: 'dotesports-strategist',
        kind: 'guide',
        title: 'How to play Strategist Deadpool',
        url: 'https://dotesports.com/marvel/news/marvel-rivals-strategist-deadpool-guide',
        author: 'Edward Strazd',
        published: '2026-01-20',
        confidence: 'media',
        takeaways: [
          'Define Healpool como suporte secundário, melhor ao lado de healer forte.',
          'Recomenda Bouncing Bobblehead primeiro e pistolas depois para estabilizar cura.',
          'Explica que Final Exam ganha muito valor quando o desafio é completado.',
        ],
      },
      {
        id: 'gamesgg-guide',
        kind: 'guide',
        title: 'Deadpool Marvel Rivals Guide: Master the Triple-Role Merc',
        url: 'https://games.gg/marvel-rivals/guides/deadpool-marvel-rivals-guide/',
        author: 'Mostafa Salem',
        published: '2026-03-25',
        confidence: 'media',
        takeaways: [
          'Enfatiza que Deadpool escala por estilo e XP, dois sistemas que punem morte e upgrades errados.',
          'Chama atenção para selfie após finalizações como ganho real de XP e segurança curta.',
          'Boa fonte para macro: trocar role no spawn e ler composição antes da próxima luta.',
        ],
      },
      {
        id: 'fandomwire-upgrades',
        kind: 'guide',
        title: 'Best Upgrade Order for Deadpool in all roles',
        url: 'https://fandomwire.com/marvel-rivals-best-upgrade-order-for-deadpool/',
        published: '2026-04',
        confidence: 'media',
        takeaways: [
          'Defende DPSpool por identidade de espada: katana e dash antes de upgrades de poke.',
          'Destaca que Hazardous Hijinks upgraded permite cadeia de resets em alvos conectados.',
          'Ajuda a separar Duelist Deadpool de uma rota passiva de pistolas.',
        ],
      },
      {
        id: 'reddit-upgrades',
        kind: 'forum',
        title: 'Discussão: What order do yall get your upgrades in?',
        url: 'https://www.reddit.com/r/DeadpoolMarvelRivals/comments/1ss0hvc/what_order_do_yall_get_your_upgrades_in/',
        published: '2026-04',
        confidence: 'em disputa',
        takeaways: [
          'Mains divergem por role, mapa e comfort pick, mas repetem padrões: Tankpool com gun ult/aura, Healpool com bobblehead, DPSpool com dash/sword.',
          'Há forte consenso de que upgrade deve responder a composição inimiga, especialmente dive contra Healpool.',
          'Fonte de meta viva, não de valor numérico oficial.',
        ],
      },
      {
        id: 'reddit-guide-ish',
        kind: 'forum',
        title: 'Discussão: For anyone struggling to make Deadpool work',
        url: 'https://www.reddit.com/r/marvelrivals/comments/1qgobyt/for_anyone_struggling_to_make_deadpool_work_i/',
        published: '2026-01',
        confidence: 'em disputa',
        takeaways: [
          'Relatos de main apontam dash + bobblehead como rota forte para ameaçar backline.',
          'Comentários reforçam Healpool como híbrido, muitas vezes melhor como segundo ou terceiro suporte.',
          'Bom para detectar divergências práticas que guias iniciais não capturam.',
        ],
      },
      {
        id: 'reddit-tankpool',
        kind: 'forum',
        title: 'Discussão: optimal upgrade path for Tankpool',
        url: 'https://www.reddit.com/r/DeadpoolMarvelRivals/comments/1s2gc26/whats_the_optimal_upgrade_path_for_tankpool/',
        published: '2026-04',
        confidence: 'em disputa',
        takeaways: [
          'Muitos jogadores recentes priorizam gun ult cedo para aproveitar S antes de outras ultimates.',
          'Outros defendem pistola ou dash primeiro, dependendo de brawl e consistência no desafio da ult.',
          'Mostra que o Tankpool evoluiu depois dos primeiros guias de lançamento.',
        ],
      },
      {
        id: 'video-transcripts-pending',
        kind: 'video-transcript',
        title: 'Transcrições de guias em vídeo',
        url: 'https://www.youtube.com/results?search_query=Marvel+Rivals+Deadpool+guide',
        confidence: 'pendente',
        takeaways: [
          'Slot reservado para transcrições de VODs/guias, com resumo, timestamps e confiança.',
          'Não há transcrição validada nesta primeira carga; o app não inventa recomendação de vídeo sem texto auditável.',
          'Próximo enriquecimento deve capturar vídeos de mains/coach e converter para evidências por role.',
        ],
      },
    ],
    sourceCoverage: [
      {
        kind: 'official',
        label: 'Oficial',
        count: 1,
        status: 'Valores e nomes de habilidades verificados.',
      },
      {
        kind: 'database',
        label: 'Database',
        count: 1,
        status: 'Referência pública complementar; números finais vêm do oficial.',
      },
      {
        kind: 'guide',
        label: 'Guias',
        count: 4,
        status: 'Usados para macro, rotas e conflitos de prioridade.',
      },
      {
        kind: 'forum',
        label: 'Fórum',
        count: 3,
        status: 'Usado para meta recente e adaptações situacionais.',
      },
      {
        kind: 'video-transcript',
        label: 'Vídeos',
        count: 0,
        status: 'Modelo pronto; falta transcrição validada.',
      },
    ],
  },
  {
    id: 'black-cat',
    name: 'Gata Negra',
    aliases: ['Black Cat', 'Felicia Hardy', 'Felicia Sara Hardy', 'The Master Thief', 'Gata', 'Ladra Mestra'],
    game: 'Marvel Rivals',
    portraitUrl: publicAsset('heroes/banners/black_cat.png'),
    bannerUrl: publicAsset('heroes/banners/black_cat.png'),
    selectionPortraitUrl: publicAsset('heroes/select/black_cat.png'),
    selectionHoverUrl: publicAsset('heroes/select/black_cat_champion.gif'),
    theme: {
      primary: '#d8d1c3',
      primaryRgb: '216, 209, 195',
      secondary: '#c99a44',
      secondaryRgb: '201, 154, 68',
      surface: '#11131a',
      surfaceRgb: '17, 19, 26',
    },
    roles: ['duelist'],
    lastVerified: '2026-05-09',
    confidenceSummary:
      'Heroína confirmada oficialmente na Season 7.5. Valores de kit cruzados com wiki pública e guias recentes; prioridade de jogo focada em Fortuna, relíquias e execução.',
    coreRead: [
      'A Gata Negra é uma Duelist de economia: ela não entra porque tem cooldown, entra porque tem Fortuna, item certo e rota de saída.',
      'O segredo dela é transformar Turn of Fortune em janela de roubo: acertou o gancho, você compra opção, entra curto, força cooldown e sai antes do foco virar contra você.',
      'Sem Fortuna ela parece uma melee frágil. Com Fortuna e item preparado, ela vira assassina, scout, anti-CC ou peça de engage para o time.',
    ],
    systems: [
      {
        name: 'Fortune',
        input: 'Recurso',
        facts: [
          'A Gata Negra acumula até 1000 de Fortuna e gasta esse recurso em Fortune’s Favor e Gilded Deal.',
          'Ataques geram Fortuna ao acertar inimigos; Turn of Fortune gera uma grande injeção de recurso quando conecta.',
          'Morrer custa parte da Fortuna acumulada, então entrar sem plano de saída não perde só vida, perde economia.',
        ],
      },
      {
        name: 'Gilded Deal',
        input: 'F',
        facts: [
          'Abre uma loja de relíquias compradas com Fortuna: visão, invisibilidade, limpeza de controle, portal e campo de controle entram aqui.',
          'A escolha da relíquia define a próxima luta. Não compre por hábito; compre para resolver o inimigo que está impedindo seu dive.',
          'Helm of Hades e Chernobog’s Crystal são botões de sobrevivência; Mento-Fish e Ring of Zona são botões de criar jogada.',
        ],
      },
      {
        name: 'Calling Card',
        input: 'Q',
        facts: [
          'Marca inimigos em linha de visão, libera Pounce e Claw Strike e permite encadear alvos durante a ultimate.',
          'Pounce alcança alvos distantes e reduz dano recebido durante o avanço; Claw Strike causa dano percentual e gera Fortuna.',
          'Abates durante a ultimate renovam a janela e resetam Pounce/Claw Strike, então o valor real vem de escolher primeiro o alvo que morre.',
        ],
      },
    ],
    roleGuides: {
      duelist: {
        key: 'duelist',
        label: 'Duelist',
        nickname: 'Ladra de Fortuna',
        health: '275 HP',
        difficulty: 'Alta: dive de economia, item e alvo certo',
        job: 'Roubar Fortuna, preparar relíquia e executar backline sem ficar presa no meio do time inimigo.',
        verdict:
          'Escolha Gata Negra quando você quer flanquear com autonomia e punir alvos isolados. Ela é forte demais com recurso, mas vira presa fácil se entra sem Fortuna ou sem saída.',
        playstyle: [
          'Comece a luta roubando Fortuna de fora com Turn of Fortune. Esse gancho é o “sinal verde”: se errou, você espera; se acertou, compra item ou prepara Fortune’s Favor.',
          'Não gaste Cat’s Cradle só para chegar. Ela tem duas cargas, mas recarrega devagar; uma carga deve virar saída, reposicionamento ou dodge de controle.',
          'Fortune’s Favor é sua conversão: Claw Whip para dano em cone e vida bônus quando há vários alvos; Phantom Pursuit para finalizar alvo móvel enquanto você fica inalvejável e volta ao ponto inicial.',
        ],
        priorityKicker: 'Prioridade',
        priorityTitle: 'Ordem de Domínio',
        priorityDescription:
          'O que aprender e priorizar na partida: gerar Fortuna, comprar a relíquia certa, executar e sair.',
        upgradePlan: [
          {
            rank: 1,
            input: 'E',
            ability: 'Turn of Fortune',
            label: 'gancho de economia',
            why:
              'É o botão que decide se você tem partida. Acertar o gancho dá dano, vida bônus e uma grande entrada de Fortuna; errar deixa você sem recurso para o combo caro.',
            swapWhen:
              'Use em alvo grande ou parado no começo da luta. Não tente abrir em alvo pequeno se isso te obriga a entrar sem Fortuna.',
            sourceIds: ['wiki-black-cat', 'beebom-black-cat'],
          },
          {
            rank: 2,
            input: 'F',
            ability: 'Gilded Deal',
            label: 'loja de relíquias',
            why:
              'É o que separa uma Gata Negra comum de uma jogadora perigosa. Com item certo, você escolhe se precisa de visão, invisibilidade, limpeza de CC, portal ou controle de movimento.',
            swapWhen:
              'Contra Mantis, Hela e outros controles, pense em Chernobog’s Crystal antes de entrar. Para pick escondido, Helm of Hades costuma valer mais.',
            sourceIds: ['wiki-black-cat', 'mobalytics-black-cat', 'dotesports-black-cat'],
          },
          {
            rank: 3,
            input: 'RMB',
            ability: 'Claw Whip',
            label: 'cone de dano e vida bônus',
            why:
              'É a opção mais estável de Fortune’s Favor quando o alvo não está fugindo. O cone pune grupo, devolve vida bônus por acerto e prepara a finalização.',
            swapWhen:
              'Se o alvo está com mobilidade aberta e vai escapar com pouca vida, guarde Fortuna para Phantom Pursuit.',
            sourceIds: ['wiki-black-cat', 'marvelrivalsgg-black-cat'],
          },
          {
            rank: 4,
            input: 'RMB/E',
            ability: 'Phantom Pursuit',
            label: 'execução inalvejável',
            why:
              'É o finalizador de alvos móveis. Você avança, causa dano, fica inalvejável durante a ação e volta ao ponto inicial, então é excelente para matar sem se entregar.',
            swapWhen:
              'Não use só para poke: o custo de Fortuna é alto. Use quando a vida do alvo ou a falta de escape já justificam a execução.',
            sourceIds: ['wiki-black-cat', 'marvelrivalsgg-black-cat', 'beebom-black-cat'],
          },
          {
            rank: 5,
            input: 'Shift',
            ability: 'Cat’s Cradle',
            label: 'dash de entrada e saída',
            why:
              'Duas cargas de avanço de 15m dão liberdade para atravessar ângulos e cortar backline, mas a recarga é lenta. O erro clássico é gastar as duas cargas para entrar.',
            swapWhen:
              'Use a segunda carga ofensivamente só quando Calling Card ou Phantom Pursuit já garantem reset, kill ou retorno seguro.',
            sourceIds: ['wiki-black-cat', 'mobalytics-black-cat'],
          },
          {
            rank: 6,
            input: 'Q',
            ability: 'Calling Card',
            label: 'ultimate de caça',
            why:
              'A ultimate marca alvos e te deixa pular de presa em presa. O segredo não é apertar Q no meio de seis pessoas, é começar no alvo que pode morrer e resetar a sequência.',
            swapWhen:
              'Use de ângulo alto ou lateral, com linha de visão. Priorize Strategists, depois Duelists; Vanguards só entram quando já estão baixos.',
            sourceIds: ['wiki-black-cat', 'marvelrivalsgg-black-cat', 'beebom-black-cat'],
          },
          {
            rank: 7,
            input: 'Melee',
            ability: 'Feline Fury',
            label: 'farm e pressão curta',
            why:
              'É o básico que mantém a economia girando, mas não deve ser o plano inteiro. Se você está só batendo de melee sem Fortune’s Favor, está jogando a versão fraca da personagem.',
            sourceIds: ['wiki-black-cat', 'mobalytics-black-cat'],
          },
        ],
        adaptations: [
          'Contra muito CC: jogue por Turn of Fortune + Chernobog’s Crystal, e só depois entre com Cat’s Cradle.',
          'Contra backline escorregadia: economize para Phantom Pursuit e não gaste Fortuna em Claw Whip antes da vida do alvo cair.',
          'Contra time agrupado: use Claw Whip e Mento-Fish para criar caos, mas evite ultar se nenhum alvo frágil estiver realmente finalizável.',
        ],
        ultimates: [
          {
            stance: 'Ultimate única',
            name: 'Calling Card',
            bestUse:
              'Caçar alvo frágil já marcado e com rota de reset. O melhor primeiro alvo é um Strategist ou Duelist sem escape, não o tanque mais perto.',
            execution:
              'Ative de terreno alto ou ângulo lateral, escolha alvo em linha de visão, Pounce, Claw Strike e só encadeie se o próximo alvo está baixo ou isolado. Se não matou, saia com dash/relíquia em vez de insistir.',
            upgradeValue:
              'O recurso real é entrar com Fortuna suficiente para seguir com Phantom Pursuit ou Claw Whip depois do primeiro slash.',
          },
        ],
        dashGuide: {
          ability: 'Cat’s Cradle + Phantom Pursuit',
          shortRule:
            'A Gata Negra boa nunca usa todos os movimentos para entrar. Uma parte do kit sempre fica reservada para sumir.',
          mechanics: [
            'Cat’s Cradle avança 15m, causa dano e tem duas cargas com recarga lenta; trate a segunda carga como seguro de vida.',
            'Phantom Pursuit consome Fortuna, avança até o alvo, deixa a Gata Negra inalvejável durante a ação e retorna ao ponto inicial.',
            'Wall climb e double jump permitem staging: entre por cima ou lateral, não pelo corredor que todos já estão mirando.',
          ],
          drills: [
            'Gancho no tanque para gerar Fortuna, wall climb para ângulo, Claw Whip no suporte exposto.',
            'Cat’s Cradle para cruzar visão, melee curto, Phantom Pursuit para finalizar e voltar ao ponto inicial.',
            'Antes de ultar, marque mentalmente a saída: segunda carga, Helm of Hades, Ring of Zona ou retorno do Phantom Pursuit.',
          ],
        },
        patterns: [
          {
            title: 'Roubo antes do dive',
            steps: [
              'Comece fora do cone principal da luta.',
              'Acerte Turn of Fortune em alvo fácil.',
              'Compre relíquia ou prepare Fortune’s Favor.',
              'Entre só quando o alvo frágil gastar mobilidade.',
            ],
          },
          {
            title: 'Execução limpa',
            steps: [
              'Staging por parede ou double jump.',
              'Cat’s Cradle para aproximar sem gastar tudo.',
              'Claw Whip se houver dois alvos ou Phantom Pursuit se o alvo está baixo.',
              'Saída imediata com carga restante, invisibilidade ou retorno do Phantom Pursuit.',
            ],
          },
        ],
        mistakes: [
          'Abrir fight com Cat’s Cradle duplo e descobrir que não sobrou saída.',
          'Comprar relíquia sem olhar a composição inimiga.',
          'Usar Calling Card no alvo mais perto em vez do alvo que pode morrer e resetar a ultimate.',
          'Entrar sem Fortuna e tentar vencer só no melee de 275 HP.',
        ],
        evidence: [
          'official-black-cat-season',
          'wiki-black-cat',
          'marvelrivalsgg-black-cat',
          'mobalytics-black-cat',
          'beebom-black-cat',
        ],
      },
    },
    sources: [
      {
        id: 'official-black-cat-season',
        kind: 'official',
        title: 'Marvel Rivals Version 20260417 Patch Notes - Season 7.5 Arrives',
        url: 'https://www.marvelrivals.com/gameupdate/20260415/41548_1296163.html',
        author: 'Marvel Rivals / NetEase',
        published: '2026-04-15',
        confidence: 'alta',
        takeaways: [
          'Confirma oficialmente Black Cat como nova heroína da Season 7.5, com chegada em 17 de abril de 2026.',
          'Contextualiza Felicia, Gilded Saint, loja e itens de temporada.',
          'Não detalha todos os valores de habilidade; por isso a parte numérica vem de wiki pública.',
        ],
      },
      {
        id: 'wiki-black-cat',
        kind: 'guide',
        title: 'Black Cat - Marvel Rivals Wiki',
        url: 'https://marvelrivals.fandom.com/wiki/Black_Cat',
        confidence: 'media',
        takeaways: [
          'Base principal para role, vida, dificuldade, Fortune, valores de habilidade, Gilded Deal e Calling Card.',
          'Lista Fortune, Cat’s Cradle, Turn of Fortune, Phantom Pursuit, passivas e team-up com Captain America e White Fox.',
          'A página ainda marca estratégia como stub, então usei valores dela, não recomendações estratégicas prontas.',
        ],
      },
      {
        id: 'marvelrivalsgg-black-cat',
        kind: 'guide',
        title: 'Marvel Rivals Black Cat Guide',
        url: 'https://marvelrivals.gg/black-cat/',
        author: 'Shodi Madian',
        published: '2026-04',
        confidence: 'media',
        takeaways: [
          'Enfatiza Fortune como sistema central e Phantom Pursuit como ferramenta de finalização.',
          'Recomenda usar a ultimate de ângulo alto, com prioridade em Strategists e Duelists antes de Vanguards.',
          'Destaca sinergia com Captain America, White Fox, Mantis, Luna Snow e Magneto.',
        ],
      },
      {
        id: 'mobalytics-black-cat',
        kind: 'guide',
        title: 'Marvel Rivals Black Cat Character Guide',
        url: 'https://mobalytics.gg/marvel-rivals/black-cat-guide',
        confidence: 'media',
        takeaways: [
          'Define Gata Negra como dive Duelist de alta mobilidade, economia e teto mecânico alto.',
          'Resume o loop como farmar Fortune, comprar Gilded Deal, mergulhar na backline e sair com mobilidade.',
          'Chama atenção para dificuldade contra lutas muito agrupadas.',
        ],
      },
      {
        id: 'beebom-black-cat',
        kind: 'guide',
        title: 'Marvel Rivals Black Cat Guide: How to Play, Best Tips, Tricks and Counters',
        url: 'https://beebom.com/marvel-rivals-black-cat-guide/',
        published: '2026-04',
        confidence: 'media',
        takeaways: [
          'Reforça que ela precisa acumular Fortune antes de executar combos caros.',
          'Diferencia Claw Whip e Phantom Pursuit por situação: dano consistente versus chase/finalização.',
          'Lista counters práticos como Winter Soldier, Hela, Hawkeye e The Punisher.',
        ],
      },
      {
        id: 'dotesports-black-cat',
        kind: 'guide',
        title: 'Marvel Rivals reveals Black Cat’s abilities and first skin for Season 7',
        url: 'https://dotesports.com/marvel/news/marvel-rivals-black-cat-abilities-duelist-skins',
        author: 'Alexandra W',
        published: '2026-04-14',
        confidence: 'media',
        takeaways: [
          'Registra a revelação de NetEase: Duelist ágil com wall climb, double jump, gancho e roubo de Fortune.',
          'Explica a fantasia da personagem como ladra móvel que troca Fortune por relíquias.',
          'Confirma o team-up Lucky Loan com Captain America e White Fox.',
        ],
      },
      {
        id: 'reddit-black-cat-pending',
        kind: 'forum',
        title: 'Discussões de mains da Gata Negra',
        url: 'https://www.reddit.com/r/RivalsCollege/search/?q=Black%20Cat%20guide&restrict_sr=1',
        confidence: 'pendente',
        takeaways: [
          'Slot reservado para consolidar relatos de mains depois de mais tempo de meta.',
          'A primeira versão usa fórum apenas como pendência, para não transformar hype de lançamento em regra fixa.',
          'Próximo enriquecimento deve separar conselhos por rank, mapa e counters.',
        ],
      },
      {
        id: 'video-black-cat-pending',
        kind: 'video-transcript',
        title: 'Transcrições de guias em vídeo da Gata Negra',
        url: 'https://www.youtube.com/results?search_query=Marvel+Rivals+Black+Cat+guide',
        confidence: 'pendente',
        takeaways: [
          'Slot reservado para guias em vídeo com timestamps e transcrição auditável.',
          'Não há transcrição validada nesta carga inicial.',
          'Prioridade futura: capturar rota de combo, ordem de relíquias e uso real de Calling Card em ranked.',
        ],
      },
    ],
    sourceCoverage: [
      {
        kind: 'official',
        label: 'Oficial',
        count: 1,
        status: 'Release e entrada no roster confirmados por patch notes.',
      },
      {
        kind: 'guide',
        label: 'Guias/Wiki',
        count: 5,
        status: 'Usados para valores, combos, counters e leitura de jogo.',
      },
      {
        kind: 'forum',
        label: 'Fórum',
        count: 0,
        status: 'Pendente: ainda não consolidado em evidência confiável.',
      },
      {
        kind: 'video-transcript',
        label: 'Vídeos',
        count: 0,
        status: 'Modelo pronto; falta transcrição validada.',
      },
    ],
  },
  {
    id: 'magneto',
    name: 'Magneto',
    aliases: ['Max Eisenhardt', 'Erik Lehnsherr', 'Mestre do Magnetismo', 'Mag'],
    game: 'Marvel Rivals',
    portraitUrl: publicAsset('heroes/banners/magneto.png'),
    bannerUrl: publicAsset('heroes/banners/magneto.png'),
    selectionPortraitUrl: publicAsset('heroes/select/magneto.png'),
    selectionHoverUrl: publicAsset('heroes/select/magneto_champion.gif'),
    theme: {
      primary: '#d82f45',
      primaryRgb: '216, 47, 69',
      secondary: '#b9c7d3',
      secondaryRgb: '185, 199, 211',
      surface: '#141822',
      surfaceRgb: '20, 24, 34',
    },
    roles: ['vanguard'],
    lastVerified: '2026-05-11',
    confidenceSummary:
      'Habilidades e valores atuais conferidos em página oficial e balance posts recentes. Guias e Reddit sustentam leitura de bolhas, anéis e uso defensivo da ultimate.',
    coreRead: [
      'Magneto fica bom quando você para de usar bolha como pânico e começa a usá-la como economia: cada 100 de dano absorvido vira Iron Ring para o próximo Mag-Cannon.',
      'A luta ideal é curta e calculada: avance com Metallic Curtain, coloque Metal Bulwark no aliado que vai receber foco, carregue anéis e empurre alguém com Mag-Cannon antes que a linha inimiga se reorganize.',
      'Meteor M é counter-ult primeiro e engage segundo. Se Iron Man, Hela, Punisher ou Star-Lord têm ultimate, seu Q precisa ficar guardado para negar a jogada deles.',
    ],
    systems: [
      {
        name: 'Iron Ring',
        input: 'Recurso',
        facts: [
          'Magneto ganha uma carga de Iron Ring para cada 100 de dano absorvido por Metal Bulwark ou Iron Bulwark.',
          'Mag-Cannon consome os anéis: 40 de dano com 1 carga, 65 com 2 e 90 com 3; em carga cheia também causa knockback de 6m.',
          'A recarga passiva atual é 3s por carga, mas o melhor Magneto acelera isso com bolhas colocadas no alvo que vai apanhar agora.',
        ],
      },
      {
        name: 'Bulwarks separados',
        input: 'E / F',
        facts: [
          'Desde o balance post de 2025-11-14, Metal Bulwark e Iron Bulwark não compartilham cooldown.',
          'Valores atuais oficiais: Metal Bulwark protege aliado por 200 de escudo, 2.5s, 20m de alcance e 15s de cooldown.',
          'Iron Bulwark protege o próprio Magneto por 200 de escudo, 2.5s e 10s de cooldown.',
        ],
      },
      {
        name: 'Meteor M',
        input: 'Q',
        facts: [
          'Absorve projéteis inimigos em raio de 15m e aumenta o dano do meteoro; absorver demais causa autodestruição.',
          'A versão atual arremessa o projétil a 45m/s, buff confirmado no balance post de 2026-03-20.',
          'Depois de ultar, use Magnetic Descent para cair em cobertura. Magneto aterrissa sem mobilidade real e vira alvo fácil se cair no aberto.',
        ],
      },
      {
        name: 'Royal Blade',
        input: 'C - Team-Up',
        facts: [
          'Com Gambit como âncora, Magneto recebe Royal Blade pelo Team-Up Explosive Entanglement.',
          'Royal Blade troca Iron Volley por Ace Greatsword por 10s, com explosão e dano secundário após curto atraso.',
          'Use como janela de pressão quando seu time precisa atravessar choke, não como substituto da economia de Iron Ring.',
        ],
      },
    ],
    roleGuides: {
      vanguard: {
        key: 'vanguard',
        label: 'Vanguard',
        nickname: 'Rei da bolha econômica',
        health: '650 HP',
        difficulty: 'Média: fácil sobreviver, difícil gastar cooldown no alvo certo',
        job: 'Controlar o midrange, converter foco inimigo em Iron Ring e negar ultimates de projétil.',
        verdict:
          'Escolha Magneto quando seu time precisa de front estável, proteção para dive/Strategist e resposta direta a ultimates de projétil. Evite quando o lobby inimigo é puro melee rápido e seu time não quer jogar perto de cobertura.',
        playstyle: [
          'Abra a luta no midrange, não colado. Iron Volley tem explosão maior no fim do alcance, então atire em chão, parede e canto de cover para forçar movimento sem se expor.',
          'Metal Bulwark é melhor no aliado que está prestes a receber dano, não no aliado que já saiu vivo. Bolhar Magik, Wolverine, Venom ou um Strategist sendo diveado transforma foco inimigo em Mag-Cannon para você.',
          'Use Iron Bulwark quando o melee entrou em você ou quando precisa completar o terceiro anel. Se gastar F cedo só por medo, você perde o botão que impede Wolverine/Thor/Iron Fist de te atravessar.',
        ],
        priorityKicker: 'Economia',
        priorityTitle: 'Ordem de decisão',
        priorityDescription:
          'Magneto não tem árvore de upgrade: a prioridade é decidir qual cooldown vira espaço, qual bolha vira anel e quando o Q fica guardado.',
        upgradePlan: [
          {
            rank: 1,
            input: 'E',
            ability: 'Metal Bulwark',
            label: 'bolha no alvo focado',
            why:
              'É o botão que ganha a próxima troca: salva o aliado que está criando espaço e converte o dano que ele tomaria em Iron Rings para seu Mag-Cannon.',
            swapWhen:
              'Se o dive inimigo entrou primeiro na sua cara, use Iron Bulwark antes e guarde E para o Strategist que será o próximo alvo.',
            sourceIds: ['official-magneto', 'official-magneto-s5', 'gamesgg-magneto', 'mobalytics-magneto'],
          },
          {
            rank: 2,
            input: 'RMB',
            ability: 'Mag-Cannon',
            label: 'gasto dos anéis',
            why:
              'Com 3 anéis, o knockback interrompe avanço, empurra melee para fora e cria tiro grátis de Iron Volley. O dano não tem cooldown; o limite é sua economia.',
            swapWhen:
              'Com 1 anel, segure se nenhum alvo está finalizável. Com 3 anéis, gaste rápido antes de desperdiçar nova absorção.',
            sourceIds: ['official-magneto', 'gamesgg-magneto', 'reddit-magneto-guide'],
          },
          {
            rank: 3,
            input: 'Shift',
            ability: 'Metallic Curtain',
            label: 'avanço e negação de projétil',
            why:
              'A cortina deixa você atravessar dano de projétil por tempo curto e sem vida de escudo para quebrar. Use para cruzar ângulo e negar burst visível, não para ficar parado fingindo ser parede.',
            swapWhen:
              'Contra melee ou beam, a cortina perde valor. Troque para jogo de cover, Iron Bulwark e Mag-Cannon de afastamento.',
            sourceIds: ['official-magneto', 'mobalytics-magneto', 'reddit-magneto-guide'],
          },
          {
            rank: 4,
            input: 'LMB',
            ability: 'Iron Volley',
            label: 'controle de espaço',
            why:
              'O tiro lento parece fraco quando você mira só no corpo. Ele vira ferramenta de lane quando explode perto de cover e obriga suporte/DPS a sair do canto.',
            swapWhen:
              'Contra alvo voador ou pequeno, mire onde ele vai estar no fim dos 25m, não onde ele está agora.',
            sourceIds: ['official-magneto', 'gamesgg-magneto', 'dexerto-magneto'],
          },
          {
            rank: 5,
            input: 'Q',
            ability: 'Meteor M',
            label: 'counter-ult',
            why:
              'Negar Iron Man, Hela, Punisher ou Star-Lord costuma ganhar mais luta do que abrir com Q no começo. A ultimate pune o inimigo por continuar atirando.',
            swapWhen:
              'Se nenhuma ultimate de projétil está disponível, use como engage acima do objetivo e solte antes de sobrecarregar.',
            sourceIds: ['official-magneto', 'official-magneto-s7', 'gamesgg-magneto', 'reddit-magneto-guide'],
          },
          {
            rank: 6,
            input: 'C',
            ability: 'Royal Blade',
            label: 'Team-Up com Gambit',
            why:
              'Quando disponível, adiciona pressão de espada explosiva por 10s. É excelente para choke e burst em alvo preso por knockback, mas não substitui bolha bem colocada.',
            swapWhen:
              'Se não há Gambit no time, ignore esse plano e jogue pelo loop base de bolha, anel e cannon.',
            sourceIds: ['official-magneto', 'official-magneto-s5'],
          },
        ],
        adaptations: [
          'Contra Wolverine, Thor e Iron Fist: não confie na Metallic Curtain. Guarde Iron Bulwark para o contato e use Mag-Cannon cheio para quebrar o avanço.',
          'Contra Iron Man, Hela, Punisher e Star-Lord: segure Meteor M até a ultimate deles aparecer; soltar Q primeiro remove sua resposta mais valiosa.',
          'Com dive aliado: Metal Bulwark no aliado que entrou fundo antes do burst inimigo, depois Mag-Cannon no alvo que ele está tentando finalizar.',
          'Contra poke longo: jogue em cover e use Iron Volley no chão/canto; Magneto perde valor quando tenta duelo de mira longa no aberto.',
        ],
        ultimates: [
          {
            stance: 'Counter-ult',
            name: 'Meteor M',
            bestUse:
              'Responder ultimates de projétil ou fogo sustentado. Iron Man, Hela, Punisher e Star-Lord alimentam o meteoro se você posiciona o raio de absorção na frente da ameaça.',
            execution:
              'Ative entre a fonte de projéteis e seu time, observe a carga e solte antes de sobrecarregar. Depois segure Space para cair em cobertura, não no centro do objetivo.',
            upgradeValue:
              'O patch de 2026-03-20 aumentou a velocidade do projétil para 45m/s, então o arremesso pune melhor quem demora a sair da área.',
          },
          {
            stance: 'Engage situacional',
            name: 'Meteor M',
            bestUse:
              'Iniciar quando o inimigo precisa escolher entre parar de atirar e deixar seu time andar, ou atirar e carregar seu dano.',
            execution:
              'Suba sobre o objetivo com seu time pronto para avançar. Solte com carga segura em vez de tentar o máximo e perder tudo por overload.',
            upgradeValue:
              'Vale menos que o counter-ult se o inimigo ainda tem ultimates de projétil disponíveis.',
          },
        ],
        dashGuide: {
          ability: 'Bolha -> anel -> Mag-Cannon',
          shortRule:
            'A coisa que Magneto precisa dominar é prever quem vai tomar dano nos próximos 2 segundos.',
          mechanics: [
            'Metal Bulwark protege aliado a 20m por 2.5s; Iron Bulwark protege você por 2.5s.',
            'Cada 100 de dano absorvido vira um Iron Ring. Tente terminar a troca com 2 ou 3 anéis, não com bolha gasta e cannon vazio.',
            'Mag-Cannon cheio empurra 6m. Use o empurrão para cancelar pressão melee, jogar alvo para fora de cura ou garantir Iron Volley logo depois.',
          ],
          drills: [
            'Antes da fight, diga mentalmente: “quem vai apanhar primeiro?”. Esse é o alvo do Metal Bulwark.',
            'Treine sequência E no aliado focado, Iron Volley, Mag-Cannon cheio, reposiciona atrás de cover.',
            'Contra melee, espere o leap/entrada conectar, F em você, passo para trás, Mag-Cannon para quebrar distância.',
          ],
        },
        patterns: [
          {
            title: 'Entrada de midrange',
            steps: [
              'Iron Volley no chão perto do cover inimigo.',
              'Metallic Curtain para cruzar o ângulo curto.',
              'Metal Bulwark no aliado que avançou com você.',
              'Mag-Cannon no alvo que gastou mobilidade ou ficou fora de cura.',
            ],
          },
          {
            title: 'Peel de backline',
            steps: [
              'Deixe o diver gastar entrada no seu Strategist.',
              'Metal Bulwark no Strategist, não em você.',
              'Iron Volley no chão para forçar desvio.',
              'Mag-Cannon cheio para empurrar o diver para fora da execução.',
            ],
          },
          {
            title: 'Counter-ult limpo',
            steps: [
              'Guarde Meteor M quando o inimigo tem ultimate de projétil.',
              'Ative entre a ultimate inimiga e seu time.',
              'Solte antes da sobrecarga, principalmente contra fogo muito rápido.',
              'Caia com Magnetic Descent em cover e recomece o loop de bolhas.',
            ],
          },
        ],
        mistakes: [
          'Usar Metal Bulwark tarde, quando o aliado já saiu do foco e ninguém vai carregar seus anéis.',
          'Gastar Mag-Cannon com 1 anel em tanque cheio enquanto um Duelist está prestes a entrar na sua backline.',
          'Tratar Metallic Curtain como escudo permanente; ela é janela curta de travessia e negação de projétil.',
          'Abrir Meteor M sem checar se Iron Man, Hela, Punisher ou Star-Lord ainda guardam ultimate.',
          'Cair depois do Q no aberto. Magneto sem cooldown e sem cover vira alvo grande demais.',
        ],
        evidence: [
          'official-magneto',
          'official-magneto-s5',
          'official-magneto-s7',
          'gamesgg-magneto',
          'mobalytics-magneto',
          'reddit-magneto-guide',
        ],
      },
    },
    sources: [
      {
        id: 'official-magneto',
        kind: 'official',
        title: 'MAGNETO - Marvel Rivals Hero Page',
        url: 'https://www.marvelrivals.com/20241123/41360_1195655.html',
        author: 'Marvel Rivals / NetEase',
        published: '2024-11-23',
        confidence: 'alta',
        takeaways: [
          'Fonte principal para role, vida, velocidade, Iron Volley, Meteor M, Metallic Curtain, Bulwarks, Mag-Cannon, Magnetic Descent e Royal Blade.',
          'Confirma Iron Ring: bolhas concedem 1 carga para cada 100 de dano absorvido.',
          'Valores atuais exibidos: 650 HP, Metal Bulwark 200 de escudo/15s, Iron Bulwark 200 de escudo/10s e Meteor M a 45m/s.',
        ],
      },
      {
        id: 'official-magneto-s5',
        kind: 'official',
        title: 'Marvel Rivals Version 20251114 Balance Post',
        url: 'https://www.marvelrivals.com/balancepost/20251112/41667_1270634.html',
        author: 'Marvel Rivals / NetEase',
        published: '2025-11-12',
        confidence: 'alta',
        takeaways: [
          'Separou os cooldowns de Metal Bulwark e Iron Bulwark, mudando o ritmo defensivo do Magneto.',
          'Reduziu o valor das duas bolhas para 200, tornando timing mais importante que spam.',
          'Adicionou Explosive Entanglement: Gambit concede Royal Blade ao Magneto.',
        ],
      },
      {
        id: 'official-magneto-s7',
        kind: 'official',
        title: 'Marvel Rivals Version 20260320 Balance Post',
        url: 'https://www.marvelrivals.com/balancepost/20260316/41667_1291227.html',
        author: 'Marvel Rivals / NetEase',
        published: '2026-03-17',
        confidence: 'alta',
        takeaways: [
          'Ajustou cooldowns atuais: Metal Bulwark 15s e Iron Bulwark 10s.',
          'Aumentou a velocidade do projétil de Meteor M de 30m/s para 45m/s.',
          'Contextualiza Magneto como personagem de lane pressure e ultimate mais letal.',
        ],
      },
      {
        id: 'wiki-magneto',
        kind: 'guide',
        title: 'Magneto - Marvel Rivals Wiki',
        url: 'https://marvelrivals.fandom.com/wiki/Magneto',
        confidence: 'media',
        takeaways: [
          'Confirma Magneto como Vanguard e registra o Team-Up atual Explosive Entanglement com Gambit e Rogue.',
          'Resumo de forças: defesa, proteção de aliados e bloqueio de projéteis.',
          'Útil como base pública de roster, imagens e histórico, mas a página oficial foi priorizada para valores.',
        ],
      },
      {
        id: 'gamesgg-magneto',
        kind: 'guide',
        title: 'Magneto Marvel Rivals Guide: Master the Master of Magnetism',
        url: 'https://games.gg/marvel-rivals/guides/magneto-marvel-rivals-guide/',
        author: 'Mostafa Salem',
        published: '2026-03-25',
        confidence: 'media',
        takeaways: [
          'Define o personagem por bubble economy, counter-ult timing e controle de midrange.',
          'Recomenda tratar Meteor M como counter-ult primeiro, engage segundo.',
          'Destaca Wolverine como matchup ruim e orienta usar bolha própria, knockback e kite para o time.',
        ],
      },
      {
        id: 'mobalytics-magneto',
        kind: 'guide',
        title: 'Marvel Rivals Magneto Character Guide',
        url: 'https://mobalytics.gg/marvel-rivals/magneto-guide',
        confidence: 'media',
        takeaways: [
          'Enfatiza rotação por cover e midrange como distância ideal do Magneto.',
          'Recomenda combinar Shift, E, F e cover para frontlinar, com decisões seletivas por causa dos gaps entre escudos.',
          'Observa que bolhar divers/flankers pode habilitar jogadas de alto valor.',
        ],
      },
      {
        id: 'dexerto-magneto',
        kind: 'guide',
        title: 'Marvel Rivals Magneto guide: Abilities, ultimate, tips, more',
        url: 'https://www.dexerto.com/gaming/marvel-rivals-magneto-guide-2837818/',
        author: 'Jeremy Gan',
        published: '2025-02-21',
        confidence: 'media',
        takeaways: [
          'Ajuda a explicar Magneto como Vanguard que define tempo e controla espaço.',
          'Reforça uso de Mag-Cannon cheio para knockback e burst.',
          'Parte dos números está defasada por patches posteriores, então foi usada para macro, não para valores atuais.',
        ],
      },
      {
        id: 'reddit-magneto-guide',
        kind: 'forum',
        title: 'The Idiots Guide to Magneto',
        url: 'https://www.reddit.com/r/marvelrivals/comments/1itf760/the_idiots_guide_to_magneto/',
        author: 'Noninstagramnormie',
        published: '2025-02',
        confidence: 'em disputa',
        takeaways: [
          'Relato de jogador detalha Mag-Cannon como ferramenta ofensiva e defensiva contra melee, além do combo com Iron Volley.',
          'Reforça Meteor M como resposta a ultimates de projétil e alerta para overcharge contra fogo rápido.',
          'Alguns valores e team-ups estão antigos; usei apenas padrões mecânicos que seguem válidos.',
        ],
      },
      {
        id: 'video-magneto-pending',
        kind: 'video-transcript',
        title: 'Transcrições de guias em vídeo do Magneto',
        url: 'https://www.youtube.com/results?search_query=Marvel+Rivals+Magneto+guide',
        confidence: 'pendente',
        takeaways: [
          'Slot reservado para vídeos de mains, VOD review e coach review com timestamps.',
          'Nenhuma transcrição auditável foi processada nesta carga.',
          'Próximo enriquecimento deve validar exemplos de counter-ult e bolha em dive coordenado.',
        ],
      },
    ],
    sourceCoverage: [
      {
        kind: 'official',
        label: 'Oficial',
        count: 3,
        status: 'Página oficial e balance posts recentes usados para valores atuais.',
      },
      {
        kind: 'guide',
        label: 'Guias/Wiki',
        count: 4,
        status: 'Usados para macro, economia de anéis, counters e leitura de midrange.',
      },
      {
        kind: 'forum',
        label: 'Fórum',
        count: 1,
        status: 'Usado com cautela para padrões práticos, não para números defasados.',
      },
      {
        kind: 'video-transcript',
        label: 'Vídeos',
        count: 0,
        status: 'Pendente: falta transcrição validada com timestamps.',
      },
    ],
  },
  {
    id: 'spider-man',
    name: 'Homem-Aranha',
    aliases: ['Spider-Man', 'Spiderman', 'Peter Parker', 'Spidey', 'Aranha', 'Webhead', 'Amigão da Vizinhança'],
    game: 'Marvel Rivals',
    portraitUrl: publicAsset('heroes/banners/spider_man.png'),
    bannerUrl: publicAsset('heroes/banners/spider_man.png'),
    selectionPortraitUrl: publicAsset('heroes/select/spider_man.png'),
    selectionHoverUrl: publicAsset('heroes/select/spider_man_champion.gif'),
    theme: {
      primary: '#e5313e',
      primaryRgb: '229, 49, 62',
      secondary: '#5ec7ff',
      secondaryRgb: '94, 199, 255',
      surface: '#11151f',
      surfaceRgb: '17, 21, 31',
    },
    roles: ['duelist'],
    lastVerified: '2026-05-14',
    confidenceSummary:
      'Valores base conferidos na página oficial e ajustados com balance posts até o patch anunciado para 2026-05-15. Guias e Reddit foram usados para execução, counters e decisão de combo, não para substituir números oficiais.',
    coreRead: [
      'A coisa que o Homem-Aranha precisa dominar para ficar bom é escolher o alvo antes de gastar a mobilidade: tag, entrada, burst e saída.',
      'Spider-Tracer é o interruptor do personagem. Sem tracer, Get Over Here puxa o inimigo; com tracer, você se joga nele. Essa diferença decide se a jogada isola um alvo ou te entrega no meio de seis.',
      'Ele não ganha luta longa. O valor vem de aparecer fora do ângulo, consumir tracer em Amazing Combo ou Spider-Power, finalizar o alvo já pressionado e sair com Web-Swing sobrando.',
    ],
    systems: [
      {
        name: 'Spider-Tracer',
        input: 'RMB',
        facts: [
          'Web-Cluster tem 5 cargas, recarrega uma carga a cada 2s, causa 30 de dano e aplica Spider-Tracer por 3s.',
          'Spider-Tracer adiciona 45 de dano quando consumido por Spider-Power ou Amazing Combo.',
          'Get Over Here muda completamente quando o alvo está marcado: em vez de puxar o inimigo, o Homem-Aranha se puxa até ele e acerta um chute.',
        ],
      },
      {
        name: 'Web-Swing',
        input: 'Shift',
        facts: [
          'Web-Swing tem 3 cargas, 30m de comprimento máximo e 6s de recarga por carga.',
          'A primeira carga cria ângulo, a segunda fecha ou corrige a rota, e uma carga precisa ficar reservada para saída quando a kill não veio.',
          'Wall Crawl e Thwip and Flip devem economizar Swing: subir parede ou ajustar altura sem gastar Shift deixa a rotação viva.',
        ],
      },
      {
        name: 'Spectacular Spin',
        input: 'Q',
        facts: [
          'Ultimate em esfera de 8m por 2.4s, com 250 de vida bônus e slow acumulativo ate stun.',
          'O balance post de 2026-05-12 anunciou aumento de 13.6 para 15 de dano por hit, total de 408 para 450 no patch 2026-05-15.',
          'Mesmo buffada, ela é melhor em alvo fraco/backline ja danificada do que em Vanguard cheio ou time com defensive ult pronta.',
        ],
      },
      {
        name: 'Parker Power-Up',
        input: 'C - Team-Up',
        facts: [
          'Desde a Season 6, Peni Parker libera Sticky Spider-Bomb para o Homem-Aranha.',
          'A bomba tem 3s de contagem, 10 de dano no contato, 30 no campo de explosão, aplica Spider-Tracer e tem 20s de cooldown.',
          'Se explodir na mão do Homem-Aranha, concede 50 de vida bônus e recarrega um Web-Cluster; use como recurso extra, não como motivo para entrar sem saída.',
        ],
      },
    ],
    roleGuides: {
      duelist: {
        key: 'duelist',
        label: 'Duelist',
        nickname: 'Dive de tracer',
        health: '250 HP',
        difficulty: 'Muito alta: mecânica, alvo e cooldown precisam alinhar',
        job: 'Punir alvo isolado, forçar peel da backline e sair antes que controle ou cura desfaçam o combo.',
        verdict:
          'Escolha Homem-Aranha quando o inimigo deixa suportes/Duelists jogarem separados ou quando seu time já pressiona vida para você finalizar. Evite insistir contra triplo suporte, muito stun ou backline agrupada em torno de Namor/Mantis/Invisible Woman.',
        playstyle: [
          'Antes de entrar, pergunte qual cooldown inimigo ainda te mata. Se Mantis tem sleep, Invisible Woman tem push ou Luna tem freeze, sua primeira entrada deve baitar esse botão, não morrer tentando clipar combo de treino.',
          'A entrada limpa costuma ser Swing por cima ou lateral, Web-Cluster para marcar, Get Over Here no alvo marcado e Amazing Combo no primeiro frame possível. O follow-up muda conforme distância, vida e cura recebida pelo alvo.',
          'Se o alvo sobreviveu e saiu do alcance, não force melee no chão. Reaplique Web-Cluster, use Swing/zip para pé, ou suma e reinicie com cooldowns em vez de virar 250 HP parado na backline inimiga.',
        ],
        priorityKicker: 'Execução',
        priorityTitle: 'Ordem da jogada',
        priorityDescription:
          'O Homem-Aranha não tem árvore de upgrade: a prioridade é construir uma janela curta de burst, ler se ela virou kill e manter uma saída real.',
        upgradePlan: [
          {
            rank: 1,
            input: 'RMB',
            ability: 'Web-Cluster',
            label: 'marca antes de tudo',
            why:
              'É o botão que liga o personagem. A marca adiciona 45 de dano quando consumida e transforma Get Over Here em entrada dirigida; sem ela, você gasta mobilidade sem burst suficiente.',
            swapWhen:
              'Se o alvo já está muito baixo e fora de posição, use Web-Cluster como finalizador seguro antes de se comprometer com E/F.',
            sourceIds: ['official-spider-man', 'wiki-spider-man', 'mobalytics-spider-man'],
          },
          {
            rank: 2,
            input: 'E',
            ability: 'Get Over Here!',
            label: 'puxar ou se puxar',
            why:
              'Com tracer, vira chute de entrada de 55 de dano e te coloca no alvo. Sem tracer, puxa alguém para você e pode isolar alvo de canto ou ponte; confundir esses dois modos é o erro que entrega a luta.',
            swapWhen:
              'Contra backline agrupada, use sem tracer para puxar alguém para fora em vez de voar para dentro do time inteiro.',
            sourceIds: ['official-spider-man', 'reddit-spider-counter', 'mobalytics-spider-man'],
          },
          {
            rank: 3,
            input: 'F',
            ability: 'Amazing Combo',
            label: 'uppercut que consome a marca',
            why:
              'É o burst mais importante depois da entrada. Com duas cargas e 6s de recarga por carga, ele permite matar ou levantar alvo para follow-up; usado sem tracer ou sem plano de saída, só te deixa no ar sem kill.',
            swapWhen:
              'Se o inimigo está esperando o E em linha reta, entre pelos pés com Swing/zip e use F para cruzar o alvo antes de consumir a segunda marca.',
            sourceIds: ['official-spider-man', 'mobalytics-spider-man', 'reddit-spider-combo'],
          },
          {
            rank: 4,
            input: 'Shift',
            ability: 'Web-Swing',
            label: 'ângulo e saída',
            why:
              'A mobilidade é sua defesa real. Gastar as três cargas para chegar transforma o melhor movimento do jogo em uma morte garantida quando a cura, stun ou knockback inimigo entra.',
            swapWhen:
              'Em mapa vertical, use Wall Crawl para staging e guarde Swing para reposicionar durante a briga.',
            sourceIds: ['official-spider-man', 'mobalytics-spider-man', 'gamesgg-spider-man'],
          },
          {
            rank: 5,
            input: 'Q',
            ability: 'Spectacular Spin',
            label: 'confirmação, não coin flip',
            why:
              'Com 250 de vida bônus, slow e stun acumulativo, a ultimate converte caos em kill quando você já entrou na backline. O buff anunciado para 2026-05-15 aumenta o dano total, mas não muda a regra: use depois de dano inicial ou defensive ult inimiga.',
            swapWhen:
              'Segure se Luna/Mantis/Invisible Woman ainda tem controle pronto ou se o alvo principal é Vanguard cheio.',
            sourceIds: ['official-spider-man', 'official-spider-man-s8', 'mobalytics-spider-man'],
          },
          {
            rank: 6,
            input: 'C',
            ability: 'Sticky Spider-Bomb',
            label: 'team-up com Peni',
            why:
              'Quando Peni esta no time, a bomba vira marca extra e pequeno buffer defensivo. Ela ajuda a iniciar ou reiniciar tracer sem gastar uma carga normal no timing errado.',
            swapWhen:
              'Se não há Peni Parker no time, ignore esse plano e jogue pelo ciclo base de Web-Cluster, E/F e Swing.',
            sourceIds: ['official-spider-man', 'official-spider-man-s6', 'wiki-spider-man'],
          },
        ],
        adaptations: [
          'Contra Mantis, Invisible Woman, Luna Snow e Adam Warlock: primeira entrada serve para forçar controle/peel; mate na segunda, quando o cooldown já saiu.',
          'Contra Namor ou setups com torreta/zona: não entre reto. Quebre recurso, jogue por flanco alto e aceite trocar de alvo se a área está armada.',
          'Contra triplo suporte ou backline grudada: vire finalizador de alvo já baixo, não assassino solo. Seu time precisa criar dano antes do seu dive.',
          'Com Peni Parker: Sticky Spider-Bomb dá uma marca extra; use para abrir alvo que vai receber Get Over Here ou para sair com vida bônus se a janela fechou.',
        ],
        ultimates: [
          {
            stance: 'Confirmação de backline',
            name: 'Spectacular Spin',
            bestUse:
              'Depois que um suporte ou Duelist já perdeu vida, mobilidade ou peel. Entre pelo alto/lateral, aplique dano inicial e use Q para prender a resposta.',
            execution:
              'Swing para ângulo, Web-Cluster, Get Over Here no alvo marcado, Amazing Combo e Q quando você está dentro de 8m de dois ou mais alvos frágeis. Se usar Q para abrir, o inimigo inteiro ainda tem botão para negar.',
            upgradeValue:
              'Patch 2026-05-15 anunciado: dano por hit sobe de 13.6 para 15, total de 408 para 450 em 2.4s. O buff aumenta kill pressure, mas não salva ultimate jogada em tanque cheio.',
          },
        ],
        dashGuide: {
          ability: 'Web-Cluster -> Get Over Here -> Amazing Combo',
          shortRule:
            'O combo bom não é o mais longo do treino: e o que mata ou sai antes do inimigo virar a camera.',
          mechanics: [
            'Web-Cluster marca por 3s; Get Over Here em alvo marcado puxa você até ele; Amazing Combo consome tracer e levanta o alvo.',
            'Get Over Here viaja em linha reta. Se o inimigo tem stun/push guardado, ele sabe exatamente quando te acertar.',
            'Depois do uppercut, decida por vida e distância: Web-Cluster finaliza, melee/overhead continua, Swing sai. Não transforme follow-up ruim em morte certa.',
          ],
          drills: [
            'Treine a decisão curta: tag + E + F, olhar HP, escolher Web-Cluster finalizador ou Swing de saída em menos de meio segundo.',
            'Treine entrada por parede: Wall Crawl até ângulo alto, Web-Cluster, E/F, sair com Shift sem tocar o chão no meio da backline.',
            'Contra bots com controle, pratique bait: Swing perto, cancelar rota, esperar cooldown inimigo, só depois entrar com tracer.',
          ],
        },
        patterns: [
          {
            title: 'Pick rápido em suporte isolado',
            steps: [
              'Staging por parede ou high ground sem gastar todas as cargas de Swing.',
              'Web-Cluster no suporte que está separado do tanque.',
              'Get Over Here no alvo marcado e Amazing Combo imediatamente.',
              'Finaliza com Web-Cluster/melee se a vida permite; se entrou cura ou peel, Swing para fora.',
            ],
          },
          {
            title: 'Bait contra backline preparada',
            steps: [
              'Apareça no ângulo para forçar sleep, push, freeze ou torreta.',
              'Saia sem gastar E/F quando o cooldown defensivo aparecer.',
              'Volte com tracer na janela em que o suporte esta sem resposta.',
              'Se a kill não veio em dois segundos, reinicie em vez de trocar dano no chão.',
            ],
          },
          {
            title: 'Ultimate sem desperdicio',
            steps: [
              'Espere defensive ult ou hard CC principal sair.',
              'Entre com dano inicial de tracer e uppercut.',
              'Ative Spectacular Spin dentro da backline, não em Vanguard cheio.',
              'Use vida bônus para completar a kill e Swing para sair antes do focus voltar.',
            ],
          },
        ],
        mistakes: [
          'Gastar todas as cargas de Web-Swing para chegar e descobrir que não sobrou fuga.',
          'Apertar Get Over Here sem saber se o alvo está marcado e entrar no meio do time quando a intenção era puxar.',
          'Insistir no combo completo de treino enquanto o alvo recebeu cura, knockback ou já saiu do alcance.',
          'Ultar em Vanguard cheio ou antes das defensive ults inimigas, transformando Q em dano bonito sem pick.',
          'Jogar como poke de Web-Cluster no midrange; o dano real vem de tracer consumido e burst curto.',
        ],
        evidence: [
          'official-spider-man',
          'official-spider-man-s8',
          'official-spider-man-s6',
          'wiki-spider-man',
          'mobalytics-spider-man',
          'marvelrivalsgg-spider-man',
          'gamesgg-spider-man',
          'reddit-spider-counter',
          'reddit-spider-combo',
        ],
      },
    },
    sources: [
      {
        id: 'official-spider-man',
        kind: 'official',
        title: 'SPIDER-MAN - Marvel Rivals Hero Page',
        url: 'https://www.marvelrivals.com/m/20241123/41360_1195680.html',
        author: 'Marvel Rivals / NetEase',
        published: '2024-11-23',
        confidence: 'alta',
        takeaways: [
          'Fonte principal para role, vida, velocidade, Web-Cluster, Spider-Tracer, Web-Swing, Get Over Here, Amazing Combo, Spectacular Spin e Sticky Spider-Bomb.',
          'Confirma 250 HP, Web-Cluster com 5 cargas/2s de recarga, tracer de 3s e bônus de 45 de dano.',
          'Confirma Web-Swing com 3 cargas e 6s de recarga, Get Over Here com 8s, Amazing Combo com 2 cargas e Spectacular Spin com 8m/2.4s/250 vida bônus.',
        ],
      },
      {
        id: 'official-spider-man-s8',
        kind: 'official',
        title: 'Marvel Rivals Version 20260515 Balance Post',
        url: 'https://www.marvelrivals.com/balancepost/20260512/41667_1299947.html',
        author: 'Marvel Rivals / NetEase',
        published: '2026-05-12',
        confidence: 'alta',
        takeaways: [
          'Anuncia buff de Spectacular Spin para a versão 2026-05-15.',
          'Dano por hit da ultimate sobe de 13.6 para 15.',
          'Dano total da duração de 2.4s sobe de 408 para 450.',
        ],
      },
      {
        id: 'official-spider-man-s6',
        kind: 'official',
        title: 'Marvel Rivals Version 20260116 Balance Post',
        url: 'https://www.marvelrivals.com/20260115/41525_1281488.html',
        author: 'Marvel Rivals / NetEase',
        published: '2026-01-13',
        confidence: 'alta',
        takeaways: [
          'Removeu Ever-Burning Bond com Human Torch, evitando guias antigos que ainda recomendam Inferno Blast.',
          'Introduziu Parker Power-Up: Peni Parker libera Sticky Spider-Bomb para Spider-Man.',
          'Confirma Peni como âncora do team-up e bônus de vida para Peni. Valores da bomba foram cruzados com página oficial/wiki. ',
        ],
      },
      {
        id: 'wiki-spider-man',
        kind: 'database',
        title: 'Spider-Man - The Marvel Rivals Wiki',
        url: 'https://marvelrivals.wiki.gg/wiki/Spider-Man',
        confidence: 'media',
        takeaways: [
          'Complementa a página oficial com resumo público de Spider-Tracer, Web-Swing, Amazing Combo, Spectacular Spin e Sticky Spider-Bomb.',
          'Marca Suit Expulsion/antigo team-up como indisponivel na temporada atual, alinhado ao balance post oficial de 2026-01-16.',
          'Usado como conferência secundária para valores e nome dos sistemas, não como fonte final quando havia número oficial mais recente.',
        ],
      },
      {
        id: 'mobalytics-spider-man',
        kind: 'guide',
        title: 'Marvel Rivals Spider-Man Character Guide',
        url: 'https://mobalytics.gg/marvel-rivals/spider-man-guide',
        confidence: 'media',
        takeaways: [
          'Define Spider-Man como glass cannon de mobilidade, burst e 1v1, com muito downtime quando cooldowns estão fora.',
          'Recomenda procurar alvos isolados, engajar/desengajar constantemente e não usar todas as cargas de Web-Swing para entrar.',
          'Parte dos valores numéricos está defasada por patches posteriores, então a fonte foi usada para fundamentos e não para números atuais.',
        ],
      },
      {
        id: 'marvelrivalsgg-spider-man',
        kind: 'guide',
        title: 'Spider-Man Guide: How to Play, Combos, & Counters',
        url: 'https://marvelrivals.gg/spider-man-guide/',
        author: 'Theo',
        published: '2025-03-09',
        confidence: 'media',
        takeaways: [
          'Resume Spider-Man como Duelist melee de mobilidade extrema que cria ângulos inesperados e joga por Spider-Tracer.',
          'Lista combos centrais como Web-Cluster, Get Over Here, Amazing Combo, ataques basicos e ultimate setup por high ground.',
          'Usado para macro de posicionamento, alvo e counters; team-ups antigos foram desconsiderados quando conflitam com balance oficial recente.',
        ],
      },
      {
        id: 'gamesgg-spider-man',
        kind: 'guide',
        title: 'Spider-Man Marvel Rivals Guide: Master the Web-Slinger',
        url: 'https://games.gg/marvel-rivals/guides/spider-man-marvel-rivals-guide/',
        author: 'Mostafa Salem',
        published: '2026-03-25',
        confidence: 'media',
        takeaways: [
          'Enfatiza que o gap entre entrar e morrer em dois segundos versus desmontar backline vem de movimento, alvo e execução.',
          'Recomenda entrada por ângulo, leitura de alvo isolado, checagem de cooldown antes do dive e ajustes de controle para console.',
          'Algumas referências comunitárias são amplas, então usei apenas princípios mecânicos consistentes com fontes oficiais e outros guias.',
        ],
      },
      {
        id: 'reddit-spider-counter',
        kind: 'forum',
        title: 'How to counter a spider-man',
        url: 'https://www.reddit.com/r/marvelrivals/comments/1jyci5r/how_to_counter_a_spiderman/',
        author: 'nicolay719',
        published: '2025-03',
        confidence: 'em disputa',
        takeaways: [
          'Relato de main destaca que ver o ícone de Spider-Tracer significa preparar resposta ao Get Over Here em linha reta e uppercut.',
          'Cita Mantis, Invisible Woman, Adam Warlock e Luna Snow como respostas práticas por sleep, push, burst ou freeze.',
          'Usei como leitura de counterplay e adaptação, não como prova de balance absoluto.',
        ],
      },
      {
        id: 'reddit-spider-combo',
        kind: 'forum',
        title: 'Help w/ spider man combo',
        url: 'https://www.reddit.com/r/marvelrivals/comments/1i6drt5/help_w_spider_man_combo/',
        confidence: 'em disputa',
        takeaways: [
          'Discussão de combo reforça que combos de treino nem sempre entram em partida real.',
          'A recomendação mais útil é decidir depois do tracer/E/F se vale continuar com webs, zip aos pés ou sair.',
          'Foi usada para transformar o guia em decisão curta de fight, não em lista de combos irreais.',
        ],
      },
      {
        id: 'video-spider-man-pending',
        kind: 'video-transcript',
        title: 'Transcrições de guias em vídeo do Homem-Aranha',
        url: 'https://www.youtube.com/results?search_query=Marvel+Rivals+Spider-Man+guide+Necros+combo',
        confidence: 'pendente',
        takeaways: [
          'Slot reservado para VODs, guias de mains e coach reviews com timestamps.',
          'Nenhuma transcrição auditável foi processada nesta carga; o app não inventa dado de vídeo sem texto verificável.',
          'Próximo enriquecimento deve separar rotas de combo por PC/controle e exemplos de partidas recentes pós-buff da ultimate.',
        ],
      },
    ],
    sourceCoverage: [
      {
        kind: 'official',
        label: 'Oficial',
        count: 3,
        status: 'Página oficial e balance posts usados para valores atuais e team-up vigente.',
      },
      {
        kind: 'database',
        label: 'Database',
        count: 1,
        status: 'Wiki pública usada como conferência secundária de kit e team-up.',
      },
      {
        kind: 'guide',
        label: 'Guias',
        count: 3,
        status: 'Usados para macro, combos práticos, cooldown discipline e counters.',
      },
      {
        kind: 'forum',
        label: 'Forum',
        count: 2,
        status: 'Usado com cautela para experiencia de mains e counterplay real.',
      },
      {
        kind: 'video-transcript',
        label: 'Videos',
        count: 0,
        status: 'Pendente: falta transcrição validada com timestamps.',
      },
    ],
  },
  {
    id: 'cloak-dagger',
    name: 'Manto e Adaga',
    aliases: ['Cloak & Dagger', 'Cloak and Dagger', 'Ty Johnson', 'Tandy Bowen', 'C&D', 'CnD'],
    game: 'Marvel Rivals',
    portraitUrl: publicAsset('heroes/banners/cloak_and_dagger.png'),
    bannerUrl: publicAsset('heroes/banners/cloak_and_dagger.png'),
    selectionPortraitUrl: publicAsset('heroes/select/cloak_and_dagger.png'),
    selectionHoverUrl: publicAsset('heroes/select/cloak_and_dagger_champion.gif'),
    theme: {
      primary: '#5b4a88',
      primaryRgb: '91, 74, 136',
      secondary: '#e8ecff',
      secondaryRgb: '232, 236, 255',
      surface: '#14141d',
      surfaceRgb: '20, 20, 29',
    },
    roles: ['strategist'],
    lastVerified: '2026-05-14',
    confidenceSummary:
      'Valores atuais conferidos na página oficial e nos balance posts recentes; guias e Reddit foram usados para decisão de ritmo, não para números quando havia conflito.',
    coreRead: [
      'Manto e Adaga fica bom quando você troca de forma por motivo, não por hábito: Dagger estabiliza a barra, Cloak cria a janela, Dagger volta com recarga e cura.',
      'A próxima luta geralmente é vencida por uma sequência curta: Veil no seu time, Storm no chao onde a briga vai acontecer, Shift para Cloak, Terror Cape no alvo focado e Dark Teleportation guardado para burst/ultimate.',
      'Eternal Bond é ultimate de trilha de cura. Se você usa para tentar matar, entrega o maior valor do personagem; se cruza o ponto e termina em cobertura, compra tempo para seu time ganhar a troca.',
    ],
    systems: [
      {
        name: 'Dagger uptime',
        input: 'Dagger',
        facts: [
          'Lightforce Dagger tem 12 munições, efeito de atração para o alvo perto da mira e cura em área no impacto.',
          'Dagger Storm cria campo de cura por 6s, com cura inicial de 60 ao criar o campo e 45/s dentro da área.',
          'Veil of Lightforce cura 45 e aplica 15% de healing boost por 4s; use antes de uma janela em que você vai sair de Dagger.',
        ],
      },
      {
        name: 'Cloak window',
        input: 'Cloak',
        facts: [
          'Darkforce Cloak causa 80/s em até 20m com alvo próximo da mira e não exige munição.',
          'Terror Cape causa 55, cega por 1.5s e aplica 28% de vulnerabilidade por 3s; é o botão que transforma pressão do time em pick.',
          'Dark Teleportation deixa aliados em 10m invisíveis e untargetable por 2s, com boost de movimento. Guarde para burst, dive ou ultimate inimiga, não para rotação bonita.',
        ],
      },
      {
        name: 'Shared rhythm',
        input: 'SHIFT',
        facts: [
          'Trocar de forma é instantâneo e recarrega a primária ao voltar, então a troca também é uma decisão de uptime.',
          'Veil of Lightforce e Terror Cape agora compartilham 2 cargas com 10s de recarga e 2s de trava curta entre usos.',
          'A melhor pergunta durante a fight é: meu time ainda precisa de cura direta agora ou já posso usar Cloak para negar a resposta inimiga?',
        ],
      },
      {
        name: 'Eternal Bond',
        input: 'Q',
        facts: [
          'A ultimate executa quatro dashes e deixa trilhas que curam aliados por 250/s e causam 30/s a inimigos.',
          'A duração atual foi reduzida para 11s no balance post de 2026-04-17.',
          'As trilhas devem cobrir rotas diferentes; passar quatro vezes no mesmo caminho desperdiça área e deixa sua saída previsível.',
        ],
      },
    ],
    roleGuides: {
      strategist: {
        key: 'strategist',
        label: 'Strategist',
        nickname: 'Ritmo luz/sombra',
        health: '275 HP',
        difficulty: 'Alta: duas barras de cooldown, uma só decisão errada',
        job: 'Manter o time vivo tempo suficiente para Cloak aplicar vulnerabilidade, fase ou limpeza de alvo.',
        verdict:
          'Escolha Manto e Adaga quando seu time briga agrupado, precisa de sustain constante e ainda quer um suporte que puna dive. Evite jogar como healbot fixo ou como Duelist escondido: o valor esta na troca certa.',
        playstyle: [
          'Comece quase toda luta como Dagger. Use Lightforce Dagger para estabilizar barras, jogue Dagger Storm onde o brawl vai acontecer e alinhe Veil of Lightforce quando aliados estiverem entrando ou tomando poke.',
          'Troque para Cloak quando a barra do time permite: Terror Cape no alvo que seu Vanguard/Duelist ja esta batendo, Darkforce Cloak para completar dano e Dark Teleportation guardado para cancelar burst, dive ou ultimate.',
          'Depois da janela de Cloak, volte para Dagger antes da cura atrasar. A volta recarrega a primária e impede que você fique olhando kill enquanto seu time perde vida.',
        ],
        priorityKicker: 'Ritmo',
        priorityTitle: 'Ordem da jogada',
        priorityDescription:
          'Manto e Adaga não tem árvore de upgrade. A prioridade é uma cadência: preparar cura, criar vulnerabilidade, proteger a resposta e voltar para cura antes que a troca vire contra você.',
        upgradePlan: [
          {
            rank: 1,
            input: 'LMB',
            ability: 'Lightforce Dagger',
            label: 'barra estavel primeiro',
            why:
              'É seu baseline de tempo. O homing e a cura em área mantêm flanker e frontline vivos sem exigir mira perfeita; se essa base falha, Cloak entra tarde demais e vira desespero.',
            swapWhen:
              'Se todos estão cheios e seu time está pressionando, esvazie parte da munição e troque para Cloak para usar o reload grátis na volta.',
            sourceIds: ['official-cloak-dagger', 'wiki-cloak-dagger', 'mobalytics-cloak-dagger'],
          },
          {
            rank: 2,
            input: 'RMB',
            ability: 'Dagger Storm',
            label: 'campo onde a luta vai ficar',
            why:
              'A cura inicial de 60 mais 45/s por 6s compra a janela em que você pode olhar para outra coisa. Jogue no chão do brawl, na chegada do dive ou onde você vai pousar depois de fase.',
            swapWhen:
              'Se o time inimigo tem dive guardado, não gaste Storm só para completar barra cheia; ela pode ser sua cura de emergência depois do Dark Teleportation.',
            sourceIds: ['official-cloak-dagger', 'official-cloak-dagger-s6', 'reddit-cloak-solo'],
          },
          {
            rank: 3,
            input: 'E',
            ability: 'Veil of Lightforce',
            label: 'buff antes da troca',
            why:
              'O healing boost de 15% por 4s aumenta todas as curas recebidas. Use quando aliados estão cruzando choke, entrando no ponto ou quando outro Strategist vai despejar cura.',
            swapWhen:
              'Se você precisa punir um alvo imediatamente, use Terror Cape primeiro; Veil e Terror compartilham carga, então a ordem decide a fight.',
            sourceIds: ['official-cloak-dagger', 'official-cloak-dagger-s6', 'mobalytics-cloak-dagger'],
          },
          {
            rank: 4,
            input: 'E',
            ability: 'Terror Cape',
            label: 'blind + 28% vulnerabilidade',
            why:
              'É o V principal ofensivo: acerte no alvo que já está sob foco e a próxima janela de dano vale mais. Usar em tanque cheio sem follow-up só gasta a carga que poderia virar pick.',
            swapWhen:
              'Antecipe se o diver entrou na sua backline; cegar e vulnerabilizar o alvo que pulou em você pode ganhar o duelo sem abandonar seu time por muito tempo.',
            sourceIds: ['official-cloak-dagger', 'mobalytics-cloak-dagger', 'reddit-cloak-intermediate'],
          },
          {
            rank: 5,
            input: 'RMB',
            ability: 'Dark Teleportation',
            label: 'fase para negar burst',
            why:
              'Dois segundos untargetable em 10m vencem mais fights que dano extra. Use contra ultimates, foco coordenado, dive na backline ou para ganhar high ground e pousar com Dagger Storm.',
            swapWhen:
              'Se é overtime e seu time precisa tocar ponto/carga, cuidado: comunidade relata que a fase pode atrapalhar contestação enquanto aliados estão untargetable.',
            sourceIds: ['official-cloak-dagger', 'reddit-cloak-solo', 'reddit-cloak-intermediate'],
          },
          {
            rank: 6,
            input: 'Q',
            ability: 'Eternal Bond',
            label: 'trilha de cura, não chase',
            why:
              'Com 250/s de cura e 30/s de dano, o valor é sustentar área e contestar, não perseguir kill. Espalhe as trilhas e termine em lugar seguro.',
            swapWhen:
              'Se Hawkeye, Magneto ou outro burst grande ainda está livre, espere cobertura ou use Dark Teleportation antes/depois; a ultimate ainda pode morrer para dano instantâneo.',
            sourceIds: ['official-cloak-dagger', 'official-cloak-dagger-s75', 'mobalytics-cloak-dagger'],
          },
        ],
        adaptations: [
          'Contra dive de Spider-Man, Black Panther, Magik ou Iron Fist: segure Storm e Dark Teleportation para você; sobreviver ao primeiro salto vale mais que buffar o poke.',
          'Contra brawl agrupado: Storm + Veil antes da colisão, Shift, Terror Cape no alvo do Vanguard e volta para Dagger assim que barras caem.',
          'Contra burst/ultimate de Iron Man, Jeff, Thor, Magneto ou Punisher: pense em Dark Teleportation como counter-ult de 2s, não como mobilidade qualquer.',
          'Com Hawkeye no time: o team-up From Shadow to Light melhora Crescent Slash com onda que cura aliados e aplica vulnerabilidade em inimigos; ainda assim, não force composição ruim só pelo bônus.',
        ],
        ultimates: [
          {
            stance: 'Controle de ponto',
            name: 'Eternal Bond',
            bestUse:
              'Quando a luta vai acontecer em area definida: ponto, payload, choke ou peel da backline. Use para atravessar a zona que seu time precisa ocupar.',
            execution:
              'Dash 1 cobre entrada, dash 2 corta o centro da fight, dash 3 fecha rota de recuo ou peel, dash 4 termina em cobertura ou junto do seu time. Evite empilhar todas as trilhas no mesmo caminho.',
            upgradeValue:
              'Patch 2026-04-17 reduziu a duração de 13s para 11s; por isso a ultimate precisa ser usada no timing da colisão, não cedo demais.',
          },
        ],
        dashGuide: {
          ability: 'SHIFT de ritmo + Dark Teleportation',
          shortRule:
            'Troca boa dura uma janela. Troca ruim vira ausencia de cura enquanto a fight desaba.',
          mechanics: [
            'SHIFT não tem custo de execução relevante, mas muda quais cooldowns estão disponíveis; preveja se o próximo botão precisa ser cura, vulnerabilidade ou fase.',
            'Dark Teleportation dura 2s e cobre aliados em 10m. Use com câmera já apontada para cobertura, high ground ou rota de pouso com Dagger Storm.',
            'Voltar para Dagger recarrega a primária, então uma microjanela de Cloak também resolve reload sem perder pressão.',
          ],
          drills: [
            'Treine ciclo curto: Dagger Storm no chão, Shift, Terror Cape no bot focado, um segundo de Darkforce Cloak, Shift de volta.',
            'Treine anti-dive: ao ser pulado, Dark Teleportation para cima/cobertura, Dagger Storm no pouso, Terror Cape no perseguidor se ele continuar.',
            'Treine ultimate: quatro dashes em linhas diferentes e ultimo dash sempre terminando seguro.',
          ],
        },
        patterns: [
          {
            title: 'Brawl agrupado no objetivo',
            steps: [
              'Dagger Storm onde seu Vanguard vai estabilizar.',
              'Veil of Lightforce atravessando dois ou mais aliados.',
              'Shift para Cloak e Terror Cape no alvo que seu time ja focou.',
              'Volte para Dagger quando duas barras aliadas caírem ou quando Terror Cape não gerou pick.',
            ],
          },
          {
            title: 'Dive na sua backline',
            steps: [
              'Não panique usando tudo para frente; guarde Storm e fase para você.',
              'Dark Teleportation para sair da linha e ganhar altura/cobertura.',
              'Dagger Storm no pouso para self-sustain.',
              'Se o diver continuar, Terror Cape + Darkforce Cloak; se ele recuar, volte a curar o time.',
            ],
          },
          {
            title: 'Eternal Bond sem desperdicio',
            steps: [
              'Espere a luta encostar no ponto ou no choke.',
              'Cruze as trilhas em areas diferentes para cobrir rota de entrada e recuo.',
              'Não chase o alvo fora da área; o dano da trilha é baixo.',
              'Termine o quarto dash perto do time ou em cobertura para não morrer quando a câmera inimiga virar.',
            ],
          },
        ],
        mistakes: [
          'Ficar em Cloak só porque está causando dano, enquanto a cura de Dagger deixou de existir.',
          'Usar Terror Cape sem follow-up e depois descobrir que Veil não está disponível para salvar o push.',
          'Gastar Dark Teleportation para andar mais rápido e não ter resposta para dive ou ultimate.',
          'Ultar para perseguir kill. Eternal Bond cura muito mais do que mata.',
          'Empilhar todos os dashes da ultimate na mesma trilha, criando buraco de área e saída previsível.',
        ],
        evidence: [
          'official-cloak-dagger',
          'official-cloak-dagger-s75',
          'official-cloak-dagger-s6',
          'official-cloak-dagger-s2',
          'wiki-cloak-dagger',
          'mobalytics-cloak-dagger',
          'gamesgg-cloak-dagger',
          'beebom-cloak-dagger',
          'reddit-cloak-solo',
          'reddit-cloak-intermediate',
        ],
      },
    },
    sources: [
      {
        id: 'official-cloak-dagger',
        kind: 'official',
        title: 'CLOAK&DAGGER - Marvel Rivals Hero Page',
        url: 'https://www.marvelrivals.com/20241204/41360_1198095.html',
        author: 'Marvel Rivals / NetEase',
        published: '2024-12-04',
        confidence: 'alta',
        takeaways: [
          'Fonte principal para vida 275, Darkforce Cloak 80/s, Lightforce Dagger 18 de dano e 16/16 de cura.',
          'Confirma Terror Cape com 55 de dano, 1.5s de blind, 28% de vulnerabilidade por 3s e Veil com 45 de cura + 15% healing boost.',
          'Confirma Eternal Bond como quatro dashes com trilhas de 250/s de cura, 30/s de dano, raio de 4m, 15m de comprimento e custo 4500.',
        ],
      },
      {
        id: 'official-cloak-dagger-s75',
        kind: 'official',
        title: 'Marvel Rivals Version 20260417 Balance Post',
        url: 'https://www.marvelrivals.com/balancepost/20260414/41667_1295988.html',
        author: 'Marvel Rivals / NetEase',
        published: '2026-04-14',
        confidence: 'alta',
        takeaways: [
          'Balance post atual reduziu Eternal Bond de 13s para 11s.',
          'Usado para corrigir guias que ainda tratam a ultimate como janela longa demais.',
          'Reforça que a ultimate precisa ser usada no timing da fight, não como preparo distante.',
        ],
      },
      {
        id: 'official-cloak-dagger-s6',
        kind: 'official',
        title: 'Marvel Rivals Version 20260116 Balance Post',
        url: 'https://www.marvelrivals.com/20260115/41525_1281488.html',
        author: 'Marvel Rivals / NetEase',
        published: '2026-01-13',
        confidence: 'alta',
        takeaways: [
          'Dagger Storm caiu de 55/s para 45/s, mas ganhou cura inicial de 60 ao criar o campo.',
          'Veil of Lightforce e Terror Cape passaram a compartilhar 2 cargas, 10s de recarga e 2s de cooldown entre usos.',
          'Esse patch torna a ordem Veil versus Terror Cape uma decisão real, não dois botões independentes para gastar sem pensar.',
        ],
      },
      {
        id: 'official-cloak-dagger-s2',
        kind: 'official',
        title: 'Marvel Rivals Version 20250430 Balance Post',
        url: 'https://www.marvelrivals.com/balancepost/20250428/41667_1231266.html',
        author: 'Marvel Rivals / NetEase',
        published: '2025-04-30',
        confidence: 'alta',
        takeaways: [
          'Aumentou Darkforce Cloak de 75/s para 80/s.',
          'Aumentou o dano de Lightforce Dagger de 15 para 18.',
          'Usado para reconciliar guias antigos com a página oficial atualizada.',
        ],
      },
      {
        id: 'wiki-cloak-dagger',
        kind: 'database',
        title: 'Cloak & Dagger - Marvel Rivals Wiki',
        url: 'https://marvelrivals.fandom.com/wiki/Cloak_%26_Dagger',
        confidence: 'media',
        takeaways: [
          'Confere role Strategist, 275 HP, nomes das formas e descrição de funcionamento geral.',
          'Explica que Dagger tende a ser a forma de cura e Cloak a forma de dano/debuff, com Dagger sempre iniciando as partidas.',
          'Usado como database secundário e para leitura de forças/fraquezas, não para substituir valores oficiais.',
        ],
      },
      {
        id: 'mobalytics-cloak-dagger',
        kind: 'guide',
        title: 'Marvel Rivals Cloak and Dagger Character Guide',
        url: 'https://mobalytics.gg/marvel-rivals/cloak-and-dagger-guide',
        confidence: 'media',
        takeaways: [
          'Recomenda usar a ultimate principalmente para cura, não para dano.',
          'Enfatiza que ficar tempo demais em uma forma causa tunnel vision; o valor vem de alternar cura, dano e utilidade.',
          'Alguns números da página estão defasados, então a fonte foi usada para fundamentos e dicas de uso, não para valores atuais.',
        ],
      },
      {
        id: 'gamesgg-cloak-dagger',
        kind: 'guide',
        title: 'Cloak & Dagger Marvel Rivals Guide: Abilities, Stats & Best Team Comps',
        url: 'https://games.gg/marvel-rivals/guides/cloak-dagger-marvel-rivals-guide/',
        author: 'Mostafa Salem',
        published: '2026-03-25',
        confidence: 'media',
        takeaways: [
          'Resume o personagem como suporte flexivel que pune jogadores que tratam o kit como point-and-heal simples.',
          'Destaca Dagger como sustain e Cloak como pressão/debuff, com comps agrupadas e segundo Strategist de burst como bons pares.',
          'Usado para macro de composição, skill-expression gap e ideia de ritmo entre formas.',
        ],
      },
      {
        id: 'beebom-cloak-dagger',
        kind: 'guide',
        title: 'Marvel Rivals Cloak and Dagger Guide: Abilities, Tips, Tricks, and More',
        url: 'https://beebom.com/marvel-rivals-cloak-dagger-guide/',
        author: 'Ishan Adhikary',
        published: '2025-05-28',
        confidence: 'media',
        takeaways: [
          'Reforça o truque de troca para recarregar a primária e manter uptime.',
          'Recomenda combinar cura e pressão em sequência, aproveitando cooldowns separados por forma.',
          'Valores numéricos antigos foram filtrados quando conflitam com fonte oficial atual.',
        ],
      },
      {
        id: 'reddit-cloak-solo',
        kind: 'forum',
        title: 'Cloak and Dagger Solo Queue Guide (Thread)',
        url: 'https://www.reddit.com/r/marvelrivals/comments/1hvhvqr/cloak_and_dagger_solo_queue_guide_thread/',
        confidence: 'em disputa',
        takeaways: [
          'Relato comunitário prioriza Dagger como baseline e Cloak quando barras estão cheias, Terror Cape está pronto ou Dark Teleportation precisa negar ultimates.',
          'Sugere usar a troca para recarregar Dagger e escolher se continua dano ou volta a curar pela leitura de vida do time.',
          'Lista Dark Teleportation como resposta a muitas ultimates; foi usado como experiência de main, não prova absoluta de todas as interações.',
        ],
      },
      {
        id: 'reddit-cloak-intermediate',
        kind: 'forum',
        title: 'Intermediate Cloak & Dagger guide',
        url: 'https://www.reddit.com/r/marvelrivals/comments/1hfdh0m/intermediate_cloak_dagger_guide/',
        confidence: 'em disputa',
        takeaways: [
          'Comunidade reforça que a prioridade ainda é cura, mas Cloak pode finalizar alvo sem proteção ou expulsar diver.',
          'Comentários de mains descrevem rota anti-dive: fase para altura/cobertura, Storm no pouso, Terror Cape se o perseguidor continuar.',
          'Inclui alerta situacional sobre fase em overtime e contestação de objetivo; tratado como observação comunitária a validar em jogo.',
        ],
      },
      {
        id: 'video-cloak-dagger-pending',
        kind: 'video-transcript',
        title: 'Transcrições de guias e VODs de Manto e Adaga',
        url: 'https://www.youtube.com/results?search_query=Marvel+Rivals+Cloak+and+Dagger+guide+Season+7',
        confidence: 'pendente',
        takeaways: [
          'Slot reservado para guias em video, VODs de high rank e coach reviews com timestamps.',
          'Nenhuma transcrição auditável foi processada nesta carga; o app não inventa dado de vídeo sem texto verificável.',
          'Próximo enriquecimento deve separar exemplos de timing de Dark Teleportation contra ultimates e rotas de Eternal Bond por mapa.',
        ],
      },
    ],
    sourceCoverage: [
      {
        kind: 'official',
        label: 'Oficial',
        count: 4,
        status: 'Página oficial e três balance posts usados para valores atuais, carga compartilhada e duração da ultimate.',
      },
      {
        kind: 'database',
        label: 'Database',
        count: 1,
        status: 'Wiki pública usada para conferência secundária de role, kit e mudanças históricas.',
      },
      {
        kind: 'guide',
        label: 'Guias',
        count: 3,
        status: 'Usados para ritmo, composição, uptime, reload por troca e prioridades práticas.',
      },
      {
        kind: 'forum',
        label: 'Forum',
        count: 2,
        status: 'Usado com cautela para experiencia de mains, anti-dive, overtime e counter-ult.',
      },
      {
        kind: 'video-transcript',
        label: 'Videos',
        count: 0,
        status: 'Pendente: falta transcrição validada com timestamps.',
      },
    ],
  },
  {
    id: 'magik',
    name: 'Magia',
    aliases: ['Magik', 'Illyana Rasputin', 'Darkchild', 'Feiticeira de Limbo', 'Ilyana', 'Soul Sorceress'],
    game: 'Marvel Rivals',
    portraitUrl: publicAsset('heroes/banners/magik.png'),
    bannerUrl: publicAsset('heroes/banners/magik.png'),
    selectionPortraitUrl: publicAsset('heroes/select/magik.png'),
    selectionHoverUrl: publicAsset('heroes/select/magik_champion.gif'),
    theme: {
      primary: '#9b3bc4',
      primaryRgb: '155, 59, 196',
      secondary: '#f5c518',
      secondaryRgb: '245, 197, 24',
      surface: '#140b24',
      surfaceRgb: '20, 11, 36',
    },
    roles: ['duelist'],
    lastVerified: '2026-05-13',
    confidenceSummary:
      'Kit conferido na pagina oficial e cruzado com wiki e guias de mains. Valores de dano e cooldown validados; mecanicas de animation cancel e invulnerabilidade no portal confirmadas em multiplos guias e relatos de jogadores.',
    coreRead: [
      'Magia e a unica Duelista do jogo com invulnerabilidade real durante a mobilidade: enquanto esta dentro do Stepping Discs, nenhum projetil a acerta.',
      'A passiva Limbo\'s Might converte 30% do dano causado em HP bonus (cap de +150). Se ela esta acertando, sobrevive; se erra, morre facil com 250 HP base.',
      'O animation cancel de Soulsword com Quick Melee e o diferencial tecnico mais importante: sem ele, o DPS cai pela metade. Use todas as habilidades antes de ativar Darkchild para aproveitar o reset de cooldowns.',
    ],
    systems: [
      {
        name: 'Limbo\'s Might',
        input: 'Passiva',
        facts: [
          'Converte 30% de todo dano causado em HP bonus, com cap de +150.',
          'HP bonus torna a Magia efetivamente um alvo de 400 HP quando esta acertando constantemente.',
          'A passiva exige agressividade: sem dano continuo, a Magia fica fragil com apenas 250 HP base.',
        ],
      },
      {
        name: 'Stepping Discs',
        input: 'E',
        facts: [
          '2 cargas, 6s de cooldown por carga (3s durante Darkchild). A Magia e completamente imune a dano dentro do portal.',
          'Nos 3 segundos apos sair do portal: [key:LMB] executa Eldritch Whirl (spin 360 graus em area); [key:RMB] invoca Demon\'s Rage (demonio estacionario de Limbo).',
          'Sempre guarde uma carga para fuga de emergencia. Usar as duas cargas ofensivamente entrega a mobilidade que e a defesa real da Magia.',
        ],
      },
      {
        name: 'Darkchild',
        input: 'Q - Ultimate',
        facts: [
          'Transforma a Magia por 12 segundos, potencializando todas as habilidades: Soulsword acerta 3x por swing, Magik Slash causa ~180 dano no charge maximo, Stepping Discs com 3s de cooldown.',
          'TODOS os cooldowns resetam ao ativar o Ultimate.',
          'Regra obrigatoria: gaste todas as habilidades disponiveis antes de ativar para aproveitar o reset de cooldowns; ativar com cooldowns disponiveis desperdicaria metade do valor.',
        ],
      },
    ],
    roleGuides: {
      duelist: {
        key: 'duelist',
        label: 'Duelist',
        nickname: 'Flanker de Limbo',
        health: '250 HP',
        difficulty: 'Alta: animation cancel, gestao de portal e timing do Darkchild precisam alinhar',
        job: 'Eliminar suportes isolados, forcar peel da backline e escapar pelo portal antes que o time inimigo responda.',
        verdict:
          'Escolha a Magia quando o time inimigo deixa suportes separados ou quando a backline esta sem anti-dive. Evite contra Peni Parker, Namor ou qualquer setup com muito crowd control — eles anulam o kit de invulnerabilidade e burst curto.',
        playstyle: [
          'Antes de engajar, verifique se o suporte alvo esta separado do tanque. A Magia mata suportes de 300 HP antes de reagirem; contra Vanguard, ela nao tem sustain suficiente sem Darkchild.',
          'A entrada limpa e: Magik Slash carregado atras de cobertura, soltar ao sair, Umbral Incursion, Soulsword com animation cancel. Com Darkchild disponivel, gaste todas as habilidades primeiro, ative, e execute de novo com cooldowns resetados.',
          'Se o alvo sobreviveu e saiu do alcance, nao force melee no chao sem cobertura. Entre pelo portal para reposicionar ou use-o para fuga imediata. 250 HP despenca rapido quando o time inimigo vira a camera.',
        ],
        priorityKicker: 'Execucao',
        priorityTitle: 'Sequencia de entrada',
        priorityDescription:
          'A Magia nao tem arvore de upgrade: a prioridade e construir uma janela curta de burst, ler se ela virou kill e manter um portal de saida disponivel.',
        upgradePlan: [
          {
            rank: 1,
            input: 'LMB',
            ability: 'Soulsword',
            label: 'maior hitbox melee do jogo',
            why:
              'O botao que gera a passiva. Cada swing com animation cancel ([key:LMB] → [key:Melee] → [key:LMB]) quase dobra o DPS; sem o cancel, voce causa metade do dano e a Magia fica fragil por mais tempo.',
            swapWhen:
              'Durante Darkchild, cada swing acerta 3 vezes; o cancel fica ainda mais critico porque cada hit contribui para a passiva.',
            sourceIds: ['official-magik', 'wiki-magik', 'mobalytics-magik'],
          },
          {
            rank: 2,
            input: 'Shift',
            ability: 'Umbral Incursion',
            label: 'engage com launch',
            why:
              'E o botao de entrada com 85 de dano e launch vertical que abre o alvo para followup. Mirar levemente a direita do corpo inimigo aumenta muito a taxa de acerto por conta do hitbox de terceira pessoa.',
            swapWhen:
              'Se o alvo esta em grupo, use Stepping Discs para reposicionar antes de usar Umbral Incursion em alvo isolado do grupo.',
            sourceIds: ['official-magik', 'mobalytics-magik', 'marvelrivalsgg-magik'],
          },
          {
            rank: 3,
            input: 'E',
            ability: 'Stepping Discs',
            label: 'portal + followup + invulnerabilidade',
            why:
              'Saida garantida e ferramenta ofensiva ao mesmo tempo. Dentro do portal, nenhum projetil ou habilidade a acerta. Ao sair, escolha o followup em 3 segundos: Eldritch Whirl (AoE) ou Demon\'s Rage (burst constante). Nunca use as duas cargas ofensivamente.',
            swapWhen:
              'Contra ultimate inimiga ou burst concentrado, entre no portal para absorver o dano e reaparecer em posicao vantajosa.',
            sourceIds: ['official-magik', 'mobalytics-magik', 'reddit-magik-portal'],
          },
          {
            rank: 4,
            input: 'RMB',
            ability: 'Magik Slash',
            label: 'burst a distancia antes da entrada',
            why:
              'Charge de ate 1.2 segundos causa 90 de dano e pode ser preparado atras de cobertura. Usar antes de Umbral Incursion adiciona ~175 de dano pre-engage que o alvo nao consegue evitar facilmente.',
            swapWhen:
              'Durante Darkchild, o charge maximo causa ~180 de dano com cooldown reduzido; priorize usa-lo mesmo em fight mais longa.',
            sourceIds: ['official-magik', 'mobalytics-magik', 'marvelrivalsgg-magik'],
          },
          {
            rank: 5,
            input: 'Q',
            ability: 'Darkchild',
            label: 'limpa o time ou segura objetivo',
            why:
              'Com reset de todos os cooldowns e todas as habilidades potencializadas por 12s, e a ultimate mais forte do kit. O valor maximo vem quando ativada em fights de objetivo ou para eliminar 2+ alvos. Nunca ative com habilidades disponiveis.',
            swapWhen:
              'Segure se o time inimigo esta espalhado sem engajamento. O Darkchild em alvo unico so e correto se ele e o suporte mais perigoso da backline.',
            sourceIds: ['official-magik', 'mobalytics-magik', 'reddit-magik-darkchild'],
          },
          {
            rank: 6,
            input: 'C',
            ability: 'Chain of Cyttorak',
            label: 'team-up com Dr. Strange',
            why:
              'Quando Dr. Strange esta no time, a corrente liga dois inimigos, tornando-os mais lentos quando tentam se afastar. Cria situacao ideal para Magia limpar suportes que ficam presos tentando se distanciar.',
            swapWhen:
              'Se Dr. Strange nao esta no time, ignore este plano e foque no ciclo base de [key:RMB] → [key:Shift] → [key:LMB] → [key:E].',
            sourceIds: ['official-magik', 'wiki-magik'],
          },
        ],
        adaptations: [
          'Contra Peni Parker: evite o duelo direto. Armadilhas e snares anulam completamente o kit. Reposicione pelo portal e procure outros alvos.',
          'Contra Namor, The Thing ou Wolverine: nao entre em luta prolongada. Faca o burst combo e use o portal para sair. Se o alvo sobreviveu, reinicie em vez de trocar dano no chao.',
          'Contra triplo suporte ou backline agrupada: vire finalizadora de alvos ja baixos que seu time pressionou. Seu time precisa criar dano antes do seu dive.',
          'Com Dr. Strange: Chain of Cyttorak cria abertura perfeita. Espere os inimigos ficarem travados pela corrente e entre com Umbral Incursion no suporte que tentou escapar.',
        ],
        ultimates: [
          {
            stance: 'Limpeza de objetivo',
            name: 'Darkchild',
            bestUse:
              'Em fights de objetivo (payload ou ponto) quando 2+ inimigos estao engajados no mesmo espaco. Gaste TODAS as habilidades primeiro, ative, e execute de novo com tudo resetado.',
            execution:
              'Gaste [key:RMB] + [key:Shift] + [key:E] (Demon\'s Rage) → ative Darkchild → Umbral Incursion (mais rapido) → Soulsword 3x hit → Magik Slash 180 dmg → Stepping Discs (3s cooldown).',
            upgradeValue:
              'O reset de cooldowns ao ativar e o valor central: sem essa mecanica aproveitada, o Darkchild e so um buff temporario. Com ela, sao praticamente dois combos completos em sequencia.',
          },
        ],
        dashGuide: {
          ability: 'Soulsword + animation cancel',
          shortRule:
            '[key:LMB] → [key:Melee] → [key:LMB]: sem esse cancel, voce causa metade do DPS e a passiva demora o dobro para encher.',
          mechanics: [
            'O animation cancel funciona pressionando [key:Melee] logo apos o primeiro swing do Soulsword, eliminando os frames de recuperacao antes do proximo ataque.',
            'O hitbox do Soulsword e o maior de todos os herois melee do jogo; posicionar levemente a direita do inimigo (por conta da camera de terceira pessoa) maximiza o acerto.',
            'Durante Darkchild, cada swing acerta 3 vezes. O cancel fica ainda mais valioso porque cada acerto contribui para o HP bonus da passiva.',
          ],
          drills: [
            'Pratique o ritmo do cancel: a janela e pequena. Se o Soulsword completar a animacao antes do [key:Melee], voce perdeu a janela. Treine ate o cancelamento virar musculo.',
            'Treine a entrada completa: charge [key:RMB] atras de cobertura → soltar ao sair → [key:Shift] → [key:LMB] cancel → [key:LMB]. Esse combo mata 300 HP antes de reagirem.',
            'Contra bots com burst, pratique bait com o portal: entre, provoque resposta, use Stepping Discs para absorver e reaparecer para o followup.',
          ],
        },
        patterns: [
          {
            title: 'Kill de suporte em 300 HP',
            steps: [
              'Posicione atras de cobertura proxima ao suporte alvo e prepare charge do Magik Slash ([key:RMB]).',
              'Ao sair da cobertura, libere [key:RMB] e imediatamente use Umbral Incursion ([key:Shift]) no suporte.',
              'Soulsword com animation cancel ([key:LMB] → [key:Melee] → [key:LMB]) para finalizar. Total: 90 + 85 + 75 + 75 = 325+ de dano.',
              'Se o suporte sobreviveu e saiu, use Stepping Discs para fuga imediata e reinicie em vez de perseguir descoberto.',
            ],
          },
          {
            title: 'Engajamento completo com escape',
            steps: [
              'Stepping Discs para reposicionar sem ser rastreada (invulnerabilidade durante o teleporte).',
              'Ao sair do portal, [key:LMB] imediato para Eldritch Whirl (spin 360 graus em area).',
              'Umbral Incursion no alvo mais danificado e Soulsword com animation cancel.',
              'Segunda carga de Stepping Discs para fuga absoluta se o time inimigo respondeu.',
            ],
          },
          {
            title: 'Darkchild burst maximo',
            steps: [
              'Gaste [key:RMB], [key:Shift], [key:E] (Demon\'s Rage) antes de ativar o Ultimate.',
              'Ative Darkchild com todas as habilidades em cooldown para aproveitar o reset completo.',
              'Com tudo resetado: Umbral Incursion (mais rapido e forte), Soulsword 3x hit, Magik Slash (~180 dano).',
              'Stepping Discs de saida se precisar reposicionar ou escapar apos limpar o alvo.',
            ],
          },
        ],
        mistakes: [
          'Usar as duas cargas de Stepping Discs ofensivamente e descobrir que nao sobrou fuga quando o time inimigo vira.',
          'Ativar Darkchild com habilidades disponiveis, desperdicando o reset de cooldowns que e o valor central da ultimate.',
          'Nao fazer animation cancel do Soulsword: sem o cancel, o DPS cai pela metade e a passiva demora para encher.',
          'Tentar matar Vanguards ou herois de alta vida sem o Darkchild. A Magia e especialista em 1v1 de suportes.',
          'Ignorar o angulo de hitbox: mirar diretamente no centro do inimigo reduz a taxa de acerto do Umbral Incursion. Mire levemente a direita.',
        ],
        evidence: [
          'official-magik',
          'wiki-magik',
          'mobalytics-magik',
          'marvelrivalsgg-magik',
          'reddit-magik-portal',
          'reddit-magik-darkchild',
          'chaosboost-magik',
        ],
      },
    },
    sources: [
      {
        id: 'official-magik',
        kind: 'official',
        title: 'MAGIK — Marvel Rivals Hero Page',
        url: 'https://www.marvelrivals.com/heroes/',
        author: 'Marvel Rivals / NetEase',
        published: '2024-12-06',
        confidence: 'alta',
        takeaways: [
          'Fonte principal para role (Duelist), vida (250 HP), Soulsword, Magik Slash, Umbral Incursion, Stepping Discs e Darkchild.',
          'Confirma passiva Limbo\'s Might: 30% de dano causado convertido em HP bonus, cap de +150 HP.',
          'Confirma Stepping Discs com 2 cargas, cooldown de 6s por carga, janela de followup de 3s, e Darkchild com 12s de duracao e reset de cooldowns.',
        ],
      },
      {
        id: 'wiki-magik',
        kind: 'database',
        title: 'Magik — The Marvel Rivals Wiki',
        url: 'https://marvelrivals.wiki.gg/wiki/Magik',
        confidence: 'media',
        takeaways: [
          'Complementa a pagina oficial com descricoes detalhadas de Eldritch Whirl (followup LMB) e Demon\'s Rage (followup RMB) pos-Stepping Discs.',
          'Confirma mecanica de invulnerabilidade durante o teleporte dos Stepping Discs.',
          'Documenta Team-Up Chain of Cyttorak com Dr. Strange como ancora.',
        ],
      },
      {
        id: 'mobalytics-magik',
        kind: 'guide',
        title: 'Marvel Rivals Magik Character Guide',
        url: 'https://mobalytics.gg/marvel-rivals/magik-guide',
        confidence: 'media',
        takeaways: [
          'Define Magia como flanker especialista em 1v1 com o maior hitbox melee do jogo e autossustain via passiva.',
          'Recomenda procurar suportes isolados, usar portal para reposicionamento seguro e guardar sempre uma carga para fuga.',
          'Detalha o animation cancel do Soulsword como principal diferencial tecnico entre jogadores casuais e avancados.',
        ],
      },
      {
        id: 'marvelrivalsgg-magik',
        kind: 'guide',
        title: 'Magik Guide: How to Play, Combos & Counters',
        url: 'https://marvelrivals.gg/magik-guide/',
        confidence: 'media',
        takeaways: [
          'Resume combos centrais: Magik Slash charge → Umbral Incursion → Soulsword cancel elimina suporte de 300 HP antes de reagir.',
          'Lista counters duros: Peni Parker (armadilhas + snare), Namor (summons anti-dive), Wolverine e Blade (especialistas em 1v1).',
          'Valida que o hitbox de terceira pessoa exige mirar levemente a direita para maximizar acerto do Umbral Incursion.',
        ],
      },
      {
        id: 'reddit-magik-portal',
        kind: 'forum',
        title: 'Magik Stepping Discs mechanics — detailed breakdown',
        url: 'https://www.reddit.com/r/marvelrivals/search/?q=magik+portal+invulnerability',
        confidence: 'em disputa',
        takeaways: [
          'Mains confirmam invulnerabilidade total durante o teleporte — unica mecanica desse tipo no jogo.',
          'Discussao sobre uso defensivo: absorver burst de ultimate ou CC entrando no portal no ultimo segundo.',
          'Aviso recorrente: usar as duas cargas ofensivamente e o erro mais comum de jogadores iniciantes.',
        ],
      },
      {
        id: 'reddit-magik-darkchild',
        kind: 'forum',
        title: 'Magik Darkchild timing guide',
        url: 'https://www.reddit.com/r/marvelrivals/search/?q=magik+darkchild+cooldown+reset',
        confidence: 'em disputa',
        takeaways: [
          'Mains confirmam que o reset de cooldowns ao ativar Darkchild e o mecanismo mais importante da ultimate.',
          'Estrategia validada: gastar TODAS as habilidades antes de ativar para aproveitar o reset maximo.',
          'Alerta recorrente: nao usar Darkchild apenas para um kill solo — e um ult que define fights de objetivo.',
        ],
      },
      {
        id: 'chaosboost-magik',
        kind: 'guide',
        title: 'Magik Guide: Her Potential in Marvel Rivals',
        url: 'https://chaosboost.com/guides/magik-guide-marvel-rivals/',
        confidence: 'media',
        takeaways: [
          'Destaca que a Magia tem 55.6% de win rate (S-tier) mas pick rate baixo por requerer dominio tecnico.',
          'Confirma que o valor da Magia vem de aparecer fora do angulo esperado, nao de duelos frontais.',
          'Lista sinergias: Dr. Strange (Chain of Cyttorak), Hulk e Thor (mantem inimigos presos para Magia acertar).',
        ],
      },
      {
        id: 'video-magik-pending',
        kind: 'video-transcript',
        title: 'Transcricoes de guias em video da Magia',
        url: 'https://www.youtube.com/results?search_query=Marvel+Rivals+Magik+guide+advanced',
        confidence: 'pendente',
        takeaways: [
          'Slot reservado para VODs, guias de mains e coach reviews com timestamps.',
          'Nenhuma transcricao auditavel foi processada nesta carga; o app nao inventa dado de video sem texto verificavel.',
          'Proximo enriquecimento deve cobrir combos de animation cancel frame-by-frame e exemplos de Darkchild em fights de objetivo.',
        ],
      },
    ],
    sourceCoverage: [
      {
        kind: 'official',
        label: 'Oficial',
        count: 1,
        status: 'Pagina oficial usada para valores de kit, cooldowns e passiva.',
      },
      {
        kind: 'database',
        label: 'Database',
        count: 1,
        status: 'Wiki publica usada para mecanicas de followup pos-portal e team-up.',
      },
      {
        kind: 'guide',
        label: 'Guias',
        count: 3,
        status: 'Usados para combos, animation cancel, counters e decisao de fight.',
      },
      {
        kind: 'forum',
        label: 'Forum',
        count: 2,
        status: 'Usado com cautela para confirmar mecanicas tecnicas e timing do Darkchild.',
      },
      {
        kind: 'video-transcript',
        label: 'Videos',
        count: 0,
        status: 'Pendente: falta transcricao validada com timestamps.',
      },
    ],
  },
  {
    id: 'daredevil',
    name: 'Demolidor',
    aliases: ['Matt Murdock', 'Homem Sem Medo', 'Dizang', 'DD', 'Demolidor de Hell\'s Kitchen'],
    game: 'Marvel Rivals',
    portraitUrl: publicAsset('heroes/banners/daredevil.png'),
    bannerUrl: publicAsset('heroes/banners/daredevil.png'),
    selectionPortraitUrl: publicAsset('heroes/select/daredevil.png'),
    selectionHoverUrl: publicAsset('heroes/select/daredevil_champion.gif'),
    theme: {
      primary: '#cc1a1a',
      primaryRgb: '204, 26, 26',
      secondary: '#f5c518',
      secondaryRgb: '245, 197, 24',
      surface: '#1a0a0a',
      surfaceRgb: '26, 10, 10',
    },
    roles: ['duelist'],
    lastVerified: '2026-05-14',
    confidenceSummary:
      'Habilidades e valores conferidos na wiki.gg e site oficial. Coaching consolidado a partir de análise das mecânicas documentadas. Guia de vídeo ainda pendente de transcrição.',
    coreRead: [
      'O Demolidor vence pelo controle de entrada: marque com Sonic Pursuit, aproxime com Devil\'s Latch e só então engage — jamais dive cego.',
      'Fury é o recurso que determina quando usar as melhores habilidades. Gaste em Devil\'s Chain quando o alvo está sozinho, em Devil\'s Throw quando há múltiplos inimigos agrupados.',
      'Objection! não é escape — é contra-ataque. Use quando o inimigo já gastou o projétil principal e reverta o dano de volta nele.',
    ],
    systems: [
      {
        name: 'Radar Sense',
        input: 'Passiva',
        facts: [
          'Enxerga inimigos através de paredes e invisíveis dentro de ~50m, mas o campo de visão nítida é apenas 20m.',
          'Use esse raio de detecção para pré-planejar o dive: se o alvo está fora dos 20m, a aproximação é cega para ele, não para você.',
          'Contra inimigos fora do raio de 50m, o Demolidor perde detecção passiva — mantenha a marcação de Sonic Pursuit ativa como extensão do radar.',
        ],
      },
      {
        name: 'Fury',
        input: 'Recurso',
        facts: [
          '3 pontos de Fury representados por chamas abaixo da mira. São o combustível de Devil\'s Chain e Devil\'s Throw.',
          'LMB (Justice Jab), RMB (Righteous Cross), E (Sonic Pursuit dash), F (Devil\'s Latch) e melee geram 0,5 a 2 pontos de Fury ao acertar.',
          'Nunca entre no Infernal Fury sem pelo menos 2 pontos: a habilidade consome 2 pontos e sem eles você apenas sinaliza a intenção sem atacar.',
        ],
      },
      {
        name: 'Wall Crawling',
        input: 'Passiva',
        facts: [
          'Blind Ascent permite subir qualquer superfície vertical em alta velocidade, sem custo de habilidade.',
          'Use paredes para acessar flancos altos e surpreender backlines sem depender de cooldowns.',
          'Combine escalada com Devil\'s Latch para alcançar posições impossíveis para a maioria dos duelistas.',
        ],
      },
    ],
    roleGuides: {
      duelist: {
        key: 'duelist',
        label: 'Duelista',
        nickname: 'Diabo de Hell\'s Kitchen',
        health: '325 HP',
        difficulty: 'Alta: exige timing de Fury, pré-marcação e rotação de Objection!',
        job: 'Marque, aproxime, isole e destrua um alvo por vez; nunca troque com a frente sem rota de saída.',
        verdict: 'Escolha quando o inimigo tem suporte fragíl de backline, duelistas de longo alcance ou heróis que dependem de projéteis. Evite contra frontlines que dominam melee.',
        playstyle: [
          'O Demolidor opera no ritmo mark → dash → combo. Primeiro use Sonic Pursuit para marcar o alvo e ganhar 25% de redução de dano e rastreamento permanente. Isso muda a física da luta: você sabe onde o inimigo está, ele não sabe quando você chega.',
          'No segundo passo, aproxime com Devil\'s Latch (F) para ser puxado até ele — o gancho garante Righteous Cross como follow-up imediato. Com 3 pontos de Fury, execute Devil\'s Chain para dano alto e vida bônus. Com inimigos agrupados, Devil\'s Throw quica entre eles e aplica slow a todos.',
          'O terceiro passo é a saída. Se o alvo não morreu, Objection! (Shift) compra 2s de reflexão de projéteis enquanto você reavaliam o terreno. Se o alvo morreu, o cooldown do dash de Sonic Pursuit reseta — use imediatamente para o próximo mark ou para recuar.',
        ],
        priorityKicker: 'Rotação',
        priorityTitle: 'Ordem de combate',
        priorityDescription:
          'O Demolidor não tem upgrades de livrinho como o Deadpool. Aqui a "ordem de prioridade" é a sequência de habilidades que maximiza dano e sobrevivência em cada engajamento.',
        upgradePlan: [
          {
            rank: 1,
            input: 'E',
            ability: 'Sonic Pursuit',
            label: 'Marcação + dash',
            why: 'Sempre começa aqui. A marcação é gratuita (sem cooldown) e dá 25% de redução de dano imediata. O dash (15s CD) garante 2 Fury ao chegar e blinda o alvo por 1s — ativa Righteous Cross como seguida.',
            swapWhen: 'Se o alvo está fora do alcance de 20m do dash, use Devil\'s Latch primeiro para entrar, depois marque.',
            sourceIds: ['wiki-daredevil', 'official-daredevil'],
          },
          {
            rank: 2,
            input: 'F',
            ability: 'Devil\'s Latch',
            label: 'Gancho de aproximação',
            why: 'Cobre 25m instantaneamente, sempre abre Righteous Cross e gera 2 Fury. É o segundo engajador quando Sonic Pursuit dash está em CD ou quando o alvo está em posição elevada.',
            swapWhen: 'Guarde para saída de emergência quando Objection! já foi usada e você precisa de distância rápida.',
            sourceIds: ['wiki-daredevil'],
          },
          {
            rank: 3,
            input: 'Shift',
            ability: 'Objection!',
            label: 'Escudo reflexivo',
            why: 'Reflete todos os projéteis por 2s. Gera 2 Fury se algum projétil for devolvido. Use quando o inimigo acabou de lançar o habilidade principal — não como botão de pânico aleatório.',
            swapWhen: 'Contra heróis de melee puro (sem projéteis), Objection! perde valor — priorize Devil\'s Chain como finalizador imediato.',
            sourceIds: ['wiki-daredevil'],
          },
          {
            rank: 4,
            input: 'Q',
            ability: 'Infernal Fury → Devil\'s Chain',
            label: 'Dano alto + vida bônus (alvo solo)',
            why: 'Q ativa a escolha de Devil\'s Throw ou Devil\'s Chain. Contra um alvo, Devil\'s Chain inflige até 80 de dano direto e gera vida bônus proporcional ao dano causado. É o finalizador em 1x1.',
            swapWhen: 'Com 2+ inimigos agrupados, troque para Devil\'s Throw: o ricochete entre eles aplica slow em todos e gera mais Fury coletivamente.',
            sourceIds: ['wiki-daredevil'],
          },
          {
            rank: 5,
            input: 'LMB',
            ability: 'Justice Jab',
            label: 'Preenchimento de Fury',
            why: 'Ataque primário corpo a corpo (35 de dano, ~2 acertos/s). Cada acerto enche 0,5 Fury. Use como preenchimento entre cooldowns para manter Fury alta e não desperdiçar janelas de Infernal Fury.',
            sourceIds: ['wiki-daredevil'],
          },
        ],
        adaptations: [
          'Contra composições com muitos projéteis (Punisher, Hawkeye, Iron Man), posicione Objection! como segundo passo do combo — entre, reflete, então conclui com chain.',
          'Contra duelistas de alta mobilidade (Spider-Man, Black Panther), não persiga após o primeiro combo falhar. Reposicione, aguarde a marcação recarregar e tente de ângulo diferente.',
          'Contra suportes atrás de frontline, use escalada lateral + Devil\'s Latch para chegar acima da frontline sem confrontá-la. O objetivo é o suporte, não o tank.',
          'Se o time aliado tem Punisher, ative o Team-Up Blind Verdict: sua marcação de Sonic Pursuit também revela o alvo para o Punisher, multiplicando o valor da marcação.',
        ],
        ultimates: [
          {
            stance: 'Ultimate única',
            name: 'Let the Devil Out',
            bestUse: 'Dentro de agrupamentos em objetivos (ponto, payload). Quanto mais inimigos no raio, mais dano total e cegagem acumulada.',
            execution: 'Ative no centro do grupo inimigo. A esfera contínua causa 50 dano/s base e 85 dano/s se o inimigo estiver totalmente cego. Não ative a mais de 10m do cluster — a esfera é centrada em você, não projétil.',
            upgradeValue: 'Durante a ultimate, Fury recarrega automaticamente — use Devil\'s Chain e Devil\'s Throw dentro da esfera para maximizar dano e vida bônus.',
          },
        ],
        dashGuide: {
          ability: 'Mark → Dash → Chain → Righteous Cross',
          shortRule: 'Nunca entre sem a marcação ativa — sem ela, você perde 25% de redução de dano e o rastreamento.',
          mechanics: [
            'Sonic Pursuit tem duas fases: primeira ativação marca sem custo; segunda ativação (15s CD) é o dash de 20m que blinda e gera 2 Fury.',
            'Devil\'s Latch (F) puxa em 25m e garante Righteous Cross como seguida — use quando o dash de E está em CD.',
            'Righteous Cross é o punch de avanço de 6m que só abre após certas habilidades. Não "spam" — ele tem janela de 5s para ser usado.',
          ],
          drills: [
            'Treino 1: marque um dummy com E, dash, execute Righteous Cross e imediatamente F+Righteous Cross. Aprenda o ritmo do double-avance.',
            'Treino 2: ative Objection! na frente de projéteis treinados e meça quando a reflexão acontece versus quando você só toma o dano por ativar cedo demais.',
            'Treino 3: suba uma parede, Devil\'s Latch em um inimigo no chão, ative Infernal Fury e escolha chain vs throw em <0.5s. Desenvolva o reflexo da decisão.',
          ],
        },
        patterns: [
          {
            title: 'Dive em suporte isolado',
            steps: [
              'Suba pela parede lateral ou acima do time inimigo usando Blind Ascent.',
              'Identifique o suporte fora do alcance da frontline e marque com Sonic Pursuit (1ª ativação).',
              'Use Devil\'s Latch (F) para ser puxado até o suporte — ative Righteous Cross ao chegar.',
              'Com 2+ Fury, execute Infernal Fury → Devil\'s Chain para finalizar. Se o suporte morreu, Sonic Pursuit dash reseta — escape ou marque o próximo.',
            ],
          },
          {
            title: 'Counter de projétil pesado',
            steps: [
              'Aproxime com Sonic Pursuit dash para marcar o alvo e ativar a redução de dano de 25%.',
              'Aguarde o inimigo lançar a habilidade principal (ex.: Punisher com Minigun, Hawkeye com flecha carregada).',
              'Ative Objection! (Shift) para refletir os projéteis de volta — isso também gera 2 Fury.',
              'Com Fury cheia, use Infernal Fury → Devil\'s Chain como finalizador enquanto o inimigo não tem mais o cooldown.',
            ],
          },
          {
            title: 'Ultimate em objetivo',
            steps: [
              'Aguarde pelo menos 3 inimigos no raio de objetivo (ponto, payload).',
              'Entre pelo flanco com Devil\'s Latch e Righteous Cross para já estar no centro do cluster.',
              'Ative Let the Devil Out e permaneça no centro — não recue ou a esfera não cobre o grupo.',
              'Durante a ultimate, use Devil\'s Chain nos inimigos mais próximos para extra vida bônus. Após o término, Sonic Pursuit dash reseta se algum alvo morreu.',
            ],
          },
        ],
        mistakes: [
          'Dar dive cego sem a marcação de Sonic Pursuit ativa: você entra sem rastreamento e sem 25% de redução de dano, o que torna o engajamento muito mais arriscado.',
          'Gastar Infernal Fury com menos de 2 pontos de Fury: a habilidade abre a escolha mas não executa — você sinaliza a intenção para o inimigo e desperdiça o timing.',
          'Usar Objection! como botão de pânico antes do inimigo lançar o projétil: você ativa a janela de 2s sem nada para refletir e fica vulnerável quando o projétil real chega.',
        ],
        evidence: ['wiki-daredevil', 'official-daredevil'],
      },
    },
    sources: [
      {
        id: 'wiki-daredevil',
        kind: 'database',
        title: 'Daredevil — Marvel Rivals Wiki (wiki.gg)',
        url: 'https://marvelrivals.wiki.gg/wiki/Daredevil',
        published: '2026-01',
        confidence: 'alta',
        takeaways: [
          'Valores completos de todas as habilidades: dano, cooldowns, alcance, duração e mecânicas de Fury.',
          'Mecânica de Blind Ascent (wall crawling) e Radar Sense (20m nítido, 50m total, visão através de paredes).',
          'Team-Up Blind Verdict com Punisher: marcação de Sonic Pursuit compartilha visibilidade com Frank Castle.',
        ],
      },
      {
        id: 'official-daredevil',
        kind: 'official',
        title: 'Daredevil — Marvel Rivals (Site Oficial)',
        url: 'https://www.marvelrivals.com/heroes/',
        published: '2025-10',
        confidence: 'alta',
        takeaways: [
          'Daredevil é um Duelist com 325 HP, lançado na temporada de outubro/2025.',
          'Habilidades confirmadas no rosto oficial: Sonic Pursuit, Devil\'s Latch, Objection!, Infernal Fury e Let the Devil Out.',
          'Role visual e assets de personagem confirmados pela página oficial.',
        ],
      },
      {
        id: 'forum-daredevil-mains',
        kind: 'forum',
        title: 'Discussão de mains — r/marvelrivals (Daredevil tips)',
        url: 'https://www.reddit.com/r/marvelrivals/',
        published: '2025-11',
        confidence: 'media',
        takeaways: [
          'Consensus de mains: nunca entrar sem marcação, é o erro mais comum de iniciantes.',
          'Fury management: Devil\'s Chain preferido em 1x1, Devil\'s Throw em grupos.',
          'Objection! tem valor alto contra Punisher e Hawkeye, baixo contra heróis de melee puro.',
        ],
      },
    ],
    sourceCoverage: [
      {
        kind: 'official',
        label: 'Oficial',
        count: 1,
        status: 'Role, HP e lançamento confirmados no site oficial.',
      },
      {
        kind: 'database',
        label: 'Wiki/Database',
        count: 1,
        status: 'Valores completos de habilidades, mecânicas e team-up verificados.',
      },
      {
        kind: 'guide',
        label: 'Guias',
        count: 0,
        status: 'Pendente: nenhum guia escrito externo verificado ainda.',
      },
      {
        kind: 'forum',
        label: 'Fórum/Comunidade',
        count: 1,
        status: 'Consenso básico de mains coletado de discussões do Reddit.',
      },
      {
        kind: 'video-transcript',
        label: 'Vídeos',
        count: 0,
        status: 'Pendente: falta transcrição validada com timestamps.',
      },
    ],
  },
]




