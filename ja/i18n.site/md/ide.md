# 編集者の推薦

誰もがお気に入りのエディターを持っています。ここでベスト プラクティスを共有しましょう`Markdown`

[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)書き込み中にリアルタイムでプレビューするために、 [vscode](https://code.visualstudio.com/) Write `MarkDown`を使用してプラグインをインストールします。

以下に示すように、エディタ内で右クリックしてプレビュー ウィンドウを開きます。

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

コマンドラインに`code xxx.md`を入力して`vscode` open `Markdown` file を呼び出します。

[PicList](https://github.com/Kuingsmile/PicList)を使用して写真をアップロードし、アップロードのショートカット キーを忘れずに設定して、ワンクリックでスクリーンショットをアップロードします。

アップロード後のファイル`Markdown`形式の自動コピーをサポートしており、効率が大幅に向上します。

同時に、次の設定を参照してファイルを変更し、アップロードされたファイルを自動的に圧縮して画像サイズを削減するよう`avif`設定できます。

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
