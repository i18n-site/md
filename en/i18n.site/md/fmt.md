# MarkDown Format Convention

## Anchor Point

Traditional `MarkDown` Anchors are generated based on text content. In the case of multi-language, this solution is not feasible.

`i18n.site` The agreed anchor solution is to insert text similar to `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` to manually create the positioning anchor.

`<a rel=id href="#xxx" id="xxx"></a>` , here `rel=id` defines the page style of the anchor point, please replace `xxx` with your actual anchor English abbreviation.

Anchors are usually added to the title, such as:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

The display effect is as follows:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Write `HTML` in `MarkDown`

`pug` `HTML` can be embedded in the code.

Content within the `<pre>` element will not be translated.

Combining these two points, you can easily write `HTML` in `MarkDown` to achieve various display effects.

You can refer to the implementation in [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) the code is as follows :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Note that `<style>` is also defined in `<pre>` above.
