# अनुकूलित नेविगेशन

आइए नेविगेशन को अनुकूलित करने के तरीके को समझाने के लिए एक उदाहरण के रूप में डेमो साइट लें [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

उपरोक्त चित्र में क्रमांकित क्षेत्रों से संबंधित फ़ाइलें इस प्रकार हैं:

1. वाम [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. सही [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) एक टेम्प्लेट भाषा है जो `HTML` उत्पन्न करती है।

[➔ का व्याकरण सीखने के लिए यहां क्लिक करें pug](https://pugjs.org)

अंतर्राष्ट्रीयकरण को लागू करने के लिए फ़ाइल में प्रारूप स्ट्रिंग `${I18N.sponsor}` का उपयोग किया जाता है, और इसकी सामग्री को स्रोत भाषा निर्देशिका में संबंधित पाठ से बदल दिया जाएगा [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)

**`pug` में `css` और `js` न लिखें** , अन्यथा त्रुटि हो जायेगी।

शैलियाँ `css` में लिखी जाती हैं, और वेब घटक बनाकर इंटरेक्शन प्राप्त किया जाता है।

यहां, नेविगेशन बार की शैली के अनुरूप [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) है :