# .i18n / conf.yml

Sazlama faýly `.i18n/conf.yml` `i18n.site`

`ignore:` We `i18n:` sazlamalaryndan başga [`i18`](/i18) konfigurasiýa faýly aşakdaky ýaly:

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

Şolaryň arasynda `ext:` konfigurasiýa elementi çap edilende diňe `.md` ýüklenjekdigini aňladýar `upload`

## Ýokarky Nawigasiýa Nawig

baş sahypanyň ýokarsyndaky nawigasiýa menýusyna laýyk gelýän konfigurasiýa opsiýalary `nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Olaryň arasynda `en/i18n.yml`中`home: Home` gabat `i18n: home` .

`zh/i18n.yml` ýaly köp dile terjime ediler `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Terjime gutaransoň, terjimäniň `yml` üýtgedip bilersiňiz, ýöne `yml` açaryny goşmaň ýa-da pozmaň.

### , Ýekeje Faýl Şablony (Çyzgy Bilen) `use: Toc`

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

diýmek, ýekeje `Markdown` şablon görkezýän `Toc` terjimesini ulanmagy aňladýar `use: Toc`

`TOC` gysgaltmasydyr `Table of Contents` Bu şablon görkezilende, bu `Markdown` faýlyň çyzgysy gapdal panelde görkeziler.

`Markdown` faýl ýoluny aňladýar ( `/` kök katalogyna gabat gelýär `/README.md` `url:` bu faýlyň ady baş harp prefiksi we kiçi harp goşulmasy talap edýär).

### , Ýekeje Faýl Şablony (Çyzgysy Ýok) `use: Md`

Şablon `Md` `Toc` deňdir, ikisi hem bir `Markdown` faýl görkezmek üçin ulanylýar. Şeýle-de bolsa `Md` şablon gapdal panelde çyzgy görkezmeýär.

Aboveokardaky konfigurasiýada `use: Md` üýtgedip, täzeden işledip bilersiňiz `i18n.site` `md` katalogda, soňra bolsa baş sahypadaky üýtgeşmeleri synlamak üçin ösüşiň deslapky URL-sine girip bilersiňiz `use: Toc`

### Sazlama Ýoly Bolmazdan Deslapky Ýüklemek

Belli bir ýoluň ýol prefiksi düzülmedik bolsa `nav:` Correspondingol bilen baglanyşykly `MarkDown` faýl deslapky görnüşde ýüklener we `Md` şablon bilen görkeziler.

Mysal üçin, baryp `/test` we `nav:` bu ýol bolmasa düzülen bolsa we sahypa dili iňlisçe (kod `en` ) bolsa, şablon deslapky görnüşde ýüklener `/en/test.md` we ulanylar `Md` .

Bu faýl ýok `/en/test.md` , deslapky `404` sahypa görkeziler!

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### Köp Faýlly Şablon `use: Doc`

Sazlama faýlynda:

```
  - i18n: blog
    use: Doc
```

Şablon görkezmek üçin ulanmagy görkezýär `Doc`

Şablon `Doc` bir ýa-da birnäçe taslama üçin resminama çyzgylaryny döretmek üçin birnäçe `MarkDown` birleşdirmegi goldaýar.

#### Projecteke Taslama (Birnäçe Faýl)

ýokardaky ýaly `Doc` taslamanyň ýeke-täk re modeimi `blog`

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url Boş Bolsa, i18n Bahasyna Gabat Gelmeýär

Writeazmasaňyz `url` `i18n` bahasyna `url` . Bu düzgün beýleki şablonlar üçin hem güýje girýär.

Aboveokardaky ýazuw usuly `url: blog` barlyga deňdir we degişli faýl `en/blog/TOC` .

#### Birnäçe Taslama

`.i18n/conf.yml` Konfigurasiýasy köp taslama `i18n:doc` modeimidir.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Bu ýerde, açylýan menýuny görkezmek üçin `NB` ulanmagy aňladýar `menu: NB demo1,demo2`

, açylan menýu taslamanyň adyny we şygaryny görkezip biljekdigini görkezýän `Name Breif` gysgaltmasy `NB`

`NB` `demo1,demo2` parametr berilýär.
Üns beriň `demo1,demo2` `,` ** we soň : **

Aboveokardaky parametrler üçin degişli katalog indeks faýly:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Mazmun Görkezijisi

Katalog görkezijisiniň `json` `doc` şablon konfigurasiýasyna laýyk `TOC` okamak üçin demo ammarynda `js` plugin `.i18n/hook/after.tran/TOC.js` ýerine ýetirer `i18n.site`

Şablon ulanýan bolsaňyz `doc` bu plugin bolmaly!

`i18n.site` boş bukjadan başlasaňyz, demo taslamasyndaky `.i18n` katalogyňyza göçürmegi ýatdan çykarmaň.

`Doc` döredilen `json` esasly mazmun tablisasyny görkezer.

##### Mazmuny Düşündiriş

Mazmuny aşakdaky : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Derejeleri Görkezmek Üçin Indentasiýa Ulanyň

Oveokarda `en/blog/TOC` birinji setirdäki `README.md` aşakdaky suratdaky `i18n.site` -a gabat gelýär, bu taslamanyň ady!

Indiki iki setir aşakdaky skrinshotda görkezilişi ýaly.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

gabat gelýär `News` , `news/README.md`
`Our Product is Online !` gabat gelýär `news/begin.md`

Faýl `TOC` meýilnamanyň iýerarhiki gatnaşyklaryny görkezmek üçin ýazylýar we köp derejeli indentasiýany goldaýar!

##### Ene-Ata Derejesi Diňe Mazmuny Däl-De, Adyny Ýazýar.

Birnäçe derejeli indentasiýa bolanda, ene-atanyň derejesi diňe mazmuny däl-de, adyny ýazýar. Otherwiseogsam, tipografiýa bulaşar.

##### Taslama README.md 

`README.md` , mysal üçin, `en/demo2/README.md` mazmuny ýazyp bilersiňiz.

Bu faýlyň mazmunynyň mazmunynyň tablisasyny görkezmeýändigini ýadyňyzdan çykarmaň, şonuň üçin uzynlygy çäklendirmek we gysga giriş ýazmak maslahat berilýär.

###### Taslamanyň Şygary

Görşüňiz `Your Project slogan` `Deme Two` Açylýan menýudan we katalog görnüşiniň taslamasynyň adyndan, onuň taslama şygary bar :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: birinji setire gabat gelýär `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Taslama, birinji derejeli adyň birinji `:` soň mazmun, taslama şygary hökmünde kabul ediler `README.md`

Hytaýdan, Japanaponiýadan we Koreýadan ulanyjylar, doly ini däl-de, ýarym ini içegäni ulanmagyňyzy haýyş edýäris `:`

##### TOC-Ny Nädip Köpeltmeli?

Faýl çeşme diliniň katalogynda ýerleşdirilmeli `TOC`

Mysal üçin, çeşme dili hytaýça bolsa, ýokardaky `zh/blog/TOC` `TOC`

Çeşme dili üýtgedilen bolsa, taslamadaky belli bir dilde `TOC` başga dile geçirmeli.

Aşakdaky buýruklara ýüz tutup bilersiňiz:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Aboveokardaky buýrukda dil koduňyza `zh/` `en/`


