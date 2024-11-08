# カスタマイズされたナビゲーション

デモ サイトを例として[i18n-demo.github.io](//i18n-demo.github.io)ナビゲーションをカスタマイズする方法を説明します。

![](https://p.3ti.site/1731036697.avif)

上図の番号が付いた領域に対応するファイルは次のとおりです。

1. 左[`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. 右[`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) `HTML`を生成するテンプレート言語です。

[➔ の文法を学ぶにはここをクリックしてくださいpug](https://pugjs.org)

国際化を実装するためにファイル内でフォーマット文字列`${I18N.sponsor}`が使用され、その内容はソース言語ディレクトリ内の対応する[i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)に置き換えられます。

**`pug`に`css`と`js`書き込まないでください**。そうしないとエラーが発生します。

スタイルは`css`に書き込まれ、Web コンポーネントを作成することで対話が実現されます。

[i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)で、ナビゲーション バーのスタイルに対応するファイルは: