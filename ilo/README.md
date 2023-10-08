# I18N.SITE · Dagiti Dokumento Nga Awan Ti Beddeng<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, ti static site generator a mangsuporta iti automatiko a panagipatarus iti [133 a nadumaduma a pagsasao](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

![](https://i-01.eu.org/2023/09/O0Tee_m.webp)

Mabalin a kayat ti dadduma a tattao ti agsaludsod, ita ta addaan dagiti browser kadagiti naibangon a panagandar ti panagipatarus, saan kadi a kasapulan nga internasionalisaren ti website?

Kayatko nga ibaga a **babaen laeng ti pananginternasional iti intero a site a suportarantayo ti multi-lingual in-site full-text search ken search engine optimization** .

## Tutorial

## Panangidatag Ti Function

### Idulin Ti Pormat Ti Markdown

### Baliwan Ti Panagpatarus

Kalpasan ti panangbalbaliw ti patarus, kasapulam nga ipatarayen manen `./i18n.sh` tapno mapabaro ti cache.

### Dagiti Nota Ti Panagpatarus

Dagiti komento ti panagipatarus ket kasapulan a mangipakita ti pagsasao kalpasan ti \```, a kas ti ` ```rust` .

Iti agdama ket mangsuporta ti panagipatarus ti komento para iti rust, c, cpp, java, js, kape, python, ken bash.

Urnosen [ti tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) tapno mainayon ti suporta ti panagipatarus para kadagiti komento kadagiti ad-adu a pagsasao.

### Ikonfigura Ti Proxy

Ti panangisaad kadagiti sumaganad a variable ti aglawlaw ket mangipalubos kadagiti panagayab ti Google Translate API a lumasat iti proxy.

```bash
export https_proxy=http://127.0.0.1:7890


```

### Ti Panag-Embed Ti Variable

```
test: 测试变量<br 0>嵌入
```

### Empty Ti Cache

```bash
rm -rf .i18n/.cache


```
