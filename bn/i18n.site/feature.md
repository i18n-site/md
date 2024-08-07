# পণ্যের বৈশিষ্ট্য

## `i18` অনুবাদ

প্রোগ্রামটিতে `i18` অনুবাদ রয়েছে, দয়া করে দেখুন [➔ নির্দিষ্ট ব্যবহারের জন্য `i18`](/i18) ।

## স্বয়ংক্রিয়ভাবে ব্রাউজারের ভাষা মেলে

ওয়েবসাইটের ডিফল্ট ভাষা স্বয়ংক্রিয়ভাবে ব্রাউজারের ভাষার সাথে মিলে যাবে।

ব্যবহারকারী ম্যানুয়ালি ভাষা পরিবর্তন করার পরে, ব্যবহারকারীর পছন্দ মনে রাখা হবে।

সম্পর্কিত কোড [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## মোবাইল টার্মিনাল অভিযোজন

মোবাইল ফোনে একটি নিখুঁত পড়ার অভিজ্ঞতাও রয়েছে।

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> সম্মুখ প্রান্ত উচ্চ প্রাপ্যতা

`i18n.site` , সাইটের বিষয়বস্তু `npmjs.com` , [unpkg.com](//unpkg.com) এবং একাধিক `CDN` কন্টেন্ট লোড [jsdelivr.com](//jsdelivr.com) হবে `npm`

এই ভিত্তিতে, চীনা ব্যবহারকারীদের স্থিতিশীল অ্যাক্সেস এবং **উচ্চ ফ্রন্ট-এন্ড প্রাপ্যতা** অর্জনের অনুমতি দেওয়ার জন্য মূল ভূখণ্ড চীন থেকে মিরর উত্স যোগ করা হয়েছিল।

নীতি হল: [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) সাহায্যে অনুরোধটি আটকান, যদি অনুরোধটি ব্যর্থ হয়, তাহলে এটিকে অন্য `CDN` এ পুনরায় চেষ্টা করুন এবং অভিযোজিতভাবে ডিফল্ট লোডিং উত্স হিসাবে দ্রুত প্রতিক্রিয়াশীল মূল স্টেশন সক্ষম করুন৷

সম্পর্কিত কোড [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## একক পৃষ্ঠা অ্যাপ্লিকেশন, অত্যন্ত দ্রুত লোডিং

ওয়েবসাইটটি একটি একক-পৃষ্ঠা অ্যাপ্লিকেশন আর্কিটেকচার গ্রহণ করে, পৃষ্ঠাগুলি পরিবর্তন করার সময় এবং অত্যন্ত দ্রুত লোড করার সময় কোন রিফ্রেশ ছাড়াই।

## পড়ার অভিজ্ঞতার জন্য অপ্টিমাইজ করা হয়েছে

### ভাল ডিজাইন শৈলী

> সরলতার সৌন্দর্য এই ওয়েবসাইটের ওয়েব ডিজাইনে নিখুঁতভাবে ব্যাখ্যা করা হয়েছে।
> এটি অপ্রয়োজনীয় সাজসজ্জা পরিত্যাগ করে এবং বিষয়বস্তুকে তার বিশুদ্ধতম আকারে উপস্থাপন করে।
> সুন্দর কবিতার মতো, ছোট হলেও মানুষের হৃদয় ছুঁয়ে যায়।

<p style="text-align:right">── লেখক I18N.SITE</p>

[➔ শৈলীর তালিকা দেখতে এখানে ক্লিক করুন](/i18n.site/md/styl) ।

### অনলাইন ফন্ট লোড করুন, চীনা সমর্থন করুন

ডিফল্টরূপে, বিভিন্ন প্ল্যাটফর্মে ব্যবহারকারীদের পড়ার অভিজ্ঞতা একত্রিত করতে [আলিমামা ডুয়াল-অ্যাক্সিস পরিবর্তনশীল আয়তক্ষেত্রাকার ফন্ট](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) অন্যান্য অনলাইন ফন্টগুলি ওয়েবপেজে সক্রিয় করা হয়েছে।

একই সময়ে, লোডিং গতি উন্নত করার জন্য, শব্দ ফ্রিকোয়েন্সি পরিসংখ্যান অনুযায়ী ফন্টগুলি কাটা হয়।

সম্পর্কিত কোড [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### শীর্ষ নেভিগেশন স্বয়ংক্রিয়ভাবে লুকানো

নিচে স্ক্রোল করুন এবং উপরের নেভিগেশন স্বয়ংক্রিয়ভাবে লুকিয়ে যাবে।

উপরে স্ক্রোল করুন এবং লুকানো নেভিগেশন আবার প্রদর্শিত হবে।

যখন মাউস নড়ছে না তখন এটি বিবর্ণ হয়ে যাবে।

একটি নিমজ্জিত নথি পড়ার অভিজ্ঞতা তৈরি করতে নেভিগেশন বারের উপরের ডানদিকে একটি পূর্ণ-স্ক্রীন বোতাম রয়েছে।

### বর্তমান অধ্যায়ের সিঙ্ক্রোনাইজ করা রূপরেখা হাইলাইটিং

ডানদিকে কন্টেন্ট স্ক্রোল করার সময়, বাম দিকের রূপরেখাটি একই সাথে বর্তমানে পড়া অধ্যায়টিকে হাইলাইট করবে।

## শান্ত বিবরণ

### মাউস প্রভাব

দুর্দান্ত বিশেষ প্রভাবগুলি দেখতে উপরের নেভিগেশনের ডানদিকে বোতামের উপর আপনার মাউসটি ঘোরান৷

### ছোট্ট ভূত `404`

`404` একটি সুন্দর ছোট ভাসমান ভূত আছে, তার চোখ মাউস দিয়ে চলে যাবে, [➔ দেখতে এখানে ক্লিক করুন](/404) ,

## কোড ওপেন সোর্স

[কোডটি ওপেন সোর্স](/i18n.site/src) [।](//groups.google.com/u/2/g/i18n-site)

এমন অনেক ছোট প্রয়োজনীয়তা রয়েছে যা গুরুত্বপূর্ণ কিন্তু জরুরী নয়।

