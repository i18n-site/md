# Redaktörsrekommendation

Alla har sin egen favoritredigerare Här delar vi med oss av våra `Markdown` bästa praxis.

Vi använder [vscode](https://code.visualstudio.com/) för att skriva `MarkDown` och installera plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) för att förhandsgranska i realtid medan vi skriver.

Som visas nedan, högerklicka i redigeraren för att öppna förhandsgranskningsfönstret.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Ange `code xxx.md` på kommandoraden för att ringa `vscode` för att öppna fil `Markdown` .

Använd [PicList](https://github.com/Kuingsmile/PicList) för att ladda upp bilder, kom ihåg att ställa in kortkommandot för uppladdning och ladda upp skärmdumpen med ett klick.

Den stöder automatisk kopiering av filnamnet till `Markdown` format efter uppladdning, vilket avsevärt förbättrar effektiviteten.

Samtidigt kan du hänvisa till följande konfiguration, ändra filen och konfigurera den uppladdade filen så att den automatiskt komprimeras till `avif` för att minska bildstorleken.

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