#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Egemen Makine web sitesi başlatılıyor..."

if ! command -v node >/dev/null 2>&1; then
  echo "HATA: Node.js kurulu değil. https://nodejs.org adresinden LTS sürümünü kurun."
  exit 1
fi

npm install
echo "Tarayıcıda açın: http://localhost:3000"
npm run dev
