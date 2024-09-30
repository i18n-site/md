# Pure front-end omgekeerde volledige tekstzoekopdracht

## Sequentie

Na weken van ontwikkeling ondersteunt [i18n.site](//i18n.site) (een puur statische meertalige Markdown-vertaal- en websitebouwtool) nu pure front-end volledige tekstzoekopdrachten.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Dit artikel zal de technische realisatie van de pure front-end full-text zoekfunctie van `i18n.site` delen. Bezoek [i18n.site](//i18n.site) om de zoekfunctie te ervaren.

De code is open source: [Zoekkernel](//github.com/i18n-site/ie/tree/main/qy) / [Interactieve interface](//github.com/i18n-site/plugin/tree/main/qy)

## Overzicht van serverloze volledige tekstzoekoplossingen

Voor kleine en middelgrote puur statische websites zoals documenten/persoonlijke blogs is het bouwen van een zelfgebouwde backend voor zoeken in volledige tekst te zwaar, en is servicevrij zoeken in volledige tekst de meest voorkomende keuze.

Servicevrije full-text zoekoplossingen zijn onder te verdelen in twee grote categorieën:

Ten eerste, diensten zoals [algolia.com](//algolia.com), die externe zoekserviceproviders zijn die front-endcomponenten voor full-text zoekfuncties aanbieden.

Voor deze diensten moet men betalen op basis van het zoekvolume en ze zijn vaak niet beschikbaar voor gebruikers in China vanwege complianceproblemen met de website.

Ze kunnen niet offline of op een intranet worden gebruikt, wat beperkingen met zich meebrengt. Dit artikel zal hier niet verder op ingaan.

Ten tweede, is er de pure front-end full-text zoekoplossing.

Op dit moment zijn er veelvoorkomende pure front-end full-text search-oplossingen zoals [lunrjs](//lunrjs.com) en [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (gebaseerd op `lunrjs` voor verdere ontwikkeling).

`lunrjs` heeft twee methoden voor het bouwen van indexen, en beide hebben hun eigen problemen.

1. Vooraf gebouwde indexbestanden

   Omdat indexen alle woorden uit alle documenten bevatten, zijn ze groot in omvang.
   Telkens wanneer een document wordt toegevoegd of gewijzigd, moet een nieuwe index worden geladen.
   Dit verhoogt de wachttijd van de gebruiker en verbruikt veel bandbreedte.

2. Documenten laden en indexen in real-time bouwen

   Het bouwen van een index is een rekenintensieve taak, en het opnieuw bouwen van de index bij elke toegang veroorzaakt vertragingen en een slechte gebruikerservaring.

---

Naast `lunrjs` zijn er andere volledige tekstzoekoplossingen, zoals:

[fusejs](//www.fusejs.io) berekent de string-overeenkomst om te zoeken.

Deze oplossing heeft zeer slechte prestaties en is niet geschikt voor full-text search (zie [Fuse.js lange zoekopdracht duurt langer dan 10 seconden, hoe te optimaliseren?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch) maakt gebruik van een Bloom-filter om te zoeken, maar kan geen prefix-zoekopdrachten uitvoeren (bijvoorbeeld het invoeren van `goo` om `good` of `google` te zoeken) en biedt geen automatische aanvulfunctionaliteit.

Vanwege de nadelen van de huidige oplossingen heeft `i18n.site` een nieuwe pure front-end full-text zoekoplossing ontwikkeld, met de volgende kenmerken:

1. Ondersteunt zoeken in meerdere talen en is klein van formaat. De grootte van de zoekkernel na verpakking `gzip` is `6.9KB` (ter vergelijking: de grootte van `lunrjs` is `25KB` )
1. Gebaseerd op `IndexedDB` om een omgekeerde index te bouwen, weinig geheugengebruik, snelle prestaties
1. Wanneer documenten worden toegevoegd/gewijzigd, worden alleen de toegevoegde of gewijzigde documenten opnieuw geïndexeerd, waardoor het aantal berekeningen wordt verminderd
1. Ondersteuning voor voorvoegselzoekopdrachten, zoekresultaten in real-time weergeven terwijl de gebruiker typt
1. Offline beschikbaar

Hieronder worden de technische implementatiedetails van `i18n.site` uitgebreid besproken.

## Meertalige woordsegmentatie

Woordsegmentatie maakt gebruik van de oorspronkelijke woordsegmentatie van de browser `Intl.Segmenter`, die door de meeste browsers wordt ondersteund.

![](//p.3ti.site/1727667759.avif)

De `coffeescript` code voor woordsegmentatie is als volgt:

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'|`'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

Waarvan:

* `/\p{P}/` is `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { expressie die overeenkomt met leestekens | } ~. `.</p><ul><li> `split('.')` is omdat `Firefox` browserwoordsegmentatie `.` niet segmenteert.</li>


## Indexopbouw

Er zijn vijf objectopslagtabellen gemaakt in `IndexedDB`:

* `word`: id - woord
* `doc`: id - documenturl - documentversienummer
* `docWord`: documentid - array van woordid's
* `prefix`: voorvoegsel - array van woordid's
* `rindex`: woordid - array van documentid's: regelnummers

Geef de array van document `url` en versienummer `ver` door, zoek in de `doc` tabel of het document bestaat, als het niet bestaat, maak dan een omgekeerde index. Verwijder tegelijkertijd de omgekeerde index van de niet-doorgegeven documenten.

Op deze manier kan incrementele indexering worden bereikt, wat de hoeveelheid berekeningen vermindert.

Bij front-end-interactie kan een voortgangsbalk worden weergegeven voor het laden van de index, om de trage laadtijd bij het eerste laden te verminderen. Zie ook: 'Animatiebegeleide voortgangsbalk, gebaseerd op progress + puur CSS' [Engels](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinees](//juejin.cn/post/7413586285954154522).

### GeïndexeerdDB hoog gelijktijdig schrijven

Het project is ontwikkeld op basis van de asynchrone encapsulatie van IndexedDB, [idb](//www.npmjs.com/package/idb).

Lezen en schrijven met IndexedDB zijn asynchroon. Bij het maken van een index worden documenten tegelijkertijd geladen om de index te creëren.

Om gedeeltelijk gegevensverlies veroorzaakt door concurrerend schrijven te voorkomen, kan de onderstaande `coffeescript` code worden geraadpleegd om een `ing` cache toe te voegen tussen lezen en schrijven om concurrerende schrijfbewerkingen te onderscheppen.

```coffee
pusher = =>
  ing = new Map()
  (table, id, val)=>
    id_set = ing.get(id)
    if id_set
      id_set.add val
      return

    id_set = new Set([val])
    ing.set id, id_set
    pre = await table.get(id)
    li = pre?.li or []

    loop
      to_add = [...id_set]
      li.push(...to_add)
      await table.put({id,li})
      for i from to_add
        id_set.delete i
      if not id_set.size
        ing.delete id
        break
    return

rindexPush = pusher()
prefixPush = pusher()
```

## Voorvoegsel real-time zoekopdracht

Om zoekresultaten weer te geven terwijl de gebruiker typt, bijvoorbeeld `wor` invoeren en woorden weergeven die beginnen met `wor` zoals `words` en `work`.

![](//p.3ti.site/1727684944.avif)

De zoekkernel gebruikt de `prefix` tabel om het laatste woord na woordsegmentatie te vinden en zoekt alle woorden die daarmee beginnen.

De anti-shake-functie `debounce` wordt ook gebruikt bij front-end-interactie (zoals hieronder geïmplementeerd) om de frequentie van gebruikersinvoer die zoekopdrachten activeert te verminderen en de hoeveelheid berekeningen te verminderen.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Nauwkeurigheid en volledigheid

De zoekopdracht segmenteert eerst de door de gebruiker ingevoerde trefwoorden.

Stel dat er `N` woorden zijn na segmentatie. Bij het retourneren van resultaten worden eerst resultaten geretourneerd die alle trefwoorden bevatten, en daarna resultaten met `N-1`, `N-2`, ..., `1` trefwoorden.

De eerst weergegeven zoekresultaten waarborgen de nauwkeurigheid van de zoekopdracht, en de later geladen resultaten (klik op de knop 'Meer laden') waarborgen de volledigheid.

![](//p.3ti.site/1727684564.avif)

## Op aanvraag laden

Om de responsiviteit te verbeteren, implementeert de zoekopdracht laden op aanvraag met behulp van de `yield` generator, waarbij elke keer dat `limit` resultaten worden gevonden, deze worden geretourneerd.

Let op dat elke keer dat u na `yield` opnieuw zoekt, u een nieuwe zoektransactie van `IndexedDB` moet openen.

## Voorvoegsel real-time zoekopdracht

Om zoekresultaten weer te geven terwijl de gebruiker typt, bijvoorbeeld `wor` invoeren en woorden weergeven die beginnen met `wor` zoals `words` en `work`.

![](//p.3ti.site/1727684944.avif)

De zoekkernel gebruikt de `prefix` tabel om het laatste woord na woordsegmentatie te vinden en zoekt alle woorden die daarmee beginnen.

De anti-shake-functie `debounce` wordt ook gebruikt bij front-end-interactie (zoals hieronder geïmplementeerd) om de frequentie van gebruikersinvoer die zoekopdrachten activeert te verminderen en de hoeveelheid berekeningen te verminderen.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Offline beschikbaar

De indextabel slaat geen originele tekst op, alleen woorden, wat de opslagruimte vermindert.

Voor het markeren van zoekresultaten moet de originele tekst opnieuw worden geladen, en het gebruik van `service worker` kan herhaalde netwerkverzoeken voorkomen.

Omdat `service worker` alle artikelen in het cachegeheugen opslaat, is de hele website, inclusief de zoekopdracht, offline beschikbaar zodra de gebruiker een zoekopdracht uitvoert.

## Optimalisatie van de weergave van Markdown-documenten

De pure front-end zoekoplossing van `i18n.site` is geoptimaliseerd voor `Markdown`-documenten.

Wanneer zoekresultaten worden weergegeven, wordt de hoofdstuknaam weergegeven en wordt er door het hoofdstuk genavigeerd wanneer erop wordt geklikt.

![](//p.3ti.site/1727686552.avif)

## Samenvatting

Een pure front-end omgekeerde full-text zoekfunctie, die geen server vereist. Dit is zeer geschikt voor documenten en persoonlijke blogs als middelgrote en kleine websites.

`i18n.site` biedt een zelf ontwikkeld, open source pure front-end zoekfunctie, compact van formaat en snel in respons, die de problemen van de huidige pure front-end full-text zoekoplossingen oplost en een betere gebruikerservaring biedt.