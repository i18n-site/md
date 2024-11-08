# .i18n/conf.yml

Iboneza dosiye ya `i18n.site` ni `.i18n/conf.yml` nibirimo nibi bikurikira :

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

Muri byo, ibintu `upload` kugeza kuri `ext:` iboneza bivuze ko `.md` gusa bizashyirwaho mugihe cyo gutangaza.

## Kugendagenda Hejuru nav

`nav:` iboneza ryamahitamo, bihuye na menu yo kugendagenda hejuru yurugo.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Muri byo, `i18n: home` ihuye na `home: Home` kuri `en/i18n.yml` (aho `en` ni ururimi rwinkomoko yo guhindura umushinga).

`en/i18n.yml` ibirimo ninyandiko yerekanwe muri menu yo kugendagenda, izahindurwa ukurikije `fromTo` muburyo, urugero, yahinduwe kuri `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ubusobanuro bumaze kurangira, urashobora guhindura agaciro k'ubuhinduzi `yml` , ariko ntukongere cyangwa ngo usibe urufunguzo rw'ubuhinduzi `yml` .

### `use: Toc` Cyinyandiko Hamwe Nurutonde

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` bisobanura gutanga ukoresheje icyitegererezo `Toc` , gitanga icyitegererezo `Markdown` .

`TOC` ni impfunyapfunyo ya `Table of Contents` Iyo iyi shusho yatanzwe, urucacagu rwiyi dosiye `Markdown` ruzerekanwa kuruhande.

`url:` yerekana inzira ya dosiye ya `Markdown` ( `/` ihuye numuzi wububiko bwa `/README.md` , iri zina rya dosiye risaba inyuguti nkuru ninyuguti nto).

### `use: Md` Cyinyandiko Idafite Urucacagu

Inyandikorugero `Md` na `Toc` inyandikorugero nimwe kandi byombi bikoreshwa mugutanga `Markdown` imwe. Ariko inyandikorugero `Md` ntabwo yerekana urucacagu kuruhande.

Urashobora guhindura `use: Toc` muburyo bwavuzwe haruguru kuri `use: Md` , ukore `i18n.site` mububiko `md` , hanyuma usure URL ibanziriza iterambere kugirango urebe impinduka kurugo.

### `use: Blog` Inyandikorugero

