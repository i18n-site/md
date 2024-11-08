#!/usr/bin/env bash

DIR=$(realpath $0) && DIR=${DIR%/*}
cd $DIR
set -ex

cd zh
rpl '` ' '`'
rpl ' `' '`'
rpl '\/ `' '/ `'
rpl '\|`' '| `'
rpl '`\|' '` |'
rpl '\*`' '* `'
rpl '\.`' '. `'
rpl '#`' '# `'
rpl '`````' '` ``` `'
rpl '````' '` ```'
rpl '` ```rust`' '` ```rust `'
