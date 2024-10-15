# 編集者の推薦

誰もが自分の使い慣れたエディターを持っています。ここで私たちの`Markdown`のベストプラクティスを共有します。

[vscode](https://code.visualstudio.com/)を使用して`Markdown`を書き込み、同時に[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)というプラグインをインストールして、書き込みながらリアルタイムでプレビューを行います。

下图のように、エディタ内で右クリックすることでプレビューウィンドウを開くことができます。

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

コマンドラインに`code xxx.md`と入力することで`vscode`を起動し、`Markdown`ファイルを開くことができます。

[PicList](https://github.com/Kuingsmile/PicList)を使用して画像をアップロードし、アップロードのショートカットキーを設定することを忘れずに、スクリーンショットを一键でアップロードします。

アップロード後にファイル名を`Markdown`形式で自動的にコピーする機能をサポートしており、効率が大幅に向上します。

また、以下の設定を参考にして、ファイルを変更し、アップロードされた画像を自動的に`avif`形式に圧縮して画像サイズを減らすように設定することができます。

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