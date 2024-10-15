---

brief: |
  i18n.site ondersteunt nu serverloos zoeken in volledige tekst.

  Dit artikel introduceert de implementatie van puur front-end full-text zoektechnologie, inclusief de omgekeerde index gebouwd met IndexedDB, voorvoegselzoeken, optimalisatie van woordsegmentatie en meertalige ondersteuning.

  Vergeleken met bestaande oplossingen is de puur front-end full-text search van i18n.site compact en snel, geschikt voor kleine en middelgrote websites zoals documenten en blogs, en is offline beschikbaar.

---

# Puur front-end omgekeerd volledig zoeken

## Reeks

Na enkele weken van ontwikkeling ondersteunt [i18n.site](//i18n.site) (een puur statische markdown-meertalige vertaal- en websitebouwtool) nu puur front-end volledig zoeken.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Dit artikel deelt de technische implementatie van `i18n.site`'s puur front-end volledig zoeken. Bezoek [i18n.site](//i18n.site) om de zoekresultaten te ervaren.

Code open source: [Zoekkernel](//github.com/i18n-site/ie/tree/main/qy) / [interactieve interface](//github.com/i18n-site/plugin/tree/main/qy)

## Een overzicht van serverloze full-text zoekoplossingen

Voor kleine en middelgrote, puur statische websites zoals documenten/persoonlijke blogs is het bouwen van een zelfgebouwde backend voor volledige tekstzoekfunctionaliteit te zwaar, en het gebruik van een servicevrije volledige tekstzoekoplossing is de meest gangbare keuze.

Serverloze full-text zoekoplossingen vallen in twee grote categorieën:

De eerste is het bieden van front-endcomponenten voor full-text zoeken door externe zoekserviceproviders zoals [algolia.com](//algolia.com).

Dergelijke diensten vereisen betaling op basis van zoekvolume en zijn vaak niet beschikbaar voor gebruikers in China vanwege compliance-problemen.

Zij kunnen niet offline worden gebruikt, kunnen niet op een intranet worden uitgevoerd en hebben grote beperkingen. Dit artikel bespreekt dit niet in detail.

De tweede is puur front-end full-text zoeken.

Momenteel zijn er enkele veelgebruikte pure frontend-oplossingen voor volledige tekstzoekfunctionaliteit, zoals [lunrjs](//lunrjs.com) en [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (een op `lunrjs` gebaseerde secundaire ontwikkeling).

`lunrjs` heeft twee methoden voor het bouwen van indexen, maar beide hebben hun eigen problemen.

1. Vooraf gebouwde indexbestanden

   Omdat de index woorden uit alle documenten bevat, is deze groot van formaat.
   Telkens wanneer een document wordt toegevoegd of gewijzigd, moet een nieuw indexbestand worden geladen.
   Dit verlengt de wachttijd van de gebruiker en verbruikt veel bandbreedte.

2. Laad documenten en bouw indexen in real-time

   Het bouwen van een index is een rekenintensieve taak. Het opnieuw opbouwen van de index bij elke toegang veroorzaakt duidelijke vertragingen en een slechte gebruikerservaring.

---

Naast `lunrjs` zijn er nog andere full-text zoekoplossingen, zoals:

[fusejs](//www.fusejs.io), dat de gelijkenis tussen te zoeken strings berekent.

Dit schema heeft een zeer slechte prestatie en kan niet worden gebruikt voor full-text zoeken (zie [Fuse.js Lange zoekopdracht duurt meer dan 10 seconden, hoe optimaliseer je deze?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch), dat gebruik maakt van een Bloom-filter voor het zoeken, kan geen voorvoegselzoeken uitvoeren (bijvoorbeeld, zoek op `goo` voor `good`, `google`) en geen vergelijkbare automatisch aanvullende functie bieden.

Vanwege de nadelen van bestaande oplossingen heeft `i18n.site` een nieuwe, volledig front-end full-text zoekoplossing ontwikkeld, met de volgende kenmerken:

1. Ondersteunt meertalig zoeken, compact formaat, de zoekkernel is na `gzip`-compressie slechts `6.9KB` groot (in vergelijking: `lunrjs` is `25KB` groot)
1. Gebaseerd op `IndexedDB` voor het bouwen van een omgekeerde index, met minder geheugengebruik en snelle prestaties
1. Wanneer documenten worden toegevoegd/gewijzigd, worden alleen de toegevoegde of gewijzigde documenten opnieuw geïndexeerd, waardoor het aantal berekeningen wordt verminderd
1. ondersteunt voorvoegselzoeken, waardoor zoekresultaten in real-time kunnen worden weergegeven tijdens het typen
1. Offline beschikbaar

Hieronder volgen gedetailleerde technische implementatiedetails van `i18n.site`.

## Meertalige woordsegmentatie

Woordsegmentatie maakt gebruik van de ingebouwde browserfunctie `Intl.Segmenter`, die wordt ondersteund door de meeste gangbare browsers.

![](//p.3ti.site/1727667759.avif)

De woordsegmentatie in `coffeescript` is als volgt:

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'| `'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

In:

* `/\p{P}/` is `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { expressie die overeenkomt met leestekens | } ~. `.</p><ul><li> `split('.')` is omdat `Firefox` browserwoordsegmentatie `. ` niet segmenteert.</li>


## Indexopbouw

In `IndexedDB` zijn vijf objectstore-tabellen aangemaakt:

* `word`: id - woord
* `doc` : id - Document URL - Documentversienummer
* `docWord`: document-id - array van woord-id's
* `prefix`: voorvoegsel - array van woord-id's
* `rindex`: woord-id - array van document-id's : regelnummers

Geeft de array met `url` en versienummer `ver` van de documenten door, en controleert of deze documenten in de tabel `doc` bestaan. Als dat niet het geval is, wordt een omgekeerde index gemaakt. Tegelijkertijd worden de omgekeerde indices voor de niet doorgegeven documenten verwijderd.

Op deze manier kan incrementele indexering worden bereikt en wordt de hoeveelheid berekeningen verminderd.

Bij front-end-interactie kan de voortgangsbalk voor het laden van de index worden weergegeven om vertraging te voorkomen bij het voor de eerste keer laden. Zie "Voortgangsbalk met animatie, gebaseerd op een enkele progress + Pure css Implementatie" [Engels](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinees](//juejin.cn/post/7413586285954154522).

### GeïndexeerdDB hoog gelijktijdig schrijven

Het project is ontwikkeld op basis van de asynchrone wrapper [idb](//www.npmjs.com/package/idb) voor IndexedDB.

Lees- en schrijfbewerkingen met IndexedDB zijn asynchroon. Wanneer een index wordt gemaakt, worden documenten gelijktijdig geladen om de index te maken.

Om gedeeltelijk gegevensverlies door concurrerende schrijfoperaties te voorkomen, kunt u de volgende `coffeescript`-code raadplegen en een `ing`-cache toevoegen tussen het lezen en schrijven om concurrerende schrijfoperaties te blokkeren.

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

## Precisie en herinnering

De zoekopdracht segmenteert eerst de door de gebruiker ingevoerde trefwoorden.

Stel dat er `N` woorden staan na de woordsegmentatie. Bij het retourneren van resultaten worden eerst resultaten geretourneerd die alle trefwoorden bevatten, en daarna worden resultaten met `N-1` , `N-2` ,..., `1` trefwoorden geretourneerd.

De zoekresultaten die eerst worden weergegeven, garanderen de nauwkeurigheid van de zoekopdracht, en de resultaten die vervolgens worden geladen (bijvoorbeeld, door op de knop 'Meer laden' te klikken) zorgen voor het terugroeppercentage.

![](//p.3ti.site/1727684564.avif)

## Laad op aanvraag

Om de reactiesnelheid te verbeteren, gebruikt de zoekopdracht de `yield` generator om laden op aanvraag te implementeren en wordt `limit` keer geretourneerd wanneer een resultaat wordt opgevraagd.

Houd er rekening mee dat na het gebruik van `yield` een nieuwe `IndexedDB`-zoektransactie moet worden geopend voor een nieuwe zoekactie.

## Voeg real-time zoeken toe

Als er na de woordsegmentatie `N` woorden zijn, worden de resultaten eerst geretourneerd met alle trefwoorden, gevolgd door resultaten met `N-1`, `N-2`, ..., tot `1` trefwoorden.

![](//p.3ti.site/1727684944.avif)

De zoekkernel gebruikt de `prefix`-tabel voor het laatste woord na woordsegmentatie om alle woorden te vinden die ervoor staan en in volgorde te zoeken.

De `debounce`-functie wordt ook gebruikt in de front-end-interactie (zoals hieronder geïmplementeerd) om de frequentie van gebruikersinvoer die zoekopdrachten activeert te verminderen en de hoeveelheid berekeningen te minimaliseren.

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

De indextabel slaat niet de oorspronkelijke tekst op, alleen de woorden, waardoor de opslagruimte wordt verminderd.

Voor het markeren van zoekresultaten moet de oorspronkelijke tekst opnieuw worden geladen, en het matchen van `service worker` kan herhaalde netwerkverzoeken voorkomen.

Omdat `service worker` alle artikelen in het cachegeheugen opslaat, is de hele website, inclusief de zoekopdracht, offline beschikbaar zodra de gebruiker een zoekopdracht uitvoert.

## Weergaveoptimalisatie van MarkDown-documenten

De pure front-end zoekoplossing van `i18n.site` is geoptimaliseerd voor `Markdown`-documenten.

Wanneer zoekresultaten worden weergegeven, wordt de hoofdstuknaam weergegeven en wordt er door het hoofdstuk genavigeerd wanneer erop wordt geklikt.

![](//p.3ti.site/1727686552.avif)

## Samenvatten

Puur front-end geïmplementeerd omgekeerd volledig zoeken vereist geen server en is zeer geschikt voor kleine en middelgrote websites zoals documenten en persoonlijke blogs.

`i18n.site` biedt een open-source, zelf ontwikkelde pure front-end zoekoplossing, compact en snel, die de problemen van huidige pure front-end full-text zoekoplossingen oplost en een betere gebruikerservaring biedt.