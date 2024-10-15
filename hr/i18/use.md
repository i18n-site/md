# Instalirajte I Koristite

## windows Prvo Instalirajte git bash

windows Sustav, [prvo kliknite ovdje da preuzmete i instalirate `git bash`](https://git-scm.com/download/win) .

Pokreni sljedeće operacije u `git bash` .

## Instalirati

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurirajte Prevoditeljski Token

Posjetite [i18n.site/token](//i18n.site/token) Kliknite za kopiranje tokena

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Stvorite `~/.config/i18n.site.yml` , zalijepite kopirani sadržaj u njega, sadržaj je sljedeći:

```
token: YOUR_API_TOKEN
```

[i18n.site/payBill](//i18n.site/payBill) , trebate vezati kreditnu karticu za plaćanje (nije potrebna nadoplata, web-mjesto će automatski oduzeti naknade prema korištenju, [pogledajte početnu stranicu za cijene](/#price) ).

## Koristiti

### Demo Projekt

Molimo pogledajte demo projekt [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) biste naučili konfiguraciju `i18` prijevoda.

Korisnici u Kini mogu klonirati [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Nakon kloniranja unesite direktorij i pokrenite `i18` da dovršite prijevod.

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

Prevedene demo datoteke u direktoriju `en` samo su primjer i mogu se izbrisati.

### Pokreni Prijevod

Unesite imenik i pokrenite `i18` za prijevod.

Osim prijevoda, program će također generirati mapu `.i18n/data` , dodajte je u repozitorij.

Nakon prevođenja nove datoteke, nova podatkovna datoteka bit će generirana u ovom direktoriju. Ne zaboravite dodati `git add . ` .

## Konfiguracijska Datoteka

`.i18n/conf.yml` je konfiguracijska datoteka alata za prevođenje naredbenog retka `i18`

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

U konfiguracijskoj datoteci, podređeni od `fromTo` :

`en` je izvorni jezik, `zh ja ko de fr` je ciljni jezik prijevoda.

Vidi kod jezika [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Na primjer, ako želite prevesti kineski na engleski, prepišite ovaj redak `zh: en` .

Ako želite prevoditi na sve podržane jezike, ostavite prazno nakon `:` . na primjer

```
i18n:
  fromTo:
    en:
```

Različite `fromTo` mogu se konfigurirati za različite poddirektorije / Demonstracija je napisana na sljedeći način :

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

U ovoj konfiguracijskoj tablici, izvorni jezik za prijevod direktorija `blog` je `zh` , a izvorni jezik za prijevod direktorija `blog/your_file_name.md` je `ja` .

### Ignoriraj Datoteku

Prema zadanim postavkama, sve datoteke koje počinju s `.md` i `.yml` u direktoriju izvornog jezika bit će prevedene.

Ako želite zanemariti određene datoteke i ne prevoditi ih (kao što su nedovršene skice), možete koristiti konfiguraciju polja `ignore` .

`ignore` koristi istu sintaksu [globset](https://docs.rs/globset/latest/globset/#syntax) kao i datoteka `.gitignore` .

Na primjer, `_* ` u gornjoj konfiguracijskoj datoteci znači da datoteke koje počinju s `_` neće biti prevedene.

## Pravila Prevođenja

### Urednici Prijevoda Ne Bi Trebali Dodavati Ili Brisati Retke

Prijevod se može uređivati. Izmijenite izvorni tekst i ponovno ga strojno prevedite, ručne izmjene prijevoda neće biti prebrisane (ako ovaj odlomak izvornog teksta nije izmijenjen).

Ali imajte na umu da se retci prijevoda i izvornog teksta moraju podudarati jedan prema jedan. To jest, nemojte dodavati niti brisati retke prilikom sastavljanja prijevoda. U protivnom će izazvati zabunu u predmemoriji za uređivanje prijevoda.

Ako nešto pođe po zlu, molimo pogledajte [FAQ za rješenja.](/i18/qa#H1)

### `YAML` Prijevoda

Alat naredbenog retka pronaći će sve datoteke koje završavaju s `.yml` u direktoriju datoteka izvornog jezika i prevesti ih.

* Imajte na umu da sufiks naziva datoteke mora biti `.yml` (ne `.yaml` ).

Alat samo prevodi vrijednosti rječnika u `.yml` , a ne ključeve rječnika.

Na primjer `i18n/en/i18n.yml`

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

Na temelju `YAML` prijevoda možete jednostavno izgraditi međunarodna rješenja za različite programske jezike.

## Napredno Korištenje

### Poddirektorij Prijevoda

Sve dok se kreira `.i18n/conf.yml` (nema potrebe svaki put pokretati od predloška demo projekta), `i18` će dobro funkcionirati.

Alat naredbenog retka pronaći će `.i18n/conf.yml` konfiguracija u svim poddirektorijima i prevesti ih.

Projekti koji koriste arhitekturu [monorepo](//monorepo.tools) mogu podijeliti jezične datoteke u poddirektorije.

![](https://p.3ti.site/1719910016.avif)

### Prilagođeni Instalacijski Direktorij

Instalirat će se na `/usr/local/bin` prema zadanim postavkama.

Ako `/usr/local/bin` nema dozvolu pisanja, bit će instaliran na `~/.bin` .

Postavljanje varijable okruženja `TO` može definirati instalacijski direktorij, na primjer :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```