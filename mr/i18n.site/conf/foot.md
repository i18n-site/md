# तळटीप

तरीही डेमो प्रोजेक्टचे उदाहरण घेतल्यास, वेबसाइटचे फूटर `md` परिभाषित केले `.i18n/htm/foot.pug` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

एक टेम्प्लेट भाषा [`pug`](https://pugjs.org) जी `HTML` व्युत्पन्न करते.

[➔ चे व्याकरण शिकण्यासाठी येथे क्लिक करा pug](https://pugjs.org)

**`css` आणि `js` `foot.pug` लिहू नका** , अन्यथा त्रुटी असतील.

कृपया खालील गोष्टींचा संदर्भ घ्या, शैली संबंधित मध्ये लिहिलेली आहे `.css` आणि परस्परसंवाद वेब घटक तयार करून साध्य केला जातो.

## तळटीप शैली

डेमो `md/.i18n/htm` खाली 3 `css` फाइल्स आहेत.

* तळटीप : `foot.css`
* : साइटसाठी `i18n.site` `import.css`
* : चिन्ह आणि `conf.css`

### आयकॉन फॉन्ट

फूटर आयकॉन iconfont.cn ( [इंग्रजी आवृत्ती](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) नावाचा फॉन्ट तयार करून तयार केला आहे `F`

कृपया आवश्यकतेनुसार तुमचा स्वतःचा आयकॉन फॉन्ट तयार करा आणि : कॉन्फिगरेशन बदला `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## वेब घटक

त्यात `js` लिहू शकत `foot.pug` , जर संवाद आवश्यक असेल तर कृपया वेब पृष्ठ घटक सानुकूलित करा.

`md/.i18n/htm/index.js` [वेब घटक](https://www.freecodecamp.org/news/build-your-first-web-component/) परिभाषित करू शकता आणि नंतर `foot.pug` मध्ये घटक वापरू शकता.

सानुकूल टॅग सारखे वेब घटक तयार करणे सोपे आहे `<x-img>`

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

त्यातील कोड खालीलप्रमाणे : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

येथे संबंधित `en/i18n.yml` मध्ये : `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

या लेखन `${I18N.xxx}` वापरून, `i18n.yml` सह, तुम्ही तळटीपाचे बहु-भाषा आंतरराष्ट्रीयीकरण प्राप्त करू शकता.

लिंकला `MarkDown` मध्ये रूपांतरित करणे : दुव्यावर जोडा `class="a"`
 [: लिंकचे `HTML` `Markdown` मध्ये रूपांतरित होण्यापासून `YAML` रोखायचे](/i18/qa#H2) .