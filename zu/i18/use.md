# Faka Futhi Usebenzise

## IWindows Kuqala Ifake I-Git bash

windows Uhlelo, sicela [uchofoze lapha ukuze ulande futhi ufake `git bash`](https://git-scm.com/download/win) .

Yenza imisebenzi elandelayo ku- `git bash`

## Faka

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Lungiselela Ithokheni Yokuhumusha

Vakashela [i18n.site/token](//i18n.site/token) Chofoza ukuze ukopishe ithokheni

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Dala `~/.config/i18n.site.yml` namathisela okuqukethwe okukopishiwe kukho, okuqukethwe kungokulandelayo:

```
token: YOUR_API_TOKEN
```

Ukwengeza, udinga [i18n.site/payBill](//i18n.site/payBill) ikhadi lesikweletu ukuze ukhokhe (akukho ukushajwa kabusha okudingekile, iwebhusayithi izodonsa ngokuzenzakalelayo imali ngokuya ngokusetshenziswa, [bheka ikhasi eliyisiqalo ukuze uthole amanani](/#price) ).

## Sebenzisa

### Iphrojekthi Yedemo

Sicela ubheke iphrojekthi [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) ukuze ufunde ukucushwa kokuhumusha `i18`

Abasebenzisi e-China bangakwazi ukuhlanganisa [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Ngemva kokuhlanganisa, faka uhla lwemibhalo bese ugijima `i18`

### Ukwakheka Kwemibhalo

Isakhiwo sohla lwemibhalo yesifanekiso sesifanekiso simi kanje

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Uhlu lwemibhalo lwe- `en` luqukethe amafayela edemo ahunyushiwe, ayisibonelo nje futhi angasuswa.

### Qalisa Ukuhumusha

Faka uhla lwemibhalo bese ugijima `i18`

### Engeza Amafayela Endaweni Yokugcina

Ngaphezu kokuhumusha, uhlelo luzophinda lukhiqize amafayela alandelayo, sicela uwangeze endaweni yokugcina.

```
.i18n/hash
.i18n/cache/.gitignore
```

Phakathi kwazo : okuqukethwe yilokhu okulandelayo `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Lokhu kusho ukuthi ungaziba wonke amafayela `.i18n/cache/` lwemibhalo (ngaphandle kwe- `.i18n/cache/.gitignore` ).

Uma isofthiwe yakho yokulawula inguqulo ingekho `git` sicela uyizibe ngokwalokhu kulungiselelwa.

## Ifayela Lokucushwa

`.i18n/conf.yml` Yifayela lokumisa lethuluzi lokuhumusha lomugqa `i18`

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

Efayelini lokucushwa, abangaphansi kwe- `fromTo`

`en` wulimi oluwumthombo, `zh ja ko de fr` ulimi okuqondiswe kulo lokuhumusha.

Ikhodi yolimi bheka [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Isibonelo, uma ufuna ukuhumushela isiShayina usiyise esiNgisini, bhala kabusha lo mugqa `zh: en`

Uma ufuna ukuhumushela kuzo zonke izilimi ezisekelwayo, sicela ushiye kungenalutho ngemva `:` Ngokwesibonelo

```
i18n:
  fromTo:
    en:
```

### Ziba Ifayela

Ngokuzenzakalelayo, wonke amafayela aqala `.yml` `.md`

Uma ufuna ukuziba amafayela athile futhi ungawahumushi (njengemibhalo engaqediwe), ungasebenzisa ukucushwa kwenkambu ye- `ignore`

`ignore` Isebenzisa i-syntax efana ne- `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Isibonelo, kufayela lokucushwa elingenhla `_* ` ukuthi amafayela aqala ngo- `_` ngeke ahunyushwe.

## Imithetho Yokuhumusha

### Abahleli Bokuhumusha Akufanele Bengeze Noma Basuse Imigqa

Ukuhumusha kuyahleleka. Shintsha umbhalo wasekuqaleni futhi uwuhumushe ngomshini futhi, ukuguqulwa okwenziwa mathupha ekuhumusheni ngeke kubhalwe phezu (uma lesi sigaba sombhalo wokuqala singashintshwanga).

Kodwa sicela uqaphele ukuthi imigqa yokuhumusha kanye nombhalo wokuqala kufanele uhambisane nowodwa. Okusho ukuthi, ungangezi noma ususe imigqa lapho uhlanganisa ukuhumusha. Uma kungenjalo, izodala ukudideka kunqolobane yokuhlela yokuhumusha.

Uma kukhona okungahambi kahle, sicela ubheke ku [-FAQ ukuthola izisombululo.](/i18/qa#H1)

### `Yaml`

Ithuluzi lomugqa womyalo lizothola wonke amafayela agcina ngokuthi `.yml`

* Qaphela ukuthi isijobelelo segama lefayela kufanele sibe `.yml` (hhayi `.yaml` ).

Ithuluzi lihumusha kuphela amanani esichazamazwi `.yml` , hhayi okhiye besichazamazwi.

Ngokwesibonelo `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

izohunyushwa ngokuthi `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Ukuhunyushwa kokuthi `YAML`

Ngokusekelwe `YAML` Ukuhumusha, ungakwazi kalula ukwakha izixazululo zamazwe ngamazwe zezilimi ezihlukahlukene zokuhlela.

## Ukusetshenziswa Okuthuthukile

### Uhla Lwemibhalo Olungaphansi Lokuhumusha

Inqobo nje uma udala `.i18n/conf.yml` (asikho isidingo sokuqala kusifanekiso sephrojekthi yedemo njalo), `i18` izosebenza kahle.

Ithuluzi lomugqa womyalo lizothola ukucushwa kwe- `.i18n/conf.yml`

Amaphrojekthi asebenzisa i [monorepo](//monorepo.tools) architecture angahlukanisa amafayela olimi abe ama-subdirectory.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Inkomba Yokufaka Ngokwezifiso

Izofakwa ku- `/usr/local/bin`

`/usr/local/bin` ingenayo imvume yokubhala izofakwa ku- `~/.bin` .

Setha okuguquguqukayo : `TO`

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
