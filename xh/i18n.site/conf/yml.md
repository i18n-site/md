# .i18n/conf.yml

Ifayile yoqwalaselo ye `i18n.site` yi `.i18n/conf.yml` kwaye umxholo unje :

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

Phakathi kwabo, `upload` ukuya kwi `ext:` yoqwalaselo into ithetha ukuba kuphela `.md` iya kulayishwa xa ipapasha.

## nav Navigation Ephezulu

`nav:` iinketho zoqwalaselo, ezihambelana nemenyu yokukhangela phezulu kwiphepha lasekhaya.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Phakathi kwazo, `i18n: home` ihambelana nesi `home: Home` kwisi `en/i18n.yml` (apho `en` ilulwimi olusisiseko lwenguqulelo yeprojekthi).

Umxholo `en/i18n.yml` ngumbhalo oboniswe kwimenyu yokukhangela, eya kuguqulelwa ngokwe- `fromTo` kwi-configuration, umzekelo, iguqulelwe kwi `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Emva kokuba uguqulelo lugqityiwe, unokuguqula ixabiso lenguqulelo `yml` , kodwa ungafaki okanye ucime isitshixo sokuguqulela `yml` .

### `use: Toc` , Itemplate Yefayile Enye Enolwandlalo

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` kuthetha unikezelo kusetyenziswa itemplate `Toc` , enikezela ngetemplate enye eyi `Markdown` .

`TOC` sisishunqulelo sika `Table of Contents` Xa le template inikezelwa, ulwandlalo lwale fayile lu `Markdown` luya kuboniswa kwibar esecaleni.

`url:` imele umendo wefayile we- `Markdown` ( `/` ihambelana nolawulo lweengcambu `/README.md` , eli gama lefayile lifuna unobumba abakhulu kunye nesimamva esisezantsi).

### `use: Md` , Itemplate Yefayile Enye Ngaphandle Kolwandlalo

I-template `Md` kunye ne `Toc` template ziyafana kwaye zombini zisetyenziselwa ukubonelela ngefayili enye `Markdown` . Kodwa itemplate `Md` ayibonisi ulwandlalo kwibar esecaleni.

Ungalungisa `use: Toc` kuqwalaselo olungentla ukuya ku `use: Md` , sebenzisa `i18n.site` kuluhlu olu `md` kwakhona, kwaye emva koko undwendwele i-URL yemboniso yophuhliso ukujonga utshintsho kwiphepha lasekhaya.

### `use: Blog` Izakhelo Zeblogi

Itemplate yeblogi ibonisa uluhlu lwamanqaku (izihloko kunye nezicatshulwa) ngokulandelelana kwexesha lokupapashwa.

[→ Cofa apha ukufunda malunga noqwalaselo oluthile](/i18n.site/conf/blog)

### `use: Doc` , Itemplate Yeefayile Ezininzi

Kwifayile yoqwalaselo:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Ibonisa ukusebenzisa `Doc` kunikezelo lwetemplate.

`Doc` ithempleyithi ixhasa ukudibanisa ezininzi `MarkDown` ukuvelisa amagqabantshintshi amaxwebhu kwiiprojekthi enye okanye ezininzi.

#### Iiprojekthi Ezininzi Kunye Neefayile Ezininzi

Ubumbeko lwe `.i18n/conf.yml` kwi `i18n:doc` yimowudi yonikezelo lweefayile ezininzi zeeprojekthi.

Apha, `menu: NB demo1,demo2` , uthetha ukusebenzisa itemplate `NB` ukunika imenyu eyehlayo.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , isifinyezo se- `Name Breif` , ithetha ukuba imenyu yokuhla ingabonisa igama kunye nesilogeni seprojekthi.

`NB` ilandelwa yiparameter `demo1,demo2` egqithiselwe kuyo.

Qaphela : ** Kufuneka kungabikho `,` ** phambi nasemva `demo1,demo2` .

Kwezi parameters zingentla, ifayile yesalathisi esihambelanayo yile:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Iprojekthi Enye Iifayile Ezininzi

Ukuba uneprojekthi enye kuphela, ungayiqwalasela ngolu hlobo lulandelayo.

