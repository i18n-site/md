# MarkDown-Formaatconventie

## Ankerpunt

Traditioneel `MarkDown` Ankers worden gegenereerd op basis van tekstinhoud. In het geval van meertalen is deze oplossing niet haalbaar.

De overeengekomen ankeroplossing is om tekst in te voegen die lijkt op `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` om het positioneringsanker handmatig `i18n.site` maken.

`<a rel=id href="#xxx" id="xxx"></a>` , hier definieert `rel=id` de paginastijl van het ankerpunt. Vervang `xxx` door uw werkelijke Engelse afkorting voor het anker.

Ankers worden meestal aan de titel toegevoegd, zoals:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Het weergave-effect is als volgt:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` `MarkDown`

`pug` `HTML` kan in de code worden ingesloten.

Inhoud binnen het `<pre>` -element wordt niet vertaald.

Door deze twee punten te combineren, kunt `HTML` `MarkDown` verschillende weergave-effecten bereiken.

Je kunt naar de implementatie verwijzen in [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) de code is als volgt :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Merk op dat `<style>` hierboven ook gedefinieerd is `<pre>`
