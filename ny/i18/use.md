# Kwabasi Ndi Ntchito

## windows Choyamba Kukhazikitsa git bash

windows System, chonde [dinani apa kuti mutsitse ndikuyika `git bash`](https://git-scm.com/download/win) poyamba.

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

Kuphatikiza apo, muyenera [i18n.site/payBill](//i18n.site/payBill) kirediti kadi kuti mulipire (palibe kubwezanso komwe kumafunikira, tsamba lawebusayiti lidzangochotsa zolipiritsa malinga ndikugwiritsa ntchito, [onani tsamba loyamba lamitengo](/#price) ).

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

Pambuyo pomasulira fayilo yatsopano, fayilo yatsopano ya data idzapangidwa mu bukhuli Kumbukirani kuwonjezera `git add .` .

## Fayilo Yosintha

`.i18n/conf.yml` ndi fayilo yosinthira ya chida chomasulira mzere `i18`

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

Mutha kusintha `fromTo` pamitundu / Mafayilo alembedwa motere : .

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

M'ndandanda iyi yomasulira, chinenero chomasuliridwa mu katatalogu `blog` ndi `zh` , ndipo chinenero chomasuliridwa cha `blog/your_file_name.md` ndi `ja` .

### Nyalanyazani Fayilo

Mwachisawawa, mafayilo onse kuyambira `.md` ndi `.yml` mu bukhu lachiyankhulo choyambira adzamasuliridwa.

Ngati mukufuna kunyalanyaza mafayilo ena ndikusawamasulira (monga zolemba zosamalizidwa), mutha kuyisintha ndi gawo la `ignore` .

`ignore` imagwiritsa ntchito [globset](https://docs.rs/globset/latest/globset/#syntax) ofanana ndi fayilo `.gitignore` .

Mwachitsanzo, `_* ` mu fayilo yosinthidwa pamwambapa ikutanthauza kuti mafayilo oyambira ndi `_` sadzamasuliridwa.

## Malamulo Omasulira

### Omasulira Sayenera Kuwonjezera Kapena Kuchotsa Mizere

Zomasulirazo ndi zosinthidwa. Sinthani mawu oyambilira ndikumasuliranso pamakina, zosintha pamanja zomasulira sizidzalembedwanso (ngati ndime iyi yamawu oyamba sinasinthidwe).

Koma chonde dziwani kuti mizere yomasulira ndi mawu oyamba ayenera kugwirizana ndi umodzi ndi umodzi. Ndiko kuti, musawonjezere kapena kuchotsa mizere polemba zomasulira. Kupanda kutero, zitha kuyambitsa chisokonezo mu kachesi yosintha yomasulira.

Ngati china chake sichikuyenda bwino, chonde onani [FAQ kuti mupeze mayankho.](/i18/qa#H1)

### `YAML` Zomasulira

Chida cha mzere wolamula chidzapeza mafayilo onse omwe amatha ndi `.yml` mu chikwatu cha fayilo ya chilankhulo ndikumasulira.

* Dziwani kuti suffix ya dzina lafayilo iyenera kukhala `.yml` (osati `.yaml` ).

Chidachi chimangomasulira mayendedwe a mtanthauzira mawu mu `.yml` , osati makiyi a mtanthauzira mawu.

Mwachitsanzo `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

idzamasuliridwa ngati `i18n/zh/i18n.yml`

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

Ma projekiti omwe amagwiritsa ntchito kamangidwe ka [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Chikwatu Chokhazikitsa Mwamakonda

Idzakhazikitsidwa ku `/usr/local/bin` mwachisawawa.

Ngati `/usr/local/bin` ilibe chilolezo cholembera idzayikidwa ku `~/.bin` .

Kukhazikitsa kusintha kwa chilengedwe `TO` kumatha kutanthauzira chikwatu chokhazikitsa, mwachitsanzo :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```