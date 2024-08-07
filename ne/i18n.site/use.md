# स्थापना गर्नुहोस् &

## कन्फिगरेसन टोकन

`i18` अनुवाद उपकरण इम्बेड गरिएको छ `i18n.site` [पहुँच टोकन कन्फिगर गर्न `i18` कागजातलाई सन्दर्भ गर्न कृपया यहाँ क्लिक गर्नुहोस्](/i18/use) ।

## स्थापना गर्नुहोस्

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## डेमो परियोजना

डेमो प्रोजेक्टको साथ सुरु गरौं र कसरी प्रयोग गर्ने भनेर जानौं `i18n.site`

हामीले पहिले डेमो रिपोजिटरी क्लोन गर्छौं र निम्नानुसार आदेश चलाउँछौं:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

मुख्य भूमि चीनका प्रयोगकर्ताहरूले गर्न सक्छन्:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

कोड आधार क्लोनको डाइरेक्टरी नाम `docker` को साथ स्थानीय पूर्वावलोकनको लागि `md` हुनुपर्छ `demo.i18n.site`

### अनुवाद गर्नुहोस्

पहिले, `md` प्रविष्ट गर्नुहोस् र `i18n.site` चलाउनुहोस्, जसले `en` लाई `zh` ।

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

`git add . ` , अनुवाद र क्यास फाइलहरू उत्पन्न हुनेछन् `md`

### स्थानीय पूर्वावलोकन

