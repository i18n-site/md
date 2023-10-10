<h1 style="justify-content:space-between">3Ti.Site · Ramri awm lo tih ngaihtuah rawh<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, multi-language static site generator hian Markdown hi [tawng hrang hrang za chuangah](https://github.com/i18n-site/node/blob/main/lang/src/index.js) automatic in a letling thei a ni .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Mi thenkhat chuan zawhna an zawt duh mai thei, tunah chuan browser-ah hian lehlin hna (built-in translation function) a awm tawh a, website hi internationalize a ngai tawh lo em ni?

Ka sawi duh chu **site pumpui internationalise chauhvin multi-lingual in-site full-text search leh search engine optimization kan support thei ang**

## Indawt

"Bible·Genesis" tih a ni.:

> Hmanlai mite chuan tawng an thliar hrang lo. Mihringte chawimawina tipung turin Pathian kawngkhar thleng tur chuan van thlenga kulh an siam a.
>
> Pathian chuan mihringte hi hnam hrang hrang, nunphung leh chi hrang hrang inang an ni a ti a. Tower sak hi a hmahruaitu mai a ni. Tunah chuan i duh duh i tihlawhtling thei tawh ang a, hlauh tur i nei tawh lo vang.
>
> Tichuan Pathian a lo kal a, mipuite chu hmun hrang hrangah, inhriatthiam tawn thei lovin a tidarh ta a.
>
> Chuta tang chuan mihringte chuan inbiakpawhna kawngah an bei nasa hle a, inhnialna tawp chin nei lovin a lo chhuak a, khawvelin vanram thleng thei kulhpui a hmu tawh lo.

Science fiction novel &quot;Three-Body&quot; (Chinese pronunciation: `3Ti` ) hian electromagnetic wave hmanga inbiakpawhna nei, tawng lama harsatna nei lo, technology lama hausa, alien civilization fictionalize a ni.

He hmanrua hmang hian leia mite hi taksa pathum nei ang an ni ang a, inbiakpawhna chu tawngin a khap lo ang a, mihring zawng zawng hi kan inpumkhat leh ang tih ka beisei.

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
