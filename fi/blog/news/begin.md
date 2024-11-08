---

brief: |
  Tällä hetkellä on otettu käyttöön kaksi avoimen lähdekoodin komentorivityökalua: i18 (MarkDown-komentorivin käännöstyökalu) ja i18n.site (monikielinen staattisen asiakirjan sivuston luonti)

---


# i18n.site · MarkDown-Käännös- Ja Verkkosivustojen Rakennustyökalu on Nyt Verkossa!

Yli puolen vuoden kehitystyön jälkeen [https://i18n.site](//i18n.site)

Tällä hetkellä käytössä on kaksi avoimen lähdekoodin komentorivityökalua:

* `i18` : MarkDown Komentorivin käännöstyökalu
* `i18n.site` : staattisen asiakirjasivuston generaattori, **optimoitu lukukokemusta varten**

Käännös voi täydellisesti säilyttää muodon `Markdown` . Pystyy tunnistamaan tiedostojen muutokset ja kääntämään vain muutoksia sisältäviä tiedostoja.

Käännös on muokattavissa, jos muutat alkuperäistä tekstiä ja käännät sen uudelleen, käännökseen tehtyjä manuaalisia muutoksia ei kirjoiteta päälle (jos tätä alkuperäisen tekstin kappaletta ei ole muokattu).

[➤ Napsauta tätä valtuuttaaksesi ja seurataksesi i18n.site github -kirjastoa](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ja **saat bonusta $50** !

## Alkuperä

Internetin aikakaudella koko maailma on markkina, ja monikielisyys ja lokalisointi ovat perustaitoja.

Nykyiset käännöshallintatyökalut ovat liian painavia Ohjelmoijille, jotka luottavat version `git` hallintaan, he suosivat silti komentoriviä.

Joten kehitin käännöstyökalun `i18` ja rakensin monikielisen staattisen sivustogeneraattorin `i18n.site` käännöstyökalun perusteella.

![](https://p.3ti.site/1723777556.avif)

Tämä on vasta alkua, paljon on vielä tehtävää.

Esimerkiksi yhdistämällä staattinen dokumenttisivusto sosiaaliseen mediaan ja sähköpostitilauksiin, käyttäjät voidaan tavoittaa ajoissa, kun päivityksiä julkaistaan.

Esimerkiksi monikieliset foorumit ja työmääräysjärjestelmät voidaan upottaa mille tahansa verkkosivulle, jolloin käyttäjät voivat kommunikoida ilman esteitä.

## Avoin Lähdekoodi

Käyttöliittymä-, tausta- ja [komentorivikoodit ovat kaikki avoimen lähdekoodin](https://i18n.site/i18n.site/c/src) (käännösmalli ei ole vielä avoimen lähdekoodin).

Käytetty tekniikkapino on seuraava:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Komentorivi ja taustaohjelma on kehitetty ruosteen perusteella.

takaosa [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

Komentorivi [js moottori boa_engine](https://docs.rs/boa_engine) , [sulautettu tietokanta fjall](https://github.com/fjall-rs/fjall) .

palvelin [contabo](https://my.contabo.com) VPS

[kvrocks](https://kvrocks.apache.org) , [mariadb](https://mariadb.org) .

Lähetä sähköpostia itse rakennettu [chasquid](https://github.com/albertito/chasquid) SMTP

## Ota Yhteyttä

Kun uusia tuotteita tuodaan markkinoille, ongelmat ovat väistämättömiä.

Ota rohkeasti yhteyttä [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) -foorumin kautta :