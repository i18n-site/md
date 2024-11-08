---

brief: |
  Az i18n.site mostantól támogatja a szerver nélküli teljes szöveges keresést.

  Ez a cikk bemutatja a tiszta front-end teljes szöveges keresési technológia megvalósítását, beleértve az IndexedDB által épített fordított indexet, az előtagkeresést, a szószegmentálás optimalizálását és a többnyelvű támogatást.

  A meglévő megoldásokhoz képest az i18n.site tiszta front-end teljes szöveges keresése kis méretű és gyors, alkalmas kis és közepes méretű webhelyekre, például dokumentumokra és blogokra, és offline is elérhető.

---

# Tiszta Front-End Fordított Teljes Szöveges Keresés

## Sorrend

Néhány hetes & után markdown [i18n.site](//i18n.site)

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Ez a cikk a `i18n.site` tiszta front-end teljes szöveges keresés technikai megvalósítását ismerteti. [i18n.site](//i18n.site) meg a keresési hatást.

Kód nyílt : [Keresés kernel](//github.com/i18n-site/ie/tree/main/qy) / [interaktív felület](//github.com/i18n-site/plugin/tree/main/qy)

## Szerver Nélküli Teljes Szöveges Keresési Megoldások Áttekintése

Kis és közepes méretű, tisztán statikus webhelyek, például dokumentumok/személyes blogok esetében a saját építésű teljes szövegű keresési háttérrendszer felépítése túl nehéz feladat, és a szolgáltatásmentes teljes szöveges keresés a gyakoribb választás.

A szerver nélküli teljes szöveges keresési megoldások két nagy kategóriába sorolhatók:

Először is, a hasonló [algolia.com](//algolia.com) harmadik féltől származó keresési szolgáltatók előtér-komponenseket biztosítanak a teljes szöveges kereséshez.

Az ilyen szolgáltatásokért a keresési mennyiség alapján kell fizetni, és gyakran nem érhetők el a Kínában élő felhasználók számára olyan problémák miatt, mint például a webhely megfelelősége.

Nem használható offline, nem használható intraneten, és nagy korlátai vannak. Ez a cikk nem sokat tárgyal.

A második a tiszta front-end teljes szöveges keresés.

Jelenleg az általános tiszta front-end teljes szöveges keresések közé tartozik [lunrjs](//lunrjs.com) és [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) ( `lunrjs` másodlagos fejlesztés alapján).

`lunrjs` Kétféleképpen lehet indexeket készíteni, és mindkettőnek megvan a maga problémája.

1. Előre elkészített indexfájlok

   Mivel az index minden dokumentumból tartalmaz szavakat, nagy méretű.
   Amikor egy dokumentumot hozzáadnak vagy módosítanak, új indexfájlt kell betölteni.
   Ez növeli a felhasználó várakozási idejét, és sok sávszélességet fogyaszt.

2. Menet közben tölthet be dokumentumokat és készíthet indexeket

   Az index felépítése számításigényes feladat Az index minden alkalommal történő újraépítése nyilvánvaló késéseket és rossz felhasználói élményt okoz.

---

`lunrjs` mellett van még néhány teljes szöveges keresési megoldás, mint pl :

[fusejs](//www.fusejs.io) számítsa ki a keresendő karakterláncok közötti hasonlóságot.

Ennek a megoldásnak a teljesítménye rendkívül gyenge, és nem használható teljes szöveges keresésre (lásd [Fuse.js A hosszú lekérdezés 10 másodpercnél tovább tart, hogyan lehet optimalizálni?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) használja a Bloom szűrőt a kereséshez, nem használható előtagkeresésre (például írja be `goo` , a keresési `good` , `google` ), és nem érhet el hasonló automatikus befejezési hatást.

A meglévő megoldások hiányosságai miatt `i18n.site` egy új, tiszta front-end teljes szöveges keresési megoldást fejlesztett ki, amely a következő tulajdonságokkal rendelkezik :

1. Támogatja a többnyelvű keresést, és kis méretű A keresőmag mérete `gzip` csomagolás után `6.9KB` (összehasonlításképpen a `lunrjs` es mérete `25KB` ).
1. Hozzon létre egy fordított indexet `indexedb` alapján, amely kevesebb memóriát foglal el és gyors.
1. Dokumentumok hozzáadásakor/módosításakor csak a hozzáadott vagy módosított dokumentumok kerülnek újraindexelésre, csökkentve a számítások mennyiségét.
1. Támogatja az előtag keresést, és valós időben jeleníti meg a keresési eredményeket, miközben a felhasználó gépel.
1. Offline elérhető

Az alábbiakban `i18n.site` technikai megvalósítási részlet kerül bemutatásra részletesen.

## Többnyelvű Szótagolás

A szószegmentálás a böngésző natív szószegmentálását `Intl.Segmenter` használja, és az összes mainstream böngésző támogatja ezt a felületet.

![](//p.3ti.site/1727667759.avif)

A szószegmentálás `coffeescript` kódja a következő

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

itt:

* `/\p{P}/` egy { kifejezés, amely megfelel az `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` . | } `.</p><ul><li> `split('.')` azért van, mert `Firefox` böngészőszó szegmentálása nem szegmentálja `. ` .</li>


## Index Épület

`IndexedDB` -ban 5 objektumtároló tábla készült :

* `word` szó : id -
* `doc` : id - url - Dokumentum verziószáma
* `docWord` dokumentum : id - szó id
* `prefix` - szó id előtag :
* `rindex` : id - Document id : Sorszámok tömbje

Adja át a `url` dokumentum tömbjét és az `ver` verziószámot, és keresse meg, hogy a dokumentum létezik-e a `doc` táblázatban. Ha nem létezik, hozzon létre egy fordított indexet. Ezzel egyidejűleg távolítsa el az inverz indexet azoknál a dokumentumoknál, amelyeket nem adtak át.

Ily módon növekményes indexelés érhető el, és a számítás mennyisége csökken.

A front-end interakció során az index betöltési folyamatjelzője megjeleníthető, hogy elkerülje a késést az első betöltéskor. Lásd: „Előrehaladás sáv animációval, egyetlen megvalósításon alapuló progress + Pure css Implementation” [angol](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [kínai](//juejin.cn/post/7413586285954154522) .

### IndexedDB Magas Párhuzamos Írás

A projekt [idb](//www.npmjs.com/package/idb) IndexedDB

Az IndexedDB olvasása és írása aszinkron. Index létrehozásakor a dokumentumok egyidejűleg betöltődnek az index létrehozásához.

A versengő írás okozta részleges adatvesztés elkerülése érdekében hivatkozzon az alábbi `coffeescript` kódra, és adjon hozzá egy `ing` gyorsítótárat az olvasás és az írás közé, hogy elfogja a versengő írásokat.

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

## Pontosság És Visszahívás

A keresés először a felhasználó által beírt kulcsszavakat szegmentálja.

Tételezzük fel, hogy a szószegmentálás után `N` szó van. Az eredmények visszaadásánál először az összes kulcsszót tartalmazó eredmények, majd `N-1` , `N-2` ,..., `1` kulcsszót tartalmazó eredmények kerülnek visszaadásra.

Az elsőként megjelenő keresési eredmények biztosítják a lekérdezés pontosságát, az utólag betöltött találatok (kattintson a további betöltése gombra) pedig a visszahívási arányt.

![](//p.3ti.site/1727684564.avif)

## Igény Szerinti Terhelés

A válaszsebesség javítása érdekében a keresés a `yield` generátort használja az igény szerinti betöltés megvalósításához, és `limit` eredmény lekérdezésekor visszatér.

Vegye figyelembe, hogy minden alkalommal, amikor újra keres `yield` után, újra meg kell nyitnia az `IndexedDB` es lekérdezési tranzakciót.

## Előtag Valós Idejű Keresés

Annak érdekében, hogy a keresési eredményeket a felhasználó gépelése közben jelenítse meg, például amikor `wor` ír be, `wor` előtagú szavak, például `words` és `work` jelennek meg.

![](//p.3ti.site/1727684944.avif)

A keresőmag a `prefix` táblát használja a szószegmentálás utáni utolsó szóhoz, hogy megtalálja az előtaggal ellátott összes szót, és sorban keressen.

A `debounce` rázkódásgátló funkciót a front-end interakciókban is használják (az alábbiak szerint valósítva meg), hogy csökkentsék a keresést kiváltó felhasználói bevitel gyakoriságát és csökkentsék a számítások mennyiségét.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Offline Elérhető

Az indextábla nem tárolja az eredeti szöveget, csak a szavakat, ami csökkenti a tárhely mennyiségét.

A keresési eredmények kiemeléséhez újra be kell tölteni az eredeti szöveget, `service worker` egyezése pedig elkerülheti az ismételt hálózati kéréseket.

Ugyanakkor, mivel `service worker` gyorsítótárazza az összes cikket, miután a felhasználó keresést hajt végre, a teljes webhely, beleértve a keresést is, elérhető lesz offline módban.

## MarkDown Dokumentumok Megjelenítési Optimalizálása

A `i18n.site` tiszta front-end keresési megoldása `MarkDown` dokumentumra van optimalizálva.

A keresési eredmények megjelenítésekor megjelenik a fejezet neve, és kattintáskor navigál a fejezetben.

![](//p.3ti.site/1727686552.avif)

## Összefoglalni

Invertált teljes szövegű keresés tisztán az előtérben megvalósítva, nincs szükség szerverre. Nagyon alkalmas kis és közepes méretű webhelyekhez, például dokumentumokhoz és személyes blogokhoz.

`i18n.site` Nyílt forráskódú saját fejlesztésű tiszta front-end keresés, kis méret és gyors válaszadás, megoldja a jelenlegi tiszta front-end teljes szöveges keresés hiányosságait és jobb felhasználói élményt biztosít.