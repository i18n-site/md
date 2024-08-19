# Sidfot

Fortfarande som ett exempel med demonstrationsprojektet, filen `.i18n/htm/foot.pug` i `md`-katalogen definierar webbplatsens sidfot.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) är ett mall-språk som genererar `HTML`.

[➔ Klicka här för att lära dig pugs grammatik](https://pugjs.org)

**Skriv inte `css` och `js` i `foot.pug`**, annars uppstår det fel.

Se nedan, stilen skrivs i motsvarande `.css`-fil och interaktionen åstadkoms genom att skapa webbkomponenter.

## Sidfotsstil

I demonstrationsprojektet finns det tre `css`-filer under `md/.i18n/htm`.

* `foot.css`: Sidfotsstil
* `import.css`: `i18n.site` standardstil för hela webbplatsen
* `conf.css`: Ikoner och typsnitt för sidfoten

### IkonTypsnitt

Sidfotsikonen skapas genom iconfont.cn ( [engelsk version](https://www.iconfont.cn/?lang=en-us) / [kinesisk version](https://www.iconfont.cn/?lang=zh) ) och är ett teckensnitt med namnet `F`.

Skapa gärna ditt eget ikontypsnitt efter behov och ersätt följande konfiguration i `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Webbkomponenter

`foot.pug` får inte innehålla `js`; om interaktion behövs, skapa en anpassad webbkomponent.

[En webbkomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) kan definieras i `md/.i18n/htm/index.js` och därefter användas i `foot.pug`.

Att skapa en webbkomponent är enkelt, till exempel en anpassad tagg `<x-img>`.

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

## Flerspråkig sidfot

Kod i `.i18n/htm/foot.pug` ser ut så här:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Här motsvarar `${I18N.C}` det som finns i `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Genom att använda `${I18N.xxx}` på liknande sätt, tillsammans med `i18n.yml`, kan du uppnå en flerspråkig internationalisering av sidfoten.

Lägg till `class="a"` på länkar för att undvika att länkar omvandlas till `Markdown`-format, se:
 [➔ `YAML`: Hur man förhindrar att länkar i `HTML` omvandlas till `Markdown`](/i18/qa#H2)