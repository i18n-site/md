<h1 style="justify-content:space-between">I18N.SITE · Cànan gun chrìochan<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

Faodaidh I18N.SITE, gineadair làrach-lìn statach ioma-chànan, Markdown eadar-theangachadh gu fèin-ghluasadach gu [còrr air ceud cànan eadar-dhealaichte](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Is dòcha gum bi cuid de dhaoine airson faighneachd, a-nis gu bheil gnìomhan eadar-theangachaidh stèidhichte aig brobhsairean, nach eil feum air an làrach-lìn a dhèanamh eadar-nàiseanta?

Tha mi airson a ràdh gur **ann dìreach le bhith ag eadar-nàiseantachadh an làrach gu lèir as urrainn dhuinn taic a thoirt do sgrùdadh làn-theacsa ioma-chànanach air an làrach agus optimization einnsean sgrùdaidh** .

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
