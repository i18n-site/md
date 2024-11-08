# .i18n/conf.yml

Konfiguracijska datoteka za `i18n.site` je `.i18n/conf.yml` , a sadržaj je sljedeći :

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

Među njima, stavka konfiguracije `upload` do `ext:` znači da će samo `.md` biti učitane prilikom objavljivanja.

## Gornja Navigacija nav

`nav:` opcija konfiguracije, koje odgovaraju navigacijskom izborniku na vrhu početne stranice.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Među njima, `i18n: home` odgovara `home: Home` u `en/i18n.yml` (gdje je `en` izvorni jezik prijevoda projekta).

Sadržaj `en/i18n.yml` je tekst prikazan u navigacijskom izborniku, koji će biti preveden prema `fromTo` u konfiguraciji, na primjer, preveden u `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nakon što je prijevod dovršen, možete promijeniti vrijednost prijevoda `yml` , ali nemojte dodavati ili brisati ključ prijevoda `yml` .

### `use: Toc` Dokumenta S Obrisom

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` znači iscrtavanje korištenjem predloška `Toc` , što je iscrtavanje jednog predloška `Markdown` .

`TOC` je skraćenica od `Table of Contents` Kada se ovaj predložak prikaže, obris ove `Markdown` datoteke bit će prikazan na bočnoj traci.

`url:` predstavlja putanju datoteke od `Markdown` ( `/` odgovara korijenskom direktoriju `/README.md` , ovaj naziv datoteke zahtijeva prefiks velikim slovima i sufiks malim slovima).

### `use: Md` Predložak Jednog Dokumenta Bez Obrisa

Predložak `Md` i predložak `Toc` isti su i oba se koriste za iscrtavanje jedne datoteke `Markdown` . Ali predložak `Md` ne prikazuje obris na bočnoj traci.

Možete izmijeniti `use: Toc` u gornjoj konfiguraciji u `use: Md` , ponovno pokrenuti `i18n.site` u direktoriju `md` , a zatim posjetiti URL pregleda razvoja kako biste vidjeli promjene na početnoj stranici.

### `use: Blog` Predložaka Bloga

Predložak bloga prikazuje popis članaka (naslova i sažetaka) prema vremenu objave.

[→ Kliknite ovdje kako biste saznali više o specifičnoj konfiguraciji](/i18n.site/conf/blog)

### `use: Doc` Predlošci Dokumenata S Više Datoteka

U konfiguracijskoj datoteci:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Označava korištenje `Doc` za iscrtavanje predloška.

`Doc` predložak podržava integraciju višestrukih `MarkDown` za generiranje obrisa dokumenta za jedan ili više projekata.

#### Više Projekata I Više Datoteka

Konfiguracija `.i18n/conf.yml` u `i18n:doc` je višeprojektni način iscrtavanja više datoteka.

Ovdje `menu: NB demo1,demo2` znači korištenje predloška `NB` za prikaz padajućeg izbornika.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , što je skraćenica od `Name Breif` , znači da padajući izbornik može prikazati naziv i slogan projekta.

Nakon `NB` slijedi parametar `demo1,demo2` koji mu je proslijeđen.

Napomena : ** Ne smije biti razmaka ** ispred i iza zareza `,` u `demo1,demo2` .

Odgovarajuća datoteka indeksa direktorija za gornje parametre je:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Jedan Projekt Više Datoteka

Ako imate samo jedan projekt, možete ga konfigurirati na sljedeći način.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Jedan projekt s više datoteka ne podržava konfiguriranje `url` kao korijenske staze `/`
> Ako __conf.yml → nav:__ Nije konfigurirana korijenska staza, kada se pristupa početnoj stranici web stranice, automatski će se prepisati na prvi URL pod konfiguracijom `nav:` .
> Ovaj dizajn služi za bolje razlikovanje projektnih dokumenata, blogova i drugog sadržaja kroz direktorije.
> Preporuča se koristiti jednu datoteku i jednu stranicu kao početnu stranicu.

