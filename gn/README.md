<h1 style="justify-content:space-between">3Ti.Site · Ñapensa Frontera’ỹre<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, peteĩ generador sitio estático, ikatu ombohasa ijeheguiete Markdown [hetave cien ñe’ẽ iñambuévape](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Oĩ tapicha ikatu oporandúva, ko’áĝa umi navegador oguerekóma función de traducción incorporada, natekotevẽipa oñeinternacionalisa pe página web?

Aipota **ha’e pe internacionalización rupive añoite pe sitio tuichakue ikatuha ñaipytyvõ heta ñe’ẽme pe sitio-pe jeheka jeheka pukukue ha motor de búsqueda optimización** .

## Moñepyrũmby

Biblia · Génesis :

> Ymave, ñe’ẽnguéra peteĩnte jave, yvypóra omopu’ã peteĩ tórre oĝuahẽva yvága peve, peteĩ portal Ñandejára dominio-pe, omoherakuãvo yvypóra pu’aka.
>
> Ñandejára odeclara: "Kuimba'ekuéra oñembojoaju peteĩ tribu ramo, peteĩ lengua compartida reheve, ha ko torre ha'e peteĩ prólogo añónte. Ko'ágã ohupyty hikuái hembipota, ha ndaiporimo'ãvéima kyhyje".
>
> Péicha, Tupã oguejy, omosarambívo tapichakuérape diferente esquina-pe, oiporu diferente idioma.
>
> Upe guive ijetuʼu yvypóra oñekomunika hag̃ua, opa umi ñorairõ ha ndaiporivéima peteĩ tórre opokóva yvágare.

Pe novela ciencia ficción &quot;Mbohapy Cuerpo&quot; (pronunciación chino: `3Ti` ) oficciona peteĩ civilización extraterrestre oñemongeta va'ekue onda electromagnética rupive, ndorekóiva barrera idioma rehegua, ha tecnológicamente oñakãrapu'ã.

Aha’arõ amoheñói peteĩ tembiporu ikatútava yvy ape ári tavayguakuéra ha’e haĝua tapicha mbohapy hete reheguaicha, oñemongeta ojejokua’ỹre ñe’ẽme ha ombojoaju jey mayma yvypórape.

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
