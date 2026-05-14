import type { HeroGuide } from '../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const heroes: HeroGuide[] = [
  {
    id: 'deadpool',
    name: 'Deadpool',
    aliases: ['Wade Wilson', 'Tankpool', 'DPSpool', 'Healpool', 'Mercenário Tagarela'],
    game: 'Marvel Rivals',
    portraitUrl:
      'https://r.res.easebar.com/pic/20260116/ce3a5384-9640-44a6-939c-869ae3185403.png',
    bannerUrl:
      'https://r.res.easebar.com/pic/20260116/aaeff66f-4166-4a24-b02d-2d72951a3cb5.jpg',
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
            'O dash não é botão de apróximar. É botão de confirmar alvo depois que o caminho de saída existe.',
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
            'Com Final Exam, combine Bobblehead + dash em grupo para completar o desafio rápidamente.',
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
    portraitUrl:
      'https://static.wikia.nocookie.net/marvel-rivals/images/9/96/Black_Cat_Hero_Reveal.jpg/revision/latest',
    bannerUrl:
      'https://static.wikia.nocookie.net/marvel-rivals/images/4/45/Season_7-5_-_Black_Cat_Promo_Image.png/revision/latest',
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
    portraitUrl:
      'https://static.wikia.nocookie.net/marvel-rivals/images/1/19/Magneto_Hero_Portrait.png/revision/latest?cb=20240819163055',
    bannerUrl:
      'https://r.res.easebar.com/pic/20241122/38fec759-8ced-45db-83ca-36380320ed1f.png',
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
    aliases: ['Spider-Man', 'Spiderman', 'Peter Parker', 'Spidey', 'Aranha', 'Webhead', 'Amigao da Vizinhanca'],
    game: 'Marvel Rivals',
    portraitUrl:
      'https://r.res.easebar.com/pic/20241122/1be08d9c-f643-4600-897f-fc68d3ae89d4.png',
    bannerUrl:
      'https://r.res.easebar.com/pic/20241122/18cc7289-36bd-455e-ae80-6b0eae74da7b.png',
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
      'Valores base conferidos na pagina oficial e ajustados com balance posts ate o patch anunciado para 2026-05-15. Guias e Reddit foram usados para execucao, counters e decisao de combo, nao para substituir numeros oficiais.',
    coreRead: [
      'A coisa que o Homem-Aranha precisa dominar para ficar bom e escolher o alvo antes de gastar a mobilidade: tag, entrada, burst e saida.',
      'Spider-Tracer e o interruptor do personagem. Sem tracer, Get Over Here puxa o inimigo; com tracer, voce se joga nele. Essa diferenca decide se a jogada isola um alvo ou te entrega no meio de seis.',
      'Ele nao ganha luta longa. O valor vem de aparecer fora do angulo, consumir tracer em Amazing Combo ou Spider-Power, finalizar o alvo ja pressionado e sair com Web-Swing sobrando.',
    ],
    systems: [
      {
        name: 'Spider-Tracer',
        input: 'RMB',
        facts: [
          'Web-Cluster tem 5 cargas, recarrega uma carga a cada 2s, causa 30 de dano e aplica Spider-Tracer por 3s.',
          'Spider-Tracer adiciona 45 de dano quando consumido por Spider-Power ou Amazing Combo.',
          'Get Over Here muda completamente quando o alvo esta marcado: em vez de puxar o inimigo, o Homem-Aranha se puxa ate ele e acerta um chute.',
        ],
      },
      {
        name: 'Web-Swing',
        input: 'Shift',
        facts: [
          'Web-Swing tem 3 cargas, 30m de comprimento maximo e 6s de recarga por carga.',
          'A primeira carga cria angulo, a segunda fecha ou corrige a rota, e uma carga precisa ficar reservada para saida quando a kill nao veio.',
          'Wall Crawl e Thwip and Flip devem economizar Swing: subir parede ou ajustar altura sem gastar Shift deixa a rotacao viva.',
        ],
      },
      {
        name: 'Spectacular Spin',
        input: 'Q',
        facts: [
          'Ultimate em esfera de 8m por 2.4s, com 250 de vida bonus e slow acumulativo ate stun.',
          'O balance post de 2026-05-12 anunciou aumento de 13.6 para 15 de dano por hit, total de 408 para 450 no patch 2026-05-15.',
          'Mesmo buffada, ela e melhor em alvo fraco/backline ja danificada do que em Vanguard cheio ou time com defensive ult pronta.',
        ],
      },
      {
        name: 'Parker Power-Up',
        input: 'C - Team-Up',
        facts: [
          'Desde a Season 6, Peni Parker libera Sticky Spider-Bomb para o Homem-Aranha.',
          'A bomba tem 3s de contagem, 10 de dano no contato, 30 no campo de explosao, aplica Spider-Tracer e tem 20s de cooldown.',
          'Se explodir na mao do Homem-Aranha, concede 50 de vida bonus e recarrega um Web-Cluster; use como recurso extra, nao como motivo para entrar sem saida.',
        ],
      },
    ],
    roleGuides: {
      duelist: {
        key: 'duelist',
        label: 'Duelist',
        nickname: 'Dive de tracer',
        health: '250 HP',
        difficulty: 'Muito alta: mecanica, alvo e cooldown precisam alinhar',
        job: 'Punir alvo isolado, forcar peel da backline e sair antes que controle ou cura desfaçam o combo.',
        verdict:
          'Escolha Homem-Aranha quando o inimigo deixa suportes/Duelists jogarem separados ou quando seu time ja pressiona vida para voce finalizar. Evite insistir contra triplo suporte, muito stun ou backline agrupada em torno de Namor/Mantis/Invisible Woman.',
        playstyle: [
          'Antes de entrar, pergunte qual cooldown inimigo ainda te mata. Se Mantis tem sleep, Invisible Woman tem push ou Luna tem freeze, sua primeira entrada deve baitar esse botao, nao morrer tentando clipar combo de treino.',
          'A entrada limpa costuma ser Swing por cima ou lateral, Web-Cluster para marcar, Get Over Here no alvo marcado e Amazing Combo no primeiro frame possivel. O follow-up muda conforme distancia, vida e cura recebida pelo alvo.',
          'Se o alvo sobreviveu e saiu do alcance, nao force melee no chao. Reaplique Web-Cluster, use Swing/zip para pe, ou suma e reinicie com cooldowns em vez de virar 250 HP parado na backline inimiga.',
        ],
        priorityKicker: 'Execucao',
        priorityTitle: 'Ordem da jogada',
        priorityDescription:
          'O Homem-Aranha nao tem arvore de upgrade: a prioridade e construir uma janela curta de burst, ler se ela virou kill e manter uma saida real.',
        upgradePlan: [
          {
            rank: 1,
            input: 'RMB',
            ability: 'Web-Cluster',
            label: 'marca antes de tudo',
            why:
              'E o botao que liga o personagem. A marca adiciona 45 de dano quando consumida e transforma Get Over Here em entrada dirigida; sem ela, voce gasta mobilidade sem burst suficiente.',
            swapWhen:
              'Se o alvo ja esta muito baixo e fora de posicao, use Web-Cluster como finalizador seguro antes de se comprometer com E/F.',
            sourceIds: ['official-spider-man', 'wiki-spider-man', 'mobalytics-spider-man'],
          },
          {
            rank: 2,
            input: 'E',
            ability: 'Get Over Here!',
            label: 'puxar ou se puxar',
            why:
              'Com tracer, vira chute de entrada de 55 de dano e te coloca no alvo. Sem tracer, puxa alguem para voce e pode isolar alvo de canto ou ponte; confundir esses dois modos e o erro que entrega a luta.',
            swapWhen:
              'Contra backline agrupada, use sem tracer para puxar alguem para fora em vez de voar para dentro do time inteiro.',
            sourceIds: ['official-spider-man', 'reddit-spider-counter', 'mobalytics-spider-man'],
          },
          {
            rank: 3,
            input: 'F',
            ability: 'Amazing Combo',
            label: 'uppercut que consome a marca',
            why:
              'E o burst mais importante depois da entrada. Com duas cargas e 6s de recarga por carga, ele permite matar ou levantar alvo para follow-up; usado sem tracer ou sem plano de saida, so te deixa no ar sem kill.',
            swapWhen:
              'Se o inimigo esta esperando o E em linha reta, entre pelos pes com Swing/zip e use F para cruzar o alvo antes de consumir a segunda marca.',
            sourceIds: ['official-spider-man', 'mobalytics-spider-man', 'reddit-spider-combo'],
          },
          {
            rank: 4,
            input: 'Shift',
            ability: 'Web-Swing',
            label: 'angulo e saida',
            why:
              'A mobilidade e sua defesa real. Gastar as tres cargas para chegar transforma o melhor movimento do jogo em uma morte garantida quando a cura, stun ou knockback inimigo entra.',
            swapWhen:
              'Em mapa vertical, use Wall Crawl para staging e guarde Swing para reposicionar durante a briga.',
            sourceIds: ['official-spider-man', 'mobalytics-spider-man', 'gamesgg-spider-man'],
          },
          {
            rank: 5,
            input: 'Q',
            ability: 'Spectacular Spin',
            label: 'confirmacao, nao coin flip',
            why:
              'Com 250 de vida bonus, slow e stun acumulativo, a ultimate converte caos em kill quando voce ja entrou na backline. O buff anunciado para 2026-05-15 aumenta o dano total, mas nao muda a regra: use depois de dano inicial ou defensive ult inimiga.',
            swapWhen:
              'Segure se Luna/Mantis/Invisible Woman ainda tem controle pronto ou se o alvo principal e Vanguard cheio.',
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
              'Se nao ha Peni Parker no time, ignore esse plano e jogue pelo ciclo base de Web-Cluster, E/F e Swing.',
            sourceIds: ['official-spider-man', 'official-spider-man-s6', 'wiki-spider-man'],
          },
        ],
        adaptations: [
          'Contra Mantis, Invisible Woman, Luna Snow e Adam Warlock: primeira entrada serve para forcar controle/peel; mate na segunda, quando o cooldown ja saiu.',
          'Contra Namor ou setups com torreta/zona: nao entre reto. Quebre recurso, jogue por flanco alto e aceite trocar de alvo se a area esta armada.',
          'Contra triplo suporte ou backline grudada: vire finalizador de alvo ja baixo, nao assassino solo. Seu time precisa criar dano antes do seu dive.',
          'Com Peni Parker: Sticky Spider-Bomb da uma marca extra; use para abrir alvo que vai receber Get Over Here ou para sair com vida bonus se a janela fechou.',
        ],
        ultimates: [
          {
            stance: 'Confirmacao de backline',
            name: 'Spectacular Spin',
            bestUse:
              'Depois que um suporte ou Duelist ja perdeu vida, mobilidade ou peel. Entre pelo alto/lateral, aplique dano inicial e use Q para prender a resposta.',
            execution:
              'Swing para angulo, Web-Cluster, Get Over Here no alvo marcado, Amazing Combo e Q quando voce esta dentro de 8m de dois ou mais alvos frageis. Se usar Q para abrir, o inimigo inteiro ainda tem botao para negar.',
            upgradeValue:
              'Patch 2026-05-15 anunciado: dano por hit sobe de 13.6 para 15, total de 408 para 450 em 2.4s. O buff aumenta kill pressure, mas nao salva ultimate jogada em tanque cheio.',
          },
        ],
        dashGuide: {
          ability: 'Web-Cluster -> Get Over Here -> Amazing Combo',
          shortRule:
            'O combo bom nao e o mais longo do treino: e o que mata ou sai antes do inimigo virar a camera.',
          mechanics: [
            'Web-Cluster marca por 3s; Get Over Here em alvo marcado puxa voce ate ele; Amazing Combo consome tracer e levanta o alvo.',
            'Get Over Here viaja em linha reta. Se o inimigo tem stun/push guardado, ele sabe exatamente quando te acertar.',
            'Depois do uppercut, decida por vida e distancia: Web-Cluster finaliza, melee/overhead continua, Swing sai. Nao transforme follow-up ruim em morte certa.',
          ],
          drills: [
            'Treine a decisao curta: tag + E + F, olhar HP, escolher Web-Cluster finalizador ou Swing de saida em menos de meio segundo.',
            'Treine entrada por parede: Wall Crawl ate angulo alto, Web-Cluster, E/F, sair com Shift sem tocar o chao no meio da backline.',
            'Contra bots com controle, pratique bait: Swing perto, cancelar rota, esperar cooldown inimigo, so depois entrar com tracer.',
          ],
        },
        patterns: [
          {
            title: 'Pick rapido em suporte isolado',
            steps: [
              'Staging por parede ou high ground sem gastar todas as cargas de Swing.',
              'Web-Cluster no suporte que esta separado do tanque.',
              'Get Over Here no alvo marcado e Amazing Combo imediatamente.',
              'Finaliza com Web-Cluster/melee se a vida permite; se entrou cura ou peel, Swing para fora.',
            ],
          },
          {
            title: 'Bait contra backline preparada',
            steps: [
              'Apareca no angulo para forcar sleep, push, freeze ou torreta.',
              'Saia sem gastar E/F quando o cooldown defensivo aparecer.',
              'Volte com tracer na janela em que o suporte esta sem resposta.',
              'Se a kill nao veio em dois segundos, reinicie em vez de trocar dano no chao.',
            ],
          },
          {
            title: 'Ultimate sem desperdicio',
            steps: [
              'Espere defensive ult ou hard CC principal sair.',
              'Entre com dano inicial de tracer e uppercut.',
              'Ative Spectacular Spin dentro da backline, nao em Vanguard cheio.',
              'Use vida bonus para completar a kill e Swing para sair antes do focus voltar.',
            ],
          },
        ],
        mistakes: [
          'Gastar todas as cargas de Web-Swing para chegar e descobrir que nao sobrou fuga.',
          'Apertar Get Over Here sem saber se o alvo esta marcado e entrar no meio do time quando a intencao era puxar.',
          'Insistir no combo completo de treino enquanto o alvo recebeu cura, knockback ou ja saiu do alcance.',
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
          'Confirma 250 HP, Web-Cluster com 5 cargas/2s de recarga, tracer de 3s e bonus de 45 de dano.',
          'Confirma Web-Swing com 3 cargas e 6s de recarga, Get Over Here com 8s, Amazing Combo com 2 cargas e Spectacular Spin com 8m/2.4s/250 vida bonus.',
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
          'Anuncia buff de Spectacular Spin para a versao 2026-05-15.',
          'Dano por hit da ultimate sobe de 13.6 para 15.',
          'Dano total da duracao de 2.4s sobe de 408 para 450.',
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
          'Confirma Peni como ancora do team-up e bonus de vida para Peni. Valores da bomba foram cruzados com pagina oficial/wiki. ',
        ],
      },
      {
        id: 'wiki-spider-man',
        kind: 'database',
        title: 'Spider-Man - The Marvel Rivals Wiki',
        url: 'https://marvelrivals.wiki.gg/wiki/Spider-Man',
        confidence: 'media',
        takeaways: [
          'Complementa a pagina oficial com resumo publico de Spider-Tracer, Web-Swing, Amazing Combo, Spectacular Spin e Sticky Spider-Bomb.',
          'Marca Suit Expulsion/antigo team-up como indisponivel na temporada atual, alinhado ao balance post oficial de 2026-01-16.',
          'Usado como conferencia secundaria para valores e nome dos sistemas, nao como fonte final quando havia numero oficial mais recente.',
        ],
      },
      {
        id: 'mobalytics-spider-man',
        kind: 'guide',
        title: 'Marvel Rivals Spider-Man Character Guide',
        url: 'https://mobalytics.gg/marvel-rivals/spider-man-guide',
        confidence: 'media',
        takeaways: [
          'Define Spider-Man como glass cannon de mobilidade, burst e 1v1, com muito downtime quando cooldowns estao fora.',
          'Recomenda procurar alvos isolados, engajar/desengajar constantemente e nao usar todas as cargas de Web-Swing para entrar.',
          'Parte dos valores numericos esta defasada por patches posteriores, entao a fonte foi usada para fundamentos e nao para numeros atuais.',
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
          'Resume Spider-Man como Duelist melee de mobilidade extrema que cria angulos inesperados e joga por Spider-Tracer.',
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
          'Enfatiza que o gap entre entrar e morrer em dois segundos versus desmontar backline vem de movimento, alvo e execucao.',
          'Recomenda entrada por angulo, leitura de alvo isolado, checagem de cooldown antes do dive e ajustes de controle para console.',
          'Algumas referencias comunitarias sao amplas, entao usei apenas principios mecanicos consistentes com fontes oficiais e outros guias.',
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
          'Relato de main destaca que ver o icone de Spider-Tracer significa preparar resposta ao Get Over Here em linha reta e uppercut.',
          'Cita Mantis, Invisible Woman, Adam Warlock e Luna Snow como respostas praticas por sleep, push, burst ou freeze.',
          'Usei como leitura de counterplay e adaptacao, nao como prova de balance absoluto.',
        ],
      },
      {
        id: 'reddit-spider-combo',
        kind: 'forum',
        title: 'Help w/ spider man combo',
        url: 'https://www.reddit.com/r/marvelrivals/comments/1i6drt5/help_w_spider_man_combo/',
        confidence: 'em disputa',
        takeaways: [
          'Discussao de combo reforca que combos de treino nem sempre entram em partida real.',
          'A recomendacao mais util e decidir depois do tracer/E/F se vale continuar com webs, zip aos pes ou sair.',
          'Foi usada para transformar o guia em decisao curta de fight, nao em lista de combos irreais.',
        ],
      },
      {
        id: 'video-spider-man-pending',
        kind: 'video-transcript',
        title: 'Transcricoes de guias em video do Homem-Aranha',
        url: 'https://www.youtube.com/results?search_query=Marvel+Rivals+Spider-Man+guide+Necros+combo',
        confidence: 'pendente',
        takeaways: [
          'Slot reservado para VODs, guias de mains e coach reviews com timestamps.',
          'Nenhuma transcricao auditavel foi processada nesta carga; o app nao inventa dado de video sem texto verificavel.',
          'Proximo enriquecimento deve separar rotas de combo por PC/controle e exemplos de partidas recentes pos-buff da ultimate.',
        ],
      },
    ],
    sourceCoverage: [
      {
        kind: 'official',
        label: 'Oficial',
        count: 3,
        status: 'Pagina oficial e balance posts usados para valores atuais e team-up vigente.',
      },
      {
        kind: 'database',
        label: 'Database',
        count: 1,
        status: 'Wiki publica usada como conferencia secundaria de kit e team-up.',
      },
      {
        kind: 'guide',
        label: 'Guias',
        count: 3,
        status: 'Usados para macro, combos praticos, cooldown discipline e counters.',
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
        status: 'Pendente: falta transcricao validada com timestamps.',
      },
    ],
  },
]






