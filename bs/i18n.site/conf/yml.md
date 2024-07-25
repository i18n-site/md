# .i18n/conf.yml

Konfiguracijski fajl je `.i18n/conf.yml` `i18n.site`

Osim postavki `ignore:` i `i18n:` za [`i18`](/i18) konfiguracijska datoteka je sljedeća:

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

## Top Navigation nav

`nav:` opcije konfiguracije, koje odgovaraju navigacijskom meniju na vrhu početne stranice.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Među njima `i18n: home` odgovara `en/i18n.yml`中`home: Home` .

`en/i18n.yml` će biti preveden na više jezika, kao što je `zh/i18n.yml` !

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nakon što je prijevod završen, možete promijeniti vrijednost `yml` u prijevodu, ali nemojte dodavati ili brisati ključ prijevoda `yml` .

### , Predložak Jednog Fajla (Sa Obrisom) `use: Toc`

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` znači korištenje `Toc` renderiranja, što predstavlja jedan šablon `Markdown` .

`TOC` je skraćenica od `Table of Contents` Kada se ovaj predložak prikaže, na bočnoj traci će se prikazati obris ove `Markdown` .

`url:` predstavlja putanju datoteke od `Markdown` ( `/` odgovara korijenskom direktoriju `/README.md` , ovo ime datoteke zahtijeva prefiks velikim slovima i sufiks malim slovima).

### , Predložak Jednog Fajla (Bez Obrisa) `use: Md`

`Md` je isti kao `Toc` , oba se koriste za prikazivanje jedne datoteke `Markdown` . Međutim `Md` predložak ne prikazuje obris na bočnoj traci.

Možete izmijeniti `use: Toc` u gornjoj konfiguraciji u `use: Md` , ponovo pokrenuti `i18n.site` u direktoriju `md` , a zatim posjetiti URL za pregled razvoja da biste vidjeli promjene na početnoj stranici.

### Zadano Učitavanje Bez Konfiguracijske Staze

Ako prefiks putanje određene staze kojoj se pristupa nije konfigurisan u `nav:` datoteka `MarkDown` koja odgovara putanji bit će učitana prema zadanim postavkama i prikazana pomoću `Md` šablona.

Na primjer, ako posjetite `/test` a `nav:` je konfiguriran bez ove staze, a jezik stranice je engleski (kod `en` ), predložak će se učitati `/en/test.md` i prikazati pomoću `Md` prema zadanim postavkama.

`/en/test.md` ova datoteka ne postoji, bit će prikazana zadana `404` stranica.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` Šablon Za Više Datoteka

U konfiguracijskoj datoteci:

```
  - i18n: blog
    use: Doc
```

Označava korištenje `Doc`

`Doc` podržava integraciju višestrukih `MarkDown` za generiranje obrisa dokumenata za jedan ili više projekata.

#### Jedan Projekat (Više Fajlova)

`blog` u gore navedenom je modus jednog projekta od `Doc` !

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kada Je url Prazan, Podrazumevana Je Vrednost i18n

Ako ne `url` , `url` na vrijednost `i18n` Ovo pravilo također stupa na snagu za druge šablone.

Gornji metod pisanja je ekvivalentan `url: blog` a odgovarajuća datoteka je `en/blog/TOC` .

#### Više Projekata

`.i18n/conf.yml` Konfiguracija u `i18n:doc` je višeprojektni način.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ovdje, `menu: NB demo1,demo2` znači korištenje `NB` za renderiranje padajućeg menija.

`NB` je skraćenica od `Name Breif` , što označava da se u padajućem meniju može prikazati naziv i slogan projekta.

`NB` je praćen parametrom `demo1,demo2` koji mu je proslijeđen.
Imajte na `demo1,demo2` da ne bi trebalo biti razmaka ** ispred i iza zareza `,` u : **

Za gore navedene parametre, odgovarajuća datoteka indeksa direktorija je:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indeks Sadržaja TOC-A

Izvršit `i18n.site` `js` dodatak `.i18n/hook/after.tran/TOC.js` u demo skladištu za čitanje datoteke indeksa direktorija `doc` koja odgovara konfiguraciji predloška `TOC` kako bi se generirao `json` okvira direktorija.

Ako koristite `doc` , morate imati ovaj dodatak.

Ako inicijalizirate `i18n.site` iz prazne mape, ne zaboravite kopirati `.i18n` u demo projektu u svoj direktorij.

Predložak će prikazati prikaz sadržaja na osnovu generiranog `json` `Doc`

##### Detaljno Objašnjenje Sadržaja

Sadržaj : sljedeći `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Koristite Udubljenje Da Označite Nivoe

Iznad `en/blog/TOC` `README.md` u prvom redu odgovara `i18n.site` na slici ispod, što je naziv projekta.

Sljedeća dva reda su kao što je prikazano na slici ispod.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

odgovara `News` , `news/README.md`
odgovara `Our Product is Online !` `news/begin.md`

`TOC` Datoteka je uvučena kako bi označila hijerarhijski odnos strukture i podržava uvlačenje na više nivoa.

##### Roditeljski Nivo Piše Samo Naslov, a Ne Sadržaj.

Kada postoji više nivoa uvlačenja, roditeljski nivo piše samo naslov, a ne sadržaj. U suprotnom, tipografija će biti zbrkana.

##### Projekt README.md 

projekta, na primjer, možete napisati sadržaj u `en/demo2/README.md` `README.md`

Imajte na umu da sadržaj ove datoteke ne prikazuje pregled tabele sadržaja, pa se preporučuje da ograničite dužinu i napišete kratak uvod.

###### Slogan Projekta

Kao što vidite `Deme Two` ispod padajućeg menija i naziva projekta nalazi `Your Project slogan` njegov slogan :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: odgovara prvom redu `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projekt `README.md` Sadržaj nakon prve dvotočke `:` u naslovu prvog nivoa smatrat će se sloganom projekta.

Korisnici iz Kine, Japana i Koreje, imajte na umu da morate koristiti dvotočku u pola širine umjesto pune širine `:`

##### Kako Premjestiti TOC Na Veliko?

`TOC` Datoteka mora biti smještena u direktorij izvornog jezika.

Na primjer, ako je izvorni jezik kineski, gore je `zh/blog/TOC` `TOC`

Ako je izvorni jezik izmijenjen, morate grupno premjestiti `TOC` na određenom jeziku u projektu na drugi jezik.

Možete se obratiti na sljedeće naredbe:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Molimo izmijenite `en/` i `zh/` u gornjoj naredbi u vaš kod jezika.


