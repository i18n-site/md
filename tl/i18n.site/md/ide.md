# Rekomendasyon Ng Editor

Ang bawat tao'y may sariling paboritong editor Dito ibinabahagi namin ang aming `Markdown` pinakamahusay na kagawian.

Ginagamit namin [vscode](https://code.visualstudio.com/) upang magsulat `MarkDown` at i-install ang plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) upang i-preview sa real time habang nagsusulat.

Tulad ng ipinapakita sa ibaba, i-right-click sa editor upang buksan ang preview window.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Ilagay `code xxx.md` sa command line para tawagan `vscode` para buksan ang file `Markdown` .

Gamitin ang [PicList](https://github.com/Kuingsmile/PicList) para mag-upload ng mga larawan, tandaan na itakda ang upload shortcut key, at i-upload ang screenshot sa isang click.

Sinusuportahan nito ang awtomatikong pagkopya ng pangalan ng file sa `Markdown` na format pagkatapos mag-upload, na lubos na nagpapabuti sa kahusayan.

Kasabay nito, maaari kang sumangguni sa sumusunod na configuration, baguhin ang file, at i-configure ang na-upload na file upang awtomatikong i-compress sa `avif` upang bawasan ang laki ng larawan.

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