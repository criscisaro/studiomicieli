#!/usr/bin/env bash
# =====================================================================
# Studio Legale Micieli — pubblicazione sull'hosting Aruba via FTP
#
#   ./deploy-ftp.sh            compila il sito e carica tutto
#   ./deploy-ftp.sh --dry-run  mostra cosa caricherebbe, senza caricare
#
# Le credenziali stanno nel file .ftp-credentials (escluso da git).
# =====================================================================
set -euo pipefail
cd "$(dirname "$0")"

DRY_RUN=false
[ "${1:-}" = "--dry-run" ] && DRY_RUN=true

CRED_FILE=".ftp-credentials"
if [ ! -f "$CRED_FILE" ]; then
  cat <<'EOF'
✗ Manca il file .ftp-credentials

Crealo nella cartella del progetto con dentro (i dati te li da' Aruba,
nel pannello alla voce Hosting > FTP):

    FTP_HOST=ftp.studiolegalemicieli.it
    FTP_USER=il-tuo-utente
    FTP_PASS=la-tua-password
    FTP_DIR=/

FTP_DIR e' la cartella principale del sito sul server: quella in cui
vedi i file del sito. Su Aruba di solito e' / oppure /www/.

Il file e' gia' nel .gitignore: le credenziali non finiscono su GitHub.
EOF
  exit 1
fi

set -a; . "./$CRED_FILE"; set +a
FTP_DIR="${FTP_DIR:-/}"
[[ "$FTP_DIR" != */ ]] && FTP_DIR="$FTP_DIR/"

echo "==> Compilo il sito"
npm run build >/dev/null
echo "    fatto"

cd dist
TOTAL=$(find . -type f | wc -l | tr -d ' ')
echo "==> Carico $TOTAL file su $FTP_HOST$FTP_DIR"
$DRY_RUN && echo "    (prova a vuoto: non carico niente)"

upload() {
  local f="$1" rel="${1#./}"
  if $DRY_RUN; then
    printf "    · %s\n" "$rel"
    return
  fi
  # --ssl: usa FTPS se il server lo supporta, altrimenti FTP normale
  if curl -sS --ssl --ftp-create-dirs -T "$f" \
        --user "$FTP_USER:$FTP_PASS" \
        "ftp://${FTP_HOST}${FTP_DIR}${rel}"; then
    printf "    ✓ %s\n" "$rel"
  else
    printf "    ✗ %s  (NON caricato)\n" "$rel" >&2
    return 1
  fi
}

FAILED=0
# Tutto tranne .htaccess...
while IFS= read -r f; do
  upload "$f" || FAILED=$((FAILED+1))
done < <(find . -type f ! -name '.htaccess')

# ...e il .htaccess per ultimo: al primo caricamento e' il file che fa
# passare il sito da WordPress a questo, quindi va messo alla fine.
[ -f ./.htaccess ] && { upload ./.htaccess || FAILED=$((FAILED+1)); }

echo
if [ "$FAILED" -gt 0 ]; then
  echo "==> Completato con $FAILED errori: ricontrolla le righe con ✗"
  exit 1
fi
$DRY_RUN && { echo "==> Prova a vuoto conclusa."; exit 0; }

echo "==> Sito pubblicato."
echo "    Controlla: https://www.studiolegalemicieli.it/"
echo
echo "    Nota: lo script carica e sovrascrive, ma non cancella dal"
echo "    server i file che hai eliminato dal progetto. Capita di rado;"
echo "    in quel caso rimuovili a mano via FTP."
