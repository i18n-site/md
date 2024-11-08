# Faka Futhi Usebenzise

## IWindows Kuqala Ifake I-Git bash

windows Uhlelo, sicela [uchofoze lapha ukuze ulande futhi ufake `git bash` kuqala](https://git-scm.com/download/win) .

Yenza imisebenzi elandelayo ku `git bash` .

## Faka

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Lungiselela Ithokheni Yokuhumusha

Vakashela [i18n.site/token](//i18n.site/token) Chofoza ukuze ukopishe ithokheni

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Dala `~/.config/i18n.site.yml` , namathisela okuqukethwe okukopishiwe kukho, okuqukethwe kungokulandelayo:

```
token: YOUR_API_TOKEN
```

Ukwengeza, udinga ukubopha ikhadi lesikweletu lokukhokha ku- [i18n.site/payBill](//i18n.site/payBill) (Akukho ukushajwa kabusha okudingekayo, iwebhusayithi izodonsa ngokuzenzakalelayo izindleko ngokuya ngokusetshenziswa, [bheka ikhasi eliyisiqalo ukuze uthole amanani](/#price) ).

## Sebenzisa

### Iphrojekthi Yedemo

Sicela ubheke iphrojekthi yedemo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) ufunde ukucushwa kokuhumusha okungu `i18` .

Abasebenzisi e-China bangakwazi ukuhlanganisa [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Ngemva kokuhlanganisa, faka uhla lwemibhalo bese usebenzisa `i18` ukuze uqedele ukuhumusha.

### Isakhiwo Sohlu Lwemibhalo

Isakhiwo sohla lwemibhalo yesifanekiso sesifanekiso simi kanje

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Amafayela edemo ahunyushiwe ohlwini lwemibhalo `en` ayisibonelo nje futhi angasuswa.

### Qalisa Ukuhumusha

Faka uhla lwemibhalo bese usebenzisa okuthi `i18` ukuze uhumushe.

Ngaphezu kokuhumusha, uhlelo luzophinda lukhiqize ifolda `.i18n/data` , sicela uyengeze endaweni yokugcina.

Ngemva kokuhumusha ifayela elisha, ifayela ledatha elisha lizokhiqizwa kulolu hlu lwemibhalo Khumbula ukwengeza okuthi `git add . ` .

## Ifayela Lokucushwa

`.i18n/conf.yml` uyifayela lokumisa lethuluzi lokuhumusha lomugqa womyalo ongu `i18`

Okuqukethwe kungokulandelayo:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Ulimi Lomthombo &

Efayelini lokumisa, okungaphansi kuka `fromTo` :

`en` uwulimi oluwumthombo, `zh ja ko de fr` uwulimi okuqondiswe kulo ekuhumusheni.

Ikhodi yolimi bheka [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Isibonelo, uma ufuna ukuhumushela isiShayina uye esiNgisini, bhala kabusha lo mugqa `zh: en` .

Uma ufuna ukuhumushela kuzo zonke izilimi ezisekelwayo, sicela ushiye kungenalutho ngemva kuka `:` . Ngokwesibonelo

```
i18n:
  fromTo:
    en:
```

Ungakwazi ukumisa `fromTo` kwe-subdirectories / Amafayela okubonisa abhalwe kanje :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Kuleli thebula lokucushwa, ulimi oluwumthombo lwekhathalogi engu `blog` yokuhumusha ngu- `zh` , futhi ulimi oluwumthombo lokuhumusha kwekhathalogi `blog/your_file_name.md` ngu- `ja` .

### Izithombe/Izixhumanisi Zezilimi Eziningi

Lapho ama-URL ezithombeni nasezihlotsheni kokuthi `replace:` no `MarkDown` (kanye nezibaluli ezingu `src` nezi `href` zokushumekiwe `HTML` ) zilungiswa kokuthi `.i18n/conf.yml` nalesi siqalo, ikhodi yolimi lomthombo ku-URL izothathelwa indawo ikhodi yolimi yokuhumusha ( [ulimi uhlu lwamakhodi](/i18/LANG_CODE) ).

Isibonelo, ukumisa kwakho kungokulandelayo:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` isichazamazwi, ukhiye yisiqalo se-URL okufanele sishintshwe, futhi inani liwumthetho wokubuyisela.

Incazelo yokufaka esikhundleni somthetho `ko de uk>ru zh-TW>zh >en` ngenhla ukuthi `ko de` usebenzisa isithombe sekhodi yolimi lwakhe, `zh-TW` no `zh` usebenzisa isithombe sika `zh` , `uk` usebenzisa isithombe sika `ru` , nezinye izilimi (ezifana no `ja` ) usebenzisa isithombe. kwezingu- `en` ngokuzenzakalelayo.

Isibonelo, ifayela lesiFulentshi ( `fr` ) elingumthombo lika - `MarkDown` limi kanje :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Ifayela lesiNgisi elihunyushwe nelakhiwe ( `en` ) limi kanje :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Lapha, `/en/` kukhodi yolimi oluwumthombo athathelwa indawo `/zh/` olimini okuqondiwe kulo.

Qaphela : Kufanele kube `/` ngaphambi nangemuva kwekhodi yolimi yombhalo oshintshiwe ku-URL.

> [!TIP]
> Uma `- /` kulungiselelwa kokuthi `url:` , izindlela ezihlobene kuphela ezizofaniswa, kodwa ama-URL aqala ngo `//` ngeke afaniswe.
>
> Uma ezinye izixhumanisi zegama lesizinda zifuna ukushintshwa futhi ezinye zingafuni ukushintshwa, ungasebenzisa iziqalo ezihlukene ezifana no `[x](//x.com/en/)` no `[x](https://x.com/en/)` ukuze uzihlukanise.

### Ziba Ifayela

Ngokuzenzakalelayo, wonke amafayela aqala ngo `.md` kanye no `.yml` kuhla lwemibhalo lolimi oluwumthombo azohunyushwa.

Uma ufuna ukuziba amafayela athile futhi ungawahumushi (njengokungakapheli okungaqediwe), ungawalungiselela ngenkambu ethi `ignore` .

`ignore` isebenzisa i [globset](https://docs.rs/globset/latest/globset/#syntax) syntax efanayo nefayela `.gitignore` .

Isibonelo, `_* ` efayeleni lokumisa elingenhla lisho ukuthi amafayela aqala ngo `_` ngeke ahunyushwe.

## Imithetho Yokuhumusha

### Abahleli Bokuhumusha Akufanele Bengeze Noma Basuse Imigqa

Ukuhumusha kuyahleleka. Shintsha umbhalo wasekuqaleni futhi uwuhumushe ngomshini futhi, ukuguqulwa mathupha kokuhumusha ngeke kubhalwe phezu (uma lesi sigaba sombhalo wokuqala singashintshwanga).

> [!WARN]
> Kumelwe kube khona ukuxhumana phakathi kwemigqa yokuhumusha nombhalo wokuqala. Okusho ukuthi, ungangezi noma ususe imigqa lapho uhlanganisa ukuhumusha. Uma kungenjalo, izodala ukudideka kunqolobane yokuhlela yokuhumusha.

Uma kukhona okungahambi kahle, sicela ubheke ku [-FAQ ukuthola izisombululo.](/i18/qa#H1)

### `YAML` Izinguqulo

Ithuluzi lomugqa womyalo lizothola wonke amafayela agcina ngo `.yml` kunkomba yefayela lolimi lomthombo futhi liwahumushe.

* Qaphela ukuthi isijobelelo segama lefayela kufanele sibe ngu `.yml` (hhayi `.yaml` ).

Ithuluzi lihumusha kuphela amanani esichazamazwi ngo `.yml` , hhayi okhiye besichazamazwi.

Isibonelo `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

izohunyushwa ngokuthi `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Ukuhumusha okuthi `YAML` nakho kungashintshwa ngesandla (kodwa ungangezi noma ususe okhiye noma imigqa ekuhumusheni).

Ngokusekelwe ekuhumusheni `YAML` , ungakwazi ukwakha kalula izixazululo zamazwe ngamazwe zezilimi ezihlukahlukene zokuhlela.

## Ukusetshenziswa Okuthuthukile

### Uhla Lwemibhalo Olungaphansi Lokuhumusha

Uma nje `.i18n/conf.yml` udaliwe (asikho isidingo sokuqala kusifanekiso sephrojekthi yedemo njalo), `i18` izosebenza kahle.

Ithuluzi lomugqa womyalo lizothola ukucushwa `.i18n/conf.yml` kuwo wonke ama-subdirectories futhi liwahumushe.

Amaphrojekthi asebenzisa i [monorepo](//monorepo.tools) architecture angahlukanisa amafayela olimi abe ama-subdirectory.

![](https://p.3ti.site/1719910016.avif)

### Inkomba Yokufaka Ngokwezifiso

Izofakwa ku `/usr/local/bin` ngokuzenzakalelayo.

Uma `/usr/local/bin` ingenayo imvume yokubhala izofakwa ku `~/.bin` .

Ukusetha okuguquguqukayo kwemvelo `TO` kungachaza inkomba yokufaka, isibonelo :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```