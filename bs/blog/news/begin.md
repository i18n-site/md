---

brief: |
  Trenutno su implementirana dva alata za komandnu liniju otvorenog koda: i18 (MarkDown alat za prevođenje komandne linije) i i18n.site (generator stranice za višejezični statički dokument)

---


# i18n.site · MarkDown Alat Za Prevođenje I Izradu Web Stranica Je Sada Online!

Nakon više od pola godine razvoja, [https://i18n.site](//i18n.site)

Trenutno su implementirana dva open source alata komandne linije:

* `i18` : MarkDown za prevođenje komandne linije
* `i18n.site` : generator statičkih dokumenata, **optimiziran za iskustvo čitanja**

Prijevod može savršeno održati format `Markdown` . Može identificirati modifikacije datoteka i samo prevesti datoteke s promjenama.

Prevod se može uređivati ako izmenite originalni tekst i ponovo ga mašinski prevedete, ručne izmene prevoda neće biti prepisane (ako ovaj paragraf originalnog teksta nije izmenjen).

[➤ Kliknite ovdje da autorizujete i automatski pratite github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) i **dobijete bonus $50** !

## Porijeklo

U eri interneta, cijeli svijet je tržište, a višejezičnost i lokalizacija su osnovne vještine.

Postojeći alati za upravljanje prevođenjem su previše teški Za programere koji se oslanjaju na upravljanje verzijom `git` , oni i dalje preferiraju komandnu liniju.

Dakle, razvio sam alat za prevođenje `i18` i napravio višejezični generator statičkog sajta `i18n.site` zasnovan na alatu za prevođenje.

![](https://p.3ti.site/1723777556.avif)

Ovo je samo početak, ima još mnogo toga da se uradi.

Na primjer, povezivanjem stranice sa statičnim dokumentima s društvenim medijima i pretplatama na e-poštu, korisnici mogu biti dostupni na vrijeme kada se objave ažuriranja.

Na primjer, višejezični forumi i sistemi radnih naloga mogu biti ugrađeni u bilo koju web stranicu, omogućavajući korisnicima da komuniciraju bez prepreka.

## Open Source

Front-end, back-end i [kodovi komandne linije su svi open source](https://i18n.site/i18n.site/c/src) (model prevođenja još nije open source).

Tehnološki skup koji se koristi je sljedeći:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Komandna linija i pozadina su razvijeni na osnovu rust-a.

zadnji kraj [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

[js komandna linija Engine boa_engine](https://docs.rs/boa_engine) , [ugrađena baza podataka fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

baza [kvrocks](https://kvrocks.apache.org) , [mariadb](https://mariadb.org) .

Pošaljite mail na [chasquid](https://github.com/albertito/chasquid) -built SMTP

## Kontaktirajte Nas

Kada se lansiraju novi proizvodi, problemi su neizbježni.

Slobodno nas kontaktirajte putem Google Foruma [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :