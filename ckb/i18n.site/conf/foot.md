# پێی لاپەڕە

هێشتا بە وەرگرتنی پڕۆژەی دیمۆ وەک نموونە، `.i18n/htm/foot.pug` لاپەڕەی ماڵپەڕەکە لە ناوەڕۆکی `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

زمانێکی قاڵبە کە `HTML` [`pug`](https://pugjs.org)

[➔ کلیک لێرە بکە بۆ فێربوونی ڕێزمانی pug](https://pugjs.org)

**`css` و `js` لە `foot.pug`**

تکایە ئاماژە بەمانەی خوارەوە بکە، ستایلەکە بە `.css` و کارلێکەکە بە دروستکردنی پێکهاتەکانی وێب بەدەست دێت.

## شێوازی پێوەر

لە پرۆژەی `md/.i18n/htm` 3 `css` فایل هەیە لە خوارەوە.

* `foot.css` :
* : `i18n.site` بۆ تەواوی سایتەکە `import.css`
* `conf.css` :

### فۆنتێکی ئایکۆن

ئایکۆنی پێوەرەکە بە دروستکردنی فۆنتێک بە ناوی iconfont.cn ( [وەشانی ئینگلیزی](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) دروست دەکرێت `F`

تکایە بەپێی پێویست فۆنتێکی ئایکۆنی خۆت دروست بکە و : ڕێکخستنەی خوارەوە بگۆڕە لە `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## پێکهاتەکانی وێب

`foot.pug` ناتوانرێت `js` تێیدا بنووسێت ئەگەر کارلێککردن پێویست بوو، تکایە پێکهاتەی وێب پەڕەکە بە خواستی خۆت دابنێ.

دەتوانیت [پێکهاتەیەکی وێب](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

دروستکردنی پێکهاتەکانی وێب ئاسانە، وەکو تاگی تایبەت `<x-img>`

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

`.i18n/htm/foot.pug` کۆدەکانی ناوی بەم شێوەیە :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: ئەوی هاوتایە لە `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`i18n.yml` بەکارهێنانی `${I18N.xxx}`

زیاد `class="a"` بۆ بەستەرەکە بۆ ئەوەی بەستەرەکە نەگۆڕێت بۆ `MarkDown` , سەیری بکە :
 [: `YAML` `HTML` `Markdown`](/i18/qa#H2)