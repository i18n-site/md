# Szerkesztői Ajánlás

Mindenkinek megvan a saját kedvenc szerkesztője. Osszuk meg a legjobb gyakorlatainkat `Markdown`

Írás közben valós idejű előnézethez használjuk a Write [vscode](https://code.visualstudio.com/) `MarkDown` és telepítjük a beépülő [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) .

Az alább látható módon kattintson a jobb gombbal a szerkesztőben az előnézeti ablak megnyitásához.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Írja `code xxx.md` a parancssorba `vscode` open `Markdown` fájl meghívásához.

A képek feltöltéséhez használja [PicList](https://github.com/Kuingsmile/PicList)

Támogatja a `Markdown` formátum automatikus másolását a feltöltés után, ami nagyban javítja a hatékonyságot.

Ugyanakkor hivatkozhat a következő konfigurációra, módosíthatja a fájlt, és beállíthatja, `avif` a feltöltött fájl automatikusan tömörítésre kerüljön a kép méretének csökkentése érdekében.

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
