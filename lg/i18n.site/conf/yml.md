# .i18n/okusengeka.yml

Fayiro y'okusengeka eri `.i18n/conf.yml` `i18n.site`

Okuggyako ensengeka `ignore:` ne `i18n:` eza [`i18`](/i18) , fayiro y'okusengeka eri bweti:

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

Mu byo, ekintu `ext:` okusengeka ekya `upload` kitegeeza nti `.md` yokka y'egenda okuteekebwa ku mukutu nga ofulumya.

## Waggulu Okutambulira Ku Nnyanja nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Mu `en/i18n.yml` `home: Home` `i18n: home`

ejja kuvvuunulwa mu nnimi eziwera, gamba nga `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Oluvannyuma lw'okuvvuunula okuggwa, osobola okukyusa omuwendo gwa `yml` mu kuvvuunula, naye toyongera oba tosazaamu kisumuluzo kya kuvvuunula `yml` .

### `use: Toc` , Ekifaananyi Kya Fayiro Emu (Nga Kiriko Ensengeka)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` kitegeeza okukozesa `Toc` rendering, nga kino kwe kulaga `Markdown` template emu.

`TOC` `Table of Contents` `Markdown`

`url:` ekiikirira ekkubo lya fayiro ya `Markdown` ( `/` likwatagana ne dayirekita y'ekikolo `/README.md` , erinnya lya fayiro lino lyetaaga entandikwa ennene n'enkomerero entono).

### `use: Md` , Ekifaananyi Kya Fayiro Emu (Tewali Nsengeka)

`Md` Template kye kimu ne `Toc` , byombi bikozesebwa okulaga fayiro emu eya `Markdown` . Naye `Md` template telaga outline mu sidebar.

Osobola okukyusa `use: Toc` mu nsengeka waggulu okutuuka ku `use: Md` , okudduka `i18n.site` mu `md` dayirekita nate, n'oluvannyuma okukyalira URL y'okusooka okulaba enkulaakulana okwetegereza enkyukakyuka ku mukutu gw'awaka.

### Okutikka Okusookerwako Awatali Kkubo Ly'okusengeka

Singa entandikwa y'ekkubo ery'ekkubo erimu eriyingizibwa tetegekebwa mu `nav:` fayiro `MarkDown` ekwatagana n'ekkubo ejja kutikkibwa mu butonde era ekoleddwa nga ekozesa `Md` template.

`/en/test.md` `Md` `nav:` `en` `/test`

Singa `/en/test.md` fayiro eno tebaawo, omuko `404` ogusookerwako gujja kulagibwa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Ekifaananyi Kya Fayiro Eziwera

Mu fayiro y'okusengeka:

```
  - i18n: blog
    use: Doc
```

Kiraga okukozesa `Doc`

`Doc` Template ewagira okugatta `MarkDown` eziwera okukola ensengeka z'ebiwandiiko ku pulojekiti emu oba eziwera.

#### Pulojekiti Emu (Fayiro Eziwera) .

mu ebyo waggulu ye mode ya pulojekiti emu eya `Doc` `blog`

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url Bweba Nga Njereere, Esooka Ku Muwendo Gwa i18n

`url` `i18n` `url`

Enkola y'okuwandiika waggulu yenkana okuba ne `url: blog` era fayiro yaayo ekwatagana ye `en/blog/TOC` .

#### Pulojekiti Eziwera

`.i18n/conf.yml` Ensengeka mu `i18n:doc` eri mu mbeera ya pulojekiti nnyingi.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Wano, `menu: NB demo1,demo2` kitegeeza okukozesa `NB` okulaga menu ekka wansi.

`NB` `Name Breif`

`NB` egobererwa parameter `demo1,demo2` eyisibwa ku yo.
Weetegereze nti tewalina kubaawo bifo ** nga koma `,` `demo1,demo2` : **

Ku bipimo ebyo waggulu, fayiro y’omuko gwa dayirekita ekwatagana ye:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Omuko Gw’ebirimu

`i18n.site` Ejja kukola `js` plugin `.i18n/hook/after.tran/TOC.js` mu sitoowa ya demo okusoma fayiro y'omuko gwa dayirekita `doc` ekwatagana n'ensengeka ya template `TOC` okukola `json` y'ensengeka ya dayirekita.

Bwoba okozesa `doc` template, olina okuba ne plug-in eno.

Bw'oba otandika pulojekiti ya `i18n.site` okuva mu folda ekyerere, jjukira okukoppa `.i18n` mu pulojekiti ya demo mu dayirekita yo.

`Doc` kijja kulaga ensengeka y'ebirimu okusinziira ku `json` eyakolebwa.

##### Ennyinyonnyola Y’ebirimu Mu Bujjuvu

Ebirimu biri bwe : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Kozesa Indentation Okulaga Emitendera

Waggulu `en/blog/TOC` `README.md` mu layini esooka ekwatagana ne `i18n.site` mu kifaananyi wansi, nga lino lye linnya lya pulojekiti.

Ennyiriri ebbiri eziddako ziri nga bwe ziragibwa mu kifaananyi wansi.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

kikwatagana ne `News` , `news/README.md`
kikwatagana ne `Our Product is Online !` `news/begin.md`

`TOC` Fayiro eyingiziddwa okulaga enkolagana y'ensengeka y'ensengeka era ewagira okuyingiza okw'emitendera mingi.

##### Omutendera Gw’omuzadde Guwandiika Omutwe Gwokka, So Si Ebirimu.

Bwe wabaawo emitendera mingi egy’okuyingiza, omutendera gw’omuzadde guwandiika omutwe gwokka so si ebirimu. Bwe kitaba ekyo, typography ejja kutabula.

##### Pulojekiti Ya README.md 

wa pulojekiti, okugeza, osobola okuwandiika ebirimu mu `en/demo2/README.md` `README.md`

Weetegereze nti ebirimu mu fayiro eno tebiraga nsengeka ya birimu, n’olwekyo kirungi okussa ekkomo ku buwanvu n’okuwandiika ennyanjula ennyimpi.

###### Omubala Gwa Pulojekiti

`Your Project slogan` bw'olaba `Deme Two` Wansi wa menu ekka wansi ne katalogu outline erinnya lya pulojekiti, waliwo omubala gwayo ogwa pulojekiti :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: kikwatagana n'olunyiriri olusooka `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`README.md` Ebirimu oluvannyuma lw'ennyiriri ezisooka `:` mu mutwe ogw'omutendera ogusooka bijja kutwalibwa ng'omubala gwa pulojekiti.

Abakozesa okuva e China, Japan ne Korea, nsaba mumanye nti olina okukozesa kkookolo ow’obugazi obujjuvu `:`

##### Otambuza Otya TOC Mu Bungi?

`TOC` Fayiro yeetaaga okuteekebwa mu dayirekita y'olulimi olusibuka.

Okugeza, singa olulimi ensibuko `zh/blog/TOC` lwa Luchina, olwo `TOC`

Singa olulimi lw'ensibuko lukyusibwa, olina okukuba `TOC` z'okutambuza mu kibinja mu lulimi olumu mu pulojekiti okudda mu lulimi olulala.

Osobola okutunuulira ebiragiro bino wammanga:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Nsaba okyuse `en/` ne `zh/` mu kiragiro waggulu ku koodi y'olulimi lwo.


