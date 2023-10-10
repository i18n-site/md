<h1 style="justify-content:space-between">3Ti.Site · Panunotem nga Awan ti Beddeng<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, maysa a multi-language static site generator, ket automatiko nga ipatarusna ti Markdown iti [nasurok a sangagasut a nadumaduma a pagsasao](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Mabalin a kayat ti dadduma a tattao ti agsaludsod, ita ta addaan dagiti browser kadagiti naibangon a panagandar ti panagipatarus, saan kadi a kasapulan nga internasionalisaren ti website?

Kayatko nga ibaga a **babaen laeng ti pananginternasional iti intero a site a suportarantayo ti multi-lingual in-site full-text search ken search engine optimization** .

## Panagsasaruno

"Biblia·Genesis":

> Idi un-unana a panawen, idi maymaysa ti pagsasao, naipasngay ti sangatauan a natangsit. Inkagumaanda ti mangbangon iti nakangatngato a pasdek, maysa a torre a mangsagid iti langit.
>
> Nupay kasta, ti Nadiosan, a saan a naragsakan iti kinatangsitda, pinagbalinna dagiti tattao a nagwaras iti intero a daga, a namagbalin kadagiti dilada a di maawatan iti maysa ken maysa.
>
> Manipud idin, inkarigatan ti sangatauan ti makikomunikar, timmaud nga awan patinggana dagiti rinnupiat, ket awanen ti nakita ti lubong a torre a dumanon iti tangatang.

Ti nobela ti siensia a piksion a &quot;Tallo-a-Bagi&quot; (Insik a panagibalikas: `3Ti` ) ket piksionario ti maysa a ganggannaet a sibilisasion a makikomunikar babaen dagiti elektromagnetiko nga allon, awan dagiti lapped ti pagsasao, ken narang-ay iti teknolohia.

Sapay koma ta babaen ti tulong daytoy nga alikamen, dagiti tattao ditoy daga ket kasla tallo ti bagina a tattao, saanton a lapdan ti komunikasion babaen ti pagsasao, ken agkaykaysa manen ti amin a sangatauan.

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
