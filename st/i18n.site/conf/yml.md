# .i18n/conf.yml

Boemo ba `i18n.site` ke `.i18n/conf.yml` .

Ntle le litlhophiso tsa [`i18`](/i18) , `ignore:` le `i18n:` , faele ea tlhophiso e tjena:

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

Har'a tsona, ntho ea `upload` ho ea ho `ext:` e bolela hore ke `.md` feela e tla kenngoa ha e hatisoa.

## Navigation E Holimo nav

`nav:` likhetho tsa tlhophiso, tse tsamaellanang le menu ea ho tsamaea e kaholimo ho leqephe la lapeng.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Har'a bona, `i18n: home` e lumellana le `home: Home` ho `en/i18n.yml` .

`en/i18n.yml` e tla fetoleloa lipuong tse ngata, joalo ka `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ka mor'a hore phetolelo e phethoe, u ka fetola boleng ba phetolelo `yml` , empa u se ke ua eketsa kapa ua hlakola senotlolo sa phetolelo `yml` .

### `use: Toc` , Template Ea Faele E Le 'ngoe (E Nang Le Kemiso)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` e bolela ho fana ka ho sebelisa thempleite e le `Toc` , e fanang ka setšoantšo se le seng sa `Markdown` .

`TOC` ke khutsufatso ea `Table of Contents` Ha thempleite ena e etsoa, kemiso ea faele ena `Markdown` e tla hlahisoa ka har'a lehlakore.

`url:` e emela tsela ea faele ea `Markdown` ( `/` e tsamaisana le motso oa directory `/README.md` , lebitso lena la faele le hloka sehlomathiso sa litlhaku tse kholo le sekoaelo sa litlhaku tse nyane).

### `use: Md` , Template Ea Faele E Le 'ngoe (Ha E Na Kemiso)

Thempleite ea `Md` le thempleite ea `Toc` lia tšoana 'me ka bobeli li sebelisoa ho fana ka faele e le 'ngoe `Markdown` . Empa thempleite ea `Md` ha e bonts'e kemiso ka har'a barathoko.

U ka fetola `use: Toc` ka tlhophiso e ka holimo ho `use: Md` , tsamaisa `i18n.site` bukeng ea `md` hape, ebe u etela URL ea tlhahiso-pele ho bona liphetoho tse leqepheng la lehae.

### Ho Kenya Ka Kamehla Ntle Le Tsela Ea Tlhophiso

Haeba tsela e itseng e fihletsoe 'me sehlomathiso sa eona sa tsela se sa hlophisoa ho `nav:` , faele `MarkDown` e tsamaellanang le tsela e tla kengoa ka mokhoa o ikhethileng ebe e sebelisoa ho sebelisoa template ea `Md` .

Ka mohlala, haeba `/test` e fihletsoe, 'me `nav:` e lokisoa ntle le tsela ena,' me puo ea leqephe ke Senyesemane (khoutu `en` ), `/en/test.md` e tla kenngoa ka mokhoa oa kamehla 'me e sebelisoe ho sebelisoa template `Md` .

Haeba `/en/test.md` faele ena e le sieo, leqephe `404` la kamehla le tla hlahisoa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Template Ea Lifaele Tse Ngata

Ka faeleng ea tlhophiso:

```
  - i18n: blog
    use: Doc
```

E bonts'a ho sebelisoa `Doc` bakeng sa tlhahiso ea thempleite.

`Doc` template e ts'ehetsa ho kopanya tse ngata `MarkDown` ho hlahisa litokomane tsa merero e le 'ngoe kapa tse ngata.

#### Morero O Le Mong (Lifaele Tse Ngata)

`blog` ka holimo ke mokhoa oa ntho e le 'ngoe ea `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ha url E Se Na Letho, E Fetohela Ho Boleng Ba i18n

Haeba `url` e sa ngoloa, `url` e ea ho boleng ba `i18n` Molao ona o boetse o sebetsa ho li-templates tse ling.

Mokhoa oa ho ngola o ka holimo o lekana le `url: blog` , 'me faele ea eona e tsamaisanang le eona ke `en/blog/TOC` .

#### Merero E Mengata

Tlhophiso ea `i18n:doc` ho `.i18n/conf.yml` ke mokhoa oa merero e mengata.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Mona, `menu: NB demo1,demo2` , e bolela ho sebelisa template ea `NB` ho fana ka menu e theoha.

`NB` , e leng khutsufatso ea `Name Breif` , e bolela hore menu e theoha e ka hlahisa lebitso le lepetjo la morero.

`NB` lateloa ke lekhalo `demo1,demo2` le fetisetsoang ho lona.
`,` `demo1,demo2` : ** **

Faele e tsamaellanang ea li-directory tsa li-parameter tse kaholimo ke:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Lenane La Litaba Tsa TOC

`i18n.site` e tla kenya `js` plug-in `.i18n/hook/after.tran/TOC.js` sebakeng sa polokelo ea demo ho bala faele ea index ea `doc` e tsamaellanang le tlhophiso ea template ea `TOC` ho hlahisa kemiso ea `json` directory.

Haeba u sebelisa `doc` template, u tlameha ho ba le plug-in ena.

Haeba u qala morero `i18n.site` ho tsoa foldareng e se nang letho, hopola ho kopitsa projeke ea `.i18n` bukeng ea hau.

Setšoantšo sa `Doc` se tla fana ka lethathamo la litaba tse ka hare ho latela tse hlahisitsoeng `json` .

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

`TOC` difaele di kentswe ka hare ho bontsha kamano ya maemo a kemiso le ho tshehetsa ho indentation ya maemo a mangata.

##### Boemo Ba Motsoali Bo Ngola Sehlooho Feela, Eseng Litaba.

Ha ho na le mekhahlelo e mengata ea indentation, boemo ba motsoali bo ngola feela sehlooho eseng litaba. Ho seng joalo, typography e tla senyeha.

##### Morero README.md

Likahare li ka ngoloa karolong ea `README.md` , joalo ka `en/demo2/README.md` .

Hlokomela hore litaba tsa faele ena ha li bontše lethathamo la litaba tse ka hare, kahoo ho kgothaletswa ho fokotsa bolelele le ho ngola kenyelletso e khutšoanyane.

###### Lepetjo La Morero

U ka bona hore `Deme Two` e na le tagline ea eona ea projeke ka tlase ho lethathamo la ho theoha le lethathamo la lethathamo la : `Your Project slogan` .

![](https://p.3ti.site/1721276842.avif)

Sena se lumellana le mola oa pele `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Litaba tse ka morao ho kolone ea `:` ea sehlooho sa boemo ba pele ba morero `README.md` li tla nkoa e le lepetjo la morero.

Basebelisi ba tsoang Chaena, Japane le Korea, ka kopo hlokomela hore le lokela ho sebelisa kolone ea halofo ea bophara ba `:` ho e-na le kholo e felletseng.

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