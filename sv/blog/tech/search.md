# En ren front-end-inverterad fulltextsökning

## Sekvens

Efter några veckors utveckling stöder [i18n.site](//i18n.site) (ett rent statiskt markdown-multiprojektöversättnings- och webbplatsbyggverktyg) nu en ren front-end fulltextsökning.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Denna artikel kommer att dela tekniken bakom `i18n.site` för ren front-end fulltext sökning. Besök [i18n.site](//i18n.site) för att uppleva sökfunktionen.

Kod är öppen: [Sökcore](//github.com/i18n-site/ie/tree/main/qy) / [Interaktiv gränssnitt](//github.com/i18n-site/plugin/tree/main/qy)

## En översikt över serverlösa fulltextsöklösningar

För små och medelstora rent statiska webbplatser som dokument/personliga bloggar är det för tungt att bygga en egenbyggd fulltextsökningsbackend, och tjänstefri fulltextsökning är det vanligaste valet.

Serverlösa fulltext söklösningar kan delas in i två huvudkategorier:

Den ena är lik [algolia.com](//algolia.com), tredjeparts söktjänsteleverantörer som erbjuder front-end komponenter för fulltext sökning.

Dessa tjänster kräver betalning baserat på sökvolym och är ofta inte tillgängliga för användare i Kina på grund av合规性问题.

Kan inte användas offline, kan inte användas på intranätet, och har stora begränsningar. Denna artikel kommer inte att diskutera detta i detalj.

Den andra kategorin är ren front-end fulltext sökning.

Vanligt använda rena front-end-fulltextsökningar [lunrjs](/0) och [ ElasticLunr.js ] [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) .

`lunrjs` har två metoder för att skapa index, och båda har sina egna problem.

1. Förbyggda indexfiler

   Eftersom indexet innehåller alla dokumentord är det stort.
   Närhelst ett dokument läggs till eller ändras måste en ny indexfil laddas.
   Det kommer att öka användarens väntetid och förbruka mycket bandbredd.

2. Ladda dokument och skapa index i realtid

   Att bygga ett index är en beräkningsintensiv uppgift, och att bygga om indexet vid varje besök kommer att orsaka uppenbara fördröjningar och en dålig användarupplevelse.

---

Utanför `lunrjs` finns det några andra fulltextsöklösningar, såsom:

[fusejs](https://www.fusejs.io), som söker genom att beräkna likheten mellan strängar.

Denna lösning har mycket dålig prestanda och kan inte användas för fulltextsökning (se [Fuse.js Lång fråga tar mer än 10 sekunder, hur optimerar man den?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](https://github.com/tinysearch/tinysearch), som söker med hjälp av Bloom-filtrer, kan inte användas för prefixsökning (t.ex. att skriva `goo` och söka `good`, `google`), och kan inte uppnå en automatisk kompletteringseffekt.

På grund av de olika problemen med befintliga lösningar har `i18n.site` utvecklat en helt ny ren front-end fulltext söklösning med följande egenskaper:

1. Stöder flerspråkig sökning och är liten i storleken. Storleken på sökkärnan efter paketering `gzip` är `6.9KB` (för jämförelse, storleken på `lunrjs` är `25KB` )
1. Bygger ett inverterat index baserat på `IndexedDB`, vilket minskar minnesanvändningen och ökar hastigheten
1. När dokument läggs till/ändras, återindexeras endast de tillagda eller ändrade dokumenten, vilket minskar antalet beräkningar
1. Stöder prefixsökning, kan visa sökresultat i realtid medan användaren skriver
1. Tillgänglig Offline

Nedan kommer vi att ge en detaljerad beskrivning av `i18n.site` tekniska implementering.

## Flerspråkig ordsegmentering

Ordsegmentering använder webbläsarens ursprungliga segmenteringsfunktion `Intl.Segmenter`, som stöds av alla huvudwebbläsare.

![](https://p.3ti.site/1727667759.avif)

Ordsegmenterings `coffeescript`-koden är som följer:

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

Där:

* `/\p{P}/` är ett reguljärt uttryck som matchar skiljetecken, inklusive `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` beror på att `Firefox` webbläsarordsegmentering inte segmenterar `.` .</li>


## Indexbyggnad

5 objektlagringstabeller skapades i `IndexedDB` :

* 5 objektlagringstabeller skapades i `IndexedDB`:
* `word`: id - ord
* `doc`: id - dokumenturl - dokumentversionsnummer
* `docWord`: dokumentid - array av ordid
* `prefix`: prefix - array av ordid

Skicka in arrayen för dokument `url` och versionsnummer `ver` och sök om dokumentet finns i tabell `doc` Om det inte finns, skapa ett inverterat index. Ta samtidigt bort det inverterade indexet för de dokument som inte skickades in.

På detta sätt kan inkrementell indexering uppnås och mängden beräkningar minskas.

I front-end-interaktion kan indexets förloppsindikator visas för att undvika fördröjning vid laddning för första gången. Se "Förloppsindikator med animering, baserat på en singel progress + Ren css Implementering" [engelska](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [kinesiska](https://juejin.cn/post/7413586285954154522) .

### IndexedDB Hög Samtidig Skrivning

Projektet är [idb](https://www.npmjs.com/package/idb) baserat på den asynkrona inkapslingen av IndexedDB

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

## Prefix Realtidssökning

För att visa sökresultat medan användaren skriver, till exempel när `wor` skrivs in, visas ord med `wor` som `words` och `work` prefix.

![](https://p.3ti.site/1727684944.avif)

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

## Precision Och Återkallelse

Precision och täckning

Antag att det finns `N` ord efter ordsegmenteringen. När du returnerar resultat kommer resultat som innehåller alla nyckelord att returneras först, och sedan kommer resultat som innehåller `N-1` , `N-2` ,..., `1` nyckelord att returneras.

Sökresultaten som visas först säkerställer att frågan är korrekt, och resultaten som laddas därefter (klicka på knappen Ladda mer) säkerställer återkallningsfrekvensen.

![](https://p.3ti.site/1727684564.avif)

## Ladda På Begäran

För att förbättra svarshastigheten använder sökningen `yield` -generatorn för att implementera on-demand-laddning och returnerar `limit` gång ett resultat efterfrågas.

För att förbättra svarshastigheten använder sökningen en `yield`-generator för att implementera laddning på begäran och returnerar resultat varje gång `limit` antal resultat hittas.

## Prefix Realtidssökning

För att visa sökresultat medan användaren skriver, till exempel när `wor` skrivs in, visas ord med `wor` som `words` och `work` prefix.

![](https://p.3ti.site/1727684944.avif)

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

Tillgänglig offline

Att markera sökresultat kräver att originaltexten laddas om, och matchande `service worker` kan undvika upprepade nätverksförfrågningar.

Sökresultatmarkering kräver att originaltexten laddas om, och genom att använda `service worker` kan upprepade nätverksförfrågningar undvikas.

## Visningsoptimering Av MarkDown-Dokument

`i18n.site` :s rena front-end söklösning är optimerad för `MarkDown` dokument.

När du visar sökresultat kommer kapitelnamnet att visas, och kapitlet navigeras när du klickar på det.

![](https://p.3ti.site/1727686552.avif)

## Sammanfatta

Ren front-end implementerad inverted index fulltext sökning, ingen server behövs. Mycket lämplig för små och medelstora webbplatser som dokument och personliga bloggar.

`i18n.site` öppen källkod egenutvecklad ren front-end sökning, liten i storlek och snabb respons, löser de nuvarande problemen med ren front-end fulltext sökning och erbjuder en bättre användarupplevelse.