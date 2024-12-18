# प्लग-इन

प्लग-इनहरू `.i18n/conf.yml` मा कन्फिगर गर्न सकिन्छ, जस्तै:

```yml
addon:
  - i18n.addon/toc
```

## आधिकारिक प्लग-इन

* `i18n.addon/toc` : सूचकांक
  `TOC` मा आधारित `json` को डाइरेक्टरी अनुक्रमणिका उत्पन्न गर्नुहोस्, पूर्वनिर्धारित रूपमा सक्षम

* `i18n.addon/mouse` : प्रभावहरू

## फाइल नाम सम्मेलन

प्लग-इनहरू सबै `npm` प्याकेजहरू हुन्।

माथिको `i18n.addon/toc` सँग सम्बन्धित प्याकेज हो [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

प्लगइनले पूर्वनिर्धारित रूपमा नवीनतम संस्करण प्रयोग गर्दछ र साप्ताहिक अपडेटहरूको लागि जाँच गर्दछ।

यदि तपाइँ संस्करण ठीक गर्न चाहनुहुन्छ भने, तपाइँ `i18n.addon/toc@0.1.3` लेख्न सक्नुहुन्छ।

अनुवाद कमाण्ड लाइन `i18n.site` ले प्लग-इन प्याकेजको कन्भेन्सन फाइल स्थापना गर्नेछ र त्यसपछि यसलाई कार्यान्वयन गर्नेछ।

सहमति भएका फाइलको नाम यस प्रकार छ

### htmIndex.js

`htmIndex.js` `.i18n/htm/index.js` को अन्त्यमा सुई दिइनेछ।

जहाँ `__CONF__` हालको कन्फिगरेसनको नामले प्रतिस्थापन गरिनेछ (जस्तै `dev` वा `ol` )।

### afterTran.js

अनुवाद पूरा भएपछि यसलाई कल गरिनेछ, र निम्न मापदण्डहरू पारित छन्।

* `lang_li` : सूची, पहिलो भाषा स्रोत भाषा हो
* `changed` परिमार्जित :
* `root` परियोजना रूट :

फिर्ता मान एक शब्दकोश हो, जस्तै

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` आउटपुट फाइल सूची हो, `path` फाइल मार्ग हो, र `txt` फाइल सामग्री हो।

## निर्मित कार्यहरू

बिल्ट-इन `js` रनटाइम को माध्यमिक विकासमा आधारित छ [boa](https://github.com/boa-dev/boa) र निर्मित प्रकार्यहरू निम्नानुसार छन् :

* `wPath(path, txt)` फाइलमा :
* `rTxt(path)` : फाइल पढ्नुहोस्
* `rBin(path)` : फाइल पढ्नुहोस्
* `rDir(dirpath)` डाइरेक्टरी पढ्नुहोस्, रिटर्न मान एरे : सूची, फाइल सूची :

## विकास गाइड

प्लग-इन विकास एक सन्दर्भ हुन सक्छ [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)