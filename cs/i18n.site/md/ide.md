# Doporučení Redaktora

Každý má svůj oblíbený editor Zde sdílíme naše `Markdown` osvědčených postupů.

Používáme [vscode](https://code.visualstudio.com/) k zápisu `MarkDown` a instalaci zásuvného modulu [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) pro náhled v reálném čase během psaní.

Jak je znázorněno níže, kliknutím pravým tlačítkem myši v editoru otevřete okno náhledu.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Zadejte `code xxx.md` do příkazového řádku pro volání `vscode` pro otevření souboru `Markdown` .

K nahrávání obrázků použijte [PicList](https://github.com/Kuingsmile/PicList) , nezapomeňte nastavit klávesovou zkratku pro nahrávání a nahrajte snímek obrazovky jedním kliknutím.

Podporuje automatické kopírování názvu souboru do formátu `Markdown` po nahrání, což výrazně zvyšuje efektivitu.

Současně se můžete podívat na následující konfiguraci, upravit soubor a nakonfigurovat nahraný soubor tak, aby byl automaticky komprimován na `avif` , aby se zmenšila velikost obrázku.

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