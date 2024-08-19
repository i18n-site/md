# .i18n/conf.yml

Iphrofayela ka- `i18n.site` ngu- `.i18n/conf.yml` .

Ngaphandle kwezilungiselelo ze [`i18`](/i18) , `ignore:` kanye no `i18n:` , ifayela lokumisa limi kanje:

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

Phakathi kwazo, `upload` kuya ku `ext:` into yokucushwa isho ukuthi `.md` kuphela ezolayishwa lapho kushicilelwa.

## Phezulu Navigation nav

`nav:` izinketho zokumisa, ezihambisana nemenyu yokuzulazula phezulu ekhasini lasekhaya.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Phakathi kwazo, `i18n: home` uhambisana no `home: Home` ku- `en/i18n.yml` .

`en/i18n.yml` izohunyushelwa ezilimini eziningi, njengokuthi `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ngemva kokuqedwa kokuhumusha, ungashintsha inani lokuhumusha `yml` , kodwa ungangezi noma ususe ukhiye wokuhumusha `yml` .

### `use: Toc` , Isifanekiso Sefayela Elilodwa (Nohlaka)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` isho ukunikezela kusetshenziswa isifanekiso `Toc` , esinikezela ngesifanekiso esi `Markdown` esisodwa.

`TOC` uyisifinyezo sika- `Table of Contents` Uma lesi sifanekiso sihunyushwa, uhlaka lwaleli fayela elingu `Markdown` luzovezwa kubha eseceleni.

U `url:` umele indlela yefayela ka `Markdown` ( `/` ihambisana nomsuka wemibhalo `/README.md` , leli gama lefayela lidinga isiqalo sosonhlamvukazi kanye nesijobelelo sofeleba abancane).

### `use: Md` , Isifanekiso Sefayela Elilodwa (Alukho Uhlaka)

Isifanekiso esingu `Md` nesifanekiso esingu `Toc` ziyefana futhi zombili zisetshenziselwa ukunikeza ifayela elilodwa elingu `Markdown` . Kodwa isifanekiso `Md` asibonisi uhlaka kubha eseceleni.

Ungakwazi ukulungisa `use: Toc` ekucushweni okungenhla kube ngu `use: Md` , usebenzise `i18n.site` ohlwini lwemibhalo `md` futhi, bese uvakashela i-URL yokubuka kuqala yokuthuthukisa ukuze ubone izinguquko ekhasini eliyisiqalo.

### Ukulayisha Okuzenzakalelayo Ngaphandle Kwendlela Yokumisa

Uma indlela ethile ifinyelelwa futhi isiqalo saso somzila singalungiselelwe kokuthi `nav:` , ifayela `MarkDown` elihambisana nendlela lizolayishwa ngokuzenzakalelayo futhi linikezwe kusetshenziswa isifanekiso esingu `Md` .

Isibonelo, uma `/test` efinyelelwa, futhi `nav:` kumiswa ngaphandle kwale ndlela, futhi ulimi lwekhasi isiNgisi (ikhodi `en` ), `/en/test.md` izolayishwa ngokuzenzakalelayo futhi inikezwe kusetshenziswa isifanekiso `Md` .

Uma `/en/test.md` leli fayela lingekho, kuzovela ikhasi eli `404` elizenzakalelayo.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Isifanekiso Samafayela Amaningi

Kufayela lokumisa:

```
  - i18n: blog
    use: Doc
```

Ibonisa ukusebenzisa `Doc` ekunikezeni isifanekiso.

`Doc` isifanekiso sisekela ukuhlanganisa oku `MarkDown` okuningi ukuze kukhiqizwe izinhlaka zedokhumenti yephrojekthi eyodwa noma eminingi.

#### Iphrojekthi Eyodwa (Amafayela Amaningi)

