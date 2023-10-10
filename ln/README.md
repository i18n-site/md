<h1 style="justify-content:space-between">3Ti.Site · Kanisa Ba Frontières Te<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, générateur ya site statique ya minoko ebele, ekoki kobongola automatiquement Markdown na [minoko koleka nkama ekeseni](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Bato mosusu bakoki kotuna, sikoyo lokola ba navigateurs ezali na misala ya kobongola oyo etongami na kati, ezali na ntina te kosala ete site Internet yango ezala na mikili mosusu?

Nalingi koloba ete **kaka na internationalisation ya site mobimba nde tokoki ko soutenir multi-lingual in-site recherche ya texte mobimba mpe optimisation ya moteur de recherche** .

## Ndenge Esalemaka

"Biblia·Ebandeli".:

> Na ntango ya kala, ntango monɔkɔ ezalaki moko, bato bazalaki kobotama na lolendo. Balukaki kotonga ndako molai, ndako molai oyo esimbaki likoló.
>
> Kasi, Bonzambe, oyo asepelaki te na lolendo na bango, asalaki ete bato bápalangana na mabele, mpe yango esalaki ete minɔkɔ na bango esosolama te epai na mosusu.
>
> Kobanda wana, bato bazalaki kobunda mpo na kosolola, matata ebimaki kozanga nsuka, mpe mokili emonanaki lisusu te linɔ́ngi oyo ekómaki na likoló.

Roman ya science fiction &quot;Tree-Body&quot; (prononciation chinois: `3Ti` ) e fictionaliser civilisation alienne oyo e communiquer na nzela ya ba mbonge électromagnétique, ezali na ba barrières ya langue te, mpe ezali na prospère technologique.

Nazali na elikya ete na lisalisi ya esaleli oyo, bato ya mabele bakozala lokola bato ya nzoto misato, bosololi ekopekisama na monoko te, mpe bato banso bakosangana lisusu.

## Mateya Ya Koyekola

## Mosala Maloba Ya Ebandeli

### Bomba Format Ya Markdown

### Bobongola Libongoli

Sima ya kobongola libongoli, esengeli osala lisusu `./i18n.sh` mpo na kosala mise à jour ya cache.

### Maloba Ya Kobongola

Maloba ya bobongoli esengeli kolakisa monoko sima ya \```, lokola ` ```rust` .

Sikoyo esungaka libongoli ya ba commentaires mpo na rust, c, cpp, java, js, café, python, mpe bash.

Bobongisi [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) mpo na kobakisa lisungi ya bobongoli mpo na makanisi na minoko mingi.

### Configurer Proxy Ya Kosala

Kobongisa ba variables ya environnement oyo elandi epesaka nzela na ba appels ya API ya Google Translate eleka na proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Embedding Ya Variable

```
test: 测试变量<br 0>嵌入
```

### Vide Na Cache

```bash
rm -rf .i18n/.cache
```
