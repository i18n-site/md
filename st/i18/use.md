# Kenya Le Ho Sebelisa

## windows E Qala Ho Kenya git bash

windows , ka kopo [tlanya mona ho jarolla le ho kenya pele `git bash`](https://git-scm.com/download/win)

Etsa ts'ebetso e latelang ho `git bash`

## Kenya

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Lokisa Tokene Ea Phetolelo

Etela [i18n.site/token](//i18n.site/token) Tobetsa ho kopitsa letšoao

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Theha `~/.config/i18n.site.yml` beha litaba tse kopilitsoeng ho eona, litaba li tjena:

```
token: YOUR_API_TOKEN
```

Ho phaella moo, o hloka [i18n.site/payBill](//i18n.site/payBill) tlama karete ea mokitlane bakeng sa tefo (ha ho na recharge e hlokahalang, sebaka sa marang-rang se tla ntša litefiso ho latela tšebeliso, [sheba leqephe la lehae bakeng sa litheko](/#price) ).

## Tshebediso

### Morero Oa Demo

Ka kopo sheba projeke ea [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) ho ithuta tlhophiso ea phetolelo `i18`

Basebelisi ba Chaena ba ka kopanya [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Ka mor'a ho kopanya, kenya bukana 'me u tsamaise `i18`

### Sebopeho Sa Directory

Sebopeho sa buka ea polokelo ea template se tjena

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Bukana ea `en` e na le lifaele tsa demo tse fetoletsoeng, tseo e leng mohlala feela 'me li ka hlakoloa.

### Etsa Phetolelo

Kenya bukana 'me u tsamaise `i18`

### Kenya Lifaele Sebakeng Sa Polokelo

Ntle le phetolelo, lenaneo le tla hlahisa lifaele tse latelang, ka kopo li kenye sebakeng sa polokelo.

```
.i18n/hash
.i18n/cache/.gitignore
```

Har'a tsona, litaba : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Sena `.i18n/cache/.gitignore` bolela ho hlokomoloha lifaele tsohle tse bukeng ea `.i18n/cache/`

Haeba software ea hau ea taolo e se eona `git` ka kopo e hlokomolohe ho latela tlhophiso ena.

## Faele Ea Tlhophiso

`.i18n/conf.yml` Ke faele ea tlhophiso ea sesebelisoa sa phetolelo sa `i18`

Litaba ke tse latelang:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Puo Ea Mohloli &

Ho faele ea tlhophiso, ba ka tlase ho `fromTo`

`en` ke puo ea mohloli, `zh ja ko de fr` ke puo eo ho fetoleloang ho eona.

Khoutu ea puo bona [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Mohlala, haeba u batla ho fetolela Sechaena ho Sekhooa, ngola mola ona hape `zh: en`

Haeba u batla ho fetolela lipuong tsohle tse tšehetsoeng, ka kopo tlohela letho ka mor'a `:` ka mohlala

```
i18n:
  fromTo:
    en:
```

### Hlokomoloha Faele

Ka mokhoa o ikhethileng, lifaele tsohle tse qalang ka `.md` le `.yml` bukeng ea puo ea mohloli li tla fetoleloa.

Haeba u batla ho hlokomoloha lifaele tse itseng 'me u sa li fetolele (joalo ka lingoloa tse sa phethoang), u ka sebelisa tlhophiso ea sebaka sa `ignore`

`ignore` E sebelisa syntax e ts'oanang le `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Mohlala, faeleng ea tlhophiso e kaholimo `_* ` bolela hore lifaele tse qalang ka `_` li ke ke tsa fetoleloa.

## Melao Ea Phetolelo

### Bahlophisi Ba Liphetolelo Ha Baa Lokela Ho Kenya Kapa Ho Hlakola Mela

Phetolelo e ka fetoloa. Fetosa mongolo oa mantlha, 'me u o fetolele ka mochini hape, liphetoho tse fetoletsoeng ka letsoho li ke ke tsa hlakoloa (haeba serapa sena sa mongolo oa mantlha se sa fetoloa).

Empa ka kopo hlokomela hore mela ea phetolelo le mongolo oa pele li tlameha ho lumellana le o le mong. Ke hore, u se ke ua eketsa kapa ua hlakola mela ha u hlophisa phetolelo. Ho seng joalo, e tla baka pherekano ho cache ea ho fetola phetolelo.

Haeba ho na le ho hong ho sa tsamaeeng hantle, ka kopo sheba [FAQ bakeng sa tharollo.](/i18/qa#H1)

### `Yaml`

Sesebelisoa sa mola oa taelo se tla fumana lifaele tsohle tse qetellang ka `.yml`

* Hlokomela hore suffix ea lebitso la faele e tlameha ho ba `.yml` (eseng `.yaml` ).

Sesebelisoa se fetolela feela boleng ba dikishinari ho `.yml` eseng linotlolo tsa dikishinari.

ka mohlala `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

e tla fetoleloa e le `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Phetolelo ea `YAML`

Ho ipapisitsoe le `YAML`

## Tšebeliso E Tsoetseng Pele

### Bukana Ea Phetolelo

Hafeela u ntse u theha `.i18n/conf.yml` (ha ho hlokahale hore u qale ho tloha template ea morero nako le nako), `i18` e tla sebetsa hantle.

Sesebelisoa sa mola oa taelo se tla fumana `.i18n/conf.yml` ho li-subdirectories tsohle ebe oa e fetolela.

Merero e sebelisang boqapi ba [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Sengoliloeng Sa Ho Kenya

E tla kenngoa ho `/usr/local/bin`

Haeba `/usr/local/bin` ha e na tumello ea ho ngola e tla kenngoa ho `~/.bin` .

Seta mefuta e fapaneng ea tikoloho `TO` O ka hlalosa buka ea ho kenya, mohlala :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
