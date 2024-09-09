# Ynstallearje en Brûke

## windows Earst Ynstallearje git bash

windows Systeem, [klikje hjir om earst `git bash` te downloaden en te ynstallearjen](https://git-scm.com/download/win) .

Laad folgjende operaasjes yn `git bash` .

## Ynstallearje

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurearje Oersetting Token

Besykje [i18n.site/token](//i18n.site/token) Klik om token te kopiearjen

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Meitsje `~/.config/i18n.site.yml` , plak de kopieare ynhâld deryn, de ynhâld is as folget:

```
token: YOUR_API_TOKEN
```

Derneist [i18n.site/payBill](//i18n.site/payBill) jo in kredytkaart bine foar betelling (gjin opladen is nedich, de webside sil automatysk fergoedingen ôflûke neffens gebrûk, [sjoch de thússide foar prizen](/#price) ).

## Gebrûk

### Demo Projekt

Ferwize asjebleaft nei it [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) om de konfiguraasje fan `i18` oersetting te learen.

Brûkers yn Sina kinne klone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Nei it klonen, fier de map yn en rinne `i18` om de oersetting te foltôgjen.

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

De oersette demo-bestannen yn 'e `en` map binne gewoan in foarbyld en kinne wiske wurde.

### Run Oersetting

Fier de map yn en fier `i18` om te oersetten.

Neist de oersetting sil it programma ek de map `.i18n/data` generearje, foegje it asjebleaft ta oan it repository.

Nei it oersetten fan it nije bestân sil in nije gegevensbestân yn dizze map oanmakke wurde Unthâld om `git add .` taheakje te kinnen.

## Konfiguraasjetriem

`.i18n/conf.yml` is it konfiguraasjetriem fan it `i18` kommandorigel-oersetark

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

Yn it konfiguraasjetriem, de ûndergeskikte fan `fromTo` :

`en` is de boarnetaal, `zh ja ko de fr` is de doeltaal fan de oersetting.

Taalkoade sjoch [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

As jo bygelyks Sineesk yn it Ingelsk oersette wolle, skriuw dizze rigel `zh: en` oer.

As jo wolle oersette nei alle stipe talen, lit dan asjebleaft leech nei `:` . bygelyks

```
i18n:
  fromTo:
    en:
```

: kinne ferskillende `fromTo` konfigurearje foar ferskate submappen /

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

Yn dizze konfiguraasjetabel is de boarnetaal fan katalogus `blog` -oersetting `zh` , en de boarnetaal fan `blog/your_file_name.md` oersetting is `ja` .

### Negearje Triem

Standert wurde alle bestannen dy't begjinne mei `.md` en `.yml` yn 'e boarnetaalmap oerset.

As jo beskate bestannen negearje wolle en se net oersette (lykas ûnfoltôge ûntwerpen), kinne jo it ynstelle mei it `ignore` fjild.

`ignore` brûkt deselde [globset](https://docs.rs/globset/latest/globset/#syntax) as it `.gitignore` bestân.

Bygelyks, `_* ` yn it boppesteande konfiguraasjetriem betsjut dat triemmen dy't begjinne mei `_` net oerset wurde.

## Oerset Regels

### Oersetredakteuren Moatte Gjin Rigels Tafoegje of Wiskje

De oersetting is te bewurkjen. Feroarje de orizjinele tekst en masjine-oersette it nochris, de hânmjittige oanpassingen oan 'e oersetting wurde net oerskreaun (as dizze paragraaf fan 'e orizjinele tekst net feroare is).

Mar tink derom dat de rigels fan 'e oersetting en de oarspronklike tekst ien op ien moatte oerienkomme. Dat is, gjin rigels tafoegje of wiskje by it kompilearjen fan de oersetting. Oars sil it betizing yn 'e cache foar bewurking fan' e oersetting feroarsaakje.

As der wat mis giet, ferwize dan nei [de FAQ foar oplossings.](/i18/qa#H1)

### `YAML` Oersettings

It kommandorigelark sil alle bestannen fine dy't einigje mei `.yml` yn 'e triemtafel fan' e boarnetaal en se oersette.

* Tink derom dat it efterheaksel fan de triemnamme `.yml` wêze moat (net `.yaml` ).

It ark fertaalt allinich de wurdboekwearden yn `.yml` , net de wurdboekkaaien.

Bygelyks `i18n/en/i18n.yml`

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

Op grûn fan `YAML` oersetting kinne jo maklik ynternasjonale oplossingen bouwe foar ferskate programmeartalen.

## Avansearre Gebrûk

### Oersetting Subdirectory

Sa lang as `.i18n/conf.yml` wurdt oanmakke (net nedich om te begjinnen út demo projekt sjabloan eltse kear), sil `i18` wurkje goed.

It kommandorigelark sil `.i18n/conf.yml` konfiguraasjes fine yn alle submappen en se oersette.

Projekten dy't de [monorepo](//monorepo.tools) -arsjitektuer brûke kinne taalbestannen splitse yn submappen.

![](https://p.3ti.site/1719910016.avif)

### Oanpaste Ynstallaasjemap

It sil standert wurde ynstalleare op `/usr/local/bin` .

As `/usr/local/bin` gjin skriuwtastimming hat, sil it ynstalleare wurde op `~/.bin` .

It ynstellen fan omjouwingsfariabele `TO` kin de ynstallaasjemap definiearje, bygelyks :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```