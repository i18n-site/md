# पाद लेख

एखनो डेमो प्रोजेक्ट के उदाहरण के रूप में लैत, वेबसाइट के पाद लेख `md` में परिभाषित `.i18n/htm/foot.pug` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

एकटा टेम्पलेट भाषा अछि जे `HTML` उत्पन्न करैत अछि [`pug`](https://pugjs.org)

[➔ के व्याकरण जानय लेल एतय क्लिक करू pug](https://pugjs.org)

**`css` आ `js` `foot.pug` नहि लिखू** , नहि त' त्रुटि होयत.

कृपया निम्नलिखित देखू, शैली संबंधित `.css` आ बातचीत वेब घटक बना कए प्राप्त कएल गेल अछि ।

## पाद लेख शैली

डेमो प्रोजेक्ट में नीचा 3 `css` फाइल अछि `md/.i18n/htm`

* `foot.css` :
* पूरा साइट के लेल : `i18n.site` स्टाइल `import.css`
* `conf.css` :

### आइकन फॉन्ट

पाद लेख चिह्न iconfont.cn ( [अंग्रेजी संस्करण](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) द्वारा उत्पन्न कएल गेल अछि `F`

कृपया जरूरत के हिसाब स अपन आइकन फॉन्ट बनाउ आ : विन्यास के `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## वेब घटक

`foot.pug` `js`

अहाँ मे [कोनो वेब घटक](https://www.freecodecamp.org/news/build-your-first-web-component/) परिभाषित क `md/.i18n/htm/index.js` सकैत छी आओर फेर `foot.pug` मे घटक क' उपयोग क' सकैत छी.

वेब घटक बनेनाइ आसान अछि, जेना कस्टम टैग `<x-img>`

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

एहि मे कोड निम्नलिखित : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` तदनुरूप एकटा `en/i18n.yml` मे अछि :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`i18n.yml` लेखन पद्धतिक समान `${I18N.xxx}`

लिंक के `MarkDown` में बदलय स बचय लेल लिंक में `class="a"` , देखू :
 [: लिंक के `HTML` के `Markdown` में बदलय स `YAML` रोकल जाय](/i18/qa#H2) ।