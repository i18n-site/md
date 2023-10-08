# I18N.SITE · Ramri Nei Lo Document Te<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, static site generator a ni a, [tawng hrang hrang 133-a](https://github.com/i18n-site/node/blob/main/lang/src/index.js) automatic translation a support thei a ni .

![](https://i-01.eu.org/2023/09/O0Tee_m.webp)

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
