# Daftar Gaya

[Klik di sini untuk menelusuri file sumber halaman ini](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) guna melihat cara menulis `MarkDown` dengan gaya berikut.

## Garis & &

Ini adalah __ Garis bawah __ ,~~ dicoret~~ dan teks presentasi **tebal** .

Tertulis sebagai berikut:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Parser `MarkDown` dari alat pembuatan situs web `i18n.site` telah mengoptimalkan sintaksis garis bawah, coretan, dan tebal. Ini dapat berlaku tanpa spasi sebelum dan sesudah tanda, sehingga memudahkan penulisan dokumen dalam bahasa seperti China, Jepang, dan Korea. yang tidak menggunakan spasi sebagai pemisah.

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
> your content
```

### Catatan `> [!NOTE]`

> [!NOTE]
> Jika Anda mengirimi saya pesan dan saya langsung membalasnya, apa maksudnya?
> Ini menunjukkan bahwa saya sangat suka bermain dengan ponsel.


### Peringatan `> [!WARN]`

> [!WARN]
> Saat melakukan petualangan liar, penting untuk tetap aman.
> Pekan lalu, sekelompok pendaki menghadapi badai di tengah perjalanan mendaki gunung dan harus mengungsi karena tidak bisa mengecek ramalan cuaca.
> Ingat, aktivitas apa pun di luar ruangan memerlukan persiapan yang memadai dan perhatian terhadap cuaca.

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
    + Pertemuan pertukaran kewirausahaan
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

## kode

### Kode Sebaris

Dalam dunia bahasa pemrograman yang luas, `Rust` , `Python` , `JavaScript` dan `Go` masing-masing menempati posisi yang unik.

### Beberapa Baris Kode

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```