<h1 style="justify-content:space-between">3Ti.Site · Chee Onweghị ókè<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, onye na-emepụta saịtị static asụsụ ọtụtụ asụsụ, nwere ike ịtụgharị Markdown na-akpaghị aka n'ime [ihe karịrị narị asụsụ dị iche iche](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Ụfọdụ ndị nwere ike ịjụ, ugbu a ihe nchọgharị nwere arụ ọrụ ntụgharị asụsụ, ọ dịghị mkpa ịmegharị webụsaịtị mba ụwa?

Achọrọ m ịsị na **naanị site na ịmegharị saịtị ahụ dum ka anyị nwere ike ịkwado nchọta ederede zuru oke na saịtị multilingual na njikarịcha search engine** .

## Usoro

"Bible·Jenesis":

> Ndị ochie aghọtaghị ihe dị iche n’asụsụ. Ha wuru ụlọ elu ruru elu igwe iji rute ọnụ ụzọ Chineke iji kwalite ugwu nke agbụrụ mmadụ.
>
> Chineke kwuru na ndị mmadụ bụ ebo nke ha, nwere otu omenala na ụdị. Ịrụ ụlọ elu bụ naanị ihe mmalite. Ugbu a ị nwere ike imezu ihe ọ bụla ịchọrọ, ị gaghị enwekwa ihe ị ga-atụ egwu.
>
> Chineke wee bịa chụsasịa ndị mmadụ n’ebe dị iche iche, ha enweghịkwa ike ịghọta ibe ha.
>
> Site na mgbe ahụ gawa, ihe a kpọrọ mmadụ gbalịsiri ike ịkparịta ụka, esemokwu bilitere na-adịghị agwụ agwụ, ụwa ahụkwaghị ụlọ elu nke ruru eluigwe.

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

Dezie [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) ka ịgbakwunye nkwado ntụgharị asụsụ maka nzaghachi n'asụsụ ndị ọzọ.

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
