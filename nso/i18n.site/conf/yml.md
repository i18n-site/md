# .i18n/conf.yml

Profaele ya `i18n.site` ke `.i18n/conf.yml` .

Ntle le di-setting tsa [`i18`](/i18) , `ignore:` le `i18n:` , faele ya peakanyo e ka tsela e latelang:

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

Gare ga tšona, selo sa peakanyo sa `upload` go ya go `ext:` se ra gore ke `.md` fela yeo e tlago tsenywa ge go phatlalatšwa.

## Godimo Go Sepelasepela nav

`nav:` dikgetho peakanyo, e sepelelanago le thepo ya go sepelasepela ka godimo ga letlakala la gae.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Gare ga tšona, `i18n: home` e sepelelana le `home: Home` go `en/i18n.yml` .

`en/i18n.yml` e tla fetolelwa malemeng a mantši, go swana le `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ka morago ga ge phetolelo e phethilwe, o ka fetoša boleng bja phetolelo `yml` , eupša o se ke wa oketša goba wa phumola senotlelo sa phetolelo `yml` .

### `use: Toc` , Thempleite Ya Faele E Le Nngwe (Ka Thulaganyo) .

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` e ra gore go fetolela ka go šomiša thempleite `Toc` , yeo e lego go hlagiša thempleite e tee ya `Markdown` .

`TOC` ke khutsofatšo ya `Table of Contents` Ge thempleite ye e tšweletšwa, thulaganyo ya faele ye ya `Markdown` e tla bontšhwa ka gare ga bara ya ka thoko.

`url:` e emela tsela ya faele ya `Markdown` ( `/` e sepelelana le tšhupetšo ya modu `/README.md` , leina le la faele le nyaka hlogo ya ditlhaka tše kgolo le moselana wa ditlhaka tše nnyane).

### `use: Md` , Thempleite Ya Faele E Le Nngwe (Ha Ho Na Thulaganyo) .

Thempleite ya `Md` le thempleite ya `Toc` di a swana gomme ka bobedi di šomišwa go tšweletša faele e tee ya `Markdown` . Eupša thempleite ya `Md` ga e bontšhe thulaganyo ka gare ga baara ya ka thoko.

O ka fetola `use: Toc` ka peakanyong ye e lego ka mo godimo go `use: Md` , wa kitima `i18n.site` ka go `md` tšhupetšo gape, gomme wa etela URL ya ponelopele ya tlhabollo go lebelela diphetogo letlakaleng la gae.

### Default Loading Ntle Le Tsela Ya Peakanyo

Ge e le gore tsela ye e itšego e fihlelelwa gomme hlogo ya yona ya tsela ga se ya beakanywa ka go `nav:` , faele ya `MarkDown` yeo e sepelelanago le tsela e tla laetšwa ka go ikemela gomme ya tšweletšwa ka go šomiša thempleite ya `Md` .

Mohlala, ge `/test` e fihlelelwa, gomme `nav:` e beakantšwe ntle le tsela ye, gomme polelo ya letlakala e le Seisemane (khoutu `en` ), `/en/test.md` e tla laetšwa ka go ikemela gomme ya tšweletšwa ka go šomiša thempleite `Md` .

Ge `/en/test.md` faele ye ga e gona, letlakala la `404` la tlwaelo le tla bontšhwa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Thempleite Ya Faele E Ngata

Ka faele ya peakanyo:

```
  - i18n: blog
    use: Doc
```

E laetša go šomiša `Doc` bakeng sa phetolelo ya thempleite.

`Doc` thempleite e thekga go kopanya tše ntši `MarkDown` go tšweletša ditlhalošo tša ditokomane tša diprotšeke tše tee goba tše ntši.

#### Projeke E Le 'ngoe (Difaele Tse Ngata) .

`blog` ka holimo ke mokgwa wa ntho e le 'ngoe ea `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ge url E Se Na Selo, E Defaults Go Boleng Bja i18n

