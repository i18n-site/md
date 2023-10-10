<h1 style="justify-content:space-between">3Ti.Site · Ouni Grenzen denken<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, e Multi-Sprooch statesche Site Generator, kann Markdown automatesch a [méi wéi honnert verschidde Sproochen](https://github.com/i18n-site/node/blob/main/lang/src/index.js) iwwersetzen.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

E puer Leit kënne froen, elo datt Browser agebaute Iwwersetzungsfunktiounen hunn, ass et onnéideg fir d'Websäit ze internationaliséieren?

Ech wëll soen datt **nëmmen duerch d'Internationaliséierung vum ganze Site kënne mir méisproocheg In-Site Volltext Sich a Sichmotoroptimiséierung ënnerstëtzen** .

## Aféierung

Bibel · Genesis :

> An alen Zäiten, wéi d'Sproochen een waren, huet d'Mënschheet en Tuerm gebaut, deen an den Himmel erreecht, e Portal zum Gottes Domain, deen d'Mënschheet hir Muecht verkënnegt huet.
>
> Gott huet erkläert: "Männer vereenegen sech als ee Stamm, mat enger gemeinsamer Zong, an dësen Tuerm ass nëmmen e Prolog. Elo erreechen se hire Wonsch, an et gëtt keng Angscht méi."
>
> Also ass Gott erofgaang, d'Leit an verschidden Ecker verspreet, verschidde Sprooche benotzen.
>
> Vun do un ass d'mënschlech Kommunikatioun usprochsvoll ginn, Streidereien endlos, a kee méi war et en Tuerm deen den Himmel beréiert huet.

De Science Fiction Roman &quot;Three-Body&quot; (Chinesesch Aussprooch: `3Ti` ) fictionaliséiert eng alien Zivilisatioun déi duerch elektromagnetesch Wellen kommunizéiert, keng Sproochbarrièren huet an technologesch räich ass.

Ech hoffen e Tool ze kreéieren deen d'Leit vun der Äerd erméigleche wéi dräi-Kierper Leit ze sinn, ouni Sprooch gebonnen ze kommunizéieren an d'ganz Mënschheet erëm ze verbannen.

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
