# Rekomendasyon Sa Editor

Ang matag usa adunay ilang kaugalingon nga paborito nga editor Atong ipaambit ang among labing kaayo nga mga gawi dinhi `Markdown`

Gigamit namo [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) [vscode](https://code.visualstudio.com/) Write `MarkDown`

Sama sa gipakita sa ubos, pag-right-click sa editor aron maablihan ang preview window.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Pagsulod `code xxx.md` sa command line aron tawagan `vscode` open `Markdown` file.

Gamita ang [PicList](https://github.com/Kuingsmile/PicList) sa pag-upload og mga hulagway, hinumdumi nga i-set ang upload shortcut key, ug i-upload ang screenshot sa usa ka click.

Gisuportahan niini ang awtomatik nga pagkopya sa ngalan sa file `Markdown`

Sa samang higayon, mahimo nimong i-refer ang mosunod nga configuration, usba ang file, ug i-configure ang gi-upload nga file aron awtomatikong ma-compress sa `avif`

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
