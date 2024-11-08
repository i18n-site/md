# .i18n/conf.yml

Konfiguracijski fajl za `i18n.site` je `.i18n/conf.yml` , a sadržaj je sljedeći :

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

Među njima, `upload` do `ext:` stavka konfiguracije znači da će samo `.md` biti učitane prilikom objavljivanja.

## Top Navigation nav

`nav:` opcija konfiguracije, što odgovara navigacijskom meniju na vrhu početne stranice.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Među njima, `i18n: home` odgovara `home: Home` u `en/i18n.yml` (gdje je `en` izvorni jezik prijevoda projekta).

`en/i18n.yml` sadržaj je tekst prikazan u navigacijskom meniju, koji će biti preveden prema `fromTo` u konfiguraciji, na primjer, preveden u `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nakon što se prijevod završi, možete promijeniti vrijednost prijevoda `yml` , ali nemojte dodavati ili brisati ključ prijevoda `yml` .

### `use: Toc` Predložak Jednog Dokumenta Sa Obrisom

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` znači renderiranje pomoću šablona `Toc` , što predstavlja renderiranje jednog šablona `Markdown` .

`TOC` je skraćenica od `Table of Contents` Kada se ovaj predložak prikaže, obris ove `Markdown` datoteke će biti prikazan na bočnoj traci.

`url:` predstavlja putanju datoteke `Markdown` ( `/` odgovara korijenskom direktoriju `/README.md` , ovo ime datoteke zahtijeva prefiks velikim slovima i sufiks malim slovima).

### `use: Md` Šablon Jednog Dokumenta Bez Obrisa

Šablon `Md` i šablon `Toc` su isti i oba se koriste za prikazivanje jedne `Markdown` datoteke. Ali predložak `Md` ne prikazuje obris u bočnoj traci.

Možete izmijeniti `use: Toc` u gornjoj konfiguraciji u `use: Md` , ponovo pokrenuti `i18n.site` u direktoriju `md` , a zatim posjetiti URL za pregled razvoja kako biste vidjeli promjene na početnoj stranici.

### `use: Blog` Blog Templates

Predložak bloga prikazuje listu članaka (naslova i sažetaka) prema vremenu objavljivanja.

[→ Kliknite ovdje da saznate više o specifičnoj konfiguraciji](/i18n.site/conf/blog)

### `use: Doc` Šablona Dokumenata Datoteka

U konfiguracijskoj datoteci:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Označava korištenje `Doc` za renderiranje šablona.

`Doc` šablon podržava integraciju višestrukih `MarkDown` za generiranje obrisa dokumenta za jedan ili više projekata.

#### Više Projekata I Više Datoteka

Konfiguracija `.i18n/conf.yml` u `i18n:doc` je višeprojektni način prikazivanja više datoteka.

Ovdje, `menu: NB demo1,demo2` , znači korištenje šablona `NB` za renderiranje padajućeg izbornika.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , što je skraćenica od `Name Breif` , znači da padajući meni može prikazati naziv i slogan projekta.

Nakon `NB` slijedi parametar `demo1,demo2` koji mu je proslijeđen.

: ** Ne bi trebalo biti razmaka ** ispred i iza zareza `,` u `demo1,demo2` .

Odgovarajuća datoteka indeksa direktorija za gore navedene parametre je:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Jedan Projekat Sa Više Fajlova

Ako imate samo jedan projekat, možete ga konfigurirati na sljedeći način.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Jedan projekat s više datoteka ne podržava konfiguriranje `url` kao korijenske staze `/`
> Ako __conf.yml → nav:__ Nije konfigurisana korijenska putanja, prilikom pristupanja početnoj stranici web stranice, automatski će biti prepisana na prvi URL pod konfiguracijom `nav:` .
> Ovaj dizajn je za bolje razlikovanje projektnih dokumenata, blogova i drugog sadržaja kroz direktorije.
> Preporučuje se korištenje jedne datoteke i jedne stranice kao početne stranice.

> [!TIP]
> Ako `url` nije napisano, `url` je zadana vrijednost `i18n` Ovo pravilo također stupa na snagu za druge šablone.

#### Indeks Sadržaja TOC-A

Ako je šablon `use: Doc` omogućen u konfiguraciji, omogućite dodatak `i18n.addon/toc` u `.i18n/conf.yml` Konfiguracija je sljedeća :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` će automatski instalirati i izvršiti ovaj dodatak, pročitati `TOC` indeksnu datoteku direktorija i generirati `json` okvir direktorija.

Ako se radi o jednom projektu s više datoteka, korijenski direktorij `TOC` je direktorij koji odgovara `url:` u direktoriju izvornog jezika, na primjer, ako je izvorni jezik kineski: datoteka koja odgovara `url: flashduty` je `zh/flashduty/TOC` .

Ako se radi o više projekata i više datoteka, nema potrebe za konfiguracijom `url:` Osnovni direktorij od `TOC` je direktorij koji odgovara vrijednosti `i18n` .

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

Datoteke `TOC` su uvučene da naznače hijerarhijski odnos konture, podržavaju uvlačenje na više nivoa i komentare reda koji počinju sa `# ` .

##### Roditeljski Nivo Piše Samo Naslov, a Ne Sadržaj.

Kada postoji više nivoa uvlačenja, roditeljski nivo piše samo naslov, a ne sadržaj. U suprotnom, tipografija će biti zbrkana.

##### Projekt README.md

Sadržaj se može upisati u stavku `README.md` , kao što je `en/demo2/README.md` .

Imajte na umu da sadržaj ove datoteke ne prikazuje pregled tabele sadržaja, pa se preporučuje da ograničite dužinu i napišete kratak uvod.

###### Slogan Projekta

Možete vidjeti da `Deme Two` ima svoj slogan `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Ovo odgovara prvom redu od `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Slogan projekta smatrat će se sadržaj nakon prve dvotočke `:` naslova prvog nivoa projekta `README.md` .

Korisnici iz Kine, Japana i Koreje, imajte na umu da biste trebali koristiti dvotočku `:` u pola širine umjesto dvotačke pune širine.

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

### Zadano Učitavanje Bez Konfiguracijske Staze

Za određenu stazu kojoj se pristupa, ako prefiks staze nije konfiguriran u `nav:` , datoteka `MarkDown` koja odgovara putanji bit će učitana prema zadanim postavkama i prikazana pomoću predloška `Md` .

Na primjer, ako se pristupi `/test` i `nav:` je konfigurisan bez prefiksa ove staze, a trenutni jezik pregledavanja je engleski (kod `en` ), `/en/test.md` će biti učitano prema zadanim postavkama i prikazano pomoću šablona `Md` .

Ako je `/en/test.md` ova datoteka ne postoji, bit će prikazana zadana stranica `404` .

<img src="//p.3ti.site/1721184299.avif" style="width:360px">