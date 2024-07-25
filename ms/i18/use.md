# Pasang Dan Gunakan

## windows Mula-Mula Memasang git bash

windows Sistem, sila [klik di sini untuk memuat turun dan memasang dahulu `git bash`](https://git-scm.com/download/win)

Jalankan operasi seterusnya dalam `git bash`

## Pasang

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurasikan Token Terjemahan

Lawati [i18n.site/token](//i18n.site/token) Klik untuk menyalin token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Buat `~/.config/i18n.site.yml` tampalkan kandungan yang disalin ke dalamnya, kandungannya adalah seperti berikut:

```
token: YOUR_API_TOKEN
```

Di samping itu, anda perlu [i18n.site/payBill](//i18n.site/payBill) kad kredit untuk pembayaran (tiada caj semula diperlukan, laman web akan secara automatik memotong yuran mengikut penggunaan, [lihat halaman utama untuk harga](/#price) ).

## Guna

### Projek Demo

[github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) rujuk projek demo untuk mengetahui konfigurasi terjemahan `i18`

Pengguna di China boleh mengklon [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Selepas pengklonan, masukkan direktori dan jalankan `i18` untuk melengkapkan terjemahan.

### Struktur Direktori

Struktur direktori gudang templat adalah seperti berikut

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Direktori `en` mengandungi fail demo yang diterjemahkan, yang merupakan contoh dan boleh dipadamkan.

### Jalankan Terjemahan

Masukkan direktori dan jalankan `i18`

### Tambah Fail Ke Repositori

Selain terjemahan, program ini juga akan menjana fail berikut, sila tambahkannya ke repositori.

```
.i18n/hash
.i18n/cache/.gitignore
```

Antaranya : kandungan `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Ini bermakna mengabaikan semua fail dalam direktori `.i18n/cache/` (kecuali `.i18n/cache/.gitignore` ).

Jika perisian kawalan versi anda bukan `git` , sila abaikan mengikut konfigurasi ini.

## Fail Konfigurasi

`.i18n/conf.yml` Ia ialah fail konfigurasi alat terjemahan baris `i18`

Kandungannya adalah seperti berikut:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Bahasa Sumber &

Dalam fail konfigurasi, orang bawahan `fromTo`

`en` ialah bahasa sumber, `zh ja ko de fr` ialah bahasa sasaran terjemahan.

Kod bahasa lihat [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Contohnya, jika anda ingin menterjemah bahasa Cina ke dalam bahasa Inggeris, tulis semula baris ini `zh: en`

Jika anda ingin menterjemah ke semua bahasa yang disokong, sila biarkan kosong selepas `:` sebagai contoh

```
i18n:
  fromTo:
    en:
```

### Abaikan Fail

Secara lalai, semua fail bermula dengan `.md` dan `.yml` dalam direktori bahasa sumber akan diterjemahkan.

Jika anda ingin mengabaikan fail tertentu dan tidak menterjemahkannya (seperti draf yang belum selesai), anda boleh menggunakan konfigurasi medan `ignore`

`ignore` Menggunakan sintaks yang serupa dengan `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Contohnya, dalam fail konfigurasi di atas `_* ` bermakna fail yang bermula dengan `_` tidak akan diterjemahkan.

## Peraturan Terjemahan

### Editor Terjemahan Tidak Boleh Menambah Atau Memadam Baris

Terjemahan boleh diedit. Ubah suai teks asal dan terjemah mesin sekali lagi, pengubahsuaian manual pada terjemahan tidak akan ditimpa (jika perenggan teks asal ini tidak diubah suai).

Tetapi sila ambil perhatian bahawa baris terjemahan dan teks asal mesti sepadan satu dengan satu. Iaitu, jangan menambah atau memadam baris semasa menyusun terjemahan. Jika tidak, ia akan menyebabkan kekeliruan dalam cache penyuntingan terjemahan.

Jika berlaku masalah, sila rujuk [FAQ untuk penyelesaian.](/i18/qa#H1)

### `Yaml`

Alat baris arahan akan mencari semua fail yang berakhir dengan `.yml` dalam direktori fail bahasa sumber dan menterjemahkannya.

* Ambil perhatian bahawa akhiran nama fail mestilah `.yml` (bukan `.yaml` ).

Alat ini hanya menterjemah nilai kamus dalam `.yml` , bukan kunci kamus.

sebagai contoh `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

akan diterjemahkan sebagai `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Terjemahan bagi `YAML` juga boleh diubah suai secara manual (tetapi jangan tambah atau padam kekunci atau baris dalam terjemahan).

Berdasarkan Terjemahan `YAML` , anda boleh membina penyelesaian antarabangsa untuk pelbagai bahasa pengaturcaraan dengan mudah.

## Penggunaan Lanjutan

### Subdirektori Terjemahan

Selagi anda mencipta `.i18n/conf.yml` (tidak perlu bermula dari templat projek demo setiap kali), `i18` akan berfungsi dengan baik.

Alat baris arahan akan mencari konfigurasi `.i18n/conf.yml` dalam semua subdirektori dan menterjemahkannya.

Projek yang menggunakan seni bina [monorepo](//monorepo.tools) boleh memisahkan fail bahasa kepada subdirektori.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Direktori Pemasangan Tersuai

Ia akan dipasang ke `/usr/local/bin`

Jika `/usr/local/bin` tidak mempunyai kebenaran menulis ia akan dipasang ke `~/.bin` .

Tetapkan pembolehubah persekitaran `TO` Anda boleh menentukan direktori pemasangan, contohnya :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
