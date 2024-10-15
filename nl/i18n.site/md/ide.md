# Redactie-aanbeveling

Iedereen heeft zijn eigen vertrouwde editor; hier delen we onze `Markdown`-best practices.

Wij gebruiken [vscode](https://code.visualstudio.com/) om `Markdown` te schrijven en hebben de plugin [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) geïnstalleerd, zodat we tijdens het schrijven een real-time voorbeeld kunnen bekijken.

Zoals in de onderstaande afbeelding te zien is, kunt u met de rechter muisknop klikken in de editor om het voorbeeldvenster te openen.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Typ `code xxx.md` in de opdrachtregel om `vscode` te openen en het `Markdown`-bestand te openen.

Gebruik [PicList](https://github.com/Kuingsmile/PicList) voor het uploaden van afbeeldingen; vergeet niet een sneltoets voor het uploaden in te stellen, zodat u na het schieten van een schermafbeelding met één klik kunt uploaden.

Dit ondersteunt het automatisch kopiëren van de bestandsnaam naar het `Markdown`-formaat na het uploaden, wat de efficiëntie aanzienlijk verhoogt.

Tegelijkertijd kunt u de onderstaande configuratie overwegen, het bestand wijzigen en instellen dat geüploade bestanden automatisch worden gecomprimeerd tot `avif` om de afbeeldingsgrootte te verminderen.

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