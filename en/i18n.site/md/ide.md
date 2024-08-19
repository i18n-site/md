# Editor Recommendation

Everyone has their own accustomed editor. Hereinafter, we will share our `Markdown` best practices.

We use [vscode](https://code.visualstudio.com/) to write `MarkDown`, and install the plugin [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) to preview in real time while writing.

As shown in the figure below, right-click in the editor to open the preview window.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Enter `code xxx.md` in the command line to call `vscode` to open the `Markdown` file.

Use [PicList](https://github.com/Kuingsmile/PicList) for picture uploading. Remember to set the upload shortcut key, and upload the screenshot with one click.

It supports automatically copying the file name into the `Markdown` format after uploading, which greatly improves efficiency.

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