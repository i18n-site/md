# .i18n/conf.yml

Fayil ɗin daidaitawa don `i18n.site` shine `.i18n/conf.yml` kuma abun ciki shine kamar haka :

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

Daga cikin su, `upload` zuwa `ext:` abu na daidaitawa yana nufin cewa `.md` kawai za a loda lokacin bugawa.

## Babban Kewayawa nav

`nav:` daidaitawa, daidai da menu na kewayawa a saman shafin gida.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Daga cikin su, `i18n: home` yayi daidai da `home: Home` a cikin `en/i18n.yml` (inda `en` shine harshen tushen fassarar aikin).

`en/i18n.yml` abun ciki shine rubutun da aka nuna a cikin menu na kewayawa, wanda za'a fassara shi bisa ga `fromTo` a cikin tsari, misali, fassara zuwa `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Bayan an gama fassarar, zaku iya canza darajar fassarar `yml` , amma kar a ƙara ko share maɓallin fassarar `yml` .

### `use: Toc` Samfurin Daftarin Aiki Guda Ɗaya Tare Da Shaci

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` yana nufin yin amfani da samfuri `Toc` , wanda ke yin samfuri guda `Markdown` .

`TOC` shine gajartawar `Table of Contents` Lokacin da aka yi wannan samfuri, za a nuna jigon wannan fayil ɗin `Markdown` a cikin labarun gefe.

`url:` yana wakiltar hanyar fayil na `Markdown` ( `/` yayi daidai da tushen directory `/README.md` , wannan sunan fayil yana buƙatar prefix babba da ƙaramin ƙarami).

### 0 Samfurin Takaddar `use: Md` Ba Tare Da Fayyace Ba

Samfurin `Md` da samfuri `Toc` iri ɗaya ne kuma ana amfani da su duka don yin fayil guda `Markdown` . Amma samfuri `Md` baya nuna jita-jita a ma'aunin labarun gefe.

Kuna iya canza `use: Toc` a cikin tsarin da ke sama zuwa `use: Md` , sake gudanar da `i18n.site` a cikin kundin adireshi `md` , sannan ku ziyarci URL ɗin samfoti na ci gaba don lura da canje-canje a shafin farko.

### `use: Blog` Samfuran Blog

Samfuran rubutun ra'ayin kanka a yanar gizo yana nuna jerin labarai (lakabi da taƙaitaccen bayani) bisa tsari na lokacin bugawa.

[→ Danna nan don koyo game da takamaiman tsari](/i18n.site/conf/blog)

### `use: Doc` Samfuran Takaddun Fayil Da Yawa

A cikin fayil ɗin daidaitawa:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Yana nuna amfani da `Doc` don yin samfuri.

Samfurin `Doc` yana goyan bayan haɗa `MarkDown` da yawa don samar da ƙayyadaddun daftarin aiki don guda ɗaya ko ayyuka da yawa.

#### Ayyuka Da Yawa Da Fayiloli Masu Yawa

Daidaiton `.i18n/conf.yml` a cikin `i18n:doc` shine yanayin samar da manyan fayiloli da yawa.

Anan, `menu: NB demo1,demo2` , yana nufin amfani da samfuri `NB` don yin menu na ƙasa.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , wanda shine gajarta na `Name Breif` , yana nufin cewa menu mai saukewa zai iya nuna suna da taken aikin.

`NB` yana biye da siga `demo1,demo2` da aka wuce zuwa gare shi.

Lura : ** Kada a sami sarari ** kafin da bayan waƙafi `,` cikin `demo1,demo2` .

Fayil ɗin fihirisar adireshi mai dacewa don sigogin da ke sama shine:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Fayiloli Da Yawa Aiki Guda Ɗaya

Idan aikin daya ne kawai, zaku iya saita shi kamar haka.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Ayyuka guda ɗaya tare da fayiloli da yawa baya goyan bayan daidaitawa `url` azaman tushen hanyar `/`
> nav:__ __conf.yml `nav:`
> Wannan ƙirar ita ce mafi kyawun bambance takaddun aikin, bulogi da sauran abubuwan ciki ta hanyar kundayen adireshi.
> Ana ba da shawarar yin amfani da fayil guda ɗaya da shafi ɗaya azaman shafin gida.

> [!TIP]
> Idan `url` ba a rubuta ba, `url` yana lalata darajar `i18n` Wannan doka kuma tana aiki ga wasu samfuran.

#### TOC Tebur Abun Ciki Index

Idan an kunna samfuri `use: Doc` a cikin tsarin, da fatan za a ba da damar toshe-in `i18n.addon/toc` a cikin `.i18n/conf.yml` Tsarin yana kamar haka :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` za ta girka ta atomatik kuma aiwatar da wannan plug-in, karanta `TOC` fayil ɗin kundin adireshi, kuma ya samar da `json` jigon directory.

