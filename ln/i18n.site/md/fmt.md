# Liyangani Ya Format MarkDown

## Esika Ya Kokangama

Ba ancres `MarkDown` bonkoko esalemaka na kotalela makambo ya makomi, solution oyo ekoki kosalema te.

`i18n.site` Solution ya anchor oyo bayokani ezali ya kotia texte oyo ekokani na `<a rel=id href="#xxx" id="xxx"></a>` na `MarkDown` mpo na kosala manuellement ancre ya positionnement.

`<a rel=id href="#xxx" id="xxx"></a>` awa `rel=id` elimboli style ya page ya point d'ancre, svp remplacer `xxx` na abréviation na yo ya solo ya anglais.

Mbala mingi, babakisaka ba ancres na titre, na ndakisa:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Effet ya affichage ezali boye:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Kokoma `HTML` Na `MarkDown`

`pug` `HTML` ekoki kozala intégré na code.

Makambo oyo ezali na kati ya élément `<pre>`

Kosangisa ba points oyo mibale, okoki kokoma `HTML` na `MarkDown` pona kozua ba effets ya affichage ndenge na ndenge.

Okoki ko référer na mise en œuvre na [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) code ezali boye :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Simbá ete `<style>` elimbolami mpe na `<pre>`
