# .i18n/conf.yml

Iprofayili ye `i18n.site` yi `.i18n/conf.yml` .

Ngaphandle koseto lwe [`i18`](/i18) , `ignore:` kunye no `i18n:` , ifayile yoqwalaselo imi ngolu hlobo lulandelayo:

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

Phakathi kwabo, `upload` ukuya kwi `ext:` yoqwalaselo into ithetha ukuba kuphela `.md` iya kulayishwa xa ipapasha.

## nav Navigation Ephezulu

`nav:` iinketho zoqwalaselo, ezihambelana nemenyu yokukhangela phezulu kwiphepha lasekhaya.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Phakathi kwabo, `i18n: home` ihambelana no `home: Home` kwi `en/i18n.yml` .

`en/i18n.yml` iya kuguqulelwa kwiilwimi ezininzi, njenge `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Emva kokuba uguqulelo lugqityiwe, unokuguqula ixabiso lenguqulelo `yml` , kodwa ungafaki okanye ucime isitshixo sokuguqulela i `yml` .

### `use: Toc` , Itemplate Yefayile Enye (Kunye Nolwandlalo)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` kuthetha unikezelo kusetyenziswa itemplate `Toc` , enikezela ngetemplate enye eyi `Markdown` .

`TOC` sisishunqulelo sika `Table of Contents` Xa le template inikezelwa, ulwandlalo lwale fayile lu `Markdown` luya kuboniswa kwibar esecaleni.

`url:` imele umendo wefayile we `Markdown` ( `/` ihambelana nolawulo lweengcambu `/README.md` , eli gama lefayile lifuna unobumba abakhulu kunye nesimamva esisezantsi).

### `use: Md` , Itemplate Yefayile Enye (Akukho Lwandlalo)

I-template `Md` kunye ne `Toc` template ziyafana kwaye zombini zisetyenziselwa ukubonelela ngefayili enye `Markdown` . Kodwa itemplate ye `Md` ayibonisi ulwandlalo kwibar esecaleni.

Ungalungisa `use: Toc` kuqwalaselo olungentla ukuya ku `use: Md` , sebenzisa `i18n.site` kuluhlu olu `md` kwakhona, kwaye emva koko undwendwele i-URL yemboniso yophuhliso ukujonga utshintsho kwiphepha lasekhaya.

### Ukulayisha Okumiselweyo Ngaphandle Kwendlela Yoqwalaselo

Ukuba indlela ethile ifikelelwe kwaye isimaphambili sayo somendo asilungiswanga kwi `nav:` , ifayile ye `MarkDown` ehambelana nomendo iya kulayishwa ngokungagqibekanga kwaye inikezelwe kusetyenziswa itemplate ye `Md` .

Ngokomzekelo, ukuba `/test` ifikeleleke, kwaye `nav:` iqwalaselwe ngaphandle kwale ndlela, kwaye ulwimi lwephepha luyisiNgesi (ikhowudi `en` ), `/en/test.md` iya kulayishwa ngokungagqibekanga kwaye inikezelwe ngokusebenzisa itemplate `Md` .

Ukuba `/en/test.md` le fayile ayikho, iphepha `404` elingagqibekanga liya kuboniswa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Itemplate Yeefayile Ezininzi

Kwifayile yoqwalaselo:

```
  - i18n: blog
    use: Doc
```

Ibonisa ukusebenzisa `Doc` kunikezelo lwetemplate.

`Doc` ithempleyithi ixhasa ukudibanisa ezininzi `MarkDown` ukuvelisa amagqabantshintshi amaxwebhu kwiiprojekthi enye okanye ezininzi.

#### Iprojekthi Enye (Iifayile Ezininzi)

