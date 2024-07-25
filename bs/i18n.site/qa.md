# Zajednički Problem

## Slučajno Izbrisan, Zbog Čega Paket `Npm` Nije Objavljen `.i18n/V`

Istorijska verzija `npm` paketa je sačuvana u `.i18n/v/ol/v.hash`

Ako slučajno izbrišete `.i18n/v/ol` `npm` paket neće biti objavljen.

U ovom trenutku prvo pronađite broj verzije posljednje verzije vašeg projekta u [npmjs.com](//npmjs.com) `0.1.9`

Zatim pogledajte datoteku `bash`

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Imajte na umu da će popravak na ovaj način izgubiti historiju datoteka, što će onemogućiti postepeno ažuriranje sljedećeg izdanja, a sav sadržaj će biti ponovo upakovan i postavljen jednom.

