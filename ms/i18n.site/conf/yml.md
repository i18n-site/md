# .i18n/conf.yml

Fail konfigurasi untuk `i18n.site` ialah `.i18n/conf.yml` dan kandungannya adalah seperti berikut :

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

Antaranya, item konfigurasi `upload` hingga `ext:` bermakna hanya `.md` akan dimuat naik apabila diterbitkan.

## Navigasi Atas nav

`nav:` pilihan konfigurasi, sepadan dengan menu navigasi di bahagian atas halaman utama.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Antaranya, `i18n: home` sepadan dengan `home: Home` dalam `en/i18n.yml` (di mana `en` ialah bahasa sumber terjemahan projek).

`en/i18n.yml` kandungan ialah teks yang dipaparkan dalam menu navigasi, yang akan diterjemahkan mengikut `fromTo` dalam konfigurasi, contohnya, diterjemahkan kepada `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Selepas terjemahan selesai, anda boleh mengubah suai nilai terjemahan `yml` , tetapi jangan tambah atau padam kunci terjemahan `yml` .

### 0Templat Dokumen `use: Toc` Dengan Garis Besar

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` bermakna pemaparan menggunakan `Toc` templat, iaitu pemaparan `Markdown` templat tunggal.

`TOC` ialah singkatan `Table of Contents` Apabila templat ini diberikan, garis besar `Markdown` fail ini akan dipaparkan di bar sisi.

`url:` mewakili laluan fail `Markdown` ( `/` sepadan dengan direktori akar `/README.md` , nama fail ini memerlukan awalan huruf besar dan akhiran huruf kecil).

### `use: Md` Dokumen Tunggal Tanpa Garis Besar

Templat `Md` dan templat `Toc` adalah sama dan kedua-duanya digunakan untuk memaparkan `Markdown` fail tunggal. Tetapi templat `Md` tidak menunjukkan garis besar dalam bar sisi.

Anda boleh mengubah suai `use: Toc` dalam konfigurasi di atas kepada `use: Md` , jalankan `i18n.site` dalam direktori `md` sekali lagi, dan kemudian lawati URL pratonton pembangunan untuk melihat perubahan pada halaman utama.

### `use: Blog` Templat Blog

Templat blog memaparkan senarai artikel (tajuk dan abstrak) mengikut urutan masa penerbitan.

[→ Klik di sini untuk mengetahui tentang konfigurasi khusus](/i18n.site/conf/blog)

### `use: Doc` Dokumen Fail Berbilang

Dalam fail konfigurasi:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Menunjukkan menggunakan `Doc` untuk pemaparan templat.

`Doc` templat menyokong penyepaduan berbilang `MarkDown` untuk menjana garis besar dokumen untuk projek tunggal atau berbilang.

#### Berbilang Projek Dan Berbilang Fail

Konfigurasi `.i18n/conf.yml` dalam `i18n:doc` ialah mod pemaparan berbilang projek berbilang fail.

Di sini, `menu: NB demo1,demo2` , bermakna menggunakan `NB` templat untuk memaparkan menu lungsur turun.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , iaitu singkatan `Name Breif` , bermakna menu lungsur turun boleh memaparkan nama dan slogan projek.

`NB` diikuti oleh parameter `demo1,demo2` yang dihantar kepadanya.

Nota : ** Tiada ruang ** sebelum dan selepas koma `,` dalam `demo1,demo2` .

Fail indeks direktori yang sepadan untuk parameter di atas ialah:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Projek Tunggal Berbilang Fail

Jika anda hanya mempunyai satu projek, anda boleh mengkonfigurasinya seperti berikut.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Projek tunggal dengan berbilang fail tidak menyokong konfigurasi `url` sebagai laluan akar `/`
> Jika __conf.yml → nav:__ Tiada laluan akar dikonfigurasikan, apabila mengakses halaman utama tapak web, ia akan ditulis semula secara automatik ke URL pertama di bawah konfigurasi `nav:` .
> Reka bentuk ini adalah untuk membezakan dokumen projek, blog dan kandungan lain dengan lebih baik melalui direktori.
> Adalah disyorkan untuk menggunakan satu fail dan satu halaman sebagai halaman utama.

