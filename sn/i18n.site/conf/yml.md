# .i18n/conf.yml

Nhoroondo `i18n.site` ndeye `.i18n/conf.yml` .

Kunze kwezvigadziriso [`i18`](/i18) , `ignore:` uye `i18n:` , iyo faira yekumisikidza iri seizvi:

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

Pakati pavo, `upload` kusvika `ext:` yekumisikidza chinhu zvinoreva kuti `.md` chete ndiyo ichaiswa pairi kudhindwa.

## Top Navigation nav

`nav:` sarudzo dzekugadzirisa, dzinoenderana nemenu yekufambisa iri pamusoro pepeji repamba.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Pakati pavo, `i18n: home` inoenderana `home: Home` `en/i18n.yml` .

`en/i18n.yml` ichashandurirwa mumitauro yakawanda, yakadai `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Mushure mokunge shanduro yapera, unogona kugadzirisa kukosha kwekushandura `yml` , asi usawedzera kana kubvisa kiyi yekushandura `yml` .

### `use: Toc` , Single File Template (Ine Rondedzero)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` zvinoreva kupa uchishandisa `Toc` template, iyo iri kupa imwechete `Markdown` template.

`TOC` ndiyo chidimbu che `Table of Contents` Kana template iyi yaitwa, rondedzero yeiyi `Markdown` faira icharatidzwa mudivi pebhari.

`url:` inomiririra nzira yefaira `Markdown` ( `/` inoenderana nemudzi wedhairekitori `/README.md` , zita refaira iri rinoda chivakashure chepamusoro uye chivakashure chemavara madiki).

### `use: Md` , Imwe Faira Template (Hapana Rondedzero)

Iyo `Md` template uye `Toc` template zvakafanana uye ese ari maviri anoshandiswa kupa imwechete `Markdown` faira. Asi iyo `Md` template hairatidze ratidziro mubhara reparutivi.

Iwe unogona kugadzirisa `use: Toc` mukumisikidzwa kwepamusoro `use: Md` , mhanya `i18n.site` mune `md` dhairekitori zvakare, uye wobva washanyira iyo yekuvandudza yekutarisa URL kuti uone shanduko papeji remba.

### Default Kurodha Pasina Configuration Nzira

Kana imwe nzira yasvikwa uye nzira yayo yekutanga isina kugadzirwa `nav:` , iyo `MarkDown` faira inoenderana negwara inotakurwa nekusarudzika uye inopihwa uchishandisa iyo `Md` template.

Semuenzaniso, kana `/test` yasvika, uye `nav:` inogadziriswa pasina iyi nzira, uye mutauro wepeji Chirungu (code `en` ), `/en/test.md` ichatakurwa nekusagadzika uye inoshandurwa uchishandisa template `Md` .

Kana `/en/test.md` iyi faira isipo, peji `404` richaratidzwa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Akawanda-Faira Template

Mune faira rekugadzirisa:

```
  - i18n: blog
    use: Doc
```

Inoratidza kushandisa `Doc` pakupa template.

`Doc` template inotsigira kubatanidza akawanda `MarkDown` kugadzira zvinyorwa zvemapurojekiti ega kana akawanda.

#### Single Project (Mafaira Akawanda)

`blog` iri pamusoro ndiyo imwe-chinhu modhi `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kana url Isina Chinhu, Inoenda Kune Kukosha Kwei18n

Kana `url` isina kunyorwa, `url` inokanganisa kukosha kwe `i18n` Uyu mutemo unoshandawo kune mamwe matemplate.

Nzira yekunyora iri pamusoro yakaenzana `url: blog` , uye faira yayo inoenderana `en/blog/TOC` .

#### Mapurojekiti Akawanda

Kugadziriswa kwe `i18n:doc` kubva `.i18n/conf.yml` ndeye multi-project mode.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Pano, `menu: NB demo1,demo2` , zvinoreva kushandisa `NB` template kupa iyo yekudonha-pasi menyu.

`NB` , inova chidimbu `Name Breif` , zvinoreva kuti menyu yekudonha inogona kuratidza zita uye sirogani yeprojekiti.

`NB` inoteverwa neparameter `demo1,demo2` yakapfuudzwa kwairi.
`demo1,demo2` : ** `,` **

Iyo inoenderana dhairekitori index faira kune iri pamusoro paramita ndeiyi:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Tafura Yezviri Mukati Index

`i18n.site` ichaita `js` plug-in `.i18n/hook/after.tran/TOC.js` mudemo warehouse kuverenga iyo `doc` dhairekitori index faira inoenderana `TOC` template kumisikidzwa kugadzira iyo `json` dhairekitori rondedzero.

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

`TOC` mafaera akaiswa mukati kuti aratidze hukama hwehumambo hweiyo ratidziro uye kutsigira akawanda-level indentation.

##### Chiyero Chemubereki Chinonyora Musoro Chete, Kwete Zviri Mukati.

Kana paine akati wandei mazinga e indentation, chikamu chemubereki chinongonyora musoro kwete zvirimo. Zvikasadaro, typography ichakanganiswa.

##### Chirongwa README.md

Zviri mukati zvinogona kunyorwa muchinhu `README.md` , senge `en/demo2/README.md` .

Ziva kuti zviri mufaira iri hazviratidzi tafura yezviri mukati, saka zvinokurudzirwa kudzikamisa kureba uye kunyora sumo pfupi.

###### Project Sirogani

Iwe unogona kuona kuti `Deme Two` ine tagline yeprojekiti pazasi pemenu yekudonhedza uye katalogi yezita : `Your Project slogan` .

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

Unogona kutarisa kune inotevera mirairo:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ndapota shandura `en/` uye `zh/` mumurairo uri pamusoro kukodhi yemutauro wako.