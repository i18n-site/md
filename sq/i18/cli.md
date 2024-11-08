# Shpjegim I Detajuar I Parametrave Të Linjës Së Komandës

## 0 Pastroni `-p`

`-p` ose `--purge` do të pastrojë skedarët që ekzistojnë në çdo drejtori përkthimi, por që nuk ekzistojnë në drejtorinë e gjuhës burimore.

Sepse gjatë shkrimit të dokumenteve, emrat e skedarëve Markdown shpesh rregullohen, gjë që çon në shumë skedarë të vjetër dhe të braktisur në drejtorinë e përkthimit.

Përdoreni këtë parametër për të pastruar skedarët që duhet të fshihen në drejtoritë e gjuhëve të tjera.

## `-d` Specifikon Drejtorinë E Përkthimit

Drejtoria e përkthyer është e paracaktuar në drejtorinë ku ndodhet skedari aktual.

`-d` ose `--workdir` mund të specifikojë drejtorinë e përkthimit, si p.sh.

```
i18 -d ~/i18n/md
```

## `-h` Shikoni Ndihmën

`-h` ose `--help` për të parë ndihmën e linjës së komandës.