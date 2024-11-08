# 编辑器推荐

每个人都有自己习惯的编辑器，这里分享下我们的`Markdown`最佳实践。

我们使用 [vscode](https://code.visualstudio.com/) 写`MarkDown`，同时安装了插件 [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) ，一边写一边实时预览。

如下图，在编辑器中点击右键，可以打开预览窗口。

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

命令行中输入`code xxx.md`即可调用`vscode`打开`Markdown`文件。

图片上传用 [PicList](https://github.com/Kuingsmile/PicList)，记得设置上传快捷键，截图之后一键上传。

它支持在上传后自动复制文件名为`Markdown`格式，非常提高效率。

同时可以参考下面配置，修改文件，配置上传文件自动压缩为`avif`，来减少图片大小。

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
