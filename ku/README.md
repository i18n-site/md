# I18N.MALPER · Ziman Bê Sînor<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, çêkerek malpera statîk a pirzimanî, dikare bixweber Markdown wergerîne [zêdetirî sed zimanên cihê](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="http://s-cd-3653-i18n-img.oss.dogecdn.com/i18n.lang.webp" alt="" />

Dibe ku hin kes bixwazin bipirsin, naha ku gerokên xwedan fonksiyonên wergerê ne, gelo ne hewce ye ku malperê navneteweyî bikin?

Ez dixwazim bibêjim ku **tenê bi navneteweyîkirina tevahiya malperê em dikarin di nav-malperê de pirzimanî-lêgerîna tev-tekst û xweşbîniya motora lêgerînê piştgirî bikin** .

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
