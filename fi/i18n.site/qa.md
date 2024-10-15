# Faq

## Vahingossa poistettu `.i18n/v`, mikä estää `npm`-paketin julkaisun

`.i18n/v/ol/v.hash` sisältää `npm`-paketin julkaisuhistorian.

Jos vahingossa poistat `.i18n/v/ol`, `npm`-pakettia ei voida julkaista.

Etsi ensin [npmjs.com](//npmjs.com) projektisi viimeisimmän julkaisun versionumero, esimerkiksi `0.1.9`.

Katso sitten alla olevaa `bash`-komentoa tiedoston luomiseksi.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Huomaa, että tämä korjausmenetelmä kadottaa tiedostohistorian, mikä estää inkrementaalin päivityksen seuraavassa julkaisussa, ja kaikki sisältö pakataan ja lähetetään uudelleen.