# መሰካት

ተሰኪዎች በ `.i18n/conf.yml` ውስጥ ሊዋቀሩ ይችላሉ፣ ለምሳሌ፡-

```yml
addon:
  - i18n.addon/toc
```

## ይፋዊ ተሰኪ

* `i18n.addon/toc` : ማውጫ
  በነባሪነት የነቃ በ `TOC` ላይ በመመስረት የ `json` ማውጫ ኢንዴክስ ይፍጠሩ

* `i18n.addon/mouse` የመዳፊት :

## የፋይል ስም ስምምነት

ተሰኪዎች ሁሉም `npm` ጥቅሎች ናቸው።

ከላይ ካለው `i18n.addon/toc` ጋር የሚዛመደው ጥቅል ነው [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

ተሰኪው በነባሪ የቅርብ ጊዜውን ስሪት ይጠቀማል እና በየሳምንቱ ዝመናዎችን ይፈትሻል።

ስሪቱን ማስተካከል ከፈለጉ, `i18n.addon/toc@0.1.3` መጻፍ ይችላሉ.

የትርጉም ትዕዛዝ መስመር `i18n.site` የተሰኪውን ጥቅል የኮንቬንሽን ፋይል ይጭናል ከዚያም ያስፈጽመዋል.

የተስማሙት የፋይል ስሞች የሚከተሉት ናቸው።

### htmIndex.js

`htmIndex.js` እስከ `.i18n/htm/index.js` መጨረሻ ድረስ መርፌ ይደረጋል.

`__CONF__` አሁን ባለው ውቅረት ስም (እንደ `dev` ወይም `ol` ያሉ) የሚተካበት ቦታ.

### afterTran.js

ትርጉሙ ከተጠናቀቀ በኋላ ይጠራል, እና የገቡት መለኪያዎች እንደሚከተለው ናቸው.

* `lang_li` : ዝርዝር, የመጀመሪያው ቋንቋ ምንጭ ቋንቋ ነው
* `changed` : ፋይሎች
* `root` የፕሮጀክት ስር :

የመመለሻ ዋጋው እንደ መዝገበ ቃላት ነው።

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` የውጤት ፋይል ዝርዝር ነው, `path` የፋይል መንገድ ነው, እና `txt` የፋይል ይዘት ነው.

## አብሮገነብ ተግባራት

አብሮ የተሰራው `js` runtime በሁለተኛ ደረጃ እድገት ላይ የተመሰረተ ነው [boa](https://github.com/boa-dev/boa) እና አብሮገነብ ተግባራት እንደሚከተለው ናቸው :

* `wPath(path, txt)` ወደ ፋይል ይፃፉ :
* `rTxt(path)` የጽሑፍ ፋይል :
* `rBin(path)` : ፋይል አንብብ
* `rDir(dirpath)` ማውጫውን ያንብቡ : የመመለሻ ዋጋው የድርድር : ዝርዝር ፣ የፋይል ዝርዝር ነው።

## የልማት መመሪያ

ተሰኪ ልማት ማጣቀሻ ሊሆን ይችላል [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)