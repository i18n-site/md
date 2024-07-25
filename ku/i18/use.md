# Saz Bikin Û Bikar Bînin

## windows Yekem git bash Saz Dike

windows , ji kerema xwe [li vir bikirtînin da ku pêşî dakêşin û saz `git bash`](https://git-scm.com/download/win) .

Operasyonên paşîn di nav de bimeşînin `git bash`

## Lêkirin

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Nîşaneya Wergerê Mîheng Bike

[i18n.site/token](//i18n.site/token) bikirtînin ku token kopî bikin

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Biafirînin `~/.config/i18n.site.yml` naveroka kopî tê de binivîsin, naverok wiha ye:

```
token: YOUR_API_TOKEN
```

Digel vê yekê, hûn hewce ne [i18n.site/payBill](//i18n.site/payBill) ji bo dravdanê qerta krediyê girêdin (ji nûvekirinê ne hewce ye, malper dê bixweber xercê li gorî karanîna dakêşîne, [ji bo nirxê li rûpelê malê binêre](/#price) ).

## Bikaranîn

### Projeya Demo

Ji kerema [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) serî li projeya demo bidin da ku hûn veavakirina wergerê fêr bibin `i18`

Bikarhênerên li Chinaînê dikarin klon bikin [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Piştî klonkirinê, têkevin pelrêça û `i18` da ku werger temam bikin.

### Structure Directory

Struktura pelrêça wargeha şablonê wiha ye

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Di pelrêça `en`

### Wergerê Bimeşîne

Têkeve pelrêça û birevin ji bo wergerandinê `i18`

### Pelan Li Depoyê Zêde Bikin

Ji bilî wergerê, bername dê pelên jêrîn jî çêbike, ji kerema xwe wan li depoyê zêde bike.

```
.i18n/hash
.i18n/cache/.gitignore
```

Di nav wan de : naveroka `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Ev tê wê wateyê ku hemî pelên `.i18n/cache/` guh nede (ji bilî `.i18n/cache/.gitignore` ).

Ger nermalava weya kontrolkirina guhertoyê ne `git` ji kerema xwe li gorî vê veavakirinê guh nedin wê.

## Pelê Veavakirinê

`.i18n/conf.yml` Ew pela veavakirinê ya amûra wergerandina rêza `i18` ye

Naverok wiha ye:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Zimanê Çavkanî &

Di pelê veavakirinê de, jêrdestên `fromTo`

`en` çavkanî ye, `zh ja ko de fr` zimanê mebesta wergerê ye.

Koda ziman bibînin [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Mînakî, heke hûn dixwazin Çînî wergerînin Îngilîzî, vê rêzê ji nû ve binivîsin `zh: en`

Heke hûn dixwazin ji bo hemî zimanên piştgirîkirî wergerînin, ji kerema xwe paşê vala bihêlin `:` bo nimûne

```
i18n:
  fromTo:
    en:
```

### Pelê Paşguh Neke

Di pelrêça zimanê çavkaniyê de hemî pelên `.yml` bi `.md`

Heke hûn dixwazin hin pelan paşguh bikin û wan wernegerînin (wek pêşnûmeyên neqediyayî), hûn dikarin veavakirina `ignore` bikar bînin.

Hevoksaziyek mîna `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax) tîne `ignore`

Mînakî, di pelê veavakirina `_* ` de tê vê wateyê ku pelên ku bi `_` dest pê dikin nayên wergerandin.

## Rêgezên Wergerê

### Edîtorên Wergerê Divê Rêzan Lê Zêde Nekin an Jêbikin

Werger tê guherandin. Nivîsara orîjînal biguherîne û wê dîsa bi makîneyê wergerîne, guheztinên bi destan ên wergerê dê neyên nivîsandin (eger ev paragrafa nivîsa orîjînal nehatibe guhertin).

Lê ji kerema xwe bala xwe bidinê ku rêzên werger û metna orîjînal divê yek bi yek li hev bikin. Ango dema berhevkirina wergerê rêzan lê zêde nekin û jê nekin. Wekî din, ew ê di cacheya guherandina wergerê de bibe sedema tevliheviyê.

Ger tiştek xelet derkeve, ji kerema xwe [ji bo çareseriyê serî li FAQ-ê bidin.](/i18/qa#H1)

### `Yaml`

Amûra rêza fermanê dê hemî pelên ku bi `.yml`

* Bala xwe bidinê ku paşgira navê pelê divê `.yml` (ne `.yaml` ).

Amûr tenê nirxên ferhengê werdigerîne `.yml` ne bişkojkên ferhengê.

bo nimûne `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

dê were wergerandin wek `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Wergera ji `YAML`

Li ser bingeha `YAML` , hûn dikarin bi hêsanî çareseriyên navneteweyî ji bo zimanên bernamesaziyê ava bikin.

## Bikaranîna Pêşketî

### Bindirectory Werger

Heya ku hûn `.i18n/conf.yml` (ne hewce ye ku her carê ji şablonê projeya demo dest pê bikin), `i18` dê baş bixebite.

Amûra rêza fermanê dê veavakirina `.i18n/conf.yml`

Projeyên ku mîmariya [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Pelrêça Sazkirinê Ya Custom

Ew ê ji hêla xwerû ve were saz kirin `/usr/local/bin`

`/usr/local/bin` destûra nivîsandinê tune be ew ê li `~/.bin` were saz kirin.

Guherbarên jîngehê saz : `TO`

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
