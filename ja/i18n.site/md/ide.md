# 編集者の推薦

誰もが自分の使い慣れたエディターを持っています。ここで、私たちの`Markdown`のベストプラクティスを共有します。

[vscode](https://code.visualstudio.com/)を使用して`Markdown`を書き、同時に[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)というプラグインをインストールして、書きながらリアルタイムでプレビューします。

下图のように、エディタ内で右クリックするとプレビュー窗口を開くことができます。

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

コマンドラインで`code xxx.md`と入力することで、`vscode`を起動して`Markdown`ファイルを開きます。

[PicList](https://github.com/Kuingsmile/PicList)を使用して画像をアップロードし、アップロードのショートカットキーを設定して、スクリーンショットを一键でアップロードします。

アップロード後にファイル名を`Markdown`形式で自動的にコピーする機能をサポートしており、効率が大幅に向上します。

また、以下の設定を参考にして、アップロードされたファイルを自動的に`avif`形式で圧縮し、画像サイズを減らすように設定することができます。

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