# Duelní doporučení editoru

Každý má svůj oblíbený editor; zde se podělíme o naše nejlepší praxe pro `Markdown`.

Používáme [vscode](https://code.visualstudio.com/) k psaní `Markdown` a zároveň jsme nainstalovali zásuvný modul [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced), který nám umožňuje sledovat náhled v reálném čase při psaní.

Jako na následujícím obrázku, klikněte pravým tlačítkem v editoru a otevřete okno náhledu.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Použijte příkaz `code xxx.md` v příkazové řádce pro otevření souboru `Markdown` v `vscode`.

Pro nahrávání obrázků používáme [PicList](https://github.com/Kuingsmile/PicList); nezapomeňte nastavit zkratku pro nahrávání, a pořízený snímek obrazovky můžete nahradit jediným kliknutím.

Podporuje automatické zkopírování názvu souboru do formátu `Markdown` po nahrání, což výrazně zvyšuje efektivitu.

Současně se můžete odkazovat na následující konfiguraci, upravit soubor tak, aby nahrané soubory byly automaticky komprimovány do formátu `avif`, čímž se snižuje velikost obrázků.

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