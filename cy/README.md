<h1 style="justify-content:space-between">3Ti.Site · Meddwl Heb Ffiniau<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Gall 3Ti.Site, generadur safle sefydlog, gyfieithu Markdown yn awtomatig i [fwy na chant o ieithoedd gwahanol](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Efallai y bydd rhai pobl yn gofyn, gan fod gan bob porwr swyddogaethau cyfieithu, a yw'n ddiangen i ryngwladoli'r wefan?

Hoffwn ddweud mai **dim ond gwefannau sy&#39;n cynhyrchu cyfieithiadau statig sy&#39;n gallu cefnogi chwilio testun llawn amlieithog ar y safle ac optimeiddio peiriannau chwilio** .

## Rhagymadrodd

Beibl · Genesis :

> Yn yr hen amser, pan oedd ieithoedd yn un, adeiladodd y ddynoliaeth dwr yn ymestyn i'r nefoedd, porth i barth Duw, gan gyhoeddi nerth dynolryw.
>
> Dywedodd Duw, "Mae dynion yn uno yn un llwyth, â thafodau rhanedig, ac nid yw'r tŵr hwn ond rhaglith. Yn awr y maent yn cyflawni eu dymuniad, ac ni bydd mwy o ofn."
>
> Felly, disgynnodd Duw, gan wasgaru pobl i wahanol gorneli, defnyddio gwahanol ieithoedd.
>
> O hynny ymlaen, daeth cyfathrebu dynol yn heriol, anghydfodau'n ddiddiwedd, a dim mwy oedd twr a gyffyrddodd â'r awyr.

Mae'r nofel ffuglen wyddonol &quot;Three-Body&quot; (ynganiad Tsieineaidd: `3Ti` ) yn ffugio gwareiddiad estron sy'n cyfathrebu trwy donnau electromagnetig, heb unrhyw rwystrau iaith, ac sy'n lewyrchus yn dechnolegol.

Rwy’n gobeithio creu arf a fydd yn galluogi pobl y ddaear i fod fel pobl tri chorff, cyfathrebu heb fod yn rhwym wrth iaith, ac uno holl ddynolryw eto.

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
