# .i18n/conf.yml

Faele ya peakanyo ya `i18n.site` ke `.i18n/conf.yml` gomme diteng di ka tsela ye e latelago :

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

Gare ga tšona, selo sa peakanyo `upload` go ya go `ext:` se ra gore ke `.md` fela yeo e tlago tsenywa ge go phatlalatšwa.

## Godimo Go Sepelasepela nav

`nav:` dikgetho phetolo, e lumellanang le menu ya tsamaea ka holimo ho leqephe la lapeng.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Gare ga tšona, `i18n: home` e sepelelana le `home: Home` go `en/i18n.yml` (moo `en` e lego polelo ya mothopo ya phetolelo ya projeke).

Diteng tša `en/i18n.yml` ke sengwalwa seo se bontšhitšwego ka go thepo ya go sepelasepela, yeo e tlago fetolelwa go ya ka `fromTo` ka go peakanyo, mohlala, e fetoletšwe go `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ka morago ga ge phetolelo e phethilwe, o ka fetoša boleng bja phetolelo `yml` , eupša o se ke wa oketša goba wa phumola senotlelo sa phetolelo `yml` .

### 0Thempleite Ya Tokomane `use: Toc` Yeo E Nago Le Thulaganyo

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` e ra gore go fetolela ka go šomiša thempleite `Toc` , yeo e lego go hlagiša thempleite e tee `Markdown` .

`TOC` ke khutsofatšo ya `Table of Contents` Ge thempleite ye e tšweletšwa, thulaganyo ya faele ye ya `Markdown` e tla bontšhwa ka gare ga bara ya ka thoko.

`url:` e emela tsela ya faele ya `Markdown` ( `/` e sepelelana le tšhupetšo ya modu `/README.md` , leina le la faele le nyaka hlogo ya ditlhaka tše kgolo le moselana wa ditlhaka tše nnyane).

### 0Thempleite Ya Tokomane `use: Md` Ntle Le Thulaganyo

Thempleite `Md` le thempleite `Toc` di a swana gomme ka bobedi di šomišwa go tšweletša faele e tee `Markdown` . Eupša thempleite ya `Md` ga e bontšhe thulaganyo ka gare ga baara ya ka thoko.

O ka fetola `use: Toc` ka peakanyong ye e lego ka mo godimo go `use: Md` , wa kitima `i18n.site` ka go `md` tšhupetšo gape, gomme wa etela URL ya ponelopele ya tlhabollo go lebelela diphetogo letlakaleng la gae.

### `use: Blog` Dithempleite Tša Blog

Thempleite ya blog e bontšha lenaneo la dihlogo (dihlogo le dikakaretšo) ka tatelano ya nako ya phatlalatšo.

[→ Tobetsa mona ho ithuta ka peakanyo e itseng](/i18n.site/conf/blog)

### 0Dithempleite Tša Tokumente Ya Faele `use: Doc`

Ka faele ya peakanyo:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

E laetša go šomiša `Doc` bakeng sa phetolelo ya thempleite.

`Doc` thempleite e thekga go kopanya tše ntši `MarkDown` go tšweletša ditlhalošo tša ditokomane tša diprotšeke tše tee goba tše ntši.

#### Diporojeke Tse Di Multiple Le Difaele Tse Ngata

The phetolo ya `.i18n/conf.yml` ka `i18n:doc` ke multi-porojeke e ne multi-faele phetolelo mokgwa wa.

Mo, `menu: NB demo1,demo2` , e ra gore o šomiša thempleite `NB` go tšweletša thepo ya go theoga.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , yeo e lego khutsofatšo ya `Name Breif` , e ra gore thepo ya go theoga e ka bontšha leina le moano wa porojeke.

`NB` e latelwa ke paramethara `demo1,demo2` e fetišitšwego go yona.

Ela : ** Ga se gwa swanela go ba le dikgoba ** pele le ka morago ga koma `,` go `demo1,demo2` .

Faele ya tšhupamabaka ya tšhupetšo ye e swanetšego ya ditekanyetšo tše di lego ka mo godimo ke:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Single Porojeke E Ne Difaele Multiple

Ge o na le porojeke e tee fela, o ka e beakanya ka tsela ye e latelago.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Protšeke e tee yeo e nago le difaele tše ntši ga e thekge go beakanya `url` bjalo ka tsela ya modu `/`
> Ge e le gore __conf.yml → nav:__ Ga go na tsela ya modu yeo e beakantšwego, ge o fihlelela letlakala la gae la weposaete, e tla ngwalwa gape ka go iketla go URL ya mathomo ka fase ga peakanyo ya `nav:` .
> Moralo wo ke go fapantšha bokaone ditokomane tša projeke, di-blog le diteng tše dingwe ka dipuku tša ditaelo.
> Go kgothaletšwa go šomiša faele e tee le letlakala le tee bjalo ka letlakala la gae.

