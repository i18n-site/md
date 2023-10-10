<h1 style="justify-content:space-between">3Ti.Retejo · Pensu Neniujn Limojn<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, plurlingva senmova reteja generatoro, povas aŭtomate traduki Markdown en [pli ol cent malsamajn lingvojn](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Iuj homoj eble volas demandi, nun kiam retumiloj havas enkonstruitajn tradukajn funkciojn, ĉu estas nenecese internaciigi la retejon?

Mi volas diri, ke **nur internaciigante la tutan retejon ni povas subteni plurlingvan enretejan plentekstan serĉon kaj serĉilon-optimumigo** .

## Sekvenco

Biblio · Genezo :

> En antikvaj tempoj, kiam lingvoj estis unu, la homaro konstruis turon atingantan al la ĉielo, portalo al la domajno de Dio, proklamante la potencon de la homaro.
>
> Dio deklaris, "Homoj kuniĝas kiel unu tribo, kun komuna lango, kaj ĉi tiu turo estas nur prologo. Nun ili atingas sian deziron, kaj neniu respekto restos."
>
> Tiel, Dio malsupreniris, disĵetante homojn al malsamaj anguloj, uzi malsamajn lingvojn.
>
> De tiam la homa komunikado fariĝis malfacila, disputoj senfinaj, kaj ne plu ekzistis turo kiu tuŝis la ĉielon.

La sciencfikcia romano &quot;Tri-korpoj&quot; (ĉine elparolo: `3Ti` ) fikciigas fremdan civilizon kiu komunikas per elektromagnetaj ondoj, havas neniujn lingvajn barojn, kaj estas teknologie prospera.

Mi esperas krei ilon, kiu ebligos al la homoj de la tero esti kiel trikorpaj homoj, komuniki sen esti ligita per lingvo, kaj unuigi denove la tutan homaron.

## Lernilo

## Funkcia Enkonduko

### Konservu Markdown Formato

### Modifi Tradukado

Post modifi la tradukon, vi devas reruli `./i18n.sh` por ĝisdatigi la kaŝmemoron.

### Tradukaj Notoj

Tradukaj komentoj devas indiki la lingvon post \```, kiel ` ```rust` .

Nuntempe subtenas komenttradukon por rusto, c, cpp, java, js, kafo, python kaj bash.

Redaktu [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) por aldoni traduksubtenon por komentoj en pli da lingvoj.

### Agordi Prokurilon

Agordo de la sekvaj mediaj variabloj permesas al Google Translate API-vokoj trairi la prokurilon.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variebla Enkonstruado

```
test: 测试变量<br 0>嵌入
```

### Malplenigi La Kaŝmemoron

```bash
rm -rf .i18n/.cache
```
