# i18n.site Liyangani Ya Kokoma MarkDown

## Esika Ya Kokangama

Ba points d’ancre `MarkDown` ya bonkoko esalemaka na kotalaka contenus ya texte Na cas ya multi-language, solution oyo ezali possible te.

Solution ya point d’ancre oyo bayokani na `i18n.site` ezali ya ko inserter texte oyo ekokani na `<a rel=id href="#xxx" id="xxx"></a>` na `MarkDown` pona ko créer manuellement point d’ancre ya positionnement.

`<a rel=id href="#xxx" id="xxx"></a>` , awa `rel=id` elimboli style ya page ya point d'ancre, svp remplacer `xxx` na abréviation na yo ya solo ya anglais ya ancre.

Mbala mingi, babakisaka ba ancres na titre, na ndakisa:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Effet ya affichage ezali boye:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Koma `HTML` Na Kati Ya `MarkDown`

`HTML` ekoki kozala intégré na `pug` code.

Contenu na `<pre>` éléments ekobongola te.

Soki osangisi ba points oyo mibale, okoki kokoma `HTML` na `MarkDown` na pete pona kozua ba effets ya affichage ndenge na ndenge.

[Bo finga awa pona référence i18n.site Liste ya code ya langue na page d'accueil HTML ekomami](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , pe code ezali boye :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Simbá ete `<style>` elimbolami mpe na `<pre>` oyo ezali likoló.