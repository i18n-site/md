# Doporučení Redaktora

Každý má svůj oblíbený editor. Podělme se zde o naše osvědčené postupy `Markdown`

[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) [vscode](https://code.visualstudio.com/) `MarkDown`

Jak je znázorněno níže, kliknutím pravým tlačítkem myši v editoru otevřete okno náhledu.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Zadáním `code xxx.md` na příkazovém řádku vyvoláte `vscode` open `Markdown` file.

K nahrávání obrázků použijte [PicList](https://github.com/Kuingsmile/PicList) , nezapomeňte nastavit klávesovou zkratku pro nahrávání a nahrajte snímek obrazovky jedním kliknutím.

Podporuje automatické kopírování formátu názvu `Markdown` po nahrání, což výrazně zvyšuje efektivitu.

Současně se můžete podívat na následující konfiguraci, upravit soubor a nakonfigurovat, aby byl nahraný soubor automaticky komprimován na `avif`

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
