# .i18n/conf.yml

Fișierul de configurare pentru `i18n.site` este `.i18n/conf.yml` și conținutul este după cum urmează :

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

Dintre acestea, `upload` la `ext:` element de configurare înseamnă că numai `.md` vor fi încărcate la publicare.

## Navigare De Sus nav

`nav:` opțiuni de configurare, corespunzătoare meniului de navigare din partea de sus a paginii de start.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Dintre acestea, `i18n: home` corespunde cu `home: Home` în `en/i18n.yml` (unde `en` este limba sursă a traducerii proiectului).

`en/i18n.yml` conținut este textul afișat în meniul de navigare, care va fi tradus conform `fromTo` din configurație, de exemplu, tradus în `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

După ce traducerea este finalizată, puteți modifica valoarea traducerii `yml` , dar nu adăugați sau ștergeți cheia traducerii `yml` .

### `use: Toc` Cu Contur

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` înseamnă randarea folosind un șablon `Toc` , care este redarea unui singur șablon `Markdown` .

`TOC` este abrevierea lui `Table of Contents` Când acest șablon este redat, conturul acestui fișier `Markdown` va fi afișat în bara laterală.

`url:` reprezintă calea fișierului `Markdown` ( `/` corespunde directorului rădăcină `/README.md` , acest nume de fișier necesită un prefix cu majuscule și un sufix cu litere mici).

### `use: Md` Fără Contur

Șablonul `Md` și șablonul `Toc` sunt același și ambele sunt folosite pentru a reda un singur fișier `Markdown` . Dar șablonul `Md` nu arată conturul în bara laterală.

Puteți modifica `use: Toc` în configurația de mai sus la `use: Md` , rulați din nou `i18n.site` în directorul `md` și apoi vizitați URL-ul de previzualizare a dezvoltării pentru a observa modificările de pe pagina de pornire.

### `use: Blog` Șabloane De Blog

Șablonul de blog afișează o listă de articole (titluri și rezumate) în ordinea timpului de publicare.

[→ Faceți clic aici pentru a afla despre configurația specifică](/i18n.site/conf/blog)

### 0Șabloane De Documente Cu `use: Doc` Fișiere

În fișierul de configurare:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Indică utilizarea `Doc` pentru redarea șablonului.

Șablonul `Doc` acceptă integrarea mai multor `MarkDown` pentru a genera contururi ale documentelor pentru proiecte unice sau multiple.

#### Mai Multe Proiecte Și Mai Multe Fișiere

Configurația `.i18n/conf.yml` în `i18n:doc` este modul de redare multi-proiect cu mai multe fișiere.

Aici, `menu: NB demo1,demo2` , înseamnă utilizarea șablonului `NB` pentru a reda meniul drop-down.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , care este abrevierea lui `Name Breif` , înseamnă că meniul derulant poate afișa numele și sloganul proiectului.

`NB` este urmat de parametrul `demo1,demo2` transmis acestuia.

Notă : ** Nu ar trebui să existe spații ** înainte și după virgula `,` în `demo1,demo2` .

Fișierul index al directorului corespunzător pentru parametrii de mai sus este:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Un Singur Proiect Mai Multe Fișiere

Dacă aveți un singur proiect, îl puteți configura după cum urmează.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Un singur proiect cu mai multe fișiere nu acceptă configurarea `url` ca cale rădăcină `/`
> Dacă __conf.yml → nav:__ Nu este configurată nicio cale de rădăcină, la accesarea paginii de pornire a site-ului web, aceasta va fi rescrisă automat la prima adresă URL din configurația `nav:` .
> Acest design este de a distinge mai bine documentele de proiect, blogurile și alt conținut prin directoare.
> Este recomandat să utilizați un singur fișier și o singură pagină ca pagină de pornire.

> [!TIP]
> Dacă nu este scris `url` , `url` are valoarea implicită de `i18n` Această regulă are efect și pentru alte șabloane.

#### Indexul Cuprinsului TOC

Dacă șablonul `use: Doc` este activat în configurație, vă rugăm să activați plug-in-ul `i18n.addon/toc` în `.i18n/conf.yml` Configurația este după cum urmează :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` va instala și va executa automat acest plug-in, va citi `TOC` fișierul index al directorului și va genera `json` schița directorului.

Dacă este un singur proiect cu mai multe fișiere, directorul rădăcină `TOC` este directorul corespunzător lui `url:` din directorul limbii sursă De exemplu, dacă limba sursă este chineză: fișierul corespunzător lui `url: flashduty` este `zh/flashduty/TOC` .

Dacă este vorba de mai multe proiecte și mai multe fișiere, nu este nevoie să configurați `url:` Directorul rădăcină al lui `TOC` este directorul corespunzător valorii lui `i18n` .

##### Explicație Detaliată a Conținutului

`en/blog/TOC` este următorul :

```
README.md

news/README.md
  news/begin.md
```

##### Utilizați Indentarea Pentru a Indica Nivelurile

`README.md` din primul rând de `en/blog/TOC` de mai sus corespunde cu `i18n.site` din imaginea de mai jos, care este numele proiectului.

Următoarele două rânduri sunt așa cum se arată în captura de ecran de mai jos.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corespunde cu `News` ,
`news/begin.md` corespunde cu `Our Product is Online !`

Fișierele `TOC` sunt indentate pentru a indica relația ierarhică a conturului, acceptă indentarea pe mai multe niveluri și comentariile de linie care încep cu `# ` .

##### Nivelul Părinte Scrie Doar Titlul, Nu Și Conținutul.

Când există mai multe niveluri de indentare, nivelul părinte scrie doar titlul și nu conținutul. În caz contrar, tipografia va fi încurcată.

##### Proiectul README.md

Conținutul poate fi scris în elementul `README.md` , cum ar fi `en/demo2/README.md` .

Rețineți că conținutul acestui fișier nu afișează o schiță a cuprinsului, așa că este recomandat să limitați lungimea și să scrieți o scurtă introducere.

###### Sloganul Proiectului

Puteți vedea că `Deme Two` are sloganul său de proiect sub meniul derulant și numele proiectului `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Aceasta corespunde primului rând de `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Conținutul de după primele două puncte `:` din titlul de prim nivel al proiectului `README.md` va fi considerat sloganul proiectului.

Utilizatorii din China, Japonia și Coreea, vă rugăm să rețineți că ar trebui să utilizați `:` puncte de jumătate de lățime în loc de două puncte de lățime completă.

##### Cum Să Mutați TOC În Vrac?

`TOC` fișiere trebuie plasate în directorul limbii sursă.

De exemplu, dacă limba sursă este chineza, atunci `TOC` de mai sus este `zh/blog/TOC` .

Dacă limba sursă este modificată, trebuie să mutați în lot cele `TOC` fișiere dintr-o anumită limbă din proiect într-o altă limbă.

Puteți consulta următoarele comenzi:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Vă rugăm să modificați `en/` și `zh/` din comanda de mai sus la codul de limbă.

### Încărcare Implicită Fără Calea De Configurare

Pentru o anumită cale care este accesată, dacă prefixul căii nu este configurat în `nav:` , fișierul `MarkDown` corespunzător căii va fi încărcat implicit și redat folosind șablonul `Md` .

De exemplu, dacă `/test` este accesat și `nav:` este configurat fără prefixul acestei căi, iar limba de navigare curentă este engleza (cod `en` ), `/en/test.md` va fi încărcat implicit și redat folosind șablonul `Md` .

Dacă `/en/test.md` acest fișier nu există, va fi afișată pagina implicită `404` .

<img src="//p.3ti.site/1721184299.avif" style="width:360px">