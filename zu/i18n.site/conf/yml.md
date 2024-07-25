# .i18n/conf.yml

Ifayela lokumisa lithi `.i18n/conf.yml` `i18n.site`

Ngaphandle kwezilungiselelo `ignore:` kanye `i18n:` [`i18`](/i18) ifayela lokucushwa limi kanje:

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

Phakathi kwazo, into engu- `ext:` yokucushwa `upload` ukuthi yi- `.md` kuphela ezolayishwa lapho kushicilelwa.

## Phezulu Navigation nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Phakathi kwazo `i18n: home` ihambisana ne- `en/i18n.yml`中`home: Home` .

`en/i18n.yml` izohunyushelwa ezilimini eziningi, njenge- `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ngemva kokuqedwa kokuhumusha, ungalungisa inani le- `yml` kodwa ungangezi noma ususe ukhiye `yml`

### `use: Toc` Isifanekiso Sefayela Elilodwa (Nohlaka)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` kusho ukusebenzisa `Toc` sokuhumusha, okunikeza isifanekiso se- `Markdown` esisodwa.

`TOC` isifinyezo sika `Table of Contents` `Markdown`

`url:` imele indlela yefayela ye- `Markdown` ( `/` ihambisana nohlu lwemibhalo yezimpande `/README.md` , leli gama lefayela lidinga isiqalo sosonhlamvukazi kanye nesijobelelo sofeleba abancane).

### `use: Md` Isifanekiso Sefayela Elilodwa (Alukho Uhlaka)

`Md` Isifanekiso siyefana ne- `Toc` , zombili zisetshenziselwa ukunikeza ifayela elilodwa elingu- `Markdown` . Nokho `Md` isifanekiso asibonisi uhlaka kubha eseceleni.

`use: Toc` ekucushweni okungenhla ku- `use: Md` , sebenzisa `i18n.site` kuhla lwemibhalo lwe- `md` futhi, bese uvakashela i-URL yokubuka kuqala ukuze ubone izinguquko ekhasini eliyisiqalo.

### Ukulayisha Okuzenzakalelayo Ngaphandle Kwendlela Yokumisa

Uma isiqalo somzila wendlela ethile efinyelelwayo singalungiselelwe kokuthi `nav:` ifayela `MarkDown` elihambisana nendlela lizolayishwa ngokuzenzakalelayo futhi linikezwe kusetshenziswa isifanekiso se- `Md` .

Isibonelo, uma uvakashela `/test` futhi `nav:` icushwe ngaphandle kwale ndlela, futhi ulimi lwekhasi isiNgisi (code `en` ), isifanekiso sizolayishwa `/en/test.md` futhi sisetshenziswe kusetshenziswa `Md` ngokuzenzakalelayo.

`/en/test.md` leli fayela lingekho, kuzovela ikhasi elizenzakalelayo elingu- `404` .

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Isifanekiso Samafayela Amaningi

Kufayela lokumisa:

```
  - i18n: blog
    use: Doc
```

Ikhombisa ukusebenzisa `Doc`

`Doc` Isifanekiso sisekela ukuhlanganisa `MarkDown` amaningi ukuze kukhiqizwe izinhlaka zedokhumenti yephrojekthi eyodwa noma eminingi.

#### Iphrojekthi Eyodwa (Amafayela Amaningi)

