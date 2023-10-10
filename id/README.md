<h1 style="justify-content:space-between">3Ti.Site · Berpikir Tanpa Batas<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, generator situs statis multi-bahasa, dapat secara otomatis menerjemahkan Markdown ke [lebih dari seratus bahasa berbeda](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Beberapa orang mungkin ingin bertanya, karena browser memiliki fungsi terjemahan bawaan, apakah situs web tidak perlu diinternasionalkan?

Saya ingin mengatakan bahwa **hanya dengan menginternasionalkan seluruh situs kita dapat mendukung pencarian teks lengkap dalam situs multi-bahasa dan optimasi mesin pencari** .

## Urutan

"Alkitab·Kejadian":

> Pada zaman dahulu kala, ketika bahasa masih bersatu, umat manusia dilahirkan dengan rasa bangga. Mereka berusaha membangun sebuah bangunan yang menjulang tinggi, sebuah menara yang menyentuh langit.
>
> Namun, Tuhan, yang tidak senang dengan kesombongan mereka, menyebabkan manusia berpencar ke seluruh bumi, membuat lidah mereka tidak dapat dimengerti satu sama lain.
>
> Sejak saat itu, umat manusia kesulitan berkomunikasi, konflik muncul tanpa henti, dan dunia tidak lagi melihat menara yang mencapai langit.

Novel fiksi ilmiah &quot;Three-Body&quot; (pengucapan China: `3Ti` ) mengarang fiksi peradaban alien yang berkomunikasi melalui gelombang elektromagnetik, tidak memiliki kendala bahasa, dan makmur secara teknologi.

Saya berharap dengan bantuan alat ini, masyarakat bumi akan menjadi seperti manusia yang beranggotakan tiga orang, komunikasi tidak dibatasi oleh bahasa, dan seluruh umat manusia dapat bersatu kembali.

## Tutorial

## Pengenalan Fungsi

### Pertahankan Format Penurunan Harga

### Ubah Terjemahan

Setelah memodifikasi terjemahan, Anda perlu menjalankan kembali `./i18n.sh` untuk memperbarui cache.

### Catatan Terjemahan

Komentar terjemahan perlu menunjukkan bahasa setelah \```, seperti ` ```rust` .

Saat ini mendukung terjemahan komentar untuk karat, c, cpp, java, js, kopi, python, dan bash.

Edit [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) untuk menambahkan dukungan terjemahan untuk komentar dalam lebih banyak bahasa.

### Konfigurasikan Proksi

Menyetel variabel lingkungan berikut memungkinkan panggilan Google Translate API melalui proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Penyematan Variabel

```
test: 测试变量<br 0>嵌入
```

### Mengosongkan Cache

```bash
rm -rf .i18n/.cache
```
