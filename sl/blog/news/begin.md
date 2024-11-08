---

brief: |
  Trenutno sta implementirani dve odprtokodni orodji ukazne vrstice: i18 (orodje za prevajanje ukazne vrstice MarkDown) in i18n.site (generator večjezičnega statičnega mesta dokumentov).

---


# i18n.site · Orodje Za Prevajanje in Gradnjo Spletnih Strani MarkDown Je Zdaj Na Spletu!

Po več kot pol leta razvoja, [https://i18n.site](//i18n.site)

Trenutno sta implementirani dve odprtokodni orodji ukazne vrstice:

* `i18` : MarkDown Orodje za prevajanje ukazne vrstice
* `i18n.site` : generator statičnih dokumentov, **optimiziran za bralno izkušnjo**

Prevod lahko popolnoma ohrani obliko `Markdown` . Lahko prepozna spremembe datotek in prevede samo datoteke s spremembami.

Prevod je mogoče urejati; če spremenite izvirno besedilo in ga znova strojno prevedete, ročne spremembe prevoda ne bodo prepisane (če ta odstavek izvirnega besedila ni bil spremenjen).

[➤ Kliknite tukaj, da avtorizirate in i18n.site sledite knjižnici github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) in **prejmete bonus $50** .

## Izvor

V dobi interneta je ves svet trg, večjezičnost in lokalizacija pa sta osnovni veščini.

Obstoječa orodja za upravljanje prevodov so pretežka za programerje, ki se zanašajo na upravljanje različice `git` , še vedno imajo raje ukazno vrstico.

Tako sem razvil prevajalsko orodje `i18` in zgradil večjezični generator statičnih spletnih mest `i18n.site` ki temelji na prevajalskem orodju.

![](https://p.3ti.site/1723777556.avif)

To je šele začetek, treba je še veliko narediti.

Če na primer spletno mesto s statičnimi dokumenti povežete z družbenimi mediji in naročninami na e-pošto, lahko uporabnike dosežete pravočasno, ko so izdane posodobitve.

Na primer, večjezične forume in sisteme delovnih nalogov je mogoče vdelati v katero koli spletno stran, kar uporabnikom omogoča komunikacijo brez ovir.

## Odprta Koda

Sprednji del, zadnji del in [kode ukazne vrstice so vse odprtokodne](https://i18n.site/i18n.site/c/src) (model prevoda še ni odprtokoden).

Uporabljeni tehnološki sklop je naslednji:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Ukazna vrstica in zaledje sta razvita na osnovi rusta.

zadnji konec [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

Ukazna vrstica [vdelana js Engine boa_engine](https://docs.rs/boa_engine) , [vdelana baza podatkov fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

baza podatkov [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

Pošljite pošto na self- [chasquid](https://github.com/albertito/chasquid) SMTP

## Kontaktirajte Nas

Ko se lansirajo novi izdelki, so težave neizogibne.

Kontaktirajte [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) prek Google Foruma :