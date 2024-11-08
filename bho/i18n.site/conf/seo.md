# सर्च इंजन अनुकूलन (एसईओ) के बारे में जानकारी दिहल गइल बा।

## सिद्धांत के रूप में बा

`i18n.site` नॉन-रिफ्रेश सिंगल पेज आर्किटेक्चर अपनावे ला खोज अनुक्रमणिका के सुविधा खातिर, क्रॉलर सभ खातिर क्रॉल करे खातिर अलग से स्थिर पन्ना आ `sitemap.xml` पैदा कइल जाई।

जब एक्सेस अनुरोध के `User-Agent` के इस्तेमाल सर्च इंजन क्रॉलर द्वारा कइल जाला तब अनुरोध के `302` माध्यम से स्थिर पन्ना पर रिडायरेक्ट कइल जाई।

स्थिर पन्ना सभ पर, एह पन्ना के अलग-अलग भाषा संस्करण सभ के लिंक बतावे खातिर `link` इस्तेमाल करीं, जइसे कि :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## स्थानीय nginx कॉन्फ़िगरेशन के बा

डेमो प्रोजेक्ट में `.i18n/htm/main.yml` कॉन्फ़िगरेशन फाइल के उदाहरण के रूप में लिहल जाय

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

कृपया पहिले ऊपर `host:` के मान के अपना डोमेन नाँव में संशोधित करीं, जइसे कि `xxx.com` ।

तब, `i18n.site -n` , `out/main/htm` डाइरेक्टरी में स्थिर पन्ना जनरेट हो जाई।

बेशक, रउआँ अउरी कॉन्फ़िगरेशन फाइल सभ के भी सक्षम क सकत बानी, जइसे कि पहिले `main` के कॉन्फ़िगरेशन के संदर्भित क के `.i18n/htm/dist.package.json` आ `.i18n/htm/dist.yml` बनावल जा सके ला।

एकरा बाद `i18n.site -n -c dist` चलाईं ताकि स्थिर पन्ना `out/dist/htm` पर जनरेट हो जाव .

