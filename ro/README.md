<h1 style="justify-content:space-between">I18N.SITE · Limbă fără margini<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

I18N.SITE, un generator de site-uri static în mai multe limbi, poate traduce automat Markdown în [mai mult de o sută de limbi diferite](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Unii oameni ar dori să întrebe, acum că browserele au funcții de traducere încorporate, nu este necesară internaționalizarea site-ului?

Vreau să spun că **numai prin internaționalizarea întregului site putem susține căutarea în text integral în mai multe limbi și optimizarea motoarelor de căutare** .

## Tutorial

## Introducere A Funcției

### Păstrați Formatul Markdown

### Modificați Traducerea

După modificarea traducerii, trebuie să rulați din nou `./i18n.sh` pentru a actualiza memoria cache.

### Note De Traducere

Comentariile de traducere trebuie să indice limba după \```, cum ar fi ` ```rust` .

În prezent, acceptă traducerea comentariilor pentru rust, c, cpp, java, js, coffee, python și bash.

Editați [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) pentru a adăuga suport pentru traducerea comentariilor în mai multe limbi.

### Configurați Proxy

Setarea următoarelor variabile de mediu permite apelurilor API Google Translate să treacă prin proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Încorporare Variabilă

```
test: 测试变量<br 0>嵌入
```

### Goliți Cache-Ul

```bash
rm -rf .i18n/.cache
```
