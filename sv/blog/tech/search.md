---

brief: |
  i18n.site stöder nu serverlös fulltextsökning.

  Den här artikeln introducerar implementeringen av ren front-end fulltextsökteknik, inklusive inverterat index byggt av IndexedDB, prefixsökning, ordsegmenteringsoptimering och flerspråksstöd.

  Jämfört med befintliga lösningar är i18n.sites rena frontend-fulltextsökning liten och snabb, lämplig för små och medelstora webbplatser som dokument och bloggar, och är tillgänglig offline.

---

# Ren Front-End Inverterad Fulltextsökning

## Sekvens

Efter flera veckors utveckling stöder [i18n.site](//i18n.site) (ett rent statiskt markdown multilingualtranslation & webbplatsbyggande verktyg) nu ren front-end fulltextsökning.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Den här artikeln kommer att dela den tekniska implementeringen av `i18n.site` ren front-end full-text sökning. [i18n.site](//i18n.site) för att uppleva sökeffekten.

Kod öppen : [Sök kärnan](//github.com/i18n-site/ie/tree/main/qy) / [interaktivt gränssnitt](//github.com/i18n-site/plugin/tree/main/qy)

## En Recension Av Serverlösa Fulltextsöklösningar

För små och medelstora rent statiska webbplatser som dokument/personliga bloggar är det för tungt att bygga en egenbyggd fulltextsökningsbackend, och tjänstefri fulltextsökning är det vanligaste valet.

Serverlösa fulltextsöklösningar delas in i två breda kategorier:

För det första, liknande [algolia.com](//algolia.com) Tredjepartssöktjänstleverantörer tillhandahåller front-end-komponenter för fulltextsökning.

Sådana tjänster kräver betalning baserat på sökvolym och är ofta otillgängliga för användare i Kina på grund av problem som webbplatsefterlevnad.

Det kan inte användas offline, kan inte användas på intranätet och har stora begränsningar. Den här artikeln diskuterar inte mycket.

Den andra är ren front-end fulltextsökning.

För närvarande inkluderar vanliga rena front-end-fulltextsökningar [lunrjs](//lunrjs.com) och [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (baserat på `lunrjs` sekundär utveckling).

`lunrjs` Det finns två sätt att bygga index, och båda har sina egna problem.

1. Förbyggda indexfiler

   Eftersom indexet innehåller ord från alla dokument är det stort.
   Närhelst ett dokument läggs till eller ändras måste en ny indexfil laddas.
   Det kommer att öka användarens väntetid och förbruka mycket bandbredd.

2. Ladda dokument och skapa index i farten

   Att bygga ett index är en beräkningsintensiv uppgift Att bygga om indexet varje gång du kommer åt det kommer att orsaka uppenbara fördröjningar och dålig användarupplevelse.

---

Förutom `lunrjs` finns det några andra fulltextsöklösningar, som :

[fusejs](//www.fusejs.io) , beräkna likheten mellan strängar för att söka.

Den här lösningens prestanda är extremt dålig och kan inte användas för fulltextsökning (se [Fuse.js Lång fråga tar mer än 10 sekunder, hur optimerar man den?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , använd Bloom-filtret för att söka, kan inte användas för prefixsökning (skriv till exempel `goo` , sök `good` , `google` ) och kan inte uppnå liknande automatisk slutförande.

På grund av bristerna i de befintliga lösningarna utvecklade `i18n.site` en ny ren front-end fulltextsöklösning, som har följande egenskaper :

1. Stöder flerspråkig sökning och är liten i storleken. Storleken på sökkärnan efter paketering `gzip` är `6.9KB` (för jämförelse, storleken på `lunrjs` är `25KB` ).
1. Bygg ett inverterat index baserat på `indexedb` , som tar upp mindre minne och är snabbt.
1. När dokument läggs till/ändras, återindexeras endast de tillagda eller ändrade dokumenten, vilket minskar antalet beräkningar.
1. Stöder prefixsökning och kan visa sökresultat i realtid medan användaren skriver.
1. Tillgänglig offline

Nedan kommer `i18n.site` tekniska implementeringsdetaljer att presenteras i detalj.

## Flerspråkig Ordsegmentering

Ordsegmentering använder webbläsarens ursprungliga ordsegmentering `Intl.Segmenter` , och alla vanliga webbläsare stöder detta gränssnitt.

![](//p.3ti.site/1727667759.avif)

Ordet segmentering `coffeescript` koden är som följer

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

* `/\p{P}/` är ett reguljärt uttryck som matchar skiljetecken. Specifika matchande symboler inkluderar: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` beror på att `Firefox` webbläsarordsegmentering inte segment `. ` .</li>


## Indexbyggnad

5 objektlagringstabeller skapades i `IndexedDB` :

* `word` : id -
* `doc` : id - Dokument url - Dokumentets versionsnummer
* `docWord` : Array av dokument id - word id
* `prefix` : Array av prefix - ord id
* `rindex` : Word id - Dokument id : Array av radnummer

Skicka in arrayen för dokument `url` och versionsnummer `ver` och sök om dokumentet finns i tabell `doc` Om det inte finns, skapa ett inverterat index. Ta samtidigt bort det inverterade indexet för de dokument som inte skickades in.

På detta sätt kan inkrementell indexering uppnås och mängden beräkningar minskas.

I front-end-interaktion kan indexets förloppsindikator visas för att undvika fördröjning vid laddning för första gången. Se "Förloppsindikator med animering, baserat på en singel progress + Ren css Implementering" [engelska](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [kinesiska](//juejin.cn/post/7413586285954154522) .

### IndexedDB Hög Samtidig Skrivning

Projektet är [idb](//www.npmjs.com/package/idb) baserat på den asynkrona inkapslingen av IndexedDB

IndexedDB läser och skriver är asynkrona. När du skapar ett index kommer dokument att laddas samtidigt för att skapa indexet.

För att undvika partiell dataförlust orsakad av konkurrerande skrivning, kan du hänvisa till `coffeescript` koden nedan och lägga till en `ing` cache mellan läsning och skrivning för att fånga upp konkurrerande skrivningar.

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

## Precision Och Återkallelse

Sökningen segmenterar först de sökord som användaren angett.

Antag att det finns `N` ord efter ordsegmenteringen. När du returnerar resultat kommer resultat som innehåller alla nyckelord att returneras först, och sedan kommer resultat som innehåller `N-1` , `N-2` ,..., `1` nyckelord att returneras.

Sökresultaten som visas först säkerställer att frågan är korrekt, och resultaten som laddas därefter (klicka på knappen Ladda mer) säkerställer återkallningsfrekvensen.

![](//p.3ti.site/1727684564.avif)

## Ladda På Begäran

För att förbättra svarshastigheten använder sökningen `yield` -generatorn för att implementera on-demand-laddning och returnerar `limit` gång ett resultat efterfrågas.

Observera att varje gång du söker igen efter `yield` måste du öppna en frågetransaktion på `IndexedDB` igen.

## Prefix Realtidssökning

För att visa sökresultat medan användaren skriver, till exempel när `wor` skrivs in, visas ord med `wor` som `words` och `work` prefix.

![](//p.3ti.site/1727684944.avif)

Sökkärnan kommer att använda `prefix` tabellen för det sista ordet efter ordsegmentering för att hitta alla ord med prefix och söka i följd.

Anti-shake-funktionen `debounce` används också i front-end-interaktion (implementerad enligt följande) för att minska frekvensen av användarinmatning som utlöser sökningar och minska mängden beräkningar.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Tillgänglig Offline

Indextabellen lagrar inte originaltexten, bara orden, vilket minskar mängden lagring.

Att markera sökresultat kräver att originaltexten laddas om, och matchande `service worker` kan undvika upprepade nätverksförfrågningar.

Samtidigt, eftersom `service worker` cachar alla artiklar, är hela webbplatsen, inklusive sökningen, tillgänglig offline när användaren väl utför en sökning.

## Visningsoptimering Av MarkDown-Dokument

`i18n.site` :s rena front-end söklösning är optimerad för `MarkDown` dokument.

När du visar sökresultat kommer kapitelnamnet att visas och kapitlet navigeras när du klickar på det.

![](//p.3ti.site/1727686552.avif)

## Sammanfatta

Inverterad fulltextsökning implementerad enbart på användargränssnittet, ingen server krävs. Den är mycket lämplig för små och medelstora webbplatser som dokument och personliga bloggar.

`i18n.site` Öppen källkod egenutvecklad ren front-end-sökning, liten till storleken och snabb respons, löser bristerna i den nuvarande rena front-end-fulltextsökningen och ger en bättre användarupplevelse.