# Aanbeveling Van De Redactie

Iedereen heeft zijn eigen favoriete editor. Laten we hier onze best practices delen `Markdown`

We gebruiken [vscode](https://code.visualstudio.com/) Write `MarkDown` installeer de plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) om in realtime een voorbeeld te bekijken tijdens het schrijven.

Zoals hieronder weergegeven, klikt u met de rechtermuisknop in de editor om het voorbeeldvenster te openen.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Voer `code xxx.md` in op de opdrachtregel om `vscode` open `Markdown` file aan te roepen.

Gebruik [PicList](https://github.com/Kuingsmile/PicList) om foto's te uploaden, vergeet niet de uploadsneltoets in te stellen en upload de schermafbeelding met één klik.

Het ondersteunt het automatisch kopiëren van het `Markdown` na het uploaden, wat de efficiëntie aanzienlijk verbetert.

Tegelijkertijd kunt u de volgende configuratie raadplegen, het bestand wijzigen en het geüploade bestand zo configureren dat het automatisch wordt gecomprimeerd tot `avif`

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
