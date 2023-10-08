#!/usr/bin/env bash

DIR=$(realpath $0) && DIR=${DIR%/*}
cd $DIR
set -ex
git add . && git commit -m ✍️ || true
git pull

bun x i18n $@

git add . && git commit -m i18n || true
git push
