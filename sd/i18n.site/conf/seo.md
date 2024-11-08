# سرچ انجڻ جي اصلاح (SEO)

## اصول

`i18n.site` هڪ غير ريفريش سنگل پيج آرڪيٽيڪچر کي اپنائڻ لاءِ سرچ انڊيڪسنگ کي آسان ڪرڻ لاءِ، هڪ الڳ جامد صفحو ۽ `sitemap.xml` ٺاهيا ويندا ڪرالرز لاءِ.

جڏهن رسائي جي درخواست جو `User-Agent` سرچ انجڻ ڪريلر استعمال ڪيو ويندو، درخواست کي `302` ذريعي جامد صفحي ڏانهن منتقل ڪيو ويندو.

جامد صفحن تي، `link` استعمال ڪريو ھن صفحي جي مختلف ٻولين جي ورجن لاءِ لنڪس ڏيکارڻ لاءِ، جھڙوڪ :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## مقامي nginx ترتيب

مثال طور ڊيمو پروجيڪٽ ۾ `.i18n/htm/main.yml` ترتيب واري فائل وٺو

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

مھرباني ڪري پھريون `host:` جي قدر کي پنھنجي ڊومين جي نالي ۾ تبديل ڪريو، جھڙوڪ `xxx.com` .

پوء، `i18n.site -n` ، جامد صفحو `out/main/htm` ڊاريڪٽري ۾ ٺاھيو ويندو.

يقينن، توھان ٻين ڪنفيگريشن فائلن کي پڻ چالو ڪري سگھو ٿا، جھڙوڪ `.i18n/htm/dist.package.json` ۽ `.i18n/htm/dist.yml` ٺاھڻ لاءِ پھرين `main` جي ٺاھ جوڙ جو حوالو ڏيو.

پوءِ `i18n.site -n -c dist` ھلايو ته جيئن جامد صفحو `out/dist/htm` ڏانھن ٺاھيو ويندو.

