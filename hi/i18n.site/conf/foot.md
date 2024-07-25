# FOOTER

फिर भी डेमो प्रोजेक्ट को एक उदाहरण के रूप में लेते हुए, वेबसाइट के पाद लेख को `md` निर्देशिका में परिभाषित किया गया `.i18n/htm/foot.pug` ।

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) एक टेम्प्लेट भाषा है जो `HTML` उत्पन्न करती है।

[➔ का व्याकरण सीखने के लिए यहां क्लिक करें pug](https://pugjs.org)

**`foot.pug` `css` और `js` न लिखें** , अन्यथा त्रुटियाँ होंगी।

कृपया निम्नलिखित का संदर्भ लें, शैली संबंधित में लिखी गई है `.css` और वेब घटक बनाकर इंटरैक्शन प्राप्त किया जाता है।

## पाद लेख शैली

डेमो प्रोजेक्ट में नीचे 3 `css` फ़ाइलें हैं `md/.i18n/htm`

* `foot.css` : लेख शैली
* `import.css` संपूर्ण साइट के लिए : `i18n.site` शैली
* `conf.css` फ़ुटर चिह्न और फ़ॉन्ट :

### आइकन फ़ॉन्ट

फ़ूटर आइकन iconfont.cn ( [अंग्रेजी संस्करण](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) नामक फ़ॉन्ट बनाकर उत्पन्न होता है `F`

कृपया आवश्यकतानुसार अपना खुद का आइकन फ़ॉन्ट बनाएं और : कॉन्फ़िगरेशन को इसमें बदलें `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## वेब घटक

`foot.pug` इसमें `js` नहीं लिख सकते. यदि इंटरेक्शन की आवश्यकता है, तो कृपया वेब पेज घटक को अनुकूलित करें.

आप [एक वेब घटक को](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` में परिभाषित कर सकते हैं और फिर `foot.pug` में घटक का उपयोग कर सकते हैं।

कस्टम टैग जैसे वेब घटक बनाना आसान है `<x-img>`

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

`.i18n/htm/foot.pug` इसमें कोड इस प्रकार है :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

यहाँ `${I18N.C}` संगत `en/i18n.yml` में है :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

इस लेखन पद्धति के समान `${I18N.xxx}` का उपयोग करके, `i18n.yml` के साथ मिलकर, आप पाद लेख का बहु-भाषा अंतर्राष्ट्रीयकरण प्राप्त कर सकते हैं।

लिंक को `MarkDown` में परिवर्तित होने से बचाने के लिए लिंक में `class="a"` जोड़ें, देखें :
 [: लिंक के `HTML` `Markdown` में परिवर्तित होने से `YAML` रोकें](/i18/qa#H2) ।