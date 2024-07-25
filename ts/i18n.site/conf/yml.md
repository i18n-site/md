# .i18n/xihlanganisi.yml

`i18n.site` Fayili ya vuhlanganisi i `.i18n/conf.yml` .

Handle ka swiyimiso `ignore:` na `i18n:` swa [`i18`](/i18) , fayili ya vuhlanganisi yi le ka xiyimo lexi landzelaka:

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

Exikarhi ka swona, nchumu wa `ext:` configuration wa `upload` wu vula leswaku i `.md` ntsena leyi nga ta layicha loko ku kandziyisiwa.

## Top Navigation nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Exikarhi `en/i18n.yml` `home: Home` , `i18n: home`

`en/i18n.yml` `zh/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Endzhaku ka loko vuhundzuluxeri byi hetiwile, u nga cinca nkoka wa `yml` eka vuhundzuluxeri, kambe u nga engeteli kumbe ku susa xilotlelo xa vuhundzuluxeri `yml` .

### `use: Toc` , Xifaniso Xa Fayili Yin’we (Leyi Nga Na Xivumbeko)

`nav` lulamisa :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` swi vula ku tirhisa `Toc` rendering, leyi nga ku hundzuluxela `Markdown` template yin'we.

`TOC` `Table of Contents` `Markdown`

`url:` yi yimela ndlela ya fayili ya `Markdown` ( `/` yi fambelana na xikombo xa timitsu `/README.md` , vito leri ra fayili ri lava xirhangi xa maletere lamakulu na xilandzi lexitsongo).

### `use: Md` , Xifaniso Xa Fayili Yin’we (Ku Hava Xivumbeko Xa Le Henhla)

`Md` Template yi fana na `Toc` , havumbirhi bya swona swi tirhisiwa ku humesa fayili yin'we `Markdown` . Kambe `Md` xifaniso a xi kombisi xivumbeko xa le tlhelo eka barhi ya le tlhelo.

U nga cinca `use: Toc` eka vukorhokeri lebyi nga laha henhla ku `use: Md` , u tsutsuma `i18n.site` eka `md` directory nakambe, ivi u endzela URL ya xikombiso xa nhluvukiso ku languta ku cinca eka pheji ya le kaya.

### Ku Layicha Ka Ntolovelo Handle Ka Ndlela Ya Vuhlanganisi

Loko xirhangi xa ndlela xa ndlela yo karhi leyi nghenisiwaka xi nga hleriwanga eka `nav:` fayili ya `MarkDown` leyi fambelanaka na ndlela yi ta layicha hi ku tiyimisela naswona yi ta endliwa hi ku tirhisa xifaniso xa `Md` .

`/en/test.md` , `nav:` `en` `Md` `/test`

Loko `/en/test.md` fayili leyi yi nga ri kona, pheji ya `404` ya ntolovelo yi ta kombisiwa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Xifaniso Xa Tifayela to Tala

Eka fayili ya vuhlanganisi:

```
  - i18n: blog
    use: Doc
```

Swi kombisa ku tirhisa `Doc` eka ku hundzuluxela ka xifaniso.

`Doc` `MarkDown`

#### Phurojeke Yin’we (Tifayela to Tala) .

Eka leswi nga laha henhla i ndlela `blog` phurojeke yin'we ya `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Loko url Yi Nga Ri Na Nchumu, Yi Default Eka Value Ya i18n

`url` u nga `i18n` `url`

Ndlela yo tsala leyi nga laha henhla yi ringana na ku va na `url: blog` naswona fayili ya yona leyi fambelanaka na yona i `en/blog/TOC` .

#### Tiphurojeke to Tala

`.i18n/conf.yml` Ku lulamisiwa eka `i18n:doc` i movha wa tiphurojeke to tala.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Laha, `menu: NB demo1,demo2` swi vula ku tirhisa `NB` ku humesa menyu leyi nga ehansi.

`NB` , i xifunengeto xa `Name Breif` , lexi kombisaka leswaku menyu leyi nga ehansi yi nga kombisa vito na xiga xa phurojeke.

