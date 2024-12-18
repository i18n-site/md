# इंस्टॉल करीं आ इस्तेमाल करीं

## विंडोज सबसे पहिले गिट बैश इंस्टॉल करेला

windows , कृपया [इहाँ क्लिक क के पहिले `git bash` डाउनलोड करीं आ इंस्टॉल करीं](https://git-scm.com/download/win) .

`git bash` में बाद के ऑपरेशन चलाईं .

## स्थापित करऽ

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### अनुवाद टोकन के कॉन्फ़िगर करीं

टोकन कॉपी करे खातिर क्लिक करीं [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` बनाईं, कॉपी कइल सामग्री के ओकरा में पेस्ट करीं, सामग्री निम्नलिखित बा:

```
token: YOUR_API_TOKEN
```

एकरा अलावे, आपके भुगतान क्रेडिट कार्ड के बाइंड करे [के](/#price) होई [i18n.site/payBill](//i18n.site/payBill)

## उपयोग

### डेमो प्रोजेक्ट के बा

`i18` अनुवाद के कॉन्फ़िगरेशन जाने खातिर कृपया डेमो प्रोजेक्ट के देखल जाव [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

चीन में यूजर क्लोन कर सकेलें [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

क्लोनिंग के बाद डाइरेक्टरी दर्ज करीं आ अनुवाद पूरा करे खातिर `i18` चलाईं।

### डाइरेक्टरी के संरचना के बारे में बतावल गइल बा

टेम्पलेट गोदाम डाइरेक्टरी संरचना निम्नलिखित बा

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` डाइरेक्टरी में अनुवादित डेमो फाइल खाली एगो उदाहरण बा आ एकरा के हटावल जा सकेला।

### अनुवाद चलाईं

डाइरेक्टरी दर्ज करीं आ अनुवाद करे खातिर `i18` चलाईं।

अनुवाद के अलावा प्रोग्राम `.i18n/data` फोल्डर भी जनरेट करी, कृपया एकरा के रिपोजिटरी में जोड़ दीं।

नया फाइल के अनुवाद कइला के बाद एह डाइरेक्टरी में एगो नया डेटा फाइल पैदा हो जाई `git add . ` जोड़ल याद रखीं।

## कॉन्फ़िगरेशन फाइल के बारे में बतावल गइल बा

`.i18n/conf.yml` `i18` कमांड लाइन अनुवाद टूल के कॉन्फ़िगरेशन फाइल हवे

सामग्री निम्नलिखित बा:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### स्रोत भाषा अनुवाद भाषा के बा &

कॉन्फ़िगरेशन फाइल में, `fromTo` के अधीनस्थ :

`en` स्रोत भाषा ह, `zh ja ko de fr` अनुवाद के लक्ष्य भाषा ह।

भाषा कोड देखल जाव [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

जइसे कि अगर रउरा चीनी के अंगरेजी में अनुवाद कइल चाहत बानी त एह लाइन के दोबारा लिखीं `zh: en` .

अगर रउआँ सभ समर्थित भाषा सभ में अनुवाद कइल चाहत बानी, कृपया `:` के बाद खाली छोड़ दीं। उदाहरण खातिर

```
i18n:
  fromTo:
    en:
```

रउआँ अलग- / उपनिर्देशिका खातिर अलग-अलग `fromTo` कॉन्फ़िगर कर सकत बानी एगो प्रदर्शन निम्नलिखित तरीका से लिखल जाला :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

एह कॉन्फ़िगरेशन तालिका में, कैटलॉग `blog` अनुवाद के स्रोत भाषा `zh` बा, आ कैटलॉग `blog/your_file_name.md` अनुवाद के स्रोत भाषा `ja` बा।

### बहुभाषी छवि/लिंक के बारे में बतावल गइल बा

जब `replace:` आ `MarkDown` में चित्र आ लिंक सभ में यूआरएल सभ (आ एम्बेडेड `HTML` के `src` आ `href` बिसेसता सभ) के एह उपसर्ग के साथ `.i18n/conf.yml` में कॉन्फ़िगर कइल जाई तब यूआरएल में स्रोत भाषा कोड के जगह अनुवाद के भाषा कोड ( [भाषा)](/i18/LANG_CODE) ले लिहल जाई [कोड सूची](/i18/LANG_CODE) ) के नाम से जानल जाला।

उदाहरण खातिर, राउर कॉन्फ़िगरेशन निम्नलिखित बा:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` एगो शब्दकोश हवे, कुंजी बदले वाला यूआरएल उपसर्ग हवे आ मान बदले के नियम हवे।

ऊपर के नियम `ko de uk>ru zh-TW>zh >en` बदले के मतलब ई बा कि `ko de` अपना भाषा कोड के चित्र के इस्तेमाल करे ला, `zh-TW` आ `zh` `zh` के चित्र के इस्तेमाल करे लें, `uk` `ru` के चित्र के इस्तेमाल करे लें आ अउरी भाषा (जइसे कि `ja` ) चित्र के इस्तेमाल करे लीं डिफ़ॉल्ट रूप से `en` के बा।

उदाहरण खातिर, `MarkDown` के फ्रेंच ( `fr` ) स्रोत फाइल निम्नलिखित बा :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

अनुवादित आ जनरेट कइल गइल अंग्रेजी ( `en` ) फाइल निम्नलिखित बा :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

इहाँ स्रोत भाषा कोड में `/en/` बदल के लक्ष्य भाषा में `/zh/` लगावल जाला।

नोट : यूआरएल में बदलल पाठ के भाषा कोड से पहिले आ बाद में `/` होखे के चाहीं।

> [!TIP]
> अगर `- /` `url:` में कॉन्फ़िगर कइल गइल होखे तब खाली रिलेटिव पथ सभ के मिलान कइल जाई, बाकी `//` से शुरू होखे वाला यूआरएल सभ के मिलान ना कइल जाई।
>
> अगर कवनो डोमेन नाम के कुछ लिंक बदलल चाहत होखे आ कुछ ना बदलल चाहत होखे त ओकरा के अलग करे खातिर अलग अलग उपसर्ग जइसे कि `[x](//x.com/en/)` आ `[x](https://x.com/en/)` के इस्तेमाल कर सकीलें.

### फाइल के अनदेखी कर दिहल जाला

डिफ़ॉल्ट रूप से, स्रोत भाषा डाइरेक्टरी में `.md` आ `.yml` से शुरू होखे वाली सगरी फाइल सभ के अनुवाद कइल जाई।

अगर रउआँ कुछ खास फाइल सभ के अनदेखी कइल चाहत बानी आ अनुवाद ना कइल चाहत बानी (जइसे कि अधूरा ड्राफ्ट), त रउआँ एकरा के `ignore` फील्ड के साथ कॉन्फ़िगर क सकत बानी।

`ignore` `.gitignore` फाइल के [globset](https://docs.rs/globset/latest/globset/#syntax) सिंटैक्स के इस्तेमाल करेला।

उदाहरण खातिर, उपर दिहल कॉन्फ़िगरेशन फाइल में `_* ` मतलब होला कि `_` से शुरू होखे वाली फाइल सभ के अनुवाद ना कइल जाई।

## अनुवाद के नियम बा

### अनुवाद संपादक लोग के लाइन ना जोड़ल भा हटावे के चाहीं

अनुवाद संपादन योग्य बा। मूल पाठ के संशोधित करीं आ फिर से मशीन-अनुवाद करीं, अनुवाद में मैनुअल संशोधन के ओवरराइट ना कइल जाई (अगर मूल पाठ के एह पैराग्राफ में संशोधन ना भइल होखे)।

> [!WARN]
> अनुवाद के लाइन आ मूल पाठ के बीच एक से एक पत्राचार होखे के चाहीं। मने कि अनुवाद के संकलन करत घरी लाइन ना जोड़ल भा हटाईं. ना त अनुवाद संपादन कैश में भ्रम पैदा हो जाई।

अगर कुछ गलत हो गइल त [समाधान खातिर कृपया पूछल जाए वाला सवाल के देखल जाव.](/i18/qa#H1)

### `YAML` अनुवाद भइल बा

कमांड लाइन टूल स्रोत भाषा फाइल डाइरेक्टरी में `.yml` से समाप्त होखे वाली सगरी फाइल सभ के खोज के अनुवाद करी।

* ध्यान दीं कि फाइलनाम प्रत्यय `.yml` ( `.yaml` ना) होखे के चाहीं।

टूल खाली `.yml` में शब्दकोश मान के अनुवाद करेला, शब्दकोश कुंजी के ना।

उदाहरण खातिर `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` के रूप में अनुवाद कइल जाई

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` के अनुवाद के मैन्युअल रूप से भी संशोधित कइल जा सके ला (लेकिन अनुवाद में कुंजी भा लाइन ना जोड़ल भा हटावल)।

`YAML` अनुवाद के आधार पर, रउआँ आसानी से बिबिध प्रोग्रामिंग भाषा सभ खातिर अंतर्राष्ट्रीय समाधान बना सकत बानी।

## उन्नत प्रयोग के बा

### अनुवाद के उपनिर्देशिका बा

जबले `.i18n/conf.yml` बनावल जाई (हर बेर डेमो प्रोजेक्ट टेम्पलेट से शुरू करे के जरूरत नइखे), `i18` ठीक से काम करी।

कमांड लाइन टूल सभ सबडाइरेक्टरी में `.i18n/conf.yml` कॉन्फ़िगरेशन खोज के ओकर अनुवाद करी।

[monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### कस्टम इंस्टॉलेशन डाइरेक्टरी के बा

ई डिफ़ॉल्ट रूप से `/usr/local/bin` पर इंस्टॉल हो जाई।

अगर `/usr/local/bin` में लिखे के अनुमति नइखे त एकरा के `~/.bin` पर इंस्टॉल कर दिहल जाई .

वातावरण चर `TO` सेट कइला से इंस्टॉलेशन डाइरेक्टरी परिभाषित हो सके ला, उदाहरण खातिर :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```