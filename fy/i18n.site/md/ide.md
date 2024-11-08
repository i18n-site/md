# Editor Oanbefelling

Elkenien hat har eigen favorite bewurker Hjir diele wy ús `Markdown` bêste praktiken.

Wy [vscode](https://code.visualstudio.com/) om `MarkDown` te skriuwen en de plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) te ynstallearjen om yn realtime te besjen by it skriuwen.

Lykas hjirûnder werjûn, klikje jo mei de rjochtermûsknop yn 'e bewurker om it foarbyldfinster te iepenjen.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Fier `code xxx.md` yn yn 'e kommandorigel om `vscode` te skiljen om bestân `Markdown` te iepenjen.

Brûk [PicList](https://github.com/Kuingsmile/PicList)

It stipet it automatysk kopiearjen fan de bestânsnamme nei `Markdown` formaat nei it uploaden, wat de effisjinsje sterk ferbetteret.

Tagelyk kinne jo ferwize nei de folgjende konfiguraasje, it bestân wizigje, en it opladen bestân ynstelle om automatysk te komprimearjen nei `avif` om de ôfbyldingsgrutte te ferminderjen.

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