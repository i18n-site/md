# Bunntekst

Fortsatt å ta demoprosjektet som et eksempel, definerer `.i18n/htm/foot.pug` i `md`-katalogen bunnteksten til nettstedet.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) er et malspråk som genererer `HTML`.

[➔ Klikk her for å lære pug-grammatikken](https://pugjs.org)

**Ikke skriv `css` og `js` i `foot.pug`**, ellers vil det oppstå feil.

Vennligst se nedenfor, stilene skal skrives i de tilsvarende `.css`-filene, og interaksjon oppnås ved å lage webkomponenter.

## Bunntekststil

I demoprosjektet er det tre `css`-filer under `md/.i18n/htm`.

* `foot.css`: Stiler for bunnteksten
* `import.css`: Standardstiler for hele `i18n.site`
* `conf.css`: Ikoner og fonter for bunnteksten

### Ikonfont

Bunntekstikonene er laget ved å opprette en font på iconfont.cn ([Engelsk versjon](https://www.iconfont.cn/?lang=en-us) / [Kinesisk versjon](https://www.iconfont.cn/?lang=zh)) kalt `F`.

Vennligst lag din egen ikonfont etter behov og erstatt følgende konfigurasjon i `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Webkomponenter

`foot.pug` kan ikke inneholde `js`. Hvis interaksjon er nødvendig, lag en tilpasset webkomponent.

Definer en [webkomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) i `md/.i18n/htm/index.js` og bruk denne komponenten i `foot.pug`.

Å lage en webkomponent er enkelt, for eksempel en tilpasset tagg `<x-img>`.

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

## Flerspråklig bunntekst

Koden i `.i18n/htm/foot.pug` ser slik ut:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Her tilsvarer `${I18N.C}` det som står i `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ved å bruke `${I18N.xxx}` på denne måten, i kombinasjon med `i18n.yml`, kan du oppnå flerspråklig internasjonalisering av bunnteksten.

Å legge til `class="a"` til lenken er ment for å unngå at lenken blir konvertert til `Markdown`-format. Se:
 [➔ `YAML`: Hvordan unngå at lenke `HTML` konverteres til `Markdown`](/i18/qa#H2).