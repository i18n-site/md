# Lábléc

Még mindig a demóprojektet vesszük példaként, a `md` könyvtárban az `.i18n/htm/foot.pug` határozza meg a webhely láblécét.

![](https://p.3ti.site/1721286077.avif)

A [`pug`](https://pugjs.org) egy sablonnyelv, amely `HTML` -eket generál.

[➔ Kattintson ide a nyelvtan megtanulásához pug](https://pugjs.org)

**Ne írjon `css` és `js` t `foot.pug` -ba** , különben hiba lép fel.

Kérjük, olvassa el az alábbiakat, a stílus a megfelelő `.css` van írva, és az interakció webes komponensek létrehozásával valósul meg.

## Lábléc Stílus

A demóprojektben három `css` fájl található `md/.i18n/htm` alatt.

* `foot.css` : stílus
* `import.css` `i18n.site` stílus : teljes webhelyhez
* `conf.css` : ikonok és betűtípusok

### Ikon Betűtípus

A lábléc ikon egy iconfont.cn nevű betűtípus létrehozásával jön létre ( [angol verzió](https://www.iconfont.cn/?lang=en-us) / `F`[版](https://www.iconfont.cn/?lang=zh)).

Kérjük, szükség szerint készítse el saját ikon betűkészletét, és cserélje ki a következő konfigurációt `conf.css` -ra :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Összetevők

Nem írhat `js` `foot.pug` hoz. Ha interakcióra van szükség, kérjük, szabja testre a webes összetevőt.

[Egy webkomponens](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` -ban definiálható, majd `foot.pug` -ben használható.

Könnyen létrehozhat webes összetevőket, például egyéni `<x-img>` .

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

## Többnyelvű Lábléc

A `.i18n/htm/foot.pug` -s kód a következő :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Itt a `${I18N.C}` `en/i18n.yml` nek felel meg :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ha ehhez az írásmódhoz hasonló `${I18N.xxx}` használunk, `i18n.yml` gyel kombinálva a lábléc többnyelvű nemzetközivé tételét érhetjük el.

Ha a hivatkozáshoz `class="a"` adunk, az megakadályozza, hogy a hivatkozás `MarkDown` re legyen konvertálva. Lásd :
 [➔ `YAML` Hogyan lehet megakadályozni : hogy `HTML` hivatkozás `Markdown` -re legyen konvertálva](/i18/qa#H2) .