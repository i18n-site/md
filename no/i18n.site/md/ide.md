# Redaktøranbefaling

Alle har sin egen favoritt-redaktør; her deler vi våre beste praksis for `Markdown`.

Vi bruker [vscode](https://code.visualstudio.com/) til å skrive `Markdown`, og har installert utvidelsen [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) for å se en sanntidsforhåndsvisning mens vi skriver.

Som vist i figuren nedenfor, kan du høyreklikke i redigeringsprogrammet for å åpne et forhåndsvisningsvindu.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Du kan skrive `code xxx.md` i kommandolinjen for å åpne `Markdown`-filen med `vscode`.

Bruk [PicList](https://github.com/Kuingsmile/PicList) til å laste opp bilder; husk å sette opp en hurtigtast for opplasting, så kan du laste opp skjermbilder med ett klikk.

Den støtter automatisk kopiering av filnavnet i `Markdown`-format etter opplasting, noe som betydelig øker effektiviteten.

Samtidig kan du følge følgende konfigurasjon for å endre filen, og sette opp at opplastede filer automatisk komprimeres til `avif` for å redusere bildestørrelsen.

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