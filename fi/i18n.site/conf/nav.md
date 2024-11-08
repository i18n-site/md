# Mukautettu Navigointi

Otetaan [i18n-demo.github.io](//i18n-demo.github.io) esimerkkinä navigoinnin mukauttamisesta.

![](https://p.3ti.site/1731036697.avif)

Yllä olevan kuvan numeroituja alueita vastaavat tiedostot ovat seuraavat:

1. Vasen [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Oikea [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) on mallikieli, joka luo `HTML` :n.

[➔ Napsauta tästä oppiaksesi kieliopin pug](https://pugjs.org)

Tiedostossa käytetään muotomerkkijonoa `${I18N.sponsor}` kansainvälistymisen toteuttamiseen, ja sen sisältö korvataan vastaavalla tekstillä [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) hakemistossa.

**Älä kirjoita `css` ja `js` `pug` :aan** , muuten tapahtuu virhe.

Tyylit kirjoitetaan arvoon `css` , ja vuorovaikutus saavutetaan luomalla verkkokomponentteja.

Tässä [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) tyyliä vastaava tiedosto on :