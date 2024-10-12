# MarkDownの形式規約

## アンカーポイント

従来の`MarkDown`では、アンカーポイントはテキストの内容に基づいて生成されますが、多言語環境ではこの方法は適用できません。

`i18n.site`で合意されたアンカーポイントの方法は、`MarkDown`に`<a rel=id href="#xxx" id="xxx"></a>`のようなテキストを埋め込むことで、手動でアンカーポイントを作成することです。

`<a rel=id href="#xxx" id="xxx"></a>`の`rel=id`はアンカーポイントのページスタイルを定義し、`xxx`は実際のアンカーポイントの英字略語に置き換えてください。

アンカーポイントは通常、以下のようなタイトルに追加されます

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

表示結果は以下の通りです

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown`に`HTML`を書き込む

`pug`コードには`HTML`を埋め込むことができます。

`<pre>`要素内の内容は翻訳されません。

この2点を組み合わせることで、`MarkDown`に`HTML`を簡単に書き込み、さまざまな表示効果を達成することができます。

[github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md)の実装を参考にしてください。コードは以下の通りです:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

上記の`<pre>`に`<style>`が定義されている点に注意してください。