# Daptar Gaya

[Pencét di dieu pikeun ngotéktak file sumber halaman ieu](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) pikeun ningali kumaha cara nyerat `MarkDown` dina gaya ieu.

## Garis & &

__ __~~ neunggeul~~ jeung téks presentasi **kandel** .

Ieu ditulis kieu:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Parser `MarkDown` tina alat ngawangun situs wéb `i18n.site` parantos ngaoptimalkeun sintaksis ngagurat, strikethrough, sareng bold Éta tiasa dianggo tanpa spasi sateuacan sareng saatos tanda, ngajantenkeun langkung gampang nyerat dokumén dina basa sapertos Cina, Jepang, sareng Korea. nu teu make spasi salaku separators.

Bacaan anu diperpanjang : [Naha sintaksis Markdown Nuggets ( `**……**` ) kadang henteu dianggo?](//juejin.cn/post/7064565848421171213)

## Cutatan

### Cutatan Garis Tunggal

> Ieu sifat kuring nu bakat kuring bakal mangpaat, sarta kuring bakal datang deui sanggeus kabeh duit kuring geus spent.
<p style="text-align:right">─ Li Bai</p>

### Sababaraha Tanda Petik Garis

> Kauntungan unik séjén tina fiksi ilmiah nyaéta ruang lingkup anu lega pisan.
> A "Perang jeung Damai", kalawan sajuta kecap, ngan ngajelaskeun sajarah wewengkon pikeun sababaraha dekade;
> Jeung novel fiksi ilmiah kawas Asimov "The Final Answer" vividly ngajelaskeun milyaran taun sajarah sakabeh jagat raya, kaasup manusa, dina ngan sababaraha sarébu kecap.
> Inclusiveness sareng kawani sapertos kitu teu mungkin dihontal dina sastra tradisional.
<p style="text-align:right">── Liu Cixin</p>

### Tip `> [!TIP]`

> [!TIP]
> Inget pikeun pariksa validitas paspor jeung visa Anjeun dokumén kadaluwarsa teu bisa asup atawa kaluar nagara.

Ditulis kieu

```
> [!TIP]
> YOUR CONTENT
```

### Catetan `> [!NOTE]`

> [!NOTE]
> Upami anjeun ngirim pesen sareng kuring langsung ngabales, naon hartosna?
> Ieu nunjukkeun yén kuring resep pisan maén sareng telepon sélulér.


### Awas `> [!WARN]`

> [!WARN]
> Nalika nuju petualangan liar, penting pikeun tetep aman.
> Minggu kamari, sakelompok pendaki ngalaman badai di satengahing gunung sareng kedah ngévakuasi sabab gagal pariksa ramalan cuaca.
> Inget, sagala kagiatan outdoor merlukeun persiapan nyukupan sarta perhatian kana cuaca.

## Daptar Tugas

- [x] Desain prototipe produk sareng daptar fitur
- [ ] Nangtukeun tumpukan téknologi sareng alat pamekaran
- [ ] Ngamekarkeun timelines ngembangkeun produk na milestones

## Daptar

### Daptar Maréntahkeun

1. lumpat
   1. Tilu kali saminggu, 5 kilométer unggal waktos
   1. Ngajalankeun satengah maraton
1. latihan gim
   1. Dua kali saminggu, 1 jam unggal waktos
   1. Fokus kana otot inti

### Daptar Unordered

* acara sosial
  - Ilubiung dina rapat bursa industri
    + sési babagi téhnologi
    + Rapat bursa kewirausahaan
  - Atur ngumpul babaturan
    + BBQ outdoor
    + peuting pilem

## Lambaran

| pamikir       | Kontribusi utama                           |
|--------------|------------------------------------|
| Konghucu         | Pangadeg Konghucu |
| Socrates     | bapa filsafat barat  |
| Nietzsche         | Filsafat Superman, ngritik moral sareng agama tradisional       |
| marx       | komunisme |

## kodeu

### Kode Inline

Di dunya basa program anu lega, `Rust` , `Python` , `JavaScript` sareng `Go` masing-masing nempatan posisi anu unik.

### Sababaraha Baris Kode

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```