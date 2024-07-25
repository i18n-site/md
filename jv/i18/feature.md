# Fitur Produk

`i18` minangka alat baris perintah kanggo nerjemahake Markdown & Yaml .

## Bisa Njaga Format Markdown Kanthi Sampurna

Ndhukung terjemahan tabel Markdown tanpa ngrusak format; ora nerjemahake tembung ing rumus matematika utawa tautan

Ndhukung terjemahan saka Markdown ing campuran HTML `<pre>` `<code>` HTML ing `MarkDown`

## Bisa Ngerteni Rumus Matematika Lan Ngliwati Terjemahan

Rumus matematika diakoni lan terjemahan dilewati.

Kanggo carane nulis rumus matematika, mangga deleng [" Github Babagan Nulis Ekspresi Matematika"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Kemampuan Kanggo Nerjemahake Komentar Ing Potongan Kode

Kode inline lan potongan kode ora diterjemahake, nanging komentar ing kode kasebut bisa diterjemahake.

Komentar terjemahan kudu nuduhake ` ```rust ` : ` ``` `

`yaml` `json5` `go` `rust` `toml` `c` `cpp` `java` `js` `coffee` `python` `bash` `php`[](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14)

Yen basa pamrograman sing sampeyan butuhake ora kasedhiya, [hubungi kita](https://groups.google.com/g/i18n-site) .

## Command Line Loropaken

Ana akeh [alat abot](https://www.capterra.com/translation-management-software) sing kasedhiya kanggo ngatur dokumen terjemahan.

Kanggo programer sing kenal karo `git` , `vim` , `vscode` , nggunakake alat iki kanggo nyunting dokumen lan ngatur versi mesthi bakal nambah biaya sinau.

`KISS` ( `Keep It Simple, Stupid` ) Antarane wong sing percaya ing prinsip, solusi tingkat perusahaan sinonim karo rumit, ora efisien lan angel digunakake.

Terjemahan kudu ditindakake kanthi ngetik perintah lan ngrampungake kanthi siji klik Ora ana ketergantungan lingkungan sing rumit.

Aja nambah entitas kajaba perlu.

## Ora Ana Modifikasi, Ora Ana Terjemahan

Ana uga sawetara alat terjemahan baris perintah, kayata [translate-shell](https://github.com/soimort/translate-shell) .

Nanging, dheweke ora ndhukung modifikasi file identifikasi lan mung nerjemahake file sing diowahi kanggo nyuda biaya lan nambah efisiensi.

## Terjemahan Bisa Diowahi, Lan Terjemahan Mesin Ora Bakal Nimpa Modifikasi Sing Wis Ana.

Terjemahan bisa diowahi.

Ngowahi teks asli lan mesin-terjemahake maneh, modifikasi manual kanggo terjemahan ora bakal ditimpa (yen paragraf teks asli iki durung diowahi).

## Terjemahan Xindaya Kanthi Kualitas Dhuwur

Kita wis ngembangake teknologi terjemahan generasi anyar sing nggabungake kaluwihan teknis model terjemahan mesin tradisional lan model basa gedhe kanggo nggawe terjemahan akurat, lancar lan elegan.

Tes wuta nuduhake manawa kualitas terjemahan kita luwih apik dibandhingake karo layanan sing padha.

Kanggo entuk kualitas sing padha, jumlah panyuntingan manual `3.15` dibutuhake Google `2.67` lan `ChatGPT`

## <a rel=id href="#price" id="price"></a> Rega sing kompetitif banget

|                                                                                   | USD/yuta tembung |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Cathetan: Jumlah karakter sing bisa ditagih = [jumlah unicode](https://en.wikipedia.org/wiki/Unicode) ing file sumber × jumlah basa ing terjemahan

## Dhukungan Terjemahan `YAML`

Alat kasebut mung nerjemahake nilai kamus ing `YAML` , dudu tombol kamus.

Adhedhasar Terjemahan `YAML` , sampeyan bisa kanthi gampang nggawe solusi internasional kanggo macem-macem basa pemrograman.

## Dhukungan Terjemahan `HOGO`

Ndhukung konfigurasi header saka blog statis tipe [HOGO](https://github.com/gohugoio/hugo) , mung kolom `title` , `summary` lan `description` sing diterjemahake.

## Aja Nerjemahake Jeneng Variabel

`Markdown` Digunakake minangka cithakan email, `YAML` minangka konfigurasi file basa, bakal ana parameter variabel (contone: ngisi ulang `${amount}` wis ditampa).

Jeneng variabel iki ora bakal dianggep minangka terjemahan basa Inggris `${varname}`

## Optimisasi Terjemahan Kanggo China, Jepang Lan Korea

### Yen Diterjemahake Menyang Basa Inggris, Huruf Pisanan Judhul Kanthi Otomatis Nganggo Huruf Kapital.

China, Jepang, lan Korea ora duwe huruf gedhe utawa cilik, nanging judhul Inggris umume huruf kapital huruf pisanan.

`i18` bisa ngenali judhul ing `MarkDown` , lan bakal kanthi otomatis nggunakake huruf kapital nalika nerjemahake menyang basa cilik.

Contone `为阅读体验而优化` bakal diterjemahake minangka `Optimized for Reading Experience` .

### Istilah Inggris Ing Basa Cina, Jepang, Korea Lan Cina Ora Diterjemahake

Dokumen saka China, Jepang lan Korea asring ngemot akeh istilah Inggris.

Terjemahan mesin saka basa Cina, Jepang lan Korea wis dadi basa non-Inggris, lan istilah asring diterjemahake bebarengan, kayata ukara Cina ing ngisor iki:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Yen sampeyan nggunakake Google utawa DeepL, loro-lorone salah nerjemahake istilah-istilah ing Inggris sing kudune tetep asli (jupuk Jepang lan Prancis minangka conto).

### Google Translate

Diterjemahake menyang `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Diterjemahake menyang `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` diterjemahake minangka `faucon` lan `Llama` diterjemahake minangka `lama` . Minangka tembung sing bener, ora kudu diterjemahake.

<img alt="" src="//p.3ti.site/1720199451.avif">

### Terjemahan DeepL

Diterjemahake menyang `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL `... `

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.situs Terjemahan

`i18` 's bakal ngenali istilah Inggris ing dokumen Cina, Jepang lan Korea lan tetep syarat.

Contone, asil terjemahan basa Jepang ing ndhuwur yaiku:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Terjemahan Prancis yaiku:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Mung yen ana spasi ing antarane tembung Inggris lan teks Cina, Jepang lan Korea utawa dawa Inggris luwih saka 1, tembung kasebut bakal dianggep minangka istilah.

`Cristiano Ronaldo` : `C罗`

## Bisa Digabungake `i18n.site` Bangunan Situs Web Multi-Basa

`i18` Digabungake menyang alat baris perintah kanggo bangunan situs web multi-basa [`i18n.site`](/i18n.site) .

Deleng dokumentasi saka [`i18n.site`](/i18n.site)

## Kode Open Source

Klien punika open source, lan 90 server % saka kode punika open source [Klik kene kanggo ndeleng kode sumber](/i18n.site/src) .

We are looking for sukarelawan kanggo melu ing pangembangan kode open source lan proofreading teks terjemahan.

Yen sampeyan kasengsem, mangga [→ Klik ing kene kanggo ngisi profil sampeyan](https://ggl.link/i18n) banjur gabung karo [mailing list](https://groups.google.com/u/2/g/i18n-site) kanggo komunikasi.

## Tetep Kontak

Mangga <button onclick="mailsub()">klik email iki kanggo langganan nganyari produk</button> lan <button onclick="webpush()">ngaktifake push browser</button> Kita bakal ngabari nalika nganyari produk.

/ rawuh ing [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) sosial kita [X.COM: @i18nSite](https://x.com/i18nSite)
