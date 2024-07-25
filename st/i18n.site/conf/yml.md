# .i18n/conf.yml

`i18n.site` Faele ea tlhophiso ke `.i18n/conf.yml` .

Ntle le litlhophiso tsa `ignore:` le `i18n:` [`i18`](/i18) , faele ea tlhophiso e tjena:

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

Har'a tsona, ntho ea tlhophiso ea `ext:` `upload` bolela hore ke `.md` feela e tla kenngoa ha e phatlalatsoa.

## Navigation E Holimo nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Har'a bona `i18n: home` e lumellana le `en/i18n.yml`中`home: Home` .

`en/i18n.yml` e tla fetoleloa lipuong tse ngata, joalo ka `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ka mor'a hore phetolelo e phethoe, u ka fetola boleng `yml` phetolelo, empa u se ke ua eketsa kapa ua hlakola senotlolo sa phetolelo `yml` .

### `use: Toc` Template Ea Faele E Le 'ngoe (E Nang Le Kemiso)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` e bolela ho sebelisa `Toc` rendering, e fanang ka `Markdown` template e le 'ngoe.

`TOC` ke khutsufatso ea `Table of Contents` `Markdown`

`url:` e emetse tsela ea faele ea `Markdown` ( `/` e tsamaisana le bukana ea motso `/README.md` , lebitso lena la faele le hloka sehlomathiso sa litlhaku tse kholo le sekoaelo sa litlhaku tse nyane).

### `use: Md` Template Ea Faele E Le 'ngoe (Ha Ho Na Kemiso)

`Md` e tšoana le `Toc` , ka bobeli li sebelisoa ho fana ka faele e le 'ngoe ea `Markdown` . Leha ho le joalo `Md` template ha e bontše kemiso e ka lehlakoreng le ka thōko.

U ka `use: Toc` tlhophiso e kaholimo ho `use: Md` , matha `i18n.site` ho `md` directory hape, ebe u etela URL ea ponelopele ea ntlafatso ho bona liphetoho tse leqepheng la lapeng.

### Ho Kenya Ka Kamehla Ntle Le Tsela Ea Tlhophiso

Haeba sehlomathiso sa tsela e itseng se fihlellehang se sa hlophisoa ho `nav:` faele ea `MarkDown` e tsamaellanang le tsela e tla kengoa ka ho sa feleng ebe e sebelisoa ho sebelisoa `Md` template.

Ka mohlala, haeba u etela `/test` 'me `nav:` e hlophisitsoe ntle le tsela ena, 'me puo ea leqephe ke Senyesemane (code `en` ), template e tla kenngoa `/en/test.md` 'me e sebelisoe ho sebelisoa `Md` ka ho feletseng.

`/en/test.md` faele ena e le sieo, ho tla hlahisoa leqephe la kamehla `404` .

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Template Ea Lifaele Tse Ngata

Ka faeleng ea tlhophiso:

```
  - i18n: blog
    use: Doc
```

E bontša ho sebelisoa ha template `Doc`

`Doc` Template e ts'ehetsa ho kopanya `MarkDown` ho hlahisa litokomane tsa merero e le 'ngoe kapa tse ngata.

#### Morero O Le Mong (Lifaele Tse Ngata)

`blog` ka holimo ke mokhoa oa projeke e le 'ngoe ea `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ha url E Se Na Letho, E Fetohela Ho Boleng Ba i18n

Haeba u sa ngole `url` `url` ho boleng ba `i18n` .

Mokhoa oa ho ngola o ka holimo o lekana le ho ba le `url: blog` 'me faele ea eona e tsamaisanang le eona ke `en/blog/TOC` .

#### Merero E Mengata

`.i18n/conf.yml` Tlhophiso ho `i18n:doc` ke mokhoa oa merero e mengata.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Mona `menu: NB demo1,demo2` ho bolela ho sebelisa `NB` ho fana ka menu e theoha.

`NB` , ke khutsufatso ea `Name Breif` , e bontšang hore menu e theoha e ka hlahisa lebitso le lepetjo la morero.

`NB` e lateloa ke parameter `demo1,demo2` e fetiselitsoeng ho eona.
Ela hloko : ** Ha hoa lokela ho ba le libaka ** pele le ka morao `,` `demo1,demo2`

Bakeng sa liparamente tse kaholimo, faele ea index ea directory e tsamaellanang ke:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Lenane La Litaba Tsa TOC

`i18n.site` E tla kenya `js` plugin `.i18n/hook/after.tran/TOC.js` sebakeng sa polokelo ea demo ho bala faele ea index ea directory `doc` e tsamaellanang le tlhophiso ea template `TOC` ho hlahisa `json` ea lethathamo la bukana.

Haeba u sebelisa `doc` , u tlameha ho ba le plug-in ena.

Haeba u qala projeke ea `i18n.site` ho tsoa foldareng e se nang letho, hopola ho kopitsa `.i18n` projeke ea demo bukeng ea hau.

`Doc` Thempleite e tla fana ka lethathamo la litaba tse thehiloeng ho `json` e hlahisitsoeng.

##### Tlhaloso E Qaqileng Ea Litaba

`en/blog/TOC` :

```
README.md

news/README.md
  news/begin.md
```

##### Sebelisa Indentation Ho Bontša Maemo

Ka holimo `en/blog/TOC` `README.md` e moleng oa pele e lumellana le `i18n.site` setšoantšong se ka tlase, e leng lebitso la morero.

Mela e 'meli e latelang e bontšitsoe skrineng e ka tlase.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` tsamaisana le `News` ,
e tsamaellana le `Our Product is Online !` `news/begin.md`

`TOC` Faele e kentsoe ka hare ho bontša kamano ea maemo a holimo 'me e tšehetsa ho indentation ea mekhahlelo e mengata.

##### Boemo Ba Motsoali Bo Ngola Sehlooho Feela, Eseng Litaba.

Ha ho na le mekhahlelo e mengata ea indentation, boemo ba motsoali bo ngola feela sehlooho eseng litaba. Ho seng joalo, typography e tla senyeha.

##### Morero README.md 

`README.md` ea morero, mohlala, o ka ngola litaba ho `en/demo2/README.md` .

Hlokomela hore litaba tsa faele ena ha li bontše lethathamo la litaba tse ka hare, kahoo ho kgothaletswa ho fokotsa bolelele le ho ngola kenyelletso e khutšoanyane.

###### Lepetjo La Morero

Joalo ka ha u bona `Deme Two` Ka tlase ho lethathamo la lethathamo le lethathamo la lebitso la projeke, ho na le lepetjo `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: se lumellana le mola oa pele `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Morero `README.md` Litaba ka mor'a kolone ea pele `:` sehloohong sa boemo ba pele li tla nkoa e le lepetjo la morero.

Basebelisi ba tsoang Chaena, Japane le Korea, ka kopo hlokomela hore le tlameha ho sebelisa kolone ea bophara ba halofo ho fapana le kolone e felletseng `:`

##### Mokhoa Oa Ho Tsamaisa TOC Ka Bongata?

`TOC` Faele e hloka ho beoa bukeng ea puo ea mohloli.

Ka mohlala, haeba puo ea mohloli ke Sechaena, `TOC` holimo ke `zh/blog/TOC` .

Haeba puo ea mohloli e fetotsoe, o hloka ho kopanya `TOC` ka puo e itseng morerong ho ea ho puo e 'ngoe.

U ka sheba litaelo tse latelang:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ka kopo fetola `en/` ka taelo e kaholimo ho khoutu ea hau `zh/` puo.


