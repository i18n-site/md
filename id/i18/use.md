# Instal Dan Gunakan

## windows Pertama-Tama Menginstal git bash

windows Sistem, silakan [klik di sini untuk mengunduh dan menginstal terlebih dahulu `git bash`](https://git-scm.com/download/win)

Jalankan operasi selanjutnya di `git bash`

## Install

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurasikan Token Terjemahan

Kunjungi [i18n.site/token](//i18n.site/token) Klik untuk menyalin token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Buat `~/.config/i18n.site.yml` tempelkan konten yang disalin ke dalamnya, kontennya sebagai berikut:

```
token: YOUR_API_TOKEN
```

Selain itu, Anda perlu [i18n.site/payBill](//i18n.site/payBill) kartu kredit untuk pembayaran (tidak perlu isi ulang, website akan secara otomatis memotong biaya sesuai penggunaan, [lihat beranda untuk harga](/#price) ).

## Menggunakan

### Proyek Demo

Silakan lihat proyek [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) untuk mempelajari konfigurasi terjemahan `i18`

Pengguna di Tiongkok dapat mengkloning [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Setelah kloning, masuk ke direktori dan jalankan `i18` untuk menyelesaikan terjemahan.

### Struktur Direktori

Struktur direktori gudang template adalah sebagai berikut

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Direktori `en` berisi file demo yang diterjemahkan, yang hanya merupakan contoh dan dapat dihapus.

### Jalankan Terjemahan

Masuk ke direktori dan jalankan `i18`

### Tambahkan File Ke Repositori

Selain terjemahan, program ini juga akan menghasilkan file-file berikut, silakan tambahkan ke repositori.

```
.i18n/hash
.i18n/cache/.gitignore
```

Diantaranya : isi `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Ini berarti mengabaikan semua file di direktori `.i18n/cache/` (kecuali `.i18n/cache/.gitignore` ).

Jika perangkat lunak kontrol versi Anda tidak `git` , abaikan saja sesuai dengan konfigurasi ini.

## Berkas Konfigurasi

`.i18n/conf.yml` Ini adalah file konfigurasi alat terjemahan baris `i18`

Isinya adalah sebagai berikut:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Bahasa Sumber & Bahasa Terjemahan

Dalam file konfigurasi, bawahan `fromTo` :

`en` adalah bahasa sumber, `zh ja ko de fr` adalah bahasa target terjemahan.

Kode bahasa lihat [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Misalnya, jika Anda ingin menerjemahkan bahasa Mandarin ke bahasa Inggris, tulis ulang baris ini `zh: en`

Jika Anda ingin menerjemahkan ke semua bahasa yang didukung, biarkan kosong setelahnya `:` Misalnya

```
i18n:
  fromTo:
    en:
```

### Abaikan Berkas

Secara default, semua file yang dimulai dengan `.md` dan `.yml` di direktori bahasa sumber akan diterjemahkan.

Jika Anda ingin mengabaikan file tertentu dan tidak menerjemahkannya (seperti draf yang belum selesai), Anda dapat menggunakan konfigurasi kolom `ignore` .

`ignore` Menggunakan sintaks yang mirip dengan `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Misalnya, pada file konfigurasi di atas `_* ` berarti file yang dimulai dengan `_` tidak akan diterjemahkan.

## Aturan Penerjemahan

### Editor Terjemahan Tidak Boleh Menambah Atau Menghapus Baris

Terjemahannya dapat diedit. Ubah teks asli dan terjemahkan lagi dengan mesin, modifikasi manual pada terjemahan tidak akan ditimpa (jika paragraf teks asli ini belum diubah).

Namun perlu diketahui bahwa baris-baris terjemahan dan teks aslinya harus bersesuaian satu per satu. Artinya, tidak menambah atau menghapus baris saat menyusun terjemahan. Jika tidak, ini akan menyebabkan kebingungan dalam cache pengeditan terjemahan.

Jika terjadi kesalahan, silakan merujuk ke [FAQ untuk mendapatkan solusinya.](/i18/qa#H1)

### `YAML` Menerjemahkan

Alat baris perintah akan menemukan semua file yang diakhiri dengan `.yml` di direktori file bahasa sumber dan menerjemahkannya.

* Perhatikan bahwa akhiran nama file harus `.yml` (bukan `.yaml` ).

Alat ini hanya menerjemahkan nilai kamus dalam `.yml` , bukan kunci kamus.

Misalnya `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

akan diterjemahkan sebagai `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Terjemahan `YAML` juga dapat dimodifikasi secara manual (tetapi jangan menambah atau menghapus kunci atau baris dalam terjemahan).

Berdasarkan `YAML` Translation, Anda dapat dengan mudah membangun solusi internasional untuk berbagai bahasa pemrograman.

## Penggunaan Tingkat Lanjut

### Subdirektori Terjemahan

Selama Anda membuat `.i18n/conf.yml` (tidak perlu memulai dari template proyek demo setiap saat), `i18` akan berfungsi dengan baik.

Alat baris perintah akan menemukan konfigurasi `.i18n/conf.yml` di semua subdirektori dan menerjemahkannya.

Proyek yang menggunakan arsitektur [monorepo](//monorepo.tools) dapat membagi file bahasa menjadi subdirektori.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Direktori Instalasi Khusus

Ini akan diinstal ke `/usr/local/bin` secara default.

Jika `/usr/local/bin` tidak memiliki izin menulis maka akan diinstal ke `~/.bin` .

Tetapkan variabel lingkungan `TO` Anda dapat menentukan direktori instalasi, misalnya :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
