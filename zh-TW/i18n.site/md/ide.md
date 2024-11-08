# 編輯器推荐

每個人都有自己習慣的編輯器，這里分享下我們的`Markdown`最佳實踐。

我們使用 [vscode](https://code.visualstudio.com/) 寫`MarkDown`，同時安裝了插件 [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) ，一邊寫一邊實時預覽。

如下圖，在編輯器中點擊右鍵，可以打開預覽窗口。

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

命令行中輸入`code xxx.md`即可調用`vscode`打開`Markdown`文件。

圖片上傳用 [PicList](https://github.com/Kuingsmile/PicList)，記得設置上傳快捷鍵，截圖之后一鍵上傳。

它支持在上傳后自動复制文件名為`Markdown`格式，非常提高效率。

同時可以參考下面配置，修改文件，配置上傳文件自動壓縮為`avif`，來減少圖片大小。

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