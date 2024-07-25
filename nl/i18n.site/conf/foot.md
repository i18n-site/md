# Voettekst

Als we nog steeds het demoproject als voorbeeld nemen, `.i18n/htm/foot.pug` de voettekst van de website gedefinieerd in de map `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

een sjabloontaal die `HTML` [`pug`](https://pugjs.org)

[➔ Klik hier om de grammatica van te leren pug](https://pugjs.org)

**Schrijf `css` en `js` niet tussen `foot.pug`** Anders ontstaan ​​er fouten.

Raadpleeg het volgende, de stijl is geschreven in de bijbehorende `.css` en de interactie wordt bereikt door webcomponenten te maken.

## Voettekststijl

In het demoproject `md/.i18n/htm` Er staan ​​3 `css` bestanden hieronder.

* `foot.css` :
* `import.css` `i18n.site` voor : hele site
* `conf.css` : lettertypen

### Pictogram Lettertype

Het voettekstpictogram wordt gegenereerd door iconfont.cn ( [Engelse versie](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) door een lettertype te maken met de naam `F`

Maak indien nodig uw eigen pictogramlettertype en vervang : volgende configuratie in `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Webcomponenten

`foot.pug` kan er geen `js` in schrijven. Er is interactie vereist. Pas de webpaginacomponent aan.

U kunt [een webcomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) definiëren in `md/.i18n/htm/index.js` en de component vervolgens gebruiken in `foot.pug` .

Het is gemakkelijk om webcomponenten te maken, zoals aangepaste tags `<x-img>`

```js
customElements.define(
  'x-img',
  class extends HTMLElement {
    constructor() {
      super();
      var img = document.createElement('img');
      img.src = '//p.3ti.site/i18n.svg';
      img.style = "height:99px;width:99px;";
      this.append(img);
    }
  }
)
```

## Meertalige Voettekst

`.i18n/htm/foot.pug` De code erin is als volgt :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hier `${I18N.C}` De overeenkomstige staat in `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Door `${I18N.xxx}` te gebruiken, vergelijkbaar met deze schrijfmethode, gecombineerd met `i18n.yml` , kunt u een meertalige internationalisering van de voettekst bereiken.

Voeg `class="a"` toe aan de link om te voorkomen dat de link wordt omgezet naar `MarkDown` , zie :
 [: `YAML` u kunt voorkomen dat `HTML` van de link wordt omgezet naar `Markdown`](/i18/qa#H2) .