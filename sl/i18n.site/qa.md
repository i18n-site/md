# Pogosta Težava

## Nenamerno Izbrisano `.i18n/V` Zaradi Česar Paket `Npm` Ni Bil Objavljen

`.i18n/v/ol/v.hash` Zgodovinska različica izdaje `npm` paketa je shranjena v !

Če pomotoma izbrišete `.i18n/v/ol` paket `npm` ne bo objavljen.

V tem času najprej poiščite številko različice zadnje izdaje vašega projekta v [npmjs.com](//npmjs.com) `0.1.9`

Nato si oglejte spodnjo datoteko `bash` Create.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Upoštevajte, da bo popravilo na ta način izgubilo zgodovino datotek, zaradi česar bo nemogoče postopoma posodobiti naslednjo izdajo, vsa vsebina pa bo ponovno zapakirana in naložena enkrat.

