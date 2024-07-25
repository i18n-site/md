# Redaktörsrekommendation

Alla har sin egen favoritredigerare. Låt oss dela med oss ​​av våra bästa metoder här `Markdown`

Vi använder [vscode](https://code.visualstudio.com/) och installerar plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) för att förhandsgranska i realtid medan du skriver `MarkDown`

Som visas nedan, högerklicka i redigeraren för att öppna förhandsgranskningsfönstret.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Ange `code xxx.md` på kommandoraden för att anropa `vscode` open `Markdown` -fil.

Använd [PicList](https://github.com/Kuingsmile/PicList) för att ladda upp bilder, kom ihåg att ställa in kortkommandot för uppladdning och ladda upp skärmdumpen med ett klick.

Den stöder automatisk kopiering av `Markdown` efter uppladdning, vilket avsevärt förbättrar effektiviteten.

Samtidigt kan du hänvisa till följande konfiguration, ändra filen och konfigurera den uppladdade filen så att den automatiskt komprimeras till `avif`

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
