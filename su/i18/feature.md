# Fitur Produk

`i18` mangrupikeun alat baris paréntah pikeun tarjamahan Markdown & Yaml

## Bisa Sampurna Ngajaga Format Markdown

Ngarojong tarjamahan tabel Markdown tanpa ngaruksak formatna; henteu narjamahkeun kecap dina rumus matematika atanapi tautan.

Ngadukung tarjamahan HTML Markdown , eusi dina tag `<pre>` sareng `<code>` anu diselapkeun dina HTML `MarkDown` henteu ditarjamahkeun

## Bisa Mikawanoh Rumus Matematik Jeung Skip Tarjamah

Rumus matematika diakuan sareng tarjamahan dilewatan.

Pikeun cara nulis rumus matematika, mangga tingal [" Github Ngeunaan Nulis Babasan Matematika"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Kamampuhan Pikeun Narjamahkeun Koméntar Dina Snippét Kode

Inline kode jeung kode snippét teu ditarjamahkeun, tapi komentar dina kode bisa ditarjamahkeun.

Koméntar tarjamahan kedah nunjukkeun basa saatos ` ``` ` , ` ```rust ` :

Ayeuna, éta ngadukung tarjamahan anotasi dina `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [jeung basa séjén](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Upami anjeun hoyong narjamahkeun sadaya karakter non-Inggris dina kode, cirian bagean kode ku ` ```i18n ` .

Upami basa pamrograman anu anjeun peryogikeun henteu sayogi, mangga [ngahubungi kami](https://groups.google.com/g/i18n-site) .

## Baris Paréntah Ramah

Aya seueur [alat beurat](https://www.capterra.com/translation-management-software) anu sayogi pikeun ngatur dokumén tarjamahan.

Pikeun programer anu akrab jeung `git` , `vim` , jeung `vscode` , ngagunakeun parabot ieu pikeun ngédit dokumén jeung ngatur versi undoubtedly bakal nambahan biaya diajar.

`KISS` ( `Keep It Simple, Stupid` ) Diantara anu percaya prinsip, solusi tingkat perusahaan sinonim sareng pajeulit, teu efisien, sareng sesah dianggo.

Tarjamahan kedah dilakukeun ku ngalebetkeun paréntah sareng ngarengsekeunana ku hiji klik Henteu kedah aya katergantungan lingkungan anu kompleks.

Ulah nambahkeun éntitas iwal perlu.

## Taya Modifikasi, Euweuh Tarjamahan

Aya ogé sababaraha alat tarjamahan baris paréntah, sapertos [translate-shell](https://github.com/soimort/translate-shell) .

Tapi, aranjeunna henteu ngadukung ngaidentipikasi modifikasi file sareng ngan ukur narjamahkeun file anu dirobih pikeun ngirangan biaya sareng ningkatkeun efisiensi.

## Tarjamahan Tiasa Diédit, Sareng Tarjamahan Mesin Moal Nimpa Modifikasi Anu Aya.

Tarjamahan tiasa diédit.

Ngarobah téks aslina tur mesin-narjamahkeun deui, modifikasi manual kana tarjamahan moal overwritten (lamun ayat ieu téks aslina teu acan dirobah).

## Tarjamahan Mesin Kualitas Pangalusna

Kami parantos ngembangkeun téknologi tarjamahan generasi anyar anu ngagabungkeun kaunggulan téknis tina modél tarjamahan mesin tradisional sareng modél basa ageung pikeun ngadamel tarjamahan anu akurat, lancar sareng elegan.

Tés buta nunjukkeun yén kualitas tarjamahan urang sacara signifikan langkung saé dibandingkeun sareng jasa anu sami.

Pikeun ngahontal kualitas anu sami, jumlah éditan manual anu dibutuhkeun ku Google Tarjamah sareng `ChatGPT` masing-masing `2.67` kali sareng `3.15` kali tina milik urang.

## <a rel=id href="#price" id="price"></a> harga pisan kalapa

|                                                                                   | USD/juta kecap |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Klik di dieu pikeun otorisasi sareng otomatis i18n.site Perpustakaan github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) sareng **nampi bonus $50** .

Catetan: Jumlah karakter anu tiasa ditagih = [jumlah unicode](https://en.wikipedia.org/wiki/Unicode) dina file sumber × jumlah basa dina tarjamahan

## Ngarojong Tarjamahan `YAML`

Alatna ngan ukur narjamahkeun nilai kamus dina `YAML` , sanés konci kamus.

Dumasar kana `YAML` tarjamahan, anjeun tiasa gampang ngawangun solusi internasional pikeun sababaraha basa program.

## Rojongan Tarjamahan `HOGO` Konfigurasi Lulugu

Ngarojong konfigurasi lulugu tina blog statik tipe [HOGO](https://github.com/gohugoio/hugo) , sarta ngan narjamahkeun widang `title` , `summary` , `brief` , jeung `description` .

## Ulah Narjamahkeun Ngaran Variabel

`Markdown` dipaké salaku template email, `YAML` dipaké salaku konfigurasi file basa, sarta bakal aya parameter variabel (Contona: ngecas `${amount}` geus narima).

Ngaran variabel sapertos `${varname}` moal dianggap salaku tarjamahan basa Inggris.

## Optimasi Tarjamahan Pikeun Cina, Jepang Sareng Korea

### Nalika Ditarjamahkeun Kana Basa Inggris, Hurup Kahiji Judulna Otomatis Dikapital.

Cina, Jepang, sareng Korea teu gaduh hurup ageung sareng hurup leutik, tapi konvénsi pikeun judul Inggris nyaéta hurup kapital dina hurup kahiji.

`i18` tiasa ngenal judulna dina `MarkDown` , sareng otomatis bakal ngapitalkeun hurup kahiji nalika narjamahkeun kana basa anu sensitip.

Contona, `为阅读体验而优化` bakal ditarjamahkeun kana `Optimized for Reading Experience` .

### Istilah Inggris Dina Basa Cina, Jepang, Korea Jeung Cina Teu Ditarjamahkeun

Dokumén ti Cina, Jepang sareng Korea sering ngandung seueur istilah Inggris.

Tarjamahan mesin tina basa Cina, Jepang jeung Korea geus jadi basa non-Inggris, sarta istilah mindeng ditarjamahkeun babarengan, kayaning kalimah Cina handap:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Upami anjeun nganggo Google atanapi DeepL, aranjeunna duanana salah narjamahkeun istilah basa Inggris anu kedah tetep asli (conto Jepang sareng Perancis).

### Tarjamah Google

Ditarjamahkeun `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` basa Jepang :

![](//p.3ti.site/1720199391.avif)

Ditarjamahkeun `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` basa Perancis :

`Falcon` ditarjamahkeun jadi `faucon` jeung `Llama` ditarjamahkeun jadi `lama` . Salaku kecap barang ditangtoskeun, aranjeunna teu kudu ditarjamahkeun.

![](//p.3ti.site/1720199451.avif)

### Tarjamahan DeepL

Ditarjamahkeun `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` basa Jepang :

![](//p.3ti.site/1720199550.avif)

DeepL `... `

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Tarjamahan i18n.site

Tarjamahan `i18` bakal mikawanoh istilah Inggris dina dokumén Cina, Jepang jeung Korea sarta ninggalkeun istilah gembleng.

Contona, hasil tarjamahan Jepang di luhur nyaéta:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Tarjamahan Perancis nyaéta:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Ngan lamun aya spasi antara kecap Inggris jeung téks Cina, Jepang jeung Korea atawa panjang basa Inggris leuwih gede ti 1, kecap bakal dianggap salaku istilah.

Contona: `C罗` bakal ditarjamahkeun jadi `Cristiano Ronaldo` .

## Bisa Digabungkeun Sareng Langkung Ti `i18n.site` Basa Pikeun Ngawangun Halaman Wéb

`i18` diintegrasikeun kana alat garis paréntah ngawangun halaman wéb multi-basa [`i18n.site`](/i18n.site) .

Tempo dokuméntasi [`i18n.site`](/i18n.site) pikeun detil.

## Kodeu Open Source

Klién sagemblengna open source, sarta sisi 90 % tina kode nyaeta open source [Klik di dieu pikeun nempo kode sumber](/i18n.site/c/src) .

Kami milarian sukarelawan pikeun ilubiung dina pamekaran kode sumber terbuka sareng koréksi téks anu ditarjamahkeun.

Upami anjeun kabetot, mangga [→ Klik di dieu pikeun ngeusian profil anjeun](https://ggl.link/i18n) teras gabung ka [milis](https://groups.google.com/u/2/g/i18n-site) pikeun komunikasi.

## Tetep Komunikasi

Punten <button onclick="mailsub()">klik email ieu pikeun ngalanggan apdet produk</button> sareng <button onclick="webpush()">ngaktifkeun push browser</button> .

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) ngiringan ogé akun / kami [X.COM: @i18nSite](https://x.com/i18nSite)