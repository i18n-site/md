<h1 style="justify-content:space-between">3Ti.Site · Na smaoinich gun chrìochan<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Faodaidh 3Ti.Site, gineadair làrach-lìn statach ioma-chànan, Markdown eadar-theangachadh gu fèin-ghluasadach gu [còrr air ceud cànan eadar-dhealaichte](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Is dòcha gum bi cuid de dhaoine airson faighneachd, a-nis gu bheil gnìomhan eadar-theangachaidh stèidhichte aig brobhsairean, nach eil feum air an làrach-lìn a dhèanamh eadar-nàiseanta?

Tha mi airson a ràdh gur **ann dìreach le bhith ag eadar-nàiseantachadh an làrach gu lèir as urrainn dhuinn taic a thoirt do sgrùdadh làn-theacsa ioma-chànanach air an làrach agus optimization einnsean sgrùdaidh** .

## Seicheamh

"Bìoball · Genesis":

> Cha do rinn na seanairean dealachadh eadar cànanan. Thog iad tùir a’ ruighinn na speuran gus geata Dhè a ruighinn gus cliù a’ chinne-daonna a bhrosnachadh.
>
> Thuirt an Dia gu bheil daoine nan treubh dhaibh fhèin, leis an aon chultar agus gnèithean. Chan eil ann an togail tùr ach ro-ràdh. A-nis faodaidh tu rud sam bith a tha thu ag iarraidh a choileanadh, agus cha bhith dad agad ri eagal.
>
> An sin thàinig Dia agus sgaoil e an sluagh ann an diofar àiteachan, gun chomas aca a chèile a thuigsinn.
>
> Bhon uairsin, bha duilgheadas aig mac an duine ri conaltradh, dh’ èirich còmhstri gun stad, agus chan fhaca an saoghal tuilleadh tùr a ràinig na speuran.

Tha an nobhail ficsean saidheans &quot;Three-Body&quot; (fuaimneachadh Sìneach: `3Ti` ) a 'dèanamh ficsean air sìobhaltas coimheach a bhios a' conaltradh tro thonnan electromagnetic, aig nach eil cnapan-starra cànain, agus a tha soirbheachail gu teicneòlach.

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
