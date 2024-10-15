# プラグイン

`.i18n/conf.yml`では、以下のようなプラグインを設定することができます

```yml
addon:
  - i18n.addon/toc
```

## 公式プラグイン

* `i18n.addon/toc` : ディレクトリインデックス
  `TOC`に基づいて`json`のディレクトリ インデックスを生成 (デフォルトで有効)

* `i18n.addon/mouse` : マウスエフェクト

## ファイル名の命名規則

プラグインはすべて`npm`のパッケージです。

上記の`i18n.addon/toc`に対応するパッケージは [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc) です。

プラグインはデフォルトで最新バージョンを使用し、毎週更新をチェックします。

バージョンを固定したい場合は、`i18n.addon/toc@0.1.3` と記述します。

翻訳コマンド `i18n.site` は、プラグインパッケージの規約ファイルをインストールし、実行します。

規約ファイル名は以下の通りです:

### htmIndex.js

`htmIndex.js` は `.i18n/htm/index.js` の末尾に注入されます。

ここで、`__CONF__` は現在の設定名(例えば `dev` または `ol`)に置き換えられます。

### afterTran.js

翻訳が完了した後に呼び出され、以下の引数が渡されます。

* `lang_li` : 言語リスト、最初の言語がソース言語です
* `changed` : 変更されたファイル
* `root` : プロジェクトのルートディレクトリ

戻り値は以下のような辞書です

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` は出力ファイルのリストで、`path` はファイルのパス、`txt` はファイルの内容です。

## 組み込み関数

内蔵の `js` ランタイムは [boa](https://github.com/boa-dev/boa) を基に二次開発されたもので、以下の内蔵関数を提供しています:

* `wPath(path, txt)` : ファイルに書き込みます
* `rTxt(path)` : テキストファイルを読み込みます
* `rBin(path)` : バイナリファイルを読み込みます
* `rDir(dirpath)` : ディレクトリを読み取り、以下の配列を返します:ディレクトリリスト、ファイルリスト

## 開発ガイド

プラグイン開発は [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon) を参照してください