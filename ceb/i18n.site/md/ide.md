# Rekomendasyon Sa Editor

Ang matag usa adunay ilang kaugalingon nga paborito nga editor Dinhi among gipaambit ang among `Markdown` labing maayo nga mga gawi.

Gigamit namo [vscode](https://code.visualstudio.com/) para isulat `MarkDown` ug i-install ang plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) para ma-preview sa tinuod nga oras samtang nagsulat.

Sama sa gipakita sa ubos, pag-right-click sa editor aron maablihan ang preview window.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Pagsulod sa `code xxx.md` sa command line aron tawagan `vscode` aron maablihan ang file `Markdown` .

Gamita [PicList](https://github.com/Kuingsmile/PicList) sa pag-upload og mga hulagway, hinumdumi nga i-set ang upload shortcut key, ug i-upload ang screenshot sa usa ka click.

Gisuportahan niini ang awtomatikong pagkopya sa ngalan sa file sa `Markdown` nga format pagkahuman sa pag-upload, nga labi nga nagpauswag sa kahusayan.

Sa samang higayon, mahimo nimong i-refer ang mosunod nga configuration, usbon ang file, ug i-configure ang gi-upload nga file aron awtomatikong ma-compress ngadto sa `avif` aron makunhuran ang gidak-on sa hulagway.

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