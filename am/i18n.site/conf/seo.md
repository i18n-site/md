# የፍለጋ ሞተር ማሻሻል (SEO)

## መርህ

`i18n.site` የማይታደስ ነጠላ ገፅ አርክቴክቸርን ተቀብሏል የፍለጋ መረጃ ጠቋሚን ለማመቻቸት የተለየ የማይንቀሳቀስ ገጽ እና `sitemap.xml` ተሳቢዎች እንዲጎበኟቸው ይደረጋል።

የመዳረሻ ጥያቄው `User-Agent` በፍለጋ ሞተር ጎብኚው ጥቅም ላይ ሲውል, ጥያቄው በ `302` በኩል ወደ የማይንቀሳቀስ ገጽ ይዛወራል.

በቋሚ ገፆች ላይ፣ ወደ ተለያዩ የዚህ ገጽ የቋንቋ ስሪቶች አገናኞችን ለማመልከት `link` ይጠቀሙ፣ ለምሳሌ :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## የአካባቢ nginx ውቅር

በማሳያ ፕሮጄክቱ ውስጥ ያለውን `.i18n/htm/main.yml` ውቅር ፋይል እንደ ምሳሌ ውሰድ

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

እባክህ መጀመሪያ ከላይ ያለውን የ `host:` ዋጋ ወደ ጎራህ ስም ቀይር፣ ለምሳሌ `xxx.com` ።

ከዚያ, `i18n.site -n` , የማይንቀሳቀስ ገጽ በ `out/main/htm` ማውጫ ውስጥ ይፈጠራል.

እርግጥ ነው, እንደ መጀመሪያ `.i18n/htm/dist.package.json` እና `.i18n/htm/dist.yml` ለመፍጠር የ `main` ውቅርን በመጥቀስ ሌሎች የውቅር ፋይሎችን ማንቃት ይችላሉ.

ከዚያ `i18n.site -n -c dist` ያሂዱ ስለዚህም የማይንቀሳቀስ ገጽ ወደ `out/dist/htm` እንዲፈጠር።

