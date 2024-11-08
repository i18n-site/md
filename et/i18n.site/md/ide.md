# Toimetaja Soovitus

Igaühel on oma lemmiktoimetaja. Siin jagame oma `Markdown` parimat tava.

[vscode](https://code.visualstudio.com/) `MarkDown` kirjutamiseks ja lisandmooduli [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) installimiseks reaalajas eelvaateks kirjutamise ajal.

Nagu allpool näidatud, paremklõpsake redaktoris eelvaate akna avamiseks.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Faili `vscode` avamiseks `Markdown` käsureale `code xxx.md` .

Kasutage piltide üleslaadimiseks [PicList](https://github.com/Kuingsmile/PicList)

See toetab failinime automaatset kopeerimist `Markdown` vormingusse pärast üleslaadimist, mis parandab oluliselt tõhusust.

Samal ajal saate vaadata järgmist konfiguratsiooni, muuta faili ja seadistada üleslaaditud faili automaatne tihendamine väärtusele `avif` , et vähendada pildi suurust.

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