स्थापना गर्नुहोस् र सुरु `docker` ( `MAC` `docker` को रनटाइमको रूपमा प्रयोग [orbstack](https://orbstack.dev) सिफारिस गर्छन्)।

त्यसपछि, `docker` प्रविष्ट गर्नुहोस् र `./up.sh` चलाउनुहोस्, र त्यसपछि स्थानीय रूपमा पूर्वावलोकन गर्नुहोस् [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### सामग्री पोस्ट गर्नुहोस्

[एकल-पृष्ठ अनुप्रयोग](https://developer.mozilla.org/docs/Glossary/SPA) आर्किटेक्चर अपनाउछ, र वेबसाइट प्रवेश पृष्ठ र वेबसाइट सामग्री स्वतन्त्र रूपमा तैनात गरिएको छ `i18n.site`

माथिको अनुवाद चलाएपछि, डाइरेक्टरीमा `htm` र `v` डाइरेक्टरीहरू उत्पन्न हुनेछन् `md/out/dev`

यहाँ `dev` यो `.i18n/htm/dev.yml` फाइलमा आधारित छ भनेर संकेत गर्दछ।

सामग्री : `dev`

निर्देशिका अन्तर्गत वेबसाइट प्रवेश पृष्ठ हो `htm`

डाइरेक्टरीले संस्करण नम्बर सहितको वेबसाइट सामग्री समावेश गर्दछ `v`

स्थानीय पूर्वावलोकनले सबै फाइलहरूलाई डाइरेक्टरीमा प्रतिलिपि गर्नेछ `out/dev/v/0.1.0`

आधिकारिक रिलीजको लागि, परिवर्तन गरिएका फाइलहरू नयाँ संस्करण नम्बर डाइरेक्टरीमा प्रतिलिपि गरिनेछ।

#### कन्फिगरेसन फाइल निर्दिष्ट गर्न -c प्रयोग गर्नुहोस्

बिभिन्न कन्फिगरेसन फाइलहरूले `out` अन्तर्गत सम्बन्धित डाइरेक्टरीहरू सिर्जना गर्नेछन्।

उदाहरणका लागि, `out/ol` डाइरेक्टरी सिर्जना गर्नेछ `.i18n/htm/ol.yml`

`dev.yml` `ol.yml` पूर्वनिर्धारित कन्फिगरेसनहरू हुन्।

`development` को संक्षिप्त रूप `dev` , जसले विकास वातावरणलाई प्रतिनिधित्व गर्दछ, स्थानीय पूर्वावलोकनको लागि प्रयोग गरिन्छ, र पूर्वनिर्धारित कन्फिगरेसन फाइल पनि हो।
`online` को संक्षिप्त रूप `ol` , जसले अनलाइन वातावरणको प्रतिनिधित्व गर्दछ, आधिकारिक रिलीजको लागि प्रयोग गरिन्छ, र `npm` कमाण्ड लाइन प्यारामिटर प्रयोग गरेर `-n` ।

`--htm_conf` कन्फिगरेसन फाइल नाम निर्दिष्ट गर्न आदेश लाइनमा अन्य कन्फिगरेसन फाइलहरू पनि सिर्जना गर्न सक्नुहुन्छ:

उदाहरण को लागी:
```
i18n.site --htm_conf yourConfig --save
```

`--save` अपडेट रिलीज संस्करण नम्बर संकेत गर्दछ।

#### <a rel=id href="#npm" id="npm"></a> npmjs.com मा सामग्री प्रकाशित गर्नुहोस्

[npmjs.com](//npmjs.com) सामग्री प्रकाशित गर्नु सिफारिस गरिएको पूर्वनिर्धारित समाधान हो ( [फ्रन्ट-एन्ड उच्च उपलब्धता](/i18n.site/feature#ha) हेर्नुहोस्)।

##### npm login &

स्थापना गर्नुहोस् `nodejs` लग इन गर्न `npm login` प्रयोग गर्नुहोस्।

सम्पादन गर्नुहोस् `md/.i18n/htm/ol.yml` `i18n.site` in `v: //unpkg.com/i18n.site` लाई आफ्नै `npm` प्याकेज नाम) मा परिवर्तन गर्नुहोस्।

प्याकेज नामको रूपमा वेबसाइट डोमेन नाम प्रयोग गर्नु राम्रो विकल्प हो [npmjs.com](//npmjs.com)

`npm` आधारित प्रकाशन गर्दा, `v:` मानको उपसर्गको रूपमा **`//unpkg.com/` प्रयोग गर्न निश्चित हुनुहोस्** `i18n.site` यस उपसर्ग पथ अन्तर्गत `/.v` नयाँ रिलीजहरू समयमै हेर्न सक्षम गर्नका लागि विशेष रूपमा अनुकूलित गरिएको छ।

अनुवाद गर्न र प्रकाशित गर्न निर्देशिकामा `i18n.site --npm` वा `i18n.site -n` चलाउनुहोस् `md`

यदि तपाइँ प्रकाशित गर्नको लागि निरन्तर एकीकरण वातावरण प्रयोग गर्नुहुन्छ भने, यसलाई स्थापना गर्न आवश्यक छैन केवल लग-इन र प्रकाशित अनुमति `~/.npmrc` वातावरणमा प्रतिलिपि गर्नुहोस् `nodejs`

यदि तपाइँ `v:` `ol.yml` मा प्याकेजको नाम परिमार्जन गर्नुहुन्छ भने, कृपया **पहिले `.i18n/v/ol` मेटाउन र त्यसपछि प्रकाशित गर्न निश्चित हुनुहोस्** ।

##### npm द्वारा प्रकाशित प्रोक्सी सर्भर

यदि मुख्य भूमि चीनका प्रयोगकर्ताहरूले नेटवर्क समस्याहरू सामना गर्छन् र प्याकेज प्रकाशित गर्न असमर्थ छन् `npm` , तिनीहरूले प्रोक्सी सर्भर कन्फिगर गर्न वातावरण चर `https_proxy` सेट गर्न सक्छन्।

तपाईको प्रोक्सी सर्भर पोर्ट हो भनी मान्दै `7890` तपाईले लेख्न सक्नुहुन्छ:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### स्व-होस्ट गरिएको सामग्री

यदि तपाइँ सामग्री स्व-होस्ट गर्न चाहनुहुन्छ भने, पहिले सम्पादन `md/.i18n/htm/ol.yml` र `v: //unpkg.com/i18n.site` लाई तपाइँको URL उपसर्गमा परिवर्तन गर्नुहोस्, जस्तै `v: //i18n-v.xxx.com` ।

`md` प्रविष्ट गर्नुहोस् र चलाउनुहोस्

```
i18n.site --htm_conf ol --save
```

वा संक्षिप्त नाम

```
i18n.site -c ol -s
```

त्यसपछि, `v:` मा सेट गरिएको URL उपसर्ग पथमा `md/out/ol/v` सामग्री कन्फिगर गर्नुहोस्।

अन्तमा, **`1s` `/.v` अन्त्य हुने पथको क्यास समय कन्फिगर गर्नुहोस्** , अन्यथा नयाँ जारी गरिएको सामग्री तुरुन्तै पहुँच गर्न सकिँदैन।

अन्य मार्गहरूको लागि क्यास समय अनावश्यक अनुरोधहरू कम गर्न एक वर्ष वा बढीमा सेट गर्न सकिन्छ।

##### s3 मा सामग्री होस्ट गर्नुहोस्

सेल्फ-होस्ट सामग्रीको लागि, तपाइँको आफ्नै सर्भर प्रयोग गर्नुको अतिरिक्त, `CDN` सामान्य विकल्प हो `S3` +

तपाईँले `S3` `S3` सक्नुहुन्छ [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

कन्फिगर गर्न सम्झनुहोस् `CDN` ताकि `/.v` मा अन्त्य हुने पथको क्यास समय `1s` हो, अन्यथा तपाइँ तुरुन्तै जारी गरिएको सामग्री पहुँच गर्न सक्षम हुनुहुने छैन।

### वेबसाइट प्रकाशित गर्नुहोस्

वेबसाइट जहाँ पनि तैनाथ गर्न सकिन्छ [github page](https://pages.github.com) र [cloudflare page](https://pages.cloudflare.com) राम्रो विकल्पहरू छन्।

वेबसाइटले [एकल-पृष्ठ अनुप्रयोगको](https://developer.mozilla.org/docs/Glossary/SPA) वास्तुकला अपनाएको हुनाले, `index.html` सम्म समावेश नगर्ने URL पथ पुन `. ` लेख्न सम्झनुहोस्।

वेबसाइट प्रविष्टि पृष्ठ एक पटक मात्र प्रयोग गर्न आवश्यक छ, र त्यसपछि सामग्री अद्यावधिकहरूको लागि वेबसाइट प्रविष्टि पृष्ठ पुन: प्रयोग गर्न आवश्यक छैन।

#### Github पृष्ठमा तैनात गर्नुहोस्

[एउटा संस्था बनाउनको लागि यहाँ क्लिक github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

त्यसपछि यो संगठन अन्तर्गत एउटा गोदाम बनाउनुहोस् `i18n-demo.github.io` कृपया तपाईंले सिर्जना गर्नुभएको संगठनको नामले `i18n-demo` ):

<img alt="" src="https://p.3ti.site/1721098657.avif">

अघिल्लो लेखमा सामग्री प्रकाशित गर्दा, यो उत्पन्न भएको `out/ol/htm` कृपया यो डाइरेक्टरी प्रविष्ट गर्नुहोस् र चलाउनुहोस् :

```
ln -s index.html 404.html
```


किनभने `github page` URL पथ पुनर्लेखन समर्थन गर्दैन, त्यसैले यसको सट्टा `404.html` प्रयोग गरिन्छ।

त्यसपछि `htm` निम्न आदेश चलाउनुहोस् (आफ्नो गोदाम ठेगानासँग `i18n-demo/i18n-demo.github.io.git` बदल्न सम्झनुहोस्) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

कोड पुश गरेपछि, `github page` तैनाती सफलतापूर्वक चल्नको लागि पर्खनुहोस् (तल देखाइएको छ), र त्यसपछि तपाइँ यसलाई पहुँच गर्न सक्नुहुन्छ।

<img src="//p.3ti.site/1721116586.avif" width="350px">

डेमो पृष्ठको लागि कृपया हेर्नुहोस्:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### क्लाउडफ्लेयर पृष्ठमा तैनात गर्नुहोस्

[cloudflare page](//pages.cloudflare.com) `github page` तुलनामा, यो मुख्य भूमि चीन को लागी अधिक अनुकूल छ र यसलाई प्रयोग गर्न सिफारिस गरिएको छ।

डिप्लोइमेन्ट सामान्यतया `github page` माथिको डिप्लोइमेन्टमा आधारित हुन्छ `cloudflare page`

एउटा परियोजना बनाउनुहोस् र माथिको गोदाम बाँध्नुहोस् `i18n-demo.github.io`

प्रक्रिया तल चित्रमा देखाइएको छ:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

कृपया `i18n-demo` संगठनमा पहुँच प्रदान गर्न क्लिक गर्नुहोस् `Add Account`

यदि तपाइँले अर्को संस्थाको गोदामलाई बाँध्नुभएको छ भने, तपाइँले नयाँ संगठन प्रदर्शन हुनु अघि यसलाई दुई पटक अधिकृत गर्न दुई पटक क्लिक गर्न आवश्यक पर्दछ `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

अर्को वेयरहाउस चयन गर्नुहोस् `i18n-demo.github.io` त्यसपछि `Begin setup` क्लिक गर्नुहोस्, र त्यसपछिका चरणहरूको लागि पूर्वनिर्धारित मानहरू प्रयोग गर्नुहोस्।

<img alt="" src="https://p.3ti.site/1721118490.avif">

पहिलो पटक बाइन्ड गरेपछि, तपाईंले यसलाई पहुँच गर्न सक्नु अघि तपाईंले केही मिनेट पर्खनु पर्छ।

डिप्लोइमेन्ट पछि, तपाइँ अनुकूलन डोमेन नाम बाँध्न सक्नुहुन्छ।

<img alt="" src="https://p.3ti.site/1721119459.avif">

अनुकूलन डोमेन नाम बाइन्डिङ गरेपछि, तल देखाइएको रूपमा, एकल-पृष्ठ अनुप्रयोगको पथ पुन: लेखन कन्फिगर गर्न डोमेन नाममा जानुहोस्:

<img alt="" src="https://p.3ti.site/1721119320.avif">

माथिको तस्बिरमा भएका नियमहरू तलको पहिलो पङ्क्तिमा तपाइँसँग बाँधिएको छ `i18n.site`

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

थप रूपमा, कृपया तल देखाइएको क्यास नियमहरू कन्फिगर गर्नुहोस्, र क्यास अवधि एक महिनामा सेट गर्नुहोस्।

<img alt="" src="https://p.3ti.site/1721125111.avif">

कृपया माथिको तस्विरको दोस्रो चरणमा मिल्दो डोमेन नामलाई तपाईंले बाँध्नुभएको डोमेन नाममा परिवर्तन गर्नुहोस्।

#### मुख्य भूमि चीनमा वेबसाइट परिनियोजनलाई अनुकूलन गर्दै

यदि तपाईं मुख्य भूमि चीनको नेटवर्क वातावरणमा राम्रो पहुँच प्रदर्शन प्राप्त गर्न चाहनुहुन्छ भने, कृपया पहिले [डोमेन नाम दर्ता गर्नुहोस्](//beian.aliyun.com) ।

त्यसपछि, `out/ol/htm` भूमि चीनमा क्लाउड विक्रेताहरूको वस्तु भण्डारण प्रयोग `CDN` +

तपाईं एज कम्प्युटिङ प्रयोग गर्न सक्नुहुन्छ एकल-पृष्ठ अनुप्रयोगहरूमा अनुकूलन गर्न पथ पुन: लेख्न, जस्तै [Baidu स्मार्ट `CDN`](//cloud.baidu.com/product/cdn.html) यसलाई यसरी कन्फिगर गर्न सकिन्छ:

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

किनभने `MX` रेकर्डहरू र `CNAME` रेकर्डहरू एकसाथ रहन सक्दैनन्, यदि तपाईं एकै समयमा डोमेन नाम इमेलहरू प्राप्त गर्न चाहनुहुन्छ भने, तपाईंले `CNAME` समतल `A` लागि सहयोग गर्नुपर्छ [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

थप रूपमा, मुख्य भूमि चीनमा क्लाउड विक्रेताहरूको विदेशी ट्राफिक शुल्कहरू तुलनात्मक रूपमा महँगो भएकाले, यदि तपाईं लागतहरू अनुकूलन गर्न चाहनुहुन्छ भने, तपाईंले प्राप्त गर्न [Huawei DNS को निःशुल्क भौगोलिक रिजोल्युसन](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) र [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) को अनुकूलन डोमेन नाम (तल देखाइएको) प्रयोग गर्न सक्नुहुन्छ ट्राफिक डाइभर्सन──मुख्य भूमि चीनमा ट्राफिक Baidu क्लाउड `CDN` अन्तर्राष्ट्रिय ट्राफिक जान्छ cloudflare ।

<img alt="" src="https://p.3ti.site/1721119788.avif">

यी परिनियोजन अनुकूलन समाधानहरू अधिक जटिल छन् र भविष्यमा छुट्टै अध्यायहरूमा प्रस्तुत गरिनेछ।

#### सामान्य डोमेन नाम पुनर्निर्देशन

यदि तपाइँ तपाइँको मुख्य वेबसाइट को रूप मा एक वेबसाइट उत्पन्न गर्न को `i18n.site` प्रयोग गर्नुहुन्छ, तपाइँ सामान्यतया प्यान-डोमेन रिडिरेक्शन कन्फिगर गर्न आवश्यक छ, त्यो हो, `*.xxx.com` ( `www.xxx.com` सहित) को पहुँच `xxx.com`

यो आवश्यकता अलिबाबा क्लाउडको `EdgeScript` ( [अङ्ग्रेजी कागजात](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [चिनियाँ कागजात](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) को सहयोगमा प्राप्त गर्न सकिन्छ `CDN`

[अलिबाबा CDN](https://cdn.console.aliyun.com/domain/list) डोमेन नाम थप्नुहोस् र डोमेन `*.xxx.com` Alibaba Cloud `CDN` 's `CNAME` मा देखाउनुहोस्।

<img alt="" src="https://p.3ti.site/1721122000.avif">

उदाहरणका लागि, माथिको चित्रमा प्यान-डोमेन नाम रिडिरेक्शन कन्फिगरेसन `*.i18n.site` छ:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx सँग डिप्लोय गर्नुहोस्

कृपया `server` मिल्दोजुल्दो कन्फिगरेसन थप्नुहोस् nginx जहाँ `/root/i18n/md/out/ol/htm` कृपया यसलाई आफ्नो परियोजनाको मार्गमा परिवर्तन गर्नुहोस् `out/ol/htm`

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

वेबसाइटको स्थिर फाइलहरू, जस्तै `favicon.ico` `robots.txt` , आदि।

यहाँ प्रतिमा फाइलहरू उत्पन्न गर्न सकिन्छ [realfavicongenerator.net](https://realfavicongenerator.net)

#### i18n

डाइरेक्टरी अन्तर्गत `i18n.site` को कन्फिगरेसन फाइलहरू, अनुवाद क्यास, आदि छन् `.i18n` विवरणहरूको लागि अर्को अध्याय ["कन्फिगरेसन"](/i18n.site/conf) हेर्नुहोस्।

#### en

स्रोत भाषा डाइरेक्टरी, कन्फिगरेसन फाइलमा `fromTo` `en` `.i18n/conf.yml` सम्बन्धित

```yaml
i18n:
  fromTo:
    en: zh
```

कृपया अनुवादको कन्फिगरेसनलाई सन्दर्भ गर्नुहोस् [i18](/i18/use)

