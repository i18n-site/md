# ব্লগ টেমপ্লেট

`use: Blog` ৰ ভিতৰত `i18n/conf.yml` মানে ৰেণ্ডাৰৰ বাবে ব্লগ টেমপ্লেট ব্যৱহাৰ কৰা।

ব্লগ পোষ্টৰ `markdown` ফাইলটোৱে মেটা তথ্য কনফিগাৰ কৰিব লাগিব।

মেটা তথ্য নথিপত্ৰৰ আৰম্ভণিতে থাকিব লাগিব, `---` ৰে আৰম্ভ আৰু `---` ৰে শেষ। মাজত বিন্যাস তথ্যৰ বিন্যাস `YAML` ।

এটা ডেমো নথিপত্ৰৰ বিন্যাস নিম্নলিখিত:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` এ বিষয়বস্তুৰ সাৰাংশ সূচায়, যি ব্লগ সূচী পৃষ্ঠাত প্ৰদৰ্শিত হ'ব।

`YMAL` ' ৰ সহায়ত। | `বাক্যবিন্যাস, আপুনি বহু শাৰীৰ সাৰাংশ লিখিব পাৰে।

ব্লগৰ সোঁফালে থকা ডাইৰেকটৰী গছৰ বিন্যাসও `TOC` ফাইল (পূৰ্বৰ অধ্যায় চাওক কেৱল `TOC` ত তালিকাভুক্ত প্ৰবন্ধসমূহ ব্লগৰ হোমপেজ সূচীত দেখা যাব)।

মেটা তথ্য নথকা প্ৰবন্ধসমূহ ব্লগৰ হোমপেজত দেখা নাযায়, কিন্তু সোঁফালে থকা ডাইৰেকটৰী গছত দেখা দিব পাৰে।

## লেখকৰ তথ্য

লেখকৰ তথ্য প্ৰবন্ধটোৰ মেটা তথ্যত লিখিব পাৰি, যেনে:

```yml
author: marlowe
```

তাৰ পিছত উৎস ভাষা ডাইৰেকটৰীত `author.yml` সম্পাদনা কৰক আৰু লেখকৰ তথ্য যোগ কৰক, যেনে :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` আৰু `title` সকলো বৈকল্পিক। যদি `name` সংহতি কৰা হোৱা নাই, চাবিৰ নাম (ইয়াত `marlowe` ) `name` হিচাপে ব্যৱহাৰ কৰা হব ।

ডেমো প্ৰকল্প [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) আৰু [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) চাওক

## পিন কৰা প্ৰবন্ধ

যদি আপুনি প্ৰবন্ধটো ওপৰত পিন কৰিব লাগে, অনুগ্ৰহ কৰি `i18n.site` চলাওক আৰু `.i18n/data/blog` তলৰ `xxx.yml` ফাইল সম্পাদনা কৰক, আৰু টাইমষ্টেম্পক এটা ঋণাত্মক সংখ্যালৈ সলনি কৰক (একাধিক ঋণাত্মক সংখ্যাক আটাইতকৈ ডাঙৰৰ পৰা সৰুলৈ সজাব)।