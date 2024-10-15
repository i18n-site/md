# Instal Dan Gunakan

## windows Pertama Instal git bash

windows Sistem, silakan [klik di sini untuk mengunduh dan menginstal `git bash` terlebih dahulu](https://git-scm.com/download/win) .

Jalankan operasi selanjutnya di `git bash` .

## Memasang

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurasikan Token Terjemahan

Kunjungi [i18n.site/token](//i18n.site/token) Klik untuk menyalin token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Buat `~/.config/i18n.site.yml` , tempel konten yang disalin ke dalamnya, kontennya sebagai berikut:

```
token: YOUR_API_TOKEN
```

[i18n.site/payBill](//i18n.site/payBill) , Anda perlu mengikat kartu kredit untuk pembayaran (tidak perlu isi ulang, website akan secara otomatis memotong biaya sesuai penggunaan, [lihat beranda untuk harga](/#price) ).

## Menggunakan

### Proyek Demo

Silakan merujuk ke proyek demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) mempelajari konfigurasi `i18` terjemahan.

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

File demo yang diterjemahkan di direktori `en` hanyalah sebuah contoh dan dapat dihapus.

### Jalankan Terjemahan

Masuk ke direktori dan jalankan `i18` untuk menerjemahkan.

Selain terjemahan, program juga akan menghasilkan folder `.i18n/data` , silakan tambahkan ke repositori.

Setelah menerjemahkan file baru `git add . ` file data baru akan dibuat di direktori ini.

## Berkas Konfigurasi

`.i18n/conf.yml` adalah file konfigurasi alat terjemahan baris perintah `i18`

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

`en` adalah bahasa sumber, `zh ja ko de fr` adalah bahasa sasaran terjemahan.

Kode bahasa lihat [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Misalnya, jika Anda ingin menerjemahkan bahasa Mandarin ke bahasa Inggris, tulis ulang baris ini `zh: en` .

Jika Anda ingin menerjemahkan ke semua bahasa yang didukung, biarkan kosong setelah `:` . Misalnya

```
i18n:
  fromTo:
    en:
```

`fromTo` yang berbeda dapat dikonfigurasi untuk subdirektori yang berbeda / Demonstrasinya ditulis sebagai berikut :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Dalam tabel konfigurasi ini, bahasa sumber untuk terjemahan direktori `blog` adalah `zh` , dan bahasa sumber untuk terjemahan direktori `blog/your_file_name.md` adalah `ja` .

### Abaikan Berkas

Secara default, semua file yang dimulai dengan `.md` dan `.yml` di direktori bahasa sumber akan diterjemahkan.

Jika Anda ingin mengabaikan file tertentu dan tidak menerjemahkannya (seperti draf yang belum selesai), Anda dapat menggunakan konfigurasi kolom `ignore` .

`ignore` menggunakan sintaks [globset](https://docs.rs/globset/latest/globset/#syntax) yang sama dengan `.gitignore` file.

Misalnya, `_* ` pada file konfigurasi di atas berarti file yang dimulai dengan `_` tidak akan diterjemahkan.

## Aturan Penerjemahan

### Editor Terjemahan Tidak Boleh Menambah Atau Menghapus Baris

Terjemahannya dapat diedit. Ubah teks asli dan terjemahkan lagi dengan mesin, modifikasi manual pada terjemahan tidak akan ditimpa (jika paragraf teks asli ini belum diubah).

Namun perlu diketahui bahwa baris-baris terjemahan dan teks aslinya harus bersesuaian satu per satu. Artinya, tidak menambah atau menghapus baris saat menyusun terjemahan. Jika tidak, ini akan menyebabkan kebingungan dalam cache pengeditan terjemahan.

Jika terjadi kesalahan, silakan merujuk ke [FAQ untuk mendapatkan solusinya.](/i18/qa#H1)

### `YAML` Terjemahan

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

Berdasarkan `YAML` terjemahan, Anda dapat dengan mudah membangun solusi internasional untuk berbagai bahasa pemrograman.

## Penggunaan Tingkat Lanjut

### Subdirektori Terjemahan

Selama `.i18n/conf.yml` dibuat (tidak perlu memulai dari templat proyek demo setiap saat), `i18` akan berfungsi dengan baik.

Alat baris perintah akan menemukan `.i18n/conf.yml` konfigurasi di semua subdirektori dan menerjemahkannya.

Proyek yang menggunakan arsitektur [monorepo](//monorepo.tools) dapat membagi file bahasa menjadi subdirektori.

![](https://p.3ti.site/1719910016.avif)

### Direktori Instalasi Khusus

Ini akan diinstal ke `/usr/local/bin` secara default.

Jika `/usr/local/bin` tidak memiliki izin menulis maka akan diinstal ke `~/.bin` .

Mengatur variabel lingkungan `TO` dapat menentukan direktori instalasi, misalnya :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```