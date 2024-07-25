# Fitur Produk

`i18` nyaéta pakakas baris paréntah pikeun narjamahkeun Markdown & Yaml

## Bisa Sampurna Ngajaga Format Markdown

Ngarojong tarjamahan tabel Markdown tanpa ngaruksak formatna; henteu narjamahkeun kecap dina rumus matematika atanapi tautan.

Ngarojong tarjamahan tina Markdown dina HTML `<pre>` HTML dina `MarkDown` sareng eusi dina tag `<code>` henteu ditarjamahkeun

## Bisa Mikawanoh Rumus Matematik Jeung Skip Tarjamah

Rumus matematika diakuan sareng tarjamahan dilewatan.

Pikeun cara nulis rumus matematika, mangga tingal [" Github Ngeunaan Nulis Babasan Matematika"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Kamampuhan Pikeun Narjamahkeun Koméntar Dina Snippét Kode

Inline kode jeung kode snippét teu ditarjamahkeun, tapi komentar dina kode bisa ditarjamahkeun.

Komentar tarjamahan kedah nunjukkeun basa ` ``` ` , ` ```rust ` :

Ayeuna ngarojong tarjamahan koméntar `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` `js` , `coffee` `python` , `bash` , `php` [jeung basa séjén](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Upami basa pamrograman anu anjeun peryogikeun henteu sayogi, mangga [ngahubungi kami](https://groups.google.com/g/i18n-site) .

## Baris Paréntah Ramah

Aya seueur [alat beurat](https://www.capterra.com/translation-management-software) anu sayogi pikeun ngatur dokumén tarjamahan.

Pikeun programer anu wawuh jeung `git` , `vim` , `vscode` , ngagunakeun parabot ieu pikeun ngédit dokumén jeung ngatur vérsi pasti bakal nambahan biaya diajar.

`KISS` ( `Keep It Simple, Stupid` ) Diantara anu percaya dina prinsipna, solusi tingkat perusahaan sinonim sareng pajeujeut, teu efisien sareng sesah dianggo.

Tarjamahan kedah dilakukeun ku ngalebetkeun paréntah sareng ngarengsekeunana ku hiji klik Henteu kedah aya katergantungan lingkungan anu kompleks.

Ulah nambahkeun éntitas iwal perlu.

## Taya Modifikasi, Euweuh Tarjamahan

Aya ogé sababaraha alat tarjamahan baris paréntah, sapertos [translate-shell](https://github.com/soimort/translate-shell) .

Tapi, aranjeunna henteu ngadukung ngaidentipikasi modifikasi file sareng ngan ukur narjamahkeun file anu dirobih pikeun ngirangan biaya sareng ningkatkeun efisiensi.

## Tarjamahan Tiasa Diédit, Sareng Tarjamahan Mesin Moal Nimpa Modifikasi Anu Aya.

Tarjamahan tiasa diédit.

Ngarobah téks aslina tur mesin-narjamahkeun deui, modifikasi manual kana tarjamahan moal overwritten (lamun ayat ieu téks aslina teu acan dirobah).

## Tarjamahan Kualitas Luhur Xindaya

Kami parantos ngembangkeun téknologi tarjamahan generasi anyar anu ngagabungkeun kaunggulan téknis tina modél tarjamahan mesin tradisional sareng modél basa ageung pikeun ngadamel tarjamahan anu akurat, lancar sareng elegan.

Tés buta nunjukkeun yén kualitas tarjamahan urang sacara signifikan langkung saé dibandingkeun sareng jasa anu sami.

Pikeun ngahontal kualitas `3.15` `2.67` , jumlah éditan manual anu diperyogikeun ku Google Tarjamah sareng `ChatGPT`

## <a rel=id href="#price" id="price"></a> harga pisan kalapa

|                                                                                   | USD/juta kecap |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Catetan: Jumlah karakter anu tiasa ditagih = [jumlah unicode](https://en.wikipedia.org/wiki/Unicode) dina file sumber × jumlah basa dina tarjamahan

## Dukung Tarjamahan `YAML`

Alatna ngan ukur narjamahkeun nilai kamus dina `YAML`

Dumasar kana `YAML` Tarjamahan, anjeun tiasa kalayan gampang ngawangun solusi internasional pikeun sababaraha basa pamrograman.

## Rojongan Tarjamahan `HOGO`

Ngarojong konfigurasi header tina blog statik tipe [HOGO](https://github.com/gohugoio/hugo) , ngan widang `title` , `summary` jeung `description` nu ditarjamahkeun.

## Ulah Narjamahkeun Ngaran Variabel

`Markdown` Dipaké salaku template email, `YAML` salaku konfigurasi file basa, bakal aya parameter variabel (contona: recharge `${amount}` geus narima).

`${varname}` Jenis ngaran variabel ieu moal dianggap salaku tarjamahan basa Inggris.

## Optimasi Tarjamahan Pikeun Cina, Jepang Sareng Korea

### Nalika Ditarjamahkeun Kana Basa Inggris, Hurup Kahiji Judulna Otomatis Dihurungkeun Kapital.

Cina, Jepang, jeung Korea teu boga hurup gede atawa leutik, tapi judul Inggris umumna capitalize hurup kahiji.

`i18` bisa mikawanoh judul dina `MarkDown` , sarta bakal otomatis make hurup kahiji nalika narjamahkeun kana basa nu sensitip.

Contona `为阅读体验而优化` bakal ditarjamahkeun jadi `Optimized for Reading Experience` .

### Istilah Inggris Dina Basa Cina, Jepang, Korea Jeung Cina Teu Ditarjamahkeun

Dokumén ti Cina, Jepang sareng Korea sering ngandung seueur istilah Inggris.

Tarjamahan mesin tina basa Cina, Jepang jeung Korea geus jadi basa non-Inggris, sarta istilah mindeng ditarjamahkeun babarengan, kayaning kalimah Cina handap:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Upami anjeun nganggo Google atanapi DeepL, aranjeunna duanana salah narjamahkeun istilah basa Inggris anu kedah tetep asli (conto Jepang sareng Perancis).

### Tarjamah Google

Ditarjamahkeun kana `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Ditarjamahkeun kana `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` ditarjamahkeun jadi `faucon` jeung `Llama` ditarjamahkeun jadi `lama` . Salaku kecap barang ditangtoskeun, aranjeunna teu kudu ditarjamahkeun.

<img alt="" src="//p.3ti.site/1720199451.avif">

### Tarjamahan DeepL

Ditarjamahkeun kana `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL `... `

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### Tarjamahan i18n.site

Tarjamahan ' `i18` bakal mikawanoh istilah Inggris dina dokumén Cina, Jepang jeung Korea sarta ninggalkeun istilah gembleng.

Contona, hasil tarjamahan Jepang di luhur nyaéta:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Tarjamahan Perancis nyaéta:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Ngan lamun aya spasi antara kecap Inggris jeung téks Cina, Jepang jeung Korea atawa panjang basa Inggris leuwih gede ti 1, kecap bakal dianggap salaku istilah.

Contona: `C罗` bakal ditarjamahkeun jadi `Cristiano Ronaldo` .

## Bisa Digabungkeun `i18n.site` Wangunan Ramatloka Multi-Basa

`i18` Diintegrasikeun kana alat baris paréntah pikeun wangunan ramatloka multi-basa [`i18n.site`](/i18n.site) .

Tempo dokuméntasi tina [`i18n.site`](/i18n.site)

## Kodeu Open Source

Klién sagemblengna open source, sarta sisi server % tina kode nyaeta open 90 [Klik di dieu pikeun nempo kode sumber](/i18n.site/src) .

Kami milarian sukarelawan pikeun ilubiung dina pamekaran kode sumber terbuka sareng koréksi téks anu ditarjamahkeun.

Upami anjeun kabetot, mangga [→ Klik di dieu pikeun ngeusian profil anjeun](https://ggl.link/i18n) teras gabung [ka milis](https://groups.google.com/u/2/g/i18n-site) pikeun komunikasi.

## Tetep Komunikasi

Punten <button onclick="mailsub()">klik email ieu pikeun ngalanggan apdet produk</button> sareng <button onclick="webpush()">ngaktifkeun push browser</button> .

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) ngiringan / akun sosial kami [X.COM: @i18nSite](https://x.com/i18nSite)
