# .i18n/conf.yml

`i18n.site` Cov ntaub ntawv teeb tsa yog `.i18n/conf.yml` .

Tsuas yog rau `ignore:` thiab `i18n:` nqis ntawm [`i18`](/i18)

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

Ntawm lawv, `.md` khoom `ext:` configuration ntawm `upload`

## Top Navigation nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Ntawm lawv `i18n: home` sib raug rau `en/i18n.yml`中`home: Home` .

`en/i18n.yml` yuav raug muab txhais ua ntau hom lus, xws li `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Tom qab kev txhais lus tiav lawm, koj tuaj yeem hloov kho tus nqi `yml` `yml`

### `use: Toc` , Ib Daim Ntawv Template (Nrog Cov Qauv)

: teeb tsa `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` txhais tau tias siv `Toc` rendering, uas yog rendering ib tug `Markdown` template.

`TOC` yog cov ntawv luv ntawm `Table of Contents` `Markdown`

`url:` sawv cev rau cov ntaub ntawv txoj kev ntawm `Markdown` ( `/` sib raug rau cov hauv paus directory `/README.md` , cov ntaub ntawv npe no yuav tsum muaj cov ntawv sau ua ntej thiab tus lej qis).

### `use: Md`

`Md` Template yog tib yam li `Toc` , ob qho tib si siv los ua ib daim ntawv `Markdown` xwb. Txawm li cas los xij `Md` tus qauv tsis qhia cov qauv hauv lub sidebar.

`md` tuaj yeem `i18n.site` `use: Md` `use: Toc`

### Default Loading Tsis Configuration Txoj Kev

Yog tias txoj hauv kev ua ntej ntawm qee txoj kev nkag mus tsis tau teeb tsa hauv `nav:` `MarkDown` cov ntaub ntawv sib raug rau txoj hauv kev yuav raug thauj khoom los ntawm lub neej ntawd thiab muab siv `Md` template.

Piv txwv li, yog tias koj mus ntsib `/test` , thiab `nav:` tau teeb tsa yam tsis muaj txoj hauv kev no, thiab nplooj ntawv hom lus yog lus Askiv (code `en` ), tus qauv yuav raug thauj khoom `/en/test.md` thiab siv tau `Md` los ntawm lub neej ntawd.

Yog `/en/test.md` tsis muaj cov ntaub ntawv no, lub neej ntawd `404` nplooj ntawv yuav tshwm sim.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Multi-File Template

Nyob rau hauv cov ntaub ntawv configuration:

```
  - i18n: blog
    use: Doc
```

Qhia siv `Doc`

`Doc` Template txhawb kev sib koom ua ke ntau `MarkDown` los tsim cov ntaub ntawv qhia rau ib qho lossis ntau qhov haujlwm.

#### Ib Qhov Project (Ntau Cov Ntaub Ntawv)

`blog` nyob rau hauv cov saum toj no yog ib hom phiaj xwm ntawm `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Thaum url Yog Khoob, Nws Ua Rau Tus Nqi Ntawm i18n

Yog tias koj tsis sau `url` , `url` rau tus nqi ntawm `i18n` .

Txoj kev sau saum toj no yog sib npaug rau muaj `url: blog` thiab nws cov ntaub ntawv sib raug yog `en/blog/TOC` .

#### Ntau Qhov Project

`.i18n/conf.yml` Cov kev teeb tsa hauv `i18n:doc` yog ntau hom phiaj xwm.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ntawm no, `menu: NB demo1,demo2` txhais tau tias siv `NB` los ua cov ntawv qhia zaub mov.

`NB` , yog cov ntawv luv ntawm `Name Breif` , qhia tias cov ntawv qhia zaub mov tuaj yeem tso saib lub npe thiab cov lus hais ntawm qhov project.

`NB` yog ua raws li qhov parameter `demo1,demo2` dhau mus rau nws.
Nco `demo1,demo2` tias yuav tsum tsis muaj qhov chaw ** ua ntej thiab tom qab lub comma `,` hauv : **

Rau cov kev ntsuas saum toj no, cov ntaub ntawv sib txuas cov ntaub ntawv index yog:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Table of Content Index

`i18n.site` `js` `.i18n/hook/after.tran/TOC.js` `doc` `TOC` `json`

Yog tias koj siv `doc` qauv, koj yuav tsum muaj qhov plug-in no.

Yog `.i18n` koj pib qhov project `i18n.site`

`Doc` Tus qauv yuav muab cov lus qhia cov ntsiab lus raws li qhov tsim tawm `json` .

##### Cov Ntsiab Lus Nthuav Dav

`en/blog/TOC` Cov ntsiab lus yog raws li nram no :

```
README.md

news/README.md
  news/begin.md
```

##### Siv Indentation Los Qhia Qib

Saum toj no `en/blog/TOC` `README.md` hauv thawj kab sib raug rau `i18n.site` hauv daim duab hauv qab no, uas yog lub npe project.

Ob kab tom ntej no yog raws li qhia hauv lub screenshot hauv qab no.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` raug rau `News` ,
`news/begin.md` raug rau `Our Product is Online !`

`TOC`

##### Qib Niam Txiv Tsuas Yog Sau Lub Npe Xwb, Tsis Yog Cov Ntsiab Lus.

Thaum muaj ntau theem ntawm indentation, theem niam txiv tsuas yog sau lub npe thiab tsis yog cov ntsiab lus. Txwv tsis pub, typography yuav messed.

##### Project README.md 

`README.md` ntawm qhov project, piv txwv li, koj tuaj yeem sau cov ntsiab lus hauv `en/demo2/README.md` .

Nco ntsoov tias cov ntsiab lus ntawm cov ntaub ntawv no tsis qhia cov ntsiab lus ntawm cov ntsiab lus, yog li nws raug pom zoo kom txwv qhov ntev thiab sau cov lus qhia luv luv.

###### Qhov Project Slogan

Raws li koj tuaj yeem pom, `Deme Two` Hauv qab cov ntawv qhia zaub mov thiab cov npe teev npe, muaj nws cov lus hais `Your Project slogan` qhov project :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: sib raug rau thawj kab `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`:` project `README.md`

Cov neeg siv los ntawm Tuam Tshoj, Nyiv thiab Kaus Lim Kauslim, thov nco ntsoov tias koj yuav tsum siv cov nyuv ib nrab-dav `:`

##### Yuav Ua Li Cas Txav TOC Hauv Ntau?

`TOC` Cov ntaub ntawv yuav tsum muab tso rau hauv cov npe ntawm cov lus.

Piv txwv li, yog hais tias lub hauv paus lus yog Suav, ces saum toj `TOC` yog `zh/blog/TOC` .

Yog hais tias lub hauv paus lus hloov, koj yuav tsum batch txav `TOC` nyob rau hauv ib yam lus nyob rau hauv lub project mus rau lwm yam lus.

Koj tuaj yeem xa mus rau cov lus txib hauv qab no:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Thov hloov kho `en/` thiab `zh/` nyob rau hauv cov lus txib saum toj no rau koj hom lus.


