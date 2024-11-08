# Bunntekst

Fortsatt å ta demoprosjektet som et eksempel, definerer `.i18n/htm/foot.pug` i `md` -katalogen bunnteksten til nettstedet.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) er et malspråk som genererer `HTML` -er.

[➔ Klikk her for å lære grammatikken til pug](https://pugjs.org)

**Ikke skriv `css` og `js` i `foot.pug`** , ellers vil det oppstå en feil.

Vennligst se følgende, stilen er skrevet inn i den tilsvarende `.css` , og interaksjonen oppnås ved å lage webkomponenter.

## Bunntekst Stil

Det er tre `css` -filer under `md/.i18n/htm` i demoprosjektet.

* `foot.css` : Bunntekst stil
* `import.css` : `i18n.site` stil for hele nettstedet
* `conf.css` : og fonter

### Ikon Skrift

Bunntekstikonet genereres ved å lage en font kalt iconfont.cn ( `F` [versjon](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Vennligst lag din egen ikonfont etter behov og bytt ut følgende konfigurasjon i `conf.css` :

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

Vennligst ikke referer direkte til fontfilen til iconfont.cn fordi den ikke kan lastes inn i safari-nettleseren.

## Webkomponenter

Du kan ikke skrive `js` av `foot.pug` Hvis interaksjon er nødvendig, vennligst tilpasse webkomponenten.

[En webkomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) kan defineres i `md/.i18n/htm/index.js` og deretter brukes i `foot.pug` .

Det er enkelt å lage nettkomponenter, for eksempel tilpassede `<x-img>` .

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

Koden i `.i18n/htm/foot.pug` er som følger :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Her tilsvarer `${I18N.C}` `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ved å bruke `${I18N.xxx}` som ligner på denne skrivemetoden, kombinert med `i18n.yml` , kan du oppnå flerspråklig internasjonalisering av bunnteksten.

Å legge til `class="a"` til lenken er for å forhindre at lenken konverteres til `MarkDown` Se :
 [: `YAML` Hvordan forhindre at lenke `HTML` konverteres til `Markdown`](/i18/qa#H2) .