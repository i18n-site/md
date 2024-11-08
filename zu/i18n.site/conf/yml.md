# .i18n/conf.yml

Ifayela lokumisa lika `i18n.site` ngu `.i18n/conf.yml` futhi okuqukethwe kungokulandelayo :

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

Phakathi kwazo, `upload` kuya ku `ext:` into yokucushwa isho ukuthi `.md` kuphela ezolayishwa lapho kushicilelwa.

## Phezulu Navigation nav

`nav:` izinketho zokumisa, ezihambisana nemenyu yokuzulazula phezulu ekhasini eliyisiqalo.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Phakathi kwazo, `i18n: home` uhambisana no `home: Home` koku `en/i18n.yml` (lapho `en` kuwulimi oluwumthombo wokuhumusha kwephrojekthi).

`en/i18n.yml` okuqukethwe umbhalo ovezwe kumenyu yokuzulazula, ezohunyushwa ngokuya ngo `fromTo` ekucushweni, isibonelo, okuhunyushwe ku `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ngemva kokuqedwa kokuhumusha, ungashintsha inani lokuhumusha `yml` , kodwa ungangezi noma ususe ukhiye wokuhumusha `yml` .

### `use: Toc` Yedokhumenti Eyodwa Enohlaka

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` isho ukunikezela kusetshenziswa isifanekiso `Toc` , esinikezela ngesifanekiso esi `Markdown` esisodwa.

`TOC` uyisifinyezo sika `Table of Contents` Uma lesi sifanekiso sihunyushwa, uhlaka lwaleli fayela elingu `Markdown` luzovezwa kubha eseceleni.

`url:` umele indlela yefayela ka `Markdown` ( `/` ihambisana nomsuka wemibhalo `/README.md` , leli gama lefayela lidinga isiqalo sosonhlamvukazi kanye nesijobelelo sofeleba abancane).

### `use: Md` Yedokhumenti Eyodwa Ngaphandle Kohlaka

Isifanekiso `Md` nesifanekiso `Toc` ziyefana futhi zombili zisetshenziselwa ukunikeza ifayela elilodwa elingu `Markdown` . Kodwa isifanekiso `Md` asibonisi uhlaka kubha eseceleni.

Ungakwazi ukulungisa `use: Toc` ekucushweni okungenhla kube ngu `use: Md` , usebenzise `i18n.site` ohlwini lwemibhalo `md` futhi, bese uvakashela i-URL yokubuka kuqala yokuthuthukisa ukuze ubone izinguquko ekhasini eliyisiqalo.

### `use: Blog` Izifanekiso Zebhulogi

Isifanekiso sebhulogi sibonisa uhlu lwezihloko (izihloko nezifinyezo) ngokulandelana kwesikhathi sokushicilelwa.

[→ Chofoza lapha ukuze ufunde mayelana nokucushwa okuthile](/i18n.site/conf/blog)

### 0Izifanekiso Zamafayela `use: Doc`

Kufayela lokumisa:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Ibonisa ukusebenzisa `Doc` ekunikezeni isifanekiso.

`Doc` isifanekiso sisekela ukuhlanganisa oku `MarkDown` okuningi ukuze kukhiqizwe izinhlaka zedokhumenti yephrojekthi eyodwa noma eminingi.

#### Amaphrojekthi Amaningi Namafayela Amaningi

Ukucushwa kuka `.i18n/conf.yml` koku `i18n:doc` kuyimodi yokunikezela enamafayela amaningi amaphrojekthi amaningi.

Lapha, `menu: NB demo1,demo2` , kusho ukusebenzisa isifanekiso `NB` ukuze unikeze imenyu yokudonsela phansi.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , okuyisifinyezo sika- `Name Breif` , kusho ukuthi imenyu yokudonsela phansi ingabonisa igama nesiqubulo sephrojekthi.

`NB` ilandelwa ipharamitha engu `demo1,demo2` edluliselwe kuyo.

Qaphela : ** Akufanele kube nezikhala ** ngaphambi nangemuva kukakhefana `,` ku `demo1,demo2` .

Ifayela lenkomba yohla lwemibhalo elihambisanayo lamapharamitha angenhla lithi:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Iphrojekthi Eyodwa Amafayela Amaningi

Uma unephrojekthi eyodwa kuphela, ungayilungisa ngendlela elandelayo.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Iphrojekthi eyodwa enamafayela amaningi ayikusekeli ukulungiselelwa okungu `url` njengendlela eyimpande engu `/`
> Uma __conf.yml → nav:__ Ayikho indlela yempande emisiwe, lapho ufinyelela ikhasi eliyisiqalo lewebhusayithi, izobhalwa kabusha ngokuzenzakalelayo ku-URL yokuqala ngaphansi kokucushwa okungu `nav:` .
> Lo mklamo owokuhlukanisa kangcono amadokhumenti ephrojekthi, amabhulogi nokunye okuqukethwe ngezinhlu.
> Kunconywa ukusebenzisa ifayela elilodwa kanye nekhasi elilodwa njengekhasi lasekhaya.

