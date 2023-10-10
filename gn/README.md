<h1 style="justify-content:space-between">3Ti.Site · Ñaimo&#39;ã Ndaipóri Frontera<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, peteĩ generador sitio estático heta ñe’ẽ rehegua, ikatu ombohasa ijeheguiete Markdown [hetave cien ñe’ẽ iñambuévape](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Oĩ tapicha ikatu oporandúva, ko’áĝa umi navegador oguerekóma función de traducción incorporada, natekotevẽipa oñeinternacionalisa pe página web?

Aipota **ha’e pe internacionalización rupive añoite pe sitio tuichakue ikatuha ñaipytyvõ heta ñe’ẽme pe sitio-pe jeheka jeheka pukukue ha motor de búsqueda optimización** .

## Takykuerigua

"Biblia·Génesis".:

> Ymaguare ndombojoavyiva’ekue umi ñe’ẽ. Heñói hikuái orgullo reheve ha omopu’ãse peteĩ tórre yvate ha ijyvate ohupyty yvága peve.
> <blockquote><p>Ñandejára ndoguerohorýi yvypóra ñemomba’eguasu, upévare omosarambi opa tekove oikovéva opaichagua hendápe, ndaikatúiva oñontende.</p></blockquote>
> <blockquote><p>Upe guive ijetuʼu yvyporakuérape oñemongeta hag̃ua, osegi ojodiskuti ha ko múndope ndaipóri Torre de Babel.</p></blockquote>

Pe novela ciencia ficción &quot;Mbohapy Cuerpo&quot; (pronunciación chino: `3Ti` ) oficciona peteĩ civilización extraterrestre oñemongeta va&#39;ekue onda electromagnética rupive, ndorekóiva barrera idioma rehegua, ha tecnológicamente oñakãrapu&#39;ã.

Aha’arõ ko tembiporu pytyvõ rupive, yvy ape ári tavayguakuéra ha’e peteĩ tapicha mbohapy hete reheguaicha, ñe’ẽmondo ndojejokói ñe’ẽ rupive, ha opavave yvypóra peteĩcha jey.

## Mbo’epy Rehegua

## Función Ñepyrũrã

### Eñongatu Formato De Markdown Rehegua

### Omoambue Ñe’ẽasa

Oñemoambue rire ñembohasa, tekotevẽ emongu’e jey `./i18n.sh` embopyahu hag̃ua caché.

### Ñe’ẽasa Rehegua Notas

Umi ñe’ẽñemi ñe’ẽñemi tekotevẽ ohechauka ñe’ẽ \``` rire, ha’eháicha ` ```rust` .

Ko’áĝa oipytyvõ ñe’ẽñemi ñembohasa rust, c, cpp, java, js, café, python ha bash-pe g̃uarã.

Emohenda [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) emoĩ hag̃ua ñembohasa pytyvõ ñe’ẽñemi hetave ñe’ẽme.

### Emohenda Proxy Rehegua

Oñemohenda ko’ã variable tekoha rehegua oheja Google Translate API ñehenói ohasa proxy rupive.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Incrustación Variable Rehegua

```
test: 测试变量<br 0>嵌入
```

### Vacío Pe Caché

```bash
rm -rf .i18n/.cache
```