`blog` engentla yindlela enye ye `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Xa I-Url Ingenanto, Ayigqibekanga Kwixabiso Le-I18n

Ukuba `url` akabhalwanga, `url` ayigqibekanga kwixabiso lika- `i18n` Lo mgaqo usebenza nakwezinye iitemplates.

Indlela yokubhala engentla ilingana no `url: blog` , kwaye ifayile yayo ehambelanayo yi `en/blog/TOC` .

#### Iiprojekthi Ezininzi

Ubumbeko lwe `i18n:doc` ngaphandle kwe `.i18n/conf.yml` yimowudi yeeprojekthi ezininzi.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Apha, `menu: NB demo1,demo2` , uthetha ukusebenzisa itemplate e `NB` ukunika imenyu eyehlayo.

`NB` , isifinyezo se `Name Breif` , ithetha ukuba imenyu yokuhla ingabonisa igama kunye nesilogeni seprojekthi.

`NB` ilandelwa yiparameter `demo1,demo2` egqithiselwe kuyo.
Qaphela : ** Kufuneka kungabikho zithuba ** phambi `,` `demo1,demo2` .

Kwezi parameters zingentla, ifayile yesalathisi esihambelanayo yile:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Uluhlu Lweziqulatho Ze-TOC

`i18n.site` iya kwenza i-plug-in ye `js` `.i18n/hook/after.tran/TOC.js` kwindawo yokugcina i-demo ukuze ifunde ifayile yesalathisi ye `doc` ehambelana ne `TOC` template yoqwalaselo ukuvelisa i `json` directory outline.

Ukuba usebenzisa itemplate `doc` , kufuneka ube nale plug-in.

Ukuba uqalisa iprojekthi `i18n.site` ukusuka kwincwadi engenanto, khumbula ukukopa iprojekthi yedemo `.i18n` kulawulo lwakho.

I-template ye `Doc` iya kunika i-table of contents outline esekelwe kwi- generated `json` .

##### Inkcazo Eneenkcukacha Zomxholo

`en/blog/TOC` Umxholo umi ngolu hlobo lulandelayo :

```
README.md

news/README.md
  news/begin.md
```

##### Sebenzisa Ukuhlelwa Ukubonisa Amanqanaba

`README.md` kumqolo wokuqala we `en/blog/TOC` ngasentla ihambelana ne `i18n.site` kumfanekiso ongezantsi, eli gama leprojekthi.

Imigca emibini elandelayo njengoko kubonisiwe kumfanekiso wekhusi ongezantsi.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ihambelana no `News` ,
`news/begin.md` ihambelana no `Our Product is Online !`

Iifayile ze `TOC` zifakwe kwi-indent ukubonisa ubudlelwane be-hierarchical ye-outline, inkxaso ye-multi-level indentation, kunye nezimvo zomgca eziqala nge `#` .

##### Inqanaba Lomzali Libhala Isihloko Kuphela, Hayi Umxholo.

Xa kukho amanqanaba amaninzi e-indentation, inqanaba lomzali libhala kuphela isihloko kungekhona umxholo. Ngaphandle koko, i-typography iya konakala.

##### Iprojekthi README.md

Umxholo ungabhalwa kwinqaku `README.md` , njenge `en/demo2/README.md` .

Qaphela ukuba umxholo wale fayile awubonisi uluhlu lweziqulatho, ngoko kuyacetyiswa ukuba unciphise ubude kwaye ubhale intshayelelo emfutshane.

###### Isilogeni Seprojekthi

Uyabona ukuba `Your Project slogan` `Deme Two` inomgca wethegi yeprojekthi ngezantsi kwemenyu ehlayo kunye negama leprojekthi yekhathalogu :

![](https://p.3ti.site/1721276842.avif)

Oku kuhambelana nomqolo wokuqala `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Umxholo osemva kwekholoni `:` yokuqala yesihloko somgangatho wokuqala weprojekthi `README.md` uya kuthathwa njengesilogeni seprojekthi.

Abasebenzisi abavela eChina, eJapan naseKorea, nceda uqaphele ukuba kufuneka usebenzise ikholoni yobubanzi obuyisiqingatha- `:` endaweni yekholoni yobubanzi obugcweleyo.

##### Uyihambisa Njani I-TOC Ngobuninzi?

`TOC` iifayile kufuneka zibekwe kulawulo lolwimi lwemvelaphi.

Umzekelo, ukuba ulwimi lomthombo sisiTshayina, u `TOC` ungasentla ngu `zh/blog/TOC` .

Ukuba ulwimi lwemvelaphi lulungisiwe, kufuneka wenze ibhetshi uhambise iifayile `TOC` zolwimi oluthile kwiprojekthi ukuya kolunye ulwimi.

Ungabhekisa kule miyalelo ilandelayo:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Nceda ulungise `en/` kunye no `zh/` kulo myalelo ungasentla kwikhowudi yolwimi lwakho.