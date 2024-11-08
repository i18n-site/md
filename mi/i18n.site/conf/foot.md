# Hiku Whakarite

Kei te tango tonu i te kaupapa demo hei tauira, `.i18n/htm/foot.pug` i roto i te raarangi `md` e whakaatu ana i te hiku o te paetukutuku.

![](https://p.3ti.site/1721286077.avif)

## Kāhua Hiku

E toru nga kōnae `css` i raro i te `md/.i18n/htm` i roto i te kaupapa demo.

* `foot.css` :
* `import.css` : 1Kahua `i18n.site` mo te pae katoa
* `conf.css` : nga tohu hiku me nga momotuhi

### Momotuhi Tohu

Ka hangaia te tohu hiku ma te hanga momotuhi ko iconfont.cn ( [te putanga reo Ingarihi](https://www.iconfont.cn/?lang=en-us) `F` /[版](https://www.iconfont.cn/?lang=zh)).

Waihangahia taau ake momotuhi tohu ina hiahiatia ka whakakapi i te whirihoranga e whai ake nei ki te `conf.css` :

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

Tena koa kaua e tohutoro tika te konae momotuhi o iconfont.cn na te mea kaore e taea te uta ki runga i te kaitirotiro Safari.

## Nga Waahanga Tukutuku

Kaore e taea e koe te tuhi `js` i roto i `foot.pug` Ki te hiahiatia te taunekeneke, me whakarite te waahanga tukutuku.

Ka taea te tautuhi i [tetahi waahanga tukutuku](https://www.freecodecamp.org/news/build-your-first-web-component/) ki te `md/.i18n/htm/index.js` ka whakamahia ki `foot.pug` .

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

Ko te waehere i te `.i18n/htm/foot.pug` e whai ake nei :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

I konei `${I18N.C}` he rite ki `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ma te whakamahi i `${I18N.xxx}` e rite ana ki tenei tikanga tuhi, me `i18n.yml` , ka taea e koe te whakatutuki i te ao-ao-maha o te hiku.

Ko te taapiri i `class="a"` ki te hono kia kore e huri te hono ki `MarkDown` Tirohia :
 [➔ `YAML` : Me pehea te aukati i te hono `HTML` kia kore e huri ki `Markdown`](/i18/qa#H2) .