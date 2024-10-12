# .i18n/conf.yml

Iyo faira yekumisikidza `i18n.site` ndeye `.i18n/conf.yml` uye zvirimo ndezvinotevera :

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

Pakati pavo, `upload` kusvika `ext:` yekumisikidza chinhu zvinoreva kuti `.md` chete ndiyo ichaiswa pairi kudhindwa.

## Top Navigation nav

`nav:` sarudzo dzekugadzirisa, dzinoenderana nemenu yekufambisa iri pamusoro pepeji remba.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Pakati pavo, `i18n: home` inoenderana `home: Home` `en/i18n.yml` (apo `en` ndiwo mutauro unobva pashanduro yeprojekiti).

`en/i18n.yml` zvirimo ndiwo mavara anoratidzwa mumenyu yekufambisa, iyo inoshandurwa zvinoenderana `fromTo` mukugadzirisa, semuenzaniso, yakashandurwa `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Mushure mokunge shanduro yapera, unogona kugadzirisa kukosha kwekushandura `yml` , asi usawedzera kana kubvisa kiyi yekushandura `yml` .

### `use: Toc` , Imwechete Faira Template Ine Rondedzero

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` zvinoreva kupa uchishandisa `Toc` template, iyo iri kupa imwechete `Markdown` template.

`TOC` ndiyo chidimbu che `Table of Contents` Kana template iyi yaitwa, rondedzero yeiyi `Markdown` faira icharatidzwa mudivi pebhari.

`url:` inomiririra nzira yefaira `Markdown` ( `/` inoenderana nemudzi wedhairekitori `/README.md` , zita refaira iri rinoda chivakashure chepamusoro uye chivakashure chemavara madiki).

### `use: Md` , Imwechete Faira Template Isina Rondedzero

Iyo `Md` template uye `Toc` template zvakafanana uye ese ari maviri anoshandiswa kupa imwechete `Markdown` faira. Asi iyo `Md` template hairatidze ratidziro mubhara reparutivi.

Iwe unogona kugadzirisa `use: Toc` mukumisikidzwa kwepamusoro `use: Md` , mhanya `i18n.site` mune `md` dhairekitori zvakare, uye wobva washanyira iyo yekuvandudza yekutarisa URL kuti uone shanduko papeji remba.

### `use: Blog` Blog Matemplate

Iyo blog template inoratidza rondedzero yezvinyorwa (mazita uye abstracts) mukurongeka kwenguva yekuburitswa.

[→ Dzvanya pano kuti udzidze nezve chaiyo gadziriro](/i18n.site/conf/blog)

### `use: Doc` , Akawanda-Faira Gwaro Template

Mufaira rekugadzirisa:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Inoratidza kushandisa `Doc` pakupa template.

`Doc` template inotsigira kubatanidza akawanda `MarkDown` kugadzira zvinyorwa zvemapurojekiti ega kana akawanda.

#### Mapurojekiti Akawanda Uye Akawanda Mafaera

Kugadziriswa `.i18n/conf.yml` `i18n:doc` ndeye-multi-project multi-file rendering mode.

Pano, `menu: NB demo1,demo2` , zvinoreva kushandisa `NB` template kupa iyo yekudonha-pasi menyu.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , inova chidimbu `Name Breif` , zvinoreva kuti iyo yekudonha-pasi menyu inogona kuratidza zita uye sirogani yepurojekiti.

`NB` inoteverwa neparameter `demo1,demo2` yakapfuudzwa kwairi.

`demo1,demo2` : ** `,` **

Kune ma parameter ari pamusoro, iyo inoenderana dhairekitori index faira ndeye:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Single Project Akawanda Mafaera

Kana uine purojekiti imwe chete, unogona kuigadzirisa sezvinotevera.

```
  - i18n: xxx
    use: Doc
```

##### Kana url Isina Chinhu, Inoenda Kune Kukosha Kwei18n

Kana `url` isina kunyorwa, `url` inokanganisa kukosha kwe `i18n` Uyu mutemo unoshandawo kune mamwe matemplate.

Nzira yekunyora iri pamusoro yakaenzana nekuva `url: xxx` , uye faira rayo rinoenderana `en/xxx/TOC` .

