# Editor Recommendation

Everyone has their preferred editor. Here, we share our `Markdown` best practices.

We use [vscode](https://code.visualstudio.com/) to write `Markdown` and have installed the [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) plugin to enable real-time preview while writing.

As shown in the image below, right-click in the editor to open the preview window.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

To open a `Markdown` file in `vscode`, enter `code xxx.md` in the command line.

For image uploads, use [PicList](https://github.com/Kuingsmile/PicList) and remember to set up a shortcut key for quick uploads after taking a screenshot.

It supports automatically copying the file name in `Markdown` format after uploading, significantly enhancing efficiency.

You can also refer to the configuration below, modify the file, and set up automatic compression of uploaded images to `avif` to reduce file size.

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