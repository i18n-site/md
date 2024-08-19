# Redaktoro Rekomendo

Ĉiu havas sian plej ŝatatan redaktilon Ĉi tie ni dividas niajn `Markdown` plej bonajn praktikojn.

Ni uzas [vscode](https://code.visualstudio.com/) por skribi `MarkDown` kaj instali la kromprogramon [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) por antaŭrigardi en reala tempo dum skribado.

Kiel montrite sube, dekstre alklaku en la redaktilo por malfermi la antaŭrigardan fenestron.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Enigu `code xxx.md` en la komandlinio por voki `vscode` por malfermi dosieron `Markdown` .

Uzu [PicList](https://github.com/Kuingsmile/PicList) por alŝuti bildojn, memoru agordi la alŝutan klavon, kaj alŝutu la ekrankopion per unu klako.

Ĝi subtenas aŭtomate kopii la dosiernomon al `Markdown` formato post alŝuto, kio multe plibonigas efikecon.

Samtempe, vi povas raporti al la sekva agordo, modifi la dosieron kaj agordi la alŝutitan dosieron por esti aŭtomate kunpremita al `avif` por redukti la grandecon de la bildo.

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