# .i18n/conf.yml

Profil kanggo `i18n.site` yaiku `.i18n/conf.yml` .

Kajaba kanggo setelan [`i18`](/i18) , `ignore:` lan `i18n:` , file konfigurasi kaya ing ngisor iki:

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

Antarane, item konfigurasi `upload` nganti `ext:` tegese mung `.md` sing bakal diunggah nalika nerbitake.

## Pandhu Arah Ndhuwur

`nav:` , sing cocog karo menu navigasi ing sisih ndhuwur kaca ngarep.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Antarane wong-wong mau, `i18n: home` cocog karo `home: Home` ing `en/i18n.yml` .

`en/i18n.yml` bakal diterjemahake menyang pirang-pirang basa, kayata `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Sawise terjemahan rampung, sampeyan bisa ngowahi nilai terjemahan `yml` , nanging aja nambah utawa mbusak kunci terjemahan `yml` .

### `use: Toc` , Cithakan File Siji (Karo Outline)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tegese Rendering nggunakake `Toc` Cithakan, kang Rendering siji `Markdown` Cithakan.

`TOC` iku singkatan saka `Table of Contents` Nalika cithakan iki render, outline file `Markdown` iki bakal ditampilake ing sidebar.

`url:` nggantosi path file `Markdown` ( `/` cocog karo direktori root `/README.md` , jeneng berkas iki mbutuhake awalan gedhe lan seselan cilik).

### `use: Md` , Cithakan File Tunggal (Ora Ana Garis)

Cithakan `Md` lan cithakan `Toc` padha lan loro-lorone digunakake kanggo nerjemahake `Markdown` file siji. Nanging `Md` cithakan ora nuduhake outline ing sidebar.

Sampeyan bisa ngowahi `use: Toc` ing konfigurasi ing ndhuwur dadi `use: Md` , mbukak `i18n.site` ing direktori `md` maneh, banjur bukak URL pratinjau pangembangan kanggo mirsani owah-owahan ing homepage.

### Loading Standar Tanpa Path Konfigurasi

Yen path tartamtu diakses lan awalan path ora dikonfigurasi ing `nav:` , file `MarkDown` sing cocog karo path bakal dimuat kanthi gawan lan digawe nggunakake cithakan `Md` .

Contone, yen `/test` diakses, lan `nav:` dikonfigurasi tanpa path iki, lan basa kaca iku Inggris (kode `en` ), `/en/test.md` bakal dimuat minangka standar lan render nggunakake cithakan `Md` .

Yen `/en/test.md` file iki ora ana, standar `404` kaca bakal ditampilake.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Template Multi-File

Ing file konfigurasi:

```
  - i18n: blog
    use: Doc
```

Nuduhake nggunakake `Doc` kanggo rendering cithakan.

Cithakan `Doc` ndhukung nggabungake pirang-pirang `MarkDown` kanggo ngasilake garis dokumen kanggo proyek siji utawa pirang-pirang.

#### Proyek Tunggal (Multi File)

`blog` ing ndhuwur iku mode siji-item saka `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Nalika url Kosong, Iku Standar Kanggo Nilai i18n

Yen `url` ora ditulis, `url` dadi standar kanggo nilai `i18n` Aturan iki uga ditrapake kanggo cithakan liyane.

Cara nulis ing ndhuwur padha karo `url: blog` , lan file sing cocog yaiku `en/blog/TOC` .

#### Pirang-Pirang Proyek

Konfigurasi `i18n:doc` saka `.i18n/conf.yml` yaiku mode multi-proyek.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ing kene, `menu: NB demo1,demo2` , tegese nggunakake cithakan `NB` kanggo nggawe menu gulung mudhun.

`NB` , yaiku singkatan saka `Name Breif` , tegese menu gulung mudhun bisa nampilake jeneng lan slogan proyek kasebut.

`NB` ngiring dening parameter `demo1,demo2` liwati menyang.
Cathetan : ** Ora ana spasi ** sadurunge lan sawise koma `,` ing `demo1,demo2` .

File indeks direktori sing cocog kanggo paramèter ing ndhuwur yaiku:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indeks Daftar Isi TOC

`i18n.site` bakal nglakokake `js` plug-in `.i18n/hook/after.tran/TOC.js` ing gudang demo kanggo maca file indeks direktori `doc` sing cocog karo konfigurasi cithakan `TOC` kanggo ngasilake garis `json` direktori.

Yen sampeyan nggunakake template `doc` , sampeyan kudu duwe plug-in iki.

Yen sampeyan miwiti proyek `i18n.site` saka folder kosong, elinga nyalin proyek demo `.i18n` menyang direktori sampeyan.

Cithakan `Doc` bakal nerjemahake outline daftar isi adhedhasar `json` sing digawe.

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

`TOC` file indentasi kanggo nunjukake hubungan hierarki outline lan ndhukung indentasi multi-level.

##### Tingkat Wong Tuwa Mung Nulis Judhul, Ora Isi.

Nalika ana sawetara tingkat indentasi, tingkat induk mung nulis judhul lan ora isi. Yen ora, tipografi bakal kacau.

##### Proyek README.md

Isi bisa ditulis ing item `README.md` , kayata `en/demo2/README.md` .

Elinga yen isi file iki ora nuduhake tabel isi outline, supaya dianjurake kanggo matesi dawa lan nulis introduksi singkat.

###### Slogan Proyek

Sampeyan bisa ndeleng `Your Project slogan` `Deme Two` duwe tagline proyek ing ngisor menu gulung mudhun lan jeneng proyek garis katalog :

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