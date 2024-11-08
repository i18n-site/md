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

Denne artikkelen vil dele den tekniske implementeringen av `i18n.site` rent front-end fulltekstsøk. [i18n.site](//i18n.site) for å oppleve søkeeffekten.

Kode åpen kildekode : [Søk i kjernen](//github.com/i18n-site/ie/tree/main/qy) / [interaktivt grensesnitt](//github.com/i18n-site/plugin/tree/main/qy)

## En Gjennomgang Av Serverløse Fulltekstsøkeløsninger

For små og mellomstore rent statiske nettsteder som dokumenter/personlige blogger er det for tungt å bygge en selvbygd fulltekstsøkeside, og tjenestefritt fulltekstsøk er det vanligste valget.

Serverløse fulltekstsøkeløsninger faller inn i to brede kategorier:

For det første tilbyr lignende [algolia.com](//algolia.com) Tredjeparts søketjenesteleverandører front-end-komponenter for fulltekstsøk.

Slike tjenester krever betaling basert på søkevolum, og er ofte utilgjengelige for brukere i fastlands-Kina på grunn av problemer som nettstedsoverholdelse.

Den kan ikke brukes offline, kan ikke brukes på intranettet, og har store begrensninger. Denne artikkelen diskuterer ikke mye.

Det andre er rent front-end fulltekstsøk.

For tiden inkluderer vanlige rene front-end fulltekstsøk [lunrjs](//lunrjs.com) og [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (basert på `lunrjs` sekundær utvikling).

`lunrjs` Det er to måter å bygge indekser på, og begge har sine egne problemer.

1. Forhåndsbygde indeksfiler

   Fordi indeksen inneholder ord fra alle dokumenter, er den stor i størrelse.
   Hver gang et dokument legges til eller endres, må en ny indeksfil lastes inn.
   Det vil øke brukerens ventetid og forbruke mye båndbredde.

2. Last inn dokumenter og bygg indekser på farten

   Å bygge en indeks er en beregningsintensiv oppgave Å gjenoppbygge indeksen hver gang du får tilgang til den vil føre til åpenbare etterslep og dårlig brukeropplevelse.

---

I tillegg til `lunrjs` finnes det noen andre fulltekstsøkeløsninger, som :

[fusejs](//www.fusejs.io) , beregne likheten mellom strenger for å søke.

Ytelsen til denne løsningen er ekstremt dårlig og kan ikke brukes til fulltekstsøk (se [Fuse.js Langt søk tar mer enn 10 sekunder, hvordan optimaliseres det?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , bruk Bloom-filteret for å søke, kan ikke brukes til prefikssøk (skriv for eksempel `goo` , søk `good` , `google` ), og kan ikke oppnå lignende automatisk fullføringseffekt.

På grunn av manglene ved de eksisterende løsningene utviklet `i18n.site` en ny ren front-end fulltekstsøkeløsning, som har følgende egenskaper :

1. Støtter flerspråklig søk og er liten i størrelse Størrelsen på søkekjernen etter pakking `gzip` er `6.9KB` (til sammenligning er størrelsen på `lunrjs` `25KB` ).
1. Bygg en invertert indeks basert på `indexedb` , som tar opp mindre minne og er rask.
1. Når dokumenter legges til/endres, blir bare de tilføyde eller modifiserte dokumentene re-indeksert, noe som reduserer mengden beregninger.
1. Støtter prefikssøk og kan vise søkeresultater i sanntid mens brukeren skriver.
1. Tilgjengelig offline

Nedenfor vil `i18n.site` tekniske implementeringsdetaljer bli introdusert i detalj.

## Flerspråklig Ordsegmentering

Ordsegmentering bruker nettleserens opprinnelige ordsegmentering `Intl.Segmenter` , og alle vanlige nettlesere støtter dette grensesnittet.

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

* `/\p{P}/` er et regulært uttrykk som samsvarer med tegnsettingstegn. Spesifikke samsvarende symboler inkluderer: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` er fordi `Firefox` nettleserordsegmentering ikke segmenterer `. ` .</li>


## Indeksbygg

5 objektlagringstabeller ble opprettet i `IndexedDB` :

* `word` : id -
* `doc` : id - Dokument url - Dokumentversjonsnummer
* `docWord` : Matrise av dokument id - ord id
* `prefix` : Matrise med prefiks - ord id
* `rindex` : Word id - Dokument id : Matrise med linjenummer

Send inn matrisen til dokument `url` og versjonsnummer `ver` , og søk om dokumentet finnes i tabell `doc` Hvis det ikke finnes, oppretter du en invertert indeks. Fjern samtidig den inverterte indeksen for de dokumentene som ikke ble sendt inn.

På denne måten kan inkrementell indeksering oppnås og beregningsmengden reduseres.

I front-end-interaksjon kan lastefremdriftslinjen til indeksen vises for å unngå etterslep ved innlasting for første gang Se "Fremdriftslinje med animasjon, basert på en enkelt progress + Ren css Implementering" [Engelsk](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Kinesisk](//juejin.cn/post/7413586285954154522) .

### IndexedDB Høy Samtidig Skriving

Prosjektet er [idb](//www.npmjs.com/package/idb) basert på asynkron innkapsling av IndexedDB

IndexedDB lesing og skriving er asynkrone. Når du oppretter en indeks, vil dokumenter lastes samtidig for å lage indeksen.

For å unngå delvis datatap forårsaket av konkurrerende skriving, kan du referere til `coffeescript` koden nedenfor og legge til en `ing` cache mellom lesing og skriving for å avskjære konkurrerende skrivinger.

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

## Presisjon Og Tilbakekalling

Søket vil først segmentere søkeordene som er angitt av brukeren.

Anta at det er `N` ord etter ordsegmenteringen. Når du returnerer resultater, vil resultater som inneholder alle søkeord bli returnert først, og deretter vil resultater som inneholder `N-1` , `N-2` ,..., `1` nøkkelord bli returnert.

Søkeresultatene som vises først, sikrer nøyaktigheten av søket, og resultatene som lastes inn etterpå (klikk på last mer-knappen) sikrer tilbakekallingsfrekvensen.

![](//p.3ti.site/1727684564.avif)

## Last På Forespørsel

For å forbedre responshastigheten bruker søket `yield` generatoren for å implementere on-demand lasting, og returnerer `limit` gang et resultat spørres.

Merk at hver gang du søker på nytt etter `yield` , må du gjenåpne en spørringstransaksjon på `IndexedDB` .

## Prefiks Sanntidssøk

For å vise søkeresultater mens brukeren skriver, for eksempel når `wor` skrives inn, vises ord med prefiks med `wor` som `words` og `work` .

![](//p.3ti.site/1727684944.avif)

Søkekjernen vil bruke `prefix` tabellen for det siste ordet etter ordsegmentering for å finne alle ord med prefiks, og søke i rekkefølge.

Anti-shake funksjon `debounce` brukes også i front-end interaksjon (implementert som følger) for å redusere frekvensen av brukerinndata som utløser søk og redusere mengden av beregninger.

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

Utheving av søkeresultater krever at den opprinnelige teksten lastes inn på nytt, og matchende `service worker` kan unngå gjentatte nettverksforespørsler.

Samtidig, fordi `service worker` cacher alle artikler, er hele nettstedet, inkludert søket, tilgjengelig frakoblet når brukeren utfører et søk.

## Visningsoptimalisering Av MarkDown-Dokumenter

`i18n.site` rene front-end søkeløsning er optimalisert for `MarkDown` dokumenter.

Når du viser søkeresultater, vil kapittelnavnet vises, og kapittelet vil bli navigert når du klikker på det.

![](//p.3ti.site/1727686552.avif)

## Oppsummer

Invertert fulltekstsøk implementert utelukkende på grensesnittet, ingen server nødvendig. Den egner seg veldig godt for små og mellomstore nettsider som dokumenter og personlige blogger.

`i18n.site` Åpen kildekode egenutviklet rene front-end-søk, liten i størrelse og rask respons, løser manglene ved dagens rene front-end fulltekstsøk og gir en bedre brukeropplevelse.