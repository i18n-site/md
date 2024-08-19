# Redaktøranbefaling

Alle har deres egen foretrukne editor. Her deler vi vores bedste praksis med `Markdown`.

Vi bruger [vscode](https://code.visualstudio.com/) til at skrive `Markdown`, og har installeret pluginet [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) for at få en realtidsvisning, mens vi skriver.

Som på figuren nedenfor, kan du højreklikke i editoren for at åbne et forhåndsvisningsvindue.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Skriv `code xxx.md` i kommandolinjen for at åbne `Markdown`-filen med `vscode`.

Bruk [PicList](https://github.com/Kuingsmile/PicList) til at uploade billeder, husk at indstille en uploadgenvejstast, så du kan uploade skærmbilleder med et enkelt klik.

Det understøtter automatisk kopiering af filnavnet i `Markdown`-format efter upload, hvilket væsentligt øger effektiviteten.

Samtidig kan du følge nedenstående konfiguration for at ændre filen, så uploadede filer automatisk komprimeres til `avif` for at reducere billedstørrelsen.

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