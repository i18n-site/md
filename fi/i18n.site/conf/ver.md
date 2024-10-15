# Projektin versio

Käytetään esimerkkinä demo-projektia:

`en/demo2/v` on projektin nykyinen versio, joka näytetään sivupalkin tietolaatikossa projektin nimen vieressä.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Tässä `en/` on `.i18n/conf.yml`-tiedostossa määritelty käännöksen lähdekielen vastaava kielikoodi.

Jos lähdekielenäsi ei ole englanti, `v`-tiedosto tulisi sijoittaa lähdekielen projektikansioon.

Dokumenttien historiallisten versioiden selausominaisuus on kehityksessä.

On suositeltavaa muokata asiakirjan versionumeroa vain suurten päivitysten yhteydessä (esim. `v1`, `v2`), jotta vältetään versionumeroiden liiallinen hajanoutuminen hakukoneiden indeksoimilla sivuilla.

## Käytä tyhjiä `v`-tiedostoja eri projektien tiedostohakemistojen erottamiseen

Demoprojektissa, paitsi `en/demo2/v`, on myös `en/blog`- ja `en/demo1`-kansioissa tyhjiä `v`-tiedostoja.

Tyhjä `v` ei näy sivupalkin tarkistuslistassa, mutta kun `v`-tiedosto on olemassa, se luo kyseiselle kansiolle ja sen alikansioille erillisen indeksin.

Eri projektien indeksien erottamisella voidaan välttää hitaus, joka johtuu kaikkien sivuston tiedostojen indeksin lataamisesta kerralla.

Esimääksi demoprojektin `blog`-kansioon liittyvä indeksitiedosto on [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)