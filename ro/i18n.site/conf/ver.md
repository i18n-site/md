# Versiunea Proiectului

Luați ca exemplu proiectul demonstrativ:

`en/demo2/v` este numărul versiunii curente a proiectului, care va fi afișat în partea dreaptă a numelui proiectului în conturul barei laterale.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Aici `en/` este codul de limbă corespunzător limbii sursă a traducerii configurat de `.i18n/conf.yml` .

Dacă limba sursă nu este engleza, atunci fișierul `v` ar trebui să fie plasat în directorul de proiect al limbii sursă.

Abilitatea de a răsfoi versiuni istorice ale documentelor este în curs de dezvoltare.

Este recomandat să modificați numărul versiunii documentului numai atunci când sunt lansate actualizări majore (cum ar fi `v1` , `v2` ) pentru a evita ca prea multe numere de versiune să cauzeze aglomerație în paginile indexate de motoarele de căutare.

## Utilizați Fișierele `v` Goale Pentru a Împărți Indicii De Fișiere Ale Diferitelor Proiecte

În proiectul demo, pe lângă `en/demo2/v` , puteți vedea și că există `v` fișiere goale în directoarele `en/blog` și `en/demo1` .

Un `v` gol nu va fi afișat în conturul barei laterale, dar atâta timp cât există un fișier `v` , va fi generat un index independent pentru fișierele din director și subdirectoare.

Prin împărțirea indexurilor diferitelor proiecte, puteți evita accesul lent cauzat de încărcarea simultană a indexului tuturor fișierelor din întregul site.

De exemplu, fișierul index [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) lui `blog` în proiectul demo este :