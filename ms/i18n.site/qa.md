# Masalah Biasa

## Dipadamkan Secara Tidak Sengaja `.i18n/V` Menyebabkan `Npm` Pakej Gagal Diterbitkan

`.i18n/v/ol/v.hash` sejarah `npm` keluaran pakej disimpan dalam !

Jika anda secara tidak sengaja memadam `.i18n/v/ol` pakej `npm` tidak akan diterbitkan.

Pada masa ini, mula-mula cari nombor versi versi keluaran terakhir projek anda dalam [npmjs.com](//npmjs.com) `0.1.9`

Kemudian rujuk kepada `bash` Buat di bawah.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Ambil perhatian bahawa pembaikan dengan cara ini akan kehilangan sejarah fail, menjadikannya mustahil untuk mengemas kini keluaran seterusnya secara berperingkat dan semua kandungan akan dibungkus semula dan dimuat naik sekali.

