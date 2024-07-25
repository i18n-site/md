# Projektin Versio

Otetaan esimerkkinä demoprojekti:

`en/demo2/v` on projektin nykyinen versionumero, joka näkyy projektin nimen oikealla puolella sivupalkissa.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` on `.i18n/conf.yml` käännöksen lähdekieltä vastaava kielikoodi.

Jos lähdekielesi ei ole englanti, `v` tulee sijoittaa lähdekielesi projektihakemistoon. 

Mahdollisuutta selata dokumenttien historiallisia versioita kehitetään.

On suositeltavaa muokata vain asiakirjan versionumeroa suuria päivityksiä julkaistaessa (kuten `v1` , `v2` ), jotta hakukoneiden indeksoimat sivut eivät sotkeutuisi liian monien versionumeroiden vuoksi.

## Käytä Tyhjiä `v` -Tiedostoja Tiedostohakemistojen Jakamiseen Eri Projekteille

Demoprojektissa voit nähdä `en/demo2/v` :n lisäksi, että `en/blog` ja `en/demo1` -hakemistojen sisältö on tyhjä `v` tiedostot.

`v` ei näy sivupalkin ääriviivassa, mutta niin kauan kuin tiedosto `v` on olemassa, hakemiston ja alihakemistojen tiedostoille luodaan itsenäinen hakemisto.

Jakamalla eri projektien indeksit voit välttää hitaan pääsyn, joka johtuu koko sivuston kaikkien tiedostojen indeksin lataamisesta kerralla.

Esimerkiksi esittelyprojektissa vastaava [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) : `blog`

