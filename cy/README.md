<h1 style="justify-content:space-between">3Ti.Site · Meddyliwch Dim Ffiniau<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Gall 3Ti.Site, generadur safle statig aml-iaith, gyfieithu Markdown yn awtomatig i [fwy na chant o ieithoedd gwahanol](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Efallai y bydd rhai pobl am ofyn, nawr bod gan borwyr swyddogaethau cyfieithu adeiledig, a yw'n ddiangen rhyngwladoli'r wefan?

Rwyf am ddweud mai **dim ond trwy ryngwladoli'r wefan gyfan y gallwn gefnogi chwilio testun llawn amlieithog ar y safle ac optimeiddio peiriannau chwilio** .

## Dilyniant

"Beibl·Genesis":

> Yn yr hen amser, pan oedd iaith yn un, ganwyd y ddynoliaeth yn falch. Ceisiasant adeiladu adeilad uchel, twr a gyffyrddai â'r nefoedd.
>
> Pa fodd bynag, darfu i'r Dwyfol, yn anfoddlawn i'w haerllugrwydd, beri i'r bobl wasgaru ar draws y ddaear, gan wneud eu tafodau yn annealladwy i'w gilydd.
>
> O hynny ymlaen, roedd dynolryw yn ymdrechu i gyfathrebu, cododd gwrthdaro yn ddiddiwedd, ac ni welodd y byd mwyach dwr a gyrhaeddodd yr awyr.

Mae'r nofel ffuglen wyddonol &quot;Three-Body&quot; (ynganiad Tsieineaidd: `3Ti` ) yn ffugio gwareiddiad estron sy'n cyfathrebu trwy donnau electromagnetig, heb unrhyw rwystrau iaith, ac sy'n lewyrchus yn dechnolegol.

Rwy'n gobeithio, gyda chymorth yr offeryn hwn, y bydd pobl y ddaear fel pobl tri chorff, ni fydd cyfathrebu'n cael ei gyfyngu gan iaith, a bydd dynolryw i gyd yn unedig eto.

## Tiwtorial

## Cyflwyniad Swyddogaeth

### Cadwch Fformat Markdown

### Addasu Cyfieithiad

Ar ôl addasu'r cyfieithiad, mae angen i chi ail-redeg `./i18n.sh` i ddiweddaru'r storfa.

### Nodiadau Cyfieithu

Mae angen i sylwadau cyfieithu nodi'r iaith ar ôl \```, fel ` ```rust` .

Ar hyn o bryd yn cefnogi cyfieithu sylwadau ar gyfer rhwd, c, cpp, java, js, coffi, python, a bash.

Golygu [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) i ychwanegu cymorth cyfieithu ar gyfer sylwadau mewn mwy o ieithoedd.

### Ffurfweddu Dirprwy

Mae gosod y newidynnau amgylchedd canlynol yn caniatáu i alwadau API Google Translate fynd trwy'r dirprwy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Mewnosod Amrywiol

```
test: 测试变量<br 0>嵌入
```

### Gwag Y Cache

```bash
rm -rf .i18n/.cache
```
