# i18n.site MarkDown-Schrijfconventie

## Ankerpunt

Traditioneel worden er `MarkDown` ankerpunten gegenereerd op basis van tekstinhoud. In het geval van meertalig is deze oplossing niet haalbaar.

De met `i18n.site` overeengekomen ankerpuntoplossing is het invoegen van tekst vergelijkbaar met `<a rel=id href="#xxx" id="xxx"></a>` op `MarkDown` om handmatig het positioneringsankerpunt te maken.

`<a rel=id href="#xxx" id="xxx"></a>` , hier definieert `rel=id` de paginastijl van het ankerpunt. Vervang `xxx` door uw werkelijke Engelse afkorting voor het anker.

Ankers worden meestal aan de titel toegevoegd, zoals:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Het weergave-effect is als volgt:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Schrijf `HTML` Op `MarkDown`

`HTML` kan worden ingebed in `pug` -code.

Inhoud in `<pre>` elementen wordt niet vertaald.

Door deze twee punten te combineren, kunt u eenvoudig `HTML` op `MarkDown` schrijven om verschillende weergave-effecten te bereiken.

[Klik hier voor referentie i18n.site De taalcodelijst op de startpagina HTML is geschreven](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) en de code is als volgt :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Merk op dat `<style>` ook gedefinieerd is in `<pre>` hierboven.