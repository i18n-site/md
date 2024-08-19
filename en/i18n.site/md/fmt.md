# MarkDown Format Convention

## Anchor Point

The anchor points of traditional `MarkDown` are generated based on the text content. In the case of multiple languages, this scheme is not feasible.

The anchor point solution stipulated by `i18n.site` is to insert text similar to `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` to manually create the positioning anchor point.

`<a rel=id href="#xxx" id="xxx"></a>`, here `rel=id` defines the page style of the anchor point, and `xxx` should be replaced with your actual English abbreviation of the anchor.

Anchors are usually added in the titles, such as:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

The display effect is as follows:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Write `HTML` in `MarkDown`

`HTML` can be embedded in `pug` code.

The content in `<pre>` elements will not be translated.

Combining these two points, it is very convenient to write `HTML` in `MarkDown` to achieve various display effects.

You can refer to the implementation in [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md), and the code is as follows:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Note that `<style>` is also defined in `<pre>` above.