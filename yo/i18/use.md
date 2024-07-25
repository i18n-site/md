# Fi Sori Ẹrọ Ati Lo

## windows Akọkọ Fi git bash Sori Ẹrọ

windows , jọwọ [tẹ ibi lati ṣe igbasilẹ ati fi sori ẹrọ ni `git bash`](https://git-scm.com/download/win) .

Ṣiṣe awọn iṣẹ ṣiṣe atẹle ni `git bash`

## Fi Sori Ẹrọ

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Ṣe Atunto Àmi Itumọ

Ṣabẹwo [i18n.site/token](//i18n.site/token) Tẹ lati daakọ aami

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Ṣẹda `~/.config/i18n.site.yml` lẹẹmọ akoonu daakọ sinu rẹ, akoonu jẹ bi atẹle:

```
token: YOUR_API_TOKEN
```

Ni afikun, o nilo [i18n.site/payBill](//i18n.site/payBill) di kaadi kirẹditi kan fun sisanwo (ko si gbigba agbara ti a beere, oju opo wẹẹbu yoo yọkuro awọn idiyele laifọwọyi ni ibamu si lilo, [wo oju-ile fun idiyele](/#price) ).

## Lo

### Ririnkiri Ise Agbese

Jọwọ tọkasi iṣẹ akanṣe [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) lati kọ ẹkọ iṣeto ti itumọ `i18`

Awọn olumulo ni China le oniye [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Lẹhin ti cloning, tẹ awọn liana ati ṣiṣe awọn `i18`

### Ilana Ilana

Ilana ilana ile itaja awoṣe jẹ bi atẹle

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Iwe ilana `en`

### Ṣiṣe Itumọ

Tẹ itọsọna naa ki o si `i18` lati tumọ.

### Fi Awọn Faili Kun Si Ibi Ipamọ

Ni afikun si itumọ, eto naa yoo tun ṣe awọn faili wọnyi, jọwọ ṣafikun wọn si ibi ipamọ naa.

```
.i18n/hash
.i18n/cache/.gitignore
```

Lara wọn : akoonu ti `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Eyi tumọ si foju kọ gbogbo awọn faili inu `.i18n/cache/` -ipamọ (ayafi `.i18n/cache/.gitignore` ).

Ti sọfitiwia iṣakoso ẹya rẹ ko ba jẹ `git` jọwọ foju rẹ ni ibamu si iṣeto yii.

## Faili Iṣeto Ni

`.i18n/conf.yml` jẹ faili atunto ti irinṣẹ itumọ laini `i18`

Awọn akoonu jẹ bi wọnyi:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Ede Orisun &

Ninu faili iṣeto, awọn abẹlẹ ti `fromTo`

`en` ni ede orisun, `zh ja ko de fr` jẹ ede ibi-afẹde ti itumọ.

Koodu ede wo [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Fun apẹẹrẹ, ti o ba fẹ tumọ Kannada si Gẹẹsi, tun laini yii kọ `zh: en`

Ti o ba fẹ tumọ si gbogbo awọn ede ti o ni atilẹyin, jọwọ fi silẹ ni ofifo lẹhin `:` fun apere

```
i18n:
  fromTo:
    en:
```

### Foju Faili

Nipa aiyipada, gbogbo awọn faili ti `.yml` bẹrẹ pẹlu `.md`

Ti o ba fẹ lati foju awọn faili kan ko si tumọ wọn (gẹgẹbi awọn iyaworan ti ko pari), o le lo iṣeto aaye `ignore`

Nlo sintasi kan `ignore` o jọra si `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Fun apẹẹrẹ, ninu faili iṣeto ni oke `_* ` si pe awọn faili ti o bẹrẹ pẹlu `_` kii yoo tumọ.

## Awọn Ofin Itumọ

### Awọn Olootu Itumọ Ko Yẹ Ki O Ṣafikun Tabi Pa Awọn Laini Rẹ

Itumọ jẹ ṣiṣatunṣe. Ṣe atunṣe ọrọ atilẹba ati ẹrọ-tumọ lẹẹkansii, awọn iyipada afọwọṣe si itumọ naa kii yoo tun kọ (ti o ba jẹ pe paragirafi yii ti ọrọ atilẹba ko ti yipada).

Ṣugbọn jọwọ ṣakiyesi pe awọn ila ti itumọ ati ọrọ atilẹba gbọdọ baamu ọkan si ọkan. Iyẹn ni, maṣe ṣafikun tabi paarẹ awọn laini rẹ nigbati o ba n ṣajọ itumọ naa. Bibẹẹkọ, yoo fa idarudapọ ninu kaṣe ṣiṣatunṣe itumọ.

Ti nkan kan ba jẹ aṣiṣe, jọwọ tọka si [FAQ fun awọn ojutu.](/i18/qa#H1)

### `Yaml`

Ọpa laini aṣẹ yoo wa gbogbo awọn faili ti o pari pẹlu `.yml` ninu itọsọna faili ede orisun ati tumọ wọn.

* `.yaml` akiyesi pe suffix orukọ faili gbọdọ jẹ `.yml`

Ọpa naa tumọ awọn iye iwe-itumọ nikan ni `.yml` kii ṣe awọn bọtini itumọ.

fun apere `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

yoo tumọ bi `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Itumọ ti `YAML` tun le ṣe atunṣe pẹlu ọwọ (ṣugbọn maṣe ṣafikun tabi paarẹ awọn bọtini tabi awọn ila ni itumọ).

Da lori `YAML` , o le ni rọọrun kọ awọn solusan agbaye fun ọpọlọpọ awọn ede siseto.

## Lilo Ilọsiwaju

### Ipilẹ Iwe-Itumọ

Niwọn igba ti o `.i18n/conf.yml` (ko si iwulo lati bẹrẹ lati awoṣe iṣẹ akanṣe ni gbogbo igba), `i18` yoo ṣiṣẹ daradara.

Ọpa laini aṣẹ yoo wa `.i18n/conf.yml` ni gbogbo awọn iwe-ipamọ ati tumọ rẹ.

Awọn iṣẹ akanṣe ti o lo [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Aṣa Fifi Sori Liana

O yoo fi sori `/usr/local/bin` nipasẹ aiyipada.

`/usr/local/bin` ko ba ni igbanilaaye kikọ yoo fi sii si `~/.bin` .

Ṣeto awọn oniyipada `TO` O le ṣalaye ilana fifi sori ẹrọ, fun apẹẹrẹ :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
