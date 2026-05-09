import type { HeroGuide } from '../types'

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
    roles: ['vanguard', 'duelist', 'strategist'],
    lastVerified: '2026-05-08',
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
            why:
              'Linha de mains recentes prioriza a primeira ultimate porque Deadpool chega em S muito cedo. Se você consegue mirar suporte/DPS e forçar erro, ela ganha a primeira luta e devolve XP.',
            swapWhen:
              'Se seu time derrete antes da primeira ultimate, evolua Deadpool in Your Area primeiro.',
            sourceIds: ['reddit-upgrades', 'reddit-tankpool'],
          },
          {
            rank: 2,
            spellNumber: 5,
            ability: 'Deadpool in Your Area',
            label: 'Aura/taunt em área',
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
            why:
              'Ótima para cortar cura, proteger suporte e bloquear janela explosiva, mas exige arremesso bom. Forte, porém menos universal que aura, pistola e dash.',
            swapWhen:
              'Antecipe se o inimigo depende de burst frontal ou se seu suporte está sendo apagado.',
            sourceIds: ['destructoid-vanguard', 'reddit-upgrades'],
          },
          {
            rank: 6,
            spellNumber: 2,
            ability: 'Kick@$$ Katana',
            label: 'Ataque primário de espada',
            why:
              'Melhora o corpo a corpo e habilita crit em stab, mas o Vanguard normalmente ganha mais luta evoluindo utilidade antes.',
            sourceIds: ['official-deadpool', 'destructoid-vanguard'],
          },
          {
            rank: 7,
            spellNumber: 7,
            ability: 'The Big Test',
            label: 'Ultimate de espada',
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
              'Ative de média distância, force o inimigo a responder mal e mantenha pistolas nele. O valor vem de taunt, dano contínuo e punição quando ele erra habilidades.',
            upgradeValue:
              'Boa cedo se você está chegando em S antes do lobby. Perde valor se usada em tanque com cooldowns intactos.',
          },
          {
            stance: 'Katanas',
            name: 'The Big Test',
            bestUse:
              'Teamfight agrupada, stall de objetivo e entrada quando seu time pode andar com você.',
            execution:
              'Ative perto do time, procure hits de Hazardous Hijinks e Bunny Bounce para completar o desafio e dobrar o valor de cura/velocidade.',
            upgradeValue:
              'Evolua depois de dash/katana se você pretende usar a espada como plano principal de luta.',
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
            why:
              'E a diferença entre dar um pulo bonito e ser uma ameaça real. Upgraded, o dash pode continuar resetando enquanto acerta inimigo, virando ferramenta de chase e fuga.',
            sourceIds: ['official-deadpool', 'fandomwire-upgrades', 'reddit-upgrades'],
          },
          {
            rank: 2,
            spellNumber: 2,
            ability: 'Kick@$$ Katana',
            label: 'Katana primário',
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
            why:
              'Com upgrade, vira ciclo de três arremessos e explosão final. Use antes de entrar para forçar movimento e criar acertos de estilo.',
            sourceIds: ['official-deadpool', 'marvelrivals-gg', 'reddit-guide-ish'],
          },
          {
            rank: 4,
            spellNumber: 7,
            ability: 'Pop Quiz!',
            label: 'Ultimate de espada',
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
            why:
              'Aumenta sua redução de dano e pressiona visão em área. Bom depois que seu dano principal já está online.',
            sourceIds: ['official-deadpool', 'reddit-upgrades'],
          },
          {
            rank: 6,
            spellNumber: 1,
            ability: 'Dual Desert Eagles',
            label: 'Pistolas',
            why:
              'Melhora poke e farm, mas não define a identidade do Duelist. Se esse vira seu primeiro upgrade todo jogo, talvez a role errada tenha sido escolhida.',
            sourceIds: ['official-deadpool', 'gamesgg-guide'],
          },
          {
            rank: 7,
            spellNumber: 6,
            ability: 'Skill Issue',
            label: 'Ultimate de pistola',
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
              'Marque o alvo, mantenha pressão e observe erros de habilidade. O upgrade adiciona vulnerabilidade por erro, então combine com foco do time.',
            upgradeValue:
              'Não é prioridade padrão. Sobe de valor contra alvos que spammam habilidade e erram sob taunt.',
          },
          {
            stance: 'Katanas',
            name: 'Pop Quiz!',
            bestUse:
              'Dive de decisão: entrar, completar desafio com dash/hop e sair com cooldowns resetados.',
            execution:
              'Ative já perto da luta. O erro comum é usar longe, gastar segundos andando e perder a janela de 12s.',
            upgradeValue:
              'Muito alto quando dash e katana já estão evoluídos. O pacote de dano + velocidade + cura muda breakpoints.',
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
            why:
              'É o melhor primeiro upgrade porque multiplica acertos, cura, dano, XP e estilo. Também deixa Final Exam muito mais fácil de completar.',
            sourceIds: ['official-deadpool', 'dotesports-strategist', 'reddit-upgrades'],
          },
          {
            rank: 2,
            spellNumber: 1,
            ability: 'Dual Desert Eagles',
            label: 'Pistolas de cura',
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
            why:
              'Base já cura 60/s na área. Upgraded sobe a cura e adiciona 20% de dano boost, excelente para combo com Duelists.',
            sourceIds: ['official-deadpool', 'reddit-upgrades'],
          },
          {
            rank: 5,
            spellNumber: 4,
            ability: 'Healing Hijinks',
            label: 'Dash de cura',
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
            why:
              'Aumenta cura/alcance em melee, mas você não quer depender de melee para manter time vivo.',
            sourceIds: ['official-deadpool'],
          },
          {
            rank: 7,
            spellNumber: 6,
            ability: 'Pwnage Pound',
            label: 'Ultimate de pistola',
            why:
              'Segura e fácil de usar, mas menos decisiva que Final Exam em luta grande. Boa quando entrar de espada e suicídio.',
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
              'Use em alvo que está pressionando seu time. Mantenha distância e continue curando com pistolas enquanto a ultimate trabalha.',
            upgradeValue:
              'Situacional. Evolua cedo apenas se a partida não permite Final Exam sem morrer.',
          },
          {
            stance: 'Katanas',
            name: 'Final Exam',
            bestUse:
              'Teamfight no objetivo, contra engage inimigo ou resposta a ultimates de dano em área.',
            execution:
              'Ative perto do time, jogue Bobblehead no maior grupo de aliados/inimigos e use Healing Hijinks para empilhar hits do desafio.',
            upgradeValue:
              'Alto. A cura sobe, a janela aumenta e completar o desafio adiciona sobrevivência real para o grupo.',
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
]






