# Fi Sori Ẹrọ Ati Lo

## windows Akọkọ Fi git bash Sori Ẹrọ

windows , jọwọ [tẹ ibi lati ṣe igbasilẹ ati fi sori ẹrọ `git bash` akọkọ](https://git-scm.com/download/win) .

Ṣiṣe awọn iṣẹ atẹle ni `git bash` .

## Fi Sori Ẹrọ

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Ṣe Atunto Àmi Itumọ

Ṣabẹwo [i18n.site/token](//i18n.site/token) Tẹ lati daakọ aami

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Ṣẹda `~/.config/i18n.site.yml` , lẹẹmọ akoonu ti a daakọ sinu rẹ, akoonu jẹ bi atẹle:

```
token: YOUR_API_TOKEN
```

Ni afikun, o nilo lati di kaadi kirẹditi [isanwo](/#price) ni [i18n.site/payBill](//i18n.site/payBill)

## Lo

### Ririnkiri Ise Agbese

Jọwọ tọkasi iṣẹ akanṣe [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) lati kọ ẹkọ iṣeto ti itumọ `i18` .

Awọn olumulo ni China le oniye [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Lẹhin ti cloning, tẹ iwe ilana naa ki o si ṣiṣẹ `i18` lati pari itumọ naa.

### Ilana Itọnisọna

Ilana ilana ile itaja awoṣe jẹ bi atẹle

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Awọn faili demo ti a tumọ ninu itọsọna `en` jẹ apẹẹrẹ nikan ati pe o le paarẹ.

### Ṣiṣe Itumọ

Tẹ itọsọna naa ki o si ṣiṣẹ `i18` lati tumọ.

Ni afikun si itumọ, eto naa yoo tun ṣe agbekalẹ folda `.i18n/data` , jọwọ ṣafikun si ibi ipamọ naa.

Lẹhin titumọ faili tuntun, faili data tuntun yoo ṣe ipilẹṣẹ ninu itọsọna yii Ranti lati fi `git add . ` kun.

## Faili Iṣeto Ni

`.i18n/conf.yml` jẹ faili atunto ti irinṣẹ itumọ laini aṣẹ `i18`

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

Ninu faili iṣeto ni, abẹlẹ ti `fromTo` :

`en` jẹ ede orisun, `zh ja ko de fr` jẹ ede ibi-afẹde ti itumọ.

Koodu ede wo [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Fun apẹẹrẹ, ti o ba fẹ tumọ Kannada si Gẹẹsi, tun laini yii kọ `zh: en` .

Ti o ba fẹ tumọ si gbogbo awọn ede ti o ni atilẹyin, jọwọ fi silẹ ni ofifo lẹhin `:` . fun apere

```
i18n:
  fromTo:
    en:
```

O le tunto oriṣiriṣi `fromTo` : oriṣiriṣi awọn iwe-iṣakoso awọn faili /

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

Ninu tabili iṣeto ni yii, ede orisun ti itumọ katalogi `blog` jẹ `zh` , ati ede orisun ti itumọ katalogi `blog/your_file_name.md` jẹ `ja` .

### Multilingual Images / Ìjápọ

Nigbati awọn URL ti o wa ninu awọn aworan ati awọn ọna asopọ ni `replace:` ati `MarkDown` (ati awọn ẹya `src` ati `href` ti ifibọ `HTML` ) ti wa ni tunto ni `.i18n/conf.yml` pẹlu ìpele yii, koodu orisun ni URL yoo rọpo nipasẹ koodu ede ti itumọ ( [ede akojọ koodu](/i18/LANG_CODE) ).

Fun apẹẹrẹ, iṣeto rẹ jẹ bi atẹle:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` jẹ iwe-itumọ, bọtini naa jẹ asọtẹlẹ URL lati paarọ rẹ, ati pe iye naa jẹ ofin rirọpo.

Itumọ ti rirọpo ofin `ko de uk>ru zh-TW>zh >en` loke ni pe `ko de` lo aworan koodu ede tiwọn, `zh-TW` ati `zh` lo aworan `zh` , `uk` lo aworan ti `ru` , ati awọn ede miiran (bii `ja` ) lo aworan naa. ti `en` nipa aiyipada.

Fun apẹẹrẹ, faili orisun Faranse ( `fr` ) ti `MarkDown` jẹ bi atẹle :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Faili ti a tumọ ati ti ipilẹṣẹ Gẹẹsi ( `en` ) jẹ bi atẹle :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Nibi, `/en/` ti o wa ninu koodu ede orisun ti rọpo pẹlu `/zh/` ni ede ibi-afẹde.

Akiyesi : `/` gbọdọ wa ṣaaju ati lẹhin koodu ede ti ọrọ ti o rọpo ninu URL.

> [!TIP]
> Ti `- /` ba tunto ni `url:` , awọn ọna ibatan nikan ni yoo baamu, ṣugbọn awọn URL ti o bẹrẹ pẹlu `//` kii yoo baamu.
>
> Ti diẹ ninu awọn ọna asopọ ti orukọ ìkápá kan fẹ lati rọpo ati diẹ ninu awọn ko fẹ paarọ rẹ, o le lo awọn ami-iṣaaju oriṣiriṣi bii `[x](//x.com/en/)` ati `[x](https://x.com/en/)` lati ṣe iyatọ wọn.

### Foju Faili

Nipa aiyipada, gbogbo awọn faili ti o bẹrẹ pẹlu `.md` ati `.yml` ninu itọsọna ede orisun yoo jẹ itumọ.

Ti o ba fẹ foju foju kọ awọn faili kan ati pe ko tumọ wọn (gẹgẹbi awọn iyaworan ti ko pari), o le tunto rẹ pẹlu aaye `ignore` .

`ignore` nlo [globset](https://docs.rs/globset/latest/globset/#syntax) kanna bi faili `.gitignore` naa.

Fun apẹẹrẹ, `_* ` ninu faili iṣeto ni oke tumọ si pe awọn faili ti o bẹrẹ pẹlu `_` kii yoo tumọ.

## Awọn Ofin Itumọ

### Awọn Olootu Itumọ Ko Yẹ Ki O Ṣafikun Tabi Pa Awọn Laini Rẹ

Itumọ jẹ ṣiṣatunṣe. Ṣe atunṣe ọrọ atilẹba ati ẹrọ-tumọ lẹẹkansii, awọn iyipada afọwọṣe si itumọ naa kii yoo tun kọ (ti paragirafi yii ti ọrọ atilẹba ko ba ti yipada).

> [!WARN]
> Ifiweranṣẹ ọkan-si-ọkan gbọdọ wa laarin awọn ila ti itumọ ati ọrọ atilẹba. Iyẹn ni, maṣe ṣafikun tabi paarẹ awọn laini rẹ nigbati o ba n ṣajọ itumọ naa. Bibẹẹkọ, yoo fa idarudapọ ninu kaṣe ṣiṣatunṣe itumọ.

Ti nkan kan ba jẹ aṣiṣe, jọwọ tọka si [FAQ fun awọn ojutu.](/i18/qa#H1)

### `YAML` Awọn Itumọ

Ọpa laini aṣẹ yoo wa gbogbo awọn faili ti o pari pẹlu `.yml` ninu itọsọna faili ede orisun ati tumọ wọn.

* Ṣe akiyesi pe suffix filename gbọdọ jẹ `.yml` (kii ṣe `.yaml` ).

Ohun elo nikan tumọ awọn iye iwe-itumọ ni `.yml` , kii ṣe awọn bọtini iwe-itumọ.

Fun apẹẹrẹ `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

yoo tumọ bi `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Itumọ ti `YAML` tun le ṣe atunṣe pẹlu ọwọ (ṣugbọn maṣe ṣafikun tabi paarẹ awọn bọtini tabi awọn laini ninu itumọ).

Da lori itumọ `YAML` , o le ni rọọrun kọ awọn solusan agbaye fun ọpọlọpọ awọn ede siseto.

## Lilo Ilọsiwaju

### Ipilẹ Iwe-Itumọ

Niwọn igba ti `.i18n/conf.yml` ti ṣẹda (ko si iwulo lati bẹrẹ lati awoṣe iṣẹ akanṣe demo ni gbogbo igba), `i18` yoo ṣiṣẹ daradara.

Ọpa laini aṣẹ yoo wa awọn atunto `.i18n/conf.yml` ni gbogbo awọn iwe-ipamọ ati tumọ wọn.

Awọn iṣẹ akanṣe ti o lo [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Aṣa Fifi Sori Liana

Yoo fi sori ẹrọ si `/usr/local/bin` nipasẹ aiyipada.

Ti `/usr/local/bin` ko ba ni igbanilaaye kikọ yoo fi sii si `~/.bin` .

Ṣiṣeto oniyipada ayika `TO` le ṣalaye itọsọna fifi sori ẹrọ, fun apẹẹrẹ :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```