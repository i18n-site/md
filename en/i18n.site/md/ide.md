# Editor's Recommendation

Everyone has their preferred editor; here we share our best practices for `Markdown`.

We use [vscode](https://code.visualstudio.com/) to write `Markdown`, and have also installed the plugin [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) to preview our work in real time as we write.

As illustrated below, right-clicking within the editor will allow you to open a preview window.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

You can call `vscode` to open a `Markdown` file by typing `code xxx.md` in the command line.

For image uploads, we use [PicList](https://github.com/Kuingsmile/PicList); don't forget to set up a shortcut key for uploading, so you can upload screenshots with a single click.

It supports automatically copying the file name into `Markdown` format after uploading, which is a significant boost to efficiency.

You can also refer to the following configuration to modify the file, setting it to automatically compress uploaded files to `avif` to reduce image size.

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