# ইনষ্টল কৰক পূৰ্বদৰ্শন &

## স্থাপন কৰা

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## বিন্যাস টোকেন

`i18n.site` এটা অন্তৰ্নিৰ্মিত `i18` অনুবাদ সঁজুলি আছে অনুগ্ৰহ কৰি [ইয়াত ক্লিক কৰক অভিগম টোকেন বিন্যাস কৰিবলে `i18` দস্তাবেজ চাবলৈ](/i18/use) ।

## ডেমো প্ৰজেক্ট

`i18n.site` কেনেকৈ ব্যৱহাৰ কৰিব লাগে শিকিবলৈ এটা ডেমো প্ৰজেক্টৰ পৰা আৰম্ভ কৰোঁ আহক।

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

`demo.i18n.site` ক'ড ভিত্তি ক্ল'নৰ পঞ্জিকাৰ নাম `md` হব লাগিব `docker` ৰ সৈতে স্থানীয় পূৰ্বদৰ্শন সহজ কৰিবলে ।

### অনুবাদ কৰা

প্ৰথমে, `md` পঞ্জিকা সুমুৱাওক আৰু `i18n.site` চলাওক, যি `en` ৰ পৰা `zh` লৈ অনুবাদ কৰিব ।

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

চলোৱাৰ পিছত, অনুবাদ আৰু কেশ্ব নথিপত্ৰসমূহ সৃষ্টি কৰা হ'ব অনুগ্ৰহ কৰি সিহতক `md` `git add . ` ভঁৰাললৈ যোগ কৰিবলৈ মনত ৰাখিব।

### স্থানীয় পূৰ্বদৰ্শন

`docker` সংস্থাপন আৰু আৰম্ভ কৰক ( `MAC` ব্যৱহাৰকাৰীয়ে [orbstack](https://orbstack.dev) `docker` ৰ বাবে চলনসময় হিচাপে ব্যৱহাৰ কৰাৰ পৰামৰ্শ দিয়ে) ।

তাৰ পিছত, `docker` পঞ্জিকা সুমুৱাওক আৰু `./up.sh` চলাওক, আৰু তাৰ পিছত স্থানীয়ভাৱে পূৰ্বদৰ্শন কৰিবলে [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">