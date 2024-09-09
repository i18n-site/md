# .i18n/conf.yml

Profil za `i18n.site` je `.i18n/conf.yml` .

Osim postavki [`i18`](/i18) , `ignore:` i `i18n:` , konfiguracijski fajl je sljedeći:

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

Među njima, `upload` do `ext:` stavka konfiguracije znači da će samo `.md` biti učitane prilikom objavljivanja.

## Top Navigation nav

`nav:` opcija konfiguracije, što odgovara navigacijskom meniju na vrhu početne stranice.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Među njima, `i18n: home` odgovara `home: Home` u `en/i18n.yml` .

`en/i18n.yml` će biti preveden na više jezika, kao što je `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nakon što se prijevod završi, možete promijeniti vrijednost prijevoda `yml` , ali nemojte dodavati ili brisati ključ prijevoda `yml` .

### `use: Toc` , Predložak Jednog Fajla (Sa Obrisom)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` znači renderiranje pomoću `Toc` šablona, što predstavlja renderiranje jednog šablona `Markdown` .

`TOC` je skraćenica od `Table of Contents` Kada se ovaj predložak prikaže, obris ove `Markdown` datoteke će biti prikazan na bočnoj traci.

`url:` predstavlja putanju datoteke `Markdown` ( `/` odgovara korijenskom direktoriju `/README.md` , ovo ime datoteke zahtijeva prefiks velikim slovima i sufiks malim slovima).

### `use: Md` , Predložak Jednog Fajla (Bez Obrisa)

Šablon `Md` i šablon `Toc` su isti i oba se koriste za prikazivanje jedne `Markdown` datoteke. Ali predložak `Md` ne prikazuje obris u bočnoj traci.

Možete izmijeniti `use: Toc` u gornjoj konfiguraciji u `use: Md` , ponovo pokrenuti `i18n.site` u direktoriju `md` , a zatim posjetiti URL za pregled razvoja kako biste vidjeli promjene na početnoj stranici.

### Zadano Učitavanje Bez Konfiguracijske Staze

Ako se pristupi određenoj stazi, a njen prefiks putanje nije konfiguriran u `nav:` , datoteka `MarkDown` koja odgovara putanji bit će učitana prema zadanim postavkama i prikazana pomoću predloška `Md` .

Na primjer, ako se pristupi `/test` , a `nav:` je konfigurisan bez ove staze, a jezik stranice je engleski (kod `en` ), `/en/test.md` će biti učitano prema zadanim postavkama i prikazano pomoću šablona `Md` .

Ako je `/en/test.md` ova datoteka ne postoji, bit će prikazana zadana stranica `404` .

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Šablon Za Više Datoteka

U konfiguracijskoj datoteci:

```
  - i18n: blog
    use: Doc
```

Označava korištenje `Doc` za renderiranje šablona.

`Doc` šablon podržava integraciju višestrukih `MarkDown` za generiranje obrisa dokumenta za jedan ili više projekata.

#### Jedan Projekat (Više Fajlova)

`blog` iznad je način rada jedne stavke od `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kada Je url Prazan, Podrazumevana Je Vrednost i18n

Ako `url` nije napisano, `url` je zadana vrijednost `i18n` Ovo pravilo također stupa na snagu za druge šablone.

Gornja metoda pisanja je ekvivalentna `url: blog` , a odgovarajuća datoteka je `en/blog/TOC` .

#### Više Projekata

Konfiguracija `i18n:doc` od `.i18n/conf.yml` je višeprojektni način rada.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ovdje, `menu: NB demo1,demo2` , znači korištenje šablona `NB` za renderiranje padajućeg izbornika.

`NB` , što je skraćenica od `Name Breif` , znači da padajući meni može prikazati naziv i slogan projekta.

Nakon `NB` slijedi parametar `demo1,demo2` koji mu je proslijeđen.
: ** Ne bi trebalo biti razmaka ** ispred i iza zareza `,` u `demo1,demo2` .

Za gore navedene parametre, odgovarajuća datoteka indeksa direktorija je:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indeks Sadržaja TOC-A

`i18n.site` će izvršiti `js` dodatak `.i18n/hook/after.tran/TOC.js` u demo skladištu za čitanje indeksne datoteke `doc` direktorija koja odgovara konfiguraciji `TOC` šablona za generiranje `json` okvira direktorija.

Ako koristite šablon `doc` , morate imati ovaj dodatak.

Ako inicijalizirate projekt `i18n.site` iz prazne mape, ne zaboravite kopirati demo projekat `.i18n` u svoj direktorij.

Predložak `Doc` će prikazati pregled tabele sadržaja na osnovu generisanog `json` .

##### Detaljno Objašnjenje Sadržaja

`en/blog/TOC` je sljedeći :

```
README.md

news/README.md
  news/begin.md
```

##### Koristite Udubljenje Da Označite Nivoe

`README.md` u prvom redu od `en/blog/TOC` iznad odgovara `i18n.site` na slici ispod, što je naziv projekta.

Sljedeća dva reda su kao što je prikazano na slici ispod.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` odgovara `News` ,
`news/begin.md` odgovara `Our Product is Online !`

Datoteke `TOC` su uvučene da naznače hijerarhijski odnos konture, podržavaju uvlačenje na više nivoa i komentare reda koji počinju sa `#` .

##### Roditeljski Nivo Piše Samo Naslov, a Ne Sadržaj.

Kada postoji više nivoa uvlačenja, roditeljski nivo piše samo naslov, a ne sadržaj. U suprotnom, tipografija će biti zbrkana.

##### Projekt README.md

Sadržaj se može upisati u stavku `README.md` , kao što je `en/demo2/README.md` .

Imajte na umu da sadržaj ove datoteke ne prikazuje pregled tabele sadržaja, pa se preporučuje da ograničite dužinu i napišete kratak uvod.

###### Slogan Projekta

Možete vidjeti da `Deme Two` ima svoj slogan projekta ispod padajućeg izbornika i naziv projekta : `Your Project slogan`

![](https://p.3ti.site/1721276842.avif)

Ovo odgovara prvom redu `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Slogan projekta smatrat će se sadržaj nakon prve dvotočke `:` naslova prvog nivoa projekta `README.md` .

Korisnici iz Kine, Japana i Koreje, imajte na umu da trebate koristiti dvotočku `:` u pola širine umjesto dvotačke pune širine.

##### Kako Premjestiti TOC Na Veliko?

`TOC` datoteka mora biti smješteno u direktorij izvornog jezika.

Na primjer, ako je izvorni jezik kineski, tada je `TOC` iznad `zh/blog/TOC` .

Ako je izvorni jezik izmijenjen, morate grupno premjestiti datoteke `TOC` određenog jezika u projektu na drugi jezik.

Možete se obratiti na sljedeće naredbe:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Molimo promijenite `en/` i `zh/` u gornjoj naredbi u vaš kod jezika.