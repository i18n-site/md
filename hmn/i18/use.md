# Nruab Thiab Siv

## windows Ua Ntej Nruab git bash

windows System, thov [nyem qhov no mus download tau thiab nruab `git bash` ua ntej](https://git-scm.com/download/win) .

Khiav cov haujlwm tom ntej hauv `git bash` .

## Nruab

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configure Translation Token

Mus saib [i18n.site/token](//i18n.site/token) Nyem rau luam theej duab

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Tsim `~/.config/i18n.site.yml` , muab cov ntsiab lus theej rau hauv nws, cov ntsiab lus yog raws li hauv qab no:

```
token: YOUR_API_TOKEN
```

Tsis tas li ntawd [,](/#price) koj yuav tsum tau khi ib daim credit card rau hauv [i18n.site/payBill](//i18n.site/payBill)

## Siv

### Demo Qhov Project

Thov xa mus rau qhov `i18` demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Cov neeg siv hauv Suav teb tuaj yeem clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Tom qab cloning, nkag mus rau hauv phau ntawv qhia thiab khiav `i18` kom tiav cov lus txhais.

### Directory Structure

Lub template warehouse directory qauv yog raws li nram no

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Cov ntaub ntawv txhais lus demo hauv `en` phau ntawv qhia tsuas yog ua piv txwv thiab tuaj yeem raug tshem tawm.

### Khiav Kev Txhais Lus

Nkag mus rau hauv phau ntawv qhia thiab khiav `i18` los txhais.

Ntxiv nrog rau qhov kev txhais lus, qhov kev zov me nyuam tseem yuav tsim cov `.i18n/data` nplaub tshev, thov ntxiv nws rau qhov chaw khaws cia.

Tom qab txhais cov ntaub ntawv tshiab, cov ntaub ntawv tshiab yuav raug tsim tawm hauv phau ntawv qhia no Nco ntsoov ntxiv `git add . ` .

## Configuration File

`.i18n/conf.yml` yog cov ntaub ntawv teeb tsa ntawm `i18` cov kab lus txhais lus

Cov ntsiab lus yog raws li nram no:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Lus Txhais &

Nyob rau hauv cov ntaub ntawv configuration, tus subordinate ntawm `fromTo` :

`en` yog hom lus, `zh ja ko de fr` yog hom lus ntawm kev txhais lus.

Lus code saib [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Piv txwv li, yog tias koj xav txhais lus Suav ua lus Askiv, rov sau cov kab no `zh: en` .

Yog tias koj xav txhais rau txhua yam lus txhawb nqa, thov tso tseg tom qab `:` . piv txwv

```
i18n:
  fromTo:
    en:
```

Koj tuaj yeem kho qhov sib txawv `fromTo` : cov npe sib txawv ntawm cov ntaub ntawv /

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

Nyob rau hauv lub configuration table no, lub hauv paus lus ntawm catalog `blog` txhais lus yog `zh` , thiab lub hauv paus lus ntawm catalog `blog/your_file_name.md` translation yog `ja` .

### Ntau Hom Duab / Txuas

Thaum cov URLs hauv cov duab thiab cov txuas hauv `replace:` thiab `MarkDown` (thiab `src` thiab `href` tus cwj pwm ntawm kos `HTML` ) tau teeb tsa hauv `.i18n/conf.yml` nrog cov lus sau ua ntej, cov lus code hauv URL yuav raug hloov los ntawm cov lus ntawm kev txhais lus ( [lus lis code](/i18/LANG_CODE) ).

Piv txwv li, koj configuration yog raws li nram no:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` yog phau ntawv txhais lus, tus yuam sij yog qhov URL ua ntej hloov, thiab tus nqi yog txoj cai hloov.

Lub ntsiab lus ntawm kev hloov txoj cai `ko de uk>ru zh-TW>zh >en` saum toj no yog tias `ko de` siv daim duab ntawm lawv tus kheej hom lus, `zh-TW` thiab `zh` siv daim duab `zh` , `uk` siv daim duab `ru` , thiab lwm yam lus (xws li `ja` ) siv daim duab ntawm `en` los ntawm default.

Piv txwv li, Fabkis ( `fr` ) cov ntaub ntawv ntawm `MarkDown` yog raws li hauv qab no :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Cov ntaub ntawv txhais thiab tsim ua lus Askiv ( `en` ) yog raws li hauv qab no :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Ntawm no, `/en/` nyob rau hauv cov lus qhov chaws hloov nrog `/zh/` hauv hom lus.

`/` ntsoov :

> [!TIP]
> Yog tias `- /` tau teeb tsa hauv `url:` , tsuas yog txoj hauv kev txheeb ze yuav raug sib koom ua ke, tab sis URLs pib nrog `//` yuav tsis sib xws.
>
> Yog tias qee qhov txuas ntawm lub npe sau npe xav hloov thiab qee qhov tsis xav hloov, koj tuaj yeem siv cov npe sib txawv xws li `[x](//x.com/en/)` thiab `[x](https://x.com/en/)` kom paub qhov txawv.

### Tsis Quav Ntsej Cov Ntaub Ntawv

Los ntawm lub neej ntawd, tag nrho cov ntaub ntawv pib nrog `.md` thiab `.yml` nyob rau hauv cov npe hom lus yuav raug muab txhais.

Yog tias koj xav tsis quav ntsej qee cov ntaub ntawv thiab tsis txhais lawv (xws li cov ntawv sau tsis tiav), koj tuaj yeem teeb tsa nws nrog `ignore` daim teb.

`ignore` siv tib [globset](https://docs.rs/globset/latest/globset/#syntax) li cov ntaub ntawv `.gitignore` .

Piv txwv li, `_* ` hauv cov ntaub ntawv teeb tsa saum toj no txhais tau hais tias cov ntaub ntawv pib nrog `_` yuav tsis raug txhais.

## Txoj Cai Txhais Lus

### Cov Neeg Txhais Lus Yuav Tsum Tsis Txhob Ntxiv Lossis Rho Tawm Kab

Kev txhais lus yog kho tau. Hloov kho cov ntawv qub thiab tshuab-txhais nws dua, phau ntawv hloov kho rau kev txhais lus yuav tsis raug sau dua (yog tias kab lus no ntawm cov ntawv qub tsis tau hloov kho).

> [!WARN]
> Yuav tsum muaj kev sib txuas lus ib-rau-ib ntawm cov kab ntawm kev txhais lus thiab cov ntawv qub. Ntawd yog, tsis txhob ntxiv lossis rho tawm kab thaum sau cov lus txhais. Txwv tsis pub, nws yuav ua rau tsis meej pem hauv kev txhais lus kho cache.

Yog tias muaj qee yam tsis raug, thov xa mus rau [FAQ rau kev daws teeb meem.](/i18/qa#H1)

### `YAML` Kev Txhais Lus

Cov cuab yeej kab hais kom ua yuav pom tag nrho cov ntaub ntawv xaus nrog `.yml` hauv cov ntawv teev lus cov ntaub ntawv thiab txhais lawv.

* Nco ntsoov tias cov npe ntawm cov npe yuav tsum yog `.yml` (tsis yog `.yaml` ).

Cov cuab yeej tsuas txhais cov phau ntawv txhais lus muaj nuj nqis hauv `.yml` , tsis yog phau ntawv txhais lus yuam sij.

Piv txwv li `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

yuav txhais ua `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Kev txhais lus ntawm `YAML` kuj tuaj yeem hloov kho manually (tab sis tsis txhob ntxiv lossis rho tawm cov yuam sij lossis kab hauv kev txhais lus).

Raws li `YAML` txhais lus, koj tuaj yeem tsim cov kev daws teeb meem thoob ntiaj teb yooj yim rau ntau hom lus programming.

## Kev Siv Advanced

### Txhais Lus Subdirectory

Ntev npaum li `.i18n/conf.yml` yog tsim (tsis tas yuav pib los ntawm qhov project demo txhua lub sijhawm), `i18` yuav ua haujlwm zoo.

Cov cuab yeej kab hais kom ua yuav pom `.i18n/conf.yml` teeb tsa hauv txhua qhov subdirectories thiab txhais lawv.

Tej yaam num uas siv cov [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Custom Installation Directory

Nws yuav raug ntsia rau `/usr/local/bin` los ntawm lub neej ntawd.

Yog tias `/usr/local/bin` tsis muaj kev tso cai sau nws yuav raug ntsia rau `~/.bin` .

Kev teeb tsa ib puag ncig hloov pauv `TO` tuaj yeem txhais cov npe kev teeb tsa, piv txwv li :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```