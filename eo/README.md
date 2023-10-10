<h1 style="justify-content:space-between">3Ti.Retejo · Pensu Neniujn Limojn<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, plurlingva senmova reteja generatoro, povas aŭtomate traduki Markdown en [pli ol cent malsamajn lingvojn](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Iuj homoj eble volas demandi, nun kiam retumiloj havas enkonstruitajn tradukajn funkciojn, ĉu estas nenecese internaciigi la retejon?

Mi volas diri, ke **nur internaciigante la tutan retejon ni povas subteni plurlingvan enretejan plentekstan serĉon kaj serĉilon-optimumigo** .

## Sekvenco

"Biblio · Genezo":

> La antikvuloj ne distingis inter lingvoj. Ili naskiĝis kun fiero kaj volis konstrui altan turon kun la supro atinganta al la ĉielo.
> <blockquote><p>Al Dio malplaĉis la aroganteco de la homo, do li disĵetis ĉiujn vivantajn estaĵojn en diversaj lokoj, ne povante interkompreniĝi.</p></blockquote>
> <blockquote><p>Ekde tiam, al homoj estis malfacile komuniki, disputoj daŭris, kaj ne ekzistas Babeloturo en la mondo.</p></blockquote>

La sciencfikcia romano &quot;Tri-korpoj&quot; (ĉine elparolo: `3Ti` ) fikciigas fremdan civilizon kiu komunikas per elektromagnetaj ondoj, havas neniujn lingvajn barojn, kaj estas teknologie prospera.

Mi esperas, ke helpe de ĉi tiu ilo, la homoj de la tero estos kiel trikorpaj homoj, komunikado ne estos limigita de lingvo, kaj la tuta homaro denove kuniĝos.

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
