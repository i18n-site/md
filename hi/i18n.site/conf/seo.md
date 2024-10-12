# खोज इंजन अनुकूलन (एसईओ)

## सिद्धांत

`i18n.site` खोज अनुक्रमण की सुविधा के लिए एक गैर-ताज़ा एकल पृष्ठ आर्किटेक्चर को अपनाता है, क्रॉलर्स को क्रॉल करने के लिए एक अलग स्थिर पृष्ठ और `sitemap.xml` उत्पन्न किया जाएगा।

जब खोज इंजन क्रॉलर द्वारा एक्सेस अनुरोध के `User-Agent` का उपयोग किया जाता है, तो अनुरोध को `302` के माध्यम से स्थिर पृष्ठ पर पुनः निर्देशित किया जाएगा।

स्थिर पृष्ठों पर, इस पृष्ठ के विभिन्न भाषा संस्करणों के लिंक को इंगित करने के लिए `link` उपयोग करें, जैसे :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## स्थिर फ़ाइलें अपलोड करने के लिए ऑब्जेक्ट संग्रहण कॉन्फ़िगर करें

स्टेटिक फ़ाइलें स्थानीय रूप से उत्पन्न की जा सकती हैं, लेकिन अधिक सामान्य तरीका उन्हें ऑब्जेक्ट स्टोरेज पर अपलोड करना है।

उदाहरण के तौर पर डेमो प्रोजेक्ट में `.i18n/htm/ol.yml` कॉन्फ़िगरेशन फ़ाइल लें

```yml
host:
seo: true
out:
  - s3
v: //unpkg.com/i18n.site
x: 18x
importmap:
  i/: //unpkg.com/@i18n.site/
```

कृपया पहले अपने डोमेन नाम में ऊपर दिए गए `host:` के मान को संशोधित करें, जैसे कि `i18n.site` ।

फिर, `~/.config/i18n.site.yml` संपादित करें और निम्न कॉन्फ़िगरेशन जोड़ें :

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

कॉन्फ़िगरेशन में, कृपया `i18n.site` `host:` में `.i18n/htm/ol.yml` के मान में बदलें, एकाधिक ऑब्जेक्ट स्टोर्स को `s3` अंतर्गत कॉन्फ़िगर किया जा सकता है, और `region` फ़ील्ड वैकल्पिक है (कई ऑब्जेक्ट स्टोर्स को इस फ़ील्ड को सेट करने की आवश्यकता नहीं है)।

फिर प्रोजेक्ट को पुनः प्रकाशित करने के लिए `i18n.site -n` चलाएँ।

यदि आपने `~/.config/i18n.site.yml` संशोधित किया है और पुनः अपलोड करना चाहते हैं, तो कृपया अपलोड कैश को साफ़ करने के लिए प्रोजेक्ट रूट निर्देशिका में निम्नलिखित कमांड का उपयोग करें :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## क्लाउडफ्लेयर कॉन्फ़िगरेशन

