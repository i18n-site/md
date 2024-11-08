# Ohiko Galderak

## `.i18n/v` Ustekabean Ezabatu Da, Eta `npm` Paketea Ez Da Argitaratzea Eraginez

`npm` paketeak kaleratutako bertsio historikoa `.i18n/v/ol/v.hash` -n gordetzen da.

`.i18n/v/ol` `npm` paketea ez da kaleratuko.

Une honetan, lehenik eta behin aurkitu zure proiektuaren azken bertsioaren bertsio-zenbakia [npmjs.com](//npmjs.com) adibidez, `0.1.9` .

Ondoren, begiratu beheko `bash` fitxategia sortzeko.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Kontuan izan modu honetan konpontzeak fitxategien historia galduko duela, hurrengo bertsioa pixkanaka eguneratzea ezinezkoa izango dela, eta eduki guztia berriro bildu eta behin kargatuko dela.