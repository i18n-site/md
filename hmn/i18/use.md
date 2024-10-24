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

Tsis [i18n.site/payBill](//i18n.site/payBill) , koj yuav tsum khi ib daim npav rho nyiaj rau kev them nyiaj (tsis tas yuav them rov qab, lub vev xaib yuav txiav tawm tus nqi raws li kev siv, [saib lub vev xaib rau tus nqi](/#price) ).

## Siv

### Demo Qhov Project

Thov xa mus rau qhov `i18` demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Cov neeg siv hauv Suav teb tuaj yeem clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Tom qab cloning, nkag mus rau hauv phau ntawv qhia thiab khiav `i18` kom tiav cov lus txhais.

### Directory Structure

Template warehouse directory structure yog raws li nram no

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

`.i18n/conf.yml` yog cov ntaub ntawv teeb tsa ntawm `i18` kab lus txhais cov cuab yeej

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

Yog tias koj xav txhais rau txhua yam lus uas txhawb nqa, thov tso tseg tom qab `:` . piv txwv

```
i18n:
  fromTo:
    en:
```

Koj tuaj yeem teeb tsa sib txawv `fromTo` : cov npe sib txawv ntawm cov ntaub ntawv /

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

### Tsis Quav Ntsej Cov Ntaub Ntawv

Los ntawm lub neej ntawd, tag nrho cov ntaub ntawv pib nrog `.md` thiab `.yml` nyob rau hauv cov npe hom lus yuav raug muab txhais.

Yog tias koj xav tsis quav ntsej qee cov ntaub ntawv thiab tsis txhais lawv (xws li cov ntawv sau tsis tiav), koj tuaj yeem siv `ignore` qhov kev teeb tsa.

`ignore` siv tib [globset](https://docs.rs/globset/latest/globset/#syntax) li cov ntaub ntawv `.gitignore` .

Piv txwv li, `_* ` hauv cov ntaub ntawv teeb tsa saum toj no txhais tau hais tias cov ntaub ntawv pib nrog `_` yuav tsis raug txhais.

## Txoj Cai Txhais Lus

### Cov Neeg Txhais Lus Yuav Tsum Tsis Txhob Ntxiv Lossis Rho Tawm Kab

Kev txhais lus yog kho tau. Hloov kho cov ntawv qub thiab tshuab-txhais nws dua, phau ntawv hloov kho rau kev txhais lus yuav tsis raug sau dua (yog tias kab lus no ntawm cov ntawv qub tsis tau hloov kho).

> [!WARN]
> Cov kab ntawm cov ntawv txhais lus thiab cov ntawv qub yuav tsum sib haum mus rau ib qho. Ntawd yog, tsis txhob ntxiv lossis rho tawm kab thaum sau cov lus txhais. Txwv tsis pub, nws yuav ua rau tsis meej pem hauv kev txhais lus kho cache.

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

Tej yaam num uas siv lub [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Custom Installation Directory

Nws yuav raug ntsia rau `/usr/local/bin` los ntawm lub neej ntawd.

Yog tias `/usr/local/bin` tsis muaj kev tso cai sau nws yuav raug ntsia rau `~/.bin` .

Kev teeb tsa ib puag ncig hloov pauv `TO` tuaj yeem txhais cov npe kev teeb tsa, piv txwv li :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```