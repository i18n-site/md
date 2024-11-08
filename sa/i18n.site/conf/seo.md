# अन्वेषणयन्त्र अनुकूलनम् (Seo) ९.

## सिद्धान्तः

`i18n.site` एकं नॉन-फ्रेश एकपृष्ठं आर्किटेक्चरं स्वीकुर्वति अन्वेषणसूचीकरणस्य सुविधायै क्रॉलर्-कृते पृथक् स्थिरपृष्ठं `sitemap.xml` च उत्पद्यते ।

यदा अभिगम-अनुरोधस्य `User-Agent` अन्वेषण-इञ्जिन-क्रॉलर-द्वारा उपयुज्यते तदा अनुरोधः `302` मार्गेण स्थिरपृष्ठं प्रति पुनः निर्दिश्यते ।

स्थिरपृष्ठेषु अस्य पृष्ठस्य विभिन्नभाषासंस्करणानाम् लिङ्कानि सूचयितुं `link` उपयोगं कुर्वन्तु, यथा :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## स्थानीय nginx विन्यास

उदाहरणरूपेण डेमो परियोजनायां `.i18n/htm/main.yml` विन्याससञ्चिकां गृह्यताम्

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

कृपया प्रथमं उपरि `host:` इत्यस्य मूल्यं स्वस्य डोमेन् नाम्ने परिवर्तयन्तु, यथा `xxx.com` ।

ततः, `i18n.site -n` , `out/main/htm` निर्देशिकायां स्थिरपृष्ठं उत्पद्यते ।

अवश्यं, अन्यविन्याससञ्चिकाः अपि सक्षमाः कर्तुं शक्नुवन्ति, यथा प्रथमं `main` इत्यस्य विन्यासस्य सन्दर्भं कृत्वा `.i18n/htm/dist.package.json` तथा `.i18n/htm/dist.yml` निर्मातुं शक्नुवन्ति ।

ततः `i18n.site -n -c dist` चालयन्तु येन स्थिरपृष्ठं `out/dist/htm` यावत् उत्पद्यते |

