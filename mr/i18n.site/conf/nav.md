# सानुकूलित नेव्हिगेशन

नेव्हिगेशन कसे सानुकूलित करायचे याचे उदाहरण म्हणून डेमो साइट घेऊ [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

वरील आकृतीमधील क्रमांकित क्षेत्रांशी संबंधित फाइल्स खालीलप्रमाणे आहेत:

1. डावे [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. बरोबर [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) ही एक टेम्प्लेट भाषा आहे जी `HTML` चे व्युत्पन्न करते.

[➔ चे व्याकरण शिकण्यासाठी येथे क्लिक करा pug](https://pugjs.org)

आंतरराष्ट्रीयीकरण लागू करण्यासाठी फाईलमध्ये स्ट्रिंग `${I18N.sponsor}` च्या फॉरमॅटचा वापर केला जातो आणि त्याची सामग्री स्रोत भाषा निर्देशिकेतील संबंधित [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) बदलली जाईल.

**`pug` मध्ये `css` आणि `js` लिहू नका** , अन्यथा त्रुटी येईल.

शैली `css` मध्ये लिहिल्या जातात आणि वेब घटक तयार करून परस्परसंवाद साधला जातो.

येथे, नेव्हिगेशन बारच्या शैलीशी संबंधित आहे : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)