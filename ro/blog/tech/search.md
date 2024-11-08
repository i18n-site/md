---

brief: |
  i18n.site acceptă acum căutarea text integral fără server.

  Acest articol prezintă implementarea tehnologiei de căutare a textului integral front-end pur, inclusiv index inversat construit de IndexedDB, căutare de prefix, optimizare a segmentării cuvintelor și suport în mai multe limbi.

  În comparație cu soluțiile existente, căutarea integrală de tip front-end a i18n.site este mică și rapidă, potrivită pentru site-uri web de dimensiuni mici și mijlocii, cum ar fi documente și bloguri, și este disponibilă offline.

---

# Căutare De Text Integral Inversat Pur Front-End

## Secvenţă

După câteva săptămâni de dezvoltare, [i18n.site](//i18n.site) (un instrument de construcție a site-ului web & markdown traducere multilingvă pur static) acceptă acum căutarea integrală de tip front-end.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Acest articol va împărtăși implementarea tehnică a căutării `i18n.site` de tip front-end pentru a [i18n.site](//i18n.site) efectul de căutare.

Cod sursă : [Căutați](//github.com/i18n-site/ie/tree/main/qy) [interfață interactivă](//github.com/i18n-site/plugin/tree/main/qy) / nucleu

## O Revizuire a Soluțiilor De Căutare Full-Text Fără Server

Pentru site-urile web de dimensiuni mici și mijlocii pur statice, cum ar fi documentele/blogurile personale, construirea unui backend de căutare full-text auto-construit este prea grea, iar căutarea full-text fără servicii este alegerea mai comună.

Soluțiile de căutare full-text fără server se împart în două mari categorii:

În primul rând [algolia.com](//algolia.com) furnizorii terți de servicii de căutare similare oferă componente front-end pentru căutarea în text complet.

Astfel de servicii necesită plată în funcție de volumul de căutare și sunt adesea indisponibile utilizatorilor din China continentală din cauza unor probleme precum conformitatea site-ului.

Nu poate fi folosit offline, nu poate fi folosit pe intranet și are limite mari. Acest articol nu discută prea multe.

Cea de-a doua este căutarea integrală de tip front-end.

În prezent, căutările obișnuite cu text complet front-end includ [lunrjs](//lunrjs.com) și [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (bazate pe `lunrjs` dezvoltare secundară).

`lunrjs` Există două moduri de a construi indecși și ambele au propriile lor probleme.

1. Fișiere index pre-construite

   Deoarece indexul conține cuvinte din toate documentele, este mare ca dimensiune.
   Ori de câte ori un document este adăugat sau modificat, trebuie încărcat un nou fișier index.
   Va crește timpul de așteptare al utilizatorului și va consuma multă lățime de bandă.

2. Încărcați documente și construiți indexuri din mers

   Construirea unui index este o sarcină intensivă din punct de vedere al calculului. Reconstruirea indexului de fiecare dată când îl accesați va provoca întârzieri evidente și o experiență slabă pentru utilizator.

---

În plus față de `lunrjs` , există și alte soluții de căutare full-text, cum ar fi :

[fusejs](//www.fusejs.io) , calculați asemănarea dintre șiruri pentru a căuta.

Performanța acestei soluții este extrem de slabă și nu poate fi folosită pentru căutarea text integral (consultați [Fuse.js Interogarea lungă durează mai mult de 10 secunde, cum să o optimizați?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , utilizați filtrul Bloom pentru a căuta, nu poate fi folosit pentru căutarea de prefix (de exemplu, introduceți `goo` , căutați `good` , `google` ) și nu puteți obține un efect de completare automată similar.

Din cauza deficiențelor soluțiilor existente, `i18n.site` a dezvoltat o nouă soluție de căutare full-text pur front-end, care are următoarele caracteristici :

1. Acceptă căutarea în mai multe limbi și are o dimensiune mică. Dimensiunea nucleului de căutare după ambalarea `gzip` este `6.9KB` (pentru comparație, dimensiunea lui `lunrjs` este `25KB` ).
1. Construiți un index inversat bazat pe `indexedb` , care ocupă mai puțină memorie și este rapid.
1. Când documentele sunt adăugate/modificate, doar documentele adăugate sau modificate sunt reindexate, reducând cantitatea de calcule.
1. Acceptă căutarea prin prefix și poate afișa rezultatele căutării în timp real în timp ce utilizatorul tastează.
1. Disponibil offline

Mai jos, `i18n.site` detalii tehnice de implementare vor fi introduse în detaliu.

## Segmentarea Cuvintelor Multilingve

Segmentarea cuvintelor utilizează segmentarea cuvintelor nativă a browserului `Intl.Segmenter` , iar toate browserele principale acceptă această interfață.

![](//p.3ti.site/1727667759.avif)

Codul de segmentare a cuvintelor `coffeescript` este după cum urmează

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

în:

* `/\p{P}/` este o expresie regulată care se potrivește cu semnele de punctuație. Simbolurile de potrivire specifice includ: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` se datorează faptului că segmentarea `Firefox` cuvânt din browser nu segmentează `. ` .</li>


## Clădire Index

5 tabele de stocare a obiectelor au fost create în `IndexedDB` :

* `word` : id -
* `doc` : id - Document url - Numărul versiunii documentului
* `docWord` : Matrice de document id - cuvânt id
* `prefix` : Matrice de prefix - cuvânt id
* `rindex` : Word id - Document id : Matrice de numere de linie

Introduceți matricea documentului `url` și numărul versiunii `ver` și căutați dacă documentul există în tabelul `doc` Dacă nu există, creați un index inversat. În același timp, eliminați indexul inversat pentru acele documente care nu au fost transmise.

În acest fel, se poate realiza indexarea incrementală și cantitatea de calcul este redusă.

În interacțiunea front-end, bara de progres de încărcare a indexului poate fi afișată pentru a evita întârzierea la încărcare / prima dată [A](//juejin.cn/post/7413586285954154522) se [vedea](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) „Bara de progres cu animație, bazată pe o singură css progress +

### Scriere Concomitentă Ridicată De IndexedDB

Proiectul este [idb](//www.npmjs.com/package/idb) pe baza încapsulării asincrone a IndexedDB

Citirile și scrierile IndexedDB sunt asincrone. La crearea unui index, documentele vor fi încărcate simultan pentru a crea indexul.

Pentru a evita pierderea parțială a datelor cauzată de scrierea competitivă, vă puteți referi la codul `coffeescript` de mai jos și puteți adăuga un cache `ing` între citire și scriere pentru a intercepta scrierile concurente.

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

## Precizie Și Rechemare

Căutarea va segmenta mai întâi cuvintele cheie introduse de utilizator.

Să presupunem că există `N` cuvinte după segmentarea cuvintelor Când se returnează rezultate, vor fi returnate mai întâi rezultatele care conțin toate cuvintele cheie, iar apoi vor fi returnate rezultatele care conțin `N-1` , `N-2` ,..., `1` cuvinte cheie.

Rezultatele căutării afișate mai întâi asigură acuratețea interogării, iar rezultatele încărcate ulterior (faceți clic pe butonul de încărcare mai mult) asigură rata de retragere.

![](//p.3ti.site/1727684564.avif)

## Încărcare La Cerere

Pentru a îmbunătăți viteza de răspuns, căutarea folosește generatorul `yield` pentru a implementa încărcarea la cerere și revine `limit` dată când este interogat un rezultat.

Rețineți că de fiecare dată când căutați din nou după `yield` , trebuie să redeschideți o tranzacție de interogare de `IndexedDB` .

## Prefix Căutare În Timp Real

Pentru a afișa rezultatele căutării în timp ce utilizatorul tastează, de exemplu, când este introdus `wor` , sunt afișate cuvintele prefixate cu `wor` , cum ar fi `words` și `work` .

![](//p.3ti.site/1727684944.avif)

Nucleul de căutare va folosi tabelul `prefix` pentru ultimul cuvânt după segmentarea cuvântului pentru a găsi toate cuvintele prefixate cu acesta și a căuta în secvență.

Funcția anti-shake `debounce` este, de asemenea, utilizată în interacțiunea front-end (implementată după cum urmează) pentru a reduce frecvența căutărilor de declanșare a intrărilor utilizatorului și pentru a reduce cantitatea de calcul.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Disponibil Offline

Tabelul index nu stochează textul original, ci doar cuvintele, ceea ce reduce cantitatea de stocare.

Evidențierea rezultatelor căutării necesită reîncărcarea textului original, iar potrivirea cu `service worker` poate evita solicitările repetate de rețea.

În același timp, deoarece `service worker` memorează în cache toate articolele, odată ce utilizatorul efectuează o căutare, întregul site, inclusiv căutarea, este disponibil offline.

## Optimizarea Afișajului Documentelor MarkDown

Soluția de căutare frontală pură a lui `i18n.site` este optimizată pentru `MarkDown` documente.

Când se afișează rezultatele căutării, numele capitolului va fi afișat și capitolul va fi navigat când se va face clic.

![](//p.3ti.site/1727686552.avif)

## Rezuma

Căutare inversată full-text implementată exclusiv pe front-end, nu este nevoie de server. Este foarte potrivit pentru site-uri web de dimensiuni mici și mijlocii, cum ar fi documente și bloguri personale.

`i18n.site` Căutare front-end pură auto-dezvoltată cu sursă deschisă, de dimensiuni reduse și răspuns rapid, rezolvă deficiențele căutării integrale cu text integral frontal și oferă o experiență mai bună pentru utilizator.