नीचे दिहल कॉन्फ़िगरेशन के संदर्भ देके `nginx` सेट कइल जा सके ला।

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# सर्वर वर्कर स्क्रिप्ट के ढेर दिन ले कैश मत करीं
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# अन्य स्थिर संसाधन सभ खातिर लंबा कैश समय सेट करीं
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# सेट करीं कि क्रॉलर कवन स्थिर फाइल के होमपेज प्रविष्टि के रूप में इस्तेमाल करेला
location = / {
  # अगर $botLang खाली ना होखे त एकर मतलब होला सेट भाषा पथ के अनुसार क्रॉलर एक्सेस आ रीडायरेक्शन
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# एकल पन्ना आवेदन कॉन्फ़िगरेशन के बा
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## स्थिर फाइल अपलोड करे खातिर ऑब्जेक्ट स्टोरेज कॉन्फ़िगर करीं

स्थिर फाइल सभ के स्थानीय रूप से जनरेट कइल जा सके ला, बाकी एकर अउरी आम तरीका ई बा कि इनहन के ऑब्जेक्ट स्टोरेज में अपलोड कइल जाय।

ऊपर कॉन्फ़िगर कइल गइल `out` संशोधित करीं :

```
out:
  - s3
```

एकरा बाद, `~/.config/i18n.site.yml` संपादित करीं आ निम्नलिखित कॉन्फ़िगरेशन जोड़ीं :

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

कॉन्फ़िगरेशन में, कृपया `i18n.site` `.i18n/htm/main.yml` में `host:` के मान में बदल दीं, कई गो ऑब्जेक्ट स्टोर सभ के `s3` तहत कॉन्फ़िगर कइल जा सके ला, आ `region` फील्ड वैकल्पिक बा (बहुत सारा ऑब्जेक्ट स्टोर सभ के एह फील्ड के सेट करे के जरूरत नइखे)।

एकरा बाद प्रोजेक्ट के दोबारा प्रकाशित करे खातिर `i18n.site -n` चलाईं।

अगर रउआँ `~/.config/i18n.site.yml` संशोधित कइले बानी आ दोबारा अपलोड कइल चाहत बानी, त कृपया अपलोड कैश के खाली करे खातिर प्रोजेक्ट रूट डाइरेक्टरी में निम्नलिखित कमांड के इस्तेमाल करीं :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## क्लाउडफ्लेयर कॉन्फ़िगरेशन के बारे में बतावल गइल बा

डोमेन नाम के होस्ट कइल गइल बा [cloudflare](//www.cloudflare.com)

### धर्मांतरण के नियम बा

नीचे देखावल तरीका से रूपांतरण नियम जोड़ीं:

![](//p.3ti.site/1725436822.avif)

नियम कोड निम्नलिखित बा, कृपया कोड "i18n.site" के अपना डोमेन नाम में संशोधित करीं:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### कैशिंग के नियम के बारे में बतावल गइल बा

कैश नियम निम्नलिखित तरीका से जोड़ल जाला:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### नियम के पुनर्निर्देशित कइल जाला

पुनर्निर्देशन नियम निम्नलिखित तरीका से सेट करीं, कृपया कोड "i18n.site" के अपना डोमेन नाम में संशोधित करीं

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

`URL redirect` डायनामिक रीडायरेक्शन चुनीं, कृपया रीडायरेक्टेशन पथ `concat("/en",http.request.uri.path,".htm")` में `/en` ओह डिफ़ॉल्ट भाषा में संशोधित करीं जवना के रउरा चाहत बानी कि सर्च इंजन शामिल होखे.

## बैडू इंटेलिजेंट क्लाउड कॉन्फ़िगरेशन के बा

अगर रउरा मुख्य भूमि चीन के सेवा देबे के बा त रउरा [बैडू स्मार्ट क्लाउड के](//cloud.baidu.com) इस्तेमाल कर सकीलें.

डेटा के बैडू ऑब्जेक्ट स्टोरेज में अपलोड कइल जाला आ बैडू कंटेंट डिस्ट्रीब्यूशन नेटवर्क से बान्हल जाला।

एकरा बाद [EdgeJS एज सर्विस](//console.bce.baidu.com/cdn/#/cdn/ejs/list) में स्क्रिप्ट के निम्नलिखित तरीका से बनाईं

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

`Debug` पर क्लिक करीं, ओकरा बाद पूरा नेटवर्क में प्रकाशित करीं पर क्लिक करीं.

![](//p.3ti.site/1725437754.avif)

## उन्नत उपयोग: क्षेत्रीय संकल्प के आधार पर यातायात के वितरण करीं

अगर रउआ मुख्य भूमि चीन में सेवा देवे के चाहत बानी आ `cloudflare` मुफ्त अंतर्राष्ट्रीय यातायात भी चाहत बानी, त रउआ क्षेत्रीय संकल्प के साथ `DNS` इस्तेमाल कर सकेनी।

उदाहरण खातिर, [हुवावे DNS](https://www.huaweicloud.com) मुफ्त क्षेत्रीय विश्लेषण प्रदान करेला, जवना के संगे मुख्य भूमि चीनी यातायात बैडू स्मार्ट क्लाउड के माध्यम से जा सकता, अवुरी अंतर्राष्ट्रीय यातायात `cloudflare` के माध्यम से जा सकता।

`cloudflare` के कॉन्फ़िगरेशन में कई गो जाल बा, इहाँ कुछ बिंदु बा जवना में ध्यान देवे के बा :

### डोमेन नाम अन्य `DNS` में होस्ट कइल गइल बा, `cloudflare` इस्तेमाल कईसे कइल जाला

पहिले कवनो मनमाना डोमेन नाँव के `cloudflare` से बाइंड करीं, आ फिर `SSL/TLS` → कस्टम डोमेन नाँव के इस्तेमाल करीं जेह से मुख्य डोमेन नाँव के एह डोमेन नाँव से जोड़ल जा सके।

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` कस्टम डोमेन नाँव के माध्यम से एक्सेस ना कइल जा सके ला

चूँकि बिल्ट `cloudflare` इन ऑब्जेक्ट स्टोरेज `R2` के कस्टमाइज्ड डोमेन नाँव से एक्सेस ना कइल जा सके ला, स्थिर फाइल सभ के रखे खातिर थर्ड पार्टी ऑब्जेक्ट स्टोरेज के इस्तेमाल करे के जरूरत होला।

`cloudflare` हमनी के [backblaze.com](https://www.backblaze.com)

`backblaze.com` पर बाल्टी बनाईं, कवनो फाइल अपलोड करीं, फाइल के ब्राउज करे खातिर क्लिक करीं, आ `Friendly URL` के डोमेन नाम पाईं, जवन कि एहिजा `f003.backblazeb2.com` बा.

![](//p.3ti.site/1725440783.avif)

डोमेन नाम के `cloudflare` पर `CNAME` से `f003.backblazeb2.com` में बदलीं आ प्रॉक्सी के सक्षम करीं.

![](//p.3ti.site/1725440896.avif)

`SSL` में से `cloudflare` के संशोधित करीं → एन्क्रिप्शन मोड, `Full` पर सेट करीं

![](//p.3ti.site/1725438572.avif)

नीचे देखावल तरीका से रूपांतरण नियम जोड़ीं, एकरा के पहिले रखीं (पहिला के प्राथमिकता सभसे कम बा):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` डायनामिक चुनीं आ `concat("/file/your_bucketname",http.request.uri.path)` में `your_bucketname` अपना बाल्टी के नाम में संशोधित करीं।

एकरे अलावा, ऊपर दिहल गइल `cloudflare` रूपांतरण नियम में, `index.html` के `file/your_bucketname/index.html` में बदल दिहल गइल बा, आ अउरी बिन्यास सभ एकही नियर रहे लें।

![](//p.3ti.site/1725441384.avif)