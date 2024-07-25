# इंस्टॉल करू &

## विन्यास टोकन

`i18` अनुवाद उपकरण एम्बेडेड अछि `i18n.site` कृपया [पहुँच टोकन केँ विन्यस्त करबाक लेल `i18` दस्तावेज केँ संदर्भित करबाक लेल एतय क्लिक करू](/i18/use) .

## लगानाइ

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## डेमो परियोजना

एकटा डेमो प्रोजेक्ट स शुरू करी आ उपयोग करब सीखी `i18n.site`

हम पहिने डेमो रिपोजिटरी के क्लोन करैत छी आ कमांड के निम्नलिखित तरीका स चलाबैत छी:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

मुख्य भूमि चीन मे उपयोगकर्ता क सकैत अछि:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

कोड बेस क्लोन क निर्देशिका नाम `md` होबाक चाही `docker` संग स्थानीय पूर्वावलोकन क सुविधा क लेल `demo.i18n.site`

### भाषांतर केनाइ

पहिने, `md` दर्ज करू आओर `i18n.site` चलाउ, जे `en` क' `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

चललाक बाद अनुवाद आ कैश फाइल उत्पन्न कएल जाएत कृपया ओकरा सभकेँ `md` `git add . ` भंडारमे जोड़ब।

### स्थानीय पूर्वावलोकन

