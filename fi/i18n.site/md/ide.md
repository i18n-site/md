# Toimittajan suositus

Jokaisella on oma totutettu editori, ja tässä jaamme parhaat käytännöt `Markdown`-muodossa.

Käytämme [vscode](https://code.visualstudio.com/) kirjoittaessamme `Markdown`-muodossa ja asennamme lisäksi laajennuksen [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) saadaksemme reaaliaikaisen esikatselun kirjoitusprosessin aikana.

Kuten alla olevassa kuvassa näkyy, napsauta hiiren oikealla painikkeella editorissa avataksesi esikatselun.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Komentorivillä kirjoita `code xxx.md` avataksesi `vscode` ja avataksesi `Markdown`-tiedoston.

Käytämme kuvien上传ia [PicList](https://github.com/Kuingsmile/PicList), muista asettaa lähetyspikanäppäin, niin voit ladata kuvakaappauksen yhdellä napsautuksella.

Se tukee automaattista kopiointia `Markdown`-muotoon lataamisen jälkeen, mikä parantaa huomattavasti tehokkuutta.

Samanaikaisesti voit viitata seuraavaan kokoonpanoon ja muokata tiedostoa, jotta ladatut tiedostot pakataan automaattisesti `avif`-muotoon kuvan koon vähentämiseksi.

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