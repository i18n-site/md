# प्रोजेक्ट संस्करण के बा

डेमो प्रोजेक्ट के उदाहरण के रूप में लिहल जाय:

`en/demo2/v` प्रोजेक्ट के वर्तमान संस्करण नंबर हवे, जवन साइडबार रूपरेखा में प्रोजेक्ट के नाँव के दाहिने ओर देखावल जाई।

<img src="https://p.3ti.site/1721290486.avif" width="320px">

इहाँ `en/` `.i18n/conf.yml` द्वारा कॉन्फ़िगर कइल गइल अनुवाद स्रोत भाषा के अनुरूप भाषा कोड बा .

अगर राउर स्रोत भाषा अंगरेजी ना होखे तब `v` फाइल के राउर स्रोत भाषा के प्रोजेक्ट डाइरेक्टरी में रखल जाय।

दस्तावेजन के ऐतिहासिक संस्करण ब्राउज करे के क्षमता के विकास चल रहल बा।

ई सलाह दिहल जाला कि दस्तावेज के संस्करण संख्या में खाली तब संशोधन कइल जाला जब प्रमुख अपडेट जारी होखे (जइसे कि `v1` , `v2` ) ताकि बहुत ढेर संस्करण संख्या के कारण सर्च इंजन द्वारा अनुक्रमित पन्ना सभ में अव्यवस्था ना होखे।

## अलग-अलग प्रोजेक्ट सभ के फाइल इंडेक्स सभ के बिभाजन करे खातिर खाली `v` फाइल सभ के इस्तेमाल करीं

डेमो प्रोजेक्ट में `en/demo2/v` के अलावा, रउआँ इहो देख सकत बानी कि `en/blog` आ `en/demo1` डाइरेक्टरी में खाली `v` फाइल बाड़ी सऽ।

साइडबार के रूपरेखा में खाली `v` ना देखावल जाई, बाकी जबले `v` फाइल होखी तबले डाइरेक्टरी आ सबडायरेक्टरी सभ में मौजूद फाइल सभ खातिर एगो स्वतंत्र इंडेक्स बनावल जाई।

अलग-अलग प्रोजेक्ट सभ के इंडेक्स सभ के बिभाजित क के रउआँ पूरा साइट में मौजूद सगरी फाइल सभ के इंडेक्स के एक साथ लोड कइला के कारण होखे वाला धीमा पहुँच से बची सके लीं।

उदाहरण खातिर, डेमो प्रोजेक्ट में `blog` से मेल खाए वाला इंडेक्स फाइल [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) बा :