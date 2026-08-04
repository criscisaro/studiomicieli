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

# La password viene passata a curl tramite un file temporaneo con permessi
# ristretti, non come argomento: così non compare nell'elenco dei processi.
CURLRC=""
if ! $DRY_RUN; then
  CURLRC="$(mktemp)"; chmod 600 "$CURLRC"
  printf 'user = "%s:%s"\n' "$FTP_USER" "$FTP_PASS" > "$CURLRC"
  trap 'rm -f "$CURLRC"' EXIT INT TERM
fi

# Dimensione del file sul server (0 se assente).
remote_size() {
  curl -sS --ftp-ssl-control -K "$CURLRC" --head \
      "ftp://${FTP_HOST}${FTP_DIR}$1" 2>/dev/null \
    | awk -F': *' '/[Cc]ontent-[Ll]ength/{gsub(/\r/,"",$2); print $2+0}'
}

# ATTENZIONE, non cambiare in --ssl-reqd: il canale DATI cifrato di Aruba
# tronca i trasferimenti (file arrivati a 0 byte o tagliati a 32 KB, senza
# che curl segnali errore). Con --ftp-ssl-control la cifratura resta sul
# canale di controllo, quindi le credenziali viaggiano protette; il
# contenuto dei file viaggia in chiaro, ma sono file di un sito pubblico.
# Ogni caricamento viene verificato confrontando le dimensioni.
upload() {
  local f="$1" rel="${1#./}" want got try
  if $DRY_RUN; then
    printf "    · %s\n" "$rel"
    return
  fi
  want=$(wc -c < "$f" | tr -d ' ')
  for try in 1 2 3; do
    curl -sS --ftp-ssl-control --ftp-create-dirs -K "$CURLRC" -T "$f" \
      "ftp://${FTP_HOST}${FTP_DIR}${rel}" >/dev/null 2>&1
    got=$(remote_size "$rel")
    if [ "$got" = "$want" ]; then
      printf "    ✓ %-34s %s byte\n" "$rel" "$got"
      return 0
    fi
  done
  printf "    ✗ %-34s atteso %s, sul server %s\n" "$rel" "$want" "${got:-0}" >&2
  return 1
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
