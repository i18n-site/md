# पाद लेख के रूप में दिहल गइल बा

अभी भी डेमो प्रोजेक्ट के उदाहरण के रूप में लेके, वेबसाइट के पाद लेख के परिभाषित कइल गइल `.i18n/htm/foot.pug` `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

एगो टेम्पलेट भाषा ह जवन `HTML` पैदा करेला [`pug`](https://pugjs.org)

[➔ के व्याकरण जाने खातिर इहाँ क्लिक करीं pug](https://pugjs.org)

**`css` आ `js` `foot.pug` मत लिखीं** , ना त त्रुटि हो जाई।

कृपया निम्नलिखित के देखल जाय, शैली संबंधित `.css` आ बातचीत वेब घटक बना के हासिल कइल जाला।

## पाद लेख के शैली में बा

डेमो प्रोजेक्ट में नीचे 3 गो `css` फाइल बा `md/.i18n/htm`

* पाद लेख के स्टाइल : `foot.css`
* पूरा साइट खातिर : `i18n.site` स्टाइल `import.css`
* पाद लेख : आइकन आ फॉन्ट `conf.css`

### आइकन के फॉन्ट बा

पाद लेख आइकन iconfont.cn ( [अंगरेजी संस्करण](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) के द्वारा जनरेट कइल जाला जेकर नाँव `F`

कृपया जरूरत के हिसाब से आपन खुद के आइकन फॉन्ट बनाईं आ : कॉन्फ़िगरेशन के `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## वेब घटक के बारे में बतावल गइल बा

`foot.pug` `js`

रउआँ में [कवनो वेब घटक](https://www.freecodecamp.org/news/build-your-first-web-component/) परिभाषित कर सकेनी आ ओकरा बाद `foot.pug` में घटक के इस्तेमाल कर सकेनी `md/.i18n/htm/index.js`

वेब घटक बनावल आसान बा, जइसे कि कस्टम टैग `<x-img>`

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

एकरा में कोड निम्नलिखित : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

इहाँ `${I18N.C}` संबंधित वाला `en/i18n.yml` में बा :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

एह लेखन तरीका `i18n.yml` मिलत जुलत `${I18N.xxx}`

लिंक के `MarkDown` में बदले से बचे खातिर लिंक में `class="a"` , देखीं :
 [: लिंक के `HTML` के `Markdown` में बदले से `YAML` रोकल जा सकेला](/i18/qa#H2) ।