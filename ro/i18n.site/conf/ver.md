# Versiunea proiectului

Luați ca exemplu proiectul demonstrativ:

`en/demo2/v` este versiunea curentă a proiectului, afișată pe lângă numele proiectului în bara laterală a contoursului.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Aici `en/` este codul limbii corespunzător limbii sursă de traducere configurat în `.i18n/conf.yml`.

Dacă limba sursă nu este engleză, atunci fișierul `v` ar trebui să fie plasat în directorul proiectului corespunzător limbii sursă.

Functionalitatea de a naviga prin versiunile istorice ale documentelor este în curs de dezvoltare.

Se recomandă să modificați numărul versiunii documentului doar la lansarea unor actualizări majore (de exemplu, `v1`, `v2`) pentru a evita ca un număr prea mare de versiuni să ducă la o pagină indexată haotică de motoarele de căutare.

## Folosiți fișiere `v` goale pentru a separa indexurile fișierelor diferitelor proiecte

În proiectul demonstrativ, pe lângă `en/demo2/v`, puteți vedea și că există fișiere `v` goale în directoarele `en/blog` și `en/demo1`.

Un fișier `v` gol nu va fi afișat în conturul barei laterale, dar atâta timp cât există un fișier `v`, va fi generat un index independent pentru fișierele din acel director și subdirectoarele acestuia.

Prin separarea indexurilor pentru diferite proiecte, se poate evita încetinirea accesului cauzată de încărcarea simultană a indexului tuturor fișierelor de pe întregul site.

De [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) , fișierul index corespunzător lui `blog` în proiectul demo este :