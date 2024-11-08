# अनुकूलित पाद लेख

एखनो डेमो प्रोजेक्ट कए उदाहरण क रूप मे लैत, `md` डायरेक्टरी मे `.i18n/htm/foot.pug` वेबसाइट क पाद लेख कए परिभाषित करैत अछि ।

![](https://p.3ti.site/1721286077.avif)

## पाद लेख शैली

डेमो प्रोजेक्ट मे `md/.i18n/htm` तहत तीन `css` फाइल अछि.

* `foot.css` पाद : शैली
* `import.css` : `i18n.site`
* `conf.css` : पाद लेख आइकन आ फॉन्ट

### आइकन फॉन्ट

पाद चिह्न `F` iconfont.cn ( [अंग्रेजी संस्करण](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) नामक फॉन्ट बना कए उत्पन्न कएल जाइत अछि ।

कृपया जरूरत के हिसाब स अपन आइकन फॉन्ट बनाउ आ निम्नलिखित विन्यास के `conf.css` में बदलू :

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

कृपया iconfont.cn के फॉन्ट फाइल के सीधा संदर्भ नै दियौ किएक त ई सफारी ब्राउजर पर लोड नै भ सकै छै.

## वेब घटक

अहाँ `foot.pug` मे `js` नहि लिखि सकैत छी.जँ बातचीतक आवश्यकता अछि, त' कृपया वेब घटक केँ अनुकूलित करू.

[एकटा वेब घटक कें](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` मे परिभाषित कैल जा सकय छै आ ओकर बाद `foot.pug` मे उपयोग कैल जा सकय छै .

वेब घटक बनाबय मे आसान अछि, जेना कस्टम `<x-img>` .

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

`.i18n/htm/foot.pug` मे कोड निम्नलिखित अछि :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

एतय `${I18N.C}` `en/i18n.yml` स मेल खाइत अछि :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

एहि लेखन पद्धतिक समान `${I18N.xxx}` उपयोग कए, `i18n.yml` क संग मिला कए, अहाँ पाद लेख क बहु-भाषा अंतर्राष्ट्रीयकरण प्राप्त क सकैत छी ।

लिंक में `class="a"` जोड़ब लिंक के `MarkDown` में बदलय स रोकब अछि.देखू :
 [➔ `YAML` लिंक `HTML` `Markdown` में बदलय स कोना रोकल :](/i18/qa#H2) .