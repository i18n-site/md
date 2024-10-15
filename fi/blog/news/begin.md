---

brief: |
  Tällä hetkellä on otettu käyttöön kaksi avoimen lähdekoodin komentorivityökalua: i18 (MarkDown-komentorivin käännöstyökalu) ja i18n.site (monikielinen staattisen asiakirjan sivuston luontityökalu)

---


# i18n.site · MarkDown-käännös- ja verkkosivustojen rakennustyökalu on nyt verkossa!

Yli puolen vuoden kehitystyön jälkeen [https://i18n.site](//i18n.site) on julkaistu.

Tällä hetkellä on otettu käyttöön kaksi avoimen lähdekoodin komentorivityökalua:

* `i18`: MarkDown-komentorivin käännöstyökalu
* `i18n.site`: monikielinen staattisen asiakirjasivuston generaattori, **optimoitu lukukokemusta varten**

Käännös säilyttää täydellisesti `Markdown`-muodon. Tunnistaa tiedostojen muutokset ja käännetään vain muutoksia sisältävät tiedostot.

Käännös on muokattavissa; jos alkuperäistä tekstiä muokataan uudelleen, käännökseen tehtyjä manuaalisia muutoksia ei korvata (jos alkuperäistä kappaletta ei ole muokattu).

[Napsauta tätä hyväksyäksesi ja seurataksesi github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ja **vastaanottaa bonus $50** !

## Alkuperä

Internet-kaudella koko maailma on markkina-alue, ja monikielisyys sekä lokalisointi ovat perustaitoja.

Nykyiset käännöshallintatyökalut ovat liian raskaita ohjelmoijille, jotka luottavat `git`-versionhallintaan, he kuitenkin suosivat komentoriviä.

Tämän seurauksena kehitin käännöstyökalun `i18` ja rakensin monikielisen staattisen sivustogeneraattorin `i18n.site`.

![](https://p.3ti.site/1723777556.avif)

Tämä on vasta alkua, paljon on vielä tehtävää.

Esimerkiksi, staattisen dokumenttisivuston yhdistäminen sosiaaliseen mediaan ja sähköpostitilauksiin mahdollistaa käyttäjien tavoittamisen ajallaan päivitysten julkaisun yhteydessä.

Esimerkiksi, monikieliset foorumit ja työmääräysjärjestelmät voidaan upottaa mihin tahansa verkkosivulle, jolloin käyttäjät voivat kommunikoida esteettömästi.

## Avoin lähdekoodi

Käyttöliittymä-, tausta- ja [komentorivikoodit ovat kaikki avoimen lähdekoodin](https://i18n.site/i18n.site/c/src) (käännösmalli ei ole vielä avoimen lähdekoodin).

Käytetty teknologiapino on seuraava:

[svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

Komentorivi- ja taustaohjelma on kehitetty Rustin pohjalta.

Taustakoodit [axum](https://github.com/tokio-rs/axum) ja [tower-http](https://github.com/tower-rs/tower-http/releases).

Komentoriviohjelmointi [嵌入式js引擎 boa_engine](https://docs.rs/boa_engine) ja [嵌入式数据库 fjall](https://github.com/fjall-rs/fjall).

Palvelin: [contabo](https://my.contabo.com) VPS

Tietokannat: [kvrocks](https://kvrocks.apache.org) ja [mariadb](https://mariadb.org).

Sähköpostin lähettäminen omalla [chasquid](https://github.com/albertito/chasquid) SMTP:llä

## Ota yhteyttä

Uusien tuotteiden lanseeraus tuo mukanaan ongelmia, jotka ovat väistämättömiä.

Take rohkeasti yhteyttä [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) -foorumin kautta