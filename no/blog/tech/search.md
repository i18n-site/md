# Ren front-end invertert fulltekstsøk

## Sequencing

Etter flere uker med utvikling, støtter [i18n.site](//i18n.site) (et rent statisk markdown flerspråklig oversettelse & nettstedbyggingsverktøy) nå rent front-end fulltekstsøk.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Denne artikkelen vil dele implementeringen av `i18n.site` ren front-end fulltekst-søketeknologi. [i18n.site](//i18n.site) Du kan oppleve søkeeffekten.

Kode åpen [kildekode](//github.com/i18n-site/plugin/tree/main/qy) [søkekjerne](//github.com/i18n-site/ie/tree/main/qy) /

## En oversikt over serverløse fulltekstsøkeløsninger

For små nettsider som dokumenter/personlige blogger som er rent statiske, er det utvilsomt for tungt å bygge en fulltekstsøk-backend selv, og fulltekstsøk uten tjenester er utvilsomt en bedre vekt.

Eksisterende serverløse fulltekstsøkeløsninger faller inn i to brede kategorier.

Den ene er en tredjeparts søketjenesteleverandør som ligner på [algolia.com](//algolia.com) som gir front-end fulltekst søkekomponenter.

Slike tjenester krever betaling og er ikke tilgjengelige for brukere i fastlands-Kina på grunn av problemer med overholdelse av nettstedet.

Den kan ikke brukes offline, kan ikke brukes på intranettet, og har store begrensninger. Denne artikkelen diskuterer ikke mye.

Det andre er rent front-end fulltekstsøk.

De mest kjente rene front-end-fulltekstsøkene inkluderer [lunrjs](https://lunrjs.com) og [ElasticLunr.js][https://github.com/weixsong/elasticlunr.js](基于`lunrjs`二次开发)。

`lunrjs` har to måter å bygge indekser på, men begge har sine egne problemer.

1. Forhåndsbygde indeksfiler

   Fordi indeksen inneholder alle dokumentenes ord, er den stor i størrelse.
   Hver gang dokumentet endres, må en ny indeksfil lastes inn.
   Dette vil øke brukerens ventetid og forbruke mye båndbredde.

2. Last inn dokumenter og bygg indekser på farten

   Bygging av indekser er en beregningsintensiv oppgave. Hver gang du besøker, må indeksen gjenoppbygges, noe som vil føre til merkbar forsinkelse og dårlig brukeropplevelse.

I tillegg til `lunrjs` finnes det noen andre fulltekstsøkeløsninger, som:

[fusejs](https://www.fusejs.io), som beregner likheten mellom strenger for å søke.

Denne løsningen har svært dårlig ytelse og kan ikke brukes til fulltekstsøk (se [Fuse.js Langt søk tar mer enn 10 sekunder, hvordan optimaliseres det?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](https://github.com/tinysearch/tinysearch), som bruker Bloom-filter for å søke, kan ikke brukes til prefikssøk (for eksempel, når du skriver `goo`, kan du ikke søke etter `good` eller `google`), og kan ikke oppnå lignende automatisk fullføringseffekt.

Ut av misnøye med eksisterende løsninger har `i18n.site` utviklet en ny ren front-end fulltekstsøkeløsning med følgende egenskaper:

1. Støtter flerspråklig søk, er liten i størrelse. Søkekjernen pakket med `gzip` er `6.9KB` (i motsetning til `lunrjs` som er `25KB`)
1. Bygger en invertert indeks basert på `IndexedDB`, som bruker lite minne og er rask
1. Når dokumenter legges til/endres, blir bare de tilføyde eller modifiserte dokumentene re-indeksert, noe som reduserer mengden beregninger
1. Støtter prefikssøk, som kan vise søkeresultater i sanntid mens brukeren skriver
1. Tilgjengelig offline

Nedenfor vil vi detaljert beskrive `i18n.site` tekniske implementeringsdetaljer.

## Flerspråklig ordsegmentering

Segmentering av ord brukes nettleserens opprinnelige segmentering `Intl.Segmenter`, som støttes av alle moderne nettlesere.

![](https://p.3ti.site/1727667759.avif)

Segmenterings `coffeescript` koden er som følger:

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

Hvor:

* `/\p{P}/` er et regulært uttrykk som matcher tegnsettingstegn. De spesifikke symbolene som matcher inkluderer: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` er fordi `Firefox` nettleserordsegmentering ikke segmenterer `.` .</li>


## Indeksbygging

5 objektlagringstabeller ble opprettet i `IndexedDB`:

* Fem objektlagringstabeller ble opprettet i `IndexedDB`:
* `word`: id - ord
* `doc`: id - dokumenturl - dokumentversjonsnummer
* `docWord`: dokumentid - ordid-matrise
* `prefix`: prefiks - ordid-matrise

Send inn en array med dokumentets `url` og versjonsnummer `ver`, og sjekk om dokumentet finnes i tabellen `doc`. Hvis det ikke finnes, opprett en invertert indeks. Fjern samtidig den inverterte indeksen for de dokumentene som ikke er sendt inn.

På denne måten kan inkrementell indeksering oppnås, noe som reduserer beregningsmengden.

I front-end-interaksjonen kan en fremdriftslinje for indekslasting vises for å unngå etterslep ved første lasting. Se "Fremdriftslinje med animasjon, basert på en enkelt progress + Ren css Implementering" [Engelsk](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Kinesisk](https://juejin.cn/post/7413586285954154522) .

### IndexedDB høy samtidig skriving

Prosjektet er utviklet basert på asynkron innkapsling av IndexedDB ved hjelp av [idb](https://www.npmjs.com/package/idb).

IndexedDB-lesing og -skriving er asynkrone. Når en indeks opprettes, lastes dokumentene samtidig for å lage indeksen.

For å unngå delvis datatap på grunn av konkurrerende skriving, kan du referere til følgende `coffeescript`-kode og legge til en `ing` cache mellom lesing og skriving for å avskjære konkurrerende skrivinger.

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

## Prefikssøk i sanntid

For å vise søkeresultater mens brukeren skriver, for eksempel når `wor` skrives inn, vises ord med prefikset `wor` som `words` og `work`.

![](https://p.3ti.site/1727684944.avif)

Søkekjernen bruker `prefix`-tabellen for det siste ordet etter ordsegmentering for å finne alle ord med prefikset og søke i rekkefølge.

Anti-shake-funksjonen `debounce` brukes også i front-end-interaksjonen (som følger implementert) for å redusere frekvensen av brukerinndata som utløser søk og redusere beregningsmengden.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Presisjon og full dekning

Nøyaktighet og tilbakekallingsfrekvens

Anta at det er `N` ord etter ordsegmenteringen. Når resultater returneres, vil først resultater som inneholder alle søkeord vises, etterfulgt av resultater som inneholder `N-1`, `N-2`, ..., `1` nøkkelord.

Søkeresultatene som vises først sikrer nøyaktigheten av søket, mens resultater som lastes inn senere (ved å klikke på "Last mer"-knappen) sikrer full dekning.

![](https://p.3ti.site/1727684564.avif)

## Last på forespørsel

For å forbedre responsenhet, bruker søket `yield`-generatoren for å implementere lasting på forespørsel, og returnerer `limit` resultater hver gang.

For å forbedre responshastigheten bruker søket `yield` generatoren for å implementere on-demand lasting, og returnerer resultater hver gang `limit` antall resultater er funnet.

## Prefikssøk i sanntid

For å vise søkeresultater mens brukeren skriver, for eksempel når `wor` skrives inn, vises ord med prefikset `wor` som `words` og `work`.

![](https://p.3ti.site/1727684944.avif)

Søkekjernen bruker `prefix`-tabellen for det siste ordet etter ordsegmentering for å finne alle ord med prefikset og søke i rekkefølge.

Anti-shake-funksjonen `debounce` brukes også i front-end-interaksjonen (som følger implementert) for å redusere frekvensen av brukerinndata som utløser søk og redusere beregningsmengden.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Tilgjengelig offline

Tilgjengelig offline

Utheving av søkeresultater krever at den opprinnelige teksten lastes inn på nytt, og ved bruk av `service worker` kan man unngå gjentatte nettverksforespørsler.

Søkeresultatene må lastes inn på nytt for å bli uthevet, og ved å bruke `service worker` kan gjentatte nettverksforespørsler unngås.

## Visningsoptimalisering av Markdown-dokumenter

`i18n.site` rene front-end søkeløsning er optimalisert for `MarkDown` dokumenter.

Når søkeresultater vises, vises kapittelnavnet, og kapittelet navigeres til når det klikkes på.

![](https://p.3ti.site/1727686552.avif)

## Summary

Oppsummering

Rent front-end implementert invertert fulltekstsøk, med rask respons og ingen behov for en server.