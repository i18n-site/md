# MarkDown-formaatconventie

## Ankerpunten

Traditioneel worden ankerpunten in `Markdown` gebaseerd op tekstinhoud gegenereerd, maar deze aanpak is niet toepasbaar in meertalige situaties.

De door `i18n.site` afgesproken aanpak voor ankerpunten is het handmatig toevoegen van een tekst zoals `<a rel=id href="#xxx" id="xxx"></a>` in `Markdown` om een定位锚点 te maken.

`<a rel=id href="#xxx" id="xxx"></a>`, waarbij `rel=id` de stijl van het ankerpunt op de pagina definieert; vervang `xxx` door de feitelijke Engelse afkorting van uw ankerpunt.

Ankerpunten worden gewoonlijk toegevoegd aan titels, zoals:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Het weergave-effect is als volgt:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Schrijf `HTML` in `Markdown`

`pug`-code kan `HTML` insluiten.

Inhoud binnen `<pre>`-elementen wordt niet vertaald.

Door deze twee aspecten te combineren, kunt u gemakkelijk `HTML` in `Markdown`写入 om verschillende weergave-effecten te bereiken.

U kunt de implementatie raadplegen in [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md), de code is als volgt:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Merk op dat er ook `<style>` is gedefinieerd binnen `<pre>` hierboven.