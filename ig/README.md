<h1 style="justify-content:space-between">3Ti.Site · Echiche enweghị oke<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

3Ti.Site, onye na-emepụta saịtị static asụsụ ọtụtụ asụsụ, nwere ike ịtụgharị Markdown na-akpaghị aka n&#39;ime [ihe karịrị narị asụsụ dị iche iche](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Ụfọdụ ndị nwere ike ịjụ, ugbu a ihe nchọgharị nwere arụ ọrụ ntụgharị asụsụ, ọ dịghị mkpa ịmegharị webụsaịtị mba ụwa?

Achọrọ m ịsị na **naanị site na ịmegharị saịtị ahụ dum ka anyị nwere ike ịkwado nchọta ederede zuru oke na saịtị multilingual na njikarịcha search engine** .

## Usoro

"Bible·Jenesis":

> Ndị ochie aghọtaghị ihe dị iche n’asụsụ. A mụrụ ha na mpako, ha chọkwara ịrụ ụlọ elu toro ogologo nke elu ya ruru n'eluigwe.
> <blockquote><p>Chineke wedara npako madu iwe, ya mere o we chusa ihe nile di ndu n&#39;ebe di iche iche, n&#39;enweghi ike ighọta onwe-ha.</p></blockquote>
> <blockquote><p>Kemgbe ahụ, ọ na-esiri ụmụ mmadụ ike ịna-ekwurịta okwu, esemokwu ka na-aga n’ihu, e nweghị Ụlọ Elu Bebel n’ụwa.</p></blockquote>

Akwụkwọ akụkọ sayensị sayensị &quot;Ara-Atọ&quot; (pronunciation Chinese: `3Ti` ) na-akọwapụta echiche efu nke mba ọzọ nke na-ekwurịta okwu site na ebili mmiri electromagnetic, enweghị ihe mgbochi asụsụ, ma nwee ọganihu na nkà na ụzụ.

Enwere m olileanya na site n'enyemaka nke ngwá ọrụ a, ndị bi n'ụwa ga-adị ka mmadụ atọ, a gaghị egbochi nkwurịta okwu site n'asụsụ, a ga-ejikọtakwa mmadụ nile ọzọ.

## Nkuzi

## Okwu Mmalite Ọrụ

### Debe Usoro Markdown

### Megharịa Ntụgharị Asụsụ

Mgbe emezigharịrị ntụgharị asụsụ ahụ, ịkwesịrị ịmegharị `./i18n.sh` iji melite cache.

### Ndetu Ntụgharị Asụsụ

Okwu ntụgharị asụsụ kwesịrị igosi asụsụ ahụ ka \``` gachara, dị ka ` ```rust` .

Ugbu a na-akwado ntụgharị okwu nkọwa maka nchara, c, cpp, java, js, kọfị, python na bash.

Dezie [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) ka ịgbakwunye nkwado ntụgharị asụsụ maka nzaghachi n&#39;asụsụ ndị ọzọ.

### Hazie Proxy

Ịtọlite ​​mgbanwe gburugburu ebe obibi na-enye ohere ka Google Translate API na-aga site na proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Mgbakwunye Mgbanwe

```
test: 测试变量<br 0>嵌入
```

### Mepee Cache Ahụ Efu

```bash
rm -rf .i18n/.cache
```
