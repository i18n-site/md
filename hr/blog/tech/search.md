---

brief: |
  i18n.site sada podržava pretraživanje cijelog teksta bez poslužitelja.

  Ovaj članak predstavlja implementaciju čiste front-end tehnologije pretraživanja punog teksta, uključujući invertirani indeks koji je izradio IndexedDB, pretraživanje prefiksa, optimizaciju segmentacije riječi i podršku za više jezika.

  U usporedbi s postojećim rješenjima, čisto front-end pretraživanje punog teksta i18n.site malo je i brzo, prikladno za mala i srednja web-mjesta kao što su dokumenti i blogovi, a dostupno je izvan mreže.

---

# Čisto Front-End Invertirano Pretraživanje Cijelog Teksta

## Slijed

Nakon nekoliko tjedana razvoja, [i18n.site](//i18n.site) (čisto statički markdown multilingualtranslation & alat za izradu web stranica) sada podržava čisto pretraživanje cijelog teksta na prednjem dijelu.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Ovaj članak će podijeliti tehničku implementaciju `i18n.site` čistog pretraživanja cijelog teksta. Posjetite [i18n.site](//i18n.site)

Kod otvorenog koda : / [sučelje](//github.com/i18n-site/plugin/tree/main/qy) [pretraživanja kernela](//github.com/i18n-site/ie/tree/main/qy)

## Pregled Rješenja Za Pretraživanje Cijelog Teksta Bez Poslužitelja

Za mala i srednja čisto statična web-mjesta kao što su dokumenti/osobni blogovi, izgradnja pozadinskog sustava za pretraživanje punog teksta koji ste sami izradili je preteška, a pretraživanje cijelog teksta bez usluge je češći izbor.

Rješenja za pretraživanje punog teksta bez poslužitelja spadaju u dvije široke kategorije:

Prvo, slično [algolia.com](//algolia.com) Pružatelji usluga pretraživanja trećih strana pružaju komponente za pretraživanje cijelog teksta.

Takve usluge zahtijevaju plaćanje na temelju opsega pretraživanja i često su nedostupne korisnicima u kontinentalnoj Kini zbog problema kao što je usklađenost web stranice.

Ne može se koristiti izvan mreže, ne može se koristiti na intranetu i ima velika ograničenja. Ovaj članak ne raspravlja puno.

Drugi je čisto front-end pretraživanje cijelog teksta.

Trenutačno uobičajena pretraživanja cijelog teksta uključuju [lunrjs](//lunrjs.com) [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) na temelju `lunrjs` sekundarnog razvoja).

`lunrjs` Postoje dva načina za izradu indeksa i oba imaju svoje probleme.

1. Unaprijed izgrađene indeksne datoteke

   Budući da kazalo sadrži riječi iz svih dokumenata, veliko je.
   Kad god se dokument doda ili izmijeni, mora se učitati nova indeksna datoteka.
   To će povećati korisnikovo vrijeme čekanja i potrošiti puno propusnosti.

2. Učitavajte dokumente i gradite indekse u hodu

   Izrada indeksa računalno je intenzivan zadatak. Ponovna izgradnja indeksa svaki put kada mu pristupite uzrokovat će očita kašnjenja i loše korisničko iskustvo.

---

Osim `lunrjs` , postoje i neka druga rješenja za pretraživanje cijelog teksta, kao što je :

[fusejs](//www.fusejs.io) , izračunajte sličnost nizova za pretraživanje.

Izvedba ovog rješenja izuzetno je loša i ne može se koristiti za pretraživanje cijelog teksta (pogledajte [Fuse.js Dugi upit traje više od 10 sekundi, kako ga optimizirati?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , koristiti Bloom filtar za pretraživanje, ne može se koristiti za pretraživanje prefiksa (na primjer, unesite `goo` , traži `good` , `google` ) i ne može postići sličan učinak automatskog dovršavanja.

Zbog nedostataka postojećih rješenja, `i18n.site` je razvio novo čisto front-end rješenje za pretraživanje cijelog teksta, koje ima sljedeće karakteristike :

1. Podržava višejezično pretraživanje i mala je veličina jezgre za pretraživanje nakon pakiranja `gzip` je `6.9KB` (za usporedbu, veličina `lunrjs` je `25KB` ).
1. Izgradite obrnuti indeks temeljen na `indexedb` , koji zauzima manje memorije i brz je.
1. Kada se dokumenti dodaju/izmijene, samo se dodani ili izmijenjeni dokumenti ponovno indeksiraju, čime se smanjuje količina izračuna.
1. Podržava pretraživanje prefiksa i može prikazati rezultate pretraživanja u stvarnom vremenu dok korisnik tipka.
1. Dostupno izvan mreže

U nastavku će se detaljno predstaviti detalji `i18n.site` izvedbe.

## Višejezična Segmentacija Riječi

Segmentacija riječi koristi izvornu segmentaciju riječi preglednika `Intl.Segmenter` , a svi glavni preglednici podržavaju ovo sučelje.

![](//p.3ti.site/1727667759.avif)

Kod segmentacije riječi `coffeescript` je sljedeći

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

u:

* `/\p{P}/` je regularni izraz koji odgovara interpunkcijskim znakovima. Specifični odgovarajući simboli uključuju: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` je zato što `Firefox` segmentacija riječi preglednika ne segmentira `. ` .</li>


## Izgradnja Indeksa

5 tablica za pohranu objekata kreirano je u `IndexedDB` :

* `word` : id - riječi
* `doc` : id - Dokument url - Broj verzije dokumenta
* `docWord` : Niz dokumenta id - riječ id
* `prefix` : Niz prefiksa - riječi id
* `rindex` : Word id - Dokument id : Niz brojeva redaka

Proslijedite niz dokumenta `url` i broj verzije `ver` i potražite postoji li dokument u tablici `doc` Ako ne postoji, kreirajte obrnuti indeks. U isto vrijeme uklonite obrnuti indeks za one dokumente koji nisu proslijeđeni.

Na taj način se može postići inkrementalno indeksiranje i smanjiti količina izračuna.

U prednjoj interakciji, traka napretka učitavanja indeksa može se prikazati kako bi se izbjeglo kašnjenje pri prvom učitavanju. Pogledajte "Traka napretka s animacijom, temeljena na jednoj progress + Čistoj css implementaciji" [engleski](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [kineski](//juejin.cn/post/7413586285954154522) .

### IndexedDB Visoko Istovremeno Pisanje

Projekt je [idb](//www.npmjs.com/package/idb) na temelju asinkrone enkapsulacije IndexedDB

IndexedDB čitanja i pisanja su asinkroni. Prilikom izrade indeksa, dokumenti će se istodobno učitavati kako bi se stvorio indeks.

Kako biste izbjegli djelomični gubitak podataka uzrokovan kompetitivnim pisanjem, možete se obratiti `coffeescript` kodu u nastavku i dodati `ing` predmemoriju između čitanja i pisanja za presretanje konkurentskih pisanja.

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

## Preciznost I Opoziv

Pretraživanje će prvo segmentirati ključne riječi koje je korisnik unio.

Pretpostavimo da postoji `N` riječi nakon segmentacije riječi. Prilikom vraćanja rezultata prvo će se vratiti rezultati koji sadrže sve ključne riječi, a zatim će se vratiti rezultati koji sadrže `N-1` , `N-2` ,..., `1` ključne riječi.

Prvi prikazani rezultati pretraživanja osiguravaju točnost upita, a naknadno učitani rezultati (kliknite gumb za učitavanje više) osiguravaju stopu prisjećanja.

![](//p.3ti.site/1727684564.avif)

## Opterećenje Na Zahtjev

Kako bi se poboljšala brzina odgovora, pretraživanje koristi generator `yield` za implementaciju učitavanja na zahtjev i vraća se `limit` put kada se zatraži rezultat.

Imajte na umu da svaki put kada ponovno tražite nakon `yield` , trebate ponovno otvoriti transakciju upita `IndexedDB` .

## Pretraživanje Prefiksa U Stvarnom Vremenu

Kako bi se prikazali rezultati pretraživanja dok korisnik tipka, na primjer, kada se unese `wor` , prikazuju se riječi s prefiksom `wor` , kao što su `words` i `work` .

![](//p.3ti.site/1727684944.avif)

Jezgra pretraživanja koristit će tablicu `prefix` za posljednju riječ nakon segmentacije riječi kako bi pronašla sve riječi s prefiksom i pretraživala u nizu.

Anti-shake funkcija `debounce` također se koristi u front-end interakciji (implementirano na sljedeći način) kako bi se smanjila učestalost korisničkih unosa koji pokreću pretraživanja i smanjila količina izračuna.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Dostupno Izvan Mreže

Indeksna tablica ne pohranjuje izvorni tekst, samo riječi, što smanjuje količinu pohrane.

Označavanje rezultata pretraživanja zahtijeva ponovno učitavanje izvornog teksta, a podudaranje `service worker` može izbjeći ponovljene mrežne zahtjeve.

U isto vrijeme, budući da `service worker` sprema sve članke, nakon što korisnik izvrši pretragu, cijela web stranica, uključujući pretragu, dostupna je izvan mreže.

## Optimizacija Prikaza MarkDown Dokumenata

Čisto front-end rješenje za pretraživanje `i18n.site` optimizirano je za `MarkDown` dokumente.

Kada se prikazuju rezultati pretraživanja, prikazat će se naziv poglavlja i pomicat će se po poglavlju kada se klikne.

![](//p.3ti.site/1727686552.avif)

## Rezimirati

Invertirano pretraživanje cijelog teksta implementirano isključivo na prednjem dijelu, nije potreban poslužitelj. Vrlo je prikladan za male i srednje web stranice kao što su dokumenti i osobni blogovi.

`i18n.site` Samorazvijeno čisto front-end pretraživanje otvorenog koda, male veličine i brzog odgovora, rješava nedostatke trenutnog čistog front-end pretraživanja punog teksta i pruža bolje korisničko iskustvo.