<h1 style="justify-content:space-between">I18N.SITE · Olulimi olutaliiko nsalo<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

I18N.SITE, generator y’omukutu ogutakyukakyuka ogw’ennimi nnyingi, esobola okuvvuunula Markdown mu [nnimi ez’enjawulo ezisukka mu kikumi mu ngeri ey’otoma](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Abantu abamu bayinza okwagala okwebuuza, kati nga browsers zirina emirimu gy’okuvvuunula egyazimbibwamu, tekyetaagisa kufuula mukutu guno ogw’ensi yonna?

Njagala okugamba nti **nga tufuula omukutu gwonna ogw’ensi yonna gwokka gwe tusobola okuwagira okunoonya ebiwandiiko ebijjuvu mu mukutu mu nnimi nnyingi n’okulongoosa enkola y’okunoonya** .

## Okuyigiriza

## Enkola Enyanjula

### Kuuma Enkola Ya Markdown

### Kyuusa Enkyusa

Oluvannyuma lw&#39;okukyusa enkyusa, olina okuddamu okuddukanya `./i18n.sh` okulongoosa cache.

### Ebiwandiiko By’Okuvvuunula

Ebigambo by&#39;okuvvuunula byetaaga okulaga olulimi oluvannyuma lwa \```, nga ` ```rust` .

Mu kiseera kino ewagira okuvvuunula endowooza ku rust, c, cpp, java, js, kaawa, python, ne bash.

Edit [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) okwongera obuwagizi bw&#39;okuvvuunula ku comments mu nnimi endala.

### Tegeka Proxy

Okuteekawo enkyukakyuka z'embeera zino wammanga kisobozesa okuyita kwa Google Translate API okuyita mu proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Enkyukakyuka Mu Embedding

```
test: 测试变量<br 0>嵌入
```

### Empty Ekifo Ekitereka

```bash
rm -rf .i18n/.cache
```
