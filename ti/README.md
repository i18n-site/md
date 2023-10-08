# I18N.SITE · ዶብ ዘይብሉ ቋንቋ<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE ዝተባህለ ብዙሕ ቋንቋታት ዘለዎ ስታትቲክ ሳይት ጀነሬተር ኮይኑ፡ ንማርክዳውን ብኣውቶማቲክ ናብ [ልዕሊ ሚእቲ ዝተፈላለዩ ቋንቋታት](https://github.com/i18n-site/node/blob/main/lang/src/index.js) ክትርጉሞ ይኽእል ።

<img src="//i-01.eu.org/i18n.lang.webp" alt="" />

ገለ ሰባት ክሓቱ ይደልዩ ይኾኑ፣ ሕጂ መርበብ ሓበሬታታት ኣብ ውሽጦም ናይ ትርጉም ተግባራት ስለዘለዎም፣ ነቲ መርበብ ሓበሬታ ኣህጉራዊ ምግባር ኣየድልን ድዩ?

**ንብምሉኡ እቲ መርበብ ሓበሬታ ኣህጉራዊ ብምግባር ጥራይ ኢና ብብዙሕ ቋንቋታት ኣብ ውሽጢ መርበብ ሓበሬታ ምሉእ ጽሑፍ ምድላይን ምምሕያሽ ሞተር ምድላይን ክንድግፍ ከም እንኽእል ክብል** እደሊ።

## ትምህርቲ

## ተግባር መእተዊ

### ማርክዳውን ፎርማት ምሕላው

### ትርጉም ምቕያር

ድሕሪ ምቕያር ነቲ ትርጉም፡ ነቲ መኽዘን ንምዕራፍ `./i18n.sh` ዳግማይ ክትሰርሕ ኣለካ።

### መዘኻኸሪ ትርጉም

ናይ ትርጉም ርእይቶታት ድሕሪ \``` ዘሎ ቋንቋ ከመልክቱ ኣለዎም፣ ከም ` ```rust` ።

ኣብዚ እዋን እዚ ን rust, c, cpp, java, js, coffee, python, and bash ዝኸውን ትርጉም ርእይቶ ይድግፍ።

ንርእይቶታት ብዝያዳ ቋንቋታት ናይ ትርጉም ደገፍ ንምውሳኽ [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) ኣርትዕ።

### ፕሮክሲ ምውቃር

ነዞም ዝስዕቡ ናይ ከባቢ ተለዋዋጢ ምቕማጥ ንናይ Google Translate API ጻውዒታት ብፕሮክሲ ክሓልፉ የኽእሎም።

```bash
export https_proxy=http://127.0.0.1:7890
```

### ተለዋዋጢ ምትእትታው

```
test: 测试变量<br 0>嵌入
```

### ባዶ The Cache ምግባር

```bash
rm -rf .i18n/.cache
```
