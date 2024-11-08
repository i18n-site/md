---

brief: |
  i18n.site zdaj podpira iskanje po celotnem besedilu brez strežnika.

  Ta članek predstavlja izvedbo čiste front-end tehnologije iskanja po celotnem besedilu, vključno z obrnjenim indeksom, ki ga je ustvaril IndexedDB, iskanjem po predponah, optimizacijo segmentacije besed in podporo za več jezikov.

  V primerjavi z obstoječimi rešitvami je čisto čelno iskanje po celotnem besedilu i18n.site majhno in hitro, primerno za mala in srednje velika spletna mesta, kot so dokumenti in spletni dnevniki, ter je na voljo brez povezave.

---

# Čisto Obrnjeno Iskanje Po Celotnem Besedilu Na Sprednji Strani

## Zaporedje

Po nekaj tednih razvoja [i18n.site](//i18n.site) (čisto statično markdown multilingualtranslation & orodje za izdelavo spletnega mesta) zdaj podpira čisto iskanje po celotnem besedilu na sprednji strani.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Ta članek bo delil tehnično izvedbo `i18n.site` po [i18n.site](//i18n.site) besedilu.

Odprtokodna koda : [Išči jedro](//github.com/i18n-site/ie/tree/main/qy) / [interaktivni vmesnik](//github.com/i18n-site/plugin/tree/main/qy)

## Pregled Rešitev Za Iskanje Po Celotnem Besedilu Brez Strežnika

Za majhna in srednje velika povsem statična spletna mesta, kot so dokumenti/osebni spletni dnevniki, je izdelava zaledja iskanja po celotnem besedilu, ki ga sami izdelajo, pretežka, zato je iskanje po celotnem besedilu brez storitev pogostejša izbira.

Rešitve za iskanje po celotnem besedilu brez strežnika spadajo v dve veliki kategoriji:

Prvič, podobno [algolia.com](//algolia.com) Ponudniki storitev iskanja tretjih oseb zagotavljajo sprednje komponente za iskanje po celotnem besedilu.

Takšne storitve zahtevajo plačilo na podlagi obsega iskanja in pogosto niso na voljo uporabnikom v celinski Kitajski zaradi težav, kot je skladnost spletnega mesta.

Ni ga mogoče uporabljati brez povezave, ni ga mogoče uporabljati na intranetu in ima velike omejitve. Ta članek ne razpravlja veliko.

Drugi je čisto čelno iskanje po celotnem besedilu.

Trenutno običajna [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) po celotnem besedilu vključujejo [lunrjs](//lunrjs.com) (na podlagi `lunrjs` sekundarnega razvoja).

`lunrjs` Obstajata dva načina za izdelavo indeksov in oba imata svoje težave.

1. Vnaprej zgrajene indeksne datoteke

   Ker kazalo vsebuje besede iz vseh dokumentov, je veliko.
   Kadarkoli je dokument dodan ali spremenjen, je treba naložiti novo indeksno datoteko.
   To bo povečalo čakalni čas uporabnika in porabilo veliko pasovne širine.

2. Nalaganje dokumentov in ustvarjanje indeksov sproti

   Izgradnja indeksa je računalniško intenzivna naloga. Ob vsakem dostopu do indeksa bo prišlo do očitnih zaostankov in slabe uporabniške izkušnje.

---

Poleg `lunrjs` obstaja še nekaj drugih rešitev za iskanje po celotnem besedilu, kot je :

[fusejs](//www.fusejs.io) , izračunajte podobnost med nizi za iskanje.

Zmogljivost te rešitve je izjemno slaba in je ni mogoče uporabiti za iskanje po celotnem besedilu (glejte [Fuse.js Dolga poizvedba traja več kot 10 sekund, kako jo optimizirati?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , za iskanje uporabite filter Bloom, ni ga mogoče uporabiti za iskanje po predponi (na primer vnesite `goo` , poiščite `good` , `google` ) in ne morete doseči podobnega učinka samodejnega dokončanja.

Zaradi pomanjkljivosti obstoječih rešitev je `i18n.site` razvil novo čisto front-end rešitev za iskanje po celotnem besedilu, ki ima naslednje značilnosti :

1. Podpira večjezično iskanje in ima majhno velikost iskalnega jedra po embalaži `gzip` je `6.9KB` (za primerjavo je velikost `lunrjs` `25KB` ).
1. Zgradite invertni indeks na podlagi `indexedb` , ki zavzame manj pomnilnika in je hiter.
1. Ko so dokumenti dodani/spremenjeni, so samo dodani ali spremenjeni dokumenti ponovno indeksirani, kar zmanjša količino izračunov.
1. Podpira iskanje po predponi in lahko prikaže rezultate iskanja v realnem času, medtem ko uporabnik tipka.
1. Na voljo brez povezave

`i18n.site` bodo podrobno predstavljene podrobnosti tehnične izvedbe.

## Večjezično Razdeljevanje Besed

Segmentacija besed uporablja izvorno segmentacijo besed brskalnika `Intl.Segmenter` in vsi običajni brskalniki podpirajo ta vmesnik.

![](//p.3ti.site/1727667759.avif)

Besedna koda segmentacije `coffeescript` je naslednja

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

v:

* `/\p{P}/` je regularni izraz, ki se ujema z ločili. Posebni ujemajoči se simboli vključujejo: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` je zato, ker `Firefox` segmentacija besed brskalnika ne segmentira `. ` .</li>


## Gradnja Indeksa

5 tabel za shranjevanje objektov je bilo ustvarjenih v `IndexedDB` :

* `word` : id - besed
* `doc` : id - Dokument url - Številka različice dokumenta
* `docWord` : Niz dokumenta id - beseda id
* `prefix` : Niz predpone - beseda id
* `rindex` : Word id - Dokument id : Niz številk vrstic

Vnesite matriko dokumenta `url` in številko različice `ver` ter poiščite, ali dokument obstaja v tabeli `doc` Če ne obstaja, ustvarite obrnjen indeks. Istočasno odstranite obrnjeno kazalo za tiste dokumente, ki niso bili posredovani.

Na ta način je mogoče doseči postopno indeksiranje in zmanjšati količino izračuna.

Pri interakciji na sprednji strani je mogoče prikazati vrstico [napredka](//juejin.cn/post/7413586285954154522) indeksa [,](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / se izognete zakasnitvi css prvem progress + .

### IndexedDB Visoko Sočasno Pisanje

Projekt je [idb](//www.npmjs.com/package/idb) na podlagi asinhrone enkapsulacije IndexedDB

Branje in pisanje IndexedDB sta asinhrona. Pri ustvarjanju indeksa se dokumenti naložijo hkrati, da se ustvari indeks.

Da bi se izognili delni izgubi podatkov zaradi konkurenčnega pisanja, se lahko obrnete na spodnjo kodo `coffeescript` in med branjem in pisanjem dodate predpomnilnik `ing` , da prestrežete konkurenčna pisanja.

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

## Natančnost in Odpoklic

Iskanje bo najprej segmentiralo ključne besede, ki jih je vnesel uporabnik.

Predpostavimo, da je za segmentacijo besed `N` besed. Pri vračanju rezultatov bodo najprej vrnjeni rezultati, ki vsebujejo vse ključne besede, nato pa rezultati, ki vsebujejo `N-1` , `N-2` ,..., `1` ključne besede.

Prvi prikazani rezultati iskanja zagotavljajo točnost poizvedbe, naknadno naloženi rezultati (kliknite gumb za nalaganje več) pa zagotavljajo stopnjo priklica.

![](//p.3ti.site/1727684564.avif)

## Obremenitev Po Želji

Da bi izboljšali hitrost odziva, iskanje uporablja generator `yield` za izvajanje nalaganja na zahtevo in se vrne `limit` , ko je poizveden rezultat.

Upoštevajte, da morate vsakič, ko znova iščete po `yield` , znova odpreti transakcijo poizvedbe `IndexedDB` .

## Iskanje Predpone v Realnem Času

Za prikaz rezultatov iskanja, medtem ko uporabnik tipka, se na primer, ko vnesete `wor` , prikažejo besede s predpono `wor` , kot sta `words` in `work` .

![](//p.3ti.site/1727684944.avif)

Iskalno jedro bo uporabilo tabelo `prefix` za zadnjo besedo po segmentaciji besed, da bi našlo vse besede s predpono in iskalo v zaporedju.

Funkcija za preprečevanje tresenja `debounce` se uporablja tudi v sprednji interakciji (implementirano na naslednji način), da zmanjša pogostost uporabniškega vnosa, ki sproži iskanja, in zmanjša količino izračuna.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Na Voljo Brez Povezave

Indeksna tabela ne shranjuje izvirnega besedila, le besede, kar zmanjša količino pomnilnika.

Označevanje rezultatov iskanja zahteva ponovno nalaganje izvirnega besedila, z ujemanjem `service worker` pa se lahko izognete ponavljajočim se omrežnim zahtevam.

Hkrati, ker `service worker` predpomni vse članke, ko uporabnik izvede iskanje, je celotno spletno mesto, vključno z iskanjem, na voljo brez povezave.

## Optimizacija Prikaza Dokumentov MarkDown

`i18n.site` čista rešitev za iskanje po sprednjem delu je optimizirana za `MarkDown` dokumente.

Pri prikazu rezultatov iskanja bo prikazano ime poglavja in ob kliku bo prikazano poglavje.

![](//p.3ti.site/1727686552.avif)

## Povzemite

Obrnjeno iskanje po celotnem besedilu je izvedeno izključno na sprednji strani, strežnik ni potreben. Zelo primeren je za mala in srednje velika spletna mesta, kot so dokumenti in osebni blogi.

`i18n.site` Odprtokodno samorazvito čisto čelno iskanje, majhne velikosti in hitrega odziva, odpravlja pomanjkljivosti trenutnega čistega sprednjega iskanja po celotnem besedilu in zagotavlja boljšo uporabniško izkušnjo.