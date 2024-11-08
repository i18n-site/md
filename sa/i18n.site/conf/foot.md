# अनुकूलित पादलेख

अद्यापि डेमो परियोजनां उदाहरणरूपेण गृहीत्वा, `md` निर्देशिकायां `.i18n/htm/foot.pug` वेबसाइट् इत्यस्य पादलेखं परिभाषयति ।

![](https://p.3ti.site/1721286077.avif)

## पादशैली

डेमो परियोजनायां `md/.i18n/htm` अधः त्रीणि `css` सञ्चिकाः सन्ति ।

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` : पादचिह्नानि फन्ट् च

### Icon Font

पादचिह्नं `F` iconfont.cn ( [आङ्ग्लसंस्करणम्](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) इति नामकं फॉन्ट् निर्माय उत्पद्यते ।

कृपया आवश्यकतानुसारं स्वस्य चिह्न-फॉन्ट् रचयन्तु तथा च निम्नलिखित-विन्यासं `conf.css` मध्ये प्रतिस्थापयन्तु :

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

कृपया iconfont.cn इत्यस्य फॉन्ट् सञ्चिकां प्रत्यक्षतया न सन्दर्भयन्तु यतः सा सफारी ब्राउजरे लोड् कर्तुं न शक्यते ।

## जालघटकाः

भवान् `foot.pug` मध्ये `js` लिखितुं न शक्नोति यदि अन्तरक्रिया आवश्यकी अस्ति तर्हि कृपया जालघटकं अनुकूलितं कुर्वन्तु ।

`md/.i18n/htm/index.js` मध्ये [जालघटकं](https://www.freecodecamp.org/news/build-your-first-web-component/) परिभाषितुं शक्यते ततः `foot.pug` मध्ये उपयोक्तुं शक्यते |

जालघटकानाम् निर्माणं सुलभं भवति, यथा custom `<x-img>` .

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

`.i18n/htm/foot.pug` इत्यस्मिन् कोडः निम्नलिखितरूपेण अस्ति :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

अत्र `${I18N.C}` `en/i18n.yml` इत्यनेन सह सङ्गच्छते :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

अस्याः लेखनपद्धतेः सदृशं `${I18N.xxx}` उपयोगेन, `i18n.yml` इत्यनेन सह मिलित्वा, भवान् पादलेखस्य बहुभाषिकं अन्तर्राष्ट्रीयकरणं प्राप्तुं शक्नोति ।

लिङ्क् मध्ये `class="a"` योजयित्वा लिङ्क् `MarkDown` मध्ये परिवर्तनं न भवति पश्यन्तु :
 [`HTML` `YAML` : `Markdown`](/i18/qa#H2)