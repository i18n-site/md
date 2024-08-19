# Kuinka kysymykset

## Vahingossa poistettu `.i18n/v`, mikä estää `npm`-paketin julkaisun

`.i18n/v/ol/v.hash` sisältää `npm`-paketin julkaisuhistorian versiot

Jos vahingossa poistat `.i18n/v/ol`, `npm`-pakettia ei voida julkaista

Tässä tapauksessa etsi ensin projektisi viimeisimmän julkaisun versio [npmjs.com](//npmjs.com), esimerkiksi `0.1.9`

Sitten katso alla olevaa `bash`-komentoa tiedoston luomiseksi

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Huomaa, että tällä tavalla tapahtuva korjaus kadottaa tiedostohistorian, mikä estää inkrementaalin päivityksen seuraavassa julkaisussa, ja kaikki sisältö pakataan uudelleen ja lähetetään uudelleen