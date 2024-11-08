# सानुकूलित तळटीप

तरीही उदाहरण म्हणून डेमो प्रोजेक्ट घेतल्यास, `md` निर्देशिकेतील `.i18n/htm/foot.pug` वेबसाइटचे फूटर परिभाषित करते.

![](https://p.3ti.site/1721286077.avif)

## तळटीप शैली

डेमो प्रोजेक्टमध्ये `md/.i18n/htm` अंतर्गत तीन `css` फाइल्स आहेत.

* `foot.css` : शैली
* `import.css` : 1 संपूर्ण साइटसाठी `i18n.site` शैली
* `conf.css` : तळटीप चिन्ह आणि फॉन्ट

### आयकॉन फॉन्ट

तळटीप चिन्ह iconfont.cn नावाचा फॉन्ट तयार करून तयार केला जातो `F` [इंग्रजी आवृत्ती](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

कृपया गरजेनुसार तुमचा स्वतःचा आयकॉन फॉन्ट तयार करा आणि खालील कॉन्फिगरेशन `conf.css` मध्ये बदला :

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

कृपया iconfont.cn च्या फॉन्ट फाईलचा थेट संदर्भ घेऊ नका कारण ती सफारी ब्राउझरवर लोड केली जाऊ शकत नाही.

## वेब घटक

तुम्ही `foot.pug` मध्ये `js` लिहू शकत नाही. परस्परसंवाद आवश्यक असल्यास, कृपया वेब घटक सानुकूलित करा.

[वेब घटक](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` मध्ये परिभाषित केला जाऊ शकतो आणि नंतर `foot.pug` मध्ये वापरला जाऊ शकतो.

सानुकूल `<x-img>` सारखे वेब घटक तयार करणे सोपे आहे.

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

## बहुभाषिक तळटीप

`.i18n/htm/foot.pug` मधील कोड खालीलप्रमाणे आहे :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

येथे `${I18N.C}` `en/i18n.yml` शी संबंधित आहे :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

या लेखन पद्धतीप्रमाणेच `${I18N.xxx}` वापरून, `i18n.yml` सह एकत्रित करून, तुम्ही तळटीपाचे बहु-भाषा आंतरराष्ट्रीयीकरण साध्य करू शकता.

दुव्यावर `class="a"` जोडणे म्हणजे दुव्याचे `MarkDown` मध्ये रूपांतर होण्यापासून रोखणे. पहा :
 [➔ `YAML` : लिंक `HTML` `Markdown` मध्ये रूपांतरित होण्यापासून कसे रोखायचे](/i18/qa#H2) .