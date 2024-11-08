# .i18n/conf.yml

File konfigurasi untuk `i18n.site` adalah `.i18n/conf.yml` dan isinya sebagai berikut :

```yaml
i18n:
  fromTo:
    en:
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Blog
addon:
  - i18n.addon/toc
```

Diantaranya, item konfigurasi `upload` hingga `ext:` berarti hanya `.md` yang akan diunggah saat dipublikasikan.

## Navigasi Navigasi Atas

`nav:` opsi konfigurasi, sesuai dengan menu navigasi di bagian atas beranda.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Diantaranya, `i18n: home` sama dengan `home: Home` in `en/i18n.yml` (dimana `en` adalah bahasa sumber terjemahan proyek).

`en/i18n.yml` konten adalah teks yang ditampilkan di menu navigasi, yang akan diterjemahkan sesuai dengan `fromTo` pada konfigurasi, misalnya diterjemahkan ke `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Setelah terjemahan selesai, Anda dapat mengubah nilai terjemahan `yml` , tetapi jangan menambah atau menghapus kunci terjemahan `yml` .

### 0Templat Dokumen `use: Toc` Dengan Kerangka

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` berarti merender menggunakan `Toc` template, yaitu merender `Markdown` template tunggal.

`TOC` adalah singkatan dari `Table of Contents` Saat template ini dirender, outline dari `Markdown` file ini akan ditampilkan di sidebar.

`url:` mewakili jalur file `Markdown` ( `/` berhubungan dengan direktori root `/README.md` , nama file ini memerlukan awalan huruf besar dan akhiran huruf kecil).

### `use: Md` Dokumen Tunggal Tanpa Kerangka

Templat `Md` dan templat `Toc` sama dan keduanya digunakan untuk merender `Markdown` file tunggal. Namun template `Md` tidak menampilkan outline di sidebar.

Anda dapat mengubah `use: Toc` pada konfigurasi di atas menjadi `use: Md` , menjalankan `i18n.site` lagi di direktori `md` , lalu mengunjungi URL pratinjau pengembangan untuk mengamati perubahan di beranda.

### `use: Blog` Templat Blog

Template blog menampilkan daftar artikel (judul dan abstrak) berdasarkan waktu publikasi.

[→ Klik di sini untuk mempelajari tentang konfigurasi spesifik](/i18n.site/conf/blog)

### `use: Doc` Templat Dokumen File

Dalam file konfigurasi:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Menunjukkan penggunaan `Doc` untuk rendering template.

Templat `Doc` mendukung pengintegrasian beberapa `MarkDown` untuk menghasilkan kerangka dokumen untuk satu atau beberapa proyek.

#### Banyak Proyek Dan Banyak File

Konfigurasi `.i18n/conf.yml` in `i18n:doc` adalah mode rendering multi-file multi-proyek.

Di sini, `menu: NB demo1,demo2` berarti menggunakan templat `NB` untuk merender menu tarik-turun.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` yang merupakan singkatan dari `Name Breif` berarti menu drop-down dapat menampilkan nama dan slogan proyek.

`NB` diikuti oleh parameter `demo1,demo2` yang diteruskan ke sana.

Catatan : ** Tidak boleh ada spasi ** sebelum dan sesudah koma `,` di `demo1,demo2` .

File indeks direktori yang sesuai untuk parameter di atas adalah:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Proyek Tunggal Beberapa File

Jika Anda hanya memiliki satu proyek, Anda dapat mengonfigurasinya sebagai berikut.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Proyek tunggal dengan banyak file tidak mendukung konfigurasi `url` sebagai jalur root `/`
> Jika __conf.yml → nav:__ Tidak ada jalur root yang dikonfigurasi, saat mengakses beranda situs web, maka secara otomatis akan ditulis ulang ke URL pertama di bawah konfigurasi `nav:` .
> Desain ini untuk membedakan dokumen proyek, blog, dan konten lainnya dengan lebih baik melalui direktori.
> Disarankan untuk menggunakan satu file dan satu halaman sebagai halaman beranda.

> [!TIP]
> Jika `url` tidak ditulis, `url` defaultnya adalah nilai `i18n` Aturan ini juga berlaku untuk template lainnya.

#### Indeks Daftar Isi TOC

Jika template `use: Doc` diaktifkan pada konfigurasi, silakan aktifkan plug-in `i18n.addon/toc` in `.i18n/conf.yml` Konfigurasinya adalah sebagai berikut :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` akan secara otomatis menginstal dan menjalankan plug-in ini, membaca `TOC` file indeks direktori, dan menghasilkan `json` kerangka direktori.

