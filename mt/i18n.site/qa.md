# Faq

## Imħassar `.i18n/v` Aċċidentalment, Li Wassal Biex Il-Pakkett `npm` Jonqos Milli Jiġi Ppubblikat

Il-verżjoni storika rilaxxata mill-pakkett `npm` hija salvata `.i18n/v/ol/v.hash` .

Jekk aċċidentalment tħassar `.i18n/v/ol` il-pakkett `npm` mhux se jiġi rilaxxat.

F'dan iż-żmien, l-ewwel sib in-numru tal-verżjoni tal-aħħar verżjoni tal-ħruġ tal-proġett tiegħek f' [npmjs.com](//npmjs.com) pereżempju, `0.1.9` .

Imbagħad irreferi għal `bash` hawn taħt biex toħloq il-fajl.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Innota li t-tiswija b'dan il-mod se titlef l-istorja tal-fajl, li jagħmilha impossibbli li tiġi aġġornata b'mod inkrementali r-rilaxx li jmiss, u l-kontenut kollu jiġi ppakkjat mill-ġdid u jittella 'darba.