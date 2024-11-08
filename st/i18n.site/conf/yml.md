# .i18n/conf.yml

Faele ea tlhophiso ea `i18n.site` ke `.i18n/conf.yml` mme litaba li tjena :

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

Har'a tsona, ntho ea `upload` ho ea ho `ext:` e bolela hore ke `.md` feela e tla kenngoa ha e hatisoa.

## Navigation E Holimo nav

`nav:` likhetho tsa tlhophiso, tse tsamaellanang le menu ea ho tsamaea e kaholimo ho leqephe la lapeng.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Har'a tsona, `i18n: home` e lumellana le `home: Home` ho `en/i18n.yml` (moo `en` e leng puo ea mohloli oa phetolelo ea morero).

`en/i18n.yml` dikahare ke mongolo o bontšitsoeng ho menu ea ho tsamaea, e tla fetoleloa ho ea ka `fromTo` ho tlhophiso, mohlala, e fetoletsoeng ho `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ka mor'a hore phetolelo e phethoe, u ka fetola boleng ba phetolelo `yml` , empa u se ke ua eketsa kapa ua hlakola senotlolo sa phetolelo `yml` .

### `use: Toc` E Nang Le Kemiso

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` e bolela ho fana ka ho sebelisa thempleite `Toc` , e fanang ka setšoantšo se le seng `Markdown` .

`TOC` ke khutsufatso ea `Table of Contents` Ha thempleite ena e etsoa, kemiso ea faele ena `Markdown` e tla hlahisoa ka har'a lehlakore.

`url:` e emela tsela ea faele ea `Markdown` ( `/` e tsamaisana le motso oa directory `/README.md` , lebitso lena la faele le hloka sehlomathiso sa litlhaku tse kholo le sekoaelo sa litlhaku tse nyane).

### `use: Md` Ntle Le Kemiso

Thempleite `Md` le thempleite ea `Toc` lia tšoana 'me ka bobeli li sebelisoa ho fana ka faele e le 'ngoe `Markdown` . Empa thempleite ea `Md` ha e bonts'e kemiso ka har'a barathoko.

U ka fetola `use: Toc` ka tlhophiso e ka holimo ho `use: Md` , tsamaisa `i18n.site` bukeng ea `md` hape, ebe u etela URL ea tlhahiso-pele ho bona liphetoho tse leqepheng la lehae.

### `use: Blog` Blog Templates

Template ea blog e bonts'a lethathamo la lingoloa (lihlooho le likhakanyo) ho latela nako ea phatlalatso.

[→ Tobetsa mona ho ithuta ka tlhophiso e khethehileng](/i18n.site/conf/blog)

### 0 Li-Template Tsa Litokomane `use: Doc` Tsa Lifaele

Ka faeleng ea tlhophiso:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

E bonts'a ho sebelisoa `Doc` bakeng sa tlhahiso ea thempleite.

`Doc` template e ts'ehetsa ho kopanya tse ngata `MarkDown` ho hlahisa litokomane tsa merero e le 'ngoe kapa tse ngata.

#### Merero E Mengata Le Lifaele Tse Ngata

Tlhophiso ea `.i18n/conf.yml` ho `i18n:doc` ke mokhoa oa ho fana ka lifaele tse ngata tsa merero e mengata.

Mona, `menu: NB demo1,demo2` , e bolela ho sebelisa template ea `NB` ho fana ka menu e theoha.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , e leng khutsufatso ea `Name Breif` , e bolela hore menu e theoha e ka hlahisa lebitso le lepetjo la morero.

`NB` lateloa ke lekhalo `demo1,demo2` le fetisetsoang ho lona.

`,` `demo1,demo2` : ** **

Faele e tsamaellanang ea li-directory tsa li-parameter tse kaholimo ke:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Morero O Le Mong Lifaele Tse Ngata

Haeba u na le projeke e le 'ngoe feela, u ka e hlophisa ka tsela e latelang.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Morero o le mong o nang le lifaele tse ngata ha o tšehetse ho hlophisa `url` joalo ka tsela ea `/`
> Haeba __conf.yml → nav:__ Ha ho na tsela ea motso e hlophisitsoeng, ha u fihlella leqephe la lehae la sebaka sa marang-rang, e tla ngoloa hape ho URL ea pele tlasa tlhophiso ea `nav:` .
> Moralo ona ke ho khetholla hamolemo litokomane tsa morero, li-blogs le litaba tse ling ka li-directory.
> Ho khothalletsoa ho sebelisa faele e le 'ngoe le leqephe le le leng e le leqephe la lehae.

