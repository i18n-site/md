# Bunntekst

Fortsatt å ta demoprosjektet som et eksempel, definerer `.i18n/htm/foot.pug` i `md`-katalogen bunnteksten til nettstedet.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) er et malspråk som genererer `HTML`.

[➔ Klikk her for å lære pug-grammatikken](https://pugjs.org)

**Ikke skriv `css` og `js` i `foot.pug`**, ellers vil det oppstå feil.

Vennligst se nedenfor, stilene skal skrives i de tilsvarende `.css`-filene, og interaksjon oppnås ved å lage webkomponenter.

## Bunntekststil

I demoprosjektet er det tre `css`-filer under `md/.i18n/htm`.

* `foot.css`: Bunntekststil
* `import.css`: Standardstil for hele `i18n.site`
* `conf.css`: Ikonfonter og fonter

### Ikonfont

Bunntekstikonet er opprettet ved hjelp av en font kalt `F` på iconfont.cn ([Engelsk versjon](https://www.iconfont.cn/?lang=en-us) / [Kinesisk versjon](https://www.iconfont.cn/?lang=zh)).

Vennligst opprett din egen ikonfont etter behov og erstatt følgende konfigurasjon i `conf.css`:

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

Vennligst ikke referer direkte til skrifttypefilen fra iconfont.cn, da denne ikke kan lastes inn i Safari nettleseren.

## Webkomponenter

`foot.pug` kan ikke inneholde `js`. Hvis interaksjon er nødvendig, lag en tilpasset webkomponent.

[En webkomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) kan defineres i `md/.i18n/htm/index.js`, og denne komponenten kan deretter brukes i `foot.pug`.

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

Koden i `.i18n/htm/foot.pug` er som følger:

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

Legg til `class="a"` på lenker for å unngå at lenkene blir konvertert til `Markdown`. Se:
 [➔ `YAML`: Hvordan unngå at lenke `HTML` blir konvertert til `Markdown`](/i18/qa#H2)