> [!TIP]
> Ge e le gore `url` ga se ya ngwalwa, `url` e default go boleng bja `i18n` Molao wo o thoma gape go šoma go dithempleite tše dingwe.

#### TOC Tafole Ya Dikagare Index

Ge e le gore thempleite `use: Doc` e kgontšhitšwe ka go peakanyo, hle kgontšha polaka-in `i18n.addon/toc` ka go `.i18n/conf.yml` Peakanyo e ka tsela ye e latelago :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` tla ka go iketla kenya le go phethagatša plug-in ye, ya bala `TOC` faele ya tšhupamabaka ya tšhupetšo, gomme ya tšweletša `json` thulaganyo ya tšhupetšo.

Ge e le gore ke porojeke e tee yeo e nago le difaele tše ntši, tšhupetšo ya modu `TOC` ke tšhupetšo yeo e sepelelanago le `url:` ka go tšhupetšo ya polelo ya mothopo Mohlala, ge e le gore polelo ya mohlodi ke ya Setšhaena: faele yeo e sepelelanago le `url: flashduty` ke `zh/flashduty/TOC` .

Ge e le gore ke diprotšeke tše ntši le difaele tše ntši, ga go nyakege gore o beakanye `url:` Tšhupetšo ya modu ya `TOC` ke tšhupetšo yeo e sepelelanago le boleng bja `i18n` .

##### Tlhaloso Ya Diteng Ye E Tletšego

`en/blog/TOC` di ka tsela ye e latelago :

```
README.md

news/README.md
  news/begin.md
```

##### Šomiša Indentation Go Laetša Maemo

`README.md` mothalong wa mathomo wa `en/blog/TOC` ka godimo e sepelelana le `i18n.site` seswantšhong se se lego ka mo tlase, e lego leina la projeke.

Methaladi ye mebedi ye e latelago ke bjalo ka ge go bontšhitšwe seswantšhong sa skrine se se lego ka mo tlase.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` e sepelelana le `News` , .
`news/begin.md` e sepelelana le `Our Product is Online !`

`TOC` difaele di tsentšwe ka gare go laetša kamano ya tatelano ya thulaganyo, thekgo ya go tsenywa ga maemo a mantši, le ditshwayotshwayo tša mola go thoma ka `# ` .

##### Maemo a Motswadi a Ngwala Fela Thaetlele, E Sego Diteng.

Ge go na le maemo a mantši a go tsenya, maemo a motswadi a ngwala fela thaetlele e sego diteng. Go sego bjalo, typography e tla hlakahlakane.

##### Protšeke Ya README.md

Diteng di ka ngwalwa go ntlha ya `README.md` , go swana le `en/demo2/README.md` .

Hlokomela gore diteng tša faele ye ga di bontšhe thulaganyo ya diteng, ka fao go kgothaletšwa go lekanyetša botelele le go ngwala matseno a makopana.

###### Moano Wa Porojeke

O ka bona gore `Deme Two` e na le tagline ya yona ya projeke ka fase ga thepo ya go theoga le leina la porojeke ya tlhalošo ya lelokelelo `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Se se sepelelana le mothaladi wa mathomo wa `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Diteng ka morago ga kholone ya mathomo `:` ya thaetlele ya maemo a pele ya porojeke `README.md` di tla tšewa bjalo ka moano wa porojeke.

Badiriši go tšwa China, Japane le Korea, hle ela hloko gore o swanetše go šomiša kolone ya bophara bja seripagare `:` go e na le kolone ya bophara bjo bo tletšego.

##### Tsela Ya Go Šuthiša TOC Ka Bontši?

`TOC` difaele hloka ho beha ka directory ya puo mohloli.

Ka mohlala, ge e ba leleme la mothopo e le la Setšhaena, gona `TOC` ka godimo ke `zh/blog/TOC` .

Ge e le gore polelo ya mohlodi e fetotšwe, o swanetše go šuthiša difaele `TOC` tša polelo ye e itšego ka gare ga porojeke go ya go leleme le lengwe.

O ka lebelela ditaelo tše di latelago:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Hle fetola `en/` le `zh/` taelong ye e lego ka mo godimo go khoutu ya gago ya polelo.

### Default Loading Ntle Le Tsela Ya Peakanyo

Bakeng sa tsela ye e itšego yeo e fihlelelwago, ge e le gore hlogo ya tsela ga se ya beakanywa ka go `nav:` , faele ya `MarkDown` yeo e sepelelanago le tsela e tla imelwa ka go ikemela gomme ya tšweletšwa ka go šomiša thempleite ya `Md` .

Mohlala, ge `/test` e fihlelelwa gomme `nav:` e beakantšwe ntle le hlogo ya tsela ye, gomme polelo ya bjale ya go phetla ke Seisemane (khoutu `en` ), `/en/test.md` e tla laetšwa ka go ikemela gomme ya tšweletšwa ka go šomiša thempleite `Md` .

Ge `/en/test.md` faele ye ga e gona, letlakala `404` la tlwaelo le tla bontšhwa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">