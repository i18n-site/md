# باشکردنی بزوێنەری گەڕان (SEO)

## بنەما

`i18n.site` بیناسازی تاکە لاپەڕەی نوێنەکردنەوە دەگرێتەبەر بۆ ئەوەی ئیندێکسکردنی گەڕان ئاسانتر بێت، لاپەڕەیەکی ئیستاتیک و `sitemap.xml` جیاواز بۆ کراولەکان دروست دەکرێت.

کاتێک `User-Agent` ی داواکاری دەستڕاگەیشتن لەلایەن کراولەری بزوێنەری گەڕان بەکاردەهێنرێت، داواکارییەکە لە ڕێگەی `302` ەوە ئاراستە دەکرێتەوە بۆ لاپەڕەی ئیستاتیک.

لە لاپەڕە ئیستاتیکەکاندا `link` بەکاربهێنە بۆ ئاماژەدان بە بەستەرەکانی وەشانی زمانی جیاوازی ئەم لاپەڕەیە، وەک :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## ڕێکخستنی nginx ناوخۆیی

فایلە ڕێکخستنی `.i18n/htm/main.yml` لە پڕۆژەی دیمۆدا وەک نموونە وەربگرە

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

تکایە سەرەتا بەهای `host:` لە سەرەوە دەستکاری بکە بۆ ناوی دۆمەینەکەت، وەک `xxx.com` .

پاشان، `i18n.site -n` ، لاپەڕەی ئیستاتیک لە بەڕێوەبەرایەتی `out/main/htm` دروست دەکرێت.

بێگومان دەتوانیت فایلەکانی تری ڕێکخستن چالاک بکەیت، وەک سەرەتا ئاماژەکردن بە ڕێکخستنی `main` بۆ دروستکردنی `.i18n/htm/dist.package.json` و `.i18n/htm/dist.yml` .

پاشان `i18n.site -n -c dist` جێبەجێ بکە تا لاپەڕەی ئیستاتیک بۆ `out/dist/htm` دروست دەبێت.

