# ସର୍ଚ୍ଚ ଇଞ୍ଜିନ୍ ଅପ୍ଟିମାଇଜେସନ୍ (SEO)

## ନୀତି

`i18n.site` ଏକ ଅଣ-ସତେଜ ଏକକ ପୃଷ୍ଠା ସ୍ଥାପତ୍ୟକୁ ଗ୍ରହଣ କରେ, ସନ୍ଧାନ ସୂଚକାଙ୍କକୁ ସୁଗମ କରିବା ପାଇଁ, କ୍ରଲର୍ମାନଙ୍କ ପାଇଁ କ୍ରଲ୍ ପାଇଁ ଏକ ପୃଥକ ଷ୍ଟାଟିକ୍ ପୃଷ୍ଠା ଏବଂ `sitemap.xml` ସୃଷ୍ଟି ହେବ |

ଯେତେବେଳେ ସର୍ଚ୍ଚ ଇଞ୍ଜିନ୍ କ୍ରଲର୍ ଦ୍ୱାରା ଆକସେସ୍ ଅନୁରୋଧର `User-Agent` ବ୍ୟବହୃତ ହୁଏ, ଅନୁରୋଧ `302` ମାଧ୍ୟମରେ ଷ୍ଟାଟିକ୍ ପୃଷ୍ଠାକୁ ପୁନ ir ନିର୍ଦ୍ଦେଶିତ ହେବ |

ଷ୍ଟାଟିକ୍ ପୃଷ୍ଠାଗୁଡ଼ିକରେ, ଏହି ପୃଷ୍ଠାର ବିଭିନ୍ନ ଭାଷା ସଂସ୍କରଣ ସହିତ ଲିଙ୍କ୍ ସୂଚାଇବା ପାଇଁ `link` ବ୍ୟବହାର କରନ୍ତୁ, ଯେପରି :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## ସ୍ଥାନୀୟ nginx ବିନ୍ୟାସ

ଏକ ଉଦାହରଣ ଭାବରେ ଡେମୋ ପ୍ରୋଜେକ୍ଟରେ `.i18n/htm/main.yml` ବିନ୍ୟାସ ଫାଇଲ୍ ନିଅ |

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

ଦୟାକରି ପ୍ରଥମେ `host:` ର ମୂଲ୍ୟକୁ ଆପଣଙ୍କର ଡୋମେନ୍ ନାମରେ ପରିବର୍ତ୍ତନ କରନ୍ତୁ, ଯେପରିକି `xxx.com` |

ତାପରେ, `i18n.site -n` , ଷ୍ଟାଟିକ୍ ପେଜ୍ `out/main/htm` ଡିରେକ୍ଟୋରୀରେ ସୃଷ୍ଟି ହେବ |

ଅବଶ୍ୟ, ଆପଣ ଅନ୍ୟ ବିନ୍ୟାସ ଫାଇଲଗୁଡ଼ିକୁ ମଧ୍ୟ ସକ୍ଷମ କରିପାରିବେ, ଯେପରିକି `.i18n/htm/dist.package.json` ଏବଂ `.i18n/htm/dist.yml` ସୃଷ୍ଟି କରିବାକୁ ପ୍ରଥମେ `main` ର ବିନ୍ୟାସକୁ ରେଫର୍ କରିବା |

ତା’ପରେ `i18n.site -n -c dist` ଚଲାନ୍ତୁ ଯାହା ଦ୍ the ାରା ଷ୍ଟାଟିକ୍ ପେଜ୍ `out/dist/htm` କୁ ସୃଷ୍ଟି ହେବ |

