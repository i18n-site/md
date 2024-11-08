# सर्च इंजन अनुकूलन (एसईओ) २.

## सिद्धांत

`i18n.site` एकटा गैर-ताज़ा एकल पृष्ठ आर्किटेक्चर अपनायत छै खोज अनुक्रमणिका कें सुविधा कें लेल, क्रॉलर कें क्रॉल करय कें लेल एकटा अलग स्थिर पृष्ठ आ `sitemap.xml` उत्पन्न कैल जेतय.

जखन एक्सेस अनुरोध कें `User-Agent` कें उपयोग सर्च इंजन क्रॉलर दूवारा करल जायत छै, तखन अनुरोध कें `302` कें माध्यम सं स्थिर पृष्ठ पर पुनर्निर्देशित कैल जेतय.

स्थिर पृष्ठ पर, एहि पृष्ठक विभिन्न भाषा संस्करणक लिंक इंगित करबाक लेल `link` प्रयोग करू, जेना :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## स्थानीय nginx विन्यास

डेमो प्रोजेक्ट मे `.i18n/htm/main.yml` विन्यास फाइल कए उदाहरण क रूप मे लिअ

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

कृपया पहिने उपरोक्त `host:` क मान कए अपन डोमेन नाम मे संशोधित करू, जेना `xxx.com` .

तखन, `i18n.site -n` , स्थिर पृष्ठ `out/main/htm` निर्देशिका मे उत्पन्न कएल जाएत.

बेशक, अहां अन्य विन्यास फाइल कें सेहो सक्षम कयर सकय छी, जेना कि पहिने `main` कें विन्यास कें संदर्भित करनाय `.i18n/htm/dist.package.json` आ `.i18n/htm/dist.yml` बनावा कें लेल.

तखन `i18n.site -n -c dist` चलाउ ताकि स्थिर पृष्ठ `out/dist/htm` पर उत्पन्न भ' जाएत.

