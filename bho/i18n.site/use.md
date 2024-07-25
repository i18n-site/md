# इंस्टॉल करीं &

## कॉन्फ़िगरेशन टोकन के बा

`i18` अनुवाद उपकरण एम्बेड कइल `i18n.site` बा, कृपया [पहुँच टोकन के कॉन्फ़िगर करे खातिर `i18` दस्तावेज के संदर्भ देवे खातिर इहाँ क्लिक करीं](/i18/use) ।

## स्थापित करऽ

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## डेमो प्रोजेक्ट के बा

आईं एगो डेमो प्रोजेक्ट से शुरुआत कइल जाव आ सीखल जाव कि कइसे इस्तेमाल कइल जाला `i18n.site`

हमनी के पहिले डेमो रिपोजिटरी के क्लोन क के कमांड के निम्नलिखित तरीका से चलावेनी जा:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

मुख्य भूमि चीन में प्रयोगकर्ता लोग:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

कोड बेस क्लोन के डाइरेक्टरी नाम `md` होखे के चाहीं ताकि `docker` के साथ स्थानीय पूर्वावलोकन के सुविधा हो सके `demo.i18n.site`

### अनुवाद

सबसे पहिले, `md` दर्ज करीं आ `i18n.site` चलाईं, जवन `en` के अनुवाद `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

चलावे के बाद अनुवाद आ कैश फाइल पैदा हो जाई कृपया एकरा के डाइरेक्टरी में रिपोजिटरी `git add . ` में जोड़ल याद राखीं `md`

### स्थानीय पूर्वावलोकन के बा

इंस्टॉल करीं आ शुरू करीं `docker` ( `MAC` `docker` के रनटाइम के रूप में [orbstack](https://orbstack.dev) के इस्तेमाल करे के सलाह देला ).

[https://127.0.0.1](https://127.0.0.1) बाद `./up.sh` `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### सामग्री पोस्ट करीं

`i18n.site` [एकल पन्ना के एप्लीकेशन](https://developer.mozilla.org/docs/Glossary/SPA) आर्किटेक्चर अपनावे ला, आ वेबसाइट के प्रवेश पन्ना आ वेबसाइट के सामग्री के स्वतंत्र रूप से तैनात कइल जाला।

उपर दिहल अनुवाद चलावे के बाद, `htm` आ `v` डाइरेक्टरी सभ डाइरेक्टरी में जनरेट हो जाई `md/out/dev`

`.i18n/htm/dev.yml` , `dev`

सामग्री : तहत `dev`

`htm` निर्देशिका के नीचे वेबसाइट के प्रवेश पन्ना बा।

`v` डायरेक्टरी में संस्करण संख्या के साथ वेबसाइट के सामग्री बा।

स्थानीय पूर्वावलोकन संस्करण संख्या के परवाह कइले बिना सभ फाइल के `out/dev/v/0.1.0`

आधिकारिक रिलीज खातिर, बदलल फाइल सभ के नया संस्करण नंबर डाइरेक्टरी में कॉपी कइल जाई।

#### कॉन्फ़िगरेशन फाइल निर्दिष्ट करे खातिर -c के इस्तेमाल करीं

अलग-अलग कॉन्फ़िगरेशन फाइल सभ डाइरेक्टरी के तहत संबंधित डाइरेक्टरी बनाईं `out`

जइसे `out/ol` `.i18n/htm/ol.yml`

`dev.yml` आ `ol.yml` डिफ़ॉल्ट कॉन्फ़िगरेशन हवें।

`dev` `development`
`online` के संक्षिप्त रूप हवे, जवन ऑनलाइन वातावरण के प्रतिनिधित्व करे ला, आधिकारिक रिलीज खातिर इस्तेमाल होला, आ `npm` कमांड लाइन पैरामीटर `-n` के इस्तेमाल से) के प्रकाशन करे के समय डिफ़ॉल्ट कॉन्फ़िगरेशन फाइल भी होला `ol`

रउआँ अउरी कॉन्फ़िगरेशन फाइल भी बना सकत बानी कॉन्फ़िगरेशन फाइल के नाम निर्दिष्ट करे खातिर कमांड लाइन पर `--htm_conf`

उदाहरण खातिर:
```
i18n.site --htm_conf yourConfig --save
```

