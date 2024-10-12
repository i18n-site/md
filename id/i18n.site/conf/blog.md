# Templat Blog

`i18n/conf.yml` dari `use: Blog` berarti menggunakan template blog untuk rendering.

File `markdown` dari postingan blog perlu mengkonfigurasi informasi meta.

Informasi meta harus berada di awal file, dimulai dengan `---` dan diakhiri dengan `---` Format informasi konfigurasi di tengah adalah `YAML` .

Konfigurasi file demo adalah sebagai berikut:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` menunjukkan ringkasan konten yang akan ditampilkan pada halaman indeks blog.

Dengan bantuan `YMAL` '|`Sintaks, Anda dapat menulis ringkasan multi-baris.

Konfigurasi pohon direktori di sisi kanan blog juga `TOC` file (lihat bab sebelumnya). Hanya artikel yang terdaftar di `TOC` yang akan muncul di indeks beranda blog.

Artikel yang tidak mengandung informasi meta tidak akan muncul di halaman beranda blog, tetapi dapat muncul di pohon direktori sebelah kanan.

Jika Anda perlu menyematkan artikel ke atas, jalankan `i18n.site` dan edit `xxx.yml` file di bawah `.i18n/data/blog` , dan ubah stempel waktu menjadi angka negatif (beberapa angka negatif akan diurutkan dari kecil ke besar dalam nilai absolut).