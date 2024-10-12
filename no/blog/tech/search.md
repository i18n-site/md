---

brief: |
  i18n.site støtter nå serverløst fulltekstsøk.

  Denne artikkelen introduserer implementeringen av ren front-end fulltekstsøketeknologi, inkludert invertert indeks bygget av IndexedDB, prefikssøk, ordsegmenteringsoptimalisering og flerspråksstøtte.

  Sammenlignet med eksisterende løsninger, er i18n.sites rene front-end fulltekstsøk lite i størrelse og raskt, egnet for små og mellomstore nettsteder som dokumenter og blogger, og er tilgjengelig offline.

---

# Rent Front-End Invertert Fulltekstsøk

## Sekvens

Etter flere uker med utvikling, støtter [i18n.site](//i18n.site) (et rent statisk markdown flerspråklig oversettelse & nettstedbyggingsverktøy) nå rent front-end fulltekstsøk.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Denne artikkelen vil dele den tekniske implementeringen av `i18n.site` rent front-end fulltekstsøk. Besøk [i18n.site](//i18n.site) å oppleve søkeeffekten.

Kode åpen kildekode : [Søk i kjernen](//github.com/i18n-site/ie/tree/main/qy) / [Interaktivt grensesnitt](//github.com/i18n-site/plugin/tree/main/qy)

## En Oversikt Over Serverløse Fulltekstsøkeløsninger

For små og mellomstore rent statiske nettsteder som dokumenter/personlige blogger er det for tungt å bygge en selvbygd fulltekstsøkeside, og tjenestefritt fulltekstsøk er det vanligste valget.

Serverløse fulltekstsøkeløsninger faller inn i to brede kategorier:

For det første tilbyr lignende [algolia.com](//algolia.com) Tredjeparts søketjenesteleverandører front-end-komponenter for fulltekstsøk.

Slike tjenester krever betaling basert på søkevolum, og er ofte utilgjengelige for brukere i fastlands-Kina på grunn av problemer som nettstedsoverholdelse.

Den kan ikke brukes offline, kan ikke brukes på intranettet, og har store begrensninger. Denne artikkelen diskuterer ikke mye.

Det andre er rent front-end fulltekstsøk.

For tiden inkluderer vanlige rene front-end fulltekstsøk [lunrjs](//lunrjs.com) og [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (basert på `lunrjs` sekundær utvikling).

`lunrjs` har to måter å bygge indekser på, og begge har sine egne problemer.

1. Forhåndsbygde indeksfiler

   Fordi indeksen inneholder alle dokumentenes ord, er den stor i størrelse.
   Hver gang et dokument legges til eller endres, må en ny indeksfil lastes inn.
   Det vil øke brukerens ventetid og forbruke mye båndbredde.

2. Last inn dokumenter og bygg indekser på farten

   Å bygge en indeks er en beregningsintensiv oppgave. Hver gang du får tilgang til den, vil det føre til åpenbare etterslep og dårlig brukeropplevelse.

---

I tillegg til `lunrjs` finnes det noen andre fulltekstsøkeløsninger, som:

[fusejs](//www.fusejs.io), som beregner likheten mellom strenger for å søke.

Denne løsningen har svært dårlig ytelse og kan ikke brukes til fulltekstsøk (se [Fuse.js Langt søk tar mer enn 10 sekunder, hvordan optimaliseres det?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch), som bruker Bloom-filteret for å søke, kan ikke brukes til prefikssøk (for eksempel, når du skriver `goo`, kan du ikke søke etter `good` eller `google`), og kan ikke oppnå en automatisk fullføringsfunksjon.

På grunn av manglene ved de eksisterende løsningene, har `i18n.site` utviklet en ny ren front-end fulltekstsøkeløsning med følgende egenskaper:

1. Støtter flerspråklig søk og er liten i størrelse. Søkekjernen er pakket med `gzip` og har en størrelse på `6.9KB` (i sammenligning har `lunrjs` en størrelse på `25KB`)
1. Bygger en invertert indeks basert på `IndexedDB`, som bruker lite minne og er rask
1. Når dokumenter legges til/endres, blir bare de tilføyde eller modifiserte dokumentene re-indeksert, noe som reduserer mengden beregninger
1. Støtter prefikssøk og kan vise søkeresultater i sanntid mens brukeren skriver
1. Tilgjengelig offline

Nedenfor vil vi detaljere `i18n.site` tekniske implementeringsdetaljer.

## Flerspråklig Ordsegmentering

Ordsegmentering bruker nettleserens opprinnelige ordsegmentering `Intl.Segmenter`, som støttes av alle moderne nettlesere.

![](//p.3ti.site/1727667759.avif)

Ordsegmentering `coffeescript` koden er som følger:

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

Der:

* `/\p{P}/` er et regulært uttrykk som matcher tegnsettingstegn. De spesifikke tegnene som matches inkluderer: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` er fordi `Firefox` nettleserordsegmentering ikke segmenterer `.` .</li>


## Indeksbygg

5 objektlagringstabeller ble opprettet i `IndexedDB`:

* `word` : id - ord
* `doc`: id - dokumenturl - dokumentversjonsnummer
* `docWord` : dokumentid - ordid-matrise
* `prefix` : prefiks - ordid-matrise
* `rindex` : ordid - dokumentid : linjenummer-matrise

Når dokument `url` og versjonsnummer `ver` sendes inn, sjekkes det i `doc` tabellen om dokumentet finnes. Hvis det ikke finnes, opprettes en invertert indeks. Samtidig fjernes inverterte indekser for dokumenter som ikke er sendt inn.

Dette gjør det mulig å oppnå inkrementell indeksering, noe som reduserer beregningsmengden.

I front-end-interaksjonen kan indekslastingsfremdriftslinjen vises for å unngå etterslep ved første gangs lasting. Se "Fremdriftslinje med animasjon, basert på en enkelt progress + Ren css Implementering" [Engelsk](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Kinesisk](//juejin.cn/post/7413586285954154522).

### IndexedDB Høy Samtidig Skriving

Prosjektet er basert på IndexedDBs asynkrone innkapsling [idb](//www.npmjs.com/package/idb).

IndexedDBs lesing og skriving er asynkrone. Når indeksen bygges, lastes dokumentene samtidig for å lage indeksen.

For å unngå datatap forårsaket av konkurrerende skriving, kan du bruke følgende `coffeescript` kode for å legge til en `ing` cache mellom lesing og skriving for å avskjære konkurrerende skrivinger.

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

## Prefiks Sanntidssøk

For å vise søkeresultater mens brukeren skriver, for eksempel når `wor` skrives inn, vises ord med prefiks `wor` som `words` og `work`.

![](//p.3ti.site/1727684944.avif)

Søkekjernen vil bruke `prefix` tabellen for det siste ordet etter ordsegmentering for å finne alle ord med prefiks, og søke dem i rekkefølge.

Anti-shake funksjon `debounce` brukes også i front-end interaksjonen (implementert som følger) for å redusere frekvensen av brukerinndata som utløser søk og redusere beregningsmengden.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Presisjon Og Tilbakekalling

Søket vil først segmentere søkeordene som er angitt av brukeren.

Anta at det er `N` ord etter ordsegmenteringen. Når resultater returneres, vil resultater som inneholder alle søkeordene bli returnert først, deretter resultater som inneholder `N-1`, `N-2`, ..., `1` søkeord.

Dette sikrer nøyaktigheten av søket, og resultatene som lastes inn etterpå (ved å klikke på "last mer"-knappen) sikrer tilbakekallingsfrekvensen.

![](//p.3ti.site/1727684564.avif)

## Last På Forespørsel

For å forbedre responshastigheten bruker søket `yield` generatoren for å implementere on-demand lasting, og returnerer `limit` gang et resultat spørres.

Merk at hver gang du søker på nytt etter `yield`, må du gjenåpne en spørringstransaksjon på `IndexedDB`.

## Prefiks Sanntidssøk

For å vise søkeresultater mens brukeren skriver, for eksempel når `wor` skrives inn, vises ord med prefiks `wor` som `words` og `work`.

![](//p.3ti.site/1727684944.avif)

Søkekjernen vil bruke `prefix` tabellen for det siste ordet etter ordsegmentering for å finne alle ord med prefiks, og søke dem i rekkefølge.

Anti-shake funksjon `debounce` brukes også i front-end interaksjonen (implementert som følger) for å redusere frekvensen av brukerinndata som utløser søk og redusere beregningsmengden.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Tilgjengelig Offline

Indekstabellen lagrer ikke originalteksten, bare ordene, noe som reduserer lagringsmengden.

Utheving av søkeresultater krever at den opprinnelige teksten lastes inn på nytt, og ved å bruke `service worker` kan man unngå gjentatte nettverksforespørsler.

Samtidig, fordi `service worker` cacher alle artikler, er hele nettstedet, inkludert søket, tilgjengelig frakoblet når brukeren utfører et søk.

## Visningsoptimalisering Av MarkDown-Dokumenter

`i18n.site` rene front-end søkeløsning er optimalisert for `MarkDown` dokumenter.

Når søkeresultater vises, vil kapittelnavnet vises, og kapittelet vil bli navigert til når du klikker.

![](//p.3ti.site/1727686552.avif)

## Oppsummer

Invertert fulltekstsøk implementert utelukkende på grensesnittet, ingen server nødvendig. Den egner seg veldig godt for små og mellomstore nettsider som dokumenter og personlige blogger.

`i18n.site` åpen kildekode egenutviklet rene front-end-søk, liten i størrelse og rask respons, løser manglene ved dagens rene front-end fulltekstsøk og gir en bedre brukeropplevelse.