> [!TIP]
> Ako `url` nije napisana, `url` je zadana vrijednost `i18n` Ovo pravilo vrijedi i za druge predloške.

#### TOC Kazalo Sadržaja

Ako je u konfiguraciji omogućen predložak `use: Doc` , omogućite dodatak `i18n.addon/toc` u `.i18n/conf.yml` Konfiguracija je sljedeća :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` će automatski instalirati i pokrenuti ovaj dodatak, pročitati `TOC` datoteku indeksa direktorija i generirati `json` strukturu direktorija.

Ako se radi o jednom projektu s više datoteka, korijenski direktorij `TOC` je direktorij koji odgovara `url:` u direktoriju izvornog jezika. Na primjer, ako je izvorni jezik kineski: datoteka koja odgovara `url: flashduty` je `zh/flashduty/TOC` .

Ako se radi o više projekata i više datoteka, nema potrebe konfigurirati `url:` Korijenski direktorij `TOC` je direktorij koji odgovara vrijednosti `i18n` .

##### Detaljno Objašnjenje Sadržaja

`en/blog/TOC` je sljedeći :

```
README.md

news/README.md
  news/begin.md
```

##### Koristite Uvlake Za Označavanje Razina

`README.md` u prvom redu od `en/blog/TOC` iznad odgovara `i18n.site` na slici ispod, što je naziv projekta.

Sljedeća dva retka prikazana su na slici ispod.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` odgovara `News` ,
`news/begin.md` odgovara `Our Product is Online !`

Datoteke `TOC` su uvučene kako bi ukazale na hijerarhijski odnos nacrta, podržavaju uvlake na više razina i komentare retka koji počinju s `# ` .

##### Nadređena Razina Piše Samo Naslov, Ne I Sadržaj.

Kada postoji više razina uvlačenja, nadređena razina piše samo naslov, a ne i sadržaj. U suprotnom, tipografija će biti pokvarena.

##### Projekt README.md

Sadržaj se može napisati u stavci `README.md` , kao što je `en/demo2/README.md` .

Imajte na umu da sadržaj ove datoteke ne prikazuje nacrt sadržaja, stoga se preporučuje ograničiti duljinu i napisati kratki uvod.

###### Slogan Projekta

Možete vidjeti da `Deme Two` ima slogan projekta ispod padajućeg izbornika i naziv projekta u katalogu `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Ovo odgovara prvom retku od `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Sadržaj iza prve dvotočke `:` naslova prve razine projekta `README.md` smatrat će se sloganom projekta.

Korisnici iz Kine, Japana i Koreje, imajte na umu da biste trebali koristiti dvotočku polovice širine `:` umjesto dvotočke pune širine.

##### Kako Skupno Premjestiti TOC?

`TOC` datoteka treba smjestiti u direktorij izvornog jezika.

Na primjer, ako je izvorni jezik kineski, tada je `TOC` iznad `zh/blog/TOC` .

Ako je izvorni jezik izmijenjen, morate skupno premjestiti `TOC` datoteka određenog jezika u projektu na drugi jezik.

Možete se obratiti na sljedeće naredbe:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Molimo izmijenite `en/` i `zh/` u gornjoj naredbi u kôd vašeg jezika.

### Zadano Učitavanje Bez Konfiguracijskog Puta

Za određenu stazu kojoj se pristupa, ako prefiks staze nije konfiguriran u `nav:` , datoteka `MarkDown` koja odgovara stazi bit će učitana prema zadanim postavkama i prikazana pomoću predloška `Md` .

Na primjer, ako se pristupi `/test` i `nav:` je konfiguriran bez prefiksa ove staze, a trenutni jezik pregledavanja je engleski (kod `en` ), `/en/test.md` će se učitati prema zadanim postavkama i prikazati pomoću predloška `Md` .

Ako `/en/test.md` ova datoteka ne postoji, bit će prikazana zadana stranica `404` .

<img src="//p.3ti.site/1721184299.avif" style="width:360px">