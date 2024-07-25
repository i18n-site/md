# Yleinen Ongelma

## Poistettu Vahingossa `.i18n/V` Minkä Vuoksi Paketin `Npm` Julkaiseminen Epäonnistui

`npm` pakettijulkaisun historiallinen versio on tallennettu `.i18n/v/ol/v.hash`

Jos poistat vahingossa `.i18n/v/ol` `npm` -pakettia ei julkaista.

Etsi tällä hetkellä ensin projektisi viimeisimmän julkaisuversion versionumero `0.1.9` [npmjs.com](//npmjs.com)

Katso sitten alla oleva `bash`

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Huomaa, että korjaus tällä tavalla menettää tiedostohistorian, jolloin seuraavan julkaisun asteittainen päivittäminen on mahdotonta, ja kaikki sisältö pakataan uudelleen ja ladataan kerran.

