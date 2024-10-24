# .i18n/conf.yml

`i18n.site` के लेल विन्यास फाइल `.i18n/conf.yml` अछि आ सामग्री निम्नलिखित अछि :

```yaml
i18n:
  fromTo:
    en:
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Blog
addon:
  - i18n.addon/toc
```

ओहि मे `upload` स `ext:` विन्यास आइटम क मतलब अछि जे प्रकाशन करबा काल मात्र `.md` अपलोड होएत।

## शीर्ष नेविगेशन नव

`nav:` विन्यास विकल्प, होम पेज के ऊपर नेविगेशन मेनू के अनुरूप.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

ओय मे `i18n: home` `en/i18n.yml` मे `home: Home` (जतय `en` परियोजना अनुवाद कें स्रोत भाषा छै) सं मेल खायत छै.

`en/i18n.yml` सामग्री नेविगेशन मेनू मे प्रदर्शित पाठ छै, जे विन्यास मे `fromTo` कें अनुसार अनुवादित कैल जेतय, उदाहरण कें लेल, `zh/i18n.yml` मे अनुवादित.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

अनुवाद पूरा भेलाक बाद, अहाँ अनुवाद `yml` क मान संशोधित क' सकैत छी, मुदा अनुवाद `yml` क कुंजी नहि जोड़ू आ नहि हटाउ.

### `use: Toc` , रूपरेखा के साथ एकल फाइल टेम्पलेट

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` क मतलब अछि `Toc` टेम्पलेट क उपयोग कए रेंडर करब, जे एकल `Markdown` टेम्पलेट कए रेंडर कए रहल अछि ।

`TOC` `Table of Contents` क संक्षिप्त रूप अछि.जखन ई टेम्पलेट रेंडर कएल जाएत, तखन एहि `Markdown` फाइल क रूपरेखा साइडबार मे प्रदर्शित कएल जाएत.

`url:` `Markdown` कें फाइल पथ कें प्रतिनिधित्व करयत छै ( `/` रूट डायरेक्टरी `/README.md` सं मेल खायत छै, अइ फाइल नाम कें लेल एकटा पैघ उपसर्ग आ एकटा लघु प्रत्यय कें आवश्यकता होयत छै).

### `use: Md` , बिना रूपरेखा के एकल फाइल टेम्पलेट

`Md` टेम्पलेट आरू `Toc` टेम्पलेट एक जैसनऽ छै आरू दोनों के उपयोग एकल `Markdown` फाइल क॑ रेंडर करै लेली करलऽ जाय छै । मुदा `Md` टेम्पलेट साइडबार मे रूपरेखा नहि देखाबैत अछि ।

अहां उपरोक्त विन्यास मे `use: Toc` `use: Md` मे संशोधित कयर सकय छी, `md` निर्देशिका मे `i18n.site` फेर सं चला सकय छी, आओर फेर होमपेज पर परिवर्तन कें अवलोकन करय कें लेल विकास पूर्वावलोकन यूआरएल पर जा सकय छी.

### `use: Blog` ब्लॉग टेम्पलेट्स

ब्लॉग टेम्पलेट प्रकाशन समय के क्रम में लेख (शीर्षक आ सार) के सूची प्रदर्शित करै छै.

[→ विशिष्ट विन्यास के बारे में जानय के लेल एतय क्लिक करू](/i18n.site/conf/blog)

### `use: Doc` , बहु-फाइल दस्तावेज टेम्पलेट

विन्यास फाइल मे:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

टेम्पलेट रेंडरिंग क लेल `Doc` उपयोग करब इंगित करैत अछि.

`Doc` टेम्पलेट एकल या कई परियोजनाक कें लेल दस्तावेज रूपरेखा उत्पन्न करय कें लेल कईटा `MarkDown` एकीकृत करय कें समर्थन करयत छै.

#### कईटा प्रोजेक्ट आ कईटा फाइल

`i18n:doc` मे `.i18n/conf.yml` कें विन्यास बहु-परियोजना बहु-फाइल रेंडरिंग मोड छै.

यहाँ, `menu: NB demo1,demo2` , के मतलब छै ड्रॉप-डाउन मेनू क॑ रेंडर करै लेली `NB` टेम्पलेट के उपयोग करलऽ जाय ।

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , जे `Name Breif` कें संक्षिप्त रूप छै, कें मतलब छै की ड्रॉप-डाउन मेनू परियोजना कें नाम आ नारा प्रदर्शित कयर सकय छै.

`NB` के बाद पैरामीटर `demo1,demo2` ओकरा पास कएल गेल अछि.

नोट : ** मे अल्पविराम `,` `demo1,demo2` पहिने आ बाद मे कोनो रिक्त स्थान ** नहि हेबाक चाही .

उपरोक्त पैरामीटर कें लेल, संबंधित निर्देशिका अनुक्रमणिका फाइल छै:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### एकल परियोजना कई फाइल

यदि अहां कें पास केवल एकटा प्रोजेक्ट छै, त अहां ओकरा निम्नलिखित तरीका सं कॉन्फ़िगर कयर सकय छी.

```
  - i18n: xxx
    use: Doc
