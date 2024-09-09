# .i18n/conf.yml

Snið fyrir `i18n.site` er `.i18n/conf.yml` .

Fyrir utan stillingarnar [`i18`](/i18) , `ignore:` og `i18n:` , er stillingarskráin sem hér segir:

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
addon:
  - i18n.addon/toc
```

Meðal þeirra þýðir `upload` til `ext:` stillingaratriði að aðeins `.md` verður hlaðið upp við birtingu.

## Topp Flakk nav

`nav:` stillingarvalkostir, sem samsvara yfirlitsvalmyndinni efst á heimasíðunni.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Meðal þeirra samsvarar `i18n: home` `home: Home` á móti `en/i18n.yml` .

`en/i18n.yml` verður þýtt á mörg tungumál, eins og `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Eftir að þýðingunni er lokið geturðu breytt gildi þýðingar `yml` , en ekki bæta við eða eyða lykil þýðingar `yml` .

### `use: Toc` , Sniðmát Fyrir Eina Skrá (Með Útlínum)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` þýðir flutningur með því að nota `Toc` sniðmát, sem er að gera eitt `Markdown` sniðmát.

`TOC` er skammstöfunin á `Table of Contents` Þegar þetta sniðmát er birt munu útlínur þessarar `Markdown` skráar birtast í hliðarstikunni.

`url:` táknar skráarslóð `Markdown` ( `/` samsvarar rótarskránni `/README.md` , þetta skráarnafn krefst hástafa forskeyti og lágstafa viðskeyti).

### `use: Md` , Sniðmát Fyrir Eina Skrá (Engin Útlínur)

`Md` sniðmátið og `Toc` sniðmátið eru þau sömu og bæði eru notuð til að gera eina `Markdown` skrá. En `Md` sniðmátið sýnir ekki útlínur í hliðarstikunni.

Þú getur breytt `use: Toc` í ofangreindri stillingu í `use: Md` , keyrt `i18n.site` í `md` möppunni aftur og farið svo á forskoðunarslóð þróunar til að fylgjast með breytingunum á heimasíðunni.

### Sjálfgefin Hleðsla Án Stillingarslóðar

Ef aðgangur er að ákveðinni slóð og slóðarforskeyti hennar er ekki stillt í `nav:` , verður `MarkDown` skráin sem samsvarar slóðinni sjálfgefið hlaðin og birt með `Md` sniðmátinu.

Til dæmis, ef `/test` er opnuð og `nav:` er stillt án þessarar slóðar og síðutungumálið er enska (kóði `en` ), verður `/en/test.md` sjálfgefið hlaðið og birt með sniðmáti `Md` .

Ef `/en/test.md` þessi skrá er ekki til mun sjálfgefin `404` síða birtast.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Sniðmát Fyrir Margar Skrár

Í stillingarskránni:

```
  - i18n: blog
    use: Doc
```

Gefur til kynna að nota `Doc` fyrir sniðmátsbirtingu.

`Doc` sniðmát styður samþættingu margra `MarkDown` til að búa til skjalútlínur fyrir stök eða mörg verkefni.

#### Eitt Verkefni (Margar Skrár)

`blog` hér að ofan er einþáttungur `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Þegar Vefslóð Er Tóm Er Hún Sjálfgefið Í Gildi Í18n

Ef `url` er ekki skrifað er `url` sjálfgefið gildið `i18n` Þessi regla tekur einnig gildi fyrir önnur sniðmát.

Ritunaraðferðin hér að ofan jafngildir `url: blog` og samsvarandi skrá hennar er `en/blog/TOC` .

#### Fjölmörg Verkefni

Stillingin á `i18n:doc` af `.i18n/conf.yml` er fjölverkefnahamur.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hér þýðir `menu: NB demo1,demo2` að nota `NB` sniðmátið til að birta fellivalmyndina.

`NB` , sem er skammstöfun á `Name Breif` , þýðir að fellivalmyndin getur sýnt nafn og slagorð verkefnisins.

`NB` er fylgt eftir af færibreytunni `demo1,demo2` sem er send til hennar.
Athugaðu : ** Það ætti ekki að vera bil ** á undan og eftir kommu `,` á móti `demo1,demo2` .

Fyrir ofangreindar færibreytur er samsvarandi skráarskrá:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Efnisyfirlit

`i18n.site` mun keyra `js` viðbót `.i18n/hook/after.tran/TOC.js` í kynningarvörugeymslunni til að lesa `doc` möppuskrána sem samsvarar `TOC` sniðmátsstillingunum til að búa til `json` möppuútlitið.

Ef þú notar `doc` sniðmát verður þú að hafa þessa viðbót.

Ef þú frumstillir verkefni `i18n.site` úr tómri möppu, mundu að afrita kynningarverkefni `.i18n` í möppuna þína.

`Doc` sniðmátið mun birta efnisyfirlitið út frá mynduðu `json` .

##### Ítarleg Efnisskýring

`en/blog/TOC` Innihaldið er sem hér segir :

```
README.md

news/README.md
  news/begin.md
```

##### Notaðu Inndrátt Til Að Gefa Til Kynna Stig

`README.md` í fyrstu röð `en/blog/TOC` fyrir ofan samsvarar `i18n.site` á myndinni hér að neðan, sem er heiti verkefnisins.

Næstu tvær línur eru eins og sýnt er á skjámyndinni hér að neðan.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` samsvarar `News` ,
`news/begin.md` samsvarar `Our Product is Online !`

`TOC` skrár eru dregnar inn til að gefa til kynna stigveldistengsl útlínunnar, styðja inndrátt á mörgum stigum og línu athugasemdir sem byrja á `#` .

##### Foreldrastigið Skrifar Aðeins Titilinn, Ekki Innihaldið.

Þegar það eru mörg stig inndráttar skrifar foreldrastigið aðeins titilinn en ekki innihaldið. Annars verður leturfræði ruglað.

##### Verkefnið README.md

Hægt er að skrifa efni í lið `README.md` , eins og `en/demo2/README.md` .

Athugið að innihald þessarar skráar sýnir ekki efnisyfirlit, svo mælt er með því að takmarka lengdina og skrifa stuttan inngang.

###### Verkefni Slagorð

Þú getur séð að `Deme Two` hefur verkefnismerkið sitt fyrir neðan fellivalmyndina og nafn vörulista : `Your Project slogan`

![](https://p.3ti.site/1721276842.avif)

Þetta samsvarar fyrstu röðinni `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Litið verður á innihald á eftir fyrsta tvípunkti `:` í titli á fyrsta stigi verkefnis `README.md` sem slagorð verkefnisins.

Notendur frá Kína, Japan og Kóreu, vinsamlegast athugið að þú ættir að nota hálfbreidd tvípunkt `:` í stað fullrar breiddar.

##### Hvernig Á Að Flytja TOC Í Lausu?

`TOC` skrár þurfa að vera settar í möppu frummálsins.

Til dæmis, ef frummálið er kínverska, þá er `TOC` fyrir ofan `zh/blog/TOC` .

Ef frumtungumálinu er breytt þarftu að færa `TOC` skrár á ákveðnu tungumáli í verkefninu á annað tungumál.

Þú getur vísað til eftirfarandi skipana:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Vinsamlegast breyttu `en/` og `zh/` í skipuninni hér að ofan í tungumálakóðann þinn.