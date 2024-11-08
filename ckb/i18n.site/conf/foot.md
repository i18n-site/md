# پێی لاپەڕە

هێشتا بە وەرگرتنی پڕۆژەی دیمۆ وەک نموونە، `.i18n/htm/foot.pug` لە دایرێکتۆریی `md` دا پێی لاپەڕەی ماڵپەڕەکە پێناسە دەکات.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) زمانێکی قاڵبە کە `HTML` 's دروست دەکات.

[➔ کلیک لێرە بکە بۆ فێربوونی ڕێزمانی pug](https://pugjs.org)

**`css` و `js` لە `foot.pug` مەنووسە** ، ئەگەرنا هەڵەیەک دروست دەبێت.

تکایە ئاماژە بەمانەی خوارەوە بکە، ستایلەکە دەنووسرێت بۆ `.css` ی هاوتا، و کارلێکەکە بە دروستکردنی پێکهاتەکانی وێب بەدەست دێت.

## شێوازی پێوەر

سێ فایل `css` لە ژێر `md/.i18n/htm` لە پرۆژەی دیمۆدا هەیە.

* `foot.css` :
* `import.css` : 1ستایلی `i18n.site` بۆ تەواوی سایتەکە
* `conf.css` : ئایکۆن و فۆنتەکانی پێوەر

### فۆنتێکی ئایکۆن

ئایکۆنی ژێرەوە بە دروستکردنی فۆنتێک بە ناوی `F` iconfont.cn ( [وەشانی ئینگلیزی](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) دروست دەکرێت.

تکایە بەپێی پێویست فۆنتێکی ئایکۆنی خۆت دروست بکە و ئەم ڕێکخستنەی خوارەوە بە `conf.css` بگۆڕە :

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

تکایە ڕاستەوخۆ ئاماژە بە فایلە فۆنتەکەی iconfont.cn مەکەن چونکە ناتوانرێت لەسەر وێبگەڕی سەفاری باربکرێت.

## پێکهاتەکانی وێب

ناتوانیت `js` لە `foot.pug` بنووسیت. ئەگەر کارلێککردن پێویست بوو، تکایە پێکهاتەی وێبەکە خۆت ڕێکبخە.

دەتوانرێت [پێکهاتەیەکی وێب](https://www.freecodecamp.org/news/build-your-first-web-component/) لە `md/.i18n/htm/index.js` پێناسە بکرێت و پاشان لە `foot.pug` بەکاربهێنرێت.

دروستکردنی پێکهاتەکانی وێب ئاسانە، وەکو custom `<x-img>` .

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

## ژێرەوەی فرە زمانە

کۆدی `.i18n/htm/foot.pug` بەم شێوەیە :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

لێرەدا `${I18N.C}` هاوتایە لەگەڵ `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

بە بەکارهێنانی `${I18N.xxx}` هاوشێوەی ئەم شێوازە نووسینە، لەگەڵ `i18n.yml` تێکەڵکراوە، دەتوانیت بە نێودەوڵەتیکردنی فرە زمانی پێی لاپەڕەکە بەدەست بهێنیت.

زیادکردنی `class="a"` بۆ بەستەرەکە بۆ ڕێگریکردنە لە گۆڕینی بەستەرەکە بۆ `MarkDown` سەیری :
 [➔ `YAML` چۆن ڕێگری بکەین : گۆڕینی بەستەری `HTML` بۆ `Markdown`](/i18/qa#H2) .