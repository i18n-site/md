# د لټون انجن اصلاح کول (SEO)

## اصول

`i18n.site` د غیر ریفریش واحد پاڼې جوړښت غوره کوي ترڅو د لټون لیست کولو اسانتیا لپاره، یو جلا جامد پاڼه او `sitemap.xml` به د کرالرانو لپاره پیدا شي.

کله چې د لاسرسي غوښتنې `User-Agent` د لټون انجن کرالر لخوا کارول کیږي، غوښتنه به د `302` له لارې جامد پاڼې ته لیږدول کیږي.

په جامد پاڼو کې، د دې پاڼې د مختلفو ژبو نسخو ته د لینکونو د ښودلو لپاره `link` وکاروئ، لکه :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## د محلي nginx ترتیب

د مثال په توګه په ډیمو پروژه کې د `.i18n/htm/main.yml` تشکیلاتو فایل واخلئ

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

مهرباني وکړئ لومړی د خپل ډومین نوم ته د پورته `host:` ارزښت بدل کړئ، لکه `xxx.com` .

بیا، `i18n.site -n` ، جامد پاڼه به په `out/main/htm` ډایرکټر کې رامینځته شي.

البته، تاسو کولی شئ د نورو ترتیب کولو فایلونه هم فعال کړئ، لکه لومړی د `.i18n/htm/dist.package.json` او `.i18n/htm/dist.yml` جوړولو لپاره د `main` ترتیب ته راجع کول.

بیا `i18n.site -n -c dist` چل کړئ ترڅو جامد پاڼه `out/dist/htm` ته تولید شي.

