# Fitur Produk

`i18` minangka alat baris perintah kanggo terjemahan Markdown & Yaml

## Bisa Njaga Format Markdown Kanthi Sampurna

Ndhukung terjemahan tabel Markdown tanpa ngrusak format; ora nerjemahake tembung ing rumus matematika utawa tautan

Ndhukung terjemahan campuran HTML , isi ing tag `<pre>` lan `<code>` sing diselehake Markdown HTML `MarkDown` ora diterjemahake

## Bisa Ngerteni Rumus Matematika Lan Ngliwati Terjemahan

Rumus matematika diakoni lan terjemahan dilewati.

Kanggo carane nulis rumus matematika, mangga deleng [" Github Babagan Nulis Ekspresi Matematika"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Kemampuan Kanggo Nerjemahake Komentar Ing Potongan Kode

Kode inline lan potongan kode ora diterjemahake, nanging komentar ing kode kasebut bisa diterjemahake.

Komentar terjemahan kudu nuduhake basa sawise ` ``` ` , ` ```rust ` :

Saiki, ndhukung terjemahan anotasi ing `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [lan basa liyane](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Yen sampeyan pengin nerjemahake kabeh karakter non-Inggris ing kode, tandhani bagean kode karo ` ```i18n ` .

Yen basa pamrograman sing sampeyan butuhake ora kasedhiya, [hubungi kita](https://groups.google.com/g/i18n-site) .

## Command Line Loropaken

Ana akeh [alat abot](https://www.capterra.com/translation-management-software) sing kasedhiya kanggo ngatur dokumen terjemahan.

Kanggo programer sing kenal karo `git` , `vim` , lan `vscode` , nggunakake alat kasebut kanggo ngowahi dokumen lan ngatur versi mesthi bakal nambah biaya sinau.

`KISS` ( `Keep It Simple, Stupid` ) Antarane wong sing percaya prinsip, solusi tingkat perusahaan sinonim karo rumit, ora efisien, lan angel digunakake.

Terjemahan kudu ditindakake kanthi ngetik perintah lan ngrampungake kanthi siji klik Ora ana ketergantungan lingkungan sing rumit.

Aja nambah entitas kajaba perlu.

## Ora Ana Modifikasi, Ora Ana Terjemahan

Ana uga sawetara alat terjemahan baris perintah, kayata [translate-shell](https://github.com/soimort/translate-shell) .

Nanging, dheweke ora ndhukung modifikasi file identifikasi lan mung nerjemahake file sing diowahi kanggo nyuda biaya lan nambah efisiensi.

## Terjemahan Bisa Diowahi, Lan Terjemahan Mesin Ora Bakal Nimpa Modifikasi Sing Wis Ana.

Terjemahan bisa diowahi.

Ngowahi teks asli lan mesin-terjemahake maneh, modifikasi manual kanggo terjemahan ora bakal ditimpa (yen paragraf teks asli iki durung diowahi).

## Terjemahan Mesin Kualitas Paling Apik

Kita wis ngembangake teknologi terjemahan generasi anyar sing nggabungake kaluwihan teknis model terjemahan mesin tradisional lan model basa gedhe kanggo nggawe terjemahan akurat, lancar lan elegan.

Tes wuta nuduhake manawa kualitas terjemahan kita luwih apik dibandhingake karo layanan sing padha.

Kanggo entuk kualitas sing padha, jumlah panyuntingan manual sing dibutuhake dening Google Translate lan `ChatGPT` yaiku `2.67` kaping lan `3.15` kaping saka kita.

## <a rel=id href="#price" id="price"></a> Rega sing kompetitif banget

|                                                                                   | USD/yuta tembung |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Klik ing kene kanggo menehi wewenang lan kanthi otomatis i18n.site Pustaka github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) lan **nampa bonus $50** .

Cathetan: Jumlah karakter sing bisa ditagih = [jumlah unicode](https://en.wikipedia.org/wiki/Unicode) ing file sumber × jumlah basa ing terjemahan

## Dhukungan Terjemahan `YAML`

Alat kasebut mung nerjemahake nilai kamus ing `YAML` , dudu tombol kamus.

Adhedhasar `YAML` terjemahan, sampeyan bisa kanthi gampang nggawe solusi internasional kanggo macem-macem basa pamrograman.

## Ndhukung Terjemahan `HOGO` Konfigurasi Header

Ndhukung konfigurasi header saka blog statis jinis [HOGO](https://github.com/gohugoio/hugo) , lan mung nerjemahake kolom `title` , `summary` , `brief` , lan `description` .

## Aja Nerjemahake Jeneng Variabel

`Markdown` digunakake minangka cithakan email, `YAML` digunakake minangka konfigurasi file basa, lan bakal ana parameter variabel (contone: ngisi ulang `${amount}` wis ditampa).

Jeneng variabel kaya `${varname}` ora bakal dianggep minangka terjemahan basa Inggris.

## Optimisasi Terjemahan Kanggo China, Jepang Lan Korea

### Yen Diterjemahake Menyang Basa Inggris, Huruf Pisanan Judhul Kanthi Otomatis Nganggo Huruf Kapital.

China, Jepang, lan Korea ora duwe huruf gedhe lan cilik, nanging konvensi kanggo judhul Inggris kanggo huruf kapital pisanan.

`i18` bisa ngenali judhul ing `MarkDown` , lan bakal kanthi otomatis huruf kapital huruf pisanan nalika nerjemahake menyang basa cilik-sensitif.

Contone, `为阅读体验而优化` bakal diterjemahake dadi `Optimized for Reading Experience` .

### Istilah Inggris Ing Basa Cina, Jepang, Korea Lan Cina Ora Diterjemahake

Dokumen saka China, Jepang lan Korea asring ngemot akeh istilah Inggris.

Terjemahan mesin saka basa Cina, Jepang lan Korea wis dadi basa non-Inggris, lan istilah asring diterjemahake bebarengan, kayata ukara Cina ing ngisor iki:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Yen sampeyan nggunakake Google utawa DeepL, loro-lorone salah nerjemahake istilah Inggris sing kudune tetep asli (conto Jepang lan Prancis).

### Google Translate

`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` menyang Jepang :

![](//p.3ti.site/1720199391.avif)

`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` menyang basa Prancis :

`Falcon` dijarwakake dadi `faucon` lan `Llama` dijarwakake dadi `lama` . Minangka jeneng sing tepat, ora kudu diterjemahake.

![](//p.3ti.site/1720199451.avif)

### Terjemahan DeepL

`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` menyang Jepang :

![](//p.3ti.site/1720199550.avif)

DeepL `... `

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.situs Terjemahan

Terjemahan `i18` bakal ngenali istilah Inggris ing dokumen Cina, Jepang lan Korea lan tetep syarat kasebut.

Contone, asil terjemahan basa Jepang ing ndhuwur yaiku:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Terjemahan Prancis yaiku:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Mung yen ana spasi ing antarane tembung Inggris lan teks Cina, Jepang lan Korea utawa dawa Inggris luwih saka 1, tembung kasebut bakal dianggep minangka istilah.

Contone: `C罗` bakal diterjemahake dadi `Cristiano Ronaldo` .

## Bisa Digabung Karo Luwih Saka `i18n.site` Basa Kanggo Mbangun Situs Web

`i18` digabungake menyang alat baris perintah bangunan situs web multi-basa [`i18n.site`](/i18n.site) .

Deleng dokumentasi [`i18n.site`](/i18n.site) kanggo rincian.

## Kode Open Source

Klien punika open source, lan sisih 90 % saka kode punika open source [Klik kene kanggo ndeleng kode sumber](/i18n.site/c/src) .

We are looking for sukarelawan kanggo melu ing pangembangan kode open source lan proofreading teks terjemahan.

Yen sampeyan kasengsem, mangga [→ Klik ing kene kanggo ngisi profil sampeyan](https://ggl.link/i18n) banjur gabung karo [mailing list](https://groups.google.com/u/2/g/i18n-site) kanggo komunikasi.

## Tetep Kontak

Mangga <button onclick="mailsub()">klik email iki kanggo langganan nganyari produk</button> lan <button onclick="webpush()">ngaktifake push browser</button> Kita bakal ngabari nalika nganyari produk.

/ rawuh ing [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) sosial kita [X.COM: @i18nSite](https://x.com/i18nSite)