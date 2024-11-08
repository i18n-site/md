# अनुकूलित पाद लेख

अभी भी डेमो प्रोजेक्ट को एक उदाहरण के रूप में लेते हुए, `md` निर्देशिका में `.i18n/htm/foot.pug` वेबसाइट के पादलेख को परिभाषित करता है।

![](https://p.3ti.site/1721286077.avif)

## पाद लेख शैली

डेमो प्रोजेक्ट में `md/.i18n/htm` के अंतर्गत तीन `css` फ़ाइलें हैं।

* `foot.css` : फ़ुटर शैली
* `import.css` : 1संपूर्ण साइट के लिए `i18n.site` शैली
* `conf.css` : फ़ुटर चिह्न और फ़ॉन्ट

### आइकन फ़ॉन्ट

फ़ूटर आइकन iconfont.cn नामक फ़ॉन्ट बनाकर उत्पन्न होता है ( [अंग्रेजी संस्करण](https://www.iconfont.cn/?lang=en-us) `F` /[版](https://www.iconfont.cn/?lang=zh))।

कृपया आवश्यकतानुसार अपना स्वयं का आइकन फ़ॉन्ट बनाएं और निम्नलिखित कॉन्फ़िगरेशन को `conf.css` में बदलें :

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

कृपया सीधे आइकॉनफ़ॉन्ट.सीएन की फ़ॉन्ट फ़ाइल का संदर्भ न लें क्योंकि इसे सफ़ारी ब्राउज़र पर लोड नहीं किया जा सकता है।

## वेब घटक

आप `foot.pug` में `js` नहीं लिख सकते। यदि इंटरैक्शन की आवश्यकता है, तो कृपया वेब घटक को अनुकूलित करें।

[एक वेब घटक को](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` में परिभाषित किया जा सकता है और फिर `foot.pug` में उपयोग किया जा सकता है।

कस्टम `<x-img>` जैसे वेब घटक बनाना आसान है।

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

## बहुभाषी पाद लेख

`.i18n/htm/foot.pug` में कोड इस प्रकार है :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

यहाँ `${I18N.C}` `en/i18n.yml` से मेल खाता है :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

इस लेखन पद्धति के समान `${I18N.xxx}` का उपयोग करके, `i18n.yml` के साथ मिलकर, आप पाद लेख का बहु-भाषा अंतर्राष्ट्रीयकरण प्राप्त कर सकते हैं।

लिंक में `class="a"` जोड़ने का मतलब लिंक को `MarkDown` में परिवर्तित होने से रोकना है। देखें :
 [➔ `YAML` : लिंक `HTML` `Markdown` में बदलने से कैसे रोकें](/i18/qa#H2) ?