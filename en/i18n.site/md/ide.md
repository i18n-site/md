# Editor Recommendation

Everyone has their own preferred editor. Here we would like to share our best practices regarding `Markdown`.

We use [vscode](https://code.visualstudio.com/) for writing `Markdown` and have installed the plugin [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) to enable real - time preview while writing.

As shown in the following figure, right - click in the editor to open the preview window.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Enter `code xxx.md` in the command line to open the `Markdown` file with `vscode`.

For picture uploading, use [PicList](https://github.com/Kuingsmile/PicList). Remember to set the upload shortcut key so that you can upload screenshots with one click.

It supports automatically copying the file name into `Markdown` format after uploading, which is highly efficient.

Meanwhile, you can refer to the following configuration, modify the file, and configure the uploaded file to be automatically compressed into `avif` to reduce the picture size.

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