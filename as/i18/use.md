# সংস্থাপন আৰু ব্যৱহাৰ কৰক

## উইণ্ড'জে প্ৰথমে git bash ইনষ্টল কৰে

windows , অনুগ্ৰহ কৰি [ইয়াত ক্লিক কৰক প্ৰথমে `git bash` ডাউনলোড আৰু ইনষ্টল কৰিবলৈ](https://git-scm.com/download/win) ।

`git bash` ত পৰৱৰ্তী কাৰ্য্যসমূহ চলাওক।

## স্থাপন কৰা

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### অনুবাদ টোকেন বিন্যাস কৰক

ভিজিট [i18n.site/token](//i18n.site/token) টোকেন কপি কৰিবলৈ ক্লিক কৰক

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` সৃষ্টি কৰক, কপি কৰা বিষয়বস্তু ইয়াত পেষ্ট কৰক, বিষয়বস্তু তলত দিয়া ধৰণৰ:

```
token: YOUR_API_TOKEN
```

ইয়াৰ উপৰিও আপুনি এটা পেমেণ্ট ক্ৰেডিট কাৰ্ড বান্ধিব লাগিব [i18n.site/payBill](//i18n.site/payBill) কোনো ৰিচাৰ্জৰ প্ৰয়োজন নাই, ৱেবছাইটটোৱে ব্যৱহাৰ অনুসৰি স্বয়ংক্ৰিয়ভাৱে মাচুল কৰ্তন কৰিব, [মূল্য নিৰ্ধাৰণৰ বাবে হোমপেজ চাওক](/#price) )।

## ব্যৱহাৰ

### ডেমো প্ৰজেক্ট

`i18` অনুবাদৰ বিন্যাস শিকিবলৈ অনুগ্ৰহ কৰি ডেমো প্ৰকল্প চাওক [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

চীনত ব্যৱহাৰকাৰীয়ে ক্ল'ন কৰিব পাৰে [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

ক্ল'নিং কৰাৰ পিছত, ডাইৰেকটৰীত প্ৰৱেশ কৰক আৰু অনুবাদ সম্পূৰ্ণ কৰিবলৈ `i18` চলাওক।

### ডাইৰেকটৰি গঠন

সাঁচ গুদাম ডাইৰেকটৰিৰ গঠন তলত দিয়া ধৰণৰ

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` ডাইৰেকটৰীত অনুবাদ কৰা ডেমো ফাইলসমূহ মাত্ৰ এটা উদাহৰণ আৰু মচি পেলাব পাৰি।

### অনুবাদ চলাওক

ডাইৰেকটৰি সুমুৱাওক আৰু অনুবাদ কৰিবলে `i18` চলাওক।

অনুবাদৰ উপৰিও প্ৰগ্ৰামটোৱে `.i18n/data` ফোল্ডাৰটোও সৃষ্টি কৰিব, অনুগ্ৰহ কৰি ইয়াক ভঁৰালত যোগ কৰক।

নতুন নথিপত্ৰ অনুবাদ কৰাৰ পিছত, এই পঞ্জিকাত `git add . ` নতুন তথ্য নথিপত্ৰ সৃষ্টি কৰা হ'ব ।

## বিন্যাস নথিপত্ৰ

`.i18n/conf.yml` হৈছে `i18` আদেশ শাৰী অনুবাদ সঁজুলিৰ বিন্যাস নথিপত্ৰ

বিষয়বস্তু তলত দিয়া ধৰণৰ:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### উৎস ভাষা অনুবাদ ভাষা &

বিন্যাস নথিপত্ৰত, `fromTo` ৰ অধীনস্থ :

`en` হৈছে উৎস ভাষা, `zh ja ko de fr` হৈছে অনুবাদৰ লক্ষ্য ভাষা।

ভাষাৰ ক'ড চাওক [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

উদাহৰণস্বৰূপে, যদি আপুনি চীনা ভাষাক ইংৰাজীলৈ অনুবাদ কৰিব বিচাৰে, এই শাৰীটো পুনৰ লিখক `zh: en` ।

যদি আপুনি সকলো সমৰ্থিত ভাষালৈ অনুবাদ কৰিব বিচাৰে, অনুগ্ৰহ কৰি `:` ৰ পিছত খালী ৰাখক। উদাহৰণ স্বৰূপে

```
i18n:
  fromTo:
    en:
```

আপুনি / উপডাইৰেকটৰ বাবে বিভিন্ন `fromTo` বিন্যাস কৰিব পাৰে ফাইলসমূহৰ বাবে এটা প্ৰদৰ্শন নিম্নলিখিত ধৰণে লিখা হয় :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

এই বিন্যাস টেবুলত, কেটেলগ `blog` অনুবাদৰ উৎস ভাষা `zh` , আৰু কেটেলগ `blog/your_file_name.md` অনুবাদৰ উৎস ভাষা `ja` ।

### বহুভাষিক ছবি/লিংক

যেতিয়া ছবিসমূহৰ URLসমূহ আৰু `replace:` আৰু `MarkDown` ত সংযোগসমূহ (আৰু এম্বেডেড `HTML` ৰ `src` আৰু `href` বৈশিষ্ট্যসমূহ) এই উপসৰ্গৰ সৈতে `.i18n/conf.yml` ত বিন্যাস কৰা হয়, URL ত উৎস ভাষা ক'ড অনুবাদৰ ভাষা ক'ড ( [ভাষা)](/i18/LANG_CODE) দ্বাৰা সলনি কৰা হ'ব [ক'ড তালিকা](/i18/LANG_CODE) ).

