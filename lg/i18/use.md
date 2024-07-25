# Teeka Era Okozese

## windows Esooka Kuteeka git bash

windows , nsaba [onyige wano okusooka okuwanula n'okussaako `git bash`](https://git-scm.com/download/win)

Dukanya emirimu egiddako mu `git bash`

## Okuzimba

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Tegeka Akabonero K'okuvvuunula

Visit [i18n.site/token](//i18n.site/token) Nyiga okukoppa akabonero

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Tonda `~/.config/i18n.site.yml` teekamu ebirimu ebikoppoloddwa, ebirimu biri bwe biti:

```
token: YOUR_API_TOKEN
```

Okugatta ku ekyo, olina [i18n.site/payBill](//i18n.site/payBill) kaadi y’okuwola ssente okusasula (tekyetaagisa kuddamu kusasula, omukutu gujja kuggyako ssente okusinziira ku nkozesa, [laba omukutu gw’awaka okumanya emiwendo](/#price) ).

## Omugaso

### Pulojekiti Ya Demo

Nsaba otunule mu pulojekiti ya demo okuyiga ensengeka `i18` [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Abakozesa mu China basobola okukola clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Oluvannyuma lw'okukola cloning, yingira mu dayirekita `i18` okumaliriza okuvvuunula.

### Ensengeka Ya Dayirekita

Ensengeka ya dayirekita ya sitoowa ya template eri bweti

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Dayirekita `en`

### Dduka Okuvvuunula

Yingira mu dayirekita `i18` okuvvuunula.

### Yongera Fayiro Mu Tterekero

Ng’oggyeeko okuvvuunula, pulogulaamu eno era ejja kukola fayiro zino wammanga, nsaba oziyongere mu tterekero.

```
.i18n/hash
.i18n/cache/.gitignore
```

Mu byo, ebirimu : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Kino kitegeeza okubuusa `.i18n/cache/.gitignore` fayiro zonna mu `.i18n/cache/`

Bwe kiba nti software yo efugira enkyusa si `git`

## Fayiro Y'okusengeka

`.i18n/conf.yml` Ye fayiro y'okusengeka ey'ekintu eky'okuvvuunula `i18` line

Ebirimu biri bwe biti:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Olulimi Lw'ensibuko &

Mu fayiro y'okusengeka, abali wansi wa `fromTo`

`en` `zh ja ko de fr`

Koodi y'olulimi laba [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Okugeza, bw’oba ​​oyagala okuvvuunula Oluchina mu Lungereza, ddamu wandiika olunyiriri luno `zh: en`

Bw'oba oyagala okuvvuunula mu nnimi zonna eziwagirwa, nsaba olekewo nga temuli kintu kyonna oluvannyuma lwa `:` okugeza nga

```
i18n:
  fromTo:
    en:
```

### Okubuusa Amaaso Fayiro

Nga bwekiba, fayiro zonna ezitandikira ku `.md` ne `.yml` mu dayirekita y'olulimi ensibuko zijja kuvvuunulwa.

Bw'oba oyagala okubuusa amaaso fayiro ezimu n'otozivvuunula (nga ebbago eritannaggwa), osobola okukozesa ensengeka y'ennimiro `ignore`

Ekozesa [globset](https://docs.rs/globset/latest/globset/#syntax) y'ebigambo efaananako ne `.gitignore` `ignore`

Okugeza, mu fayiro y'okusengeka waggulu `_* ` nti fayiro ezitandikira ku `_` tezijja kuvvuunulwa.

## Amateeka G’okuvvuunula

### Abalongoosa Enkyusa Tebalina Kwongerako Oba Kusazaamu Layini

Enkyusa eno esobola okulongoosebwa. Kyuusa ekiwandiiko ekyasooka era oddemu okukivvuunula mu kyuma, enkyukakyuka mu ngalo mu nkyusa tezijja kuwandiikibwako (singa akatundu kano ak’ekiwandiiko ekyasooka tekakyusiddwa).

Naye nsaba omanye nti ennyiriri z’enkyusa n’ebiwandiiko ebyasooka birina okukwatagana emu ku emu. Kwe kugamba, toyongera oba tosazaamu layini ng’okuŋŋaanya enkyusa. Bwe kitaba ekyo, kijja kuleeta okutabulwa mu tterekero ly'okulongoosa okuvvuunula.

Singa wabaawo ekikyamu, nsaba otunule mu [FAQ omanye ebyokugonjoola.](/i18/qa#H1)

### `YAML` Okuvvunula

Ekintu ekikozesebwa mu layini y'ekiragiro kijja kusanga fayiro zonna ezikoma ne `.yml` mu dayirekita ya fayiro y'olulimi ensibuko era kizivvuunule.

* Weetegereze nti enkomerero y'erinnya lya fayiro erina okuba `.yml` (si `.yaml` ).

Ekintu kivvuunula emiwendo gya nkuluze gyokka mu `.yml` , so si bisumuluzo bya nkuluze.

okugeza nga `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

ejja kuvvuunulwa nga `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Enkyusa ya `YAML` nayo esobola okukyusibwa mu ngalo (naye toyongera oba tosazaamu bisumuluzo oba layini mu nkyusa).

Okusinziira ku `YAML`

## Enkozesa Ey’omulembe

### Ekitabo Ekitono Eky’okuvvuunula

Kasita okola `.i18n/conf.yml` (tekyetaagisa kutandika ku demo project template buli mulundi), `i18` ejja kukola bulungi.

Ekintu ekikozesebwa mu layini y'ekiragiro kijja kuzuula ensengeka ya `.i18n/conf.yml` mu subdirectories zonna era kigivvuunule.

Pulojekiti ezikozesa enzimba ya [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Dayirekita Y'okussaako Eya Custom

Kijja kuteekebwa ku `/usr/local/bin`

`~/.bin` `/usr/local/bin`

Teeka enkyukakyuka `TO` Osobola okunnyonnyola dayirekita y'okussaako, okugeza :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
