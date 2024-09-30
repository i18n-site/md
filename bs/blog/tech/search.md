# Čisto Front-End Invertirano Pretraživanje Cijelog Teksta

## Sekvenca

Nakon nekoliko sedmica razvoja, [i18n.site](//i18n.site) (čisto statičan markdown višejezični prijevod & alat za pravljenje web stranica) sada podržava čisto front-end pretraživanje punog teksta.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Ovaj članak će podijeliti tehničku implementaciju `i18n.site` čistog front-end pretraživanja. Posjetite [i18n.site](//i18n.site)

Kod otvorenog : [Pretraživanje kernela](//github.com/i18n-site/ie/tree/main/qy) / [Interaktivni interfejs](//github.com/i18n-site/plugin/tree/main/qy)

## Pregled Rješenja Za Pretraživanje Punog Teksta Bez Servera

Za male i srednje čisto statične web stranice kao što su dokumenti/lični blogovi, izgradnja pozadinskog dijela pretraživanja punog teksta koji je sam napravio je preteška, a pretraživanje punog teksta bez usluga je češći izbor.

Rešenja za pretraživanje punog teksta bez servera spadaju u dvije široke kategorije:

Prvo, [algolia.com](//algolia.com) provajderi usluga pretraživanja treće strane pružaju prednje komponente za pretraživanje punog teksta.

Takve usluge zahtijevaju plaćanje na osnovu obima pretraživanja i često su nedostupne korisnicima u kontinentalnoj Kini zbog problema kao što je usklađenost web stranice.

Ne može se koristiti van mreže, ne može se koristiti na intranetu i ima velika ograničenja. Ovaj članak ne raspravlja mnogo.

Drugi je čista front-end pretraga cijelog teksta.

Često korištena čista front-end pretraživanja cijelog teksta uključuju [lunrjs](https://lunrjs.com) [ ElasticLunr.js ] [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) .

`lunrjs` Postoje dva načina za pravljenje indeksa, i oba imaju svoje probleme.

1. Unaprijed izgrađeni indeksni fajlovi

   Budući da indeks sadrži riječi iz svih dokumenata, on je velike veličine.
   Kad god se dokument dodaje ili mijenja, mora se učitati novi indeksni fajl.
   To će povećati vrijeme čekanja korisnika i potrošiti mnogo propusnog opsega.

2. Učitavajte dokumente i gradite indekse u hodu

   Izgradnja indeksa je računski intenzivan zadatak. Ponovna izgradnja indeksa svaki put kada mu pristupite prouzročit će očigledna kašnjenja i loše korisničko iskustvo.

---

Osim `lunrjs` , postoje još neka rješenja za pretraživanje cijelog teksta, kao što je :

[fusejs](https://www.fusejs.io) izračunajte sličnost između nizova za pretraživanje.

Performanse ovog rješenja su izuzetno loše i ne mogu se koristiti za pretraživanje cijelog teksta (pogledajte [Fuse.js Dug upit traje više od 10 sekundi, kako ga optimizirati?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

, koristite Bloom filter za pretragu, ne može se koristiti za pretragu po prefiksu (na primjer, unesite `goo` [TinySearch](https://github.com/tinysearch/tinysearch) pretražite `good` , `google` ) i ne može postići sličan efekat automatskog završetka.

Zbog nedostataka postojećih rješenja, `i18n.site` je razvio novo čisto front-end rješenje za pretraživanje punog teksta, koje ima sljedeće karakteristike :

1. Podržava višejezičnu pretragu i male je veličine. Veličina kernela za pretragu nakon pakovanja `gzip` je `6.9KB` (za poređenje, veličina `lunrjs` je `25KB` ).
1. Napravite obrnuti indeks zasnovan na `indexedb` , koji zauzima manje memorije i brz je.
1. Kada se dokumenti dodaju/modificiraju, samo dodani ili izmijenjeni dokumenti se ponovo indeksiraju, smanjujući količinu proračuna.
1. Podržava pretragu po prefiksu, koja može prikazati rezultate pretraživanja u realnom vremenu dok korisnik kuca.
1. Dostupno Van Mreže

U nastavku će biti detaljno predstavljeno `i18n.site` tehničkih detalja implementacije.

## Višejezična Segmentacija Riječi

Segmentacija riječi koristi izvornu segmentaciju riječi pretraživača `Intl.Segmenter` , a svi mainstream pretraživači podržavaju ovo sučelje.

![](https://p.3ti.site/1727667759.avif)

Kod segmentacije `coffeescript` riječi je sljedeći

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

u:

* `/\p{P}/` je regularni izraz koji odgovara znakovima interpunkcije. Specifični odgovarajući simboli uključuju: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } `.</p><ul><li> `split('.')` je zato što `Firefox` segmentiranje riječi pretraživača ne segmentira `.` .</li>


## Index Building

5 tablica za pohranu objekata kreirano je u `IndexedDB` :

* `word` : id -
* `doc` : id - url - Broj verzije dokumenta
* `docWord` Niz dokumenta id - id :
* `prefix` : prefiksa - riječ id
* `rindex` : id - Dokument id : Niz brojeva redaka

Proslijedite niz dokumenta `url` i verzije broj `ver` i potražite da li dokument postoji u tabeli `doc` Ako ne postoji, kreirajte obrnuti indeks. Istovremeno, uklonite obrnuti indeks za one dokumente koji nisu proslijeđeni.

Na ovaj način se može postići inkrementalno indeksiranje i smanjiti količina obračuna.

U front [-](https://juejin.cn/post/7413586285954154522) end interakciji, traka napretka učitavanja indeksa [može](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) biti prikazana / bi se izbjeglo kašnjenje pri progress + po css put.

### IndexedDB Visoko Istovremeno Pisanje

Projekat je [idb](https://www.npmjs.com/package/idb) na osnovu asinhrone enkapsulacije IndexedDB

IndexedDB čitanje i pisanje je asinkrono. Prilikom kreiranja indeksa, dokumenti će se istovremeno učitavati kako bi se kreirao indeks.

Da biste izbjegli djelomični gubitak podataka uzrokovan konkurentnim pisanjem, možete se obratiti `coffeescript` kodu ispod i dodati `ing` keš memoriju između čitanja i pisanja kako biste presreli konkurentna upisivanja.

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

## Prefiks Pretraga U Realnom Vremenu

Da bi se prikazali rezultati pretraživanja dok korisnik kuca, na primjer, kada se unese `wor` , prikazuju se riječi sa prefiksom `wor` kao što su `words` i `work` .

![](https://p.3ti.site/1727684944.avif)

Jezgro pretraživanja će koristiti tabelu `prefix` za posljednju riječ nakon segmentacije riječi kako bi pronašao sve riječi s prefiksom i pretraživao u nizu.

Funkcija protiv potresanja `debounce` se također koristi u front-end interakciji (realizirana na sljedeći način) kako bi se smanjila učestalost pretraživanja koja pokreće korisnički unos i smanjila količina izračuna.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Preciznost I Opoziv

Pretraživanje će prvo segmentirati ključne riječi koje je korisnik unio.

Pretpostavimo da postoji `N` riječi nakon segmentacije riječi Prilikom vraćanja rezultata, prvo će biti vraćeni rezultati koji sadrže sve ključne riječi, a zatim će biti vraćeni rezultati koji sadrže `N-1` , `N-2` ,..., `1` ključne riječi.

Prvo prikazani rezultati pretrage osiguravaju tačnost upita, a rezultati koji se naknadno učitavaju (kliknite na dugme Učitaj više) osiguravaju stopu opoziva.

![](https://p.3ti.site/1727684564.avif)

## Opterećenje Na Zahtjev

Kako bi se poboljšala brzina odgovora, pretraga koristi generator `yield` za implementaciju učitavanja na zahtjev i vraća se `limit` put kada se postavi upit za rezultat.

Imajte na umu da svaki put kada ponovo tražite nakon `yield` , morate ponovo otvoriti transakciju upita od `IndexedDB` .

## Prefiks Pretraga U Realnom Vremenu

Da bi se prikazali rezultati pretraživanja dok korisnik kuca, na primjer, kada se unese `wor` , prikazuju se riječi sa prefiksom `wor` kao što su `words` i `work` .

![](https://p.3ti.site/1727684944.avif)

Jezgro pretraživanja će koristiti tabelu `prefix` za posljednju riječ nakon segmentacije riječi kako bi pronašao sve riječi s prefiksom i pretraživao u nizu.

Funkcija protiv potresanja `debounce` se također koristi u front-end interakciji (realizirana na sljedeći način) kako bi se smanjila učestalost pretraživanja koja pokreće korisnički unos i smanjila količina izračuna.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Dostupno Van Mreže

Indeksna tabela ne pohranjuje originalni tekst, već samo riječi, što smanjuje količinu memorije.

Isticanje rezultata pretraživanja zahtijeva ponovno učitavanje originalnog teksta, a podudaranje `service worker` može izbjeći ponovljene mrežne zahtjeve.

U isto vrijeme, pošto `service worker` sprema sve članke, nakon što korisnik izvrši pretragu, cijela web stranica, uključujući pretragu, dostupna je van mreže.

## Optimizacija Prikaza MarkDown Dokumenata

`i18n.site` 's čisto front-end rješenje za pretraživanje optimizirano je za `MarkDown` dokument.

Prilikom prikaza rezultata pretrage, naziv poglavlja će biti prikazan i poglavlje će se kretati kada se klikne.

![](https://p.3ti.site/1727686552.avif)

## Rezimiraj

Obrnuto pretraživanje punog teksta implementirano isključivo na prednjem dijelu, nije potreban server. Vrlo je pogodan za male i srednje web stranice kao što su dokumenti i lični blogovi.

`i18n.site` Samorazvijeno čisto front-end pretraživanje otvorenog koda, male veličine i brzog odziva, rješava nedostatke trenutnog čistog front-end pretraživanja punog teksta i pruža bolje korisničko iskustvo.