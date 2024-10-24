# i18n.site Markdown-schrijfconventie

## Ankerpunten

Traditioneel worden ankerpunten in `MarkDown` gebaseerd op tekstinhoud gegenereerd, maar deze aanpak is niet toepasbaar in meertalige situaties.

De door `i18n.site` voorgestelde aanpak voor ankerpunten is het handmatig invoegen van code zoals `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` om een定位 ankerpunt te maken.

`<a rel=id href="#xxx" id="xxx"></a>`, waarbij `rel=id` de stijl van het ankerpunt op de pagina definieert; vervang `xxx` door de feitelijke Engelse afkorting voor uw ankerpunt.

Ankerpunten worden meestal aan titels toegevoegd, zoals:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Het weergave-effect is als volgt:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` schrijven in `MarkDown`

In `pug`-code kan `HTML` worden ingebed.

Inhoud binnen `<pre>`-elementen wordt niet vertaald.

Door deze twee aspecten te combineren, is het eenvoudig om in `MarkDown` `HTML` te schrijven voor verschillende weergave-effecten.

Als voorbeeld kunt u de implementatie bekijken op [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md), de code is als volgt:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Let op dat er in het bovenstaande `<pre>` ook een `<style>` is gedefinieerd.


## Afbeeldingen/video's/links in meerdere talen

In `Markdown` omgezet naar `HTML`, worden de `$LANG`-waarden in de `src`- en `href`-attributen vervangen door de huidige [taalcode](/i18/LANG_CODE).

Met behulp van deze variabele kan de meertaligheid van afbeeldingen/video's/links worden gerealiseerd.