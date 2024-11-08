# .i18n/conf.yml

File konfigurasi kanggo `i18n.site` yaiku `.i18n/conf.yml` lan isine kaya ing ngisor iki :

```yaml
i18n:
  fromTo:
    en:
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Blog
addon:
  - i18n.addon/toc
```

Antarane, item konfigurasi `upload` nganti `ext:` tegese mung `.md` sing bakal diunggah nalika nerbitake.

## Pandhu Arah Ndhuwur

`nav:` , sing cocog karo menu navigasi ing sisih ndhuwur homepage.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Antarane wong-wong mau, `i18n: home` cocog karo `home: Home` ing `en/i18n.yml` (ing ngendi `en` minangka basa sumber terjemahan proyek).

`en/i18n.yml` isi minangka teks sing ditampilake ing menu navigasi, sing bakal diterjemahake miturut `fromTo` ing konfigurasi, contone, diterjemahake menyang `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Sawise terjemahan rampung, sampeyan bisa ngowahi nilai terjemahan `yml` , nanging aja nambah utawa mbusak kunci terjemahan `yml` .

### 0Cithakan Dokumen `use: Toc` Kanthi Garis

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tegese Rendering nggunakake `Toc` Cithakan, kang Rendering siji `Markdown` Cithakan.

`TOC` iku singkatan saka `Table of Contents` Nalika cithakan iki render, outline file `Markdown` iki bakal ditampilake ing sidebar.

`url:` nggantosi path file `Markdown` ( `/` cocog karo direktori root `/README.md` , jeneng berkas iki mbutuhake awalan gedhe lan seselan cilik).

### 0Cithakan Dokumen `use: Md` Tanpa Garis

Cithakan `Md` lan cithakan `Toc` padha lan loro-lorone digunakake kanggo nerjemahake `Markdown` file siji. Nanging `Md` cithakan ora nuduhake outline ing sidebar.

Sampeyan bisa ngowahi `use: Toc` ing konfigurasi ing ndhuwur dadi `use: Md` , mbukak `i18n.site` ing direktori `md` maneh, banjur bukak URL pratinjau pangembangan kanggo mirsani owah-owahan ing homepage.

### `use: Blog` Cithakan Blog

Cithakan blog nampilake dhaptar artikel (judul lan abstrak) miturut urutan wektu publikasi.

[→ Klik kene kanggo sinau babagan konfigurasi tartamtu](/i18n.site/conf/blog)

### `use: Doc` Templat Dokumen File

Ing file konfigurasi:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Nuduhake nggunakake `Doc` kanggo rendering cithakan.

Cithakan `Doc` ndhukung nggabungake pirang-pirang `MarkDown` kanggo ngasilake garis dokumen kanggo proyek siji utawa pirang-pirang.

#### Akeh Proyek Lan Macem-Macem File

Konfigurasi `.i18n/conf.yml` ing `i18n:doc` yaiku mode rendering multi-proyek multi-file.

Ing kene, `menu: NB demo1,demo2` , tegese nggunakake cithakan `NB` kanggo nggawe menu gulung mudhun.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , sing minangka singkatan saka `Name Breif` , tegese menu gulung mudhun bisa nampilake jeneng lan slogan proyek kasebut.

`NB` ngiring dening parameter `demo1,demo2` liwati menyang.

Cathetan : ** Ora ana spasi ** sadurunge lan sawise koma `,` ing `demo1,demo2` .

File indeks direktori sing cocog kanggo paramèter ing ndhuwur yaiku:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Proyek Siji Sawetara File

Yen sampeyan mung duwe siji project, sampeyan bisa ngatur minangka nderek.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Proyek siji kanthi pirang-pirang file ora ndhukung konfigurasi `url` minangka path root `/`
> Yen __conf.yml → nav:__ Ora ana path root sing dikonfigurasi, nalika ngakses homepage situs web, bakal kanthi otomatis ditulis maneh menyang URL pisanan ing konfigurasi `nav:` .
> Desain iki kanggo luwih mbedakake dokumen proyek, blog lan isi liyane liwat direktori.
> Disaranake nggunakake file siji lan kaca siji minangka kaca ngarep.

> [!TIP]
> Yen `url` ora ditulis, `url` dadi standar kanggo nilai `i18n` Aturan iki uga ditrapake kanggo cithakan liyane.

#### Indeks Daftar Isi TOC

Yen cithakan `use: Doc` diaktifake ing konfigurasi, mangga aktifake plug-in `i18n.addon/toc` ing `.i18n/conf.yml` Konfigurasi kaya ing ngisor iki :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` kanthi otomatis bakal nginstal lan nglakokaké plug-in iki, maca `TOC` file indeks direktori, lan generate `json` outline direktori.

