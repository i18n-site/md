<h1 style="justify-content:space-between">3Ti.Site · Smaoinich gun chrìochan<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Faodaidh 3Ti.Site, gineadair làrach-lìn statach ioma-chànan, Markdown eadar-theangachadh gu fèin-ghluasadach gu [còrr air ceud cànan eadar-dhealaichte](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Is dòcha gum bi cuid de dhaoine airson faighneachd, a-nis gu bheil gnìomhan eadar-theangachaidh stèidhichte aig brobhsairean, nach eil feum air an làrach-lìn a dhèanamh eadar-nàiseanta?

Tha mi airson a ràdh gur **ann dìreach le bhith ag eadar-nàiseantachadh an làrach gu lèir as urrainn dhuinn taic a thoirt do sgrùdadh làn-theacsa ioma-chànanach air an làrach agus optimization einnsean sgrùdaidh** .

## Seicheamh

"Bìoball · Genesis":

> Cha do rinn na seanairean dealachadh eadar cànanan. Rugadh iad le moit agus bha iad airson tùr àrd a thogail leis a 'mhullach a' ruighinn chun na speuran.
> <blockquote><p>Bha Dia mi-thaitneach le àrdan an duine, agus mar sin sgap e gach creutair beò ann an caochladh àitean, gun chomas a chèile a thuigsinn.</p></blockquote>
> <blockquote><p>Bhon uairsin, tha e air a bhith duilich dha daoine conaltradh a dhèanamh, tha connspaidean air leantainn, agus chan eil Tùr Babel air an t-saoghal.</p></blockquote>

Tha an nobhail ficsean saidheans &quot;Three-Body&quot; (fuaimneachadh Sìneach: `3Ti` ) a &#39;dèanamh ficsean air sìobhaltas coimheach a bhios a&#39; conaltradh tro thonnan electromagnetic, aig nach eil cnapan-starra cànain, agus a tha soirbheachail gu teicneòlach.

Tha mi an dòchas le cuideachadh bhon inneal seo, gum bi muinntir na talmhainn coltach ri daoine trì-bodhaig, nach bi conaltradh air a chuingealachadh le cànan, agus gum bi mac an duine aonaichte a-rithist.

## Oideachadh

## Ro-Ràdh Gnìomh

### Cùm Markdown Format

### Atharraich Eadar-Theangachadh

Às deidh dhut an eadar-theangachadh atharrachadh, feumaidh tu ath-ruith `./i18n.sh` gus an tasgadan ùrachadh.

### Notaichean Eadar-Theangachaidh

Feumaidh beachdan eadar-theangachaidh an cànan a chomharrachadh às deidh \```, leithid ` ```rust` .

An-dràsta a’ toirt taic do eadar-theangachadh bheachdan airson meirge, c, cpp, java, js, cofaidh, python, agus bash.

Deasaich [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) gus taic eadar-theangachaidh a chuir ris airson beachdan ann am barrachd chànanan.

### Dèan Rèiteachadh Air Proxy

Le bhith a’ suidheachadh nan caochladairean àrainneachd a leanas leigidh sin le gairmean API Google Translate a dhol tron ​​neach-ionaid.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Bunachadh Caochlaideach

```
test: 测试变量<br 0>嵌入
```

### Falamh An Cache

```bash
rm -rf .i18n/.cache
```
