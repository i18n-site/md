<h1 style="justify-content:space-between">3Ti.Site · Bifikirin Bê Sînor<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, çêkerek malpera statîk a pirzimanî, dikare bixweber Markdown wergerîne [zêdetirî sed zimanên cihê](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Dibe ku hin kes bixwazin bipirsin, naha ku gerokên xwedan fonksiyonên wergerê ne, gelo ne hewce ye ku malperê navneteweyî bikin?

Ez dixwazim bibêjim ku **tenê bi navneteweyîkirina tevahiya malperê em dikarin di nav-malperê de pirzimanî-lêgerîna tev-tekst û xweşbîniya motora lêgerînê piştgirî bikin** .

## Dor

"Încîl · Destpêbûn":

> Kalan ferq û cudahî di navbera zimanan de nekiriye. Wan bircên ku digihîjin ezmanan ji bo ku bigihîjin deriyê Xwedê ava kirin da ku rûmeta nijada mirovî pêşve bibin.
>
> Xwedê gotiye ku mirov qebîleyek bi xwe ne, xwedî heman çand û cureyê ne. Çêkirina bircê tenê pêşgotinek e. Naha hûn dikarin her tiştê ku hûn dixwazin pêk bînin, û hûn ê tiştek tune ku hûn bitirsin.
>
> Paşê Xwedê hat û xelq li ciyên cûrbecûr belawela kir, ji hev fem nedikirin.
>
> Ji hingê ve, mirovahî ji bo danûstandinê têkoşîn kir, pevçûnên bêdawî rabûn, û cîhanê êdî bircek ku bigihîje ezmanan nedît.

Romana çîroka zanistî &quot;Three-Body&quot; (navdêra Çînî: `3Ti` ) şaristaniyeke biyanî ku bi pêlên elektromagnetîk pêwendiyê çêdike, astengên zimanî tune ne û ji hêla teknolojîk ve dewlemend e, xeyalî dike.

Hêvîdar im ku bi alîkariya vê amûrê, gelên dinyayê bibin wek mirovên sê-bedenî, têkilî bi ziman nemînin û hemû mirovahî dîsa bibin yek.

## Tutorial

## Fonksiyon Destpêk

### Forma Markdown Biparêzin

### Wergerê Biguherîne

Piştî guherandina wergerê, divê hûn ji nû ve `./i18n.sh` bimeşînin da ku kaşê nûve bikin.

### Têbiniyên Wergerandinê

Pêdivî ye ku şîroveyên werger zimanê piştî \``` nîşan bidin, wekî ` ```rust` .

Niha ji bo rust, c, cpp, java, js, qehwe, python, û bash wergera şîroveyê piştgirî dike.

[Tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) biguherîne da ku ji bo şîroveyên bi zimanên din piştgirîya wergerê zêde bike.

### Veavakirina Proxy

Sazkirina guhêrbarên hawîrdorê yên jêrîn dihêle ku bangên API-ya Google Wergerê bi navgîniyê re derbas bibin.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variable Embedding

```
test: 测试变量<br 0>嵌入
```

### Cache Vala Bikin

```bash
rm -rf .i18n/.cache
```
