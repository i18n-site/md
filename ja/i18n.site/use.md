# &をインストールしてください

## インストール

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## 構成トークン

`i18n.site` 、アクセス トークンを構成するための`i18`変換ツールが組み込まれています。2 [`i18`を参照して](/i18/use)ください。

## デモプロジェクト

`i18n.site`使用方法を学ぶデモ プロジェクトから始めましょう。

まずデモ リポジトリのクローンを作成し、次のようにコマンドを実行します。

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

中国本土のユーザーは次のことができます。

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker`によるローカル プレビューを容易にするために、 `demo.i18n.site`コード ベース クローンのディレクトリ名は`md`である必要があります。

### 翻訳する

まず、 `md`ディレクトリに入り、 `i18n.site`実行します。これにより、 `en` `zh`に変換されます。

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

実行後、変換ファイルとキャッシュ ファイルが生成されますので、それらを`md` `git add . `のリポジトリに忘れずに追加してください。

### ローカルプレビュー

`docker`インストールして起動します ( `MAC`ユーザーは、 `docker`のランタイムとして[orbstack](https://orbstack.dev)を使用することを推奨します)。

次に、 `docker`ディレクトリに入って`./up.sh`を実行し、 [https://127.0.0.1](https://127.0.0.1)にアクセスしてローカルでプレビューします。

<img src="//p.3ti.site/1721104238.avif" style="width:360px">