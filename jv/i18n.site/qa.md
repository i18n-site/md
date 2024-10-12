# Faq

## Ora Sengaja Dibusak `.i18n/v` , Nyebabake Paket `npm` Gagal Diterbitake

Versi historis sing dirilis dening paket `npm` disimpen ing `.i18n/v/ol/v.hash` .

Yen sampeyan ora sengaja mbusak `.i18n/v/ol` paket `npm` ora bakal dirilis.

Ing wektu iki, goleki nomer versi versi rilis pungkasan proyek sampeyan ing [npmjs.com](//npmjs.com) contone, `0.1.9` .

Banjur deleng `bash` ing ngisor iki kanggo nggawe file kasebut.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Elinga yen ndandani kanthi cara iki bakal kelangan riwayat file, saengga ora bisa nganyari rilis sabanjure kanthi bertahap, lan kabeh konten bakal dikemas maneh lan diunggah sapisan.