Idan aikin guda ɗaya ne tare da fayiloli da yawa, tushen directory `TOC` shine kundin adireshi wanda ya dace da `url:` a cikin kundin tushen harshen misali, idan tushen yaren Sinanci ne: fayil ɗin da ya dace da `url: flashduty` shine `zh/flashduty/TOC` .

Idan ayyuka ne da yawa da fayiloli masu yawa, babu buƙatar saita `url:` Tushen tushen `TOC` shine kundin adireshi wanda ya dace da ƙimar `i18n` .

##### Cikakken Bayanin Abun Ciki

`en/blog/TOC` da ke ciki shine kamar haka :

```
README.md

news/README.md
  news/begin.md
```

##### Yi Amfani Da Ciki Don Nuna Matakan

`README.md` a jere na farko na `en/blog/TOC` a sama yayi daidai da `i18n.site` a hoton da ke ƙasa, wanda shine sunan aikin.

Layukan biyu na gaba suna kamar yadda aka nuna a hoton da ke ƙasa.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` yayi daidai da `News` ,
`news/begin.md` yayi daidai da `Our Product is Online !`

Fayilolin `TOC` an ɗora su don nuna alaƙar matsayi na ƙayyadaddun ƙayyadaddun ƙayyadaddun ƙayyadaddun ƙayyadaddun bayanai, goyan bayan shigar da matakai da yawa, da sharhin layi wanda ya fara da `# ` .

##### Matsayin Iyaye Kawai Yana Rubuta Take, Ba Abun Ciki Ba.

Lokacin da akwai matakan shigarwa da yawa, matakin iyaye yana rubuta take kawai ba abun ciki ba. In ba haka ba, rubutun rubutu zai lalace.

##### Aikin README.md

Ana iya rubuta abun ciki a abu na `README.md` , kamar `en/demo2/README.md` .

Lura cewa abun ciki na wannan fayil baya nuna jerin abubuwan da ke ciki, don haka ana ba da shawarar iyakance tsayi da rubuta gajeriyar gabatarwa.

###### Taken Aikin

Kuna iya ganin cewa `Deme Two` yana da alamar `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Wannan yayi daidai da layin farko na `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Abubuwan da ke cikin bayan hanin farko na `:` na taken matakin farko na aikin `README.md` za a ɗauke su azaman taken aikin.

Masu amfani daga China, Japan da Koriya, da fatan za a yi amfani da hanin rabin nisa `:` maimakon cikakken hanji.

##### Yadda Za a Matsar Da TOC Da Yawa?

Ana buƙatar sanya fayilolin `TOC` a cikin kundin adireshin harshen tushen.

Misali, idan tushen harshen Sinanci ne, to `TOC` na sama shine `zh/blog/TOC` .

Idan harshen tushen ya canza, kuna buƙatar tsari matsar da fayilolin `TOC` na wani harshe a cikin aikin zuwa wani harshe.

Kuna iya komawa zuwa umarni masu zuwa:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Da fatan za a gyara `en/` da `zh/` a cikin umarnin da ke sama zuwa lambar yaren ku.

### Tsohuwar Lodi Ba Tare Da Hanyar Daidaitawa Ba

Don wata hanya da ake shiga, idan ba a saita prefix na hanyar a cikin `nav:` ba, fayil ɗin `MarkDown` wanda ya dace da hanyar za a ɗora shi ta tsohuwa kuma a yi shi ta amfani da samfurin `Md` .

Misali, idan an sami damar `/test` kuma an saita `nav:` ba tare da prefix na wannan hanyar ba, kuma harshen da ake amfani da shi a halin yanzu shine Ingilishi (lambar `en` ), `/en/test.md` za a loda shi ta tsohuwa kuma a yi shi ta amfani da samfuri `Md` .

Idan `/en/test.md` wannan fayil ɗin ba ya wanzu, za a nuna tsohowar shafi `404` .

<img src="//p.3ti.site/1721184299.avif" style="width:360px">