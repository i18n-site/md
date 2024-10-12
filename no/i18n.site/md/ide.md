# Redaktøranbefaling

Alle har sin egen favorittredigerer, og her deler vi våre beste praksis for `Markdown`.

Vi bruker [vscode](https://code.visualstudio.com/) til å skrive `Markdown`, og har også installert utvidelsen [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) for sanntidsforhåndsvisning under skriving.

Som vist i figuren nedenfor, kan du høyreklikke i redigeringsverktøyet for å åpne et forhåndsvisningsvindu.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Skriv `code xxx.md` i kommandolinjen for å åpne `Markdown`-filen med `vscode`.

Bruk [PicList](https://github.com/Kuingsmile/PicList) for å laste opp bilder, og husk å sette opp en hurtigtast for opplasting etter skjermbilde.

Den støtter automatisk kopiering av filnavnet i `Markdown`-format etter opplasting, noe som betydelig øker effektiviteten.

Samtidig kan du følge nedenstående konfigurasjon for å endre filen og sette opp automatisk komprimering av opplastede filer til `avif` for å redusere bildestørrelsen.

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