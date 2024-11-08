# Teeka Era Okozese

## windows Esooka Kuteeka git bash

windows , nsaba [onyige wano okusooka okuwanula n'okussaako `git bash`](https://git-scm.com/download/win) .

Dukanya emirimu egiddako mu `git bash` .

## Okuzimba

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Tegeka Akabonero K'okuvvuunula

Visit [i18n.site/token](//i18n.site/token) Nyiga okukoppa akabonero

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Tonda `~/.config/i18n.site.yml` , teekamu ebirimu ebikoppoloddwa, ebirimu biri bwe biti:

```
token: YOUR_API_TOKEN
```

Okugatta ku ekyo, olina okusiba kaadi y’okusasula mu [i18n.site/payBill](//i18n.site/payBill) (Tekyetaagisa kuddamu kusasula, omukutu gujja kuggyako ssente okusinziira ku nkozesa, [laba omukutu gw’awaka okumanya emiwendo](/#price) ).

## Omugaso

### Pulojekiti Ya Demo

Nsaba otunule mu pulojekiti ya demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) ensengeka y'okuvvuunula `i18` .

Abakozesa mu China basobola okukola clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Oluvannyuma lw'okukola cloning, yingira mu dayirekita odduke `i18` okumaliriza okuvvuunula.

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

Fayiro za demo ezivvuunuddwa mu dayirekita ya `en` kyakulabirako kyokka era zisobola okusazibwamu.

### Dduka Okuvvuunula

Yingiza dayirekita odduke `i18` okuvvuunula.

Ng'oggyeeko okuvvuunula, pulogulaamu era ejja kukola folda `.i18n/data` , nsaba ogiteeke mu tterekero.

Oluvannyuma lw'okuvvuunula fayiro empya, fayiro ya data empya ejja kukolebwa mu dayirekita eno Jjukira okugattako `git add . ` .

## Fayiro Y'okusengeka

`.i18n/conf.yml` ye fayiro y'okusengeka ey'ekintu ekivvuunula layini y'ebiragiro `i18`

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

Mu fayiro y'okusengeka, wansi wa `fromTo` :

`en` lwe lulimi olusibuka, `zh ja ko de fr` lwe lulimi olugendererwamu okuvvuunula.

Koodi y'olulimi laba [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Okugeza, bw’oba oyagala okuvvuunula Oluchina mu Lungereza, ddamu wandiika layini eno `zh: en` .

Bw'oba oyagala okuvvuunula mu nnimi zonna eziwagirwa, nsaba olekewo nga temuli kintu kyonna oluvannyuma lwa `:` . okugeza nga

```
i18n:
  fromTo:
    en:
```

Osobola okutegeka `fromTo` ez'enjawulo ku subdirectories / Okwolesebwa kuwandiikibwa bwekuti :

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

Mu kipande kino eky’okusengeka, olulimi ensibuko y’okuvvuunula katalogu `blog` luli `zh` , ate olulimi ensibuko y’okuvvuunula katalogu `blog/your_file_name.md` luli `ja` .

### Ebifaananyi/Enkolagana Ez’ennimi Eziwera

URLs mu bifaananyi n’enkolagana mu `replace:` ne `MarkDown` (n’ebintu `src` ne `href` ebya embedded `HTML` ) bwe zitegekebwa mu `.i18n/conf.yml` n’entandikwa eno, koodi y’olulimi ensibuko mu URL ejja kukyusibwamu koodi y’olulimi lw’enkyusa ( [olulimi olukalala lwa koodi](/i18/LANG_CODE) ).

Okugeza, ensengeka yo eri bweti:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` nkuluze, ekisumuluzo ye URL prefix egenda okukyusibwa, ate omuwendo gwe tteeka ly'okukyusa.

Amakulu g’okukyusa etteeka `ko de uk>ru zh-TW>zh >en` waggulu gali nti `ko de` akozesa ekifaananyi kya koodi y’olulimi lwabwe, `zh-TW` ne `zh` bakozesa ekifaananyi kya `zh` , `uk` bakozesa ekifaananyi kya `ru` , ate ennimi endala (nga `ja` ) zikozesa ekifaananyi wa `en` nga bwe kibadde.

Okugeza, fayiro y’ensibuko y’Olufaransa ( `fr` ) eya `MarkDown` eri bweti :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Fayiro y'Olungereza ( `en` ) evvuunuddwa era n'ekoleddwa eri bweti :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Wano, `/en/` mu koodi y’olulimi ensibuko zikyusibwa ne `/zh/` mu lulimi olugendererwa.

Note : Wateekwa okubaawo `/` nga code y'olulimi tennabaawo n'oluvannyuma lw'ekiwandiiko ekikyusiddwa mu URL.

> [!TIP]
> Singa `- /` etegekebwa mu `url:` , amakubo ag'enjawulo gokka ge gajja kukwatagana, naye URL ezitandikira ku `//` tezijja kukwatagana.
>
> Singa enkolagana ezimu ez’erinnya lya domain zagala okukyusibwa ate ezimu tezaagala kukyusibwa, osobola okukozesa entandikwa ez’enjawulo nga `[x](//x.com/en/)` ne `[x](https://x.com/en/)` okuzaawulamu.

### Okubuusa Amaaso Fayiro

Nga bwekiba, fayiro zonna ezitandikira ku `.md` ne `.yml` mu dayirekita y'olulimi ensibuko zijja kuvvuunulwa.

Bw'oba oyagala okubuusa amaaso fayiro ezimu n'otozivvuunula (nga ebbago eritannaggwa), osobola okugitegeka n'ekifo `ignore` .

`ignore` ekozesa ensengeka `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Okugeza, `_* ` mu fayiro y'okusengeka waggulu kitegeeza nti fayiro ezitandikira ku `_` tezijja kuvvuunulwa.

## Amateeka G’okuvvuunula

### Abalongoosa Enkyusa Tebalina Kwongerako Oba Kusazaamu Layini

Enkyusa eno esobola okulongoosebwa. Kyuusa ekiwandiiko ekyasooka era oddemu okukivvuunula mu kyuma, enkyukakyuka mu ngalo mu nkyusa tezijja kuwandiikibwako (singa akatundu kano ak’ekiwandiiko ekyasooka tekakyusiddwa).

> [!WARN]
> Wateekwa okubaawo okukwatagana okw’omuntu ku muntu wakati w’ennyiriri z’enkyusa n’ekiwandiiko ekyasooka. Kwe kugamba, toyongera oba tosazaamu layini ng’okuŋŋaanya enkyusa. Bwe kitaba ekyo, kijja kuleeta okutabulwa mu cache y'okulongoosa okuvvuunula.

Singa wabaawo ekikyamu, nsaba otunule mu [FAQ omanye ebyokugonjoola.](/i18/qa#H1)

### `YAML` Enzivuunula

Ekintu ekikozesebwa mu layini y'ekiragiro kijja kusanga fayiro zonna ezikoma ne `.yml` mu dayirekita ya fayiro y'olulimi ensibuko era kizivvuunule.

* Weetegereze nti enkomerero y'erinnya lya fayiro erina okuba `.yml` (si `.yaml` ).

Ekintu kino kivvuunula emiwendo gya nkuluze gyokka mu `.yml` , so si bisumuluzo bya nkuluze.

Okugeza `i18n/en/i18n.yml`

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

Okusinziira ku kuvvuunula `YAML` , osobola bulungi okuzimba eby’okugonjoola eby’ensi yonna eby’ennimi ez’enjawulo ez’okukola pulogulaamu.

## Enkozesa Ey’omulembe

### Ekitabo Ekitono Eky’okuvvuunula

Kasita `.i18n/conf.yml` ekoleddwa (tekyetaagisa kutandika ku demo project template buli mulundi), `i18` ejja kukola bulungi.

Ekintu ekikozesebwa mu layini y'ekiragiro kijja kuzuula ensengeka `.i18n/conf.yml` mu subdirectories zonna era kizivvuunule.

Pulojekiti ezikozesa enzimba [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Dayirekita Y'okussaako Eya Custom

Kijja kuteekebwa ku `/usr/local/bin` nga bwekiba.

Singa `/usr/local/bin` terina lukusa lwa kuwandiika ejja kuteekebwa ku `~/.bin` .

Okuteekawo enkyukakyuka y'obutonde `TO` kuyinza okunnyonnyola dayirekita y'okussaako, okugeza :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```