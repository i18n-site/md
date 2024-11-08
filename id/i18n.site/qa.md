# Pertanyaan Umum

## Tidak Sengaja Menghapus `.i18n/v` , Menyebabkan Paket `npm` Gagal Dipublikasikan

Versi historis yang dirilis oleh paket `npm` disimpan di `.i18n/v/ol/v.hash` .

Jika Anda tidak sengaja menghapus `.i18n/v/ol` paket `npm` tidak akan dirilis.

Saat ini, temukan terlebih dahulu nomor versi versi rilis terakhir proyek Anda di [npmjs.com](//npmjs.com) misalnya `0.1.9` .

Kemudian lihat `bash` di bawah untuk membuat file.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Perhatikan bahwa perbaikan dengan cara ini akan menghilangkan riwayat file, sehingga tidak mungkin memperbarui rilis berikutnya secara bertahap, dan semua konten akan dikemas ulang dan diunggah satu kali.