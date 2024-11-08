# የብሎግ አብነት

`i18n/conf.yml` ከ `use: Blog` ማለት የብሎግ አብነት ለምስል ስራ መጠቀም ማለት ነው።

የብሎግ ልጥፍ `markdown` ፋይል ሜታ መረጃን ማዋቀር አለበት።

የሜታ መረጃ በፋይሉ መጀመሪያ ላይ ከ `---` ጀምሮ እና በ `---` የሚያልቅ መሆን አለበት. በመሃል ላይ ያለው የውቅረት መረጃ ቅርጸት `YAML` ነው.

የማሳያ ፋይል ውቅር እንደሚከተለው ነው።

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` በብሎግ መረጃ ጠቋሚ ገጽ ላይ የሚታየውን የይዘት ማጠቃለያ ያሳያል።

በ `YMAL` ' እገዛ | `አገባብ፣ ባለብዙ መስመር ማጠቃለያዎችን መጻፍ ትችላለህ።

በብሎጉ በቀኝ በኩል ያለው የማውጫ ዛፉ ውቅር እንዲሁ `TOC` ፋይሎች ነው (የቀደመውን ምዕራፍ ይመልከቱ) በብሎግ መነሻ ገጽ መረጃ ጠቋሚ ውስጥ በ `TOC` የተዘረዘሩ ጽሑፎች ብቻ ይታያሉ።

ሜታ መረጃን ያላካተቱ ጽሑፎች በብሎግ መነሻ ገጽ ላይ አይታዩም፣ ነገር ግን በቀኝ በኩል ባለው ማውጫ ዛፍ ላይ ሊታዩ ይችላሉ።

## የደራሲ መረጃ

የጸሐፊው መረጃ በአንቀጹ ሜታ መረጃ ውስጥ ሊጻፍ ይችላል፣ ለምሳሌ፡-

```yml
author: marlowe
```

ከዚያ በምንጭ ቋንቋ ማውጫ ውስጥ `author.yml` ያርትዑ እና የጸሐፊ መረጃ ያክሉ፣ ለምሳሌ :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` ፣ `url` እና `title` ሁሉም አማራጭ ናቸው። `name` ካልተዋቀረ, የቁልፍ ስም (እዚህ `marlowe` ) እንደ `name` ጥቅም ላይ ይውላል.

የማሳያ ፕሮጀክት [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) እና [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) ን ይመልከቱ

## የተሰካ ጽሑፍ

ጽሑፉን ወደ ላይ ማያያዝ ከፈለጉ እባክዎን `i18n.site` ያሂዱ እና `xxx.yml` ፋይሎችን ከ `.i18n/data/blog` በታች ያርትዑ እና የጊዜ ማህተሙን ወደ አሉታዊ ቁጥር ይለውጡ (ብዙ አሉታዊ ቁጥሮች ከትልቁ ወደ ትንሹ ይደረደራሉ)።