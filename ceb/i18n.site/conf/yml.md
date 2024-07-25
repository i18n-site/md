# .i18n/conf.yml

Ang configuration file kay `.i18n/conf.yml` `i18n.site`

Gawas sa `ignore:` ug `i18n:` setting sa [`i18`](/i18) , ang configuration file mao ang mosunod:

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

Lakip kanila, `.md` `ext:` configuration item sa `upload`

## Ibabaw Nga Nabigasyon nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Lakip kanila, `i18n: home` katumbas sa `en/i18n.yml`中`home: Home` .

`en/i18n.yml` mahubad sa daghang pinulongan, sama sa `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Human makompleto `yml` paghubad, mahimo nimong usbon ang bili sa `yml`

### `use: Toc` , Single File Template (Uban Ang Outline)

Pag : configure `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` nagpasabot sa paggamit sa `Toc` rendering, nga mao ang paghubad sa usa ka `Markdown` template.

`TOC` mao ang abbreviation `Markdown` `Table of Contents` .

`url:` nagrepresentar sa agianan sa payl sa `Markdown` ( `/` katumbas sa direktoryo sa ugat `/README.md` , kini nga ngalan sa payl nanginahanglan usa ka uppercase nga prefix ug usa ka gamay nga suffix).

### `use: Md` , Single File Template (Walay Outline)

`Md` Ang template parehas sa `Toc` , ang duha gigamit sa pag-render sa usa ka `Markdown` file. Apan `Md` ang template wala magpakita sa outline sa sidebar.

Mahimo nimong usbon ang `use: Toc` sa ibabaw nga configuration ngadto sa `use: Md` , run `i18n.site` sa `md` directory pag-usab, ug dayon bisitaha ang development preview URL aron maobserbahan ang mga kausaban sa homepage.

### Default Loading Nga Walay Configuration Path

Kung ang prefix sa agianan sa usa ka agianan nga gi-access wala ma-configure sa `nav:` ang `MarkDown` file nga katumbas sa agianan ikarga pinaagi sa default ug i-render gamit ang `Md` template.

Pananglitan, kon imong bisitahan ang `/test` , ug `nav:` gi-configure nga wala niini nga dalan, ug ang pinulongan sa panid kay English (code `en` ), ang template ikarga `/en/test.md` ug i-render gamit ang `Md` pinaagi sa default.

`/en/test.md` wala kini nga file, ang default `404` panid ipakita.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Multi-File Nga Template

Sa configuration file:

```
  - i18n: blog
    use: Doc
```

Nagpakita gamit ang `Doc` para sa template rendering.

Ang `Doc` Template nagsuporta sa paghiusa sa daghang `MarkDown` aron makamugna og mga outline sa dokumento alang sa usa o daghang proyekto.

#### Usa Ka Proyekto (Daghang Mga File)

`blog` sa ibabaw mao ang single-project mode sa `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kung Walay Sulod Ang Url, Nag-Default Kini Sa Bili Sa i18n

Kung dili ka magsulat `url` , `url` sa kantidad nga `i18n` .

Ang paagi sa pagsulat sa ibabaw katumbas sa pagbaton `url: blog` ug ang katugbang nga file niini `en/blog/TOC` .

#### Daghang Proyekto

Ang configuration sa `i18n:doc` `.i18n/conf.yml` multi-project mode.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Dinhi, `menu: NB demo1,demo2` nagpasabut sa paggamit sa `NB` aron ma-render ang drop-down menu.

`NB` , mao ang abbreviation sa `Name Breif` , nga nagpakita nga ang drop-down menu mahimong magpakita sa ngalan ug slogan sa proyekto.

`NB` gisundan sa parameter `demo1,demo2` nga gipasa niini.
Timan `demo1,demo2` i nga kinahanglan walay mga espasyo ** sa wala pa ug pagkahuman sa comma `,` sa : **

Alang sa mga parameter sa ibabaw, ang katugbang nga file sa indeks sa direktoryo mao ang:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Talaan Sa Mga Sulod Index

Ipatuman ang `js` plugin `.i18n/hook/after.tran/TOC.js` sa bodega sa demo aron mabasa ang file sa indeks `i18n.site` direktoryo `doc` katugbang sa pag-configure sa template `TOC` aron makamugna `json` sa outline sa direktoryo.

Kung mogamit ka og `doc` template, kinahanglan nimo kini nga plug-in.

Kung imong gisugdan ang `i18n.site` proyekto gikan sa usa ka walay sulod nga folder, hinumdumi nga kopyahon `.i18n` sa demo nga proyekto sa imong direktoryo.

`Doc` `json`

##### Detalyadong Katin-Awan Sa Sulod

Ang sulod mao : mosunod `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Gamita Ang Indentation Aron Ipakita Ang Lebel

Ibabaw `en/blog/TOC` `README.md` sa unang linya katumbas `i18n.site` sa hulagway sa ubos, nga mao ang ngalan sa proyekto.

Ang sunod nga duha ka linya sama sa gipakita sa screenshot sa ubos.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

katumbas sa `News` `news/README.md`
`news/begin.md` `Our Product is Online !`

`TOC`

##### Ang Lebel Sa Ginikanan Nagsulat Lamang Sa Titulo, Dili Sa Sulod.

Kung adunay daghang lebel sa indentation, ang lebel sa ginikanan nagsulat lamang sa titulo ug dili ang sulud. Kay kon dili, ang typography mahimong gubot.

##### Proyekto README.md 

`README.md` sa proyekto, pananglitan, mahimo nimong isulat ang sulud sa `en/demo2/README.md` .

Timan-i nga ang sulod niini nga payl wala magpakita sa talaan sa mga sulod nga outline, mao nga girekomendar nga limitahan ang gitas-on ug magsulat og mubo nga pasiuna.

###### Slogan Sa Proyekto

Sa imong makita, `Deme Two` Ubos sa drop-down nga menu ug catalog outline nga ngalan `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: katumbas sa unang linya `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`:` `README.md`

Ang mga tiggamit gikan sa China, Japan ug Korea, palihug timan-i nga kinahanglan nimong gamiton ang tunga sa gilapdon nga `:` imbes nga bug-os nga gilapdon nga colon.

##### Giunsa Pagbalhin Ang TOC Sa Kadaghanan?

`TOC` Ang file kinahanglan nga ibutang sa direktoryo sa gigikanan nga pinulongan.

Pananglitan, kung ang gigikanan nga sinultian mao `zh/blog/TOC` Intsik, nan `TOC`

Kung giusab ang gigikanan nga lengguwahe, kinahanglan nimo nga ibalhin `TOC` sa usa ka piho nga lengguwahe sa proyekto sa lain nga lengguwahe.

Mahimo kang maghisgot sa mosunod nga mga sugo:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Palihog usba ang `en/` ug `zh/` sa sugo sa ibabaw sa imong code sa pinulongan.


