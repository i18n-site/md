# .i18n/conf.yml

Cov ntaub ntawv teeb tsa rau `i18n.site` yog `.i18n/conf.yml` thiab cov ntsiab lus yog raws li hauv qab no :

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

Ntawm lawv, `upload` mus rau `ext:` cov khoom teeb tsa txhais tau tias tsuas yog `.md` yuav raug xa tawm thaum tshaj tawm.

## Top Navigation nav

`nav:` configuration xaiv, sib xws rau cov ntawv qhia zaub mov nyob rau sab saum toj ntawm lub homepage.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Ntawm lawv, `i18n: home` sib raug rau `home: Home` nyob rau hauv `en/i18n.yml` (qhov twg `en` yog lub hauv paus lus ntawm qhov project translation).

`en/i18n.yml` cov ntsiab lus yog cov ntawv tso tawm hauv cov ntawv qhia zaub mov, uas yuav raug txhais raws li `fromTo` hauv kev teeb tsa, piv txwv li, txhais mus rau `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Tom qab kev txhais lus tiav lawm, koj tuaj yeem hloov kho tus nqi ntawm kev txhais lus `yml` , tab sis tsis txhob ntxiv lossis rho tawm tus yuam sij ntawm kev txhais lus `yml` .

### `use: Toc` Daim Ntawv Template Nrog Cov Qauv

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` txhais tau tias rendering siv `Toc` template, uas yog rendering ib `Markdown` template.

`TOC` yog cov ntawv luv ntawm `Table of Contents` Thaum cov qauv no tau ua tiav, cov txheej txheem ntawm `Markdown` cov ntaub ntawv no yuav raug tso tawm rau hauv sidebar.

`url:` sawv cev rau txoj kab ntawm cov ntaub ntawv ntawm `Markdown` ( `/` sib haum rau hauv paus directory `/README.md` , cov ntaub ntawv npe no yuav tsum muaj cov ntawv sau ua ntej thiab tus lej qis).

### `use: Md` Daim Ntawv Template Tsis Muaj Cov Qauv

`Md` template thiab `Toc` template yog tib yam thiab ob qho tib si siv los ua ib daim ntawv `Markdown` . Tab sis `Md` tus qauv tsis qhia cov qauv hauv lub sidebar.

Koj tuaj yeem hloov kho `use: Toc` hauv qhov kev teeb tsa saum toj no rau `use: Md` , khiav `i18n.site` hauv `md` phau ntawv qhia dua, thiab tom qab ntawd mus saib qhov kev txhim kho saib ua ntej URL los saib xyuas cov kev hloov pauv ntawm nplooj ntawv homepage.

### `use: Blog` Blog Templates

Lub blog template qhia cov npe ntawm cov ntawv (cov npe thiab cov ntsiab lus) raws li lub sijhawm tshaj tawm.

[→ Nyem qhov no kom paub txog cov kev teeb tsa tshwj xeeb](/i18n.site/conf/blog)

### `use: Doc` Cov Ntaub Ntawv Cov Ntaub Ntawv Templates

Nyob rau hauv cov ntaub ntawv configuration:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Qhia siv `Doc` rau template rendering.

`Doc` template txhawb kev sib koom ua ke ntau yam `MarkDown` los tsim cov ntaub ntawv qhia rau ib leeg lossis ntau qhov haujlwm.

#### Ntau Qhov Project Thiab Ntau Cov Ntaub Ntawv

Kev teeb tsa ntawm `.i18n/conf.yml` hauv `i18n:doc` yog ntau qhov project multi-file rendering hom.

Ntawm no, `menu: NB demo1,demo2` , txhais tau tias siv `NB` template los ua cov ntawv qhia zaub mov.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , uas yog cov ntawv luv ntawm `Name Breif` , txhais tau hais tias cov ntawv qhia zaub mov tuaj yeem tso saib lub npe thiab cov lus hais ntawm qhov project.

`NB` yog ua raws li qhov parameter `demo1,demo2` dhau mus rau nws.

Nco ntsoov : ** Yuav tsum tsis muaj qhov chaw ** ua ntej thiab tom qab comma `,` hauv `demo1,demo2` .

Cov ntaub ntawv txheeb xyuas cov ntaub ntawv txheeb xyuas rau cov kev txwv saum toj no yog:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Ib Qhov Project Ntau Cov Ntaub Ntawv

Yog tias koj tsuas muaj ib qhov project, koj tuaj yeem teeb tsa nws raws li hauv qab no.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Ib qhov project nrog ntau cov ntaub ntawv tsis txhawb kev teeb tsa `url` raws li txoj hauv paus `/`
> `nav:` nav:__ tias __conf.yml
> Qhov kev tsim no yog kom paub qhov txawv ntawm qhov project cov ntaub ntawv, blogs thiab lwm yam ntsiab lus los ntawm cov npe.
> Nws raug nquahu kom siv ib cov ntaub ntawv thiab ib nplooj ntawv raws li lub tsev.

