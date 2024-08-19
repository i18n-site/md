# Formátování podle konvencí Markdown

## Kotva

Tradiční kotvy v `Markdown` jsou založeny na textovém obsahu, což v multijazyčném prostředí není použitelné.

Kotvový systém dohodnutý s `i18n.site` zahrnuje vložení textu jako `<a rel=id href="#xxx" id="xxx"></a>` v `Markdown`, aby se ručně vytvořila pozicionální kotva.

`<a rel=id href="#xxx" id="xxx"></a>`, zde `rel=id` určuje styl kotvy na stránce, nahraďte `xxx` vaší skutečnou anglickou zkratkou kotvy.

Kotvy se obvykle přidávají k nadpisům, například:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Zobrazení vypadá takto:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Psaní `HTML` v `Markdown`

V kódu `pug` lze vkládat `HTML`.

Obsah v `<pre>` prvku nebude přeložen.

Kombinací těchto dvou skutečností lze snadno psát `HTML` v `Markdown`, aby se dosáhlo různých zobrazovacích efektů.

Můžete se odkazovat na implementaci v [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md), kód je následující:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Všimněte si, že `<style>` je také definován výše v `<pre>`.