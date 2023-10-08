# I18N.SITE · সীমাহীন ভাষা<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, এটা ষ্টেটিক চাইট জেনেৰেটৰ যিয়ে [এশতকৈও অধিক ভিন্ন ভাষালৈ](https://github.com/i18n-site/node/blob/main/lang/src/index.js) স্বয়ংক্ৰিয় অনুবাদ সমৰ্থন কৰে।

<img src="http://s-cd-3653-i18n-img.oss.dogecdn.com/i18n.lang.webp" alt="" />

কিছুমান মানুহে হয়তো সুধিব বিচাৰিব, এতিয়া ব্ৰাউজাৰত অনুবাদৰ কাম বিল্ট-ইন হোৱাৰ বাবে ৱেবছাইটটো আন্তৰ্জাতিক কৰাটো অপ্ৰয়োজনীয় নেকি?

মই ক&#39;ব বিচাৰো যে **সমগ্ৰ চাইটটোক আন্তৰ্জাতিক কৰিহে আমি বহুভাষিক ইন-ছাইট সম্পূৰ্ণ-পাঠ্য অনুসন্ধান আৰু চাৰ্চ ইঞ্জিন অনুকূলন সমৰ্থন কৰিব পাৰিম।**

## টিউটোৰিয়েল

## কাৰ্য্য পৰিচয়

### মাৰ্কডাউন ফৰ্মেট ৰাখক

### অনুবাদ পৰিবৰ্তন কৰক

অনুবাদ পৰিবৰ্তন কৰাৰ পিছত, আপুনি কেশ্ব আপডেইট কৰিবলে `./i18n.sh` পুনৰায় চলাব লাগিব ।

### অনুবাদৰ টোকা

অনুবাদ মন্তব্যসমূহে \``` ৰ পিছৰ ভাষাটো সূচাব লাগিব, যেনে ` ```rust` ।

বৰ্তমানে rust, c, cpp, java, js, coffee, python, আৰু bash ৰ বাবে মন্তব্য অনুবাদ সমৰ্থন কৰে।

অধিক ভাষাত মন্তব্যৰ বাবে অনুবাদ সমৰ্থন যোগ কৰিবলে [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) সম্পাদনা কৰক।

### প্ৰক্সি বিন্যাস কৰক

নিম্নলিখিত পৰিৱেশ চলকসমূহ সংহতি কৰিলে Google Translate API কলসমূহক প্ৰক্সিৰ মাজেৰে যাবলৈ অনুমতি দিয়ে।

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
export https_proxy=http://127.0.0.1:7890
```

### ভেৰিয়েবল এম্বেডিং

```
test: 测试变量<br 0>嵌入
```

### খালী কৰক কেচ

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
rm -rf .i18n/.cache
```
