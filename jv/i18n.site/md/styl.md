# Daftar Gaya

[Klik kene kanggo nelusur file sumber kaca iki](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) kanggo ndeleng carane nulis `MarkDown` ing gaya ing ngisor iki.

## Pamblokiran Lempitan

|+| Apa MarkDown?

    MarkDown minangka basa markup entheng sing ngidini pangguna nggawe dokumen format ing format teks biasa sing gampang diwaca lan ditulis.

    Biasane digunakake kanggo nulis dokumentasi, artikel blog, e-book, kiriman forum, lsp.

    Wis kaluwihan ing ngisor iki:

    1. Gampang sinau
    1. Highly diwaca
    1. kontrol versi loropaken

       Amarga `MarkDown` dokumen ana ing format teks biasa, programer bisa gampang nggabungake menyang sistem kontrol versi (kaya `git` ).

       Iki nggawe owah-owahan nelusuri lan kolaborasi luwih gampang, utamane ing pangembangan tim.

|-| Apa I18N?

    "I18N" iku singkatan saka "Internationalization".

    Amarga tembung "Internasionalisasi" nduweni 18 aksara antarane "I" lan "N", "I18N" digunakake kanggo nyederhanakake representasi.

    Ing istilah awam, tegese ndhukung macem-macem basa.


Blok lempitan minangka sintaks lengkap saka `i18n.site` nganti `MarkDown` , ditulis kaya ing ngisor iki :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

karo `|+| `或`|-| Baris sing diwiwiti karo `bakal ngasilake blok lempitan, lan isi blok lempitan yaiku garis-garis sabanjure kanthi tingkat indentasi sing padha (paragraf dipisahake karo garis kosong).

Lulus`|-| `标记的折叠块默认展开，`|+| `Pamblokiran ambruk diwenehi tag ambruk minangka standar.

## Garis Bawahi & Strikethrough &

__ __~~ strikethrough~~ lan teks presentasi **kandel** .

Kaserat mangkene:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Parser `MarkDown` saka alat bangunan situs web `i18n.site` wis ngoptimalake sintaks garis ngisor, coretan, lan kandel Bisa ditrapake tanpa spasi sadurunge lan sawise tandha, nggawe luwih gampang kanggo nulis dokumen ing basa kayata China, Jepang, lan Korea. aja nggunakake spasi minangka separator.