Yen proyek siji karo pirang-pirang file, direktori root `TOC` minangka direktori sing cocog karo `url:` ing direktori basa sumber Contone, yen basa sumber Cina: file sing cocog karo `url: flashduty` yaiku `zh/flashduty/TOC` .

Yen ana pirang-pirang proyek lan pirang-pirang file, ora perlu ngatur `url:` Direktori root `TOC` minangka direktori sing cocog karo nilai `i18n` .

##### Katrangan Isi Rinci

`en/blog/TOC` Isine kaya ing ngisor iki :

```
README.md

news/README.md
  news/begin.md
```

##### Gunakake Indentasi Kanggo Nunjukake Level

`README.md` ing baris pisanan `en/blog/TOC` ing ndhuwur cocog karo `i18n.site` ing gambar ing ngisor iki, yaiku jeneng proyek.

Loro baris sabanjure ditampilake ing gambar ing ngisor iki.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` cocog karo `News` ,
`news/begin.md` cocog karo `Our Product is Online !`

`TOC` file indentasi kanggo nunjukake hubungan hierarkis outline, ndhukung indentasi multi-level, lan komentar baris diwiwiti karo `# ` .

##### Tingkat Wong Tuwa Mung Nulis Judhul, Ora Isi.

Nalika ana sawetara tingkat indentasi, tingkat induk mung nulis judhul lan ora isi. Yen ora, tipografi bakal kacau.

##### Proyek README.md

Isi bisa ditulis ing item `README.md` , kayata `en/demo2/README.md` .

Elinga yen isi file iki ora nuduhake tabel isi outline, supaya dianjurake kanggo matesi dawa lan nulis introduksi singkat.

###### Slogan Proyek

Sampeyan bisa ndeleng manawa `Deme Two` duwe `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Iki cocog karo baris pisanan `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Isi sawise titik titik `:` pisanan saka judhul proyek `README.md` tingkat pertama bakal dianggep minangka slogan proyek.

Pangguna saka China, Jepang lan Korea, elinga yen sampeyan kudu nggunakake titik titik setengah jembaré `:` tinimbang titik titik lebar lengkap.

##### Kepiye Carane Mindhah TOC Kanthi Akeh?

`TOC` file kudu diselehake ing direktori basa sumber.

Contone, yen basa sumber Cina, banjur `TOC` ndhuwur iku `zh/blog/TOC` .

Yen basa sumber diowahi, sampeyan kudu mindhah file `TOC` saka basa tartamtu ing proyek menyang basa liya.

Sampeyan bisa ngrujuk marang printah ing ngisor iki:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Mangga ngowahi `en/` lan `zh/` ing printah ndhuwur kanggo kode basa.

### Loading Standar Tanpa Path Konfigurasi

Kanggo path tartamtu sing diakses, yen awalan path ora dikonfigurasi ing `nav:` , file `MarkDown` sing cocog karo path bakal dimuat kanthi gawan lan digawe nggunakake cithakan `Md` .

Contone, yen `/test` diakses lan `nav:` dikonfigurasi tanpa ater-ater saka dalan iki, lan basa browsing saiki Inggris (kode `en` ), `/en/test.md` bakal dimuat minangka standar lan render nggunakake cithakan `Md` .

Yen `/en/test.md` file iki ora ana, standar `404` kaca bakal ditampilake.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">