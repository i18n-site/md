# حسب ضرورت فوٹر

پھر بھی ڈیمو پروجیکٹ کو بطور مثال لیتے ہوئے، `md` ڈائرکٹری میں `.i18n/htm/foot.pug` ویب سائٹ کے فوٹر کی وضاحت کرتا ہے۔

![](https://p.3ti.site/1721286077.avif)

## فوٹر اسٹائل

ڈیمو پروجیکٹ میں `md/.i18n/htm` کے تحت تین `css` فائلیں ہیں۔

* `foot.css` : اسٹائل
* `import.css` پوری سائٹ کے لیے : `i18n.site` اسٹائل
* `conf.css` : شبیہیں اور فونٹس

### آئیکن فونٹ

فوٹر آئیکن iconfont.cn ( [انگریزی ورژن](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) `F` نام سے ایک فونٹ بنا کر تیار کیا جاتا ہے۔

براہ کرم ضرورت کے مطابق اپنا آئیکن فونٹ بنائیں اور درج ذیل کنفیگریشن کو `conf.css` میں بدل دیں :

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

براہ کرم iconfont.cn کی فونٹ فائل کا براہ راست حوالہ نہ دیں کیونکہ اسے سفاری براؤزر پر لوڈ نہیں کیا جا سکتا۔

## ویب اجزاء

آپ `foot.pug` میں `js` نہیں لکھ سکتے۔ اگر تعامل کی ضرورت ہو، تو براہ کرم ویب جزو کو اپنی مرضی کے مطابق بنائیں۔

[ایک ویب جزو کو](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` میں بیان کیا جا سکتا ہے اور پھر `foot.pug` میں استعمال کیا جا سکتا ہے۔

ویب اجزاء بنانا آسان ہے، جیسے custom `<x-img>` ۔

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

`.i18n/htm/foot.pug` میں کوڈ درج ذیل ہے :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

یہاں `${I18N.C}` `en/i18n.yml` کے مساوی ہے :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

اس تحریری طریقہ سے ملتے جلتے `${I18N.xxx}` استعمال کرتے ہوئے، `i18n.yml` کے ساتھ مل کر، آپ فوٹر کی کثیر زبان کی بین الاقوامی کاری حاصل کر سکتے ہیں۔

لنک میں `class="a"` شامل کرنا لنک کو `MarkDown` میں تبدیل ہونے سے روکنا ہے۔ دیکھیں :
 [➔ `YAML` : لنک `HTML` `Markdown` میں تبدیل ہونے سے کیسے روکا جائے](/i18/qa#H2) ۔