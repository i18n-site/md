<h1 style="justify-content:space-between">3Ti.Site · A’ smaoineachadh gun chrìochan<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Faodaidh 3Ti.Site, gineadair làrach-lìn statach ioma-chànan, Markdown eadar-theangachadh gu fèin-ghluasadach gu [còrr air ceud cànan eadar-dhealaichte](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Is dòcha gum bi cuid de dhaoine airson faighneachd, a-nis gu bheil gnìomhan eadar-theangachaidh stèidhichte aig brobhsairean, nach eil feum air an làrach-lìn a dhèanamh eadar-nàiseanta?

Tha mi airson a ràdh gur **ann dìreach le bhith ag eadar-nàiseantachadh an làrach gu lèir as urrainn dhuinn taic a thoirt do sgrùdadh làn-theacsa ioma-chànanach air an làrach agus optimization einnsean sgrùdaidh** .

## Ro-Ràdh

Bìoball · Genesis :

> Anns na seann linntean, nuair a bha cànanan mar aon, thog an cinne-daonna tùr a 'ruigsinn nan nèamhan, doras gu fearann ​​​​Dhè, a' searmonachadh cumhachd a 'chinne-daonna.
>
> Dh' ainmich Dia, " Tha daoine ag aonadh mar aon treubh, le teangaidh roinnte, agus cha 'n 'eil anns an tùr so ach prologue. A nis tha iad a' coilionadh am miann, agus cha bhi eagal ann ni 's mò."
>
> Mar sin, thàinig Dia sìos, a 'sgapadh dhaoine gu diofar oiseanan, a' cleachdadh diofar chànanan.
>
> Bhon uairsin, thàinig conaltradh daonna gu bhith dùbhlanach, connspaidean gun chrìoch, agus cha robh tuilleadh ann an tùr a bhean ris na speuran.

Tha an nobhail ficsean saidheans &quot;Three-Body&quot; (fuaimneachadh Sìneach: `3Ti` ) a 'dèanamh ficsean air sìobhaltas coimheach a bhios a' conaltradh tro thonnan electromagnetic, aig nach eil cnapan-starra cànain, agus a tha soirbheachail gu teicneòlach.

Tha mi an dòchas inneal a chruthachadh a bheir comas do mhuinntir na talmhainn a bhith mar dhaoine trì-chorp, conaltradh gun a bhith ceangailte ri cànan, agus mac an duine uile aonachadh a-rithist.

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
