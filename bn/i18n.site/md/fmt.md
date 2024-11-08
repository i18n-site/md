# i18n.site MarkDown লেখার কনভেনশন

## নোঙ্গর বিন্দু

প্রথাগত `MarkDown` নোঙ্গর পয়েন্ট টেক্সট বিষয়বস্তুর উপর ভিত্তি করে তৈরি করা হয় বহু-ভাষার ক্ষেত্রে, এই সমাধান সম্ভব নয়।

`i18n.site` এর সাথে সম্মত অ্যাঙ্কর পয়েন্ট সমাধান হল ম্যানুয়ালি পজিশনিং অ্যাঙ্কর পয়েন্ট তৈরি করতে `<a rel=id href="#xxx" id="xxx"></a>` -তে `MarkDown` এর মতো টেক্সট সন্নিবেশ করা।

`<a rel=id href="#xxx" id="xxx"></a>` , এখানে `rel=id` অ্যাঙ্কর পয়েন্টের পৃষ্ঠা শৈলী সংজ্ঞায়িত করে, অনুগ্রহ করে আপনার প্রকৃত অ্যাঙ্কর ইংরেজি সংক্ষেপণ দিয়ে `xxx` প্রতিস্থাপন করুন।

অ্যাঙ্করগুলি সাধারণত শিরোনামে যুক্ত করা হয়, যেমন:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

প্রদর্শন প্রভাব নিম্নরূপ:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` এর মধ্যে `HTML` লিখুন

`HTML` `pug` কোড এম্বেড করা যেতে পারে.

`<pre>` উপাদানের বিষয়বস্তু অনুবাদ করা হবে না।

এই দুটি পয়েন্ট একত্রিত করে, আপনি সহজেই বিভিন্ন প্রদর্শন প্রভাব অর্জন করতে `MarkDown` এর মধ্যে `HTML` লিখতে পারেন।

[HTML জন্য এখানে ক্লিক i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

উল্লেখ্য যে `<style>` উপরেও `<pre>` তে সংজ্ঞায়িত করা হয়েছে।