# Kwabasi Ndi Ntchito

## windows Choyamba Kukhazikitsa git bash

windows System, chonde [dinani apa kuti mutsitse ndikuyika `git bash` poyamba](https://git-scm.com/download/win) .

Yendetsani ntchito zotsatila mu `git bash` .

## Ikani

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konzani Chizindikiro Chomasulira

Pitani ku [i18n.site/token](//i18n.site/token) Dinani kuti mukopere chizindikiro

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Pangani `~/.config/i18n.site.yml` , ikani zomwe mwakoperamo, zomwe zili motere:

```
token: YOUR_API_TOKEN
```

Kuphatikiza apo, muyenera kumangirira kirediti kadi [yolipirira](/#price) mu [i18n.site/payBill](//i18n.site/payBill)

## Ntchito

### Ntchito Yowonetsera

Chonde onani pulojekiti yowonetsera [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) muphunzire kusinthika kwa `i18` kumasulira.

Ogwiritsa ntchito ku China akhoza kutengera [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Mukamaliza kupanga, lowetsani chikwatu ndikuyendetsa `i18` kuti mumalize kumasulira.

### Kapangidwe Ka Ndandanda

Mapangidwe a template warehouse directory ali motere

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Mafayilo achiwonetsero omasuliridwa mu bukhu la `en` ndi chitsanzo chabe ndipo akhoza kuchotsedwa.

### Thamangani Kumasulira

Lowetsani chikwatu ndikuyendetsa `i18` kuti mumasulire.

Kuphatikiza pa kumasulira, pulogalamuyi ipanganso chikwatu cha `.i18n/data` , chonde yonjezerani kumalo osungirako.

Pambuyo pomasulira fayilo yatsopano, fayilo yatsopano ya data idzapangidwa mu bukhuli Kumbukirani kuwonjezera `git add . ` .

## Fayilo Yosintha

`.i18n/conf.yml` ndi fayilo yosinthira ya chida chomasulira mzere wa `i18`

Zomwe zilimo ndi izi:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Chinenero Chomasulira &

Mu fayilo yosinthika, subordinate ya `fromTo` :

`en` ndiye chilankhulo choyambirira, `zh ja ko de fr` ndiye chilankhulo chomwe amamasulira.

Chilankhulo kodi [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Mwachitsanzo, ngati mukufuna kumasulira Chitchaina kupita ku Chingerezi, lembaninso mzerewu `zh: en` .

Ngati mukufuna kumasulira kuzilankhulo zonse zothandizidwa, chonde siyani kanthu pambuyo pa `:` . Mwachitsanzo

```
i18n:
  fromTo:
    en:
```

Mutha kusintha `fromTo` osiyanasiyana / Mafayilo alembedwa motere :

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

Pazomasulira izi, chilankhulo choyambirira cha zomasulira `blog` ndi `zh` , ndipo chilankhulo chomasulira cha katatalogu `blog/your_file_name.md` ndi `ja` .

### Zithunzi / Maulalo Azilankhulo Zambiri

Pamene ma URL pazithunzi ndi maulalo mu `replace:` ndi `MarkDown` (ndi `src` ndi `href` zophatikizidwa `HTML` ) akonzedwa mu `.i18n/conf.yml` ndi mawu oyambawa, chilankhulo cha gwero mu ulalo chidzasinthidwa ndi chilankhulo chomasulira ( [chinenero. kodi list](/i18/LANG_CODE) ).

Mwachitsanzo, masinthidwe anu ali motere:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` ndi dikishonale, fungulo ndi prefix ya URL yomwe iyenera kusinthidwa, ndipo mtengo wake ndi lamulo lolowa m'malo.

Tanthauzo la kusintha lamulo la `ko de uk>ru zh-TW>zh >en` pamwambapa nlakuti `ko de` amagwiritsa ntchito chithunzi cha khodi ya chinenero chawo, `zh-TW` ndi `zh` amagwiritsa ntchito chithunzi cha `zh` , `uk` amagwiritsa ntchito chithunzi cha `ru` , ndipo zinenero zina (monga `ja` ) amagwiritsa ntchito chithunzichi. mwa `en` mwachisawawa.

Mwachitsanzo, fayilo yachi French ( `fr` ) yochokera ku `MarkDown` ili motere :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Fayilo yomasuliridwa ndi kupangidwa ya Chingerezi ( `en` ) ili motere :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Pano, `/en/` mu khodi ya chinenero choyambira amasinthidwa ndi `/zh/` m'chinenero chomwe akulozera.

: `/`

> [!TIP]
> Ngati `- /` ikonzedwa mu `url:` , njira zofananira ndizofanana, koma ma URL oyambira ndi `//` sangafanane.
>
> Ngati maulalo ena a domain name akufuna kusinthidwa ndipo ena sakufuna kusinthidwa, mutha kugwiritsa ntchito ma prefixes osiyanasiyana monga `[x](//x.com/en/)` ndi `[x](https://x.com/en/)` kuti muwasiyanitse.

### Nyalanyazani Fayilo

Mwachisawawa, mafayilo onse kuyambira `.md` ndi `.yml` mu bukhu lachiyankhulo choyambira adzamasuliridwa.

Ngati mukufuna kunyalanyaza mafayilo ena ndikusawamasulira (monga zolemba zosamalizidwa), mutha kuyisintha ndi gawo la `ignore` .

`ignore` imagwiritsa ntchito mawu [globset](https://docs.rs/globset/latest/globset/#syntax) ndi fayilo ya `.gitignore` .

Mwachitsanzo, `_* ` mu fayilo yosinthidwa pamwambapa ikutanthauza kuti mafayilo oyambira ndi `_` sadzamasuliridwa.

## Malamulo Omasulira

### Omasulira Sayenera Kuwonjezera Kapena Kuchotsa Mizere

Zomasulirazo ndi zosinthidwa. Sinthani mawu oyambilira ndikumasuliranso pamakina, zosintha pamanja zomasulira sizidzalembedwanso (ngati ndime iyi yamawu oyamba sinasinthidwe).

> [!WARN]
> Payenera kukhala kugwirizana pakati pa mizere yomasulira ndi malemba oyambirira. Ndiko kuti, musawonjezere kapena kuchotsa mizere polemba zomasulira. Kupanda kutero, zitha kuyambitsa chisokonezo mu kachesi yosintha yomasulira.

Ngati china chake sichikuyenda bwino, chonde onani [FAQ kuti mupeze mayankho.](/i18/qa#H1)

### `YAML` Zomasulira

Chida cha mzere wolamula chidzapeza mafayilo onse omwe akutha ndi `.yml` mu chikwatu cha fayilo ya chilankhulo ndikumasulira.

* Dziwani kuti suffix ya dzina lafayilo iyenera kukhala `.yml` (osati `.yaml` ).

Chidachi chimangomasulira mayendedwe a mtanthauzira mawu mu `.yml` , osati makiyi a mtanthauzira mawu.

Mwachitsanzo `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

idzasinthidwa ngati `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Kumasulira kwa `YAML` kungathenso kusinthidwa pamanja (koma osawonjezera kapena kuchotsa makiyi kapena mizere mukumasulira).

Kutengera kumasulira `YAML` , mutha kupanga zovuta zapadziko lonse lapansi zamitundu yosiyanasiyana yamapulogalamu.

## Kugwiritsa Ntchito Mwaukadaulo

### Gulu Laling'ono Lomasulira

Malingana ngati `.i18n/conf.yml` idapangidwa (palibe chifukwa choyambira pachiwonetsero cha polojekiti nthawi zonse), `i18` idzagwira ntchito bwino.

Chida cha mzere wolamula chidzapeza masinthidwe `.i18n/conf.yml` m'ma subdirectories onse ndikuwamasulira.

Ma projekiti omwe amagwiritsa ntchito kamangidwe [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Chikwatu Chokhazikitsa Mwamakonda

Idzakhazikitsidwa ku `/usr/local/bin` mwachisawawa.

Ngati `/usr/local/bin` ilibe chilolezo cholembera idzayikidwa ku `~/.bin` .

Kukhazikitsa kusintha kwa chilengedwe `TO` kumatha kutanthauzira chikwatu chokhazikitsa, mwachitsanzo :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```