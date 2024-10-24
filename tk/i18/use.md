# Guruň We Ulanyň

## windows Ilki git bash Gurýar

windows , [ilki `git bash` göçürip almak we gurmak üçin şu ýere basyň](https://git-scm.com/download/win) !

Ondan soňky amallary `git bash` -da işlediň.

## Gurnama

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Terjime Belligini Sazlaň

Tokeni göçürmek üçin basyň [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` dörediň, göçürilen mazmuny oňa goýuň, mazmuny aşakdaky ýaly:

```
token: YOUR_API_TOKEN
```

[i18n.site/payBill](//i18n.site/payBill) , töleg üçin kredit kartoçkasyny baglamaly (hiç hili zarýad berilmeli däl, web sahypasy ulanylyşyna görä tölegleri awtomatiki usulda aýyrar, [bahalaryň baş sahypasyna serediň](/#price) ).

## Ulanmak

### Demo Taslamasy

`i18` terjimäniň konfigurasiýasyny öwrenmek üçin demo taslamasyna ýüz tutmagyňyzy haýyş edýäris [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Hytaýda ulanyjylar klonlaşdyryp bilerler [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Klonlaşdyrylandan soň, katalogy giriziň we terjimesini tamamlamak üçin `i18` işlediň.

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

`en` bukjadaky terjime edilen demo faýllary diňe bir mysal we pozup bolýar.

### Terjimäni Işlediň

Katalogy giriziň we terjime etmek üçin `i18` işlediň.

Terjimeden başga-da, programma `.i18n/data` bukjany hem döreder, ony ammarda goşmagyňyzy haýyş edýäris.

Täze faýly terjime edensoň, bu katalogda täze maglumat faýly dörediler. `git add . ` goşmagy ýatdan çykarmaň.

## Sazlama Faýly

`.i18n/conf.yml` `i18` buýruk setiriniň terjime guralynyň konfigurasiýa faýly

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

Sazlama faýlynda `fromTo` -nyň golasty:

`en` çeşme dili, `zh ja ko de fr` terjimeiň maksatly dili.

Dil kody [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Mysal üçin, hytaý dilini iňlis diline terjime etmek isleseňiz, `zh: en` setiri täzeden ýazyň.

Goldanýan ähli dillere terjime etmek isleseňiz, `:` soň boş goýuň. meselem

```
i18n:
  fromTo:
    en:
```

Dürli kiçi faýllar üçin dürli `fromTo` düzülip bilner / Görkeziş aşakdaky ýaly ýazylýar :

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

Bu konfigurasiýa tablisasynda `blog` terjime üçin katalog dili `zh` , `blog/your_file_name.md` katalog terjimesiniň deslapky dili `ja` .

### Faýly Hasaba Alma

Düzgüne görä, çeşme dil katalogynda `.md` we `.yml` bilen başlaýan ähli faýllar terjime ediler.

Käbir faýllary äsgermezlik edip, terjime etmezlik isleseňiz (gutarylmadyk garalamalar ýaly), `ignore` meýdan konfigurasiýasyny ulanyp bilersiňiz.

`ignore` `.gitignore` faýl ýaly sintaksis ulanýar [globset](https://docs.rs/globset/latest/globset/#syntax)

Mysal üçin, ýokardaky konfigurasiýa faýlyndaky `_* ` `_` den başlaýan faýllaryň terjime edilmejekdigini aňladýar.

## Terjime Düzgünleri

### Terjime Redaktorlary Setir Goşmaly Ýa-Da Pozmaly Däldir

Terjime redaktirläp bolýar. Asyl teksti üýtgediň we ony täzeden terjime ediň, terjime bilen elde üýtgetmeler ýazylmaz (asyl tekstiň bu abzasy üýtgedilmedik bolsa).

> [!WARN]
> Terjimäniň setirleri we asyl tekst biri bilen gabat gelmelidir. .Agny, terjime düzülende setir goşmaň ýa-da pozmaň. Otherwiseogsam, terjime redaktirleme keşinde bulaşyklyga sebäp bolar.

Bir zat ýalňyş bolsa, [çözgütler üçin soraglara ýüz tutmagyňyzy haýyş edýäris.](/i18/qa#H1)

### `YAML` Terjime

Buýruk setiri guraly deslapky dil faýl katalogynda `.yml` bilen gutarýan ähli faýllary tapar we terjime eder.

* Faýlyň adynyň goşulmasy `.yml` bolmaly ( `.yaml` däl) bolmaly.

Gural diňe sözlük düwmelerini däl-de, sözlük bahalaryny `.yml` -da terjime edýär.

Mysal üçin `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` hökmünde terjime ediler

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` -yň terjimesini hem el bilen üýtgedip bolýar (ýöne terjimede düwmeleri ýa-da setirleri goşmaň ýa-da pozmaň).

`YAML` terjime esasynda dürli programmirleme dilleri üçin halkara çözgütleri aňsatlyk bilen gurup bilersiňiz.

## Giňişleýin Ulanylyş

### Terjime Bölümi

`.i18n/conf.yml` döredilençä (her gezek demo taslama şablonyndan başlamagyň zerurlygy ýok), `i18` gowy işlär.

Buýruk setiri guraly ähli bölümlerde `.i18n/conf.yml` konfigurasiýa tapar we terjime eder.

[monorepo](//monorepo.tools) ulanýan taslamalar dil faýllaryny kiçi bölümlere bölüp biler!

![](https://p.3ti.site/1719910016.avif)

### Omörite Gurnama Katalogy

Dymmaklyk boýunça `/usr/local/bin` -a gurlar.

`/usr/local/bin` ýazmak rugsady ýok bolsa, `~/.bin` -e gurlar.

Daşky gurşaw üýtgeýjisini `TO` gurmak, mysal üçin gurnama katalogyny kesgitläp biler :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```