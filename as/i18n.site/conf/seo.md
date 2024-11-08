# সন্ধান ইঞ্জিন অনুকূলন (SEO)

## নীতি

`i18n.site` এ এটা নন-ৰিফ্ৰেছ একক পৃষ্ঠা স্থাপত্য গ্ৰহণ কৰে সন্ধান সূচীকৰণ সহজ কৰিবলে, এটা পৃথক স্থিতিশীল পৃষ্ঠা আৰু `sitemap.xml` ক্ৰ'লাৰসমূহৰ বাবে সৃষ্টি কৰা হ'ব।

যেতিয়া অভিগম অনুৰোধৰ `User-Agent` সন্ধান ইঞ্জিন ক্ৰ'লাৰে ব্যৱহাৰ কৰে, অনুৰোধক `302` ৰ যোগেদি স্থিতিশীল পৃষ্ঠালৈ পুনৰনিৰ্দেশিত কৰা হ'ব।

স্থিতিশীল পৃষ্ঠাসমূহত, এই পৃষ্ঠাৰ বিভিন্ন ভাষা সংস্কৰণসমূহৰ সংযোগসমূহ সূচাবলৈ `link` ব্যৱহাৰ কৰক, যেনে :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## স্থানীয় nginx বিন্যাস

ডেমো প্ৰকল্পত `.i18n/htm/main.yml` বিন্যাস নথিপত্ৰক উদাহৰণ হিচাপে লওক

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

অনুগ্ৰহ কৰি প্ৰথমে ওপৰৰ `host:` ৰ মান আপোনাৰ ডমেইন নামলৈ পৰিবৰ্তন কৰক, যেনে `xxx.com` ।

তাৰ পিছত, `i18n.site -n` , স্থিতিশীল পৃষ্ঠাটো `out/main/htm` ডাইৰেকটৰীত সৃষ্টি কৰা হ'ব।

অৱশ্যেই, আপুনি অন্য বিন্যাস নথিপত্ৰসমূহো সামৰ্থবান কৰিব পাৰে, যেনে প্ৰথমে `main` ৰ বিন্যাসক উল্লেখ কৰি `.i18n/htm/dist.package.json` আৰু `.i18n/htm/dist.yml` সৃষ্টি কৰিবলে ।

তাৰ পিছত `i18n.site -n -c dist` চলাওক যাতে স্থিতিশীল পৃষ্ঠাটো `out/dist/htm` লৈ সৃষ্টি হয়।

