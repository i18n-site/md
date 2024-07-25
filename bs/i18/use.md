# Instalirajte I Koristite

## windows Prvo Instalira git bash

windows , [kliknite ovdje da biste prvo preuzeli i instalirali `git bash`](https://git-scm.com/download/win)

Pokrenite sljedeće operacije u `git bash`

## Instaliraj

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurirajte Prijevodni Token

Posjetite [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Kreirajte `~/.config/i18n.site.yml` zalijepite kopirani sadržaj u njega, sadržaj je sljedeći:

```
token: YOUR_API_TOKEN
```

Osim toga, morate [i18n.site/payBill](//i18n.site/payBill) kreditnu karticu za plaćanje (nije potrebna dopuna, web stranica će automatski odbiti naknade prema korištenju, [pogledajte početnu stranicu za cijene](/#price) ).

## Koristiti

### Demo Projekat

Molimo pogledajte demo projekat da naučite konfiguraciju `i18` [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Korisnici u Kini mogu klonirati [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Nakon kloniranja, uđite u direktorij i pokrenite `i18`

### Struktura Imenika

Struktura direktorija skladišta šablona je sljedeća

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Direktorij `en` sadrži prevedene demo datoteke, koje su samo primjer i mogu se izbrisati.

### Pokreni Prevod

Unesite imenik i pokrenite `i18`

### Dodajte Fajlove U Spremište

Osim prijevoda, program će također generirati sljedeće fajlove, dodajte ih u spremište.

```
.i18n/hash
.i18n/cache/.gitignore
```

Među njima : sadržaj `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

To znači da zanemarite sve datoteke u `.i18n/cache/` (osim `.i18n/cache/.gitignore` ).

Ako vaš softver za kontrolu verzija nije `git` zanemarite ga u skladu s ovom konfiguracijom.

## Konfiguracioni Fajl

`.i18n/conf.yml` To je konfiguracijski fajl alata za prevođenje `i18` linije

Sadržaj je sljedeći:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Izvorni Jezik &

U konfiguracijskoj datoteci, podređeni `fromTo`

`en` je izvorni jezik, `zh ja ko de fr` je ciljni jezik prijevoda.

Šifra jezika vidi [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Na primjer, ako želite prevesti kineski na engleski, prepišite ovaj red `zh: en`

Ako želite prevesti na sve podržane jezike, ostavite prazno nakon `:` na primjer

```
i18n:
  fromTo:
    en:
```

### Ignorisati Fajl

Po defaultu, svi fajlovi koji počinju sa `.md` i `.yml` u direktorijumu izvornog jezika će biti prevedeni.

Ako želite da zanemarite određene datoteke i ne prevedete ih (kao što su nedovršeni nacrti), možete koristiti konfiguraciju polja `ignore`

[globset](https://docs.rs/globset/latest/globset/#syntax) sintaksu sličnu `ignore` `.gitignore`

Na primjer, u gornjoj konfiguracijskoj `_* ` znači da datoteke koje počinju s `_` neće biti prevedene.

## Pravila Prevođenja

### Urednici Prijevoda Ne Bi Trebali Dodavati Ili Brisati Redove

Prijevod se može uređivati. Izmenite originalni tekst i ponovo ga mašinski prevedite, ručne izmene prevoda neće biti prepisane (ako ovaj paragraf originalnog teksta nije izmenjen).

Ali imajte na umu da redovi prijevoda i originalnog teksta moraju odgovarati jedan prema jedan. Odnosno, nemojte dodavati ili brisati redove prilikom sastavljanja prijevoda. U suprotnom, to će izazvati zabunu u kešu za uređivanje prijevoda.

Ako nešto pođe po zlu, pogledajte [FAQ za rješenja.](/i18/qa#H1)

### `Yaml`

Alat komandne linije će pronaći sve datoteke koje završavaju sa `.yml` u direktoriju datoteka izvornog jezika i prevesti ih.

* Imajte na umu `.yaml` sufiks imena datoteke mora biti `.yml`

Alat prevodi samo vrijednosti rječnika `.yml` , ne i ključeve rječnika.

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

Prijevod `YAML` se također može mijenjati ručno (ali nemojte dodavati ili brisati ključeve ili redove u prijevodu).

Na osnovu `YAML` , možete lako izgraditi međunarodna rješenja za različite programske jezike.

## Napredna Upotreba

### Poddirektorij Za Prevođenje

Sve dok kreirate `.i18n/conf.yml` (nema potrebe svaki put počinjati od demo projekta), `i18` će raditi dobro.

Alat komandne linije će pronaći konfiguraciju `.i18n/conf.yml`

Projekti koji koriste arhitekturu [monorepo](//monorepo.tools) mogu podijeliti jezičke datoteke u poddirektorije.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Prilagođeni Instalacijski Direktorij

Podrazumevano će biti instaliran na `/usr/local/bin`

Ako nema dozvolu za pisanje, biće instaliran na `~/.bin` `/usr/local/bin`

Postavite varijable `TO` Možete definirati instalacijski direktorij, na primjer :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
