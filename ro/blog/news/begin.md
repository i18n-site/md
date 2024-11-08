---

brief: |
  În prezent, au fost implementate două instrumente de linie de comandă open source: i18 (instrument de traducere în linia de comandă MarkDown) și i18n.site (generator de site-uri de documente static în mai multe limbi)

---


# i18n.site · Instrumentul De Traducere Și Creare De Site-Uri MarkDown Este Acum Online!

După mai bine de jumătate de an de dezvoltare, [https://i18n.site](//i18n.site)

În prezent, sunt implementate două instrumente de linie de comandă open source:

* `i18` : MarkDown Instrument de traducere în linia de comandă
* `i18n.site` : Generator de site-uri de documente static în mai multe limbi, **optimizat pentru experiența de citire**

Traducerea poate menține perfect formatul `Markdown` . Poate identifica modificările fișierelor și poate traduce numai fișierele cu modificări.

Traducerea este editabilă, dacă modificați textul original și îl traduceți automat din nou, modificările manuale ale traducerii nu vor fi suprascrise (dacă acest paragraf al textului original nu a fost modificat).

[➤ Faceți clic aici pentru a autoriza și pentru a urmări automat github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) și **pentru a primi bonus $50** !

## Origine

În era Internetului, întreaga lume este o piață, iar multilingvismul și localizarea sunt abilități de bază.

Instrumentele existente de gestionare a traducerilor sunt prea grele Pentru programatorii care se bazează pe managementul versiunii `git` , ei încă preferă linia de comandă.

Așadar, am dezvoltat un instrument de traducere `i18` și am construit un generator de site-uri static în mai multe limbi `i18n.site` bazat pe instrumentul de traducere.

![](https://p.3ti.site/1723777556.avif)

Acesta este doar începutul, mai sunt multe de făcut.

De exemplu, prin conectarea site-ului de documente static cu rețelele sociale și abonamentele de e-mail, utilizatorii pot fi contactați la timp atunci când sunt lansate actualizări.

De exemplu, forumurile în mai multe limbi și sistemele de ordine de lucru pot fi încorporate în orice pagină web, permițând utilizatorilor să comunice fără bariere.

## Sursă Deschisă

[Codurile front-end, back-end și linia de comandă sunt toate open source](https://i18n.site/i18n.site/c/src) (modelul de traducere nu este încă open source).

Tehnologia utilizată este următoarea:

Frontend [svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Linia de comandă și backend-ul sunt dezvoltate pe baza ruginii.

fundătură [axum](https://github.com/tokio-rs/axum) , [tower-http](https://github.com/tower-rs/tower-http/releases) .

Linia de comandă [js boa_engine](https://docs.rs/boa_engine) , [baza de date încorporată fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

baza de [kvrocks](https://kvrocks.apache.org) , [mariadb](https://mariadb.org) .

Trimite e [chasquid](https://github.com/albertito/chasquid) SMTP

## Contactaţi-Ne

Când sunt lansate produse noi, problemele sunt inevitabile.

Nu ezitați să [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) contactați prin Google Forum :