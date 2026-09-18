---
name: ability-loop-keycap-obrigatorio
description: Entrada de abilityLoop sem match no upgradePlan vira card sem keycap em silêncio; usar objeto { ability, input } quando o nome não casar
module: ui
metadata:
  type: project
---
**Why:** O `buildLoop` do `PrimerSection` renderiza o keycap a partir do passo do `upgradePlan`; quando o nome do `abilityLoop` não casa (exato/prefixo) e não é ultimate, o card sai sem badge — foi o caso de 'Iron Bulwark' no Magneto (upgradePlan tem 'Metal Bulwark' com input 'E', mas Iron Bulwark é 'F').
**How to apply:** `abilityLoop` aceita `string | { ability, input }`; ao adicionar habilidade que não existe no `upgradePlan`, usar `{ ability: 'Iron Bulwark', input: 'F' }` com token canônico. Testar o loop renderizado (`document.querySelectorAll('.ability-loop-step')` sem `.control-badge` = bug) antes de finalizar um herói.
