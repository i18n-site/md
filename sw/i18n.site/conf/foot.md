# Kijachini

Bado ikichukua mradi wa onyesho kama mfano, sehemu ya chini ya tovuti `.i18n/htm/foot.pug` katika saraka `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) ni lugha ya kiolezo ambayo hutoa `HTML` .

[➔ Bofya hapa ili kujifunza sarufi ya pug](https://pugjs.org)

**Usiandike `css` na `js` `foot.pug`** , vinginevyo kutakuwa na makosa.

Tafadhali rejea zifuatazo, mtindo umeandikwa kwa sambamba `.css` na mwingiliano unapatikana kwa kuunda vipengele vya mtandao.

## Mtindo Wa Chini

Katika mradi wa onyesho `md/.i18n/htm` kuna faili 3 `css` hapa chini.

* Mtindo wa : `foot.css`
* `import.css` : `i18n.site`
* Picha `conf.css` : na fonti

### Fonti Ya Ikoni

Aikoni ya kijachini imetolewa na iconfont.cn ( [Toleo la Kiingereza](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) kuunda fonti iitwayo `F`

Tafadhali tengeneza fonti yako ya ikoni kama inavyohitajika na ubadilishe : ufuatao katika `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Vipengele Vya Wavuti

`foot.pug` haiwezi kuandika `js` ndani yake Ikiwa mwingiliano unahitajika, tafadhali badilisha kipengee cha ukurasa wa wavuti.

Unaweza kufafanua [kijenzi cha wavuti](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Ni rahisi kuunda vipengee vya wavuti, kama vile lebo maalum `<x-img>`

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

## Kijachini Cha Lugha Nyingi

Kanuni ndani yake ni kama : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hii `${I18N.C}` inayolingana iko kwenye `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Kwa kutumia `${I18N.xxx}` sawa na njia hii ya uandishi, ikijumuishwa na `i18n.yml` , unaweza kufikia utaftaji wa lugha nyingi wa kijachini.

`class="a"` kwenye kiungo ili kuepusha kiungo kugeuzwa kuwa `MarkDown` , ona :
 [: `YAML` ya kuzuia `HTML` ya kiungo kugeuzwa kuwa `Markdown`](/i18/qa#H2) .