अधोलिखितं विन्यासं सन्दर्भ्य `nginx` सेट् कर्तुं शक्यते ।

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# सर्वर वर्कर स्क्रिप्ट् बहुकालं यावत् न संग्रहयन्तु
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# अन्येषां स्थिरसंसाधनानाम् कृते दीर्घतरं संग्रहणसमयं सेट् कुर्वन्तु
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# क्रॉलरः मुखपृष्ठप्रविष्टिरूपेण कस्याः स्थिरसञ्चिकायाः उपयोगं करोति इति सेट् कुर्वन्तु
location = / {
  # यदि $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# एकपृष्ठीय अनुप्रयोगविन्यास
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## स्थिरसञ्चिकानां अपलोड् कर्तुं वस्तुभण्डारं विन्यस्यताम्

स्थिरसञ्चिकाः स्थानीयरूपेण जनयितुं शक्यन्ते, परन्तु अधिकसामान्यः उपायः अस्ति यत् तान् वस्तुभण्डारणस्थाने अपलोड् करणीयम् ।

उपरि विन्यस्तं `out` परिवर्तयन्तु :

```
out:
  - s3
```

ततः, `~/.config/i18n.site.yml` सम्पादयित्वा निम्नलिखितविन्यासं योजयन्तु :

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

विन्यासे कृपया `i18n.site` `.i18n/htm/main.yml` मध्ये `host:` इत्यस्य मूल्ये परिवर्तयन्तु, `s3` अधः बहुविधवस्तुभण्डारं विन्यस्तुं शक्यते, तथा च `region` क्षेत्रं वैकल्पिकं भवति (बहवः वस्तुभण्डाराः एतत् क्षेत्रं सेट् कर्तुं आवश्यकाः नास्ति)

ततः परियोजनां पुनः प्रकाशयितुं `i18n.site -n` चालयन्तु ।

यदि भवान् `~/.config/i18n.site.yml` परिवर्तितवान् अस्ति तथा च पुनः अपलोड् कर्तुम् इच्छति तर्हि अपलोड्-सञ्चयस्य स्वच्छतायै परियोजनामूलनिर्देशिकायां निम्नलिखित-आदेशस्य उपयोगं कुर्वन्तु :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## मेघज्वालविन्यासः

डोमेन नाम होस्ट् कृत्वा [cloudflare](//www.cloudflare.com)

### परिवर्तनस्य नियमाः

अधोलिखितरीत्या रूपान्तरणनियमान् योजयन्तु:

![](//p.3ti.site/1725436822.avif)

नियमसङ्केतः निम्नलिखितरूपेण अस्ति, कृपया "i18n.site" इति कोडं स्वस्य डोमेननाम्नि परिवर्तयन्तु ।

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Caching नियमाः

सञ्चयनियमाः निम्नलिखितरूपेण योजयन्तु ।

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### नियमाः पुनर्निर्देशनं कुर्वन्तु

पुनर्निर्देशननियमान् निम्नलिखितरूपेण सेट् कुर्वन्तु, कृपया "i18n.site" इति कोडं स्वस्य डोमेन् नाम्नि परिवर्तयन्तु

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

`URL redirect` गतिशीलपुनर्निर्देशनं चिनोतु, कृपया पुनर्निर्देशनमार्गे `/en` `concat("/en",http.request.uri.path,".htm")` पूर्वनिर्धारितभाषायां परिवर्तयन्तु यस्मिन् भवन्तः अन्वेषणयन्त्राणि समाविष्टुं इच्छन्ति ।

## Baidu बुद्धिमान मेघ विन्यास

यदि भवन्तः मुख्यभूमिचीनदेशाय सेवां दातुं प्रवृत्ताः सन्ति तर्हि भवन्तः [Baidu Smart Cloud इत्यस्य](//cloud.baidu.com) उपयोगं कर्तुं शक्नुवन्ति ।

डाटा Baidu Object Storage इत्यत्र अपलोड् भवति तथा च Baidu Content Distribution Network इत्यत्र बद्धः भवति ।

ततः [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) इत्यस्मिन् स्क्रिप्ट् इत्येतत् निम्नलिखितरूपेण रचयन्तु

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
  // आउटपुट् डिबग् कर्तुं प्रतिक्रियाशीर्षकं सेट् कर्तुं शक्नुवन्ति, यथा out.XXX = 'MSG';
})
```

`Debug` नुदन्तु, ततः सम्पूर्णं संजाले प्रकाशयन्तु इति नुदन्तु ।

![](//p.3ti.site/1725437754.avif)

## उन्नतः उपयोगः : क्षेत्रीयसंकल्पस्य आधारेण यातायातस्य वितरणं कुर्वन्तु

यदि भवान् मुख्यभूमिचीनदेशे सेवां दातुम् इच्छति तथा च `cloudflare` निःशुल्कं अन्तर्राष्ट्रीययातायातम् इच्छति तर्हि क्षेत्रीयसंकल्पेन सह `DNS` उपयोगं कर्तुं शक्नोति।

उदाहरणार्थं `cloudflare` [Huawei Cloud DNS](https://www.huaweicloud.com)

`cloudflare` इत्यस्य विन्यासे बहवः जालाः सन्ति अत्र कतिचन बिन्दवः ज्ञातव्याः सन्ति :

### डोमेननाम अन्येषु `DNS` , कथं उपयोगः `cloudflare` इत्यत्र होस्ट् भवति

प्रथमं मनमाना डोमेननाम `cloudflare` -इत्यत्र बन्धयन्तु, ततः मुख्य-डोमेन्-नाम अस्य डोमेन-नामस्य सह सम्बद्धं कर्तुं `SSL/TLS` → कस्टम्-डोमेन्-नामस्य उपयोगं कुर्वन्तु ।

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` इष्ट डोमेननामद्वारा अभिगन्तुं न शक्यते

यतः अन्तःनिर्मित `cloudflare` वस्तु-भण्डारणम् `R2` अनुकूलित-डोमेन्-नाम्ना अभिगन्तुं न शक्यते, स्थिरसञ्चिकानां स्थापनार्थं तृतीयपक्षीय-वस्तु-भण्डारणस्य उपयोगः आवश्यकः ।

अत्र `cloudflare` [backblaze.com](https://www.backblaze.com)

`backblaze.com` इत्यत्र बाल्टीं रचयन्तु, किमपि सञ्चिकां अपलोड् कुर्वन्तु, सञ्चिकां ब्राउज् कर्तुं क्लिक् कुर्वन्तु, `Friendly URL` इत्यस्य डोमेन् नाम प्राप्नुवन्तु, यत् अत्र `f003.backblazeb2.com` अस्ति ।

![](//p.3ti.site/1725440783.avif)

डोमेननाम `cloudflare` मध्ये `CNAME` तः `f003.backblazeb2.com` यावत् परिवर्त्य प्रॉक्सी सक्षमं कुर्वन्तु ।

![](//p.3ti.site/1725440896.avif)

`SSL` इत्यस्य `cloudflare` परिवर्तयन्तु → एन्क्रिप्शन मोड्, `Full` इति सेट् कुर्वन्तु

![](//p.3ti.site/1725438572.avif)

अधः दर्शितवत् रूपान्तरणनियमं योजयन्तु, प्रथमं स्थापयन्तु (प्रथमस्य न्यूनतमा प्राथमिकता अस्ति):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` गतिशीलं चित्वा `concat("/file/your_bucketname",http.request.uri.path)` मध्ये `your_bucketname` स्वस्य बाल्टीनाम्नि परिवर्तयन्तु ।

तदतिरिक्तं उपरि `cloudflare` रूपान्तरणनियमे `index.html` `file/your_bucketname/index.html` इति परिवर्तते, अन्ये विन्यासाः अपि तथैव तिष्ठन्ति ।

![](//p.3ti.site/1725441384.avif)