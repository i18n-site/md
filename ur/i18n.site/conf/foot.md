# فوٹر

پھر بھی ڈیمو پروجیکٹ کو بطور مثال لیتے ہوئے، ویب سائٹ کا فوٹر ڈائرکٹری میں بیان کیا گیا `.i18n/htm/foot.pug` `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

ایک ٹیمپلیٹ لینگویج ہے جو `HTML` تیار کرتی ہے [`pug`](https://pugjs.org)

[➔ گرامر سیکھنے کے لیے یہاں کلک کریں pug](https://pugjs.org)

**`css` اور `js` `foot.pug` نہ لکھیں** ، ورنہ غلطیاں ہوں گی۔

براہ کرم مندرجہ ذیل کا حوالہ دیں، اسلوب اسی میں لکھا گیا ہے `.css` اور تعامل ویب اجزاء بنا کر حاصل کیا جاتا ہے۔

## فوٹر اسٹائل

ڈیمو پروجیکٹ میں نیچے 3 `css` فائلیں ہیں `md/.i18n/htm`

* فوٹر : `foot.css`
* پوری سائٹ کے لیے : `i18n.site` `import.css`
* : شبیہیں اور فونٹس `conf.css`

### آئیکن فونٹ

فوٹر آئیکن iconfont.cn ( [انگریزی ورژن](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) نام سے ایک فونٹ تیار کرتا ہے `F`

براہ کرم ضرورت کے مطابق اپنا خود کا آئیکن فونٹ بنائیں اور : ذیل کنفیگریشن کو `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## ویب اجزاء

اگر بات چیت کی ضرورت ہو تو اس میں `js` نہیں لکھ سکتے `foot.pug`

آپ میں [ایک ویب جزو کی](https://www.freecodecamp.org/news/build-your-first-web-component/) وضاحت کر سکتے ہیں اور پھر `foot.pug` میں جزو استعمال کر سکتے ہیں `md/.i18n/htm/index.js`

ویب اجزاء بنانا آسان ہے، جیسے حسب ضرورت ٹیگز `<x-img>`

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

## کثیر لسانی فوٹر

اس میں کوڈ درج ذیل : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

یہاں متعلقہ `en/i18n.yml` میں : `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

اس تحریری طریقہ کی طرح استعمال کرتے `${I18N.xxx}` ، `i18n.yml` کے ساتھ مل کر، آپ فوٹر کی کثیر زبان کی بین الاقوامی کاری حاصل کر سکتے ہیں۔

لنک کو `MarkDown` میں تبدیل کرنے سے بچنے کے لیے لنک میں شامل `class="a"` ، دیکھیں :
 [: لنک کے `HTML` `Markdown` میں تبدیل ہونے سے `YAML` روکا جائے](/i18/qa#H2) ۔