# Priporočilo Urednika

Vsakdo ima svojega najljubšega urejevalnika. Tukaj delimo naše `Markdown` prakse.

Uporabljamo [vscode](https://code.visualstudio.com/) write `MarkDown` in namestimo vtičnik [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) za predogled v realnem času med pisanjem.

Kot je prikazano spodaj, z desno tipko miške kliknite v urejevalniku, da odprete okno za predogled.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Vnesite `code xxx.md` v ukazno vrstico, da pokličete `vscode` in odprete datoteko `Markdown` .

Uporabite [PicList](https://github.com/Kuingsmile/PicList) naložite slike, ne pozabite nastaviti bližnjične tipke za nalaganje in naložite posnetek zaslona z enim klikom.

Podpira samodejno kopiranje imena datoteke v format `Markdown` po nalaganju, kar močno izboljša učinkovitost.

Hkrati si lahko ogledate naslednjo konfiguracijo, spremenite datoteko in konfigurirate naloženo datoteko tako, da se samodejno stisne na `avif` , da se zmanjša velikost slike.

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