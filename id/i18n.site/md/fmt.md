# Konvensi Penulisan MarkDown i18n.site

## Titik Jangkar

Titik jangkar `MarkDown` tradisional dihasilkan berdasarkan konten teks. Dalam kasus multi-bahasa, solusi ini tidak dapat dilakukan.

Solusi titik jangkar yang disepakati dengan `i18n.site` adalah memasukkan teks yang mirip dengan `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` untuk membuat titik jangkar posisi secara manual.

`<a rel=id href="#xxx" id="xxx"></a>` , di sini `rel=id` mendefinisikan gaya halaman titik jangkar, harap ganti `xxx` dengan singkatan bahasa Inggris jangkar Anda yang sebenarnya.

Anchor biasanya ditambahkan pada judul, seperti:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Efek tampilannya adalah sebagai berikut:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Tulis `HTML` Dalam `MarkDown`

`HTML` dapat disematkan dalam `pug` kode.

Konten dalam `<pre>` elemen tidak akan diterjemahkan.

Menggabungkan dua poin ini, Anda dapat dengan mudah menulis `HTML` dalam `MarkDown` untuk mencapai berbagai efek tampilan.

[Klik di sini untuk referensi i18n.site Daftar kode bahasa di beranda HTML tertulis](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , dan kodenya adalah sebagai berikut :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Perhatikan bahwa `<style>` juga didefinisikan dalam `<pre>` di atas.