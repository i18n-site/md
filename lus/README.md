<h1 style="justify-content:space-between">3Ti.Site · Ramri awm lo tih ngaihtuah rawh<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, multi-language static site generator hian Markdown hi [tawng hrang hrang za chuangah](https://github.com/i18n-site/node/blob/main/lang/src/index.js) automatic in a letling thei a ni .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Mi thenkhat chuan zawhna an zawt duh mai thei, tunah chuan browser-ah hian lehlin hna (built-in translation function) a awm tawh a, website hi internationalize a ngai tawh lo em ni?

Ka sawi duh chu **site pumpui internationalise chauhvin multi-lingual in-site full-text search leh search engine optimization kan support thei ang**

## Inhmelhriattirna

Bible · Genesis :

> Hmân lai, ṭawng hrang hrangte chu pakhat a nih laiin, mihringte chuan vân thlenga kulh, Pathian ram luhna kawngkhâr, mihringte chakna puang chhuakin an siam a.
>
> Pathian chuan, "Mihringte chu hnam khat angin an inpumkhat a, tawng inang an nei a, he kulh hi thuhmahruai mai a ni. Tunah chuan an duhzawng an tihlawhtling tawh a, hlauhna a awm tawh lo vang," tiin a puang a ni.
>
> Chutiang chuan Pathian a lo chhuk a, mite chu kil hrang hrangah a theh darh a, tawng hrang hrang a hmang a ni.
>
> Chuta tang chuan mihringte inbiakpawhna chu a harsa ta hle a, inhnialna pawh a tawp tawh lo va, van khawih thei kulhpui pawh a awm tawh lo.

Science fiction novel &quot;Three-Body&quot; (Chinese pronunciation: `3Ti` ) hian electromagnetic wave hmanga inbiakpawhna nei, tawng lama harsatna nei lo, technology lama hausa, alien civilization fictionalize a ni.

Leilung mipuite hi taksa pathum nei ang maia awm thei tur, tawngkam phuar lova inbiakpawhna nei thei tur leh mihring zawng zawng inpumkhatna tur hmanrua siam ka beisei.

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
