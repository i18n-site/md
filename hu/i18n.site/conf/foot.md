# Lábléc

Még mindig a demóprojekt példájánál járva, a `md` könyvtárban található `.i18n/htm/foot.pug` fájl határozza meg a weboldal lábécét.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) egy sablonnyelv, amely `HTML`-et generál.

[➔ Kattintson ide a pug nyelvtanulásához](https://pugjs.org)

**Ne írjon `css` és `js` kódot a `foot.pug` fájlba**, különben hiba lép fel.

Kérjük, tekintse meg az alábbiakat, a stílusokat a megfelelő `.css` fájlokba kell írni, az interakciókat pedig webes komponensek létrehozásával kell megvalósítani.

## Lábléc stílus

A demóprojektben a `md/.i18n/htm` mappában három `css` fájl található.

* `foot.css`: a lábléc stílusai
* `import.css`: az `i18n.site` globális alapstílusai
* `conf.css`: a lábléc ikonjai és betűtípusai

### Ikon betűtípus

A lábléc ikonjai az iconfont.cn oldalon létrehozott `F` betűtípussal készültek ([angol verzió](https://www.iconfont.cn/?lang=en-us) / [中文版](https://www.iconfont.cn/?lang=zh)).

Kérjük, készítsen saját ikonbetűtípust szükség szerint, és cserélje ki a `conf.css` fájl alábbi konfigurációt:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Webes komponensek

Ne írjon `js` kódot a `foot.pug` fájlba. Ha interakcióra van szükség, hozzon létre egyedi webes komponenst.

[Egy webkomponenst](https://www.freecodecamp.org/news/build-your-first-web-component/) a `md/.i18n/htm/index.js` fájlban lehet definiálni, majd azt a `foot.pug` fájlban lehet használni.

Egyszerűen létrehozhat egyedi HTML elemeket, például egy `<x-img>` címkét.

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

## Többnyelvű lábléc

A `.i18n/htm/foot.pug` fájlban a következő kód található:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Itt a `${I18N.C}` a `en/i18n.yml` fájlban található:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Az `${I18N.xxx}` használatával, kombinálva az `i18n.yml` fájllal, elérhetjük a lábléc többnyelvűsítését.

Azért adjunk hozzá `class="a"` attribútumot a hivatkozásokhoz, hogy megakadályozzuk azok `Markdown` formátumba történő konvertálását. Lásd:
 [➔ `YAML`: Hogyan lehet megakadályozni, hogy az `HTML` hivatkozások `Markdown` formátumba kerüljenek](/i18/qa#H2)