`nginx` هيٺ ڏنل ترتيب جي حوالي سان سيٽ ڪري سگھجي ٿو.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# تمام گهڻي عرصي تائين سرور ورڪر اسڪرپٽ کي ڪيش نه ڪريو
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# ٻين جامد وسيلن لاء ڊگھو ڪيش وقت مقرر ڪريو
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# سيٽ ڪريو جامد فائل جيڪو ڪريلر استعمال ڪندو هوم پيج جي داخلا طور
location = / {
  # جيڪڏهن $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# سنگل پيج ايپليڪيشن جي ٺاھ جوڙ
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## جامد فائلن کي اپلوڊ ڪرڻ لاءِ اعتراض جي اسٽوريج کي ترتيب ڏيو

جامد فائلون مقامي طور تي ٺاهي سگھجن ٿيون، پر ھڪڙو وڌيڪ عام طريقو آھي انھن کي اپلوڊ ڪرڻ لاءِ اعتراض واري اسٽوريج تي.

مٿئين ترتيب ڏنل `out` تبديل ڪريو :

```
out:
  - s3
```

پوء، `~/.config/i18n.site.yml` تبديل ڪريو ۽ ھيٺ ڏنل ترتيب شامل ڪريو :

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

ترتيب ۾، مھرباني ڪري `i18n.site` `host:` جي قيمت ۾ `.i18n/htm/main.yml` ۾ تبديل ڪريو، گھڻن آبجیکٹ اسٽورن کي `s3` ھيٺان ترتيب ڏئي سگھجي ٿو، ۽ `region` فيلڊ اختياري آھي (ڪيترائي اعتراض اسٽورن کي ھن فيلڊ کي سيٽ ڪرڻ جي ضرورت نه آھي).

پوء هلايو `i18n.site -n` منصوبي کي ٻيهر شايع ڪرڻ لاء.

جيڪڏھن توھان تبديل ڪيو آھي `~/.config/i18n.site.yml` ۽ ٻيهر اپلوڊ ڪرڻ چاھيو ٿا، مھرباني ڪري ھيٺ ڏنل حڪم استعمال ڪريو پروجيڪٽ جي روٽ ڊاريڪٽري ۾ اپلوڊ ڪيش کي صاف ڪرڻ لاءِ :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## ڪلائوڊ فليئر ترتيب

ڊومين جو نالو [cloudflare](//www.cloudflare.com)

### تبادلي جا ضابطا

تبادلي جا ضابطا شامل ڪريو جيئن ھيٺ ڏيکاريل آھي:

![](//p.3ti.site/1725436822.avif)

ضابطي جو ڪوڊ ھيٺ ڏنل آھي، مھرباني ڪري پنھنجي ڊومين جي نالي ۾ ڪوڊ "i18n.site" کي تبديل ڪريو:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### ڪيشنگ ضابطا

ھيٺ ڏنل ڪيش ضابطا شامل ڪريو:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### ريڊائريڪٽ ضابطا

ريڊائريڪشن جا ضابطا ھيٺ ڏنل سيٽ ڪريو، مھرباني ڪري پنھنجي ڊومين جي نالي ۾ ڪوڊ "i18n.site" کي تبديل ڪريو

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

`URL redirect` منتخب ڪريو متحرڪ ريڊائريڪشن، مھرباني ڪري `/en` ريڊائريڪشن واٽ `concat("/en",http.request.uri.path,".htm")` ۾ تبديل ڪريو ڊفالٽ ٻولي ڏانھن جنھن کي توھان چاھيو ٿا ته سرچ انجڻ شامل ڪن.

## Baidu Intelligent Cloud Configuration

جيڪڏهن توهان کي سرزمين چين ۾ خدمتون مهيا ڪرڻ گهرجن، ته توهان [Baidu Smart Cloud](//cloud.baidu.com) استعمال ڪري سگهو ٿا.

ڊيٽا Baidu Object Storage تي اپلوڊ ڪئي وئي آهي ۽ Baidu Content Distribution Network تي پابند آهي.

پوء اسڪرپٽ ٺاهيو [EdgeJS سروس](//console.bce.baidu.com/cdn/#/cdn/ejs/list) هيٺ ڏنل

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
  // جوابي هيڊر سيٽ ڪري سگھجن ٿا ڊيبگ آئوٽ پٽ لاءِ، جيئن out.XXX = 'MSG'؛
})
```

ڪلڪ ڪريو `Debug` ، پوء ڪلڪ ڪريو شايع ڪريو پوري نيٽ ورڪ تي.

![](//p.3ti.site/1725437754.avif)

## ترقي يافته استعمال: علائقائي قرارداد جي بنياد تي ٽرئفڪ کي ورهايو

جيڪڏهن توهان سرزمين چين ۾ خدمتون مهيا ڪرڻ چاهيو ٿا ۽ `cloudflare` مفت بين الاقوامي ٽرئفڪ پڻ چاهيو ٿا، توهان استعمال ڪري سگهو ٿا `DNS` علائقائي قرارداد سان.

مثال طور، [DNS Cloud](https://www.huaweicloud.com) مفت علائقائي تجزيو مهيا ڪري ٿو، جنهن سان مکيه زميني چيني ٽرئفڪ Baidu Smart Cloud ذريعي ٿي سگهي ٿي، ۽ بين الاقوامي ٽرئفڪ `cloudflare` ذريعي ٿي سگهي ٿي.

`cloudflare` جي ٺاھ جوڙ ۾ ڪيترائي نقص آھن. ھتي نوٽ ڪرڻ لاءِ ڪجھ نقطا آھن :

### ڊومين جو نالو ٻين ۾ ميزباني ڪيل آهي `DNS` ، ڪيئن استعمال ڪجي `cloudflare`

پهرين هڪ خودمختيار ڊومين جو نالو `cloudflare` سان ڳنڍيو، ۽ پوء استعمال ڪريو `SSL/TLS` → ڪسٽم ڊومين جو نالو مکيه ڊومين جو نالو هن ڊومين جي نالي سان ڳنڍڻ لاء.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` ڪسٽم ڊومين جي نالي ذريعي رسائي نه ٿو ڪري سگھجي

ڇاڪاڻ ته بلٽ `cloudflare` ان آبجیکٹ اسٽوريج `R2` تائين رسائي نه ٿي سگھي ڪسٽمائيز ڊومين جي نالي سان، هڪ ٽئين پارٽي اعتراض اسٽوريج کي استعمال ڪرڻ جي ضرورت آهي جامد فائلن کي رکڻ لاءِ.

[backblaze.com](https://www.backblaze.com) اسان هڪ مثال طور وٺون ٿا ته ڪئين ٽئين پارٽي جي شين کي `cloudflare` تي محفوظ ڪيو وڃي.

`backblaze.com` تي هڪ بالٽ ٺاهيو، ڪا به فائل اپلوڊ ڪريو، فائل کي براؤز ڪرڻ لاءِ ڪلڪ ڪريو، ۽ `Friendly URL` جو ڊومين نالو حاصل ڪريو، جيڪو هتي `f003.backblazeb2.com` آهي.

![](//p.3ti.site/1725440783.avif)

ڊومين جو نالو تبديل ڪريو `CNAME` کان `f003.backblazeb2.com` تائين `cloudflare` ۽ پراکسي کي فعال ڪريو.

![](//p.3ti.site/1725440896.avif)

تبديل ڪريو `cloudflare` مان `SSL` → انڪرپشن موڊ، سيٽ ڪريو `Full`

![](//p.3ti.site/1725438572.avif)

تبادلي جو قاعدو شامل ڪريو جيئن ھيٺ ڏيکاريل آھي، ان کي پھريون رکو (پهريون ھڪڙي کي گھٽ ترجيح آھي):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` منتخب ڪريو متحرڪ ۽ تبديل ڪريو `your_bucketname` ۾ `concat("/file/your_bucketname",http.request.uri.path)` پنھنجي بالٽ جي نالي ۾.

ان کان علاوه، مٿي ڏنل `cloudflare` تبادلي واري قاعدي ۾، `index.html` کي `file/your_bucketname/index.html` ۾ تبديل ڪيو ويو آهي، ۽ ٻيون ترتيبون ساڳيون رهنديون آهن.

![](//p.3ti.site/1725441384.avif)