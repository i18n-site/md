# I18N.SITE · Asụsụ Enweghị Oke<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, onye na-emepụta saịtị static asụsụ ọtụtụ asụsụ, nwere ike ịtụgharị Markdown na-akpaghị aka ka ọ bụrụ [asụsụ karịrị narị asụsụ dị iche iche](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Ụfọdụ ndị nwere ike ịjụ, ugbu a ihe nchọgharị nwere arụ ọrụ ntụgharị asụsụ, ọ dịghị mkpa ịmegharị webụsaịtị mba ụwa?

Achọrọ m ịsị na **naanị site na ịmegharị saịtị ahụ dum ka anyị nwere ike ịkwado nchọta ederede zuru oke na saịtị multilingual na njikarịcha search engine** .

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
