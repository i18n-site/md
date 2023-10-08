# I18N.SITE · Iaith Heb Ffiniau<img Src="//i-01.eu.org/i18n.svg" Style="float:right;width:42px;margin-Top:6px">

Gall I18N.SITE, generadur safle statig aml-iaith, gyfieithu Markdown yn awtomatig i [fwy na chant o ieithoedd gwahanol](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n.lang.webp" alt="" />

Efallai y bydd rhai pobl am ofyn, nawr bod gan borwyr swyddogaethau cyfieithu adeiledig, a yw'n ddiangen rhyngwladoli'r wefan?

Rwyf am ddweud mai **dim ond trwy ryngwladoli&#39;r wefan gyfan y gallwn gefnogi chwilio testun llawn amlieithog ar y safle ac optimeiddio peiriannau chwilio** .

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
