# Projektin versio

Otetaan esimerkkinä demo-projekti:

`en/demo2/v` sisältää projektin nykyisen versionumeron, joka näkyy sivupalkin tarkistuslistassa projektin nimen vieressä.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Tässä `en/` on `.i18n/conf.yml`-tiedostossa määritelty käännöksen lähdekielen kielikoodi.

Jos lähdekieli ei ole englanti, `v`-tiedosto tulisi sijoittaa lähdekielen projektikansioon.

Dokumenttien historiallisten versioiden selausominaisuus on kehityksessä.

On suositeltavaa muokata asiakirjan versionumeroa vain merkittävien päivitysten yhteydessä (esim. `v1`, `v2`), jotta vältetään versionumeroiden liiallinen määrä ja hakukoneiden indeksoimien sivujen sekavuus.

## Käytä tyhjiä `v`-tiedostoja eri projektien tiedostohakemistojen erottamiseen

Demoprojektissa `en/demo2/v`:n lisäksi näkyy myös `en/blog`- ja `en/demo1`-kansioissa tyhjiä `v`-tiedostoja.

Tyhjä `v` ei näy sivupalkin tarkistuslistassa, mutta kun `v`-tiedosto on olemassa, se luo hakemistolle ja sen alihakemistoille erillisen indeksin.

Eri projektien indeksien erottamisella voidaan välttää sivuston kaikkien tiedostojen indeksin kerralla lataaminen, mikä voi hidastaa sivun latautumista.

Esimerkiksi demoprojektin numeroa `blog` vastaava indeksitiedosto on [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :