# Toimittajan Suositus

Jokaisella on oma suosikkieditori Tässä jaamme `Markdown` parasta käytäntöämme.

Käytämme [vscode](https://code.visualstudio.com/) n kirjoittamiseen `MarkDown` ja asennamme laajennuksen [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) esikatsellaksesi reaaliajassa kirjoittamisen aikana.

Kuten alla näkyy, napsauta editorissa hiiren kakkospainikkeella esikatseluikkunaa.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Syötä `code xxx.md` komentoriville kutsuaksesi `vscode` avataksesi tiedoston `Markdown` .

[PicList](https://github.com/Kuingsmile/PicList) kuvien lataamiseen, muista asettaa lähetyksen pikanäppäin ja ladata kuvakaappaus yhdellä napsautuksella.

Se tukee tiedostonimen automaattista kopioimista `Markdown` muotoon latauksen jälkeen, mikä parantaa huomattavasti tehokkuutta.

Samanaikaisesti voit viitata seuraavaan kokoonpanoon, muokata tiedostoa ja määrittää ladatun tiedoston pakattavaksi automaattisesti arvoon `avif` kuvan koon pienentämiseksi.

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