# स्थापित करा आणि वापरा

## विंडोज प्रथम git bash स्थापित करा

windows , [प्रथम `git bash` डाउनलोड आणि स्थापित करण्यासाठी येथे क्लिक करा](https://git-scm.com/download/win) .

पुढील ऑपरेशन्स `git bash` मध्ये चालवा.

## स्थापित करा

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### भाषांतर टोकन कॉन्फिगर करा

[i18n.site/token](//i18n.site/token) कॉपी करण्यासाठी क्लिक करा

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` तयार करा, त्यात कॉपी केलेली सामग्री पेस्ट करा, सामग्री खालीलप्रमाणे आहे:

```
token: YOUR_API_TOKEN
```

याशिवाय [,](/#price) तुम्हाला पेमेंट क्रेडिट कार्ड बांधणे आवश्यक आहे [i18n.site/payBill](//i18n.site/payBill)

## वापर

### डेमो प्रकल्प

`i18` भाषांतराचे कॉन्फिगरेशन जाणून घेण्यासाठी कृपया डेमो प्रोजेक्ट पहा [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

चीनमधील वापरकर्ते क्लोन करू शकतात [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

क्लोनिंग केल्यानंतर, निर्देशिका प्रविष्ट करा आणि भाषांतर पूर्ण करण्यासाठी `i18` चालवा.

### निर्देशिका रचना

टेम्प्लेट वेअरहाऊस निर्देशिकेची रचना खालीलप्रमाणे आहे

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` निर्देशिकेतील अनुवादित डेमो फाइल्स फक्त एक उदाहरण आहेत आणि त्या हटवल्या जाऊ शकतात.

### अनुवाद चालवा

निर्देशिका प्रविष्ट करा आणि भाषांतर करण्यासाठी `i18` चालवा.

भाषांतराव्यतिरिक्त, प्रोग्राम `.i18n/data` फोल्डर देखील तयार करेल, कृपया ते रेपॉजिटरीमध्ये जोडा.

नवीन फाइल भाषांतरित केल्यानंतर, या निर्देशिकेत एक नवीन डेटा फाइल तयार केली जाईल `git add . ` जोडण्याचे लक्षात ठेवा.

## कॉन्फिगरेशन फाइल

`.i18n/conf.yml` ही `i18` कमांड लाइन भाषांतर साधनाची कॉन्फिगरेशन फाइल आहे

सामग्री खालीलप्रमाणे आहे:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### स्रोत भाषा &

कॉन्फिगरेशन फाइलमध्ये, `fromTo` च्या अधीनस्थ:

`en` ही स्त्रोत भाषा आहे, `zh ja ko de fr` भाषांतराची लक्ष्य भाषा आहे.

भाषा कोड पहा [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

उदाहरणार्थ, जर तुम्हाला चिनी भाषेचे इंग्रजीमध्ये भाषांतर करायचे असेल, तर ही ओळ `zh: en` पुन्हा लिहा.

तुम्हाला सर्व समर्थित भाषांमध्ये भाषांतर करायचे असल्यास, कृपया `:` नंतर रिक्त सोडा. उदाहरणार्थ

```
i18n:
  fromTo:
    en:
```

तुम्ही विविध उपनिर्देशिकांसाठी भिन्न `fromTo` कॉन्फिगर करू : /

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

या कॉन्फिगरेशन टेबलमध्ये, कॅटलॉग `blog` भाषांतराची स्त्रोत भाषा `zh` आहे आणि कॅटलॉग `blog/your_file_name.md` भाषांतराची स्त्रोत भाषा `ja` आहे.

### बहुभाषिक प्रतिमा/लिंक

जेव्हा `replace:` आणि `MarkDown` मधील चित्रे आणि लिंक्समधील URL (आणि एम्बेडेड `HTML` च्या `src` आणि `href` विशेषता) या उपसर्गासह `.i18n/conf.yml` मध्ये कॉन्फिगर केले जातात, तेव्हा URL मधील स्त्रोत भाषा कोड भाषांतराच्या भाषा कोडने बदलला जाईल ( [भाषा कोड सूची](/i18/LANG_CODE) ).

उदाहरणार्थ, तुमचे कॉन्फिगरेशन खालीलप्रमाणे आहे:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` हा शब्दकोष आहे, की बदलण्यासाठी URL उपसर्ग आहे आणि मूल्य बदलण्याचा नियम आहे.

वरील नियम `ko de uk>ru zh-TW>zh >en` बदलण्याचा अर्थ असा आहे की `ko de` त्यांच्या स्वतःच्या भाषेच्या कोडचे चित्र वापरते, `zh-TW` आणि `zh` `zh` चे चित्र वापरतात, `uk` `ru` चे चित्र वापरतात आणि इतर भाषा (जसे की `ja` ) चित्र वापरतात. डीफॉल्टनुसार `en` चे.

उदाहरणार्थ, `MarkDown` ची फ्रेंच ( `fr` ) स्त्रोत फाइल खालीलप्रमाणे आहे :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

भाषांतरित आणि तयार केलेली इंग्रजी ( `en` ) फाईल खालीलप्रमाणे आहे :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

येथे, स्त्रोत भाषा कोडमधील `/en/` जागी लक्ष्य भाषेतील `/zh/` आहे.

टीप : URL मध्ये बदललेल्या मजकुराच्या आधी आणि नंतर `/` असणे आवश्यक आहे.

> [!TIP]
> `url:` मध्ये `- /` कॉन्फिगर केले असल्यास, फक्त सापेक्ष पथ जुळले जातील, परंतु `//` ने सुरू होणारे URL जुळले जाणार नाहीत.
>
> डोमेन नावाचे काही दुवे बदलायचे असतील आणि काही बदलू इच्छित नसतील, तर तुम्ही ते वेगळे करण्यासाठी `[x](//x.com/en/)` आणि `[x](https://x.com/en/)` सारखे भिन्न उपसर्ग वापरू शकता.

### फाइलकडे दुर्लक्ष करा

डीफॉल्टनुसार, स्त्रोत भाषा निर्देशिकेतील `.md` आणि `.yml` ने सुरू होणाऱ्या सर्व फायली अनुवादित केल्या जातील.

तुम्हाला काही फाइल्सकडे दुर्लक्ष करायचे असेल आणि त्यांचे भाषांतर करायचे नसेल (जसे की अपूर्ण मसुदे), तुम्ही ते `ignore` फील्डसह कॉन्फिगर करू शकता.

`ignore` हे `.gitignore` फाइल प्रमाणेच [globset](https://docs.rs/globset/latest/globset/#syntax) वापरते.

उदाहरणार्थ, वरील कॉन्फिगरेशन फाइलमध्ये `_* ` अर्थ असा आहे की `_` ने सुरू होणाऱ्या फाइल्सचे भाषांतर केले जाणार नाही.

## भाषांतराचे नियम

### भाषांतर संपादकांनी ओळी जोडू किंवा हटवू नयेत

अनुवाद संपादन करण्यायोग्य आहे. मूळ मजकूर सुधारित करा आणि मशीन-भाषांतर पुन्हा करा, भाषांतरातील मॅन्युअल बदल ओव्हरराईट केले जाणार नाहीत (जर मूळ मजकूराचा हा परिच्छेद सुधारला नसेल).

> [!WARN]
> अनुवादाच्या ओळी आणि मूळ मजकूर यांच्यात एक-एक पत्रव्यवहार असणे आवश्यक आहे. म्हणजेच, भाषांतर संकलित करताना ओळी जोडू किंवा हटवू नका. अन्यथा, ते भाषांतर संपादन कॅशेमध्ये गोंधळ निर्माण करेल.

काही चूक झाल्यास, कृपया [उपायांसाठी FAQ पहा.](/i18/qa#H1)

### `YAML` भाषांतरे

कमांड लाइन टूल स्त्रोत भाषा फाइल निर्देशिकेत `.yml` ने समाप्त होणाऱ्या सर्व फाइल्स शोधेल आणि त्यांचे भाषांतर करेल.

* लक्षात घ्या की फाइलनाव प्रत्यय `.yml` ( `.yaml` नाही) असणे आवश्यक आहे.

टूल फक्त डिक्शनरी व्हॅल्यूज `.yml` मध्ये अनुवादित करते, डिक्शनरी की नाही.

उदाहरणार्थ `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` म्हणून भाषांतरित केले जाईल

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` चे भाषांतर स्वहस्ते देखील बदलले जाऊ शकते (परंतु भाषांतरामध्ये की किंवा ओळी जोडू किंवा हटवू नका).

`YAML` भाषांतरावर आधारित, तुम्ही विविध प्रोग्रामिंग भाषांसाठी आंतरराष्ट्रीय उपाय सहजपणे तयार करू शकता.

## प्रगत वापर

### भाषांतर उपनिर्देशिका

जोपर्यंत `.i18n/conf.yml` तयार होत आहे (प्रत्येक वेळी डेमो प्रोजेक्ट टेम्प्लेटवरून सुरू करण्याची गरज नाही), `i18` चांगले काम करेल.

कमांड लाइन टूल सर्व उपडिरेक्टरीजमध्ये `.i18n/conf.yml` कॉन्फिगरेशन शोधेल आणि त्यांचे भाषांतर करेल.

[monorepo](//monorepo.tools) वापरणारे प्रकल्प भाषा फाइल्स उपडिरेक्टरीमध्ये विभाजित करू शकतात.

![](https://p.3ti.site/1719910016.avif)

### सानुकूल स्थापना निर्देशिका

ते डीफॉल्टनुसार `/usr/local/bin` वर स्थापित केले जाईल.

जर `/usr/local/bin` लेखन परवानगी नसेल तर ती `~/.bin` वर स्थापित केली जाईल.

पर्यावरण व्हेरिएबल `TO` सेट करणे इंस्टॉलेशन डिरेक्टरी परिभाषित करू शकते, उदाहरणार्थ :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```