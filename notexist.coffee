#!/usr/bin/env coffee
import uridir from '@w5/uridir'

ROOT = uridir import.meta

console.log ROOT
# > zx/globals:
#   @w5/uridir
#
# < default main = =>
#   ROOT = uridir(import.meta)
#   cd ROOT
#
#   await $"ls #{ROOT}"
#   await $'pwd'
#   return
#
# if process.argv[1] == decodeURI (new URL(import.meta.url)).pathname
#   await main()
#   process.exit()
#
