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
addon:
  - i18n.addon/toc
```

În acest sens,配置项 `upload` la `ext:` indică faptul că doar fișierele cu extensia `.md` vor fi încărcate la publicare.

## Navigare De Sus nav

Opțiunile de configurare pentru `nav:` corespund meniului de navigare situat în partea de sus a paginii de start.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Dintre acestea, `i18n: home` corespunde cu `home: Home` din `en/i18n.yml`.

`en/i18n.yml` va fi tradus în mai multe limbi, cum ar fi `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

După finalizarea traducerii, puteți modifica valorile traducerii în fișierul `yml`, dar nu adăugați sau ștergeți cheile traducerii din `yml`.

### `use: Toc`, șablon pentru un singur fișier (cu cuprins)

În secțiunea `nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` înseamnă că se va folosi șablonul `Toc` pentru a reda un singur fișier `Markdown`.

`TOC` este abrevierea pentru `Table of Contents`. Când acest șablon este redat, cuprinsul fișierului `Markdown` va fi afișat în bara laterală.

`url:` indică calea către fișierul `Markdown` (de exemplu, `/` corespunde directorului rădăcină `/README.md`, iar numele fișierului trebuie să aibă prefixul în majuscule și sufixul în minuscule).

### `use: Md`, șablon pentru un singur fișier (fără cuprins)

Șablonul `Md` este similar cu șablonul `Toc`, ambele fiind folosite pentru a reda un singur fișier `Markdown`. Cu toate acestea, șablonul `Md` nu afișează cuprinsul în bara laterală.

Puteți schimba `use: Toc` la `use: Md` în configurația de mai sus, rulați din nou `i18n.site` în directorul `md`, apoi vizitați URL-ul de previzualizare a dezvoltării pentru a observa modificările pe pagina de start.

### Încărcare implicită fără cale de configurare

Dacă o anumită cale este accesată și prefixul acestei căi nu este configurat în `nav:`, atunci fișierul `Markdown` corespunzător căii va fi încărcat implicit și redat folosind șablonul `Md`.

De exemplu, dacă se accesează `/test` și `nav:` nu este configurat pentru această cale, iar limba paginii este engleză (cod `en`), atunci se va încărca implicit `/en/test.md` și se va reda folosind șablonul `Md`.

Dacă `/en/test.md` nu există, se va afișa pagina implicită `404`.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, șablon pentru mai multe fișiere

În fișierul de configurare:

```
  - i18n: blog
    use: Doc
```

Se indică utilizarea `Doc` pentru a reda șablonul.

Șablonul `Doc` suportă integrarea mai multor fișiere `Markdown` pentru a genera cuprinsuri pentru documente unice sau multiple.

#### Proiect unic (cu mai multe fișiere)

`blog` menționat anterior este un exemplu de modul unic de proiect `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Când Adresa url Este Goală, Valoarea Implicită Este i18n

Dacă nu este specificat `url`, atunci `url` va avea valoarea implicită `i18n`. Această regulă se aplică și pentru alte șabloane.

Modul de scriere de mai sus este echivalent cu `url: blog`, iar fișierul corespunzător este `en/blog/TOC`.

#### Proiecte multiple

Configurația `i18n:doc` din `.i18n/conf.yml` este pentru modul multi-proiect.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Aici, `menu: NB demo1,demo2` înseamnă că se va folosi șablonul `NB` pentru a reda meniul derulant.

`NB` este abrevierea pentru `Name Brief`, ceea ce înseamnă că meniul derulant poate afișa numele și sloganul proiectului.

`NB` este urmat de parametrii `demo1,demo2` care îi sunt transmiteți.
Notă: **Nu trebuie să fie spații** înainte și după virgula `,` în `demo1,demo2`.

Pentru parametrii de mai sus, fișierul index al directorului corespunzător este:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indexul de conținut TOC

`i18n.site` va executa plugin-ul `js` `.i18n/hook/after.tran/TOC.js` din depozitul demonstrativ pentru a citi fișierele index `TOC` corespunzătoare configurărilor șablonului `doc` și pentru a genera cuprinsul `json`.

Dacă se folosește șablonul `doc`, trebuie să fie instalat acest plugin.

Dacă inițializați proiectul `i18n.site` dintr-un folder gol, nu uitați să copiați fișierele `.i18n` din proiectul demonstrativ în directorul dvs.

Șablonul `Doc` va reda conturul cuprinsului pe baza `json` generat.

##### Explicație detaliată a conținutului

`en/blog/TOC` conține următorul text:

```
README.md

news/README.md
  news/begin.md
```

##### Indentarea este folosită pentru a indica nivelurile

`README.md` din primul rând al directorului `en/blog/TOC` de mai sus corespunde cu `i18n.site` din imaginea de mai jos, care este numele proiectului.

Următoarele două rânduri sunt așa cum se arată în captura de ecran de mai jos.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corespunde cu `News`
`news/begin.md` corespunde cu `Our Product is Online !`

Fișierele `TOC` sunt indentate pentru a indica relația ierarhică a cuprinsului, suportă mai multe niveluri de indentare și comentarii de linie care încep cu `#`.

##### Nivelul părinte indică doar titlul, nu și conținutul

Când există mai multe niveluri de indentare, nivelul părinte indică doar titlul, fără conținut, pentru a evita erorile de formatare.

##### Proiectul README.md

În `README.md` al proiectului, cum ar fi `en/demo2/README.md`, se poate scrie conținut.

Rețineți că conținutul acestui fișier nu afișează cuprinsul, așa că este recomandat să limitați lungimea și să scrieți o scurtă introducere.

###### Sloganul proiectului

Puteți vedea că `Deme Two` are sloganul proiectului sub meniul derulant și numele proiectului `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Acest lucru corespunde primului rând din `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Conținutul de după primul punct `:` din titlul de nivelul întâi al `README.md` al proiectului este considerat sloganul proiectului.

Utilizatorii din China, Japonia și Coreea, vă rugăm să rețineți să utilizați punctul de jumătate de lățime `:` în loc de două puncte de lățime completă.

##### Cum să mutați TOC în masă?

Fișierele `TOC` trebuie plasate în directorul limbii sursă.

De exemplu, dacă limba sursă este chineza, atunci `TOC` de mai sus este `zh/blog/TOC`.

Dacă limba sursă este modificată, trebuie să mutați în masă fișierele `TOC` dintr-o limbă anume din proiect într-o altă limbă.

Puteți consulta următoarele comenzi:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modificați `en/` și `zh/` din comanda de mai sus la codul limbii corespunzător.