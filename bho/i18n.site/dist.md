# तैनाती आ ऑनलाइन कइल जाला

`i18n.site` [एकल पन्ना के एप्लीकेशन](https://developer.mozilla.org/docs/Glossary/SPA) आर्किटेक्चर अपनावे ला, आ वेबसाइट के प्रवेश पन्ना आ वेबसाइट के सामग्री के स्वतंत्र रूप से तैनात कइल जाला।

उपर दिहल अनुवाद चलावे के बाद `md/out/dev` डाइरेक्टरी के तहत डाइरेक्टरी `htm` आ `v` पैदा हो जाई।

इहाँ, `dev` के मतलब बा कि ई `.i18n/htm/dev.yml` कॉन्फ़िगरेशन फाइल के आधार पर बनावल गइल बा।

`dev` डाइरेक्टरी के बा :

`htm` डाइरेक्टरी वेबसाइट के प्रवेश पन्ना हवे।

`v` डाइरेक्टरी में संस्करण नंबर के साथ वेबसाइट सामग्री बा।

स्थानीय पूर्वावलोकन के संस्करण संख्या के परवाह नइखे आ ई सगरी फाइल सभ के `out/dev/v/0.1.0` डाइरेक्टरी में कॉपी करी।

आधिकारिक रिलीज खातिर, बदलल फाइल सभ के नया संस्करण नंबर डाइरेक्टरी में कॉपी कइल जाई।

## `-c` के साथ कॉन्फ़िगरेशन फाइल निर्दिष्ट करीं

अलग-अलग कॉन्फ़िगरेशन फाइल `out` डाइरेक्टरी में संबंधित डाइरेक्टरी बनाई।

उदाहरण खातिर, `.i18n/htm/main.yml` `out/main` डाइरेक्टरी बनाई।

`dev.yml` आ `main.yml` डिफ़ॉल्ट कॉन्फ़िगरेशन हवें।

`dev` `development` के संक्षिप्त रूप हवे, बिकास के माहौल के संकेत देला, स्थानीय पूर्वावलोकन खातिर इस्तेमाल होला आ ई डिफ़ॉल्ट कॉन्फ़िगरेशन फाइल भी हवे।
`ol` `online` के संक्षिप्त रूप हवे, ऑनलाइन वातावरण के संकेत देला, जेकर इस्तेमाल आधिकारिक रिलीज खातिर कइल जाला जब रिलीज करे खातिर कमांड लाइन पैरामीटर `-n` से `npm` इस्तेमाल कइल जाला तब ई डिफ़ॉल्ट कॉन्फ़िगरेशन फाइल भी हवे।

रउआँ अउरी कॉन्फ़िगरेशन फाइल भी बना सकत बानी जवना के इस्तेमाल करे खातिर कॉन्फ़िगरेशन फाइल के नाम निर्दिष्ट करे खातिर कमांड लाइन पर `--htm_conf` इस्तेमाल करीं:

उदाहरण खातिर:
```
i18n.site --htm_conf dist --save
```

इहाँ `--save` अपडेट रिलीज संस्करण संख्या के प्रतिनिधित्व करे ला।

## <a rel=id href="#npm" id="npm"></a> npmjs.com पर सामग्री प्रकाशित करीं

[npmjs.com](//npmjs.com) सामग्री प्रकाशित कइल अनुशंसित डिफ़ॉल्ट समाधान हवे (देखीं [फ्रंट-एंड हाई उपलब्धता](/i18n.site/feature#ha) ).

### लॉगिन npm & पोस्ट करीं

`nodejs` इंस्टॉल करीं , `npm login` से लॉग इन करीं .

`md/.i18n/htm/main.yml` संपादित करीं आ [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) के मान `YOUR_NPM_PACKAGE` बदलीं जइसे कि आपन खुद के `npm` पैकेज के नाम [npmjs.com](//npmjs.com)

एकरा बाद `md/.i18n/htm/main.package.json` संशोधित करीं

अनुवाद आ प्रकाशित करे खातिर `md` डाइरेक्टरी में `i18n.site --npm` या `i18n.site -n` चलाईं।

अगर रउआँ प्रकाशित करे खातिर लगातार एकीकरण वातावरण के इस्तेमाल करीं, त `nodejs` इंस्टॉल करे के जरूरत नइखे बस लॉग-इन आ प्रकाशन अनुमति `~/.npmrc` के वातावरण में कॉपी करीं।

अगर रउआँ `main.yml` में `v:` के पैकेज के नाँव के संशोधित करीं, कृपया **पहिले `.i18n/v/main` जरूर हटाईं** आ फिर प्रकाशित करीं।

#### npm द्वारा प्रकाशित प्रॉक्सी सर्वर

अगर मुख्य भूमि चीन में प्रयोगकर्ता लोग के नेटवर्क समस्या के सामना करे के पड़े आ ऊ लोग `npm` पैकेज प्रकाशित करे में असमर्थ होखे तब ऊ लोग प्रॉक्सी सर्वर के कॉन्फ़िगर करे खातिर पर्यावरण चर `https_proxy` सेट क सके ला।

मान लीं कि राउर प्रॉक्सी सर्वर पोर्ट `7890` बा, रउआँ लिख सकत बानी:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## स्व-होस्ट कइल सामग्री

अगर रउआँ सामग्री के सेल्फ होस्ट कइल चाहत बानी त पहिले `md/.i18n/htm/main.yml` संपादित करीं आ `v: //unpkg.com/i18n.site` अपना यूआरएल उपसर्ग में बदल दीं, जइसे कि `v: //i18n-v.xxx.com` ।

`md` डाइरेक्टरी दर्ज करीं आ चलाईं

```
i18n.site --htm_conf ol --save
```

भा संक्षिप्त नाम के रूप में कहल जाला

```
i18n.site -c ol -s
```

एकरा बाद, `md/out/main/v` डाइरेक्टरी में सामग्री के `v:` में सेट यूआरएल उपसर्ग पथ पर कॉन्फ़िगर करीं।

अंत में, **`/.v` से `1s` में समाप्त होखे वाला पथ के कैश समय के कॉन्फ़िगर करीं** , ना त नया जारी सामग्री के तुरंत एक्सेस ना कइल जा सके ला।

अन्य रास्ता सभ खातिर कैश समय एक साल भा एकरे से ढेर सेट कइल जा सके ला ताकि फालतू के अनुरोध कम हो सके।

## s3 के सामग्री के होस्ट करीं

सामग्री `CDN` सेल्फ होस्ट करे खातिर, अपना खुद के सर्वर के इस्तेमाल के अलावा, एगो अउरी आम विकल्प बा `S3` +

`S3` `S3` सर्वर में लॉग इन करे खातिर [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

याद रखीं कि `CDN` कॉन्फ़िगर करीं ताकि `/.v` में समाप्त होखे वाला पथ के कैश समय `1s` होखे, ना त नया जारी सामग्री के तुरंत एक्सेस ना कइल जा सके।

## वेबसाइट प्रकाशित करे के बा

वेबसाइट के कहीं भी तैनात कइल जा सकेला [github page](https://pages.github.com) आ [cloudflare page](https://pages.cloudflare.com) बढ़िया विकल्प बा।

चुकी वेबसाइट [एकल पन्ना के एप्लीकेशन](https://developer.mozilla.org/docs/Glossary/SPA) आर्किटेक्चर के इस्तेमाल करेले एहसे याद राखीं कि यूआरएल पथ के दोबारा लिखल जाव जवना में `. ` से `index.html` ना होखे.

वेबसाइट प्रविष्टि पन्ना के खाली एक बेर तैनात करे के जरूरत बा, आ बाद के सामग्री अपडेट खातिर वेबसाइट प्रविष्टि पन्ना के दोबारा तैनात करे के जरूरत नइखे।

### github पन्ना पर तैनात करीं

सबसे पहिले [github क्लिक करीं एगो संगठन बनावे खातिर](https://github.com/account/organizations/new?plan=free) `i18n-demo`

एकरे बाद एह संगठन के तहत गोदाम `i18n-demo.github.io` बनाईं (कृपया `i18n-demo` जगह रउआँ द्वारा बनावल संगठन के नाँव से बदल दीं):

![](https://p.3ti.site/1721098657.avif)

पिछला लेख में सामग्री प्रकाशित करत घरी `out/main/htm` पैदा हो गइल बा कृपया एह डाइरेक्टरी के दर्ज करीं आ चलाईं :

```
ln -s index.html 404.html
```


चूँकि `github page` यूआरएल पथ के दोबारा लिखे के सपोर्ट ना करे ला, एकरे बजाय `404.html` इस्तेमाल कइल जाला।

एकरा बाद `htm` डाइरेक्टरी में निम्नलिखित कमांड चलाईं (याद राखीं कि `i18n-demo/i18n-demo.github.io.git` बदल के आपन खुद के गोदाम पता लगाईं) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

कोड के धक्का देला के बाद, `github page` के डिप्लोयमेंट के सफलतापूर्वक चले के इंतजार करीं (जइसे कि नीचे देखावल गइल बा) ओकरा बाद रउआँ एकरा के एक्सेस कर सकीले।

<img src="//p.3ti.site/1721116586.avif" width="350px">

डेमो पन्ना खातिर कृपया देखीं:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### क्लाउडफ्लेयर पन्ना पर तैनात करीं

`github page` के तुलना में [cloudflare page](//pages.cloudflare.com) ई पथ के पुनर्लेखन प्रदान करे ला आ मुख्य भूमि चीन खातिर ढेर अनुकूल बा आ एकर इस्तेमाल करे के सलाह दिहल जाला।

`cloudflare page` के तैनाती आमतौर पर ऊपर `github page` के तैनाती पर आधारित होला।

एगो प्रोजेक्ट बनाईं आ ऊपर के `i18n-demo.github.io` गोदाम के बाइंड करीं।

प्रक्रिया नीचे दिहल आकृति में देखावल गइल बा:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

संगठन `i18n-demo` के पहुँच प्रदान करे खातिर कृपया `Add Account` पर क्लिक करीं .

अगर रउआँ कौनों अउरी संगठन के गोदाम के बाउंड कइले बानी, नया संगठन के देखावल जाए से पहिले दू बेर अधिकृत करे खातिर `Add Account` पर दू बेर क्लिक करे के जरूरत पड़ सके ला।

![](https://p.3ti.site/1721118306.avif)

एकरे बाद, गोदाम `i18n-demo.github.io` चुनीं, फिर `Begin setup` पर क्लिक करीं, आ बाद के स्टेप सभ खातिर डिफ़ॉल्ट मान सभ के इस्तेमाल करीं।

![](https://p.3ti.site/1721118490.avif)

पहिला बेर बाइंडिंग के बाद एकरा तक पहुंचे से पहिले कुछ मिनट इंतजार करे के होई।

तैनाती के बाद, रउआ कस्टम डोमेन नाम बाइंड कर सकेनी।

![](https://p.3ti.site/1721119459.avif)

कस्टम डोमेन नाँव के बाइंड कइला के बाद, कृपया एकल पन्ना वाला एप्लिकेशन के पथ रिराइटिंग के कॉन्फ़िगर करे खातिर डोमेन नाँव पर जाईं, जइसे कि नीचे देखावल गइल बा:

![](https://p.3ti.site/1721119320.avif)

उपर दिहल चित्र में नियम निम्नलिखित बा, कृपया नीचे दिहल पहिला लाइन में `i18n.site` बदल के रउआ बाउंड कइल डोमेन नाम।

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

एकरे अलावा, कृपया कैश नियम सभ के कॉन्फ़िगर करीं, जइसे कि नीचे देखावल गइल बा, आ कैश के अवधि एक महीना पर सेट करीं।

![](https://p.3ti.site/1721125111.avif)

कृपया ऊपर दिहल तस्वीर में दूसरा चरण में डोमेन नाम के मिलान के रउआँ द्वारा बाउंड कइल डोमेन नाँव में बदल दीं।

### मुख्य भूमि चीन में वेबसाइट तैनाती के अनुकूलन कइल

अगर रउरा मुख्य भूमि चीन के नेटवर्क वातावरण में बेहतर सुलभता प्रदर्शन हासिल कइल चाहत बानी त कृपया पहिले [डोमेन नाम रजिस्टर करीं](//beian.aliyun.com) .

तब, मुख्य भूमि + में क्लाउड विक्रेता के ऑब्जेक्ट स्टोरेज के उपयोग करीं `CDN` निम्नलिखित सामग्री के तैनात करीं `out/main/htm` !

एकल पन्ना के एप्लीकेशन सभ के अनुकूल होखे खातिर पथ के दोबारा लिखे खातिर रउआँ एज कंप्यूटिंग के इस्तेमाल कर सकत बानी उदाहरण खातिर, [बैडू स्मार्ट क्लाउड `CDN`](//cloud.baidu.com/product/cdn.html) एह तरीका से कॉन्फ़िगर कइल जा सके ला:

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // रिस्पांस हेडर सभ के आउटपुट के डिबग करे खातिर सेट कइल जा सके ला, जइसे कि out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

चूँकि रिकार्ड `MX` आ रिकार्ड `CNAME` के सह-अस्तित्व ना हो सके ला, अगर रउआँ एक साथ डोमेन नाम के ईमेल प्राप्त कइल चाहत बानी, [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) रउआँ के रिकार्ड `A` में लेवल `CNAME` तक ले स्क्रिप्ट के साथ सहयोग करे के पड़ी।

एकरा अलावे, काहेंकी मुख्य भूमि चीन में क्लाउड विक्रेता के विदेशी ट्रैफिक शुल्क अपेक्षाकृत महंगा बा, अगर आप लागत के अनुकूलित कईल चाहतानी, त आप हासिल करे खाती [DNS क्लाउड के मुफ्त भौगोलिक रिजोल्यूशन](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) अवुरी [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) के कस्टम डोमेन नाम (जईसे कि नीचे देखावल गईल बा) के इस्तेमाल क सकतानी यातायात डायवर्सन──मुख्य भूमि चीन में यातायात रूटिंग बैडू बादल `CDN` , अंतर्राष्ट्रीय यातायात cloudflare जाला।

![](https://p.3ti.site/1721119788.avif)

ई तैनाती अनुकूलन समाधान अउरी जटिल बाड़ें आ भविष्य में अलग-अलग अध्याय में पेश कइल जाई।

### जेनेरिक डोमेन नाम के पुनर्निर्देशन कइल जाला

अगर रउआँ आपन मुख्य वेबसाइट के रूप में वेबसाइट बनावे खातिर `i18n.site` इस्तेमाल करीं, आमतौर पर रउआँ के पैन-डोमेन रीडायरेक्शन कॉन्फ़िगर करे के पड़ी, मने कि `*.xxx.com` ( `www.xxx.com` सहित) पर पहुँच के `xxx.com` पर रीडायरेक्ट करे के पड़ी।

ई आवश्यकता अलीबाबा क्लाउड `CDN` `EdgeScript` ( [अंग्रेजी दस्तावेज](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [चीनी दस्तावेज](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) के मदद से पूरा कइल जा सकेला .

[अलीबाबा CDN](https://cdn.console.aliyun.com/domain/list) में डोमेन नाम जोड़ीं आ अलीबाबा क्लाउड `CDN` में डोमेन नाम `*.xxx.com` `CNAME` इशारा करीं .

![](https://p.3ti.site/1721122000.avif)

उदाहरण खातिर, ऊपर दिहल तस्वीर में `*.i18n.site` के पैन-डोमेन नाँव रीडायरेक्टेशन कॉन्फ़िगरेशन निम्नलिखित बा:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### nginx के साथ तैनात करीं

कृपया nginx के `server` पैराग्राफ में निम्नलिखित के समान कॉन्फ़िगरेशन जोड़ीं कृपया `/root/i18n/md/out/main/htm` अपना खुद के प्रोजेक्ट `out/main/htm` के पथ में बदलीं :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` लगातार एकीकरण के आधार पर बा

रउआँ आपन `github action` कॉन्फ़िगर करे खातिर निम्नलिखित के संदर्भ दे सकत बानी :

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

जइसे कि कॉन्फ़िगरेशन में देखल जा सकेला, ई वर्कफ़्लो तब ट्रिगर होला जब शाखा `main` आ शाखा `dist` पर धक्का दिहल जाला।

वर्कफ़्लो दस्तावेज के प्रकाशित करे खातिर शाखा के नाँव से मेल खाए वाला कॉन्फ़िगरेशन फाइल के इस्तेमाल करी इहाँ क्रम से `.i18n/htm/main.yml` आ `.i18n/htm/dist.yml` इस्तेमाल प्रकाशन कॉन्फ़िगरेशन के रूप में कइल जाई।

हमनी के दस्तावेज रिलीज प्रक्रिया खातिर निम्नलिखित बेहतरीन तरीका के सलाह देत बानी जा:

जब बदलाव के शाखा `main` पर धकेल दिहल जाला, दस्तावेज के निर्माण आ पूर्वावलोकन स्टेशन पर तैनात करे खातिर ट्रिगर कइल जाला (पूर्वावलोकन स्टेशन उपलब्ध बा [github page](//pages.github.com) ).

पूर्वावलोकन साइट पर दस्तावेज सही होखे के पुष्टि कइला के बाद कोड के मर्ज क के शाखा `dist` में धकेल दिहल जाई, आ आधिकारिक बिल्ड आ डिप्लोयमेंट ऑनलाइन हो जाई।

बेशक, उपर दिहल प्रक्रिया के लागू करे खातिर अउरी कॉन्फ़िगरेशन लिखे के पड़ेला।

वर्कफ़्लो स्क्रिप्टिंग खातिर रउआ वास्तविक प्रोजेक्ट के संदर्भ दे सकेनी [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

कॉन्फ़िगरेशन में `secrets.I18N_SITE_TOKEN` आ `secrets.NPM_TOKEN` खातिर कोड बेस में गुप्त चर के कॉन्फ़िगर करे के पड़ी।

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` हो सकेला [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` कॉन्फ़िगरेशन में पैकेज `npm` के प्रकाशन टोकन हवे [npmjs.com](//npmjs.com) प्रकाशन के अनुमति वाला टोकन बनाईं (जइसे कि नीचे देखावल गइल बा)।

![](//p.3ti.site/1730969906.avif)


## डाइरेक्टरी के संरचना के बारे में बतावल गइल बा

### `public`

वेबसाइट के स्थिर फाइल, जइसे कि `favicon.ico` , `robots.txt` , आदि।

इहाँ के आइकन फाइल के साथ जनरेट कइल जा सकेला [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` डाइरेक्टरी के नीचे `i18n.site` के कॉन्फ़िगरेशन फाइल, अनुवाद कैश आदि बा, विस्तार से जाने खातिर अगिला अध्याय ["कॉन्फिगरेशन"](/i18n.site/conf) देखल जाय।

### `en`

स्रोत भाषा डाइरेक्टरी, `.i18n/conf.yml` में `fromTo` में से `en` कॉन्फ़िगरेशन फाइल के अनुरूप

```yaml
i18n:
  fromTo:
    en: zh
```

कृपया अनुवाद के विन्यास के देखल जाव [i18](/i18/use)