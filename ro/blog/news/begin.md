# i18n.site · Instrumentul de traducere și creare de site-uri MarkDown este acum online!

După mai bine de jumătate de an de dezvoltare, [https://i18n.site](//i18n.site) a fost lansat.

În prezent, sunt implementate două instrumente de linie de comandă open source:

* `i18` : Instrument de traducere MarkDown în linia de comandă
* `i18n.site` : Generator de site-uri static în mai multe limbi, **optimizat pentru experiența de citire**

Traducerea păstrează perfect formatul `Markdown` și poate identifica modificările din fișiere, traducând doar fișierele modificate.

Traducerile sunt editabile; dacă se modifică textul original și se traduce din nou automat, modificările manuale nu vor fi suprascrise (dacă textul original nu a fost modificat).

[Accesați aici pentru a autoriza urmărirea automată a depozitului github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo) și **primiți un bonus de $50**.

## Origine

În era internetului, piața globală este accesibilă, iar multilingvismul și localizarea sunt competențe fundamentale.

Instrumentele de gestionare a traducerilor disponibile sunt prea complexe pentru programatorii care utilizează `git` pentru gestionarea versiunilor, preferând în continuare linia de comandă.

Așadar, am dezvoltat instrumentul de traducere `i18` și am construit generatorul de site-uri static în mai multe limbi `i18n.site` pe baza acestuia.

![](https://p.3ti.site/1723777556.avif)

Acesta este doar începutul, mai sunt multe de realizat.

De exemplu, conectarea site-ului de documente static cu rețelele sociale și abonamentele de e-mail pentru a reacha utilizatorii în timp real atunci când sunt publicate actualizări.

De exemplu, forumurile și sistemele de ticketing în mai multe limbi, integrate în orice pagină web, pentru a permite utilizatorilor să comunice fără bariere.

## Open Source

[Codul front-end, back-end și al liniei de comandă este open source](https://i18n.site/i18n.site/c/src) (modelul de traducere nu este încă deschis sursă).

Tehnologiile utilizate sunt următoarele:

Frontend: [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

Linia de comandă și backend-ul sunt dezvoltate pe baza limbajului Rust.

Back-end: [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases).

Linia de comandă: [boa_engine](https://docs.rs/boa_engine), [baza de date încorporată fjall](https://github.com/fjall-rs/fjall).

Host pentru server VPS: [contabo](https://my.contabo.com)

Baze de date: [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org).

Trimiterea e-mailurilor se face prin server SMTP auto-construct: [chasquid](https://github.com/albertito/chasquid).

## Contactați-ne

La lansarea unui nou produs, problemele sunt inevitabile.

Vă invităm să ne contactați prin forumul Google: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)