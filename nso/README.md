<h1 style="justify-content:space-between">3Ti.Site · Megopolo yeo e se nago mellwane<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

3Ti.Site, jenereithara ya sebaka sa go se fetoge sa maleme a mantši, e ka fetolela ka go iketla Markdown ka [maleme a go feta lekgolo a fapanego](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Batho ba bangwe ba ka nyaka go botšiša, bjale ka ge diphensele di na le mešomo ya go fetolela yeo e ageleditšwego ka gare, na ga go nyakege go dira gore wepesaete ye e be ya boditšhabatšhaba?

Ke nyaka go bolela gore **ke feela ka go dira gore lefelo ka moka e be la boditšhabatšhaba moo re ka thekgago go nyaka mongwalo ka moka wa maleme a mantši ka gare ga lefelo le go dira gore entšene ya go nyaka e šome gabotse** .

## Tatelano

"Beibele·Genesi".:

> Bagologolo ba be ba sa fapantšhe magareng ga maleme. Ba belegwe ka boikgantšho gomme ba nyaka go aga tora ye telele yeo ntlha ya yona e fihlago leratadimeng.
> <blockquote><p>Modimo o be a sa kgahlwe ke boikgogomošo bja motho, ka fao a phatlalatša diphedi ka moka mafelong a go fapafapana, a sa kgone go kwešišana.</p></blockquote>
> <blockquote><p>Ga e sa le go tloga ka nako yeo, go bile thata gore batho ba boledišane, dingangišano di ile tša tšwela pele gomme ga go na Tora ya Babele lefaseng.</p></blockquote>

Padi ya saense ya boikgopolelo ya &quot;Three-Body&quot; (mmiletšo wa Setšhaena: `3Ti` ) e itlhametše tlhabologo ya moeng yeo e boledišanago ka maphoto a mohlagase wa makenete, ga e na mapheko a polelo, gomme e atlegile ka theknolotši.

Ke tshepa gore ka thušo ya sedirišwa se, batho ba lefase ba tla swana le batho ba mebele ye meraro, poledišano e ka se thibelwe ke polelo, gomme batho ka moka ba tla kopana gape.

## Thuto Ya Thuto

## Matseno A Mošomo

### Boloka Sebopego Sa Markdown

### Fetoša Phetolelo

Ka morago ga go fetoša phetolelo, o swanetše go sepetša gape `./i18n.sh` go mpshafatša cache.

### Dintlha Tša Phetolelo

Ditshwayotshwayo tša phetolelo di swanetše go laetša polelo ka morago ga \```, go swana le ` ```rust` .

Ga bjale e thekga phetolelo ya ditshwayotshwayo bakeng sa moruswi, c, cpp, java, js, kofi, python, le bash.

Edita [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) go oketša thekgo ya phetolelo ya ditshwayotshwayo ka maleme a mantši.

### Beakanya Moemedi

Go beakanya diphetogo tša tikologo tše di latelago go dumelela megala ya Google Translate API go feta ka moemedi.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Go Tsenya Ga Go Fetoga

```
test: 测试变量<br 0>嵌入
```

### Empty The Cache Ya Go Hloka Selo

```bash
rm -rf .i18n/.cache
```
