# खोज इन्जिन अप्टिमाइजेसन (SEO)

## सिद्धान्त

`i18n.site` नन-रिफ्रेस एकल पृष्ठ वास्तुकला अपनाउछ खोज अनुक्रमणिकाको लागि, क्रलरहरूको लागि एक अलग स्थिर पृष्ठ र `sitemap.xml` उत्पन्न हुनेछ।

जब खोज इन्जिन क्रलरद्वारा पहुँच अनुरोधको `User-Agent` प्रयोग गरिन्छ, अनुरोधलाई `302` मार्फत स्थिर पृष्ठमा रिडिरेक्ट गरिनेछ।

स्थिर पृष्ठहरूमा, यो पृष्ठको विभिन्न भाषा संस्करणहरूमा लिङ्कहरू संकेत गर्न `link` प्रयोग गर्नुहोस्, जस्तै :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## स्थानीय nginx कन्फिगरेसन

उदाहरणको रूपमा डेमो प्रोजेक्टमा `.i18n/htm/main.yml` कन्फिगरेसन फाइल लिनुहोस्

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

कृपया पहिले आफ्नो डोमेन नाममा माथिको `host:` को मान परिमार्जन गर्नुहोस्, जस्तै `xxx.com` ।

त्यसपछि, `i18n.site -n` , स्थिर पृष्ठ `out/main/htm` डाइरेक्टरीमा उत्पन्न हुनेछ।

निस्सन्देह, तपाईले अन्य कन्फिगरेसन फाइलहरू पनि सक्षम गर्न सक्नुहुन्छ, जस्तै पहिलो `.i18n/htm/dist.package.json` र `.i18n/htm/dist.yml` सिर्जना गर्न `main` को कन्फिगरेसनलाई सन्दर्भ गर्दै।

त्यसपछि `i18n.site -n -c dist` चलाउनुहोस् ताकि स्थिर पृष्ठ `out/dist/htm` मा उत्पन्न हुनेछ।

