# Instalați și utilizați

## Instalați mai întâi Git Bash pe Windows

Pentru sistemul Windows, faceți [clic aici pentru a descărca și instala mai întâi `git bash`](https://git-scm.com/download/win).

Rulați operațiunile ulterioare în `git bash`.

## Instalare

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurați tokenul de traducere

Vizitați [i18n.site/token](//i18n.site/token) și faceți clic pentru a copia tokenul

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Creați `~/.config/i18n.site.yml`, apoi粘贴 copiatul în el, conținutul fiind următorul:

```
token: YOUR_API_TOKEN
```

În plus, trebuie să [i18n.site/payBill](//i18n.site/payBill) conectați un card de credit pentru plată (fără a fi nevoie de reîncărcare, site-ul va deduce automat taxele în funcție de utilizare, [ consultați prețurile pe pagina principală](/#price)).

## Utilizare

### Proiect demonstrativ

Consultați proiectul demonstrativ [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) pentru a învăța cum să configurați traducerea `i18`.

Utilizatorii din China pot clona [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

După clonare, accesați directorul și rulați `i18` pentru a finaliza traducerea.

### Structura directorului

Structura directorului pentru depozitul șablonului este următoarea:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Fișierele demonstrative de traducere din directorul `en` sunt doar un exemplu și pot fi șterse.

### Rulați Traducerea

Introduceți directorul și rulați `i18` pentru a traduce.

### Adăugați Fișiere În Depozit

Pe lângă traducere, programul va genera și următoarele fișiere, vă rugăm să le adăugați în depozit.

```
.i18n/hash
.i18n/cache/.gitignore
```

Printre acestea, conținutul lui `.i18n/cache/.gitignore` este următorul :

```
**/*
!**/.gitignore
```

Aceasta înseamnă că toate fișierele din directorul `.i18n/cache/` (cu excepția `.i18n/cache/.gitignore` ) sunt ignorate.

Dacă software-ul dvs. de control al versiunii nu este `git` , vă rugăm să îl ignorați conform acestei configurații.

## Fișierul De Configurare

`.i18n/conf.yml` este fișierul de configurare al instrumentului de traducere din linia de comandă `i18`

Source Language & Target Language

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Limba Sursă & Limba Destinație

În fișierul de configurare, subordonatul lui `fromTo` :

`en` este limba sursă, `zh ja ko de fr` sunt limbile destinație ale traducerii.

Coduri de limbă consultați [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

dacă doriți să traduceți în toate limbile suportate, lăsați secțiunea `:` goală, de exemplu:

Puteți configura `fromTo` diferit pentru diferite subdirectoare, cum ar fi în următorul exemplu demonstrativ:

```
i18n:
  fromTo:
    en:
```

Puteți configura `fromTo` diferit pentru / subdirectoare O demonstrație este scrisă după cum urmează :

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

În acest tabel de configurare, limba sursă a traducerii pentru directorul `blog` este `zh` , iar limba sursă a traducerii pentru `blog/your_file_name.md` este `ja` .

### Ignorați Fișiere

În mod implicit, toate fișierele din directorul limbii sursă care încep cu `.md` și `.yml` vor fi traduse.

Dacă doriți să ignorați anumite fișiere și să nu le traduceți (de exemplu, schițele neterminate), le puteți configura folosind câmpul `ignore`.

`ignore` folosește aceeași sintaxă [globset](https://docs.rs/globset/latest/globset/#syntax) ca fișierul `.gitignore`.

De exemplu, `_* ` în fișierul de configurare de mai sus înseamnă că fișierele care încep cu `_` nu vor fi traduse.

## Reguli de Traducere

### Editorii de traduceri nu trebuie să adauge sau să ștergă rânduri

Traducerea este editabilă. Modificați textul original și traduceți-l din nou automat, modificările manuale ale traducerii nu vor fi suprascrise (dacă acest paragraf al textului original nu a fost modificat).

Dar vă rugăm să rețineți că rândurile traducerii și textul original trebuie să fie identice. Adică nu adăugați sau ștergeți rânduri atunci când compilați traducerea. În caz contrar, va provoca confuzie în memoria cache de editare a traducerii.

Dacă întâmpinați probleme, consultați [întrebările frecvente pentru soluții.](/i18/qa#H1)

### `YAML` Traduceri

Instrumentul de linie de comandă va găsi toate fișierele care se termină cu `.yml` în directorul de fișiere în limba sursă și le va traduce.

* Rețineți că sufixul numelui fișierului trebuie să fie `.yml` (nu `.yaml`).

Instrumentul traduce doar valorile dicționarului în `.yml` , nu cheile dicționarului.

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

Traducerea lui `YAML` poate fi modificată și manual (dar nu adăugați sau ștergeți chei sau rânduri în traducere).

Pe baza traducerii `YAML`, puteți construi cu ușurință soluții internaționale pentru diferite limbaje de programare.

## Utilizare Avansată

### Traducerea Subdirectoarelor

Atâta timp cât este creat `.i18n/conf.yml` (nu este nevoie să începeți de la șablonul de proiect demonstrativ de fiecare dată), `i18` va funcționa bine.

Instrumentul de linie de comandă va găsi `.i18n/conf.yml` în toate subdirectoarele și le va traduce.

Proiectele care folosesc arhitectura [monorepo](//monorepo.tools) pot împărți fișierele de limbă în subdirectoare.

![](https://p.3ti.site/1719910016.avif)

### Director de Instalare Personalizat

Acesta va fi instalat la `/usr/local/bin` în mod implicit.

Dacă `/usr/local/bin` nu are permisiunea de scriere, va fi instalat la `~/.bin` .

Setarea variabilei de mediu `TO` poate defini directorul de instalare, de exemplu :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```