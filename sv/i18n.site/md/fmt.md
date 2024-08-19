# MarkDown-formateringskonvention

## Ankarpunkt

Traditionella `MarkDown`-ankarpunkter genereras baserat på textinnehåll, men denna lösning är inte genomförbar i flerspråkiga sammanhang.

`i18n.site`-konventionen för ankarpunkter innebär att infoga text som liknar `<a rel=id href="#xxx" id="xxx"></a>` i `MarkDown` för att manuellt skapa en positioneringsankare.

`<a rel=id href="#xxx" id="xxx"></a>`, där `rel=id` definierar sidostilen för ankaren; ersätt `xxx` med din faktiska engelska förkortning för ankaret.

Ankare läggs vanligtvis till i rubriker, till exempel:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Visningseffekten ser ut så här:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Skriv `HTML` i `MarkDown`

`pug`-kod kan innehålla `HTML`.

Innehåll i `<pre>`-elementet kommer inte att översättas.

Genom att kombinera dessa två aspekter kan man enkelt skriva `HTML` i `MarkDown` för att uppnå olika visningseffekter.

Du kan referera till implementeringen i [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md), koden är som följer:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Observera att `<style>` också definieras i `<pre>` ovan.