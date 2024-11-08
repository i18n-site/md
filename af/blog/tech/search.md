---

brief: |
  i18n.site ondersteun nou bedienerlose voltekssoektog.

  Hierdie artikel stel die implementering van suiwer front-end volteks soektegnologie bekend, insluitend omgekeerde indeks gebou deur IndexedDB, voorvoegselsoektog, woordsegmenteringsoptimalisering en multi-taalondersteuning.

  In vergelyking met bestaande oplossings, is i18n.site se suiwer voorkant-voltekssoektog klein en vinnig, geskik vir klein en mediumgrootte webwerwe soos dokumente en blogs, en is vanlyn beskikbaar.

---

# Suiwer Front-End Omgekeerde Volteks Soektog

## Volgorde

Na 'n paar weke van ontwikkeling, ondersteun [i18n.site](//i18n.site) ('n suiwer statiese markdown veeltalige vertaling & webwerfbou-instrument) nou suiwer front-end volteks soektog.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Hierdie artikel sal die tegniese implementering van `i18n.site` suiwer voorkant-voltekssoektog deel [i18n.site](//i18n.site) die soekeffek te ervaar.

Kode : [Soek kern](//github.com/i18n-site/ie/tree/main/qy) / [interaktiewe koppelvlak](//github.com/i18n-site/plugin/tree/main/qy)

## 'n Oorsig Van Bedienerlose Volteks-Soekoplossings

Vir klein en mediumgrootte suiwer statiese webwerwe soos dokumente/persoonlike blogs, is dit te swaar om 'n selfgeboude voltekssoektog-agtergrond te bou, en diensvrye voltekssoektog is die meer algemene keuse.

Bedienerlose volteks soekoplossings val in twee breë kategorieë:

Eerstens, [algolia.com](//algolia.com) derdeparty-soekdiensverskaffers verskaf front-end-komponente vir voltekssoektog.

Sulke dienste vereis betaling gebaseer op soekvolume, en is dikwels nie beskikbaar vir gebruikers op die vasteland van China nie weens kwessies soos webwerf-nakoming.

Dit kan nie vanlyn gebruik word nie, kan nie op die intranet gebruik word nie, en het groot beperkings. Hierdie artikel bespreek nie veel nie.

Die tweede is suiwer front-end volteks soektog.

Tans sluit algemene suiwer voorkant-voltekssoektogte in [lunrjs](//lunrjs.com) en [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (gebaseer op `lunrjs` sekondêre ontwikkeling).

`lunrjs` Daar is twee maniere om indekse te bou, en albei het hul eie probleme.

1. Voorafgeboude indekslêers

   Omdat die indeks woorde uit alle dokumente bevat, is dit groot in grootte.
   Wanneer 'n dokument bygevoeg of gewysig word, moet 'n nuwe indekslêer gelaai word.
   Dit sal die gebruiker se wagtyd verhoog en baie bandwydte verbruik.

2. Laai dokumente en bou indekse op die vlieg

   Die bou van 'n indeks is 'n berekeningsintensiewe taak Om die indeks te herbou elke keer as jy dit ingaan, sal duidelike vertragings en swak gebruikerservaring veroorsaak.

---

Benewens `lunrjs` , is daar 'n paar ander volteks soekoplossings, soos :

[fusejs](//www.fusejs.io) bereken die ooreenkoms tussen stringe om te soek.

Die werkverrigting van hierdie oplossing is uiters swak en kan nie vir voltekssoektog gebruik word nie (sien [Fuse.js Lang navraag neem meer as 10 sekondes, hoe om dit te optimaliseer?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , gebruik Bloom-filter om te soek, kan nie vir voorvoegselsoektog gebruik word nie (tik byvoorbeeld `goo` , soek `good` , `google` ), en kan nie soortgelyke outomatiese voltooiingseffek bereik nie.

As gevolg van die tekortkominge van die bestaande oplossings, het `i18n.site` 'n nuwe suiwer front-end volteks soekoplossing ontwikkel, wat die volgende kenmerke het :

1. Ondersteun multi-taal soektog en is klein in grootte Die grootte van die soek kern na verpakking `gzip` is `6.9KB` (ter vergelyking, die grootte van `lunrjs` is `25KB` ).
1. Bou 'n omgekeerde indeks gebaseer op `indexedb` , wat minder geheue opneem en vinnig is.
1. Wanneer dokumente bygevoeg/gewysig word, word slegs die bygevoegde of gewysigde dokumente weer geïndekseer, wat die hoeveelheid berekeninge verminder.
1. Ondersteun voorvoegselsoektog en kan soekresultate intyds vertoon terwyl die gebruiker tik.
1. Vanlyn beskikbaar

Hieronder sal `i18n.site` tegniese implementeringbesonderhede in detail bekendgestel word.

## Meertalige Woordsegmentering

Woordsegmentering gebruik die blaaier se inheemse woordsegmentering `Intl.Segmenter` , en alle hoofstroomblaaiers ondersteun hierdie koppelvlak.

![](//p.3ti.site/1727667759.avif)

Die woordsegmentasie `coffeescript` kode is soos volg

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

* `/\p{P}/` is 'n gereelde uitdrukking wat ooreenstem met leestekens. Spesifieke bypassende simbole sluit in: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` is omdat `Firefox` blaaierwoordsegmentering nie `. ` segmenteer nie.</li>


## Indeks Gebou

5 voorwerpbergingstafels is in `IndexedDB` geskep :

* `word` : id -
* `doc` : id - Dokument url - Dokumentweergawenommer
* `docWord` : Skikking van dokument id - woord id
* `prefix` : Skikking van voorvoegsel - woord id
* `rindex` : Word id - Dokument id : Skikking van lynnommers

Slaag die skikking van dokument `url` en weergawe nommer `ver` in, en soek of die dokument bestaan in tabel `doc` As dit nie bestaan nie, skep 'n omgekeerde indeks. Verwyder terselfdertyd die omgekeerde indeks vir daardie dokumente wat nie ingedien is nie.

Op hierdie manier kan inkrementele indeksering bereik word en die hoeveelheid berekening word verminder.

In die voorkant-interaksie kan die [laai](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) -vorderingsbalk css die indeks vertoon word / die progress + te vermy wanneer [dit](//juejin.cn/post/7413586285954154522) vir die eerste keer gelaai word.

### Geindekseerde DB Hoë Gelyktydige Skryf

Die projek is [idb](//www.npmjs.com/package/idb) gebaseer op die asinchroniese inkapseling van IndexedDB

IndexedDB lees en skryf is asynchronies. Wanneer 'n indeks geskep word, sal dokumente gelyktydig gelaai word om die indeks te skep.

Om gedeeltelike dataverlies wat deur mededingende skryfwerk veroorsaak word, te vermy, kan jy na die `coffeescript` kode hieronder verwys en 'n `ing` kas tussen lees en skryf byvoeg om mededingende skryfwerk te onderskep.

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

## Presisie en Herroeping

Die soektog sal eers die sleutelwoorde segmenteer wat deur die gebruiker ingevoer is.

Aanvaar dat daar `N` woorde na die woordsegmentering is Wanneer resultate teruggestuur word, sal resultate wat alle sleutelwoorde bevat, eerste teruggestuur word, en dan sal resultate wat `N-1` , `N-2` ,..., `1` sleutelwoorde bevat.

Die soekresultate wat eers vertoon word, verseker die akkuraatheid van die navraag, en die resultate wat daarna gelaai word (klik op die laai meer-knoppie) verseker die herroeptempo.

![](//p.3ti.site/1727684564.avif)

## Laai Op Aanvraag

Om die reaksiespoed te verbeter, gebruik die soektog die `yield` generator om laai op aanvraag te implementeer, en keer terug `limit` keer as 'n resultaat navraag gedoen word.

Let daarop dat elke keer as jy weer na `yield` soek, jy 'n navraagtransaksie van `IndexedDB` moet heropen.

## Voorvoegsel Intydse Soektog

Om soekresultate te vertoon terwyl die gebruiker tik, byvoorbeeld, wanneer `wor` ingevoer word, word woorde wat met `wor` voorvoeg, soos `words` en `work` vertoon.

![](//p.3ti.site/1727684944.avif)

Die soekkern sal die `prefix` tabel vir die laaste woord na woordsegmentering gebruik om alle woorde wat daarmee voorafgaan te vind, en in volgorde te soek.

Anti-skud funksie `debounce` word ook gebruik in voorkant-interaksie (soos geïmplementeer) om die frekwensie van gebruikerinvoer wat soektogte veroorsaak, te verminder en die hoeveelheid berekening te verminder.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Vanlyn Beskikbaar

Die indekstabel stoor nie die oorspronklike teks nie, slegs die woorde, wat die hoeveelheid berging verminder.

Om soekresultate uit te lig, vereis dat die oorspronklike teks herlaai word, en passing `service worker` kan herhaalde netwerkversoeke vermy.

Terselfdertyd, omdat `service worker` alle artikels kas, sodra die gebruiker 'n soektog uitvoer, is die hele webwerf, insluitend die soektog, vanlyn beskikbaar.

## Vertoon Optimalisering Van MarkDown-Dokumente

`i18n.site` se suiwer front-end soek oplossing is geoptimaliseer vir `MarkDown` dokumente.

Wanneer soekresultate vertoon word, sal die hoofstuknaam vertoon word en die hoofstuk sal navigeer word wanneer daarop geklik word.

![](//p.3ti.site/1727686552.avif)

## Som Op

Omgekeerde voltekssoektog wat suiwer aan die voorkant geïmplementeer is, geen bediener benodig nie. Dit is baie geskik vir klein en medium-grootte webwerwe soos dokumente en persoonlike blogs.

`i18n.site` Oopbron self-ontwikkelde suiwer front-end soektog, klein in grootte en vinnige reaksie, los die tekortkominge van die huidige suiwer front-end volteks soektog op en bied 'n beter gebruikerservaring.