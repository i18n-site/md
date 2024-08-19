# .i18n/conf.yml

`i18n.site` üçin profil `.i18n/conf.yml`

[`i18`](/i18) , `ignore:` we `i18n:` sazlamalaryndan başga konfigurasiýa faýly aşakdaky ýaly:

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

Olaryň arasynda `upload` dan `ext:` çenli konfigurasiýa elementi çap edilende diňe `.md` ýüklenjekdigini aňladýar.

## Ýokarky Nawigasiýa Nawig

Baş sahypanyň ýokarsyndaky nawigasiýa menýusyna laýyk gelýän `nav:` konfigurasiýa opsiýasy.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Olaryň arasynda `i18n: home` dan `en/i18n.yml` `home: Home` gelýär.

`en/i18n.yml` `zh/i18n.yml` köp dile terjime ediler.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Terjime gutaransoň, `yml` terjimäniň bahasyny üýtgedip bilersiňiz, ýöne `yml` terjime açaryny goşmaň ýa-da pozmaň.

### `use: Toc` , Ýekeje Faýl Şablony (Çyzgy Bilen)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` , ýekeje `Markdown` şablony görkezýän `Toc` şablony ulanyp görkezmegi aňladýar.

`TOC` gysgaltmasy `Table of Contents` Bu şablon görkezilende, bu `Markdown` faýlyň çyzgysy gapdal panelde görkeziler.

`url:` faýl ýoluny görkezýär ( `Markdown` `/README.md` katalogyna gabat gelýär `/` bu faýlyň ady baş harp prefiksi we kiçi harp goşulmasy talap edýär).

### `use: Md` , Ýekeje Faýl Şablony (Çyzgysy Ýok)

`Md` şablon we `Toc` şablon birmeňzeş we ikisi hem bir `Markdown` faýl görkezmek üçin ulanylýar. 3öne `Md` şablon gapdal panelde çyzgy görkezmeýär.

Aboveokardaky konfigurasiýada `use: Toc` `use: Md` -e üýtgedip, `md` katalogda `i18n.site` täzeden işledip bilersiňiz we baş sahypadaky üýtgeşmeleri synlamak üçin ösüşiň deslapky URL-sine girip bilersiňiz.

### Sazlama Ýoly Bolmazdan Deslapky Ýüklemek

Belli bir ýol girilse we onuň ýol prefiksi `nav:` -da düzülmedik bolsa, bu ýola gabat gelýän `MarkDown` faýl deslapky görnüşde ýüklener we `Md` şablon arkaly görkeziler.

Mysal üçin, `/test` girilse we `nav:` bu ýoldan düzülen bolsa we sahypa dili iňlis dili bolsa ( `en` kod), `/en/test.md` deslapky görnüşde ýüklener we `Md` şablon ulanylyp görkeziler.

`/en/test.md` bu faýl ýok bolsa, deslapky `404` sahypa görkeziler.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Köp Faýlly Şablon

Sazlama faýlynda:

```
  - i18n: blog
    use: Doc
```

Şablon görkezmek üçin `Doc` ulanýandygyny görkezýär.

`Doc` şablon, bir ýa-da birnäçe taslama üçin resminama çyzgylaryny döretmek üçin köp `MarkDown` birleşdirmegi goldaýar.

#### Projecteke Taslama (Birnäçe Faýl)

Aboveokardaky `blog` `Doc` elementli re modeim.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url Boş Bolsa, i18n Bahasyna Gabat Gelmeýär

`url` ýazylmadyk bolsa, `url` iň bahasy `i18n` den ybarat. Bu düzgün beýleki galyplar üçin hem güýje girýär.

Aboveokardaky ýazuw usuly `url: blog` deň we degişli faýl `en/blog/TOC` .

#### Birnäçe Taslama

