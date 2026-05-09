# Marvel Rivals Coach

## Premissa do projeto

Este app é uma base viva de coaching para Marvel Rivals. Ele não deve ser uma ficha genérica de personagem. Cada herói precisa ter análises diretas, específicas e práticas: como jogar, quando escolher a role, qual habilidade evoluir, como usar ultimate, qual é o ponto-chave mecânico e quais adaptações fazer contra composições reais.

## Padrão de pesquisa

Ao adicionar ou atualizar um personagem, pesquisar e registrar evidências de fontes diferentes:

- Fonte oficial: site de Marvel Rivals, patch notes, página de habilidades e anúncios.
- Wiki/public database: Marvel Rivals Wiki, wiki.gg, Liquipedia ou equivalente para valores e imagens públicas.
- Guias escritos: sites especializados, desde que a recomendação seja específica do herói.
- Fórum/comunidade: Reddit, Discord exportado, comentários de mains, discussões de meta recente.
- Vídeos/transcrições: guias no YouTube, VODs, coach review e transcrições com timestamps quando possível.

Não inventar dado de vídeo sem transcrição ou anotação auditável. Se vídeo ainda não foi processado, deixar fonte como pendente.

## Enriquecimento de dados

Cada personagem deve guardar dados em estrutura tipada, hoje em `src/data/heroes.ts`, com:

- `portraitUrl` e `bannerUrl`: foto do personagem. Prioridade: asset oficial. Fallback: Wiki/public asset. Sempre preferir links públicos estáveis.
- `sources`: lista de fontes com tipo, URL, confiança e takeaways.
- `sourceCoverage`: contagem por categoria para mostrar o quanto a análise está enriquecida.
- `systems`: sistemas globais do personagem.
- `roleGuides`: guia por role, com plano de upgrade, adaptações, ultimates, dash/mecânica-chave, padrões de luta, erros comuns e evidências.

## Qualidade da análise

Toda recomendação deve responder:

- O que fazer primeiro.
- Por que isso ganha a próxima luta.
- Quando trocar a ordem.
- Qual habilidade e ponto-chave do personagem.
- Que erro comum faz o personagem parecer ruim.
- Quais fontes sustentam a recomendação.

Evitar frases como "jogue agressivo", "use suas habilidades" ou "mantenha posicionamento" sem contexto específico. Transformar toda dica em instrução aplicável.

## Exemplo de novo prompt

Se o usuário disser "procure para a Luna Snow", seguir este fluxo:

1. Confirmar o nome correto se houver erro de transcrição evidente, mas seguir com a melhor inferência quando for seguro.
2. Buscar fonte oficial, wiki/public asset, guias, fórum e vídeos/transcrições.
3. Popular a estrutura do personagem com foto, fontes e análise específica.
4. Explicar no app quais fontes ainda estão pendentes.
5. Rodar build/lint antes de encerrar quando houver alteração de código.

## Princípio de interface

A tela inicial deve parecer uma seleção de personagens do jogo: visual forte, busca rápida por nome/apelido, cards com foto, roles visíveis e acesso imediato ao guia. A leitura precisa ser fluida: o usuário deve achar rápido "o que eu evoluo agora" e depois aprofundar em dash, ultimate, erros e evidências.

## Layout por personagem

O layout do guia deve servir à mecânica central do personagem, não o contrário. Não reaproveitar cegamente a estrutura de outro herói.

- Se o personagem tem sistema de upgrades, livro, talentos ou escolhas numeradas, como o Deadpool, faz sentido ter bloco de ordem de upgrade, número da magia e prioridades por role.
- Se o personagem gira em torno de recurso, loja, relíquias, forma, combo, postura ou rotação, criar uma experiência própria para isso. A Gata Negra, por exemplo, deve mostrar Fortuna, Gilded Deal, relíquias, plano de roubo, execução, saída e Calling Card, sem citar Deadpool nem fingir que ela tem livrinho.
- A estrutura de dados pode continuar compartilhada quando ajudar, mas a renderização pode ser específica por personagem quando isso melhora clareza e leitura.
- O tema visual também deve acompanhar o personagem selecionado, usando uma paleta derivada da arte/capa quando possível.
- Antes de finalizar um novo herói, perguntar: "Qual é a coisa que esse personagem precisa dominar para ficar bom?" O layout deve responder essa pergunta na primeira leitura.





