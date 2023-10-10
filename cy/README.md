<h1 style="justify-content:space-between">3Ti.Site · Meddyliwch Dim Ffiniau<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Gall 3Ti.Site, generadur safle statig aml-iaith, gyfieithu Markdown yn awtomatig i [fwy na chant o ieithoedd gwahanol](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Efallai y bydd rhai pobl am ofyn, nawr bod gan borwyr swyddogaethau cyfieithu adeiledig, a yw'n ddiangen rhyngwladoli'r wefan?

Rwyf am ddweud mai **dim ond trwy ryngwladoli&#39;r wefan gyfan y gallwn gefnogi chwilio testun llawn amlieithog ar y safle ac optimeiddio peiriannau chwilio** .

## Dilyniant

"Beibl·Genesis":

> Nid oedd yr henuriaid yn gwahaniaethu rhwng ieithoedd. Cawsant eu geni â balchder ac roeddent am adeiladu tŵr uchel gyda'r brig yn ymestyn i'r awyr.
> <blockquote><p>Yr oedd Duw yn anfodlon â haerllugrwydd dyn, felly gwasgarodd bob bod byw mewn amrywiol leoedd, heb allu deall ei gilydd.</p></blockquote>
> <blockquote><p>Ers hynny, mae wedi bod yn anodd i fodau dynol gyfathrebu, mae anghydfodau wedi parhau, ac nid oes Tŵr Babel yn y byd.</p></blockquote>

Mae&#39;r nofel ffuglen wyddonol &quot;Three-Body&quot; (ynganiad Tsieineaidd: `3Ti` ) yn ffugio gwareiddiad estron sy&#39;n cyfathrebu trwy donnau electromagnetig, heb unrhyw rwystrau iaith, ac sy&#39;n lewyrchus yn dechnolegol.

Rwy'n gobeithio, gyda chymorth yr offeryn hwn, y bydd pobl y ddaear fel pobl tri chorff, ni fydd cyfathrebu'n cael ei gyfyngu gan iaith, a bydd dynolryw i gyd yn unedig eto.

## Tiwtorial

## Cyflwyniad Swyddogaeth

### Cadwch Fformat Markdown

### Addasu Cyfieithiad

Ar ôl addasu&#39;r cyfieithiad, mae angen i chi ail-redeg `./i18n.sh` i ddiweddaru&#39;r storfa.

### Nodiadau Cyfieithu

Mae angen i sylwadau cyfieithu nodi&#39;r iaith ar ôl \```, fel ` ```rust` .

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
