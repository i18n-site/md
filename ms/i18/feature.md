# Ciri Produk

`i18` ialah alat baris arahan untuk terjemahan Markdown & Yaml

## Boleh Mengekalkan Format Markdown Dengan Sempurna

Menyokong terjemahan jadual Markdown tanpa merosakkan format; tidak menterjemah perkataan dalam formula atau pautan matematik.

Menyokong terjemahan campuran HTML Markdown , kandungan dalam tag `<pre>` dan `<code>` yang dibenamkan dalam HTML `MarkDown` tidak diterjemahkan

## Boleh Mengenal Formula Matematik Dan Melangkau Terjemahan

Formula matematik diiktiraf dan terjemahan dilangkau.

Untuk cara menulis formula matematik, sila rujuk [" Github Mengenai Menulis Ungkapan Matematik"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Keupayaan Untuk Menterjemah Ulasan Dalam Coretan Kod

Kod sebaris dan coretan kod tidak diterjemahkan, tetapi ulasan dalam kod boleh diterjemahkan.

Komen terjemahan perlu menunjukkan bahasa selepas ` ``` ` , ` ```rust ` :

Pada masa ini, ia menyokong terjemahan anotasi dalam `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [dan bahasa lain](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Jika anda ingin menterjemah semua aksara bukan bahasa Inggeris dalam kod, tandakan segmen kod dengan ` ```i18n ` .

Jika bahasa pengaturcaraan yang anda perlukan tidak tersedia, sila [hubungi kami](https://groups.google.com/g/i18n-site) .

## Mesra Baris Arahan

Terdapat banyak [alat berat](https://www.capterra.com/translation-management-software) yang tersedia untuk mengurus dokumen terjemahan.

Bagi pengaturcara yang biasa dengan `git` , `vim` dan `vscode` , menggunakan alatan ini untuk mengedit dokumen dan mengurus versi sudah pasti akan meningkatkan kos pembelajaran.

`KISS` ( `Keep It Simple, Stupid` ) Di kalangan penganut prinsip, penyelesaian peringkat perusahaan adalah sinonim dengan menyusahkan, tidak cekap dan sukar untuk digunakan.

Terjemahan harus dilakukan dengan memasukkan arahan dan melengkapkannya dengan satu klik. Tidak ada kebergantungan persekitaran yang kompleks.

Jangan tambah entiti melainkan perlu.

## Tiada Pengubahsuaian, Tiada Terjemahan

Terdapat juga beberapa alat terjemahan baris arahan, seperti [translate-shell](https://github.com/soimort/translate-shell)

Walau bagaimanapun, mereka tidak menyokong mengenal pasti pengubahsuaian fail dan hanya menterjemah fail yang diubah suai untuk mengurangkan kos dan meningkatkan kecekapan.

## Terjemahan Boleh Diedit Dan Terjemahan Mesin Tidak Akan Menimpa Pengubahsuaian Sedia Ada.

Terjemahan boleh diedit.

Ubah suai teks asal dan terjemah mesin sekali lagi, pengubahsuaian manual pada terjemahan tidak akan ditimpa (jika perenggan teks asal ini tidak diubah suai).

## Terjemahan Mesin Berkualiti Terbaik

Kami telah membangunkan teknologi terjemahan generasi baharu yang menggabungkan kelebihan teknikal model terjemahan mesin tradisional dan model bahasa besar untuk membuat terjemahan tepat, lancar dan elegan.

Ujian buta menunjukkan bahawa kualiti terjemahan kami jauh lebih baik berbanding perkhidmatan yang serupa.

Untuk mencapai kualiti yang sama, jumlah pengeditan manual yang diperlukan oleh Terjemahan Google dan `ChatGPT` adalah masing-masing `2.67` kali dan `3.15` kali ganda daripada kami.

## <a rel=id href="#price" id="price"></a> Harga yang sangat kompetitif

|                                                                                   | USD/juta perkataan |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Klik di sini untuk memberi kebenaran dan i18n.site Perpustakaan github secara automatik](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) dan **menerima bonus $50** .

Nota: Bilangan aksara yang boleh dibilkan = [bilangan unicode](https://en.wikipedia.org/wiki/Unicode) dalam fail sumber × bilangan bahasa dalam terjemahan

## Menyokong Terjemahan `YAML`

Alat ini hanya menterjemah nilai kamus dalam `YAML` , bukan kunci kamus.

Berdasarkan `YAML` terjemahan, anda boleh membina penyelesaian antarabangsa untuk pelbagai bahasa pengaturcaraan dengan mudah.

## Menyokong Terjemahan `HOGO` Konfigurasi Pengepala

Menyokong konfigurasi pengepala blog statik jenis [HOGO](https://github.com/gohugoio/hugo) , dan hanya menterjemah medan `title` , `summary` , `brief` dan `description` .

## Jangan Terjemahkan Nama Pembolehubah

`Markdown` digunakan sebagai templat e-mel, `YAML` digunakan sebagai konfigurasi fail bahasa, dan akan terdapat parameter pembolehubah (contohnya: cas semula `${amount}` telah diterima).

Nama pembolehubah seperti `${varname}` tidak akan dianggap sebagai terjemahan bahasa Inggeris.

## Pengoptimuman Terjemahan Untuk China, Jepun Dan Korea

### Apabila Diterjemahkan Ke Dalam Bahasa Inggeris, Huruf Pertama Tajuk Akan Dihuruf Besar Secara Automatik.

China, Jepun dan Korea tidak mempunyai huruf besar dan huruf kecil, tetapi konvensyen untuk tajuk bahasa Inggeris adalah menggunakan huruf besar huruf pertama.

`i18` boleh mengenali tajuk dalam `MarkDown` , dan akan menggunakan huruf besar huruf pertama secara automatik apabila menterjemah ke dalam bahasa sensitif huruf besar-kecil.

Sebagai contoh, `为阅读体验而优化` akan diterjemahkan kepada `Optimized for Reading Experience` .

### Istilah Inggeris Dalam Bahasa Cina, Jepun, Korea Dan Cina Tidak Diterjemahkan

Dokumen dari China, Jepun dan Korea selalunya mengandungi banyak istilah Inggeris.

Terjemahan mesin bahasa Cina, Jepun dan Korea telah menjadi bahasa bukan bahasa Inggeris, dan istilah sering diterjemahkan bersama-sama, seperti ayat Cina berikut:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Jika anda menggunakan Google atau DeepL, kedua-duanya tersalah menterjemah istilah Inggeris yang sepatutnya kekal asli (ambil Jepun dan Perancis sebagai contoh).

### Terjemahan Google

Diterjemah ke bahasa `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

![](//p.3ti.site/1720199391.avif)

Diterjemah `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` bahasa Perancis :

`Falcon` diterjemahkan sebagai `faucon` dan `Llama` diterjemahkan sebagai `lama` . Sebagai kata nama khas, mereka tidak boleh diterjemahkan.

![](//p.3ti.site/1720199451.avif)

### Terjemahan DeepL

Diterjemah ke bahasa `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

![](//p.3ti.site/1720199550.avif)

DeepL Terjemahan di atas ke dalam bahasa Perancis (juga menulis semula nama yang betul dan menambah ganjil `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Terjemahan Tapak i18n

Terjemahan `i18` akan mengiktiraf istilah bahasa Inggeris dalam dokumen Cina, Jepun dan Korea dan membiarkan istilah tersebut utuh.

Sebagai contoh, hasil terjemahan bahasa Jepun di atas ialah:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Terjemahan Perancis ialah:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Hanya apabila terdapat ruang antara perkataan Inggeris dan teks Cina, Jepun dan Korea atau panjang bahasa Inggeris lebih besar daripada 1, perkataan itu akan dianggap sebagai istilah.

Contohnya: `C罗` akan diterjemahkan sebagai `Cristiano Ronaldo` .

## Boleh Digabungkan Dengan Lebih Daripada `i18n.site` Bahasa Untuk Membina Laman Web

`i18` disepadukan ke dalam alat baris arahan pembinaan laman web berbilang bahasa [`i18n.site`](/i18n.site) .

Lihat dokumentasi [`i18n.site`](/i18n.site) untuk butiran.

## Kod Sumber Terbuka

Pelanggan adalah sumber terbuka sepenuhnya, dan bahagian pelayan 90 daripada kod adalah sumber terbuka. [Klik di sini untuk melihat kod sumber](/i18n.site/c/src) .

Kami sedang mencari sukarelawan untuk mengambil bahagian dalam pembangunan kod sumber terbuka dan pembacaan pruf teks terjemahan.

Jika anda berminat, sila [→ Klik di sini untuk mengisi profil anda](https://ggl.link/i18n) dan kemudian sertai [senarai mel](https://groups.google.com/u/2/g/i18n-site) untuk komunikasi.

## Terus Berhubung

Sila <button onclick="mailsub()">klik e-mel ini untuk melanggan kemas kini produk</button> dan <button onclick="webpush()">mendayakan tolak penyemak imbas</button> Kami akan memberitahu anda apabila kemas kini produk dibuat.

Juga dialu- [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) untuk mengikuti akaun / kami [X.COM: @i18nSite](https://x.com/i18nSite)