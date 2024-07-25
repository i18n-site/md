# स्थापित करा &

## कॉन्फिगरेशन टोकन

`i18` भाषांतर साधन एम्बेड केलेले आहे `i18n.site` [`i18` टोकन कॉन्फिगर करण्यासाठी कृपया येथे क्लिक करा](/i18/use) .

## स्थापित करा

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## डेमो प्रकल्प

चला डेमो प्रोजेक्टसह सुरुवात करूया आणि कसे वापरायचे ते शिकूया `i18n.site`

आम्ही प्रथम डेमो रेपॉजिटरी क्लोन करतो आणि खालीलप्रमाणे कमांड रन करतो:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

मुख्य भूप्रदेश चीनमधील वापरकर्ते हे करू शकतात:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` सह स्थानिक पूर्वावलोकन सुलभ करण्यासाठी कोड बेस क्लोनचे निर्देशिका नाव `md` असणे आवश्यक आहे `demo.i18n.site`

### भाषांतर करा

प्रथम, `md` प्रविष्ट करा आणि `i18n.site` चालवा, जे `en` `zh` भाषांतरित करेल.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

चालवल्यानंतर, अनुवाद आणि `git add . ` फाइल्स तयार केल्या जातील `md`

### स्थानिक पूर्वावलोकन

स्थापित करा आणि सुरू `docker` ( `MAC` वापरण्याची शिफारस करतात [orbstack](https://orbstack.dev) `docker` चा रनटाइम म्हणून).

नंतर, `docker` एंटर करा आणि `./up.sh` रन करा, आणि नंतर स्थानिकपणे पूर्वावलोकन करण्यासाठी भेट द्या [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### सामग्री पोस्ट करा

[एकल-पृष्ठ अनुप्रयोग](https://developer.mozilla.org/docs/Glossary/SPA) आर्किटेक्चर स्वीकारते आणि वेबसाइट प्रवेश पृष्ठ आणि वेबसाइट सामग्री स्वतंत्रपणे तैनात `i18n.site` जाते.

वरील भाषांतर चालवल्यानंतर, `md/out/dev` `htm` आणि `v` निर्देशिका तयार केल्या जातील.

येथे `dev` हे `.i18n/htm/dev.yml` फाइलवर आधारित असल्याचे सूचित करते.

सामग्री : `dev`

`htm` अंतर्गत वेबसाइट प्रवेश पृष्ठ आहे.

`v` आवृत्ती क्रमांकासह वेबसाइट सामग्री आहे.

आवृत्ती क्रमांकाची पर्वा न करता स्थानिक पूर्वावलोकन सर्व फाइल्स `out/dev/v/0.1.0` कॉपी करेल.

अधिकृत प्रकाशनासाठी, बदललेल्या फायली नवीन आवृत्ती क्रमांक निर्देशिकेत कॉपी केल्या जातील.

#### कॉन्फिगरेशन फाइल निर्दिष्ट करण्यासाठी -c वापरा

विविध कॉन्फिगरेशन फाइल्स `out` संबंधित निर्देशिका तयार करतील.

उदाहरणार्थ `.i18n/htm/ol.yml` एक `out/ol` निर्देशिका तयार करेल.

`dev.yml` `ol.yml` डीफॉल्ट कॉन्फिगरेशन आहेत.

`development` चे संक्षेप `dev` , जे विकास वातावरणाचे प्रतिनिधित्व करते, स्थानिक पूर्वावलोकनासाठी वापरले जाते, आणि ते डीफॉल्ट कॉन्फिगरेशन फाइल देखील आहे.
`online` चे संक्षेप `ol` , जे ऑनलाइन वातावरणाचे प्रतिनिधित्व करते, अधिकृत प्रकाशनासाठी वापरले जाते, आणि `npm` कमांड लाइन पॅरामीटर वापरून `-n` .

कॉन्फिगरेशन फाइलचे नाव निर्दिष्ट करण्यासाठी `--htm_conf` कमांड लाइनवर इतर कॉन्फिगरेशन फाइल्स देखील तयार करू शकता:

उदाहरणार्थ:
```
i18n.site --htm_conf yourConfig --save
```

`--save` अद्यतन प्रकाशन आवृत्ती क्रमांक सूचित करते.

#### <a rel=id href="#npm" id="npm"></a> npmjs.com वर सामग्री प्रकाशित करा

[npmjs.com](//npmjs.com) सामग्री प्रकाशित करणे हे शिफारस केलेले डीफॉल्ट उपाय आहे ( [फ्रंट-एंड उच्च उपलब्धता](/i18n.site/feature#ha) पहा).

##### npm login &

स्थापित करा `nodejs` लॉग इन करण्यासाठी `npm login` वापरा.

संपादित करा `md/.i18n/htm/ol.yml` `i18n.site` मध्ये `v: //unpkg.com/i18n.site` बदला तुमच्या स्वतःच्या `npm` पॅकेजचे नाव.

