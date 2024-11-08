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

Osim toga [,](/#price) morate vezati platnu kreditnu karticu u [i18n.site/payBill](//i18n.site/payBill)

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

Nakon prevođenja nove datoteke, nova datoteka s podacima će se generirati u ovom direktoriju. Ne zaboravite dodati `git add . ` .

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

### Višejezične Slike/Linkovi

Kada su URL-ovi na slikama i linkovi u `replace:` i `MarkDown` (i atributi `src` i `href` ugrađenog `HTML` ) konfigurirani u `.i18n/conf.yml` sa ovim prefiksom, kod izvornog jezika u URL-u će biti zamijenjen kodom jezika prijevoda ( [jezik šifrarnik](/i18/LANG_CODE) ).

Na primjer, vaša konfiguracija je sljedeća:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` je rječnik, ključ je URL prefiks koji treba zamijeniti, a vrijednost je pravilo zamjene.

Značenje zamjene pravila `ko de uk>ru zh-TW>zh >en` iznad je da `ko de` koristi sliku koda svog jezika, `zh-TW` i `zh` koristi sliku `zh` , `uk` koristi sliku `ru` , a drugi jezici (kao što je `ja` ) koriste sliku od `en` po defaultu.

Na primjer, francuski ( `fr` ) izvorni fajl od `MarkDown` je sljedeći :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Prevedena i generirana engleska ( `en` ) datoteka je kako slijedi :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Ovdje se `/en/` u kodu izvornog jezika zamjenjuju `/zh/` u ciljnom jeziku.

: Mora biti `/` prije i poslije koda jezika zamijenjenog teksta u URL-u.

> [!TIP]
> Ako je `- /` konfiguriran u `url:` , samo relativne staze će se podudarati, ali URL-ovi koji počinju s `//` neće se podudarati.
>
> Ako neki linkovi naziva domene žele da se zamene, a neki ne žele da budu zamenjeni, možete koristiti različite prefikse kao što su `[x](//x.com/en/)` i `[x](https://x.com/en/)` da biste ih razlikovali.

### Ignorisati Fajl

Prema zadanim postavkama, sve datoteke koje počinju s `.md` i `.yml` u direktoriju izvornog jezika bit će prevedene.

Ako želite da zanemarite određene datoteke i da ih ne prevodite (kao što su nedovršeni nacrti), možete ih konfigurirati pomoću polja `ignore` .

`ignore` koristi [globset](https://docs.rs/globset/latest/globset/#syntax) sintaksu kao i datoteka `.gitignore` .

Na primjer, `_* ` u gornjoj konfiguracijskoj datoteci znači da datoteke koje počinju s `_` neće biti prevedene.

## Pravila Prevođenja

### Urednici Prijevoda Ne Bi Trebali Dodavati Ili Brisati Redove

Prijevod se može uređivati. Izmenite originalni tekst i ponovo ga mašinski prevedite, ručne izmene prevoda neće biti prepisane (ako ovaj paragraf originalnog teksta nije izmenjen).

> [!WARN]
> Mora postojati korespondencija jedan na jedan između redova prevoda i originalnog teksta. To jest, nemojte dodavati ili brisati redove prilikom sastavljanja prijevoda. U suprotnom, to će izazvati zabunu u kešu za uređivanje prijevoda.

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