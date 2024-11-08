# .i18n/conf.yml

Fayili ya vukorhokeri bya `i18n.site` i `.i18n/conf.yml` naswona nhundzu yi le ka xiyimo lexi landzelaka :

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

Exikarhi ka swona, `upload` ku ya eka `ext:` wa nchumu wa vuhlanganisi swi vula leswaku i `.md` ntsena lowu nga ta layicha loko ku kandziyisiwa.

## Top Navigation nav

`nav:` swihlawulekisi swa vuhlanganisi, leswi fambelanaka na menyu yo fambafamba ehenhla ka pheji ya le kaya.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Exikarhi ka swona, `i18n: home` yi fambelana na `home: Home` eka `en/i18n.yml` (laha `en` ku nga ririmi ra xihlovo xa vuhundzuluxi bya phurojeke).

`en/i18n.yml` nhundzu i tsalwa leri kombisiweke eka menyu yo fambafamba, leri nga ta hundzuluxeriwa ku ya hi `fromTo` eka xivumbeko, xikombiso, ri hundzuluxeriwa eka `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Endzhaku ka loko vuhundzuluxeri byi hetiwile, u nga cinca ntikelo wa vuhundzuluxeri `yml` , kambe u nga engeteli kumbe ku susa xilotlelo xa vuhundzuluxeri `yml` .

### 0Thempleyiti Ya Dokhumente `use: Toc` Leyi Nga Na Outline

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` swi vula ku hundzuluxela hi ku tirhisa xifaniso `Toc` , lexi nga ku hundzuluxela xifaniso xin’we `Markdown` .

`TOC` i xifunengeto xa `Table of Contents` Loko xifaniso lexi xi endliwile, xivumbeko xa fayili leyi `Markdown` xi ta kombisiwa eka barhi ya le tlhelo.

`url:` yi yimela ndlela ya fayili ya `Markdown` ( `/` yi fambelana na xikombo xa timitsu `/README.md` , vito leri ra fayili ri lava xirhangi xa maletere lamakulu na xilandzi lexitsongo).

### 0Xifaniso Xa Dokhumente `use: Md` Leyi Nga Riki Na Xivumbeko

Xifaniso `Md` na xifaniso `Toc` swa fana naswona havumbirhi bya swona swi tirhisiwa ku humesa fayili yin’we `Markdown` . Kambe xifaniso `Md` a xi kombisi xivumbeko xa le tlhelo eka barhi ya le tlhelo.

U nga cinca `use: Toc` eka vukorhokeri lebyi nga laha henhla ku va `use: Md` , u fambisa `i18n.site` eka `md` directory nakambe, ivi u endzela URL ya xikombiso xa nhluvukiso ku languta ku cinca eka pheji ya le kaya.

### `use: Blog` Swifaniso Swa Blog

Xifaniso xa blog xi kombisa nxaxamelo wa tiatikili (tinhlokomhaka na switlhokovetselo) hi ku landzelelana ka nkarhi wa ku kandziyisiwa.

[→ Click laha ku dyondza hi ta configuration yo karhi](/i18n.site/conf/blog)

### `use: Doc` to Tala Ta Matsalwa Ya Fayili

Eka fayili ya vuhlanganisi:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Swi kombisa ku tirhisa `Doc` eka ku hundzuluxela ka xifaniso.

`Doc` thempleyiti yi seketela ku hlanganisa `MarkDown` yo tala ku tumbuluxa swivumbeko swa matsalwa eka tiphurojeke tin’we kumbe to tala.

#### Tiphurojeke to Tala Na Tifayela to Tala

Ku lulamisiwa ka `.i18n/conf.yml` eka `i18n:doc` i ndlela yo hundzuluxela ya tifayela to tala ta tiphurojeke to tala.

Laha, `menu: NB demo1,demo2` , swi vula ku tirhisa xifaniso `NB` ku humesa menyu leyi nga ehansi.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , ku nga xifunengeto xa `Name Breif` , swi vula leswaku menyu leyi nga ehansi yi nga kombisa vito na xiga xa phurojeke.

`NB` yi landzeriwa hi parameter `demo1,demo2` leyi hundziseriweke eka yona.

Xiya : ** A ku fanelanga ku va na swivandla ** emahlweni na le ndzhaku ka khoma `,` eka `demo1,demo2` .

Fayili ya xikombo xa vukorhokeri leyi fambelanaka ya tipharamitha leti nga laha henhla i:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Single Project Tifayela to Tala

Loko u ri na phurojeke yin’we ntsena, u nga yi lulamisa hi ndlela leyi landzelaka.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Phurojeke yin’we leyi nga na tifayela to tala a yi seketeli ku lulamisa `url` tanihi ndlela ya timitsu `/`
> Loko __conf.yml → nav:__ Ku nga ri na ndlela ya timitsu leyi hleriweke, loko u nghena eka pheji ya le kaya ya webusayiti, yi ta tsariwa nakambe hi ku tisungulela eka URL yo sungula ehansi ka vukorhokeri bya `nav:` .
> Dizayini leyi i ku hambanyisa ku antswa matsalwa ya phurojeke, tiblog na swin’wana leswi nga endzeni hi ku tirhisa tidayirekitara.
> Swi ringanyetiwa ku tirhisa fayili yin’we na tluka rin’we tanihi tluka ra le kaya.

