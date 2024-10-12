---

brief: |
  i18n.site ondersteunt nu full-text zoekfunctie zonder server.

  Dit artikel beschrijft de implementatie van full-text zoektechnologie op puur front-end, inclusief de inversie-index opgebouwd met IndexedDB, voorvoegselzoeken, woordsegmentatieoptimalisatie en ondersteuning voor meerdere talen.

  In vergelijking met bestaande oplossingen is de pure front-end full-text zoekfunctie van i18n.site compact en snel, geschikt voor kleine en middelgrote websites zoals documenten en blogs, en kan deze offline worden gebruikt.

---

# Pura front-end omgekeerde volledige tekstzoekopdracht

## Inleiding

Na weken van ontwikkeling ondersteunt [i18n.site](//i18n.site) (een puur statische markdown meertalige vertaling & website bouwtool) nu pure front-end volledige tekstzoekopdracht.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Dit artikel deelt de technische implementatie van `i18n.site` pure front-end volledige tekstzoekopdracht, bezoek [i18n.site](//i18n.site) om de zoekresultaten te ervaren.

Open source code: [zoekkernel](//github.com/i18n-site/ie/tree/main/qy) / [interactieve interface](//github.com/i18n-site/plugin/tree/main/qy)

## Overzicht van serverloze volledige tekstzoekoplossingen

Voor kleine en middelgrote puur statische websites zoals documenten/persoonlijke blogs is het bouwen van een zelfgebouwde backend voor volledige tekstzoekfunctionaliteit te zwaar. Een servicevrije volledige tekstzoekoplossing is in de meeste gevallen de betere keuze.

Serverloze volledige tekstzoekoplossingen zijn onder te verdelen in twee grote categorieën:

Ten eerste, zoals [algolia.com](//algolia.com) derde partij zoekserviceproviders, die front-end componenten voor volledige tekstzoekopdrachten bieden.

Dergelijke diensten vereisen betaling op basis van zoekvolume en zijn vaak niet beschikbaar voor gebruikers in China vanwege compliantieproblemen.

Offline gebruik en gebruik binnen een intranet zijn niet mogelijk, de beperkingen zijn groot. Dit artikel zal hier niet verder op ingaan.

Ten tweede, pure front-end volledige tekstzoekoplossingen.

Van de meest voorkomende pure front-end volledige tekstzoekoplossingen zijn [lunrjs](//lunrjs.com) en [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (gebaseerd op `lunrjs`).

`lunrjs` heeft twee manieren om indexen te bouwen, en beide hebben hun eigen problemen.

1. Indexbestanden vooraf bouwen

   Omdat de index alle woorden uit alle documenten bevat, is het bestand groot.
   Elke keer dat een document wordt toegevoegd of gewijzigd, moet een nieuwe index worden geladen.
   Dit verhoogt de wachttijd van de gebruiker en verbruikt veel bandbreedte.

2. Documenten laden en indexen in real-time bouwen

   Het bouwen van een index is een rekenintensieve taak, elke keer opnieuw bouwen tijdens een bezoek veroorzaakt vertragingen en een slechte gebruikerservaring.

---

Naast `lunrjs` zijn er nog andere volledige tekstzoekoplossingen, zoals:

[fusejs](//www.fusejs.io), die de gelijkenis tussen te zoeken strings berekent.

Deze oplossing heeft een slechte prestatie en kan niet worden gebruikt voor volledige tekstzoekopdrachten (zie [Fuse.js Lange zoekopdracht duurt meer dan 10 seconden, hoe optimaliseer je deze?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch), die gebruik maakt van een Bloom-filter voor zoekopdrachten, kan niet worden gebruikt voor voorvoegselzoekopdrachten (bijvoorbeeld het invoeren van `goo` om `good` en `google` te zoeken), en kan geen automatisch aanvulfunctionaliteit bieden.

Omdat de bestaande oplossingen hun eigen tekortkomingen hebben, heeft `i18n.site` een nieuwe pure front-end volledige tekstzoekoplossing ontwikkeld met de volgende kenmerken:

1. Ondersteuning van meertalige zoekopdrachten, kleine omvang, zoekkernel verpakking `gzip` is `6.9KB` (in vergelijking met `lunrjs` die `25KB` is)
1. Bouw een omgekeerde index op basis van `indexedb`, minder geheugenverbruik, snelle snelheid
1. Wanneer documenten worden toegevoegd/gewijzigd, worden alleen de toegevoegde of gewijzigde documenten opnieuw geïndexeerd, waardoor het aantal berekeningen wordt verminderd
1. Ondersteuning van voorvoegselzoekopdrachten, zoekresultaten in real-time weergeven terwijl de gebruiker typt
1. Offline beschikbaar

Hieronder worden de technische implementatiedetails van `i18n.site` gedetailleerd beschreven.

## Meertalige woordsegmentatie

Woordsegmentatie maakt gebruik van de oorspronkelijke woordsegmentatie van de browser `Intl.Segmenter`, die wordt ondersteund door alle mainstream browsers.

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

In `IndexedDB` zijn er 5 objectopslagtabellen gemaakt:

* `word`: id - woord
* `doc`: id - document url - documentversienummer
* `docWord`: document id - array van woord id's
* `prefix`: voorvoegsel - array van woord id's
* `rindex`: woord id - array van document id's: regelnummers

Geef de array van document `url` en versienummer `ver` door, zoek in de `doc` tabel of het document bestaat, als het niet bestaat, maak dan een omgekeerde index. Verwijder tegelijkertijd de omgekeerde index voor de documenten die niet zijn doorgegeven.

Op deze manier kan incrementele indexering worden bereikt, wat de hoeveelheid berekeningen vermindert.

Bij front-end interactie kan een voortgangsbalk voor het laden van de index worden weergegeven om vertraging bij het eerste laden te voorkomen, zie "Voortgangsbalk met animatie, gebaseerd op een enkele progress + Pure css Implementatie" [Engels](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinees](//juejin.cn/post/7413586285954154522).

### GeïndexeerdDB hoog gelijktijdig schrijven

Dit project is ontwikkeld op basis van de asynchrone wrapper voor IndexedDB, [idb](//www.npmjs.com/package/idb).

Lezen en schrijven met IndexedDB zijn asynchroon. Bij het maken van een index worden documenten gelijktijdig geladen om de index te maken.

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

Om zoekresultaten weer te geven terwijl de gebruiker typt, bijvoorbeeld `wor` invoeren, worden woorden weergegeven die met `wor` beginnen zoals `words` en `work`.

![](//p.3ti.site/1727684944.avif)

De zoekkernel gebruikt de `prefix` tabel om het laatste woord na woordsegmentatie te vinden en zoekt alle woorden die daarmee beginnen.

Bij front-end-interactie wordt ook de anti-shake-functie `debounce` gebruikt (zoals hieronder geïmplementeerd), om de frequentie van gebruikersinvoer die zoekopdrachten activeert te verminderen en de hoeveelheid berekeningen te minimaliseren.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Nauwkeurigheid en herinnering

De zoekopdracht segmenteert eerst de door de gebruiker ingevoerde trefwoorden.

Stel dat er `N` woorden zijn na segmentatie, bij het retourneren van resultaten worden eerst resultaten geretourneerd die alle trefwoorden bevatten, en daarna resultaten met `N-1`, `N-2`, ..., `1` trefwoorden.

De zoekresultaten die eerst worden weergegeven, waarborgen de nauwkeurigheid van de zoekopdracht, en de resultaten die later worden geladen (klik op de knop 'Meer laden') waarborgen het terugroeppercentage.

![](//p.3ti.site/1727684564.avif)

## Op aanvraag laden

Om de reactiesnelheid te verbeteren, maakt de zoekopdracht gebruik van de `yield` generator om op aanvraag te laden, en wordt `limit` keer geretourneerd wanneer een resultaat wordt opgevraagd.

Houd er rekening mee dat elke keer dat u na `yield` opnieuw zoekt, u een zoektransactie van `IndexedDB` opnieuw moet openen.

## Voorvoegsel real-time zoekopdracht

Om zoekresultaten weer te geven terwijl de gebruiker typt, bijvoorbeeld `wor` invoeren, worden woorden weergegeven die met `wor` beginnen zoals `words` en `work`.

![](//p.3ti.site/1727684944.avif)

De zoekkernel gebruikt de `prefix` tabel om het laatste woord na woordsegmentatie te vinden en zoekt alle woorden die daarmee beginnen.

Bij front-end-interactie wordt ook de anti-shake-functie `debounce` gebruikt (zoals hieronder geïmplementeerd), om de frequentie van gebruikersinvoer die zoekopdrachten activeert te verminderen en de hoeveelheid berekeningen te minimaliseren.

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

De zoekresultaten moeten de originele tekst opnieuw laden, en het gebruik van `service worker` kan herhaalde netwerkverzoeken voorkomen.

Omdat `service worker` alle artikelen in het cachegeheugen opslaat, is de hele website, inclusief de zoekopdracht, offline beschikbaar zodra de gebruiker een zoekopdracht uitvoert.

## Optimalisatie van de weergave van MarkDown-documenten

De pure front-end zoekoplossing van `i18n.site` is geoptimaliseerd voor `MarkDown` documenten.

Wanneer zoekresultaten worden weergegeven, wordt de hoofdstuknaam weergegeven en wordt er genavigeerd naar het hoofdstuk bij klikken.

![](//p.3ti.site/1727686552.avif)

## Samenvatting

Pure front-end omgekeerde volledige tekstzoekopdracht, geen server vereist, zeer geschikt voor kleine en middelgrote websites zoals documenten en persoonlijke blogs.

`i18n.site` open source zelf ontwikkelde pure front-end zoekoplossing, kleine omvang, snelle respons, lost de tekortkomingen van de huidige pure front-end volledige tekstzoekoplossingen op en biedt een betere gebruikerservaring.