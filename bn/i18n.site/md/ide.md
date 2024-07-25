# সম্পাদকের সুপারিশ

প্রত্যেকের নিজস্ব প্রিয় সম্পাদক আছে আমাদের সেরা অনুশীলনগুলি এখানে শেয়ার করুন `Markdown`

আমরা লেখার সময় রিয়েল টাইমে প্রিভিউ করতে প্লাগ- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) ব্যবহার `MarkDown` [vscode](https://code.visualstudio.com/)

নীচে দেখানো হিসাবে, পূর্বরূপ উইন্ডো খুলতে সম্পাদকে ডান-ক্লিক করুন।

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`vscode` খুলতে কমান্ড লাইনে `Markdown` `code xxx.md`

ছবি আপলোড করতে ব্যবহার [PicList](https://github.com/Kuingsmile/PicList) , আপলোড শর্টকাট কী সেট করতে ভুলবেন না এবং এক ক্লিকে স্ক্রিনশট আপলোড করুন।

এটি আপলোড করার পরে `Markdown` নাম স্বয়ংক্রিয়ভাবে অনুলিপি করা সমর্থন করে, যা কার্যকারিতাকে ব্যাপকভাবে উন্নত করে।

একই সময়ে, আপনি নিম্নলিখিত কনফিগারেশনটি উল্লেখ করতে পারেন, ফাইলটি পরিবর্তন করতে পারেন এবং আপলোড করা ফাইলটিকে স্বয়ংক্রিয়ভাবে সংকুচিত করতে কনফিগার করতে পারেন `avif`

```json
"buildIn": {
  "compress": {
    "quality": 99,
    "isConvert": true,
    "convertFormat": "avif",
    "isReSize": false,
    "reSizeWidth": 0,
    "reSizeHeight": 0,
    "skipReSizeOfSmallImg": false,
    "isReSizeByPercent": false,
    "reSizePercent": 50,
    "isRotate": false,
    "rotateDegree": 0,
    "isRemoveExif": true,
    "isFlip": false,
    "isFlop": false,
    "formatConvertObj": {}
  },
  … …
```
