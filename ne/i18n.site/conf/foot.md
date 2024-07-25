# फुटर

अझै पनि डेमो प्रोजेक्टलाई उदाहरणको रूपमा लिँदै, वेबसाइटको फुटर `md` परिभाषित गरिएको `.i18n/htm/foot.pug` ।

<img alt="" src="https://p.3ti.site/1721286077.avif">

टेम्प्लेट भाषा हो जसले `HTML` उत्पन्न गर्दछ [`pug`](https://pugjs.org)

[➔ व्याकरण सिक्न यहाँ क्लिक गर्नुहोस् pug](https://pugjs.org)

**`css` र `js` मा `foot.pug`** , अन्यथा त्रुटि हुनेछ।

कृपया निम्नलाई सन्दर्भ गर्नुहोस्, शैली सम्बन्धितमा लेखिएको छ `.css` र अन्तरक्रिया वेब कम्पोनेन्टहरू सिर्जना गरेर प्राप्त हुन्छ।

## फुटर शैली

डेमो परियोजनामा ​​तल 3 `css` फाइलहरू छन् `md/.i18n/htm`

* फुटर : `foot.css`
* सम्पूर्ण साइटको `import.css` `i18n.site` :
* `conf.css` आइकनहरू र :

### आइकन फन्ट

/ [आइकन](https://www.iconfont.cn/?lang=en-us) iconfont.cn[​](https://www.iconfont.cn/?lang=zh) `F`

कृपया आवश्यकता अनुसार आफ्नो आफ्नै आइकन फन्ट सिर्जना गर्नुहोस् र निम्न : प्रतिस्थापन गर्नुहोस् `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## वेब कम्पोनेन्टहरू

यसमा `js` लेख्न `foot.pug` भने, कृपया वेब पृष्ठको घटक अनुकूलित गर्नुहोस्।

तपाइँ `md/.i18n/htm/index.js` [वेब कम्पोनेन्ट](https://www.freecodecamp.org/news/build-your-first-web-component/) परिभाषित गर्न सक्नुहुन्छ र त्यसपछि `foot.pug` मा कम्पोनेन्ट प्रयोग गर्न सक्नुहुन्छ।

वेब कम्पोनेन्टहरू सिर्जना गर्न सजिलो छ, जस्तै अनुकूलन ट्यागहरू `<x-img>`

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

## बहुभाषी फुटर

यसमा रहेको कोड यस प्रकार : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

यहाँ सम्बन्धित `en/i18n.yml` मा : `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

यस लेखन विधिसँग मिल्दोजुल्दो प्रयोग `${I18N.xxx}` `i18n.yml` तपाईं फुटरको बहु-भाषा अन्तर्राष्ट्रियकरण प्राप्त गर्न सक्नुहुन्छ।

लिङ्कलाई `MarkDown` मा रूपान्तरण हुनबाट : लिङ्कमा थप्नुहोस् `class="a"`
 [: `YAML` `HTML` `Markdown` मा रूपान्तरण हुनबाट रोक्ने](/i18/qa#H2) ।