#### TOC Tafura Yezviri Mukati Index

`i18n.site` ichaita `js` plug-in `.i18n/hook/after.tran/TOC.js` mudemo warehouse kuverenga iyo `TOC` dhairekitori index faira inoenderana `doc` template kumisikidzwa kugadzira iyo `json` dhairekitori rondedzero.

Kana iwe ukashandisa `doc` template, unofanirwa kunge uine iyi plug-in.

Kana iwe ukatanga chirongwa `i18n.site` kubva pane isina chinhu folda, yeuka kukopa demo chirongwa `.i18n` kune yako dhairekitori.

Iyo `Doc` template ichapa tafura yezviri mukati marongero zvichienderana neyakagadzirwa `json` .

##### Detailed Content Tsananguro

`en/blog/TOC` mukati ndeizvi :

```
README.md

news/README.md
  news/begin.md
```

##### Shandisa Indentation Kuratidza Mazinga

`README.md` mumutsara wekutanga `en/blog/TOC` pamusoro inoenderana `i18n.site` pamufananidzo uri pazasi, iro ndiro zita reprojekiti.

Mitsetse miviri inotevera inoratidzwa muscreenshot pazasi.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` inoenderana `News` ,
`news/begin.md` inoenderana `Our Product is Online !`

`TOC` mafaira akaiswa mukati kuti aratidze hukama hwehumambo hwechiratidziro, tsigiro yakawanda-level indentation, uye mitsetse yekutaura inotanga `#` .

##### Chiyero Chemubereki Chinonyora Musoro Chete, Kwete Zviri Mukati.

Kana paine akati wandei mazinga e indentation, chikamu chemubereki chinongonyora musoro kwete zvirimo. Zvikasadaro, typography ichakanganiswa.

##### Chirongwa README.md

Zviri mukati zvinogona kunyorwa muchinhu `README.md` , senge `en/demo2/README.md` .

Ziva kuti zviri mufaira iri hazviratidzi tafura yezviri mukati, saka zvinokurudzirwa kudzikamisa kureba uye kunyora sumo pfupi.

###### Project Sirogani

Iwe unogona kuona `Your Project slogan` `Deme Two` ine tagline yeprojekiti pazasi pemenu yekudonhedza uye katalogi yezita reprojekiti : .

![](https://p.3ti.site/1721276842.avif)

Izvi zvinoenderana nemutsara wekutanga `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Izvo zvirimo mushure mekutanga colon `:` yezita rekutanga-chikamu chepurojekiti `README.md` ichaonekwa sechirongwa cheprojekiti.

Vashandisi vanobva kuChina, Japan neKorea, ndapota cherechedzai kuti munofanira kushandisa hafu-yakafara colon `:` pane yakazara-yakafara colon.

##### Nzira Yekufambisa TOC Muhuwandu?

`TOC` mafaera anoda kuiswa mudhairekitori remutauro wemabviro.

Semuenzaniso, kana mutauro unobva kuChinese, ipapo `TOC` kumusoro ndiye `zh/blog/TOC` .

Kana mutauro wemabviro ukagadziridzwa, unofanirwa kufambisa `TOC` mafaera emumwe mutauro mupurojekiti kuenda kune mumwe mutauro.

Iwe unogona kutarisa kune inotevera mirairo:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ndapota shandura `en/` uye `zh/` mumurairo uri pamusoro kukodhi yemutauro wako.

### Default Kurodha Pasina Configuration Nzira

Kune imwe nzira iri kuwanikwa, kana nzira yekutanga isati yagadziriswa muna `nav:` , iyo `MarkDown` faira inoenderana nenzira inotakurwa nekusarudzika uye inopihwa uchishandisa iyo `Md` template.

Semuenzaniso, kana `/test` yasvika uye `nav:` yakagadziriswa pasina prefix yeiyi nzira, uye mutauro wezvino wekubhurawuza ndewechiRungu (code `en` ), `/en/test.md` ichatakurwa nekusarudzika uye ichishandurwa uchishandisa template `Md` .

Kana `/en/test.md` iyi faira isipo, peji `404` richaratidzwa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">