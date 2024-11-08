# ප්ලග් ඉන්

ප්ලගින `.i18n/conf.yml` හි වින්යාස කළ හැක, වැනි:

```yml
addon:
  - i18n.addon/toc
```

## නිල ප්ලග් ඉන්

* `i18n.addon/toc` නාමාවලි :
  පෙරනිමියෙන් සක්රීය කර ඇති `TOC` මත පදනම්ව නාමාවලි දර්ශකය `json` ජනනය කරන්න

* `i18n.addon/mouse` :

## ගොනු නාම සම්මුතිය

ප්ලගින සියල්ල පැකේජ `npm` .

ඉහත `i18n.addon/toc` ට අනුරූප වන පැකේජය [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

ප්ලගිනය පෙරනිමියෙන් නවතම අනුවාදය භාවිතා කරන අතර සතිපතා යාවත්කාලීන කිරීම් සඳහා පරීක්ෂා කරයි.

ඔබට අනුවාදය නිවැරදි කිරීමට අවශ්ය නම්, ඔබට `i18n.addon/toc@0.1.3` ලිවිය හැකිය.

පරිවර්තන විධාන රේඛාව `i18n.site` මඟින් ප්ලග් ඉන් පැකේජයේ සම්මුති ගොනුව ස්ථාපනය කර එය ක්රියාත්මක කරනු ඇත.

එකඟ වූ ගොනු නාම පහත පරිදි වේ

### htmIndex.js

`htmIndex.js` `.i18n/htm/index.js` අවසානය දක්වා එන්නත් කරනු ලැබේ.

එහිදී `__CONF__` වත්මන් වින්යාසයේ නම ( `dev` හෝ `ol` වැනි) සමඟ ප්රතිස්ථාපනය වේ.

### afterTran.js

පරිවර්තනය අවසන් වූ පසු එය කැඳවනු ලබන අතර, සම්මත කර ඇති පරාමිතීන් පහත පරිදි වේ.

* `lang_li` : භාෂා ලැයිස්තුව, පළමු භාෂාව මූලාශ්ර භාෂාවයි
* `changed` : කළ ගොනු
* `root` : ව්යාපෘති මූල නාමාවලිය

ප්රතිලාභ අගය ශබ්දකෝෂයකි, වැනි

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` යනු ප්රතිදාන ගොනු ලැයිස්තුව, `path` යනු ගොනු මාර්ගය, සහ `txt` යනු ගොනු අන්තර්ගතයයි.

## ගොඩනඟන ලද කාර්යයන්

බිල්ට්-ඉන් `js` ධාවන කාලය පදනම් වී : [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : ලියන්න
* `rTxt(path)` පාඨ : කියවන්න
* `rBin(path)` : ගොනුව කියවන්න
* `rDir(dirpath)` : ඩිරෙක්ටරිය කියවන්න, ආපසු යැවීමේ අගය අරාවකි : ලැයිස්තුවකි, ගොනු ලැයිස්තුවකි

## සංවර්ධන මාර්ගෝපදේශය

ප්ලග්-ඉන් සංවර්ධනය යොමුවක් විය හැකිය [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)