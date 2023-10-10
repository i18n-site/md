<h1 style="justify-content:space-between">3Ti.Site · Bê Sînor Bifikirin<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, çêkerek malpera statîk, dikare bixweber Markdown wergerîne [zêdetirî sed zimanên cihê](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Dibe ku hin kes bipirsin, ji ber ku hemî gerok xwedî fonksiyonên wergerê ne, gelo ne hewce ye ku malperê navneteweyî bikin?

Ez dixwazim bibêjim ku **tenê malperên ku wergerên statîk çêdikin dikarin pirzimanî li malper-tev-nivîsa lêgerîn û xweşbîniya motora lêgerînê piştgirî bikin** .

## Pêşkêş

Încîl · Destpêbûn :

> Di demên kevnare de, dema ku ziman yek bûn, mirovahiyê bircek ku digihije ezmanan, dergehek ji qada Xwedê re ava kir û hêza mirovahiyê ragihand.
>
> Xwedê daxuyand, "Mirov wek yek qebîle, bi zimanekî hevpar dibin yek û ev birca pêşgotinek e. Niha ew digihîjin daxwaza xwe û êdî tirs tune."
>
> Ji ber vê yekê, Xwedê daket, mirovan li quncikên cihê belav kir, zimanên cihê bikar anîn.
>
> Ji hingê ve, danûstandina mirovî dijwar bû, nakokî bêdawî bûn, û êdî birca ku ezman bigirta tune bû.

Romana çîroka zanistî &quot;Three-Body&quot; (navdêra Çînî: `3Ti` ) şaristaniyeke biyanî ku bi pêlên elektromagnetîk pêwendiyê çêdike, astengên zimanî tune ne û ji hêla teknolojîk ve dewlemend e, xeyalî dike.

Ez hêvî dikim ku amûrek ku mirovên li ser rûyê erdê bibin wekî mirovên sê-bedenî, bêyî ku bi ziman ve were girêdan bi hev re têkilî daynin û ji nû ve tevahiya mirovahiyê bike yek, biafirînim.

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
