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

Phakathi kwazo, `i18n: home` ihambelana nesi `home: Home` kwisi `en/i18n.yml` (apho `en` ilulwimi olusetyenziswayo ekuguquleleni iprojekthi).

Umxholo `en/i18n.yml` ngumbhalo oboniswe kwimenyu yokukhangela, eya kuguqulelwa ngokwe- `fromTo` kwi-configuration, umzekelo, iguqulelwe kwi `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Emva kokuba uguqulelo lugqityiwe, unokuguqula ixabiso lenguqulelo `yml` , kodwa ungafaki okanye ucime isitshixo sokuguqulela `yml` .

### 0Ithempleyithi Yoxwebhu `use: Toc` Olunolwandlalo

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` kuthetha unikezelo kusetyenziswa itemplate `Toc` , enikezela ngetemplate enye eyi `Markdown` .

`TOC` sisishunqulelo sika `Table of Contents` Xa le template inikezelwa, ulwandlalo lwale fayile lu `Markdown` luya kuboniswa kwibar esecaleni.

`url:` imele umendo wefayile we- `Markdown` ( `/` ihambelana nolawulo lweengcambu `/README.md` , eli gama lefayile lifuna unobumba abakhulu kunye nesimamva esisezantsi).

### `use: Md` Ngaphandle Kolwandlalo

I-template `Md` kunye ne `Toc` template ziyafana kwaye zombini zisetyenziselwa ukubonelela ngefayili enye `Markdown` . Kodwa itemplate `Md` ayibonisi ulwandlalo kwibar esecaleni.

Ungalungisa `use: Toc` kuqwalaselo olungentla ukuya ku `use: Md` , sebenzisa `i18n.site` kuluhlu olu `md` kwakhona, kwaye emva koko undwendwele i-URL yemboniso yophuhliso ukujonga utshintsho kwiphepha lasekhaya.

### `use: Blog` Izakhelo Zeblogi

Itemplate yeblogi ibonisa uluhlu lwamanqaku (izihloko kunye nezicatshulwa) ngokulandelelana kwexesha lokupapashwa.

[→ Cofa apha ukufunda malunga noqwalaselo oluthile](/i18n.site/conf/blog)

### `use: Doc` Zeefayile Zefayile

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

Ifayile yesalathisi esihambelanayo kwezi parameters zingasentla yile:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Iprojekthi Enye Iifayile Ezininzi

Ukuba uneprojekthi enye kuphela, ungayiqwalasela ngolu hlobo lulandelayo.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Iprojekthi enye enefayile ezininzi ayixhasi uqwalaselo `url` njengengcambu yendlela `/`
> Ukuba __conf.yml → nav:__ Akukho mendo yengcambu iqwalaselweyo, xa ufikelela kwiphepha lasekhaya lewebhusayithi, iya kubhalwa kwakhona ngokuzenzekelayo kwi-URL yokuqala phantsi kobumbeko lwe `nav:` .
> Olu luyilo kukwahlula ngcono amaxwebhu eprojekthi, iiblogi kunye neminye imixholo ngokusebenzisa abalawuli.
> Kucetyiswa ukuba usebenzise ifayile enye kunye nephepha elinye njengephepha lasekhaya.

> [!TIP]
> Ukuba `url` akabhalwanga, `url` ayigqibekanga kwixabiso lika `i18n` Lo mgaqo usebenza nakwezinye iitemplates.

#### Uluhlu Lweziqulatho Ze-TOC

Ukuba ithempleyithi `use: Doc` yenziwe kuqwalaselo, nceda uvule iplagi-in `i18n.addon/toc` ku `.i18n/conf.yml` Ubumbeko ngolu hlobo lulandelayo :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` izakufaka ngokuzenzekelayo kwaye iphumeze le plug-in, funda `TOC` ifayile yesalathiso solawulo, kwaye wenze `json` ulwandlalo lolawulo.

Ukuba yiprojekthi enye enefayile ezininzi, i-root directory `TOC` yi-directory ehambelana ne `url:` kumthombo wolwimi lwemvelaphi Umzekelo, ukuba ulwimi lwemvelaphi sisiTshayina: ifayile ehambelana no `url: flashduty` ngu `zh/flashduty/TOC` .

Ukuba iiprojekthi ezininzi kunye neefayile ezininzi, akukho mfuneko yokuqwalasela `url:` I-root directory ye- `TOC` yi-directory ehambelana nexabiso le- `i18n` .

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

Uyabona ukuba `Deme Two` inomgca wethegi yeprojekthi ngezantsi kwemenyu ehlayo kunye `Your Project slogan` leprojekthi yekhathalogu :

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

Ngokomzekelo, ukuba `/test` ifikeleleke kwaye `nav:` iqwalaselwe ngaphandle kwesimaphambili salo mendo, kwaye ulwimi lwangoku lokukhangela isiNgesi (ikhowudi `en` ), `/en/test.md` iya kulayishwa ngokungagqibekanga kwaye inikezelwe ngokusebenzisa itemplate `Md` .

Ukuba `/en/test.md` le fayile ayikho, iphepha eli `404` elingagqibekanga liya kuboniswa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">