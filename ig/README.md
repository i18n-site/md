<h1 style="justify-content:space-between">3Ti.Site · Chee Onweghị ókè<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, onye na-emepụta saịtị static asụsụ ọtụtụ asụsụ, nwere ike ịtụgharị Markdown na-akpaghị aka n'ime [ihe karịrị narị asụsụ dị iche iche](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Ụfọdụ ndị nwere ike ịjụ, ugbu a ihe nchọgharị nwere arụ ọrụ ntụgharị asụsụ, ọ dịghị mkpa ịmegharị webụsaịtị mba ụwa?

Achọrọ m ịsị na **naanị site na ịmegharị saịtị ahụ dum ka anyị nwere ike ịkwado nchọta ederede zuru oke na saịtị multilingual na njikarịcha search engine** .

## Usoro

Bible · Jenesis :

> N’oge ochie, mgbe asụsụ dị otu, ihe a kpọrọ mmadụ rụrụ ụlọ elu ruru n’eluigwe, bụ́ ọnụ ụzọ ámá Chineke, na-ekwusa ịdị ike nke ihe a kpọrọ mmadụ.
>
> Chineke kwuru, sị, "Ndị mmadụ na-ejikọta dị ka otu ebo, n'asụsụ nkekọrịta, ma ụlọ elu a bụ naanị okwu mmalite. Ugbu a ha na-emezu ọchịchọ ha, ọ dịghịkwa nsọpụrụ ga-anọgide."
>
> Ya mere, Chineke rịdata, na-achụsasị ndị mmadụ n'akụkụ dị iche iche, jiri asụsụ dị iche iche.
>
> Site na mgbe ahụ gawa, nkwurịta okwu nke mmadụ ghọrọ ihe ịma aka, esemokwu adịghị agwụ agwụ, ọ dịghịkwa ụlọ elu metụrụ mbara igwe.

Akwụkwọ akụkọ sayensị sayensị &quot;Ara-Atọ&quot; (pronunciation Chinese: `3Ti` ) na-akọwapụta echiche efu nke mba ọzọ nke na-ekwurịta okwu site na ebili mmiri electromagnetic, enweghị ihe mgbochi asụsụ, ma nwee ọganihu na nkà na ụzụ.

Enwere m olileanya ịmepụta ngwá ọrụ nke ga-eme ka ndị bi n'ụwa dị ka mmadụ atọ, na-ekwurịta okwu n'ejighị asụsụ, ma mee ka ihe nile a kpọrọ mmadụ dịrị n'otu ọzọ.

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
