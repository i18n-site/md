# I18N.SITE · Bahasa Tanpa Batas<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, generator situs statis multi-bahasa, dapat secara otomatis menerjemahkan Markdown ke [lebih dari seratus bahasa berbeda](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Beberapa orang mungkin ingin bertanya, karena browser memiliki fungsi terjemahan bawaan, apakah situs web tidak perlu diinternasionalkan?

Saya ingin mengatakan bahwa **hanya dengan menginternasionalkan seluruh situs kita dapat mendukung pencarian teks lengkap dalam situs multi-bahasa dan optimasi mesin pencari** .

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