`nginx` لاندې ترتیب ته په اشارې سره تنظیم کیدی شي.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# د ډیر وخت لپاره د سرور کارګر سکریپټونه مه ذخیره کوئ
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# د نورو جامد سرچینو لپاره د اوږدې کیچ وختونه تنظیم کړئ
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# تنظیم کړئ کوم جامد فایل چې کرالر د کور پاڼې د ننوتلو په توګه کاروي
location = / {
  # که خالي $botLang وي، نو دا معنی لري چې د ټاکل شوي ژبې لارې سره سم د کرالر لاسرسی او بیرته راستنیدل
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# د واحد پاڼې غوښتنلیک ترتیب
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## د جامد فایلونو پورته کولو لپاره د اعتراض ذخیره تنظیم کړئ

جامد فایلونه په محلي توګه تولید کیدی شي، مګر یو ډیر عام طریقه دا ده چې دوی د اعتراض ذخیره کې پورته کړئ.

پورته ترتیب شوي `out` ته تغیر ورکړئ :

```
out:
  - s3
```

بیا، `~/.config/i18n.site.yml` ایډیټ کړئ او لاندې ترتیب اضافه کړئ :

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

په ترتیب کې، مهرباني وکړئ `i18n.site` په `.i18n/htm/main.yml` کې `host:` ارزښت ته بدل کړئ، ډیری اعتراض پلورنځي `s3` لاندې ترتیب کیدی شي، او `region` ساحه اختیاري ده (ډیری اعتراض پلورنځي د دې ساحې تنظیم کولو ته اړتیا نلري).

بیا د پروژې بیا خپرولو لپاره `i18n.site -n` چل کړئ.

که تاسو `~/.config/i18n.site.yml` تعدیل کړی وي او غواړئ چې بیا اپلوډ وکړئ، مهرباني وکړئ د پروژې روټ ډایرکټر کې لاندې کمانډ وکاروئ ترڅو د اپلوډ کیچ پاک کړئ :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## د کلاوډ فلیر ترتیب

د ډومین نوم کوربه [cloudflare](//www.cloudflare.com)

### د تبادلې قواعد

د تبادلې قواعد اضافه کړئ لکه څنګه چې لاندې ښودل شوي:

![](//p.3ti.site/1725436822.avif)

د قانون کوډ په لاندې ډول دی، مهرباني وکړئ د خپل ډومین نوم ته "i18n.site" کوډ بدل کړئ:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### د کیشینګ قواعد

د کیچ قواعد په لاندې ډول اضافه کړئ:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### د لارښوونې قواعد

د بیا لارښوونې قواعد په لاندې ډول تنظیم کړئ، مهرباني وکړئ خپل ډومین نوم ته کوډ "i18n.site" بدل کړئ

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

`URL redirect` متحرک ریډائریکشن غوره کړئ، مهرباني وکړئ `/en` د ریډائریکشن لار `concat("/en",http.request.uri.path,".htm")` کې هغه ډیفالټ ژبه ته بدل کړئ چې تاسو غواړئ د لټون انجنونه پکې شامل کړئ.

## د Baidu ذہین کلاوډ ترتیب

که تاسو د چین اصلي ځمکې ته خدمت چمتو کولو ته اړتیا لرئ، تاسو کولی شئ [د Baidu Smart Cloud څخه](//cloud.baidu.com) کار واخلئ.

ډاټا د Baidu آبجیکٹ ذخیره کې اپلوډ کیږي او د Baidu منځپانګې توزیع شبکې پورې تړلي دي.

بیا په لاندې ډول سکریپټ [EdgeJS خدمت](//console.bce.baidu.com/cdn/#/cdn/ejs/list) جوړ کړئ

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
  // د ځواب سرلیکونه د محصول ډیبګ کولو لپاره ټاکل کیدی شي، لکه out.XXX = 'MSG'؛
})
```

په `Debug` کلیک وکړئ، بیا په ټوله شبکه کې خپور کړئ کلیک وکړئ.

![](//p.3ti.site/1725437754.avif)

## پرمختللي کارول: د سیمه ایز حل پراساس ترافیک توزیع کړئ

که تاسو غواړئ په چین کې خدمتونه وړاندې کړئ او `cloudflare` وړیا نړیوال ترافیک هم غواړئ، تاسو کولی شئ د سیمه ایز حل سره `DNS` وکاروئ.

د مثال په توګه، [Huawei DNS](https://www.huaweicloud.com) وړیا سیمه ایز تحلیل وړاندې کوي، د کوم سره چې د چین اصلي ټرافیک د Baidu سمارټ کلاوډ له لارې تیریږي، او نړیوال ټرافیک کولی شي `cloudflare` څخه تیر شي.

د `cloudflare` په ترتیب کې ډیری نیمګړتیاوې شتون لري. دلته د یادولو لپاره یو څو ټکي دي :

### د ډومین نوم په نورو `DNS` کې کوربه شوی، د `cloudflare` کارولو څرنګوالی

لومړی د خپل سري ډومین نوم `cloudflare` سره وصل کړئ، او بیا `SSL/TLS` → دودیز ډومین نوم وکاروئ ترڅو اصلي ډومین نوم د دې ډومین نوم سره وصل کړئ.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` د دودیز ډومین نوم له لارې نشي لاسرسی کیدی

ځکه چې جوړ شوی `cloudflare` د آبجیکٹ ذخیره `R2` د دودیز شوي ډومین نوم لخوا نشي لاسرسی کیدی ، د دریمې ډلې آبجیټ ذخیره باید د جامد فایلونو ځای په ځای کولو لپاره وکارول شي.

دلته [backblaze.com](https://www.backblaze.com) د مثال په توګه اخلو ترڅو وښیو چې څنګه د دریمې ډلې توکي په `cloudflare` کې ساتل کیږي.

په `backblaze.com` کې یو بالټ جوړ کړئ، کوم فایل پورته کړئ، د فایل لټون کولو لپاره کلیک وکړئ، او د `Friendly URL` ډومین نوم ترلاسه کړئ، کوم چې دلته `f003.backblazeb2.com` دی.

![](//p.3ti.site/1725440783.avif)

د ډومین نوم له `CNAME` څخه تر `f003.backblazeb2.com` پورې په `cloudflare` کې بدل کړئ او پراکسي فعال کړئ.

![](//p.3ti.site/1725440896.avif)

د `cloudflare` څخه `SSL` → د کوډ کولو حالت بدل کړئ، `Full` ته ټاکل شوی

![](//p.3ti.site/1725438572.avif)

د تبادلې قاعده اضافه کړئ لکه څنګه چې لاندې ښودل شوي، لومړی یې وساتئ (لومړی ترټولو ټیټ لومړیتوب لري):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` متحرک وټاکئ او خپل د بالټ نوم ته په `concat("/file/your_bucketname",http.request.uri.path)` کې `your_bucketname` تعدیل کړئ.

برسېره پردې، د پورته `cloudflare` تبادلې قاعده کې، `index.html` په `file/your_bucketname/index.html` بدل شوی، او نور تشکیلات ورته پاتې دي.

![](//p.3ti.site/1725441384.avif)