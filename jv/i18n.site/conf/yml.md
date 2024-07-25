# .i18n/conf.yml

File konfigurasi yaiku `.i18n/conf.yml` `i18n.site`

Kajaba kanggo setelan `ignore:` lan `i18n:` saka [`i18`](/i18) , file konfigurasi kaya ing ngisor iki:

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

Ing antarane, item konfigurasi `ext:` saka `upload` tegese mung `.md` sing bakal diunggah nalika nerbitake.

## Pandhu Arah Ndhuwur

`nav:` , sing cocog karo menu navigasi ing sisih ndhuwur kaca ngarep.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Ing antarane, `i18n: home` cocog karo `en/i18n.yml`中`home: Home` .

`en/i18n.yml` bakal diterjemahake menyang pirang-pirang basa, kayata `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Sawise terjemahan rampung, sampeyan bisa ngowahi nilai `yml` ing terjemahan, nanging aja nambah utawa mbusak kunci terjemahan `yml` .

### `use: Toc` , Cithakan File Siji (Karo Outline)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tegese nggunakake rendering `Toc` , yaiku nggawe cithakan `Markdown` siji.

`TOC` iku singkatan saka `Table of Contents` `Markdown`

`url:` nggantosi path file `Markdown` ( `/` cocog karo direktori root `/README.md` , jeneng berkas iki mbutuhake awalan gedhe lan sufiks cilik).

### `use: Md` , Cithakan File Tunggal (Ora Ana Garis)

`Md` Cithakan padha karo `Toc` , loro-lorone digunakake kanggo nerjemahake file `Markdown` siji. Nanging `Md` cithakan ora nuduhake outline ing sidebar.

Sampeyan bisa ngowahi `use: Toc` ing konfigurasi ndhuwur dadi `use: Md` , mbukak `i18n.site` ing direktori `md` maneh, banjur bukak URL pratinjau pangembangan kanggo mirsani owah-owahan ing homepage.

### Loading Standar Tanpa Path Konfigurasi

Yen awalan path saka path tartamtu sing diakses ora dikonfigurasi ing `nav:` file `MarkDown` sing cocog karo path bakal dimuat kanthi standar lan dirender nggunakake template `Md` .

Contone, yen sampeyan ngunjungi `/test` , lan `nav:` wis dikonfigurasi tanpa path iki, lan basa kaca iku Inggris (kode `en` ), cithakan bakal dimuat `/en/test.md` lan render nggunakake `Md` minangka standar.

`/en/test.md` file iki ora ana, kaca standar `404` bakal ditampilake.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Template Multi-File

Ing file konfigurasi:

```
  - i18n: blog
    use: Doc
```

Nuduhake nggunakake `Doc` kanggo rendering cithakan.

`Doc` Cithakan ndhukung nggabungake pirang-pirang `MarkDown` kanggo ngasilake garis dokumen kanggo siji utawa sawetara proyek.

#### Proyek Tunggal (Multi File)

`blog` ing ndhuwur iku mode siji-proyek saka `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Nalika url Kosong, Iku Standar Kanggo Nilai i18n

Yen sampeyan ora nulis `url` , `url` kanggo nilai `i18n` .

Cara nulis ing ndhuwur padha karo duwe `url: blog` lan file sing cocog yaiku `en/blog/TOC` .

#### Pirang-Pirang Proyek

Konfigurasi `i18n:doc` `.i18n/conf.yml` mode multi-proyek.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ing kene, `menu: NB demo1,demo2` tegese nggunakake `NB` kanggo nggawe menu gulung mudhun.

`NB` , iku singkatan saka `Name Breif` , nuduhake yen menu gulung mudhun bisa nampilake jeneng lan slogan proyek.

`NB` diterusake karo parameter `demo1,demo2` sing diterusake.
Cathetan : ** Ora ana spasi ** sadurunge lan sawise koma `,` ing `demo1,demo2`

Kanggo paramèter ing ndhuwur, file indeks direktori sing cocog yaiku:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indeks Daftar Isi TOC

`i18n.site` Bakal nglakokake `js` plugin `.i18n/hook/after.tran/TOC.js` ing gudang demo kanggo maca file indeks direktori `doc` cocog karo konfigurasi cithakan `TOC` kanggo ngasilake `json` garis besar direktori.

Yen sampeyan nggunakake template `doc` , sampeyan kudu duwe plug-in iki.

Yen sampeyan miwiti proyek `i18n.site` saka folder kosong, elinga kanggo nyalin `.i18n` ing proyek demo menyang direktori sampeyan.

`Doc` bakal nerjemahake daftar isi adhedhasar `json` sing digawe.

##### Katrangan Isi Rinci

Isine kaya ing ngisor : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Gunakake Indentasi Kanggo Nunjukake Level

Ndhuwur `en/blog/TOC` `README.md` ing baris pisanan cocog karo `i18n.site` ing gambar ing ngisor iki, yaiku jeneng proyek.

Loro baris sabanjure ditampilake ing gambar ing ngisor iki.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

cocog karo `News` `news/README.md`
`news/begin.md` `Our Product is Online !`

`TOC` Berkas kasebut dilebokake kanggo nunjukake hubungan hierarkis outline lan ndhukung indentasi multi-level.

##### Tingkat Wong Tuwa Mung Nulis Judhul, Ora Isi.

Nalika ana sawetara tingkat indentasi, tingkat induk mung nulis judhul lan ora isi. Yen ora, tipografi bakal kacau.

##### Proyek README.md 

`README.md` saka proyek, contone, sampeyan bisa nulis isi ing `en/demo2/README.md` .

Elinga yen isi file iki ora nuduhake tabel isi outline, supaya dianjurake kanggo matesi dawa lan nulis introduksi singkat.

###### Slogan Proyek

Kaya `Your Project slogan` sampeyan deleng `Deme Two` ing ngisor menu gulung mudhun lan jeneng proyek garis katalog, ana slogan proyek kasebut :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: cocog karo baris pisanan `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Proyek `README.md` Isi sawise titik titik pisanan `:` ing judhul tingkat pisanan bakal dianggep minangka slogan proyek.

Pangguna saka China, Jepang lan Korea, elinga yen sampeyan kudu nggunakake titik titik setengah jembar tinimbang titik loro sing jembar `:`

##### Kepiye Carane Mindhah TOC Kanthi Akeh?

`TOC` Berkas kasebut kudu diselehake ing direktori basa sumber.

Contone, yen basa sumbere Cina, `TOC` ndhuwur iku `zh/blog/TOC` .

Yen basa sumber diowahi, sampeyan kudu batch mindhah `TOC` ing basa tartamtu ing project menyang basa liyane.

Sampeyan bisa ngrujuk marang printah ing ngisor iki:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Mangga owahi `en/` lan `zh/` ing printah ndhuwur kanggo kode basa.


