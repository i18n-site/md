# قاڵبی بلۆگ

`i18n/conf.yml` لە کۆی `use: Blog` واتە بەکارهێنانی قاڵبی بلۆگ بۆ ڕێندەرکردن.

فایلە `markdown` ی پۆستی بلۆگەکە پێویستی بە ڕێکخستنی زانیاری مێتا هەیە.

زانیارییەکانی مێتا دەبێت لە سەرەتای پەڕگەکەدا بن، بە `---` دەست پێدەکات و بە `---` کۆتایی دێت. فۆرماتەکەی زانیاری ڕێکخستن لە ناوەڕاستدا `YAML` یە.

ڕێکخستنی فایلێکی دیمۆ بەم شێوەیەی خوارەوەیە:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` ئاماژەیە بۆ پوختەی ناوەڕۆک، کە لە لاپەڕەی ئیندێکسی بلۆگەکەدا پیشان دەدرێت.

بە یارمەتی `YMAL` '|`ڕستەسازی، دەتوانیت پوختەی فرە دێڕ بنووسیت.

هەروەها ڕێکخستنی درەختی بەڕێوەبەرایەتی لە لای ڕاستی بلۆگەکەدا `TOC` فایلە (بڕوانە بەشی پێشوو تەنها ئەو بابەتانەی کە لە `TOC` دا ڕیزکراون لە ئیندێکسی ماڵپەڕی بلۆگەکەدا دەردەکەون).

ئەو بابەتانەی کە زانیاری مێتایان تێدا نییە لە ماڵپەڕی بلۆگەکەدا دەرناکەون، بەڵام دەتوانن لە درەختی بەڕێوەبەرایەتی لە لای ڕاست دەربکەون.

ئەگەر پێویستت بە پێنکردنی بابەتەکە بوو بۆ سەرەوە، تکایە `i18n.site` جێبەجێ بکە و دەستکاری `xxx.yml` فایلەکەی خوارەوەی `.i18n/data/blog` بکە، و مۆری کاتەکە بگۆڕە بۆ ژمارەیەکی نەرێنی (چەند ژمارەیەکی نەرێنی لە بچووکەوە بۆ گەورە بە بەهای ڕەها ڕیز دەکرێن).