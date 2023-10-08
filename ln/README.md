# I18N.SITE · Monoko Oyo Ezangi Ndelo<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, générateur ya site statique ya minoko mingi, ekoki kobongola na ndenge ya automatique Markdown na [minoko koleka nkama ekeseni](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="http://s-cd-3653-i18n-img.oss.dogecdn.com/i18n.lang.webp" alt="" />

Bato mosusu bakoki kotuna, sikoyo lokola ba navigateurs ezali na misala ya kobongola oyo etongami na kati, ezali na ntina te kosala ete site Internet yango ezala na mikili mosusu?

Nalingi koloba ete **kaka na internationalisation ya site mobimba nde tokoki ko soutenir multi-lingual in-site recherche ya texte mobimba mpe optimisation ya moteur de recherche** .

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
