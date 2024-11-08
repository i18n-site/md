---

brief: |
  Trenutačno su implementirana dva alata otvorenog koda za naredbeni redak: i18 (MarkDown alat za prevođenje naredbenog retka) i i18n.site (generator web-mjesta za višejezične statične dokumente)

---


# i18n.site · MarkDown Alat Za Prevođenje I Izradu Web Stranica Sada Je Online!

Nakon više od pola godine razvoja, [https://i18n.site](//i18n.site)

Trenutno su implementirana dva alata naredbenog retka otvorenog koda:

* `i18` : MarkDown Alat za prevođenje naredbenog retka
* `i18n.site` : Višejezični generator statičnih dokumenata, **optimiziran za iskustvo čitanja**

Prijevod može savršeno održavati format `Markdown` . Može prepoznati izmjene datoteke i prevesti samo datoteke s promjenama.

Prijevod je moguće uređivati; ako izmijenite izvorni tekst i ponovno ga strojno prevedete, ručne izmjene prijevoda neće biti prebrisane (ako ovaj odlomak izvornog teksta nije izmijenjen).

[➤ Kliknite ovdje za autorizaciju i automatsko i18n.site knjižnice github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) i **primite bonus $50** .

## Podrijetlo

U eri interneta cijeli je svijet tržište, a višejezičnost i lokalizacija osnovne su vještine.

Postojeći alati za upravljanje prevođenjem preteški su za programere koji se oslanjaju na upravljanje verzijom `git` i dalje preferiraju naredbeni redak.

Dakle, razvio sam prevoditeljski alat `i18` i izgradio višejezični generator statičnih stranica `i18n.site` na temelju prevoditeljskog alata.

![](https://p.3ti.site/1723777556.avif)

Ovo je tek početak, ima još mnogo toga za napraviti.

Na primjer, povezivanjem stranice sa statičnim dokumentima s pretplatama na društvenim mrežama i e-poštom, korisnici se mogu doseći na vrijeme kada se objave ažuriranja.

Na primjer, višejezični forumi i sustavi radnih naloga mogu se ugraditi u bilo koju web stranicu, omogućujući korisnicima komunikaciju bez prepreka.

## Otvoreni Kod

Front-end, back-end i [kodovi naredbenog retka su otvorenog koda](https://i18n.site/i18n.site/c/src) (model prijevoda još nije otvorenog koda).

Korišteni tehnološki skup je sljedeći:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Naredbeni redak i pozadina razvijeni su na temelju rusta.

stražnji kraj [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

[Naredbeni redak ugrađen js Engine boa_engine](https://docs.rs/boa_engine) , [ugrađena baza podataka fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

baza podataka [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

Pošaljite mail na self-built [chasquid](https://github.com/albertito/chasquid) SMTP

## Kontaktirajte Nas

Kada se lansiraju novi proizvodi, problemi su neizbježni.

Slobodno nas kontaktirajte putem [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) Foruma :