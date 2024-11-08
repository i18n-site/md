# Faq

## Slučajno Obrisan `.i18n/v` , Zbog Čega Paket `npm` Nije Objavljen

Istorijska verzija koju je izdao paket `npm` je sačuvana u `.i18n/v/ol/v.hash` .

Ako slučajno izbrišete `.i18n/v/ol` paket `npm` neće biti pušten.

U ovom trenutku prvo pronađite broj verzije posljednje verzije vašeg projekta u [npmjs.com](//npmjs.com) na primjer, `0.1.9` .

Zatim pogledajte `bash` ispod da kreirate datoteku.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Imajte na umu da će popravak na ovaj način izgubiti historiju datoteka, što će onemogućiti postepeno ažuriranje sljedećeg izdanja, a sav sadržaj će biti ponovo upakovan i postavljen jednom.