Wacan sing luwih dawa : [Kenapa sintaksis Markdown Nuggets ( `**……**` ) kadhangkala ora ditrapake?](//juejin.cn/post/7064565848421171213)

## Kutipan

### Kutipan Baris Tunggal

> Kuwi sifatku yen bakatku bakal migunani, lan aku bakal bali sawise kabeh dhuwit wis dibuwang.
<p style="text-align:right">─ Li Bai</p>

### Multiple Baris Kuotasi

> Kauntungan unik liyane saka fiksi ilmiah yaiku ruang lingkup sing amba banget.
> "Perang lan Perdamaian", kanthi sejuta tembung, mung nggambarake sejarah sawijining wilayah sajrone pirang-pirang dekade;
> Lan novel fiksi ilmiah kaya Asimov "Jawaban Akhir" kanthi jelas nggambarake pirang-pirang milyar taun sejarah jagad raya, kalebu manungsa, mung sawetara ewu tembung.
> Inklusivitas lan kendel kuwi ora bisa digayuh ing sastra tradisional.
<p style="text-align:right">── Liu Cixin</p>

### Tip `> [!TIP]`

> [!TIP]
> Elinga mriksa keabsahan paspor lan visa dokumen sing kadaluwarsa ora bisa mlebu utawa metu saka negara kasebut.

Iki ditulis kaya ing ngisor iki

```
> [!TIP]
> YOUR CONTENT
```

### Komentar `> [!NOTE]`

> [!NOTE]
> Yen sampeyan ngirim pesen lan aku langsung mbales, apa tegese?
> Iki nuduhake yen aku pancene tresna muter karo ponsel.


### Warning `> [!WARN]`

> [!WARN]
> Nalika arep ngulandara alam bébas, iku penting kanggo tetep aman. Kene sawetara tips safety utama:
>
> - **Priksa prakiraan cuaca** : Minggu kepungkur, sekelompok pendaki nemoni badai ing satengahe gunung amarga ora mriksa prakiraan cuaca lan kudu ngungsi kanthi cepet.
> - **Nindakake peralatan sing dibutuhake** : Priksa manawa sampeyan nggawa panganan, banyu lan pasokan pertolongan pertama sing cukup.
> - **Ngerti terrain** : Sinau karo terrain lan rute wilayah petualangan luwih dhisik supaya ora kesasar.
> - **Tetep Nyambung** : Tetep nyambung menyang jagad njaba lan priksa manawa kabeh wong bisa bali kanthi aman.
>
> Elinga, safety tansah dadi pisanan!

## Daftar Tugas

- [x] Desain prototipe produk lan dhaptar fitur
- [ ] Nemtokake tumpukan teknologi lan alat pangembangan
- [ ] Ngembangake garis wektu lan tonggak sejarah produk

## Dhaptar

### Dhaftar Dhawuh

1. mlaku
   1. Telung kaping seminggu, 5 kilometer saben wektu
   1. Mlaku setengah maraton
1. latihan gym
   1. Kaping pindho saben minggu, 1 jam saben wektu
   1. Fokus ing otot inti

### Dhaftar Unordered

* acara sosial
  - Melu rapat-rapat exchange industri
    + Sesi sharing teknologi
    + Rapat Exchange Kewirausahaan
  - Ngatur kumpul kanca
    + BBQ njaba
    + wengi wayang

## Lembaran

| pemikir       | Kontribusi utama                           |
|--------------|------------------------------------|
| Konfusius         | Pendiri Konfusianisme |
| Socrates     | bapak filsafat barat  |
| Nietzsche         | Filsafat Superman, ngritik moralitas lan agama tradisional       |
| marx       | komunisme |

### Optimasi Tampilan Meja Gedhe

Kanggo tabel sing relatif gedhe, cara ing ngisor iki bisa digunakake kanggo ngoptimalake efek tampilan:

1. Gunakake font sing luwih cilik

   Contone, bungkus meja karo `<div style="font-size:14px">` lan `</div>` .

   Elinga yen tag `div` kudu ngenggoni baris dhewe, lan ninggalake baris kosong sadurunge lan sawise.
1. Kanggo teks sing luwih dawa ing sel, lebokake `<br>` kanggo mbungkus garis kasebut
1. Yen kolom wis squeezed cendhak banget, sampeyan bisa nambah `<div style="width:100px">xxx</div>` kanggo header kanggo nggedhekake jembaré, lan sampeyan uga bisa nambah [`<wbr>` kanggo header](//developer.mozilla.org/docs/Web/HTML/Element/wbr) kontrol posisi break line.

Tuladha demonstrasi kaya ing ngisor iki:

<div style="font-size:14px">

| bangsa       | <div style="width:70px;margin:auto">jeneng pamikir</div> | Era | Kontribusi ideologis utama                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Cina       | Konfusius                                           | 551-479 SM   | Pendiri Konfusianisme ngusulake konsep inti kayata "benevolence" lan "propriety" lan nandheske budidaya moral lan tatanan sosial. |
| Yunani kuna     | Socrates                                       | 469-399 SM   | Njelajah bebener liwat dialog lan dialektika ngusulake "ngerti dhewe" lan nandheske pamikiran rasional         |
| Prancis       | Voltaire                                         | 1694-1778       | Tokoh-tokoh perwakilan saka Pencerahan nyengkuyung rasionalitas, kebebasan lan kesetaraan, lan ngritik takhayul agama lan aturan otoriter.   |
| Jerman       | Kant                                           | 1724-1804       | Majukake "Kritik Alasan Murni"<br> Njelajah dhasar moralitas, kebebasan, lan kawruh, nandheske alasan praktis     |

</div>

Pseudocode kanggo conto ing ndhuwur kaya ing ngisor iki:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kode

### Kode Inline

Ing jagading basa pamrograman, `Rust` , `Python` , `JavaScript` lan `Go` saben duwe posisi sing unik.

### Sawetara Baris Kode

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Line Break Ing Paragraf

Jeda baris ing paragraf bisa digayuh tanpa nambah garis kosong ing antarane baris.
Jarak antarane baris ing paragraf luwih cilik tinimbang jarak antarane paragraf.

contone:

> Urip dadi wong sing hebat,
> Pati uga pahlawan hantu.
> Aku isih kangen Xiang Yu,
> Wegah nyabrang Jiangdong.
>
> Li Qingzhao nggunakake crita tragis Xiang Yu kanggo menehi pitunjuk babagan ketidakmampuan Dinasti Song.
> Nyatakake rasa ora puas karo pengadilan kekaisaran amarga nyerah tanpa perang.