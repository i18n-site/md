# Daftar Gaya

[Klik di sini untuk menelusuri file sumber halaman ini](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) guna melihat cara menulis `MarkDown` dengan gaya berikut.

## Blok Terlipat

|+| Apa itu Penurunan Harga?

    MarkDown adalah bahasa markup ringan yang memungkinkan pengguna membuat dokumen berformat dalam format teks biasa yang mudah dibaca dan ditulis.

    Biasa digunakan untuk menulis dokumentasi, artikel blog, e-book, postingan forum, dll.

    Ini memiliki keuntungan sebagai berikut:

    1. Mudah dipelajari
    1. Sangat mudah dibaca
    1. Kontrol versi ramah

       Karena `MarkDown` dokumen dalam format teks biasa, pemrogram dapat dengan mudah memasukkannya ke dalam sistem kontrol versi (seperti `git` ).

       Hal ini membuat pelacakan perubahan dan kolaborasi menjadi lebih sederhana, terutama dalam pengembangan tim.

|-| Apa itu I18N?

    "I18N" adalah singkatan dari "Internasionalisasi".

    Karena kata "Internasionalisasi" memiliki 18 huruf antara "I" dan "N", maka "I18N" digunakan untuk menyederhanakan representasi.

    Dalam istilah awam, ini berarti mendukung banyak bahasa.


Blok lipat adalah sintaks yang diperluas dari `i18n.site` hingga `MarkDown` , ditulis sebagai berikut :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

dengan `|+| `或`|-| Baris yang dimulai dengan ` akan menghasilkan blok lipat, dan isi blok lipat adalah baris-baris berikutnya dengan tingkat lekukan yang sama (paragraf dipisahkan oleh garis kosong).

Lulus`|-| `标记的折叠块默认展开，`|+| `Blok yang diciutkan yang diberi tag diciutkan secara default.

## Garis & &

Ini adalah __ Garis bawah __ ,~~ dicoret~~ dan teks presentasi **tebal** .

Tertulis sebagai berikut:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Parser `MarkDown` dari alat pembuat situs web `i18n.site` telah mengoptimalkan sintaksis garis bawah, coretan, dan huruf tebal. Ini dapat berlaku tanpa spasi sebelum dan sesudah tanda, sehingga memudahkan penulisan dokumen dalam bahasa seperti China, Jepang, dan Korea. jangan gunakan spasi sebagai pemisah.

