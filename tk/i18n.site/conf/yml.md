# .i18n/conf.yml

`i18n.site` üçin konfigurasiýa faýly `.i18n/conf.yml` , mazmuny aşakdaky ýaly :

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

Olaryň arasynda `upload` dan `ext:` e çenli konfigurasiýa elementi çap edilende diňe `.md` ýüklenjekdigini aňladýar.

## Ýokarky Nawigasiýa Nawig

Baş sahypanyň ýokarsyndaky nawigasiýa menýusyna laýyk gelýän `nav:` konfigurasiýa opsiýasy.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Olaryň arasynda `i18n: home` `en/i18n.yml` -den `home: Home` e gabat gelýär (bu ýerde `en` taslamanyň terjimesiniň çeşmesi dili).

`en/i18n.yml` mazmun nawigasiýa menýusynda görkezilen tekstdir, konfigurasiýada `fromTo` e görä terjime ediler, mysal üçin `zh/i18n.yml` e terjime ediler.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Terjime gutaransoň, `yml` terjimäniň bahasyny üýtgedip bilersiňiz, ýöne `yml` terjime açaryny goşmaň ýa-da pozmaň.

### `use: Toc` Çyzykly Resminama Şablony

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` , ýekeje `Markdown` şablony görkezýän `Toc` şablony ulanyp görkezmegi aňladýar.

`TOC` - `Table of Contents` -iň gysgaldylyşy. Bu şablon görkezilende, bu `Markdown` faýlyň çyzgysy gapdal panelde görkeziler.

`url:` faýl ýoluny görkezýär `Markdown` `/` kök katalogyna `/README.md` gelýär, bu faýl ady baş harp prefiksi we kiçi harp goşulmasy talap edýär).

### `use: Md` Çyzgysyz Resminama Şablony

`Md` şablon we `Toc` şablon birmeňzeş we ikisi hem bir `Markdown` faýl görkezmek üçin ulanylýar. 3öne `Md` şablon gapdal panelde çyzgy görkezmeýär.

Aboveokardaky konfigurasiýada `use: Toc` `use: Md` -e üýtgedip, `md` katalogda `i18n.site` täzeden işledip bilersiňiz we baş sahypadaky üýtgeşmeleri synlamak üçin ösüşiň deslapky URL-sine girip bilersiňiz.

### `use: Blog` Blog Galyplary

Blog şablony neşir edilýän wagt tertibi boýunça makalalaryň (atlaryň we tezisleriň) sanawyny görkezýär.

[Specific Belli konfigurasiýa barada öwrenmek üçin şu ýere basyň](/i18n.site/conf/blog)

### `use: Doc` Faýl Resminama Şablonlary

Sazlama faýlynda:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Şablon görkezmek üçin `Doc` ulanýandygyny görkezýär.

`Doc` şablon, bir ýa-da birnäçe taslama üçin resminama çyzgylaryny döretmek üçin köp `MarkDown` birleşdirmegi goldaýar.

#### Birnäçe Taslama We Birnäçe Faýl

`i18n:doc` de `.i18n/conf.yml` -yň konfigurasiýasy köp taslamaly köp faýl görkeziş tertibi.

Bu ýerde `menu: NB demo1,demo2` , açylýan menýuny görkezmek üçin `NB` şablony ulanmagy aňladýar.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`Name Breif` , gysgaltmasy bolan `NB` , açylýan menýu taslamanyň adyny we şygaryny görkezip biljekdigini aňladýar.

`NB` dan soň oňa `demo1,demo2` parametr gelýär.

Bellik : ** `demo1,demo2` dan `,` den öň we soň ** bolmaly däldir!

Aboveokardaky parametrler üçin degişli katalog indeks faýly:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Projecteke Taslama Birnäçe Faýl

Diňe bir taslamaňyz bar bolsa, ony aşakdaky ýaly düzüp bilersiňiz.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Birnäçe faýlly ýeke taslama 0 kök `/` hökmünde `url` sazlamagy goldamaýar
> Eger __conf.yml nav:__ Hiç hili kök ýoly düzülmedik bolsa, web sahypasynyň baş sahypasyna gireniňizde, `nav:` konfigurasiýasy boýunça ilkinji URL-ä awtomatiki ýazylar.
> Bu dizaýn, taslama resminamalaryny, bloglary we beýleki mazmuny kataloglar arkaly has gowy tapawutlandyrmak üçin.
> Baş sahypa hökmünde bir faýly we bir sahypany ulanmak maslahat berilýär.

> [!TIP]
> `url` ýazylmadyk bolsa, `url` bahasy `i18n` e deňdir. Bu düzgün beýleki galyplar üçin hem güýje girýär.

#### TOC Mazmun Görkezijisi

Eger konfigurasiýada `use: Doc` şablon açyk bolsa, `.i18n/conf.yml` de `i18n.addon/toc` -nji plugin açmagyňyzy haýyş edýäris. Sazlama aşakdaky ýaly :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` bu plagini awtomatiki gurar we ýerine ýetirer, `TOC` katalog indeks faýlyny okar we `json` katalog çyzgysyny döreder.

