# সার্চ ইঞ্জিন অপ্টিমাইজেশান (SEO)

## নীতি

`i18n.site` একটি নন-রিফ্রেশ একক পৃষ্ঠার আর্কিটেকচার গ্রহণ করে অনুসন্ধান সূচীকরণের সুবিধার্থে, ক্রলারদের ক্রল করার জন্য একটি পৃথক স্ট্যাটিক পৃষ্ঠা এবং `sitemap.xml` তৈরি করা হবে।

সার্চ ইঞ্জিন ক্রলার দ্বারা অ্যাক্সেসের অনুরোধের `User-Agent` ব্যবহার করা হলে, অনুরোধটি `302` এর মাধ্যমে স্ট্যাটিক পৃষ্ঠায় পুনঃনির্দেশিত হবে।

স্ট্যাটিক পৃষ্ঠাগুলিতে, এই পৃষ্ঠার বিভিন্ন ভাষার সংস্করণের লিঙ্কগুলি নির্দেশ করতে `link` ব্যবহার করুন, যেমন :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## স্থানীয় nginx কনফিগারেশন

একটি উদাহরণ হিসাবে ডেমো প্রকল্পে `.i18n/htm/main.yml` কনফিগারেশন ফাইল নিন

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

অনুগ্রহ করে প্রথমে আপনার ডোমেন নামের উপরে `host:` এর মান পরিবর্তন করুন, যেমন `xxx.com` ।

তারপর, `i18n.site -n` , স্ট্যাটিক পৃষ্ঠাটি `out/main/htm` ডিরেক্টরিতে তৈরি হবে।

অবশ্যই, আপনি অন্যান্য কনফিগারেশন ফাইলগুলিও সক্ষম করতে পারেন, যেমন প্রথমে `.i18n/htm/dist.package.json` এবং `.i18n/htm/dist.yml` তৈরি করতে `main` এর কনফিগারেশন উল্লেখ করা।

তারপর `i18n.site -n -c dist` চালান যাতে স্ট্যাটিক পৃষ্ঠাটি `out/dist/htm` তে তৈরি হয়।

