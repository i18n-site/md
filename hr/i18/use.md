# Instalirajte I Koristite

## windows Prvo Instalira git bash

windows Sustav, [prvo kliknite ovdje za preuzimanje i instalaciju `git bash`](https://git-scm.com/download/win)

Pokrenite sljedeće operacije u `git bash`

## Instalirati

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurirajte Prevoditeljski Token

Posjetite [i18n.site/token](//i18n.site/token) Kliknite za kopiranje tokena

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Create `~/.config/i18n.site.yml` zalijepite kopirani sadržaj u njega, sadržaj je sljedeći:

```
token: YOUR_API_TOKEN
```

Osim toga, trebate [i18n.site/payBill](//i18n.site/payBill) kreditnu karticu za plaćanje (nije potrebna nadoplata, web-mjesto će automatski oduzeti naknade prema korištenju, [pogledajte početnu stranicu za cijene](/#price) ).

## Koristiti

### Demo Projekt

Pogledajte demo projekt kako biste naučili konfiguraciju `i18` [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Korisnici u Kini mogu klonirati [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Nakon kloniranja, uđite u direktorij i dovršite prijevod `i18`

### Struktura Imenika

Struktura imenika skladišta predloška je sljedeća

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Direktorij `en` sadrži prevedene demo datoteke, koje su samo primjer i mogu se izbrisati.

### Pokreni Prijevod

Uđite u imenik i pokrenite `i18`

### Dodajte Datoteke U Spremište

Osim prijevoda, program će također generirati sljedeće datoteke, dodajte ih u repozitorij.

```
.i18n/hash
.i18n/cache/.gitignore
```

Među njima : sadržaj `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

To znači zanemariti sve datoteke u direktoriju `.i18n/cache/` (osim `.i18n/cache/.gitignore` ).

Ako vaš softver za kontrolu verzija nije `git` , zanemarite ga u skladu s ovom konfiguracijom.

## Konfiguracijska Datoteka

`.i18n/conf.yml` To je konfiguracijska datoteka alata za prevođenje `i18` line

Sadržaj je sljedeći:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Izvorni Jezik & Jezik Prijevoda

U konfiguracijskoj datoteci, podređeni `fromTo`

`en` je izvorni jezik, `zh ja ko de fr` je ciljni jezik prijevoda.

Vidi kod jezika [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Na primjer, ako želite prevesti kineski na engleski, prepišite ovaj red `zh: en`

Ako želite prevesti na sve podržane jezike, ostavite prazno nakon `:` na primjer

```
i18n:
  fromTo:
    en:
```

### Ignoriraj Datoteku

Prema zadanim postavkama, sve datoteke koje počinju s `.md` i `.yml` u direktoriju izvornog jezika bit će prevedene.

Ako želite ignorirati određene datoteke i ne prevoditi ih (kao što su nedovršene skice), možete koristiti konfiguraciju polja `ignore`

`ignore` Koristi sintaksu sličnu `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Na primjer, u gornjoj konfiguracijskoj datoteci `_* ` znači da datoteke koje počinju s `_` neće biti prevedene.

## Pravila Prevođenja

### Urednici Prijevoda Ne Bi Trebali Dodavati Ili Brisati Retke

Prijevod se može uređivati. Izmijenite izvorni tekst i ponovno ga strojno prevedite, ručne izmjene prijevoda neće biti prebrisane (ako ovaj odlomak izvornog teksta nije izmijenjen).

Ali imajte na umu da se retci prijevoda i izvornog teksta moraju podudarati jedan prema jedan. To jest, nemojte dodavati niti brisati retke prilikom sastavljanja prijevoda. U suprotnom, to će izazvati zabunu u predmemoriji za uređivanje prijevoda.

Ako nešto pođe po zlu, molimo pogledajte [FAQ za rješenja.](/i18/qa#H1)

### `YAML` Prevedi

Alat naredbenog retka će pronaći sve datoteke koje završavaju s `.yml` u direktoriju datoteka izvornog jezika i prevesti ih.

* Imajte na umu da sufiks naziva datoteke mora biti `.yml` (a ne `.yaml` ).

Alat prevodi samo vrijednosti iz rječnika `.yml` a ne ključeve iz rječnika.

na primjer `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

bit će prevedeno kao `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Prijevod `YAML` također se može modificirati ručno (ali nemojte dodavati ili brisati ključeve ili retke u prijevodu).

Na temelju `YAML` Prijevoda možete jednostavno izgraditi međunarodna rješenja za različite programske jezike.

## Napredno Korištenje

### Poddirektorij Prijevoda

Sve dok stvarate `.i18n/conf.yml` (nema potrebe da svaki put krećete od predloška demo projekta), `i18` će dobro funkcionirati.

Alat naredbenog retka će pronaći konfiguraciju `.i18n/conf.yml` u svim poddirektorijima i prevesti je.

Projekti koji koriste arhitekturu [monorepo](//monorepo.tools) mogu podijeliti jezične datoteke u poddirektorije.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Prilagođeni Instalacijski Direktorij

Bit će instaliran na `/usr/local/bin`

Ako `/usr/local/bin` nema dozvolu za pisanje, bit će instaliran na `~/.bin` .

Postavite varijable okoline `TO` Možete definirati instalacijski direktorij, na primjer :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
