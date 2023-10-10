<h1 style="justify-content:space-between">3Ti.Site · Denken keng Grenzen<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, e Multi-Sprooch statesche Site Generator, kann Markdown automatesch a [méi wéi honnert verschidde Sproochen](https://github.com/i18n-site/node/blob/main/lang/src/index.js) iwwersetzen.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

E puer Leit wëlle vläicht froen, elo datt Browser agebaute Iwwersetzungsfunktiounen hunn, ass et onnéideg fir d'Websäit ze internationaliséieren?

Ech wëll soen datt **nëmmen duerch d'Internationaliséierung vum ganze Site kënne mir méisproocheg In-Site Volltext Sich a Sichmotoroptimiséierung ënnerstëtzen** .

## Sequenz

"Bibel · Genesis":

> D'Alter hunn net tëscht Sproochen ënnerscheeden. Si hunn Tierm gebaut, déi den Himmel erreechen, fir de Paart vu Gott z'erreechen fir de Prestige vun der Mënschheet ze förderen.
>
> De Gott huet gesot datt d'Leit en eegene Stamm sinn, mat der selwechter Kultur a Spezies. En Tuerm bauen ass just en Optakt. Elo kënnt Dir erreechen wat Dir wëllt, an Dir hutt näischt ze fäerten.
>
> Dunn ass Gott komm an huet d'Leit op verschiddene Plazen verspreet, net fäeg sech ze verstoen.
>
> Vun do un huet d'Mënschheet gekämpft fir ze kommunizéieren, Konflikter entstanen endlos, an d'Welt huet keen Tuerm méi gesinn, deen den Himmel erreecht huet.

De Science Fiction Roman &quot;Three-Body&quot; (Chinesesch Aussprooch: `3Ti` ) fictionaliséiert eng alien Zivilisatioun déi duerch elektromagnetesch Wellen kommunizéiert, keng Sproochbarrièren huet an technologesch räich ass.

Ech hoffen, datt mat der Hëllef vun dësem Tool d'Leit vun der Äerd wéi dräi-Kierper Leit sinn, d'Kommunikatioun gëtt net vu Sprooch beschränkt, an d'ganz Mënschheet wäert erëm vereenegt ginn.

## Tutorial

## Funktioun Aféierung

### Halt Markdown Format

### Iwwersetzung Änneren

Nodeems Dir d'Iwwersetzung geännert hutt, musst Dir `./i18n.sh` nei lafen fir de Cache ze aktualiséieren.

### Iwwersetzung Notizen

Iwwersetzungskommentarer mussen d'Sprooch no \``` uginn, sou wéi ` ```rust` .

Ënnerstëtzt de Moment Kommentar Iwwersetzung fir Rust, c, cpp, Java, js, Kaffi, Python, a Bash.

Edit [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) fir Iwwersetzungsënnerstëtzung fir Kommentarer a méi Sproochen ze addéieren.

### Proxy Konfiguréieren

Astellung vun de folgenden Ëmfeldvariablen erlaabt Google Translate API Uriff duerch de Proxy ze goen.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variabel Embedding

```
test: 测试变量<br 0>嵌入
```

### Den Cache Eidel Maachen

```bash
rm -rf .i18n/.cache
```
