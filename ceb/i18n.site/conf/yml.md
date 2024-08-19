# .i18n/conf.yml

Ang profile sa `i18n.site` kay `.i18n/conf.yml` .

Gawas sa mga setting sa [`i18`](/i18) , `ignore:` ug `i18n:` , ang configuration file mao ang mosunod:

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

Lakip niini, `upload` hangtod `ext:` nga butang sa pag-configure nagpasabut nga `.md` ra ang ma-upload kung gimantala.

## Ibabaw Nga Nabigasyon nav

`nav:` nga mga kapilian sa pagsumpo, nga katumbas sa menu sa nabigasyon sa ibabaw sa home page.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Taliwala kanila, `i18n: home` katumbas sa `home: Home` sa `en/i18n.yml` .

`en/i18n.yml` mahubad sa daghang mga pinulongan, sama sa `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Human makompleto ang paghubad, mahimo nimong usbon ang bili sa paghubad `yml` , apan ayaw pagdugang o pagtangtang sa yawe sa paghubad `yml` .

### `use: Toc` , Single File Template (Uban Ang Outline)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` nagpasabot sa paghubad gamit ang usa ka `Toc` template, nga mao ang paghubad sa usa ka `Markdown` ka template.

`TOC` mao ang abbreviation sa `Table of Contents` Sa diha nga kini nga template mahubad, ang outline niini nga `Markdown` file ipakita sa sidebar.

`url:` nagrepresentar sa agianan sa file sa `Markdown` ( `/` katumbas sa direktoryo sa gamut `/README.md` , kini nga ngalan sa file nanginahanglan usa ka uppercase nga prefix ug usa ka gamay nga suffix).

### `use: Md` , Single File Template (Walay Outline)

Ang `Md` nga template ug ang `Toc` nga template parehas ug ang duha gigamit sa paghubad sa usa ka `Markdown` nga file. Apan ang `Md` nga template wala magpakita sa outline sa sidebar.

Mahimo nimong usbon `use: Toc` sa ibabaw nga configuration ngadto sa `use: Md` , pagdagan `i18n.site` sa `md` nga direktoryo pag-usab, ug dayon bisitaha ang development preview URL aron maobserbahan ang mga kausaban sa homepage.

### Default Loading Nga Walay Configuration Path

Kung ang usa ka piho nga agianan ma-access ug ang prefix sa agianan niini wala ma-configure sa `nav:` , ang `MarkDown` nga file nga katumbas sa agianan ikarga pinaagi sa default ug i-render gamit ang `Md` template.

Pananglitan, kung `/test` ma-access, ug `nav:` ma-configure nga wala niini nga dalan, ug ang pinulongan sa panid kay English (code `en` ), `/en/test.md` makarga pinaagi sa default ug ma-render gamit ang template `Md` .

Kung `/en/test.md` kini nga file wala maglungtad, ang default nga `404` nga panid ipakita.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Multi-File Nga Template

Sa configuration file:

```
  - i18n: blog
    use: Doc
```

Nagpakita gamit ang `Doc` alang sa paghubad sa template.

`Doc` nga template nagsuporta sa paghiusa sa daghang `MarkDown` aron makamugna og mga outline sa dokumento alang sa usa o daghang mga proyekto.

#### Usa Ka Proyekto (Daghang Mga File)

