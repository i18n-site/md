# .i18n/conf.yml

Profaayili ya `i18n.site` eri `.i18n/conf.yml` .

Okuggyako ensengeka za [`i18`](/i18) , `ignore:` ne `i18n:` , fayiro y'okusengeka eri bweti:

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

Mu byo, ekintu eky’okusengeka `upload` ku `ext:` kitegeeza nti `.md` zokka ze zijja okuteekebwa ku mukutu nga zifulumya.

## Waggulu Okutambulira Ku Nnyanja nav

`nav:` configuration options, ezikwatagana ne menu y'okutambulira waggulu ku lupapula lw'awaka.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Mu byo, `i18n: home` akwatagana ne `home: Home` mu `en/i18n.yml` .

`en/i18n.yml` ejja kuvvuunulwa mu nnimi eziwera, nga `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Oluvannyuma lw’okuvvuunula okuggwa, osobola okukyusa omuwendo gw’okuvvuunula `yml` , naye toyongera oba tosazaamu kisumuluzo kya kuvvuunula `yml` .

### `use: Toc` , Ekifaananyi Kya Fayiro Emu (Nga Kiriko Ensengeka) .

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` kitegeeza okulaga nga okozesa ekifaananyi kya `Toc` , nga kino kwe kulaga ekifaananyi kimu ekya `Markdown` .

`TOC` ye kifupi kya `Table of Contents` Ekifaananyi kino bwe kinaalagibwa, ensengeka ya fayiro eno `Markdown` ejja kulagibwa mu bbali.

`url:` ekiikirira ekkubo lya fayiro ya `Markdown` ( `/` ekwatagana ne dayirekita y’ekikolo `/README.md` , erinnya lya fayiro lino lyetaaga entandikwa ennene n’enkomerero entono).

### `use: Md` , Ekifaananyi Kya Fayiro Emu (Tewali Nsengeka) .

Template ya `Md` ne template ya `Toc` bye bimu era byombi bikozesebwa okulaga fayiro emu eya `Markdown` . Naye template ya `Md` telaga outline mu sidebar.

Osobola okukyusa `use: Toc` mu nsengeka waggulu okudda ku `use: Md` , okuddamu okuddukanya `i18n.site` mu `md` dayirekita, n'oluvannyuma okugenda ku URL y'okusooka okulaba enkulaakulana okwetegereza enkyukakyuka ku mukutu gw'awaka.

### Okutikka Okusookerwako Awatali Kkubo Ly'okusengeka

Singa ekkubo erimu liyingizibwa era entandikwa y’ekkubo lyalyo tetegekebwa mu `nav:` , fayiro `MarkDown` ekwatagana n’ekkubo ejja kutikkibwa mu butonde era ekoleddwa nga ekozesa ekifaananyi kya `Md` .

Okugeza, singa `/test` eyingizibwa, era `nav:` n'etegekebwa awatali kkubo lino, era olulimi lw'olupapula lwa Lungereza (code `en` ), `/en/test.md` ejja kutikkibwa mu butonde era ejja kulagibwa nga ekozesa template `Md` .

Singa `/en/test.md` fayiro eno tebaawo, omuko `404` ogusookerwako gujja kulagibwa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Ekifaananyi Kya Fayiro Eziwera

Mu fayiro y'okusengeka:

```
  - i18n: blog
    use: Doc
```

Kiraga okukozesa `Doc` ku kulaga ekifaananyi.

`Doc` template ewagira okugatta `MarkDown` eziwera okukola ensengeka z'ebiwandiiko ku pulojekiti emu oba eziwera.

#### Pulojekiti Emu (Fayiro Eziwera) .

