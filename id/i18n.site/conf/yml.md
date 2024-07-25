# .i18n/conf.yml

`i18n.site` File konfigurasinya adalah `.i18n/conf.yml` .

Kecuali untuk pengaturan `ignore:` dan `i18n:` dari [`i18`](/i18) , file konfigurasinya adalah sebagai berikut:

```yaml
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
    use: Doc
```

Diantaranya, `ext:` item konfigurasi `upload` berarti hanya `.md` yang akan diunggah saat dipublikasikan.

## Navigasi Navigasi Atas

`nav:` opsi konfigurasi, sesuai dengan menu navigasi di bagian atas beranda.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Diantaranya, `i18n: home` sesuai dengan `en/i18n.yml`中`home: Home` .

`en/i18n.yml` akan diterjemahkan ke berbagai bahasa, seperti `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Setelah terjemahan selesai, Anda dapat mengubah nilai `yml` dalam terjemahan, tetapi jangan menambah atau menghapus kunci terjemahan `yml` .

### `use: Toc` , Templat File Tunggal (Dengan Kerangka)

`nav` Mengonfigurasi :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` berarti menggunakan `Toc` rendering, yaitu merender satu `Markdown` template.

`TOC` adalah singkatan dari `Table of Contents` . Saat templat ini dirender, garis besar file `Markdown` ini akan ditampilkan di sidebar.

`url:` mewakili jalur file `Markdown` ( `/` sesuai dengan direktori root `/README.md` , nama file ini memerlukan awalan huruf besar dan akhiran huruf kecil).

### `use: Md` , Templat File Tunggal (Tanpa Kerangka)

`Md` Templat sama dengan `Toc` , keduanya digunakan untuk merender satu `Markdown` file. Namun `Md` template tidak menampilkan garis tepi di sidebar.

Anda dapat mengubah `use: Toc` pada konfigurasi di atas menjadi `use: Md` , menjalankan `i18n.site` lagi di direktori `md` , lalu mengunjungi URL pratinjau pengembangan untuk mengamati perubahan di beranda.

### Pemuatan Default Tanpa Jalur Konfigurasi

Jika awalan jalur dari jalur tertentu yang sedang diakses tidak dikonfigurasi di `nav:` `MarkDown` file yang sesuai dengan jalur tersebut akan dimuat secara default dan dirender menggunakan `Md` template.

Misalnya, jika Anda mengunjungi `/test` , dan `nav:` dikonfigurasi tanpa jalur ini, dan bahasa laman adalah bahasa Inggris (kode `en` ), templat akan dimuat `/en/test.md` dan dirender menggunakan `Md` secara default.

Jika `/en/test.md` file ini tidak ada, `404` halaman default akan ditampilkan.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Templat Multi-File

Dalam file konfigurasi:

```
  - i18n: blog
    use: Doc
```

Menunjukkan penggunaan `Doc` untuk rendering templat.

`Doc` Templat mendukung pengintegrasian beberapa `MarkDown` untuk menghasilkan kerangka dokumen untuk satu atau beberapa proyek.

#### Proyek Tunggal (Banyak File)

`blog` di atas adalah mode proyek tunggal `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ketika url Kosong, Defaultnya Adalah Nilai i18n

Jika Anda tidak menulis `url` , `url` ke nilai `i18n` .

Cara penulisan di atas sama dengan memiliki `url: blog` dan file terkaitnya adalah `en/blog/TOC` .

#### Beberapa Proyek

`.i18n/conf.yml` Konfigurasi di `i18n:doc` adalah mode multi-proyek.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Di sini, `menu: NB demo1,demo2` berarti menggunakan `NB` untuk merender menu drop-down.

`NB` , adalah singkatan dari `Name Breif` , yang menunjukkan bahwa menu drop-down dapat menampilkan nama dan slogan proyek.

`NB` diikuti oleh parameter `demo1,demo2` yang diteruskan ke sana.
Perhatikan bahwa tidak boleh ada spasi ** sebelum dan sesudah koma `,` `demo1,demo2` : **

Untuk parameter di atas, file indeks direktori yang sesuai adalah:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indeks Daftar Isi TOC

`i18n.site` Akan menjalankan `js` plugin `.i18n/hook/after.tran/TOC.js` di gudang demo untuk membaca file indeks direktori `doc` sesuai dengan konfigurasi templat `TOC` untuk menghasilkan `json` dari kerangka direktori.

Jika Anda menggunakan templat `doc` , Anda harus memiliki plugin ini.

Jika Anda menginisialisasi proyek `i18n.site` dari folder kosong, ingatlah untuk menyalin `.i18n` dalam proyek demo ke direktori Anda.

`Doc` Templat akan merender kerangka daftar isi berdasarkan `json` yang dihasilkan.

##### Penjelasan Konten Terperinci

`en/blog/TOC` Isinya sebagai berikut :

```
README.md

news/README.md
  news/begin.md
```

##### Gunakan Lekukan Untuk Menunjukkan Level

Di atas `en/blog/TOC` `README.md` pada baris pertama sama dengan `i18n.site` pada gambar di bawah, yang merupakan nama proyek.

Dua baris berikutnya seperti yang ditunjukkan pada gambar di bawah.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` sesuai dengan `News` ,
`news/begin.md` sesuai dengan `Our Product is Online !`

`TOC` File ini diindentasi untuk menunjukkan hubungan hierarki kerangka dan mendukung indentasi multi-level.

##### Tingkat Induk Hanya Menulis Judul, Bukan Isinya.

Jika terdapat beberapa tingkat indentasi, tingkat induk hanya menulis judul dan bukan konten. Jika tidak, tipografi akan kacau.

##### Proyek README.md 

`README.md` dari proyek, misalnya, Anda dapat menulis konten di `en/demo2/README.md` .

Perhatikan bahwa isi file ini tidak menampilkan garis besar daftar isi, jadi disarankan untuk membatasi panjangnya dan menulis pengantar singkat.

###### Slogan Proyek

Seperti yang Anda lihat, `Deme Two` Di bawah menu tarik-turun dan garis besar katalog nama proyek, terdapat slogan proyeknya : `Your Project slogan`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: sesuai dengan baris pertama `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Project `README.md` Konten setelah titik dua pertama `:` pada judul tingkat pertama akan dianggap sebagai slogan proyek.

Pengguna dari Tiongkok, Jepang, dan Korea, harap diperhatikan bahwa Anda harus menggunakan titik dua dengan lebar setengah `:` bukan titik dua dengan lebar penuh.

##### Bagaimana Cara Memindahkan TOC Secara Massal?

`TOC` File tersebut perlu ditempatkan di direktori bahasa sumber.

Misalnya, jika bahasa sumbernya adalah bahasa Mandarin, maka `TOC` di atas adalah `zh/blog/TOC` .

Jika bahasa sumber diubah, Anda perlu memindahkan `TOC` dalam bahasa tertentu dalam proyek ke bahasa lain secara batch.

Anda dapat merujuk ke perintah berikut:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Silakan ubah `en/` dan `zh/` pada perintah di atas ke kode bahasa Anda.


