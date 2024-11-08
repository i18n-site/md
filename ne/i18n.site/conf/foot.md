# अनुकूलित फुटर

अझै डेमो प्रोजेक्टलाई उदाहरणको रूपमा लिँदा, `md` डाइरेक्टरीमा `.i18n/htm/foot.pug` वेबसाइटको फुटर परिभाषित गर्दछ।

![](https://p.3ti.site/1721286077.avif)

## फुटर शैली

डेमो परियोजनामा `md/.i18n/htm` अन्तर्गत तीन `css` फाइलहरू छन्।

* `foot.css` : शैली
* `import.css` : 1 सम्पूर्ण साइटको लागि `i18n.site` शैली
* `conf.css` : आइकनहरू र फन्टहरू

### आइकन फन्ट

फुटर आइकन iconfont.cn नामक फन्ट सिर्जना गरेर उत्पन्न हुन्छ ( `F` [संस्करण](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh))।

कृपया आवश्यकता अनुसार आफ्नो आफ्नै आइकन फन्ट सिर्जना गर्नुहोस् र निम्न कन्फिगरेसनलाई `conf.css` मा बदल्नुहोस् :

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

कृपया iconfont.cn को फन्ट फाइललाई सीधै सन्दर्भ नगर्नुहोस् किनभने यसलाई सफारी ब्राउजरमा लोड गर्न सकिँदैन।

## वेब कम्पोनेन्टहरू

तपाईंले `foot.pug` मा `js` लेख्न सक्नुहुन्न। यदि अन्तरक्रिया आवश्यक छ भने, कृपया वेब कम्पोनेन्ट अनुकूलित गर्नुहोस्।

[वेब कम्पोनेन्टलाई](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` मा परिभाषित गर्न सकिन्छ र त्यसपछि `foot.pug` मा प्रयोग गर्न सकिन्छ।

वेब कम्पोनेन्टहरू सिर्जना गर्न सजिलो छ, जस्तै अनुकूलन `<x-img>` ।

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

`.i18n/htm/foot.pug` को कोड यस प्रकार छ :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

यहाँ `${I18N.C}` `en/i18n.yml` सँग मेल खान्छ :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

यो लेखन विधिसँग मिल्दोजुल्दो `${I18N.xxx}` प्रयोग गरेर, `i18n.yml` सँग मिलाएर, तपाईंले फुटरको बहु-भाषा अन्तर्राष्ट्रियकरण प्राप्त गर्न सक्नुहुन्छ।

लिङ्कमा `class="a"` थप्नु भनेको लिङ्कलाई `MarkDown` मा रूपान्तरण हुनबाट रोक्नको लागि हो। हेर्नुहोस् :
 [➔ `YAML` कसरी लिंक `HTML` `Markdown` मा रूपान्तरण हुनबाट :](/i18/qa#H2) ।