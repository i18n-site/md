# .i18n/conf.yml

Fayil ɗin daidaitawa shine `.i18n/conf.yml` `i18n.site`

Sai dai saitin `ignore:` da `i18n:` [`i18`](/i18) , fayil ɗin daidaitawa shine kamar haka:

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

Daga cikin su, abin da `ext:` tsara na `upload` yana nufin cewa `.md` kawai za a sanya lokacin bugawa.

## Babban Kewayawa nav

`nav:` daidaitawa, daidai da menu na kewayawa a saman shafin gida.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Daga cikin su `i18n: home` yayi daidai da `en/i18n.yml`中`home: Home` .

Za a fassara `en/i18n.yml` zuwa harsuna da yawa, kamar `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Bayan an gama fassarar, zaku iya canza `yml` `yml`

### `use: Toc` Samfurin Fayil Guda Ɗaya (Tare Da Shaci)

`nav` daidaitawa :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` `Toc` `Markdown`

`TOC` shine gajarta ta `Table of Contents` `Markdown`

`url:` yana wakiltar hanyar fayil na `Markdown` ( `/` yayi daidai da tushen directory `/README.md` , wannan sunan fayil yana buƙatar prefix babba da ƙarami).

### `use: Md` Samfurin Fayil Guda Ɗaya (Babu Shaci)

`Md` iri ɗaya ne da `Toc` , ana amfani da su duka don sanya `Markdown` guda ɗaya. Duk da haka `Md` samfurin baya nuna shaci a mashigin labarun gefe.

Kuna iya canza `use: Toc` a cikin tsarin da ke sama zuwa `use: Md` , gudu `i18n.site` a cikin kundin adireshin `md` kuma, sannan ku ziyarci URL ɗin samfoti don ganin canje-canje a shafin gida.

### Tsohuwar Lodi Ba Tare Da Hanyar Daidaitawa Ba

Idan ba a saita prefix ɗin hanyar wata hanya da ake shiga cikin `nav:` za a loda fayil ɗin `MarkDown` daidai da hanyar ta tsohuwa kuma a yi shi ta amfani da samfurin `Md` .

Misali, idan kun ziyarci `/test` kuma an saita `nav:` ba tare da wannan hanyar ba, kuma shafin yanar gizon Ingilishi ne (code `en` ), za a loda samfurin `/en/test.md` kuma ana yin amfani da shi `Md` ta tsohuwa.

Idan babu wannan fayil `/en/test.md` , za a nuna `404` shafin

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` Samfuri Mai Yawan Fayiloli

A cikin fayil ɗin daidaitawa:

```
  - i18n: blog
    use: Doc
```

Yana nuna `Doc` don yin samfuri.

`Doc` Samfura yana goyan bayan haɗa `MarkDown` da yawa don samar da ƙayyadaddun daftarin aiki don guda ɗaya ko ayyuka da yawa.

#### Ayyukan Guda Ɗaya (Fayil Ɗin Da Yawa)

A cikin sama shine yanayin aikin guda ɗaya na `Doc` `blog`

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Lokacin Da url Ya Zama Fanko, Yana Lalata Darajar i18n

Idan baku rubuta `url` , `url` zuwa ƙimar `i18n` .

Hanyar rubutun da ke sama tana daidai da samun `url: blog` kuma fayil ɗin da ya dace shine `en/blog/TOC` .

#### Ayyuka Da Yawa

Tsarin tsari a `i18n:doc` yanayin ayyuka da yawa `.i18n/conf.yml` .

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

`NB` , `menu: NB demo1,demo2`

`NB` shine gajartawar `Name Breif` , yana nuna cewa menu na ƙasa yana iya nuna suna da taken aikin.

`NB` yana biye da sigar `demo1,demo2` da aka wuce zuwa gare shi.
Lura cewa kada a sami sarari ** kafin da bayan waƙafi `,` a `demo1,demo2` : **

Don sigogin da ke sama, fayil ɗin fihirisar jagora mai dacewa shine:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Tebur Abun Ciki Index

`i18n.site` Zai aiwatar da `js` plugin `.i18n/hook/after.tran/TOC.js` a cikin rumbun adana bayanai don karanta fayil ɗin index `doc` wanda ya dace da tsarin samfuri `TOC` don samar da `json` na bayanin jagorar.

Idan kuna amfani `doc` samfuri, dole ne ku sami wannan plug-in.

Idan kun fara aikin `i18n.site` daga babban fayil mara komai, ku tuna kuyi kwafin `.i18n` a cikin aikin demo zuwa kundin adireshin ku.

Samfurin zai sanya jerin abubuwan da ke ciki bisa ga `json` `Doc`

##### Cikakken Bayanin Abun Ciki

Abinda ke ciki shine kamar : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Yi Amfani Da Ciki Don Nuna Matakan

`README.md` `en/blog/TOC` `i18n.site`

Layukan biyu na gaba suna kamar yadda aka nuna a hoton da ke ƙasa.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` daidai da `News` ,
yayi daidai da `Our Product is Online !` `news/begin.md`

`TOC` Fayil ɗin an ɗora shi don nuna alaƙar matsayi na faci kuma yana goyan bayan shigar da matakai masu yawa.

##### Matsayin Iyaye Kawai Yana Rubuta Take, Ba Abun Ciki Ba.

Lokacin da akwai matakan shigarwa da yawa, matakin iyaye yana rubuta take kawai ba abun ciki ba. In ba haka ba, rubutun rubutu zai lalace.

##### Aikin README.md 

`README.md` na aikin, alal misali, kuna iya rubuta abun ciki a cikin `en/demo2/README.md` .

Lura cewa abun ciki na wannan fayil baya nuna jerin abubuwan da ke ciki, don haka ana ba da shawarar iyakance tsayi da rubuta gajeriyar gabatarwa.

###### Taken Aikin

Kamar yadda kuke gani `Deme Two` a ƙasan menu na ƙasa da sunan aikin katalogi, akwai taken aikin : `Your Project slogan`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: yayi daidai da layin farko `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`:` `README.md`

Masu amfani daga China, Japan da Koriya, lura cewa dole ne ku yi amfani da hanji mai faɗin rabin `:`

##### Yadda Za a Matsar Da TOC Da Yawa?

`TOC`

Misali, idan tushen harshen Sinanci ne, to `TOC` sama shine `zh/blog/TOC` .

Idan harshen tushen ya canza, kuna buƙatar jujjuya `TOC` a cikin wani harshe a cikin aikin zuwa wani harshe.

Kuna iya komawa zuwa umarni masu zuwa:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Da fatan za a gyara `zh/` `en/` cikin umarnin da ke sama zuwa lambar yaren ku.


