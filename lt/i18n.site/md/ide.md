# Redaktoriaus Rekomendacija

Kiekvienas turi savo mėgstamą redaktorių. Pasidalinkime geriausia praktika `Markdown`

[vscode](https://code.visualstudio.com/) `MarkDown` ir įdiegiame papildinį [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) , kad peržiūrėtume realiu laiku.

Kaip parodyta toliau, dešiniuoju pelės mygtuku spustelėkite redaktorių, kad atidarytumėte peržiūros langą.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Į komandų eilutę įveskite `code xxx.md` , kad iškviestumėte `vscode` atidaryti `Markdown` failą.

Norėdami įkelti nuotraukas, naudokite [PicList](https://github.com/Kuingsmile/PicList) , nepamirškite nustatyti įkėlimo sparčiojo klavišo ir įkelkite ekrano kopiją vienu paspaudimu.

Jis palaiko automatinį `Markdown` formato kopijavimą po įkėlimo, o tai labai padidina efektyvumą.

Tuo pačiu metu galite peržiūrėti toliau pateiktą konfigūraciją, keisti failą ir sukonfigūruoti įkeltą failą, kad jis būtų automatiškai suglaudintas į `avif`

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
