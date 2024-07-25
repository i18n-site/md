# Lábléc

Példaként a demóprojektet tekintve a webhely `.i18n/htm/foot.pug` a `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

`HTML` [`pug`](https://pugjs.org)

[➔ Kattintson ide a nyelvtan megtanulásához pug](https://pugjs.org)

**Ne írja be `css` és `js` `foot.pug`** , különben hibák lesznek.

Kérjük, olvassa el az alábbiakat, a stílus a megfelelő `.css` és az interakció webes komponensek létrehozásával valósul meg.

## Lábléc Stílus

A demo `md/.i18n/htm` 3 `css` fájl található alább.

* : `foot.css`
* `import.css` `i18n.site` stílus : egész webhelyhez
* `conf.css` ikonok és :

### Ikon Betűtípus

`F` [lábléc](https://www.iconfont.cn/?lang=zh) [ikont](https://www.iconfont.cn/?lang=en-us) / iconfont.cn

Kérjük, szükség szerint hozzon létre saját ikonbetűtípust, és cserélje ki : következő konfigurációt a -ban `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Összetevők

`foot.pug` írhat bele `js` -t.

Megadhat [egy webkomponenst](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Könnyű webes összetevőket, például egyéni címkéket létrehozni `<x-img>`

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

A benne lévő kód : következő `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Itt található : megfelelő `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Az ehhez az írási módszerhez hasonló `${I18N.xxx}` használatával, `i18n.yml` karakterrel kombinálva a lábléc többnyelvű nemzetközivé tételét érheti el.

Adja `class="a"` a hivatkozást, hogy elkerülje a hivatkozás `MarkDown` -re való konvertálását, lásd :
 [: `YAML` `HTML` `Markdown`](/i18/qa#H2)