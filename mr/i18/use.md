# स्थापित करा आणि वापरा

## विंडोज प्रथम git bash स्थापित करा

windows , [प्रथम डाउनलोड आणि स्थापित करण्यासाठी येथे क्लिक करा `git bash`](https://git-scm.com/download/win)

मध्ये पुढील ऑपरेशन्स चालवा `git bash`

## स्थापित करा

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### भाषांतर टोकन कॉन्फिगर करा

[i18n.site/token](//i18n.site/token) कॉपी करण्यासाठी क्लिक करा

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

तयार करा `~/.config/i18n.site.yml` कॉपी केलेली सामग्री त्यात पेस्ट करा, सामग्री खालीलप्रमाणे आहे:

```
token: YOUR_API_TOKEN
```

याशिवाय, तुम्हाला पेमेंटसाठी क्रेडिट कार्ड बंधनकारक [i18n.site/payBill](//i18n.site/payBill) आवश्यक आहे (कोणत्याही रिचार्जची आवश्यकता नाही, वेबसाइट वापरानुसार आपोआप शुल्क वजा करेल, [किंमतीसाठी मुख्यपृष्ठ पहा](/#price) ).

## वापर

### डेमो प्रकल्प

`i18` कॉन्फिगरेशन जाणून घेण्यासाठी कृपया डेमो प्रोजेक्ट पहा [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

चीनमधील वापरकर्ते क्लोन करू शकतात [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

क्लोनिंग केल्यानंतर, निर्देशिका प्रविष्ट करा आणि भाषांतर पूर्ण करण्यासाठी चालवा `i18`

### निर्देशिका संरचना

टेम्प्लेट वेअरहाऊस निर्देशिकेची रचना खालीलप्रमाणे आहे

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` अनुवादित डेमो फाइल्स आहेत, ज्या फक्त एक उदाहरण आहेत आणि हटवल्या जाऊ शकतात.

### अनुवाद चालवा

निर्देशिका प्रविष्ट करा आणि अनुवाद करण्यासाठी चालवा `i18`

### रेपॉजिटरीमध्ये फाइल्स जोडा

भाषांतराव्यतिरिक्त, प्रोग्राम खालील फाइल्स देखील व्युत्पन्न करेल, कृपया त्या रिपॉझिटरीमध्ये जोडा.

```
.i18n/hash
.i18n/cache/.gitignore
```

त्यापैकी, `.i18n/cache/.gitignore` सामग्री खालीलप्रमाणे आहे :

```
**/*
!**/.gitignore
```

याचा अर्थ `.i18n/cache/` सर्व फायलींकडे दुर्लक्ष करा ( `.i18n/cache/.gitignore` वगळता).

तुमचे आवृत्ती नियंत्रण सॉफ्टवेअर नसल्यास `git` कृपया या कॉन्फिगरेशननुसार दुर्लक्ष करा.

## कॉन्फिगरेशन फाइल

ही `i18` लाइन भाषांतर साधनाची कॉन्फिगरेशन फाइल `.i18n/conf.yml`

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

कॉन्फिगरेशन फाइलमध्ये, च्या अधीनस्थ `fromTo`

स्रोत भाषा `en` , `zh ja ko de fr` ही भाषांतराची लक्ष्य भाषा आहे.

भाषा कोड पहा [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

उदाहरणार्थ, जर तुम्हाला चीनी इंग्रजीमध्ये भाषांतरित करायचे असेल तर ही ओळ पुन्हा लिहा `zh: en`

आपण सर्व समर्थित भाषांमध्ये भाषांतर करू इच्छित असल्यास, कृपया नंतर रिक्त सोडा `:` उदाहरणार्थ

```
i18n:
  fromTo:
    en:
```

### फाइलकडे दुर्लक्ष करा

डीफॉल्टनुसार, स्रोत भाषा निर्देशिकेतील `.md` आणि `.yml` ने सुरू होणाऱ्या सर्व फायली अनुवादित केल्या जातील.

जर तुम्हाला काही फाइल्स दुर्लक्ष करायचे असतील आणि त्यांचे भाषांतर करायचे नसेल (जसे की अपूर्ण मसुदे), तुम्ही `ignore` कॉन्फिगरेशन वापरू शकता.

`ignore` `.gitignore` वाक्यरचना वापरते [globset](https://docs.rs/globset/latest/globset/#syntax)

उदाहरणार्थ, वरील कॉन्फिगरेशन फाइलमध्ये `_* ` `_` ने सुरू होणाऱ्या फाइल्सचे भाषांतर केले जाणार नाही.

## भाषांतराचे नियम

### भाषांतर संपादकांनी ओळी जोडू किंवा हटवू नयेत

अनुवाद संपादन करण्यायोग्य आहे. मूळ मजकूर सुधारित करा आणि मशीन-भाषांतर पुन्हा करा, भाषांतरातील मॅन्युअल बदल ओव्हरराईट केले जाणार नाहीत (जर मूळ मजकूराचा हा परिच्छेद सुधारला नसेल).

परंतु कृपया लक्षात घ्या की अनुवादाच्या ओळी आणि मूळ मजकूर एक ते एक अनुरूप असणे आवश्यक आहे. म्हणजेच, भाषांतर संकलित करताना ओळी जोडू किंवा हटवू नका. अन्यथा, ते भाषांतर संपादन कॅशेमध्ये गोंधळ निर्माण करेल.

काही चूक झाल्यास, कृपया [उपायांसाठी FAQ पहा.](/i18/qa#H1)

### भाषांतर `YAML`

कमांड लाइन टूल स्रोत भाषेच्या फाइल निर्देशिकेत `.yml` ने समाप्त होणाऱ्या सर्व फाइल्स शोधेल आणि त्यांचे भाषांतर करेल.

* लक्षात घ्या की फाइल नावाचा प्रत्यय असणे आवश्यक `.yml` ( `.yaml` नाही).

टूल फक्त डिक्शनरी व्हॅल्यूजचे भाषांतर करते `.yml` डिक्शनरी की नाही.

उदाहरणार्थ `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

म्हणून भाषांतरित केले जाईल `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` भाषांतर स्वहस्ते देखील बदलले जाऊ शकते (परंतु भाषांतरामध्ये की किंवा ओळी जोडू नका किंवा हटवू नका).

`YAML` आधारित, तुम्ही विविध प्रोग्रामिंग भाषांसाठी आंतरराष्ट्रीय उपाय सहजपणे तयार करू शकता.

## प्रगत वापर

### भाषांतर उपनिर्देशिका

जोपर्यंत `i18` तयार कराल `.i18n/conf.yml`

कमांड लाइन टूल सर्व उपनिर्देशिकांमध्ये `.i18n/conf.yml` शोधेल आणि त्याचे भाषांतर करेल.

[monorepo](//monorepo.tools) वापरणारे प्रकल्प भाषा फाइल्स उपडिरेक्टरीमध्ये विभाजित करू शकतात.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### सानुकूल स्थापना निर्देशिका

ते डीफॉल्टनुसार स्थापित केले जाईल `/usr/local/bin`

जर लिहिण्याची परवानगी नसेल `/usr/local/bin` ते `~/.bin` वर स्थापित केले जाईल.

पर्यावरण व्हेरिएबल्स सेट `TO` तुम्ही इन्स्टॉलेशन डिरेक्टरी परिभाषित करू शकता, उदाहरणार्थ :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
