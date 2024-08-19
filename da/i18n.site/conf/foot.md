# Sidefod

Tag stadig demoprojektet som eksempel, hvor `md`-mappens `.i18n/htm/foot.pug` definerer webstedets sidefod.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) er et skabelonsprog, der genererer `HTML`.

[➔ Klik her for at lære pug-grammatikken](https://pugjs.org)

**Skriv ikke `css` og `js` i `foot.pug`**, ellers vil der opstå fejl.

Se venligst nedenstående, stil skal skrives i det tilsvarende `.css`, og interaktion opnås ved at skabe webkomponenter.

## Sidefodsstil

Demoprojektet har tre `css`-filer under `md/.i18n/htm`.

* `foot.css`: Sidefodsstil
* `import.css`: Standardstil for hele `i18n.site`
* `conf.css`: Sidefod ikoner og skrifttyper

### Ikon skrifttype

Sidefod ikonerne er oprettet ved hjælp af iconfont.cn ([engelsk version](https://www.iconfont.cn/?lang=en-us) / [kinesisk version](https://www.iconfont.cn/?lang=zh)) og en skrifttype med navnet `F`.

Opret venligst din egen ikonskrifttype efter behov og erstat følgende konfiguration i `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Webkomponenter

Du må ikke skrive `js` i `foot.pug`. Hvis der kræves interaktion, skal du tilpasse en webkomponent.

Definer en [webkomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) i `md/.i18n/htm/index.js`, og brug denne komponent i `foot.pug`.

Det er enkelt at oprette webkomponenter, f.eks. en brugerdefineret `<x-img>`.

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

## Flersproget sidefod

Koden i `.i18n/htm/foot.pug` ser sådan ud:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Her svarer `${I18N.C}` til `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Brug `${I18N.xxx}` i denne form, kombineret med `i18n.yml`, for at opnå en flersproget internationalisering af sidefoden.

Tilføjelse af `class="a"` til linket er for at forhindre linket i at blive konverteret til `MarkDown` Se :
 [➔ `YAML`: Hvordan man undgår, at link `HTML` konverteres til `Markdown`](/i18/qa#H2).