# ブログテンプレート

`use: Blog`中`i18n/conf.yml`は、レンダリングにブログ テンプレートを使用することを意味します。

ブログ投稿の`markdown`ファイルにはメタ情報を設定する必要があります。

メタ情報はファイルの先頭にあり、 `---`で始まり`---`で終わる必要があります。中間の構成情報の形式は`YAML`です。

デモファイルの構成は以下のとおりです。

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief`コンテンツの概要を示し、ブログ インデックス ページに表示されます。

`YMAL`の助けを借りて | `構文では、複数行の要約を書くことができます。

ブログの右側のディレクトリ ツリーの構成も`TOC`ファイルです (前章を参照)。ブログのホームページのインデックスには、 `TOC`にリストされた記事のみが表示されます。

メタ情報が含まれていない記事はブログのホームページには表示されませんが、右側のディレクトリ ツリーには表示されます。

## 著者情報

記事のメタ情報には、次のような著者情報を記述することができます。

```yml
author: marlowe
```

次に、ソース言語ディレクトリの`author.yml`編集し、作成者情報 ( :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` 、 `url` 、および`title`はすべてオプションです。 `name`が設定されていない場合、キー名 (ここでは`marlowe` ) が`name`として使用されます。

デモ プロジェクト[`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1)および[`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)参照してください。

## 固定記事

記事を一番上に固定する必要がある場合は、 `i18n.site`実行して`.i18n/data/blog`の下の`xxx.yml`ファイルを編集し、タイムスタンプを負の数値に変更してください (複数の負の数値は最大から最小の順に並べ替えられます)。