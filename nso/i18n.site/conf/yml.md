# .i18n / conf.yml Ya Go Swana Le Yona

Faele ya peakanyo ke `.i18n/conf.yml` `i18n.site`

Ntle le dipeakanyo `ignore:` le `i18n:` tša [`i18`](/i18) , faele ya peakanyo e ka tsela ye e latelago:

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

Gare ga tšona, selo sa `ext:` peakanyo sa `upload` se ra gore ke `.md` fela yeo e tlago go tsenywa ge go phatlalatšwa.

## Godimo Go Sepelasepela nav

`nav:` tša peakanyo, tšeo di sepelelanago le thepo ya go sepelasepela ka godimo ga letlakala la gae.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

`en/i18n.yml` ga `home: Home` , `i18n: home`

e tla fetolelwa ka maleme a mantši, go swana le `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ka morago ga ge phetolelo e phethilwe, o ka fetoša boleng bja `yml` ka phetolelong, eupša o se ke wa oketša goba wa phumola senotlelo sa phetolelo `yml` .

### `use: Toc` , Thempleite Ya Faele E Le Nngwe (Ka Thulaganyo) .

Go : `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` `Toc` `Markdown`

`TOC` ke khutsofatšo ya `Table of Contents` Ge thempleite ye e tšweletšwa, thulaganyo ya faele ye ya `Markdown` e tla bontšhwa ka gare ga bara ya ka thoko.

`url:` e emela tsela ya faele ya `Markdown` ( `/` e sepelelana le tšhupetšo ya modu `/README.md` , leina le la faele le nyaka hlogo ya ditlhaka tše kgolo le moselana wa ditlhaka tše nnyane).

### `use: Md` , Thempleite Ya Faele E Le Nngwe (Ha Ho Na Thulaganyo)

`Md` Thempleite e swana le `Toc` , bobedi di šomišwa go tšweletša faele e tee `Markdown` . Le ge go le bjalo `Md` thempleite ga e bontšhe thulaganyo ka gare ga bara ya ka thoko.

O ka fetola `use: Toc` ka peakanyong ye e lego ka mo godimo go `use: Md` , wa kitima `i18n.site` ka go `md` directory gape, gomme wa etela URL ya ponelopele ya tlhabollo go lebelela diphetogo letlakaleng la gae.

### Default Loading Ntle Le Tsela Ya Peakanyo

Ge e le gore hlogo ya tsela ya tsela ye e itšego yeo e fihlelelwago ga se ya beakanywa ka go `nav:` faele ya `MarkDown` yeo e sepelelanago le tsela e tla laetšwa ka go ikemela gomme ya tšweletšwa ka go šomiša thempleite ya `Md` .

Mohlala, ge o etela `/test` , gomme `nav:` e beakantšwe ntle le tsela ye, gomme polelo ya letlakala ke Seisemane (khoutu `en` ), thempleite e tla imelwa `/en/test.md` gomme ya tšweletšwa ka go šomiša `Md` ka go ikemela.

Ge e le gore `/en/test.md` faele ye ga e gona, letlakala la `404` la tlwaelo le tla bontšhwa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Thempleite Ya Faele E Ngata

Ka faele ya peakanyo:

```
  - i18n: blog
    use: Doc
```

E laetša go šomiša `Doc` bakeng sa go fetolela thempleite.

`Doc` `MarkDown`

#### Projeke E Le 'ngoe (Difaele Tse Ngata) .

`blog` godimo ke mokgwa wa projeke e tee wa `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ge url E Se Na Selo, E Defaults Go Boleng Bja i18n

Ge o sa ngwale `url` , `url` go boleng bja `i18n` Molao wo o thoma gape go šoma bakeng sa dithempleite tše dingwe.

Mokgwa wa go ngwala wo o lego ka mo godimo o lekana le go ba le `url: blog` gomme faele ya yona ye e swanetšego ke `en/blog/TOC` .

#### Diprotšeke Tše Ntši