इहाँ `--save` अपडेट रिलीज वर्जन नंबर के इंगित करेला।

#### <a rel=id href="#npm" id="npm"></a> npmjs.com पर सामग्री प्रकाशित करीं

[npmjs.com](//npmjs.com) सामग्री प्रकाशित कइल अनुशंसित डिफ़ॉल्ट समाधान हवे (देखीं [फ्रंट-एंड हाई उपलब्धता](/i18n.site/feature#ha) ).

##### npm login & जारी कयिल

इंस्टॉल करीं `nodejs` लॉग इन करे खातिर `npm login` के इस्तेमाल करीं।

संपादित करीं `md/.i18n/htm/ol.yml` `v: //unpkg.com/i18n.site` में `i18n.site` आपन `npm` पैकेज के नाम) में बदलीं।

बस [npmjs.com](//npmjs.com) खाली पैकेज के नाम के इस्तेमाल करीं पैकेज के नाम के रूप में वेबसाइट डोमेन नाम के इस्तेमाल कइल एगो बढ़िया विकल्प बा.

`npm` पैकेज के आधार पर प्रकाशन करत समय, `v:` मान के उपसर्ग के रूप में **`//unpkg.com/` इस्तेमाल जरूर करीं** कैश समय `i18n.site` एह उपसर्ग पथ के तहत `/.v` के विशेष रूप से अनुकूलित कइल गइल बा ताकि नया रिलीज सभ के समय पर देखल जा सके।

अनुवाद आ प्रकाशित करे खातिर `md` डाइरेक्टरी में `i18n.site --npm` या `i18n.site -n` चलाईं।

अगर रउआँ प्रकाशित करे खातिर लगातार एकीकरण वातावरण के इस्तेमाल करीं, त एकरा के इंस्टॉल करे के जरूरत नइखे `nodejs` बस लॉग-इन आ प्रकाशित अनुमति के `~/.npmrc` वातावरण में कॉपी करीं।

अगर रउआँ `v:` `ol.yml` में पैकेज के नाँव के संशोधित करीं, कृपया **पहिले `.i18n/v/ol` हटावल जरूर करीं** आ फिर प्रकाशित करीं।

##### npm द्वारा प्रकाशित प्रॉक्सी सर्वर

अगर मुख्य भूमि चीन में प्रयोगकर्ता लोग के नेटवर्क समस्या के सामना करे के पड़े आ ऊ लोग `npm` पैकेज के प्रकाशित करे में असमर्थ होखे तब ऊ लोग प्रॉक्सी सर्वर के कॉन्फ़िगर करे खातिर पर्यावरण चर `https_proxy` सेट क सके ला।

मान लीं कि राउर प्रॉक्सी सर्वर पोर्ट `7890` रउआँ लिख सकत बानी:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### स्व-होस्ट कइल सामग्री

अगर रउआँ सामग्री के सेल्फ-होस्ट कइल चाहत बानी, पहिले, संपादित `md/.i18n/htm/ol.yml` आ `v: //unpkg.com/i18n.site` अपना यूआरएल उपसर्ग में बदलीं, जइसे कि `v: //i18n-v.xxx.com` .

`md` डायरेक्टरी दर्ज करीं आ चलाईं

```
i18n.site --htm_conf ol --save
```

भा संक्षिप्त नाम के रूप में कहल जाला

```
i18n.site -c ol -s
```

एकरा बाद, `md/out/ol/v` डाइरेक्टरी में सामग्री के `v:` में सेट कइल गइल यूआरएल उपसर्ग पथ पर कॉन्फ़िगर करीं।

**अंत `1s` , `/.v`**

अन्य रास्ता सभ खातिर कैश समय एक साल भा एकरे से ढेर सेट कइल जा सके ला ताकि फालतू के अनुरोध कम हो सके।

##### s3 के सामग्री के होस्ट करीं

सामग्री के सेल्फ होस्ट `CDN` खातिर, अपना सर्वर + इस्तेमाल के अलावा, एगो अउरी आम विकल्प बा `S3`

`S3` [rclone](https://rclone.org) लॉगिन `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

याद राखीं कि `CDN` के कॉन्फ़िगर करीं ताकि `/.v` में समाप्त होखे वाला पथ के कैश समय `1s` होखे, ना त रउआँ तुरंत नया जारी सामग्री तक पहुँच ना पइब।

### वेबसाइट प्रकाशित करे के बा

वेबसाइट के कहीं भी तैनात कइल जा सकेला [github page](https://pages.github.com) आ [cloudflare page](https://pages.cloudflare.com) बढ़िया विकल्प बा।

चूँकि वेबसाइट [एकल पन्ना के एप्लीकेशन](https://developer.mozilla.org/docs/Glossary/SPA) के आर्किटेक्चर अपनावेले , याद राखीं कि यूआरएल पथ के दोबारा लिखीं जवना में `. ` `index.html` ना होखे.

वेबसाइट प्रविष्टि पन्ना के खाली एक बेर तैनात करे के जरूरत बा, आ बाद के सामग्री अपडेट खातिर वेबसाइट प्रविष्टि पन्ना के दोबारा तैनात करे के जरूरत नइखे।

#### github पन्ना पर तैनात करीं

सबसे पहिले [github क्लिक करीं एगो संगठन बनावे खातिर](https://github.com/account/organizations/new?plan=free) `i18n-demo`

एकरा बाद एह संगठन के तहत एगो गोदाम बनाईं `i18n-demo.github.io` (कृपया `i18n-demo` के जगह रउआँ द्वारा बनावल संगठन के नाँव से बदलीं):

<img alt="" src="https://p.3ti.site/1721098657.avif">

पिछला लेख में सामग्री प्रकाशित करत घरी ऊ जनरेट हो गइल `out/ol/htm` कृपया एह डाइरेक्टरी के दर्ज करीं आ चलाईं :

```
ln -s index.html 404.html
```


काहें से कि `github page` यूआरएल पथ के दोबारा लिखे के समर्थन ना करे ला, एह से एकरे बजाय `404.html` के इस्तेमाल कइल जाला।

एकरा बाद `htm` डाइरेक्टरी में निम्नलिखित कमांड चलाईं (याद राखीं कि `i18n-demo/i18n-demo.github.io.git` के बदल के आपन खुद के गोदाम पता लगाईं) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

कोड के धक्का देला के बाद, `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

डेमो पन्ना खातिर कृपया देखीं:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### क्लाउडफ्लेयर पन्ना पर तैनात करीं

[cloudflare page](//pages.cloudflare.com) `github page`

तैनाती आमतौर पर ऊपर के `github page` के तैनाती पर आधारित होला `cloudflare page`

एगो प्रोजेक्ट बनाईं आ उपरोक्त गोदाम के बान्हीं `i18n-demo.github.io`

प्रक्रिया नीचे दिहल आकृति में देखावल गइल बा:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` संगठन में पहुँच देवे खातिर क्लिक करीं `Add Account`

अगर रउआँ कवनो दोसरा संगठन के गोदाम के बाउंड कइले बानी त नया संगठन के प्रदर्शित होखे से पहिले दू बेर एकरा के अधिकृत करे खातिर `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

एकरा बाद `i18n-demo.github.io` वेयरहाउस चुनीं, फिर `Begin setup` पर क्लिक करीं, आ बाद के स्टेप सभ खातिर डिफ़ॉल्ट मान सभ के इस्तेमाल करीं।

<img alt="" src="https://p.3ti.site/1721118490.avif">

पहिला बेर बाइंडिंग के बाद एकरा तक पहुंचे से पहिले कुछ मिनट इंतजार करे के होई।

तैनाती के बाद, रउआ कस्टम डोमेन नाम बाइंड कर सकेनी।

<img alt="" src="https://p.3ti.site/1721119459.avif">

कस्टम डोमेन नाँव के बाइंड कइला के बाद, कृपया एकल पन्ना वाला एप्लिकेशन के पथ रिराइटिंग के कॉन्फ़िगर करे खातिर डोमेन नाँव पर जाईं, जइसे कि नीचे देखावल गइल बा:

<img alt="" src="https://p.3ti.site/1721119320.avif">

ऊपर के तस्वीर में नियम निम्नलिखित बा कृपया नीचे दिहल पहिला लाइन में रउरा से बान्हल डोमेन नाम के `i18n.site`

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

एकरे अलावा, कृपया कैश नियम सभ के कॉन्फ़िगर करीं, जइसे कि नीचे देखावल गइल बा, आ कैश के अवधि एक महीना पर सेट करीं।

<img alt="" src="https://p.3ti.site/1721125111.avif">

कृपया ऊपर दिहल तस्वीर में दूसरा चरण में डोमेन नाम के मिलान के रउआँ द्वारा बाउंड कइल डोमेन नाँव में बदल दीं।

#### मुख्य भूमि चीन में वेबसाइट तैनाती के अनुकूलन कइल

अगर रउरा मुख्य भूमि चीन के नेटवर्क वातावरण में बेहतर सुलभता प्रदर्शन हासिल कइल चाहत बानी त कृपया पहिले [डोमेन नाम रजिस्टर करीं](//beian.aliyun.com) .

`out/ol/htm` , मुख्य भूमि चीन में क्लाउड विक्रेता के ऑब्जेक्ट स्टोरेज `CDN` उपयोग करीं +

एकल पन्ना के एप्लीकेशन सभ के अनुकूल होखे खातिर पथ के दोबारा लिखे खातिर रउआँ एज कंप्यूटिंग के इस्तेमाल कर सकत बानी, जइसे कि [बैडू स्मार्ट `CDN`](//cloud.baidu.com/product/cdn.html) एकरा के एह तरीका से कॉन्फ़िगर कइल जा सके ला:

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

[cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` `MX` `CNAME` `A`

एकरा अलावे, काहेंकी मुख्य भूमि चीन में क्लाउड विक्रेता के विदेशी ट्रैफिक शुल्क अपेक्षाकृत महंगा बा, अगर आप लागत के अनुकूलित कईल चाहतानी, त आप हासिल करे खाती [हुवावे DNS के मुफ्त भौगोलिक रिजोल्यूशन](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) अवुरी [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) के कस्टम डोमेन नाम (जईसे कि नीचे देखावल गईल बा) के इस्तेमाल क सकतानी यातायात डायवर्सन──मुख्य भूमि चीन में यातायात बैडू बादल `CDN` अंतर्राष्ट्रीय यातायात cloudflare जाला।

<img alt="" src="https://p.3ti.site/1721119788.avif">

ई तैनाती अनुकूलन समाधान अउरी जटिल बाड़ें आ भविष्य में अलग-अलग अध्याय में पेश कइल जाई।

#### जेनेरिक डोमेन नाम के पुनर्निर्देशन कइल जाला

अगर रउआँ आपन मुख्य वेबसाइट `www.xxx.com` रूप में `*.xxx.com` वेबसाइट `xxx.com` जनरेट करे खातिर `i18n.site`

ई आवश्यकता अलीबाबा क्लाउड के `EdgeScript` ( [अंग्रेजी दस्तावेज](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [चीनी दस्तावेज](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) के मदद से पूरा कइल जा सकेला `CDN`

[अलीबाबा CDN](https://cdn.console.aliyun.com/domain/list) में डोमेन नाम जोड़ीं आ `*.xxx.com` नाम के अलीबाबा क्लाउड `CDN` के `CNAME` पर इशारा करीं.

<img alt="" src="https://p.3ti.site/1721122000.avif">

उदाहरण खातिर, ऊपर के चित्र में `*.i18n.site` के पैन-डोमेन नाँव रीडायरेक्टेशन कॉन्फ़िगरेशन निम्नलिखित बा:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx के साथ तैनात करीं

कृपया `server` में निम्नलिखित के समान कॉन्फ़िगरेशन जोड़ीं nginx जहाँ `/root/i18n/md/out/ol/htm` कृपया एकरा के अपना खुद के प्रोजेक्ट `out/ol/htm` के पथ में बदलीं :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### डाइरेक्टरी के संरचना के बारे में बतावल गइल बा

#### जनता

वेबसाइट के स्थिर फाइल, जइसे कि `favicon.ico` `robots.txt` , आदि।

इहाँ के आइकन फाइल के साथ जनरेट कइल जा सकेला [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n के बा

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### एन के बा

स्रोत भाषा डाइरेक्टरी, कॉन्फ़िगरेशन फाइल में `fromTo` `en` `.i18n/conf.yml` अनुरूप

```yaml
i18n:
  fromTo:
    en: zh
```

कृपया अनुवाद के विन्यास के देखल जाव [i18](/i18/use)

