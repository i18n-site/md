# Problema Komuni

## Imħassar Aċċidentalment `.i18n/V` Li Wassal Biex Il-Pakkett `Npm` Ma Jiġix Ippubblikat

Il-verżjoni storika tar-rilaxx ta `npm` pakkett hija salvata fi `.i18n/v/ol/v.hash`

Jekk aċċidentalment tħassar `.i18n/v/ol` il-pakkett `npm` mhux se jiġi ppubblikat.

F'dan iż-żmien, l-ewwel sib in-numru tal-verżjoni tal-aħħar verżjoni tal-proġett tiegħek fi [npmjs.com](//npmjs.com) pereżempju `0.1.9`

Imbagħad irreferi għall-fajl `bash` Oħloq hawn taħt.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Innota li t-tiswija b'dan il-mod se titlef l-istorja tal-fajl, li jagħmilha impossibbli li tiġi aġġornata b'mod inkrementali r-rilaxx li jmiss, u l-kontenut kollu jiġi ppakkjat mill-ġdid u jittella 'darba.

