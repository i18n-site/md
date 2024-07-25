# .i18n/conf.yml

File konfigurasi nyaéta `.i18n/conf.yml` `i18n.site`

Iwal ti `ignore:` jeung `i18n:` setélan tina [`i18`](/i18) , file konfigurasi nyaéta kieu:

```yaml
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
    use: Doc
```

Di `.md` , item konfigurasi `ext:` tina `upload`

## Navigasi Luhur nav

`nav:` pilihan konfigurasi, pakait jeung menu napigasi di luhur kaca imah.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Di `en/i18n.yml` `home: Home` `i18n: home`

`en/i18n.yml` bakal ditarjamahkeun kana sababaraha basa, sapertos `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Saatos tarjamahan réngsé, anjeun tiasa ngarobih `yml` tina tarjamahan, tapi henteu nambihan atanapi ngahapus konci tarjamahan `yml` .

### `use: Toc` , Template File Tunggal (Kalawan Outline)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` hartina make `Toc` rendering, nu ngajadikeun hiji `Markdown` template.

`TOC` nyaéta singketan tina `Table of Contents` `Markdown`

`url:` ngawakilan jalur file tina `Markdown` ( `/` pakait jeung diréktori akar `/README.md` , ngaran koropak ieu merlukeun awalan hurup gede jeung sufiks leutik).

### `use: Md` , Template File Tunggal (Teu Aya Outline)

`Md` Citakan sarua jeung `Toc` , duanana dipaké pikeun nyieun hiji `Markdown` file. Nanging `Md` témplat henteu nunjukkeun garis dina sidebar.

Anjeun tiasa ngaropea `use: Toc` dina konfigurasi di luhur ka `use: Md` , ngajalankeun `i18n.site` dina `md` diréktori deui, lajeng buka URL sawangan ngembangkeun pikeun niténan parobahan dina homepage.

### Muatan Standar Tanpa Jalur Konfigurasi

Upami awalan jalur tina jalur anu tangtu anu diaksés henteu dikonpigurasikeun dina `nav:` file `MarkDown` anu pakait sareng jalur éta bakal dimuat sacara standar sareng didamel nganggo template `Md` .

Contona, lamun didatangan `/test` , sarta `nav:` geus ngonpigurasi tanpa jalur ieu, sarta basa kaca nyaeta Inggris (kode `en` ), template bakal dimuat `/en/test.md` jeung rendered ngagunakeun `Md` sacara standar.

`/en/test.md` file ieu henteu aya, halaman standar `404` bakal ditingalikeun.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Template Multi-File

Dina file konfigurasi:

```
  - i18n: blog
    use: Doc
```

Nunjukkeun ngagunakeun `Doc` pikeun rendering template.

`Doc` Citakan ngarojong integrasi sababaraha `MarkDown` pikeun ngahasilkeun outlines dokumén pikeun hiji atawa sababaraha proyék.

#### Proyék Tunggal (Sababaraha File)

`blog` di luhur mangrupakeun mode single-proyék tina `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Nalika url Kosong, Éta Standar Kana Nilai i18n

Upami anjeun henteu nyerat `url` , `url` kana nilai `i18n` .

Metodeu nulis di luhur sarua jeung ngabogaan `url: blog` sarta file pakait na nyaeta `en/blog/TOC` .

#### Sababaraha Proyék

Konfigurasi `i18n:doc` `.i18n/conf.yml` modeu multiproyék.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Di dieu, `menu: NB demo1,demo2` hartina ngagunakeun `NB` pikeun nyieun menu turun-handap.

`NB` , nyaéta singketan tina `Name Breif` , nunjukkeun yén ménu turun-handap tiasa nampilkeun nami sareng slogan proyék.

`NB` ieu dituturkeun ku parameter `demo1,demo2` dibikeun ka eta.
Catet yén teu kedah aya spasi ** sateuacan sareng saatos koma `,` `demo1,demo2` : **

Berkas indéks diréktori anu cocog pikeun parameter di luhur nyaéta:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indéks Daptar Eusi TOC

`i18n.site` Bakal ngaéksekusi `js` plugin `.i18n/hook/after.tran/TOC.js` di gudang demo pikeun maca file indéks diréktori `doc` saluyu jeung konfigurasi template `TOC` pikeun ngahasilkeun `json` tina outline diréktori.

Upami anjeun nganggo template `doc` , anjeun kedah gaduh plug-in ieu.

Upami anjeun ngamimitian proyék `i18n.site` tina polder kosong, émut pikeun nyalin `.i18n` dina proyék demo ka diréktori anjeun.

`Doc` Citakan bakal nyieun outline daptar eusi dumasar kana `json` dihasilkeun.

##### Katerangan Eusi Lengkep

Eusi ieu di : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Anggo Indentasi Pikeun Nunjukkeun Tingkat

Di luhur `en/blog/TOC` `README.md` dina baris kahiji pakait jeung `i18n.site` dina gambar di handap, nu ngaran proyék.

Dua garis salajengna ditémbongkeun saperti dina screenshot handap.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` pakait jeung `News` ,
`news/begin.md` `Our Product is Online !`

`TOC` Koropakna di-indent pikeun nunjukkeun hubungan hierarkis outline sareng ngadukung indentasi multi-level.

##### Tingkat Indungna Ngan Ukur Nyerat Judul, Sanés Eusi.

Nalika aya sababaraha tingkatan indentation, tingkat indungna ngan ukur nyerat judul sareng sanés eusina. Upami teu kitu, tipografi bakal kacau.

##### Proyék README.md 

`README.md` tina proyék, contona, anjeun tiasa nyerat eusi dina `en/demo2/README.md` .

Catet yén eusi file ieu henteu nunjukkeun daptar eusi, ku kituna disarankeun pikeun ngawatesan panjangna sareng nyerat bubuka pondok.

###### Slogan Proyék

Sakumaha anjeun tiasa tingali `Deme Two` di handap menu turun-handap sareng ngaran proyék outline katalog, aya slogan proyék na : `Your Project slogan`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: pakait jeung baris kahiji `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Proyék `README.md` Eusi sanggeus titik `:` kahiji dina judul tingkat kahiji bakal dianggap salaku slogan proyék.

Pamaké ti Cina, Jepang sareng Korea, punten perhatikeun yén anjeun kedah nganggo titik dua lebar satengah `:`

##### Kumaha Carana Mindahkeun TOC Dina Bulk?

`TOC` Koropak kedah disimpen dina diréktori basa sumber.

Contona, upami basa sumberna `zh/blog/TOC` , teras `TOC`

Lamun basa sumber dirobah, Anjeun kudu bets mindahkeun `TOC` dina basa nu tangtu dina proyék ka basa sejen.

Anjeun tiasa ningali paréntah di handap ieu:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Punten modifikasi `en/` sareng `zh/` dina paréntah di luhur kana kode basa anjeun.