`nginx` ከታች ያለውን ውቅር በማጣቀስ ማዘጋጀት ይቻላል.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# የአገልጋይ ሰራተኛ ስክሪፕቶችን ለረጅም ጊዜ አታሸጉ
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# ለሌሎች የማይንቀሳቀሱ ሀብቶች ረዘም ያለ የመሸጎጫ ጊዜ ያዘጋጁ
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# ጎብኚው እንደ መነሻ ገጽ ግቤት የትኛውን የማይንቀሳቀስ ፋይል ያቀናብሩ
location = / {
  # ባዶ $botLang ፣ በተቀመጠው የቋንቋ ዱካ መሰረት የጎብኚ መዳረሻ እና አቅጣጫ መቀየር ማለት ነው።
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# ነጠላ ገጽ መተግበሪያ ውቅር
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## የማይንቀሳቀሱ ፋይሎችን ለመስቀል የነገር ማከማቻን ያዋቅሩ

የማይንቀሳቀሱ ፋይሎች በአገር ውስጥ ሊፈጠሩ ይችላሉ፣ ነገር ግን በጣም የተለመደው አካሄድ እነሱን ወደ ዕቃ ማከማቻ መስቀል ነው።

ከላይ የተዋቀረውን `out` ወደ :

```
out:
  - s3
```

ከዚያ ፣ `~/.config/i18n.site.yml` ያርትዑ እና የሚከተለውን ውቅር ያክሉ :

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

በቅንጅቱ ውስጥ, እባክዎን `i18n.site` ወደ `host:` በ `.i18n/htm/main.yml` እሴት ይለውጡ, ብዙ የነገሮች መደብሮች በ `s3` ስር ሊዋቀሩ ይችላሉ, እና `region` መስክ አማራጭ ነው (ብዙ የነገሮች መደብሮች ይህንን መስክ ማዘጋጀት አያስፈልጋቸውም).

ከዚያ ፕሮጀክቱን እንደገና ለማተም `i18n.site -n` ያሂዱ።

`~/.config/i18n.site.yml` ካሻሻሉ እና እንደገና መጫን ከፈለጉ፣ እባክዎ የሰቀላውን መሸጎጫ ለማጽዳት በፕሮጀክት ስር ማውጫ ውስጥ የሚከተለውን ትዕዛዝ ይጠቀሙ :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## የCloudflare ውቅር

የጎራ ስም ተስተናግዷል [cloudflare](//www.cloudflare.com)

### የልወጣ ህጎች

ከዚህ በታች እንደሚታየው የመቀየሪያ ደንቦችን ያክሉ።

![](//p.3ti.site/1725436822.avif)

የደንቡ ኮድ እንደሚከተለው ነው፣ እባክዎን "i18n.site" የሚለውን ኮድ ወደ የእርስዎ ጎራ ስም ያሻሽሉ፡

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### የመሸጎጫ ደንቦች

የመሸጎጫ ደንቦችን እንደሚከተለው ያክሉ።

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### የማዘዋወር ደንቦች

የመቀየሪያ ደንቦቹን እንደሚከተለው ያቀናብሩ፣ እባክዎን "i18n.site" የሚለውን ኮድ ወደ የእርስዎ ጎራ ስም ያሻሽሉ።

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

`URL redirect` ተለዋዋጭ ማዘዋወርን ይምረጡ፣ እባክዎን `/en` በማዘዋወር መንገድ `concat("/en",http.request.uri.path,".htm")` ላይ የፍለጋ ፕሮግራሞች እንዲያካትቱ ወደሚፈልጉት ነባሪ ቋንቋ ይቀይሩት።

## Baidu ኢንተለጀንት የደመና ውቅር

ለዋና ቻይና አገልግሎት መስጠት ከፈለጉ [Baidu Smart Cloud ን](//cloud.baidu.com) መጠቀም ይችላሉ።

መረጃው ወደ Baidu Object Storage ይሰቀላል እና ከBaidu የይዘት ስርጭት አውታረ መረብ ጋር የተያያዘ ነው።

በመቀጠል ስክሪፕቱን በ [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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
  // የምላሽ ራስጌዎች እንደ out.XXX = 'MSG';
})
```

`Debug` ጠቅ ያድርጉ እና ወደ አውታረ መረቡ በሙሉ አትም የሚለውን ጠቅ ያድርጉ።

![](//p.3ti.site/1725437754.avif)

## የላቀ አጠቃቀም፡ በክልል ጥራት ላይ በመመስረት ትራፊክ ያሰራጩ

በዋናው ቻይና ውስጥ አገልግሎቶችን መስጠት ከፈለጉ እና እንዲሁም `cloudflare` ነፃ ዓለም አቀፍ ትራፊክ ከፈለጉ `DNS` በክልል ጥራት መጠቀም ይችላሉ።

ለምሳሌ, [Huawei Cloud DNS](https://www.huaweicloud.com) በዋናው የቻይና ትራፊክ በባይዱ ስማርት ክላውድ እና አለምአቀፍ ትራፊክ `cloudflare` ውስጥ ሊያልፍ የሚችል ነፃ የክልል ትንተና ያቀርባል.

ውቅር ውስጥ ብዙ ወጥመዶች አሉ `cloudflare` እዚህ ጥቂት ነጥቦች ልብ ይበሉ :

### የጎራ ስም በሌላ `DNS` ውስጥ ተስተናግዷል፣ እንዴት `cloudflare` መጠቀም እንደሚቻል

መጀመሪያ የዘፈቀደ የጎራ ስም ከ `cloudflare` ጋር ያስሩ እና ከዚያ ዋናውን የጎራ ስም ከዚህ የጎራ ስም ጋር ለማያያዝ `SSL/TLS` → ብጁ ዶራሜን ይጠቀሙ።

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` በብጁ የጎራ ስም ሊደረስበት አይችልም።

አብሮ የተሰራው `cloudflare` በነገር ማከማቻ `R2` በተበጀ የጎራ ስም ሊደረስበት ስለማይችል፣ የማይንቀሳቀሱ ፋይሎችን ለማስቀመጥ የሶስተኛ ወገን ነገር ማከማቻ መጠቀም ያስፈልጋል።

የሶስተኛ ወገን እቃዎችን በ `cloudflare` ላይ እንዴት ማሰር እንደሚቻል ለማሳየት እዚህ እንደ ምሳሌ እንወስዳለን [backblaze.com](https://www.backblaze.com)

በ `backblaze.com` ላይ አንድ ባልዲ ይፍጠሩ ፣ ማንኛውንም ፋይል ይስቀሉ ፣ ፋይሉን ለማሰስ ጠቅ ያድርጉ እና የ `Friendly URL` ን የጎራ ስም ያግኙ ፣ እዚህ `f003.backblazeb2.com` ነው።

![](//p.3ti.site/1725440783.avif)

የጎራ ስሙን ከ `CNAME` ወደ `f003.backblazeb2.com` በ `cloudflare` ይለውጡ እና ተኪውን ያንቁ።

![](//p.3ti.site/1725440896.avif)

`cloudflare` ከ `SSL` → ምስጠራ ሁነታን አሻሽል፣ ወደ `Full` ተቀናብሯል።

![](//p.3ti.site/1725438572.avif)

ከታች እንደሚታየው የመቀየሪያ ደንቡን ያክሉ፣ መጀመሪያ ያስቀምጡት (የመጀመሪያው ዝቅተኛው ቅድሚያ አለው)

![](//p.3ti.site/1725443232.avif)

`Rewrite to` ተለዋዋጭ ምረጥ እና `your_bucketname` ለ `concat("/file/your_bucketname",http.request.uri.path)` ወደ ባልዲ ስምህ ቀይር።

በተጨማሪም, ከላይ ባለው `cloudflare` የልወጣ ህግ, `index.html` ወደ `file/your_bucketname/index.html` ተቀይሯል, እና ሌሎች ውቅሮች ተመሳሳይ ናቸው.

![](//p.3ti.site/1725441384.avif)