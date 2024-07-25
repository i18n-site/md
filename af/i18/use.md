# Installeer en Gebruik

## windows Installeer Eers git bash

windows Stelsel, [klik asseblief hier om eers af te laai en te installeer `git bash`](https://git-scm.com/download/win)

Voer daaropvolgende bewerkings in `git bash`

## Installeer

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Stel Vertalingstoken Op

Besoek [i18n.site/token](//i18n.site/token) Klik om teken te kopieer

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Skep `~/.config/i18n.site.yml` plak die gekopieerde inhoud daarin, die inhoud is soos volg:

```
token: YOUR_API_TOKEN
```

Daarbenewens moet jy 'n kredietkaart [i18n.site/payBill](//i18n.site/payBill) vir betaling (geen herlaai word vereis nie, die webwerf sal outomaties fooie aftrek volgens gebruik, [sien die tuisblad vir pryse](/#price) ).

## Gebruik

### Demo Projek

Verwys asseblief na die demo- [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) om die konfigurasie van vertaling te leer `i18`

Gebruikers in China kan kloon [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Na kloning, voer die gids in en `i18` om die vertaling te voltooi.

### Gidsstruktuur

Die sjabloon pakhuisgidsstruktuur is soos volg

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Die `en` -gids bevat die vertaalde demo-lêers, wat slegs 'n voorbeeld is en uitgevee kan word.

### Voer Vertaling Uit

Voer die gids in en `i18` om te vertaal.

### Voeg Lêers by Die Bewaarplek

Benewens vertaling, sal die program ook die volgende lêers genereer, voeg dit asseblief by die bewaarplek.

```
.i18n/hash
.i18n/cache/.gitignore
```

Onder hulle is die inhoud : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Dit beteken dat alle lêers in die `.i18n/cache/` -gids ignoreer (behalwe `.i18n/cache/.gitignore` ).

As jou weergawebeheersagteware nie `git` is nie, ignoreer dit asseblief volgens hierdie konfigurasie.

## Konfigurasie Lêer

`.i18n/conf.yml` Dit is die konfigurasielêer van die `i18` line-vertaalinstrument

Die inhoud is soos volg:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Brontaal &

In die konfigurasielêer, die ondergeskiktes van `fromTo`

`en` is die brontaal, `zh ja ko de fr` is die doeltaal van vertaling.

Taalkode sien [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Byvoorbeeld, as jy Chinees in Engels wil vertaal, herskryf hierdie reël `zh: en`

As jy na alle ondersteunde tale wil vertaal, laat asseblief leeg na `:` byvoorbeeld

```
i18n:
  fromTo:
    en:
```

### Ignoreer Lêer

By verstek sal alle lêers wat begin met `.md` en `.yml` in die brontaalgids vertaal word.

As jy sekere lêers wil ignoreer en nie vertaal nie (soos onvoltooide konsepte), kan jy die `ignore` gebruik.

`ignore` Gebruik 'n sintaksis soortgelyk aan `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Byvoorbeeld, in die bogenoemde konfigurasielêer `_* ` dat lêers wat met `_` begin, nie vertaal sal word nie.

## Vertaalreëls

### Vertaalredigeerders Moet Nie Reëls Byvoeg of Uitvee Nie

Die vertaling is redigeerbaar. Verander die oorspronklike teks en masjienvertaal dit weer, die handmatige wysigings aan die vertaling sal nie oorskryf word nie (indien hierdie paragraaf van die oorspronklike teks nie gewysig is nie).

Maar let asseblief daarop dat die reëls van die vertaling en die oorspronklike teks een tot een moet ooreenstem. Dit wil sê, moenie reëls byvoeg of skrap wanneer die vertaling saamgestel word nie. Andersins sal dit verwarring in die vertaalredigeerkas veroorsaak.

As iets verkeerd loop, verwys asseblief na [die FAQ vir oplossings.](/i18/qa#H1)

### `YAML` Vertaal

Die opdragreëlnutsding sal alle lêers wat eindig met `.yml` in die brontaallêergids vind en dit vertaal.

* Let daarop dat die lêernaam agtervoegsel moet `.yml` (nie `.yaml` ).

Die instrument vertaal slegs die woordeboekwaardes in `.yml` nie die woordeboeksleutels nie.

byvoorbeeld `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

sal vertaal word as `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Die vertaling van `YAML` kan ook met die hand gewysig word (maar moenie sleutels of reëls in die vertaling byvoeg of uitvee nie).

Op grond van `YAML` , kan jy maklik internasionale oplossings vir verskeie programmeertale bou.

## Gevorderde Gebruik

### Vertaling Subgids

Solank as wat jy `.i18n/conf.yml` (nie nodig om elke keer van demo-projek sjabloon te begin nie), sal `i18` goed werk.

Die opdragreëlnutsding sal die `.i18n/conf.yml` -konfigurasie in alle subgidse vind en dit vertaal.

Projekte wat die [monorepo](//monorepo.tools) -argitektuur gebruik, kan taallêers in subgidse verdeel.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Pasgemaakte Installasiegids

Dit sal by verstek geïnstalleer `/usr/local/bin` .

As `/usr/local/bin` nie skryftoestemming het nie, sal dit op `~/.bin` geïnstalleer word.

Stel omgewingsveranderlikes : kan die installasiegids definieer, byvoorbeeld `TO`

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
