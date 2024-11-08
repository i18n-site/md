# अनुकूलित नेभिगेसन

नेभिगेसनलाई कसरी अनुकूलित गर्ने भनेर व्याख्या गर्न डेमो साइटलाई उदाहरणका रूपमा लिनुहोस् [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

माथिको चित्रमा नम्बर गरिएका क्षेत्रहरूसँग सम्बन्धित फाइलहरू निम्नानुसार छन्:

1. बायाँ [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. दायाँ [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) एउटा टेम्प्लेट भाषा हो जसले `HTML` को उत्पन्न गर्छ।

[➔ व्याकरण सिक्न यहाँ क्लिक गर्नुहोस् pug](https://pugjs.org)

ढाँचा स्ट्रिङ `${I18N.sponsor}` फाइलमा अन्तर्राष्ट्रियकरण लागू गर्न प्रयोग गरिन्छ, र यसको सामग्री स्रोत भाषा डाइरेक्टरीमा सम्बन्धित [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) प्रतिस्थापन गरिनेछ।

**`pug` मा `css` र `js` नलेख्नुहोस्** , अन्यथा त्यहाँ त्रुटि हुनेछ।

शैलीहरू `css` मा लेखिएका छन्, र अन्तरक्रिया वेब कम्पोनेन्टहरू सिर्जना गरेर प्राप्त गरिन्छ।

यहाँ, [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) पट्टीको शैलीसँग मिल्दोजुल्दो छ :