> [!TIP]
> Jika `url` tidak ditulis, `url` lalai kepada nilai `i18n` Peraturan ini juga berkuat kuasa untuk templat lain.

#### Indeks Jadual Kandungan TOC

Jika templat `use: Doc` didayakan dalam konfigurasi, sila dayakan pemalam `i18n.addon/toc` dalam `.i18n/conf.yml` Konfigurasi adalah seperti berikut :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` akan memasang dan melaksanakan pemalam ini secara automatik, membaca `TOC` fail indeks direktori dan menjana `json` garis besar direktori.

Jika ia adalah satu projek dengan berbilang fail, direktori akar `TOC` ialah direktori yang sepadan dengan `url:` dalam direktori bahasa sumber Contohnya, jika bahasa sumber adalah bahasa Cina: fail yang sepadan dengan `url: flashduty` ialah `zh/flashduty/TOC` .

Jika ia berbilang projek dan berbilang fail, tidak perlu mengkonfigurasi `url:` Direktori akar `TOC` ialah direktori yang sepadan dengan nilai `i18n` .

##### Penerangan Kandungan Terperinci

`en/blog/TOC` kandungannya adalah seperti berikut :

```
README.md

news/README.md
  news/begin.md
```

##### Gunakan Lekukan Untuk Menunjukkan Tahap

`README.md` dalam baris pertama `en/blog/TOC` di atas sepadan dengan `i18n.site` dalam gambar di bawah, iaitu nama projek.

Dua baris seterusnya adalah seperti yang ditunjukkan dalam tangkapan skrin di bawah.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` sepadan dengan `News` ,
`news/begin.md` sepadan dengan `Our Product is Online !`

`TOC` fail diinden untuk menunjukkan hubungan hierarki garis besar, menyokong lekukan berbilang peringkat dan komen baris bermula dengan `# ` .

##### Peringkat Ibu Bapa Hanya Menulis Tajuk, Bukan Kandungan.

Apabila terdapat berbilang tahap lekukan, tahap induk hanya menulis tajuk dan bukan kandungan. Jika tidak, tipografi akan menjadi kucar-kacir.

##### Projek README.md

Kandungan boleh ditulis dalam item `README.md` , seperti `en/demo2/README.md` .

Ambil perhatian bahawa kandungan fail ini tidak menunjukkan garis besar jadual kandungan, jadi adalah disyorkan untuk mengehadkan panjang dan menulis pengenalan ringkas.

###### Slogan Projek

Anda boleh melihat bahawa `Deme Two` `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Ini sepadan dengan baris pertama `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Kandungan selepas kolon pertama `:` tajuk peringkat pertama projek `README.md` akan dianggap sebagai slogan projek.

Pengguna dari China, Jepun dan Korea, sila ambil perhatian bahawa anda harus menggunakan kolon separuh lebar `:` dan bukannya kolon lebar penuh.

##### Bagaimana Untuk Memindahkan TOC Secara Pukal?

`TOC` fail perlu diletakkan dalam direktori bahasa sumber.

Sebagai contoh, jika bahasa sumber adalah bahasa Cina, maka `TOC` di atas ialah `zh/blog/TOC` .

Jika bahasa sumber diubah suai, anda perlu memindahkan `TOC` fail bahasa tertentu dalam projek ke bahasa lain secara berkelompok.

Anda boleh merujuk kepada arahan berikut:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Sila ubah suai `en/` dan `zh/` dalam arahan di atas kepada kod bahasa anda.

### Pemuatan Lalai Tanpa Laluan Konfigurasi

Untuk laluan tertentu yang diakses, jika awalan laluan tidak dikonfigurasikan dalam `nav:` , `MarkDown` fail yang sepadan dengan laluan akan dimuatkan secara lalai dan diberikan menggunakan templat `Md` .

Contohnya, jika `/test` diakses dan `nav:` dikonfigurasikan tanpa awalan laluan ini, dan bahasa penyemakan imbas semasa ialah Bahasa Inggeris (kod `en` ), `/en/test.md` akan dimuatkan secara lalai dan diberikan menggunakan templat `Md` .

Jika `/en/test.md` fail ini tidak wujud, `404` halaman lalai akan dipaparkan.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">