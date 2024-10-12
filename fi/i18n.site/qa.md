# Faq

## Vahingossa poistettu `.i18n/v`, mikä estää `npm`-paketin julkaisun

`.i18n/v/ol/v.hash` sisältää `npm`-paketin julkaisuhistorian versiot

Jos vahingossa poistat `.i18n/v/ol`, `npm`-pakettia ei voida julkaista

Tässä vaiheessa etsi ensin projektisi viimeisimmän julkaisun versionumero [npmjs.com](//npmjs.com), kuten `0.1.9`.

Sitten katso alla olevaa `bash`-komentoa tiedoston luomiseksi

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Huomaa, että tämä korjausmenetelmä kadottaa tiedostohistorian, mikä estää inkrementaalin päivityksen seuraavassa julkaisussa, ja kaikki sisältö pakataan uudelleen ja lähetetään uudelleen