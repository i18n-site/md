# I18N.SITE · সীমানা ছাড়া ভাষা<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, একটি স্ট্যাটিক সাইট জেনারেটর যেটি [একশোরও বেশি বিভিন্ন ভাষায়](https://github.com/i18n-site/node/blob/main/lang/src/index.js) স্বয়ংক্রিয় অনুবাদ সমর্থন করে।

<img src="http://s-cd-3653-i18n-img.oss.dogecdn.com/i18n.lang.webp" alt="" />

কিছু লোক জিজ্ঞাসা করতে চাইতে পারে, এখন যেহেতু ব্রাউজারগুলিতে অন্তর্নির্মিত অনুবাদ ফাংশন রয়েছে, ওয়েবসাইটটিকে আন্তর্জাতিকীকরণ করা কি অপ্রয়োজনীয়?

আমি বলতে চাই যে **শুধুমাত্র সমগ্র সাইটের আন্তর্জাতিকীকরণের মাধ্যমে আমরা বহু-ভাষিক ইন-সাইট ফুল-টেক্সট অনুসন্ধান এবং সার্চ ইঞ্জিন অপ্টিমাইজেশান সমর্থন করতে পারি।**

## টিউটোরিয়াল

## ফাংশন ভূমিকা

### মার্কডাউন ফরম্যাট রাখুন

### অনুবাদ পরিবর্তন করুন

অনুবাদ পরিবর্তন করার পরে, ক্যাশে আপডেট করতে আপনাকে `./i18n.sh` পুনরায় চালাতে হবে।

### অনুবাদ নোট

অনুবাদ মন্তব্যে \``` এর পরে ভাষা নির্দেশ করতে হবে, যেমন ` ```rust` ।

বর্তমানে মরিচা, সি, সিপিপি, জাভা, জেএস, কফি, পাইথন এবং ব্যাশের জন্য মন্তব্য অনুবাদ সমর্থন করে।

আরও ভাষায় মন্তব্যের জন্য অনুবাদ সমর্থন যোগ করতে [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) সম্পাদনা করুন।

### প্রক্সি কনফিগার করুন

নিম্নলিখিত এনভায়রনমেন্ট ভেরিয়েবল সেট করা Google Translate API কলগুলিকে প্রক্সির মাধ্যমে যেতে দেয়৷

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

### পরিবর্তনশীল এমবেডিং

```
test: 测试变量<br 0>嵌入
```

### ক্যাশ খালি করুন

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