> [!TIP]
> Yog tias `url` tsis tau sau, `url` defaults rau tus nqi ntawm `i18n` Txoj cai no tseem siv tau rau lwm cov qauv.

#### TOC Table of Content Index

Yog template `use: Doc` enabled nyob rau hauv lub configuration, thov qhib plug-in `i18n.addon/toc` nyob rau hauv `.i18n/conf.yml` Cov configuration yog raws li nram no :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` yuav cia li nruab thiab ua tiav qhov plug-in no, nyeem `TOC` phau ntawv teev npe cov ntaub ntawv, thiab tsim `json` phau ntawv qhia.

Yog hais tias nws yog ib qhov project nrog ntau cov ntaub ntawv, cov hauv paus directory `TOC` yog cov directory sib raug rau `url:` nyob rau hauv lub ntsiab lus directory Piv txwv li, yog hais tias lub hauv paus lus yog Suav: cov ntaub ntawv sib raug rau `url: flashduty` yog `zh/flashduty/TOC` .

Yog tias nws yog ntau yam haujlwm thiab ntau cov ntaub ntawv, tsis tas yuav teeb tsa `url:` Lub hauv paus directory ntawm `TOC` yog cov npe sib txuas rau tus nqi ntawm `i18n` .

##### Cov Ntsiab Lus Nthuav Dav

`en/blog/TOC` Cov ntsiab lus yog raws li hauv qab no :

```
README.md

news/README.md
  news/begin.md
```

##### Siv Indentation Los Qhia Qib

`README.md` nyob rau hauv thawj kab ntawm `en/blog/TOC` saum toj no sib raug rau `i18n.site` hauv daim duab hauv qab no, uas yog lub npe project.

Ob kab tom ntej no yog raws li qhia hauv lub screenshot hauv qab no.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` sib raug rau `News` ,
`news/begin.md` sib `Our Product is Online !`

`TOC` cov ntaub ntawv yog indented los qhia cov hierarchical kev sib raug zoo ntawm tus qauv, txhawb ntau theem indentation, thiab kab lus pib nrog `# ` .

##### Qib Niam Txiv Tsuas Yog Sau Lub Npe Xwb, Tsis Yog Cov Ntsiab Lus.

Thaum muaj ntau theem ntawm indentation, theem niam txiv tsuas yog sau lub npe thiab tsis yog cov ntsiab lus. Txwv tsis pub, typography yuav messed.

##### Project README.md

Cov ntsiab lus tuaj yeem sau rau hauv nqe lus `README.md` , xws li `en/demo2/README.md` .

Nco ntsoov tias cov ntsiab lus ntawm cov ntaub ntawv no tsis qhia cov ntsiab lus ntawm cov ntsiab lus, yog li nws raug pom zoo kom txwv qhov ntev thiab sau cov lus qhia luv luv.

###### Qhov Project Slogan

Koj tuaj yeem pom tias `Deme Two` muaj nws qhov project tagline hauv qab cov ntawv qhia zaub mov thiab cov ntawv teev npe ntawm qhov project `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Qhov no sib raug rau thawj kab ntawm `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Cov ntsiab lus tom qab thawj txoj kab `:` ntawm thawj qib npe ntawm qhov project `README.md` yuav raug suav tias yog qhov project slogan.

Cov neeg siv los ntawm Tuam Tshoj, Nyiv thiab Kauslim Teb, thov nco ntsoov tias koj yuav tsum siv ib nrab-dav nyuv `:` es tsis txhob puv-dav nyav.

##### Yuav Ua Li Cas Txav TOC Hauv Ntau?

`TOC` cov ntaub ntawv yuav tsum tau muab tso rau hauv cov npe ntawm cov lus.

Piv txwv li, yog hais tias lub hauv paus lus yog Suav, ces `TOC` saum toj no yog `zh/blog/TOC` .

Yog tias cov lus hloov pauv, koj yuav tsum tau batch txav `TOC` cov ntaub ntawv ntawm ib hom lus hauv qhov project mus rau lwm hom lus.

Koj tuaj yeem xa mus rau cov lus txib hauv qab no:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Thov hloov kho `en/` thiab `zh/` hauv cov lus txib saum toj no rau koj cov lus code.

### Default Loading Tsis Configuration Txoj Kev

Rau ib txoj hauv kev tau nkag mus, yog tias txoj hauv kev ua ntej tsis tau teeb tsa hauv `nav:` , `MarkDown` cov ntaub ntawv sib raug rau txoj hauv kev yuav raug thauj khoom los ntawm lub neej ntawd thiab siv `Md` tus qauv.

Piv txwv li, yog tias `/test` nkag mus thiab `nav:` tau teeb tsa yam tsis muaj qhov ua ntej ntawm txoj kev no, thiab cov lus tshawb nrhiav tam sim no yog lus Askiv (code `en` ), `/en/test.md` yuav raug thauj khoom los ntawm lub neej ntawd thiab siv cov qauv `Md` .

Yog tias tsis muaj `/en/test.md` cov ntaub ntawv no, lub neej ntawd `404` nplooj ntawv yuav tshwm sim.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">