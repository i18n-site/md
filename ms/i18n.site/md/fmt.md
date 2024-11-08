# i18n.site MarkDown Menulis Konvensyen

## Titik Sauh

`MarkDown` mata sauh tradisional dijana berdasarkan kandungan teks Dalam kes berbilang bahasa, penyelesaian ini tidak boleh dilaksanakan.

Penyelesaian titik sauh yang dipersetujui dengan `i18n.site` adalah untuk memasukkan teks yang serupa dengan `<a rel=id href="#xxx" id="xxx"></a>` dalam `MarkDown` untuk mencipta titik sauh kedudukan secara manual.

`<a rel=id href="#xxx" id="xxx"></a>` , di sini `rel=id` mentakrifkan gaya halaman titik sauh, sila gantikan `xxx` dengan singkatan bahasa Inggeris sauh sebenar anda.

Sauh biasanya ditambahkan pada tajuk, seperti:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Kesan paparan adalah seperti berikut:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Tulis `HTML` Dalam `MarkDown`

`HTML` boleh dibenamkan dalam `pug` kod.

Kandungan dalam `<pre>` elemen tidak akan diterjemahkan.

Menggabungkan dua mata ini, anda boleh menulis `HTML` dalam `MarkDown` dengan mudah untuk mencapai pelbagai kesan paparan.

[Klik di sini untuk rujukan i18n.site Senarai kod bahasa pada halaman utama HTML ditulis](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , dan kodnya adalah seperti berikut :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Ambil perhatian bahawa `<style>` juga ditakrifkan dalam `<pre>` di atas.