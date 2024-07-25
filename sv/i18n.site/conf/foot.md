# Sidfot

Fortfarande med demoprojektet som exempel, `.i18n/htm/foot.pug` sidfoten på webbplatsen definierad i katalogen `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) är ett mallspråk som genererar `HTML` .

[➔ Klicka här för att lära dig grammatiken för pug](https://pugjs.org)

**Skriv inte `css` och `js` `foot.pug`** , annars kommer det att bli fel.

Se följande, stilen är skriven i motsvarande `.css` och interaktionen uppnås genom att skapa webbkomponenter.

## Sidfot Stil

I `md/.i18n/htm` finns det 3 `css` filer nedan.

* `foot.css` : stil
* `import.css` `i18n.site` för : webbplatsen
* `conf.css` Sidfotsikoner : typsnitt

### Ikon Teckensnitt

[Sidfotsikonen](https://www.iconfont.cn/?lang=en-us) / [av](https://www.iconfont.cn/?lang=zh) iconfont.cn `F`

Vänligen skapa ditt eget ikontypsnitt efter behov och ersätt : konfiguration i `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Webbkomponenter

`foot.pug` kan inte skriva `js` i den Om interaktion krävs, vänligen anpassa webbsidans komponent.

Du kan definiera [en webbkomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` och sedan använda komponenten i `foot.pug` .

Det är enkelt att skapa webbkomponenter, som anpassade taggar `<x-img>`

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

## Flerspråkig Sidfot

Koden i den är : följer `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Här är motsvarande : `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Genom att använda `${I18N.xxx}` som liknar denna skrivmetod, kombinerat med `i18n.yml` , kan du uppnå flerspråkig internationalisering av sidfoten.

Lägg `class="a"` i länken för att undvika att länken konverteras till `MarkDown` , se :
 [: `YAML` man förhindrar att länkens `HTML` konverteras till `Markdown`](/i18/qa#H2) .