डोमेन नाम होस्ट किया गया [cloudflare](//www.cloudflare.com)

### रूपांतरण नियम

नीचे दिखाए अनुसार रूपांतरण नियम जोड़ें:

![](//p.3ti.site/1725436822.avif)

नियम कोड इस प्रकार है, कृपया अपने डोमेन नाम में "i18n.site" कोड को संशोधित करें:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### कैशिंग नियम

कैश नियम इस प्रकार जोड़ें:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### पुनर्निर्देशन नियम

पुनर्निर्देशन नियमों को निम्नानुसार सेट करें, कृपया अपने डोमेन नाम में "i18n.site" कोड को संशोधित करें

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

`URL redirect` डायनामिक पुनर्निर्देशन का चयन करें, कृपया पुनर्निर्देशन पथ `concat("/en",http.request.uri.path,".htm")` में `/en` उस डिफ़ॉल्ट भाषा में संशोधित करें जिसे आप खोज इंजन में शामिल करना चाहते हैं।

## Baidu इंटेलिजेंट क्लाउड कॉन्फ़िगरेशन

यदि आपको मुख्य भूमि चीन को सेवाएं प्रदान करने की आवश्यकता है, तो आप [Baidu स्मार्ट क्लाउड का](//cloud.baidu.com) उपयोग कर सकते हैं।

डेटा को Baidu ऑब्जेक्ट स्टोरेज पर अपलोड किया जाता है और Baidu सामग्री वितरण नेटवर्क से जोड़ा जाता है।

फिर [EdgeJS एज सेवा](//console.bce.baidu.com/cdn/#/cdn/ejs/list) में निम्नानुसार स्क्रिप्ट बनाएं

```js
var uri=r.uri,p=uri.lastIndexOf('.');

if(
  p<0 || !/html?|css|rss|avif|md|ico|gz|js|json|png|svg|txt|webmanifest|xml/.test(uri.slice(p+1))
){
  const ua = r.headersIn['User-Agent'].toLowerCase();
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(302,(/baidu|yisou|sogou|360|byte/.test(ua)?'/zh':'/en')+r.uri+'.htm')
    return
  }
  r.uri = '/index.html'
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

`Debug` पर क्लिक करें, फिर संपूर्ण नेटवर्क पर प्रकाशित करें पर क्लिक करें।

![](//p.3ti.site/1725437754.avif)

## उन्नत उपयोग: क्षेत्रीय रिज़ॉल्यूशन के आधार पर ट्रैफ़िक वितरित करें

यदि आप मुख्य भूमि चीन में सेवाएं प्रदान करना चाहते हैं और `cloudflare` निःशुल्क अंतर्राष्ट्रीय ट्रैफ़िक भी चाहते हैं, तो आप क्षेत्रीय रिज़ॉल्यूशन के साथ `DNS` उपयोग कर सकते हैं।

उदाहरण के लिए, [हुआवेई क्लाउड DNS](https://www.huaweicloud.com) मुफ़्त क्षेत्रीय विश्लेषण प्रदान करता है, जिसके साथ मुख्य भूमि चीनी ट्रैफ़िक Baidu स्मार्ट क्लाउड के माध्यम से जा सकता है, और अंतर्राष्ट्रीय ट्रैफ़िक `cloudflare` के माध्यम से जा सकता है।

`cloudflare` के कॉन्फ़िगरेशन में कई खामियां हैं। यहां ध्यान देने योग्य कुछ बिंदु दिए गए हैं :

### डोमेन नाम अन्य `DNS` में होस्ट किया गया है, `cloudflare` उपयोग कैसे करें

पहले एक मनमाने डोमेन नाम को `cloudflare` से बांधें, और फिर मुख्य डोमेन नाम को इस डोमेन नाम से जोड़ने के लिए `SSL/TLS` → कस्टम डोमेन नाम का उपयोग करें।

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` कस्टम डोमेन नाम के माध्यम से एक्सेस नहीं किया जा सकता है

क्योंकि बिल्ट `cloudflare` इन ऑब्जेक्ट स्टोरेज `R2` अनुकूलित डोमेन नाम द्वारा एक्सेस नहीं किया जा सकता है, स्थिर फ़ाइलों को रखने के लिए एक तृतीय-पक्ष ऑब्जेक्ट स्टोरेज का उपयोग करने की आवश्यकता होती है।

यहां हम यह दिखाने के लिए एक उदाहरण के रूप में [backblaze.com](https://www.backblaze.com) लेते हैं कि `cloudflare` पर संग्रहीत किए जाने वाले तृतीय-पक्ष ऑब्जेक्ट को कैसे बांधा जाए।

`backblaze.com` पर एक बकेट बनाएं, कोई भी फ़ाइल अपलोड करें, फ़ाइल ब्राउज़ करने के लिए क्लिक करें, और `Friendly URL` का डोमेन नाम प्राप्त करें, जो यहां `f003.backblazeb2.com` है।

![](//p.3ti.site/1725440783.avif)

`cloudflare` पर डोमेन नाम को `CNAME` से `f003.backblazeb2.com` में बदलें और प्रॉक्सी को सक्षम करें।

![](//p.3ti.site/1725440896.avif)

`SSL` में से `cloudflare` संशोधित करें → एन्क्रिप्शन मोड, `Full` पर सेट करें

![](//p.3ti.site/1725438572.avif)

जैसा कि नीचे दिखाया गया है, रूपांतरण नियम जोड़ें, इसे पहले रखें (पहले वाले की प्राथमिकता सबसे कम है):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` डायनामिक का चयन करें और अपने बकेट नाम में `your_bucketname` इन `concat("/file/your_bucketname",http.request.uri.path)` संशोधित करें।

इसके अलावा, उपरोक्त `cloudflare` रूपांतरण नियम में, `index.html` को `file/your_bucketname/index.html` में बदल दिया गया है, और अन्य कॉन्फ़िगरेशन समान रहते हैं।

![](//p.3ti.site/1725441384.avif)