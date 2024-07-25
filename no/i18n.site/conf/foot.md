# Bunntekst

Fortsatt å ta demoprosjektet som et eksempel, `.i18n/htm/foot.pug` bunnteksten til nettstedet definert i katalogen `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) er et malspråk som genererer `HTML` .

[➔ Klikk her for å lære grammatikken til pug](https://pugjs.org)

**Ikke skriv `css` og `js` `foot.pug`** , ellers vil det oppstå feil.

Vennligst se følgende, stilen er skrevet i den tilsvarende `.css` og interaksjonen oppnås ved å lage webkomponenter.

## Bunntekst Stil

I `md/.i18n/htm` er det 3 `css` filer nedenfor.

* `foot.css` Bunntekst :
* `import.css` : `i18n.site` for hele nettstedet
* `conf.css` Bunntekstikoner : fonter

### Ikon Skrift

/ [er](https://www.iconfont.cn/?lang=zh) `F` [av](https://www.iconfont.cn/?lang=en-us) iconfont.cn

Vennligst lag din egen ikonfont etter behov og erstatt : konfigurasjon i `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Webkomponenter

`foot.pug` kan ikke skrive `js` i den. Hvis interaksjon er nødvendig, vennligst tilpasse nettsidekomponenten.

Du kan definere [en webkomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) i `md/.i18n/htm/index.js` og deretter bruke komponenten i `foot.pug` .

Det er enkelt å lage nettkomponenter, som egendefinerte tagger `<x-img>`

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

## Flerspråklig Bunntekst

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

Ved å bruke `${I18N.xxx}` som ligner på denne skrivemetoden, kombinert med `i18n.yml` , kan du oppnå flerspråklig internasjonalisering av bunnteksten.

Legg `class="a"` i lenken for å unngå at lenken blir konvertert til `MarkDown` , se :
 [: `YAML` forhindre at lenkens `HTML` konverteres til `Markdown`](/i18/qa#H2) .