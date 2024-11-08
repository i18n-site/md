# Meðmæli Ritstjóra

Allir hafa sinn uppáhalds ritstjóra. Hér deilum við `Markdown` bestu starfsvenjum okkar.

Við notum [vscode](https://code.visualstudio.com/) til að skrifa `MarkDown` og setja upp viðbótina [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) til að forskoða í rauntíma á meðan þú skrifar.

Eins og sýnt er hér að neðan, hægrismelltu í ritlinum til að opna forskoðunargluggann.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Sláðu inn `code xxx.md` í skipanalínunni til að hringja í `vscode` til að opna skrá `Markdown` .

Notaðu [PicList](https://github.com/Kuingsmile/PicList) til að hlaða upp myndum, mundu að stilla flýtileiðarlykilinn og hlaða upp skjámyndinni með einum smelli.

Það styður sjálfkrafa afritun skráarnafnsins á `Markdown` snið eftir upphleðslu, sem eykur skilvirkni til muna.

Á sama tíma geturðu vísað í eftirfarandi uppsetningu, breytt skránni og stillt upphlaðna skrá þannig að hún verði sjálfkrafa þjappað niður í `avif` til að minnka myndstærðina.

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