फक्त अनक्युपीड पॅकेजचे नाव वापरा [npmjs.com](//npmjs.com)

`npm` आधारित प्रकाशित करताना, `v:` मूल्याचा उपसर्ग म्हणून **`//unpkg.com/` वापरण्याचे सुनिश्चित करा** `i18n.site` या उपसर्ग पथ अंतर्गत `/.v` नवीन प्रकाशनांचे वेळेवर पाहणे सक्षम करण्यासाठी विशेषत: अनुकूल केले गेले आहे.

अनुवाद आणि प्रकाशित करण्यासाठी `md` `i18n.site --npm` किंवा `i18n.site -n` चालवा.

तुम्ही प्रकाशित करण्यासाठी सतत एकीकरण वातावरण वापरत असल्यास, ते स्थापित करण्याची आवश्यकता `nodejs` फक्त लॉग-इन आणि प्रकाशित परवानगी `~/.npmrc` पर्यावरणावर कॉपी करा.

तुम्ही पॅकेजचे नाव `v:` in `ol.yml` मध्ये बदलल्यास, कृपया **प्रथम `.i18n/v/ol` हटवा** आणि नंतर प्रकाशित करा.

##### npm द्वारे प्रकाशित प्रॉक्सी सर्व्हर

जर मुख्य भूप्रदेशातील वापरकर्त्यांना नेटवर्क समस्या येतात आणि ते `npm` प्रकाशित करू शकत नसतील, तर ते प्रॉक्सी सर्व्हर कॉन्फिगर करण्यासाठी पर्यावरण व्हेरिएबल `https_proxy` सेट करू शकतात.

तुमचा प्रॉक्सी सर्व्हर पोर्ट आहे असे गृहीत धरून `7890` तुम्ही लिहू शकता:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### स्वत: ची होस्ट केलेली सामग्री

जर तुम्हाला सामग्री स्वयं-होस्ट करायची असेल, `md/.i18n/htm/ol.yml` प्रथम संपादित करा आणि `v: //unpkg.com/i18n.site` तुमच्या URL उपसर्गात बदला, जसे की `v: //i18n-v.xxx.com` .

`md` प्रविष्ट करा आणि चालवा

```
i18n.site --htm_conf ol --save
```

किंवा संक्षेप

```
i18n.site -c ol -s
```

नंतर, `v:` मध्ये सेट केलेल्या URL उपसर्ग मार्गावर `md/out/ol/v` सामग्री कॉन्फिगर करा.

शेवटी, **`/.v` `1s` समाप्त होणाऱ्या पथाची कॅशे वेळ कॉन्फिगर करा** , अन्यथा नवीन रिलीज झालेल्या सामग्रीमध्ये त्वरित प्रवेश केला जाऊ शकत नाही.

अनावश्यक विनंत्या कमी करण्यासाठी इतर मार्गांसाठी कॅशे वेळ एक वर्ष किंवा त्याहून अधिक सेट केला जाऊ शकतो.

##### s3 वर सामग्री होस्ट करा

स्वयं-होस्ट करण्यासाठी, आपला स्वतःचा सर्व्हर वापरण्याव्यतिरिक्त, वापरणे + दुसरा सामान्य पर्याय `CDN` `S3`

`S3` `S3` करू शकता [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

कॉन्फिगर करणे लक्षात ठेवा `CDN` जेणेकरुन `/.v` मध्ये समाप्त होणाऱ्या पथाची कॅशे वेळ `1s` असेल, अन्यथा तुम्ही ताबडतोब नवीन प्रकाशीत सामग्रीमध्ये प्रवेश करू शकणार नाही.

### वेबसाइट प्रकाशित करा

वेबसाइट कुठेही तैनात केली जाऊ शकते [github page](https://pages.github.com) आणि [cloudflare page](https://pages.cloudflare.com) चांगले पर्याय आहेत.

वेबसाइटने [सिंगल-पेज ॲप्लिकेशनचे](https://developer.mozilla.org/docs/Glossary/SPA) आर्किटेक्चर स्वीकारल्यामुळे, `index.html` वर `. ` URL पाथ पुन्हा लिहिण्याचे लक्षात ठेवा.

वेबसाइट एंट्री पृष्ठ फक्त एकदाच तैनात करणे आवश्यक आहे आणि त्यानंतरच्या सामग्री अद्यतनांसाठी वेबसाइट एंट्री पृष्ठ पुन्हा तैनात करण्याची आवश्यकता नाही.

#### गिथब पृष्ठावर उपयोजित करा

[एक संस्था तयार करण्यासाठी प्रथम येथे क्लिक github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

नंतर या `i18n-demo.github.io` अंतर्गत एक गोदाम तयार करा (कृपया तुम्ही तयार केलेल्या संस्थेच्या नावाने `i18n-demo` पुनर्स्थित करा):

<img alt="" src="https://p.3ti.site/1721098657.avif">

मागील लेखातील सामग्री प्रकाशित करताना, ती तयार केली गेली आहे `out/ol/htm` कृपया ही निर्देशिका प्रविष्ट करा आणि चालवा :

```
ln -s index.html 404.html
```


`github page` URL पथ पुनर्लेखनास समर्थन देत नाही, म्हणून `404.html` वापरला जातो.

नंतर `htm` खालील आदेश चालवा (आपल्या स्वतःच्या वेअरहाऊसच्या पत्त्याने `i18n-demo/i18n-demo.github.io.git` बदलण्याचे लक्षात ठेवा) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

कोड पुश केल्यानंतर, `github page` तैनाती यशस्वीपणे चालण्याची प्रतीक्षा करा (खाली दर्शविल्याप्रमाणे), आणि नंतर तुम्ही त्यात प्रवेश करू शकता.

<img src="//p.3ti.site/1721116586.avif" width="350px">

डेमो पृष्ठासाठी कृपया पहा:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### क्लाउडफ्लेअर पृष्ठावर तैनात करा

[cloudflare page](//pages.cloudflare.com) `github page` तुलनेत, हे मार्ग पुनर्लेखन प्रदान करते आणि मुख्य भूभागासाठी अधिक अनुकूल आहे आणि ते वापरण्याची शिफारस केली जाते.

`cloudflare page` सहसा वरील `github page` च्या तैनातीवर आधारित असते.

एक प्रकल्प तयार करा आणि वरील `i18n-demo.github.io` बांधा.

प्रक्रिया खालील आकृतीमध्ये दर्शविली आहे:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

कृपया `i18n-demo` संस्थेला प्रवेश देण्यासाठी क्लिक करा `Add Account`

तुम्ही दुसऱ्या संस्थेचे वेअरहाऊस बांधले असल्यास, नवीन संस्था प्रदर्शित होण्यापूर्वी तुम्हाला दोनदा अधिकृत करण्यासाठी दोनदा क्लिक करावे लागेल `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

`i18n-demo.github.io` वेअरहाउस निवडा, नंतर `Begin setup` वर क्लिक करा आणि त्यानंतरच्या चरणांसाठी डीफॉल्ट मूल्ये वापरा.

<img alt="" src="https://p.3ti.site/1721118490.avif">

प्रथमच बंधनकारक केल्यानंतर, आपण त्यात प्रवेश करण्यापूर्वी आपल्याला काही मिनिटे प्रतीक्षा करावी लागेल.

उपयोजन केल्यानंतर, तुम्ही सानुकूल डोमेन नाव बांधू शकता.

<img alt="" src="https://p.3ti.site/1721119459.avif">

सानुकूल डोमेन नाव बंधनकारक केल्यानंतर, कृपया खाली दर्शविल्याप्रमाणे, सिंगल-पेज ऍप्लिकेशनचे पथ पुनर्लेखन कॉन्फिगर करण्यासाठी डोमेन नावावर जा:

<img alt="" src="https://p.3ti.site/1721119320.avif">

वरील चित्रातील नियम खालीलप्रमाणे आहेत `i18n.site`

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

याव्यतिरिक्त, कृपया खाली दर्शविल्याप्रमाणे कॅशे नियम कॉन्फिगर करा आणि कॅशे कालावधी एका महिन्यावर सेट करा.

<img alt="" src="https://p.3ti.site/1721125111.avif">

कृपया वरील चित्रातील दुसऱ्या चरणात जुळणारे डोमेन नाव तुम्ही बांधलेल्या डोमेन नावात बदला.

#### मुख्य भूप्रदेश चीनमध्ये वेबसाइट तैनाती ऑप्टिमाइझ करणे

तुम्हाला मुख्य भूमी चीनच्या नेटवर्क वातावरणात अधिक चांगली प्रवेशयोग्यता कामगिरी मिळवायची असल्यास, कृपया प्रथम [डोमेन नावाची नोंदणी करा](//beian.aliyun.com) .

`out/ol/htm` `CDN` मुख्य भूमी चीनमध्ये क्लाउड विक्रेत्यांचे ऑब्जेक्ट स्टोरेज वापरा +

[Baidu स्मार्ट `CDN`](//cloud.baidu.com/product/cdn.html) सारख्या एकल-पृष्ठ अनुप्रयोगांशी जुळवून घेण्यासाठी मार्ग पुन्हा लिहिण्यासाठी तुम्ही एज कंप्युटिंग वापरू शकता हे याप्रमाणे कॉन्फिगर केले जाऊ शकते:

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

कारण `MX` आणि `CNAME` रेकॉर्ड एकत्र असू शकत नाहीत, जर तुम्हाला एकाच वेळी डोमेन नाव ईमेल प्राप्त करायचे असतील, तर तुम्हाला `CNAME` `A` सपाट करण्यासाठी सहकार्य करावे लागेल [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

याशिवाय, मुख्य भूप्रदेश चीनमधील क्लाउड विक्रेत्यांचे परदेशातील रहदारी शुल्क तुलनेने महाग असल्याने, जर तुम्हाला खर्च ऑप्टिमाइझ करायचा असेल, तर तुम्ही [Huawei DNS चे मोफत भौगोलिक रिझोल्यूशन](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) आणि [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) चे कस्टम डोमेन नाव (खाली दर्शविल्याप्रमाणे) वापरू शकता ट्रॅफिक डायव्हर्शन──मुख्य भूभागातील वाहतूक चीन Baidu क्लाउड `CDN` आंतरराष्ट्रीय रहदारी cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

हे डिप्लॉयमेंट ऑप्टिमायझेशन सोल्यूशन्स अधिक क्लिष्ट आहेत आणि भविष्यात वेगळ्या अध्यायांमध्ये सादर केले जातील.

#### सामान्य डोमेन नाव पुनर्निर्देशन

तुम्ही तुमची मुख्य वेबसाइट म्हणून वेबसाइट तयार करण्यासाठी `i18n.site` असल्यास, तुम्हाला सामान्यतः पॅन-डोमेन रीडायरेक्शन कॉन्फिगर करणे आवश्यक आहे, म्हणजेच, `*.xxx.com` ( `www.xxx.com` सह) प्रवेश `xxx.com` .

ही आवश्यकता Alibaba Cloud's `EdgeScript` ( [इंग्रजी दस्तऐवज](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [चीनी दस्तऐवज](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) च्या मदतीने पूर्ण केली जाऊ शकते `CDN`

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) मध्ये डोमेन नाव जोडा आणि `*.xxx.com` नाव Alibaba Cloud `CDN` 's `CNAME` वर निर्देशित करा.

<img alt="" src="https://p.3ti.site/1721122000.avif">

उदाहरणार्थ, वरील चित्रातील पॅन-डोमेन नाव पुनर्निर्देशन कॉन्फिगरेशन `*.i18n.site` आहे:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx सह तैनात करा

`/root/i18n/md/out/ol/htm` `server` एक `out/ol/htm` जोडा nginx

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

वेबसाइटच्या स्थिर फाइल्स, जसे की `favicon.ico` `robots.txt` , इ.

येथे आयकॉन फायली तयार केल्या जाऊ शकतात [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` अंतर्गत `i18n.site` च्या कॉन्फिगरेशन फाइल्स, ट्रान्सलेशन कॅशे इ. तपशीलांसाठी पुढील प्रकरण ["कॉन्फिगरेशन"](/i18n.site/conf) पहा.

#### en

स्रोत भाषा निर्देशिका, कॉन्फिगरेशन फाइलमधील `fromTo` `en` `.i18n/conf.yml` संबंधित आहे

```yaml
i18n:
  fromTo:
    en: zh
```

कृपया भाषांतराच्या कॉन्फिगरेशनचा संदर्भ घ्या [i18](/i18/use)

