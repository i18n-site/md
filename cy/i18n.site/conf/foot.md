# Troedyn

Gan ddal i gymryd y prosiect demo fel enghraifft, `.i18n/htm/foot.pug` troedyn y wefan wedi'i ddiffinio yn y cyfeiriadur `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

Mae [`pug`](https://pugjs.org) yn iaith dempled sy'n cynhyrchu `HTML` .

[➔ Cliciwch yma i ddysgu gramadeg pug](https://pugjs.org)

**Peidiwch ag ysgrifennu `css` a `js` `foot.pug`** , fel arall bydd gwallau.

Cyfeiriwch at y canlynol, mae'r arddull wedi'i ysgrifennu yn y cyfatebol `.css` a chyflawnir y rhyngweithio trwy greu cydrannau gwe.

## Arddull Troedyn

Yn y prosiect demo `md/.i18n/htm` Mae 3 `css` ffeil isod.

* `foot.css` :
* `import.css` : `i18n.site`
* : a ffontiau `conf.css`

### Ffont Eicon

Cynhyrchir eicon y troedyn gan iconfont.cn ( [fersiwn Saesneg](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) gan greu ffont o'r enw `F`

Crëwch eich ffont eicon eich hun yn ôl yr angen a disodli'r ffurfweddiad : yn `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Cydrannau Gwe

`foot.pug` methu ysgrifennu `js` ynddo.

Gallwch ddiffinio [cydran gwe](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Mae'n hawdd creu cydrannau gwe, fel tagiau arferol `<x-img>`

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

## Troedyn Amlieithog

Mae'r cod ynddo fel : ganlyn `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`en/i18n.yml` `${I18N.C}` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Gan ddefnyddio `${I18N.xxx}` yn debyg i'r dull ysgrifennu hwn, ynghyd â `i18n.yml` , gallwch gyflawni rhyngwladoli aml-iaith o'r troedyn.

`class="a"` at y ddolen i osgoi trosi'r ddolen i `MarkDown` , gweler :
 [: `YAML` i atal `HTML` y ddolen rhag cael ei throsi i `Markdown`](/i18/qa#H2) .