`blog` ngenhla imodi yento eyodwa engu- `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Uma I-Url Ingenalutho, Ishintsha Ngokuzenzakalelayo Enanini Le-I18n

Uma `url` engabhalwanga, `url` kuzenzakalela enanini lika `i18n` Lo mthetho uyasebenza nakwezinye izifanekiso.

Indlela yokubhala engenhla ilingana no `url: blog` , futhi ifayela layo elihambisanayo ngu `en/blog/TOC` .

#### Amaphrojekthi Amaningi

Ukucushwa kwe `i18n:doc` koku- `.i18n/conf.yml` kuyimodi yamaphrojekthi amaningi.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Lapha, `menu: NB demo1,demo2` , kusho ukusebenzisa isifanekiso `NB` ukuze unikeze imenyu yokudonsela phansi.

`NB` , okuyisifinyezo sika `Name Breif` , kusho ukuthi imenyu yokudonsela phansi ingabonisa igama nesiqubulo sephrojekthi.

`NB` ilandelwa ipharamitha engu `demo1,demo2` edluliselwe kuyo.
Qaphela : ** Akufanele kube nezikhala ** ngaphambi nangemuva kukakhefana `,` ku- `demo1,demo2` .

Ifayela lenkomba yohla lwemibhalo elihambisanayo lamapharamitha angenhla lithi:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Ithebula Le-TOC Lokuqukethwe Inkomba

`i18n.site` izosebenzisa i `js` plug-in `.i18n/hook/after.tran/TOC.js` esitolo sedemo ukuze ifunde ifayela lenkomba yenkomba engu `doc` elihambisana nokulungiselelwa kwezifanekiso `TOC` ukuze kukhiqizwe uhlaka lwemibhalo emi `json` .

Uma usebenzisa isifanekiso esingu `doc` , kufanele ube nale plug-in.

Uma uqalisa iphrojekthi `i18n.site` kufolda engenalutho, khumbula ukukopisha iphrojekthi yedemo `.i18n` kusiqondisi sakho.

Isifanekiso esingu `Doc` sizonikeza ithebula lokuqukethwe uhlaka olususelwe ku `json` ekhiqiziwe.

##### Incazelo Yokuqukethwe Enemininingwane

`en/blog/TOC` imi kanje :

```
README.md

news/README.md
  news/begin.md
```

##### Sebenzisa Ukuhlehlisa Ukukhombisa Amaleveli

`README.md` kumugqa wokuqala ka- `en/blog/TOC` ngenhla uhambisana no `i18n.site` esithombeni esingezansi, okuyigama lephrojekthi.

Imigqa emibili elandelayo injengoba kukhonjisiwe kusithombe-skrini esingezansi.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` uhambisana no `News` ,
`news/begin.md` ihambisana no `Our Product is Online !`

Amafayela `TOC` afakwe i-indenti ukuze abonise ubudlelwano besigaba sohlaka futhi asekele ukuhlehlisa okunamazinga amaningi.

##### Izinga Lomzali Libhala Isihloko Kuphela, Hhayi Okuqukethwe.

Uma kunamaleveli amaningi wokuhlehlisa, ileveli yomzali ibhala isihloko kuphela hhayi okuqukethwe. Uma kungenjalo, i-typography izokonakala.

##### Iphrojekthi README.md

Okuqukethwe kungabhalwa entweni `README.md` , njengokuthi `en/demo2/README.md` .

Qaphela ukuthi okuqukethwe kwaleli fayela akubonisi uhlu lokuqukethwe, ngakho-ke kunconywa ukuthi ukhawule ubude futhi ubhale isingeniso esifushane.

###### Isiqubulo Sephrojekthi

Ungabona ukuthi u `Deme Two` unomugqa wethegi yephrojekthi ngezansi kwemenyu yokudonsela phansi kanye negama lephrojekthi : `Your Project slogan` .

![](https://p.3ti.site/1721276842.avif)

Lokhu kuhambisana nomugqa wokuqala `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Okuqukethwe ngemva kwekholoni yokuqala `:` yesihloko sezinga lokuqala lephrojekthi `README.md` kuzobhekwa njengesiqubulo sephrojekthi.

Abasebenzisi abavela e-China, Japan nase-Korea, sicela niqaphele ukuthi kufanele nisebenzise ikholoni yobubanzi obuyingxenye engu- `:` esikhundleni sekholoni yobubanzi obugcwele.

##### Uyihambisa Kanjani I-TOC Ngobuningi?

`TOC` amafayela adinga ukufakwa ohlwini lwemibhalo lolimi oluwumthombo.

Isibonelo, uma ulimi lomthombo kuyi-Chinese, kusho ukuthi `TOC` ngenhla ngu `zh/blog/TOC` .

Uma ulimi lomthombo lulungiswa, udinga ukuhlanganisa amafayela `TOC` olimi oluthile kuphrojekthi uwayise kolunye ulimi.

Ungabheka imiyalo elandelayo:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Sicela ulungise `en/` kanye no `zh/` emyalweni ongenhla kukhodi yakho yolimi.