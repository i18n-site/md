# Voettekst

Nog steeds met het demoproject als voorbeeld: `.i18n/htm/foot.pug` in de map `md` definieert de voettekst van de website.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) is een sjabloontaal die `HTML` genereert.

[➔ Klik hier om de grammatica van pug te leren](https://pugjs.org)

**Schrijf geen `css` en `js` in `foot.pug`**, anders treedt er een fout op.

Raadpleeg het volgende, stijl wordt in de bijbehorende `.css` bestanden geschreven en interactie wordt gerealiseerd door het maken van webcomponenten.

## Voettekststijl

In het demoproject zijn er drie `css` bestanden onder `md/.i18n/htm`.

* `foot.css`: stijl voor de voettekst
* `import.css`: standaardstijl voor `i18n.site` op de hele site
* `conf.css`: pictogrammen en lettertypes voor de voettekst

### Pictogramlettertype

Het voettekstpictogram wordt gegenereerd door een lettertype genaamd `F` gemaakt op iconfont.cn ([Engelse versie](https://www.iconfont.cn/?lang=en-us) / [Chinese versie](https://www.iconfont.cn/?lang=zh)).

Maak indien nodig uw eigen pictogramlettertype en vervang de volgende configuratie in `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Webcomponenten

Schrijf geen `js` in `foot.pug`; als er interactie vereist is, maak dan een aangepaste webcomponent.

Definieer een [webcomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) in `md/.i18n/htm/index.js` en gebruik deze component in `foot.pug`.

Het maken van een webcomponent is eenvoudig, bijvoorbeeld een aangepaste tag `<x-img>`.

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

## Meertalige voettekst

De code in `.i18n/htm/foot.pug` ziet er als volgt uit:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hier corresponds `${I18N.C}` aan het volgende in `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Door gebruik te maken van `${I18N.xxx}` in een vergelijkbare schrijfwijze, gecombineerd met `i18n.yml`, kunt u een meertalige internationalisatie van de voettekst realiseren.

Het toevoegen van `class="a"` aan de link is om te voorkomen dat de link wordt geconverteerd naar `MarkDown` Zie :
 [➔ `YAML`: Hoe u kunt voorkomen dat een link in `HTML` wordt omgezet naar `Markdown`](/i18/qa#H2).