`nginx` नीचाँ देल गेल विन्यास क' संदर्भ द' क' सेट कएल जा सकैत अछि.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# सर्वर वर्कर स्क्रिप्ट केँ बेसी काल धरि कैश नहि करू
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# अन्य स्थिर संसाधनक लेल बेसी कैश समय सेट करू
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# क्रॉलर होमपेज प्रविष्टि क रूप मे कोन स्थिर फाइल क उपयोग करैत अछि से सेट करू
location = / {
  # यदि $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# एकल पृष्ठ अनुप्रयोग विन्यास
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## स्थिर फाइल अपलोड करबाक लेल वस्तु भंडारण कॉन्फ़िगर करू

स्थिर फाइल स्थानीय रूप सं उत्पन्न कैल जा सकय छै, मुदा एकटा बेसि आम तरीका छै ओकरा ऑब्जेक्ट स्टोरेज मे अपलोड करनाय.

ऊपर विन्यस्त `out` संशोधित करू :

```
out:
  - s3
```

तखन, `~/.config/i18n.site.yml` संपादित करू आ निम्नलिखित विन्यास जोड़ू :

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

विन्यास मे, कृपया `i18n.site` `.i18n/htm/main.yml` मे `host:` कें मान मे बदलू, कईटा वस्तु भंडार कें `s3` कें तहत विन्यस्त कैल जा सकय छै, आ `region` फील्ड वैकल्पिक छै (बहुत वस्तु भंडार कें इ फील्ड कें सेट करय कें जरूरत नहि छै).

तखन परियोजनाकेँ पुनः प्रकाशित करबाक लेल `i18n.site -n` चलाउ.

यदि अहाँ `~/.config/i18n.site.yml` संशोधित केने छी आ पुनः अपलोड करय चाहैत छी, त कृपया अपलोड कैश के साफ करय लेल प्रोजेक्ट रूट डायरेक्टरी में निम्नलिखित कमांड के उपयोग करू :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## क्लाउडफ्लेयर विन्यास

डोमेन नाम के होस्ट कएल गेल अछि [cloudflare](//www.cloudflare.com)

### धर्म परिवर्तन के नियम

रूपांतरण नियम जोड़ू जेना कि नीचाँ देखाओल गेल अछि:

![](//p.3ti.site/1725436822.avif)

नियम कोड निम्नलिखित अछि, कृपया कोड "i18n.site" केँ अपन डोमेन नाम मे संशोधित करू:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### कैशिंग नियम

कैश नियम निम्नलिखित रूप मे जोड़ू:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### नियम पुनर्निर्देशन

पुनर्निर्देशन नियम निम्नलिखित रूप सँ सेट करू, कृपया कोड "i18n.site" केँ अपन डोमेन नाम मे संशोधित करू

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

`URL redirect` गतिशील पुनर्निर्देशन चुनू, कृपया पुनर्निर्देशन पथ `concat("/en",http.request.uri.path,".htm")` मे `/en` ओहि पूर्वनिर्धारित भाषा मे संशोधित करू जकरा अहाँ खोज इंजन केँ शामिल करय चाहैत छी.

## बैडू बुद्धिमान बादल विन्यास

अगर अहां के मुख्य भूमि चीन के सेवा देबय के जरूरत अछि तं अहां [बैडू स्मार्ट क्लाउड के](//cloud.baidu.com) इस्तेमाल क सकय छी.

डाटा बैडू ऑब्जेक्ट स्टोरेज मे अपलोड कैल जायत छै आ बैडू कंटेंट डिस्ट्रीब्यूशन नेटवर्क सं बान्हल जायत छै.

तखन [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) मे स्क्रिप्ट बनाउ जे निम्नलिखित अछि |

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
  // प्रतिक्रिया हेडर क॑ आउटपुट क॑ डिबग करै लेली सेट करलऽ जाब॑ सकै छै, जेना कि out.XXX = 'MSG';
})
```

`Debug` पर क्लिक करू, फेर पूरा नेटवर्क पर प्रकाशित करू पर क्लिक करू.

![](//p.3ti.site/1725437754.avif)

## उन्नत उपयोग : क्षेत्रीय संकल्प कें आधार पर यातायात वितरित करनाय

यदि अहां मुख्य भूमि चीन मे सेवा प्रदान करय चाहय छी आ `cloudflare` मुफ्त अंतर्राष्ट्रीय यातायात सेहो चाहैत छी त अहां क्षेत्रीय संकल्प के संग `DNS` उपयोग क सकय छी.

उदाहरण के लेल, [हुवावे DNS](https://www.huaweicloud.com) मुफ्त क्षेत्रीय विश्लेषण प्रदान करैत अछि, जकर संग मुख्य भूमि चीनी यातायात बैडू स्मार्ट क्लाउड के माध्यम सं जा सकैत अछि, आ अंतर्राष्ट्रीय यातायात `cloudflare` के माध्यम सं जा सकैत अछि.

`cloudflare` के विन्यास में बहुत रास जाल अछि.. एतय किछु बिन्दु पर ध्यान देबय के अछि :

### डोमेन नाम अन्य `DNS` मे होस्ट कएल गेल अछि , `cloudflare` उपयोग कोना कएल जाए

पहिने एकटा मनमाना डोमेन नाम कें `cloudflare` सं बाइंड करू, आओर फेर `SSL/TLS` → कस्टम डोमेन नाम कें उपयोग करू जे मुख्य डोमेन नाम कें एहि डोमेन नाम सं जोड़ सकय.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` कस्टम डोमेन नाम क माध्यम स एक्सेस नहि कएल जा सकैत अछि

चूँकि `cloudflare` वस्तु भंडारण `R2` अनुकूलित डोमेन नाम सं एक्सेस नहि कैल जा सकय छै, स्थिर फाइल रखय कें लेल तृतीय-पक्ष वस्तु भंडारण कें उपयोग करय कें जरूरत छै.

एतय `cloudflare` [backblaze.com](https://www.backblaze.com)

`backblaze.com` पर एकटा बाल्टी बनाउ, कोनो फाइल अपलोड करू, फाइल ब्राउज करबाक लेल क्लिक करू, आओर `Friendly URL` क डोमेन नाम प्राप्त करू, जे एतय `f003.backblazeb2.com` अछि.

![](//p.3ti.site/1725440783.avif)

डोमेन नाम `cloudflare` पर `CNAME` सँ `f003.backblazeb2.com` मे बदलू आओर प्रॉक्सी सक्षम करू.

![](//p.3ti.site/1725440896.avif)

`SSL` मे सँ `cloudflare` संशोधित करू → एन्क्रिप्शन मोड, `Full` पर सेट करू

![](//p.3ti.site/1725438572.avif)

रूपांतरण नियम जोड़ू जेना कि नीचाँ देखाओल गेल अछि, ओकरा पहिने राखू (पहिल केर प्राथमिकता सबसँ कम अछि):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` डायनामिक चुनू आओर `concat("/file/your_bucketname",http.request.uri.path)` मे `your_bucketname` अपन बाल्टी नाम मे संशोधित करू.

एकरऽ अलावा, उपरोक्त `cloudflare` रूपांतरण नियम म॑, `index.html` `file/your_bucketname/index.html` म॑ बदललऽ जाय छै, आरू अन्य विन्यास वू ही रहै छै.

![](//p.3ti.site/1725441384.avif)