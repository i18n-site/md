# MarkDown Formatkonvention

## Ankarpunkt

Traditionella `MarkDown` Ankare genereras baserat på textinnehåll.

`i18n.site` Den överenskomna ankarlösningen är att infoga text som liknar `<a rel=id href="#xxx" id="xxx"></a>` i `MarkDown` för att manuellt skapa positioneringsankaret.

`<a rel=id href="#xxx" id="xxx"></a>` här `rel=id` definierar sidstilen för ankarpunkten, ersätt `xxx` med din faktiska engelska förkortning för ankare.

Ankare läggs vanligtvis till i titeln, till exempel:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Visningseffekten är som följer:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` in `MarkDown`

`pug` `HTML` kan bäddas in i koden.

Innehåll i elementet `<pre>` kommer inte att översättas.

Genom att kombinera dessa två punkter kan du enkelt skriva `HTML` i `MarkDown`

Du kan referera till implementeringen i [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) koden är som följer :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Observera att `<style>` också definieras i `<pre>`
