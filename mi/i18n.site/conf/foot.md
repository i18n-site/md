# Hiku

Kei te tango tonu i te kaupapa demo hei tauira, `.i18n/htm/foot.pug` i roto i te raarangi `md` e whakaatu ana i te hiku o te paetukutuku.

![](https://p.3ti.site/1721286077.avif)

Ko [`pug`](https://pugjs.org) he reo tauira e whakaputa `HTML` 's.

[➔ Paatohia a konei ki te ako i te wetereo o pug](https://pugjs.org)

**Kaua e tuhia `css` me `js` ki `foot.pug`** , ki te kore ka puta he hapa.

Tena koa tirohia nga mea e whai ake nei, kua tuhia te ahua ki te `.css` e rite ana, a ka tutuki te taunekeneke ma te hanga i nga waahanga tukutuku.

## Kāhua Hiku

E toru nga kōnae `css` i raro i `md/.i18n/htm` i roto i te kaupapa demo.

* `foot.css` :
* `import.css` : `i18n.site` mo te pae katoa
* `conf.css` : nga tohu hiku me nga momotuhi

### Momotuhi Tohu

Ka hangaia te tohu hiku ma te hanga momotuhi ko iconfont.cn ( te putanga `F` [Ingarihi](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Waihangahia taau ake momotuhi tohu ina hiahiatia ka whakakapi i te whirihoranga e whai ake nei ki `conf.css` :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Nga Waahanga Tukutuku

Kaore e taea e koe te tuhi `js` i roto i `foot.pug` Ki te hiahiatia te taunekeneke, me whakarite te waahanga tukutuku.

Ka taea te tautuhi i [tetahi waahanga tukutuku](https://www.freecodecamp.org/news/build-your-first-web-component/) ki te `md/.i18n/htm/index.js` ka whakamahia ki te `foot.pug` .

He ngawari te hanga i nga waahanga tukutuku, penei i `<x-img>` ritenga0 .

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

Ko te waehere i `.i18n/htm/foot.pug` e whai ake nei :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

I konei ko `${I18N.C}` he rite ki `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ma te whakamahi i `${I18N.xxx}` e rite ana ki tenei tikanga tuhi, me `i18n.yml` , ka taea e koe te whakatutuki i te ao-ao-maha o te hiku.

Ko te taapiri i `class="a"` ki te hono kia kore e huri te hono ki `MarkDown` Tirohia :
 [➔ `YAML` : Me pehea te aukati i te hono `HTML` kia huri ki `Markdown`](/i18/qa#H2) .