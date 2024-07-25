# Redaktøranbefaling

Alle har deres egen yndlingsredaktør Lad os dele vores bedste praksis her `Markdown`

Vi bruger [vscode](https://code.visualstudio.com/) og installerer plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) for at få vist i realtid `MarkDown` mens vi skriver.

Som vist nedenfor skal du højreklikke i editoren for at åbne forhåndsvisningsvinduet.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Indtast `code xxx.md` på kommandolinjen for at kalde `vscode` open `Markdown` fil.

Brug [PicList](https://github.com/Kuingsmile/PicList) til at uploade billeder, husk at indstille upload-genvejstasten og upload skærmbilledet med et enkelt klik.

Det understøtter automatisk kopiering af `Markdown` efter upload, hvilket i høj grad forbedrer effektiviteten.

Samtidig kan du henvise til følgende konfiguration, ændre filen og konfigurere den uploadede fil til automatisk at blive komprimeret til `avif`

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
