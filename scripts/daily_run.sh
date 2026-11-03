#!/usr/bin/env bash
# Execução diária do Marvel Rivals Coach: atualiza dados, valida, roda o radar
# visual e — somente se tudo passar — commita e faz push em main.
#
# Uso: bash scripts/daily_run.sh [--dry-run] [--skip-radar] [--force-push]
#   --dry-run     roda todas as checagens, mas não commita nem faz push
#   --skip-radar  pula a matriz visual (útil em máquina sem Chrome)
#   --force-push  faz push mesmo sem mudanças (no-op normalmente)
#
# Saída: logs em logs/daily/ (gitignored), relatório do radar em audit/radar/.
# Exit codes: 0 = sucesso (com ou sem mudanças); 1 = alguma checagem falhou;
#             75 = outra execução em andamento.
set -uo pipefail

REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BRANCH="main"
LOG_DIR="$REPO/logs/daily"
LOCK_FILE="/tmp/marvel-daily-run.lock"
DRY_RUN=0
SKIP_RADAR=0
FORCE_PUSH=0

for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=1 ;;
    --skip-radar) SKIP_RADAR=1 ;;
    --force-push) FORCE_PUSH=1 ;;
    *) echo "argumento desconhecido: $arg" >&2; exit 2 ;;
  esac
done

mkdir -p "$LOG_DIR"
STAMP="$(date +%Y-%m-%d-%H%M%S)"
LOG="$LOG_DIR/daily-$STAMP.log"
: > "$LOG"

log() { printf '%s %s\n' "$(date '+%H:%M:%S')" "$*" >> "$LOG"; }
say() { printf '%s\n' "$*" | tee -a "$LOG"; }

# --- instância única -------------------------------------------------------
exec 9>"$LOCK_FILE"
if ! flock -n 9; then
  say "já existe uma execução em andamento ($LOCK_FILE); abortando"
  exit 75
fi

# --- ambiente --------------------------------------------------------------
cd "$REPO" || { say "repo não encontrado: $REPO"; exit 1; }
export PATH="$HOME/.local/bin:$PATH"
if [ -s "$HOME/.nvm/nvm.sh" ]; then
  # shellcheck disable=SC1091
  source "$HOME/.nvm/nvm.sh" >/dev/null 2>&1
  nvm use --silent 24 >/dev/null 2>&1 || nvm use --silent node >/dev/null 2>&1 || true
fi

say "=== daily run $STAMP (repo=$REPO) ==="
say "node: $(node --version 2>/dev/null || echo 'ausente') | python3: $(python3 --version 2>&1 || echo 'ausente')"

# --- guarda de estado ------------------------------------------------------
if [ -n "$(git status --porcelain)" ]; then
  say "árvore suja no início; as mudanças existentes entram no commit se tudo passar"
fi

if git rev-parse --verify --quiet "origin/$BRANCH" >/dev/null; then
  git fetch --quiet origin "$BRANCH" >> "$LOG" 2>&1 || say "fetch falhou (seguindo com o estado local)"
fi

FAILURES=()
run_step() {
  local name="$1"; shift
  say "--- $name ---"
  local rc=0
  "$@" >> "$LOG" 2>&1 || rc=$?
  if [ "$rc" -eq 0 ]; then
    say "[OK] $name"
    return 0
  fi
  say "[FALHOU rc=$rc] $name"
  FAILURES+=("$name (rc=$rc)")
  return "$rc"
}

# --- pipeline --------------------------------------------------------------
# Dados primeiro: update_rankings reescreve src/data/rankings.ts e o build
# precisa enxergar o estado final. O radar roda por último, sobre dist/ fresco.
run_step "rankings" python3 scripts/update_rankings.py || true
run_step "teamup-audit" python3 scripts/download_teamup_assets.py --audit-partners || true
run_step "validators-roster" python3 scripts/daily_validators.py roster || true
run_step "tests" python3 -m unittest discover -s tests -q || true
run_step "eslint" npx eslint src || true
run_step "build" npm run build || true

if [ "$SKIP_RADAR" -eq 0 ]; then
  run_step "radar" node scripts/radar_qa.cjs || true
else
  say "--- radar pulado (--skip-radar) ---"
fi

# --- decisão ---------------------------------------------------------------
if [ "${#FAILURES[@]}" -gt 0 ]; then
  say "=== RESULTADO: FALHOU ==="
  printf ' - %s\n' "${FAILURES[@]}" | tee -a "$LOG"
  say "nada foi commitado nem enviado. Log: $LOG"
  exit 1
fi

say "=== RESULTADO: todas as checagens passaram ==="
CHANGES="$(git status --porcelain)"
if [ -z "$CHANGES" ] && [ "$FORCE_PUSH" -eq 0 ]; then
  say "sem mudanças para commitar. Log: $LOG"
  exit 0
fi

if [ "$DRY_RUN" -eq 1 ]; then
  say "--- dry-run: mudanças detectadas, commit/push omitidos ---"
  printf '%s\n' "$CHANGES" | head -40 | tee -a "$LOG"
  exit 0
fi

say "--- mudanças detectadas ---"
printf '%s\n' "$CHANGES" | head -40 | tee -a "$LOG"

git add -A >> "$LOG" 2>&1 || { say "git add falhou"; exit 1; }
COMMIT_MSG="chore(daily): atualização e radar $(date +%Y-%m-%d)"
if ! git diff --cached --quiet; then
  git commit -m "$COMMIT_MSG" >> "$LOG" 2>&1 || { say "git commit falhou"; exit 1; }
  say "[OK] commit: $(git log -1 --oneline)"
else
  say "nada staged após git add (provável apenas arquivos ignorados)"
  exit 0
fi

PUSH_OK=0
for attempt in 1 2 3; do
  if git push origin "$BRANCH" >> "$LOG" 2>&1; then PUSH_OK=1; break; fi
  say "push tentativa $attempt falhou; aguardando 30s"
  sleep 30
done
if [ "$PUSH_OK" -ne 1 ]; then
  say "push falhou após 3 tentativas; o commit ficou local. Log: $LOG"
  exit 1
fi

say "[OK] push origin $BRANCH: $(git rev-parse --short HEAD)"
say "log completo: $LOG"
exit 0
