<h1 style="justify-content:space-between">3Ti.Site · Gândește-te fără margini<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un generator de site static, poate traduce automat Markdown în [mai mult de o sută de limbi diferite](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Unii oameni ar putea întreba, deoarece toate browserele au funcții de traducere, nu este necesară internaționalizarea site-ului?

Aș dori să spun că **numai site-urile web care generează traduceri statice pot accepta căutarea multilingvă pe site și optimizarea motoarelor de căutare** .

## Introducere

Biblia · Geneza :

> În vremurile străvechi, când limbile erau una, omenirea a construit un turn care ajungea până la ceruri, un portal către domeniul lui Dumnezeu, proclamând puterea omenirii.
>
> Dumnezeu a declarat: „Oamenii se unesc ca un singur trib, cu o limbă comună, iar acest turn este doar un prolog. Acum ei își îndeplinesc dorința și nu va mai fi frică”.
>
> Astfel, Dumnezeu a coborât, împrăștiind oamenii în diferite colțuri, folosesc diferite limbi.
>
> De atunci, comunicarea umană a devenit provocatoare, disputele nesfârșite și nu mai exista un turn care atingea cerul.

Romanul științifico-fantastic „Three-Body” (pronunție chineză: `3Ti` ) ficționalizează o civilizație extraterestră care comunică prin unde electromagnetice, nu are bariere lingvistice și este prosperă din punct de vedere tehnologic.

Sper să creez un instrument care să le permită oamenilor de pe pământ să fie ca oameni cu trei corpuri, să comunice fără a fi legați de limbaj și să unească din nou întreaga omenire.

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
