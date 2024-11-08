# अनुकूलित नेविगेशन के बा

नेविगेशन के कस्टमाइज करे के तरीका बतावे खातिर डेमो साइट के उदाहरण के रूप में लिहल जाव [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

उपर दिहल आकृति में नंबर वाला इलाका सभ के अनुरूप फाइल सभ निम्नलिखित बाड़ी सऽ:

1. बाईं ओर [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug) बा
2. सही [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug) बा

[`pug`](https://pugjs.org) एगो टेम्पलेट भाषा हवे जे `HTML` के जनरेट करे ले।

[➔ के व्याकरण जाने खातिर इहाँ क्लिक करीं pug](https://pugjs.org)

फॉर्मेट स्ट्रिंग `${I18N.sponsor}` के इस्तेमाल फाइल में इंटरनेशनलाइजेशन के लागू करे खातिर कइल जाला, आ एकर सामग्री के स्रोत भाषा डाइरेक्टरी में संबंधित टेक्स्ट से बदल दिहल जाई [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)

**`pug` में `css` आ `js` मत लिखीं** ना त त्रुटि हो जाई.

स्टाइल सभ के `css` में लिखल जाला, आ वेब कंपोनेंट बना के इंटरैक्शन हासिल कइल जाला।

इहाँ, नेविगेशन बार के स्टाइल के अनुरूप [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) बा :