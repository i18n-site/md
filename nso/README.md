<h1 style="justify-content:space-between">3Ti.Site · Go Nagana ka Ntle le Mellwane<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, jenereithara ya sebaka sa go se fetoge sa maleme a mantši, e ka fetolela ka go iketla Markdown ka [maleme a go feta lekgolo a fapanego](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Batho ba bangwe ba ka nyaka go botšiša, bjale ka ge diphensele di na le mešomo ya go fetolela yeo e ageleditšwego ka gare, na ga go nyakege go dira gore wepesaete ye e be ya boditšhabatšhaba?

Ke nyaka go bolela gore **ke feela ka go dira gore lefelo ka moka e be la boditšhabatšhaba moo re ka thekgago go nyaka mongwalo ka moka wa maleme a mantši ka gare ga lefelo le go dira gore entšene ya go nyaka e šome gabotse** .

## Matseno

Beibele · Genesi :

> Mehleng ya bogologolo, ge maleme e be e le a tee, batho ba ile ba aga tora yeo e fihlago magodimong, e lego kgoro ya go ya mmušong wa Modimo, ba tsebatša matla a batho.
>
> Modimo o tsebagaditše gore, "Banna ba kopana bjalo ka morafe o tee, ka leleme le le abelanwago, gomme tora ye e no ba ketapele. Bjale ba fihlelela kganyogo ya bona, gomme go ka se sa ba le poifo."
>
> Ka go realo, Modimo o ile a theoga, a phatlalatša batho dikhutlo tše di fapanego, a šomiša maleme a go fapana.
>
> Go tloga ka nako yeo go ya pele, poledišano ya batho e ile ya ba tlhohlo, dingangišano tša se fele gomme go be go se sa na tora yeo e kgomago leratadima.

Padi ya saense ya boikgopolelo ya &quot;Three-Body&quot; (mmiletšo wa Setšhaena: `3Ti` ) e itlhametše tlhabologo ya moeng yeo e boledišanago ka maphoto a mohlagase wa makenete, ga e na mapheko a polelo, gomme e atlegile ka theknolotši.

Ke holofela go hlama sedirišwa seo se tlago kgontšha batho ba lefase go swana le batho ba mebele ye meraro, go boledišana ntle le go tlemiwa ke polelo, le go kopanya batho ka moka gape.

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
