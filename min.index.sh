#!/usr/bin/env bash

DIR=$(realpath $0) && DIR=${DIR%/*}
cd $DIR
set -ex

if ! command -v minhtml &>/dev/null; then
  cargo install minify-html
fi
cd public
minhtml --output index.html --minify-css index.html
