#!/usr/bin/env bash

DIR=$(realpath $0) && DIR=${DIR%/*}
cd $DIR
set -ex
git add . && git commit -m ✍️ || true
git pull

if command -v nc &>/dev/null; then
  nc -z -w 1 127.0.0.1 7890 && export https_proxy=http://127.0.0.1:7890
fi

bun x i18n $@

git add . && git commit -m i18n || true
git push
