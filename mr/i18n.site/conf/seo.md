# शोध इंजिन ऑप्टिमायझेशन (SEO)

## तत्त्व

`i18n.site` नॉन `sitemap.xml` रिफ्रेश सिंगल पेज आर्किटेक्चरचा अवलंब करते.

जेव्हा शोध इंजिन क्रॉलरद्वारे प्रवेश विनंतीपैकी `User-Agent` वापरली जाते, तेव्हा विनंती `302` द्वारे स्थिर पृष्ठावर पुनर्निर्देशित केली जाईल.

स्थिर पृष्ठांवर, या पृष्ठाच्या भिन्न भाषा आवृत्त्यांचे दुवे सूचित करण्यासाठी `link` वापरा, जसे की :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## स्थानिक nginx कॉन्फिगरेशन

उदाहरण म्हणून डेमो प्रोजेक्टमधील `.i18n/htm/main.yml` कॉन्फिगरेशन फाइल घ्या

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

कृपया प्रथम वरील `host:` चे मूल्य तुमच्या डोमेन नावात बदला, जसे की `xxx.com` .

नंतर, `i18n.site -n` , स्थिर पृष्ठ `out/main/htm` निर्देशिकेत तयार केले जाईल.

अर्थात, तुम्ही इतर कॉन्फिगरेशन फाइल्स देखील सक्षम करू शकता, जसे की प्रथम `.i18n/htm/dist.package.json` आणि `.i18n/htm/dist.yml` तयार करण्यासाठी `main` च्या कॉन्फिगरेशनचा संदर्भ घेणे.

नंतर `i18n.site -n -c dist` चालवा म्हणजे स्थिर पृष्ठ `out/dist/htm` वर जनरेट होईल.

