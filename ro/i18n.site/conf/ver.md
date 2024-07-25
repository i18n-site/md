# Versiunea Proiectului

Luați ca exemplu proiectul demonstrativ:

`en/demo2/v` este numărul versiunii curente a proiectului, care va fi afișat în partea dreaptă a numelui proiectului în conturul barei laterale.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` este codul de limbă care corespunde `.i18n/conf.yml` limbii sursă de traducere configurată.

Dacă limba sursă nu este engleza, atunci fișierul `v` ar trebui plasat în directorul de proiect al limbii sursă. 

Abilitatea de a răsfoi versiuni istorice ale documentelor este în curs de dezvoltare.

Este recomandat să modificați numărul versiunii documentului numai atunci când se lansează actualizări majore (cum ar fi `v1` , `v2` ) pentru a evita aglomerarea paginilor indexate de motoarele de căutare din cauza prea multor numere de versiune.

## Utilizați Fișiere `v` Pentru a Împărți Indexurile Fișierelor Pentru Diferite Proiecte

În proiectul demo, pe lângă `en/demo2/v` , puteți vedea, de asemenea, că conținutul directoarelor `en/blog` și `en/demo1` sunt goale `v` fișiere.

Gol `v` nu va fi afișat în conturul barei laterale, dar atâta timp cât fișierul `v` există, va fi generat un index independent pentru fișierele din director și subdirectoare.

Prin împărțirea indexurilor diferitelor proiecte, puteți evita accesul lent cauzat de încărcarea simultană a indexului tuturor fișierelor din întregul site.

: exemplu, în proiectul [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) `blog`