`nginx` तलको कन्फिगरेसनलाई सन्दर्भ गरेर सेट गर्न सकिन्छ।

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# धेरै लामो समयको लागि सर्भर कार्यकर्ता स्क्रिप्टहरू क्यास नगर्नुहोस्
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# अन्य स्थिर स्रोतहरूको लागि लामो क्यास समय सेट गर्नुहोस्
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# क्रलरले गृहपृष्ठ प्रविष्टिको रूपमा प्रयोग गर्ने स्थिर फाइल सेट गर्नुहोस्
location = / {
  # यदि खाली छैन $botLang , यसको मतलब सेट भाषा मार्ग अनुसार क्रलर पहुँच र पुन: निर्देशन
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# एकल पृष्ठ अनुप्रयोग कन्फिगरेसन
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## स्थिर फाइलहरू अपलोड गर्न वस्तु भण्डारण कन्फिगर गर्नुहोस्

स्थिर फाइलहरू स्थानीय रूपमा उत्पन्न गर्न सकिन्छ, तर एक अधिक सामान्य दृष्टिकोण तिनीहरूलाई वस्तु भण्डारणमा अपलोड गर्न हो।

माथि कन्फिगर गरिएको `out` लाई परिमार्जन गर्नुहोस् :

```
out:
  - s3
```

त्यसपछि, `~/.config/i18n.site.yml` सम्पादन गर्नुहोस् र निम्न कन्फिगरेसन थप्नुहोस् :

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

कन्फिगरेसनमा, कृपया `i18n.site` `.i18n/htm/main.yml` मा `host:` को मानमा परिवर्तन गर्नुहोस्, बहु वस्तु स्टोरहरू `s3` अन्तर्गत कन्फिगर गर्न सकिन्छ, र `region` फिल्ड वैकल्पिक छ (धेरै वस्तु स्टोरहरूले यो क्षेत्र सेट गर्न आवश्यक छैन)।

त्यसपछि परियोजना पुन: प्रकाशित गर्न `i18n.site -n` चलाउनुहोस्।

यदि तपाईंले `~/.config/i18n.site.yml` परिमार्जन गर्नुभएको छ र पुन: अपलोड गर्न चाहनुहुन्छ भने, कृपया अपलोड क्यास खाली गर्न परियोजना रूट डाइरेक्टरीमा निम्न आदेश प्रयोग गर्नुहोस् :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare कन्फिगरेसन

डोमेन नाम मा होस्ट गरियो [cloudflare](//www.cloudflare.com)

### रूपान्तरण नियम

तल देखाइएको रूपान्तरण नियमहरू थप्नुहोस्:

![](//p.3ti.site/1725436822.avif)

नियम कोड निम्नानुसार छ, कृपया आफ्नो डोमेन नाममा कोड "i18n.site" परिमार्जन गर्नुहोस्:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### क्यासिङ नियमहरू

निम्नानुसार क्यास नियमहरू थप्नुहोस्:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### नियमहरू पुन: निर्देशित गर्नुहोस्

निम्नानुसार पुनर्निर्देशन नियमहरू सेट गर्नुहोस्, कृपया आफ्नो डोमेन नाममा कोड "i18n.site" परिमार्जन गर्नुहोस्।

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

`URL redirect` गतिशील पुनर्निर्देशन चयन गर्नुहोस्, कृपया `/en` पुन:निर्देशन मार्ग `concat("/en",http.request.uri.path,".htm")` मा परिमार्जन गर्नुहोस् जुन तपाईंले खोज इन्जिनहरू समावेश गर्न चाहनुभएको पूर्वनिर्धारित भाषामा।

## Baidu बुद्धिमान क्लाउड कन्फिगरेसन

यदि तपाईंलाई मुख्य भूमि चीनमा सेवाहरू उपलब्ध गराउन आवश्यक छ भने, तपाईंले [Baidu Smart Cloud](//cloud.baidu.com) प्रयोग गर्न सक्नुहुन्छ।

डेटा Baidu वस्तु भण्डारणमा अपलोड गरिएको छ र Baidu सामग्री वितरण नेटवर्कमा बाँधिएको छ।

त्यसपछि निम्न रूपमा [EdgeJS सेवामा](//console.bce.baidu.com/cdn/#/cdn/ejs/list) लिपि सिर्जना गर्नुहोस्

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
  // प्रतिक्रिया हेडरहरू डिबग आउटपुटमा सेट गर्न सकिन्छ, जस्तै out.XXX = 'MSG';
})
```

`Debug` क्लिक गर्नुहोस्, त्यसपछि सम्पूर्ण नेटवर्कमा प्रकाशित गर्नुहोस् क्लिक गर्नुहोस्।

![](//p.3ti.site/1725437754.avif)

## उन्नत उपयोग: क्षेत्रीय रिजोल्युसनमा आधारित यातायात वितरण

यदि तपाईं मुख्य भूमि चीनमा सेवाहरू प्रदान गर्न चाहनुहुन्छ र `cloudflare` नि:शुल्क अन्तर्राष्ट्रिय ट्राफिक चाहनुहुन्छ भने, तपाईंले क्षेत्रीय रिजोल्युसनको साथ `DNS` प्रयोग गर्न सक्नुहुन्छ।

उदाहरणका लागि, [Huawei Cloud DNS](https://www.huaweicloud.com) नि:शुल्क क्षेत्रीय विश्लेषण प्रदान गर्दछ, जसको साथमा मुख्य भूमि चिनियाँ ट्राफिक Baidu Smart Cloud मार्फत जान सक्छ र अन्तर्राष्ट्रिय ट्राफिक `cloudflare` मार्फत जान सक्छ।

`cloudflare` को कन्फिगरेसनमा धेरै समस्याहरू छन्। यहाँ ध्यान दिनु पर्ने केही बुँदाहरू छन् :

### डोमेन नाम अन्य `DNS` मा होस्ट गरिएको छ, `cloudflare` कसरी प्रयोग गर्ने

पहिले एक स्वेच्छाचारी डोमेन नाम `cloudflare` मा बाँध्नुहोस्, र त्यसपछि `SSL/TLS` → अनुकूलन डोमेन नाम प्रयोग गर्नुहोस् मुख्य डोमेन नामलाई यस डोमेन नामसँग सम्बद्ध गर्न।

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` अनुकूलन डोमेन नाम मार्फत पहुँच गर्न सकिँदैन

किनभने निर्मित `cloudflare` वस्तु भण्डारण `R2` अनुकूलित डोमेन नामद्वारा पहुँच गर्न सकिँदैन, स्थिर फाइलहरू राख्नको लागि तेस्रो-पक्ष वस्तु भण्डारण प्रयोग गर्न आवश्यक छ।

यहाँ [backblaze.com](https://www.backblaze.com) `cloudflare` मा भण्डारण गर्न तेस्रो-पक्ष वस्तुहरू कसरी बाँध्ने भनेर देखाउनको लागि उदाहरणको रूपमा लिन्छौं।

`backblaze.com` मा बाल्टी सिर्जना गर्नुहोस्, कुनै पनि फाइल अपलोड गर्नुहोस्, फाइल ब्राउज गर्न क्लिक गर्नुहोस्, र `Friendly URL` को डोमेन नाम प्राप्त गर्नुहोस्, जुन यहाँ `f003.backblazeb2.com` हो।

![](//p.3ti.site/1725440783.avif)

डोमेन नाम `CNAME` देखि `f003.backblazeb2.com` मा `cloudflare` मा परिवर्तन गर्नुहोस् र प्रोक्सी सक्षम गर्नुहोस्।

![](//p.3ti.site/1725440896.avif)

`SSL` को `cloudflare` परिमार्जन गर्नुहोस् → इन्क्रिप्सन मोड, `Full` मा सेट गर्नुहोस्

![](//p.3ti.site/1725438572.avif)

तल देखाइए अनुसार रूपान्तरण नियम थप्नुहोस्, यसलाई पहिले राख्नुहोस् (पहिलोको सबैभन्दा कम प्राथमिकता छ):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` डायनामिक चयन गर्नुहोस् र आफ्नो बाल्टी नाममा `your_bucketname` मा `concat("/file/your_bucketname",http.request.uri.path)` परिमार्जन गर्नुहोस्।

थप रूपमा, माथिको `cloudflare` रूपान्तरण नियममा, `index.html` लाई `file/your_bucketname/index.html` मा परिवर्तन गरिएको छ, र अन्य कन्फिगरेसनहरू उस्तै छन्।

![](//p.3ti.site/1725441384.avif)