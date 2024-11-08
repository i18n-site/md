# সম্পাদক সুপারিশ

প্রত্যেকের নিজস্ব প্রিয় সম্পাদক আছে এখানে আমরা আমাদের `Markdown` সেরা অনুশীলনগুলি শেয়ার করি৷

আমরা `MarkDown` লিখতে ব্যবহার [vscode](https://code.visualstudio.com/) এবং লেখার সময় রিয়েল টাইমে প্রিভিউ করার জন্য প্লাগ-ইন [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) ইনস্টল করি।

নীচে দেখানো হিসাবে, পূর্বরূপ উইন্ডো খুলতে সম্পাদকে ডান-ক্লিক করুন।

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

ফাইল `Markdown` খুলতে `vscode` কল করতে কমান্ড লাইনে `code xxx.md` লিখুন।

ছবি আপলোড করতে [PicList](https://github.com/Kuingsmile/PicList) করুন, আপলোড শর্টকাট কী সেট করতে ভুলবেন না এবং এক ক্লিকে স্ক্রিনশট আপলোড করুন।

এটি আপলোড করার পরে ফাইলের নামটি স্বয়ংক্রিয়ভাবে `Markdown` ফর্ম্যাটে অনুলিপি করতে সমর্থন করে, যা দক্ষতার ব্যাপক উন্নতি করে।

একই সময়ে, আপনি নিম্নলিখিত কনফিগারেশনটি উল্লেখ করতে পারেন, ফাইলটি সংশোধন করতে পারেন এবং আপলোড করা ফাইলটিকে স্বয়ংক্রিয়ভাবে `avif` -তে সংকুচিত করার জন্য চিত্রের আকার কমাতে কনফিগার করতে পারেন।

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