Birnäçe faýlly bir taslama bolsa, kök katalogy `TOC` çeşme dil katalogynda `url:` e gabat gelýän katalogdyr. Mysal üçin, çeşme dili hytaýça bolsa: `url: flashduty` e gabat gelýän faýl `zh/flashduty/TOC` .

Birnäçe taslama we birnäçe faýl bolsa, `url:` düzmegiň zerurlygy ýok. `TOC` -iň kök katalogy `i18n` iň bahasyna laýyk gelýän katalogdyr.

##### Mazmuny Düşündiriş

`en/blog/TOC` Mazmuny aşakdaky ýaly :

```
README.md

news/README.md
  news/begin.md
```

##### Derejeleri Görkezmek Üçin Indentasiýa Ulanyň

Aboveokardaky `en/blog/TOC` -nyň birinji hataryndaky `README.md` aşakdaky suratdaky `i18n.site` e gabat gelýär, bu taslamanyň ady.

Indiki iki setir aşakdaky skrinshotda görkezilişi ýaly.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` gabat `News` ,
`news/begin.md` `Our Product is Online !` e gabat gelýär

`TOC` faýl, meýilnamanyň iýerarhiki baglanyşygyny görkezmek, köp derejeli indentasiýany goldamak we `# ` den başlap setir düşündirişleri görkezmek üçin ýazylýar.

##### Ene-Ata Derejesi Diňe Mazmuny Däl-De, Adyny Ýazýar.

Birnäçe derejeli indentasiýa bolanda, ene-atanyň derejesi diňe mazmuny däl-de, adyny ýazýar. Otherwiseogsam, tipografiýa bulaşar.

##### Taslama README.md

Mazmuny `en/demo2/README.md` ýaly `README.md` njy bentde ýazyp bolýar.

Bu faýlyň mazmunynyň mazmunynyň tablisasyny görkezmeýändigine üns beriň, şonuň üçin uzynlygy çäklendirmek we gysga giriş ýazmak maslahat berilýär.

###### Taslamanyň Şygary

`Your Project slogan` açylýan menýudan we katalog görnüşindäki taslama adynyň aşagynda `Deme Two` taslamasynyň belligini görüp bilersiňiz :

![](https://p.3ti.site/1721276842.avif)

Bu `en/demo2/README.md` -nyň birinji hataryna gabat gelýär :

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

Aboveokardaky buýrukdaky `en/` we `zh/` dil koduňyza üýtgediň.

### Sazlama Ýoly Bolmazdan Deslapky Ýüklemek

Belli bir ýol üçin, ýol prefiksi `nav:` -da düzülmedik bolsa, bu ýol bilen gabat gelýän `MarkDown` faýl deslapky görnüşde ýüklener we `Md` şablon arkaly görkeziler.

Mysal üçin, `/test` a girilse we `nav:` bu ýoluň prefiksi bolmazdan düzülen bolsa we häzirki gözleg dili iňlis dili bolsa ( `en` kod), `/en/test.md` deslapky görnüşde ýüklener we `Md` şablon ulanylyp görkeziler.

`/en/test.md` bu faýl ýok bolsa, deslapky `404` sahypa görkeziler.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">