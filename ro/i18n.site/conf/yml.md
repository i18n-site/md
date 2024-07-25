# .i18n/conf.yml

`i18n.site` Fișierul de configurare este `.i18n/conf.yml` .

Cu excepția setărilor `ignore:` și `i18n:` [`i18`](/i18) , fișierul de configurare este după cum urmează:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

Printre acestea, elementul de configurare `ext:` de `upload` înseamnă că numai `.md` vor fi încărcate la publicare.

## Navigare De Sus nav

`nav:` Opțiuni de configurare, corespunzătoare meniului de navigare din partea de sus a paginii de start.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Printre acestea, `i18n: home` corespunde `en/i18n.yml`中`home: Home` .

`en/i18n.yml` va fi tradus în mai multe limbi, cum ar fi `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

După finalizarea traducerii, puteți modifica valoarea lui `yml` în traducere, dar nu adăugați sau ștergeți cheia de traducere `yml` .

### `use: Toc` Șablon De Fișier Unic (Cu Contur)

`nav` Configurare :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` înseamnă folosirea redării `Toc` , care reprezintă un singur șablon `Markdown` .

`TOC` este abrevierea lui `Table of Contents` . Când acest șablon este redat, conturul acestui fișier `Markdown` va fi afișat în bara laterală.

`url:` reprezintă calea fișierului `Markdown` ( `/` corespunde directorului rădăcină `/README.md` , acest nume de fișier necesită un prefix cu majuscule și un sufix cu minuscule).

### `use: Md` Șablon De Fișier Unic (Fără Schiță)

`Md` este același cu `Toc` , ambele sunt folosite pentru a reda un singur fișier `Markdown` . Cu toate acestea `Md` șablonul nu arată conturul în bara laterală.

Puteți modifica `use: Toc` în configurația de mai sus la `use: Md` , rulați `i18n.site` din nou în directorul `md` , apoi vizitați URL-ul de previzualizare a dezvoltării pentru a observa modificările de pe pagina de pornire.

### Încărcare Implicită Fără Calea De Configurare

Dacă prefixul de cale al unei anumite căi care este accesată nu este configurat în `nav:` fișierul `MarkDown` corespunzător căii va fi încărcat implicit și redat folosind șablonul `Md` .

De exemplu, dacă vizitați `/test` și `nav:` este configurat fără această cale, iar limba paginii este engleza (codul `en` ), șablonul va fi încărcat `/en/test.md` și redat folosind `Md` în mod implicit.

`/en/test.md` acest fișier nu există, va fi afișată pagina implicită `404` .

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Șablon Cu Mai Multe Fișiere

În fișierul de configurare:

```
  - i18n: blog
    use: Doc
```

Indică utilizarea `Doc` pentru redarea șablonului.

`Doc` acceptă integrarea mai multor `MarkDown` pentru a genera contururi de documente pentru proiecte unice sau multiple.

#### Proiect Unic (Fișiere Multiple)

`blog` în cele de mai sus este modul un singur proiect de `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Când Adresa url Este Goală, Valoarea Implicită Este i18n

Dacă nu scrieți `url` `url` la valoarea de `i18n` Această regulă are efect și pentru alte șabloane.

Metoda de scriere de mai sus este echivalentă cu a avea `url: blog` iar fișierul corespunzător este `en/blog/TOC` .

#### Proiecte Multiple

`.i18n/conf.yml` Configurația în `i18n:doc` este modul multi-proiect.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Aici, `menu: NB demo1,demo2` înseamnă folosirea `NB` pentru a reda meniul drop-down.

`NB` , este abrevierea lui `Name Breif` , indicând faptul că meniul derulant poate afișa numele și sloganul proiectului.

`NB` este urmat de parametrul `demo1,demo2` transmis.
Rețineți că nu ar trebui `demo1,demo2` existe spații ** înainte și după virgulă `,` în : **

Pentru parametrii de mai sus, fișierul index al directorului corespunzător este:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indexul Cuprinsului TOC

`i18n.site` executa `js` plugin-ul `.i18n/hook/after.tran/TOC.js` în depozitul demo pentru a citi fișierul index al directorului `doc` corespunzător configurației șablonului `TOC` pentru a genera `json` schița directorului.

Dacă `doc` șablonul, trebuie să aveți acest plug-in.

Dacă inițializați proiectul `i18n.site` dintr-un folder gol, nu uitați să copiați `.i18n` din proiectul demo în directorul dvs.

`Doc` va reda conturul cuprins pe baza `json` generată.

##### Explicație Detaliată a Conținutului

Conținutul : următorul `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Utilizați Indentarea Pentru a Indica Nivelurile

Mai sus `en/blog/TOC` `README.md` din prima linie corespunde cu `i18n.site` din imaginea de mai jos, care este numele proiectului.

Următoarele două rânduri sunt așa cum se arată în captura de ecran de mai jos.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corespunde `News` ,
`news/begin.md` corespunde `Our Product is Online !`

`TOC` Fișierul este indentat pentru a indica relația ierarhică a conturului și acceptă indentarea pe mai multe niveluri.

##### Nivelul Părinte Scrie Doar Titlul, Nu Și Conținutul.

Când există mai multe niveluri de indentare, nivelul părinte scrie doar titlul și nu conținutul. În caz contrar, tipografia va fi încurcată.

##### Proiectul README.md 

`README.md` a proiectului, de exemplu, puteți scrie conținut în `en/demo2/README.md` .

Rețineți că conținutul acestui fișier nu afișează o schiță a cuprinsului, așa că este recomandat să limitați lungimea și să scrieți o scurtă introducere.

###### Sloganul Proiectului

După cum puteți vedea `Deme Two` sub meniul derulant și numele proiectului, există sloganul său `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: corespunde primei linii `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Proiect `README.md` Conținutul de după primele `:` puncte din titlul de prim nivel va fi considerat sloganul proiectului.

Utilizatori din China, Japonia și Coreea, vă rugăm să rețineți că trebuie să utilizați două puncte pe jumătate lățime `:` loc de două puncte pe lățime completă.

##### Cum Să Mutați TOC În Vrac?

`TOC` Fișierul trebuie să fie plasat în directorul limbii sursă.

De exemplu, dacă limba sursă este chineza, atunci `TOC` sus este `zh/blog/TOC` .

Dacă limba sursă este modificată, trebuie să mutați `TOC` într-o anumită limbă din proiect într-o altă limbă.

Puteți consulta următoarele comenzi:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Vă rugăm să modificați `en/` și `zh/` din comanda de mai sus la codul de limbă.


