# Sidfot

Fortfarande ta demoprojektet som ett exempel, `.i18n/htm/foot.pug` i katalogen `md` definierar sidfoten på webbplatsen.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) är ett mallspråk som genererar `HTML` :or.

[➔ Klicka här för att lära dig grammatiken för pug](https://pugjs.org)

**Skriv inte `css` och `js` i `foot.pug`** , annars blir det ett fel.

Se följande, stilen skrivs in i motsvarande `.css` , och interaktionen uppnås genom att skapa webbkomponenter.

## Sidfot Stil

Det finns tre `css` -filer under `md/.i18n/htm` i demoprojektet.

* `foot.css` : Sidfot stil
* `import.css` : `i18n.site` för hela webbplatsen
* `conf.css` : Sidfotsikoner och teckensnitt

### Ikon Teckensnitt

Sidfotsikonen skapas genom `F` skapa [ett](https://www.iconfont.cn/?lang=zh) teckensnitt [som](https://www.iconfont.cn/?lang=en-us) heter / iconfont.cn

Vänligen skapa ditt eget ikontypsnitt efter behov och ersätt följande konfiguration i `conf.css` :

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

Vänligen referera inte direkt till teckensnittsfilen för iconfont.cn eftersom den inte kan laddas i safariwebbläsaren.

## Webbkomponenter

Du kan inte skriva `js` på `foot.pug` Om interaktion krävs, vänligen anpassa webbkomponenten.

[En webbkomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) kan definieras i `md/.i18n/htm/index.js` och sedan användas i `foot.pug` .

Det är enkelt att skapa webbkomponenter, till exempel anpassade `<x-img>` .

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

Koden i `.i18n/htm/foot.pug` är som följer :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Här motsvarar `${I18N.C}` `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Genom att använda `${I18N.xxx}` som liknar denna skrivmetod, kombinerat med `i18n.yml` , kan du uppnå flerspråkig internationalisering av sidfoten.

Att lägga till `class="a"` till länken är för att förhindra att länken konverteras till `MarkDown` Se :
 [➔ `YAML` Hur : förhindrar att länk `HTML` konverteras till `Markdown`](/i18/qa#H2) .