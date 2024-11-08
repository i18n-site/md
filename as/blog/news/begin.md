---

brief: |
  বৰ্তমান, দুটা মুক্ত উৎস আদেশ শাৰী সঁজুলি প্ৰণয়ন কৰা হৈছে: i18 (MarkDown আদেশ শাৰী অনুবাদ সঁজুলি) আৰু i18n.site (বহু-ভাষা স্থিতিশীল দস্তাবেজ চাইট উৎপাদক)

---


# i18n.site · MarkDown অনুবাদ আৰু ৱেবছাইট নিৰ্মাণ সঁজুলি এতিয়া অনলাইন!

ডেৰ বছৰতকৈও অধিক সময়ৰ বিকাশৰ পিছত, [https://i18n.site](//i18n.site)

বৰ্তমানে, দুটা মুক্ত উৎস আদেশ শাৰী সঁজুলি প্ৰণয়ন কৰা হৈছে:

* `i18` : MarkDown আদেশ শাৰীৰ অনুবাদ সঁজুলি
* `i18n.site` বহু-ভাষা স্থিতিশীল নথিপত্ৰ চাইট জেনেৰেটৰ : **পঢ়া অভিজ্ঞতাৰ বাবে অনুকূলিত**

অনুবাদে `Markdown` ৰ বিন্যাস নিখুঁতভাৱে বজাই ৰাখিব পাৰে। ফাইল পৰিবৰ্তনসমূহ চিনাক্ত কৰিব পাৰে আৰু কেৱল পৰিবৰ্তনৰ সৈতে ফাইলসমূহ অনুবাদ কৰিব পাৰে।

অনুবাদ সম্পাদনযোগ্য যদি আপুনি মূল লিখনী পৰিবৰ্তন কৰে আৰু মেচিনেৰে ইয়াক পুনৰ অনুবাদ কৰে, অনুবাদৰ হস্তচালিত পৰিবৰ্তনসমূহ অভাৰৰাইট কৰা নহ'ব (যদি মূল লিখনীৰ এই অনুচ্ছেদ পৰিবৰ্তন কৰা হোৱা নাই)।

[➤ ইয়াত ক্লিক কৰক অনুমোদন আৰু স্বয়ংক্ৰিয়ভাৱে github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) আৰু **বোনাছ $50 লাভ কৰক** !

## মূলত

ইণ্টাৰনেটৰ যুগত সমগ্ৰ বিশ্বই এখন বজাৰ, বহুভাষিকতা আৰু স্থানীয়কৰণ মৌলিক দক্ষতা।

বৰ্ত্তমানৰ অনুবাদ ব্যৱস্থাপনা সঁজুলিসমূহ অতি গধুৰ `git`

গতিকে, মই এটা অনুবাদ সঁজুলি `i18` বিকশিত কৰিলোঁ আৰু অনুবাদ সঁজুলিৰ ওপৰত ভিত্তি কৰি এটা বহু-ভাষা ষ্টেটিক চাইট জেনেৰেটৰ `i18n.site` নিৰ্মাণ কৰিলোঁ।

![](https://p.3ti.site/1723777556.avif)

এয়া মাত্ৰ আৰম্ভণিহে, আৰু বহুত কৰিবলগীয়া আছে।

উদাহৰণস্বৰূপে, ছ’চিয়েল মিডিয়া আৰু ইমেইল চাবস্ক্ৰিপচনৰ সৈতে ষ্টেটিক ডকুমেণ্ট চাইট সংযোগ কৰি, আপডেটসমূহ মুকলি কৰাৰ সময়ত ব্যৱহাৰকাৰীসকলৰ সৈতে সময়মতে যোগাযোগ কৰিব পাৰি।

উদাহৰণস্বৰূপে, বহু-ভাষা মঞ্চ আৰু ৱৰ্ক অৰ্ডাৰ চিস্টেমসমূহ যিকোনো ৱেব পৃষ্ঠাত সন্নিৱিষ্ট কৰিব পাৰি, যাৰ ফলত ব্যৱহাৰকাৰীসকলে কোনো বাধা নোহোৱাকৈ যোগাযোগ কৰিব পাৰে।

## মুক্ত উৎস

ফ্ৰন্ট-এণ্ড, বেক-এণ্ড, আৰু কমাণ্ড লাইন [ক'ডসমূহ সকলো মুক্ত উৎস](https://i18n.site/i18n.site/c/src) (অনুবাদ আৰ্হি এতিয়াও মুক্ত উৎস নহয়)।

ব্যৱহৃত প্ৰযুক্তি ষ্টেক তলত দিয়া ধৰণৰ:

ফ্ৰন্টএণ্ড [svelte](https://svelte.dev) [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

কমাণ্ড লাইন আৰু বেকএণ্ড মৰিছাৰ ওপৰত ভিত্তি কৰি বিকশিত কৰা হৈছে।

পিছফালৰ মূৰ [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

আদেশ শাৰী [এম্বেড কৰা js ইঞ্জিন boa_engine](https://docs.rs/boa_engine) , [এম্বেড কৰা হৈছে ডাটাবেছ fjall](https://github.com/fjall-rs/fjall) .

চাৰ্ভাৰ [contabo](https://my.contabo.com) VPS

ডাটাবেছ [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

স্ব- [chasquid](https://github.com/albertito/chasquid) মেইল পঠাওক SMTP

## আমাৰ সৈতে যোগাযোগ কৰক

নতুন সামগ্ৰী মুকলি হ’লে সমস্যা অনিবাৰ্য হৈ পৰে।

গুগল ফ'ৰামৰ জৰিয়তে [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) সৈতে যোগাযোগ কৰিব পাৰে :