इंस्टॉल करू आ शुरू करू `docker` ( `MAC` `docker` क रनटाइम क रूप मे [orbstack](https://orbstack.dev) क उपयोग करबाक अनुशंसा करैत छथि ).

तखन, `docker` निर्देशिका दर्ज करू आओर `./up.sh` चलाउ, आओर फेर स्थानीय रूप सँ पूर्वावलोकन करबाक लेल [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### पोस्ट सामग्री

`i18n.site`[​](https://developer.mozilla.org/docs/Glossary/SPA)

उपरोक्त अनुवाद चलाबय के बाद, `htm` आओर `v` निर्देशिका `md/out/dev`

एतय `.i18n/htm/dev.yml` `dev`

सामग्री : अंतर्गत `dev`

`htm` निर्देशिका के अंतर्गत वेबसाइट प्रवेश पृष्ठ अछि |

`v` निर्देशिका मे संस्करण संख्याक संग वेबसाइट सामग्री अछि.

स्थानीय पूर्वावलोकन संस्करण संख्याक परवाह केने बिना सभ फाइलकेँ `out/dev/v/0.1.0`

आधिकारिक रिलीज कें लेल, बदलल गेल फाइल कें नव संस्करण संख्या निर्देशिका मे कॉपी कैल जेतय.

#### विन्यास फाइल निर्दिष्ट करबाक लेल -c क उपयोग करू

विभिन्न विन्यास फाइल निर्देशिका `out` अंतर्गत संबंधित निर्देशिका बनाओत.

जेना `.i18n/htm/ol.yml` एकटा `out/ol` निर्देशिका बनाओत.

`dev.yml` आ `ol.yml` पूर्वनिर्धारित विन्यास अछि.

`dev` `development`
`online` क संक्षिप्त रूप `ol` , जे ऑनलाइन वातावरण क प्रतिनिधित्व करैत अछि, आधिकारिक रिलीज क लेल प्रयोग कएल जाइत अछि, आओर `npm` कमांड लाइन पैरामीटर `-n` क उपयोग कए) कए प्रकाशित करबा काल डिफ़ॉल्ट विन्यास फाइल सेहो अछि ।

अहाँ अन्य विन्यास फाइल सेहो बना सकैत छी विन्यास फाइल नाम निर्दिष्ट करबाक लेल कमांड लाइन पर `--htm_conf`

उदाहरण लेल:
```
i18n.site --htm_conf yourConfig --save
```

एतय `--save` अपडेट रिलीज संस्करण नंबर इंगित करैत अछि.

#### <a rel=id href="#npm" id="npm"></a> npmjs.com पर सामग्री प्रकाशित करू

कें [npmjs.com](//npmjs.com) सामग्री प्रकाशित करनाय अनुशंसित डिफ़ॉल्ट समाधान छै (देखूं [फ्रंट-एंड उच्च उपलब्धता](/i18n.site/feature#ha) ).

##### npm login & मुक्त करु

इंस्टॉल करू `nodejs` लॉग इन करबाक लेल `npm login` उपयोग करू।

संपादित करू `md/.i18n/htm/ol.yml` `v: //unpkg.com/i18n.site` मे `i18n.site` अपन `npm` पैकेज नाम मे बदलू.

बस [npmjs.com](//npmjs.com) खाली पैकेज नाम के प्रयोग करू पैकेज के नाम के रूप में वेबसाइट डोमेन नाम के उपयोग करब नीक विकल्प अछि.

`npm` पैकेज क आधार पर प्रकाशन करबा काल, `v:` मान क उपसर्ग क रूप मे **`//unpkg.com/` उपयोग करब सुनिश्चित करू** कैश समय `i18n.site` एहि उपसर्ग पथ क अंतर्गत `/.v` कए विशेष रूप स अनुकूलित कैल गेल अछि ताकि नव रिलीज कए समय पर देखबा मे सक्षम भ सकए.

अनुवाद आओर प्रकाशित करबाक लेल `md` निर्देशिका मे `i18n.site --npm` अथवा `i18n.site -n` चलाउ.

यदि अहाँ प्रकाशित करबाक लेल निरंतर एकीकरण वातावरणक उपयोग करैत छी तँ एकरा इंस्टॉल करबाक कोनो आवश्यकता नहि `nodejs` बस लॉग-इन आ प्रकाशित अनुमति `~/.npmrc` वातावरण मे कॉपी करू.

जँ अहाँ `v:` `ol.yml` मे पैकेजक नाम संशोधित करैत छी तँ कृपया **पहिने `.i18n/v/ol` मेटाएब सुनिश्चित करू** आओर फेर ओकरा प्रकाशित करू.

##### npm द्वारा प्रकाशित प्रॉक्सी सर्वर

यदि मुख्य भूमि चीन मे उपयोगकर्ताक कें नेटवर्क समस्याक कें सामना करय पड़य छै आ ओ `npm` पैकेज कें प्रकाशित करय मे असमर्थ छै, त ओ प्रॉक्सी सर्वर कें कॉन्फ़िगर करय कें लेल वातावरण चर `https_proxy` सेट कयर सकय छै.

ई मानैत जे अहाँक प्रॉक्सी सर्वर पोर्ट `7890` अहाँ लिखि सकैत छी:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### स्व-होस्ट सामग्री

जँ अहाँ सामग्री केँ स्व-होस्ट करय चाहैत छी, पहिने `md/.i18n/htm/ol.yml` संपादित करू आ `v: //unpkg.com/i18n.site` केँ अपन यूआरएल उपसर्ग मे बदलू, जेना `v: //i18n-v.xxx.com` .

`md` निर्देशिका दर्ज करू आ चलाउ

```
i18n.site --htm_conf ol --save
```

या संक्षिप्त नाम

```
i18n.site -c ol -s
```

तखन, निर्देशिका मे सामग्री केँ `v:` मे सेट कएल `md/out/ol/v` URL उपसर्ग पथ पर विन्यस्त करू.

**अंत `1s` , `/.v`**

अन्य मार्गक कें लेल कैश समय कें एक साल या ओय सं बेसि पर सेट कैल जा सकय छै, ताकि अनावश्यक अनुरोधक कें कम कैल जा सकय.

##### s3 के लेल सामग्री होस्ट करू

सामग्री के स्व-होस्ट `CDN` लेल, अपन सर्वर + उपयोग करय के अलावा, एकटा आओर आम विकल्प अछि `S3`

`S3` [rclone](https://rclone.org) `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

याद राखू जे `CDN` विन्यस्त करू ताकि `/.v` मे समाप्त होबय बला पथ क कैश समय `1s` होए, नहि त' अहाँ नव जारी सामग्री केँ तुरंत एक्सेस नहि क' सकब.

### वेबसाइट प्रकाशित करब

वेबसाइट कतहु तैनात भ सकैत अछि [github page](https://pages.github.com) आ [cloudflare page](https://pages.cloudflare.com) नीक विकल्प अछि।

चूँकि वेबसाइट [एकल-पृष्ठ अनुप्रयोगक](https://developer.mozilla.org/docs/Glossary/SPA) आर्किटेक्चर अपनाबैत अछि , मोन राखू जे यूआरएल पथ केँ फेर सँ लिखू जे `index.html` मे नहि अछि `. `

वेबसाइट प्रविष्टि पृष्ठ कें केवल एक बेर तैनात करय कें जरूरत छै, आ बाद कें सामग्री अपडेट कें लेल वेबसाइट प्रविष्टि पृष्ठ कें पुनः तैनात करय कें जरूरत नहि छै.

#### github पृष्ठ पर तैनात करू

पहिने [एतय क्लिक github कोनो संस्था बनेबाक लेल](https://github.com/account/organizations/new?plan=free) निम्नलिखित संस्थाक नाम अछि `i18n-demo`

तखन एहि संगठनक अंतर्गत एकटा गोदाम बनाउ `i18n-demo.github.io` (कृपया `i18n-demo` के बदला अहाँ द्वारा बनाओल गेल संस्थाक नाम राखू):

<img alt="" src="https://p.3ti.site/1721098657.avif">

पिछला लेख में सामग्री प्रकाशित करय काल, ओ उत्पन्न भ गेल `out/ol/htm` कृपया एहि निर्देशिका में प्रवेश करू आ चलाउ :

```
ln -s index.html 404.html
```


`404.html` `github page`

`i18n-demo/i18n-demo.github.io.git` `htm` :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

कोड के धक्का देला के बाद, `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

डेमो पेज के लिये कृपया देखें:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### क्लाउडफ्लेयर पृष्ठ पर तैनात

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` `github page`

एकटा प्रोजेक्ट बनाउ आ उपरोक्त गोदाम के बाइंड करू `i18n-demo.github.io`

प्रक्रिया नीचा देल गेल आकृति मे देखाओल गेल अछि:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` संगठन के प्रवेश प्रदान करय लेल क्लिक करू `Add Account`

यदि अहां कोनो दोसर संगठन के गोदाम के बाउंड क लेने छी त नव संगठन के प्रदर्शित करय सं पहिने ओकरा दू बेर अधिकृत करय लेल दू बेर क्लिक करय पड़ि सकैत अछि `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

अगिला बेर `i18n-demo.github.io` गोदाम चुनू, फेर `Begin setup` पर क्लिक करू, आओर बादक चरणक लेल पूर्वनिर्धारित मान क उपयोग करू.

<img alt="" src="https://p.3ti.site/1721118490.avif">

पहिल बेर बाइंडिंग के बाद अहां के किछ मिनट इंतजार करय पड़त आओर अहां एकरा एक्सेस क सकय छी.

परिनियोजन के बाद, अहां कस्टम डोमेन नाम बाइंड क सकय छी.

<img alt="" src="https://p.3ti.site/1721119459.avif">

कस्टम डोमेन नाम कें बाइंडिंग कें बाद, कृपया एकल-पृष्ठ एप्लिकेशन कें पथ पुनर्लेखन कें कॉन्फ़िगर करय कें लेल डोमेन नाम पर जाउ, जैना की नीचा दिखायल गेल छै:

<img alt="" src="https://p.3ti.site/1721119320.avif">

ऊपर के चित्र में नियम निम्नलिखित अछि कृपया नीचा देल `i18n.site` पहिल पाँति में डोमेन नाम अहाँ स बान्हल अछि |

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

एकर अतिरिक्त, कृपया कैश नियम केँ कॉन्फ़िगर करू, जेना कि नीचाँ देखाओल गेल अछि, आओर कैश अवधि केँ एक मास पर सेट करू.

<img alt="" src="https://p.3ti.site/1721125111.avif">

कृपया ऊपर देल गेल चित्र मे दोसर चरण मे डोमेन नाम मिलान केँ ओहि डोमेन नाम मे बदलू जकरा अहाँ बाउंड केने रही.

#### मुख्य भूमि चीन में वेबसाइट तैनाती के अनुकूलन

यदि अहां मुख्य भूमि चीन कें नेटवर्क वातावरण मे बेहतर सुलभता प्रदर्शन प्राप्त करय चाहय छी त कृपया पहिने [एकटा डोमेन नाम रजिस्टर करूं](//beian.aliyun.com) .

`out/ol/htm` , मुख्य भूमि चीन मे क्लाउड विक्रेता के वस्तु भंडारण `CDN` उपयोग करू +

अहां एकल-पृष्ठ अनुप्रयोगक कें अनुकूल बनय कें लेल पथ कें पुनर्लेखन कें लेल एज कंप्यूटिंग कें उपयोग कयर सकय छी, जेना कि [बैडू स्मार्ट `CDN`](//cloud.baidu.com/product/cdn.html) एकरा अइ तरह सं कॉन्फ़िगर कैल जा सकय छै:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
<img alt="" src="https://p.3ti.site/1721121273.avif">

कारण `MX` रिकॉर्ड आ `CNAME` रिकॉर्ड एकहि संग नहि रहि सकैत अछि, जँ अहाँ एकहि संग डोमेन नाम ईमेल प्राप्त करय चाहैत छी त [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) अहाँ केँ `CNAME` `A` रिकॉर्ड) मे समतल करबाक लेल स्क्रिप्ट सँ सहयोग करबाक आवश्यकता अछि.

एकरऽ अलावा, मुख्य भूमि चीन म॑ क्लाउड विक्रेता केरऽ विदेशी ट्रैफिक शुल्क अपेक्षाकृत महंगा होय के कारण, अगर आपने लागत क॑ अनुकूलित करना चाहै छियै त॑ आपने हासिल करै लेली [हुवावे DNS केरऽ मुफ्त भौगोलिक रिजोल्यूशन](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) आरू [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) केरऽ कस्टम डोमेन नाम (जैना कि नीचें दिखालऽ गेलऽ छै) के उपयोग करी सकै छियै यातायात डायवर्सन──मुख्य भूमि चीन बैडू बादल में यातायात `CDN` अंतर्राष्ट्रीय यातायात cloudflare जाइत अछि |

<img alt="" src="https://p.3ti.site/1721119788.avif">

इ परिनियोजन अनुकूलन समाधान बेसि जटिल छै आ भविष्य मे अलग-अलग अध्याय मे पेश कैल जेतय.

#### जेनेरिक डोमेन नाम पुनर्निर्देशन

`www.xxx.com` अहाँ `*.xxx.com` वेबसाइट `xxx.com` अपन मुख्य वेबसाइट के रूप में उत्पन्न करय लेल `i18n.site`

ई आवश्यकता अलीबाबा क्लाउड के `EdgeScript` ( [अंग्रेजी दस्तावेज](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [चीनी दस्तावेज](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) के मदद स पूरा कएल जा सकैत अछि `CDN`

[अलीबाबा CDN](https://cdn.console.aliyun.com/domain/list) मे डोमेन नाम जोड़ू आओर `*.xxx.com` नाम अलीबाबा क्लाउड `CDN` क `CNAME` पर इशारा करू.

<img alt="" src="https://p.3ti.site/1721122000.avif">

उदाहरण के लेल, उपरोक्त चित्र मे `*.i18n.site` के पैन-डोमेन नाम पुनर्निर्देशन विन्यास निम्नलिखित अछि:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx के साथ तैनात

`server` nginx `/root/i18n/md/out/ol/htm` `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### निर्देशिका संरचना

#### सार्वजनिक

वेबसाइट के स्थिर फाइल, जेना `favicon.ico` `robots.txt` , आदि।

एतय के आइकन फाइल के संग जेनरेट कएल जा सकैत अछि [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### एन

स्रोत भाषा निर्देशिका, विन्यास फाइल मे `fromTo` `en` `.i18n/conf.yml` ' अनुरूप

```yaml
i18n:
  fromTo:
    en: zh
```

कृपया अनुवादक विन्यास देखू [i18](/i18/use)

