<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un generator de site-uri static în mai multe limbi, poate traduce automat Markdown în [mai mult de o sută de limbi diferite](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Unii oameni ar dori să întrebe, acum că browserele au funcții de traducere încorporate, nu este necesară internaționalizarea site-ului?

Vreau să spun că **numai prin internaționalizarea întregului site putem susține căutarea în text integral în mai multe limbi și optimizarea motoarelor de căutare** .

## Secvenţă

„Biblie·Geneza”:

> Anticii nu făceau distincție între limbi. Ei s-au născut cu mândrie și au vrut să construiască un turn înalt, cu vârful până la cer.
> <blockquote><p>Dumnezeu a fost nemulțumit de aroganța omului, așa că a împrăștiat toate ființele vii în diverse locuri, neputând să se înțeleagă.</p></blockquote>
> <blockquote><p>De atunci, oamenilor le-a fost greu să comunice, disputele au continuat și nu există Turnul Babel în lume.</p></blockquote>

Romanul științifico-fantastic „Three-Body” (pronunție chineză: `3Ti` ) ficționalizează o civilizație extraterestră care comunică prin unde electromagnetice, nu are bariere lingvistice și este prosperă din punct de vedere tehnologic.

Sper că, cu ajutorul acestui instrument, oamenii pământului vor fi ca oameni cu trei corpuri, comunicarea nu va fi restricționată de limbaj și toată omenirea va fi din nou unită.

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
