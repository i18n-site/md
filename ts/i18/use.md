# Nghenisa Ni Ku Tirhisa

## windows Yi Sungula Ku Nghenisa git bash

windows [`git bash`](https://git-scm.com/download/win)

Fambisa matirhelo lama landzelaka eka `git bash`

## Nghenisa

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Hlela Xikombiso Xa Vuhundzuluxeri

Endzela [i18n.site/token](//i18n.site/token) Click ku kopa token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Endla `~/.config/i18n.site.yml` namarheta nhundzu leyi kopiweke eka yona, nhundzu yi hi ndlela leyi landzelaka:

```
token: YOUR_API_TOKEN
```

Ku engetela kwalaho, u fanele [i18n.site/payBill](//i18n.site/payBill) boha khadi ra xikweleti leswaku u hakela (a ku laveki ku hakela nakambe, webusayiti yi ta susa mali hi yoxe hi ku ya hi matirhiselo, [vona tluka ra le kaya ku kuma nxavo](/#price) ).

## Tirhisa

### Phurojeke Ya Demo

Hi kombela `i18` languta eka phurojeke ya demo ku dyondza ku lulamisiwa ka vuhundzuluxi [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Vatirhisi va le China va nga endla clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Endzhaku ko cloning, nghena eka directory ivi u tsutsuma `i18`

### Xivumbeko Xa Xikombo

Xivumbeko xa xikombo xa vuhlayiselo bya thempleyi xi le ka xiyimo lexi landzelaka

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Xikombo xa `en` xi na tifayela ta demo leti hundzuluxeriweke, leti nga xikombiso ntsena naswona ti nga susiwa.

### Tsutsuma Vuhundzuluxeri

Nghena eka xikombo ivi u tsutsuma `i18`

### Engetela Tifayela Eka Vuhlayiselo

Ku engetela eka vuhundzuluxeri, nongonoko wu ta tlhela wu humesa tifayela leti landzelaka, hi kombela u ti engetela eka vuhlayiselo.

```
.i18n/hash
.i18n/cache/.gitignore
```

Exikarhi ka swona : leswi nga endzeni ka `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Leswi `.i18n/cache/.gitignore` vula leswaku honisa tifayela hinkwato eka `.i18n/cache/`

Loko software ya wena yo lawula vuhundzuluxeri yi nga ri `git`

## Fayili Ya Vuhlanganisi

`.i18n/conf.yml` I fayili ya vukorhokeri bya xitirhisiwa xa vuhundzuluxi bya layini ya `i18`

Leswi nga endzeni ka yona hi leswi landzelaka:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Ririmi Ra Xihlovo &

Eka fayili ya vuhlanganisi, lava nga ehansi ka `fromTo`

`en` `zh ja ko de fr`

Khodi ya ririmi vona [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Xikombiso, loko u lava ku hundzuluxela Xichayina hi Xinghezi, tsala layini leyi nakambe `zh: en`

Loko u lava ku hundzuluxela eka tindzimi hinkwato leti seketeriwaka, hi kombela u siya xi nga ri na nchumu endzhaku ka `:` Xikombiso

```
i18n:
  fromTo:
    en:
```

### Honisa Fayili

Hi ku tiyimisela, tifayela hinkwato leti sungulaka hi `.md` na `.yml` eka xikombo xa ririmi ra xihlovo ti ta hundzuluxeriwa.

Loko u lava ku honisa tifayela to karhi naswona u nga ti hundzuluxeli (ku fana na switshuriwa leswi nga hetiwangiki), u nga tirhisa vukorhokeri bya nsimu `ignore`

`ignore` xivumbeko xa marito lexi fanaka na `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Xikombiso, eka fayili ya vuhlanganisi leyi nga laha henhla `_* ` vula leswaku tifayela leti sungulaka hi `_` a ti nge hundzuluxeriwi.

## Milawu Ya Vuhundzuluxeri

### Vahleri ​​Va Vuhundzuluxeri a Va Fanelanga Ku Engetela Kumbe Ku Susa Mitila

Vuhundzuluxeri bya kona bya hleriwa. Cinca tsalwa ro sungula ivi u ri hundzuluxela hi muchini nakambe, ku cinca loku endliweke hi voko eka vuhundzuluxeri a ku nge tsariwi ehenhla (loko ndzimana leyi ya tsalwa ro sungula yi nga cinciwanga).

Kambe hi kombela mi xiya leswaku mitila ya vuhundzuluxeri ni tsalwa ro sungula swi fanele swi fambisana ni yin’we. Hi leswaku, u nga engeteli kumbe ku susa mitila loko u hlengeleta vuhundzuluxeri. Handle ka sweswo, swi ta vanga mpfilumpfilu eka cache yo hlela vuhundzuluxeri.

Loko ku ri na leswi nga famba kahle, hi kombela u languta eka [FAQ ku kuma swintshuxo.](/i18/qa#H1)

### `YAML` Hundzuluxa

Xitirhisiwa xa layini ya swileriso xi ta kuma tifayela hinkwato leti helelaka hi `.yml` eka xikombo xa tifayela ta ririmi ra xihlovo ivi xi ti hundzuluxela.

* Xiya leswaku xilandzi xa vito ra fayili xi fanele ku va `.yml` (hayi `.yaml` ).

Xitirhisiwa lexi xi hundzuluxela ntsena mimpimo ya xihlamusela-marito eka `.yml` , ku nga ri swilotlelo swa xihlamusela-marito.

Xikombiso `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

yi ta hundzuluxeriwa tanihi `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Vuhundzuluxi bya `YAML` byi nga tlhela byi cinciwa hi voko (kambe u nga engeteli kumbe ku susa swilotlelo kumbe mitila eka vuhundzuluxeri).

Hi ku ya hi `YAML` Vuhundzuluxeri, u nga aka swintshuxo swa matiko hinkwawo swa tindzimi to hambana ta minongonoko.

## Ku Tirhisiwa Ka Xiyimo Xa Le Henhla

### Xikombo-Ntsongo Xa Vuhundzuluxeri

Loko ntsena u tumbuluxa `.i18n/conf.yml` (a swi bohi ku sungula eka xifaniso xa phurojeke ya demo nkarhi wun'wana na wun'wana), `i18` yi ta tirha kahle.

Xitirhisiwa xa layini ya swileriso xi ta kuma vukorhokeri bya `.i18n/conf.yml` eka tidayirekitara letitsongo hinkwato ivi xi hundzuluxela.

Tiphurojeke leti tirhisaka [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Xikombo Xa Ku Nghenisa Xa Ntolovelo

Yi ta nghenisiwa eka `/usr/local/bin`

`~/.bin` `/usr/local/bin`

Seta swilo leswi cinca-cincaka swa ndhawu U nga hlamusela xikombo : ku nghenisa, xikombiso `TO`

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