উদাহৰণস্বৰূপ, আপোনাৰ বিন্যাস নিম্নলিখিত:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` এটা অভিধান, চাবিটো হৈছে সলনি কৰিবলগীয়া URL উপসৰ্গ, আৰু মানটো হৈছে সলনি কৰাৰ নিয়ম।

ওপৰৰ নিয়ম `ko de uk>ru zh-TW>zh >en` সলনি কৰাৰ অৰ্থ হ'ল `ko de` নিজৰ ভাষা ক'ডৰ ছবি ব্যৱহাৰ কৰে, `zh-TW` আৰু `zh` `zh` ৰ ছবি ব্যৱহাৰ কৰে, `uk` `ru` ৰ ছবি ব্যৱহাৰ কৰে, আৰু অন্য ভাষাই (যেনে `ja` ) ছবি ব্যৱহাৰ কৰে অবিকল্পিতভাৱে `en` ৰ।

উদাহৰণস্বৰূপে, `MarkDown` ৰ ফৰাচী ( `fr` ) উৎস ফাইলটো তলত দিয়া ধৰণৰ :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

অনুবাদ আৰু সৃষ্টি কৰা ইংৰাজী ( `en` ) ফাইলটো তলত দিয়া ধৰণৰ :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

ইয়াত উৎস ভাষা ক'ডত `/en/` লক্ষ্য ভাষাত `/zh/` সলনি কৰা হয়।

টোকা : URL ত সলনি কৰা লিখনীৰ ভাষা ক'ডৰ আগত আৰু পিছত `/` থাকিব লাগিব।

> [!TIP]
> যদি `- /` `url:` ত বিন্যাস কৰা হৈছে, কেৱল আপেক্ষিক পথসমূহ মিলাব, কিন্তু `//` ৰে আৰম্ভ হোৱা URLসমূহ মিলাব নোৱাৰিব।
>
> যদি এটা ডমেইন নামৰ কিছুমান সংযোগ সলনি কৰিব বিচাৰে আৰু কিছুমানে সলনি কৰিব নিবিচাৰে, আপুনি সিহতক পৃথক কৰিবলে বিভিন্ন উপসৰ্গ যেনে `[x](//x.com/en/)` আৰু `[x](https://x.com/en/)` ব্যৱহাৰ কৰিব পাৰে।

### ফাইলটো আওকাণ কৰক

অবিকল্পিতভাৱে, উৎস ভাষা পঞ্জিকাত `.md` আৰু `.yml` ৰে আৰম্ভ হোৱা সকলো নথিপত্ৰ অনুবাদ কৰা হব ।

যদি আপুনি কিছুমান নথিপত্ৰ আওকাণ কৰিব বিচাৰে আৰু সিহতক অনুবাদ কৰিব বিচাৰে (যেনে অসমাপ্ত খচৰা), আপুনি ইয়াক `ignore` ক্ষেত্ৰৰ সৈতে বিন্যাস কৰিব পাৰে ।

