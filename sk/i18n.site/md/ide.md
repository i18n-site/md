# Odporúčanie Redaktora

Každý má svojho obľúbeného editora Tu zdieľame našich `Markdown` osvedčených postupov.

Používame [vscode](https://code.visualstudio.com/) na písanie `MarkDown` a inštaláciu doplnku [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) na náhľad v reálnom čase počas písania.

Ako je uvedené nižšie, kliknutím pravým tlačidlom myši v editore otvorte okno ukážky.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Zadajte `code xxx.md` do príkazového riadka, aby ste zavolali `vscode` na otvorenie súboru `Markdown` .

Na nahrávanie obrázkov použite [PicList](https://github.com/Kuingsmile/PicList) , nezabudnite nastaviť klávesovú skratku nahrávania a nahrajte snímku obrazovky jedným kliknutím.

Podporuje automatické kopírovanie názvu súboru do formátu `Markdown` po nahraní, čo výrazne zvyšuje efektivitu.

Zároveň si môžete pozrieť nasledujúcu konfiguráciu, upraviť súbor a nakonfigurovať, aby sa nahraný súbor automaticky komprimoval na `avif` , aby sa zmenšila veľkosť obrázka.

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