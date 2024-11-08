---

brief: |
  Praegu on kasutusele võetud kaks avatud lähtekoodiga käsurea tööriista: i18 (MarkDown käsurea tõlketööriist) ja i18n.site (mitmekeelse staatilise dokumendi saidi generaator)

---


# i18n.site · MarkDowni Tõlke- Ja Veebisaitide Koostamise Tööriist on Nüüd Võrgus!

Pärast enam kui pooleaastast arendust on [https://i18n.site](//i18n.site)

Praegu on rakendatud kaks avatud lähtekoodiga käsurea tööriista:

* `i18` : MarkDown tõlkimise tööriist
* `i18n.site` Mitmekeelne staatilise dokumendi : generaator, **optimeeritud lugemiskogemuse jaoks**

Tõlge suudab suurepäraselt säilitada vormingu `Markdown` . Suudab tuvastada failimuudatusi ja tõlkida ainult muudatustega faile.

Tõlge on redigeeritav, kui muudate originaalteksti ja tõlgite selle uuesti, ei kirjutata tõlke käsitsi tehtud muudatusi üle (kui seda algteksti lõiku pole muudetud).

[➤ Klõpsake siin, et autoriseerida ja automaatselt jälgida github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ning **saada boonus $50** .

## Päritolu

Internetiajastul on kogu maailm turg ning mitmekeelsus ja lokaliseerimine on põhioskused.

Olemasolevad tõlkehaldustööriistad on liiga rasked. Programmeerijate jaoks, kes tuginevad versioonile `git` , eelistavad nad siiski käsurida.

Niisiis töötasin välja tõlketööriista `i18` ja koostasin tõlketööriista põhjal mitmekeelse staatilise saidi generaatori `i18n.site` .

![](https://p.3ti.site/1723777556.avif)

See on alles algus, teha on veel palju.

Näiteks ühendades staatilise dokumendi saidi sotsiaalmeedia ja e-posti tellimustega, jõuate kasutajateni õigeaegselt, kui värskendused avaldatakse.

Näiteks saab mitmekeelseid foorumeid ja töökäskude süsteeme manustada mis tahes veebilehele, mis võimaldab kasutajatel takistusteta suhelda.

## Avatud Lähtekoodiga

Esiotsa, tagaosa ja käsurea [koodid on kõik avatud lähtekoodiga](https://i18n.site/i18n.site/c/src) (tõlkemudel ei ole veel avatud lähtekoodiga).

Kasutatav tehnoloogiapakk on järgmine:

Frontend [svelte](https://svelte.dev) [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Käsurida ja taustaprogramm on välja töötatud roostepõhiselt.

tagumine ots [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

Käsurea [js Mootor boa_engine](https://docs.rs/boa_engine) , [sisseehitatud andmebaas fjall](https://github.com/fjall-rs/fjall) .

server [contabo](https://my.contabo.com) VPS

[kvrocks](https://kvrocks.apache.org) , [mariadb](https://mariadb.org) .

Saada kiri iseehitatud [chasquid](https://github.com/albertito/chasquid) SMTP

## Võtke Meiega Ühendust

Uute toodete turule toomisel on probleemid vältimatud.

Võtke meiega ühendust Google'i foorumi kaudu [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :