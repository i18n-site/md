# সম্পাদকৰ পৰামৰ্শ

সকলোৰে নিজৰ নিজৰ প্ৰিয় সম্পাদক আছে ইয়াত আমি আমাৰ `Markdown` উত্তম পদ্ধতি শ্বেয়াৰ কৰিছো।

আমি [vscode](https://code.visualstudio.com/) `MarkDown` লিখিবলৈ ব্যৱহাৰ কৰো আৰু লিখাৰ সময়ত বাস্তৱ সময়ত পূৰ্বদৰ্শন কৰিবলৈ প্লাগ-ইন [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) ইনষ্টল কৰো।

তলত দেখুওৱাৰ দৰে, পূৰ্বদৰ্শন উইণ্ড' খোলিবলৈ সম্পাদকত ৰাইট-ক্লিক কৰক।

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

নথিপত্ৰ `Markdown` খোলিবলৈ `vscode` কল কৰিবলে আদেশ শাৰীত `code xxx.md` সুমুৱাওক ।

ছবি আপল'ড কৰিবলে [PicList](https://github.com/Kuingsmile/PicList)

ই আপল'ড কৰাৰ পিছত ফাইলৰ নাম স্বয়ংক্ৰিয়ভাৱে `Markdown` বিন্যাসলৈ কপি কৰাটো সমৰ্থন কৰে, যিয়ে দক্ষতা বহু পৰিমাণে উন্নত কৰে।

একে সময়তে, আপুনি নিম্নলিখিত বিন্যাস চাব পাৰে, নথিপত্ৰ পৰিবৰ্তন কৰিব পাৰে, আৰু আপল'ড কৰা নথিপত্ৰক স্বয়ংক্ৰিয়ভাৱে `avif` লৈ সংকোচিত কৰিবলে বিন্যাস কৰিব পাৰে ছবিৰ আকাৰ হ্ৰাস কৰিবলে ।

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