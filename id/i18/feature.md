# Fitur Produk

`i18` adalah alat baris perintah untuk terjemahan Markdown & Yaml

## Dapat Mempertahankan Format Markdown Dengan Sempurna

Mendukung terjemahan tabel penurunan harga tanpa merusak format; tidak menerjemahkan kata dalam rumus matematika atau tautan.

Mendukung terjemahan campuran HTML Markdown , konten dalam tag `<pre>` dan `<code>` yang tertanam dalam HTML `MarkDown` tidak diterjemahkan

## Dapat Mengenali Rumus Matematika Dan Melewati Terjemahan

Rumus matematika dikenali dan terjemahan dilewati.

Untuk cara menulis rumus matematika, silakan merujuk ke [" Github Tentang Menulis Ekspresi Matematika"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Kemampuan Untuk Menerjemahkan Komentar Dalam Cuplikan Kode

Kode sebaris dan cuplikan kode tidak diterjemahkan, namun komentar dalam kode dapat diterjemahkan.

Komentar terjemahan harus menunjukkan bahasa setelah ` ``` ` , ` ```rust ` :

Saat ini, mendukung terjemahan anotasi dalam `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [dan bahasa lainnya](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Jika Anda ingin menerjemahkan semua karakter non-Inggris dalam kode, tandai segmen kode dengan ` ```i18n ` .

Jika bahasa pemrograman yang Anda butuhkan tidak tersedia, silakan [hubungi kami](https://groups.google.com/g/i18n-site) .

## Ramah Baris Perintah

Ada banyak [alat kelas berat](https://www.capterra.com/translation-management-software) yang tersedia untuk mengelola dokumen terjemahan.

Bagi programmer yang familiar dengan `git` , `vim` , dan `vscode` , menggunakan alat ini untuk mengedit dokumen dan mengelola versi pasti akan meningkatkan biaya pembelajaran.

`KISS` ( `Keep It Simple, Stupid` ) Di kalangan penganut prinsip, solusi tingkat perusahaan identik dengan kerumitan, tidak efisien, dan sulit digunakan.

Terjemahan harus dilakukan dengan memasukkan perintah dan menyelesaikannya dengan satu klik.

Jangan menambahkan entitas kecuali diperlukan.

## Tidak Ada Modifikasi, Tidak Ada Terjemahan

Ada juga beberapa alat terjemahan baris perintah, seperti [translate-shell](https://github.com/soimort/translate-shell) .

Namun, mereka tidak mendukung identifikasi modifikasi file dan hanya menerjemahkan file yang dimodifikasi untuk mengurangi biaya dan meningkatkan efisiensi.

## Terjemahan Dapat Diedit, Dan Terjemahan Mesin Tidak Akan Menimpa Modifikasi Yang Sudah Ada.

Terjemahannya dapat diedit.

Ubah teks asli dan terjemahkan lagi dengan mesin, modifikasi manual pada terjemahan tidak akan ditimpa (jika paragraf teks asli ini belum diubah).

## Terjemahan Mesin Kualitas Terbaik

Kami telah mengembangkan teknologi terjemahan generasi baru yang menggabungkan keunggulan teknis model terjemahan mesin tradisional dan model bahasa besar untuk membuat terjemahan akurat, lancar, dan elegan.

Tes buta menunjukkan bahwa kualitas terjemahan kami jauh lebih baik dibandingkan dengan layanan serupa.

Untuk mencapai kualitas yang sama, jumlah pengeditan manual yang diperlukan oleh Google Terjemahan dan `ChatGPT` adalah `2.67` kali dan `3.15` kali lipat dari jumlah kami masing-masing.

## <a rel=id href="#price" id="price"></a> Harga yang sangat kompetitif

|                                                                                   | USD/juta kata |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Klik di sini untuk mengotorisasi dan secara otomatis i18n.site Perpustakaan github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) dan **menerima bonus $50** .

Catatan: Jumlah karakter yang dapat ditagih = [jumlah unicode](https://en.wikipedia.org/wiki/Unicode) dalam file sumber × jumlah bahasa dalam terjemahan

## Mendukung Terjemahan `YAML`

Alat ini hanya menerjemahkan nilai kamus dalam `YAML` , bukan kunci kamus.

Berdasarkan `YAML` terjemahan, Anda dapat dengan mudah membangun solusi internasional untuk berbagai bahasa pemrograman.

## Mendukung Terjemahan `HOGO` Konfigurasi Header

Mendukung konfigurasi header blog statis tipe [HOGO](https://github.com/gohugoio/hugo) , dan hanya menerjemahkan kolom `title` , `summary` , `brief` , dan `description` .

## Jangan Terjemahkan Nama Variabel

`Markdown` digunakan sebagai template email, `YAML` digunakan sebagai konfigurasi file bahasa, dan akan ada parameter variabel (misalnya: isi ulang `${amount}` telah diterima).

Nama variabel seperti `${varname}` tidak akan dianggap sebagai terjemahan bahasa Inggris.

## Pengoptimalan Terjemahan Untuk China, Jepang, Dan Korea

### Jika Diterjemahkan Ke Dalam Bahasa Inggris, Huruf Pertama Judul Secara Otomatis Menggunakan Huruf Kapital.

Cina, Jepang, dan Korea tidak menggunakan huruf besar dan kecil, namun aturan untuk judul bahasa Inggris adalah menggunakan huruf kapital pada huruf pertama.

`i18` dapat mengenali judul dalam `MarkDown` , dan secara otomatis akan menggunakan huruf kapital pada huruf pertama saat menerjemahkan ke dalam bahasa yang peka huruf besar-kecil.

Misalnya, `为阅读体验而优化` akan diterjemahkan menjadi `Optimized for Reading Experience` .

### Istilah Bahasa Inggris Dalam Bahasa Mandarin, Jepang, Korea, Dan Mandarin Tidak Diterjemahkan

Dokumen dari Tiongkok, Jepang, dan Korea seringkali mengandung banyak istilah bahasa Inggris.

Terjemahan mesin bahasa Mandarin, Jepang, dan Korea telah menjadi bahasa non-Inggris, dan istilah-istilahnya sering diterjemahkan secara bersamaan, seperti kalimat bahasa Mandarin berikut:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Jika Anda menggunakan Google atau DeepL, keduanya salah menerjemahkan istilah bahasa Inggris yang seharusnya tetap asli (ambil contoh bahasa Jepang dan Prancis).

### Google Terjemahan

Diterjemahkan ke `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` bahasa Jepang :

![](//p.3ti.site/1720199391.avif)

Diterjemahkan ke `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` bahasa Prancis :

`Falcon` diterjemahkan sebagai `faucon` dan `Llama` diterjemahkan sebagai `lama` . Sebagai kata benda yang tepat, kata tersebut tidak boleh diterjemahkan.

![](//p.3ti.site/1720199451.avif)

### Terjemahan DeepL

Diterjemahkan ke `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` bahasa Jepang :

![](//p.3ti.site/1720199550.avif)

DeepL Terjemahan di atas ke dalam bahasa Prancis (juga menulis ulang nama diri dan menambahkan angka ganjil `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Terjemahan i18n.situs

Terjemahan `i18` akan mengenali istilah bahasa Inggris dalam dokumen China, Jepang, dan Korea dan membiarkan istilah tersebut tetap utuh.

Misalnya hasil terjemahan bahasa Jepang di atas adalah:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Terjemahan Perancisnya adalah:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Hanya jika ada spasi antara kata bahasa Inggris dan teks berbahasa Mandarin, Jepang, dan Korea atau panjang bahasa Inggris lebih dari 1, kata tersebut akan dianggap sebagai istilah.

Misalnya: `C罗` akan diterjemahkan sebagai `Cristiano Ronaldo` .

## Dapat Digabungkan Dengan Lebih Dari `i18n.site` Bahasa Untuk Membangun Sebuah Website

`i18` diintegrasikan ke dalam alat baris perintah pembuatan situs web multi-bahasa [`i18n.site`](/i18n.site) .

Lihat dokumentasi [`i18n.site`](/i18n.site) untuk detailnya.

## Kode Sumber Terbuka

Klien sepenuhnya open source, dan sisi server 90 % [kodenya](/i18n.site/c/src) adalah open source.

Kami mencari sukarelawan untuk berpartisipasi dalam pengembangan kode sumber terbuka dan mengoreksi teks terjemahan.

Jika Anda tertarik, silakan [→ Klik di sini untuk mengisi profil Anda](https://ggl.link/i18n) dan kemudian bergabung dengan [milis](https://groups.google.com/u/2/g/i18n-site) untuk komunikasi.

## Tetap Berhubungan

Silakan <button onclick="mailsub()">klik email ini untuk berlangganan pembaruan produk</button> dan <button onclick="webpush()">mengaktifkan browser push</button> . Kami akan memberi tahu Anda ketika pembaruan produk dilakukan.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) selamat datang untuk mengikuti akun / kami [X.COM: @i18nSite](https://x.com/i18nSite)