> [!TIP]
> Loko `url` yi nga tsariwanga, `url` yi default eka ntikelo wa `i18n` Nawu lowu wu tlhela wu tirha eka tithempleyiti tin’wana.

#### TOC Tafula Ra Swilo Leswi Nga Endzeni Index

Loko xifaniso xa `use: Doc` xi pfuriwile eka vuhlanganisi, hi kombela u pfumelela plug-in `i18n.addon/toc` eka `.i18n/conf.yml` Xivumbeko xi tirha hi ndlela leyi landzelaka :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` yi ta nghenisa hi ku tisungulela no tirhisa plug-in leyi, yi hlaya `TOC` fayili ya index ya directory, ivi yi tumbuluxa `json` outline ya directory.

Loko ku ri phurojeke yin’we leyi nga na tifayela to tala, xikombo xa timitsu `TOC` i xikombo lexi fambelanaka na `url:` eka xikombo xa ririmi ra xihlovo Xikombiso, loko ririmi ra xihlovo ri ri ra Xichayina: fayili leyi fambelanaka na `url: flashduty` i `zh/flashduty/TOC` .

Loko ku ri tiphurojeke to tala na tifayela to tala, a swi bohi ku lulamisa `url:` Xikombo xa timitsu xa `TOC` i xikombo lexi fambelanaka na ntikelo wa `i18n` .

##### Nhlamuselo Ya Vuxokoxoko Bya Nhundzu

`en/blog/TOC` leyi nga endzeni yi le ka xiyimo lexi landzelaka :

```
README.md

news/README.md
  news/begin.md
```

##### Tirhisa Indentation Ku Kombisa Ti Levele

`README.md` eka layini yo sungula ya `en/blog/TOC` laha henhla yi fambelana na `i18n.site` eka xifaniso lexi nga laha hansi, ku nga vito ra phurojeke.

Mitila yimbirhi leyi landzelaka yi tanihilaha swi kombisiweke hakona eka xifaniso xa xikirini lexi nga laha hansi.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` yi fambelana na `News` , .
`news/begin.md` yi fambelana na `Our Product is Online !`

`TOC` wa tifayela ti nghenisiwile ku kombisa vuxaka bya xiyimo xa le henhla bya xivumbeko, ku seketela ku nghenisiwa ka swiyimo swo tala, na mavonelo ya milayeni lama sungulaka hi `# ` .

##### Level Ya Mutswari Yi Tsala Ntsena Nhlokomhaka, Ku Nga Ri Leswi Nga Endzeni.

Loko ku ri na swiyimo swo tala swa ku nghenisa, xiyimo xa mutswari xi tsala ntsena nhlokomhaka ku nga ri leswi nga endzeni. Handle ka sweswo, ku thayipa ku ta pfilunganyeka.

##### Phurojeke Ya README.md

Vuxokoxoko byi nga tsariwa eka nhlokomhaka ya `README.md` , ku fana na `en/demo2/README.md` .

Xiya leswaku leswi nga endzeni ka fayili leyi a swi kombisi xivumbeko xa tafula ra swilo leswi nga endzeni, hikwalaho swa hlohleteriwa ku ringanyeta ku leha na ku tsala xingheniso xo koma.

###### Xivulavulelo Xa Phurojeke

U nga vona leswaku `Deme Two` yi na tagline ya yona `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Leswi swi fambelana na layini yo sungula ya `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Nhundzu endzhaku ka kholoni yo sungula `:` ya nhlokomhaka ya xiyimo xo sungula ya phurojeke `README.md` yi ta tekiwa tanihi xiga xa phurojeke.

Vatirhisi vo huma eChina, Japan na Korea, hi kombela mi xiya leswaku mi fanele `:` tirhisa kholoni ya hafu ya ku anama ematshan’wini ya kholoni ya ku anama loku heleleke.

##### Xana U Nga Yi Fambisa Njhani TOC Hi Vunyingi?

`TOC` wa tifayela ti lava ku vekiwa eka xikombo xa ririmi ra xihlovo.

Hi xikombiso, loko ririmi ra xihlovo ri ri ra Xichayina, kutani `TOC` laha henhla i `zh/blog/TOC` .

Loko ririmi ra xihlovo ri cinciwile, u fanele ku batch move tifayela ta `TOC` ta ririmi ro karhi eka phurojeke eka ririmi rin’wana.

U nga languta swileriso leswi landzelaka:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Hi kombela u cinca `en/` na `zh/` eka xileriso lexi nga laha henhla eka khodi ya ririmi ra wena.

### Ku Layicha Ka Ntolovelo Handle Ka Ndlela Ya Vuhlanganisi

Eka ndlela yo karhi leyi nghenisiwaka, loko xirhangi xa ndlela xi nga hleriwanga eka `nav:` , fayili ya `MarkDown` leyi fambelanaka na ndlela yi ta layicha hi ku tiyimisela naswona yi ta endliwa hi ku tirhisa xifaniso `Md` .

Xikombiso, loko `/test` yi nghenisiwile naswona `nav:` yi lulamisiwile handle ka xirhangi xa ndlela leyi, naswona ririmi ra sweswi ro pfula ri ri Xinghezi (khodi `en` ), `/en/test.md` yi ta layicha hi ku tiyimisela naswona yi ta endliwa hi ku tirhisa xifaniso xa `Md` .

Loko `/en/test.md` fayili leyi yi nga ri kona, tluka ra `404` ra ntolovelo ri ta kombisiwa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">