`.i18n/conf.yml` -den `i18n:doc` yň konfigurasiýasy köp taslama re modeimidir.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Bu ýerde `menu: NB demo1,demo2` , açylýan menýuny görkezmek üçin `NB` şablony ulanmagy aňladýar.

`Name Breif` , gysgaltmasy bolan `NB` , açylýan menýu taslamanyň adyny we şygaryny görkezip biljekdigini aňladýar.

`NB` dan soň oňa `demo1,demo2` parametr gelýär.
Bellik : ** `demo1,demo2` dan `,` den öň we soň boşluk bolmaly ** .

Aboveokardaky parametrler üçin degişli katalog indeks faýly:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Mazmun Görkezijisi

0, `json` katalog çyzgysyny döretmek üçin `TOC` şablon konfigurasiýasyna gabat gelýän `doc` katalog indeks faýlyny okamak üçin demo ammarynda `js` plugin `i18n.site` ýerine ýetirer `.i18n/hook/after.tran/TOC.js`

`doc` şablon ulanýan bolsaňyz, bu plugin bolmaly.

`i18n.site` taslamany boş bukjadan başlasaňyz, `.i18n` demo taslamasyny katalogyňyza göçürmegi ýatdan çykarmaň.

`Doc` şablon döredilen `json` esaslanan mazmun tablisasyny görkezer.

##### Mazmuny Düşündiriş

`en/blog/TOC` Mazmuny aşakdaky ýaly :

```
README.md

news/README.md
  news/begin.md
```

##### Derejeleri Görkezmek Üçin Indentasiýa Ulanyň

Aboveokardaky `en/blog/TOC` nyň birinji hataryndaky `README.md` aşakdaky suratdaky `i18n.site` e gabat gelýär, bu taslamanyň ady.

Indiki iki setir aşakdaky skrinshotda görkezilişi ýaly.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` gabat `News` ,
`news/begin.md` `Our Product is Online !` gabat gelýär

`TOC` faýl, meýilnamanyň iýerarhiki baglanyşygyny görkezmek we köp derejeli indentasiýany goldamak üçin ýazylýar.

##### Ene-Ata Derejesi Diňe Mazmuny Däl-De, Adyny Ýazýar.

Birnäçe derejeli indentasiýa bolanda, ene-atanyň derejesi diňe mazmuny däl-de, adyny ýazýar. Otherwiseogsam, tipografiýa bulaşar.

##### Taslama README.md

Mazmun `en/demo2/README.md` ýaly `README.md` njy bentde ýazylyp bilner.

Bu faýlyň mazmunynyň mazmunynyň tablisasyny görkezmeýändigine üns beriň, şonuň üçin uzynlygy çäklendirmek we gysga giriş ýazmak maslahat berilýär.

###### Taslamanyň Şygary

`Your Project slogan` açylýan menýudan we katalog görnüşindäki taslama adynyň aşagynda `Deme Two` taslamasynyň belligini görüp bilersiňiz :

![](https://p.3ti.site/1721276842.avif)

Bu `en/demo2/README.md` birinji hataryna gabat gelýär :

```
# Demo Two : Your Project slogan
```

`README.md` birinji derejeli adynyň `:` nji sütüninden soň mazmun taslama şygary hökmünde kabul ediler.

Hytaýdan, Japanaponiýadan we Koreýadan gelen ulanyjylar, doly ini däl-de, ýarym ini sütün `:` ulanmalydygyny ýadyňyzdan çykarmaň.

##### TOC-Ny Nädip Köpeltmeli?

`TOC` faýl deslapky diliň katalogynda ýerleşdirilmeli.

Mysal üçin, çeşme dili hytaý bolsa, ýokardaky `TOC` `zh/blog/TOC` .

Çeşme dili üýtgedilen bolsa, taslamadaky belli bir diliň `TOC` faýlyny başga dile geçirmeli.

Aşakdaky buýruklara ýüz tutup bilersiňiz:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Aboveokardaky buýrukda `en/` we `zh/` dil koduňyza üýtgediň.