`nginx` ନିମ୍ନରେ ଥିବା ସଂରଚନାକୁ ଅନୁସରଣ କରି ସେଟ୍ କରାଯାଇପାରିବ |

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# ଅଧିକ ସମୟ ପାଇଁ ସର୍ଭର ୱାର୍କର୍ ସ୍କ୍ରିପ୍ଟଗୁଡ଼ିକୁ କ୍ୟାଚ୍ କରନ୍ତୁ ନାହିଁ |
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# ଅନ୍ୟ ଷ୍ଟାଟିକ୍ ଉତ୍ସଗୁଡ଼ିକ ପାଇଁ ଅଧିକ କ୍ୟାଚ୍ ସମୟ ସେଟ୍ କରନ୍ତୁ |
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# କ୍ରଲର୍ କେଉଁ ଷ୍ଟାଟିକ୍ ଫାଇଲ୍ ହୋମପେଜ୍ ଏଣ୍ଟ୍ରି ଭାବରେ ବ୍ୟବହାର କରେ ସେଟ୍ କରନ୍ତୁ |
location = / {
  # ଯଦି ଖାଲି $botLang , ଏହାର ଅର୍ଥ ସେଟ୍ ଭାଷା ପଥ ଅନୁଯାୟୀ କ୍ରଲର୍ ଆକ୍ସେସ୍ ଏବଂ ପୁନ ir ନିର୍ଦ୍ଦେଶ |
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# ଏକକ ପୃଷ୍ଠା ପ୍ରୟୋଗ ବିନ୍ୟାସ
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## ଷ୍ଟାଟିକ୍ ଫାଇଲ୍ ଅପଲୋଡ୍ କରିବା ପାଇଁ ଅବଜେକ୍ଟ ଷ୍ଟୋରେଜ୍ ବିନ୍ୟାସ କରନ୍ତୁ |

ଷ୍ଟାଟିକ୍ ଫାଇଲଗୁଡିକ ସ୍ଥାନୀୟ ଭାବରେ ସୃଷ୍ଟି କରାଯାଇପାରେ, କିନ୍ତୁ ଏକ ସାଧାରଣ ପନ୍ଥା ହେଉଛି ସେମାନଙ୍କୁ ବସ୍ତୁ ସଂରକ୍ଷଣରେ ଅପଲୋଡ୍ କରିବା |

ଉପରେ ବିନ୍ୟାସିତ `out` ପରିବର୍ତ୍ତନ କରନ୍ତୁ :

```
out:
  - s3
```

ତାପରେ, `~/.config/i18n.site.yml` ସଂପାଦନ କରନ୍ତୁ ଏବଂ ନିମ୍ନଲିଖିତ ସଂରଚନାକୁ ଯୋଡନ୍ତୁ :

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

ବିନ୍ୟାସନରେ, ଦୟାକରି `i18n.site` `.i18n/htm/main.yml` ରେ `host:` ର ମୂଲ୍ୟକୁ ପରିବର୍ତ୍ତନ କରନ୍ତୁ, ଏକାଧିକ ଅବଜେକ୍ଟ ଷ୍ଟୋରଗୁଡିକ `s3` ତଳେ ବିନ୍ୟାସ ହୋଇପାରିବ ଏବଂ `region` ଫିଲ୍ଡ ଇଚ୍ଛାଧୀନ ଅଟେ (ଅନେକ ବସ୍ତୁ ଷ୍ଟୋର୍ଗୁଡିକ ଏହି କ୍ଷେତ୍ର ସେଟ୍ କରିବା ଆବଶ୍ୟକ କରନ୍ତି ନାହିଁ) |

ତା’ପରେ ପ୍ରୋଜେକ୍ଟକୁ ପୁନ ub ପ୍ରକାଶନ କରିବାକୁ `i18n.site -n` ଚଲାନ୍ତୁ |

ଯଦି ଆପଣ `~/.config/i18n.site.yml` ସଂଶୋଧନ କରିଛନ୍ତି ଏବଂ ପୁନ - ଅପଲୋଡ୍ କରିବାକୁ ଚାହୁଁଛନ୍ତି, ଅପଲୋଡ୍ କ୍ୟାଚ୍ ସଫା କରିବାକୁ ଦୟାକରି ପ୍ରୋଜେକ୍ଟ ରୁଟ୍ ଡିରେକ୍ଟୋରୀରେ ନିମ୍ନଲିଖିତ ନିର୍ଦ୍ଦେଶକୁ ବ୍ୟବହାର କରନ୍ତୁ :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## କ୍ଲାଉଡ୍ ଫ୍ଲାର୍ ବିନ୍ୟାସକରଣ |

ଡୋମେନ୍ [cloudflare](//www.cloudflare.com)

### ରୂପାନ୍ତର ନିୟମ |

ନିମ୍ନରେ ଦେଖାଯାଇଥିବା ପରି ରୂପାନ୍ତର ନିୟମ ଯୋଡନ୍ତୁ:

![](//p.3ti.site/1725436822.avif)

ନିୟମ କୋଡ୍ ନିମ୍ନଲିଖିତ ଅଟେ, ଦୟାକରି ଆପଣଙ୍କର ଡୋମେନ୍ ନାମରେ କୋଡ୍ "i18n.site" କୁ ପରିବର୍ତ୍ତନ କରନ୍ତୁ:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### କ୍ୟାଚିଂ ନିୟମ |

ନିମ୍ନଲିଖିତ ଭାବରେ କ୍ୟାଶେ ନିୟମ ଯୋଡନ୍ତୁ:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### ପୁନ ir ନିର୍ଦ୍ଦେଶ ନିୟମ |

ନିମ୍ନଲିଖିତ ଭାବରେ ପୁନ ir ନିର୍ଦ୍ଦେଶ ନିୟମ ସେଟ୍ କରନ୍ତୁ, ଦୟାକରି ଆପଣଙ୍କର ଡୋମେନ୍ ନାମରେ କୋଡ୍ "i18n.site" କୁ ପରିବର୍ତ୍ତନ କରନ୍ତୁ |

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

`URL redirect` ଗତିଶୀଳ ପୁନ ir ନିର୍ଦ୍ଦେଶ ଚୟନ କରନ୍ତୁ, ଦୟାକରି ସର୍ଚ୍ଚ ଇଞ୍ଜିନ୍ ଅନ୍ତର୍ଭୂକ୍ତ କରିବାକୁ ଚାହୁଁଥିବା ଡିଫଲ୍ଟ ଭାଷାରେ ପୁନ ir ନିର୍ଦ୍ଦେଶ ପଥ `concat("/en",http.request.uri.path,".htm")` ରେ `/en` ପରିବର୍ତ୍ତନ କରନ୍ତୁ |

## Baidu ଇଣ୍ଟେଲିଜେଣ୍ଟ୍ କ୍ଲାଉଡ୍ ବିନ୍ୟାସକରଣ |

ଯଦି ଆପଣ ମଧ୍ୟପ୍ରଦେଶ ଚୀନ୍ କୁ ସେବା ଯୋଗାଇବା ଆବଶ୍ୟକ କରନ୍ତି, ତେବେ ଆପଣ [Baidu ସ୍ମାର୍ଟ କ୍ଲାଉଡ୍](//cloud.baidu.com) ବ୍ୟବହାର କରିପାରିବେ |

Baidu ଅବଜେକ୍ଟ ଷ୍ଟୋରେଜ୍ ରେ ଡାଟା ଅପଲୋଡ୍ ହୋଇଛି ଏବଂ Baidu ବିଷୟବସ୍ତୁ ବଣ୍ଟନ ନେଟୱାର୍କରେ ବନ୍ଧା |

ତାପରେ ନିମ୍ନଲିଖିତ ଭାବରେ ସ୍କ୍ରିପ୍ଟ ତିଆରି କରନ୍ତୁ [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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
  // ରେସପନ୍ସ ହେଡର୍ ଗୁଡିକ ଡିବଗ୍ ଆଉଟପୁଟ୍ ପାଇଁ ସେଟ୍ ହୋଇପାରିବ, ଯେପରିକି out.XXX = 'MSG';
})
```

`Debug` କ୍ଲିକ୍ କରନ୍ତୁ, ତାପରେ ସମଗ୍ର ନେଟୱାର୍କକୁ ପ୍ରକାଶନ କ୍ଲିକ୍ କରନ୍ତୁ |

![](//p.3ti.site/1725437754.avif)

## ଉନ୍ନତ ବ୍ୟବହାର: ଆଞ୍ଚଳିକ ରିଜୋଲ୍ୟୁସନ୍ ଉପରେ ଆଧାର କରି ଟ୍ରାଫିକ୍ ବଣ୍ଟନ କରନ୍ତୁ |

ଯଦି ଆପଣ ମଧ୍ୟପ୍ରଦେଶ ଚାଇନାରେ ସେବା ଯୋଗାଇବାକୁ ଚାହାଁନ୍ତି ଏବଂ `cloudflare` ମାଗଣା ଆନ୍ତର୍ଜାତୀୟ ଟ୍ରାଫିକ୍ ମଧ୍ୟ ଚାହୁଁଛନ୍ତି, ତେବେ ଆପଣ ଆଞ୍ଚଳିକ ରିଜୋଲ୍ୟୁସନ୍ ସହିତ `DNS` ବ୍ୟବହାର କରିପାରିବେ |

ଉଦାହରଣ ସ୍ୱରୂପ, [ହୁଆୱେ DNS](https://www.huaweicloud.com) ମାଗଣା ଆଞ୍ଚଳିକ ବିଶ୍ଳେଷଣ ପ୍ରଦାନ କରେ, ଯାହା ସହିତ ଚାଇନା ଟ୍ରାଫିକ୍ Baidu ସ୍ମାର୍ଟ କ୍ଲାଉଡ୍ ଦେଇ ଯାଇପାରେ ଏବଂ ଆନ୍ତର୍ଜାତୀୟ ଟ୍ରାଫିକ୍ `cloudflare` ଦେଇ ଯାଇପାରେ |

`cloudflare` ର ବିନ୍ୟାସନରେ ଅନେକ ଅସୁବିଧା ଅଛି | ଏଠାରେ ଧ୍ୟାନ ଦେବାକୁ କିଛି ପଏଣ୍ଟ ଅଛି :

### ଡୋମେନ୍ ନାମ ଅନ୍ୟ `DNS` ରେ ହୋଷ୍ଟ ହୋଇଛି, କିପରି `cloudflare` ବ୍ୟବହାର କରିବେ |

ପ୍ରଥମେ ଏକ ଇଚ୍ଛାଧୀନ ଡୋମେନ୍ ନାମକୁ `cloudflare` ରେ ବାନ୍ଧନ୍ତୁ, ଏବଂ ତା’ପରେ ମୁଖ୍ୟ ଡୋମେନ୍ ନାମକୁ ଏହି ଡୋମେନ୍ ନାମ ସହିତ ଯୋଡିବା ପାଇଁ `SSL/TLS` → କଷ୍ଟମ୍ ଡୋମେନ୍ ନାମ ବ୍ୟବହାର କରନ୍ତୁ |

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` ଏକ କଷ୍ଟମ୍ ଡୋମେନ୍ ନାମ ମାଧ୍ୟମରେ ପ୍ରବେଶ କରାଯାଇପାରିବ ନାହିଁ |

କାରଣ ବିଲ୍ଟ `cloudflare` ଅବଜେକ୍ଟ ଷ୍ଟୋରେଜ୍ `R2` ରେ କଷ୍ଟୋମାଇଜ୍ ଡୋମେନ୍ ନାମ ଦ୍ୱାରା ଆକ୍ସେସ୍ ହୋଇପାରିବ ନାହିଁ, ଷ୍ଟାଟିକ୍ ଫାଇଲ୍ ରଖିବା ପାଇଁ ଏକ ତୃତୀୟ-ପକ୍ଷ ବସ୍ତୁ ଷ୍ଟୋରେଜ୍ ବ୍ୟବହାର କରାଯିବା ଆବଶ୍ୟକ |

`cloudflare` ରେ ଗଚ୍ଛିତ ହେବାକୁ ଥିବା ତୃତୀୟ-ପକ୍ଷ ବସ୍ତୁଗୁଡ଼ିକୁ କିପରି ବାନ୍ଧିବାକୁ ପ୍ରଦର୍ଶନ କରିବାକୁ ଏଠାରେ ଆମେ ଏକ ଉଦାହରଣ ଭାବରେ ଗ୍ରହଣ କରୁ [backblaze.com](https://www.backblaze.com)

`backblaze.com` ରେ ଏକ ବାଲ୍ଟି ସୃଷ୍ଟି କରନ୍ତୁ, ଯେକ any ଣସି ଫାଇଲ୍ ଅପଲୋଡ୍ କରନ୍ତୁ, ଫାଇଲ୍ ବ୍ରାଉଜ୍ କରିବାକୁ କ୍ଲିକ୍ କରନ୍ତୁ ଏବଂ `Friendly URL` ର ଡୋମେନ୍ ନାମ ପ୍ରାପ୍ତ କରନ୍ତୁ, ଯାହା ଏଠାରେ `f003.backblazeb2.com` |

![](//p.3ti.site/1725440783.avif)

ଡୋମେନ୍ ନାମ `CNAME` ରୁ `f003.backblazeb2.com` କୁ `cloudflare` ରେ ପରିବର୍ତ୍ତନ କରନ୍ତୁ ଏବଂ ପ୍ରକ୍ସି ସକ୍ଷମ କରନ୍ତୁ |

![](//p.3ti.site/1725440896.avif)

`SSL` → ଏନକ୍ରିପସନ୍ ମୋଡ୍ ର `cloudflare` ପରିବର୍ତ୍ତନ କରନ୍ତୁ, `Full` କୁ ସେଟ୍ କରନ୍ତୁ |

![](//p.3ti.site/1725438572.avif)

ନିମ୍ନରେ ଦେଖାଯାଇଥିବା ପରି ରୂପାନ୍ତର ନିୟମ ଯୋଡନ୍ତୁ, ଏହାକୁ ପ୍ରଥମେ ରଖନ୍ତୁ (ପ୍ରଥମଟିରେ ସର୍ବନିମ୍ନ ପ୍ରାଥମିକତା ଅଛି):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` ଗତିଶୀଳ ଚୟନ କରନ୍ତୁ ଏବଂ ଆପଣଙ୍କର ବାଲ୍ଟି ନାମରେ `concat("/file/your_bucketname",http.request.uri.path)` ରେ `your_bucketname` ପରିବର୍ତ୍ତନ କରନ୍ତୁ |

ଏହା ସହିତ, ଉପରୋକ୍ତ `cloudflare` ରୂପାନ୍ତର ନିୟମରେ, `index.html` `file/your_bucketname/index.html` କୁ ପରିବର୍ତ୍ତନ କରାଯାଇଛି, ଏବଂ ଅନ୍ୟ ସଂରଚନାଗୁଡ଼ିକ ସମାନ ରହିଥାଏ |

![](//p.3ti.site/1725441384.avif)