Inyandikorugero ya blog yerekana urutonde rwibintu (imitwe n'ibisobanuro) ukurikije igihe cyo gutangaza.

[. Kanda hano wige kubyerekeye imiterere yihariye](/i18n.site/conf/blog)

### `use: Doc` Bya Dosiye Yinyandiko

Muri dosiye iboneza:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Yerekana gukoresha `Doc` mugushushanya.

`Doc` inyandikorugero ishyigikira guhuza `MarkDown` kugirango itange inyandiko zerekana imishinga imwe cyangwa myinshi.

#### Imishinga Myinshi Na Dosiye Nyinshi

Iboneza rya `.i18n/conf.yml` muri `i18n:doc` nuburyo bwinshi-bwimishinga myinshi-yerekana uburyo.

Hano, `menu: NB demo1,demo2` , bisobanura gukoresha inyandikorugero `NB` kugirango utange menu yamanutse.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , aribwo ahinnye ya `Name Breif` , bivuze ko menu yamanutse ishobora kwerekana izina na slogan yumushinga.

`NB` ikurikirwa na parameter `demo1,demo2` yayinyujije.

: ** Ntihakagombye kubaho umwanya ** mbere na nyuma ya koma `,` muri `demo1,demo2` .

Ububiko bwerekana ububiko bwa dosiye kubipimo byavuzwe haruguru ni:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Umushinga Umwe Dosiye Nyinshi

Niba ufite umushinga umwe gusa, urashobora kugena kuburyo bukurikira.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Umushinga umwe hamwe namadosiye menshi ntabwo ashyigikira kugena `url` nkinzira yumuzi `/`
> nav:__ __conf.yml `nav:`
> Igishushanyo nugutandukanya neza inyandiko zumushinga, blog nibindi bikubiyemo binyuze mububiko.
> Birasabwa gukoresha dosiye imwe nurupapuro rumwe nkurupapuro rwurugo.

> [!TIP]
> Niba `url` itanditswe, `url` isanzwe ku gaciro ka `i18n` Iri tegeko naryo ritangira gukurikizwa kubindi byitegererezo.

#### Imbonerahamwe Ya TOC Indangagaciro

Niba inyandikorugero `use: Doc` ishoboye muburyo, nyamuneka ushoboze gucomeka muri `i18n.addon/toc` muri `.i18n/conf.yml` Iboneza nuburyo bukurikira :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` izahita yinjiza kandi ikore iyi plug-in, soma `TOC` dosiye yububiko bwa dosiye, hanyuma itange `json` urutonde rwububiko.

Niba ari umushinga umwe ufite amadosiye menshi, imizi yububiko `TOC` nububiko bujyanye na `url:` mububiko bwururimi rwinkomoko Urugero, niba ururimi rwinkomoko ari Igishinwa: dosiye ihuye na `url: flashduty` ni `zh/flashduty/TOC` .

Niba ari imishinga myinshi namadosiye menshi, nta mpamvu yo gushiraho `url:` Ububiko bwumuzi wa `TOC` nububiko bujyanye nagaciro ka `i18n` .

##### Ibisobanuro Birambuye

`en/blog/TOC` Ibirimo nibi bikurikira :

```
README.md

news/README.md
  news/begin.md
```

##### Koresha Indentation Kugirango Werekane Urwego

`README.md` kumurongo wambere wa `en/blog/TOC` hejuru ihuye na `i18n.site` mwishusho hepfo, nizina ryumushinga.

Imirongo ibiri ikurikira nkuko bigaragara mumashusho hepfo.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ihuye na `News` ,
`news/begin.md` ihuye na `Our Product is Online !`

Amadosiye `TOC` yatanzwe kugirango yerekane isano iri hagati yurucacagu, ishyigikire urwego rwinshi, hamwe nibitekerezo bitangirira kuri `# ` .

##### Urwego Rwababyeyi Rwandika Gusa Umutwe, Ntabwo Ibirimo.

Iyo hari urwego rwinshi rwo kwerekana, urwego rwababyeyi rwandika umutwe gusa ntabwo ari ibirimo. Bitabaye ibyo, imyandikire izarangirika.

##### Umushinga README.md

Ibirimo birashobora kwandikwa mubintu `README.md` , nka `en/demo2/README.md` .

Menya ko ibikubiye muri iyi dosiye biterekana imbonerahamwe yibirimo, bityo birasabwa kugabanya uburebure no kwandika intangiriro ngufi.

###### Icivugo C'umushinga

Urashobora kubona ko `Deme Two` ifite umushinga wumushinga munsi yigitonyanga cyamanutse hamwe na catalog yerekana izina ryumushinga `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Ibi bihuye numurongo wambere wa `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Ibirimo nyuma yumurongo wambere wa `:` wurwego rwambere rwumutwe wumushinga `README.md` bizafatwa nkicyerekezo cyumushinga.

Abakoresha baturutse mubushinwa, Ubuyapani na Koreya, nyamuneka menya ko ugomba gukoresha igice cyubugari bwa colon `:` aho gukoresha ubugari bwuzuye.

##### Nigute Ushobora Kwimura TOC Kubwinshi?

`TOC` dosiye igomba gushyirwa mububiko bwururimi rwinkomoko.

Kurugero, niba ururimi rwinkomoko ari Igishinwa, noneho `TOC` hejuru ni `zh/blog/TOC` .

Niba ururimi rwinkomoko rwahinduwe, ugomba guhuza kwimura dosiye `TOC` yururimi runaka mumushinga kurundi rurimi.

Urashobora kwifashisha amategeko akurikira:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Nyamuneka hindura `en/` na `zh/` mumabwiriza yavuzwe haruguru kururimi rwawe.

### Ubusanzwe Gupakira Nta Nzira Iboneza

Kugirango inzira runaka igerweho, niba inzira ibanziriza iyambere itagizwe muri `nav:` , dosiye `MarkDown` ihuye ninzira izapakirwa byanze bikunze hanyuma itangwe ukoresheje inyandikorugero `Md` .

Kurugero, niba `/test` igerwaho kandi `nav:` igashyirwaho nta prefix yiyi nzira, kandi ururimi ruriho ubu ni icyongereza (code `en` ), `/en/test.md` bizaterwa nubusa hanyuma bitangwe ukoresheje icyitegererezo cya `Md` .

Niba `/en/test.md` iyi dosiye idahari, urupapuro `404` rusanzwe ruzerekanwa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">