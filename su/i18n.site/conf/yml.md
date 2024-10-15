# .i18n/conf.yml

File konfigurasi pikeun `i18n.site` nyaéta `.i18n/conf.yml` sareng eusina nyaéta kieu :

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

Di antarana, `upload` ka `ext:` item konfigurasi hartina ngan `.md` bakal diunggah nalika medarkeun.

## Navigasi Luhur nav

`nav:` pilihan konfigurasi, pakait jeung menu napigasi di luhur kaca imah.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Diantarana, `i18n: home` pakait sareng `home: Home` dina `en/i18n.yml` (dimana `en` mangrupikeun basa sumber tina tarjamahan proyék).

Eusi `en/i18n.yml` nyaéta téks anu ditampilkeun dina ménu navigasi, anu bakal ditarjamahkeun dumasar kana `fromTo` dina konfigurasi, contona, ditarjamahkeun kana `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Saatos tarjamahan réngsé, anjeun tiasa ngarobih nilai tarjamahan `yml` , tapi ulah nambihan atanapi mupus konci tarjamahan `yml` .

### `use: Toc` , Template File Tunggal Sareng Outline

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` hartina rendering ngagunakeun `Toc` template, nu ngajadikeun hiji `Markdown` template tunggal.

`TOC` mangrupakeun singketan tina `Table of Contents` Nalika template ieu rendered, outline ieu `Markdown` file bakal dipintonkeun dina sidebar.

`url:` ngagambarkeun jalur file `Markdown` ( `/` pakait jeung diréktori akar `/README.md` , Ngaran koropak ieu merlukeun awalan uppercase jeung ahiran aksara leutik).

### `use: Md` , Template File Tunggal Tanpa Outline

Citakan `Md` sareng citakan `Toc` sami sareng duanana dianggo pikeun ngadamel `Markdown` file tunggal. Tapi `Md` template teu nembongkeun outline dina sidebar nu.

Anjeun tiasa ngaropea `use: Toc` dina konfigurasi di luhur ka `use: Md` , ngajalankeun `i18n.site` dina `md` diréktori deui, lajeng buka URL sawangan ngembangkeun pikeun niténan parobahan dina homepage.

### `use: Blog` Citakan Blog

Citakan blog nampilkeun daptar artikel (judul sareng abstrak) dina urutan waktos publikasi.

[→ Klik di dieu pikeun diajar ngeunaan konfigurasi husus](/i18n.site/conf/blog)

### `use: Doc` , Template Dokumén Multi-File

Dina file konfigurasi:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Nunjukkeun ngagunakeun `Doc` pikeun Rendering template.

`Doc` template ngarojong integrasi sababaraha `MarkDown` pikeun ngahasilkeun outlines dokumén pikeun proyék tunggal atawa sababaraha.

#### Sababaraha Proyék Sareng Sababaraha File

Konfigurasi `.i18n/conf.yml` dina `i18n:doc` nyaéta mode rendering multi-proyék multi-file.

Di dieu, `menu: NB demo1,demo2` , hartina ngagunakeun citakan `NB` pikeun nyieun menu turun-handap.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , nu mangrupakeun singketan tina `Name Breif` , hartina menu turun-handap bisa mintonkeun ngaran jeung slogan proyék.

`NB` ieu dituturkeun ku parameter `demo1,demo2` dibikeun ka eta.

Catetan : ** Henteu kedah aya spasi ** sateuacan sareng saatos koma `,` dina `demo1,demo2` .

Pikeun parameter di luhur, file indéks diréktori anu cocog nyaéta:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Hiji Proyék Sababaraha File

Upami anjeun ngan ukur gaduh hiji proyék, anjeun tiasa ngonpigurasikeunana sapertos kieu.

```
  - i18n: xxx
    use: Doc
```

##### Nalika url Kosong, Éta Standar Kana Nilai i18n

Lamun `url` teu ditulis, `url` ingkar kana nilai `i18n` Aturan ieu ogé mawa pangaruh pikeun citakan séjén.

