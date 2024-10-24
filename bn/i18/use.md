# ইনস্টল করুন এবং ব্যবহার করুন

## উইন্ডোজ প্রথমে গিট ব্যাশ ইনস্টল করুন

সিস্টেম windows [প্রথমে `git bash` ডাউনলোড এবং ইনস্টল করতে এখানে ক্লিক করুন](https://git-scm.com/download/win) ।

পরবর্তী অপারেশনগুলি `git bash` এ চালান।

## ইনস্টল করুন

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### অনুবাদ টোকেন কনফিগার করুন

টোকেন কপি করতে ক্লিক করুন [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` তৈরি করুন, এতে কপি করা সামগ্রী পেস্ট করুন, বিষয়বস্তুটি নিম্নরূপ:

```
token: YOUR_API_TOKEN
```

[i18n.site/payBill](//i18n.site/payBill) , আপনাকে অর্থপ্রদানের জন্য একটি ক্রেডিট কার্ড বাঁধতে হবে (কোনও রিচার্জের প্রয়োজন নেই, ওয়েবসাইটটি স্বয়ংক্রিয়ভাবে ব্যবহার অনুযায়ী ফি কেটে নেবে, [মূল্যের জন্য হোমপেজ দেখুন](/#price) )।

## ব্যবহার

### ডেমো প্রকল্প

`i18` অনুবাদের কনফিগারেশন শিখতে অনুগ্রহ করে ডেমো প্রকল্পটি পড়ুন [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

চীনে ব্যবহারকারীরা ক্লোন করতে পারেন [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

ক্লোনিং করার পরে, ডিরেক্টরিটি লিখুন এবং অনুবাদ সম্পূর্ণ করতে `i18` চালান।

### ডিরেক্টরি গঠন

টেমপ্লেট গুদাম ডিরেক্টরি গঠন নিম্নরূপ

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` ডিরেক্টরিতে অনুবাদিত ডেমো ফাইলগুলি শুধুমাত্র একটি উদাহরণ এবং মুছে ফেলা যেতে পারে।

### অনুবাদ চালান

ডিরেক্টরি লিখুন এবং অনুবাদ করতে `i18` চালান।

অনুবাদ ছাড়াও, প্রোগ্রামটি `.i18n/data` ফোল্ডারও তৈরি করবে, অনুগ্রহ করে এটি সংগ্রহস্থলে যোগ করুন।

নতুন ফাইলটি অনুবাদ করার পরে, এই ডিরেক্টরিতে একটি নতুন ডেটা ফাইল তৈরি হবে `git add . ` যুক্ত করতে ভুলবেন না।

## কনফিগারেশন ফাইল

`.i18n/conf.yml` হল `i18` কমান্ড লাইন অনুবাদ টুলের কনফিগারেশন ফাইল

বিষয়বস্তু নিম্নরূপ:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### উৎস ভাষা &

কনফিগারেশন ফাইলে, `fromTo` এর অধীনস্থ:

`en` হল উৎস ভাষা, `zh ja ko de fr` হল অনুবাদের লক্ষ্য ভাষা।

ভাষা কোড দেখুন [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

উদাহরণস্বরূপ, আপনি যদি চীনাকে ইংরেজিতে অনুবাদ করতে চান, তাহলে এই লাইনটি `zh: en` পুনরায় লিখুন।

আপনি যদি সমস্ত সমর্থিত ভাষায় অনুবাদ করতে চান, অনুগ্রহ করে `:` পরে খালি রাখুন। উদাহরণস্বরূপ

```
i18n:
  fromTo:
    en:
```

বিভিন্ন সাবডিরেক্টরিগুলির জন্য বিভিন্ন `fromTo` কনফিগার করা যেতে : একটি প্রদর্শন নিম্নরূপ লেখা হয় /

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

এই কনফিগারেশন টেবিলে, ডিরেক্টরি `blog` অনুবাদের উৎস ভাষা হল `zh` , এবং ডিরেক্টরি `blog/your_file_name.md` অনুবাদের উৎস ভাষা হল `ja` ।

### ফাইল উপেক্ষা করুন

ডিফল্টরূপে, উৎস ভাষা ডিরেক্টরিতে `.md` এবং `.yml` দিয়ে শুরু হওয়া সমস্ত ফাইল অনুবাদ করা হবে।

আপনি যদি কিছু ফাইল উপেক্ষা করতে চান এবং সেগুলি অনুবাদ না করতে চান (যেমন অসমাপ্ত খসড়া), আপনি `ignore` ফিল্ড কনফিগারেশন ব্যবহার করতে পারেন।

`ignore` `.gitignore` ফাইলের মতো একই সিনট্যাক্স ব্যবহার করে [globset](https://docs.rs/globset/latest/globset/#syntax)

উদাহরণস্বরূপ, উপরের কনফিগারেশন ফাইলে `_* ` এর অর্থ হল `_` দিয়ে শুরু হওয়া ফাইলগুলি অনুবাদ করা হবে না।

## অনুবাদের নিয়ম

### অনুবাদ সম্পাদকদের লাইন যোগ বা মুছে দেওয়া উচিত নয়

অনুবাদ সম্পাদনাযোগ্য। মূল পাঠ্যটি পরিবর্তন করুন এবং মেশিন-এটি আবার অনুবাদ করুন, অনুবাদের ম্যানুয়াল পরিবর্তনগুলি ওভাররাইট করা হবে না (যদি মূল পাঠের এই অনুচ্ছেদটি সংশোধন করা না হয়)।

> [!WARN]
> অনুবাদের লাইন এবং মূল পাঠ্য একের সাথে এক হতে হবে। অর্থাৎ অনুবাদ কম্পাইল করার সময় লাইন যোগ বা মুছে ফেলবেন না। অন্যথায়, এটি অনুবাদ সম্পাদনা ক্যাশে বিভ্রান্তি সৃষ্টি করবে।

কিছু ভুল হলে, [সমাধানের জন্য FAQ পড়ুন।](/i18/qa#H1)

### `YAML` অনুবাদ

কমান্ড লাইন টুল সোর্স ল্যাঙ্গুয়েজ ফাইল ডিরেক্টরিতে `.yml` দিয়ে শেষ হওয়া সমস্ত ফাইল খুঁজে পাবে এবং সেগুলি অনুবাদ করবে।

* মনে রাখবেন যে ফাইলের নাম প্রত্যয়টি অবশ্যই `.yml` হতে হবে ( `.yaml` নয়)।

টুলটি শুধুমাত্র অভিধানের মানগুলিকে `.yml` তে অনুবাদ করে, অভিধান কীগুলি নয়৷

উদাহরণস্বরূপ `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` হিসাবে অনুবাদ করা হবে

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` এর অনুবাদ ম্যানুয়ালিও পরিবর্তন করা যেতে পারে (তবে অনুবাদে কী বা লাইন যোগ বা মুছবেন না)।

`YAML` অনুবাদের উপর ভিত্তি করে, আপনি সহজেই বিভিন্ন প্রোগ্রামিং ভাষার জন্য আন্তর্জাতিক সমাধান তৈরি করতে পারেন।

## উন্নত ব্যবহার

### অনুবাদ সাবডিরেক্টরি

যতক্ষণ `.i18n/conf.yml` তৈরি হয় (প্রতিবার ডেমো প্রকল্প টেমপ্লেট থেকে শুরু করার দরকার নেই), `i18` ভাল কাজ করবে।

কমান্ড লাইন টুলটি সমস্ত সাবডিরেক্টরিতে `.i18n/conf.yml` কনফিগারেশন খুঁজে পাবে এবং সেগুলি অনুবাদ করবে।

যে প্রকল্পগুলি [monorepo](//monorepo.tools) ব্যবহার করে সেগুলি ভাষা ফাইলগুলিকে সাবডিরেক্টরিতে বিভক্ত করতে পারে।

![](https://p.3ti.site/1719910016.avif)

### কাস্টম ইনস্টলেশন ডিরেক্টরি

এটি ডিফল্টরূপে `/usr/local/bin` এ ইনস্টল করা হবে।

যদি `/usr/local/bin` লেখার অনুমতি না থাকে তবে এটি `~/.bin` এ ইনস্টল করা হবে।

এনভায়রনমেন্ট ভেরিয়েবল `TO` সেট করা ইনস্টলেশন ডিরেক্টরিকে সংজ্ঞায়িত করতে পারে, উদাহরণস্বরূপ :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```