# I18N.SITE · Lingvo Sen Limoj<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, plurlingva senmova reteja generatoro, povas aŭtomate traduki Markdown en [pli ol cent malsamajn lingvojn](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Iuj homoj eble volas demandi, nun kiam retumiloj havas enkonstruitajn tradukajn funkciojn, ĉu estas nenecese internaciigi la retejon?

Mi volas diri, ke **nur internaciigante la tutan retejon ni povas subteni plurlingvan enretejan plentekstan serĉon kaj serĉilon-optimumigo** .

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
