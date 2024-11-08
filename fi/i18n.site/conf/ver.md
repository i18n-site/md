# Projektin Versio

Otetaan esimerkkinä demoprojekti:

`en/demo2/v` on projektin nykyinen versionumero, joka näkyy projektin nimen oikealla puolella sivupalkin ääriviivassa.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Tässä `en/` on kielikoodi, joka vastaa käännöksen lähdekieltä, jonka on määrittänyt `.i18n/conf.yml` .

Jos lähdekielesi ei ole englanti, `v` tiedosto tulee sijoittaa lähdekielesi projektihakemistoon.

Mahdollisuutta selata dokumenttien historiallisia versioita kehitetään.

On suositeltavaa muokata asiakirjan versionumeroa vain, kun suuria päivityksiä julkaistaan (kuten `v1` , `v2` ), jotta liian monet versionumerot eivät aiheuta sotkua hakukoneiden indeksoimille sivuille.

## Käytä Tyhjiä `v` Tiedostoja Eri Projektien Tiedostohakemistojen Jakamiseen

Demoprojektissa voit nähdä `en/demo2/v` :n lisäksi, että hakemistoissa `en/blog` ja `en/demo1` on `v` tyhjää tiedostoa.

Tyhjä `v` ei näy sivupalkin ääriviivassa, mutta niin kauan kuin tiedosto on `v` , hakemiston ja alihakemistojen tiedostoille luodaan itsenäinen indeksi.

Jakamalla eri projektien indeksit voit välttää hitaan pääsyn, joka johtuu siitä, että koko sivuston kaikkien tiedostojen hakemisto ladataan kerralla.

Esimerkiksi demoprojektin numeroa `blog` vastaava indeksitiedosto on [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :