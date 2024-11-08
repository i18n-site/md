# কাষ্টমাইজড নেভিগেচন

নেভিগেচন কেনেকৈ কাষ্টমাইজ কৰিব লাগে সেই বিষয়ে বুজাবলৈ ডেমো চাইটটো উদাহৰণ হিচাপে লওঁ আহক [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

ওপৰৰ চিত্ৰত সংখ্যাযুক্ত অঞ্চলসমূহৰ সৈতে সংগতি ৰাখি ফাইলসমূহ তলত দিয়া ধৰণৰ:

1. বাওঁফালে [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. সোঁ [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) এটা সাঁচ ভাষা যি `HTML` 's সৃষ্টি কৰে।

[➔ ৰ ব্যাকৰণ শিকিবলৈ ইয়াত ক্লিক কৰক pug](https://pugjs.org)

বিন্যাস স্ট্ৰিং `${I18N.sponsor}` নথিপত্ৰত আন্তৰ্জাতিককৰণ প্ৰণয়ন কৰিবলে ব্যৱহাৰ কৰা হয়, আৰু ইয়াৰ বিষয়বস্তু উৎস ভাষা পঞ্জিকাত [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)

**`pug` ত `css` আৰু `js` লিখিব নালাগে** , নহ'লে ভুল হ'ব।

শৈলীসমূহ `css` ত লিখা হয়, আৰু ৱেব উপাদানসমূহ সৃষ্টি কৰি পাৰস্পৰিক ক্ৰিয়া লাভ কৰা হয়।

ইয়াত, নেভিগেচন বাৰৰ [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) সৈতে সংগতি ৰাখি ফাইলটো হ'ল :