# Daftar Gaya

[Klik kene kanggo nelusur file sumber kaca iki](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) kanggo ndeleng carane nulis `MarkDown` ing gaya ing ngisor iki.

## Garis & &

__ __~~ strikethrough~~ lan teks presentasi **kandel** .

Kaserat mangkene:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Parser `MarkDown` saka alat bangunan situs web `i18n.site` wis ngoptimalake sintaks garis ngisor, coretan, lan kandel Bisa ditrapake tanpa spasi sadurunge lan sawise tandha, nggawe luwih gampang kanggo nulis dokumen ing basa kayata China, Jepang, lan Korea. sing ora nggunakake spasi minangka separator.

Wacan sing luwih dawa : [Kenapa sintaksis Markdown Nuggets ( `**……**` ) kadhangkala ora ditrapake?](//juejin.cn/post/7064565848421171213)

## Kutipan

### Kutipan Baris Tunggal

> Kuwi sifatku, bakatku bakal migunani, lan aku bakal bali sawise kabeh dhuwit wis dibuwang.
<p style="text-align:right">─ Li Bai</p>

### Multiple Baris Kuotasi

> Kauntungan unik liyane saka fiksi ilmiah yaiku ruang lingkup sing amba banget.
> "Perang lan Perdamaian", kanthi sejuta tembung, mung nggambarake sejarah sawijining wilayah sajrone pirang-pirang dekade;
> Lan novel fiksi ilmiah kaya Asimov "Jawaban Akhir" kanthi jelas nggambarake pirang-pirang milyar taun sejarah jagad raya, kalebu manungsa, mung sawetara ewu tembung.
> Inklusivitas lan kendel kuwi ora bisa digayuh ing sastra tradisional.
<p style="text-align:right">── Liu Cixin</p>

### Tip `> [!TIP]`

> [!TIP]
> Elinga mriksa validitas paspor lan visa dokumen sing kadaluwarsa ora bisa mlebu utawa metu saka negara kasebut.

Kaserat mangkene

```
> [!TIP]
> YOUR CONTENT
```

### Komentar `> [!NOTE]`

> [!NOTE]
> Yen sampeyan ngirim pesen lan aku langsung mbales, apa tegese?
> Iki nuduhake yen aku pancene seneng muter karo ponsel.


### Warning `> [!WARN]`

> [!WARN]
> Nalika arep ing ngulandara alam bébas, iku penting kanggo tetep aman.
> Minggu kepungkur, klompok pendaki nemoni badai ing tengah-tengah gunung lan kudu ngungsi amarga gagal mriksa ramalan cuaca.
> Elinga, kabeh kegiatan ruangan mbutuhake persiapan lan perhatian sing cukup kanggo cuaca.

## Daftar Tugas

- [x] Desain prototipe produk lan dhaptar fitur
- [ ] Nemtokake tumpukan teknologi lan alat pangembangan
- [ ] Ngembangake garis wektu lan tonggak pangembangan produk

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
    + Rapat pertukaran wirausaha
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

## kode

### Kode Inline

Ing jagading basa pamrograman, `Rust` , `Python` , `JavaScript` lan `Go` saben duwe posisi sing unik.

### Sawetara Baris Kode

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```