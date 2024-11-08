# Įdiegti Ir Naudoti

## „Windows“ Pirmiausia Įdiegia „Git Bash“.

windows , [spustelėkite čia, kad pirmiausia atsisiųstumėte ir įdiegtumėte `git bash`](https://git-scm.com/download/win) .

Vykdykite kitas operacijas `git bash` .

## Įdiegti

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigūruoti Vertimo Prieigos Raktą

Aplankykite [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Sukurkite `~/.config/i18n.site.yml` , įklijuokite į jį nukopijuotą turinį, turinys yra toks:

```
token: YOUR_API_TOKEN
```

Be [i18n.site/payBill](//i18n.site/payBill) , turite susieti mokėjimo kredito kortelę (nereikia papildyti, svetainė automatiškai nuskaitys mokesčius pagal naudojimą, [kainodarą žr. pagrindiniame puslapyje](/#price) ).

## Naudoti

### Demo Projektas

Norėdami sužinoti `i18` vertimo konfigūraciją, žr. demonstracinį projektą [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Vartotojai Kinijoje gali klonuoti [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Po klonavimo įveskite katalogą ir paleiskite `i18` , kad užbaigtumėte vertimą.

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

Išversti demonstraciniai failai `en` kataloge yra tik pavyzdys ir gali būti ištrinti.

### Vykdyti Vertimą

Įveskite katalogą ir paleiskite `i18` kad išverstumėte.

Be vertimo, programa taip pat sugeneruos `.i18n/data` aplanką, pridėkite jį prie saugyklos.

Išvertus naują failą, šiame kataloge bus sugeneruotas naujas duomenų failas. Nepamirškite pridėti `git add . ` .

## Konfigūracijos Failas

`.i18n/conf.yml` yra `i18` komandinės eilutės vertimo įrankio konfigūracijos failas

Turinys yra toks:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Originalo Kalba Vertimo &

Konfigūracijos faile `fromTo` pavaldinys:

`en` yra šaltinio kalba, `zh ja ko de fr` yra vertimo kalba.

Kalbos kodas [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE) .

Pavyzdžiui, jei norite išversti kinų kalbą į anglų kalbą, perrašykite šią eilutę `zh: en` .

Jei norite išversti į visas palaikomas kalbas, palikite tuščią po `:` . pavyzdžiui

```
i18n:
  fromTo:
    en:
```

Galite : skirtingus `fromTo` skirtingiems failams /

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

Šioje konfigūracijos lentelėje `blog` katalogo vertimo šaltinio kalba yra `zh` , o `blog/your_file_name.md` katalogo vertimo šaltinio kalba yra `ja` .

### Daugiakalbiai Vaizdai/Nuorodos

Kai URL adresai paveikslėliuose ir nuorodose `replace:` ir `MarkDown` (ir įterptųjų `HTML` atributai `src` ir `href` ) sukonfigūruojami `.i18n/conf.yml` su šiuo priešdėliu, šaltinio kalbos kodas URL bus pakeistas vertimo kalbos kodu ( [kalba kodų sąrašas](/i18/LANG_CODE) ).

Pavyzdžiui, jūsų konfigūracija yra tokia:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` yra žodynas, raktas yra URL priešdėlis, kurį reikia pakeisti, o reikšmė yra pakeitimo taisyklė.

Aukščiau pateiktos taisyklės `ko de uk>ru zh-TW>zh >en` pakeitimas reiškia, kad `ko de` naudoja savo kalbos kodo paveikslėlį, `zh-TW` ir `zh` naudoja `zh` paveikslėlį, `uk` naudoja `ru` paveikslėlį, o kitos kalbos (pvz., `ja` ) naudoja paveikslėlį iš `en` pagal numatytuosius nustatymus.

Pavyzdžiui, prancūzų ( `fr` ) šaltinio failas `MarkDown` yra toks :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Išverstas ir sugeneruotas anglų ( `en` ) failas yra toks :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Čia `/en/` šaltinio kalbos kode pakeičiami `/zh/` tikslinėje kalboje.

: Prieš ir po pakeisto teksto kalbos kodo URL turi būti `/` .

> [!TIP]
> Jei `- /` sukonfigūruotas `url:` , bus suderinti tik santykiniai keliai, bet URL, prasidedantys `//` nebus suderinti.
>
> Jei kai kurios domeno vardo nuorodos nori būti pakeistos, o kai kurios nenori būti pakeistos, galite jas atskirti naudodami skirtingus priešdėlius, pvz., `[x](//x.com/en/)` ir `[x](https://x.com/en/)` .

### Ignoruoti Failą

Pagal numatytuosius nustatymus visi failai, prasidedantys `.md` ir `.yml` šaltinio kalbos kataloge, bus išversti.

Jei norite nepaisyti tam tikrų failų ir jų neišversti (pvz., nebaigtų juodraščių), galite tai sukonfigūruoti naudodami `ignore` lauką.

`ignore` naudoja tą [globset](https://docs.rs/globset/latest/globset/#syntax) sintaksę kaip ir `.gitignore` failas.

Pavyzdžiui, `_* ` aukščiau pateiktame konfigūracijos faile reiškia, kad failai, prasidedantys `_` nebus išversti.

## Vertimo Taisyklės

### Vertimo Redaktoriai Neturėtų Pridėti Ar Ištrinti Eilučių

Vertimas yra redaguojamas. Pakeiskite originalų tekstą ir dar kartą išverskite jį mašininiu būdu, rankiniai vertimo pakeitimai nebus perrašyti (jei ši originalaus teksto pastraipa nebuvo pakeista).

> [!WARN]
> Tarp vertimo eilučių ir originalaus teksto turi būti vienas su vienu atitikimas. Tai yra, kurdami vertimą nepridėkite ir neištrinkite eilučių. Priešingu atveju tai sukels painiavą vertimo redagavimo talpykloje.

Jei kas nors negerai, [sprendimų ieškokite DUK.](/i18/qa#H1)

### `YAML` Vertimų

Komandinės eilutės įrankis suras visus failus, kurie baigiasi `.yml` šaltinio kalbos failų kataloge ir išvers juos.

* Atminkite, kad failo pavadinimo priesaga turi būti `.yml` (ne `.yaml` ).

Įrankis verčia tik žodyno reikšmes `.yml` , o ne žodyno klavišus.

Pavyzdžiui `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

bus išverstas kaip `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` vertimą taip pat galima keisti rankiniu būdu (tačiau vertime nepridėkite ir neištrinkite raktų ar eilučių).

Remdamiesi `YAML` vertimu, galite lengvai sukurti tarptautinius sprendimus įvairioms programavimo kalboms.

## Išplėstinis Naudojimas

### Vertimo Pakatalogis

Kol bus sukurtas `.i18n/conf.yml` (nereikia kiekvieną kartą pradėti nuo demonstracinio projekto šablono), `i18` veiks gerai.

Komandinės eilutės įrankis visuose pakatalogiuose suras `.i18n/conf.yml` konfigūracijų ir jas išvers.

Projektai, kuriuose naudojama [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Pasirinktinis Diegimo Katalogas

Pagal numatytuosius nustatymus jis bus įdiegtas į `/usr/local/bin` .

Jei `/usr/local/bin` neturi rašymo leidimo, jis bus įdiegtas į `~/.bin` .

Aplinkos kintamasis `TO` gali apibrėžti diegimo katalogą, pavyzdžiui :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```