# शैली सूची

निम्नलिखित शैलियों में `MarkDown` कैसे लिखें यह देखने के लिए [इस पृष्ठ की स्रोत फ़ाइल ब्राउज़ करने के लिए यहां क्लिक करें](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) ।

## मुड़ा हुआ ब्लॉक

|+| मार्कडाउन क्या है?

    मार्कडाउन एक हल्की मार्कअप भाषा है जो उपयोगकर्ताओं को सादे पाठ प्रारूप में स्वरूपित दस्तावेज़ बनाने की अनुमति देती है जो पढ़ने और लिखने में आसान है।

    आमतौर पर दस्तावेज़ीकरण, ब्लॉग लेख, ई-पुस्तकें, फ़ोरम पोस्ट आदि लिखने के लिए उपयोग किया जाता है।

    इसके निम्नलिखित फायदे हैं:

    1. सीखना आसान है
    1. अत्यधिक पठनीय
    1. संस्करण नियंत्रण अनुकूल

       चूँकि `MarkDown` दस्तावेज़ सादे पाठ प्रारूप में हैं, प्रोग्रामर उन्हें आसानी से संस्करण नियंत्रण प्रणालियों (जैसे `git` ) में शामिल कर सकते हैं।

       इससे परिवर्तनों पर नज़र रखना और सहयोग करना बहुत आसान हो जाता है, विशेषकर टीम विकास में।

|-| I18N क्या है?

    "I18N" "अंतर्राष्ट्रीयकरण" का संक्षिप्त रूप है।

    चूँकि "अंतर्राष्ट्रीयकरण" शब्द में "I" और "N" के बीच 18 अक्षर हैं, इसलिए प्रतिनिधित्व को सरल बनाने के लिए "I18N" का उपयोग किया जाता है।

    आम आदमी के शब्दों में, इसका अर्थ है अनेक भाषाओं का समर्थन करना।


फ़ोल्डिंग ब्लॉक `i18n.site` से `MarkDown` का विस्तारित सिंटैक्स है, जिसे इस प्रकार लिखा गया है :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

के साथ|+| `或`|-| ` से शुरू होने वाली लाइन एक फोल्डिंग ब्लॉक उत्पन्न करेगी, और फोल्डिंग ब्लॉक की सामग्री समान स्तर के इंडेंटेशन के साथ बाद की लाइनें हैं (पैराग्राफ को रिक्त लाइनों द्वारा अलग किया जाता है)।

पास`|-| `标记的折叠块默认展开，`|+| `टैग किए गए ढहे हुए ब्लॉक डिफ़ॉल्ट रूप से ढह गए हैं।

## रेखांकित करें & स्ट्राइकथ्रू &

यह है __ अंडरस्कोर __ ,~~ स्ट्राइकथ्रू~~ और **बोल्ड** प्रेजेंटेशन टेक्स्ट।

इसे इस प्रकार लिखा गया है:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site` वेबसाइट बिल्डिंग टूल के `MarkDown` पार्सर ने अंडरलाइन, स्ट्राइकथ्रू और बोल्ड सिंटैक्स को अनुकूलित किया है, यह निशान के पहले और बाद में रिक्त स्थान के बिना प्रभावी हो सकता है, जिससे चीन, जापान और कोरिया जैसी भाषाओं में दस्तावेज़ लिखना आसान हो जाता है। रिक्त स्थान को विभाजक के रूप में उपयोग न करें।

