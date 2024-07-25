# فوٽر

اڃا به مثال طور ڊيمو پروجيڪٽ وٺڻ، ويب سائيٽ جو فوٽر ڊاريڪٽري ۾ بيان ڪيو `md` `.i18n/htm/foot.pug` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

هڪ ٽيمپليٽ ٻولي [`pug`](https://pugjs.org) جيڪا ٺاهي ٿي `HTML` .

[➔ گرامر سکڻ لاءِ هتي ڪلڪ ڪريو pug](https://pugjs.org)

**نه لکو `css` ۽ `js` `foot.pug`** ، ٻي صورت ۾ غلطيون ٿينديون.

مھرباني ڪري ھيٺين ڏانھن حوالو ڏيو، انداز سان لاڳاپيل ۾ لکيل آھي `.css` ۽ رابطي کي ويب اجزاء ٺاهڻ سان حاصل ڪيو ويندو آھي.

## فوٽر انداز

ڊيمو `md/.i18n/htm` ۾ هيٺ ڏنل 3 `css` فائلون آهن.

* فوٽر : `foot.css`
* `import.css` سائيٽ لاءِ `i18n.site` :
* `conf.css` آئڪن ۽ :

### آئڪن فونٽ

فوٽر آئڪن ٺاهيل آهي iconfont.cn ( [انگريزي ورزن](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) نالي هڪ فونٽ ٺاهي `F`

مھرباني ڪري ضرورت مطابق پنھنجو پنھنجو آئڪن فونٽ ٺاھيو ۽ : ڏنل ترتيب کي تبديل ڪريو `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## ويب اجزاء

ان ۾ `js` لکي نه `foot.pug` سگهجي، مهرباني ڪري ويب پيج جو حصو ترتيب ڏيو.

توھان [ھڪڙي ويب جزو کي](https://www.freecodecamp.org/news/build-your-first-web-component/) بيان ڪري سگھو ٿا ۽ پوء `md/.i18n/htm/index.js` ۾ استعمال ڪريو `foot.pug` .

اهو آسان آهي ويب اجزاء ٺاهڻ، جهڙوڪ ڪسٽم ٽيگ `<x-img>`

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

## گهڻ لساني فوٽر

ان ۾ ڪوڊ هن ريت : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` لاڳاپيل هڪ ۾ آهي `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

هن لکڻ جي طريقي سان ملندڙ استعمال `${I18N.xxx}` ، `i18n.yml` سان گڏ، توهان فوٽر جي گھڻ-ٻولي انٽرنيشنلائيزيشن حاصل ڪري سگهو ٿا.

ڳنڍڻ کان بچڻ لاءِ لنڪ کي `MarkDown` ۾ تبديل `class="a"` ، ڏسو :
 [: `YAML` روڪجي ته لنڪ جي `HTML` `Markdown` ۾ تبديل ٿيڻ کان](/i18/qa#H2) .