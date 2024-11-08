# Redaktøranbefaling

Alle har sin egen favorittredaktør Her deler vi våre `Markdown` beste praksis.

Vi bruker [vscode](https://code.visualstudio.com/) til å skrive `MarkDown` og installere plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) for å forhåndsvise i sanntid mens vi skriver.

Som vist nedenfor, høyreklikk i redigeringsprogrammet for å åpne forhåndsvisningsvinduet.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Skriv inn `code xxx.md` på kommandolinjen for å ringe `vscode` for å åpne fil `Markdown` .

Bruk [PicList](https://github.com/Kuingsmile/PicList) til å laste opp bilder, husk å angi hurtigtasten for opplasting og last opp skjermbildet med ett klikk.

Den støtter automatisk kopiering av filnavnet til `Markdown` format etter opplasting, noe som forbedrer effektiviteten betraktelig.

Samtidig kan du referere til følgende konfigurasjon, endre filen og konfigurere den opplastede filen til å bli automatisk komprimert til `avif` for å redusere bildestørrelsen.

```json
"buildIn": {
  "compress": {
    "quality": 99,
    "isConvert": true,
    "convertFormat": "avif",
    "isReSize": false,
    "reSizeWidth": 0,
    "reSizeHeight": 0,
    "skipReSizeOfSmallImg": false,
    "isReSizeByPercent": false,
    "reSizePercent": 50,
    "isRotate": false,
    "rotateDegree": 0,
    "isRemoveExif": true,
    "isFlip": false,
    "isFlop": false,
    "formatConvertObj": {}
  },
  … …
```