Ge e le gore `url` ga se ya ngwalwa, `url` e default go boleng bja `i18n` Molao wo o thoma gape go šoma go dithempleite tše dingwe.

Mokgwa wa go ngwala wo o lego ka mo godimo o lekana le `url: blog` , gomme faele ya yona ye e swanetšego ke `en/blog/TOC` .

#### Diprotšeke Tše Ntši

Peakanyo ya `i18n:doc` go tšwa go `.i18n/conf.yml` ke mokgwa wa diprotšeke tše ntši.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Mo, `menu: NB demo1,demo2` , e ra gore o šomiša thempleite ya `NB` go tšweletša thepo ya go theoga.

`NB` , yeo e lego khutsofatšo ya `Name Breif` , e ra gore thepo ya go theoga e ka bontšha leina le moano wa porojeke.

`NB` e latelwa ke paramethara `demo1,demo2` e fetišitšwego go yona.
Ela : ** Ga se gwa swanela go ba le dikgoba ** pele le ka morago ga koma `,` go `demo1,demo2` .

Faele ya tšhupamabaka ya tšhupetšo ye e swanetšego ya ditekanyetšo tše di lego ka mo godimo ke:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Tafole Ya Dikagare Index

`i18n.site` e tla phethagatša `js` plug-in `.i18n/hook/after.tran/TOC.js` ka polokelong ya demo go bala faele ya tšhupamabaka `doc` ya tšhupetšo yeo e sepelelanago le peakanyo ya thempleite `TOC` go tšweletša thulaganyo ya tšhupetšo ya `json` .

Ge o šomiša thempleite `doc` , o swanetše go ba le plug-in ye.

Ge o thoma porojeke ya `i18n.site` go tšwa go foltara ye e se nago selo, gopola go kopiša porojeke ya pontšho `.i18n` go tšhupetšo ya gago.

Thempleite ya `Doc` e tla tšweletša thulaganyo ya tafola ya dikagare yeo e theilwego godimo ga `json` ye e tšweleditšwego .

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

`TOC` difaele di indented ho bontša kamano hierarchical ya thulaganyo le tšehetsa multi-maemo indentation.

##### Maemo a Motswadi a Ngwala Fela Thaetlele, E Sego Diteng.

Ge go na le maemo a mantši a go tsenya, maemo a motswadi a ngwala fela thaetlele e sego diteng. Go sego bjalo, typography e tla hlakahlakane.

##### Protšeke Ya README.md

Diteng di ka ngwalwa go ntlha ya `README.md` , go swana le `en/demo2/README.md` .

Hlokomela gore diteng tša faele ye ga di bontšhe thulaganyo ya diteng, ka fao go kgothaletšwa go lekanyetša botelele le go ngwala matseno a makopana.

###### Moano Wa Porojeke

O ka bona gore `Deme Two` e na le tagline ya yona ya projeke ka fase ga thepo ya go theoga le leina la porojeke ya tlhalošo ya lelokelelo `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Se se sepelelana le mothaladi wa mathomo `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Diteng ka morago ga kholone ya mathomo `:` ya thaetlele ya maemo a pele ya porojeke ya `README.md` di tla tšewa bjalo ka moano wa porojeke.

Badiriši go tšwa China, Japane le Korea, hle ela hloko gore o swanetše go šomiša kolone ya bophara bja seripagare `:` go e na le kolone ya bophara bjo bo tletšego.

##### Tsela Ya Go Šuthiša TOC Ka Bontši?

`TOC` difaele hloka ho beha ka directory ya puo mohloli.

Ka mohlala, ge e ba leleme la mothopo e le Setšhaena, gona `TOC` ka godimo ke `zh/blog/TOC` .

Ge e le gore polelo ya mohlodi e fetotšwe, o swanetše go šuthiša difaele `TOC` tša polelo ye e itšego ka gare ga porojeke go ya go leleme le lengwe.

O ka lebelela ditaelo tše di latelago:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Hle fetoša `en/` le `zh/` taelong ye e lego ka mo godimo go khoutu ya gago ya polelo.