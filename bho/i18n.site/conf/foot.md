# अनुकूलित पाद लेख बा

अभी भी डेमो प्रोजेक्ट के उदाहरण के रूप में लेके, `md` डाइरेक्टरी में `.i18n/htm/foot.pug` वेबसाइट के पाद लेख के परिभाषित करेला।

![](https://p.3ti.site/1721286077.avif)

## पाद लेख के शैली में बा

डेमो प्रोजेक्ट में `md/.i18n/htm` तहत तीन गो `css` फाइल बाड़ी सऽ।

* `foot.css` पाद : के शैली में बा
* `import.css` : 1पूरा साइट खातिर `i18n.site` स्टाइल
* `conf.css` : पाद लेख के आइकन आ फॉन्ट बा

### आइकन फॉन्ट के बा

पाद लेख आइकन `F` iconfont.cn ( [अंगरेजी संस्करण](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) नाँव के फॉन्ट बना के जनरेट कइल जाला।

कृपया जरूरत के हिसाब से आपन खुद के आइकन फॉन्ट बनाईं आ निम्नलिखित कॉन्फ़िगरेशन के `conf.css` में बदल दीं :

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

कृपया iconfont.cn के फॉन्ट फाइल के सीधे संदर्भ मत दीं काहें से कि ई सफारी ब्राउजर पर लोड ना हो सके ला।

## वेब घटक के बारे में बतावल गइल बा

रउआँ `foot.pug` में `js` ना लिख सकत बानी अगर बातचीत के जरूरत बा त कृपया वेब घटक के अनुकूलित करीं।

[वेब घटक के](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` में परिभाषित कइल जा सकेला आ ओकरा बाद `foot.pug` में इस्तेमाल कइल जा सकेला .

वेब घटक बनावल आसान बा, जइसे कि कस्टम `<x-img>` ।

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

## बहुभाषी पाद लेख के बारे में बतावल गइल बा

`.i18n/htm/foot.pug` में कोड निम्नलिखित बा :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

इहाँ `${I18N.C}` `en/i18n.yml` से मेल खाला :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

एह लेखन तरीका से मिलत जुलत `${I18N.xxx}` इस्तेमाल से, `i18n.yml` के साथ मिल के, रउआँ पाद लेख के बहु-भाषा अंतर्राष्ट्रीयकरण हासिल क सकत बानी।

लिंक में `class="a"` जोड़ल लिंक के `MarkDown` में बदले से रोके खातिर बा देखल जाव :
 [➔ `YAML` लिंक `HTML` : `Markdown` बदले से कइसे रोकल जा सकेला](/i18/qa#H2) .