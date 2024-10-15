# ブログテンプレート

`use: Blog`と書かれた`i18n/conf.yml`は、ブログテンプレートを使用してレンダリングすることを示しています。

ブログの投稿である`markdown`ファイルには、メタ情報を設定する必要があります。

メタ情報はファイルの冒頭にあり、`---`で始まり、`---`で終了する必要があります。中の設定情報の形式は`YAML`です。

デモファイルの設定は以下の通りです

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief`は内容の摘要を表し、ブログの索引ページに表示されます。

`YMAL`の助けを借りて | `構文では、複数行の要約を書くことができます。

ブログの右側の目次の設定は`TOC`ファイルです(前章を参照)。ブログの首页索引には、`TOC`に記載された記事だけが表示されます。

メタ情報を含まない記事はブログの首页には表示されませんが、右側の目次には表示されます。

## 著者情報

記事のメタ情報には、以下のような著者情報を記載することができます:

```yml
author: marlowe
```

次に、ソース言語のディレクトリにある`author.yml`を編集し、著者情報を追加してください。例えば:

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name`、`url`、そして`title`はすべて選択肢があります。`name`が設定されていない場合、キー名(ここでは`marlowe`)を`name`として使用します。

デモプロジェクトの[`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1)および[`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)を参照してください

## ピン記事

記事をトップに固定したい場合は、`i18n.site`を実行した後、`.i18n/data/blog`配下の`xxx.yml`ファイルを編集し、タイムスタンプを負の数値に変更してください(複数の負の数値は大小順に並び替えられます)。