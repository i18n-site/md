# Toimittajan Suositus

Jokaisella on oma suosikkieditori. Jaetaan parhaat käytännöt täällä `Markdown`

[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) [vscode](https://code.visualstudio.com/) `MarkDown`

Kuten alla näkyy, napsauta editorissa hiiren kakkospainikkeella esikatseluikkunaa.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Syötä komentoriville `code xxx.md` kutsuaksesi `vscode` open `Markdown` -tiedostoa.

[PicList](https://github.com/Kuingsmile/PicList) kuvien lataamiseen, muista asettaa lähetyksen pikanäppäin ja ladata kuvakaappaus yhdellä napsautuksella.

Se tukee `Markdown` automaattista kopioimista latauksen jälkeen, mikä parantaa huomattavasti tehokkuutta.

Samanaikaisesti voit viitata seuraavaan kokoonpanoon, muokata tiedostoa ja määrittää ladatun tiedoston pakattavaksi automaattisesti kuvan koon `avif` .

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
