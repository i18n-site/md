# 編集者の推薦

誰もがお気に入りのエディターを持っています。ここでは、 `Markdown`ベスト プラクティスを紹介します。

[vscode](https://code.visualstudio.com/)使用して`MarkDown`書き込み、プラグインをインストールします[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)書き込み中にリアルタイムでプレビューします。

以下に示すように、エディタ内で右クリックしてプレビュー ウィンドウを開きます。

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

コマンドラインに`code xxx.md`入力して`vscode`呼び出し、ファイル`Markdown`を開きます。

[PicList](https://github.com/Kuingsmile/PicList)使用して写真をアップロードし、アップロードのショートカット キーを忘れずに設定して、ワンクリックでスクリーンショットをアップロードします。

アップロード後にファイル名を`Markdown`形式に自動的にコピーする機能をサポートしており、効率が大幅に向上します。

同時に、次の設定を参照してファイルを変更し、アップロードされたファイルを自動的に`avif`に圧縮して画像サイズを削減するように設定できます。

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