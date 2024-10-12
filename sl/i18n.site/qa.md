# Pogosta Vprašanja

## Po Pomoti Izbrisan `.i18n/v` , Zaradi Česar Paket `npm` Ni Bil Objavljen

Zgodovinska različica, izdana s paketom `npm` je shranjena v `.i18n/v/ol/v.hash` .

Če pomotoma izbrišete `.i18n/v/ol` paket `npm` ne bo izdan.

V tem času najprej poiščite številko različice zadnje izdane različice vašega projekta v [npmjs.com](//npmjs.com) na primer `0.1.9` .

Nato glejte `bash` spodaj, da ustvarite datoteko.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Upoštevajte, da bo popravilo na ta način izgubilo zgodovino datotek, zaradi česar bo nemogoče postopoma posodobiti naslednjo izdajo, vsa vsebina pa bo ponovno zapakirana in naložena enkrat.