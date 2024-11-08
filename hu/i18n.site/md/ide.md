# Szerkesztői Ajánlás

Mindenkinek megvan a saját kedvenc szerkesztője. Itt megosztjuk a `Markdown` gyakorlatainkat.

[vscode](https://code.visualstudio.com/) használjuk `MarkDown` írásához és a [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) beépülő modul telepítéséhez, hogy valós időben megtekinthessük írás közben.

Az alább látható módon kattintson a jobb gombbal a szerkesztőben az előnézeti ablak megnyitásához.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Írja be `code xxx.md` a parancssorba `vscode` hívásához a `Markdown` fájl megnyitásához.

A képek feltöltéséhez használja [PicList](https://github.com/Kuingsmile/PicList)

Támogatja a fájlnév automatikus `Markdown` formátumba másolását a feltöltés után, ami nagyban javítja a hatékonyságot.

Ugyanakkor hivatkozhat a következő konfigurációra, módosíthatja a fájlt, és beállíthatja, hogy a feltöltött fájl automatikusan `avif` -ra legyen tömörítve a képméret csökkentése érdekében.

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