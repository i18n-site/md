# Redactie-aanbeveling

Iedereen heeft zijn eigen vertrouwde editor; hier delen we onze `Markdown`-best practices.

Wij gebruiken [vscode](https://code.visualstudio.com/) om `Markdown` te schrijven en hebben de plugin [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) geïnstalleerd, zodat we tegelijkertijd kunnen schrijven en een real-time voorbeeld bekijken.

zoals in de onderstaande afbeelding te zien is, kunt u met de rechtermuisknop in de editor klikken om het voorbeeldvenster te openen.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Voer `code xxx.md` in op de opdrachtregel om `vscode` te openen en het `Markdown`-bestand te bekijken.

Gebruik [PicList](https://github.com/Kuingsmile/PicList) om afbeeldingen te uploaden; vergeet niet een sneltoets voor het uploaden in te stellen, zodat u screenshots met één klik kunt uploaden.

Het ondersteunt het automatisch kopiëren van de bestandsnaam in `Markdown`-formaat na het uploaden, wat de efficiëntie aanzienlijk verhoogt.

Tegelijkertijd kunt u de volgende configuratie overwegen, het bestand aanpassen en instellen dat geüploade bestanden automatisch worden gecomprimeerd tot `avif` om de afbeeldingsgrootte te verminderen.

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