`blog` kokungenhla imodi yephrojekthi eyodwa ye- `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Uma I-Url Ingenalutho, Ishintsha Ngokuzenzakalelayo Enanini Le-I18n

Uma ungabhali `url` `url` kunani lika- `i18n` . Lo mthetho uyasebenza nakwezinye izifanekiso.

Indlela yokubhala engenhla ilingana nokuba `url: blog` futhi ifayela layo elihambisanayo lithi `en/blog/TOC` .

#### Amaphrojekthi Amaningi

`.i18n/conf.yml` Ukucushwa ku- `i18n:doc` kuyimodi yamaphrojekthi amaningi.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Lapha, `menu: NB demo1,demo2` kusho ukusebenzisa `NB` ukuze unikeze imenyu yokudonsela phansi.

`NB` , isifinyezo sika `Name Breif` , okubonisa ukuthi imenyu yokudonsela phansi ingabonisa igama nesiqubulo sephrojekthi.

`NB` ilandelwa `demo1,demo2` edluliselwe kuyo.
Qaphela ukuthi akumele kube nezikhala ** ngaphambi nangemuva kwekhefana `,` `demo1,demo2` : **

Kumapharamitha angenhla, ifayela lenkomba yohla lwemibhalo elihambisanayo lithi:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Ithebula Le-TOC Lokuqukethwe Inkomba

`i18n.site` Izosebenzisa i-plugin engu- `js` `.i18n/hook/after.tran/TOC.js` endaweni yokugcina yedemo ukuze ifunde ifayela lenkomba yohla lwemibhalo `doc` elihambisana nokucushwa kwesifanekiso `TOC` ukuze kukhiqizwe `json` yohlaka lwemibhalo.

Uma usebenzisa `doc` , kufanele ube nale plug-in.

Uma uqalisa `i18n.site` kufolda engenalutho, khumbula ukukopisha `.i18n` kuphrojekthi yedemo kumkhombandlela wakho.

`Doc` Isifanekiso sizonikeza ithebula lokuqukethwe ngokususelwe ku- `json` ekhiqiziwe.

##### Incazelo Yokuqukethwe Enemininingwane

Okuqukethwe : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Sebenzisa Ukuhlehlisa Ukukhombisa Amaleveli

Ngenhla `en/blog/TOC` `README.md` emugqeni wokuqala ihambisana ne- `i18n.site` esesithombeni esingezansi, okuyigama lephrojekthi.

Imigqa emibili elandelayo injengoba kukhonjisiwe kusithombe-skrini esingezansi.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ne- `News` ,
ihambisana ne- `Our Product is Online !` `news/begin.md`

`TOC`

##### Izinga Lomzali Libhala Isihloko Kuphela, Hhayi Okuqukethwe.

Uma kunamaleveli amaningi wokuhlehlisa, ileveli yomzali ibhala isihloko kuphela hhayi okuqukethwe. Uma kungenjalo, i-typography izokonakala.

##### Iphrojekthi README.md 

`README.md` wephrojekthi, isibonelo, ungabhala okuqukethwe ku- `en/demo2/README.md` .

Qaphela ukuthi okuqukethwe kwaleli fayela akubonisi uhlu lokuqukethwe, ngakho-ke kunconywa ukuthi ukhawule ubude futhi ubhale isingeniso esifushane.

###### Isiqubulo Sephrojekthi

Njengoba ubona `Deme Two` ngezansi kwemenyu yokudonsela phansi kanye negama lephrojekthi yekhathalogi, kunesiqubulo sayo sephrojekthi : `Your Project slogan`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: kuhambisana nomugqa wokuqala `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Iphrojekthi `README.md` Okuqukethwe ngemuva kwekholoni yokuqala `:` esihlokweni sezinga lokuqala kuzothathwa njengesiqubulo sephrojekthi.

Abasebenzisi abavela e-China, Japan nase-Korea, sicela niqaphele ukuthi kufanele nisebenzise ikholoni yobubanzi obugcwele esikhundleni `:` yobubanzi obugcwele.

##### Uyihambisa Kanjani I-TOC Ngobuningi?

`TOC` Ifayela lidinga ukufakwa ohlwini lwemibhalo lolimi oluwumthombo.

Isibonelo, uma ulimi lomthombo kuyi-Chinese `TOC` ngenhla ithi `zh/blog/TOC` .

Uma ulimi lomthombo lulungiswa, udinga ukuhlanganisa `TOC` ngolimi oluthile kuphrojekthi uwayise kolunye ulimi.

Ungabheka imiyalo elandelayo:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Sicela `en/` futhi `zh/` kumyalo ongenhla kukhodi yakho yolimi.


