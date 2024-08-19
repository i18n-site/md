# .i18n/conf.yml

Profilul pentru `i18n.site` este `.i18n/conf.yml`.

Cu excepția setărilor [`i18`](/i18) , `ignore:` și `i18n:` , fișierul de configurare este după cum urmează:

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

Dintre acestea, opțiunea `upload` la `ext:` indică faptul că doar fișierele `.md` vor fi încărcate la publicare.

## Navigare De Sus nav

Opțiunile de configurare `nav:` corespund meniului de navigare din partea de sus a paginii de start.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Dintre acestea, `i18n: home` se potrivește cu `home: Home` din `en/i18n.yml`.

`en/i18n.yml` va fi tradus în mai multe limbi, cum ar fi `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

După finalizarea traducerii, puteți modifica valorile traducerii `yml`, dar nu adăugați sau ștergeți cheile traducerii `yml`.

### `use: Toc` , Șablon De Fișier Unic (Cu Contur)

În configurarea `nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` înseamnă utilizarea unui șablon `Toc` pentru randare, ceea ce implică randarea unui singur șablon `Markdown`.

`TOC` este abrevierea de la `Table of Contents`. Când acest șablon este randat, cuprinsul fișierului `Markdown` va fi afișat în bara laterală.

`url:` reprezintă calea fișierului `Markdown` ( `/` corespunde directorului rădăcină `/README.md`, numele fișierului trebuie să fie cu majuscule la început și litere mici la sfârșit).

### `use: Md` , Șablon De Fișier Unic (Fără Contur)

Șablonul `Md` este similar cu șablonul `Toc` și este folosit pentru a randă un singur fișier `Markdown`. Cu toate acestea, șablonul `Md` nu afișează cuprinsul în bara laterală.

Puteți modifica `use: Toc` din configurația de mai sus la `use: Md`, rulați din nou `i18n.site` în directorul `md` și apoi vizitați URL-ul de previzualizare a dezvoltării pentru a observa modificările de pe pagina de pornire.

### Încărcare Implicită Fără Calea De Configurare

Dacă o anumită cale este accesată și prefixul său de cale nu este configurat în `nav:` , fișierul `Markdown` corespunzător căii va fi încărcat implicit și redat folosind șablonul `Md`.

De exemplu, dacă este accesat `/test` și `nav:` nu este configurat pentru această cale, iar limba paginii este engleză (cod `en`), `/en/test.md` va fi încărcat implicit și redat folosind șablonul `Md`.

Dacă `/en/test.md` acest fișier nu există, va fi afișată pagina implicită `404`.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Șablon Cu Mai Multe Fișiere

În fișierul de configurare:

```
  - i18n: blog
    use: Doc
```

Se indică utilizarea șablonului `Doc` pentru randare.

Șablonul `Doc` acceptă integrarea mai multor fișiere `Markdown` pentru a genera cuprinsuri ale documentelor pentru proiecte unice sau multiple.

#### Proiect Unic (Fișiere Multiple)

`blog` de mai sus este un exemplu de mod cu un singur proiect de `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Când Adresa url Este Goală, Valoarea Implicită Este i18n

Dacă nu este scris `url`, `url` are valoarea implicită de `i18n`. Această regulă este valabilă și pentru alte șabloane.

Metoda de scriere de mai sus este echivalentă cu `url: blog`, iar fișierul corespunzător este `en/blog/TOC`.

#### Proiecte Multiple

Configurația `i18n:doc` din `.i18n/conf.yml` este un mod multi-proiect.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Aici, `menu: NB demo1,demo2` indică utilizarea șablonului `NB` pentru a reda meniul derulant.

`NB`, care este abrevierea de la `Name Brief`, înseamnă că meniul derulant poate afișa numele și sloganul proiectului.

`NB` este urmat de parametrii `demo1,demo2` transmiteți acestuia.
Notă: **Nu există spații** înainte și după virgula `,` în `demo1,demo2`.

Fișierul index al directorului corespunzător pentru parametrii de mai sus este:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indexul Cuprinsului TOC

`i18n.site` va executa plugin-ul `js` `.i18n/hook/after.tran/TOC.js` în depozitul demonstrativ pentru a citi fișierul index cu `doc` directoare corespunzătoare configurației șablonului `TOC` pentru a genera schița în format `json` a directoarelor.

Dacă utilizați șablonul `Doc`, trebuie să aveți acest plugin.

Dacă inițializați proiectul `i18n.site` dintr-un director gol, nu uitați să copiați directorul `.i18n` din proiectul demo în directorul dvs.

Șablonul `Doc` va reda cuprinsul pe baza `json` generat.

##### Explicație Detaliată a Conținutului

`en/blog/TOC` este următorul:

```
README.md

news/README.md
  news/begin.md
```

##### Utilizați Indentarea Pentru a Indica Nivelurile

`README.md` din primul rând de `en/blog/TOC` de mai sus corespunde cu `i18n.site` din imaginea de mai jos, care este numele proiectului.

Următoarele două rânduri sunt așa cum se arată în captura de ecran de mai jos.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corespunde cu `News`,
`news/begin.md` corespunde cu `Our Product is Online !`

Fișierele `TOC` sunt indentate pentru a indica relația ierarhică a cuprinsului și pentru a suporta indentarea pe mai multe niveluri.

##### Nivelul Părinte Scrie Doar Titlul, Nu Și Conținutul

Când există mai multe niveluri de indentare, nivelul părinte scrie doar titlul și nu conținutul. În caz contrar, tipografia va fi încurcată.

##### Proiectul README.md

Conținutul poate fi scris în fișierul `README.md`, de exemplu `en/demo2/README.md`.

Rețineți că conținutul acestui fișier nu afișează o schiță a cuprinsului, așa că este recomandat să limitați lungimea și să scrieți o scurtă introducere.

###### Sloganul Proiectului

Puteți vedea că `Deme Two` are sloganul proiectului sub meniul derulant și numele proiectului `Your Project slogan`:

![](https://p.3ti.site/1721276842.avif)

Aceasta corespunde primului rând `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Conținutul de după primele două puncte `:` din titlul de prim nivel al proiectului `README.md` va fi considerat sloganul proiectului.

Utilizatorii din China, Japonia și Coreea, vă rugăm să rețineți că ar trebui să utilizați `:` puncte de jumătate de lățime în loc de două puncte de lățime completă.

##### Cum Să Mutați TOC În Vrac?

`TOC` fișiere trebuie plasate în directorul limbii sursă.

De exemplu, dacă limba sursă este chineza, atunci `TOC` de mai sus este `zh/blog/TOC`.

Dacă limba sursă este modificată, trebuie să mutați în lot cele `TOC` fișiere dintr-o anumită limbă din proiect într-o altă limbă.

Puteți consulta următoarele comenzi:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Vă rugăm să modificați `en/` și `zh/` din comanda de mai sus la codul de limbă.