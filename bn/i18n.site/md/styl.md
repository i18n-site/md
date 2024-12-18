# শৈলী তালিকা

নিচের স্টাইলে `MarkDown` কিভাবে লিখতে হয় তা দেখতে [এই পৃষ্ঠার সোর্স ফাইল ব্রাউজ করতে এখানে ক্লিক করুন](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) ।

## ভাঁজ ব্লক

|+| MarkDown কি?

    মার্কডাউন হল একটি হালকা মার্কআপ ভাষা যা ব্যবহারকারীদের একটি প্লেইন টেক্সট ফরম্যাটে ফরম্যাট করা ডকুমেন্ট তৈরি করতে দেয় যা পড়তে এবং লিখতে সহজ।

    সাধারণত ডকুমেন্টেশন, ব্লগ নিবন্ধ, ই-বুক, ফোরাম পোস্ট ইত্যাদি লিখতে ব্যবহৃত হয়।

    এটির নিম্নলিখিত সুবিধা রয়েছে:

    1. শিখতে সহজ
    1. অত্যন্ত পঠনযোগ্য
    1. সংস্করণ নিয়ন্ত্রণ বন্ধুত্বপূর্ণ

       যেহেতু `MarkDown` ডকুমেন্ট প্লেইন টেক্সট ফরম্যাটে আছে, প্রোগ্রামাররা সহজেই সেগুলোকে ভার্সন কন্ট্রোল সিস্টেমে অন্তর্ভুক্ত করতে পারে (যেমন `git` )।

       এটি ট্র্যাকিং পরিবর্তন এবং সহযোগিতাকে অনেক সহজ করে তোলে, বিশেষ করে দলের উন্নয়নে।

|-| I18N কি?

    "I18N" হল "আন্তর্জাতিককরণ" এর সংক্ষিপ্ত রূপ।

    যেহেতু "আন্তর্জাতিককরণ" শব্দটিতে "I" এবং "N" এর মধ্যে 18টি অক্ষর রয়েছে, তাই উপস্থাপনাকে সহজ করার জন্য "I18N" ব্যবহার করা হয়।

    সাধারণের পরিভাষায়, এর অর্থ একাধিক ভাষা সমর্থন করা।


ফোল্ডিং ব্লক হল `i18n.site` থেকে `MarkDown` এর বর্ধিত সিনট্যাক্স, যা নিম্নরূপ লেখা হয়েছে :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

সঙ্গে `|+| `或`|-| ` দিয়ে শুরু হওয়া লাইনটি একটি ভাঁজ ব্লক তৈরি করবে, এবং ভাঁজ ব্লকের বিষয়বস্তু হল একই স্তরের ইন্ডেন্টেশন সহ পরবর্তী লাইনগুলি (অনুচ্ছেদগুলি ফাঁকা লাইন দ্বারা পৃথক করা হয়েছে)।

পাস'|-| `标记的折叠块默认展开，`|+| `ট্যাগ করা ভেঙে পড়া ব্লকগুলি ডিফল্টরূপে ভেঙে পড়ে।

## & স্ট্রাইকথ্রু &

__ আন্ডারস্কোর __ ,~~ স্ট্রাইকথ্রু~~ এবং **সাহসী** উপস্থাপনা পাঠ্য।

