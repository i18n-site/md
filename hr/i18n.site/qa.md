# Čest Problem

## Slučajno Izbrisano `.i18n/V` Što Je Uzrokovalo Neuspjeh Objave Paketa `Npm`

Povijesna verzija izdanja `npm` paketa je spremljena u `.i18n/v/ol/v.hash`

Ako slučajno obrišete `.i18n/v/ol` paket `npm` neće biti objavljen.

U ovom trenutku, na primjer `0.1.9` pronađite broj verzije zadnjeg izdanja vašeg projekta [npmjs.com](//npmjs.com)

Zatim pogledajte donju datoteku `bash` Create.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Imajte na umu da će se popravljanjem na ovaj način izgubiti povijest datoteka, što će onemogućiti postupno ažuriranje sljedećeg izdanja, a sav sadržaj će se jednom prepakirati i učitati.