`blog` sa ibabaw mao ang single-item mode sa `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kung Walay Sulod Ang Url, Nag-Default Kini Sa Bili Sa i18n

Kung `url` wala masulat, `url` nag-default sa kantidad nga `i18n` Kini nga lagda magamit usab sa ubang mga templates.

Ang paagi sa pagsulat sa ibabaw katumbas sa `url: blog` , ug ang katugbang nga file niini mao ang `en/blog/TOC` .

#### Daghang Proyekto

Ang configuration sa `i18n:doc` sa `.i18n/conf.yml` kay multi-project mode.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Dinhi, `menu: NB demo1,demo2` , nagpasabot sa paggamit sa `NB` template sa paghubad sa drop-down menu.

`NB` , nga mao ang abbreviation sa `Name Breif` , nagpasabot nga ang drop-down menu mahimong magpakita sa ngalan ug slogan sa proyekto.

`NB` gisundan sa parameter `demo1,demo2` nga gipasa niini.
`demo1,demo2` : ** `,` **

Ang katugbang nga direktoryo nga index file alang sa mga parameter sa ibabaw mao ang:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Talaan Sa Mga Sulod Index

`i18n.site` ipatuman `js` plug-in `.i18n/hook/after.tran/TOC.js` sa demo bodega aron mabasa ang `doc` nga directory index file nga katumbas sa `TOC` template configuration aron makamugna ang `json` directory outline.

Kung mogamit ka ug `doc` nga template, kinahanglan nimo kini nga plug-in.

Kung imong gisugdan ang proyekto `i18n.site` gikan sa usa ka walay sulod nga folder, hinumdumi nga kopyahon ang demo nga proyekto `.i18n` sa imong direktoryo.

Ang `Doc` template maghatag sa talaan sa mga sulod outline base sa namugna nga `json` .

##### Detalyadong Katin-Awan Sa Sulod

`en/blog/TOC` sulod mao ang mosunod :

```
README.md

news/README.md
  news/begin.md
```

##### Gamita Ang Indentation Aron Ipakita Ang Lebel

`README.md` sa unang laray sa `en/blog/TOC` sa ibabaw katumbas sa `i18n.site` sa hulagway sa ubos, nga mao ang ngalan sa proyekto.

Ang sunod nga duha ka linya sama sa gipakita sa screenshot sa ubos.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` katumbas sa `News` ,
`news/begin.md` katumbas sa `Our Product is Online !`

`TOC` nga mga file gi-indent aron ipakita ang hierarchical nga relasyon sa outline ug pagsuporta sa multi-level indentation.

##### Ang Lebel Sa Ginikanan Nagsulat Lamang Sa Titulo, Dili Sa Sulod.

Kung adunay daghang lebel sa indentation, ang lebel sa ginikanan nagsulat lamang sa titulo ug dili ang sulud. Kay kon dili, ang typography mahimong gubot.

##### Proyekto README.md

Ang sulod mahimong isulat sa aytem `README.md` , sama sa `en/demo2/README.md` .

Timan-i nga ang sulod niini nga payl wala magpakita sa usa ka talaan sa mga sulod nga outline, mao nga girekomendar nga limitahan ang gitas-on ug magsulat og mubo nga pasiuna.

###### Slogan Sa Proyekto

Imong makita nga ang `Deme Two` adunay tagline sa proyekto sa ubos sa drop-down menu ug outline sa katalogo `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Kini katumbas sa unang laray `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Ang sulod human sa unang colon `:` sa unang lebel nga titulo sa proyekto `README.md` isipon nga slogan sa proyekto.

Ang mga tiggamit gikan sa China, Japan ug Korea, palihug timan-i nga kinahanglan nimong gamiton ang tunga sa gilapdon nga colon `:` imbes nga full-width nga colon.

##### Giunsa Pagbalhin Ang TOC Sa Kadaghanan?

`TOC` nga mga file kinahanglan ibutang sa direktoryo sa gigikanan nga pinulongan.

Pananglitan, kung ang gigikanan nga sinultian mao ang Intsik, nan `TOC` sa ibabaw mao ang `zh/blog/TOC` .

Kung giusab ang gigikanan nga lengguwahe, kinahanglan nimo nga ibalhin ang `TOC` nga mga file sa usa ka piho nga lengguwahe sa proyekto sa lain nga lengguwahe.

Mahimo kang maghisgot sa mosunod nga mga sugo:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Palihog usba `en/` ug `zh/` sa sugo sa ibabaw sa imong code sa pinulongan.