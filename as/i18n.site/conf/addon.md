# প্লাগ-ইন

প্লাগ-ইনসমূহক `.i18n/conf.yml` ত বিন্যাস কৰিব পাৰি, যেনে:

```yml
addon:
  - i18n.addon/toc
```

## অফিচিয়েল প্লাগ-ইন

* `i18n.addon/toc` : ডাইৰেকটৰি সূচী
  `TOC` ৰ ওপৰত ভিত্তি কৰি `json` ৰ পঞ্জিকা সূচী সৃষ্টি কৰক, অবিকল্পিতভাৱে সামৰ্থবান কৰা

* `i18n.addon/mouse` : মাউছৰ প্ৰভাৱ

## ফাইলৰ নামৰ নিয়ম

প্লাগ-ইনসমূহ সকলো `npm` পেকেইজ।

ওপৰৰ `i18n.addon/toc` সৈতে সংগতি ৰাখি সৰঞ্জামটো হ'ল [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

প্লাগ-ইনে অবিকল্পিতভাৱে শেহতীয়া সংস্কৰণ ব্যৱহাৰ কৰে আৰু সাপ্তাহিকভাৱে আপডেইটসমূহৰ বাবে পৰীক্ষা কৰে।

যদি আপুনি সংস্কৰণটো ঠিক কৰিব বিচাৰে, আপুনি `i18n.addon/toc@0.1.3` লিখিব পাৰে ।

অনুবাদ আদেশ শাৰী `i18n.site` এ প্লাগ-ইন সৰঞ্জামৰ নিয়ম নথিপত্ৰ সংস্থাপন কৰিব আৰু তাৰ পিছত ইয়াক নিষ্পাদন কৰিব ।

চুক্তিবদ্ধ ফাইলৰ নামসমূহ তলত দিয়া ধৰণৰ

### htmIndex.js

`htmIndex.js` `.i18n/htm/index.js` ৰ শেষলৈকে বেজী দিয়া হব।

য'ত `__CONF__` বৰ্তমান বিন্যাসৰ নামেৰে সলনি কৰা হব (যেনে `dev` বা `ol` ) ।

### afterTran.js

অনুবাদ সম্পূৰ্ণ হোৱাৰ পিছত ইয়াক কল কৰা হ'ব, আৰু পাছ কৰা প্ৰাচলসমূহ তলত দিয়া ধৰণৰ।

* `lang_li` : তালিকা, প্ৰথম ভাষাটো হ'ল উৎস ভাষা
* `changed` : কৰা ফাইলসমূহ
* `root` : ৰূট ডাইৰেকটৰি

ৰিটাৰ্ণ মানটো এটা অভিধান, যেনে...

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` হৈছে আউটপুট নথিপত্ৰ তালিকা, `path` হৈছে নথিপত্ৰ পথ, আৰু `txt` হৈছে নথিপত্ৰৰ বিষয়বস্তু ।

## বিল্ট-ইন ফাংচনসমূহ

অন্তৰ্নিৰ্মিত `js` চলনসময় ৰ গৌণ বিকাশৰ ওপৰত ভিত্তি কৰি কৰা হৈছে [boa](https://github.com/boa-dev/boa) আৰু অন্তৰ্নিৰ্মিত কাৰ্য্যসমূহ তলত দিয়া ধৰণৰ :

* `wPath(path, txt)` : ফাইলত লিখক
* `rTxt(path)` : লিখনী ফাইল পঢ়ক
* `rBin(path)` : বাইনাৰী ফাইল পঢ়ক
* `rDir(dirpath)` : ডাইৰেকটৰি পঢ়ক, ৰিটাৰ্ণ মান এটা এৰে : তালিকা, ফাইল তালিকা

## উন্নয়ন গাইড

প্লাগ-ইন বিকাশ এটা উল্লেখ হ'ব পাৰে [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)