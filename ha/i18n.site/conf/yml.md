# .i18n/conf.yml

Bayanan martaba na `i18n.site` shine `.i18n/conf.yml` .

Sai dai saitunan [`i18`](/i18) , `ignore:` da `i18n:` , fayil ɗin daidaitawa shine kamar haka:

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

Daga cikin su, `upload` zuwa `ext:` abu na daidaitawa yana nufin cewa `.md` kawai za a loda lokacin bugawa.

## Babban Kewayawa nav

`nav:` daidaitawa, daidai da menu na kewayawa a saman shafin gida.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Daga cikinsu, `i18n: home` yayi daidai da `home: Home` a cikin `en/i18n.yml` .

`en/i18n.yml` za a fassara shi zuwa harsuna da yawa, kamar `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Bayan an gama fassarar, zaku iya canza darajar fassarar `yml` , amma kar a ƙara ko share maɓallin fassarar `yml` .

### `use: Toc` , Samfurin Fayil Guda Ɗaya (Tare Da Shaci)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` yana nufin yin amfani da samfuri `Toc` , wanda ke samar da samfuri guda `Markdown` .

`TOC` shine gajartawar `Table of Contents` Lokacin da aka yi wannan samfuri, za a nuna jigon wannan fayil ɗin `Markdown` a cikin labarun gefe.

`url:` yana wakiltar hanyar fayil na `Markdown` ( `/` yayi daidai da tushen directory `/README.md` , wannan sunan fayil yana buƙatar prefix babba da ƙaramin ƙarami).

### `use: Md` , Samfurin Fayil Guda Ɗaya (Babu Shaci)

Samfurin `Md` da samfuri `Toc` iri ɗaya ne kuma ana amfani da su duka don yin fayil guda `Markdown` . Amma samfuri guda `Md` baya nuna jita-jita a ma'aunin labarun gefe.

Kuna iya canza `use: Toc` a cikin tsarin da ke sama zuwa `use: Md` , sake gudanar da `i18n.site` a cikin kundin adireshi `md` , sannan ku ziyarci URL ɗin samfoti na ci gaba don lura da canje-canje a shafin farko.

### Tsohuwar Lodi Ba Tare Da Hanyar Daidaitawa Ba

Idan an isa ga wata hanya kuma ba a saita prefix ɗin sa a cikin `nav:` ba, fayil ɗin `MarkDown` wanda ya dace da hanyar za a loda shi ta tsohuwa kuma a yi shi ta amfani da samfuri `Md` .

Misali, idan an sami damar `/test` , kuma an saita `nav:` ba tare da wannan hanyar ba, kuma harshen shafin Ingilishi ne (lambar `en` ), `/en/test.md` za a loda shi ta tsohuwa kuma a yi shi ta amfani da samfuri `Md` .

Idan `/en/test.md` wannan fayil ɗin ba ya wanzu, za a nuna tsohowar shafi `404` .

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Samfuri Mai Yawan Fayiloli

A cikin fayil ɗin daidaitawa:

```
  - i18n: blog
    use: Doc
```

Yana nuna amfani da `Doc` don yin samfuri.

Samfurin `Doc` yana goyan bayan haɗa `MarkDown` da yawa don samar da ƙayyadaddun daftarin aiki don guda ɗaya ko ayyuka da yawa.

#### Ayyukan Guda Ɗaya (Fayil Ɗin Da Yawa)

`blog` sama shine yanayin abu ɗaya na `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Lokacin Da url Ya Zama Fanko, Yana Lalata Darajar i18n

Idan `url` ba a rubuta ba, `url` yana lalata darajar `i18n` Wannan doka kuma tana aiki ga wasu samfuran.

Hanyar rubutun da ke sama tana daidai da `url: blog` , kuma fayil ɗin da ya dace da shi shine `en/blog/TOC` .

#### Ayyuka Da Yawa

Tsarin `i18n:doc` daga `.i18n/conf.yml` shine yanayin ayyuka da yawa.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Anan, `menu: NB demo1,demo2` , yana nufin amfani da samfuri `NB` don yin menu na ƙasa.

`NB` , wanda shine gajarta na `Name Breif` , yana nufin cewa menu mai saukewa zai iya nuna suna da taken aikin.

`NB` yana biye da siga `demo1,demo2` da aka wuce zuwa gare shi.
Lura : ** Kada a sami sarari ** kafin da bayan waƙafi `,` cikin `demo1,demo2` .

Don sigogin da ke sama, fayil ɗin fihirisar jagora mai dacewa shine:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Tebur Abun Ciki Index

`i18n.site` zai aiwatar da `js` plug-in `.i18n/hook/after.tran/TOC.js` a cikin ɗakin ajiya na demo don karanta fayil ɗin index na kundin adireshi `doc` wanda ya dace da tsarin samfuri `TOC` don samar da jigon jagorar `json` .

Idan kuna amfani da samfuri `doc` , dole ne ku sami wannan plug-in.

Idan kun fara aikin `i18n.site` daga babban fayil mara komai, ku tuna kwafin aikin demo `.i18n` zuwa kundin adireshin ku.

Samfurin `Doc` zai ba da jerin abubuwan da ke ciki bisa ga `json` da aka samar.

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

Fayilolin `TOC` an ɗora su don nuna alaƙar matsayi na faci, goyan bayan shigar da matakai da yawa, da sharhin layi wanda ya fara da `#` .

##### Matsayin Iyaye Kawai Yana Rubuta Take, Ba Abun Ciki Ba.

Lokacin da akwai matakan shigarwa da yawa, matakin iyaye yana rubuta take kawai ba abun ciki ba. In ba haka ba, rubutun rubutu zai lalace.

##### Aikin README.md

Ana iya rubuta abun ciki a abu na `README.md` , kamar `en/demo2/README.md` .

Lura cewa abun ciki na wannan fayil baya nuna jerin abubuwan da ke ciki, don haka ana ba da shawarar iyakance tsayi da rubuta gajeriyar gabatarwa.

###### Taken Aikin

Kuna iya ganin cewa `Deme Two` yana da alamar aikin sa a ƙasa da menu mai saukewa da sunan aikin : `Your Project slogan` .

![](https://p.3ti.site/1721276842.avif)

Wannan yayi daidai da layin farko `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Abubuwan da ke cikin bayan hanin farko na `:` na taken matakin farko na aikin `README.md` za a ɗauke su azaman taken aikin.

Masu amfani daga China, Japan da Koriya, lura cewa yakamata ku yi amfani da hanin rabin nisa `:` maimakon cikakken hanji.

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