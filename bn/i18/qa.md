# FAQ

## অনুবাদের লাইন যোগ করা বা মুছে ফেলা, ফলে অনুবাদে বিভ্রান্তি দেখা দেয়

> [!WARN]
> মনে রাখবেন, **অনুবাদে লাইনের সংখ্যা অবশ্যই মূল পাঠ্যের লাইনের সাথে মিলে যাবে** ।
> অর্থাৎ, অনুবাদকে ম্যানুয়ালি সামঞ্জস্য করার সময়, **অনুবাদের লাইন যোগ বা মুছে ফেলবেন না** , অন্যথায় অনুবাদ এবং মূল পাঠ্যের মধ্যে ম্যাপিং সম্পর্ক বিকৃত হবে।

আপনি যদি ভুলবশত কোনো লাইন যোগ করেন বা মুছে ফেলেন, বিভ্রান্তির সৃষ্টি করে, অনুগ্রহ করে পরিবর্তনের আগে অনুবাদটিকে সংস্করণে পুনরুদ্ধার করুন, আবার `i18` অনুবাদ চালান এবং সঠিক ম্যাপিং পুনরায় ক্যাশে করুন।

অনুবাদ এবং মূল পাঠ্যের মধ্যে ম্যাপিং একটি `.i18h/hash` [i18n.site/token](//i18n.site/token) তৈরি করুন

## `YAML` কিভাবে লিঙ্ক `HTML` : `Markdown` রূপান্তর করা এড়াতে হয়

অনুবাদের জন্য `YAML` এর মান `MarkDown` হিসাবে ধরা হয়।

কখনও কখনও `HTML` → `MarkDown` থেকে রূপান্তর আমরা যা চাই তা নয়, যেমন `<a href="/">Home</a>` `[Home](/)` তে রূপান্তর করা হচ্ছে।

`a` ট্যাগে `href` ছাড়া অন্য কোনো অ্যাট্রিবিউট যোগ করা, যেমন `<a class="A" href="/">Home</a>` , এই রূপান্তর এড়াতে পারে।

## নিচে `./i18n/hash` ফাইল দ্বন্দ্ব

বিরোধপূর্ণ ফাইল মুছুন এবং `i18` অনুবাদ পুনরায় চালান।