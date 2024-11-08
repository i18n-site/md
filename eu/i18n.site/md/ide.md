# Editorearen Gomendioa

Bakoitzak bere editore gogokoena du. Hemen gure `Markdown` praktika onenak partekatzen ditugu.

[vscode](https://code.visualstudio.com/) `MarkDown` idazteko eta plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) instalatzeko erabiltzen dugu idazten ari zaren bitartean denbora errealean aurreikusteko.

Behean erakusten den moduan, egin klik eskuineko botoiarekin editorean aurrebista leihoa irekitzeko.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Sartu `code xxx.md` komando lerroan `vscode` deitzeko `Markdown` fitxategia irekitzeko.

Erabili [PicList](https://github.com/Kuingsmile/PicList) argazkiak igotzeko, gogoratu kargatzeko laster-tekla ezartzea eta kargatu pantaila-argazkia klik batekin.

Kargatu ondoren fitxategiaren izena `Markdown` formatura automatikoki kopiatzea onartzen du, eta horrek eraginkortasuna asko hobetzen du.

Aldi berean, honako konfiguraziora jo dezakezu, fitxategia alda dezakezu eta kargatutako fitxategia automatikoki `avif` -ra konprimitzeko konfigura dezakezu irudiaren tamaina murrizteko.

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