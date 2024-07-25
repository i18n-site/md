# .i18n/conf.yml

Fail konfigurasi ialah `.i18n/conf.yml` `i18n.site`

Kecuali untuk tetapan `ignore:` dan `i18n:` bagi [`i18`](/i18) , fail konfigurasi adalah seperti berikut:

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

Antaranya, `ext:` item konfigurasi bagi `upload` bermakna hanya `.md` akan dimuat naik semasa menerbitkan.

## Navigasi Atas nav

`nav:` pilihan konfigurasi, sepadan dengan menu navigasi di bahagian atas halaman utama.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Antaranya, `i18n: home` sepadan dengan `en/i18n.yml`中`home: Home` .

`en/i18n.yml` akan diterjemahkan ke dalam pelbagai bahasa, seperti `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Selepas terjemahan selesai, anda boleh mengubah suai nilai `yml` dalam terjemahan, tetapi jangan menambah atau memadam kunci terjemahan `yml` .

### `use: Toc` , Templat Fail Tunggal (Dengan Garis Besar)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` bermaksud menggunakan pemaparan `Toc` , iaitu menghasilkan satu templat `Markdown` .

`TOC` ialah singkatan daripada `Table of Contents` . Apabila templat ini diberikan, garis besar fail `Markdown` ini akan dipaparkan di bar sisi.

`url:` mewakili laluan fail `Markdown` ( `/` sepadan dengan direktori akar `/README.md` , nama fail ini memerlukan awalan huruf besar dan akhiran huruf kecil).

### `use: Md` , Templat Fail Tunggal (Tiada Garis Besar)

`Md` Templat adalah sama dengan `Toc` , kedua-duanya digunakan untuk menghasilkan satu fail `Markdown` . Walau bagaimanapun `Md` templat tidak menunjukkan garis besar dalam bar sisi.

Anda boleh mengubah suai `use: Toc` dalam konfigurasi di atas kepada `use: Md` , jalankan `i18n.site` dalam direktori `md` sekali lagi, dan kemudian lawati URL pratonton pembangunan untuk melihat perubahan pada halaman utama.

### Pemuatan Lalai Tanpa Laluan Konfigurasi

Jika awalan laluan laluan tertentu yang diakses tidak dikonfigurasikan dalam `nav:` `MarkDown` fail yang sepadan dengan laluan akan dimuatkan secara lalai dan diberikan menggunakan templat `Md` .

Sebagai contoh, jika anda melawati `/test` , dan `nav:` dikonfigurasikan tanpa laluan ini, dan bahasa halaman ialah bahasa Inggeris (kod `en` ), templat akan dimuatkan `/en/test.md` dan diberikan menggunakan `Md` secara lalai.

Jika `/en/test.md` fail ini tidak wujud, `404` halaman lalai akan dipaparkan.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Templat Berbilang Fail

Dalam fail konfigurasi:

```
  - i18n: blog
    use: Doc
```

Menunjukkan menggunakan `Doc` untuk pemaparan templat.

Templat `Doc` menyokong penyepaduan berbilang `MarkDown` untuk menghasilkan garis besar dokumen untuk projek tunggal atau berbilang.

#### Projek Tunggal (Berbilang Fail)

`blog` di atas ialah mod projek tunggal `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Apabila url Kosong, Ia Lalai Kepada Nilai i18n

Jika anda tidak menulis `url` , `url` kepada nilai `i18n` .

Kaedah penulisan di atas adalah bersamaan dengan mempunyai `url: blog` dan fail yang sepadan ialah `en/blog/TOC` .

#### Pelbagai Projek

`.i18n/conf.yml` Konfigurasi dalam `i18n:doc` ialah mod berbilang projek.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Di sini, `menu: NB demo1,demo2` bermaksud menggunakan `NB` untuk memaparkan menu lungsur.

`NB` , ialah singkatan `Name Breif` , menunjukkan bahawa menu lungsur boleh memaparkan nama dan slogan projek.

`NB` diikuti oleh parameter `demo1,demo2` yang dihantar kepadanya.
Ambil `demo1,demo2` bahawa tiada ruang ** sebelum dan selepas koma `,` dalam : **

Untuk parameter di atas, fail indeks direktori yang sepadan ialah:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indeks Kandungan TOC

`i18n.site` Akan melaksanakan `js` plugin `.i18n/hook/after.tran/TOC.js` dalam gudang demo untuk membaca fail indeks direktori `doc` sepadan dengan konfigurasi templat `TOC` untuk menjana `json` garis besar direktori.

Jika anda menggunakan templat `doc` , anda mesti mempunyai pemalam ini.

Jika anda memulakan projek `i18n.site` daripada folder kosong, ingat untuk menyalin `.i18n` dalam projek demo ke direktori anda.

`Doc` akan memaparkan garis besar jadual kandungan berdasarkan `json` yang dihasilkan.

##### Penerangan Kandungan Terperinci

Kandungannya adalah seperti : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Gunakan Lekukan Untuk Menunjukkan Tahap

Di atas `en/blog/TOC` `README.md` dalam baris pertama sepadan dengan `i18n.site` dalam gambar di bawah, iaitu nama projek.

Dua baris seterusnya adalah seperti yang ditunjukkan dalam tangkapan skrin di bawah.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` sepadan dengan `News` ,
`news/begin.md` sepadan dengan `Our Product is Online !`

`TOC` Fail diinden untuk menunjukkan hubungan hierarki garis besar dan menyokong lekukan berbilang peringkat.

##### Peringkat Ibu Bapa Hanya Menulis Tajuk, Bukan Kandungan.

Apabila terdapat berbilang tahap lekukan, tahap induk hanya menulis tajuk dan bukan kandungan. Jika tidak, tipografi akan menjadi kucar-kacir.

##### Projek README.md 

`README.md` daripada projek itu, sebagai contoh, anda boleh menulis kandungan dalam `en/demo2/README.md` .

Ambil perhatian bahawa kandungan fail ini tidak menunjukkan garis besar jadual kandungan, jadi adalah disyorkan untuk mengehadkan panjang dan menulis pengenalan ringkas.

###### Slogan Projek

Seperti yang anda lihat, `Deme Two` Di bawah menu lungsur turun dan nama projek rangka katalog, terdapat slogan projeknya : `Your Project slogan`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: sepadan dengan baris pertama `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projek `README.md` Kandungan selepas `:` bertindih pertama dalam tajuk peringkat pertama akan dianggap sebagai slogan projek.

Pengguna dari China, Jepun dan Korea, sila ambil perhatian bahawa anda mesti menggunakan kolon separuh lebar dan bukannya kolon lebar penuh `:`

##### Bagaimana Untuk Memindahkan TOC Secara Pukal?

`TOC` Fail perlu diletakkan dalam direktori bahasa sumber.

Sebagai contoh, jika bahasa sumber adalah `zh/blog/TOC` Cina, maka `TOC`

Jika bahasa sumber diubah suai, anda perlu memindahkan `TOC` secara berkumpulan dalam bahasa tertentu dalam projek ke bahasa lain.

Anda boleh merujuk kepada arahan berikut:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Sila ubah suai `en/` dan `zh/` dalam arahan di atas kepada kod bahasa anda.


