# Aanbeveling Van De Redactie

Iedereen heeft zijn eigen favoriete editor. Hier delen we onze `Markdown` best practices.

We gebruiken [vscode](https://code.visualstudio.com/) om `MarkDown` te schrijven en installeren de plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) om in realtime een voorbeeld te bekijken tijdens het schrijven.

Zoals hieronder weergegeven, klikt u met de rechtermuisknop in de editor om het voorbeeldvenster te openen.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Voer `code xxx.md` in op de opdrachtregel om `vscode` aan te roepen om bestand `Markdown` te openen.

Gebruik [PicList](https://github.com/Kuingsmile/PicList) om foto's te uploaden, vergeet niet de uploadsneltoets in te stellen en upload de schermafbeelding met één klik.

Het ondersteunt het automatisch kopiëren van de bestandsnaam naar `Markdown` formaat na het uploaden, wat de efficiëntie aanzienlijk verbetert.

Tegelijkertijd kunt u de volgende configuratie raadplegen, het bestand wijzigen en configureren dat het geüploade bestand automatisch wordt gecomprimeerd naar `avif` om de afbeeldingsgrootte te verkleinen.

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