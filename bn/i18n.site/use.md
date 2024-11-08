# প্রিভিউ ইনস্টল করুন &

## ইনস্টল করুন

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## কনফিগারেশন টোকেন

`i18n.site` -এর একটি অন্তর্নির্মিত `i18` অনুবাদ টুল রয়েছে অনুগ্রহ করে [অ্যাক্সেস টোকেন কনফিগার করতে `i18` নথিতে উল্লেখ করতে](/i18/use) ।

## ডেমো প্রকল্প

কিভাবে `i18n.site` ব্যবহার করতে হয় তা শিখতে একটি ডেমো প্রকল্প দিয়ে শুরু করা যাক।

আমরা প্রথমে ডেমো সংগ্রহস্থল ক্লোন করি এবং নিম্নরূপ কমান্ডটি চালাই:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

চীনের মূল ভূখন্ডের ব্যবহারকারীরা করতে পারেন:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` কোড বেস ক্লোনের ডিরেক্টরির নাম অবশ্যই `md` হতে হবে যাতে `docker` এর সাথে স্থানীয় পূর্বরূপের সুবিধা হয়।

### অনুবাদ

প্রথমে, `md` ডিরেক্টরি লিখুন এবং `i18n.site` চালান, যা `en` থেকে `zh` অনুবাদ করবে।

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

চালানোর পরে, অনুবাদ এবং ক্যাশে ফাইল তৈরি করা হবে দয়া করে `md` `git add . ` সংগ্রহস্থলে যোগ করতে ভুলবেন না।

### স্থানীয় পূর্বরূপ

`docker` ইনস্টল করুন এবং শুরু করুন ( `MAC` ব্যবহারকারী `docker` এর জন্য রানটাইম হিসাবে ব্যবহার করার পরামর্শ দেন) [orbstack](https://orbstack.dev)

তারপর, `docker` ডিরেক্টরি লিখুন এবং `./up.sh` চালান, এবং তারপর স্থানীয়ভাবে পূর্বরূপ দেখতে যান [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">