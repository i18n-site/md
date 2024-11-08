# .i18n/conf.yml

Ang configuration file alang sa `i18n.site` kay `.i18n/conf.yml` ug ang sulod mao ang mosunod :

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

Lakip niini, `upload` hangtod `ext:` nga butang sa pag-configure nagpasabut nga `.md` ra ang ma-upload kung gimantala.

## Ibabaw Nga Nabigasyon nav

`nav:` nga mga kapilian sa pagsumpo, nga katumbas sa menu sa nabigasyon sa ibabaw sa homepage.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Lakip niini, `i18n: home` katumbas sa `home: Home` sa `en/i18n.yml` (diin ang `en` mao ang gigikanan nga sinultian sa paghubad sa proyekto).

`en/i18n.yml` nga sulod mao ang teksto nga gipakita sa navigation menu, nga hubaron sumala sa `fromTo` sa configuration, pananglitan, gihubad ngadto sa `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Human makompleto ang paghubad, mahimo nimong usbon ang bili sa paghubad `yml` , apan ayaw pagdugang o pagtangtang sa yawe sa paghubad `yml` .

### `use: Toc` Nga Template Sa Dokumento Nga Adunay Outline

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` nagpasabot sa paghubad gamit ang `Toc` ka template, nga naghubad sa usa ka `Markdown` ka template.

`TOC` mao ang abbreviation sa `Table of Contents` Sa diha nga kini nga template mahubad, ang outline niini nga `Markdown` file ipakita sa sidebar.

`url:` nagrepresentar sa agianan sa file sa `Markdown` ( `/` katumbas sa direktoryo sa gamut `/README.md` , kini nga ngalan sa file nanginahanglan usa ka uppercase nga prefix ug usa ka gamay nga suffix).

### `use: Md` Document Template Nga Walay Outline

Ang `Md` nga template ug ang `Toc` nga template parehas ug ang duha gigamit sa paghubad sa usa ka `Markdown` nga file. Apan ang `Md` nga template wala magpakita sa outline sa sidebar.

Mahimo nimong usbon `use: Toc` sa konfigurasyon sa ibabaw ngadto sa `use: Md` , pagdagan `i18n.site` sa `md` nga direktoryo pag-usab, ug dayon bisitaha ang development preview URL aron maobserbahan ang mga kausaban sa homepage.

### `use: Blog` Mga Template Sa Blog

Ang template sa blog nagpakita sa usa ka lista sa mga artikulo (mga titulo ug abstract) sa han-ay sa oras sa pagmantala.

[→ Pag-klik dinhi aron mahibal-an ang bahin sa piho nga pag-configure](/i18n.site/conf/blog)

### `use: Doc` Mga Template Sa Dokumento Sa File

Sa configuration file:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Nagpakita gamit ang `Doc` alang sa paghubad sa template.

`Doc` nga template nagsuporta sa paghiusa sa daghang `MarkDown` aron makamugna og mga outline sa dokumento alang sa usa o daghang mga proyekto.

#### Daghang Mga Proyekto Ug Daghang Mga File

Ang configuration sa `.i18n/conf.yml` sa `i18n:doc` mao ang multi-project multi-file rendering mode.

Dinhi, `menu: NB demo1,demo2` , nagpasabot sa paggamit sa `NB` template sa paghubad sa drop-down menu.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , nga mao ang abbreviation sa `Name Breif` , nagpasabot nga ang drop-down menu mahimong magpakita sa ngalan ug slogan sa proyekto.

`NB` gisundan sa parameter `demo1,demo2` nga gipasa niini.

`demo1,demo2` : ** `,` **

Ang katugbang nga direktoryo nga index file alang sa mga parameter sa ibabaw mao ang:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Usa Ka Proyekto Daghang Mga File

Kon ikaw adunay usa lamang ka proyekto, mahimo nimo kining i-configure sama sa mosunod.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Ang usa ka proyekto nga adunay daghang mga file wala mosuporta sa pag-configure `url` ingon nga gamut nga agianan `/`
> Kung __conf.yml → nav:__ Wala’y gi-configure nga agianan sa gamut, kung mag-access sa homepage sa website, awtomatiko kini nga isulat pag-usab sa una nga URL sa ilawom sa `nav:` nga pagsumpo.
> Kini nga disenyo mao ang mas maayo nga pag-ila sa mga dokumento sa proyekto, mga blog ug uban pang mga sulod pinaagi sa mga direktoryo.
> Girekomenda nga gamiton ang usa ka file ug usa ka panid isip home page.

> [!TIP]
> Kung `url` wala masulat, `url` nag-default sa kantidad nga `i18n` Kini nga lagda magamit usab sa ubang mga templates.

#### TOC Talaan Sa Mga Sulod Index

Kung ang template `use: Doc` gi-enable sa configuration, palihug i-enable ang plug-in `i18n.addon/toc` sa `.i18n/conf.yml` Ang configuration mao ang mosunod :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` awtomatik nga i-install ug ipatuman kini nga plug-in, basaha ang `TOC` nga file sa indeks sa direktoryo, ug makamugna ang `json` nga outline sa direktoryo.

Kung kini usa ka proyekto nga adunay daghang mga file, ang direktoryo sa ugat `TOC` mao ang direktoryo nga katumbas sa `url:` sa direktoryo sa gigikanan nga sinultian Pananglitan, kung ang gigikanan nga sinultian mao ang Intsik: ang file nga katumbas sa `url: flashduty` mao ang `zh/flashduty/TOC` .

Kung kini daghang mga proyekto ug daghang mga file, dili kinahanglan nga i-configure `url:` Ang root directory sa `TOC` mao ang direktoryo nga katumbas sa kantidad sa `i18n` .

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

`TOC` nga mga file gi-indent aron ipakita ang hierarchical nga relasyon sa outline, pagsuporta sa multi-level indentation, ug mga komento sa linya nga nagsugod sa `# ` .

##### Ang Lebel Sa Ginikanan Nagsulat Lamang Sa Titulo, Dili Sa Sulod.

Kung adunay daghang lebel sa indentation, ang lebel sa ginikanan nagsulat lamang sa titulo ug dili ang sulud. Kay kon dili, ang typography mahimong gubot.

##### Proyekto README.md

Ang sulod mahimong isulat sa aytem `README.md` , sama sa `en/demo2/README.md` .

Timan-i nga ang sulod niini nga payl wala magpakita sa usa ka talaan sa mga sulod nga outline, mao nga girekomendar nga limitahan ang gitas-on ug magsulat og mubo nga pasiuna.

###### Slogan Sa Proyekto

Imong makita nga ang `Deme Two` adunay tagline sa proyekto sa ubos sa drop-down menu ug outline `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Kini katumbas sa unang laray sa `en/demo2/README.md` :

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

### Default Loading Nga Walay Configuration Path

Alang sa usa ka piho nga agianan nga ma-access, kung ang prefix sa agianan wala ma-configure sa `nav:` , ang `MarkDown` nga file nga katumbas sa agianan i-load pinaagi sa default ug i-render gamit ang `Md` template.

Pananglitan, kung `/test` ma-access ug `nav:` ma-configure nga wala ang prefix niini nga dalan, ug ang kasamtangan nga pinulongan sa pag-browse kay English (code `en` ), `/en/test.md` ikarga pinaagi sa default ug i-render gamit ang template `Md` .

Kung `/en/test.md` kini nga file wala maglungtad, ang default nga `404` nga panid ipakita.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">