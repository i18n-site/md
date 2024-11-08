# Saz Bikin Û Bikar Bînin

## windows Yekem git bash Saz Dike

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

Digel vê yekê, hûn hewce ne ku qerta krediyê ya [i18n.site/payBill](//i18n.site/payBill) ve girêbidin (Tu barkirin ne hewce ye, malper dê bixweber xercê li gorî karanîna dakêşîne, [ji bo nirxê li rûpelê malê binêre](/#price) ).

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

Hûn dikarin `fromTo` : cihêreng ji bo pelanên cûda mîheng bikin /

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

Di vê tabloya veavakirinê de, zimanê çavkanî yê wergerandina katalog `blog` `zh` e, û zimanê çavkanî yê wergerandina katalog `blog/your_file_name.md` `ja` ye.

### Wêneyên Pirzimanî / Girêdan

Dema ku URLên di wêneyan û lînkên di `replace:` û `MarkDown` de (û taybetmendiyên `src` û `href` yên binavkirî `HTML` ) di `.i18n/conf.yml` de bi vê pêşgiran têne mîheng kirin, koda zimanê çavkaniyê di URL-ê de dê bi koda zimanê werger ( [ziman lîsteya kodê](/i18/LANG_CODE) ).

Mînakî, veavakirina we wiha ye:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` ferhengek e, mifteya pêşgira URL-ê ye ku were guheztin, û nirx qaîdeya veguheztinê ye.

Wateya cîgirkirina qaîdeya `ko de uk>ru zh-TW>zh >en` li jor ev e ku `ko de` wêneya koda zimanê xwe bikar tîne, `zh-TW` û `zh` wêneya `zh` bikar tînin, `uk` wêneya `ru` bikar tînin, û zimanên din (wekî `ja` ) wêneyê bikar tînin. ji `en` bi xweber.

Mînakî, pelê çavkaniya fransî ( `fr` ) ya `MarkDown` wiha ye :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Dosyaya wergerandin û çêkirinê ya Îngilîzî ( `en` ) wiha ye :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Li vir, `/en/` di koda zimanê çavkaniyê de bi `/zh/` zimanê armanc têne guhertin.

Nîşe : Di URL-ê de berî û piştî koda zimanê nivîsa ku hatî guherandin divê `/` hebe.

> [!TIP]
> Ger `- /` di `url:` de were mîheng kirin, tenê rêyên têkildar dê werin berhev kirin, lê URLên ku bi `//` dest pê dikin dê neyên hevber kirin.
>
> Ger hin girêdanên navek domainê dixwazin werin guheztin û hin jî naxwazin werin guheztin, hûn dikarin pêşpirtikên cihêreng ên wekî `[x](//x.com/en/)` û `[x](https://x.com/en/)` bikar bînin da ku wan ji hev cuda bikin.

### Pelê Paşguh Neke

Bi xwerû, hemî pelên ku di pelrêça zimanê çavkanî de bi `.md` û `.yml` dest pê dikin dê werin wergerandin.

Heke hûn dixwazin hin pelan paşguh bikin û wan wernegerînin (wek pêşnûmeyên neqedandî), hûn dikarin wê bi qada `ignore` mîheng bikin.

`ignore` [globset](https://docs.rs/globset/latest/globset/#syntax) hevoksaziya pelê `.gitignore` bikar tîne.

Mînakî, `_* ` di pelê veavakirina jorîn de tê vê wateyê ku pelên ku bi `_` dest pê dikin nayên wergerandin.

## Rêgezên Wergerê

### Edîtorên Wergerê Divê Rêzan Lê Zêde Nekin an Jêbikin

Werger tê guherandin. Nivîsara orîjînal biguherîne û wê dîsa bi makîneyê wergerîne, guheztinên bi destan ên wergerê dê neyên nivîsandin (eger ev paragrafa nivîsa orîjînal nehatibe guhertin).

> [!WARN]
> Divê di navbera rêzên werger û metnê orîjînal de yek bi yek hevahengiyek hebe. Ango dema berhevkirina wergerê rêzan lê zêde nekin û jê nekin. Wekî din, ew ê di cacheya guherandina wergerê de bibe sedema tevliheviyê.

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

Li ser bingeha wergerandina `YAML` , hûn dikarin bi hêsanî ji bo zimanên bernamesaziyê yên cihêreng çareseriyên navneteweyî ava bikin.

## Bikaranîna Pêşketî

### Bindirectory Wergeran

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