دەتوانرێت `nginx` بە ئاماژەدان بە ڕێکخستنەکانی خوارەوە ڕێکبخرێت.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# سکریپتەکانی کارمەندی سێرڤەر بۆ ماوەیەکی زۆر لە کاش مەکە
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# کاتەکانی کاش درێژتر بۆ سەرچاوە ئیستاتیکەکانی تر دابنێ
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# ڕێکبخە کە کام فایلێکی ئیستاتیک کراولەر وەک هاتنە ژوورەوەی لاپەڕەی سەرەکی بەکاردەهێنێت
location = / {
  # ئەگەر $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# ڕێکخستنی بەرنامەی تاکە لاپەڕە
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## ڕێکخستنی هەڵگرتنی شتەکان بۆ بارکردنی فایلە ئیستاتیکەکان

دەتوانرێت فایلە ئیستاتیکەکان بە شێوەیەکی ناوخۆیی دروست بکرێت، بەڵام ڕێگەیەکی باوتر ئەوەیە کە باریان بکەیت بۆ هەڵگرتنی شتەکان.

دەستکاری `out` سەرەوە بکە کە لە سەرەوە ڕێکخراوە بۆ :

```
out:
  - s3
```

پاشان، دەستکاری `~/.config/i18n.site.yml` بکە و ئەم ڕێکخستنەی خوارەوە زیاد بکە :

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

لە ڕێکخستنەکەدا، تکایە `i18n.site` بگۆڕە بۆ بەهای `host:` لە `.i18n/htm/main.yml` ، دەتوانرێت چەندین کۆگای شت لە ژێر `s3` ڕێکبخرێت، و مەیدانی `region` هەڵبژاردەیە (زۆرێک لە کۆگاکانی شت پێویست ناکات ئەم بوارە دابنێن).

پاشان `i18n.site -n` جێبەجێ بکە بۆ دووبارە بڵاوکردنەوەی پڕۆژەکە.

ئەگەر دەستکاری `~/.config/i18n.site.yml` کردووە و دەتەوێت دووبارە باربکەیتەوە، تکایە ئەم فرمانەی خوارەوە لە ناوەڕۆکی ڕەگی پڕۆژەکەدا بەکاربهێنە بۆ پاککردنەوەی کاشی بارکردنەکە :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## ڕێکخستنی cloudflare

ناوی دۆمەین هۆست کراوە بۆ [cloudflare](//www.cloudflare.com)

### یاساکانی گۆڕانکاری

یاساکانی گۆڕین زیاد بکە وەک لە خوارەوە دیارە:

![](//p.3ti.site/1725436822.avif)

کۆدی یاساکە بەم شێوەیەیە، تکایە دەستکاری کۆدی "i18n.site" بکە بۆ ناوی دۆمەینەکەت:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### یاساکانی کاشکردن

یاساکانی کاش زیاد بکە بەم شێوەیە:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### یاساکانی ئاڕاستەکردنەوە

یاساکانی ئاڕاستەکردنەوە بەم شێوەیە دابنێ، تکایە کۆدی "i18n.site" دەستکاری بکە بۆ ناوی دۆمەینەکەت

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

`URL redirect` ئاڕاستەکردنەوەی داینامیکی هەڵبژێرە، تکایە دەستکاری `/en` بکە لە ڕێڕەوی ئاڕاستەکردنەوە `concat("/en",http.request.uri.path,".htm")` بۆ ئەو زمانە پێشوەختەیەی کە دەتەوێت بزوێنەری گەڕان لەخۆی بگرێت.

## ڕێکخستنی هەوری زیرەکی Baidu

ئەگەر پێویستت بە پێشکەشکردنی خزمەتگوزارییە بۆ چین، دەتوانیت [Baidu Smart Cloud](//cloud.baidu.com) بەکاربهێنیت.

داتاکان باردەکرێن بۆ هەڵگرتنی شتەکانی بایدو و بەستراوەتەوە بە تۆڕی دابەشکردنی ناوەڕۆکی بایدو.

پاشان سکریپتەکە لە [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) دروست بکە بەم شێوەیە

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
  // دەتوانیت سەردێڕی وەڵامەکە ڕێکبخەیت بۆ چاککردنی دەرچوونەکە، وەک out.XXX = 'MSG';
})
```

کلیک لە `Debug` بکە، پاشان کلیک لە Publish بکە بۆ تەواوی تۆڕەکە.

![](//p.3ti.site/1725437754.avif)

## بەکارهێنانی پێشکەوتوو: دابەشکردنی ترافیک لەسەر بنەمای چارەسەری ناوچەیی

ئەگەر دەتەوێت خزمەتگوزاری پێشکەش بکەیت لە چین و هەروەها دەتەوێت `cloudflare` هاتوچۆی نێودەوڵەتی بێبەرامبەر، دەتوانیت `DNS` بە ڕوونی ناوچەیی بەکاربهێنیت.

بۆ نموونە، [DNS کلاود](https://www.huaweicloud.com) شیکاری ناوچەیی بەخۆڕایی پێشکەش دەکات، کە بەهۆیەوە هاتوچۆی چینی سەرەکی دەتوانێت لە ڕێگەی بایدو سمارت کلاودەوە تێپەڕێت، و هاتوچۆی نێودەوڵەتی دەتوانێت بە `cloudflare` تێپەڕێت.

چەندین تەڵە لە ڕێکخستنی `cloudflare` لێرەدا چەند خاڵێک دەخەینەڕوو کە دەبێت تێبینی بکەین :

### ناوی دۆمەینەکە لە `DNS` تردا هۆست کراوە، چۆنیەتی بەکارهێنانی `cloudflare`

سەرەتا ناوی دۆمەینێکی ئارەزوومەندانە بە `cloudflare` ببەستە، و پاشان `SSL/TLS` → ناوی دۆمەینی تایبەت بەکاربهێنە بۆ پەیوەستکردنی ناوی دۆمەینی سەرەکی بەم ناوە دۆمەینە.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` ناتوانرێت لە ڕێگەی ناوی دۆمەینی تایبەتمەندەوە دەستی پێ بگات

لەبەر ئەوەی هەڵگرتنی شتە `cloudflare` نراوەکان `R2` ناتوانرێت بە ناوی دۆمەینی تایبەتمەند دەستی پێ بگات، هەڵگرتنی شتەکانی لایەنی سێیەم پێویستە بۆ دانانی پەڕگەی ئیستاتیک بەکاربهێنرێت.

`cloudflare` [backblaze.com](https://www.backblaze.com)

سەتڵێک لە `backblaze.com` دروست بکە، هەر فایلێک باربکە، کلیک بکە بۆ گەڕان بە فایلەکەدا، و ناوی دۆمەینی `Friendly URL` بەدەست بهێنە کە لێرەدا `f003.backblazeb2.com` ە.

![](//p.3ti.site/1725440783.avif)

ناوی دۆمەینەکە لە `CNAME` بگۆڕە بۆ `f003.backblazeb2.com` لە `cloudflare` و پرۆکسی چالاک بکە.

![](//p.3ti.site/1725440896.avif)

دەستکاری `cloudflare` لە `SSL` → دۆخی کۆدکردن، دانراوە بۆ `Full`

![](//p.3ti.site/1725438572.avif)

یاسای گۆڕین زیاد بکە وەک لە خوارەوە دیارە، لە پێشەوە بیخە (یەکەمیان کەمترین ئەولەویەتی هەیە):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` داینامیکی هەڵبژێرە و دەستکاری `your_bucketname` لە `concat("/file/your_bucketname",http.request.uri.path)` بکە بۆ ناوی سەتڵەکەت.

سەرەڕای ئەوەش، لە یاسای گۆڕینی `cloudflare` لە سەرەوە، `index.html` دەگۆڕدرێت بۆ `file/your_bucketname/index.html` ، و ڕێکخستنەکانی تر وەک خۆیان دەمێننەوە.

![](//p.3ti.site/1725441384.avif)