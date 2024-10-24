# Saz Bikin Û Bikar Bînin

## windows Yekem git bash Saz Bike

windows , ji kerema xwe [li vir bikirtînin da ku pêşî `git bash` dakêşin û saz bikin](https://git-scm.com/download/win) .

Operasyonên paşîn di `git bash` de bimeşînin.

## Lêkirin

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Nîşaneya Wergerê Mîheng Bike

[i18n.site/token](//i18n.site/token) bikirtînin ku token kopî bikin

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` biafirînin, naveroka kopî tê de bişopînin, naverok wiha ye:

```
token: YOUR_API_TOKEN
```

Digel [i18n.site/payBill](//i18n.site/payBill) , hûn hewce ne ku ji bo dravdanê qerta krediyê girêdin (ji nûvekirinê ne hewce ye, malper dê bixweber xercê li gorî karanîna dakêşîne, [ji bo nirxê li rûpelê malê binêre](/#price) ).

## Bikaranîn

### Projeya Demo

Ji kerema xwe serî li projeya demo bidin da ku hûn veavakirina `i18` werger fêr bibin [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Bikarhênerên li Chinaînê dikarin klon bikin [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Piştî klonkirinê, têkevin pelrêçayê û `i18` bimeşînin da ku werger temam bikin.

### Avahiya Directory

Struktura pelrêça wargeha şablonê wiha ye

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Pelên demo yên wergerandî yên di pelrêça `en` de tenê mînakek in û dikarin werin jêbirin.

### Wergerê Bimeşîne

Têkeve pelrêçayê û ji bo wergerandinê `i18` bimeşîne.

Ji bilî wergerê, bername dê peldanka `.i18n/data` jî çêbike, ji kerema xwe wê li depoyê zêde bike.

Piştî wergerandina pelê nû `git add . ` pelek daneya nû dê di vê pelrêçayê de were çêkirin.

## Pelê Veavakirinê

`.i18n/conf.yml` pela veavakirinê ya amûra wergerandina rêzika fermanê `i18` e

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

Di pelê veavakirinê de, jêrzemîna `fromTo` :

`en` zimanê çavkanî ye, `zh ja ko de fr` zimanê mebesta wergerê ye.

Koda ziman bibînin [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Mînakî, heke hûn dixwazin Çînî wergerînin Îngilîzî, vê rêzê `zh: en` ji nû ve binivîsin.

Heke hûn dixwazin ji bo hemî zimanên destekkirî wergerînin, ji kerema xwe piştî `:` vala bihêlin. bo nimûne

```
i18n:
  fromTo:
    en:
```

Ji bo pelên / `fromTo` dikare were mîheng kirin Pêşandanek wekî jêrîn tê nivîsandin :

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

Di vê tabloya veavakirinê de, zimanê çavkaniyê yê wergerandina pelrêça `blog` `zh` e, û zimanê çavkanî yê wergera pelrêça `blog/your_file_name.md` `ja` ye.

### Pelê Paşguh Neke

Bi xwerû, hemî pelên ku di pelrêça zimanê çavkanî de bi `.md` û `.yml` dest pê dikin dê werin wergerandin.

Heke hûn dixwazin hin pelan paşguh bikin û wan wernegerînin (wek pêşnûmeyên neqedandî), hûn dikarin veavakirina qada `ignore` bikar bînin.

`ignore` heman [globset](https://docs.rs/globset/latest/globset/#syntax) wekî pelê `.gitignore` bikar tîne.

Mînakî, `_* ` di pelê veavakirina jorîn de tê vê wateyê ku pelên ku bi `_` dest pê dikin nayên wergerandin.

## Rêgezên Wergerê

### Edîtorên Wergerê Divê Rêzan Lê Zêde Nekin an Jêbikin

Werger tê guherandin. Nivîsara orîjînal biguhezînin û wê dîsa bi makîneyê wergerînin, guheztinên bi destan ên wergerê dê neyên nivîsandin (eger ev paragrafa nivîsa orîjînal nehatibe guhertin).

> [!WARN]
> Rêzên werger û metna orîjînal divê yek bi yek re li hev bikin. Ango dema berhevkirina wergerê rêzan lê zêde nekin û jê nekin. Wekî din, ew ê di cacheya guherandina wergerê de bibe sedema tevliheviyê.

Ger tiştek xelet derkeve, ji kerema xwe [ji bo çareseriyê serî li FAQ-ê bidin.](/i18/qa#H1)

### `YAML` Werger

Amûra rêza fermanê dê hemî pelên ku bi `.yml` diqedin di pelrêça pelê zimanê çavkanî de bibîne û wan wergerîne.

* Bala xwe bidinê ku paşgira navê pelê divê `.yml` be (ne `.yaml` ).

Amûr tenê nirxên ferhengê bi `.yml` werdigerîne, ne bişkojkên ferhengê.

Mînak `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

dê wekî `i18n/zh/i18n.yml` were wergerandin

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Wergera `YAML` jî dikare bi destan were guheztin (lê di wergerê de bişkok û rêzan zêde nekin an jêbikin).

Li ser bingeha wergerandina `YAML` , hûn dikarin bi hêsanî çareseriyên navneteweyî ji bo zimanên cûrbecûr bernamesaziyê ava bikin.

## Bikaranîna Pêşketî

### Bindirectory Werger

Heya ku `.i18n/conf.yml` were afirandin (ne hewce ye ku her carê ji şablona projeya demo dest pê bike), `i18` dê baş bixebite.

Amûra rêza fermanê dê `.i18n/conf.yml` veavakirinan di hemî binerdektoran de bibîne û wan wergerîne.

Projeyên ku mîmariya [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Pelrêça Sazkirinê Ya Custom

Ew ê ji hêla `/usr/local/bin` ve were saz kirin.

Ger destûra nivîsandinê ya `/usr/local/bin` nebe ew ê li `~/.bin` were saz kirin.

Sazkirina guherbara jîngehê `TO` dikare pelrêça sazkirinê diyar bike, wek nimûne :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```