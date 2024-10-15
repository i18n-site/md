# Kijachini

Bado ikichukua mradi wa onyesho kama mfano, `.i18n/htm/foot.pug` katika saraka `md` inafafanua sehemu ya chini ya tovuti.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) ni lugha ya kiolezo ambayo hutoa `HTML` .

[➔ Bofya hapa ili kujifunza sarufi ya pug](https://pugjs.org)

**Usiandike `css` na `js` kwa `foot.pug`** , vinginevyo kutakuwa na hitilafu.

Tafadhali rejea zifuatazo, mtindo umeandikwa kwenye `.css` inayofanana, na mwingiliano unapatikana kwa kuunda vipengele vya mtandao.

## Mtindo Wa Chini

Kuna faili tatu `css` chini ya `md/.i18n/htm` katika mradi wa onyesho.

* `foot.css` :
* `import.css` : `i18n.site` kwa tovuti nzima
* `conf.css` : ikoni na fonti za chini

### Fonti Ya Ikoni

Aikoni [ya](https://www.iconfont.cn/?lang=zh) [kijachini](https://www.iconfont.cn/?lang=en-us) inatolewa kwa kuunda fonti `F` / iconfont.cn

Tafadhali tengeneza fonti yako ya ikoni kama inavyohitajika na ubadilishe usanidi ufuatao katika `conf.css` :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Vipengele Vya Wavuti

Huwezi kuandika `js` kati ya `foot.pug` Ikiwa mwingiliano unahitajika, tafadhali rekebisha kijenzi cha wavuti kukufaa.

[Sehemu ya wavuti](https://www.freecodecamp.org/news/build-your-first-web-component/) inaweza kufafanuliwa katika `md/.i18n/htm/index.js` na kisha kutumika katika `foot.pug` .

Ni rahisi kuunda vipengee vya wavuti, kama vile `<x-img>` maalum0 .

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

Nambari katika `.i18n/htm/foot.pug` ni kama ifuatavyo :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hapa `${I18N.C}` inalingana na `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Kwa kutumia `${I18N.xxx}` sawa na njia hii ya uandishi, pamoja na `i18n.yml` , unaweza kufikia utaftaji wa lugha nyingi wa kijachini.

Kuongeza `class="a"` kwenye kiungo ni kuzuia kiungo kugeuzwa kuwa `MarkDown` Tazama :
 [➔ `YAML` : Jinsi ya kuzuia kiungo `HTML` kugeuzwa kuwa `Markdown`](/i18/qa#H2) !