# .i18n/conf.yml

`i18n.site` Konfiguracijska datoteka je `.i18n/conf.yml` .

Osim postavki `ignore:` i `i18n:` za [`i18`](/i18) , konfiguracijska datoteka je sljedeća:

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

Među njima, `ext:` konfiguracijska stavka od `upload` znači da će samo `.md` biti učitano prilikom objavljivanja.

## Gornja Navigacija nav

`nav:` opcije konfiguracije, koje odgovaraju navigacijskom izborniku na vrhu početne stranice.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Među njima, `i18n: home` odgovara `en/i18n.yml`中`home: Home` .

`en/i18n.yml` bit će preveden na više jezika, kao što je `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nakon što je prijevod dovršen, možete promijeniti vrijednost `yml` u prijevodu, ali nemojte dodavati ili brisati ključ prijevoda `yml` .

### `use: Toc` , Predložak Jedne Datoteke (S Obrisom)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` znači korištenje `Toc` renderiranja, što je renderiranje jednog `Markdown` predloška.

`TOC` je skraćenica od `Table of Contents` Kada se ovaj predložak prikaže, obris ove `Markdown` datoteke bit će prikazan na bočnoj traci.

`url:` predstavlja putanju datoteke `Markdown` ( `/` odgovara korijenskom direktoriju `/README.md` , ovaj naziv datoteke zahtijeva prefiks velikim slovima i sufiks malim slovima).

### `use: Md` , Predložak Jedne Datoteke (Bez Obrisa)

`Md` Predložak je isti kao i `Toc` , oba se koriste za prikaz jedne datoteke `Markdown` . Međutim `Md` predložak ne prikazuje obris na bočnoj traci.

Možete izmijeniti `use: Toc` u gornjoj konfiguraciji na `use: Md` , ponovno pokrenuti `i18n.site` u direktoriju `md` , a zatim posjetite URL za pregled razvoja kako biste vidjeli promjene na početnoj stranici.

### Zadano Učitavanje Bez Konfiguracijskog Puta

Ako prefiks staze određene staze kojoj se pristupa nije konfiguriran u `nav:` datoteka `MarkDown` koja odgovara stazi bit će učitana prema zadanim postavkama i prikazana pomoću predloška `Md` .

Na primjer, ako posjetite `/test` , a `nav:` je konfiguriran bez ove staze, a jezik stranice je engleski (kod `en` ), predložak će se učitati `/en/test.md` i prikazati pomoću `Md` prema zadanim postavkama.

Ako `/en/test.md` ova datoteka ne postoji, bit će prikazana zadana stranica `404` .

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Predložak S Više Datoteka

U konfiguracijskoj datoteci:

```
  - i18n: blog
    use: Doc
```

Označava korištenje `Doc` za iscrtavanje predloška.

`Doc` podržava integraciju višestrukih `MarkDown` za generiranje obrisa dokumenta za jedan ili više projekata.

#### Jedan Projekt (Više Datoteka)

`blog` u gornjem je način rada s jednim projektom `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kada Je url Prazan, Zadana Je Vrijednost i18n

Ako ne napišete `url` , `url` pravilo vrijedi i za `i18n` predloške.

Gornji način pisanja je ekvivalentan `url: blog` a odgovarajuća datoteka je `en/blog/TOC` .

#### Više Projekata

`.i18n/conf.yml` Konfiguracija u `i18n:doc` je način rada za više projekata.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ovdje `menu: NB demo1,demo2` znači korištenje `NB` za prikaz padajućeg izbornika.

`NB` , je skraćenica od `Name Breif` , koja označava da padajući izbornik može prikazati naziv i slogan projekta.

`NB` slijedi parametar `demo1,demo2` koji mu je proslijeđen.
Imajte `demo1,demo2` umu da ne smije biti razmaka ** prije i poslije zareza `,` u : **

Za gornje parametre, odgovarajuća datoteka indeksa direktorija je:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Kazalo Sadržaja

`i18n.site` Izvršit će `js` dodatak `.i18n/hook/after.tran/TOC.js` u demo skladištu za čitanje datoteke indeksa direktorija `doc` koja odgovara konfiguraciji predloška `TOC` za generiranje `json` nacrta direktorija.

Ako koristite predložak `doc` , morate imati ovaj dodatak.

Ako inicijalizirate projekt `i18n.site` iz prazne mape, ne zaboravite kopirati `.i18n` u demo projektu u svoj direktorij.

Predložak će renderirati pregled sadržaja na temelju generiranog `json` `Doc`

##### Detaljno Objašnjenje Sadržaja

Sadržaj : sljedeći `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Koristite Uvlake Za Označavanje Razina

Iznad `en/blog/TOC` `README.md` u prvom redu odgovara `i18n.site` na slici ispod, što je naziv projekta.

Sljedeća dva retka prikazana su na slici ispod.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` odgovara `News` ,
`news/begin.md` odgovara `Our Product is Online !`

`TOC` Datoteka je uvučena kako bi označila hijerarhijski odnos strukture i podržava uvlačenje na više razina.

##### Nadređena Razina Piše Samo Naslov, Ne I Sadržaj.

Kada postoji više razina uvlačenja, nadređena razina piše samo naslov, a ne i sadržaj. U suprotnom, tipografija će biti pokvarena.

##### Projekt README.md 

`README.md` projekta, na primjer, možete pisati sadržaj u `en/demo2/README.md` .

Imajte na umu da sadržaj ove datoteke ne prikazuje nacrt sadržaja, stoga se preporučuje ograničiti duljinu i napisati kratki uvod.

###### Slogan Projekta

Kao što vidite `Deme Two` ispod padajućeg izbornika i opisa projekta nalazi `Your Project slogan` njegov slogan :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: odgovara prvom retku `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projekt `README.md` Sadržaj iza prve dvotočke `:` u naslovu prve razine smatrat će se sloganom projekta.

Korisnici iz Kine, Japana i Koreje, obratite pozornost da morate koristiti dvotočku polovične širine umjesto dvotočke pune širine `:`

##### Kako Skupno Premjestiti TOC?

`TOC` Datoteka se mora smjestiti u direktorij izvornog jezika.

Na primjer, ako je izvorni jezik kineski, tada je `TOC` iznad `zh/blog/TOC` .

Ako je izvorni jezik izmijenjen, morate skupno premjestiti `TOC` na određenom jeziku u projektu na drugi jezik.

Možete se obratiti na sljedeće naredbe:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Molimo promijenite `en/` i `zh/` u gornjoj naredbi na svoj jezični kod.


