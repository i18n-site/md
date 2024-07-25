# Sidefod

Hvis du stadig tager demoprojektet som eksempel, `.i18n/htm/foot.pug` sidefoden på webstedet defineret i `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) er et skabelonsprog, der genererer `HTML` .

[➔ Klik her for at lære grammatikken i pug](https://pugjs.org)

**Skriv ikke `css` og `js` `foot.pug`** , ellers vil der være fejl.

Se venligst det følgende, stilen er skrevet i den tilsvarende `.css` og interaktionen opnås ved at oprette webkomponenter.

## Footer Stil

I `md/.i18n/htm` er der 3 `css` filer nedenfor.

* `foot.css` Footer :
* `import.css` : `i18n.site` for hele webstedet
* `conf.css` Footer : ikoner og skrifttyper

### Ikon Skrifttype

/ [er](https://www.iconfont.cn/?lang=zh) `F` [af](https://www.iconfont.cn/?lang=en-us) iconfont.cn

Opret venligst din egen ikonskrifttype efter behov og udskift : konfiguration i `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Komponenter

`foot.pug` kan ikke skrive `js` i den. Hvis interaktion er påkrævet, skal du tilpasse websidekomponenten.

Du kan definere [en webkomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` og derefter bruge komponenten i `foot.pug` !

Det er nemt at oprette webkomponenter, såsom brugerdefinerede tags `<x-img>`

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

## Flersproget Sidefod

Koden i den er som : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Her er den tilsvarende : `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ved at bruge `${I18N.xxx}` svarende til denne skrivemetode, kombineret med `i18n.yml` , kan du opnå flersproget internationalisering af sidefoden.

`class="a"` til linket for at undgå at linket bliver konverteret til `MarkDown` , se :
 [: `YAML` forhindrer du linkets `HTML` i at blive konverteret til `Markdown`](/i18/qa#H2) .