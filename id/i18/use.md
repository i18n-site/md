# Instal Dan Gunakan

## windows Pertama-Tama Menginstal git bash

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

Selain itu, Anda perlu mengikat kartu kredit pembayaran di [i18n.site/payBill](//i18n.site/payBill) (Tidak perlu mengisi ulang, situs web akan secara otomatis memotong biaya sesuai penggunaan, [lihat beranda untuk mengetahui harga](/#price) ).

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

Anda dapat mengkonfigurasi `fromTo` yang berbeda untuk subdirektori yang berbeda / Demonstrasinya ditulis sebagai berikut :

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

Dalam tabel konfigurasi ini, bahasa sumber terjemahan katalog `blog` adalah `zh` , dan bahasa sumber terjemahan katalog `blog/your_file_name.md` adalah `ja` .

### Gambar/Tautan Multibahasa

Ketika URL dalam gambar dan tautan di `replace:` dan `MarkDown` (dan atribut `src` dan `href` yang disematkan `HTML` ) dikonfigurasikan dalam `.i18n/conf.yml` dengan awalan ini, kode bahasa sumber di URL akan diganti dengan kode bahasa terjemahan ( [bahasa daftar kode](/i18/LANG_CODE) ).

Misalnya, konfigurasi Anda adalah sebagai berikut:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` adalah kamus, kuncinya adalah awalan URL yang akan diganti, dan nilainya adalah aturan penggantian.

Maksud dari penggantian rule `ko de uk>ru zh-TW>zh >en` diatas adalah `ko de` menggunakan gambar kode bahasanya sendiri, `zh-TW` dan `zh` menggunakan gambar `zh` , `uk` menggunakan gambar `ru` , dan bahasa lain (seperti `ja` ) menggunakan gambar dari `en` secara default.

Misalnya, file sumber Perancis ( `fr` ) `MarkDown` adalah sebagai berikut :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

File bahasa Inggris ( `en` ) yang diterjemahkan dan dihasilkan adalah sebagai berikut :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Di sini, `/en/` pada kode bahasa sumber diganti dengan `/zh/` pada bahasa target.

Catatan : Harus ada `/` sebelum dan sesudah kode bahasa teks yang diganti di URL.

> [!TIP]
> Jika `- /` dikonfigurasi dalam `url:` , hanya jalur relatif yang akan dicocokkan, namun URL yang dimulai dengan `//` tidak akan dicocokkan.
>
> Jika ada link suatu nama domain yang ingin diganti dan ada pula yang tidak ingin diganti, Anda dapat menggunakan awalan berbeda seperti `[x](//x.com/en/)` dan `[x](https://x.com/en/)` untuk membedakannya.

### Abaikan Berkas

Secara default, semua file yang dimulai dengan `.md` dan `.yml` di direktori bahasa sumber akan diterjemahkan.

Jika Anda ingin mengabaikan file tertentu dan tidak menerjemahkannya (seperti draf yang belum selesai), Anda dapat mengonfigurasinya dengan kolom `ignore` .

`ignore` menggunakan sintaks [globset](https://docs.rs/globset/latest/globset/#syntax) yang sama dengan `.gitignore` file.

Misalnya, `_* ` pada file konfigurasi di atas berarti file yang dimulai dengan `_` tidak akan diterjemahkan.

## Aturan Penerjemahan

### Editor Terjemahan Tidak Boleh Menambah Atau Menghapus Baris

Terjemahannya dapat diedit. Ubah teks asli dan terjemahkan lagi dengan mesin, modifikasi manual pada terjemahan tidak akan ditimpa (jika paragraf teks asli ini belum diubah).

> [!WARN]
> Harus ada korespondensi satu-satu antara baris terjemahan dan teks aslinya. Artinya, tidak menambah atau menghapus baris saat menyusun terjemahan. Jika tidak, ini akan menyebabkan kebingungan dalam cache pengeditan terjemahan.

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