---

brief: |
  i18n.site ondersteunt nu serverloos zoeken in volledige tekst.

  Dit artikel introduceert de implementatie van pure front-end full-text zoektechnologie, inclusief omgekeerde index gebouwd door IndexedDB, zoeken op voorvoegsels, optimalisatie van woordsegmentatie en meertalige ondersteuning.

  Vergeleken met bestaande oplossingen is de pure front-end full-text search van i18n.site klein en snel, geschikt voor kleine en middelgrote websites zoals documenten en blogs, en is offline beschikbaar.

---

# Puur Front-End Omgekeerd Zoeken in Volledige Tekst

## Reeks

Na enkele weken van ontwikkeling ondersteunt [i18n.site](//i18n.site) (een puur statische tool voor het bouwen & markdown meertalige vertalingen) nu pure front-end zoeken in volledige tekst.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Dit artikel deelt de technische implementatie van `i18n.site` pure front-end full-text zoeken Bezoek [i18n.site](//i18n.site)

Code open source : [Zoekkernel](//github.com/i18n-site/ie/tree/main/qy) / [interactieve interface](//github.com/i18n-site/plugin/tree/main/qy)

## Een Overzicht Van Serverloze Full-Text Zoekoplossingen

Voor kleine en middelgrote puur statische websites zoals documenten/persoonlijke blogs is het bouwen van een zelfgebouwde backend voor zoeken in volledige tekst te zwaar, en is servicevrij zoeken in volledige tekst de meest voorkomende keuze.

Serverloze full-text zoekoplossingen vallen in twee brede categorieën:

Ten eerste bieden [algolia.com](//algolia.com) externe zoekserviceproviders front-endcomponenten voor zoeken in volledige tekst.

Dergelijke diensten vereisen betaling op basis van het zoekvolume en zijn vaak niet beschikbaar voor gebruikers op het vasteland van China vanwege problemen zoals website-compliance.

Het kan niet offline worden gebruikt, kan niet op het intranet worden gebruikt en heeft grote beperkingen. In dit artikel wordt niet veel besproken.

De tweede is puur front-end zoeken in volledige tekst.

Momenteel omvatten veel voorkomende pure front-end zoekopdrachten in de volledige [lunrjs](//lunrjs.com) [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (gebaseerd op `lunrjs` secundaire ontwikkeling).

`lunrjs` Er zijn twee manieren om indexen te bouwen, en beide hebben hun eigen problemen.

1. Vooraf gebouwde indexbestanden

   Omdat de index woorden uit alle documenten bevat, is deze groot van formaat.
   Telkens wanneer een document wordt toegevoegd of gewijzigd, moet een nieuw indexbestand worden geladen.
   Het zal de wachttijd van de gebruiker verlengen en veel bandbreedte verbruiken.

2. Laad documenten en bouw in een handomdraai indexen

   Het bouwen van een index is een rekenintensieve taak. Elke keer dat u de index opnieuw opbouwt, zal dit duidelijke vertragingen en een slechte gebruikerservaring veroorzaken.

---

Naast `lunrjs` zijn er nog enkele andere full-text zoekoplossingen, zoals :

[fusejs](//www.fusejs.io) , bereken de gelijkenis tussen de te zoeken strings.

De prestaties van deze oplossing zijn extreem slecht en kunnen niet worden gebruikt voor zoeken in volledige tekst (zie [Fuse.js Lange zoekopdrachten duren meer dan 10 seconden, hoe optimaliseer je deze?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , gebruik het Bloom-filter om te zoeken, kan niet worden gebruikt voor het zoeken naar voorvoegsels (voer bijvoorbeeld `goo` in, zoek `good` , `google` ) en kan geen vergelijkbaar automatisch voltooiingseffect bereiken.

Vanwege de tekortkomingen van de bestaande oplossingen heeft `i18n.site` een nieuwe pure front-end full-text zoekoplossing ontwikkeld, die de volgende kenmerken heeft :

1. Ondersteunt zoeken in meerdere talen en is klein van formaat. De grootte van de zoekkernel na verpakking `gzip` is `6.9KB` (ter vergelijking: de grootte van `lunrjs` is `25KB` ).
1. Bouw een omgekeerde index op basis van `indexedb` , die minder geheugen in beslag neemt en snel is.
1. Wanneer documenten worden toegevoegd/gewijzigd, worden alleen de toegevoegde of gewijzigde documenten opnieuw geïndexeerd, waardoor het aantal berekeningen wordt verminderd.
1. Ondersteunt het zoeken naar voorvoegsels en kan zoekresultaten in realtime weergeven terwijl de gebruiker aan het typen is.
1. Offline beschikbaar

Hieronder worden `i18n.site` technische implementatiedetails in detail geïntroduceerd.

## Meertalige Woordsegmentatie

Woordsegmentatie maakt gebruik van de oorspronkelijke woordsegmentatie van de browser `Intl.Segmenter` , en alle reguliere browsers ondersteunen deze interface.

![](//p.3ti.site/1727667759.avif)

De woordsegmentatie `coffeescript` code is als volgt

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

in:

* `/\p{P}/` is `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { expressie die overeenkomt met leestekens. | } ~. `.</p><ul><li> `split('.')` is omdat `Firefox` browserwoordsegmentatie `. ` niet segmenteert.</li>


## Indexopbouw

Er zijn 5 objectopslagtabellen gemaakt in `IndexedDB` :

* `word` : id - woorden
* `doc` : id - Documentnr url - Documentversienummer
* `docWord` : Array van document id - woord id
* `prefix` : Array van voorvoegsel - woord id
* `rindex` : Word id - Document id : Array van regelnummers

Geef de array van document `url` en versienummer `ver` door en zoek of het document in tabel `doc` voorkomt. Als het niet bestaat, maak dan een omgekeerde index. Verwijder tegelijkertijd de omgekeerde index voor de documenten die niet zijn doorgegeven.

Op deze manier kan incrementele indexering worden bereikt en wordt de hoeveelheid berekeningen verminderd.

Bij front-end-interactie kan de voortgangsbalk voor het laden van de index worden weergegeven om vertraging te voorkomen bij het voor de eerste keer laden. Zie "Voortgangsbalk met animatie, gebaseerd op een enkele progress + Pure css Implementatie" [Engels](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinees](//juejin.cn/post/7413586285954154522) .

### GeïndexeerdDB Hoog Gelijktijdig Schrijven

Het project is [idb](//www.npmjs.com/package/idb) op basis van de asynchrone inkapseling van IndexedDB

Lees- en schrijfbewerkingen met IndexedDB zijn asynchroon. Wanneer u een index maakt, worden documenten gelijktijdig geladen om de index te maken.

Om gedeeltelijk gegevensverlies veroorzaakt door concurrerend schrijven te voorkomen, kunt u de onderstaande `coffeescript` code raadplegen en een `ing` cache toevoegen tussen lezen en schrijven om concurrerende schrijfbewerkingen te onderscheppen.

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

## Precisie en Herinnering

De zoekopdracht segmenteert eerst de door de gebruiker ingevoerde trefwoorden.

Stel dat er `N` woorden staan na de woordsegmentatie. Bij het retourneren van resultaten worden eerst resultaten geretourneerd die alle trefwoorden bevatten, en vervolgens worden resultaten met `N-1` , `N-2` ,..., `1` trefwoorden geretourneerd.

De zoekresultaten die eerst worden weergegeven, garanderen de nauwkeurigheid van de zoekopdracht, en de resultaten die vervolgens worden geladen (klik op de knop 'Meer laden') zorgen voor het terugroeppercentage.

![](//p.3ti.site/1727684564.avif)

## Laad Op Aanvraag

Om de reactiesnelheid te verbeteren, gebruikt de zoekopdracht de `yield` generator om laden op aanvraag te implementeren, en wordt `limit` keer geretourneerd wanneer een resultaat wordt opgevraagd.

Houd er rekening mee dat elke keer dat u na `yield` opnieuw zoekt, u een zoektransactie van `IndexedDB` opnieuw moet openen.

## Voorvoegsel Realtime Zoeken

Om zoekresultaten weer te geven terwijl de gebruiker aan het typen is, worden, wanneer bijvoorbeeld `wor` wordt ingevoerd, woorden weergegeven die worden voorafgegaan door `wor` zoals `words` en `work` .

![](//p.3ti.site/1727684944.avif)

De zoekkernel zal de `prefix` tabel gebruiken voor het laatste woord na woordsegmentatie om alle woorden te vinden die ervoor staan, en in volgorde te zoeken.

Anti-shake-functie `debounce` wordt ook gebruikt bij front-end-interactie (als volgt geïmplementeerd) om de frequentie van gebruikersinvoer die zoekopdrachten activeert te verminderen en de hoeveelheid berekeningen te verminderen.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Offline Beschikbaar

De indextabel slaat niet de originele tekst op, alleen de woorden, waardoor de hoeveelheid opslagruimte wordt verminderd.

Voor het markeren van zoekresultaten moet de originele tekst opnieuw worden geladen, en het matchen van `service worker` kan herhaalde netwerkverzoeken voorkomen.

Omdat `service worker` alle artikelen in het cachegeheugen opslaat, is de hele website, inclusief de zoekopdracht, offline beschikbaar zodra de gebruiker een zoekopdracht uitvoert.

## Weergaveoptimalisatie Van MarkDown-Documenten

`i18n.site` 's pure front-end zoekoplossing is geoptimaliseerd voor `MarkDown` document.

Wanneer zoekresultaten worden weergegeven, wordt de hoofdstuknaam weergegeven en wordt er door het hoofdstuk genavigeerd wanneer erop wordt geklikt.

![](//p.3ti.site/1727686552.avif)

## Samenvatten

Omgekeerd zoeken in volledige tekst, puur geïmplementeerd aan de voorkant, geen server vereist. Het is zeer geschikt voor kleine en middelgrote websites zoals documenten en persoonlijke blogs.

`i18n.site` Open source zelf ontwikkelde pure front-end zoeken, klein van formaat en snelle respons, lost de tekortkomingen van de huidige pure front-end full-text zoeken op en zorgt voor een betere gebruikerservaring.