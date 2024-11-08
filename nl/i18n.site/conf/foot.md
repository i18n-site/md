# Voettekst

Nog steeds met het demoproject als voorbeeld: `.i18n/htm/foot.pug` in de map `md` definieert de voettekst van de website.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) is een sjabloontaal die `HTML` -en genereert.

[➔ Klik hier om de grammatica van te leren pug](https://pugjs.org)

**Schrijf niet `css` en `js` in `foot.pug`** , anders ontstaat er een fout.

Raadpleeg het volgende, de stijl is in de overeenkomstige `.css` geschreven en de interactie wordt bereikt door webcomponenten te maken.

## Voettekststijl

Er zijn drie `css` -bestanden onder `md/.i18n/htm` in het demoproject.

* `foot.css` : Voettekststijl
* `import.css` : `i18n.site` voor de hele site
* `conf.css` : Voettekstpictogrammen en lettertypen

### Pictogram Lettertype

Het voettekstpictogram wordt gegenereerd door een lettertype met `F` iconfont.cn maken ( [Engelse versie](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Maak indien nodig uw eigen pictogramlettertype en vervang de volgende configuratie in `conf.css` :

```
@font-face {
  font-family: "F";
  src: url(//p.3ti.site/ico1.woff2) format("woff2");
}

#Ft>b>a.site {
  background: url("//p.3ti.site/i18n.svg") 0 0 / cover;
  display: block;
  height: 24px;
  opacity: 0.8;
  width: 115px;
  flex-shrink: 0;
}
```

Verwijs alstublieft niet rechtstreeks naar het lettertypebestand van iconfont.cn, omdat dit niet in de safaribrowser kan worden geladen.

## Webcomponenten

Je kunt niet `js` op `foot.pug` schrijven. Als er interactie nodig is, pas dan de webcomponent aan.

[Een webcomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) kan in `md/.i18n/htm/index.js` worden gedefinieerd en vervolgens in `foot.pug` worden gebruikt.

Het is eenvoudig om webcomponenten te maken, zoals aangepaste `<x-img>` .

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

De code in `.i18n/htm/foot.pug` is als volgt :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hier komt `${I18N.C}` overeen met `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Door `${I18N.xxx}` te gebruiken, vergelijkbaar met deze schrijfmethode, gecombineerd met `i18n.yml` , kunt u een meertalige internationalisering van de voettekst bereiken.

Het toevoegen van `class="a"` aan de link is om te voorkomen dat de link wordt geconverteerd naar `MarkDown` Zie :
 [➔ `YAML` : Hoe u kunt voorkomen dat link `HTML` wordt geconverteerd naar `Markdown`](/i18/qa#H2) .