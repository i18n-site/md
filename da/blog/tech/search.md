---

brief: |
  i18n.site understøtter nu serverløs fuldtekstsøgning.

  Denne artikel introducerer implementeringen af ren front-end fuldtekst-søgeteknologi, inklusive inverteret indeks bygget af IndexedDB, præfikssøgning, ordsegmenteringsoptimering og flersprogsunderstøttelse.

  Sammenlignet med eksisterende løsninger er i18n.sites rene front-end fuldtekstsøgning lille i størrelse og hurtig, velegnet til små og mellemstore websteder såsom dokumenter og blogs og er tilgængelig offline.

---

# Ren Frontend Inverteret Fuldtekstsøgning

## Rækkefølge

Efter flere ugers udvikling understøtter [i18n.site](//i18n.site) (et rent statisk markdown multilingualtranslation & webstedsopbygningsværktøj) ren frontend fuldtekstsøgning.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Denne artikel vil dele den tekniske implementering af `i18n.site` ren front-end fuldtekstsøgning. Besøg [i18n.site](//i18n.site)

Kode open source : [Søg kerne](//github.com/i18n-site/ie/tree/main/qy) / [interaktiv grænseflade](//github.com/i18n-site/plugin/tree/main/qy)

## En Gennemgang Af Serverløse Fuldtekstsøgeløsninger

For små og mellemstore rent statiske hjemmesider såsom dokumenter/personlige blogs er det for tungt at bygge en selvbygget fuldtekstsøgningsbackend, og servicefri fuldtekstsøgning er det mere almindelige valg.

Serverløse fuldtekstsøgeløsninger falder i to brede kategorier:

For det første, [algolia.com](//algolia.com) tredjeparts søgetjenesteudbydere leverer front-end-komponenter til fuldtekstsøgning.

Sådanne tjenester kræver betaling baseret på søgevolumen og er ofte utilgængelige for brugere på det kinesiske fastland på grund af problemer såsom overholdelse af websteder.

Det kan ikke bruges offline, kan ikke bruges på intranettet og har store begrænsninger. Denne artikel diskuterer ikke meget.

Den anden er ren frontend fuldtekstsøgning.

På nuværende tidspunkt omfatter almindelige rene front-end fuldtekstsøgninger [lunrjs](//lunrjs.com) og [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (baseret på `lunrjs` sekundær udvikling).

`lunrjs` Der er to måder at bygge indeks på, og begge har deres egne problemer.

1. Forudbyggede indeksfiler

   Fordi indekset indeholder ord fra alle dokumenter, er det stort i størrelse.
   Hver gang et dokument tilføjes eller ændres, skal en ny indeksfil indlæses.
   Det vil øge brugerens ventetid og forbruge meget båndbredde.

2. Indlæs dokumenter og opbyg indekser på farten

   Opbygning af et indeks er en beregningsintensiv opgave At genopbygge indekset, hver gang du får adgang til det, vil forårsage åbenlyse forsinkelser og dårlig brugeroplevelse.

---

Ud over `lunrjs` er der nogle andre fuldtekstsøgeløsninger, såsom :

[fusejs](//www.fusejs.io) , beregne ligheden mellem strenge for at søge.

Ydeevnen af denne løsning er ekstremt dårlig og kan ikke bruges til fuldtekstsøgning (se [Fuse.js Lang forespørgsel tager mere end 10 sekunder, hvordan optimerer man den?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , brug Bloom-filteret til at søge, kan ikke bruges til præfikssøgning (indtast f.eks. `goo` , søg `good` , `google` ), og kan ikke opnå lignende automatisk fuldførelseseffekt.

På grund af manglerne ved de eksisterende løsninger udviklede `i18n.site` en ny ren front-end fuldtekst søgeløsning, som har følgende egenskaber :

1. Understøtter søgning på flere sprog og er lille i størrelse. Størrelsen på søgekernen efter pakning `gzip` er `6.9KB` (til sammenligning er størrelsen på `lunrjs` `25KB` ).
1. Byg et omvendt indeks baseret på `indexedb` , som optager mindre hukommelse og er hurtigt.
1. Når dokumenter tilføjes/ændres, bliver kun de tilføjede eller ændrede dokumenter genindekseret, hvilket reducerer mængden af beregninger.
1. Understøtter præfikssøgning og kan vise søgeresultater i realtid, mens brugeren skriver.
1. Tilgængelig offline

Nedenfor vil `i18n.site` tekniske implementeringsdetaljer blive introduceret i detaljer.

## Flersproget Ordsegmentering

Ordsegmentering bruger browserens oprindelige ordsegmentering `Intl.Segmenter` , og alle almindelige browsere understøtter denne grænseflade.

![](//p.3ti.site/1727667759.avif)

Ordsegmentering `coffeescript` koden er som følger

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

i:

* `/\p{P}/` er et regulært udtryk, der matcher tegnsætningstegn. Specifikke matchende symboler omfatter: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` skyldes, at `Firefox` browserordsegmentering ikke segmenterer `. ` .</li>


## Indeksbygning

5 objektlagringstabeller blev oprettet i `IndexedDB` :

* `word` : id -
* `doc` : id - Dokument url - Dokumentversionsnummer
* `docWord` : Array af dokument id - word id
* `prefix` : Array af præfiks - ord id
* `rindex` : Word id - Dokument id : Array af linjenumre

Indtast arrayet af dokument `url` og versionsnummer `ver` , og søg, om dokumentet findes i tabel `doc` Hvis det ikke findes, skal du oprette et omvendt indeks. Fjern samtidig det omvendte indeks for de dokumenter, der ikke blev sendt ind.

På denne måde kan der opnås trinvis indeksering og mængden af beregning reduceres.

I front-end-interaktion kan indlæsningsfremgangslinjen for indekset vises for at undgå forsinkelsen ved indlæsning for første gang. Se "Progresslinje med animation, baseret på en enkelt progress + Ren css Implementering" [Engelsk](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Kinesisk](//juejin.cn/post/7413586285954154522) .

### IndexedDB Høj Samtidig Skrivning

Projektet er [idb](//www.npmjs.com/package/idb) baseret på den asynkrone indkapsling af IndexedDB

IndexedDB læsninger og skrivninger er asynkrone. Når du opretter et indeks, vil dokumenter blive indlæst samtidigt for at oprette indekset.

For at undgå delvist datatab forårsaget af konkurrenceskrivning, kan du henvise til `coffeescript` koden nedenfor og tilføje en `ing` cache mellem læsning og skrivning for at opsnappe konkurrerende skrivninger.

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

## Præcision Og Genkaldelse

Søgningen vil først segmentere de søgeord, som brugeren har indtastet.

Antag, at der er `N` ord efter ordsegmenteringen. Når resultaterne returneres, vil resultater, der indeholder alle søgeord, først blive returneret, og derefter returneres resultater, der indeholder `N-1` , `N-2` ,..., `1` søgeord.

De søgeresultater, der vises først, sikrer forespørgslens nøjagtighed, og de efterfølgende indlæste resultater (klik på knappen Indlæs mere) sikrer genkaldelsesfrekvensen.

![](//p.3ti.site/1727684564.avif)

## Indlæs Efter Behov

For at forbedre responshastigheden bruger søgningen `yield` generatoren til at implementere on-demand-indlæsning og returnerer `limit` gang et resultat forespørges.

Bemærk, at hver gang du søger igen efter `yield` , skal du genåbne en forespørgselstransaktion på `IndexedDB` .

## Præfiks Søgning I Realtid

For at få vist søgeresultater, mens brugeren skriver, f.eks. når `wor` er indtastet, vises ord med `wor` foran, såsom `words` og `work` .

![](//p.3ti.site/1727684944.avif)

Søgekernen vil bruge `prefix` tabellen for det sidste ord efter ordsegmentering for at finde alle ord med præfiks og søge i rækkefølge.

Anti-shake funktion `debounce` bruges også i front-end interaktion (implementeret som følger) for at reducere hyppigheden af brugerinput, der udløser søgninger og reducere mængden af beregninger.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Tilgængelig Offline

Indekstabellen gemmer ikke den originale tekst, kun ordene, hvilket reducerer mængden af lagring.

Fremhævelse af søgeresultater kræver genindlæsning af den originale tekst, og matchende `service worker` kan undgå gentagne netværksanmodninger.

På samme tid, fordi `service worker` cacher alle artikler, er hele hjemmesiden, inklusive søgningen, tilgængelig offline, når først brugeren udfører en søgning.

## Visningsoptimering Af MarkDown Dokumenter

`i18n.site` 's rene front-end søgeløsning er optimeret til `MarkDown` dokumenter.

Når der vises søgeresultater, vil kapitelnavnet blive vist, og kapitlet vil blive navigeret, når der klikkes på det.

![](//p.3ti.site/1727686552.avif)

## Sammenfatte

Inverteret fuldtekstsøgning implementeret udelukkende på frontend, ingen server påkrævet. Den er meget velegnet til små og mellemstore hjemmesider såsom dokumenter og personlige blogs.

`i18n.site` Open source egenudviklet ren front-end søgning, lille i størrelse og hurtig respons, løser manglerne ved den nuværende rene front-end fuldtekstsøgning og giver en bedre brugeroplevelse.