`ignore` `.gitignore` ফাইলৰ দৰে [globset](https://docs.rs/globset/latest/globset/#syntax) বাক্যবিন্যাস ব্যৱহাৰ কৰে।

উদাহৰণস্বৰূপ, ওপৰৰ বিন্যাস নথিপত্ৰত `_* ` অৰ্থ হ'ল `_` ৰে আৰম্ভ হোৱা নথিপত্ৰসমূহ অনুবাদ কৰা নহ'ব ।

## অনুবাদৰ নিয়ম

### অনুবাদ সম্পাদকসকলে শাৰী যোগ বা মচি পেলাব নালাগে

অনুবাদ সম্পাদনাযোগ্য। মূল লিখনী পৰিবৰ্তন কৰক আৰু ইয়াক পুনৰ মেচিন-অনুবাদ কৰক, অনুবাদৰ হস্তচালিত পৰিবৰ্তনসমূহ অভাৰৰাইট কৰা নহ'ব (যদি মূল লিখনীৰ এই অনুচ্ছেদ পৰিবৰ্তন কৰা হোৱা নাই)।

> [!WARN]
> অনুবাদৰ শাৰী আৰু মূল পাঠৰ মাজত এজনৰ পৰা এজনকৈ মিল থাকিব লাগিব। অৰ্থাৎ অনুবাদ কম্পাইল কৰাৰ সময়ত শাৰী যোগ বা মচি নিদিব। অন্যথা অনুবাদ সম্পাদনা কেচত বিভ্ৰান্তিৰ সৃষ্টি কৰিব।

যদি কিবা ভুল হয়, অনুগ্ৰহ কৰি [সমাধানৰ বাবে FAQ চাওক।](/i18/qa#H1)

### `YAML` অনুবাদ

আদেশ শাৰী সঁজুলিয়ে উৎস ভাষা নথিপত্ৰ পঞ্জিকাত `.yml` ৰে শেষ হোৱা সকলো নথিপত্ৰ বিচাৰি পাব আৰু সিহতক অনুবাদ কৰিব।

* মন কৰিব যে নথিপত্ৰনামৰ প্ৰত্যয় `.yml` হব লাগিব ( `.yaml` নহয়) ।

সঁজুলিটোৱে কেৱল অভিধানৰ মানসমূহ `.yml` ত অনুবাদ কৰে, অভিধানৰ কি'সমূহ নহয়।

উদাহৰণস্বৰূপে `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` হিচাপে অনুবাদ কৰা হ'ব

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` ৰ অনুবাদ হস্তচালিতভাৱেও পৰিবৰ্তন কৰিব পাৰি (কিন্তু অনুবাদত কি' বা শাৰী যোগ বা মচি পেলাব নালাগে)।

`YAML` অনুবাদৰ ভিত্তিত আপুনি বিভিন্ন প্ৰগ্ৰেমিং ভাষাৰ বাবে আন্তঃৰাষ্ট্ৰীয় সমাধান সহজে নিৰ্মাণ কৰিব পাৰে।

## উন্নত ব্যৱহাৰ

### অনুবাদ উপডাইৰেকটৰী

যেতিয়ালৈকে `.i18n/conf.yml` সৃষ্টি কৰা হয় (প্ৰতিবাৰেই ডেমো প্ৰকল্প সাঁচৰ পৰা আৰম্ভ কৰাৰ প্ৰয়োজন নাই), `i18` ভালদৰে কাম কৰিব।

আদেশ শাৰী সঁজুলিয়ে সকলো উপডাইৰেকটৰীত `.i18n/conf.yml` বিন্যাস বিচাৰি পাব আৰু সিহতক অনুবাদ কৰিব ।

[monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### স্বনিৰ্বাচিত সংস্থাপন পঞ্জিকা

ইয়াক অবিকল্পিতভাৱে `/usr/local/bin` লৈ সংস্থাপন কৰা হব ।

যদি `/usr/local/bin` লিখাৰ অনুমতি নাই ইয়াক `~/.bin` লে সংস্থাপন কৰা হব ।

পৰিৱেশ চলক `TO` সংহতি কৰিলে সংস্থাপন পঞ্জিকা সংজ্ঞায়িত কৰিব পাৰি, উদাহৰণস্বৰূপ :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```