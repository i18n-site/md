# Instalați Și Utilizați

## windows Mai Întâi Instalează git bash

windows System, faceți [clic aici pentru a descărca și instala mai întâi `git bash`](https://git-scm.com/download/win) .

Rulați operațiunile ulterioare în `git bash` .

## Instala

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurați Simbolul De Traducere

Vizitați [i18n.site/token](//i18n.site/token) Faceți clic pentru a copia simbolul

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Creați `~/.config/i18n.site.yml` , inserați conținutul copiat în el, conținutul este după cum urmează:

```
token: YOUR_API_TOKEN
```

În [i18n.site/payBill](//i18n.site/payBill) , trebuie să legați un card de credit pentru plată (nu este necesară nicio reîncărcare, site-ul web va deduce automat taxele în funcție de utilizare, [consultați pagina de start pentru prețuri](/#price) ).

## Utilizare

### Proiect Demonstrativ

Vă rugăm să consultați proiectul demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) a afla configurația traducerii `i18` .

Utilizatorii din China pot clona [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

După clonare, introduceți directorul și rulați `i18` pentru a finaliza traducerea.

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

Fișierele demo traduse din directorul `en` sunt doar un exemplu și pot fi șterse.

### Rulați Traducerea

Introduceți directorul și rulați `i18` pentru a traduce.

Pe lângă traducere, programul va genera și folderul `.i18n/data` , vă rugăm să îl adăugați în depozit.

După traducerea noului fișier, un nou fișier de date va fi generat în acest director. Nu uitați să adăugați `git add . ` .

## Fișierul De Configurare

`.i18n/conf.yml` este fișierul de configurare al instrumentului de traducere din linia de comandă `i18`

Conținutul este următorul:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Limba & Limba Traducerii

În fișierul de configurare, subordonatul lui `fromTo` :

`en` este limba sursă, `zh ja ko de fr` este limba țintă a traducerii.

Cod de limbă vezi [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

De exemplu, dacă doriți să traduceți chineza în engleză, rescrieți această linie `zh: en` .

Dacă doriți să traduceți în toate limbile acceptate, lăsați necompletat după `:` . de exemplu

```
i18n:
  fromTo:
    en:
```

Diferite `fromTo` pot fi configurate pentru / subdirectoare O demonstrație este scrisă după cum urmează :

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

În acest tabel de configurare, limba sursă pentru traducerea directorului `blog` este `zh` , iar limba sursă pentru traducerea directorului `blog/your_file_name.md` este `ja` .

### Ignora Fișierul

În mod implicit, toate fișierele care încep cu `.md` și `.yml` din directorul limbii sursă vor fi traduse.

Dacă doriți să ignorați anumite fișiere și să nu le traduceți (cum ar fi schițele nefinalizate), puteți utiliza configurația câmpului `ignore` .

`ignore` folosește aceeași [globset](https://docs.rs/globset/latest/globset/#syntax) ca fișierul `.gitignore` .

De exemplu, `_* ` în fișierul de configurare de mai sus înseamnă că fișierele care încep cu `_` nu vor fi traduse.

## Reguli De Traducere

### Editorii De Traduceri Nu Trebuie Să Adauge Sau Să Ștergă Linii

Traducerea este editabilă. Modificați textul original și traduceți-l din nou automat, modificările manuale ale traducerii nu vor fi suprascrise (dacă acest paragraf al textului original nu a fost modificat).

Dar vă rugăm să rețineți că rândurile traducerii și textul original trebuie să corespundă unul la unul. Adică nu adăugați sau ștergeți linii atunci când compilați traducerea. În caz contrar, va provoca confuzie în memoria cache de editare a traducerii.

Dacă ceva nu merge bine, consultați [întrebările frecvente pentru soluții.](/i18/qa#H1)

### `YAML` Traduceri

Instrumentul de linie de comandă va găsi toate fișierele care se termină cu `.yml` în directorul de fișiere în limba sursă și le va traduce.

* Rețineți că sufixul numelui fișierului trebuie să fie `.yml` (nu `.yaml` ).

Instrumentul traduce doar valorile de dicționar în `.yml` , nu cheile de dicționar.

De exemplu `i18n/en/i18n.yml`

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

Pe baza `YAML` traducere, puteți construi cu ușurință soluții internaționale pentru diferite limbaje de programare.

## Utilizare Avansată

### Subdirectorul De Traduceri

Atâta timp cât este creat `.i18n/conf.yml` (nu este nevoie să începeți de la șablonul de proiect demonstrativ de fiecare dată), `i18` va funcționa bine.

Instrumentul de linie de comandă va găsi `.i18n/conf.yml` configurații în toate subdirectoarele și le va traduce.

Proiectele care folosesc arhitectura [monorepo](//monorepo.tools) pot împărți fișierele de limbă în subdirectoare.

![](https://p.3ti.site/1719910016.avif)

### Director De Instalare Personalizat

Acesta va fi instalat la `/usr/local/bin` în mod implicit.

Dacă `/usr/local/bin` nu are permisiunea de scriere, va fi instalat la `~/.bin` .

Setarea variabilei de mediu `TO` poate defini directorul de instalare, de exemplu :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```