Metodeu nulis di luhur sarua jeung `url: xxx` , sarta file pakait na nyaeta `en/xxx/TOC` .

#### Indéks Daptar Eusi TOC

`i18n.site` bakal ngaéksekusi `js` plug-in `.i18n/hook/after.tran/TOC.js` di gudang demo pikeun maca `TOC` file indéks diréktori pakait jeung `doc` konfigurasi template pikeun ngahasilkeun `json` outline diréktori.

Upami anjeun nganggo `doc` template, anjeun kedah gaduh plug-in ieu.

Upami anjeun ngawitan proyék `i18n.site` tina folder kosong, émut pikeun nyalin proyék demo `.i18n` kana diréktori anjeun.

Citakan `Doc` bakal ngajantenkeun daptar eusi outline dumasar kana `json` anu dihasilkeun.

##### Katerangan Eusi Lengkep

`en/blog/TOC` ieu di handap :

```
README.md

news/README.md
  news/begin.md
```

##### Anggo Indentasi Pikeun Nunjukkeun Tingkat

`README.md` dina baris kahiji `en/blog/TOC` di luhur pakait jeung `i18n.site` dina gambar di handap, nu ngaran proyék.

Dua garis salajengna ditémbongkeun saperti dina screenshot handap.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` pakait jeung `News` ,
`news/begin.md` pakait sareng `Our Product is Online !`

`TOC` file indented pikeun nunjukkeun hubungan hirarkis outline, ngarojong indentation multi-level, sarta komentar baris dimimitian ku `# ` .

##### Tingkat Indungna Ngan Ukur Nyerat Judul, Sanés Eusi.

Nalika aya sababaraha tingkatan indentation, tingkat indungna ngan ukur nyerat judul sareng sanés eusina. Upami teu kitu, tipografi bakal kacau.

##### Proyék README.md

Eusi tiasa ditulis dina item `README.md` , sapertos `en/demo2/README.md` .

Catet yén eusi file ieu henteu nunjukkeun daptar eusi, ku kituna disarankeun pikeun ngawatesan panjangna sareng nyerat bubuka pondok.

###### Slogan Proyék

Anjeun tiasa ningali yén `Deme Two` gaduh tagline proyék na di handap menu turun-handap `Your Project slogan` nami proyék outline katalog :

![](https://p.3ti.site/1721276842.avif)

Ieu pakait jeung baris kahiji `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Eusi sanggeus titik dua kahiji `:` judul-tingkat kahiji proyék `README.md` bakal dianggap salaku slogan proyék.

Pamaké ti Cina, Jepang sareng Korea, punten perhatikeun yén anjeun kedah nganggo titik dua lebar satengah `:` tibatan titik dua lebar.

##### Kumaha Carana Mindahkeun TOC Dina Bulk?

`TOC` file kedah disimpen dina diréktori basa sumber.

Contona, upami basa sumberna Cina, teras `TOC` di luhur nyaéta `zh/blog/TOC` .

Lamun basa sumber dirobah, Anjeun kudu bets mindahkeun `TOC` file tina basa nu tangtu dina proyék ka basa sejen.

Anjeun tiasa ningali paréntah di handap ieu:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Punten robih `en/` sareng `zh/` dina paréntah di luhur kana kode basa anjeun.

### Muatan Standar Tanpa Jalur Konfigurasi

Pikeun jalur anu tangtu diaksés, upami awalan jalur henteu dikonpigurasi dina `nav:` , file `MarkDown` anu saluyu sareng jalurna bakal dimuat sacara standar sareng didamel nganggo témplat `Md` .

Contona, upami `/test` diaksés, jeung `nav:` geus ngonpigurasi tanpa awalan jalur ieu, jeung basa browsing ayeuna Inggris (kode `en` ), `/en/test.md` bakal dimuat sacara standar sarta rendered maké template `Md` .

Lamun `/en/test.md` file ieu teu aya, standar `404` kaca bakal dipintonkeun.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">