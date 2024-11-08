# Rekomandimi I Redaktorit

Secili ka redaktorin e tij të preferuar Këtu ne ndajmë `Markdown` praktikat tona më të mira.

Ne përdorim [vscode](https://code.visualstudio.com/) për të shkruar `MarkDown` dhe instaluar plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) për të parë në kohë reale gjatë shkrimit.

Siç tregohet më poshtë, kliko me të djathtën në redaktues për të hapur dritaren e shikimit.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Futni `code xxx.md` në vijën e komandës për të thirrur `vscode` për të hapur skedarin `Markdown` .

Përdorni [PicList](https://github.com/Kuingsmile/PicList)

Ai mbështet kopjimin automatik të emrit të skedarit në formatin `Markdown` pas ngarkimit, gjë që përmirëson shumë efikasitetin.

Në të njëjtën kohë, mund t'i referoheni konfigurimit të mëposhtëm, të modifikoni skedarin dhe të konfiguroni skedarin e ngarkuar që të kompresohet automatikisht në `avif` për të zvogëluar madhësinë e imazhit.

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