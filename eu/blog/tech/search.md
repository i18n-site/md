---

brief: |
  i18n.site-k zerbitzaririk gabeko testu osoko bilaketa onartzen du orain.

  Artikulu honek front-end testu osoko bilaketa teknologia hutsaren ezarpena aurkezten du, IndexedDB-k eraikitako indize alderantzikatua, aurrizkiaren bilaketa, hitzen segmentazioa optimizatzea eta hizkuntza anitzeko euskarria barne.

  Dauden soluzioekin alderatuta, i18n.site-ren frontend-eko testu osoko bilaketa hutsa tamaina txikia eta azkarra da, webgune txiki eta ertainetarako egokia, hala nola dokumentuak eta blogak, eta lineaz kanpo eskuragarri dago.

---

# Testu Osoko Alderantzizko Bilaketa Hutsa

## Sekuentzia

Hainbat aste garatu ondoren [i18n.site](//i18n.site) ( markdown hizkuntza anitzeko & -tresna estatiko hutsa) orain testu osoko bilaketa hutsa onartzen du.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Artikulu honek `i18n.site` frontend-eko testu osoko bilaketaren ezarpen teknikoa partekatuko du Bisitatu [i18n.site](//i18n.site)

Kode : [Bilatu nukleoa](//github.com/i18n-site/ie/tree/main/qy) / [interfaze interaktiboa](//github.com/i18n-site/plugin/tree/main/qy)

## Zerbitzaririk Gabeko Testu Osoko Bilaketa-Soluzioen Berrikuspena

Tamaina txiki eta ertaineko webgune estatiko hutsetarako, hala nola dokumentuak/blog pertsonalak, testu osoko bilaketaren backend auto-eraiki bat eraikitzea astunegia da, eta zerbitzurik gabeko testu osoko bilaketa aukera ohikoena da.

Zerbitzaririk gabeko testu osoko bilaketa-soluzioak bi kategoria handitan banatzen dira:

Lehenik eta behin [algolia.com](//algolia.com) antzeko bilaketa-zerbitzu hornitzaileek front-end osagaiak eskaintzen dituzte testu osoko bilaketarako.

Zerbitzu horiek bilaketa-bolumenaren arabera ordaintzea eskatzen dute, eta, askotan, Txina kontinentaleko erabiltzaileek ez dituzte erabilgarri webguneak betetzea bezalako arazoengatik.

Ezin da lineaz kanpo erabili, ezin da intranetean erabili eta muga handiak ditu. Artikulu honek ez du asko eztabaidatzen.

Bigarrena front-end testu osoko bilaketa hutsa da.

Gaur egun, frontend-eko testu osoko bilaketa arruntak [lunrjs](//lunrjs.com) eta [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) dira ( `lunrjs` bigarren mailako garapenean oinarrituta).

`lunrjs` Indizeak eraikitzeko bi modu daude, eta biek arazoak dituzte.

1. Aurrez eraikitako indize fitxategiak

   Aurkibideak dokumentu guztietako hitzak dituenez, tamaina handikoa da.
   Dokumentu bat gehitzen edo aldatzen den bakoitzean, indize fitxategi berri bat kargatu behar da.
   Erabiltzailearen itxarote-denbora handituko du eta banda-zabalera asko kontsumituko du.

2. Kargatu dokumentuak eta eraiki indizeak berehala

   Indize bat eraikitzea konputazio intentsiboa da. Indizea berregiten duzun bakoitzean atzerapen nabariak eta erabiltzailearen esperientzia txarra eragingo du.

---

`lunrjs` gain, testu osoko bilaketa-soluzio batzuk daude, adibidez :

[fusejs](//www.fusejs.io) , kalkulatu kateen arteko antzekotasuna bilatzeko.

Soluzio honen errendimendua oso eskasa da eta ezin da erabili testu osoko bilaketarako (ikus [Fuse.js Kontsulta luzeak 10 segundo baino gehiago behar ditu, nola optimizatu?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , erabili Bloom iragazkia bilatzeko, ezin da aurrizkiaren bilaketarako erabili (adibidez, idatzi `goo` , bilatu `good` , `google` ) eta ezin da antzeko osaketa automatikoko efekturik lortu.

Dauden soluzioen gabeziak direla eta, `i18n.site` frontend-eko testu osoko bilaketa-soluzio berri bat garatu zuen, ezaugarri hauek dituena :

1. Hizkuntza anitzeko bilaketa onartzen du eta tamaina txikia da Bilaketa-kernelaren tamaina `gzip` ontziaren ondoren `6.9KB` da (konparaziorako, `lunrjs` -ren tamaina `25KB` da).
1. Eraiki `indexedb` n oinarritutako alderantzizko indize bat, memoria gutxiago hartzen duena eta azkarra dena.
1. Dokumentuak gehitzen/aldatzen direnean, gehitutako edo aldatutako dokumentuak soilik indexatzen dira berriro, kalkulu kopurua murriztuz.
1. Aurrizkien bilaketa onartzen du eta bilaketa-emaitzak denbora errealean bistaratu ditzake erabiltzailea idazten ari den bitartean.
1. Lineaz kanpo erabilgarri

Jarraian, `i18n.site` ezarpen teknikoko xehetasunak xehetasunez aurkeztuko dira.

## Hitzen Segmentazioa Eleaniztun

Hitz-segmentazioak arakatzailearen jatorrizko hitz-segmentazioa `Intl.Segmenter` erabiltzen du, eta nabigatzaile nagusi guztiek interfaze hau onartzen dute.

![](//p.3ti.site/1727667759.avif)

Segmentazio hitzaren `coffeescript` kodea honako hau da

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

urtean:

* `/\p{P}/` puntuazio-markekin bat datorren adierazpen erregularra da, bat datozen ikur zehatzak: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` `Firefox` hitzen segmentazioa ez delako `. ` segmentatzen da.</li>


## Indizearen Eraikina

5 objektu biltegiratzeko taula sortu ziren `IndexedDB` -n :

* `word` : id -
* `doc` : id - url - zenbakia
* `docWord` dokumentuaren : id - word id
* `prefix` : - id
* `rindex` : id - Dokumentua id : lerro-zenbakien array

Pasatu `url` dokumentuaren eta `ver` bertsioaren matrizea, eta bilatu dokumentua `doc` taulan dagoen ala ez. Ez badago, sortu alderantzizko indize bat. Aldi berean, kendu alderantzizko indizea pasatu ez ziren dokumentuetarako.

Horrela, indexazio gehigarria lor daiteke eta kalkulu-kopurua murrizten da.

Front-end elkarrekintzan, indizearen kargaren aurrerapen-barra bistaratu daiteke lehen aldiz kargatzean atzerapena saihesteko. Ikus "Animazioarekin aurrerapen-barra, css inplementazio progress + oinarrituta" [ingelesa](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [txinera](//juejin.cn/post/7413586285954154522) .

### IndexedDB Aldibereko Idazkera Handia

Proiektua IndexedDB -ren kapsulatze asinkronoan oinarrituta [idb](//www.npmjs.com/package/idb) da.

IndexedDB irakurketak eta idazketak asinkronoak dira. Indize bat sortzean, dokumentuak aldi berean kargatuko dira indizea sortzeko.

Idazketa lehiakorrak eragindako datu-galera partziala saihesteko, beheko `coffeescript` kodeara jo dezakezu eta irakurketaren eta idazketaren artean `ing` cache bat gehi dezakezu lehian idazketak atzemateko.

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

## Zehaztasuna Eta Gogoratzea

Bilaketak erabiltzaileak sartutako gako-hitzak segmentatuko ditu lehenik.

Demagun hitz-segmentazioaren ondoren `N` hitz daudela Emaitzak itzultzean, gako-hitz guztiak dituzten emaitzak itzuliko dira lehenik, eta ondoren `N-1` , `N-2` ,..., `1` gako-hitzak dituzten emaitzak.

Bistaratzen diren bilaketa emaitzek kontsultaren zehaztasuna bermatzen dute, eta ondoren kargatutako emaitzek (egin klik Gehiago kargatu botoian) bermatzen duten tasa bermatzen dute.

![](//p.3ti.site/1727684564.avif)

## Eskaera Kargatu

Erantzun-abiadura hobetzeko, bilaketak `yield` sorgailua erabiltzen du eskaeraren araberako karga ezartzeko, eta emaitza bat kontsultatzen den `limit` itzultzen da.

Kontuan izan `yield` ondoren berriro bilatzen duzun bakoitzean `IndexedDB` kontsulta-transakzio bat berriro ireki behar duzula.

## Denbora Errealeko Bilaketa Aurrizkia

Erabiltzailea idazten ari den bitartean bilaketa-emaitzak bistaratzeko, adibidez, `wor` idazten denean, `wor` aurrizkiarekin duten hitzak bistaratzen dira, hala nola `words` eta `work` .

![](//p.3ti.site/1727684944.avif)

Bilaketa-nukleoak `prefix` taula erabiliko du hitzen segmentuaren ondoren azken hitzaren aurrizkia duten hitz guztiak aurkitzeko, eta sekuentzian bilatzeko.

Astinduaren aurkako `debounce` funtzioa front-end elkarrekintzan ere erabiltzen da (ondoren inplementatzen dena) erabiltzailearen sarreraren bilaketak abiarazteko maiztasuna murrizteko eta kalkulu kopurua murrizteko.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Lineaz Kanpo Erabilgarri

Indize-taulak ez du jatorrizko testua gordetzen, hitzak baizik, eta horrek biltegiratze kopurua murrizten du.

Bilaketa-emaitzak nabarmentzeko, jatorrizko testua berriro kargatu behar da, eta `service worker` bat etortzeak sareko eskaerak saihestu ditzake.

Aldi berean, `service worker` artikulu guztiak gordetzen dituenez, erabiltzaileak bilaketa bat egiten duenean, webgune osoa, bilaketa barne, lineaz kanpo eskuragarri dago.

## MarkDown Dokumentuen Optimizazioa Bistaratu

`i18n.site` -ren bilaketa-soluzio hutsa `MarkDown` dokumentuetarako optimizatuta dago.

Bilaketa-emaitzak bistaratzen direnean, kapituluaren izena bistaratuko da eta kapituluan nabigatuko da klik egitean.

![](//p.3ti.site/1727686552.avif)

## Laburtu

Testu osoko bilaketa alderantzikatua frontend-ean soilik ezarri da, ez da zerbitzaririk behar. Oso egokia da webgune txiki eta ertainetarako, hala nola dokumentuak eta blog pertsonalak.

`i18n.site` Kode irekiko auto-garatutako frontend bilaketa hutsa, tamaina txikia eta erantzun azkarra, egungo frontend hutsaren testu osoko bilaketaren gabeziak konpontzen ditu eta erabiltzailearen esperientzia hobea eskaintzen du.