এটি নিম্নরূপ লেখা হয়:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site` ওয়েবসাইট বিল্ডিং টুলের `MarkDown` পার্সারটি আন্ডারলাইন, স্ট্রাইকথ্রু এবং বোল্ড সিনট্যাক্সকে অপ্টিমাইজ করেছে এটি চিহ্নের আগে এবং পরে স্পেস ছাড়াই কার্যকর হতে পারে, যা চীন, জাপান এবং কোরিয়ার মতো ভাষায় নথি লেখা সহজ করে তোলে। বিভাজক হিসাবে স্পেস ব্যবহার করবেন না।

বর্ধিত : [কেন কখনও কখনও নাগেটসের Markdown সিনট্যাক্স ( `**……**` ) কার্যকর হয় না?](//juejin.cn/post/7064565848421171213)

## উদ্ধৃতি

### একক লাইন উদ্ধৃতি

> এটা আমার স্বভাব যে আমার প্রতিভা কাজে লাগবে, এবং আমার সমস্ত অর্থ ব্যয় হয়ে গেলে আমি ফিরে আসব।
<p style="text-align:right">─ লি বাই</p>

### একাধিক লাইনের উদ্ধৃতি

> কল্পবিজ্ঞানের আরেকটি অনন্য সুবিধা হল এর অত্যন্ত বিস্তৃত পরিধি।
> একটি "যুদ্ধ এবং শান্তি", এক মিলিয়ন শব্দের সাথে, শুধুমাত্র কয়েক দশক ধরে একটি অঞ্চলের ইতিহাস বর্ণনা করে;
> এবং অসিমভের "দ্য ফাইনাল উত্তর"-এর মতো কল্পবিজ্ঞান উপন্যাসগুলি মানুষ সহ সমগ্র মহাবিশ্বের কোটি কোটি বছরের ইতিহাস মাত্র কয়েক হাজার শব্দে স্পষ্টভাবে বর্ণনা করে।
> ঐতিহ্যগত সাহিত্যে এই ধরনের অন্তর্ভুক্তি এবং সাহসীতা অর্জন করা অসম্ভব।
<p style="text-align:right">── লিউ সিক্সিন</p>

### টিপ `> [!TIP]`

> [!TIP]
> আপনার পাসপোর্ট এবং ভিসার মেয়াদ পরীক্ষা করতে ভুলবেন না।

এটি নিম্নরূপ লেখা আছে

```
> [!TIP]
> YOUR CONTENT
```

### মন্তব্য `> [!NOTE]`

> [!NOTE]
> আপনি যদি আমাকে একটি বার্তা পাঠান এবং আমি তাত্ক্ষণিকভাবে উত্তর দেই, এর অর্থ কী?
> এটি দেখায় যে আমি সত্যিই মোবাইল ফোনের সাথে খেলতে পছন্দ করি।


### সতর্কতা `> [!WARN]`

> [!WARN]
> বন্য অ্যাডভেঞ্চারে যাওয়ার সময়, নিরাপদ থাকা গুরুত্বপূর্ণ। এখানে কিছু প্রধান নিরাপত্তা টিপস আছে:
>
> - **আবহাওয়ার পূর্বাভাস পরীক্ষা করুন** : গত সপ্তাহে, পর্বতারোহীদের একটি দল পাহাড়ের অর্ধেক উপরে একটি ঝড়ের মুখোমুখি হয়েছিল কারণ তারা আবহাওয়ার পূর্বাভাস পরীক্ষা করেনি এবং জরুরীভাবে সরে যেতে হয়েছিল।
> - **প্রয়োজনীয় গিয়ার বহন করুন** : নিশ্চিত করুন যে আপনি পর্যাপ্ত খাবার, পানি এবং প্রাথমিক চিকিৎসার সামগ্রী নিয়ে এসেছেন।
> - **ভূখণ্ড বুঝুন** : হারিয়ে যাওয়া এড়াতে অ্যাডভেঞ্চার এলাকার ভূখণ্ড এবং রুটগুলির সাথে আগে থেকেই নিজেকে পরিচিত করুন।
> - **সংযুক্ত থাকুন** : বাইরের বিশ্বের সাথে সংযুক্ত থাকুন এবং নিশ্চিত করুন যে সবাই নিরাপদে ফিরে আসতে পারে।
>
> মনে রাখবেন, নিরাপত্তা সবসময় প্রথম আসে!

## করণীয় তালিকা

- [x] ডিজাইন পণ্য প্রোটোটাইপ এবং বৈশিষ্ট্য তালিকা
- [ ] প্রযুক্তি স্ট্যাক এবং উন্নয়ন সরঞ্জাম নির্ধারণ
- [ ] পণ্য বিকাশের সময়রেখা এবং মাইলফলক তৈরি করুন

## তালিকা

### আদেশকৃত তালিকা

1. চলমান
   1. সপ্তাহে তিনবার, প্রতিবার 5 কিলোমিটার
   1. একটি হাফ ম্যারাথন দৌড়ান
1. জিমে প্রশিক্ষণ
   1. সপ্তাহে দুবার, প্রতিবার 1 ঘন্টা
   1. মূল পেশীগুলিতে ফোকাস করুন

### অবিন্যস্ত তালিকা

* সামাজিক ঘটনা
  - শিল্প বিনিময় সভায় অংশগ্রহণ করুন
    + প্রযুক্তি শেয়ারিং সেশন
    + উদ্যোক্তা বিনিময় সভা
  - বন্ধুদের সমাবেশের আয়োজন করুন
    + আউটডোর BBQ
    + সিনেমার রাত

## শীট

| চিন্তাবিদ       | প্রধান অবদান                           |
|--------------|------------------------------------|
| কনফুসিয়াস         | কনফুসিয়ানিজমের প্রতিষ্ঠাতা |
| সক্রেটিস     | পাশ্চাত্য দর্শনের জনক  |
| নিটশে         | সুপারম্যান দর্শন, ঐতিহ্যগত নৈতিকতা এবং ধর্মের সমালোচনা করে       |
| মার্ক্স       | সাম্যবাদ |

### বড় টেবিল প্রদর্শন অপ্টিমাইজেশান

তুলনামূলকভাবে বড় টেবিলের জন্য, প্রদর্শন প্রভাব অপ্টিমাইজ করতে নিম্নলিখিত পদ্ধতি ব্যবহার করা যেতে পারে:

1. ছোট ফন্ট ব্যবহার করুন

   উদাহরণস্বরূপ, টেবিলটি `<div style="font-size:14px">` এবং `</div>` দিয়ে মোড়ানো।

   মনে রাখবেন যে `div` ট্যাগ অবশ্যই তার নিজস্ব লাইন দখল করবে এবং এর আগে এবং পরে ফাঁকা লাইনগুলি ছেড়ে দেবে।
1. একটি কক্ষে দীর্ঘ পাঠ্যের জন্য, লাইনটি মোড়ানোর জন্য `<br>` ঢোকান
1. যদি একটি কলাম খুব ছোট হয়, আপনি প্রস্থ প্রসারিত করতে হেডারে `<div style="width:100px">xxx</div>` যোগ করতে পারেন এবং লাইন বিরতি অবস্থান নিয়ন্ত্রণ করতে [হেডারে `<wbr>`](//developer.mozilla.org/docs/Web/HTML/Element/wbr) যোগ করতে পারেন।

একটি প্রদর্শন উদাহরণ নিম্নরূপ:

<div style="font-size:14px">

| জাতি       | <div style="width:70px;margin:auto">চিন্তাবিদ নাম</div> | যুগ | প্রধান আদর্শিক অবদান                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| চীন       | কনফুসিয়াস                                           | 551-479 খ্রিস্টপূর্বাব্দ   | কনফুসিয়ানিজমের প্রতিষ্ঠাতা "উদারতা" এবং "উপযুক্ততা" এর মতো মূল ধারণাগুলি প্রস্তাব করেছিলেন এবং নৈতিক চাষ এবং সামাজিক শৃঙ্খলার উপর জোর দিয়েছিলেন। |
| প্রাচীন গ্রীস     | সক্রেটিস                                       | 469-399 বিসি   | কথোপকথন এবং দ্বান্দ্বিকতার মাধ্যমে সত্য অন্বেষণ করা "নিজেকে জানুন" প্রস্তাব করে এবং যুক্তিবাদী চিন্তার উপর জোর দেয়         |
| ফ্রান্স       | ভলতেয়ার                                         | 1694-1778       | এনলাইটেনমেন্টের প্রতিনিধি ব্যক্তিরা যুক্তিবাদীতা, স্বাধীনতা এবং সাম্যের পক্ষে ছিলেন এবং ধর্মীয় কুসংস্কার ও কর্তৃত্ববাদী শাসনের সমালোচনা করেছিলেন।   |
| জার্মানি       | কান্ট                                           | 1724-1804       | "বিশুদ্ধ যুক্তির সমালোচনা" এগিয়ে রাখুন<br> নৈতিকতা, স্বাধীনতা এবং জ্ঞানের ভিত্তি অন্বেষণ করে, ব্যবহারিক কারণের উপর জোর দেয়     |

</div>

উপরের উদাহরণের জন্য সিউডোকোডটি নিম্নরূপ:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## কোড

### ইনলাইন কোড

প্রোগ্রামিং ভাষার বিশাল বিশ্বে, `Rust` , `Python` , `JavaScript` এবং `Go` প্রতিটি একটি অনন্য অবস্থান দখল করে।

### কোডের একাধিক লাইন

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## অনুচ্ছেদের মধ্যে লাইন বিরতি

লাইনের মধ্যে ফাঁকা লাইন যোগ না করে অনুচ্ছেদের মধ্যে লাইন বিরতি অর্জন করা যেতে পারে।
অনুচ্ছেদের মধ্যে লাইন বিরতির মধ্যে ব্যবধান অনুচ্ছেদের মধ্যে ব্যবধান থেকে ছোট।

উদাহরণস্বরূপ:

> একজন মহান ব্যক্তি হিসাবে বেঁচে থাকুন,
> মৃত্যুও ভূতের নায়ক।
> আমি এখনও জিয়াং ইউকে মিস করি,
> জিয়াংডং পার হতে নারাজ।
>
> লি কিংঝাও গান রাজবংশের অযোগ্যতার ইঙ্গিত দেওয়ার জন্য জিয়াং ইউ-এর করুণ কাহিনী ব্যবহার করেছিলেন।
> বিনা লড়াইয়ে আত্মসমর্পণের জন্য রাজকীয় আদালতে অসন্তোষ প্রকাশ করা।