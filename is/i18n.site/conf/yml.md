# .i18n/conf.yml

`i18n.site` Stillingarskráin er `.i18n/conf.yml` .

Fyrir utan `ignore:` og `i18n:` stillingarnar á [`i18`](/i18) er stillingarskráin sem hér segir:

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

Meðal þeirra `upload` `ext:` stillingaratriðið að aðeins `.md` verður hlaðið upp við birtingu.

## Topp Flakk nav

`nav:` stillingarvalkostir, sem samsvara siglingavalmyndinni efst á heimasíðunni.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Meðal `home: Home` `en/i18n.yml` `i18n: home`

`en/i18n.yml` verður þýtt á mörg tungumál, eins og `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Eftir að þýðingunni er lokið geturðu breytt gildi `yml` í þýðingunni, en ekki bæta við eða eyða lykil þýðingar `yml` .

### `use: Toc` Sniðmát Fyrir Staka Skrá (Með Útlínum)

: stilla `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` þýðir að nota `Toc` rendering, sem er að skila einu `Markdown` sniðmáti.

`TOC` er skammstöfunin á `Table of Contents` Þegar þetta sniðmát er birt, birtast útlínur þessarar `Markdown` skráar í hliðarstikunni.

`url:` táknar skráarslóðina `Markdown` ( `/` samsvarar rótarskránni `/README.md` , þetta skráarnafn krefst hástafs forskeyti og lágstafa viðskeyti).

### `use: Md` Sniðmát Fyrir Eina Skrá (Engin Útlínur)

`Md` Sniðmát er það sama og `Toc` , bæði eru notuð til að gera eina `Markdown` skrá. Hins vegar `Md` sniðmátið sýnir ekki útlínur í hliðarstikunni.

Þú getur breytt `use: Toc` í uppsetningunni hér að ofan í `use: Md` , keyrt `i18n.site` í `md` möppunni aftur og farið síðan á forskoðunarslóð þróunar til að fylgjast með breytingunum á heimasíðunni.

### Sjálfgefin Hleðsla Án Stillingarslóðar

Ef slóðarforskeyti ákveðinnar slóðar sem verið er að nálgast er ekki stillt í `nav:` verður `MarkDown` skráin sem samsvarar slóðinni sjálfgefið hlaðin og birt með `Md` sniðmáti.

Til dæmis, ef þú `/test` , og `nav:` er stillt án þessarar slóðar, og síðutungumálið er enska (kóði `en` ), verður sniðmátið sjálfgefið hlaðið `/en/test.md` og birt með `Md` .

`/en/test.md` þessi skrá er ekki til mun sjálfgefna `404` síða birtast.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` Sniðmát Með Mörgum Skrám

Í stillingarskránni:

```
  - i18n: blog
    use: Doc
```

Gefur til kynna að þú notir `Doc`

`Doc` Sniðmát styður samþættingu margra `MarkDown` til að búa til skjalútlínur fyrir stök eða mörg verkefni.

#### Eitt Verkefni (Margar Skrár)

`blog` hér að ofan er einverkefnishamurinn `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Þegar Vefslóð Er Tóm Er Hún Sjálfgefið Í Gildi Í18n

Ef þú skrifar ekki `url` `url` gildið `i18n` .

Ritunaraðferðin hér að ofan jafngildir því að hafa `url: blog` og samsvarandi skrá hennar er `en/blog/TOC` .

#### Fjölmörg Verkefni

`.i18n/conf.yml` Stillingin í `i18n:doc` er fjölverkefnahamur.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hér þýðir `menu: NB demo1,demo2` að nota `NB` til að birta fellivalmyndina.

`NB` , er skammstöfunin á `Name Breif` , sem gefur til kynna að fellivalmyndin geti sýnt nafn og slagorð verkefnisins.

`NB` er fylgt eftir með færibreytunni `demo1,demo2` sem er send til hennar.
Athugaðu að það ætti ekki `demo1,demo2` vera bil ** fyrir og eftir kommu `,` í : **

Fyrir ofangreindar færibreytur er samsvarandi skráarskrá:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Efnisyfirlit

`i18n.site` Mun keyra `js` viðbótina `.i18n/hook/after.tran/TOC.js` í kynningarvöruhúsinu til að lesa möppuskrána `doc` sem samsvarar sniðmátsstillingunni `TOC` til að búa til `json` í möppuútlínunni.

Ef þú notar `doc` verður þú að hafa þetta viðbætur.

Ef þú frumstillir `i18n.site` úr tómri möppu, mundu að afrita `.i18n` í kynningarverkefninu í möppuna þína.

`Doc` mun birta efnisyfirlitið út frá mynduðu `json` .

##### Ítarleg Efnisskýring

Innihaldið er sem hér : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Notaðu Inndrátt Til Að Gefa Til Kynna Stig

Fyrir ofan `en/blog/TOC` `README.md` í fyrstu línu samsvarar `i18n.site` á myndinni hér að neðan, sem er nafn verkefnisins.

Næstu tvær línur eru eins og sýnt er á skjámyndinni hér að neðan.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` samsvarar til `News` ,
`news/begin.md` samsvarar til `Our Product is Online !`

`TOC` Skráin er inndregin til að gefa til kynna stigveldistengsl útlínunnar og styður margþrepa inndrátt.

##### Foreldrastigið Skrifar Aðeins Titilinn, Ekki Innihaldið.

Þegar það eru mörg stig inndráttar skrifar foreldrastigið aðeins titilinn en ekki innihaldið. Annars verður leturfræði ruglað.

##### Verkefnið README.md 

`README.md` af verkefninu, til dæmis, getur þú skrifað efni í `en/demo2/README.md` .

Athugið að innihald þessarar skráar sýnir ekki efnisyfirlit, svo mælt er með því að takmarka lengdina og skrifa stuttan inngang.

###### Verkefni Slagorð

Eins og þú sérð `Deme Two` fyrir neðan fellivalmyndina og heiti verkefnalista, er `Your Project slogan` þess :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: samsvarar fyrstu línu `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Verkefni `README.md` Litið verður á innihaldið á eftir fyrsta tvípunkti `:` í titlinum á fyrsta stigi sem slagorð verkefnisins.

Notendur frá Kína, Japan og Kóreu, vinsamlegast athugið að þú verður að nota hálf-breidd `:` í stað þess að vera í fullri breidd.

##### Hvernig Á Að Flytja TOC Í Lausu?

`TOC` Skráin þarf að vera sett í möppu frummálsins.

Til dæmis, ef frummálið er kínverska, þá `zh/blog/TOC` `TOC`

Ef frumtungumálinu er breytt þarftu að hópfæra `TOC` á ákveðnu tungumáli í verkefninu yfir á annað tungumál.

Þú getur vísað til eftirfarandi skipana:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Vinsamlegast breyttu `en/` og `zh/` í skipuninni hér að ofan í tungumálakóðann þinn.


