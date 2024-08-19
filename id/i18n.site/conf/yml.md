# .i18n/conf.yml

Profil untuk `i18n.site` adalah `.i18n/conf.yml` .

Kecuali untuk pengaturan [`i18`](/i18) , `ignore:` dan `i18n:` , file konfigurasinya adalah sebagai berikut:

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

Diantaranya, item konfigurasi `upload` hingga `ext:` berarti hanya `.md` yang akan diunggah saat dipublikasikan.

## Navigasi Navigasi Atas

`nav:` opsi konfigurasi, sesuai dengan menu navigasi di bagian atas halaman beranda.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Diantaranya, `i18n: home` sama dengan `home: Home` in `en/i18n.yml` .

`en/i18n.yml` akan diterjemahkan ke berbagai bahasa, seperti `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Setelah terjemahan selesai, Anda dapat mengubah nilai terjemahan `yml` , tetapi jangan menambah atau menghapus kunci terjemahan `yml` .

### `use: Toc` , Templat File Tunggal (Dengan Garis Besar)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` berarti merender menggunakan `Toc` template, yaitu merender `Markdown` template tunggal.

`TOC` adalah singkatan dari `Table of Contents` Saat template ini dirender, outline dari `Markdown` file ini akan ditampilkan di sidebar.

`url:` mewakili jalur file `Markdown` ( `/` berhubungan dengan direktori root `/README.md` , nama file ini memerlukan awalan huruf besar dan akhiran huruf kecil).

### `use: Md` , Templat File Tunggal (Tanpa Garis Besar)

Templat `Md` dan templat `Toc` sama dan keduanya digunakan untuk merender `Markdown` file tunggal. Namun template `Md` tidak menampilkan outline di sidebar.

Anda dapat mengubah `use: Toc` pada konfigurasi di atas menjadi `use: Md` , menjalankan `i18n.site` lagi di direktori `md` , lalu mengunjungi URL pratinjau pengembangan untuk mengamati perubahan di beranda.

### Pemuatan Default Tanpa Jalur Konfigurasi

Jika jalur tertentu diakses dan awalan jalurnya tidak dikonfigurasi di `nav:` , file `MarkDown` yang sesuai dengan jalur tersebut akan dimuat secara default dan dirender menggunakan templat `Md` .

Misalnya, jika `/test` diakses, dan `nav:` dikonfigurasi tanpa jalur ini, dan bahasa halaman adalah bahasa Inggris (kode `en` ), `/en/test.md` akan dimuat secara default dan dirender menggunakan templat `Md` .

Jika `/en/test.md` file ini tidak ada, halaman default `404` akan ditampilkan.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Templat Multi-File

Dalam file konfigurasi:

```
  - i18n: blog
    use: Doc
```

Menunjukkan penggunaan `Doc` untuk rendering template.

Templat `Doc` mendukung pengintegrasian beberapa `MarkDown` untuk menghasilkan kerangka dokumen untuk satu atau beberapa proyek.

#### Proyek Tunggal (Banyak File)

`blog` di atas adalah mode item tunggal `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ketika url Kosong, Defaultnya Adalah Nilai i18n

Jika `url` tidak ditulis, `url` defaultnya adalah nilai `i18n` Aturan ini juga berlaku untuk template lainnya.

Cara penulisan di atas setara dengan `url: blog` , dan file terkaitnya adalah `en/blog/TOC` .

#### Beberapa Proyek

Konfigurasi `i18n:doc` dari `.i18n/conf.yml` adalah mode multi-proyek.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Di sini, `menu: NB demo1,demo2` berarti menggunakan templat `NB` untuk merender menu tarik-turun.

`NB` yang merupakan singkatan dari `Name Breif` berarti menu drop-down dapat menampilkan nama dan slogan proyek.

`NB` diikuti oleh parameter `demo1,demo2` yang diteruskan ke sana.
Catatan : ** Tidak boleh ada spasi ** sebelum dan sesudah koma `,` di `demo1,demo2` .

File indeks direktori yang sesuai untuk parameter di atas adalah:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indeks Daftar Isi TOC

`i18n.site` akan menjalankan `js` plug-in `.i18n/hook/after.tran/TOC.js` di gudang demo untuk membaca file indeks `doc` direktori yang sesuai dengan konfigurasi templat `TOC` untuk menghasilkan garis besar `json` direktori.

Jika Anda menggunakan `doc` template, Anda harus memiliki plugin ini.

Jika Anda menginisialisasi proyek `i18n.site` dari folder kosong, ingatlah untuk menyalin proyek demo `.i18n` ke direktori Anda.

Templat `Doc` akan merender kerangka daftar isi berdasarkan `json` yang dihasilkan.

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

`TOC` file diindentasi untuk menunjukkan hubungan hierarki kerangka dan mendukung indentasi multi-level.

##### Tingkat Induk Hanya Menulis Judul, Bukan Isinya.

Jika terdapat beberapa tingkat indentasi, tingkat induk hanya menulis judul dan bukan konten. Jika tidak, tipografi akan kacau.

##### Proyek README.md

Konten dapat ditulis pada item `README.md` , seperti `en/demo2/README.md` .

Perhatikan bahwa isi file ini tidak menampilkan garis besar daftar isi, jadi disarankan untuk membatasi panjangnya dan menulis pengantar singkat.

###### Slogan Proyek

Anda dapat melihat bahwa `Deme Two` memiliki tagline proyeknya di bawah menu drop-down dan garis besar katalog : proyek `Your Project slogan` .

![](https://p.3ti.site/1721276842.avif)

Ini sesuai dengan baris pertama `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Konten setelah titik dua pertama `:` dari judul tingkat pertama proyek `README.md` akan dianggap sebagai slogan proyek.

Pengguna dari Tiongkok, Jepang, dan Korea, harap diperhatikan bahwa Anda harus menggunakan titik dua dengan lebar setengah `:` , bukan titik dua dengan lebar penuh.

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