`NB` yi landzeriwa hi parameter `demo1,demo2` leyi hundziseriweke eka yona.
: ** A ku fanelanga ku va na swivandla ** emahlweni na le ndzhaku ka khoma `,` eka `demo1,demo2`

Eka tipharamitha leti nga laha henhla, fayili ya index ya directory leyi fambelanaka i:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Tafula Ra Swilo Leswi Nga Endzeni Index

`i18n.site` Yi ta tirhisa `js` plugin `.i18n/hook/after.tran/TOC.js` eka vuhlayiselo bya demo ku hlaya fayili ya index ya directory `doc` leyi fambelanaka na configuration ya template `TOC` ku tumbuluxa `json` ya outline ya directory.

Loko u tirhisa `doc`

Loko u sungula phurojeke ya `i18n.site` ku suka eka folda leyi nga riki na nchumu, tsundzuka ku kopa `.i18n` eka phurojeke ya demo eka xikombo xa wena.

`Doc` `json`

##### Nhlamuselo Ya Vuxokoxoko Bya Nhundzu

`en/blog/TOC` :

```
README.md

news/README.md
  news/begin.md
```

##### Tirhisa Indentation Ku Kombisa Ti Levele

Laha henhla `en/blog/TOC` `README.md` eka layini yo sungula yi fambelana na `i18n.site` eka xifaniso lexi nga laha hansi, ku nga vito ra phurojeke.

Mitila yimbirhi leyi landzelaka yi tanihilaha swi kombisiweke hakona eka xifaniso xa xikirini lexi nga laha hansi.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News`
swi fambelana na `Our Product is Online !` `news/begin.md`

`TOC` Fayili yi nghenisiwile ku kombisa vuxaka bya xiyimo xa le henhla bya xivumbeko xa xivumbeko naswona yi seketela ku nghenisiwa ka swiyimo swo tala.

##### Level Ya Mutswari Yi Tsala Nhlokomhaka Ntsena, Ku Nga Ri Leswi Nga Endzeni.

Loko ku ri na swiyimo swo tala swa ku nghenisa, xiyimo xa mutswari xi tsala ntsena nhlokomhaka ku nga ri leswi nga endzeni. Handle ka sweswo, ku thayipa ku ta pfilunganyeka.

##### Phurojeke Ya README.md 

`README.md` phurojeke, xikombiso, u nga tsala nhundzu eka `en/demo2/README.md` .

Xiya leswaku leswi nga endzeni ka fayili leyi a swi kombisi xivumbeko xa tafula ra swilo leswi nga endzeni, hikwalaho swa hlohleteriwa ku ringanyeta ku leha na ku tsala xingheniso xo koma.

###### Xivulavulelo Xa Phurojeke

Hilaha u nga : vonaka `Your Project slogan` , `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: swi fambelana na ntila wo sungula `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Project `README.md` Swilo leswi nga endzhaku ka kholoni yo sungula `:` eka nhlokomhaka ya xiyimo xo sungula swi ta tekiwa tanihi xiga xa phurojeke.

Vatirhisi lava humaka eChina, Japani na Korea, hi kombela mi xiya leswaku mi fanele ku tirhisa colon `:` hafu yo anama ematshan’wini ya colon ya ku anama loku heleleke.

##### Xana U Nga Yi Fambisa Njhani TOC Hi Vunyingi?

`TOC` Fayili yi lava ku vekiwa eka xikombo xa ririmi ra xihlovo.

Xikombiso, loko ririmi ra xihlovo ri ri `zh/blog/TOC` Xichayina, kutani `TOC`

Loko ririmi ra xihlovo ri cinciwile, u fanele ku batch move `TOC` hi ririmi ro karhi eka phurojeke ku ya eka ririmi rin’wana.

U nga languta swileriso leswi landzelaka:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Hi kombela u cinca `en/` na `zh/` eka xileriso lexi nga laha henhla eka khodi ya ririmi ra wena.


