# .i18n/conf.yml

Ifayile yoqwalaselo ithi `.i18n/conf.yml` `i18n.site`

Ngaphandle kwe `ignore:` kunye ne `i18n:` useto [`i18`](/i18) , ifayile yoqwalaselo ngolu hlobo lulandelayo:

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

Phakathi kwazo, i- `ext:` yoqwalaselo `upload` ithetha ukuba kuphela `.md` eza kulayishwa xa kupapashwa.

## nav Navigation Ephezulu

Iinketho `nav:` , ezihambelana nemenyu yokukhangela phezulu kwiphepha lasekhaya.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Phakathi kwazo `i18n: home` ihambelana ne `en/i18n.yml`中`home: Home` .

iya kuguqulelwa kwiilwimi ezininzi, njenge `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Emva kokuba uguqulelo lugqityiwe, unokuguqula `yml` kwinguqulelo, kodwa ungafaki okanye ucime isitshixo sokuguqulela `yml` .

### `use: Toc` Itemplate Yefayile Enye (Kunye Nolwandlalo)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` kuthetha ukusebenzisa `Toc` , olunikezela ngetemplate enye `Markdown` .

`TOC` sisishunqulelo `Markdown` `Table of Contents` .

`url:` imele umendo wefayile we `Markdown` ( `/` ihambelana nolawulo lweengcambu `/README.md` , eli gama lefayile lifuna unobumba omkhulu kunye nesimamva esisezantsi).

### `use: Md` Itemplate Yefayile Enye (Akukho Lwandlalo)

`Md` Template iyafana `Toc` , zombini zisetyenziselwa ukunikezela ngefayile enye `Markdown` . Nangona kunjalo `Md` itemplate ayibonisi ulwandlalo kwibar esecaleni.

`use: Toc` kolu qwalaselo lungentla ku- `use: Md` , sebenzisa `i18n.site` kulawulo lwe- `md` kwakhona, kwaye emva koko undwendwele i-URL yokujonga kwangaphambili ukujonga utshintsho kwiphepha lasekhaya.

### Ukulayisha Okumiselweyo Ngaphandle Kwendlela Yoqwalaselo

Ukuba isimaphambili semendo somendo othile ofikelelwayo asibunjwanga `nav:` i `MarkDown` ifayile ehambelana nomendo iya kulayishwa ngokungagqibekanga kwaye inikezelwe kusetyenziswa `Md` template.

Umzekelo, ukuba undwendwela `/test` kwaye `nav:` iqwalaselwe ngaphandle kwale ndlela, kwaye ulwimi lwephepha sisiNgesi ( ikhowudi `en` ), itemplate iya kulayishwa `/en/test.md` kwaye inikezelwe kusetyenziswa `Md` ngokungagqibekanga.

`/en/test.md` le fayile ayikho, iphepha `404` liza kuboniswa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Itemplate Yeefayile Ezininzi

Kwifayile yoqwalaselo:

```
  - i18n: blog
    use: Doc
```

Ibonisa ukusebenzisa `Doc`

`Doc` Isakhelo sixhasa ukudityaniswa kwee `MarkDown` ezininzi ukuvelisa amagqabantshintshi eeprojekthi enye okanye ezininzi.

#### Iprojekthi Enye (Iifayile Ezininzi)

`blog` apha ngasentla yindlela yeprojekthi enye ye `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Xa I-Url Ingenanto, Ayigqibekanga Kwixabiso Le-I18n

Ukuba awubhali `url` `url` kwixabiso le `i18n` .

Le ndlela yokubhala ingentla ilingana nokuba `url: blog` kwaye ifayile yayo ehambelanayo ngu `en/blog/TOC` .

#### Iiprojekthi Ezininzi

`.i18n/conf.yml` kwi `i18n:doc` yimowudi yeeprojekthi ezininzi.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Apha `menu: NB demo1,demo2` kuthetha ukusebenzisa `NB` ukunika imenyu eyehlayo.

`NB` , sisishunqulelo se `Name Breif` , ebonisa ukuba imenyu eyehlayo ingabonisa igama kunye nesilogeni seprojekthi.

`NB` ilandelwa yiparameter `demo1,demo2` egqithiselwe kuyo.
Qaphela ukuba akufuneki kubekho izithuba ** phambi nasemva kwekoma `,` : ** `demo1,demo2`

Kwezi parameters zingentla, ifayile yesalathisi esihambelanayo yile:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Uluhlu Lweziqulatho Ze-TOC

`i18n.site` Iza kuphumeza i- `js` plugin `.i18n/hook/after.tran/TOC.js` kwindawo yokugcina yesiboniso ukufunda ifayile yesalathiso sikavimba weefayili `doc` ehambelana noqwalaselo lwetemplate `TOC` ukwenza `json` yolwandlalo lolawulo.

Ukuba usebenzisa `doc` , kufuneka ube nale plug-in.

Ukuba uqalisa `i18n.site` kwifolda engenanto, khumbula ukukopa `.i18n` kwiprojekthi yedemo kulawulo lwakho.

`Doc` `json`

##### Inkcazo Eneenkcukacha Zomxholo

Umxholo umi ngolu : lulandelayo `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Sebenzisa Ukuhlelwa Ukubonisa Amanqanaba

`en/blog/TOC` `README.md` `i18n.site`

Imigca emibini elandelayo njengoko kubonisiwe kumfanekiso wekhusi ongezantsi.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ne `News` ,
ihambelana ne `Our Product is Online !` `news/begin.md`

`TOC`

##### Inqanaba Lomzali Libhala Kuphela Isihloko, Hayi Umxholo.

Xa kukho amanqanaba amaninzi e-indentation, inqanaba lomzali libhala kuphela isihloko kungekhona umxholo. Ngaphandle koko, i-typography iya konakala.

##### Iprojekthi README.md 

`README.md` yeprojekthi, umzekelo, ungabhala umxholo kwi `en/demo2/README.md` .

Qaphela ukuba umxholo wale fayile awubonisi uluhlu lweziqulatho, ngoko kuyacetyiswa ukuba unciphise ubude kwaye ubhale intshayelelo emfutshane.

###### Isilogeni Seprojekthi

Njengoko ubona `Deme Two` Ngezantsi kwemenyu eyehlayo kunye negama leprojekthi yekhathalogu, kukho isilogeni `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: kuhambelana nomgca wokuqala `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`README.md` `:`

Abasebenzisi abavela eTshayina, eJapan naseKorea, nceda uqaphele ukuba kufuneka usebenzise ikholoni yobubanzi obuyisiqingatha endaweni yekholoni yobubanzi obugcweleyo `:`

##### Uyihambisa Njani I-TOC Ngobuninzi?

`TOC` kufuneka ibekwe kuluhlu lolwimi lwemvelaphi.

Umzekelo, ukuba ulwimi lomthombo sisiTshayina, ngoko `TOC` ngu `zh/blog/TOC` .

Ukuba ulwimi lwemvelaphi lulungisiwe, kufuneka wenze ibhetshi yokuhambisa `TOC` ngolwimi oluthile kwiprojekthi ukuya kolunye ulwimi.

Ungabhekisa kule miyalelo ilandelayo:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Nceda `en/` kwaye `zh/` kumyalelo ongasentla kwikhowudi yakho yolwimi.