`blog` waggulu ye mode y’ekintu kimu eya `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url Bweba Nga Njereere, Esooka Ku Muwendo Gwa i18n

Singa `url` tewandiikibwa, `url` esooka ku muwendo gwa `i18n` Etteeka lino era litandika okukola ku bikozesebwa ebirala.

Enkola y'okuwandiika waggulu yenkana `url: blog` , era fayiro yaayo ekwatagana nayo eri `en/blog/TOC` .

#### Pulojekiti Eziwera

Ensengeka ya `i18n:doc` ku `.i18n/conf.yml` ya pulojekiti nnyingi.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Wano, `menu: NB demo1,demo2` , kitegeeza okukozesa ekifaananyi kya `NB` okulaga menu ekka wansi.

`NB` , nga kino kye kifupi kya `Name Breif` , kitegeeza nti menu ekka wansi esobola okulaga erinnya n’omubala gwa pulojekiti.

`NB` egobererwa parameter `demo1,demo2` eyisibwa ku yo.
: ** Tewalina kubaawo bifo ** nga koma `,` mu `demo1,demo2` tennabaawo n'oluvannyuma lw'okugikola .

Ku bipimo ebyo waggulu, fayiro y’omuko gwa dayirekita ekwatagana ye:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Omuko Gw’ebirimu

`i18n.site` ejja kukola `js` plug-in `.i18n/hook/after.tran/TOC.js` mu demo warehouse okusoma fayiro ya `doc` directory index ekwatagana n'ensengeka ya `TOC` template okukola `json` directory outline.

Bwoba okozesa `doc` template, olina okuba ne plug-in eno.

Bw'oba otandika pulojekiti `i18n.site` okuva mu folda ekyerere, jjukira okukoppa pulojekiti ya demo `.i18n` mu dayirekita yo.

Ekifaananyi kya `Doc` kijja kulaga ensengeka y'ebirimu okusinziira ku `json` eyakolebwa.

##### Ennyinyonnyola Y’ebirimu Mu Bujjuvu

`en/blog/TOC` biri bwe biti :

```
README.md

news/README.md
  news/begin.md
```

##### Kozesa Indentation Okulaga Emitendera

`README.md` mu lunyiriri olusooka olwa `en/blog/TOC` waggulu ekwatagana ne `i18n.site` mu kifaananyi wansi, nga lino lye linnya lya pulojekiti.

Ennyiriri ebbiri eziddako ziri nga bwe ziragibwa mu kifaananyi wansi.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` kikwatagana ne `News` , .
`news/begin.md` kikwatagana ne `Our Product is Online !`

`TOC` fayiro ziyingiziddwa okulaga enkolagana y’ensengeka y’ensengeka, okuwagira okuyingiza okw’emitendera mingi, n’okuteesa ku layini okutandika ne `#` .

##### Omutendera Gw’omuzadde Guwandiika Omutwe Gwokka, So Si Ebirimu.

Bwe wabaawo emitendera mingi egy’okuyingiza, omutendera gw’omuzadde guwandiika omutwe gwokka so si ebirimu. Bwe kitaba ekyo, typography ejja kutabula.

##### Pulojekiti Ya README.md

Ebirimu bisobola okuwandiikibwa mu kintu `README.md` , nga `en/demo2/README.md` .

Weetegereze nti ebirimu mu fayiro eno tebiraga nsengeka ya birimu, n’olwekyo kirungi okussa ekkomo ku buwanvu n’okuwandiika ennyanjula ennyimpi.

###### Omubala Gwa Pulojekiti

Osobola okulaba nti `Deme Two` erina omukono gwayo ogwa pulojekiti wansi wa menu egwa wansi n'erinnya lya pulojekiti ery'ensengeka ya katalogu `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Kino kikwatagana n'olunyiriri olusooka `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Ebirimu oluvannyuma lw’ennyiriri ezisooka `:` ez’omutwe ogw’omutendera ogusooka ogwa pulojekiti `README.md` bijja kutwalibwa ng’omubala gwa pulojekiti.

Abakozesa okuva e China, Japan ne Korea, nsaba mumanye nti mulina okukozesa kkookolo `:` ey’obugazi obw’ekitundu mu kifo ky’enkokola ey’obugazi obujjuvu.

##### Otambuza Otya TOC Mu Bungi?

Fayiro `TOC` zeetaaga okuteekebwa mu dayirekita y'olulimi olusibuka.

Okugeza, singa olulimi oluvaamu luba lwa Luchina, olwo `TOC` waggulu eba `zh/blog/TOC` .

Singa olulimi lw'ensibuko lukyusibwa, olina okutambuza fayiro `TOC` ez'olulimi olumu mu pulojekiti mu kibinja okudda mu lulimi olulala.

Osobola okutunuulira ebiragiro bino wammanga:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Nsaba okyuse `en/` ne `zh/` mu kiragiro waggulu ku koodi y'olulimi lwo.