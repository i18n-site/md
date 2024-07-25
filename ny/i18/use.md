# Kwabasi Ndi Ntchito

## windows Choyamba Kukhazikitsa git bash

windows , chonde [dinani apa kuti mutsitse ndikuyika kaye `git bash`](https://git-scm.com/download/win)

Chitani ntchito zotsatila mu `git bash`

## Ikani

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konzani Chizindikiro Chomasulira

Pitani ku [i18n.site/token](//i18n.site/token) Dinani kuti mukopere chizindikiro

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Pangani `~/.config/i18n.site.yml` ikani zomwe zakopedwa mmenemo, zomwe zilimo ndi izi:

```
token: YOUR_API_TOKEN
```

Kuphatikiza apo, muyenera [i18n.site/payBill](//i18n.site/payBill) kirediti kadi kuti mulipire (palibe kubwezanso komwe kumafunikira, tsamba lawebusayiti lidzangochotsa zolipiritsa malinga ndikugwiritsa ntchito, [onani tsamba loyamba lamitengo](/#price) ).

## Ntchito

### Ntchito Yowonetsera

Chonde onani pulojekiti yowonetsera [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) muphunzire kasinthidwe kamasulidwe `i18`

Ogwiritsa ntchito ku China akhoza kutengera [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Mukamaliza kupanga, lowetsani chikwatu ndikuthamanga `i18` mumalize kumasulira.

### Kapangidwe Ka Kalozera

Mapangidwe a template warehouse directory ali motere

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Buku la `en`

### Thamangani Kumasulira

Lowetsani chikwatu ndikuthamanga `i18` mumasulire.

### Onjezani Mafayilo Kunkhokwe

Kuphatikiza pa kumasulira, pulogalamuyi ipanganso mafayilo otsatirawa, chonde onjezani kunkhokwe.

```
.i18n/hash
.i18n/cache/.gitignore
```

: mwa izo, zomwe zili mu `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Izi zikutanthauza kuti musanyalanyaze mafayilo onse mu `.i18n/cache/` (kupatula `.i18n/cache/.gitignore` ).

Ngati pulogalamu yanu yowongolera siili `git` chonde inyalanyazani molingana ndi kasinthidwe kameneka.

## Fayilo Yosintha

`.i18n/conf.yml` `i18`

Zomwe zilimo ndi izi:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Chinenero Chomasulira &

Mu fayilo yosinthika, omvera a `fromTo`

`en` ndiye chilankhulo choyambira, `zh ja ko de fr` ndiye chilankhulo chomwe amamasulira.

Chilankhulo kodi [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Mwachitsanzo, ngati mukufuna kumasulira Chitchaina kupita ku Chingerezi, lembaninso mzerewu `zh: en`

Ngati mukufuna kumasulira kuzilankhulo zonse zothandizidwa, chonde siyani kanthu pambuyo `:` Mwachitsanzo

```
i18n:
  fromTo:
    en:
```

### Nyalanyazani Fayilo

Mwachikhazikitso, `.yml` onse kuyambira ndi `.md`

Ngati mukufuna kunyalanyaza mafayilo ena ndikusawamasulira (monga zolemba zosamalizidwa), mutha kugwiritsa ntchito `ignore`

`ignore` Amagwiritsa ntchito mawu ofanana ndi `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Mwachitsanzo, mu fayilo yosinthidwa pamwambapa `_* ` kuti mafayilo oyambira ndi `_` sadzamasuliridwa.

## Malamulo Omasulira

### Omasulira Sayenera Kuwonjezera Kapena Kuchotsa Mizere

Zomasulirazo ndi zosinthidwa. Sinthani mawu oyambilira ndikumasuliranso pamakina, zosintha pamanja zomasulira sizidzalembedwanso (ngati ndime iyi yamawu oyamba sinasinthidwe).

Koma chonde dziwani kuti mizere yomasulira ndi mawu oyamba ayenera kugwirizana ndi umodzi ndi umodzi. Ndiko kuti, musawonjezere kapena kuchotsa mizere polemba zomasulira. Kupanda kutero, zitha kuyambitsa chisokonezo mu kachesi yosintha yomasulira.

Ngati china chake sichikuyenda bwino, chonde onani [FAQ kuti mupeze mayankho.](/i18/qa#H1)

### Masulira `YAML`

Chida cha mzere wolamula chidzapeza mafayilo onse omwe amathera ndi `.yml`

* Dziwani kuti suffix ya dzina lafayilo iyenera kukhala `.yml` (osati `.yaml` ).

Chidachi chimangomasulira mtanthauzira mawu mu `.yml` osati makiyi a mtanthauzira mawu.

Mwachitsanzo `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

adzamasuliridwa ngati `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Kumasulira kwa `YAML`

Kutengera ndi `YAML`

## Kugwiritsa Ntchito Mwaukadaulo

### Gulu Laling'ono Lomasulira

`i18` ngati mupanga `.i18n/conf.yml`

Chida cha mzere wolamula chidzapeza kasinthidwe ka `.i18n/conf.yml`

Ma projekiti omwe amagwiritsa ntchito kamangidwe ka [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Chikwatu Chokhazikitsa Mwamakonda

Idzakhazikitsidwa ku `/usr/local/bin`

`~/.bin` `/usr/local/bin`

Khazikitsani `TO` za chilengedwe Mutha kufotokozera chikwatu chokhazikitsa, mwachitsanzo :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
