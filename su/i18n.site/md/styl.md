# Daptar Gaya

[Pencét di dieu pikeun ngotéktak file sumber halaman ieu](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) pikeun ningali kumaha cara nyerat `MarkDown` dina gaya ieu.

## Blok Narilep

|+| Naon MarkDown?

    MarkDown mangrupikeun basa markup anu hampang anu ngamungkinkeun para pangguna nyiptakeun dokumén anu diformat dina format téks polos anu gampang dibaca sareng ditulis.

    Biasana dianggo pikeun nyerat dokuméntasi, artikel blog, e-book, tulisan forum, jsb.

    Cai mibanda kaunggulan handap:

    1. Gampang diajar
    1. Kacida dibacana
    1. Vérsi kontrol ramah

       Kusabab `MarkDown` dokumén aya dina format téks biasa, programer tiasa gampang ngalebetkeun kana sistem kontrol versi (sapertos `git` ).

       Ieu ngajantenkeun parobihan nyukcruk sareng kolaborasi langkung saderhana, khususna dina pamekaran tim.

|-| Naon I18N?

    "I18N" nyaéta singketan tina "Internationalization".

    Kusabab kecap "Internationalization" ngagaduhan 18 hurup antara "I" sareng "N", "I18N" dianggo pikeun nyederhanakeun representasi.

    Dina istilah awam, eta hartina ngarojong sababaraha basa.


Blok lipet mangrupa sintaksis anu dipanjangkeun tina `i18n.site` nepi ka `MarkDown` , ditulis kieu :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

kalawan `|+| `或`|-| Garis anu dimimitian ku ` bakal ngahasilkeun blok tilepan, sareng eusi blok tilepan nyaéta garis-garis saterasna kalayan tingkat indentasi anu sami (paragraf dipisahkeun ku garis kosong).

Lulus`|-| `标记的折叠块默认展开，`|+| `Blok rubuh anu ditandaan rubuh sacara standar.

## Garis & &

__ __~~ neunggeul~~ jeung téks presentasi **kandel** .

Ieu ditulis kieu:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Parser `MarkDown` tina alat ngawangun situs wéb `i18n.site` parantos ngaoptimalkeun sintaksis ngagurat, strikethrough, sareng bold Éta tiasa dianggo tanpa spasi sateuacan sareng saatos tanda, sahingga langkung gampang nyerat dokumén dina basa sapertos Cina, Jepang, sareng Korea. ulah make spasi salaku separators.

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
> Nalika nuju petualangan liar, penting pikeun tetep aman. Ieu sababaraha tip kaamanan konci:
>
> - **Pariksa ramalan cuaca** : Minggu kamari, rombongan pendaki ngalaman badai di satengahing gunung sabab henteu mariksa ramalan cuaca sareng kedah ngévakuasi gancang.
> - **Mawa parabot diperlukeun** : Pastikeun anjeun mawa cukup dahareun, cai jeung suplai bantuan munggaran.
> - **Ngartos rupa bumi** : Biasakeun diri sareng rupa bumi sareng rute daérah petualangan sateuacanna pikeun ngahindarkeun kasasar.
> - **Tetep Nyambung** : Tetep nyambung ka dunya luar sareng mastikeun sadayana tiasa uih deui kalayan aman.
>
> Inget, kaamanan salawasna datang heula!

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
    + Rapat Bursa Kewirausahaan
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

### Optimasi Tampilan Tabel Badag

Pikeun tabel anu kawilang ageung, metode ieu tiasa dianggo pikeun ngaoptimalkeun pangaruh tampilan:

1. Paké font leutik

   Contona, bungkus tabel ku `<div style="font-size:14px">` jeung `</div>` .

   Catet yén tag `div` kedah ngeusian garisna nyalira, sareng ngantepkeun garis kosong sateuacan sareng saatosna.
1. Pikeun téks leuwih panjang dina sél, selapkeun `<br>` pikeun mungkus garis
1. Lamun kolom squeezed teuing pondok, Anjeun bisa nambah `<div style="width:100px">xxx</div>` lulugu pikeun dilegakeun lebar, jeung anjeun ogé tiasa nambahkeun [`<wbr>` lulugu](//developer.mozilla.org/docs/Web/HTML/Element/wbr) pikeun ngadalikeun posisi putus garis.

Hiji conto démo nyaéta kieu:

<div style="font-size:14px">

| bangsa       | <div style="width:70px;margin:auto">ngaran pamikir</div> | Jaman | Kontribusi ideologis utama                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Cina       | Konghucu                                           | 551-479 SM   | Pangadeg Konfusianisme ngusulkeun konsép inti sapertos "benevolence" sareng "propriety" sareng nekenkeun budidaya moral sareng tatanan sosial. |
| Yunani kuno     | Socrates                                       | 469-399 SM   | Ngajalajah bebeneran ngaliwatan dialog sareng dialektika ngajukeun "nyaho diri anjeun" sareng nekenkeun pamikiran rasional         |
| Perancis       | Voltaire                                         | 1694-1778       | Tokoh-tokoh Perwakilan Pencerahan nyokong rasionalitas, kabébasan jeung sarua, sarta ngritik tahayul agama jeung aturan otoriter.   |
| Jérman       | Kant                                           | 1724-1804       | Majukeun "Kritik Akal Murni"<br> Ngajalajah pondasi moral, kabébasan, sareng pangaweruh, nekenkeun alesan praktis     |

</div>

Pseudocode pikeun conto di luhur nyaéta kieu:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kodeu

### Kode Inline

Di dunya basa program anu lega, `Rust` , `Python` , `JavaScript` sareng `Go` masing-masing nempatan posisi anu unik.

### Sababaraha Baris Kode

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Garis Putus Dina Paragraf

Garis putus dina paragraf tiasa dihontal tanpa nambihan garis kosong antara garis.
Jarak antara putus baris dina paragraf leuwih leutik batan jarak antar paragraf.

salaku conto:

> Hirup salaku jalma anu hébat,
> Maot oge pahlawan hantu.
> Abdi masih sono ka Xiang Yu,
> Horéam meuntas Jiangdong.
>
> Li Qingzhao ngagunakeun carita tragis Xiang Yu pikeun nunjukkeun kateukompetenan Dinasti Song.
> Nganyatakeun rasa teu puas ka pangadilan kaisar pikeun nyerah tanpa gelut.