Jika ini adalah proyek tunggal dengan banyak file, direktori root `TOC` adalah direktori yang terkait dengan `url:` dalam direktori bahasa sumber. Misalnya, jika bahasa sumber adalah bahasa Mandarin: file yang terkait dengan `url: flashduty` adalah `zh/flashduty/TOC` .

Jika ada beberapa proyek dan banyak file, tidak perlu mengkonfigurasi `url:` Direktori root `TOC` adalah direktori yang sesuai dengan nilai `i18n` .

##### Penjelasan Konten Terperinci

`en/blog/TOC` adalah sebagai berikut :

```
README.md

news/README.md
  news/begin.md
```

##### Gunakan Lekukan Untuk Menunjukkan Level

`README.md` pada baris pertama angka `en/blog/TOC` di atas sama dengan `i18n.site` pada gambar di bawah, yang merupakan nama proyek.

Dua baris berikutnya seperti yang ditunjukkan pada gambar di bawah.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` sama dengan `News` ,
`news/begin.md` sama dengan `Our Product is Online !`

`TOC` file diindentasi untuk menunjukkan hubungan hierarki kerangka, mendukung indentasi multi-level, dan komentar baris dimulai dengan `# ` .

##### Tingkat Induk Hanya Menulis Judul, Bukan Isinya.

Jika terdapat beberapa tingkat indentasi, maka tingkat induk hanya menulis judul dan bukan konten. Jika tidak, tipografi akan kacau.

##### Proyek README.md

Konten dapat ditulis pada item `README.md` , seperti `en/demo2/README.md` .

Perhatikan bahwa isi file ini tidak menampilkan garis besar daftar isi, jadi disarankan untuk membatasi panjangnya dan menulis pengantar singkat.

###### Slogan Proyek

Anda dapat melihat bahwa `Deme Two` `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Ini sesuai dengan baris pertama `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Konten setelah titik dua pertama `:` dari judul tingkat pertama proyek `README.md` akan dianggap sebagai slogan proyek.

Pengguna dari Tiongkok, Jepang, dan Korea, harap diperhatikan bahwa Anda harus menggunakan titik dua dengan lebar setengah `:` bukan titik dua dengan lebar penuh.

##### Bagaimana Cara Memindahkan TOC Secara Massal?

`TOC` file perlu ditempatkan di direktori bahasa sumber.

Misalnya, jika bahasa sumbernya adalah bahasa Mandarin, maka `TOC` di atas adalah `zh/blog/TOC` .

Jika bahasa sumber diubah, Anda perlu memindahkan `TOC` file bahasa tertentu dalam proyek ke bahasa lain secara batch.

Anda dapat merujuk ke perintah berikut:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Silakan ubah `en/` dan `zh/` pada perintah di atas ke kode bahasa Anda.

### Pemuatan Default Tanpa Jalur Konfigurasi

Untuk jalur tertentu yang sedang diakses, jika awalan jalur tidak dikonfigurasi di `nav:` , file `MarkDown` yang sesuai dengan jalur tersebut akan dimuat secara default dan dirender menggunakan templat `Md` .

Misalnya, jika `/test` diakses dan `nav:` dikonfigurasi tanpa awalan jalur ini, dan bahasa penjelajahan saat ini adalah bahasa Inggris (kode `en` ), `/en/test.md` akan dimuat secara default dan dirender menggunakan templat `Md` .

Jika `/en/test.md` file ini tidak ada, halaman default `404` akan ditampilkan.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">