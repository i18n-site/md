# Guruň We Ulanyň

## windows Ilki git bash Gurýar

windows , [göçürip almak we gurmak üçin şu ýere basyň `git bash`](https://git-scm.com/download/win)

Ondan soňky amallary işlediň `git bash`

## Gurnama

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Terjime Belligini Sazlaň

Tokeni göçürmek üçin basyň [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Göçürilen mazmuny dörediň `~/.config/i18n.site.yml` Mazmuny aşakdaky ýaly:

```
token: YOUR_API_TOKEN
```

Mundan başga-da, töleg üçin kredit kartoçkasyny [i18n.site/payBill](//i18n.site/payBill) (hiç hili töleg talap edilmeýär, web sahypasy ulanylyşyna görä tölegleri awtomatiki usulda aýyrar, [bahalaryň baş sahypasyna serediň](/#price) ).

## Ulanmak

### Demo Taslamasy

`i18` konfigurasiýasyny öwrenmek üçin demo taslamasyna ýüz tutmagyňyzy haýyş edýäris [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Hytaýda ulanyjylar klonlaşdyryp bilerler [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Klonirläniňizden soň, katalogy giriziň we terjimesini tamamlaň `i18`

### Katalog Gurluşy

Şablon ammar katalogynyň gurluşy aşakdaky ýaly

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` katalogynda diňe mysal bolup, pozulyp bilinýän terjime edilen demo faýllary bar!

### Terjimäni Işlediň

Katalogy giriziň we terjime ediň `i18`

### Ammara Faýl Goşuň

Terjime bilen birlikde, programma aşakdaky faýllary hem döreder, olary ammarda goşmagyňyzy haýyş edýäris.

```
.i18n/hash
.i18n/cache/.gitignore
```

Olaryň arasynda mazmun aşakdaky : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Bu, katalogdaky ähli faýllary äsgermezlik etmegi aňladýar ( `.i18n/cache/.gitignore` başga) `.i18n/cache/`

Wersiýa gözegçilik programma üpjünçiligiňiz ýok bolsa `git` bu konfigurasiýa laýyklykda üns bermäň!

## Sazlama Faýly

Bu `i18` setir terjime guralynyň konfigurasiýa faýly `.i18n/conf.yml`

Mazmuny aşakdaky ýaly:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Çeşme Dili Terjime Dili &

Sazlama faýlynda, gol astyndakylar `fromTo`

Çeşme dili, `zh ja ko de fr` terjime etmegiň maksatly dili `en`

Dil kody [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Mysal üçin, hytaý dilini iňlis diline terjime etmek isleseňiz, bu setiri täzeden ýazyň `zh: en`

Goldanýan dilleriň hemmesine terjime etmek isleseňiz, boş goýuň `:` meselem

```
i18n:
  fromTo:
    en:
```

### Faýly Hasaba Alma

Düzgüne görä, başlangyç dil bukjasyndaky we `.yml` bilen başlaýan ähli faýllar terjime ediler `.md`

Käbir faýllary äsgermezlik etmek we olary terjime etmezlik isleseňiz (gutarylmadyk garalamalar ýaly), meýdan meýdan konfigurasiýasyny ulanyp bilersiňiz `ignore`

`.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax) sintaksis ulanýar `ignore`

Mysal üçin, ýokardaky konfigurasiýa faýlynda `_` bilen başlaýan faýllaryň terjime edilmejekdigini aňladýar `_* `

## Terjime Düzgünleri

### Terjime Redaktorlary Setir Goşmaly Ýa-Da Pozmaly Däldir

Terjime redaktirläp bolýar. Asyl teksti üýtgediň we ony täzeden terjime ediň, terjime bilen elde üýtgetmeler ýazylmaz (asyl tekstiň bu abzasy üýtgedilmedik bolsa).

Theöne terjime setirleriniň we asyl tekstiň birine laýyk gelmelidigini ýadyňyzdan çykarmaň. .Agny, terjime düzülende setir goşmaň ýa-da pozmaň. Otherwiseogsam, terjime redaktirleme keşinde bulaşyklyga sebäp bolar.

Bir zat ýalňyş bolsa, [çözgütler üçin soraglara ýüz tutmagyňyzy haýyş edýäris.](/i18/qa#H1)

### Terjime Et `YAML`

Buýruk setiri guraly, çeşme dili faýl katalogynda gutarýan ähli faýllary tapar we terjime eder `.yml`

* Faýlyň adynyň goşulmasy bolmalydyr ( `.yaml` däl) `.yml`

Gural diňe sözlük düwmelerini däl-de, sözlük bahalaryny terjime edýär `.yml`

mysal üçin `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

ýaly terjime ediler `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` hem el bilen üýtgedilip bilner (ýöne terjime düwmelerini ýa-da setirlerini goşmaň).

`YAML` esasynda, dürli programma dilleri üçin halkara çözgütleri aňsatlyk bilen gurup bilersiňiz.

## Giňişleýin Ulanylyş

### Terjime Bölümi

`.i18n/conf.yml` (her gezek demo taslama şablonyndan başlamagyň zerurlygy ýok), `i18` gowy işlär.

Buýruk setiriniň gurallary ähli kiçi bölümlerde konfigurasiýany tapar we terjime eder `.i18n/conf.yml`

[monorepo](//monorepo.tools) ulanýan taslamalar dil faýllaryny kiçi bölümlere bölüp biler!

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Omörite Gurnama Katalogy

Dymmaklyk boýunça gurlar `/usr/local/bin`

Writeazmak üçin rugsady ýok bolsa, `~/.bin` gurlar `/usr/local/bin`

Daşky gurşaw üýtgeýjilerini düzüň `TO` mysal üçin gurnama katalogyny kesgitläp bilersiňiz :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
