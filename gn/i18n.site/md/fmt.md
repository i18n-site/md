# Convención Formato MarkDown Rehegua

## Punto De Anclaje Rehegua

Umi anclaje `MarkDown` ojejapo oñemopyendáva contenido de texto rehe, ko solución ndaha’éi factible.

`i18n.site` Pe solución ancla rehegua oñemoneĩva haꞌehína oñemoinge hag̃ua jehaipyre ojoguáva `<a rel=id href="#xxx" id="xxx"></a>` -pe `MarkDown` ojejapo hag̃ua manualmente ancla posicionamiento rehegua.

`<a rel=id href="#xxx" id="xxx"></a>` , ko’ápe `rel=id` odefini página estilo punto ancla rehegua, emyengovia `xxx` nde abreviatura ancla añeteguáva reheve.

Umi ancla oñembojoapy jepi pe título-pe, haꞌeháicha:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Pe efecto jehechaukarã haꞌehína kóicha:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Ehai `HTML` en `MarkDown`

`pug` `HTML` ikatu oñemboguapy kódigo-pe.

Contenido oĩva elemento `<pre>`

Ombojoajúvo ko’ã mokõi punto, ikatu ojehai `HTML` in `MarkDown`

Ikatu reñe'ẽ implementación rehe [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) código ha'e kóicha :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Ñañamindu'u `<style>` oñemboheko avei `<pre>`
