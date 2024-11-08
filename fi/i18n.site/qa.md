# Faq

## Poistettu Vahingossa `.i18n/v` , Jolloin Paketin `npm` Julkaisu Epäonnistui

Paketin `npm` julkaisema historiallinen versio tallennetaan `.i18n/v/ol/v.hash` :aan.

Jos poistat vahingossa `.i18n/v/ol` pakettia `npm` ei vapauteta.

Etsi tällä hetkellä ensin projektisi viimeisimmän julkaisuversion versionumero [npmjs.com](//npmjs.com) esimerkiksi `0.1.9` .

Katso sitten alla olevaa kohtaa `bash` luodaksesi tiedoston.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Huomaa, että korjaus tällä tavalla menettää tiedostohistorian, jolloin seuraavan julkaisun asteittainen päivittäminen on mahdotonta, ja kaikki sisältö pakataan uudelleen ja ladataan kerran.