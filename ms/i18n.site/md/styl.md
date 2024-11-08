# Senarai Gaya

[Klik di sini untuk menyemak imbas fail sumber halaman ini](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) untuk melihat cara menulis `MarkDown` dalam gaya berikut.

## Blok Berlipat

|+| Apakah MarkDown?

    MarkDown ialah bahasa penanda ringan yang membolehkan pengguna mencipta dokumen berformat dalam format teks biasa yang mudah dibaca dan ditulis.

    Biasa digunakan untuk menulis dokumentasi, artikel blog, e-buku, siaran forum, dll.

    Ia mempunyai kelebihan berikut:

    1. Mudah dipelajari
    1. Sangat boleh dibaca
    1. Mesra kawalan versi

       Memandangkan `MarkDown` dokumen adalah dalam format teks biasa, pengaturcara boleh dengan mudah memasukkannya ke dalam sistem kawalan versi (seperti `git` ).

       Ini menjadikan penjejakan perubahan dan kerjasama lebih mudah, terutamanya dalam pembangunan pasukan.

|-| Apakah I18N?

    "I18N" ialah singkatan daripada "Pengantarabangsaan".

    Memandangkan perkataan "Pengantarabangsaan" mempunyai 18 huruf antara "I" dan "N", "I18N" digunakan untuk memudahkan perwakilan.

    Dalam istilah orang awam, ini bermakna menyokong pelbagai bahasa.


Blok lipatan ialah sintaks lanjutan `i18n.site` hingga `MarkDown` , ditulis seperti berikut :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

dengan `|+| `或`|-| Garisan yang bermula dengan ` akan menghasilkan blok lipatan, dan kandungan blok lipatan adalah baris berikutnya dengan tahap lekukan yang sama (perenggan dipisahkan oleh garis kosong).

Lulus`|-| `标记的折叠块默认展开，`|+| `Blok runtuh yang ditandai diruntuhkan secara lalai.

## Gariskan & Strikethrough &

Ini __ __~~ tembus~~ dan teks pembentangan **tebal** .

Ia ditulis seperti berikut:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`MarkDown` penghurai alat pembinaan tapak web `i18n.site` telah mengoptimumkan sintaks garis bawah, coretan dan tebal Ia boleh berkuat kuasa tanpa ruang sebelum dan selepas tanda, menjadikannya lebih mudah untuk menulis dokumen dalam bahasa seperti China, Jepun dan Korea yang. jangan gunakan ruang sebagai pemisah.

