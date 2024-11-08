---

brief: |
  V súčasnosti sú implementované dva open source nástroje príkazového riadka: i18 (nástroj na preklad príkazového riadka MarkDown) a i18n.site (generátor viacjazyčných statických stránok dokumentov)

---


# i18n.site · Nástroj Na Preklad a Tvorbu Webových Stránok MarkDown Je Teraz Online!

Po viac ako pol roku vývoja je [https://i18n.site](//i18n.site)

V súčasnosti sú implementované dva open source nástroje príkazového riadku:

* `i18` : MarkDown
* `i18n.site` : generátor statickej stránky dokumentov, **optimalizovaný pre zážitok z čítania**

Preklad dokáže perfektne zachovať formát `Markdown` . Dokáže identifikovať úpravy súborov a prekladať iba súbory so zmenami.

Preklad je upraviteľný, ak upravíte pôvodný text a znova ho strojovo preložíte, ručné úpravy prekladu sa neprepíšu (ak tento odsek pôvodného textu nebol upravený).

[➤ Kliknite sem, ak chcete autorizovať a automaticky i18n.site knižnicu github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) a **získať bonus $50** .

## Pôvod

V ére internetu je celý svet trhom a viacjazyčnosť a lokalizácia sú základné zručnosti.

Existujúce nástroje na správu prekladov sú príliš ťažké Pre programátorov, ktorí sa spoliehajú na správu verzie `git` , stále preferujú príkazový riadok.

Vyvinul som teda prekladateľský nástroj `i18` a zostavil viacjazyčný generátor statických stránok `i18n.site` založený na prekladacom nástroji.

![](https://p.3ti.site/1723777556.avif)

Toto je len začiatok, je toho ešte veľa.

Napríklad prepojením stránky so statickými dokumentmi so sociálnymi médiami a odberom e-mailov môžu byť používatelia oslovení včas, keď sú vydané aktualizácie.

Napríklad viacjazyčné fóra a systémy pracovných príkazov môžu byť vložené do akejkoľvek webovej stránky, čo používateľom umožňuje komunikovať bez prekážok.

## Open Source

[Všetky kódy front-endu, back-endu a príkazového riadku sú open source](https://i18n.site/i18n.site/c/src) (model prekladu ešte nie je open source).

Použitý technologický zásobník je nasledovný:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Príkazový riadok a backend sú vyvinuté na báze hrdze.

zadný koniec [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

Príkazový riadok [embedded js Engine boa_engine](https://docs.rs/boa_engine) , [vložená databáza fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

databáza [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

Pošlite poštu na svojpomocne zostavené [chasquid](https://github.com/albertito/chasquid) SMTP

## Kontaktujte Nás

Pri uvedení nových produktov na trh sú nevyhnutné problémy.

Neváhajte nás kontaktovať prostredníctvom fóra Google [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :