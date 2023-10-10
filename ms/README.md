<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, penjana tapak statik berbilang bahasa, secara automatik boleh menterjemah Markdown ke [lebih daripada seratus bahasa yang berbeza](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Sesetengah orang mungkin ingin bertanya, sekarang pelayar mempunyai fungsi terjemahan terbina dalam, adakah tidak perlu untuk mengantarabangsakan tapak web?

Saya ingin mengatakan bahawa **hanya dengan mengantarabangsakan keseluruhan tapak kami boleh menyokong carian teks penuh dalam tapak berbilang bahasa dan pengoptimuman enjin carian** .

## Urutan

"Bible·Genesis":

> Pada zaman dahulu, apabila bahasa adalah satu, manusia dilahirkan bangga. Mereka berusaha untuk membina sebuah bangunan yang menjulang tinggi, sebuah menara yang mencecah langit.
>
> Namun, Ilahi, yang tidak senang dengan kesombongan mereka, menyebabkan manusia berselerak di seluruh bumi, menjadikan lidah mereka tidak dapat difahami antara satu sama lain.
>
> Sejak itu, manusia bergelut untuk berkomunikasi, konflik timbul tanpa henti, dan dunia tidak melihat lagi menara yang mencapai langit.

Novel fiksyen sains &quot;Three-Body&quot; (sebutan bahasa Cina: `3Ti` ) menyifatkan tamadun asing yang berkomunikasi melalui gelombang elektromagnet, tidak mempunyai halangan bahasa, dan makmur dari segi teknologi.

Saya berharap dengan bantuan alat ini, penduduk bumi akan menjadi seperti orang tiga badan, komunikasi tidak akan disekat oleh bahasa, dan semua manusia akan bersatu kembali.

## Tutorial

## Pengenalan Fungsi

### Simpan Format Markdown

### Ubah Suai Terjemahan

Selepas mengubah suai terjemahan, anda perlu menjalankan semula `./i18n.sh` untuk mengemas kini cache.

### Nota Terjemahan

Komen terjemahan perlu menunjukkan bahasa selepas \```, seperti ` ```rust` .

Pada masa ini menyokong terjemahan ulasan untuk rust, c, cpp, java, js, coffee, python dan bash.

Edit [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) untuk menambah sokongan terjemahan untuk ulasan dalam lebih banyak bahasa.

### Konfigurasikan Proksi

Menetapkan pembolehubah persekitaran berikut membolehkan panggilan API Terjemahan Google melalui proksi.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Pembenaman Pembolehubah

```
test: 测试变量<br 0>嵌入
```

### Kosongkan Cache

```bash
rm -rf .i18n/.cache
```
