# Ren frontend inverteret fuldtekstsøgning

## Sekvens

Efter flere ugers udvikling understøtter [i18n.site](//i18n.site) (et rent statisk markdown multilingualtranslation & webstedsopbygningsværktøj) ren frontend fuldtekstsøgning.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Denne artikel vil dele implementeringen af `i18n.site` ren front-end fuldtekst søgeteknologi. Besøg [i18n.site](//i18n.site) for at opleve søgeeffekten.

Kode er open source [søgekerne](//github.com/i18n-site/ie/tree/main/qy) / [interaktiv grænseflade](//github.com/i18n-site/plugin/tree/main/qy)

## En oversigt over serverløse fuldtekstsøgeløsninger

For små hjemmesider som dokumenter/personlige blogs, der er rent statiske, er det utvivlsomt for tungt at bygge en fuldtekstsøgnings backend selv, og fuldtekstsøgning uden tjenester er uden tvivl en bedre løsning.

Eksisterende serverløse fuldtekstsøgeløsninger falder i to brede kategorier.

Den ene er tredjeparts søgetjenesteudbydere som [algolia.com](//algolia.com), der tilbyder front-end fuldtekst søgekomponenter.

Sådanne tjenester kræver betaling og er ikke tilgængelige for brugere på det kinesiske fastland på grund af problemer med overholdelse af websteder.

De kan ikke bruges offline, ikke på intranettet og har store begrænsninger. Denne artikel diskuterer ikke meget om dem.

Den anden er ren frontend fuldtekstsøgning.

De mere velkendte rene front-end fuldtekstsøgninger [lunrjs](/0) og [ ElasticLunr.js ] [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) .

`lunrjs` har to metoder til indeksopbygning, men begge har deres egne problemer.

1. Forudbyggede indeksfiler

   Fordi indekset indeholder alle ord fra alle dokumenter, er det stort i størrelse.
   Hver gang et dokument tilføjes eller ændres, skal en ny indeksfil indlæses.
   Dette vil øge brugerens ventetid og forbruge meget båndbredde.

2. Indlæs dokumenter og opbyg indekser på farten

   Opbygning af et indeks er en beregningsintensiv opgave, og hver gang du får adgang til det, vil det forårsage åbenlyse forsinkelser og dårlig brugeroplevelse.

Ud over `lunrjs` er der nogle andre fuldtekstsøgeløsninger, såsom:

[fusejs](https://www.fusejs.io), som beregner ligheden mellem strenge for at søge.

Denne løsning har dårlig ydeevne og kan ikke bruges til fuldtekstsøgning (se [Fuse.js Lang forespørgsel tager mere end 10 sekunder, hvordan optimerer man den?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](https://github.com/tinysearch/tinysearch), som bruger Bloom-filteret til at søge, kan ikke bruges til præfikssøgning (f.eks. ved at indtaste `goo` og søge efter `good` eller `google`), og kan ikke opnå en automatisk fuldførelseseffekt.

På grund af utilfredshed med eksisterende løsninger har `i18n.site` udviklet en ny ren frontend fuldtekst søgeløsning med følgende funktioner:

1. Understøtter søgning på flere sprog, er lille i størrelse, søgekerne pakket med `gzip` er `6.9KB` (som sammenligning er `lunrjs`' størrelse `25KB`)
1. Bygger et omvendt indeks baseret på `IndexedDB`, hvilket optager mindre hukommelse og er hurtigt
1. Når dokumenter tilføjes/ændres, bliver kun de tilføjede eller ændrede dokumenter genindekseret, hvilket reducerer mængden af beregninger
1. Understøtter præfikssøgning, som kan vise søgeresultater i realtid, mens brugeren skriver
1. Tilgængelig offline

Nedenfor vil `i18n.site`'s tekniske implementeringsdetaljer blive introduceret i detaljer.

## Flersproget ordsegmentering

Segmentering bruger browserens oprindelige segmentering `Intl.Segmenter`, som understøttes af alle almindelige browsere.

![](https://p.3ti.site/1727667759.avif)

Segmenterings `coffeescript` kode er som følger:

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

Her:

* `/\p{P}/` er et regulært udtryk, der matcher tegnsætningstegn. De specifikke matchende symboler inkluderer: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` skyldes, at `Firefox` browserordsegmentering ikke segmenterer `.` .</li>


## Indeksbygning

Indexeringsprocessen opretter fem objektlagringstabeller i `IndexedDB`:

* Fem objektlagringstabeller blev oprettet i `IndexedDB`:
* `word`: id - ord
* `doc`: id - dokumenturl - dokumentversionsnummer
* `docWord`: dokumentid - array af ordid
* `prefix`: præfiks - array af ordid

En array med dokumentets `url` og versionsnummer `ver` indtastes, og det undersøges, om dokumentet findes i tabel `doc`. Hvis det ikke findes, oprettes et omvendt indeks. Samtidig fjernes det omvendte indeks for dokumenter, der ikke er blevet indtastet.

På denne måde kan der opnås trinvis indeksering, hvilket reducerer beregningsmængden.

I front-end-interaktion kan en indlæsningsfremgangslinje for indekset vises for at undgå forsinkelse ved første indlæsning. Se "Progresslinje med animation, baseret på en enkelt progress + Ren css Implementering" [Engelsk](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Kinesisk](https://juejin.cn/post/7413586285954154522).

### IndexedDB høj samtidig skrivning

Projektet er udviklet baseret på den asynkrone indkapsling af IndexedDB ved hjælp af [idb](https://www.npmjs.com/package/idb).

IndexedDB's læsninger og skrivninger er asynkrone. Når indekset oprettes, indlæses dokumenterne samtidigt.

For at undgå tab af data på grund af konkurrenceskrivning kan man referere til nedenstående `coffeescript`- kode og tilføje en `ing` cache mellem læsning og skrivning for at opsnappe konkurrerende skrivninger.

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

## Præfiks søgning i realtid

For at vise søgeresultater medens brugeren skriver, f.eks. når `wor` indtastes, vises ord som `words` og `work`, der begynder med `wor`.

![](https://p.3ti.site/1727684944.avif)

Søgekernen bruger `prefix`-tabellen til det sidste ord efter ordsegmentering for at finde alle ord med præfiks og søge i rækkefølge.

Anti-shake-funktionen `debounce` bruges også i front-end-interaktion (implementeret som følger) for at reducere hyppigheden af brugerinput, der udløser søgninger, og reducere beregningsmængden.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Præcision og fuldtæthed

Præcision og genkaldelse

Antag, at der er `N` ord efter ordsegmenteringen. Når resultaterne returneres, vil resultater, der indeholder alle søgeord, først blive returneret, og derefter returneres resultater, der indeholder `N-1` , `N-2` ,..., `1` søgeord.

Det første sæt søgeresultater sikrer forespørgslens nøjagtighed, mens de efterfølgende indlæste resultater (ved at klikke på knappen "Indlæs mere") sikrer fuldtæthed.

![](https://p.3ti.site/1727684564.avif)

## Indlæs efter behov

For at forbedre responsen bruger søgningen `yield`-generatoren til at implementere on-demand-indlæsning og returnerer `limit` resultater ad gangen.

For at forbedre responshastigheden bruger søgningen `yield` generatoren til at implementere on-demand-indlæsning og returnerer `limit` gang et resultat forespørges.

## Præfiks søgning i realtid

For at vise søgeresultater medens brugeren skriver, f.eks. når `wor` indtastes, vises ord som `words` og `work`, der begynder med `wor`.

![](https://p.3ti.site/1727684944.avif)

Søgekernen bruger `prefix`-tabellen til det sidste ord efter ordsegmentering for at finde alle ord med præfiks og søge i rækkefølge.

Anti-shake-funktionen `debounce` bruges også i front-end-interaktion (implementeret som følger) for at reducere hyppigheden af brugerinput, der udløser søgninger, og reducere beregningsmængden.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Tilgængelig offline

Tilgængelig offline

For at fremhæve søgeresultater kræves genindlæsning af den originale tekst, og ved hjælp af matchende `service worker` kan gentagne netværksanmodninger undgås.

Søgeresultaterne fremhæves ved at genindlæse den originale tekst, og ved hjælp af `service worker` kan gentagne netværksanmodninger undgås.

## Visningsoptimering af MarkDown-dokumenter

`i18n.site` 's rene front-end søgeløsning er optimeret til `MarkDown` dokumenter.

Når søgeresultaterne vises, vises kapitelnavnet, og kapitlet navigeres, når der klikkes på det.

![](https://p.3ti.site/1727686552.avif)

## Sammenfatning

Sammenfatning

Ren frontend implementeret inverteret fuldtekstsøgning, med hurtig respons og intet behov for en server.