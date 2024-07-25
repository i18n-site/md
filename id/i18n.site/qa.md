# Masalah Umum

## Tidak Sengaja Terhapus `.i18n/V` , Menyebabkan `Npm` Paket Gagal Dipublikasikan

`.i18n/v/ol/v.hash` Versi historis `npm` rilis paket disimpan di !

Jika Anda tidak sengaja menghapus `.i18n/v/ol` `npm` paket tidak akan dipublikasikan.

Saat ini, cari dulu nomor versi versi rilis terakhir proyek Anda di [npmjs.com](//npmjs.com) misalnya `0.1.9`

Kemudian lihat `bash` Buat file di bawah ini.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Perhatikan bahwa perbaikan dengan cara ini akan menghilangkan riwayat file, sehingga tidak mungkin memperbarui rilis berikutnya secara bertahap, dan semua konten akan dikemas ulang dan diunggah satu kali.

