<h1 style="justify-content:space-between">3Ti.Site · Lowooza Tewali Nsalo<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, generator y’omukutu ogutakyukakyuka ogw’ennimi nnyingi, esobola okuvvuunula Markdown mu [nnimi ez’enjawulo ezisukka mu kikumi mu ngeri ey’otoma](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Abantu abamu bayinza okwagala okwebuuza, kati nga browsers zirina emirimu gy’okuvvuunula egyazimbibwamu, tekyetaagisa kufuula mukutu guno ogw’ensi yonna?

Njagala okugamba nti **nga tufuula omukutu gwonna ogw’ensi yonna gwokka gwe tusobola okuwagira okunoonya ebiwandiiko ebijjuvu mu mukutu mu nnimi nnyingi n’okulongoosa enkola y’okunoonya** .

## Okwanjula

Baibuli · Olubereberye :

> Mu biseera eby’edda, ennimi bwe zaali zimu, abantu baazimba omunaala ogwatuuka mu ggulu, omulyango oguyingira mu bufuzi bwa Katonda, nga balangirira amaanyi g’omuntu.
>
> Katonda yalangirira nti, "Abasajja beegatta ng'ekika kimu, n'olulimi olugabana, era omunaala guno gwa nnyanjula yokka. Kati batuuka ku kwegomba kwabwe, era tewali kitiibwa kyonna kijja kusigalawo."
>
> Bwe kityo, Katonda yakka, n’asaasaanya abantu mu nsonda ez’enjawulo, nga bakozesa ennimi ez’enjawulo.
>
> Okuva olwo, empuliziganya y’abantu yafuuka ya kusoomoozebwa, enkaayana tezikoma, era tewakyaliwo munaala ogwakwata ku bbanga.

Ekitabo kya ssaayansi &quot;Three-Body&quot; (enjatula y'Oluchina: `3Ti` ) kifuula embuga y'abagwira ewuliziganya okuyita mu mayengo ga masanyalaze, etaliiko biziyiza lulimi, era ekulaakulana mu tekinologiya.

Nsuubira okutondawo ekintu ekinasobozesa abantu b’ensi okubeera ng’abantu ab’emibiri esatu, okuwuliziganya nga tebasibiddwa lulimi, n’okuddamu okugatta abantu bonna.

## Okuyigiriza

## Enkola Enyanjula

### Kuuma Enkola Ya Markdown

### Kyuusa Enkyusa

Oluvannyuma lw'okukyusa enkyusa, olina okuddamu okuddukanya `./i18n.sh` okulongoosa cache.

### Ebiwandiiko By’Okuvvuunula

Ebigambo by'okuvvuunula byetaaga okulaga olulimi oluvannyuma lwa \```, nga ` ```rust` .

Mu kiseera kino ewagira okuvvuunula endowooza ku rust, c, cpp, java, js, kaawa, python, ne bash.

Edit [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) okwongera obuwagizi bw'okuvvuunula ku comments mu nnimi endala.

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