```

##### जखन url खाली रहैत अछि, तखन ई i18n क मान पर डिफ़ॉल्ट भ' जाइत अछि

यदि `url` नहि लिखल गेल अछि, `url` `i18n` क' मान पर डिफ़ॉल्ट भ' जाइत अछि.ई नियम अन्य टेम्पलेट क' लेल सेहो प्रभावी भ' जाइत अछि.

उपरोक्त लेखन विधि `url: xxx` के बराबर अछि , आ एकर संगत फाइल `en/xxx/TOC` अछि .

#### टीओसी सामग्री तालिका सूचकांक

`i18n.site` डेमो गोदाम मे `js` प्लग-इन `.i18n/hook/after.tran/TOC.js` कें निष्पादित करतय जे `json` निर्देशिका रूपरेखा उत्पन्न करय कें लेल `doc` टेम्पलेट विन्यास कें अनुरूप `TOC` निर्देशिका अनुक्रमणिका फाइल कें पढ़तय.

जँ अहाँ `doc` टेम्पलेट क उपयोग करैत छी तँ अहाँ लग ई प्लग-इन अवश्य अछि।

जँ अहाँ प्रोजेक्ट `i18n.site` खाली फोल्डर सँ आरंभ करैत छी, तँ मोन राखू जे डेमो प्रोजेक्ट `.i18n` अपन डायरेक्ट्री मे कॉपी करू.

`Doc` टेम्पलेट जेनरेट कएल गेल `json` आधार पर सामग्री तालिका क रूपरेखा प्रस्तुत करत .

##### विस्तृत सामग्री व्याख्या

`en/blog/TOC` सामग्री निम्नलिखित अछि :

```
README.md

news/README.md
  news/begin.md
```

##### स्तर के इंगित करय लेल इंडेंटेशन के प्रयोग करू

ऊपर `en/blog/TOC` कें पहिल पंक्ति मे `README.md` नीचा देल गेल चित्र मे `i18n.site` सं मेल खायत छै, जे परियोजना कें नाम छै.

अगिला दू पाँति नीचाँ देल गेल स्क्रीनशॉट मे देखाओल गेल अछि ।

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` सँ मेल खाइत अछि , .
`news/begin.md` `Our Product is Online !` सँ मेल खाइत अछि

`TOC` फाइल कें रूपरेखा कें पदानुक्रमित संबंध कें संकेत करय कें लेल, बहु-स्तरीय इंडेंटेशन कें समर्थन करय कें लेल, आ `# ` सं शुरू होय वाला लाइन टिप्पणी कें इंडेंट करल गेलय छै.

##### अभिभावक स्तर केवल शीर्षक लिखैत अछि, सामग्री नहि।

जखन इंडेंटेशन केरऽ कई स्तर होय छै त॑ अभिभावक स्तर केवल शीर्षक लिखै छै आरू सामग्री नै । नै तँ टाइपोग्राफी गड़बड़ भऽ जाएत।

##### परियोजना README.md

सामग्री आइटम `README.md` मे लिखल जा सकैत अछि , जेना `en/demo2/README.md` .

ध्यान रहे कि ई फाइल केरऽ सामग्री म॑ सामग्री केरऽ रूपरेखा नै दिखालऽ गेलऽ छै, ई लेली ई अनुशंसित छै कि एकरऽ लंबाई सीमित करलऽ जाय आरू एकरऽ छोटऽ परिचय लिखलऽ जाय ।

###### परियोजना नारा

अहाँ देख सकैत छी जे `Deme Two` के अपन प्रोजेक्ट टैगलाइन ड्रॉप-डाउन मेनू आ कैटलॉग रूपरेखा प्रोजेक्ट नाम `Your Project slogan` के नीचा अछि :

![](https://p.3ti.site/1721276842.avif)

ई `en/demo2/README.md` के पहिल पंक्ति स मेल खाइत अछि :

```
# Demo Two : Your Project slogan
```

परियोजना `README.md` कें प्रथम स्तर कें शीर्षक कें पहिल कोलन `:` कें बाद कें सामग्री कें परियोजना नारा मानल जेतय.

चीन, जापान आ कोरिया के उपयोगकर्ता, कृपया ध्यान राखब जे अहाँ के पूरा चौड़ाई वाला कोलन के बजाय आधा चौड़ाई वाला कोलन `:` के प्रयोग करबाक चाही.

##### थोक मे टीओसी कोना स्थानांतरित करब?

`TOC` फाइलकेँ स्रोत भाषाक निर्देशिकामे रखबाक आवश्यकता अछि.

जेना, जँ स्रोत भाषा चीनी अछि, तखन ऊपर `TOC` `zh/blog/TOC` अछि ।

यदि स्रोत भाषा संशोधित छै, त अहां कें प्रोजेक्ट मे कोनों निश्चित भाषा कें `TOC` फाइल कें बैच दोसर भाषा मे स्थानांतरित करय कें जरूरत छै.

अहां निम्नलिखित कमांड कें संदर्भित कयर सकय छी:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

कृपया उपरोक्त कमांड मे `en/` आ `zh/` अपन भाषा कोड मे संशोधित करू।

### बिना विन्यास पथ के डिफ़ॉल्ट लोडिंग

कोनों निश्चित पथ कें लेल, यदि पथ उपसर्ग `nav:` मे विन्यस्त नहि कैल गेल छै, त पथ सं मेल खायत `MarkDown` फाइल कें डिफ़ॉल्ट रूप सं लोड कैल जेतय आ `Md` टेम्पलेट कें उपयोग करयत रेंडर कैल जेतय.

उदाहरण के लेल, यदि `/test` तक पहुँचल गेल अछि, आओर `nav:` एहि पथ के उपसर्ग के बिना विन्यस्त कएल गेल अछि, आओर वर्तमान ब्राउजिंग भाषा अंग्रेजी अछि (कोड `en` ), त `/en/test.md` डिफ़ॉल्ट रूप सं लोड कएल जाएत आओर टेम्पलेट `Md` उपयोग सं रेंडर कएल जाएत.

जँ `/en/test.md` ई फाइल मौजूद नहि अछि, तँ पूर्वनिर्धारित `404` पृष्ठ प्रदर्शित कएल जाएत.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">