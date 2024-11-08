# ፕላግ-ኢን ዝብል እዩ።

ፕላግ-ኢናት ብ `.i18n/conf.yml` ክውነኑ ይኽእሉ፣ ከም፤

```yml
addon:
  - i18n.addon/toc
```

## ወግዓዊ ፕላግ-ኢን።

* `i18n.addon/toc` : መወከሲ ማህደር
  ኣብ `TOC` ዝተመርኮሰ `json` ናይ ማህደር መወከሲ ምፍጣር፣ ብነባሪ ዝንቀሳቐስ

* `i18n.addon/mouse` ናይ : ጽልዋታት

## ውዕል ስም ፋይል

ፕላግ-ኢን ኩሎም `npm` ፓኬጃት እዮም።

ኣብ ላዕሊ ምስ `i18n.addon/toc` ዝሰማማዕ ፓኬጅ [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

እቲ ፕላግ-ኢን ብነባሪ መልክዑ ነቲ ዝሓለፈ ስሪት ይጥቀምን ሰሙናዊ ምዕባለታት እንተሃልዩ ይምርምርን።

ነቲ ስሪት ከተዐርዮ እንተደሊኻ `i18n.addon/toc@0.1.3` ክትጽሕፍ ትኽእል ኢኻ።

መስመር ትእዛዝ ትርጉም `i18n.site` ነቲ ናይ ውዕል ፋይል ናይቲ ፕላግ-ኢን ፓኬጅ ክተክልን ድሕሪኡ ክፍጽሞን እዩ።

እቶም ዝተሰማምዑሉ ኣስማት ፋይላት እዞም ዝስዕቡ እዮም።

### htmIndex.js

`htmIndex.js` ክሳብ መወዳእታ `.i18n/htm/index.js` ክውጋእ ’ ዩ።

`__CONF__` ብስም ናይቲ ሕጂ ዘሎ ውቅር (ከም `dev` ወይ `ol` ) ዝትካእ ቦታ።

### afterTran.js

እቲ ትርጉም ምስተዛዘመ ክጽዋዕ እዩ፣ እቶም ዝሓልፉ መለክዒታት ድማ ከምዚ ዝስዕብ እዮም።

* `lang_li` ዝርዝር : ፡ ቀዳማይ ቋንቋ ምንጪ ቋንቋ እዩ።
* `changed` : ፋይላት
* `root` ሱር : ፕሮጀክት

እቲ ናይ ምምላስ ዋጋ መዝገበ ቃላት እዩ፣ ከም...

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ዝርዝር ውጽኢት ፋይላት `path` መንገዲ ፋይል `txt` ድማ ትሕዝቶ ፋይል እዩ።

## ኣብ ውሽጢ ዝተሃንጹ ተግባራት

እቲ ኣብ ውሽጢ ዘሎ `js` runtime ኣብ ካልኣዊ ምዕባለ : [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` ናብ ፋይል :
* `rTxt(path)` : ናይ ጽሑፍ ፋይል ኣንብብ
* `rBin(path)` : ክልተኣዊ ፋይል ኣንብብ
* `rDir(dirpath)` : :

## መምርሒ ልምዓት

ምዕባለ ፕላግ-ኢን መወከሲ ክኸውን ይኽእል እዩ [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)