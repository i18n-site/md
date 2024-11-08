# तैनाती आ ऑनलाइन

`i18n.site` [एकल-पृष्ठ अनुप्रयोग](https://developer.mozilla.org/docs/Glossary/SPA) आर्किटेक्चर अपनायत छै, आ वेबसाइट प्रवेश पृष्ठ आ वेबसाइट सामग्री कें स्वतंत्र रूप सं तैनात कैल जायत छै.

उपरोक्त अनुवाद चलाबय के बाद `md/out/dev` डायरेक्टरी के अंतर्गत डायरेक्टरी `htm` आओर `v` उत्पन्न कएल जाएत.

एतय, `dev` कें मतलब छै कि इ `.i18n/htm/dev.yml` विन्यास फाइल कें आधार पर बनायल गेल छै.

`dev` निर्देशिका :

`htm` निर्देशिका वेबसाइट प्रवेश पृष्ठ अछि.

`v` निर्देशिका मे संस्करण संख्याक संग वेबसाइट सामग्री अछि.

स्थानीय पूर्वावलोकन संस्करण संख्याक परवाह नहि करैत अछि आओर सभ फाइल केँ `out/dev/v/0.1.0` निर्देशिका मे कॉपी करत.

आधिकारिक रिलीज कें लेल, बदलल गेल फाइल कें नव संस्करण संख्या निर्देशिका मे कॉपी कैल जेतय.

## `-c` संग विन्यास फाइल निर्दिष्ट करू

अलग-अलग विन्यास फाइल `out` निर्देशिका मे संबंधित निर्देशिका बनाओत.

जेना, `.i18n/htm/main.yml` `out/main` निर्देशिका बनाओत.

`dev.yml` आओर `main.yml` पूर्वनिर्धारित विन्यास अछि.

`dev` `development` क संक्षिप्त रूप अछि, जे विकास वातावरण कए दर्शाबैत अछि, जे स्थानीय पूर्वावलोकन क लेल प्रयोग कएल जाइत अछि, आओर पूर्वनिर्धारित विन्यास फाइल सेहो अछि.
`ol` `online` कें संक्षिप्त रूप छै, जे ऑनलाइन वातावरण कें `-n` करयत छै, जेकर उपयोग आधिकारिक रिलीज कें लेल कैल जायत `npm` .

अहां अन्य विन्यास फाइल सेहो बना सकय छी `--htm_conf`

उदाहरण लेल:
```
i18n.site --htm_conf dist --save
```

एतय `--save` अपडेट रिलीज संस्करण संख्या कें प्रतिनिधित्व करयत छै.

## <a rel=id href="#npm" id="npm"></a> npmjs.com पर सामग्री प्रकाशित करू

कें लेल सामग्री प्रकाशित करनाय अनुशंसित डिफ़ॉल्ट समाधान [npmjs.com](//npmjs.com) (देखूं [फ्रंट-एंड उच्च उपलब्धता](/i18n.site/feature#ha) ).

### npm & पोस्ट

`nodejs` स्थापित करू , `npm login` सँ लॉग इन करू .

`md/.i18n/htm/main.yml` संपादित करू आओर [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` बदलू जेना अपन `npm` पैकेज नाम पर कोनो खाली पैकेज नाम काज [npmjs.com](//npmjs.com) .

तखन `md/.i18n/htm/main.package.json` संशोधित करू

अनुवाद आओर प्रकाशित करबाक लेल `md` निर्देशिका मे `i18n.site --npm` या `i18n.site -n` चलाउ.

यदि अहां प्रकाशन कें लेल एकटा निरंतर एकीकरण वातावरण कें उपयोग करय छी, त `nodejs` इंस्टॉल करय कें जरूरत नहि छै.बस लॉग-इन आ प्रकाशन अनुमति `~/.npmrc` कें वातावरण मे कॉपी करू.

जँ अहाँ `main.yml` मे `v:` क' पैकेज नाम संशोधित करैत छी , त' कृपया **पहिने `.i18n/v/main` मेटाब' सुनिश्चित करू** आओर फेर ओकरा प्रकाशित करू.

#### npm द्वारा प्रकाशित प्रॉक्सी सर्वर

यदि मुख्य भूमि चीन मे उपयोगकर्ताक कें नेटवर्क समस्याक कें सामना करय पड़य छै आ `npm` पैकेज प्रकाशित करय मे असमर्थ छै, त ओ प्रॉक्सी सर्वर कें कॉन्फ़िगर करय कें लेल वातावरण चर `https_proxy` सेट कयर सकय छै.

ई मानैत जे अहाँक प्रॉक्सी सर्वर पोर्ट `7890` अछि, अहाँ लिखि सकैत छी:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## स्व-होस्ट सामग्री

जँ अहाँ सामग्री केँ स्व-होस्ट करय चाहैत छी, पहिने `md/.i18n/htm/main.yml` संपादित करू आओर `v: //unpkg.com/i18n.site` अपन यूआरएल उपसर्ग मे बदलू, जेना `v: //i18n-v.xxx.com` .

`md` निर्देशिका दर्ज करू आओर चलाउ

```
i18n.site --htm_conf ol --save
```

या संक्षिप्त नाम

```
i18n.site -c ol -s
```

तखन, `md/out/main/v` निर्देशिका मे सामग्री कें `v:` मे सेट यूआरएल उपसर्ग पथ पर कॉन्फ़िगर करू.

अंत मे, **`/.v` सं `1s` मे समाप्त होएय वाला पथ कें कैश समय कें कॉन्फ़िगर करूं** , अन्यथा नव जारी सामग्री कें तुरंत एक्सेस नहि कैल जा सकय छै.

अन्य मार्गक कें लेल कैश समय कें एक साल या ओय सं बेसि पर सेट कैल जा सकय छै, ताकि अनावश्यक अनुरोधक कें कम कैल जा सकय.

## s3 के लेल सामग्री होस्ट करू

सामग्री के स्व-होस्ट करय लेल `CDN` अपन सर्वर के उपयोग करय के अलावा, एकटा आओर आम विकल्प अछि `S3` +

अहाँ `S3` सर्वर पर लॉग इन करबाक `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

`CDN` कें कॉन्फ़िगर करनाय याद राखूं ताकि `/.v` मे समाप्त होएय वाला पथ कें कैश समय `1s` हो, अन्यथा नव जारी सामग्री कें तुरंत एक्सेस नहि कैल जा सकय छै.

## वेबसाइट प्रकाशित करब

वेबसाइट कतहु तैनात भ सकैत अछि [github page](https://pages.github.com) आ [cloudflare page](https://pages.cloudflare.com) नीक विकल्प अछि।

चूँकि वेबसाइट [एकल-पृष्ठ एप्लीकेशन](https://developer.mozilla.org/docs/Glossary/SPA) आर्किटेक्चर कें उपयोग करएयत छै, याद राखूं कि यूआरएल पथ कें दोबारा लिखूं जेकरा मे `. ` सं `index.html` नहि होयत छै.

वेबसाइट प्रविष्टि पृष्ठ कें केवल एक बेर तैनात करय कें जरूरत छै, आ बाद कें सामग्री अपडेट कें लेल वेबसाइट प्रविष्टि पृष्ठ कें पुनः तैनात करय कें जरूरत नहि छै.

### github पृष्ठ पर तैनात करू

पहिने [एतय क्लिक github एकटा संगठन बनेबाक लेल](https://github.com/account/organizations/new?plan=free) निम्नलिखित संगठनक नाम `i18n-demo` अछि उदाहरणक रूप मे .

तखन एहि संगठनक अंतर्गत गोदाम `i18n-demo.github.io` बनाउ (कृपया `i18n-demo` अपन बनाओल संगठनक नाम सँ बदलू):

![](https://p.3ti.site/1721098657.avif)

पिछला लेख मे सामग्री प्रकाशित करबा काल `out/main/htm` उत्पन्न भेल अछि कृपया एहि निर्देशिका केँ दर्ज करू आ चलाउ :

```
ln -s index.html 404.html
```


चूँकि `github page` यूआरएल पथ पुनर्लेखन क समर्थन नहि करैत अछि, एकर बदला मे `404.html` उपयोग कएल जाइत अछि.

तखन `htm` डाइरेक्टरी मे निम्नलिखित कमांड चलाउ (याद राखू `i18n-demo/i18n-demo.github.io.git` अपन गोदाम पता सँ बदलू) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

कोड कें धक्का देला कें बाद, `github page` कें परिनियोजन कें सफलतापूर्वक चलय कें इंतजार करूं (जैना कि नीचा दिखायल गेल छै) तखन अहां ओकरा एक्सेस कयर सकय छी.

<img src="//p.3ti.site/1721116586.avif" width="350px">

डेमो पेज के लिये कृपया देखें:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### क्लाउडफ्लेयर पृष्ठ पर तैनात

`github page` के तुलना [cloudflare page](//pages.cloudflare.com) , ई पथ पुनर्लेखन प्रदान करै छै आरू मुख्य भूमि चीन के लेलऽ अधिक अनुकूल छै आरू एकरऽ उपयोग करै के अनुशंसा अधिक छै.

`cloudflare page` कें तैनाती आमतौर पर ऊपर `github page` कें तैनाती कें आधार पर होयत छै.

एकटा प्रोजेक्ट बनाउ आ ऊपर `i18n-demo.github.io` गोदाम बाइंड करू।

प्रक्रिया नीचा देल गेल आकृति मे देखाओल गेल अछि:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

संगठन `i18n-demo` तक पहुँच प्रदान करबाक लेल कृपया `Add Account` पर क्लिक करू .

यदि अहां कोनों अन्य संगठन कें गोदाम कें बाउंड कयरने छी, त अहां कें दू बेर अधिकृत करय कें लेल `Add Account` पर दू बेर क्लिक करय कें जरूरत भ सकय छै, तखन नव संगठन कें प्रदर्शित करय सं पहिले.

![](https://p.3ti.site/1721118306.avif)

अगिला, गोदाम `i18n-demo.github.io` चुनू, फेर `Begin setup` पर क्लिक करू, आओर बादक चरणक लेल डिफ़ॉल्ट मान क उपयोग करू.

![](https://p.3ti.site/1721118490.avif)

पहिल बेर बाइंडिंग के बाद अहां के किछ मिनट इंतजार करय पड़त आओर अहां एकरा एक्सेस क सकय छी.

परिनियोजन के बाद, अहां कस्टम डोमेन नाम बाइंड क सकय छी.

![](https://p.3ti.site/1721119459.avif)

कस्टम डोमेन नाम कें बाइंडिंग कें बाद, कृपया एकल-पृष्ठ एप्लिकेशन कें पथ पुनर्लेखन कें कॉन्फ़िगर करय कें लेल डोमेन नाम पर जाउ, जैना की नीचा दिखायल गेल छै:

![](https://p.3ti.site/1721119320.avif)

उपरोक्त चित्र मे नियम निम्नलिखित अछि कृपया नीचाँ देल गेल पहिल पाँति मे `i18n.site` ओहि डोमेन नाम सँ बदलू जकरा अहाँ बाउंड केने छी.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

एकर अतिरिक्त, कृपया कैश नियम केँ कॉन्फ़िगर करू, जेना कि नीचाँ देखाओल गेल अछि, आओर कैश अवधि केँ एक मास पर सेट करू.

![](https://p.3ti.site/1721125111.avif)

कृपया ऊपर देल गेल चित्र मे दोसर चरण मे डोमेन नाम मिलान केँ ओहि डोमेन नाम मे बदलू जकरा अहाँ बाउंड केने रही.

### मुख्य भूमि चीन में वेबसाइट तैनाती के अनुकूलन

यदि अहां मुख्य भूमि चीन कें नेटवर्क वातावरण मे बेहतर सुलभता प्रदर्शन प्राप्त करय चाहय छी त कृपया पहिने [एकटा डोमेन नाम रजिस्टर करूं](//beian.aliyun.com) .

तखन, मुख्य भूमि + मे क्लाउड विक्रेता के वस्तु भंडारण के उपयोग करू `CDN` निम्नलिखित सामग्री के तैनात करू `out/main/htm` .

अहां एकल-पृष्ठ अनुप्रयोगक कें अनुकूल बनय कें लेल पथ कें पुनर्लेखन कें लेल एज कंप्यूटिंग कें उपयोग कयर सकय छी उदाहरण कें लेल, [बैडू स्मार्ट क्लाउड `CDN`](//cloud.baidu.com/product/cdn.html) कें अइ तरह सं कॉन्फ़िगर कैल जा सकय छै:

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
  // अहां प्रतिक्रिया हेडर कें आउटपुट कें डिबग करय कें लेल सेट कयर सकय छी, जेना out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

चूँकि रिकॉर्ड `MX` आ रिकॉर्ड `CNAME` सह-अस्तित्व मे नहि भ सकैत अछि, जँ अहाँ एकहि संग डोमेन नाम ईमेल प्राप्त करय चाहैत छी, त [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) अहाँ केँ रिकॉर्ड `A` मे लेवल `CNAME` धरि स्क्रिप्ट केर संग सहयोग करबाक आवश्यकता अछि.

एकरऽ अलावा, मुख्य भूमि चीन म॑ क्लाउड विक्रेता केरऽ विदेशी ट्रैफिक शुल्क अपेक्षाकृत महंगा होय के कारण, अगर आपने लागत क॑ अनुकूलित करना चाहै छियै त॑ आपने हासिल करै लेली [DNS क्लाउड केरऽ मुफ्त भौगोलिक रिजोल्यूशन](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) आरू [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) केरऽ कस्टम डोमेन नाम (जैना कि नीचें दिखालऽ गेलऽ छै) के उपयोग करी सकै छियै यातायात डायवर्सन──मुख्य भूमि चीन मे यातायात रूटिंग बैडू बादल `CDN` , अंतर्राष्ट्रीय यातायात cloudflare जाइत अछि |

![](https://p.3ti.site/1721119788.avif)

इ परिनियोजन अनुकूलन समाधान बेसि जटिल छै आ भविष्य मे अलग-अलग अध्याय मे पेश कैल जेतय.

### जेनेरिक डोमेन नाम पुनर्निर्देशन

यदि अहां कोनों वेबसाइट कें अपन मुख्य वेबसाइट कें रूप मे उत्पन्न करय कें लेल `i18n.site` उपयोग करय छी, त अहां कें आमतौर पर पैन-डोमेन पुनर्निर्देशन कें कॉन्फ़िगर करय कें जरूरत छै, यानी, पहुंच कें `*.xxx.com` ( `www.xxx.com` सहित) कें `xxx.com` पर पुनर्निर्देशित करय कें जरूरत छै.

इ आवश्यकता अलीबाबा क्लाउड `CDN` `EdgeScript` ( [अंग्रेजी दस्तावेज](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [चीनी दस्तावेज](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) कें मदद सं पूरा कैल जा सकय छै .

[अलीबाबा CDN](https://cdn.console.aliyun.com/domain/list) मे डोमेन नाम जोड़ू आ अलीबाबा क्लाउड `CDN` मे डोमेन नाम `*.xxx.com` `CNAME` इशारा करू !

![](https://p.3ti.site/1721122000.avif)

उदाहरण कें लेल, उपरोक्त चित्र मे `*.i18n.site` कें पैन-डोमेन नाम पुनर्निर्देशन विन्यास निम्नलिखित छै:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### nginx के साथ तैनात

कृपया nginx के `server` पैराग्राफ मे निम्नलिखित के समान विन्यास जोड़ू कृपया `/root/i18n/md/out/main/htm` अपन प्रोजेक्ट `out/main/htm` के पथ पर बदलू :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` निरंतर एकीकरण के आधार पर

अहां अपन `github action` कॉन्फ़िगर करय कें लेल निम्नलिखित कें संदर्भित कयर सकय छी :

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

जेना कि विन्यास मे देखल जा सकैत अछि, ई कार्यप्रवाह शाखा `main` आओर शाखा `dist` पर धक्का देला पर ट्रिगर भ' जाइत अछि.

कार्यप्रवाह दस्तावेज कें प्रकाशित करय कें लेल शाखा नाम कें अनुरूप विन्यास फाइल कें उपयोग करतय एतय, `.i18n/htm/main.yml` आ `.i18n/htm/dist.yml` उपयोग क्रमशः प्रकाशन विन्यास कें रूप मे कैल जेतय.

हम दस्तावेज रिलीज प्रक्रिया कें लेल निम्नलिखित सर्वोत्तम प्रथाक कें सिफारिश करय छी:

जखन परिवर्तन कें शाखा `main` पर धकेलल जायत छै, तखन दस्तावेज कें निर्माण आ पूर्वावलोकन स्टेशन पर तैनात करय कें लेल ट्रिगर कैल जायत छै (पूर्वावलोकन स्टेशन उपलब्ध छै [github page](//pages.github.com) ).

पूर्वावलोकन साइट पर दस्तावेज सही छै, एकर पुष्टि करला के बाद, कोड क॑ मर्ज करी क॑ शाखा `dist` प॑ धकेललऽ जैतै, आरू आधिकारिक बिल्ड आरू डिप्लोयमेंट ऑनलाइन होय जैतै.

ओना त उपरोक्त प्रक्रिया कए लागू करबा लेल बेसी विन्यास लिखबाक आवश्यकता होइत अछि ।

वर्कफ़्लो स्क्रिप्टिंग के लेल अहां वास्तविक प्रोजेक्ट के संदर्भित क सकय छी [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

विन्यास मे `secrets.I18N_SITE_TOKEN` आ `secrets.NPM_TOKEN` लेल अहां कें कोड बेस मे गुप्त चर कें कॉन्फ़िगर करय कें आवश्यकता होयत छै.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` प्राप्त करू [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` विन्यास मे पैकेज `npm` क प्रकाशन टोकन अछि [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## निर्देशिका संरचना

### `public`

वेबसाइट के स्थिर फाइल, जेना `favicon.ico` , `robots.txt` , आदि।

एतय के आइकन फाइल के संग जेनरेट कएल जा सकैत अछि [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` निर्देशिका कें अंतर्गत `i18n.site` कें विन्यास फाइल, अनुवाद कैश, आदि छै.विस्तार कें लेल अगिला अध्याय ["विन्यास"](/i18n.site/conf) देखू.

### `en`

स्रोत भाषा निर्देशिका, `.i18n/conf.yml` मे `fromTo` मे सँ `en` विन्यास फाइल सँ मेल खाइत अछि

```yaml
i18n:
  fromTo:
    en: zh
```

कृपया अनुवादक विन्यास देखू [i18](/i18/use)