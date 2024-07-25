# Ynstallearje en Brûke

## windows Earst Ynstallearje git bash

windows Systeem, [klik hjir om earst te downloaden en te ynstallearjen `git bash`](https://git-scm.com/download/win)

Run folgjende operaasjes yn `git bash`

## Ynstallearje

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurearje Oersetting Token

Besykje [i18n.site/token](//i18n.site/token) Klik om token te kopiearjen

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Meitsje `~/.config/i18n.site.yml` plak de kopieare ynhâld deryn, de ynhâld is as folget:

```
token: YOUR_API_TOKEN
```

Derneist [i18n.site/payBill](//i18n.site/payBill) jo in kredytkaart bine foar betelling (gjin opladen is nedich, de webside sil automatysk fergoedingen ôflûke neffens gebrûk, [sjoch de thússide foar prizen](/#price) ).

## Brûke

### Demo Projekt

Ferwize asjebleaft nei it [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) om de konfiguraasje fan oersetting te learen `i18`

Brûkers yn Sina kinne klone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Fier nei it klonen de map yn en `i18` om de oersetting te foltôgjen.

### Directory Struktuer

De sjabloanpakhúsmapstruktuer is as folget

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

De map `en` befettet de oersette demo-bestannen, dy't gewoan in foarbyld binne en kinne wurde wiske.

### Run Oersetting

Fier de map yn en `i18` om te oersetten.

### Foegje Bestannen Ta Oan It Repository

Neist oersetting sil it programma ek de folgjende bestannen generearje, foegje se asjebleaft ta oan it repository.

```
.i18n/hash
.i18n/cache/.gitignore
```

Under harren is de ynhâld : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Dit betsjut dat alle bestannen yn 'e `.i18n/cache/` negearje (útsein `.i18n/cache/.gitignore` ).

As jo ​​software foar ferzjekontrôle `git` is, negearje it dan neffens dizze konfiguraasje.

## Konfiguraasjetriem

`.i18n/conf.yml` It is it konfiguraasjetriem fan it `i18` line oerset ark

De ynhâld is as folget:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Boarnetaal &

Yn it konfiguraasjetriem binne de ûndergeskikten fan `fromTo`

`en` is de boarnetaal, `zh ja ko de fr` is de doeltaal fan oersetting.

Taalkoade sjoch [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

As jo ​​bygelyks Sineesk yn it Ingelsk oersette wolle, skriuw dan dizze rigel oer `zh: en`

As jo ​​​​wolle oersette nei alle stipe talen, lit dan leech nei `:` bygelyks

```
i18n:
  fromTo:
    en:
```

### Negearje Triem

Standert wurde alle bestannen dy't begjinne mei `.md` en `.yml` yn 'e boarnetaalmap oerset.

As jo ​​​​beskate bestannen negearje wolle en se net oersette (lykas ûnfoltôge konsepten), kinne jo `ignore` fjildkonfiguraasje brûke.

`ignore` Brûkt in syntaksis fergelykber mei `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Bygelyks, yn it boppesteande konfiguraasjetriem `_* ` dat triemmen dy't begjinne mei `_` net oerset wurde.

## Oerset Regels

### Oersetredakteuren Moatte Gjin Rigels Tafoegje of Wiskje

De oersetting is te bewurkjen. Feroarje de orizjinele tekst en masjine-oersette it nochris, de hânmjittige oanpassingen oan 'e oersetting wurde net oerskreaun (as dizze paragraaf fan 'e orizjinele tekst net feroare is).

Mar tink derom dat de rigels fan 'e oersetting en de oarspronklike tekst ien op ien moatte oerienkomme. Dat is, gjin rigels tafoegje of wiskje by it kompilearjen fan de oersetting. Oars sil it betizing yn 'e cache foar bewurking fan' e oersetting feroarsaakje.

As der wat mis giet, ferwize dan nei [de FAQ foar oplossings.](/i18/qa#H1)

### `Yaml`

It kommandorigelark sil alle bestannen fine dy't einigje mei `.yml`

* Tink derom dat it efterheaksel fan de triemnamme moat `.yml` (net `.yaml` ).

It ark fertaalt allinich de wurdboekwearden yn `.yml` net de wurdboekkaaien.

bygelyks `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

sil oerset wurde as `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

De oersetting fan `YAML` kin ek mei de hân wizige wurde (mar foegje gjin kaaien of rigels ta of wiskje yn 'e oersetting).

Op grûn fan `YAML` kinne jo maklik ynternasjonale oplossingen bouwe foar ferskate programmeartalen.

## Avansearre Gebrûk

### Oersetting Subdirectory

Salang't jo `.i18n/conf.yml` (net nedich om elke kear te begjinnen fan 'e demo-projektsjabloan), `i18` sil goed wurkje.

It kommandorigelark sil de `.i18n/conf.yml` -konfiguraasje fine yn alle submappen en it oersette.

Projekten dy't de [monorepo](//monorepo.tools) -arsjitektuer brûke kinne taalbestannen splitse yn submappen.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Oanpaste Ynstallaasjemap

It sil standert wurde ynstalleare op `/usr/local/bin`

`~/.bin` `/usr/local/bin`

Omjouwingsfariabelen ynstelle : kinne bygelyks de ynstallaasjemap definiearje `TO`

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
