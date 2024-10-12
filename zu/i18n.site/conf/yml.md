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

### `use: Toc` , Isifanekiso Sefayela Elilodwa Elinohlaka

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` isho ukunikezela kusetshenziswa isifanekiso `Toc` , esinikezela ngesifanekiso esi `Markdown` esisodwa.

`TOC` uyisifinyezo sika `Table of Contents` Uma lesi sifanekiso sihunyushwa, uhlaka lwaleli fayela elingu `Markdown` luzovezwa kubha eseceleni.

`url:` umele indlela yefayela ka `Markdown` ( `/` ihambisana nomsuka wemibhalo `/README.md` , leli gama lefayela lidinga isiqalo sosonhlamvukazi kanye nesijobelelo sofeleba abancane).

### `use: Md` , Isifanekiso Sefayela Elilodwa Ngaphandle Kohlaka

Isifanekiso `Md` nesifanekiso `Toc` ziyefana futhi zombili zisetshenziselwa ukunikeza ifayela elilodwa elingu `Markdown` . Kodwa isifanekiso `Md` asibonisi uhlaka kubha eseceleni.

Ungakwazi ukulungisa `use: Toc` ekucushweni okungenhla kube ngu `use: Md` , usebenzise `i18n.site` ohlwini lwemibhalo `md` futhi, bese uvakashela i-URL yokubuka kuqala yokuthuthukisa ukuze ubone izinguquko ekhasini eliyisiqalo.

### `use: Blog` Izifanekiso Zebhulogi

Isifanekiso sebhulogi sibonisa uhlu lwezihloko (izihloko nezifinyezo) ngokulandelana kwesikhathi sokushicilelwa.

[→ Chofoza lapha ukuze ufunde mayelana nokucushwa okuthile](/i18n.site/conf/blog)

### `use: Doc` , Isifanekiso Sedokhumenti Enamafayela Amaningi

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

Kumapharamitha angenhla, ifayela lenkomba yohla lwemibhalo elihambisanayo lithi:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Iphrojekthi Eyodwa Amafayela Amaningi

Uma unephrojekthi eyodwa kuphela, ungayilungisa ngendlela elandelayo.

```
  - i18n: xxx
    use: Doc
```

##### Uma I-Url Ingenalutho, Ishintsha Ngokuzenzakalelayo Enanini Le-I18n

Uma `url` engabhalwanga, oku `url` kuzenzakalela enanini lika `i18n` Lo mthetho uyasebenza nakwezinye izifanekiso.

Indlela yokubhala engenhla ilingana no `url: xxx` , futhi ifayela layo elihambisanayo ngu `en/xxx/TOC` .

#### Ithebula Le-TOC Lokuqukethwe Inkomba

`i18n.site` izosebenzisa `js` -plug-in `.i18n/hook/after.tran/TOC.js` esitolo sedemo ukuze ifunde ifayela lenkomba yenkomba `TOC` elihambisana nokulungiselelwa kwezifanekiso ezi `doc` ukuze kukhiqizwe uhlaka lwemibhalo `json` .

Uma usebenzisa isifanekiso `doc` , kufanele ube nale plug-in.

Uma uqalisa iphrojekthi `i18n.site` kufolda engenalutho, khumbula ukukopisha iphrojekthi yedemo `.i18n` kusiqondisi sakho.

Isifanekiso `Doc` sizonikeza ithebula lokuqukethwe uhlaka olususelwe ku `json` ekhiqiziwe.

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

Amafayela `TOC` afakwe i-indenti ukuze abonise ubudlelwano besigaba sohlaka, asekela ukuhlehlisa okunamazinga amaningi, namazwana omugqa aqala ngo `#` .

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

Isibonelo, uma `/test` efinyelelwa, futhi `nav:` elungiswa ngaphandle kwesiqalo sale ndlela, futhi ulimi lwamanje lokuphequlula isiNgisi (ikhodi `en` ), `/en/test.md` uzolayishwa ngokuzenzakalelayo futhi unikezwe kusetshenziswa isifanekiso `Md` .

Uma `/en/test.md` leli fayela lingekho, kuzovela ikhasi eli `404` elizenzakalelayo.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">