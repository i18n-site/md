<h1 style="justify-content:space-between">3Ti.Site · Lowooza Tewali Nsalo<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, generator y’omukutu ogutakyukakyuka ogw’ennimi nnyingi, esobola okuvvuunula Markdown mu [nnimi ez’enjawulo ezisukka mu kikumi mu ngeri ey’otoma](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Abantu abamu bayinza okwagala okwebuuza, kati nga browsers zirina emirimu gy’okuvvuunula egyazimbibwamu, tekyetaagisa kufuula mukutu guno ogw’ensi yonna?

Njagala okugamba nti **nga tufuula omukutu gwonna ogw’ensi yonna gwokka gwe tusobola okuwagira okunoonya ebiwandiiko ebijjuvu mu mukutu mu nnimi nnyingi n’okulongoosa enkola y’okunoonya** .

## Olunyiriri

"Baibuli·Olubereberye".:

> Ab’edda tebaawulamu nnimi. Baazimba eminaala egyatuuka mu bbanga okutuuka ku mulyango gwa Katonda okutumbula ekitiibwa ky’olulyo lw’omuntu.
>
> Katonda yagamba nti abantu kika kyabwe, nga balina obuwangwa n’ekika kye kimu. Okuzimba omunaala kibeera kya kusooka. Kati osobola okutuukiriza kyonna ky’oyagala, era tojja kuba na kintu kyonna ky’otya.
>
> Awo Katonda n’ajja n’asaasaanya abantu mu bifo ebitali bimu, nga tebasobola kutegeeragana.
>
> Okuva olwo, abantu baalwanagana okuwuliziganya, enkaayana ne zijja nga tezikoma, era ensi teyaddamu kulaba munaala gwatuuka mu bbanga.

Ekitabo kya ssaayansi &quot;Three-Body&quot; (enjatula y'Oluchina: `3Ti` ) kifuula embuga y'abagwira ewuliziganya okuyita mu mayengo ga masanyalaze, etaliiko biziyiza lulimi, era ekulaakulana mu tekinologiya.

Nsuubira nti nga tuyambibwako ekintu kino, abantu b’ensi bajja kuba ng’abantu ab’emibiri esatu, empuliziganya tegenda kuziyizibwa lulimi, era abantu bonna bajja kuddamu okwegatta.

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
