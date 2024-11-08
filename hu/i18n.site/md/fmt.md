# i18n.site MarkDown Írási Konvenció

## Horgonypont

Hagyományos `MarkDown` horgonypont generálódik a szövegtartalom alapján Többnyelvűség esetén ez a megoldás nem kivitelezhető.

A `i18n.site` val megegyező horgonypont-megoldás a `<a rel=id href="#xxx" id="xxx"></a>` `MarkDown` -ben szöveghez hasonló szöveg beszúrása a pozicionálási horgonypont manuális létrehozásához.

`<a rel=id href="#xxx" id="xxx"></a>` , itt `rel=id` határozza meg a rögzítési pont oldalstílusát, kérjük, cserélje ki `xxx` a tényleges horgony angol rövidítésével.

Általában horgonyokat adnak a címhez, például:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

A megjelenítési hatás a következő:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Írj `HTML` Et `MarkDown`

`HTML` beágyazható `pug` kódba.

`<pre>` elemű tartalom nem lesz lefordítva.

E két pont kombinálásával könnyedén írhat `HTML` `MarkDown` hoz, hogy különféle megjelenítési effektusokat érjen el.

[Kattintson ide i18n.site A kezdőlapon található nyelvkódlista HTML](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , a kód pedig a következő: :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Vegye figyelembe, hogy `<style>` a fenti `<pre>` -ban is definiált.