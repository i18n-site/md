# Instalați Și Utilizați

## windows Instalează Mai Întâi git bash

windows System, [faceți clic aici pentru a descărca și instala mai întâi `git bash`](https://git-scm.com/download/win)

Rulați operațiunile ulterioare în `git bash`

## Instalare

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurați Simbolul De Traducere

Vizitați [i18n.site/token](//i18n.site/token) Faceți clic pentru a copia simbolul

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Creați `~/.config/i18n.site.yml` inserați conținutul copiat în el, conținutul este după cum urmează:

```
token: YOUR_API_TOKEN
```

În plus, trebuie [i18n.site/payBill](//i18n.site/payBill) legați un card de credit pentru plată (nu este necesară nicio reîncărcare, site-ul web va deduce automat taxele în funcție de utilizare, [consultați pagina de start pentru prețuri](/#price) ).

## Utilizare

### Proiect Demonstrativ

Vă rugăm [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) consultați proiectul demo pentru a afla configurația traducerii `i18`

Utilizatorii din China pot clona [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

După clonare, intrați în director și `i18` pentru a finaliza traducerea.

### Structura Directorului

Structura directorului de depozit al șablonului este următoarea

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Directorul `en` conține fișierele demo traduse, care sunt doar un exemplu și pot fi șterse.

### Rulați Traducerea

Intrați în director și `i18` pentru a traduce.

### Adăugați Fișiere În Depozit

Pe lângă traducere, programul va genera și următoarele fișiere, vă rugăm să le adăugați în depozit.

```
.i18n/hash
.i18n/cache/.gitignore
```

Printre acestea : conținutul `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Aceasta înseamnă să ignorați toate fișierele din directorul `.i18n/cache/` (cu excepția `.i18n/cache/.gitignore` ).

Dacă software-ul dvs. de control al versiunii nu este `git` vă rugăm să îl ignorați conform acestei configurații.

## Fișier De Configurare

`.i18n/conf.yml` Este fișierul de configurare al instrumentului de traducere în linia `i18`

Conținutul este următorul:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Limba Sursă & Traducerii

În fișierul de configurare, subordonații `fromTo`

`en` este limba sursă, `zh ja ko de fr` este limba țintă a traducerii.

Cod de limbă vezi [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

De exemplu, dacă doriți să traduceți chineza în engleză, rescrieți această linie `zh: en`

Dacă doriți să traduceți în toate limbile acceptate, lăsați necompletat după `:` de exemplu

```
i18n:
  fromTo:
    en:
```

### Ignora Fișierul

În mod implicit, toate fișierele care încep cu `.md` și `.yml` din directorul limbii sursă vor fi traduse.

Dacă doriți să ignorați anumite fișiere și să nu le traduceți (cum ar fi schițele neterminate), puteți utiliza configurația câmpului `ignore`

`ignore` Utilizează o sintaxă similară cu `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

De exemplu, în fișierul de configurare de mai sus `_* ` înseamnă că fișierele care încep cu `_` nu vor fi traduse.

## Reguli De Traducere

### Editorii De Traduceri Nu Trebuie Să Adauge Sau Să Ștergă Linii

Traducerea este editabilă. Modificați textul original și traduceți-l din nou automat, modificările manuale ale traducerii nu vor fi suprascrise (dacă acest paragraf al textului original nu a fost modificat).

Dar vă rugăm să rețineți că rândurile traducerii și textul original trebuie să corespundă unul la unul. Adică nu adăugați sau ștergeți linii atunci când compilați traducerea. În caz contrar, va provoca confuzie în memoria cache de editare a traducerii.

Dacă ceva nu merge bine, consultați [întrebările frecvente pentru soluții.](/i18/qa#H1)

### `YAML` Traduceți

Instrumentul de linie de comandă va găsi toate fișierele care se termină cu `.yml` în directorul de fișiere în limba sursă și le va traduce.

* Rețineți că sufixul numelui fișierului trebuie să fie `.yml` (nu `.yaml` ).

Instrumentul traduce doar valorile de dicționar în `.yml` nu cheile de dicționar.

de exemplu `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

va fi tradus ca `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Traducerea lui `YAML` poate fi modificată și manual (dar nu adăugați sau ștergeți chei sau linii în traducere).

Pe baza `YAML` , puteți construi cu ușurință soluții internaționale pentru diferite limbaje de programare.

## Utilizare Avansată

### Subdirectorul De Traduceri

Atâta timp cât creați `.i18n/conf.yml` (nu este nevoie să începeți de la șablonul de proiect demo de fiecare dată), `i18` va funcționa bine.

Instrumentul de linie de comandă va găsi configurația `.i18n/conf.yml` în toate subdirectoarele și o va traduce.

Proiectele care folosesc arhitectura [monorepo](//monorepo.tools) pot împărți fișierele de limbă în subdirectoare.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Director De Instalare Personalizat

Acesta va fi instalat în `/usr/local/bin` implicit.

Dacă nu are permisiunea de scriere `/usr/local/bin` va fi instalat în `~/.bin` .

Setați variabilele de mediu `TO` Puteți defini directorul de instalare, de exemplu :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
