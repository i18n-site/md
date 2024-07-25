# ইনষ্টল কৰক &

## বিন্যাস টোকেন

`i18` অনুবাদ সঁজুলি এম্বেড কৰা হৈছে `i18n.site` অনুগ্ৰহ কৰি [ইয়াত ক্লিক কৰক অভিগম টোকেন বিন্যাস কৰিবলে `i18` দস্তাবেজ চাবলৈ](/i18/use) ।

## স্থাপন কৰা

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## ডেমো প্ৰজেক্ট

এটা ডেমো প্ৰজেক্টৰ পৰা আৰম্ভ কৰোঁ আৰু কেনেকৈ ব্যৱহাৰ কৰিব লাগে শিকিওঁ `i18n.site`

আমি প্ৰথমে ডেমো ভঁৰালটো ক্ল'ন কৰো আৰু কমাণ্ডটো নিম্নলিখিত ধৰণে চলাওঁ:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

মূল চীনৰ ব্যৱহাৰকাৰীসকলে:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

ক'ড ভিত্তি ক্ল'নৰ পঞ্জিকাৰ নাম `md` হ'ব লাগিব `docker` সৈতে স্থানীয় পূৰ্বদৰ্শন সহজ কৰিবলে `demo.i18n.site`

### অনুবাদ কৰা

প্ৰথমে, ডাইৰেকটৰি `md` আৰু `i18n.site` চলাওক, যি `en` লৈ `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

চলোৱাৰ পিছত, অনুবাদ আৰু কেশ্ব ফাইলসমূহ সৃষ্টি কৰা হ'ব অনুগ্ৰহ কৰি সিহতক `md` ভঁৰাল `git add . ` ত যোগ কৰিবলৈ মনত ৰাখিব।

### স্থানীয় পূৰ্বদৰ্শন

সংস্থাপন আৰু আৰম্ভ কৰক `docker` ( `MAC` [orbstack](https://orbstack.dev) ব্যৱহাৰ কৰাৰ পৰামৰ্শ দিয়ে `docker` ৰ চলনসময় হিচাপে ).

তাৰ পিছত, `docker` পঞ্জিকাত প্ৰৱেশ কৰক আৰু `./up.sh` চলাওক, আৰু তাৰ পিছত স্থানীয়ভাৱে পূৰ্বদৰ্শন কৰিবলৈ [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### পোষ্ট কন্টেন্ট

এটা [একক-পৃষ্ঠা এপ্লিকেচন](https://developer.mozilla.org/docs/Glossary/SPA) আৰ্কিটেকচাৰ গ্ৰহণ কৰে, আৰু ৱেবছাইট প্ৰৱেশ পৃষ্ঠা আৰু ৱেবছাইট বিষয়বস্তু স্বতন্ত্ৰভাৱে মোতায়েন কৰা হয় `i18n.site`

ওপৰৰ অনুবাদ চলোৱাৰ পিছত, `htm` আৰু `v` ডাইৰেকটৰীসমূহ `md/out/dev`

ইয়াত `.i18n/htm/dev.yml` `dev`

বিষয়বস্তুৰ : `dev`

ডাইৰেক্টৰীৰ তলত ৱেবছাইটৰ প্ৰৱেশ পৃষ্ঠাটো আছে `htm`

ডাইৰেক্টৰীত সংস্কৰণ নম্বৰৰ সৈতে ৱেবছাইটৰ বিষয়বস্তু থাকে `v`

স্থানীয় পূৰ্বদৰ্শনে সংস্কৰণ সংখ্যা নিৰ্বিশেষে সকলো ফাইল `out/dev/v/0.1.0` কপি কৰিব ।

অফিচিয়েল মুক্তিৰ বাবে, পৰিবৰ্তন কৰা ফাইলসমূহক নতুন সংস্কৰণ নম্বৰ পঞ্জিকালৈ কপি কৰা হ'ব।

#### বিন্যাস নথিপত্ৰ ধাৰ্য্য কৰিবলে -c ব্যৱহাৰ কৰক

বিভিন্ন বিন্যাস নথিপত্ৰসমূহে `out`

`out/ol` , `.i18n/htm/ol.yml`

`dev.yml` আৰু `ol.yml` অবিকল্পিত বিন্যাসসমূহ।

`dev` `development`
`ol` `online` `-n` `npm`

আপুনি অন্য বিন্যাস নথিপত্ৰও সৃষ্টি কৰিব পাৰে বিন্যাস নথিপত্ৰৰ নাম ধাৰ্য্য কৰিবলে আদেশ শাৰীত `--htm_conf`

উদাহৰণ স্বৰূপে:
```
i18n.site --htm_conf yourConfig --save
```

ইয়াত `--save`

#### <a rel=id href="#npm" id="npm"></a> npmjs.com ত বিষয়বস্তু প্ৰকাশ কৰক

[npmjs.com](//npmjs.com)[​](/i18n.site/feature#ha)

##### npm login & মুক্তি দিয়া

`nodejs` লগ ইন কৰিবলৈ `npm login` ব্যৱহাৰ কৰক।

সম্পাদনা কৰক `md/.i18n/htm/ol.yml` `i18n.site` in `v: //unpkg.com/i18n.site` লৈ আপোনাৰ নিজৰ `npm` সৰঞ্জামৰ নামলৈ সলনি কৰক ।

