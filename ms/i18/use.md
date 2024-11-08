# Pasang Dan Gunakan

## windows Mula-Mula Memasang git bash

Sistem windows , sila [klik di sini untuk memuat turun dan memasang `git bash` dahulu](https://git-scm.com/download/win) .

Jalankan operasi seterusnya dalam `git bash` .

## Pasang

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurasikan Token Terjemahan

Lawati [i18n.site/token](//i18n.site/token) Klik untuk menyalin token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Cipta `~/.config/i18n.site.yml` , tampalkan kandungan yang disalin ke dalamnya, kandungannya adalah seperti berikut:

```
token: YOUR_API_TOKEN
```

Di samping itu, anda perlu mengikat kad kredit pembayaran dalam [i18n.site/payBill](//i18n.site/payBill) (Tiada caj semula diperlukan, laman web akan secara automatik memotong yuran mengikut penggunaan, [lihat halaman utama untuk harga](/#price) ).

## Guna

### Projek Demo

Sila rujuk projek demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) untuk mengetahui konfigurasi `i18` terjemahan.

Pengguna di China boleh mengklon [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Selepas pengklonan, masukkan direktori dan jalankan `i18` untuk menyelesaikan terjemahan.

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

Fail demo yang diterjemahkan dalam direktori `en` hanyalah contoh dan boleh dipadamkan.

### Jalankan Terjemahan

Masukkan direktori dan jalankan `i18` untuk menterjemah.

Sebagai tambahan kepada terjemahan, program ini juga akan menghasilkan folder `.i18n/data` , sila tambahkannya ke repositori.

Selepas menterjemah fail baharu, fail data baharu akan dijana dalam direktori ini. Ingat untuk menambah `git add . ` .

## Fail Konfigurasi

`.i18n/conf.yml` ialah fail konfigurasi alat terjemahan baris arahan `i18`

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

Dalam fail konfigurasi, subordinat `fromTo` :

`en` ialah bahasa sumber, `zh ja ko de fr` ialah bahasa sasaran terjemahan.

Kod bahasa lihat [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Contohnya, jika anda ingin menterjemah bahasa Cina ke dalam bahasa Inggeris, tulis semula baris `zh: en` ini.

Jika anda ingin menterjemah kepada semua bahasa yang disokong, sila biarkan kosong selepas `:` . contohnya

```
i18n:
  fromTo:
    en:
```

Anda boleh mengkonfigurasi `fromTo` yang berbeza untuk subdirektori yang / Satu demonstrasi ditulis seperti berikut :

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

Dalam jadual konfigurasi ini, bahasa sumber terjemahan katalog `blog` ialah `zh` , dan bahasa sumber terjemahan katalog `blog/your_file_name.md` ialah `ja` .

### Imej/Pautan Berbilang Bahasa

Apabila URL dalam gambar dan pautan dalam `replace:` dan `MarkDown` (dan atribut `src` dan `href` bagi `HTML` terbenam ) dikonfigurasikan dalam `.i18n/conf.yml` dengan awalan ini, kod bahasa sumber dalam URL akan digantikan dengan kod bahasa terjemahan ( [bahasa senarai kod](/i18/LANG_CODE) ).

Sebagai contoh, konfigurasi anda adalah seperti berikut:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` ialah kamus, kuncinya ialah awalan URL yang akan diganti dan nilainya ialah peraturan penggantian.

Maksud menggantikan peraturan `ko de uk>ru zh-TW>zh >en` di atas ialah `ko de` menggunakan gambar kod bahasa mereka sendiri, `zh-TW` dan `zh` menggunakan gambar `zh` , `uk` menggunakan gambar `ru` , dan bahasa lain (seperti `ja` ) menggunakan gambar. daripada `en` secara lalai.

Sebagai contoh, fail sumber Perancis ( `fr` ) bagi `MarkDown` adalah seperti berikut :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Fail bahasa Inggeris ( `en` ) yang diterjemahkan dan dijana adalah seperti berikut :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Di sini, `/en/` dalam kod bahasa sumber digantikan dengan `/zh/` dalam bahasa sasaran.

Nota : Mesti ada `/` sebelum dan selepas kod bahasa teks yang diganti dalam URL.

> [!TIP]
> Jika `- /` dikonfigurasikan dalam `url:` , hanya laluan relatif akan dipadankan, tetapi URL yang bermula dengan `//` tidak akan dipadankan.
>
> Jika beberapa pautan nama domain ingin diganti dan ada yang tidak mahu diganti, anda boleh menggunakan awalan yang berbeza seperti `[x](//x.com/en/)` dan `[x](https://x.com/en/)` untuk membezakannya.

### Abaikan Fail

Secara lalai, semua fail bermula dengan `.md` dan `.yml` dalam direktori bahasa sumber akan diterjemahkan.

Jika anda ingin mengabaikan fail tertentu dan tidak menterjemahkannya (seperti draf yang belum selesai), anda boleh mengkonfigurasinya dengan medan `ignore` .

`ignore` menggunakan sintaks yang [globset](https://docs.rs/globset/latest/globset/#syntax) seperti `.gitignore` fail.

Sebagai contoh, `_* ` dalam fail konfigurasi di atas bermakna fail yang bermula dengan `_` tidak akan diterjemahkan.

## Peraturan Terjemahan

### Editor Terjemahan Tidak Boleh Menambah Atau Memadam Baris

Terjemahan boleh diedit. Ubah suai teks asal dan terjemah mesin sekali lagi, pengubahsuaian manual pada terjemahan tidak akan ditimpa (jika perenggan teks asal ini tidak diubah suai).

> [!WARN]
> Mesti ada surat-menyurat satu dengan satu antara baris terjemahan dan teks asal. Iaitu, jangan menambah atau memadam baris semasa menyusun terjemahan. Jika tidak, ia akan menyebabkan kekeliruan dalam cache penyuntingan terjemahan.

Jika berlaku masalah, sila rujuk [FAQ untuk penyelesaian.](/i18/qa#H1)

### `YAML` Terjemahan

Alat baris arahan akan mencari semua fail yang berakhir dengan `.yml` dalam direktori fail bahasa sumber dan menterjemahkannya.

* Ambil perhatian bahawa akhiran nama fail mestilah `.yml` (bukan `.yaml` ).

Alat ini hanya menterjemah nilai kamus dalam `.yml` , bukan kunci kamus.

Contohnya `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

akan diterjemahkan sebagai `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Terjemahan `YAML` juga boleh diubah suai secara manual (tetapi jangan tambah atau padam kekunci atau baris dalam terjemahan).

Berdasarkan `YAML` terjemahan, anda boleh membina penyelesaian antarabangsa untuk pelbagai bahasa pengaturcaraan dengan mudah.

## Penggunaan Lanjutan

### Subdirektori Terjemahan

Selagi `.i18n/conf.yml` dicipta (tidak perlu bermula dari templat projek demo setiap kali), `i18` akan berfungsi dengan baik.

Alat baris arahan akan mencari `.i18n/conf.yml` konfigurasi dalam semua subdirektori dan menterjemahkannya.

Projek yang menggunakan seni bina [monorepo](//monorepo.tools) boleh memisahkan fail bahasa kepada subdirektori.

![](https://p.3ti.site/1719910016.avif)

### Direktori Pemasangan Tersuai

Ia akan dipasang ke `/usr/local/bin` secara lalai.

Jika `/usr/local/bin` tidak mempunyai kebenaran menulis ia akan dipasang ke `~/.bin` .

Menetapkan pembolehubah persekitaran `TO` boleh menentukan direktori pemasangan, contohnya :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```