# i18n.site MarkDown の記述規則

## アンカーポイント

従来の`MarkDown`アンカー ポイントはテキスト コンテンツに基づいて生成されます。多言語の場合、この解決策は実現できません。

`i18n.site`で合意されたアンカー ポイントの解決策は、 `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown`に似たテキストを挿入して、位置決めアンカー ポイントを手動で作成することです。

`<a rel=id href="#xxx" id="xxx"></a>` 、ここで`rel=id`アンカー ポイントのページ スタイルを定義します`xxx`実際のアンカーの英語の略語に置き換えてください。

通常、次のようなアンカーがタイトルに追加されます。

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

表示効果は次のとおりです。

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown`に`HTML`書き込む

`pug`コードに`HTML`埋め込むことができます。

`<pre>`要素のコンテンツは翻訳されません。

この 2 点を組み合わせることで、 `MarkDown`に`HTML`簡単に書き込んで、さまざまな表示効果を実現できます。

[参考にここをクリックしてくださいi18n.siteホームページの言語コードリストにHTMLと書かれており](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md)、コードは次のとおりです:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

`<style>`上記の`<pre>`にも定義されていることに注意してください。