# .i18n/conf.yml

Fayiro y'okusengeka `i18n.site` eri `.i18n/conf.yml` era ebirimu biri bwe biti :

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

Mu byo, ekintu eky’okusengeka `upload` ku `ext:` kitegeeza nti `.md` zokka ze zijja okuteekebwa ku mukutu nga zifulumya.

## Waggulu Okutambulira Ku Nnyanja nav

`nav:` configuration options, ezikwatagana ne menu y'okutambulira waggulu ku mukutu gw'awaka.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Mu byo, `i18n: home` ekwatagana ne `home: Home` mu `en/i18n.yml` (nga `en` lwe lulimi ensibuko y’enkyusa ya pulojekiti).

`en/i18n.yml` ebirimu bye biwandiiko ebiragibwa mu menu y’okutambulira, ebijja okuvvuunulwa okusinziira ku `fromTo` mu nsengeka, okugeza, okuvvuunulwa mu `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Oluvannyuma lw’okuvvuunula okuggwa, osobola okukyusa omuwendo gw’okuvvuunula `yml` , naye toyongera oba tosazaamu kisumuluzo kya kuvvuunula `yml` .

### 0Ekipande Ky'ekiwandiiko `use: Toc` Nga Kiriko Ensengeka

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` kitegeeza okulaga nga okozesa ekifaananyi kya `Toc` , nga kino kwe kulaga ekifaananyi kimu `Markdown` .

`TOC` ye kifupi kya `Table of Contents` Ekifaananyi kino bwe kinaalagibwa, ensengeka ya fayiro eno `Markdown` ejja kulagibwa mu bbali.

`url:` ekiikirira ekkubo lya fayiro ya `Markdown` ( `/` ekwatagana ne dayirekita y’ekikolo `/README.md` , erinnya lya fayiro lino lyetaaga entandikwa ennene n’enkomerero entono).

### 0Ekipande Ky'ekiwandiiko `use: Md` Nga Tekirina Nsengeka

Template `Md` ne template `Toc` bye bimu era byombi bikozesebwa okulaga fayiro emu eya `Markdown` . Naye template `Md` telaga outline mu sidebar.

Osobola okukyusa `use: Toc` mu nsengeka waggulu okudda ku `use: Md` , okuddamu okuddukanya `i18n.site` mu `md` dayirekita, n'oluvannyuma okugenda ku URL y'okusooka okulaba enkulaakulana okwetegereza enkyukakyuka ku mukutu gw'awaka.

### `use: Blog` Ebifaananyi Bya Blog

Ekifaananyi kya blog kiraga olukalala lw’ebiwandiiko (emitwe n’ebitonotono) mu nsengeka y’obudde bw’okufulumya.

[→ Nyiga wano okumanya ku nsengeka entongole](/i18n.site/conf/blog)

### `use: Doc` By'ebiwandiiko Bya Fayiro Ebingi

Mu fayiro y'okusengeka:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Kiraga okukozesa `Doc` ku kulaga ekifaananyi.

`Doc` template ewagira okugatta `MarkDown` eziwera okukola ensengeka z'ebiwandiiko ku pulojekiti emu oba eziwera.

#### Pulojekiti Eziwera Ne Fayiro Eziwera

Ensengeka ya `.i18n/conf.yml` mu `i18n:doc` ya pulojekiti nnyingi ez'okulaga fayiro nnyingi.

Wano, `menu: NB demo1,demo2` , kitegeeza okukozesa ekifaananyi kya `NB` okulaga menu ekka wansi.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , nga kino kye kifupi kya `Name Breif` , kitegeeza nti menu ekka wansi esobola okulaga erinnya n’omubala gwa pulojekiti.

`NB` egobererwa parameter `demo1,demo2` eyisibwa ku yo.

: ** Tewalina kubaawo bifo ** nga koma `,` mu `demo1,demo2` tennabaawo n'oluvannyuma lw'okugikola .

Fayiro y’omuko gwa dayirekita ekwatagana ku bipimo ebyo waggulu eri:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Pulojekiti Emu Fayiro Eziwera

