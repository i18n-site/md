# MarkDownの形式規約

## アンカーポイント

従来の`MarkDown`のアンカーポイントはテキストの内容に基づいて生成されますが、多言語環境ではこの方法は適用できません。

`i18n.site`で合意されたアンカーポイントの方法は、`MarkDown`に`<a rel=id href="#xxx" id="xxx"></a>`のようなテキストを插入して、手動でアンカーポイントを作成することです。

`<a rel=id href="#xxx" id="xxx"></a>`の部分で、`rel=id`はアンカーポイントのページスタイルを定義します。`xxx`は実際のアンカーポイントの英語の略語に置き換えてください。

アンカーポイントは通常、以下のようなタイトルに追加されます

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

表示結果は以下の通りです

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown`に`HTML`を書き込む

`pug`コードに`HTML`を埋め込むことができます。

`<pre>`要素内の内容は翻訳されません。

この二つの点を組み合わせることで、`MarkDown`内で`HTML`を簡単に書き込み、さまざまな表示効果を実現できます。

[github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md)の実装を参考にしてください。コードは以下の通りです:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

上記の`<pre>`内には`<style>`も定義されていますので、ご注意ください。