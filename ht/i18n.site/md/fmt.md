# Konvansyon Fòma MarkDown

## Pwen Jete Lank

Ankr `MarkDown` yo pwodwi sou kontni tèks Nan ka a nan plizyè lang, solisyon sa a pa posib.

Solisyon jete lank `i18n.site` dakò se insert tèks ki sanble ak `<a rel=id href="#xxx" id="xxx"></a>` nan `MarkDown` pou kreye manyèlman jete lank la.

`<a rel=id href="#xxx" id="xxx"></a>` isit la `rel=id` defini style paj pwen ank la, tanpri ranplase `xxx` ak abrevyasyon angle aktyèl ou.

Anjeneral yo ajoute lank nan tit la, tankou:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Efè ekspozisyon an se jan sa a:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Ekri `HTML` Nan `MarkDown`

`pug` `HTML` ka entegre nan kòd la.

Kontni nan eleman `<pre>` pa pral tradui.

Konbine de pwen sa yo, ou ka fasilman ekri `HTML` `MarkDown` pou reyalize divès efè ekspozisyon.

Ou ka refere a aplikasyon an nan [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) kòd la se jan sa a :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Remake byen ke `<style>` defini tou nan `<pre>`