`nginx` তলৰ বিন্যাসৰ উল্লেখ কৰি সংহতি কৰিব পাৰি ।

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# চাৰ্ভাৰ ৱৰ্কাৰ স্ক্ৰিপ্টসমূহ বেছি সময়ৰ বাবে কেশ্ব নকৰিব
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# অন্য স্থিতিশীল সম্পদসমূহৰ বাবে দীঘলীয়া কেশ্ব সময় নিৰ্ধাৰণ কৰক
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# ক্ৰ'লাৰে কোনটো স্থিতিশীল নথিপত্ৰ হোমপেজ প্ৰবিষ্ট হিচাপে ব্যৱহাৰ কৰে নিৰ্ধাৰণ কৰক
location = / {
  # যদি $botLang খালী নহয়, ইয়াৰ অৰ্থ হ'ল নিৰ্ধাৰিত ভাষা পথ অনুসৰি ক্ৰ'লাৰ অভিগম আৰু পুনৰনিৰ্দেশনা
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# একক পৃষ্ঠা এপ্লিকেচন বিন্যাস
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## স্থিতিশীল নথিপত্ৰসমূহ আপল'ড কৰাৰ বাবে বস্তু সংৰক্ষণ বিন্যাস কৰক

ষ্টেটিক ফাইলসমূহ স্থানীয়ভাৱে সৃষ্টি কৰিব পাৰি, কিন্তু এটা অধিক সাধাৰণ পদ্ধতি হ'ল সিহতক বস্তু সংৰক্ষণলৈ আপল'ড কৰা।

ওপৰত বিন্যাস কৰা `out` লৈ পৰিবৰ্তন কৰক :

```
out:
  - s3
```

তাৰ পিছত, `~/.config/i18n.site.yml` সম্পাদনা কৰক আৰু নিম্নলিখিত বিন্যাস যোগ কৰক :

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

বিন্যাসত, অনুগ্ৰহ কৰি `i18n.site` `.i18n/htm/main.yml` ত `host:` ৰ মানলৈ সলনি কৰক, একাধিক বস্তু সংৰক্ষণক `s3` অন্তৰ্গত বিন্যাস কৰিব পাৰি, আৰু `region` ক্ষেত্ৰ বৈকল্পিক (বহু বস্তু সংৰক্ষণে এই ক্ষেত্ৰ সংহতি কৰাৰ প্ৰয়োজন নাই) ।

তাৰ পিছত প্ৰকল্পটো পুনৰ প্ৰকাশ কৰিবলৈ `i18n.site -n` চলাওক।

যদি আপুনি `~/.config/i18n.site.yml` পৰিবৰ্তন কৰিছে আৰু পুনৰায় আপল'ড কৰিব বিচাৰে, অনুগ্ৰহ কৰি প্ৰকল্পৰ ৰূট পঞ্জিকাত নিম্নলিখিত আদেশ ব্যৱহাৰ কৰক আপল'ড কেশ্ব পৰিষ্কাৰ কৰিবলে :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## ক্লাউডফ্লেয়াৰ বিন্যাস

ডমেইন নাম হ'ষ্ট কৰা হৈছে [cloudflare](//www.cloudflare.com)

### ৰূপান্তৰৰ নিয়ম

তলত দেখুওৱাৰ দৰে ৰূপান্তৰ নিয়মসমূহ যোগ কৰক:

![](//p.3ti.site/1725436822.avif)

নিয়ম ক'ড তলত দিয়া ধৰণৰ, অনুগ্ৰহ কৰি ক'ড "i18n.site" আপোনাৰ ডমেইন নামলৈ পৰিবৰ্তন কৰক:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### কেচিং নিয়ম

কেশ্ব নিয়মসমূহ নিম্নলিখিত ধৰণে যোগ কৰক:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### নিয়মসমূহ পুনৰনিৰ্দেশিত

পুনঃনিৰ্দেশ নিয়মসমূহ নিম্নলিখিত ধৰণে নিৰ্ধাৰণ কৰক, অনুগ্ৰহ কৰি "i18n.site" ক'ড আপোনাৰ ডমেইন নামলৈ পৰিবৰ্তন কৰক

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

`URL redirect` গতিশীল পুনঃনিৰ্দেশ নিৰ্ব্বাচন কৰক, অনুগ্ৰহ কৰি পুনঃনিৰ্দেশ পথ `concat("/en",http.request.uri.path,".htm")` ত `/en` আপুনি সন্ধান ইঞ্জিনসমূহে অন্তৰ্ভুক্ত কৰিব বিচৰা অবিকল্পিত ভাষালৈ পৰিবৰ্তন কৰক।

## Baidu বুদ্ধিমান ক্লাউড বিন্যাস

যদি আপুনি মূল চীনলৈ সেৱা আগবঢ়াব লাগে, তেন্তে আপুনি [Baidu Smart Cloud](//cloud.baidu.com) ব্যৱহাৰ কৰিব পাৰে।

তথ্যক Baidu বস্তু সংৰক্ষণলৈ আপলোড কৰা হয় আৰু Baidu বিষয়বস্তু বিতৰণ নেটৱৰ্কলৈ বান্ধি দিয়া হয়।

তাৰ পিছত [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) ত লিপিটো তলত দিয়া ধৰণে সৃষ্টি কৰক

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
  // সঁহাৰি হেডাৰসমূহক আউটপুট ডিবাগ কৰিবলে সংহতি কৰিব পাৰি, যেনে out.XXX = 'MSG';
})
```

`Debug` ক্লিক কৰক, তাৰ পিছত সমগ্ৰ নে'টৱৰ্কলৈ প্ৰকাশ কৰক ক্লিক কৰক।

![](//p.3ti.site/1725437754.avif)

## উন্নত ব্যৱহাৰ: আঞ্চলিক ৰিজ’লিউচনৰ ওপৰত ভিত্তি কৰি ট্ৰেফিক বিতৰণ কৰা

যদি আপুনি মূল চীনত সেৱা আগবঢ়াব বিচাৰে আৰু লগতে `cloudflare` বিনামূলীয়া আন্তঃৰাষ্ট্ৰীয় ট্ৰেফিক বিচাৰে, আপুনি আঞ্চলিক ৰিজ'লিউচনৰ সৈতে `DNS` ব্যৱহাৰ কৰিব পাৰে।

উদাহৰণস্বৰূপে, [হুৱেই DNS](https://www.huaweicloud.com) বিনামূলীয়া আঞ্চলিক বিশ্লেষণ প্ৰদান কৰে, যাৰ সৈতে মূল চীনৰ যাতায়ত বাইডু স্মাৰ্ট ক্লাউডৰ জৰিয়তে যাব পাৰে, আৰু আন্তঃৰাষ্ট্ৰীয় ট্ৰেফিক `cloudflare` মাজেৰে যাব পাৰে।

`cloudflare` ৰ বিন্যাসত বহুতো ফান্দ আছে। ইয়াত মন কৰিবলগীয়া কেইটামান কথা আছে :

### ডমেইন নামটো অন্য `DNS` ত হ'ষ্ট কৰা হৈছে, `cloudflare` কেনেকৈ ব্যৱহাৰ কৰিব লাগে

প্ৰথমে এটা ইচ্ছাকৃত ডমেইন নাম `cloudflare` লে বান্ধক, আৰু তাৰ পিছত এই ডমেইন নামৰ সৈতে মূল ডমেইন নাম সংযুক্ত কৰিবলে `SSL/TLS` → স্বনিৰ্বাচিত ডমেইন নাম ব্যৱহাৰ কৰক।

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` এটা স্বনিৰ্বাচিত ডমেইন নামৰ যোগেদি অভিগম কৰিব নোৱাৰি

যিহেতু `cloudflare` বস্তু সংৰক্ষণ `R2` এটা স্বনিৰ্বাচিত ডমেইন নামৰ দ্বাৰা অভিগম কৰিব নোৱাৰি, এটা তৃতীয়-পক্ষ বস্তু সংৰক্ষণ স্থিতিশীল নথিপত্ৰসমূহ স্থাপন কৰিবলে ব্যৱহাৰ কৰিব লাগিব।

ইয়াত আমি `cloudflare` ত সংৰক্ষণ কৰিবলগীয়া তৃতীয়-পক্ষৰ বস্তুবোৰ কেনেকৈ বান্ধিব লাগে তাক দেখুৱাবলৈ [backblaze.com](https://www.backblaze.com)

`backblaze.com` ত এটা বাকেট সৃষ্টি কৰক, যিকোনো ফাইল আপল'ড কৰক, ফাইলটো ব্ৰাউজ কৰিবলৈ ক্লিক কৰক, আৰু `Friendly URL` ৰ ডমেইন নাম পাওক, যিটো ইয়াত `f003.backblazeb2.com` ।

![](//p.3ti.site/1725440783.avif)

ডমেইন নাম `cloudflare` ত `CNAME` ৰ পৰা `f003.backblazeb2.com` লৈ সলনি কৰক আৰু প্ৰক্সি সামৰ্থবান কৰক।

![](//p.3ti.site/1725440896.avif)

`SSL` ৰ `cloudflare` পৰিবৰ্তন কৰক → ইনক্ৰিপষণ ধৰণ, `Full` লে সংহতি কৰক

![](//p.3ti.site/1725438572.avif)

তলত দেখুওৱাৰ দৰে ৰূপান্তৰ নিয়মটো যোগ কৰক, ইয়াক প্ৰথমে ৰাখক (প্ৰথমটোৰ অগ্ৰাধিকাৰ সৰ্বনিম্ন):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` গতিশীল নিৰ্ব্বাচন কৰক আৰু `concat("/file/your_bucketname",http.request.uri.path)` ত `your_bucketname` আপোনাৰ বাকেটৰ নামলৈ পৰিবৰ্তন কৰক ।

ইয়াৰ উপৰিও, ওপৰৰ `cloudflare` ৰূপান্তৰ নিয়মত, `index.html` `file/your_bucketname/index.html` লৈ সলনি কৰা হয়, আৰু অন্য বিন্যাসসমূহ একেই থাকে।

![](//p.3ti.site/1725441384.avif)