विस्तारित पठन : [नगेट्स का Markdown सिंटैक्स ( `**……**` ) कभी-कभी प्रभावी क्यों नहीं होता?](//juejin.cn/post/7064565848421171213)

## उद्धरण

### एकल पंक्ति उद्धरण

> यह मेरा स्वभाव है कि मेरी प्रतिभा काम आयेगी और सारे पैसे खर्च होने के बाद मैं वापस आऊंगा।
<p style="text-align:right">─ ली बाई</p>

### एकाधिक पंक्ति उद्धरण

> विज्ञान कथा का एक और अनूठा लाभ इसका अत्यंत व्यापक दायरा है।
> एक "युद्ध और शांति", लाखों शब्दों में, केवल एक क्षेत्र के कई दशकों के इतिहास का वर्णन करता है;
> और असिमोव के "द फाइनल आंसर" जैसे विज्ञान कथा उपन्यास, केवल कुछ हज़ार शब्दों में, मनुष्य सहित पूरे ब्रह्मांड के अरबों वर्षों के इतिहास का स्पष्ट वर्णन करते हैं।
> पारंपरिक साहित्य में ऐसी समावेशिता और निर्भीकता हासिल करना असंभव है।
<p style="text-align:right">── लियू सिक्सिन</p>

### टिप `> [!TIP]`

> [!TIP]
> अपने पासपोर्ट और वीज़ा की वैधता की जांच करना याद रखें। समाप्त हो चुके दस्तावेज़ देश में प्रवेश या बाहर नहीं जा सकते।

इसे इस प्रकार लिखा गया है

```
> [!TIP]
> YOUR CONTENT
```

### टिप्पणी `> [!NOTE]`

> [!NOTE]
> यदि आप मुझे संदेश भेजते हैं और मैं तुरंत उत्तर देता हूं, तो इसका क्या मतलब है?
> इससे पता चलता है कि मुझे मोबाइल फोन से खेलना बहुत पसंद है।


### चेतावनी `> [!WARN]`

> [!WARN]
> किसी जंगली साहसिक यात्रा पर जाते समय सुरक्षित रहना महत्वपूर्ण है। यहां कुछ प्रमुख सुरक्षा युक्तियाँ दी गई हैं:
>
> - **मौसम के पूर्वानुमान की जाँच करें** : पिछले सप्ताह, पर्वतारोहियों के एक समूह को पहाड़ के आधे रास्ते में तूफान का सामना करना पड़ा क्योंकि उन्होंने मौसम के पूर्वानुमान की जाँच नहीं की और उन्हें तत्काल खाली करना पड़ा।
> - **आवश्यक सामान साथ रखें** : सुनिश्चित करें कि आप पर्याप्त भोजन, पानी और प्राथमिक चिकित्सा सामग्री लेकर आएं।
> - **इलाके को समझें** : खोने से बचने के लिए साहसिक क्षेत्र के इलाके और मार्गों से पहले से ही परिचित हो जाएं।
> - **जुड़े रहें** : बाहरी दुनिया से जुड़े रहें और सुनिश्चित करें कि हर कोई सुरक्षित लौट सके।
>
> याद रखें, सुरक्षा हमेशा पहले आती है!

## करने के लिए सूची

- [x] उत्पाद प्रोटोटाइप और फीचर सूची डिज़ाइन करें
- [ ] प्रौद्योगिकी स्टैक और विकास उपकरण निर्धारित करें
- [ ] उत्पाद विकास की समयसीमा और मील के पत्थर विकसित करें

## सूची

### आदेशित सूची

1. दौड़ना
   1. सप्ताह में तीन बार, हर बार 5 किलोमीटर
   1. हाफ मैराथन दौड़ें
1. जिम प्रशिक्षण
   1. सप्ताह में दो बार, हर बार 1 घंटा
   1. मुख्य मांसपेशियों पर ध्यान दें

### अव्यवस्थित सूची

* सामाजिक घटनाओं
  - उद्योग विनिमय बैठकों में भाग लें
    + प्रौद्योगिकी साझाकरण सत्र
    + उद्यमिता विनिमय बैठक
  - दोस्तों की एक सभा का आयोजन करें
    + आउटडोर बारबेक्यू
    + फिल्म की रात

## चादर

| सोचने वाला       | मुख्य योगदान                           |
|--------------|------------------------------------|
| कन्फ्यूशियस         | कन्फ्यूशीवाद के संस्थापक |
| सुकरात     | पश्चिमी दर्शन के जनक  |
| नीत्शे         | सुपरमैन दर्शन, पारंपरिक नैतिकता और धर्म की आलोचना       |
| मार्क्स       | साम्यवाद |

### बड़ी तालिका प्रदर्शन अनुकूलन

अपेक्षाकृत बड़ी तालिकाओं के लिए, प्रदर्शन प्रभाव को अनुकूलित करने के लिए निम्नलिखित विधियों का उपयोग किया जा सकता है:

1. छोटे फ़ॉन्ट का प्रयोग करें

   उदाहरण के लिए, तालिका को `<div style="font-size:14px">` और `</div>` से लपेटें।

   ध्यान दें कि `div` टैग को अपनी स्वयं की लाइन पर कब्जा करना चाहिए, और इसके पहले और बाद में रिक्त लाइनें छोड़नी चाहिए।
1. किसी सेल में लंबे टेक्स्ट के लिए, लाइन को लपेटने के लिए `<br>` डालें
1. यदि कोई कॉलम बहुत छोटा हो गया है, तो आप चौड़ाई बढ़ाने के लिए हेडर में `<div style="width:100px">xxx</div>` जोड़ सकते हैं, और लाइन ब्रेक स्थिति को नियंत्रित करने के लिए आप [हेडर में `<wbr>`](//developer.mozilla.org/docs/Web/HTML/Element/wbr) भी जोड़ सकते हैं।

एक प्रदर्शन उदाहरण इस प्रकार है:

<div style="font-size:14px">

| राष्ट्र       | <div style="width:70px;margin:auto">विचारक का नाम</div> | युग | मुख्य वैचारिक योगदान                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| चीन       | कन्फ्यूशियस                                           | 551-479 ई.पू   | कन्फ्यूशीवाद के संस्थापक ने "परोपकार" और "सौम्यता" जैसी मूल अवधारणाओं का प्रस्ताव रखा और नैतिक खेती और सामाजिक व्यवस्था पर जोर दिया। |
| प्राचीन ग्रीस     | सुकरात                                       | 469-399 ई.पू   | संवाद और द्वंद्वात्मकता के माध्यम से सत्य की खोज "स्वयं को जानें" का प्रस्ताव करती है और तर्कसंगत सोच पर जोर देती है         |
| फ्रांस       | वॉल्टेयर                                         | 1694-1778       | प्रबुद्धता के प्रतिनिधि आंकड़ों ने तर्कसंगतता, स्वतंत्रता और समानता की वकालत की और धार्मिक अंधविश्वास और सत्तावादी शासन की आलोचना की।   |
| जर्मनी       | कांत                                           | 1724-1804       | "शुद्ध कारण की आलोचना" को सामने रखें<br> व्यावहारिक कारण पर बल देते हुए नैतिकता, स्वतंत्रता और ज्ञान की नींव की खोज करता है     |

</div>

उपरोक्त उदाहरण के लिए छद्मकोड इस प्रकार है:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## कोड

### इनलाइन कोड

प्रोग्रामिंग भाषाओं की विशाल दुनिया में, `Rust` , `Python` , `JavaScript` और `Go` प्रत्येक एक अद्वितीय स्थान रखते हैं।

### कोड की एकाधिक पंक्तियाँ

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## पैराग्राफ के भीतर लाइन ब्रेक

पंक्तियों के बीच रिक्त रेखाएँ जोड़े बिना अनुच्छेदों के भीतर पंक्ति विराम प्राप्त किया जा सकता है।
अनुच्छेदों के भीतर पंक्ति विरामों के बीच का अंतर अनुच्छेदों के बीच के अंतर से छोटा होता है।

उदाहरण के लिए:

> एक महान व्यक्ति के रूप में जियो,
> मृत्यु भी एक भूत नायक है.
> मुझे अब भी जियांग यू की याद आती है,
> जियांगडोंग को पार करने के लिए अनिच्छुक।
>
> ली क्विंगझाओ ने सोंग राजवंश की अक्षमता की ओर संकेत करने के लिए जियांग यू की दुखद कहानी का इस्तेमाल किया।
> बिना युद्ध किये आत्मसमर्पण करने पर शाही दरबार के प्रति असंतोष व्यक्त करना।