ৱেবছাইটৰ ডমেইন নামটো পেকেইজৰ নাম হিচাপে ব্যৱহাৰ কৰাটো এটা ভাল পছন্দ [npmjs.com](//npmjs.com)

`npm` `v:` **`//unpkg.com/`** `i18n.site` `/.v`

অনুবাদ আৰু প্ৰকাশ কৰিবলৈ `md` ডাইৰেকটৰীত `i18n.site --npm` বা `i18n.site -n` চলাওক।

যদি আপুনি প্ৰকাশ কৰিবলে এটা অবিৰত সংহতি পৰিৱেশ ব্যৱহাৰ কৰে, ইয়াক সংস্থাপন কৰাৰ প্ৰয়োজন নাই মাত্ৰ লগ-ইন আৰু প্ৰকাশিত অনুমতি `~/.npmrc` পৰিৱেশলৈ কপি কৰক `nodejs`

যদি আপুনি `v:` `ol.yml` ত পেকেইজৰ নাম পৰিবৰ্তন কৰে, অনুগ্ৰহ কৰি **প্ৰথমে `.i18n/v/ol` মচি পেলোৱাটো নিশ্চিত কৰক** আৰু তাৰ পিছত ইয়াক প্ৰকাশ কৰক ।

##### npm দ্বাৰা প্ৰকাশিত প্ৰক্সি চাৰ্ভাৰ

যদি মূল চীনৰ ব্যৱহাৰকাৰীসকলে নে'টৱৰ্ক সমস্যাৰ সন্মুখীন হয় আৰু `npm` সৰঞ্জাম প্ৰকাশ কৰিব নোৱাৰে, তেওঁলোকে প্ৰক্সি চাৰ্ভাৰ বিন্যাস কৰিবলে পৰিৱেশ চলক `https_proxy` সংহতি কৰিব পাৰে ।

ধৰি লওক যে আপোনাৰ প্ৰক্সি চাৰ্ভাৰ পৰ্ট `7890` আপুনি লিখিব পাৰে:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### স্ব-হ'ষ্ট কৰা বিষয়বস্তু

যদি আপুনি বিষয়বস্তু স্ব-হ'ষ্ট কৰিব বিচাৰে, প্ৰথমে, সম্পাদনা `md/.i18n/htm/ol.yml` আৰু `v: //unpkg.com/i18n.site` আপোনাৰ URL উপসৰ্গলৈ সলনি কৰক, যেনে `v: //i18n-v.xxx.com` ।

`md`

```
i18n.site --htm_conf ol --save
```

বা সংক্ষিপ্ত ৰূপ

```
i18n.site -c ol -s
```

তাৰ পিছত, `md/out/ol/v` থকা বিষয়বস্তুক `v:` ত সংহতি কৰা URL উপসৰ্গ পথলৈ বিন্যাস কৰক।

**`1s` , `/.v`**

অন্য পথসমূহৰ বাবে কেশ্ব সময় এবছৰ বা তাতকৈ অধিকলৈ সংহতি কৰিব পাৰি অপ্ৰয়োজনীয় অনুৰোধসমূহ হ্ৰাস কৰিবলে।

##### s3 লৈ বিষয়বস্তু হ'ষ্ট কৰক

বিষয়বস্তু স্ব-হ'ষ্ট কৰিবলে, আপোনাৰ নিজৰ চাৰ্ভাৰ ব্যৱহাৰ কৰাৰ `CDN` , আন এটা সাধাৰণ বিকল্প + `S3`

`S3` [rclone](https://rclone.org) `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`CDN` বিন্যাস কৰিবলৈ মনত ৰাখিব, যাতে `/.v` ৰে শেষ হোৱা পথৰ কেশ্ব সময় `1s` হয়, অন্যথা আপুনি নতুনকৈ মুকলি কৰা বিষয়বস্তু তৎক্ষণাত অভিগম কৰিব নোৱাৰিব ।

### ৱেবছাইট প্ৰকাশ কৰক

ৱেবছাইটটো যিকোনো ঠাইতে স্থাপন কৰিব পাৰি [github page](https://pages.github.com) আৰু [cloudflare page](https://pages.cloudflare.com) ভাল পছন্দ।

যিহেতু ৱেবছাইটে [এটা একক-পৃষ্ঠা এপ্লিকেচনৰ](https://developer.mozilla.org/docs/Glossary/SPA) স্থাপত্য গ্ৰহণ কৰে, মনত ৰাখিব যে URL পথটো পুনৰ লিখিব লাগে য'ত `index.html` লৈ নাথাকে `. `

ৱেবছাইট প্ৰৱেশ পৃষ্ঠাটো মাত্ৰ এবাৰহে মোতায়েন কৰিব লাগিব, আৰু পৰৱৰ্তী বিষয়বস্তু আপডেটৰ বাবে ৱেবছাইট প্ৰৱেশ পৃষ্ঠাটো পুনৰায় স্থাপন কৰাৰ প্ৰয়োজন নাই।

#### github পৃষ্ঠাত মোতায়েন কৰক

প্ৰথমে [github ক্লিক কৰক এটা সংস্থা সৃষ্টি কৰিবলৈ](https://github.com/account/organizations/new?plan=free) `i18n-demo`

তাৰ পিছত এই `i18n-demo.github.io` অধীনত এটা গুদাম সৃষ্টি কৰক (অনুগ্ৰহ কৰি `i18n-demo` আপুনি সৃষ্টি কৰা সংস্থাৰ নামেৰে সলনি কৰক):

<img alt="" src="https://p.3ti.site/1721098657.avif">

পূৰ্বৰ প্ৰবন্ধত বিষয়বস্তু প্ৰকাশ কৰাৰ সময়ত, ইয়াক সৃষ্টি কৰা `out/ol/htm` অনুগ্ৰহ কৰি এই ডাইৰেকটৰীটো দিয়ক আৰু চলাওক :

```
ln -s index.html 404.html
```


কাৰণ `github page` এ URL পথ পুনৰ লিখা সমৰ্থন নকৰে, গতিকে ইয়াৰ পৰিবৰ্তে `404.html` ব্যৱহাৰ কৰা হয়।

তাৰ পিছত `htm` ডাইৰেকটৰীত নিম্নলিখিত আদেশ চলাওক ( `i18n-demo/i18n-demo.github.io.git` আপোনাৰ নিজৰ গুদামৰ ঠিকনাৰে সলনি কৰিবলৈ মনত ৰাখিব) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

ক'ডটো ঠেলি দিয়াৰ পিছত, `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

ডেমো পৃষ্ঠাৰ বাবে অনুগ্ৰহ কৰি চাওক:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### ক্লাউডফ্লেয়াৰ পৃষ্ঠাত মোতায়েন কৰক

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` মোতায়েন সাধাৰণতে ওপৰৰ `github page` ৰ মোতায়েনৰ ওপৰত ভিত্তি কৰি কৰা হয়।

এটা প্ৰজেক্ট তৈয়াৰ কৰক আৰু ওপৰৰ গুদামটো বান্ধি লওক `i18n-demo.github.io`

প্ৰক্ৰিয়াটো তলৰ চিত্ৰত দেখুওৱা হৈছে:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` সংস্থাপনলৈ প্ৰৱেশৰ অনুমতি দিবলৈ অনুগ্ৰহ কৰি ক্লিক কৰক `Add Account`

যদি আপুনি আন এটা প্ৰতিষ্ঠানৰ গুদাম বান্ধিছে, নতুন সংস্থাটো প্ৰদৰ্শিত হোৱাৰ আগতে ইয়াক দুবাৰকৈ অনুমোদন কৰিবলৈ আপুনি দুবাৰ ক্লিক কৰিব লাগিব `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

ইয়াৰ পিছত `i18n-demo.github.io` নিৰ্ব্বাচন কৰক, তাৰ পিছত `Begin setup` ক্লিক কৰক, আৰু পৰৱৰ্তী পদক্ষেপসমূহৰ বাবে অবিকল্পিত মানসমূহ ব্যৱহাৰ কৰক।

<img alt="" src="https://p.3ti.site/1721118490.avif">

প্ৰথমবাৰৰ বাবে বাইণ্ড কৰাৰ পিছত, আপুনি ইয়াক অভিগম কৰাৰ আগতে কেইমিনিটমান অপেক্ষা কৰিব লাগিব।

মোতায়েনৰ পিছত, আপুনি এটা স্বনিৰ্বাচিত ডমেইন নাম বান্ধিব পাৰিব।

<img alt="" src="https://p.3ti.site/1721119459.avif">

স্বনিৰ্বাচিত ডমেইন নাম বান্ধি লোৱাৰ পিছত, অনুগ্ৰহ কৰি একক-পৃষ্ঠা এপ্লিকেচনৰ পথ পুনৰ লিখা বিন্যাস কৰিবলে ডমেইন নামলৈ যাওক, তলত দেখুওৱাৰ দৰে:

<img alt="" src="https://p.3ti.site/1721119320.avif">

ওপৰৰ ছবিখনত দিয়া নিয়মসমূহ তলত দিয়া ধৰণৰ `i18n.site`

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

ইয়াৰ উপৰিও, অনুগ্ৰহ কৰি কেশ্ব নিয়মসমূহ বিন্যাস কৰক, তলত দেখুওৱাৰ দৰে, আৰু কেশ্বৰ সময়কাল এমাহলৈ সংহতি কৰক।

<img alt="" src="https://p.3ti.site/1721125111.avif">

অনুগ্ৰহ কৰি ওপৰৰ ছবিখনৰ দ্বিতীয় পদক্ষেপত ডমেইন নামৰ মিলটো আপুনি বান্ধি লোৱা ডমেইন নামলৈ সলনি কৰক।

#### মূল চীনত ৱেবছাইট নিয়োগ অনুকূল কৰা

যদি আপুনি মূল চীনৰ নেটৱৰ্ক পৰিৱেশত উন্নত অভিগম্যতা পৰিৱেশন লাভ কৰিব বিচাৰে, অনুগ্ৰহ কৰি প্ৰথমে [এটা ডমেইন নাম পঞ্জীয়ন কৰক](//beian.aliyun.com) ।

`out/ol/htm` পিছত, মূল চীনত ক্লাউড বিক্ৰেতাসকলৰ বস্তু সংৰক্ষণ ব্যৱহাৰ `CDN` +

আপুনি এজ কম্পিউটিং ব্যৱহাৰ কৰিব পাৰে একক-পৃষ্ঠা এপ্লিকেচনসমূহৰ সৈতে খাপ খুৱাবলৈ পথ পুনৰ লিখিবলৈ, যেনে [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
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
<img alt="" src="https://p.3ti.site/1721121273.avif">

`MX` ৰেকৰ্ড আৰু `CNAME` ৰেকৰ্ডসমূহ একেলগে থাকিব নোৱাৰে, যদি আপুনি একে সময়তে ডমেইন নামৰ ইমেইলসমূহ গ্ৰহণ কৰিব বিচাৰে, আপুনি `CNAME` ৰ সৈতে সহযোগিতা কৰিব লাগিব `A` ৰেকৰ্ড [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

ইয়াৰ উপৰিও, যিহেতু মূল চীনত ক্লাউড বিক্ৰেতাসকলৰ বহিঃৰাজ্যৰ ট্ৰেফিক চাৰ্জ তুলনামূলকভাৱে ব্যয়বহুল, যদি আপুনি খৰচ অনুকূল কৰিব বিচাৰে, তেন্তে আপুনি [Huawei DNS ৰ বিনামূলীয়া ভৌগোলিক ৰিজ'লিউচন](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) আৰু [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ৰ কাষ্টম ডমেইন নাম (তলত দেখুওৱাৰ দৰে) ব্যৱহাৰ কৰিব পাৰে ট্ৰেফিক ডাইভাৰচন──মূল চীনত ট্ৰেফিক বাইডু ক্লাউড `CDN` আন্তৰ্জাতিক ট্ৰেফিক যায় cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

এই মোতায়েন অনুকূলন সমাধানসমূহ অধিক জটিল আৰু ভৱিষ্যতে পৃথক অধ্যায়সমূহত প্ৰৱৰ্তন কৰা হ'ব।

#### জেনেৰিক ডমেইন নাম পুনঃনিৰ্দেশ

যদি আপুনি এটা ৱেবছাইট আপোনাৰ মূল ৱেবছাইট হিচাপে সৃষ্টি কৰিবলে ব্যৱহাৰ `i18n.site` , আপুনি সাধাৰণতে পেন-ডমেইন পুনঃনিৰ্দেশনা বিন্যাস কৰিব লাগিব, অৰ্থাৎ, `*.xxx.com` ( `www.xxx.com` অন্তৰ্ভুক্ত কৰি) অভিগম `xxx.com` .

এই প্ৰয়োজনীয়তা আলিবাবা ক্লাউডৰ `EdgeScript` ( [ইংৰাজী নথিপত্ৰ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [চীনা নথি](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ৰ সহায়ত পূৰণ কৰিব পাৰি `CDN`

[আলিবাবা CDN](https://cdn.console.aliyun.com/domain/list) এটা ডমেইন নাম যোগ কৰক আৰু ডমেইন `*.xxx.com` আলিবাবা ক্লাউড `CDN` ৰ `CNAME` লৈ আঙুলিয়াওক।

<img alt="" src="https://p.3ti.site/1721122000.avif">

উদাহৰণস্বৰূপ, ওপৰৰ ছবিখনত `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx ৰ সৈতে মোতায়েন কৰক

`/root/i18n/md/out/ol/htm` `server` nginx `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### ডাইৰেকটৰি গঠন

#### ৰাজহুৱা

ৱেবছাইটৰ ষ্টেটিক ফাইল, যেনে `favicon.ico` `robots.txt` , ইত্যাদি।

ইয়াত আইকন ফাইলসমূহ [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i১৮ন

ডাইৰেকটৰিৰ অন্তৰ্গত `i18n.site` ৰ বিন্যাস নথিপত্ৰসমূহ, অনুবাদ কেশ্ব, ইত্যাদি আছে `.i18n` বিৱৰণৰ বাবে পৰৱৰ্তী অধ্যায় ["বিন্যাস"](/i18n.site/conf) চাওক।

#### en

উৎস ভাষা পঞ্জিকা, বিন্যাস নথিপত্ৰত `fromTo` `en` `.i18n/conf.yml` সংগতি ৰাখি

```yaml
i18n:
  fromTo:
    en: zh
```

অনুগ্ৰহ কৰি অনুবাদৰ বিন্যাস চাওক [i18](/i18/use)

