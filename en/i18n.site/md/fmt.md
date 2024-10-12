# MarkDown Format Convention

## Anchor Point

Traditional `Markdown` anchor points are generated based on text content. However, this approach is not viable in a multilingual context.

The anchor point scheme adopted by `i18n.site` involves inserting text akin to `<a rel=id href="#xxx" id="xxx"></a>` within `Markdown` to manually create positioning anchors.

For `<a rel=id href="#xxx" id="xxx"></a>`, here `rel = id` defines the page style of the anchor point. Replace `xxx` with your actual anchor point English abbreviation.

Anchor points are usually added to the titles, for example:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

The display effect is as follows:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Embedding `HTML` within `Markdown`

`HTML` can be embedded in `pug` code.

The content within the `<pre>` element will not be translated.

By combining these two approaches, it becomes quite straightforward to incorporate `HTML` into `Markdown`, thereby enabling a variety of display effects.

You can refer to the implementation in [github.com/i18n - site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md). The code is as follows:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Note that `<style>` is also defined in `<pre>` above.