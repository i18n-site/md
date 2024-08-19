# Redaktörsrekommendation

Var och en har sin egen favoritredigerare, här delar vi med oss av våra bästa praxis för `Markdown`.

Vi använder [vscode](https://code.visualstudio.com/) för att skriva `Markdown` och har installerat tillägget [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) för att förhandsgranska i realtid medan vi skriver.

Som visas i figuren nedan, högerklicka i redigeraren för att öppna förhandsgranskningsfönstret.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Skriv `code xxx.md` i kommandoraden för att öppna `Markdown`-filen med `vscode`.

Använd [PicList](https://github.com/Kuingsmile/PicList) för att ladda upp bilder, kom ihåg att konfigurera uppladdningsgenvägen, så att du kan ladda upp skärmdumpar med ett enda klick.

Det stödjer automatisk kopiering av filnamnet i `Markdown`-format efter uppladdning, vilket avsevärt ökar effektiviteten.

Samtidigt kan du följa nedanstående konfiguration för att ändra filen och konfigurera automatisk kompression av uppladdade filer till `avif`, vilket minskar bildstorleken.

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