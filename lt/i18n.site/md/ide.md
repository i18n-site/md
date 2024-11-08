# Redaktoriaus Rekomendacija

Kiekvienas turi savo mėgstamą redaktorių. Dalinamės `Markdown` geriausių praktikų.

Mes naudojame [vscode](https://code.visualstudio.com/) norėdami parašyti `MarkDown` ir įdiegti papildinį [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) , kad peržiūrėtume realiu laiku rašydami.

Kaip parodyta toliau, dešiniuoju pelės mygtuku spustelėkite redaktorių, kad atidarytumėte peržiūros langą.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Į komandų eilutę įveskite `code xxx.md` , kad iškviestumėte `vscode` ir atidarytumėte `Markdown` failą.

Norėdami įkelti nuotraukas, naudokite [PicList](https://github.com/Kuingsmile/PicList) , nepamirškite nustatyti įkėlimo sparčiojo klavišo ir įkelkite ekrano kopiją vienu paspaudimu.

Jis palaiko automatinį failo pavadinimo kopijavimą į `Markdown` formatą po įkėlimo, o tai labai pagerina efektyvumą.

Tuo pačiu metu galite peržiūrėti toliau pateiktą konfigūraciją, modifikuoti failą ir sukonfigūruoti, kad įkeltas failas būtų automatiškai suspaustas iki `avif` , kad sumažintumėte vaizdo dydį.

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