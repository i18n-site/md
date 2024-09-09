# 1. Projektin versio

2. Käytetään esimerkkinä demo-projektia:

`en/demo2/v` on projektin nykyinen versio, joka näytetään sivupalkin tietosanaston projektin nimen vieressä.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

4. Tässä `en/` on `.i18n/conf.yml`-tiedostossa määritelty käännöksen lähdekielen vastaava kielikoodi.

5. Jos lähdekieli ei ole englanti, `v`-tiedosto tulisi sijoittaa lähdekielen projektikansioon.

6. Dokumenttien historiallisten versioiden selausominaisuus on kehityksessä.

7. On suositeltavaa muokata asiakirjan versionumeroa vain merkittävien päivitysten yhteydessä (esim. `v1`, `v2`), välttääksemme liiallisen versionumeroiden määrän, joka saattaisi aiheuttaa sekavuutta hakukoneiden indeksoimille sivuille.

## 8. Käytä tyhjiä `v`-tiedostoja eri projektien tiedostohakemistojen erottamiseen

9. Demo-projektissa `en/demo2/v`:n lisäksi voit nähdä, että `en/blog`- ja `en/demo1`-kansioissa on tyhjiä `v`-tiedostoja.

10. Tyhjä `v` ei näy sivupalkin tarkistuslistassa, mutta kun `v`-tiedosto on olemassa, se luo kyseiselle kansiolle ja sen alikansioille erillisen indeksin.

11. Eri projektien indeksien erottamalla voidaan välttää hitaus, joka johtuu siitä, että kaikki sivuston tiedostot ladataan yhdessä indeksoitavaksi.

12. Esimerkiksi demo-projektin `blog`-kansioon vastaava indeksitiedosto on [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)