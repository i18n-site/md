# i18n.site · MarkDown-käännös- ja verkkosivustojen rakennustyökalu, nyt käytössä!

Yli puolen vuoden kehitystyön jälkeen [https://i18n.site](//i18n.site) on käynnistetty.

Tällä hetkellä olemme toteuttaneet kaksi avoimen lähdekoodin komentorivityökalua:

* `i18` : MarkDown-komentorivin käännöstyökalu
* `i18n.site` : monikielinen staattinen dokumenttisivustogeneraattori, **optimoitu lukukokemusta varten**

Käännös säilyttää täydellisesti `Markdown`-muodon. Tunnistaa tiedostojen muutokset ja käännetään vain muutoksia sisältävät tiedostot.

Käännökset ovat muokattavissa; jos alkuperäistä tekstiä muutetaan ja se käännetään uudelleen, manuaaliset muutokset eivät korvaa käännöstä (jos alkuperäistä kappaletta ei ole muutettu).

[Napsauta tätä valtuuttaaksesi ja seurataksesi github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ja **saat $50** !

## Alkuperä

Internet-ajan maailmassa koko maailma on markkina-alue, ja monikielisyys sekä lokalisointi ovat perustaitoja.

Nykyiset käännöshallintatyökalut ovat liian raskaita, ja ohjelmoijat, jotka käyttävät `git`-versionhallintaa, suosivat edelleen komentorivitä.

Siksi kehitin käännöstyökalun `i18` ja rakensin sen pohjalta monikielisen staattisen sivustogeneraattorin `i18n.site`.

![](https://p.3ti.site/1723777556.avif)

Tämä on vasta alkua, ja paljon on vielä tehtävää.

Esimerkiksi, voimme yhdistää staattisen dokumenttisivuston sosiaalisiin media-alustoihin ja sähköpostitilauksiin, jotta päivitykset voidaan toimittaa käyttäjille ajallaan.

Tai voimme lisätä monikielisiä foorumeita ja työmääräysjärjestelmiä mihin tahansa verkkosivulle, jotta käyttäjät voivat kommunikoida esteettömästi.

## Avoimen lähdekoodin

Käyttöliittymä-, tausta- ja [komentorivikoodit ovat kaikki avoimen lähdekoodin](https://i18n.site/i18n.site/c/src) (käännösmalli ei ole vielä avoimen lähdekoodin).

Käytetty teknologiapino on seuraava:

Käyttöliittymä: [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

Komentorivi ja tausta: kehitetty Rustin pohjalta.

Taustakoodi: [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases)

Komentorivit: [嵌入式js boa_engine](https://docs.rs/boa_engine), [嵌入式数据库 fjall](https://github.com/fjall-rs/fjall)

Palvelin: [contabo](https://my.contabo.com) VPS

Tietokanta: [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org)

Sähköpostin lähettäminen: itse rakennettu [chasquid](https://github.com/albertito/chasquid) SMTP

## Ota yhteyttä

Uusien tuotteiden markkinoille tullessa ongelmia on väistämättä.

Ota rohkeasti yhteyttä Google-foorumiin: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)