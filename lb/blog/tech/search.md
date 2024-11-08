---

brief: |
  i18n.site ënnerstëtzt elo serverlos Volltext Sich.

  Dësen Artikel stellt d'Ëmsetzung vun pure Front-End Volltext Sich Technologie vir, dorënner ëmgedréint Index gebaut vun IndexedDB, Präfix Sich, Wuert Segmentatioun Optimisatioun a Multi-Sprooch Ënnerstëtzung.

  Am Verglach mat existéierende Léisungen, i18n.site's pure Frontend Volltext Sich ass kleng a Gréisst a séier, gëeegent fir kleng a mëttelgrouss Websäite wéi Dokumenter a Blogs, an ass offline verfügbar.

---

# Pure Front-End Invertéiert Volltext Sich

## Sequenz

No e puer Wochen vun Entwécklung, [i18n.site](//i18n.site) (e reng statesche markdown Multilingual Translatioun & Websäit Gebai Outil) ënnerstëtzt elo reng Front-Enn Volltext Sich.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Dësen Artikel deelt d'technesch Ëmsetzung vun `i18n.site` pure Front-End Volltext Sich [i18n.site](//i18n.site) fir de Sicheffekt ze erliewen.

Code Open : [Sich Kernel](//github.com/i18n-site/ie/tree/main/qy) / [interaktiv Interface](//github.com/i18n-site/plugin/tree/main/qy)

## Eng Iwwerpréiwung Vu Serverlosen Volltext Sichléisungen

Fir kleng a mëttelgrouss reng statesch Websäite wéi Dokumenter / perséinlech Blogs, e selbstgebaute Volltext Sich Backend ze bauen ass ze schwéier, a Service-gratis Volltext Sich ass déi méi heefeg Wiel.

Serverlos Volltext Sichléisungen falen an zwou breet Kategorien:

Als éischt, [algolia.com](//algolia.com) Drëtt-Partei Sichserviceprovider bidden Front-End Komponenten fir Volltext Sich.

Esou Servicer erfuerderen Bezuelung baséiert op Sichvolumen, a sinn dacks net verfügbar fir Benotzer am Festland China wéinst Themen wéi Websäit Konformitéit.

Et kann net offline benotzt ginn, kann net am Intranet benotzt ginn, an huet grouss Aschränkungen. Dësen Artikel diskutéiert net vill.

Déi zweet ass reng Front-End Volltext Sich.

Am Moment sinn [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) pure Front `lunrjs` End Volltext Recherchen [lunrjs](//lunrjs.com)

`lunrjs` Et ginn zwou Méiglechkeeten fir Indexen ze bauen, a béid hunn hir eege Problemer.

1. Pre-gebaut Indexdateien

   Well den Index Wierder aus allen Dokumenter enthält, ass et grouss a Gréisst.
   All Kéier wann en Dokument derbäigesat oder geännert gëtt, muss eng nei Indexdatei gelueden ginn.
   Et wäert d'Waardezäit vum Benotzer erhéijen a vill Bandbreedung verbrauchen.

2. Lued Dokumenter a bauen Indexen op der Flucht

   En Index opzebauen ass eng rechenintensiv Aufgab Den Index opzebauen all Kéier wann Dir et zougitt wäert evident Lags a schlecht Benotzererfarung verursaachen.

---

Zousätzlech zu `lunrjs` ginn et e puer aner Volltext Sichléisungen, wéi :

[fusejs](//www.fusejs.io) berechent d'Ähnlechkeet tëscht Strings fir ze sichen.

D'Leeschtung vun dëser Léisung ass extrem schlecht a kann net fir Volltext Sich benotzt ginn (kuckt [Fuse.js Laang Ufro dauert méi wéi 10 Sekonnen, wéi optimiséieren ech se?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) benotzt Bloom Filter fir ze sichen, kann net fir Präfix Sich benotzt ginn (zum Beispill, gitt `goo` , Sich `good` , `google` ), a kann net ähnlechen automateschen Ofschlosseffekt erreechen.

Wéinst de Mängel vun den existente Léisungen huet `i18n.site` eng nei reng Front-End Volltext Sichléisung entwéckelt, déi folgend Charakteristiken huet :

1. `lunrjs` Multi-Sprooch Sich an ass `6.9KB` `gzip` Gréisst `25KB`
1. Baut en ëmgedréint Index baséiert op `indexedb` , dee manner Erënnerung ophëlt a séier ass.
1. Wann Dokumenter bäigefüügt/geännert ginn, ginn nëmmen déi bäigefüügt oder geännert Dokumenter nei indexéiert, wat d'Quantitéit u Berechnungen reduzéiert.
1. Ënnerstëtzt Präfix Sich a kann Sichresultater an Echtzäit weisen wärend de Benotzer tippt.
1. Offline verfügbar

Drënner ginn `i18n.site` technesch Ëmsetzungsdetailer am Detail agefouert.

## Méisproocheg Wuert Segmentatioun

Wuert Segmentatioun benotzt de Browser seng gebierteg Wuert Segmentatioun `Intl.Segmenter` , an all Mainstream Browser ënnerstëtzen dës Interface.

![](//p.3ti.site/1727667759.avif)

D'Wuert Segmentatioun `coffeescript` Code ass wéi follegt

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

an:

* `/\p{P}/` ass e reegelméissegen Ausdrock, deen d'Punctuatiounszeechen entsprécht Spezifesch passende Symboler enthalen: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` ass well `Firefox` Browser Wuert Segmentatioun net `. ` segmentéiert.</li>


## Index Gebai

5 Objektspäicherdëscher goufen an `IndexedDB` erstallt :

* `word` : id -
* `doc` : id - Dokument url - Dokument Versiounsnummer
* `docWord` : Array vum Dokument id - Wuert id
* `prefix` : Array vum Präfix - Wuert id
* `rindex` : Word id - Dokument id : Array vun Zeilnummeren

Gitt an d'Array vum Dokument `url` a Versioun Nummer `ver` , a sicht ob d'Dokument an der Tabell existéiert `doc` Wann et net existéiert, erstellt en ëmgedréint Index. Zur selwechter Zäit läscht den ëmgedréint Index fir déi Dokumenter déi net erakomm sinn.

Op dës Manéier kann inkrementell Indexéierung erreecht ginn an de Betrag vun der Berechnung reduzéiert ginn.

A Front-End Interaktioun kann d'Laascht Fortschrëtter Bar vum Index ugewisen ginn / [fir](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) d'Laag beim progress + fir d'éischte css ze vermeiden [.](//juejin.cn/post/7413586285954154522)

### IndexedDB Héich Concurrent Schreiwen

De Projet ass [idb](//www.npmjs.com/package/idb) baséiert op der asynchroner Encapsulation vun IndexedDB

IndexedDB Liest a Schreift sinn asynchron. Wann Dir en Index erstellt, ginn Dokumenter gläichzäiteg gelueden fir den Index ze kreéieren.

Fir deelweis Dateverloscht verursaacht duerch kompetitiv Schreiwen ze vermeiden, kënnt Dir op den `coffeescript` Code hei drënner verweisen an en `ing` Cache tëscht Liesen a Schreiwen addéieren fir kompetitiv Schreiwen z'ënnerscheeden.

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

## Präzisioun a Réckruff

D'Sich wäert als éischt d'Schlësselwieder segmentéieren, déi vum Benotzer agefouert goufen.

Gitt un datt et `N` Wierder no der Wuertsegmentatioun gëtt Wann Dir Resultater zréckkënnt, ginn d'Resultater mat all Schlësselwieder als éischt zréck, an dann Resultater mat `N-1` , `N-2` , ..., `1` Schlësselwieder ginn zréck.

D'Sichresultater, déi als éischt ugewise ginn, garantéieren d'Genauegkeet vun der Ufro, an d'Resultater, déi duerno gelueden ginn (klickt op de Luet méi Knäppchen) garantéieren den Réckruffquote.

![](//p.3ti.site/1727684564.avif)

## Lued Op Nofro

Fir d'Äntwertgeschwindegkeet ze verbesseren, benotzt d'Sich den `yield` Generator fir On-Demande Lueden ëmzesetzen, a gëtt `limit` Kéier wann e Resultat gefrot gëtt.

Bedenkt datt all Kéier wann Dir nach eng Kéier no `yield` sicht, musst Dir eng Ufrotransaktioun vun `IndexedDB` nei opmaachen.

## Präfix Echtzäit Sich

Fir d'Sichresultater ze weisen, während de Benotzer tippt, zum Beispill, wann `wor` aginn ass, gi Wierder mat `wor` wéi `words` an `work` ugewisen.

![](//p.3ti.site/1727684944.avif)

De Sichkär benotzt den `prefix` Tabelle fir dat lescht Wuert no der Wuertsegmentatioun fir all Wierder ze fannen, déi mat der Präfix sinn, a sichen an der Sequenz.

Anti-Shake Funktioun `debounce` gëtt och a Front-End Interaktioun benotzt (wéi follegt ëmgesat) fir d'Frequenz vum Benotzerinput ze reduzéieren, deen d'Sich ausléist an d'Quantitéit vun der Berechnung reduzéieren.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Offline Verfügbar

Den Indextabelle späichert den ursprénglechen Text net, nëmmen d'Wierder, wat d'Quantitéit u Späichere reduzéiert.

Highlighting Sichresultater erfuerdert d'Original Text nei ze lueden, a passend `service worker` kann widderholl Netzwierkfuerderunge vermeiden.

Zur selwechter Zäit, well `service worker` all Artikelen cachéiert, wann de Benotzer eng Sich mécht, ass déi ganz Websäit, och d'Sich, offline verfügbar.

## Display Optimiséierung Vu MarkDown Dokumenter

`i18n.site` seng reng Front-End Sichléisung ass fir `MarkDown` Dokumenter optimiséiert.

Wann Dir Sichresultater weist, gëtt de Kapitelnumm ugewisen an d'Kapitel gëtt navigéiert wann Dir klickt.

![](//p.3ti.site/1727686552.avif)

## Zesummefaassen

Invertéiert Volltext Sich reng um Frontend implementéiert, kee Server erfuerderlech. Et ass ganz gëeegent fir kleng a mëttelgrouss Websäite wéi Dokumenter a perséinlech Blogs.

`i18n.site` Open Source selwer entwéckelt pur Front-End Sich, kleng a Gréisst a séier Äntwert, léist d'Mängel vun der aktueller purer Front-End Volltext Sich a bitt eng besser Benotzererfarung.