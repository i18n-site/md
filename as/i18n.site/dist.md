# নিয়োগ আৰু অনলাইন

`i18n.site` এ এটা [একক-পৃষ্ঠা এপ্লিকেচন](https://developer.mozilla.org/docs/Glossary/SPA) স্থাপত্য গ্ৰহণ কৰে, আৰু ৱেবছাইট প্ৰৱেশ পৃষ্ঠা আৰু ৱেবছাইট বিষয়বস্তু স্বতন্ত্ৰভাৱে মোতায়েন কৰা হয়।

ওপৰৰ অনুবাদ চলোৱাৰ পিছত, ডাইৰেকটৰি `htm` আৰু `v` `md/out/dev` ডাইৰেকটৰিৰ অন্তৰ্গত সৃষ্টি কৰা হব।

ইয়াত, `dev` ৰ অৰ্থ হৈছে ইয়াক `.i18n/htm/dev.yml` বিন্যাস নথিপত্ৰৰ ওপৰত ভিত্তি কৰি নিৰ্মাণ কৰা হৈছে ।

`dev` ডাইৰেকটৰি :

`htm` ডাইৰেকটৰী হৈছে ৱেবছাইটৰ প্ৰৱেশ পৃষ্ঠা।

`v` ডাইৰেকটৰীত সংস্কৰণ নম্বৰৰ সৈতে ৱেবছাইটৰ বিষয়বস্তু থাকে।

স্থানীয় পূৰ্বদৰ্শনে সংস্কৰণ সংখ্যাৰ প্ৰতি কোনো গুৰুত্ব নিদিয়ে আৰু সকলো নথিপত্ৰ `out/dev/v/0.1.0` পঞ্জিকালৈ কপি কৰিব ।

অফিচিয়েল মুক্তিৰ বাবে, পৰিবৰ্তন কৰা ফাইলসমূহক নতুন সংস্কৰণ নম্বৰ পঞ্জিকালৈ কপি কৰা হ'ব।

## `-c` সৈতে বিন্যাস নথিপত্ৰ ধাৰ্য্য কৰক

বিভিন্ন বিন্যাস নথিপত্ৰই `out` পঞ্জিকাত সংশ্লিষ্ট পঞ্জিকা সৃষ্টি কৰিব ।

উদাহৰণস্বৰূপ, `.i18n/htm/main.yml` এ `out/main` পঞ্জিকা সৃষ্টি কৰিব।

`dev.yml` আৰু `main.yml` অবিকল্পিত বিন্যাসসমূহ।

`dev` হৈছে `development` ৰ সংক্ষিপ্তকৰণ, উন্নয়ন পৰিৱেশ সূচায়, স্থানীয় পূৰ্বদৰ্শনৰ বাবে ব্যৱহাৰ কৰা, আৰু ই অবিকল্পিত বিন্যাস নথিপত্ৰও ।
`ol` হৈছে `online` ৰ সংক্ষিপ্তকৰণ, যিয়ে অনলাইন `npm` `-n` , যি অফিচিয়েল মুক্তিৰ বাবে ব্যৱহাৰ কৰা হয়।

আপুনি অন্য বিন্যাস নথিপত্ৰও সৃষ্টি কৰিব পাৰে ব্যৱহাৰ কৰিবলে বিন্যাস নথিপত্ৰৰ নাম ধাৰ্য্য কৰিবলে আদেশ শাৰীত `--htm_conf` ব্যৱহাৰ কৰক:

উদাহৰণ স্বৰূপে:
```
i18n.site --htm_conf dist --save
```

ইয়াত `--save` আপডেইট উন্মোচন সংস্কৰণ সংখ্যাক প্ৰতিনিধিত্ব কৰে।

## <a rel=id href="#npm" id="npm"></a> npmjs.com ত বিষয়বস্তু প্ৰকাশ কৰক

[npmjs.com](//npmjs.com)[](/i18n.site/feature#ha)

### npm & পোষ্ট কৰক

`nodejs` সংস্থাপন কৰক, `npm login` ৰ সৈতে লগ ইন কৰক ।

`md/.i18n/htm/main.yml` সম্পাদনা কৰক আৰু [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` মান সলনি কৰক আপোনাৰ নিজৰ `npm` সৰঞ্জামৰ নাম [npmjs.com](//npmjs.com) ।

তাৰ পিছত `md/.i18n/htm/main.package.json` পৰিবৰ্তন কৰক

অনুবাদ আৰু প্ৰকাশ কৰিবলে `md` পঞ্জিকাত `i18n.site --npm` বা `i18n.site -n` চলাওক।

যদি আপুনি প্ৰকাশ কৰিবলে এটা অবিৰত সংহতি পৰিৱেশ ব্যৱহাৰ কৰে, `nodejs` সংস্থাপন কৰাৰ প্ৰয়োজন নাই । মাত্ৰ লগ-ইন আৰু প্ৰকাশৰ অনুমতিসমূহ `~/.npmrc` পৰিৱেশলৈ কপি কৰক ।

যদি আপুনি `main.yml` ত `v:` ৰ পেকেইজৰ নাম পৰিবৰ্তন কৰে, অনুগ্ৰহ কৰি **প্ৰথমে `.i18n/v/main` মচি পেলোৱাটো নিশ্চিত কৰক** আৰু তাৰ পিছত ইয়াক প্ৰকাশ কৰক ।

#### npm দ্বাৰা প্ৰকাশিত প্ৰক্সি চাৰ্ভাৰ

যদি মূল চীনৰ ব্যৱহাৰকাৰীসকলে নে'টৱৰ্ক সমস্যাৰ সন্মুখীন হয় আৰু `npm` সৰঞ্জাম প্ৰকাশ কৰিব নোৱাৰে, তেওঁলোকে প্ৰক্সি চাৰ্ভাৰ বিন্যাস কৰিবলে পৰিৱেশ চলক `https_proxy` সংহতি কৰিব পাৰে।

ধৰি লওক যে আপোনাৰ প্ৰক্সি চাৰ্ভাৰ পৰ্ট `7890` , আপুনি লিখিব পাৰে:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## স্ব-হ'ষ্ট কৰা বিষয়বস্তু

যদি আপুনি বিষয়বস্তু স্ব-হ'ষ্ট কৰিব বিচাৰে, প্ৰথমে `md/.i18n/htm/main.yml` সম্পাদনা কৰক আৰু `v: //unpkg.com/i18n.site` আপোনাৰ URL উপসৰ্গলৈ সলনি কৰক, যেনে `v: //i18n-v.xxx.com` ।

`md` পঞ্জিকা সুমুৱাওক আৰু চলাওক

```
i18n.site --htm_conf ol --save
```

বা সংক্ষিপ্ত ৰূপ

```
i18n.site -c ol -s
```

তাৰ পিছত, `md/out/main/v` পঞ্জিকাত থকা বিষয়বস্তুক `v:` ত সংহতি কৰা URL উপসৰ্গ পথলৈ বিন্যাস কৰক ।

শেষত, **`/.v` পৰা `1s` লৈ শেষ হোৱা পথৰ কেশ্ব সময় বিন্যাস কৰক** , অন্যথা নতুনকৈ মুকলি কৰা বিষয়বস্তু তৎক্ষণাত অভিগম কৰিব নোৱাৰি ।

অন্য পথসমূহৰ বাবে কেশ্ব সময় এবছৰ বা তাতকৈ অধিকলৈ সংহতি কৰিব পাৰি অপ্ৰয়োজনীয় অনুৰোধসমূহ হ্ৰাস কৰিবলে।

## s3 লৈ বিষয়বস্তু হ'ষ্ট কৰক

বিষয়বস্তু স্ব-হ'ষ্ট কৰিবলে, আপোনাৰ নিজৰ চাৰ্ভাৰ ব্যৱহাৰ কৰাৰ উপৰিও, আন `CDN` সাধাৰণ বিকল্প হ'ল `S3` ব্যৱহাৰ কৰা +

আপুনি `S3` চাৰ্ভাৰত লগ ইন `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

`CDN` বিন্যাস কৰিবলে মনত ৰাখিব যাতে `/.v` ত সমাপ্ত পথৰ কেশ্ব সময় `1s` হয়, অন্যথা নতুনকৈ মুকলি কৰা বিষয়বস্তু তৎক্ষণাত অভিগম কৰিব নোৱাৰি ।

## ৱেবছাইট প্ৰকাশ কৰক

ৱেবছাইটটো যিকোনো ঠাইতে স্থাপন কৰিব পাৰি [github page](https://pages.github.com) আৰু [cloudflare page](https://pages.cloudflare.com) ভাল পছন্দ।

যিহেতু ৱেবছাইটে এটা [একক-পৃষ্ঠা এপ্লিকেচন](https://developer.mozilla.org/docs/Glossary/SPA) আৰ্কিটেকচাৰ ব্যৱহাৰ কৰে, `. ` ৰ পৰা `index.html` নথকা URL পথসমূহ পুনৰ লিখিবলৈ মনত ৰাখিব।

ৱেবছাইট প্ৰৱেশ পৃষ্ঠাটো মাত্ৰ এবাৰহে মোতায়েন কৰিব লাগিব, আৰু পৰৱৰ্তী বিষয়বস্তু আপডেটৰ বাবে ৱেবছাইট প্ৰৱেশ পৃষ্ঠাটো পুনৰায় স্থাপন কৰাৰ প্ৰয়োজন নাই।

### github পৃষ্ঠাত মোতায়েন কৰক

`i18n-demo` [সংস্থা সৃষ্টি কৰিবলৈ প্ৰথমে ইয়াত ক্লিক github](https://github.com/account/organizations/new?plan=free) ।

তাৰ পিছত এই প্ৰতিষ্ঠানৰ অধীনত গুদাম `i18n-demo.github.io` সৃষ্টি কৰক (অনুগ্ৰহ কৰি আপুনি সৃষ্টি কৰা সংস্থাৰ নামেৰে `i18n-demo` সলনি কৰক):

![](https://p.3ti.site/1721098657.avif)

পূৰ্বৰ প্ৰবন্ধত বিষয়বস্তু প্ৰকাশ কৰাৰ সময়ত, `out/main/htm` সৃষ্টি কৰা হৈছে অনুগ্ৰহ কৰি এই পঞ্জিকাত প্ৰৱেশ কৰক আৰু চলাওক :

```
ln -s index.html 404.html
```


যিহেতু `github page` এ URL পথ পুনৰ লিখা সমৰ্থন নকৰে, ইয়াৰ পৰিবৰ্তে `404.html` ব্যৱহাৰ কৰা হয়।

তাৰ পিছত `htm` পঞ্জিকাত নিম্নলিখিত আদেশ চলাওক ( `i18n-demo/i18n-demo.github.io.git` আপোনাৰ নিজৰ গুদামৰ ঠিকনাৰে সলনি কৰিবলৈ মনত ৰাখিব) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

ক'ড ঠেলি দিয়াৰ পিছত, আপুনি ইয়াক অভিগম কৰাৰ আগতে `github page` ৰ মোতায়েন সফলভাৱে চলিবলৈ অপেক্ষা কৰক (তলত দেখুওৱাৰ দৰে)।

<img src="//p.3ti.site/1721116586.avif" width="350px">

ডেমো পৃষ্ঠাৰ বাবে অনুগ্ৰহ কৰি চাওক:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### ক্লাউডফ্লেয়াৰ পৃষ্ঠাত মোতায়েন কৰক

`github page` সৈতে তুলনা [cloudflare page](//pages.cloudflare.com) , ই পথ পুনৰ লিখা প্ৰদান কৰে আৰু মূল চীনৰ বাবে অধিক বন্ধুত্বপূৰ্ণ আৰু ইয়াক ব্যৱহাৰ কৰাটো বাঞ্ছনীয়।

`cloudflare page` ৰ মোতায়েন সাধাৰণতে ওপৰৰ `github page` ৰ মোতায়েনৰ ওপৰত ভিত্তি কৰি কৰা হয়।

এটা প্ৰকল্প সৃষ্টি কৰক আৰু ওপৰৰ `i18n-demo.github.io` গুদামটো বান্ধক।

প্ৰক্ৰিয়াটো তলৰ চিত্ৰত দেখুওৱা হৈছে:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

সংস্থা `i18n-demo` লৈ অভিগম অনুমোদন কৰিবলে অনুগ্ৰহ কৰি `Add Account` ক্লিক কৰক।

যদি আপুনি অন্য প্ৰতিষ্ঠানৰ গুদাম বান্ধিছে, নতুন প্ৰতিষ্ঠান প্ৰদৰ্শিত হোৱাৰ আগতে আপুনি দুবাৰ অনুমোদন কৰিবলে `Add Account` ক্লিক কৰিব লাগিব।

![](https://p.3ti.site/1721118306.avif)

ইয়াৰ পিছত, গুদাম `i18n-demo.github.io` নিৰ্ব্বাচন কৰক, তাৰ পিছত `Begin setup` ক্লিক কৰক, আৰু পৰৱৰ্তী পদক্ষেপসমূহৰ বাবে অবিকল্পিত মানসমূহ ব্যৱহাৰ কৰক।

![](https://p.3ti.site/1721118490.avif)

প্ৰথমবাৰৰ বাবে বাইণ্ড কৰাৰ পিছত, আপুনি ইয়াক অভিগম কৰাৰ আগতে কেইমিনিটমান অপেক্ষা কৰিব লাগিব।

মোতায়েনৰ পিছত, আপুনি এটা স্বনিৰ্বাচিত ডমেইন নাম বান্ধিব পাৰিব।

![](https://p.3ti.site/1721119459.avif)

স্বনিৰ্বাচিত ডমেইন নাম বান্ধি লোৱাৰ পিছত, অনুগ্ৰহ কৰি একক-পৃষ্ঠা এপ্লিকেচনৰ পথ পুনৰ লিখা বিন্যাস কৰিবলে ডমেইন নামলৈ যাওক, তলত দেখুওৱাৰ দৰে:

![](https://p.3ti.site/1721119320.avif)

ওপৰৰ ছবিখনত থকা `i18n.site` তলত দিয়া ধৰণৰ।

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

ইয়াৰ উপৰিও, অনুগ্ৰহ কৰি কেশ্ব নিয়মসমূহ বিন্যাস কৰক, তলত দেখুওৱাৰ দৰে, আৰু কেশ্বৰ সময়কাল এমাহলৈ সংহতি কৰক।

![](https://p.3ti.site/1721125111.avif)

অনুগ্ৰহ কৰি ওপৰৰ ছবিখনৰ দ্বিতীয় পদক্ষেপত ডমেইন নামৰ মিলটো আপুনি বান্ধি লোৱা ডমেইন নামলৈ সলনি কৰক।

### মূল চীনত ৱেবছাইট নিয়োগ অনুকূল কৰা

যদি আপুনি মূল চীনৰ নেটৱৰ্ক পৰিৱেশত উন্নত অভিগম্যতা পৰিৱেশন লাভ কৰিব বিচাৰে, অনুগ্ৰহ কৰি প্ৰথমে [এটা ডমেইন নাম পঞ্জীয়ন কৰক](//beian.aliyun.com) ।

তাৰ পিছত, মূল + ক্লাউড বিক্ৰেতাসকলৰ বস্তু সংৰক্ষণ ব্যৱহাৰ কৰক `CDN` নিম্নলিখিত বিষয়বস্তু মোতায়েন কৰক `out/main/htm` !

আপুনি এজ কম্পিউটিং ব্যৱহাৰ কৰিব [`CDN`](//cloud.baidu.com/product/cdn.html) একক-পৃষ্ঠা এপ্লিকেচনসমূহৰ সৈতে খাপ খুৱাবলৈ পথ পুনৰায় লিখিবলৈ।

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
  // আপুনি সঁহাৰি হেডাৰক আউটপুট ডিবাগ কৰিবলে সংহতি কৰিব পাৰে, যেনে out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

যিহেতু ৰেকৰ্ড `MX` আৰু ৰেকৰ্ড `CNAME` সহাৱস্থান কৰিব নোৱাৰে, যদি আপুনি একে সময়তে ডমেইন নামৰ ইমেইলসমূহ গ্ৰহণ কৰিব বিচাৰে, [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) ৰেকৰ্ড `A` লৈ স্তৰ `CNAME` লৈ লিপিৰ সৈতে সহযোগ কৰিব লাগিব।

ইয়াৰ উপৰিও, যিহেতু মূল চীনত ক্লাউড বিক্ৰেতাসকলৰ বহিঃৰাজ্যৰ ট্ৰেফিক চাৰ্জ তুলনামূলকভাৱে ব্যয়বহুল, যদি আপুনি খৰচ অনুকূল কৰিব বিচাৰে, তেন্তে আপুনি [DNS Cloud ৰ বিনামূলীয়া ভৌগোলিক ৰিজ'লিউচন](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) আৰু [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ৰ কাষ্টম ডমেইন নাম (তলত দেখুওৱাৰ দৰে) ব্যৱহাৰ কৰিব পাৰে ট্ৰেফিক ডাইভাৰচন──মূল চীনত ট্ৰেফিক ৰুটিং বাইডু ক্লাউড `CDN` , আন্তৰ্জাতিক ট্ৰেফিক cloudflare .

![](https://p.3ti.site/1721119788.avif)

এই মোতায়েন অনুকূলন সমাধানসমূহ অধিক জটিল আৰু ভৱিষ্যতে পৃথক অধ্যায়সমূহত প্ৰৱৰ্তন কৰা হ'ব।

### জেনেৰিক ডমেইন নাম পুনঃনিৰ্দেশ

যদি আপুনি এটা ৱেবছাইট আপোনাৰ মূল ৱেবছাইট হিচাপে সৃষ্টি কৰিবলে `i18n.site` ব্যৱহাৰ কৰে, আপুনি সাধাৰণতে পেন-ডমেইন পুনঃনিৰ্দেশ বিন্যাস কৰিব লাগিব, অৰ্থাৎ, অভিগম `*.xxx.com` লৈ ( `www.xxx.com` অন্তৰ্ভুক্ত কৰি) `xxx.com` লৈ পুনৰনিৰ্দেশিত কৰিব লাগিব।

এই প্ৰয়োজনীয়তা আলিবাবা ক্লাউড `CDN` `EdgeScript` ( [ইংৰাজী নথিপত্ৰ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [চীনা নথিপত্ৰ](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ৰ সহায়ত লাভ কৰিব পাৰি ৷

[CDN ক্লাউডত](https://cdn.console.aliyun.com/domain/list) ডমেইন নাম যোগ কৰক আৰু আলিবাবা ক্লাউড `CDN` ত ডমেইন নাম `*.xxx.com` `CNAME` আঙুলিয়াওক।

![](https://p.3ti.site/1721122000.avif)

উদাহৰণস্বৰূপ, ওপৰৰ ছবিত `*.i18n.site` ৰ পেন-ডমেইন নাম পুনঃনিৰ্দেশ বিন্যাস নিম্নলিখিত:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### nginx ৰ সৈতে মোতায়েন কৰক

`/root/i18n/md/out/main/htm` `server` nginx `out/main/htm`

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` অবিৰত সংহতিৰ ওপৰত ভিত্তি কৰি

আপুনি আপোনাৰ `github action` বিন্যাস কৰিবলে নিম্নলিখিত চাব পাৰে :

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

বিন্যাসত দেখাৰ দৰে, এই কাৰ্য্যপ্ৰবাহ ট্ৰিগাৰ কৰা হয় যেতিয়া শাখা `main` আৰু শাখা `dist` লৈ ঠেলি দিয়া হয় ।

কাৰ্য্যপ্ৰবাহে দস্তাবেজ `.i18n/htm/dist.yml` কৰিবলে শাখাৰ নামৰ সৈতে `.i18n/htm/main.yml` ৰাখি বিন্যাস নথিপত্ৰ ব্যৱহাৰ কৰিব।

আমি দস্তাবেজ উন্মোচন প্ৰক্ৰিয়াৰ বাবে নিম্নলিখিত উত্তম পদ্ধতিসমূহৰ পৰামৰ্শ দিওঁ:

যেতিয়া পৰিবৰ্তনসমূহ শাখা `main` লৈ ঠেলি দিয়া হয়, দস্তাবেজক নিৰ্মাণ আৰু পূৰ্বদৰ্শন ষ্টেচনলৈ মোতায়েন কৰিবলে ট্ৰিগাৰ কৰা হয় (পূৰ্বদৰ্শন ষ্টেচন উপলব্ধ [github page](//pages.github.com) ) ।

পূৰ্বদৰ্শন চাইটত দস্তাবেজটো সঠিক হোৱাটো নিশ্চিত কৰাৰ পিছত, ক'ডটো একত্ৰিত কৰা হ'ব আৰু শাখা `dist` লৈ ঠেলি দিয়া হ'ব, আৰু অফিচিয়েল নিৰ্মাণ আৰু মোতায়েন অনলাইন হ'ব।

অৱশ্যেই, ওপৰৰ প্ৰক্ৰিয়াটো প্ৰণয়ন কৰিবলৈ অধিক বিন্যাস লিখাৰ প্ৰয়োজন।

আপুনি কাৰ্য্যপ্ৰবাহ স্ক্ৰিপ্টৰ বাবে প্ৰকৃত প্ৰকল্পটো চাব পাৰে [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

বিন্যাসত `secrets.I18N_SITE_TOKEN` আৰু `secrets.NPM_TOKEN` বাবে আপুনি ক'ড ভিত্তিত গোপন চলকসমূহ বিন্যাস কৰাৰ প্ৰয়োজন ।

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` হৈছে বিন্যাসত সৰঞ্জাম `npm` ৰ প্ৰকাশন টোকেন [npmjs.com](//npmjs.com) প্ৰকাশৰ অনুমতিৰ সৈতে এটা টোকেন সৃষ্টি কৰক (তলত দেখুওৱাৰ দৰে)।

![](//p.3ti.site/1730969906.avif)


## ডাইৰেকটৰি গঠন

### `public`

ৱেবছাইটৰ ষ্টেটিক ফাইল, যেনে `favicon.ico` , `robots.txt` , ইত্যাদি।

ইয়াত আইকন ফাইলসমূহ [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` পঞ্জিকাৰ অন্তৰ্গত `i18n.site` ৰ বিন্যাস নথিপত্ৰসমূহ, অনুবাদ কেশ্ব, ইত্যাদি আছে। বিৱৰণৰ বাবে পৰৱৰ্তী অধ্যায় ["বিন্যাস"](/i18n.site/conf) চাওক।

### `en`

উৎস ভাষা পঞ্জিকা, `.i18n/conf.yml` বিন্যাস নথিপত্ৰত `fromTo` ৰ `en` সৈতে সংগতি ৰাখি

```yaml
i18n:
  fromTo:
    en: zh
```

অনুগ্ৰহ কৰি অনুবাদৰ বিন্যাস চাওক [i18](/i18/use)