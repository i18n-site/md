# Faq

## Slučajno Izbrisano `.i18n/v` , Zbog Čega Paket `npm` Nije Uspio Biti Objavljen

Povijesna verzija izdana paketom `npm` spremljena je u `.i18n/v/ol/v.hash` .

Ako slučajno izbrišete `.i18n/v/ol` paket `npm` neće biti pušten.

U ovom trenutku prvo pronađite broj verzije zadnjeg izdanja vašeg projekta u [npmjs.com](//npmjs.com) na primjer, `0.1.9` .

Zatim pogledajte `bash` u nastavku da biste stvorili datoteku.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Imajte na umu da će se popravljanjem na ovaj način izgubiti povijest datoteka, što će onemogućiti postupno ažuriranje sljedećeg izdanja, a sav sadržaj će se jednom prepakirati i učitati.