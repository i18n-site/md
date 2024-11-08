# .i18n/conf.yml

Stillingarskráin fyrir `i18n.site` er `.i18n/conf.yml` og innihaldið er sem hér segir :

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

Meðal þeirra þýðir `upload` til `ext:` stillingaratriði að aðeins `.md` verður hlaðið upp við birtingu.

## Topp Flakk nav

`nav:` stillingarvalkostir, sem samsvara yfirlitsvalmyndinni efst á heimasíðunni.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Meðal þeirra samsvarar `i18n: home` `home: Home` á móti `en/i18n.yml` (þar sem `en` er frummál verkefnisþýðingarinnar).

`en/i18n.yml` innihald er textinn sem birtist í yfirlitsvalmyndinni, sem verður þýddur samkvæmt `fromTo` í uppsetningunni, til dæmis þýddur á `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Eftir að þýðingunni er lokið geturðu breytt gildi þýðingar `yml` , en ekki bæta við eða eyða lykil þýðingar `yml` .

### `use: Toc` Sniðmát Fyrir Stakt Skjala Með Útlínum

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` þýðir flutningur með því að nota `Toc` sniðmát, sem er að gera eitt `Markdown` sniðmát.

`TOC` er skammstöfunin á `Table of Contents` Þegar þetta sniðmát er birt munu útlínur þessarar `Markdown` skráar birtast í hliðarstikunni.

`url:` táknar skráarslóð `Markdown` ( `/` samsvarar rótarskránni `/README.md` , þetta skráarnafn krefst hástafa forskeyti og lágstafa viðskeyti).

### `use: Md` Sniðmát Fyrir Stakt Skjala Án Útlínu

`Md` sniðmátið og `Toc` sniðmátið eru þau sömu og bæði eru notuð til að gera eina `Markdown` skrá. En `Md` sniðmátið sýnir ekki útlínur í hliðarstikunni.

Þú getur breytt `use: Toc` í ofangreindri stillingu í `use: Md` , keyrt `i18n.site` í `md` möppunni aftur og farið svo á forskoðunarslóð þróunar til að fylgjast með breytingunum á heimasíðunni.

### `use: Blog` Bloggsniðmát

Bloggsniðmátið sýnir lista yfir greinar (titla og útdrætti) í röð eftir útgáfutíma.

[→ Smelltu hér til að læra um tiltekna uppsetningu](/i18n.site/conf/blog)

### `use: Doc` Skjalasniðmát

Í stillingarskránni:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Gefur til kynna að nota `Doc` fyrir sniðmátsbirtingu.

`Doc` sniðmát styður samþættingu margra `MarkDown` til að búa til skjalútlínur fyrir stök eða mörg verkefni.

#### Mörg Verkefni Og Margar Skrár

Stillingin á `.i18n/conf.yml` í `i18n:doc` er margverkefna fjölskráa flutningshamur.

Hér þýðir `menu: NB demo1,demo2` að nota `NB` sniðmátið til að birta fellivalmyndina.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , sem er skammstöfun á `Name Breif` , þýðir að fellivalmyndin getur sýnt nafn og slagorð verkefnisins.

`NB` er fylgt eftir af færibreytunni `demo1,demo2` sem er send til hennar.

Athugaðu : ** Það ætti ekki að vera bil ** á undan og eftir kommu `,` á móti `demo1,demo2` .

Samsvarandi skráarskrá fyrir ofangreindar breytur er:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Eitt Verkefni Margar Skrár

Ef þú ert aðeins með eitt verkefni geturðu stillt það á eftirfarandi hátt.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Eitt verkefni með mörgum skrám styður ekki stillingu `url` sem rótarslóð `/`
> Ef __conf.yml → nav:__ Engin rótarslóð er stillt, þegar þú opnar heimasíðu vefsíðunnar, verður hún sjálfkrafa endurskrifuð á fyrstu slóðina undir `nav:` stillingunni.
> Þessi hönnun er til að greina betur verkefnisskjöl, blogg og annað efni í gegnum möppur.
> Mælt er með því að nota eina skrá og eina síðu sem heimasíðu.

> [!TIP]
> Ef `url` er ekki skrifað er `url` sjálfgefið gildið `i18n` Þessi regla tekur einnig gildi fyrir önnur sniðmát.

#### TOC Efnisyfirlit

Ef sniðmát `use: Doc` er virkt í stillingunum, vinsamlegast virkjaðu viðbætur `i18n.addon/toc` í `.i18n/conf.yml` Stillingin er sem hér segir :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` mun sjálfkrafa setja upp og framkvæma þessa viðbót, lesa `TOC` skráarskrána og búa til `json` útlínur möppunnar.

Ef það er eitt verkefni með mörgum skrám er rótarskráin `TOC` skráin sem samsvarar `url:` í frummálsskránni Til dæmis, ef frummálið er kínverska: skráin sem samsvarar `url: flashduty` er `zh/flashduty/TOC` .

Ef það eru mörg verkefni og margar skrár er engin þörf á að stilla `url:` Rótarskráin `TOC` er skráin sem samsvarar gildinu `i18n` .

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

`TOC` skrár eru dregnar inn til að gefa til kynna stigveldistengsl útlínunnar, styðja inndrátt á mörgum stigum og línu athugasemdir sem byrja á `# ` .

##### Foreldrastigið Skrifar Aðeins Titilinn, Ekki Innihaldið.

Þegar það eru mörg stig inndráttar skrifar yfirstigið aðeins titilinn en ekki innihaldið. Annars verður leturfræði ruglað.

##### Verkefnið README.md

Hægt er að skrifa efni í lið `README.md` , eins og `en/demo2/README.md` .

Athugið að innihald þessarar skráar sýnir ekki efnisyfirlit, svo mælt er með því að takmarka lengdina og skrifa stuttan inngang.

###### Verkefni Slagorð

Þú getur séð að `Deme Two` hefur verkefnismerkið fyrir neðan fellivalmyndina og heiti verkefnalista `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Þetta samsvarar fyrstu röðinni af `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Litið verður á innihaldið á eftir fyrsta tvípunkti `:` í titli á fyrsta stigi verkefnis `README.md` sem slagorð verkefnisins.

Notendur frá Kína, Japan og Kóreu, vinsamlega athugið að þú ættir að nota hálfbreidd tvípunkt `:` í stað fullrar breiddar.

##### Hvernig Á Að Flytja TOC Í Lausu?

`TOC` skrár þurfa að vera settar í möppu frummálsins.

Til dæmis, ef frummálið er kínverska, þá er `TOC` fyrir ofan `zh/blog/TOC` .

Ef frumtungumálinu er breytt þarftu að færa `TOC` skrár á ákveðnu tungumáli í verkefninu á annað tungumál.

Þú getur vísað í eftirfarandi skipanir:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Vinsamlegast breyttu `en/` og `zh/` í skipuninni hér að ofan í tungumálakóðann þinn.

### Sjálfgefin Hleðsla Án Stillingarslóðar

Fyrir ákveðna slóð sem verið er að nálgast, ef slóðaforskeytið er ekki stillt í `nav:` , verður `MarkDown` skráin sem samsvarar slóðinni sjálfgefið hlaðin og birt með `Md` sniðmátinu.

Til dæmis, ef `/test` er opnuð og `nav:` er stillt án forskeyti þessarar slóðar og núverandi vafratungumál er enska (kóði `en` ), verður `/en/test.md` sjálfgefið hlaðið og birt með sniðmáti `Md` .

Ef `/en/test.md` þessi skrá er ekki til mun sjálfgefin `404` síða birtast.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">