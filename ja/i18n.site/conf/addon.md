# プラグイン

`.i18n/conf.yml`では、次のようなプラグインを設定できます。

```yml
addon:
  - i18n.addon/toc
```

## 公式プラグイン

* `i18n.addon/toc` :ディレクトリインデックス
  `TOC`に基づいて`json`のディレクトリ インデックスを生成 (デフォルトで有効)

* `i18n.addon/mouse` :マウスの効果

## ファイル名の規則

プラグインはすべて`npm`パッケージです。

上記の`i18n.addon/toc`に対応するパッケージは[https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

プラグインはデフォルトで最新バージョンを使用し、更新を毎週チェックします。

バージョンを修正したい場合は、 `i18n.addon/toc@0.1.3`書き込むことができます。

変換コマンド ライン`i18n.site`は、プラグイン パッケージの規約ファイルをインストールして実行します。

合意されたファイル名は次のとおりです

### htmIndex.js

`htmIndex.js` `.i18n/htm/index.js`の最後に挿入されます。

ここで、 `__CONF__`現在の構成の名前 ( `dev`や`ol`など) に置き換えられます。

### afterTran.js

翻訳が完了した後に呼び出され、渡されるパラメータは次のとおりです。

* `lang_li` :言語リスト、最初の言語がソース言語です
* `changed` :変更されたファイル
* `root` :プロジェクトのルートディレクトリ

戻り値は次のような辞書です。

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file`は出力ファイルのリスト、 `path`はファイル パス、 `txt`ファイルの内容です。

## 組み込み関数

組み込みの`js`ランタイムは[boa](https://github.com/boa-dev/boa)の二次開発に基づいており、組み込み関数は次のとおりです:

* `wPath(path, txt)` :ファイルに書き込みます
* `rTxt(path)` :テキストファイルを読み込みます
* `rBin(path)` :バイナリファイルを読み込みます
* `rDir(dirpath)` :ディレクトリを読み取り、戻り値は配列:リスト、ファイルリスト

## 開発ガイド

プラグイン開発の参考になります[https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)