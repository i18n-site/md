# Sanasto

Sanastotiedosto `.i18n/term.yml` voidaan luoda Seuraavassa on esimerkki sanastosta, jonka lähdekieli on kiina :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Niiden joukossa `zh:` edustaa lähdekielen oletuskielistä kiinan sanastoa : Eli riippumatta siitä, mille kielelle se on käännetty, kiina `快猫星云` käännetään kieleksi `Flashcat` !

`zh>en:` tarkoittaa, että kun käännetään kiinasta englanniksi, `告警` käännetään `alert` ksi ja `故障` käännetään `incident` ksi.

Täällä voidaan kirjoittaa useita kohdekieliä `zh>` jälkeen, mikä voi yksinkertaistaa termien määrittämistä samankaltaisilla kielillä.

Esimerkiksi `zh>sk>cs` tarkoittaa, että kun kiina käännetään slovakiksi ja tšekin kieleksi, tämä terminologialuettelo jaetaan.

> [!TIP]
> Useita tavoitteita sisältävät terminologian sanastot ja yhden kohteen terminologian sanastot tukevat esimerkiksi kolme terminologian sanastoa `zh>sk>cs` , `zh>sk` ja `zh>cs` samanaikaisesti.