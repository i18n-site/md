# Įdiegti Ir Naudoti

## „Windows“ Pirmiausia Įdiegia „Git Bash“.

windows , [pirmiausia spustelėkite čia, kad atsisiųstumėte ir įdiegtumėte `git bash`](https://git-scm.com/download/win)

Vykdykite kitas operacijas `git bash`

## Diegti

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigūruoti Vertimo Prieigos Raktą

Aplankykite [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Sukurkite `~/.config/i18n.site.yml` įklijuokite į jį nukopijuotą turinį, turinys yra toks:

```
token: YOUR_API_TOKEN
```

Be to, norint sumokėti, reikia [i18n.site/payBill](//i18n.site/payBill) kredito kortelę (nereikia papildyti, svetainė automatiškai nuskaitys mokesčius pagal naudojimą, [kainas žr. pagrindiniame puslapyje](/#price) ).

## Naudoti

### Demo Projektas

Norėdami sužinoti vertimo konfigūraciją `i18` žr. demonstracinį projektą [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Vartotojai Kinijoje gali klonuoti [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Po klonavimo įeikite į katalogą ir paleiskite `i18`

### Katalogo Struktūra

Šablonų sandėlio katalogo struktūra yra tokia

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` yra išversti demonstraciniai failai, kurie yra tik pavyzdys ir gali būti ištrinti.

### Vykdyti Vertimą

Įveskite katalogą ir paleiskite, kad išverstumėte `i18`

### Pridėkite Failus Į Saugyklą

Be vertimo, programa taip pat sugeneruos šiuos failus, įtraukite juos į saugyklą.

```
.i18n/hash
.i18n/cache/.gitignore
```

Tarp jų turinys yra : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Tai reiškia, kad nepaisykite visų failų `.i18n/cache/` (išskyrus `.i18n/cache/.gitignore` ).

Jei jūsų versijos valdymo programinė įranga nėra `git` nepaisykite jos pagal šią konfigūraciją.

## Konfigūracijos Failas

Tai `.i18n/conf.yml` `i18` eilutės vertimo įrankio konfigūracijos failas

Turinys yra toks:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Originalo & Vertimo Kalba

Konfigūracijos faile pavaldiniai `fromTo`

`en` yra šaltinio kalba, `zh ja ko de fr` yra vertimo kalba.

Kalbos kodas žr [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Pavyzdžiui, jei norite išversti kinų kalbą į anglų kalbą, perrašykite šią eilutę `zh: en`

Jei norite išversti į visas palaikomas kalbas, palikite lauką tuščią po `:` pavyzdžiui

```
i18n:
  fromTo:
    en:
```

### Ignoruoti Failą

Pagal numatytuosius nustatymus visi failai, prasidedantys `.md` ir `.yml` šaltinio kalbos kataloge, bus išversti.

Jei norite nepaisyti tam tikrų failų ir jų neišversti (pvz., nebaigtų juodraščių), galite naudoti `ignore` konfigūraciją.

Naudoja sintaksę `ignore` panašią į `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Pavyzdžiui, aukščiau pateiktame konfigūracijos faile `_* ` , kad failai, prasidedantys `_` , nebus išversti.

## Vertimo Taisyklės

### Vertimo Redaktoriai Neturėtų Pridėti Ar Ištrinti Eilučių

Vertimas yra redaguojamas. Pakeiskite originalų tekstą ir dar kartą išverskite jį mašininiu būdu, rankiniai vertimo pakeitimai nebus perrašyti (jei ši originalaus teksto pastraipa nebuvo pakeista).

Tačiau atkreipkite dėmesį, kad vertimo ir originalaus teksto eilutės turi atitikti vieną. Tai yra, kurdami vertimą nepridėkite ir neištrinkite eilučių. Priešingu atveju tai sukels painiavą vertimo redagavimo talpykloje.

Jei kas nors negerai, [sprendimų ieškokite DUK.](/i18/qa#H1)

### `Yaml`

Komandinės eilutės įrankis suras visus failus, kurie baigiasi `.yml` šaltinio kalbos failų kataloge ir juos išvers.

* Atminkite `.yaml` kad failo pavadinimo priesaga turi būti `.yml`

Įrankis verčia tik žodyno reikšmes `.yml` o ne žodyno raktus.

pavyzdžiui `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

bus išverstas kaip `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML`

Remdamiesi `YAML` , galite lengvai kurti tarptautinius sprendimus įvairioms programavimo kalboms.

## Išplėstinis Naudojimas

### Vertimo Pakatalogis

Kol `.i18n/conf.yml` (nereikia kiekvieną kartą pradėti nuo demonstracinio projekto šablono), `i18` veiks gerai.

Komandinės eilutės įrankis suras `.i18n/conf.yml` visuose pakatalogiuose ir išvers ją.

Projektai, kuriuose naudojama [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Pasirinktinis Diegimo Katalogas

Pagal numatytuosius nustatymus jis bus įdiegtas `/usr/local/bin`

`/usr/local/bin` neturi rašymo leidimo, jis bus įdiegtas į `~/.bin` .

Nustatyti aplinkos `TO` Galite apibrėžti diegimo katalogą, pavyzdžiui :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
