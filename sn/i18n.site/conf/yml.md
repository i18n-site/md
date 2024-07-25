# .i18n/conf.yml

`i18n.site` `.i18n/conf.yml`

Kunze kweiyo `ignore:` uye `i18n:` marongero [`i18`](/i18) , iyo faira yekumisikidza iri seizvi:

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

Pakati pavo, iyo `ext:` `.md` chinhu che `upload`

## Top Navigation nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Pakati pavo `i18n: home` inoenderana ne `en/i18n.yml`中`home: Home` .

`en/i18n.yml` ichashandurirwa mumitauro yakawanda, senge `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Mushure mokunge shanduro yapera, unogona kugadzirisa `yml` kweshanduro, asi usawedzera kana kubvisa kiyi yekushandura `yml` .

### `use: Toc` Template Imwe Chete Yefaira (Ine Rondedzero)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` zvinoreva kushandisa `Toc` rendering, iyo iri kupa imwechete `Markdown` template.

`TOC` ndicho chipfupiso che `Table of Contents` `Markdown`

`url:` inomiririra nzira yefaira ye `Markdown` ( `/` inoenderana nemudzi wedhairekitori `/README.md` , iri zita refaira rinoda chivakashure chepamusoro uye chivakashure chemavara madiki).

### `use: Md` Template Imwe Chete Yefaira (Hapana Rondedzero)

`Md` Template yakafanana ne `Toc` , ese ari maviri anoshandiswa kupa imwechete `Markdown` faira. Nekudaro `Md` iyo template haina kuratidza ratidziro muparutivi.

Unogona `use: Toc` gadziriso iri pamusoro ku `use: Md` , mhanya `i18n.site` mu `md` dhairekitori zvakare, uye wobva washanyira iyo yekuvandudza yekutarisa URL kuti uone shanduko iri papeji rekutanga.

### Default Kurodha Pasina Configuration Nzira

Kana iyo nzira yekutanga yeimwe nzira iri kuwanikwa isina kugadzirwa mukati `nav:` iyo `MarkDown` faira inoenderana negwara inotakurwa nekusarudzika uye inopihwa uchishandisa `Md` template.

Semuenzaniso, kana ukashanyira `/test` uye `nav:` inogadziriswa pasina iyi nzira, uye mutauro wepeji Chirungu (code `en` ), template ichaiswa `/en/test.md` uye inoshandiswa uchishandisa `Md` nekusingaperi.

`/en/test.md` iyi faira isipo, iyo `404` peji icharatidzwa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Akawanda-Faira Template

Mune faira rekugadzirisa:

```
  - i18n: blog
    use: Doc
```

Inoratidza kushandiswa `Doc` template kupa.

`Doc` Template inotsigira kubatanidza akawanda `MarkDown` kugadzira zvinyorwa zvemapurojekiti ega kana akawanda.

#### Single Project (Mafaira Akawanda)

`blog` mune zviri pamusoro ndiyo imwe-project mode ye `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kana url Isina Chinhu, Inoenda Kune Kukosha Kwei18n

Kana ukasanyora `url` `url` kune kukosha kwe `i18n` Uyu mutemo unoshandawo kune mamwe matemplate.

Nzira yekunyora iri pamusoro yakaenzana nekuva `url: blog` uye faira rayo rinoenderana ne `en/blog/TOC` .

#### Mapurojekiti Akawanda

`.i18n/conf.yml` `i18n:doc`

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Pano, `menu: NB demo1,demo2` zvinoreva kushandisa `NB` kupa iyo yekudonha-pasi menyu.

`NB` `Name Breif`

`NB` inoteverwa neparameter `demo1,demo2` yakapfuudzwa kwairi.
Ziva kuti hapafanirwe kuve nenzvimbo ** pamberi `demo1,demo2` mushure mecomma `,` mu : **

Kune ma parameter ari pamusoro, iyo inoenderana dhairekitori index faira ndeye:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Tafura Yezviri Mukati Index

`i18n.site` Ichaita iyo `js` plugin `.i18n/hook/after.tran/TOC.js` mudura redemo kuti uverenge dhairekitori index faira `doc` inoenderana neiyo template kumisikidzwa `TOC` kugadzira `json` yedhairekitori rondedzero.

Kana iwe ukashandisa `doc` , iwe unofanirwa kunge uine iyi plug-in.

Kana iwe ukatanga `.i18n` `i18n.site`

`Doc` `json`

##### Detailed Content Tsananguro

`en/blog/TOC` :

```
README.md

news/README.md
  news/begin.md
```

##### Shandisa Indentation Kuratidza Mazinga

Pamusoro `en/blog/TOC` `README.md` mumutsetse wekutanga inoenderana ne `i18n.site` iri pamufananidzo uri pazasi, iro ndiro zita reprojekiti.

Mitsetse miviri inotevera inoratidzwa muscreenshot pazasi.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ne `News` ,
inoenderana ne `Our Product is Online !` `news/begin.md`

`TOC`

##### Chiyero Chemubereki Chinonyora Musoro Chete, Kwete Zviri Mukati.

Kana paine akati wandei mazinga e indentation, chikamu chemubereki chinongonyora musoro kwete zvirimo. Zvikasadaro, typography ichakanganiswa.

##### Chirongwa README.md 

`README.md` yepurojekiti, semuenzaniso, unogona kunyora zvirimo mu `en/demo2/README.md` .

Ziva kuti zviri mufaira iri hazviratidze tafura yezviri mukati, saka zvinokurudzirwa kudzikamisa kureba uye kunyora sumo pfupi.

###### Project Sirogani

Sezvauri kuona `Deme Two` Pazasi pemenu yekudonhedza uye katalogi yezita reprojekiti, pane purojekiti `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: zvinoenderana nemutsara wekutanga `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`:` `README.md`

Vashandisi vanobva kuChina, Japan neKorea, ndapota cherechedza kuti munofanira kushandisa hafu-yakafara colon `:` yakazara-yakafara colon.

##### Nzira Yekufambisa TOC Muhuwandu?

`TOC`

Semuenzaniso, kana mutauro `zh/blog/TOC` kuChinese, ipapo `TOC`

Kana mutauro wemabviro wakagadziridzwa, unofanirwa kuunganidza `TOC` mune mumwe mutauro mupurojekiti kuenda kune mumwe mutauro.

Unogona kutarisa kune inotevera mirairo:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ndapota shandura `en/` uye `zh/` mumurairo wepamusoro kune kodhi yemutauro wako.