> [!TIP]
> Haeba `url` e sa ngoloa, `url` e ea ho boleng ba `i18n` Molao ona o boetse o sebetsa ho li-templates tse ling.

#### Lenane La Litaba Tsa TOC

Haeba template `use: Doc` e nolofalitsoe ho tlhophiso, ka kopo lumella plug-in `i18n.addon/toc` ho `.i18n/conf.yml` Tokiso e tjena :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` e tla kenya le ho sebelisa plug-in ena, bala `TOC` faele ea index ea directory, 'me e hlahise `json` kemiso ea bukana.

Haeba e le morero o le mong o nang le lifaele tse ngata, mohloli oa metso `TOC` ke mohloli o lumellanang le `url:` bukeng ea puo ea mohloli Ka mohlala, haeba puo ea mohloli ke Sechaena: faele e lumellanang le `url: flashduty` ke `zh/flashduty/TOC` .

Haeba e le merero e mengata le lifaele tse ngata, ha ho hlokahale hore u lokisetse `url:` Motsoako oa motso oa `TOC` ke mohala o lumellanang le boleng ba `i18n` .

##### Tlhaloso E Qaqileng Ea Litaba

`en/blog/TOC` ke tse latelang :

```
README.md

news/README.md
  news/begin.md
```

##### Sebelisa Indentation Ho Bontša Maemo

`README.md` moleng oa pele oa `en/blog/TOC` ka holimo e lumellana le `i18n.site` setšoantšong se ka tlase, e leng lebitso la morero.

Mela e 'meli e latelang e bontšitsoe skrineng e ka tlase.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` e tsamaellana le `News` ,
`news/begin.md` e tsamaellana le `Our Product is Online !`

`TOC` difaele di na le indent ho bontsha kamano ya maemo a kemiso, tshehetso ya maemo a mangata, le ditlhaloso tsa mela e qalang ka `# ` .

##### Boemo Ba Motsoali Bo Ngola Sehlooho Feela, Eseng Litaba.

Ha ho na le mekhahlelo e mengata ea indentation, boemo ba motsoali bo ngola feela sehlooho eseng litaba. Ho seng joalo, typography e tla senyeha.

##### Morero README.md

Likahare li ka ngoloa nthong ea `README.md` , joalo ka `en/demo2/README.md` .

Hlokomela hore litaba tsa faele ena ha li bontše lethathamo la likahare, kahoo ho kgothaletswa ho fokotsa bolelele le ho ngola kenyelletso e khutšoanyane.

###### Lepetjo La Morero

U ka bona hore `Deme Two` e na le tagline ea eona `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Sena se lumellana le mola oa pele oa `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Litaba tse ka morao ho `:` ea pele ea sehlooho sa boemo ba pele ba morero `README.md` li tla nkoa e le lepetjo la morero.

Basebelisi ba tsoang Chaena, Japane le Korea, ka kopo hlokomela hore le lokela ho sebelisa kolone ea halofo ea bophara ba kolone ho e `:` na le kholo e felletseng.

##### Mokhoa Oa Ho Tsamaisa TOC Ka Bongata?

`TOC` lifaele li hloka ho beoa bukeng ea puo ea mohloli.

Ka mohlala, haeba puo ea mohloli ke Sechaena, joale `TOC` ka holimo ke `zh/blog/TOC` .

Haeba puo ea mohloli e fetotsoe, o hloka ho kopanya lifaele `TOC` tsa puo e itseng morerong ho ea puong e 'ngoe.

U ka sheba litaelo tse latelang:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ka kopo fetola `en/` le `zh/` taelong e ka holimo ho khoutu ea puo ea hau.

### Ho Kenya Ka Ho Feletseng Ntle Le Tsela Ea Tlhophiso

Bakeng sa tsela e itseng e fihlellehang, haeba sehlomathiso sa tsela se sa hlophisoa ho `nav:` , faele `MarkDown` e tsamaellanang le tsela e tla kengoa ka mokhoa o ikhethileng ebe e fanoa ho sebelisoa template ea `Md` .

Mohlala, haeba `/test` e fihletsoe 'me `nav:` e lokisoa ntle le sehlomapele sa tsela ena,' me puo ea hajoale ea ho bala ke Senyesemane (khoutu `en` ), `/en/test.md` e tla kengoa ka mokhoa oa kamehla mme e sebelisoe ho sebelisoa template `Md` .

Haeba `/en/test.md` faele ena e le sieo, leqephe le `404` leng la kamehla le tla hlahisoa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">