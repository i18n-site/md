# কাস্টম নেভিগেশন

ন্যাভিগেশন কাস্টমাইজ করার জন্য একটি উদাহরণ হিসাবে ডেমো সাইট নেওয়া যাক [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

উপরের চিত্রে নম্বরযুক্ত এলাকার সাথে সম্পর্কিত ফাইলগুলি নিম্নরূপ:

1. বাম [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. ডান [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) হল একটি টেমপ্লেট ভাষা যা `HTML` এর তৈরি করে।

[➔ এর ব্যাকরণ শিখতে এখানে ক্লিক করুন pug](https://pugjs.org)

বিন্যাস স্ট্রিং `${I18N.sponsor}` ফাইলে আন্তর্জাতিকীকরণ প্রয়োগ করা হয়, এবং এর বিষয়বস্তু উৎস ভাষা ডিরেক্টরিতে সংশ্লিষ্ট পাঠ্যের সাথে প্রতিস্থাপিত হবে [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)

**`pug` এর মধ্যে `css` এবং `js` লিখবেন না** , অন্যথায় একটি ত্রুটি হবে।

শৈলীগুলি `css` এ লেখা হয় এবং ওয়েব উপাদান তৈরি করে মিথস্ক্রিয়া অর্জন করা হয়।

এখানে, ন্যাভিগেশন বারের সাথে সম্পর্কিত ফাইলটি : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)