নীচের কনফিগারেশন উল্লেখ করে `nginx` সেট করা যেতে পারে।

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# সার্ভার কর্মী স্ক্রিপ্টগুলিকে খুব বেশি সময় ধরে ক্যাশে করবেন না
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# অন্যান্য স্ট্যাটিক রিসোর্সের জন্য দীর্ঘ ক্যাশে সময় সেট করুন
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# হোমপেজ এন্ট্রি হিসাবে ক্রলার কোন স্ট্যাটিক ফাইল ব্যবহার করবে তা সেট করুন
location = / {
  # $botLang খালি না হয়, এর মানে হল সেট ভাষা পাথ অনুযায়ী ক্রলার অ্যাক্সেস এবং পুনঃনির্দেশ
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# একক পৃষ্ঠা অ্যাপ্লিকেশন কনফিগারেশন
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## স্ট্যাটিক ফাইল আপলোড করার জন্য অবজেক্ট স্টোরেজ কনফিগার করুন

স্ট্যাটিক ফাইলগুলি স্থানীয়ভাবে তৈরি করা যেতে পারে, তবে একটি আরও সাধারণ পদ্ধতি হল সেগুলিকে অবজেক্ট স্টোরেজে আপলোড করা।

উপরে কনফিগার করা `out` পরিবর্তন করুন :

```
out:
  - s3
```

তারপর, `~/.config/i18n.site.yml` সম্পাদনা করুন এবং নিম্নলিখিত কনফিগারেশন যোগ করুন :

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

কনফিগারেশনে, অনুগ্রহ করে `i18n.site` `host:` -এর মান `.i18n/htm/main.yml` -এ পরিবর্তন করুন, একাধিক অবজেক্ট স্টোর `s3` অধীনে কনফিগার করা যেতে পারে এবং `region` ক্ষেত্রটি ঐচ্ছিক (অনেক অবজেক্ট স্টোরের এই ক্ষেত্রটি সেট করার প্রয়োজন নেই)।

তারপর প্রকল্পটি পুনরায় প্রকাশ করতে `i18n.site -n` চালান।

আপনি যদি `~/.config/i18n.site.yml` পরিবর্তন করে থাকেন এবং পুনরায় আপলোড করতে চান, তাহলে আপলোড ক্যাশে সাফ করতে প্রজেক্ট রুট ডিরেক্টরিতে নিম্নলিখিত কমান্ডটি ব্যবহার করুন :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## ক্লাউডফ্লেয়ার কনফিগারেশন

ডোমেইন নাম [cloudflare](//www.cloudflare.com)

### রূপান্তরের নিয়ম

নীচে দেখানো হিসাবে রূপান্তর নিয়ম যোগ করুন:

![](//p.3ti.site/1725436822.avif)

নিয়ম কোডটি নিম্নরূপ, অনুগ্রহ করে আপনার ডোমেন নামের কোড "i18n.site" পরিবর্তন করুন:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### ক্যাশিং নিয়ম

নিম্নলিখিত হিসাবে ক্যাশে নিয়ম যোগ করুন:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### নিয়ম পুনঃনির্দেশ

পুনঃনির্দেশের নিয়মগুলি নিম্নরূপ সেট করুন, অনুগ্রহ করে আপনার ডোমেন নামের কোড "i18n.site" পরিবর্তন করুন

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

`URL redirect` গতিশীল পুনঃনির্দেশ নির্বাচন করুন, অনুগ্রহ করে পুনঃনির্দেশ পাথ `concat("/en",http.request.uri.path,".htm")` এ `/en` পরিবর্তন করুন যেটি আপনি সার্চ ইঞ্জিন অন্তর্ভুক্ত করতে চান তা ডিফল্ট ভাষাতে।

## Baidu ইন্টেলিজেন্ট ক্লাউড কনফিগারেশন

আপনার যদি চীনের মূল ভূখন্ডে পরিষেবা প্রদানের প্রয়োজন হয়, আপনি [Baidu Smart Cloud](//cloud.baidu.com) ব্যবহার করতে পারেন৷

Baidu অবজেক্ট স্টোরেজে ডেটা আপলোড করা হয় এবং Baidu কন্টেন্ট ডিস্ট্রিবিউশন নেটওয়ার্কে আবদ্ধ হয়।

তারপর নিচের মত [EdgeJS সার্ভিসে](//console.bce.baidu.com/cdn/#/cdn/ejs/list) স্ক্রিপ্ট তৈরি করুন

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
  // প্রতিক্রিয়া শিরোনাম আউটপুট ডিবাগ করতে সেট করা যেতে পারে, যেমন out.XXX = 'MSG';
})
```

`Debug` ক্লিক করুন, তারপর সমগ্র নেটওয়ার্কে প্রকাশ করুন ক্লিক করুন।

![](//p.3ti.site/1725437754.avif)

## উন্নত ব্যবহার: আঞ্চলিক রেজোলিউশনের উপর ভিত্তি করে ট্রাফিক বিতরণ করুন

আপনি যদি চীনের মূল ভূখন্ডে পরিষেবা প্রদান করতে চান এবং `cloudflare` বিনামূল্যে আন্তর্জাতিক ট্রাফিক চান, আপনি আঞ্চলিক রেজোলিউশন সহ `DNS` ব্যবহার করতে পারেন।

উদাহরণস্বরূপ, [Huawei DNS](https://www.huaweicloud.com) বিনামূল্যে আঞ্চলিক বিশ্লেষণ প্রদান করে, যার সাহায্যে মূল ভূখণ্ডের চীনা ট্রাফিক Baidu স্মার্ট ক্লাউডের মাধ্যমে যেতে পারে এবং আন্তর্জাতিক ট্রাফিক `cloudflare` মাধ্যমে যেতে পারে।

`cloudflare` এর কনফিগারেশনে অনেক ত্রুটি রয়েছে। এখানে কয়েকটি পয়েন্ট উল্লেখ্য :

### ডোমেইন নেম অন্য `DNS` এ হোস্ট করা আছে, কিভাবে `cloudflare` ব্যবহার করবেন

প্রথমে একটি নির্বিচারে ডোমেন নাম `cloudflare` এর সাথে আবদ্ধ করুন এবং তারপরে `SSL/TLS` → কাস্টম ডোমেন নামটি এই ডোমেন নামের সাথে যুক্ত করতে ব্যবহার করুন।

![](https://p.3ti.site/1725438658.avif)

### একটি কাস্টম ডোমেন নামের মাধ্যমে `cloudflare R2` অ্যাক্সেস করা যাবে না

যেহেতু বিল্ট `cloudflare` ইন অবজেক্ট স্টোরেজ `R2` একটি কাস্টমাইজড ডোমেন নাম দ্বারা অ্যাক্সেস করা যায় না, স্ট্যাটিক ফাইলগুলি রাখার জন্য একটি তৃতীয় পক্ষের অবজেক্ট স্টোরেজ ব্যবহার করা প্রয়োজন।

এখানে আমরা `cloudflare` এ সংরক্ষণ করার জন্য তৃতীয় পক্ষের বস্তুগুলিকে কীভাবে আবদ্ধ করতে হয় তা প্রদর্শন করার জন্য একটি উদাহরণ হিসাবে গ্রহণ করি [backblaze.com](https://www.backblaze.com)

`backblaze.com` এ একটি বালতি তৈরি করুন, যেকোনো ফাইল আপলোড করুন, ফাইলটি ব্রাউজ করতে ক্লিক করুন এবং `Friendly URL` এর ডোমেইন নাম পান, যা এখানে `f003.backblazeb2.com` ।

![](//p.3ti.site/1725440783.avif)

ডোমেইন নাম `CNAME` থেকে `f003.backblazeb2.com` তে `cloudflare` এ পরিবর্তন করুন এবং প্রক্সি সক্ষম করুন।

![](//p.3ti.site/1725440896.avif)

`SSL` → এনক্রিপশন মোডের মধ্যে `cloudflare` পরিবর্তন করুন, `Full` এ সেট করুন

![](//p.3ti.site/1725438572.avif)

নীচে দেখানো মত রূপান্তর নিয়ম যোগ করুন, এটি প্রথমে রাখুন (প্রথমটির সর্বনিম্ন অগ্রাধিকার রয়েছে):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` ডায়নামিক নির্বাচন করুন এবং আপনার বালতির নামে `concat("/file/your_bucketname",http.request.uri.path)` -তে `your_bucketname` পরিবর্তন করুন।

উপরন্তু, উপরের `cloudflare` রূপান্তর নিয়মে, `index.html` পরিবর্তন করে `file/your_bucketname/index.html` করা হয়েছে, এবং অন্যান্য কনফিগারেশন একই থাকবে।

![](//p.3ti.site/1725441384.avif)