# सामान्य समस्या

## चुकून हटवले `.i18n/v` , ज्यामुळे `npm` पॅकेज प्रकाशित होऊ शकले नाही

`npm` पॅकेज रिलीजची ऐतिहासिक आवृत्ती जतन केली आहे `.i18n/v/ol/v.hash`

तुम्ही चुकून हटवल्यास `.i18n/v/ol` `npm` पॅकेज प्रकाशित केले जाणार नाही.

यावेळी, प्रथम आपल्या प्रोजेक्टच्या शेवटच्या रिलीझ आवृत्तीचा आवृत्ती क्रमांक शोधा [npmjs.com](//npmjs.com) उदाहरणार्थ `0.1.9`

नंतर खालील फाइल `bash` करा पहा.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

लक्षात ठेवा की अशा प्रकारे दुरुस्ती केल्याने फाइल इतिहास गमावला जाईल, ज्यामुळे पुढील प्रकाशन वाढीवपणे अद्यतनित करणे अशक्य होईल आणि सर्व सामग्री पुन्हा पॅक केली जाईल आणि एकदा अपलोड केली जाईल.

