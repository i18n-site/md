# Editorearen Gomendioa

Bakoitzak bere editore gogokoena parteka ditzagun hemen `Markdown`

Idatzi [vscode](https://code.visualstudio.com/) `MarkDown` plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) instalatzen dugu idazten ari zaren bitartean aurrebista egiteko.

Behean erakusten den moduan, egin klik eskuineko botoiarekin editorean aurrebista leihoa irekitzeko.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`code xxx.md` komando lerroan `vscode` ireki `Markdown` fitxategia deitzeko.

Erabili [PicList](https://github.com/Kuingsmile/PicList) argazkiak igotzeko, gogoratu kargatzeko laster-tekla ezartzea eta kargatu pantaila-argazkia klik batekin.

Kargatu ondoren fitxategiaren `Markdown` automatikoki kopiatzea onartzen du, eta horrek eraginkortasuna asko hobetzen du.

Aldi berean, honako konfiguraziora jo dezakezu, fitxategia alda dezakezu eta kargatutako fitxategia automatikoki konprimitzeko konfigura `avif` irudiaren tamaina murrizteko.

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
