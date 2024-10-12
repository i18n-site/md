#!/usr/bin/env bash

DIR=$(realpath $0) && DIR=${DIR%/*}
cd $DIR
set -ex
mkdir -p out/ol/htm
cd out/ol/htm
targets=(
  "baidu:/i18n"
  "b2-i18n:/i18nsite"
)

for target in "${targets[@]}"; do
  echo -e "i18n.site\n${target%%:*}" >.js
  rclone copy . "$target"
done