खालील कॉन्फिगरेशनचा संदर्भ देऊन `nginx` सेट केले जाऊ शकते.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# सर्व्हर वर्कर स्क्रिप्ट जास्त काळ कॅशे करू नका
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# इतर स्थिर संसाधनांसाठी जास्त कॅशे वेळ सेट करा
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# क्रॉलर मुख्यपृष्ठ एंट्री म्हणून कोणती स्थिर फाइल वापरतो ते सेट करा
location = / {
  # जर $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# सिंगल पेज ॲप्लिकेशन कॉन्फिगरेशन
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## स्थिर फाइल्स अपलोड करण्यासाठी ऑब्जेक्ट स्टोरेज कॉन्फिगर करा

स्टॅटिक फाइल्स स्थानिक पातळीवर व्युत्पन्न केल्या जाऊ शकतात, परंतु त्यांना ऑब्जेक्ट स्टोरेजमध्ये अपलोड करणे हा अधिक सामान्य दृष्टीकोन आहे.

वर कॉन्फिगर केलेल्या `out` मध्ये बदल करा :

```
out:
  - s3
```

नंतर, `~/.config/i18n.site.yml` संपादित करा आणि खालील कॉन्फिगरेशन जोडा :

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

कॉन्फिगरेशनमध्ये, कृपया `i18n.site` मूल्य `host:` मधील `.i18n/htm/main.yml` मध्ये बदला, एकाधिक ऑब्जेक्ट स्टोअर `s3` अंतर्गत कॉन्फिगर केले जाऊ शकतात आणि `region` फील्ड पर्यायी आहे (अनेक ऑब्जेक्ट स्टोअरला हे फील्ड सेट करण्याची आवश्यकता नाही).

नंतर प्रकल्प पुनर्प्रकाशित करण्यासाठी `i18n.site -n` चालवा.

जर तुम्ही `~/.config/i18n.site.yml` मध्ये बदल केला असेल आणि तुम्हाला पुन्हा अपलोड करायचे असेल, तर कृपया अपलोड कॅशे साफ करण्यासाठी प्रोजेक्ट रूट निर्देशिकेतील खालील आदेश वापरा :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## क्लाउडफ्लेअर कॉन्फिगरेशन

वर होस्ट केलेले डोमेन नाव [cloudflare](//www.cloudflare.com)

### रूपांतरण नियम

खाली दर्शविल्याप्रमाणे रूपांतरण नियम जोडा:

![](//p.3ti.site/1725436822.avif)

नियम कोड खालीलप्रमाणे आहे, कृपया तुमच्या डोमेन नावात "i18n.site" कोड सुधारा:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### कॅशिंग नियम

खालीलप्रमाणे कॅशे नियम जोडा:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### पुनर्निर्देशित नियम

खालीलप्रमाणे पुनर्निर्देशन नियम सेट करा, कृपया तुमच्या डोमेन नावात "i18n.site" कोड सुधारा

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

`URL redirect` डायनॅमिक रीडायरेक्शन निवडा, कृपया रीडायरेक्शन पथ `concat("/en",http.request.uri.path,".htm")` मध्ये `/en` मध्ये सुधारणा करा ज्यामध्ये तुम्हाला शोध इंजिन समाविष्ट करायचे आहे.

## Baidu इंटेलिजेंट क्लाउड कॉन्फिगरेशन

तुम्हाला मुख्य भूमी चीनला सेवा पुरवायची असल्यास, तुम्ही [Baidu Smart Cloud](//cloud.baidu.com) वापरू शकता.

डेटा Baidu ऑब्जेक्ट स्टोरेजवर अपलोड केला जातो आणि Baidu सामग्री वितरण नेटवर्कशी बांधला जातो.

नंतर खालीलप्रमाणे [EdgeJS service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) मध्ये स्क्रिप्ट तयार करा

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
  // प्रतिसाद शीर्षलेख डीबग आउटपुटवर सेट केले जाऊ शकतात, जसे की out.XXX = 'MSG';
})
```

`Debug` वर क्लिक करा, त्यानंतर संपूर्ण नेटवर्कवर प्रकाशित करा क्लिक करा.

![](//p.3ti.site/1725437754.avif)

## प्रगत वापर: प्रादेशिक रिझोल्यूशनवर आधारित रहदारी वितरित करा

तुम्हाला मुख्य भूप्रदेश चीनमध्ये सेवा पुरवायची असल्यास आणि `cloudflare` विनामूल्य आंतरराष्ट्रीय रहदारी हवी असल्यास, तुम्ही प्रादेशिक रिझोल्यूशनसह `DNS` वापरू शकता.

उदाहरणार्थ, [Huawei DNS](https://www.huaweicloud.com) विनामूल्य प्रादेशिक विश्लेषण प्रदान करते, ज्यासह मुख्य भूप्रदेश चीनी रहदारी Baidu Smart Cloud द्वारे जाऊ शकते आणि आंतरराष्ट्रीय रहदारी `cloudflare` द्वारे जाऊ शकते.

`cloudflare` च्या कॉन्फिगरेशनमध्ये अनेक तोटे आहेत. येथे काही मुद्दे लक्षात घेण्यासारखे आहेत :

### डोमेन नाव इतर `DNS` मध्ये होस्ट केले आहे, `cloudflare` कसे वापरावे

प्रथम एक अनियंत्रित डोमेन नाव `cloudflare` वर बांधा, आणि नंतर या डोमेन नावाशी मुख्य डोमेन नाव संबद्ध करण्यासाठी `SSL/TLS` → कस्टम डोमेन नाव वापरा.

![](https://p.3ti.site/1725438658.avif)

### सानुकूल डोमेन नावाद्वारे `cloudflare R2` मध्ये प्रवेश केला जाऊ शकत नाही

कारण अंगभूत `cloudflare` ऑब्जेक्ट स्टोरेज `R2` मध्ये सानुकूलित डोमेन नावाद्वारे प्रवेश केला जाऊ शकत नाही, स्थिर फाइल्स ठेवण्यासाठी तृतीय-पक्ष ऑब्जेक्ट स्टोरेज वापरणे आवश्यक आहे.

`cloudflare` वर संग्रहित करण्यासाठी थर्ड-पार्टी ऑब्जेक्ट्स कसे बांधायचे हे दाखवण्यासाठी [backblaze.com](https://www.backblaze.com) येथे एक उदाहरण घेतो.

`backblaze.com` वर एक बादली तयार करा, कोणतीही फाइल अपलोड करा, फाइल ब्राउझ करण्यासाठी क्लिक करा आणि `Friendly URL` चे डोमेन नाव मिळवा, जे येथे `f003.backblazeb2.com` आहे.

![](//p.3ti.site/1725440783.avif)

डोमेन नाव `CNAME` ते `f003.backblazeb2.com` वरून `cloudflare` वर बदला आणि प्रॉक्सी सक्षम करा.

![](//p.3ti.site/1725440896.avif)

`SSL` पैकी `cloudflare` → एन्क्रिप्शन मोड सुधारित करा, `Full` वर सेट करा

![](//p.3ti.site/1725438572.avif)

खाली दर्शविल्याप्रमाणे रूपांतरण नियम जोडा, प्रथम ठेवा (पहिल्याला सर्वात कमी प्राधान्य आहे):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` डायनॅमिक निवडा आणि तुमच्या बादलीच्या नावात `concat("/file/your_bucketname",http.request.uri.path)` मध्ये `your_bucketname` बदला.

याव्यतिरिक्त, वरील `cloudflare` रूपांतरण नियमामध्ये, `index.html` `file/your_bucketname/index.html` मध्ये बदलला आहे आणि इतर कॉन्फिगरेशन समान राहतील.

![](//p.3ti.site/1725441384.avif)