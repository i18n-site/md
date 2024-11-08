# فوٽر

اڃا به مثال طور ڊيمو پروجيڪٽ کڻڻ، `md` ڊاريڪٽري ۾ `.i18n/htm/foot.pug` ويب سائيٽ جي فوٽر کي بيان ڪري ٿو.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) هڪ ٽيمپليٽ ٻولي آهي جيڪا `HTML` جي ٺاهي ٿي.

[➔ گرامر سکڻ لاءِ هتي ڪلڪ ڪريو pug](https://pugjs.org)

**`foot.pug` ۾ `css` ۽ `js` نه لکو** ، ٻي صورت ۾ غلطي ٿيندي.

مھرباني ڪري ھيٺ ڏنل حوالو ڏيو، انداز سان لاڳاپيل `.css` ۾ لکيل آھي، ۽ رابطي کي ويب اجزاء ٺاهڻ سان حاصل ڪيو ويندو آھي.

## فوٽر انداز

ڊيمو پروجيڪٽ ۾ `md/.i18n/htm` تحت ٽي `css` فائلون آهن.

* `foot.css` فوٽر :
* `import.css` : سائيٽ لاءِ `i18n.site` انداز
* `conf.css` : آئڪن ۽ فونٽس

### آئڪن فونٽ

فوٽر آئڪن iconfont.cn ( `F` [ورزن](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) نالي هڪ فونٽ ٺاهي ٺاهي ٿو.

مھرباني ڪري ضرورت مطابق پنھنجو پنھنجو آئڪن فونٽ ٺاھيو ۽ ھيٺ ڏنل ترتيب کي `conf.css` ۾ تبديل ڪريو :

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

مهرباني ڪري iconfont.cn جي فونٽ فائل جو سڌو حوالو نه ڏيو ڇو ته اهو سفاري برائوزر تي لوڊ نٿو ٿي سگهي.

## ويب اجزاء

توھان `js` ۾ `foot.pug` لکي نٿا سگھو. جيڪڏھن رابطي جي ضرورت آھي، مھرباني ڪري ويب جو حصو ترتيب ڏيو.

[ويب جو حصو](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` ۾ بيان ڪري سگھجي ٿو ۽ پوء `foot.pug` ۾ استعمال ڪيو ويندو.

اهو ويب اجزاء ٺاهڻ آسان آهي، جهڙوڪ Custom `<x-img>` .

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

`.i18n/htm/foot.pug` ۾ ڪوڊ هن ريت آهي :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

هتي `${I18N.C}` سان ملندڙ جلندڙ آهي `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

هن لکڻ جي طريقي سان ملندڙ `${I18N.xxx}` استعمال ڪندي، `i18n.yml` سان گڏ، توهان فوٽر جي گھڻ-ٻولي بين الاقواميت حاصل ڪري سگهو ٿا.

لنڪ ۾ `class="a"` شامل ڪرڻ سان لنڪ کي `MarkDown` ۾ تبديل ٿيڻ کان روڪڻ آهي. ڏسو :
 [➔ `YAML` : لنڪ `HTML` `Markdown` ۾ تبديل ٿيڻ کان ڪيئن روڪيو وڃي](/i18/qa#H2) .