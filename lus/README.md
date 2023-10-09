<h1 style="justify-content:space-between">I18N.SITE · Ramri nei lo tawng<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

I18N.SITE, multi-language static site generator hian Markdown hi [tawng hrang hrang za chuangah](https://github.com/i18n-site/node/blob/main/lang/src/index.js) automatic in a letling thei a ni .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Mi thenkhat chuan zawhna an zawt duh mai thei, tunah chuan browser-ah hian lehlin hna (built-in translation function) a awm tawh a, website hi internationalize a ngai tawh lo em ni?

Ka sawi duh chu **site pumpui internationalise chauhvin multi-lingual in-site full-text search leh search engine optimization kan support thei ang**

## Tutorial A Ni

## Function Thuhmahruai

### Markdown Format Ah Vawng Reng Rawh

### Lehlin Siam Danglam Rawh

Translation i siam danglam hnuah cache update turin `./i18n.sh` i run leh a ngai a ni.

### Lehlinna Notes

Lehlin comment-ah chuan \``` hnu lama ṭawng awm chu a tarlang a ngai a, chu chu ` ```rust` .

Tunah hian rust, c, cpp, java, js, coffee, python, leh bash te comment translation a support.

[Tran_md/src/comment.coffee chu](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) edit la, ṭawng tam zawka comment-na tur lehlin support dah belh rawh.

### Proxy Chu Configure Rawh

A hnuaia environment variable te hi set hian Google Translate API call te chu proxy kaltlangin a kal thei a ni.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variable Embedding Hmanga Siam A Ni

```
test: 测试变量<br 0>嵌入
```

### Cache Chu Empty Rawh

```bash
rm -rf .i18n/.cache
```
