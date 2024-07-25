# पादलेखः

अद्यापि डेमो परियोजनां उदाहरणरूपेण गृहीत्वा, वेबसाइट् इत्यस्य पादलेखः निर्देशिकायां परिभाषितः `.i18n/htm/foot.pug` `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

एकः टेम्पलेट् भाषा अस्ति या `HTML` जनयति [`pug`](https://pugjs.org)

[➔ इत्यस्य व्याकरणं ज्ञातुं अत्र क्लिक् कुर्वन्तु pug](https://pugjs.org)

**`css` तथा `js` `foot.pug` न लिखन्तु** , अन्यथा त्रुटयः भविष्यन्ति ।

कृपया निम्नलिखितम् अवलोकयन्तु, शैली तत्सम्बद्धे `.css` तथा च जालघटकानाम् निर्माणेन अन्तरक्रिया सिद्धा भवति ।

## पादशैली

डेमो परियोजनायां अधः ३ `css` सञ्चिकाः सन्ति `md/.i18n/htm`

* `foot.css` :
* सम्पूर्ण साइट् कृते `i18n.site` : `import.css`
* `conf.css` :

### Icon Font

पादचिह्नं iconfont.cn ( [English version](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) इत्यनेन `F` नामकं फॉन्ट् निर्माय उत्पन्नं भवति ।

कृपया आवश्यकतानुसारं स्वकीयं icon font रचयन्तु तथा च : प्रतिस्थापयन्तु `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## जालघटकाः

`foot.pug` तस्मिन् `js` लिखितुं न शक्नोति ।

[भवन्तः](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` `foot.pug`

जालघटकानाम् निर्माणं सुलभम्, यथा कस्टम् टैग् `<x-img>`

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

## बहुभाषिक पादलेख

तस्मिन् विद्यमानः कोडः यथा : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: तदनुरूपः `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`i18n.yml` लेखनपद्धतेः सदृशं `${I18N.xxx}`

लिङ्क् `MarkDown` मध्ये परिवर्तनं न भवतु : लिङ्क् मध्ये योजयन्तु , पश्यन्तु `class="a"`
 [: लिङ्कस्य `HTML` `Markdown` मध्ये परिवर्तनं `YAML` निवारयितव्यम्](/i18/qa#H2) |