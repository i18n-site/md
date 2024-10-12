# Instalirajte I Koristite

## windows Prvo Instalira git bash

windows , [kliknite ovdje da prvo preuzmete i instalirate `git bash`](https://git-scm.com/download/win) !

Pokreni sljedeće operacije u `git bash` .

## Instaliraj

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurirajte Prijevodni Token

Posjetite [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Kreirajte `~/.config/i18n.site.yml` , zalijepite kopirani sadržaj u njega, sadržaj je sljedeći:

```
token: YOUR_API_TOKEN
```

[i18n.site/payBill](//i18n.site/payBill) , morate vezati kreditnu karticu za plaćanje (nije potrebna dopuna, web stranica će automatski odbiti naknade prema korištenju, [pogledajte početnu stranicu za cijene](/#price) ).

## Koristiti

### Demo Projekat

Molimo pogledajte demo projekat [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) naučite konfiguraciju `i18` prijevoda.

Korisnici u Kini mogu klonirati [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Nakon kloniranja, uđite u direktorij i pokrenite `i18` da biste dovršili prijevod.

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

Prevedene demo datoteke u direktoriju `en` su samo primjer i mogu se izbrisati.

### Pokreni Prevod

Unesite direktorij i pokrenite `i18` za prevođenje.

Pored prevoda, program će takođe generisati fasciklu `.i18n/data` , dodajte je u spremište.

Nakon prevođenja nove datoteke, nova datoteka s podacima će se generirati u ovom direktoriju. Ne zaboravite dodati `git add .` .

## Konfiguracioni Fajl

`.i18n/conf.yml` je konfiguracijska datoteka alata za prevođenje `i18` komandne linije

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

U konfiguracijskoj datoteci, podređeni od `fromTo` :

`en` je izvorni jezik, `zh ja ko de fr` je ciljni jezik prijevoda.

Šifra jezika vidi [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Na primjer, ako želite prevesti kineski na engleski, prepišite ovaj red `zh: en` .

Ako želite prevesti na sve podržane jezike, ostavite prazno nakon `:` . na primjer

```
i18n:
  fromTo:
    en:
```

Možete konfigurirati različite `fromTo` za različite poddirektorije / Demonstracija je napisana na sljedeći način :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

U ovoj tablici konfiguracije, izvorni jezik prijevoda kataloga `blog` je `zh` , a izvorni jezik prijevoda kataloga `blog/your_file_name.md` je `ja` .

### Ignorisati Fajl

Prema zadanim postavkama, sve datoteke koje počinju s `.md` i `.yml` u direktoriju izvornog jezika bit će prevedene.

Ako želite da zanemarite određene datoteke i ne prevodite ih (kao što su nedovršeni nacrti), možete koristiti konfiguraciju polja `ignore` .

`ignore` koristi [globset](https://docs.rs/globset/latest/globset/#syntax) sintaksu kao i datoteka `.gitignore` .

Na primjer, `_* ` u gornjoj konfiguracijskoj datoteci znači da datoteke koje počinju s `_` neće biti prevedene.

## Pravila Prevođenja

### Urednici Prijevoda Ne Bi Trebali Dodavati Ili Brisati Redove

Prijevod se može uređivati. Izmenite originalni tekst i ponovo ga mašinski prevedite, ručne izmene prevoda neće biti prepisane (ako ovaj paragraf originalnog teksta nije izmenjen).

Ali imajte na umu da redovi prijevoda i originalnog teksta moraju odgovarati jedan prema jedan. Odnosno, nemojte dodavati ili brisati redove prilikom sastavljanja prijevoda. U suprotnom, to će izazvati zabunu u kešu za uređivanje prijevoda.

Ako nešto pođe po zlu, pogledajte [FAQ za rješenja.](/i18/qa#H1)

### `YAML` Prijevoda

Alat komandne linije će pronaći sve datoteke koje završavaju s `.yml` u direktoriju datoteka izvornog jezika i prevesti ih.

* Imajte na umu da sufiks imena datoteke mora biti `.yml` (ne `.yaml` ).

Alat samo prevodi vrijednosti rječnika u `.yml` , a ne ključeve rječnika.

Na primjer `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

biće prevedeno kao `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Prijevod `YAML` također se može mijenjati ručno (ali nemojte dodavati ili brisati ključeve ili redove u prijevodu).

Na osnovu `YAML` prijevoda, lako možete izgraditi međunarodna rješenja za različite programske jezike.

## Napredna Upotreba

### Poddirektorij Za Prevođenje

Sve dok se kreira `.i18n/conf.yml` (nema potrebe svaki put počinjati od predloška demo projekta), `i18` će raditi dobro.

Alat komandne linije će pronaći `.i18n/conf.yml` konfiguracija u svim poddirektorijumima i prevesti ih.

Projekti koji koriste arhitekturu [monorepo](//monorepo.tools) mogu podijeliti jezičke datoteke u poddirektorije.

![](https://p.3ti.site/1719910016.avif)

### Prilagođeni Instalacijski Direktorij

Podrazumevano će biti instaliran na `/usr/local/bin` .

Ako `/usr/local/bin` nema dozvolu za pisanje, biće instaliran na `~/.bin` .

Postavljanje varijable okruženja `TO` može definirati instalacijski direktorij, na primjer :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```