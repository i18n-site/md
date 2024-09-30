# Tiszta Front-End Fordított Teljes Szöveges Keresés

## Sorrend

Néhány hetes & után markdown [i18n.site](/0)

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Ez a cikk megosztja az `i18n.site` tiszta front-end teljes szöveges keresési technológiájának megvalósítását. A keresési hatást itt lehet kipróbálni: [i18n.site](//i18n.site).

A kód nyílt forráskódú: [kereső kernel](//github.com/i18n-site/ie/tree/main/qy) / [interakciós felület](//github.com/i18n-site/plugin/tree/main/qy)

## Szerver nélküli teljes szöveges keresési megoldások áttekintése

Kis webhelyek, például dokumentumok/személyes blogok, amelyek tisztán statikusak, kétségtelenül túl nehéz saját kezűleg létrehozni egy teljes szöveges keresési háttérrendszert, és a szolgáltatások nélküli teljes szöveges keresés kétségtelenül jobb súlyt jelent.

A meglévő szerver nélküli teljes szöveges keresési megoldások két fő kategóriába sorolhatók.

Egyrészt olyan harmadik féltől származó keresési szolgáltatók, mint az [algolia.com](//algolia.com), amelyek front-end teljes szöveges keresési komponenseket biztosítanak.

Ilyen szolgáltatásokért fizetni kell, és a webhely megfelelőségi problémái miatt a kínai felhasználók nem férhetnek hozzá.

Nem használható offline, nem használható belső hálózaton, és jelentős korlátokkal rendelkezik. Ezért nem részletezzük őket.

Másrészt a tiszta front-end teljes szöveges keresés.

A legismertebb tiszta front-end teljes szöveges keresések közé tartozik [lunrjs](/0) és a [ ElasticLunr.js ] [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) .

A `lunrjs` két különböző indexelési módot használ, de mindkettőnek megvannak a maga problémái.

1. Előre elkészített indexfájlok

   Mivel az index minden dokumentum szavait tartalmazza, ez nagy méretű.
   Ha a dokumentumok változnak, új indexfájlokat kell betölteni.
   Ez növeli a felhasználók várakozási idejét és sok sávszélességet fogyaszt.

2. Dokumentumok betöltése és azonnali index létrehozása

   Az indexelés számítási igényes feladat, és minden látogatásnál újra indexelni az indexet jelentős késéseket és rossz felhasználói élményt okoz.

`lunrjs` mellett több más teljes szöveges keresési megoldás is létezik, például:

[fusejs](https://www.fusejs.io), amely a karakterláncok közötti hasonlóságot számítja ki.

Ez a megoldás teljesítménye rendkívül gyenge, és nem használható teljes szöveges keresésre (lásd [Fuse.js Hosszú lekérdezések 10 másodpercnél tovább tartanak, hogyan lehet optimalizálni?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](https://github.com/tinysearch/tinysearch), amely a Bloom szűrőt használja a kereséshez, nem használható előtag keresésre (például `goo` beírása esetén `good` vagy `google` keresése), és nem érhető el hasonló automatikus befejezési hatás.

A meglévő megoldások hiányosságaival való elégedetlenség miatt az `i18n.site` új, tiszta front-end teljes szöveges keresési megoldást fejlesztett ki, amely a következő tulajdonságokkal rendelkezik:

1. Támogatja a többnyelvű keresést, és kis méretű A keresőmag mérete `gzip` csomagolás után `6.9KB` (összehasonlításképpen a `lunrjs` es mérete `25KB` )
1. `indexedb` alapján létrehozott fordított indexet használ, amely kevesebb memóriát foglal el és gyors
1. Dokumentumok hozzáadásakor/módosításakor csak a hozzáadott vagy módosított dokumentumok kerülnek újraindexelésre, csökkentve a számítások mennyiségét
1. Offline használható
1. Offline elérhető

Az alábbiakban részletesen bemutatjuk az `i18n.site` technikai megvalósítási részleteit.

## Többnyelvű szótagolás

A szótagolás `coffeescript` kódja a következő:

![](https://p.3ti.site/1727667759.avif)

A szótagolás `coffeescript` kódja a következő:

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

Itt:

* `/\p{P}/` egy { kifejezés, amely megfelel az `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` | } `.</p><ul><li> `split('.')` azért van, mert `Firefox` böngészőszó szegmentálása nem szegmentálja `.` .</li>


## Index létrehozása

`word` : id - szó

* `word` : szó - azonosító
* `docWord` : dokumentum id - szó id tömbje
* `prefix` : előtag - szó id tömbje
* `rindex` : szó id - dokumentum id : sorszámok tömbje
* `rindex` : azonosító - dokumentum azonosító : sortömb

Adja meg a dokumentumok `url` és `ver` verziószám tömbjét, és keresse meg, hogy létezik-e a `doc` táblázatban. Ha nem létezik, hozzon létre egy fordított indexet. Ezzel egyidejűleg távolítsa el azokat az inverz indexeket, amelyeket nem adtak át.

Ily módon elérhető a növekményes indexelés, és csökkenthető a számítások mennyisége.

A front-end interakció során jelenítse meg az index betöltési folyamatjelzőt, hogy elkerülje a késést az első betöltéskor. Lásd: „Előrehaladás sáv animációval, egyetlen megvalósításon alapuló progress + Pure css Implementation” [angol](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [kínai](https://juejin.cn/post/7413586285954154522).

### IndexedDB magas párhuzamos írás

A projekt az [idb](https://www.npmjs.com/package/idb) IndexedDB alapján fejlesztve.

Az IndexedDB olvasása és írása aszinkron. Az index létrehozásakor a dokumentumok egyidejűleg betöltődnek az index létrehozásához.

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

## Előtag valós idejű keresés

Annak érdekében, hogy a keresési eredményeket a felhasználó gépelése közben jelenítse meg, például amikor `wor`-t ír be, jelenítsen meg `wor` előtagú szavakat, például `words` és `work`.

![](https://p.3ti.site/1727684944.avif)

A front-end interakciókban a `debounce` rázkódásgátló funkciót használjuk, hogy csökkentsük a keresést kiváltó felhasználói bevitel gyakoriságát és csökkentsük a számítások mennyiségét.

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

## Pontosság és teljesítmény

A keresés először a felhasználó által beírt kulcsszavakat szegmentálja.

Tételezzük fel, hogy a szószegmentálás után `N` szó van. Az eredmények visszaadásánál először az összes kulcsszót tartalmazó eredmények, majd `N-1`, `N-2`, ..., `1` kulcsszót tartalmazó eredmények kerülnek visszaadásra.

Az elsőként megjelenített keresési eredmények biztosítják a lekérdezés pontosságát, az utólag betöltött eredmények (kattintson a további betöltése gombra) pedig a teljesítményt.

![](https://p.3ti.site/1727684564.avif)

## Igény szerinti terhelés

Vegye figyelembe, hogy minden alkalommal, amikor újra keres `yield` után, újra meg kell nyitnia az `IndexedDB` lekérdezési tranzakciót.

Vegye figyelembe, hogy minden alkalommal, amikor újra keres `yield` után, újra meg kell nyitnia az `IndexedDB` lekérdezési tranzakciót.

## Előtag valós idejű keresés

Annak érdekében, hogy a keresési eredményeket a felhasználó gépelése közben jelenítse meg, például amikor `wor`-t ír be, jelenítsen meg `wor` előtagú szavakat, például `words` és `work`.

![](https://p.3ti.site/1727684944.avif)

A front-end interakciókban a `debounce` rázkódásgátló funkciót használjuk, hogy csökkentsük a keresést kiváltó felhasználói bevitel gyakoriságát és csökkentsük a számítások mennyiségét.

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

## Offline elérhető

Az index táblázat nem tárolja az eredeti szöveget, csak a szavakat, ami csökkenti a tárhely mennyiségét.

Ugyanakkor, mivel a `service worker` gyorsítótárazza az összes cikket, miután a felhasználó keresést hajtott végre, a teljes webhely, beleértve a keresést is, elérhető lesz offline módban.

Ugyanakkor, mivel a `service worker` gyorsítótárazza az összes cikket, miután a felhasználó keresést hajt végre, a teljes webhely, beleértve a keresést is, elérhető lesz offline módban.

## Markdown dokumentumok megjelenítési optimalizálása

A `i18n.site` tiszta front-end keresési megoldása a `Markdown` dokumentumokra van optimalizálva.

A keresési eredmények megjelenítésekor jelenítse meg a fejezet neveket, és navigáljon a kattintással a fejezetekhez.

![](https://p.3ti.site/1727686552.avif)

## Összefoglalva

Nagyon alkalmas kis és közepes méretű webhelyekhez, például dokumentumokhoz és személyes blogokhoz.

Nagyon alkalmas kis és közepes méretű webhelyekhez, például dokumentumokhoz és személyes blogokhoz.