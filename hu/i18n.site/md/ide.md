# Szerkesztői ajánlás

Mindenkinek megvan a saját szokásos szerkesztője, itt megosztjuk a `Markdown` legjobb gyakorlatainkat.

[vscode](https://code.visualstudio.com/) szerkesztőt használunk a `Markdown` írásához, és telepítettük a [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) bővítményt a valós idejű előnézet érdekében.

Mint az alábbi képen látható, a szerkesztőben jobb gombbal kattintva megnyithatjuk az előnézeti ablakot.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

A parancssorban a `code xxx.md` parancsot használva nyithatjuk meg a `vscode` szerkesztővel a `Markdown` fájlt.

Képek feltöltéséhez a [PicList](https://github.com/Kuingsmile/PicList) alkalmazást használjuk.

Támogatja a fájlnév automatikus másolását `Markdown` formátumba a feltöltés után, ami jelentősen növeli a hatékonyságot.

Ugyanakkor tekintettel lehet az alábbi konfigurációra, hogy a fájlokat automatikusan `avif` formátumba tömörítse a képméret csökkentése érdekében.

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