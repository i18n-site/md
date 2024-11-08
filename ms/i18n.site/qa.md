# Soalan Lazim

## Memadamkan `.i18n/v` Secara Tidak Sengaja, Menyebabkan Pakej `npm` Gagal Diterbitkan

Versi sejarah yang dikeluarkan oleh pakej `npm` disimpan dalam `.i18n/v/ol/v.hash` .

Jika anda secara tidak sengaja memadam `.i18n/v/ol` pakej `npm` tidak akan dikeluarkan.

Pada masa ini, mula-mula cari nombor versi versi keluaran terakhir projek anda dalam [npmjs.com](//npmjs.com) contohnya, `0.1.9` .

Kemudian rujuk `bash` di bawah untuk mencipta fail.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Ambil perhatian bahawa pembaikan dengan cara ini akan kehilangan sejarah fail, menjadikannya mustahil untuk mengemas kini keluaran seterusnya secara berperingkat dan semua kandungan akan dibungkus semula dan dimuat naik sekali.