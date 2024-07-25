# Toimetaja Soovitus

Igaühel on oma lemmiktoimetaja. Jagame siin oma parimaid tavasid `Markdown`

Kasutame kirjutamise ajal reaalajas eelvaate tegemiseks [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) `MarkDown` [vscode](https://code.visualstudio.com/)

Nagu allpool näidatud, paremklõpsake redaktoris eelvaate akna avamiseks.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Sisestage käsureale `code xxx.md` et helistada `vscode` open `Markdown` faili.

Kasutage piltide üleslaadimiseks [PicList](https://github.com/Kuingsmile/PicList)

See toetab `Markdown` vormingu automaatset kopeerimist pärast üleslaadimist, mis suurendab oluliselt tõhusust.

Samal ajal saate vaadata järgmist konfiguratsiooni, muuta faili ja seadistada üleslaaditud faili automaatseks tihendamiseks `avif` et vähendada pildi suurust.

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