Bacaan lebih lanjut : [Mengapa sintaks Markdown Nuggets ( `**……**` ) terkadang tidak berpengaruh?](//juejin.cn/post/7064565848421171213)

## Mengutip

### Kutipan Satu Baris

> Sudah menjadi sifat saya bahwa bakat saya akan berguna, dan saya akan kembali setelah semua uang saya habis.
<p style="text-align:right">─ Li Bai</p>

### Kutipan Beberapa Baris

> Keunggulan unik lainnya dari fiksi ilmiah adalah cakupannya yang sangat luas.
> Sebuah “Perang dan Damai”, dengan sejuta kata, hanya menggambarkan sejarah suatu wilayah selama beberapa dekade;
> Dan novel fiksi ilmiah seperti "The Final Answer" karya Asimov dengan jelas menggambarkan miliaran tahun sejarah seluruh alam semesta, termasuk manusia, hanya dalam beberapa ribu kata.
> Inklusivitas dan keberanian seperti itu tidak mungkin dicapai dalam sastra tradisional.
<p style="text-align:right">── Liu Cixin</p>

### Kiat `> [!TIP]`

> [!TIP]
> Ingatlah untuk memeriksa keabsahan paspor dan visa Anda. Dokumen yang sudah habis masa berlakunya tidak dapat masuk atau keluar negara.

Hal ini ditulis sebagai berikut

```
> [!TIP]
> YOUR CONTENT
```

### Catatan `> [!NOTE]`

> [!NOTE]
> Jika Anda mengirimi saya pesan dan saya langsung membalasnya, apa maksudnya?
> Ini menunjukkan bahwa saya sangat suka bermain dengan ponsel.


### Peringatan `> [!WARN]`

> [!WARN]
> Saat melakukan petualangan liar, penting untuk tetap aman. Berikut beberapa tip keamanan utama:
>
> - **Periksa ramalan cuaca** : Minggu lalu, sekelompok pendaki menghadapi badai di tengah gunung karena mereka tidak memeriksa ramalan cuaca dan harus segera mengungsi.
> - **Membawa perlengkapan yang diperlukan** : Pastikan Anda membawa makanan, air, dan perlengkapan pertolongan pertama yang cukup.
> - **Pahami medannya** : Biasakan diri Anda dengan medan dan rute area petualangan terlebih dahulu agar tidak tersesat.
> - **Tetap Terhubung** : Tetap terhubung dengan dunia luar dan pastikan semua orang dapat kembali dengan selamat.
>
> Ingat, keselamatan selalu diutamakan!

## Daftar Tugas

- [x] Rancang prototipe produk dan daftar fitur
- [ ] Menentukan tumpukan teknologi dan alat pengembangan
- [ ] Mengembangkan garis waktu dan pencapaian pengembangan produk

## Daftar

### Daftar Pesanan

1. berlari
   1. Tiga kali seminggu, 5 kilometer setiap kali
   1. Jalankan setengah maraton
1. pelatihan olahraga
   1. Dua kali seminggu, 1 jam setiap kali
   1. Fokus pada otot inti

### Daftar Tidak Berurutan

* acara sosial
  - Berpartisipasi dalam pertemuan pertukaran industri
    + Sesi berbagi teknologi
    + Pertemuan Pertukaran Kewirausahaan
  - Atur pertemuan teman-teman
    + BBQ luar ruangan
    + malam film

## Lembaran

| pemikir       | Kontribusi utama                           |
|--------------|------------------------------------|
| Konfusius         | Pendiri Konfusianisme |
| Socrates     | bapak filsafat barat  |
| Nietzsche         | Filsafat Superman, mengkritik moralitas dan agama tradisional       |
| marx       | komunisme |

### Optimalisasi Tampilan Tabel Besar

Untuk tabel yang relatif besar, metode berikut dapat digunakan untuk mengoptimalkan efek tampilan:

1. Gunakan font yang lebih kecil

   Misalnya, bungkus tabel dengan `<div style="font-size:14px">` dan `</div>` .

   Perhatikan bahwa tag `div` harus menempati barisnya sendiri, dan meninggalkan baris kosong sebelum dan sesudahnya.
1. Untuk teks yang lebih panjang dalam sel, masukkan `<br>` untuk membungkus baris
1. Jika kolom diperas terlalu pendek, Anda dapat menambahkan `<div style="width:100px">xxx</div>` ke header untuk memperluas lebarnya, dan Anda juga dapat menambahkan [`<wbr>` ke header](//developer.mozilla.org/docs/Web/HTML/Element/wbr) untuk mengontrol posisi jeda baris.

Contoh demonstrasinya adalah sebagai berikut:

<div style="font-size:14px">

| bangsa       | <div style="width:70px;margin:auto">nama pemikir</div> | Era | Kontribusi ideologis utama                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Cina       | Konfusius                                           | 551-479 SM   | Pendiri Konfusianisme mengusulkan konsep inti seperti "kebajikan" dan "kesopanan" serta menekankan penanaman moral dan tatanan sosial. |
| Yunani kuno     | Socrates                                       | 469-399 SM   | Menggali kebenaran melalui dialog dan dialektika mengedepankan “kenali diri sendiri” dan menekankan pemikiran rasional         |
| Perancis       | Voltaire                                         | 1694-1778       | Tokoh-tokoh Pencerahan menganjurkan rasionalitas, kebebasan dan kesetaraan, serta mengkritik takhayul agama dan pemerintahan otoriter.   |
| Jerman       | Kant                                           | 1724-1804       | Mengedepankan “Kritik terhadap Nalar Murni”<br> Mengeksplorasi dasar-dasar moralitas, kebebasan, dan pengetahuan, dengan menekankan alasan praktis     |

</div>

Pseudocode untuk contoh di atas adalah sebagai berikut:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kode

### Kode Sebaris

Dalam dunia bahasa pemrograman yang luas, `Rust` , `Python` , `JavaScript` dan `Go` masing-masing menempati posisi yang unik.

### Beberapa Baris Kode

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Jeda Baris Dalam Paragraf

Jeda baris dalam paragraf dapat dicapai tanpa menambahkan baris kosong di antara baris.
Jarak antar baris dalam paragraf lebih kecil dibandingkan dengan jarak antar paragraf.

Misalnya:

> Hiduplah sebagai orang hebat,
> Kematian juga merupakan pahlawan hantu.
> aku masih merindukan Xiang Yu,
> Enggan melintasi Jiangdong.
>
> Li Qingzhao menggunakan kisah tragis Xiang Yu untuk mengisyaratkan ketidakmampuan Dinasti Song.
> Mengekspresikan ketidakpuasan terhadap istana kekaisaran karena menyerah tanpa perlawanan.