> [!TIP]
> Uma `url` engabhalwanga, oku `url` kuzenzakalela enanini lika `i18n` Lo mthetho uyasebenza nakwezinye izifanekiso.

#### Ithebula Le-TOC Lokuqukethwe Inkomba

Uma isifanekiso `use: Doc` sinikwe amandla ekucushweni, sicela unike amandla i-plug-in `i18n.addon/toc` ku `.i18n/conf.yml` Ukucushwa kungokulandelayo :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` izofaka ngokuzenzakalelayo futhi isebenzise lesi plug-in, ifunde `TOC` ifayela lenkomba yohla lwemibhalo, futhi ikhiqize `json` uhlaka lwemibhalo.

Uma kuyiphrojekthi eyodwa enamafayela amaningi, uhla lwemibhalo oluyimpande `TOC` luwuhla lwemibhalo oluhambisana no `url:` kuhla lwemibhalo lolimi lomthombo Ngokwesibonelo, uma ulimi lomthombo kuyi-Chinese: ifayela elihambisana no `url: flashduty` ngu `zh/flashduty/TOC` .

Uma kungamaphrojekthi amaningi namafayela amaningi, asikho isidingo sokumisa okuthi `url:` Uhlu lwemibhalo oluyimpande luka- `TOC` luwuhla lwemibhalo oluhambisana nenani lika `i18n` .

##### Incazelo Yokuqukethwe Enemininingwane

`en/blog/TOC` imi kanje :

```
README.md

news/README.md
  news/begin.md
```

##### Sebenzisa Ukuhlehlisa Ukukhombisa Amaleveli

`README.md` kumugqa wokuqala ka `en/blog/TOC` ngenhla uhambisana no `i18n.site` esithombeni esingezansi, okuyigama lephrojekthi.

Imigqa emibili elandelayo injengoba kukhonjisiwe kusithombe-skrini esingezansi.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` uhambisana no `News` ,
`news/begin.md` ihambisana no `Our Product is Online !`

Amafayela `TOC` afakwe i-indenti ukuze abonise ubudlelwano besigaba sohlaka, asekela ukuhlehlisa okunamazinga amaningi, namazwana omugqa aqala ngo `# ` .

##### Izinga Lomzali Libhala Isihloko Kuphela, Hhayi Okuqukethwe.

Uma kunamaleveli amaningi wokuhlehlisa, ileveli yomzali ibhala isihloko kuphela hhayi okuqukethwe. Uma kungenjalo, i-typography izokonakala.

##### Iphrojekthi README.md

Okuqukethwe kungabhalwa entweni `README.md` , njengokuthi `en/demo2/README.md` .

Qaphela ukuthi okuqukethwe kwaleli fayela akubonisi uhlu lokuqukethwe, ngakho-ke kunconywa ukuthi ukhawule ubude futhi ubhale isingeniso esifushane.

###### Isiqubulo Sephrojekthi

Ungabona ukuthi `Your Project slogan` `Deme Two` unomugqa wethegi yephrojekthi ngezansi kwemenyu yokudonsela phansi kanye negama lephrojekthi yekhathalogi : .

![](https://p.3ti.site/1721276842.avif)

Lokhu kuhambisana nomugqa wokuqala ka `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Okuqukethwe ngemva kwekholoni yokuqala `:` yesihloko sezinga lokuqala lephrojekthi `README.md` kuzobhekwa njengesiqubulo sephrojekthi.

Abasebenzisi abavela e-China, Japan nase-Korea, sicela niqaphele ukuthi kufanele nisebenzise ikholoni yobubanzi obuyingxenye engu- `:` esikhundleni sekholoni yobubanzi obugcwele.

##### Uyihambisa Kanjani I-TOC Ngobuningi?

`TOC` amafayela adinga ukufakwa ohlwini lwemibhalo lolimi oluwumthombo.

Isibonelo, uma ulimi lomthombo kuyi-Chinese, kusho ukuthi `TOC` ngenhla ngu `zh/blog/TOC` .

Uma ulimi lomthombo lulungiswa, udinga ukuhlanganisa amafayela angu `TOC` olimi oluthile kuphrojekthi uwayise kolunye ulimi.

Ungabheka imiyalo elandelayo:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Sicela ulungise `en/` kanye no `zh/` emyalweni ongenhla kukhodi yakho yolimi.

### Ukulayisha Okuzenzakalelayo Ngaphandle Kwendlela Yokumisa

Ukuze kufinyelelwe indlela ethile, uma isiqalo sendlela singalungiselelwe kokuthi `nav:` , ifayela elingu `MarkDown` elihambisana nendlela lizolayishwa ngokuzenzakalelayo futhi linikezwe kusetshenziswa isifanekiso `Md` .

Isibonelo, uma `/test` efinyelelwa bese `nav:` elungiswa ngaphandle kwesiqalo sale ndlela, futhi ulimi lwamanje lokuphequlula isiNgisi (ikhodi `en` ), `/en/test.md` uzolayishwa ngokuzenzakalelayo futhi unikezwe kusetshenziswa isifanekiso `Md` .

Uma `/en/test.md` leli fayela lingekho, kuzovela ikhasi elingu `404` elizenzakalelayo.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">