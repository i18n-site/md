# Toimittajan suositus

Jokaisella on oma tottumuseditorinsa, ja tässä jaamme parhaat käytännöt `Markdown`-muodossa.

Käytämme [vscode](https://code.visualstudio.com/) kirjoittaessamme `Markdown`-muodossa ja asennamme lisäosan [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) saadaksemme reaaliaikaisen esikatselun kirjoitusprosessin aikana.

Kuten alla olevasta kuvasta näkyy, napsauta hiiren oikealla painikkeella editorissa avataksesi esikatselun.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Komentorivillä kirjoita `code xxx.md` avataksesi `vscode` ja avataksesi `Markdown`-tiedoston.

Käytämme [PicList](https://github.com/Kuingsmile/PicList) kuvien上传ille, muista asettaa pikanäppäin kuvien lähettämistä varten, niin voit lähettää kuvakaappauksen yhdellä napsautuksella.

Se tukee automaattista kopiointia `Markdown`-muotoon kuvan上传in jälkeen, mikä parantaa merkittävästi tehokkuutta.

Samanaikaisesti voit viitata seuraavaan asetukseen, muokata tiedostoa ja määrittää automaattisesti pakattavaksi `avif`-muotoon, mikä pienentää kuvan kokoa.

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