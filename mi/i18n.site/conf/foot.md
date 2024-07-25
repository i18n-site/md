# Hiku

Ka mau tonu te kaupapa demo hei tauira, ko te hiku o te paetukutuku `.i18n/htm/foot.pug` te raarangi `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

he reo tauira e whakaputa ana i `HTML` [`pug`](https://pugjs.org)

[➔ Paatohia a konei ki te ako i te wetereo o pug](https://pugjs.org)

**Kaua e tuhia `css` me `js` ki roto `foot.pug`**

Tena koa tirohia nga mea e whai ake nei, kua tuhia te ahua ki nga korero e rite ana `.css` a ka tutuki te taunekeneke ma te hanga i nga waahanga tukutuku.

## Kāhua Hiku

Kei te kaupapa demo `md/.i18n/htm` E 3 `css` nga konae kei raro.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` :

### Momotuhi Tohu

Ko te tohu hiku i hangaia e iconfont.cn ( [Putanga Ingarihi](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) te hanga momotuhi ko `F`

Waihangahia taau ake momotuhi tohu ina hiahiatia ka whakakapi i : whirihoranga e whai ake nei ki `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Waehanga Tukutuku

`foot.pug` kaore e taea te tuhi `js` ki roto.

Ka taea e koe te tautuhi i [tetahi waahanga tukutuku](https://www.freecodecamp.org/news/build-your-first-web-component/) i roto i `foot.pug` `md/.i18n/htm/index.js`

He ngawari te hanga i nga waahanga paetukutuku, penei i nga tohu tohu `<x-img>`

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

## Hiku Reo Maha

: te waehere kei roto e whai ake nei `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Kei : `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ma te whakamahi i te `${I18N.xxx}` rite ki tenei tikanga tuhi, ka honoa ki `i18n.yml` , ka taea e koe te whakatutuki i nga reo maha o te hiku.

Tāpiri `class="a"` ki te hono kia kore e huri te hono ki `MarkDown` , tirohia :
 [: `YAML` te aukati `HTML` o te hono kia huri ki `Markdown`](/i18/qa#H2) .