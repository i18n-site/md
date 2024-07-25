# Editor Recommendation

Everyone has their own favorite editor. Let’s share our best practices here `Markdown`

We use [vscode](https://code.visualstudio.com/) Write `MarkDown` and install the plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) to preview in real time while writing.

As shown below, right-click in the editor to open the preview window.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Enter `code xxx.md` on the command line to call `vscode` open `Markdown` file.

Use [PicList](https://github.com/Kuingsmile/PicList) to upload pictures, remember to set the upload shortcut key, and upload the screenshot with one click.

It supports automatically copying the file name `Markdown` format after uploading, which greatly improves efficiency.

At the same time, you can refer to the following configuration, modify the file, and configure the uploaded file to be automatically compressed to `avif` to reduce the image size.

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
