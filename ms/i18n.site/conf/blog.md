# Templat Blog

`i18n/conf.yml` daripada `use: Blog` bermakna menggunakan templat blog untuk rendering.

Fail `markdown` catatan blog perlu mengkonfigurasi maklumat meta.

Maklumat meta mestilah pada permulaan fail, bermula dengan `---` dan berakhir dengan `---` Format maklumat konfigurasi di tengah ialah `YAML` .

Konfigurasi fail demo adalah seperti berikut:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` menunjukkan ringkasan kandungan, yang akan dipaparkan pada halaman indeks blog.

Dengan bantuan `YMAL` '|`Sintaks, anda boleh menulis ringkasan berbilang baris.

Konfigurasi pepohon direktori di sebelah kanan blog juga adalah `TOC` fail (lihat bab sebelumnya Hanya artikel yang disenaraikan dalam `TOC` akan muncul dalam indeks halaman utama blog).

Artikel yang tidak mengandungi maklumat meta tidak akan muncul di halaman utama blog, tetapi boleh muncul dalam pepohon direktori di sebelah kanan.

Jika anda perlu menyematkan artikel ke bahagian atas, sila jalankan `i18n.site` dan edit `xxx.yml` fail di bawah `.i18n/data/blog` , dan tukar cap masa kepada nombor negatif (berbilang nombor negatif akan diisih dari kecil ke besar dalam nilai mutlak).