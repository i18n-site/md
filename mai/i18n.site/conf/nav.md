# अनुकूलित नेविगेशन

[i18n-demo.github.io](//i18n-demo.github.io) साइट के उदाहरण के रूप में लिय जे नेविगेशन के कोना कस्टमाइज कएल जाय.

![](https://p.3ti.site/1731036697.avif)

उपरोक्त आकृति मे संख्याबद्ध क्षेत्रक कें अनुरूप फाइल निम्नलिखित छै:

1. बाम [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. सही [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) एकटा टेम्पलेट भाषा अछि जे `HTML` 's उत्पन्न करैत अछि.

[➔ के व्याकरण जानय लेल एतय क्लिक करू pug](https://pugjs.org)

प्रारूप स्ट्रिंग `${I18N.sponsor}` क॑ फाइल म॑ अंतरराष्ट्रीयकरण क॑ लागू करै लेली प्रयोग करलऽ जाय छै, आरू एकरऽ सामग्री क॑ स्रोत भाषा निर्देशिका म॑ संबंधित [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) स॑ बदललऽ जैतै ।

**`pug` मे `css` आ `js` नहि लिखू** , नहि त त्रुटि होयत।

शैली क॑ `css` म॑ लिखलऽ जाय छै, आरू वेब घटक बनाबै स॑ बातचीत प्राप्त करलऽ जाय छै ।

एतय, नेविगेशन बार के शैली के अनुरूप [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) अछि :