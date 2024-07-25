# Rekomendasyon Ng Editor

Ang bawat isa ay may sariling paboritong editor. Ibahagi natin ang aming pinakamahuhusay na kagawian dito `Markdown`

Ginagamit namin ang [vscode](https://code.visualstudio.com/) Write `MarkDown` at i-install ang plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) para i-preview nang real time habang nagsusulat.

Tulad ng ipinapakita sa ibaba, i-right-click sa editor upang buksan ang preview window.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Ipasok ang `code xxx.md` sa command line para tawagan `vscode` open `Markdown` file.

Gamitin ang [PicList](https://github.com/Kuingsmile/PicList) para mag-upload ng mga larawan, tandaan na itakda ang upload shortcut key, at i-upload ang screenshot sa isang click.

Sinusuportahan nito ang awtomatikong pagkopya ng pangalan ng file `Markdown`

Kasabay nito, maaari kang sumangguni sa sumusunod na configuration, baguhin ang file, at i-configure ang na-upload na file upang awtomatikong i-compress sa `avif`

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