```
  - i18n: xxx
    use: Doc
```

##### Xa I-Url Ingenanto, Ayigqibekanga Kwixabiso Le-I18n

Ukuba `url` akabhalwanga, `url` ayigqibekanga kwixabiso lika `i18n` Lo mgaqo usebenza nakwezinye iitemplates.

Indlela yokubhala engentla ilingana no `url: xxx` , kwaye ifayile yayo ehambelanayo yi `en/xxx/TOC` .

#### Uluhlu Lweziqulatho Ze-TOC

`i18n.site` iya kwenza i-plug-in ye `js` `.i18n/hook/after.tran/TOC.js` kwindawo yokugcina i-demo ukuze ifunde ifayile yesalathisi ye- `TOC` ehambelana ne- `doc` template yoqwalaselo ukuvelisa i `json` directory outline.

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

Iifayile ze `TOC` zifakwe kwi-indent ukubonisa ubudlelwane be-hierarchical ye-outline, inkxaso ye-multi-level indentation, kunye nezimvo zomgca eziqala nge `# ` .

##### Inqanaba Lomzali Libhala Isihloko Kuphela, Hayi Umxholo.

Xa kukho amanqanaba amaninzi e-indentation, inqanaba lomzali libhala kuphela isihloko kungekhona umxholo. Ngaphandle koko, i-typography iya konakala.

##### Iprojekthi README.md

Umxholo ungabhalwa kwinqaku `README.md` , njenge- `en/demo2/README.md` .

Qaphela ukuba umxholo wale fayile awubonisi uluhlu lweziqulatho, ngoko kuyacetyiswa ukuba unciphise ubude kwaye ubhale intshayelelo emfutshane.

###### Isilogeni Seprojekthi

Uyabona ukuba `Deme Two` inomgca wethegi yeprojekthi ngezantsi kwemenyu eyehlayo kunye `Your Project slogan` leprojekthi yekhathalogu :

![](https://p.3ti.site/1721276842.avif)

Oku kuhambelana nomqolo wokuqala we `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Umxholo osemva kwekholoni `:` yokuqala yesihloko somgangatho wokuqala weprojekthi `README.md` uya kuthathwa njengesilogeni seprojekthi.

Abasebenzisi abavela eChina, eJapan naseKorea, nceda uqaphele ukuba kufuneka usebenzise ikholoni yobubanzi obuyisiqingatha- `:` endaweni yekholoni yobubanzi obugcweleyo.

##### Uyihambisa Njani I-TOC Ngobuninzi?

`TOC` iifayile kufuneka zibekwe kulawulo lolwimi lwemvelaphi.

Umzekelo, ukuba ulwimi lomthombo sisiTshayina, u `TOC` ungasentla ngu `zh/blog/TOC` .

Ukuba ulwimi lwemvelaphi lulungisiwe, kufuneka wenze ibhetshi uhambise iifayile ezi `TOC` zolwimi oluthile kwiprojekthi ukuya kolunye ulwimi.

Ungabhekisa kule miyalelo ilandelayo:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Nceda ulungise `en/` kunye `zh/` kulo myalelo ungasentla kwikhowudi yolwimi lwakho.

### Ukulayisha Okumiselweyo Ngaphandle Kwendlela Yoqwalaselo

Kumendo othile ofikelelwayo, ukuba isimaphambili sendlela asiqwalaselwe kwi `nav:` , ifayile `MarkDown` ehambelana nomendo iya kulayishwa ngokungagqibekanga kwaye inikezelwe kusetyenziswa itemplate `Md` .

Ngokomzekelo, ukuba `/test` ifikeleleke, kwaye `nav:` iqwalaselwe ngaphandle kwesimaphambili sale ndlela, kwaye ulwimi lwangoku lokukhangela isiNgesi (ikhowudi `en` ), `/en/test.md` iya kulayishwa ngokungagqibekanga kwaye inikezelwe ngokusebenzisa itemplate `Md` .

Ukuba `/en/test.md` le fayile ayikho, iphepha eli `404` elingagqibekanga liya kuboniswa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">