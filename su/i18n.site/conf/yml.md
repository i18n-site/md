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

`nav:` pilihan konfigurasi, pakait jeung menu napigasi di luhureun homepage.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Diantarana, `i18n: home` pakait sareng `home: Home` dina `en/i18n.yml` (dimana `en` mangrupikeun basa sumber tina tarjamahan proyék).

Eusi `en/i18n.yml` nyaéta téks anu ditampilkeun dina ménu navigasi, anu bakal ditarjamahkeun dumasar kana `fromTo` dina konfigurasi, contona, ditarjamahkeun kana `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Saatos tarjamahan réngsé, anjeun tiasa ngarobih nilai tarjamahan `yml` , tapi ulah nambihan atanapi ngahapus konci tarjamahan `yml` .

### 0Templat Dokumén `use: Toc` Sareng Outline

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` hartina rendering ngagunakeun `Toc` template, nu ngajadikeun hiji `Markdown` template tunggal.

`TOC` mangrupakeun singketan tina `Table of Contents` Nalika template ieu rendered, outline ieu `Markdown` file bakal dipintonkeun dina sidebar.

`url:` ngagambarkeun jalur file `Markdown` ( `/` pakait jeung diréktori akar `/README.md` , Ngaran koropak ieu merlukeun awalan uppercase jeung ahiran aksara leutik).

### `use: Md` Tanpa Garis

Citakan `Md` sareng citakan `Toc` sami sareng duanana dianggo pikeun ngadamel `Markdown` file tunggal. Tapi `Md` template teu nembongkeun outline dina sidebar nu.

Anjeun tiasa ngaropea `use: Toc` dina konfigurasi di luhur ka `use: Md` , ngajalankeun `i18n.site` dina `md` diréktori deui, lajeng buka URL sawangan ngembangkeun pikeun niténan parobahan dina homepage.

### `use: Blog` Citakan Blog

Citakan blog nampilkeun daptar artikel (judul sareng abstrak) dina urutan waktos publikasi.

[→ Klik di dieu pikeun diajar ngeunaan konfigurasi husus](/i18n.site/conf/blog)

### `use: Doc` File

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

`NB` dituturkeun ku parameter `demo1,demo2` disalurkeun ka dinya.

Catetan : ** Henteu kedah aya spasi ** sateuacan sareng saatos koma `,` dina `demo1,demo2` .

Berkas indéks diréktori anu cocog pikeun parameter di luhur nyaéta:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Proyék Tunggal Sababaraha File

Upami anjeun ngan ukur gaduh hiji proyék, anjeun tiasa ngonpigurasikeunana sapertos kieu.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Proyék tunggal sareng sababaraha file henteu ngadukung konfigurasi `url` salaku jalur akar `/`
> Upami __conf.yml → nav:__ Teu aya jalur akar anu dikonpigurasi, nalika ngaksés halaman utama halaman wéb, éta bakal otomatis ditulis deui kana URL anu munggaran dina konfigurasi `nav:` .
> Desain ieu keur hadé ngabedakeun dokumén proyék, blog jeung eusi lianna ngaliwatan directories.
> Disarankeun ngagunakeun file tunggal sareng halaman tunggal salaku halaman utama.

> [!TIP]
> Lamun `url` teu ditulis, `url` ingkar kana nilai `i18n` Aturan ieu ogé mawa pangaruh pikeun citakan séjén.

#### Indéks Daptar Eusi TOC

Upami citakan `use: Doc` diaktipkeun dina konfigurasi, mangga aktipkeun plug-in `i18n.addon/toc` in `.i18n/conf.yml` Konfigurasina kieu :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` bakal otomatis masang sareng ngaéksekusi plug-in ieu, baca `TOC` file indéks diréktori, sareng ngahasilkeun `json` garis diréktori.

Upami éta mangrupikeun proyék tunggal sareng sababaraha file, diréktori akar `TOC` mangrupikeun diréktori anu cocog sareng `url:` dina diréktori basa sumber Contona, upami basa sumberna Cina: file anu cocog sareng `url: flashduty` nyaéta `zh/flashduty/TOC` .

Upami éta sababaraha proyék sareng sababaraha file, henteu kedah ngonpigurasikeun `url:` Diréktori akar `TOC` mangrupikeun diréktori anu cocog sareng nilai `i18n` .

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

Lamun aya sababaraha tingkat indentation, tingkat indungna ngan nulis judul teu eusi. Upami teu kitu, tipografi bakal kacau.

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

Contona, upami `/test` diaksés jeung `nav:` geus ngonpigurasi tanpa awalan jalur ieu, jeung basa browsing ayeuna Inggris (kode `en` ), `/en/test.md` bakal dimuat sacara standar sarta rendered maké template `Md` .

Lamun `/en/test.md` file ieu teu aya, standar `404` kaca bakal dipintonkeun.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">