`.i18n/conf.yml` Peakanyo ka `i18n:doc` ke mokgwa wa diporojeke tse ngata.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Mo, `menu: NB demo1,demo2` e ra gore o šomiša `NB` go tšweletša thepo ya go theoga.

`NB` ke khutsofatšo ya `Name Breif` , e laetša gore thepo ya go theoga e ka bontšha leina le moano wa projeke.

`NB` e latelwa ke paramethara `demo1,demo2` fetisetswa ho yona.
Ela : ** Ga se gwa swanela go ba le dikgoba ** pele le ka morago ga koma `,` ka `demo1,demo2`

Bakeng sa ditekanyetšo tše di lego ka mo godimo, faele ya tšhupamabaka ya tšhupetšo ye e swanetšego ke:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Tafole Ya Dikagare Index

`i18n.site` E tla phethagatša `js` plugin `.i18n/hook/after.tran/TOC.js` ka polokelong ya demo go bala faele ya tšhupamabaka ya tšhupetšo `doc` yeo e sepelelanago le peakanyo ya thempleite `TOC` go tšweletša `json` ya thulaganyo ya tšhupetšo.

Ge o šomiša thempleite ya `doc` , o swanetše go ba le plug-in ye.

Ge o thoma porojeke ya `i18n.site` go tšwa go foltara ye e se nago selo, gopola go kopiša `.i18n` ka go porojeke ya demo go ya go tšhupetšo ya gago.

`Doc` e tla tšweletša thulaganyo ya diteng yeo e theilwego godimo ga `json` ye e tšweleditšwego.

##### Tlhaloso Ya Diteng Ye E Tletšego

Diteng di ka tsela : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Šomiša Indentation Go Laetša Maemo

Ka godimo `en/blog/TOC` `README.md` mo moleng wa mathomo e sepelelana le `i18n.site` seswantšhong se se lego ka mo tlase, e lego leina la projeke.

Methaladi ye mebedi ye e latelago ke bjalo ka ge go bontšhitšwe seswantšhong sa skrine se se lego ka mo tlase.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

e sepelelana le `News` , `news/README.md`
e sepelelana le `Our Product is Online !` `news/begin.md`

`TOC` Faele e tsentšwe ka gare go laetša kamano ya tatelano ya thulaganyo gomme e thekga go tsenywa ga maemo a mantši.

##### Maemo a Motswadi a Ngwala Fela Thaetlele, E Sego Diteng.

Ge go na le maemo a mantši a go tsenya, maemo a motswadi a ngwala fela thaetlele e sego diteng. Go sego bjalo, thaepo e tla hlakahlakane.

##### Protšeke Ya README.md 

`README.md` projeke, mohlala, o ka ngwala diteng ka go `en/demo2/README.md` .

Hlokomela gore diteng tša faele ye ga di bontšhe thulaganyo ya diteng, ka fao go kgothaletšwa go lekanyetša botelele le go ngwala matseno a makopana.

###### Moano Wa Porojeke

Bjalo ka ge o ka `Your Project slogan` : `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: se sepelelana le mola wa mathomo `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Protšeke `README.md` Diteng ka morago ga kholone ya mathomo `:` sehlogong sa maemo a pele di tla tšewa bjalo ka moano wa porojeke.

Badiriši go tšwa China, Japane le Korea, hle ela hloko gore o swanetše go šomiša kolone ya bophara bja seripagare `:`

##### Tsela Ya Go Šuthiša TOC Ka Bontši?

`TOC` Faele e hloka go bewa ka gare ga tšhupetšo ya polelo ya mothopo.

Ka mohlala, ge e ba polelo ya mothopo e le `zh/blog/TOC` , gona `TOC`

Ge e le gore polelo ya mohlodi e fetotšwe, o swanetše go hlopha `TOC` tša go šuthiša ka leleme le le itšego ka porojekeng go ya lelemeng le lengwe.

O ka lebelela ditaelo tše di latelago:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Hle fetola `en/` le `zh/` ka taelong ye e lego ka mo godimo go khoutu ya gago ya polelo.