Bacaan lanjutan : [Mengapakah sintaks Markdown Nuggets ( `**……**` ) kadangkala tidak berkesan?](//juejin.cn/post/7064565848421171213)

## Sebut Harga

### Petikan Satu Baris

> Ia adalah sifat saya bahawa bakat saya akan berguna, dan saya akan kembali selepas semua wang saya dibelanjakan.
<p style="text-align:right">─ Li Bai</p>

### Petikan Berbilang Baris

> Satu lagi kelebihan unik fiksyen sains ialah skopnya yang sangat luas.
> "Perang dan Keamanan", dengan sejuta perkataan, hanya menggambarkan sejarah wilayah selama beberapa dekad;
> Dan novel fiksyen sains seperti "Jawapan Akhir" Asimov dengan jelas menggambarkan berbilion tahun sejarah seluruh alam semesta, termasuk manusia, hanya dalam beberapa ribu perkataan.
> Keterangkuman dan keberanian sedemikian adalah mustahil untuk dicapai dalam kesusasteraan tradisional.
<p style="text-align:right">── Liu Cixin</p>

### Petua `> [!TIP]`

> [!TIP]
> Ingat untuk menyemak kesahihan pasport dan visa anda. Dokumen tamat tempoh tidak boleh masuk atau keluar negara.

Ia ditulis seperti berikut

```
> [!TIP]
> YOUR CONTENT
```

### Catatan `> [!NOTE]`

> [!NOTE]
> Jika anda menghantar mesej kepada saya dan saya membalas serta-merta, apakah maksudnya?
> Ini menunjukkan bahawa saya sangat suka bermain dengan telefon bimbit.


### Amaran `> [!WARN]`

> [!WARN]
> Apabila melakukan pengembaraan liar, penting untuk kekal selamat. Berikut ialah beberapa petua keselamatan utama:
>
> - **Semak ramalan cuaca** : Minggu lalu, sekumpulan pendaki telah mengalami ribut di pertengahan jalan kerana mereka tidak menyemak ramalan cuaca dan terpaksa berpindah dengan segera.
> - **Bawa peralatan yang diperlukan** : Pastikan anda membawa bekalan makanan, air dan pertolongan cemas yang mencukupi.
> - **Fahami rupa bumi** : Biasakan diri dengan rupa bumi dan laluan kawasan pengembaraan lebih awal untuk mengelak daripada tersesat.
> - **Kekal Terhubung** : Kekal berhubung dengan dunia luar dan pastikan semua orang boleh kembali dengan selamat.
>
> Ingat, keselamatan sentiasa diutamakan!

## Senarai Tugasan

- [x] Reka bentuk prototaip produk dan senarai ciri
- [ ] Tentukan timbunan teknologi dan alat pembangunan
- [ ] Membangunkan garis masa pembangunan produk dan pencapaian

## Senarai

### Senarai Pesanan

1. berlari
   1. Tiga kali seminggu, 5 kilometer setiap kali
   1. Lari separuh maraton
1. latihan gim
   1. Dua kali seminggu, 1 jam setiap kali
   1. Fokus pada otot teras

### Senarai Tidak Teratur

* acara sosial
  - Mengambil bahagian dalam mesyuarat pertukaran industri
    + Sesi perkongsian teknologi
    + Mesyuarat Pertukaran Keusahawanan
  - Mengadakan perhimpunan rakan-rakan
    + BBQ luar
    + malam wayang

## Lembaran

| pemikir       | Sumbangan utama                           |
|--------------|------------------------------------|
| Confucius         | Pengasas Konfusianisme |
| Socrates     | bapa falsafah barat  |
| Nietzsche         | Falsafah Superman, mengkritik moral dan agama tradisional       |
| marx       | komunisme |

### Pengoptimuman Paparan Jadual Besar

Untuk jadual yang agak besar, kaedah berikut boleh digunakan untuk mengoptimumkan kesan paparan:

1. Gunakan fon yang lebih kecil

   Sebagai contoh, bungkus jadual dengan `<div style="font-size:14px">` dan `</div>` .

   Ambil perhatian bahawa teg `div` mesti menduduki barisnya sendiri dan biarkan baris kosong sebelum dan selepasnya.
1. Untuk teks yang lebih panjang dalam sel, masukkan `<br>` untuk membalut baris
1. Jika lajur diperah terlalu pendek, anda boleh menambah `<div style="width:100px">xxx</div>` pada pengepala untuk mengembangkan lebar, dan anda juga boleh menambah [`<wbr>` pada pengepala](//developer.mozilla.org/docs/Web/HTML/Element/wbr) untuk mengawal kedudukan pemisah baris.

Contoh demonstrasi adalah seperti berikut:

<div style="font-size:14px">

| bangsa       | <div style="width:70px;margin:auto">nama pemikir</div> | Era | Sumbangan ideologi utama                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| China       | Confucius                                           | 551-479 SM   | Pengasas Konfusianisme mencadangkan konsep teras seperti "kebajikan" dan "kepatutan" dan menekankan penanaman moral dan ketertiban sosial. |
| yunani purba     | Socrates                                       | 469-399 SM   | Meneroka kebenaran melalui dialog dan dialektik mencadangkan "kenali diri anda" dan menekankan pemikiran rasional         |
| Perancis       | Voltaire                                         | 1694-1778       | Tokoh-tokoh perwakilan Pencerahan menganjurkan rasionalitas, kebebasan dan kesaksamaan, dan mengkritik tahyul agama dan pemerintahan autoritarian.   |
| Jerman       | Kant                                           | 1724-1804       | Kemukakan "Kritik Alasan Murni"<br> Meneroka asas moral, kebebasan dan pengetahuan, menekankan alasan praktikal     |

</div>

Pseudokod untuk contoh di atas adalah seperti berikut:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kod

### Kod Sebaris

Dalam dunia bahasa pengaturcaraan yang luas, `Rust` , `Python` , `JavaScript` dan `Go` masing-masing menduduki kedudukan yang unik.

### Berbilang Baris Kod

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Pecah Baris Dalam Perenggan

Pemisahan baris dalam perenggan boleh dicapai tanpa menambah baris kosong antara baris.
Jarak antara pemisah baris dalam perenggan adalah lebih kecil daripada jarak antara perenggan.

contohnya:

> Hidup sebagai orang yang hebat,
> Kematian juga hero hantu.
> Saya masih merindui Xiang Yu,
> Enggan menyeberangi Jiangdong.
>
> Li Qingzhao menggunakan kisah tragis Xiang Yu untuk membayangkan ketidakcekapan Dinasti Song.
> Menzahirkan rasa tidak puas hati terhadap mahkamah empayar kerana menyerah kalah tanpa melawan.