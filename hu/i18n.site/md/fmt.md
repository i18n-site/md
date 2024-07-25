# MarkDown Formátumegyezmény

## Horgonypont

A `MarkDown` horgonyok szöveges tartalom alapján készülnek.

`i18n.site` `MarkDown` `<a rel=id href="#xxx" id="xxx"></a>`

`<a rel=id href="#xxx" id="xxx"></a>` itt `rel=id` határozza meg a rögzítési pont oldalstílusát, kérjük, cserélje ki `xxx` a tényleges angol rövidítésre.

Általában horgonyokat adnak a címhez, például:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

A megjelenítési hatás a következő:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` Be `MarkDown`

`pug` beágyazható a kódba `HTML`

A `<pre>` elemen belüli tartalom nem lesz lefordítva.

Ezt a két pontot kombinálva könnyedén beírhatja `HTML` `MarkDown` , hogy különféle megjelenítési hatásokat érjen el.

Az implementációra hivatkozhat a [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) a kód a következő :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Vegye figyelembe, hogy a `<style>` is definiálva van fent `<pre>`