Bw’oba olina pulojekiti emu yokka, osobola okugisengeka bweti.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Pulojekiti emu erimu fayiro eziwera tewagira kutegeka `url` nga ekkubo ly'ekikolo `/`
> Singa __conf.yml → nav:__ Tewali kkubo lya kikolo litegekeddwa, nga oyingira ku mukutu gw'awaka ogw'omukutu, gujja kuddamu okuwandiikibwa mu URL esooka wansi w'ensengeka ya `nav:` .
> Dizayini eno ya kwawula bulungi ebiwandiiko bya pulojekiti, buloogu n’ebintu ebirala nga tuyita mu dayirekita.
> Kirungi okukozesa fayiro emu n'olupapula lumu ng'olupapula lw'awaka.

> [!TIP]
> Singa `url` tewandiikibwa, `url` esooka ku muwendo gwa `i18n` Etteeka lino era litandika okukola ku bikozesebwa ebirala.

#### TOC Omuko Gw’ebirimu

Singa template `use: Doc` ekozesebwa mu nsengeka, nsaba osobozesa plug-in `i18n.addon/toc` mu `.i18n/conf.yml` Ensengeka eri bweti :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` ejja kuteeka n'okukola plug-in eno mu ngeri ey'otoma, esome `TOC` fayiro y'omuko gwa dayirekita, era ekola `json` ensengeka ya dayirekita.

Singa eba pulojekiti emu erimu fayiro eziwera, dayirekita y’ekikolo `TOC` ye dayirekita ekwatagana ne `url:` mu dayirekita y’olulimi ensibuko Okugeza, singa olulimi ensibuko luba lwa Luchina: fayiro ekwatagana ne `url: flashduty` eba `zh/flashduty/TOC` .

Bwe kiba pulojekiti eziwera ne fayiro eziwera, tekyetaagisa kutegeka `url:` Dayirekita y’ekikolo ya `TOC` ye dayirekita ekwatagana n’omuwendo gwa `i18n` .

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

`TOC` fayiro ziyingiziddwa okulaga enkolagana y’ensengeka y’ensengeka, okuwagira okuyingiza okw’emitendera mingi, n’okuteesa ku layini okutandika ne `# ` .

##### Omutendera Gw’omuzadde Guwandiika Omutwe Gwokka, So Si Ebirimu.

Bwe wabaawo emitendera mingi egy’okuyingiza, omutendera gw’omuzadde guwandiika omutwe gwokka so si ebirimu. Bwe kitaba ekyo, typography ejja kutabula.

##### Pulojekiti Ya README.md

Ebirimu bisobola okuwandiikibwa mu kintu `README.md` , nga `en/demo2/README.md` .

Weetegereze nti ebirimu mu fayiro eno tebiraga nsengeka ya birimu, n’olwekyo kirungi okussa ekkomo ku buwanvu n’okuwandiika ennyanjula ennyimpi.

###### Omubala Gwa Pulojekiti

Osobola okulaba nti `Deme Two` erina omukono gwayo ogwa pulojekiti wansi wa menu egwa wansi n'erinnya lya pulojekiti ery'ensengeka ya katalogu `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Kino kikwatagana n'olunyiriri olusooka olwa `en/demo2/README.md` :

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

### Okutikka Okusookerwako Awatali Kkubo Ly'okusengeka

Ku kkubo erimu eriyingizibwa, singa entandikwa y'ekkubo tetegekebwa mu `nav:` , fayiro `MarkDown` ekwatagana n'ekkubo ejja kutikkibwa mu butonde era ekoleddwa nga ekozesa ekifaananyi kya `Md` .

Okugeza, singa `/test` eyingizibwa era `nav:` n'eteekebwateekebwa awatali ntandikwa y'ekkubo lino, era olulimi lw'okutambula oluliwo kati luli Lungereza (code `en` ), `/en/test.md` ejja kutikkibwa mu butonde era elagibwa nga ekozesa template `Md` .

Singa `/en/test.md` fayiro eno tebaawo, omuko `404` ogusookerwako gujja kulagibwa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">