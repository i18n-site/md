# MarkDown 形式の規則

## アンカーポイント

従来の`MarkDown`アンカーはテキスト コンテンツに基づいて生成されます。多言語の場合、この解決策は実現できません。

`i18n.site`合意されたアンカーの解決策は、 `MarkDown`に`<a rel=id href="#xxx" id="xxx"></a>`のようなテキストを挿入して、位置決めアンカーを手動で作成することです。

`<a rel=id href="#xxx" id="xxx"></a>` 、ここで`rel=id`アンカー ポイントのページ スタイルを定義します。 `xxx`実際のアンカーの英語の略語に置き換えてください。

通常、次のようなアンカーがタイトルに追加されます。

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

表示効果は次のとおりです。

<img src="//p.3ti.site/1721381136.avif" width="350">

## で書き`HTML` `MarkDown`

`pug` `HTML`コードに埋め込むことができます。

`<pre>`要素内のコンテンツは翻訳されません。

この 2 点を組み合わせることで、 `MarkDown`に`HTML`を記述することで、さまざまな表示効果を簡単に実現できます。

[github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md)コードは次のとおりです:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

`<style>`は上記の`<pre>`でも定義されていることに注意してください。
